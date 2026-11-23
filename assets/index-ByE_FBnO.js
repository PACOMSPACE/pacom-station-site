(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const b of i.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&l(b)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const c={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},ie={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[c.projectId,c.project1Id],allowedBuildingIds:[c.buildingId,c.buildingFId],allowedFloorIds:[c.lockedFloor8Id,c.floorId,c.lockedFloor6Id],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[c.projectId],allowedBuildingIds:[c.buildingId,c.buildingFId],allowedFloorIds:[c.lockedFloor8Id,c.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[c.projectId],allowedBuildingIds:[c.buildingId],allowedFloorIds:[c.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[c.projectId],allowedBuildingIds:[c.buildingId],allowedFloorIds:[c.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[c.projectId],allowedBuildingIds:[c.buildingId],allowedFloorIds:[c.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},ye="pacom.web.demo.role";class Be{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){const a=sessionStorage.getItem(ye);a&&ie[a]&&(this.activeSession=structuredClone(ie[a]));const s=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:c.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:s,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:c.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:c.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:c.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:s,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:s,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:s,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:c.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:s,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:c.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:s,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:s,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:s,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:s},{id:"conn-e7f-dali",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:s},{id:"conn-e7f-modbus",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:c.projectId,floorId:c.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:c.projectId,floorId:c.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:c.projectId,floorId:c.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:c.projectId,floorId:c.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:c.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:c.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:c.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:s,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:c.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:c.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:c.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:c.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(ie).map((l,o)=>({userId:l.userId,displayName:l.displayName,email:`${l.role.replaceAll("_",".")}@pacom.local`,role:l.role,roleLabel:l.roleLabel,scopeSummary:l.scope.allowedZoneIds?.length?`E栋 7F（${l.scope.allowedZoneIds.length} 个我的区域）`:`${l.scope.allowedProjectIds.length} 项目 / ${l.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:o===0?s:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(a,s,l,o,i){this.traces.unshift({at:new Date().toISOString(),channel:a,operation:s,endpoint:l,request:i,response:o}),this.traces.length>40&&this.traces.pop()}pushAudit(a,s,l,o){const i=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:i?.displayName??"anonymous",role:i?.role??"member",action:a,target:s,result:l,detail:o})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(a){if(!a.account.trim()||!a.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const s=a.account.includes("admin")?"org_admin":a.account.includes("eng")?"commissioning_engineer":a.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(ie[s]),sessionStorage.setItem(ye,s),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:a.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(ye),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(a){return this.activeSession=structuredClone(ie[a]),sessionStorage.setItem(ye,a),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${a}`,this.activeSession),structuredClone(this.activeSession)}async getSpatialTree(){const a=this.requireSession(),s=[{id:c.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"},{id:c.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"}],l=[{id:c.buildingId,projectId:c.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.png"},{id:c.buildingFId,projectId:c.projectId,name:"F栋",aboveFloors:12,belowFloors:2,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.png"}],o={projects:s.filter(i=>a.scope.allowedProjectIds.includes(i.id)),buildings:l.filter(i=>a.scope.allowedBuildingIds.includes(i.id)),floors:[{id:c.lockedFloor8Id,buildingId:c.buildingId,kind:"above",level:8,name:"8F",plan:null},{id:c.floorId,buildingId:c.buildingId,kind:"above",level:7,name:"7F",areaSqm:1383.1,plan:{floorId:c.floorId,imageUrl:"./media/7F.webp",planVersion:1,updatedAt:"2026-11-22T00:00:00Z"}},{id:c.lockedFloor6Id,buildingId:c.buildingId,kind:"above",level:6,name:"6F",plan:null}],zones:[{id:"zone-e7f-lab-east",floorId:c.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:c.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:c.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:c.floorId,name:"核心走廊与弱电井",category:"corridor"}]};return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:o.projects.length,buildings:o.buildings.length,floors:o.floors.length}),o}async getFloorDevices(a){const s=this.requireSession();if(!s.scope.allowedFloorIds.includes(a)){const o={code:"FORBIDDEN",status:403,message:`当前角色「${s.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${a}/devices`,o),this.pushAudit("floor.read",a,"denied",o.message),new Error(`403 FORBIDDEN: ${o.message}`)}if(a!==c.floorId)return[];let l=structuredClone(this.devices);return s.scope.allowedZoneIds?.length&&(l=l.filter(o=>o.logicalZoneId&&s.scope.allowedZoneIds.includes(o.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${a}/devices`,{count:l.length}),l}async dispatchControlBatch(a){const s=this.requireSession();if(!s.scope.canControlDevices||!s.scope.allowedFloorIds.includes(a.floorId))throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权下发控制指令`);const l=`batch-e7f-${Date.now().toString(36)}`,o={batchId:l,floorId:a.floorId,createdBy:s.userId,createdAt:new Date().toISOString(),receipts:a.targets.map(i=>({deviceId:i.deviceId,command:i.command,targetValue:i.targetValue,status:"queued"}))};return this.batches.set(l,o),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",o,a),this.pushAudit("control.dispatch",l,"success",`下发 ${a.targets.length} 台设备`),o.receipts.forEach((i,b)=>{const I=this.devices.find(y=>y.id===i.deviceId);setTimeout(()=>{i.status="dispatched",i.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:l,deviceId:i.deviceId,status:"dispatched",at:i.dispatchedAt})},280+b*120),setTimeout(()=>{const y=new Date().toISOString();!I||I.connectivity==="offline"?(i.status="timeout",i.errorCode="GATEWAY_READBACK_TIMEOUT",i.errorMessage="设备离线，网关未收到回读确认",i.verifiedAt=y):(i.status="verified_success",i.observedValue=i.targetValue,i.verifiedAt=y,this.applyObservedTelemetry(I,i.command,i.targetValue,y)),this.emit({type:"control.receipt.updated",batchId:l,deviceId:i.deviceId,status:i.status,observedValue:i.observedValue,at:y})},900+b*220)}),structuredClone(o)}applyObservedTelemetry(a,s,l,o){s==="lighting.dimming"&&a.telemetry.dimming?(a.telemetry.dimming={...a.telemetry.dimming,value:l,collectedAt:o,stale:!1},a.telemetry.power&&(a.telemetry.power={...a.telemetry.power,value:Number(l)>0,collectedAt:o,stale:!1})):(s==="lighting.power"||s==="hvac.power")&&a.telemetry.power?a.telemetry.power={...a.telemetry.power,value:l,collectedAt:o,stale:!1}:s==="hvac.setpoint"&&a.telemetry.setpoint&&(a.telemetry.setpoint={...a.telemetry.setpoint,value:l,collectedAt:o,stale:!1}),this.emit({type:"telemetry.updated",floorId:a.floorId,deviceId:a.id,collectedAt:o,values:{[s]:l}})}async getControlBatch(a){this.requireSession();const s=this.batches.get(a);if(!s)throw new Error(`404 NOT_FOUND: 批次 ${a} 不存在`);return structuredClone(s)}async listAlarms(a){return!this.requireSession().scope.allowedFloorIds.includes(a)||a!==c.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(a,s){const l=this.requireSession();if(!l.scope.canManageAlarms){const i=`角色「${l.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",a,"denied",i),new Error(`403 FORBIDDEN: ${i}`)}const o=this.alarms.find(i=>i.id===a);if(!o)throw new Error(`404 NOT_FOUND: 告警 ${a} 不存在`);return o.status="acknowledged",o.acknowledgedAt=new Date().toISOString(),o.acknowledgedBy=l.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${a}/acknowledge`,o,{note:s}),this.pushAudit("alarm.acknowledge",a,"success",s),this.emit({type:"alarm.changed",floorId:o.floorId,alarmId:a,status:"acknowledged",at:o.acknowledgedAt}),structuredClone(o)}async listWorkOrders(a){return!this.requireSession().scope.allowedFloorIds.includes(a)||a!==c.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(a){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建工单`);const l=new Date().toISOString(),o={id:`wo-e7f-${Date.now().toString(36)}`,projectId:c.projectId,buildingId:c.buildingId,floorId:a.floorId,deviceId:a.deviceId??null,alarmId:a.alarmId??null,title:a.title,description:a.description,status:"open",assigneeId:null,createdAt:l,updatedAt:l};if(this.workOrders.unshift(o),a.alarmId){const i=this.alarms.find(b=>b.id===a.alarmId);i&&(i.workOrderId=o.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",o,a),this.pushAudit("work_order.create",o.id,"success",o.title),structuredClone(o)}async updateWorkOrderStatus(a,s){const l=this.requireSession();if(!l.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权流转工单`);const o=this.workOrders.find(i=>i.id===a);if(!o)throw new Error(`404 NOT_FOUND: 工单 ${a} 不存在`);return o.status=s,o.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${a}`,o,{status:s}),this.pushAudit("work_order.update",a,"success",`状态更新为 ${s}`),structuredClone(o)}async updateDevicePlanPoint(a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw this.pushAudit("device.plan_point",a.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权编辑图纸标点`);const l=this.devices.find(o=>o.id===a.deviceId);if(!l)throw new Error(`404 NOT_FOUND: 设备 ${a.deviceId} 不存在`);if(l.version!==a.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${l.version}，请刷新后重试`);return l.planPoint={floorId:a.floorId,planVersion:a.planVersion,x:Number(a.x.toFixed(4)),y:Number(a.y.toFixed(4))},l.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${a.deviceId}/plan-point`,l,a),this.pushAudit("device.plan_point",a.deviceId,"success",`坐标更新 (${l.planPoint.x}, ${l.planPoint.y})`),structuredClone(l)}async updateDeviceHardwareBinding(a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改硬件绑定`);const l=this.devices.find(i=>i.id===a.deviceId);if(!l)throw new Error(`404 NOT_FOUND: 设备 ${a.deviceId} 不存在`);if(l.version!==a.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${l.version}）`);const o=new Date().toISOString();return l.physicalInstalled=a.physicalInstalled,l.physicalVerifiedAt=a.physicalInstalled?o:null,l.hardwareBinding={gatewayId:a.gatewayId,protocol:a.protocol,networkAddress:a.networkAddress,portOrChannel:a.portOrChannel,boundAt:o,boundBy:s.displayName},l.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${a.deviceId}/hardware-binding`,l,a),this.pushAudit("device.hardware_binding",a.deviceId,"success",`${a.protocol} ${a.networkAddress}`),structuredClone(l)}async listConnections(a){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(a){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(a,s){const l=this.requireSession();if(!l.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权冻结交付批次`);const o=this.devices.filter(b=>b.physicalInstalled&&b.hardwareBinding).length,i={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:c.projectId,floorId:a,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:o,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:l.displayName,note:s||"例行交付基线冻结"};return this.deliveryBatches.unshift(i),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${a}/deliveries/freeze`,i,{note:s}),this.pushAudit("delivery.freeze",i.id,"success",`${o}/${this.devices.length} 已现场核验`),structuredClone(i)}async getAnalysisReport(a,s,l){this.requireSession();const o=s==="today"?1:s==="7d"?7:30,b={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*o)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*o).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(B=>B.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*o).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*o).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*o).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[a],I=s==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],y={category:a,range:s,scopeId:l,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:b.kpis,unit:b.unit,series:b.base.map((B,A)=>({label:I[A],value:Math.round(B*(a==="energy"||a==="carbon"?o/2+.5:1)),baseline:Math.round(B*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:b.base[3],unit:b.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:b.base[4],unit:b.unit,status:a==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:b.base[1],unit:b.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${a}?range=${s}&scopeId=${l}`,{kpis:y.kpis.length}),y}async listScenes(a){return this.requireSession(),structuredClone(this.scenes)}async createScene(a){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const l={id:`scn-e7f-${Date.now().toString(36)}`,projectId:a.projectId,floorId:a.floorId,name:a.name,description:a.description,enabled:!0,scheduleSummary:"手动触发",actions:a.actions,lastExecutedAt:null};return this.scenes.unshift(l),this.record("REST","createScene","POST /api/v1/scenes",l,a),this.pushAudit("scene.create",l.id,"success",l.name),structuredClone(l)}async executeScene(a){const s=this.scenes.find(o=>o.id===a);if(!s)throw new Error(`404 NOT_FOUND: 场景 ${a} 不存在`);const l=await this.dispatchControlBatch({floorId:s.floorId,idempotencyKey:`scene-${a}-${Date.now()}`,targets:s.actions,reason:`触发场景：${s.name}`});return s.lastExecutedAt=new Date().toISOString(),s.lastBatchId=l.batchId,l}async getRuntimeSettings(a){return this.requireSession(),structuredClone({projectId:c.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(a,s,l){this.requireSession();const o=l>=this.calendar.nightGuardStart?`下班时间 ${l} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,i=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${s} - ${l}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${s} (-30m) ~ ${l} (+30m)`,conflictWarning:o},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:o}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",i,{workdayStart:s,workdayEnd:l}),i}async saveWorkCalendar(a,s,l,o){const i=this.requireSession();if(!i.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权修改运行日历`);if(this.calendar.version!==o)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(s>=l)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:s,workdayEnd:l,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:s,workdayEnd:l,expectedVersion:o}),this.pushAudit("settings.calendar",c.projectId,"success",`${s}-${l}`),structuredClone(this.calendar)}async toggleRuntimeRule(a,s,l){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权启停运行规则`);const i=this.rules.find(b=>b.id===a);if(!i)throw new Error(`404 NOT_FOUND: 规则 ${a} 不存在`);if(i.version!==l)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${i.version}）`);return i.enabled=s,i.version+=1,i.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${a}`,i,{enabled:s,expectedVersion:l}),this.pushAudit("settings.rule_toggle",a,"success",s?"启用":"停用"),structuredClone(i)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(a,s){const l=this.requireSession();if(l.role!=="org_admin"&&l.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const o=ie[s],i={userId:`inv-${Date.now().toString(36)}`,displayName:a.split("@")[0]||a,email:a,role:s,roleLabel:o.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(i),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",i,{email:a,role:s}),this.pushAudit("org.invite",a,"success",o.roleLabel),structuredClone(i)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(a,s){return a!==c.floorId?()=>{}:(this.listeners.add(s),()=>{this.listeners.delete(s)})}emit(a){this.record("WS",a.type,`WS /ws/v1/stream?floorId=${c.floorId}`,a),this.listeners.forEach(s=>s(a))}}function Pe(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new Be}const Te=[{id:"wg-hvac",name:"暖通运维组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋 5F–7F（HVAC、FCU 与 VAV 系统）",memberCount:3,membersSummary:"陈值班、林工、周工",notifyChannel:"站内 + 短信"},{id:"wg-elec",name:"强电照明组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋全楼照明与配电回路",memberCount:2,membersSummary:"黄工、刘工",notifyChannel:"站内 + 邮件"},{id:"wg-property",name:"园区物业值班组",defaultRoleLabel:"只读访客 / 值班巡检",locationScope:"广实2号园 / 全园区公共空间与值班台",memberCount:4,membersSummary:"张班长、王巡检、赵巡检、吴值守",notifyChannel:"站内 + 每日晨报"}];async function Ne(t,a,s,l,o){let i="profile",b="directory",I=await a.listOrgMembers(),y=await a.listAuditLogs(),B="",A="all",P="all",M="all",_=!1,q=!1,V=s.displayName,z=s.role==="org_admin"||s.role==="project_admin"?"设施运维总监":s.role==="commissioning_engineer"?"楼宇自控部署工程师":s.role==="facility_operator"?"暖通运行值班工程师":"园区巡检成员",U="138-0013-8072",N="",K="";async function L(){[I,y]=await Promise.all([a.listOrgMembers(),a.listAuditLogs()]),m()}function m(){const X=a.mode==="demo"&&typeof a.switchDemoRole=="function",O=B.trim().toLowerCase(),F=I.filter(p=>A!=="all"&&p.role!==A?!1:O?`${p.displayName} ${p.email} ${p.roleLabel} ${p.scopeSummary}`.toLowerCase().includes(O):!0),n=y.filter(p=>{if(P==="success"&&p.result!=="success"||P==="denied"&&p.result==="success")return!1;if(M!=="all"){const D=`${p.action} ${p.target}`.toLowerCase();if(M==="control"&&!D.includes("control")&&!D.includes("scene")&&!D.includes("控制")||M==="alarm"&&!D.includes("alarm")&&!D.includes("work")&&!D.includes("告警")||M==="deploy"&&!D.includes("deploy")&&!D.includes("plan")&&!D.includes("hardware")&&!D.includes("部署"))return!1}return!0});t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">机构与账户</h1>
              <div class="pacom-tabs" role="tablist" aria-label="机构与账户视图">
                <button class="pacom-tab" role="tab" aria-selected="${i==="profile"}" data-atab="profile">我的账户与权限</button>
                <button class="pacom-tab" role="tab" aria-selected="${i==="members"}" data-atab="members">成员与角色（${I.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${i==="audit"}" data-atab="audit">操作审计日志（${y.length}）</button>
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
            ${N?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${N}</span></div>`:""}
            ${K?`<div class="pacom-alert-banner">${K}</div>`:""}
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
                        <input class="pacom-input" style="width:150px;" name="displayName" value="${V}" aria-label="显示姓名" required />
                        <input class="pacom-input" style="width:180px;" name="jobTitle" value="${z}" aria-label="岗位职务" />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">告警接收手机号（SMS）</span>
                        <span class="lov-setting-desc">用于接收 P1 严重告警短信推送与工单升级提醒</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:180px;" name="phone" value="${U}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
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

                ${X?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">多角色权限预览切换</h2>
                        <span class="pacom-badge pacom-badge--neutral">仅 Demo 预览可用</span>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(ie).map(p=>{const D=ie[p];return`
                              <button class="pacom-role-card ${p===s.role?"is-active":""}" data-switch-role="${p}">
                                <strong style="font-weight:500;">${D.roleLabel}</strong>
                                <span class="pacom-row-sub">${D.displayName}</span>
                                <span class="pacom-row-sub">授权楼层 ${D.scope.allowedFloorIds.length} 层 · 部署编辑：${D.scope.canEditDeployment?"是":"否"}</span>
                              </button>`}).join("")}
                      </div>
                    </section>`:""}

                <section class="lov-section">
                  <h2 class="lov-section-title">会话 RBAC 联调契约</h2>
                  <div class="lov-snippet-card">
                    <div class="lov-snippet-head">
                      <span class="pacom-row-sub">服务端下发的当前会话权限对象（供前后端核对）</span>
                      <button class="pacom-btn" data-copy-session="1">${q?"已复制":"复制 JSON"}</button>
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
                </section>`:i==="members"?`
                  ${_?`
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
                                ${Object.keys(ie).map(p=>`<option value="${p}">${ie[p].roleLabel}</option>`).join("")}
                              </select>
                              <button class="pacom-btn pacom-btn--primary" type="submit">发送邀请</button>
                            </div>
                          </div>
                        </form>
                      </section>`:""}

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                        <h2 class="lov-section-title">${b==="directory"?"机构成员目录":"工作组与空间授权（Groups & Scope）"}</h2>
                        <div class="pacom-tabs" role="tablist" aria-label="成员与工作组切换">
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${b==="directory"}" data-msub="directory">成员目录（${I.length}）</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${b==="groups"}" data-msub="groups">工作组（${Te.length}）</button>
                        </div>
                      </div>
                      <span class="pacom-row-sub">${b==="directory"?`当前显示 ${F.length} 人`:"按空间边界与值班组统一分派告警与工单"}</span>
                    </div>
                    ${b==="directory"?`
                        <div class="lov-table-card">
                          <div class="lov-table-toolbar">
                            <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                              <input class="pacom-input" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${B}" />
                              <select class="pacom-select" data-role-filter>
                                <option value="all" ${A==="all"?"selected":""}>全部角色</option>
                                ${Object.keys(ie).map(p=>`<option value="${p}" ${A===p?"selected":""}>${ie[p].roleLabel}</option>`).join("")}
                              </select>
                            </div>
                            <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                              ${_?"收起邀请":"+ 邀请成员"}
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
                                ${F.map(p=>`
                                    <tr>
                                      <td>
                                        <div style="display:flex; align-items:center; gap:10px;">
                                          <span class="pacom-pop-avatar">${p.displayName.slice(0,1)}</span>
                                          <div>
                                            <div style="font-weight:500;">${p.displayName}</div>
                                            <div class="pacom-row-sub">${p.email}</div>
                                          </div>
                                        </div>
                                      </td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${p.roleLabel}</span></td>
                                      <td><span class="pacom-row-sub">${p.scopeSummary}</span></td>
                                      <td>
                                        <span class="pacom-badge ${p.status==="active"?"pacom-badge--online":"pacom-badge--accent"}">
                                          ${p.status==="active"?"正常":p.status}
                                        </span>
                                      </td>
                                    </tr>`).join("")}
                              </tbody>
                            </table>
                          </div>
                        </div>`:`
                        <div class="lov-table-card">
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
                                ${Te.map(p=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${p.name}</div>
                                      <div class="pacom-row-sub">${p.membersSummary}</div>
                                    </td>
                                    <td><span class="pacom-badge pacom-badge--neutral">${p.defaultRoleLabel}</span></td>
                                    <td><span class="pacom-row-sub">${p.locationScope}</span></td>
                                    <td><strong>${p.memberCount}</strong> 人</td>
                                    <td><span class="pacom-badge pacom-badge--accent">${p.notifyChannel}</span></td>
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
                          <option value="all" ${M==="all"?"selected":""}>全部操作类型</option>
                          <option value="control" ${M==="control"?"selected":""}>设备控制与场景</option>
                          <option value="alarm" ${M==="alarm"?"selected":""}>告警与工单处置</option>
                          <option value="deploy" ${M==="deploy"?"selected":""}>系统部署与点位</option>
                        </select>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${P==="all"}" data-audit-filter="all">全部（${y.length}）</button>
                          <button class="pacom-tab" aria-selected="${P==="success"}" data-audit-filter="success">成功</button>
                          <button class="pacom-tab" aria-selected="${P==="denied"}" data-audit-filter="denied">已拦截</button>
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
                            ${n.map(p=>`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${p.action}</div>
                                    ${p.detail?`<div class="pacom-row-sub">${p.detail}</div>`:""}
                                  </td>
                                  <td><code style="font-size:12px;">${p.target}</code></td>
                                  <td>${p.actor}</td>
                                  <td><span class="pacom-row-sub">${p.at.slice(0,19).replace("T"," ")}</span></td>
                                  <td>
                                    <span class="pacom-badge ${p.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                                      ${p.result==="success"?"成功":p.result}
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
    `,t.querySelectorAll("[data-atab]").forEach(p=>{p.addEventListener("click",()=>{i=p.dataset.atab,N="",K="",m()})}),t.querySelectorAll("[data-msub]").forEach(p=>{p.addEventListener("click",()=>{b=p.dataset.msub??"directory",m()})}),t.querySelector('[data-role="profile-form"]')?.addEventListener("submit",p=>{p.preventDefault();const D=new FormData(p.currentTarget);V=String(D.get("displayName")??"").trim()||s.displayName,z=String(D.get("jobTitle")??"").trim()||z,U=String(D.get("phone")??"").trim()||U,N=`已更新个人资料：${V}（${z}）· 告警短信接收号 ${U}。`,m()}),t.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await a.logout(),window.location.hash="#login",o()}),t.querySelector("[data-copy-session]")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(s,null,2)),q=!0,m(),window.setTimeout(()=>{q=!1,m()},1600)}catch{}}),t.querySelectorAll("[data-switch-role]").forEach(p=>{p.addEventListener("click",async()=>{if(!a.switchDemoRole)return;const D=await a.switchDemoRole(p.dataset.switchRole);l(D)})}),t.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{_=!_,m()}),t.querySelector("[data-member-search]")?.addEventListener("input",p=>{const D=p.currentTarget,H=D.selectionStart??D.value.length;B=D.value,m();const T=t.querySelector("[data-member-search]");T&&(T.focus(),T.setSelectionRange(H,H))}),t.querySelector("[data-role-filter]")?.addEventListener("change",p=>{A=p.currentTarget.value,m()}),t.querySelectorAll("[data-audit-filter]").forEach(p=>{p.addEventListener("click",()=>{P=p.dataset.auditFilter??"all",m()})}),t.querySelector("[data-audit-cat]")?.addEventListener("change",p=>{M=p.currentTarget.value??"all",m()}),t.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async p=>{p.preventDefault(),K="";const D=new FormData(p.currentTarget);try{await a.inviteOrgMember(String(D.get("email")??""),String(D.get("role"))),_=!1,await L()}catch(H){K=H instanceof Error?H.message:String(H),m()}})}m()}const he={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},_e={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},Ve={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function Ue(t){const a=`${t.title} ${t.message}`.toLowerCase();return a.includes("离线")||a.includes("modbus")||a.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":a.includes("co₂")||a.includes("co2")||a.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function We(t){return t.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:t.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}async function He(t,a,s){const l=new URLSearchParams(window.location.hash.split("?")[1]??""),o=l.get("alarm"),i=l.get("wo");let b=[],I=[],y=[],B=i?"workorders":"alarms",A="all",P="all",M="all",_=!1,q="",V=o,z=i,U=null,N=null,K="resolved";const L=new Set,m=new Map,X=new Map,O=new Map,F=new Map;let n="",C="";function p(S){const R=F.get(S.id);if(R)return R;const v={estCost:"¥ 450",actualCost:S.status==="closed"?"¥ 380":"--",cmmsNo:`WO-2026-${S.id.slice(-4).toUpperCase()}`,assigneeGroup:"暖通运维组",tasks:[{id:`${S.id}-t1`,label:"核查设备供电与现场指示灯状态",done:S.status!=="open"},{id:`${S.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:S.status==="resolved"||S.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:S.createdAt?S.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${`WO-2026-${S.id.slice(-4).toUpperCase()}`}）`}]};return F.set(S.id,v),v}async function D(){[b,I,y]=await Promise.all([a.listAlarms(c.floorId),a.listWorkOrders(c.floorId),a.getFloorDevices(c.floorId).catch(()=>[])]),I.forEach(S=>p(S)),j()}function H(S){if(!S)return{name:"楼层通用",zone:"E7F",dev:null};const R=y.find(v=>v.id===S)??null;return R?{name:R.name,zone:(R.logicalZoneId?Ve[R.logicalZoneId]:void 0)??"E7F",dev:R}:{name:S,zone:"E7F",dev:null}}function T(S){const R=H(S.deviceId).dev;R&&R.connectivity==="offline"?O.set(S.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${R.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):O.set(S.id,{verdict:"pass",summary:`自检通过（PASS）：「${R?.name??S.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况 ✓","2. 下发序列（Sequence）：试探指令回读响应 18 ms ✓","3. 自动复位（Restore）：已恢复原自动策略设定值 ✓"]}),V=S.id,j()}function j(){const S=b.filter(g=>g.status==="active"&&!m.has(g.id)),R=I.filter(g=>!p(g).cancelled&&(g.status==="open"||g.status==="assigned"||g.status==="in_progress")),v=b.filter(g=>g.status!=="active").length+X.size,e=0,u=m.size,k=q.trim().toLowerCase(),Z=b.filter(g=>{const f=m.has(g.id);if(A==="snoozed"){if(!f)return!1}else if(A==="active"){if(g.status!=="active"||f)return!1}else if(A==="acknowledged"){if(g.status!=="acknowledged")return!1}else if(f)return!1;if(M!=="all"&&g.severity!==M)return!1;if(!k)return!0;const W=H(g.deviceId);return`${g.title} ${g.message} ${W.name} ${W.zone} ${g.deviceId}`.toLowerCase().includes(k)}),oe=new Map;for(const g of Z){const f=`${g.title} ${g.message}`.toLowerCase(),W=f.includes("离线")||f.includes("modbus")||f.includes("通信"),te=_?W?"root-gateway-modbus":g.deviceId:g.id,se=W?"根因：E7F 主控网关通信链路":`根因：${H(g.deviceId).name}`,ee=oe.get(te)??{rootLabel:se,items:[]};ee.items.push(g),oe.set(te,ee)}const ge=Array.from(oe.values()),be=I.filter(g=>{const f=p(g);if(P==="cancelled"){if(!f.cancelled)return!1}else if(f.cancelled||P==="open"&&(g.status==="resolved"||g.status==="closed")||P==="resolved"&&g.status!=="resolved"||P==="closed"&&g.status!=="closed")return!1;if(!k)return!0;const W=H(g.deviceId);return`${g.title} ${g.description} ${g.id} ${f.cmmsNo} ${W.name}`.toLowerCase().includes(k)});t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">告警中心</h1>
              <div class="pacom-tabs" role="tablist" aria-label="告警中心视图">
                <button class="pacom-tab" role="tab" aria-selected="${B==="alarms"}" data-main-tab="alarms">
                  实时告警（${b.length-u}）
                </button>
                <button class="pacom-tab" role="tab" aria-selected="${B==="workorders"}" data-main-tab="workorders">
                  运维工单（${I.length}）
                </button>
              </div>
            </div>

            <div class="pacom-header-meta">
              ${B==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="lov-switch" role="switch" aria-checked="${_}" data-toggle-group="1" aria-label="按拓扑根因归并">
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
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${B==="alarms"&&A==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">待处理告警</span>
              <div class="lov-kpi-value">${S.length}<span class="lov-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="lov-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${B==="workorders"&&P==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">处理中工单</span>
              <div class="lov-kpi-value">${R.length}<span class="lov-kpi-unit">单</span></div>
              <span class="lov-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${B==="alarms"&&A==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">已闭环生效</span>
              <div class="lov-kpi-value">${v}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="lov-kpi-cell">
              <span class="lov-kpi-label">关单复发待查</span>
              <div class="lov-kpi-value" style="color:var(--pacom-status-online);">${e}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${n?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${n}</span></div>`:""}
          ${C?`<div class="pacom-alert-banner">${C}</div>`:""}

          ${B==="alarms"?`
              <section class="lov-table-card">
                <div class="lov-table-toolbar">
                  <div class="lov-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${q}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${M==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${M==="critical"?"selected":""}>严重</option>
                      <option value="major" ${M==="major"?"selected":""}>重要</option>
                      <option value="minor" ${M==="minor"?"selected":""}>一般</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${A==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${A==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${A==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${A==="snoozed"}" data-status-pill="snoozed">已忽略（${u}）</button>
                    </div>
                  </div>
                  <div class="lov-table-toolbar-group">
                    ${L.size>0&&s.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${L.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${ge.length} 项</span>
                  </div>
                </div>
                ${ge.length===0?'<div class="lov-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${ge.map(g=>{const f=g.items[0],W=_e[f.severity]??{label:f.severity,cls:"pacom-badge--neutral"},te=H(f.deviceId),se=We(f),ee=V===f.id,pe=m.get(f.id),d=!!pe,E=L.has(f.id),r=O.get(f.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" data-check-alarm="${f.id}" ${E?"checked":""} ${f.status!=="active"||d?"disabled":""} aria-label="选择 ${f.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${W.cls}">${W.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${f.title}</span>
                                      ${_?`<span class="pacom-badge pacom-badge--accent">${g.rootLabel}${g.items.length>1?` · 影响 ${g.items.length} 项`:""}</span>`:""}
                                      ${r?`<span class="pacom-badge ${r.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${r.verdict.toUpperCase()}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${f.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${te.name}</div>
                                    <div class="pacom-row-sub">${te.zone}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${se.duration}</div>
                                    <div class="pacom-row-sub" style="color:${se.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${se.trend}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${d?"pacom-badge--neutral":f.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${d?`忽略 ${pe?.duration}`:f.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${d?`<button class="pacom-btn" data-unsnooze="${f.id}">恢复监控</button>`:`
                                            ${f.status==="active"?`<button class="pacom-btn" data-mark-actioned="${f.id}" ${s.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${f.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${f.id}" ${s.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${f.id}">${ee?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${ee?`
                                    <tr class="lov-table-detail-row">
                                      <td colspan="7">
                                        <div style="display:flex; flex-direction:column; gap:12px;">
                                          <div style="font-size:13px; color:var(--pacom-text-body);">
                                            <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${Ue(f)}
                                          </div>
                                          ${pe?`<div class="pacom-info-banner">忽略周期：${pe.duration} · 原因备注：${pe.reason}</div>`:""}
                                          ${r?`
                                              <div class="lov-banner ${r.verdict==="pass"?"lov-banner--ok":"lov-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                <span class="lov-banner-title">${r.summary}</span>
                                                <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                  ${r.steps.map(h=>`<span>${h}</span>`).join("")}
                                                </div>
                                              </div>`:""}
                                          ${U===f.id?`
                                              <form data-snooze-form="${f.id}" style="display:flex; gap:8px; align-items:center; flex-wrap:wrap; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                                <select class="pacom-select" name="duration" style="height:30px;">
                                                  <option value="24h">忽略 24 小时</option>
                                                  <option value="3d">忽略 3 天</option>
                                                  <option value="7d">忽略 7 天</option>
                                                </select>
                                                <input class="pacom-input" name="reason" style="height:30px; min-width:220px;" placeholder="请填写忽略原因（供交接班查阅）" required />
                                                <button class="pacom-btn pacom-btn--primary" type="submit" style="height:30px;">确认忽略</button>
                                                <button class="pacom-btn pacom-btn--ghost" type="button" data-cancel-snooze="1" style="height:30px;">取消</button>
                                              </form>`:""}
                                          <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                                            <div class="pacom-row-sub">
                                              告警编号 <code>${f.id}</code> · 设备编号 <code>${f.deviceId}</code> · 关联工单 ${f.workOrderId??"无"}
                                            </div>
                                            <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
                                              <button class="pacom-btn" data-run-ftt="${f.id}">运行单机自检（FTT）</button>
                                              ${!d&&f.status==="active"?`<button class="pacom-btn" data-open-snooze="${f.id}">限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${f.deviceId}">查看时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${f.deviceId}">定位到空间总览 →</button>
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
                    <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${q}" aria-label="搜索工单" />
                    <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                      <button class="pacom-tab" aria-selected="${P==="all"}" data-wo-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${P==="open"}" data-wo-pill="open">进行中</button>
                      <button class="pacom-tab" aria-selected="${P==="resolved"}" data-wo-pill="resolved">已解决</button>
                      <button class="pacom-tab" aria-selected="${P==="closed"}" data-wo-pill="closed">已关闭</button>
                      <button class="pacom-tab" aria-selected="${P==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                    </div>
                  </div>
                  <span class="pacom-row-sub">共 ${be.length} 条工单</span>
                </div>
                ${be.length===0?'<div class="lov-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                          ${be.map(g=>{const f=H(g.deviceId),W=p(g),te=z===g.id,se=!!(W.cancelled||g.status==="closed");return`
                                <tr>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                      <span>${g.title}</span>
                                      ${W.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                    </div>
                                    <div class="pacom-row-sub">${g.description} · <code>${g.id}</code></div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${f.name}</div>
                                    <div class="pacom-row-sub">${f.zone}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;"><code>${W.cmmsNo}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                    <div class="pacom-row-sub">${W.assigneeGroup} · 预估 ${W.estCost}</div>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      <select class="pacom-select" data-wo-status="${g.id}" aria-label="更新工单状态" ${se?"disabled":""}>
                                        ${["open","assigned","in_progress","resolved","closed"].map(ee=>`<option value="${ee}" ${g.status===ee?"selected":""}>${he[ee]}</option>`).join("")}
                                        <option value="cancelled" ${W.cancelled?"selected":""}>已取消</option>
                                      </select>
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-wo="${g.id}">${te?"收起":"详情"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${N===g.id?`
                                    <tr class="lov-table-detail-row">
                                      <td colspan="4">
                                        <form data-close-wo-form="${g.id}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                          <strong style="font-size:13px; font-weight:500;">流转至「${he[K]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${W.cause??""}" required />
                                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${W.solution??""}" required />
                                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${W.actualCost==="--"?"":W.actualCost}" />
                                          </div>
                                          <div style="display:flex; justify-content:flex-end; gap:8px;">
                                            <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                                            <button class="pacom-btn pacom-btn--primary" type="submit">保存并更新状态</button>
                                          </div>
                                        </form>
                                      </td>
                                    </tr>`:""}
                                ${te?`
                                    <tr class="lov-table-detail-row">
                                      <td colspan="4">
                                        <div class="lov-grid-2">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <strong style="font-size:13px; font-weight:500;">现场检查任务清单</strong>
                                            ${W.tasks.map(ee=>`
                                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:6px 10px; border-radius:8px; background:var(--pacom-surface-card);">
                                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                                    <input type="checkbox" data-wo-task="${g.id}" data-task-id="${ee.id}" ${ee.done?"checked":""} ${se?"disabled":""} />
                                                    <span>${ee.label}</span>
                                                  </span>
                                                  ${ee.unit?`<span class="pacom-row-sub">实测：${ee.reading??"--"} ${ee.unit}</span>`:""}
                                                </label>`).join("")}
                                            <strong style="font-size:13px; font-weight:500; margin-top:4px;">全生命周期操作历史</strong>
                                            <div style="display:flex; flex-direction:column; gap:4px; font-size:12px; color:var(--pacom-text-secondary);">
                                              ${W.history.map(ee=>`<span>• ${ee.at} — ${ee.text}</span>`).join("")}
                                            </div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card);">
                                            <strong style="font-size:13px; font-weight:500;">工单摘要与费用核算</strong>
                                            <div class="pacom-kv-grid">
                                              <span class="pacom-kv-label">CMMS 同步</span><span><code>${W.cmmsNo}</code> · 已同步</span>
                                              <span class="pacom-kv-label">处理组</span><span>${W.assigneeGroup}</span>
                                              <span class="pacom-kv-label">费用核算</span><span>预估 ${W.estCost} / 实际 ${W.actualCost}</span>
                                              <span class="pacom-kv-label">故障根因</span><span>${W.cause??"待完单填写"}</span>
                                              <span class="pacom-kv-label">处置方案</span><span>${W.solution??"待完单填写"}</span>
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>`:""}`}).join("")}
                        </tbody>
                      </table>
                    </div>`}
              </section>`}
        </div>
      </div>
    `,t.querySelectorAll("[data-main-tab]").forEach(g=>{g.addEventListener("click",()=>{B=g.dataset.mainTab??"alarms",n="",j()})}),t.querySelectorAll("[data-kpi-filter]").forEach(g=>{g.addEventListener("click",()=>{const f=g.dataset.kpiFilter;n="",f==="workorders"?(B="workorders",P=P==="open"?"all":"open"):(f==="active"||f==="acknowledged")&&(B="alarms",A=A===f?"all":f),j()})}),t.querySelectorAll("[data-status-pill]").forEach(g=>{g.addEventListener("click",()=>{A=g.dataset.statusPill??"all",j()})}),t.querySelectorAll("[data-wo-pill]").forEach(g=>{g.addEventListener("click",()=>{P=g.dataset.woPill??"all",j()})}),t.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{n="",D()}),t.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{_=!_,j()}),t.querySelector("[data-severity-filter]")?.addEventListener("change",g=>{M=g.currentTarget.value,j()}),t.querySelector("[data-alarm-search]")?.addEventListener("input",g=>{const f=g.currentTarget,W=f.selectionStart??f.value.length;q=f.value,j();const te=t.querySelector("[data-alarm-search]");te&&(te.focus(),te.setSelectionRange(W,W))}),t.querySelectorAll("[data-check-alarm]").forEach(g=>{g.addEventListener("change",()=>{const f=g.dataset.checkAlarm;f&&(g.checked?L.add(f):L.delete(f),j())})}),t.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{C="";const g=Array.from(L);try{for(const f of g)await a.acknowledgeAlarm(f,"告警中心批量确认"),X.set(f,"批量确认处置");L.clear(),n=`已批量确认 ${g.length} 条告警，未来 24 小时持续校验无复发。`,await D()}catch(f){C=f instanceof Error?f.message:String(f),j()}}),t.querySelectorAll("[data-expand-alarm]").forEach(g=>{g.addEventListener("click",()=>{const f=g.dataset.expandAlarm??null;V=V===f?null:f,U=null,j()})}),t.querySelectorAll("[data-expand-wo]").forEach(g=>{g.addEventListener("click",()=>{const f=g.dataset.expandWo??null;z=z===f?null:f,j()})}),t.querySelectorAll("[data-run-ftt]").forEach(g=>{g.addEventListener("click",()=>{const f=b.find(W=>W.id===g.dataset.runFtt);f&&T(f)})}),t.querySelectorAll("[data-open-snooze]").forEach(g=>{g.addEventListener("click",()=>{U=g.dataset.openSnooze??null,j()})}),t.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{U=null,j()}),t.querySelectorAll("[data-snooze-form]").forEach(g=>{g.addEventListener("submit",f=>{f.preventDefault();const W=g.dataset.snoozeForm;if(!W)return;const te=new FormData(g),se=String(te.get("duration")??"24h"),ee=String(te.get("reason")??"").trim()||"现场核查中";m.set(W,{duration:se,reason:ee}),L.delete(W),U=null,n=`已限时忽略该告警（${se} · ${ee}），可在「已忽略」页签中随时恢复。`,j()})}),t.querySelectorAll("[data-unsnooze]").forEach(g=>{g.addEventListener("click",()=>{const f=g.dataset.unsnooze;f&&(m.delete(f),n="已恢复该告警的实时监控。",j())})}),t.querySelectorAll("[data-go-ts]").forEach(g=>{g.addEventListener("click",()=>{const f=g.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(f)}`})}),t.querySelectorAll("[data-locate-home]").forEach(g=>{g.addEventListener("click",()=>{const f=g.dataset.locateHome??"";window.location.hash=f?`#home?device=${encodeURIComponent(f)}`:"#home"})}),t.querySelectorAll("[data-mark-actioned]").forEach(g=>{g.addEventListener("click",async()=>{C="";const f=g.dataset.markActioned;try{await a.acknowledgeAlarm(f,"现场自处理完成（Mark Actioned）"),X.set(f,"现场自处理完成"),L.delete(f),n="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await D()}catch(W){C=W instanceof Error?W.message:String(W),j()}})}),t.querySelectorAll("[data-to-wo]").forEach(g=>{g.addEventListener("click",async()=>{C="";const f=b.find(W=>W.id===g.dataset.toWo);if(f)try{await a.createWorkOrder({floorId:f.floorId,deviceId:f.deviceId,alarmId:f.id,title:`处置告警：${f.title}`,description:f.message}),n=`已将「${f.title}」转为运维工单并同步 CMMS。`,await D()}catch(W){C=W instanceof Error?W.message:String(W),j()}})}),t.querySelectorAll("[data-wo-status]").forEach(g=>{g.addEventListener("change",async()=>{const f=g.dataset.woStatus,W=g.value;if(C="",W==="cancelled"){const te=I.find(se=>se.id===f);if(te){const se=p(te);se.cancelled=!0,se.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),n="工单已移入「已取消」分类并锁定编辑。",j()}return}if(W==="resolved"||W==="closed"){N=f,K=W,j();return}try{await a.updateWorkOrderStatus(f,W);const te=I.find(se=>se.id===f);te&&p(te).history.unshift({at:"刚刚",text:`状态变更为「${he[W]}」`}),n="工单状态已更新并写入审计日志。",await D()}catch(te){C=te instanceof Error?te.message:String(te),await D()}})}),t.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{N=null,j()}),t.querySelectorAll("[data-close-wo-form]").forEach(g=>{g.addEventListener("submit",async f=>{f.preventDefault();const W=g.dataset.closeWoForm,te=new FormData(g),se=String(te.get("cause")??"").trim(),ee=String(te.get("solution")??"").trim(),pe=String(te.get("actualCost")??"").trim();try{await a.updateWorkOrderStatus(W,K);const d=I.find(E=>E.id===W);if(d){const E=p(d);E.cause=se,E.solution=ee,pe&&(E.actualCost=pe),E.history.unshift({at:"刚刚",text:`流转至「${he[K]}」· 根因：${se}`})}N=null,z=W,n=`工单已更新为「${he[K]}」，根因与方案已沉淀归档。`,await D()}catch(d){C=d instanceof Error?d.message:String(d),j()}})}),t.querySelectorAll("[data-wo-task]").forEach(g=>{g.addEventListener("change",()=>{const f=I.find(se=>se.id===g.dataset.woTask);if(!f)return;const te=p(f).tasks.find(se=>se.id===g.dataset.taskId);te&&(te.done=g.checked),j()})})}await D()}const $e=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],ke=[{id:c.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:c.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:c.projectId,label:"广实2号园（全园区）",factor:18.2}],Ze={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},Ge=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],ve=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function Ie(t,a=""){const s=(t??"").trim().toLowerCase();return!(!s||s.includes("%")||s.includes("°c")||s.includes("ppm")||s.includes("ms")||s.includes("m²")||s.includes("/m2")||s.includes("db")||s.includes("lx")||a.includes("率")||a.includes("均")||a.includes("强度")||a.includes("延迟"))}function we(t,a){const s=t*a;return Math.abs(s)>=10?Math.round(s):Math.round(s*10)/10}function Ye(t,a){const s=Number(String(t).replaceAll(",","")),l=a??"";return Number.isFinite(s)?l==="kWh"&&Math.abs(s)>=1e4?{value:(s/1e3).toFixed(1),unit:"MWh",title:`精确值：${s.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(s)?s.toLocaleString("en-US"):s.toLocaleString("en-US",{maximumFractionDigits:1}),unit:l,title:`${s.toLocaleString("en-US")} ${l}`.trim()}:{value:t,unit:l,title:`${t} ${l}`.trim()}}function Ke(t,a){if(a===1)return t;const s=Ie(t.unit);return{...t,kpis:t.kpis.map(l=>{const o=Number(String(l.value).replaceAll(",",""));return!Number.isFinite(o)||!Ie(l.unit,l.label)?l:{...l,value:String(we(o,a))}}),series:s?t.series.map(l=>({...l,value:we(l.value,a),...typeof l.baseline=="number"?{baseline:we(l.baseline,a)}:{}})):t.series,zoneBreakdown:t.zoneBreakdown.map(l=>Ie(l.unit)?{...l,value:we(l.value,a)}:l)}}function Xe(t,a){const s=Math.max(...t.series.map(M=>Math.max(M.value,M.baseline??0)),1),l=46,o=34,i=36,b=Math.max(t.series.length*(l+o)+i*2,620),I=228,y=184,B=132,A=[0,.25,.5,.75,1].map(M=>{const _=Math.round(y-M*B);return`<line x1="${i-8}" y1="${_}" x2="${b-18}" y2="${_}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${M===0?"0":"3 3"}" />`}).join(""),P=t.series.map((M,_)=>{const q=i+_*(l+o),V=Math.max(8,Math.round(M.value/s*B)),z=y-V,U=typeof M.baseline=="number"&&M.value>M.baseline*1.08,N=U?`<rect x="${q-8}" y="34" width="${l+16}" height="${y-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",K=typeof M.baseline=="number"?`<line x1="${q-5}" y1="${Math.round(y-M.baseline/s*B)}" x2="${q+l+5}" y2="${Math.round(y-M.baseline/s*B)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",L=a&&(U||_===1)?`<g><title>${U?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${q+l/2}" cy="18" r="7" fill="${U?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${q+l/2}" y="21.5" text-anchor="middle" font-size="9" fill="#fff">${U?"!":"⚡"}</text></g>`:"",m=M.value>=1e4?`${(M.value/1e3).toFixed(1)}k`:M.value.toLocaleString("en-US");return`
        ${N}
        ${K}
        ${L}
        <g>
          <title>${M.label}：实测 ${M.value.toLocaleString("en-US")} ${t.unit}${M.baseline!==void 0?` / 基线 ${M.baseline.toLocaleString("en-US")} ${t.unit}`:""}</title>
          <rect x="${q}" y="${z}" width="${l}" height="${V}" rx="7" fill="${U?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${q+l/2}" y="${z-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${m}</text>
        <text x="${q+l/2}" y="${y+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${M.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${b} ${I}" style="width:100%; height:232px; display:block;" role="img" aria-label="${t.category} 趋势图">
      ${A}
      ${P}
    </svg>
  `}function me(t){if(t.connectivity==="offline")return{unit:"°C",points:[23.8,24,24.1,null,null,null,null,null]};if(t.category==="lighting"){const a=Number(t.telemetry.dimming?.value??60);return{unit:"%",points:[0,0,Math.round(a*.8),a,a,Math.round(a*.6),a,Math.round(a*.9)]}}if(t.category==="hvac"){const a=Number(t.telemetry.setpoint?.value??24);return{unit:"°C",points:[a+.8,a+.6,a+.3,a,a-.2,a+.1,a+.2,a]}}if(t.category==="sensor"){const a=Number(t.telemetry.temp?.value??23.4);return{unit:"°C",points:[a-.5,a-.3,a,a+.3,a+.5,a+.2,a+.1,a]}}return{unit:"ms",points:[16,18,17,19,18,17,18,18]}}function Qe(t,a){const s=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!t.length)return'<div class="lov-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧勾选 1 台或多台设备以开始多点时序对比。</span></div>';const l=(i,b)=>{const V=[];for(const O of i)for(const F of me(O).points)typeof F=="number"&&V.push(F);const z=V.length?Math.min(...V)*.92:0,U=V.length?Math.max(...V)*1.08:100,N=Math.max(U-z,1),K=[0,.5,1].map(O=>{const F=Math.round(26+106*(1-O)),n=(z+N*O).toFixed(N<15?1:0);return`
          <line x1="42" y1="${F}" x2="662" y2="${F}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${O===0?"0":"3 3"}" />
          <text x="36" y="${F+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${n}</text>
        `}).join(""),L=s.map((O,F)=>`<text x="${42+F/(s.length-1)*620}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${O}</text>`).join(""),m=i.map((O,F)=>{const n=ve[F%ve.length],C=me(O).points,p=[];let D=42,H=26+106/2,T=!1;return C.forEach((j,S)=>{const R=42+S/(C.length-1)*620;if(typeof j=="number"){const v=26+106*(1-(j-z)/N);p.push(`${R.toFixed(1)},${v.toFixed(1)}`),D=R,H=v}else T=!0}),`
          ${p.length?`<polyline fill="none" stroke="${n}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${p.join(" ")}" />`:""}
          ${T?`<line x1="${D.toFixed(1)}" y1="${H.toFixed(1)}" x2="662" y2="${H.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${H-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),X=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${42+3/7*620}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${42+3/7*620}" y="15" text-anchor="middle" font-size="8" fill="#fff">⚡</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${42+5/7*620}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${42+5/7*620}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `;return`
      <div class="pacom-card" style="padding:14px 16px; gap:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${b}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${i.map((O,F)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${ve[F%ve.length]};"></span>${O.name}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${K}
          ${L}
          ${X}
          ${m}
        </svg>
      </div>
    `};if(a==="shared")return l(t,"单图叠合对比（Shared）");const o=new Map;for(const i of t){const b=me(i).unit,I=o.get(b)??[];I.push(i),o.set(b,I)}return Array.from(o.entries()).map(([i,b])=>l(b,`按单位分组泳道（${i}）`)).join("")}function Je(t){const a=[["时段",`数值 (${t.unit})`,`基线 (${t.unit})`].join(","),...t.series.map(i=>[i.label,String(i.value),i.baseline!==void 0?String(i.baseline):""].join(","))],s=new Blob([`\uFEFF${a.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),l=URL.createObjectURL(s),o=document.createElement("a");o.href=l,o.download=`pacom-${t.category}-${t.range}.csv`,o.click(),URL.revokeObjectURL(l)}function et(t){const a=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],s=["时间",...t.map(I=>`${I.name}(${me(I).unit})`)].join(","),l=a.map((I,y)=>[I,...t.map(B=>String(me(B).points[y]??"No Data"))].join(",")),o=new Blob([`\uFEFF${[s,...l].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(o),b=document.createElement("a");b.href=i,b.download="pacom-timeseries-export.csv",b.click(),URL.revokeObjectURL(i)}async function tt(t,a,s){const l=new URLSearchParams(window.location.hash.split("?")[1]??""),o=l.get("tab"),i=l.get("cat"),b=l.get("device");let I=o==="timeseries"?"timeseries":i&&$e.some(n=>n.id===i)?i:"energy",y="7d",B="2026-11-16",A="2026-11-23",P=c.floorId,M="chart",_=!0,q="breakdown",V=!1,z=null,U=await a.getFloorDevices(c.floorId).catch(()=>[]),N="grouped",K="1h";const L=new Set(b&&U.some(n=>n.id===b)?[b]:U.slice(0,3).map(n=>n.id)),m=[{id:"fav-hvac",name:"E7F 空调供回温与离线对照",deviceIds:U.filter(n=>n.category==="hvac"||n.category==="sensor").map(n=>n.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度趋势对比",deviceIds:U.filter(n=>n.category==="lighting").map(n=>n.id),mode:"shared",interval:"15m"}];let X="";async function O(){const n=I==="timeseries"?"energy":I,C=y==="custom"?"30d":y;z=await a.getAnalysisReport(n,C,c.floorId),F()}function F(){if(!z)return;const n=I==="timeseries",C=I==="timeseries"?"energy":I,p=$e.find(v=>v.id===C)??$e[0],D=ke.find(v=>v.id===P)??ke[0],H=Ke(z,D.factor),T=H.zoneBreakdown.filter(v=>v.status==="warning"),j=Ze[C],S=Math.max(...H.zoneBreakdown.map(v=>v.value),1),R=U.filter(v=>L.has(v.id));t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:10px; min-width:0;">
              <h1 class="pacom-title" style="flex-shrink:0;">数据分析</h1>
              <div class="pacom-tabs" role="tablist" aria-label="分析维度">
                ${$e.map(v=>`<button class="pacom-tab" role="tab" aria-selected="${I===v.id}" data-cat="${v.id}">${v.label}</button>`).join("")}
                <button class="pacom-tab" role="tab" aria-selected="${I==="timeseries"}" data-cat="timeseries">多点时序</button>
              </div>
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <div class="pacom-scope-pill" style="width:196px;" title="切换统计空间范围">
                <select name="analysisScope" data-scope-select aria-label="选择统计空间范围">
                  ${ke.map(v=>`<option value="${v.id}" ${v.id===P?"selected":""}>${v.label}</option>`).join("")}
                </select>
                <span class="pacom-scope-chevron">▾</span>
              </div>
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px;">
                <option value="today" ${y==="today"?"selected":""}>今日</option>
                <option value="7d" ${y==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${y==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${y==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${n?"":`<button class="pacom-btn ${V?"pacom-btn--primary":""}" data-toggle-canvas="1">${V?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          ${y==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${B}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${A}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${n?`
            <div class="lov-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:264px; min-width:240px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">多点时序测点树</span>
                    <span class="pacom-row-sub">已选 ${R.length}</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${m.map(v=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${v.id}">★ ${v.name}</button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${U.map((v,e)=>{const u=L.has(v.id),k=me(v);return`
                        <label class="pacom-row" style="cursor:pointer;">
                          <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                            <input type="checkbox" data-ts-dev="${v.id}" ${u?"checked":""} />
                            <span style="width:8px; height:8px; border-radius:50%; background:${ve[e%ve.length]}; flex-shrink:0;"></span>
                            <div style="min-width:0;">
                              <div class="pacom-row-title" style="font-size:13px;">${v.name}</div>
                              <div class="pacom-row-sub">${k.unit} · ${v.connectivity==="online"?"在线上报":"断流离线"}</div>
                            </div>
                          </div>
                        </label>`}).join("")}
                </div>
              </aside>
              <div class="lov-subnav-main" style="padding:2px 4px 24px;">
                ${X?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${X}</span></div>`:""}
                <div class="lov-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="lov-section-title">多设备实时遥测对比（Time Series）</h2>
                    <span class="pacom-row-sub">⚡ 控制排程 · ! 告警触发 · 虚线为 No Data 断流</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <select class="pacom-select" name="tsInterval" data-ts-interval aria-label="采样粒度" style="height:28px; font-size:12px;">
                      <option value="15m" ${K==="15m"?"selected":""}>15 分钟</option>
                      <option value="1h" ${K==="1h"?"selected":""}>1 小时</option>
                      <option value="1d" ${K==="1d"?"selected":""}>1 天</option>
                    </select>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${N==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${N==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                  </div>
                </div>
                ${Qe(R,N)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="lov-kpi-strip" role="region" aria-label="核心统计指标">
                ${H.kpis.map(v=>{const e=Ye(v.value,v.unit);return`
                      <div class="lov-kpi-cell" title="${e.title}">
                        <span class="lov-kpi-label">${v.label}</span>
                        <div class="lov-kpi-value">
                          <span>${e.value}</span>
                          ${e.unit?`<span class="lov-kpi-unit">${e.unit}</span>`:""}
                        </div>
                        <span class="lov-kpi-delta">${v.delta??"与基线持平"}</span>
                      </div>`}).join("")}
              </div>

              <section class="lov-section">
                <div class="lov-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="lov-section-title">${p?.label??"趋势"}趋势（${H.unit}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${D.label} · 更新于 ${H.updatedAt.slice(5,16).replace("T"," ")}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${_}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
                        <span class="lov-switch-thumb"></span>
                      </button>
                    </label>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${M==="chart"}" data-chart-mode="chart">趋势图</button>
                      <button class="pacom-tab" aria-selected="${M==="table"}" data-chart-mode="table">明细原表</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-card" style="gap:16px;">
                  ${M==="chart"?Xe(H,_):`
                      <div class="lov-table-wrap">
                        <table class="lov-table">
                          <thead>
                            <tr>
                              <th>统计时段</th>
                              <th>实测值（${H.unit}）</th>
                              <th>基线参考</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${H.series.map(v=>{const e=typeof v.baseline=="number"&&v.value>v.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${v.label}</strong></td>
                                    <td>${v.value.toLocaleString("en-US")}</td>
                                    <td>${v.baseline!==void 0?v.baseline.toLocaleString("en-US"):"-"}</td>
                                    <td><span class="pacom-badge ${e?"pacom-badge--warning":"pacom-badge--online"}">${e?"超基线":"正常"}</span></td>
                                  </tr>`}).join("")}
                          </tbody>
                        </table>
                      </div>`}
                  <div class="lov-banner">
                    <div class="lov-banner-text">
                      <span class="lov-banner-title">${p?.desc??"空间运行洞察"}</span>
                      <span class="lov-banner-sub">
                        ${T.length>0?`当前有 ${T.length} 个功能区指标偏高（${T.map(v=>v.zoneName).join("、")}），建议前往智能策略优化启停时段。`:j.summary}
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
                    <span class="pacom-row-sub">${H.zoneBreakdown.length} 个功能区</span>
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
                          ${H.zoneBreakdown.map(v=>{const e=Math.max(8,Math.round(v.value/S*100));return`
                                <tr>
                                  <td style="font-weight:500;">${v.zoneName.replace(/^7F\s*/,"")}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${e}%; height:100%; border-radius:999px; background:${v.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${v.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${v.unit}</span></td>
                                  <td>
                                    <span class="pacom-badge ${v.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${v.status==="warning"?"偏高关注":"正常"}
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
                    <h2 class="lov-section-title">${V?"E7F 空间对照预览":C==="energy"&&q==="load"?"峰谷负荷分布（Load Profile）":j.title}</h2>
                    ${!V&&C==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${q==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${q==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${V?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${V?'<img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
                        ${C==="environment"?`
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
                        ${(C==="energy"&&q==="load"?Ge:j.items).map(v=>`
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                                <span style="font-weight:500; color:var(--pacom-text-primary);">${v.name}</span>
                                <span class="pacom-row-sub">${v.detail} · <strong style="color:var(--pacom-text-primary);">${v.pct}%</strong></span>
                              </div>
                              <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                <div style="width:${Math.min(100,v.pct)}%; height:100%; border-radius:999px; background:${v.color};"></div>
                              </div>
                            </div>`).join("")}`}
                  </div>
                </section>
              </div>
            </div>`}
      </div>
    `,t.querySelectorAll("[data-cat]").forEach(v=>{v.addEventListener("click",()=>{I=v.dataset.cat??"energy",X="",I==="timeseries"?F():O()})}),t.querySelector("[data-scope-select]")?.addEventListener("change",v=>{P=v.currentTarget.value,F()}),t.querySelector("[data-range-select]")?.addEventListener("change",v=>{y=v.currentTarget.value??"7d",O()}),t.querySelector("[data-custom-start]")?.addEventListener("change",v=>{B=v.currentTarget.value}),t.querySelector("[data-custom-end]")?.addEventListener("change",v=>{A=v.currentTarget.value}),t.querySelectorAll("[data-chart-mode]").forEach(v=>{v.addEventListener("click",()=>{M=v.dataset.chartMode??"chart",F()})}),t.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{_=!_,F()}),t.querySelectorAll("[data-energy-right]").forEach(v=>{v.addEventListener("click",()=>{q=v.dataset.energyRight??"breakdown",F()})}),t.querySelector("[data-export-csv]")?.addEventListener("click",()=>{n?et(R):Je(H)}),t.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{V=!V,F()}),t.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),t.querySelectorAll("[data-ts-dev]").forEach(v=>{v.addEventListener("change",()=>{const e=v.dataset.tsDev;e&&(v.checked?L.add(e):L.delete(e),F())})}),t.querySelectorAll("[data-ts-mode]").forEach(v=>{v.addEventListener("click",()=>{N=v.dataset.tsMode??"grouped",F()})}),t.querySelector("[data-ts-interval]")?.addEventListener("change",v=>{K=v.currentTarget.value??"1h",F()}),t.querySelectorAll("[data-load-fav]").forEach(v=>{v.addEventListener("click",()=>{const e=m.find(u=>u.id===v.dataset.loadFav);e&&(L.clear(),e.deviceIds.forEach(u=>L.add(u)),N=e.mode,K=e.interval,X=`已加载收藏视图「${e.name}」。`,F())})}),t.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if(L.size===0)return;const v=`自定义对比 #${m.length+1}（${L.size} 台）`;m.push({id:`fav-${Date.now()}`,name:v,deviceIds:Array.from(L),mode:N,interval:K}),X=`已保存当前时序配置为「${v}」。`,F()})}await O()}const at=[{group:"一、项目配置",items:[{id:"projects",label:"项目与楼宇"},{id:"floors",label:"楼层与功能区"}]},{group:"二、系统接入",items:[{id:"connections",label:"网关与数据健康"}]},{group:"三、设备部署",items:[{id:"floorplan",label:"图纸标点与绑定"},{id:"inventory",label:"设备四态台账"}]},{group:"四、交付验收",items:[{id:"delivery",label:"进度与交付冻结"}]}],st={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},lt={frozen:"已冻结",draft:"草稿",delivered:"已交付"},ot={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"},Ee=[{id:"doc-hvac-7f",name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · FCU-01 / VAV-02",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",name:"E7F_强电照明与DALI回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-bacnet-map",name:"E7F_BACnet_Modbus_点位映射表.xlsx",category:"点位台账",boundScope:"E栋 7F · 主控网关 GW-01",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",name:"FCU-01_风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}];function nt(t,a){const s=t.status!=="connected",l=a.filter(o=>o.hardwareBinding?.protocol===t.protocol);return l.length>0?l.flatMap(o=>{const i=o.connectivity==="offline"||s;return[{pointName:o.category==="hvac"?"送风温度 / 阀门开度":o.category==="lighting"?"回路开关 / 调光反馈":o.category==="sensor"?"温湿度 / CO₂ 遥测":"网关心跳 / 负载",deviceName:o.name,value:i?"No Data":o.category==="hvac"?"23.4°C · 62%":o.category==="lighting"?"ON · 80%":o.category==="sensor"?"24.1°C · 510 ppm":"CPU 18% · 18ms",interval:"60s",lastSeen:i?"46 分钟前":"12 秒前",quality:i?o.connectivity==="offline"?"offline":"delayed":"online"}]}):[{pointName:`${t.protocol.toUpperCase()} 主干遥测汇总点`,deviceName:t.name,value:s?"采样延迟":"正常上报",interval:"60s",lastSeen:s?"38 分钟前":"9 秒前",quality:s?"delayed":"online"}]}function it(t){return t.category==="gateway"?"主控网关":t.category==="lighting"?t.name.includes("702")?"702 照明":"主照明":t.category==="hvac"?t.name.includes("VAV")?"VAV-02":"FCU-01":t.category==="sensor"?"环境传感":t.name.slice(0,6)}async function ct(t,a,s){let l="floorplan",o="all",i=await a.getSpatialTree(),b=[],I=[],y=[],B=null,A=!1,P=!1,M=null,_=null,q=null,V="",z="";async function U(){z="";const[m,X,O,F]=await Promise.all([a.getSpatialTree(),a.getFloorDevices(c.floorId).catch(()=>[]),a.listConnections(c.projectId),a.listDeliveryBatches(c.floorId)]);i=m,b=X,I=O,y=F,b.some(C=>C.id===B)||(B=b[0]?.id??null),A=b.find(C=>C.id===B)?.physicalInstalled??!1,L()}function N(m){z="",m.connectivity==="offline"?z=`单机回读自检未通过（FAIL）：「${m.name}」当前离线，请先在「网关与数据健康」核查 ${m.hardwareBinding?.networkAddress??"-"} 链路状态。`:V=`单机回读自检通过（PASS）：「${m.name}」指令下发 → 状态回读一致 → 已安全自动恢复原工况。`,L()}function K(){z="";const m=b.filter(p=>p.connectivity==="offline"),X=b.length-m.length,O=new Date,F=String(O.getHours()).padStart(2,"0"),n=String(O.getMinutes()).padStart(2,"0"),C=String(O.getSeconds()).padStart(2,"0");q={ranAt:`${F}:${n}:${C}`,total:b.length,passed:X,failed:m.length,failedNames:m.map(p=>p.name)},m.length>0?z=`全层批量自检（FTT）完成：${X}/${b.length} 台通过，${m.length} 台失败（${m.map(p=>p.name).join("、")}），其余设备已安全复位。`:V=`全层批量自检（FTT）全部通过：${X}/${b.length} 台设备指令下发、状态回读一致并已安全复位。`,L()}function L(){const m=b.find(e=>e.id===B)??null,X=s.scope.canEditDeployment,O=I.reduce((e,u)=>e+u.collectedPoints,0),F=I.reduce((e,u)=>e+u.calculatedPoints,0),n=I.filter(e=>e.status==="connected").length,C=I.filter(e=>e.status!=="connected"),p=b.filter(e=>!!e.planPoint).length,D=b.filter(e=>e.physicalInstalled).length,H=b.length-D,T=b.length-p,j=b.filter(e=>o==="unverified"?!e.physicalInstalled:o==="unplaced"?!e.planPoint:!0),S=i.buildings.find(e=>e.id===c.buildingId),R=i.floors.filter(e=>e.buildingId===c.buildingId),v=i.zones.filter(e=>e.floorId===c.floorId);t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">系统部署</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">当前试点：广实2号园 / E栋 7F</span>
              <span class="pacom-badge ${X?"pacom-badge--online":"pacom-badge--warning"}">
                ${X?"可编辑部署与硬件绑定":"只读权限（写入将被服务端 403 拦截）"}
              </span>
            </div>
          </div>
        </header>

        ${V?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${V}</span></div>`:""}
        ${z?`<div class="pacom-alert-banner">${z}</div>`:""}

        <div class="lov-subnav-layout">
          <nav class="lov-subnav-rail" style="width:176px;" aria-label="工程部署阶段导轨">
            ${at.map(e=>`
              <div class="lov-subnav-group">
                <div class="lov-subnav-group-title">${e.group}</div>
                ${e.items.map(u=>`
                    <button type="button" class="lov-subnav-item" aria-current="${l===u.id?"true":"false"}" data-dsec="${u.id}">
                      <span>${u.label}</span>
                      ${u.id==="connections"&&C.length>0?`<span class="pacom-badge pacom-badge--warning">${C.length}</span>`:""}
                      ${u.id==="floorplan"&&H>0?`<span class="pacom-badge pacom-badge--neutral">${H}</span>`:""}
                    </button>`).join("")}
              </div>`).join("")}
          </nav>

          <div class="lov-subnav-main" style="${l==="floorplan"?"overflow:hidden; padding:0;":"padding:4px 4px 24px;"}">
            ${l==="floorplan"?`
                <section class="pacom-split" style="height:100%;">
                  <aside class="pacom-left-pane" style="--pacom-sidebar-width:312px;">
                    <div class="pacom-pane-toolbar">
                      <div style="font-weight:500;">E7F 图纸标点与四态绑定（${b.length}）</div>
                      <div class="pacom-row-sub">图上放点仅更新坐标，绝不自动改写物理安装态或硬件绑定。</div>
                      <div class="lov-count-pills" role="group" aria-label="筛选核验状态">
                        <button type="button" class="lov-count-pill" style="height:26px; font-size:12px;" aria-pressed="${o==="all"}" data-dev-filter="all">
                          <span>全部</span><span class="lov-count-num">${b.length}</span>
                        </button>
                        <button type="button" class="lov-count-pill" style="height:26px; font-size:12px;" aria-pressed="${o==="unverified"}" data-dev-filter="unverified">
                          <span>待复核</span><span class="lov-count-num">${H}</span>
                        </button>
                        <button type="button" class="lov-count-pill" style="height:26px; font-size:12px;" aria-pressed="${o==="unplaced"}" data-dev-filter="unplaced">
                          <span>未标点</span><span class="lov-count-num">${T}</span>
                        </button>
                      </div>
                    </div>
                    <div class="pacom-list">
                      ${j.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">该筛选条件下无设备</div>':j.map(e=>`
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
                    ${m?`
                        <form data-role="binding-form" style="padding:14px 16px; border-top:var(--hw) solid var(--pacom-border-subtle); background:var(--pacom-surface-primary); display:flex; flex-direction:column; gap:10px;">
                          <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-weight:500; font-size:13px;">显式硬件绑定与现场复核</span>
                            <span class="pacom-badge pacom-badge--neutral">${m.id}</span>
                          </div>
                          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                            <select class="pacom-select" name="protocol" aria-label="通信协议">
                              ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(e=>`<option value="${e}" ${m.hardwareBinding?.protocol===e?"selected":""}>${e.toUpperCase()}</option>`).join("")}
                            </select>
                            <input class="pacom-input" name="networkAddress" placeholder="网络地址/主题" value="${m.hardwareBinding?.networkAddress??""}" aria-label="网络地址" />
                          </div>
                          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                            <input class="pacom-input" name="portOrChannel" placeholder="端口/回路" value="${m.hardwareBinding?.portOrChannel??""}" aria-label="端口或回路" />
                            <div style="display:inline-flex; align-items:center; gap:6px; flex-shrink:0;">
                              <span class="pacom-row-sub">物理已复核</span>
                              <button type="button" class="lov-switch" role="switch" aria-checked="${A}" data-toggle-phys="1" aria-label="现场物理安装已复核" ${X?"":"disabled"}>
                                <span class="lov-switch-thumb"></span>
                              </button>
                            </div>
                          </div>
                          <div style="display:flex; gap:6px; flex-wrap:wrap;">
                            <button class="pacom-btn" type="button" data-toggle-place="1">${P?"取消标点":"点图更新坐标"}</button>
                            <button class="pacom-btn" type="button" data-ftt-test="1" title="验证指令下发、回读并自动复位">单机自检</button>
                            <button class="pacom-btn pacom-btn--primary" type="submit" style="flex:1;" ${X?"":"disabled"}>保存绑定（v${m.version}）</button>
                          </div>
                        </form>`:""}
                  </aside>
                  <div class="pacom-splitter"></div>
                  <main class="pacom-right-pane">
                    <div class="pacom-canvas-stage" data-role="deploy-stage" style="cursor:${P?"crosshair":"default"};">
                      <div class="pacom-canvas-viewport">
                        <div class="pacom-plan-wrap" data-role="deploy-plan">
                          <img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 部署平面图" />
                          ${b.filter(e=>e.planPoint).map(e=>`
                              <button type="button" class="pacom-pin ${e.id===B?"is-selected":""} ${e.connectivity==="offline"?"pacom-pin--offline":""}"
                                style="left:${(e.planPoint.x*100).toFixed(2)}%; top:${(e.planPoint.y*100).toFixed(2)}%;"
                                data-pick-dev="${e.id}" title="${e.name}">
                                <span class="pacom-dot ${e.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                <span>${it(e)}</span>
                              </button>`).join("")}
                        </div>
                      </div>
                      ${P&&m?`<div style="position:absolute; top:16px; left:16px; z-index:8;" class="pacom-badge pacom-badge--accent">标点模式：点击图纸任意位置更新「${m.name}」的 2D 坐标（不改动硬件绑定）</div>`:""}
                    </div>
                  </main>
                </section>`:l==="projects"?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">项目与楼宇归属配置</h2>
                      <span class="pacom-row-sub">共 ${i.projects.length} 个授权项目 · ${i.buildings.length} 栋楼宇</span>
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                      ${i.projects.map(e=>{const u=i.buildings.filter(k=>k.projectId===e.id);return`
                            <div class="pacom-card" style="padding:16px; gap:10px;">
                              <img src="${e.imageUrl??"./media/gzlab.jpg"}" alt="${e.name}" style="width:100%; height:132px; object-fit:cover; border-radius:10px;" />
                              <div>
                                <strong style="font-size:15px; font-weight:500;">${e.name}</strong>
                                <div class="pacom-row-sub">${e.city??""} ${e.address??""} · ${u.length} 栋楼宇</div>
                              </div>
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                ${u.map(k=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${k.name}</strong> · 地上 ${k.aboveFloors}F / ${k.areaSqm??"-"} m²</span>
                                      <span class="pacom-badge ${k.id===c.buildingId?"pacom-badge--accent":"pacom-badge--neutral"}">${k.id===c.buildingId?"含 E7F 试点":"对照楼宇"}</span>
                                    </div>`).join("")}
                              </div>
                            </div>`}).join("")}
                    </div>
                  </section>`:l==="floors"?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">${S?.name??"E栋"} 楼层与 2D 图纸清单</h2>
                        <span class="pacom-row-sub">共登记 ${R.length} 个楼层</span>
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
                              ${R.map(e=>{const u=e.id===c.floorId,k=s.scope.allowedFloorIds.includes(e.id);return`
                                    <tr>
                                      <td><strong>${S?.name??""} ${e.name}</strong></td>
                                      <td><span class="pacom-badge ${e.plan?"pacom-badge--online":"pacom-badge--neutral"}">${e.plan?"已上传 2D 图纸":"待上传图纸"}</span></td>
                                      <td>${u?`${b.length} 台设备 · ${v.length} 个功能区`:"-"}</td>
                                      <td><span class="pacom-badge ${k?"pacom-badge--accent":"pacom-badge--warning"}">${k?"已授权":"未授权"}</span></td>
                                      <td style="text-align:right;">
                                        ${u?'<button type="button" class="pacom-btn" data-dsec="floorplan">去标点与绑定 →</button>':'<span class="pacom-row-sub">暂未入网</span>'}
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
                        <span class="pacom-row-sub">${v.length} 个逻辑功能区</span>
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
                              ${v.map(e=>{const u=b.filter(Z=>Z.logicalZoneId===e.id),k=u.filter(Z=>Z.physicalInstalled).length;return`
                                    <tr>
                                      <td><strong>${e.name.replace(/^7F\s*/,"")}</strong></td>
                                      <td>${u.length} 台</td>
                                      <td><span class="pacom-badge ${k===u.length?"pacom-badge--online":"pacom-badge--warning"}">${k} / ${u.length} 已复核</span></td>
                                    </tr>`}).join("")}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>

                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">E7F 竣工图纸与设备手册附件</h2>
                        <span class="pacom-row-sub">共 ${Ee.length} 份关联工程文档（支持按空间与设备查阅）</span>
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
                              ${Ee.map(e=>`
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
                          <div class="lov-kpi-value">${n}<span class="lov-kpi-unit">/ ${I.length}</span></div>
                          <span class="lov-kpi-delta">边缘网关在线监控</span>
                        </div>
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">数据采集健康度</span>
                          <div class="lov-kpi-value">${I.length>0?Math.round(n/I.length*100):100}<span class="lov-kpi-unit">%</span></div>
                          <span class="lov-kpi-delta">区分设备真故障与断流</span>
                        </div>
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">原始采集点</span>
                          <div class="lov-kpi-value">${O}<span class="lov-kpi-unit">点</span></div>
                          <span class="lov-kpi-delta">协议直采实时遥测</span>
                        </div>
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">衍生计算点</span>
                          <div class="lov-kpi-value">${F}<span class="lov-kpi-unit">点</span></div>
                          <span class="lov-kpi-delta">能碳与聚合虚拟点位</span>
                        </div>
                      </div>

                      ${C.length>0?`
                          <div class="lov-banner lov-banner--critical">
                            <div class="lov-banner-text">
                              <span class="lov-banner-title">检测到 ${C.length} 条采集通道通信降级（${C.map(e=>e.name).join("、")}）</span>
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
                                  <th>健康状态</th>
                                  <th style="text-align:right;">操作</th>
                                </tr>
                              </thead>
                              <tbody>
                                ${I.map(e=>{const u=st[e.status]??{label:e.status,cls:"pacom-badge--neutral"},k=_===e.id,Z=k?nt(e,b):[];return`
                                      <tr>
                                        <td><strong>${e.name}</strong></td>
                                        <td><span class="pacom-badge pacom-badge--neutral">${e.protocol.toUpperCase()}</span></td>
                                        <td><code style="font-size:12px;">${e.endpoint}</code></td>
                                        <td>采集 ${e.collectedPoints} / 计算 ${e.calculatedPoints}</td>
                                        <td><span class="pacom-badge ${u.cls}">${u.label}</span></td>
                                        <td>
                                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                                            <button type="button" class="pacom-btn" data-expand-conn="${e.id}">${k?"收起点位":"点位质量"}</button>
                                            <button type="button" class="pacom-btn" data-ping-conn="${e.id}">测试连通</button>
                                            <button type="button" class="pacom-btn pacom-btn--ghost" data-copy-endpoint="${e.id}" data-endpoint-val="${e.endpoint}">
                                              ${M===e.id?"已复制":"复制端点"}
                                            </button>
                                          </div>
                                        </td>
                                      </tr>
                                      ${k?`
                                          <tr>
                                            <td colspan="6" style="background:var(--pacom-surface-secondary); padding:12px 16px;">
                                              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                                                <span style="font-size:12px; font-weight:500;">传感器级点位数据质量明细（${e.name}）</span>
                                                <span class="pacom-row-sub">在线正常 · 延迟 &gt;30 分钟（Delayed） · 断流 &gt;3×采集间隔（Offline）</span>
                                              </div>
                                              <div style="display:flex; flex-direction:column; gap:6px;">
                                                ${Z.map(oe=>`
                                                    <div class="pacom-receipt-item" style="background:var(--pacom-surface-primary);">
                                                      <span><strong>${oe.deviceName}</strong> · ${oe.pointName}</span>
                                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                                        <span class="pacom-row-sub">当前：${oe.value} · 间隔 ${oe.interval} · 上次上报 ${oe.lastSeen}</span>
                                                        <span class="pacom-badge ${oe.quality==="online"?"pacom-badge--online":oe.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                                          ${oe.quality==="online"?"在线正常":oe.quality==="delayed"?"延迟 >30m":"断流 >3×间隔"}
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
                        ${q?`
                            <div class="lov-banner ${q.failed===0?"lov-banner--ok":"lov-banner--critical"}">
                              <div class="lov-banner-text">
                                <span class="lov-banner-title">批量功能自检（FTT）摘要 · ${q.ranAt}</span>
                                <span class="lov-banner-sub">共检测 ${q.total} 台：通过 ${q.passed} 台，异常 ${q.failed} 台${q.failedNames.length>0?`（${q.failedNames.join("、")}）`:"，全部设备已自动复位"}</span>
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
                                  ${b.map(e=>{const u=(e.logicalZoneId?ot[e.logicalZoneId]:void 0)??"E7F";return`
                                        <tr>
                                          <td>
                                            <div style="font-weight:500;">${e.name}</div>
                                            <div class="pacom-row-sub">${u} · v${e.version}</div>
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
                          <button type="button" class="lov-kpi-cell" data-dsec="floorplan" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">1. 图纸标点就绪</span>
                            <div class="lov-kpi-value">${p}<span class="lov-kpi-unit">/ ${b.length}</span></div>
                            <span class="lov-kpi-delta">${T===0?"全部设备已完成标点 ✓":`尚差 ${T} 台未标点 →`}</span>
                          </button>
                          <button type="button" class="lov-kpi-cell" data-dsec="inventory" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">2. 物理安装复核</span>
                            <div class="lov-kpi-value">${D}<span class="lov-kpi-unit">/ ${b.length}</span></div>
                            <span class="lov-kpi-delta" style="${H>0?"color:var(--pacom-status-warning);":""}">${H===0?"现场复核全绿 ✓":`待复核 ${H} 台，点击查看 →`}</span>
                          </button>
                          <button type="button" class="lov-kpi-cell" data-dsec="connections" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">3. 网关通道连通</span>
                            <div class="lov-kpi-value">${n}<span class="lov-kpi-unit">/ ${I.length}</span></div>
                            <span class="lov-kpi-delta" style="${C.length>0?"color:var(--pacom-status-warning);":""}">${C.length===0?"全部通道健康 ✓":`${C.length} 条通道降级，点击排查 →`}</span>
                          </button>
                          <button type="button" class="lov-kpi-cell" data-batch-ftt="1" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">4. 批量功能自检（FTT）</span>
                            <div class="lov-kpi-value">${q?q.passed:b.filter(e=>e.connectivity==="online").length}<span class="lov-kpi-unit">/ ${b.length}</span></div>
                            <span class="lov-kpi-delta" style="${q&&q.failed>0?"color:var(--pacom-status-warning);":""}">${q?q.failed===0?`已于 ${q.ranAt} 全绿通过 ✓`:`${q.failed} 台未通过，点击复检 →`:"点击发起全层批量自检 →"}</span>
                          </button>
                        </div>

                        <section class="lov-section">
                          <div class="lov-section-head">
                            <h2 class="lov-section-title">E7F 交付冻结批次</h2>
                            <div style="display:flex; gap:8px; flex-wrap:wrap;">
                              <button type="button" class="pacom-btn" data-batch-ftt="1">一键全层批量自检（FTT）</button>
                              <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${X?"":"disabled"}>+ 新建交付冻结快照</button>
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
                                  ${y.map(e=>`
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
                                        <td><span class="pacom-badge pacom-badge--accent">${lt[e.status]??e.status}</span></td>
                                      </tr>`).join("")}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </section>`}
          </div>
        </div>
      </div>
    `,t.querySelectorAll("[data-dsec]").forEach(e=>{e.addEventListener("click",()=>{const u=e.dataset.dsec;u&&(l=u,V="",z="",L())})}),t.querySelectorAll("[data-dev-filter]").forEach(e=>{e.addEventListener("click",()=>{o=e.dataset.devFilter??"all",L()})}),t.querySelectorAll("[data-pick-dev]").forEach(e=>{e.addEventListener("click",()=>{B=e.dataset.pickDev??null,A=b.find(k=>k.id===B)?.physicalInstalled??!1,L()})}),t.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{A=!A,L()}),t.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{P=!P,L()}),t.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{m&&N(m)}),t.querySelectorAll("[data-ftt-dev]").forEach(e=>{e.addEventListener("click",()=>{const u=b.find(k=>k.id===e.dataset.fttDev);u&&N(u)})}),t.querySelectorAll("[data-batch-ftt]").forEach(e=>{e.addEventListener("click",()=>{K()})}),t.querySelectorAll("[data-expand-conn]").forEach(e=>{e.addEventListener("click",()=>{const u=e.dataset.expandConn??null;_=_===u?null:u,L()})}),t.querySelectorAll("[data-preview-doc]").forEach(e=>{e.addEventListener("click",()=>{const u=Ee.find(k=>k.id===e.dataset.previewDoc);u&&(z="",V=`已调阅工程附件「${u.name}」（关联范围：${u.boundScope}，更新于 ${u.updatedAt}）。`,L())})}),t.querySelectorAll("[data-ping-conn]").forEach(e=>{e.addEventListener("click",()=>{const u=I.find(k=>k.id===e.dataset.pingConn);u&&(z="",u.status==="connected"?V=`连通性测试通过：「${u.name}」（${u.endpoint}）响应正常，延迟 18 ms。`:z=`连通性测试异常：「${u.name}」（${u.endpoint}）超时无应答，建议排查边缘网关端口与 RS485 链路。`,L())})}),t.querySelectorAll("[data-copy-endpoint]").forEach(e=>{e.addEventListener("click",async()=>{const u=e.dataset.endpointVal??"",k=e.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(u),M=k,L(),window.setTimeout(()=>{M=null,L()},1600)}catch{}})}),t.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async e=>{if(!P||!m)return;const u=e.currentTarget.getBoundingClientRect(),k=Math.max(.02,Math.min(.98,(e.clientX-u.left)/u.width)),Z=Math.max(.02,Math.min(.98,(e.clientY-u.top)/u.height));try{await a.updateDevicePlanPoint({deviceId:m.id,floorId:c.floorId,planVersion:m.planPoint?.planVersion??1,x:k,y:Z,expectedVersion:m.version}),P=!1,V=`已更新「${m.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await U()}catch(oe){z=oe instanceof Error?oe.message:String(oe),L()}}),t.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async e=>{if(e.preventDefault(),!m)return;const u=new FormData(e.currentTarget);try{await a.updateDeviceHardwareBinding({deviceId:m.id,gatewayId:m.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(u.get("protocol")),networkAddress:String(u.get("networkAddress")??""),portOrChannel:String(u.get("portOrChannel")??""),physicalInstalled:A,expectedVersion:m.version}),V=`已保存「${m.name}」的硬件绑定与物理安装复核状态。`,await U()}catch(k){z=k instanceof Error?k.message:String(k),L()}}),t.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const e=await a.freezeDeliveryBatch(c.floorId,"系统部署交付验收发起冻结");V=`已生成冻结批次 ${e.versionTag}（核验 ${e.verifiedCount}/${e.deviceCount}）。`,await U()}catch(e){z=e instanceof Error?e.message:String(e),L()}})}await U()}function dt(t){if(t.connectivity==="offline")return`${t.name.includes("VAV")?"VAV-02":t.name.slice(0,6)} 离线`;if(t.category==="lighting"){const a=t.name.includes("702")?"702 照明":"主照明",s=Number(t.telemetry.dimming?.value??0);return s>0?`${a} ${s}%`:`${a} 关`}return t.category==="hvac"?`${t.name.includes("VAV")?"VAV-02":"FCU-01"} ${t.telemetry.setpoint?.value??24}°C`:t.category==="sensor"?`环境 ${t.telemetry.temp?.value??"23.4"}°C`:t.category==="gateway"?"主控网关":t.name.slice(0,6)}const Ae="pacom.web.e7f.leftWidth",Me={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},rt={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},pt={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:42,top:42,width:14,height:22}};function $(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function ut(t){return t.level==="all-projects"?"all":t.level==="project"?`project:${t.projectId}`:t.level==="building"?`building:${t.projectId}:${t.buildingId}`:`floor:${t.projectId}:${t.buildingId}:${t.floorId}`}async function vt(t,a,s){const l=await a.getSpatialTree(),o=a.mode==="demo",i=s.scope.canControlDevices,b=s.scope.canManageAlarms,I=s.scope.allowedZoneIds?.length?s.scope.allowedZoneIds:null;let y={level:"floor",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId},B="devices",A="canvas",P="",M="all",_="all";const q=new URLSearchParams(window.location.hash.split("?")[1]??""),V=q.get("device"),z=q.get("zone");let U=V,N=!!V,K=!1,L="devices";const m=new Set,X=new Set;let O=[],F=[],n=[],C=null,p=null,D=1,H=0,T=0,j=Number(localStorage.getItem(Ae)||400);(!Number.isFinite(j)||j<320||j>680)&&(j=400);let S=null;function R(){return l.zones.filter(d=>!(y.level==="floor"&&d.floorId!==y.floorId||I&&!I.includes(d.id)))}async function v(d,E=!1){y=d,p=null,_=E&&z?z:"all",K=!1,X.clear(),D=1,H=0,T=0,S&&(S(),S=null);const r=y.level==="floor"?y.floorId:c.floorId;if(y.level==="floor")try{const[h,x,Q]=await Promise.all([a.getFloorDevices(y.floorId),a.listAlarms(y.floorId),a.listWorkOrders(y.floorId)]);O=h,F=x,n=Q,O.some(G=>G.id===U)?E&&V&&(N=!0):(U=O[1]?.id??O[0]?.id??null,N=!1),S=a.subscribeFloorEvents(y.floorId,async G=>{G.type==="control.receipt.updated"&&C?.batchId===G.batchId&&(C=await a.getControlBatch(G.batchId)),(G.type==="telemetry.updated"||G.type==="device.connectivity")&&y.level==="floor"&&(O=await a.getFloorDevices(y.floorId)),G.type==="alarm.changed"&&y.level==="floor"&&(F=await a.listAlarms(y.floorId)),Z()})}catch(h){O=[],F=[],n=[],U=null,N=!1,p=h instanceof Error?h.message:String(h)}else{N=!1;const[h,x,Q]=await Promise.all([a.getFloorDevices(r).catch(()=>[]),a.listAlarms(r).catch(()=>[]),a.listWorkOrders(r).catch(()=>[])]);O=h,F=x,n=Q}ee()}function e(d){return d?l.zones.find(E=>E.id===d)?.name??d:"未分配逻辑区"}function u(){const d=P.trim().toLowerCase();return O.filter(E=>_!=="all"&&E.logicalZoneId!==_||M!=="all"&&E.category!==M?!1:d?E.name.toLowerCase().includes(d)||E.id.toLowerCase().includes(d)||e(E.logicalZoneId).toLowerCase().includes(d):!0)}async function k(d,E,r){!d.length||y.level!=="floor"||!i||(d.forEach(h=>m.add(h)),C=await a.dispatchControlBatch({floorId:y.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:d.map(h=>({deviceId:h,command:E,targetValue:r}))}),Z())}function Z(){const d=document.activeElement,E=d?.dataset?.role,r=d&&"selectionStart"in d?d.selectionStart:null,h=d&&"selectionEnd"in d?d.selectionEnd:null,x=t.querySelector(".pacom-list")?.scrollTop??0;ee();const Q=t.querySelector(".pacom-list");if(Q&&(Q.scrollTop=x),E==="search"){const G=t.querySelector('[data-role="search"]');G&&(G.focus(),r!==null&&h!==null&&G.setSelectionRange(r,h))}}function oe(){const d=t.querySelector('[data-role="canvas-viewport"]');d&&(d.style.transform=`translate(${H}px, ${T}px) scale(${D})`);const E=t.querySelector('[data-role="canvas-hint"]');E&&(E.textContent=`缩放 ${Math.round(D*100)}% · 滚轮缩放 · 拖动平移 · 双击复位`)}function ge(){return y.level==="floor"?`building:${y.projectId}:${y.buildingId}`:y.level==="building"?`project:${y.projectId}`:y.level==="project"?"all":null}function be(){const d=ut(y),E=l.projects.map(x=>`<option value="project:${$(x.id)}" ${d===`project:${x.id}`?"selected":""}>项目 · ${$(x.name)}</option>`).join(""),r=l.buildings.map(x=>{const Q=`building:${x.projectId}:${x.id}`;return`<option value="${$(Q)}" ${d===Q?"selected":""}>楼宇 · 广实2号园 / ${$(x.name)}</option>`}).join(""),h=l.floors.map(x=>{const Q=s.scope.allowedFloorIds.includes(x.id),G=`floor:${c.projectId}:${x.buildingId}:${x.id}`;return`<option value="${$(G)}" ${d===G?"selected":""}>楼层 · 广实2号园 / E栋 / ${$(x.name)}${Q?"":"（未授权）"}</option>`}).join("");return`
      <option value="all" ${d==="all"?"selected":""}>全部项目（${l.projects.length} 个授权园区）</option>
      <optgroup label="项目级">${E}</optgroup>
      <optgroup label="楼宇级">${r}</optgroup>
      <optgroup label="楼层级">${h}</optgroup>
    `}function Fe(){if(y.level==="all-projects"){const E=O.filter(h=>h.connectivity==="online").length,r=F.filter(h=>h.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">授权项目总览（${l.projects.length}）</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">楼宇</span><strong>${l.buildings.length} 栋</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线</span><strong>${E}/${O.length}</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:var(--pacom-status-warning);">${r} 条</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${l.projects.map(h=>{const x=l.buildings.filter(Q=>Q.projectId===h.id).length;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="project:${$(h.id)}">
                  <img src="${$(h.imageUrl??"./media/gzlab.jpg")}" alt="${$(h.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${$(h.name)}</strong>
                    <span class="pacom-badge pacom-badge--accent">${x} 栋楼宇</span>
                  </div>
                  <div class="pacom-row-sub">${$(h.city??"")} · ${$(h.address??"")}</div>
                </article>`}).join("")}
        </div>
      `}const d=y;if(d.level==="project"){const E=l.projects.find(G=>G.id===d.projectId),r=l.buildings.filter(G=>G.projectId===d.projectId),h=O.filter(G=>G.connectivity==="online").length,x=O.length?Math.round(h/O.length*100):100,Q=F.filter(G=>G.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${$(E?.name??"园区")} · 楼宇绩效（${r.length}）</div>
          <div class="pacom-row-sub">${$(E?.city??"")} ${$(E?.address??"")}</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">在线率</span><strong>${x}%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:${Q>0?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${Q} 条</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>1,248 kWh</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${r.map(G=>{const w=G.id===c.buildingId;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="building:${$(G.projectId)}:${$(G.id)}">
                  <img src="${$(G.imageUrl??"./media/building-e.png")}" alt="${$(G.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${$(G.name)}</strong>
                    <span class="pacom-badge ${w?"pacom-badge--online":"pacom-badge--neutral"}">${w?`在线 ${x}% · 告警 ${Q}`:"运行平稳"}</span>
                  </div>
                  <div class="pacom-row-sub">地上 ${G.aboveFloors} 层 · 面积 ${G.areaSqm??"-"} m² · 舒适度达标 96%</div>
                </article>`}).join("")}
        </div>
      `}if(d.level==="building"){const E=l.buildings.find(w=>w.id===d.buildingId),r=l.floors.filter(w=>w.buildingId===d.buildingId),h=n.filter(w=>w.status!=="closed"&&w.status!=="resolved"),x=O.filter(w=>w.connectivity==="online").length,Q=O.length?Math.round(x/O.length*100):100,G=F.filter(w=>w.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${$(E?.name??"楼宇")} 运行概况</div>
          <div class="pacom-row-sub">地上 ${E?.aboveFloors??0} 层 · 面积 ${E?.areaSqm??"-"} m²</div>
          <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线率</span><strong>${Q}%（${x}/${O.length}）</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">舒适度达标</span><strong>96.2%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>418 kWh</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">告警 / 工单</span><strong style="color:var(--pacom-status-warning);">${G} 告警 · ${h.length} 工单</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:8px; padding:12px;">
          <div style="font-weight:500; font-size:13px;">楼层列表（点击进入 2D 平面控制）</div>
          ${r.length?r.map(w=>{const Y=s.scope.allowedFloorIds.includes(w.id),J=w.id===c.floorId;return`
                      <div class="pacom-row" data-nav-scope="floor:${$(d.projectId)}:${$(d.buildingId)}:${$(w.id)}">
                        <div>
                          <div class="pacom-row-title">${$(E?.name??"")} ${$(w.name)}</div>
                          <div class="pacom-row-sub">${w.plan?"2D 平面图就绪":"暂未上传图纸"}${J&&G>0?` · ${G} 条待处理告警`:""}</div>
                        </div>
                        <span class="pacom-badge ${Y?"pacom-badge--online":"pacom-badge--warning"}">${Y?"进入楼层":"无权限"}</span>
                      </div>`}).join(""):'<div class="pacom-row-sub">该楼宇暂未配置试点楼层。</div>'}
        </div>
      `}if(B==="devices"){const E=u(),r=R(),h=Array.from(X);return`
        <div class="pacom-pane-toolbar">
          ${I?`<div class="pacom-info-banner">我的区域视图：仅显示当前账号获授权的 ${I.length} 个功能区及设备。</div>`:""}
          <div class="pacom-search-row">
            <input class="pacom-input" data-role="search" placeholder="搜索设备名 / ID / 区域…" value="${$(P)}" aria-label="搜索楼层设备" />
            <select class="pacom-select" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${M==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${M==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${M==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${M==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${M==="gateway"?"selected":""}>网关</option>
            </select>
          </div>
          ${r.length>0&&!p?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${_==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${r.map(x=>`<button type="button" class="pacom-zone-pill ${_===x.id?"is-active":""}" data-filter-zone="${$(x.id)}">${$(x.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; color:var(--pacom-text-secondary);">
            <span>当前可见 ${E.length} 台设备</span>
            <span>${i?`已勾选 ${h.length} 台`:"只读模式"}</span>
          </div>
        </div>
        <div class="pacom-list">
          ${p?`<div class="pacom-alert-banner">${$(p)}</div>`:E.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">没有匹配的设备</div>':E.map(x=>{const Q=x.id===U&&N,G=X.has(x.id),w=x.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline",Y=x.category==="lighting"?`亮度 ${x.telemetry.dimming?.value??"--"}%`:x.category==="hvac"?`设定 ${x.telemetry.setpoint?.value??"--"}°C`:x.category==="sensor"?`${x.telemetry.temp?.value??"--"}°C · CO₂ ${x.telemetry.co2?.value??"--"}`:x.hardwareBinding?.networkAddress??"未绑定";return`
                        <div class="pacom-row ${Q?"is-selected":""}" data-select-device="${$(x.id)}">
                          <div class="pacom-row-main">
                            ${i?`<input type="checkbox" data-check-device="${$(x.id)}" ${G?"checked":""} style="margin-top:3px;" aria-label="勾选 ${$(x.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title">${$(x.name)}</div>
                              <div class="pacom-row-sub">${$(e(x.logicalZoneId))} · ${$(Me[x.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${x.connectivity==="online"?"pacom-badge--online":"pacom-badge--neutral"}">
                            <span class="pacom-dot ${w}"></span>${$(Y)}
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
      `}if(B==="zones"){const E=R(),r={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">E7F 功能区快控（${E.length}）</div>
          <div class="pacom-row-sub">点击卡片同步高亮右侧平面图热区，支持按区域一键批量控制。</div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${E.map(h=>{const x=O.filter(J=>J.logicalZoneId===h.id),Q=x.filter(J=>J.connectivity==="online").length,G=x.filter(J=>J.category==="lighting"||J.category==="hvac").length,w=_===h.id,Y=r[h.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${w?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${w?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${$(w?"all":h.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:14px; font-weight:500;">${$(h.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${Q}/${x.length}</span>
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
          <span style="font-weight:500;">本层告警快览（${F.length}）</span>
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-alarms="1">前往告警中心 →</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:12px;">
        ${F.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">当前楼层无活跃告警</div>':F.map(E=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${$(E.title)}</strong>
                      <span class="pacom-badge ${E.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${E.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${$(E.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" data-locate-device="${$(E.deviceId)}">定位设备</button>
                      ${E.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" data-ack-alarm="${$(E.id)}" ${b?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function g(){const d=y,E=O.filter(w=>w.connectivity==="online").length,r=O.length?Math.round(E/O.length*100):100,h=F.filter(w=>w.status==="active").length;if(d.level==="all-projects"||d.level==="project"){const w=d.level==="project"?l.projects.find(J=>J.id===d.projectId):l.projects[0],Y=l.buildings.filter(J=>!w||J.projectId===w.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:24px; cursor:default;">
          <div style="position:relative; width:min(760px, 94%); border-radius:16px; overflow:hidden; box-shadow:0 12px 32px rgba(15,23,42,0.14); background:#fff;">
            <img src="${$(w?.imageUrl??"./media/gzlab.jpg")}" alt="园区俯瞰" style="width:100%; height:440px; object-fit:cover; display:block;" />
            ${d.level==="all-projects"?l.projects.map((J,le)=>`
                      <button type="button" class="pacom-pin is-selected" style="left:${le===0?48:26}%; top:${le===0?52:34}%;" data-nav-scope="project:${$(J.id)}">
                        <span class="pacom-dot pacom-dot--online"></span>
                        <span>${$(J.name)}</span>
                      </button>`).join(""):Y.map((J,le)=>{const de=J.id===c.buildingId;return`
                        <button type="button" class="pacom-pin ${de?"is-selected":""}" style="left:${le===0?56:38}%; top:${le===0?44:62}%;" data-nav-scope="building:${$(J.projectId)}:${$(J.id)}">
                          <span class="pacom-dot ${de&&h>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                          <span>${$(J.name)} · ${de?`在线 ${r}% · 告警 ${h}`:"运行平稳"}</span>
                        </button>`}).join("")}
          </div>
        </div>
      `}if(d.level==="building"){const w=l.buildings.find(le=>le.id===d.buildingId),Y=l.floors.filter(le=>le.buildingId===d.buildingId),J=Y.find(le=>le.id===c.floorId)??Y[0];return`
        ${Y.length?`
            <nav class="pacom-floor-rail" aria-label="整栋楼层选择轨道">
              <button type="button" class="pacom-floor-btn is-active" title="整栋视图">栋</button>
              ${Y.map(le=>{const de=s.scope.allowedFloorIds.includes(le.id),ue=le.id===c.floorId&&h>0;return`<button type="button" class="pacom-floor-btn ${de?"":"is-locked"}" data-nav-scope="floor:${$(d.projectId)}:${$(d.buildingId)}:${$(le.id)}" title="${$(le.name)}${ue?`（${h} 条待处理告警）`:""}">${$(le.name.replace("F",""))}${ue?'<span class="pacom-floor-alert-dot"></span>':""}</button>`}).join("")}
            </nav>`:""}
        <div class="pacom-canvas-tools" aria-label="画布工具">
          <button type="button" class="pacom-tool-btn" data-zoom="reset" title="复位视图" aria-label="复位视图">⟲</button>
          <div class="pacom-tool-divider" aria-hidden="true"></div>
          <button type="button" class="pacom-tool-btn" data-zoom="in" title="放大" aria-label="放大">＋</button>
          <button type="button" class="pacom-tool-btn" data-zoom="out" title="缩小" aria-label="缩小">－</button>
        </div>
        <div class="pacom-canvas-stage" data-role="canvas-stage">
          <div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${H}px, ${T}px) scale(${D});">
            <img class="pacom-plan-img" src="${$(w?.imageUrl??"./media/building-e.png")}" alt="${$(w?.name??"楼宇")} 整栋实景图" />
          </div>
        </div>
        <div class="pacom-canvas-hint" style="pointer-events:auto; display:flex; align-items:center; gap:10px;">
          <span>${$(w?.name??"楼宇")} · 在线 ${r}% · 舒适度 96.2%</span>
          ${J?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:24px; padding:0 10px; font-size:12px;" data-nav-scope="floor:${$(d.projectId)}:${$(d.buildingId)}:${$(J.id)}">进入 ${$(J.name)} 平面图 →</button>`:""}
        </div>
      `}const x=l.floors.find(w=>w.id===d.floorId),Q=l.floors.filter(w=>w.buildingId===d.buildingId),G=R();return`
      <nav class="pacom-floor-rail" aria-label="楼层选择轨道">
        <button type="button" class="pacom-floor-btn" data-nav-scope="building:${$(d.projectId)}:${$(d.buildingId)}" title="返回整栋楼宇">栋</button>
        ${Q.map(w=>{const Y=s.scope.allowedFloorIds.includes(w.id),J=w.id===c.floorId&&h>0;return`<button type="button" class="pacom-floor-btn ${w.id===d.floorId?"is-active":""} ${Y?"":"is-locked"}"
              data-nav-scope="floor:${$(d.projectId)}:${$(d.buildingId)}:${$(w.id)}" title="${$(w.name)}${Y?J?` · ${h} 条告警`:"":"（无权限）"}">
              ${$(w.name.replace("F",""))}
              ${J?'<span class="pacom-floor-alert-dot"></span>':""}
            </button>`}).join("")}
      </nav>

      <div class="pacom-canvas-tools" aria-label="画布工具">
        <button type="button" class="pacom-tool-btn" data-zoom="reset" title="复位视图" aria-label="复位视图">⟲</button>
        <div class="pacom-tool-divider" aria-hidden="true"></div>
        <button type="button" class="pacom-tool-btn" data-zoom="in" title="放大" aria-label="放大">＋</button>
        <button type="button" class="pacom-tool-btn" data-zoom="out" title="缩小" aria-label="缩小">－</button>
      </div>

      ${p?"":`
        <div class="lov-layer-bar" role="group" aria-label="平面图图层切换">
          <button type="button" class="lov-layer-btn" aria-pressed="${L==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${L==="temp"}" data-canvas-layer="temp">温度热区</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${L==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${L==="alarms"}" data-canvas-layer="alarms">告警叠加${F.filter(w=>w.status==="active").length>0?` (${F.filter(w=>w.status==="active").length})`:""}</button>
        </div>`}

      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${p?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${$(p)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${H}px, ${T}px) scale(${D});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${$(x?.plan?.imageUrl??"./media/7F.webp")}" alt="E栋 ${$(x?.name??"7F")} 平面图" />
                  ${G.map((w,Y)=>{const J=pt[w.id];if(!J)return"";const le=_===w.id,de=["23.2°C","24.6°C","22.8°C","23.9°C"],ue=["有人 74%","会议中","有人 52%","空闲"],ae=L==="temp"?` · ${de[Y%de.length]}`:L==="occupancy"?` · ${ue[Y%ue.length]}`:"",re=L==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":L==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${le?"is-active":""}"
                          style="left:${J.left}%; top:${J.top}%; width:${J.width}%; height:${J.height}%; ${le?"":re}"
                          data-filter-zone="${$(le?"all":w.id)}"
                          title="${$(w.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${$(w.name.replace(/^7F\s*/,""))}${ae}</span>
                        </button>`}).join("")}
                  ${O.filter(w=>w.planPoint).map(w=>{const Y=F.some(de=>de.deviceId===w.id&&de.status==="active"),J=_!=="all"&&w.logicalZoneId!==_||L==="alarms"&&!Y,le=L==="alarms"&&Y?"background:var(--pacom-status-critical);":"";return`
                        <button type="button" class="pacom-pin ${w.id===U&&N?"is-selected":""} ${w.connectivity==="offline"?"pacom-pin--offline":""} ${J?"pacom-pin--dimmed":""}"
                          style="left:${(w.planPoint.x*100).toFixed(2)}%; top:${(w.planPoint.y*100).toFixed(2)}%; ${le}"
                          data-pin-device="${$(w.id)}" title="${$(w.name)}">
                          <span class="pacom-dot ${Y?"pacom-dot--critical":w.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${$(dt(w))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>

      ${p?"":`<div class="pacom-canvas-hint" data-role="canvas-hint">缩放 ${Math.round(D*100)}% · 滚轮缩放 · 拖动平移 · 双击复位</div>`}
      ${f()}
    `}function f(){if(y.level!=="floor"||!N)return"";const d=O.find(w=>w.id===U);if(!d)return"";const E=d.category==="lighting",r=d.category==="hvac",h=Number(d.telemetry.dimming?.value??50),x=Number(d.telemetry.setpoint?.value??24),Q=m.has(d.id),G=E?[{label:"当前开关",value:h>0?"开启":"关闭"},{label:"当前亮度",value:`${h}%`},{label:"实时功率",value:h>0?`${Math.round(h*1.4)} W`:"0 W"},{label:"运行模式",value:Q?"人工覆盖":"自动策略"}]:r?[{label:"室内温度",value:`${d.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${x.toFixed(1)}°C`},{label:"运行工况",value:d.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:Q?"人工覆盖":"自动策略"}]:d.category==="sensor"?[{label:"实时温度",value:`${d.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${d.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${d.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:d.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:d.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:d.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:d.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:d.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${$(d.name)}</h2>
            <div class="pacom-row-sub">${$(e(d.logicalZoneId))} · ${$(Me[d.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${Q?"pacom-badge--warning":"pacom-badge--neutral"}">
              ${Q?"人工覆盖":"自动策略"}
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
          ${G.map(w=>`
              <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                <span class="pacom-row-sub">${w.label}</span>
                <strong style="font-size:13px; font-weight:500;">${$(w.value)}</strong>
              </div>`).join("")}
        </div>

        ${r?`
            <div class="lov-schematic-strip" aria-label="暖通工况简图">
              <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                <span class="pacom-row-sub">${d.connectivity==="online"?"制冷运转":"通信离线"}</span>
              </div>
              <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${$(d.telemetry.temp?.value??"23.8")}°</text>
                <rect x="80" y="8" width="54" height="28" rx="6" fill="${d.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${d.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${d.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${d.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${x.toFixed(1)}°C</text>
              </svg>
            </div>`:""}

        <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="pacom-row-sub">近 24 小时趋势（${E?"亮度 %":r?"温度 °C":d.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
            <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${$(d.id)}">查看完整时序 →</button>
          </div>
          <svg viewBox="0 0 280 42" style="width:100%; height:42px; display:block;">
            <line x1="0" y1="20" x2="280" y2="20" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
            <polyline fill="none" stroke="${d.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${E?"0,34 40,34 80,14 120,10 160,12 200,18 240,12 280,14":r?"0,24 40,26 80,22 120,18 160,16 200,19 240,21 280,18":"0,22 40,23 80,21 120,19 160,18 200,20 240,19 280,20"}" />
          </svg>
        </div>

        ${E||r?`
            <div class="pacom-control-box">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                ${Q&&i?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${$(d.id)}">恢复自动策略</button>`:i?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
              </div>
              ${d.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
              ${E?`
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
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${x-.5}" ${i?"":"disabled"}>-0.5°C</button>
                    <strong>${x.toFixed(1)}°C</strong>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${x+.5}" ${i?"":"disabled"}>+0.5°C</button>
                  </div>`}
            </div>`:""}

        ${C?`
            <div class="pacom-control-box">
              <div style="font-size:12px; font-weight:500;">最近批次：<code>${$(C.batchId)}</code></div>
              <div class="pacom-receipt-list">
                ${C.receipts.map(w=>{const Y=rt[w.status]??{text:w.status,badge:"pacom-badge--neutral"};return`
                      <div class="pacom-receipt-item">
                        <div>
                          <div><strong>${$(w.deviceId)}</strong> · ${$(w.command)} → ${$(w.targetValue)}</div>
                          ${w.errorMessage?`<div style="color:var(--pacom-status-critical);">${$(w.errorMessage)}</div>`:""}
                        </div>
                        <span class="pacom-badge ${Y.badge}">${Y.text}</span>
                      </div>`}).join("")}
              </div>
            </div>`:""}

        <details class="lov-tech-details">
          <summary><span>技术标识与硬件绑定</span><span>▾</span></summary>
          <div class="pacom-kv-grid">
            <span class="pacom-kv-label">设备编号</span><span><code>${$(d.id)}</code> · v${d.version}</span>
            <span class="pacom-kv-label">图上点位</span><span>${d.planPoint?`x=${d.planPoint.x.toFixed(2)}, y=${d.planPoint.y.toFixed(2)} (图 v${d.planPoint.planVersion})`:"未标点"}</span>
            <span class="pacom-kv-label">物理安装</span><span>${d.physicalInstalled?"现场已确认":"待现场复核"}</span>
            <span class="pacom-kv-label">硬件绑定</span><span>${d.hardwareBinding?`${d.hardwareBinding.protocol.toUpperCase()} · ${d.hardwareBinding.networkAddress}`:"未绑定"}</span>
          </div>
        </details>
      </aside>
    `}function W(d){if(d==="all")return{level:"all-projects"};const E=d.split(":");return E[0]==="project"&&E[1]?{level:"project",projectId:E[1]}:E[0]==="building"&&E[1]&&E[2]?{level:"building",projectId:E[1],buildingId:E[2]}:E[0]==="floor"&&E[1]&&E[2]&&E[3]?{level:"floor",projectId:E[1],buildingId:E[2],floorId:E[3]}:{level:"all-projects"}}function te(){const d=O.filter(ae=>ae.connectivity==="online").length,E=O.length?Math.round(d/O.length*100):100,r=F.filter(ae=>ae.status==="active").length,h=n.filter(ae=>ae.status!=="closed"&&ae.status!=="resolved").length,x=y,Q=x.level==="building",G=x.level==="project"?l.projects.find(ae=>ae.id===x.projectId):l.projects[0],w=x.level==="building"?l.buildings.find(ae=>ae.id===x.buildingId):null,Y=x.level==="building"?w?.name??"E栋":x.level==="project"?G?.name??"广实2号园":`全部授权项目（${l.projects.length}）`,J=x.level==="building"?`地上 ${w?.aboveFloors??0} 层 · 建筑面积 ${w?.areaSqm??"-"} m²`:`${G?.city??"广州"} ${G?.address??""} · 共 ${l.buildings.length} 栋楼宇`,le=Q?"418 kWh":"1,248 kWh",de=Math.round(96.2*.45+93.6*.35+E*.2),ue=x.level==="building"?l.floors.filter(ae=>ae.buildingId===x.buildingId).map(ae=>{const re=ae.id===c.floorId,Se=s.scope.allowedFloorIds.includes(ae.id);return`
              <div class="pacom-row" data-nav-scope="floor:${$(x.projectId)}:${$(x.buildingId)}:${$(ae.id)}">
                <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                  <span class="pacom-dot ${re&&r>0?"pacom-dot--warning":Se?"pacom-dot--online":"pacom-dot--offline"}"></span>
                  <div>
                    <div class="pacom-row-title">${$(w?.name??"")} ${$(ae.name)}</div>
                    <div class="pacom-row-sub">${ae.plan?"2D 平面控图就绪":"待上传图纸"}${re&&r>0?` · ${r} 条待处理告警`:""}</div>
                  </div>
                </div>
                <span class="pacom-badge ${Se?"pacom-badge--online":"pacom-badge--warning"}">${Se?"进入平面图 →":"未授权"}</span>
              </div>`}).join(""):l.buildings.filter(ae=>x.level!=="project"||ae.projectId===x.projectId).map(ae=>{const re=ae.id===c.buildingId;return`
              <div class="pacom-row" data-nav-scope="building:${$(ae.projectId)}:${$(ae.id)}">
                <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                  <span class="pacom-dot ${re&&r>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <div>
                    <div class="pacom-row-title">${$(ae.name)}</div>
                    <div class="pacom-row-sub">地上 ${ae.aboveFloors} 层 · ${ae.areaSqm??"-"} m² · 舒适度 96.2%</div>
                  </div>
                </div>
                <span class="pacom-badge ${re?"pacom-badge--accent":"pacom-badge--neutral"}">${re?`在线 ${E}% · 告警 ${r}`:"运行平稳"}</span>
              </div>`}).join("");return`
      <section class="lov-bento-shell">
        <div class="lov-bento-left">
          <div class="pacom-card" style="padding:16px 20px; gap:12px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px; flex-wrap:wrap;">
              <div>
                <div style="display:flex; align-items:center; gap:8px;">
                  <strong style="font-size:16px; font-weight:500;">${$(Y)}</strong>
                  <span class="pacom-badge pacom-badge--online">综合健康 ${de} 分</span>
                </div>
                <div class="pacom-row-sub" style="margin-top:4px;">${$(J)}</div>
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

          <div class="lov-kpi-strip" role="region" aria-label="空间核心绩效">
            <button type="button" class="lov-kpi-cell" data-go-analysis="environment" style="border:0; background:transparent; text-align:left; cursor:pointer;">
              <span class="lov-kpi-label">舒适度达标率</span>
              <div class="lov-kpi-value">96.2<span class="lov-kpi-unit">%</span></div>
              <svg viewBox="0 0 120 24" style="width:100%; height:22px;"><polyline fill="none" stroke="var(--pacom-status-online)" stroke-width="1.8" points="0,16 20,14 40,15 60,11 80,10 100,8 120,7" /></svg>
              <span class="lov-kpi-delta">较上周 +1.2% · 点击看分析 →</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-go-analysis="energy" style="border:0; background:transparent; text-align:left; cursor:pointer;">
              <span class="lov-kpi-label">今日总能耗</span>
              <div class="lov-kpi-value">${le}</div>
              <svg viewBox="0 0 120 24" style="width:100%; height:22px;"><polyline fill="none" stroke="var(--pacom-accent-solid)" stroke-width="1.8" points="0,8 20,10 40,12 60,11 80,15 100,14 120,17" /></svg>
              <span class="lov-kpi-delta">较基线 -6.4% · 节能良好</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-go-analysis="health" style="border:0; background:transparent; text-align:left; cursor:pointer;">
              <span class="lov-kpi-label">设备在线率</span>
              <div class="lov-kpi-value">${E}<span class="lov-kpi-unit">%（${d}/${O.length}）</span></div>
              <svg viewBox="0 0 120 24" style="width:100%; height:22px;"><polyline fill="none" stroke="var(--pacom-brand)" stroke-width="1.8" points="0,6 20,6 40,6 60,8 80,12 100,12 120,12" /></svg>
              <span class="lov-kpi-delta">1 台 VAV 离线待复核</span>
            </button>
          </div>

          <div class="lov-grid-2" style="flex:1; min-height:0;">
            <div class="pacom-card" style="padding:16px 18px; gap:10px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <strong style="font-size:14px; font-weight:500;">告警与工单闭环态势</strong>
                <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-go-alarms="1">进入告警中心 →</button>
              </div>
              <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px;">
                <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">待处理</span><strong style="color:var(--pacom-status-warning);">${r} 条</strong></div>
                <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">处理中工单</span><strong>${h} 单</strong></div>
                <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">月可节省</span><strong style="color:var(--pacom-status-online);">¥ 1,420</strong></div>
              </div>
              <div style="margin-top:auto;">
                <div class="pacom-row-sub" style="margin-bottom:4px;">近 7 天每日告警触发</div>
                <svg viewBox="0 0 210 44" style="width:100%; height:44px; display:block;">
                  ${[2,1,3,2,1,2,Math.max(1,r)].map((ae,re)=>`<rect x="${re*30+6}" y="${38-ae*9}" width="18" height="${ae*9}" rx="4" fill="${re===6?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.82" />`).join("")}
                </svg>
              </div>
            </div>

            <div class="pacom-card" style="padding:16px 18px; gap:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <strong style="font-size:14px; font-weight:500;">${Q?"楼层健康与告警导览":"楼宇健康与告警导览"}</strong>
                <span class="pacom-row-sub">点击下钻</span>
              </div>
              <div style="display:flex; flex-direction:column; gap:2px; overflow-y:auto;">
                ${ue}
              </div>
            </div>
          </div>
        </div>

        <main class="pacom-right-pane">
          ${g()}
        </main>
      </section>
    `}function se(d,E,r){if(!K)return"";const h=Math.max(0,O.length-d);return`
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
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">本层均温 / 在线</span><strong>${$(r)}°C · ${d}/${O.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${E} 告警 · ${h} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖中设备</span><strong>${m.size} 台</strong></div>
        </div>
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">处理活跃告警 →</button>
        </div>
      </div>
    `}function ee(){const d=F.filter(x=>x.status==="active").length,E=O.filter(x=>x.connectivity==="online").length,r=ge(),h=O.find(x=>x.category==="sensor")?.telemetry.temp?.value??"23.4";t.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:10px; min-width:0; flex:1;">
              <h1 class="pacom-title" style="flex-shrink:0;">空间总览</h1>
              ${r?`<button type="button" class="lov-icon-btn" data-nav-scope="${$(r)}" title="返回上一空间层级" aria-label="返回上一空间层级">←</button>`:""}
              <div class="pacom-scope-pill" style="width:min(268px, 32vw); flex-shrink:1;" title="项目 / 楼宇 / 楼层空间范围切换">
                <select name="homeScope" data-role="scope-select" aria-label="选择查看范围">
                  ${be()}
                </select>
                <span class="pacom-scope-chevron">▾</span>
              </div>
              ${y.level==="floor"?`
                  <div class="pacom-tabs" role="tablist" style="flex-shrink:0;">
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${B==="devices"}" data-tab="devices">设备</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${B==="zones"}" data-tab="zones">区域</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${B==="alarms"}" data-tab="alarms">
                      告警 ${d>0?`<span class="pacom-badge pacom-badge--warning">${d}</span>`:""}
                    </button>
                  </div>`:""}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${y.level==="floor"&&!p?`<button type="button" class="pacom-badge pacom-badge--online" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-briefing="1" title="点击查看今日运行简报">在线 ${E}/${O.length} · ${$(h)}°C · 简报 ▾</button>`:o?'<span class="pacom-badge pacom-badge--neutral"><span class="pacom-dot pacom-dot--offline"></span>演示模式</span>':'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>'}
              <div class="pacom-tabs pacom-mobile-view-switch" role="group" aria-label="窄屏视图切换">
                <button type="button" class="pacom-tab" aria-selected="${A==="list"}" data-mobile-pane-btn="list">列表</button>
                <button type="button" class="pacom-tab" aria-selected="${A==="canvas"}" data-mobile-pane-btn="canvas">平面图</button>
              </div>
            </div>
          </div>
        </header>

        ${se(E,d,h)}

        ${y.level==="floor"?`
            <section class="pacom-split" data-mobile-pane="${A}">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:${j}px;">
                ${Fe()}
              </aside>
              <div class="pacom-splitter" role="separator" tabindex="0" aria-orientation="vertical" aria-label="调整左右栏宽度" data-role="splitter"></div>
              <main class="pacom-right-pane">
                ${g()}
              </main>
            </section>`:te()}
      </div>
    `,pe()}function pe(){t.querySelector('[data-role="scope-select"]')?.addEventListener("change",r=>{v(W(r.currentTarget.value))}),t.querySelectorAll("[data-nav-scope]").forEach(r=>{r.addEventListener("click",()=>{r.dataset.navScope&&v(W(r.dataset.navScope))})}),t.querySelectorAll("[data-tab]").forEach(r=>{r.addEventListener("click",()=>{B=r.dataset.tab,ee()})}),t.querySelectorAll("[data-mobile-pane-btn]").forEach(r=>{r.addEventListener("click",()=>{A=r.dataset.mobilePaneBtn,ee()})}),t.querySelector('[data-role="search"]')?.addEventListener("input",r=>{P=r.currentTarget.value,Z()}),t.querySelector('[data-role="category"]')?.addEventListener("change",r=>{M=r.currentTarget.value,ee()}),t.querySelectorAll("[data-filter-zone]").forEach(r=>{r.addEventListener("click",h=>{h.stopPropagation(),_=r.dataset.filterZone??"all",ee()})}),t.querySelectorAll("[data-select-device]").forEach(r=>{r.addEventListener("click",h=>{h.target.tagName!=="INPUT"&&(U=r.dataset.selectDevice??null,N=!0,A="canvas",ee())})}),t.querySelectorAll("[data-check-device]").forEach(r=>{r.addEventListener("change",()=>{const h=r.dataset.checkDevice;h&&(r.checked?X.add(h):X.delete(h),ee())})}),t.querySelectorAll("[data-pin-device]").forEach(r=>{r.addEventListener("click",h=>{h.stopPropagation(),U=r.dataset.pinDevice??null,N=!0,ee()})}),t.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{N=!1,ee()}),t.querySelector("[data-release-override]")?.addEventListener("click",r=>{const h=r.currentTarget.dataset.releaseOverride;h&&(m.delete(h),ee())}),t.querySelectorAll("[data-zone-power]").forEach(r=>{r.addEventListener("click",h=>{h.stopPropagation();const x=r.dataset.zonePower,Q=r.dataset.zoneVal==="true";if(!x)return;const G=O.filter(Y=>Y.logicalZoneId===x&&Y.category==="lighting").map(Y=>Y.id),w=O.filter(Y=>Y.logicalZoneId===x&&Y.category==="hvac").map(Y=>Y.id);G.length?k(G,"lighting.power",Q):w.length&&k(w,"hvac.power",Q)})}),t.querySelectorAll("[data-locate-device]").forEach(r=>{r.addEventListener("click",()=>{const h=r.dataset.locateDevice;h&&(U=h,N=!0,A="canvas",ee())})}),t.querySelectorAll("[data-go-alarms]").forEach(r=>{r.addEventListener("click",()=>{window.location.hash="#alarms"})}),t.querySelectorAll("[data-go-analysis]").forEach(r=>{r.addEventListener("click",()=>{const h=r.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(h)}`})}),t.querySelectorAll("[data-go-timeseries]").forEach(r=>{r.addEventListener("click",()=>{const h=r.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(h)}`})}),t.querySelectorAll("[data-toggle-briefing]").forEach(r=>{r.addEventListener("click",()=>{K=!K,ee()})}),t.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const r=O.filter(Y=>Y.connectivity==="online").length,h=F.filter(Y=>Y.status==="active").length,x=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${r}/${O.length}（离线 ${O.length-r} 台）`,`待处理告警：${h} 条`,`人工覆盖中：${m.size} 台`].join(`
`),Q=new Blob([x],{type:"text/plain;charset=utf-8;"}),G=URL.createObjectURL(Q),w=document.createElement("a");w.href=G,w.download="pacom-daily-briefing.txt",w.click(),URL.revokeObjectURL(G)}),t.querySelectorAll("[data-ctrl-cmd]").forEach(r=>{r.addEventListener("click",()=>{if(!U||!r.dataset.ctrlCmd)return;const h=r.dataset.ctrlVal??"",x=h==="true"?!0:h==="false"?!1:Number(h);k([U],r.dataset.ctrlCmd,x)})}),t.querySelector("[data-ctrl-slider]")?.addEventListener("change",r=>{const h=r.currentTarget;!U||!h.dataset.ctrlSlider||k([U],h.dataset.ctrlSlider,Number(h.value))}),t.querySelectorAll("[data-batch-cmd]").forEach(r=>{r.addEventListener("click",()=>{const h=Array.from(X),x=r.dataset.batchVal??"",Q=x==="true"?!0:x==="false"?!1:x;k(h,r.dataset.batchCmd,Q)})}),t.querySelectorAll("[data-ack-alarm]").forEach(r=>{r.addEventListener("click",async()=>{!r.dataset.ackAlarm||y.level!=="floor"||!b||(await a.acknowledgeAlarm(r.dataset.ackAlarm,"首页快速确认"),F=await a.listAlarms(y.floorId),ee())})}),t.querySelectorAll("[data-canvas-layer]").forEach(r=>{r.addEventListener("click",()=>{const h=r.dataset.canvasLayer;h&&(L=h,ee())})}),t.querySelectorAll("[data-zoom]").forEach(r=>{r.addEventListener("click",()=>{const h=r.dataset.zoom;h==="in"?D=Math.min(2.6,Number((D+.2).toFixed(2))):h==="out"?D=Math.max(.6,Number((D-.2).toFixed(2))):(D=1,H=0,T=0),oe()})});const d=t.querySelector('[data-role="canvas-stage"]');if(d&&!p){let r=!1,h=0,x=0,Q=0,G=0;d.addEventListener("pointerdown",Y=>{Y.target?.closest("button, input, select, .pacom-drawer")||(r=!0,h=Y.clientX,x=Y.clientY,Q=H,G=T,d.classList.add("is-panning"),d.setPointerCapture?.(Y.pointerId))}),d.addEventListener("pointermove",Y=>{r&&(H=Q+(Y.clientX-h),T=G+(Y.clientY-x),oe())});const w=()=>{r&&(r=!1,d.classList.remove("is-panning"))};d.addEventListener("pointerup",w),d.addEventListener("pointercancel",w),d.addEventListener("wheel",Y=>{Y.preventDefault();const J=Y.deltaY<0?.12:-.12;D=Math.max(.6,Math.min(2.6,Number((D+J).toFixed(2)))),oe()},{passive:!1}),d.addEventListener("dblclick",Y=>{Y.target?.closest("button")||(D=1,H=0,T=0,oe())})}const E=t.querySelector('[data-role="splitter"]');E?.addEventListener("pointerdown",r=>{const h=r.clientX,x=j;E.classList.add("is-dragging");const Q=w=>{j=Math.max(320,Math.min(640,x+(w.clientX-h)));const Y=t.querySelector(".pacom-left-pane");Y&&Y.style.setProperty("--pacom-sidebar-width",`${j}px`)},G=()=>{E.classList.remove("is-dragging"),localStorage.setItem(Ae,String(Math.round(j))),window.removeEventListener("pointermove",Q),window.removeEventListener("pointerup",G)};window.addEventListener("pointermove",Q),window.addEventListener("pointerup",G)}),E?.addEventListener("keydown",r=>{if(r.key==="ArrowLeft")r.preventDefault(),j=Math.max(320,j-16);else if(r.key==="ArrowRight")r.preventDefault(),j=Math.min(640,j+16);else if(r.key==="Home")r.preventDefault(),j=320;else if(r.key==="End")r.preventDefault(),j=640;else return;localStorage.setItem(Ae,String(Math.round(j)));const h=t.querySelector(".pacom-left-pane");h&&h.style.setProperty("--pacom-sidebar-width",`${j}px`)})}await v(y,!0)}const mt=new Set(["lighting","hvac","alarm_rules"]),Oe={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},xe=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function gt(t){const a=new Set;for(const s of t.actions)s.command.startsWith("lighting")?a.add("照明"):s.command.startsWith("hvac")?a.add("暖通"):a.add("综合");return Array.from(a)}function bt(t,a,s){const l=s?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
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
  `}async function ht(t,a,s){let[l,o,i]=await Promise.all([a.listScenes(c.floorId),a.getRuntimeSettings(c.projectId),a.getFloorDevices(c.floorId).catch(()=>[])]),b="manual",I="balanced",y="all",B=null,A="",P=!1,M=!1,_=!1,q="all",V=null,z="",U="",N=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const K=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],L=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],m=[{deviceId:i[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],X=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${o.calendar.workdayStart} – ${o.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${o.calendar.nightGuardStart} – 次日 ${o.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],O=a.subscribeFloorEvents(c.floorId,async n=>{n.type==="control.receipt.updated"&&B?.batchId===n.batchId&&(B=await a.getControlBatch(n.batchId),F())});function F(){const n=A.trim().toLowerCase(),C=n?l.filter(e=>`${e.name} ${e.description}`.toLowerCase().includes(n)):l,p=o.rules.filter(e=>mt.has(e.category)),D=y==="all"?p:y==="cbm"?[]:p.filter(e=>e.category===y),H=y==="all"||y==="cbm",T=q==="issues"?K.filter(e=>e.status!=="verified"):K,j=xe.find(e=>e.id===I)??xe[1],S=s.scope.canControlDevices,R=s.scope.canEditDeployment;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">智能策略</h1>
              <div class="pacom-tabs" role="tablist" aria-label="智能策略分类">
                <button class="pacom-tab" role="tab" aria-selected="${b==="manual"}" data-scene-tab="manual">快捷场景（${l.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${b==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
                <button class="pacom-tab" role="tab" aria-selected="${b==="rules"}" data-scene-tab="rules">条件联动（${p.length+L.length}）</button>
              </div>
            </div>

            <div class="pacom-header-meta">
              <button type="button" class="pacom-badge ${N.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${N.length>0?`人工覆盖中：${N.length} 台 ▾`:"全部自动托管 ✓"}
              </button>
              <button type="button" class="pacom-btn ${_?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${K.length}）</button>
              ${b==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${P?"收起新建表单":"+ 新建场景"}</button>`:""}
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${z?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${z}</span></div>`:""}
          ${U?`<div class="pacom-alert-banner">${U}</div>`:""}

          ${M?`
              <section class="lov-section">
                <div class="lov-section-head">
                  <h2 class="lov-section-title">当前处于「人工覆盖」状态的设备（自动策略已暂停）</h2>
                  <div style="display:flex; gap:8px;">
                    ${N.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${S?"":"disabled"}>全部恢复自动策略</button>`:""}
                    <button type="button" class="pacom-btn pacom-btn--ghost" data-toggle-overrides="1">收起</button>
                  </div>
                </div>
                <div class="lov-settings-card">
                  ${N.length===0?'<div class="lov-empty-state" style="padding:20px;"><strong>当前无人工覆盖设备</strong><span>所有可控设备均按自动排程与节能策略托管运行。</span></div>':N.map(e=>`
                            <div class="lov-setting-row">
                              <div class="lov-setting-meta">
                                <span class="lov-setting-title">${e.name}</span>
                                <span class="lov-setting-desc">${e.reason}</span>
                              </div>
                              <button type="button" class="pacom-btn" data-release-one="${e.id}" ${S?"":"disabled"}>恢复自动</button>
                            </div>`).join("")}
                </div>
              </section>`:""}

          ${_?`
              <section class="lov-section">
                <div class="lov-section-head">
                  <h2 class="lov-section-title">策略指令执行流水（Viewing Commands）</h2>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${q==="all"}" data-log-filter="all">全部</button>
                      <button class="pacom-tab" aria-selected="${q==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                    </div>
                    <button type="button" class="pacom-btn pacom-btn--ghost" data-toggle-cmdlog="1">收起</button>
                  </div>
                </div>
                <div class="lov-table-card">
                  <div class="lov-table-wrap">
                    <table class="lov-table">
                      <thead>
                        <tr>
                          <th>执行时间</th>
                          <th>触发来源</th>
                          <th>目标设备</th>
                          <th>下发指令</th>
                          <th>回读状态</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${T.map(e=>`
                            <tr>
                              <td><span class="pacom-row-sub">${e.at}</span></td>
                              <td><span class="pacom-badge pacom-badge--neutral">${e.source}</span></td>
                              <td><strong>${e.device}</strong></td>
                              <td>${e.action}</td>
                              <td>
                                <span class="pacom-badge ${e.status==="verified"?"pacom-badge--online":e.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                                  ${e.status==="verified"?"回读已确认":e.status==="overridden"?"被人工覆盖跳过":"回读超时"}
                                </span>
                              </td>
                            </tr>`).join("")}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>`:""}

          ${b==="manual"?`
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

              ${P?`
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
                          <span class="lov-setting-title">联动动作列表（${m.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${m.map((e,u)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" data-draft-dev="${u}" aria-label="目标设备">
                                ${i.map(k=>`<option value="${k.id}" ${k.id===e.deviceId?"selected":""}>${k.name}</option>`).join("")}
                              </select>
                              <select class="pacom-select" data-draft-cmd="${u}" aria-label="执行指令">
                                <option value="lighting.dimming" ${e.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${e.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${e.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" data-draft-val="${u}" value="${e.targetValue}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${u}" ${m.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="lov-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit">保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="lov-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${A}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${C.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${C.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="lov-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':C.map(e=>{const u=gt(e);return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${e.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${u.map(k=>`<span class="pacom-badge pacom-badge--accent">${k}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${e.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${e.description}</p>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${e.lastExecutedAt?e.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${e.id}" ${S?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:b==="schedule_oss"?`
                <div class="lov-kpi-strip" role="region" aria-label="优化启停运行状态">
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">当前优化启停模式</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${j.title}</div>
                    <span class="lov-kpi-delta">${j.estSaving}</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">明日预测预启动时刻</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${j.predictedStart}</div>
                    <span class="lov-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">本周累计节省运行工时</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${j.savedHours}</div>
                    <span class="lov-kpi-delta">当前人工覆盖挂起：${N.length} 台</span>
                  </div>
                </div>

                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="lov-mode-grid">
                    ${xe.map(e=>`
                      <button type="button" class="lov-mode-card" aria-pressed="${I===e.id}" data-oss-mode="${e.id}" ${S?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${e.title}</strong>
                          <span class="pacom-badge ${I===e.id?"pacom-badge--online":"pacom-badge--neutral"}">${I===e.id?"当前生效":e.badge}</span>
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
                          ${X.map(e=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${e.name}</span>
                                    ${e.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${e.windowLabel}</div>
                                </td>
                                <td>${bt(e.startHour,e.endHour,e.enabled)}</td>
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
                                      ${S?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(e=>{const u=e==="all"?"全部":Oe[e]??e,k=e==="all"?p.length+L.length:e==="cbm"?L.length:p.filter(Z=>Z.category===e).length;return`
                            <button type="button" class="lov-count-pill" aria-pressed="${y===e}" data-rule-cat="${e}">
                              <span>${u}</span><span class="lov-count-num">${k}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="lov-settings-card">
                    ${D.map(e=>{const u=V===e.id;return`
                          <div class="lov-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="lov-setting-meta">
                                <span class="lov-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${Oe[e.category]??e.category}</span>
                                  <span>${e.name}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${e.version}</span>
                                </span>
                                <span class="lov-setting-desc">${e.summary} · 范围：${e.scopeLabel} · 回执：${e.receiptSummary??"已同步"}</span>
                              </div>
                              <div class="lov-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${e.id}">${u?"收起逻辑":"查看逻辑"}</button>
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
                                  ${R?"":"disabled"}
                                >
                                  <span class="lov-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${u?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${e.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":e.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${e.scopeLabel} · 当前版本：v${e.version} · 最近同步：${e.receiptSummary??"已同步"}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${H?L.map(e=>{const u=Math.min(100,Math.round(e.runtimeHours/e.thresholdHours*100));return`
                                <div class="lov-setting-row">
                                  <div class="lov-setting-meta">
                                    <span class="lov-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${e.name}</span>
                                      <span class="pacom-badge ${u>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${e.runtimeHours} / ${e.thresholdHours} h (${u}%)</span>
                                    </span>
                                    <span class="lov-setting-desc">绑定设备：${e.equipment} · 上次重置：${e.lastReset}</span>
                                  </div>
                                  <div class="lov-setting-control">
                                    <span class="pacom-row-sub">${e.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="lov-switch" role="switch" aria-checked="${e.enabled}" data-toggle-cbm="${e.id}" aria-label="切换 ${e.name}" ${R?"":"disabled"}>
                                      <span class="lov-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,t.querySelectorAll("[data-scene-tab]").forEach(e=>{e.addEventListener("click",()=>{b=e.dataset.sceneTab??"manual",z="",F()})}),t.querySelectorAll("[data-toggle-overrides]").forEach(e=>{e.addEventListener("click",()=>{M=!M,F()})}),t.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{N=[],z="已释放全部人工覆盖设备，自动节能策略已恢复托管。",F()}),t.querySelectorAll("[data-release-one]").forEach(e=>{e.addEventListener("click",()=>{const u=e.dataset.releaseOne;N=N.filter(k=>k.id!==u),z="已恢复该设备的自动策略托管。",F()})}),t.querySelectorAll("[data-toggle-cmdlog]").forEach(e=>{e.addEventListener("click",()=>{_=!_,F()})}),t.querySelectorAll("[data-log-filter]").forEach(e=>{e.addEventListener("click",()=>{q=e.dataset.logFilter??"all",F()})}),t.querySelector("[data-close-batch]")?.addEventListener("click",()=>{B=null,F()}),t.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),t.querySelectorAll("[data-oss-mode]").forEach(e=>{e.addEventListener("click",()=>{const u=e.dataset.ossMode;if(!u)return;I=u;const k=xe.find(Z=>Z.id===u);z=`已切换至「${k?.title??u}」模式（明日预测启动 ${k?.predictedStart??""}）。`,F()})}),t.querySelectorAll("[data-toggle-schedule]").forEach(e=>{e.addEventListener("click",()=>{const u=e.dataset.toggleSchedule,k=X.find(Z=>Z.id===u);k&&(k.enabled=!k.enabled,z=`排程「${k.name}」已${k.enabled?"恢复启用":"临时暂停"}。`,F())})}),t.querySelectorAll("[data-rule-cat]").forEach(e=>{e.addEventListener("click",()=>{y=e.dataset.ruleCat??"all",F()})}),t.querySelectorAll("[data-expand-rule]").forEach(e=>{e.addEventListener("click",()=>{const u=e.dataset.expandRule??null;V=V===u?null:u,F()})}),t.querySelectorAll("[data-toggle-cbm]").forEach(e=>{e.addEventListener("click",()=>{const u=L.find(k=>k.id===e.dataset.toggleCbm);u&&(u.enabled=!u.enabled,z=`工时维保规则「${u.name}」已${u.enabled?"启用":"停用"}。`,F())})}),t.querySelectorAll("[data-toggle-strategy-rule]").forEach(e=>{e.addEventListener("click",async()=>{U="";try{await a.toggleRuntimeRule(e.dataset.toggleStrategyRule,e.dataset.ruleNext==="true",Number(e.dataset.ruleVer)),o=await a.getRuntimeSettings(c.projectId),z="条件联动规则状态与版本回执已更新。",F()}catch(u){U=u instanceof Error?u.message:String(u),F()}})}),t.querySelectorAll("[data-toggle-create]").forEach(e=>{e.addEventListener("click",()=>{P=!P,F()})}),t.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{m.push({deviceId:i[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),F()}),t.querySelectorAll("[data-del-draft-action]").forEach(e=>{e.addEventListener("click",()=>{const u=Number(e.dataset.delDraftAction);m.length>1&&(m.splice(u,1),F())})}),t.querySelectorAll("[data-draft-dev]").forEach(e=>{e.addEventListener("change",()=>{const u=m[Number(e.dataset.draftDev)];u&&(u.deviceId=e.value)})}),t.querySelectorAll("[data-draft-cmd]").forEach(e=>{e.addEventListener("change",()=>{const u=m[Number(e.dataset.draftCmd)];u&&(u.command=e.value)})}),t.querySelectorAll("[data-draft-val]").forEach(e=>{e.addEventListener("change",()=>{const u=m[Number(e.dataset.draftVal)];u&&(u.targetValue=e.value)})}),t.querySelector("[data-scene-search]")?.addEventListener("input",e=>{const u=e.currentTarget,k=u.selectionStart??u.value.length;A=u.value,F();const Z=t.querySelector("[data-scene-search]");Z&&(Z.focus(),Z.setSelectionRange(k,k))}),t.querySelectorAll("[data-exec-scene]").forEach(e=>{e.addEventListener("click",async()=>{U="";const u=l.find(k=>k.id===e.dataset.execScene);try{B=await a.executeScene(e.dataset.execScene),l=await a.listScenes(c.floorId),K.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:u?.name??"E7F 场景",action:`${B.receipts.length} 台设备联动下发`,status:"verified"}),F()}catch(k){U=k instanceof Error?k.message:String(k),F()}})}),t.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async e=>{e.preventDefault();const u=new FormData(e.currentTarget);try{await a.createScene({projectId:c.projectId,floorId:c.floorId,name:String(u.get("name")??""),description:String(u.get("description")??""),actions:m.map(k=>({deviceId:k.deviceId,command:k.command,targetValue:k.targetValue==="true"?!0:k.targetValue==="false"?!1:Number(k.targetValue)||50}))}),l=await a.listScenes(c.floorId),P=!1,z=`快捷场景已保存（共绑定 ${m.length} 条联动动作）。`,F()}catch(k){U=k instanceof Error?k.message:String(k),F()}})}F(),window.addEventListener("hashchange",()=>O(),{once:!0})}function Le(t,a){return t.length===0?'<div class="lov-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':t.map(s=>`
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
      </div>`).join("")}async function ft(t,a,s){let l="calendar",o=await a.getRuntimeSettings(c.projectId),i=o.calendar.workdayStart,b=o.calendar.workdayEnd,I=o.calendar.nightGuardStart,y=o.calendar.nightGuardEnd,B=!0,A=[];const P=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let M="flat";const _={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},q={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},V={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},z={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},U=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let N="",K="";function L(){const m=s.scope.canEditDeployment,X=o.rules.filter(n=>n.category==="weather_area"),O=o.rules.filter(n=>n.category==="metering_carbon"),F=o.rules.filter(n=>n.category==="templates");t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">运行设置</h1>
              <div class="pacom-tabs" role="tablist" aria-label="运行设置分类">
                <button class="pacom-tab" role="tab" aria-selected="${l==="calendar"}" data-stab="calendar">运行日历</button>
                <button class="pacom-tab" role="tab" aria-selected="${l==="energy_weather"}" data-stab="energy_weather">能碳与气象</button>
                <button class="pacom-tab" role="tab" aria-selected="${l==="guardrails"}" data-stab="guardrails">控制与安全</button>
                <button class="pacom-tab" role="tab" aria-selected="${l==="notifications"}" data-stab="notifications">通知策略</button>
              </div>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">项目范围：广实2号园</span>
              <span class="pacom-badge ${m?"pacom-badge--online":"pacom-badge--warning"}">
                ${m?"可修改并下发配置":"当前角色只读"}
              </span>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:8px 6px 32px;">
          <div style="width:100%; max-width:920px; margin:0 auto; display:flex; flex-direction:column; gap:20px;">
            ${N?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${N}</span></div>`:""}
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
                        <input class="pacom-input" style="width:120px;" type="time" data-cal-start value="${i}" aria-label="工作日上班时间" ${m?"":"disabled"} />
                        <span class="pacom-row-sub">至</span>
                        <input class="pacom-input" style="width:120px;" type="time" data-cal-end value="${b}" aria-label="工作日下班时间" ${m?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">夜间值守巡检窗口</span>
                        <span class="lov-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:120px;" type="time" data-night-start value="${I}" aria-label="夜间值守开始" ${m?"":"disabled"} />
                        <span class="pacom-row-sub">至次日</span>
                        <input class="pacom-input" style="width:120px;" type="time" data-night-end value="${y}" aria-label="夜间值守结束" ${m?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">自动跳过中国法定节假日</span>
                        <span class="lov-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                      </div>
                      <div class="lov-setting-control">
                        <span class="pacom-row-sub">${B?"已开启":"已关闭"}</span>
                        <button type="button" class="lov-switch" role="switch" aria-checked="${B}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${m?"":"disabled"}>
                          <span class="lov-switch-thumb"></span>
                        </button>
                      </div>
                    </div>
                    <div class="lov-setting-row" style="justify-content:flex-end;">
                      <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                      <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${m?"":"disabled"}>保存并校验版本</button>
                    </div>
                  </div>
                </section>

                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">特殊例外日期（加班 / 接待覆盖默认日历）</h2>
                    <span class="pacom-row-sub">共 ${P.length} 条</span>
                  </div>
                  <div class="lov-settings-card">
                    ${P.map(n=>`
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title"><span>${n.date}</span><span class="pacom-badge pacom-badge--accent">${n.mode}</span></span>
                            <span class="lov-setting-desc">${n.label}</span>
                          </div>
                          <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${n.id}" ${m?"":"disabled"}>移除</button>
                        </div>`).join("")}
                    <form data-add-sd-form class="lov-setting-row" style="gap:8px;">
                      <input class="pacom-input" name="date" type="date" style="width:145px; flex:none;" required ${m?"":"disabled"} />
                      <input class="pacom-input" name="label" placeholder="说明（如：重要接待日 / 实验加班）" required ${m?"":"disabled"} />
                      <select class="pacom-select" name="mode" ${m?"":"disabled"}>
                        <option value="保持工作日工况">保持工作日工况</option>
                        <option value="全天节能值守">全天节能值守</option>
                      </select>
                      <button class="pacom-btn" type="submit" ${m?"":"disabled"}>+ 添加例外</button>
                    </form>
                  </div>
                </section>

                ${A.length>0?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">受影响的定时与夜间规则预览</h2>
                        <span class="pacom-row-sub">共 ${A.length} 条</span>
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
                              ${A.map(n=>`
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
                          <select class="pacom-select" data-energy-field="weatherSource" aria-label="室外气象数据源" ${m?"":"disabled"}>
                            <option value="guanzhou_station" ${_.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                            <option value="campus_sensor" ${_.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                          </select>
                        </div>
                      </div>
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">E 栋计费与能效面积（m²）</span>
                          <span class="lov-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                        </div>
                        <div class="lov-setting-control">
                          <input class="pacom-input" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${_.billingArea}" aria-label="计费面积" ${m?"":"disabled"} />
                        </div>
                      </div>
                      ${Le(X,m)}
                    </div>
                  </section>

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">电价与碳排口径</h2>
                      <div class="pacom-tabs">
                        <button class="pacom-tab" aria-selected="${M==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                        <button class="pacom-tab" aria-selected="${M==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                      </div>
                    </div>
                    <div class="lov-settings-card">
                      ${M==="flat"?`
                          <div class="lov-setting-row">
                            <div class="lov-setting-meta">
                              <span class="lov-setting-title">综合电价参考（元 / kWh）</span>
                              <span class="lov-setting-desc">用于数据分析中的月度节能金额估算</span>
                            </div>
                            <div class="lov-setting-control">
                              <input class="pacom-input" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${_.tariffYuan}" aria-label="综合电价" ${m?"":"disabled"} />
                            </div>
                          </div>`:`
                          <div class="lov-setting-row">
                            <div class="lov-setting-meta">
                              <span class="lov-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                              <span class="lov-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                            </div>
                            <div class="lov-setting-control" style="gap:6px;">
                              <span class="pacom-row-sub">峰</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${_.tariffPeak}" ${m?"":"disabled"} />
                              <span class="pacom-row-sub">平</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${_.tariffFlat}" ${m?"":"disabled"} />
                              <span class="pacom-row-sub">谷</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${_.tariffValley}" ${m?"":"disabled"} />
                            </div>
                          </div>`}
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">区域电网碳排放因子</span>
                          <span class="lov-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                        </div>
                        <div class="lov-setting-control">
                          <select class="pacom-select" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${m?"":"disabled"}>
                            <option value="0.5271" ${_.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                            <option value="0.5703" ${_.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                          </select>
                        </div>
                      </div>
                      ${Le(O,m)}
                      <div class="lov-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${m?"":"disabled"}>保存口径参数</button>
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
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="minTemp" value="${q.minTemp}" aria-label="最低设定温度" ${m?"":"disabled"} />
                            <span class="pacom-row-sub">至</span>
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="maxTemp" value="${q.maxTemp}" aria-label="最高设定温度" ${m?"":"disabled"} />
                            <span class="pacom-row-sub">°C</span>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">人工覆盖自动释放时长</span>
                            <span class="lov-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                          </div>
                          <div class="lov-setting-control">
                            <select class="pacom-select" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${m?"":"disabled"}>
                              <option value="2h" ${q.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                              <option value="4h" ${q.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                              <option value="eod" ${q.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                              <option value="permanent" ${q.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                            </select>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">控制指令回读超时阈值（秒）</span>
                            <span class="lov-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                          </div>
                          <div class="lov-setting-control">
                            <input class="pacom-input" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${q.readbackTimeoutSec}" aria-label="回读超时阈值" ${m?"":"disabled"} />
                            <span class="pacom-row-sub">秒</span>
                          </div>
                        </div>
                        <div class="lov-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${m?"":"disabled"}>保存安全边界</button>
                        </div>
                      </div>
                    </section>

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
                            <input class="pacom-input" style="width:72px;" type="number" data-auto-wo="delayMin" value="${V.delayMin}" ${m?"":"disabled"} />
                            <span class="pacom-row-sub">分钟</span>
                            <button type="button" class="lov-switch" role="switch" aria-checked="${V.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${m?"":"disabled"}>
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
                            <select class="pacom-select" data-auto-wo="defaultGroup" aria-label="默认处理组" ${m?"":"disabled"}>
                              <option value="暖通运维组" ${V.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                              <option value="强电照明组" ${V.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                              <option value="园区物业值班组" ${V.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                            </select>
                            <span class="pacom-row-sub">防重</span>
                            <button type="button" class="lov-switch" role="switch" aria-checked="${V.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${m?"":"disabled"}>
                              <span class="lov-switch-thumb"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">标准设备参数模板</h2>
                        <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                      </div>
                      <div class="lov-settings-card">
                        ${Le(F,m)}
                      </div>
                    </section>`:`
                    <section class="lov-section">
                      <h2 class="lov-section-title">定时简报与夜间静默</h2>
                      <div class="lov-settings-card">
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">每日运行与能耗晨间简报</span>
                            <span class="lov-setting-desc">定时汇总昨日能耗偏差、未结工单、舒适度达标与室外天气（首页亦可随时手动查看）</span>
                          </div>
                          <div class="lov-setting-control">
                            <input class="pacom-input" style="width:116px;" type="time" data-digest-time value="${z.dailyDigestTime}" aria-label="每日简报发送时间" />
                            <button type="button" class="lov-switch" role="switch" aria-checked="${z.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报">
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
                            <button type="button" class="lov-switch" role="switch" aria-checked="${z.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰">
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
                              ${U.map(n=>`
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
    `,t.querySelectorAll("[data-stab]").forEach(n=>{n.addEventListener("click",()=>{l=n.dataset.stab??"calendar",N="",K="",L()})}),t.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{B=!B,N=`法定节假日自动跳过已${B?"开启":"关闭"}。`,L()}),t.querySelector("[data-night-start]")?.addEventListener("change",n=>{I=n.currentTarget.value}),t.querySelector("[data-night-end]")?.addEventListener("change",n=>{y=n.currentTarget.value}),t.querySelector("[data-add-sd-form]")?.addEventListener("submit",n=>{n.preventDefault();const C=new FormData(n.currentTarget);P.push({id:`sd-${Date.now()}`,date:String(C.get("date")??""),label:String(C.get("label")??""),mode:String(C.get("mode")??"保持工作日工况")}),N="已添加特殊例外日期，当日自动覆盖默认节假日排程。",L()}),t.querySelectorAll("[data-del-sd]").forEach(n=>{n.addEventListener("click",()=>{const C=P.findIndex(p=>p.id===n.dataset.delSd);C>=0&&P.splice(C,1),L()})}),t.querySelectorAll("[data-tariff-mode]").forEach(n=>{n.addEventListener("click",()=>{M=n.dataset.tariffMode??"flat",L()})}),t.querySelectorAll("[data-energy-field]").forEach(n=>{n.addEventListener("change",()=>{const C=n.dataset.energyField;C&&(_[C]=n.value)})}),t.querySelector("[data-save-energy]")?.addEventListener("click",()=>{N=M==="flat"?`能碳与气象口径已保存（面积 ${_.billingArea} m² · 综合电价 ¥${_.tariffYuan}/kWh · 因子 ${_.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${_.tariffPeak} / 平 ¥${_.tariffFlat} / 谷 ¥${_.tariffValley}）。`,L()}),t.querySelectorAll("[data-guard-field]").forEach(n=>{n.addEventListener("change",()=>{const C=n.dataset.guardField;C&&(q[C]=n.value)})}),t.querySelector("[data-save-guard]")?.addEventListener("click",()=>{N=`控制安全边界已保存（温区 ${q.minTemp}–${q.maxTemp}°C · 超时 ${q.readbackTimeoutSec}s）。`,L()}),t.querySelectorAll("[data-auto-wo]").forEach(n=>{n.addEventListener("change",()=>{const C=n.dataset.autoWo;C&&(V[C]=n.value),N="自动转工单配置已更新。",L()})}),t.querySelectorAll("[data-toggle-autowo]").forEach(n=>{n.addEventListener("click",()=>{const C=n.dataset.toggleAutowo;C&&(V[C]=!V[C],N="自动转工单保护策略已更新。",L())})}),t.querySelector("[data-digest-time]")?.addEventListener("change",n=>{z.dailyDigestTime=n.currentTarget.value,N=`每日晨间简报发送时刻已更新为 ${z.dailyDigestTime}。`,L()}),t.querySelectorAll("[data-notify-key]").forEach(n=>{n.addEventListener("click",()=>{const C=n.dataset.notifyKey;C&&(z[C]=!z[C],N="通知策略偏好已更新。",L())})}),t.querySelectorAll("[data-toggle-nr]").forEach(n=>{n.addEventListener("click",()=>{const C=U.find(p=>p.id===n.dataset.toggleNr);C&&(C.enabled=!C.enabled,N=`工作组「${C.groupName}」的通知分流规则已${C.enabled?"启用":"停用"}。`,L())})}),t.querySelector("[data-cal-start]")?.addEventListener("change",n=>{i=n.currentTarget.value}),t.querySelector("[data-cal-end]")?.addEventListener("change",n=>{b=n.currentTarget.value}),t.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{K="",A=await a.previewCalendarImpact(c.projectId,i,b),L()}),t.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{K="";try{const n=await a.saveWorkCalendar(c.projectId,i,b,o.calendar.version);o={...o,calendar:{...n,nightGuardStart:I,nightGuardEnd:y}},N=`运行日历已保存至 v${n.version}（工作日 ${n.workdayStart}–${n.workdayEnd} · 夜间值守 ${I}–${y}）`,A=[],L()}catch(n){K=n instanceof Error?n.message:String(n),L()}}),t.querySelectorAll("[data-toggle-rule]").forEach(n=>{n.addEventListener("click",async()=>{K="";try{await a.toggleRuntimeRule(n.dataset.toggleRule,n.dataset.ruleNext==="true",Number(n.dataset.ruleVer)),o=await a.getRuntimeSettings(c.projectId),N="策略状态与版本回执已更新。",L()}catch(C){K=C instanceof Error?C.message:String(C),L()}})})}L()}const De="pacom.web.sidebar.collapsed",yt=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,qe=[{id:"home",label:"空间总览",iconSvg:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/>'},{id:"analysis",label:"数据分析",iconSvg:'<path d="M4 19h16"/><path d="M7 16v-5"/><path d="M12 16V7"/><path d="M17 16v-8"/>'},{id:"alarms",label:"告警中心",iconSvg:'<path d="M12 4 3 19h18L12 4Z"/><path d="M12 10v4"/><path d="M12 17h.01"/>'},{id:"scenes",label:"智能策略",iconSvg:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3"/>'},{id:"settings",label:"运行设置",iconSvg:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2.5"/><circle cx="15" cy="17" r="2.5"/>'},{id:"deployment",label:"系统部署",iconSvg:'<rect x="3" y="4" width="7" height="6" rx="1.5"/><rect x="14" y="4" width="7" height="6" rx="1.5"/><rect x="8.5" y="14" width="7" height="6" rx="1.5"/><path d="M6.5 10v2h11v-2M12 12v2"/>'}],je={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"运行设置",deployment:"系统部署",account:"机构与账户"};function Ce(){const t=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return t in je?t:"home"}function ce(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function $t(t,a,s,l){t.classList.remove("bare-login");let o=s,i=Ce(),b=localStorage.getItem(De)==="1",I=!1,y=!1,B="",A=!1,P=0,M={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};const _=a.mode==="demo"&&typeof a.switchDemoRole=="function";async function q(){try{const[T,j,S,R,v]=await Promise.all([a.getSpatialTree(),a.getFloorDevices(c.floorId).catch(()=>[]),a.listAlarms(c.floorId).catch(()=>[]),a.listWorkOrders(c.floorId).catch(()=>[]),a.listScenes(c.floorId).catch(()=>[])]);M={devices:j,zones:T.zones,alarms:S,workOrders:R,scenes:v},P=S.filter(e=>e.status==="active").length,m()}catch{}}function V(){return qe.map(T=>`
        ${T.id==="settings"?'<div class="pacom-nav-divider" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${T.id}" aria-current="${i===T.id?"page":"false"}" title="${T.label}">
          <svg class="pacom-nav-icon" viewBox="0 0 24 24" aria-hidden="true">${T.iconSvg}</svg>
          <span class="pacom-nav-label">${T.label}</span>
          ${T.id==="alarms"&&P>0?`<span class="pacom-nav-count" title="待处理告警 ${P} 条">${P}</span>`:""}
        </button>`).join("")}function z(){const T=B.trim().toLowerCase();if(!A||!T)return"";const j=qe.filter(Z=>Z.label.toLowerCase().includes(T)).slice(0,4),S=M.devices.filter(Z=>`${Z.name} ${Z.id} ${Z.category}`.toLowerCase().includes(T)).slice(0,4),R=M.zones.filter(Z=>Z.name.toLowerCase().includes(T)).slice(0,3),v=M.alarms.filter(Z=>`${Z.title} ${Z.message} ${Z.id}`.toLowerCase().includes(T)).slice(0,3),e=M.workOrders.filter(Z=>`${Z.title} ${Z.id}`.toLowerCase().includes(T)).slice(0,3),u=M.scenes.filter(Z=>`${Z.name} ${Z.description}`.toLowerCase().includes(T)).slice(0,3),k=[];return S.length&&k.push('<div class="pacom-search-group">设备（空间总览）</div>'+S.map(Z=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(Z.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${ce(Z.name)}</span><span class="pacom-badge ${Z.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${Z.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),R.length&&k.push('<div class="pacom-search-group">功能区</div>'+R.map(Z=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(Z.id)}"><span>${ce(Z.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),v.length&&k.push('<div class="pacom-search-group">告警</div>'+v.map(Z=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(Z.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${ce(Z.title)}</span><span class="pacom-badge pacom-badge--warning">${Z.status==="active"?"待处理":"已确认"}</span></button>`).join("")),e.length&&k.push('<div class="pacom-search-group">运维工单</div>'+e.map(Z=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(Z.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${ce(Z.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),u.length&&k.push('<div class="pacom-search-group">智能策略</div>'+u.map(Z=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${ce(Z.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),j.length&&k.push('<div class="pacom-search-group">工作区</div>'+j.map(Z=>`<button type="button" class="pacom-search-hit" data-search-hash="#${Z.id}"><span>${ce(Z.label)}</span><span class="pacom-badge pacom-badge--neutral">菜单</span></button>`).join("")),k.length?`<div class="pacom-search-popover" data-role="search-popover">${k.join("")}</div>`:`<div class="pacom-search-popover" data-role="search-popover"><div class="pacom-nav-empty">未找到与「${ce(B)}」匹配的设备、区域、告警或工单</div></div>`}function U(){t.querySelector('[data-role="search-popover"]')?.remove();const T=t.querySelector(".pacom-nav-search-wrap");if(!T)return;const j=z();if(!j)return;const S=document.createElement("div");S.innerHTML=j.trim();const R=S.firstElementChild;R&&(T.appendChild(R),R.querySelectorAll("[data-search-hash]").forEach(v=>{v.addEventListener("click",()=>{const e=v.dataset.searchHash||"#home";A=!1,B="";const u=t.querySelector('[data-role="nav-search"]');u&&(u.value=""),U(),I=!1,window.location.hash===e?(i=Ce(),n(!0)):window.location.hash=e})}))}function N(){if(!y)return"";const T=o.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${b?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab.jpg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${ce(o.roleLabel)}${_?" · 演示":""}</small>
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
          <span class="pacom-pop-avatar" aria-hidden="true">${ce(T)}</span>
          <span class="pacom-pop-text">
            <b>${ce(o.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${_?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">演示角色切换（RBAC 权限预览）</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(ie).map(j=>{const S=ie[j],R=j===o.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${R}" data-pop-role="${j}">
                      <span class="pacom-pop-text">
                        <b>${ce(S.roleLabel)}</b>
                        <small>${ce(S.displayName)}</small>
                      </span>
                      ${R?'<svg class="pacom-pop-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>':""}
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
    `}async function K(T){switch(document.title=`${je[i]} · PACOM Station`,i){case"home":await vt(T,a,o);return;case"analysis":await tt(T,a);return;case"alarms":await He(T,a,o);return;case"scenes":await ht(T,a,o);return;case"settings":await ft(T,a,o);return;case"deployment":await ct(T,a,o);return;case"account":await Ne(T,a,o,j=>{o=j,n(!0)},L);return}}async function L(){y=!1,I=!1,H();try{await a.logout()}finally{window.location.hash="#login",l()}}function m(){const T=t.querySelector('[data-role="nav-list"]');T&&(T.innerHTML=V(),O())}function X(){t.querySelector('[data-role="org-popover"]')?.remove();const T=t.querySelector('[data-role="org-menu-btn"]');if(T&&T.setAttribute("aria-expanded",String(y)),!y)return;const j=document.createElement("div");j.innerHTML=N().trim();const S=j.firstElementChild;S&&(t.appendChild(S),F())}function O(){t.querySelectorAll("[data-route]").forEach(T=>{T.addEventListener("click",()=>{const j=T.dataset.route;j===i&&!I||(i=j,I=!1,y=!1,window.location.hash=`#${i}`,n(!0))})})}function F(){t.querySelectorAll('[data-pop-act="go-account"]').forEach(T=>{T.addEventListener("click",()=>{y=!1,I=!1,i="account",window.location.hash="#account",n(!0)})}),t.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{L()}),t.querySelectorAll("[data-pop-role]").forEach(T=>{T.addEventListener("click",async()=>{if(!a.switchDemoRole)return;const j=T.dataset.popRole;y=!1,I=!1,o=await a.switchDemoRole(j),await n(!0)})})}async function n(T){const j=t.querySelector('[data-role="main-stage"]');if(!T&&j){const v=t.querySelector(".pacom-nav-rail");v&&(v.classList.toggle("is-collapsed",b),v.classList.toggle("is-mobile-open",I));const e=t.querySelector('[data-role="mobile-scrim"]');e&&e.classList.toggle("is-open",I),X();return}t.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
          <h1 class="pacom-mobile-title">${je[i]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${ce(o.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${I?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${b?"is-collapsed":""} ${I?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${yt}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${b?"展开侧栏":"收起侧栏"}" aria-label="${b?"展开侧栏":"收起侧栏"}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                ${b?'<path d="m9 6 6 6-6 6"/>':'<path d="m15 6-6 6 6 6"/>'}
              </svg>
            </button>
          </div>

          <div class="pacom-nav-search-wrap">
            <svg class="pacom-nav-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>
            </svg>
            <input class="pacom-nav-search" name="navSearch" data-role="nav-search" type="search" placeholder="搜索设备、空间、告警…" value="${ce(B)}" aria-label="全局搜索设备、空间、告警或工单" autocomplete="off" />
          </div>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${V()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${i==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${y}" title="广州国家实验室 · ${ce(o.displayName)}">
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
    `,t.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{b=!b,y=!1,localStorage.setItem(De,b?"1":"0");const v=t.querySelector(".pacom-nav-rail"),e=t.querySelector('[data-role="toggle-sidebar"]');v&&v.classList.toggle("is-collapsed",b),e&&(e.title=b?"展开侧栏":"收起侧栏",e.setAttribute("aria-label",e.title),e.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${b?'<path d="m9 6 6 6-6 6"/>':'<path d="m15 6-6 6 6 6"/>'}</svg>`),X()}),t.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{I=!I,n(!1)}),t.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{I=!1,y=!1,n(!1)});const S=t.querySelector('[data-role="nav-search"]');S?.addEventListener("focus",()=>{A=!0,U()}),S?.addEventListener("input",v=>{B=v.currentTarget.value,A=!0,U()}),t.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",v=>{v.stopPropagation(),y=!y,X()}),O(),X(),U();const R=t.querySelector('[data-role="main-stage"]');R&&await K(R)}const C=T=>{const j=T.target;A&&!j?.closest(".pacom-nav-search-wrap")&&(A=!1,U()),y&&(j?.closest('[data-role="org-popover"]')||j?.closest('[data-role="org-menu-btn"]')||(y=!1,X()))},p=T=>{T.key==="Escape"&&(A?(A=!1,U()):y?(y=!1,X()):I&&(I=!1,n(!1)))},D=()=>{i=Ce(),y=!1,I=!1,n(!0),q()};function H(){document.removeEventListener("click",C),document.removeEventListener("keydown",p),window.removeEventListener("hashchange",D)}document.addEventListener("click",C),document.addEventListener("keydown",p),window.addEventListener("hashchange",D),await n(!0),q()}const wt=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,xt='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',St='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',fe='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>',ze={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},kt={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function It(t){const a=t.replace(/\D/g,"");return a.length===11?`${a.slice(0,3)} •••• ${a.slice(7)}`:t}function ne(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Re(t,a,s){t.classList.add("bare-login"),document.title="登录 · PACOM Station";let l=!1,o=!1,i="",b="",I="",y="",B=!1,A={},P="",M=!1,_="",q=0,V=null,z=null,U="privacy",N="",K="",L="";const m=a.mode==="demo"&&typeof a.switchDemoRole=="function";function X(){V!==null&&(window.clearInterval(V),V=null),t.classList.remove("bare-login")}function O(){q=60,V!==null&&window.clearInterval(V),V=window.setInterval(()=>{q-=1,q<=0&&(q=0,V!==null&&(window.clearInterval(V),V=null));const p=t.querySelector('[data-act="send-sms"]');p&&(p.disabled=q>0,p.textContent=q>0?`${q} 秒后重发`:_?"重新获取":"获取验证码")},1e3)}function F(){if(!z)return"";if(z==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${fe}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${ne(K)}" />
                  </div>
                </div>
                ${L?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${ne(L)}</p>`:""}
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary">发送验证码</button>
            </div>
          </section>
        </div>
      `;if(z==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${fe}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                ${m?"当前为离线演示环境，您可直接通过登录页的「演示角色快速体验」切换 5 类内置角色进入 E7F 工作区。":"正式接入账户服务后，将在此开放自助注册与机构邀请码加入流程。"}
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
              ${m?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">选择演示角色</button>':""}
            </div>
          </section>
        </div>
      `;if(z==="legal"){const p=ze[U],D=["privacy","terms","service"].map(H=>`<button type="button" role="tab" aria-selected="${U===H}" class="au-legal-tab ${U===H?"is-active":""}" data-act="switch-legal" data-tab="${H}">${ze[H].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${fe}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${D}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${p.items.map(H=>`<li>${ne(H)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return z==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${fe}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${N||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:z==="demoRoles"&&m?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择演示角色</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${fe}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(ie).map(p=>{const D=ie[p];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${p}">
                        <div>
                          <b>${ne(D.roleLabel)} · ${ne(D.displayName)}</b>
                          <small>${ne(kt[p])}</small>
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
      `:""}function n(){const p=l?`
        <div class="au-field ${A.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ne(I)}" aria-invalid="${A.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${q>0?"disabled":""}>
              ${q>0?`${q} 秒后重发`:_?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${ne(A.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${_?`验证码已发送至 ${ne(It(_))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${A.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ne(i)}" aria-invalid="${A.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${ne(A.id??"")}</p>
        </div>
      `,D=l?`
        <div class="au-field ${A.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ne(y)}" aria-invalid="${A.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${ne(A.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${A.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${o?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ne(b)}" aria-invalid="${A.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${o?"隐藏密码":"显示密码"}">
              ${o?St:xt}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${ne(A.pwd??"")}</p>
        </div>
      `;t.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${wt}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${M?"disabled":""}>
                  ${p}
                  ${D}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${P?"":"hidden"}>${ne(P)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${B?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${M?"disabled":""}>
                    ${M?"正在登录…":"登录"}
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
                ${m?`<div class="au-demo-bar">
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
      ${F()}
    `,C()}function C(){const p=t.querySelector("#au-id"),D=t.querySelector("#au-pwd"),H=t.querySelector("#au-sphone"),T=t.querySelector("#au-scode"),j=t.querySelector('input[name="keep"]');p?.addEventListener("input",()=>{if(i=p.value,A.id||P){delete A.id,P="",p.closest(".au-field")?.classList.remove("bad");const S=t.querySelector("#au-id-err");S&&(S.textContent="");const R=t.querySelector("#au-login-ferr");R&&(R.hidden=!0)}}),D?.addEventListener("input",()=>{if(b=D.value,A.pwd||P){delete A.pwd,P="",D.closest(".au-field")?.classList.remove("bad");const S=t.querySelector("#au-pwd-err");S&&(S.textContent="");const R=t.querySelector("#au-login-ferr");R&&(R.hidden=!0)}}),H?.addEventListener("input",()=>{if(I=H.value,A.sphone||P){delete A.sphone,P="",H.closest(".au-field")?.classList.remove("bad");const S=t.querySelector("#au-sphone-err");S&&(S.textContent="");const R=t.querySelector("#au-login-ferr");R&&(R.hidden=!0)}}),T?.addEventListener("input",()=>{if(y=T.value.replace(/\D/g,"").slice(0,6),T.value=y,A.scode||P){delete A.scode,P="",T.closest(".au-field")?.classList.remove("bad");const S=t.querySelector("#au-scode-err");S&&(S.textContent="");const R=t.querySelector("#au-login-ferr");R&&(R.hidden=!0)}}),j?.addEventListener("change",()=>{B=j.checked}),t.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{o=!o,n(),t.querySelector("#au-pwd")?.focus()}),t.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{l=!l,A={},P="",n(),t.querySelector(l?"#au-sphone":"#au-id")?.focus()}),t.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const S=I.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(S)){A={sphone:"请输入有效的手机号码"},n(),t.querySelector("#au-sphone")?.focus();return}A={},_=S,O(),n(),t.querySelector("#au-scode")?.focus()}),t.querySelector('form[data-form="login"]')?.addEventListener("submit",async S=>{if(S.preventDefault(),!M){if(A={},P="",l?(I.trim()||(A.sphone="请输入手机号码"),/^\d{6}$/.test(y.trim())||(A.scode="请输入 6 位验证码")):(i.trim()||(A.id="请输入电子邮箱或手机号码"),b||(A.pwd="请输入密码")),Object.keys(A).length>0){n();const R=Object.keys(A)[0];t.querySelector(`#au-${R}`)?.focus();return}M=!0,n();try{const R=await a.login({account:(l?I:i).trim(),password:l?y.trim():b});X(),s(R)}catch(R){M=!1,P=R instanceof Error?R.message:"账户或密码不正确",n()}}}),t.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{K=i.trim(),L="",z="reset",n(),t.querySelector("#au-rs-id")?.focus()}),t.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{z="register",n()}),t.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{z="legal",n()}),t.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{N="",z="contact",n()}),t.querySelectorAll('[data-act="open-demo-roles"]').forEach(S=>{S.addEventListener("click",()=>{z="demoRoles",n()})}),t.querySelectorAll('[data-act="close-modal"]').forEach(S=>{S.addEventListener("click",()=>{z=null,n()})}),t.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",S=>{S.target===S.currentTarget&&(z=null,n())}),t.querySelectorAll('[data-act="switch-legal"]').forEach(S=>{S.addEventListener("click",()=>{const R=S.dataset.tab;R&&(U=R,n())})}),t.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),N="已复制"}catch{N="support@pacom.cn"}n()}),t.querySelector("#au-reset-form")?.addEventListener("submit",S=>{S.preventDefault(),K=t.querySelector("#au-rs-id")?.value.trim()??"",K?m?L="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":L="如账户存在，验证码已发送。":L="请输入电子邮箱或手机号码",n()}),t.querySelectorAll('[data-act="pick-demo-role"]').forEach(S=>{S.addEventListener("click",async()=>{const R=S.dataset.roleId;if(!R||!a.switchDemoRole)return;const v=await a.switchDemoRole(R);X(),s(v)})})}n()}async function Et(){const t=document.getElementById("app");if(t)try{const a=Pe(),s=await a.getSession(),l=async o=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await $t(t,a,o,()=>{Re(t,a,i=>{l(i)})})};if(!s||window.location.hash==="#login"){Re(t,a,o=>{l(o)});return}await l(s)}catch(a){t.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(a)}</div></div>`}}Et();
//# sourceMappingURL=index-ByE_FBnO.js.map
