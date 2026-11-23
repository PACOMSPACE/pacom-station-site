(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const c={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},ne={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[c.projectId,c.project1Id],allowedBuildingIds:[c.buildingId,c.buildingFId],allowedFloorIds:[c.lockedFloor8Id,c.floorId,c.lockedFloor6Id],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[c.projectId],allowedBuildingIds:[c.buildingId,c.buildingFId],allowedFloorIds:[c.lockedFloor8Id,c.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[c.projectId],allowedBuildingIds:[c.buildingId],allowedFloorIds:[c.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[c.projectId],allowedBuildingIds:[c.buildingId],allowedFloorIds:[c.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[c.projectId],allowedBuildingIds:[c.buildingId],allowedFloorIds:[c.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},ye="pacom.web.demo.role";class qe{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){const e=sessionStorage.getItem(ye);e&&ne[e]&&(this.activeSession=structuredClone(ne[e]));const s=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:c.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:s,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:c.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:c.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:c.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:s,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:s,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:s,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:c.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:s,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:c.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:s,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:s,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:s,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:s},{id:"conn-e7f-dali",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:s},{id:"conn-e7f-modbus",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:c.projectId,floorId:c.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:c.projectId,floorId:c.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:c.projectId,floorId:c.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:c.projectId,floorId:c.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:c.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:c.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:c.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:s,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:c.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:c.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:c.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:c.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(ne).map((l,o)=>({userId:l.userId,displayName:l.displayName,email:`${l.role.replaceAll("_",".")}@pacom.local`,role:l.role,roleLabel:l.roleLabel,scopeSummary:l.scope.allowedZoneIds?.length?`E栋 7F（${l.scope.allowedZoneIds.length} 个我的区域）`:`${l.scope.allowedProjectIds.length} 项目 / ${l.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:o===0?s:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(e,s,l,o,n){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:s,endpoint:l,request:n,response:o}),this.traces.length>40&&this.traces.pop()}pushAudit(e,s,l,o){const n=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:n?.displayName??"anonymous",role:n?.role??"member",action:e,target:s,result:l,detail:o})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){if(!e.account.trim()||!e.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const s=e.account.includes("admin")?"org_admin":e.account.includes("eng")?"commissioning_engineer":e.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(ne[s]),sessionStorage.setItem(ye,s),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:e.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(ye),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(e){return this.activeSession=structuredClone(ne[e]),sessionStorage.setItem(ye,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}async getSpatialTree(){const e=this.requireSession(),s=[{id:c.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"},{id:c.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"}],l=[{id:c.buildingId,projectId:c.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.png"},{id:c.buildingFId,projectId:c.projectId,name:"F栋",aboveFloors:12,belowFloors:2,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.png"}],o={projects:s.filter(n=>e.scope.allowedProjectIds.includes(n.id)),buildings:l.filter(n=>e.scope.allowedBuildingIds.includes(n.id)),floors:[{id:c.lockedFloor8Id,buildingId:c.buildingId,kind:"above",level:8,name:"8F",plan:null},{id:c.floorId,buildingId:c.buildingId,kind:"above",level:7,name:"7F",areaSqm:1383.1,plan:{floorId:c.floorId,imageUrl:"./media/7F.webp",planVersion:1,updatedAt:"2026-11-22T00:00:00Z"}},{id:c.lockedFloor6Id,buildingId:c.buildingId,kind:"above",level:6,name:"6F",plan:null}],zones:[{id:"zone-e7f-lab-east",floorId:c.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:c.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:c.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:c.floorId,name:"核心走廊与弱电井",category:"corridor"}]};return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:o.projects.length,buildings:o.buildings.length,floors:o.floors.length}),o}async getFloorDevices(e){const s=this.requireSession();if(!s.scope.allowedFloorIds.includes(e)){const o={code:"FORBIDDEN",status:403,message:`当前角色「${s.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,o),this.pushAudit("floor.read",e,"denied",o.message),new Error(`403 FORBIDDEN: ${o.message}`)}if(e!==c.floorId)return[];let l=structuredClone(this.devices);return s.scope.allowedZoneIds?.length&&(l=l.filter(o=>o.logicalZoneId&&s.scope.allowedZoneIds.includes(o.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:l.length}),l}async dispatchControlBatch(e){const s=this.requireSession();if(!s.scope.canControlDevices||!s.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权下发控制指令`);const l=`batch-e7f-${Date.now().toString(36)}`,o={batchId:l,floorId:e.floorId,createdBy:s.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(n=>({deviceId:n.deviceId,command:n.command,targetValue:n.targetValue,status:"queued"}))};return this.batches.set(l,o),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",o,e),this.pushAudit("control.dispatch",l,"success",`下发 ${e.targets.length} 台设备`),o.receipts.forEach((n,f)=>{const E=this.devices.find(b=>b.id===n.deviceId);setTimeout(()=>{n.status="dispatched",n.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:l,deviceId:n.deviceId,status:"dispatched",at:n.dispatchedAt})},280+f*120),setTimeout(()=>{const b=new Date().toISOString();!E||E.connectivity==="offline"?(n.status="timeout",n.errorCode="GATEWAY_READBACK_TIMEOUT",n.errorMessage="设备离线，网关未收到回读确认",n.verifiedAt=b):(n.status="verified_success",n.observedValue=n.targetValue,n.verifiedAt=b,this.applyObservedTelemetry(E,n.command,n.targetValue,b)),this.emit({type:"control.receipt.updated",batchId:l,deviceId:n.deviceId,status:n.status,observedValue:n.observedValue,at:b})},900+f*220)}),structuredClone(o)}applyObservedTelemetry(e,s,l,o){s==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:l,collectedAt:o,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(l)>0,collectedAt:o,stale:!1})):(s==="lighting.power"||s==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:l,collectedAt:o,stale:!1}:s==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:l,collectedAt:o,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:o,values:{[s]:l}})}async getControlBatch(e){this.requireSession();const s=this.batches.get(e);if(!s)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(s)}async listAlarms(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==c.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,s){const l=this.requireSession();if(!l.scope.canManageAlarms){const n=`角色「${l.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",n),new Error(`403 FORBIDDEN: ${n}`)}const o=this.alarms.find(n=>n.id===e);if(!o)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return o.status="acknowledged",o.acknowledgedAt=new Date().toISOString(),o.acknowledgedBy=l.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,o,{note:s}),this.pushAudit("alarm.acknowledge",e,"success",s),this.emit({type:"alarm.changed",floorId:o.floorId,alarmId:e,status:"acknowledged",at:o.acknowledgedAt}),structuredClone(o)}async listWorkOrders(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==c.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建工单`);const l=new Date().toISOString(),o={id:`wo-e7f-${Date.now().toString(36)}`,projectId:c.projectId,buildingId:c.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:l,updatedAt:l};if(this.workOrders.unshift(o),e.alarmId){const n=this.alarms.find(f=>f.id===e.alarmId);n&&(n.workOrderId=o.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",o,e),this.pushAudit("work_order.create",o.id,"success",o.title),structuredClone(o)}async updateWorkOrderStatus(e,s){const l=this.requireSession();if(!l.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权流转工单`);const o=this.workOrders.find(n=>n.id===e);if(!o)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return o.status=s,o.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,o,{status:s}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${s}`),structuredClone(o)}async updateDevicePlanPoint(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权编辑图纸标点`);const l=this.devices.find(o=>o.id===e.deviceId);if(!l)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(l.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${l.version}，请刷新后重试`);return l.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},l.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,l,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${l.planPoint.x}, ${l.planPoint.y})`),structuredClone(l)}async updateDeviceHardwareBinding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改硬件绑定`);const l=this.devices.find(n=>n.id===e.deviceId);if(!l)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(l.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${l.version}）`);const o=new Date().toISOString();return l.physicalInstalled=e.physicalInstalled,l.physicalVerifiedAt=e.physicalInstalled?o:null,l.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:o,boundBy:s.displayName},l.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,l,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(l)}async listConnections(e){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,s){const l=this.requireSession();if(!l.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权冻结交付批次`);const o=this.devices.filter(f=>f.physicalInstalled&&f.hardwareBinding).length,n={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:c.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:o,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:l.displayName,note:s||"例行交付基线冻结"};return this.deliveryBatches.unshift(n),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,n,{note:s}),this.pushAudit("delivery.freeze",n.id,"success",`${o}/${this.devices.length} 已现场核验`),structuredClone(n)}async getAnalysisReport(e,s,l){this.requireSession();const o=s==="today"?1:s==="7d"?7:30,f={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*o)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*o).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(D=>D.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*o).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*o).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*o).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],E=s==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],b={category:e,range:s,scopeId:l,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:f.kpis,unit:f.unit,series:f.base.map((D,S)=>({label:E[S],value:Math.round(D*(e==="energy"||e==="carbon"?o/2+.5:1)),baseline:Math.round(D*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:f.base[3],unit:f.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:f.base[4],unit:f.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:f.base[1],unit:f.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${s}&scopeId=${l}`,{kpis:b.kpis.length}),b}async listScenes(e){return this.requireSession(),structuredClone(this.scenes)}async createScene(e){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const l={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(l),this.record("REST","createScene","POST /api/v1/scenes",l,e),this.pushAudit("scene.create",l.id,"success",l.name),structuredClone(l)}async executeScene(e){const s=this.scenes.find(o=>o.id===e);if(!s)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const l=await this.dispatchControlBatch({floorId:s.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:s.actions,reason:`触发场景：${s.name}`});return s.lastExecutedAt=new Date().toISOString(),s.lastBatchId=l.batchId,l}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:c.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,s,l){this.requireSession();const o=l>=this.calendar.nightGuardStart?`下班时间 ${l} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,n=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${s} - ${l}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${s} (-30m) ~ ${l} (+30m)`,conflictWarning:o},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:o}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",n,{workdayStart:s,workdayEnd:l}),n}async saveWorkCalendar(e,s,l,o){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权修改运行日历`);if(this.calendar.version!==o)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(s>=l)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:s,workdayEnd:l,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:s,workdayEnd:l,expectedVersion:o}),this.pushAudit("settings.calendar",c.projectId,"success",`${s}-${l}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,s,l){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权启停运行规则`);const n=this.rules.find(f=>f.id===e);if(!n)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(n.version!==l)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${n.version}）`);return n.enabled=s,n.version+=1,n.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,n,{enabled:s,expectedVersion:l}),this.pushAudit("settings.rule_toggle",e,"success",s?"启用":"停用"),structuredClone(n)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,s){const l=this.requireSession();if(l.role!=="org_admin"&&l.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const o=ne[s],n={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:s,roleLabel:o.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(n),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",n,{email:e,role:s}),this.pushAudit("org.invite",e,"success",o.roleLabel),structuredClone(n)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(e,s){return e!==c.floorId?()=>{}:(this.listeners.add(s),()=>{this.listeners.delete(s)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${c.floorId}`,e),this.listeners.forEach(s=>s(e))}}function Re(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new qe}async function Be(t,e,s,l,o){let n="profile",f=await e.listOrgMembers(),E=await e.listAuditLogs(),b="",D="all",S="all",F="all",j=!1,R=!1,q="";async function T(){[f,E]=await Promise.all([e.listOrgMembers(),e.listAuditLogs()]),O()}function O(){const z=e.mode==="demo"&&typeof e.switchDemoRole=="function",M=b.trim().toLowerCase(),Y=f.filter(I=>D!=="all"&&I.role!==D?!1:M?`${I.displayName} ${I.email} ${I.roleLabel} ${I.scopeSummary}`.toLowerCase().includes(M):!0),$=E.filter(I=>{if(S==="success"&&I.result!=="success"||S==="denied"&&I.result==="success")return!1;if(F!=="all"){const w=`${I.action} ${I.target}`.toLowerCase();if(F==="control"&&!w.includes("control")&&!w.includes("scene")&&!w.includes("控制")||F==="alarm"&&!w.includes("alarm")&&!w.includes("work")&&!w.includes("告警")||F==="deploy"&&!w.includes("deploy")&&!w.includes("plan")&&!w.includes("hardware")&&!w.includes("部署"))return!1}return!0});t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">机构与账户</h1>
              <div class="pacom-tabs" role="tablist" aria-label="机构与账户视图">
                <button class="pacom-tab" role="tab" aria-selected="${n==="profile"}" data-atab="profile">我的账户与权限</button>
                <button class="pacom-tab" role="tab" aria-selected="${n==="members"}" data-atab="members">成员与角色（${f.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${n==="audit"}" data-atab="audit">操作审计日志（${E.length}）</button>
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
            ${q?`<div class="pacom-alert-banner">${q}</div>`:""}
            ${n==="profile"?`
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

                ${z?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">多角色权限预览切换</h2>
                        <span class="pacom-badge pacom-badge--neutral">仅 Demo 预览可用</span>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(ne).map(I=>{const w=ne[I];return`
                              <button class="pacom-role-card ${I===s.role?"is-active":""}" data-switch-role="${I}">
                                <strong style="font-weight:500;">${w.roleLabel}</strong>
                                <span class="pacom-row-sub">${w.displayName}</span>
                                <span class="pacom-row-sub">授权楼层 ${w.scope.allowedFloorIds.length} 层 · 部署编辑：${w.scope.canEditDeployment?"是":"否"}</span>
                              </button>`}).join("")}
                      </div>
                    </section>`:""}

                <section class="lov-section">
                  <h2 class="lov-section-title">会话 RBAC 联调契约</h2>
                  <div class="lov-snippet-card">
                    <div class="lov-snippet-head">
                      <span class="pacom-row-sub">服务端下发的当前会话权限对象（供前后端核对）</span>
                      <button class="pacom-btn" data-copy-session="1">${R?"已复制":"复制 JSON"}</button>
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
                </section>`:n==="members"?`
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
                                ${Object.keys(ne).map(I=>`<option value="${I}">${ne[I].roleLabel}</option>`).join("")}
                              </select>
                              <button class="pacom-btn pacom-btn--primary" type="submit">发送邀请</button>
                            </div>
                          </div>
                        </form>
                      </section>`:""}

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">机构成员目录</h2>
                      <span class="pacom-row-sub">共 ${Y.length} 人</span>
                    </div>
                    <div class="lov-table-card">
                      <div class="lov-table-toolbar">
                        <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                          <input class="pacom-input" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${b}" />
                          <select class="pacom-select" data-role-filter>
                            <option value="all" ${D==="all"?"selected":""}>全部角色</option>
                            ${Object.keys(ne).map(I=>`<option value="${I}" ${D===I?"selected":""}>${ne[I].roleLabel}</option>`).join("")}
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
                            ${Y.map(I=>`
                                <tr>
                                  <td>
                                    <div style="display:flex; align-items:center; gap:10px;">
                                      <span class="pacom-pop-avatar">${I.displayName.slice(0,1)}</span>
                                      <div>
                                        <div style="font-weight:500;">${I.displayName}</div>
                                        <div class="pacom-row-sub">${I.email}</div>
                                      </div>
                                    </div>
                                  </td>
                                  <td><span class="pacom-badge pacom-badge--neutral">${I.roleLabel}</span></td>
                                  <td><span class="pacom-row-sub">${I.scopeSummary}</span></td>
                                  <td>
                                    <span class="pacom-badge ${I.status==="active"?"pacom-badge--online":"pacom-badge--accent"}">
                                      ${I.status==="active"?"正常":I.status}
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
                          <option value="all" ${F==="all"?"selected":""}>全部操作类型</option>
                          <option value="control" ${F==="control"?"selected":""}>设备控制与场景</option>
                          <option value="alarm" ${F==="alarm"?"selected":""}>告警与工单处置</option>
                          <option value="deploy" ${F==="deploy"?"selected":""}>系统部署与点位</option>
                        </select>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${S==="all"}" data-audit-filter="all">全部（${E.length}）</button>
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
                            ${$.map(I=>`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${I.action}</div>
                                    ${I.detail?`<div class="pacom-row-sub">${I.detail}</div>`:""}
                                  </td>
                                  <td><code style="font-size:12px;">${I.target}</code></td>
                                  <td>${I.actor}</td>
                                  <td><span class="pacom-row-sub">${I.at.slice(0,19).replace("T"," ")}</span></td>
                                  <td>
                                    <span class="pacom-badge ${I.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                                      ${I.result==="success"?"成功":I.result}
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
    `,t.querySelectorAll("[data-atab]").forEach(I=>{I.addEventListener("click",()=>{n=I.dataset.atab,q="",O()})}),t.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",o()}),t.querySelector("[data-copy-session]")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(s,null,2)),R=!0,O(),window.setTimeout(()=>{R=!1,O()},1600)}catch{}}),t.querySelectorAll("[data-switch-role]").forEach(I=>{I.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const w=await e.switchDemoRole(I.dataset.switchRole);l(w)})}),t.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{j=!j,O()}),t.querySelector("[data-member-search]")?.addEventListener("input",I=>{const w=I.currentTarget,i=w.selectionStart??w.value.length;b=w.value,O();const h=t.querySelector("[data-member-search]");h&&(h.focus(),h.setSelectionRange(i,i))}),t.querySelector("[data-role-filter]")?.addEventListener("change",I=>{D=I.currentTarget.value,O()}),t.querySelectorAll("[data-audit-filter]").forEach(I=>{I.addEventListener("click",()=>{S=I.dataset.auditFilter??"all",O()})}),t.querySelector("[data-audit-cat]")?.addEventListener("change",I=>{F=I.currentTarget.value??"all",O()}),t.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async I=>{I.preventDefault(),q="";const w=new FormData(I.currentTarget);try{await e.inviteOrgMember(String(w.get("email")??""),String(w.get("role"))),j=!1,await T()}catch(i){q=i instanceof Error?i.message:String(i),O()}})}O()}const he={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},Pe={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},_e={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function Ne(t){const e=`${t.title} ${t.message}`.toLowerCase();return e.includes("离线")||e.includes("modbus")||e.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":e.includes("co₂")||e.includes("co2")||e.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function Ve(t){return t.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:t.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}async function We(t,e,s){const l=new URLSearchParams(window.location.hash.split("?")[1]??""),o=l.get("alarm"),n=l.get("wo");let f=[],E=[],b=[],D=n?"workorders":"alarms",S="all",F="all",j="all",R=!1,q="",T=o,O=n,z=null,M=null,Y="resolved";const $=new Set,W=new Map,I=new Map,w=new Map,i=new Map;let h="",P="";function _(a){const v=i.get(a.id);if(v)return v;const r={estCost:"¥ 450",actualCost:a.status==="closed"?"¥ 380":"--",cmmsNo:`WO-2026-${a.id.slice(-4).toUpperCase()}`,assigneeGroup:"暖通运维组",tasks:[{id:`${a.id}-t1`,label:"核查设备供电与现场指示灯状态",done:a.status!=="open"},{id:`${a.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:a.status==="resolved"||a.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:a.createdAt?a.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${`WO-2026-${a.id.slice(-4).toUpperCase()}`}）`}]};return i.set(a.id,r),r}async function G(){[f,E,b]=await Promise.all([e.listAlarms(c.floorId),e.listWorkOrders(c.floorId),e.getFloorDevices(c.floorId).catch(()=>[])]),E.forEach(a=>_(a)),L()}function H(a){if(!a)return{name:"楼层通用",zone:"E7F",dev:null};const v=b.find(r=>r.id===a)??null;return v?{name:v.name,zone:(v.logicalZoneId?_e[v.logicalZoneId]:void 0)??"E7F",dev:v}:{name:a,zone:"E7F",dev:null}}function C(a){const v=H(a.deviceId).dev;v&&v.connectivity==="offline"?w.set(a.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${v.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):w.set(a.id,{verdict:"pass",summary:`自检通过（PASS）：「${v?.name??a.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况 ✓","2. 下发序列（Sequence）：试探指令回读响应 18 ms ✓","3. 自动复位（Restore）：已恢复原自动策略设定值 ✓"]}),T=a.id,L()}function L(){const a=f.filter(u=>u.status==="active"&&!W.has(u.id)),v=E.filter(u=>!_(u).cancelled&&(u.status==="open"||u.status==="assigned"||u.status==="in_progress")),r=f.filter(u=>u.status!=="active").length+I.size,U=0,le=W.size,se=q.trim().toLowerCase(),K=f.filter(u=>{const g=W.has(u.id);if(S==="snoozed"){if(!g)return!1}else if(S==="active"){if(u.status!=="active"||g)return!1}else if(S==="acknowledged"){if(u.status!=="acknowledged")return!1}else if(g)return!1;if(j!=="all"&&u.severity!==j)return!1;if(!se)return!0;const B=H(u.deviceId);return`${u.title} ${u.message} ${B.name} ${B.zone} ${u.deviceId}`.toLowerCase().includes(se)}),pe=new Map;for(const u of K){const g=`${u.title} ${u.message}`.toLowerCase(),B=g.includes("离线")||g.includes("modbus")||g.includes("通信"),J=R?B?"root-gateway-modbus":u.deviceId:u.id,te=B?"根因：E7F 主控网关通信链路":`根因：${H(u.deviceId).name}`,Q=pe.get(J)??{rootLabel:te,items:[]};Q.items.push(u),pe.set(J,Q)}const ge=Array.from(pe.values()),be=E.filter(u=>{const g=_(u);if(F==="cancelled"){if(!g.cancelled)return!1}else if(g.cancelled||F==="open"&&(u.status==="resolved"||u.status==="closed")||F==="resolved"&&u.status!=="resolved"||F==="closed"&&u.status!=="closed")return!1;if(!se)return!0;const B=H(u.deviceId);return`${u.title} ${u.description} ${u.id} ${g.cmmsNo} ${B.name}`.toLowerCase().includes(se)});t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">告警中心</h1>
              <div class="pacom-tabs" role="tablist" aria-label="告警中心视图">
                <button class="pacom-tab" role="tab" aria-selected="${D==="alarms"}" data-main-tab="alarms">
                  实时告警（${f.length-le}）
                </button>
                <button class="pacom-tab" role="tab" aria-selected="${D==="workorders"}" data-main-tab="workorders">
                  运维工单（${E.length}）
                </button>
              </div>
            </div>

            <div class="pacom-header-meta">
              ${D==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="lov-switch" role="switch" aria-checked="${R}" data-toggle-group="1" aria-label="按拓扑根因归并">
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
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${D==="alarms"&&S==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">待处理告警</span>
              <div class="lov-kpi-value">${a.length}<span class="lov-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="lov-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${D==="workorders"&&F==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">处理中工单</span>
              <div class="lov-kpi-value">${v.length}<span class="lov-kpi-unit">单</span></div>
              <span class="lov-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${D==="alarms"&&S==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">已闭环生效</span>
              <div class="lov-kpi-value">${r}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="lov-kpi-cell">
              <span class="lov-kpi-label">关单复发待查</span>
              <div class="lov-kpi-value" style="color:var(--pacom-status-online);">${U}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${h?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${h}</span></div>`:""}
          ${P?`<div class="pacom-alert-banner">${P}</div>`:""}

          ${D==="alarms"?`
              <section class="lov-table-card">
                <div class="lov-table-toolbar">
                  <div class="lov-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${q}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${j==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${j==="critical"?"selected":""}>严重</option>
                      <option value="major" ${j==="major"?"selected":""}>重要</option>
                      <option value="minor" ${j==="minor"?"selected":""}>一般</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${S==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${S==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${S==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${S==="snoozed"}" data-status-pill="snoozed">已忽略（${le}）</button>
                    </div>
                  </div>
                  <div class="lov-table-toolbar-group">
                    ${$.size>0&&s.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${$.size}）</button>`:""}
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
                          ${ge.map(u=>{const g=u.items[0],B=Pe[g.severity]??{label:g.severity,cls:"pacom-badge--neutral"},J=H(g.deviceId),te=Ve(g),Q=T===g.id,de=W.get(g.id),d=!!de,A=$.has(g.id),p=w.get(g.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" data-check-alarm="${g.id}" ${A?"checked":""} ${g.status!=="active"||d?"disabled":""} aria-label="选择 ${g.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${B.cls}">${B.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${g.title}</span>
                                      ${R?`<span class="pacom-badge pacom-badge--accent">${u.rootLabel}${u.items.length>1?` · 影响 ${u.items.length} 项`:""}</span>`:""}
                                      ${p?`<span class="pacom-badge ${p.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${p.verdict.toUpperCase()}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${g.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${J.name}</div>
                                    <div class="pacom-row-sub">${J.zone}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${te.duration}</div>
                                    <div class="pacom-row-sub" style="color:${te.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${te.trend}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${d?"pacom-badge--neutral":g.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${d?`忽略 ${de?.duration}`:g.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${d?`<button class="pacom-btn" data-unsnooze="${g.id}">恢复监控</button>`:`
                                            ${g.status==="active"?`<button class="pacom-btn" data-mark-actioned="${g.id}" ${s.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${g.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${g.id}" ${s.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${g.id}">${Q?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${Q?`
                                    <tr class="lov-table-detail-row">
                                      <td colspan="7">
                                        <div style="display:flex; flex-direction:column; gap:12px;">
                                          <div style="font-size:13px; color:var(--pacom-text-body);">
                                            <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${Ne(g)}
                                          </div>
                                          ${de?`<div class="pacom-info-banner">忽略周期：${de.duration} · 原因备注：${de.reason}</div>`:""}
                                          ${p?`
                                              <div class="lov-banner ${p.verdict==="pass"?"lov-banner--ok":"lov-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                <span class="lov-banner-title">${p.summary}</span>
                                                <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                  ${p.steps.map(m=>`<span>${m}</span>`).join("")}
                                                </div>
                                              </div>`:""}
                                          ${z===g.id?`
                                              <form data-snooze-form="${g.id}" style="display:flex; gap:8px; align-items:center; flex-wrap:wrap; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
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
                                              告警编号 <code>${g.id}</code> · 设备编号 <code>${g.deviceId}</code> · 关联工单 ${g.workOrderId??"无"}
                                            </div>
                                            <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
                                              <button class="pacom-btn" data-run-ftt="${g.id}">运行单机自检（FTT）</button>
                                              ${!d&&g.status==="active"?`<button class="pacom-btn" data-open-snooze="${g.id}">限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${g.deviceId}">查看时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${g.deviceId}">定位到空间总览 →</button>
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
                      <button class="pacom-tab" aria-selected="${F==="all"}" data-wo-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${F==="open"}" data-wo-pill="open">进行中</button>
                      <button class="pacom-tab" aria-selected="${F==="resolved"}" data-wo-pill="resolved">已解决</button>
                      <button class="pacom-tab" aria-selected="${F==="closed"}" data-wo-pill="closed">已关闭</button>
                      <button class="pacom-tab" aria-selected="${F==="cancelled"}" data-wo-pill="cancelled">已取消</button>
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
                          ${be.map(u=>{const g=H(u.deviceId),B=_(u),J=O===u.id,te=!!(B.cancelled||u.status==="closed");return`
                                <tr>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                      <span>${u.title}</span>
                                      ${B.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                    </div>
                                    <div class="pacom-row-sub">${u.description} · <code>${u.id}</code></div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${g.name}</div>
                                    <div class="pacom-row-sub">${g.zone}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;"><code>${B.cmmsNo}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                    <div class="pacom-row-sub">${B.assigneeGroup} · 预估 ${B.estCost}</div>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      <select class="pacom-select" data-wo-status="${u.id}" aria-label="更新工单状态" ${te?"disabled":""}>
                                        ${["open","assigned","in_progress","resolved","closed"].map(Q=>`<option value="${Q}" ${u.status===Q?"selected":""}>${he[Q]}</option>`).join("")}
                                        <option value="cancelled" ${B.cancelled?"selected":""}>已取消</option>
                                      </select>
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-wo="${u.id}">${J?"收起":"详情"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${M===u.id?`
                                    <tr class="lov-table-detail-row">
                                      <td colspan="4">
                                        <form data-close-wo-form="${u.id}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                          <strong style="font-size:13px; font-weight:500;">流转至「${he[Y]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${B.cause??""}" required />
                                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${B.solution??""}" required />
                                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${B.actualCost==="--"?"":B.actualCost}" />
                                          </div>
                                          <div style="display:flex; justify-content:flex-end; gap:8px;">
                                            <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                                            <button class="pacom-btn pacom-btn--primary" type="submit">保存并更新状态</button>
                                          </div>
                                        </form>
                                      </td>
                                    </tr>`:""}
                                ${J?`
                                    <tr class="lov-table-detail-row">
                                      <td colspan="4">
                                        <div class="lov-grid-2">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <strong style="font-size:13px; font-weight:500;">现场检查任务清单</strong>
                                            ${B.tasks.map(Q=>`
                                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:6px 10px; border-radius:8px; background:var(--pacom-surface-card);">
                                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                                    <input type="checkbox" data-wo-task="${u.id}" data-task-id="${Q.id}" ${Q.done?"checked":""} ${te?"disabled":""} />
                                                    <span>${Q.label}</span>
                                                  </span>
                                                  ${Q.unit?`<span class="pacom-row-sub">实测：${Q.reading??"--"} ${Q.unit}</span>`:""}
                                                </label>`).join("")}
                                            <strong style="font-size:13px; font-weight:500; margin-top:4px;">全生命周期操作历史</strong>
                                            <div style="display:flex; flex-direction:column; gap:4px; font-size:12px; color:var(--pacom-text-secondary);">
                                              ${B.history.map(Q=>`<span>• ${Q.at} — ${Q.text}</span>`).join("")}
                                            </div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card);">
                                            <strong style="font-size:13px; font-weight:500;">工单摘要与费用核算</strong>
                                            <div class="pacom-kv-grid">
                                              <span class="pacom-kv-label">CMMS 同步</span><span><code>${B.cmmsNo}</code> · 已同步</span>
                                              <span class="pacom-kv-label">处理组</span><span>${B.assigneeGroup}</span>
                                              <span class="pacom-kv-label">费用核算</span><span>预估 ${B.estCost} / 实际 ${B.actualCost}</span>
                                              <span class="pacom-kv-label">故障根因</span><span>${B.cause??"待完单填写"}</span>
                                              <span class="pacom-kv-label">处置方案</span><span>${B.solution??"待完单填写"}</span>
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
    `,t.querySelectorAll("[data-main-tab]").forEach(u=>{u.addEventListener("click",()=>{D=u.dataset.mainTab??"alarms",h="",L()})}),t.querySelectorAll("[data-kpi-filter]").forEach(u=>{u.addEventListener("click",()=>{const g=u.dataset.kpiFilter;h="",g==="workorders"?(D="workorders",F=F==="open"?"all":"open"):(g==="active"||g==="acknowledged")&&(D="alarms",S=S===g?"all":g),L()})}),t.querySelectorAll("[data-status-pill]").forEach(u=>{u.addEventListener("click",()=>{S=u.dataset.statusPill??"all",L()})}),t.querySelectorAll("[data-wo-pill]").forEach(u=>{u.addEventListener("click",()=>{F=u.dataset.woPill??"all",L()})}),t.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{h="",G()}),t.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{R=!R,L()}),t.querySelector("[data-severity-filter]")?.addEventListener("change",u=>{j=u.currentTarget.value,L()}),t.querySelector("[data-alarm-search]")?.addEventListener("input",u=>{const g=u.currentTarget,B=g.selectionStart??g.value.length;q=g.value,L();const J=t.querySelector("[data-alarm-search]");J&&(J.focus(),J.setSelectionRange(B,B))}),t.querySelectorAll("[data-check-alarm]").forEach(u=>{u.addEventListener("change",()=>{const g=u.dataset.checkAlarm;g&&(u.checked?$.add(g):$.delete(g),L())})}),t.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{P="";const u=Array.from($);try{for(const g of u)await e.acknowledgeAlarm(g,"告警中心批量确认"),I.set(g,"批量确认处置");$.clear(),h=`已批量确认 ${u.length} 条告警，未来 24 小时持续校验无复发。`,await G()}catch(g){P=g instanceof Error?g.message:String(g),L()}}),t.querySelectorAll("[data-expand-alarm]").forEach(u=>{u.addEventListener("click",()=>{const g=u.dataset.expandAlarm??null;T=T===g?null:g,z=null,L()})}),t.querySelectorAll("[data-expand-wo]").forEach(u=>{u.addEventListener("click",()=>{const g=u.dataset.expandWo??null;O=O===g?null:g,L()})}),t.querySelectorAll("[data-run-ftt]").forEach(u=>{u.addEventListener("click",()=>{const g=f.find(B=>B.id===u.dataset.runFtt);g&&C(g)})}),t.querySelectorAll("[data-open-snooze]").forEach(u=>{u.addEventListener("click",()=>{z=u.dataset.openSnooze??null,L()})}),t.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{z=null,L()}),t.querySelectorAll("[data-snooze-form]").forEach(u=>{u.addEventListener("submit",g=>{g.preventDefault();const B=u.dataset.snoozeForm;if(!B)return;const J=new FormData(u),te=String(J.get("duration")??"24h"),Q=String(J.get("reason")??"").trim()||"现场核查中";W.set(B,{duration:te,reason:Q}),$.delete(B),z=null,h=`已限时忽略该告警（${te} · ${Q}），可在「已忽略」页签中随时恢复。`,L()})}),t.querySelectorAll("[data-unsnooze]").forEach(u=>{u.addEventListener("click",()=>{const g=u.dataset.unsnooze;g&&(W.delete(g),h="已恢复该告警的实时监控。",L())})}),t.querySelectorAll("[data-go-ts]").forEach(u=>{u.addEventListener("click",()=>{const g=u.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(g)}`})}),t.querySelectorAll("[data-locate-home]").forEach(u=>{u.addEventListener("click",()=>{const g=u.dataset.locateHome??"";window.location.hash=g?`#home?device=${encodeURIComponent(g)}`:"#home"})}),t.querySelectorAll("[data-mark-actioned]").forEach(u=>{u.addEventListener("click",async()=>{P="";const g=u.dataset.markActioned;try{await e.acknowledgeAlarm(g,"现场自处理完成（Mark Actioned）"),I.set(g,"现场自处理完成"),$.delete(g),h="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await G()}catch(B){P=B instanceof Error?B.message:String(B),L()}})}),t.querySelectorAll("[data-to-wo]").forEach(u=>{u.addEventListener("click",async()=>{P="";const g=f.find(B=>B.id===u.dataset.toWo);if(g)try{await e.createWorkOrder({floorId:g.floorId,deviceId:g.deviceId,alarmId:g.id,title:`处置告警：${g.title}`,description:g.message}),h=`已将「${g.title}」转为运维工单并同步 CMMS。`,await G()}catch(B){P=B instanceof Error?B.message:String(B),L()}})}),t.querySelectorAll("[data-wo-status]").forEach(u=>{u.addEventListener("change",async()=>{const g=u.dataset.woStatus,B=u.value;if(P="",B==="cancelled"){const J=E.find(te=>te.id===g);if(J){const te=_(J);te.cancelled=!0,te.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),h="工单已移入「已取消」分类并锁定编辑。",L()}return}if(B==="resolved"||B==="closed"){M=g,Y=B,L();return}try{await e.updateWorkOrderStatus(g,B);const J=E.find(te=>te.id===g);J&&_(J).history.unshift({at:"刚刚",text:`状态变更为「${he[B]}」`}),h="工单状态已更新并写入审计日志。",await G()}catch(J){P=J instanceof Error?J.message:String(J),await G()}})}),t.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{M=null,L()}),t.querySelectorAll("[data-close-wo-form]").forEach(u=>{u.addEventListener("submit",async g=>{g.preventDefault();const B=u.dataset.closeWoForm,J=new FormData(u),te=String(J.get("cause")??"").trim(),Q=String(J.get("solution")??"").trim(),de=String(J.get("actualCost")??"").trim();try{await e.updateWorkOrderStatus(B,Y);const d=E.find(A=>A.id===B);if(d){const A=_(d);A.cause=te,A.solution=Q,de&&(A.actualCost=de),A.history.unshift({at:"刚刚",text:`流转至「${he[Y]}」· 根因：${te}`})}M=null,O=B,h=`工单已更新为「${he[Y]}」，根因与方案已沉淀归档。`,await G()}catch(d){P=d instanceof Error?d.message:String(d),L()}})}),t.querySelectorAll("[data-wo-task]").forEach(u=>{u.addEventListener("change",()=>{const g=E.find(te=>te.id===u.dataset.woTask);if(!g)return;const J=_(g).tasks.find(te=>te.id===u.dataset.taskId);J&&(J.done=u.checked),L()})})}await G()}const $e=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],Se=[{id:c.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:c.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:c.projectId,label:"广实2号园（全园区）",factor:18.2}],Ue={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},He=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],ve=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function Ie(t,e=""){const s=(t??"").trim().toLowerCase();return!(!s||s.includes("%")||s.includes("°c")||s.includes("ppm")||s.includes("ms")||s.includes("m²")||s.includes("/m2")||s.includes("db")||s.includes("lx")||e.includes("率")||e.includes("均")||e.includes("强度")||e.includes("延迟"))}function we(t,e){const s=t*e;return Math.abs(s)>=10?Math.round(s):Math.round(s*10)/10}function Ze(t,e){const s=Number(String(t).replaceAll(",","")),l=e??"";return Number.isFinite(s)?l==="kWh"&&Math.abs(s)>=1e4?{value:(s/1e3).toFixed(1),unit:"MWh",title:`精确值：${s.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(s)?s.toLocaleString("en-US"):s.toLocaleString("en-US",{maximumFractionDigits:1}),unit:l,title:`${s.toLocaleString("en-US")} ${l}`.trim()}:{value:t,unit:l,title:`${t} ${l}`.trim()}}function Ge(t,e){if(e===1)return t;const s=Ie(t.unit);return{...t,kpis:t.kpis.map(l=>{const o=Number(String(l.value).replaceAll(",",""));return!Number.isFinite(o)||!Ie(l.unit,l.label)?l:{...l,value:String(we(o,e))}}),series:s?t.series.map(l=>({...l,value:we(l.value,e),...typeof l.baseline=="number"?{baseline:we(l.baseline,e)}:{}})):t.series,zoneBreakdown:t.zoneBreakdown.map(l=>Ie(l.unit)?{...l,value:we(l.value,e)}:l)}}function Ye(t,e){const s=Math.max(...t.series.map(j=>Math.max(j.value,j.baseline??0)),1),l=46,o=34,n=36,f=Math.max(t.series.length*(l+o)+n*2,620),E=228,b=184,D=132,S=[0,.25,.5,.75,1].map(j=>{const R=Math.round(b-j*D);return`<line x1="${n-8}" y1="${R}" x2="${f-18}" y2="${R}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${j===0?"0":"3 3"}" />`}).join(""),F=t.series.map((j,R)=>{const q=n+R*(l+o),T=Math.max(8,Math.round(j.value/s*D)),O=b-T,z=typeof j.baseline=="number"&&j.value>j.baseline*1.08,M=z?`<rect x="${q-8}" y="34" width="${l+16}" height="${b-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",Y=typeof j.baseline=="number"?`<line x1="${q-5}" y1="${Math.round(b-j.baseline/s*D)}" x2="${q+l+5}" y2="${Math.round(b-j.baseline/s*D)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",$=e&&(z||R===1)?`<g><title>${z?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${q+l/2}" cy="18" r="7" fill="${z?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${q+l/2}" y="21.5" text-anchor="middle" font-size="9" fill="#fff">${z?"!":"⚡"}</text></g>`:"",W=j.value>=1e4?`${(j.value/1e3).toFixed(1)}k`:j.value.toLocaleString("en-US");return`
        ${M}
        ${Y}
        ${$}
        <g>
          <title>${j.label}：实测 ${j.value.toLocaleString("en-US")} ${t.unit}${j.baseline!==void 0?` / 基线 ${j.baseline.toLocaleString("en-US")} ${t.unit}`:""}</title>
          <rect x="${q}" y="${O}" width="${l}" height="${T}" rx="7" fill="${z?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${q+l/2}" y="${O-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${W}</text>
        <text x="${q+l/2}" y="${b+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${j.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${f} ${E}" style="width:100%; height:232px; display:block;" role="img" aria-label="${t.category} 趋势图">
      ${S}
      ${F}
    </svg>
  `}function me(t){if(t.connectivity==="offline")return{unit:"°C",points:[23.8,24,24.1,null,null,null,null,null]};if(t.category==="lighting"){const e=Number(t.telemetry.dimming?.value??60);return{unit:"%",points:[0,0,Math.round(e*.8),e,e,Math.round(e*.6),e,Math.round(e*.9)]}}if(t.category==="hvac"){const e=Number(t.telemetry.setpoint?.value??24);return{unit:"°C",points:[e+.8,e+.6,e+.3,e,e-.2,e+.1,e+.2,e]}}if(t.category==="sensor"){const e=Number(t.telemetry.temp?.value??23.4);return{unit:"°C",points:[e-.5,e-.3,e,e+.3,e+.5,e+.2,e+.1,e]}}return{unit:"ms",points:[16,18,17,19,18,17,18,18]}}function Ke(t,e){const s=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!t.length)return'<div class="lov-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧勾选 1 台或多台设备以开始多点时序对比。</span></div>';const l=(n,f)=>{const T=[];for(const w of n)for(const i of me(w).points)typeof i=="number"&&T.push(i);const O=T.length?Math.min(...T)*.92:0,z=T.length?Math.max(...T)*1.08:100,M=Math.max(z-O,1),Y=[0,.5,1].map(w=>{const i=Math.round(26+106*(1-w)),h=(O+M*w).toFixed(M<15?1:0);return`
          <line x1="42" y1="${i}" x2="662" y2="${i}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${w===0?"0":"3 3"}" />
          <text x="36" y="${i+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${h}</text>
        `}).join(""),$=s.map((w,i)=>`<text x="${42+i/(s.length-1)*620}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${w}</text>`).join(""),W=n.map((w,i)=>{const h=ve[i%ve.length],P=me(w).points,_=[];let G=42,H=26+106/2,C=!1;return P.forEach((L,a)=>{const v=42+a/(P.length-1)*620;if(typeof L=="number"){const r=26+106*(1-(L-O)/M);_.push(`${v.toFixed(1)},${r.toFixed(1)}`),G=v,H=r}else C=!0}),`
          ${_.length?`<polyline fill="none" stroke="${h}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${_.join(" ")}" />`:""}
          ${C?`<line x1="${G.toFixed(1)}" y1="${H.toFixed(1)}" x2="662" y2="${H.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${H-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),I=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${42+3/7*620}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${42+3/7*620}" y="15" text-anchor="middle" font-size="8" fill="#fff">⚡</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${42+5/7*620}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${42+5/7*620}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `;return`
      <div class="pacom-card" style="padding:14px 16px; gap:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${f}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${n.map((w,i)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${ve[i%ve.length]};"></span>${w.name}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${Y}
          ${$}
          ${I}
          ${W}
        </svg>
      </div>
    `};if(e==="shared")return l(t,"单图叠合对比（Shared）");const o=new Map;for(const n of t){const f=me(n).unit,E=o.get(f)??[];E.push(n),o.set(f,E)}return Array.from(o.entries()).map(([n,f])=>l(f,`按单位分组泳道（${n}）`)).join("")}function Xe(t){const e=[["时段",`数值 (${t.unit})`,`基线 (${t.unit})`].join(","),...t.series.map(n=>[n.label,String(n.value),n.baseline!==void 0?String(n.baseline):""].join(","))],s=new Blob([`\uFEFF${e.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),l=URL.createObjectURL(s),o=document.createElement("a");o.href=l,o.download=`pacom-${t.category}-${t.range}.csv`,o.click(),URL.revokeObjectURL(l)}function Qe(t){const e=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],s=["时间",...t.map(E=>`${E.name}(${me(E).unit})`)].join(","),l=e.map((E,b)=>[E,...t.map(D=>String(me(D).points[b]??"No Data"))].join(",")),o=new Blob([`\uFEFF${[s,...l].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),n=URL.createObjectURL(o),f=document.createElement("a");f.href=n,f.download="pacom-timeseries-export.csv",f.click(),URL.revokeObjectURL(n)}async function Je(t,e,s){const l=new URLSearchParams(window.location.hash.split("?")[1]??""),o=l.get("tab"),n=l.get("cat"),f=l.get("device");let E=o==="timeseries"?"timeseries":n&&$e.some(h=>h.id===n)?n:"energy",b="7d",D="2026-11-16",S="2026-11-23",F=c.floorId,j="chart",R=!0,q="breakdown",T=!1,O=null,z=await e.getFloorDevices(c.floorId).catch(()=>[]),M="grouped",Y="1h";const $=new Set(f&&z.some(h=>h.id===f)?[f]:z.slice(0,3).map(h=>h.id)),W=[{id:"fav-hvac",name:"E7F 空调供回温与离线对照",deviceIds:z.filter(h=>h.category==="hvac"||h.category==="sensor").map(h=>h.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度趋势对比",deviceIds:z.filter(h=>h.category==="lighting").map(h=>h.id),mode:"shared",interval:"15m"}];let I="";async function w(){const h=E==="timeseries"?"energy":E,P=b==="custom"?"30d":b;O=await e.getAnalysisReport(h,P,c.floorId),i()}function i(){if(!O)return;const h=E==="timeseries",P=E==="timeseries"?"energy":E,_=$e.find(r=>r.id===P)??$e[0],G=Se.find(r=>r.id===F)??Se[0],H=Ge(O,G.factor),C=H.zoneBreakdown.filter(r=>r.status==="warning"),L=Ue[P],a=Math.max(...H.zoneBreakdown.map(r=>r.value),1),v=z.filter(r=>$.has(r.id));t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:10px; min-width:0;">
              <h1 class="pacom-title" style="flex-shrink:0;">数据分析</h1>
              <div class="pacom-tabs" role="tablist" aria-label="分析维度">
                ${$e.map(r=>`<button class="pacom-tab" role="tab" aria-selected="${E===r.id}" data-cat="${r.id}">${r.label}</button>`).join("")}
                <button class="pacom-tab" role="tab" aria-selected="${E==="timeseries"}" data-cat="timeseries">多点时序</button>
              </div>
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <div class="pacom-scope-pill" style="width:196px;" title="切换统计空间范围">
                <select name="analysisScope" data-scope-select aria-label="选择统计空间范围">
                  ${Se.map(r=>`<option value="${r.id}" ${r.id===F?"selected":""}>${r.label}</option>`).join("")}
                </select>
                <span class="pacom-scope-chevron">▾</span>
              </div>
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px;">
                <option value="today" ${b==="today"?"selected":""}>今日</option>
                <option value="7d" ${b==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${b==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${b==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${h?"":`<button class="pacom-btn ${T?"pacom-btn--primary":""}" data-toggle-canvas="1">${T?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          ${b==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${D}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${S}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${h?`
            <div class="lov-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:264px; min-width:240px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">多点时序测点树</span>
                    <span class="pacom-row-sub">已选 ${v.length}</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${W.map(r=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${r.id}">★ ${r.name}</button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${z.map((r,U)=>{const le=$.has(r.id),se=me(r);return`
                        <label class="pacom-row" style="cursor:pointer;">
                          <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                            <input type="checkbox" data-ts-dev="${r.id}" ${le?"checked":""} />
                            <span style="width:8px; height:8px; border-radius:50%; background:${ve[U%ve.length]}; flex-shrink:0;"></span>
                            <div style="min-width:0;">
                              <div class="pacom-row-title" style="font-size:13px;">${r.name}</div>
                              <div class="pacom-row-sub">${se.unit} · ${r.connectivity==="online"?"在线上报":"断流离线"}</div>
                            </div>
                          </div>
                        </label>`}).join("")}
                </div>
              </aside>
              <div class="lov-subnav-main" style="padding:2px 4px 24px;">
                ${I?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${I}</span></div>`:""}
                <div class="lov-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="lov-section-title">多设备实时遥测对比（Time Series）</h2>
                    <span class="pacom-row-sub">⚡ 控制排程 · ! 告警触发 · 虚线为 No Data 断流</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <select class="pacom-select" name="tsInterval" data-ts-interval aria-label="采样粒度" style="height:28px; font-size:12px;">
                      <option value="15m" ${Y==="15m"?"selected":""}>15 分钟</option>
                      <option value="1h" ${Y==="1h"?"selected":""}>1 小时</option>
                      <option value="1d" ${Y==="1d"?"selected":""}>1 天</option>
                    </select>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${M==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${M==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                  </div>
                </div>
                ${Ke(v,M)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="lov-kpi-strip" role="region" aria-label="核心统计指标">
                ${H.kpis.map(r=>{const U=Ze(r.value,r.unit);return`
                      <div class="lov-kpi-cell" title="${U.title}">
                        <span class="lov-kpi-label">${r.label}</span>
                        <div class="lov-kpi-value">
                          <span>${U.value}</span>
                          ${U.unit?`<span class="lov-kpi-unit">${U.unit}</span>`:""}
                        </div>
                        <span class="lov-kpi-delta">${r.delta??"与基线持平"}</span>
                      </div>`}).join("")}
              </div>

              <section class="lov-section">
                <div class="lov-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="lov-section-title">${_?.label??"趋势"}趋势（${H.unit}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${G.label} · 更新于 ${H.updatedAt.slice(5,16).replace("T"," ")}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${R}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
                        <span class="lov-switch-thumb"></span>
                      </button>
                    </label>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${j==="chart"}" data-chart-mode="chart">趋势图</button>
                      <button class="pacom-tab" aria-selected="${j==="table"}" data-chart-mode="table">明细原表</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-card" style="gap:16px;">
                  ${j==="chart"?Ye(H,R):`
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
                            ${H.series.map(r=>{const U=typeof r.baseline=="number"&&r.value>r.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${r.label}</strong></td>
                                    <td>${r.value.toLocaleString("en-US")}</td>
                                    <td>${r.baseline!==void 0?r.baseline.toLocaleString("en-US"):"-"}</td>
                                    <td><span class="pacom-badge ${U?"pacom-badge--warning":"pacom-badge--online"}">${U?"超基线":"正常"}</span></td>
                                  </tr>`}).join("")}
                          </tbody>
                        </table>
                      </div>`}
                  <div class="lov-banner">
                    <div class="lov-banner-text">
                      <span class="lov-banner-title">${_?.desc??"空间运行洞察"}</span>
                      <span class="lov-banner-sub">
                        ${C.length>0?`当前有 ${C.length} 个功能区指标偏高（${C.map(r=>r.zoneName).join("、")}），建议前往智能策略优化启停时段。`:L.summary}
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
                          ${H.zoneBreakdown.map(r=>{const U=Math.max(8,Math.round(r.value/a*100));return`
                                <tr>
                                  <td style="font-weight:500;">${r.zoneName.replace(/^7F\s*/,"")}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${U}%; height:100%; border-radius:999px; background:${r.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${r.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${r.unit}</span></td>
                                  <td>
                                    <span class="pacom-badge ${r.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${r.status==="warning"?"偏高关注":"正常"}
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
                    <h2 class="lov-section-title">${T?"E7F 空间对照预览":P==="energy"&&q==="load"?"峰谷负荷分布（Load Profile）":L.title}</h2>
                    ${!T&&P==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${q==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${q==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${T?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${T?'<img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
                        ${P==="environment"?`
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
                        ${(P==="energy"&&q==="load"?He:L.items).map(r=>`
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                                <span style="font-weight:500; color:var(--pacom-text-primary);">${r.name}</span>
                                <span class="pacom-row-sub">${r.detail} · <strong style="color:var(--pacom-text-primary);">${r.pct}%</strong></span>
                              </div>
                              <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                <div style="width:${Math.min(100,r.pct)}%; height:100%; border-radius:999px; background:${r.color};"></div>
                              </div>
                            </div>`).join("")}`}
                  </div>
                </section>
              </div>
            </div>`}
      </div>
    `,t.querySelectorAll("[data-cat]").forEach(r=>{r.addEventListener("click",()=>{E=r.dataset.cat??"energy",I="",E==="timeseries"?i():w()})}),t.querySelector("[data-scope-select]")?.addEventListener("change",r=>{F=r.currentTarget.value,i()}),t.querySelector("[data-range-select]")?.addEventListener("change",r=>{b=r.currentTarget.value??"7d",w()}),t.querySelector("[data-custom-start]")?.addEventListener("change",r=>{D=r.currentTarget.value}),t.querySelector("[data-custom-end]")?.addEventListener("change",r=>{S=r.currentTarget.value}),t.querySelectorAll("[data-chart-mode]").forEach(r=>{r.addEventListener("click",()=>{j=r.dataset.chartMode??"chart",i()})}),t.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{R=!R,i()}),t.querySelectorAll("[data-energy-right]").forEach(r=>{r.addEventListener("click",()=>{q=r.dataset.energyRight??"breakdown",i()})}),t.querySelector("[data-export-csv]")?.addEventListener("click",()=>{h?Qe(v):Xe(H)}),t.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{T=!T,i()}),t.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),t.querySelectorAll("[data-ts-dev]").forEach(r=>{r.addEventListener("change",()=>{const U=r.dataset.tsDev;U&&(r.checked?$.add(U):$.delete(U),i())})}),t.querySelectorAll("[data-ts-mode]").forEach(r=>{r.addEventListener("click",()=>{M=r.dataset.tsMode??"grouped",i()})}),t.querySelector("[data-ts-interval]")?.addEventListener("change",r=>{Y=r.currentTarget.value??"1h",i()}),t.querySelectorAll("[data-load-fav]").forEach(r=>{r.addEventListener("click",()=>{const U=W.find(le=>le.id===r.dataset.loadFav);U&&($.clear(),U.deviceIds.forEach(le=>$.add(le)),M=U.mode,Y=U.interval,I=`已加载收藏视图「${U.name}」。`,i())})}),t.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if($.size===0)return;const r=`自定义对比 #${W.length+1}（${$.size} 台）`;W.push({id:`fav-${Date.now()}`,name:r,deviceIds:Array.from($),mode:M,interval:Y}),I=`已保存当前时序配置为「${r}」。`,i()})}await w()}const et=[{group:"一、项目配置",items:[{id:"projects",label:"项目与楼宇"},{id:"floors",label:"楼层与功能区"}]},{group:"二、系统接入",items:[{id:"connections",label:"网关与数据健康"}]},{group:"三、设备部署",items:[{id:"floorplan",label:"图纸标点与绑定"},{id:"inventory",label:"设备四态台账"}]},{group:"四、交付验收",items:[{id:"delivery",label:"进度与交付冻结"}]}],tt={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},at={frozen:"已冻结",draft:"草稿",delivered:"已交付"},st={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function lt(t){return t.category==="gateway"?"主控网关":t.category==="lighting"?t.name.includes("702")?"702 照明":"主照明":t.category==="hvac"?t.name.includes("VAV")?"VAV-02":"FCU-01":t.category==="sensor"?"环境传感":t.name.slice(0,6)}async function ot(t,e,s){let l="floorplan",o="all",n=await e.getSpatialTree(),f=[],E=[],b=[],D=null,S=!1,F=!1,j=null,R="",q="";async function T(){q="";const[M,Y,$,W]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(c.floorId).catch(()=>[]),e.listConnections(c.projectId),e.listDeliveryBatches(c.floorId)]);n=M,f=Y,E=$,b=W,f.some(w=>w.id===D)||(D=f[0]?.id??null),S=f.find(w=>w.id===D)?.physicalInstalled??!1,z()}function O(M){q="",M.connectivity==="offline"?q=`单机回读自检未通过（FAIL）：「${M.name}」当前离线，请先在「网关与数据健康」核查 ${M.hardwareBinding?.networkAddress??"-"} 链路状态。`:R=`单机回读自检通过（PASS）：「${M.name}」指令下发 → 状态回读一致 → 已安全自动恢复原工况。`,z()}function z(){const M=f.find(a=>a.id===D)??null,Y=s.scope.canEditDeployment,$=E.reduce((a,v)=>a+v.collectedPoints,0),W=E.reduce((a,v)=>a+v.calculatedPoints,0),I=E.filter(a=>a.status==="connected").length,w=E.filter(a=>a.status!=="connected"),i=f.filter(a=>!!a.planPoint).length,h=f.filter(a=>a.physicalInstalled).length,P=f.length-h,_=f.length-i,G=f.filter(a=>o==="unverified"?!a.physicalInstalled:o==="unplaced"?!a.planPoint:!0),H=n.buildings.find(a=>a.id===c.buildingId),C=n.floors.filter(a=>a.buildingId===c.buildingId),L=n.zones.filter(a=>a.floorId===c.floorId);t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">系统部署</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">当前试点：广实2号园 / E栋 7F</span>
              <span class="pacom-badge ${Y?"pacom-badge--online":"pacom-badge--warning"}">
                ${Y?"可编辑部署与硬件绑定":"只读权限（写入将被服务端 403 拦截）"}
              </span>
            </div>
          </div>
        </header>

        ${R?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${R}</span></div>`:""}
        ${q?`<div class="pacom-alert-banner">${q}</div>`:""}

        <div class="lov-subnav-layout">
          <nav class="lov-subnav-rail" style="width:176px;" aria-label="工程部署阶段导轨">
            ${et.map(a=>`
              <div class="lov-subnav-group">
                <div class="lov-subnav-group-title">${a.group}</div>
                ${a.items.map(v=>`
                    <button type="button" class="lov-subnav-item" aria-current="${l===v.id?"true":"false"}" data-dsec="${v.id}">
                      <span>${v.label}</span>
                      ${v.id==="connections"&&w.length>0?`<span class="pacom-badge pacom-badge--warning">${w.length}</span>`:""}
                      ${v.id==="floorplan"&&P>0?`<span class="pacom-badge pacom-badge--neutral">${P}</span>`:""}
                    </button>`).join("")}
              </div>`).join("")}
          </nav>

          <div class="lov-subnav-main" style="${l==="floorplan"?"overflow:hidden; padding:0;":"padding:4px 4px 24px;"}">
            ${l==="floorplan"?`
                <section class="pacom-split" style="height:100%;">
                  <aside class="pacom-left-pane" style="--pacom-sidebar-width:312px;">
                    <div class="pacom-pane-toolbar">
                      <div style="font-weight:500;">E7F 图纸标点与四态绑定（${f.length}）</div>
                      <div class="pacom-row-sub">图上放点仅更新坐标，绝不自动改写物理安装态或硬件绑定。</div>
                      <div class="lov-count-pills" role="group" aria-label="筛选核验状态">
                        <button type="button" class="lov-count-pill" style="height:26px; font-size:12px;" aria-pressed="${o==="all"}" data-dev-filter="all">
                          <span>全部</span><span class="lov-count-num">${f.length}</span>
                        </button>
                        <button type="button" class="lov-count-pill" style="height:26px; font-size:12px;" aria-pressed="${o==="unverified"}" data-dev-filter="unverified">
                          <span>待复核</span><span class="lov-count-num">${P}</span>
                        </button>
                        <button type="button" class="lov-count-pill" style="height:26px; font-size:12px;" aria-pressed="${o==="unplaced"}" data-dev-filter="unplaced">
                          <span>未标点</span><span class="lov-count-num">${_}</span>
                        </button>
                      </div>
                    </div>
                    <div class="pacom-list">
                      ${G.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">该筛选条件下无设备</div>':G.map(a=>`
                                <div class="pacom-row ${a.id===D?"is-selected":""}" data-pick-dev="${a.id}">
                                  <div style="min-width:0;">
                                    <div class="pacom-row-title">${a.name}</div>
                                    <div class="pacom-row-sub">v${a.version} · ${a.hardwareBinding?.protocol.toUpperCase()??"未绑定"} · ${a.physicalInstalled?"物理已复核":"待物理复核"}</div>
                                  </div>
                                  <span class="pacom-badge ${a.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">
                                    ${a.planPoint?`${Math.round(a.planPoint.x*100)}%,${Math.round(a.planPoint.y*100)}%`:"未标点"}
                                  </span>
                                </div>`).join("")}
                    </div>
                    ${M?`
                        <form data-role="binding-form" style="padding:14px 16px; border-top:var(--hw) solid var(--pacom-border-subtle); background:var(--pacom-surface-primary); display:flex; flex-direction:column; gap:10px;">
                          <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-weight:500; font-size:13px;">显式硬件绑定与现场复核</span>
                            <span class="pacom-badge pacom-badge--neutral">${M.id}</span>
                          </div>
                          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                            <select class="pacom-select" name="protocol" aria-label="通信协议">
                              ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(a=>`<option value="${a}" ${M.hardwareBinding?.protocol===a?"selected":""}>${a.toUpperCase()}</option>`).join("")}
                            </select>
                            <input class="pacom-input" name="networkAddress" placeholder="网络地址/主题" value="${M.hardwareBinding?.networkAddress??""}" aria-label="网络地址" />
                          </div>
                          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                            <input class="pacom-input" name="portOrChannel" placeholder="端口/回路" value="${M.hardwareBinding?.portOrChannel??""}" aria-label="端口或回路" />
                            <div style="display:inline-flex; align-items:center; gap:6px; flex-shrink:0;">
                              <span class="pacom-row-sub">物理已复核</span>
                              <button type="button" class="lov-switch" role="switch" aria-checked="${S}" data-toggle-phys="1" aria-label="现场物理安装已复核" ${Y?"":"disabled"}>
                                <span class="lov-switch-thumb"></span>
                              </button>
                            </div>
                          </div>
                          <div style="display:flex; gap:6px; flex-wrap:wrap;">
                            <button class="pacom-btn" type="button" data-toggle-place="1">${F?"取消标点":"点图更新坐标"}</button>
                            <button class="pacom-btn" type="button" data-ftt-test="1" title="验证指令下发、回读并自动复位">单机自检</button>
                            <button class="pacom-btn pacom-btn--primary" type="submit" style="flex:1;" ${Y?"":"disabled"}>保存绑定（v${M.version}）</button>
                          </div>
                        </form>`:""}
                  </aside>
                  <div class="pacom-splitter"></div>
                  <main class="pacom-right-pane">
                    <div class="pacom-canvas-stage" data-role="deploy-stage" style="cursor:${F?"crosshair":"default"};">
                      <div class="pacom-canvas-viewport">
                        <div class="pacom-plan-wrap" data-role="deploy-plan">
                          <img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 部署平面图" />
                          ${f.filter(a=>a.planPoint).map(a=>`
                              <button type="button" class="pacom-pin ${a.id===D?"is-selected":""} ${a.connectivity==="offline"?"pacom-pin--offline":""}"
                                style="left:${(a.planPoint.x*100).toFixed(2)}%; top:${(a.planPoint.y*100).toFixed(2)}%;"
                                data-pick-dev="${a.id}" title="${a.name}">
                                <span class="pacom-dot ${a.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                <span>${lt(a)}</span>
                              </button>`).join("")}
                        </div>
                      </div>
                      ${F&&M?`<div style="position:absolute; top:16px; left:16px; z-index:8;" class="pacom-badge pacom-badge--accent">标点模式：点击图纸任意位置更新「${M.name}」的 2D 坐标（不改动硬件绑定）</div>`:""}
                    </div>
                  </main>
                </section>`:l==="projects"?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">项目与楼宇归属配置</h2>
                      <span class="pacom-row-sub">共 ${n.projects.length} 个授权项目 · ${n.buildings.length} 栋楼宇</span>
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                      ${n.projects.map(a=>{const v=n.buildings.filter(r=>r.projectId===a.id);return`
                            <div class="pacom-card" style="padding:16px; gap:10px;">
                              <img src="${a.imageUrl??"./media/gzlab.jpg"}" alt="${a.name}" style="width:100%; height:132px; object-fit:cover; border-radius:10px;" />
                              <div>
                                <strong style="font-size:15px; font-weight:500;">${a.name}</strong>
                                <div class="pacom-row-sub">${a.city??""} ${a.address??""} · ${v.length} 栋楼宇</div>
                              </div>
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                ${v.map(r=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${r.name}</strong> · 地上 ${r.aboveFloors}F / ${r.areaSqm??"-"} m²</span>
                                      <span class="pacom-badge ${r.id===c.buildingId?"pacom-badge--accent":"pacom-badge--neutral"}">${r.id===c.buildingId?"含 E7F 试点":"对照楼宇"}</span>
                                    </div>`).join("")}
                              </div>
                            </div>`}).join("")}
                    </div>
                  </section>`:l==="floors"?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">${H?.name??"E栋"} 楼层与 2D 图纸清单</h2>
                        <span class="pacom-row-sub">共登记 ${C.length} 个楼层</span>
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
                              ${C.map(a=>{const v=a.id===c.floorId,r=s.scope.allowedFloorIds.includes(a.id);return`
                                    <tr>
                                      <td><strong>${H?.name??""} ${a.name}</strong></td>
                                      <td><span class="pacom-badge ${a.plan?"pacom-badge--online":"pacom-badge--neutral"}">${a.plan?"已上传 2D 图纸":"待上传图纸"}</span></td>
                                      <td>${v?`${f.length} 台设备 · ${L.length} 个功能区`:"-"}</td>
                                      <td><span class="pacom-badge ${r?"pacom-badge--accent":"pacom-badge--warning"}">${r?"已授权":"未授权"}</span></td>
                                      <td style="text-align:right;">
                                        ${v?'<button type="button" class="pacom-btn" data-dsec="floorplan">去标点与绑定 →</button>':'<span class="pacom-row-sub">暂未入网</span>'}
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
                        <span class="pacom-row-sub">${L.length} 个逻辑功能区</span>
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
                              ${L.map(a=>{const v=f.filter(U=>U.logicalZoneId===a.id),r=v.filter(U=>U.physicalInstalled).length;return`
                                    <tr>
                                      <td><strong>${a.name.replace(/^7F\s*/,"")}</strong></td>
                                      <td>${v.length} 台</td>
                                      <td><span class="pacom-badge ${r===v.length?"pacom-badge--online":"pacom-badge--warning"}">${r} / ${v.length} 已复核</span></td>
                                    </tr>`}).join("")}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>`:l==="connections"?`
                      <div class="lov-kpi-strip" role="region" aria-label="数据采集健康度">
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">已连通通道</span>
                          <div class="lov-kpi-value">${I}<span class="lov-kpi-unit">/ ${E.length}</span></div>
                          <span class="lov-kpi-delta">边缘网关在线监控</span>
                        </div>
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">数据采集健康度</span>
                          <div class="lov-kpi-value">${E.length>0?Math.round(I/E.length*100):100}<span class="lov-kpi-unit">%</span></div>
                          <span class="lov-kpi-delta">区分设备真故障与断流</span>
                        </div>
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">原始采集点</span>
                          <div class="lov-kpi-value">${$}<span class="lov-kpi-unit">点</span></div>
                          <span class="lov-kpi-delta">协议直采实时遥测</span>
                        </div>
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">衍生计算点</span>
                          <div class="lov-kpi-value">${W}<span class="lov-kpi-unit">点</span></div>
                          <span class="lov-kpi-delta">能碳与聚合虚拟点位</span>
                        </div>
                      </div>

                      ${w.length>0?`
                          <div class="lov-banner lov-banner--critical">
                            <div class="lov-banner-text">
                              <span class="lov-banner-title">检测到 ${w.length} 条采集通道通信降级（${w.map(a=>a.name).join("、")}）</span>
                              <span class="lov-banner-sub">排查建议：请核查目标网关端口（如 502）、RS485 终端电阻与从站地址配置，排除断流后再核验末端设备。</span>
                            </div>
                          </div>`:""}

                      <section class="lov-section">
                        <div class="lov-section-head">
                          <h2 class="lov-section-title">边缘网关与协议接入清单（App Status）</h2>
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
                                  <th>健康状态</th>
                                  <th style="text-align:right;">操作</th>
                                </tr>
                              </thead>
                              <tbody>
                                ${E.map(a=>{const v=tt[a.status]??{label:a.status,cls:"pacom-badge--neutral"};return`
                                      <tr>
                                        <td><strong>${a.name}</strong></td>
                                        <td><span class="pacom-badge pacom-badge--neutral">${a.protocol.toUpperCase()}</span></td>
                                        <td><code style="font-size:12px;">${a.endpoint}</code></td>
                                        <td>采集 ${a.collectedPoints} / 计算 ${a.calculatedPoints}</td>
                                        <td><span class="pacom-badge ${v.cls}">${v.label}</span></td>
                                        <td>
                                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                                            <button type="button" class="pacom-btn" data-ping-conn="${a.id}">测试连通</button>
                                            <button type="button" class="pacom-btn pacom-btn--ghost" data-copy-endpoint="${a.id}" data-endpoint-val="${a.endpoint}">
                                              ${j===a.id?"已复制":"复制端点"}
                                            </button>
                                          </div>
                                        </td>
                                      </tr>`}).join("")}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </section>`:l==="inventory"?`
                        <section class="lov-section">
                          <div class="lov-section-head">
                            <h2 class="lov-section-title">E7F 设备四态核验总表</h2>
                            <span class="pacom-row-sub">图上标点 · 硬件绑定 · 物理复核 · 在线通信四态独立追踪</span>
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
                                  ${f.map(a=>{const v=(a.logicalZoneId?st[a.logicalZoneId]:void 0)??"E7F";return`
                                        <tr>
                                          <td>
                                            <div style="font-weight:500;">${a.name}</div>
                                            <div class="pacom-row-sub">${v} · v${a.version}</div>
                                          </td>
                                          <td>
                                            <span class="pacom-badge ${a.planPoint?"pacom-badge--online":"pacom-badge--warning"}">
                                              ${a.planPoint?`${Math.round(a.planPoint.x*100)}%, ${Math.round(a.planPoint.y*100)}%`:"未标点"}
                                            </span>
                                          </td>
                                          <td>
                                            <span class="pacom-badge ${a.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">
                                              ${a.hardwareBinding?a.hardwareBinding.protocol.toUpperCase():"未绑定"}
                                            </span>
                                          </td>
                                          <td>
                                            <span class="pacom-badge ${a.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">
                                              ${a.physicalInstalled?"已复核":"待复核"}
                                            </span>
                                          </td>
                                          <td>
                                            <span class="pacom-badge ${a.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
                                              ${a.connectivity==="online"?"在线":"离线"}
                                            </span>
                                          </td>
                                          <td style="text-align:right;">
                                            <button type="button" class="pacom-btn" data-ftt-dev="${a.id}">单机自检</button>
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
                            <div class="lov-kpi-value">${i}<span class="lov-kpi-unit">/ ${f.length}</span></div>
                            <span class="lov-kpi-delta">${_===0?"全部设备已完成标点 ✓":`尚差 ${_} 台未标点 →`}</span>
                          </button>
                          <button type="button" class="lov-kpi-cell" data-dsec="inventory" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">2. 物理安装复核</span>
                            <div class="lov-kpi-value">${h}<span class="lov-kpi-unit">/ ${f.length}</span></div>
                            <span class="lov-kpi-delta" style="${P>0?"color:var(--pacom-status-warning);":""}">${P===0?"现场复核全绿 ✓":`待复核 ${P} 台，点击查看 →`}</span>
                          </button>
                          <button type="button" class="lov-kpi-cell" data-dsec="connections" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">3. 网关通道连通</span>
                            <div class="lov-kpi-value">${I}<span class="lov-kpi-unit">/ ${E.length}</span></div>
                            <span class="lov-kpi-delta" style="${w.length>0?"color:var(--pacom-status-warning);":""}">${w.length===0?"全部通道健康 ✓":`${w.length} 条通道降级，点击排查 →`}</span>
                          </button>
                        </div>

                        <section class="lov-section">
                          <div class="lov-section-head">
                            <h2 class="lov-section-title">E7F 交付冻结批次</h2>
                            <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${Y?"":"disabled"}>+ 新建交付冻结快照</button>
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
                                  ${b.map(a=>`
                                      <tr>
                                        <td>
                                          <div style="font-weight:500;">${a.versionTag}</div>
                                          <div class="pacom-row-sub"><code>${a.id}</code></div>
                                        </td>
                                        <td><strong>${a.verifiedCount}</strong> / ${a.deviceCount} 台设备</td>
                                        <td>
                                          <div>${a.frozenBy}</div>
                                          <div class="pacom-row-sub">${a.note??"-"}</div>
                                        </td>
                                        <td><span class="pacom-badge pacom-badge--accent">${at[a.status]??a.status}</span></td>
                                      </tr>`).join("")}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </section>`}
          </div>
        </div>
      </div>
    `,t.querySelectorAll("[data-dsec]").forEach(a=>{a.addEventListener("click",()=>{const v=a.dataset.dsec;v&&(l=v,R="",q="",z())})}),t.querySelectorAll("[data-dev-filter]").forEach(a=>{a.addEventListener("click",()=>{o=a.dataset.devFilter??"all",z()})}),t.querySelectorAll("[data-pick-dev]").forEach(a=>{a.addEventListener("click",()=>{D=a.dataset.pickDev??null,S=f.find(r=>r.id===D)?.physicalInstalled??!1,z()})}),t.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{S=!S,z()}),t.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{F=!F,z()}),t.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{M&&O(M)}),t.querySelectorAll("[data-ftt-dev]").forEach(a=>{a.addEventListener("click",()=>{const v=f.find(r=>r.id===a.dataset.fttDev);v&&O(v)})}),t.querySelectorAll("[data-ping-conn]").forEach(a=>{a.addEventListener("click",()=>{const v=E.find(r=>r.id===a.dataset.pingConn);v&&(q="",v.status==="connected"?R=`连通性测试通过：「${v.name}」（${v.endpoint}）响应正常，延迟 18 ms。`:q=`连通性测试异常：「${v.name}」（${v.endpoint}）超时无应答，建议排查边缘网关端口与 RS485 链路。`,z())})}),t.querySelectorAll("[data-copy-endpoint]").forEach(a=>{a.addEventListener("click",async()=>{const v=a.dataset.endpointVal??"",r=a.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(v),j=r,z(),window.setTimeout(()=>{j=null,z()},1600)}catch{}})}),t.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async a=>{if(!F||!M)return;const v=a.currentTarget.getBoundingClientRect(),r=Math.max(.02,Math.min(.98,(a.clientX-v.left)/v.width)),U=Math.max(.02,Math.min(.98,(a.clientY-v.top)/v.height));try{await e.updateDevicePlanPoint({deviceId:M.id,floorId:c.floorId,planVersion:M.planPoint?.planVersion??1,x:r,y:U,expectedVersion:M.version}),F=!1,R=`已更新「${M.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await T()}catch(le){q=le instanceof Error?le.message:String(le),z()}}),t.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async a=>{if(a.preventDefault(),!M)return;const v=new FormData(a.currentTarget);try{await e.updateDeviceHardwareBinding({deviceId:M.id,gatewayId:M.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(v.get("protocol")),networkAddress:String(v.get("networkAddress")??""),portOrChannel:String(v.get("portOrChannel")??""),physicalInstalled:S,expectedVersion:M.version}),R=`已保存「${M.name}」的硬件绑定与物理安装复核状态。`,await T()}catch(r){q=r instanceof Error?r.message:String(r),z()}}),t.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const a=await e.freezeDeliveryBatch(c.floorId,"系统部署交付验收发起冻结");R=`已生成冻结批次 ${a.versionTag}（核验 ${a.verifiedCount}/${a.deviceCount}）。`,await T()}catch(a){q=a instanceof Error?a.message:String(a),z()}})}await T()}function nt(t){if(t.connectivity==="offline")return`${t.name.includes("VAV")?"VAV-02":t.name.slice(0,6)} 离线`;if(t.category==="lighting"){const e=t.name.includes("702")?"702 照明":"主照明",s=Number(t.telemetry.dimming?.value??0);return s>0?`${e} ${s}%`:`${e} 关`}return t.category==="hvac"?`${t.name.includes("VAV")?"VAV-02":"FCU-01"} ${t.telemetry.setpoint?.value??24}°C`:t.category==="sensor"?`环境 ${t.telemetry.temp?.value??"23.4"}°C`:t.category==="gateway"?"主控网关":t.name.slice(0,6)}const Ee="pacom.web.e7f.leftWidth",Fe={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},it={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},ct={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:42,top:42,width:14,height:22}};function y(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function rt(t){return t.level==="all-projects"?"all":t.level==="project"?`project:${t.projectId}`:t.level==="building"?`building:${t.projectId}:${t.buildingId}`:`floor:${t.projectId}:${t.buildingId}:${t.floorId}`}async function dt(t,e,s){const l=await e.getSpatialTree(),o=e.mode==="demo",n=s.scope.canControlDevices,f=s.scope.canManageAlarms,E=s.scope.allowedZoneIds?.length?s.scope.allowedZoneIds:null;let b={level:"floor",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId},D="devices",S="canvas",F="",j="all",R="all";const q=new URLSearchParams(window.location.hash.split("?")[1]??""),T=q.get("device"),O=q.get("zone");let z=T,M=!!T,Y=!1,$="devices";const W=new Set,I=new Set;let w=[],i=[],h=[],P=null,_=null,G=1,H=0,C=0,L=Number(localStorage.getItem(Ee)||400);(!Number.isFinite(L)||L<320||L>680)&&(L=400);let a=null;function v(){return l.zones.filter(d=>!(b.level==="floor"&&d.floorId!==b.floorId||E&&!E.includes(d.id)))}async function r(d,A=!1){b=d,_=null,R=A&&O?O:"all",Y=!1,I.clear(),G=1,H=0,C=0,a&&(a(),a=null);const p=b.level==="floor"?b.floorId:c.floorId;if(b.level==="floor")try{const[m,k,Z]=await Promise.all([e.getFloorDevices(b.floorId),e.listAlarms(b.floorId),e.listWorkOrders(b.floorId)]);w=m,i=k,h=Z,w.some(N=>N.id===z)?A&&T&&(M=!0):(z=w[1]?.id??w[0]?.id??null,M=!1),a=e.subscribeFloorEvents(b.floorId,async N=>{N.type==="control.receipt.updated"&&P?.batchId===N.batchId&&(P=await e.getControlBatch(N.batchId)),(N.type==="telemetry.updated"||N.type==="device.connectivity")&&b.level==="floor"&&(w=await e.getFloorDevices(b.floorId)),N.type==="alarm.changed"&&b.level==="floor"&&(i=await e.listAlarms(b.floorId)),K()})}catch(m){w=[],i=[],h=[],z=null,M=!1,_=m instanceof Error?m.message:String(m)}else{M=!1;const[m,k,Z]=await Promise.all([e.getFloorDevices(p).catch(()=>[]),e.listAlarms(p).catch(()=>[]),e.listWorkOrders(p).catch(()=>[])]);w=m,i=k,h=Z}Q()}function U(d){return d?l.zones.find(A=>A.id===d)?.name??d:"未分配逻辑区"}function le(){const d=F.trim().toLowerCase();return w.filter(A=>R!=="all"&&A.logicalZoneId!==R||j!=="all"&&A.category!==j?!1:d?A.name.toLowerCase().includes(d)||A.id.toLowerCase().includes(d)||U(A.logicalZoneId).toLowerCase().includes(d):!0)}async function se(d,A,p){!d.length||b.level!=="floor"||!n||(d.forEach(m=>W.add(m)),P=await e.dispatchControlBatch({floorId:b.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:d.map(m=>({deviceId:m,command:A,targetValue:p}))}),K())}function K(){const d=document.activeElement,A=d?.dataset?.role,p=d&&"selectionStart"in d?d.selectionStart:null,m=d&&"selectionEnd"in d?d.selectionEnd:null,k=t.querySelector(".pacom-list")?.scrollTop??0;Q();const Z=t.querySelector(".pacom-list");if(Z&&(Z.scrollTop=k),A==="search"){const N=t.querySelector('[data-role="search"]');N&&(N.focus(),p!==null&&m!==null&&N.setSelectionRange(p,m))}}function pe(){const d=t.querySelector('[data-role="canvas-viewport"]');d&&(d.style.transform=`translate(${H}px, ${C}px) scale(${G})`);const A=t.querySelector('[data-role="canvas-hint"]');A&&(A.textContent=`缩放 ${Math.round(G*100)}% · 滚轮缩放 · 拖动平移 · 双击复位`)}function ge(){return b.level==="floor"?`building:${b.projectId}:${b.buildingId}`:b.level==="building"?`project:${b.projectId}`:b.level==="project"?"all":null}function be(){const d=rt(b),A=l.projects.map(k=>`<option value="project:${y(k.id)}" ${d===`project:${k.id}`?"selected":""}>项目 · ${y(k.name)}</option>`).join(""),p=l.buildings.map(k=>{const Z=`building:${k.projectId}:${k.id}`;return`<option value="${y(Z)}" ${d===Z?"selected":""}>楼宇 · 广实2号园 / ${y(k.name)}</option>`}).join(""),m=l.floors.map(k=>{const Z=s.scope.allowedFloorIds.includes(k.id),N=`floor:${c.projectId}:${k.buildingId}:${k.id}`;return`<option value="${y(N)}" ${d===N?"selected":""}>楼层 · 广实2号园 / E栋 / ${y(k.name)}${Z?"":"（未授权）"}</option>`}).join("");return`
      <option value="all" ${d==="all"?"selected":""}>全部项目（${l.projects.length} 个授权园区）</option>
      <optgroup label="项目级">${A}</optgroup>
      <optgroup label="楼宇级">${p}</optgroup>
      <optgroup label="楼层级">${m}</optgroup>
    `}function Ce(){if(b.level==="all-projects"){const A=w.filter(m=>m.connectivity==="online").length,p=i.filter(m=>m.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">授权项目总览（${l.projects.length}）</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">楼宇</span><strong>${l.buildings.length} 栋</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线</span><strong>${A}/${w.length}</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:var(--pacom-status-warning);">${p} 条</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${l.projects.map(m=>{const k=l.buildings.filter(Z=>Z.projectId===m.id).length;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="project:${y(m.id)}">
                  <img src="${y(m.imageUrl??"./media/gzlab.jpg")}" alt="${y(m.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${y(m.name)}</strong>
                    <span class="pacom-badge pacom-badge--accent">${k} 栋楼宇</span>
                  </div>
                  <div class="pacom-row-sub">${y(m.city??"")} · ${y(m.address??"")}</div>
                </article>`}).join("")}
        </div>
      `}const d=b;if(d.level==="project"){const A=l.projects.find(N=>N.id===d.projectId),p=l.buildings.filter(N=>N.projectId===d.projectId),m=w.filter(N=>N.connectivity==="online").length,k=w.length?Math.round(m/w.length*100):100,Z=i.filter(N=>N.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${y(A?.name??"园区")} · 楼宇绩效（${p.length}）</div>
          <div class="pacom-row-sub">${y(A?.city??"")} ${y(A?.address??"")}</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">在线率</span><strong>${k}%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:${Z>0?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${Z} 条</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>1,248 kWh</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${p.map(N=>{const x=N.id===c.buildingId;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="building:${y(N.projectId)}:${y(N.id)}">
                  <img src="${y(N.imageUrl??"./media/building-e.png")}" alt="${y(N.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${y(N.name)}</strong>
                    <span class="pacom-badge ${x?"pacom-badge--online":"pacom-badge--neutral"}">${x?`在线 ${k}% · 告警 ${Z}`:"运行平稳"}</span>
                  </div>
                  <div class="pacom-row-sub">地上 ${N.aboveFloors} 层 · 面积 ${N.areaSqm??"-"} m² · 舒适度达标 96%</div>
                </article>`}).join("")}
        </div>
      `}if(d.level==="building"){const A=l.buildings.find(x=>x.id===d.buildingId),p=l.floors.filter(x=>x.buildingId===d.buildingId),m=h.filter(x=>x.status!=="closed"&&x.status!=="resolved"),k=w.filter(x=>x.connectivity==="online").length,Z=w.length?Math.round(k/w.length*100):100,N=i.filter(x=>x.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${y(A?.name??"楼宇")} 运行概况</div>
          <div class="pacom-row-sub">地上 ${A?.aboveFloors??0} 层 · 面积 ${A?.areaSqm??"-"} m²</div>
          <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线率</span><strong>${Z}%（${k}/${w.length}）</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">舒适度达标</span><strong>96.2%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>418 kWh</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">告警 / 工单</span><strong style="color:var(--pacom-status-warning);">${N} 告警 · ${m.length} 工单</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:8px; padding:12px;">
          <div style="font-weight:500; font-size:13px;">楼层列表（点击进入 2D 平面控制）</div>
          ${p.length?p.map(x=>{const V=s.scope.allowedFloorIds.includes(x.id),X=x.id===c.floorId;return`
                      <div class="pacom-row" data-nav-scope="floor:${y(d.projectId)}:${y(d.buildingId)}:${y(x.id)}">
                        <div>
                          <div class="pacom-row-title">${y(A?.name??"")} ${y(x.name)}</div>
                          <div class="pacom-row-sub">${x.plan?"2D 平面图就绪":"暂未上传图纸"}${X&&N>0?` · ${N} 条待处理告警`:""}</div>
                        </div>
                        <span class="pacom-badge ${V?"pacom-badge--online":"pacom-badge--warning"}">${V?"进入楼层":"无权限"}</span>
                      </div>`}).join(""):'<div class="pacom-row-sub">该楼宇暂未配置试点楼层。</div>'}
        </div>
      `}if(D==="devices"){const A=le(),p=v(),m=Array.from(I);return`
        <div class="pacom-pane-toolbar">
          ${E?`<div class="pacom-info-banner">我的区域视图：仅显示当前账号获授权的 ${E.length} 个功能区及设备。</div>`:""}
          <div class="pacom-search-row">
            <input class="pacom-input" data-role="search" placeholder="搜索设备名 / ID / 区域…" value="${y(F)}" aria-label="搜索楼层设备" />
            <select class="pacom-select" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${j==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${j==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${j==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${j==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${j==="gateway"?"selected":""}>网关</option>
            </select>
          </div>
          ${p.length>0&&!_?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${R==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${p.map(k=>`<button type="button" class="pacom-zone-pill ${R===k.id?"is-active":""}" data-filter-zone="${y(k.id)}">${y(k.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; color:var(--pacom-text-secondary);">
            <span>当前可见 ${A.length} 台设备</span>
            <span>${n?`已勾选 ${m.length} 台`:"只读模式"}</span>
          </div>
        </div>
        <div class="pacom-list">
          ${_?`<div class="pacom-alert-banner">${y(_)}</div>`:A.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">没有匹配的设备</div>':A.map(k=>{const Z=k.id===z&&M,N=I.has(k.id),x=k.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline",V=k.category==="lighting"?`亮度 ${k.telemetry.dimming?.value??"--"}%`:k.category==="hvac"?`设定 ${k.telemetry.setpoint?.value??"--"}°C`:k.category==="sensor"?`${k.telemetry.temp?.value??"--"}°C · CO₂ ${k.telemetry.co2?.value??"--"}`:k.hardwareBinding?.networkAddress??"未绑定";return`
                        <div class="pacom-row ${Z?"is-selected":""}" data-select-device="${y(k.id)}">
                          <div class="pacom-row-main">
                            ${n?`<input type="checkbox" data-check-device="${y(k.id)}" ${N?"checked":""} style="margin-top:3px;" aria-label="勾选 ${y(k.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title">${y(k.name)}</div>
                              <div class="pacom-row-sub">${y(U(k.logicalZoneId))} · ${y(Fe[k.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${k.connectivity==="online"?"pacom-badge--online":"pacom-badge--neutral"}">
                            <span class="pacom-dot ${x}"></span>${y(V)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${n&&m.length>0?`
            <div class="pacom-batch-bar">
              <span style="font-size:12px;">显式批量目标：<strong>${m.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(D==="zones"){const A=v(),p={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">E7F 功能区快控（${A.length}）</div>
          <div class="pacom-row-sub">点击卡片同步高亮右侧平面图热区，支持按区域一键批量控制。</div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${A.map(m=>{const k=w.filter(X=>X.logicalZoneId===m.id),Z=k.filter(X=>X.connectivity==="online").length,N=k.filter(X=>X.category==="lighting"||X.category==="hvac").length,x=R===m.id,V=p[m.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${x?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${x?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${y(x?"all":m.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:14px; font-weight:500;">${y(m.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${Z}/${k.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时温度 ${V.temp} · 占用 ${V.occ}</div>
                  ${N>0?`
                      <div style="display:flex; gap:6px; margin-top:2px;">
                        <button type="button" class="pacom-btn" data-zone-power="${y(m.id)}" data-zone-val="true" ${n?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" data-zone-power="${y(m.id)}" data-zone-val="false" ${n?"":"disabled"}>区域全关</button>
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
        ${i.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">当前楼层无活跃告警</div>':i.map(A=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${y(A.title)}</strong>
                      <span class="pacom-badge ${A.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${A.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${y(A.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" data-locate-device="${y(A.deviceId)}">定位设备</button>
                      ${A.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" data-ack-alarm="${y(A.id)}" ${f?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function u(){const d=b,A=w.filter(x=>x.connectivity==="online").length,p=w.length?Math.round(A/w.length*100):100,m=i.filter(x=>x.status==="active").length;if(d.level==="all-projects"||d.level==="project"){const x=d.level==="project"?l.projects.find(X=>X.id===d.projectId):l.projects[0],V=l.buildings.filter(X=>!x||X.projectId===x.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:24px; cursor:default;">
          <div style="position:relative; width:min(760px, 94%); border-radius:16px; overflow:hidden; box-shadow:0 12px 32px rgba(15,23,42,0.14); background:#fff;">
            <img src="${y(x?.imageUrl??"./media/gzlab.jpg")}" alt="园区俯瞰" style="width:100%; height:440px; object-fit:cover; display:block;" />
            ${d.level==="all-projects"?l.projects.map((X,ae)=>`
                      <button type="button" class="pacom-pin is-selected" style="left:${ae===0?48:26}%; top:${ae===0?52:34}%;" data-nav-scope="project:${y(X.id)}">
                        <span class="pacom-dot pacom-dot--online"></span>
                        <span>${y(X.name)}</span>
                      </button>`).join(""):V.map((X,ae)=>{const ce=X.id===c.buildingId;return`
                        <button type="button" class="pacom-pin ${ce?"is-selected":""}" style="left:${ae===0?56:38}%; top:${ae===0?44:62}%;" data-nav-scope="building:${y(X.projectId)}:${y(X.id)}">
                          <span class="pacom-dot ${ce&&m>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                          <span>${y(X.name)} · ${ce?`在线 ${p}% · 告警 ${m}`:"运行平稳"}</span>
                        </button>`}).join("")}
          </div>
        </div>
      `}if(d.level==="building"){const x=l.buildings.find(ae=>ae.id===d.buildingId),V=l.floors.filter(ae=>ae.buildingId===d.buildingId),X=V.find(ae=>ae.id===c.floorId)??V[0];return`
        ${V.length?`
            <nav class="pacom-floor-rail" aria-label="整栋楼层选择轨道">
              <button type="button" class="pacom-floor-btn is-active" title="整栋视图">栋</button>
              ${V.map(ae=>{const ce=s.scope.allowedFloorIds.includes(ae.id),ue=ae.id===c.floorId&&m>0;return`<button type="button" class="pacom-floor-btn ${ce?"":"is-locked"}" data-nav-scope="floor:${y(d.projectId)}:${y(d.buildingId)}:${y(ae.id)}" title="${y(ae.name)}${ue?`（${m} 条待处理告警）`:""}">${y(ae.name.replace("F",""))}${ue?'<span class="pacom-floor-alert-dot"></span>':""}</button>`}).join("")}
            </nav>`:""}
        <div class="pacom-canvas-tools" aria-label="画布工具">
          <button type="button" class="pacom-tool-btn" data-zoom="reset" title="复位视图" aria-label="复位视图">⟲</button>
          <div class="pacom-tool-divider" aria-hidden="true"></div>
          <button type="button" class="pacom-tool-btn" data-zoom="in" title="放大" aria-label="放大">＋</button>
          <button type="button" class="pacom-tool-btn" data-zoom="out" title="缩小" aria-label="缩小">－</button>
        </div>
        <div class="pacom-canvas-stage" data-role="canvas-stage">
          <div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${H}px, ${C}px) scale(${G});">
            <img class="pacom-plan-img" src="${y(x?.imageUrl??"./media/building-e.png")}" alt="${y(x?.name??"楼宇")} 整栋实景图" />
          </div>
        </div>
        <div class="pacom-canvas-hint" style="pointer-events:auto; display:flex; align-items:center; gap:10px;">
          <span>${y(x?.name??"楼宇")} · 在线 ${p}% · 舒适度 96.2%</span>
          ${X?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:24px; padding:0 10px; font-size:12px;" data-nav-scope="floor:${y(d.projectId)}:${y(d.buildingId)}:${y(X.id)}">进入 ${y(X.name)} 平面图 →</button>`:""}
        </div>
      `}const k=l.floors.find(x=>x.id===d.floorId),Z=l.floors.filter(x=>x.buildingId===d.buildingId),N=v();return`
      <nav class="pacom-floor-rail" aria-label="楼层选择轨道">
        <button type="button" class="pacom-floor-btn" data-nav-scope="building:${y(d.projectId)}:${y(d.buildingId)}" title="返回整栋楼宇">栋</button>
        ${Z.map(x=>{const V=s.scope.allowedFloorIds.includes(x.id),X=x.id===c.floorId&&m>0;return`<button type="button" class="pacom-floor-btn ${x.id===d.floorId?"is-active":""} ${V?"":"is-locked"}"
              data-nav-scope="floor:${y(d.projectId)}:${y(d.buildingId)}:${y(x.id)}" title="${y(x.name)}${V?X?` · ${m} 条告警`:"":"（无权限）"}">
              ${y(x.name.replace("F",""))}
              ${X?'<span class="pacom-floor-alert-dot"></span>':""}
            </button>`}).join("")}
      </nav>

      <div class="pacom-canvas-tools" aria-label="画布工具">
        <button type="button" class="pacom-tool-btn" data-zoom="reset" title="复位视图" aria-label="复位视图">⟲</button>
        <div class="pacom-tool-divider" aria-hidden="true"></div>
        <button type="button" class="pacom-tool-btn" data-zoom="in" title="放大" aria-label="放大">＋</button>
        <button type="button" class="pacom-tool-btn" data-zoom="out" title="缩小" aria-label="缩小">－</button>
      </div>

      ${_?"":`
        <div class="lov-layer-bar" role="group" aria-label="平面图图层切换">
          <button type="button" class="lov-layer-btn" aria-pressed="${$==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${$==="temp"}" data-canvas-layer="temp">温度热区</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${$==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${$==="alarms"}" data-canvas-layer="alarms">告警叠加${i.filter(x=>x.status==="active").length>0?` (${i.filter(x=>x.status==="active").length})`:""}</button>
        </div>`}

      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${_?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${y(_)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${H}px, ${C}px) scale(${G});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${y(k?.plan?.imageUrl??"./media/7F.webp")}" alt="E栋 ${y(k?.name??"7F")} 平面图" />
                  ${N.map((x,V)=>{const X=ct[x.id];if(!X)return"";const ae=R===x.id,ce=["23.2°C","24.6°C","22.8°C","23.9°C"],ue=["有人 74%","会议中","有人 52%","空闲"],ee=$==="temp"?` · ${ce[V%ce.length]}`:$==="occupancy"?` · ${ue[V%ue.length]}`:"",re=$==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":$==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${ae?"is-active":""}"
                          style="left:${X.left}%; top:${X.top}%; width:${X.width}%; height:${X.height}%; ${ae?"":re}"
                          data-filter-zone="${y(ae?"all":x.id)}"
                          title="${y(x.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${y(x.name.replace(/^7F\s*/,""))}${ee}</span>
                        </button>`}).join("")}
                  ${w.filter(x=>x.planPoint).map(x=>{const V=i.some(ce=>ce.deviceId===x.id&&ce.status==="active"),X=R!=="all"&&x.logicalZoneId!==R||$==="alarms"&&!V,ae=$==="alarms"&&V?"background:var(--pacom-status-critical);":"";return`
                        <button type="button" class="pacom-pin ${x.id===z&&M?"is-selected":""} ${x.connectivity==="offline"?"pacom-pin--offline":""} ${X?"pacom-pin--dimmed":""}"
                          style="left:${(x.planPoint.x*100).toFixed(2)}%; top:${(x.planPoint.y*100).toFixed(2)}%; ${ae}"
                          data-pin-device="${y(x.id)}" title="${y(x.name)}">
                          <span class="pacom-dot ${V?"pacom-dot--critical":x.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${y(nt(x))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>

      ${_?"":`<div class="pacom-canvas-hint" data-role="canvas-hint">缩放 ${Math.round(G*100)}% · 滚轮缩放 · 拖动平移 · 双击复位</div>`}
      ${g()}
    `}function g(){if(b.level!=="floor"||!M)return"";const d=w.find(x=>x.id===z);if(!d)return"";const A=d.category==="lighting",p=d.category==="hvac",m=Number(d.telemetry.dimming?.value??50),k=Number(d.telemetry.setpoint?.value??24),Z=W.has(d.id),N=A?[{label:"当前开关",value:m>0?"开启":"关闭"},{label:"当前亮度",value:`${m}%`},{label:"实时功率",value:m>0?`${Math.round(m*1.4)} W`:"0 W"},{label:"运行模式",value:Z?"人工覆盖":"自动策略"}]:p?[{label:"室内温度",value:`${d.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${k.toFixed(1)}°C`},{label:"运行工况",value:d.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:Z?"人工覆盖":"自动策略"}]:d.category==="sensor"?[{label:"实时温度",value:`${d.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${d.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${d.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:d.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:d.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:d.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:d.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:d.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${y(d.name)}</h2>
            <div class="pacom-row-sub">${y(U(d.logicalZoneId))} · ${y(Fe[d.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${Z?"pacom-badge--warning":"pacom-badge--neutral"}">
              ${Z?"人工覆盖":"自动策略"}
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
          ${N.map(x=>`
              <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                <span class="pacom-row-sub">${x.label}</span>
                <strong style="font-size:13px; font-weight:500;">${y(x.value)}</strong>
              </div>`).join("")}
        </div>

        ${p?`
            <div class="lov-schematic-strip" aria-label="暖通工况简图">
              <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                <span class="pacom-row-sub">${d.connectivity==="online"?"制冷运转":"通信离线"}</span>
              </div>
              <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${y(d.telemetry.temp?.value??"23.8")}°</text>
                <rect x="80" y="8" width="54" height="28" rx="6" fill="${d.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${d.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${d.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${d.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${k.toFixed(1)}°C</text>
              </svg>
            </div>`:""}

        <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="pacom-row-sub">近 24 小时趋势（${A?"亮度 %":p?"温度 °C":d.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
            <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${y(d.id)}">查看完整时序 →</button>
          </div>
          <svg viewBox="0 0 280 42" style="width:100%; height:42px; display:block;">
            <line x1="0" y1="20" x2="280" y2="20" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
            <polyline fill="none" stroke="${d.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${A?"0,34 40,34 80,14 120,10 160,12 200,18 240,12 280,14":p?"0,24 40,26 80,22 120,18 160,16 200,19 240,21 280,18":"0,22 40,23 80,21 120,19 160,18 200,20 240,19 280,20"}" />
          </svg>
        </div>

        ${A||p?`
            <div class="pacom-control-box">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                ${Z&&n?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${y(d.id)}">恢复自动策略</button>`:n?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
              </div>
              ${d.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
              ${A?`
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${n?"":"disabled"}>开灯</button>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${n?"":"disabled"}>关灯</button>
                  </div>
                  <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                    亮度目标：<strong>${m}%</strong>
                    <input type="range" min="0" max="100" step="10" value="${m}" data-ctrl-slider="lighting.dimming" ${n?"":"disabled"} />
                  </label>`:`
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${n?"":"disabled"}>开机</button>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${n?"":"disabled"}>关机</button>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span style="font-size:12px;">设定温度：</span>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${k-.5}" ${n?"":"disabled"}>-0.5°C</button>
                    <strong>${k.toFixed(1)}°C</strong>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${k+.5}" ${n?"":"disabled"}>+0.5°C</button>
                  </div>`}
            </div>`:""}

        ${P?`
            <div class="pacom-control-box">
              <div style="font-size:12px; font-weight:500;">最近批次：<code>${y(P.batchId)}</code></div>
              <div class="pacom-receipt-list">
                ${P.receipts.map(x=>{const V=it[x.status]??{text:x.status,badge:"pacom-badge--neutral"};return`
                      <div class="pacom-receipt-item">
                        <div>
                          <div><strong>${y(x.deviceId)}</strong> · ${y(x.command)} → ${y(x.targetValue)}</div>
                          ${x.errorMessage?`<div style="color:var(--pacom-status-critical);">${y(x.errorMessage)}</div>`:""}
                        </div>
                        <span class="pacom-badge ${V.badge}">${V.text}</span>
                      </div>`}).join("")}
              </div>
            </div>`:""}

        <details class="lov-tech-details">
          <summary><span>技术标识与硬件绑定</span><span>▾</span></summary>
          <div class="pacom-kv-grid">
            <span class="pacom-kv-label">设备编号</span><span><code>${y(d.id)}</code> · v${d.version}</span>
            <span class="pacom-kv-label">图上点位</span><span>${d.planPoint?`x=${d.planPoint.x.toFixed(2)}, y=${d.planPoint.y.toFixed(2)} (图 v${d.planPoint.planVersion})`:"未标点"}</span>
            <span class="pacom-kv-label">物理安装</span><span>${d.physicalInstalled?"现场已确认":"待现场复核"}</span>
            <span class="pacom-kv-label">硬件绑定</span><span>${d.hardwareBinding?`${d.hardwareBinding.protocol.toUpperCase()} · ${d.hardwareBinding.networkAddress}`:"未绑定"}</span>
          </div>
        </details>
      </aside>
    `}function B(d){if(d==="all")return{level:"all-projects"};const A=d.split(":");return A[0]==="project"&&A[1]?{level:"project",projectId:A[1]}:A[0]==="building"&&A[1]&&A[2]?{level:"building",projectId:A[1],buildingId:A[2]}:A[0]==="floor"&&A[1]&&A[2]&&A[3]?{level:"floor",projectId:A[1],buildingId:A[2],floorId:A[3]}:{level:"all-projects"}}function J(){const d=w.filter(ee=>ee.connectivity==="online").length,A=w.length?Math.round(d/w.length*100):100,p=i.filter(ee=>ee.status==="active").length,m=h.filter(ee=>ee.status!=="closed"&&ee.status!=="resolved").length,k=b,Z=k.level==="building",N=k.level==="project"?l.projects.find(ee=>ee.id===k.projectId):l.projects[0],x=k.level==="building"?l.buildings.find(ee=>ee.id===k.buildingId):null,V=k.level==="building"?x?.name??"E栋":k.level==="project"?N?.name??"广实2号园":`全部授权项目（${l.projects.length}）`,X=k.level==="building"?`地上 ${x?.aboveFloors??0} 层 · 建筑面积 ${x?.areaSqm??"-"} m²`:`${N?.city??"广州"} ${N?.address??""} · 共 ${l.buildings.length} 栋楼宇`,ae=Z?"418 kWh":"1,248 kWh",ce=Math.round(96.2*.45+93.6*.35+A*.2),ue=k.level==="building"?l.floors.filter(ee=>ee.buildingId===k.buildingId).map(ee=>{const re=ee.id===c.floorId,ke=s.scope.allowedFloorIds.includes(ee.id);return`
              <div class="pacom-row" data-nav-scope="floor:${y(k.projectId)}:${y(k.buildingId)}:${y(ee.id)}">
                <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                  <span class="pacom-dot ${re&&p>0?"pacom-dot--warning":ke?"pacom-dot--online":"pacom-dot--offline"}"></span>
                  <div>
                    <div class="pacom-row-title">${y(x?.name??"")} ${y(ee.name)}</div>
                    <div class="pacom-row-sub">${ee.plan?"2D 平面控图就绪":"待上传图纸"}${re&&p>0?` · ${p} 条待处理告警`:""}</div>
                  </div>
                </div>
                <span class="pacom-badge ${ke?"pacom-badge--online":"pacom-badge--warning"}">${ke?"进入平面图 →":"未授权"}</span>
              </div>`}).join(""):l.buildings.filter(ee=>k.level!=="project"||ee.projectId===k.projectId).map(ee=>{const re=ee.id===c.buildingId;return`
              <div class="pacom-row" data-nav-scope="building:${y(ee.projectId)}:${y(ee.id)}">
                <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                  <span class="pacom-dot ${re&&p>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <div>
                    <div class="pacom-row-title">${y(ee.name)}</div>
                    <div class="pacom-row-sub">地上 ${ee.aboveFloors} 层 · ${ee.areaSqm??"-"} m² · 舒适度 96.2%</div>
                  </div>
                </div>
                <span class="pacom-badge ${re?"pacom-badge--accent":"pacom-badge--neutral"}">${re?`在线 ${A}% · 告警 ${p}`:"运行平稳"}</span>
              </div>`}).join("");return`
      <section class="lov-bento-shell">
        <div class="lov-bento-left">
          <div class="pacom-card" style="padding:16px 20px; gap:12px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px; flex-wrap:wrap;">
              <div>
                <div style="display:flex; align-items:center; gap:8px;">
                  <strong style="font-size:16px; font-weight:500;">${y(V)}</strong>
                  <span class="pacom-badge pacom-badge--online">综合健康 ${ce} 分</span>
                </div>
                <div class="pacom-row-sub" style="margin-top:4px;">${y(X)}</div>
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
              <div class="lov-kpi-value">${ae}</div>
              <svg viewBox="0 0 120 24" style="width:100%; height:22px;"><polyline fill="none" stroke="var(--pacom-accent-solid)" stroke-width="1.8" points="0,8 20,10 40,12 60,11 80,15 100,14 120,17" /></svg>
              <span class="lov-kpi-delta">较基线 -6.4% · 节能良好</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-go-analysis="health" style="border:0; background:transparent; text-align:left; cursor:pointer;">
              <span class="lov-kpi-label">设备在线率</span>
              <div class="lov-kpi-value">${A}<span class="lov-kpi-unit">%（${d}/${w.length}）</span></div>
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
                <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">待处理</span><strong style="color:var(--pacom-status-warning);">${p} 条</strong></div>
                <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">处理中工单</span><strong>${m} 单</strong></div>
                <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">月可节省</span><strong style="color:var(--pacom-status-online);">¥ 1,420</strong></div>
              </div>
              <div style="margin-top:auto;">
                <div class="pacom-row-sub" style="margin-bottom:4px;">近 7 天每日告警触发</div>
                <svg viewBox="0 0 210 44" style="width:100%; height:44px; display:block;">
                  ${[2,1,3,2,1,2,Math.max(1,p)].map((ee,re)=>`<rect x="${re*30+6}" y="${38-ee*9}" width="18" height="${ee*9}" rx="4" fill="${re===6?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.82" />`).join("")}
                </svg>
              </div>
            </div>

            <div class="pacom-card" style="padding:16px 18px; gap:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <strong style="font-size:14px; font-weight:500;">${Z?"楼层健康与告警导览":"楼宇健康与告警导览"}</strong>
                <span class="pacom-row-sub">点击下钻</span>
              </div>
              <div style="display:flex; flex-direction:column; gap:2px; overflow-y:auto;">
                ${ue}
              </div>
            </div>
          </div>
        </div>

        <main class="pacom-right-pane">
          ${u()}
        </main>
      </section>
    `}function te(d,A,p){if(!Y)return"";const m=Math.max(0,w.length-d);return`
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
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">本层均温 / 在线</span><strong>${y(p)}°C · ${d}/${w.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${A} 告警 · ${m} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖中设备</span><strong>${W.size} 台</strong></div>
        </div>
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">处理活跃告警 →</button>
        </div>
      </div>
    `}function Q(){const d=i.filter(k=>k.status==="active").length,A=w.filter(k=>k.connectivity==="online").length,p=ge(),m=w.find(k=>k.category==="sensor")?.telemetry.temp?.value??"23.4";t.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:10px; min-width:0; flex:1;">
              <h1 class="pacom-title" style="flex-shrink:0;">空间总览</h1>
              ${p?`<button type="button" class="lov-icon-btn" data-nav-scope="${y(p)}" title="返回上一空间层级" aria-label="返回上一空间层级">←</button>`:""}
              <div class="pacom-scope-pill" style="width:min(268px, 32vw); flex-shrink:1;" title="项目 / 楼宇 / 楼层空间范围切换">
                <select name="homeScope" data-role="scope-select" aria-label="选择查看范围">
                  ${be()}
                </select>
                <span class="pacom-scope-chevron">▾</span>
              </div>
              ${b.level==="floor"?`
                  <div class="pacom-tabs" role="tablist" style="flex-shrink:0;">
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${D==="devices"}" data-tab="devices">设备</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${D==="zones"}" data-tab="zones">区域</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${D==="alarms"}" data-tab="alarms">
                      告警 ${d>0?`<span class="pacom-badge pacom-badge--warning">${d}</span>`:""}
                    </button>
                  </div>`:""}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${b.level==="floor"&&!_?`<button type="button" class="pacom-badge pacom-badge--online" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-briefing="1" title="点击查看今日运行简报">在线 ${A}/${w.length} · ${y(m)}°C · 简报 ▾</button>`:o?'<span class="pacom-badge pacom-badge--neutral"><span class="pacom-dot pacom-dot--offline"></span>演示模式</span>':'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>'}
              <div class="pacom-tabs pacom-mobile-view-switch" role="group" aria-label="窄屏视图切换">
                <button type="button" class="pacom-tab" aria-selected="${S==="list"}" data-mobile-pane-btn="list">列表</button>
                <button type="button" class="pacom-tab" aria-selected="${S==="canvas"}" data-mobile-pane-btn="canvas">平面图</button>
              </div>
            </div>
          </div>
        </header>

        ${te(A,d,m)}

        ${b.level==="floor"?`
            <section class="pacom-split" data-mobile-pane="${S}">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:${L}px;">
                ${Ce()}
              </aside>
              <div class="pacom-splitter" role="separator" tabindex="0" aria-orientation="vertical" aria-label="调整左右栏宽度" data-role="splitter"></div>
              <main class="pacom-right-pane">
                ${u()}
              </main>
            </section>`:J()}
      </div>
    `,de()}function de(){t.querySelector('[data-role="scope-select"]')?.addEventListener("change",p=>{r(B(p.currentTarget.value))}),t.querySelectorAll("[data-nav-scope]").forEach(p=>{p.addEventListener("click",()=>{p.dataset.navScope&&r(B(p.dataset.navScope))})}),t.querySelectorAll("[data-tab]").forEach(p=>{p.addEventListener("click",()=>{D=p.dataset.tab,Q()})}),t.querySelectorAll("[data-mobile-pane-btn]").forEach(p=>{p.addEventListener("click",()=>{S=p.dataset.mobilePaneBtn,Q()})}),t.querySelector('[data-role="search"]')?.addEventListener("input",p=>{F=p.currentTarget.value,K()}),t.querySelector('[data-role="category"]')?.addEventListener("change",p=>{j=p.currentTarget.value,Q()}),t.querySelectorAll("[data-filter-zone]").forEach(p=>{p.addEventListener("click",m=>{m.stopPropagation(),R=p.dataset.filterZone??"all",Q()})}),t.querySelectorAll("[data-select-device]").forEach(p=>{p.addEventListener("click",m=>{m.target.tagName!=="INPUT"&&(z=p.dataset.selectDevice??null,M=!0,S="canvas",Q())})}),t.querySelectorAll("[data-check-device]").forEach(p=>{p.addEventListener("change",()=>{const m=p.dataset.checkDevice;m&&(p.checked?I.add(m):I.delete(m),Q())})}),t.querySelectorAll("[data-pin-device]").forEach(p=>{p.addEventListener("click",m=>{m.stopPropagation(),z=p.dataset.pinDevice??null,M=!0,Q()})}),t.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{M=!1,Q()}),t.querySelector("[data-release-override]")?.addEventListener("click",p=>{const m=p.currentTarget.dataset.releaseOverride;m&&(W.delete(m),Q())}),t.querySelectorAll("[data-zone-power]").forEach(p=>{p.addEventListener("click",m=>{m.stopPropagation();const k=p.dataset.zonePower,Z=p.dataset.zoneVal==="true";if(!k)return;const N=w.filter(V=>V.logicalZoneId===k&&V.category==="lighting").map(V=>V.id),x=w.filter(V=>V.logicalZoneId===k&&V.category==="hvac").map(V=>V.id);N.length?se(N,"lighting.power",Z):x.length&&se(x,"hvac.power",Z)})}),t.querySelectorAll("[data-locate-device]").forEach(p=>{p.addEventListener("click",()=>{const m=p.dataset.locateDevice;m&&(z=m,M=!0,S="canvas",Q())})}),t.querySelectorAll("[data-go-alarms]").forEach(p=>{p.addEventListener("click",()=>{window.location.hash="#alarms"})}),t.querySelectorAll("[data-go-analysis]").forEach(p=>{p.addEventListener("click",()=>{const m=p.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(m)}`})}),t.querySelectorAll("[data-go-timeseries]").forEach(p=>{p.addEventListener("click",()=>{const m=p.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(m)}`})}),t.querySelectorAll("[data-toggle-briefing]").forEach(p=>{p.addEventListener("click",()=>{Y=!Y,Q()})}),t.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const p=w.filter(V=>V.connectivity==="online").length,m=i.filter(V=>V.status==="active").length,k=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${p}/${w.length}（离线 ${w.length-p} 台）`,`待处理告警：${m} 条`,`人工覆盖中：${W.size} 台`].join(`
`),Z=new Blob([k],{type:"text/plain;charset=utf-8;"}),N=URL.createObjectURL(Z),x=document.createElement("a");x.href=N,x.download="pacom-daily-briefing.txt",x.click(),URL.revokeObjectURL(N)}),t.querySelectorAll("[data-ctrl-cmd]").forEach(p=>{p.addEventListener("click",()=>{if(!z||!p.dataset.ctrlCmd)return;const m=p.dataset.ctrlVal??"",k=m==="true"?!0:m==="false"?!1:Number(m);se([z],p.dataset.ctrlCmd,k)})}),t.querySelector("[data-ctrl-slider]")?.addEventListener("change",p=>{const m=p.currentTarget;!z||!m.dataset.ctrlSlider||se([z],m.dataset.ctrlSlider,Number(m.value))}),t.querySelectorAll("[data-batch-cmd]").forEach(p=>{p.addEventListener("click",()=>{const m=Array.from(I),k=p.dataset.batchVal??"",Z=k==="true"?!0:k==="false"?!1:k;se(m,p.dataset.batchCmd,Z)})}),t.querySelectorAll("[data-ack-alarm]").forEach(p=>{p.addEventListener("click",async()=>{!p.dataset.ackAlarm||b.level!=="floor"||!f||(await e.acknowledgeAlarm(p.dataset.ackAlarm,"首页快速确认"),i=await e.listAlarms(b.floorId),Q())})}),t.querySelectorAll("[data-canvas-layer]").forEach(p=>{p.addEventListener("click",()=>{const m=p.dataset.canvasLayer;m&&($=m,Q())})}),t.querySelectorAll("[data-zoom]").forEach(p=>{p.addEventListener("click",()=>{const m=p.dataset.zoom;m==="in"?G=Math.min(2.6,Number((G+.2).toFixed(2))):m==="out"?G=Math.max(.6,Number((G-.2).toFixed(2))):(G=1,H=0,C=0),pe()})});const d=t.querySelector('[data-role="canvas-stage"]');if(d&&!_){let p=!1,m=0,k=0,Z=0,N=0;d.addEventListener("pointerdown",V=>{V.target?.closest("button, input, select, .pacom-drawer")||(p=!0,m=V.clientX,k=V.clientY,Z=H,N=C,d.classList.add("is-panning"),d.setPointerCapture?.(V.pointerId))}),d.addEventListener("pointermove",V=>{p&&(H=Z+(V.clientX-m),C=N+(V.clientY-k),pe())});const x=()=>{p&&(p=!1,d.classList.remove("is-panning"))};d.addEventListener("pointerup",x),d.addEventListener("pointercancel",x),d.addEventListener("wheel",V=>{V.preventDefault();const X=V.deltaY<0?.12:-.12;G=Math.max(.6,Math.min(2.6,Number((G+X).toFixed(2)))),pe()},{passive:!1}),d.addEventListener("dblclick",V=>{V.target?.closest("button")||(G=1,H=0,C=0,pe())})}const A=t.querySelector('[data-role="splitter"]');A?.addEventListener("pointerdown",p=>{const m=p.clientX,k=L;A.classList.add("is-dragging");const Z=x=>{L=Math.max(320,Math.min(640,k+(x.clientX-m)));const V=t.querySelector(".pacom-left-pane");V&&V.style.setProperty("--pacom-sidebar-width",`${L}px`)},N=()=>{A.classList.remove("is-dragging"),localStorage.setItem(Ee,String(Math.round(L))),window.removeEventListener("pointermove",Z),window.removeEventListener("pointerup",N)};window.addEventListener("pointermove",Z),window.addEventListener("pointerup",N)}),A?.addEventListener("keydown",p=>{if(p.key==="ArrowLeft")p.preventDefault(),L=Math.max(320,L-16);else if(p.key==="ArrowRight")p.preventDefault(),L=Math.min(640,L+16);else if(p.key==="Home")p.preventDefault(),L=320;else if(p.key==="End")p.preventDefault(),L=640;else return;localStorage.setItem(Ee,String(Math.round(L)));const m=t.querySelector(".pacom-left-pane");m&&m.style.setProperty("--pacom-sidebar-width",`${L}px`)})}await r(b,!0)}const pt=new Set(["lighting","hvac","alarm_rules"]),Oe={lighting:"照明",hvac:"暖通",alarm_rules:"告警"},xe=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function ut(t){const e=new Set;for(const s of t.actions)s.command.startsWith("lighting")?e.add("照明"):s.command.startsWith("hvac")?e.add("暖通"):e.add("综合");return Array.from(e)}function vt(t,e,s){const l=s?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
    <div style="width:150px; display:flex; flex-direction:column; gap:3px;">
      <div style="position:relative; height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
        ${t<e?`<div style="position:absolute; left:${t/24*100}%; width:${(e-t)/24*100}%; top:0; bottom:0; border-radius:999px; background:${l};"></div>`:`
        <div style="position:absolute; left:${t/24*100}%; width:${(24-t)/24*100}%; top:0; bottom:0; border-radius:999px; background:${l};"></div>
        <div style="position:absolute; left:0; width:${e/24*100}%; top:0; bottom:0; border-radius:999px; background:${l};"></div>`}
      </div>
      <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--pacom-text-muted);">
        <span>00</span><span>12</span><span>24</span>
      </div>
    </div>
  `}async function mt(t,e,s){let[l,o]=await Promise.all([e.listScenes(c.floorId),e.getRuntimeSettings(c.projectId)]),n="manual",f="balanced",E="all",b=null,D="",S=!1,F="",j="";const R=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${o.calendar.workdayStart} – ${o.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${o.calendar.nightGuardStart} – 次日 ${o.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],q=e.subscribeFloorEvents(c.floorId,async O=>{O.type==="control.receipt.updated"&&b?.batchId===O.batchId&&(b=await e.getControlBatch(O.batchId),T())});function T(){const O=D.trim().toLowerCase(),z=O?l.filter(i=>`${i.name} ${i.description}`.toLowerCase().includes(O)):l,M=o.rules.filter(i=>pt.has(i.category)),Y=E==="all"?M:M.filter(i=>i.category===E),$=xe.find(i=>i.id===f)??xe[1],W=s.scope.canControlDevices,I=s.scope.canEditDeployment;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">智能策略</h1>
              <div class="pacom-tabs" role="tablist" aria-label="智能策略分类">
                <button class="pacom-tab" role="tab" aria-selected="${n==="manual"}" data-scene-tab="manual">快捷场景（${l.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${n==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
                <button class="pacom-tab" role="tab" aria-selected="${n==="rules"}" data-scene-tab="rules">条件联动（${M.length}）</button>
              </div>
            </div>

            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral" title="安全执行优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能（现场手动操作始终优先）">人工覆盖优先</span>
              <span class="pacom-badge ${W?"pacom-badge--online":"pacom-badge--warning"}">
                ${W?"可执行并核验回执":"只读权限"}
              </span>
              ${n==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${S?"收起新建表单":"+ 新建场景"}</button>`:""}
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${F?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${F}</span></div>`:""}
          ${j?`<div class="pacom-alert-banner">${j}</div>`:""}

          ${n==="manual"?`
              ${b?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="lov-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${b.batchId}</span>
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
                            ${b.receipts.map(i=>`
                                <tr>
                                  <td><code style="font-size:12px;">${i.deviceId}</code></td>
                                  <td>${i.command}</td>
                                  <td>${String(i.targetValue)}${i.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${i.errorMessage}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${i.status==="verified_success"?"pacom-badge--online":i.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${i.status}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${S?`
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
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${D}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${z.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${z.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="lov-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':z.map(i=>{const h=ut(i);return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${i.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${h.map(P=>`<span class="pacom-badge pacom-badge--accent">${P}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${i.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${i.description}</p>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${i.lastExecutedAt?i.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${i.id}" ${W?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:n==="schedule_oss"?`
                <div class="lov-kpi-strip" role="region" aria-label="优化启停运行状态">
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">当前优化启停模式</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${$.title}</div>
                    <span class="lov-kpi-delta">${$.estSaving}</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">明日预测预启动时刻</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${$.predictedStart}</div>
                    <span class="lov-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">本周累计节省运行工时</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${$.savedHours}</div>
                    <span class="lov-kpi-delta">异常通信时自动回退本地默认工况</span>
                  </div>
                </div>

                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="lov-mode-grid">
                    ${xe.map(i=>`
                      <button type="button" class="lov-mode-card" aria-pressed="${f===i.id}" data-oss-mode="${i.id}" ${W?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${i.title}</strong>
                          <span class="pacom-badge ${f===i.id?"pacom-badge--online":"pacom-badge--neutral"}">${f===i.id?"当前生效":i.badge}</span>
                        </div>
                        <span class="lov-setting-desc">${i.desc}</span>
                        <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${i.estSaving}</span>
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
                          ${R.map(i=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${i.name}</span>
                                    ${i.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${i.windowLabel}</div>
                                </td>
                                <td>${vt(i.startHour,i.endHour,i.enabled)}</td>
                                <td><span class="pacom-row-sub">${i.scope}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${i.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="lov-switch"
                                      role="switch"
                                      aria-checked="${i.enabled}"
                                      aria-label="切换排程 ${i.name}"
                                      data-toggle-schedule="${i.id}"
                                      ${W?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules"].map(i=>{const h=i==="all"?"全部":Oe[i]??i,P=i==="all"?M.length:M.filter(_=>_.category===i).length;return`
                            <button type="button" class="lov-count-pill" aria-pressed="${E===i}" data-rule-cat="${i}">
                              <span>${h}</span><span class="lov-count-num">${P}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="lov-settings-card">
                    ${Y.length===0?'<div class="lov-empty-state"><strong>该分类下暂无条件联动规则</strong><span>可切换上方分类胶囊查看全部规则。</span></div>':Y.map(i=>`
                              <div class="lov-setting-row">
                                <div class="lov-setting-meta">
                                  <span class="lov-setting-title">
                                    <span class="pacom-badge pacom-badge--accent">${Oe[i.category]??i.category}</span>
                                    <span>${i.name}</span>
                                    <span class="pacom-badge pacom-badge--neutral">v${i.version}</span>
                                  </span>
                                  <span class="lov-setting-desc">${i.summary} · 范围：${i.scopeLabel} · 回执：${i.receiptSummary??"已同步"}</span>
                                </div>
                                <div class="lov-setting-control">
                                  <span class="pacom-row-sub">${i.enabled?"已启用":"已停用"}</span>
                                  <button
                                    type="button"
                                    class="lov-switch"
                                    role="switch"
                                    aria-checked="${i.enabled?"true":"false"}"
                                    aria-label="切换 ${i.name}"
                                    data-toggle-strategy-rule="${i.id}"
                                    data-rule-ver="${i.version}"
                                    data-rule-next="${!i.enabled}"
                                    ${I?"":"disabled"}
                                  >
                                    <span class="lov-switch-thumb"></span>
                                  </button>
                                </div>
                              </div>`).join("")}
                  </div>
                </section>`}
        </div>
      </div>
    `,t.querySelectorAll("[data-scene-tab]").forEach(i=>{i.addEventListener("click",()=>{n=i.dataset.sceneTab??"manual",F="",T()})}),t.querySelector("[data-close-batch]")?.addEventListener("click",()=>{b=null,T()}),t.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),t.querySelectorAll("[data-oss-mode]").forEach(i=>{i.addEventListener("click",()=>{const h=i.dataset.ossMode;if(!h)return;f=h;const P=xe.find(_=>_.id===h);F=`已切换至「${P?.title??h}」模式（明日预测启动 ${P?.predictedStart??""}）。`,T()})}),t.querySelectorAll("[data-toggle-schedule]").forEach(i=>{i.addEventListener("click",()=>{const h=i.dataset.toggleSchedule,P=R.find(_=>_.id===h);P&&(P.enabled=!P.enabled,F=`排程「${P.name}」已${P.enabled?"恢复启用":"临时暂停"}。`,T())})}),t.querySelectorAll("[data-rule-cat]").forEach(i=>{i.addEventListener("click",()=>{E=i.dataset.ruleCat??"all",T()})}),t.querySelectorAll("[data-toggle-strategy-rule]").forEach(i=>{i.addEventListener("click",async()=>{j="";try{await e.toggleRuntimeRule(i.dataset.toggleStrategyRule,i.dataset.ruleNext==="true",Number(i.dataset.ruleVer)),o=await e.getRuntimeSettings(c.projectId),F="条件联动规则状态与版本回执已更新。",T()}catch(h){j=h instanceof Error?h.message:String(h),T()}})}),t.querySelectorAll("[data-toggle-create]").forEach(i=>{i.addEventListener("click",()=>{S=!S,T()})}),t.querySelector("[data-scene-search]")?.addEventListener("input",i=>{const h=i.currentTarget,P=h.selectionStart??h.value.length;D=h.value,T();const _=t.querySelector("[data-scene-search]");_&&(_.focus(),_.setSelectionRange(P,P))}),t.querySelectorAll("[data-exec-scene]").forEach(i=>{i.addEventListener("click",async()=>{j="";try{b=await e.executeScene(i.dataset.execScene),l=await e.listScenes(c.floorId),T()}catch(h){j=h instanceof Error?h.message:String(h),T()}})}),t.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async i=>{i.preventDefault();const h=new FormData(i.currentTarget);try{await e.createScene({projectId:c.projectId,floorId:c.floorId,name:String(h.get("name")??""),description:String(h.get("description")??""),actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:50}]}),l=await e.listScenes(c.floorId),S=!1,F="快捷场景已保存。",T()}catch(P){j=P instanceof Error?P.message:String(P),T()}})}T(),window.addEventListener("hashchange",()=>q(),{once:!0})}function Ae(t,e){return t.length===0?'<div class="lov-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':t.map(s=>`
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
            ${e?"":"disabled"}
          >
            <span class="lov-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function gt(t,e,s){let l="calendar",o=await e.getRuntimeSettings(c.projectId),n=o.calendar.workdayStart,f=o.calendar.workdayEnd,E=!0,b=[];const D={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",carbonFactor:"0.5271"},S={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},F={criticalSms:!0,inAppBanner:!0,dailyDigest:!1,quietHours:!0};let j="major",R="",q="";function T(){const O=s.scope.canEditDeployment,z=o.rules.filter($=>$.category==="weather_area"),M=o.rules.filter($=>$.category==="metering_carbon"),Y=o.rules.filter($=>$.category==="templates");t.innerHTML=`
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
              <span class="pacom-badge ${O?"pacom-badge--online":"pacom-badge--warning"}">
                ${O?"可修改并下发配置":"当前角色只读"}
              </span>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:8px 6px 32px;">
          <div style="width:100%; max-width:920px; margin:0 auto; display:flex; flex-direction:column; gap:20px;">
            ${R?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${R}</span></div>`:""}
            ${q?`<div class="pacom-alert-banner">${q}</div>`:""}

            ${l==="calendar"?`
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
                        <input class="pacom-input" style="width:140px;" type="time" data-cal-start value="${n}" aria-label="工作日上班时间" ${O?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">工作日下班时间</span>
                        <span class="lov-setting-desc">若晚于 21:30 将自动提示与夜间值守巡检窗口的交叠冲突</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:140px;" type="time" data-cal-end value="${f}" aria-label="工作日下班时间" ${O?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row" style="justify-content:flex-end;">
                      <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                      <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${O?"":"disabled"}>保存并校验版本</button>
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
                        <span class="pacom-row-sub">${E?"已开启":"已关闭"}</span>
                        <button type="button" class="lov-switch" role="switch" aria-checked="${E}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${O?"":"disabled"}>
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

                ${b.length>0?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">受影响的定时与夜间规则预览</h2>
                        <span class="pacom-row-sub">共 ${b.length} 条</span>
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
                              ${b.map($=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${$.ruleName}</div>
                                      ${$.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${$.conflictWarning}</div>`:""}
                                    </td>
                                    <td>${$.beforeWindow}</td>
                                    <td><strong>${$.afterWindow}</strong></td>
                                    <td>
                                      <span class="pacom-badge ${$.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                        ${$.conflictWarning?"交叠警告":"自动跟随"}
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
                          <select class="pacom-select" data-energy-field="weatherSource" aria-label="室外气象数据源" ${O?"":"disabled"}>
                            <option value="guanzhou_station" ${D.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                            <option value="campus_sensor" ${D.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                          </select>
                        </div>
                      </div>
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">E 栋计费与能效面积（m²）</span>
                          <span class="lov-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                        </div>
                        <div class="lov-setting-control">
                          <input class="pacom-input" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${D.billingArea}" aria-label="计费面积" ${O?"":"disabled"} />
                        </div>
                      </div>
                      ${Ae(z,O)}
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
                          <input class="pacom-input" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${D.tariffYuan}" aria-label="综合电价" ${O?"":"disabled"} />
                        </div>
                      </div>
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">区域电网碳排放因子</span>
                          <span class="lov-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                        </div>
                        <div class="lov-setting-control">
                          <select class="pacom-select" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${O?"":"disabled"}>
                            <option value="0.5271" ${D.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                            <option value="0.5703" ${D.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                          </select>
                        </div>
                      </div>
                      ${Ae(M,O)}
                      <div class="lov-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${O?"":"disabled"}>保存口径参数</button>
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
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="minTemp" value="${S.minTemp}" aria-label="最低设定温度" ${O?"":"disabled"} />
                            <span class="pacom-row-sub">至</span>
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="maxTemp" value="${S.maxTemp}" aria-label="最高设定温度" ${O?"":"disabled"} />
                            <span class="pacom-row-sub">°C</span>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">人工覆盖自动释放时长</span>
                            <span class="lov-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                          </div>
                          <div class="lov-setting-control">
                            <select class="pacom-select" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${O?"":"disabled"}>
                              <option value="2h" ${S.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                              <option value="4h" ${S.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                              <option value="eod" ${S.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                              <option value="permanent" ${S.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                            </select>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">控制指令回读超时阈值（秒）</span>
                            <span class="lov-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                          </div>
                          <div class="lov-setting-control">
                            <input class="pacom-input" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${S.readbackTimeoutSec}" aria-label="回读超时阈值" ${O?"":"disabled"} />
                            <span class="pacom-row-sub">秒</span>
                          </div>
                        </div>
                        <div class="lov-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${O?"":"disabled"}>保存安全边界</button>
                        </div>
                      </div>
                    </section>

                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">标准设备参数模板</h2>
                        <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                      </div>
                      <div class="lov-settings-card">
                        ${Ae(Y,O)}
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
                            <button type="button" class="lov-switch" role="switch" aria-checked="${F.criticalSms}" data-notify-key="criticalSms" aria-label="严重告警短信推送">
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
                            <button type="button" class="lov-switch" role="switch" aria-checked="${F.inAppBanner}" data-notify-key="inAppBanner" aria-label="站内实时横幅提醒">
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
                            <button type="button" class="lov-switch" role="switch" aria-checked="${F.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报">
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
                              <option value="critical" ${j==="critical"?"selected":""}>仅严重告警</option>
                              <option value="major" ${j==="major"?"selected":""}>严重与重要（推荐）</option>
                              <option value="all" ${j==="all"?"selected":""}>全部告警</option>
                            </select>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">夜间静默免打扰（23:00 – 07:00）</span>
                            <span class="lov-setting-desc">夜间静默一般与重要提醒，严重级别告警与网关中断仍自动穿透</span>
                          </div>
                          <div class="lov-setting-control">
                            <button type="button" class="lov-switch" role="switch" aria-checked="${F.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰">
                              <span class="lov-switch-thumb"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>`}
          </div>
        </div>
      </div>
    `,t.querySelectorAll("[data-stab]").forEach($=>{$.addEventListener("click",()=>{l=$.dataset.stab??"calendar",R="",q="",T()})}),t.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{E=!E,R=`法定节假日自动跳过已${E?"开启":"关闭"}。`,T()}),t.querySelectorAll("[data-energy-field]").forEach($=>{$.addEventListener("change",()=>{const W=$.dataset.energyField;W&&(D[W]=$.value)})}),t.querySelector("[data-save-energy]")?.addEventListener("click",()=>{R=`能碳与气象口径已保存（面积 ${D.billingArea} m² · 电价 ¥${D.tariffYuan}/kWh · 因子 ${D.carbonFactor}）。`,T()}),t.querySelectorAll("[data-guard-field]").forEach($=>{$.addEventListener("change",()=>{const W=$.dataset.guardField;W&&(S[W]=$.value)})}),t.querySelector("[data-save-guard]")?.addEventListener("click",()=>{R=`控制安全边界已保存（温区 ${S.minTemp}–${S.maxTemp}°C · 超时 ${S.readbackTimeoutSec}s）。`,T()}),t.querySelectorAll("[data-notify-key]").forEach($=>{$.addEventListener("click",()=>{const W=$.dataset.notifyKey;W&&(F[W]=!F[W],R="通知策略偏好已更新。",T())})}),t.querySelector("[data-notify-severity]")?.addEventListener("change",$=>{j=$.currentTarget.value??"major",R="推送级别门槛已更新。",T()}),t.querySelector("[data-cal-start]")?.addEventListener("change",$=>{n=$.currentTarget.value}),t.querySelector("[data-cal-end]")?.addEventListener("change",$=>{f=$.currentTarget.value}),t.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{q="",b=await e.previewCalendarImpact(c.projectId,n,f),T()}),t.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{q="";try{const $=await e.saveWorkCalendar(c.projectId,n,f,o.calendar.version);o={...o,calendar:$},R=`运行日历已保存至 v${$.version}（${$.workdayStart} – ${$.workdayEnd}）`,b=[],T()}catch($){q=$ instanceof Error?$.message:String($),T()}}),t.querySelectorAll("[data-toggle-rule]").forEach($=>{$.addEventListener("click",async()=>{q="";try{await e.toggleRuntimeRule($.dataset.toggleRule,$.dataset.ruleNext==="true",Number($.dataset.ruleVer)),o=await e.getRuntimeSettings(c.projectId),R="策略状态与版本回执已更新。",T()}catch(W){q=W instanceof Error?W.message:String(W),T()}})})}T()}const Te="pacom.web.sidebar.collapsed",bt=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Me=[{id:"home",label:"空间总览",iconSvg:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/>'},{id:"analysis",label:"数据分析",iconSvg:'<path d="M4 19h16"/><path d="M7 16v-5"/><path d="M12 16V7"/><path d="M17 16v-8"/>'},{id:"alarms",label:"告警中心",iconSvg:'<path d="M12 4 3 19h18L12 4Z"/><path d="M12 10v4"/><path d="M12 17h.01"/>'},{id:"scenes",label:"智能策略",iconSvg:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3"/>'},{id:"settings",label:"运行设置",iconSvg:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2.5"/><circle cx="15" cy="17" r="2.5"/>'},{id:"deployment",label:"系统部署",iconSvg:'<rect x="3" y="4" width="7" height="6" rx="1.5"/><rect x="14" y="4" width="7" height="6" rx="1.5"/><rect x="8.5" y="14" width="7" height="6" rx="1.5"/><path d="M6.5 10v2h11v-2M12 12v2"/>'}],je={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"运行设置",deployment:"系统部署",account:"机构与账户"};function Le(){const t=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return t in je?t:"home"}function ie(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function ht(t,e,s,l){t.classList.remove("bare-login");let o=s,n=Le(),f=localStorage.getItem(Te)==="1",E=!1,b=!1,D="",S=!1,F=0,j={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};const R=e.mode==="demo"&&typeof e.switchDemoRole=="function";async function q(){try{const[C,L,a,v,r]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(c.floorId).catch(()=>[]),e.listAlarms(c.floorId).catch(()=>[]),e.listWorkOrders(c.floorId).catch(()=>[]),e.listScenes(c.floorId).catch(()=>[])]);j={devices:L,zones:C.zones,alarms:a,workOrders:v,scenes:r},F=a.filter(U=>U.status==="active").length,W()}catch{}}function T(){return Me.map(C=>`
        ${C.id==="settings"?'<div class="pacom-nav-divider" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${C.id}" aria-current="${n===C.id?"page":"false"}" title="${C.label}">
          <svg class="pacom-nav-icon" viewBox="0 0 24 24" aria-hidden="true">${C.iconSvg}</svg>
          <span class="pacom-nav-label">${C.label}</span>
          ${C.id==="alarms"&&F>0?`<span class="pacom-nav-count" title="待处理告警 ${F} 条">${F}</span>`:""}
        </button>`).join("")}function O(){const C=D.trim().toLowerCase();if(!S||!C)return"";const L=Me.filter(K=>K.label.toLowerCase().includes(C)).slice(0,4),a=j.devices.filter(K=>`${K.name} ${K.id} ${K.category}`.toLowerCase().includes(C)).slice(0,4),v=j.zones.filter(K=>K.name.toLowerCase().includes(C)).slice(0,3),r=j.alarms.filter(K=>`${K.title} ${K.message} ${K.id}`.toLowerCase().includes(C)).slice(0,3),U=j.workOrders.filter(K=>`${K.title} ${K.id}`.toLowerCase().includes(C)).slice(0,3),le=j.scenes.filter(K=>`${K.name} ${K.description}`.toLowerCase().includes(C)).slice(0,3),se=[];return a.length&&se.push('<div class="pacom-search-group">设备（空间总览）</div>'+a.map(K=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(K.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${ie(K.name)}</span><span class="pacom-badge ${K.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${K.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),v.length&&se.push('<div class="pacom-search-group">功能区</div>'+v.map(K=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(K.id)}"><span>${ie(K.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),r.length&&se.push('<div class="pacom-search-group">告警</div>'+r.map(K=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(K.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${ie(K.title)}</span><span class="pacom-badge pacom-badge--warning">${K.status==="active"?"待处理":"已确认"}</span></button>`).join("")),U.length&&se.push('<div class="pacom-search-group">运维工单</div>'+U.map(K=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(K.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${ie(K.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),le.length&&se.push('<div class="pacom-search-group">智能策略</div>'+le.map(K=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${ie(K.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),L.length&&se.push('<div class="pacom-search-group">工作区</div>'+L.map(K=>`<button type="button" class="pacom-search-hit" data-search-hash="#${K.id}"><span>${ie(K.label)}</span><span class="pacom-badge pacom-badge--neutral">菜单</span></button>`).join("")),se.length?`<div class="pacom-search-popover" data-role="search-popover">${se.join("")}</div>`:`<div class="pacom-search-popover" data-role="search-popover"><div class="pacom-nav-empty">未找到与「${ie(D)}」匹配的设备、区域、告警或工单</div></div>`}function z(){t.querySelector('[data-role="search-popover"]')?.remove();const C=t.querySelector(".pacom-nav-search-wrap");if(!C)return;const L=O();if(!L)return;const a=document.createElement("div");a.innerHTML=L.trim();const v=a.firstElementChild;v&&(C.appendChild(v),v.querySelectorAll("[data-search-hash]").forEach(r=>{r.addEventListener("click",()=>{const U=r.dataset.searchHash||"#home";S=!1,D="";const le=t.querySelector('[data-role="nav-search"]');le&&(le.value=""),z(),E=!1,window.location.hash===U?(n=Le(),h(!0)):window.location.hash=U})}))}function M(){if(!b)return"";const C=o.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${f?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab.jpg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${ie(o.roleLabel)}${R?" · 演示":""}</small>
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
          <span class="pacom-pop-avatar" aria-hidden="true">${ie(C)}</span>
          <span class="pacom-pop-text">
            <b>${ie(o.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${R?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">演示角色切换（RBAC 权限预览）</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(ne).map(L=>{const a=ne[L],v=L===o.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${v}" data-pop-role="${L}">
                      <span class="pacom-pop-text">
                        <b>${ie(a.roleLabel)}</b>
                        <small>${ie(a.displayName)}</small>
                      </span>
                      ${v?'<svg class="pacom-pop-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>':""}
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
    `}async function Y(C){switch(document.title=`${je[n]} · PACOM Station`,n){case"home":await dt(C,e,o);return;case"analysis":await Je(C,e);return;case"alarms":await We(C,e,o);return;case"scenes":await mt(C,e,o);return;case"settings":await gt(C,e,o);return;case"deployment":await ot(C,e,o);return;case"account":await Be(C,e,o,L=>{o=L,h(!0)},$);return}}async function $(){b=!1,E=!1,H();try{await e.logout()}finally{window.location.hash="#login",l()}}function W(){const C=t.querySelector('[data-role="nav-list"]');C&&(C.innerHTML=T(),w())}function I(){t.querySelector('[data-role="org-popover"]')?.remove();const C=t.querySelector('[data-role="org-menu-btn"]');if(C&&C.setAttribute("aria-expanded",String(b)),!b)return;const L=document.createElement("div");L.innerHTML=M().trim();const a=L.firstElementChild;a&&(t.appendChild(a),i())}function w(){t.querySelectorAll("[data-route]").forEach(C=>{C.addEventListener("click",()=>{const L=C.dataset.route;L===n&&!E||(n=L,E=!1,b=!1,window.location.hash=`#${n}`,h(!0))})})}function i(){t.querySelectorAll('[data-pop-act="go-account"]').forEach(C=>{C.addEventListener("click",()=>{b=!1,E=!1,n="account",window.location.hash="#account",h(!0)})}),t.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{$()}),t.querySelectorAll("[data-pop-role]").forEach(C=>{C.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const L=C.dataset.popRole;b=!1,E=!1,o=await e.switchDemoRole(L),await h(!0)})})}async function h(C){const L=t.querySelector('[data-role="main-stage"]');if(!C&&L){const r=t.querySelector(".pacom-nav-rail");r&&(r.classList.toggle("is-collapsed",f),r.classList.toggle("is-mobile-open",E));const U=t.querySelector('[data-role="mobile-scrim"]');U&&U.classList.toggle("is-open",E),I();return}t.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
          <h1 class="pacom-mobile-title">${je[n]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${ie(o.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${E?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${f?"is-collapsed":""} ${E?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${bt}</div>
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
            <input class="pacom-nav-search" name="navSearch" data-role="nav-search" type="search" placeholder="搜索设备、空间、告警…" value="${ie(D)}" aria-label="全局搜索设备、空间、告警或工单" autocomplete="off" />
          </div>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${T()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${n==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${b}" title="广州国家实验室 · ${ie(o.displayName)}">
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
    `,t.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{f=!f,b=!1,localStorage.setItem(Te,f?"1":"0");const r=t.querySelector(".pacom-nav-rail"),U=t.querySelector('[data-role="toggle-sidebar"]');r&&r.classList.toggle("is-collapsed",f),U&&(U.title=f?"展开侧栏":"收起侧栏",U.setAttribute("aria-label",U.title),U.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${f?'<path d="m9 6 6 6-6 6"/>':'<path d="m15 6-6 6 6 6"/>'}</svg>`),I()}),t.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{E=!E,h(!1)}),t.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{E=!1,b=!1,h(!1)});const a=t.querySelector('[data-role="nav-search"]');a?.addEventListener("focus",()=>{S=!0,z()}),a?.addEventListener("input",r=>{D=r.currentTarget.value,S=!0,z()}),t.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",r=>{r.stopPropagation(),b=!b,I()}),w(),I(),z();const v=t.querySelector('[data-role="main-stage"]');v&&await Y(v)}const P=C=>{const L=C.target;S&&!L?.closest(".pacom-nav-search-wrap")&&(S=!1,z()),b&&(L?.closest('[data-role="org-popover"]')||L?.closest('[data-role="org-menu-btn"]')||(b=!1,I()))},_=C=>{C.key==="Escape"&&(S?(S=!1,z()):b?(b=!1,I()):E&&(E=!1,h(!1)))},G=()=>{n=Le(),b=!1,E=!1,h(!0),q()};function H(){document.removeEventListener("click",P),document.removeEventListener("keydown",_),window.removeEventListener("hashchange",G)}document.addEventListener("click",P),document.addEventListener("keydown",_),window.addEventListener("hashchange",G),await h(!0),q()}const ft=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,yt='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',$t='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',fe='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>',De={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},wt={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function xt(t){const e=t.replace(/\D/g,"");return e.length===11?`${e.slice(0,3)} •••• ${e.slice(7)}`:t}function oe(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ze(t,e,s){t.classList.add("bare-login"),document.title="登录 · PACOM Station";let l=!1,o=!1,n="",f="",E="",b="",D=!1,S={},F="",j=!1,R="",q=0,T=null,O=null,z="privacy",M="",Y="",$="";const W=e.mode==="demo"&&typeof e.switchDemoRole=="function";function I(){T!==null&&(window.clearInterval(T),T=null),t.classList.remove("bare-login")}function w(){q=60,T!==null&&window.clearInterval(T),T=window.setInterval(()=>{q-=1,q<=0&&(q=0,T!==null&&(window.clearInterval(T),T=null));const _=t.querySelector('[data-act="send-sms"]');_&&(_.disabled=q>0,_.textContent=q>0?`${q} 秒后重发`:R?"重新获取":"获取验证码")},1e3)}function i(){if(!O)return"";if(O==="reset")return`
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
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${oe(Y)}" />
                  </div>
                </div>
                ${$?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${oe($)}</p>`:""}
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
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${fe}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                ${W?"当前为离线演示环境，您可直接通过登录页的「演示角色快速体验」切换 5 类内置角色进入 E7F 工作区。":"正式接入账户服务后，将在此开放自助注册与机构邀请码加入流程。"}
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
              ${W?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">选择演示角色</button>':""}
            </div>
          </section>
        </div>
      `;if(O==="legal"){const _=De[z],G=["privacy","terms","service"].map(H=>`<button type="button" role="tab" aria-selected="${z===H}" class="au-legal-tab ${z===H?"is-active":""}" data-act="switch-legal" data-tab="${H}">${De[H].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${fe}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${G}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${_.items.map(H=>`<li>${oe(H)}</li>`).join("")}
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
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${fe}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${M||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:O==="demoRoles"&&W?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择演示角色</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${fe}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(ne).map(_=>{const G=ne[_];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${_}">
                        <div>
                          <b>${oe(G.roleLabel)} · ${oe(G.displayName)}</b>
                          <small>${oe(wt[_])}</small>
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
      `:""}function h(){const _=l?`
        <div class="au-field ${S.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${oe(E)}" aria-invalid="${S.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${q>0?"disabled":""}>
              ${q>0?`${q} 秒后重发`:R?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${oe(S.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${R?`验证码已发送至 ${oe(xt(R))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${S.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${oe(n)}" aria-invalid="${S.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${oe(S.id??"")}</p>
        </div>
      `,G=l?`
        <div class="au-field ${S.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${oe(b)}" aria-invalid="${S.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${oe(S.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${S.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${o?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${oe(f)}" aria-invalid="${S.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${o?"隐藏密码":"显示密码"}">
              ${o?$t:yt}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${oe(S.pwd??"")}</p>
        </div>
      `;t.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${ft}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${j?"disabled":""}>
                  ${_}
                  ${G}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${F?"":"hidden"}>${oe(F)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${D?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${j?"disabled":""}>
                    ${j?"正在登录…":"登录"}
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
                ${W?`<div class="au-demo-bar">
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
      ${i()}
    `,P()}function P(){const _=t.querySelector("#au-id"),G=t.querySelector("#au-pwd"),H=t.querySelector("#au-sphone"),C=t.querySelector("#au-scode"),L=t.querySelector('input[name="keep"]');_?.addEventListener("input",()=>{if(n=_.value,S.id||F){delete S.id,F="",_.closest(".au-field")?.classList.remove("bad");const a=t.querySelector("#au-id-err");a&&(a.textContent="");const v=t.querySelector("#au-login-ferr");v&&(v.hidden=!0)}}),G?.addEventListener("input",()=>{if(f=G.value,S.pwd||F){delete S.pwd,F="",G.closest(".au-field")?.classList.remove("bad");const a=t.querySelector("#au-pwd-err");a&&(a.textContent="");const v=t.querySelector("#au-login-ferr");v&&(v.hidden=!0)}}),H?.addEventListener("input",()=>{if(E=H.value,S.sphone||F){delete S.sphone,F="",H.closest(".au-field")?.classList.remove("bad");const a=t.querySelector("#au-sphone-err");a&&(a.textContent="");const v=t.querySelector("#au-login-ferr");v&&(v.hidden=!0)}}),C?.addEventListener("input",()=>{if(b=C.value.replace(/\D/g,"").slice(0,6),C.value=b,S.scode||F){delete S.scode,F="",C.closest(".au-field")?.classList.remove("bad");const a=t.querySelector("#au-scode-err");a&&(a.textContent="");const v=t.querySelector("#au-login-ferr");v&&(v.hidden=!0)}}),L?.addEventListener("change",()=>{D=L.checked}),t.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{o=!o,h(),t.querySelector("#au-pwd")?.focus()}),t.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{l=!l,S={},F="",h(),t.querySelector(l?"#au-sphone":"#au-id")?.focus()}),t.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const a=E.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(a)){S={sphone:"请输入有效的手机号码"},h(),t.querySelector("#au-sphone")?.focus();return}S={},R=a,w(),h(),t.querySelector("#au-scode")?.focus()}),t.querySelector('form[data-form="login"]')?.addEventListener("submit",async a=>{if(a.preventDefault(),!j){if(S={},F="",l?(E.trim()||(S.sphone="请输入手机号码"),/^\d{6}$/.test(b.trim())||(S.scode="请输入 6 位验证码")):(n.trim()||(S.id="请输入电子邮箱或手机号码"),f||(S.pwd="请输入密码")),Object.keys(S).length>0){h();const v=Object.keys(S)[0];t.querySelector(`#au-${v}`)?.focus();return}j=!0,h();try{const v=await e.login({account:(l?E:n).trim(),password:l?b.trim():f});I(),s(v)}catch(v){j=!1,F=v instanceof Error?v.message:"账户或密码不正确",h()}}}),t.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{Y=n.trim(),$="",O="reset",h(),t.querySelector("#au-rs-id")?.focus()}),t.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{O="register",h()}),t.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{O="legal",h()}),t.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{M="",O="contact",h()}),t.querySelectorAll('[data-act="open-demo-roles"]').forEach(a=>{a.addEventListener("click",()=>{O="demoRoles",h()})}),t.querySelectorAll('[data-act="close-modal"]').forEach(a=>{a.addEventListener("click",()=>{O=null,h()})}),t.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",a=>{a.target===a.currentTarget&&(O=null,h())}),t.querySelectorAll('[data-act="switch-legal"]').forEach(a=>{a.addEventListener("click",()=>{const v=a.dataset.tab;v&&(z=v,h())})}),t.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),M="已复制"}catch{M="support@pacom.cn"}h()}),t.querySelector("#au-reset-form")?.addEventListener("submit",a=>{a.preventDefault(),Y=t.querySelector("#au-rs-id")?.value.trim()??"",Y?W?$="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":$="如账户存在，验证码已发送。":$="请输入电子邮箱或手机号码",h()}),t.querySelectorAll('[data-act="pick-demo-role"]').forEach(a=>{a.addEventListener("click",async()=>{const v=a.dataset.roleId;if(!v||!e.switchDemoRole)return;const r=await e.switchDemoRole(v);I(),s(r)})})}h()}async function kt(){const t=document.getElementById("app");if(t)try{const e=Re(),s=await e.getSession(),l=async o=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await ht(t,e,o,()=>{ze(t,e,n=>{l(n)})})};if(!s||window.location.hash==="#login"){ze(t,e,o=>{l(o)});return}await l(s)}catch(e){t.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(e)}</div></div>`}}kt();
//# sourceMappingURL=index-CNxbxx1o.js.map
