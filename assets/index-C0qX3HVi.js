(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const g of c.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function s(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(o){if(o.ep)return;o.ep=!0;const c=s(o);fetch(o.href,c)}})();const r={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},G={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[r.projectId,r.project1Id],allowedBuildingIds:[r.buildingId,r.buildingFId],allowedFloorIds:[r.lockedFloor8Id,r.floorId,r.lockedFloor6Id],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId,r.buildingFId],allowedFloorIds:[r.lockedFloor8Id,r.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId],allowedFloorIds:[r.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId],allowedFloorIds:[r.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId],allowedFloorIds:[r.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},se="pacom.web.demo.role";class Ae{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){const e=sessionStorage.getItem(se);e&&G[e]&&(this.activeSession=structuredClone(G[e]));const s=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:r.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:s,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:r.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:r.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:r.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:s,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:s,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:s,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:r.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:s,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:r.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:s,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:s,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:s,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:s},{id:"conn-e7f-dali",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:s},{id:"conn-e7f-modbus",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:r.projectId,floorId:r.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:r.projectId,floorId:r.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:r.projectId,floorId:r.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:r.projectId,floorId:r.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:r.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:r.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:r.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:s,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:r.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:r.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:r.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:r.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(G).map((l,o)=>({userId:l.userId,displayName:l.displayName,email:`${l.role.replaceAll("_",".")}@pacom.local`,role:l.role,roleLabel:l.roleLabel,scopeSummary:l.scope.allowedZoneIds?.length?`E栋 7F（${l.scope.allowedZoneIds.length} 个我的区域）`:`${l.scope.allowedProjectIds.length} 项目 / ${l.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:o===0?s:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(e,s,l,o,c){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:s,endpoint:l,request:c,response:o}),this.traces.length>40&&this.traces.pop()}pushAudit(e,s,l,o){const c=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:c?.displayName??"anonymous",role:c?.role??"member",action:e,target:s,result:l,detail:o})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){if(!e.account.trim()||!e.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const s=e.account.includes("admin")?"org_admin":e.account.includes("eng")?"commissioning_engineer":e.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(G[s]),sessionStorage.setItem(se,s),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:e.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(se),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(e){return this.activeSession=structuredClone(G[e]),sessionStorage.setItem(se,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}async getSpatialTree(){const e=this.requireSession(),s=[{id:r.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"},{id:r.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"}],l=[{id:r.buildingId,projectId:r.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.png"},{id:r.buildingFId,projectId:r.projectId,name:"F栋",aboveFloors:12,belowFloors:2,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.png"}],o={projects:s.filter(c=>e.scope.allowedProjectIds.includes(c.id)),buildings:l.filter(c=>e.scope.allowedBuildingIds.includes(c.id)),floors:[{id:r.lockedFloor8Id,buildingId:r.buildingId,kind:"above",level:8,name:"8F",plan:null},{id:r.floorId,buildingId:r.buildingId,kind:"above",level:7,name:"7F",areaSqm:1383.1,plan:{floorId:r.floorId,imageUrl:"./media/7F.webp",planVersion:1,updatedAt:"2026-11-22T00:00:00Z"}},{id:r.lockedFloor6Id,buildingId:r.buildingId,kind:"above",level:6,name:"6F",plan:null}],zones:[{id:"zone-e7f-lab-east",floorId:r.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:r.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:r.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:r.floorId,name:"核心走廊与弱电井",category:"corridor"}]};return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:o.projects.length,buildings:o.buildings.length,floors:o.floors.length}),o}async getFloorDevices(e){const s=this.requireSession();if(!s.scope.allowedFloorIds.includes(e)){const o={code:"FORBIDDEN",status:403,message:`当前角色「${s.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,o),this.pushAudit("floor.read",e,"denied",o.message),new Error(`403 FORBIDDEN: ${o.message}`)}if(e!==r.floorId)return[];let l=structuredClone(this.devices);return s.scope.allowedZoneIds?.length&&(l=l.filter(o=>o.logicalZoneId&&s.scope.allowedZoneIds.includes(o.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:l.length}),l}async dispatchControlBatch(e){const s=this.requireSession();if(!s.scope.canControlDevices||!s.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权下发控制指令`);const l=`batch-e7f-${Date.now().toString(36)}`,o={batchId:l,floorId:e.floorId,createdBy:s.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(c=>({deviceId:c.deviceId,command:c.command,targetValue:c.targetValue,status:"queued"}))};return this.batches.set(l,o),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",o,e),this.pushAudit("control.dispatch",l,"success",`下发 ${e.targets.length} 台设备`),o.receipts.forEach((c,g)=>{const $=this.devices.find(u=>u.id===c.deviceId);setTimeout(()=>{c.status="dispatched",c.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:l,deviceId:c.deviceId,status:"dispatched",at:c.dispatchedAt})},280+g*120),setTimeout(()=>{const u=new Date().toISOString();!$||$.connectivity==="offline"?(c.status="timeout",c.errorCode="GATEWAY_READBACK_TIMEOUT",c.errorMessage="设备离线，网关未收到回读确认",c.verifiedAt=u):(c.status="verified_success",c.observedValue=c.targetValue,c.verifiedAt=u,this.applyObservedTelemetry($,c.command,c.targetValue,u)),this.emit({type:"control.receipt.updated",batchId:l,deviceId:c.deviceId,status:c.status,observedValue:c.observedValue,at:u})},900+g*220)}),structuredClone(o)}applyObservedTelemetry(e,s,l,o){s==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:l,collectedAt:o,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(l)>0,collectedAt:o,stale:!1})):(s==="lighting.power"||s==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:l,collectedAt:o,stale:!1}:s==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:l,collectedAt:o,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:o,values:{[s]:l}})}async getControlBatch(e){this.requireSession();const s=this.batches.get(e);if(!s)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(s)}async listAlarms(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==r.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,s){const l=this.requireSession();if(!l.scope.canManageAlarms){const c=`角色「${l.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",c),new Error(`403 FORBIDDEN: ${c}`)}const o=this.alarms.find(c=>c.id===e);if(!o)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return o.status="acknowledged",o.acknowledgedAt=new Date().toISOString(),o.acknowledgedBy=l.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,o,{note:s}),this.pushAudit("alarm.acknowledge",e,"success",s),this.emit({type:"alarm.changed",floorId:o.floorId,alarmId:e,status:"acknowledged",at:o.acknowledgedAt}),structuredClone(o)}async listWorkOrders(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==r.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建工单`);const l=new Date().toISOString(),o={id:`wo-e7f-${Date.now().toString(36)}`,projectId:r.projectId,buildingId:r.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:l,updatedAt:l};if(this.workOrders.unshift(o),e.alarmId){const c=this.alarms.find(g=>g.id===e.alarmId);c&&(c.workOrderId=o.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",o,e),this.pushAudit("work_order.create",o.id,"success",o.title),structuredClone(o)}async updateWorkOrderStatus(e,s){const l=this.requireSession();if(!l.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权流转工单`);const o=this.workOrders.find(c=>c.id===e);if(!o)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return o.status=s,o.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,o,{status:s}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${s}`),structuredClone(o)}async updateDevicePlanPoint(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权编辑图纸标点`);const l=this.devices.find(o=>o.id===e.deviceId);if(!l)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(l.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${l.version}，请刷新后重试`);return l.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},l.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,l,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${l.planPoint.x}, ${l.planPoint.y})`),structuredClone(l)}async updateDeviceHardwareBinding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改硬件绑定`);const l=this.devices.find(c=>c.id===e.deviceId);if(!l)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(l.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${l.version}）`);const o=new Date().toISOString();return l.physicalInstalled=e.physicalInstalled,l.physicalVerifiedAt=e.physicalInstalled?o:null,l.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:o,boundBy:s.displayName},l.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,l,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(l)}async listConnections(e){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,s){const l=this.requireSession();if(!l.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权冻结交付批次`);const o=this.devices.filter(g=>g.physicalInstalled&&g.hardwareBinding).length,c={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:r.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:o,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:l.displayName,note:s||"例行交付基线冻结"};return this.deliveryBatches.unshift(c),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,c,{note:s}),this.pushAudit("delivery.freeze",c.id,"success",`${o}/${this.devices.length} 已现场核验`),structuredClone(c)}async getAnalysisReport(e,s,l){this.requireSession();const o=s==="today"?1:s==="7d"?7:30,g={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*o)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*o).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(F=>F.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*o).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*o).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*o).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],$=s==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],u={category:e,range:s,scopeId:l,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:g.kpis,unit:g.unit,series:g.base.map((F,x)=>({label:$[x],value:Math.round(F*(e==="energy"||e==="carbon"?o/2+.5:1)),baseline:Math.round(F*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:g.base[3],unit:g.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:g.base[4],unit:g.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:g.base[1],unit:g.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${s}&scopeId=${l}`,{kpis:u.kpis.length}),u}async listScenes(e){return this.requireSession(),structuredClone(this.scenes)}async createScene(e){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const l={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(l),this.record("REST","createScene","POST /api/v1/scenes",l,e),this.pushAudit("scene.create",l.id,"success",l.name),structuredClone(l)}async executeScene(e){const s=this.scenes.find(o=>o.id===e);if(!s)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const l=await this.dispatchControlBatch({floorId:s.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:s.actions,reason:`触发场景：${s.name}`});return s.lastExecutedAt=new Date().toISOString(),s.lastBatchId=l.batchId,l}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:r.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,s,l){this.requireSession();const o=l>=this.calendar.nightGuardStart?`下班时间 ${l} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,c=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${s} - ${l}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${s} (-30m) ~ ${l} (+30m)`,conflictWarning:o},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:o}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",c,{workdayStart:s,workdayEnd:l}),c}async saveWorkCalendar(e,s,l,o){const c=this.requireSession();if(!c.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${c.roleLabel}」无权修改运行日历`);if(this.calendar.version!==o)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(s>=l)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:s,workdayEnd:l,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:s,workdayEnd:l,expectedVersion:o}),this.pushAudit("settings.calendar",r.projectId,"success",`${s}-${l}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,s,l){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权启停运行规则`);const c=this.rules.find(g=>g.id===e);if(!c)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(c.version!==l)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${c.version}）`);return c.enabled=s,c.version+=1,c.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,c,{enabled:s,expectedVersion:l}),this.pushAudit("settings.rule_toggle",e,"success",s?"启用":"停用"),structuredClone(c)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,s){const l=this.requireSession();if(l.role!=="org_admin"&&l.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const o=G[s],c={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:s,roleLabel:o.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(c),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",c,{email:e,role:s}),this.pushAudit("org.invite",e,"success",o.roleLabel),structuredClone(c)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(e,s){return e!==r.floorId?()=>{}:(this.listeners.add(s),()=>{this.listeners.delete(s)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${r.floorId}`,e),this.listeners.forEach(s=>s(e))}}function Le(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new Ae}async function je(t,e,s,l,o){let c="profile",g=await e.listOrgMembers(),$=await e.listAuditLogs(),u="",F="all",x="all",k="all",B=!1,A=!1,L="";async function j(){[g,$]=await Promise.all([e.listOrgMembers(),e.listAuditLogs()]),f()}function f(){const v=e.mode==="demo"&&typeof e.switchDemoRole=="function",C=u.trim().toLowerCase(),D=g.filter(I=>F!=="all"&&I.role!==F?!1:C?`${I.displayName} ${I.email} ${I.roleLabel} ${I.scopeSummary}`.toLowerCase().includes(C):!0),m=$.filter(I=>{if(x==="success"&&I.result!=="success"||x==="denied"&&I.result==="success")return!1;if(k!=="all"){const M=`${I.action} ${I.target}`.toLowerCase();if(k==="control"&&!M.includes("control")&&!M.includes("scene")&&!M.includes("控制")||k==="alarm"&&!M.includes("alarm")&&!M.includes("work")&&!M.includes("告警")||k==="deploy"&&!M.includes("deploy")&&!M.includes("plan")&&!M.includes("hardware")&&!M.includes("部署"))return!1}return!0});t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">机构与账户</h1>
              <div class="pacom-tabs" role="tablist" aria-label="机构与账户视图">
                <button class="pacom-tab" role="tab" aria-selected="${c==="profile"}" data-atab="profile">我的账户与权限</button>
                <button class="pacom-tab" role="tab" aria-selected="${c==="members"}" data-atab="members">成员与角色（${g.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${c==="audit"}" data-atab="audit">操作审计日志（${$.length}）</button>
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
            ${L?`<div class="pacom-alert-banner">${L}</div>`:""}
            ${c==="profile"?`
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

                ${v?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">多角色权限预览切换</h2>
                        <span class="pacom-badge pacom-badge--neutral">仅 Demo 预览可用</span>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(G).map(I=>{const M=G[I];return`
                              <button class="pacom-role-card ${I===s.role?"is-active":""}" data-switch-role="${I}">
                                <strong style="font-weight:500;">${M.roleLabel}</strong>
                                <span class="pacom-row-sub">${M.displayName}</span>
                                <span class="pacom-row-sub">授权楼层 ${M.scope.allowedFloorIds.length} 层 · 部署编辑：${M.scope.canEditDeployment?"是":"否"}</span>
                              </button>`}).join("")}
                      </div>
                    </section>`:""}

                <section class="lov-section">
                  <h2 class="lov-section-title">会话 RBAC 联调契约</h2>
                  <div class="lov-snippet-card">
                    <div class="lov-snippet-head">
                      <span class="pacom-row-sub">服务端下发的当前会话权限对象（供前后端核对）</span>
                      <button class="pacom-btn" data-copy-session="1">${A?"已复制":"复制 JSON"}</button>
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
                </section>`:c==="members"?`
                  ${B?`
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
                                ${Object.keys(G).map(I=>`<option value="${I}">${G[I].roleLabel}</option>`).join("")}
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
                          <input class="pacom-input" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${u}" />
                          <select class="pacom-select" data-role-filter>
                            <option value="all" ${F==="all"?"selected":""}>全部角色</option>
                            ${Object.keys(G).map(I=>`<option value="${I}" ${F===I?"selected":""}>${G[I].roleLabel}</option>`).join("")}
                          </select>
                        </div>
                        <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                          ${B?"收起邀请":"+ 邀请成员"}
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
                            ${D.map(I=>`
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
                          <option value="all" ${k==="all"?"selected":""}>全部操作类型</option>
                          <option value="control" ${k==="control"?"selected":""}>设备控制与场景</option>
                          <option value="alarm" ${k==="alarm"?"selected":""}>告警与工单处置</option>
                          <option value="deploy" ${k==="deploy"?"selected":""}>系统部署与点位</option>
                        </select>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${x==="all"}" data-audit-filter="all">全部（${$.length}）</button>
                          <button class="pacom-tab" aria-selected="${x==="success"}" data-audit-filter="success">成功</button>
                          <button class="pacom-tab" aria-selected="${x==="denied"}" data-audit-filter="denied">已拦截</button>
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
                            ${m.map(I=>`
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
    `,t.querySelectorAll("[data-atab]").forEach(I=>{I.addEventListener("click",()=>{c=I.dataset.atab,L="",f()})}),t.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",o()}),t.querySelector("[data-copy-session]")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(s,null,2)),A=!0,f(),window.setTimeout(()=>{A=!1,f()},1600)}catch{}}),t.querySelectorAll("[data-switch-role]").forEach(I=>{I.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const M=await e.switchDemoRole(I.dataset.switchRole);l(M)})}),t.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{B=!B,f()}),t.querySelector("[data-member-search]")?.addEventListener("input",I=>{const M=I.currentTarget,i=M.selectionStart??M.value.length;u=M.value,f();const w=t.querySelector("[data-member-search]");w&&(w.focus(),w.setSelectionRange(i,i))}),t.querySelector("[data-role-filter]")?.addEventListener("change",I=>{F=I.currentTarget.value,f()}),t.querySelectorAll("[data-audit-filter]").forEach(I=>{I.addEventListener("click",()=>{x=I.dataset.auditFilter??"all",f()})}),t.querySelector("[data-audit-cat]")?.addEventListener("change",I=>{k=I.currentTarget.value??"all",f()}),t.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async I=>{I.preventDefault(),L="";const M=new FormData(I.currentTarget);try{await e.inviteOrgMember(String(M.get("email")??""),String(M.get("role"))),B=!1,await j()}catch(i){L=i instanceof Error?i.message:String(i),f()}})}f()}const Ce={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},Oe={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},De={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function Fe(t){const e=`${t.title} ${t.message}`.toLowerCase();return e.includes("离线")||e.includes("modbus")||e.includes("心跳")?"建议先在「系统部署 → 系统接入」核查边缘网关与 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":e.includes("co₂")||e.includes("co2")||e.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」查看实时遥测与设备工况，确认后可标记已处置或一键转工单。"}async function Te(t,e,s){let l=[],o=[],c=[],g="alarms",$="all",u="all",F=!1,x=!1,k="",B=null;const A=new Set,L=new Set,j=new Set;let f="",v="";async function C(){[l,o,c]=await Promise.all([e.listAlarms(r.floorId),e.listWorkOrders(r.floorId),e.getFloorDevices(r.floorId).catch(()=>[])]),m()}function D(R){if(!R)return{name:"楼层通用",zone:"E7F"};const I=c.find(M=>M.id===R);return I?{name:I.name,zone:(I.logicalZoneId?De[I.logicalZoneId]:void 0)??"E7F"}:{name:R,zone:"E7F"}}function m(){const R=l.filter(a=>a.status==="active"&&!L.has(a.id)),I=o.filter(a=>a.status==="open"||a.status==="assigned"||a.status==="in_progress"),M=l.filter(a=>a.status!=="active").length+j.size,i=L.size,w=k.trim().toLowerCase(),q=l.filter(a=>{const n=L.has(a.id);if($==="snoozed"){if(!n)return!1}else if($==="active"){if(a.status!=="active"||n)return!1}else if($==="acknowledged"){if(a.status!=="acknowledged")return!1}else if(n)return!1;if(u!=="all"&&a.severity!==u)return!1;if(!w)return!0;const T=D(a.deviceId);return`${a.title} ${a.message} ${T.name} ${T.zone} ${a.deviceId}`.toLowerCase().includes(w)}),O=new Map;for(const a of q){const n=x?a.deviceId:a.id,T=O.get(n)??[];T.push(a),O.set(n,T)}const V=Array.from(O.values()),Z=o.filter(a=>{if(F&&(a.status==="resolved"||a.status==="closed"))return!1;if(!w)return!0;const n=D(a.deviceId);return`${a.title} ${a.description} ${a.id} ${n.name}`.toLowerCase().includes(w)}),Y=$==="active"?"仅看待处理":$==="acknowledged"?"仅看已确认":$==="snoozed"?"仅看已忽略 24h":"";t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">告警中心</h1>
              <div class="pacom-tabs" role="tablist" aria-label="告警中心视图">
                <button class="pacom-tab" role="tab" aria-selected="${g==="alarms"}" data-main-tab="alarms">
                  实时告警（${l.length-i}）
                </button>
                <button class="pacom-tab" role="tab" aria-selected="${g==="workorders"}" data-main-tab="workorders">
                  运维工单（${o.length}）
                </button>
              </div>
            </div>

            <div class="pacom-header-meta">
              ${g==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="lov-switch" role="switch" aria-checked="${x}" data-toggle-group="1" aria-label="按设备根因归并">
                      <span class="lov-switch-thumb"></span>
                    </button>
                  </label>`:`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>仅看未结工单</span>
                    <button type="button" class="lov-switch" role="switch" aria-checked="${F}" data-toggle-open-wo="1" aria-label="仅看未结工单">
                      <span class="lov-switch-thumb"></span>
                    </button>
                  </label>`}
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
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${g==="alarms"&&$==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">待处理告警</span>
              <div class="lov-kpi-value">${R.length}<span class="lov-kpi-unit">条</span></div>
              <span class="lov-kpi-delta">点击快速筛选待处理</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${g==="workorders"&&F?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">处理中工单</span>
              <div class="lov-kpi-value">${I.length}<span class="lov-kpi-unit">单</span></div>
              <span class="lov-kpi-delta">点击聚焦未结工单</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${g==="alarms"&&$==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">已确认 / 闭环</span>
              <div class="lov-kpi-value">${M}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">24h 无复发即计入有效</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="snoozed"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${g==="alarms"&&$==="snoozed"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">已忽略 24h</span>
              <div class="lov-kpi-value">${i}<span class="lov-kpi-unit">条</span></div>
              <span class="lov-kpi-delta">到期自动恢复监控</span>
            </button>
          </div>

          ${f?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${f}</span></div>`:""}
          ${v?`<div class="pacom-alert-banner">${v}</div>`:""}

          ${g==="alarms"?`
              <section class="lov-table-card">
                <div class="lov-table-toolbar">
                  <div class="lov-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" style="max-width:260px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${k}" aria-label="搜索告警" />
                    <select class="pacom-select" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${u==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${u==="critical"?"selected":""}>严重</option>
                      <option value="major" ${u==="major"?"selected":""}>重要</option>
                      <option value="minor" ${u==="minor"?"selected":""}>一般</option>
                    </select>
                    ${Y?`<button type="button" class="pacom-btn pacom-btn--ghost" data-clear-kpi="1">${Y} ×</button>`:""}
                  </div>
                  <div class="lov-table-toolbar-group">
                    ${A.size>0&&s.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${A.size}）</button>`:""}
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
                          ${V.map(a=>{const n=a[0],T=Oe[n.severity]??{label:n.severity,cls:"pacom-badge--neutral"},H=D(n.deviceId),J=B===n.id,te=L.has(n.id),ne=A.has(n.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" data-check-alarm="${n.id}" ${ne?"checked":""} ${n.status!=="active"||te?"disabled":""} aria-label="选择 ${n.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${T.cls}">${T.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                      <span>${n.title}</span>
                                      ${a.length>1?`<span class="pacom-badge pacom-badge--accent">归并 ${a.length} 条</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${n.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${H.name}</div>
                                    <div class="pacom-row-sub">${H.zone}</div>
                                  </td>
                                  <td><span class="pacom-row-sub">${n.triggeredAt?n.triggeredAt.slice(5,16).replace("T"," "):"-"}</span></td>
                                  <td>
                                    <span class="pacom-badge ${te?"pacom-badge--neutral":n.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${te?"已忽略 24h":n.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${te?`<button class="pacom-btn" data-unsnooze="${n.id}">恢复监控</button>`:`
                                            ${n.status==="active"?`<button class="pacom-btn" data-mark-actioned="${n.id}" ${s.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${n.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${n.id}" ${s.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${n.id}">${J?"收起":"详情"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${J?`
                                    <tr class="lov-table-detail-row">
                                      <td colspan="7">
                                        <div style="display:flex; flex-direction:column; gap:10px;">
                                          <div style="font-size:13px; color:var(--pacom-text-body);">
                                            <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${Fe(n)}
                                          </div>
                                          <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                                            <div class="pacom-row-sub">
                                              告警编号 <code>${n.id}</code> · 设备编号 <code>${n.deviceId}</code> · 关联工单 ${n.workOrderId??"无"}
                                            </div>
                                            <div style="display:flex; gap:8px; align-items:center;">
                                              ${!te&&n.status==="active"?`<button class="pacom-btn" data-snooze="${n.id}">忽略 24h</button>`:""}
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
                          ${Z.map(a=>{const n=D(a.deviceId);return`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${a.title}</div>
                                    <div class="pacom-row-sub">${a.description} · <code>${a.id}</code></div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${n.name}</div>
                                    <div class="pacom-row-sub">${n.zone}</div>
                                  </td>
                                  <td><span class="pacom-row-sub">${a.createdAt?a.createdAt.slice(5,16).replace("T"," "):"-"}</span></td>
                                  <td style="text-align:right;">
                                    <select class="pacom-select" data-wo-status="${a.id}" aria-label="更新工单状态">
                                      ${["open","assigned","in_progress","resolved","closed"].map(T=>`<option value="${T}" ${a.status===T?"selected":""}>${Ce[T]}</option>`).join("")}
                                    </select>
                                  </td>
                                </tr>`}).join("")}
                        </tbody>
                      </table>
                    </div>`}
              </section>`}
        </div>
      </div>
    `,t.querySelectorAll("[data-main-tab]").forEach(a=>{a.addEventListener("click",()=>{g=a.dataset.mainTab??"alarms",f="",m()})}),t.querySelectorAll("[data-kpi-filter]").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.kpiFilter;f="",n==="workorders"?(g="workorders",F=!F):(n==="active"||n==="acknowledged"||n==="snoozed")&&(g="alarms",$=$===n?"all":n),m()})}),t.querySelector("[data-clear-kpi]")?.addEventListener("click",()=>{$="all",m()}),t.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{f="",C()}),t.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{x=!x,m()}),t.querySelector("[data-toggle-open-wo]")?.addEventListener("click",()=>{F=!F,m()}),t.querySelector("[data-severity-filter]")?.addEventListener("change",a=>{u=a.currentTarget.value,m()}),t.querySelector("[data-alarm-search]")?.addEventListener("input",a=>{const n=a.currentTarget,T=n.selectionStart??n.value.length;k=n.value,m();const H=t.querySelector("[data-alarm-search]");H&&(H.focus(),H.setSelectionRange(T,T))}),t.querySelectorAll("[data-check-alarm]").forEach(a=>{a.addEventListener("change",()=>{const n=a.dataset.checkAlarm;n&&(a.checked?A.add(n):A.delete(n),m())})}),t.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{v="";const a=Array.from(A);try{for(const n of a)await e.acknowledgeAlarm(n,"告警中心批量确认"),j.add(n);A.clear(),f=`已批量确认 ${a.length} 条告警，未来 24 小时持续校验无复发。`,await C()}catch(n){v=n instanceof Error?n.message:String(n),m()}}),t.querySelectorAll("[data-expand-alarm]").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.expandAlarm??null;B=B===n?null:n,m()})}),t.querySelectorAll("[data-locate-home]").forEach(a=>{a.addEventListener("click",()=>{window.location.hash="#home"})}),t.querySelectorAll("[data-snooze]").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.snooze;n&&(L.add(n),A.delete(n),f="已将该告警限时忽略 24 小时，可在上方「已忽略 24h」磁贴中随时恢复。",m())})}),t.querySelectorAll("[data-unsnooze]").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.unsnooze;n&&(L.delete(n),f="已恢复该告警的实时监控。",m())})}),t.querySelectorAll("[data-mark-actioned]").forEach(a=>{a.addEventListener("click",async()=>{v="";const n=a.dataset.markActioned;try{await e.acknowledgeAlarm(n,"现场自处理完成（Mark Actioned）"),j.add(n),A.delete(n),f="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await C()}catch(T){v=T instanceof Error?T.message:String(T),m()}})}),t.querySelectorAll("[data-to-wo]").forEach(a=>{a.addEventListener("click",async()=>{v="";const n=l.find(T=>T.id===a.dataset.toWo);if(n)try{await e.createWorkOrder({floorId:n.floorId,deviceId:n.deviceId,alarmId:n.id,title:`处置告警：${n.title}`,description:n.message}),f=`已将「${n.title}」转为运维工单。`,await C()}catch(T){v=T instanceof Error?T.message:String(T),m()}})}),t.querySelectorAll("[data-wo-status]").forEach(a=>{a.addEventListener("change",async()=>{v="";try{await e.updateWorkOrderStatus(a.dataset.woStatus,a.value),f="工单状态已更新并写入审计日志。",await C()}catch(n){v=n instanceof Error?n.message:String(n),await C()}})})}await C()}const ie=[{id:"energy",label:"能源",desc:"分项能耗与峰谷负荷趋势"},{id:"environment",label:"环境",desc:"温湿度、CO₂ 与洁净室舒适度"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与异常分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能基线对比"}],ce=[{id:r.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:r.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:r.projectId,label:"广实2号园（全园区）",factor:18.2}],Me={energy:{title:"分项能耗构成与节能估算",summary:"较目标基线节省约 ¥ 1,420 / 月，主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"舒适度达标构成",summary:"全天温湿度综合达标率 96.2%，CO₂ 浓度全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"CO₂ 优良时段（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}};function qe(t){const e=Math.max(...t.series.map(k=>Math.max(k.value,k.baseline??0)),1),s=46,l=34,o=36,c=Math.max(t.series.length*(s+l)+o*2,620),g=220,$=178,u=138,F=[0,.25,.5,.75,1].map(k=>{const B=Math.round($-k*u);return`<line x1="${o-8}" y1="${B}" x2="${c-18}" y2="${B}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${k===0?"0":"3 3"}" />`}).join(""),x=t.series.map((k,B)=>{const A=o+B*(s+l),L=Math.max(8,Math.round(k.value/e*u)),j=$-L,f=typeof k.baseline=="number"&&k.value>k.baseline*1.08,v=f?`<rect x="${A-8}" y="28" width="${s+16}" height="${$-28}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",C=typeof k.baseline=="number"?`<line x1="${A-5}" y1="${Math.round($-k.baseline/e*u)}" x2="${A+s+5}" y2="${Math.round($-k.baseline/e*u)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"";return`
        ${v}
        ${C}
        <rect x="${A}" y="${j}" width="${s}" height="${L}" rx="7" fill="${f?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        <text x="${A+s/2}" y="${j-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${k.value}</text>
        <text x="${A+s/2}" y="${$+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${k.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${c} ${g}" style="width:100%; height:228px; display:block;" role="img" aria-label="${t.category} 趋势图">
      ${F}
      ${x}
    </svg>
  `}function ze(t){const e=[["时段",`数值 (${t.unit})`,`基线 (${t.unit})`].join(","),...t.series.map(c=>[c.label,String(c.value),c.baseline!==void 0?String(c.baseline):""].join(","))],s=new Blob([`\uFEFF${e.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),l=URL.createObjectURL(s),o=document.createElement("a");o.href=l,o.download=`pacom-${t.category}-${t.range}.csv`,o.click(),URL.revokeObjectURL(l)}function re(t,e=""){const s=(t??"").trim().toLowerCase();return!(!s||s.includes("%")||s.includes("°c")||s.includes("ppm")||s.includes("ms")||s.includes("m²")||s.includes("/m2")||s.includes("db")||s.includes("lx")||e.includes("率")||e.includes("均")||e.includes("强度")||e.includes("延迟"))}function le(t,e){const s=t*e;return Math.abs(s)>=10?Math.round(s):Math.round(s*10)/10}function Be(t,e){if(e===1)return t;const s=re(t.unit);return{...t,kpis:t.kpis.map(l=>{const o=Number(String(l.value).replaceAll(",",""));return!Number.isFinite(o)||!re(l.unit,l.label)?l:{...l,value:String(le(o,e))}}),series:s?t.series.map(l=>({...l,value:le(l.value,e),...typeof l.baseline=="number"?{baseline:le(l.baseline,e)}:{}})):t.series,zoneBreakdown:t.zoneBreakdown.map(l=>re(l.unit)?{...l,value:le(l.value,e)}:l)}}async function Pe(t,e,s){let l="energy",o="7d",c=r.floorId,g="chart",$=!1,u=null;async function F(){u=await e.getAnalysisReport(l,o,r.floorId),x()}function x(){if(!u)return;const k=ie.find(v=>v.id===l)??ie[0],B=ce.find(v=>v.id===c)??ce[0],A=Be(u,B.factor),L=A.zoneBreakdown.filter(v=>v.status==="warning"),j=Me[l],f=Math.max(...A.zoneBreakdown.map(v=>v.value),1);t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:12px; min-width:0;">
              <h1 class="pacom-title" style="flex-shrink:0;">数据分析</h1>
              <div class="pacom-tabs" role="tablist" aria-label="分析维度">
                ${ie.map(v=>`<button class="pacom-tab" role="tab" aria-selected="${l===v.id}" data-cat="${v.id}">${v.label}</button>`).join("")}
              </div>
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <div class="pacom-scope-pill" style="width:208px;" title="切换统计空间范围">
                <select name="analysisScope" data-scope-select aria-label="选择统计空间范围">
                  ${ce.map(v=>`<option value="${v.id}" ${v.id===c?"selected":""}>${v.label}</option>`).join("")}
                </select>
                <span class="pacom-scope-chevron">▾</span>
              </div>
              <div class="pacom-tabs" role="group" aria-label="时间范围">
                <button class="pacom-tab" aria-selected="${o==="today"}" data-range="today">今日</button>
                <button class="pacom-tab" aria-selected="${o==="7d"}" data-range="7d">7天</button>
                <button class="pacom-tab" aria-selected="${o==="30d"}" data-range="30d">30天</button>
              </div>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              <button class="pacom-btn ${$?"pacom-btn--primary":""}" data-toggle-canvas="1">${$?"关闭对照":"空间对照"}</button>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          <div class="lov-kpi-strip" role="region" aria-label="核心统计指标">
            ${A.kpis.map(v=>`
                <div class="lov-kpi-cell">
                  <span class="lov-kpi-label">${v.label}</span>
                  <div class="lov-kpi-value">
                    <span>${v.value}</span>
                    ${v.unit?`<span class="lov-kpi-unit">${v.unit}</span>`:""}
                  </div>
                  <span class="lov-kpi-delta">${v.delta??"与基线持平"}</span>
                </div>`).join("")}
          </div>

          <section class="lov-section">
            <div class="lov-section-head">
              <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                <h2 class="lov-section-title">${k?.label??"趋势"}趋势（${A.unit}）</h2>
                <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                <span class="pacom-row-sub">口径：${B.label} · 更新于 ${A.updatedAt.slice(5,16).replace("T"," ")}</span>
              </div>
              <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                <span class="pacom-row-sub">虚线为目标基线 · 浅红阴影为超基线异常段</span>
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${g==="chart"}" data-chart-mode="chart">趋势图</button>
                  <button class="pacom-tab" aria-selected="${g==="table"}" data-chart-mode="table">明细原表</button>
                </div>
              </div>
            </div>

            <div class="pacom-card" style="gap:16px;">
              ${g==="chart"?qe(A):`
                  <div class="lov-table-wrap">
                    <table class="lov-table">
                      <thead>
                        <tr>
                          <th>统计时段</th>
                          <th>实测值（${A.unit}）</th>
                          <th>基线参考</th>
                          <th>状态</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${A.series.map(v=>{const C=typeof v.baseline=="number"&&v.value>v.baseline*1.08;return`
                              <tr>
                                <td><strong>${v.label}</strong></td>
                                <td>${v.value}</td>
                                <td>${v.baseline??"-"}</td>
                                <td><span class="pacom-badge ${C?"pacom-badge--warning":"pacom-badge--online"}">${C?"超基线":"正常"}</span></td>
                              </tr>`}).join("")}
                      </tbody>
                    </table>
                  </div>`}
              <div class="lov-banner">
                <div class="lov-banner-text">
                  <span class="lov-banner-title">${k?.desc??"空间运行洞察"}</span>
                  <span class="lov-banner-sub">
                    ${L.length>0?`当前有 ${L.length} 个功能区指标偏高（${L.map(v=>v.zoneName).join("、")}），建议前往智能策略优化启停时段。`:j.summary}
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
                <span class="pacom-row-sub">${A.zoneBreakdown.length} 个功能区</span>
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
                      ${A.zoneBreakdown.map(v=>{const C=Math.max(8,Math.round(v.value/f*100));return`
                            <tr>
                              <td style="font-weight:500;">${v.zoneName.replace(/^7F\s*/,"")}</td>
                              <td style="width:140px;">
                                <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                  <div style="width:${C}%; height:100%; border-radius:999px; background:${v.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                </div>
                              </td>
                              <td><strong>${v.value}</strong> <span class="pacom-row-sub">${v.unit}</span></td>
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
                <h2 class="lov-section-title">${$?"E7F 空间对照预览":j.title}</h2>
                <span class="pacom-row-sub">${$?"与空间总览状态独立":"当前周期结构占比"}</span>
              </div>
              <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                ${$?'<img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':j.items.map(v=>`
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                              <span style="font-weight:500; color:var(--pacom-text-primary);">${v.name}</span>
                              <span class="pacom-row-sub">${v.detail} · <strong style="color:var(--pacom-text-primary);">${v.pct}%</strong></span>
                            </div>
                            <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                              <div style="width:${Math.min(100,v.pct)}%; height:100%; border-radius:999px; background:${v.color};"></div>
                            </div>
                          </div>`).join("")}
              </div>
            </section>
          </div>
        </div>
      </div>
    `,t.querySelectorAll("[data-cat]").forEach(v=>{v.addEventListener("click",()=>{l=v.dataset.cat,F()})}),t.querySelector("[data-scope-select]")?.addEventListener("change",v=>{c=v.currentTarget.value,x()}),t.querySelectorAll("[data-range]").forEach(v=>{v.addEventListener("click",()=>{o=v.dataset.range??"7d",F()})}),t.querySelectorAll("[data-chart-mode]").forEach(v=>{v.addEventListener("click",()=>{g=v.dataset.chartMode??"chart",x()})}),t.querySelector("[data-export-csv]")?.addEventListener("click",()=>{ze(A)}),t.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{$=!$,x()}),t.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"})}await F()}const Re=[{group:"一、项目配置",items:[{id:"projects",label:"项目与楼宇"},{id:"floors",label:"楼层与功能区"}]},{group:"二、系统接入",items:[{id:"connections",label:"网关与数据健康"}]},{group:"三、设备部署",items:[{id:"floorplan",label:"图纸标点与绑定"},{id:"inventory",label:"设备四态台账"}]},{group:"四、交付验收",items:[{id:"delivery",label:"进度与交付冻结"}]}],_e={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},Ne={frozen:"已冻结",draft:"草稿",delivered:"已交付"},Ve={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function We(t){return t.category==="gateway"?"主控网关":t.category==="lighting"?t.name.includes("702")?"702 照明":"主照明":t.category==="hvac"?t.name.includes("VAV")?"VAV-02":"FCU-01":t.category==="sensor"?"环境传感":t.name.slice(0,6)}async function Ze(t,e,s){let l="floorplan",o="all",c=await e.getSpatialTree(),g=[],$=[],u=[],F=null,x=!1,k=!1,B=null,A="",L="";async function j(){L="";const[C,D,m,R]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(r.floorId).catch(()=>[]),e.listConnections(r.projectId),e.listDeliveryBatches(r.floorId)]);c=C,g=D,$=m,u=R,g.some(M=>M.id===F)||(F=g[0]?.id??null),x=g.find(M=>M.id===F)?.physicalInstalled??!1,v()}function f(C){L="",C.connectivity==="offline"?L=`单机回读自检未通过（FAIL）：「${C.name}」当前离线，请先在「网关与数据健康」核查 ${C.hardwareBinding?.networkAddress??"-"} 链路状态。`:A=`单机回读自检通过（PASS）：「${C.name}」指令下发 → 状态回读一致 → 已安全自动恢复原工况。`,v()}function v(){const C=g.find(a=>a.id===F)??null,D=s.scope.canEditDeployment,m=$.reduce((a,n)=>a+n.collectedPoints,0),R=$.reduce((a,n)=>a+n.calculatedPoints,0),I=$.filter(a=>a.status==="connected").length,M=$.filter(a=>a.status!=="connected"),i=g.filter(a=>!!a.planPoint).length,w=g.filter(a=>a.physicalInstalled).length,q=g.length-w,O=g.length-i,V=g.filter(a=>o==="unverified"?!a.physicalInstalled:o==="unplaced"?!a.planPoint:!0),Z=c.buildings.find(a=>a.id===r.buildingId),Y=c.floors.filter(a=>a.buildingId===r.buildingId),X=c.zones.filter(a=>a.floorId===r.floorId);t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">系统部署</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">当前试点：广实2号园 / E栋 7F</span>
              <span class="pacom-badge ${D?"pacom-badge--online":"pacom-badge--warning"}">
                ${D?"可编辑部署与硬件绑定":"只读权限（写入将被服务端 403 拦截）"}
              </span>
            </div>
          </div>
        </header>

        ${A?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${A}</span></div>`:""}
        ${L?`<div class="pacom-alert-banner">${L}</div>`:""}

        <div class="lov-subnav-layout">
          <nav class="lov-subnav-rail" style="width:176px;" aria-label="工程部署阶段导轨">
            ${Re.map(a=>`
              <div class="lov-subnav-group">
                <div class="lov-subnav-group-title">${a.group}</div>
                ${a.items.map(n=>`
                    <button type="button" class="lov-subnav-item" aria-current="${l===n.id?"true":"false"}" data-dsec="${n.id}">
                      <span>${n.label}</span>
                      ${n.id==="connections"&&M.length>0?`<span class="pacom-badge pacom-badge--warning">${M.length}</span>`:""}
                      ${n.id==="floorplan"&&q>0?`<span class="pacom-badge pacom-badge--neutral">${q}</span>`:""}
                    </button>`).join("")}
              </div>`).join("")}
          </nav>

          <div class="lov-subnav-main" style="${l==="floorplan"?"overflow:hidden; padding:0;":"padding:4px 4px 24px;"}">
            ${l==="floorplan"?`
                <section class="pacom-split" style="height:100%;">
                  <aside class="pacom-left-pane" style="--pacom-sidebar-width:312px;">
                    <div class="pacom-pane-toolbar">
                      <div style="font-weight:500;">E7F 图纸标点与四态绑定（${g.length}）</div>
                      <div class="pacom-row-sub">图上放点仅更新坐标，绝不自动改写物理安装态或硬件绑定。</div>
                      <div class="lov-count-pills" role="group" aria-label="筛选核验状态">
                        <button type="button" class="lov-count-pill" style="height:26px; font-size:12px;" aria-pressed="${o==="all"}" data-dev-filter="all">
                          <span>全部</span><span class="lov-count-num">${g.length}</span>
                        </button>
                        <button type="button" class="lov-count-pill" style="height:26px; font-size:12px;" aria-pressed="${o==="unverified"}" data-dev-filter="unverified">
                          <span>待复核</span><span class="lov-count-num">${q}</span>
                        </button>
                        <button type="button" class="lov-count-pill" style="height:26px; font-size:12px;" aria-pressed="${o==="unplaced"}" data-dev-filter="unplaced">
                          <span>未标点</span><span class="lov-count-num">${O}</span>
                        </button>
                      </div>
                    </div>
                    <div class="pacom-list">
                      ${V.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">该筛选条件下无设备</div>':V.map(a=>`
                                <div class="pacom-row ${a.id===F?"is-selected":""}" data-pick-dev="${a.id}">
                                  <div style="min-width:0;">
                                    <div class="pacom-row-title">${a.name}</div>
                                    <div class="pacom-row-sub">v${a.version} · ${a.hardwareBinding?.protocol.toUpperCase()??"未绑定"} · ${a.physicalInstalled?"物理已复核":"待物理复核"}</div>
                                  </div>
                                  <span class="pacom-badge ${a.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">
                                    ${a.planPoint?`${Math.round(a.planPoint.x*100)}%,${Math.round(a.planPoint.y*100)}%`:"未标点"}
                                  </span>
                                </div>`).join("")}
                    </div>
                    ${C?`
                        <form data-role="binding-form" style="padding:14px 16px; border-top:var(--hw) solid var(--pacom-border-subtle); background:var(--pacom-surface-primary); display:flex; flex-direction:column; gap:10px;">
                          <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-weight:500; font-size:13px;">显式硬件绑定与现场复核</span>
                            <span class="pacom-badge pacom-badge--neutral">${C.id}</span>
                          </div>
                          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                            <select class="pacom-select" name="protocol" aria-label="通信协议">
                              ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(a=>`<option value="${a}" ${C.hardwareBinding?.protocol===a?"selected":""}>${a.toUpperCase()}</option>`).join("")}
                            </select>
                            <input class="pacom-input" name="networkAddress" placeholder="网络地址/主题" value="${C.hardwareBinding?.networkAddress??""}" aria-label="网络地址" />
                          </div>
                          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                            <input class="pacom-input" name="portOrChannel" placeholder="端口/回路" value="${C.hardwareBinding?.portOrChannel??""}" aria-label="端口或回路" />
                            <div style="display:inline-flex; align-items:center; gap:6px; flex-shrink:0;">
                              <span class="pacom-row-sub">物理已复核</span>
                              <button type="button" class="lov-switch" role="switch" aria-checked="${x}" data-toggle-phys="1" aria-label="现场物理安装已复核" ${D?"":"disabled"}>
                                <span class="lov-switch-thumb"></span>
                              </button>
                            </div>
                          </div>
                          <div style="display:flex; gap:6px; flex-wrap:wrap;">
                            <button class="pacom-btn" type="button" data-toggle-place="1">${k?"取消标点":"点图更新坐标"}</button>
                            <button class="pacom-btn" type="button" data-ftt-test="1" title="验证指令下发、回读并自动复位">单机自检</button>
                            <button class="pacom-btn pacom-btn--primary" type="submit" style="flex:1;" ${D?"":"disabled"}>保存绑定（v${C.version}）</button>
                          </div>
                        </form>`:""}
                  </aside>
                  <div class="pacom-splitter"></div>
                  <main class="pacom-right-pane">
                    <div class="pacom-canvas-stage" data-role="deploy-stage" style="cursor:${k?"crosshair":"default"};">
                      <div class="pacom-canvas-viewport">
                        <div class="pacom-plan-wrap" data-role="deploy-plan">
                          <img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 部署平面图" />
                          ${g.filter(a=>a.planPoint).map(a=>`
                              <button type="button" class="pacom-pin ${a.id===F?"is-selected":""} ${a.connectivity==="offline"?"pacom-pin--offline":""}"
                                style="left:${(a.planPoint.x*100).toFixed(2)}%; top:${(a.planPoint.y*100).toFixed(2)}%;"
                                data-pick-dev="${a.id}" title="${a.name}">
                                <span class="pacom-dot ${a.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                <span>${We(a)}</span>
                              </button>`).join("")}
                        </div>
                      </div>
                      ${k&&C?`<div style="position:absolute; top:16px; left:16px; z-index:8;" class="pacom-badge pacom-badge--accent">标点模式：点击图纸任意位置更新「${C.name}」的 2D 坐标（不改动硬件绑定）</div>`:""}
                    </div>
                  </main>
                </section>`:l==="projects"?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">项目与楼宇归属配置</h2>
                      <span class="pacom-row-sub">共 ${c.projects.length} 个授权项目 · ${c.buildings.length} 栋楼宇</span>
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                      ${c.projects.map(a=>{const n=c.buildings.filter(T=>T.projectId===a.id);return`
                            <div class="pacom-card" style="padding:16px; gap:10px;">
                              <img src="${a.imageUrl??"./media/gzlab.jpg"}" alt="${a.name}" style="width:100%; height:132px; object-fit:cover; border-radius:10px;" />
                              <div>
                                <strong style="font-size:15px; font-weight:500;">${a.name}</strong>
                                <div class="pacom-row-sub">${a.city??""} ${a.address??""} · ${n.length} 栋楼宇</div>
                              </div>
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                ${n.map(T=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${T.name}</strong> · 地上 ${T.aboveFloors}F / ${T.areaSqm??"-"} m²</span>
                                      <span class="pacom-badge ${T.id===r.buildingId?"pacom-badge--accent":"pacom-badge--neutral"}">${T.id===r.buildingId?"含 E7F 试点":"对照楼宇"}</span>
                                    </div>`).join("")}
                              </div>
                            </div>`}).join("")}
                    </div>
                  </section>`:l==="floors"?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">${Z?.name??"E栋"} 楼层与 2D 图纸清单</h2>
                        <span class="pacom-row-sub">共登记 ${Y.length} 个楼层</span>
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
                              ${Y.map(a=>{const n=a.id===r.floorId,T=s.scope.allowedFloorIds.includes(a.id);return`
                                    <tr>
                                      <td><strong>${Z?.name??""} ${a.name}</strong></td>
                                      <td><span class="pacom-badge ${a.plan?"pacom-badge--online":"pacom-badge--neutral"}">${a.plan?"已上传 2D 图纸":"待上传图纸"}</span></td>
                                      <td>${n?`${g.length} 台设备 · ${X.length} 个功能区`:"-"}</td>
                                      <td><span class="pacom-badge ${T?"pacom-badge--accent":"pacom-badge--warning"}">${T?"已授权":"未授权"}</span></td>
                                      <td style="text-align:right;">
                                        ${n?'<button type="button" class="pacom-btn" data-dsec="floorplan">去标点与绑定 →</button>':'<span class="pacom-row-sub">暂未入网</span>'}
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
                        <span class="pacom-row-sub">${X.length} 个逻辑功能区</span>
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
                              ${X.map(a=>{const n=g.filter(H=>H.logicalZoneId===a.id),T=n.filter(H=>H.physicalInstalled).length;return`
                                    <tr>
                                      <td><strong>${a.name.replace(/^7F\s*/,"")}</strong></td>
                                      <td>${n.length} 台</td>
                                      <td><span class="pacom-badge ${T===n.length?"pacom-badge--online":"pacom-badge--warning"}">${T} / ${n.length} 已复核</span></td>
                                    </tr>`}).join("")}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>`:l==="connections"?`
                      <div class="lov-kpi-strip" role="region" aria-label="数据采集健康度">
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">已连通通道</span>
                          <div class="lov-kpi-value">${I}<span class="lov-kpi-unit">/ ${$.length}</span></div>
                          <span class="lov-kpi-delta">边缘网关在线监控</span>
                        </div>
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">数据采集健康度</span>
                          <div class="lov-kpi-value">${$.length>0?Math.round(I/$.length*100):100}<span class="lov-kpi-unit">%</span></div>
                          <span class="lov-kpi-delta">区分设备真故障与断流</span>
                        </div>
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">原始采集点</span>
                          <div class="lov-kpi-value">${m}<span class="lov-kpi-unit">点</span></div>
                          <span class="lov-kpi-delta">协议直采实时遥测</span>
                        </div>
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">衍生计算点</span>
                          <div class="lov-kpi-value">${R}<span class="lov-kpi-unit">点</span></div>
                          <span class="lov-kpi-delta">能碳与聚合虚拟点位</span>
                        </div>
                      </div>

                      ${M.length>0?`
                          <div class="lov-banner lov-banner--critical">
                            <div class="lov-banner-text">
                              <span class="lov-banner-title">检测到 ${M.length} 条采集通道通信降级（${M.map(a=>a.name).join("、")}）</span>
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
                                ${$.map(a=>{const n=_e[a.status]??{label:a.status,cls:"pacom-badge--neutral"};return`
                                      <tr>
                                        <td><strong>${a.name}</strong></td>
                                        <td><span class="pacom-badge pacom-badge--neutral">${a.protocol.toUpperCase()}</span></td>
                                        <td><code style="font-size:12px;">${a.endpoint}</code></td>
                                        <td>采集 ${a.collectedPoints} / 计算 ${a.calculatedPoints}</td>
                                        <td><span class="pacom-badge ${n.cls}">${n.label}</span></td>
                                        <td>
                                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                                            <button type="button" class="pacom-btn" data-ping-conn="${a.id}">测试连通</button>
                                            <button type="button" class="pacom-btn pacom-btn--ghost" data-copy-endpoint="${a.id}" data-endpoint-val="${a.endpoint}">
                                              ${B===a.id?"已复制":"复制端点"}
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
                                  ${g.map(a=>{const n=(a.logicalZoneId?Ve[a.logicalZoneId]:void 0)??"E7F";return`
                                        <tr>
                                          <td>
                                            <div style="font-weight:500;">${a.name}</div>
                                            <div class="pacom-row-sub">${n} · v${a.version}</div>
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
                            <div class="lov-kpi-value">${i}<span class="lov-kpi-unit">/ ${g.length}</span></div>
                            <span class="lov-kpi-delta">${O===0?"全部设备已完成标点 ✓":`尚差 ${O} 台未标点 →`}</span>
                          </button>
                          <button type="button" class="lov-kpi-cell" data-dsec="inventory" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">2. 物理安装复核</span>
                            <div class="lov-kpi-value">${w}<span class="lov-kpi-unit">/ ${g.length}</span></div>
                            <span class="lov-kpi-delta" style="${q>0?"color:var(--pacom-status-warning);":""}">${q===0?"现场复核全绿 ✓":`待复核 ${q} 台，点击查看 →`}</span>
                          </button>
                          <button type="button" class="lov-kpi-cell" data-dsec="connections" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">3. 网关通道连通</span>
                            <div class="lov-kpi-value">${I}<span class="lov-kpi-unit">/ ${$.length}</span></div>
                            <span class="lov-kpi-delta" style="${M.length>0?"color:var(--pacom-status-warning);":""}">${M.length===0?"全部通道健康 ✓":`${M.length} 条通道降级，点击排查 →`}</span>
                          </button>
                        </div>

                        <section class="lov-section">
                          <div class="lov-section-head">
                            <h2 class="lov-section-title">E7F 交付冻结批次</h2>
                            <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${D?"":"disabled"}>+ 新建交付冻结快照</button>
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
                                  ${u.map(a=>`
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
                                        <td><span class="pacom-badge pacom-badge--accent">${Ne[a.status]??a.status}</span></td>
                                      </tr>`).join("")}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </section>`}
          </div>
        </div>
      </div>
    `,t.querySelectorAll("[data-dsec]").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.dsec;n&&(l=n,A="",L="",v())})}),t.querySelectorAll("[data-dev-filter]").forEach(a=>{a.addEventListener("click",()=>{o=a.dataset.devFilter??"all",v()})}),t.querySelectorAll("[data-pick-dev]").forEach(a=>{a.addEventListener("click",()=>{F=a.dataset.pickDev??null,x=g.find(T=>T.id===F)?.physicalInstalled??!1,v()})}),t.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{x=!x,v()}),t.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{k=!k,v()}),t.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{C&&f(C)}),t.querySelectorAll("[data-ftt-dev]").forEach(a=>{a.addEventListener("click",()=>{const n=g.find(T=>T.id===a.dataset.fttDev);n&&f(n)})}),t.querySelectorAll("[data-ping-conn]").forEach(a=>{a.addEventListener("click",()=>{const n=$.find(T=>T.id===a.dataset.pingConn);n&&(L="",n.status==="connected"?A=`连通性测试通过：「${n.name}」（${n.endpoint}）响应正常，延迟 18 ms。`:L=`连通性测试异常：「${n.name}」（${n.endpoint}）超时无应答，建议排查边缘网关端口与 RS485 链路。`,v())})}),t.querySelectorAll("[data-copy-endpoint]").forEach(a=>{a.addEventListener("click",async()=>{const n=a.dataset.endpointVal??"",T=a.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(n),B=T,v(),window.setTimeout(()=>{B=null,v()},1600)}catch{}})}),t.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async a=>{if(!k||!C)return;const n=a.currentTarget.getBoundingClientRect(),T=Math.max(.02,Math.min(.98,(a.clientX-n.left)/n.width)),H=Math.max(.02,Math.min(.98,(a.clientY-n.top)/n.height));try{await e.updateDevicePlanPoint({deviceId:C.id,floorId:r.floorId,planVersion:C.planPoint?.planVersion??1,x:T,y:H,expectedVersion:C.version}),k=!1,A=`已更新「${C.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await j()}catch(J){L=J instanceof Error?J.message:String(J),v()}}),t.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async a=>{if(a.preventDefault(),!C)return;const n=new FormData(a.currentTarget);try{await e.updateDeviceHardwareBinding({deviceId:C.id,gatewayId:C.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(n.get("protocol")),networkAddress:String(n.get("networkAddress")??""),portOrChannel:String(n.get("portOrChannel")??""),physicalInstalled:x,expectedVersion:C.version}),A=`已保存「${C.name}」的硬件绑定与物理安装复核状态。`,await j()}catch(T){L=T instanceof Error?T.message:String(T),v()}}),t.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const a=await e.freezeDeliveryBatch(r.floorId,"系统部署交付验收发起冻结");A=`已生成冻结批次 ${a.versionTag}（核验 ${a.verifiedCount}/${a.deviceCount}）。`,await j()}catch(a){L=a instanceof Error?a.message:String(a),v()}})}await j()}function He(t){if(t.connectivity==="offline")return`${t.name.includes("VAV")?"VAV-02":t.name.slice(0,6)} 离线`;if(t.category==="lighting"){const e=t.name.includes("702")?"702 照明":"主照明",s=Number(t.telemetry.dimming?.value??0);return s>0?`${e} ${s}%`:`${e} 关`}return t.category==="hvac"?`${t.name.includes("VAV")?"VAV-02":"FCU-01"} ${t.telemetry.setpoint?.value??24}°C`:t.category==="sensor"?`环境 ${t.telemetry.temp?.value??"23.4"}°C`:t.category==="gateway"?"主控网关":t.name.slice(0,6)}const de="pacom.web.e7f.leftWidth",ge={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},Ue={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},Ge={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:42,top:42,width:14,height:22}};function h(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Ye(t){return t.level==="all-projects"?"all":t.level==="project"?`project:${t.projectId}`:t.level==="building"?`building:${t.projectId}:${t.buildingId}`:`floor:${t.projectId}:${t.buildingId}:${t.floorId}`}async function Ke(t,e,s){const l=await e.getSpatialTree(),o=e.mode==="demo",c=s.scope.canControlDevices,g=s.scope.canManageAlarms,$=s.scope.allowedZoneIds?.length?s.scope.allowedZoneIds:null;let u={level:"floor",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId},F="devices",x="canvas",k="",B="all",A="all",L=null,j=!1,f="devices";const v=new Set,C=new Set;let D=[],m=[],R=[],I=null,M=null,i=1,w=0,q=0,O=Number(localStorage.getItem(de)||400);(!Number.isFinite(O)||O<320||O>680)&&(O=400);let V=null;function Z(){return l.zones.filter(d=>!(u.level==="floor"&&d.floorId!==u.floorId||$&&!$.includes(d.id)))}async function Y(d){u=d,M=null,A="all",C.clear(),i=1,w=0,q=0,V&&(V(),V=null);const E=u.level==="floor"?u.floorId:r.floorId;if(u.level==="floor")try{const[p,b,S]=await Promise.all([e.getFloorDevices(u.floorId),e.listAlarms(u.floorId),e.listWorkOrders(u.floorId)]);D=p,m=b,R=S,D.some(P=>P.id===L)||(L=D[1]?.id??D[0]?.id??null,j=!1),V=e.subscribeFloorEvents(u.floorId,async P=>{P.type==="control.receipt.updated"&&I?.batchId===P.batchId&&(I=await e.getControlBatch(P.batchId)),(P.type==="telemetry.updated"||P.type==="device.connectivity")&&u.level==="floor"&&(D=await e.getFloorDevices(u.floorId)),P.type==="alarm.changed"&&u.level==="floor"&&(m=await e.listAlarms(u.floorId)),T()})}catch(p){D=[],m=[],R=[],L=null,j=!1,M=p instanceof Error?p.message:String(p)}else{j=!1;const[p,b,S]=await Promise.all([e.getFloorDevices(E).catch(()=>[]),e.listAlarms(E).catch(()=>[]),e.listWorkOrders(E).catch(()=>[])]);D=p,m=b,R=S}K()}function X(d){return d?l.zones.find(E=>E.id===d)?.name??d:"未分配逻辑区"}function a(){const d=k.trim().toLowerCase();return D.filter(E=>A!=="all"&&E.logicalZoneId!==A||B!=="all"&&E.category!==B?!1:d?E.name.toLowerCase().includes(d)||E.id.toLowerCase().includes(d)||X(E.logicalZoneId).toLowerCase().includes(d):!0)}async function n(d,E,p){!d.length||u.level!=="floor"||!c||(d.forEach(b=>v.add(b)),I=await e.dispatchControlBatch({floorId:u.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:d.map(b=>({deviceId:b,command:E,targetValue:p}))}),T())}function T(){const d=document.activeElement,E=d?.dataset?.role,p=d&&"selectionStart"in d?d.selectionStart:null,b=d&&"selectionEnd"in d?d.selectionEnd:null,S=t.querySelector(".pacom-list")?.scrollTop??0;K();const P=t.querySelector(".pacom-list");if(P&&(P.scrollTop=S),E==="search"){const _=t.querySelector('[data-role="search"]');_&&(_.focus(),p!==null&&b!==null&&_.setSelectionRange(p,b))}}function H(){const d=t.querySelector('[data-role="canvas-viewport"]');d&&(d.style.transform=`translate(${w}px, ${q}px) scale(${i})`);const E=t.querySelector('[data-role="canvas-hint"]');E&&(E.textContent=`缩放 ${Math.round(i*100)}% · 滚轮缩放 · 拖动平移 · 双击复位`)}function J(){return u.level==="floor"?`building:${u.projectId}:${u.buildingId}`:u.level==="building"?`project:${u.projectId}`:u.level==="project"?"all":null}function te(){const d=Ye(u),E=l.projects.map(S=>`<option value="project:${h(S.id)}" ${d===`project:${S.id}`?"selected":""}>项目 · ${h(S.name)}</option>`).join(""),p=l.buildings.map(S=>{const P=`building:${S.projectId}:${S.id}`;return`<option value="${h(P)}" ${d===P?"selected":""}>楼宇 · 广实2号园 / ${h(S.name)}</option>`}).join(""),b=l.floors.map(S=>{const P=s.scope.allowedFloorIds.includes(S.id),_=`floor:${r.projectId}:${S.buildingId}:${S.id}`;return`<option value="${h(_)}" ${d===_?"selected":""}>楼层 · 广实2号园 / E栋 / ${h(S.name)}${P?"":"（未授权）"}</option>`}).join("");return`
      <option value="all" ${d==="all"?"selected":""}>全部项目（${l.projects.length} 个授权园区）</option>
      <optgroup label="项目级">${E}</optgroup>
      <optgroup label="楼宇级">${p}</optgroup>
      <optgroup label="楼层级">${b}</optgroup>
    `}function ne(){if(u.level==="all-projects"){const E=D.filter(b=>b.connectivity==="online").length,p=m.filter(b=>b.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">授权项目总览（${l.projects.length}）</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">楼宇</span><strong>${l.buildings.length} 栋</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线</span><strong>${E}/${D.length}</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:var(--pacom-status-warning);">${p} 条</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${l.projects.map(b=>{const S=l.buildings.filter(P=>P.projectId===b.id).length;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="project:${h(b.id)}">
                  <img src="${h(b.imageUrl??"./media/gzlab.jpg")}" alt="${h(b.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${h(b.name)}</strong>
                    <span class="pacom-badge pacom-badge--accent">${S} 栋楼宇</span>
                  </div>
                  <div class="pacom-row-sub">${h(b.city??"")} · ${h(b.address??"")}</div>
                </article>`}).join("")}
        </div>
      `}const d=u;if(d.level==="project"){const E=l.projects.find(_=>_.id===d.projectId),p=l.buildings.filter(_=>_.projectId===d.projectId),b=D.filter(_=>_.connectivity==="online").length,S=D.length?Math.round(b/D.length*100):100,P=m.filter(_=>_.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${h(E?.name??"园区")} · 楼宇绩效（${p.length}）</div>
          <div class="pacom-row-sub">${h(E?.city??"")} ${h(E?.address??"")}</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">在线率</span><strong>${S}%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:${P>0?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${P} 条</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>1,248 kWh</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${p.map(_=>{const y=_.id===r.buildingId;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="building:${h(_.projectId)}:${h(_.id)}">
                  <img src="${h(_.imageUrl??"./media/building-e.png")}" alt="${h(_.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${h(_.name)}</strong>
                    <span class="pacom-badge ${y?"pacom-badge--online":"pacom-badge--neutral"}">${y?`在线 ${S}% · 告警 ${P}`:"运行平稳"}</span>
                  </div>
                  <div class="pacom-row-sub">地上 ${_.aboveFloors} 层 · 面积 ${_.areaSqm??"-"} m² · 舒适度达标 96%</div>
                </article>`}).join("")}
        </div>
      `}if(d.level==="building"){const E=l.buildings.find(y=>y.id===d.buildingId),p=l.floors.filter(y=>y.buildingId===d.buildingId),b=R.filter(y=>y.status!=="closed"&&y.status!=="resolved"),S=D.filter(y=>y.connectivity==="online").length,P=D.length?Math.round(S/D.length*100):100,_=m.filter(y=>y.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${h(E?.name??"楼宇")} 运行概况</div>
          <div class="pacom-row-sub">地上 ${E?.aboveFloors??0} 层 · 面积 ${E?.areaSqm??"-"} m²</div>
          <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线率</span><strong>${P}%（${S}/${D.length}）</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">舒适度达标</span><strong>96.2%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>418 kWh</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">告警 / 工单</span><strong style="color:var(--pacom-status-warning);">${_} 告警 · ${b.length} 工单</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:8px; padding:12px;">
          <div style="font-weight:500; font-size:13px;">楼层列表（点击进入 2D 平面控制）</div>
          ${p.length?p.map(y=>{const z=s.scope.allowedFloorIds.includes(y.id),N=y.id===r.floorId;return`
                      <div class="pacom-row" data-nav-scope="floor:${h(d.projectId)}:${h(d.buildingId)}:${h(y.id)}">
                        <div>
                          <div class="pacom-row-title">${h(E?.name??"")} ${h(y.name)}</div>
                          <div class="pacom-row-sub">${y.plan?"2D 平面图就绪":"暂未上传图纸"}${N&&_>0?` · ${_} 条待处理告警`:""}</div>
                        </div>
                        <span class="pacom-badge ${z?"pacom-badge--online":"pacom-badge--warning"}">${z?"进入楼层":"无权限"}</span>
                      </div>`}).join(""):'<div class="pacom-row-sub">该楼宇暂未配置试点楼层。</div>'}
        </div>
      `}if(F==="devices"){const E=a(),p=Z(),b=Array.from(C);return`
        <div class="pacom-pane-toolbar">
          ${$?`<div class="pacom-info-banner">我的区域视图：仅显示当前账号获授权的 ${$.length} 个功能区及设备。</div>`:""}
          <div class="pacom-search-row">
            <input class="pacom-input" data-role="search" placeholder="搜索设备名 / ID / 区域…" value="${h(k)}" aria-label="搜索楼层设备" />
            <select class="pacom-select" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${B==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${B==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${B==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${B==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${B==="gateway"?"selected":""}>网关</option>
            </select>
          </div>
          ${p.length>0&&!M?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${A==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${p.map(S=>`<button type="button" class="pacom-zone-pill ${A===S.id?"is-active":""}" data-filter-zone="${h(S.id)}">${h(S.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; color:var(--pacom-text-secondary);">
            <span>当前可见 ${E.length} 台设备</span>
            <span>${c?`已勾选 ${b.length} 台`:"只读模式"}</span>
          </div>
        </div>
        <div class="pacom-list">
          ${M?`<div class="pacom-alert-banner">${h(M)}</div>`:E.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">没有匹配的设备</div>':E.map(S=>{const P=S.id===L&&j,_=C.has(S.id),y=S.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline",z=S.category==="lighting"?`亮度 ${S.telemetry.dimming?.value??"--"}%`:S.category==="hvac"?`设定 ${S.telemetry.setpoint?.value??"--"}°C`:S.category==="sensor"?`${S.telemetry.temp?.value??"--"}°C · CO₂ ${S.telemetry.co2?.value??"--"}`:S.hardwareBinding?.networkAddress??"未绑定";return`
                        <div class="pacom-row ${P?"is-selected":""}" data-select-device="${h(S.id)}">
                          <div class="pacom-row-main">
                            ${c?`<input type="checkbox" data-check-device="${h(S.id)}" ${_?"checked":""} style="margin-top:3px;" aria-label="勾选 ${h(S.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title">${h(S.name)}</div>
                              <div class="pacom-row-sub">${h(X(S.logicalZoneId))} · ${h(ge[S.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${S.connectivity==="online"?"pacom-badge--online":"pacom-badge--neutral"}">
                            <span class="pacom-dot ${y}"></span>${h(z)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${c&&b.length>0?`
            <div class="pacom-batch-bar">
              <span style="font-size:12px;">显式批量目标：<strong>${b.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(F==="zones"){const E=Z(),p={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">E7F 功能区快控（${E.length}）</div>
          <div class="pacom-row-sub">点击卡片同步高亮右侧平面图热区，支持按区域一键批量控制。</div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${E.map(b=>{const S=D.filter(N=>N.logicalZoneId===b.id),P=S.filter(N=>N.connectivity==="online").length,_=S.filter(N=>N.category==="lighting"||N.category==="hvac").length,y=A===b.id,z=p[b.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${y?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${y?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${h(y?"all":b.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:14px; font-weight:500;">${h(b.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${P}/${S.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时温度 ${z.temp} · 占用 ${z.occ}</div>
                  ${_>0?`
                      <div style="display:flex; gap:6px; margin-top:2px;">
                        <button type="button" class="pacom-btn" data-zone-power="${h(b.id)}" data-zone-val="true" ${c?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" data-zone-power="${h(b.id)}" data-zone-val="false" ${c?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">该区域为弱电/网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-pane-toolbar">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-weight:500;">本层告警快览（${m.length}）</span>
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-alarms="1">前往告警中心 →</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:12px;">
        ${m.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">当前楼层无活跃告警</div>':m.map(E=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${h(E.title)}</strong>
                      <span class="pacom-badge ${E.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${E.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${h(E.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" data-locate-device="${h(E.deviceId)}">定位设备</button>
                      ${E.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" data-ack-alarm="${h(E.id)}" ${g?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function xe(){const d=u,E=D.filter(y=>y.connectivity==="online").length,p=D.length?Math.round(E/D.length*100):100,b=m.filter(y=>y.status==="active").length;if(d.level==="all-projects"||d.level==="project"){const y=d.level==="project"?l.projects.find(N=>N.id===d.projectId):l.projects[0],z=l.buildings.filter(N=>!y||N.projectId===y.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:24px; cursor:default;">
          <div style="position:relative; width:min(760px, 94%); border-radius:16px; overflow:hidden; box-shadow:0 12px 32px rgba(15,23,42,0.14); background:#fff;">
            <img src="${h(y?.imageUrl??"./media/gzlab.jpg")}" alt="园区俯瞰" style="width:100%; height:440px; object-fit:cover; display:block;" />
            ${d.level==="all-projects"?l.projects.map((N,W)=>`
                      <button type="button" class="pacom-pin is-selected" style="left:${W===0?48:26}%; top:${W===0?52:34}%;" data-nav-scope="project:${h(N.id)}">
                        <span class="pacom-dot pacom-dot--online"></span>
                        <span>${h(N.name)}</span>
                      </button>`).join(""):z.map((N,W)=>{const Q=N.id===r.buildingId;return`
                        <button type="button" class="pacom-pin ${Q?"is-selected":""}" style="left:${W===0?56:38}%; top:${W===0?44:62}%;" data-nav-scope="building:${h(N.projectId)}:${h(N.id)}">
                          <span class="pacom-dot ${Q&&b>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                          <span>${h(N.name)} · ${Q?`在线 ${p}% · 告警 ${b}`:"运行平稳"}</span>
                        </button>`}).join("")}
          </div>
        </div>
      `}if(d.level==="building"){const y=l.buildings.find(W=>W.id===d.buildingId),z=l.floors.filter(W=>W.buildingId===d.buildingId),N=z.find(W=>W.id===r.floorId)??z[0];return`
        ${z.length?`
            <nav class="pacom-floor-rail" aria-label="整栋楼层选择轨道">
              <button type="button" class="pacom-floor-btn is-active" title="整栋视图">栋</button>
              ${z.map(W=>`<button type="button" class="pacom-floor-btn ${s.scope.allowedFloorIds.includes(W.id)?"":"is-locked"}" data-nav-scope="floor:${h(d.projectId)}:${h(d.buildingId)}:${h(W.id)}" title="${h(W.name)}">${h(W.name.replace("F",""))}</button>`).join("")}
            </nav>`:""}
        <div class="pacom-canvas-tools" aria-label="画布工具">
          <button type="button" class="pacom-tool-btn" data-zoom="reset" title="复位视图" aria-label="复位视图">⟲</button>
          <div class="pacom-tool-divider" aria-hidden="true"></div>
          <button type="button" class="pacom-tool-btn" data-zoom="in" title="放大" aria-label="放大">＋</button>
          <button type="button" class="pacom-tool-btn" data-zoom="out" title="缩小" aria-label="缩小">－</button>
        </div>
        <div class="pacom-canvas-stage" data-role="canvas-stage">
          <div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${w}px, ${q}px) scale(${i});">
            <img class="pacom-plan-img" src="${h(y?.imageUrl??"./media/building-e.png")}" alt="${h(y?.name??"楼宇")} 整栋实景图" />
          </div>
        </div>
        <div class="pacom-canvas-hint" style="pointer-events:auto; display:flex; align-items:center; gap:10px;">
          <span>${h(y?.name??"楼宇")} · 在线 ${p}% · 舒适度 96.2%</span>
          ${N?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:24px; padding:0 10px; font-size:12px;" data-nav-scope="floor:${h(d.projectId)}:${h(d.buildingId)}:${h(N.id)}">进入 ${h(N.name)} 平面图 →</button>`:""}
        </div>
      `}const S=l.floors.find(y=>y.id===d.floorId),P=l.floors.filter(y=>y.buildingId===d.buildingId),_=Z();return`
      <nav class="pacom-floor-rail" aria-label="楼层选择轨道">
        <button type="button" class="pacom-floor-btn" data-nav-scope="building:${h(d.projectId)}:${h(d.buildingId)}" title="返回整栋楼宇">栋</button>
        ${P.map(y=>{const z=s.scope.allowedFloorIds.includes(y.id);return`<button type="button" class="pacom-floor-btn ${y.id===d.floorId?"is-active":""} ${z?"":"is-locked"}"
              data-nav-scope="floor:${h(d.projectId)}:${h(d.buildingId)}:${h(y.id)}" title="${h(y.name)}${z?"":"（无权限）"}">
              ${h(y.name.replace("F",""))}
            </button>`}).join("")}
      </nav>

      <div class="pacom-canvas-tools" aria-label="画布工具">
        <button type="button" class="pacom-tool-btn" data-zoom="reset" title="复位视图" aria-label="复位视图">⟲</button>
        <div class="pacom-tool-divider" aria-hidden="true"></div>
        <button type="button" class="pacom-tool-btn" data-zoom="in" title="放大" aria-label="放大">＋</button>
        <button type="button" class="pacom-tool-btn" data-zoom="out" title="缩小" aria-label="缩小">－</button>
      </div>

      ${M?"":`
        <div class="lov-layer-bar" role="group" aria-label="平面图图层切换">
          <button type="button" class="lov-layer-btn" aria-pressed="${f==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${f==="temp"}" data-canvas-layer="temp">温度热区</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${f==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${f==="alarms"}" data-canvas-layer="alarms">告警叠加${m.filter(y=>y.status==="active").length>0?` (${m.filter(y=>y.status==="active").length})`:""}</button>
        </div>`}

      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${M?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${h(M)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${w}px, ${q}px) scale(${i});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${h(S?.plan?.imageUrl??"./media/7F.webp")}" alt="E栋 ${h(S?.name??"7F")} 平面图" />
                  ${_.map((y,z)=>{const N=Ge[y.id];if(!N)return"";const W=A===y.id,Q=["23.2°C","24.6°C","22.8°C","23.9°C"],me=["有人 74%","会议中","有人 52%","空闲"],ke=f==="temp"?` · ${Q[z%Q.length]}`:f==="occupancy"?` · ${me[z%me.length]}`:"",Ee=f==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":f==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${W?"is-active":""}"
                          style="left:${N.left}%; top:${N.top}%; width:${N.width}%; height:${N.height}%; ${W?"":Ee}"
                          data-filter-zone="${h(W?"all":y.id)}"
                          title="${h(y.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${h(y.name.replace(/^7F\s*/,""))}${ke}</span>
                        </button>`}).join("")}
                  ${D.filter(y=>y.planPoint).map(y=>{const z=m.some(Q=>Q.deviceId===y.id&&Q.status==="active"),N=A!=="all"&&y.logicalZoneId!==A||f==="alarms"&&!z,W=f==="alarms"&&z?"background:var(--pacom-status-critical);":"";return`
                        <button type="button" class="pacom-pin ${y.id===L&&j?"is-selected":""} ${y.connectivity==="offline"?"pacom-pin--offline":""} ${N?"pacom-pin--dimmed":""}"
                          style="left:${(y.planPoint.x*100).toFixed(2)}%; top:${(y.planPoint.y*100).toFixed(2)}%; ${W}"
                          data-pin-device="${h(y.id)}" title="${h(y.name)}">
                          <span class="pacom-dot ${z?"pacom-dot--critical":y.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${h(He(y))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>

      ${M?"":`<div class="pacom-canvas-hint" data-role="canvas-hint">缩放 ${Math.round(i*100)}% · 滚轮缩放 · 拖动平移 · 双击复位</div>`}
      ${Ie()}
    `}function Ie(){if(u.level!=="floor"||!j)return"";const d=D.find(y=>y.id===L);if(!d)return"";const E=d.category==="lighting",p=d.category==="hvac",b=Number(d.telemetry.dimming?.value??50),S=Number(d.telemetry.setpoint?.value??24),P=v.has(d.id),_=E?[{label:"当前开关",value:b>0?"开启":"关闭"},{label:"当前亮度",value:`${b}%`},{label:"实时功率",value:b>0?`${Math.round(b*1.4)} W`:"0 W"},{label:"运行模式",value:P?"人工覆盖":"自动策略"}]:p?[{label:"室内温度",value:`${d.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${S.toFixed(1)}°C`},{label:"运行工况",value:d.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:P?"人工覆盖":"自动策略"}]:d.category==="sensor"?[{label:"实时温度",value:`${d.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${d.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${d.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:d.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:d.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:d.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:d.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:d.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${h(d.name)}</h2>
            <div class="pacom-row-sub">${h(X(d.logicalZoneId))} · ${h(ge[d.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${P?"pacom-badge--warning":"pacom-badge--neutral"}">
              ${P?"人工覆盖":"自动策略"}
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
          ${_.map(y=>`
              <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                <span class="pacom-row-sub">${y.label}</span>
                <strong style="font-size:13px; font-weight:500;">${h(y.value)}</strong>
              </div>`).join("")}
        </div>

        ${E||p?`
            <div class="pacom-control-box">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                ${P&&c?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${h(d.id)}">恢复自动策略</button>`:c?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
              </div>
              ${d.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
              ${E?`
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${c?"":"disabled"}>开灯</button>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${c?"":"disabled"}>关灯</button>
                  </div>
                  <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                    亮度目标：<strong>${b}%</strong>
                    <input type="range" min="0" max="100" step="10" value="${b}" data-ctrl-slider="lighting.dimming" ${c?"":"disabled"} />
                  </label>`:`
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${c?"":"disabled"}>开机</button>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${c?"":"disabled"}>关机</button>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span style="font-size:12px;">设定温度：</span>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${S-.5}" ${c?"":"disabled"}>-0.5°C</button>
                    <strong>${S.toFixed(1)}°C</strong>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${S+.5}" ${c?"":"disabled"}>+0.5°C</button>
                  </div>`}
            </div>`:""}

        ${I?`
            <div class="pacom-control-box">
              <div style="font-size:12px; font-weight:500;">最近批次：<code>${h(I.batchId)}</code></div>
              <div class="pacom-receipt-list">
                ${I.receipts.map(y=>{const z=Ue[y.status]??{text:y.status,badge:"pacom-badge--neutral"};return`
                      <div class="pacom-receipt-item">
                        <div>
                          <div><strong>${h(y.deviceId)}</strong> · ${h(y.command)} → ${h(y.targetValue)}</div>
                          ${y.errorMessage?`<div style="color:var(--pacom-status-critical);">${h(y.errorMessage)}</div>`:""}
                        </div>
                        <span class="pacom-badge ${z.badge}">${z.text}</span>
                      </div>`}).join("")}
              </div>
            </div>`:""}

        <details class="lov-tech-details">
          <summary><span>技术标识与硬件绑定</span><span>▾</span></summary>
          <div class="pacom-kv-grid">
            <span class="pacom-kv-label">设备编号</span><span><code>${h(d.id)}</code> · v${d.version}</span>
            <span class="pacom-kv-label">图上点位</span><span>${d.planPoint?`x=${d.planPoint.x.toFixed(2)}, y=${d.planPoint.y.toFixed(2)} (图 v${d.planPoint.planVersion})`:"未标点"}</span>
            <span class="pacom-kv-label">物理安装</span><span>${d.physicalInstalled?"现场已确认":"待现场复核"}</span>
            <span class="pacom-kv-label">硬件绑定</span><span>${d.hardwareBinding?`${d.hardwareBinding.protocol.toUpperCase()} · ${d.hardwareBinding.networkAddress}`:"未绑定"}</span>
          </div>
        </details>
      </aside>
    `}function ve(d){if(d==="all")return{level:"all-projects"};const E=d.split(":");return E[0]==="project"&&E[1]?{level:"project",projectId:E[1]}:E[0]==="building"&&E[1]&&E[2]?{level:"building",projectId:E[1],buildingId:E[2]}:E[0]==="floor"&&E[1]&&E[2]&&E[3]?{level:"floor",projectId:E[1],buildingId:E[2],floorId:E[3]}:{level:"all-projects"}}function K(){const d=m.filter(S=>S.status==="active").length,E=D.filter(S=>S.connectivity==="online").length,p=J(),b=D.find(S=>S.category==="sensor")?.telemetry.temp?.value??"23.4";t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:10px; min-width:0; flex:1;">
              <h1 class="pacom-title" style="flex-shrink:0;">空间总览</h1>
              ${p?`<button type="button" class="lov-icon-btn" data-nav-scope="${h(p)}" title="返回上一空间层级" aria-label="返回上一空间层级">←</button>`:""}
              <div class="pacom-scope-pill" style="width:min(268px, 32vw); flex-shrink:1;" title="项目 / 楼宇 / 楼层空间范围切换">
                <select name="homeScope" data-role="scope-select" aria-label="选择查看范围">
                  ${te()}
                </select>
                <span class="pacom-scope-chevron">▾</span>
              </div>
              ${u.level==="floor"?`
                  <div class="pacom-tabs" role="tablist" style="flex-shrink:0;">
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${F==="devices"}" data-tab="devices">设备</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${F==="zones"}" data-tab="zones">区域</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${F==="alarms"}" data-tab="alarms">
                      告警 ${d>0?`<span class="pacom-badge pacom-badge--warning">${d}</span>`:""}
                    </button>
                  </div>`:""}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${u.level==="floor"&&!M?`<span class="pacom-badge pacom-badge--online">在线 ${E}/${D.length} · ${h(b)}°C</span>`:o?'<span class="pacom-badge pacom-badge--neutral"><span class="pacom-dot pacom-dot--offline"></span>演示模式</span>':'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>'}
              <div class="pacom-tabs pacom-mobile-view-switch" role="group" aria-label="窄屏视图切换">
                <button type="button" class="pacom-tab" aria-selected="${x==="list"}" data-mobile-pane-btn="list">列表</button>
                <button type="button" class="pacom-tab" aria-selected="${x==="canvas"}" data-mobile-pane-btn="canvas">平面图</button>
              </div>
            </div>
          </div>
        </header>

        <section class="pacom-split" data-mobile-pane="${x}">
          <aside class="pacom-left-pane" style="--pacom-sidebar-width:${O}px;">
            ${ne()}
          </aside>
          <div class="pacom-splitter" role="separator" tabindex="0" aria-orientation="vertical" aria-label="调整左右栏宽度" data-role="splitter"></div>
          <main class="pacom-right-pane">
            ${xe()}
          </main>
        </section>
      </div>
    `,Se()}function Se(){t.querySelector('[data-role="scope-select"]')?.addEventListener("change",p=>{Y(ve(p.currentTarget.value))}),t.querySelectorAll("[data-nav-scope]").forEach(p=>{p.addEventListener("click",()=>{p.dataset.navScope&&Y(ve(p.dataset.navScope))})}),t.querySelectorAll("[data-tab]").forEach(p=>{p.addEventListener("click",()=>{F=p.dataset.tab,K()})}),t.querySelectorAll("[data-mobile-pane-btn]").forEach(p=>{p.addEventListener("click",()=>{x=p.dataset.mobilePaneBtn,K()})}),t.querySelector('[data-role="search"]')?.addEventListener("input",p=>{k=p.currentTarget.value,T()}),t.querySelector('[data-role="category"]')?.addEventListener("change",p=>{B=p.currentTarget.value,K()}),t.querySelectorAll("[data-filter-zone]").forEach(p=>{p.addEventListener("click",b=>{b.stopPropagation(),A=p.dataset.filterZone??"all",K()})}),t.querySelectorAll("[data-select-device]").forEach(p=>{p.addEventListener("click",b=>{b.target.tagName!=="INPUT"&&(L=p.dataset.selectDevice??null,j=!0,x="canvas",K())})}),t.querySelectorAll("[data-check-device]").forEach(p=>{p.addEventListener("change",()=>{const b=p.dataset.checkDevice;b&&(p.checked?C.add(b):C.delete(b),K())})}),t.querySelectorAll("[data-pin-device]").forEach(p=>{p.addEventListener("click",b=>{b.stopPropagation(),L=p.dataset.pinDevice??null,j=!0,K()})}),t.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{j=!1,K()}),t.querySelector("[data-release-override]")?.addEventListener("click",p=>{const b=p.currentTarget.dataset.releaseOverride;b&&(v.delete(b),K())}),t.querySelectorAll("[data-zone-power]").forEach(p=>{p.addEventListener("click",b=>{b.stopPropagation();const S=p.dataset.zonePower,P=p.dataset.zoneVal==="true";if(!S)return;const _=D.filter(z=>z.logicalZoneId===S&&z.category==="lighting").map(z=>z.id),y=D.filter(z=>z.logicalZoneId===S&&z.category==="hvac").map(z=>z.id);_.length?n(_,"lighting.power",P):y.length&&n(y,"hvac.power",P)})}),t.querySelectorAll("[data-locate-device]").forEach(p=>{p.addEventListener("click",()=>{const b=p.dataset.locateDevice;b&&(L=b,j=!0,x="canvas",K())})}),t.querySelector("[data-go-alarms]")?.addEventListener("click",()=>{window.location.hash="#alarms"}),t.querySelectorAll("[data-ctrl-cmd]").forEach(p=>{p.addEventListener("click",()=>{if(!L||!p.dataset.ctrlCmd)return;const b=p.dataset.ctrlVal??"",S=b==="true"?!0:b==="false"?!1:Number(b);n([L],p.dataset.ctrlCmd,S)})}),t.querySelector("[data-ctrl-slider]")?.addEventListener("change",p=>{const b=p.currentTarget;!L||!b.dataset.ctrlSlider||n([L],b.dataset.ctrlSlider,Number(b.value))}),t.querySelectorAll("[data-batch-cmd]").forEach(p=>{p.addEventListener("click",()=>{const b=Array.from(C),S=p.dataset.batchVal??"",P=S==="true"?!0:S==="false"?!1:S;n(b,p.dataset.batchCmd,P)})}),t.querySelectorAll("[data-ack-alarm]").forEach(p=>{p.addEventListener("click",async()=>{!p.dataset.ackAlarm||u.level!=="floor"||!g||(await e.acknowledgeAlarm(p.dataset.ackAlarm,"首页快速确认"),m=await e.listAlarms(u.floorId),K())})}),t.querySelectorAll("[data-canvas-layer]").forEach(p=>{p.addEventListener("click",()=>{const b=p.dataset.canvasLayer;b&&(f=b,K())})}),t.querySelectorAll("[data-zoom]").forEach(p=>{p.addEventListener("click",()=>{const b=p.dataset.zoom;b==="in"?i=Math.min(2.6,Number((i+.2).toFixed(2))):b==="out"?i=Math.max(.6,Number((i-.2).toFixed(2))):(i=1,w=0,q=0),H()})});const d=t.querySelector('[data-role="canvas-stage"]');if(d&&!M){let p=!1,b=0,S=0,P=0,_=0;d.addEventListener("pointerdown",z=>{z.target?.closest("button, input, select, .pacom-drawer")||(p=!0,b=z.clientX,S=z.clientY,P=w,_=q,d.classList.add("is-panning"),d.setPointerCapture?.(z.pointerId))}),d.addEventListener("pointermove",z=>{p&&(w=P+(z.clientX-b),q=_+(z.clientY-S),H())});const y=()=>{p&&(p=!1,d.classList.remove("is-panning"))};d.addEventListener("pointerup",y),d.addEventListener("pointercancel",y),d.addEventListener("wheel",z=>{z.preventDefault();const N=z.deltaY<0?.12:-.12;i=Math.max(.6,Math.min(2.6,Number((i+N).toFixed(2)))),H()},{passive:!1}),d.addEventListener("dblclick",z=>{z.target?.closest("button")||(i=1,w=0,q=0,H())})}const E=t.querySelector('[data-role="splitter"]');E?.addEventListener("pointerdown",p=>{const b=p.clientX,S=O;E.classList.add("is-dragging");const P=y=>{O=Math.max(320,Math.min(640,S+(y.clientX-b)));const z=t.querySelector(".pacom-left-pane");z&&z.style.setProperty("--pacom-sidebar-width",`${O}px`)},_=()=>{E.classList.remove("is-dragging"),localStorage.setItem(de,String(Math.round(O))),window.removeEventListener("pointermove",P),window.removeEventListener("pointerup",_)};window.addEventListener("pointermove",P),window.addEventListener("pointerup",_)}),E?.addEventListener("keydown",p=>{if(p.key==="ArrowLeft")p.preventDefault(),O=Math.max(320,O-16);else if(p.key==="ArrowRight")p.preventDefault(),O=Math.min(640,O+16);else if(p.key==="Home")p.preventDefault(),O=320;else if(p.key==="End")p.preventDefault(),O=640;else return;localStorage.setItem(de,String(Math.round(O)));const b=t.querySelector(".pacom-left-pane");b&&b.style.setProperty("--pacom-sidebar-width",`${O}px`)})}await Y(u)}const Xe=new Set(["lighting","hvac","alarm_rules"]),be={lighting:"照明",hvac:"暖通",alarm_rules:"告警"},oe=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function Qe(t){const e=new Set;for(const s of t.actions)s.command.startsWith("lighting")?e.add("照明"):s.command.startsWith("hvac")?e.add("暖通"):e.add("综合");return Array.from(e)}function Je(t,e,s){const l=s?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
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
  `}async function et(t,e,s){let[l,o]=await Promise.all([e.listScenes(r.floorId),e.getRuntimeSettings(r.projectId)]),c="manual",g="balanced",$="all",u=null,F="",x=!1,k="",B="";const A=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${o.calendar.workdayStart} – ${o.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${o.calendar.nightGuardStart} – 次日 ${o.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],L=e.subscribeFloorEvents(r.floorId,async f=>{f.type==="control.receipt.updated"&&u?.batchId===f.batchId&&(u=await e.getControlBatch(f.batchId),j())});function j(){const f=F.trim().toLowerCase(),v=f?l.filter(i=>`${i.name} ${i.description}`.toLowerCase().includes(f)):l,C=o.rules.filter(i=>Xe.has(i.category)),D=$==="all"?C:C.filter(i=>i.category===$),m=oe.find(i=>i.id===g)??oe[1],R=s.scope.canControlDevices,I=s.scope.canEditDeployment;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">智能策略</h1>
              <div class="pacom-tabs" role="tablist" aria-label="智能策略分类">
                <button class="pacom-tab" role="tab" aria-selected="${c==="manual"}" data-scene-tab="manual">快捷场景（${l.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${c==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
                <button class="pacom-tab" role="tab" aria-selected="${c==="rules"}" data-scene-tab="rules">条件联动（${C.length}）</button>
              </div>
            </div>

            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral" title="安全执行优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能（现场手动操作始终优先）">人工覆盖优先</span>
              <span class="pacom-badge ${R?"pacom-badge--online":"pacom-badge--warning"}">
                ${R?"可执行并核验回执":"只读权限"}
              </span>
              ${c==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${x?"收起新建表单":"+ 新建场景"}</button>`:""}
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${k?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${k}</span></div>`:""}
          ${B?`<div class="pacom-alert-banner">${B}</div>`:""}

          ${c==="manual"?`
              ${u?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="lov-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${u.batchId}</span>
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
                            ${u.receipts.map(i=>`
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

              ${x?`
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
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${F}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${v.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${v.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="lov-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':v.map(i=>{const w=Qe(i);return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${i.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${w.map(q=>`<span class="pacom-badge pacom-badge--accent">${q}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${i.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${i.description}</p>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${i.lastExecutedAt?i.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${i.id}" ${R?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:c==="schedule_oss"?`
                <div class="lov-kpi-strip" role="region" aria-label="优化启停运行状态">
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">当前优化启停模式</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${m.title}</div>
                    <span class="lov-kpi-delta">${m.estSaving}</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">明日预测预启动时刻</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${m.predictedStart}</div>
                    <span class="lov-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">本周累计节省运行工时</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${m.savedHours}</div>
                    <span class="lov-kpi-delta">异常通信时自动回退本地默认工况</span>
                  </div>
                </div>

                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="lov-mode-grid">
                    ${oe.map(i=>`
                      <button type="button" class="lov-mode-card" aria-pressed="${g===i.id}" data-oss-mode="${i.id}" ${R?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${i.title}</strong>
                          <span class="pacom-badge ${g===i.id?"pacom-badge--online":"pacom-badge--neutral"}">${g===i.id?"当前生效":i.badge}</span>
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
                          ${A.map(i=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${i.name}</span>
                                    ${i.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${i.windowLabel}</div>
                                </td>
                                <td>${Je(i.startHour,i.endHour,i.enabled)}</td>
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
                                      ${R?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules"].map(i=>{const w=i==="all"?"全部":be[i]??i,q=i==="all"?C.length:C.filter(O=>O.category===i).length;return`
                            <button type="button" class="lov-count-pill" aria-pressed="${$===i}" data-rule-cat="${i}">
                              <span>${w}</span><span class="lov-count-num">${q}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="lov-settings-card">
                    ${D.length===0?'<div class="lov-empty-state"><strong>该分类下暂无条件联动规则</strong><span>可切换上方分类胶囊查看全部规则。</span></div>':D.map(i=>`
                              <div class="lov-setting-row">
                                <div class="lov-setting-meta">
                                  <span class="lov-setting-title">
                                    <span class="pacom-badge pacom-badge--accent">${be[i.category]??i.category}</span>
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
    `,t.querySelectorAll("[data-scene-tab]").forEach(i=>{i.addEventListener("click",()=>{c=i.dataset.sceneTab??"manual",k="",j()})}),t.querySelector("[data-close-batch]")?.addEventListener("click",()=>{u=null,j()}),t.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),t.querySelectorAll("[data-oss-mode]").forEach(i=>{i.addEventListener("click",()=>{const w=i.dataset.ossMode;if(!w)return;g=w;const q=oe.find(O=>O.id===w);k=`已切换至「${q?.title??w}」模式（明日预测启动 ${q?.predictedStart??""}）。`,j()})}),t.querySelectorAll("[data-toggle-schedule]").forEach(i=>{i.addEventListener("click",()=>{const w=i.dataset.toggleSchedule,q=A.find(O=>O.id===w);q&&(q.enabled=!q.enabled,k=`排程「${q.name}」已${q.enabled?"恢复启用":"临时暂停"}。`,j())})}),t.querySelectorAll("[data-rule-cat]").forEach(i=>{i.addEventListener("click",()=>{$=i.dataset.ruleCat??"all",j()})}),t.querySelectorAll("[data-toggle-strategy-rule]").forEach(i=>{i.addEventListener("click",async()=>{B="";try{await e.toggleRuntimeRule(i.dataset.toggleStrategyRule,i.dataset.ruleNext==="true",Number(i.dataset.ruleVer)),o=await e.getRuntimeSettings(r.projectId),k="条件联动规则状态与版本回执已更新。",j()}catch(w){B=w instanceof Error?w.message:String(w),j()}})}),t.querySelectorAll("[data-toggle-create]").forEach(i=>{i.addEventListener("click",()=>{x=!x,j()})}),t.querySelector("[data-scene-search]")?.addEventListener("input",i=>{const w=i.currentTarget,q=w.selectionStart??w.value.length;F=w.value,j();const O=t.querySelector("[data-scene-search]");O&&(O.focus(),O.setSelectionRange(q,q))}),t.querySelectorAll("[data-exec-scene]").forEach(i=>{i.addEventListener("click",async()=>{B="";try{u=await e.executeScene(i.dataset.execScene),l=await e.listScenes(r.floorId),j()}catch(w){B=w instanceof Error?w.message:String(w),j()}})}),t.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async i=>{i.preventDefault();const w=new FormData(i.currentTarget);try{await e.createScene({projectId:r.projectId,floorId:r.floorId,name:String(w.get("name")??""),description:String(w.get("description")??""),actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:50}]}),l=await e.listScenes(r.floorId),x=!1,k="快捷场景已保存。",j()}catch(q){B=q instanceof Error?q.message:String(q),j()}})}j(),window.addEventListener("hashchange",()=>L(),{once:!0})}function pe(t,e){return t.length===0?'<div class="lov-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':t.map(s=>`
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
      </div>`).join("")}async function tt(t,e,s){let l="calendar",o=await e.getRuntimeSettings(r.projectId),c=o.calendar.workdayStart,g=o.calendar.workdayEnd,$=!0,u=[];const F={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",carbonFactor:"0.5271"},x={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},k={criticalSms:!0,inAppBanner:!0,dailyDigest:!1,quietHours:!0};let B="major",A="",L="";function j(){const f=s.scope.canEditDeployment,v=o.rules.filter(m=>m.category==="weather_area"),C=o.rules.filter(m=>m.category==="metering_carbon"),D=o.rules.filter(m=>m.category==="templates");t.innerHTML=`
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
              <span class="pacom-badge ${f?"pacom-badge--online":"pacom-badge--warning"}">
                ${f?"可修改并下发配置":"当前角色只读"}
              </span>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:8px 6px 32px;">
          <div style="width:100%; max-width:920px; margin:0 auto; display:flex; flex-direction:column; gap:20px;">
            ${A?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${A}</span></div>`:""}
            ${L?`<div class="pacom-alert-banner">${L}</div>`:""}

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
                        <input class="pacom-input" style="width:140px;" type="time" data-cal-start value="${c}" aria-label="工作日上班时间" ${f?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">工作日下班时间</span>
                        <span class="lov-setting-desc">若晚于 21:30 将自动提示与夜间值守巡检窗口的交叠冲突</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:140px;" type="time" data-cal-end value="${g}" aria-label="工作日下班时间" ${f?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row" style="justify-content:flex-end;">
                      <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                      <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${f?"":"disabled"}>保存并校验版本</button>
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
                        <span class="pacom-row-sub">${$?"已开启":"已关闭"}</span>
                        <button type="button" class="lov-switch" role="switch" aria-checked="${$}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${f?"":"disabled"}>
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

                ${u.length>0?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">受影响的定时与夜间规则预览</h2>
                        <span class="pacom-row-sub">共 ${u.length} 条</span>
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
                              ${u.map(m=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${m.ruleName}</div>
                                      ${m.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${m.conflictWarning}</div>`:""}
                                    </td>
                                    <td>${m.beforeWindow}</td>
                                    <td><strong>${m.afterWindow}</strong></td>
                                    <td>
                                      <span class="pacom-badge ${m.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                        ${m.conflictWarning?"交叠警告":"自动跟随"}
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
                          <select class="pacom-select" data-energy-field="weatherSource" aria-label="室外气象数据源" ${f?"":"disabled"}>
                            <option value="guanzhou_station" ${F.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                            <option value="campus_sensor" ${F.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                          </select>
                        </div>
                      </div>
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">E 栋计费与能效面积（m²）</span>
                          <span class="lov-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                        </div>
                        <div class="lov-setting-control">
                          <input class="pacom-input" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${F.billingArea}" aria-label="计费面积" ${f?"":"disabled"} />
                        </div>
                      </div>
                      ${pe(v,f)}
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
                          <input class="pacom-input" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${F.tariffYuan}" aria-label="综合电价" ${f?"":"disabled"} />
                        </div>
                      </div>
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">区域电网碳排放因子</span>
                          <span class="lov-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                        </div>
                        <div class="lov-setting-control">
                          <select class="pacom-select" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${f?"":"disabled"}>
                            <option value="0.5271" ${F.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                            <option value="0.5703" ${F.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                          </select>
                        </div>
                      </div>
                      ${pe(C,f)}
                      <div class="lov-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${f?"":"disabled"}>保存口径参数</button>
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
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="minTemp" value="${x.minTemp}" aria-label="最低设定温度" ${f?"":"disabled"} />
                            <span class="pacom-row-sub">至</span>
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="maxTemp" value="${x.maxTemp}" aria-label="最高设定温度" ${f?"":"disabled"} />
                            <span class="pacom-row-sub">°C</span>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">人工覆盖自动释放时长</span>
                            <span class="lov-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                          </div>
                          <div class="lov-setting-control">
                            <select class="pacom-select" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${f?"":"disabled"}>
                              <option value="2h" ${x.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                              <option value="4h" ${x.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                              <option value="eod" ${x.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                              <option value="permanent" ${x.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                            </select>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">控制指令回读超时阈值（秒）</span>
                            <span class="lov-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                          </div>
                          <div class="lov-setting-control">
                            <input class="pacom-input" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${x.readbackTimeoutSec}" aria-label="回读超时阈值" ${f?"":"disabled"} />
                            <span class="pacom-row-sub">秒</span>
                          </div>
                        </div>
                        <div class="lov-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${f?"":"disabled"}>保存安全边界</button>
                        </div>
                      </div>
                    </section>

                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">标准设备参数模板</h2>
                        <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                      </div>
                      <div class="lov-settings-card">
                        ${pe(D,f)}
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
                              <option value="critical" ${B==="critical"?"selected":""}>仅严重告警</option>
                              <option value="major" ${B==="major"?"selected":""}>严重与重要（推荐）</option>
                              <option value="all" ${B==="all"?"selected":""}>全部告警</option>
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
    `,t.querySelectorAll("[data-stab]").forEach(m=>{m.addEventListener("click",()=>{l=m.dataset.stab??"calendar",A="",L="",j()})}),t.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{$=!$,A=`法定节假日自动跳过已${$?"开启":"关闭"}。`,j()}),t.querySelectorAll("[data-energy-field]").forEach(m=>{m.addEventListener("change",()=>{const R=m.dataset.energyField;R&&(F[R]=m.value)})}),t.querySelector("[data-save-energy]")?.addEventListener("click",()=>{A=`能碳与气象口径已保存（面积 ${F.billingArea} m² · 电价 ¥${F.tariffYuan}/kWh · 因子 ${F.carbonFactor}）。`,j()}),t.querySelectorAll("[data-guard-field]").forEach(m=>{m.addEventListener("change",()=>{const R=m.dataset.guardField;R&&(x[R]=m.value)})}),t.querySelector("[data-save-guard]")?.addEventListener("click",()=>{A=`控制安全边界已保存（温区 ${x.minTemp}–${x.maxTemp}°C · 超时 ${x.readbackTimeoutSec}s）。`,j()}),t.querySelectorAll("[data-notify-key]").forEach(m=>{m.addEventListener("click",()=>{const R=m.dataset.notifyKey;R&&(k[R]=!k[R],A="通知策略偏好已更新。",j())})}),t.querySelector("[data-notify-severity]")?.addEventListener("change",m=>{B=m.currentTarget.value??"major",A="推送级别门槛已更新。",j()}),t.querySelector("[data-cal-start]")?.addEventListener("change",m=>{c=m.currentTarget.value}),t.querySelector("[data-cal-end]")?.addEventListener("change",m=>{g=m.currentTarget.value}),t.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{L="",u=await e.previewCalendarImpact(r.projectId,c,g),j()}),t.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{L="";try{const m=await e.saveWorkCalendar(r.projectId,c,g,o.calendar.version);o={...o,calendar:m},A=`运行日历已保存至 v${m.version}（${m.workdayStart} – ${m.workdayEnd}）`,u=[],j()}catch(m){L=m instanceof Error?m.message:String(m),j()}}),t.querySelectorAll("[data-toggle-rule]").forEach(m=>{m.addEventListener("click",async()=>{L="";try{await e.toggleRuntimeRule(m.dataset.toggleRule,m.dataset.ruleNext==="true",Number(m.dataset.ruleVer)),o=await e.getRuntimeSettings(r.projectId),A="策略状态与版本回执已更新。",j()}catch(R){L=R instanceof Error?R.message:String(R),j()}})})}j()}const he="pacom.web.sidebar.collapsed",at=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,fe=[{id:"home",label:"空间总览",iconSvg:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/>'},{id:"analysis",label:"数据分析",iconSvg:'<path d="M4 19h16"/><path d="M7 16v-5"/><path d="M12 16V7"/><path d="M17 16v-8"/>'},{id:"alarms",label:"告警中心",iconSvg:'<path d="M12 4 3 19h18L12 4Z"/><path d="M12 10v4"/><path d="M12 17h.01"/>'},{id:"scenes",label:"智能策略",iconSvg:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3"/>'},{id:"settings",label:"运行设置",iconSvg:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2.5"/><circle cx="15" cy="17" r="2.5"/>'},{id:"deployment",label:"系统部署",iconSvg:'<rect x="3" y="4" width="7" height="6" rx="1.5"/><rect x="14" y="4" width="7" height="6" rx="1.5"/><rect x="8.5" y="14" width="7" height="6" rx="1.5"/><path d="M6.5 10v2h11v-2M12 12v2"/>'}],ue={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"运行设置",deployment:"系统部署",account:"机构与账户"};function ye(){const t=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return t in ue?t:"home"}function ee(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function st(t,e,s,l){t.classList.remove("bare-login");let o=s,c=ye(),g=localStorage.getItem(he)==="1",$=!1,u=!1,F="";const x=e.mode==="demo"&&typeof e.switchDemoRole=="function";function k(){const i=F.trim(),w=i?fe.filter(q=>q.label.includes(i)):fe;return w.length?w.map(q=>`
        ${!i&&q.id==="settings"?'<div class="pacom-nav-divider" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${q.id}" aria-current="${c===q.id?"page":"false"}" title="${q.label}">
          <svg class="pacom-nav-icon" viewBox="0 0 24 24" aria-hidden="true">${q.iconSvg}</svg>
          <span class="pacom-nav-label">${q.label}</span>
        </button>`).join(""):'<div class="pacom-nav-empty">没有匹配的工作区</div>'}function B(){if(!u)return"";const i=o.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${g?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab.jpg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${ee(o.roleLabel)}${x?" · 演示":""}</small>
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
          <span class="pacom-pop-avatar" aria-hidden="true">${ee(i)}</span>
          <span class="pacom-pop-text">
            <b>${ee(o.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${x?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">演示角色切换（RBAC 权限预览）</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(G).map(w=>{const q=G[w],O=w===o.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${O}" data-pop-role="${w}">
                      <span class="pacom-pop-text">
                        <b>${ee(q.roleLabel)}</b>
                        <small>${ee(q.displayName)}</small>
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
    `}async function A(i){switch(document.title=`${ue[c]} · PACOM Station`,c){case"home":await Ke(i,e,o);return;case"analysis":await Pe(i,e);return;case"alarms":await Te(i,e,o);return;case"scenes":await et(i,e,o);return;case"settings":await tt(i,e,o);return;case"deployment":await Ze(i,e,o);return;case"account":await je(i,e,o,w=>{o=w,D(!0)},L);return}}async function L(){u=!1,$=!1,M();try{await e.logout()}finally{window.location.hash="#login",l()}}function j(){const i=t.querySelector('[data-role="nav-list"]');i&&(i.innerHTML=k(),v())}function f(){t.querySelector('[data-role="org-popover"]')?.remove();const i=t.querySelector('[data-role="org-menu-btn"]');if(i&&i.setAttribute("aria-expanded",String(u)),!u)return;const w=document.createElement("div");w.innerHTML=B().trim();const q=w.firstElementChild;q&&(t.appendChild(q),C())}function v(){t.querySelectorAll("[data-route]").forEach(i=>{i.addEventListener("click",()=>{const w=i.dataset.route;w===c&&!$||(c=w,$=!1,u=!1,window.location.hash=`#${c}`,D(!0))})})}function C(){t.querySelectorAll('[data-pop-act="go-account"]').forEach(i=>{i.addEventListener("click",()=>{u=!1,$=!1,c="account",window.location.hash="#account",D(!0)})}),t.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{L()}),t.querySelectorAll("[data-pop-role]").forEach(i=>{i.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const w=i.dataset.popRole;u=!1,$=!1,o=await e.switchDemoRole(w),await D(!0)})})}async function D(i){const w=t.querySelector('[data-role="main-stage"]');if(!i&&w){const O=t.querySelector(".pacom-nav-rail");O&&(O.classList.toggle("is-collapsed",g),O.classList.toggle("is-mobile-open",$));const V=t.querySelector('[data-role="mobile-scrim"]');V&&V.classList.toggle("is-open",$),f();return}t.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
          <h1 class="pacom-mobile-title">${ue[c]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${ee(o.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${$?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${g?"is-collapsed":""} ${$?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${at}</div>
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
            <input class="pacom-nav-search" name="navSearch" data-role="nav-search" type="search" placeholder="搜索工作区…" value="${ee(F)}" aria-label="搜索工作区" />
          </div>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${k()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${c==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${u}" title="广州国家实验室 · ${ee(o.displayName)}">
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
    `,t.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{g=!g,u=!1,localStorage.setItem(he,g?"1":"0");const O=t.querySelector(".pacom-nav-rail"),V=t.querySelector('[data-role="toggle-sidebar"]');O&&O.classList.toggle("is-collapsed",g),V&&(V.title=g?"展开侧栏":"收起侧栏",V.setAttribute("aria-label",V.title),V.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${g?'<path d="m9 6 6 6-6 6"/>':'<path d="m15 6-6 6 6 6"/>'}</svg>`),f()}),t.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{$=!$,D(!1)}),t.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{$=!1,u=!1,D(!1)}),t.querySelector('[data-role="nav-search"]')?.addEventListener("input",O=>{F=O.currentTarget.value,j()}),t.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",O=>{O.stopPropagation(),u=!u,f()}),v(),f();const q=t.querySelector('[data-role="main-stage"]');q&&await A(q)}const m=i=>{if(!u)return;const w=i.target;w?.closest('[data-role="org-popover"]')||w?.closest('[data-role="org-menu-btn"]')||(u=!1,f())},R=i=>{i.key==="Escape"&&(u?(u=!1,f()):$&&($=!1,D(!1)))},I=()=>{const i=ye();i!==c&&(c=i,u=!1,$=!1,D(!0))};function M(){document.removeEventListener("click",m),document.removeEventListener("keydown",R),window.removeEventListener("hashchange",I)}document.addEventListener("click",m),document.addEventListener("keydown",R),window.addEventListener("hashchange",I),await D(!0)}const lt=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,ot='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',nt='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',ae='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>',$e={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},it={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function ct(t){const e=t.replace(/\D/g,"");return e.length===11?`${e.slice(0,3)} •••• ${e.slice(7)}`:t}function U(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function we(t,e,s){t.classList.add("bare-login"),document.title="登录 · PACOM Station";let l=!1,o=!1,c="",g="",$="",u="",F=!1,x={},k="",B=!1,A="",L=0,j=null,f=null,v="privacy",C="",D="",m="";const R=e.mode==="demo"&&typeof e.switchDemoRole=="function";function I(){j!==null&&(window.clearInterval(j),j=null),t.classList.remove("bare-login")}function M(){L=60,j!==null&&window.clearInterval(j),j=window.setInterval(()=>{L-=1,L<=0&&(L=0,j!==null&&(window.clearInterval(j),j=null));const O=t.querySelector('[data-act="send-sms"]');O&&(O.disabled=L>0,O.textContent=L>0?`${L} 秒后重发`:A?"重新获取":"获取验证码")},1e3)}function i(){if(!f)return"";if(f==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${ae}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${U(D)}" />
                  </div>
                </div>
                ${m?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${U(m)}</p>`:""}
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary">发送验证码</button>
            </div>
          </section>
        </div>
      `;if(f==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${ae}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                ${R?"当前为离线演示环境，您可直接通过登录页的「演示角色快速体验」切换 5 类内置角色进入 E7F 工作区。":"正式接入账户服务后，将在此开放自助注册与机构邀请码加入流程。"}
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
              ${R?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">选择演示角色</button>':""}
            </div>
          </section>
        </div>
      `;if(f==="legal"){const O=$e[v],V=["privacy","terms","service"].map(Z=>`<button type="button" role="tab" aria-selected="${v===Z}" class="au-legal-tab ${v===Z?"is-active":""}" data-act="switch-legal" data-tab="${Z}">${$e[Z].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${ae}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${V}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${O.items.map(Z=>`<li>${U(Z)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return f==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${ae}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${C||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:f==="demoRoles"&&R?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择演示角色</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${ae}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(G).map(O=>{const V=G[O];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${O}">
                        <div>
                          <b>${U(V.roleLabel)} · ${U(V.displayName)}</b>
                          <small>${U(it[O])}</small>
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
      `:""}function w(){const O=l?`
        <div class="au-field ${x.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${U($)}" aria-invalid="${x.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${L>0?"disabled":""}>
              ${L>0?`${L} 秒后重发`:A?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${U(x.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${A?`验证码已发送至 ${U(ct(A))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${x.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${U(c)}" aria-invalid="${x.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${U(x.id??"")}</p>
        </div>
      `,V=l?`
        <div class="au-field ${x.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${U(u)}" aria-invalid="${x.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${U(x.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${x.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${o?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${U(g)}" aria-invalid="${x.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${o?"隐藏密码":"显示密码"}">
              ${o?nt:ot}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${U(x.pwd??"")}</p>
        </div>
      `;t.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${lt}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${B?"disabled":""}>
                  ${O}
                  ${V}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${k?"":"hidden"}>${U(k)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${F?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${B?"disabled":""}>
                    ${B?"正在登录…":"登录"}
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
                ${R?`<div class="au-demo-bar">
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
    `,q()}function q(){const O=t.querySelector("#au-id"),V=t.querySelector("#au-pwd"),Z=t.querySelector("#au-sphone"),Y=t.querySelector("#au-scode"),X=t.querySelector('input[name="keep"]');O?.addEventListener("input",()=>{if(c=O.value,x.id||k){delete x.id,k="",O.closest(".au-field")?.classList.remove("bad");const a=t.querySelector("#au-id-err");a&&(a.textContent="");const n=t.querySelector("#au-login-ferr");n&&(n.hidden=!0)}}),V?.addEventListener("input",()=>{if(g=V.value,x.pwd||k){delete x.pwd,k="",V.closest(".au-field")?.classList.remove("bad");const a=t.querySelector("#au-pwd-err");a&&(a.textContent="");const n=t.querySelector("#au-login-ferr");n&&(n.hidden=!0)}}),Z?.addEventListener("input",()=>{if($=Z.value,x.sphone||k){delete x.sphone,k="",Z.closest(".au-field")?.classList.remove("bad");const a=t.querySelector("#au-sphone-err");a&&(a.textContent="");const n=t.querySelector("#au-login-ferr");n&&(n.hidden=!0)}}),Y?.addEventListener("input",()=>{if(u=Y.value.replace(/\D/g,"").slice(0,6),Y.value=u,x.scode||k){delete x.scode,k="",Y.closest(".au-field")?.classList.remove("bad");const a=t.querySelector("#au-scode-err");a&&(a.textContent="");const n=t.querySelector("#au-login-ferr");n&&(n.hidden=!0)}}),X?.addEventListener("change",()=>{F=X.checked}),t.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{o=!o,w(),t.querySelector("#au-pwd")?.focus()}),t.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{l=!l,x={},k="",w(),t.querySelector(l?"#au-sphone":"#au-id")?.focus()}),t.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const a=$.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(a)){x={sphone:"请输入有效的手机号码"},w(),t.querySelector("#au-sphone")?.focus();return}x={},A=a,M(),w(),t.querySelector("#au-scode")?.focus()}),t.querySelector('form[data-form="login"]')?.addEventListener("submit",async a=>{if(a.preventDefault(),!B){if(x={},k="",l?($.trim()||(x.sphone="请输入手机号码"),/^\d{6}$/.test(u.trim())||(x.scode="请输入 6 位验证码")):(c.trim()||(x.id="请输入电子邮箱或手机号码"),g||(x.pwd="请输入密码")),Object.keys(x).length>0){w();const n=Object.keys(x)[0];t.querySelector(`#au-${n}`)?.focus();return}B=!0,w();try{const n=await e.login({account:(l?$:c).trim(),password:l?u.trim():g});I(),s(n)}catch(n){B=!1,k=n instanceof Error?n.message:"账户或密码不正确",w()}}}),t.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{D=c.trim(),m="",f="reset",w(),t.querySelector("#au-rs-id")?.focus()}),t.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{f="register",w()}),t.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{f="legal",w()}),t.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{C="",f="contact",w()}),t.querySelectorAll('[data-act="open-demo-roles"]').forEach(a=>{a.addEventListener("click",()=>{f="demoRoles",w()})}),t.querySelectorAll('[data-act="close-modal"]').forEach(a=>{a.addEventListener("click",()=>{f=null,w()})}),t.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",a=>{a.target===a.currentTarget&&(f=null,w())}),t.querySelectorAll('[data-act="switch-legal"]').forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.tab;n&&(v=n,w())})}),t.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),C="已复制"}catch{C="support@pacom.cn"}w()}),t.querySelector("#au-reset-form")?.addEventListener("submit",a=>{a.preventDefault(),D=t.querySelector("#au-rs-id")?.value.trim()??"",D?R?m="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":m="如账户存在，验证码已发送。":m="请输入电子邮箱或手机号码",w()}),t.querySelectorAll('[data-act="pick-demo-role"]').forEach(a=>{a.addEventListener("click",async()=>{const n=a.dataset.roleId;if(!n||!e.switchDemoRole)return;const T=await e.switchDemoRole(n);I(),s(T)})})}w()}async function rt(){const t=document.getElementById("app");if(t)try{const e=Le(),s=await e.getSession(),l=async o=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await st(t,e,o,()=>{we(t,e,c=>{l(c)})})};if(!s||window.location.hash==="#login"){we(t,e,o=>{l(o)});return}await l(s)}catch(e){t.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(e)}</div></div>`}}rt();
//# sourceMappingURL=index-C0qX3HVi.js.map
