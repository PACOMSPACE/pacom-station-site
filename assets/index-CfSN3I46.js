(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const $ of i.addedNodes)$.tagName==="LINK"&&$.rel==="modulepreload"&&s($)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();const r={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},U={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[r.projectId,r.project1Id],allowedBuildingIds:[r.buildingId,r.buildingFId],allowedFloorIds:[r.lockedFloor8Id,r.floorId,r.lockedFloor6Id],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId,r.buildingFId],allowedFloorIds:[r.lockedFloor8Id,r.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId],allowedFloorIds:[r.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId],allowedFloorIds:[r.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId],allowedFloorIds:[r.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},se="pacom.web.demo.role";class ke{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){const e=sessionStorage.getItem(se);e&&U[e]&&(this.activeSession=structuredClone(U[e]));const a=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:r.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:a,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:a,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:r.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:a,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:a,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:r.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:a,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:a,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:r.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:a,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:a,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:a,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:a,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:r.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:a,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:r.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:a,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:a,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:a,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:a},{id:"conn-e7f-dali",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:a},{id:"conn-e7f-modbus",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:r.projectId,floorId:r.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:r.projectId,floorId:r.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:r.projectId,floorId:r.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:r.projectId,floorId:r.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:r.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:r.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:a,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:r.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:a,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:r.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:a,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:r.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:a,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:r.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:a,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:r.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:a,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(U).map((s,o)=>({userId:s.userId,displayName:s.displayName,email:`${s.role.replaceAll("_",".")}@pacom.local`,role:s.role,roleLabel:s.roleLabel,scopeSummary:s.scope.allowedZoneIds?.length?`E栋 7F（${s.scope.allowedZoneIds.length} 个我的区域）`:`${s.scope.allowedProjectIds.length} 项目 / ${s.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:o===0?a:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(e,a,s,o,i){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:a,endpoint:s,request:i,response:o}),this.traces.length>40&&this.traces.pop()}pushAudit(e,a,s,o){const i=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:i?.displayName??"anonymous",role:i?.role??"member",action:e,target:a,result:s,detail:o})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){if(!e.account.trim()||!e.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const a=e.account.includes("admin")?"org_admin":e.account.includes("eng")?"commissioning_engineer":e.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(U[a]),sessionStorage.setItem(se,a),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:e.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(se),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(e){return this.activeSession=structuredClone(U[e]),sessionStorage.setItem(se,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}async getSpatialTree(){const e=this.requireSession(),a=[{id:r.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"},{id:r.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"}],s=[{id:r.buildingId,projectId:r.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.png"},{id:r.buildingFId,projectId:r.projectId,name:"F栋",aboveFloors:12,belowFloors:2,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.png"}],o={projects:a.filter(i=>e.scope.allowedProjectIds.includes(i.id)),buildings:s.filter(i=>e.scope.allowedBuildingIds.includes(i.id)),floors:[{id:r.lockedFloor8Id,buildingId:r.buildingId,kind:"above",level:8,name:"8F",plan:null},{id:r.floorId,buildingId:r.buildingId,kind:"above",level:7,name:"7F",areaSqm:1383.1,plan:{floorId:r.floorId,imageUrl:"./media/7F.webp",planVersion:1,updatedAt:"2026-11-22T00:00:00Z"}},{id:r.lockedFloor6Id,buildingId:r.buildingId,kind:"above",level:6,name:"6F",plan:null}],zones:[{id:"zone-e7f-lab-east",floorId:r.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:r.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:r.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:r.floorId,name:"核心走廊与弱电井",category:"corridor"}]};return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:o.projects.length,buildings:o.buildings.length,floors:o.floors.length}),o}async getFloorDevices(e){const a=this.requireSession();if(!a.scope.allowedFloorIds.includes(e)){const o={code:"FORBIDDEN",status:403,message:`当前角色「${a.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,o),this.pushAudit("floor.read",e,"denied",o.message),new Error(`403 FORBIDDEN: ${o.message}`)}if(e!==r.floorId)return[];let s=structuredClone(this.devices);return a.scope.allowedZoneIds?.length&&(s=s.filter(o=>o.logicalZoneId&&a.scope.allowedZoneIds.includes(o.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:s.length}),s}async dispatchControlBatch(e){const a=this.requireSession();if(!a.scope.canControlDevices||!a.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权下发控制指令`);const s=`batch-e7f-${Date.now().toString(36)}`,o={batchId:s,floorId:e.floorId,createdBy:a.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(i=>({deviceId:i.deviceId,command:i.command,targetValue:i.targetValue,status:"queued"}))};return this.batches.set(s,o),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",o,e),this.pushAudit("control.dispatch",s,"success",`下发 ${e.targets.length} 台设备`),o.receipts.forEach((i,$)=>{const S=this.devices.find(d=>d.id===i.deviceId);setTimeout(()=>{i.status="dispatched",i.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:s,deviceId:i.deviceId,status:"dispatched",at:i.dispatchedAt})},280+$*120),setTimeout(()=>{const d=new Date().toISOString();!S||S.connectivity==="offline"?(i.status="timeout",i.errorCode="GATEWAY_READBACK_TIMEOUT",i.errorMessage="设备离线，网关未收到回读确认",i.verifiedAt=d):(i.status="verified_success",i.observedValue=i.targetValue,i.verifiedAt=d,this.applyObservedTelemetry(S,i.command,i.targetValue,d)),this.emit({type:"control.receipt.updated",batchId:s,deviceId:i.deviceId,status:i.status,observedValue:i.observedValue,at:d})},900+$*220)}),structuredClone(o)}applyObservedTelemetry(e,a,s,o){a==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:s,collectedAt:o,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(s)>0,collectedAt:o,stale:!1})):(a==="lighting.power"||a==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:s,collectedAt:o,stale:!1}:a==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:s,collectedAt:o,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:o,values:{[a]:s}})}async getControlBatch(e){this.requireSession();const a=this.batches.get(e);if(!a)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(a)}async listAlarms(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==r.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,a){const s=this.requireSession();if(!s.scope.canManageAlarms){const i=`角色「${s.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",i),new Error(`403 FORBIDDEN: ${i}`)}const o=this.alarms.find(i=>i.id===e);if(!o)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return o.status="acknowledged",o.acknowledgedAt=new Date().toISOString(),o.acknowledgedBy=s.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,o,{note:a}),this.pushAudit("alarm.acknowledge",e,"success",a),this.emit({type:"alarm.changed",floorId:o.floorId,alarmId:e,status:"acknowledged",at:o.acknowledgedAt}),structuredClone(o)}async listWorkOrders(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==r.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权创建工单`);const s=new Date().toISOString(),o={id:`wo-e7f-${Date.now().toString(36)}`,projectId:r.projectId,buildingId:r.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:s,updatedAt:s};if(this.workOrders.unshift(o),e.alarmId){const i=this.alarms.find($=>$.id===e.alarmId);i&&(i.workOrderId=o.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",o,e),this.pushAudit("work_order.create",o.id,"success",o.title),structuredClone(o)}async updateWorkOrderStatus(e,a){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权流转工单`);const o=this.workOrders.find(i=>i.id===e);if(!o)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return o.status=a,o.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,o,{status:a}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${a}`),structuredClone(o)}async updateDevicePlanPoint(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权编辑图纸标点`);const s=this.devices.find(o=>o.id===e.deviceId);if(!s)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(s.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${s.version}，请刷新后重试`);return s.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},s.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,s,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${s.planPoint.x}, ${s.planPoint.y})`),structuredClone(s)}async updateDeviceHardwareBinding(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权修改硬件绑定`);const s=this.devices.find(i=>i.id===e.deviceId);if(!s)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(s.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${s.version}）`);const o=new Date().toISOString();return s.physicalInstalled=e.physicalInstalled,s.physicalVerifiedAt=e.physicalInstalled?o:null,s.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:o,boundBy:a.displayName},s.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,s,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(s)}async listConnections(e){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权冻结交付批次`);const o=this.devices.filter($=>$.physicalInstalled&&$.hardwareBinding).length,i={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:r.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:o,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:s.displayName,note:a||"例行交付基线冻结"};return this.deliveryBatches.unshift(i),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,i,{note:a}),this.pushAudit("delivery.freeze",i.id,"success",`${o}/${this.devices.length} 已现场核验`),structuredClone(i)}async getAnalysisReport(e,a,s){this.requireSession();const o=a==="today"?1:a==="7d"?7:30,$={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*o)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*o).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(j=>j.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*o).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*o).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*o).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],S=a==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],d={category:e,range:a,scopeId:s,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:$.kpis,unit:$.unit,series:$.base.map((j,I)=>({label:S[I],value:Math.round(j*(e==="energy"||e==="carbon"?o/2+.5:1)),baseline:Math.round(j*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:$.base[3],unit:$.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:$.base[4],unit:$.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:$.base[1],unit:$.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${a}&scopeId=${s}`,{kpis:d.kpis.length}),d}async listScenes(e){return this.requireSession(),structuredClone(this.scenes)}async createScene(e){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const s={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(s),this.record("REST","createScene","POST /api/v1/scenes",s,e),this.pushAudit("scene.create",s.id,"success",s.name),structuredClone(s)}async executeScene(e){const a=this.scenes.find(o=>o.id===e);if(!a)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const s=await this.dispatchControlBatch({floorId:a.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:a.actions,reason:`触发场景：${a.name}`});return a.lastExecutedAt=new Date().toISOString(),a.lastBatchId=s.batchId,s}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:r.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,a,s){this.requireSession();const o=s>=this.calendar.nightGuardStart?`下班时间 ${s} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,i=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${a} - ${s}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${a} (-30m) ~ ${s} (+30m)`,conflictWarning:o},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:o}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",i,{workdayStart:a,workdayEnd:s}),i}async saveWorkCalendar(e,a,s,o){const i=this.requireSession();if(!i.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权修改运行日历`);if(this.calendar.version!==o)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(a>=s)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:a,workdayEnd:s,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:a,workdayEnd:s,expectedVersion:o}),this.pushAudit("settings.calendar",r.projectId,"success",`${a}-${s}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,a,s){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权启停运行规则`);const i=this.rules.find($=>$.id===e);if(!i)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(i.version!==s)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${i.version}）`);return i.enabled=a,i.version+=1,i.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,i,{enabled:a,expectedVersion:s}),this.pushAudit("settings.rule_toggle",e,"success",a?"启用":"停用"),structuredClone(i)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,a){const s=this.requireSession();if(s.role!=="org_admin"&&s.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const o=U[a],i={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:a,roleLabel:o.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(i),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",i,{email:e,role:a}),this.pushAudit("org.invite",e,"success",o.roleLabel),structuredClone(i)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(e,a){return e!==r.floorId?()=>{}:(this.listeners.add(a),()=>{this.listeners.delete(a)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${r.floorId}`,e),this.listeners.forEach(a=>a(e))}}function Ee(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new ke}async function Ae(t,e,a,s,o){let i="profile",$=await e.listOrgMembers(),S=await e.listAuditLogs(),d="",j="all",I="all",k="all",T=!1,L=!1,A="";async function y(){[$,S]=await Promise.all([e.listOrgMembers(),e.listAuditLogs()]),c()}function c(){const P=e.mode==="demo"&&typeof e.switchDemoRole=="function",B=d.trim().toLowerCase(),C=$.filter(g=>j!=="all"&&g.role!==j?!1:B?`${g.displayName} ${g.email} ${g.roleLabel} ${g.scopeSummary}`.toLowerCase().includes(B):!0),l=S.filter(g=>{if(I==="success"&&g.result!=="success"||I==="denied"&&g.result==="success")return!1;if(k!=="all"){const q=`${g.action} ${g.target}`.toLowerCase();if(k==="control"&&!q.includes("control")&&!q.includes("scene")&&!q.includes("控制")||k==="alarm"&&!q.includes("alarm")&&!q.includes("work")&&!q.includes("告警")||k==="deploy"&&!q.includes("deploy")&&!q.includes("plan")&&!q.includes("hardware")&&!q.includes("部署"))return!1}return!0});t.innerHTML=`
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

        ${A?`<div class="pacom-alert-banner">${A}</div>`:""}

        <div class="lov-subnav-layout">
          <nav class="lov-subnav-rail" aria-label="机构与账户分组">
            <div class="lov-subnav-group">
              <div class="lov-subnav-group-title">工作空间</div>
              <button class="lov-subnav-item" aria-current="${i==="profile"?"true":"false"}" data-atab="profile">
                <span>我的账户与权限</span>
              </button>
              <button class="lov-subnav-item" aria-current="${i==="members"?"true":"false"}" data-atab="members">
                <span>成员与角色</span>
                <span class="pacom-badge pacom-badge--neutral">${$.length}</span>
              </button>
            </div>
            <div class="lov-subnav-group">
              <div class="lov-subnav-group-title">安全与审计</div>
              <button class="lov-subnav-item" aria-current="${i==="audit"?"true":"false"}" data-atab="audit">
                <span>操作审计日志</span>
                <span class="pacom-badge pacom-badge--neutral">${S.length}</span>
              </button>
            </div>
          </nav>

          <div class="lov-subnav-main">
            ${i==="profile"?`
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
                        ${Object.keys(U).map(g=>{const q=U[g];return`
                              <button class="pacom-role-card ${g===a.role?"is-active":""}" data-switch-role="${g}">
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
                </section>`:i==="members"?`
                  ${T?`
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
                                ${Object.keys(U).map(g=>`<option value="${g}">${U[g].roleLabel}</option>`).join("")}
                              </select>
                              <button class="pacom-btn pacom-btn--primary" type="submit">发送邀请</button>
                            </div>
                          </div>
                        </form>
                      </section>`:""}

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">机构成员目录</h2>
                      <span class="pacom-row-sub">共 ${C.length} 人</span>
                    </div>
                    <div class="lov-table-card">
                      <div class="lov-table-toolbar">
                        <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                          <input class="pacom-input" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${d}" />
                          <select class="pacom-select" data-role-filter>
                            <option value="all" ${j==="all"?"selected":""}>全部角色</option>
                            ${Object.keys(U).map(g=>`<option value="${g}" ${j===g?"selected":""}>${U[g].roleLabel}</option>`).join("")}
                          </select>
                        </div>
                        <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                          ${T?"收起邀请":"+ 邀请成员"}
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
                            ${C.map(g=>`
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
                    </div>
                  </section>`:`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">操作与权限拦截审计日志</h2>
                      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                        <select class="pacom-select" data-audit-cat aria-label="按行为类别筛选">
                          <option value="all" ${k==="all"?"selected":""}>全部操作类型</option>
                          <option value="control" ${k==="control"?"selected":""}>设备控制与场景</option>
                          <option value="alarm" ${k==="alarm"?"selected":""}>告警与工单处置</option>
                          <option value="deploy" ${k==="deploy"?"selected":""}>系统部署与点位</option>
                        </select>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${I==="all"}" data-audit-filter="all">全部（${S.length}）</button>
                          <button class="pacom-tab" aria-selected="${I==="success"}" data-audit-filter="success">成功</button>
                          <button class="pacom-tab" aria-selected="${I==="denied"}" data-audit-filter="denied">已拦截</button>
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
                            ${l.map(g=>`
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
    `,t.querySelectorAll("[data-atab]").forEach(g=>{g.addEventListener("click",()=>{i=g.dataset.atab,A="",c()})}),t.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",o()}),t.querySelector("[data-copy-session]")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(a,null,2)),L=!0,c(),window.setTimeout(()=>{L=!1,c()},1600)}catch{}}),t.querySelectorAll("[data-switch-role]").forEach(g=>{g.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const q=await e.switchDemoRole(g.dataset.switchRole);s(q)})}),t.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{T=!T,c()}),t.querySelector("[data-member-search]")?.addEventListener("input",g=>{const q=g.currentTarget,n=q.selectionStart??q.value.length;d=q.value,c();const w=t.querySelector("[data-member-search]");w&&(w.focus(),w.setSelectionRange(n,n))}),t.querySelector("[data-role-filter]")?.addEventListener("change",g=>{j=g.currentTarget.value,c()}),t.querySelectorAll("[data-audit-filter]").forEach(g=>{g.addEventListener("click",()=>{I=g.dataset.auditFilter??"all",c()})}),t.querySelector("[data-audit-cat]")?.addEventListener("change",g=>{k=g.currentTarget.value??"all",c()}),t.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async g=>{g.preventDefault(),A="";const q=new FormData(g.currentTarget);try{await e.inviteOrgMember(String(q.get("email")??""),String(q.get("role"))),T=!1,await y()}catch(n){A=n instanceof Error?n.message:String(n),c()}})}c()}const Le={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},je={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},Ce={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function Oe(t){const e=`${t.title} ${t.message}`.toLowerCase();return e.includes("离线")||e.includes("modbus")||e.includes("心跳")?"建议先在「系统部署 → 系统接入」核查边缘网关与 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":e.includes("co₂")||e.includes("co2")||e.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」查看实时遥测与设备工况，确认后可标记已处置或一键转工单。"}async function De(t,e,a){let s=[],o=[],i=[],$="alarms",S="all",d="all",j=!1,I=!1,k="",T=null;const L=new Set,A=new Set,y=new Set;let c="",P="";async function B(){[s,o,i]=await Promise.all([e.listAlarms(r.floorId),e.listWorkOrders(r.floorId),e.getFloorDevices(r.floorId).catch(()=>[])]),l()}function C(D){if(!D)return{name:"楼层通用",zone:"E7F"};const g=i.find(q=>q.id===D);return g?{name:g.name,zone:(g.logicalZoneId?Ce[g.logicalZoneId]:void 0)??"E7F"}:{name:D,zone:"E7F"}}function l(){const D=s.filter(u=>u.status==="active"&&!A.has(u.id)),g=o.filter(u=>u.status==="open"||u.status==="assigned"||u.status==="in_progress"),q=s.filter(u=>u.status!=="active").length+y.size,n=A.size,w=k.trim().toLowerCase(),M=s.filter(u=>{const p=A.has(u.id);if(S==="snoozed"){if(!p)return!1}else if(S==="active"){if(u.status!=="active"||p)return!1}else if(S==="acknowledged"){if(u.status!=="acknowledged")return!1}else if(p)return!1;if(d!=="all"&&u.severity!==d)return!1;if(!w)return!0;const N=C(u.deviceId);return`${u.title} ${u.message} ${N.name} ${N.zone} ${u.deviceId}`.toLowerCase().includes(w)}),O=new Map;for(const u of M){const p=I?u.deviceId:u.id,N=O.get(p)??[];N.push(u),O.set(p,N)}const V=Array.from(O.values()),H=o.filter(u=>{if(j&&(u.status==="resolved"||u.status==="closed"))return!1;if(!w)return!0;const p=C(u.deviceId);return`${u.title} ${u.description} ${u.id} ${p.name}`.toLowerCase().includes(w)}),Y=S==="active"?"仅看待处理":S==="acknowledged"?"仅看已确认":S==="snoozed"?"仅看已忽略 24h":"";t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">告警中心</h1>
              <div class="pacom-tabs" role="tablist" aria-label="告警中心视图">
                <button class="pacom-tab" role="tab" aria-selected="${$==="alarms"}" data-main-tab="alarms">
                  实时告警（${s.length-n}）
                </button>
                <button class="pacom-tab" role="tab" aria-selected="${$==="workorders"}" data-main-tab="workorders">
                  运维工单（${o.length}）
                </button>
              </div>
            </div>

            <div class="pacom-header-meta">
              ${$==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="lov-switch" role="switch" aria-checked="${I}" data-toggle-group="1" aria-label="按设备根因归并">
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
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${$==="alarms"&&S==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">待处理告警</span>
              <div class="lov-kpi-value">${D.length}<span class="lov-kpi-unit">条</span></div>
              <span class="lov-kpi-delta">点击快速筛选待处理</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${$==="workorders"&&j?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">处理中工单</span>
              <div class="lov-kpi-value">${g.length}<span class="lov-kpi-unit">单</span></div>
              <span class="lov-kpi-delta">点击聚焦未结工单</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${$==="alarms"&&S==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">已确认 / 闭环</span>
              <div class="lov-kpi-value">${q}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">24h 无复发即计入有效</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="snoozed"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${$==="alarms"&&S==="snoozed"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">已忽略 24h</span>
              <div class="lov-kpi-value">${n}<span class="lov-kpi-unit">条</span></div>
              <span class="lov-kpi-delta">到期自动恢复监控</span>
            </button>
          </div>

          ${c?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${c}</span></div>`:""}
          ${P?`<div class="pacom-alert-banner">${P}</div>`:""}

          ${$==="alarms"?`
              <section class="lov-table-card">
                <div class="lov-table-toolbar">
                  <div class="lov-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" style="max-width:260px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${k}" aria-label="搜索告警" />
                    <select class="pacom-select" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${d==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${d==="critical"?"selected":""}>严重</option>
                      <option value="major" ${d==="major"?"selected":""}>重要</option>
                      <option value="minor" ${d==="minor"?"selected":""}>一般</option>
                    </select>
                    ${Y?`<button type="button" class="pacom-btn pacom-btn--ghost" data-clear-kpi="1">${Y} ×</button>`:""}
                  </div>
                  <div class="lov-table-toolbar-group">
                    ${L.size>0&&a.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${L.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${V.length} 项</span>
                  </div>
                </div>
                ${V.length===0?'<div class="lov-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可点击上方 KPI 卡片或清空筛选查看全部记录。</span></div>':`
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
                          ${V.map(u=>{const p=u[0],N=je[p.severity]??{label:p.severity,cls:"pacom-badge--neutral"},K=C(p.deviceId),ae=T===p.id,ee=A.has(p.id),oe=L.has(p.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" data-check-alarm="${p.id}" ${oe?"checked":""} ${p.status!=="active"||ee?"disabled":""} aria-label="选择 ${p.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${N.cls}">${N.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                      <span>${p.title}</span>
                                      ${u.length>1?`<span class="pacom-badge pacom-badge--accent">归并 ${u.length} 条</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${p.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${K.name}</div>
                                    <div class="pacom-row-sub">${K.zone}</div>
                                  </td>
                                  <td><span class="pacom-row-sub">${p.triggeredAt?p.triggeredAt.slice(5,16).replace("T"," "):"-"}</span></td>
                                  <td>
                                    <span class="pacom-badge ${ee?"pacom-badge--neutral":p.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${ee?"已忽略 24h":p.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${ee?`<button class="pacom-btn" data-unsnooze="${p.id}">恢复监控</button>`:`
                                            ${p.status==="active"?`<button class="pacom-btn" data-mark-actioned="${p.id}" ${a.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${p.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${p.id}" ${a.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${p.id}">${ae?"收起":"详情"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${ae?`
                                    <tr class="lov-table-detail-row">
                                      <td colspan="7">
                                        <div style="display:flex; flex-direction:column; gap:10px;">
                                          <div style="font-size:13px; color:var(--pacom-text-body);">
                                            <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${Oe(p)}
                                          </div>
                                          <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                                            <div class="pacom-row-sub">
                                              告警编号 <code>${p.id}</code> · 设备编号 <code>${p.deviceId}</code> · 关联工单 ${p.workOrderId??"无"}
                                            </div>
                                            <div style="display:flex; gap:8px; align-items:center;">
                                              ${!ee&&p.status==="active"?`<button class="pacom-btn" data-snooze="${p.id}">忽略 24h</button>`:""}
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
                    <input class="pacom-input" style="max-width:280px;" data-alarm-search placeholder="搜索工单标题、设备或编号…" value="${k}" aria-label="搜索工单" />
                  </div>
                  <span class="pacom-row-sub">共 ${H.length} 条工单</span>
                </div>
                ${H.length===0?'<div class="lov-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                          ${H.map(u=>{const p=C(u.deviceId);return`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${u.title}</div>
                                    <div class="pacom-row-sub">${u.description} · <code>${u.id}</code></div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${p.name}</div>
                                    <div class="pacom-row-sub">${p.zone}</div>
                                  </td>
                                  <td><span class="pacom-row-sub">${u.createdAt?u.createdAt.slice(5,16).replace("T"," "):"-"}</span></td>
                                  <td style="text-align:right;">
                                    <select class="pacom-select" data-wo-status="${u.id}" aria-label="更新工单状态">
                                      ${["open","assigned","in_progress","resolved","closed"].map(N=>`<option value="${N}" ${u.status===N?"selected":""}>${Le[N]}</option>`).join("")}
                                    </select>
                                  </td>
                                </tr>`}).join("")}
                        </tbody>
                      </table>
                    </div>`}
              </section>`}
        </div>
      </div>
    `,t.querySelectorAll("[data-main-tab]").forEach(u=>{u.addEventListener("click",()=>{$=u.dataset.mainTab??"alarms",c="",l()})}),t.querySelectorAll("[data-kpi-filter]").forEach(u=>{u.addEventListener("click",()=>{const p=u.dataset.kpiFilter;c="",p==="workorders"?($="workorders",j=!j):(p==="active"||p==="acknowledged"||p==="snoozed")&&($="alarms",S=S===p?"all":p),l()})}),t.querySelector("[data-clear-kpi]")?.addEventListener("click",()=>{S="all",l()}),t.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{c="",B()}),t.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{I=!I,l()}),t.querySelector("[data-toggle-open-wo]")?.addEventListener("click",()=>{j=!j,l()}),t.querySelector("[data-severity-filter]")?.addEventListener("change",u=>{d=u.currentTarget.value,l()}),t.querySelector("[data-alarm-search]")?.addEventListener("input",u=>{const p=u.currentTarget,N=p.selectionStart??p.value.length;k=p.value,l();const K=t.querySelector("[data-alarm-search]");K&&(K.focus(),K.setSelectionRange(N,N))}),t.querySelectorAll("[data-check-alarm]").forEach(u=>{u.addEventListener("change",()=>{const p=u.dataset.checkAlarm;p&&(u.checked?L.add(p):L.delete(p),l())})}),t.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{P="";const u=Array.from(L);try{for(const p of u)await e.acknowledgeAlarm(p,"告警中心批量确认"),y.add(p);L.clear(),c=`已批量确认 ${u.length} 条告警，未来 24 小时持续校验无复发。`,await B()}catch(p){P=p instanceof Error?p.message:String(p),l()}}),t.querySelectorAll("[data-expand-alarm]").forEach(u=>{u.addEventListener("click",()=>{const p=u.dataset.expandAlarm??null;T=T===p?null:p,l()})}),t.querySelectorAll("[data-locate-home]").forEach(u=>{u.addEventListener("click",()=>{window.location.hash="#home"})}),t.querySelectorAll("[data-snooze]").forEach(u=>{u.addEventListener("click",()=>{const p=u.dataset.snooze;p&&(A.add(p),L.delete(p),c="已将该告警限时忽略 24 小时，可在上方「已忽略 24h」磁贴中随时恢复。",l())})}),t.querySelectorAll("[data-unsnooze]").forEach(u=>{u.addEventListener("click",()=>{const p=u.dataset.unsnooze;p&&(A.delete(p),c="已恢复该告警的实时监控。",l())})}),t.querySelectorAll("[data-mark-actioned]").forEach(u=>{u.addEventListener("click",async()=>{P="";const p=u.dataset.markActioned;try{await e.acknowledgeAlarm(p,"现场自处理完成（Mark Actioned）"),y.add(p),L.delete(p),c="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await B()}catch(N){P=N instanceof Error?N.message:String(N),l()}})}),t.querySelectorAll("[data-to-wo]").forEach(u=>{u.addEventListener("click",async()=>{P="";const p=s.find(N=>N.id===u.dataset.toWo);if(p)try{await e.createWorkOrder({floorId:p.floorId,deviceId:p.deviceId,alarmId:p.id,title:`处置告警：${p.title}`,description:p.message}),c=`已将「${p.title}」转为运维工单。`,await B()}catch(N){P=N instanceof Error?N.message:String(N),l()}})}),t.querySelectorAll("[data-wo-status]").forEach(u=>{u.addEventListener("change",async()=>{P="";try{await e.updateWorkOrderStatus(u.dataset.woStatus,u.value),c="工单状态已更新并写入审计日志。",await B()}catch(p){P=p instanceof Error?p.message:String(p),await B()}})})}await B()}const ne=[{id:"energy",label:"能源",desc:"分项能耗与峰谷负荷趋势"},{id:"environment",label:"环境",desc:"温湿度、CO₂ 与洁净室舒适度"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与异常分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能基线对比"}],ie=[{id:r.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:r.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:r.projectId,label:"广实2号园（全园区）",factor:18.2}],Te={energy:{title:"分项能耗构成与节能估算",summary:"较目标基线节省约 ¥ 1,420 / 月，主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"舒适度达标构成",summary:"全天温湿度综合达标率 96.2%，CO₂ 浓度全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"CO₂ 优良时段（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}};function Fe(t){const e=Math.max(...t.series.map(k=>Math.max(k.value,k.baseline??0)),1),a=46,s=34,o=36,i=Math.max(t.series.length*(a+s)+o*2,620),$=220,S=178,d=138,j=[0,.25,.5,.75,1].map(k=>{const T=Math.round(S-k*d);return`<line x1="${o-8}" y1="${T}" x2="${i-18}" y2="${T}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${k===0?"0":"3 3"}" />`}).join(""),I=t.series.map((k,T)=>{const L=o+T*(a+s),A=Math.max(8,Math.round(k.value/e*d)),y=S-A,c=typeof k.baseline=="number"&&k.value>k.baseline*1.08,P=c?`<rect x="${L-8}" y="28" width="${a+16}" height="${S-28}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",B=typeof k.baseline=="number"?`<line x1="${L-5}" y1="${Math.round(S-k.baseline/e*d)}" x2="${L+a+5}" y2="${Math.round(S-k.baseline/e*d)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"";return`
        ${P}
        ${B}
        <rect x="${L}" y="${y}" width="${a}" height="${A}" rx="7" fill="${c?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        <text x="${L+a/2}" y="${y-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${k.value}</text>
        <text x="${L+a/2}" y="${S+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${k.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${i} ${$}" style="width:100%; height:228px; display:block;" role="img" aria-label="${t.category} 趋势图">
      ${j}
      ${I}
    </svg>
  `}function Me(t){const e=[["时段",`数值 (${t.unit})`,`基线 (${t.unit})`].join(","),...t.series.map(i=>[i.label,String(i.value),i.baseline!==void 0?String(i.baseline):""].join(","))],a=new Blob([`\uFEFF${e.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),s=URL.createObjectURL(a),o=document.createElement("a");o.href=s,o.download=`pacom-${t.category}-${t.range}.csv`,o.click(),URL.revokeObjectURL(s)}async function qe(t,e,a){let s="energy",o="7d",i=r.floorId,$="chart",S=!1,d=null;async function j(){d=await e.getAnalysisReport(s,o,r.floorId),I()}function I(){if(!d)return;const k=ne.find(c=>c.id===s)??ne[0],T=ie.find(c=>c.id===i)??ie[0],L=d.zoneBreakdown.filter(c=>c.status==="warning"),A=Te[s],y=Math.max(...d.zoneBreakdown.map(c=>c.value),1);t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
              <h1 class="pacom-title">数据分析</h1>
              <div class="pacom-scope-pill" style="width:260px;" title="切换统计空间范围">
                <select data-scope-select aria-label="选择统计空间范围">
                  ${ie.map(c=>`<option value="${c.id}" ${c.id===i?"selected":""}>${c.label}</option>`).join("")}
                </select>
                <span class="pacom-scope-chevron">▾</span>
              </div>
            </div>
            <div class="pacom-header-meta">
              <div class="pacom-tabs" role="group" aria-label="时间范围">
                <button class="pacom-tab" aria-selected="${o==="today"}" data-range="today">今日</button>
                <button class="pacom-tab" aria-selected="${o==="7d"}" data-range="7d">近 7 天</button>
                <button class="pacom-tab" aria-selected="${o==="30d"}" data-range="30d">近 30 天</button>
              </div>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              <button class="pacom-btn ${S?"pacom-btn--primary":""}" data-toggle-canvas="1">${S?"关闭空间对照":"空间对照"}</button>
            </div>
          </div>

          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist" aria-label="分析维度">
              ${ne.map(c=>`<button class="pacom-tab" role="tab" aria-selected="${s===c.id}" data-cat="${c.id}">${c.label}</button>`).join("")}
            </div>
            <span class="pacom-row-sub">口径：${T.label} · 更新于 ${d.updatedAt.slice(5,16).replace("T"," ")}</span>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:4px 0 28px;">
          <div class="lov-kpi-strip" role="region" aria-label="核心统计指标">
            ${d.kpis.map(c=>`
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
                <h2 class="lov-section-title">${k?.label??"趋势"}趋势（${d.unit}）</h2>
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
              ${$==="chart"?Fe(d):`
                  <div class="lov-table-wrap">
                    <table class="lov-table">
                      <thead>
                        <tr>
                          <th>统计时段</th>
                          <th>实测值（${d.unit}）</th>
                          <th>基线参考</th>
                          <th>状态</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${d.series.map(c=>{const P=typeof c.baseline=="number"&&c.value>c.baseline*1.08;return`
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
                  <span class="lov-banner-title">${k?.desc??"空间运行洞察"}</span>
                  <span class="lov-banner-sub">
                    ${L.length>0?`当前有 ${L.length} 个功能区指标偏高（${L.map(c=>c.zoneName).join("、")}），建议前往智能策略优化启停时段。`:A.summary}
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
                <span class="pacom-row-sub">${d.zoneBreakdown.length} 个功能区</span>
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
                      ${d.zoneBreakdown.map(c=>{const P=Math.max(8,Math.round(c.value/y*100));return`
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
                <h2 class="lov-section-title">${S?"E7F 空间对照预览":A.title}</h2>
                <span class="pacom-row-sub">${S?"与空间总览状态独立":"当前周期结构占比"}</span>
              </div>
              <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                ${S?'<img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':A.items.map(c=>`
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
    `,t.querySelectorAll("[data-cat]").forEach(c=>{c.addEventListener("click",()=>{s=c.dataset.cat,j()})}),t.querySelector("[data-scope-select]")?.addEventListener("change",c=>{i=c.currentTarget.value,I()}),t.querySelectorAll("[data-range]").forEach(c=>{c.addEventListener("click",()=>{o=c.dataset.range??"7d",j()})}),t.querySelectorAll("[data-chart-mode]").forEach(c=>{c.addEventListener("click",()=>{$=c.dataset.chartMode??"chart",I()})}),t.querySelector("[data-export-csv]")?.addEventListener("click",()=>{d&&Me(d)}),t.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{S=!S,I()}),t.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"})}await j()}async function ze(t,e,a){let s="floorplan",o=await e.getSpatialTree(),i=[],$=[],S=[],d=null,j=!1,I=null,k="",T="";async function L(){T="";const[y,c,P,B]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(r.floorId).catch(()=>[]),e.listConnections(r.projectId),e.listDeliveryBatches(r.floorId)]);o=y,i=c,$=P,S=B,i.some(C=>C.id===d)||(d=i[0]?.id??null),A()}function A(){const y=i.find(l=>l.id===d)??null,c=a.scope.canEditDeployment,P=$.reduce((l,D)=>l+D.collectedPoints,0),B=$.reduce((l,D)=>l+D.calculatedPoints,0),C=$.filter(l=>l.status==="connected").length;t.innerHTML=`
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
              <button class="pacom-tab" role="tab" aria-selected="${s==="delivery"}" data-dtab="delivery">交付冻结（${S.length}）</button>
            </div>
          </div>
        </header>

        ${k?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${k}</span></div>`:""}
        ${T?`<div class="pacom-alert-banner">${T}</div>`:""}

        ${s==="floorplan"?`
            <section class="pacom-split">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:380px;">
                <div class="pacom-pane-toolbar">
                  <div style="font-weight:500;">E7F 设备与四态配置（${i.length}）</div>
                  <div class="pacom-row-sub">
                    图上放点仅更新 <code>planPoint</code>，绝不自动改写物理安装态或硬件端口绑定。
                  </div>
                </div>
                <div class="pacom-list">
                  ${i.map(l=>`
                      <div class="pacom-row ${l.id===d?"is-selected":""}" data-pick-dev="${l.id}">
                        <div style="min-width:0;">
                          <div class="pacom-row-title">${l.name}</div>
                          <div class="pacom-row-sub">v${l.version} · ${l.hardwareBinding?.protocol.toUpperCase()??"未绑定"} · ${l.physicalInstalled?"现场已确认":"待物理复核"}</div>
                        </div>
                        <span class="pacom-badge ${l.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">
                          ${l.planPoint?`${Math.round(l.planPoint.x*100)}%,${Math.round(l.planPoint.y*100)}%`:"未标点"}
                        </span>
                      </div>`).join("")}
                </div>
                ${y?`
                    <form data-role="binding-form" style="padding:14px 16px; border-top:var(--hw) solid var(--pacom-border-subtle); background:var(--pacom-surface-primary); display:flex; flex-direction:column; gap:10px;">
                      <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-weight:500; font-size:13px;">显式硬件绑定与现场复核</span>
                        <span class="pacom-badge pacom-badge--neutral">${y.id}</span>
                      </div>
                      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                        <select class="pacom-select" name="protocol">
                          ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(l=>`<option value="${l}" ${y.hardwareBinding?.protocol===l?"selected":""}>${l.toUpperCase()}</option>`).join("")}
                        </select>
                        <input class="pacom-input" name="networkAddress" placeholder="网络地址/主题" value="${y.hardwareBinding?.networkAddress??""}" />
                      </div>
                      <div style="display:grid; grid-template-columns:1fr auto; gap:8px; align-items:center;">
                        <input class="pacom-input" name="portOrChannel" placeholder="端口/回路" value="${y.hardwareBinding?.portOrChannel??""}" />
                        <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; cursor:pointer;">
                          <input type="checkbox" name="physicalInstalled" ${y.physicalInstalled?"checked":""} />
                          现场物理已复核
                        </label>
                      </div>
                      <div style="display:flex; gap:8px; flex-wrap:wrap;">
                        <button class="pacom-btn" type="button" data-toggle-place="1">${j?"取消点图更新":"点图更新坐标"}</button>
                        <button class="pacom-btn" type="button" data-ftt-test="1" title="远程验证指令下发、状态回读并自动恢复工况">单机回读自检</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit" style="flex:1;">保存硬件绑定（v${y.version}）</button>
                      </div>
                    </form>`:""}
              </aside>
              <div class="pacom-splitter"></div>
              <main class="pacom-right-pane">
                <div class="pacom-canvas-stage" data-role="deploy-stage" style="cursor:${j?"crosshair":"default"};">
                  <div class="pacom-canvas-viewport">
                    <div class="pacom-plan-wrap" data-role="deploy-plan">
                      <img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 部署平面图" />
                      ${i.filter(l=>l.planPoint).map(l=>`
                          <button class="pacom-pin ${l.id===d?"is-selected":""} ${l.connectivity==="offline"?"pacom-pin--offline":""}"
                            style="left:${(l.planPoint.x*100).toFixed(2)}%; top:${(l.planPoint.y*100).toFixed(2)}%;"
                            data-pick-dev="${l.id}">
                            <span>${l.name.slice(0,7)}</span>
                          </button>`).join("")}
                    </div>
                  </div>
                  ${j&&y?`<div style="position:absolute; top:16px; left:16px; z-index:8;" class="pacom-badge pacom-badge--accent">标点模式：点击图纸任意位置更新「${y.name}」的 2D 坐标（不改动硬件绑定）</div>`:""}
                </div>
              </main>
            </section>`:s==="topology"?`
              <div class="pacom-content-page" style="padding:4px 0 24px;">
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">项目 → 楼宇 → 楼层归属拓扑</h2>
                    <span class="pacom-row-sub">共 ${o.projects.length} 个项目 · ${o.buildings.length} 栋楼宇</span>
                  </div>
                  <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:14px;">
                    ${o.projects.map(l=>{const D=o.buildings.filter(g=>g.projectId===l.id);return`
                          <div class="pacom-card" style="padding:16px; gap:10px;">
                            <img src="${l.imageUrl??"./media/gzlab.jpg"}" alt="${l.name}" style="width:100%; height:128px; object-fit:cover; border-radius:10px;" />
                            <div>
                              <strong style="font-size:15px; font-weight:500;">${l.name}</strong>
                              <div class="pacom-row-sub">${l.city??""} ${l.address??""} · ${D.length} 栋授权楼宇</div>
                            </div>
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              ${D.map(g=>`
                                  <div class="pacom-receipt-item">
                                    <span><strong>${g.name}</strong> · 地上 ${g.aboveFloors}F / ${g.areaSqm??"-"} m²</span>
                                    <span class="pacom-badge ${g.id===r.buildingId?"pacom-badge--accent":"pacom-badge--neutral"}">${g.id===r.buildingId?"含 E7F":"对照"}</span>
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
                      <div class="lov-kpi-value">${C}<span class="lov-kpi-unit">/ ${$.length}</span></div>
                      <span class="lov-kpi-delta">边缘网关在线监控</span>
                    </div>
                    <div class="lov-kpi-cell">
                      <span class="lov-kpi-label">数据采集健康度</span>
                      <div class="lov-kpi-value">${$.length>0?Math.round(C/$.length*100):100}<span class="lov-kpi-unit">%</span></div>
                      <span class="lov-kpi-delta">区分设备真故障与断流</span>
                    </div>
                    <div class="lov-kpi-cell">
                      <span class="lov-kpi-label">原始采集点</span>
                      <div class="lov-kpi-value">${P}<span class="lov-kpi-unit">点</span></div>
                      <span class="lov-kpi-delta">协议直采实时遥测</span>
                    </div>
                    <div class="lov-kpi-cell">
                      <span class="lov-kpi-label">衍生计算点</span>
                      <div class="lov-kpi-value">${B}<span class="lov-kpi-unit">点</span></div>
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
                            ${$.map(l=>`
                                <tr>
                                  <td><strong>${l.name}</strong></td>
                                  <td><span class="pacom-badge pacom-badge--neutral">${l.protocol.toUpperCase()}</span></td>
                                  <td><code style="font-size:12px;">${l.endpoint}</code></td>
                                  <td>采集 ${l.collectedPoints} / 计算 ${l.calculatedPoints}</td>
                                  <td>
                                    <span class="pacom-badge ${l.status==="connected"?"pacom-badge--online":"pacom-badge--warning"}">
                                      ${l.status==="connected"?"已连通":l.status}
                                    </span>
                                  </td>
                                  <td style="text-align:right;">
                                    <button class="pacom-btn pacom-btn--ghost" data-copy-endpoint="${l.id}" data-endpoint-val="${l.endpoint}">
                                      ${I===l.id?"已复制":"复制端点"}
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
                            ${S.map(l=>`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${l.versionTag}</div>
                                    <div class="pacom-row-sub"><code>${l.id}</code></div>
                                  </td>
                                  <td><strong>${l.verifiedCount}</strong> / ${l.deviceCount} 台设备</td>
                                  <td>
                                    <div>${l.frozenBy}</div>
                                    <div class="pacom-row-sub">${l.note??"-"}</div>
                                  </td>
                                  <td><span class="pacom-badge pacom-badge--accent">${l.status}</span></td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </div>`}
      </div>
    `,t.querySelectorAll("[data-dtab]").forEach(l=>{l.addEventListener("click",()=>{s=l.dataset.dtab,k="",T="",A()})}),t.querySelectorAll("[data-pick-dev]").forEach(l=>{l.addEventListener("click",()=>{d=l.dataset.pickDev??null,A()})}),t.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{j=!j,A()}),t.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{y&&(T="",y.connectivity==="offline"?T=`单机回读自检未通过：「${y.name}」当前离线，请先检查网关 ${y.hardwareBinding?.networkAddress??"-"} 通信状态。`:k=`单机回读自检通过（PASS）：「${y.name}」指令下发 → 状态回读一致 → 已安全自动恢复原工况。`,A())}),t.querySelectorAll("[data-copy-endpoint]").forEach(l=>{l.addEventListener("click",async()=>{const D=l.dataset.endpointVal??"",g=l.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(D),I=g,A(),window.setTimeout(()=>{I=null,A()},1600)}catch{}})}),t.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async l=>{if(!j||!y)return;const D=l.currentTarget.getBoundingClientRect(),g=Math.max(.02,Math.min(.98,(l.clientX-D.left)/D.width)),q=Math.max(.02,Math.min(.98,(l.clientY-D.top)/D.height));try{await e.updateDevicePlanPoint({deviceId:y.id,floorId:r.floorId,planVersion:y.planPoint?.planVersion??1,x:g,y:q,expectedVersion:y.version}),j=!1,k=`已更新「${y.name}」图上坐标（硬件绑定与物理安装态保持不变）`,await L()}catch(n){T=n instanceof Error?n.message:String(n),A()}}),t.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async l=>{if(l.preventDefault(),!y)return;const D=new FormData(l.currentTarget);try{await e.updateDeviceHardwareBinding({deviceId:y.id,gatewayId:y.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(D.get("protocol")),networkAddress:String(D.get("networkAddress")??""),portOrChannel:String(D.get("portOrChannel")??""),physicalInstalled:D.get("physicalInstalled")==="on",expectedVersion:y.version}),k=`已保存「${y.name}」的硬件绑定与物理安装状态`,await L()}catch(g){T=g instanceof Error?g.message:String(g),A()}}),t.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const l=await e.freezeDeliveryBatch(r.floorId,"前端系统部署发起冻结");k=`已生成冻结批次 ${l.versionTag}（核验 ${l.verifiedCount}/${l.deviceCount}）`,await L()}catch(l){T=l instanceof Error?l.message:String(l),A()}})}await L()}function Re(t){if(t.connectivity==="offline")return`${t.name.includes("VAV")?"VAV-02":t.name.slice(0,6)} 离线`;if(t.category==="lighting"){const e=t.name.includes("702")?"702 照明":"主照明",a=Number(t.telemetry.dimming?.value??0);return a>0?`${e} ${a}%`:`${e} 关`}return t.category==="hvac"?`${t.name.includes("VAV")?"VAV-02":"FCU-01"} ${t.telemetry.setpoint?.value??24}°C`:t.category==="sensor"?`环境 ${t.telemetry.temp?.value??"23.4"}°C`:t.category==="gateway"?"主控网关":t.name.slice(0,6)}const ce="pacom.web.e7f.leftWidth",ve={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},Pe={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},Be={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:42,top:42,width:14,height:22}};function h(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function _e(t){return t.level==="all-projects"?"all":t.level==="project"?`project:${t.projectId}`:t.level==="building"?`building:${t.projectId}:${t.buildingId}`:`floor:${t.projectId}:${t.buildingId}:${t.floorId}`}async function Ne(t,e,a){const s=await e.getSpatialTree(),o=e.mode==="demo",i=a.scope.canControlDevices,$=a.scope.canManageAlarms,S=a.scope.allowedZoneIds?.length?a.scope.allowedZoneIds:null;let d={level:"floor",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId},j="devices",I="canvas",k="",T="all",L="all",A=null,y=!1,c="devices";const P=new Set,B=new Set;let C=[],l=[],D=[],g=null,q=null,n=1,w=0,M=0,O=Number(localStorage.getItem(ce)||400);(!Number.isFinite(O)||O<320||O>680)&&(O=400);let V=null;function H(){return s.zones.filter(v=>!(d.level==="floor"&&v.floorId!==d.floorId||S&&!S.includes(v.id)))}async function Y(v){d=v,q=null,L="all",B.clear(),n=1,w=0,M=0,V&&(V(),V=null);const E=d.level==="floor"?d.floorId:r.floorId;if(d.level==="floor")try{const[m,b,x]=await Promise.all([e.getFloorDevices(d.floorId),e.listAlarms(d.floorId),e.listWorkOrders(d.floorId)]);C=m,l=b,D=x,C.some(z=>z.id===A)||(A=C[1]?.id??C[0]?.id??null,y=!1),V=e.subscribeFloorEvents(d.floorId,async z=>{z.type==="control.receipt.updated"&&g?.batchId===z.batchId&&(g=await e.getControlBatch(z.batchId)),(z.type==="telemetry.updated"||z.type==="device.connectivity")&&d.level==="floor"&&(C=await e.getFloorDevices(d.floorId)),z.type==="alarm.changed"&&d.level==="floor"&&(l=await e.listAlarms(d.floorId)),N()})}catch(m){C=[],l=[],D=[],A=null,y=!1,q=m instanceof Error?m.message:String(m)}else{y=!1;const[m,b,x]=await Promise.all([e.getFloorDevices(E).catch(()=>[]),e.listAlarms(E).catch(()=>[]),e.listWorkOrders(E).catch(()=>[])]);C=m,l=b,D=x}G()}function J(v){return v?s.zones.find(E=>E.id===v)?.name??v:"未分配逻辑区"}function u(){const v=k.trim().toLowerCase();return C.filter(E=>L!=="all"&&E.logicalZoneId!==L||T!=="all"&&E.category!==T?!1:v?E.name.toLowerCase().includes(v)||E.id.toLowerCase().includes(v)||J(E.logicalZoneId).toLowerCase().includes(v):!0)}async function p(v,E,m){!v.length||d.level!=="floor"||!i||(v.forEach(b=>P.add(b)),g=await e.dispatchControlBatch({floorId:d.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:v.map(b=>({deviceId:b,command:E,targetValue:m}))}),N())}function N(){const v=document.activeElement,E=v?.dataset?.role,m=v&&"selectionStart"in v?v.selectionStart:null,b=v&&"selectionEnd"in v?v.selectionEnd:null,x=t.querySelector(".pacom-list")?.scrollTop??0;G();const z=t.querySelector(".pacom-list");if(z&&(z.scrollTop=x),E==="search"){const R=t.querySelector('[data-role="search"]');R&&(R.focus(),m!==null&&b!==null&&R.setSelectionRange(m,b))}}function K(){const v=t.querySelector('[data-role="canvas-viewport"]');v&&(v.style.transform=`translate(${w}px, ${M}px) scale(${n})`);const E=t.querySelector('[data-role="canvas-hint"]');E&&(E.textContent=`缩放 ${Math.round(n*100)}% · 滚轮缩放 · 拖动平移 · 双击复位`)}function ae(){return d.level==="floor"?`building:${d.projectId}:${d.buildingId}`:d.level==="building"?`project:${d.projectId}`:d.level==="project"?"all":null}function ee(){const v=_e(d),E=s.projects.map(x=>`<option value="project:${h(x.id)}" ${v===`project:${x.id}`?"selected":""}>项目 · ${h(x.name)}</option>`).join(""),m=s.buildings.map(x=>{const z=`building:${x.projectId}:${x.id}`;return`<option value="${h(z)}" ${v===z?"selected":""}>楼宇 · 广实2号园 / ${h(x.name)}</option>`}).join(""),b=s.floors.map(x=>{const z=a.scope.allowedFloorIds.includes(x.id),R=`floor:${r.projectId}:${x.buildingId}:${x.id}`;return`<option value="${h(R)}" ${v===R?"selected":""}>楼层 · 广实2号园 / E栋 / ${h(x.name)}${z?"":"（未授权）"}</option>`}).join("");return`
      <option value="all" ${v==="all"?"selected":""}>全部项目（${s.projects.length} 个授权园区）</option>
      <optgroup label="项目级">${E}</optgroup>
      <optgroup label="楼宇级">${m}</optgroup>
      <optgroup label="楼层级">${b}</optgroup>
    `}function oe(){if(d.level==="all-projects"){const E=C.filter(b=>b.connectivity==="online").length,m=l.filter(b=>b.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">授权项目总览（${s.projects.length}）</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">楼宇</span><strong>${s.buildings.length} 栋</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线</span><strong>${E}/${C.length}</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:var(--pacom-status-warning);">${m} 条</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${s.projects.map(b=>{const x=s.buildings.filter(z=>z.projectId===b.id).length;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="project:${h(b.id)}">
                  <img src="${h(b.imageUrl??"./media/gzlab.jpg")}" alt="${h(b.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${h(b.name)}</strong>
                    <span class="pacom-badge pacom-badge--accent">${x} 栋楼宇</span>
                  </div>
                  <div class="pacom-row-sub">${h(b.city??"")} · ${h(b.address??"")}</div>
                </article>`}).join("")}
        </div>
      `}const v=d;if(v.level==="project"){const E=s.projects.find(R=>R.id===v.projectId),m=s.buildings.filter(R=>R.projectId===v.projectId),b=C.filter(R=>R.connectivity==="online").length,x=C.length?Math.round(b/C.length*100):100,z=l.filter(R=>R.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${h(E?.name??"园区")} · 楼宇绩效（${m.length}）</div>
          <div class="pacom-row-sub">${h(E?.city??"")} ${h(E?.address??"")}</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">在线率</span><strong>${x}%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:${z>0?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${z} 条</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>1,248 kWh</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${m.map(R=>{const f=R.id===r.buildingId;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="building:${h(R.projectId)}:${h(R.id)}">
                  <img src="${h(R.imageUrl??"./media/building-e.png")}" alt="${h(R.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${h(R.name)}</strong>
                    <span class="pacom-badge ${f?"pacom-badge--online":"pacom-badge--neutral"}">${f?`在线 ${x}% · 告警 ${z}`:"运行平稳"}</span>
                  </div>
                  <div class="pacom-row-sub">地上 ${R.aboveFloors} 层 · 面积 ${R.areaSqm??"-"} m² · 舒适度达标 96%</div>
                </article>`}).join("")}
        </div>
      `}if(v.level==="building"){const E=s.buildings.find(f=>f.id===v.buildingId),m=s.floors.filter(f=>f.buildingId===v.buildingId),b=D.filter(f=>f.status!=="closed"&&f.status!=="resolved"),x=C.filter(f=>f.connectivity==="online").length,z=C.length?Math.round(x/C.length*100):100,R=l.filter(f=>f.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${h(E?.name??"楼宇")} 运行概况</div>
          <div class="pacom-row-sub">地上 ${E?.aboveFloors??0} 层 · 面积 ${E?.areaSqm??"-"} m²</div>
          <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线率</span><strong>${z}%（${x}/${C.length}）</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">舒适度达标</span><strong>96.2%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>418 kWh</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">告警 / 工单</span><strong style="color:var(--pacom-status-warning);">${R} 告警 · ${b.length} 工单</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:8px; padding:12px;">
          <div style="font-weight:500; font-size:13px;">楼层列表（点击进入 2D 平面控制）</div>
          ${m.length?m.map(f=>{const F=a.scope.allowedFloorIds.includes(f.id),_=f.id===r.floorId;return`
                      <div class="pacom-row" data-nav-scope="floor:${h(v.projectId)}:${h(v.buildingId)}:${h(f.id)}">
                        <div>
                          <div class="pacom-row-title">${h(E?.name??"")} ${h(f.name)}</div>
                          <div class="pacom-row-sub">${f.plan?"2D 平面图就绪":"暂未上传图纸"}${_&&R>0?` · ${R} 条待处理告警`:""}</div>
                        </div>
                        <span class="pacom-badge ${F?"pacom-badge--online":"pacom-badge--warning"}">${F?"进入楼层":"无权限"}</span>
                      </div>`}).join(""):'<div class="pacom-row-sub">该楼宇暂未配置试点楼层。</div>'}
        </div>
      `}if(j==="devices"){const E=u(),m=H(),b=Array.from(B);return`
        <div class="pacom-pane-toolbar">
          ${S?`<div class="pacom-info-banner">我的区域视图：仅显示当前账号获授权的 ${S.length} 个功能区及设备。</div>`:""}
          <div class="pacom-search-row">
            <input class="pacom-input" data-role="search" placeholder="搜索设备名 / ID / 区域…" value="${h(k)}" aria-label="搜索楼层设备" />
            <select class="pacom-select" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${T==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${T==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${T==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${T==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${T==="gateway"?"selected":""}>网关</option>
            </select>
          </div>
          ${m.length>0&&!q?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${L==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${m.map(x=>`<button type="button" class="pacom-zone-pill ${L===x.id?"is-active":""}" data-filter-zone="${h(x.id)}">${h(x.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; color:var(--pacom-text-secondary);">
            <span>当前可见 ${E.length} 台设备</span>
            <span>${i?`已勾选 ${b.length} 台`:"只读模式"}</span>
          </div>
        </div>
        <div class="pacom-list">
          ${q?`<div class="pacom-alert-banner">${h(q)}</div>`:E.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">没有匹配的设备</div>':E.map(x=>{const z=x.id===A&&y,R=B.has(x.id),f=x.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline",F=x.category==="lighting"?`亮度 ${x.telemetry.dimming?.value??"--"}%`:x.category==="hvac"?`设定 ${x.telemetry.setpoint?.value??"--"}°C`:x.category==="sensor"?`${x.telemetry.temp?.value??"--"}°C · CO₂ ${x.telemetry.co2?.value??"--"}`:x.hardwareBinding?.networkAddress??"未绑定";return`
                        <div class="pacom-row ${z?"is-selected":""}" data-select-device="${h(x.id)}">
                          <div class="pacom-row-main">
                            ${i?`<input type="checkbox" data-check-device="${h(x.id)}" ${R?"checked":""} style="margin-top:3px;" aria-label="勾选 ${h(x.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title">${h(x.name)}</div>
                              <div class="pacom-row-sub">${h(J(x.logicalZoneId))} · ${h(ve[x.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${x.connectivity==="online"?"pacom-badge--online":"pacom-badge--neutral"}">
                            <span class="pacom-dot ${f}"></span>${h(F)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${i&&b.length>0?`
            <div class="pacom-batch-bar">
              <span style="font-size:12px;">显式批量目标：<strong>${b.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(j==="zones"){const E=H(),m={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">E7F 功能区快控（${E.length}）</div>
          <div class="pacom-row-sub">点击卡片同步高亮右侧平面图热区，支持按区域一键批量控制。</div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${E.map(b=>{const x=C.filter(_=>_.logicalZoneId===b.id),z=x.filter(_=>_.connectivity==="online").length,R=x.filter(_=>_.category==="lighting"||_.category==="hvac").length,f=L===b.id,F=m[b.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${f?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${f?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${h(f?"all":b.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:14px; font-weight:500;">${h(b.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${z}/${x.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时温度 ${F.temp} · 占用 ${F.occ}</div>
                  ${R>0?`
                      <div style="display:flex; gap:6px; margin-top:2px;">
                        <button type="button" class="pacom-btn" data-zone-power="${h(b.id)}" data-zone-val="true" ${i?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" data-zone-power="${h(b.id)}" data-zone-val="false" ${i?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">该区域为弱电/网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-pane-toolbar">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-weight:500;">本层告警快览（${l.length}）</span>
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-alarms="1">前往告警中心 →</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:12px;">
        ${l.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">当前楼层无活跃告警</div>':l.map(E=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${h(E.title)}</strong>
                      <span class="pacom-badge ${E.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${E.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${h(E.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" data-locate-device="${h(E.deviceId)}">定位设备</button>
                      ${E.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" data-ack-alarm="${h(E.id)}" ${$?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function $e(){const v=d,E=C.filter(f=>f.connectivity==="online").length,m=C.length?Math.round(E/C.length*100):100,b=l.filter(f=>f.status==="active").length;if(v.level==="all-projects"||v.level==="project"){const f=v.level==="project"?s.projects.find(_=>_.id===v.projectId):s.projects[0],F=s.buildings.filter(_=>!f||_.projectId===f.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:24px; cursor:default;">
          <div style="position:relative; width:min(760px, 94%); border-radius:16px; overflow:hidden; box-shadow:0 12px 32px rgba(15,23,42,0.14); background:#fff;">
            <img src="${h(f?.imageUrl??"./media/gzlab.jpg")}" alt="园区俯瞰" style="width:100%; height:440px; object-fit:cover; display:block;" />
            ${v.level==="all-projects"?s.projects.map((_,W)=>`
                      <button type="button" class="pacom-pin is-selected" style="left:${W===0?48:26}%; top:${W===0?52:34}%;" data-nav-scope="project:${h(_.id)}">
                        <span class="pacom-dot pacom-dot--online"></span>
                        <span>${h(_.name)}</span>
                      </button>`).join(""):F.map((_,W)=>{const X=_.id===r.buildingId;return`
                        <button type="button" class="pacom-pin ${X?"is-selected":""}" style="left:${W===0?56:38}%; top:${W===0?44:62}%;" data-nav-scope="building:${h(_.projectId)}:${h(_.id)}">
                          <span class="pacom-dot ${X&&b>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                          <span>${h(_.name)} · ${X?`在线 ${m}% · 告警 ${b}`:"运行平稳"}</span>
                        </button>`}).join("")}
          </div>
        </div>
      `}if(v.level==="building"){const f=s.buildings.find(W=>W.id===v.buildingId),F=s.floors.filter(W=>W.buildingId===v.buildingId),_=F.find(W=>W.id===r.floorId)??F[0];return`
        ${F.length?`
            <nav class="pacom-floor-rail" aria-label="整栋楼层选择轨道">
              <button type="button" class="pacom-floor-btn is-active" title="整栋视图">栋</button>
              ${F.map(W=>`<button type="button" class="pacom-floor-btn ${a.scope.allowedFloorIds.includes(W.id)?"":"is-locked"}" data-nav-scope="floor:${h(v.projectId)}:${h(v.buildingId)}:${h(W.id)}" title="${h(W.name)}">${h(W.name.replace("F",""))}</button>`).join("")}
            </nav>`:""}
        <div class="pacom-canvas-tools" aria-label="画布工具">
          <button type="button" class="pacom-tool-btn" data-zoom="reset" title="复位视图" aria-label="复位视图">⟲</button>
          <div class="pacom-tool-divider" aria-hidden="true"></div>
          <button type="button" class="pacom-tool-btn" data-zoom="in" title="放大" aria-label="放大">＋</button>
          <button type="button" class="pacom-tool-btn" data-zoom="out" title="缩小" aria-label="缩小">－</button>
        </div>
        <div class="pacom-canvas-stage" data-role="canvas-stage">
          <div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${w}px, ${M}px) scale(${n});">
            <img class="pacom-plan-img" src="${h(f?.imageUrl??"./media/building-e.png")}" alt="${h(f?.name??"楼宇")} 整栋实景图" />
          </div>
        </div>
        <div class="pacom-canvas-hint" style="pointer-events:auto; display:flex; align-items:center; gap:10px;">
          <span>${h(f?.name??"楼宇")} · 在线 ${m}% · 舒适度 96.2%</span>
          ${_?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:24px; padding:0 10px; font-size:12px;" data-nav-scope="floor:${h(v.projectId)}:${h(v.buildingId)}:${h(_.id)}">进入 ${h(_.name)} 平面图 →</button>`:""}
        </div>
      `}const x=s.floors.find(f=>f.id===v.floorId),z=s.floors.filter(f=>f.buildingId===v.buildingId),R=H();return`
      <nav class="pacom-floor-rail" aria-label="楼层选择轨道">
        <button type="button" class="pacom-floor-btn" data-nav-scope="building:${h(v.projectId)}:${h(v.buildingId)}" title="返回整栋楼宇">栋</button>
        ${z.map(f=>{const F=a.scope.allowedFloorIds.includes(f.id);return`<button type="button" class="pacom-floor-btn ${f.id===v.floorId?"is-active":""} ${F?"":"is-locked"}"
              data-nav-scope="floor:${h(v.projectId)}:${h(v.buildingId)}:${h(f.id)}" title="${h(f.name)}${F?"":"（无权限）"}">
              ${h(f.name.replace("F",""))}
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
          <button type="button" class="lov-layer-btn" aria-pressed="${c==="alarms"}" data-canvas-layer="alarms">告警叠加${l.filter(f=>f.status==="active").length>0?` (${l.filter(f=>f.status==="active").length})`:""}</button>
        </div>`}

      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${q?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${h(q)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${w}px, ${M}px) scale(${n});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${h(x?.plan?.imageUrl??"./media/7F.webp")}" alt="E栋 ${h(x?.name??"7F")} 平面图" />
                  ${R.map((f,F)=>{const _=Be[f.id];if(!_)return"";const W=L===f.id,X=["23.2°C","24.6°C","22.8°C","23.9°C"],ue=["有人 74%","会议中","有人 52%","空闲"],xe=c==="temp"?` · ${X[F%X.length]}`:c==="occupancy"?` · ${ue[F%ue.length]}`:"",Se=c==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":c==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${W?"is-active":""}"
                          style="left:${_.left}%; top:${_.top}%; width:${_.width}%; height:${_.height}%; ${W?"":Se}"
                          data-filter-zone="${h(W?"all":f.id)}"
                          title="${h(f.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${h(f.name.replace(/^7F\s*/,""))}${xe}</span>
                        </button>`}).join("")}
                  ${C.filter(f=>f.planPoint).map(f=>{const F=l.some(X=>X.deviceId===f.id&&X.status==="active"),_=L!=="all"&&f.logicalZoneId!==L||c==="alarms"&&!F,W=c==="alarms"&&F?"background:var(--pacom-status-critical);":"";return`
                        <button type="button" class="pacom-pin ${f.id===A&&y?"is-selected":""} ${f.connectivity==="offline"?"pacom-pin--offline":""} ${_?"pacom-pin--dimmed":""}"
                          style="left:${(f.planPoint.x*100).toFixed(2)}%; top:${(f.planPoint.y*100).toFixed(2)}%; ${W}"
                          data-pin-device="${h(f.id)}" title="${h(f.name)}">
                          <span class="pacom-dot ${F?"pacom-dot--critical":f.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${h(Re(f))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>

      ${q?"":`<div class="pacom-canvas-hint" data-role="canvas-hint">缩放 ${Math.round(n*100)}% · 滚轮缩放 · 拖动平移 · 双击复位</div>`}
      ${we()}
    `}function we(){if(d.level!=="floor"||!y)return"";const v=C.find(f=>f.id===A);if(!v)return"";const E=v.category==="lighting",m=v.category==="hvac",b=Number(v.telemetry.dimming?.value??50),x=Number(v.telemetry.setpoint?.value??24),z=P.has(v.id),R=E?[{label:"当前开关",value:b>0?"开启":"关闭"},{label:"当前亮度",value:`${b}%`},{label:"实时功率",value:b>0?`${Math.round(b*1.4)} W`:"0 W"},{label:"运行模式",value:z?"人工覆盖":"自动策略"}]:m?[{label:"室内温度",value:`${v.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${x.toFixed(1)}°C`},{label:"运行工况",value:v.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:z?"人工覆盖":"自动策略"}]:v.category==="sensor"?[{label:"实时温度",value:`${v.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${v.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${v.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:v.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:v.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:v.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:v.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:v.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${h(v.name)}</h2>
            <div class="pacom-row-sub">${h(J(v.logicalZoneId))} · ${h(ve[v.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${z?"pacom-badge--warning":"pacom-badge--neutral"}">
              ${z?"人工覆盖":"自动策略"}
            </span>
            <span class="pacom-badge ${v.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${v.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>
            </button>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          ${R.map(f=>`
              <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                <span class="pacom-row-sub">${f.label}</span>
                <strong style="font-size:13px; font-weight:500;">${h(f.value)}</strong>
              </div>`).join("")}
        </div>

        ${E||m?`
            <div class="pacom-control-box">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                ${z&&i?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${h(v.id)}">恢复自动策略</button>`:i?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
              </div>
              ${v.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
              ${E?`
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${i?"":"disabled"}>开灯</button>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${i?"":"disabled"}>关灯</button>
                  </div>
                  <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                    亮度目标：<strong>${b}%</strong>
                    <input type="range" min="0" max="100" step="10" value="${b}" data-ctrl-slider="lighting.dimming" ${i?"":"disabled"} />
                  </label>`:`
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${i?"":"disabled"}>开机</button>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${i?"":"disabled"}>关机</button>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span style="font-size:12px;">设定温度：</span>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${x-.5}" ${i?"":"disabled"}>-0.5°C</button>
                    <strong>${x.toFixed(1)}°C</strong>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${x+.5}" ${i?"":"disabled"}>+0.5°C</button>
                  </div>`}
            </div>`:""}

        ${g?`
            <div class="pacom-control-box">
              <div style="font-size:12px; font-weight:500;">最近批次：<code>${h(g.batchId)}</code></div>
              <div class="pacom-receipt-list">
                ${g.receipts.map(f=>{const F=Pe[f.status]??{text:f.status,badge:"pacom-badge--neutral"};return`
                      <div class="pacom-receipt-item">
                        <div>
                          <div><strong>${h(f.deviceId)}</strong> · ${h(f.command)} → ${h(f.targetValue)}</div>
                          ${f.errorMessage?`<div style="color:var(--pacom-status-critical);">${h(f.errorMessage)}</div>`:""}
                        </div>
                        <span class="pacom-badge ${F.badge}">${F.text}</span>
                      </div>`}).join("")}
              </div>
            </div>`:""}

        <details class="lov-tech-details">
          <summary><span>技术标识与硬件绑定</span><span>▾</span></summary>
          <div class="pacom-kv-grid">
            <span class="pacom-kv-label">设备编号</span><span><code>${h(v.id)}</code> · v${v.version}</span>
            <span class="pacom-kv-label">图上点位</span><span>${v.planPoint?`x=${v.planPoint.x.toFixed(2)}, y=${v.planPoint.y.toFixed(2)} (图 v${v.planPoint.planVersion})`:"未标点"}</span>
            <span class="pacom-kv-label">物理安装</span><span>${v.physicalInstalled?"现场已确认":"待现场复核"}</span>
            <span class="pacom-kv-label">硬件绑定</span><span>${v.hardwareBinding?`${v.hardwareBinding.protocol.toUpperCase()} · ${v.hardwareBinding.networkAddress}`:"未绑定"}</span>
          </div>
        </details>
      </aside>
    `}function pe(v){if(v==="all")return{level:"all-projects"};const E=v.split(":");return E[0]==="project"&&E[1]?{level:"project",projectId:E[1]}:E[0]==="building"&&E[1]&&E[2]?{level:"building",projectId:E[1],buildingId:E[2]}:E[0]==="floor"&&E[1]&&E[2]&&E[3]?{level:"floor",projectId:E[1],buildingId:E[2],floorId:E[3]}:{level:"all-projects"}}function G(){const v=l.filter(x=>x.status==="active").length,E=C.filter(x=>x.connectivity==="online").length,m=ae(),b=C.find(x=>x.category==="sensor")?.telemetry.temp?.value??"23.4";t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">空间总览</h1>
            <div class="pacom-header-meta">
              ${d.level==="floor"&&!q?`<span class="pacom-badge pacom-badge--online">在线 ${E}/${C.length} · 均温 ${h(b)}°C</span>`:o?'<span class="pacom-badge pacom-badge--neutral"><span class="pacom-dot pacom-dot--offline"></span>演示模式</span>':'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>'}
              <span class="pacom-badge pacom-badge--neutral">${h(a.roleLabel)}</span>
            </div>
          </div>

          <div class="pacom-header-toolbar">
            <div class="pacom-toolbar-left">
              ${m?`<button type="button" class="lov-icon-btn" data-nav-scope="${h(m)}" title="返回上一空间层级" aria-label="返回上一空间层级">←</button>`:""}
              <div class="pacom-scope-pill" title="项目 / 楼宇 / 楼层空间范围切换">
                <select data-role="scope-select" aria-label="选择查看范围">
                  ${ee()}
                </select>
                <span class="pacom-scope-chevron">▾</span>
              </div>

              ${d.level==="floor"?`
                  <div class="pacom-tabs" role="tablist">
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${j==="devices"}" data-tab="devices">设备</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${j==="zones"}" data-tab="zones">区域</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${j==="alarms"}" data-tab="alarms">
                      告警 ${v>0?`<span class="pacom-badge pacom-badge--warning">${v}</span>`:""}
                    </button>
                  </div>`:""}
            </div>

            <div class="pacom-tabs pacom-mobile-view-switch" role="group" aria-label="窄屏视图切换">
              <button type="button" class="pacom-tab" aria-selected="${I==="list"}" data-mobile-pane-btn="list">列表</button>
              <button type="button" class="pacom-tab" aria-selected="${I==="canvas"}" data-mobile-pane-btn="canvas">平面图</button>
            </div>
          </div>
        </header>

        <section class="pacom-split" data-mobile-pane="${I}">
          <aside class="pacom-left-pane" style="--pacom-sidebar-width:${O}px;">
            ${oe()}
          </aside>
          <div class="pacom-splitter" role="separator" tabindex="0" aria-orientation="vertical" aria-label="调整左右栏宽度" data-role="splitter"></div>
          <main class="pacom-right-pane">
            ${$e()}
          </main>
        </section>
      </div>
    `,Ie()}function Ie(){t.querySelector('[data-role="scope-select"]')?.addEventListener("change",m=>{Y(pe(m.currentTarget.value))}),t.querySelectorAll("[data-nav-scope]").forEach(m=>{m.addEventListener("click",()=>{m.dataset.navScope&&Y(pe(m.dataset.navScope))})}),t.querySelectorAll("[data-tab]").forEach(m=>{m.addEventListener("click",()=>{j=m.dataset.tab,G()})}),t.querySelectorAll("[data-mobile-pane-btn]").forEach(m=>{m.addEventListener("click",()=>{I=m.dataset.mobilePaneBtn,G()})}),t.querySelector('[data-role="search"]')?.addEventListener("input",m=>{k=m.currentTarget.value,N()}),t.querySelector('[data-role="category"]')?.addEventListener("change",m=>{T=m.currentTarget.value,G()}),t.querySelectorAll("[data-filter-zone]").forEach(m=>{m.addEventListener("click",b=>{b.stopPropagation(),L=m.dataset.filterZone??"all",G()})}),t.querySelectorAll("[data-select-device]").forEach(m=>{m.addEventListener("click",b=>{b.target.tagName!=="INPUT"&&(A=m.dataset.selectDevice??null,y=!0,I="canvas",G())})}),t.querySelectorAll("[data-check-device]").forEach(m=>{m.addEventListener("change",()=>{const b=m.dataset.checkDevice;b&&(m.checked?B.add(b):B.delete(b),G())})}),t.querySelectorAll("[data-pin-device]").forEach(m=>{m.addEventListener("click",b=>{b.stopPropagation(),A=m.dataset.pinDevice??null,y=!0,G()})}),t.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{y=!1,G()}),t.querySelector("[data-release-override]")?.addEventListener("click",m=>{const b=m.currentTarget.dataset.releaseOverride;b&&(P.delete(b),G())}),t.querySelectorAll("[data-zone-power]").forEach(m=>{m.addEventListener("click",b=>{b.stopPropagation();const x=m.dataset.zonePower,z=m.dataset.zoneVal==="true";if(!x)return;const R=C.filter(F=>F.logicalZoneId===x&&F.category==="lighting").map(F=>F.id),f=C.filter(F=>F.logicalZoneId===x&&F.category==="hvac").map(F=>F.id);R.length?p(R,"lighting.power",z):f.length&&p(f,"hvac.power",z)})}),t.querySelectorAll("[data-locate-device]").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.locateDevice;b&&(A=b,y=!0,I="canvas",G())})}),t.querySelector("[data-go-alarms]")?.addEventListener("click",()=>{window.location.hash="#alarms"}),t.querySelectorAll("[data-ctrl-cmd]").forEach(m=>{m.addEventListener("click",()=>{if(!A||!m.dataset.ctrlCmd)return;const b=m.dataset.ctrlVal??"",x=b==="true"?!0:b==="false"?!1:Number(b);p([A],m.dataset.ctrlCmd,x)})}),t.querySelector("[data-ctrl-slider]")?.addEventListener("change",m=>{const b=m.currentTarget;!A||!b.dataset.ctrlSlider||p([A],b.dataset.ctrlSlider,Number(b.value))}),t.querySelectorAll("[data-batch-cmd]").forEach(m=>{m.addEventListener("click",()=>{const b=Array.from(B),x=m.dataset.batchVal??"",z=x==="true"?!0:x==="false"?!1:x;p(b,m.dataset.batchCmd,z)})}),t.querySelectorAll("[data-ack-alarm]").forEach(m=>{m.addEventListener("click",async()=>{!m.dataset.ackAlarm||d.level!=="floor"||!$||(await e.acknowledgeAlarm(m.dataset.ackAlarm,"首页快速确认"),l=await e.listAlarms(d.floorId),G())})}),t.querySelectorAll("[data-canvas-layer]").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.canvasLayer;b&&(c=b,G())})}),t.querySelectorAll("[data-zoom]").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.zoom;b==="in"?n=Math.min(2.6,Number((n+.2).toFixed(2))):b==="out"?n=Math.max(.6,Number((n-.2).toFixed(2))):(n=1,w=0,M=0),K()})});const v=t.querySelector('[data-role="canvas-stage"]');if(v&&!q){let m=!1,b=0,x=0,z=0,R=0;v.addEventListener("pointerdown",F=>{F.target?.closest("button, input, select, .pacom-drawer")||(m=!0,b=F.clientX,x=F.clientY,z=w,R=M,v.classList.add("is-panning"),v.setPointerCapture?.(F.pointerId))}),v.addEventListener("pointermove",F=>{m&&(w=z+(F.clientX-b),M=R+(F.clientY-x),K())});const f=()=>{m&&(m=!1,v.classList.remove("is-panning"))};v.addEventListener("pointerup",f),v.addEventListener("pointercancel",f),v.addEventListener("wheel",F=>{F.preventDefault();const _=F.deltaY<0?.12:-.12;n=Math.max(.6,Math.min(2.6,Number((n+_).toFixed(2)))),K()},{passive:!1}),v.addEventListener("dblclick",F=>{F.target?.closest("button")||(n=1,w=0,M=0,K())})}const E=t.querySelector('[data-role="splitter"]');E?.addEventListener("pointerdown",m=>{const b=m.clientX,x=O;E.classList.add("is-dragging");const z=f=>{O=Math.max(320,Math.min(640,x+(f.clientX-b)));const F=t.querySelector(".pacom-left-pane");F&&F.style.setProperty("--pacom-sidebar-width",`${O}px`)},R=()=>{E.classList.remove("is-dragging"),localStorage.setItem(ce,String(Math.round(O))),window.removeEventListener("pointermove",z),window.removeEventListener("pointerup",R)};window.addEventListener("pointermove",z),window.addEventListener("pointerup",R)}),E?.addEventListener("keydown",m=>{if(m.key==="ArrowLeft")m.preventDefault(),O=Math.max(320,O-16);else if(m.key==="ArrowRight")m.preventDefault(),O=Math.min(640,O+16);else if(m.key==="Home")m.preventDefault(),O=320;else if(m.key==="End")m.preventDefault(),O=640;else return;localStorage.setItem(ce,String(Math.round(O)));const b=t.querySelector(".pacom-left-pane");b&&b.style.setProperty("--pacom-sidebar-width",`${O}px`)})}await Y(d)}const Ve=new Set(["lighting","hvac","alarm_rules"]),me={lighting:"照明",hvac:"暖通",alarm_rules:"告警"},le=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function We(t){const e=new Set;for(const a of t.actions)a.command.startsWith("lighting")?e.add("照明"):a.command.startsWith("hvac")?e.add("暖通"):e.add("综合");return Array.from(e)}function He(t,e,a){const s=a?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
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
  `}async function Ze(t,e,a){let[s,o]=await Promise.all([e.listScenes(r.floorId),e.getRuntimeSettings(r.projectId)]),i="manual",$="balanced",S="all",d=null,j="",I=!1,k="",T="";const L=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${o.calendar.workdayStart} – ${o.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${o.calendar.nightGuardStart} – 次日 ${o.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],A=e.subscribeFloorEvents(r.floorId,async c=>{c.type==="control.receipt.updated"&&d?.batchId===c.batchId&&(d=await e.getControlBatch(c.batchId),y())});function y(){const c=j.trim().toLowerCase(),P=c?s.filter(n=>`${n.name} ${n.description}`.toLowerCase().includes(c)):s,B=o.rules.filter(n=>Ve.has(n.category)),C=S==="all"?B:B.filter(n=>n.category===S),l=le.find(n=>n.id===$)??le[1],D=a.scope.canControlDevices,g=a.scope.canEditDeployment;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">智能策略</h1>
              <div class="pacom-tabs" role="tablist" aria-label="智能策略分类">
                <button class="pacom-tab" role="tab" aria-selected="${i==="manual"}" data-scene-tab="manual">快捷场景（${s.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${i==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
                <button class="pacom-tab" role="tab" aria-selected="${i==="rules"}" data-scene-tab="rules">条件联动（${B.length}）</button>
              </div>
            </div>

            <div class="pacom-header-meta">
              <span class="pacom-badge ${D?"pacom-badge--online":"pacom-badge--warning"}">
                ${D?"可执行并核验回执":"只读权限"}
              </span>
              ${i==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${I?"收起新建表单":"+ 新建场景"}</button>`:""}
            </div>
          </div>

          <div class="pacom-header-toolbar">
            <span class="pacom-row-sub">安全执行优先级：人工覆盖 &gt; 快捷场景 &gt; 条件联动 &gt; 排程与节能（现场手动操作始终优先）</span>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:4px 0 28px;">
          ${k?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${k}</span></div>`:""}
          ${T?`<div class="pacom-alert-banner">${T}</div>`:""}

          ${i==="manual"?`
              ${d?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="lov-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${d.batchId}</span>
                      </div>
                      <button class="pacom-btn pacom-btn--ghost" data-close-batch="1">关闭回执</button>
                    </div>
                    <div class="lov-table-card">
                      <div class="lov-table-wrap">
                        <table class="lov-table">
                          <thead>
                            <tr>
                              <th>目标设备</th>
                              <th>下发指令</th>
                              <th>目标值</th>
                              <th>回读状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${d.receipts.map(n=>`
                                <tr>
                                  <td><code style="font-size:12px;">${n.deviceId}</code></td>
                                  <td>${n.command}</td>
                                  <td>${String(n.targetValue)}${n.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${n.errorMessage}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${n.status==="verified_success"?"pacom-badge--online":n.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${n.status}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${I?`
                  <section class="lov-section">
                    <h2 class="lov-section-title">新建快捷场景</h2>
                    <form class="lov-settings-card" data-role="new-scene-form">
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">场景名称</span>
                          <span class="lov-setting-desc">简明描述触发意图，例如「实验区午休调光」「来访接待模式」</span>
                        </div>
                        <div class="lov-setting-control" style="width:min(320px,100%);">
                          <input class="pacom-input" name="name" placeholder="输入场景名称" required />
                        </div>
                      </div>
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">联动动作说明</span>
                          <span class="lov-setting-desc">保存后默认绑定 E7F 照明示例动作，点击执行即可实时核验逐设备回读</span>
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
                <input class="pacom-input" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${j}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${P.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${P.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="lov-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':P.map(n=>{const w=We(n);return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${n.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${w.map(M=>`<span class="pacom-badge pacom-badge--accent">${M}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${n.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${n.description}</p>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${n.lastExecutedAt?n.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${n.id}" ${D?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:i==="schedule_oss"?`
                <div class="lov-kpi-strip" role="region" aria-label="优化启停运行状态">
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">当前优化启停模式</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${l.title}</div>
                    <span class="lov-kpi-delta">${l.estSaving}</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">明日预测预启动时刻</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${l.predictedStart}</div>
                    <span class="lov-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">本周累计节省运行工时</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${l.savedHours}</div>
                    <span class="lov-kpi-delta">异常通信时自动回退本地默认工况</span>
                  </div>
                </div>

                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="lov-mode-grid">
                    ${le.map(n=>`
                      <button type="button" class="lov-mode-card" aria-pressed="${$===n.id}" data-oss-mode="${n.id}" ${D?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${n.title}</strong>
                          <span class="pacom-badge ${$===n.id?"pacom-badge--online":"pacom-badge--neutral"}">${$===n.id?"当前生效":n.badge}</span>
                        </div>
                        <span class="lov-setting-desc">${n.desc}</span>
                        <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${n.estSaving}</span>
                      </button>`).join("")}
                  </div>
                </section>

                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">E7F 自动排程时间表</h2>
                    <button class="pacom-btn" data-go-settings="1">调整项目工作日历 →</button>
                  </div>
                  <div class="lov-table-card">
                    <div class="lov-table-wrap">
                      <table class="lov-table">
                        <thead>
                          <tr>
                            <th>排程任务</th>
                            <th>24 小时覆盖时段</th>
                            <th>联动范围</th>
                            <th style="text-align:right;">启停状态</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${L.map(n=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${n.name}</span>
                                    ${n.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${n.windowLabel}</div>
                                </td>
                                <td>${He(n.startHour,n.endHour,n.enabled)}</td>
                                <td><span class="pacom-row-sub">${n.scope}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${n.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="lov-switch"
                                      role="switch"
                                      aria-checked="${n.enabled}"
                                      aria-label="切换排程 ${n.name}"
                                      data-toggle-schedule="${n.id}"
                                      ${D?"":"disabled"}
                                    >
                                      <span class="lov-switch-thumb"></span>
                                    </button>
                                  </div>
                                </td>
                              </tr>`).join("")}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>`:`
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">事件与传感器条件联动规则（IF → THEN）</h2>
                    <div class="lov-count-pills" role="group" aria-label="按系统筛选规则">
                      ${["all","lighting","hvac","alarm_rules"].map(n=>{const w=n==="all"?"全部":me[n]??n,M=n==="all"?B.length:B.filter(O=>O.category===n).length;return`
                            <button type="button" class="lov-count-pill" aria-pressed="${S===n}" data-rule-cat="${n}">
                              <span>${w}</span><span class="lov-count-num">${M}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="lov-settings-card">
                    ${C.length===0?'<div class="lov-empty-state"><strong>该分类下暂无条件联动规则</strong><span>可切换上方分类胶囊查看全部规则。</span></div>':C.map(n=>`
                              <div class="lov-setting-row">
                                <div class="lov-setting-meta">
                                  <span class="lov-setting-title">
                                    <span class="pacom-badge pacom-badge--accent">${me[n.category]??n.category}</span>
                                    <span>${n.name}</span>
                                    <span class="pacom-badge pacom-badge--neutral">v${n.version}</span>
                                  </span>
                                  <span class="lov-setting-desc">${n.summary} · 范围：${n.scopeLabel} · 回执：${n.receiptSummary??"已同步"}</span>
                                </div>
                                <div class="lov-setting-control">
                                  <span class="pacom-row-sub">${n.enabled?"已启用":"已停用"}</span>
                                  <button
                                    type="button"
                                    class="lov-switch"
                                    role="switch"
                                    aria-checked="${n.enabled?"true":"false"}"
                                    aria-label="切换 ${n.name}"
                                    data-toggle-strategy-rule="${n.id}"
                                    data-rule-ver="${n.version}"
                                    data-rule-next="${!n.enabled}"
                                    ${g?"":"disabled"}
                                  >
                                    <span class="lov-switch-thumb"></span>
                                  </button>
                                </div>
                              </div>`).join("")}
                  </div>
                </section>`}
        </div>
      </div>
    `,t.querySelectorAll("[data-scene-tab]").forEach(n=>{n.addEventListener("click",()=>{i=n.dataset.sceneTab??"manual",k="",y()})}),t.querySelector("[data-close-batch]")?.addEventListener("click",()=>{d=null,y()}),t.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),t.querySelectorAll("[data-oss-mode]").forEach(n=>{n.addEventListener("click",()=>{const w=n.dataset.ossMode;if(!w)return;$=w;const M=le.find(O=>O.id===w);k=`已切换至「${M?.title??w}」模式（明日预测启动 ${M?.predictedStart??""}）。`,y()})}),t.querySelectorAll("[data-toggle-schedule]").forEach(n=>{n.addEventListener("click",()=>{const w=n.dataset.toggleSchedule,M=L.find(O=>O.id===w);M&&(M.enabled=!M.enabled,k=`排程「${M.name}」已${M.enabled?"恢复启用":"临时暂停"}。`,y())})}),t.querySelectorAll("[data-rule-cat]").forEach(n=>{n.addEventListener("click",()=>{S=n.dataset.ruleCat??"all",y()})}),t.querySelectorAll("[data-toggle-strategy-rule]").forEach(n=>{n.addEventListener("click",async()=>{T="";try{await e.toggleRuntimeRule(n.dataset.toggleStrategyRule,n.dataset.ruleNext==="true",Number(n.dataset.ruleVer)),o=await e.getRuntimeSettings(r.projectId),k="条件联动规则状态与版本回执已更新。",y()}catch(w){T=w instanceof Error?w.message:String(w),y()}})}),t.querySelectorAll("[data-toggle-create]").forEach(n=>{n.addEventListener("click",()=>{I=!I,y()})}),t.querySelector("[data-scene-search]")?.addEventListener("input",n=>{const w=n.currentTarget,M=w.selectionStart??w.value.length;j=w.value,y();const O=t.querySelector("[data-scene-search]");O&&(O.focus(),O.setSelectionRange(M,M))}),t.querySelectorAll("[data-exec-scene]").forEach(n=>{n.addEventListener("click",async()=>{T="";try{d=await e.executeScene(n.dataset.execScene),s=await e.listScenes(r.floorId),y()}catch(w){T=w instanceof Error?w.message:String(w),y()}})}),t.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async n=>{n.preventDefault();const w=new FormData(n.currentTarget);try{await e.createScene({projectId:r.projectId,floorId:r.floorId,name:String(w.get("name")??""),description:String(w.get("description")??""),actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:50}]}),s=await e.listScenes(r.floorId),I=!1,k="快捷场景已保存。",y()}catch(M){T=M instanceof Error?M.message:String(M),y()}})}y(),window.addEventListener("hashchange",()=>A(),{once:!0})}function re(t,e){return t.length===0?'<div class="lov-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':t.map(a=>`
      <div class="lov-setting-row">
        <div class="lov-setting-meta">
          <span class="lov-setting-title">
            <span>${a.name}</span>
            <span class="pacom-badge pacom-badge--neutral">v${a.version}</span>
            <span class="pacom-badge pacom-badge--accent">${a.scopeLabel}</span>
          </span>
          <span class="lov-setting-desc">${a.summary} · 回执：${a.receiptSummary??"已同步"}</span>
        </div>
        <div class="lov-setting-control">
          <span class="pacom-row-sub">${a.enabled?"已启用":"已停用"}</span>
          <button
            type="button"
            class="lov-switch"
            role="switch"
            aria-checked="${a.enabled?"true":"false"}"
            aria-label="切换 ${a.name}"
            data-toggle-rule="${a.id}"
            data-rule-ver="${a.version}"
            data-rule-next="${!a.enabled}"
            ${e?"":"disabled"}
          >
            <span class="lov-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function Ue(t,e,a){let s="calendar",o=await e.getRuntimeSettings(r.projectId),i=o.calendar.workdayStart,$=o.calendar.workdayEnd,S=!0,d=[];const j={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",carbonFactor:"0.5271"},I={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},k={criticalSms:!0,inAppBanner:!0,dailyDigest:!1,quietHours:!0};let T="major",L="",A="";function y(){const c=a.scope.canEditDeployment,P=o.rules.filter(l=>l.category==="weather_area"),B=o.rules.filter(l=>l.category==="metering_carbon"),C=o.rules.filter(l=>l.category==="templates");t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">运行设置</h1>
              <div class="pacom-tabs" role="tablist" aria-label="运行设置分类">
                <button class="pacom-tab" role="tab" aria-selected="${s==="calendar"}" data-stab="calendar">运行日历</button>
                <button class="pacom-tab" role="tab" aria-selected="${s==="energy_weather"}" data-stab="energy_weather">能碳与气象</button>
                <button class="pacom-tab" role="tab" aria-selected="${s==="guardrails"}" data-stab="guardrails">控制与安全</button>
                <button class="pacom-tab" role="tab" aria-selected="${s==="notifications"}" data-stab="notifications">通知策略</button>
              </div>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">项目范围：广实2号园</span>
              <span class="pacom-badge ${c?"pacom-badge--online":"pacom-badge--warning"}">
                ${c?"可修改并下发配置":"当前角色只读"}
              </span>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:8px 0 32px;">
          <div style="width:100%; max-width:920px; margin:0 auto; display:flex; flex-direction:column; gap:20px;">
            ${L?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${L}</span></div>`:""}
            ${A?`<div class="pacom-alert-banner">${A}</div>`:""}

            ${s==="calendar"?`
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">工作时间基准</h2>
                    <span class="pacom-badge pacom-badge--neutral">版本 v${o.calendar.version}</span>
                  </div>
                  <div class="lov-settings-card">
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">工作日上班时间</span>
                        <span class="lov-setting-desc">驱动「智能策略 → 排程与节能」中的早间预冷/预热及公区照明启动</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:140px;" type="time" data-cal-start value="${i}" aria-label="工作日上班时间" ${c?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">工作日下班时间</span>
                        <span class="lov-setting-desc">若晚于 21:30 将自动提示与夜间值守巡检窗口的交叠冲突</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:140px;" type="time" data-cal-end value="${$}" aria-label="工作日下班时间" ${c?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row" style="justify-content:flex-end;">
                      <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                      <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${c?"":"disabled"}>保存并校验版本</button>
                    </div>
                  </div>
                </section>

                <section class="lov-section">
                  <h2 class="lov-section-title">节假日与夜间值守</h2>
                  <div class="lov-settings-card">
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">自动跳过中国法定节假日</span>
                        <span class="lov-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                      </div>
                      <div class="lov-setting-control">
                        <span class="pacom-row-sub">${S?"已开启":"已关闭"}</span>
                        <button type="button" class="lov-switch" role="switch" aria-checked="${S}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${c?"":"disabled"}>
                          <span class="lov-switch-thumb"></span>
                        </button>
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">夜间值守巡检窗口</span>
                        <span class="lov-setting-desc">每日 ${o.calendar.nightGuardStart} – 次日 ${o.calendar.nightGuardEnd} 执行非实验区自动关停与巡检</span>
                      </div>
                      <div class="lov-setting-control">
                        <span class="pacom-badge pacom-badge--online">${o.calendar.nightGuardStart} – ${o.calendar.nightGuardEnd}</span>
                      </div>
                    </div>
                  </div>
                </section>

                ${d.length>0?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">受影响的定时与夜间规则预览</h2>
                        <span class="pacom-row-sub">共 ${d.length} 条</span>
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
                              ${d.map(l=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${l.ruleName}</div>
                                      ${l.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${l.conflictWarning}</div>`:""}
                                    </td>
                                    <td>${l.beforeWindow}</td>
                                    <td><strong>${l.afterWindow}</strong></td>
                                    <td>
                                      <span class="pacom-badge ${l.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                        ${l.conflictWarning?"交叠警告":"自动跟随"}
                                      </span>
                                    </td>
                                  </tr>`).join("")}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>`:""}`:s==="energy_weather"?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">气象与面积口径</h2>
                      <span class="pacom-row-sub">用于能效归一化与 OSS 负荷预测</span>
                    </div>
                    <div class="lov-settings-card">
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">室外气象数据源</span>
                          <span class="lov-setting-desc">自动接入室外温湿度与辐射数据，支撑暖通预冷与基线修正</span>
                        </div>
                        <div class="lov-setting-control">
                          <select class="pacom-select" data-energy-field="weatherSource" aria-label="室外气象数据源" ${c?"":"disabled"}>
                            <option value="guanzhou_station" ${j.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                            <option value="campus_sensor" ${j.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                          </select>
                        </div>
                      </div>
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">E 栋计费与能效面积（m²）</span>
                          <span class="lov-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                        </div>
                        <div class="lov-setting-control">
                          <input class="pacom-input" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${j.billingArea}" aria-label="计费面积" ${c?"":"disabled"} />
                        </div>
                      </div>
                      ${re(P,c)}
                    </div>
                  </section>

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">电价与碳排口径</h2>
                      <span class="pacom-row-sub">用于节能费用估算与等效碳排折算</span>
                    </div>
                    <div class="lov-settings-card">
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">综合电价参考（元 / kWh）</span>
                          <span class="lov-setting-desc">用于数据分析中的月度节能金额估算</span>
                        </div>
                        <div class="lov-setting-control">
                          <input class="pacom-input" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${j.tariffYuan}" aria-label="综合电价" ${c?"":"disabled"} />
                        </div>
                      </div>
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">区域电网碳排放因子</span>
                          <span class="lov-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                        </div>
                        <div class="lov-setting-control">
                          <select class="pacom-select" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${c?"":"disabled"}>
                            <option value="0.5271" ${j.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                            <option value="0.5703" ${j.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                          </select>
                        </div>
                      </div>
                      ${re(B,c)}
                      <div class="lov-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${c?"":"disabled"}>保存口径参数</button>
                      </div>
                    </div>
                  </section>`:s==="guardrails"?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">设备控制安全边界</h2>
                        <span class="pacom-badge pacom-badge--accent">防止误操作与设备空转</span>
                      </div>
                      <div class="lov-settings-card">
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">空调允许设定温区（°C）</span>
                            <span class="lov-setting-desc">前端控制抽屉与批量指令均不得超出此安全上下限</span>
                          </div>
                          <div class="lov-setting-control">
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="minTemp" value="${I.minTemp}" aria-label="最低设定温度" ${c?"":"disabled"} />
                            <span class="pacom-row-sub">至</span>
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="maxTemp" value="${I.maxTemp}" aria-label="最高设定温度" ${c?"":"disabled"} />
                            <span class="pacom-row-sub">°C</span>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">人工覆盖自动释放时长</span>
                            <span class="lov-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                          </div>
                          <div class="lov-setting-control">
                            <select class="pacom-select" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${c?"":"disabled"}>
                              <option value="2h" ${I.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                              <option value="4h" ${I.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                              <option value="eod" ${I.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                              <option value="permanent" ${I.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                            </select>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">控制指令回读超时阈值（秒）</span>
                            <span class="lov-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                          </div>
                          <div class="lov-setting-control">
                            <input class="pacom-input" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${I.readbackTimeoutSec}" aria-label="回读超时阈值" ${c?"":"disabled"} />
                            <span class="pacom-row-sub">秒</span>
                          </div>
                        </div>
                        <div class="lov-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${c?"":"disabled"}>保存安全边界</button>
                        </div>
                      </div>
                    </section>

                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">标准设备参数模板</h2>
                        <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                      </div>
                      <div class="lov-settings-card">
                        ${re(C,c)}
                      </div>
                    </section>`:`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">推送通道偏好</h2>
                        <span class="pacom-row-sub">配置项目告警与每日简报分发方式</span>
                      </div>
                      <div class="lov-settings-card">
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">严重告警短信与移动推送</span>
                            <span class="lov-setting-desc">触发严重级别告警或边缘网关断流超过 5 分钟时立即推送值班人</span>
                          </div>
                          <div class="lov-setting-control">
                            <button type="button" class="lov-switch" role="switch" aria-checked="${k.criticalSms}" data-notify-key="criticalSms" aria-label="严重告警短信推送">
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
                            <button type="button" class="lov-switch" role="switch" aria-checked="${k.inAppBanner}" data-notify-key="inAppBanner" aria-label="站内实时横幅提醒">
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
                            <button type="button" class="lov-switch" role="switch" aria-checked="${k.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报">
                              <span class="lov-switch-thumb"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section class="lov-section">
                      <h2 class="lov-section-title">级别门槛与静默期</h2>
                      <div class="lov-settings-card">
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">最低推送告警级别</span>
                            <span class="lov-setting-desc">过滤低优先级提示消息，避免值班期间告警疲劳</span>
                          </div>
                          <div class="lov-setting-control">
                            <select class="pacom-select" data-notify-severity aria-label="最低推送告警级别">
                              <option value="critical" ${T==="critical"?"selected":""}>仅严重告警</option>
                              <option value="major" ${T==="major"?"selected":""}>严重与重要（推荐）</option>
                              <option value="all" ${T==="all"?"selected":""}>全部告警</option>
                            </select>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">夜间静默免打扰（23:00 – 07:00）</span>
                            <span class="lov-setting-desc">夜间静默一般与重要提醒，严重级别告警与网关中断仍自动穿透</span>
                          </div>
                          <div class="lov-setting-control">
                            <button type="button" class="lov-switch" role="switch" aria-checked="${k.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰">
                              <span class="lov-switch-thumb"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>`}
          </div>
        </div>
      </div>
    `,t.querySelectorAll("[data-stab]").forEach(l=>{l.addEventListener("click",()=>{s=l.dataset.stab??"calendar",L="",A="",y()})}),t.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{S=!S,L=`法定节假日自动跳过已${S?"开启":"关闭"}。`,y()}),t.querySelectorAll("[data-energy-field]").forEach(l=>{l.addEventListener("change",()=>{const D=l.dataset.energyField;D&&(j[D]=l.value)})}),t.querySelector("[data-save-energy]")?.addEventListener("click",()=>{L=`能碳与气象口径已保存（面积 ${j.billingArea} m² · 电价 ¥${j.tariffYuan}/kWh · 因子 ${j.carbonFactor}）。`,y()}),t.querySelectorAll("[data-guard-field]").forEach(l=>{l.addEventListener("change",()=>{const D=l.dataset.guardField;D&&(I[D]=l.value)})}),t.querySelector("[data-save-guard]")?.addEventListener("click",()=>{L=`控制安全边界已保存（温区 ${I.minTemp}–${I.maxTemp}°C · 超时 ${I.readbackTimeoutSec}s）。`,y()}),t.querySelectorAll("[data-notify-key]").forEach(l=>{l.addEventListener("click",()=>{const D=l.dataset.notifyKey;D&&(k[D]=!k[D],L="通知策略偏好已更新。",y())})}),t.querySelector("[data-notify-severity]")?.addEventListener("change",l=>{T=l.currentTarget.value??"major",L="推送级别门槛已更新。",y()}),t.querySelector("[data-cal-start]")?.addEventListener("change",l=>{i=l.currentTarget.value}),t.querySelector("[data-cal-end]")?.addEventListener("change",l=>{$=l.currentTarget.value}),t.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{A="",d=await e.previewCalendarImpact(r.projectId,i,$),y()}),t.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{A="";try{const l=await e.saveWorkCalendar(r.projectId,i,$,o.calendar.version);o={...o,calendar:l},L=`运行日历已保存至 v${l.version}（${l.workdayStart} – ${l.workdayEnd}）`,d=[],y()}catch(l){A=l instanceof Error?l.message:String(l),y()}}),t.querySelectorAll("[data-toggle-rule]").forEach(l=>{l.addEventListener("click",async()=>{A="";try{await e.toggleRuntimeRule(l.dataset.toggleRule,l.dataset.ruleNext==="true",Number(l.dataset.ruleVer)),o=await e.getRuntimeSettings(r.projectId),L="策略状态与版本回执已更新。",y()}catch(D){A=D instanceof Error?D.message:String(D),y()}})})}y()}const ge="pacom.web.sidebar.collapsed",Ge=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,be=[{id:"home",label:"空间总览",iconSvg:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/>'},{id:"analysis",label:"数据分析",iconSvg:'<path d="M4 19h16"/><path d="M7 16v-5"/><path d="M12 16V7"/><path d="M17 16v-8"/>'},{id:"alarms",label:"告警中心",iconSvg:'<path d="M12 4 3 19h18L12 4Z"/><path d="M12 10v4"/><path d="M12 17h.01"/>'},{id:"scenes",label:"智能策略",iconSvg:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3"/>'},{id:"settings",label:"运行设置",iconSvg:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2.5"/><circle cx="15" cy="17" r="2.5"/>'},{id:"deployment",label:"系统部署",iconSvg:'<rect x="3" y="4" width="7" height="6" rx="1.5"/><rect x="14" y="4" width="7" height="6" rx="1.5"/><rect x="8.5" y="14" width="7" height="6" rx="1.5"/><path d="M6.5 10v2h11v-2M12 12v2"/>'}],de={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"运行设置",deployment:"系统部署",account:"机构与账户"};function he(){const t=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return t in de?t:"home"}function Q(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function Ye(t,e,a,s){t.classList.remove("bare-login");let o=a,i=he(),$=localStorage.getItem(ge)==="1",S=!1,d=!1,j="";const I=e.mode==="demo"&&typeof e.switchDemoRole=="function";function k(){const n=j.trim(),w=n?be.filter(M=>M.label.includes(n)):be;return w.length?w.map(M=>`
        ${!n&&M.id==="settings"?'<div class="pacom-nav-divider" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${M.id}" aria-current="${i===M.id?"page":"false"}" title="${M.label}">
          <svg class="pacom-nav-icon" viewBox="0 0 24 24" aria-hidden="true">${M.iconSvg}</svg>
          <span class="pacom-nav-label">${M.label}</span>
        </button>`).join(""):'<div class="pacom-nav-empty">没有匹配的工作区</div>'}function T(){if(!d)return"";const n=o.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${$?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab.jpg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${Q(o.roleLabel)}${I?" · 演示":""}</small>
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
          <span class="pacom-pop-avatar" aria-hidden="true">${Q(n)}</span>
          <span class="pacom-pop-text">
            <b>${Q(o.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${I?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">演示角色切换（RBAC 权限预览）</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(U).map(w=>{const M=U[w],O=w===o.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${O}" data-pop-role="${w}">
                      <span class="pacom-pop-text">
                        <b>${Q(M.roleLabel)}</b>
                        <small>${Q(M.displayName)}</small>
                      </span>
                      ${O?'<svg class="pacom-pop-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>':""}
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
    `}async function L(n){switch(document.title=`${de[i]} · PACOM Station`,i){case"home":await Ne(n,e,o);return;case"analysis":await qe(n,e);return;case"alarms":await De(n,e,o);return;case"scenes":await Ze(n,e,o);return;case"settings":await Ue(n,e,o);return;case"deployment":await ze(n,e,o);return;case"account":await Ae(n,e,o,w=>{o=w,C(!0)},A);return}}async function A(){d=!1,S=!1,q();try{await e.logout()}finally{window.location.hash="#login",s()}}function y(){const n=t.querySelector('[data-role="nav-list"]');n&&(n.innerHTML=k(),P())}function c(){t.querySelector('[data-role="org-popover"]')?.remove();const n=t.querySelector('[data-role="org-menu-btn"]');if(n&&n.setAttribute("aria-expanded",String(d)),!d)return;const w=document.createElement("div");w.innerHTML=T().trim();const M=w.firstElementChild;M&&(t.appendChild(M),B())}function P(){t.querySelectorAll("[data-route]").forEach(n=>{n.addEventListener("click",()=>{const w=n.dataset.route;w===i&&!S||(i=w,S=!1,d=!1,window.location.hash=`#${i}`,C(!0))})})}function B(){t.querySelectorAll('[data-pop-act="go-account"]').forEach(n=>{n.addEventListener("click",()=>{d=!1,S=!1,i="account",window.location.hash="#account",C(!0)})}),t.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{A()}),t.querySelectorAll("[data-pop-role]").forEach(n=>{n.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const w=n.dataset.popRole;d=!1,S=!1,o=await e.switchDemoRole(w),await C(!0)})})}async function C(n){const w=t.querySelector('[data-role="main-stage"]');if(!n&&w){const O=t.querySelector(".pacom-nav-rail");O&&(O.classList.toggle("is-collapsed",$),O.classList.toggle("is-mobile-open",S));const V=t.querySelector('[data-role="mobile-scrim"]');V&&V.classList.toggle("is-open",S),c();return}t.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
          <h1 class="pacom-mobile-title">${de[i]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${Q(o.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${S?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${$?"is-collapsed":""} ${S?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${Ge}</div>
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
            ${k()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${i==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${d}" title="广州国家实验室 · ${Q(o.displayName)}">
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
    `,t.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{$=!$,d=!1,localStorage.setItem(ge,$?"1":"0");const O=t.querySelector(".pacom-nav-rail"),V=t.querySelector('[data-role="toggle-sidebar"]');O&&O.classList.toggle("is-collapsed",$),V&&(V.title=$?"展开侧栏":"收起侧栏",V.setAttribute("aria-label",V.title),V.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${$?'<path d="m9 6 6 6-6 6"/>':'<path d="m15 6-6 6 6 6"/>'}</svg>`),c()}),t.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{S=!S,C(!1)}),t.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{S=!1,d=!1,C(!1)}),t.querySelector('[data-role="nav-search"]')?.addEventListener("input",O=>{j=O.currentTarget.value,y()}),t.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",O=>{O.stopPropagation(),d=!d,c()}),P(),c();const M=t.querySelector('[data-role="main-stage"]');M&&await L(M)}const l=n=>{if(!d)return;const w=n.target;w?.closest('[data-role="org-popover"]')||w?.closest('[data-role="org-menu-btn"]')||(d=!1,c())},D=n=>{n.key==="Escape"&&(d?(d=!1,c()):S&&(S=!1,C(!1)))},g=()=>{const n=he();n!==i&&(i=n,d=!1,S=!1,C(!0))};function q(){document.removeEventListener("click",l),document.removeEventListener("keydown",D),window.removeEventListener("hashchange",g)}document.addEventListener("click",l),document.addEventListener("keydown",D),window.addEventListener("hashchange",g),await C(!0)}const Ke=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Xe='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',Qe='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',te='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>',fe={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},Je={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function et(t){const e=t.replace(/\D/g,"");return e.length===11?`${e.slice(0,3)} •••• ${e.slice(7)}`:t}function Z(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ye(t,e,a){t.classList.add("bare-login"),document.title="登录 · PACOM Station";let s=!1,o=!1,i="",$="",S="",d="",j=!1,I={},k="",T=!1,L="",A=0,y=null,c=null,P="privacy",B="",C="",l="";const D=e.mode==="demo"&&typeof e.switchDemoRole=="function";function g(){y!==null&&(window.clearInterval(y),y=null),t.classList.remove("bare-login")}function q(){A=60,y!==null&&window.clearInterval(y),y=window.setInterval(()=>{A-=1,A<=0&&(A=0,y!==null&&(window.clearInterval(y),y=null));const O=t.querySelector('[data-act="send-sms"]');O&&(O.disabled=A>0,O.textContent=A>0?`${A} 秒后重发`:L?"重新获取":"获取验证码")},1e3)}function n(){if(!c)return"";if(c==="reset")return`
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
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${Z(C)}" />
                  </div>
                </div>
                ${l?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${Z(l)}</p>`:""}
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
                ${D?"当前为离线演示环境，您可直接通过登录页的「演示角色快速体验」切换 5 类内置角色进入 E7F 工作区。":"正式接入账户服务后，将在此开放自助注册与机构邀请码加入流程。"}
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
              ${D?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">选择演示角色</button>':""}
            </div>
          </section>
        </div>
      `;if(c==="legal"){const O=fe[P],V=["privacy","terms","service"].map(H=>`<button type="button" role="tab" aria-selected="${P===H}" class="au-legal-tab ${P===H?"is-active":""}" data-act="switch-legal" data-tab="${H}">${fe[H].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${te}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${V}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${O.items.map(H=>`<li>${Z(H)}</li>`).join("")}
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
                  ${B||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:c==="demoRoles"&&D?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择演示角色</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${te}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(U).map(O=>{const V=U[O];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${O}">
                        <div>
                          <b>${Z(V.roleLabel)} · ${Z(V.displayName)}</b>
                          <small>${Z(Je[O])}</small>
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
      `:""}function w(){const O=s?`
        <div class="au-field ${I.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Z(S)}" aria-invalid="${I.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${A>0?"disabled":""}>
              ${A>0?`${A} 秒后重发`:L?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${Z(I.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${L?`验证码已发送至 ${Z(et(L))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${I.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Z(i)}" aria-invalid="${I.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${Z(I.id??"")}</p>
        </div>
      `,V=s?`
        <div class="au-field ${I.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Z(d)}" aria-invalid="${I.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${Z(I.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${I.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${o?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Z($)}" aria-invalid="${I.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${o?"隐藏密码":"显示密码"}">
              ${o?Qe:Xe}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${Z(I.pwd??"")}</p>
        </div>
      `;t.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${Ke}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${T?"disabled":""}>
                  ${O}
                  ${V}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${k?"":"hidden"}>${Z(k)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${j?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${T?"disabled":""}>
                    ${T?"正在登录…":"登录"}
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
                ${D?`<div class="au-demo-bar">
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
      ${n()}
    `,M()}function M(){const O=t.querySelector("#au-id"),V=t.querySelector("#au-pwd"),H=t.querySelector("#au-sphone"),Y=t.querySelector("#au-scode"),J=t.querySelector('input[name="keep"]');O?.addEventListener("input",()=>{if(i=O.value,I.id||k){delete I.id,k="",O.closest(".au-field")?.classList.remove("bad");const u=t.querySelector("#au-id-err");u&&(u.textContent="");const p=t.querySelector("#au-login-ferr");p&&(p.hidden=!0)}}),V?.addEventListener("input",()=>{if($=V.value,I.pwd||k){delete I.pwd,k="",V.closest(".au-field")?.classList.remove("bad");const u=t.querySelector("#au-pwd-err");u&&(u.textContent="");const p=t.querySelector("#au-login-ferr");p&&(p.hidden=!0)}}),H?.addEventListener("input",()=>{if(S=H.value,I.sphone||k){delete I.sphone,k="",H.closest(".au-field")?.classList.remove("bad");const u=t.querySelector("#au-sphone-err");u&&(u.textContent="");const p=t.querySelector("#au-login-ferr");p&&(p.hidden=!0)}}),Y?.addEventListener("input",()=>{if(d=Y.value.replace(/\D/g,"").slice(0,6),Y.value=d,I.scode||k){delete I.scode,k="",Y.closest(".au-field")?.classList.remove("bad");const u=t.querySelector("#au-scode-err");u&&(u.textContent="");const p=t.querySelector("#au-login-ferr");p&&(p.hidden=!0)}}),J?.addEventListener("change",()=>{j=J.checked}),t.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{o=!o,w(),t.querySelector("#au-pwd")?.focus()}),t.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{s=!s,I={},k="",w(),t.querySelector(s?"#au-sphone":"#au-id")?.focus()}),t.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const u=S.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(u)){I={sphone:"请输入有效的手机号码"},w(),t.querySelector("#au-sphone")?.focus();return}I={},L=u,q(),w(),t.querySelector("#au-scode")?.focus()}),t.querySelector('form[data-form="login"]')?.addEventListener("submit",async u=>{if(u.preventDefault(),!T){if(I={},k="",s?(S.trim()||(I.sphone="请输入手机号码"),/^\d{6}$/.test(d.trim())||(I.scode="请输入 6 位验证码")):(i.trim()||(I.id="请输入电子邮箱或手机号码"),$||(I.pwd="请输入密码")),Object.keys(I).length>0){w();const p=Object.keys(I)[0];t.querySelector(`#au-${p}`)?.focus();return}T=!0,w();try{const p=await e.login({account:(s?S:i).trim(),password:s?d.trim():$});g(),a(p)}catch(p){T=!1,k=p instanceof Error?p.message:"账户或密码不正确",w()}}}),t.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{C=i.trim(),l="",c="reset",w(),t.querySelector("#au-rs-id")?.focus()}),t.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{c="register",w()}),t.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{c="legal",w()}),t.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{B="",c="contact",w()}),t.querySelectorAll('[data-act="open-demo-roles"]').forEach(u=>{u.addEventListener("click",()=>{c="demoRoles",w()})}),t.querySelectorAll('[data-act="close-modal"]').forEach(u=>{u.addEventListener("click",()=>{c=null,w()})}),t.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",u=>{u.target===u.currentTarget&&(c=null,w())}),t.querySelectorAll('[data-act="switch-legal"]').forEach(u=>{u.addEventListener("click",()=>{const p=u.dataset.tab;p&&(P=p,w())})}),t.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),B="已复制"}catch{B="support@pacom.cn"}w()}),t.querySelector("#au-reset-form")?.addEventListener("submit",u=>{u.preventDefault(),C=t.querySelector("#au-rs-id")?.value.trim()??"",C?D?l="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":l="如账户存在，验证码已发送。":l="请输入电子邮箱或手机号码",w()}),t.querySelectorAll('[data-act="pick-demo-role"]').forEach(u=>{u.addEventListener("click",async()=>{const p=u.dataset.roleId;if(!p||!e.switchDemoRole)return;const N=await e.switchDemoRole(p);g(),a(N)})})}w()}async function tt(){const t=document.getElementById("app");if(t)try{const e=Ee(),a=await e.getSession(),s=async o=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await Ye(t,e,o,()=>{ye(t,e,i=>{s(i)})})};if(!a||window.location.hash==="#login"){ye(t,e,o=>{s(o)});return}await s(a)}catch(e){t.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(e)}</div></div>`}}tt();
//# sourceMappingURL=index-CfSN3I46.js.map
