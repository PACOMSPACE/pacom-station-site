(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const $ of l.addedNodes)$.tagName==="LINK"&&$.rel==="modulepreload"&&a($)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}})();const n={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},U={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[n.projectId,n.project1Id],allowedBuildingIds:[n.buildingId,n.buildingFId],allowedFloorIds:[n.lockedFloor8Id,n.floorId,n.lockedFloor6Id],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[n.projectId],allowedBuildingIds:[n.buildingId,n.buildingFId],allowedFloorIds:[n.lockedFloor8Id,n.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[n.projectId],allowedBuildingIds:[n.buildingId],allowedFloorIds:[n.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[n.projectId],allowedBuildingIds:[n.buildingId],allowedFloorIds:[n.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[n.projectId],allowedBuildingIds:[n.buildingId],allowedFloorIds:[n.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},te="pacom.web.demo.role";class xe{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){const e=sessionStorage.getItem(te);e&&U[e]&&(this.activeSession=structuredClone(U[e]));const s=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:n.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:s,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:n.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:n.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:n.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:s,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:s,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:s,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:n.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:s,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:n.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:s,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:s,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:s,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:s},{id:"conn-e7f-dali",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:s},{id:"conn-e7f-modbus",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:n.projectId,floorId:n.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:n.projectId,floorId:n.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:n.projectId,floorId:n.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:n.projectId,floorId:n.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:n.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:n.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:n.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:s,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:n.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:n.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:n.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:n.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(U).map((a,o)=>({userId:a.userId,displayName:a.displayName,email:`${a.role.replaceAll("_",".")}@pacom.local`,role:a.role,roleLabel:a.roleLabel,scopeSummary:a.scope.allowedZoneIds?.length?`E栋 7F（${a.scope.allowedZoneIds.length} 个我的区域）`:`${a.scope.allowedProjectIds.length} 项目 / ${a.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:o===0?s:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(e,s,a,o,l){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:s,endpoint:a,request:l,response:o}),this.traces.length>40&&this.traces.pop()}pushAudit(e,s,a,o){const l=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:l?.displayName??"anonymous",role:l?.role??"member",action:e,target:s,result:a,detail:o})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){if(!e.account.trim()||!e.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const s=e.account.includes("admin")?"org_admin":e.account.includes("eng")?"commissioning_engineer":e.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(U[s]),sessionStorage.setItem(te,s),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:e.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(te),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(e){return this.activeSession=structuredClone(U[e]),sessionStorage.setItem(te,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}async getSpatialTree(){const e=this.requireSession(),s=[{id:n.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"},{id:n.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"}],a=[{id:n.buildingId,projectId:n.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.png"},{id:n.buildingFId,projectId:n.projectId,name:"F栋",aboveFloors:12,belowFloors:2,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.png"}],o={projects:s.filter(l=>e.scope.allowedProjectIds.includes(l.id)),buildings:a.filter(l=>e.scope.allowedBuildingIds.includes(l.id)),floors:[{id:n.lockedFloor8Id,buildingId:n.buildingId,kind:"above",level:8,name:"8F",plan:null},{id:n.floorId,buildingId:n.buildingId,kind:"above",level:7,name:"7F",areaSqm:1383.1,plan:{floorId:n.floorId,imageUrl:"./media/7F.webp",planVersion:1,updatedAt:"2026-11-22T00:00:00Z"}},{id:n.lockedFloor6Id,buildingId:n.buildingId,kind:"above",level:6,name:"6F",plan:null}],zones:[{id:"zone-e7f-lab-east",floorId:n.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:n.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:n.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:n.floorId,name:"核心走廊与弱电井",category:"corridor"}]};return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:o.projects.length,buildings:o.buildings.length,floors:o.floors.length}),o}async getFloorDevices(e){const s=this.requireSession();if(!s.scope.allowedFloorIds.includes(e)){const o={code:"FORBIDDEN",status:403,message:`当前角色「${s.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,o),this.pushAudit("floor.read",e,"denied",o.message),new Error(`403 FORBIDDEN: ${o.message}`)}if(e!==n.floorId)return[];let a=structuredClone(this.devices);return s.scope.allowedZoneIds?.length&&(a=a.filter(o=>o.logicalZoneId&&s.scope.allowedZoneIds.includes(o.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:a.length}),a}async dispatchControlBatch(e){const s=this.requireSession();if(!s.scope.canControlDevices||!s.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权下发控制指令`);const a=`batch-e7f-${Date.now().toString(36)}`,o={batchId:a,floorId:e.floorId,createdBy:s.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(l=>({deviceId:l.deviceId,command:l.command,targetValue:l.targetValue,status:"queued"}))};return this.batches.set(a,o),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",o,e),this.pushAudit("control.dispatch",a,"success",`下发 ${e.targets.length} 台设备`),o.receipts.forEach((l,$)=>{const x=this.devices.find(v=>v.id===l.deviceId);setTimeout(()=>{l.status="dispatched",l.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:a,deviceId:l.deviceId,status:"dispatched",at:l.dispatchedAt})},280+$*120),setTimeout(()=>{const v=new Date().toISOString();!x||x.connectivity==="offline"?(l.status="timeout",l.errorCode="GATEWAY_READBACK_TIMEOUT",l.errorMessage="设备离线，网关未收到回读确认",l.verifiedAt=v):(l.status="verified_success",l.observedValue=l.targetValue,l.verifiedAt=v,this.applyObservedTelemetry(x,l.command,l.targetValue,v)),this.emit({type:"control.receipt.updated",batchId:a,deviceId:l.deviceId,status:l.status,observedValue:l.observedValue,at:v})},900+$*220)}),structuredClone(o)}applyObservedTelemetry(e,s,a,o){s==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:a,collectedAt:o,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(a)>0,collectedAt:o,stale:!1})):(s==="lighting.power"||s==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:a,collectedAt:o,stale:!1}:s==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:a,collectedAt:o,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:o,values:{[s]:a}})}async getControlBatch(e){this.requireSession();const s=this.batches.get(e);if(!s)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(s)}async listAlarms(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==n.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,s){const a=this.requireSession();if(!a.scope.canManageAlarms){const l=`角色「${a.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",l),new Error(`403 FORBIDDEN: ${l}`)}const o=this.alarms.find(l=>l.id===e);if(!o)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return o.status="acknowledged",o.acknowledgedAt=new Date().toISOString(),o.acknowledgedBy=a.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,o,{note:s}),this.pushAudit("alarm.acknowledge",e,"success",s),this.emit({type:"alarm.changed",floorId:o.floorId,alarmId:e,status:"acknowledged",at:o.acknowledgedAt}),structuredClone(o)}async listWorkOrders(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==n.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建工单`);const a=new Date().toISOString(),o={id:`wo-e7f-${Date.now().toString(36)}`,projectId:n.projectId,buildingId:n.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:a,updatedAt:a};if(this.workOrders.unshift(o),e.alarmId){const l=this.alarms.find($=>$.id===e.alarmId);l&&(l.workOrderId=o.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",o,e),this.pushAudit("work_order.create",o.id,"success",o.title),structuredClone(o)}async updateWorkOrderStatus(e,s){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权流转工单`);const o=this.workOrders.find(l=>l.id===e);if(!o)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return o.status=s,o.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,o,{status:s}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${s}`),structuredClone(o)}async updateDevicePlanPoint(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权编辑图纸标点`);const a=this.devices.find(o=>o.id===e.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(a.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${a.version}，请刷新后重试`);return a.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},a.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,a,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${a.planPoint.x}, ${a.planPoint.y})`),structuredClone(a)}async updateDeviceHardwareBinding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改硬件绑定`);const a=this.devices.find(l=>l.id===e.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(a.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${a.version}）`);const o=new Date().toISOString();return a.physicalInstalled=e.physicalInstalled,a.physicalVerifiedAt=e.physicalInstalled?o:null,a.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:o,boundBy:s.displayName},a.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,a,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(a)}async listConnections(e){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,s){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权冻结交付批次`);const o=this.devices.filter($=>$.physicalInstalled&&$.hardwareBinding).length,l={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:n.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:o,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:a.displayName,note:s||"例行交付基线冻结"};return this.deliveryBatches.unshift(l),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,l,{note:s}),this.pushAudit("delivery.freeze",l.id,"success",`${o}/${this.devices.length} 已现场核验`),structuredClone(l)}async getAnalysisReport(e,s,a){this.requireSession();const o=s==="today"?1:s==="7d"?7:30,$={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*o)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*o).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(C=>C.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*o).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*o).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*o).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],x=s==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],v={category:e,range:s,scopeId:a,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:$.kpis,unit:$.unit,series:$.base.map((C,w)=>({label:x[w],value:Math.round(C*(e==="energy"||e==="carbon"?o/2+.5:1)),baseline:Math.round(C*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:$.base[3],unit:$.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:$.base[4],unit:$.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:$.base[1],unit:$.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${s}&scopeId=${a}`,{kpis:v.kpis.length}),v}async listScenes(e){return this.requireSession(),structuredClone(this.scenes)}async createScene(e){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const a={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(a),this.record("REST","createScene","POST /api/v1/scenes",a,e),this.pushAudit("scene.create",a.id,"success",a.name),structuredClone(a)}async executeScene(e){const s=this.scenes.find(o=>o.id===e);if(!s)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const a=await this.dispatchControlBatch({floorId:s.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:s.actions,reason:`触发场景：${s.name}`});return s.lastExecutedAt=new Date().toISOString(),s.lastBatchId=a.batchId,a}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:n.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,s,a){this.requireSession();const o=a>=this.calendar.nightGuardStart?`下班时间 ${a} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,l=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${s} - ${a}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${s} (-30m) ~ ${a} (+30m)`,conflictWarning:o},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:o}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",l,{workdayStart:s,workdayEnd:a}),l}async saveWorkCalendar(e,s,a,o){const l=this.requireSession();if(!l.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权修改运行日历`);if(this.calendar.version!==o)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(s>=a)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:s,workdayEnd:a,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:s,workdayEnd:a,expectedVersion:o}),this.pushAudit("settings.calendar",n.projectId,"success",`${s}-${a}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,s,a){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权启停运行规则`);const l=this.rules.find($=>$.id===e);if(!l)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(l.version!==a)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${l.version}）`);return l.enabled=s,l.version+=1,l.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,l,{enabled:s,expectedVersion:a}),this.pushAudit("settings.rule_toggle",e,"success",s?"启用":"停用"),structuredClone(l)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,s){const a=this.requireSession();if(a.role!=="org_admin"&&a.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const o=U[s],l={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:s,roleLabel:o.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(l),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",l,{email:e,role:s}),this.pushAudit("org.invite",e,"success",o.roleLabel),structuredClone(l)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(e,s){return e!==n.floorId?()=>{}:(this.listeners.add(s),()=>{this.listeners.delete(s)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${n.floorId}`,e),this.listeners.forEach(s=>s(e))}}function ke(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new xe}async function Ee(t,e,s,a,o){let l="profile",$=await e.listOrgMembers(),x=await e.listAuditLogs(),v="",C="all",w="all",S="all",j=!1,L=!1,E="";async function r(){[$,x]=await Promise.all([e.listOrgMembers(),e.listAuditLogs()]),c()}function c(){const R=e.mode==="demo"&&typeof e.switchDemoRole=="function",V=v.trim().toLowerCase(),d=$.filter(g=>C!=="all"&&g.role!==C?!1:V?`${g.displayName} ${g.email} ${g.roleLabel} ${g.scopeSummary}`.toLowerCase().includes(V):!0),i=x.filter(g=>{if(w==="success"&&g.result!=="success"||w==="denied"&&g.result==="success")return!1;if(S!=="all"){const T=`${g.action} ${g.target}`.toLowerCase();if(S==="control"&&!T.includes("control")&&!T.includes("scene")&&!T.includes("控制")||S==="alarm"&&!T.includes("alarm")&&!T.includes("work")&&!T.includes("告警")||S==="deploy"&&!T.includes("deploy")&&!T.includes("plan")&&!T.includes("hardware")&&!T.includes("部署"))return!1}return!0});t.innerHTML=`
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

        ${E?`<div class="pacom-alert-banner">${E}</div>`:""}

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
                <span class="pacom-badge pacom-badge--neutral">${x.length}</span>
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

                ${R?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">多角色权限预览切换</h2>
                        <span class="pacom-badge pacom-badge--neutral">仅 Demo 预览可用</span>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(U).map(g=>{const T=U[g];return`
                              <button class="pacom-role-card ${g===s.role?"is-active":""}" data-switch-role="${g}">
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
                      <button class="pacom-btn" data-copy-session="1">${L?"已复制":"复制 JSON"}</button>
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
                  ${j?`
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
                      <span class="pacom-row-sub">共 ${d.length} 人</span>
                    </div>
                    <div class="lov-table-card">
                      <div class="lov-table-toolbar">
                        <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                          <input class="pacom-input" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${v}" />
                          <select class="pacom-select" data-role-filter>
                            <option value="all" ${C==="all"?"selected":""}>全部角色</option>
                            ${Object.keys(U).map(g=>`<option value="${g}" ${C===g?"selected":""}>${U[g].roleLabel}</option>`).join("")}
                          </select>
                        </div>
                        <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                          ${j?"收起邀请":"+ 邀请成员"}
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
                            ${d.map(g=>`
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
                          <option value="all" ${S==="all"?"selected":""}>全部操作类型</option>
                          <option value="control" ${S==="control"?"selected":""}>设备控制与场景</option>
                          <option value="alarm" ${S==="alarm"?"selected":""}>告警与工单处置</option>
                          <option value="deploy" ${S==="deploy"?"selected":""}>系统部署与点位</option>
                        </select>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${w==="all"}" data-audit-filter="all">全部（${x.length}）</button>
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
                            ${i.map(g=>`
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
    `,t.querySelectorAll("[data-atab]").forEach(g=>{g.addEventListener("click",()=>{l=g.dataset.atab,E="",c()})}),t.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",o()}),t.querySelector("[data-copy-session]")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(s,null,2)),L=!0,c(),window.setTimeout(()=>{L=!1,c()},1600)}catch{}}),t.querySelectorAll("[data-switch-role]").forEach(g=>{g.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const T=await e.switchDemoRole(g.dataset.switchRole);a(T)})}),t.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{j=!j,c()}),t.querySelector("[data-member-search]")?.addEventListener("input",g=>{const T=g.currentTarget,A=T.selectionStart??T.value.length;v=T.value,c();const O=t.querySelector("[data-member-search]");O&&(O.focus(),O.setSelectionRange(A,A))}),t.querySelector("[data-role-filter]")?.addEventListener("change",g=>{C=g.currentTarget.value,c()}),t.querySelectorAll("[data-audit-filter]").forEach(g=>{g.addEventListener("click",()=>{w=g.dataset.auditFilter??"all",c()})}),t.querySelector("[data-audit-cat]")?.addEventListener("change",g=>{S=g.currentTarget.value??"all",c()}),t.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async g=>{g.preventDefault(),E="";const T=new FormData(g.currentTarget);try{await e.inviteOrgMember(String(T.get("email")??""),String(T.get("role"))),j=!1,await r()}catch(A){E=A instanceof Error?A.message:String(A),c()}})}c()}const Ae={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},Le={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}};async function je(t,e,s){let a=[],o=[],l="alarms",$="all",x=!1,v="",C=null;const w=new Set,S=new Set;let j="",L="";async function E(){[a,o]=await Promise.all([e.listAlarms(n.floorId),e.listWorkOrders(n.floorId)]),r()}function r(){const c=a.filter(y=>y.status==="active"&&!w.has(y.id)),R=o.filter(y=>y.status==="open"||y.status==="assigned"||y.status==="in_progress"),V=a.filter(y=>y.status!=="active").length+S.size,d=w.size,i=v.trim().toLowerCase(),M=a.filter(y=>{const u=w.has(y.id);if($==="snoozed"){if(!u)return!1}else if($==="active"){if(y.status!=="active"||u)return!1}else if($==="acknowledged"){if(y.status!=="acknowledged")return!1}else if(u)return!1;return i?`${y.title} ${y.message} ${y.deviceId}`.toLowerCase().includes(i):!0}),g=new Map;for(const y of M){const u=x?y.deviceId:y.id,z=g.get(u)??[];z.push(y),g.set(u,z)}const T=Array.from(g.values()),A=o.filter(y=>i?`${y.title} ${y.description} ${y.id}`.toLowerCase().includes(i):!0);t.innerHTML=`
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
              <button class="pacom-tab" role="tab" aria-selected="${l==="alarms"&&$==="all"}" data-pill="all">全部告警（${a.length-d}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${l==="alarms"&&$==="active"}" data-pill="active">待处理（${c.length}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${l==="alarms"&&$==="acknowledged"}" data-pill="acknowledged">已确认（${a.filter(y=>y.status==="acknowledged").length}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${l==="alarms"&&$==="snoozed"}" data-pill="snoozed">已忽略 24h（${d}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${l==="workorders"}" data-pill="workorders">运维工单（${o.length}）</button>
            </div>
            ${l==="alarms"?`
                <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                  <span>按设备根因归并</span>
                  <button type="button" class="lov-switch" role="switch" aria-checked="${x}" data-toggle-group="1" aria-label="按设备根因归并">
                    <span class="lov-switch-thumb"></span>
                  </button>
                </label>`:""}
          </div>
        </header>

        <div class="pacom-content-page" style="padding:4px 0 24px;">
          <div class="lov-kpi-strip" role="region" aria-label="告警闭环指标">
            <div class="lov-kpi-cell">
              <span class="lov-kpi-label">待处理告警</span>
              <div class="lov-kpi-value">${c.length}<span class="lov-kpi-unit">条</span></div>
              <span class="lov-kpi-delta">实时遥测驱动状态</span>
            </div>
            <div class="lov-kpi-cell">
              <span class="lov-kpi-label">处理中工单</span>
              <div class="lov-kpi-value">${R.length}<span class="lov-kpi-unit">单</span></div>
              <span class="lov-kpi-delta">已指派或现场处置</span>
            </div>
            <div class="lov-kpi-cell">
              <span class="lov-kpi-label">已确认 / 闭环验证</span>
              <div class="lov-kpi-value">${V}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">24h 无复发即计入有效</span>
            </div>
            <div class="lov-kpi-cell">
              <span class="lov-kpi-label">限时忽略（降噪）</span>
              <div class="lov-kpi-value">${d}<span class="lov-kpi-unit">条</span></div>
              <span class="lov-kpi-delta">到期自动恢复监控</span>
            </div>
          </div>

          ${j?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${j}</span></div>`:""}
          ${L?`<div class="pacom-alert-banner">${L}</div>`:""}

          ${l==="alarms"?`
              <section class="lov-table-card">
                <div class="lov-table-toolbar">
                  <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                    <input class="pacom-input" style="max-width:300px;" data-alarm-search placeholder="搜索告警标题、设备编号或描述…" value="${v}" />
                  </div>
                  <span class="pacom-row-sub">展示 ${T.length} 项${x?"（已按设备根因归并）":""}</span>
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
                          ${T.map(y=>{const u=y[0],z=Le[u.severity]??{label:u.severity,cls:"pacom-badge--neutral"},W=C===u.id,G=w.has(u.id);return`
                                <tr>
                                  <td><span class="pacom-badge ${z.cls}">${z.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                      <span>${u.title}</span>
                                      ${y.length>1?`<span class="pacom-badge pacom-badge--accent">归并 ${y.length} 条</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${u.message}</div>
                                  </td>
                                  <td><code style="font-size:12px;">${u.deviceId}</code></td>
                                  <td>
                                    <span class="pacom-badge ${G?"pacom-badge--neutral":u.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${G?"已忽略 24h":u.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${G?`<button class="pacom-btn" data-unsnooze="${u.id}">恢复监控</button>`:`
                                            ${u.status==="active"?`<button class="pacom-btn" data-mark-actioned="${u.id}" title="现场自行调整后一键闭环">标记已处置</button>`:""}
                                            ${u.workOrderId?`<span class="pacom-badge pacom-badge--accent">${u.workOrderId}</span>`:`<button class="pacom-btn pacom-btn--primary" data-to-wo="${u.id}">转工单</button>`}
                                            ${u.status==="active"?`<button class="pacom-btn pacom-btn--ghost" data-snooze="${u.id}">忽略 24h</button>`:""}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${u.id}">${W?"收起":"详情"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${W?`
                                    <tr class="lov-table-detail-row">
                                      <td colspan="5">
                                        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                                          <div class="pacom-kv-grid" style="grid-template-columns:84px 1fr 84px 1fr; flex:1; min-width:300px;">
                                            <span class="pacom-kv-label">告警编号</span><span><code>${u.id}</code></span>
                                            <span class="pacom-kv-label">触发时间</span><span>${u.triggeredAt?u.triggeredAt.slice(0,19).replace("T"," "):"-"}</span>
                                            <span class="pacom-kv-label">楼层范围</span><span>${u.floorId}</span>
                                            <span class="pacom-kv-label">关联工单</span><span>${u.workOrderId??"尚未创建"}</span>
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
                  <span class="pacom-row-sub">共 ${A.length} 条工单</span>
                </div>
                ${A.length===0?'<div class="lov-empty-state"><strong>暂无运维工单</strong><span>可在告警队列中一键将告警转为运维工单。</span></div>':`
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
                          ${A.map(y=>`
                              <tr>
                                <td><code style="font-size:12px;">${y.id}</code></td>
                                <td>
                                  <div style="font-weight:500;">${y.title}</div>
                                  <div class="pacom-row-sub">${y.description}</div>
                                </td>
                                <td>
                                  <select class="pacom-select" data-wo-status="${y.id}">
                                    ${["open","assigned","in_progress","resolved","closed"].map(u=>`<option value="${u}" ${y.status===u?"selected":""}>${Ae[u]}</option>`).join("")}
                                  </select>
                                </td>
                              </tr>`).join("")}
                        </tbody>
                      </table>
                    </div>`}
              </section>`}
        </div>
      </div>
    `,t.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{j="",E()}),t.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{x=!x,r()}),t.querySelectorAll("[data-pill]").forEach(y=>{y.addEventListener("click",()=>{const u=y.dataset.pill;j="",u==="workorders"?l="workorders":(l="alarms",$=u??"all"),r()})}),t.querySelector("[data-alarm-search]")?.addEventListener("input",y=>{const u=y.currentTarget,z=u.selectionStart??u.value.length;v=u.value,r();const W=t.querySelector("[data-alarm-search]");W&&(W.focus(),W.setSelectionRange(z,z))}),t.querySelectorAll("[data-expand-alarm]").forEach(y=>{y.addEventListener("click",()=>{const u=y.dataset.expandAlarm??null;C=C===u?null:u,r()})}),t.querySelectorAll("[data-locate-home]").forEach(y=>{y.addEventListener("click",()=>{window.location.hash="#home"})}),t.querySelectorAll("[data-snooze]").forEach(y=>{y.addEventListener("click",()=>{const u=y.dataset.snooze;u&&(w.add(u),j="已将该告警限时忽略 24 小时，期间不再重复打扰，可在「已忽略 24h」页签随时恢复。",r())})}),t.querySelectorAll("[data-unsnooze]").forEach(y=>{y.addEventListener("click",()=>{const u=y.dataset.unsnooze;u&&(w.delete(u),j="已恢复该告警的实时监控。",r())})}),t.querySelectorAll("[data-mark-actioned]").forEach(y=>{y.addEventListener("click",async()=>{L="";const u=y.dataset.markActioned;try{await e.acknowledgeAlarm(u,"现场自处理完成（Mark Actioned）"),S.add(u),j="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await E()}catch(z){L=z instanceof Error?z.message:String(z),r()}})}),t.querySelectorAll("[data-to-wo]").forEach(y=>{y.addEventListener("click",async()=>{L="";const u=a.find(z=>z.id===y.dataset.toWo);if(u)try{await e.createWorkOrder({floorId:u.floorId,deviceId:u.deviceId,alarmId:u.id,title:`处置告警：${u.title}`,description:u.message}),j=`已将「${u.title}」转为运维工单。`,await E()}catch(z){L=z instanceof Error?z.message:String(z),r()}})}),t.querySelectorAll("[data-wo-status]").forEach(y=>{y.addEventListener("change",async()=>{L="";try{await e.updateWorkOrderStatus(y.dataset.woStatus,y.value),j="工单状态已更新并写入审计日志。",await E()}catch(u){L=u instanceof Error?u.message:String(u),await E()}})})}await E()}const ae=[{id:"energy",label:"能源",desc:"分项能耗与峰谷负荷趋势"},{id:"environment",label:"环境",desc:"温湿度、CO₂ 与洁净室舒适度"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与异常分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能基线对比"}],se=[{id:n.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:n.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:n.projectId,label:"广实2号园（全园区）",factor:18.2}],Ce={energy:{title:"分项能耗构成与节能估算",summary:"较目标基线节省约 ¥ 1,420 / 月，主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"舒适度达标构成",summary:"全天温湿度综合达标率 96.2%，CO₂ 浓度全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"CO₂ 优良时段（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}};function Oe(t){const e=Math.max(...t.series.map(S=>Math.max(S.value,S.baseline??0)),1),s=46,a=34,o=36,l=Math.max(t.series.length*(s+a)+o*2,620),$=220,x=178,v=138,C=[0,.25,.5,.75,1].map(S=>{const j=Math.round(x-S*v);return`<line x1="${o-8}" y1="${j}" x2="${l-18}" y2="${j}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${S===0?"0":"3 3"}" />`}).join(""),w=t.series.map((S,j)=>{const L=o+j*(s+a),E=Math.max(8,Math.round(S.value/e*v)),r=x-E,c=typeof S.baseline=="number"&&S.value>S.baseline*1.08,R=c?`<rect x="${L-8}" y="28" width="${s+16}" height="${x-28}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",V=typeof S.baseline=="number"?`<line x1="${L-5}" y1="${Math.round(x-S.baseline/e*v)}" x2="${L+s+5}" y2="${Math.round(x-S.baseline/e*v)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"";return`
        ${R}
        ${V}
        <rect x="${L}" y="${r}" width="${s}" height="${E}" rx="7" fill="${c?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        <text x="${L+s/2}" y="${r-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${S.value}</text>
        <text x="${L+s/2}" y="${x+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${S.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${l} ${$}" style="width:100%; height:228px; display:block;" role="img" aria-label="${t.category} 趋势图">
      ${C}
      ${w}
    </svg>
  `}function De(t){const e=[["时段",`数值 (${t.unit})`,`基线 (${t.unit})`].join(","),...t.series.map(l=>[l.label,String(l.value),l.baseline!==void 0?String(l.baseline):""].join(","))],s=new Blob([`\uFEFF${e.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(s),o=document.createElement("a");o.href=a,o.download=`pacom-${t.category}-${t.range}.csv`,o.click(),URL.revokeObjectURL(a)}async function Fe(t,e,s){let a="energy",o="7d",l=n.floorId,$="chart",x=!1,v=null;async function C(){v=await e.getAnalysisReport(a,o,n.floorId),w()}function w(){if(!v)return;const S=ae.find(c=>c.id===a)??ae[0],j=se.find(c=>c.id===l)??se[0],L=v.zoneBreakdown.filter(c=>c.status==="warning"),E=Ce[a],r=Math.max(...v.zoneBreakdown.map(c=>c.value),1);t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
              <h1 class="pacom-title">数据分析</h1>
              <div class="pacom-scope-pill" style="width:260px;" title="切换统计空间范围">
                <select data-scope-select aria-label="选择统计空间范围">
                  ${se.map(c=>`<option value="${c.id}" ${c.id===l?"selected":""}>${c.label}</option>`).join("")}
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
              <button class="pacom-btn ${x?"pacom-btn--primary":""}" data-toggle-canvas="1">${x?"关闭空间对照":"空间对照"}</button>
            </div>
          </div>

          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist" aria-label="分析维度">
              ${ae.map(c=>`<button class="pacom-tab" role="tab" aria-selected="${a===c.id}" data-cat="${c.id}">${c.label}</button>`).join("")}
            </div>
            <span class="pacom-row-sub">口径：${j.label} · 更新于 ${v.updatedAt.slice(5,16).replace("T"," ")}</span>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:4px 0 28px;">
          <div class="lov-kpi-strip" role="region" aria-label="核心统计指标">
            ${v.kpis.map(c=>`
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
                <h2 class="lov-section-title">${S?.label??"趋势"}趋势（${v.unit}）</h2>
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
              ${$==="chart"?Oe(v):`
                  <div class="lov-table-wrap">
                    <table class="lov-table">
                      <thead>
                        <tr>
                          <th>统计时段</th>
                          <th>实测值（${v.unit}）</th>
                          <th>基线参考</th>
                          <th>状态</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${v.series.map(c=>{const R=typeof c.baseline=="number"&&c.value>c.baseline*1.08;return`
                              <tr>
                                <td><strong>${c.label}</strong></td>
                                <td>${c.value}</td>
                                <td>${c.baseline??"-"}</td>
                                <td><span class="pacom-badge ${R?"pacom-badge--warning":"pacom-badge--online"}">${R?"超基线":"正常"}</span></td>
                              </tr>`}).join("")}
                      </tbody>
                    </table>
                  </div>`}
              <div class="lov-banner">
                <div class="lov-banner-text">
                  <span class="lov-banner-title">${S?.desc??"空间运行洞察"}</span>
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
                <span class="pacom-row-sub">${v.zoneBreakdown.length} 个功能区</span>
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
                      ${v.zoneBreakdown.map(c=>{const R=Math.max(8,Math.round(c.value/r*100));return`
                            <tr>
                              <td style="font-weight:500;">${c.zoneName.replace(/^7F\s*/,"")}</td>
                              <td style="width:140px;">
                                <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                  <div style="width:${R}%; height:100%; border-radius:999px; background:${c.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
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
                <h2 class="lov-section-title">${x?"E7F 空间对照预览":E.title}</h2>
                <span class="pacom-row-sub">${x?"与空间总览状态独立":"当前周期结构占比"}</span>
              </div>
              <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                ${x?'<img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':E.items.map(c=>`
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
    `,t.querySelectorAll("[data-cat]").forEach(c=>{c.addEventListener("click",()=>{a=c.dataset.cat,C()})}),t.querySelector("[data-scope-select]")?.addEventListener("change",c=>{l=c.currentTarget.value,w()}),t.querySelectorAll("[data-range]").forEach(c=>{c.addEventListener("click",()=>{o=c.dataset.range??"7d",C()})}),t.querySelectorAll("[data-chart-mode]").forEach(c=>{c.addEventListener("click",()=>{$=c.dataset.chartMode??"chart",w()})}),t.querySelector("[data-export-csv]")?.addEventListener("click",()=>{v&&De(v)}),t.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{x=!x,w()}),t.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"})}await C()}async function Te(t,e,s){let a="floorplan",o=await e.getSpatialTree(),l=[],$=[],x=[],v=null,C=!1,w=null,S="",j="";async function L(){j="";const[r,c,R,V]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(n.floorId).catch(()=>[]),e.listConnections(n.projectId),e.listDeliveryBatches(n.floorId)]);o=r,l=c,$=R,x=V,l.some(d=>d.id===v)||(v=l[0]?.id??null),E()}function E(){const r=l.find(i=>i.id===v)??null,c=s.scope.canEditDeployment,R=$.reduce((i,M)=>i+M.collectedPoints,0),V=$.reduce((i,M)=>i+M.calculatedPoints,0),d=$.filter(i=>i.status==="connected").length;t.innerHTML=`
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
              <button class="pacom-tab" role="tab" aria-selected="${a==="floorplan"}" data-dtab="floorplan">图纸标点与四态绑定</button>
              <button class="pacom-tab" role="tab" aria-selected="${a==="topology"}" data-dtab="topology">项目空间拓扑</button>
              <button class="pacom-tab" role="tab" aria-selected="${a==="connections"}" data-dtab="connections">系统接入（${$.length}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${a==="delivery"}" data-dtab="delivery">交付冻结（${x.length}）</button>
            </div>
          </div>
        </header>

        ${S?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${S}</span></div>`:""}
        ${j?`<div class="pacom-alert-banner">${j}</div>`:""}

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
                  ${l.map(i=>`
                      <div class="pacom-row ${i.id===v?"is-selected":""}" data-pick-dev="${i.id}">
                        <div style="min-width:0;">
                          <div class="pacom-row-title">${i.name}</div>
                          <div class="pacom-row-sub">v${i.version} · ${i.hardwareBinding?.protocol.toUpperCase()??"未绑定"} · ${i.physicalInstalled?"现场已确认":"待物理复核"}</div>
                        </div>
                        <span class="pacom-badge ${i.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">
                          ${i.planPoint?`${Math.round(i.planPoint.x*100)}%,${Math.round(i.planPoint.y*100)}%`:"未标点"}
                        </span>
                      </div>`).join("")}
                </div>
                ${r?`
                    <form data-role="binding-form" style="padding:14px 16px; border-top:var(--hw) solid var(--pacom-border-subtle); background:var(--pacom-surface-primary); display:flex; flex-direction:column; gap:10px;">
                      <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-weight:500; font-size:13px;">显式硬件绑定与现场复核</span>
                        <span class="pacom-badge pacom-badge--neutral">${r.id}</span>
                      </div>
                      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                        <select class="pacom-select" name="protocol">
                          ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(i=>`<option value="${i}" ${r.hardwareBinding?.protocol===i?"selected":""}>${i.toUpperCase()}</option>`).join("")}
                        </select>
                        <input class="pacom-input" name="networkAddress" placeholder="网络地址/主题" value="${r.hardwareBinding?.networkAddress??""}" />
                      </div>
                      <div style="display:grid; grid-template-columns:1fr auto; gap:8px; align-items:center;">
                        <input class="pacom-input" name="portOrChannel" placeholder="端口/回路" value="${r.hardwareBinding?.portOrChannel??""}" />
                        <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; cursor:pointer;">
                          <input type="checkbox" name="physicalInstalled" ${r.physicalInstalled?"checked":""} />
                          现场物理已复核
                        </label>
                      </div>
                      <div style="display:flex; gap:8px; flex-wrap:wrap;">
                        <button class="pacom-btn" type="button" data-toggle-place="1">${C?"取消点图更新":"点图更新坐标"}</button>
                        <button class="pacom-btn" type="button" data-ftt-test="1" title="远程验证指令下发、状态回读并自动恢复工况">单机回读自检</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit" style="flex:1;">保存硬件绑定（v${r.version}）</button>
                      </div>
                    </form>`:""}
              </aside>
              <div class="pacom-splitter"></div>
              <main class="pacom-right-pane">
                <div class="pacom-canvas-stage" data-role="deploy-stage" style="cursor:${C?"crosshair":"default"};">
                  <div class="pacom-canvas-viewport">
                    <div class="pacom-plan-wrap" data-role="deploy-plan">
                      <img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 部署平面图" />
                      ${l.filter(i=>i.planPoint).map(i=>`
                          <button class="pacom-pin ${i.id===v?"is-selected":""} ${i.connectivity==="offline"?"pacom-pin--offline":""}"
                            style="left:${(i.planPoint.x*100).toFixed(2)}%; top:${(i.planPoint.y*100).toFixed(2)}%;"
                            data-pick-dev="${i.id}">
                            <span>${i.name.slice(0,7)}</span>
                          </button>`).join("")}
                    </div>
                  </div>
                  ${C&&r?`<div style="position:absolute; top:16px; left:16px; z-index:8;" class="pacom-badge pacom-badge--accent">标点模式：点击图纸任意位置更新「${r.name}」的 2D 坐标（不改动硬件绑定）</div>`:""}
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
                    ${o.projects.map(i=>{const M=o.buildings.filter(g=>g.projectId===i.id);return`
                          <div class="pacom-card" style="padding:16px; gap:10px;">
                            <img src="${i.imageUrl??"./media/gzlab.jpg"}" alt="${i.name}" style="width:100%; height:128px; object-fit:cover; border-radius:10px;" />
                            <div>
                              <strong style="font-size:15px; font-weight:500;">${i.name}</strong>
                              <div class="pacom-row-sub">${i.city??""} ${i.address??""} · ${M.length} 栋授权楼宇</div>
                            </div>
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              ${M.map(g=>`
                                  <div class="pacom-receipt-item">
                                    <span><strong>${g.name}</strong> · 地上 ${g.aboveFloors}F / ${g.areaSqm??"-"} m²</span>
                                    <span class="pacom-badge ${g.id===n.buildingId?"pacom-badge--accent":"pacom-badge--neutral"}">${g.id===n.buildingId?"含 E7F":"对照"}</span>
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
                      <div class="lov-kpi-value">${d}<span class="lov-kpi-unit">/ ${$.length}</span></div>
                      <span class="lov-kpi-delta">边缘网关在线监控</span>
                    </div>
                    <div class="lov-kpi-cell">
                      <span class="lov-kpi-label">数据采集健康度</span>
                      <div class="lov-kpi-value">${$.length>0?Math.round(d/$.length*100):100}<span class="lov-kpi-unit">%</span></div>
                      <span class="lov-kpi-delta">区分设备真故障与断流</span>
                    </div>
                    <div class="lov-kpi-cell">
                      <span class="lov-kpi-label">原始采集点</span>
                      <div class="lov-kpi-value">${R}<span class="lov-kpi-unit">点</span></div>
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
                            ${$.map(i=>`
                                <tr>
                                  <td><strong>${i.name}</strong></td>
                                  <td><span class="pacom-badge pacom-badge--neutral">${i.protocol.toUpperCase()}</span></td>
                                  <td><code style="font-size:12px;">${i.endpoint}</code></td>
                                  <td>采集 ${i.collectedPoints} / 计算 ${i.calculatedPoints}</td>
                                  <td>
                                    <span class="pacom-badge ${i.status==="connected"?"pacom-badge--online":"pacom-badge--warning"}">
                                      ${i.status==="connected"?"已连通":i.status}
                                    </span>
                                  </td>
                                  <td style="text-align:right;">
                                    <button class="pacom-btn pacom-btn--ghost" data-copy-endpoint="${i.id}" data-endpoint-val="${i.endpoint}">
                                      ${w===i.id?"已复制":"复制端点"}
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
                            ${x.map(i=>`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${i.versionTag}</div>
                                    <div class="pacom-row-sub"><code>${i.id}</code></div>
                                  </td>
                                  <td><strong>${i.verifiedCount}</strong> / ${i.deviceCount} 台设备</td>
                                  <td>
                                    <div>${i.frozenBy}</div>
                                    <div class="pacom-row-sub">${i.note??"-"}</div>
                                  </td>
                                  <td><span class="pacom-badge pacom-badge--accent">${i.status}</span></td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </div>`}
      </div>
    `,t.querySelectorAll("[data-dtab]").forEach(i=>{i.addEventListener("click",()=>{a=i.dataset.dtab,S="",j="",E()})}),t.querySelectorAll("[data-pick-dev]").forEach(i=>{i.addEventListener("click",()=>{v=i.dataset.pickDev??null,E()})}),t.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{C=!C,E()}),t.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{r&&(j="",r.connectivity==="offline"?j=`单机回读自检未通过：「${r.name}」当前离线，请先检查网关 ${r.hardwareBinding?.networkAddress??"-"} 通信状态。`:S=`单机回读自检通过（PASS）：「${r.name}」指令下发 → 状态回读一致 → 已安全自动恢复原工况。`,E())}),t.querySelectorAll("[data-copy-endpoint]").forEach(i=>{i.addEventListener("click",async()=>{const M=i.dataset.endpointVal??"",g=i.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(M),w=g,E(),window.setTimeout(()=>{w=null,E()},1600)}catch{}})}),t.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async i=>{if(!C||!r)return;const M=i.currentTarget.getBoundingClientRect(),g=Math.max(.02,Math.min(.98,(i.clientX-M.left)/M.width)),T=Math.max(.02,Math.min(.98,(i.clientY-M.top)/M.height));try{await e.updateDevicePlanPoint({deviceId:r.id,floorId:n.floorId,planVersion:r.planPoint?.planVersion??1,x:g,y:T,expectedVersion:r.version}),C=!1,S=`已更新「${r.name}」图上坐标（硬件绑定与物理安装态保持不变）`,await L()}catch(A){j=A instanceof Error?A.message:String(A),E()}}),t.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async i=>{if(i.preventDefault(),!r)return;const M=new FormData(i.currentTarget);try{await e.updateDeviceHardwareBinding({deviceId:r.id,gatewayId:r.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(M.get("protocol")),networkAddress:String(M.get("networkAddress")??""),portOrChannel:String(M.get("portOrChannel")??""),physicalInstalled:M.get("physicalInstalled")==="on",expectedVersion:r.version}),S=`已保存「${r.name}」的硬件绑定与物理安装状态`,await L()}catch(g){j=g instanceof Error?g.message:String(g),E()}}),t.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const i=await e.freezeDeliveryBatch(n.floorId,"前端系统部署发起冻结");S=`已生成冻结批次 ${i.versionTag}（核验 ${i.verifiedCount}/${i.deviceCount}）`,await L()}catch(i){j=i instanceof Error?i.message:String(i),E()}})}await L()}function Me(t){if(t.connectivity==="offline")return`${t.name.includes("VAV")?"VAV-02":t.name.slice(0,6)} 离线`;if(t.category==="lighting"){const e=t.name.includes("702")?"702 照明":"主照明",s=Number(t.telemetry.dimming?.value??0);return s>0?`${e} ${s}%`:`${e} 关`}return t.category==="hvac"?`${t.name.includes("VAV")?"VAV-02":"FCU-01"} ${t.telemetry.setpoint?.value??24}°C`:t.category==="sensor"?`环境 ${t.telemetry.temp?.value??"23.4"}°C`:t.category==="gateway"?"主控网关":t.name.slice(0,6)}const le="pacom.web.e7f.leftWidth",ce={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},qe={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},ze={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:42,top:42,width:14,height:22}};function h(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Pe(t){return t.level==="all-projects"?"all":t.level==="project"?`project:${t.projectId}`:t.level==="building"?`building:${t.projectId}:${t.buildingId}`:`floor:${t.projectId}:${t.buildingId}:${t.floorId}`}async function Be(t,e,s){const a=await e.getSpatialTree(),o=e.mode==="demo",l=s.scope.canControlDevices,$=s.scope.canManageAlarms,x=s.scope.allowedZoneIds?.length?s.scope.allowedZoneIds:null;let v={level:"floor",projectId:n.projectId,buildingId:n.buildingId,floorId:n.floorId},C="devices",w="canvas",S="",j="all",L="all",E=null,r=!1,c="devices";const R=new Set,V=new Set;let d=[],i=[],M=[],g=null,T=null,A=1,O=0,y=0,u=Number(localStorage.getItem(le)||400);(!Number.isFinite(u)||u<320||u>680)&&(u=400);let z=null;function W(){return a.zones.filter(p=>!(v.level==="floor"&&p.floorId!==v.floorId||x&&!x.includes(p.id)))}async function G(p){v=p,T=null,L="all",V.clear(),A=1,O=0,y=0,z&&(z(),z=null);const k=v.level==="floor"?v.floorId:n.floorId;if(v.level==="floor")try{const[m,b,I]=await Promise.all([e.getFloorDevices(v.floorId),e.listAlarms(v.floorId),e.listWorkOrders(v.floorId)]);d=m,i=b,M=I,d.some(F=>F.id===E)||(E=d[1]?.id??d[0]?.id??null,r=!1),z=e.subscribeFloorEvents(v.floorId,async F=>{F.type==="control.receipt.updated"&&g?.batchId===F.batchId&&(g=await e.getControlBatch(F.batchId)),(F.type==="telemetry.updated"||F.type==="device.connectivity")&&v.level==="floor"&&(d=await e.getFloorDevices(v.floorId)),F.type==="alarm.changed"&&v.level==="floor"&&(i=await e.listAlarms(v.floorId)),Q()})}catch(m){d=[],i=[],M=[],E=null,r=!1,T=m instanceof Error?m.message:String(m)}else{r=!1;const[m,b,I]=await Promise.all([e.getFloorDevices(k).catch(()=>[]),e.listAlarms(k).catch(()=>[]),e.listWorkOrders(k).catch(()=>[])]);d=m,i=b,M=I}H()}function X(p){return p?a.zones.find(k=>k.id===p)?.name??p:"未分配逻辑区"}function B(){const p=S.trim().toLowerCase();return d.filter(k=>L!=="all"&&k.logicalZoneId!==L||j!=="all"&&k.category!==j?!1:p?k.name.toLowerCase().includes(p)||k.id.toLowerCase().includes(p)||X(k.logicalZoneId).toLowerCase().includes(p):!0)}async function _(p,k,m){!p.length||v.level!=="floor"||!l||(p.forEach(b=>R.add(b)),g=await e.dispatchControlBatch({floorId:v.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:p.map(b=>({deviceId:b,command:k,targetValue:m}))}),Q())}function Q(){const p=document.activeElement,k=p?.dataset?.role,m=p&&"selectionStart"in p?p.selectionStart:null,b=p&&"selectionEnd"in p?p.selectionEnd:null,I=t.querySelector(".pacom-list")?.scrollTop??0;H();const F=t.querySelector(".pacom-list");if(F&&(F.scrollTop=I),k==="search"){const q=t.querySelector('[data-role="search"]');q&&(q.focus(),m!==null&&b!==null&&q.setSelectionRange(m,b))}}function ee(){const p=t.querySelector('[data-role="canvas-viewport"]');p&&(p.style.transform=`translate(${O}px, ${y}px) scale(${A})`);const k=t.querySelector('[data-role="canvas-hint"]');k&&(k.textContent=`缩放 ${Math.round(A*100)}% · 滚轮缩放 · 拖动平移 · 双击复位`)}function be(){return v.level==="floor"?`building:${v.projectId}:${v.buildingId}`:v.level==="building"?`project:${v.projectId}`:v.level==="project"?"all":null}function he(){const p=Pe(v),k=a.projects.map(I=>`<option value="project:${h(I.id)}" ${p===`project:${I.id}`?"selected":""}>项目 · ${h(I.name)}</option>`).join(""),m=a.buildings.map(I=>{const F=`building:${I.projectId}:${I.id}`;return`<option value="${h(F)}" ${p===F?"selected":""}>楼宇 · 广实2号园 / ${h(I.name)}</option>`}).join(""),b=a.floors.map(I=>{const F=s.scope.allowedFloorIds.includes(I.id),q=`floor:${n.projectId}:${I.buildingId}:${I.id}`;return`<option value="${h(q)}" ${p===q?"selected":""}>楼层 · 广实2号园 / E栋 / ${h(I.name)}${F?"":"（未授权）"}</option>`}).join("");return`
      <option value="all" ${p==="all"?"selected":""}>全部项目（${a.projects.length} 个授权园区）</option>
      <optgroup label="项目级">${k}</optgroup>
      <optgroup label="楼宇级">${m}</optgroup>
      <optgroup label="楼层级">${b}</optgroup>
    `}function fe(){if(v.level==="all-projects"){const k=d.filter(b=>b.connectivity==="online").length,m=i.filter(b=>b.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">授权项目总览（${a.projects.length}）</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">楼宇</span><strong>${a.buildings.length} 栋</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线</span><strong>${k}/${d.length}</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:var(--pacom-status-warning);">${m} 条</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${a.projects.map(b=>{const I=a.buildings.filter(F=>F.projectId===b.id).length;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="project:${h(b.id)}">
                  <img src="${h(b.imageUrl??"./media/gzlab.jpg")}" alt="${h(b.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${h(b.name)}</strong>
                    <span class="pacom-badge pacom-badge--accent">${I} 栋楼宇</span>
                  </div>
                  <div class="pacom-row-sub">${h(b.city??"")} · ${h(b.address??"")}</div>
                </article>`}).join("")}
        </div>
      `}const p=v;if(p.level==="project"){const k=a.projects.find(q=>q.id===p.projectId),m=a.buildings.filter(q=>q.projectId===p.projectId),b=d.filter(q=>q.connectivity==="online").length,I=d.length?Math.round(b/d.length*100):100,F=i.filter(q=>q.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${h(k?.name??"园区")} · 楼宇绩效（${m.length}）</div>
          <div class="pacom-row-sub">${h(k?.city??"")} ${h(k?.address??"")}</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">在线率</span><strong>${I}%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:${F>0?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${F} 条</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>1,248 kWh</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${m.map(q=>{const f=q.id===n.buildingId;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="building:${h(q.projectId)}:${h(q.id)}">
                  <img src="${h(q.imageUrl??"./media/building-e.png")}" alt="${h(q.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${h(q.name)}</strong>
                    <span class="pacom-badge ${f?"pacom-badge--online":"pacom-badge--neutral"}">${f?`在线 ${I}% · 告警 ${F}`:"运行平稳"}</span>
                  </div>
                  <div class="pacom-row-sub">地上 ${q.aboveFloors} 层 · 面积 ${q.areaSqm??"-"} m² · 舒适度达标 96%</div>
                </article>`}).join("")}
        </div>
      `}if(p.level==="building"){const k=a.buildings.find(f=>f.id===p.buildingId),m=a.floors.filter(f=>f.buildingId===p.buildingId),b=M.filter(f=>f.status!=="closed"&&f.status!=="resolved"),I=d.filter(f=>f.connectivity==="online").length,F=d.length?Math.round(I/d.length*100):100,q=i.filter(f=>f.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${h(k?.name??"楼宇")} 运行概况</div>
          <div class="pacom-row-sub">地上 ${k?.aboveFloors??0} 层 · 面积 ${k?.areaSqm??"-"} m²</div>
          <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线率</span><strong>${F}%（${I}/${d.length}）</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">舒适度达标</span><strong>96.2%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>418 kWh</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">告警 / 工单</span><strong style="color:var(--pacom-status-warning);">${q} 告警 · ${b.length} 工单</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:8px; padding:12px;">
          <div style="font-weight:500; font-size:13px;">楼层列表（点击进入 2D 平面控制）</div>
          ${m.length?m.map(f=>{const D=s.scope.allowedFloorIds.includes(f.id),P=f.id===n.floorId;return`
                      <div class="pacom-row" data-nav-scope="floor:${h(p.projectId)}:${h(p.buildingId)}:${h(f.id)}">
                        <div>
                          <div class="pacom-row-title">${h(k?.name??"")} ${h(f.name)}</div>
                          <div class="pacom-row-sub">${f.plan?"2D 平面图就绪":"暂未上传图纸"}${P&&q>0?` · ${q} 条待处理告警`:""}</div>
                        </div>
                        <span class="pacom-badge ${D?"pacom-badge--online":"pacom-badge--warning"}">${D?"进入楼层":"无权限"}</span>
                      </div>`}).join(""):'<div class="pacom-row-sub">该楼宇暂未配置试点楼层。</div>'}
        </div>
      `}if(C==="devices"){const k=B(),m=W(),b=Array.from(V);return`
        <div class="pacom-pane-toolbar">
          ${x?`<div class="pacom-info-banner">我的区域视图：仅显示当前账号获授权的 ${x.length} 个功能区及设备。</div>`:""}
          <div class="pacom-search-row">
            <input class="pacom-input" data-role="search" placeholder="搜索设备名 / ID / 区域…" value="${h(S)}" aria-label="搜索楼层设备" />
            <select class="pacom-select" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${j==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${j==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${j==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${j==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${j==="gateway"?"selected":""}>网关</option>
            </select>
          </div>
          ${m.length>0&&!T?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${L==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${m.map(I=>`<button type="button" class="pacom-zone-pill ${L===I.id?"is-active":""}" data-filter-zone="${h(I.id)}">${h(I.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; color:var(--pacom-text-secondary);">
            <span>当前可见 ${k.length} 台设备</span>
            <span>${l?`已勾选 ${b.length} 台`:"只读模式"}</span>
          </div>
        </div>
        <div class="pacom-list">
          ${T?`<div class="pacom-alert-banner">${h(T)}</div>`:k.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">没有匹配的设备</div>':k.map(I=>{const F=I.id===E&&r,q=V.has(I.id),f=I.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline",D=I.category==="lighting"?`亮度 ${I.telemetry.dimming?.value??"--"}%`:I.category==="hvac"?`设定 ${I.telemetry.setpoint?.value??"--"}°C`:I.category==="sensor"?`${I.telemetry.temp?.value??"--"}°C · CO₂ ${I.telemetry.co2?.value??"--"}`:I.hardwareBinding?.networkAddress??"未绑定";return`
                        <div class="pacom-row ${F?"is-selected":""}" data-select-device="${h(I.id)}">
                          <div class="pacom-row-main">
                            ${l?`<input type="checkbox" data-check-device="${h(I.id)}" ${q?"checked":""} style="margin-top:3px;" aria-label="勾选 ${h(I.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title">${h(I.name)}</div>
                              <div class="pacom-row-sub">${h(X(I.logicalZoneId))} · ${h(ce[I.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${I.connectivity==="online"?"pacom-badge--online":"pacom-badge--neutral"}">
                            <span class="pacom-dot ${f}"></span>${h(D)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${l&&b.length>0?`
            <div class="pacom-batch-bar">
              <span style="font-size:12px;">显式批量目标：<strong>${b.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(C==="zones"){const k=W(),m={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">E7F 功能区快控（${k.length}）</div>
          <div class="pacom-row-sub">点击卡片同步高亮右侧平面图热区，支持按区域一键批量控制。</div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${k.map(b=>{const I=d.filter(P=>P.logicalZoneId===b.id),F=I.filter(P=>P.connectivity==="online").length,q=I.filter(P=>P.category==="lighting"||P.category==="hvac").length,f=L===b.id,D=m[b.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${f?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${f?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${h(f?"all":b.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:14px; font-weight:500;">${h(b.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${F}/${I.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时温度 ${D.temp} · 占用 ${D.occ}</div>
                  ${q>0?`
                      <div style="display:flex; gap:6px; margin-top:2px;">
                        <button type="button" class="pacom-btn" data-zone-power="${h(b.id)}" data-zone-val="true" ${l?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" data-zone-power="${h(b.id)}" data-zone-val="false" ${l?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">该区域为弱电/网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-pane-toolbar">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-weight:500;">本层告警快览（${i.length}）</span>
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-alarms="1">前往告警中心 →</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:12px;">
        ${i.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">当前楼层无活跃告警</div>':i.map(k=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${h(k.title)}</strong>
                      <span class="pacom-badge ${k.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${k.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${h(k.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" data-locate-device="${h(k.deviceId)}">定位设备</button>
                      ${k.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" data-ack-alarm="${h(k.id)}" ${$?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function ye(){const p=v,k=d.filter(f=>f.connectivity==="online").length,m=d.length?Math.round(k/d.length*100):100,b=i.filter(f=>f.status==="active").length;if(p.level==="all-projects"||p.level==="project"){const f=p.level==="project"?a.projects.find(P=>P.id===p.projectId):a.projects[0],D=a.buildings.filter(P=>!f||P.projectId===f.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:24px; cursor:default;">
          <div style="position:relative; width:min(760px, 94%); border-radius:16px; overflow:hidden; box-shadow:0 12px 32px rgba(15,23,42,0.14); background:#fff;">
            <img src="${h(f?.imageUrl??"./media/gzlab.jpg")}" alt="园区俯瞰" style="width:100%; height:440px; object-fit:cover; display:block;" />
            ${p.level==="all-projects"?a.projects.map((P,N)=>`
                      <button type="button" class="pacom-pin is-selected" style="left:${N===0?48:26}%; top:${N===0?52:34}%;" data-nav-scope="project:${h(P.id)}">
                        <span class="pacom-dot pacom-dot--online"></span>
                        <span>${h(P.name)}</span>
                      </button>`).join(""):D.map((P,N)=>{const Y=P.id===n.buildingId;return`
                        <button type="button" class="pacom-pin ${Y?"is-selected":""}" style="left:${N===0?56:38}%; top:${N===0?44:62}%;" data-nav-scope="building:${h(P.projectId)}:${h(P.id)}">
                          <span class="pacom-dot ${Y&&b>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                          <span>${h(P.name)} · ${Y?`在线 ${m}% · 告警 ${b}`:"运行平稳"}</span>
                        </button>`}).join("")}
          </div>
        </div>
      `}if(p.level==="building"){const f=a.buildings.find(N=>N.id===p.buildingId),D=a.floors.filter(N=>N.buildingId===p.buildingId),P=D.find(N=>N.id===n.floorId)??D[0];return`
        ${D.length?`
            <nav class="pacom-floor-rail" aria-label="整栋楼层选择轨道">
              <button type="button" class="pacom-floor-btn is-active" title="整栋视图">栋</button>
              ${D.map(N=>`<button type="button" class="pacom-floor-btn ${s.scope.allowedFloorIds.includes(N.id)?"":"is-locked"}" data-nav-scope="floor:${h(p.projectId)}:${h(p.buildingId)}:${h(N.id)}" title="${h(N.name)}">${h(N.name.replace("F",""))}</button>`).join("")}
            </nav>`:""}
        <div class="pacom-canvas-tools" aria-label="画布工具">
          <button type="button" class="pacom-tool-btn" data-zoom="reset" title="复位视图" aria-label="复位视图">⟲</button>
          <div class="pacom-tool-divider" aria-hidden="true"></div>
          <button type="button" class="pacom-tool-btn" data-zoom="in" title="放大" aria-label="放大">＋</button>
          <button type="button" class="pacom-tool-btn" data-zoom="out" title="缩小" aria-label="缩小">－</button>
        </div>
        <div class="pacom-canvas-stage" data-role="canvas-stage">
          <div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${O}px, ${y}px) scale(${A});">
            <img class="pacom-plan-img" src="${h(f?.imageUrl??"./media/building-e.png")}" alt="${h(f?.name??"楼宇")} 整栋实景图" />
          </div>
        </div>
        <div class="pacom-canvas-hint" style="pointer-events:auto; display:flex; align-items:center; gap:10px;">
          <span>${h(f?.name??"楼宇")} · 在线 ${m}% · 舒适度 96.2%</span>
          ${P?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:24px; padding:0 10px; font-size:12px;" data-nav-scope="floor:${h(p.projectId)}:${h(p.buildingId)}:${h(P.id)}">进入 ${h(P.name)} 平面图 →</button>`:""}
        </div>
      `}const I=a.floors.find(f=>f.id===p.floorId),F=a.floors.filter(f=>f.buildingId===p.buildingId),q=W();return`
      <nav class="pacom-floor-rail" aria-label="楼层选择轨道">
        <button type="button" class="pacom-floor-btn" data-nav-scope="building:${h(p.projectId)}:${h(p.buildingId)}" title="返回整栋楼宇">栋</button>
        ${F.map(f=>{const D=s.scope.allowedFloorIds.includes(f.id);return`<button type="button" class="pacom-floor-btn ${f.id===p.floorId?"is-active":""} ${D?"":"is-locked"}"
              data-nav-scope="floor:${h(p.projectId)}:${h(p.buildingId)}:${h(f.id)}" title="${h(f.name)}${D?"":"（无权限）"}">
              ${h(f.name.replace("F",""))}
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
          <button type="button" class="lov-layer-btn" aria-pressed="${c==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${c==="temp"}" data-canvas-layer="temp">温度热区</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${c==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${c==="alarms"}" data-canvas-layer="alarms">告警叠加${i.filter(f=>f.status==="active").length>0?` (${i.filter(f=>f.status==="active").length})`:""}</button>
        </div>`}

      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${T?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${h(T)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${O}px, ${y}px) scale(${A});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${h(I?.plan?.imageUrl??"./media/7F.webp")}" alt="E栋 ${h(I?.name??"7F")} 平面图" />
                  ${q.map((f,D)=>{const P=ze[f.id];if(!P)return"";const N=L===f.id,Y=["23.2°C","24.6°C","22.8°C","23.9°C"],ie=["有人 74%","会议中","有人 52%","空闲"],Ie=c==="temp"?` · ${Y[D%Y.length]}`:c==="occupancy"?` · ${ie[D%ie.length]}`:"",Se=c==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":c==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${N?"is-active":""}"
                          style="left:${P.left}%; top:${P.top}%; width:${P.width}%; height:${P.height}%; ${N?"":Se}"
                          data-filter-zone="${h(N?"all":f.id)}"
                          title="${h(f.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${h(f.name.replace(/^7F\s*/,""))}${Ie}</span>
                        </button>`}).join("")}
                  ${d.filter(f=>f.planPoint).map(f=>{const D=i.some(Y=>Y.deviceId===f.id&&Y.status==="active"),P=L!=="all"&&f.logicalZoneId!==L||c==="alarms"&&!D,N=c==="alarms"&&D?"background:var(--pacom-status-critical);":"";return`
                        <button type="button" class="pacom-pin ${f.id===E&&r?"is-selected":""} ${f.connectivity==="offline"?"pacom-pin--offline":""} ${P?"pacom-pin--dimmed":""}"
                          style="left:${(f.planPoint.x*100).toFixed(2)}%; top:${(f.planPoint.y*100).toFixed(2)}%; ${N}"
                          data-pin-device="${h(f.id)}" title="${h(f.name)}">
                          <span class="pacom-dot ${D?"pacom-dot--critical":f.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${h(Me(f))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>

      ${T?"":`<div class="pacom-canvas-hint" data-role="canvas-hint">缩放 ${Math.round(A*100)}% · 滚轮缩放 · 拖动平移 · 双击复位</div>`}
      ${$e()}
    `}function $e(){if(v.level!=="floor"||!r)return"";const p=d.find(f=>f.id===E);if(!p)return"";const k=p.category==="lighting",m=p.category==="hvac",b=Number(p.telemetry.dimming?.value??50),I=Number(p.telemetry.setpoint?.value??24),F=R.has(p.id),q=k?[{label:"当前开关",value:b>0?"开启":"关闭"},{label:"当前亮度",value:`${b}%`},{label:"实时功率",value:b>0?`${Math.round(b*1.4)} W`:"0 W"},{label:"运行模式",value:F?"人工覆盖":"自动策略"}]:m?[{label:"室内温度",value:`${p.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${I.toFixed(1)}°C`},{label:"运行工况",value:p.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:F?"人工覆盖":"自动策略"}]:p.category==="sensor"?[{label:"实时温度",value:`${p.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${p.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${p.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:p.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:p.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:p.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:p.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:p.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${h(p.name)}</h2>
            <div class="pacom-row-sub">${h(X(p.logicalZoneId))} · ${h(ce[p.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${F?"pacom-badge--warning":"pacom-badge--neutral"}">
              ${F?"人工覆盖":"自动策略"}
            </span>
            <span class="pacom-badge ${p.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${p.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>
            </button>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          ${q.map(f=>`
              <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                <span class="pacom-row-sub">${f.label}</span>
                <strong style="font-size:13px; font-weight:500;">${h(f.value)}</strong>
              </div>`).join("")}
        </div>

        ${k||m?`
            <div class="pacom-control-box">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                ${F&&l?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${h(p.id)}">恢复自动策略</button>`:l?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
              </div>
              ${p.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
              ${k?`
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${l?"":"disabled"}>开灯</button>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${l?"":"disabled"}>关灯</button>
                  </div>
                  <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                    亮度目标：<strong>${b}%</strong>
                    <input type="range" min="0" max="100" step="10" value="${b}" data-ctrl-slider="lighting.dimming" ${l?"":"disabled"} />
                  </label>`:`
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${l?"":"disabled"}>开机</button>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${l?"":"disabled"}>关机</button>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span style="font-size:12px;">设定温度：</span>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${I-.5}" ${l?"":"disabled"}>-0.5°C</button>
                    <strong>${I.toFixed(1)}°C</strong>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${I+.5}" ${l?"":"disabled"}>+0.5°C</button>
                  </div>`}
            </div>`:""}

        ${g?`
            <div class="pacom-control-box">
              <div style="font-size:12px; font-weight:500;">最近批次：<code>${h(g.batchId)}</code></div>
              <div class="pacom-receipt-list">
                ${g.receipts.map(f=>{const D=qe[f.status]??{text:f.status,badge:"pacom-badge--neutral"};return`
                      <div class="pacom-receipt-item">
                        <div>
                          <div><strong>${h(f.deviceId)}</strong> · ${h(f.command)} → ${h(f.targetValue)}</div>
                          ${f.errorMessage?`<div style="color:var(--pacom-status-critical);">${h(f.errorMessage)}</div>`:""}
                        </div>
                        <span class="pacom-badge ${D.badge}">${D.text}</span>
                      </div>`}).join("")}
              </div>
            </div>`:""}

        <details class="lov-tech-details">
          <summary><span>技术标识与硬件绑定</span><span>▾</span></summary>
          <div class="pacom-kv-grid">
            <span class="pacom-kv-label">设备编号</span><span><code>${h(p.id)}</code> · v${p.version}</span>
            <span class="pacom-kv-label">图上点位</span><span>${p.planPoint?`x=${p.planPoint.x.toFixed(2)}, y=${p.planPoint.y.toFixed(2)} (图 v${p.planPoint.planVersion})`:"未标点"}</span>
            <span class="pacom-kv-label">物理安装</span><span>${p.physicalInstalled?"现场已确认":"待现场复核"}</span>
            <span class="pacom-kv-label">硬件绑定</span><span>${p.hardwareBinding?`${p.hardwareBinding.protocol.toUpperCase()} · ${p.hardwareBinding.networkAddress}`:"未绑定"}</span>
          </div>
        </details>
      </aside>
    `}function ne(p){if(p==="all")return{level:"all-projects"};const k=p.split(":");return k[0]==="project"&&k[1]?{level:"project",projectId:k[1]}:k[0]==="building"&&k[1]&&k[2]?{level:"building",projectId:k[1],buildingId:k[2]}:k[0]==="floor"&&k[1]&&k[2]&&k[3]?{level:"floor",projectId:k[1],buildingId:k[2],floorId:k[3]}:{level:"all-projects"}}function H(){const p=i.filter(I=>I.status==="active").length,k=d.filter(I=>I.connectivity==="online").length,m=be(),b=d.find(I=>I.category==="sensor")?.telemetry.temp?.value??"23.4";t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">空间总览</h1>
            <div class="pacom-header-meta">
              ${v.level==="floor"&&!T?`<span class="pacom-badge pacom-badge--online">在线 ${k}/${d.length} · 均温 ${h(b)}°C</span>`:o?'<span class="pacom-badge pacom-badge--neutral"><span class="pacom-dot pacom-dot--offline"></span>演示模式</span>':'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>'}
              <span class="pacom-badge pacom-badge--neutral">${h(s.roleLabel)}</span>
            </div>
          </div>

          <div class="pacom-header-toolbar">
            <div class="pacom-toolbar-left">
              ${m?`<button type="button" class="lov-icon-btn" data-nav-scope="${h(m)}" title="返回上一空间层级" aria-label="返回上一空间层级">←</button>`:""}
              <div class="pacom-scope-pill" title="项目 / 楼宇 / 楼层空间范围切换">
                <select data-role="scope-select" aria-label="选择查看范围">
                  ${he()}
                </select>
                <span class="pacom-scope-chevron">▾</span>
              </div>

              ${v.level==="floor"?`
                  <div class="pacom-tabs" role="tablist">
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${C==="devices"}" data-tab="devices">设备</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${C==="zones"}" data-tab="zones">区域</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${C==="alarms"}" data-tab="alarms">
                      告警 ${p>0?`<span class="pacom-badge pacom-badge--warning">${p}</span>`:""}
                    </button>
                  </div>`:""}
            </div>

            <div class="pacom-tabs pacom-mobile-view-switch" role="group" aria-label="窄屏视图切换">
              <button type="button" class="pacom-tab" aria-selected="${w==="list"}" data-mobile-pane-btn="list">列表</button>
              <button type="button" class="pacom-tab" aria-selected="${w==="canvas"}" data-mobile-pane-btn="canvas">平面图</button>
            </div>
          </div>
        </header>

        <section class="pacom-split" data-mobile-pane="${w}">
          <aside class="pacom-left-pane" style="--pacom-sidebar-width:${u}px;">
            ${fe()}
          </aside>
          <div class="pacom-splitter" role="separator" tabindex="0" aria-orientation="vertical" aria-label="调整左右栏宽度" data-role="splitter"></div>
          <main class="pacom-right-pane">
            ${ye()}
          </main>
        </section>
      </div>
    `,we()}function we(){t.querySelector('[data-role="scope-select"]')?.addEventListener("change",m=>{G(ne(m.currentTarget.value))}),t.querySelectorAll("[data-nav-scope]").forEach(m=>{m.addEventListener("click",()=>{m.dataset.navScope&&G(ne(m.dataset.navScope))})}),t.querySelectorAll("[data-tab]").forEach(m=>{m.addEventListener("click",()=>{C=m.dataset.tab,H()})}),t.querySelectorAll("[data-mobile-pane-btn]").forEach(m=>{m.addEventListener("click",()=>{w=m.dataset.mobilePaneBtn,H()})}),t.querySelector('[data-role="search"]')?.addEventListener("input",m=>{S=m.currentTarget.value,Q()}),t.querySelector('[data-role="category"]')?.addEventListener("change",m=>{j=m.currentTarget.value,H()}),t.querySelectorAll("[data-filter-zone]").forEach(m=>{m.addEventListener("click",b=>{b.stopPropagation(),L=m.dataset.filterZone??"all",H()})}),t.querySelectorAll("[data-select-device]").forEach(m=>{m.addEventListener("click",b=>{b.target.tagName!=="INPUT"&&(E=m.dataset.selectDevice??null,r=!0,w="canvas",H())})}),t.querySelectorAll("[data-check-device]").forEach(m=>{m.addEventListener("change",()=>{const b=m.dataset.checkDevice;b&&(m.checked?V.add(b):V.delete(b),H())})}),t.querySelectorAll("[data-pin-device]").forEach(m=>{m.addEventListener("click",b=>{b.stopPropagation(),E=m.dataset.pinDevice??null,r=!0,H()})}),t.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{r=!1,H()}),t.querySelector("[data-release-override]")?.addEventListener("click",m=>{const b=m.currentTarget.dataset.releaseOverride;b&&(R.delete(b),H())}),t.querySelectorAll("[data-zone-power]").forEach(m=>{m.addEventListener("click",b=>{b.stopPropagation();const I=m.dataset.zonePower,F=m.dataset.zoneVal==="true";if(!I)return;const q=d.filter(D=>D.logicalZoneId===I&&D.category==="lighting").map(D=>D.id),f=d.filter(D=>D.logicalZoneId===I&&D.category==="hvac").map(D=>D.id);q.length?_(q,"lighting.power",F):f.length&&_(f,"hvac.power",F)})}),t.querySelectorAll("[data-locate-device]").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.locateDevice;b&&(E=b,r=!0,w="canvas",H())})}),t.querySelector("[data-go-alarms]")?.addEventListener("click",()=>{window.location.hash="#alarms"}),t.querySelectorAll("[data-ctrl-cmd]").forEach(m=>{m.addEventListener("click",()=>{if(!E||!m.dataset.ctrlCmd)return;const b=m.dataset.ctrlVal??"",I=b==="true"?!0:b==="false"?!1:Number(b);_([E],m.dataset.ctrlCmd,I)})}),t.querySelector("[data-ctrl-slider]")?.addEventListener("change",m=>{const b=m.currentTarget;!E||!b.dataset.ctrlSlider||_([E],b.dataset.ctrlSlider,Number(b.value))}),t.querySelectorAll("[data-batch-cmd]").forEach(m=>{m.addEventListener("click",()=>{const b=Array.from(V),I=m.dataset.batchVal??"",F=I==="true"?!0:I==="false"?!1:I;_(b,m.dataset.batchCmd,F)})}),t.querySelectorAll("[data-ack-alarm]").forEach(m=>{m.addEventListener("click",async()=>{!m.dataset.ackAlarm||v.level!=="floor"||!$||(await e.acknowledgeAlarm(m.dataset.ackAlarm,"首页快速确认"),i=await e.listAlarms(v.floorId),H())})}),t.querySelectorAll("[data-canvas-layer]").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.canvasLayer;b&&(c=b,H())})}),t.querySelectorAll("[data-zoom]").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.zoom;b==="in"?A=Math.min(2.6,Number((A+.2).toFixed(2))):b==="out"?A=Math.max(.6,Number((A-.2).toFixed(2))):(A=1,O=0,y=0),ee()})});const p=t.querySelector('[data-role="canvas-stage"]');if(p&&!T){let m=!1,b=0,I=0,F=0,q=0;p.addEventListener("pointerdown",D=>{D.target?.closest("button, input, select, .pacom-drawer")||(m=!0,b=D.clientX,I=D.clientY,F=O,q=y,p.classList.add("is-panning"),p.setPointerCapture?.(D.pointerId))}),p.addEventListener("pointermove",D=>{m&&(O=F+(D.clientX-b),y=q+(D.clientY-I),ee())});const f=()=>{m&&(m=!1,p.classList.remove("is-panning"))};p.addEventListener("pointerup",f),p.addEventListener("pointercancel",f),p.addEventListener("wheel",D=>{D.preventDefault();const P=D.deltaY<0?.12:-.12;A=Math.max(.6,Math.min(2.6,Number((A+P).toFixed(2)))),ee()},{passive:!1}),p.addEventListener("dblclick",D=>{D.target?.closest("button")||(A=1,O=0,y=0,ee())})}const k=t.querySelector('[data-role="splitter"]');k?.addEventListener("pointerdown",m=>{const b=m.clientX,I=u;k.classList.add("is-dragging");const F=f=>{u=Math.max(320,Math.min(640,I+(f.clientX-b)));const D=t.querySelector(".pacom-left-pane");D&&D.style.setProperty("--pacom-sidebar-width",`${u}px`)},q=()=>{k.classList.remove("is-dragging"),localStorage.setItem(le,String(Math.round(u))),window.removeEventListener("pointermove",F),window.removeEventListener("pointerup",q)};window.addEventListener("pointermove",F),window.addEventListener("pointerup",q)}),k?.addEventListener("keydown",m=>{if(m.key==="ArrowLeft")m.preventDefault(),u=Math.max(320,u-16);else if(m.key==="ArrowRight")m.preventDefault(),u=Math.min(640,u+16);else if(m.key==="Home")m.preventDefault(),u=320;else if(m.key==="End")m.preventDefault(),u=640;else return;localStorage.setItem(le,String(Math.round(u)));const b=t.querySelector(".pacom-left-pane");b&&b.style.setProperty("--pacom-sidebar-width",`${u}px`)})}await G(v)}const Re=new Set(["lighting","hvac","alarm_rules"]),re=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%"}];async function _e(t,e,s){let[a,o]=await Promise.all([e.listScenes(n.floorId),e.getRuntimeSettings(n.projectId)]),l="manual",$="balanced",x=null,v="",C=!1,w="",S="";const j=e.subscribeFloorEvents(n.floorId,async E=>{E.type==="control.receipt.updated"&&x?.batchId===E.batchId&&(x=await e.getControlBatch(E.batchId),L())});function L(){const E=v.trim().toLowerCase(),r=E?a.filter(d=>`${d.name} ${d.description}`.toLowerCase().includes(E)):a,c=o.rules.filter(d=>Re.has(d.category)),R=s.scope.canEditDeployment;t.innerHTML=`
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
              <button class="pacom-tab" role="tab" aria-selected="${l==="rules"}" data-scene-tab="rules">联动规则（${c.length}）</button>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:4px 0 24px;">
          ${w?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${w}</span></div>`:""}
          ${S?`<div class="pacom-alert-banner">${S}</div>`:""}

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
                <span class="pacom-row-sub">共 ${r.length} 个场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(310px,1fr)); gap:14px;">
                ${r.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="lov-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建自定义场景。</span></div></div>':r.map(d=>`
                          <section class="pacom-card" style="gap:10px;">
                            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                              <strong style="font-size:15px; font-weight:500;">${d.name}</strong>
                              <span class="pacom-badge pacom-badge--neutral">${d.actions.length} 个动作</span>
                            </div>
                            <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${d.description}</p>
                            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                              <div class="pacom-row-sub">
                                ${d.scheduleSummary??"手动触发"} · ${d.lastExecutedAt?d.lastExecutedAt.slice(5,16).replace("T"," "):"未执行"}
                              </div>
                              <button class="pacom-btn pacom-btn--primary" data-exec-scene="${d.id}" ${s.scope.canControlDevices?"":"disabled"}>执行</button>
                            </div>
                          </section>`).join("")}
              </div>

              ${x?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">逐设备执行回执</h2>
                      <span class="pacom-row-sub">批次 <code>${x.batchId}</code></span>
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
                            ${x.receipts.map(d=>`
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
                      ${re.map(d=>`
                        <button type="button" class="lov-mode-card" aria-pressed="${$===d.id}" data-oss-mode="${d.id}" ${s.scope.canControlDevices?"":"disabled"}>
                          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                            <strong style="font-size:15px; font-weight:500;">${d.title}</strong>
                            <span class="pacom-badge ${$===d.id?"pacom-badge--online":"pacom-badge--neutral"}">${$===d.id?"当前模式":d.badge}</span>
                          </div>
                          <span class="lov-setting-desc">${d.desc}</span>
                          <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${d.estSaving}</span>
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
                      ${c.length===0?'<div class="lov-empty-state"><strong>暂无联动规则</strong><span>当前楼层尚未配置照明、暖通或告警自动策略。</span></div>':c.map(d=>`
                                <div class="lov-setting-row">
                                  <div class="lov-setting-meta">
                                    <span class="lov-setting-title">
                                      <span>${d.name}</span>
                                      <span class="pacom-badge pacom-badge--neutral">v${d.version}</span>
                                      <span class="pacom-badge pacom-badge--accent">${d.scopeLabel}</span>
                                    </span>
                                    <span class="lov-setting-desc">${d.summary} · 回执：${d.receiptSummary??"已同步"}</span>
                                  </div>
                                  <div class="lov-setting-control">
                                    <span class="pacom-row-sub">${d.enabled?"已启用":"已停用"}</span>
                                    <button
                                      type="button"
                                      class="lov-switch"
                                      role="switch"
                                      aria-checked="${d.enabled?"true":"false"}"
                                      aria-label="切换 ${d.name}"
                                      data-toggle-strategy-rule="${d.id}"
                                      data-rule-ver="${d.version}"
                                      data-rule-next="${!d.enabled}"
                                      ${R?"":"disabled"}
                                    >
                                      <span class="lov-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`).join("")}
                    </div>
                  </section>`}
        </div>
      </div>
    `,t.querySelectorAll("[data-scene-tab]").forEach(d=>{d.addEventListener("click",()=>{l=d.dataset.sceneTab??"manual",w="",L()})}),t.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),t.querySelectorAll("[data-oss-mode]").forEach(d=>{d.addEventListener("click",()=>{const i=d.dataset.ossMode;if(!i)return;$=i;const M=re.find(g=>g.id===i);w=`已切换至「${M?.title??i}」运行策略（${M?.estSaving??""}）。`,L()})}),t.querySelectorAll("[data-toggle-strategy-rule]").forEach(d=>{d.addEventListener("click",async()=>{S="";try{await e.toggleRuntimeRule(d.dataset.toggleStrategyRule,d.dataset.ruleNext==="true",Number(d.dataset.ruleVer)),o=await e.getRuntimeSettings(n.projectId),w="联动规则状态与版本回执已更新。",L()}catch(i){S=i instanceof Error?i.message:String(i),L()}})}),t.querySelectorAll("[data-toggle-create]").forEach(d=>{d.addEventListener("click",()=>{C=!C,L()})}),t.querySelector("[data-scene-search]")?.addEventListener("input",d=>{const i=d.currentTarget,M=i.selectionStart??i.value.length;v=i.value,L();const g=t.querySelector("[data-scene-search]");g&&(g.focus(),g.setSelectionRange(M,M))}),t.querySelectorAll("[data-exec-scene]").forEach(d=>{d.addEventListener("click",async()=>{S="";try{x=await e.executeScene(d.dataset.execScene),a=await e.listScenes(n.floorId),L()}catch(i){S=i instanceof Error?i.message:String(i),L()}})}),t.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async d=>{d.preventDefault();const i=new FormData(d.currentTarget);try{await e.createScene({projectId:n.projectId,floorId:n.floorId,name:String(i.get("name")??""),description:String(i.get("description")??""),actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:50}]}),a=await e.listScenes(n.floorId),C=!1,w="自定义场景已保存。",L()}catch(M){S=M instanceof Error?M.message:String(M),L()}})}L(),window.addEventListener("hashchange",()=>j(),{once:!0})}const ge=[{group:"项目基准",items:[{id:"calendar",label:"运行日历"},{id:"weather_area",label:"气象与面积"},{id:"metering_carbon",label:"计量与碳排"}]},{group:"通知与模板",items:[{id:"notifications",label:"告警通知订阅"},{id:"templates",label:"参数模板"}]}],Ve=ge.flatMap(t=>t.items);async function Ne(t,e,s){let a="calendar",o=await e.getRuntimeSettings(n.projectId),l=o.calendar.workdayStart,$=o.calendar.workdayEnd,x=[];const v={criticalSms:!0,inAppBanner:!0,dailyDigest:!1};let C="",w="";function S(){const j=o.rules.filter(r=>r.category===a),L=Ve.find(r=>r.id===a)?.label??"运行设置",E=s.scope.canEditDeployment;t.innerHTML=`
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

        ${C?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${C}</span></div>`:""}
        ${w?`<div class="pacom-alert-banner">${w}</div>`:""}

        <div class="lov-subnav-layout">
          <nav class="lov-subnav-rail" aria-label="运行设置分组">
            ${ge.map(r=>`
              <div class="lov-subnav-group">
                <div class="lov-subnav-group-title">${r.group}</div>
                ${r.items.map(c=>{const R=c.id==="calendar"?"":String(o.rules.filter(V=>V.category===c.id).length);return`
                      <button class="lov-subnav-item" aria-current="${a===c.id?"true":"false"}" data-scat="${c.id}">
                        <span>${c.label}</span>
                        ${R?`<span class="pacom-badge pacom-badge--neutral">${R}</span>`:""}
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
                        <input class="pacom-input" style="width:140px;" type="time" data-cal-start value="${l}" ${E?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">工作日下班时间</span>
                        <span class="lov-setting-desc">夜间巡检窗口为 ${o.calendar.nightGuardStart} – ${o.calendar.nightGuardEnd}；若晚于 21:30 将自动提示交叠冲突</span>
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

                ${x.length>0?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">受影响的定时与夜间规则预览</h2>
                        <span class="pacom-row-sub">共 ${x.length} 条</span>
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
                              ${x.map(r=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${r.ruleName}</div>
                                      ${r.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${r.conflictWarning}</div>`:""}
                                    </td>
                                    <td>${r.beforeWindow}</td>
                                    <td><strong>${r.afterWindow}</strong></td>
                                    <td>
                                      <span class="pacom-badge ${r.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                        ${r.conflictWarning?"交叠警告":"自动跟随"}
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
                    <h2 class="lov-section-title">${L}</h2>
                    <span class="pacom-row-sub">共 ${j.length} 条策略</span>
                  </div>
                  <div class="lov-settings-card">
                    ${j.length===0?'<div class="lov-empty-state"><strong>暂无配置项</strong><span>该分类下尚未定义运行策略规则。</span></div>':j.map(r=>`
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
                                    data-toggle-rule="${r.id}"
                                    data-rule-ver="${r.version}"
                                    data-rule-next="${!r.enabled}"
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
    `,t.querySelectorAll("[data-scat]").forEach(r=>{r.addEventListener("click",()=>{a=r.dataset.scat,C="",w="",S()})}),t.querySelectorAll("[data-notify-key]").forEach(r=>{r.addEventListener("click",()=>{const c=r.dataset.notifyKey;c&&(v[c]=!v[c],C="通知订阅偏好已更新。",S())})}),t.querySelector("[data-cal-start]")?.addEventListener("change",r=>{l=r.currentTarget.value}),t.querySelector("[data-cal-end]")?.addEventListener("change",r=>{$=r.currentTarget.value}),t.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{w="",x=await e.previewCalendarImpact(n.projectId,l,$),S()}),t.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{w="";try{const r=await e.saveWorkCalendar(n.projectId,l,$,o.calendar.version);o={...o,calendar:r},C=`运行日历已保存至 v${r.version}（${r.workdayStart} - ${r.workdayEnd}）`,x=[],S()}catch(r){w=r instanceof Error?r.message:String(r),S()}}),t.querySelectorAll("[data-toggle-rule]").forEach(r=>{r.addEventListener("click",async()=>{w="";try{await e.toggleRuntimeRule(r.dataset.toggleRule,r.dataset.ruleNext==="true",Number(r.dataset.ruleVer)),o=await e.getRuntimeSettings(n.projectId),C="策略状态与版本回执已更新",S()}catch(c){w=c instanceof Error?c.message:String(c),S()}})})}S()}const de="pacom.web.sidebar.collapsed",We=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,pe=[{id:"home",label:"空间总览",iconSvg:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/>'},{id:"analysis",label:"数据分析",iconSvg:'<path d="M4 19h16"/><path d="M7 16v-5"/><path d="M12 16V7"/><path d="M17 16v-8"/>'},{id:"alarms",label:"告警中心",iconSvg:'<path d="M12 4 3 19h18L12 4Z"/><path d="M12 10v4"/><path d="M12 17h.01"/>'},{id:"scenes",label:"智能策略",iconSvg:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3"/>'},{id:"settings",label:"运行设置",iconSvg:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2.5"/><circle cx="15" cy="17" r="2.5"/>'},{id:"deployment",label:"系统部署",iconSvg:'<rect x="3" y="4" width="7" height="6" rx="1.5"/><rect x="14" y="4" width="7" height="6" rx="1.5"/><rect x="8.5" y="14" width="7" height="6" rx="1.5"/><path d="M6.5 10v2h11v-2M12 12v2"/>'}],oe={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"运行设置",deployment:"系统部署",account:"机构与账户"};function ue(){const t=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return t in oe?t:"home"}function K(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function Ze(t,e,s,a){t.classList.remove("bare-login");let o=s,l=ue(),$=localStorage.getItem(de)==="1",x=!1,v=!1,C="";const w=e.mode==="demo"&&typeof e.switchDemoRole=="function";function S(){const A=C.trim(),O=A?pe.filter(y=>y.label.includes(A)):pe;return O.length?O.map(y=>`
        ${!A&&y.id==="settings"?'<div class="pacom-nav-divider" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${y.id}" aria-current="${l===y.id?"page":"false"}" title="${y.label}">
          <svg class="pacom-nav-icon" viewBox="0 0 24 24" aria-hidden="true">${y.iconSvg}</svg>
          <span class="pacom-nav-label">${y.label}</span>
        </button>`).join(""):'<div class="pacom-nav-empty">没有匹配的工作区</div>'}function j(){if(!v)return"";const A=o.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${$?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab.jpg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${K(o.roleLabel)}${w?" · 演示":""}</small>
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
          <span class="pacom-pop-avatar" aria-hidden="true">${K(A)}</span>
          <span class="pacom-pop-text">
            <b>${K(o.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${w?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">演示角色切换（RBAC 权限预览）</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(U).map(O=>{const y=U[O],u=O===o.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${u}" data-pop-role="${O}">
                      <span class="pacom-pop-text">
                        <b>${K(y.roleLabel)}</b>
                        <small>${K(y.displayName)}</small>
                      </span>
                      ${u?'<svg class="pacom-pop-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>':""}
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
    `}async function L(A){switch(document.title=`${oe[l]} · PACOM Station`,l){case"home":await Be(A,e,o);return;case"analysis":await Fe(A,e);return;case"alarms":await je(A,e,o);return;case"scenes":await _e(A,e,o);return;case"settings":await Ne(A,e,o);return;case"deployment":await Te(A,e,o);return;case"account":await Ee(A,e,o,O=>{o=O,d(!0)},E);return}}async function E(){v=!1,x=!1,T();try{await e.logout()}finally{window.location.hash="#login",a()}}function r(){const A=t.querySelector('[data-role="nav-list"]');A&&(A.innerHTML=S(),R())}function c(){t.querySelector('[data-role="org-popover"]')?.remove();const A=t.querySelector('[data-role="org-menu-btn"]');if(A&&A.setAttribute("aria-expanded",String(v)),!v)return;const O=document.createElement("div");O.innerHTML=j().trim();const y=O.firstElementChild;y&&(t.appendChild(y),V())}function R(){t.querySelectorAll("[data-route]").forEach(A=>{A.addEventListener("click",()=>{const O=A.dataset.route;O===l&&!x||(l=O,x=!1,v=!1,window.location.hash=`#${l}`,d(!0))})})}function V(){t.querySelectorAll('[data-pop-act="go-account"]').forEach(A=>{A.addEventListener("click",()=>{v=!1,x=!1,l="account",window.location.hash="#account",d(!0)})}),t.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{E()}),t.querySelectorAll("[data-pop-role]").forEach(A=>{A.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const O=A.dataset.popRole;v=!1,x=!1,o=await e.switchDemoRole(O),await d(!0)})})}async function d(A){const O=t.querySelector('[data-role="main-stage"]');if(!A&&O){const u=t.querySelector(".pacom-nav-rail");u&&(u.classList.toggle("is-collapsed",$),u.classList.toggle("is-mobile-open",x));const z=t.querySelector('[data-role="mobile-scrim"]');z&&z.classList.toggle("is-open",x),c();return}t.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
          <h1 class="pacom-mobile-title">${oe[l]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${K(o.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${x?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${$?"is-collapsed":""} ${x?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${We}</div>
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
            ${S()}
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
    `,t.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{$=!$,v=!1,localStorage.setItem(de,$?"1":"0");const u=t.querySelector(".pacom-nav-rail"),z=t.querySelector('[data-role="toggle-sidebar"]');u&&u.classList.toggle("is-collapsed",$),z&&(z.title=$?"展开侧栏":"收起侧栏",z.setAttribute("aria-label",z.title),z.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${$?'<path d="m9 6 6 6-6 6"/>':'<path d="m15 6-6 6 6 6"/>'}</svg>`),c()}),t.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{x=!x,d(!1)}),t.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{x=!1,v=!1,d(!1)}),t.querySelector('[data-role="nav-search"]')?.addEventListener("input",u=>{C=u.currentTarget.value,r()}),t.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",u=>{u.stopPropagation(),v=!v,c()}),R(),c();const y=t.querySelector('[data-role="main-stage"]');y&&await L(y)}const i=A=>{if(!v)return;const O=A.target;O?.closest('[data-role="org-popover"]')||O?.closest('[data-role="org-menu-btn"]')||(v=!1,c())},M=A=>{A.key==="Escape"&&(v?(v=!1,c()):x&&(x=!1,d(!1)))},g=()=>{const A=ue();A!==l&&(l=A,v=!1,x=!1,d(!0))};function T(){document.removeEventListener("click",i),document.removeEventListener("keydown",M),window.removeEventListener("hashchange",g)}document.addEventListener("click",i),document.addEventListener("keydown",M),window.addEventListener("hashchange",g),await d(!0)}const Ue=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,He='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',Ge='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',J='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>',ve={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},Ye={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function Ke(t){const e=t.replace(/\D/g,"");return e.length===11?`${e.slice(0,3)} •••• ${e.slice(7)}`:t}function Z(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function me(t,e,s){t.classList.add("bare-login"),document.title="登录 · PACOM Station";let a=!1,o=!1,l="",$="",x="",v="",C=!1,w={},S="",j=!1,L="",E=0,r=null,c=null,R="privacy",V="",d="",i="";const M=e.mode==="demo"&&typeof e.switchDemoRole=="function";function g(){r!==null&&(window.clearInterval(r),r=null),t.classList.remove("bare-login")}function T(){E=60,r!==null&&window.clearInterval(r),r=window.setInterval(()=>{E-=1,E<=0&&(E=0,r!==null&&(window.clearInterval(r),r=null));const u=t.querySelector('[data-act="send-sms"]');u&&(u.disabled=E>0,u.textContent=E>0?`${E} 秒后重发`:L?"重新获取":"获取验证码")},1e3)}function A(){if(!c)return"";if(c==="reset")return`
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
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${Z(d)}" />
                  </div>
                </div>
                ${i?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${Z(i)}</p>`:""}
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
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${J}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                ${M?"当前为离线演示环境，您可直接通过登录页的「演示角色快速体验」切换 5 类内置角色进入 E7F 工作区。":"正式接入账户服务后，将在此开放自助注册与机构邀请码加入流程。"}
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
              ${M?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">选择演示角色</button>':""}
            </div>
          </section>
        </div>
      `;if(c==="legal"){const u=ve[R],z=["privacy","terms","service"].map(W=>`<button type="button" role="tab" aria-selected="${R===W}" class="au-legal-tab ${R===W?"is-active":""}" data-act="switch-legal" data-tab="${W}">${ve[W].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${J}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${z}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${u.items.map(W=>`<li>${Z(W)}</li>`).join("")}
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
      `:c==="demoRoles"&&M?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择演示角色</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${J}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(U).map(u=>{const z=U[u];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${u}">
                        <div>
                          <b>${Z(z.roleLabel)} · ${Z(z.displayName)}</b>
                          <small>${Z(Ye[u])}</small>
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
      `:""}function O(){const u=a?`
        <div class="au-field ${w.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Z(x)}" aria-invalid="${w.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${E>0?"disabled":""}>
              ${E>0?`${E} 秒后重发`:L?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${Z(w.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${L?`验证码已发送至 ${Z(Ke(L))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${w.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Z(l)}" aria-invalid="${w.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${Z(w.id??"")}</p>
        </div>
      `,z=a?`
        <div class="au-field ${w.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Z(v)}" aria-invalid="${w.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${Z(w.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${w.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${o?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Z($)}" aria-invalid="${w.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${o?"隐藏密码":"显示密码"}">
              ${o?Ge:He}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${Z(w.pwd??"")}</p>
        </div>
      `;t.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${Ue}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${j?"disabled":""}>
                  ${u}
                  ${z}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${S?"":"hidden"}>${Z(S)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${C?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${j?"disabled":""}>
                    ${j?"正在登录…":"登录"}
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
                ${M?`<div class="au-demo-bar">
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
    `,y()}function y(){const u=t.querySelector("#au-id"),z=t.querySelector("#au-pwd"),W=t.querySelector("#au-sphone"),G=t.querySelector("#au-scode"),X=t.querySelector('input[name="keep"]');u?.addEventListener("input",()=>{if(l=u.value,w.id||S){delete w.id,S="",u.closest(".au-field")?.classList.remove("bad");const B=t.querySelector("#au-id-err");B&&(B.textContent="");const _=t.querySelector("#au-login-ferr");_&&(_.hidden=!0)}}),z?.addEventListener("input",()=>{if($=z.value,w.pwd||S){delete w.pwd,S="",z.closest(".au-field")?.classList.remove("bad");const B=t.querySelector("#au-pwd-err");B&&(B.textContent="");const _=t.querySelector("#au-login-ferr");_&&(_.hidden=!0)}}),W?.addEventListener("input",()=>{if(x=W.value,w.sphone||S){delete w.sphone,S="",W.closest(".au-field")?.classList.remove("bad");const B=t.querySelector("#au-sphone-err");B&&(B.textContent="");const _=t.querySelector("#au-login-ferr");_&&(_.hidden=!0)}}),G?.addEventListener("input",()=>{if(v=G.value.replace(/\D/g,"").slice(0,6),G.value=v,w.scode||S){delete w.scode,S="",G.closest(".au-field")?.classList.remove("bad");const B=t.querySelector("#au-scode-err");B&&(B.textContent="");const _=t.querySelector("#au-login-ferr");_&&(_.hidden=!0)}}),X?.addEventListener("change",()=>{C=X.checked}),t.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{o=!o,O(),t.querySelector("#au-pwd")?.focus()}),t.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{a=!a,w={},S="",O(),t.querySelector(a?"#au-sphone":"#au-id")?.focus()}),t.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const B=x.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(B)){w={sphone:"请输入有效的手机号码"},O(),t.querySelector("#au-sphone")?.focus();return}w={},L=B,T(),O(),t.querySelector("#au-scode")?.focus()}),t.querySelector('form[data-form="login"]')?.addEventListener("submit",async B=>{if(B.preventDefault(),!j){if(w={},S="",a?(x.trim()||(w.sphone="请输入手机号码"),/^\d{6}$/.test(v.trim())||(w.scode="请输入 6 位验证码")):(l.trim()||(w.id="请输入电子邮箱或手机号码"),$||(w.pwd="请输入密码")),Object.keys(w).length>0){O();const _=Object.keys(w)[0];t.querySelector(`#au-${_}`)?.focus();return}j=!0,O();try{const _=await e.login({account:(a?x:l).trim(),password:a?v.trim():$});g(),s(_)}catch(_){j=!1,S=_ instanceof Error?_.message:"账户或密码不正确",O()}}}),t.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{d=l.trim(),i="",c="reset",O(),t.querySelector("#au-rs-id")?.focus()}),t.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{c="register",O()}),t.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{c="legal",O()}),t.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{V="",c="contact",O()}),t.querySelectorAll('[data-act="open-demo-roles"]').forEach(B=>{B.addEventListener("click",()=>{c="demoRoles",O()})}),t.querySelectorAll('[data-act="close-modal"]').forEach(B=>{B.addEventListener("click",()=>{c=null,O()})}),t.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",B=>{B.target===B.currentTarget&&(c=null,O())}),t.querySelectorAll('[data-act="switch-legal"]').forEach(B=>{B.addEventListener("click",()=>{const _=B.dataset.tab;_&&(R=_,O())})}),t.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),V="已复制"}catch{V="support@pacom.cn"}O()}),t.querySelector("#au-reset-form")?.addEventListener("submit",B=>{B.preventDefault(),d=t.querySelector("#au-rs-id")?.value.trim()??"",d?M?i="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":i="如账户存在，验证码已发送。":i="请输入电子邮箱或手机号码",O()}),t.querySelectorAll('[data-act="pick-demo-role"]').forEach(B=>{B.addEventListener("click",async()=>{const _=B.dataset.roleId;if(!_||!e.switchDemoRole)return;const Q=await e.switchDemoRole(_);g(),s(Q)})})}O()}async function Xe(){const t=document.getElementById("app");if(t)try{const e=ke(),s=await e.getSession(),a=async o=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await Ze(t,e,o,()=>{me(t,e,l=>{a(l)})})};if(!s||window.location.hash==="#login"){me(t,e,o=>{a(o)});return}await a(s)}catch(e){t.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(e)}</div></div>`}}Xe();
//# sourceMappingURL=index-A3-sv7Yi.js.map
