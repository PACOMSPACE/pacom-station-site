(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const g of i.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const d={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},ce={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[d.projectId,d.project1Id],allowedBuildingIds:[d.buildingId,d.buildingFId],allowedFloorIds:[d.lockedFloor8Id,d.floorId,d.lockedFloor6Id],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[d.projectId],allowedBuildingIds:[d.buildingId,d.buildingFId],allowedFloorIds:[d.lockedFloor8Id,d.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[d.projectId],allowedBuildingIds:[d.buildingId],allowedFloorIds:[d.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[d.projectId],allowedBuildingIds:[d.buildingId],allowedFloorIds:[d.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[d.projectId],allowedBuildingIds:[d.buildingId],allowedFloorIds:[d.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},xe="pacom.web.demo.role";class Ne{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){const a=sessionStorage.getItem(xe);a&&ce[a]&&(this.activeSession=structuredClone(ce[a]));const s=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:d.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:s,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:d.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:d.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:d.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:s,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:s,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:s,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:d.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:s,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:d.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:s,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:s,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:s,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:s},{id:"conn-e7f-dali",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:s},{id:"conn-e7f-modbus",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:d.projectId,floorId:d.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:d.projectId,floorId:d.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:d.projectId,floorId:d.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:d.projectId,floorId:d.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:d.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:d.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:d.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:s,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:d.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:d.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:d.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:d.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(ce).map((l,o)=>({userId:l.userId,displayName:l.displayName,email:`${l.role.replaceAll("_",".")}@pacom.local`,role:l.role,roleLabel:l.roleLabel,scopeSummary:l.scope.allowedZoneIds?.length?`E栋 7F（${l.scope.allowedZoneIds.length} 个我的区域）`:`${l.scope.allowedProjectIds.length} 项目 / ${l.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:o===0?s:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(a,s,l,o,i){this.traces.unshift({at:new Date().toISOString(),channel:a,operation:s,endpoint:l,request:i,response:o}),this.traces.length>40&&this.traces.pop()}pushAudit(a,s,l,o){const i=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:i?.displayName??"anonymous",role:i?.role??"member",action:a,target:s,result:l,detail:o})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(a){if(!a.account.trim()||!a.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const s=a.account.includes("admin")?"org_admin":a.account.includes("eng")?"commissioning_engineer":a.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(ce[s]),sessionStorage.setItem(xe,s),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:a.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(xe),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(a){return this.activeSession=structuredClone(ce[a]),sessionStorage.setItem(xe,a),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${a}`,this.activeSession),structuredClone(this.activeSession)}async getSpatialTree(){const a=this.requireSession(),s=[{id:d.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"},{id:d.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"}],l=[{id:d.buildingId,projectId:d.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.png"},{id:d.buildingFId,projectId:d.projectId,name:"F栋",aboveFloors:12,belowFloors:2,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.png"}],o={projects:s.filter(i=>a.scope.allowedProjectIds.includes(i.id)),buildings:l.filter(i=>a.scope.allowedBuildingIds.includes(i.id)),floors:[{id:d.lockedFloor8Id,buildingId:d.buildingId,kind:"above",level:8,name:"8F",plan:null},{id:d.floorId,buildingId:d.buildingId,kind:"above",level:7,name:"7F",areaSqm:1383.1,plan:{floorId:d.floorId,imageUrl:"./media/7F.webp",planVersion:1,updatedAt:"2026-11-22T00:00:00Z"}},{id:d.lockedFloor6Id,buildingId:d.buildingId,kind:"above",level:6,name:"6F",plan:null}],zones:[{id:"zone-e7f-lab-east",floorId:d.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:d.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:d.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:d.floorId,name:"核心走廊与弱电井",category:"corridor"}]};return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:o.projects.length,buildings:o.buildings.length,floors:o.floors.length}),o}async getFloorDevices(a){const s=this.requireSession();if(!s.scope.allowedFloorIds.includes(a)){const o={code:"FORBIDDEN",status:403,message:`当前角色「${s.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${a}/devices`,o),this.pushAudit("floor.read",a,"denied",o.message),new Error(`403 FORBIDDEN: ${o.message}`)}if(a!==d.floorId)return[];let l=structuredClone(this.devices);return s.scope.allowedZoneIds?.length&&(l=l.filter(o=>o.logicalZoneId&&s.scope.allowedZoneIds.includes(o.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${a}/devices`,{count:l.length}),l}async dispatchControlBatch(a){const s=this.requireSession();if(!s.scope.canControlDevices||!s.scope.allowedFloorIds.includes(a.floorId))throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权下发控制指令`);const l=`batch-e7f-${Date.now().toString(36)}`,o={batchId:l,floorId:a.floorId,createdBy:s.userId,createdAt:new Date().toISOString(),receipts:a.targets.map(i=>({deviceId:i.deviceId,command:i.command,targetValue:i.targetValue,status:"queued"}))};return this.batches.set(l,o),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",o,a),this.pushAudit("control.dispatch",l,"success",`下发 ${a.targets.length} 台设备`),o.receipts.forEach((i,g)=>{const E=this.devices.find(f=>f.id===i.deviceId);setTimeout(()=>{i.status="dispatched",i.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:l,deviceId:i.deviceId,status:"dispatched",at:i.dispatchedAt})},280+g*120),setTimeout(()=>{const f=new Date().toISOString();!E||E.connectivity==="offline"?(i.status="timeout",i.errorCode="GATEWAY_READBACK_TIMEOUT",i.errorMessage="设备离线，网关未收到回读确认",i.verifiedAt=f):(i.status="verified_success",i.observedValue=i.targetValue,i.verifiedAt=f,this.applyObservedTelemetry(E,i.command,i.targetValue,f)),this.emit({type:"control.receipt.updated",batchId:l,deviceId:i.deviceId,status:i.status,observedValue:i.observedValue,at:f})},900+g*220)}),structuredClone(o)}applyObservedTelemetry(a,s,l,o){s==="lighting.dimming"&&a.telemetry.dimming?(a.telemetry.dimming={...a.telemetry.dimming,value:l,collectedAt:o,stale:!1},a.telemetry.power&&(a.telemetry.power={...a.telemetry.power,value:Number(l)>0,collectedAt:o,stale:!1})):(s==="lighting.power"||s==="hvac.power")&&a.telemetry.power?a.telemetry.power={...a.telemetry.power,value:l,collectedAt:o,stale:!1}:s==="hvac.setpoint"&&a.telemetry.setpoint&&(a.telemetry.setpoint={...a.telemetry.setpoint,value:l,collectedAt:o,stale:!1}),this.emit({type:"telemetry.updated",floorId:a.floorId,deviceId:a.id,collectedAt:o,values:{[s]:l}})}async getControlBatch(a){this.requireSession();const s=this.batches.get(a);if(!s)throw new Error(`404 NOT_FOUND: 批次 ${a} 不存在`);return structuredClone(s)}async listAlarms(a){return!this.requireSession().scope.allowedFloorIds.includes(a)||a!==d.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(a,s){const l=this.requireSession();if(!l.scope.canManageAlarms){const i=`角色「${l.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",a,"denied",i),new Error(`403 FORBIDDEN: ${i}`)}const o=this.alarms.find(i=>i.id===a);if(!o)throw new Error(`404 NOT_FOUND: 告警 ${a} 不存在`);return o.status="acknowledged",o.acknowledgedAt=new Date().toISOString(),o.acknowledgedBy=l.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${a}/acknowledge`,o,{note:s}),this.pushAudit("alarm.acknowledge",a,"success",s),this.emit({type:"alarm.changed",floorId:o.floorId,alarmId:a,status:"acknowledged",at:o.acknowledgedAt}),structuredClone(o)}async listWorkOrders(a){return!this.requireSession().scope.allowedFloorIds.includes(a)||a!==d.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(a){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建工单`);const l=new Date().toISOString(),o={id:`wo-e7f-${Date.now().toString(36)}`,projectId:d.projectId,buildingId:d.buildingId,floorId:a.floorId,deviceId:a.deviceId??null,alarmId:a.alarmId??null,title:a.title,description:a.description,status:"open",assigneeId:null,createdAt:l,updatedAt:l};if(this.workOrders.unshift(o),a.alarmId){const i=this.alarms.find(g=>g.id===a.alarmId);i&&(i.workOrderId=o.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",o,a),this.pushAudit("work_order.create",o.id,"success",o.title),structuredClone(o)}async updateWorkOrderStatus(a,s){const l=this.requireSession();if(!l.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权流转工单`);const o=this.workOrders.find(i=>i.id===a);if(!o)throw new Error(`404 NOT_FOUND: 工单 ${a} 不存在`);return o.status=s,o.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${a}`,o,{status:s}),this.pushAudit("work_order.update",a,"success",`状态更新为 ${s}`),structuredClone(o)}async updateDevicePlanPoint(a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw this.pushAudit("device.plan_point",a.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权编辑图纸标点`);const l=this.devices.find(o=>o.id===a.deviceId);if(!l)throw new Error(`404 NOT_FOUND: 设备 ${a.deviceId} 不存在`);if(l.version!==a.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${l.version}，请刷新后重试`);return l.planPoint={floorId:a.floorId,planVersion:a.planVersion,x:Number(a.x.toFixed(4)),y:Number(a.y.toFixed(4))},l.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${a.deviceId}/plan-point`,l,a),this.pushAudit("device.plan_point",a.deviceId,"success",`坐标更新 (${l.planPoint.x}, ${l.planPoint.y})`),structuredClone(l)}async updateDeviceHardwareBinding(a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改硬件绑定`);const l=this.devices.find(i=>i.id===a.deviceId);if(!l)throw new Error(`404 NOT_FOUND: 设备 ${a.deviceId} 不存在`);if(l.version!==a.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${l.version}）`);const o=new Date().toISOString();return l.physicalInstalled=a.physicalInstalled,l.physicalVerifiedAt=a.physicalInstalled?o:null,l.hardwareBinding={gatewayId:a.gatewayId,protocol:a.protocol,networkAddress:a.networkAddress,portOrChannel:a.portOrChannel,boundAt:o,boundBy:s.displayName},l.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${a.deviceId}/hardware-binding`,l,a),this.pushAudit("device.hardware_binding",a.deviceId,"success",`${a.protocol} ${a.networkAddress}`),structuredClone(l)}async listConnections(a){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(a){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(a,s){const l=this.requireSession();if(!l.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权冻结交付批次`);const o=this.devices.filter(g=>g.physicalInstalled&&g.hardwareBinding).length,i={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:d.projectId,floorId:a,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:o,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:l.displayName,note:s||"例行交付基线冻结"};return this.deliveryBatches.unshift(i),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${a}/deliveries/freeze`,i,{note:s}),this.pushAudit("delivery.freeze",i.id,"success",`${o}/${this.devices.length} 已现场核验`),structuredClone(i)}async getAnalysisReport(a,s,l){this.requireSession();const o=s==="today"?1:s==="7d"?7:30,g={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*o)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*o).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(B=>B.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*o).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*o).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*o).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[a],E=s==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],f={category:a,range:s,scopeId:l,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:g.kpis,unit:g.unit,series:g.base.map((B,C)=>({label:E[C],value:Math.round(B*(a==="energy"||a==="carbon"?o/2+.5:1)),baseline:Math.round(B*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:g.base[3],unit:g.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:g.base[4],unit:g.unit,status:a==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:g.base[1],unit:g.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${a}?range=${s}&scopeId=${l}`,{kpis:f.kpis.length}),f}async listScenes(a){return this.requireSession(),structuredClone(this.scenes)}async createScene(a){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const l={id:`scn-e7f-${Date.now().toString(36)}`,projectId:a.projectId,floorId:a.floorId,name:a.name,description:a.description,enabled:!0,scheduleSummary:"手动触发",actions:a.actions,lastExecutedAt:null};return this.scenes.unshift(l),this.record("REST","createScene","POST /api/v1/scenes",l,a),this.pushAudit("scene.create",l.id,"success",l.name),structuredClone(l)}async executeScene(a){const s=this.scenes.find(o=>o.id===a);if(!s)throw new Error(`404 NOT_FOUND: 场景 ${a} 不存在`);const l=await this.dispatchControlBatch({floorId:s.floorId,idempotencyKey:`scene-${a}-${Date.now()}`,targets:s.actions,reason:`触发场景：${s.name}`});return s.lastExecutedAt=new Date().toISOString(),s.lastBatchId=l.batchId,l}async getRuntimeSettings(a){return this.requireSession(),structuredClone({projectId:d.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(a,s,l){this.requireSession();const o=l>=this.calendar.nightGuardStart?`下班时间 ${l} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,i=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${s} - ${l}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${s} (-30m) ~ ${l} (+30m)`,conflictWarning:o},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:o}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",i,{workdayStart:s,workdayEnd:l}),i}async saveWorkCalendar(a,s,l,o){const i=this.requireSession();if(!i.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权修改运行日历`);if(this.calendar.version!==o)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(s>=l)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:s,workdayEnd:l,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:s,workdayEnd:l,expectedVersion:o}),this.pushAudit("settings.calendar",d.projectId,"success",`${s}-${l}`),structuredClone(this.calendar)}async toggleRuntimeRule(a,s,l){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权启停运行规则`);const i=this.rules.find(g=>g.id===a);if(!i)throw new Error(`404 NOT_FOUND: 规则 ${a} 不存在`);if(i.version!==l)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${i.version}）`);return i.enabled=s,i.version+=1,i.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${a}`,i,{enabled:s,expectedVersion:l}),this.pushAudit("settings.rule_toggle",a,"success",s?"启用":"停用"),structuredClone(i)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(a,s){const l=this.requireSession();if(l.role!=="org_admin"&&l.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const o=ce[s],i={userId:`inv-${Date.now().toString(36)}`,displayName:a.split("@")[0]||a,email:a,role:s,roleLabel:o.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(i),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",i,{email:a,role:s}),this.pushAudit("org.invite",a,"success",o.roleLabel),structuredClone(i)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(a,s){return a!==d.floorId?()=>{}:(this.listeners.add(s),()=>{this.listeners.delete(s)})}emit(a){this.record("WS",a.type,`WS /ws/v1/stream?floorId=${d.floorId}`,a),this.listeners.forEach(s=>s(a))}}function _e(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new Ne}const Ee=[{id:"wg-hvac",name:"暖通运维组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋 5F–7F（HVAC、FCU 与 VAV 系统）",memberCount:3,membersSummary:"陈值班、林工、周工",notifyChannel:"站内 + 短信"},{id:"wg-elec",name:"强电照明组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋全楼照明与配电回路",memberCount:2,membersSummary:"黄工、刘工",notifyChannel:"站内 + 邮件"},{id:"wg-property",name:"园区物业值班组",defaultRoleLabel:"只读访客 / 值班巡检",locationScope:"广实2号园 / 全园区公共空间与值班台",memberCount:4,membersSummary:"张班长、王巡检、赵巡检、吴值守",notifyChannel:"站内 + 每日晨报"}];async function Ve(t,a,s,l,o){let i="profile",g="directory",E=await a.listOrgMembers(),f=await a.listAuditLogs(),B="",C="all",N="all",F="all",V=!1,T=!1,H=!1,O=s.displayName,P=s.role==="org_admin"||s.role==="project_admin"?"设施运维总监":s.role==="commissioning_engineer"?"楼宇自控部署工程师":s.role==="facility_operator"?"暖通运行值班工程师":"园区巡检成员",_="138-0013-8072",K="",j="";async function b(){[E,f]=await Promise.all([a.listOrgMembers(),a.listAuditLogs()]),Z()}function Z(){const U=a.mode==="demo"&&typeof a.switchDemoRole=="function",q=B.trim().toLowerCase(),n=E.filter(m=>C!=="all"&&m.role!==C?!1:q?`${m.displayName} ${m.email} ${m.roleLabel} ${m.scopeSummary}`.toLowerCase().includes(q):!0),y=f.filter(m=>{if(N==="success"&&m.result!=="success"||N==="denied"&&m.result==="success")return!1;if(F!=="all"){const M=`${m.action} ${m.target}`.toLowerCase();if(F==="control"&&!M.includes("control")&&!M.includes("scene")&&!M.includes("控制")||F==="alarm"&&!M.includes("alarm")&&!M.includes("work")&&!M.includes("告警")||F==="deploy"&&!M.includes("deploy")&&!M.includes("plan")&&!M.includes("hardware")&&!M.includes("部署"))return!1}return!0});t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">机构与账户</h1>
              <div class="pacom-tabs" role="tablist" aria-label="机构与账户视图">
                <button class="pacom-tab" role="tab" aria-selected="${i==="profile"}" data-atab="profile">我的账户与权限</button>
                <button class="pacom-tab" role="tab" aria-selected="${i==="members"}" data-atab="members">成员与角色（${E.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${i==="audit"}" data-atab="audit">操作审计日志（${f.length}）</button>
              </div>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">广州国家实验室</span>
              <span class="pacom-badge pacom-badge--accent">${s.roleLabel}</span>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:8px 6px 32px;">
          <div style="width:100%; max-width:960px; margin:0 auto; display:flex; flex-direction:column; gap:20px;">
            ${K?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${K}</span></div>`:""}
            ${j?`<div class="pacom-alert-banner">${j}</div>`:""}
            ${i==="profile"?`
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">个人资料与授权摘要</h2>
                    <span class="pacom-badge pacom-badge--online">${s.roleLabel}</span>
                  </div>
                  <form class="lov-settings-card" data-role="profile-form">
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">显示姓名与岗位</span>
                        <span class="lov-setting-desc">账号 ID：${s.userId} · 所属机构：广州国家实验室</span>
                      </div>
                      <div class="lov-setting-control" style="flex-wrap:wrap;">
                        <input class="pacom-input" style="width:150px;" name="displayName" value="${O}" aria-label="显示姓名" required />
                        <input class="pacom-input" style="width:180px;" name="jobTitle" value="${P}" aria-label="岗位职务" />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">告警接收手机号（SMS）</span>
                        <span class="lov-setting-desc">用于接收 P1 严重告警短信推送与工单升级提醒</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:180px;" name="phone" value="${_}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
                        <button type="submit" class="pacom-btn pacom-btn--primary">保存资料</button>
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
                  </form>
                </section>

                ${U?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">多角色权限预览切换</h2>
                        <span class="pacom-badge pacom-badge--neutral">仅 Demo 预览可用</span>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(ce).map(m=>{const M=ce[m];return`
                              <button class="pacom-role-card ${m===s.role?"is-active":""}" data-switch-role="${m}">
                                <strong style="font-weight:500;">${M.roleLabel}</strong>
                                <span class="pacom-row-sub">${M.displayName}</span>
                                <span class="pacom-row-sub">授权楼层 ${M.scope.allowedFloorIds.length} 层 · 部署编辑：${M.scope.canEditDeployment?"是":"否"}</span>
                              </button>`}).join("")}
                      </div>
                    </section>`:""}

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
                </section>

                <section class="lov-section">
                  <details class="lov-tech-details pacom-card" style="padding:12px 18px; border-top:0;">
                    <summary style="font-size:13px; font-weight:500; color:var(--pacom-text-body);">
                      <span>开发者联调：会话 RBAC 权限契约（JSON）</span>
                      <span class="pacom-row-sub">展开查看 ▾</span>
                    </summary>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                      <span class="pacom-row-sub">服务端下发的当前会话权限对象（供前后端核对）</span>
                      <button class="pacom-btn" data-copy-session="1">${H?"已复制":"复制 JSON"}</button>
                    </div>
                    <pre class="pacom-code">${JSON.stringify(s,null,2)}</pre>
                  </details>
                </section>`:i==="members"?`
                  ${V?`
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
                                ${Object.keys(ce).map(m=>`<option value="${m}">${ce[m].roleLabel}</option>`).join("")}
                              </select>
                              <button class="pacom-btn pacom-btn--primary" type="submit">发送邀请</button>
                            </div>
                          </div>
                        </form>
                      </section>`:""}

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                        <h2 class="lov-section-title">${g==="directory"?"机构成员目录":"工作组与空间授权（Groups & Scope）"}</h2>
                        <div class="pacom-tabs" role="tablist" aria-label="成员与工作组切换">
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${g==="directory"}" data-msub="directory">成员目录（${E.length}）</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${g==="groups"}" data-msub="groups">工作组（${Ee.length}）</button>
                        </div>
                      </div>
                      <span class="pacom-row-sub">${g==="directory"?`当前显示 ${n.length} 人`:"按空间边界与值班组统一分派告警与工单"}</span>
                    </div>
                    ${g==="directory"?`
                        <div class="lov-table-card">
                          <div class="lov-table-toolbar">
                            <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                              <input class="pacom-input" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${B}" />
                              <select class="pacom-select" data-role-filter>
                                <option value="all" ${C==="all"?"selected":""}>全部角色</option>
                                ${Object.keys(ce).map(m=>`<option value="${m}" ${C===m?"selected":""}>${ce[m].roleLabel}</option>`).join("")}
                              </select>
                            </div>
                            <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                              ${V?"收起邀请":"+ 邀请成员"}
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
                                ${n.map(m=>`
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
                        </div>`:`
                        ${T?`
                            <form class="lov-settings-card" data-role="new-group-form" style="margin-bottom:10px;">
                              <div class="lov-setting-row" style="display:grid; grid-template-columns:140px 130px 1fr auto; gap:8px; align-items:center;">
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
                        <div class="lov-table-card">
                          <div class="lov-table-toolbar">
                            <span class="pacom-row-sub">工作组同时用于「运行设置 → 通知与工单规则」的告警分流与自动派单</span>
                            <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-group="1">${T?"收起表单":"+ 新建工作组"}</button>
                          </div>
                          <div class="lov-table-wrap">
                            <table class="lov-table">
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
                                ${Ee.map(m=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${m.name}</div>
                                      <div class="pacom-row-sub">${m.membersSummary}</div>
                                    </td>
                                    <td><span class="pacom-badge pacom-badge--neutral">${m.defaultRoleLabel}</span></td>
                                    <td><span class="pacom-row-sub">${m.locationScope}</span></td>
                                    <td><strong>${m.memberCount}</strong> 人</td>
                                    <td><span class="pacom-badge pacom-badge--accent">${m.notifyChannel}</span></td>
                                  </tr>`).join("")}
                              </tbody>
                            </table>
                          </div>
                        </div>`}
                  </section>`:`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">操作与权限拦截审计日志</h2>
                      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                        <select class="pacom-select" data-audit-cat aria-label="按行为类别筛选">
                          <option value="all" ${F==="all"?"selected":""}>全部操作类型</option>
                          <option value="control" ${F==="control"?"selected":""}>设备控制与场景</option>
                          <option value="alarm" ${F==="alarm"?"selected":""}>告警与工单处置</option>
                          <option value="deploy" ${F==="deploy"?"selected":""}>系统部署与点位</option>
                        </select>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${N==="all"}" data-audit-filter="all">全部（${f.length}）</button>
                          <button class="pacom-tab" aria-selected="${N==="success"}" data-audit-filter="success">成功</button>
                          <button class="pacom-tab" aria-selected="${N==="denied"}" data-audit-filter="denied">已拦截</button>
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
                            ${y.map(m=>`
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
    `,t.querySelectorAll("[data-atab]").forEach(m=>{m.addEventListener("click",()=>{i=m.dataset.atab,K="",j="",Z()})}),t.querySelectorAll("[data-msub]").forEach(m=>{m.addEventListener("click",()=>{g=m.dataset.msub??"directory",Z()})}),t.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{T=!T,Z()}),t.querySelector('[data-role="new-group-form"]')?.addEventListener("submit",m=>{m.preventDefault();const M=new FormData(m.currentTarget),x=String(M.get("wgName")??"").trim(),L=String(M.get("wgRole")??"运行值班员"),w=String(M.get("wgScope")??"").trim();!x||!w||(Ee.push({id:`wg-${Date.now()}`,name:x,defaultRoleLabel:L,locationScope:w,memberCount:1,membersSummary:s.displayName,notifyChannel:"站内 + 邮件"}),T=!1,K=`已创建工作组「${x}」（授权空间：${w}）。`,Z())}),t.querySelector('[data-role="profile-form"]')?.addEventListener("submit",m=>{m.preventDefault();const M=new FormData(m.currentTarget);O=String(M.get("displayName")??"").trim()||s.displayName,P=String(M.get("jobTitle")??"").trim()||P,_=String(M.get("phone")??"").trim()||_,K=`已更新个人资料：${O}（${P}）· 告警短信接收号 ${_}。`,Z()}),t.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await a.logout(),window.location.hash="#login",o()}),t.querySelector("[data-copy-session]")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(s,null,2)),H=!0,Z(),window.setTimeout(()=>{H=!1,Z()},1600)}catch{}}),t.querySelectorAll("[data-switch-role]").forEach(m=>{m.addEventListener("click",async()=>{if(!a.switchDemoRole)return;const M=await a.switchDemoRole(m.dataset.switchRole);l(M)})}),t.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{V=!V,Z()}),t.querySelector("[data-member-search]")?.addEventListener("input",m=>{const M=m.currentTarget,x=M.selectionStart??M.value.length;B=M.value,Z();const L=t.querySelector("[data-member-search]");L&&(L.focus(),L.setSelectionRange(x,x))}),t.querySelector("[data-role-filter]")?.addEventListener("change",m=>{C=m.currentTarget.value,Z()}),t.querySelectorAll("[data-audit-filter]").forEach(m=>{m.addEventListener("click",()=>{N=m.dataset.auditFilter??"all",Z()})}),t.querySelector("[data-audit-cat]")?.addEventListener("change",m=>{F=m.currentTarget.value??"all",Z()}),t.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async m=>{m.preventDefault(),j="";const M=new FormData(m.currentTarget);try{await a.inviteOrgMember(String(M.get("email")??""),String(M.get("role"))),V=!1,await b()}catch(x){j=x instanceof Error?x.message:String(x),Z()}})}Z()}const be={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},Ue={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},We={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function He(t){const a=`${t.title} ${t.message}`.toLowerCase();return a.includes("离线")||a.includes("modbus")||a.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":a.includes("co₂")||a.includes("co2")||a.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function Ze(t){return t.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:t.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}async function Ge(t,a,s){const l=new URLSearchParams(window.location.hash.split("?")[1]??""),o=l.get("alarm"),i=l.get("wo");let g=[],E=[],f=[],B=i?"workorders":"alarms",C="all",N="all",F="all",V=!1,T="",H=o,O=i,P=null,_=null,K="resolved";const j=new Set,b=new Map,Z=new Map,U=new Map,q=new Map;let n="",y="";function D(w){const z=q.get(w.id);if(z)return z;const J=w.id.match(/(\d+)$/),e=`WO-2026-${J?J[1]:w.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,c={estCost:"¥ 450",actualCost:w.status==="closed"?"¥ 380":"--",cmmsNo:e,assigneeGroup:"暖通运维组",tasks:[{id:`${w.id}-t1`,label:"核查设备供电与现场指示灯状态",done:w.status!=="open"},{id:`${w.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:w.status==="resolved"||w.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:w.createdAt?w.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${e}）`}]};return q.set(w.id,c),c}async function m(){[g,E,f]=await Promise.all([a.listAlarms(d.floorId),a.listWorkOrders(d.floorId),a.getFloorDevices(d.floorId).catch(()=>[])]),E.forEach(w=>D(w)),L()}function M(w){if(!w)return{name:"楼层通用",zone:"E7F",dev:null};const z=f.find(J=>J.id===w)??null;return z?{name:z.name,zone:(z.logicalZoneId?We[z.logicalZoneId]:void 0)??"E7F",dev:z}:{name:w,zone:"E7F",dev:null}}function x(w){const z=M(w.deviceId).dev;z&&z.connectivity==="offline"?U.set(w.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${z.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):U.set(w.id,{verdict:"pass",summary:`自检通过（PASS）：「${z?.name??w.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况 ✓","2. 下发序列（Sequence）：试探指令回读响应 18 ms ✓","3. 自动复位（Restore）：已恢复原自动策略设定值 ✓"]}),H=w.id,L()}function L(){const w=g.filter(u=>u.status==="active"&&!b.has(u.id)),z=E.filter(u=>!D(u).cancelled&&(u.status==="open"||u.status==="assigned"||u.status==="in_progress")),J=g.filter(u=>u.status!=="active").length+Z.size,e=0,c=b.size,S=T.trim().toLowerCase(),R=g.filter(u=>{const v=b.has(u.id);if(C==="snoozed"){if(!v)return!1}else if(C==="active"){if(u.status!=="active"||v)return!1}else if(C==="acknowledged"){if(u.status!=="acknowledged")return!1}else if(v)return!1;if(F!=="all"&&u.severity!==F)return!1;if(!S)return!0;const W=M(u.deviceId);return`${u.title} ${u.message} ${W.name} ${W.zone} ${u.deviceId}`.toLowerCase().includes(S)}),oe=new Map;for(const u of R){const v=`${u.title} ${u.message}`.toLowerCase(),W=v.includes("离线")||v.includes("modbus")||v.includes("通信"),Q=V?W?"root-gateway-modbus":u.deviceId:u.id,te=W?"根因：E7F 主控网关通信链路":`根因：${M(u.deviceId).name}`,se=oe.get(Q)??{rootLabel:te,items:[]};se.items.push(u),oe.set(Q,se)}const me=Array.from(oe.values()),ne=E.filter(u=>{const v=D(u);if(N==="cancelled"){if(!v.cancelled)return!1}else if(v.cancelled||N==="open"&&(u.status==="resolved"||u.status==="closed")||N==="resolved"&&u.status!=="resolved"||N==="closed"&&u.status!=="closed")return!1;if(!S)return!0;const W=M(u.deviceId);return`${u.title} ${u.description} ${u.id} ${v.cmmsNo} ${W.name}`.toLowerCase().includes(S)});t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">告警中心</h1>
              <div class="pacom-tabs" role="tablist" aria-label="告警中心视图">
                <button class="pacom-tab" role="tab" aria-selected="${B==="alarms"}" data-main-tab="alarms">
                  实时告警（${g.length-c}）
                </button>
                <button class="pacom-tab" role="tab" aria-selected="${B==="workorders"}" data-main-tab="workorders">
                  运维工单（${E.length}）
                </button>
              </div>
            </div>

            <div class="pacom-header-meta">
              ${B==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="lov-switch" role="switch" aria-checked="${V}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="lov-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${s.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${s.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="lov-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">↻</button>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="lov-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="lov-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${B==="alarms"&&C==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">待处理告警</span>
              <div class="lov-kpi-value">${w.length}<span class="lov-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="lov-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${B==="workorders"&&N==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">处理中工单</span>
              <div class="lov-kpi-value">${z.length}<span class="lov-kpi-unit">单</span></div>
              <span class="lov-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${B==="alarms"&&C==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">已闭环生效</span>
              <div class="lov-kpi-value">${J}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="lov-kpi-cell">
              <span class="lov-kpi-label">关单复发待查</span>
              <div class="lov-kpi-value" style="color:var(--pacom-status-online);">${e}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${n?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${n}</span></div>`:""}
          ${y?`<div class="pacom-alert-banner">${y}</div>`:""}

          ${B==="alarms"?`
              <section class="lov-table-card">
                <div class="lov-table-toolbar">
                  <div class="lov-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${T}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${F==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${F==="critical"?"selected":""}>严重</option>
                      <option value="major" ${F==="major"?"selected":""}>重要</option>
                      <option value="minor" ${F==="minor"?"selected":""}>一般</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${C==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${C==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${C==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${C==="snoozed"}" data-status-pill="snoozed">已忽略（${c}）</button>
                    </div>
                  </div>
                  <div class="lov-table-toolbar-group">
                    ${j.size>0&&s.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${j.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${me.length} 项</span>
                  </div>
                </div>
                ${me.length===0?'<div class="lov-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
                    <div class="lov-table-wrap">
                      <table class="lov-table">
                        <thead>
                          <tr>
                            <th style="width:36px;"></th>
                            <th>级别</th>
                            <th>告警事项</th>
                            <th>设备与空间</th>
                            <th>持续时长</th>
                            <th>状态</th>
                            <th style="text-align:right;">操作</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${me.map(u=>{const v=u.items[0],W=Ue[v.severity]??{label:v.severity,cls:"pacom-badge--neutral"},Q=M(v.deviceId),te=Ze(v),se=H===v.id,ue=b.get(v.id),r=!!ue,A=j.has(v.id),p=U.get(v.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" data-check-alarm="${v.id}" ${A?"checked":""} ${v.status!=="active"||r?"disabled":""} aria-label="选择 ${v.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${W.cls}">${W.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${v.title}</span>
                                      ${V?`<span class="pacom-badge pacom-badge--accent">${u.rootLabel}${u.items.length>1?` · 影响 ${u.items.length} 项`:""}</span>`:""}
                                      ${p?`<span class="pacom-badge ${p.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${p.verdict.toUpperCase()}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${v.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${Q.name}</div>
                                    <div class="pacom-row-sub">${Q.zone}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${te.duration}</div>
                                    <div class="pacom-row-sub" style="color:${te.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${te.trend}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${r?"pacom-badge--neutral":v.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${r?`忽略 ${ue?.duration}`:v.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${r?`<button class="pacom-btn" data-unsnooze="${v.id}">恢复监控</button>`:`
                                            ${v.status==="active"?`<button class="pacom-btn" data-mark-actioned="${v.id}" ${s.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${v.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${v.id}" ${s.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${v.id}">${se?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${se?`
                                    <tr class="lov-table-detail-row">
                                      <td colspan="7">
                                        <div class="lov-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${He(v)}
                                            </div>
                                            ${ue?`<div class="pacom-info-banner">忽略周期：${ue.duration} · 原因备注：${ue.reason}</div>`:""}
                                            ${p?`
                                                <div class="lov-banner ${p.verdict==="pass"?"lov-banner--ok":"lov-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="lov-banner-title">${p.summary}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${p.steps.map(h=>`<span>${h}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${v.id}</code> · 设备编号 <code>${v.deviceId}</code> · 关联工单 ${v.workOrderId??"无"}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${v.id}">单机自检（FTT）</button>
                                              ${!r&&v.status==="active"?`<button class="pacom-btn" data-open-snooze="${v.id}">限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${v.deviceId}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${v.deviceId}">定位设备 →</button>
                                            </div>
                                            ${P===v.id?`
                                                <form data-snooze-form="${v.id}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
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
              ${(()=>{const u=O?E.find(v=>v.id===O)??null:null;if(u){const v=M(u.deviceId),W=D(u),Q=!!(W.cancelled||u.status==="closed");return`
                  <section class="lov-section" data-role="wo-workbench">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${u.id}">← 返回运维工单列表</button>
                        <h2 class="lov-section-title">${u.title}</h2>
                        <span class="pacom-badge pacom-badge--accent">${W.cmmsNo}</span>
                        ${W.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" data-wo-status="${u.id}" aria-label="更新工单状态" ${Q?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(te=>`<option value="${te}" ${u.status===te?"selected":""}>${be[te]}</option>`).join("")}
                          <option value="cancelled" ${W.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${_===u.id?`
                        <form data-close-wo-form="${u.id}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${be[K]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${W.cause??""}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${W.solution??""}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${W.actualCost==="--"?"":W.actualCost}" />
                          </div>
                          <div style="display:flex; justify-content:flex-end; gap:8px;">
                            <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                            <button class="pacom-btn pacom-btn--primary" type="submit">保存并更新状态</button>
                          </div>
                        </form>`:""}
                    <div class="lov-wo-workbench">
                      <div style="display:flex; flex-direction:column; gap:14px;">
                        <div class="pacom-card" style="gap:10px;">
                          <strong style="font-size:14px; font-weight:500;">工单描述与现场检查任务清单</strong>
                          <div class="pacom-row-sub">${u.description}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${W.tasks.map(te=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" data-wo-task="${u.id}" data-task-id="${te.id}" ${te.done?"checked":""} ${Q?"disabled":""} />
                                    <span>${te.label}</span>
                                  </span>
                                  ${te.unit?`<span class="pacom-row-sub">实测：${te.reading??"--"} ${te.unit}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${W.history.map(te=>`<span>• <span class="pacom-row-sub">${te.at}</span> — ${te.text}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${u.id}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${W.cmmsNo}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${v.name}（${v.zone}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${W.assigneeGroup}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${W.estCost} / 实际 ${W.actualCost}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${W.cause??"待完单填写"}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${W.solution??"待完单填写"}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${u.deviceId}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${u.deviceId}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="lov-table-card">
                  <div class="lov-table-toolbar">
                    <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${T}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${N==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${N==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${N==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${N==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${N==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${ne.length} 条工单</span>
                  </div>
                  ${ne.length===0?'<div class="lov-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
                      <div class="lov-table-wrap">
                        <table class="lov-table">
                          <thead>
                            <tr>
                              <th>工单事项</th>
                              <th>关联设备与空间</th>
                              <th>CMMS 单号 / 责任组</th>
                              <th style="text-align:right;">状态流转与详情</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${ne.map(v=>{const W=M(v.deviceId),Q=D(v),te=!!(Q.cancelled||v.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${v.title}</span>
                                        ${Q.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${v.description} · <code>${v.id}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${W.name}</div>
                                      <div class="pacom-row-sub">${W.zone}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${Q.cmmsNo}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${Q.assigneeGroup} · 预估 ${Q.estCost}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" data-wo-status="${v.id}" aria-label="更新工单状态" ${te?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(se=>`<option value="${se}" ${v.status===se?"selected":""}>${be[se]}</option>`).join("")}
                                          <option value="cancelled" ${Q.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${v.id}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${_===v.id?`
                                      <tr class="lov-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${v.id}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${be[K]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${Q.cause??""}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${Q.solution??""}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${Q.actualCost==="--"?"":Q.actualCost}" />
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
    `,t.querySelectorAll("[data-main-tab]").forEach(u=>{u.addEventListener("click",()=>{B=u.dataset.mainTab??"alarms",n="",L()})}),t.querySelectorAll("[data-kpi-filter]").forEach(u=>{u.addEventListener("click",()=>{const v=u.dataset.kpiFilter;n="",v==="workorders"?(B="workorders",N=N==="open"?"all":"open"):(v==="active"||v==="acknowledged")&&(B="alarms",C=C===v?"all":v),L()})}),t.querySelectorAll("[data-status-pill]").forEach(u=>{u.addEventListener("click",()=>{C=u.dataset.statusPill??"all",L()})}),t.querySelectorAll("[data-wo-pill]").forEach(u=>{u.addEventListener("click",()=>{N=u.dataset.woPill??"all",L()})}),t.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{n="",m()}),t.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{V=!V,L()}),t.querySelector("[data-severity-filter]")?.addEventListener("change",u=>{F=u.currentTarget.value,L()}),t.querySelector("[data-alarm-search]")?.addEventListener("input",u=>{const v=u.currentTarget,W=v.selectionStart??v.value.length;T=v.value,L();const Q=t.querySelector("[data-alarm-search]");Q&&(Q.focus(),Q.setSelectionRange(W,W))}),t.querySelectorAll("[data-check-alarm]").forEach(u=>{u.addEventListener("change",()=>{const v=u.dataset.checkAlarm;v&&(u.checked?j.add(v):j.delete(v),L())})}),t.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{y="";const u=Array.from(j);try{for(const v of u)await a.acknowledgeAlarm(v,"告警中心批量确认"),Z.set(v,"批量确认处置");j.clear(),n=`已批量确认 ${u.length} 条告警，未来 24 小时持续校验无复发。`,await m()}catch(v){y=v instanceof Error?v.message:String(v),L()}}),t.querySelectorAll("[data-expand-alarm]").forEach(u=>{u.addEventListener("click",()=>{const v=u.dataset.expandAlarm??null;H=H===v?null:v,P=null,L()})}),t.querySelectorAll("[data-expand-wo]").forEach(u=>{u.addEventListener("click",()=>{const v=u.dataset.expandWo??null;O=O===v?null:v,L()})}),t.querySelectorAll("[data-run-ftt]").forEach(u=>{u.addEventListener("click",()=>{const v=g.find(W=>W.id===u.dataset.runFtt);v&&x(v)})}),t.querySelectorAll("[data-open-snooze]").forEach(u=>{u.addEventListener("click",()=>{P=u.dataset.openSnooze??null,L()})}),t.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{P=null,L()}),t.querySelectorAll("[data-snooze-form]").forEach(u=>{u.addEventListener("submit",v=>{v.preventDefault();const W=u.dataset.snoozeForm;if(!W)return;const Q=new FormData(u),te=String(Q.get("duration")??"24h"),se=String(Q.get("reason")??"").trim()||"现场核查中";b.set(W,{duration:te,reason:se}),j.delete(W),P=null,n=`已限时忽略该告警（${te} · ${se}），可在「已忽略」页签中随时恢复。`,L()})}),t.querySelectorAll("[data-unsnooze]").forEach(u=>{u.addEventListener("click",()=>{const v=u.dataset.unsnooze;v&&(b.delete(v),n="已恢复该告警的实时监控。",L())})}),t.querySelectorAll("[data-go-ts]").forEach(u=>{u.addEventListener("click",()=>{const v=u.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(v)}`})}),t.querySelectorAll("[data-locate-home]").forEach(u=>{u.addEventListener("click",()=>{const v=u.dataset.locateHome??"";window.location.hash=v?`#home?device=${encodeURIComponent(v)}`:"#home"})}),t.querySelectorAll("[data-mark-actioned]").forEach(u=>{u.addEventListener("click",async()=>{y="";const v=u.dataset.markActioned;try{await a.acknowledgeAlarm(v,"现场自处理完成（Mark Actioned）"),Z.set(v,"现场自处理完成"),j.delete(v),n="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await m()}catch(W){y=W instanceof Error?W.message:String(W),L()}})}),t.querySelectorAll("[data-to-wo]").forEach(u=>{u.addEventListener("click",async()=>{y="";const v=g.find(W=>W.id===u.dataset.toWo);if(v)try{await a.createWorkOrder({floorId:v.floorId,deviceId:v.deviceId,alarmId:v.id,title:`处置告警：${v.title}`,description:v.message}),n=`已将「${v.title}」转为运维工单并同步 CMMS。`,await m()}catch(W){y=W instanceof Error?W.message:String(W),L()}})}),t.querySelectorAll("[data-wo-status]").forEach(u=>{u.addEventListener("change",async()=>{const v=u.dataset.woStatus,W=u.value;if(y="",W==="cancelled"){const Q=E.find(te=>te.id===v);if(Q){const te=D(Q);te.cancelled=!0,te.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),n="工单已移入「已取消」分类并锁定编辑。",L()}return}if(W==="resolved"||W==="closed"){_=v,K=W,L();return}try{await a.updateWorkOrderStatus(v,W);const Q=E.find(te=>te.id===v);Q&&D(Q).history.unshift({at:"刚刚",text:`状态变更为「${be[W]}」`}),n="工单状态已更新并写入审计日志。",await m()}catch(Q){y=Q instanceof Error?Q.message:String(Q),await m()}})}),t.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{_=null,L()}),t.querySelectorAll("[data-close-wo-form]").forEach(u=>{u.addEventListener("submit",async v=>{v.preventDefault();const W=u.dataset.closeWoForm,Q=new FormData(u),te=String(Q.get("cause")??"").trim(),se=String(Q.get("solution")??"").trim(),ue=String(Q.get("actualCost")??"").trim();try{await a.updateWorkOrderStatus(W,K);const r=E.find(A=>A.id===W);if(r){const A=D(r);A.cause=te,A.solution=se,ue&&(A.actualCost=ue),A.history.unshift({at:"刚刚",text:`流转至「${be[K]}」· 根因：${te}`})}_=null,O=W,n=`工单已更新为「${be[K]}」，根因与方案已沉淀归档。`,await m()}catch(r){y=r instanceof Error?r.message:String(r),L()}})}),t.querySelectorAll("[data-wo-task]").forEach(u=>{u.addEventListener("change",()=>{const v=E.find(te=>te.id===u.dataset.woTask);if(!v)return;const Q=D(v).tasks.find(te=>te.id===u.dataset.taskId);Q&&(Q.done=u.checked),L()})})}await m()}const Ye='<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 4.5L6 7.5L9 4.5"/></svg>',Se=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],Le=[{id:d.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:d.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:d.projectId,label:"广实2号园（全园区）",factor:18.2}],Ke={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},Xe=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],fe=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function Ae(t,a=""){const s=(t??"").trim().toLowerCase();return!(!s||s.includes("%")||s.includes("°c")||s.includes("ppm")||s.includes("ms")||s.includes("m²")||s.includes("/m2")||s.includes("db")||s.includes("lx")||a.includes("率")||a.includes("均")||a.includes("强度")||a.includes("延迟"))}function ke(t,a){const s=t*a;return Math.abs(s)>=10?Math.round(s):Math.round(s*10)/10}function Qe(t,a){const s=Number(String(t).replaceAll(",","")),l=a??"";return Number.isFinite(s)?l==="kWh"&&Math.abs(s)>=1e4?{value:(s/1e3).toFixed(1),unit:"MWh",title:`精确值：${s.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(s)?s.toLocaleString("en-US"):s.toLocaleString("en-US",{maximumFractionDigits:1}),unit:l,title:`${s.toLocaleString("en-US")} ${l}`.trim()}:{value:t,unit:l,title:`${t} ${l}`.trim()}}function Je(t,a){if(a===1)return t;const s=Ae(t.unit);return{...t,kpis:t.kpis.map(l=>{const o=Number(String(l.value).replaceAll(",",""));return!Number.isFinite(o)||!Ae(l.unit,l.label)?l:{...l,value:String(ke(o,a))}}),series:s?t.series.map(l=>({...l,value:ke(l.value,a),...typeof l.baseline=="number"?{baseline:ke(l.baseline,a)}:{}})):t.series,zoneBreakdown:t.zoneBreakdown.map(l=>Ae(l.unit)?{...l,value:ke(l.value,a)}:l)}}function et(t,a){const s=Math.max(...t.series.map(F=>Math.max(F.value,F.baseline??0)),1),l=46,o=34,i=36,g=Math.max(t.series.length*(l+o)+i*2,620),E=228,f=184,B=132,C=[0,.25,.5,.75,1].map(F=>{const V=Math.round(f-F*B);return`<line x1="${i-8}" y1="${V}" x2="${g-18}" y2="${V}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${F===0?"0":"3 3"}" />`}).join(""),N=t.series.map((F,V)=>{const T=i+V*(l+o),H=Math.max(8,Math.round(F.value/s*B)),O=f-H,P=typeof F.baseline=="number"&&F.value>F.baseline*1.08,_=P?`<rect x="${T-8}" y="34" width="${l+16}" height="${f-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",K=typeof F.baseline=="number"?`<line x1="${T-5}" y1="${Math.round(f-F.baseline/s*B)}" x2="${T+l+5}" y2="${Math.round(f-F.baseline/s*B)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",j=a&&(P||V===1)?`<g><title>${P?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${T+l/2}" cy="18" r="7" fill="${P?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${T+l/2}" y="21.5" text-anchor="middle" font-size="9" fill="#fff">${P?"!":"⚡"}</text></g>`:"",b=F.value>=1e4?`${(F.value/1e3).toFixed(1)}k`:F.value.toLocaleString("en-US");return`
        ${_}
        ${K}
        ${j}
        <g>
          <title>${F.label}：实测 ${F.value.toLocaleString("en-US")} ${t.unit}${F.baseline!==void 0?` / 基线 ${F.baseline.toLocaleString("en-US")} ${t.unit}`:""}</title>
          <rect x="${T}" y="${O}" width="${l}" height="${H}" rx="7" fill="${P?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${T+l/2}" y="${O-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${b}</text>
        <text x="${T+l/2}" y="${f+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${F.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${g} ${E}" style="width:100%; height:232px; display:block;" role="img" aria-label="${t.category} 趋势图">
      ${C}
      ${N}
    </svg>
  `}function ye(t){if(t.connectivity==="offline")return{unit:"°C",points:[23.8,24,24.1,null,null,null,null,null]};if(t.category==="lighting"){const a=Number(t.telemetry.dimming?.value??60);return{unit:"%",points:[0,0,Math.round(a*.8),a,a,Math.round(a*.6),a,Math.round(a*.9)]}}if(t.category==="hvac"){const a=Number(t.telemetry.setpoint?.value??24);return{unit:"°C",points:[a+.8,a+.6,a+.3,a,a-.2,a+.1,a+.2,a]}}if(t.category==="sensor"){const a=Number(t.telemetry.temp?.value??23.4);return{unit:"°C",points:[a-.5,a-.3,a,a+.3,a+.5,a+.2,a+.1,a]}}return{unit:"ms",points:[16,18,17,19,18,17,18,18]}}function tt(t,a,s){const l=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!t.length)return'<div class="lov-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧勾选 1 台或多台设备以开始多点时序对比。</span></div>';const o=(g,E)=>{const O=[];for(const q of g)for(const n of ye(q).points)typeof n=="number"&&O.push(n);const P=O.length?Math.min(...O)*.92:0,_=O.length?Math.max(...O)*1.08:100,K=Math.max(_-P,1),j=[0,.5,1].map(q=>{const n=Math.round(26+106*(1-q)),y=(P+K*q).toFixed(K<15?1:0);return`
          <line x1="42" y1="${n}" x2="662" y2="${n}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${q===0?"0":"3 3"}" />
          <text x="36" y="${n+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${y}</text>
        `}).join(""),b=l.map((q,n)=>`<text x="${42+n/(l.length-1)*620}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${q}</text>`).join(""),Z=g.map((q,n)=>{const y=fe[n%fe.length],D=ye(q).points,m=[];let M=42,x=26+106/2,L=!1;D.forEach((z,J)=>{const e=42+J/(D.length-1)*620;if(typeof z=="number"){const c=26+106*(1-(z-P)/K);m.push(`${e.toFixed(1)},${c.toFixed(1)}`),M=e,x=c}else L=!0});const w=s?D.map((z,J)=>{if(typeof z!="number")return null;const e=42+J/(D.length-1)*620,S=26+106*(1-(z*.96-P)/K);return`${e.toFixed(1)},${S.toFixed(1)}`}).filter(Boolean).join(" "):"";return`
          ${w?`<polyline fill="none" stroke="${y}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.42" points="${w}" />`:""}
          ${m.length?`<polyline fill="none" stroke="${y}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${m.join(" ")}" />`:""}
          ${L?`<line x1="${M.toFixed(1)}" y1="${x.toFixed(1)}" x2="662" y2="${x.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${x-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),U=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${42+3/7*620}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${42+3/7*620}" y="15" text-anchor="middle" font-size="8" fill="#fff">⚡</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${42+5/7*620}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${42+5/7*620}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `;return`
      <div class="pacom-card" style="padding:14px 16px; gap:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${E}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${g.map((q,n)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${fe[n%fe.length]};"></span>${q.name}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${j}
          ${b}
          ${U}
          ${Z}
        </svg>
      </div>
    `};if(a==="shared")return o(t,"单图叠合对比（Shared）");const i=new Map;for(const g of t){const E=ye(g).unit,f=i.get(E)??[];f.push(g),i.set(E,f)}return Array.from(i.entries()).map(([g,E])=>o(E,`按单位分组泳道（${g}）`)).join("")}function at(t){const a=[["时段",`数值 (${t.unit})`,`基线 (${t.unit})`].join(","),...t.series.map(i=>[i.label,String(i.value),i.baseline!==void 0?String(i.baseline):""].join(","))],s=new Blob([`\uFEFF${a.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),l=URL.createObjectURL(s),o=document.createElement("a");o.href=l,o.download=`pacom-${t.category}-${t.range}.csv`,o.click(),URL.revokeObjectURL(l)}function st(t){const a=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],s=["时间",...t.map(E=>`${E.name}(${ye(E).unit})`)].join(","),l=a.map((E,f)=>[E,...t.map(B=>String(ye(B).points[f]??"No Data"))].join(",")),o=new Blob([`\uFEFF${[s,...l].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(o),g=document.createElement("a");g.href=i,g.download="pacom-timeseries-export.csv",g.click(),URL.revokeObjectURL(i)}async function lt(t,a,s){const l=new URLSearchParams(window.location.hash.split("?")[1]??""),o=l.get("tab"),i=l.get("cat"),g=l.get("device");let E=o==="timeseries"?"timeseries":i&&Se.some(y=>y.id===i)?i:"energy",f="7d",B="2026-11-16",C="2026-11-23",N=d.floorId,F="chart",V=!0,T="breakdown",H=!1,O=null,P=await a.getFloorDevices(d.floorId).catch(()=>[]),_="grouped",K="1h",j=!1;const b=new Set(g&&P.some(y=>y.id===g)?[g]:P.slice(0,3).map(y=>y.id)),Z=[{id:"fav-hvac",name:"E7F 空调供回温与离线对照",deviceIds:P.filter(y=>y.category==="hvac"||y.category==="sensor").map(y=>y.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度趋势对比",deviceIds:P.filter(y=>y.category==="lighting").map(y=>y.id),mode:"shared",interval:"15m"}];let U="";async function q(){const y=E==="timeseries"?"energy":E,D=f==="custom"?"30d":f;O=await a.getAnalysisReport(y,D,d.floorId),n()}function n(){if(!O)return;const y=E==="timeseries",D=E==="timeseries"?"energy":E,m=Se.find(e=>e.id===D)??Se[0],M=Le.find(e=>e.id===N)??Le[0],x=Je(O,M.factor),L=x.zoneBreakdown.filter(e=>e.status==="warning"),w=Ke[D],z=Math.max(...x.zoneBreakdown.map(e=>e.value),1),J=P.filter(e=>b.has(e.id));t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:10px; min-width:0;">
              <h1 class="pacom-title" style="flex-shrink:0;">数据分析</h1>
              <div class="pacom-tabs" role="tablist" aria-label="分析维度">
                ${Se.map(e=>`<button class="pacom-tab" role="tab" aria-selected="${E===e.id}" data-cat="${e.id}">${e.label}</button>`).join("")}
                <button class="pacom-tab" role="tab" aria-selected="${E==="timeseries"}" data-cat="timeseries">多点时序</button>
              </div>
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <div class="pacom-scope-pill" style="width:210px;" title="切换统计空间范围">
                <select name="analysisScope" data-scope-select aria-label="选择统计空间范围">
                  ${Le.map(e=>`<option value="${e.id}" ${e.id===N?"selected":""}>${e.label}</option>`).join("")}
                </select>
                <span class="pacom-scope-chevron">${Ye}</span>
              </div>
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px; width:108px;">
                <option value="today" ${f==="today"?"selected":""}>今日</option>
                <option value="7d" ${f==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${f==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${f==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${y?"":`<button class="pacom-btn ${H?"pacom-btn--primary":""}" data-toggle-canvas="1">${H?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          ${f==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${B}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${C}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${y?`
            <div class="lov-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:292px; min-width:268px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">多点时序测点树</span>
                    <span class="pacom-row-sub">已选 ${J.length} 台</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${Z.map(e=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${e.id}">★ ${e.name}</button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${P.map((e,c)=>{const S=b.has(e.id),R=ye(e);return`
                        <label class="pacom-row" style="cursor:pointer;" title="${e.name}">
                          <div style="display:flex; align-items:center; gap:8px; min-width:0; flex:1;">
                            <input type="checkbox" data-ts-dev="${e.id}" ${S?"checked":""} />
                            <span style="width:8px; height:8px; border-radius:50%; background:${fe[c%fe.length]}; flex-shrink:0;"></span>
                            <div style="min-width:0; flex:1;">
                              <div class="pacom-row-title" style="font-size:13px;">${e.name}</div>
                              <div class="pacom-row-sub">${R.unit} · ${e.connectivity==="online"?"在线上报":"断流离线"}</div>
                            </div>
                          </div>
                        </label>`}).join("")}
                </div>
              </aside>
              <div class="lov-subnav-main" style="padding:2px 4px 24px;">
                ${U?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${U}</span></div>`:""}
                <div class="lov-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="lov-section-title">多设备实时遥测对比（Time Series）</h2>
                    <span class="pacom-row-sub">⚡ 控制排程 · ! 告警触发 · 虚线为断流/上周同期</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>对比上周同期</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${j}" data-ts-compare="1" aria-label="叠加对比上周同期曲线">
                        <span class="lov-switch-thumb"></span>
                      </button>
                    </label>
                    <select class="pacom-select" name="tsInterval" data-ts-interval aria-label="采样粒度" style="height:28px; font-size:12px;">
                      <option value="15m" ${K==="15m"?"selected":""}>15 分钟</option>
                      <option value="1h" ${K==="1h"?"selected":""}>1 小时</option>
                      <option value="1d" ${K==="1d"?"selected":""}>1 天</option>
                    </select>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${_==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${_==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                  </div>
                </div>
                ${tt(J,_,j)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="lov-kpi-strip" role="region" aria-label="核心统计指标">
                ${x.kpis.map(e=>{const c=Qe(e.value,e.unit);return`
                      <div class="lov-kpi-cell" title="${c.title}">
                        <span class="lov-kpi-label">${e.label}</span>
                        <div class="lov-kpi-value">
                          <span>${c.value}</span>
                          ${c.unit?`<span class="lov-kpi-unit">${c.unit}</span>`:""}
                        </div>
                        <span class="lov-kpi-delta">${e.delta??"与基线持平"}</span>
                      </div>`}).join("")}
              </div>

              <section class="lov-section">
                <div class="lov-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="lov-section-title">${m?.label??"趋势"}趋势（${x.unit}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${M.label} · 更新于 ${x.updatedAt.slice(5,16).replace("T"," ")}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${V}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
                        <span class="lov-switch-thumb"></span>
                      </button>
                    </label>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${F==="chart"}" data-chart-mode="chart">趋势图</button>
                      <button class="pacom-tab" aria-selected="${F==="table"}" data-chart-mode="table">明细原表</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-card" style="gap:10px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                    <span class="pacom-row-sub">
                      ${L.length>0?`关注：${L.map(e=>e.zoneName).join("、")} 指标偏高，建议前往智能策略优化启停时段。`:`${m?.desc??"空间运行洞察"} · ${w.summary}`}
                    </span>
                    <button class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-strategy="1">去智能策略优化 →</button>
                  </div>
                  ${F==="chart"?et(x,V):`
                      <div class="lov-table-wrap">
                        <table class="lov-table">
                          <thead>
                            <tr>
                              <th>统计时段</th>
                              <th>实测值（${x.unit}）</th>
                              <th>基线参考</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${x.series.map(e=>{const c=typeof e.baseline=="number"&&e.value>e.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${e.label}</strong></td>
                                    <td>${e.value.toLocaleString("en-US")}</td>
                                    <td>${e.baseline!==void 0?e.baseline.toLocaleString("en-US"):"-"}</td>
                                    <td><span class="pacom-badge ${c?"pacom-badge--warning":"pacom-badge--online"}">${c?"超基线":"正常"}</span></td>
                                  </tr>`}).join("")}
                          </tbody>
                        </table>
                      </div>`}
                </div>
              </section>

              <div class="lov-grid-2">
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">功能区排行对比</h2>
                    <span class="pacom-row-sub">${x.zoneBreakdown.length} 个功能区</span>
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
                          ${x.zoneBreakdown.map(e=>{const c=Math.max(8,Math.round(e.value/z*100));return`
                                <tr>
                                  <td style="font-weight:500;">${e.zoneName.replace(/^7F\s*/,"")}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${c}%; height:100%; border-radius:999px; background:${e.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${e.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${e.unit}</span></td>
                                  <td>
                                    <span class="pacom-badge ${e.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${e.status==="warning"?"偏高关注":"正常"}
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
                    <h2 class="lov-section-title">${H?"E7F 空间对照预览":D==="energy"&&T==="load"?"峰谷负荷分布（Load Profile）":w.title}</h2>
                    ${!H&&D==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${T==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${T==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${H?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${H?'<img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
                        ${D==="environment"?`
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
                        ${(D==="energy"&&T==="load"?Xe:w.items).map(e=>`
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                                <span style="font-weight:500; color:var(--pacom-text-primary);">${e.name}</span>
                                <span class="pacom-row-sub">${e.detail} · <strong style="color:var(--pacom-text-primary);">${e.pct}%</strong></span>
                              </div>
                              <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                <div style="width:${Math.min(100,e.pct)}%; height:100%; border-radius:999px; background:${e.color};"></div>
                              </div>
                            </div>`).join("")}`}
                  </div>
                </section>
              </div>
            </div>`}
      </div>
    `,t.querySelectorAll("[data-cat]").forEach(e=>{e.addEventListener("click",()=>{E=e.dataset.cat??"energy",U="",E==="timeseries"?n():q()})}),t.querySelector("[data-scope-select]")?.addEventListener("change",e=>{N=e.currentTarget.value,n()}),t.querySelector("[data-range-select]")?.addEventListener("change",e=>{f=e.currentTarget.value??"7d",q()}),t.querySelector("[data-custom-start]")?.addEventListener("change",e=>{B=e.currentTarget.value}),t.querySelector("[data-custom-end]")?.addEventListener("change",e=>{C=e.currentTarget.value}),t.querySelectorAll("[data-chart-mode]").forEach(e=>{e.addEventListener("click",()=>{F=e.dataset.chartMode??"chart",n()})}),t.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{V=!V,n()}),t.querySelectorAll("[data-energy-right]").forEach(e=>{e.addEventListener("click",()=>{T=e.dataset.energyRight??"breakdown",n()})}),t.querySelector("[data-export-csv]")?.addEventListener("click",()=>{y?st(J):at(x)}),t.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{H=!H,n()}),t.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),t.querySelectorAll("[data-ts-dev]").forEach(e=>{e.addEventListener("change",()=>{const c=e.dataset.tsDev;c&&(e.checked?b.add(c):b.delete(c),n())})}),t.querySelectorAll("[data-ts-mode]").forEach(e=>{e.addEventListener("click",()=>{_=e.dataset.tsMode??"grouped",n()})}),t.querySelector("[data-ts-interval]")?.addEventListener("change",e=>{K=e.currentTarget.value??"1h",n()}),t.querySelector("[data-ts-compare]")?.addEventListener("click",()=>{j=!j,n()}),t.querySelectorAll("[data-load-fav]").forEach(e=>{e.addEventListener("click",()=>{const c=Z.find(S=>S.id===e.dataset.loadFav);c&&(b.clear(),c.deviceIds.forEach(S=>b.add(S)),_=c.mode,K=c.interval,U=`已加载收藏视图「${c.name}」。`,n())})}),t.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if(b.size===0)return;const e=`自定义对比 #${Z.length+1}（${b.size} 台）`;Z.push({id:`fav-${Date.now()}`,name:e,deviceIds:Array.from(b),mode:_,interval:K}),U=`已保存当前时序配置为「${e}」。`,n()})}await q()}const ot=[{group:"一、项目配置",items:[{id:"projects",label:"项目与楼宇"},{id:"floors",label:"楼层与功能区"}]},{group:"二、系统接入",items:[{id:"connections",label:"网关与数据健康"}]},{group:"三、设备部署",items:[{id:"floorplan",label:"图纸标点与绑定"},{id:"inventory",label:"设备四态台账"}]},{group:"四、交付验收",items:[{id:"delivery",label:"进度与交付冻结"}]}],nt={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},it={frozen:"已冻结",draft:"草稿",delivered:"已交付"},ct={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"},Ce=[{id:"doc-hvac-7f",name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · FCU-01 / VAV-02",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",name:"E7F_强电照明与DALI回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-bacnet-map",name:"E7F_BACnet_Modbus_点位映射表.xlsx",category:"点位台账",boundScope:"E栋 7F · 主控网关 GW-01",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",name:"FCU-01_风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}];function dt(t,a){const s=t.status!=="connected",l=a.filter(o=>o.hardwareBinding?.protocol===t.protocol);return l.length>0?l.flatMap(o=>{const i=o.connectivity==="offline"||s;return[{pointName:o.category==="hvac"?"送风温度 / 阀门开度":o.category==="lighting"?"回路开关 / 调光反馈":o.category==="sensor"?"温湿度 / CO₂ 遥测":"网关心跳 / 负载",deviceName:o.name,value:i?"No Data":o.category==="hvac"?"23.4°C · 62%":o.category==="lighting"?"ON · 80%":o.category==="sensor"?"24.1°C · 510 ppm":"CPU 18% · 18ms",interval:"60s",lastSeen:i?"46 分钟前":"12 秒前",quality:i?o.connectivity==="offline"?"offline":"delayed":"online"}]}):[{pointName:`${t.protocol.toUpperCase()} 主干遥测汇总点`,deviceName:t.name,value:s?"采样延迟":"正常上报",interval:"60s",lastSeen:s?"38 分钟前":"9 秒前",quality:s?"delayed":"online"}]}function rt(t){return t.category==="gateway"?"主控网关":t.category==="lighting"?t.name.includes("702")?"702 照明":"主照明":t.category==="hvac"?t.name.includes("VAV")?"VAV-02":"FCU-01":t.category==="sensor"?"环境传感":t.name.slice(0,6)}async function pt(t,a,s){let l="floorplan",o="all",i=await a.getSpatialTree(),g=[],E=[],f=[],B=null,C=!1,N=!1,F=null,V=null,T=null,H="",O="";async function P(){O="";const[b,Z,U,q]=await Promise.all([a.getSpatialTree(),a.getFloorDevices(d.floorId).catch(()=>[]),a.listConnections(d.projectId),a.listDeliveryBatches(d.floorId)]);i=b,g=Z,E=U,f=q,g.some(y=>y.id===B)||(B=g[0]?.id??null),C=g.find(y=>y.id===B)?.physicalInstalled??!1,j()}function _(b){O="",b.connectivity==="offline"?O=`单机回读自检未通过（FAIL）：「${b.name}」当前离线，请先在「网关与数据健康」核查 ${b.hardwareBinding?.networkAddress??"-"} 链路状态。`:H=`单机回读自检通过（PASS）：「${b.name}」指令下发 → 状态回读一致 → 已安全自动恢复原工况。`,j()}function K(){O="";const b=g.filter(D=>D.connectivity==="offline"),Z=g.length-b.length,U=new Date,q=String(U.getHours()).padStart(2,"0"),n=String(U.getMinutes()).padStart(2,"0"),y=String(U.getSeconds()).padStart(2,"0");T={ranAt:`${q}:${n}:${y}`,total:g.length,passed:Z,failed:b.length,failedNames:b.map(D=>D.name)},b.length>0?O=`全层批量自检（FTT）完成：${Z}/${g.length} 台通过，${b.length} 台失败（${b.map(D=>D.name).join("、")}），其余设备已安全复位。`:H=`全层批量自检（FTT）全部通过：${Z}/${g.length} 台设备指令下发、状态回读一致并已安全复位。`,j()}function j(){const b=g.find(e=>e.id===B)??null,Z=s.scope.canEditDeployment,U=E.reduce((e,c)=>e+c.collectedPoints,0),q=E.reduce((e,c)=>e+c.calculatedPoints,0),n=E.filter(e=>e.status==="connected").length,y=E.filter(e=>e.status!=="connected"),D=g.filter(e=>!!e.planPoint).length,m=g.filter(e=>e.physicalInstalled).length,M=g.length-m,x=g.length-D,L=g.filter(e=>o==="unverified"?!e.physicalInstalled:o==="unplaced"?!e.planPoint:!0),w=i.buildings.find(e=>e.id===d.buildingId),z=i.floors.filter(e=>e.buildingId===d.buildingId),J=i.zones.filter(e=>e.floorId===d.floorId);t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">系统部署</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">当前试点：广实2号园 / E栋 7F</span>
              <span class="pacom-badge ${Z?"pacom-badge--online":"pacom-badge--warning"}">
                ${Z?"可编辑部署与硬件绑定":"只读权限（写入将被服务端 403 拦截）"}
              </span>
            </div>
          </div>
        </header>

        ${H?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${H}</span></div>`:""}
        ${O?`<div class="pacom-alert-banner">${O}</div>`:""}

        <div class="lov-subnav-layout">
          <nav class="lov-subnav-rail lov-subnav-rail--compact" style="width:172px;" aria-label="工程部署阶段导轨">
            ${ot.map(e=>`
              <div class="lov-subnav-group">
                <div class="lov-subnav-group-title">${e.group}</div>
                ${e.items.map(c=>`
                    <button type="button" class="lov-subnav-item" aria-current="${l===c.id?"true":"false"}" data-dsec="${c.id}">
                      <span>${c.label}</span>
                      ${c.id==="connections"&&y.length>0?`<span class="pacom-badge pacom-badge--warning">${y.length}</span>`:""}
                      ${c.id==="floorplan"&&M>0?`<span class="pacom-badge pacom-badge--neutral">${M}</span>`:""}
                    </button>`).join("")}
              </div>`).join("")}
          </nav>

          <div class="lov-subnav-main" style="${l==="floorplan"?"overflow:hidden; padding:0;":"padding:4px 4px 24px;"}">
            ${l==="floorplan"?`
                <section class="pacom-split" style="height:100%;">
                  <aside class="pacom-left-pane" style="--pacom-sidebar-width:288px; min-width:268px;">
                    <div class="pacom-pane-toolbar">
                      <div style="font-weight:500;">E7F 图纸标点与四态绑定（${g.length}）</div>
                      <div class="pacom-row-sub">图上放点仅更新坐标，绝不自动改写物理安装态或硬件绑定。</div>
                      <div class="lov-count-pills" role="group" aria-label="筛选核验状态">
                        <button type="button" class="lov-count-pill" style="height:26px; font-size:12px;" aria-pressed="${o==="all"}" data-dev-filter="all">
                          <span>全部</span><span class="lov-count-num">${g.length}</span>
                        </button>
                        <button type="button" class="lov-count-pill" style="height:26px; font-size:12px;" aria-pressed="${o==="unverified"}" data-dev-filter="unverified">
                          <span>待复核</span><span class="lov-count-num">${M}</span>
                        </button>
                        <button type="button" class="lov-count-pill" style="height:26px; font-size:12px;" aria-pressed="${o==="unplaced"}" data-dev-filter="unplaced">
                          <span>未标点</span><span class="lov-count-num">${x}</span>
                        </button>
                      </div>
                    </div>
                    <div class="pacom-list">
                      ${L.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">该筛选条件下无设备</div>':L.map(e=>`
                                <div class="pacom-row ${e.id===B?"is-selected":""}" data-pick-dev="${e.id}">
                                  <div style="min-width:0;">
                                    <div class="pacom-row-title">${e.name}</div>
                                    <div class="pacom-row-sub">v${e.version} · ${e.hardwareBinding?.protocol.toUpperCase()??"未绑定"} · ${e.physicalInstalled?"物理已复核":"待物理复核"}</div>
                                  </div>
                                  <span class="pacom-badge ${e.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">
                                    ${e.planPoint?`${Math.round(e.planPoint.x*100)}%,${Math.round(e.planPoint.y*100)}%`:"未标点"}
                                  </span>
                                </div>`).join("")}
                    </div>
                    ${b?`
                        <form data-role="binding-form" style="padding:14px 16px; border-top:var(--hw) solid var(--pacom-border-subtle); background:var(--pacom-surface-primary); display:flex; flex-direction:column; gap:10px;">
                          <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-weight:500; font-size:13px;">显式硬件绑定与现场复核</span>
                            <span class="pacom-badge pacom-badge--neutral">${b.id}</span>
                          </div>
                          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                            <select class="pacom-select" name="protocol" aria-label="通信协议">
                              ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(e=>`<option value="${e}" ${b.hardwareBinding?.protocol===e?"selected":""}>${e.toUpperCase()}</option>`).join("")}
                            </select>
                            <input class="pacom-input" name="networkAddress" placeholder="网络地址/主题" value="${b.hardwareBinding?.networkAddress??""}" aria-label="网络地址" />
                          </div>
                          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                            <input class="pacom-input" name="portOrChannel" placeholder="端口/回路" value="${b.hardwareBinding?.portOrChannel??""}" aria-label="端口或回路" />
                            <div style="display:inline-flex; align-items:center; gap:6px; flex-shrink:0;">
                              <span class="pacom-row-sub">物理已复核</span>
                              <button type="button" class="lov-switch" role="switch" aria-checked="${C}" data-toggle-phys="1" aria-label="现场物理安装已复核" ${Z?"":"disabled"}>
                                <span class="lov-switch-thumb"></span>
                              </button>
                            </div>
                          </div>
                          <div style="display:flex; gap:6px; flex-wrap:wrap;">
                            <button class="pacom-btn" type="button" data-toggle-place="1">${N?"取消标点":"点图更新坐标"}</button>
                            <button class="pacom-btn" type="button" data-ftt-test="1" title="验证指令下发、回读并自动复位">单机自检</button>
                            <button class="pacom-btn pacom-btn--primary" type="submit" style="flex:1;" ${Z?"":"disabled"}>保存绑定（v${b.version}）</button>
                          </div>
                        </form>`:""}
                  </aside>
                  <div class="pacom-splitter"></div>
                  <main class="pacom-right-pane">
                    <div class="pacom-canvas-stage" data-role="deploy-stage" style="cursor:${N?"crosshair":"default"};">
                      <div class="pacom-canvas-viewport">
                        <div class="pacom-plan-wrap" data-role="deploy-plan">
                          <img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 部署平面图" />
                          ${g.filter(e=>e.planPoint).map(e=>`
                              <button type="button" class="pacom-pin ${e.id===B?"is-selected":""} ${e.connectivity==="offline"?"pacom-pin--offline":""}"
                                style="left:${(e.planPoint.x*100).toFixed(2)}%; top:${(e.planPoint.y*100).toFixed(2)}%;"
                                data-pick-dev="${e.id}" title="${e.name}">
                                <span class="pacom-dot ${e.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                <span>${rt(e)}</span>
                              </button>`).join("")}
                        </div>
                      </div>
                      ${N&&b?`<div style="position:absolute; top:16px; left:16px; z-index:8;" class="pacom-badge pacom-badge--accent">标点模式：点击图纸任意位置更新「${b.name}」的 2D 坐标（不改动硬件绑定）</div>`:""}
                    </div>
                  </main>
                </section>`:l==="projects"?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">项目与楼宇归属配置</h2>
                      <span class="pacom-row-sub">共 ${i.projects.length} 个授权项目 · ${i.buildings.length} 栋楼宇</span>
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                      ${i.projects.map(e=>{const c=i.buildings.filter(S=>S.projectId===e.id);return`
                            <div class="pacom-card" style="padding:16px; gap:10px;">
                              <img src="${e.imageUrl??"./media/gzlab.jpg"}" alt="${e.name}" style="width:100%; height:132px; object-fit:cover; border-radius:10px;" />
                              <div>
                                <strong style="font-size:15px; font-weight:500;">${e.name}</strong>
                                <div class="pacom-row-sub">${e.city??""} ${e.address??""} · ${c.length} 栋楼宇</div>
                              </div>
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                ${c.map(S=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${S.name}</strong> · 地上 ${S.aboveFloors}F / ${S.areaSqm??"-"} m²</span>
                                      <span class="pacom-badge ${S.id===d.buildingId?"pacom-badge--accent":"pacom-badge--neutral"}">${S.id===d.buildingId?"含 E7F 试点":"对照楼宇"}</span>
                                    </div>`).join("")}
                              </div>
                            </div>`}).join("")}
                    </div>
                  </section>`:l==="floors"?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">${w?.name??"E栋"} 楼层与 2D 图纸清单</h2>
                        <span class="pacom-row-sub">共登记 ${z.length} 个楼层</span>
                      </div>
                      <div class="lov-table-card">
                        <div class="lov-table-wrap">
                          <table class="lov-table">
                            <thead>
                              <tr>
                                <th>楼层</th>
                                <th>2D 平面图纸</th>
                                <th>设备规模</th>
                                <th>授权状态</th>
                                <th style="text-align:right;">操作</th>
                              </tr>
                            </thead>
                            <tbody>
                              ${z.map(e=>{const c=e.id===d.floorId,S=s.scope.allowedFloorIds.includes(e.id);return`
                                    <tr>
                                      <td><strong>${w?.name??""} ${e.name}</strong></td>
                                      <td><span class="pacom-badge ${e.plan?"pacom-badge--online":"pacom-badge--neutral"}">${e.plan?"已上传 2D 图纸":"待上传图纸"}</span></td>
                                      <td>${c?`${g.length} 台设备 · ${J.length} 个功能区`:"-"}</td>
                                      <td><span class="pacom-badge ${S?"pacom-badge--accent":"pacom-badge--warning"}">${S?"已授权":"未授权"}</span></td>
                                      <td style="text-align:right;">
                                        ${c?'<button type="button" class="pacom-btn" data-dsec="floorplan">去标点与绑定 →</button>':'<span class="pacom-row-sub">暂未入网</span>'}
                                      </td>
                                    </tr>`}).join("")}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>

                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">E7F 功能区划分与设备归属</h2>
                        <span class="pacom-row-sub">${J.length} 个逻辑功能区</span>
                      </div>
                      <div class="lov-table-card">
                        <div class="lov-table-wrap">
                          <table class="lov-table">
                            <thead>
                              <tr>
                                <th>功能区名称</th>
                                <th>挂载设备数</th>
                                <th>物理复核进度</th>
                              </tr>
                            </thead>
                            <tbody>
                              ${J.map(e=>{const c=g.filter(R=>R.logicalZoneId===e.id),S=c.filter(R=>R.physicalInstalled).length;return`
                                    <tr>
                                      <td><strong>${e.name.replace(/^7F\s*/,"")}</strong></td>
                                      <td>${c.length} 台</td>
                                      <td><span class="pacom-badge ${S===c.length?"pacom-badge--online":"pacom-badge--warning"}">${S} / ${c.length} 已复核</span></td>
                                    </tr>`}).join("")}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>

                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">E7F 竣工图纸与设备手册附件</h2>
                        <span class="pacom-row-sub">共 ${Ce.length} 份关联工程文档（支持按空间与设备查阅）</span>
                      </div>
                      <div class="lov-table-card">
                        <div class="lov-table-wrap">
                          <table class="lov-table">
                            <thead>
                              <tr>
                                <th>文档名称</th>
                                <th>类型</th>
                                <th>关联空间与设备</th>
                                <th>更新日期</th>
                                <th style="text-align:right;">操作</th>
                              </tr>
                            </thead>
                            <tbody>
                              ${Ce.map(e=>`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${e.name}</div>
                                    <div class="pacom-row-sub">${e.size}</div>
                                  </td>
                                  <td><span class="pacom-badge pacom-badge--neutral">${e.category}</span></td>
                                  <td><span class="pacom-row-sub">${e.boundScope}</span></td>
                                  <td><span class="pacom-row-sub">${e.updatedAt}</span></td>
                                  <td style="text-align:right;">
                                    <button type="button" class="pacom-btn" data-preview-doc="${e.id}">查阅附件</button>
                                  </td>
                                </tr>`).join("")}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>`:l==="connections"?`
                      <div class="lov-kpi-strip" role="region" aria-label="数据采集健康度">
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">已连通通道</span>
                          <div class="lov-kpi-value">${n}<span class="lov-kpi-unit">/ ${E.length}</span></div>
                          <span class="lov-kpi-delta">边缘网关在线监控</span>
                        </div>
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">数据采集健康度</span>
                          <div class="lov-kpi-value">${E.length>0?Math.round(n/E.length*100):100}<span class="lov-kpi-unit">%</span></div>
                          <span class="lov-kpi-delta">区分设备真故障与断流</span>
                        </div>
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">原始采集点</span>
                          <div class="lov-kpi-value">${U}<span class="lov-kpi-unit">点</span></div>
                          <span class="lov-kpi-delta">协议直采实时遥测</span>
                        </div>
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">衍生计算点</span>
                          <div class="lov-kpi-value">${q}<span class="lov-kpi-unit">点</span></div>
                          <span class="lov-kpi-delta">能碳与聚合虚拟点位</span>
                        </div>
                      </div>

                      ${y.length>0?`
                          <div class="lov-banner lov-banner--critical">
                            <div class="lov-banner-text">
                              <span class="lov-banner-title">检测到 ${y.length} 条采集通道通信降级（${y.map(e=>e.name).join("、")}）</span>
                              <span class="lov-banner-sub">排查建议：请核查目标网关端口（如 502）、RS485 终端电阻与从站地址配置，排除断流后再核验末端设备。</span>
                            </div>
                          </div>`:""}

                      <section class="lov-section">
                        <div class="lov-section-head">
                          <h2 class="lov-section-title">边缘网关与协议接入清单（App Status）</h2>
                          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                            <span class="pacom-badge pacom-badge--online">健康 ≥75%</span>
                            <span class="pacom-badge pacom-badge--warning">关注 50–74%</span>
                            <span class="pacom-badge pacom-badge--critical">异常 &lt;50%</span>
                            <span class="pacom-row-sub">点击「点位质量」展开传感器级遥测状态</span>
                          </div>
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
                                  <th>健康度</th>
                                  <th style="text-align:right;">操作</th>
                                </tr>
                              </thead>
                              <tbody>
                                ${E.map(e=>{const c=nt[e.status]??{label:e.status,cls:"pacom-badge--neutral"},S=e.status==="connected"?98:e.status==="degraded"?62:0,R=S>=75?"var(--pacom-status-online)":S>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",oe=V===e.id,me=oe?dt(e,g):[];return`
                                      <tr>
                                        <td><strong>${e.name}</strong></td>
                                        <td><span class="pacom-badge pacom-badge--neutral">${e.protocol.toUpperCase()}</span></td>
                                        <td><code style="font-size:12px;">${e.endpoint}</code></td>
                                        <td>采集 ${e.collectedPoints} / 计算 ${e.calculatedPoints}</td>
                                        <td style="min-width:130px;">
                                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                                            <span class="pacom-badge ${c.cls}">${c.label}</span>
                                            <span class="pacom-row-sub">${S}%</span>
                                          </div>
                                          <div class="lov-progress-track"><div class="lov-progress-fill" style="width:${S}%; background:${R};"></div></div>
                                        </td>
                                        <td>
                                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                                            <button type="button" class="pacom-btn" data-expand-conn="${e.id}">${oe?"收起点位":"点位质量"}</button>
                                            <button type="button" class="pacom-btn" data-ping-conn="${e.id}">测试连通</button>
                                            <button type="button" class="pacom-btn pacom-btn--ghost" data-copy-endpoint="${e.id}" data-endpoint-val="${e.endpoint}">
                                              ${F===e.id?"已复制":"复制端点"}
                                            </button>
                                          </div>
                                        </td>
                                      </tr>
                                      ${oe?`
                                          <tr>
                                            <td colspan="6" style="background:var(--pacom-surface-secondary); padding:12px 16px;">
                                              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                                                <span style="font-size:12px; font-weight:500;">传感器级点位数据质量明细（${e.name}）</span>
                                                <span class="pacom-row-sub">在线正常 · 延迟 &gt;30 分钟（Delayed） · 断流 &gt;3×采集间隔（Offline）</span>
                                              </div>
                                              <div style="display:flex; flex-direction:column; gap:6px;">
                                                ${me.map(ne=>`
                                                    <div class="pacom-receipt-item" style="background:var(--pacom-surface-primary);">
                                                      <span><strong>${ne.deviceName}</strong> · ${ne.pointName}</span>
                                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                                        <span class="pacom-row-sub">当前：${ne.value} · 间隔 ${ne.interval} · 上次上报 ${ne.lastSeen}</span>
                                                        <span class="pacom-badge ${ne.quality==="online"?"pacom-badge--online":ne.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                                          ${ne.quality==="online"?"在线正常":ne.quality==="delayed"?"延迟 >30m":"断流 >3×间隔"}
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
                      </section>`:l==="inventory"?`
                        ${T?`
                            <div class="lov-banner ${T.failed===0?"lov-banner--ok":"lov-banner--critical"}">
                              <div class="lov-banner-text">
                                <span class="lov-banner-title">批量功能自检（FTT）摘要 · ${T.ranAt}</span>
                                <span class="lov-banner-sub">共检测 ${T.total} 台：通过 ${T.passed} 台，异常 ${T.failed} 台${T.failedNames.length>0?`（${T.failedNames.join("、")}）`:"，全部设备已自动复位"}</span>
                              </div>
                            </div>`:""}
                        <section class="lov-section">
                          <div class="lov-section-head">
                            <div>
                              <h2 class="lov-section-title">E7F 设备四态核验总表</h2>
                              <span class="pacom-row-sub">图上标点 · 硬件绑定 · 物理复核 · 在线通信四态独立追踪</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--primary" data-batch-ftt="1">一键全层批量自检（FTT）</button>
                          </div>
                          <div class="lov-table-card">
                            <div class="lov-table-wrap">
                              <table class="lov-table">
                                <thead>
                                  <tr>
                                    <th>设备与功能区</th>
                                    <th>1. 图上标点</th>
                                    <th>2. 硬件绑定</th>
                                    <th>3. 物理复核</th>
                                    <th>4. 在线通信</th>
                                    <th style="text-align:right;">FTT 自检</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  ${g.map(e=>{const c=(e.logicalZoneId?ct[e.logicalZoneId]:void 0)??"E7F";return`
                                        <tr>
                                          <td>
                                            <div style="font-weight:500;">${e.name}</div>
                                            <div class="pacom-row-sub">${c} · v${e.version}</div>
                                          </td>
                                          <td>
                                            <span class="pacom-badge ${e.planPoint?"pacom-badge--online":"pacom-badge--warning"}">
                                              ${e.planPoint?`${Math.round(e.planPoint.x*100)}%, ${Math.round(e.planPoint.y*100)}%`:"未标点"}
                                            </span>
                                          </td>
                                          <td>
                                            <span class="pacom-badge ${e.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">
                                              ${e.hardwareBinding?e.hardwareBinding.protocol.toUpperCase():"未绑定"}
                                            </span>
                                          </td>
                                          <td>
                                            <span class="pacom-badge ${e.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">
                                              ${e.physicalInstalled?"已复核":"待复核"}
                                            </span>
                                          </td>
                                          <td>
                                            <span class="pacom-badge ${e.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
                                              ${e.connectivity==="online"?"在线":"离线"}
                                            </span>
                                          </td>
                                          <td style="text-align:right;">
                                            <button type="button" class="pacom-btn" data-ftt-dev="${e.id}">单机自检</button>
                                          </td>
                                        </tr>`}).join("")}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </section>`:`
                        <div class="lov-kpi-strip" role="region" aria-label="交付就绪检查门控">
                          <button type="button" class="lov-kpi-cell ${x===0?"lov-gate-ok":"lov-gate-warn"}" data-dsec="floorplan" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">1. 图纸标点就绪</span>
                            <div class="lov-kpi-value">${D}<span class="lov-kpi-unit">/ ${g.length}</span></div>
                            <span class="lov-kpi-delta">${x===0?"全部设备已完成标点 ✓":`尚差 ${x} 台未标点 →`}</span>
                          </button>
                          <button type="button" class="lov-kpi-cell ${M===0?"lov-gate-ok":"lov-gate-warn"}" data-dsec="inventory" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">2. 物理安装复核</span>
                            <div class="lov-kpi-value">${m}<span class="lov-kpi-unit">/ ${g.length}</span></div>
                            <span class="lov-kpi-delta" style="${M>0?"color:var(--pacom-status-warning);":""}">${M===0?"现场复核全绿 ✓":`待复核 ${M} 台，点击查看 →`}</span>
                          </button>
                          <button type="button" class="lov-kpi-cell ${y.length===0?"lov-gate-ok":"lov-gate-warn"}" data-dsec="connections" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">3. 网关通道连通</span>
                            <div class="lov-kpi-value">${n}<span class="lov-kpi-unit">/ ${E.length}</span></div>
                            <span class="lov-kpi-delta" style="${y.length>0?"color:var(--pacom-status-warning);":""}">${y.length===0?"全部通道健康 ✓":`${y.length} 条通道降级，点击排查 →`}</span>
                          </button>
                          <button type="button" class="lov-kpi-cell ${T&&T.failed===0?"lov-gate-ok":"lov-gate-warn"}" data-batch-ftt="1" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">4. 批量功能自检（FTT）</span>
                            <div class="lov-kpi-value">${T?T.passed:g.filter(e=>e.connectivity==="online").length}<span class="lov-kpi-unit">/ ${g.length}</span></div>
                            <span class="lov-kpi-delta" style="${T&&T.failed>0?"color:var(--pacom-status-warning);":""}">${T?T.failed===0?`已于 ${T.ranAt} 全绿通过 ✓`:`${T.failed} 台未通过，点击复检 →`:"点击发起全层批量自检 →"}</span>
                          </button>
                        </div>

                        <section class="lov-section">
                          <div class="lov-section-head">
                            <div>
                              <h2 class="lov-section-title">E7F 交付冻结批次</h2>
                              ${M>0||y.length>0?`<span class="pacom-row-sub">当前尚有 ${M} 台待复核与 ${y.length} 条降级链路，仍可生成阶段快照</span>`:""}
                            </div>
                            <div style="display:flex; gap:8px; flex-wrap:wrap;">
                              <button type="button" class="pacom-btn" data-batch-ftt="1">一键全层批量自检（FTT）</button>
                              <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${Z?"":"disabled"}>+ 新建交付冻结快照</button>
                            </div>
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
                                  ${f.map(e=>`
                                      <tr>
                                        <td>
                                          <div style="font-weight:500;">${e.versionTag}</div>
                                          <div class="pacom-row-sub"><code>${e.id}</code></div>
                                        </td>
                                        <td><strong>${e.verifiedCount}</strong> / ${e.deviceCount} 台设备</td>
                                        <td>
                                          <div>${e.frozenBy}</div>
                                          <div class="pacom-row-sub">${e.note??"-"}</div>
                                        </td>
                                        <td><span class="pacom-badge pacom-badge--accent">${it[e.status]??e.status}</span></td>
                                      </tr>`).join("")}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </section>`}
          </div>
        </div>
      </div>
    `,t.querySelectorAll("[data-dsec]").forEach(e=>{e.addEventListener("click",()=>{const c=e.dataset.dsec;c&&(l=c,H="",O="",j())})}),t.querySelectorAll("[data-dev-filter]").forEach(e=>{e.addEventListener("click",()=>{o=e.dataset.devFilter??"all",j()})}),t.querySelectorAll("[data-pick-dev]").forEach(e=>{e.addEventListener("click",()=>{B=e.dataset.pickDev??null,C=g.find(S=>S.id===B)?.physicalInstalled??!1,j()})}),t.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{C=!C,j()}),t.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{N=!N,j()}),t.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{b&&_(b)}),t.querySelectorAll("[data-ftt-dev]").forEach(e=>{e.addEventListener("click",()=>{const c=g.find(S=>S.id===e.dataset.fttDev);c&&_(c)})}),t.querySelectorAll("[data-batch-ftt]").forEach(e=>{e.addEventListener("click",()=>{K()})}),t.querySelectorAll("[data-expand-conn]").forEach(e=>{e.addEventListener("click",()=>{const c=e.dataset.expandConn??null;V=V===c?null:c,j()})}),t.querySelectorAll("[data-preview-doc]").forEach(e=>{e.addEventListener("click",()=>{const c=Ce.find(S=>S.id===e.dataset.previewDoc);c&&(O="",H=`已调阅工程附件「${c.name}」（关联范围：${c.boundScope}，更新于 ${c.updatedAt}）。`,j())})}),t.querySelectorAll("[data-ping-conn]").forEach(e=>{e.addEventListener("click",()=>{const c=E.find(S=>S.id===e.dataset.pingConn);c&&(O="",c.status==="connected"?H=`连通性测试通过：「${c.name}」（${c.endpoint}）响应正常，延迟 18 ms。`:O=`连通性测试异常：「${c.name}」（${c.endpoint}）超时无应答，建议排查边缘网关端口与 RS485 链路。`,j())})}),t.querySelectorAll("[data-copy-endpoint]").forEach(e=>{e.addEventListener("click",async()=>{const c=e.dataset.endpointVal??"",S=e.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(c),F=S,j(),window.setTimeout(()=>{F=null,j()},1600)}catch{}})}),t.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async e=>{if(!N||!b)return;const c=e.currentTarget.getBoundingClientRect(),S=Math.max(.02,Math.min(.98,(e.clientX-c.left)/c.width)),R=Math.max(.02,Math.min(.98,(e.clientY-c.top)/c.height));try{await a.updateDevicePlanPoint({deviceId:b.id,floorId:d.floorId,planVersion:b.planPoint?.planVersion??1,x:S,y:R,expectedVersion:b.version}),N=!1,H=`已更新「${b.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await P()}catch(oe){O=oe instanceof Error?oe.message:String(oe),j()}}),t.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async e=>{if(e.preventDefault(),!b)return;const c=new FormData(e.currentTarget);try{await a.updateDeviceHardwareBinding({deviceId:b.id,gatewayId:b.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(c.get("protocol")),networkAddress:String(c.get("networkAddress")??""),portOrChannel:String(c.get("portOrChannel")??""),physicalInstalled:C,expectedVersion:b.version}),H=`已保存「${b.name}」的硬件绑定与物理安装复核状态。`,await P()}catch(S){O=S instanceof Error?S.message:String(S),j()}}),t.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const e=await a.freezeDeliveryBatch(d.floorId,"系统部署交付验收发起冻结");H=`已生成冻结批次 ${e.versionTag}（核验 ${e.verifiedCount}/${e.deviceCount}）。`,await P()}catch(e){O=e instanceof Error?e.message:String(e),j()}})}await P()}function ut(t){if(t.connectivity==="offline")return`${t.name.includes("VAV")?"VAV-02":t.name.slice(0,6)} 离线`;if(t.category==="lighting"){const a=t.name.includes("702")?"702 照明":"主照明",s=Number(t.telemetry.dimming?.value??0);return s>0?`${a} ${s}%`:`${a} 关`}return t.category==="hvac"?`${t.name.includes("VAV")?"VAV-02":"FCU-01"} ${t.telemetry.setpoint?.value??24}°C`:t.category==="sensor"?`环境 ${t.telemetry.temp?.value??"23.4"}°C`:t.category==="gateway"?"主控网关":t.name.slice(0,6)}const je="pacom.web.e7f.leftWidth",Oe={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},vt={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},mt='<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 4.5L6 7.5L9 4.5"/></svg>',gt={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function $(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function bt(t){return t.level==="all-projects"?"all":t.level==="project"?`project:${t.projectId}`:t.level==="building"?`building:${t.projectId}:${t.buildingId}`:`floor:${t.projectId}:${t.buildingId}:${t.floorId}`}async function ht(t,a,s){const l=await a.getSpatialTree(),o=a.mode==="demo",i=s.scope.canControlDevices,g=s.scope.canManageAlarms,E=s.scope.allowedZoneIds?.length?s.scope.allowedZoneIds:null;let f={level:"floor",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId},B="devices",C="canvas",N="",F="all",V="all";const T=new URLSearchParams(window.location.hash.split("?")[1]??""),H=T.get("device"),O=T.get("zone");let P=H,_=!!H,K=!1,j="devices";const b=new Set,Z=new Set;let U=[],q=[],n=[],y=null,D=null,m=1,M=0,x=0,L=Number(localStorage.getItem(je)||400);(!Number.isFinite(L)||L<320||L>680)&&(L=400);let w=null;function z(){return l.zones.filter(r=>!(f.level==="floor"&&r.floorId!==f.floorId||E&&!E.includes(r.id)))}async function J(r,A=!1){f=r,D=null,V=A&&O?O:"all",K=!1,Z.clear(),m=1,M=0,x=0,w&&(w(),w=null);const p=f.level==="floor"?f.floorId:d.floorId;if(f.level==="floor")try{const[h,I,X]=await Promise.all([a.getFloorDevices(f.floorId),a.listAlarms(f.floorId),a.listWorkOrders(f.floorId)]);U=h,q=I,n=X,U.some(G=>G.id===P)?A&&H&&(_=!0):(P=U[1]?.id??U[0]?.id??null,_=!1),w=a.subscribeFloorEvents(f.floorId,async G=>{G.type==="control.receipt.updated"&&y?.batchId===G.batchId&&(y=await a.getControlBatch(G.batchId)),(G.type==="telemetry.updated"||G.type==="device.connectivity")&&f.level==="floor"&&(U=await a.getFloorDevices(f.floorId)),G.type==="alarm.changed"&&f.level==="floor"&&(q=await a.listAlarms(f.floorId)),R()})}catch(h){U=[],q=[],n=[],P=null,_=!1,D=h instanceof Error?h.message:String(h)}else{_=!1;const[h,I,X]=await Promise.all([a.getFloorDevices(p).catch(()=>[]),a.listAlarms(p).catch(()=>[]),a.listWorkOrders(p).catch(()=>[])]);U=h,q=I,n=X}se()}function e(r){return r?l.zones.find(A=>A.id===r)?.name??r:"未分配逻辑区"}function c(){const r=N.trim().toLowerCase();return U.filter(A=>V!=="all"&&A.logicalZoneId!==V||F!=="all"&&A.category!==F?!1:r?A.name.toLowerCase().includes(r)||A.id.toLowerCase().includes(r)||e(A.logicalZoneId).toLowerCase().includes(r):!0)}async function S(r,A,p){!r.length||f.level!=="floor"||!i||(r.forEach(h=>b.add(h)),y=await a.dispatchControlBatch({floorId:f.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:r.map(h=>({deviceId:h,command:A,targetValue:p}))}),R())}function R(){const r=document.activeElement,A=r?.dataset?.role,p=r&&"selectionStart"in r?r.selectionStart:null,h=r&&"selectionEnd"in r?r.selectionEnd:null,I=t.querySelector(".pacom-list")?.scrollTop??0;se();const X=t.querySelector(".pacom-list");if(X&&(X.scrollTop=I),A==="search"){const G=t.querySelector('[data-role="search"]');G&&(G.focus(),p!==null&&h!==null&&G.setSelectionRange(p,h))}}function oe(){const r=t.querySelector('[data-role="canvas-viewport"]');r&&(r.style.transform=`translate(${M}px, ${x}px) scale(${m})`);const A=t.querySelector('[data-role="canvas-hint"]');A&&(A.textContent=`缩放 ${Math.round(m*100)}% · 滚轮缩放 · 拖动平移 · 双击复位`)}function me(){return f.level==="floor"?`building:${f.projectId}:${f.buildingId}`:f.level==="building"?`project:${f.projectId}`:f.level==="project"?"all":null}function ne(){const r=bt(f),A=l.projects.map(I=>`<option value="project:${$(I.id)}" ${r===`project:${I.id}`?"selected":""}>项目 · ${$(I.name)}</option>`).join(""),p=l.buildings.map(I=>{const X=`building:${I.projectId}:${I.id}`;return`<option value="${$(X)}" ${r===X?"selected":""}>楼宇 · 广实2号园 / ${$(I.name)}</option>`}).join(""),h=l.floors.map(I=>{const X=s.scope.allowedFloorIds.includes(I.id),G=`floor:${d.projectId}:${I.buildingId}:${I.id}`;return`<option value="${$(G)}" ${r===G?"selected":""}>楼层 · 广实2号园 / E栋 / ${$(I.name)}${X?"":"（未授权）"}</option>`}).join("");return`
      <option value="all" ${r==="all"?"selected":""}>全部项目（${l.projects.length} 个授权园区）</option>
      <optgroup label="项目级">${A}</optgroup>
      <optgroup label="楼宇级">${p}</optgroup>
      <optgroup label="楼层级">${h}</optgroup>
    `}function qe(){if(f.level==="all-projects"){const A=U.filter(h=>h.connectivity==="online").length,p=q.filter(h=>h.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">授权项目总览（${l.projects.length}）</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">楼宇</span><strong>${l.buildings.length} 栋</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线</span><strong>${A}/${U.length}</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:var(--pacom-status-warning);">${p} 条</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${l.projects.map(h=>{const I=l.buildings.filter(X=>X.projectId===h.id).length;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="project:${$(h.id)}">
                  <img src="${$(h.imageUrl??"./media/gzlab.jpg")}" alt="${$(h.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${$(h.name)}</strong>
                    <span class="pacom-badge pacom-badge--accent">${I} 栋楼宇</span>
                  </div>
                  <div class="pacom-row-sub">${$(h.city??"")} · ${$(h.address??"")}</div>
                </article>`}).join("")}
        </div>
      `}const r=f;if(r.level==="project"){const A=l.projects.find(G=>G.id===r.projectId),p=l.buildings.filter(G=>G.projectId===r.projectId),h=U.filter(G=>G.connectivity==="online").length,I=U.length?Math.round(h/U.length*100):100,X=q.filter(G=>G.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${$(A?.name??"园区")} · 楼宇绩效（${p.length}）</div>
          <div class="pacom-row-sub">${$(A?.city??"")} ${$(A?.address??"")}</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">在线率</span><strong>${I}%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:${X>0?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${X} 条</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>1,248 kWh</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${p.map(G=>{const k=G.id===d.buildingId;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="building:${$(G.projectId)}:${$(G.id)}">
                  <img src="${$(G.imageUrl??"./media/building-e.png")}" alt="${$(G.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${$(G.name)}</strong>
                    <span class="pacom-badge ${k?"pacom-badge--online":"pacom-badge--neutral"}">${k?`在线 ${I}% · 告警 ${X}`:"运行平稳"}</span>
                  </div>
                  <div class="pacom-row-sub">地上 ${G.aboveFloors} 层 · 面积 ${G.areaSqm??"-"} m² · 舒适度达标 96%</div>
                </article>`}).join("")}
        </div>
      `}if(r.level==="building"){const A=l.buildings.find(k=>k.id===r.buildingId),p=l.floors.filter(k=>k.buildingId===r.buildingId),h=n.filter(k=>k.status!=="closed"&&k.status!=="resolved"),I=U.filter(k=>k.connectivity==="online").length,X=U.length?Math.round(I/U.length*100):100,G=q.filter(k=>k.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${$(A?.name??"楼宇")} 运行概况</div>
          <div class="pacom-row-sub">地上 ${A?.aboveFloors??0} 层 · 面积 ${A?.areaSqm??"-"} m²</div>
          <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线率</span><strong>${X}%（${I}/${U.length}）</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">舒适度达标</span><strong>96.2%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>418 kWh</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">告警 / 工单</span><strong style="color:var(--pacom-status-warning);">${G} 告警 · ${h.length} 工单</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:8px; padding:12px;">
          <div style="font-weight:500; font-size:13px;">楼层列表（点击进入 2D 平面控制）</div>
          ${p.length?p.map(k=>{const Y=s.scope.allowedFloorIds.includes(k.id),ee=k.id===d.floorId;return`
                      <div class="pacom-row" data-nav-scope="floor:${$(r.projectId)}:${$(r.buildingId)}:${$(k.id)}">
                        <div>
                          <div class="pacom-row-title">${$(A?.name??"")} ${$(k.name)}</div>
                          <div class="pacom-row-sub">${k.plan?"2D 平面图就绪":"暂未上传图纸"}${ee&&G>0?` · ${G} 条待处理告警`:""}</div>
                        </div>
                        <span class="pacom-badge ${Y?"pacom-badge--online":"pacom-badge--warning"}">${Y?"进入楼层":"无权限"}</span>
                      </div>`}).join(""):'<div class="pacom-row-sub">该楼宇暂未配置试点楼层。</div>'}
        </div>
      `}if(B==="devices"){const A=c(),p=z(),h=Array.from(Z);return`
        <div class="pacom-pane-toolbar">
          ${E?`<div class="pacom-info-banner">我的区域视图：仅显示当前账号获授权的 ${E.length} 个功能区及设备。</div>`:""}
          <div class="pacom-search-row">
            <input class="pacom-input" data-role="search" placeholder="搜索设备名 / ID / 区域…" value="${$(N)}" aria-label="搜索楼层设备" />
            <select class="pacom-select" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${F==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${F==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${F==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${F==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${F==="gateway"?"selected":""}>网关</option>
            </select>
          </div>
          ${p.length>0&&!D?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${V==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${p.map(I=>`<button type="button" class="pacom-zone-pill ${V===I.id?"is-active":""}" data-filter-zone="${$(I.id)}">${$(I.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; color:var(--pacom-text-secondary);">
            <span>当前可见 ${A.length} 台设备</span>
            <span>${i?`已勾选 ${h.length} 台`:"只读模式"}</span>
          </div>
        </div>
        <div class="pacom-list">
          ${D?`<div class="pacom-alert-banner">${$(D)}</div>`:A.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">没有匹配的设备</div>':A.map(I=>{const X=I.id===P&&_,G=Z.has(I.id),k=I.connectivity==="offline",Y=k?"pacom-dot--critical":"pacom-dot--online",ee=k?"离线 · 无遥测":I.category==="lighting"?`亮度 ${I.telemetry.dimming?.value??"--"}%`:I.category==="hvac"?`设定 ${I.telemetry.setpoint?.value??"--"}°C`:I.category==="sensor"?`${I.telemetry.temp?.value??"--"}°C · CO₂ ${I.telemetry.co2?.value??"--"}`:I.hardwareBinding?.networkAddress??"未绑定";return`
                        <div class="pacom-row ${X?"is-selected":""}" data-select-device="${$(I.id)}">
                          <div class="pacom-row-main">
                            ${i?`<input type="checkbox" data-check-device="${$(I.id)}" ${G?"checked":""} style="margin-top:3px;" aria-label="勾选 ${$(I.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title">${$(I.name)}</div>
                              <div class="pacom-row-sub">${$(e(I.logicalZoneId))} · ${$(Oe[I.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${k?"pacom-badge--critical":"pacom-badge--online"}">
                            <span class="pacom-dot ${Y}"></span>${$(ee)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${i&&h.length>0?`
            <div class="pacom-batch-bar">
              <span style="font-size:12px;">显式批量目标：<strong>${h.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(B==="zones"){const A=z(),p={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">E7F 功能区快控（${A.length}）</div>
          <div class="pacom-row-sub">点击卡片同步高亮右侧平面图热区，支持按区域一键批量控制。</div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${A.map(h=>{const I=U.filter(ee=>ee.logicalZoneId===h.id),X=I.filter(ee=>ee.connectivity==="online").length,G=I.filter(ee=>ee.category==="lighting"||ee.category==="hvac").length,k=V===h.id,Y=p[h.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${k?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${k?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${$(k?"all":h.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:14px; font-weight:500;">${$(h.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${X}/${I.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时温度 ${Y.temp} · 占用 ${Y.occ}</div>
                  ${G>0?`
                      <div style="display:flex; gap:6px; margin-top:2px;">
                        <button type="button" class="pacom-btn" data-zone-power="${$(h.id)}" data-zone-val="true" ${i?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" data-zone-power="${$(h.id)}" data-zone-val="false" ${i?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">该区域为弱电/网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-pane-toolbar">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-weight:500;">本层告警快览（${q.length}）</span>
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-alarms="1">前往告警中心 →</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:12px;">
        ${q.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">当前楼层无活跃告警</div>':q.map(A=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${$(A.title)}</strong>
                      <span class="pacom-badge ${A.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${A.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${$(A.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" data-locate-device="${$(A.deviceId)}">定位设备</button>
                      ${A.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" data-ack-alarm="${$(A.id)}" ${g?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function u(){const r=f,A=U.filter(k=>k.connectivity==="online").length,p=U.length?Math.round(A/U.length*100):100,h=q.filter(k=>k.status==="active").length;if(r.level==="all-projects"||r.level==="project"){const k=r.level==="project"?l.projects.find(ee=>ee.id===r.projectId):l.projects[0],Y=l.buildings.filter(ee=>!k||ee.projectId===k.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:24px; cursor:default;">
          <div style="position:relative; width:min(760px, 94%); border-radius:16px; overflow:hidden; box-shadow:0 12px 32px rgba(15,23,42,0.14); background:#fff;">
            <img src="${$(k?.imageUrl??"./media/gzlab.jpg")}" alt="园区俯瞰" style="width:100%; height:440px; object-fit:cover; display:block;" />
            ${r.level==="all-projects"?l.projects.map((ee,le)=>`
                      <button type="button" class="pacom-pin is-selected" style="left:${le===0?48:26}%; top:${le===0?52:34}%;" data-nav-scope="project:${$(ee.id)}">
                        <span class="pacom-dot pacom-dot--online"></span>
                        <span>${$(ee.name)}</span>
                      </button>`).join(""):Y.map((ee,le)=>{const re=ee.id===d.buildingId;return`
                        <button type="button" class="pacom-pin ${re?"is-selected":""}" style="left:${le===0?56:38}%; top:${le===0?44:62}%;" data-nav-scope="building:${$(ee.projectId)}:${$(ee.id)}">
                          <span class="pacom-dot ${re&&h>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                          <span>${$(ee.name)} · ${re?`在线 ${p}% · 告警 ${h}`:"运行平稳"}</span>
                        </button>`}).join("")}
          </div>
        </div>
      `}if(r.level==="building"){const k=l.buildings.find(le=>le.id===r.buildingId),Y=l.floors.filter(le=>le.buildingId===r.buildingId),ee=Y.find(le=>le.id===d.floorId)??Y[0];return`
        ${Y.length?`
            <nav class="pacom-floor-rail" aria-label="整栋楼层选择轨道">
              <button type="button" class="pacom-floor-btn is-active" title="整栋视图">栋</button>
              ${Y.map(le=>{const re=s.scope.allowedFloorIds.includes(le.id),ve=le.id===d.floorId&&h>0;return`<button type="button" class="pacom-floor-btn ${re?"":"is-locked"}" data-nav-scope="floor:${$(r.projectId)}:${$(r.buildingId)}:${$(le.id)}" title="${$(le.name)}${ve?`（${h} 条待处理告警）`:""}">${$(le.name.replace("F",""))}${ve?'<span class="pacom-floor-alert-dot"></span>':""}</button>`}).join("")}
            </nav>`:""}
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:24px; cursor:default;">
          <img class="pacom-plan-img" src="${$(k?.imageUrl??"./media/building-e.png")}" alt="${$(k?.name??"楼宇")} 整栋实景图" style="max-height:72vh;" />
        </div>
        ${ee?`<div style="position:absolute; right:16px; bottom:16px; z-index:6;">
                <button type="button" class="pacom-btn pacom-btn--primary" data-nav-scope="floor:${$(r.projectId)}:${$(r.buildingId)}:${$(ee.id)}">进入 ${$(k?.name??"")} ${$(ee.name)} 2D 控图 →</button>
              </div>`:""}
      `}const I=l.floors.find(k=>k.id===r.floorId),X=l.floors.filter(k=>k.buildingId===r.buildingId),G=z();return`
      <nav class="pacom-floor-rail" aria-label="楼层选择轨道">
        <button type="button" class="pacom-floor-btn" data-nav-scope="building:${$(r.projectId)}:${$(r.buildingId)}" title="返回整栋楼宇">栋</button>
        ${X.map(k=>{const Y=s.scope.allowedFloorIds.includes(k.id),ee=k.id===d.floorId&&h>0;return`<button type="button" class="pacom-floor-btn ${k.id===r.floorId?"is-active":""} ${Y?"":"is-locked"}"
              data-nav-scope="floor:${$(r.projectId)}:${$(r.buildingId)}:${$(k.id)}" title="${$(k.name)}${Y?ee?` · ${h} 条告警`:"":"（无权限）"}">
              ${$(k.name.replace("F",""))}
              ${ee?'<span class="pacom-floor-alert-dot"></span>':""}
            </button>`}).join("")}
      </nav>

      <div class="pacom-canvas-tools" aria-label="画布工具">
        <button type="button" class="pacom-tool-btn" data-zoom="reset" title="复位视图" aria-label="复位视图">⟲</button>
        <div class="pacom-tool-divider" aria-hidden="true"></div>
        <button type="button" class="pacom-tool-btn" data-zoom="in" title="放大" aria-label="放大">＋</button>
        <button type="button" class="pacom-tool-btn" data-zoom="out" title="缩小" aria-label="缩小">－</button>
      </div>

      ${D?"":`
        <div class="lov-layer-bar" role="group" aria-label="平面图图层切换">
          <button type="button" class="lov-layer-btn" aria-pressed="${j==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${j==="temp"}" data-canvas-layer="temp">温度热区</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${j==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
        </div>`}

      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${D?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${$(D)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${M}px, ${x}px) scale(${m});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${$(I?.plan?.imageUrl??"./media/7F.webp")}" alt="E栋 ${$(I?.name??"7F")} 平面图" />
                  ${G.map((k,Y)=>{const ee=gt[k.id];if(!ee)return"";const le=V===k.id,re=["23.2°C","24.6°C","22.8°C","23.9°C"],ve=["有人 74%","会议中","有人 52%","空闲"],he=j==="temp"?` · ${re[Y%re.length]}`:j==="occupancy"?` · ${ve[Y%ve.length]}`:"",ae=j==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":j==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${le?"is-active":""}"
                          style="left:${ee.left}%; top:${ee.top}%; width:${ee.width}%; height:${ee.height}%; ${le?"":ae}"
                          data-filter-zone="${$(le?"all":k.id)}"
                          title="${$(k.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${$(k.name.replace(/^7F\s*/,""))}${he}</span>
                        </button>`}).join("")}
                  ${U.filter(k=>k.planPoint).map(k=>{const Y=q.some(he=>he.deviceId===k.id&&he.status==="active"),ee=B==="alarms",le=V!=="all"&&k.logicalZoneId!==V||ee&&!Y,re=ee&&Y?"background:var(--pacom-status-critical);":"",ve=k.category==="gateway"?Math.min(92,k.planPoint.y*100+5.5):k.planPoint.y*100;return`
                        <button type="button" class="pacom-pin ${k.id===P&&_?"is-selected":""} ${k.connectivity==="offline"?"pacom-pin--offline":""} ${le?"pacom-pin--dimmed":""}"
                          style="left:${(k.planPoint.x*100).toFixed(2)}%; top:${ve.toFixed(2)}%; ${re}"
                          data-pin-device="${$(k.id)}" title="${$(k.name)}">
                          <span class="pacom-dot ${Y?"pacom-dot--critical":k.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${$(ut(k))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>

      ${D?"":`<div class="pacom-canvas-hint" data-role="canvas-hint">缩放 ${Math.round(m*100)}% · 滚轮缩放 · 拖动平移 · 双击复位</div>`}
      ${v()}
    `}function v(){if(f.level!=="floor"||!_)return"";const r=U.find(k=>k.id===P);if(!r)return"";const A=r.category==="lighting",p=r.category==="hvac",h=Number(r.telemetry.dimming?.value??50),I=Number(r.telemetry.setpoint?.value??24),X=b.has(r.id),G=A?[{label:"当前开关",value:h>0?"开启":"关闭"},{label:"当前亮度",value:`${h}%`},{label:"实时功率",value:h>0?`${Math.round(h*1.4)} W`:"0 W"},{label:"运行模式",value:X?"人工覆盖":"自动策略"}]:p?[{label:"室内温度",value:`${r.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${I.toFixed(1)}°C`},{label:"运行工况",value:r.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:X?"人工覆盖":"自动策略"}]:r.category==="sensor"?[{label:"实时温度",value:`${r.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${r.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${r.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:r.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:r.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:r.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:r.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:r.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${$(r.name)}</h2>
            <div class="pacom-row-sub">${$(e(r.logicalZoneId))} · ${$(Oe[r.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${X?"pacom-badge--warning":"pacom-badge--neutral"}">
              ${X?"人工覆盖":"自动策略"}
            </span>
            <span class="pacom-badge ${r.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${r.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>
            </button>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          ${G.map(k=>`
              <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                <span class="pacom-row-sub">${k.label}</span>
                <strong style="font-size:13px; font-weight:500;">${$(k.value)}</strong>
              </div>`).join("")}
        </div>

        ${p?`
            <div class="lov-schematic-strip" aria-label="暖通工况简图">
              <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                <span class="pacom-row-sub">${r.connectivity==="online"?"制冷运转":"通信离线"}</span>
              </div>
              <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${$(r.telemetry.temp?.value??"23.8")}°</text>
                <rect x="80" y="8" width="54" height="28" rx="6" fill="${r.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${r.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${r.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${r.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${I.toFixed(1)}°C</text>
              </svg>
            </div>`:""}

        <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="pacom-row-sub">近 24 小时趋势（${A?"亮度 %":p?"温度 °C":r.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
            <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${$(r.id)}">查看完整时序 →</button>
          </div>
          <svg viewBox="0 0 280 42" style="width:100%; height:42px; display:block;">
            <line x1="0" y1="20" x2="280" y2="20" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
            <polyline fill="none" stroke="${r.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${A?"0,34 40,34 80,14 120,10 160,12 200,18 240,12 280,14":p?"0,24 40,26 80,22 120,18 160,16 200,19 240,21 280,18":"0,22 40,23 80,21 120,19 160,18 200,20 240,19 280,20"}" />
          </svg>
        </div>

        ${A||p?`
            <div class="pacom-control-box">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                ${X&&i?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${$(r.id)}">恢复自动策略</button>`:i?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
              </div>
              ${r.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
              ${A?`
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${i?"":"disabled"}>开灯</button>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${i?"":"disabled"}>关灯</button>
                  </div>
                  <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                    亮度目标：<strong>${h}%</strong>
                    <input type="range" min="0" max="100" step="10" value="${h}" data-ctrl-slider="lighting.dimming" ${i?"":"disabled"} />
                  </label>`:`
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${i?"":"disabled"}>开机</button>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${i?"":"disabled"}>关机</button>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span style="font-size:12px;">设定温度：</span>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${I-.5}" ${i?"":"disabled"}>-0.5°C</button>
                    <strong>${I.toFixed(1)}°C</strong>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${I+.5}" ${i?"":"disabled"}>+0.5°C</button>
                  </div>`}
            </div>`:""}

        ${y?`
            <div class="pacom-control-box">
              <div style="font-size:12px; font-weight:500;">最近批次：<code>${$(y.batchId)}</code></div>
              <div class="pacom-receipt-list">
                ${y.receipts.map(k=>{const Y=vt[k.status]??{text:k.status,badge:"pacom-badge--neutral"};return`
                      <div class="pacom-receipt-item">
                        <div>
                          <div><strong>${$(k.deviceId)}</strong> · ${$(k.command)} → ${$(k.targetValue)}</div>
                          ${k.errorMessage?`<div style="color:var(--pacom-status-critical);">${$(k.errorMessage)}</div>`:""}
                        </div>
                        <span class="pacom-badge ${Y.badge}">${Y.text}</span>
                      </div>`}).join("")}
              </div>
            </div>`:""}

        <details class="lov-tech-details">
          <summary><span>技术标识与硬件绑定</span><span>▾</span></summary>
          <div class="pacom-kv-grid">
            <span class="pacom-kv-label">设备编号</span><span><code>${$(r.id)}</code> · v${r.version}</span>
            <span class="pacom-kv-label">图上点位</span><span>${r.planPoint?`x=${r.planPoint.x.toFixed(2)}, y=${r.planPoint.y.toFixed(2)} (图 v${r.planPoint.planVersion})`:"未标点"}</span>
            <span class="pacom-kv-label">物理安装</span><span>${r.physicalInstalled?"现场已确认":"待现场复核"}</span>
            <span class="pacom-kv-label">硬件绑定</span><span>${r.hardwareBinding?`${r.hardwareBinding.protocol.toUpperCase()} · ${r.hardwareBinding.networkAddress}`:"未绑定"}</span>
          </div>
        </details>
      </aside>
    `}function W(r){if(r==="all")return{level:"all-projects"};const A=r.split(":");return A[0]==="project"&&A[1]?{level:"project",projectId:A[1]}:A[0]==="building"&&A[1]&&A[2]?{level:"building",projectId:A[1],buildingId:A[2]}:A[0]==="floor"&&A[1]&&A[2]&&A[3]?{level:"floor",projectId:A[1],buildingId:A[2],floorId:A[3]}:{level:"all-projects"}}function Q(){const r=U.filter(ae=>ae.connectivity==="online").length,A=U.length?Math.round(r/U.length*100):100,p=q.filter(ae=>ae.status==="active").length,h=n.filter(ae=>ae.status!=="closed"&&ae.status!=="resolved").length,I=f,X=I.level==="building",G=I.level==="project"?l.projects.find(ae=>ae.id===I.projectId):l.projects[0],k=I.level==="building"?l.buildings.find(ae=>ae.id===I.buildingId):null,Y=I.level==="building"?k?.name??"E栋":I.level==="project"?G?.name??"广实2号园":`全部授权项目（${l.projects.length}）`,ee=I.level==="building"?`地上 ${k?.aboveFloors??0} 层 · 建筑面积 ${k?.areaSqm??"-"} m²`:`${G?.city??"广州"} ${G?.address??""} · 共 ${l.buildings.length} 栋楼宇`,le=X?"418 kWh":"1,248 kWh",re=Math.round(96.2*.45+93.6*.35+A*.2),ve=q.filter(ae=>ae.status==="active").slice(0,2),he=I.level==="building"?l.floors.filter(ae=>ae.buildingId===I.buildingId).map(ae=>{const pe=ae.id===d.floorId,we=s.scope.allowedFloorIds.includes(ae.id),ge=!!ae.plan&&we;return`
              <div class="pacom-row" ${ge?`data-nav-scope="floor:${$(I.projectId)}:${$(I.buildingId)}:${$(ae.id)}"`:'style="opacity:0.72; cursor:default;"'}>
                <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                  <span class="pacom-dot ${pe&&p>0?"pacom-dot--warning":ge?"pacom-dot--online":"pacom-dot--offline"}"></span>
                  <div>
                    <div class="pacom-row-title">${$(k?.name??"")} ${$(ae.name)}</div>
                    <div class="pacom-row-sub">${ae.plan?"2D 平面控图就绪":"暂未上传平面图纸"}${pe&&p>0?` · ${p} 条待处理告警`:""}</div>
                  </div>
                </div>
                <span class="pacom-badge ${ge?"pacom-badge--online":"pacom-badge--neutral"}">${ge?"进入平面图 →":we?"待部署":"未授权"}</span>
              </div>`}).join(""):l.buildings.filter(ae=>I.level!=="project"||ae.projectId===I.projectId).map(ae=>{const pe=ae.id===d.buildingId;return`
              <div class="pacom-row" data-nav-scope="building:${$(ae.projectId)}:${$(ae.id)}">
                <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                  <span class="pacom-dot ${pe&&p>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <div>
                    <div class="pacom-row-title">${$(ae.name)}</div>
                    <div class="pacom-row-sub">地上 ${ae.aboveFloors} 层 · ${ae.areaSqm??"-"} m² · 舒适度 96.2%</div>
                  </div>
                </div>
                <span class="pacom-badge ${pe?"pacom-badge--accent":"pacom-badge--neutral"}">${pe?`在线 ${A}% · 告警 ${p}`:"运行平稳"}</span>
              </div>`}).join("");return`
      <section class="lov-bento-shell">
        <div class="lov-bento-left">
          <div class="pacom-card" style="padding:16px 20px; gap:12px;">
            <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
              <div>
                <div style="display:flex; align-items:center; gap:8px;">
                  <strong style="font-size:16px; font-weight:500;">${$(Y)}</strong>
                  <span class="pacom-badge pacom-badge--online">综合健康 ${re} 分</span>
                </div>
                <div class="pacom-row-sub" style="margin-top:4px;">${$(ee)}</div>
              </div>
              <div style="display:flex; align-items:center; gap:12px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                <div>
                  <div style="font-size:14px; font-weight:500;">26°C 多云</div>
                  <div class="pacom-row-sub">广州 · 湿度 64%</div>
                </div>
                <div style="display:flex; gap:8px; font-size:11px; color:var(--pacom-text-secondary); border-left:var(--hw) solid var(--pacom-border-subtle); padding-left:10px;">
                  <span>今 23–28°</span><span>明 22–27°</span><span>后 21–26°</span>
                </div>
              </div>
            </div>
          </div>

          <div class="lov-kpi-strip lov-kpi-strip--3" role="region" aria-label="空间核心绩效">
            <button type="button" class="lov-kpi-cell" data-go-analysis="environment" style="border:0; background:transparent; text-align:left; cursor:pointer;">
              <span class="lov-kpi-label">舒适度达标率</span>
              <div style="display:flex; align-items:flex-end; justify-content:space-between; gap:8px;">
                <div class="lov-kpi-value">96.2<span class="lov-kpi-unit">%</span></div>
                <svg viewBox="0 0 100 24" style="width:96px; height:22px; flex-shrink:0;"><polyline fill="none" stroke="var(--pacom-status-online)" stroke-width="1.8" stroke-linecap="round" points="2,18 20,15 38,16 56,11 74,9 98,6" /></svg>
              </div>
              <span class="lov-kpi-delta">较上周 +1.2% · 点击看分析 →</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-go-analysis="energy" style="border:0; background:transparent; text-align:left; cursor:pointer;">
              <span class="lov-kpi-label">今日总能耗</span>
              <div style="display:flex; align-items:flex-end; justify-content:space-between; gap:8px;">
                <div class="lov-kpi-value">${le}</div>
                <svg viewBox="0 0 100 24" style="width:96px; height:22px; flex-shrink:0;"><polyline fill="none" stroke="var(--pacom-accent-solid)" stroke-width="1.8" stroke-linecap="round" points="2,8 20,10 38,13 56,11 74,16 98,18" /></svg>
              </div>
              <span class="lov-kpi-delta">较基线 -6.4% · 节能良好</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-go-analysis="health" style="border:0; background:transparent; text-align:left; cursor:pointer;">
              <span class="lov-kpi-label">设备在线率</span>
              <div style="display:flex; align-items:flex-end; justify-content:space-between; gap:8px;">
                <div class="lov-kpi-value">${A}<span class="lov-kpi-unit">%（${r}/${U.length}）</span></div>
                <svg viewBox="0 0 100 24" style="width:96px; height:22px; flex-shrink:0;"><polyline fill="none" stroke="var(--pacom-brand)" stroke-width="1.8" stroke-linecap="round" points="2,6 20,6 38,6 56,9 74,13 98,13" /></svg>
              </div>
              <span class="lov-kpi-delta">1 台 VAV 离线待复核</span>
            </button>
          </div>

          <div class="lov-grid-2" style="align-items:start;">
            <div class="pacom-card" style="padding:16px 18px; gap:12px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <strong style="font-size:14px; font-weight:500;">告警与工单闭环态势</strong>
                <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-go-alarms="1">进入告警中心 →</button>
              </div>
              <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px;">
                <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">待处理</span><strong style="color:var(--pacom-status-warning);">${p} 条</strong></div>
                <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">处理中工单</span><strong>${h} 单</strong></div>
                <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">月可节省</span><strong style="color:var(--pacom-status-online);">¥ 1,420</strong></div>
              </div>
              ${ve.length>0?`<div style="display:flex; flex-direction:column; gap:6px;">
                      <div class="pacom-row-sub">优先处置项</div>
                      ${ve.map(ae=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarms="1">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${$(ae.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                          </button>`).join("")}
                    </div>`:""}
              <div>
                <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--pacom-text-secondary); margin-bottom:4px;">
                  <span>近 7 天每日告警触发</span><span>今日 ${p} 条</span>
                </div>
                <svg viewBox="0 0 210 56" style="width:100%; height:56px; display:block;">
                  ${[2,1,3,2,1,2,Math.max(1,p)].map((ae,pe)=>{const we=["一","二","三","四","五","六","今"],ge=ae*9;return`<rect x="${pe*30+6}" y="${38-ge}" width="18" height="${ge}" rx="4" fill="${pe===6?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.82" /><text x="${pe*30+15}" y="52" text-anchor="middle" font-size="9" fill="var(--pacom-text-secondary)">${we[pe]}</text>`}).join("")}
                </svg>
              </div>
            </div>

            <div class="pacom-card" style="padding:16px 18px; gap:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <strong style="font-size:14px; font-weight:500;">${X?"楼层健康与告警导览":"楼宇健康与告警导览"}</strong>
                <span class="pacom-row-sub">点击已部署项下钻</span>
              </div>
              <div style="display:flex; flex-direction:column; gap:4px;">
                ${he}
              </div>
            </div>
          </div>
        </div>

        <main class="pacom-right-pane">
          ${u()}
        </main>
      </section>
    `}function te(r,A,p){if(!K)return"";const h=Math.max(0,U.length-r);return`
      <div class="lov-briefing-pop" role="dialog" aria-label="今日运行简报" data-role="briefing-pop">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <strong style="font-size:14px; font-weight:500;">E7F 今日运行简报</strong>
            <div class="pacom-row-sub">室外 26°C 多云 · 湿度 64%</div>
          </div>
          <button type="button" class="pacom-drawer-close" data-toggle-briefing="1" aria-label="关闭简报">✕</button>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">昨日能耗偏差</span><strong style="color:var(--pacom-status-online);">-6.4%（省 ¥48）</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">本层均温 / 在线</span><strong>${$(p)}°C · ${r}/${U.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${A} 告警 · ${h} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖中设备</span><strong>${b.size} 台</strong></div>
        </div>
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">处理活跃告警 →</button>
        </div>
      </div>
    `}function se(){const r=q.filter(I=>I.status==="active").length,A=U.filter(I=>I.connectivity==="online").length,p=me(),h=U.find(I=>I.category==="sensor")?.telemetry.temp?.value??"23.4";t.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:10px; min-width:0; flex:1;">
              <h1 class="pacom-title" style="flex-shrink:0;">空间总览</h1>
              ${p?`<button type="button" class="lov-icon-btn" data-nav-scope="${$(p)}" title="返回上一空间层级" aria-label="返回上一空间层级">←</button>`:""}
              <div class="pacom-scope-pill" style="width:min(268px, 32vw); flex-shrink:1;" title="项目 / 楼宇 / 楼层空间范围切换">
                <select name="homeScope" data-role="scope-select" aria-label="选择查看范围">
                  ${ne()}
                </select>
                <span class="pacom-scope-chevron">${mt}</span>
              </div>
              ${f.level==="floor"?`
                  <div class="pacom-tabs" role="tablist" style="flex-shrink:0;">
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${B==="devices"}" data-tab="devices">设备</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${B==="zones"}" data-tab="zones">区域</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${B==="alarms"}" data-tab="alarms">
                      告警 ${r>0?`<span class="pacom-badge pacom-badge--warning">${r}</span>`:""}
                    </button>
                  </div>`:""}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${D?o?'<span class="pacom-badge pacom-badge--neutral"><span class="pacom-dot pacom-dot--offline"></span>演示模式</span>':'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>':`<button type="button" class="pacom-badge pacom-badge--online" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-briefing="1" title="点击查看今日运行简报">在线 ${A}/${U.length} · ${$(h)}°C · 简报 ▾</button>`}
              <div class="pacom-tabs pacom-mobile-view-switch" role="group" aria-label="窄屏视图切换">
                <button type="button" class="pacom-tab" aria-selected="${C==="list"}" data-mobile-pane-btn="list">列表</button>
                <button type="button" class="pacom-tab" aria-selected="${C==="canvas"}" data-mobile-pane-btn="canvas">平面图</button>
              </div>
            </div>
          </div>
        </header>

        ${te(A,r,h)}

        ${f.level==="floor"?`
            <section class="pacom-split" data-mobile-pane="${C}">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:${L}px;">
                ${qe()}
              </aside>
              <div class="pacom-splitter" role="separator" tabindex="0" aria-orientation="vertical" aria-label="调整左右栏宽度" data-role="splitter"></div>
              <main class="pacom-right-pane">
                ${u()}
              </main>
            </section>`:Q()}
      </div>
    `,ue()}function ue(){t.querySelector('[data-role="scope-select"]')?.addEventListener("change",p=>{J(W(p.currentTarget.value))}),t.querySelectorAll("[data-nav-scope]").forEach(p=>{p.addEventListener("click",()=>{p.dataset.navScope&&J(W(p.dataset.navScope))})}),t.querySelectorAll("[data-tab]").forEach(p=>{p.addEventListener("click",()=>{B=p.dataset.tab,se()})}),t.querySelectorAll("[data-mobile-pane-btn]").forEach(p=>{p.addEventListener("click",()=>{C=p.dataset.mobilePaneBtn,se()})}),t.querySelector('[data-role="search"]')?.addEventListener("input",p=>{N=p.currentTarget.value,R()}),t.querySelector('[data-role="category"]')?.addEventListener("change",p=>{F=p.currentTarget.value,se()}),t.querySelectorAll("[data-filter-zone]").forEach(p=>{p.addEventListener("click",h=>{h.stopPropagation(),V=p.dataset.filterZone??"all",se()})}),t.querySelectorAll("[data-select-device]").forEach(p=>{p.addEventListener("click",h=>{h.target.tagName!=="INPUT"&&(P=p.dataset.selectDevice??null,_=!0,C="canvas",se())})}),t.querySelectorAll("[data-check-device]").forEach(p=>{p.addEventListener("change",()=>{const h=p.dataset.checkDevice;h&&(p.checked?Z.add(h):Z.delete(h),se())})}),t.querySelectorAll("[data-pin-device]").forEach(p=>{p.addEventListener("click",h=>{h.stopPropagation(),P=p.dataset.pinDevice??null,_=!0,se()})}),t.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{_=!1,se()}),t.querySelector("[data-release-override]")?.addEventListener("click",p=>{const h=p.currentTarget.dataset.releaseOverride;h&&(b.delete(h),se())}),t.querySelectorAll("[data-zone-power]").forEach(p=>{p.addEventListener("click",h=>{h.stopPropagation();const I=p.dataset.zonePower,X=p.dataset.zoneVal==="true";if(!I)return;const G=U.filter(Y=>Y.logicalZoneId===I&&Y.category==="lighting").map(Y=>Y.id),k=U.filter(Y=>Y.logicalZoneId===I&&Y.category==="hvac").map(Y=>Y.id);G.length?S(G,"lighting.power",X):k.length&&S(k,"hvac.power",X)})}),t.querySelectorAll("[data-locate-device]").forEach(p=>{p.addEventListener("click",()=>{const h=p.dataset.locateDevice;h&&(P=h,_=!0,C="canvas",se())})}),t.querySelectorAll("[data-go-alarms]").forEach(p=>{p.addEventListener("click",()=>{window.location.hash="#alarms"})}),t.querySelectorAll("[data-go-analysis]").forEach(p=>{p.addEventListener("click",()=>{const h=p.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(h)}`})}),t.querySelectorAll("[data-go-timeseries]").forEach(p=>{p.addEventListener("click",()=>{const h=p.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(h)}`})}),t.querySelectorAll("[data-toggle-briefing]").forEach(p=>{p.addEventListener("click",()=>{K=!K,se()})}),t.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const p=U.filter(Y=>Y.connectivity==="online").length,h=q.filter(Y=>Y.status==="active").length,I=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${p}/${U.length}（离线 ${U.length-p} 台）`,`待处理告警：${h} 条`,`人工覆盖中：${b.size} 台`].join(`
`),X=new Blob([I],{type:"text/plain;charset=utf-8;"}),G=URL.createObjectURL(X),k=document.createElement("a");k.href=G,k.download="pacom-daily-briefing.txt",k.click(),URL.revokeObjectURL(G)}),t.querySelectorAll("[data-ctrl-cmd]").forEach(p=>{p.addEventListener("click",()=>{if(!P||!p.dataset.ctrlCmd)return;const h=p.dataset.ctrlVal??"",I=h==="true"?!0:h==="false"?!1:Number(h);S([P],p.dataset.ctrlCmd,I)})}),t.querySelector("[data-ctrl-slider]")?.addEventListener("change",p=>{const h=p.currentTarget;!P||!h.dataset.ctrlSlider||S([P],h.dataset.ctrlSlider,Number(h.value))}),t.querySelectorAll("[data-batch-cmd]").forEach(p=>{p.addEventListener("click",()=>{const h=Array.from(Z),I=p.dataset.batchVal??"",X=I==="true"?!0:I==="false"?!1:I;S(h,p.dataset.batchCmd,X)})}),t.querySelectorAll("[data-ack-alarm]").forEach(p=>{p.addEventListener("click",async()=>{!p.dataset.ackAlarm||f.level!=="floor"||!g||(await a.acknowledgeAlarm(p.dataset.ackAlarm,"首页快速确认"),q=await a.listAlarms(f.floorId),se())})}),t.querySelectorAll("[data-canvas-layer]").forEach(p=>{p.addEventListener("click",()=>{const h=p.dataset.canvasLayer;h&&(j=h,se())})}),t.querySelectorAll("[data-zoom]").forEach(p=>{p.addEventListener("click",()=>{const h=p.dataset.zoom;h==="in"?m=Math.min(2.6,Number((m+.2).toFixed(2))):h==="out"?m=Math.max(.6,Number((m-.2).toFixed(2))):(m=1,M=0,x=0),oe()})});const r=t.querySelector('[data-role="canvas-stage"]');if(r&&!D){let p=!1,h=0,I=0,X=0,G=0;r.addEventListener("pointerdown",Y=>{Y.target?.closest("button, input, select, .pacom-drawer")||(p=!0,h=Y.clientX,I=Y.clientY,X=M,G=x,r.classList.add("is-panning"),r.setPointerCapture?.(Y.pointerId))}),r.addEventListener("pointermove",Y=>{p&&(M=X+(Y.clientX-h),x=G+(Y.clientY-I),oe())});const k=()=>{p&&(p=!1,r.classList.remove("is-panning"))};r.addEventListener("pointerup",k),r.addEventListener("pointercancel",k),r.addEventListener("wheel",Y=>{Y.preventDefault();const ee=Y.deltaY<0?.12:-.12;m=Math.max(.6,Math.min(2.6,Number((m+ee).toFixed(2)))),oe()},{passive:!1}),r.addEventListener("dblclick",Y=>{Y.target?.closest("button")||(m=1,M=0,x=0,oe())})}const A=t.querySelector('[data-role="splitter"]');A?.addEventListener("pointerdown",p=>{const h=p.clientX,I=L;A.classList.add("is-dragging");const X=k=>{L=Math.max(320,Math.min(640,I+(k.clientX-h)));const Y=t.querySelector(".pacom-left-pane");Y&&Y.style.setProperty("--pacom-sidebar-width",`${L}px`)},G=()=>{A.classList.remove("is-dragging"),localStorage.setItem(je,String(Math.round(L))),window.removeEventListener("pointermove",X),window.removeEventListener("pointerup",G)};window.addEventListener("pointermove",X),window.addEventListener("pointerup",G)}),A?.addEventListener("keydown",p=>{if(p.key==="ArrowLeft")p.preventDefault(),L=Math.max(320,L-16);else if(p.key==="ArrowRight")p.preventDefault(),L=Math.min(640,L+16);else if(p.key==="Home")p.preventDefault(),L=320;else if(p.key==="End")p.preventDefault(),L=640;else return;localStorage.setItem(je,String(Math.round(L)));const h=t.querySelector(".pacom-left-pane");h&&h.style.setProperty("--pacom-sidebar-width",`${L}px`)})}await J(f,!0)}const ft=new Set(["lighting","hvac","alarm_rules"]),De={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},Ie=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function yt(t){const a=new Set;for(const s of t.actions)s.command.startsWith("lighting")?a.add("照明"):s.command.startsWith("hvac")?a.add("暖通"):a.add("综合");return Array.from(a)}function $t(t,a,s){const l=s?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
    <div style="width:150px; display:flex; flex-direction:column; gap:3px;">
      <div style="position:relative; height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
        ${t<a?`<div style="position:absolute; left:${t/24*100}%; width:${(a-t)/24*100}%; top:0; bottom:0; border-radius:999px; background:${l};"></div>`:`
        <div style="position:absolute; left:${t/24*100}%; width:${(24-t)/24*100}%; top:0; bottom:0; border-radius:999px; background:${l};"></div>
        <div style="position:absolute; left:0; width:${a/24*100}%; top:0; bottom:0; border-radius:999px; background:${l};"></div>`}
      </div>
      <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--pacom-text-muted);">
        <span>00</span><span>12</span><span>24</span>
      </div>
    </div>
  `}async function wt(t,a,s){let[l,o,i]=await Promise.all([a.listScenes(d.floorId),a.getRuntimeSettings(d.projectId),a.getFloorDevices(d.floorId).catch(()=>[])]),g="manual",E="balanced",f="all",B=null,C="",N=!1,F=!1,V=!1,T="all",H=null,O="",P="",_=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const K=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],j=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],b=[{deviceId:i[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],Z=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${o.calendar.workdayStart} – ${o.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${o.calendar.nightGuardStart} – 次日 ${o.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],U=a.subscribeFloorEvents(d.floorId,async n=>{n.type==="control.receipt.updated"&&B?.batchId===n.batchId&&(B=await a.getControlBatch(n.batchId),q())});function q(){const n=C.trim().toLowerCase(),y=n?l.filter(e=>`${e.name} ${e.description}`.toLowerCase().includes(n)):l,D=o.rules.filter(e=>ft.has(e.category)),m=f==="all"?D:f==="cbm"?[]:D.filter(e=>e.category===f),M=f==="all"||f==="cbm",x=T==="issues"?K.filter(e=>e.status!=="verified"):K,L=Ie.find(e=>e.id===E)??Ie[1],w=s.scope.canControlDevices,z=s.scope.canEditDeployment;t.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">智能策略</h1>
              <div class="pacom-tabs" role="tablist" aria-label="智能策略分类">
                <button class="pacom-tab" role="tab" aria-selected="${g==="manual"}" data-scene-tab="manual">快捷场景（${l.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${g==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
                <button class="pacom-tab" role="tab" aria-selected="${g==="rules"}" data-scene-tab="rules">条件联动（${D.length+j.length}）</button>
              </div>
            </div>

            <div class="pacom-header-meta">
              <button type="button" class="pacom-badge ${_.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${_.length>0?`人工覆盖中：${_.length} 台 ▾`:"全部自动托管 ✓"}
              </button>
              <button type="button" class="pacom-btn ${V?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${K.length}）</button>
              ${g==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${N?"收起表单":"+ 新建场景"}</button>`:g==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
        </header>

        ${F?`
            <div class="lov-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${_.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">✕</button>
              </div>
              ${_.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':_.map(e=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${e.name}</div>
                            <div class="pacom-row-sub">${e.reason}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${e.id}" ${w?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${_.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${w?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${V?`
            <aside class="lov-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">✕</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${T==="all"}" data-log-filter="all">全部（${K.length}）</button>
                  <button class="pacom-tab" aria-selected="${T==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${x.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${x.map(e=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${e.device}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${e.source}</span>
                        </div>
                        <span class="pacom-row-sub">${e.action} · ${e.at}</span>
                      </div>
                      <span class="pacom-badge ${e.status==="verified"?"pacom-badge--online":e.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${e.status==="verified"?"回读确认":e.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${O?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${O}</span></div>`:""}
          ${P?`<div class="pacom-alert-banner">${P}</div>`:""}

          ${g==="manual"?`
              ${B?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="lov-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${B.batchId}</span>
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
                            ${B.receipts.map(e=>`
                                <tr>
                                  <td><code style="font-size:12px;">${e.deviceId}</code></td>
                                  <td>${e.command}</td>
                                  <td>${String(e.targetValue)}${e.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${e.errorMessage}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${e.status==="verified_success"?"pacom-badge--online":e.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${e.status}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${N?`
                  <section class="lov-section">
                    <h2 class="lov-section-title">新建快捷场景（多设备动作编排）</h2>
                    <form class="lov-settings-card" data-role="new-scene-form">
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">场景名称与说明</span>
                          <span class="lov-setting-desc">例如「实验区午休调光」「重要来访接待模式」</span>
                        </div>
                        <div class="lov-setting-control" style="width:min(460px,100%); gap:8px;">
                          <input class="pacom-input" name="name" placeholder="场景名称" required />
                          <input class="pacom-input" name="description" placeholder="联动效果说明" required />
                        </div>
                      </div>
                      <div class="lov-setting-row" style="flex-direction:column; align-items:stretch; gap:8px;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                          <span class="lov-setting-title">联动动作列表（${b.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${b.map((e,c)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" data-draft-dev="${c}" aria-label="目标设备">
                                ${i.map(S=>`<option value="${S.id}" ${S.id===e.deviceId?"selected":""}>${S.name}</option>`).join("")}
                              </select>
                              <select class="pacom-select" data-draft-cmd="${c}" aria-label="执行指令">
                                <option value="lighting.dimming" ${e.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${e.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${e.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" data-draft-val="${c}" value="${e.targetValue}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${c}" ${b.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="lov-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit">保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="lov-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${C}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${y.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${y.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="lov-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':y.map(e=>{const c=yt(e),S=e.actions.slice(0,3).map(R=>{const oe=i.find(ne=>ne.id===R.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??R.deviceId,me=R.command==="lighting.dimming"?`亮度 ${R.targetValue}%`:R.command==="hvac.setpoint"?`设温 ${R.targetValue}°C`:R.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${oe} → ${me}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${e.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${c.map(R=>`<span class="pacom-badge pacom-badge--accent">${R}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${e.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${e.description}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${S}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${e.lastExecutedAt?e.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${e.id}" ${w?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:g==="schedule_oss"?`
                <div class="lov-kpi-strip lov-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">当前优化启停模式</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${L.title}</div>
                    <span class="lov-kpi-delta">${L.estSaving}</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">明日预测预启动时刻</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${L.predictedStart}</div>
                    <span class="lov-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">本周累计节省运行工时</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${L.savedHours}</div>
                    <span class="lov-kpi-delta">当前人工覆盖挂起：${_.length} 台</span>
                  </div>
                </div>

                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="lov-mode-grid">
                    ${Ie.map(e=>`
                      <button type="button" class="lov-mode-card" aria-pressed="${E===e.id}" data-oss-mode="${e.id}" ${w?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${e.title}</strong>
                          <span class="pacom-badge ${E===e.id?"pacom-badge--online":"pacom-badge--neutral"}">${E===e.id?"当前生效":e.badge}</span>
                        </div>
                        <span class="lov-setting-desc">${e.desc}</span>
                        <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${e.estSaving}</span>
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
                          ${Z.map(e=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${e.name}</span>
                                    ${e.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${e.windowLabel}</div>
                                </td>
                                <td>${$t(e.startHour,e.endHour,e.enabled)}</td>
                                <td><span class="pacom-row-sub">${e.scope}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${e.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="lov-switch"
                                      role="switch"
                                      aria-checked="${e.enabled}"
                                      aria-label="切换排程 ${e.name}"
                                      data-toggle-schedule="${e.id}"
                                      ${w?"":"disabled"}
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
                    <h2 class="lov-section-title">事件、传感联动与工时维保规则（IF → THEN / CBM）</h2>
                    <div class="lov-count-pills" role="group" aria-label="按系统筛选规则">
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(e=>{const c=e==="all"?"全部":De[e]??e,S=e==="all"?D.length+j.length:e==="cbm"?j.length:D.filter(R=>R.category===e).length;return`
                            <button type="button" class="lov-count-pill" aria-pressed="${f===e}" data-rule-cat="${e}">
                              <span>${c}</span><span class="lov-count-num">${S}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="lov-settings-card">
                    ${m.map(e=>{const c=H===e.id;return`
                          <div class="lov-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="lov-setting-meta">
                                <span class="lov-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${De[e.category]??e.category}</span>
                                  <span>${e.name}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${e.version}</span>
                                </span>
                                <span class="lov-setting-desc">${e.summary} · 范围：${e.scopeLabel} · 回执：${e.receiptSummary??"已同步"}</span>
                              </div>
                              <div class="lov-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${e.id}">${c?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${e.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="lov-switch"
                                  role="switch"
                                  aria-checked="${e.enabled?"true":"false"}"
                                  aria-label="切换 ${e.name}"
                                  data-toggle-strategy-rule="${e.id}"
                                  data-rule-ver="${e.version}"
                                  data-rule-next="${!e.enabled}"
                                  ${z?"":"disabled"}
                                >
                                  <span class="lov-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${c?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${e.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":e.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${e.scopeLabel} · 当前版本：v${e.version} · 最近同步：${e.receiptSummary??"已同步"}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${M?j.map(e=>{const c=Math.min(100,Math.round(e.runtimeHours/e.thresholdHours*100));return`
                                <div class="lov-setting-row">
                                  <div class="lov-setting-meta" style="gap:6px;">
                                    <span class="lov-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${e.name}</span>
                                      <span class="pacom-badge ${c>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${e.runtimeHours} / ${e.thresholdHours} h（${c}%）</span>
                                    </span>
                                    <div class="lov-progress-track" style="max-width:340px;">
                                      <div class="lov-progress-fill" style="width:${c}%; background:${c>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="lov-setting-desc">绑定设备：${e.equipment} · 上次重置：${e.lastReset}</span>
                                  </div>
                                  <div class="lov-setting-control">
                                    <span class="pacom-row-sub">${e.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="lov-switch" role="switch" aria-checked="${e.enabled}" data-toggle-cbm="${e.id}" aria-label="切换 ${e.name}" ${z?"":"disabled"}>
                                      <span class="lov-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,t.querySelectorAll("[data-scene-tab]").forEach(e=>{e.addEventListener("click",()=>{g=e.dataset.sceneTab??"manual",O="",q()})}),t.querySelectorAll("[data-toggle-overrides]").forEach(e=>{e.addEventListener("click",()=>{F=!F,q()})}),t.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{_=[],O="已释放全部人工覆盖设备，自动节能策略已恢复托管。",q()}),t.querySelectorAll("[data-release-one]").forEach(e=>{e.addEventListener("click",()=>{const c=e.dataset.releaseOne;_=_.filter(S=>S.id!==c),O="已恢复该设备的自动策略托管。",q()})}),t.querySelectorAll("[data-toggle-cmdlog]").forEach(e=>{e.addEventListener("click",()=>{V=!V,q()})}),t.querySelectorAll("[data-log-filter]").forEach(e=>{e.addEventListener("click",()=>{T=e.dataset.logFilter??"all",q()})}),t.querySelector("[data-close-batch]")?.addEventListener("click",()=>{B=null,q()}),t.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),t.querySelectorAll("[data-oss-mode]").forEach(e=>{e.addEventListener("click",()=>{const c=e.dataset.ossMode;if(!c)return;E=c;const S=Ie.find(R=>R.id===c);O=`已切换至「${S?.title??c}」模式（明日预测启动 ${S?.predictedStart??""}）。`,q()})}),t.querySelectorAll("[data-toggle-schedule]").forEach(e=>{e.addEventListener("click",()=>{const c=e.dataset.toggleSchedule,S=Z.find(R=>R.id===c);S&&(S.enabled=!S.enabled,O=`排程「${S.name}」已${S.enabled?"恢复启用":"临时暂停"}。`,q())})}),t.querySelectorAll("[data-rule-cat]").forEach(e=>{e.addEventListener("click",()=>{f=e.dataset.ruleCat??"all",q()})}),t.querySelectorAll("[data-expand-rule]").forEach(e=>{e.addEventListener("click",()=>{const c=e.dataset.expandRule??null;H=H===c?null:c,q()})}),t.querySelectorAll("[data-toggle-cbm]").forEach(e=>{e.addEventListener("click",()=>{const c=j.find(S=>S.id===e.dataset.toggleCbm);c&&(c.enabled=!c.enabled,O=`工时维保规则「${c.name}」已${c.enabled?"启用":"停用"}。`,q())})}),t.querySelectorAll("[data-toggle-strategy-rule]").forEach(e=>{e.addEventListener("click",async()=>{P="";try{await a.toggleRuntimeRule(e.dataset.toggleStrategyRule,e.dataset.ruleNext==="true",Number(e.dataset.ruleVer)),o=await a.getRuntimeSettings(d.projectId),O="条件联动规则状态与版本回执已更新。",q()}catch(c){P=c instanceof Error?c.message:String(c),q()}})}),t.querySelectorAll("[data-toggle-create]").forEach(e=>{e.addEventListener("click",()=>{N=!N,q()})}),t.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{b.push({deviceId:i[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),q()}),t.querySelectorAll("[data-del-draft-action]").forEach(e=>{e.addEventListener("click",()=>{const c=Number(e.dataset.delDraftAction);b.length>1&&(b.splice(c,1),q())})}),t.querySelectorAll("[data-draft-dev]").forEach(e=>{e.addEventListener("change",()=>{const c=b[Number(e.dataset.draftDev)];c&&(c.deviceId=e.value)})}),t.querySelectorAll("[data-draft-cmd]").forEach(e=>{e.addEventListener("change",()=>{const c=b[Number(e.dataset.draftCmd)];c&&(c.command=e.value)})}),t.querySelectorAll("[data-draft-val]").forEach(e=>{e.addEventListener("change",()=>{const c=b[Number(e.dataset.draftVal)];c&&(c.targetValue=e.value)})}),t.querySelector("[data-scene-search]")?.addEventListener("input",e=>{const c=e.currentTarget,S=c.selectionStart??c.value.length;C=c.value,q();const R=t.querySelector("[data-scene-search]");R&&(R.focus(),R.setSelectionRange(S,S))}),t.querySelectorAll("[data-exec-scene]").forEach(e=>{e.addEventListener("click",async()=>{P="";const c=l.find(S=>S.id===e.dataset.execScene);try{B=await a.executeScene(e.dataset.execScene),l=await a.listScenes(d.floorId),K.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:c?.name??"E7F 场景",action:`${B.receipts.length} 台设备联动下发`,status:"verified"}),q()}catch(S){P=S instanceof Error?S.message:String(S),q()}})}),t.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async e=>{e.preventDefault();const c=new FormData(e.currentTarget);try{await a.createScene({projectId:d.projectId,floorId:d.floorId,name:String(c.get("name")??""),description:String(c.get("description")??""),actions:b.map(S=>({deviceId:S.deviceId,command:S.command,targetValue:S.targetValue==="true"?!0:S.targetValue==="false"?!1:Number(S.targetValue)||50}))}),l=await a.listScenes(d.floorId),N=!1,O=`快捷场景已保存（共绑定 ${b.length} 条联动动作）。`,q()}catch(S){P=S instanceof Error?S.message:String(S),q()}})}q(),window.addEventListener("hashchange",()=>U(),{once:!0})}function Fe(t,a){return t.length===0?'<div class="lov-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':t.map(s=>`
      <div class="lov-setting-row">
        <div class="lov-setting-meta">
          <span class="lov-setting-title">
            <span>${s.name}</span>
            <span class="pacom-badge pacom-badge--neutral">v${s.version}</span>
            <span class="pacom-badge pacom-badge--accent">${s.scopeLabel}</span>
          </span>
          <span class="lov-setting-desc">${s.summary} · 回执：${s.receiptSummary??"已同步"}</span>
        </div>
        <div class="lov-setting-control">
          <span class="pacom-row-sub">${s.enabled?"已启用":"已停用"}</span>
          <button
            type="button"
            class="lov-switch"
            role="switch"
            aria-checked="${s.enabled?"true":"false"}"
            aria-label="切换 ${s.name}"
            data-toggle-rule="${s.id}"
            data-rule-ver="${s.version}"
            data-rule-next="${!s.enabled}"
            ${a?"":"disabled"}
          >
            <span class="lov-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function xt(t,a,s){let l="calendar",o=await a.getRuntimeSettings(d.projectId),i=o.calendar.workdayStart,g=o.calendar.workdayEnd,E=o.calendar.nightGuardStart,f=o.calendar.nightGuardEnd,B=!0,C=[];const N=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let F="flat";const V={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},T={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},H={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},O={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},P=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let _="",K="";function j(){const b=s.scope.canEditDeployment,Z=o.rules.filter(n=>n.category==="weather_area"),U=o.rules.filter(n=>n.category==="metering_carbon"),q=o.rules.filter(n=>n.category==="templates");t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">运行设置</h1>
              <div class="pacom-tabs" role="tablist" aria-label="运行设置分类">
                <button class="pacom-tab" role="tab" aria-selected="${l==="calendar"}" data-stab="calendar">运行日历</button>
                <button class="pacom-tab" role="tab" aria-selected="${l==="energy_weather"}" data-stab="energy_weather">能碳与气象</button>
                <button class="pacom-tab" role="tab" aria-selected="${l==="guardrails"}" data-stab="guardrails">控制与安全</button>
                <button class="pacom-tab" role="tab" aria-selected="${l==="notifications"}" data-stab="notifications">通知与工单规则</button>
              </div>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">项目范围：广实2号园</span>
              <span class="pacom-badge ${b?"pacom-badge--online":"pacom-badge--warning"}">
                ${b?"可修改并下发配置":"当前角色只读"}
              </span>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:8px 6px 32px;">
          <div style="width:100%; max-width:920px; margin:0 auto; display:flex; flex-direction:column; gap:20px;">
            ${_?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${_}</span></div>`:""}
            ${K?`<div class="pacom-alert-banner">${K}</div>`:""}

            ${l==="calendar"?`
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">工作时间与夜间值守基准</h2>
                    <span class="pacom-badge pacom-badge--neutral">版本 v${o.calendar.version}</span>
                  </div>
                  <div class="lov-settings-card">
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">工作日上班 / 下班时间</span>
                        <span class="lov-setting-desc">驱动「智能策略 → 排程与节能」早间预冷及公区照明启停；晚于 21:30 将自动提示交叠冲突</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:116px;" type="time" data-cal-start value="${i}" aria-label="工作日上班时间" ${b?"":"disabled"} />
                        <span class="pacom-row-sub">至</span>
                        <input class="pacom-input" style="width:116px;" type="time" data-cal-end value="${g}" aria-label="工作日下班时间" ${b?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">夜间值守巡检窗口</span>
                        <span class="lov-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:116px;" type="time" data-night-start value="${E}" aria-label="夜间值守开始" ${b?"":"disabled"} />
                        <span class="pacom-row-sub">至次日</span>
                        <input class="pacom-input" style="width:116px;" type="time" data-night-end value="${f}" aria-label="夜间值守结束" ${b?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">自动跳过中国法定节假日</span>
                        <span class="lov-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                      </div>
                      <div class="lov-setting-control">
                        <span class="pacom-row-sub">${B?"已开启":"已关闭"}</span>
                        <button type="button" class="lov-switch" role="switch" aria-checked="${B}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${b?"":"disabled"}>
                          <span class="lov-switch-thumb"></span>
                        </button>
                      </div>
                    </div>
                    <div class="lov-setting-row" style="justify-content:flex-end;">
                      <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                      <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${b?"":"disabled"}>保存并校验版本</button>
                    </div>
                  </div>
                </section>

                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">特殊例外日期（加班 / 接待覆盖默认日历）</h2>
                    <span class="pacom-row-sub">共 ${N.length} 条</span>
                  </div>
                  <div class="lov-settings-card">
                    ${N.map(n=>`
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title"><span>${n.date}</span><span class="pacom-badge pacom-badge--accent">${n.mode}</span></span>
                            <span class="lov-setting-desc">${n.label}</span>
                          </div>
                          <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${n.id}" ${b?"":"disabled"}>移除</button>
                        </div>`).join("")}
                    <form data-add-sd-form class="lov-setting-row" style="display:grid; grid-template-columns:145px 1fr 148px auto; gap:8px; align-items:center;">
                      <input class="pacom-input" name="date" type="date" required ${b?"":"disabled"} />
                      <input class="pacom-input" name="label" placeholder="说明（如：重要接待日 / 实验加班）" required ${b?"":"disabled"} />
                      <select class="pacom-select" name="mode" ${b?"":"disabled"}>
                        <option value="保持工作日工况">保持工作日工况</option>
                        <option value="全天节能值守">全天节能值守</option>
                      </select>
                      <button class="pacom-btn" type="submit" ${b?"":"disabled"}>+ 添加例外</button>
                    </form>
                  </div>
                </section>

                ${C.length>0?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">受影响的定时与夜间规则预览</h2>
                        <span class="pacom-row-sub">共 ${C.length} 条</span>
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
                              ${C.map(n=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${n.ruleName}</div>
                                      ${n.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${n.conflictWarning}</div>`:""}
                                    </td>
                                    <td>${n.beforeWindow}</td>
                                    <td><strong>${n.afterWindow}</strong></td>
                                    <td>
                                      <span class="pacom-badge ${n.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                        ${n.conflictWarning?"交叠警告":"自动跟随"}
                                      </span>
                                    </td>
                                  </tr>`).join("")}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>`:""}`:l==="energy_weather"?`
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
                          <select class="pacom-select" data-energy-field="weatherSource" aria-label="室外气象数据源" ${b?"":"disabled"}>
                            <option value="guanzhou_station" ${V.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                            <option value="campus_sensor" ${V.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                          </select>
                        </div>
                      </div>
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">E 栋计费与能效面积（m²）</span>
                          <span class="lov-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                        </div>
                        <div class="lov-setting-control">
                          <input class="pacom-input" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${V.billingArea}" aria-label="计费面积" ${b?"":"disabled"} />
                        </div>
                      </div>
                      ${Fe(Z,b)}
                    </div>
                  </section>

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">电价与碳排口径</h2>
                      <div class="pacom-tabs">
                        <button class="pacom-tab" aria-selected="${F==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                        <button class="pacom-tab" aria-selected="${F==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                      </div>
                    </div>
                    <div class="lov-settings-card">
                      ${F==="flat"?`
                          <div class="lov-setting-row">
                            <div class="lov-setting-meta">
                              <span class="lov-setting-title">综合电价参考（元 / kWh）</span>
                              <span class="lov-setting-desc">用于数据分析中的月度节能金额估算</span>
                            </div>
                            <div class="lov-setting-control">
                              <input class="pacom-input" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${V.tariffYuan}" aria-label="综合电价" ${b?"":"disabled"} />
                            </div>
                          </div>`:`
                          <div class="lov-setting-row">
                            <div class="lov-setting-meta">
                              <span class="lov-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                              <span class="lov-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                            </div>
                            <div class="lov-setting-control" style="gap:6px;">
                              <span class="pacom-row-sub">峰</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${V.tariffPeak}" ${b?"":"disabled"} />
                              <span class="pacom-row-sub">平</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${V.tariffFlat}" ${b?"":"disabled"} />
                              <span class="pacom-row-sub">谷</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${V.tariffValley}" ${b?"":"disabled"} />
                            </div>
                          </div>`}
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">区域电网碳排放因子</span>
                          <span class="lov-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                        </div>
                        <div class="lov-setting-control">
                          <select class="pacom-select" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${b?"":"disabled"}>
                            <option value="0.5271" ${V.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                            <option value="0.5703" ${V.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                          </select>
                        </div>
                      </div>
                      ${Fe(U,b)}
                      <div class="lov-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${b?"":"disabled"}>保存口径参数</button>
                      </div>
                    </div>
                  </section>`:l==="guardrails"?`
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
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="minTemp" value="${T.minTemp}" aria-label="最低设定温度" ${b?"":"disabled"} />
                            <span class="pacom-row-sub">至</span>
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="maxTemp" value="${T.maxTemp}" aria-label="最高设定温度" ${b?"":"disabled"} />
                            <span class="pacom-row-sub">°C</span>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">人工覆盖自动释放时长</span>
                            <span class="lov-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                          </div>
                          <div class="lov-setting-control">
                            <select class="pacom-select" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${b?"":"disabled"}>
                              <option value="2h" ${T.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                              <option value="4h" ${T.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                              <option value="eod" ${T.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                              <option value="permanent" ${T.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                            </select>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">控制指令回读超时阈值（秒）</span>
                            <span class="lov-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                          </div>
                          <div class="lov-setting-control">
                            <input class="pacom-input" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${T.readbackTimeoutSec}" aria-label="回读超时阈值" ${b?"":"disabled"} />
                            <span class="pacom-row-sub">秒</span>
                          </div>
                        </div>
                        <div class="lov-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${b?"":"disabled"}>保存安全边界</button>
                        </div>
                      </div>
                    </section>

                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">标准设备参数模板</h2>
                        <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                      </div>
                      <div class="lov-settings-card">
                        ${Fe(q,b)}
                      </div>
                    </section>`:`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">自动转工单规则（Ticket Automation）</h2>
                        <span class="pacom-row-sub">引用「机构与账户」工作组定义</span>
                      </div>
                      <div class="lov-settings-card">
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">严重告警持续超阈值自动派单</span>
                            <span class="lov-setting-desc">告警持续未恢复达到设定分钟数时，自动创建工单并同步至 CMMS</span>
                          </div>
                          <div class="lov-setting-control">
                            <input class="pacom-input" style="width:72px;" type="number" data-auto-wo="delayMin" value="${H.delayMin}" ${b?"":"disabled"} />
                            <span class="pacom-row-sub">分钟</span>
                            <button type="button" class="lov-switch" role="switch" aria-checked="${H.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${b?"":"disabled"}>
                              <span class="lov-switch-thumb"></span>
                            </button>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">默认派单处理组与防重保护</span>
                            <span class="lov-setting-desc">同一告警若已关联未结工单，自动跳过建单以避免重复派单</span>
                          </div>
                          <div class="lov-setting-control">
                            <select class="pacom-select" data-auto-wo="defaultGroup" aria-label="默认处理组" ${b?"":"disabled"}>
                              <option value="暖通运维组" ${H.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                              <option value="强电照明组" ${H.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                              <option value="园区物业值班组" ${H.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                            </select>
                            <span class="pacom-row-sub">防重</span>
                            <button type="button" class="lov-switch" role="switch" aria-checked="${H.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${b?"":"disabled"}>
                              <span class="lov-switch-thumb"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section class="lov-section">
                      <h2 class="lov-section-title">定时简报与夜间静默</h2>
                      <div class="lov-settings-card">
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">每日运行与能耗晨间简报</span>
                            <span class="lov-setting-desc">定时汇总昨日能耗偏差、未结工单、舒适度达标与室外天气（首页亦可随时手动查看）</span>
                          </div>
                          <div class="lov-setting-control">
                            <input class="pacom-input" style="width:116px;" type="time" data-digest-time value="${O.dailyDigestTime}" aria-label="每日简报发送时间" />
                            <button type="button" class="lov-switch" role="switch" aria-checked="${O.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报">
                              <span class="lov-switch-thumb"></span>
                            </button>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">夜间静默免打扰（23:00 – 07:00）</span>
                            <span class="lov-setting-desc">夜间静默一般与重要提醒，严重级别告警与网关中断仍自动穿透</span>
                          </div>
                          <div class="lov-setting-control">
                            <button type="button" class="lov-switch" role="switch" aria-checked="${O.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰">
                              <span class="lov-switch-thumb"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">按工作组分流通知规则（Workgroup × 空间 × 通道）</h2>
                        <span class="pacom-row-sub">避免跨专业告警轰炸</span>
                      </div>
                      <div class="lov-table-card">
                        <div class="lov-table-wrap">
                          <table class="lov-table">
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
                              ${P.map(n=>`
                                  <tr>
                                    <td><strong>${n.groupName}</strong></td>
                                    <td>${n.scope}</td>
                                    <td><span class="pacom-badge pacom-badge--neutral">${n.severity}</span></td>
                                    <td><span class="pacom-badge pacom-badge--accent">${n.channels}</span></td>
                                    <td style="text-align:right;">
                                      <button type="button" class="lov-switch" role="switch" aria-checked="${n.enabled}" data-toggle-nr="${n.id}" aria-label="切换 ${n.groupName} 通知规则">
                                        <span class="lov-switch-thumb"></span>
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
    `,t.querySelectorAll("[data-stab]").forEach(n=>{n.addEventListener("click",()=>{l=n.dataset.stab??"calendar",_="",K="",j()})}),t.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{B=!B,_=`法定节假日自动跳过已${B?"开启":"关闭"}。`,j()}),t.querySelector("[data-night-start]")?.addEventListener("change",n=>{E=n.currentTarget.value}),t.querySelector("[data-night-end]")?.addEventListener("change",n=>{f=n.currentTarget.value}),t.querySelector("[data-add-sd-form]")?.addEventListener("submit",n=>{n.preventDefault();const y=new FormData(n.currentTarget);N.push({id:`sd-${Date.now()}`,date:String(y.get("date")??""),label:String(y.get("label")??""),mode:String(y.get("mode")??"保持工作日工况")}),_="已添加特殊例外日期，当日自动覆盖默认节假日排程。",j()}),t.querySelectorAll("[data-del-sd]").forEach(n=>{n.addEventListener("click",()=>{const y=N.findIndex(D=>D.id===n.dataset.delSd);y>=0&&N.splice(y,1),j()})}),t.querySelectorAll("[data-tariff-mode]").forEach(n=>{n.addEventListener("click",()=>{F=n.dataset.tariffMode??"flat",j()})}),t.querySelectorAll("[data-energy-field]").forEach(n=>{n.addEventListener("change",()=>{const y=n.dataset.energyField;y&&(V[y]=n.value)})}),t.querySelector("[data-save-energy]")?.addEventListener("click",()=>{_=F==="flat"?`能碳与气象口径已保存（面积 ${V.billingArea} m² · 综合电价 ¥${V.tariffYuan}/kWh · 因子 ${V.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${V.tariffPeak} / 平 ¥${V.tariffFlat} / 谷 ¥${V.tariffValley}）。`,j()}),t.querySelectorAll("[data-guard-field]").forEach(n=>{n.addEventListener("change",()=>{const y=n.dataset.guardField;y&&(T[y]=n.value)})}),t.querySelector("[data-save-guard]")?.addEventListener("click",()=>{_=`控制安全边界已保存（温区 ${T.minTemp}–${T.maxTemp}°C · 超时 ${T.readbackTimeoutSec}s）。`,j()}),t.querySelectorAll("[data-auto-wo]").forEach(n=>{n.addEventListener("change",()=>{const y=n.dataset.autoWo;y&&(H[y]=n.value),_="自动转工单配置已更新。",j()})}),t.querySelectorAll("[data-toggle-autowo]").forEach(n=>{n.addEventListener("click",()=>{const y=n.dataset.toggleAutowo;y&&(H[y]=!H[y],_="自动转工单保护策略已更新。",j())})}),t.querySelector("[data-digest-time]")?.addEventListener("change",n=>{O.dailyDigestTime=n.currentTarget.value,_=`每日晨间简报发送时刻已更新为 ${O.dailyDigestTime}。`,j()}),t.querySelectorAll("[data-notify-key]").forEach(n=>{n.addEventListener("click",()=>{const y=n.dataset.notifyKey;y&&(O[y]=!O[y],_="通知策略偏好已更新。",j())})}),t.querySelectorAll("[data-toggle-nr]").forEach(n=>{n.addEventListener("click",()=>{const y=P.find(D=>D.id===n.dataset.toggleNr);y&&(y.enabled=!y.enabled,_=`工作组「${y.groupName}」的通知分流规则已${y.enabled?"启用":"停用"}。`,j())})}),t.querySelector("[data-cal-start]")?.addEventListener("change",n=>{i=n.currentTarget.value}),t.querySelector("[data-cal-end]")?.addEventListener("change",n=>{g=n.currentTarget.value}),t.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{K="",C=await a.previewCalendarImpact(d.projectId,i,g),j()}),t.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{K="";try{const n=await a.saveWorkCalendar(d.projectId,i,g,o.calendar.version);o={...o,calendar:{...n,nightGuardStart:E,nightGuardEnd:f}},_=`运行日历已保存至 v${n.version}（工作日 ${n.workdayStart}–${n.workdayEnd} · 夜间值守 ${E}–${f}）`,C=[],j()}catch(n){K=n instanceof Error?n.message:String(n),j()}}),t.querySelectorAll("[data-toggle-rule]").forEach(n=>{n.addEventListener("click",async()=>{K="";try{await a.toggleRuntimeRule(n.dataset.toggleRule,n.dataset.ruleNext==="true",Number(n.dataset.ruleVer)),o=await a.getRuntimeSettings(d.projectId),_="策略状态与版本回执已更新。",j()}catch(y){K=y instanceof Error?y.message:String(y),j()}})})}j()}const ze="pacom.web.sidebar.collapsed",St=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Re=[{id:"home",label:"空间总览",iconSvg:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/>'},{id:"analysis",label:"数据分析",iconSvg:'<path d="M4 19h16"/><path d="M7 16v-5"/><path d="M12 16V7"/><path d="M17 16v-8"/>'},{id:"alarms",label:"告警中心",iconSvg:'<path d="M12 4 3 19h18L12 4Z"/><path d="M12 10v4"/><path d="M12 17h.01"/>'},{id:"scenes",label:"智能策略",iconSvg:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3"/>'},{id:"settings",label:"运行设置",iconSvg:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2.5"/><circle cx="15" cy="17" r="2.5"/>'},{id:"deployment",label:"系统部署",iconSvg:'<rect x="3" y="4" width="7" height="6" rx="1.5"/><rect x="14" y="4" width="7" height="6" rx="1.5"/><rect x="8.5" y="14" width="7" height="6" rx="1.5"/><path d="M6.5 10v2h11v-2M12 12v2"/>'}],Me={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"运行设置",deployment:"系统部署",account:"机构与账户"};function Te(){const t=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return t in Me?t:"home"}function de(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function kt(t,a,s,l){t.classList.remove("bare-login");let o=s,i=Te(),g=localStorage.getItem(ze)==="1",E=!1,f=!1,B="",C=!1,N=0,F={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};const V=a.mode==="demo"&&typeof a.switchDemoRole=="function";async function T(){try{const[x,L,w,z,J]=await Promise.all([a.getSpatialTree(),a.getFloorDevices(d.floorId).catch(()=>[]),a.listAlarms(d.floorId).catch(()=>[]),a.listWorkOrders(d.floorId).catch(()=>[]),a.listScenes(d.floorId).catch(()=>[])]);F={devices:L,zones:x.zones,alarms:w,workOrders:z,scenes:J},N=w.filter(e=>e.status==="active").length,b()}catch{}}function H(){return Re.map(x=>`
        ${x.id==="settings"?'<div class="pacom-nav-divider" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${x.id}" aria-current="${i===x.id?"page":"false"}" title="${x.label}">
          <svg class="pacom-nav-icon" viewBox="0 0 24 24" aria-hidden="true">${x.iconSvg}</svg>
          <span class="pacom-nav-label">${x.label}</span>
          ${x.id==="alarms"&&N>0?`<span class="pacom-nav-count" title="待处理告警 ${N} 条">${N}</span>`:""}
        </button>`).join("")}function O(){const x=B.trim().toLowerCase();if(!C||!x)return"";const L=Re.filter(R=>R.label.toLowerCase().includes(x)).slice(0,4),w=F.devices.filter(R=>`${R.name} ${R.id} ${R.category}`.toLowerCase().includes(x)).slice(0,4),z=F.zones.filter(R=>R.name.toLowerCase().includes(x)).slice(0,3),J=F.alarms.filter(R=>`${R.title} ${R.message} ${R.id}`.toLowerCase().includes(x)).slice(0,3),e=F.workOrders.filter(R=>`${R.title} ${R.id}`.toLowerCase().includes(x)).slice(0,3),c=F.scenes.filter(R=>`${R.name} ${R.description}`.toLowerCase().includes(x)).slice(0,3),S=[];return w.length&&S.push('<div class="pacom-search-group">设备（空间总览）</div>'+w.map(R=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(R.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${de(R.name)}</span><span class="pacom-badge ${R.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${R.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),z.length&&S.push('<div class="pacom-search-group">功能区</div>'+z.map(R=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(R.id)}"><span>${de(R.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),J.length&&S.push('<div class="pacom-search-group">告警</div>'+J.map(R=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(R.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${de(R.title)}</span><span class="pacom-badge pacom-badge--warning">${R.status==="active"?"待处理":"已确认"}</span></button>`).join("")),e.length&&S.push('<div class="pacom-search-group">运维工单</div>'+e.map(R=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(R.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${de(R.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),c.length&&S.push('<div class="pacom-search-group">智能策略</div>'+c.map(R=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${de(R.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),L.length&&S.push('<div class="pacom-search-group">工作区</div>'+L.map(R=>`<button type="button" class="pacom-search-hit" data-search-hash="#${R.id}"><span>${de(R.label)}</span><span class="pacom-badge pacom-badge--neutral">菜单</span></button>`).join("")),S.length?`<div class="pacom-search-popover" data-role="search-popover">${S.join("")}</div>`:`<div class="pacom-search-popover" data-role="search-popover"><div class="pacom-nav-empty">未找到与「${de(B)}」匹配的设备、区域、告警或工单</div></div>`}function P(){t.querySelector('[data-role="search-popover"]')?.remove();const x=t.querySelector(".pacom-nav-search-wrap");if(!x)return;const L=O();if(!L)return;const w=document.createElement("div");w.innerHTML=L.trim();const z=w.firstElementChild;z&&(x.appendChild(z),z.querySelectorAll("[data-search-hash]").forEach(J=>{J.addEventListener("click",()=>{const e=J.dataset.searchHash||"#home";C=!1,B="";const c=t.querySelector('[data-role="nav-search"]');c&&(c.value=""),P(),E=!1,window.location.hash===e?(i=Te(),n(!0)):window.location.hash=e})}))}function _(){if(!f)return"";const x=o.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${g?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab.jpg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${de(o.roleLabel)}${V?" · 演示":""}</small>
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
          <span class="pacom-pop-avatar" aria-hidden="true">${de(x)}</span>
          <span class="pacom-pop-text">
            <b>${de(o.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${V?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">演示角色切换（RBAC 权限预览）</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(ce).map(L=>{const w=ce[L],z=L===o.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${z}" data-pop-role="${L}">
                      <span class="pacom-pop-text">
                        <b>${de(w.roleLabel)}</b>
                        <small>${de(w.displayName)}</small>
                      </span>
                      ${z?'<svg class="pacom-pop-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>':""}
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
    `}async function K(x){switch(document.title=`${Me[i]} · PACOM Station`,i){case"home":await ht(x,a,o);return;case"analysis":await lt(x,a);return;case"alarms":await Ge(x,a,o);return;case"scenes":await wt(x,a,o);return;case"settings":await xt(x,a,o);return;case"deployment":await pt(x,a,o);return;case"account":await Ve(x,a,o,L=>{o=L,n(!0)},j);return}}async function j(){f=!1,E=!1,M();try{await a.logout()}finally{window.location.hash="#login",l()}}function b(){const x=t.querySelector('[data-role="nav-list"]');x&&(x.innerHTML=H(),U())}function Z(){t.querySelector('[data-role="org-popover"]')?.remove();const x=t.querySelector('[data-role="org-menu-btn"]');if(x&&x.setAttribute("aria-expanded",String(f)),!f)return;const L=document.createElement("div");L.innerHTML=_().trim();const w=L.firstElementChild;w&&(t.appendChild(w),q())}function U(){t.querySelectorAll("[data-route]").forEach(x=>{x.addEventListener("click",()=>{const L=x.dataset.route;L===i&&!E||(i=L,E=!1,f=!1,window.location.hash=`#${i}`,n(!0))})})}function q(){t.querySelectorAll('[data-pop-act="go-account"]').forEach(x=>{x.addEventListener("click",()=>{f=!1,E=!1,i="account",window.location.hash="#account",n(!0)})}),t.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{j()}),t.querySelectorAll("[data-pop-role]").forEach(x=>{x.addEventListener("click",async()=>{if(!a.switchDemoRole)return;const L=x.dataset.popRole;f=!1,E=!1,o=await a.switchDemoRole(L),await n(!0)})})}async function n(x){const L=t.querySelector('[data-role="main-stage"]');if(!x&&L){const J=t.querySelector(".pacom-nav-rail");J&&(J.classList.toggle("is-collapsed",g),J.classList.toggle("is-mobile-open",E));const e=t.querySelector('[data-role="mobile-scrim"]');e&&e.classList.toggle("is-open",E),Z();return}t.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
          <h1 class="pacom-mobile-title">${Me[i]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${de(o.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${E?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${g?"is-collapsed":""} ${E?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${St}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${g?"展开侧栏":"收起侧栏"}" aria-label="${g?"展开侧栏":"收起侧栏"}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                ${g?'<path d="m9 6 6 6-6 6"/>':'<path d="m15 6-6 6 6 6"/>'}
              </svg>
            </button>
          </div>

          <div class="pacom-nav-search-wrap">
            <svg class="pacom-nav-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>
            </svg>
            <input class="pacom-nav-search" name="navSearch" data-role="nav-search" type="search" placeholder="搜索设备、空间、告警…" value="${de(B)}" aria-label="全局搜索设备、空间、告警或工单" autocomplete="off" />
          </div>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${H()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${i==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${f}" title="广州国家实验室 · ${de(o.displayName)}">
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
    `,t.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{g=!g,f=!1,localStorage.setItem(ze,g?"1":"0");const J=t.querySelector(".pacom-nav-rail"),e=t.querySelector('[data-role="toggle-sidebar"]');J&&J.classList.toggle("is-collapsed",g),e&&(e.title=g?"展开侧栏":"收起侧栏",e.setAttribute("aria-label",e.title),e.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${g?'<path d="m9 6 6 6-6 6"/>':'<path d="m15 6-6 6 6 6"/>'}</svg>`),Z()}),t.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{E=!E,n(!1)}),t.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{E=!1,f=!1,n(!1)});const w=t.querySelector('[data-role="nav-search"]');w?.addEventListener("focus",()=>{C=!0,P()}),w?.addEventListener("input",J=>{B=J.currentTarget.value,C=!0,P()}),t.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",J=>{J.stopPropagation(),f=!f,Z()}),U(),Z(),P();const z=t.querySelector('[data-role="main-stage"]');z&&await K(z)}const y=x=>{const L=x.target;C&&!L?.closest(".pacom-nav-search-wrap")&&(C=!1,P()),f&&(L?.closest('[data-role="org-popover"]')||L?.closest('[data-role="org-menu-btn"]')||(f=!1,Z()))},D=x=>{x.key==="Escape"&&(C?(C=!1,P()):f?(f=!1,Z()):E&&(E=!1,n(!1)))},m=()=>{i=Te(),f=!1,E=!1,n(!0),T()};function M(){document.removeEventListener("click",y),document.removeEventListener("keydown",D),window.removeEventListener("hashchange",m)}document.addEventListener("click",y),document.addEventListener("keydown",D),window.addEventListener("hashchange",m),await n(!0),T()}const It=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Et='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',Lt='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',$e='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>',Be={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},At={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function Ct(t){const a=t.replace(/\D/g,"");return a.length===11?`${a.slice(0,3)} •••• ${a.slice(7)}`:t}function ie(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Pe(t,a,s){t.classList.add("bare-login"),document.title="登录 · PACOM Station";let l=!1,o=!1,i="",g="",E="",f="",B=!1,C={},N="",F=!1,V="",T=0,H=null,O=null,P="privacy",_="",K="",j="";const b=a.mode==="demo"&&typeof a.switchDemoRole=="function";function Z(){H!==null&&(window.clearInterval(H),H=null),t.classList.remove("bare-login")}function U(){T=60,H!==null&&window.clearInterval(H),H=window.setInterval(()=>{T-=1,T<=0&&(T=0,H!==null&&(window.clearInterval(H),H=null));const D=t.querySelector('[data-act="send-sms"]');D&&(D.disabled=T>0,D.textContent=T>0?`${T} 秒后重发`:V?"重新获取":"获取验证码")},1e3)}function q(){if(!O)return"";if(O==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${$e}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${ie(K)}" />
                  </div>
                </div>
                ${j?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${ie(j)}</p>`:""}
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary">发送验证码</button>
            </div>
          </section>
        </div>
      `;if(O==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${$e}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                ${b?"当前为离线演示环境，您可直接通过登录页的「演示角色快速体验」切换 5 类内置角色进入 E7F 工作区。":"正式接入账户服务后，将在此开放自助注册与机构邀请码加入流程。"}
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
              ${b?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">选择演示角色</button>':""}
            </div>
          </section>
        </div>
      `;if(O==="legal"){const D=Be[P],m=["privacy","terms","service"].map(M=>`<button type="button" role="tab" aria-selected="${P===M}" class="au-legal-tab ${P===M?"is-active":""}" data-act="switch-legal" data-tab="${M}">${Be[M].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${$e}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${m}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${D.items.map(M=>`<li>${ie(M)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return O==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${$e}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${_||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:O==="demoRoles"&&b?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择演示角色</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${$e}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(ce).map(D=>{const m=ce[D];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${D}">
                        <div>
                          <b>${ie(m.roleLabel)} · ${ie(m.displayName)}</b>
                          <small>${ie(At[D])}</small>
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
      `:""}function n(){const D=l?`
        <div class="au-field ${C.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ie(E)}" aria-invalid="${C.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${T>0?"disabled":""}>
              ${T>0?`${T} 秒后重发`:V?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${ie(C.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${V?`验证码已发送至 ${ie(Ct(V))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${C.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ie(i)}" aria-invalid="${C.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${ie(C.id??"")}</p>
        </div>
      `,m=l?`
        <div class="au-field ${C.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ie(f)}" aria-invalid="${C.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${ie(C.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${C.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${o?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ie(g)}" aria-invalid="${C.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${o?"隐藏密码":"显示密码"}">
              ${o?Lt:Et}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${ie(C.pwd??"")}</p>
        </div>
      `;t.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${It}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${F?"disabled":""}>
                  ${D}
                  ${m}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${N?"":"hidden"}>${ie(N)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${B?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${F?"disabled":""}>
                    ${F?"正在登录…":"登录"}
                  </button>
                </fieldset>
              </form>
              <div class="au-login-actions">
                <button type="button" class="au-textbtn" data-act="toggle-sms">
                  <span>${l?"使用密码登录":"使用短信验证码登录"}</span>
                </button>
                <div class="au-login-divider" aria-hidden="true"></div>
                <p class="au-noacct">
                  没有账户？<button type="button" class="au-inline" data-act="open-register">注册</button>
                </p>
                ${b?`<div class="au-demo-bar">
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
      ${q()}
    `,y()}function y(){const D=t.querySelector("#au-id"),m=t.querySelector("#au-pwd"),M=t.querySelector("#au-sphone"),x=t.querySelector("#au-scode"),L=t.querySelector('input[name="keep"]');D?.addEventListener("input",()=>{if(i=D.value,C.id||N){delete C.id,N="",D.closest(".au-field")?.classList.remove("bad");const w=t.querySelector("#au-id-err");w&&(w.textContent="");const z=t.querySelector("#au-login-ferr");z&&(z.hidden=!0)}}),m?.addEventListener("input",()=>{if(g=m.value,C.pwd||N){delete C.pwd,N="",m.closest(".au-field")?.classList.remove("bad");const w=t.querySelector("#au-pwd-err");w&&(w.textContent="");const z=t.querySelector("#au-login-ferr");z&&(z.hidden=!0)}}),M?.addEventListener("input",()=>{if(E=M.value,C.sphone||N){delete C.sphone,N="",M.closest(".au-field")?.classList.remove("bad");const w=t.querySelector("#au-sphone-err");w&&(w.textContent="");const z=t.querySelector("#au-login-ferr");z&&(z.hidden=!0)}}),x?.addEventListener("input",()=>{if(f=x.value.replace(/\D/g,"").slice(0,6),x.value=f,C.scode||N){delete C.scode,N="",x.closest(".au-field")?.classList.remove("bad");const w=t.querySelector("#au-scode-err");w&&(w.textContent="");const z=t.querySelector("#au-login-ferr");z&&(z.hidden=!0)}}),L?.addEventListener("change",()=>{B=L.checked}),t.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{o=!o,n(),t.querySelector("#au-pwd")?.focus()}),t.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{l=!l,C={},N="",n(),t.querySelector(l?"#au-sphone":"#au-id")?.focus()}),t.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const w=E.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(w)){C={sphone:"请输入有效的手机号码"},n(),t.querySelector("#au-sphone")?.focus();return}C={},V=w,U(),n(),t.querySelector("#au-scode")?.focus()}),t.querySelector('form[data-form="login"]')?.addEventListener("submit",async w=>{if(w.preventDefault(),!F){if(C={},N="",l?(E.trim()||(C.sphone="请输入手机号码"),/^\d{6}$/.test(f.trim())||(C.scode="请输入 6 位验证码")):(i.trim()||(C.id="请输入电子邮箱或手机号码"),g||(C.pwd="请输入密码")),Object.keys(C).length>0){n();const z=Object.keys(C)[0];t.querySelector(`#au-${z}`)?.focus();return}F=!0,n();try{const z=await a.login({account:(l?E:i).trim(),password:l?f.trim():g});Z(),s(z)}catch(z){F=!1,N=z instanceof Error?z.message:"账户或密码不正确",n()}}}),t.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{K=i.trim(),j="",O="reset",n(),t.querySelector("#au-rs-id")?.focus()}),t.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{O="register",n()}),t.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{O="legal",n()}),t.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{_="",O="contact",n()}),t.querySelectorAll('[data-act="open-demo-roles"]').forEach(w=>{w.addEventListener("click",()=>{O="demoRoles",n()})}),t.querySelectorAll('[data-act="close-modal"]').forEach(w=>{w.addEventListener("click",()=>{O=null,n()})}),t.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",w=>{w.target===w.currentTarget&&(O=null,n())}),t.querySelectorAll('[data-act="switch-legal"]').forEach(w=>{w.addEventListener("click",()=>{const z=w.dataset.tab;z&&(P=z,n())})}),t.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),_="已复制"}catch{_="support@pacom.cn"}n()}),t.querySelector("#au-reset-form")?.addEventListener("submit",w=>{w.preventDefault(),K=t.querySelector("#au-rs-id")?.value.trim()??"",K?b?j="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":j="如账户存在，验证码已发送。":j="请输入电子邮箱或手机号码",n()}),t.querySelectorAll('[data-act="pick-demo-role"]').forEach(w=>{w.addEventListener("click",async()=>{const z=w.dataset.roleId;if(!z||!a.switchDemoRole)return;const J=await a.switchDemoRole(z);Z(),s(J)})})}n()}async function jt(){const t=document.getElementById("app");if(t)try{const a=_e(),s=await a.getSession(),l=async o=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await kt(t,a,o,()=>{Pe(t,a,i=>{l(i)})})};if(!s||window.location.hash==="#login"){Pe(t,a,o=>{l(o)});return}await l(s)}catch(a){t.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(a)}</div></div>`}}jt();
//# sourceMappingURL=index-DsLD8iwQ.js.map
