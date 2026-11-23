(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const $ of l.addedNodes)$.tagName==="LINK"&&$.rel==="modulepreload"&&a($)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}})();const i={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},U={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[i.projectId,i.project1Id],allowedBuildingIds:[i.buildingId,i.buildingFId],allowedFloorIds:[i.lockedFloor8Id,i.floorId,i.lockedFloor6Id],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[i.projectId],allowedBuildingIds:[i.buildingId,i.buildingFId],allowedFloorIds:[i.lockedFloor8Id,i.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[i.projectId],allowedBuildingIds:[i.buildingId],allowedFloorIds:[i.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[i.projectId],allowedBuildingIds:[i.buildingId],allowedFloorIds:[i.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[i.projectId],allowedBuildingIds:[i.buildingId],allowedFloorIds:[i.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},te="pacom.web.demo.role";class Se{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){const e=sessionStorage.getItem(te);e&&U[e]&&(this.activeSession=structuredClone(U[e]));const s=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:i.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:s,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:i.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:i.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:i.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:s,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:s,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:s,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:i.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:s,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:i.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:s,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:s,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:s,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:s},{id:"conn-e7f-dali",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:s},{id:"conn-e7f-modbus",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:i.projectId,floorId:i.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:i.projectId,floorId:i.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:i.projectId,floorId:i.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:i.projectId,floorId:i.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:i.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:i.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:i.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:s,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:i.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:i.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:i.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:i.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(U).map((a,o)=>({userId:a.userId,displayName:a.displayName,email:`${a.role.replaceAll("_",".")}@pacom.local`,role:a.role,roleLabel:a.roleLabel,scopeSummary:a.scope.allowedZoneIds?.length?`E栋 7F（${a.scope.allowedZoneIds.length} 个我的区域）`:`${a.scope.allowedProjectIds.length} 项目 / ${a.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:o===0?s:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(e,s,a,o,l){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:s,endpoint:a,request:l,response:o}),this.traces.length>40&&this.traces.pop()}pushAudit(e,s,a,o){const l=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:l?.displayName??"anonymous",role:l?.role??"member",action:e,target:s,result:a,detail:o})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){if(!e.account.trim()||!e.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const s=e.account.includes("admin")?"org_admin":e.account.includes("eng")?"commissioning_engineer":e.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(U[s]),sessionStorage.setItem(te,s),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:e.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(te),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(e){return this.activeSession=structuredClone(U[e]),sessionStorage.setItem(te,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}async getSpatialTree(){const e=this.requireSession(),s=[{id:i.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"},{id:i.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"}],a=[{id:i.buildingId,projectId:i.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.png"},{id:i.buildingFId,projectId:i.projectId,name:"F栋",aboveFloors:12,belowFloors:2,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.png"}],o={projects:s.filter(l=>e.scope.allowedProjectIds.includes(l.id)),buildings:a.filter(l=>e.scope.allowedBuildingIds.includes(l.id)),floors:[{id:i.lockedFloor8Id,buildingId:i.buildingId,kind:"above",level:8,name:"8F",plan:null},{id:i.floorId,buildingId:i.buildingId,kind:"above",level:7,name:"7F",areaSqm:1383.1,plan:{floorId:i.floorId,imageUrl:"./media/7F.webp",planVersion:1,updatedAt:"2026-11-22T00:00:00Z"}},{id:i.lockedFloor6Id,buildingId:i.buildingId,kind:"above",level:6,name:"6F",plan:null}],zones:[{id:"zone-e7f-lab-east",floorId:i.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:i.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:i.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:i.floorId,name:"核心走廊与弱电井",category:"corridor"}]};return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:o.projects.length,buildings:o.buildings.length,floors:o.floors.length}),o}async getFloorDevices(e){const s=this.requireSession();if(!s.scope.allowedFloorIds.includes(e)){const o={code:"FORBIDDEN",status:403,message:`当前角色「${s.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,o),this.pushAudit("floor.read",e,"denied",o.message),new Error(`403 FORBIDDEN: ${o.message}`)}if(e!==i.floorId)return[];let a=structuredClone(this.devices);return s.scope.allowedZoneIds?.length&&(a=a.filter(o=>o.logicalZoneId&&s.scope.allowedZoneIds.includes(o.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:a.length}),a}async dispatchControlBatch(e){const s=this.requireSession();if(!s.scope.canControlDevices||!s.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权下发控制指令`);const a=`batch-e7f-${Date.now().toString(36)}`,o={batchId:a,floorId:e.floorId,createdBy:s.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(l=>({deviceId:l.deviceId,command:l.command,targetValue:l.targetValue,status:"queued"}))};return this.batches.set(a,o),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",o,e),this.pushAudit("control.dispatch",a,"success",`下发 ${e.targets.length} 台设备`),o.receipts.forEach((l,$)=>{const I=this.devices.find(v=>v.id===l.deviceId);setTimeout(()=>{l.status="dispatched",l.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:a,deviceId:l.deviceId,status:"dispatched",at:l.dispatchedAt})},280+$*120),setTimeout(()=>{const v=new Date().toISOString();!I||I.connectivity==="offline"?(l.status="timeout",l.errorCode="GATEWAY_READBACK_TIMEOUT",l.errorMessage="设备离线，网关未收到回读确认",l.verifiedAt=v):(l.status="verified_success",l.observedValue=l.targetValue,l.verifiedAt=v,this.applyObservedTelemetry(I,l.command,l.targetValue,v)),this.emit({type:"control.receipt.updated",batchId:a,deviceId:l.deviceId,status:l.status,observedValue:l.observedValue,at:v})},900+$*220)}),structuredClone(o)}applyObservedTelemetry(e,s,a,o){s==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:a,collectedAt:o,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(a)>0,collectedAt:o,stale:!1})):(s==="lighting.power"||s==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:a,collectedAt:o,stale:!1}:s==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:a,collectedAt:o,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:o,values:{[s]:a}})}async getControlBatch(e){this.requireSession();const s=this.batches.get(e);if(!s)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(s)}async listAlarms(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==i.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,s){const a=this.requireSession();if(!a.scope.canManageAlarms){const l=`角色「${a.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",l),new Error(`403 FORBIDDEN: ${l}`)}const o=this.alarms.find(l=>l.id===e);if(!o)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return o.status="acknowledged",o.acknowledgedAt=new Date().toISOString(),o.acknowledgedBy=a.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,o,{note:s}),this.pushAudit("alarm.acknowledge",e,"success",s),this.emit({type:"alarm.changed",floorId:o.floorId,alarmId:e,status:"acknowledged",at:o.acknowledgedAt}),structuredClone(o)}async listWorkOrders(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==i.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建工单`);const a=new Date().toISOString(),o={id:`wo-e7f-${Date.now().toString(36)}`,projectId:i.projectId,buildingId:i.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:a,updatedAt:a};if(this.workOrders.unshift(o),e.alarmId){const l=this.alarms.find($=>$.id===e.alarmId);l&&(l.workOrderId=o.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",o,e),this.pushAudit("work_order.create",o.id,"success",o.title),structuredClone(o)}async updateWorkOrderStatus(e,s){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权流转工单`);const o=this.workOrders.find(l=>l.id===e);if(!o)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return o.status=s,o.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,o,{status:s}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${s}`),structuredClone(o)}async updateDevicePlanPoint(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权编辑图纸标点`);const a=this.devices.find(o=>o.id===e.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(a.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${a.version}，请刷新后重试`);return a.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},a.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,a,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${a.planPoint.x}, ${a.planPoint.y})`),structuredClone(a)}async updateDeviceHardwareBinding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改硬件绑定`);const a=this.devices.find(l=>l.id===e.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(a.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${a.version}）`);const o=new Date().toISOString();return a.physicalInstalled=e.physicalInstalled,a.physicalVerifiedAt=e.physicalInstalled?o:null,a.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:o,boundBy:s.displayName},a.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,a,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(a)}async listConnections(e){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,s){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权冻结交付批次`);const o=this.devices.filter($=>$.physicalInstalled&&$.hardwareBinding).length,l={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:i.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:o,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:a.displayName,note:s||"例行交付基线冻结"};return this.deliveryBatches.unshift(l),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,l,{note:s}),this.pushAudit("delivery.freeze",l.id,"success",`${o}/${this.devices.length} 已现场核验`),structuredClone(l)}async getAnalysisReport(e,s,a){this.requireSession();const o=s==="today"?1:s==="7d"?7:30,$={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*o)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*o).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(C=>C.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*o).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*o).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*o).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],I=s==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],v={category:e,range:s,scopeId:a,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:$.kpis,unit:$.unit,series:$.base.map((C,S)=>({label:I[S],value:Math.round(C*(e==="energy"||e==="carbon"?o/2+.5:1)),baseline:Math.round(C*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:$.base[3],unit:$.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:$.base[4],unit:$.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:$.base[1],unit:$.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${s}&scopeId=${a}`,{kpis:v.kpis.length}),v}async listScenes(e){return this.requireSession(),structuredClone(this.scenes)}async createScene(e){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const a={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(a),this.record("REST","createScene","POST /api/v1/scenes",a,e),this.pushAudit("scene.create",a.id,"success",a.name),structuredClone(a)}async executeScene(e){const s=this.scenes.find(o=>o.id===e);if(!s)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const a=await this.dispatchControlBatch({floorId:s.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:s.actions,reason:`触发场景：${s.name}`});return s.lastExecutedAt=new Date().toISOString(),s.lastBatchId=a.batchId,a}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:i.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,s,a){this.requireSession();const o=a>=this.calendar.nightGuardStart?`下班时间 ${a} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,l=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${s} - ${a}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${s} (-30m) ~ ${a} (+30m)`,conflictWarning:o},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:o}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",l,{workdayStart:s,workdayEnd:a}),l}async saveWorkCalendar(e,s,a,o){const l=this.requireSession();if(!l.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权修改运行日历`);if(this.calendar.version!==o)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(s>=a)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:s,workdayEnd:a,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:s,workdayEnd:a,expectedVersion:o}),this.pushAudit("settings.calendar",i.projectId,"success",`${s}-${a}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,s,a){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权启停运行规则`);const l=this.rules.find($=>$.id===e);if(!l)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(l.version!==a)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${l.version}）`);return l.enabled=s,l.version+=1,l.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,l,{enabled:s,expectedVersion:a}),this.pushAudit("settings.rule_toggle",e,"success",s?"启用":"停用"),structuredClone(l)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,s){const a=this.requireSession();if(a.role!=="org_admin"&&a.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const o=U[s],l={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:s,roleLabel:o.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(l),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",l,{email:e,role:s}),this.pushAudit("org.invite",e,"success",o.roleLabel),structuredClone(l)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(e,s){return e!==i.floorId?()=>{}:(this.listeners.add(s),()=>{this.listeners.delete(s)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${i.floorId}`,e),this.listeners.forEach(s=>s(e))}}function xe(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new Se}async function Ee(t,e,s,a,o){let l="profile",$=await e.listOrgMembers(),I=await e.listAuditLogs(),v="",C="all",S="all",x="all",g=!1,j=!1,A="";async function c(){[$,I]=await Promise.all([e.listOrgMembers(),e.listAuditLogs()]),E()}function E(){const N=e.mode==="demo"&&typeof e.switchDemoRole=="function",V=v.trim().toLowerCase(),r=$.filter(m=>C!=="all"&&m.role!==C?!1:V?`${m.displayName} ${m.email} ${m.roleLabel} ${m.scopeSummary}`.toLowerCase().includes(V):!0),n=I.filter(m=>{if(S==="success"&&m.result!=="success"||S==="denied"&&m.result==="success")return!1;if(x!=="all"){const T=`${m.action} ${m.target}`.toLowerCase();if(x==="control"&&!T.includes("control")&&!T.includes("scene")&&!T.includes("控制")||x==="alarm"&&!T.includes("alarm")&&!T.includes("work")&&!T.includes("告警")||x==="deploy"&&!T.includes("deploy")&&!T.includes("plan")&&!T.includes("hardware")&&!T.includes("部署"))return!1}return!0});t.innerHTML=`
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

        ${A?`<div class="pacom-alert-banner">${A}</div>`:""}

        <div class="lov-subnav-layout">
          <nav class="lov-subnav-rail" aria-label="机构与账户分组">
            <div class="lov-subnav-group">
              <div class="lov-subnav-group-title">工作空间</div>
              <button class="lov-subnav-item" aria-current="${l==="profile"?"true":"false"}" data-atab="profile">
                <span>我的账户与权限</span>
              </button>
              <button class="lov-subnav-item" aria-current="${l==="members"?"true":"false"}" data-atab="members">
                <span>成员与角色</span>
                <span class="pacom-badge pacom-badge--neutral">${$.length}</span>
              </button>
            </div>
            <div class="lov-subnav-group">
              <div class="lov-subnav-group-title">安全与审计</div>
              <button class="lov-subnav-item" aria-current="${l==="audit"?"true":"false"}" data-atab="audit">
                <span>操作审计日志</span>
                <span class="pacom-badge pacom-badge--neutral">${I.length}</span>
              </button>
            </div>
          </nav>

          <div class="lov-subnav-main">
            ${l==="profile"?`
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

                ${N?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">多角色权限预览切换</h2>
                        <span class="pacom-badge pacom-badge--neutral">仅 Demo 预览可用</span>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(U).map(m=>{const T=U[m];return`
                              <button class="pacom-role-card ${m===s.role?"is-active":""}" data-switch-role="${m}">
                                <strong style="font-weight:500;">${T.roleLabel}</strong>
                                <span class="pacom-row-sub">${T.displayName}</span>
                                <span class="pacom-row-sub">授权楼层 ${T.scope.allowedFloorIds.length} 层 · 部署编辑：${T.scope.canEditDeployment?"是":"否"}</span>
                              </button>`}).join("")}
                      </div>
                    </section>`:""}

                <section class="lov-section">
                  <h2 class="lov-section-title">会话 RBAC 联调契约</h2>
                  <div class="lov-snippet-card">
                    <div class="lov-snippet-head">
                      <span class="pacom-row-sub">服务端下发的当前会话权限对象（供前后端核对）</span>
                      <button class="pacom-btn" data-copy-session="1">${j?"已复制":"复制 JSON"}</button>
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
                </section>`:l==="members"?`
                  ${g?`
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
                                ${Object.keys(U).map(m=>`<option value="${m}">${U[m].roleLabel}</option>`).join("")}
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
                          <input class="pacom-input" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${v}" />
                          <select class="pacom-select" data-role-filter>
                            <option value="all" ${C==="all"?"selected":""}>全部角色</option>
                            ${Object.keys(U).map(m=>`<option value="${m}" ${C===m?"selected":""}>${U[m].roleLabel}</option>`).join("")}
                          </select>
                        </div>
                        <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                          ${g?"收起邀请":"+ 邀请成员"}
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
                            ${r.map(m=>`
                                <tr>
                                  <td>
                                    <div style="display:flex; align-items:center; gap:10px;">
                                      <span class="pacom-pop-avatar">${m.displayName.slice(0,1)}</span>
                                      <div>
                                        <div style="font-weight:500;">${m.displayName}</div>
                                        <div class="pacom-row-sub">${m.email}</div>
                                      </div>
                                    </div>
                                  </td>
                                  <td><span class="pacom-badge pacom-badge--neutral">${m.roleLabel}</span></td>
                                  <td><span class="pacom-row-sub">${m.scopeSummary}</span></td>
                                  <td>
                                    <span class="pacom-badge ${m.status==="active"?"pacom-badge--online":"pacom-badge--accent"}">
                                      ${m.status==="active"?"正常":m.status}
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
                          <button class="pacom-tab" aria-selected="${S==="all"}" data-audit-filter="all">全部（${I.length}）</button>
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
                            ${n.map(m=>`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${m.action}</div>
                                    ${m.detail?`<div class="pacom-row-sub">${m.detail}</div>`:""}
                                  </td>
                                  <td><code style="font-size:12px;">${m.target}</code></td>
                                  <td>${m.actor}</td>
                                  <td><span class="pacom-row-sub">${m.at.slice(0,19).replace("T"," ")}</span></td>
                                  <td>
                                    <span class="pacom-badge ${m.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                                      ${m.result==="success"?"成功":m.result}
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
    `,t.querySelectorAll("[data-atab]").forEach(m=>{m.addEventListener("click",()=>{l=m.dataset.atab,A="",E()})}),t.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",o()}),t.querySelector("[data-copy-session]")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(s,null,2)),j=!0,E(),window.setTimeout(()=>{j=!1,E()},1600)}catch{}}),t.querySelectorAll("[data-switch-role]").forEach(m=>{m.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const T=await e.switchDemoRole(m.dataset.switchRole);a(T)})}),t.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{g=!g,E()}),t.querySelector("[data-member-search]")?.addEventListener("input",m=>{const T=m.currentTarget,L=T.selectionStart??T.value.length;v=T.value,E();const D=t.querySelector("[data-member-search]");D&&(D.focus(),D.setSelectionRange(L,L))}),t.querySelector("[data-role-filter]")?.addEventListener("change",m=>{C=m.currentTarget.value,E()}),t.querySelectorAll("[data-audit-filter]").forEach(m=>{m.addEventListener("click",()=>{S=m.dataset.auditFilter??"all",E()})}),t.querySelector("[data-audit-cat]")?.addEventListener("change",m=>{x=m.currentTarget.value??"all",E()}),t.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async m=>{m.preventDefault(),A="";const T=new FormData(m.currentTarget);try{await e.inviteOrgMember(String(T.get("email")??""),String(T.get("role"))),g=!1,await c()}catch(L){A=L instanceof Error?L.message:String(L),E()}})}E()}const ke={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},Ae={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}};async function Le(t,e,s){let a=[],o=[],l="alarms",$="all",I=!1,v="",C=null;const S=new Set,x=new Set;let g="",j="";async function A(){[a,o]=await Promise.all([e.listAlarms(i.floorId),e.listWorkOrders(i.floorId)]),c()}function c(){const E=a.filter(h=>h.status==="active"&&!S.has(h.id)),N=o.filter(h=>h.status==="open"||h.status==="assigned"||h.status==="in_progress"),V=a.filter(h=>h.status!=="active").length+x.size,r=S.size,n=v.trim().toLowerCase(),q=a.filter(h=>{const p=S.has(h.id);if($==="snoozed"){if(!p)return!1}else if($==="active"){if(h.status!=="active"||p)return!1}else if($==="acknowledged"){if(h.status!=="acknowledged")return!1}else if(p)return!1;return n?`${h.title} ${h.message} ${h.deviceId}`.toLowerCase().includes(n):!0}),m=new Map;for(const h of q){const p=I?h.deviceId:h.id,P=m.get(p)??[];P.push(h),m.set(p,P)}const T=Array.from(m.values()),L=o.filter(h=>n?`${h.title} ${h.description} ${h.id}`.toLowerCase().includes(n):!0);t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">告警中心</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge ${s.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${s.scope.canManageAlarms?"可确认、自处理与转单":"只读权限"}
              </span>
              <button class="lov-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">↻</button>
            </div>
          </div>
          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist">
              <button class="pacom-tab" role="tab" aria-selected="${l==="alarms"&&$==="all"}" data-pill="all">全部告警（${a.length-r}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${l==="alarms"&&$==="active"}" data-pill="active">待处理（${E.length}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${l==="alarms"&&$==="acknowledged"}" data-pill="acknowledged">已确认（${a.filter(h=>h.status==="acknowledged").length}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${l==="alarms"&&$==="snoozed"}" data-pill="snoozed">已忽略 24h（${r}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${l==="workorders"}" data-pill="workorders">运维工单（${o.length}）</button>
            </div>
            ${l==="alarms"?`
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
              <div class="lov-kpi-value">${E.length}<span class="lov-kpi-unit">条</span></div>
              <span class="lov-kpi-delta">实时遥测驱动状态</span>
            </div>
            <div class="lov-kpi-cell">
              <span class="lov-kpi-label">处理中工单</span>
              <div class="lov-kpi-value">${N.length}<span class="lov-kpi-unit">单</span></div>
              <span class="lov-kpi-delta">已指派或现场处置</span>
            </div>
            <div class="lov-kpi-cell">
              <span class="lov-kpi-label">已确认 / 闭环验证</span>
              <div class="lov-kpi-value">${V}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">24h 无复发即计入有效</span>
            </div>
            <div class="lov-kpi-cell">
              <span class="lov-kpi-label">限时忽略（降噪）</span>
              <div class="lov-kpi-value">${r}<span class="lov-kpi-unit">条</span></div>
              <span class="lov-kpi-delta">到期自动恢复监控</span>
            </div>
          </div>

          ${g?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${g}</span></div>`:""}
          ${j?`<div class="pacom-alert-banner">${j}</div>`:""}

          ${l==="alarms"?`
              <section class="lov-table-card">
                <div class="lov-table-toolbar">
                  <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                    <input class="pacom-input" style="max-width:300px;" data-alarm-search placeholder="搜索告警标题、设备编号或描述…" value="${v}" />
                  </div>
                  <span class="pacom-row-sub">展示 ${T.length} 项${I?"（已按设备根因归并）":""}</span>
                </div>
                ${T.length===0?'<div class="lov-empty-state"><strong>当前视图无告警</strong><span>系统运行正常，可切换上方页签查看历史确认或运维工单。</span></div>':`
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
                          ${T.map(h=>{const p=h[0],P=Ae[p.severity]??{label:p.severity,cls:"pacom-badge--neutral"},W=C===p.id,G=S.has(p.id);return`
                                <tr>
                                  <td><span class="pacom-badge ${P.cls}">${P.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                      <span>${p.title}</span>
                                      ${h.length>1?`<span class="pacom-badge pacom-badge--accent">归并 ${h.length} 条</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${p.message}</div>
                                  </td>
                                  <td><code style="font-size:12px;">${p.deviceId}</code></td>
                                  <td>
                                    <span class="pacom-badge ${G?"pacom-badge--neutral":p.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${G?"已忽略 24h":p.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${G?`<button class="pacom-btn" data-unsnooze="${p.id}">恢复监控</button>`:`
                                            ${p.status==="active"?`<button class="pacom-btn" data-mark-actioned="${p.id}" title="现场自行调整后一键闭环">标记已处置</button>`:""}
                                            ${p.workOrderId?`<span class="pacom-badge pacom-badge--accent">${p.workOrderId}</span>`:`<button class="pacom-btn pacom-btn--primary" data-to-wo="${p.id}">转工单</button>`}
                                            ${p.status==="active"?`<button class="pacom-btn pacom-btn--ghost" data-snooze="${p.id}">忽略 24h</button>`:""}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${p.id}">${W?"收起":"详情"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${W?`
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
                    <input class="pacom-input" style="max-width:300px;" data-alarm-search placeholder="搜索工单编号、标题或说明…" value="${v}" />
                  </div>
                  <span class="pacom-row-sub">共 ${L.length} 条工单</span>
                </div>
                ${L.length===0?'<div class="lov-empty-state"><strong>暂无运维工单</strong><span>可在告警队列中一键将告警转为运维工单。</span></div>':`
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
                          ${L.map(h=>`
                              <tr>
                                <td><code style="font-size:12px;">${h.id}</code></td>
                                <td>
                                  <div style="font-weight:500;">${h.title}</div>
                                  <div class="pacom-row-sub">${h.description}</div>
                                </td>
                                <td>
                                  <select class="pacom-select" data-wo-status="${h.id}">
                                    ${["open","assigned","in_progress","resolved","closed"].map(p=>`<option value="${p}" ${h.status===p?"selected":""}>${ke[p]}</option>`).join("")}
                                  </select>
                                </td>
                              </tr>`).join("")}
                        </tbody>
                      </table>
                    </div>`}
              </section>`}
        </div>
      </div>
    `,t.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{g="",A()}),t.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{I=!I,c()}),t.querySelectorAll("[data-pill]").forEach(h=>{h.addEventListener("click",()=>{const p=h.dataset.pill;g="",p==="workorders"?l="workorders":(l="alarms",$=p??"all"),c()})}),t.querySelector("[data-alarm-search]")?.addEventListener("input",h=>{const p=h.currentTarget,P=p.selectionStart??p.value.length;v=p.value,c();const W=t.querySelector("[data-alarm-search]");W&&(W.focus(),W.setSelectionRange(P,P))}),t.querySelectorAll("[data-expand-alarm]").forEach(h=>{h.addEventListener("click",()=>{const p=h.dataset.expandAlarm??null;C=C===p?null:p,c()})}),t.querySelectorAll("[data-locate-home]").forEach(h=>{h.addEventListener("click",()=>{window.location.hash="#home"})}),t.querySelectorAll("[data-snooze]").forEach(h=>{h.addEventListener("click",()=>{const p=h.dataset.snooze;p&&(S.add(p),g="已将该告警限时忽略 24 小时，期间不再重复打扰，可在「已忽略 24h」页签随时恢复。",c())})}),t.querySelectorAll("[data-unsnooze]").forEach(h=>{h.addEventListener("click",()=>{const p=h.dataset.unsnooze;p&&(S.delete(p),g="已恢复该告警的实时监控。",c())})}),t.querySelectorAll("[data-mark-actioned]").forEach(h=>{h.addEventListener("click",async()=>{j="";const p=h.dataset.markActioned;try{await e.acknowledgeAlarm(p,"现场自处理完成（Mark Actioned）"),x.add(p),g="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await A()}catch(P){j=P instanceof Error?P.message:String(P),c()}})}),t.querySelectorAll("[data-to-wo]").forEach(h=>{h.addEventListener("click",async()=>{j="";const p=a.find(P=>P.id===h.dataset.toWo);if(p)try{await e.createWorkOrder({floorId:p.floorId,deviceId:p.deviceId,alarmId:p.id,title:`处置告警：${p.title}`,description:p.message}),g=`已将「${p.title}」转为运维工单。`,await A()}catch(P){j=P instanceof Error?P.message:String(P),c()}})}),t.querySelectorAll("[data-wo-status]").forEach(h=>{h.addEventListener("change",async()=>{j="";try{await e.updateWorkOrderStatus(h.dataset.woStatus,h.value),g="工单状态已更新并写入审计日志。",await A()}catch(p){j=p instanceof Error?p.message:String(p),await A()}})})}await A()}const ae=[{id:"energy",label:"能源",desc:"分项能耗与峰谷负荷趋势"},{id:"environment",label:"环境",desc:"温湿度、CO₂ 与洁净室舒适度"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与异常分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能基线对比"}];function je(t){const e=Math.max(...t.series.map(x=>Math.max(x.value,x.baseline??0)),1),s=42,a=26,o=32,l=Math.max(t.series.length*(s+a)+o*2,420),$=204,I=164,v=128,C=[0,.25,.5,.75,1].map(x=>{const g=Math.round(I-x*v);return`<line x1="${o-8}" y1="${g}" x2="${l-16}" y2="${g}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${x===0?"0":"3 3"}" />`}).join(""),S=t.series.map((x,g)=>{const j=o+g*(s+a),A=Math.max(6,Math.round(x.value/e*v)),c=I-A,E=typeof x.baseline=="number"&&x.value>x.baseline*1.08,N=E?`<rect x="${j-6}" y="28" width="${s+12}" height="${I-28}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",V=typeof x.baseline=="number"?`<line x1="${j-4}" y1="${Math.round(I-x.baseline/e*v)}" x2="${j+s+4}" y2="${Math.round(I-x.baseline/e*v)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"";return`
        ${N}
        ${V}
        <rect x="${j}" y="${c}" width="${s}" height="${A}" rx="7" fill="${E?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.86" />
        <text x="${j+s/2}" y="${c-7}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${x.value}</text>
        <text x="${j+s/2}" y="${I+20}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${x.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${l} ${$}" style="width:100%; height:210px; display:block;" role="img" aria-label="${t.category} 趋势图">
      ${C}
      ${S}
    </svg>
  `}function Ce(t){const e=[["时段",`数值 (${t.unit})`,`基线 (${t.unit})`].join(","),...t.series.map(l=>[l.label,String(l.value),l.baseline!==void 0?String(l.baseline):""].join(","))],s=new Blob([`\uFEFF${e.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(s),o=document.createElement("a");o.href=a,o.download=`pacom-${t.category}-${t.range}.csv`,o.click(),URL.revokeObjectURL(a)}async function De(t,e,s){let a="energy",o="7d",l="chart",$=!1,I=null;async function v(){I=await e.getAnalysisReport(a,o,i.floorId),C()}function C(){if(!I)return;const S=ae.find(g=>g.id===a)??ae[0],x=I.zoneBreakdown.filter(g=>g.status==="warning");t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">数据分析</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
              <span class="pacom-badge pacom-badge--neutral">${I.scopeLabel}</span>
              <select class="pacom-select" data-range-select aria-label="统计时间范围">
                <option value="today" ${o==="today"?"selected":""}>今日</option>
                <option value="7d" ${o==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${o==="30d"?"selected":""}>近 30 天</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              <button class="pacom-btn" data-toggle-canvas="1">${$?"收起空间画布":"展开楼层对照"}</button>
            </div>
          </div>
        </header>

        <div class="lov-subnav-layout">
          <nav class="lov-subnav-rail" aria-label="分析维度">
            <div class="lov-subnav-group">
              <div class="lov-subnav-group-title">分析维度</div>
              ${ae.map(g=>`
                  <button class="lov-subnav-item" aria-current="${a===g.id?"true":"false"}" data-cat="${g.id}">
                    <span>${g.label}</span>
                  </button>`).join("")}
            </div>
          </nav>

          <div class="lov-subnav-main">
            <div class="lov-kpi-strip" role="region" aria-label="核心统计指标">
              ${I.kpis.map(g=>`
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">${g.label}</span>
                    <div class="lov-kpi-value">
                      <span>${g.value}</span>
                      ${g.unit?`<span class="lov-kpi-unit">${g.unit}</span>`:""}
                    </div>
                    <span class="lov-kpi-delta">${g.delta??"与基线持平"}</span>
                  </div>`).join("")}
            </div>

            <section class="lov-section">
              <div class="lov-section-head">
                <h2 class="lov-section-title">${S?.label??"趋势"}统计（${I.unit}）</h2>
                <div style="display:flex; align-items:center; gap:10px;">
                  <span class="pacom-row-sub">虚线为目标基线 · 浅红阴影为超基线异常段</span>
                  <div class="pacom-tabs">
                    <button class="pacom-tab" aria-selected="${l==="chart"}" data-chart-mode="chart">趋势图</button>
                    <button class="pacom-tab" aria-selected="${l==="table"}" data-chart-mode="table">明细原表</button>
                  </div>
                </div>
              </div>
              <div class="pacom-card" style="gap:16px;">
                ${l==="chart"?je(I):`
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
                          ${I.series.map(g=>{const j=typeof g.baseline=="number"&&g.value>g.baseline*1.08;return`
                                <tr>
                                  <td><strong>${g.label}</strong></td>
                                  <td>${g.value}</td>
                                  <td>${g.baseline??"-"}</td>
                                  <td><span class="pacom-badge ${j?"pacom-badge--warning":"pacom-badge--online"}">${j?"超基线":"正常"}</span></td>
                                </tr>`}).join("")}
                        </tbody>
                      </table>
                    </div>`}
                <div class="lov-banner">
                  <div class="lov-banner-text">
                    <span class="lov-banner-title">${S?.desc??"空间运行洞察"}</span>
                    <span class="lov-banner-sub">
                      ${x.length>0?`当前有 ${x.length} 个功能区指标偏高（${x.map(g=>g.zoneName).join("、")}），建议结合楼层平面图核查设备策略。`:"当前统计周期内各功能区运行平稳，均在目标基线区间内。"}
                    </span>
                  </div>
                  <button class="pacom-btn" data-toggle-canvas="1">${$?"隐藏平面图":"对照 E7F 平面图"}</button>
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
                        ${I.zoneBreakdown.map(g=>`
                            <tr>
                              <td>
                                <div style="font-weight:500;">${g.zoneName}</div>
                                <div class="pacom-row-sub">${g.zoneId}</div>
                              </td>
                              <td><strong>${g.value}</strong> <span class="pacom-row-sub">${g.unit}</span></td>
                              <td>
                                <span class="pacom-badge ${g.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                  ${g.status==="warning"?"偏高关注":"正常"}
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
                  ${$?'<img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 分析楼层预览" style="max-height:240px;" />':`
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
    `,t.querySelectorAll("[data-cat]").forEach(g=>{g.addEventListener("click",()=>{a=g.dataset.cat,v()})}),t.querySelector("[data-range-select]")?.addEventListener("change",g=>{o=g.currentTarget.value,v()}),t.querySelectorAll("[data-chart-mode]").forEach(g=>{g.addEventListener("click",()=>{l=g.dataset.chartMode??"chart",C()})}),t.querySelector("[data-export-csv]")?.addEventListener("click",()=>{I&&Ce(I)}),t.querySelectorAll("[data-toggle-canvas]").forEach(g=>{g.addEventListener("click",()=>{$=!$,C()})})}await v()}async function Oe(t,e,s){let a="floorplan",o=await e.getSpatialTree(),l=[],$=[],I=[],v=null,C=!1,S=null,x="",g="";async function j(){g="";const[c,E,N,V]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(i.floorId).catch(()=>[]),e.listConnections(i.projectId),e.listDeliveryBatches(i.floorId)]);o=c,l=E,$=N,I=V,l.some(r=>r.id===v)||(v=l[0]?.id??null),A()}function A(){const c=l.find(n=>n.id===v)??null,E=s.scope.canEditDeployment,N=$.reduce((n,q)=>n+q.collectedPoints,0),V=$.reduce((n,q)=>n+q.calculatedPoints,0),r=$.filter(n=>n.status==="connected").length;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">系统部署</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge ${E?"pacom-badge--online":"pacom-badge--warning"}">
                ${E?"可编辑部署与硬件绑定":"只读权限（写入将被服务端 403 拦截）"}
              </span>
            </div>
          </div>
          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist">
              <button class="pacom-tab" role="tab" aria-selected="${a==="floorplan"}" data-dtab="floorplan">图纸标点与四态绑定</button>
              <button class="pacom-tab" role="tab" aria-selected="${a==="topology"}" data-dtab="topology">项目空间拓扑</button>
              <button class="pacom-tab" role="tab" aria-selected="${a==="connections"}" data-dtab="connections">系统接入（${$.length}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${a==="delivery"}" data-dtab="delivery">交付冻结（${I.length}）</button>
            </div>
          </div>
        </header>

        ${x?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${x}</span></div>`:""}
        ${g?`<div class="pacom-alert-banner">${g}</div>`:""}

        ${a==="floorplan"?`
            <section class="pacom-split">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:380px;">
                <div class="pacom-pane-toolbar">
                  <div style="font-weight:500;">E7F 设备与四态配置（${l.length}）</div>
                  <div class="pacom-row-sub">
                    图上放点仅更新 <code>planPoint</code>，绝不自动改写物理安装态或硬件端口绑定。
                  </div>
                </div>
                <div class="pacom-list">
                  ${l.map(n=>`
                      <div class="pacom-row ${n.id===v?"is-selected":""}" data-pick-dev="${n.id}">
                        <div style="min-width:0;">
                          <div class="pacom-row-title">${n.name}</div>
                          <div class="pacom-row-sub">v${n.version} · ${n.hardwareBinding?.protocol.toUpperCase()??"未绑定"} · ${n.physicalInstalled?"现场已确认":"待物理复核"}</div>
                        </div>
                        <span class="pacom-badge ${n.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">
                          ${n.planPoint?`${Math.round(n.planPoint.x*100)}%,${Math.round(n.planPoint.y*100)}%`:"未标点"}
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
                          ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(n=>`<option value="${n}" ${c.hardwareBinding?.protocol===n?"selected":""}>${n.toUpperCase()}</option>`).join("")}
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
                        <button class="pacom-btn" type="button" data-toggle-place="1">${C?"取消点图更新":"点图更新坐标"}</button>
                        <button class="pacom-btn" type="button" data-ftt-test="1" title="远程验证指令下发、状态回读并自动恢复工况">单机回读自检</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit" style="flex:1;">保存硬件绑定（v${c.version}）</button>
                      </div>
                    </form>`:""}
              </aside>
              <div class="pacom-splitter"></div>
              <main class="pacom-right-pane">
                <div class="pacom-canvas-stage" data-role="deploy-stage" style="cursor:${C?"crosshair":"default"};">
                  <div class="pacom-canvas-viewport">
                    <div class="pacom-plan-wrap" data-role="deploy-plan">
                      <img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 部署平面图" />
                      ${l.filter(n=>n.planPoint).map(n=>`
                          <button class="pacom-pin ${n.id===v?"is-selected":""} ${n.connectivity==="offline"?"pacom-pin--offline":""}"
                            style="left:${(n.planPoint.x*100).toFixed(2)}%; top:${(n.planPoint.y*100).toFixed(2)}%;"
                            data-pick-dev="${n.id}">
                            <span>${n.name.slice(0,7)}</span>
                          </button>`).join("")}
                    </div>
                  </div>
                  ${C&&c?`<div style="position:absolute; top:16px; left:16px; z-index:8;" class="pacom-badge pacom-badge--accent">标点模式：点击图纸任意位置更新「${c.name}」的 2D 坐标（不改动硬件绑定）</div>`:""}
                </div>
              </main>
            </section>`:a==="topology"?`
              <div class="pacom-content-page" style="padding:4px 0 24px;">
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">项目 → 楼宇 → 楼层归属拓扑</h2>
                    <span class="pacom-row-sub">共 ${o.projects.length} 个项目 · ${o.buildings.length} 栋楼宇</span>
                  </div>
                  <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:14px;">
                    ${o.projects.map(n=>{const q=o.buildings.filter(m=>m.projectId===n.id);return`
                          <div class="pacom-card" style="padding:16px; gap:10px;">
                            <img src="${n.imageUrl??"./media/gzlab.jpg"}" alt="${n.name}" style="width:100%; height:128px; object-fit:cover; border-radius:10px;" />
                            <div>
                              <strong style="font-size:15px; font-weight:500;">${n.name}</strong>
                              <div class="pacom-row-sub">${n.city??""} ${n.address??""} · ${q.length} 栋授权楼宇</div>
                            </div>
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              ${q.map(m=>`
                                  <div class="pacom-receipt-item">
                                    <span><strong>${m.name}</strong> · 地上 ${m.aboveFloors}F / ${m.areaSqm??"-"} m²</span>
                                    <span class="pacom-badge ${m.id===i.buildingId?"pacom-badge--accent":"pacom-badge--neutral"}">${m.id===i.buildingId?"含 E7F":"对照"}</span>
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
                      <div class="lov-kpi-value">${N}<span class="lov-kpi-unit">点</span></div>
                      <span class="lov-kpi-delta">协议直采实时遥测</span>
                    </div>
                    <div class="lov-kpi-cell">
                      <span class="lov-kpi-label">衍生计算点</span>
                      <div class="lov-kpi-value">${V}<span class="lov-kpi-unit">点</span></div>
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
                      <button class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${E?"":"disabled"}>+ 新建交付冻结快照</button>
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
                            ${I.map(n=>`
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
    `,t.querySelectorAll("[data-dtab]").forEach(n=>{n.addEventListener("click",()=>{a=n.dataset.dtab,x="",g="",A()})}),t.querySelectorAll("[data-pick-dev]").forEach(n=>{n.addEventListener("click",()=>{v=n.dataset.pickDev??null,A()})}),t.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{C=!C,A()}),t.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{c&&(g="",c.connectivity==="offline"?g=`单机回读自检未通过：「${c.name}」当前离线，请先检查网关 ${c.hardwareBinding?.networkAddress??"-"} 通信状态。`:x=`单机回读自检通过（PASS）：「${c.name}」指令下发 → 状态回读一致 → 已安全自动恢复原工况。`,A())}),t.querySelectorAll("[data-copy-endpoint]").forEach(n=>{n.addEventListener("click",async()=>{const q=n.dataset.endpointVal??"",m=n.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(q),S=m,A(),window.setTimeout(()=>{S=null,A()},1600)}catch{}})}),t.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async n=>{if(!C||!c)return;const q=n.currentTarget.getBoundingClientRect(),m=Math.max(.02,Math.min(.98,(n.clientX-q.left)/q.width)),T=Math.max(.02,Math.min(.98,(n.clientY-q.top)/q.height));try{await e.updateDevicePlanPoint({deviceId:c.id,floorId:i.floorId,planVersion:c.planPoint?.planVersion??1,x:m,y:T,expectedVersion:c.version}),C=!1,x=`已更新「${c.name}」图上坐标（硬件绑定与物理安装态保持不变）`,await j()}catch(L){g=L instanceof Error?L.message:String(L),A()}}),t.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async n=>{if(n.preventDefault(),!c)return;const q=new FormData(n.currentTarget);try{await e.updateDeviceHardwareBinding({deviceId:c.id,gatewayId:c.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(q.get("protocol")),networkAddress:String(q.get("networkAddress")??""),portOrChannel:String(q.get("portOrChannel")??""),physicalInstalled:q.get("physicalInstalled")==="on",expectedVersion:c.version}),x=`已保存「${c.name}」的硬件绑定与物理安装状态`,await j()}catch(m){g=m instanceof Error?m.message:String(m),A()}}),t.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const n=await e.freezeDeliveryBatch(i.floorId,"前端系统部署发起冻结");x=`已生成冻结批次 ${n.versionTag}（核验 ${n.verifiedCount}/${n.deviceCount}）`,await j()}catch(n){g=n instanceof Error?n.message:String(n),A()}})}await j()}function Fe(t){if(t.connectivity==="offline")return`${t.name.includes("VAV")?"VAV-02":t.name.slice(0,6)} 离线`;if(t.category==="lighting"){const e=t.name.includes("702")?"702 照明":"主照明",s=Number(t.telemetry.dimming?.value??0);return s>0?`${e} ${s}%`:`${e} 关`}return t.category==="hvac"?`${t.name.includes("VAV")?"VAV-02":"FCU-01"} ${t.telemetry.setpoint?.value??24}°C`:t.category==="sensor"?`环境 ${t.telemetry.temp?.value??"23.4"}°C`:t.category==="gateway"?"主控网关":t.name.slice(0,6)}const se="pacom.web.e7f.leftWidth",ie={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},Te={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},Me={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:42,top:42,width:14,height:22}};function b(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function qe(t){return t.level==="all-projects"?"all":t.level==="project"?`project:${t.projectId}`:t.level==="building"?`building:${t.projectId}:${t.buildingId}`:`floor:${t.projectId}:${t.buildingId}:${t.floorId}`}async function Pe(t,e,s){const a=await e.getSpatialTree(),o=e.mode==="demo",l=s.scope.canControlDevices,$=s.scope.canManageAlarms,I=s.scope.allowedZoneIds?.length?s.scope.allowedZoneIds:null;let v={level:"floor",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId},C="devices",S="canvas",x="",g="all",j="all",A=null,c=!1,E="devices";const N=new Set,V=new Set;let r=[],n=[],q=[],m=null,T=null,L=1,D=0,h=0,p=Number(localStorage.getItem(se)||400);(!Number.isFinite(p)||p<320||p>680)&&(p=400);let P=null;function W(){return a.zones.filter(d=>!(v.level==="floor"&&d.floorId!==v.floorId||I&&!I.includes(d.id)))}async function G(d){v=d,T=null,j="all",V.clear(),L=1,D=0,h=0,P&&(P(),P=null);const k=v.level==="floor"?v.floorId:i.floorId;if(v.level==="floor")try{const[u,f,w]=await Promise.all([e.getFloorDevices(v.floorId),e.listAlarms(v.floorId),e.listWorkOrders(v.floorId)]);r=u,n=f,q=w,r.some(F=>F.id===A)||(A=r[1]?.id??r[0]?.id??null,c=!1),P=e.subscribeFloorEvents(v.floorId,async F=>{F.type==="control.receipt.updated"&&m?.batchId===F.batchId&&(m=await e.getControlBatch(F.batchId)),(F.type==="telemetry.updated"||F.type==="device.connectivity")&&v.level==="floor"&&(r=await e.getFloorDevices(v.floorId)),F.type==="alarm.changed"&&v.level==="floor"&&(n=await e.listAlarms(v.floorId)),Q()})}catch(u){r=[],n=[],q=[],A=null,c=!1,T=u instanceof Error?u.message:String(u)}else{c=!1;const[u,f,w]=await Promise.all([e.getFloorDevices(k).catch(()=>[]),e.listAlarms(k).catch(()=>[]),e.listWorkOrders(k).catch(()=>[])]);r=u,n=f,q=w}H()}function X(d){return d?a.zones.find(k=>k.id===d)?.name??d:"未分配逻辑区"}function z(){const d=x.trim().toLowerCase();return r.filter(k=>j!=="all"&&k.logicalZoneId!==j||g!=="all"&&k.category!==g?!1:d?k.name.toLowerCase().includes(d)||k.id.toLowerCase().includes(d)||X(k.logicalZoneId).toLowerCase().includes(d):!0)}async function R(d,k,u){!d.length||v.level!=="floor"||!l||(d.forEach(f=>N.add(f)),m=await e.dispatchControlBatch({floorId:v.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:d.map(f=>({deviceId:f,command:k,targetValue:u}))}),Q())}function Q(){const d=document.activeElement,k=d?.dataset?.role,u=d&&"selectionStart"in d?d.selectionStart:null,f=d&&"selectionEnd"in d?d.selectionEnd:null,w=t.querySelector(".pacom-list")?.scrollTop??0;H();const F=t.querySelector(".pacom-list");if(F&&(F.scrollTop=w),k==="search"){const M=t.querySelector('[data-role="search"]');M&&(M.focus(),u!==null&&f!==null&&M.setSelectionRange(u,f))}}function ee(){const d=t.querySelector('[data-role="canvas-viewport"]');d&&(d.style.transform=`translate(${D}px, ${h}px) scale(${L})`);const k=t.querySelector('[data-role="canvas-hint"]');k&&(k.textContent=`缩放 ${Math.round(L*100)}% · 滚轮缩放 · 拖动平移 · 双击复位`)}function ge(){return v.level==="floor"?`building:${v.projectId}:${v.buildingId}`:v.level==="building"?`project:${v.projectId}`:v.level==="project"?"all":null}function be(){const d=qe(v),k=a.projects.map(w=>`<option value="project:${b(w.id)}" ${d===`project:${w.id}`?"selected":""}>项目 · ${b(w.name)}</option>`).join(""),u=a.buildings.map(w=>{const F=`building:${w.projectId}:${w.id}`;return`<option value="${b(F)}" ${d===F?"selected":""}>楼宇 · 广实2号园 / ${b(w.name)}</option>`}).join(""),f=a.floors.map(w=>{const F=s.scope.allowedFloorIds.includes(w.id),M=`floor:${i.projectId}:${w.buildingId}:${w.id}`;return`<option value="${b(M)}" ${d===M?"selected":""}>楼层 · 广实2号园 / E栋 / ${b(w.name)}${F?"":"（未授权）"}</option>`}).join("");return`
      <option value="all" ${d==="all"?"selected":""}>全部项目（${a.projects.length} 个授权园区）</option>
      <optgroup label="项目级">${k}</optgroup>
      <optgroup label="楼宇级">${u}</optgroup>
      <optgroup label="楼层级">${f}</optgroup>
    `}function he(){if(v.level==="all-projects"){const k=r.filter(f=>f.connectivity==="online").length,u=n.filter(f=>f.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">授权项目总览（${a.projects.length}）</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">楼宇</span><strong>${a.buildings.length} 栋</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线</span><strong>${k}/${r.length}</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:var(--pacom-status-warning);">${u} 条</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${a.projects.map(f=>{const w=a.buildings.filter(F=>F.projectId===f.id).length;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="project:${b(f.id)}">
                  <img src="${b(f.imageUrl??"./media/gzlab.jpg")}" alt="${b(f.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${b(f.name)}</strong>
                    <span class="pacom-badge pacom-badge--accent">${w} 栋楼宇</span>
                  </div>
                  <div class="pacom-row-sub">${b(f.city??"")} · ${b(f.address??"")}</div>
                </article>`}).join("")}
        </div>
      `}const d=v;if(d.level==="project"){const k=a.projects.find(M=>M.id===d.projectId),u=a.buildings.filter(M=>M.projectId===d.projectId),f=r.filter(M=>M.connectivity==="online").length,w=r.length?Math.round(f/r.length*100):100,F=n.filter(M=>M.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${b(k?.name??"园区")} · 楼宇绩效（${u.length}）</div>
          <div class="pacom-row-sub">${b(k?.city??"")} ${b(k?.address??"")}</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">在线率</span><strong>${w}%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:${F>0?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${F} 条</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>1,248 kWh</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${u.map(M=>{const y=M.id===i.buildingId;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="building:${b(M.projectId)}:${b(M.id)}">
                  <img src="${b(M.imageUrl??"./media/building-e.png")}" alt="${b(M.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${b(M.name)}</strong>
                    <span class="pacom-badge ${y?"pacom-badge--online":"pacom-badge--neutral"}">${y?`在线 ${w}% · 告警 ${F}`:"运行平稳"}</span>
                  </div>
                  <div class="pacom-row-sub">地上 ${M.aboveFloors} 层 · 面积 ${M.areaSqm??"-"} m² · 舒适度达标 96%</div>
                </article>`}).join("")}
        </div>
      `}if(d.level==="building"){const k=a.buildings.find(y=>y.id===d.buildingId),u=a.floors.filter(y=>y.buildingId===d.buildingId),f=q.filter(y=>y.status!=="closed"&&y.status!=="resolved"),w=r.filter(y=>y.connectivity==="online").length,F=r.length?Math.round(w/r.length*100):100,M=n.filter(y=>y.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${b(k?.name??"楼宇")} 运行概况</div>
          <div class="pacom-row-sub">地上 ${k?.aboveFloors??0} 层 · 面积 ${k?.areaSqm??"-"} m²</div>
          <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线率</span><strong>${F}%（${w}/${r.length}）</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">舒适度达标</span><strong>96.2%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>418 kWh</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">告警 / 工单</span><strong style="color:var(--pacom-status-warning);">${M} 告警 · ${f.length} 工单</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:8px; padding:12px;">
          <div style="font-weight:500; font-size:13px;">楼层列表（点击进入 2D 平面控制）</div>
          ${u.length?u.map(y=>{const O=s.scope.allowedFloorIds.includes(y.id),B=y.id===i.floorId;return`
                      <div class="pacom-row" data-nav-scope="floor:${b(d.projectId)}:${b(d.buildingId)}:${b(y.id)}">
                        <div>
                          <div class="pacom-row-title">${b(k?.name??"")} ${b(y.name)}</div>
                          <div class="pacom-row-sub">${y.plan?"2D 平面图就绪":"暂未上传图纸"}${B&&M>0?` · ${M} 条待处理告警`:""}</div>
                        </div>
                        <span class="pacom-badge ${O?"pacom-badge--online":"pacom-badge--warning"}">${O?"进入楼层":"无权限"}</span>
                      </div>`}).join(""):'<div class="pacom-row-sub">该楼宇暂未配置试点楼层。</div>'}
        </div>
      `}if(C==="devices"){const k=z(),u=W(),f=Array.from(V);return`
        <div class="pacom-pane-toolbar">
          ${I?`<div class="pacom-info-banner">我的区域视图：仅显示当前账号获授权的 ${I.length} 个功能区及设备。</div>`:""}
          <div class="pacom-search-row">
            <input class="pacom-input" data-role="search" placeholder="搜索设备名 / ID / 区域…" value="${b(x)}" aria-label="搜索楼层设备" />
            <select class="pacom-select" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${g==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${g==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${g==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${g==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${g==="gateway"?"selected":""}>网关</option>
            </select>
          </div>
          ${u.length>0&&!T?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${j==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${u.map(w=>`<button type="button" class="pacom-zone-pill ${j===w.id?"is-active":""}" data-filter-zone="${b(w.id)}">${b(w.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; color:var(--pacom-text-secondary);">
            <span>当前可见 ${k.length} 台设备</span>
            <span>${l?`已勾选 ${f.length} 台`:"只读模式"}</span>
          </div>
        </div>
        <div class="pacom-list">
          ${T?`<div class="pacom-alert-banner">${b(T)}</div>`:k.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">没有匹配的设备</div>':k.map(w=>{const F=w.id===A&&c,M=V.has(w.id),y=w.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline",O=w.category==="lighting"?`亮度 ${w.telemetry.dimming?.value??"--"}%`:w.category==="hvac"?`设定 ${w.telemetry.setpoint?.value??"--"}°C`:w.category==="sensor"?`${w.telemetry.temp?.value??"--"}°C · CO₂ ${w.telemetry.co2?.value??"--"}`:w.hardwareBinding?.networkAddress??"未绑定";return`
                        <div class="pacom-row ${F?"is-selected":""}" data-select-device="${b(w.id)}">
                          <div class="pacom-row-main">
                            ${l?`<input type="checkbox" data-check-device="${b(w.id)}" ${M?"checked":""} style="margin-top:3px;" aria-label="勾选 ${b(w.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title">${b(w.name)}</div>
                              <div class="pacom-row-sub">${b(X(w.logicalZoneId))} · ${b(ie[w.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${w.connectivity==="online"?"pacom-badge--online":"pacom-badge--neutral"}">
                            <span class="pacom-dot ${y}"></span>${b(O)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${l&&f.length>0?`
            <div class="pacom-batch-bar">
              <span style="font-size:12px;">显式批量目标：<strong>${f.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(C==="zones"){const k=W(),u=["23.2°C","24.6°C","22.8°C","23.9°C"],f=["有人 74%","会议中","有人 52%","空闲"];return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">E7F 功能区快控（${k.length}）</div>
          <div class="pacom-row-sub">点击卡片同步高亮右侧平面图热区，支持按区域一键批量控制。</div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${k.map((w,F)=>{const M=r.filter(_=>_.logicalZoneId===w.id),y=M.filter(_=>_.connectivity==="online").length,O=M.filter(_=>_.category==="lighting"||_.category==="hvac").length,B=j===w.id;return`
                <div class="pacom-control-box" style="background:${B?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${B?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${b(B?"all":w.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:14px; font-weight:500;">${b(w.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${y}/${M.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时温度 ${u[F%u.length]} · 占用 ${f[F%f.length]}</div>
                  ${O>0?`
                      <div style="display:flex; gap:6px; margin-top:2px;">
                        <button type="button" class="pacom-btn" data-zone-power="${b(w.id)}" data-zone-val="true" ${l?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" data-zone-power="${b(w.id)}" data-zone-val="false" ${l?"":"disabled"}>区域全关</button>
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
                      <strong style="font-size:13px;">${b(k.title)}</strong>
                      <span class="pacom-badge ${k.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${k.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${b(k.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" data-locate-device="${b(k.deviceId)}">定位设备</button>
                      ${k.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" data-ack-alarm="${b(k.id)}" ${$?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function fe(){const d=v,k=r.filter(y=>y.connectivity==="online").length,u=r.length?Math.round(k/r.length*100):100,f=n.filter(y=>y.status==="active").length;if(d.level==="all-projects"||d.level==="project"){const y=d.level==="project"?a.projects.find(B=>B.id===d.projectId):a.projects[0],O=a.buildings.filter(B=>!y||B.projectId===y.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:24px; cursor:default;">
          <div style="position:relative; width:min(760px, 94%); border-radius:16px; overflow:hidden; box-shadow:0 12px 32px rgba(15,23,42,0.14); background:#fff;">
            <img src="${b(y?.imageUrl??"./media/gzlab.jpg")}" alt="园区俯瞰" style="width:100%; height:440px; object-fit:cover; display:block;" />
            ${d.level==="all-projects"?a.projects.map((B,_)=>`
                      <button type="button" class="pacom-pin is-selected" style="left:${_===0?48:26}%; top:${_===0?52:34}%;" data-nav-scope="project:${b(B.id)}">
                        <span class="pacom-dot pacom-dot--online"></span>
                        <span>${b(B.name)}</span>
                      </button>`).join(""):O.map((B,_)=>{const Y=B.id===i.buildingId;return`
                        <button type="button" class="pacom-pin ${Y?"is-selected":""}" style="left:${_===0?56:38}%; top:${_===0?44:62}%;" data-nav-scope="building:${b(B.projectId)}:${b(B.id)}">
                          <span class="pacom-dot ${Y&&f>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                          <span>${b(B.name)} · ${Y?`在线 ${u}% · 告警 ${f}`:"运行平稳"}</span>
                        </button>`}).join("")}
          </div>
        </div>
      `}if(d.level==="building"){const y=a.buildings.find(_=>_.id===d.buildingId),O=a.floors.filter(_=>_.buildingId===d.buildingId),B=O.find(_=>_.id===i.floorId)??O[0];return`
        ${O.length?`
            <nav class="pacom-floor-rail" aria-label="整栋楼层选择轨道">
              <button type="button" class="pacom-floor-btn is-active" title="整栋视图">栋</button>
              ${O.map(_=>`<button type="button" class="pacom-floor-btn ${s.scope.allowedFloorIds.includes(_.id)?"":"is-locked"}" data-nav-scope="floor:${b(d.projectId)}:${b(d.buildingId)}:${b(_.id)}" title="${b(_.name)}">${b(_.name.replace("F",""))}</button>`).join("")}
            </nav>`:""}
        <div class="pacom-canvas-tools" aria-label="画布工具">
          <button type="button" class="pacom-tool-btn" data-zoom="reset" title="复位视图" aria-label="复位视图">⟲</button>
          <div class="pacom-tool-divider" aria-hidden="true"></div>
          <button type="button" class="pacom-tool-btn" data-zoom="in" title="放大" aria-label="放大">＋</button>
          <button type="button" class="pacom-tool-btn" data-zoom="out" title="缩小" aria-label="缩小">－</button>
        </div>
        <div class="pacom-canvas-stage" data-role="canvas-stage">
          <div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${D}px, ${h}px) scale(${L});">
            <img class="pacom-plan-img" src="${b(y?.imageUrl??"./media/building-e.png")}" alt="${b(y?.name??"楼宇")} 整栋实景图" />
          </div>
        </div>
        <div class="pacom-canvas-hint" style="pointer-events:auto; display:flex; align-items:center; gap:10px;">
          <span>${b(y?.name??"楼宇")} · 在线 ${u}% · 舒适度 96.2%</span>
          ${B?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:24px; padding:0 10px; font-size:12px;" data-nav-scope="floor:${b(d.projectId)}:${b(d.buildingId)}:${b(B.id)}">进入 ${b(B.name)} 平面图 →</button>`:""}
        </div>
      `}const w=a.floors.find(y=>y.id===d.floorId),F=a.floors.filter(y=>y.buildingId===d.buildingId),M=W();return`
      <nav class="pacom-floor-rail" aria-label="楼层选择轨道">
        <button type="button" class="pacom-floor-btn" data-nav-scope="building:${b(d.projectId)}:${b(d.buildingId)}" title="返回整栋楼宇">栋</button>
        ${F.map(y=>{const O=s.scope.allowedFloorIds.includes(y.id);return`<button type="button" class="pacom-floor-btn ${y.id===d.floorId?"is-active":""} ${O?"":"is-locked"}"
              data-nav-scope="floor:${b(d.projectId)}:${b(d.buildingId)}:${b(y.id)}" title="${b(y.name)}${O?"":"（无权限）"}">
              ${b(y.name.replace("F",""))}
            </button>`}).join("")}
      </nav>

      <div class="pacom-canvas-tools" aria-label="画布工具">
        <button type="button" class="pacom-tool-btn" data-zoom="reset" title="复位视图" aria-label="复位视图">⟲</button>
        <div class="pacom-tool-divider" aria-hidden="true"></div>
        <button type="button" class="pacom-tool-btn" data-zoom="in" title="放大" aria-label="放大">＋</button>
        <button type="button" class="pacom-tool-btn" data-zoom="out" title="缩小" aria-label="缩小">－</button>
      </div>

      ${T?"":`
        <div class="lov-layer-bar" role="group" aria-label="平面图图层切换">
          <button type="button" class="lov-layer-btn" aria-pressed="${E==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${E==="temp"}" data-canvas-layer="temp">温度热区</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${E==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${E==="alarms"}" data-canvas-layer="alarms">告警叠加${n.filter(y=>y.status==="active").length>0?` (${n.filter(y=>y.status==="active").length})`:""}</button>
        </div>`}

      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${T?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${b(T)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${D}px, ${h}px) scale(${L});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${b(w?.plan?.imageUrl??"./media/7F.webp")}" alt="E栋 ${b(w?.name??"7F")} 平面图" />
                  ${M.map((y,O)=>{const B=Me[y.id];if(!B)return"";const _=j===y.id,Y=["23.2°C","24.6°C","22.8°C","23.9°C"],ne=["有人 74%","会议中","有人 52%","空闲"],we=E==="temp"?` · ${Y[O%Y.length]}`:E==="occupancy"?` · ${ne[O%ne.length]}`:"",Ie=E==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":E==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${_?"is-active":""}"
                          style="left:${B.left}%; top:${B.top}%; width:${B.width}%; height:${B.height}%; ${_?"":Ie}"
                          data-filter-zone="${b(_?"all":y.id)}"
                          title="${b(y.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${b(y.name.replace(/^7F\s*/,""))}${we}</span>
                        </button>`}).join("")}
                  ${r.filter(y=>y.planPoint).map(y=>{const O=n.some(Y=>Y.deviceId===y.id&&Y.status==="active"),B=j!=="all"&&y.logicalZoneId!==j||E==="alarms"&&!O,_=E==="alarms"&&O?"background:var(--pacom-status-critical);":"";return`
                        <button type="button" class="pacom-pin ${y.id===A&&c?"is-selected":""} ${y.connectivity==="offline"?"pacom-pin--offline":""} ${B?"pacom-pin--dimmed":""}"
                          style="left:${(y.planPoint.x*100).toFixed(2)}%; top:${(y.planPoint.y*100).toFixed(2)}%; ${_}"
                          data-pin-device="${b(y.id)}" title="${b(y.name)}">
                          <span class="pacom-dot ${O?"pacom-dot--critical":y.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${b(Fe(y))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>

      ${T?"":`<div class="pacom-canvas-hint" data-role="canvas-hint">缩放 ${Math.round(L*100)}% · 滚轮缩放 · 拖动平移 · 双击复位</div>`}
      ${ye()}
    `}function ye(){if(v.level!=="floor"||!c)return"";const d=r.find(y=>y.id===A);if(!d)return"";const k=d.category==="lighting",u=d.category==="hvac",f=Number(d.telemetry.dimming?.value??50),w=Number(d.telemetry.setpoint?.value??24),F=N.has(d.id),M=k?[{label:"当前开关",value:f>0?"开启":"关闭"},{label:"当前亮度",value:`${f}%`},{label:"实时功率",value:f>0?`${Math.round(f*1.4)} W`:"0 W"},{label:"运行模式",value:F?"人工覆盖":"自动策略"}]:u?[{label:"室内温度",value:`${d.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${w.toFixed(1)}°C`},{label:"运行工况",value:d.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:F?"人工覆盖":"自动策略"}]:d.category==="sensor"?[{label:"实时温度",value:`${d.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${d.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${d.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:d.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:d.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:d.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:d.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:d.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${b(d.name)}</h2>
            <div class="pacom-row-sub">${b(X(d.logicalZoneId))} · ${b(ie[d.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${F?"pacom-badge--warning":"pacom-badge--neutral"}">
              ${F?"人工覆盖":"自动策略"}
            </span>
            <span class="pacom-badge ${d.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${d.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>
            </button>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          ${M.map(y=>`
              <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                <span class="pacom-row-sub">${y.label}</span>
                <strong style="font-size:13px; font-weight:500;">${b(y.value)}</strong>
              </div>`).join("")}
        </div>

        ${k||u?`
            <div class="pacom-control-box">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                ${F&&l?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${b(d.id)}">恢复自动策略</button>`:l?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
              </div>
              ${d.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
              ${k?`
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
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${w-.5}" ${l?"":"disabled"}>-0.5°C</button>
                    <strong>${w.toFixed(1)}°C</strong>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${w+.5}" ${l?"":"disabled"}>+0.5°C</button>
                  </div>`}
            </div>`:""}

        ${m?`
            <div class="pacom-control-box">
              <div style="font-size:12px; font-weight:500;">最近批次：<code>${b(m.batchId)}</code></div>
              <div class="pacom-receipt-list">
                ${m.receipts.map(y=>{const O=Te[y.status]??{text:y.status,badge:"pacom-badge--neutral"};return`
                      <div class="pacom-receipt-item">
                        <div>
                          <div><strong>${b(y.deviceId)}</strong> · ${b(y.command)} → ${b(y.targetValue)}</div>
                          ${y.errorMessage?`<div style="color:var(--pacom-status-critical);">${b(y.errorMessage)}</div>`:""}
                        </div>
                        <span class="pacom-badge ${O.badge}">${O.text}</span>
                      </div>`}).join("")}
              </div>
            </div>`:""}

        <details class="lov-tech-details">
          <summary><span>技术标识与硬件绑定</span><span>▾</span></summary>
          <div class="pacom-kv-grid">
            <span class="pacom-kv-label">设备编号</span><span><code>${b(d.id)}</code> · v${d.version}</span>
            <span class="pacom-kv-label">图上点位</span><span>${d.planPoint?`x=${d.planPoint.x.toFixed(2)}, y=${d.planPoint.y.toFixed(2)} (图 v${d.planPoint.planVersion})`:"未标点"}</span>
            <span class="pacom-kv-label">物理安装</span><span>${d.physicalInstalled?"现场已确认":"待现场复核"}</span>
            <span class="pacom-kv-label">硬件绑定</span><span>${d.hardwareBinding?`${d.hardwareBinding.protocol.toUpperCase()} · ${d.hardwareBinding.networkAddress}`:"未绑定"}</span>
          </div>
        </details>
      </aside>
    `}function oe(d){if(d==="all")return{level:"all-projects"};const k=d.split(":");return k[0]==="project"&&k[1]?{level:"project",projectId:k[1]}:k[0]==="building"&&k[1]&&k[2]?{level:"building",projectId:k[1],buildingId:k[2]}:k[0]==="floor"&&k[1]&&k[2]&&k[3]?{level:"floor",projectId:k[1],buildingId:k[2],floorId:k[3]}:{level:"all-projects"}}function H(){const d=n.filter(w=>w.status==="active").length,k=r.filter(w=>w.connectivity==="online").length,u=ge(),f=r.find(w=>w.category==="sensor")?.telemetry.temp?.value??"23.4";t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">空间总览</h1>
            <div class="pacom-header-meta">
              ${v.level==="floor"&&!T?`<span class="pacom-badge pacom-badge--online">在线 ${k}/${r.length} · 均温 ${b(f)}°C</span>`:o?'<span class="pacom-badge pacom-badge--neutral"><span class="pacom-dot pacom-dot--offline"></span>演示模式</span>':'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>'}
              <span class="pacom-badge pacom-badge--neutral">${b(s.roleLabel)}</span>
            </div>
          </div>

          <div class="pacom-header-toolbar">
            <div class="pacom-toolbar-left">
              ${u?`<button type="button" class="lov-icon-btn" data-nav-scope="${b(u)}" title="返回上一空间层级" aria-label="返回上一空间层级">←</button>`:""}
              <div class="pacom-scope-pill" title="项目 / 楼宇 / 楼层空间范围切换">
                <select data-role="scope-select" aria-label="选择查看范围">
                  ${be()}
                </select>
                <span class="pacom-scope-chevron">▾</span>
              </div>

              ${v.level==="floor"?`
                  <div class="pacom-tabs" role="tablist">
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${C==="devices"}" data-tab="devices">设备</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${C==="zones"}" data-tab="zones">区域</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${C==="alarms"}" data-tab="alarms">
                      告警 ${d>0?`<span class="pacom-badge pacom-badge--warning">${d}</span>`:""}
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
          <aside class="pacom-left-pane" style="--pacom-sidebar-width:${p}px;">
            ${he()}
          </aside>
          <div class="pacom-splitter" role="separator" tabindex="0" aria-orientation="vertical" aria-label="调整左右栏宽度" data-role="splitter"></div>
          <main class="pacom-right-pane">
            ${fe()}
          </main>
        </section>
      </div>
    `,$e()}function $e(){t.querySelector('[data-role="scope-select"]')?.addEventListener("change",u=>{G(oe(u.currentTarget.value))}),t.querySelectorAll("[data-nav-scope]").forEach(u=>{u.addEventListener("click",()=>{u.dataset.navScope&&G(oe(u.dataset.navScope))})}),t.querySelectorAll("[data-tab]").forEach(u=>{u.addEventListener("click",()=>{C=u.dataset.tab,H()})}),t.querySelectorAll("[data-mobile-pane-btn]").forEach(u=>{u.addEventListener("click",()=>{S=u.dataset.mobilePaneBtn,H()})}),t.querySelector('[data-role="search"]')?.addEventListener("input",u=>{x=u.currentTarget.value,Q()}),t.querySelector('[data-role="category"]')?.addEventListener("change",u=>{g=u.currentTarget.value,H()}),t.querySelectorAll("[data-filter-zone]").forEach(u=>{u.addEventListener("click",f=>{f.stopPropagation(),j=u.dataset.filterZone??"all",H()})}),t.querySelectorAll("[data-select-device]").forEach(u=>{u.addEventListener("click",f=>{f.target.tagName!=="INPUT"&&(A=u.dataset.selectDevice??null,c=!0,S="canvas",H())})}),t.querySelectorAll("[data-check-device]").forEach(u=>{u.addEventListener("change",()=>{const f=u.dataset.checkDevice;f&&(u.checked?V.add(f):V.delete(f),H())})}),t.querySelectorAll("[data-pin-device]").forEach(u=>{u.addEventListener("click",f=>{f.stopPropagation(),A=u.dataset.pinDevice??null,c=!0,H()})}),t.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{c=!1,H()}),t.querySelector("[data-release-override]")?.addEventListener("click",u=>{const f=u.currentTarget.dataset.releaseOverride;f&&(N.delete(f),H())}),t.querySelectorAll("[data-zone-power]").forEach(u=>{u.addEventListener("click",f=>{f.stopPropagation();const w=u.dataset.zonePower,F=u.dataset.zoneVal==="true";if(!w)return;const M=r.filter(O=>O.logicalZoneId===w&&O.category==="lighting").map(O=>O.id),y=r.filter(O=>O.logicalZoneId===w&&O.category==="hvac").map(O=>O.id);M.length?R(M,"lighting.power",F):y.length&&R(y,"hvac.power",F)})}),t.querySelectorAll("[data-locate-device]").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.locateDevice;f&&(A=f,c=!0,S="canvas",H())})}),t.querySelector("[data-go-alarms]")?.addEventListener("click",()=>{window.location.hash="#alarms"}),t.querySelectorAll("[data-ctrl-cmd]").forEach(u=>{u.addEventListener("click",()=>{if(!A||!u.dataset.ctrlCmd)return;const f=u.dataset.ctrlVal??"",w=f==="true"?!0:f==="false"?!1:Number(f);R([A],u.dataset.ctrlCmd,w)})}),t.querySelector("[data-ctrl-slider]")?.addEventListener("change",u=>{const f=u.currentTarget;!A||!f.dataset.ctrlSlider||R([A],f.dataset.ctrlSlider,Number(f.value))}),t.querySelectorAll("[data-batch-cmd]").forEach(u=>{u.addEventListener("click",()=>{const f=Array.from(V),w=u.dataset.batchVal??"",F=w==="true"?!0:w==="false"?!1:w;R(f,u.dataset.batchCmd,F)})}),t.querySelectorAll("[data-ack-alarm]").forEach(u=>{u.addEventListener("click",async()=>{!u.dataset.ackAlarm||v.level!=="floor"||!$||(await e.acknowledgeAlarm(u.dataset.ackAlarm,"首页快速确认"),n=await e.listAlarms(v.floorId),H())})}),t.querySelectorAll("[data-canvas-layer]").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.canvasLayer;f&&(E=f,H())})}),t.querySelectorAll("[data-zoom]").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.zoom;f==="in"?L=Math.min(2.6,Number((L+.2).toFixed(2))):f==="out"?L=Math.max(.6,Number((L-.2).toFixed(2))):(L=1,D=0,h=0),ee()})});const d=t.querySelector('[data-role="canvas-stage"]');if(d&&!T){let u=!1,f=0,w=0,F=0,M=0;d.addEventListener("pointerdown",O=>{O.target?.closest("button, input, select, .pacom-drawer")||(u=!0,f=O.clientX,w=O.clientY,F=D,M=h,d.classList.add("is-panning"),d.setPointerCapture?.(O.pointerId))}),d.addEventListener("pointermove",O=>{u&&(D=F+(O.clientX-f),h=M+(O.clientY-w),ee())});const y=()=>{u&&(u=!1,d.classList.remove("is-panning"))};d.addEventListener("pointerup",y),d.addEventListener("pointercancel",y),d.addEventListener("wheel",O=>{O.preventDefault();const B=O.deltaY<0?.12:-.12;L=Math.max(.6,Math.min(2.6,Number((L+B).toFixed(2)))),ee()},{passive:!1}),d.addEventListener("dblclick",O=>{O.target?.closest("button")||(L=1,D=0,h=0,ee())})}const k=t.querySelector('[data-role="splitter"]');k?.addEventListener("pointerdown",u=>{const f=u.clientX,w=p;k.classList.add("is-dragging");const F=y=>{p=Math.max(320,Math.min(640,w+(y.clientX-f)));const O=t.querySelector(".pacom-left-pane");O&&O.style.setProperty("--pacom-sidebar-width",`${p}px`)},M=()=>{k.classList.remove("is-dragging"),localStorage.setItem(se,String(Math.round(p))),window.removeEventListener("pointermove",F),window.removeEventListener("pointerup",M)};window.addEventListener("pointermove",F),window.addEventListener("pointerup",M)}),k?.addEventListener("keydown",u=>{if(u.key==="ArrowLeft")u.preventDefault(),p=Math.max(320,p-16);else if(u.key==="ArrowRight")u.preventDefault(),p=Math.min(640,p+16);else if(u.key==="Home")u.preventDefault(),p=320;else if(u.key==="End")u.preventDefault(),p=640;else return;localStorage.setItem(se,String(Math.round(p)));const f=t.querySelector(".pacom-left-pane");f&&f.style.setProperty("--pacom-sidebar-width",`${p}px`)})}await G(v)}const ze=new Set(["lighting","hvac","alarm_rules"]),ce=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%"}];async function Be(t,e,s){let[a,o]=await Promise.all([e.listScenes(i.floorId),e.getRuntimeSettings(i.projectId)]),l="manual",$="balanced",I=null,v="",C=!1,S="",x="";const g=e.subscribeFloorEvents(i.floorId,async A=>{A.type==="control.receipt.updated"&&I?.batchId===A.batchId&&(I=await e.getControlBatch(A.batchId),j())});function j(){const A=v.trim().toLowerCase(),c=A?a.filter(r=>`${r.name} ${r.description}`.toLowerCase().includes(A)):a,E=o.rules.filter(r=>ze.has(r.category)),N=s.scope.canEditDeployment;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">智能策略</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge ${s.scope.canControlDevices?"pacom-badge--online":"pacom-badge--warning"}">
                ${s.scope.canControlDevices?"可触发并核验逐设备回执":"只读权限"}
              </span>
              ${l==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${C?"收起新建表单":"+ 新建场景"}</button>`:""}
            </div>
          </div>
          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist">
              <button class="pacom-tab" role="tab" aria-selected="${l==="manual"}" data-scene-tab="manual">一键场景（${a.length}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${l==="schedules"}" data-scene-tab="schedules">定时排程</button>
              <button class="pacom-tab" role="tab" aria-selected="${l==="oss"}" data-scene-tab="oss">节能模式</button>
              <button class="pacom-tab" role="tab" aria-selected="${l==="rules"}" data-scene-tab="rules">联动规则（${E.length}）</button>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:4px 0 24px;">
          ${S?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${S}</span></div>`:""}
          ${x?`<div class="pacom-alert-banner">${x}</div>`:""}

          ${l==="manual"?`
              ${C?`
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
                <input class="pacom-input" style="max-width:300px;" data-scene-search placeholder="搜索场景名称或说明…" value="${v}" />
                <span class="pacom-row-sub">共 ${c.length} 个场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(310px,1fr)); gap:14px;">
                ${c.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="lov-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建自定义场景。</span></div></div>':c.map(r=>`
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

              ${I?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">逐设备执行回执</h2>
                      <span class="pacom-row-sub">批次 <code>${I.batchId}</code></span>
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
                            ${I.receipts.map(r=>`
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
                            <td>周一至周五 · ${o.calendar.workdayStart}（跟随工作日历）</td>
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
                            <td>每日 · ${o.calendar.nightGuardStart} – ${o.calendar.nightGuardEnd}</td>
                            <td>E7F 非实验室区域</td>
                            <td><span class="pacom-badge pacom-badge--online">生效中</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>`:l==="oss"?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">E7F 优化启停与主动节能模式（OSS）</h2>
                      <span class="pacom-badge pacom-badge--accent">人工覆盖始终优先 · 异常自动回退</span>
                    </div>
                    <div class="lov-mode-grid">
                      ${ce.map(r=>`
                        <button type="button" class="lov-mode-card" aria-pressed="${$===r.id}" data-oss-mode="${r.id}" ${s.scope.canControlDevices?"":"disabled"}>
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
                      <span class="pacom-row-sub">共 ${E.length} 条自动化规则</span>
                    </div>
                    <div class="lov-settings-card">
                      ${E.length===0?'<div class="lov-empty-state"><strong>暂无联动规则</strong><span>当前楼层尚未配置照明、暖通或告警自动策略。</span></div>':E.map(r=>`
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
                                      ${N?"":"disabled"}
                                    >
                                      <span class="lov-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`).join("")}
                    </div>
                  </section>`}
        </div>
      </div>
    `,t.querySelectorAll("[data-scene-tab]").forEach(r=>{r.addEventListener("click",()=>{l=r.dataset.sceneTab??"manual",S="",j()})}),t.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),t.querySelectorAll("[data-oss-mode]").forEach(r=>{r.addEventListener("click",()=>{const n=r.dataset.ossMode;if(!n)return;$=n;const q=ce.find(m=>m.id===n);S=`已切换至「${q?.title??n}」运行策略（${q?.estSaving??""}）。`,j()})}),t.querySelectorAll("[data-toggle-strategy-rule]").forEach(r=>{r.addEventListener("click",async()=>{x="";try{await e.toggleRuntimeRule(r.dataset.toggleStrategyRule,r.dataset.ruleNext==="true",Number(r.dataset.ruleVer)),o=await e.getRuntimeSettings(i.projectId),S="联动规则状态与版本回执已更新。",j()}catch(n){x=n instanceof Error?n.message:String(n),j()}})}),t.querySelectorAll("[data-toggle-create]").forEach(r=>{r.addEventListener("click",()=>{C=!C,j()})}),t.querySelector("[data-scene-search]")?.addEventListener("input",r=>{const n=r.currentTarget,q=n.selectionStart??n.value.length;v=n.value,j();const m=t.querySelector("[data-scene-search]");m&&(m.focus(),m.setSelectionRange(q,q))}),t.querySelectorAll("[data-exec-scene]").forEach(r=>{r.addEventListener("click",async()=>{x="";try{I=await e.executeScene(r.dataset.execScene),a=await e.listScenes(i.floorId),j()}catch(n){x=n instanceof Error?n.message:String(n),j()}})}),t.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async r=>{r.preventDefault();const n=new FormData(r.currentTarget);try{await e.createScene({projectId:i.projectId,floorId:i.floorId,name:String(n.get("name")??""),description:String(n.get("description")??""),actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:50}]}),a=await e.listScenes(i.floorId),C=!1,S="自定义场景已保存。",j()}catch(q){x=q instanceof Error?q.message:String(q),j()}})}j(),window.addEventListener("hashchange",()=>g(),{once:!0})}const me=[{group:"项目基准",items:[{id:"calendar",label:"运行日历"},{id:"weather_area",label:"气象与面积"},{id:"metering_carbon",label:"计量与碳排"}]},{group:"通知与模板",items:[{id:"notifications",label:"告警通知订阅"},{id:"templates",label:"参数模板"}]}],Re=me.flatMap(t=>t.items);async function _e(t,e,s){let a="calendar",o=await e.getRuntimeSettings(i.projectId),l=o.calendar.workdayStart,$=o.calendar.workdayEnd,I=[];const v={criticalSms:!0,inAppBanner:!0,dailyDigest:!1};let C="",S="";function x(){const g=o.rules.filter(c=>c.category===a),j=Re.find(c=>c.id===a)?.label??"运行设置",A=s.scope.canEditDeployment;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">运行设置</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">项目范围：广实2号园</span>
              <span class="pacom-badge ${A?"pacom-badge--online":"pacom-badge--warning"}">
                ${A?"可修改并下发配置":"当前角色只读"}
              </span>
            </div>
          </div>
        </header>

        ${C?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${C}</span></div>`:""}
        ${S?`<div class="pacom-alert-banner">${S}</div>`:""}

        <div class="lov-subnav-layout">
          <nav class="lov-subnav-rail" aria-label="运行设置分组">
            ${me.map(c=>`
              <div class="lov-subnav-group">
                <div class="lov-subnav-group-title">${c.group}</div>
                ${c.items.map(E=>{const N=E.id==="calendar"?"":String(o.rules.filter(V=>V.category===E.id).length);return`
                      <button class="lov-subnav-item" aria-current="${a===E.id?"true":"false"}" data-scat="${E.id}">
                        <span>${E.label}</span>
                        ${N?`<span class="pacom-badge pacom-badge--neutral">${N}</span>`:""}
                      </button>`}).join("")}
              </div>`).join("")}
          </nav>

          <div class="lov-subnav-main">
            ${a==="calendar"?`
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">项目工作时间日历</h2>
                    <span class="pacom-badge pacom-badge--neutral">版本 v${o.calendar.version}</span>
                  </div>
                  <div class="lov-settings-card">
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">工作日上班时间</span>
                        <span class="lov-setting-desc">用于自动触发早间预冷/预热及公共区域照明启动</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:140px;" type="time" data-cal-start value="${l}" ${A?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">工作日下班时间</span>
                        <span class="lov-setting-desc">夜间巡检窗口为 ${o.calendar.nightGuardStart} – ${o.calendar.nightGuardEnd}；若晚于 21:30 将自动提示交叠冲突</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:140px;" type="time" data-cal-end value="${$}" ${A?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row" style="justify-content:flex-end;">
                      <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                      <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${A?"":"disabled"}>保存并校验版本</button>
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
                          <button type="button" class="lov-switch" role="switch" aria-checked="${v.criticalSms}" data-notify-key="criticalSms" aria-label="严重告警短信推送">
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
                          <button type="button" class="lov-switch" role="switch" aria-checked="${v.inAppBanner}" data-notify-key="inAppBanner" aria-label="站内实时横幅提醒">
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
                          <button type="button" class="lov-switch" role="switch" aria-checked="${v.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报">
                            <span class="lov-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>`:`
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">${j}</h2>
                    <span class="pacom-row-sub">共 ${g.length} 条策略</span>
                  </div>
                  <div class="lov-settings-card">
                    ${g.length===0?'<div class="lov-empty-state"><strong>暂无配置项</strong><span>该分类下尚未定义运行策略规则。</span></div>':g.map(c=>`
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
                                    ${A?"":"disabled"}
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
    `,t.querySelectorAll("[data-scat]").forEach(c=>{c.addEventListener("click",()=>{a=c.dataset.scat,C="",S="",x()})}),t.querySelectorAll("[data-notify-key]").forEach(c=>{c.addEventListener("click",()=>{const E=c.dataset.notifyKey;E&&(v[E]=!v[E],C="通知订阅偏好已更新。",x())})}),t.querySelector("[data-cal-start]")?.addEventListener("change",c=>{l=c.currentTarget.value}),t.querySelector("[data-cal-end]")?.addEventListener("change",c=>{$=c.currentTarget.value}),t.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{S="",I=await e.previewCalendarImpact(i.projectId,l,$),x()}),t.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{S="";try{const c=await e.saveWorkCalendar(i.projectId,l,$,o.calendar.version);o={...o,calendar:c},C=`运行日历已保存至 v${c.version}（${c.workdayStart} - ${c.workdayEnd}）`,I=[],x()}catch(c){S=c instanceof Error?c.message:String(c),x()}}),t.querySelectorAll("[data-toggle-rule]").forEach(c=>{c.addEventListener("click",async()=>{S="";try{await e.toggleRuntimeRule(c.dataset.toggleRule,c.dataset.ruleNext==="true",Number(c.dataset.ruleVer)),o=await e.getRuntimeSettings(i.projectId),C="策略状态与版本回执已更新",x()}catch(E){S=E instanceof Error?E.message:String(E),x()}})})}x()}const re="pacom.web.sidebar.collapsed",Ve=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,de=[{id:"home",label:"空间总览",iconSvg:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/>'},{id:"analysis",label:"数据分析",iconSvg:'<path d="M4 19h16"/><path d="M7 16v-5"/><path d="M12 16V7"/><path d="M17 16v-8"/>'},{id:"alarms",label:"告警中心",iconSvg:'<path d="M12 4 3 19h18L12 4Z"/><path d="M12 10v4"/><path d="M12 17h.01"/>'},{id:"scenes",label:"智能策略",iconSvg:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3"/>'},{id:"settings",label:"运行设置",iconSvg:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2.5"/><circle cx="15" cy="17" r="2.5"/>'},{id:"deployment",label:"系统部署",iconSvg:'<rect x="3" y="4" width="7" height="6" rx="1.5"/><rect x="14" y="4" width="7" height="6" rx="1.5"/><rect x="8.5" y="14" width="7" height="6" rx="1.5"/><path d="M6.5 10v2h11v-2M12 12v2"/>'}],le={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"运行设置",deployment:"系统部署",account:"机构与账户"};function pe(){const t=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return t in le?t:"home"}function K(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function Ne(t,e,s,a){t.classList.remove("bare-login");let o=s,l=pe(),$=localStorage.getItem(re)==="1",I=!1,v=!1,C="";const S=e.mode==="demo"&&typeof e.switchDemoRole=="function";function x(){const L=C.trim(),D=L?de.filter(h=>h.label.includes(L)):de;return D.length?D.map(h=>`
        ${!L&&h.id==="settings"?'<div class="pacom-nav-divider" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${h.id}" aria-current="${l===h.id?"page":"false"}" title="${h.label}">
          <svg class="pacom-nav-icon" viewBox="0 0 24 24" aria-hidden="true">${h.iconSvg}</svg>
          <span class="pacom-nav-label">${h.label}</span>
        </button>`).join(""):'<div class="pacom-nav-empty">没有匹配的工作区</div>'}function g(){if(!v)return"";const L=o.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${$?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab.jpg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${K(o.roleLabel)}${S?" · 演示":""}</small>
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
          <span class="pacom-pop-avatar" aria-hidden="true">${K(L)}</span>
          <span class="pacom-pop-text">
            <b>${K(o.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${S?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">演示角色切换（RBAC 权限预览）</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(U).map(D=>{const h=U[D],p=D===o.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${p}" data-pop-role="${D}">
                      <span class="pacom-pop-text">
                        <b>${K(h.roleLabel)}</b>
                        <small>${K(h.displayName)}</small>
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
    `}async function j(L){switch(document.title=`${le[l]} · PACOM Station`,l){case"home":await Pe(L,e,o);return;case"analysis":await De(L,e);return;case"alarms":await Le(L,e,o);return;case"scenes":await Be(L,e,o);return;case"settings":await _e(L,e,o);return;case"deployment":await Oe(L,e,o);return;case"account":await Ee(L,e,o,D=>{o=D,r(!0)},A);return}}async function A(){v=!1,I=!1,T();try{await e.logout()}finally{window.location.hash="#login",a()}}function c(){const L=t.querySelector('[data-role="nav-list"]');L&&(L.innerHTML=x(),N())}function E(){t.querySelector('[data-role="org-popover"]')?.remove();const L=t.querySelector('[data-role="org-menu-btn"]');if(L&&L.setAttribute("aria-expanded",String(v)),!v)return;const D=document.createElement("div");D.innerHTML=g().trim();const h=D.firstElementChild;h&&(t.appendChild(h),V())}function N(){t.querySelectorAll("[data-route]").forEach(L=>{L.addEventListener("click",()=>{const D=L.dataset.route;D===l&&!I||(l=D,I=!1,v=!1,window.location.hash=`#${l}`,r(!0))})})}function V(){t.querySelectorAll('[data-pop-act="go-account"]').forEach(L=>{L.addEventListener("click",()=>{v=!1,I=!1,l="account",window.location.hash="#account",r(!0)})}),t.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{A()}),t.querySelectorAll("[data-pop-role]").forEach(L=>{L.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const D=L.dataset.popRole;v=!1,I=!1,o=await e.switchDemoRole(D),await r(!0)})})}async function r(L){const D=t.querySelector('[data-role="main-stage"]');if(!L&&D){const p=t.querySelector(".pacom-nav-rail");p&&(p.classList.toggle("is-collapsed",$),p.classList.toggle("is-mobile-open",I));const P=t.querySelector('[data-role="mobile-scrim"]');P&&P.classList.toggle("is-open",I),E();return}t.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
          <h1 class="pacom-mobile-title">${le[l]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${K(o.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${I?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${$?"is-collapsed":""} ${I?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${Ve}</div>
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
            <input class="pacom-nav-search" data-role="nav-search" type="search" placeholder="搜索工作区…" value="${K(C)}" aria-label="搜索工作区" />
          </div>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${x()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${l==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${v}" title="广州国家实验室 · ${K(o.displayName)}">
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
    `,t.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{$=!$,v=!1,localStorage.setItem(re,$?"1":"0");const p=t.querySelector(".pacom-nav-rail"),P=t.querySelector('[data-role="toggle-sidebar"]');p&&p.classList.toggle("is-collapsed",$),P&&(P.title=$?"展开侧栏":"收起侧栏",P.setAttribute("aria-label",P.title),P.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${$?'<path d="m9 6 6 6-6 6"/>':'<path d="m15 6-6 6 6 6"/>'}</svg>`),E()}),t.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{I=!I,r(!1)}),t.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{I=!1,v=!1,r(!1)}),t.querySelector('[data-role="nav-search"]')?.addEventListener("input",p=>{C=p.currentTarget.value,c()}),t.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",p=>{p.stopPropagation(),v=!v,E()}),N(),E();const h=t.querySelector('[data-role="main-stage"]');h&&await j(h)}const n=L=>{if(!v)return;const D=L.target;D?.closest('[data-role="org-popover"]')||D?.closest('[data-role="org-menu-btn"]')||(v=!1,E())},q=L=>{L.key==="Escape"&&(v?(v=!1,E()):I&&(I=!1,r(!1)))},m=()=>{const L=pe();L!==l&&(l=L,v=!1,I=!1,r(!0))};function T(){document.removeEventListener("click",n),document.removeEventListener("keydown",q),window.removeEventListener("hashchange",m)}document.addEventListener("click",n),document.addEventListener("keydown",q),window.addEventListener("hashchange",m),await r(!0)}const We=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Ze='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',Ue='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',J='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>',ue={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},He={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function Ge(t){const e=t.replace(/\D/g,"");return e.length===11?`${e.slice(0,3)} •••• ${e.slice(7)}`:t}function Z(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ve(t,e,s){t.classList.add("bare-login"),document.title="登录 · PACOM Station";let a=!1,o=!1,l="",$="",I="",v="",C=!1,S={},x="",g=!1,j="",A=0,c=null,E=null,N="privacy",V="",r="",n="";const q=e.mode==="demo"&&typeof e.switchDemoRole=="function";function m(){c!==null&&(window.clearInterval(c),c=null),t.classList.remove("bare-login")}function T(){A=60,c!==null&&window.clearInterval(c),c=window.setInterval(()=>{A-=1,A<=0&&(A=0,c!==null&&(window.clearInterval(c),c=null));const p=t.querySelector('[data-act="send-sms"]');p&&(p.disabled=A>0,p.textContent=A>0?`${A} 秒后重发`:j?"重新获取":"获取验证码")},1e3)}function L(){if(!E)return"";if(E==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${J}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${Z(r)}" />
                  </div>
                </div>
                ${n?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${Z(n)}</p>`:""}
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary">发送验证码</button>
            </div>
          </section>
        </div>
      `;if(E==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${J}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                ${q?"当前为离线演示环境，您可直接通过登录页的「演示角色快速体验」切换 5 类内置角色进入 E7F 工作区。":"正式接入账户服务后，将在此开放自助注册与机构邀请码加入流程。"}
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
              ${q?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">选择演示角色</button>':""}
            </div>
          </section>
        </div>
      `;if(E==="legal"){const p=ue[N],P=["privacy","terms","service"].map(W=>`<button type="button" role="tab" aria-selected="${N===W}" class="au-legal-tab ${N===W?"is-active":""}" data-act="switch-legal" data-tab="${W}">${ue[W].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${J}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${P}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${p.items.map(W=>`<li>${Z(W)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return E==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${J}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${V||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:E==="demoRoles"&&q?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择演示角色</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${J}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(U).map(p=>{const P=U[p];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${p}">
                        <div>
                          <b>${Z(P.roleLabel)} · ${Z(P.displayName)}</b>
                          <small>${Z(He[p])}</small>
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
      `:""}function D(){const p=a?`
        <div class="au-field ${S.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Z(I)}" aria-invalid="${S.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${A>0?"disabled":""}>
              ${A>0?`${A} 秒后重发`:j?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${Z(S.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${j?`验证码已发送至 ${Z(Ge(j))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${S.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Z(l)}" aria-invalid="${S.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${Z(S.id??"")}</p>
        </div>
      `,P=a?`
        <div class="au-field ${S.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Z(v)}" aria-invalid="${S.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${Z(S.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${S.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${o?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Z($)}" aria-invalid="${S.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${o?"隐藏密码":"显示密码"}">
              ${o?Ue:Ze}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${Z(S.pwd??"")}</p>
        </div>
      `;t.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${We}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${g?"disabled":""}>
                  ${p}
                  ${P}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${x?"":"hidden"}>${Z(x)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${C?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${g?"disabled":""}>
                    ${g?"正在登录…":"登录"}
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
                ${q?`<div class="au-demo-bar">
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
      ${L()}
    `,h()}function h(){const p=t.querySelector("#au-id"),P=t.querySelector("#au-pwd"),W=t.querySelector("#au-sphone"),G=t.querySelector("#au-scode"),X=t.querySelector('input[name="keep"]');p?.addEventListener("input",()=>{if(l=p.value,S.id||x){delete S.id,x="",p.closest(".au-field")?.classList.remove("bad");const z=t.querySelector("#au-id-err");z&&(z.textContent="");const R=t.querySelector("#au-login-ferr");R&&(R.hidden=!0)}}),P?.addEventListener("input",()=>{if($=P.value,S.pwd||x){delete S.pwd,x="",P.closest(".au-field")?.classList.remove("bad");const z=t.querySelector("#au-pwd-err");z&&(z.textContent="");const R=t.querySelector("#au-login-ferr");R&&(R.hidden=!0)}}),W?.addEventListener("input",()=>{if(I=W.value,S.sphone||x){delete S.sphone,x="",W.closest(".au-field")?.classList.remove("bad");const z=t.querySelector("#au-sphone-err");z&&(z.textContent="");const R=t.querySelector("#au-login-ferr");R&&(R.hidden=!0)}}),G?.addEventListener("input",()=>{if(v=G.value.replace(/\D/g,"").slice(0,6),G.value=v,S.scode||x){delete S.scode,x="",G.closest(".au-field")?.classList.remove("bad");const z=t.querySelector("#au-scode-err");z&&(z.textContent="");const R=t.querySelector("#au-login-ferr");R&&(R.hidden=!0)}}),X?.addEventListener("change",()=>{C=X.checked}),t.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{o=!o,D(),t.querySelector("#au-pwd")?.focus()}),t.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{a=!a,S={},x="",D(),t.querySelector(a?"#au-sphone":"#au-id")?.focus()}),t.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const z=I.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(z)){S={sphone:"请输入有效的手机号码"},D(),t.querySelector("#au-sphone")?.focus();return}S={},j=z,T(),D(),t.querySelector("#au-scode")?.focus()}),t.querySelector('form[data-form="login"]')?.addEventListener("submit",async z=>{if(z.preventDefault(),!g){if(S={},x="",a?(I.trim()||(S.sphone="请输入手机号码"),/^\d{6}$/.test(v.trim())||(S.scode="请输入 6 位验证码")):(l.trim()||(S.id="请输入电子邮箱或手机号码"),$||(S.pwd="请输入密码")),Object.keys(S).length>0){D();const R=Object.keys(S)[0];t.querySelector(`#au-${R}`)?.focus();return}g=!0,D();try{const R=await e.login({account:(a?I:l).trim(),password:a?v.trim():$});m(),s(R)}catch(R){g=!1,x=R instanceof Error?R.message:"账户或密码不正确",D()}}}),t.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{r=l.trim(),n="",E="reset",D(),t.querySelector("#au-rs-id")?.focus()}),t.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{E="register",D()}),t.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{E="legal",D()}),t.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{V="",E="contact",D()}),t.querySelectorAll('[data-act="open-demo-roles"]').forEach(z=>{z.addEventListener("click",()=>{E="demoRoles",D()})}),t.querySelectorAll('[data-act="close-modal"]').forEach(z=>{z.addEventListener("click",()=>{E=null,D()})}),t.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",z=>{z.target===z.currentTarget&&(E=null,D())}),t.querySelectorAll('[data-act="switch-legal"]').forEach(z=>{z.addEventListener("click",()=>{const R=z.dataset.tab;R&&(N=R,D())})}),t.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),V="已复制"}catch{V="support@pacom.cn"}D()}),t.querySelector("#au-reset-form")?.addEventListener("submit",z=>{z.preventDefault(),r=t.querySelector("#au-rs-id")?.value.trim()??"",r?q?n="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":n="如账户存在，验证码已发送。":n="请输入电子邮箱或手机号码",D()}),t.querySelectorAll('[data-act="pick-demo-role"]').forEach(z=>{z.addEventListener("click",async()=>{const R=z.dataset.roleId;if(!R||!e.switchDemoRole)return;const Q=await e.switchDemoRole(R);m(),s(Q)})})}D()}async function Ye(){const t=document.getElementById("app");if(t)try{const e=xe(),s=await e.getSession(),a=async o=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await Ne(t,e,o,()=>{ve(t,e,l=>{a(l)})})};if(!s||window.location.hash==="#login"){ve(t,e,o=>{a(o)});return}await a(s)}catch(e){t.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(e)}</div></div>`}}Ye();
//# sourceMappingURL=index-B10KTX2E.js.map
