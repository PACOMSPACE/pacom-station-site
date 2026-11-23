(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function s(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(l){if(l.ep)return;l.ep=!0;const o=s(l);fetch(l.href,o)}})();const n={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},W={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[n.projectId,n.project1Id],allowedBuildingIds:[n.buildingId,n.buildingFId],allowedFloorIds:[n.lockedFloor8Id,n.floorId,n.lockedFloor6Id],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[n.projectId],allowedBuildingIds:[n.buildingId,n.buildingFId],allowedFloorIds:[n.lockedFloor8Id,n.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[n.projectId],allowedBuildingIds:[n.buildingId],allowedFloorIds:[n.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[n.projectId],allowedBuildingIds:[n.buildingId],allowedFloorIds:[n.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[n.projectId],allowedBuildingIds:[n.buildingId],allowedFloorIds:[n.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},J="pacom.web.demo.role";class pe{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){const e=sessionStorage.getItem(J);e&&W[e]&&(this.activeSession=structuredClone(W[e]));const s=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:n.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:s,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:n.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:n.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:n.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:s,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:s,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:s,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:n.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:s,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:n.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:s,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:s,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:s,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:s},{id:"conn-e7f-dali",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:s},{id:"conn-e7f-modbus",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:n.projectId,floorId:n.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:n.projectId,floorId:n.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:n.projectId,floorId:n.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:n.projectId,floorId:n.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:n.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:n.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:n.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:s,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:n.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:n.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:n.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:n.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(W).map((a,l)=>({userId:a.userId,displayName:a.displayName,email:`${a.role.replaceAll("_",".")}@pacom.local`,role:a.role,roleLabel:a.roleLabel,scopeSummary:a.scope.allowedZoneIds?.length?`E栋 7F（${a.scope.allowedZoneIds.length} 个我的区域）`:`${a.scope.allowedProjectIds.length} 项目 / ${a.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:l===0?s:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(e,s,a,l,o){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:s,endpoint:a,request:o,response:l}),this.traces.length>40&&this.traces.pop()}pushAudit(e,s,a,l){const o=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:o?.displayName??"anonymous",role:o?.role??"member",action:e,target:s,result:a,detail:l})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){if(!e.account.trim()||!e.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const s=e.account.includes("admin")?"org_admin":e.account.includes("eng")?"commissioning_engineer":e.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(W[s]),sessionStorage.setItem(J,s),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:e.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(J),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(e){return this.activeSession=structuredClone(W[e]),sessionStorage.setItem(J,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}async getSpatialTree(){const e=this.requireSession(),s=[{id:n.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"},{id:n.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"}],a=[{id:n.buildingId,projectId:n.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.png"},{id:n.buildingFId,projectId:n.projectId,name:"F栋",aboveFloors:12,belowFloors:2,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.png"}],l={projects:s.filter(o=>e.scope.allowedProjectIds.includes(o.id)),buildings:a.filter(o=>e.scope.allowedBuildingIds.includes(o.id)),floors:[{id:n.lockedFloor8Id,buildingId:n.buildingId,kind:"above",level:8,name:"8F",plan:null},{id:n.floorId,buildingId:n.buildingId,kind:"above",level:7,name:"7F",areaSqm:1383.1,plan:{floorId:n.floorId,imageUrl:"./media/7F.webp",planVersion:1,updatedAt:"2026-11-22T00:00:00Z"}},{id:n.lockedFloor6Id,buildingId:n.buildingId,kind:"above",level:6,name:"6F",plan:null}],zones:[{id:"zone-e7f-lab-east",floorId:n.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:n.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:n.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:n.floorId,name:"核心走廊与弱电井",category:"corridor"}]};return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:l.projects.length,buildings:l.buildings.length,floors:l.floors.length}),l}async getFloorDevices(e){const s=this.requireSession();if(!s.scope.allowedFloorIds.includes(e)){const l={code:"FORBIDDEN",status:403,message:`当前角色「${s.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,l),this.pushAudit("floor.read",e,"denied",l.message),new Error(`403 FORBIDDEN: ${l.message}`)}if(e!==n.floorId)return[];let a=structuredClone(this.devices);return s.scope.allowedZoneIds?.length&&(a=a.filter(l=>l.logicalZoneId&&s.scope.allowedZoneIds.includes(l.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:a.length}),a}async dispatchControlBatch(e){const s=this.requireSession();if(!s.scope.canControlDevices||!s.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权下发控制指令`);const a=`batch-e7f-${Date.now().toString(36)}`,l={batchId:a,floorId:e.floorId,createdBy:s.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(o=>({deviceId:o.deviceId,command:o.command,targetValue:o.targetValue,status:"queued"}))};return this.batches.set(a,l),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",l,e),this.pushAudit("control.dispatch",a,"success",`下发 ${e.targets.length} 台设备`),l.receipts.forEach((o,f)=>{const I=this.devices.find(g=>g.id===o.deviceId);setTimeout(()=>{o.status="dispatched",o.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:a,deviceId:o.deviceId,status:"dispatched",at:o.dispatchedAt})},280+f*120),setTimeout(()=>{const g=new Date().toISOString();!I||I.connectivity==="offline"?(o.status="timeout",o.errorCode="GATEWAY_READBACK_TIMEOUT",o.errorMessage="设备离线，网关未收到回读确认",o.verifiedAt=g):(o.status="verified_success",o.observedValue=o.targetValue,o.verifiedAt=g,this.applyObservedTelemetry(I,o.command,o.targetValue,g)),this.emit({type:"control.receipt.updated",batchId:a,deviceId:o.deviceId,status:o.status,observedValue:o.observedValue,at:g})},900+f*220)}),structuredClone(l)}applyObservedTelemetry(e,s,a,l){s==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:a,collectedAt:l,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(a)>0,collectedAt:l,stale:!1})):(s==="lighting.power"||s==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:a,collectedAt:l,stale:!1}:s==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:a,collectedAt:l,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:l,values:{[s]:a}})}async getControlBatch(e){this.requireSession();const s=this.batches.get(e);if(!s)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(s)}async listAlarms(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==n.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,s){const a=this.requireSession();if(!a.scope.canManageAlarms){const o=`角色「${a.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",o),new Error(`403 FORBIDDEN: ${o}`)}const l=this.alarms.find(o=>o.id===e);if(!l)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return l.status="acknowledged",l.acknowledgedAt=new Date().toISOString(),l.acknowledgedBy=a.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,l,{note:s}),this.pushAudit("alarm.acknowledge",e,"success",s),this.emit({type:"alarm.changed",floorId:l.floorId,alarmId:e,status:"acknowledged",at:l.acknowledgedAt}),structuredClone(l)}async listWorkOrders(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==n.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建工单`);const a=new Date().toISOString(),l={id:`wo-e7f-${Date.now().toString(36)}`,projectId:n.projectId,buildingId:n.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:a,updatedAt:a};if(this.workOrders.unshift(l),e.alarmId){const o=this.alarms.find(f=>f.id===e.alarmId);o&&(o.workOrderId=l.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",l,e),this.pushAudit("work_order.create",l.id,"success",l.title),structuredClone(l)}async updateWorkOrderStatus(e,s){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权流转工单`);const l=this.workOrders.find(o=>o.id===e);if(!l)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return l.status=s,l.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,l,{status:s}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${s}`),structuredClone(l)}async updateDevicePlanPoint(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权编辑图纸标点`);const a=this.devices.find(l=>l.id===e.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(a.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${a.version}，请刷新后重试`);return a.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},a.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,a,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${a.planPoint.x}, ${a.planPoint.y})`),structuredClone(a)}async updateDeviceHardwareBinding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改硬件绑定`);const a=this.devices.find(o=>o.id===e.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(a.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${a.version}）`);const l=new Date().toISOString();return a.physicalInstalled=e.physicalInstalled,a.physicalVerifiedAt=e.physicalInstalled?l:null,a.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:l,boundBy:s.displayName},a.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,a,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(a)}async listConnections(e){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,s){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权冻结交付批次`);const l=this.devices.filter(f=>f.physicalInstalled&&f.hardwareBinding).length,o={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:n.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:l,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:a.displayName,note:s||"例行交付基线冻结"};return this.deliveryBatches.unshift(o),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,o,{note:s}),this.pushAudit("delivery.freeze",o.id,"success",`${l}/${this.devices.length} 已现场核验`),structuredClone(o)}async getAnalysisReport(e,s,a){this.requireSession();const l=s==="today"?1:s==="7d"?7:30,f={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*l)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*l).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(j=>j.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*l).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*l).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*l).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],I=s==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],g={category:e,range:s,scopeId:a,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:f.kpis,unit:f.unit,series:f.base.map((j,w)=>({label:I[w],value:Math.round(j*(e==="energy"||e==="carbon"?l/2+.5:1)),baseline:Math.round(j*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:f.base[3],unit:f.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:f.base[4],unit:f.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:f.base[1],unit:f.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${s}&scopeId=${a}`,{kpis:g.kpis.length}),g}async listScenes(e){return this.requireSession(),structuredClone(this.scenes)}async createScene(e){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const a={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(a),this.record("REST","createScene","POST /api/v1/scenes",a,e),this.pushAudit("scene.create",a.id,"success",a.name),structuredClone(a)}async executeScene(e){const s=this.scenes.find(l=>l.id===e);if(!s)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const a=await this.dispatchControlBatch({floorId:s.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:s.actions,reason:`触发场景：${s.name}`});return s.lastExecutedAt=new Date().toISOString(),s.lastBatchId=a.batchId,a}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:n.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,s,a){this.requireSession();const l=a>=this.calendar.nightGuardStart?`下班时间 ${a} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,o=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${s} - ${a}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${s} (-30m) ~ ${a} (+30m)`,conflictWarning:l},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:l}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",o,{workdayStart:s,workdayEnd:a}),o}async saveWorkCalendar(e,s,a,l){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权修改运行日历`);if(this.calendar.version!==l)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(s>=a)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:s,workdayEnd:a,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:s,workdayEnd:a,expectedVersion:l}),this.pushAudit("settings.calendar",n.projectId,"success",`${s}-${a}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,s,a){const l=this.requireSession();if(!l.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权启停运行规则`);const o=this.rules.find(f=>f.id===e);if(!o)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(o.version!==a)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${o.version}）`);return o.enabled=s,o.version+=1,o.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,o,{enabled:s,expectedVersion:a}),this.pushAudit("settings.rule_toggle",e,"success",s?"启用":"停用"),structuredClone(o)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,s){const a=this.requireSession();if(a.role!=="org_admin"&&a.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const l=W[s],o={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:s,roleLabel:l.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(o),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",o,{email:e,role:s}),this.pushAudit("org.invite",e,"success",l.roleLabel),structuredClone(o)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(e,s){return e!==n.floorId?()=>{}:(this.listeners.add(s),()=>{this.listeners.delete(s)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${n.floorId}`,e),this.listeners.forEach(s=>s(e))}}function we(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new pe}async function Ie(t,e,s,a,l){let o="profile",f=await e.listOrgMembers(),I=await e.listAuditLogs(),g="",j="all",w="all",S="all",m=!1,C=!1,x="";async function c(){[f,I]=await Promise.all([e.listOrgMembers(),e.listAuditLogs()]),r()}function r(){const M=e.mode==="demo"&&typeof e.switchDemoRole=="function",q=g.trim().toLowerCase(),D=f.filter(b=>j!=="all"&&b.role!==j?!1:q?`${b.displayName} ${b.email} ${b.roleLabel} ${b.scopeSummary}`.toLowerCase().includes(q):!0),d=I.filter(b=>{if(w==="success"&&b.result!=="success"||w==="denied"&&b.result==="success")return!1;if(S!=="all"){const F=`${b.action} ${b.target}`.toLowerCase();if(S==="control"&&!F.includes("control")&&!F.includes("scene")&&!F.includes("控制")||S==="alarm"&&!F.includes("alarm")&&!F.includes("work")&&!F.includes("告警")||S==="deploy"&&!F.includes("deploy")&&!F.includes("plan")&&!F.includes("hardware")&&!F.includes("部署"))return!1}return!0});t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">机构与账户设置</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">广州国家实验室</span>
              <span class="pacom-badge pacom-badge--accent">${s.roleLabel}</span>
            </div>
          </div>
        </header>

        ${x?`<div class="pacom-alert-banner">${x}</div>`:""}

        <div class="lov-subnav-layout">
          <nav class="lov-subnav-rail" aria-label="机构与账户分组">
            <div class="lov-subnav-group">
              <div class="lov-subnav-group-title">工作空间</div>
              <button class="lov-subnav-item" aria-current="${o==="profile"?"true":"false"}" data-atab="profile">
                <span>我的账户与权限</span>
              </button>
              <button class="lov-subnav-item" aria-current="${o==="members"?"true":"false"}" data-atab="members">
                <span>成员与角色</span>
                <span class="pacom-badge pacom-badge--neutral">${f.length}</span>
              </button>
            </div>
            <div class="lov-subnav-group">
              <div class="lov-subnav-group-title">安全与审计</div>
              <button class="lov-subnav-item" aria-current="${o==="audit"?"true":"false"}" data-atab="audit">
                <span>操作审计日志</span>
                <span class="pacom-badge pacom-badge--neutral">${I.length}</span>
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
                        <span class="lov-setting-desc">${s.displayName}（${s.userId}）· 广州国家实验室</span>
                      </div>
                      <div class="lov-setting-control">
                        <span class="pacom-badge pacom-badge--online">${s.roleLabel}</span>
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">楼层与操作权限</span>
                        <span class="lov-setting-desc">
                          已授权楼层 ${s.scope.allowedFloorIds.length} 层 · 设备控制：${s.scope.canControlDevices?"允许":"只读"} · 部署编辑：${s.scope.canEditDeployment?"允许":"只读"}
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                ${M?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">多角色权限预览切换</h2>
                        <span class="pacom-badge pacom-badge--neutral">仅 Demo 预览可用</span>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(W).map(b=>{const F=W[b];return`
                              <button class="pacom-role-card ${b===s.role?"is-active":""}" data-switch-role="${b}">
                                <strong style="font-weight:500;">${F.roleLabel}</strong>
                                <span class="pacom-row-sub">${F.displayName}</span>
                                <span class="pacom-row-sub">授权楼层 ${F.scope.allowedFloorIds.length} 层 · 部署编辑：${F.scope.canEditDeployment?"是":"否"}</span>
                              </button>`}).join("")}
                      </div>
                    </section>`:""}

                <section class="lov-section">
                  <h2 class="lov-section-title">会话 RBAC 联调契约</h2>
                  <div class="lov-snippet-card">
                    <div class="lov-snippet-head">
                      <span class="pacom-row-sub">服务端下发的当前会话权限对象（供前后端核对）</span>
                      <button class="pacom-btn" data-copy-session="1">${C?"已复制":"复制 JSON"}</button>
                    </div>
                    <div style="padding:12px 16px;">
                      <pre class="pacom-code">${JSON.stringify(s,null,2)}</pre>
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
                  ${m?`
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
                                ${Object.keys(W).map(b=>`<option value="${b}">${W[b].roleLabel}</option>`).join("")}
                              </select>
                              <button class="pacom-btn pacom-btn--primary" type="submit">发送邀请</button>
                            </div>
                          </div>
                        </form>
                      </section>`:""}

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">机构成员目录</h2>
                      <span class="pacom-row-sub">共 ${D.length} 人</span>
                    </div>
                    <div class="lov-table-card">
                      <div class="lov-table-toolbar">
                        <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                          <input class="pacom-input" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${g}" />
                          <select class="pacom-select" data-role-filter>
                            <option value="all" ${j==="all"?"selected":""}>全部角色</option>
                            ${Object.keys(W).map(b=>`<option value="${b}" ${j===b?"selected":""}>${W[b].roleLabel}</option>`).join("")}
                          </select>
                        </div>
                        <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                          ${m?"收起邀请":"+ 邀请成员"}
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
                            ${D.map(b=>`
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
                          <option value="all" ${S==="all"?"selected":""}>全部操作类型</option>
                          <option value="control" ${S==="control"?"selected":""}>设备控制与场景</option>
                          <option value="alarm" ${S==="alarm"?"selected":""}>告警与工单处置</option>
                          <option value="deploy" ${S==="deploy"?"selected":""}>系统部署与点位</option>
                        </select>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${w==="all"}" data-audit-filter="all">全部（${I.length}）</button>
                          <button class="pacom-tab" aria-selected="${w==="success"}" data-audit-filter="success">成功</button>
                          <button class="pacom-tab" aria-selected="${w==="denied"}" data-audit-filter="denied">已拦截</button>
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
                            ${d.map(b=>`
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
    `,t.querySelectorAll("[data-atab]").forEach(b=>{b.addEventListener("click",()=>{o=b.dataset.atab,x="",r()})}),t.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",l()}),t.querySelector("[data-copy-session]")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(s,null,2)),C=!0,r(),window.setTimeout(()=>{C=!1,r()},1600)}catch{}}),t.querySelectorAll("[data-switch-role]").forEach(b=>{b.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const F=await e.switchDemoRole(b.dataset.switchRole);a(F)})}),t.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{m=!m,r()}),t.querySelector("[data-member-search]")?.addEventListener("input",b=>{const F=b.currentTarget,k=F.selectionStart??F.value.length;g=F.value,r();const O=t.querySelector("[data-member-search]");O&&(O.focus(),O.setSelectionRange(k,k))}),t.querySelector("[data-role-filter]")?.addEventListener("change",b=>{j=b.currentTarget.value,r()}),t.querySelectorAll("[data-audit-filter]").forEach(b=>{b.addEventListener("click",()=>{w=b.dataset.auditFilter??"all",r()})}),t.querySelector("[data-audit-cat]")?.addEventListener("change",b=>{S=b.currentTarget.value??"all",r()}),t.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async b=>{b.preventDefault(),x="";const F=new FormData(b.currentTarget);try{await e.inviteOrgMember(String(F.get("email")??""),String(F.get("role"))),m=!1,await c()}catch(k){x=k instanceof Error?k.message:String(k),r()}})}r()}const Se={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},ke={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}};async function Ee(t,e,s){let a=[],l=[],o="alarms",f="all",I=!1,g="",j=null;const w=new Set,S=new Set;let m="",C="";async function x(){[a,l]=await Promise.all([e.listAlarms(n.floorId),e.listWorkOrders(n.floorId)]),c()}function c(){const r=a.filter(h=>h.status==="active"&&!w.has(h.id)),M=l.filter(h=>h.status==="open"||h.status==="assigned"||h.status==="in_progress"),q=a.filter(h=>h.status!=="active").length+S.size,D=w.size,d=g.trim().toLowerCase(),B=a.filter(h=>{const p=w.has(h.id);if(f==="snoozed"){if(!p)return!1}else if(f==="active"){if(h.status!=="active"||p)return!1}else if(f==="acknowledged"){if(h.status!=="acknowledged")return!1}else if(p)return!1;return d?`${h.title} ${h.message} ${h.deviceId}`.toLowerCase().includes(d):!0}),b=new Map;for(const h of B){const p=I?h.deviceId:h.id,T=b.get(p)??[];T.push(h),b.set(p,T)}const F=Array.from(b.values()),k=l.filter(h=>d?`${h.title} ${h.description} ${h.id}`.toLowerCase().includes(d):!0);t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">告警工单</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge ${s.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${s.scope.canManageAlarms?"可确认、自处理与转单":"只读权限"}
              </span>
              <button class="lov-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">↻</button>
            </div>
          </div>
          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist">
              <button class="pacom-tab" role="tab" aria-selected="${o==="alarms"&&f==="all"}" data-pill="all">全部告警（${a.length-D}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${o==="alarms"&&f==="active"}" data-pill="active">待处理（${r.length}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${o==="alarms"&&f==="acknowledged"}" data-pill="acknowledged">已确认（${a.filter(h=>h.status==="acknowledged").length}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${o==="alarms"&&f==="snoozed"}" data-pill="snoozed">已忽略 24h（${D}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${o==="workorders"}" data-pill="workorders">运维工单（${l.length}）</button>
            </div>
            ${o==="alarms"?`
                <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                  <span>按设备根因归并</span>
                  <button type="button" class="lov-switch" role="switch" aria-checked="${I}" data-toggle-group="1" aria-label="按设备根因归并">
                    <span class="lov-switch-thumb"></span>
                  </button>
                </label>`:""}
          </div>
        </header>

        <div class="pacom-content-page" style="padding:4px 0 24px;">
          <div class="lov-kpi-strip" role="region" aria-label="告警闭环指标">
            <div class="lov-kpi-cell">
              <span class="lov-kpi-label">待处理告警</span>
              <div class="lov-kpi-value">${r.length}<span class="lov-kpi-unit">条</span></div>
              <span class="lov-kpi-delta">实时遥测驱动状态</span>
            </div>
            <div class="lov-kpi-cell">
              <span class="lov-kpi-label">处理中工单</span>
              <div class="lov-kpi-value">${M.length}<span class="lov-kpi-unit">单</span></div>
              <span class="lov-kpi-delta">已指派或现场处置</span>
            </div>
            <div class="lov-kpi-cell">
              <span class="lov-kpi-label">已确认 / 闭环验证</span>
              <div class="lov-kpi-value">${q}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">24h 无复发即计入有效</span>
            </div>
            <div class="lov-kpi-cell">
              <span class="lov-kpi-label">限时忽略（降噪）</span>
              <div class="lov-kpi-value">${D}<span class="lov-kpi-unit">条</span></div>
              <span class="lov-kpi-delta">到期自动恢复监控</span>
            </div>
          </div>

          ${m?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${m}</span></div>`:""}
          ${C?`<div class="pacom-alert-banner">${C}</div>`:""}

          ${o==="alarms"?`
              <section class="lov-table-card">
                <div class="lov-table-toolbar">
                  <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                    <input class="pacom-input" style="max-width:300px;" data-alarm-search placeholder="搜索告警标题、设备编号或描述…" value="${g}" />
                  </div>
                  <span class="pacom-row-sub">展示 ${F.length} 项${I?"（已按设备根因归并）":""}</span>
                </div>
                ${F.length===0?'<div class="lov-empty-state"><strong>当前视图无告警</strong><span>系统运行正常，可切换上方页签查看历史确认或运维工单。</span></div>':`
                    <div class="lov-table-wrap">
                      <table class="lov-table">
                        <thead>
                          <tr>
                            <th>级别</th>
                            <th>告警事项</th>
                            <th>关联设备</th>
                            <th>状态</th>
                            <th style="text-align:right;">闭环处置</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${F.map(h=>{const p=h[0],T=ke[p.severity]??{label:p.severity,cls:"pacom-badge--neutral"},N=j===p.id,Z=w.has(p.id);return`
                                <tr>
                                  <td><span class="pacom-badge ${T.cls}">${T.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                      <span>${p.title}</span>
                                      ${h.length>1?`<span class="pacom-badge pacom-badge--accent">归并 ${h.length} 条</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${p.message}</div>
                                  </td>
                                  <td><code style="font-size:12px;">${p.deviceId}</code></td>
                                  <td>
                                    <span class="pacom-badge ${Z?"pacom-badge--neutral":p.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${Z?"已忽略 24h":p.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${Z?`<button class="pacom-btn" data-unsnooze="${p.id}">恢复监控</button>`:`
                                            ${p.status==="active"?`<button class="pacom-btn" data-mark-actioned="${p.id}" title="现场自行调整后一键闭环">标记已处置</button>`:""}
                                            ${p.workOrderId?`<span class="pacom-badge pacom-badge--accent">${p.workOrderId}</span>`:`<button class="pacom-btn pacom-btn--primary" data-to-wo="${p.id}">转工单</button>`}
                                            ${p.status==="active"?`<button class="pacom-btn pacom-btn--ghost" data-snooze="${p.id}">忽略 24h</button>`:""}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${p.id}">${N?"收起":"详情"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${N?`
                                    <tr class="lov-table-detail-row">
                                      <td colspan="5">
                                        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                                          <div class="pacom-kv-grid" style="grid-template-columns:84px 1fr 84px 1fr; flex:1; min-width:300px;">
                                            <span class="pacom-kv-label">告警编号</span><span><code>${p.id}</code></span>
                                            <span class="pacom-kv-label">触发时间</span><span>${p.triggeredAt?p.triggeredAt.slice(0,19).replace("T"," "):"-"}</span>
                                            <span class="pacom-kv-label">楼层范围</span><span>${p.floorId}</span>
                                            <span class="pacom-kv-label">关联工单</span><span>${p.workOrderId??"尚未创建"}</span>
                                          </div>
                                          <button class="pacom-btn" data-locate-home="1">定位到 E7F 平面图 →</button>
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
                    <input class="pacom-input" style="max-width:300px;" data-alarm-search placeholder="搜索工单编号、标题或说明…" value="${g}" />
                  </div>
                  <span class="pacom-row-sub">共 ${k.length} 条工单</span>
                </div>
                ${k.length===0?'<div class="lov-empty-state"><strong>暂无运维工单</strong><span>可在告警队列中一键将告警转为运维工单。</span></div>':`
                    <div class="lov-table-wrap">
                      <table class="lov-table">
                        <thead>
                          <tr>
                            <th>工单编号</th>
                            <th>工单事项</th>
                            <th>状态流转</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${k.map(h=>`
                              <tr>
                                <td><code style="font-size:12px;">${h.id}</code></td>
                                <td>
                                  <div style="font-weight:500;">${h.title}</div>
                                  <div class="pacom-row-sub">${h.description}</div>
                                </td>
                                <td>
                                  <select class="pacom-select" data-wo-status="${h.id}">
                                    ${["open","assigned","in_progress","resolved","closed"].map(p=>`<option value="${p}" ${h.status===p?"selected":""}>${Se[p]}</option>`).join("")}
                                  </select>
                                </td>
                              </tr>`).join("")}
                        </tbody>
                      </table>
                    </div>`}
              </section>`}
        </div>
      </div>
    `,t.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{m="",x()}),t.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{I=!I,c()}),t.querySelectorAll("[data-pill]").forEach(h=>{h.addEventListener("click",()=>{const p=h.dataset.pill;m="",p==="workorders"?o="workorders":(o="alarms",f=p??"all"),c()})}),t.querySelector("[data-alarm-search]")?.addEventListener("input",h=>{const p=h.currentTarget,T=p.selectionStart??p.value.length;g=p.value,c();const N=t.querySelector("[data-alarm-search]");N&&(N.focus(),N.setSelectionRange(T,T))}),t.querySelectorAll("[data-expand-alarm]").forEach(h=>{h.addEventListener("click",()=>{const p=h.dataset.expandAlarm??null;j=j===p?null:p,c()})}),t.querySelectorAll("[data-locate-home]").forEach(h=>{h.addEventListener("click",()=>{window.location.hash="#home"})}),t.querySelectorAll("[data-snooze]").forEach(h=>{h.addEventListener("click",()=>{const p=h.dataset.snooze;p&&(w.add(p),m="已将该告警限时忽略 24 小时，期间不再重复打扰，可在「已忽略 24h」页签随时恢复。",c())})}),t.querySelectorAll("[data-unsnooze]").forEach(h=>{h.addEventListener("click",()=>{const p=h.dataset.unsnooze;p&&(w.delete(p),m="已恢复该告警的实时监控。",c())})}),t.querySelectorAll("[data-mark-actioned]").forEach(h=>{h.addEventListener("click",async()=>{C="";const p=h.dataset.markActioned;try{await e.acknowledgeAlarm(p,"现场自处理完成（Mark Actioned）"),S.add(p),m="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await x()}catch(T){C=T instanceof Error?T.message:String(T),c()}})}),t.querySelectorAll("[data-to-wo]").forEach(h=>{h.addEventListener("click",async()=>{C="";const p=a.find(T=>T.id===h.dataset.toWo);if(p)try{await e.createWorkOrder({floorId:p.floorId,deviceId:p.deviceId,alarmId:p.id,title:`处置告警：${p.title}`,description:p.message}),m=`已将「${p.title}」转为运维工单。`,await x()}catch(T){C=T instanceof Error?T.message:String(T),c()}})}),t.querySelectorAll("[data-wo-status]").forEach(h=>{h.addEventListener("change",async()=>{C="";try{await e.updateWorkOrderStatus(h.dataset.woStatus,h.value),m="工单状态已更新并写入审计日志。",await x()}catch(p){C=p instanceof Error?p.message:String(p),await x()}})})}await x()}const ee=[{id:"energy",label:"能源",desc:"分项能耗与峰谷负荷趋势"},{id:"environment",label:"环境",desc:"温湿度、CO₂ 与洁净室舒适度"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与异常分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能基线对比"}];function xe(t){const e=Math.max(...t.series.map(S=>Math.max(S.value,S.baseline??0)),1),s=42,a=26,l=32,o=Math.max(t.series.length*(s+a)+l*2,420),f=204,I=164,g=128,j=[0,.25,.5,.75,1].map(S=>{const m=Math.round(I-S*g);return`<line x1="${l-8}" y1="${m}" x2="${o-16}" y2="${m}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${S===0?"0":"3 3"}" />`}).join(""),w=t.series.map((S,m)=>{const C=l+m*(s+a),x=Math.max(6,Math.round(S.value/e*g)),c=I-x,r=typeof S.baseline=="number"&&S.value>S.baseline*1.08,M=r?`<rect x="${C-6}" y="28" width="${s+12}" height="${I-28}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",q=typeof S.baseline=="number"?`<line x1="${C-4}" y1="${Math.round(I-S.baseline/e*g)}" x2="${C+s+4}" y2="${Math.round(I-S.baseline/e*g)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"";return`
        ${M}
        ${q}
        <rect x="${C}" y="${c}" width="${s}" height="${x}" rx="7" fill="${r?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.86" />
        <text x="${C+s/2}" y="${c-7}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${S.value}</text>
        <text x="${C+s/2}" y="${I+20}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${S.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${o} ${f}" style="width:100%; height:210px; display:block;" role="img" aria-label="${t.category} 趋势图">
      ${j}
      ${w}
    </svg>
  `}function Ae(t){const e=[["时段",`数值 (${t.unit})`,`基线 (${t.unit})`].join(","),...t.series.map(o=>[o.label,String(o.value),o.baseline!==void 0?String(o.baseline):""].join(","))],s=new Blob([`\uFEFF${e.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(s),l=document.createElement("a");l.href=a,l.download=`pacom-${t.category}-${t.range}.csv`,l.click(),URL.revokeObjectURL(a)}async function Le(t,e,s){let a="energy",l="7d",o="chart",f=!1,I=null;async function g(){I=await e.getAnalysisReport(a,l,n.floorId),j()}function j(){if(!I)return;const w=ee.find(m=>m.id===a)??ee[0],S=I.zoneBreakdown.filter(m=>m.status==="warning");t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">数据分析</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
              <span class="pacom-badge pacom-badge--neutral">${I.scopeLabel}</span>
              <select class="pacom-select" data-range-select aria-label="统计时间范围">
                <option value="today" ${l==="today"?"selected":""}>今日</option>
                <option value="7d" ${l==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${l==="30d"?"selected":""}>近 30 天</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              <button class="pacom-btn" data-toggle-canvas="1">${f?"收起空间画布":"展开楼层对照"}</button>
            </div>
          </div>
        </header>

        <div class="lov-subnav-layout">
          <nav class="lov-subnav-rail" aria-label="分析维度">
            <div class="lov-subnav-group">
              <div class="lov-subnav-group-title">分析维度</div>
              ${ee.map(m=>`
                  <button class="lov-subnav-item" aria-current="${a===m.id?"true":"false"}" data-cat="${m.id}">
                    <span>${m.label}</span>
                  </button>`).join("")}
            </div>
          </nav>

          <div class="lov-subnav-main">
            <div class="lov-kpi-strip" role="region" aria-label="核心统计指标">
              ${I.kpis.map(m=>`
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">${m.label}</span>
                    <div class="lov-kpi-value">
                      <span>${m.value}</span>
                      ${m.unit?`<span class="lov-kpi-unit">${m.unit}</span>`:""}
                    </div>
                    <span class="lov-kpi-delta">${m.delta??"与基线持平"}</span>
                  </div>`).join("")}
            </div>

            <section class="lov-section">
              <div class="lov-section-head">
                <h2 class="lov-section-title">${w?.label??"趋势"}统计（${I.unit}）</h2>
                <div style="display:flex; align-items:center; gap:10px;">
                  <span class="pacom-row-sub">虚线为目标基线 · 浅红阴影为超基线异常段</span>
                  <div class="pacom-tabs">
                    <button class="pacom-tab" aria-selected="${o==="chart"}" data-chart-mode="chart">趋势图</button>
                    <button class="pacom-tab" aria-selected="${o==="table"}" data-chart-mode="table">明细原表</button>
                  </div>
                </div>
              </div>
              <div class="pacom-card" style="gap:16px;">
                ${o==="chart"?xe(I):`
                    <div class="lov-table-wrap">
                      <table class="lov-table">
                        <thead>
                          <tr>
                            <th>统计时段</th>
                            <th>实测值（${I.unit}）</th>
                            <th>基线参考</th>
                            <th>状态</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${I.series.map(m=>{const C=typeof m.baseline=="number"&&m.value>m.baseline*1.08;return`
                                <tr>
                                  <td><strong>${m.label}</strong></td>
                                  <td>${m.value}</td>
                                  <td>${m.baseline??"-"}</td>
                                  <td><span class="pacom-badge ${C?"pacom-badge--warning":"pacom-badge--online"}">${C?"超基线":"正常"}</span></td>
                                </tr>`}).join("")}
                        </tbody>
                      </table>
                    </div>`}
                <div class="lov-banner">
                  <div class="lov-banner-text">
                    <span class="lov-banner-title">${w?.desc??"空间运行洞察"}</span>
                    <span class="lov-banner-sub">
                      ${S.length>0?`当前有 ${S.length} 个功能区指标偏高（${S.map(m=>m.zoneName).join("、")}），建议结合楼层平面图核查设备策略。`:"当前统计周期内各功能区运行平稳，均在目标基线区间内。"}
                    </span>
                  </div>
                  <button class="pacom-btn" data-toggle-canvas="1">${f?"隐藏平面图":"对照 E7F 平面图"}</button>
                </div>
              </div>
            </section>

            <div class="lov-grid-2">
              <section class="lov-section">
                <div class="lov-section-head">
                  <h2 class="lov-section-title">功能区明细对比</h2>
                  <span class="pacom-row-sub">${I.zoneBreakdown.length} 个分区</span>
                </div>
                <div class="lov-table-card">
                  <div class="lov-table-wrap">
                    <table class="lov-table">
                      <thead>
                        <tr>
                          <th>功能区</th>
                          <th>当前值</th>
                          <th>状态</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${I.zoneBreakdown.map(m=>`
                            <tr>
                              <td>
                                <div style="font-weight:500;">${m.zoneName}</div>
                                <div class="pacom-row-sub">${m.zoneId}</div>
                              </td>
                              <td><strong>${m.value}</strong> <span class="pacom-row-sub">${m.unit}</span></td>
                              <td>
                                <span class="pacom-badge ${m.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                  ${m.status==="warning"?"偏高关注":"正常"}
                                </span>
                              </td>
                            </tr>`).join("")}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section class="lov-section">
                <div class="lov-section-head">
                  <h2 class="lov-section-title">空间对照预览</h2>
                  <span class="pacom-row-sub">与首页控制状态独立</span>
                </div>
                <div class="pacom-card" style="flex:1; justify-content:center; align-items:center; min-height:220px;">
                  ${f?'<img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 分析楼层预览" style="max-height:240px;" />':`
                        <div class="lov-empty-state" style="padding:24px 12px;">
                          <strong>按需开启 E7F 空间对照</strong>
                          <span>点击右上角或下方按钮可在当前分析视图中叠加 E7F 楼层平面图。</span>
                          <button class="pacom-btn" style="margin-top:8px;" data-toggle-canvas="1">展开 E7F 平面图</button>
                        </div>`}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    `,t.querySelectorAll("[data-cat]").forEach(m=>{m.addEventListener("click",()=>{a=m.dataset.cat,g()})}),t.querySelector("[data-range-select]")?.addEventListener("change",m=>{l=m.currentTarget.value,g()}),t.querySelectorAll("[data-chart-mode]").forEach(m=>{m.addEventListener("click",()=>{o=m.dataset.chartMode??"chart",j()})}),t.querySelector("[data-export-csv]")?.addEventListener("click",()=>{I&&Ae(I)}),t.querySelectorAll("[data-toggle-canvas]").forEach(m=>{m.addEventListener("click",()=>{f=!f,j()})})}await g()}async function je(t,e,s){let a="floorplan",l=await e.getSpatialTree(),o=[],f=[],I=[],g=null,j=!1,w=null,S="",m="";async function C(){m="";const[c,r,M,q]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(n.floorId).catch(()=>[]),e.listConnections(n.projectId),e.listDeliveryBatches(n.floorId)]);l=c,o=r,f=M,I=q,o.some(D=>D.id===g)||(g=o[0]?.id??null),x()}function x(){const c=o.find(d=>d.id===g)??null,r=s.scope.canEditDeployment,M=f.reduce((d,B)=>d+B.collectedPoints,0),q=f.reduce((d,B)=>d+B.calculatedPoints,0),D=f.filter(d=>d.status==="connected").length;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">系统部署</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge ${r?"pacom-badge--online":"pacom-badge--warning"}">
                ${r?"可编辑部署与硬件绑定":"只读权限（写入将被服务端 403 拦截）"}
              </span>
            </div>
          </div>
          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist">
              <button class="pacom-tab" role="tab" aria-selected="${a==="floorplan"}" data-dtab="floorplan">图纸标点与四态绑定</button>
              <button class="pacom-tab" role="tab" aria-selected="${a==="topology"}" data-dtab="topology">项目空间拓扑</button>
              <button class="pacom-tab" role="tab" aria-selected="${a==="connections"}" data-dtab="connections">系统接入（${f.length}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${a==="delivery"}" data-dtab="delivery">交付冻结（${I.length}）</button>
            </div>
          </div>
        </header>

        ${S?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${S}</span></div>`:""}
        ${m?`<div class="pacom-alert-banner">${m}</div>`:""}

        ${a==="floorplan"?`
            <section class="pacom-split">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:380px;">
                <div class="pacom-pane-toolbar">
                  <div style="font-weight:500;">E7F 设备与四态配置（${o.length}）</div>
                  <div class="pacom-row-sub">
                    图上放点仅更新 <code>planPoint</code>，绝不自动改写物理安装态或硬件端口绑定。
                  </div>
                </div>
                <div class="pacom-list">
                  ${o.map(d=>`
                      <div class="pacom-row ${d.id===g?"is-selected":""}" data-pick-dev="${d.id}">
                        <div style="min-width:0;">
                          <div class="pacom-row-title">${d.name}</div>
                          <div class="pacom-row-sub">v${d.version} · ${d.hardwareBinding?.protocol.toUpperCase()??"未绑定"} · ${d.physicalInstalled?"现场已确认":"待物理复核"}</div>
                        </div>
                        <span class="pacom-badge ${d.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">
                          ${d.planPoint?`${Math.round(d.planPoint.x*100)}%,${Math.round(d.planPoint.y*100)}%`:"未标点"}
                        </span>
                      </div>`).join("")}
                </div>
                ${c?`
                    <form data-role="binding-form" style="padding:14px 16px; border-top:var(--hw) solid var(--pacom-border-subtle); background:var(--pacom-surface-primary); display:flex; flex-direction:column; gap:10px;">
                      <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-weight:500; font-size:13px;">显式硬件绑定与现场复核</span>
                        <span class="pacom-badge pacom-badge--neutral">${c.id}</span>
                      </div>
                      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                        <select class="pacom-select" name="protocol">
                          ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(d=>`<option value="${d}" ${c.hardwareBinding?.protocol===d?"selected":""}>${d.toUpperCase()}</option>`).join("")}
                        </select>
                        <input class="pacom-input" name="networkAddress" placeholder="网络地址/主题" value="${c.hardwareBinding?.networkAddress??""}" />
                      </div>
                      <div style="display:grid; grid-template-columns:1fr auto; gap:8px; align-items:center;">
                        <input class="pacom-input" name="portOrChannel" placeholder="端口/回路" value="${c.hardwareBinding?.portOrChannel??""}" />
                        <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; cursor:pointer;">
                          <input type="checkbox" name="physicalInstalled" ${c.physicalInstalled?"checked":""} />
                          现场物理已复核
                        </label>
                      </div>
                      <div style="display:flex; gap:8px; flex-wrap:wrap;">
                        <button class="pacom-btn" type="button" data-toggle-place="1">${j?"取消点图更新":"点图更新坐标"}</button>
                        <button class="pacom-btn" type="button" data-ftt-test="1" title="远程验证指令下发、状态回读并自动恢复工况">单机回读自检</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit" style="flex:1;">保存硬件绑定（v${c.version}）</button>
                      </div>
                    </form>`:""}
              </aside>
              <div class="pacom-splitter"></div>
              <main class="pacom-right-pane">
                <div class="pacom-canvas-stage" data-role="deploy-stage" style="cursor:${j?"crosshair":"default"};">
                  <div class="pacom-canvas-viewport">
                    <div class="pacom-plan-wrap" data-role="deploy-plan">
                      <img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 部署平面图" />
                      ${o.filter(d=>d.planPoint).map(d=>`
                          <button class="pacom-pin ${d.id===g?"is-selected":""} ${d.connectivity==="offline"?"pacom-pin--offline":""}"
                            style="left:${(d.planPoint.x*100).toFixed(2)}%; top:${(d.planPoint.y*100).toFixed(2)}%;"
                            data-pick-dev="${d.id}">
                            <span>${d.name.slice(0,7)}</span>
                          </button>`).join("")}
                    </div>
                  </div>
                  ${j&&c?`<div style="position:absolute; top:16px; left:16px; z-index:8;" class="pacom-badge pacom-badge--accent">标点模式：点击图纸任意位置更新「${c.name}」的 2D 坐标（不改动硬件绑定）</div>`:""}
                </div>
              </main>
            </section>`:a==="topology"?`
              <div class="pacom-content-page" style="padding:4px 0 24px;">
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">项目 → 楼宇 → 楼层归属拓扑</h2>
                    <span class="pacom-row-sub">共 ${l.projects.length} 个项目 · ${l.buildings.length} 栋楼宇</span>
                  </div>
                  <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:14px;">
                    ${l.projects.map(d=>{const B=l.buildings.filter(b=>b.projectId===d.id);return`
                          <div class="pacom-card" style="padding:16px; gap:10px;">
                            <img src="${d.imageUrl??"./media/gzlab.jpg"}" alt="${d.name}" style="width:100%; height:128px; object-fit:cover; border-radius:10px;" />
                            <div>
                              <strong style="font-size:15px; font-weight:500;">${d.name}</strong>
                              <div class="pacom-row-sub">${d.city??""} ${d.address??""} · ${B.length} 栋授权楼宇</div>
                            </div>
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              ${B.map(b=>`
                                  <div class="pacom-receipt-item">
                                    <span><strong>${b.name}</strong> · 地上 ${b.aboveFloors}F / ${b.areaSqm??"-"} m²</span>
                                    <span class="pacom-badge ${b.id===n.buildingId?"pacom-badge--accent":"pacom-badge--neutral"}">${b.id===n.buildingId?"含 E7F":"对照"}</span>
                                  </div>`).join("")}
                            </div>
                          </div>`}).join("")}
                  </div>
                </section>
              </div>`:a==="connections"?`
                <div class="pacom-content-page" style="padding:4px 0 24px;">
                  <div class="lov-kpi-strip">
                    <div class="lov-kpi-cell">
                      <span class="lov-kpi-label">已连通通道</span>
                      <div class="lov-kpi-value">${D}<span class="lov-kpi-unit">/ ${f.length}</span></div>
                      <span class="lov-kpi-delta">边缘网关在线监控</span>
                    </div>
                    <div class="lov-kpi-cell">
                      <span class="lov-kpi-label">数据采集健康度</span>
                      <div class="lov-kpi-value">${f.length>0?Math.round(D/f.length*100):100}<span class="lov-kpi-unit">%</span></div>
                      <span class="lov-kpi-delta">区分设备真故障与断流</span>
                    </div>
                    <div class="lov-kpi-cell">
                      <span class="lov-kpi-label">原始采集点</span>
                      <div class="lov-kpi-value">${M}<span class="lov-kpi-unit">点</span></div>
                      <span class="lov-kpi-delta">协议直采实时遥测</span>
                    </div>
                    <div class="lov-kpi-cell">
                      <span class="lov-kpi-label">衍生计算点</span>
                      <div class="lov-kpi-value">${q}<span class="lov-kpi-unit">点</span></div>
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
                            ${f.map(d=>`
                                <tr>
                                  <td><strong>${d.name}</strong></td>
                                  <td><span class="pacom-badge pacom-badge--neutral">${d.protocol.toUpperCase()}</span></td>
                                  <td><code style="font-size:12px;">${d.endpoint}</code></td>
                                  <td>采集 ${d.collectedPoints} / 计算 ${d.calculatedPoints}</td>
                                  <td>
                                    <span class="pacom-badge ${d.status==="connected"?"pacom-badge--online":"pacom-badge--warning"}">
                                      ${d.status==="connected"?"已连通":d.status}
                                    </span>
                                  </td>
                                  <td style="text-align:right;">
                                    <button class="pacom-btn pacom-btn--ghost" data-copy-endpoint="${d.id}" data-endpoint-val="${d.endpoint}">
                                      ${w===d.id?"已复制":"复制端点"}
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
                      <button class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${r?"":"disabled"}>+ 新建交付冻结快照</button>
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
                            ${I.map(d=>`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${d.versionTag}</div>
                                    <div class="pacom-row-sub"><code>${d.id}</code></div>
                                  </td>
                                  <td><strong>${d.verifiedCount}</strong> / ${d.deviceCount} 台设备</td>
                                  <td>
                                    <div>${d.frozenBy}</div>
                                    <div class="pacom-row-sub">${d.note??"-"}</div>
                                  </td>
                                  <td><span class="pacom-badge pacom-badge--accent">${d.status}</span></td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </div>`}
      </div>
    `,t.querySelectorAll("[data-dtab]").forEach(d=>{d.addEventListener("click",()=>{a=d.dataset.dtab,S="",m="",x()})}),t.querySelectorAll("[data-pick-dev]").forEach(d=>{d.addEventListener("click",()=>{g=d.dataset.pickDev??null,x()})}),t.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{j=!j,x()}),t.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{c&&(m="",c.connectivity==="offline"?m=`单机回读自检未通过：「${c.name}」当前离线，请先检查网关 ${c.hardwareBinding?.networkAddress??"-"} 通信状态。`:S=`单机回读自检通过（PASS）：「${c.name}」指令下发 → 状态回读一致 → 已安全自动恢复原工况。`,x())}),t.querySelectorAll("[data-copy-endpoint]").forEach(d=>{d.addEventListener("click",async()=>{const B=d.dataset.endpointVal??"",b=d.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(B),w=b,x(),window.setTimeout(()=>{w=null,x()},1600)}catch{}})}),t.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async d=>{if(!j||!c)return;const B=d.currentTarget.getBoundingClientRect(),b=Math.max(.02,Math.min(.98,(d.clientX-B.left)/B.width)),F=Math.max(.02,Math.min(.98,(d.clientY-B.top)/B.height));try{await e.updateDevicePlanPoint({deviceId:c.id,floorId:n.floorId,planVersion:c.planPoint?.planVersion??1,x:b,y:F,expectedVersion:c.version}),j=!1,S=`已更新「${c.name}」图上坐标（硬件绑定与物理安装态保持不变）`,await C()}catch(k){m=k instanceof Error?k.message:String(k),x()}}),t.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async d=>{if(d.preventDefault(),!c)return;const B=new FormData(d.currentTarget);try{await e.updateDeviceHardwareBinding({deviceId:c.id,gatewayId:c.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(B.get("protocol")),networkAddress:String(B.get("networkAddress")??""),portOrChannel:String(B.get("portOrChannel")??""),physicalInstalled:B.get("physicalInstalled")==="on",expectedVersion:c.version}),S=`已保存「${c.name}」的硬件绑定与物理安装状态`,await C()}catch(b){m=b instanceof Error?b.message:String(b),x()}}),t.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const d=await e.freezeDeliveryBatch(n.floorId,"前端系统部署发起冻结");S=`已生成冻结批次 ${d.versionTag}（核验 ${d.verifiedCount}/${d.deviceCount}）`,await C()}catch(d){m=d instanceof Error?d.message:String(d),x()}})}await C()}const te="pacom.web.e7f.leftWidth",Ce={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},Oe={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},De={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:42,top:42,width:14,height:22}};function y(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function le(t){return t.level==="all-projects"?"all":t.level==="project"?`project:${t.projectId}`:t.level==="building"?`building:${t.projectId}:${t.buildingId}`:`floor:${t.projectId}:${t.buildingId}:${t.floorId}`}async function Fe(t,e,s){const a=await e.getSpatialTree(),l=e.mode==="demo",o=s.scope.canControlDevices,f=s.scope.canManageAlarms,I=s.scope.allowedZoneIds?.length?s.scope.allowedZoneIds:null;let g={level:"floor",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId},j="devices",w="canvas",S="",m="all",C="all",x=null,c=!1,r="devices";const M=new Set,q=new Set;let D=[],d=[],B=[],b=null,F=null,k=1,O=0,h=0,p=Number(localStorage.getItem(te)||400);(!Number.isFinite(p)||p<320||p>680)&&(p=400);let T=null;function N(){return a.zones.filter(u=>!(g.level==="floor"&&u.floorId!==g.floorId||I&&!I.includes(u.id)))}async function Z(u){g=u,F=null,C="all",q.clear(),k=1,O=0,h=0,T&&(T(),T=null);const L=g.level==="floor"?g.floorId:n.floorId;if(g.level==="floor")try{const[i,E,v]=await Promise.all([e.getFloorDevices(g.floorId),e.listAlarms(g.floorId),e.listWorkOrders(g.floorId)]);D=i,d=E,B=v,D.some($=>$.id===x)||(x=D[1]?.id??D[0]?.id??null,c=!1),T=e.subscribeFloorEvents(g.floorId,async $=>{$.type==="control.receipt.updated"&&b?.batchId===$.batchId&&(b=await e.getControlBatch($.batchId)),($.type==="telemetry.updated"||$.type==="device.connectivity")&&g.level==="floor"&&(D=await e.getFloorDevices(g.floorId)),$.type==="alarm.changed"&&g.level==="floor"&&(d=await e.listAlarms(g.floorId)),K()})}catch(i){D=[],d=[],B=[],x=null,c=!1,F=i instanceof Error?i.message:String(i)}else{c=!1;const[i,E,v]=await Promise.all([e.getFloorDevices(L).catch(()=>[]),e.listAlarms(L).catch(()=>[]),e.listWorkOrders(L).catch(()=>[])]);D=i,d=E,B=v}U()}function Y(u){return u?a.zones.find(L=>L.id===u)?.name??u:"未分配逻辑区"}function P(){const u=S.trim().toLowerCase();return D.filter(L=>C!=="all"&&L.logicalZoneId!==C||m!=="all"&&L.category!==m?!1:u?L.name.toLowerCase().includes(u)||L.id.toLowerCase().includes(u)||Y(L.logicalZoneId).toLowerCase().includes(u):!0)}async function z(u,L,i){!u.length||g.level!=="floor"||!o||(b=await e.dispatchControlBatch({floorId:g.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:u.map(E=>({deviceId:E,command:L,targetValue:i}))}),K())}function K(){const u=document.activeElement,L=u?.dataset?.role,i=u&&"selectionStart"in u?u.selectionStart:null,E=u&&"selectionEnd"in u?u.selectionEnd:null,v=t.querySelector(".pacom-list")?.scrollTop??0;U();const $=t.querySelector(".pacom-list");if($&&($.scrollTop=v),L==="search"){const A=t.querySelector('[data-role="search"]');A&&(A.focus(),i!==null&&E!==null&&A.setSelectionRange(i,E))}}function Q(){const u=t.querySelector('[data-role="canvas-viewport"]');u&&(u.style.transform=`translate(${O}px, ${h}px) scale(${k})`);const L=t.querySelector('[data-role="canvas-hint"]');L&&(L.textContent=`缩放 ${Math.round(k*100)}% · 滚轮缩放 · 拖动平移 · 双击复位`)}function ve(){const u=g,L=[{label:"全部项目",scopeVal:"all",active:u.level==="all-projects"}];if(u.level!=="all-projects"){const i=a.projects.find(E=>E.id===u.projectId);L.push({label:i?.name??"项目",scopeVal:`project:${u.projectId}`,active:u.level==="project"})}if(u.level==="building"||u.level==="floor"){const i=a.buildings.find(E=>E.id===u.buildingId);L.push({label:i?.name??"楼宇",scopeVal:`building:${u.projectId}:${u.buildingId}`,active:u.level==="building"})}if(u.level==="floor"){const i=a.floors.find(E=>E.id===u.floorId);L.push({label:i?.name??"楼层",scopeVal:le(u),active:!0})}return`
      <nav class="pacom-crumbs" aria-label="空间层级路径">
        ${L.map((i,E)=>i.active?`<span class="pacom-crumb-current">${y(i.label)}</span>`:`<button type="button" class="pacom-crumb-btn" data-nav-scope="${y(i.scopeVal)}">${y(i.label)}</button>${E<L.length-1?'<span aria-hidden="true">/</span>':""}`).join("")}
      </nav>
    `}function me(){const u=le(g),L=a.projects.map(v=>`<option value="project:${y(v.id)}" ${u===`project:${v.id}`?"selected":""}>项目 · ${y(v.name)}</option>`).join(""),i=a.buildings.map(v=>{const $=`building:${v.projectId}:${v.id}`;return`<option value="${y($)}" ${u===$?"selected":""}>楼宇 · 广实2号园 / ${y(v.name)}</option>`}).join(""),E=a.floors.map(v=>{const $=s.scope.allowedFloorIds.includes(v.id),A=`floor:${n.projectId}:${v.buildingId}:${v.id}`;return`<option value="${y(A)}" ${u===A?"selected":""}>楼层 · 广实2号园 / E栋 / ${y(v.name)}${$?"":"（未授权）"}</option>`}).join("");return`
      <option value="all" ${u==="all"?"selected":""}>全部项目（${a.projects.length} 个授权园区）</option>
      <optgroup label="项目级">${L}</optgroup>
      <optgroup label="楼宇级">${i}</optgroup>
      <optgroup label="楼层级">${E}</optgroup>
    `}function ge(){if(g.level==="all-projects"){const i=D.filter(v=>v.connectivity==="online").length,E=d.filter(v=>v.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">授权项目总览（${a.projects.length}）</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">楼宇</span><strong>${a.buildings.length} 栋</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线</span><strong>${i}/${D.length}</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:var(--pacom-status-warning);">${E} 条</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${a.projects.map(v=>{const $=a.buildings.filter(A=>A.projectId===v.id).length;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="project:${y(v.id)}">
                  <img src="${y(v.imageUrl??"./media/gzlab.jpg")}" alt="${y(v.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${y(v.name)}</strong>
                    <span class="pacom-badge pacom-badge--accent">${$} 栋楼宇</span>
                  </div>
                  <div class="pacom-row-sub">${y(v.city??"")} · ${y(v.address??"")}</div>
                </article>`}).join("")}
        </div>
      `}const u=g;if(u.level==="project"){const i=a.projects.find(v=>v.id===u.projectId),E=a.buildings.filter(v=>v.projectId===u.projectId);return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${y(i?.name??"项目")} · 楼宇清单（${E.length}）</div>
          <div class="pacom-row-sub">${y(i?.city??"")} ${y(i?.address??"")}</div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${E.map(v=>`
              <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="building:${y(v.projectId)}:${y(v.id)}">
                <img src="${y(v.imageUrl??"./media/building-e.png")}" alt="${y(v.name)}" style="width:100%; height:116px; object-fit:cover; border-radius:8px;" />
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <strong>${y(v.name)}</strong>
                  <span class="pacom-badge ${v.id===n.buildingId?"pacom-badge--online":"pacom-badge--neutral"}">${v.id===n.buildingId?"含 E7F 试点":"暂无交付楼层"}</span>
                </div>
                <div class="pacom-row-sub">地上 ${v.aboveFloors} 层 · 地下 ${v.belowFloors} 层 · 面积 ${v.areaSqm??"-"} m²</div>
              </article>`).join("")}
        </div>
      `}if(u.level==="building"){const i=a.buildings.find($=>$.id===u.buildingId),E=a.floors.filter($=>$.buildingId===u.buildingId),v=B.filter($=>$.status!=="closed"&&$.status!=="resolved");return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${y(i?.name??"楼宇")} 概况与待办</div>
          <div class="pacom-row-sub">地上 ${i?.aboveFloors??0} 层 · 面积 ${i?.areaSqm??"-"} m² · 未结工单 ${v.length} 项</div>
        </div>
        <div class="pacom-list" style="gap:8px; padding:12px;">
          <div class="pacom-control-box">
            <strong style="font-size:13px;">楼宇待办与未结工单（${v.length}）</strong>
            ${v.length?v.map($=>`<div class="pacom-row-sub">• ${y($.title)}（${y($.status)}）</div>`).join(""):'<div class="pacom-row-sub">当前楼宇无未结工单</div>'}
          </div>
          <div style="font-weight:500; font-size:13px; margin-top:4px;">选择楼层进入 2D 平面控制</div>
          ${E.length?E.map($=>{const A=s.scope.allowedFloorIds.includes($.id);return`
                      <div class="pacom-row" data-nav-scope="floor:${y(u.projectId)}:${y(u.buildingId)}:${y($.id)}">
                        <div>
                          <div class="pacom-row-title">${y(i?.name??"")} ${y($.name)}</div>
                          <div class="pacom-row-sub">${$.plan?"已上传 2D 图纸":"暂未上传图纸"}</div>
                        </div>
                        <span class="pacom-badge ${A?"pacom-badge--online":"pacom-badge--warning"}">${A?"进入楼层":"无访问权限"}</span>
                      </div>`}).join(""):'<div class="pacom-row-sub">该楼宇暂未配置试点楼层。</div>'}
        </div>
      `}if(j==="devices"){const i=P(),E=N(),v=Array.from(q);return`
        <div class="pacom-pane-toolbar">
          ${I?`<div class="pacom-info-banner">我的区域视图：仅显示当前账号获授权的 ${I.length} 个功能区及设备。</div>`:""}
          <div class="pacom-search-row">
            <input class="pacom-input" data-role="search" placeholder="搜索设备名 / ID / 区域…" value="${y(S)}" aria-label="搜索楼层设备" />
            <select class="pacom-select" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${m==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${m==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${m==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${m==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${m==="gateway"?"selected":""}>网关</option>
            </select>
          </div>
          ${E.length>0&&!F?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${C==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${E.map($=>`<button type="button" class="pacom-zone-pill ${C===$.id?"is-active":""}" data-filter-zone="${y($.id)}">${y($.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; color:var(--pacom-text-secondary);">
            <span>当前可见 ${i.length} 台设备</span>
            <span>${o?`已勾选 ${v.length} 台`:"只读模式"}</span>
          </div>
        </div>
        <div class="pacom-list">
          ${F?`<div class="pacom-alert-banner">${y(F)}</div>`:i.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">没有匹配的设备</div>':i.map($=>{const A=$.id===x&&c,R=q.has($.id),_=$.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline",H=$.category==="lighting"?`亮度 ${$.telemetry.dimming?.value??"--"}%`:$.category==="hvac"?`设定 ${$.telemetry.setpoint?.value??"--"}°C`:$.category==="sensor"?`${$.telemetry.temp?.value??"--"}°C · CO₂ ${$.telemetry.co2?.value??"--"}`:$.hardwareBinding?.networkAddress??"未绑定";return`
                        <div class="pacom-row ${A?"is-selected":""}" data-select-device="${y($.id)}">
                          <div class="pacom-row-main">
                            ${o?`<input type="checkbox" data-check-device="${y($.id)}" ${R?"checked":""} style="margin-top:3px;" aria-label="勾选 ${y($.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title">${y($.name)}</div>
                              <div class="pacom-row-sub">${y(Y($.logicalZoneId))} · ${y(Ce[$.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${$.connectivity==="online"?"pacom-badge--online":"pacom-badge--neutral"}">
                            <span class="pacom-dot ${_}"></span>${y(H)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${o&&v.length>0?`
            <div class="pacom-batch-bar">
              <span style="font-size:12px;">显式批量目标：<strong>${v.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}return j==="alarms"?`
        <div class="pacom-pane-toolbar"><div style="font-weight:500;">当前楼层告警（${d.length}）</div></div>
        <div class="pacom-list">
          ${d.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">当前楼层无告警记录</div>':d.map(i=>`
                    <div class="pacom-control-box" style="margin-bottom:6px;">
                      <div style="display:flex; justify-content:space-between; align-items:center;">
                        <strong style="font-size:13px;">${y(i.title)}</strong>
                        <span class="pacom-badge ${i.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${i.status==="active"?"待确认":"已确认"}</span>
                      </div>
                      <div style="font-size:12px; color:var(--pacom-text-secondary);">${y(i.message)}</div>
                      ${i.status==="active"?`<div><button type="button" class="pacom-btn" data-ack-alarm="${y(i.id)}" ${f?"":'disabled title="当前角色无告警处理权限"'}>确认告警</button></div>`:""}
                    </div>`).join("")}
        </div>
      `:`
      <div class="pacom-pane-toolbar">
        <div style="font-weight:500;">联调契约监视器（仅演示模式可见）</div>
      </div>
      <div class="pacom-list">
        ${(e instanceof pe?e.traces:[]).slice(0,12).map(i=>`
            <div class="pacom-control-box" style="margin-bottom:6px;">
              <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                <span class="pacom-badge ${i.channel==="WS"?"pacom-badge--accent":"pacom-badge--neutral"}">${i.channel}</span>
                <code style="font-size:11px; flex:1; overflow:hidden; text-overflow:ellipsis;">${y(i.endpoint)}</code>
              </div>
              <pre class="pacom-code">${y(JSON.stringify(i.request?{request:i.request,response:i.response}:i.response,null,2))}</pre>
            </div>`).join("")}
      </div>
    `}function be(){const u=g;if(u.level==="all-projects"||u.level==="project"){const v=u.level==="project"?a.projects.find(A=>A.id===u.projectId):a.projects[0],$=a.buildings.filter(A=>!v||A.projectId===v.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:24px; cursor:default;">
          <div style="position:relative; width:min(760px, 94%); border-radius:16px; overflow:hidden; box-shadow:0 12px 32px rgba(15,23,42,0.14); background:#fff;">
            <img src="${y(v?.imageUrl??"./media/gzlab.jpg")}" alt="园区俯瞰" style="width:100%; height:440px; object-fit:cover; display:block;" />
            ${u.level==="all-projects"?a.projects.map((A,R)=>`
                      <button type="button" class="pacom-pin is-selected" style="left:${R===0?48:26}%; top:${R===0?52:34}%;" data-nav-scope="project:${y(A.id)}">
                        <span>${y(A.name)}</span>
                      </button>`).join(""):$.map((A,R)=>`
                      <button type="button" class="pacom-pin is-selected" style="left:${R===0?56:38}%; top:${R===0?44:62}%;" data-nav-scope="building:${y(A.projectId)}:${y(A.id)}">
                        <span>${y(A.name)}（点击查看整栋）</span>
                      </button>`).join("")}
          </div>
        </div>
      `}if(u.level==="building"){const v=a.buildings.find(A=>A.id===u.buildingId),$=a.floors.filter(A=>A.buildingId===u.buildingId);return`
        ${$.length?`
            <nav class="pacom-floor-rail" aria-label="整栋楼层选择轨道">
              <button type="button" class="pacom-floor-btn is-active" title="整栋视图">栋</button>
              ${$.map(A=>`<button type="button" class="pacom-floor-btn ${s.scope.allowedFloorIds.includes(A.id)?"":"is-locked"}" data-nav-scope="floor:${y(u.projectId)}:${y(u.buildingId)}:${y(A.id)}" title="${y(A.name)}">${y(A.name.replace("F",""))}</button>`).join("")}
            </nav>`:""}
        <div class="pacom-canvas-tools" aria-label="画布工具">
          <button type="button" class="pacom-tool-btn" data-zoom="reset" title="复位视图" aria-label="复位视图">⟲</button>
          <div class="pacom-tool-divider" aria-hidden="true"></div>
          <button type="button" class="pacom-tool-btn" data-zoom="in" title="放大" aria-label="放大">＋</button>
          <button type="button" class="pacom-tool-btn" data-zoom="out" title="缩小" aria-label="缩小">－</button>
        </div>
        <div class="pacom-canvas-stage" data-role="canvas-stage">
          <div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${O}px, ${h}px) scale(${k});">
            <img class="pacom-plan-img" src="${y(v?.imageUrl??"./media/building-e.png")}" alt="${y(v?.name??"楼宇")} 整栋实景图" />
          </div>
        </div>
        <div class="pacom-canvas-hint" data-role="canvas-hint">缩放 ${Math.round(k*100)}% · 滚轮缩放 · 拖动平移 · 双击复位</div>
      `}const L=a.floors.find(v=>v.id===u.floorId),i=a.floors.filter(v=>v.buildingId===u.buildingId),E=N();return`
      <nav class="pacom-floor-rail" aria-label="楼层选择轨道">
        <button type="button" class="pacom-floor-btn" data-nav-scope="building:${y(u.projectId)}:${y(u.buildingId)}" title="返回整栋楼宇">栋</button>
        ${i.map(v=>{const $=s.scope.allowedFloorIds.includes(v.id);return`<button type="button" class="pacom-floor-btn ${v.id===u.floorId?"is-active":""} ${$?"":"is-locked"}"
              data-nav-scope="floor:${y(u.projectId)}:${y(u.buildingId)}:${y(v.id)}" title="${y(v.name)}${$?"":"（无权限）"}">
              ${y(v.name.replace("F",""))}
            </button>`}).join("")}
      </nav>

      <div class="pacom-canvas-tools" aria-label="画布工具">
        <button type="button" class="pacom-tool-btn" data-zoom="reset" title="复位视图" aria-label="复位视图">⟲</button>
        <div class="pacom-tool-divider" aria-hidden="true"></div>
        <button type="button" class="pacom-tool-btn" data-zoom="in" title="放大" aria-label="放大">＋</button>
        <button type="button" class="pacom-tool-btn" data-zoom="out" title="缩小" aria-label="缩小">－</button>
      </div>

      ${F?"":`
        <div class="lov-layer-bar" role="group" aria-label="平面图图层切换">
          <button type="button" class="lov-layer-btn" aria-pressed="${r==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${r==="temp"}" data-canvas-layer="temp">温度热区</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${r==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${r==="alarms"}" data-canvas-layer="alarms">告警叠加${d.filter(v=>v.status==="active").length>0?` (${d.filter(v=>v.status==="active").length})`:""}</button>
        </div>`}

      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${F?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${y(F)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${O}px, ${h}px) scale(${k});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${y(L?.plan?.imageUrl??"./media/7F.webp")}" alt="E栋 ${y(L?.name??"7F")} 平面图" />
                  ${E.map((v,$)=>{const A=De[v.id];if(!A)return"";const R=C===v.id,_=["23.2°C","24.6°C","22.8°C","23.9°C"],H=["有人 74%","会议中","有人 52%","空闲"],ye=r==="temp"?` · ${_[$%_.length]}`:r==="occupancy"?` · ${H[$%H.length]}`:"",$e=r==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":r==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${R?"is-active":""}"
                          style="left:${A.left}%; top:${A.top}%; width:${A.width}%; height:${A.height}%; ${R?"":$e}"
                          data-filter-zone="${y(R?"all":v.id)}"
                          title="${y(v.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${y(v.name.replace(/^7F\s*/,""))}${ye}</span>
                        </button>`}).join("")}
                  ${D.filter(v=>v.planPoint).map(v=>{const $=d.some(_=>_.deviceId===v.id&&_.status==="active"),A=C!=="all"&&v.logicalZoneId!==C||r==="alarms"&&!$,R=r==="alarms"&&$?"background:var(--pacom-status-critical);":"";return`
                        <button type="button" class="pacom-pin ${v.id===x&&c?"is-selected":""} ${v.connectivity==="offline"?"pacom-pin--offline":""} ${A?"pacom-pin--dimmed":""}"
                          style="left:${(v.planPoint.x*100).toFixed(2)}%; top:${(v.planPoint.y*100).toFixed(2)}%; ${R}"
                          data-pin-device="${y(v.id)}" title="${y(v.name)}">
                          <span class="pacom-dot ${$?"pacom-dot--critical":v.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${y(v.name.slice(0,8))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>

      ${F?"":`<div class="pacom-canvas-hint" data-role="canvas-hint">缩放 ${Math.round(k*100)}% · 滚轮缩放 · 拖动平移 · 双击复位</div>`}
      ${he()}
    `}function he(){if(g.level!=="floor"||!c)return"";const u=D.find(A=>A.id===x);if(!u)return"";const L=u.category==="lighting",i=u.category==="hvac",E=Number(u.telemetry.dimming?.value??50),v=Number(u.telemetry.setpoint?.value??24),$=M.has(u.id);return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${y(u.name)}</h2>
            <div class="pacom-row-sub">${y(Y(u.logicalZoneId))}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${$?"pacom-badge--warning":"pacom-badge--neutral"}">
              ${$?"人工覆盖":"自动策略"}
            </span>
            <span class="pacom-badge ${u.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${u.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>
            </button>
          </div>
        </div>

        <details class="lov-tech-details">
          <summary><span>技术标识与硬件绑定</span><span>▾</span></summary>
          <div class="pacom-kv-grid">
            <span class="pacom-kv-label">设备编号</span><span><code>${y(u.id)}</code> · v${u.version}</span>
            <span class="pacom-kv-label">图上点位</span><span>${u.planPoint?`x=${u.planPoint.x.toFixed(2)}, y=${u.planPoint.y.toFixed(2)} (图 v${u.planPoint.planVersion})`:"未标点"}</span>
            <span class="pacom-kv-label">物理安装</span><span>${u.physicalInstalled?"现场已确认":"待现场复核"}</span>
            <span class="pacom-kv-label">硬件绑定</span><span>${u.hardwareBinding?`${u.hardwareBinding.protocol.toUpperCase()} · ${u.hardwareBinding.networkAddress}`:"未绑定"}</span>
          </div>
        </details>

        ${L||i?`
            <div class="pacom-control-box">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                ${o?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
              </div>
              ${u.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
              ${L?`
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${o?"":"disabled"}>开灯</button>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${o?"":"disabled"}>关灯</button>
                  </div>
                  <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                    亮度目标：<strong>${E}%</strong>
                    <input type="range" min="0" max="100" step="10" value="${E}" data-ctrl-slider="lighting.dimming" ${o?"":"disabled"} />
                  </label>`:`
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${o?"":"disabled"}>开机</button>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${o?"":"disabled"}>关机</button>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span style="font-size:12px;">设定温度：</span>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${v-.5}" ${o?"":"disabled"}>-0.5°C</button>
                    <strong>${v.toFixed(1)}°C</strong>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${v+.5}" ${o?"":"disabled"}>+0.5°C</button>
                  </div>`}
            </div>`:""}

        ${b?`
            <div class="pacom-control-box">
              <div style="font-size:12px; font-weight:500;">最近批次：<code>${y(b.batchId)}</code></div>
              <div class="pacom-receipt-list">
                ${b.receipts.map(A=>{const R=Oe[A.status]??{text:A.status,badge:"pacom-badge--neutral"};return`
                      <div class="pacom-receipt-item">
                        <div>
                          <div><strong>${y(A.deviceId)}</strong> · ${y(A.command)} → ${y(A.targetValue)}</div>
                          ${A.errorMessage?`<div style="color:var(--pacom-status-critical);">${y(A.errorMessage)}</div>`:""}
                        </div>
                        <span class="pacom-badge ${R.badge}">${R.text}</span>
                      </div>`}).join("")}
              </div>
            </div>`:""}
      </aside>
    `}function se(u){if(u==="all")return{level:"all-projects"};const L=u.split(":");return L[0]==="project"&&L[1]?{level:"project",projectId:L[1]}:L[0]==="building"&&L[1]&&L[2]?{level:"building",projectId:L[1],buildingId:L[2]}:L[0]==="floor"&&L[1]&&L[2]&&L[3]?{level:"floor",projectId:L[1],buildingId:L[2],floorId:L[3]}:{level:"all-projects"}}function U(){const u=d.filter(L=>L.status==="active").length;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
              <h1 class="pacom-title">首页</h1>
              ${ve()}
            </div>
            <div class="pacom-header-meta">
              ${l?'<span class="pacom-badge pacom-badge--neutral"><span class="pacom-dot pacom-dot--offline"></span>演示数据</span>':'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>'}
              <span class="pacom-badge pacom-badge--neutral">${y(s.roleLabel)}</span>
            </div>
          </div>

          <div class="pacom-header-toolbar">
            <div class="pacom-toolbar-left">
              <div class="pacom-scope-pill" title="项目 / 楼宇 / 楼层三级范围选择器">
                <select data-role="scope-select" aria-label="选择查看范围">
                  ${me()}
                </select>
                <span class="pacom-scope-chevron">▾</span>
              </div>

              ${g.level==="floor"?`
                  <div class="pacom-tabs" role="tablist">
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${j==="devices"}" data-tab="devices">设备与控制</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${j==="alarms"}" data-tab="alarms">
                      告警 ${u>0?`<span class="pacom-badge pacom-badge--warning">${u}</span>`:""}
                    </button>
                    ${l?`<button type="button" class="pacom-tab" role="tab" aria-selected="${j==="handoff"}" data-tab="handoff">联调契约</button>`:""}
                  </div>`:""}
            </div>

            <div class="pacom-tabs pacom-mobile-view-switch" role="group" aria-label="窄屏视图切换">
              <button type="button" class="pacom-tab" aria-selected="${w==="list"}" data-mobile-pane-btn="list">列表</button>
              <button type="button" class="pacom-tab" aria-selected="${w==="canvas"}" data-mobile-pane-btn="canvas">平面图</button>
            </div>
          </div>
        </header>

        <section class="pacom-split" data-mobile-pane="${w}">
          <aside class="pacom-left-pane" style="--pacom-sidebar-width:${p}px;">
            ${ge()}
          </aside>
          <div class="pacom-splitter" role="separator" tabindex="0" aria-orientation="vertical" aria-label="调整左右栏宽度" data-role="splitter"></div>
          <main class="pacom-right-pane">
            ${be()}
          </main>
        </section>
      </div>
    `,fe()}function fe(){t.querySelector('[data-role="scope-select"]')?.addEventListener("change",i=>{Z(se(i.currentTarget.value))}),t.querySelectorAll("[data-nav-scope]").forEach(i=>{i.addEventListener("click",()=>{i.dataset.navScope&&Z(se(i.dataset.navScope))})}),t.querySelectorAll("[data-tab]").forEach(i=>{i.addEventListener("click",()=>{j=i.dataset.tab,U()})}),t.querySelectorAll("[data-mobile-pane-btn]").forEach(i=>{i.addEventListener("click",()=>{w=i.dataset.mobilePaneBtn,U()})}),t.querySelector('[data-role="search"]')?.addEventListener("input",i=>{S=i.currentTarget.value,K()}),t.querySelector('[data-role="category"]')?.addEventListener("change",i=>{m=i.currentTarget.value,U()}),t.querySelectorAll("[data-filter-zone]").forEach(i=>{i.addEventListener("click",E=>{E.stopPropagation(),C=i.dataset.filterZone??"all",U()})}),t.querySelectorAll("[data-select-device]").forEach(i=>{i.addEventListener("click",E=>{E.target.tagName!=="INPUT"&&(x=i.dataset.selectDevice??null,c=!0,w="canvas",U())})}),t.querySelectorAll("[data-check-device]").forEach(i=>{i.addEventListener("change",()=>{const E=i.dataset.checkDevice;E&&(i.checked?q.add(E):q.delete(E),U())})}),t.querySelectorAll("[data-pin-device]").forEach(i=>{i.addEventListener("click",E=>{E.stopPropagation(),x=i.dataset.pinDevice??null,c=!0,U()})}),t.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{c=!1,U()}),t.querySelectorAll("[data-ctrl-cmd]").forEach(i=>{i.addEventListener("click",()=>{if(!x||!i.dataset.ctrlCmd)return;const E=i.dataset.ctrlVal??"",v=E==="true"?!0:E==="false"?!1:Number(E);z([x],i.dataset.ctrlCmd,v)})}),t.querySelector("[data-ctrl-slider]")?.addEventListener("change",i=>{const E=i.currentTarget;!x||!E.dataset.ctrlSlider||z([x],E.dataset.ctrlSlider,Number(E.value))}),t.querySelectorAll("[data-batch-cmd]").forEach(i=>{i.addEventListener("click",()=>{const E=Array.from(q),v=i.dataset.batchVal??"",$=v==="true"?!0:v==="false"?!1:v;z(E,i.dataset.batchCmd,$)})}),t.querySelectorAll("[data-ack-alarm]").forEach(i=>{i.addEventListener("click",async()=>{!i.dataset.ackAlarm||g.level!=="floor"||!f||(await e.acknowledgeAlarm(i.dataset.ackAlarm,"首页快速确认"),d=await e.listAlarms(g.floorId),U())})}),t.querySelectorAll("[data-canvas-layer]").forEach(i=>{i.addEventListener("click",()=>{const E=i.dataset.canvasLayer;E&&(r=E,U())})}),t.querySelectorAll("[data-zoom]").forEach(i=>{i.addEventListener("click",()=>{const E=i.dataset.zoom;E==="in"?k=Math.min(2.6,Number((k+.2).toFixed(2))):E==="out"?k=Math.max(.6,Number((k-.2).toFixed(2))):(k=1,O=0,h=0),Q()})});const u=t.querySelector('[data-role="canvas-stage"]');if(u&&!F){let i=!1,E=0,v=0,$=0,A=0;u.addEventListener("pointerdown",_=>{_.target?.closest("button, input, select, .pacom-drawer")||(i=!0,E=_.clientX,v=_.clientY,$=O,A=h,u.classList.add("is-panning"),u.setPointerCapture?.(_.pointerId))}),u.addEventListener("pointermove",_=>{i&&(O=$+(_.clientX-E),h=A+(_.clientY-v),Q())});const R=()=>{i&&(i=!1,u.classList.remove("is-panning"))};u.addEventListener("pointerup",R),u.addEventListener("pointercancel",R),u.addEventListener("wheel",_=>{_.preventDefault();const H=_.deltaY<0?.12:-.12;k=Math.max(.6,Math.min(2.6,Number((k+H).toFixed(2)))),Q()},{passive:!1}),u.addEventListener("dblclick",_=>{_.target?.closest("button")||(k=1,O=0,h=0,Q())})}const L=t.querySelector('[data-role="splitter"]');L?.addEventListener("pointerdown",i=>{const E=i.clientX,v=p;L.classList.add("is-dragging");const $=R=>{p=Math.max(320,Math.min(640,v+(R.clientX-E)));const _=t.querySelector(".pacom-left-pane");_&&_.style.setProperty("--pacom-sidebar-width",`${p}px`)},A=()=>{L.classList.remove("is-dragging"),localStorage.setItem(te,String(Math.round(p))),window.removeEventListener("pointermove",$),window.removeEventListener("pointerup",A)};window.addEventListener("pointermove",$),window.addEventListener("pointerup",A)}),L?.addEventListener("keydown",i=>{if(i.key==="ArrowLeft")i.preventDefault(),p=Math.max(320,p-16);else if(i.key==="ArrowRight")i.preventDefault(),p=Math.min(640,p+16);else if(i.key==="Home")i.preventDefault(),p=320;else if(i.key==="End")i.preventDefault(),p=640;else return;localStorage.setItem(te,String(Math.round(p)));const E=t.querySelector(".pacom-left-pane");E&&E.style.setProperty("--pacom-sidebar-width",`${p}px`)})}await Z(g)}const oe=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%"}];async function Te(t,e,s){let a=await e.listScenes(n.floorId),l="manual",o="balanced",f=null,I="",g=!1,j="",w="";const S=e.subscribeFloorEvents(n.floorId,async C=>{C.type==="control.receipt.updated"&&f?.batchId===C.batchId&&(f=await e.getControlBatch(C.batchId),m())});function m(){const C=I.trim().toLowerCase(),x=C?a.filter(r=>`${r.name} ${r.description}`.toLowerCase().includes(C)):a;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">场景</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge ${s.scope.canControlDevices?"pacom-badge--online":"pacom-badge--warning"}">
                ${s.scope.canControlDevices?"可触发并核验逐设备回执":"只读权限"}
              </span>
              ${l==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${g?"收起新建表单":"+ 新建场景"}</button>`:""}
            </div>
          </div>
          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist">
              <button class="pacom-tab" role="tab" aria-selected="${l==="manual"}" data-scene-tab="manual">一键场景（${a.length}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${l==="schedules"}" data-scene-tab="schedules">定时排程</button>
              <button class="pacom-tab" role="tab" aria-selected="${l==="oss"}" data-scene-tab="oss">节能策略模式</button>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:4px 0 24px;">
          ${j?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${j}</span></div>`:""}
          ${w?`<div class="pacom-alert-banner">${w}</div>`:""}

          ${l==="manual"?`
              ${g?`
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
                <input class="pacom-input" style="max-width:300px;" data-scene-search placeholder="搜索场景名称或说明…" value="${I}" />
                <span class="pacom-row-sub">共 ${x.length} 个场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(310px,1fr)); gap:14px;">
                ${x.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="lov-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建自定义场景。</span></div></div>':x.map(r=>`
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
                              <button class="pacom-btn pacom-btn--primary" data-exec-scene="${r.id}" ${s.scope.canControlDevices?"":"disabled"}>执行</button>
                            </div>
                          </section>`).join("")}
              </div>

              ${f?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">逐设备执行回执</h2>
                      <span class="pacom-row-sub">批次 <code>${f.batchId}</code></span>
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
                            ${f.receipts.map(r=>`
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
                  </section>`:""}`:l==="schedules"?`
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
                            <td>周一至周五 · 08:00（跟随工作日历）</td>
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
                            <td>每日 · 22:00 – 次日 06:30</td>
                            <td>E7F 非实验室区域</td>
                            <td><span class="pacom-badge pacom-badge--online">生效中</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>`:`
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">E7F 优化启停与主动节能模式（OSS）</h2>
                    <span class="pacom-badge pacom-badge--accent">人工覆盖始终优先 · 异常自动回退</span>
                  </div>
                  <div class="lov-mode-grid">
                    ${oe.map(r=>`
                      <button type="button" class="lov-mode-card" aria-pressed="${o===r.id}" data-oss-mode="${r.id}" ${s.scope.canControlDevices?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${r.title}</strong>
                          <span class="pacom-badge ${o===r.id?"pacom-badge--online":"pacom-badge--neutral"}">${o===r.id?"当前模式":r.badge}</span>
                        </div>
                        <span class="lov-setting-desc">${r.desc}</span>
                        <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${r.estSaving}</span>
                      </button>`).join("")}
                  </div>
                  <div class="lov-banner">
                    <div class="lov-banner-text">
                      <span class="lov-banner-title">安全底线保障（Active Control）</span>
                      <span class="lov-banner-sub">在首页或现场面板手工调节设备后，系统将自动进入「人工覆盖」状态，策略不会强行回写；若网关通信异常则自动回退至本地默认工况。</span>
                    </div>
                  </div>
                </section>`}
        </div>
      </div>
    `,t.querySelectorAll("[data-scene-tab]").forEach(r=>{r.addEventListener("click",()=>{l=r.dataset.sceneTab??"manual",j="",m()})}),t.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),t.querySelectorAll("[data-oss-mode]").forEach(r=>{r.addEventListener("click",()=>{const M=r.dataset.ossMode;if(!M)return;o=M;const q=oe.find(D=>D.id===M);j=`已切换至「${q?.title??M}」运行策略（${q?.estSaving??""}）。`,m()})}),t.querySelectorAll("[data-toggle-create]").forEach(r=>{r.addEventListener("click",()=>{g=!g,m()})}),t.querySelector("[data-scene-search]")?.addEventListener("input",r=>{const M=r.currentTarget,q=M.selectionStart??M.value.length;I=M.value,m();const D=t.querySelector("[data-scene-search]");D&&(D.focus(),D.setSelectionRange(q,q))}),t.querySelectorAll("[data-exec-scene]").forEach(r=>{r.addEventListener("click",async()=>{w="";try{f=await e.executeScene(r.dataset.execScene),a=await e.listScenes(n.floorId),m()}catch(M){w=M instanceof Error?M.message:String(M),m()}})}),t.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async r=>{r.preventDefault();const M=new FormData(r.currentTarget);try{await e.createScene({projectId:n.projectId,floorId:n.floorId,name:String(M.get("name")??""),description:String(M.get("description")??""),actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:50}]}),a=await e.listScenes(n.floorId),g=!1,j="自定义场景已保存。",m()}catch(q){w=q instanceof Error?q.message:String(q),m()}})}m(),window.addEventListener("hashchange",()=>S(),{once:!0})}const ue=[{group:"基础基准",items:[{id:"calendar",label:"运行日历"},{id:"weather_area",label:"气象与面积"}]},{group:"系统策略",items:[{id:"lighting",label:"照明策略"},{id:"hvac",label:"暖通策略"},{id:"metering_carbon",label:"计量与碳排"}]},{group:"治理与通知",items:[{id:"alarm_rules",label:"告警规则"},{id:"notifications",label:"告警通知订阅"},{id:"templates",label:"参数模板"}]}],Me=ue.flatMap(t=>t.items);async function qe(t,e,s){let a="calendar",l=await e.getRuntimeSettings(n.projectId),o=l.calendar.workdayStart,f=l.calendar.workdayEnd,I=[];const g={criticalSms:!0,inAppBanner:!0,dailyDigest:!1};let j="",w="";function S(){const m=l.rules.filter(c=>c.category===a),C=Me.find(c=>c.id===a)?.label??"运行设置",x=s.scope.canEditDeployment;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">运行设置</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">项目范围：广实2号园</span>
              <span class="pacom-badge ${x?"pacom-badge--online":"pacom-badge--warning"}">
                ${x?"可修改并下发配置":"当前角色只读"}
              </span>
            </div>
          </div>
        </header>

        ${j?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${j}</span></div>`:""}
        ${w?`<div class="pacom-alert-banner">${w}</div>`:""}

        <div class="lov-subnav-layout">
          <nav class="lov-subnav-rail" aria-label="运行设置分组">
            ${ue.map(c=>`
              <div class="lov-subnav-group">
                <div class="lov-subnav-group-title">${c.group}</div>
                ${c.items.map(r=>{const M=r.id==="calendar"?"":String(l.rules.filter(q=>q.category===r.id).length);return`
                      <button class="lov-subnav-item" aria-current="${a===r.id?"true":"false"}" data-scat="${r.id}">
                        <span>${r.label}</span>
                        ${M?`<span class="pacom-badge pacom-badge--neutral">${M}</span>`:""}
                      </button>`}).join("")}
              </div>`).join("")}
          </nav>

          <div class="lov-subnav-main">
            ${a==="calendar"?`
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
                        <input class="pacom-input" style="width:140px;" type="time" data-cal-start value="${o}" ${x?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">工作日下班时间</span>
                        <span class="lov-setting-desc">夜间巡检窗口为 ${l.calendar.nightGuardStart} – ${l.calendar.nightGuardEnd}；若晚于 21:30 将自动提示交叠冲突</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:140px;" type="time" data-cal-end value="${f}" ${x?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row" style="justify-content:flex-end;">
                      <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                      <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${x?"":"disabled"}>保存并校验版本</button>
                    </div>
                  </div>
                </section>

                ${I.length>0?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">受影响的定时与夜间规则预览</h2>
                        <span class="pacom-row-sub">共 ${I.length} 条</span>
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
                              ${I.map(c=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${c.ruleName}</div>
                                      ${c.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${c.conflictWarning}</div>`:""}
                                    </td>
                                    <td>${c.beforeWindow}</td>
                                    <td><strong>${c.afterWindow}</strong></td>
                                    <td>
                                      <span class="pacom-badge ${c.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                        ${c.conflictWarning?"交叠警告":"自动跟随"}
                                      </span>
                                    </td>
                                  </tr>`).join("")}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>`:""}`:a==="notifications"?`
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
                          <button type="button" class="lov-switch" role="switch" aria-checked="${g.criticalSms}" data-notify-key="criticalSms" aria-label="严重告警短信推送">
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
                          <button type="button" class="lov-switch" role="switch" aria-checked="${g.inAppBanner}" data-notify-key="inAppBanner" aria-label="站内实时横幅提醒">
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
                          <button type="button" class="lov-switch" role="switch" aria-checked="${g.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报">
                            <span class="lov-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>`:`
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">${C}</h2>
                    <span class="pacom-row-sub">共 ${m.length} 条策略</span>
                  </div>
                  <div class="lov-settings-card">
                    ${m.length===0?'<div class="lov-empty-state"><strong>暂无配置项</strong><span>该分类下尚未定义运行策略规则。</span></div>':m.map(c=>`
                              <div class="lov-setting-row">
                                <div class="lov-setting-meta">
                                  <span class="lov-setting-title">
                                    <span>${c.name}</span>
                                    <span class="pacom-badge pacom-badge--neutral">v${c.version}</span>
                                    <span class="pacom-badge pacom-badge--accent">${c.scopeLabel}</span>
                                  </span>
                                  <span class="lov-setting-desc">${c.summary} · 回执：${c.receiptSummary??"已同步"}</span>
                                </div>
                                <div class="lov-setting-control">
                                  <span class="pacom-row-sub">${c.enabled?"已启用":"已停用"}</span>
                                  <button
                                    type="button"
                                    class="lov-switch"
                                    role="switch"
                                    aria-checked="${c.enabled?"true":"false"}"
                                    aria-label="切换 ${c.name}"
                                    data-toggle-rule="${c.id}"
                                    data-rule-ver="${c.version}"
                                    data-rule-next="${!c.enabled}"
                                    ${x?"":"disabled"}
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
    `,t.querySelectorAll("[data-scat]").forEach(c=>{c.addEventListener("click",()=>{a=c.dataset.scat,j="",w="",S()})}),t.querySelectorAll("[data-notify-key]").forEach(c=>{c.addEventListener("click",()=>{const r=c.dataset.notifyKey;r&&(g[r]=!g[r],j="通知订阅偏好已更新。",S())})}),t.querySelector("[data-cal-start]")?.addEventListener("change",c=>{o=c.currentTarget.value}),t.querySelector("[data-cal-end]")?.addEventListener("change",c=>{f=c.currentTarget.value}),t.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{w="",I=await e.previewCalendarImpact(n.projectId,o,f),S()}),t.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{w="";try{const c=await e.saveWorkCalendar(n.projectId,o,f,l.calendar.version);l={...l,calendar:c},j=`运行日历已保存至 v${c.version}（${c.workdayStart} - ${c.workdayEnd}）`,I=[],S()}catch(c){w=c instanceof Error?c.message:String(c),S()}}),t.querySelectorAll("[data-toggle-rule]").forEach(c=>{c.addEventListener("click",async()=>{w="";try{await e.toggleRuntimeRule(c.dataset.toggleRule,c.dataset.ruleNext==="true",Number(c.dataset.ruleVer)),l=await e.getRuntimeSettings(n.projectId),j="策略状态与版本回执已更新",S()}catch(r){w=r instanceof Error?r.message:String(r),S()}})})}S()}const ne="pacom.web.sidebar.collapsed",Be=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,ie=[{id:"home",label:"首页",iconSvg:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/>'},{id:"analysis",label:"数据分析",iconSvg:'<path d="M4 19h16"/><path d="M7 16v-5"/><path d="M12 16V7"/><path d="M17 16v-8"/>'},{id:"alarms",label:"告警工单",iconSvg:'<path d="M12 4 3 19h18L12 4Z"/><path d="M12 10v4"/><path d="M12 17h.01"/>'},{id:"scenes",label:"场景",iconSvg:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3"/>'},{id:"settings",label:"运行设置",iconSvg:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2.5"/><circle cx="15" cy="17" r="2.5"/>'},{id:"deployment",label:"系统部署",iconSvg:'<rect x="3" y="4" width="7" height="6" rx="1.5"/><rect x="14" y="4" width="7" height="6" rx="1.5"/><rect x="8.5" y="14" width="7" height="6" rx="1.5"/><path d="M6.5 10v2h11v-2M12 12v2"/>'}],ae={home:"首页",analysis:"数据分析",alarms:"告警工单",scenes:"场景",settings:"运行设置",deployment:"系统部署",account:"机构与账户"};function ce(){const t=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return t in ae?t:"home"}function G(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function Pe(t,e,s,a){t.classList.remove("bare-login");let l=s,o=ce(),f=localStorage.getItem(ne)==="1",I=!1,g=!1,j="";const w=e.mode==="demo"&&typeof e.switchDemoRole=="function";function S(){const k=j.trim(),O=k?ie.filter(h=>h.label.includes(k)):ie;return O.length?O.map(h=>`
        <button type="button" class="pacom-nav-item" data-route="${h.id}" aria-current="${o===h.id?"page":"false"}" title="${h.label}">
          <svg class="pacom-nav-icon" viewBox="0 0 24 24" aria-hidden="true">${h.iconSvg}</svg>
          <span class="pacom-nav-label">${h.label}</span>
        </button>`).join(""):'<div class="pacom-nav-empty">没有匹配的工作区</div>'}function m(){if(!g)return"";const k=l.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${f?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab.jpg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${G(l.roleLabel)}${w?" · 演示":""}</small>
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
          <span class="pacom-pop-avatar" aria-hidden="true">${G(k)}</span>
          <span class="pacom-pop-text">
            <b>${G(l.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${w?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">演示角色切换（RBAC 权限预览）</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(W).map(O=>{const h=W[O],p=O===l.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${p}" data-pop-role="${O}">
                      <span class="pacom-pop-text">
                        <b>${G(h.roleLabel)}</b>
                        <small>${G(h.displayName)}</small>
                      </span>
                      ${p?'<svg class="pacom-pop-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>':""}
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
    `}async function C(k){switch(document.title=`${ae[o]} · PACOM Station`,o){case"home":await Fe(k,e,l);return;case"analysis":await Le(k,e);return;case"alarms":await Ee(k,e,l);return;case"scenes":await Te(k,e,l);return;case"settings":await qe(k,e,l);return;case"deployment":await je(k,e,l);return;case"account":await Ie(k,e,l,O=>{l=O,D(!0)},x);return}}async function x(){g=!1,I=!1,F();try{await e.logout()}finally{window.location.hash="#login",a()}}function c(){const k=t.querySelector('[data-role="nav-list"]');k&&(k.innerHTML=S(),M())}function r(){t.querySelector('[data-role="org-popover"]')?.remove();const k=t.querySelector('[data-role="org-menu-btn"]');if(k&&k.setAttribute("aria-expanded",String(g)),!g)return;const O=document.createElement("div");O.innerHTML=m().trim();const h=O.firstElementChild;h&&(t.appendChild(h),q())}function M(){t.querySelectorAll("[data-route]").forEach(k=>{k.addEventListener("click",()=>{const O=k.dataset.route;O===o&&!I||(o=O,I=!1,g=!1,window.location.hash=`#${o}`,D(!0))})})}function q(){t.querySelectorAll('[data-pop-act="go-account"]').forEach(k=>{k.addEventListener("click",()=>{g=!1,I=!1,o="account",window.location.hash="#account",D(!0)})}),t.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{x()}),t.querySelectorAll("[data-pop-role]").forEach(k=>{k.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const O=k.dataset.popRole;g=!1,I=!1,l=await e.switchDemoRole(O),await D(!0)})})}async function D(k){const O=t.querySelector('[data-role="main-stage"]');if(!k&&O){const p=t.querySelector(".pacom-nav-rail");p&&(p.classList.toggle("is-collapsed",f),p.classList.toggle("is-mobile-open",I));const T=t.querySelector('[data-role="mobile-scrim"]');T&&T.classList.toggle("is-open",I),r();return}t.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
          <h1 class="pacom-mobile-title">${ae[o]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${G(l.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${I?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${f?"is-collapsed":""} ${I?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${Be}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${f?"展开侧栏":"收起侧栏"}" aria-label="${f?"展开侧栏":"收起侧栏"}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                ${f?'<path d="m9 6 6 6-6 6"/>':'<path d="m15 6-6 6 6 6"/>'}
              </svg>
            </button>
          </div>

          <div class="pacom-nav-search-wrap">
            <svg class="pacom-nav-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>
            </svg>
            <input class="pacom-nav-search" data-role="nav-search" type="search" placeholder="搜索工作区…" value="${G(j)}" aria-label="搜索工作区" />
          </div>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${S()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${o==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${g}" title="广州国家实验室 · ${G(l.displayName)}">
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
    `,t.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{f=!f,g=!1,localStorage.setItem(ne,f?"1":"0");const p=t.querySelector(".pacom-nav-rail"),T=t.querySelector('[data-role="toggle-sidebar"]');p&&p.classList.toggle("is-collapsed",f),T&&(T.title=f?"展开侧栏":"收起侧栏",T.setAttribute("aria-label",T.title),T.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${f?'<path d="m9 6 6 6-6 6"/>':'<path d="m15 6-6 6 6 6"/>'}</svg>`),r()}),t.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{I=!I,D(!1)}),t.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{I=!1,g=!1,D(!1)}),t.querySelector('[data-role="nav-search"]')?.addEventListener("input",p=>{j=p.currentTarget.value,c()}),t.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",p=>{p.stopPropagation(),g=!g,r()}),M(),r();const h=t.querySelector('[data-role="main-stage"]');h&&await C(h)}const d=k=>{if(!g)return;const O=k.target;O?.closest('[data-role="org-popover"]')||O?.closest('[data-role="org-menu-btn"]')||(g=!1,r())},B=k=>{k.key==="Escape"&&(g?(g=!1,r()):I&&(I=!1,D(!1)))},b=()=>{const k=ce();k!==o&&(o=k,g=!1,I=!1,D(!0))};function F(){document.removeEventListener("click",d),document.removeEventListener("keydown",B),window.removeEventListener("hashchange",b)}document.addEventListener("click",d),document.addEventListener("keydown",B),window.addEventListener("hashchange",b),await D(!0)}const ze=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,_e='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',Re='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',X='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>',re={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},Ne={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function Ve(t){const e=t.replace(/\D/g,"");return e.length===11?`${e.slice(0,3)} •••• ${e.slice(7)}`:t}function V(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function de(t,e,s){t.classList.add("bare-login"),document.title="登录 · PACOM Station";let a=!1,l=!1,o="",f="",I="",g="",j=!1,w={},S="",m=!1,C="",x=0,c=null,r=null,M="privacy",q="",D="",d="";const B=e.mode==="demo"&&typeof e.switchDemoRole=="function";function b(){c!==null&&(window.clearInterval(c),c=null),t.classList.remove("bare-login")}function F(){x=60,c!==null&&window.clearInterval(c),c=window.setInterval(()=>{x-=1,x<=0&&(x=0,c!==null&&(window.clearInterval(c),c=null));const p=t.querySelector('[data-act="send-sms"]');p&&(p.disabled=x>0,p.textContent=x>0?`${x} 秒后重发`:C?"重新获取":"获取验证码")},1e3)}function k(){if(!r)return"";if(r==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${X}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${V(D)}" />
                  </div>
                </div>
                ${d?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${V(d)}</p>`:""}
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary">发送验证码</button>
            </div>
          </section>
        </div>
      `;if(r==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${X}</button>
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
      `;if(r==="legal"){const p=re[M],T=["privacy","terms","service"].map(N=>`<button type="button" role="tab" aria-selected="${M===N}" class="au-legal-tab ${M===N?"is-active":""}" data-act="switch-legal" data-tab="${N}">${re[N].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${X}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${T}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${p.items.map(N=>`<li>${V(N)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return r==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${X}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${q||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:r==="demoRoles"&&B?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择演示角色</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${X}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(W).map(p=>{const T=W[p];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${p}">
                        <div>
                          <b>${V(T.roleLabel)} · ${V(T.displayName)}</b>
                          <small>${V(Ne[p])}</small>
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
      `:""}function O(){const p=a?`
        <div class="au-field ${w.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${V(I)}" aria-invalid="${w.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${x>0?"disabled":""}>
              ${x>0?`${x} 秒后重发`:C?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${V(w.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${C?`验证码已发送至 ${V(Ve(C))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${w.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${V(o)}" aria-invalid="${w.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${V(w.id??"")}</p>
        </div>
      `,T=a?`
        <div class="au-field ${w.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${V(g)}" aria-invalid="${w.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${V(w.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${w.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${l?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${V(f)}" aria-invalid="${w.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${l?"隐藏密码":"显示密码"}">
              ${l?Re:_e}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${V(w.pwd??"")}</p>
        </div>
      `;t.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${ze}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${m?"disabled":""}>
                  ${p}
                  ${T}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${S?"":"hidden"}>${V(S)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${j?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${m?"disabled":""}>
                    ${m?"正在登录…":"登录"}
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
      ${k()}
    `,h()}function h(){const p=t.querySelector("#au-id"),T=t.querySelector("#au-pwd"),N=t.querySelector("#au-sphone"),Z=t.querySelector("#au-scode"),Y=t.querySelector('input[name="keep"]');p?.addEventListener("input",()=>{if(o=p.value,w.id||S){delete w.id,S="",p.closest(".au-field")?.classList.remove("bad");const P=t.querySelector("#au-id-err");P&&(P.textContent="");const z=t.querySelector("#au-login-ferr");z&&(z.hidden=!0)}}),T?.addEventListener("input",()=>{if(f=T.value,w.pwd||S){delete w.pwd,S="",T.closest(".au-field")?.classList.remove("bad");const P=t.querySelector("#au-pwd-err");P&&(P.textContent="");const z=t.querySelector("#au-login-ferr");z&&(z.hidden=!0)}}),N?.addEventListener("input",()=>{if(I=N.value,w.sphone||S){delete w.sphone,S="",N.closest(".au-field")?.classList.remove("bad");const P=t.querySelector("#au-sphone-err");P&&(P.textContent="");const z=t.querySelector("#au-login-ferr");z&&(z.hidden=!0)}}),Z?.addEventListener("input",()=>{if(g=Z.value.replace(/\D/g,"").slice(0,6),Z.value=g,w.scode||S){delete w.scode,S="",Z.closest(".au-field")?.classList.remove("bad");const P=t.querySelector("#au-scode-err");P&&(P.textContent="");const z=t.querySelector("#au-login-ferr");z&&(z.hidden=!0)}}),Y?.addEventListener("change",()=>{j=Y.checked}),t.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{l=!l,O(),t.querySelector("#au-pwd")?.focus()}),t.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{a=!a,w={},S="",O(),t.querySelector(a?"#au-sphone":"#au-id")?.focus()}),t.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const P=I.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(P)){w={sphone:"请输入有效的手机号码"},O(),t.querySelector("#au-sphone")?.focus();return}w={},C=P,F(),O(),t.querySelector("#au-scode")?.focus()}),t.querySelector('form[data-form="login"]')?.addEventListener("submit",async P=>{if(P.preventDefault(),!m){if(w={},S="",a?(I.trim()||(w.sphone="请输入手机号码"),/^\d{6}$/.test(g.trim())||(w.scode="请输入 6 位验证码")):(o.trim()||(w.id="请输入电子邮箱或手机号码"),f||(w.pwd="请输入密码")),Object.keys(w).length>0){O();const z=Object.keys(w)[0];t.querySelector(`#au-${z}`)?.focus();return}m=!0,O();try{const z=await e.login({account:(a?I:o).trim(),password:a?g.trim():f});b(),s(z)}catch(z){m=!1,S=z instanceof Error?z.message:"账户或密码不正确",O()}}}),t.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{D=o.trim(),d="",r="reset",O(),t.querySelector("#au-rs-id")?.focus()}),t.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{r="register",O()}),t.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{r="legal",O()}),t.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{q="",r="contact",O()}),t.querySelectorAll('[data-act="open-demo-roles"]').forEach(P=>{P.addEventListener("click",()=>{r="demoRoles",O()})}),t.querySelectorAll('[data-act="close-modal"]').forEach(P=>{P.addEventListener("click",()=>{r=null,O()})}),t.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",P=>{P.target===P.currentTarget&&(r=null,O())}),t.querySelectorAll('[data-act="switch-legal"]').forEach(P=>{P.addEventListener("click",()=>{const z=P.dataset.tab;z&&(M=z,O())})}),t.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),q="已复制"}catch{q="support@pacom.cn"}O()}),t.querySelector("#au-reset-form")?.addEventListener("submit",P=>{P.preventDefault(),D=t.querySelector("#au-rs-id")?.value.trim()??"",D?B?d="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":d="如账户存在，验证码已发送。":d="请输入电子邮箱或手机号码",O()}),t.querySelectorAll('[data-act="pick-demo-role"]').forEach(P=>{P.addEventListener("click",async()=>{const z=P.dataset.roleId;if(!z||!e.switchDemoRole)return;const K=await e.switchDemoRole(z);b(),s(K)})})}O()}async function We(){const t=document.getElementById("app");if(t)try{const e=we(),s=await e.getSession(),a=async l=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await Pe(t,e,l,()=>{de(t,e,o=>{a(o)})})};if(!s||window.location.hash==="#login"){de(t,e,l=>{a(l)});return}await a(s)}catch(e){t.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(e)}</div></div>`}}We();
//# sourceMappingURL=index-CqjjcVTs.js.map
