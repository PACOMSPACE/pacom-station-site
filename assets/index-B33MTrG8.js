(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const g of i.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&a(g)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const s={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},A={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[s.projectId,s.project1Id],allowedBuildingIds:[s.buildingId,s.buildingFId],allowedFloorIds:[s.lockedFloor8Id,s.floorId,s.lockedFloor6Id],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[s.projectId],allowedBuildingIds:[s.buildingId,s.buildingFId],allowedFloorIds:[s.lockedFloor8Id,s.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[s.projectId],allowedBuildingIds:[s.buildingId],allowedFloorIds:[s.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[s.projectId],allowedBuildingIds:[s.buildingId],allowedFloorIds:[s.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[s.projectId],allowedBuildingIds:[s.buildingId],allowedFloorIds:[s.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},O="pacom.web.demo.role";class W{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){const e=sessionStorage.getItem(O);e&&A[e]&&(this.activeSession=structuredClone(A[e]));const o=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:s.projectId,buildingId:s.buildingId,floorId:s.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:s.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:o,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:o,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:s.projectId,buildingId:s.buildingId,floorId:s.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:s.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:o,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:s.projectId,buildingId:s.buildingId,floorId:s.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:s.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:o,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:s.projectId,buildingId:s.buildingId,floorId:s.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:s.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:o,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:o,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:o,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:s.projectId,buildingId:s.buildingId,floorId:s.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:s.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:o,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:s.projectId,buildingId:s.buildingId,floorId:s.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:s.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:o,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:o,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:o,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:s.projectId,buildingId:s.buildingId,floorId:s.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:s.projectId,buildingId:s.buildingId,floorId:s.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:s.projectId,buildingId:s.buildingId,floorId:s.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:s.projectId,buildingId:s.buildingId,floorId:s.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:o},{id:"conn-e7f-dali",projectId:s.projectId,buildingId:s.buildingId,floorId:s.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:o},{id:"conn-e7f-modbus",projectId:s.projectId,buildingId:s.buildingId,floorId:s.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:s.projectId,floorId:s.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:s.projectId,floorId:s.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:s.projectId,floorId:s.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:s.projectId,floorId:s.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:s.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:s.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:o,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:s.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:o,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:s.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:s.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:s.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:o,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:s.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(A).map((a,t)=>({userId:a.userId,displayName:a.displayName,email:`${a.role.replaceAll("_",".")}@pacom.local`,role:a.role,roleLabel:a.roleLabel,scopeSummary:a.scope.allowedZoneIds?.length?`E栋 7F（${a.scope.allowedZoneIds.length} 个我的区域）`:`${a.scope.allowedProjectIds.length} 项目 / ${a.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:t===0?o:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(e,o,a,t,i){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:o,endpoint:a,request:i,response:t}),this.traces.length>40&&this.traces.pop()}pushAudit(e,o,a,t){const i=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:i?.displayName??"anonymous",role:i?.role??"member",action:e,target:o,result:a,detail:t})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){if(!e.account.trim()||!e.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const o=e.account.includes("admin")?"org_admin":e.account.includes("eng")?"commissioning_engineer":e.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(A[o]),sessionStorage.setItem(O,o),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:e.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(O),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(e){return this.activeSession=structuredClone(A[e]),sessionStorage.setItem(O,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}async getSpatialTree(){const e=this.requireSession(),o=[{id:s.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",imageUrl:"/media/gzlab.jpg"},{id:s.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",imageUrl:"/media/gzlab.jpg"}],a=[{id:s.buildingId,projectId:s.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"/media/building-e.png"},{id:s.buildingFId,projectId:s.projectId,name:"F栋",aboveFloors:12,belowFloors:2,hasRoof:!0,areaSqm:21400,imageUrl:"/media/building-f.png"}],t={projects:o.filter(i=>e.scope.allowedProjectIds.includes(i.id)),buildings:a.filter(i=>e.scope.allowedBuildingIds.includes(i.id)),floors:[{id:s.lockedFloor8Id,buildingId:s.buildingId,kind:"above",level:8,name:"8F",plan:null},{id:s.floorId,buildingId:s.buildingId,kind:"above",level:7,name:"7F",areaSqm:1383.1,plan:{floorId:s.floorId,imageUrl:"/media/7F.webp",planVersion:1,updatedAt:"2026-11-22T00:00:00Z"}},{id:s.lockedFloor6Id,buildingId:s.buildingId,kind:"above",level:6,name:"6F",plan:null}],zones:[{id:"zone-e7f-lab-east",floorId:s.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:s.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:s.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:s.floorId,name:"核心走廊与弱电井",category:"corridor"}]};return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:t.projects.length,buildings:t.buildings.length,floors:t.floors.length}),t}async getFloorDevices(e){const o=this.requireSession();if(!o.scope.allowedFloorIds.includes(e)){const t={code:"FORBIDDEN",status:403,message:`当前角色「${o.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,t),this.pushAudit("floor.read",e,"denied",t.message),new Error(`403 FORBIDDEN: ${t.message}`)}if(e!==s.floorId)return[];let a=structuredClone(this.devices);return o.scope.allowedZoneIds?.length&&(a=a.filter(t=>t.logicalZoneId&&o.scope.allowedZoneIds.includes(t.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:a.length}),a}async dispatchControlBatch(e){const o=this.requireSession();if(!o.scope.canControlDevices||!o.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权下发控制指令`);const a=`batch-e7f-${Date.now().toString(36)}`,t={batchId:a,floorId:e.floorId,createdBy:o.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(i=>({deviceId:i.deviceId,command:i.command,targetValue:i.targetValue,status:"queued"}))};return this.batches.set(a,t),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",t,e),this.pushAudit("control.dispatch",a,"success",`下发 ${e.targets.length} 台设备`),t.receipts.forEach((i,g)=>{const w=this.devices.find(c=>c.id===i.deviceId);setTimeout(()=>{i.status="dispatched",i.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:a,deviceId:i.deviceId,status:"dispatched",at:i.dispatchedAt})},280+g*120),setTimeout(()=>{const c=new Date().toISOString();!w||w.connectivity==="offline"?(i.status="timeout",i.errorCode="GATEWAY_READBACK_TIMEOUT",i.errorMessage="设备离线，网关未收到回读确认",i.verifiedAt=c):(i.status="verified_success",i.observedValue=i.targetValue,i.verifiedAt=c,this.applyObservedTelemetry(w,i.command,i.targetValue,c)),this.emit({type:"control.receipt.updated",batchId:a,deviceId:i.deviceId,status:i.status,observedValue:i.observedValue,at:c})},900+g*220)}),structuredClone(t)}applyObservedTelemetry(e,o,a,t){o==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:a,collectedAt:t,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(a)>0,collectedAt:t,stale:!1})):(o==="lighting.power"||o==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:a,collectedAt:t,stale:!1}:o==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:a,collectedAt:t,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:t,values:{[o]:a}})}async getControlBatch(e){this.requireSession();const o=this.batches.get(e);if(!o)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(o)}async listAlarms(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==s.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,o){const a=this.requireSession();if(!a.scope.canManageAlarms){const i=`角色「${a.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",i),new Error(`403 FORBIDDEN: ${i}`)}const t=this.alarms.find(i=>i.id===e);if(!t)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return t.status="acknowledged",t.acknowledgedAt=new Date().toISOString(),t.acknowledgedBy=a.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,t,{note:o}),this.pushAudit("alarm.acknowledge",e,"success",o),this.emit({type:"alarm.changed",floorId:t.floorId,alarmId:e,status:"acknowledged",at:t.acknowledgedAt}),structuredClone(t)}async listWorkOrders(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==s.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const o=this.requireSession();if(!o.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权创建工单`);const a=new Date().toISOString(),t={id:`wo-e7f-${Date.now().toString(36)}`,projectId:s.projectId,buildingId:s.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:a,updatedAt:a};if(this.workOrders.unshift(t),e.alarmId){const i=this.alarms.find(g=>g.id===e.alarmId);i&&(i.workOrderId=t.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",t,e),this.pushAudit("work_order.create",t.id,"success",t.title),structuredClone(t)}async updateWorkOrderStatus(e,o){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权流转工单`);const t=this.workOrders.find(i=>i.id===e);if(!t)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return t.status=o,t.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,t,{status:o}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${o}`),structuredClone(t)}async updateDevicePlanPoint(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权编辑图纸标点`);const a=this.devices.find(t=>t.id===e.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(a.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${a.version}，请刷新后重试`);return a.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},a.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,a,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${a.planPoint.x}, ${a.planPoint.y})`),structuredClone(a)}async updateDeviceHardwareBinding(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权修改硬件绑定`);const a=this.devices.find(i=>i.id===e.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(a.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${a.version}）`);const t=new Date().toISOString();return a.physicalInstalled=e.physicalInstalled,a.physicalVerifiedAt=e.physicalInstalled?t:null,a.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:t,boundBy:o.displayName},a.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,a,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(a)}async listConnections(e){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,o){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权冻结交付批次`);const t=this.devices.filter(g=>g.physicalInstalled&&g.hardwareBinding).length,i={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:s.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:t,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:a.displayName,note:o||"例行交付基线冻结"};return this.deliveryBatches.unshift(i),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,i,{note:o}),this.pushAudit("delivery.freeze",i.id,"success",`${t}/${this.devices.length} 已现场核验`),structuredClone(i)}async getAnalysisReport(e,o,a){this.requireSession();const t=o==="today"?1:o==="7d"?7:30,g={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*t)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*t).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(u=>u.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*t).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*t).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*t).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],w=o==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],c={category:e,range:o,scopeId:a,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:g.kpis,unit:g.unit,series:g.base.map((u,p)=>({label:w[p],value:Math.round(u*(e==="energy"||e==="carbon"?t/2+.5:1)),baseline:Math.round(u*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:g.base[3],unit:g.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:g.base[4],unit:g.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:g.base[1],unit:g.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${o}&scopeId=${a}`,{kpis:c.kpis.length}),c}async listScenes(e){return this.requireSession(),structuredClone(this.scenes)}async createScene(e){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const a={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(a),this.record("REST","createScene","POST /api/v1/scenes",a,e),this.pushAudit("scene.create",a.id,"success",a.name),structuredClone(a)}async executeScene(e){const o=this.scenes.find(t=>t.id===e);if(!o)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const a=await this.dispatchControlBatch({floorId:o.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:o.actions,reason:`触发场景：${o.name}`});return o.lastExecutedAt=new Date().toISOString(),o.lastBatchId=a.batchId,a}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:s.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,o,a){this.requireSession();const t=a>=this.calendar.nightGuardStart?`下班时间 ${a} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,i=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${o} - ${a}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${o} (-30m) ~ ${a} (+30m)`,conflictWarning:t},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:t}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",i,{workdayStart:o,workdayEnd:a}),i}async saveWorkCalendar(e,o,a,t){const i=this.requireSession();if(!i.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权修改运行日历`);if(this.calendar.version!==t)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(o>=a)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:o,workdayEnd:a,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:o,workdayEnd:a,expectedVersion:t}),this.pushAudit("settings.calendar",s.projectId,"success",`${o}-${a}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,o,a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权启停运行规则`);const i=this.rules.find(g=>g.id===e);if(!i)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(i.version!==a)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${i.version}）`);return i.enabled=o,i.version+=1,i.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,i,{enabled:o,expectedVersion:a}),this.pushAudit("settings.rule_toggle",e,"success",o?"启用":"停用"),structuredClone(i)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,o){const a=this.requireSession();if(a.role!=="org_admin"&&a.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const t=A[o],i={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:o,roleLabel:t.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(i),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",i,{email:e,role:o}),this.pushAudit("org.invite",e,"success",t.roleLabel),structuredClone(i)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(e,o){return e!==s.floorId?()=>{}:(this.listeners.add(o),()=>{this.listeners.delete(o)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${s.floorId}`,e),this.listeners.forEach(o=>o(e))}}function J(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new W}async function ee(n,e,o,a,t){let i="profile",g=await e.listOrgMembers(),w=await e.listAuditLogs(),c="";async function u(){[g,w]=await Promise.all([e.listOrgMembers(),e.listAuditLogs()]),p()}function p(){const I=e.mode==="demo"&&typeof e.switchDemoRole=="function";n.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">账户与机构设置</h1>
            <button class="pacom-btn" data-role="logout-btn">退出登录</button>
          </div>
          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist">
              <button class="pacom-tab" role="tab" aria-selected="${i==="profile"}" data-atab="profile">我的账户与权限</button>
              <button class="pacom-tab" role="tab" aria-selected="${i==="members"}" data-atab="members">机构成员（${g.length}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${i==="audit"}" data-atab="audit">审计日志（${w.length}）</button>
            </div>
          </div>
        </header>

        ${c?`<div class="pacom-alert-banner">${c}</div>`:""}

        <div class="pacom-content-page" style="padding:0;">
          ${i==="profile"?`
              <section class="pacom-card">
                <h2 class="pacom-drawer-title">当前会话（服务端下发 RBAC 契约）</h2>
                <pre class="pacom-code">${JSON.stringify(o,null,2)}</pre>
              </section>
              ${I?`
                  <section class="pacom-card">
                    <h2 class="pacom-drawer-title">多角色权限预览切换（仅 Demo 模式可用）</h2>
                    <div class="pacom-role-grid">
                      ${Object.keys(A).map(l=>{const $=A[l];return`
                            <button class="pacom-role-card ${l===o.role?"is-active":""}" data-switch-role="${l}">
                              <strong>${$.roleLabel}</strong>
                              <span class="pacom-row-sub">${$.displayName}</span>
                              <span class="pacom-row-sub">授权楼层 ${$.scope.allowedFloorIds.length} 层 · 部署编辑：${$.scope.canEditDeployment?"是":"否"}</span>
                            </button>`}).join("")}
                    </div>
                  </section>`:""}`:i==="members"?`
                <section class="pacom-card">
                  <h2 class="pacom-drawer-title">邀请新成员</h2>
                  <form data-role="invite-form" style="display:grid; grid-template-columns:1fr 180px auto; gap:8px;">
                    <input class="pacom-input" name="email" type="email" placeholder="colleague@pacom.local" required />
                    <select class="pacom-select" name="role">
                      ${Object.keys(A).map(l=>`<option value="${l}">${A[l].roleLabel}</option>`).join("")}
                    </select>
                    <button class="pacom-btn pacom-btn--primary" type="submit">发送邀请</button>
                  </form>
                </section>
                <section class="pacom-card">
                  <h2 class="pacom-drawer-title">成员与资源范围列表</h2>
                  ${g.map(l=>`
                      <div class="pacom-receipt-item">
                        <div>
                          <strong>${l.displayName}</strong> <span class="pacom-row-sub">${l.email}</span>
                          <div class="pacom-row-sub">${l.roleLabel} · ${l.scopeSummary}</div>
                        </div>
                        <span class="pacom-badge ${l.status==="active"?"pacom-badge--online":"pacom-badge--accent"}">${l.status}</span>
                      </div>`).join("")}
                </section>`:`
                <section class="pacom-card">
                  <h2 class="pacom-drawer-title">操作与权限拦截审计日志</h2>
                  ${w.map(l=>`
                      <div class="pacom-receipt-item">
                        <div>
                          <strong>${l.action}</strong> → <code>${l.target}</code>
                          <div class="pacom-row-sub">${l.actor} · ${l.at.slice(0,19).replace("T"," ")} · ${l.detail??""}</div>
                        </div>
                        <span class="pacom-badge ${l.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">${l.result}</span>
                      </div>`).join("")}
                </section>`}
        </div>
      </div>
    `,n.querySelectorAll("[data-atab]").forEach(l=>{l.addEventListener("click",()=>{i=l.dataset.atab,c="",p()})}),n.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",t()}),n.querySelectorAll("[data-switch-role]").forEach(l=>{l.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const $=await e.switchDemoRole(l.dataset.switchRole);a($)})}),n.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async l=>{l.preventDefault(),c="";const $=new FormData(l.currentTarget);try{await e.inviteOrgMember(String($.get("email")??""),String($.get("role"))),await u()}catch(S){c=S instanceof Error?S.message:String(S),p()}})}p()}async function te(n,e,o){let a=[],t=[],i="all",g="";async function w(){[a,t]=await Promise.all([e.listAlarms(s.floorId),e.listWorkOrders(s.floorId)]),c()}function c(){const u=i==="all"?a:a.filter(p=>p.status===i);n.innerHTML=`
      <div class="pacom-content-page">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h1 class="pacom-title">告警工单</h1>
          <div style="display:flex; gap:8px; align-items:center;">
            <select class="pacom-select" data-alarm-filter>
              <option value="all" ${i==="all"?"selected":""}>全部告警状态</option>
              <option value="active" ${i==="active"?"selected":""}>待确认</option>
              <option value="acknowledged" ${i==="acknowledged"?"selected":""}>已确认</option>
            </select>
            <span class="pacom-badge ${o.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
              ${o.scope.canManageAlarms?"可确认、转单与流转":"只读权限"}
            </span>
          </div>
        </div>

        ${g?`<div class="pacom-alert-banner">${g}</div>`:""}

        <section class="pacom-card">
          <h2 class="pacom-drawer-title">E7F 实时告警队列（${u.length}）</h2>
          ${u.map(p=>`
              <div class="pacom-receipt-item">
                <div>
                  <strong>${p.title}</strong> <span class="pacom-badge pacom-badge--neutral">${p.severity}</span>
                  <div class="pacom-row-sub">${p.message} · 设备：${p.deviceId}</div>
                </div>
                <div style="display:flex; gap:6px; align-items:center;">
                  ${p.status==="active"?`<button class="pacom-btn" data-ack="${p.id}">确认告警</button>`:'<span class="pacom-badge pacom-badge--online">已确认</span>'}
                  ${p.workOrderId?`<span class="pacom-badge pacom-badge--accent">已关联 ${p.workOrderId}</span>`:`<button class="pacom-btn pacom-btn--primary" data-to-wo="${p.id}">转工单</button>`}
                </div>
              </div>`).join("")}
        </section>

        <section class="pacom-card">
          <h2 class="pacom-drawer-title">运维工单生命周期（${t.length}）</h2>
          ${t.map(p=>`
              <div class="pacom-receipt-item">
                <div>
                  <strong>${p.title}</strong> <span class="pacom-row-sub">(${p.id})</span>
                  <div class="pacom-row-sub">${p.description}</div>
                </div>
                <select class="pacom-select" data-wo-status="${p.id}">
                  ${["open","assigned","in_progress","resolved","closed"].map(I=>`<option value="${I}" ${p.status===I?"selected":""}>${I}</option>`).join("")}
                </select>
              </div>`).join("")}
        </section>
      </div>
    `,n.querySelector("[data-alarm-filter]")?.addEventListener("change",p=>{i=p.currentTarget.value,c()}),n.querySelectorAll("[data-ack]").forEach(p=>{p.addEventListener("click",async()=>{g="";try{await e.acknowledgeAlarm(p.dataset.ack,"告警工作区确认"),await w()}catch(I){g=I instanceof Error?I.message:String(I),c()}})}),n.querySelectorAll("[data-to-wo]").forEach(p=>{p.addEventListener("click",async()=>{g="";const I=a.find(l=>l.id===p.dataset.toWo);if(I)try{await e.createWorkOrder({floorId:I.floorId,deviceId:I.deviceId,alarmId:I.id,title:`处置告警：${I.title}`,description:I.message}),await w()}catch(l){g=l instanceof Error?l.message:String(l),c()}})}),n.querySelectorAll("[data-wo-status]").forEach(p=>{p.addEventListener("change",async()=>{g="";try{await e.updateWorkOrderStatus(p.dataset.woStatus,p.value),await w()}catch(I){g=I instanceof Error?I.message:String(I),await w()}})})}await w()}const ae=[{id:"energy",label:"能源"},{id:"environment",label:"环境"},{id:"occupancy",label:"占用"},{id:"health",label:"设备健康"},{id:"carbon",label:"碳排放"}];function oe(n){const e=Math.max(...n.series.map(g=>Math.max(g.value,g.baseline??0)),1),o=46,a=22;return`
    <svg viewBox="0 0 ${n.series.length*(o+a)+40} 190" style="width:100%; height:200px; display:block;" role="img" aria-label="${n.category} 趋势图">
      ${n.series.map((g,w)=>{const c=24+w*(o+a),u=Math.max(8,Math.round(g.value/e*130)),p=152-u;return`
            <rect x="${c}" y="${p}" width="${o}" height="${u}" rx="6" fill="var(--pacom-accent)" opacity="0.82" />
            <text x="${c+o/2}" y="${p-6}" text-anchor="middle" font-size="11" fill="var(--pacom-text-primary)">${g.value}</text>
            <text x="${c+o/2}" y="172" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${g.label}</text>
          `}).join("")}
    </svg>
  `}async function ie(n,e,o){let a="energy",t="7d",i=!1,g=null;async function w(){g=await e.getAnalysisReport(a,t,s.floorId),c()}function c(){g&&(n.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">数据分析</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">${g.scopeLabel}</span>
              <button class="pacom-btn" data-toggle-canvas="1">${i?"收起楼层画布":"按需展开空间画布"}</button>
            </div>
          </div>
          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist">
              ${ae.map(u=>`<button class="pacom-tab" role="tab" aria-selected="${a===u.id}" data-cat="${u.id}">${u.label}</button>`).join("")}
            </div>
            <div class="pacom-tabs">
              ${["today","7d","30d"].map(u=>`<button class="pacom-tab" aria-selected="${t===u}" data-range="${u}">${u==="today"?"今日":u==="7d"?"近 7 天":"近 30 天"}</button>`).join("")}
            </div>
          </div>
        </header>

        <section class="pacom-split" style="gap:12px;">
          <div style="flex:1; min-width:0; overflow-y:auto; display:flex; flex-direction:column; gap:12px;">
            <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px;">
              ${g.kpis.map(u=>`
                  <div class="pacom-card" style="padding:16px; gap:4px;">
                    <span class="pacom-row-sub">${u.label}</span>
                    <div style="font-size:22px; font-weight:600;">${u.value} <span style="font-size:12px; font-weight:400; color:var(--pacom-text-secondary);">${u.unit??""}</span></div>
                    <span class="pacom-badge pacom-badge--neutral" style="width:fit-content;">${u.delta??"-"}</span>
                  </div>`).join("")}
            </div>

            <section class="pacom-card">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <h2 class="pacom-drawer-title">趋势统计（单位：${g.unit}）</h2>
                <span class="pacom-row-sub">更新时间：${g.updatedAt.slice(0,19).replace("T"," ")}</span>
              </div>
              ${oe(g)}
            </section>

            <section class="pacom-card">
              <h2 class="pacom-drawer-title">功能区明细对比</h2>
              ${g.zoneBreakdown.map(u=>`
                  <div class="pacom-receipt-item">
                    <span><strong>${u.zoneName}</strong>（${u.zoneId}）</span>
                    <span class="pacom-badge ${u.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">${u.value} ${u.unit}</span>
                  </div>`).join("")}
            </section>
          </div>

          ${i?`
              <aside class="pacom-right-pane" style="max-width:44%;">
                <div class="pacom-canvas-stage" style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:16px; gap:8px;">
                  <span class="pacom-badge pacom-badge--accent">E7F 分析共用画布（与首页状态隔离）</span>
                  <img class="pacom-plan-img" src="/media/7F.webp" alt="E7F 分析楼层预览" />
                </div>
              </aside>`:""}
        </section>
      </div>
    `,n.querySelectorAll("[data-cat]").forEach(u=>{u.addEventListener("click",()=>{a=u.dataset.cat,w()})}),n.querySelectorAll("[data-range]").forEach(u=>{u.addEventListener("click",()=>{t=u.dataset.range,w()})}),n.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{i=!i,c()}))}await w()}async function se(n,e,o){let a="floorplan",t=await e.getSpatialTree(),i=[],g=[],w=[],c=null,u=!1,p="",I="";async function l(){I="";const[S,k,h,j]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(s.floorId).catch(()=>[]),e.listConnections(s.projectId),e.listDeliveryBatches(s.floorId)]);t=S,i=k,g=h,w=j,i.some(x=>x.id===c)||(c=i[0]?.id??null),$()}function $(){const S=i.find(h=>h.id===c)??null,k=o.scope.canEditDeployment;n.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">系统部署</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge ${k?"pacom-badge--online":"pacom-badge--warning"}">
                ${k?"可编辑部署与硬件绑定":"只读权限（写入将被服务端 403 拦截）"}
              </span>
            </div>
          </div>
          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist">
              <button class="pacom-tab" role="tab" aria-selected="${a==="floorplan"}" data-dtab="floorplan">图纸标点与四态绑定</button>
              <button class="pacom-tab" role="tab" aria-selected="${a==="topology"}" data-dtab="topology">项目空间拓扑</button>
              <button class="pacom-tab" role="tab" aria-selected="${a==="connections"}" data-dtab="connections">系统接入（${g.length}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${a==="delivery"}" data-dtab="delivery">交付冻结（${w.length}）</button>
            </div>
          </div>
        </header>

        ${p?`<div class="pacom-badge pacom-badge--online" style="height:auto; padding:8px 12px;">${p}</div>`:""}
        ${I?`<div class="pacom-alert-banner">${I}</div>`:""}

        ${a==="floorplan"?`
            <section class="pacom-split">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:380px;">
                <div class="pacom-pane-toolbar">
                  <div style="font-weight:500;">E7F 设备与四态配置（${i.length}）</div>
                  <div style="font-size:12px; color:var(--pacom-text-secondary);">
                    原则：图上放点仅更新 <code>planPoint</code>，绝不自动改写物理安装态或硬件端口绑定。
                  </div>
                </div>
                <div class="pacom-list">
                  ${i.map(h=>`
                      <div class="pacom-row ${h.id===c?"is-selected":""}" data-pick-dev="${h.id}">
                        <div style="min-width:0;">
                          <div class="pacom-row-title">${h.name}</div>
                          <div class="pacom-row-sub">v${h.version} · ${h.hardwareBinding?.protocol.toUpperCase()??"未绑定"} · ${h.physicalInstalled?"现场已确认":"待物理复核"}</div>
                        </div>
                        <span class="pacom-badge ${h.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">
                          ${h.planPoint?`${Math.round(h.planPoint.x*100)}%,${Math.round(h.planPoint.y*100)}%`:"未标点"}
                        </span>
                      </div>`).join("")}
                </div>
                ${S?`
                    <form data-role="binding-form" style="padding:12px 16px; border-top:var(--hw) solid var(--pacom-border-subtle); display:flex; flex-direction:column; gap:8px;">
                      <div style="font-weight:500; font-size:13px;">显式硬件绑定与现场复核（${S.id}）</div>
                      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                        <select class="pacom-select" name="protocol">
                          ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(h=>`<option value="${h}" ${S.hardwareBinding?.protocol===h?"selected":""}>${h.toUpperCase()}</option>`).join("")}
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
                        <button class="pacom-btn" type="button" data-toggle-place="1">${u?"取消点图更新坐标":"点击图纸更新坐标"}</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit">保存硬件绑定（v${S.version}）</button>
                      </div>
                    </form>`:""}
              </aside>
              <div class="pacom-splitter"></div>
              <main class="pacom-right-pane">
                <div class="pacom-canvas-stage" data-role="deploy-stage" style="cursor:${u?"crosshair":"default"};">
                  <div class="pacom-canvas-viewport">
                    <div class="pacom-plan-wrap" data-role="deploy-plan">
                      <img class="pacom-plan-img" src="/media/7F.webp" alt="E7F 部署平面图" />
                      ${i.filter(h=>h.planPoint).map(h=>`
                          <button class="pacom-pin ${h.id===c?"is-selected":""} ${h.connectivity==="offline"?"pacom-pin--offline":""}"
                            style="left:${(h.planPoint.x*100).toFixed(2)}%; top:${(h.planPoint.y*100).toFixed(2)}%;"
                            data-pick-dev="${h.id}">
                            <span>${h.name.slice(0,7)}</span>
                          </button>`).join("")}
                    </div>
                  </div>
                  ${u&&S?`<div style="position:absolute; top:16px; left:16px; z-index:8;" class="pacom-badge pacom-badge--accent">标点模式：点击图纸任意位置更新「${S.name}」的 2D 坐标（不改动硬件绑定）</div>`:""}
                </div>
              </main>
            </section>`:a==="topology"?`
              <div class="pacom-content-page" style="padding:0;">
                <section class="pacom-card">
                  <h2 class="pacom-drawer-title">项目 → 楼宇 → 楼层归属拓扑</h2>
                  <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:12px;">
                    ${t.projects.map(h=>{const j=t.buildings.filter(x=>x.projectId===h.id);return`
                          <div class="pacom-control-box" style="background:#fff;">
                            <img src="${h.imageUrl??"/media/gzlab.jpg"}" alt="${h.name}" style="width:100%; height:110px; object-fit:cover; border-radius:8px;" />
                            <strong>${h.name}</strong>
                            <span class="pacom-row-sub">${h.city??""} ${h.address??""} · ${j.length} 栋授权楼宇</span>
                            <div style="display:flex; flex-direction:column; gap:6px; margin-top:4px;">
                              ${j.map(x=>`
                                  <div class="pacom-receipt-item">
                                    <span>├─ <strong>${x.name}</strong>（地上 ${x.aboveFloors}F / ${x.areaSqm??"-"} m²）</span>
                                    <span class="pacom-badge pacom-badge--neutral">${x.id===s.buildingId?"含 E7F":"对照"}</span>
                                  </div>`).join("")}
                            </div>
                          </div>`}).join("")}
                  </div>
                </section>
              </div>`:a==="connections"?`
                <div class="pacom-content-page" style="padding:0;">
                  <section class="pacom-card">
                    <h2 class="pacom-drawer-title">系统接入通道（采集点与计算点独立计数）</h2>
                    ${g.map(h=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <strong>${h.name}</strong>
                            <div class="pacom-row-sub">${h.protocol.toUpperCase()} · ${h.endpoint} · 采集点 ${h.collectedPoints} / 计算点 ${h.calculatedPoints}</div>
                          </div>
                          <span class="pacom-badge ${h.status==="connected"?"pacom-badge--online":"pacom-badge--warning"}">${h.status}</span>
                        </div>`).join("")}
                  </section>
                </div>`:`
                <div class="pacom-content-page" style="padding:0;">
                  <section class="pacom-card">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:12px;">
                      <h2 class="pacom-drawer-title">E7F 交付冻结批次</h2>
                      <button class="pacom-btn pacom-btn--primary" data-freeze-batch="1">新建交付冻结快照</button>
                    </div>
                    ${w.map(h=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <strong>${h.versionTag}</strong>（${h.id}）
                            <div class="pacom-row-sub">已现场核验 ${h.verifiedCount} / ${h.deviceCount} 台 · 冻结人：${h.frozenBy} · ${h.note??""}</div>
                          </div>
                          <span class="pacom-badge pacom-badge--accent">${h.status}</span>
                        </div>`).join("")}
                  </section>
                </div>`}
      </div>
    `,n.querySelectorAll("[data-dtab]").forEach(h=>{h.addEventListener("click",()=>{a=h.dataset.dtab,p="",I="",$()})}),n.querySelectorAll("[data-pick-dev]").forEach(h=>{h.addEventListener("click",()=>{c=h.dataset.pickDev??null,$()})}),n.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{u=!u,$()}),n.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async h=>{if(!u||!S)return;const j=h.currentTarget.getBoundingClientRect(),x=Math.max(.02,Math.min(.98,(h.clientX-j.left)/j.width)),L=Math.max(.02,Math.min(.98,(h.clientY-j.top)/j.height));try{await e.updateDevicePlanPoint({deviceId:S.id,floorId:s.floorId,planVersion:S.planPoint?.planVersion??1,x,y:L,expectedVersion:S.version}),u=!1,p=`已更新「${S.name}」图上坐标（硬件绑定与物理安装态保持不变）`,await l()}catch(C){I=C instanceof Error?C.message:String(C),$()}}),n.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async h=>{if(h.preventDefault(),!S)return;const j=new FormData(h.currentTarget);try{await e.updateDeviceHardwareBinding({deviceId:S.id,gatewayId:S.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(j.get("protocol")),networkAddress:String(j.get("networkAddress")??""),portOrChannel:String(j.get("portOrChannel")??""),physicalInstalled:j.get("physicalInstalled")==="on",expectedVersion:S.version}),p=`已保存「${S.name}」的硬件绑定与物理安装状态`,await l()}catch(x){I=x instanceof Error?x.message:String(x),$()}}),n.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const h=await e.freezeDeliveryBatch(s.floorId,"前端系统部署发起冻结");p=`已生成冻结批次 ${h.versionTag}（核验 ${h.verifiedCount}/${h.deviceCount}）`,await l()}catch(h){I=h instanceof Error?h.message:String(h),$()}})}await l()}const R="pacom.web.e7f.leftWidth",le={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},ne={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}};function v(n){return String(n??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function _(n){return n.level==="all-projects"?"all":n.level==="project"?`project:${n.projectId}`:n.level==="building"?`building:${n.projectId}:${n.buildingId}`:`floor:${n.projectId}:${n.buildingId}:${n.floorId}`}async function re(n,e,o){const a=await e.getSpatialTree();let t={level:"floor",projectId:s.projectId,buildingId:s.buildingId,floorId:s.floorId},i="devices",g="",w="all",c=null;const u=new Set;let p=[],I=[],l=[],$=null,S=null,k=1,h=0,j=0,x=Number(localStorage.getItem(R)||400);(!Number.isFinite(x)||x<320||x>680)&&(x=400);let L=null;async function C(r){t=r,S=null,u.clear(),k=1,h=0,j=0,L&&(L(),L=null);const d=t.level==="floor"?t.floorId:s.floorId;if(t.level==="floor")try{const[b,f,m]=await Promise.all([e.getFloorDevices(t.floorId),e.listAlarms(t.floorId),e.listWorkOrders(t.floorId)]);p=b,I=f,l=m,p.some(y=>y.id===c)||(c=p[1]?.id??p[0]?.id??null),L=e.subscribeFloorEvents(t.floorId,async y=>{y.type==="control.receipt.updated"&&$?.batchId===y.batchId&&($=await e.getControlBatch(y.batchId)),(y.type==="telemetry.updated"||y.type==="device.connectivity")&&t.level==="floor"&&(p=await e.getFloorDevices(t.floorId)),y.type==="alarm.changed"&&t.level==="floor"&&(I=await e.listAlarms(t.floorId)),D()})}catch(b){p=[],I=[],l=[],c=null,S=b instanceof Error?b.message:String(b)}else{const[b,f,m]=await Promise.all([e.getFloorDevices(d).catch(()=>[]),e.listAlarms(d).catch(()=>[]),e.listWorkOrders(d).catch(()=>[])]);p=b,I=f,l=m}D()}function T(r){return r?a.zones.find(d=>d.id===r)?.name??r:"未分配逻辑区"}function U(){const r=g.trim().toLowerCase();return p.filter(d=>w!=="all"&&d.category!==w?!1:r?d.name.toLowerCase().includes(r)||d.id.toLowerCase().includes(r)||T(d.logicalZoneId).toLowerCase().includes(r):!0)}async function M(r,d,b){!r.length||t.level!=="floor"||($=await e.dispatchControlBatch({floorId:t.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:r.map(f=>({deviceId:f,command:d,targetValue:b}))}),D())}function Z(){const r=t,d=[{label:"全部项目",scopeVal:"all",active:r.level==="all-projects"}];if(r.level!=="all-projects"){const b=a.projects.find(f=>f.id===r.projectId);d.push({label:b?.name??"项目",scopeVal:`project:${r.projectId}`,active:r.level==="project"})}if(r.level==="building"||r.level==="floor"){const b=a.buildings.find(f=>f.id===r.buildingId);d.push({label:b?.name??"楼宇",scopeVal:`building:${r.projectId}:${r.buildingId}`,active:r.level==="building"})}if(r.level==="floor"){const b=a.floors.find(f=>f.id===r.floorId);d.push({label:b?.name??"楼层",scopeVal:_(r),active:!0})}return`
      <nav aria-label="空间层级路径" style="display:flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); flex-wrap:wrap;">
        ${d.map((b,f)=>b.active?`<strong style="color:var(--pacom-text-primary);">${v(b.label)}</strong>`:`<button class="pacom-btn" style="height:24px; padding:0 8px; font-size:12px;" data-nav-scope="${v(b.scopeVal)}">${v(b.label)}</button>${f<d.length-1?"<span>/</span>":""}`).join("")}
      </nav>
    `}function H(){const r=_(t),d=a.projects.map(m=>`<option value="project:${v(m.id)}" ${r===`project:${m.id}`?"selected":""}>项目 · ${v(m.name)}</option>`).join(""),b=a.buildings.map(m=>{const y=`building:${m.projectId}:${m.id}`;return`<option value="${v(y)}" ${r===y?"selected":""}>楼宇 · 广实2号园 / ${v(m.name)}</option>`}).join(""),f=a.floors.map(m=>{const y=o.scope.allowedFloorIds.includes(m.id),E=`floor:${s.projectId}:${m.buildingId}:${m.id}`;return`<option value="${v(E)}" ${r===E?"selected":""}>楼层 · 广实2号园 / E栋 / ${v(m.name)}${y?"":"（未授权对照）"}</option>`}).join("");return`
      <option value="all" ${r==="all"?"selected":""}>全部项目（${a.projects.length} 个授权园区）</option>
      <optgroup label="项目级">${d}</optgroup>
      <optgroup label="楼宇级">${b}</optgroup>
      <optgroup label="楼层级">${f}</optgroup>
    `}function G(){if(t.level==="all-projects"){const b=p.filter(m=>m.connectivity==="online").length,f=I.filter(m=>m.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">授权项目总览（${a.projects.length}）</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">楼宇</span><strong>${a.buildings.length} 栋</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线</span><strong>${b}/${p.length}</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:var(--pacom-status-warning);">${f} 条</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${a.projects.map(m=>{const y=a.buildings.filter(E=>E.projectId===m.id).length;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="project:${v(m.id)}">
                  <img src="${v(m.imageUrl??"/media/gzlab.jpg")}" alt="${v(m.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${v(m.name)}</strong>
                    <span class="pacom-badge pacom-badge--accent">${y} 栋楼宇</span>
                  </div>
                  <div class="pacom-row-sub">${v(m.city??"")} · ${v(m.address??"")}</div>
                </article>`}).join("")}
        </div>
      `}const r=t;if(r.level==="project"){const b=a.projects.find(m=>m.id===r.projectId),f=a.buildings.filter(m=>m.projectId===r.projectId);return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${v(b?.name??"项目")} · 楼宇清单（${f.length}）</div>
          <div class="pacom-row-sub">${v(b?.city??"")} ${v(b?.address??"")}</div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${f.map(m=>`
              <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="building:${v(m.projectId)}:${v(m.id)}">
                <img src="${v(m.imageUrl??"/media/building-e.png")}" alt="${v(m.name)}" style="width:100%; height:116px; object-fit:cover; border-radius:8px;" />
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <strong>${v(m.name)}</strong>
                  <span class="pacom-badge ${m.id===s.buildingId?"pacom-badge--online":"pacom-badge--neutral"}">${m.id===s.buildingId?"含 E7F 试点":"暂无交付楼层"}</span>
                </div>
                <div class="pacom-row-sub">地上 ${m.aboveFloors} 层 · 地下 ${m.belowFloors} 层 · 面积 ${m.areaSqm??"-"} m²</div>
              </article>`).join("")}
        </div>
      `}if(r.level==="building"){const b=a.buildings.find(y=>y.id===r.buildingId),f=a.floors.filter(y=>y.buildingId===r.buildingId),m=l.filter(y=>y.status!=="closed"&&y.status!=="resolved");return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${v(b?.name??"楼宇")} 概况与待办</div>
          <div class="pacom-row-sub">地上 ${b?.aboveFloors??0} 层 · 面积 ${b?.areaSqm??"-"} m² · 未结工单 ${m.length} 项</div>
        </div>
        <div class="pacom-list" style="gap:8px; padding:12px;">
          <div class="pacom-control-box">
            <strong style="font-size:13px;">楼宇待办与未结工单（${m.length}）</strong>
            ${m.length?m.map(y=>`<div class="pacom-row-sub">• ${v(y.title)}（${v(y.status)}）</div>`).join(""):'<div class="pacom-row-sub">当前楼宇无未结工单</div>'}
          </div>
          <div style="font-weight:500; font-size:13px; margin-top:4px;">选择楼层进入 2D 平面控制</div>
          ${f.length?f.map(y=>{const E=o.scope.allowedFloorIds.includes(y.id);return`
                      <div class="pacom-row" data-nav-scope="floor:${v(r.projectId)}:${v(r.buildingId)}:${v(y.id)}">
                        <div>
                          <div class="pacom-row-title">${v(b?.name??"")} ${v(y.name)}</div>
                          <div class="pacom-row-sub">${y.plan?"已上传 2D 图纸":"暂未上传图纸"}</div>
                        </div>
                        <span class="pacom-badge ${E?"pacom-badge--online":"pacom-badge--warning"}">${E?"进入楼层":"未授权对照"}</span>
                      </div>`}).join(""):'<div class="pacom-row-sub">该楼宇暂未配置试点楼层。</div>'}
        </div>
      `}if(i==="devices"){const b=U(),f=Array.from(u);return`
        <div class="pacom-pane-toolbar">
          <div class="pacom-search-row">
            <input class="pacom-input" data-role="search" placeholder="搜索设备名 / ID / 区域…" value="${v(g)}" />
            <select class="pacom-select" data-role="category">
              <option value="all" ${w==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${w==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${w==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${w==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${w==="gateway"?"selected":""}>网关</option>
            </select>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; color:var(--pacom-text-secondary);">
            <span>当前楼层共 ${b.length} 台设备</span>
            <span>已勾选 ${f.length} 台</span>
          </div>
        </div>
        <div class="pacom-list">
          ${S?`<div class="pacom-alert-banner">${v(S)}</div>`:b.map(m=>{const y=m.id===c,E=u.has(m.id),F=m.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline",Q=m.category==="lighting"?`亮度 ${m.telemetry.dimming?.value??"--"}%`:m.category==="hvac"?`设定 ${m.telemetry.setpoint?.value??"--"}°C`:m.category==="sensor"?`${m.telemetry.temp?.value??"--"}°C · CO₂ ${m.telemetry.co2?.value??"--"}`:m.hardwareBinding?.networkAddress??"未绑定";return`
                      <div class="pacom-row ${y?"is-selected":""}" data-select-device="${v(m.id)}">
                        <div class="pacom-row-main">
                          <input type="checkbox" data-check-device="${v(m.id)}" ${E?"checked":""} style="margin-top:3px;" />
                          <div style="min-width:0;">
                            <div class="pacom-row-title">${v(m.name)}</div>
                            <div class="pacom-row-sub">${v(T(m.logicalZoneId))} · ${v(le[m.category])}</div>
                          </div>
                        </div>
                        <span class="pacom-badge ${m.connectivity==="online"?"pacom-badge--online":"pacom-badge--neutral"}">
                          <span class="pacom-dot ${F}"></span>${v(Q)}
                        </span>
                      </div>`}).join("")}
        </div>
        ${f.length>0?`
            <div class="pacom-batch-bar">
              <span style="font-size:12px;">显式批量目标：<strong>${f.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button class="pacom-btn" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button class="pacom-btn pacom-btn--primary" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}return i==="alarms"?`
        <div class="pacom-pane-toolbar"><div style="font-weight:500;">当前楼层告警与工单</div></div>
        <div class="pacom-list">
          ${I.map(b=>`
              <div class="pacom-control-box" style="margin-bottom:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <strong style="font-size:13px;">${v(b.title)}</strong>
                  <span class="pacom-badge ${b.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${b.status==="active"?"待确认":"已确认"}</span>
                </div>
                <div style="font-size:12px; color:var(--pacom-text-secondary);">${v(b.message)}</div>
                ${b.status==="active"?`<div><button class="pacom-btn" data-ack-alarm="${v(b.id)}">确认告警</button></div>`:""}
              </div>`).join("")}
        </div>
      `:`
      <div class="pacom-pane-toolbar">
        <div style="font-weight:500;">后端联调契约监视器（实时 REST / WS 载荷）</div>
      </div>
      <div class="pacom-list">
        ${(e instanceof W?e.traces:[]).slice(0,12).map(b=>`
            <div class="pacom-control-box" style="margin-bottom:6px;">
              <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                <span class="pacom-badge ${b.channel==="WS"?"pacom-badge--accent":"pacom-badge--neutral"}">${b.channel}</span>
                <code style="font-size:11px; flex:1; overflow:hidden; text-overflow:ellipsis;">${v(b.endpoint)}</code>
              </div>
              <pre class="pacom-code">${v(JSON.stringify(b.request?{request:b.request,response:b.response}:b.response,null,2))}</pre>
            </div>`).join("")}
      </div>
    `}function K(){const r=t;if(r.level==="all-projects"||r.level==="project"){const f=r.level==="project"?a.projects.find(y=>y.id===r.projectId):a.projects[0],m=a.buildings.filter(y=>!f||y.projectId===f.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:24px;">
          <div style="position:relative; width:min(760px, 94%); border-radius:16px; overflow:hidden; box-shadow:0 12px 32px rgba(15,23,42,0.14); background:#fff;">
            <img src="${v(f?.imageUrl??"/media/gzlab.jpg")}" alt="园区俯瞰" style="width:100%; height:440px; object-fit:cover; display:block;" />
            ${r.level==="all-projects"?a.projects.map((y,E)=>`
                      <button class="pacom-pin is-selected" style="left:${E===0?48:26}%; top:${E===0?52:34}%;" data-nav-scope="project:${v(y.id)}">
                        <span>${v(y.name)}</span>
                      </button>`).join(""):m.map((y,E)=>`
                      <button class="pacom-pin is-selected" style="left:${E===0?56:38}%; top:${E===0?44:62}%;" data-nav-scope="building:${v(y.projectId)}:${v(y.id)}">
                        <span>${v(y.name)}（点击查看整栋）</span>
                      </button>`).join("")}
          </div>
        </div>
      `}if(r.level==="building"){const f=a.buildings.find(y=>y.id===r.buildingId),m=a.floors.filter(y=>y.buildingId===r.buildingId);return`
        ${m.length?`
            <nav class="pacom-floor-rail" aria-label="整栋楼层选择轨道">
              <button class="pacom-floor-btn is-active" title="整栋视图">栋</button>
              ${m.map(y=>`<button class="pacom-floor-btn ${o.scope.allowedFloorIds.includes(y.id)?"":"is-locked"}" data-nav-scope="floor:${v(r.projectId)}:${v(r.buildingId)}:${v(y.id)}" title="${v(y.name)}">${v(y.name.replace("F",""))}</button>`).join("")}
            </nav>`:""}
        <div class="pacom-canvas-tools" aria-label="画布工具">
          <button class="pacom-tool-btn" data-zoom="in" title="放大">＋</button>
          <button class="pacom-tool-btn" data-zoom="out" title="缩小">－</button>
          <button class="pacom-tool-btn" data-zoom="reset" title="复位">⟲</button>
        </div>
        <div class="pacom-canvas-stage">
          <div class="pacom-canvas-viewport" style="transform: translate(${h}px, ${j}px) scale(${k});">
            <img class="pacom-plan-img" src="${v(f?.imageUrl??"/media/building-e.png")}" alt="${v(f?.name??"楼宇")} 整栋实景图" />
          </div>
        </div>
      `}const d=a.floors.find(f=>f.id===r.floorId),b=a.floors.filter(f=>f.buildingId===r.buildingId);return`
      <nav class="pacom-floor-rail" aria-label="楼层选择轨道">
        <button class="pacom-floor-btn" data-nav-scope="building:${v(r.projectId)}:${v(r.buildingId)}" title="返回整栋楼宇">栋</button>
        ${b.map(f=>{const m=o.scope.allowedFloorIds.includes(f.id);return`<button class="pacom-floor-btn ${f.id===r.floorId?"is-active":""} ${m?"":"is-locked"}"
              data-nav-scope="floor:${v(r.projectId)}:${v(r.buildingId)}:${v(f.id)}" title="${v(f.name)}${m?"":"（无权限对照）"}">
              ${v(f.name.replace("F",""))}
            </button>`}).join("")}
      </nav>

      <div class="pacom-canvas-tools" aria-label="画布工具">
        <button class="pacom-tool-btn" data-zoom="in" title="放大">＋</button>
        <button class="pacom-tool-btn" data-zoom="out" title="缩小">－</button>
        <button class="pacom-tool-btn" data-zoom="reset" title="复位">⟲</button>
      </div>

      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${S?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${v(S)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" style="transform: translate(${h}px, ${j}px) scale(${k});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${v(d?.plan?.imageUrl??"/media/7F.webp")}" alt="E栋 ${v(d?.name??"7F")} 平面图" />
                  ${p.filter(f=>f.planPoint).map(f=>`
                      <button class="pacom-pin ${f.id===c?"is-selected":""} ${f.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(f.planPoint.x*100).toFixed(2)}%; top:${(f.planPoint.y*100).toFixed(2)}%;"
                        data-pin-device="${v(f.id)}" title="${v(f.name)}">
                        <span class="pacom-dot ${f.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${v(f.name.slice(0,8))}</span>
                      </button>`).join("")}
                </div>
              </div>`}
      </div>

      ${Y()}
    `}function Y(){if(t.level!=="floor")return"";const r=p.find(y=>y.id===c);if(!r)return"";const d=r.category==="lighting",b=r.category==="hvac",f=Number(r.telemetry.dimming?.value??50),m=Number(r.telemetry.setpoint?.value??24);return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div>
            <h2 class="pacom-drawer-title">${v(r.name)}</h2>
            <div class="pacom-row-sub">${v(r.id)} · v${r.version}</div>
          </div>
          <span class="pacom-badge ${r.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
            ${r.connectivity==="online"?"在线":"离线"}
          </span>
        </div>

        <div class="pacom-kv-grid">
          <span class="pacom-kv-label">1. 逻辑区域</span><span>${v(T(r.logicalZoneId))}</span>
          <span class="pacom-kv-label">2. 图上点位</span><span>${r.planPoint?`x=${r.planPoint.x.toFixed(2)}, y=${r.planPoint.y.toFixed(2)} (图 v${r.planPoint.planVersion})`:"未标点"}</span>
          <span class="pacom-kv-label">3. 物理安装</span><span>${r.physicalInstalled?"现场已确认":"待现场复核（不可按图标推定）"}</span>
          <span class="pacom-kv-label">4. 硬件绑定</span><span>${r.hardwareBinding?`${r.hardwareBinding.protocol.toUpperCase()} · ${r.hardwareBinding.networkAddress}`:"未绑定"}</span>
        </div>

        ${d||b?`
            <div class="pacom-control-box">
              <div style="font-weight:500; font-size:13px;">实时控制下发（需网关逐设备回读确认）</div>
              ${d?`
                  <div style="display:flex; gap:6px;">
                    <button class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true">开灯</button>
                    <button class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false">关灯</button>
                  </div>
                  <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                    亮度目标：<strong>${f}%</strong>
                    <input type="range" min="0" max="100" step="10" value="${f}" data-ctrl-slider="lighting.dimming" />
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

        ${$?`
            <div class="pacom-control-box">
              <div style="font-size:12px; font-weight:500;">最近批次：<code>${v($.batchId)}</code></div>
              <div class="pacom-receipt-list">
                ${$.receipts.map(y=>{const E=ne[y.status]??{text:y.status,badge:"pacom-badge--neutral"};return`
                      <div class="pacom-receipt-item">
                        <div>
                          <div><strong>${v(y.deviceId)}</strong> · ${v(y.command)} → ${v(y.targetValue)}</div>
                          ${y.errorMessage?`<div style="color:var(--pacom-status-critical);">${v(y.errorMessage)}</div>`:""}
                        </div>
                        <span class="pacom-badge ${E.badge}">${E.text}</span>
                      </div>`}).join("")}
              </div>
            </div>`:""}
      </aside>
    `}function P(r){if(r==="all")return{level:"all-projects"};const d=r.split(":");return d[0]==="project"&&d[1]?{level:"project",projectId:d[1]}:d[0]==="building"&&d[1]&&d[2]?{level:"building",projectId:d[1],buildingId:d[2]}:d[0]==="floor"&&d[1]&&d[2]&&d[3]?{level:"floor",projectId:d[1],buildingId:d[2],floorId:d[3]}:{level:"all-projects"}}function D(){const r=I.filter(d=>d.status==="active").length;n.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
              <h1 class="pacom-title">首页</h1>
              ${Z()}
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge ${e.mode==="live"?"pacom-badge--online":"pacom-badge--neutral"}">
                <span class="pacom-dot ${e.mode==="live"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                ${e.mode.toUpperCase()}
              </span>
              <span class="pacom-badge pacom-badge--neutral">${v(o.roleLabel)}</span>
            </div>
          </div>

          <div class="pacom-header-toolbar">
            <div class="pacom-toolbar-left">
              <div class="pacom-scope-pill" title="项目 / 楼宇 / 楼层三级范围选择器">
                <select data-role="scope-select" aria-label="选择查看范围">
                  ${H()}
                </select>
                <span class="pacom-scope-chevron">▾</span>
              </div>

              ${t.level==="floor"?`
                  <div class="pacom-tabs" role="tablist">
                    <button class="pacom-tab" role="tab" aria-selected="${i==="devices"}" data-tab="devices">设备与控制</button>
                    <button class="pacom-tab" role="tab" aria-selected="${i==="alarms"}" data-tab="alarms">
                      告警 ${r>0?`<span class="pacom-badge pacom-badge--warning">${r}</span>`:""}
                    </button>
                    <button class="pacom-tab" role="tab" aria-selected="${i==="handoff"}" data-tab="handoff">后端联调契约</button>
                  </div>`:""}
            </div>
          </div>
        </header>

        <section class="pacom-split">
          <aside class="pacom-left-pane" style="--pacom-sidebar-width:${x}px;">
            ${G()}
          </aside>
          <div class="pacom-splitter" role="separator" tabindex="0" aria-orientation="vertical" aria-label="调整左右栏宽度" data-role="splitter"></div>
          <main class="pacom-right-pane">
            ${K()}
          </main>
        </section>
      </div>
    `,X()}function X(){n.querySelector('[data-role="scope-select"]')?.addEventListener("change",d=>{C(P(d.currentTarget.value))}),n.querySelectorAll("[data-nav-scope]").forEach(d=>{d.addEventListener("click",()=>{d.dataset.navScope&&C(P(d.dataset.navScope))})}),n.querySelectorAll("[data-tab]").forEach(d=>{d.addEventListener("click",()=>{i=d.dataset.tab,D()})}),n.querySelector('[data-role="search"]')?.addEventListener("input",d=>{g=d.currentTarget.value,D()}),n.querySelector('[data-role="category"]')?.addEventListener("change",d=>{w=d.currentTarget.value,D()}),n.querySelectorAll("[data-select-device]").forEach(d=>{d.addEventListener("click",b=>{b.target.tagName!=="INPUT"&&(c=d.dataset.selectDevice??null,D())})}),n.querySelectorAll("[data-check-device]").forEach(d=>{d.addEventListener("change",()=>{const b=d.dataset.checkDevice;b&&(d.checked?u.add(b):u.delete(b),D())})}),n.querySelectorAll("[data-pin-device]").forEach(d=>{d.addEventListener("click",b=>{b.stopPropagation(),c=d.dataset.pinDevice??null,D()})}),n.querySelectorAll("[data-ctrl-cmd]").forEach(d=>{d.addEventListener("click",()=>{if(!c||!d.dataset.ctrlCmd)return;const b=d.dataset.ctrlVal??"",f=b==="true"?!0:b==="false"?!1:Number(b);M([c],d.dataset.ctrlCmd,f)})}),n.querySelector("[data-ctrl-slider]")?.addEventListener("change",d=>{const b=d.currentTarget;!c||!b.dataset.ctrlSlider||M([c],b.dataset.ctrlSlider,Number(b.value))}),n.querySelectorAll("[data-batch-cmd]").forEach(d=>{d.addEventListener("click",()=>{const b=Array.from(u),f=d.dataset.batchVal??"",m=f==="true"?!0:f==="false"?!1:f;M(b,d.dataset.batchCmd,m)})}),n.querySelectorAll("[data-ack-alarm]").forEach(d=>{d.addEventListener("click",async()=>{!d.dataset.ackAlarm||t.level!=="floor"||(await e.acknowledgeAlarm(d.dataset.ackAlarm,"首页快速确认"),I=await e.listAlarms(t.floorId),D())})}),n.querySelectorAll("[data-zoom]").forEach(d=>{d.addEventListener("click",()=>{const b=d.dataset.zoom;b==="in"?k=Math.min(2.5,Number((k+.2).toFixed(2))):b==="out"?k=Math.max(.6,Number((k-.2).toFixed(2))):(k=1,h=0,j=0),D()})});const r=n.querySelector('[data-role="splitter"]');r?.addEventListener("pointerdown",d=>{const b=d.clientX,f=x;r.classList.add("is-dragging");const m=E=>{x=Math.max(320,Math.min(640,f+(E.clientX-b)));const F=n.querySelector(".pacom-left-pane");F&&F.style.setProperty("--pacom-sidebar-width",`${x}px`)},y=()=>{r.classList.remove("is-dragging"),localStorage.setItem(R,String(Math.round(x))),window.removeEventListener("pointermove",m),window.removeEventListener("pointerup",y)};window.addEventListener("pointermove",m),window.addEventListener("pointerup",y)})}await C(t)}async function ce(n,e,o){let a=await e.listScenes(s.floorId),t=null,i="";const g=e.subscribeFloorEvents(s.floorId,async c=>{c.type==="control.receipt.updated"&&t?.batchId===c.batchId&&(t=await e.getControlBatch(c.batchId),w())});function w(){n.innerHTML=`
      <div class="pacom-content-page">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h1 class="pacom-title">场景</h1>
          <span class="pacom-badge ${o.scope.canControlDevices?"pacom-badge--online":"pacom-badge--warning"}">
            ${o.scope.canControlDevices?"可触发并核验逐设备回执":"只读"}
          </span>
        </div>

        ${i?`<div class="pacom-alert-banner">${i}</div>`:""}

        <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:12px;">
          ${a.map(c=>`
              <section class="pacom-card">
                <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                  <strong style="font-size:15px;">${c.name}</strong>
                  <span class="pacom-badge pacom-badge--neutral">${c.actions.length} 个动作</span>
                </div>
                <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary);">${c.description}</p>
                <div class="pacom-row-sub">计划：${c.scheduleSummary??"手动"} · 最近执行：${c.lastExecutedAt?c.lastExecutedAt.slice(0,19).replace("T"," "):"尚未执行"}</div>
                <div style="display:flex; justify-content:flex-end;">
                  <button class="pacom-btn pacom-btn--primary" data-exec-scene="${c.id}">手动执行场景</button>
                </div>
              </section>`).join("")}
        </div>

        ${t?`
            <section class="pacom-card">
              <h2 class="pacom-drawer-title">场景执行逐设备回读回执（批次 ${t.batchId}）</h2>
              <div class="pacom-receipt-list">
                ${t.receipts.map(c=>`
                    <div class="pacom-receipt-item">
                      <div>
                        <strong>${c.deviceId}</strong> · ${c.command} → ${String(c.targetValue)}
                        ${c.errorMessage?`<div style="color:var(--pacom-status-critical);">${c.errorMessage}</div>`:""}
                      </div>
                      <span class="pacom-badge ${c.status==="verified_success"?"pacom-badge--online":c.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${c.status}</span>
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
    `,n.querySelectorAll("[data-exec-scene]").forEach(c=>{c.addEventListener("click",async()=>{i="";try{t=await e.executeScene(c.dataset.execScene),a=await e.listScenes(s.floorId),w()}catch(u){i=u instanceof Error?u.message:String(u),w()}})}),n.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async c=>{c.preventDefault();const u=new FormData(c.currentTarget);try{await e.createScene({projectId:s.projectId,floorId:s.floorId,name:String(u.get("name")??""),description:String(u.get("description")??""),actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:50}]}),a=await e.listScenes(s.floorId),w()}catch(p){i=p instanceof Error?p.message:String(p),w()}})}w(),window.addEventListener("hashchange",()=>g(),{once:!0})}const N=[{id:"calendar",label:"运行日历"},{id:"weather_area",label:"气象与面积"},{id:"lighting",label:"照明策略"},{id:"hvac",label:"暖通策略"},{id:"metering_carbon",label:"计量与碳排"},{id:"alarm_rules",label:"告警规则"},{id:"templates",label:"参数模板"}];async function de(n,e,o){let a="calendar",t=await e.getRuntimeSettings(s.projectId),i=t.calendar.workdayStart,g=t.calendar.workdayEnd,w=[],c="",u="";function p(){const I=t.rules.filter(l=>l.category===a);n.innerHTML=`
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
              ${N.map(l=>`<button class="pacom-tab" role="tab" aria-selected="${a===l.id}" data-scat="${l.id}">${l.label}</button>`).join("")}
            </div>
          </div>
        </header>

        ${c?`<div class="pacom-badge pacom-badge--online" style="height:auto; padding:8px 12px;">${c}</div>`:""}
        ${u?`<div class="pacom-alert-banner">${u}</div>`:""}

        <div class="pacom-content-page" style="padding:0;">
          ${a==="calendar"?`
              <section class="pacom-card">
                <h2 class="pacom-drawer-title">项目工作时间日历（版本 v${t.calendar.version}）</h2>
                <div style="display:flex; align-items:flex-end; gap:12px; flex-wrap:wrap;">
                  <label class="pacom-field">
                    <span>上班时间</span>
                    <input class="pacom-input" type="time" data-cal-start value="${i}" />
                  </label>
                  <label class="pacom-field">
                    <span>下班时间</span>
                    <input class="pacom-input" type="time" data-cal-end value="${g}" />
                  </label>
                  <button class="pacom-btn" data-preview-impact="1">保存前预览受影响规则</button>
                  <button class="pacom-btn pacom-btn--primary" data-save-cal="1">保存并校验版本</button>
                </div>
                <div class="pacom-row-sub">夜间巡检窗口：${t.calendar.nightGuardStart} – ${t.calendar.nightGuardEnd}（若下班时间晚于 21:30 将自动提示交叠冲突）</div>

                ${w.length>0?`
                    <div style="margin-top:8px; display:flex; flex-direction:column; gap:6px;">
                      <strong style="font-size:13px;">受影响的定时与夜间规则预览（${w.length} 条）</strong>
                      ${w.map(l=>`
                          <div class="pacom-receipt-item">
                            <div>
                              <strong>${l.ruleName}</strong>
                              <div class="pacom-row-sub">原窗口：${l.beforeWindow} → 新窗口：${l.afterWindow}</div>
                              ${l.conflictWarning?`<div style="color:var(--pacom-status-critical);">${l.conflictWarning}</div>`:""}
                            </div>
                            <span class="pacom-badge ${l.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">${l.conflictWarning?"交叠警告":"自动跟随"}</span>
                          </div>`).join("")}
                    </div>`:""}
              </section>`:`
              <section class="pacom-card">
                <h2 class="pacom-drawer-title">${N.find(l=>l.id===a)?.label}（${I.length}）</h2>
                ${I.map(l=>`
                    <div class="pacom-receipt-item">
                      <div>
                        <strong>${l.name}</strong> <span class="pacom-row-sub">v${l.version} · ${l.scopeLabel}</span>
                        <div class="pacom-row-sub">${l.summary} · 回执：${l.receiptSummary??"-"}</div>
                      </div>
                      <button class="pacom-btn ${l.enabled?"pacom-btn--primary":""}" data-toggle-rule="${l.id}" data-rule-ver="${l.version}" data-rule-next="${!l.enabled}">
                        ${l.enabled?"已启用（点击停用）":"已停用（点击启用）"}
                      </button>
                    </div>`).join("")}
              </section>`}
        </div>
      </div>
    `,n.querySelectorAll("[data-scat]").forEach(l=>{l.addEventListener("click",()=>{a=l.dataset.scat,c="",u="",p()})}),n.querySelector("[data-cal-start]")?.addEventListener("change",l=>{i=l.currentTarget.value}),n.querySelector("[data-cal-end]")?.addEventListener("change",l=>{g=l.currentTarget.value}),n.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{u="",w=await e.previewCalendarImpact(s.projectId,i,g),p()}),n.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{u="";try{const l=await e.saveWorkCalendar(s.projectId,i,g,t.calendar.version);t={...t,calendar:l},c=`运行日历已保存至 v${l.version}（${l.workdayStart} - ${l.workdayEnd}）`,w=[],p()}catch(l){u=l instanceof Error?l.message:String(l),p()}}),n.querySelectorAll("[data-toggle-rule]").forEach(l=>{l.addEventListener("click",async()=>{u="";try{await e.toggleRuntimeRule(l.dataset.toggleRule,l.dataset.ruleNext==="true",Number(l.dataset.ruleVer)),t=await e.getRuntimeSettings(s.projectId),c="规则状态与版本回执已更新",p()}catch($){u=$ instanceof Error?$.message:String($),p()}})})}p()}const z="pacom.web.sidebar.collapsed",B=[{id:"home",label:"首页",iconSvg:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/>'},{id:"analysis",label:"数据分析",iconSvg:'<path d="M4 19h16"/><path d="M7 16v-5"/><path d="M12 16V7"/><path d="M17 16v-8"/>'},{id:"alarms",label:"告警工单",iconSvg:'<path d="M12 4 3 19h18L12 4Z"/><path d="M12 10v4"/><path d="M12 17h.01"/>'},{id:"scenes",label:"场景",iconSvg:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3"/>'},{id:"settings",label:"运行设置",iconSvg:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2.5"/><circle cx="15" cy="17" r="2.5"/>'},{id:"deployment",label:"系统部署",iconSvg:'<rect x="3" y="4" width="7" height="6" rx="1.5"/><rect x="14" y="4" width="7" height="6" rx="1.5"/><rect x="8.5" y="14" width="7" height="6" rx="1.5"/><path d="M6.5 10v2h11v-2M12 12v2"/>'},{id:"account",label:"账户",iconSvg:'<circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/>'}];function V(){const n=window.location.hash.replace(/^#\/?/,"").split("?")[0];return B.some(e=>e.id===n)?n:"home"}async function pe(n,e,o,a){let t=o,i=V(),g=localStorage.getItem(z)==="1",w="";async function c(p){switch(i){case"home":await re(p,e,t);return;case"analysis":await ie(p,e);return;case"alarms":await te(p,e,t);return;case"scenes":await ce(p,e,t);return;case"settings":await de(p,e,t);return;case"deployment":await se(p,e,t);return;case"account":await ee(p,e,t,I=>{t=I,u()},a);return}}async function u(){const p=w.trim()?B.filter($=>$.label.includes(w.trim())):B,I=e.mode==="demo"&&typeof e.switchDemoRole=="function";n.innerHTML=`
      <div class="pacom-app-frame">
        <aside class="pacom-nav-rail ${g?"is-collapsed":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">
              <img src="/media/favicon.svg" alt="" width="22" height="22" />
              <span class="pacom-nav-logo-text">PACOM Station</span>
            </div>
            <button class="pacom-collapse-btn" data-role="toggle-sidebar" title="${g?"展开侧栏":"收起侧栏"}" aria-label="${g?"展开侧栏":"收起侧栏"}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                ${g?'<path d="m9 6 6 6-6 6"/>':'<path d="m15 6-6 6 6 6"/>'}
              </svg>
            </button>
          </div>

          <div class="pacom-nav-search-wrap">
            <input class="pacom-nav-search" data-role="nav-search" placeholder="搜索工作区…" value="${w}" />
          </div>

          <nav class="pacom-nav-list">
            ${p.map($=>`
                <button class="pacom-nav-item" data-route="${$.id}" aria-current="${i===$.id?"page":"false"}" title="${$.label}">
                  <svg class="pacom-nav-icon" viewBox="0 0 24 24">${$.iconSvg}</svg>
                  <span class="pacom-nav-label">${$.label}</span>
                </button>`).join("")}
          </nav>

          <div class="pacom-nav-footer">
            <div class="pacom-nav-user-meta" style="font-size:12px;">
              <div style="font-weight:500;">${t.displayName}</div>
              <div style="color:var(--pacom-text-secondary);">${t.roleLabel} · ${e.mode.toUpperCase()}</div>
            </div>
            ${I&&!g?`
                <select class="pacom-nav-role-select" data-role="quick-role" aria-label="快捷切换演示角色">
                  ${Object.keys(A).map($=>`<option value="${$}" ${$===t.role?"selected":""}>预览：${A[$].roleLabel}</option>`).join("")}
                </select>`:""}
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,n.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{g=!g,localStorage.setItem(z,g?"1":"0"),u()}),n.querySelector('[data-role="nav-search"]')?.addEventListener("input",$=>{w=$.currentTarget.value,u()}),n.querySelectorAll("[data-route]").forEach($=>{$.addEventListener("click",()=>{i=$.dataset.route,window.location.hash=`#${i}`,u()})}),n.querySelector('[data-role="quick-role"]')?.addEventListener("change",async $=>{if(!e.switchDemoRole)return;const S=$.currentTarget.value;t=await e.switchDemoRole(S),await u()});const l=n.querySelector('[data-role="main-stage"]');l&&await c(l)}window.addEventListener("hashchange",()=>{const p=V();p!==i&&(i=p,u())}),await u()}function q(n,e,o){let a="",t="facility_operator";function i(){const g=e.mode==="demo"&&typeof e.switchDemoRole=="function";n.innerHTML=`
      <main class="pacom-auth-page">
        <section class="pacom-auth-card" aria-label="PACOM Station 登录">
          <div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
              <img src="/media/favicon.svg" alt="" width="24" height="24" />
              <span class="pacom-badge ${e.mode==="live"?"pacom-badge--online":"pacom-badge--accent"}">
                ${e.mode.toUpperCase()} 模式
              </span>
            </div>
            <h1 class="pacom-auth-title">登录 PACOM Station</h1>
            <p style="margin:4px 0 0; color:var(--pacom-text-secondary); font-size:13px;">
              智能建筑空间运维与设备控制平台（E7F 生产底座）
            </p>
          </div>

          ${a?`<div class="pacom-alert-banner">${a}</div>`:""}

          <form data-role="login-form" style="display:flex; flex-direction:column; gap:12px;">
            <label class="pacom-field">
              <span>账号</span>
              <input class="pacom-input" name="account" placeholder="例如 operator@pacom.local" autocomplete="username" required />
            </label>
            <label class="pacom-field">
              <span>密码</span>
              <input class="pacom-input" name="password" type="password" placeholder="请输入密码" autocomplete="current-password" required />
            </label>
            <button class="pacom-btn pacom-btn--primary" type="submit" style="height:36px;">登录进入工作区</button>
          </form>

          ${g?`
              <div style="border-top: var(--hw) solid var(--pacom-border-subtle); padding-top:14px; display:flex; flex-direction:column; gap:10px;">
                <div style="font-size:13px; font-weight:500;">离线演示快捷入口（多角色 RBAC 权限预览）</div>
                <select class="pacom-select" data-role="demo-role-select" style="height:36px;">
                  ${Object.keys(A).map(w=>{const c=A[w];return`<option value="${w}" ${w===t?"selected":""}>${c.roleLabel} · ${c.displayName}</option>`}).join("")}
                </select>
                <button class="pacom-btn" type="button" data-role="enter-demo" style="height:36px;">
                  以所选角色进入 E7F 演示工作区
                </button>
              </div>`:""}
        </section>
      </main>
    `,n.querySelector('[data-role="login-form"]')?.addEventListener("submit",async w=>{w.preventDefault();const c=new FormData(w.currentTarget);try{const u=await e.login({account:String(c.get("account")??""),password:String(c.get("password")??"")});o(u)}catch(u){a=u instanceof Error?u.message:String(u),i()}}),n.querySelector('[data-role="demo-role-select"]')?.addEventListener("change",w=>{t=w.currentTarget.value}),n.querySelector('[data-role="enter-demo"]')?.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const w=await e.switchDemoRole(t);o(w)})}i()}async function ue(){const n=document.getElementById("app");if(n)try{const e=J(),o=await e.getSession(),a=async t=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await pe(n,e,t,()=>{q(n,e,i=>{a(i)})})};if(!o||window.location.hash==="#login"){q(n,e,t=>{a(t)});return}await a(o)}catch(e){n.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(e)}</div></div>`}}ue();
//# sourceMappingURL=index-B33MTrG8.js.map
