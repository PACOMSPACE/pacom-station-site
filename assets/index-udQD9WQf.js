(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const C of c.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&a(C)}).observe(document,{childList:!0,subtree:!0});function s(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=s(o);fetch(o.href,c)}})();const r={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},Ee={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[r.projectId,r.project1Id],allowedBuildingIds:[r.buildingId,r.buildingFId],allowedFloorIds:[r.lockedFloor8Id,r.floorId,r.lockedFloor6Id],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId,r.buildingFId],allowedFloorIds:[r.lockedFloor8Id,r.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId],allowedFloorIds:[r.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId],allowedFloorIds:[r.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId],allowedFloorIds:[r.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},ze="pacom.web.demo.role";class st{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){const t=sessionStorage.getItem(ze);t&&Ee[t]&&(this.activeSession=structuredClone(Ee[t]));const s=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:r.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:s,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:r.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:r.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:r.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:s,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:s,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:s,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:r.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:s,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:r.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:s,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:s,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:s,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:s},{id:"conn-e7f-dali",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:s},{id:"conn-e7f-modbus",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:r.projectId,floorId:r.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:r.projectId,floorId:r.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:r.projectId,floorId:r.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:r.projectId,floorId:r.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:r.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:r.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:r.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:s,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:r.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:r.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:r.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:r.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(Ee).map((a,o)=>({userId:a.userId,displayName:a.displayName,email:`${a.role.replaceAll("_",".")}@pacom.local`,role:a.role,roleLabel:a.roleLabel,scopeSummary:a.scope.allowedZoneIds?.length?`E栋 7F（${a.scope.allowedZoneIds.length} 个我的区域）`:`${a.scope.allowedProjectIds.length} 项目 / ${a.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:o===0?s:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(t,s,a,o,c){this.traces.unshift({at:new Date().toISOString(),channel:t,operation:s,endpoint:a,request:c,response:o}),this.traces.length>40&&this.traces.pop()}pushAudit(t,s,a,o){const c=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:c?.displayName??"anonymous",role:c?.role??"member",action:t,target:s,result:a,detail:o})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(t){if(!t.account.trim()||!t.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const s=t.account.includes("admin")?"org_admin":t.account.includes("eng")?"commissioning_engineer":t.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(Ee[s]),sessionStorage.setItem(ze,s),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:t.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(ze),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(t){return this.activeSession=structuredClone(Ee[t]),sessionStorage.setItem(ze,t),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${t}`,this.activeSession),structuredClone(this.activeSession)}async getSpatialTree(){const t=this.requireSession(),s=[{id:r.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"},{id:r.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"}],a=[{id:r.buildingId,projectId:r.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.png"},{id:r.buildingFId,projectId:r.projectId,name:"F栋",aboveFloors:12,belowFloors:2,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.png"}],o={projects:s.filter(c=>t.scope.allowedProjectIds.includes(c.id)),buildings:a.filter(c=>t.scope.allowedBuildingIds.includes(c.id)),floors:[{id:r.lockedFloor8Id,buildingId:r.buildingId,kind:"above",level:8,name:"8F",plan:null},{id:r.floorId,buildingId:r.buildingId,kind:"above",level:7,name:"7F",areaSqm:1383.1,plan:{floorId:r.floorId,imageUrl:"./media/7F.webp",planVersion:1,updatedAt:"2026-11-22T00:00:00Z"}},{id:r.lockedFloor6Id,buildingId:r.buildingId,kind:"above",level:6,name:"6F",plan:null}],zones:[{id:"zone-e7f-lab-east",floorId:r.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:r.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:r.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:r.floorId,name:"核心走廊与弱电井",category:"corridor"}]};return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:o.projects.length,buildings:o.buildings.length,floors:o.floors.length}),o}async getFloorDevices(t){const s=this.requireSession();if(!s.scope.allowedFloorIds.includes(t)){const o={code:"FORBIDDEN",status:403,message:`当前角色「${s.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,o),this.pushAudit("floor.read",t,"denied",o.message),new Error(`403 FORBIDDEN: ${o.message}`)}if(t!==r.floorId)return[];let a=structuredClone(this.devices);return s.scope.allowedZoneIds?.length&&(a=a.filter(o=>o.logicalZoneId&&s.scope.allowedZoneIds.includes(o.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,{count:a.length}),a}async dispatchControlBatch(t){const s=this.requireSession();if(!s.scope.canControlDevices||!s.scope.allowedFloorIds.includes(t.floorId))throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权下发控制指令`);const a=`batch-e7f-${Date.now().toString(36)}`,o={batchId:a,floorId:t.floorId,createdBy:s.userId,createdAt:new Date().toISOString(),receipts:t.targets.map(c=>({deviceId:c.deviceId,command:c.command,targetValue:c.targetValue,status:"queued"}))};return this.batches.set(a,o),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",o,t),this.pushAudit("control.dispatch",a,"success",`下发 ${t.targets.length} 台设备`),o.receipts.forEach((c,C)=>{const O=this.devices.find(U=>U.id===c.deviceId);setTimeout(()=>{c.status="dispatched",c.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:a,deviceId:c.deviceId,status:"dispatched",at:c.dispatchedAt})},280+C*120),setTimeout(()=>{const U=new Date().toISOString();!O||O.connectivity==="offline"?(c.status="timeout",c.errorCode="GATEWAY_READBACK_TIMEOUT",c.errorMessage="设备离线，网关未收到回读确认",c.verifiedAt=U):(c.status="verified_success",c.observedValue=c.targetValue,c.verifiedAt=U,this.applyObservedTelemetry(O,c.command,c.targetValue,U)),this.emit({type:"control.receipt.updated",batchId:a,deviceId:c.deviceId,status:c.status,observedValue:c.observedValue,at:U})},900+C*220)}),structuredClone(o)}applyObservedTelemetry(t,s,a,o){s==="lighting.dimming"&&t.telemetry.dimming?(t.telemetry.dimming={...t.telemetry.dimming,value:a,collectedAt:o,stale:!1},t.telemetry.power&&(t.telemetry.power={...t.telemetry.power,value:Number(a)>0,collectedAt:o,stale:!1})):(s==="lighting.power"||s==="hvac.power")&&t.telemetry.power?t.telemetry.power={...t.telemetry.power,value:a,collectedAt:o,stale:!1}:s==="hvac.setpoint"&&t.telemetry.setpoint&&(t.telemetry.setpoint={...t.telemetry.setpoint,value:a,collectedAt:o,stale:!1}),this.emit({type:"telemetry.updated",floorId:t.floorId,deviceId:t.id,collectedAt:o,values:{[s]:a}})}async getControlBatch(t){this.requireSession();const s=this.batches.get(t);if(!s)throw new Error(`404 NOT_FOUND: 批次 ${t} 不存在`);return structuredClone(s)}async listAlarms(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==r.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(t,s){const a=this.requireSession();if(!a.scope.canManageAlarms){const c=`角色「${a.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",t,"denied",c),new Error(`403 FORBIDDEN: ${c}`)}const o=this.alarms.find(c=>c.id===t);if(!o)throw new Error(`404 NOT_FOUND: 告警 ${t} 不存在`);return o.status="acknowledged",o.acknowledgedAt=new Date().toISOString(),o.acknowledgedBy=a.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${t}/acknowledge`,o,{note:s}),this.pushAudit("alarm.acknowledge",t,"success",s),this.emit({type:"alarm.changed",floorId:o.floorId,alarmId:t,status:"acknowledged",at:o.acknowledgedAt}),structuredClone(o)}async listWorkOrders(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==r.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(t){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建工单`);const a=new Date().toISOString(),o={id:`wo-e7f-${Date.now().toString(36)}`,projectId:r.projectId,buildingId:r.buildingId,floorId:t.floorId,deviceId:t.deviceId??null,alarmId:t.alarmId??null,title:t.title,description:t.description,status:"open",assigneeId:null,createdAt:a,updatedAt:a};if(this.workOrders.unshift(o),t.alarmId){const c=this.alarms.find(C=>C.id===t.alarmId);c&&(c.workOrderId=o.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",o,t),this.pushAudit("work_order.create",o.id,"success",o.title),structuredClone(o)}async updateWorkOrderStatus(t,s){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权流转工单`);const o=this.workOrders.find(c=>c.id===t);if(!o)throw new Error(`404 NOT_FOUND: 工单 ${t} 不存在`);return o.status=s,o.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${t}`,o,{status:s}),this.pushAudit("work_order.update",t,"success",`状态更新为 ${s}`),structuredClone(o)}async updateDevicePlanPoint(t){const s=this.requireSession();if(!s.scope.canEditDeployment)throw this.pushAudit("device.plan_point",t.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权编辑图纸标点`);const a=this.devices.find(o=>o.id===t.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(a.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${a.version}，请刷新后重试`);return a.planPoint={floorId:t.floorId,planVersion:t.planVersion,x:Number(t.x.toFixed(4)),y:Number(t.y.toFixed(4))},a.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${t.deviceId}/plan-point`,a,t),this.pushAudit("device.plan_point",t.deviceId,"success",`坐标更新 (${a.planPoint.x}, ${a.planPoint.y})`),structuredClone(a)}async updateDeviceHardwareBinding(t){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改硬件绑定`);const a=this.devices.find(c=>c.id===t.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(a.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${a.version}）`);const o=new Date().toISOString();return a.physicalInstalled=t.physicalInstalled,a.physicalVerifiedAt=t.physicalInstalled?o:null,a.hardwareBinding={gatewayId:t.gatewayId,protocol:t.protocol,networkAddress:t.networkAddress,portOrChannel:t.portOrChannel,boundAt:o,boundBy:s.displayName},a.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${t.deviceId}/hardware-binding`,a,t),this.pushAudit("device.hardware_binding",t.deviceId,"success",`${t.protocol} ${t.networkAddress}`),structuredClone(a)}async listConnections(t){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(t){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(t,s){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权冻结交付批次`);const o=this.devices.filter(C=>C.physicalInstalled&&C.hardwareBinding).length,c={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:r.projectId,floorId:t,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:o,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:a.displayName,note:s||"例行交付基线冻结"};return this.deliveryBatches.unshift(c),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${t}/deliveries/freeze`,c,{note:s}),this.pushAudit("delivery.freeze",c.id,"success",`${o}/${this.devices.length} 已现场核验`),structuredClone(c)}async getAnalysisReport(t,s,a){this.requireSession();const o=s==="today"?1:s==="7d"?7:30,C={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*o)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*o).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(X=>X.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*o).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*o).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*o).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[t],O=s==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],U={category:t,range:s,scopeId:a,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:C.kpis,unit:C.unit,series:C.base.map((X,q)=>({label:O[q],value:Math.round(X*(t==="energy"||t==="carbon"?o/2+.5:1)),baseline:Math.round(X*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:C.base[3],unit:C.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:C.base[4],unit:C.unit,status:t==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:C.base[1],unit:C.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${t}?range=${s}&scopeId=${a}`,{kpis:U.kpis.length}),U}async listScenes(t){return this.requireSession(),structuredClone(this.scenes)}async createScene(t){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const a={id:`scn-e7f-${Date.now().toString(36)}`,projectId:t.projectId,floorId:t.floorId,name:t.name,description:t.description,enabled:!0,scheduleSummary:"手动触发",actions:t.actions,lastExecutedAt:null};return this.scenes.unshift(a),this.record("REST","createScene","POST /api/v1/scenes",a,t),this.pushAudit("scene.create",a.id,"success",a.name),structuredClone(a)}async executeScene(t){const s=this.scenes.find(o=>o.id===t);if(!s)throw new Error(`404 NOT_FOUND: 场景 ${t} 不存在`);const a=await this.dispatchControlBatch({floorId:s.floorId,idempotencyKey:`scene-${t}-${Date.now()}`,targets:s.actions,reason:`触发场景：${s.name}`});return s.lastExecutedAt=new Date().toISOString(),s.lastBatchId=a.batchId,a}async getRuntimeSettings(t){return this.requireSession(),structuredClone({projectId:r.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(t,s,a){this.requireSession();const o=a>=this.calendar.nightGuardStart?`下班时间 ${a} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,c=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${s} - ${a}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${s} (-30m) ~ ${a} (+30m)`,conflictWarning:o},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:o}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",c,{workdayStart:s,workdayEnd:a}),c}async saveWorkCalendar(t,s,a,o){const c=this.requireSession();if(!c.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${c.roleLabel}」无权修改运行日历`);if(this.calendar.version!==o)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(s>=a)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:s,workdayEnd:a,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:s,workdayEnd:a,expectedVersion:o}),this.pushAudit("settings.calendar",r.projectId,"success",`${s}-${a}`),structuredClone(this.calendar)}async toggleRuntimeRule(t,s,a){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权启停运行规则`);const c=this.rules.find(C=>C.id===t);if(!c)throw new Error(`404 NOT_FOUND: 规则 ${t} 不存在`);if(c.version!==a)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${c.version}）`);return c.enabled=s,c.version+=1,c.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${t}`,c,{enabled:s,expectedVersion:a}),this.pushAudit("settings.rule_toggle",t,"success",s?"启用":"停用"),structuredClone(c)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(t,s){const a=this.requireSession();if(a.role!=="org_admin"&&a.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const o=Ee[s],c={userId:`inv-${Date.now().toString(36)}`,displayName:t.split("@")[0]||t,email:t,role:s,roleLabel:o.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(c),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",c,{email:t,role:s}),this.pushAudit("org.invite",t,"success",o.roleLabel),structuredClone(c)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(t,s){return t!==r.floorId?()=>{}:(this.listeners.add(s),()=>{this.listeners.delete(s)})}emit(t){this.record("WS",t.type,`WS /ws/v1/stream?floorId=${r.floorId}`,t),this.listeners.forEach(s=>s(t))}}function lt(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new st}const nt={"building-2":'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',"settings-2":'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',check:'<path d="M20 6 9 17l-5-5"/>',menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>'};function ot(e){return e>=20?"1.5":e>=16?"1.75":e>=14?"2":"2.25"}function ue(e,t=16,s=""){const a=ot(t);return`<svg${s?` class="${s}"`:""} width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${a}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;">${nt[e]}</svg>`}const Oe=[{id:"wg-hvac",name:"暖通运维组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋 5F–7F（HVAC、FCU 与 VAV 系统）",memberCount:3,membersSummary:"陈值班、林工、周工",notifyChannel:"站内 + 短信"},{id:"wg-elec",name:"强电照明组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋全楼照明与配电回路",memberCount:2,membersSummary:"黄工、刘工",notifyChannel:"站内 + 邮件"},{id:"wg-property",name:"园区物业值班组",defaultRoleLabel:"只读访客 / 值班巡检",locationScope:"广实2号园 / 全园区公共空间与值班台",memberCount:4,membersSummary:"张班长、王巡检、赵巡检、吴值守",notifyChannel:"站内 + 每日晨报"}];async function it(e,t,s,a,o){let c="profile",C="directory",O=await t.listOrgMembers(),U=await t.listAuditLogs(),X="",q="all",K="all",N="all",ne=!1,k=!1,ie=!1,_=s.displayName,Y=s.role==="org_admin"||s.role==="project_admin"?"设施运维总监":s.role==="commissioning_engineer"?"楼宇自控部署工程师":s.role==="facility_operator"?"暖通运行值班工程师":"园区巡检成员",Q="138-0013-8072",ce="",P="";async function A(){[O,U]=await Promise.all([t.listOrgMembers(),t.listAuditLogs()]),le()}function le(){const be=t.mode==="demo"&&typeof t.switchDemoRole=="function",se=X.trim().toLowerCase(),p=O.filter(w=>q!=="all"&&w.role!==q?!1:se?`${w.displayName} ${w.email} ${w.roleLabel} ${w.scopeSummary}`.toLowerCase().includes(se):!0),j=U.filter(w=>{if(K==="success"&&w.result!=="success"||K==="denied"&&w.result==="success")return!1;if(N!=="all"){const B=`${w.action} ${w.target}`.toLowerCase();if(N==="control"&&!B.includes("control")&&!B.includes("scene")&&!B.includes("控制")||N==="alarm"&&!B.includes("alarm")&&!B.includes("work")&&!B.includes("告警")||N==="deploy"&&!B.includes("deploy")&&!B.includes("plan")&&!B.includes("hardware")&&!B.includes("部署"))return!1}return!0});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">机构与账户</h1>
              <div class="pacom-tabs" role="tablist" aria-label="机构与账户视图">
                <button class="pacom-tab" role="tab" aria-selected="${c==="profile"}" data-atab="profile">我的账户与权限</button>
                <button class="pacom-tab" role="tab" aria-selected="${c==="members"}" data-atab="members">成员与角色（${O.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${c==="audit"}" data-atab="audit">操作审计日志（${U.length}）</button>
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
            ${ce?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${ce}</span></div>`:""}
            ${P?`<div class="pacom-alert-banner">${P}</div>`:""}
            ${c==="profile"?`
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
                        <input class="pacom-input" style="width:150px;" name="displayName" value="${_}" aria-label="显示姓名" required />
                        <input class="pacom-input" style="width:180px;" name="jobTitle" value="${Y}" aria-label="岗位职务" />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">告警接收手机号（SMS）</span>
                        <span class="lov-setting-desc">用于接收 P1 严重告警短信推送与工单升级提醒</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:180px;" name="phone" value="${Q}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
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

                ${be?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">多角色权限预览切换</h2>
                        <span class="pacom-badge pacom-badge--neutral">仅 Demo 预览可用</span>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(Ee).map(w=>{const B=Ee[w];return`
                              <button class="pacom-role-card ${w===s.role?"is-active":""}" data-switch-role="${w}">
                                <strong style="font-weight:500;">${B.roleLabel}</strong>
                                <span class="pacom-row-sub">${B.displayName}</span>
                                <span class="pacom-row-sub">授权楼层 ${B.scope.allowedFloorIds.length} 层 · 部署编辑：${B.scope.canEditDeployment?"是":"否"}</span>
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
                      <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:4px;">展开查看 ${ue("chevron-down",12)}</span>
                    </summary>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                      <span class="pacom-row-sub">服务端下发的当前会话权限对象（供前后端核对）</span>
                      <button class="pacom-btn" data-copy-session="1">${ie?"已复制":"复制 JSON"}</button>
                    </div>
                    <pre class="pacom-code">${JSON.stringify(s,null,2)}</pre>
                  </details>
                </section>`:c==="members"?`
                  ${ne?`
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
                                ${Object.keys(Ee).map(w=>`<option value="${w}">${Ee[w].roleLabel}</option>`).join("")}
                              </select>
                              <button class="pacom-btn pacom-btn--primary" type="submit">发送邀请</button>
                            </div>
                          </div>
                        </form>
                      </section>`:""}

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                        <h2 class="lov-section-title">${C==="directory"?"机构成员目录":"工作组与空间授权（Groups & Scope）"}</h2>
                        <div class="pacom-tabs" role="tablist" aria-label="成员与工作组切换">
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${C==="directory"}" data-msub="directory">成员目录（${O.length}）</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${C==="groups"}" data-msub="groups">工作组（${Oe.length}）</button>
                        </div>
                      </div>
                      <span class="pacom-row-sub">${C==="directory"?`当前显示 ${p.length} 人`:"按空间边界与值班组统一分派告警与工单"}</span>
                    </div>
                    ${C==="directory"?`
                        <div class="lov-table-card">
                          <div class="lov-table-toolbar">
                            <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                              <input class="pacom-input" name="memberSearch" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${X}" />
                              <select class="pacom-select" name="memberRoleFilter" data-role-filter>
                                <option value="all" ${q==="all"?"selected":""}>全部角色</option>
                                ${Object.keys(Ee).map(w=>`<option value="${w}" ${q===w?"selected":""}>${Ee[w].roleLabel}</option>`).join("")}
                              </select>
                            </div>
                            <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                              ${ne?"收起邀请":"+ 邀请成员"}
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
                                ${p.map(w=>`
                                    <tr>
                                      <td>
                                        <div style="display:flex; align-items:center; gap:10px;">
                                          <span class="pacom-pop-avatar">${w.displayName.slice(0,1)}</span>
                                          <div>
                                            <div style="font-weight:500;">${w.displayName}</div>
                                            <div class="pacom-row-sub">${w.email}</div>
                                          </div>
                                        </div>
                                      </td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${w.roleLabel}</span></td>
                                      <td><span class="pacom-row-sub">${w.scopeSummary}</span></td>
                                      <td>
                                        <span class="pacom-badge ${w.status==="active"?"pacom-badge--online":"pacom-badge--accent"}">
                                          ${w.status==="active"?"正常":w.status}
                                        </span>
                                      </td>
                                    </tr>`).join("")}
                              </tbody>
                            </table>
                          </div>
                        </div>`:`
                        ${k?`
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
                            <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-group="1">${k?"收起表单":"+ 新建工作组"}</button>
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
                                ${Oe.map(w=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${w.name}</div>
                                      <div class="pacom-row-sub">${w.membersSummary}</div>
                                    </td>
                                    <td><span class="pacom-badge pacom-badge--neutral">${w.defaultRoleLabel}</span></td>
                                    <td><span class="pacom-row-sub">${w.locationScope}</span></td>
                                    <td><strong>${w.memberCount}</strong> 人</td>
                                    <td><span class="pacom-badge pacom-badge--accent">${w.notifyChannel}</span></td>
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
                        <select class="pacom-select" name="auditActionCat" data-audit-cat aria-label="按行为类别筛选">
                          <option value="all" ${N==="all"?"selected":""}>全部操作类型</option>
                          <option value="control" ${N==="control"?"selected":""}>设备控制与场景</option>
                          <option value="alarm" ${N==="alarm"?"selected":""}>告警与工单处置</option>
                          <option value="deploy" ${N==="deploy"?"selected":""}>系统部署与点位</option>
                        </select>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${K==="all"}" data-audit-filter="all">全部（${U.length}）</button>
                          <button class="pacom-tab" aria-selected="${K==="success"}" data-audit-filter="success">成功</button>
                          <button class="pacom-tab" aria-selected="${K==="denied"}" data-audit-filter="denied">已拦截</button>
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
                            ${j.map(w=>`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${w.action}</div>
                                    ${w.detail?`<div class="pacom-row-sub">${w.detail}</div>`:""}
                                  </td>
                                  <td><code style="font-size:12px;">${w.target}</code></td>
                                  <td>${w.actor}</td>
                                  <td><span class="pacom-row-sub">${w.at.slice(0,19).replace("T"," ")}</span></td>
                                  <td>
                                    <span class="pacom-badge ${w.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                                      ${w.result==="success"?"成功":w.result}
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
    `,e.querySelectorAll("[data-atab]").forEach(w=>{w.addEventListener("click",()=>{c=w.dataset.atab,ce="",P="",le()})}),e.querySelectorAll("[data-msub]").forEach(w=>{w.addEventListener("click",()=>{C=w.dataset.msub??"directory",le()})}),e.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{k=!k,le()}),e.querySelector('[data-role="new-group-form"]')?.addEventListener("submit",w=>{w.preventDefault();const B=new FormData(w.currentTarget),ge=String(B.get("wgName")??"").trim(),E=String(B.get("wgRole")??"运行值班员"),y=String(B.get("wgScope")??"").trim();!ge||!y||(Oe.push({id:`wg-${Date.now()}`,name:ge,defaultRoleLabel:E,locationScope:y,memberCount:1,membersSummary:s.displayName,notifyChannel:"站内 + 邮件"}),k=!1,ce=`已创建工作组「${ge}」（授权空间：${y}）。`,le())}),e.querySelector('[data-role="profile-form"]')?.addEventListener("submit",w=>{w.preventDefault();const B=new FormData(w.currentTarget);_=String(B.get("displayName")??"").trim()||s.displayName,Y=String(B.get("jobTitle")??"").trim()||Y,Q=String(B.get("phone")??"").trim()||Q,ce=`已更新个人资料：${_}（${Y}）· 告警短信接收号 ${Q}。`,le()}),e.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await t.logout(),window.location.hash="#login",o()}),e.querySelector("[data-copy-session]")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(s,null,2)),ie=!0,le(),window.setTimeout(()=>{ie=!1,le()},1600)}catch{}}),e.querySelectorAll("[data-switch-role]").forEach(w=>{w.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const B=await t.switchDemoRole(w.dataset.switchRole);a(B)})}),e.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{ne=!ne,le()}),e.querySelector("[data-member-search]")?.addEventListener("input",w=>{const B=w.currentTarget,ge=B.selectionStart??B.value.length;X=B.value,le();const E=e.querySelector("[data-member-search]");E&&(E.focus(),E.setSelectionRange(ge,ge))}),e.querySelector("[data-role-filter]")?.addEventListener("change",w=>{q=w.currentTarget.value,le()}),e.querySelectorAll("[data-audit-filter]").forEach(w=>{w.addEventListener("click",()=>{K=w.dataset.auditFilter??"all",le()})}),e.querySelector("[data-audit-cat]")?.addEventListener("change",w=>{N=w.currentTarget.value??"all",le()}),e.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async w=>{w.preventDefault(),P="";const B=new FormData(w.currentTarget);try{await t.inviteOrgMember(String(B.get("email")??""),String(B.get("role"))),ne=!1,await A()}catch(ge){P=ge instanceof Error?ge.message:String(ge),le()}})}le()}const Ae={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},ct={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},dt={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function rt(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("modbus")||t.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":t.includes("co₂")||t.includes("co2")||t.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function pt(e){return e.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:e.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function Re(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("vav")||e.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:t.includes("co₂")||t.includes("co2")||e.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function ut(e,t,s){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),o=a.get("alarm"),c=a.get("wo");let C=[],O=[],U=[],X=c?"workorders":"alarms",q="all",K="all",N="all",ne="impact",k=!1,ie="",_=o,Y=c,Q=null,ce=null,P="resolved";const A=new Set,le=new Map,be=new Map,se=new Map,p=new Map;let j="",G="";function w(x){const D=p.get(x.id);if(D)return D;const l=x.id.match(/(\d+)$/),L=`WO-2026-${l?l[1]:x.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,V={estCost:"¥ 450",actualCost:x.status==="closed"?"¥ 380":"--",cmmsNo:L,assigneeGroup:"暖通运维组",tasks:[{id:`${x.id}-t1`,label:"核查设备供电与现场指示灯状态",done:x.status!=="open"},{id:`${x.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:x.status==="resolved"||x.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:x.createdAt?x.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${L}）`}]};return p.set(x.id,V),V}async function B(){[C,O,U]=await Promise.all([t.listAlarms(r.floorId),t.listWorkOrders(r.floorId),t.getFloorDevices(r.floorId).catch(()=>[])]),O.forEach(x=>w(x)),y()}function ge(x){if(!x)return{name:"楼层通用",zone:"E7F",dev:null};const D=U.find(l=>l.id===x)??null;return D?{name:D.name,zone:(D.logicalZoneId?dt[D.logicalZoneId]:void 0)??"E7F",dev:D}:{name:x,zone:"E7F",dev:null}}function E(x){const D=ge(x.deviceId).dev;D&&D.connectivity==="offline"?se.set(x.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${D.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):se.set(x.id,{verdict:"pass",summary:`自检通过（PASS）：「${D?.name??x.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),_=x.id,y()}function y(){const x=C.filter(m=>m.status==="active"&&!le.has(m.id)),D=O.filter(m=>!w(m).cancelled&&(m.status==="open"||m.status==="assigned"||m.status==="in_progress")),l=C.filter(m=>m.status!=="active").length+be.size,L=0,V=le.size,re=ie.trim().toLowerCase(),he=C.filter(m=>{const b=le.has(m.id);if(q==="snoozed"){if(!b)return!1}else if(q==="active"){if(m.status!=="active"||b)return!1}else if(q==="acknowledged"){if(m.status!=="acknowledged")return!1}else if(b)return!1;if(N!=="all"&&m.severity!==N)return!1;if(!re)return!0;const H=ge(m.deviceId);return`${m.title} ${m.message} ${H.name} ${H.zone} ${m.deviceId}`.toLowerCase().includes(re)}),J=new Map;for(const m of he){const b=`${m.title} ${m.message}`.toLowerCase(),H=b.includes("离线")||b.includes("modbus")||b.includes("通信"),ve=k?H?"root-gateway-modbus":m.deviceId:m.id,me=H?"根因：E7F 主控网关通信链路":`根因：${ge(m.deviceId).name}`,we=J.get(ve)??{rootLabel:me,items:[]};we.items.push(m),J.set(ve,we)}const $e=Array.from(J.values());ne==="impact"&&$e.sort((m,b)=>Re(b.items[0]).costYuan-Re(m.items[0]).costYuan);const F=O.filter(m=>{const b=w(m);if(K==="cancelled"){if(!b.cancelled)return!1}else if(b.cancelled||K==="open"&&(m.status==="resolved"||m.status==="closed")||K==="resolved"&&m.status!=="resolved"||K==="closed"&&m.status!=="closed")return!1;if(!re)return!0;const H=ge(m.deviceId);return`${m.title} ${m.description} ${m.id} ${b.cmmsNo} ${H.name}`.toLowerCase().includes(re)});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">告警中心</h1>
              <div class="pacom-tabs" role="tablist" aria-label="告警中心视图">
                <button class="pacom-tab" role="tab" aria-selected="${X==="alarms"}" data-main-tab="alarms">
                  实时告警（${C.length-V}）
                </button>
                <button class="pacom-tab" role="tab" aria-selected="${X==="workorders"}" data-main-tab="workorders">
                  运维工单（${O.length}）
                </button>
              </div>
            </div>

            <div class="pacom-header-meta">
              ${X==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="lov-switch" role="switch" aria-checked="${k}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="lov-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${s.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${s.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="lov-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${ue("refresh-cw",14)}</button>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="lov-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="lov-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${X==="alarms"&&q==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">待处理告警</span>
              <div class="lov-kpi-value">${x.length}<span class="lov-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="lov-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${X==="workorders"&&K==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">处理中工单</span>
              <div class="lov-kpi-value">${D.length}<span class="lov-kpi-unit">单</span></div>
              <span class="lov-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${X==="alarms"&&q==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">已闭环生效</span>
              <div class="lov-kpi-value">${l}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="lov-kpi-cell">
              <span class="lov-kpi-label">关单复发待查</span>
              <div class="lov-kpi-value" style="color:var(--pacom-status-online);">${L}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${j?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${j}</span></div>`:""}
          ${G?`<div class="pacom-alert-banner">${G}</div>`:""}

          ${X==="alarms"?`
              <section class="lov-table-card">
                <div class="lov-table-toolbar">
                  <div class="lov-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${ie}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${N==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${N==="critical"?"selected":""}>严重</option>
                      <option value="major" ${N==="major"?"selected":""}>重要</option>
                      <option value="minor" ${N==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${ne==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${ne==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${q==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${q==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${q==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${q==="snoozed"}" data-status-pill="snoozed">已忽略（${V}）</button>
                    </div>
                  </div>
                  <div class="lov-table-toolbar-group">
                    ${A.size>0&&s.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${A.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${$e.length} 项</span>
                  </div>
                </div>
                ${$e.length===0?'<div class="lov-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
                    <div class="lov-table-wrap">
                      <table class="lov-table">
                        <thead>
                          <tr>
                            <th style="width:36px;"></th>
                            <th>级别</th>
                            <th>告警事项</th>
                            <th>设备与空间</th>
                            <th>影响估算</th>
                            <th>持续时长</th>
                            <th>状态</th>
                            <th style="text-align:right;">操作</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${$e.map(m=>{const b=m.items[0],H=ct[b.severity]??{label:b.severity,cls:"pacom-badge--neutral"},ve=ge(b.deviceId),me=pt(b),we=Re(b),Le=_===b.id,ke=le.get(b.id),Se=!!ke,Ce=A.has(b.id),te=se.get(b.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${b.id}" data-check-alarm="${b.id}" ${Ce?"checked":""} ${b.status!=="active"||Se?"disabled":""} aria-label="选择 ${b.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${H.cls}">${H.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${b.title}</span>
                                      ${k?`<span class="pacom-badge pacom-badge--accent">${m.rootLabel}${m.items.length>1?` · 影响 ${m.items.length} 项`:""}</span>`:""}
                                      ${te?`<span class="pacom-badge ${te.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${te.verdict.toUpperCase()}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${b.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${ve.name}</div>
                                    <div class="pacom-row-sub">${ve.zone}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${we.costLabel}</div>
                                    <div class="pacom-row-sub">${we.comfortLabel}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${me.duration}</div>
                                    <div class="pacom-row-sub" style="color:${me.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${me.trend}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${Se?"pacom-badge--neutral":b.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${Se?`忽略 ${ke?.duration}`:b.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${Se?`<button class="pacom-btn" data-unsnooze="${b.id}">恢复监控</button>`:`
                                            ${b.status==="active"?`<button class="pacom-btn" data-mark-actioned="${b.id}" ${s.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${b.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${b.id}" ${s.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${b.id}">${Le?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${Le?`
                                    <tr class="lov-table-detail-row">
                                      <td colspan="8">
                                        <div class="lov-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${rt(b)}
                                            </div>
                                            ${ke?`<div class="pacom-info-banner">忽略周期：${ke.duration} · 原因备注：${ke.reason}</div>`:""}
                                            ${te?`
                                                <div class="lov-banner ${te.verdict==="pass"?"lov-banner--ok":"lov-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="lov-banner-title">${te.summary}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${te.steps.map(Fe=>`<span>${Fe}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${b.id}</code> · 设备编号 <code>${b.deviceId}</code> · 关联工单 ${b.workOrderId??"无"}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${b.id}">单机自检（FTT）</button>
                                              ${!Se&&b.status==="active"?`<button class="pacom-btn" data-open-snooze="${b.id}">限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${b.deviceId}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${b.deviceId}">定位设备 →</button>
                                            </div>
                                            ${Q===b.id?`
                                                <form data-snooze-form="${b.id}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
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
              ${(()=>{const m=Y?O.find(b=>b.id===Y)??null:null;if(m){const b=ge(m.deviceId),H=w(m),ve=!!(H.cancelled||m.status==="closed");return`
                  <section class="lov-section" data-role="wo-workbench">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${m.id}">← 返回运维工单列表</button>
                        <h2 class="lov-section-title">${m.title}</h2>
                        <span class="pacom-badge pacom-badge--accent">${H.cmmsNo}</span>
                        ${H.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${m.id}" data-wo-status="${m.id}" aria-label="更新工单状态" ${ve?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(me=>`<option value="${me}" ${m.status===me?"selected":""}>${Ae[me]}</option>`).join("")}
                          <option value="cancelled" ${H.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${ce===m.id?`
                        <form data-close-wo-form="${m.id}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${Ae[P]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${H.cause??""}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${H.solution??""}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${H.actualCost==="--"?"":H.actualCost}" />
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
                          <div class="pacom-row-sub">${m.description}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${H.tasks.map(me=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${me.id}" data-wo-task="${m.id}" data-task-id="${me.id}" ${me.done?"checked":""} ${ve?"disabled":""} />
                                    <span>${me.label}</span>
                                  </span>
                                  ${me.unit?`<span class="pacom-row-sub">实测：${me.reading??"--"} ${me.unit}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${H.history.map(me=>`<span>• <span class="pacom-row-sub">${me.at}</span> — ${me.text}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${m.id}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${H.cmmsNo}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${b.name}（${b.zone}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${H.assigneeGroup}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${H.estCost} / 实际 ${H.actualCost}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${H.cause??"待完单填写"}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${H.solution??"待完单填写"}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${m.deviceId}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${m.deviceId}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="lov-table-card">
                  <div class="lov-table-toolbar">
                    <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${ie}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${K==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${K==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${K==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${K==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${K==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${F.length} 条工单</span>
                  </div>
                  ${F.length===0?'<div class="lov-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${F.map(b=>{const H=ge(b.deviceId),ve=w(b),me=!!(ve.cancelled||b.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${b.title}</span>
                                        ${ve.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${b.description} · <code>${b.id}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${H.name}</div>
                                      <div class="pacom-row-sub">${H.zone}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${ve.cmmsNo}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${ve.assigneeGroup} · 预估 ${ve.estCost}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${b.id}" data-wo-status="${b.id}" aria-label="更新工单状态" ${me?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(we=>`<option value="${we}" ${b.status===we?"selected":""}>${Ae[we]}</option>`).join("")}
                                          <option value="cancelled" ${ve.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${b.id}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${ce===b.id?`
                                      <tr class="lov-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${b.id}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${Ae[P]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${ve.cause??""}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${ve.solution??""}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${ve.actualCost==="--"?"":ve.actualCost}" />
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
    `,e.querySelectorAll("[data-main-tab]").forEach(m=>{m.addEventListener("click",()=>{X=m.dataset.mainTab??"alarms",j="",y()})}),e.querySelectorAll("[data-kpi-filter]").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.kpiFilter;j="",b==="workorders"?(X="workorders",K=K==="open"?"all":"open"):(b==="active"||b==="acknowledged")&&(X="alarms",q=q===b?"all":b),y()})}),e.querySelectorAll("[data-status-pill]").forEach(m=>{m.addEventListener("click",()=>{q=m.dataset.statusPill??"all",y()})}),e.querySelectorAll("[data-wo-pill]").forEach(m=>{m.addEventListener("click",()=>{K=m.dataset.woPill??"all",y()})}),e.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{j="",B()}),e.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{k=!k,y()}),e.querySelector("[data-severity-filter]")?.addEventListener("change",m=>{N=m.currentTarget.value,y()}),e.querySelector("[data-alarm-sort]")?.addEventListener("change",m=>{ne=m.currentTarget.value??"impact",y()}),e.querySelector("[data-alarm-search]")?.addEventListener("input",m=>{const b=m.currentTarget,H=b.selectionStart??b.value.length;ie=b.value,y();const ve=e.querySelector("[data-alarm-search]");ve&&(ve.focus(),ve.setSelectionRange(H,H))}),e.querySelectorAll("[data-check-alarm]").forEach(m=>{m.addEventListener("change",()=>{const b=m.dataset.checkAlarm;b&&(m.checked?A.add(b):A.delete(b),y())})}),e.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{G="";const m=Array.from(A);try{for(const b of m)await t.acknowledgeAlarm(b,"告警中心批量确认"),be.set(b,"批量确认处置");A.clear(),j=`已批量确认 ${m.length} 条告警，未来 24 小时持续校验无复发。`,await B()}catch(b){G=b instanceof Error?b.message:String(b),y()}}),e.querySelectorAll("[data-expand-alarm]").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.expandAlarm??null;_=_===b?null:b,Q=null,y()})}),e.querySelectorAll("[data-expand-wo]").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.expandWo??null;Y=Y===b?null:b,y()})}),e.querySelectorAll("[data-run-ftt]").forEach(m=>{m.addEventListener("click",()=>{const b=C.find(H=>H.id===m.dataset.runFtt);b&&E(b)})}),e.querySelectorAll("[data-open-snooze]").forEach(m=>{m.addEventListener("click",()=>{Q=m.dataset.openSnooze??null,y()})}),e.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{Q=null,y()}),e.querySelectorAll("[data-snooze-form]").forEach(m=>{m.addEventListener("submit",b=>{b.preventDefault();const H=m.dataset.snoozeForm;if(!H)return;const ve=new FormData(m),me=String(ve.get("duration")??"24h"),we=String(ve.get("reason")??"").trim()||"现场核查中";le.set(H,{duration:me,reason:we}),A.delete(H),Q=null,j=`已限时忽略该告警（${me} · ${we}），可在「已忽略」页签中随时恢复。`,y()})}),e.querySelectorAll("[data-unsnooze]").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.unsnooze;b&&(le.delete(b),j="已恢复该告警的实时监控。",y())})}),e.querySelectorAll("[data-go-ts]").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(b)}`})}),e.querySelectorAll("[data-locate-home]").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.locateHome??"";window.location.hash=b?`#home?device=${encodeURIComponent(b)}`:"#home"})}),e.querySelectorAll("[data-mark-actioned]").forEach(m=>{m.addEventListener("click",async()=>{G="";const b=m.dataset.markActioned;try{await t.acknowledgeAlarm(b,"现场自处理完成（Mark Actioned）"),be.set(b,"现场自处理完成"),A.delete(b),j="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await B()}catch(H){G=H instanceof Error?H.message:String(H),y()}})}),e.querySelectorAll("[data-to-wo]").forEach(m=>{m.addEventListener("click",async()=>{G="";const b=C.find(H=>H.id===m.dataset.toWo);if(b)try{await t.createWorkOrder({floorId:b.floorId,deviceId:b.deviceId,alarmId:b.id,title:`处置告警：${b.title}`,description:b.message}),j=`已将「${b.title}」转为运维工单并同步 CMMS。`,await B()}catch(H){G=H instanceof Error?H.message:String(H),y()}})}),e.querySelectorAll("[data-wo-status]").forEach(m=>{m.addEventListener("change",async()=>{const b=m.dataset.woStatus,H=m.value;if(G="",H==="cancelled"){const ve=O.find(me=>me.id===b);if(ve){const me=w(ve);me.cancelled=!0,me.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),j="工单已移入「已取消」分类并锁定编辑。",y()}return}if(H==="resolved"||H==="closed"){ce=b,P=H,y();return}try{await t.updateWorkOrderStatus(b,H);const ve=O.find(me=>me.id===b);ve&&w(ve).history.unshift({at:"刚刚",text:`状态变更为「${Ae[H]}」`}),j="工单状态已更新并写入审计日志。",await B()}catch(ve){G=ve instanceof Error?ve.message:String(ve),await B()}})}),e.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{ce=null,y()}),e.querySelectorAll("[data-close-wo-form]").forEach(m=>{m.addEventListener("submit",async b=>{b.preventDefault();const H=m.dataset.closeWoForm,ve=new FormData(m),me=String(ve.get("cause")??"").trim(),we=String(ve.get("solution")??"").trim(),Le=String(ve.get("actualCost")??"").trim();try{await t.updateWorkOrderStatus(H,P);const ke=O.find(Se=>Se.id===H);if(ke){const Se=w(ke);Se.cause=me,Se.solution=we,Le&&(Se.actualCost=Le),Se.history.unshift({at:"刚刚",text:`流转至「${Ae[P]}」· 根因：${me}`})}ce=null,Y=H,j=`工单已更新为「${Ae[P]}」，根因与方案已沉淀归档。`,await B()}catch(ke){G=ke instanceof Error?ke.message:String(ke),y()}})}),e.querySelectorAll("[data-wo-task]").forEach(m=>{m.addEventListener("change",()=>{const b=O.find(me=>me.id===m.dataset.woTask);if(!b)return;const ve=w(b).tasks.find(me=>me.id===m.dataset.taskId);ve&&(ve.done=m.checked),y()})})}await B()}const Ze=ue("chevron-down",12),De=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],Pe=[{id:r.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:r.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:r.projectId,label:"广实2号园（全园区）",factor:18.2}],vt={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},mt=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],je=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function Ne(e,t=""){const s=(e??"").trim().toLowerCase();return!(!s||s.includes("%")||s.includes("°c")||s.includes("ppm")||s.includes("ms")||s.includes("m²")||s.includes("/m2")||s.includes("db")||s.includes("lx")||t.includes("率")||t.includes("均")||t.includes("强度")||t.includes("延迟"))}function qe(e,t){const s=e*t;return Math.abs(s)>=10?Math.round(s):Math.round(s*10)/10}function gt(e,t){const s=Number(String(e).replaceAll(",","")),a=t??"";return Number.isFinite(s)?a==="kWh"&&Math.abs(s)>=1e4?{value:(s/1e3).toFixed(1),unit:"MWh",title:`精确值：${s.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(s)?s.toLocaleString("en-US"):s.toLocaleString("en-US",{maximumFractionDigits:1}),unit:a,title:`${s.toLocaleString("en-US")} ${a}`.trim()}:{value:e,unit:a,title:`${e} ${a}`.trim()}}function bt(e,t){if(t===1)return e;const s=Ne(e.unit);return{...e,kpis:e.kpis.map(a=>{const o=Number(String(a.value).replaceAll(",",""));return!Number.isFinite(o)||!Ne(a.unit,a.label)?a:{...a,value:String(qe(o,t))}}),series:s?e.series.map(a=>({...a,value:qe(a.value,t),...typeof a.baseline=="number"?{baseline:qe(a.baseline,t)}:{}})):e.series,zoneBreakdown:e.zoneBreakdown.map(a=>Ne(a.unit)?{...a,value:qe(a.value,t)}:a)}}function ht(e,t){const s=Math.max(...e.series.map(N=>Math.max(N.value,N.baseline??0)),1),a=46,o=34,c=36,C=Math.max(e.series.length*(a+o)+c*2,620),O=228,U=184,X=132,q=[0,.25,.5,.75,1].map(N=>{const ne=Math.round(U-N*X);return`<line x1="${c-8}" y1="${ne}" x2="${C-18}" y2="${ne}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${N===0?"0":"3 3"}" />`}).join(""),K=e.series.map((N,ne)=>{const k=c+ne*(a+o),ie=Math.max(8,Math.round(N.value/s*X)),_=U-ie,Y=typeof N.baseline=="number"&&N.value>N.baseline*1.08,Q=Y?`<rect x="${k-8}" y="34" width="${a+16}" height="${U-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",ce=typeof N.baseline=="number"?`<line x1="${k-5}" y1="${Math.round(U-N.baseline/s*X)}" x2="${k+a+5}" y2="${Math.round(U-N.baseline/s*X)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",P=t&&(Y||ne===1)?`<g><title>${Y?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${k+a/2}" cy="18" r="7" fill="${Y?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${k+a/2}" y="21" text-anchor="middle" font-size="8.5" font-weight="600" fill="#fff">${Y?"!":"S"}</text></g>`:"",A=N.value>=1e4?`${(N.value/1e3).toFixed(1)}k`:N.value.toLocaleString("en-US");return`
        ${Q}
        ${ce}
        ${P}
        <g>
          <title>${N.label}：实测 ${N.value.toLocaleString("en-US")} ${e.unit}${N.baseline!==void 0?` / 基线 ${N.baseline.toLocaleString("en-US")} ${e.unit}`:""}</title>
          <rect x="${k}" y="${_}" width="${a}" height="${ie}" rx="7" fill="${Y?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${k+a/2}" y="${_-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${A}</text>
        <text x="${k+a/2}" y="${U+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${N.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${C} ${O}" style="width:100%; height:232px; display:block;" role="img" aria-label="${e.category} 趋势图">
      ${q}
      ${K}
    </svg>
  `}function ft(e,t){const s=e.connectivity==="offline";if(e.category==="hvac"){const a=Number(e.telemetry.setpoint?.value??24);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:s?[23.8,24,24.1,null,null,null,null,null]:[a+.8,a+.6,a+.3,a,a-.2,a+.1,a+.2,a],offline:s,colorIdx:t},{id:`${e.id}:setpoint`,deviceId:e.id,deviceName:e.name,pointKey:"setpoint",label:"设定温度",unit:"°C",points:s?[24,24,24,null,null,null,null,null]:[a,a,a,a,a,a,a,a],offline:s,colorIdx:t+1},{id:`${e.id}:valve`,deviceId:e.id,deviceName:e.name,pointKey:"valve",label:"冷阀开度",unit:"%",points:s?[42,46,51,null,null,null,null,null]:[20,24,38,62,74,68,52,30],offline:s,colorIdx:t+2}]}if(e.category==="lighting"){const a=Number(e.telemetry.dimming?.value??60);return[{id:`${e.id}:dimming`,deviceId:e.id,deviceName:e.name,pointKey:"dimming",label:"回路亮度",unit:"%",points:[0,0,Math.round(a*.8),a,a,Math.round(a*.6),a,Math.round(a*.9)],offline:s,colorIdx:t},{id:`${e.id}:power`,deviceId:e.id,deviceName:e.name,pointKey:"power",label:"实时功率",unit:"W",points:[12,12,220,285,290,175,280,245],offline:s,colorIdx:t+1}]}if(e.category==="sensor"){const a=Number(e.telemetry.temp?.value??23.4);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:[a-.5,a-.3,a,a+.3,a+.5,a+.2,a+.1,a],offline:s,colorIdx:t},{id:`${e.id}:co2`,deviceId:e.id,deviceName:e.name,pointKey:"co2",label:"CO₂ 浓度",unit:"ppm",points:[410,415,440,520,580,540,495,430],offline:s,colorIdx:t+1},{id:`${e.id}:humidity`,deviceId:e.id,deviceName:e.name,pointKey:"humidity",label:"相对湿度",unit:"%RH",points:[49,50,51,52,53,51,50,49],offline:s,colorIdx:t+2}]}return[{id:`${e.id}:latency`,deviceId:e.id,deviceName:e.name,pointKey:"latency",label:"心跳延迟",unit:"ms",points:[16,18,17,19,18,17,18,18],offline:s,colorIdx:t}]}function yt(e){const t=e.points.filter(O=>typeof O=="number");if(!t.length)return{min:"-",avg:"-",max:"-",curr:"离线"};const s=Math.min(...t),a=Math.max(...t),o=t.reduce((O,U)=>O+U,0)/t.length,c=e.points[e.points.length-1],C=O=>Math.abs(O)<100&&!Number.isInteger(O)?O.toFixed(1):Math.round(O).toString();return{min:C(s),avg:o.toFixed(Math.abs(o)<100?1:0),max:C(a),curr:typeof c=="number"?C(c):"离线"}}function $t(e,t,s){const a=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!e.length)return'<div class="lov-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧展开设备并勾选 1 个或多个测点以开始多点时序对比。</span></div>';const o=(C,O)=>{const _=[];for(const p of C)for(const j of p.points)typeof j=="number"&&_.push(j);const Y=_.length?Math.min(..._)*.92:0,Q=_.length?Math.max(..._)*1.08:100,ce=Math.max(Q-Y,1),P=[0,.5,1].map(p=>{const j=Math.round(26+106*(1-p)),G=(Y+ce*p).toFixed(ce<15?1:0);return`
          <line x1="44" y1="${j}" x2="662" y2="${j}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${p===0?"0":"3 3"}" />
          <text x="38" y="${j+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${G}</text>
        `}).join(""),A=a.map((p,j)=>`<text x="${44+j/(a.length-1)*618}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${p}</text>`).join(""),le=C.map((p,j)=>{const G=je[(p.colorIdx+j)%je.length],w=p.points,B=[];let ge=44,E=26+106/2,y=!1;w.forEach((D,l)=>{const L=44+l/(w.length-1)*618;if(typeof D=="number"){const V=26+106*(1-(D-Y)/ce);B.push(`${L.toFixed(1)},${V.toFixed(1)}`),ge=L,E=V}else y=!0});const x=s?w.map((D,l)=>{if(typeof D!="number")return null;const L=44+l/(w.length-1)*618,re=26+106*(1-(D*.96-Y)/ce);return`${L.toFixed(1)},${re.toFixed(1)}`}).filter(Boolean).join(" "):"";return`
          ${x?`<polyline fill="none" stroke="${G}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.42" points="${x}" />`:""}
          ${B.length?`<polyline fill="none" stroke="${G}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${B.join(" ")}" />`:""}
          ${y?`<line x1="${ge.toFixed(1)}" y1="${E.toFixed(1)}" x2="662" y2="${E.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${E-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),be=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${44+3/7*618}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${44+3/7*618}" y="14.8" text-anchor="middle" font-size="7.5" font-weight="600" fill="#fff">S</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${44+5/7*618}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${44+5/7*618}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `,se=C.map((p,j)=>{const G=je[(p.colorIdx+j)%je.length],w=yt(p);return`
          <tr>
            <td><span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:7px; height:7px; border-radius:50%; background:${G};"></span>${p.deviceName} · ${p.label}</span></td>
            <td><strong>${w.curr}</strong> <span class="pacom-row-sub">${p.unit}</span></td>
            <td>${w.min} <span class="pacom-row-sub">${p.unit}</span></td>
            <td>${w.avg} <span class="pacom-row-sub">${p.unit}</span></td>
            <td>${w.max} <span class="pacom-row-sub">${p.unit}</span></td>
          </tr>`}).join("");return`
      <div class="pacom-card" style="padding:14px 16px; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${O}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${C.map((p,j)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${je[(p.colorIdx+j)%je.length]};"></span>${p.deviceName}·${p.label}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${P}
          ${A}
          ${be}
          ${le}
        </svg>
        <div class="lov-table-wrap" style="border-top:var(--hw) solid var(--pacom-border-subtle); padding-top:6px;">
          <table class="lov-table" style="font-size:12px;">
            <thead><tr><th>测点</th><th>当前值</th><th>最小值 (Min)</th><th>平均值 (Avg)</th><th>最大值 (Max)</th></tr></thead>
            <tbody>${se}</tbody>
          </table>
        </div>
      </div>
    `};if(t==="shared")return o(e,"单图叠合对比（Shared）");const c=new Map;for(const C of e){const O=c.get(C.unit)??[];O.push(C),c.set(C.unit,O)}return Array.from(c.entries()).map(([C,O])=>o(O,`按单位分组泳道（${C}）`)).join("")}function wt(e){const t=[["时段",`数值 (${e.unit})`,`基线 (${e.unit})`].join(","),...e.series.map(c=>[c.label,String(c.value),c.baseline!==void 0?String(c.baseline):""].join(","))],s=new Blob([`\uFEFF${t.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(s),o=document.createElement("a");o.href=a,o.download=`pacom-${e.category}-${e.range}.csv`,o.click(),URL.revokeObjectURL(a)}function xt(e){const t=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],s=["时间",...e.map(O=>`${O.deviceName}·${O.label}(${O.unit})`)].join(","),a=t.map((O,U)=>[O,...e.map(X=>String(X.points[U]??"No Data"))].join(",")),o=new Blob([`\uFEFF${[s,...a].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(o),C=document.createElement("a");C.href=c,C.download="pacom-timeseries-export.csv",C.click(),URL.revokeObjectURL(c)}async function kt(e,t,s){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),o=a.get("tab"),c=a.get("cat"),C=a.get("device"),O=a.get("points"),U=a.get("mode"),X=a.get("interval");let q=o==="timeseries"?"timeseries":c&&De.some(x=>x.id===c)?c:"energy",K="7d",N="2026-11-16",ne="2026-11-23",k=r.floorId,ie="chart",_=!0,Y="breakdown",Q=!1,ce=null,P=await t.getFloorDevices(r.floorId).catch(()=>[]);const A=new Map,le=[];P.forEach((x,D)=>{const l=ft(x,D);A.set(x.id,l),le.push(...l)});let be=U==="shared"||U==="grouped"?U:"grouped",se=X==="15m"||X==="1h"||X==="1d"?X:"1h",p=!1;const j=[];if(O?O.split(",").forEach(x=>{le.some(D=>D.id===x)&&j.push(x)}):C&&A.has(C)&&(A.get(C)??[]).slice(0,2).forEach(x=>j.push(x.id)),!j.length){const x=P.find(L=>L.category==="hvac"),D=P.find(L=>L.category==="sensor"),l=P.find(L=>L.category==="lighting");x&&(A.get(x.id)??[]).slice(0,2).forEach(L=>j.push(L.id)),D&&(A.get(D.id)??[]).slice(0,1).forEach(L=>j.push(L.id)),l&&(A.get(l.id)??[]).slice(0,1).forEach(L=>j.push(L.id)),j.length||le.slice(0,3).forEach(L=>j.push(L.id))}const G=new Set(j),w=new Set(P.filter((x,D)=>D<2||(A.get(x.id)??[]).some(l=>G.has(l.id))).map(x=>x.id)),B=[{id:"fav-hvac",name:"E7F 空调温控与 CO₂ 联动对照",pointIds:le.filter(x=>x.pointKey==="temp"||x.pointKey==="setpoint"||x.pointKey==="co2").slice(0,4).map(x=>x.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度与功率对比",pointIds:le.filter(x=>x.pointKey==="dimming"||x.pointKey==="power").slice(0,4).map(x=>x.id),mode:"grouped",interval:"15m"}];let ge="";async function E(){const x=q==="timeseries"?"energy":q,D=K==="custom"?"30d":K;ce=await t.getAnalysisReport(x,D,r.floorId),y()}function y(){if(!ce)return;const x=q==="timeseries",D=q==="timeseries"?"energy":q,l=De.find(F=>F.id===D)??De[0],L=Pe.find(F=>F.id===k)??Pe[0],V=bt(ce,L.factor),re=V.zoneBreakdown.filter(F=>F.status==="warning"),he=vt[D],J=Math.max(...V.zoneBreakdown.map(F=>F.value),1),$e=le.filter(F=>G.has(F.id));e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:10px; min-width:0;">
              <h1 class="pacom-title" style="flex-shrink:0;">数据分析</h1>
              <div class="pacom-tabs" role="tablist" aria-label="分析维度">
                ${De.map(F=>`<button class="pacom-tab" role="tab" aria-selected="${q===F.id}" data-cat="${F.id}">${F.label}</button>`).join("")}
                <button class="pacom-tab" role="tab" aria-selected="${q==="timeseries"}" data-cat="timeseries">多点时序</button>
              </div>
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <div class="pacom-scope-pill" style="width:210px;" title="切换统计空间范围">
                <select name="analysisScope" data-scope-select aria-label="选择统计空间范围">
                  ${Pe.map(F=>`<option value="${F.id}" ${F.id===k?"selected":""}>${F.label}</option>`).join("")}
                </select>
                <span class="pacom-scope-chevron">${Ze}</span>
              </div>
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px; width:108px;">
                <option value="today" ${K==="today"?"selected":""}>今日</option>
                <option value="7d" ${K==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${K==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${K==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${x?"":`<button class="pacom-btn ${Q?"pacom-btn--primary":""}" data-toggle-canvas="1">${Q?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          ${K==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${N}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${ne}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${x?`
            <div class="lov-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:296px; min-width:272px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">设备 → 测点树</span>
                    <span class="pacom-row-sub">已选 ${$e.length} 个测点</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${B.map(F=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${F.id}">${ue("star",14)}<span style="overflow:hidden;text-overflow:ellipsis;">${F.name}</span></button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${P.map(F=>{const de=A.get(F.id)??[],m=w.has(F.id),b=de.filter(H=>G.has(H.id)).length;return`
                        <div style="display:flex; flex-direction:column; gap:2px;">
                          <button type="button" class="pacom-row" data-ts-expand="${F.id}" style="cursor:pointer; justify-content:space-between;" title="${F.name}">
                            <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
                              <span style="display:inline-flex; transition:transform 140ms ease; transform:rotate(${m?"0deg":"-90deg"}); opacity:0.65;">${Ze}</span>
                              <div style="min-width:0; flex:1; text-align:left;">
                                <div class="pacom-row-title" style="font-size:13px;">${F.name}</div>
                                <div class="pacom-row-sub">${de.length} 个测点 · ${F.connectivity==="online"?"在线":"离线"}</div>
                              </div>
                            </div>
                            ${b>0?`<span class="pacom-badge pacom-badge--accent">${b}</span>`:""}
                          </button>
                          ${m?`<div style="display:flex; flex-direction:column; gap:2px; padding-left:20px; padding-bottom:4px;">
                                  ${de.map(H=>{const ve=G.has(H.id),me=je[H.colorIdx%je.length];return`
                                        <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:5px 8px; border-radius:var(--pacom-radius-sm); cursor:pointer; font-size:12px; background:${ve?"var(--pacom-surface-recessed)":"transparent"};">
                                          <span style="display:inline-flex; align-items:center; gap:6px;">
                                            <input type="checkbox" name="tsPoint-${H.id}" data-ts-point="${H.id}" ${ve?"checked":""} />
                                            <span style="width:7px; height:7px; border-radius:50%; background:${me};"></span>
                                            <span style="color:var(--pacom-text-primary);">${H.label}</span>
                                          </span>
                                          <span class="pacom-row-sub">${H.unit}</span>
                                        </label>`}).join("")}
                                </div>`:""}
                        </div>`}).join("")}
                </div>
              </aside>
              <div class="lov-subnav-main" style="padding:2px 4px 24px;">
                ${ge?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${ge}</span></div>`:""}
                <div class="lov-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="lov-section-title">多测点实时遥测对比（Time Series）</h2>
                    <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:6px;">${ue("clock",12)} 排程(S) · ${ue("triangle-alert",12)} 告警(!) · 虚线为断流/上周同期</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>对比上周同期</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${p}" data-ts-compare="1" aria-label="叠加对比上周同期曲线">
                        <span class="lov-switch-thumb"></span>
                      </button>
                    </label>
                    <select class="pacom-select" name="tsInterval" data-ts-interval aria-label="采样粒度" style="height:28px; font-size:12px;">
                      <option value="15m" ${se==="15m"?"selected":""}>15 分钟</option>
                      <option value="1h" ${se==="1h"?"selected":""}>1 小时</option>
                      <option value="1d" ${se==="1d"?"selected":""}>1 天</option>
                    </select>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${be==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${be==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ts-share="1">复制分享链接</button>
                  </div>
                </div>
                ${$t($e,be,p)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="lov-kpi-strip" role="region" aria-label="核心统计指标">
                ${V.kpis.map(F=>{const de=gt(F.value,F.unit);return`
                      <div class="lov-kpi-cell" title="${de.title}">
                        <span class="lov-kpi-label">${F.label}</span>
                        <div class="lov-kpi-value">
                          <span>${de.value}</span>
                          ${de.unit?`<span class="lov-kpi-unit">${de.unit}</span>`:""}
                        </div>
                        <span class="lov-kpi-delta">${F.delta??"与基线持平"}</span>
                      </div>`}).join("")}
              </div>

              <section class="lov-section">
                <div class="lov-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="lov-section-title">${l?.label??"趋势"}趋势（${V.unit}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${L.label} · 更新于 ${V.updatedAt.slice(5,16).replace("T"," ")}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${_}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
                        <span class="lov-switch-thumb"></span>
                      </button>
                    </label>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${ie==="chart"}" data-chart-mode="chart">趋势图</button>
                      <button class="pacom-tab" aria-selected="${ie==="table"}" data-chart-mode="table">明细原表</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-card" style="gap:10px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                    <span class="pacom-row-sub">
                      ${re.length>0?`关注：${re.map(F=>F.zoneName).join("、")} 指标偏高，建议前往智能策略优化启停时段。`:`${l?.desc??"空间运行洞察"} · ${he.summary}`}
                    </span>
                    <button class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-strategy="1">去智能策略优化 →</button>
                  </div>
                  ${ie==="chart"?ht(V,_):`
                      <div class="lov-table-wrap">
                        <table class="lov-table">
                          <thead>
                            <tr>
                              <th>统计时段</th>
                              <th>实测值（${V.unit}）</th>
                              <th>基线参考</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${V.series.map(F=>{const de=typeof F.baseline=="number"&&F.value>F.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${F.label}</strong></td>
                                    <td>${F.value.toLocaleString("en-US")}</td>
                                    <td>${F.baseline!==void 0?F.baseline.toLocaleString("en-US"):"-"}</td>
                                    <td><span class="pacom-badge ${de?"pacom-badge--warning":"pacom-badge--online"}">${de?"超基线":"正常"}</span></td>
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
                    <span class="pacom-row-sub">${V.zoneBreakdown.length} 个功能区</span>
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
                          ${V.zoneBreakdown.map(F=>{const de=Math.max(8,Math.round(F.value/J*100));return`
                                <tr>
                                  <td style="font-weight:500;">${F.zoneName.replace(/^7F\s*/,"")}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${de}%; height:100%; border-radius:999px; background:${F.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${F.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${F.unit}</span></td>
                                  <td>
                                    <span class="pacom-badge ${F.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${F.status==="warning"?"偏高关注":"正常"}
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
                    <h2 class="lov-section-title">${Q?"E7F 空间对照预览":D==="energy"&&Y==="load"?"峰谷负荷分布（Load Profile）":he.title}</h2>
                    ${!Q&&D==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${Y==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${Y==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${Q?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${Q?'<img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
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
                        ${(D==="energy"&&Y==="load"?mt:he.items).map(F=>`
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                                <span style="font-weight:500; color:var(--pacom-text-primary);">${F.name}</span>
                                <span class="pacom-row-sub">${F.detail} · <strong style="color:var(--pacom-text-primary);">${F.pct}%</strong></span>
                              </div>
                              <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                <div style="width:${Math.min(100,F.pct)}%; height:100%; border-radius:999px; background:${F.color};"></div>
                              </div>
                            </div>`).join("")}`}
                  </div>
                </section>
              </div>
            </div>`}
      </div>
    `,e.querySelectorAll("[data-cat]").forEach(F=>{F.addEventListener("click",()=>{q=F.dataset.cat??"energy",ge="",q==="timeseries"?y():E()})}),e.querySelector("[data-scope-select]")?.addEventListener("change",F=>{k=F.currentTarget.value,y()}),e.querySelector("[data-range-select]")?.addEventListener("change",F=>{K=F.currentTarget.value??"7d",E()}),e.querySelector("[data-custom-start]")?.addEventListener("change",F=>{N=F.currentTarget.value}),e.querySelector("[data-custom-end]")?.addEventListener("change",F=>{ne=F.currentTarget.value}),e.querySelectorAll("[data-chart-mode]").forEach(F=>{F.addEventListener("click",()=>{ie=F.dataset.chartMode??"chart",y()})}),e.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{_=!_,y()}),e.querySelectorAll("[data-energy-right]").forEach(F=>{F.addEventListener("click",()=>{Y=F.dataset.energyRight??"breakdown",y()})}),e.querySelector("[data-export-csv]")?.addEventListener("click",()=>{x?xt($e):wt(V)}),e.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{Q=!Q,y()}),e.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),e.querySelectorAll("[data-ts-expand]").forEach(F=>{F.addEventListener("click",()=>{const de=F.dataset.tsExpand;de&&(w.has(de)?w.delete(de):w.add(de),y())})}),e.querySelectorAll("[data-ts-point]").forEach(F=>{F.addEventListener("change",()=>{const de=F.dataset.tsPoint;de&&(F.checked?G.add(de):G.delete(de),ge="",y())})}),e.querySelectorAll("[data-ts-mode]").forEach(F=>{F.addEventListener("click",()=>{be=F.dataset.tsMode??"grouped",y()})}),e.querySelector("[data-ts-interval]")?.addEventListener("change",F=>{se=F.currentTarget.value??"1h",y()}),e.querySelector("[data-ts-compare]")?.addEventListener("click",()=>{p=!p,y()}),e.querySelector("[data-ts-share]")?.addEventListener("click",()=>{const de=`#analysis?tab=timeseries&points=${encodeURIComponent(Array.from(G).join(","))}&mode=${be}&interval=${se}`,m=`${window.location.origin}${window.location.pathname}${de}`;navigator.clipboard?.writeText&&navigator.clipboard.writeText(m).catch(()=>{}),window.history.replaceState(null,"",de),ge=`已复制分享链接（含 ${G.size} 个测点、${be==="grouped"?"按单位分组":"单图叠合"}、${se} 粒度）。`,y()}),e.querySelectorAll("[data-load-fav]").forEach(F=>{F.addEventListener("click",()=>{const de=B.find(m=>m.id===F.dataset.loadFav);de&&(G.clear(),de.pointIds.forEach(m=>{G.add(m);const b=m.split(":")[0];b&&w.add(b)}),be=de.mode,se=de.interval,ge=`已加载收藏视图「${de.name}」。`,y())})}),e.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if(G.size===0)return;const F=`自定义对比 #${B.length+1}（${G.size} 测点）`;B.push({id:`fav-${Date.now()}`,name:F,pointIds:Array.from(G),mode:be,interval:se}),ge=`已保存当前时序配置为「${F}」。`,y()})}await E()}const St={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},It={frozen:"已冻结",draft:"草稿",delivered:"已交付"},_e=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"每层建议 2–3 个 Proxy，空旷 20–30m 或拐角可按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 避免广播干扰；自动生成 3 个回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度 0–10 级调光；自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造；支持通断控制"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay 保障吞吐"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"1 层 1 网标准配置，承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙/拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关接入，无需加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485/通讯管理机接入，记录厂家编码与表号"}],Be=[{id:"doc-hvac-7f",name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",name:"E7F_协议点位与蓝牙Mesh映射台账.xlsx",category:"点位台账",boundScope:"E栋 7F · 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}],Et={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function M(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Lt(e){return e.category==="gateway"?e.name.includes("蓝牙")?"蓝牙适配器":"主控网关":e.category==="lighting"?e.name.includes("702")?"702 照明":e.name.slice(0,6):e.category==="hvac"?e.name.includes("VAV")?"VAV-02":e.name.includes("FCU")?"FCU-01":e.name.slice(0,6):e.category==="sensor"?"环境传感":e.name.slice(0,6)}function jt(e,t){const s=e.status!=="connected",a=t.filter(o=>o.hardwareBinding?.protocol===e.protocol);return a.length>0?a.map(o=>{const c=o.connectivity==="offline"||s;return{pointName:o.category==="hvac"?"送风温度 / 阀门开度":o.category==="lighting"?"回路开关 / 亮度反馈":o.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:o.name,value:c?"无上报":o.category==="hvac"?"23.4°C · 62%":o.category==="lighting"?"开启 · 80%":o.category==="sensor"?"23.2°C · 640 ppm":"负载 24% · 18ms",interval:"60s",lastSeen:c?"46 分钟前":"12 秒前",quality:c?o.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${e.protocol.toUpperCase()} 采集通道汇总点`,deviceName:e.name,value:s?"采样延迟":"正常上报",interval:"60s",lastSeen:s?"38 分钟前":"9 秒前",quality:s?"delayed":"online"}]}async function At(e,t,s){const a=new URLSearchParams(window.location.hash.split("?")[1]??"").get("sec");let o=a==="floors"||a==="projects"?"projects":a==="connections"?"connections":a==="floorplan"||a==="inventory"||a==="devices"?"devices":"overview",c=a==="inventory"?"ledger_groups":"floorplan",C="device",O="all",U="ledger",X="mesh",q=await t.getSpatialTree(),K=[],N=[],ne=[];const k=[],ie=new Map,_=new Map,Y=[],Q={...Et},ce=[];let P=r.floorId,A=a==="floors"?{kind:"floor",id:r.floorId}:{kind:"building",id:r.buildingId},le=null,be=!1,se=!1,p=!1,j=!1,G=!1,w=null,B=null,ge=null,E=3,y=!1,x=[],D=null,l="",L="";const V=new Map([["dev-e7f-gw-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-02",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-env-01",{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}]]),re=[{id:"lm-1",deviceId:"dev-e7f-lt-01",channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],he=[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:r.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:r.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:r.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:r.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],J=new Map;function $e(){return[...q.floors,...k].map(n=>{const g=ie.get(n.id);return g?{...n,plan:{floorId:n.id,imageUrl:g,planVersion:(n.plan?.planVersion??0)+1,updatedAt:new Date().toISOString()}}:n})}function F(){return[...q.zones,...Y]}function de(n){return[...n===r.floorId?K:[],...ce.filter(z=>z.floorId===n)]}function m(n){return n?F().find(g=>g.id===n)?.name.replace(/^7F\s*/,"")??n:"未分配功能区"}async function b(){L="";const[n,g,z,T]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(r.floorId).catch(()=>[]),t.listConnections(r.projectId),t.listDeliveryBatches(r.floorId)]);q=n,K=g,N=z,ne=T;const ae=de(P);ae.some(oe=>oe.id===le)||(le=ae[0]?.id??null),be=ae.find(oe=>oe.id===le)?.physicalInstalled??!1,te()}function H(n){L="",n.connectivity==="offline"?L=`单机回读自检未通过（FAIL）：「${n.name}」当前离线，请核查网关链路或中继覆盖。`:l=`单机回读自检通过（PASS）：「${n.name}」指令下发与状态回读一致，已安全复位。`,te()}function ve(){L="";const n=de(P),g=n.filter($=>$.connectivity==="offline"),z=n.length-g.length,T=new Date;D={ranAt:`${String(T.getHours()).padStart(2,"0")}:${String(T.getMinutes()).padStart(2,"0")}:${String(T.getSeconds()).padStart(2,"0")}`,total:n.length,passed:z,failed:g.length,failedNames:g.map($=>$.name)},g.length>0?L=`全层批量自检完成：${z}/${n.length} 台通过，${g.length} 台异常（${g.map($=>$.name).join("、")}）。`:l=`全层批量自检全部通过（${z}/${n.length}），设备已自动安全复位。`,te()}function me(){const n=de(P),g=[],z=n.filter(d=>d.connectivity==="offline"),T=n.filter(d=>!d.planPoint),ae=n.filter(d=>V.get(d.id)?.proxy).length,$=n.filter(d=>V.get(d.id)?.relay).length,oe=n.length?$/n.length:0;z.length>0?z.forEach(d=>g.push({level:"fail",title:`节点不可达：${d.name}`,detail:"建议检查供电、通信端子，若属无线节点可在遮挡拐角处增设中继节点。",deviceId:d.id})):g.push({level:"ok",title:"全网节点可达性正常",detail:`${n.length} 台设备均正常响应心跳。`}),ae<1?g.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，方便现场 App 接入网络。"}):g.push({level:"ok",title:`代理节点配置合理（${ae} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),oe>.25&&n.length>=4&&g.push({level:"warn",title:`中继比例偏高（${Math.round(oe*100)}%）`,detail:"建议中继节点控制在总设备数 10% 左右，避免广播风暴。"}),T.length>0&&g.push({level:"warn",title:`尚有 ${T.length} 台未完成图纸标点`,detail:"请在「图纸标点」中补齐坐标以便施工定位。"}),x=g,l=`已完成蓝牙 Mesh 网络体检（检测 ${n.length} 台节点，发现 ${g.filter(d=>d.level!=="ok").length} 项关注）。`,te()}function we(){const n=de(P),g=[["设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...n.map($=>[$.name,$.category,m($.logicalZoneId),$.planPoint?`${Math.round($.planPoint.x*100)}%/${Math.round($.planPoint.y*100)}%`:"未标点",$.hardwareBinding?`${$.hardwareBinding.protocol} ${$.hardwareBinding.networkAddress}`:"未绑定",$.physicalInstalled?"已复核":"待复核",$.connectivity==="online"?"在线":"离线"].join(","))],z=new Blob([`\uFEFF${g.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),T=URL.createObjectURL(z),ae=document.createElement("a");ae.href=T,ae.download="pacom-deployment-inventory.csv",ae.click(),URL.revokeObjectURL(T)}function Le(n){const g=$e().filter(h=>h.buildingId===r.buildingId),z=g.filter(h=>!!h.plan).length,T=g.flatMap(h=>de(h.id)),ae=T.filter(h=>!!h.planPoint).length,$=T.filter(h=>h.connectivity==="online").length,oe=T.filter(h=>h.physicalInstalled).length,d=g.filter(h=>de(h.id).length>0&&!y).length;return`
      <div class="pacom-content-page" style="padding:4px 2px 24px;">
        <div class="lov-kpi-strip lov-kpi-strip--5" role="region" aria-label="整栋 5 步部署流水线">
          <button type="button" class="lov-kpi-cell ${z===g.length?"lov-gate-ok":"lov-gate-warn"}" data-jump-stage="projects" style="border:0; background:transparent; text-align:left; cursor:pointer;">
            <span class="lov-kpi-label">1. 空间与底图</span>
            <div class="lov-kpi-value">${z}<span class="lov-kpi-unit">/ ${g.length} 层</span></div>
            <span class="lov-kpi-delta">${z===g.length?"全部底图就绪":`尚缺 ${g.length-z} 层底图 →`}</span>
          </button>
          <button type="button" class="lov-kpi-cell ${ae===T.length?"lov-gate-ok":"lov-gate-warn"}" data-jump-stage="devices" data-jump-sub="floorplan" style="border:0; background:transparent; text-align:left; cursor:pointer;">
            <span class="lov-kpi-label">2. 云端标点与灯点</span>
            <div class="lov-kpi-value">${ae}<span class="lov-kpi-unit">/ ${T.length} 台</span></div>
            <span class="lov-kpi-delta">含 ${re.length} 处回路可视化灯点</span>
          </button>
          <button type="button" class="lov-kpi-cell ${$===T.length?"lov-gate-ok":"lov-gate-warn"}" data-jump-stage="devices" data-jump-sub="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
            <span class="lov-kpi-label">3. 入网与通信在线</span>
            <div class="lov-kpi-value">${$}<span class="lov-kpi-unit">/ ${T.length} 台</span></div>
            <span class="lov-kpi-delta">${T.length-$>0?`${T.length-$} 台离线待排查 →`:"全量在线"}</span>
          </button>
          <button type="button" class="lov-kpi-cell ${y?"lov-gate-warn":"lov-gate-ok"}" data-jump-stage="devices" data-jump-sub="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
            <span class="lov-kpi-label">4. 分组与边缘同步</span>
            <div class="lov-kpi-value">${d}<span class="lov-kpi-unit">/ ${g.length} 层</span></div>
            <span class="lov-kpi-delta">${y?"有变更待下发边缘 →":`已同步基线 v${E}`}</span>
          </button>
          <button type="button" class="lov-kpi-cell ${oe===T.length?"lov-gate-ok":"lov-gate-warn"}" data-jump-stage="devices" data-jump-sub="ledger_groups" style="border:0; background:transparent; text-align:left; cursor:pointer;">
            <span class="lov-kpi-label">5. 现场复核与自检</span>
            <div class="lov-kpi-value">${oe}<span class="lov-kpi-unit">/ ${T.length} 台</span></div>
            <span class="lov-kpi-delta">${oe===T.length?"可交付冻结":`待复核 ${T.length-oe} 台 →`}</span>
          </button>
        </div>

        <section class="lov-section">
          <div class="lov-section-head">
            <div>
              <h2 class="lov-section-title">楼层 × 工序交付门控矩阵（E栋）</h2>
              <span class="pacom-row-sub">点击任意未达标单元格，直接跳转到对应楼层与操作视图修复</span>
            </div>
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <button type="button" class="pacom-btn" data-export-inv="1">导出台账 (.csv)</button>
              <button type="button" class="pacom-btn" data-batch-ftt="1">一键全层自检 (FTT)</button>
              <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${n?"":"disabled"}>+ 生成交付冻结快照</button>
            </div>
          </div>
          <div class="lov-table-card">
            <div class="lov-table-wrap">
              <table class="lov-table">
                <thead>
                  <tr>
                    <th>楼层</th>
                    <th>1. 底图与分区</th>
                    <th>2. 设备标点</th>
                    <th>3. 在线入网</th>
                    <th>4. 边缘同步</th>
                    <th>5. 物理复核</th>
                    <th style="text-align:right;">交付状态</th>
                  </tr>
                </thead>
                <tbody>
                  ${g.map(h=>{const f=de(h.id),i=F().filter(v=>v.floorId===h.id),u=f.filter(v=>!!v.planPoint).length,R=f.filter(v=>v.connectivity==="online").length,I=f.filter(v=>v.physicalInstalled).length,ee=!!h.plan,pe=ee&&f.length>0&&u===f.length&&I===f.length&&R===f.length&&!y;return`
                        <tr>
                          <td><strong>E栋 ${M(h.name)}</strong><div class="pacom-row-sub">${h.areaSqm?`${h.areaSqm} m²`:"待补面积"}</div></td>
                          <td>
                            <button type="button" class="dep-matrix-btn" data-matrix-go="projects" data-matrix-floor="${M(h.id)}">
                              <span class="pacom-dot ${ee?"pacom-dot--online":"pacom-dot--offline"}"></span>
                              <span>${ee?`已传图 · ${i.length} 区`:"待上传底图"}</span>
                            </button>
                          </td>
                          <td>
                            <button type="button" class="dep-matrix-btn" data-matrix-go="devices:floorplan" data-matrix-floor="${M(h.id)}">
                              <span class="pacom-dot ${f.length>0&&u===f.length?"pacom-dot--online":f.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span>
                              <span>${f.length>0?`${u}/${f.length}`:"未标点"}</span>
                            </button>
                          </td>
                          <td>
                            <button type="button" class="dep-matrix-btn" data-matrix-go="devices:network_topo" data-matrix-floor="${M(h.id)}">
                              <span class="pacom-dot ${f.length>0&&R===f.length?"pacom-dot--online":f.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span>
                              <span>${f.length>0?`${R}/${f.length}`:"—"}</span>
                            </button>
                          </td>
                          <td>
                            <button type="button" class="dep-matrix-btn" data-matrix-go="devices:network_topo" data-matrix-floor="${M(h.id)}">
                              <span class="pacom-dot ${f.length===0?"pacom-dot--offline":y?"pacom-dot--warning":"pacom-dot--online"}"></span>
                              <span>${f.length===0?"—":y?"待同步":`已同步 v${E}`}</span>
                            </button>
                          </td>
                          <td>
                            <button type="button" class="dep-matrix-btn" data-matrix-go="devices:ledger_groups" data-matrix-floor="${M(h.id)}">
                              <span class="pacom-dot ${f.length>0&&I===f.length?"pacom-dot--online":f.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span>
                              <span>${f.length>0?`${I}/${f.length}`:"—"}</span>
                            </button>
                          </td>
                          <td style="text-align:right;">
                            <span class="pacom-badge ${pe?"pacom-badge--online":f.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">
                              ${pe?"可验收交付":f.length>0?"实施中":"待配置"}
                            </span>
                          </td>
                        </tr>`}).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        ${D?`<div class="lov-banner ${D.failed===0?"lov-banner--ok":"lov-banner--critical"}">
                <div class="lov-banner-text">
                  <span class="lov-banner-title">最近批量自检（FTT） · ${D.ranAt}</span>
                  <span class="lov-banner-sub">通过 ${D.passed}/${D.total} 台${D.failedNames.length?` · 异常：${D.failedNames.join("、")}`:" · 全部安全复位"}</span>
                </div>
              </div>`:""}

        <section class="lov-section">
          <div class="lov-section-head">
            <h2 class="lov-section-title">交付冻结基线记录</h2>
            <span class="pacom-row-sub">共 ${ne.length} 条冻结快照</span>
          </div>
          <div class="lov-table-card">
            <div class="lov-table-wrap">
              <table class="lov-table">
                <thead>
                  <tr><th>版本标签</th><th>现场核验进度</th><th>冻结人与备注</th><th>状态</th></tr>
                </thead>
                <tbody>
                  ${ne.map(h=>`
                      <tr>
                        <td><div style="font-weight:500;">${M(h.versionTag)}</div><div class="pacom-row-sub"><code>${M(h.id)}</code></div></td>
                        <td><strong>${h.verifiedCount}</strong> / ${h.deviceCount} 台</td>
                        <td><div>${M(h.frozenBy)}</div><div class="pacom-row-sub">${M(h.note??"-")}</div></td>
                        <td><span class="pacom-badge pacom-badge--accent">${It[h.status]??h.status}</span></td>
                      </tr>`).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    `}function ke(n){const g=$e(),z=F(),T=A.kind==="project"?q.projects.find(oe=>oe.id===A.id)??q.projects[0]:q.projects[0],ae=A.kind==="building"?q.buildings.find(oe=>oe.id===A.id)??q.buildings[0]:q.buildings[0],$=A.kind==="floor"?g.find(oe=>oe.id===A.id)??g[0]:null;return`
      <div class="dep-tree-layout">
        <aside class="dep-tree-card">
          <div class="pacom-pane-toolbar" style="padding:12px 14px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <strong style="font-size:13px; font-weight:500;">空间层级树</strong>
              <span class="pacom-row-sub">${g.length} 层 · ${z.length} 区</span>
            </div>
          </div>
          <div class="dep-tree-body">
            ${q.projects.map(oe=>{const d=q.buildings.filter(h=>h.projectId===oe.id);return`
                  <button type="button" class="dep-tree-node ${A.kind==="project"&&A.id===oe.id?"is-active":""}" data-tree-sel="project:${M(oe.id)}">
                    <span style="display:inline-flex; align-items:center; gap:6px;">${ue("building-2",14)}<span>${M(oe.name)}</span></span>
                    <span class="pacom-row-sub">${d.length} 栋</span>
                  </button>
                  ${d.map(h=>{const f=g.filter(i=>i.buildingId===h.id);return`
                        <button type="button" class="dep-tree-node ${A.kind==="building"&&A.id===h.id?"is-active":""}" style="padding-left:22px;" data-tree-sel="building:${M(h.id)}">
                          <span>${M(h.name)}</span>
                          <span class="pacom-row-sub">${f.length} 层</span>
                        </button>
                        ${f.map(i=>{const u=!!i.plan;return`
                              <button type="button" class="dep-tree-node ${A.kind==="floor"&&A.id===i.id?"is-active":""}" style="padding-left:38px;" data-tree-sel="floor:${M(i.id)}">
                                <span style="display:inline-flex; align-items:center; gap:6px;">
                                  <span class="pacom-dot ${u?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                  <span>${M(i.name)}</span>
                                </span>
                                <span class="pacom-row-sub" style="font-size:11px;">${u?"已传图":"待传图"}</span>
                              </button>`}).join("")}`}).join("")}`}).join("")}
          </div>
        </aside>

        <div class="dep-editor-scroll">
          ${A.kind==="project"&&T?`
              <section class="lov-section">
                <div class="lov-section-head">
                  <h2 class="lov-section-title">项目信息：${M(T.name)}</h2>
                  <span class="pacom-badge pacom-badge--accent">经纬度驱动气象与能耗基准</span>
                </div>
                <form class="lov-settings-card" data-save-project="1">
                  <div class="lov-setting-row">
                    <div class="lov-setting-meta"><span class="lov-setting-title">项目名称与城市</span><span class="lov-setting-desc">用于全局空间导航与多园区地图定位</span></div>
                    <div class="lov-setting-control"><input class="pacom-input" name="pName" value="${M(T.name)}" style="width:180px;" ${n?"":"disabled"} /><input class="pacom-input" name="pCity" value="${M(T.city??"广州市")}" style="width:120px;" ${n?"":"disabled"} /></div>
                  </div>
                  <div class="lov-setting-row">
                    <div class="lov-setting-meta"><span class="lov-setting-title">详细地址与地理坐标</span><span class="lov-setting-desc">精准定位气象站实况数据</span></div>
                    <div class="lov-setting-control"><input class="pacom-input" name="pAddr" value="${M(T.address??"")}" style="width:220px;" ${n?"":"disabled"} /><input class="pacom-input" name="pLngLat" value="113.3824, 23.0652" style="width:150px;" ${n?"":"disabled"} /></div>
                  </div>
                  <div class="lov-setting-row" style="justify-content:flex-end;">
                    <button type="submit" class="pacom-btn pacom-btn--primary" ${n?"":"disabled"}>保存项目配置</button>
                  </div>
                </form>
              </section>`:A.kind==="building"&&ae?`
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">楼宇与实景底图：${M(ae.name)}</h2>
                    <span class="pacom-row-sub">建筑面积 ${ae.areaSqm??"-"} m² · 地上 ${ae.aboveFloors} 层</span>
                  </div>
                  <div class="pacom-card" style="gap:14px;">
                    <div style="display:grid; grid-template-columns:minmax(0,1.2fr) minmax(240px,1fr); gap:16px; align-items:center;">
                      <div style="border-radius:12px; overflow:hidden; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                        <img src="${M(_.get(ae.id)??ae.imageUrl??"./media/building-e.png")}" alt="${M(ae.name)}" style="width:100%; max-height:240px; object-fit:contain; display:block;" />
                      </div>
                      <div class="dep-upload-drop">
                        <strong style="font-size:13px; font-weight:500;">上传 / 替换楼宇实景图</strong>
                        <span class="pacom-row-sub">支持 PNG / WebP / JPG，用于空间总览整栋视图与楼层轮廓标注</span>
                        <label class="pacom-btn" style="cursor:pointer;">
                          <span>选择本地图片</span>
                          <input type="file" accept="image/*" data-upload-bld="${M(ae.id)}" style="display:none;" ${n?"":"disabled"} />
                        </label>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">一键批量生成楼层（自动初始化 1 层 1 蓝牙 Mesh 网络）</h2>
                    <span class="pacom-row-sub">无需逐层建表或单独创建 Mesh 网络</span>
                  </div>
                  <form class="lov-settings-card" data-batch-floors="${M(ae.id)}">
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">起止楼层范围</span>
                        <span class="lov-setting-desc">例如输入 1 到 5 自动补齐 1F–5F，已存在楼层自动跳过</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" name="fromFloor" type="number" min="1" max="50" value="1" style="width:76px;" ${n?"":"disabled"} />
                        <span class="pacom-row-sub">F 至</span>
                        <input class="pacom-input" name="toFloor" type="number" min="1" max="50" value="5" style="width:76px;" ${n?"":"disabled"} />
                        <span class="pacom-row-sub">F</span>
                        <label style="display:inline-flex; align-items:center; gap:5px; font-size:12px; margin-left:6px;"><input type="checkbox" name="includeB1" checked ${n?"":"disabled"} />含 B1</label>
                        <label style="display:inline-flex; align-items:center; gap:5px; font-size:12px;"><input type="checkbox" name="includeRF" checked ${n?"":"disabled"} />含屋面 RF</label>
                        <button type="submit" class="pacom-btn pacom-btn--primary" ${n?"":"disabled"}>批量生成</button>
                      </div>
                    </div>
                  </form>
                </section>`:$?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="lov-section-title">楼层底图与分区：${M($.name)}</h2>
                        <span class="pacom-badge pacom-badge--online">蓝牙 Mesh 网络已就绪</span>
                      </div>
                      <button type="button" class="pacom-btn pacom-btn--primary" data-go-floor-deploy="${M($.id)}">进入本层图纸标点 →</button>
                    </div>
                    <div class="pacom-card" style="gap:14px;">
                      <div style="display:grid; grid-template-columns:minmax(0,1.35fr) minmax(240px,1fr); gap:16px; align-items:center;">
                        <div style="border-radius:12px; overflow:hidden; background:var(--pacom-surface-primary); min-height:200px; display:flex; align-items:center; justify-content:center; border:var(--hw) solid var(--pacom-border-subtle);">
                          ${$.plan?`<img src="${M($.plan.imageUrl)}" alt="${M($.name)} 平面图" style="width:100%; max-height:280px; object-fit:contain; display:block;" />`:'<span class="pacom-row-sub">暂未上传 2D 平面底图，请在右侧选择真实图纸</span>'}
                        </div>
                        <div class="dep-upload-drop">
                          <strong style="font-size:13px; font-weight:500;">${$.plan?"替换本层 2D 平面底图":"上传本层 2D 平面底图"}</strong>
                          <span class="pacom-row-sub">推荐清晰线条 PNG / WebP（宽度 ≤ 3000px，体积 ≤ 500KB 响应最佳）</span>
                          <label class="pacom-btn pacom-btn--primary" style="cursor:pointer;">
                            <span>选择真实平面图</span>
                            <input type="file" accept="image/*" data-upload-floor="${M($.id)}" style="display:none;" ${n?"":"disabled"} />
                          </label>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">本层功能区清单（也可在「图纸标点」中直接画区）</h2>
                      <span class="pacom-row-sub">${z.filter(oe=>oe.floorId===$.id).length} 个功能区</span>
                    </div>
                    <div class="lov-settings-card">
                      ${z.filter(oe=>oe.floorId===$.id).map(oe=>`
                          <div class="lov-setting-row" style="padding:11px 0;">
                            <div class="lov-setting-meta">
                              <span class="lov-setting-title">${M(oe.name)} <span class="pacom-badge pacom-badge--neutral">${M(oe.category)}</span></span>
                            </div>
                            <span class="pacom-row-sub">${de($.id).filter(d=>d.logicalZoneId===oe.id).length} 台设备</span>
                          </div>`).join("")}
                      <form class="lov-setting-row" style="padding:12px 0; gap:8px;" data-add-zone="${M($.id)}">
                        <input class="pacom-input" name="zoneName" placeholder="输入新功能区名称（如：东侧会议室）" required ${n?"":"disabled"} />
                        <select class="pacom-select" name="zoneCat" ${n?"":"disabled"}>
                          <option value="lab">实验区</option>
                          <option value="office">办公区</option>
                          <option value="meeting">会议室</option>
                          <option value="corridor">走廊/弱电</option>
                          <option value="utility">机房/设备间</option>
                        </select>
                        <button type="submit" class="pacom-btn" ${n?"":"disabled"}>+ 添加功能区</button>
                      </form>
                    </div>
                  </section>

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">竣工图纸与设备手册附件</h2>
                      <span class="pacom-row-sub">共 ${Be.length} 份工程文档</span>
                    </div>
                    <div class="lov-table-card">
                      <div class="lov-table-wrap">
                        <table class="lov-table">
                          <thead><tr><th>文档名称</th><th>类型</th><th>关联范围</th><th style="text-align:right;">操作</th></tr></thead>
                          <tbody>
                            ${Be.map(oe=>`
                              <tr>
                                <td><div style="font-weight:500;">${oe.name}</div><div class="pacom-row-sub">${oe.size} · ${oe.updatedAt}</div></td>
                                <td><span class="pacom-badge pacom-badge--neutral">${oe.category}</span></td>
                                <td><span class="pacom-row-sub">${oe.boundScope}</span></td>
                                <td style="text-align:right;"><button type="button" class="pacom-btn" data-preview-doc="${oe.id}">查阅</button></td>
                              </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}
        </div>
      </div>
    `}function Se(n){const g=$e().filter(v=>v.buildingId===r.buildingId),z=g.find(v=>v.id===P)??g[0],T=de(P),ae=F().filter(v=>v.floorId===P),$=T.find(v=>v.id===le)??null,oe=T.filter(v=>!v.physicalInstalled).length,d=T.filter(v=>!v.planPoint).length,h=T.filter(v=>O==="unverified"?!v.physicalInstalled:O==="unplaced"?!v.planPoint:!0),f=`
      <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap; flex-shrink:0;">
        <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
          <select class="pacom-select" data-pick-deploy-floor aria-label="切换部署楼层" style="height:30px; font-size:13px;">
            ${g.map(v=>`<option value="${M(v.id)}" ${v.id===P?"selected":""}>E栋 ${M(v.name)}${v.plan?"":"（待传底图）"}</option>`).join("")}
          </select>
          <div class="pacom-tabs" role="tablist" aria-label="设备部署子视图">
            <button type="button" class="pacom-tab" role="tab" aria-selected="${c==="floorplan"}" data-dev-sub="floorplan">图纸标点</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${c==="ledger_groups"}" data-dev-sub="ledger_groups">列表与分组</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${c==="network_topo"}" data-dev-sub="network_topo">网络与拓扑</button>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          ${c==="floorplan"?'<button type="button" class="pacom-btn" style="height:30px; font-size:13px;" data-export-inv="1">导出施工标点表</button>':""}
          ${c==="ledger_groups"?'<button type="button" class="pacom-btn pacom-btn--primary" style="height:30px; font-size:13px;" data-batch-ftt="1">一键全层自检 (FTT)</button>':""}
        </div>
      </div>
    `;if(c==="floorplan"){const v=$?V.get($.id)??{proxy:!1,relay:!1,meshUuid:`mesh-${P.slice(-4)}`}:null,W=$?re.filter(Z=>Z.deviceId===$.id):[];return`
        ${f}
        <section class="pacom-split" style="flex:1; min-height:0;">
          <aside class="pacom-left-pane" style="--pacom-sidebar-width:296px; min-width:276px;">
            <div class="pacom-pane-toolbar" style="padding:10px 12px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <strong style="font-size:13px; font-weight:500;">本层设备池（${T.length}）</strong>
                <button type="button" class="pacom-btn" style="height:26px; padding:0 8px; font-size:12px;" data-toggle-new-dev="1" ${n?"":"disabled"}>${p?"收起":"+ 标点设备"}</button>
              </div>
              ${p?`
                  <form data-create-dev="1" style="display:flex; flex-direction:column; gap:6px; padding:8px; border-radius:10px; background:var(--pacom-surface-primary);">
                    <input class="pacom-input" style="height:28px; font-size:12px;" name="devName" placeholder="设备名称（如：703 会议室三控面板）" required />
                    <select class="pacom-select" style="height:28px; font-size:12px;" name="devPreset">
                      ${_e.map(Z=>`<option value="${Z.key}">${Z.label}</option>`).join("")}
                    </select>
                    <select class="pacom-select" style="height:28px; font-size:12px;" name="devZone">
                      ${ae.map(Z=>`<option value="${M(Z.id)}">${M(Z.name)}</option>`).join("")}
                    </select>
                    <button type="submit" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;">加入并自动预设 Mesh 角色</button>
                  </form>`:""}
              <div class="lov-count-pills">
                <button type="button" class="lov-count-pill" style="height:24px; padding:0 8px; font-size:11px;" aria-pressed="${O==="all"}" data-dev-filter="all">全部 <span class="lov-count-num">${T.length}</span></button>
                <button type="button" class="lov-count-pill" style="height:24px; padding:0 8px; font-size:11px;" aria-pressed="${O==="unverified"}" data-dev-filter="unverified">待复核 <span class="lov-count-num">${oe}</span></button>
                <button type="button" class="lov-count-pill" style="height:24px; padding:0 8px; font-size:11px;" aria-pressed="${O==="unplaced"}" data-dev-filter="unplaced">未标点 <span class="lov-count-num">${d}</span></button>
              </div>
            </div>
            <div class="pacom-list" style="padding:6px;">
              ${h.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">当前筛选无设备</div>':h.map(Z=>`
                        <div class="pacom-row ${Z.id===le?"is-selected":""}" data-pick-dev="${M(Z.id)}" style="padding:8px;">
                          <div style="min-width:0;">
                            <div class="pacom-row-title" style="font-size:13px;">${M(Z.name)}</div>
                            <div class="pacom-row-sub">${M(m(Z.logicalZoneId))} · ${Z.physicalInstalled?"已复核":"待复核"}</div>
                          </div>
                          <span class="pacom-badge ${Z.planPoint?"pacom-badge--online":"pacom-badge--warning"}">
                            ${Z.planPoint?`${Math.round(Z.planPoint.x*100)}%,${Math.round(Z.planPoint.y*100)}%`:"未标点"}
                          </span>
                        </div>`).join("")}
            </div>
          </aside>

          <div class="pacom-splitter"></div>

          <main class="pacom-right-pane">
            <div class="pacom-canvas-dock" style="top:14px; bottom:auto; z-index:10;" role="group" aria-label="同图三合一画笔">
              <button type="button" class="pacom-dock-btn" aria-pressed="${C==="device"}" data-brush="device">设备标点</button>
              <button type="button" class="pacom-dock-btn" aria-pressed="${C==="light_marker"}" data-brush="light_marker">回路灯点（${re.length}）</button>
              <button type="button" class="pacom-dock-btn" aria-pressed="${C==="zone"}" data-brush="zone">功能区（${ae.length}）</button>
            </div>

            <div class="pacom-canvas-stage" data-role="deploy-stage" style="cursor:${se||C==="light_marker"?"crosshair":"default"};">
              ${z?.plan?`
                  <div class="pacom-canvas-viewport">
                    <div class="pacom-plan-wrap" data-role="deploy-plan">
                      <img class="pacom-plan-img" src="${M(z.plan.imageUrl)}" alt="${M(z.name)} 平面图" />
                      ${C==="zone"?ae.map(Z=>{const ye=Q[Z.id];return ye?`<div class="pacom-zone-hotspot is-active" style="left:${ye.left}%; top:${ye.top}%; width:${ye.width}%; height:${ye.height}%;"><span class="pacom-zone-tag">${M(Z.name.replace(/^7F\s*/,""))}</span></div>`:""}).join(""):""}
                      ${T.filter(Z=>Z.planPoint).map(Z=>`
                          <button type="button" class="pacom-pin ${Z.id===le?"is-selected":""} ${Z.connectivity==="offline"?"pacom-pin--offline":""}"
                            style="left:${(Z.planPoint.x*100).toFixed(2)}%; top:${(Z.planPoint.y*100).toFixed(2)}%;"
                            data-pick-dev="${M(Z.id)}" title="${M(Z.name)}">
                            <span class="pacom-dot ${Z.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                            <span>${M(Lt(Z))}</span>
                          </button>`).join("")}
                      ${C==="light_marker"||$?.category==="lighting"?re.filter(Z=>T.some(ye=>ye.id===Z.deviceId)).map(Z=>`
                                <span class="dep-light-dot" style="left:${(Z.x*100).toFixed(1)}%; top:${(Z.y*100).toFixed(1)}%;" title="${M(Z.label)}（${M(Z.channel)}）">
                                  ${ue("sparkles",12)}<span>${M(Z.label.slice(0,6))}</span>
                                </span>`).join(""):""}
                    </div>
                  </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
                      <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                      <button type="button" class="pacom-btn pacom-btn--primary" data-matrix-go="projects" data-matrix-floor="${M(P)}">前往项目配置上传真实底图 →</button>
                    </div>`}
            </div>

            ${$?`
                <aside class="pacom-drawer" style="width:336px;" aria-label="设备部署属性">
                  <div class="pacom-drawer-head">
                    <div style="min-width:0;">
                      <h2 class="pacom-drawer-title">${M($.name)}</h2>
                      <div class="pacom-row-sub">${M(m($.logicalZoneId))} · v${$.version}</div>
                    </div>
                    <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${ue("x",16)}</button>
                  </div>

                  <div style="display:flex; gap:6px; flex-wrap:wrap;">
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-toggle-place="1" ${n?"":"disabled"}>${se?"点击图纸定位中…":"点图更新坐标"}</button>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ping-dev="${M($.id)}">Ping 闪灯 5s</button>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ftt-test="1">单机自检</button>
                  </div>

                  ${$.category==="lighting"?`
                      <div class="pacom-control-box" style="gap:6px;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                          <span style="font-size:12px; font-weight:500;">回路可视化灯点（${W.length}）</span>
                          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:11px;" data-add-light-marker="${M($.id)}" ${n?"":"disabled"}>+ 添加灯点</button>
                        </div>
                        ${W.map(Z=>`
                            <div class="pacom-receipt-item" style="padding:6px 8px; font-size:12px;">
                              <span><strong>${M(Z.channel)}</strong> · ${M(Z.label)}</span>
                              <button type="button" class="pacom-btn pacom-btn--ghost" style="height:20px; padding:0 6px; font-size:11px;" data-del-light-marker="${M(Z.id)}" ${n?"":"disabled"}>删</button>
                            </div>`).join("")}
                      </div>`:""}

                  ${$.category!=="hvac"&&$.category!=="meter"&&v?`
                      <div class="pacom-control-box" style="gap:6px;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                          <span style="font-size:12px; font-weight:500;">蓝牙 Mesh 节点角色</span>
                          <code style="font-size:11px;">${M(v.meshUuid)}</code>
                        </div>
                        <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                          <span>Proxy 代理（建议每层 2–3 个）</span>
                          <button type="button" class="lov-switch" role="switch" aria-checked="${v.proxy}" data-toggle-mesh-role="proxy" data-mesh-dev="${M($.id)}" ${n?"":"disabled"}><span class="lov-switch-thumb"></span></button>
                        </div>
                        <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                          <span>Relay 中继（建议 ≤10%，面板默认关）</span>
                          <button type="button" class="lov-switch" role="switch" aria-checked="${v.relay}" data-toggle-mesh-role="relay" data-mesh-dev="${M($.id)}" ${n?"":"disabled"}><span class="lov-switch-thumb"></span></button>
                        </div>
                      </div>`:""}

                  <form data-role="binding-form" class="pacom-control-box" style="gap:8px;">
                    <span style="font-size:12px; font-weight:500;">硬件绑定与物理安装复核</span>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
                      <select class="pacom-select" style="height:28px; font-size:12px;" name="protocol" aria-label="通信协议">
                        ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(Z=>`<option value="${Z}" ${$.hardwareBinding?.protocol===Z?"selected":""}>${Z.toUpperCase()}</option>`).join("")}
                      </select>
                      <input class="pacom-input" style="height:28px; font-size:12px;" name="networkAddress" placeholder="网络地址/主题" value="${M($.hardwareBinding?.networkAddress??"")}" />
                    </div>
                    <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                      <input class="pacom-input" style="height:28px; font-size:12px;" name="portOrChannel" placeholder="端口/回路" value="${M($.hardwareBinding?.portOrChannel??"")}" />
                      <span style="display:inline-flex; align-items:center; gap:6px; font-size:12px; flex-shrink:0;">
                        <span>物理已复核</span>
                        <button type="button" class="lov-switch" role="switch" aria-checked="${be}" data-toggle-phys="1" ${n?"":"disabled"}><span class="lov-switch-thumb"></span></button>
                      </span>
                    </div>
                    <button class="pacom-btn pacom-btn--primary" type="submit" style="height:30px; font-size:13px;" ${n?"":"disabled"}>保存绑定与复核（v${$.version}）</button>
                  </form>
                </aside>`:""}
          </main>
        </section>
      `}if(c==="ledger_groups"){const v=he.filter(fe=>fe.track==="mesh_auto"),W=he.filter(fe=>fe.track==="cloud_biz"),Z=w?T.find(fe=>fe.id===w)??null:null,ye=Z?J.get(Z.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450}:null;return`
        ${f}
        <div class="pacom-content-page" style="padding:4px 2px 24px;">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">
            <div class="pacom-tabs">
              <button type="button" class="pacom-tab" aria-selected="${U==="ledger"}" data-ledger-mode="ledger">设备四态台账（${T.length}）</button>
              <button type="button" class="pacom-tab" aria-selected="${U==="groups"}" data-ledger-mode="groups">双轨分组管理（${he.length}）</button>
            </div>
            ${U==="groups"?`<button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-group="1" ${n?"":"disabled"}>${G?"收起表单":"+ 新建分组"}</button>`:""}
          </div>

          ${U==="ledger"?`
              ${Z&&ye?`
                  <form class="lov-settings-card" data-save-dev-params="${M(Z.id)}">
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">设备参数配置：${M(Z.name)}</span>
                        <span class="lov-setting-desc">人感自动关灯延时、光照度开关门限与三段亮度等级（0–10 级）</span>
                      </div>
                      <button type="button" class="pacom-drawer-close" data-close-param="1">${ue("x",16)}</button>
                    </div>
                    <div class="lov-setting-row" style="display:grid; grid-template-columns:repeat(4,1fr); gap:10px;">
                      <label class="pacom-field"><span>自动关灯延时(分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${ye.offDelayMin}" /></label>
                      <label class="pacom-field"><span>恢复自动延时(分)</span><input class="pacom-input" name="restoreMin" type="number" value="${ye.restoreMin}" /></label>
                      <label class="pacom-field"><span>开灯光感门限(lx)</span><input class="pacom-input" name="luxOn" type="number" value="${ye.luxOn}" /></label>
                      <label class="pacom-field"><span>关灯光感门限(lx)</span><input class="pacom-input" name="luxOff" type="number" value="${ye.luxOff}" /></label>
                    </div>
                    <div class="lov-setting-row" style="justify-content:flex-end;">
                      <button type="submit" class="pacom-btn pacom-btn--primary" ${n?"":"disabled"}>下发设备参数</button>
                    </div>
                  </form>`:""}
              <div class="lov-table-card">
                <div class="lov-table-wrap">
                  <table class="lov-table">
                    <thead>
                      <tr><th>设备与功能区</th><th>1. 图上标点</th><th>2. 网络绑定</th><th>3. 物理复核</th><th>4. 在线态</th><th style="text-align:right;">操作</th></tr>
                    </thead>
                    <tbody>
                      ${T.map(fe=>`
                          <tr>
                            <td><div style="font-weight:500;">${M(fe.name)}</div><div class="pacom-row-sub">${M(m(fe.logicalZoneId))} · v${fe.version}</div></td>
                            <td><span class="pacom-badge ${fe.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${fe.planPoint?`${Math.round(fe.planPoint.x*100)}%,${Math.round(fe.planPoint.y*100)}%`:"未标点"}</span></td>
                            <td><span class="pacom-badge ${fe.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${fe.hardwareBinding?fe.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                            <td><span class="pacom-badge ${fe.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${fe.physicalInstalled?"已复核":"待复核"}</span></td>
                            <td><span class="pacom-badge ${fe.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${fe.connectivity==="online"?"在线":"离线"}</span></td>
                            <td>
                              <div style="display:flex; justify-content:flex-end; gap:6px;">
                                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ping-dev="${M(fe.id)}">Ping</button>
                                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-open-param="${M(fe.id)}">参数</button>
                                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ftt-dev="${M(fe.id)}">自检</button>
                              </div>
                            </td>
                          </tr>`).join("")}
                    </tbody>
                  </table>
                </div>
              </div>`:`
              ${G?`
                  <form class="lov-settings-card" data-create-group="1">
                    <div class="lov-setting-row" style="display:grid; grid-template-columns:1fr 180px 180px auto; gap:8px; align-items:center;">
                      <input class="pacom-input" name="gName" placeholder="分组名称（如：7F 西侧办公区联动组）" required />
                      <select class="pacom-select" name="gTrack">
                        <option value="mesh_auto">端侧 Mesh 自治组（自动含蓝牙适配器）</option>
                        <option value="cloud_biz">云端业务分组（零蓝牙依赖）</option>
                      </select>
                      <select class="pacom-select" name="gType">
                        <option value="灯光联动组（传感-面板）">灯光联动组</option>
                        <option value="调光器群控组">调光器群控组</option>
                        <option value="空调业务组">空调业务组</option>
                        <option value="行政 / 标牌管控组">标牌 / 部门组</option>
                      </select>
                      <button type="submit" class="pacom-btn pacom-btn--primary">创建分组</button>
                    </div>
                  </form>`:""}
              <div class="lov-grid-2">
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">端侧蓝牙 Mesh 自治组（${v.length}）</h2>
                    <span class="pacom-badge pacom-badge--accent">自动纳入蓝牙适配器防漏报</span>
                  </div>
                  <div class="lov-settings-card">
                    ${v.map(fe=>`
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">${M(fe.name)} <span class="pacom-badge pacom-badge--neutral">${M(fe.groupType)}</span></span>
                            <span class="lov-setting-desc">成员 ${fe.deviceIds.length} 台 · 断网仍可端侧自治联动</span>
                          </div>
                          <div class="lov-setting-control">
                            <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-test-group="${M(fe.id)}">组控测试</button>
                          </div>
                        </div>`).join("")}
                  </div>
                </section>

                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">云端业务分组（${W.length}）</h2>
                    <span class="pacom-row-sub">空调 / 标牌 / 部门组，无需蓝牙配网</span>
                  </div>
                  <div class="lov-settings-card">
                    ${W.map(fe=>`
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">${M(fe.name)} <span class="pacom-badge pacom-badge--neutral">${M(fe.groupType)}</span></span>
                            <span class="lov-setting-desc">成员 ${fe.deviceIds.length} 台 · 供首页批控与标牌复用</span>
                          </div>
                          <div class="lov-setting-control">
                            <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-test-group="${M(fe.id)}">组控测试</button>
                          </div>
                        </div>`).join("")}
                  </div>
                </section>
              </div>`}
        </div>
      `}const i=T.filter(v=>v.category!=="hvac"&&v.category!=="meter"),u=i.filter(v=>V.get(v.id)?.proxy).length,R=i.filter(v=>V.get(v.id)?.relay).length,I=T.filter(v=>v.category==="gateway"),ee=T.filter(v=>V.get(v.id)?.relay||V.get(v.id)?.proxy),pe=T.filter(v=>v.category!=="gateway");return`
      ${f}
      <div class="pacom-content-page" style="padding:4px 2px 24px;">
        <div class="pacom-card" style="padding:14px 18px; gap:12px;">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
            <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
              <strong style="font-size:14px; font-weight:500;">本层蓝牙 Mesh 网络</strong>
              <span class="pacom-badge pacom-badge--online">协同锁空闲 · 可同步</span>
              <span class="pacom-row-sub">Mesh 节点 ${i.length} 台 · Proxy ${u} 个 · Relay ${R} 个 · 边缘基线 v${E}</span>
            </div>
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <button type="button" class="pacom-btn" data-run-mesh-check="1">一键网络体检</button>
              <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${n?"":"disabled"}>${y?"同步变更至边缘网关 *":"同步下发至边缘网关"}</button>
            </div>
          </div>
          ${x.length>0?`<div style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                  ${x.map(v=>`
                      <div class="pacom-receipt-item" style="padding:8px 10px;">
                        <div><strong>${M(v.title)}</strong> <span class="pacom-row-sub">· ${M(v.detail)}</span></div>
                        <span class="pacom-badge ${v.level==="ok"?"pacom-badge--online":v.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${v.level==="ok"?"通过":v.level==="warn"?"建议优化":"异常"}</span>
                      </div>`).join("")}
                </div>`:""}
        </div>

        <section class="lov-section">
          <div class="lov-section-head">
            <h2 class="lov-section-title">自动生成设备拓扑（点击节点可定位标点或发 Ping）</h2>
            <div class="pacom-tabs">
              <button type="button" class="pacom-tab" aria-selected="${X==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
              <button type="button" class="pacom-tab" aria-selected="${X==="business"}" data-topo-mode="business">业务联动与供能流向</button>
            </div>
          </div>

          ${X==="mesh"?`
              <div class="dep-topo-grid">
                <div class="dep-topo-col">
                  <strong style="font-size:13px; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器</strong>
                  ${I.map(v=>`
                      <button type="button" class="dep-topo-node ${v.connectivity==="offline"?"is-issue":""}" data-topo-jump="${M(v.id)}">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${M(v.name)}</strong><span class="pacom-badge pacom-badge--online">网桥中心</span></div>
                        <span class="pacom-row-sub">${M(v.hardwareBinding?.networkAddress??"-")} · 云边同步通道</span>
                      </button>`).join("")}
                </div>
                <div class="dep-topo-col">
                  <strong style="font-size:13px; color:var(--pacom-text-secondary);">2. 代理与中继骨架（Proxy / Relay）</strong>
                  ${ee.length===0?'<div class="pacom-row-sub">暂未启用中继或代理节点，请在图纸标点抽屉中为传感器开启。</div>':ee.map(v=>{const W=V.get(v.id);return`
                              <button type="button" class="dep-topo-node ${v.connectivity==="offline"?"is-issue":""}" data-topo-jump="${M(v.id)}">
                                <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${M(v.name)}</strong><span class="pacom-badge pacom-badge--accent">${W?.proxy?"Proxy":""}${W?.proxy&&W?.relay?" + ":""}${W?.relay?"Relay":""}</span></div>
                                <span class="pacom-row-sub">${M(m(v.logicalZoneId))}</span>
                              </button>`}).join("")}
                </div>
                <div class="dep-topo-col">
                  <strong style="font-size:13px; color:var(--pacom-text-secondary);">3. 末端节点（异常自动标红）</strong>
                  ${pe.map(v=>`
                      <button type="button" class="dep-topo-node ${v.connectivity==="offline"?"is-issue":""}" data-topo-jump="${M(v.id)}">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${M(v.name)}</strong><span class="pacom-badge ${v.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${v.connectivity==="online"?"在线":"离线"}</span></div>
                        <span class="pacom-row-sub">${M(m(v.logicalZoneId))} · ${M(v.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                      </button>`).join("")}
                </div>
              </div>`:`
              <div class="dep-topo-grid">
                <div class="dep-topo-col">
                  <strong style="font-size:13px; color:var(--pacom-text-secondary);">上游源头 / 传感触发</strong>
                  ${T.filter(v=>v.category==="sensor"||v.category==="gateway").map(v=>`
                      <button type="button" class="dep-topo-node" data-topo-jump="${M(v.id)}">
                        <strong>${M(v.name)}</strong>
                        <span class="pacom-row-sub">${v.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                      </button>`).join("")}
                </div>
                <div class="dep-topo-col">
                  <strong style="font-size:13px; color:var(--pacom-text-secondary);">受控末端（照明 / 暖通）</strong>
                  ${T.filter(v=>v.category==="lighting"||v.category==="hvac").map(v=>`
                      <button type="button" class="dep-topo-node ${v.connectivity==="offline"?"is-issue":""}" data-topo-jump="${M(v.id)}">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${M(v.name)}</strong><span class="pacom-badge ${v.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${v.connectivity==="online"?"正常":"离线"}</span></div>
                        <span class="pacom-row-sub">服务：${M(m(v.logicalZoneId))}</span>
                      </button>`).join("")}
                </div>
                <div class="dep-topo-col">
                  <strong style="font-size:13px; color:var(--pacom-text-secondary);">服务功能区（影响面）</strong>
                  ${ae.map(v=>{const W=T.filter(ye=>ye.logicalZoneId===v.id),Z=W.some(ye=>ye.connectivity==="offline");return`
                        <div class="dep-topo-node ${Z?"is-issue":""}" style="cursor:default;">
                          <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${M(v.name.replace(/^7F\s*/,""))}</strong><span class="pacom-badge ${Z?"pacom-badge--warning":"pacom-badge--online"}">${W.length} 台设备</span></div>
                          <span class="pacom-row-sub">${Z?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                        </div>`}).join("")}
                </div>
              </div>`}
        </section>
      </div>
    `}function Ce(n){const g=N.reduce(($,oe)=>$+oe.collectedPoints,0),z=N.reduce(($,oe)=>$+oe.calculatedPoints,0),T=N.filter($=>$.status==="connected").length,ae=N.filter($=>$.status!=="connected");return`
      <div class="pacom-content-page" style="padding:4px 2px 24px;">
        <div class="lov-kpi-strip" role="region" aria-label="系统接入健康度">
          <div class="lov-kpi-cell"><span class="lov-kpi-label">已连通网关通道</span><div class="lov-kpi-value">${T}<span class="lov-kpi-unit">/ ${N.length}</span></div><span class="lov-kpi-delta">含边缘网关与非 Mesh 子系统</span></div>
          <div class="lov-kpi-cell"><span class="lov-kpi-label">数据采集健康度</span><div class="lov-kpi-value">${N.length?Math.round(T/N.length*100):100}<span class="lov-kpi-unit">%</span></div><span class="lov-kpi-delta">区分网关断流与末端真故障</span></div>
          <div class="lov-kpi-cell"><span class="lov-kpi-label">原始采集点</span><div class="lov-kpi-value">${g}<span class="lov-kpi-unit">点</span></div><span class="lov-kpi-delta">协议直采实时遥测</span></div>
          <div class="lov-kpi-cell"><span class="lov-kpi-label">衍生计算点</span><div class="lov-kpi-value">${z}<span class="lov-kpi-unit">点</span></div><span class="lov-kpi-delta">能耗与聚合虚拟点位</span></div>
        </div>

        ${ae.length>0?`<div class="lov-banner lov-banner--critical">
                <div class="lov-banner-text">
                  <span class="lov-banner-title">检测到 ${ae.length} 条采集通道通信降级（${ae.map($=>$.name).join("、")}）</span>
                  <span class="lov-banner-sub">建议优先核查局域网 UDP/TCP 端口冲突、RS485 终端电阻与从站地址。</span>
                </div>
              </div>`:""}

        ${j?`
            <form class="lov-settings-card" data-create-conn="1">
              <div class="lov-setting-row">
                <div class="lov-setting-meta">
                  <span class="lov-setting-title">新增子系统接入通道</span>
                  <span class="lov-setting-desc">支持边缘网关、中央空调/线控网关、智能电表通讯机、空气质量与数字标牌（自动检测局域网端口冲突）</span>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-new-conn="1">${ue("x",16)}</button>
              </div>
              <div class="lov-setting-row" style="display:grid; grid-template-columns:1.2fr 160px 1fr auto; gap:8px; align-items:center;">
                <input class="pacom-input" name="cName" placeholder="通道名称（如：E栋 8F 中央空调网关）" required />
                <select class="pacom-select" name="cProto">
                  <option value="bacnet_ip">空调 / BACnet IP</option>
                  <option value="modbus_tcp">电表 / Modbus TCP</option>
                  <option value="modbus_rtu">RS485 / Modbus RTU</option>
                  <option value="dali">照明 / DALI-2</option>
                  <option value="mqtt">空气质量 / MQTT</option>
                </select>
                <input class="pacom-input" name="cEndpoint" placeholder="网关端点（如：10.7.8.20:47808）" required />
                <button type="submit" class="pacom-btn pacom-btn--primary">校验并接入</button>
              </div>
            </form>`:""}

        <section class="lov-section">
          <div class="lov-section-head">
            <div>
              <h2 class="lov-section-title">边缘网关与异构子系统接入清单</h2>
              <span class="pacom-row-sub">支持一键重启边缘服务、测试连通、展开查看传感器级三态数据质量</span>
            </div>
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <button type="button" class="pacom-btn" data-edge-restart="service" ${n?"":"disabled"}>重启边缘服务</button>
              <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-conn="1" ${n?"":"disabled"}>${j?"收起向导":"+ 新增接入通道"}</button>
            </div>
          </div>

          <div class="lov-table-card">
            <div class="lov-table-wrap">
              <table class="lov-table">
                <thead>
                  <tr><th>通道名称</th><th>协议</th><th>接入端点</th><th>点位规模</th><th>健康度</th><th style="text-align:right;">操作</th></tr>
                </thead>
                <tbody>
                  ${N.map($=>{const oe=St[$.status]??{label:$.status,cls:"pacom-badge--neutral"},d=$.status==="connected"?98:$.status==="degraded"?62:0,h=d>=75?"var(--pacom-status-online)":d>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",f=ge===$.id,i=f?jt($,K):[];return`
                        <tr>
                          <td><strong>${M($.name)}</strong></td>
                          <td><span class="pacom-badge pacom-badge--neutral">${$.protocol.toUpperCase()}</span></td>
                          <td><code style="font-size:12px;">${M($.endpoint)}</code></td>
                          <td>采集 ${$.collectedPoints} / 计算 ${$.calculatedPoints}</td>
                          <td style="min-width:130px;">
                            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                              <span class="pacom-badge ${oe.cls}">${oe.label}</span>
                              <span class="pacom-row-sub">${d}%</span>
                            </div>
                            <div class="lov-progress-track"><div class="lov-progress-fill" style="width:${d}%; background:${h};"></div></div>
                          </td>
                          <td>
                            <div style="display:flex; justify-content:flex-end; gap:6px;">
                              <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-expand-conn="${M($.id)}">${f?"收起点位":"点位质量"}</button>
                              <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ping-conn="${M($.id)}">测通</button>
                              <button type="button" class="pacom-btn pacom-btn--ghost" style="height:28px; font-size:12px;" data-copy-endpoint="${M($.id)}" data-endpoint-val="${M($.endpoint)}">${B===$.id?"已复制":"复制"}</button>
                            </div>
                          </td>
                        </tr>
                        ${f?`
                            <tr class="lov-table-detail-row">
                              <td colspan="6">
                                <div style="display:flex; flex-direction:column; gap:6px;">
                                  <div style="display:flex; justify-content:space-between; font-size:12px;">
                                    <strong>传感器 / 子设备采集质量明细（${M($.name)}）</strong>
                                    <span class="pacom-row-sub">在线正常 · 延迟 &gt;30m · 断流 &gt;3×间隔</span>
                                  </div>
                                  ${i.map(u=>`
                                      <div class="pacom-receipt-item">
                                        <span><strong>${M(u.deviceName)}</strong> · ${M(u.pointName)}</span>
                                        <span style="display:inline-flex; align-items:center; gap:8px;">
                                          <span class="pacom-row-sub">当前 ${M(u.value)} · ${M(u.lastSeen)}</span>
                                          <span class="pacom-badge ${u.quality==="online"?"pacom-badge--online":u.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                            ${u.quality==="online"?"在线正常":u.quality==="delayed"?"延迟 >30m":"断流"}
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
        </section>
      </div>
    `}function te(){const n=s.scope.canEditDeployment;e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">系统部署</h1>
              <div class="pacom-tabs" role="tablist" aria-label="系统部署阶段">
                <button type="button" class="pacom-tab" role="tab" aria-selected="${o==="overview"}" data-main-stage="overview">部署总览</button>
                <button type="button" class="pacom-tab" role="tab" aria-selected="${o==="projects"}" data-main-stage="projects">项目配置</button>
                <button type="button" class="pacom-tab" role="tab" aria-selected="${o==="devices"}" data-main-stage="devices">设备部署</button>
                <button type="button" class="pacom-tab" role="tab" aria-selected="${o==="connections"}" data-main-stage="connections">系统接入</button>
              </div>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">广实2号园 · E栋</span>
              <span class="pacom-badge ${n?"pacom-badge--online":"pacom-badge--warning"}">${n?"可编辑":"只读"}</span>
            </div>
          </div>
        </header>

        ${l?`<div class="lov-banner lov-banner--ok" style="flex-shrink:0;"><span class="lov-banner-title">${M(l)}</span></div>`:""}
        ${L?`<div class="pacom-alert-banner" style="flex-shrink:0;">${M(L)}</div>`:""}

        ${o==="overview"?Le(n):o==="projects"?ke(n):o==="devices"?Se(n):Ce(n)}
      </div>
    `,Fe()}function Fe(){e.querySelectorAll("[data-main-stage]").forEach(n=>{n.addEventListener("click",()=>{o=n.dataset.mainStage??"overview",l="",L="",te()})}),e.querySelectorAll("[data-jump-stage]").forEach(n=>{n.addEventListener("click",()=>{o=n.dataset.jumpStage??"overview",n.dataset.jumpSub&&(c=n.dataset.jumpSub),te()})}),e.querySelectorAll("[data-matrix-go]").forEach(n=>{n.addEventListener("click",()=>{const g=n.dataset.matrixGo??"projects",z=n.dataset.matrixFloor;z&&(P=z),g==="projects"?(o="projects",z&&(A={kind:"floor",id:z})):g.startsWith("devices:")&&(o="devices",c=g.split(":")[1]??"floorplan"),te()})}),e.querySelectorAll("[data-tree-sel]").forEach(n=>{n.addEventListener("click",()=>{const[g,z]=(n.dataset.treeSel??"").split(":");(g==="project"||g==="building"||g==="floor")&&z&&(A={kind:g,id:z},g==="floor"&&(P=z),te())})}),e.querySelector("[data-save-project]")?.addEventListener("submit",n=>{n.preventDefault(),l="项目基础信息与经纬度坐标已更新。",te()}),e.querySelector("[data-upload-bld]")?.addEventListener("change",n=>{const g=n.currentTarget,z=g.dataset.uploadBld,T=g.files?.[0];if(!z||!T)return;const ae=new FileReader;ae.onload=()=>{typeof ae.result=="string"&&(_.set(z,ae.result),l=`已更新楼宇实景图「${T.name}」。`,te())},ae.readAsDataURL(T)}),e.querySelector("[data-upload-floor]")?.addEventListener("change",n=>{const g=n.currentTarget,z=g.dataset.uploadFloor,T=g.files?.[0];if(!z||!T)return;const ae=new FileReader;ae.onload=()=>{typeof ae.result=="string"&&(ie.set(z,ae.result),l=`已上传本层真实 2D 平面底图「${T.name}」，可立即进入图纸标点。`,te())},ae.readAsDataURL(T)}),e.querySelector("[data-batch-floors]")?.addEventListener("submit",n=>{n.preventDefault();const g=n.currentTarget.dataset.batchFloors,z=new FormData(n.currentTarget),T=Number(z.get("fromFloor")??1),ae=Number(z.get("toFloor")??5),$=new Set($e().filter(d=>d.buildingId===g).map(d=>d.name));let oe=0;for(let d=Math.min(T,ae);d<=Math.max(T,ae);d+=1){const h=`${d}F`;$.has(h)||(k.push({id:`floor-${g}-above-${d}`,buildingId:g,kind:"above",level:d,name:h,plan:null}),oe+=1)}z.get("includeB1")&&!$.has("B1")&&(k.push({id:`floor-${g}-below-1`,buildingId:g,kind:"below",level:-1,name:"B1",plan:null}),oe+=1),z.get("includeRF")&&!$.has("RF")&&(k.push({id:`floor-${g}-roof-1`,buildingId:g,kind:"roof",level:99,name:"RF",plan:null}),oe+=1),l=oe>0?`已批量新增 ${oe} 个楼层，并自动初始化各层默认蓝牙 Mesh 网络。`:"所选范围楼层均已存在，未重复创建。",te()}),e.querySelector("[data-add-zone]")?.addEventListener("submit",n=>{n.preventDefault();const g=n.currentTarget.dataset.addZone,z=new FormData(n.currentTarget),T=String(z.get("zoneName")??"").trim(),ae=String(z.get("zoneCat")??"office");if(!T)return;const $=`zone-custom-${Date.now().toString(36)}`;Y.push({id:$,floorId:g,name:T,category:ae}),Q[$]={left:20,top:20,width:24,height:24},l=`已添加功能区「${T}」。`,te()}),e.querySelector("[data-go-floor-deploy]")?.addEventListener("click",n=>{const g=n.currentTarget.dataset.goFloorDeploy;g&&(P=g),o="devices",c="floorplan",te()}),e.querySelector("[data-pick-deploy-floor]")?.addEventListener("change",n=>{P=n.currentTarget.value,le=de(P)[0]?.id??null,te()}),e.querySelectorAll("[data-dev-sub]").forEach(n=>{n.addEventListener("click",()=>{c=n.dataset.devSub??"floorplan",te()})}),e.querySelectorAll("[data-brush]").forEach(n=>{n.addEventListener("click",()=>{C=n.dataset.brush??"device",te()})}),e.querySelectorAll("[data-dev-filter]").forEach(n=>{n.addEventListener("click",()=>{O=n.dataset.devFilter??"all",te()})}),e.querySelector("[data-toggle-new-dev]")?.addEventListener("click",()=>{p=!p,te()}),e.querySelector("[data-create-dev]")?.addEventListener("submit",n=>{n.preventDefault();const g=new FormData(n.currentTarget),z=String(g.get("devName")??"").trim(),T=String(g.get("devPreset")??"sensor"),ae=String(g.get("devZone")??"")||null,$=_e.find(d=>d.key===T)??_e[0],oe=`dev-custom-${Date.now().toString(36)}`;ce.push({id:oe,name:z,category:$.category,projectId:r.projectId,buildingId:r.buildingId,floorId:P,logicalZoneId:ae,planPoint:{floorId:P,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}}),V.set(oe,{proxy:$.defaultProxy,relay:$.defaultRelay,meshUuid:`mesh-${P.slice(-4)}`}),$.category==="lighting"&&re.push({id:`lm-${Date.now().toString(36)}`,deviceId:oe,channel:"回路 1",label:`${z.slice(0,6)}主灯`,x:.52,y:.45}),le=oe,p=!1,y=!0,l=`已新增「${z}」（${$.hint}），已标注默认点位并标记待同步边缘。`,te()}),e.querySelectorAll("[data-pick-dev]").forEach(n=>{n.addEventListener("click",g=>{g.stopPropagation(),le=n.dataset.pickDev??null,be=de(P).find(T=>T.id===le)?.physicalInstalled??!1,te()})}),e.querySelector("[data-close-sel]")?.addEventListener("click",()=>{le=null,se=!1,te()}),e.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{se=!se,te()}),e.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{be=!be,te()}),e.querySelectorAll("[data-ping-dev]").forEach(n=>{n.addEventListener("click",()=>{const g=de(P).find(z=>z.id===n.dataset.pingDev);g&&(l=`已向「${g.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,te())})}),e.querySelector("[data-add-light-marker]")?.addEventListener("click",n=>{const g=n.currentTarget.dataset.addLightMarker,z=re.filter(T=>T.deviceId===g).length+1;re.push({id:`lm-${Date.now().toString(36)}`,deviceId:g,channel:`回路 ${z}`,label:`照明点位 ${z}`,x:Math.min(.86,.35+z*.1),y:.42}),C="light_marker",l=`已新增「回路 ${z}」可视化灯点，可在图纸上直观查看覆盖位置。`,te()}),e.querySelectorAll("[data-del-light-marker]").forEach(n=>{n.addEventListener("click",()=>{const g=re.findIndex(z=>z.id===n.dataset.delLightMarker);g>=0&&re.splice(g,1),te()})}),e.querySelectorAll("[data-toggle-mesh-role]").forEach(n=>{n.addEventListener("click",()=>{const g=n.dataset.meshDev,z=n.dataset.toggleMeshRole,T=V.get(g)??{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"};T[z]=!T[z],V.set(g,T),y=!0,l=`已更新节点 ${z.toUpperCase()} 状态，记得在「网络与拓扑」中同步下发至边缘网关。`,te()})}),e.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async n=>{const g=de(P).find($=>$.id===le);if(!se||!g)return;const z=n.currentTarget.getBoundingClientRect(),T=Math.max(.02,Math.min(.98,(n.clientX-z.left)/z.width)),ae=Math.max(.02,Math.min(.98,(n.clientY-z.top)/z.height));if(ce.some($=>$.id===g.id)){g.planPoint={floorId:P,planVersion:1,x:Number(T.toFixed(4)),y:Number(ae.toFixed(4))},se=!1,l=`已更新「${g.name}」图上坐标。`,te();return}try{await t.updateDevicePlanPoint({deviceId:g.id,floorId:r.floorId,planVersion:g.planPoint?.planVersion??1,x:T,y:ae,expectedVersion:g.version}),se=!1,l=`已更新「${g.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await b()}catch($){L=$ instanceof Error?$.message:String($),te()}}),e.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async n=>{n.preventDefault();const g=de(P).find(T=>T.id===le);if(!g)return;const z=new FormData(n.currentTarget);if(ce.some(T=>T.id===g.id)){g.physicalInstalled=be,g.hardwareBinding={gatewayId:"dev-e7f-gw-01",protocol:String(z.get("protocol")),networkAddress:String(z.get("networkAddress")??""),portOrChannel:String(z.get("portOrChannel")??""),boundAt:new Date().toISOString(),boundBy:s.displayName},g.version+=1,y=!0,l=`已保存「${g.name}」的硬件绑定与物理复核状态。`,te();return}try{await t.updateDeviceHardwareBinding({deviceId:g.id,gatewayId:g.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(z.get("protocol")),networkAddress:String(z.get("networkAddress")??""),portOrChannel:String(z.get("portOrChannel")??""),physicalInstalled:be,expectedVersion:g.version}),y=!0,l=`已保存「${g.name}」的硬件绑定与物理安装复核状态。`,await b()}catch(T){L=T instanceof Error?T.message:String(T),te()}}),e.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const n=de(P).find(g=>g.id===le);n&&H(n)}),e.querySelectorAll("[data-ftt-dev]").forEach(n=>{n.addEventListener("click",()=>{const g=de(P).find(z=>z.id===n.dataset.fttDev);g&&H(g)})}),e.querySelectorAll("[data-batch-ftt]").forEach(n=>{n.addEventListener("click",()=>ve())}),e.querySelectorAll("[data-export-inv]").forEach(n=>{n.addEventListener("click",()=>we())}),e.querySelectorAll("[data-ledger-mode]").forEach(n=>{n.addEventListener("click",()=>{U=n.dataset.ledgerMode??"ledger",te()})}),e.querySelectorAll("[data-open-param]").forEach(n=>{n.addEventListener("click",()=>{w=n.dataset.openParam??null,te()})}),e.querySelector("[data-close-param]")?.addEventListener("click",()=>{w=null,te()}),e.querySelector("[data-save-dev-params]")?.addEventListener("submit",n=>{n.preventDefault();const g=n.currentTarget.dataset.saveDevParams,z=new FormData(n.currentTarget);J.set(g,{offDelayMin:Number(z.get("offDelayMin")??15),restoreMin:Number(z.get("restoreMin")??30),luxOn:Number(z.get("luxOn")??280),luxOff:Number(z.get("luxOff")??450),defaultDim:8,midDim:4,minDim:0}),w=null,y=!0,l="设备自治延时与光感门限参数已下发并同步至配置基线。",te()}),e.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{G=!G,te()}),e.querySelector("[data-create-group]")?.addEventListener("submit",n=>{n.preventDefault();const g=new FormData(n.currentTarget),z=String(g.get("gName")??"").trim(),T=g.get("gTrack")??"mesh_auto",ae=String(g.get("gType")??"灯光联动组");z&&(he.unshift({id:`grp-${Date.now().toString(36)}`,track:T,groupType:ae,name:z,floorId:P,includesAdapter:T==="mesh_auto",deviceIds:T==="mesh_auto"?["dev-e7f-gw-01"]:[]}),G=!1,T==="mesh_auto"&&(y=!0),l=`已新建${T==="mesh_auto"?"端侧蓝牙 Mesh 自治组（已自动纳入蓝牙适配器）":"云端业务分组"}「${z}」。`,te())}),e.querySelectorAll("[data-test-group]").forEach(n=>{n.addEventListener("click",()=>{const g=he.find(z=>z.id===n.dataset.testGroup);g&&(l=`已向分组「${g.name}」发送群组试控指令，${g.deviceIds.length} 台成员回读正常。`,te())})}),e.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>me()),e.querySelector("[data-sync-edge]")?.addEventListener("click",()=>{E+=1,y=!1,l=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${E}）。`,te()}),e.querySelectorAll("[data-topo-mode]").forEach(n=>{n.addEventListener("click",()=>{X=n.dataset.topoMode??"mesh",te()})}),e.querySelectorAll("[data-topo-jump]").forEach(n=>{n.addEventListener("click",()=>{le=n.dataset.topoJump??null,c="floorplan",te()})}),e.querySelector("[data-toggle-new-conn]")?.addEventListener("click",()=>{j=!j,te()}),e.querySelector("[data-create-conn]")?.addEventListener("submit",n=>{n.preventDefault();const g=new FormData(n.currentTarget),z=String(g.get("cName")??"").trim(),T=String(g.get("cProto")??"bacnet_ip"),ae=String(g.get("cEndpoint")??"").trim();if(N.some($=>$.endpoint===ae)){L=`端口冲突警告：局域网端点「${ae}」已被其他通道占用，请更换端口后重试。`,te();return}N.unshift({id:`conn-${Date.now().toString(36)}`,projectId:r.projectId,buildingId:r.buildingId,floorId:P,name:z,protocol:T,endpoint:ae,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()}),j=!1,L="",l=`已接入「${z}」（${ae}），连通测试通过（18 ms）。`,te()}),e.querySelector("[data-edge-restart]")?.addEventListener("click",()=>{l="已下发「重启边缘服务」指令，边缘网关服务将在 5 秒内平滑重连。",te()}),e.querySelectorAll("[data-expand-conn]").forEach(n=>{n.addEventListener("click",()=>{const g=n.dataset.expandConn??null;ge=ge===g?null:g,te()})}),e.querySelectorAll("[data-ping-conn]").forEach(n=>{n.addEventListener("click",()=>{const g=N.find(z=>z.id===n.dataset.pingConn);g&&(L="",g.status==="connected"?l=`连通测试通过：「${g.name}」（${g.endpoint}）响应正常，延迟 18 ms。`:L=`连通测试异常：「${g.name}」（${g.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,te())})}),e.querySelectorAll("[data-copy-endpoint]").forEach(n=>{n.addEventListener("click",async()=>{const g=n.dataset.endpointVal??"",z=n.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(g),B=z,te(),window.setTimeout(()=>{B=null,te()},1600)}catch{}})}),e.querySelectorAll("[data-preview-doc]").forEach(n=>{n.addEventListener("click",()=>{const g=Be.find(z=>z.id===n.dataset.previewDoc);g&&(l=`已调阅工程附件「${g.name}」（关联范围：${g.boundScope}，更新于 ${g.updatedAt}）。`,te())})}),e.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const n=await t.freezeDeliveryBatch(r.floorId,"部署总览验收发起交付冻结");l=`已生成交付冻结快照 ${n.versionTag}（核验 ${n.verifiedCount}/${n.deviceCount}）。`,await b()}catch(n){L=n instanceof Error?n.message:String(n),te()}})}await b()}function Ge(e){if(e.connectivity==="offline")return`${e.name.includes("VAV")?"VAV-02":e.name.slice(0,6)} 离线`;if(e.category==="lighting"){const t=e.name.includes("702")?"702 照明":"主照明",s=Number(e.telemetry.dimming?.value??0);return s>0?`${t} ${s}%`:`${t} 关`}return e.category==="hvac"?`${e.name.includes("VAV")?"VAV-02":"FCU-01"} ${e.telemetry.setpoint?.value??24}°C`:e.category==="sensor"?`环境 ${e.telemetry.temp?.value??"23.4"}°C`:e.category==="gateway"?"主控网关":e.name.slice(0,6)}const Ke={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},Ct={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},Ye=ue("chevron-down",12),Ft={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function S(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Qe(e){const t=e.match(/(-?\d+)/);if(!t)return 0;const s=Number(t[1]);return e.toUpperCase().startsWith("B")?-Math.abs(s):s}async function Mt(e,t,s){const a=await t.getSpatialTree(),o=t.mode==="demo",c=s.scope.canControlDevices,C=s.scope.canManageAlarms,O=s.scope.allowedZoneIds?.length?s.scope.allowedZoneIds:null,U=a.floors.filter(d=>s.scope.allowedFloorIds.includes(d.id)),X=O||a.projects.length<=1&&a.buildings.length<=1&&U.length<=1?"floors-only":a.projects.length>1?"multi-project":a.buildings.length>1?"single-project-multi-building":"single-building",q=X==="multi-project",K=X==="multi-project"||X==="single-project-multi-building",N=X!=="floors-only",ne=X==="floors-only"&&U.length<=1;let k={level:"floor",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId},ie="devices",_=!1,Y=!1,Q="",ce="",P="all",A="all";const le=new URLSearchParams(window.location.hash.split("?")[1]??""),be=le.get("device"),se=le.get("zone");let p=be,j=!!be,G="control",w="",B=!1,ge="today",E="devices";const y=new Set,x=new Set;let D=[],l=[],L=[],V=null,re=null,he=1,J=0,$e=0,F=null;function de(){return a.zones.filter(d=>!(k.level==="floor"&&d.floorId!==k.floorId||O&&!O.includes(d.id)))}function m(d){return[...a.floors.filter(f=>f.buildingId!==d?!1:X==="floors-only"?s.scope.allowedFloorIds.includes(f.id):!0)].sort((f,i)=>Qe(i.name)-Qe(f.name))}async function b(d,h=!1){let f=d;f.level==="all-projects"&&!q&&(f={level:"project",projectId:a.projects[0]?.id??r.projectId}),f.level==="project"&&!K&&(f={level:"building",projectId:f.projectId,buildingId:a.buildings[0]?.id??r.buildingId}),f.level==="building"&&!N&&(f={level:"floor",projectId:f.projectId,buildingId:f.buildingId,floorId:U[0]?.id??r.floorId}),k=f,re=null,A=h&&se?se:"all",B=!1,Y=!1,_=!1,x.clear(),he=1,J=0,$e=0,F&&(F(),F=null);const i=k.level==="floor"?k.floorId:r.floorId;if(k.level==="floor")try{const[u,R,I]=await Promise.all([t.getFloorDevices(k.floorId),t.listAlarms(k.floorId),t.listWorkOrders(k.floorId)]);D=u,l=R,L=I,D.some(ee=>ee.id===p)?h&&be&&(j=!0):(p=D[1]?.id??D[0]?.id??null,j=!1),F=t.subscribeFloorEvents(k.floorId,async ee=>{ee.type==="control.receipt.updated"&&V?.batchId===ee.batchId&&(V=await t.getControlBatch(ee.batchId)),(ee.type==="telemetry.updated"||ee.type==="device.connectivity")&&k.level==="floor"&&(D=await t.getFloorDevices(k.floorId)),ee.type==="alarm.changed"&&k.level==="floor"&&(l=await t.listAlarms(k.floorId)),we()})}catch(u){D=[],l=[],L=[],p=null,j=!1,re=u instanceof Error?u.message:String(u)}else{j=!1;const[u,R,I]=await Promise.all([t.getFloorDevices(i).catch(()=>[]),t.listAlarms(i).catch(()=>[]),t.listWorkOrders(i).catch(()=>[])]);D=u,l=R,L=I}$()}function H(d){return d?a.zones.find(h=>h.id===d)?.name??d:"未分配逻辑区"}function ve(){const d=ce.trim().toLowerCase();return D.filter(h=>A!=="all"&&h.logicalZoneId!==A||P!=="all"&&h.category!==P?!1:d?h.name.toLowerCase().includes(d)||h.id.toLowerCase().includes(d)||H(h.logicalZoneId).toLowerCase().includes(d):!0)}async function me(d,h,f){!d.length||k.level!=="floor"||!c||(d.forEach(i=>y.add(i)),V=await t.dispatchControlBatch({floorId:k.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:d.map(i=>({deviceId:i,command:h,targetValue:f}))}),we())}function we(){const d=document.activeElement,h=d?.dataset?.role,f=d&&"selectionStart"in d?d.selectionStart:null,i=d&&"selectionEnd"in d?d.selectionEnd:null,u=e.querySelector(".pacom-list")?.scrollTop??0;$();const R=e.querySelector(".pacom-list");if(R&&(R.scrollTop=u),h==="search"||h==="space-search"){const I=e.querySelector(`[data-role="${h}"]`);I&&(I.focus(),f!==null&&i!==null&&I.setSelectionRange(f,i))}}function Le(){const d=e.querySelector('[data-role="canvas-viewport"]');d&&(d.style.transform=`translate(${J}px, ${$e}px) scale(${he})`);const h=e.querySelector('[data-role="zoom-label"]');h&&(h.textContent=`${Math.round(he*100)}%`)}function ke(d){if(d==="all")return{level:"all-projects"};const h=d.split(":");return h[0]==="project"&&h[1]?{level:"project",projectId:h[1]}:h[0]==="building"&&h[1]&&h[2]?{level:"building",projectId:h[1],buildingId:h[2]}:h[0]==="floor"&&h[1]&&h[2]&&h[3]?{level:"floor",projectId:h[1],buildingId:h[2],floorId:h[3]}:{level:"all-projects"}}function Se(){const d=k,h=d.level==="all-projects"?null:a.projects.find(I=>I.id===d.projectId)??a.projects[0],f=d.level==="building"||d.level==="floor"?a.buildings.find(I=>I.id===d.buildingId):null,i=d.level==="floor"?a.floors.find(I=>I.id===d.floorId):null,u=[];if(k.level==="all-projects")u.push(`全部项目（${a.projects.length}）`);else if(k.level==="project")u.push(S(h?.name??"园区"));else if(k.level==="building")K&&h&&u.push(`<span class="pacom-space-trigger-muted">${S(h.name)}</span>`),u.push(S(f?.name??"楼宇"));else{K&&h&&u.push(`<span class="pacom-space-trigger-muted">${S(h.name)}</span>`),N&&f&&u.push(`<span class="pacom-space-trigger-muted">${S(f.name)}</span>`);const I=!N&&f?`${f.name} ${i?.name??"7F"}`:i?.name??"7F";u.push(S(I))}const R='<span class="pacom-space-trigger-muted" style="margin:0 2px;">·</span>';return ne?`<span class="pacom-hud-space-btn is-static" title="当前授权空间">${u.join(R)}</span>`:`
      <button type="button" class="pacom-hud-space-btn" data-toggle-space-pop="1" aria-expanded="${Y}" aria-haspopup="dialog" title="切换项目 / 楼宇 / 楼层">
        <span>${u.join(R)}</span>
        <span style="display:inline-flex; color:var(--pacom-text-secondary);">${Ye}</span>
      </button>
    `}function Ce(d){if(!Y||ne)return"";const h=Q.trim().toLowerCase(),f=k.level==="all-projects"?a.projects[0]?.id??r.projectId:k.projectId,i=k.level==="building"||k.level==="floor"?k.buildingId:a.buildings.find(v=>v.projectId===f)?.id??r.buildingId,u=a.projects.filter(v=>!h||v.name.toLowerCase().includes(h)),R=a.buildings.filter(v=>v.projectId===f&&(!h||v.name.toLowerCase().includes(h))),I=m(i).filter(v=>!h||v.name.toLowerCase().includes(h)),ee=q,pe=K;return`
      <div class="pacom-space-popover" role="dialog" aria-label="空间快速切换" data-role="space-popover">
        <div class="pacom-space-pop-head">
          ${ue("search",14)}
          <input type="text" name="spaceQuickSearch" data-role="space-search" placeholder="快速检索园区、楼宇或楼层…" value="${S(Q)}" aria-label="检索空间" />
          <button type="button" class="pacom-drawer-close" style="width:24px; height:24px;" data-toggle-space-pop="1" aria-label="关闭">${ue("x",14)}</button>
        </div>
        <div class="pacom-space-pop-cols">
          ${ee?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">园区 / 项目</div>
                ${q?`<button type="button" class="pacom-space-pop-item ${k.level==="all-projects"?"is-active":""}" data-nav-scope="all">
                        <span>全部项目（${a.projects.length}）</span>
                        ${k.level==="all-projects"?ue("check",14):""}
                      </button>`:""}
                ${u.map(v=>{const W=k.level==="project"&&k.projectId===v.id;return`<button type="button" class="pacom-space-pop-item ${W?"is-active":""}" data-nav-scope="project:${S(v.id)}">
                      <span>${S(v.name)}</span>
                      ${W?ue("check",14):ue("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${pe?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${S(a.projects.find(v=>v.id===f)?.name??"园区")} · 楼宇</div>
                ${K?`<button type="button" class="pacom-space-pop-item ${k.level==="project"?"is-active":""}" data-nav-scope="project:${S(f)}">
                        <span>园区总览</span>
                        ${k.level==="project"?ue("check",14):""}
                      </button>`:""}
                ${R.map(v=>{const W=k.level==="building"&&k.buildingId===v.id,Z=v.id===r.buildingId;return`<button type="button" class="pacom-space-pop-item ${W?"is-active":""}" data-nav-scope="building:${S(v.projectId)}:${S(v.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${S(v.name)}</span>
                        ${Z&&d>0?'<span class="pacom-elev-dot" title="有活跃告警"></span>':""}
                      </span>
                      ${W?ue("check",14):ue("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          <div class="pacom-space-pop-col">
            <div class="pacom-space-pop-label">${S(a.buildings.find(v=>v.id===i)?.name??"楼宇")} · 楼层</div>
            ${N?`<button type="button" class="pacom-space-pop-item ${k.level==="building"&&k.buildingId===i?"is-active":""}" data-nav-scope="building:${S(f)}:${S(i)}">
                    <span>整栋视图</span>
                    ${k.level==="building"&&k.buildingId===i?ue("check",14):""}
                  </button>`:""}
            ${I.map(v=>{const W=s.scope.allowedFloorIds.includes(v.id),Z=k.level==="floor"&&k.floorId===v.id,ye=v.id===r.floorId&&d>0;return`<button type="button" class="pacom-space-pop-item ${Z?"is-active":""}" style="${W?"":"opacity:0.5;"}" data-nav-scope="floor:${S(f)}:${S(i)}:${S(v.id)}">
                  <span style="display:inline-flex; align-items:center; gap:6px;">
                    <span>${S(v.name)}</span>
                    ${ye?'<span class="pacom-elev-dot"></span>':""}
                  </span>
                  <span class="pacom-row-sub" style="font-size:11px;">${Z?ue("check",14):W?v.plan?"2D":"待部署":"未授权"}</span>
                </button>`}).join("")}
          </div>
        </div>
      </div>
    `}function te(d){const h=k;if(h.level==="all-projects"){const f=ce.trim().toLowerCase(),i=a.projects.filter(u=>!f||u.name.toLowerCase().includes(f));return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">授权园区（${i.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ue("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:6px; padding:8px;">
          ${i.map(u=>{const R=a.buildings.filter(I=>I.projectId===u.id).length;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="project:${S(u.id)}">
                  <div>
                    <div class="pacom-row-title">${S(u.name)}</div>
                    <div class="pacom-row-sub">${S(u.city??"")} · ${R} 栋楼宇</div>
                  </div>
                  <span class="pacom-badge pacom-badge--accent">进入 →</span>
                </button>`}).join("")}
        </div>
      `}if(h.level==="project"){const f=ce.trim().toLowerCase(),i=a.buildings.filter(I=>I.projectId===h.projectId&&(!f||I.name.toLowerCase().includes(f))),u=D.filter(I=>I.connectivity==="online").length,R=D.length?Math.round(u/D.length*100):100;return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">园区楼宇（${i.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ue("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${i.map(I=>{const ee=I.id===r.buildingId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="building:${S(I.projectId)}:${S(I.id)}">
                  <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                    <span class="pacom-dot ${ee&&d>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <div>
                      <div class="pacom-row-title">${S(I.name)}</div>
                      <div class="pacom-row-sub">地上 ${I.aboveFloors} 层 · ${I.areaSqm??"-"} m²</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${ee?"pacom-badge--accent":"pacom-badge--neutral"}">${ee?`在线 ${R}%`:"运行平稳"}</span>
                </button>`}).join("")}
        </div>
      `}if(h.level==="building"){const f=ce.trim().toLowerCase(),i=m(h.buildingId).filter(R=>!f||R.name.toLowerCase().includes(f)),u=a.buildings.find(R=>R.id===h.buildingId);return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">${S(u?.name??"楼宇")} 楼层导览（${i.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ue("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${i.map(R=>{const I=s.scope.allowedFloorIds.includes(R.id),ee=R.id===r.floorId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left; ${I?"":"opacity:0.6;"}" data-nav-scope="floor:${S(h.projectId)}:${S(h.buildingId)}:${S(R.id)}">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="pacom-dot ${ee&&d>0?"pacom-dot--warning":R.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                    <div>
                      <div class="pacom-row-title">${S(u?.name??"")} ${S(R.name)}</div>
                      <div class="pacom-row-sub">${R.plan?"2D 平面控图就绪":"暂未上传平面图"}${ee&&d>0?` · ${d} 告警`:""}</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${I&&R.plan?"pacom-badge--online":"pacom-badge--neutral"}">${I?R.plan?"进入 →":"待部署":"未授权"}</span>
                </button>`}).join("")}
        </div>
      `}if(ie==="devices"){const f=ve(),i=de(),u=Array.from(x);return`
        <div class="pacom-pane-toolbar" style="padding:10px 12px; gap:8px;">
          ${O?`<div class="pacom-info-banner">我的区域视图：仅显示获授权的 ${O.length} 个功能区及设备。</div>`:""}
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
            <select class="pacom-select" style="height:28px; font-size:12px;" name="deviceCategory" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${P==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${P==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${P==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${P==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${P==="gateway"?"selected":""}>网关</option>
            </select>
            <span style="font-size:12px; color:var(--pacom-text-secondary);">可见 ${f.length} 台${c&&u.length?` · 已选 ${u.length}`:""}</span>
            <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ue("x",14)}</button>
          </div>
          ${i.length>0&&!re?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${A==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${i.map(R=>`<button type="button" class="pacom-zone-pill ${A===R.id?"is-active":""}" data-filter-zone="${S(R.id)}">${S(R.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
        </div>
        <div class="pacom-list" style="padding:6px;">
          ${re?`<div class="pacom-alert-banner">${S(re)}</div>`:f.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">没有匹配的设备</div>':f.map(R=>{const I=R.id===p&&j,ee=x.has(R.id),pe=R.connectivity==="offline",v=pe?"pacom-dot--critical":"pacom-dot--online",W=pe?"离线":R.category==="lighting"?`${R.telemetry.dimming?.value??"--"}%`:R.category==="hvac"?`${R.telemetry.setpoint?.value??"--"}°C`:R.category==="sensor"?`${R.telemetry.temp?.value??"--"}°C`:"在线";return`
                        <div class="pacom-row ${I?"is-selected":""}" data-select-device="${S(R.id)}" style="padding:8px;">
                          <div class="pacom-row-main">
                            ${c?`<input type="checkbox" name="devCheck-${S(R.id)}" data-check-device="${S(R.id)}" ${ee?"checked":""} style="margin-top:3px;" aria-label="勾选 ${S(R.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title" style="font-size:13px;">${S(R.name)}</div>
                              <div class="pacom-row-sub">${S(H(R.logicalZoneId).replace(/^7F\s*/,""))} · ${S(Ke[R.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${pe?"pacom-badge--critical":"pacom-badge--online"}">
                            <span class="pacom-dot ${v}"></span>${S(W)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${c&&u.length>0?`
            <div class="pacom-batch-bar" style="padding:8px 12px;">
              <span style="font-size:12px;">已选 <strong>${u.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(ie==="zones"){const f=de(),i={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">功能区快控（${f.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ue("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:8px; padding:10px;">
          ${f.map(u=>{const R=D.filter(W=>W.logicalZoneId===u.id),I=R.filter(W=>W.connectivity==="online").length,ee=R.filter(W=>W.category==="lighting"||W.category==="hvac").length,pe=A===u.id,v=i[u.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${pe?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${pe?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${S(pe?"all":u.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:13px; font-weight:500;">${S(u.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${I}/${R.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时 ${v.temp} · ${v.occ}</div>
                  ${ee>0?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-zone-power="${S(u.id)}" data-zone-val="true" ${c?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-zone-power="${S(u.id)}" data-zone-val="false" ${c?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">弱电 / 网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-hud-sheet-head">
        <strong style="font-size:13px; font-weight:500;">本层告警（${l.length}）</strong>
        <div style="display:flex; align-items:center; gap:4px;">
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ue("x",14)}</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:10px;">
        ${l.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">当前楼层无活跃告警</div>':l.map(f=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${S(f.title)}</strong>
                      <span class="pacom-badge ${f.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${f.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${S(f.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-locate-device="${S(f.deviceId)}">定位设备</button>
                      ${f.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-ack-alarm="${S(f.id)}" ${C?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function Fe(d){const h=k,f=de().length,i=h.level==="floor"?"搜索设备或区域…":h.level==="building"?"搜索楼层…":h.level==="project"?"搜索楼宇…":"搜索园区…",u=h.level==="floor"?`
          <button type="button" class="pacom-hud-pill ${_&&ie==="devices"?"is-active":""}" data-hud-tab="devices">设备 ${D.length}</button>
          <button type="button" class="pacom-hud-pill ${_&&ie==="zones"?"is-active":""}" data-hud-tab="zones">区域 ${f}</button>
          <button type="button" class="pacom-hud-pill ${d>0?"pacom-hud-pill--alert":""} ${_&&ie==="alarms"?"is-active":""}" data-hud-tab="alarms">告警 ${d}</button>
        `:h.level==="building"?`
            <button type="button" class="pacom-hud-pill ${_?"is-active":""}" data-toggle-hud="1">楼层 ${m(h.buildingId).length}</button>
            ${d>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${d}</button>`:""}
          `:h.level==="project"?`
              <button type="button" class="pacom-hud-pill ${_?"is-active":""}" data-toggle-hud="1">楼宇 ${a.buildings.filter(R=>R.projectId===h.projectId).length}</button>
              ${d>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${d}</button>`:""}
            `:`<button type="button" class="pacom-hud-pill ${_?"is-active":""}" data-toggle-hud="1">园区 ${a.projects.length}</button>`;return`
      <div class="pacom-hud-search-wrap" data-role="hud-wrap">
        <div class="pacom-hud-bar">
          ${Se()}
          <span class="pacom-hud-divider" aria-hidden="true"></span>
          ${ue("search",14)}
          <input class="pacom-hud-input" name="spatialSearch" data-role="search" placeholder="${i}" value="${S(ce)}" aria-label="${i}" />
          ${u}
        </div>
        ${Y?Ce(d):_?`<div class="pacom-hud-sheet" data-role="hud-sheet">${te(d)}</div>`:""}
      </div>
    `}function n(d){if(ne||k.level!=="building"&&k.level!=="floor")return"";const h=k.buildingId,f=k.projectId,i=m(h);return!N&&i.length<=1?"":`
      <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换" data-role="elevation-scrubber">
        ${N?`<button type="button" class="pacom-elev-item ${k.level==="building"?"is-active":""}" data-nav-scope="building:${S(f)}:${S(h)}" title="查看整栋视图">
                <span>栋</span>
                <span class="pacom-elev-tick"></span>
              </button>`:""}
        ${i.map(u=>{const R=s.scope.allowedFloorIds.includes(u.id),I=k.level==="floor"&&k.floorId===u.id,ee=u.id===r.floorId&&d>0;return`
              <button type="button" class="pacom-elev-item ${I?"is-active":""} ${R?"":"is-locked"}"
                data-nav-scope="floor:${S(f)}:${S(h)}:${S(u.id)}"
                title="${S(u.name)}${R?ee?` · ${d} 条告警`:"":"（无权限）"}">
                ${ee?'<span class="pacom-elev-dot" aria-hidden="true"></span>':""}
                <span>${S(u.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`}).join("")}
      </nav>
    `}function g(d,h){const f=k;if(f.level==="floor")return re?"":`
        <div class="pacom-canvas-dock" role="toolbar" aria-label="平面图图层与缩放控制">
          <button type="button" class="pacom-dock-btn" aria-pressed="${E==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${E==="temp"}" data-canvas-layer="temp">温度热力</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${E==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-zoom="out" title="缩小" aria-label="缩小">${ue("minus",14)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-zoom="reset" data-role="zoom-label" title="点击复位 100%">${Math.round(he*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-zoom="in" title="放大" aria-label="放大">${ue("plus",14)}</button>
        </div>
      `;const i=D.length?Math.round(d/D.length*100):100,u=f.level==="building"?"418 kWh":"1,248 kWh",R=Math.round(96.2*.45+93.6*.35+i*.2),I=f.level==="building"?m(f.buildingId).find(ee=>ee.id===r.floorId)??m(f.buildingId)[0]:null;return`
      <div class="pacom-canvas-dock" role="region" aria-label="空间运行态势">
        <button type="button" class="pacom-dock-metric" data-go-analysis="health">
          <span class="pacom-dot pacom-dot--online"></span>
          <span>健康 <strong>${R}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="environment">
          <span>舒适度 <strong>96.2%</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="energy">
          <span>今日能耗 <strong>${u}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-alarms="1">
          <span class="pacom-dot ${h>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
          <span>告警 <strong>${h}</strong></span>
        </button>
        ${f.level==="building"&&I?`<span class="pacom-dock-sep" aria-hidden="true"></span>
               <button type="button" class="pacom-dock-btn" aria-pressed="true" data-nav-scope="floor:${S(f.projectId)}:${S(f.buildingId)}:${S(I.id)}">进入 ${S(I.name)} 平面图 →</button>`:""}
      </div>
    `}function z(d,h){const f=k,i=D.length?Math.round(d/D.length*100):100;if(f.level==="all-projects")return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 24px 72px; cursor:default; background:radial-gradient(circle at 50% 45%, #fafaf9 0%, #f1f1ef 100%);">
          <div style="position:relative; width:min(920px, 94%); height:min(520px, 74vh); border-radius:16px; background:#ffffff; box-shadow:var(--pacom-shadow-sm); overflow:hidden;">
            <svg viewBox="0 0 920 520" style="width:100%; height:100%; display:block;" aria-label="多园区空间分布底图">
              <defs>
                <pattern id="pacom-map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="oklch(88% 0 107 / 0.55)" stroke-width="0.75" />
                </pattern>
              </defs>
              <rect width="920" height="520" fill="url(#pacom-map-grid)" />
              <path d="M 80 340 Q 260 280 460 300 T 840 210" fill="none" stroke="oklch(82% 0.02 220 / 0.55)" stroke-width="18" stroke-linecap="round" />
              <path d="M 180 90 L 340 440 M 540 60 L 660 460" fill="none" stroke="oklch(86% 0 107 / 0.7)" stroke-width="2" stroke-dasharray="6 6" />
            </svg>
            ${a.projects.map((I,ee)=>`
                <button type="button" class="pacom-pin is-selected" style="left:${ee===0?50:28}%; top:${ee===0?52:34}%; padding:0 12px; height:32px; font-size:12px;" data-nav-scope="project:${S(I.id)}">
                  <span class="pacom-dot ${h>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <span>${S(I.name)} · 在线 ${i}%</span>
                </button>`).join("")}
          </div>
        </div>
      `;if(f.level==="project"){const I=a.projects.find(pe=>pe.id===f.projectId)??a.projects[0],ee=a.buildings.filter(pe=>!I||pe.projectId===I.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 24px 72px; cursor:default;">
          <div style="position:relative; width:min(940px, 92%); border-radius:16px; overflow:hidden; box-shadow:0 14px 36px rgba(15,23,42,0.12); background:#fff;">
            <img src="${S(I?.imageUrl??"./media/gzlab.jpg")}" alt="${S(I?.name??"园区")}俯瞰" style="width:100%; max-height:72vh; object-fit:cover; display:block;" />
            ${ee.map((pe,v)=>{const W=pe.id===r.buildingId;return`
                  <button type="button" class="pacom-pin ${W?"is-selected":""}" style="left:${v===0?56:38}%; top:${v===0?44:62}%; height:30px; padding:0 11px;" data-nav-scope="building:${S(pe.projectId)}:${S(pe.id)}">
                    <span class="pacom-dot ${W&&h>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${S(pe.name)} · ${W?`在线 ${i}% · 告警 ${h}`:"运行平稳"}</span>
                  </button>`}).join("")}
          </div>
        </div>
      `}if(f.level==="building"){const I=a.buildings.find(pe=>pe.id===f.buildingId),ee=m(f.buildingId).find(pe=>pe.id===r.floorId)??m(f.buildingId)[0];return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 68px 72px 24px; cursor:default;">
          <div style="position:relative; display:inline-block;">
            <img class="pacom-plan-img" src="${S(I?.imageUrl??"./media/building-e.png")}" alt="${S(I?.name??"楼宇")} 整栋实景图" style="max-height:74vh;" />
            ${ee?`<button type="button" class="pacom-pin is-selected" style="left:52%; top:38%; height:30px; padding:0 11px;" data-nav-scope="floor:${S(f.projectId)}:${S(f.buildingId)}:${S(ee.id)}">
                    <span class="pacom-dot ${h>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${S(I?.name??"")} ${S(ee.name)} · 在线 ${d}/${D.length}</span>
                  </button>`:""}
          </div>
        </div>
      `}const u=a.floors.find(I=>I.id===f.floorId),R=de();return`
      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${re?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${S(re)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${J}px, ${$e}px) scale(${he});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${S(u?.plan?.imageUrl??"./media/7F.webp")}" alt="E栋 ${S(u?.name??"7F")} 平面图" />
                  ${R.map((I,ee)=>{const pe=Ft[I.id];if(!pe)return"";const v=A===I.id,W=["23.2°C","24.6°C","22.8°C","23.9°C"],Z=["有人 74%","会议中","有人 52%","空闲"],ye=E==="temp"?` · ${W[ee%W.length]}`:E==="occupancy"?` · ${Z[ee%Z.length]}`:"",fe=E==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":E==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${v?"is-active":""}"
                          style="left:${pe.left}%; top:${pe.top}%; width:${pe.width}%; height:${pe.height}%; ${v?"":fe}"
                          data-filter-zone="${S(v?"all":I.id)}"
                          title="${S(I.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${S(I.name.replace(/^7F\s*/,""))}${ye}</span>
                        </button>`}).join("")}
                  ${D.filter(I=>I.planPoint).map(I=>{const ee=l.some(ye=>ye.deviceId===I.id&&ye.status==="active"),pe=_&&ie==="alarms",v=A!=="all"&&I.logicalZoneId!==A||pe&&!ee,W=pe&&ee?"background:var(--pacom-status-critical);":"",Z=I.category==="gateway"?Math.min(92,I.planPoint.y*100+5.5):I.planPoint.y*100;return`
                        <button type="button" class="pacom-pin ${I.id===p&&j?"is-selected":""} ${I.connectivity==="offline"?"pacom-pin--offline":""} ${v?"pacom-pin--dimmed":""}"
                          style="left:${(I.planPoint.x*100).toFixed(2)}%; top:${Z.toFixed(2)}%; ${W}"
                          data-pin-device="${S(I.id)}" title="${S(I.name)}">
                          <span class="pacom-dot ${ee?"pacom-dot--critical":I.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${S(Ge(I))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>
    `}function T(){if(k.level!=="floor"||!j)return"";const d=D.find(W=>W.id===p);if(!d)return"";const h=d.category==="lighting",f=d.category==="hvac",i=Number(d.telemetry.dimming?.value??50),u=Number(d.telemetry.setpoint?.value??24),R=y.has(d.id),I=l.filter(W=>W.deviceId===d.id&&W.status==="active"),ee=L.filter(W=>W.deviceId===d.id&&W.status!=="closed"),pe=f?[{name:"E7F_暖通空调与末端竣工图_v2.3.pdf",tag:"竣工图纸"},{name:"FCU-01_风机盘管维保与排障手册.pdf",tag:"维保手册"}]:h?[{name:"E7F_强电照明与DALI回路拓扑.pdf",tag:"回路图纸"}]:[{name:"E7F_BACnet_Modbus_点位映射表.xlsx",tag:"点位台账"}],v=h?[{label:"当前开关",value:i>0?"开启":"关闭"},{label:"当前亮度",value:`${i}%`},{label:"实时功率",value:i>0?`${Math.round(i*1.4)} W`:"0 W"},{label:"运行模式",value:R?"人工覆盖":"自动策略"}]:f?[{label:"室内温度",value:`${d.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${u.toFixed(1)}°C`},{label:"运行工况",value:d.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:R?"人工覆盖":"自动策略"}]:d.category==="sensor"?[{label:"实时温度",value:`${d.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${d.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${d.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:d.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:d.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:d.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:d.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:d.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${S(d.name)}</h2>
            <div class="pacom-row-sub">${S(H(d.logicalZoneId))} · ${S(Ke[d.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${d.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${d.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              ${ue("x",16)}
            </button>
          </div>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备档案分页" style="width:100%; justify-content:space-between;">
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${G==="control"}" data-drawer-tab="control">控制与工况</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${G==="trend"}" data-drawer-tab="trend">趋势与告警${I.length>0?` (${I.length})`:""}</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${G==="profile"}" data-drawer-tab="profile">档案与图纸</button>
        </div>

        ${G==="control"?`
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
              ${v.map(W=>`
                  <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                    <span class="pacom-row-sub">${W.label}</span>
                    <strong style="font-size:13px; font-weight:500;">${S(W.value)}</strong>
                  </div>`).join("")}
            </div>

            ${f?`
                <div class="lov-schematic-strip" aria-label="暖通工况简图">
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                    <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                    <span class="pacom-row-sub">${d.connectivity==="online"?"制冷运转":"通信离线"}</span>
                  </div>
                  <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                    <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                    <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                    <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${S(d.telemetry.temp?.value??"23.8")}°</text>
                    <rect x="80" y="8" width="54" height="28" rx="6" fill="${d.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${d.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                    <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${d.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                    <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${d.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                    <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                    <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                    <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${u.toFixed(1)}°C</text>
                  </svg>
                </div>`:""}

            ${h||f?`
                <div class="pacom-control-box">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                    ${R&&c?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${S(d.id)}">恢复自动策略</button>`:c?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
                  </div>
                  ${d.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
                  ${h?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${c?"":"disabled"}>开灯</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${c?"":"disabled"}>关灯</button>
                      </div>
                      <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                        亮度目标：<strong>${i}%</strong>
                        <input type="range" min="0" max="100" step="10" value="${i}" data-ctrl-slider="lighting.dimming" ${c?"":"disabled"} />
                      </label>`:`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${c?"":"disabled"}>开机</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${c?"":"disabled"}>关机</button>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:12px;">设定温度：</span>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${u-.5}" ${c?"":"disabled"}>-0.5°C</button>
                        <strong>${u.toFixed(1)}°C</strong>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${u+.5}" ${c?"":"disabled"}>+0.5°C</button>
                      </div>`}
                </div>`:""}

            ${V?`
                <div class="pacom-control-box">
                  <div style="font-size:12px; font-weight:500;">最近批次：<code>${S(V.batchId)}</code></div>
                  <div class="pacom-receipt-list">
                    ${V.receipts.map(W=>{const Z=Ct[W.status]??{text:W.status,badge:"pacom-badge--neutral"};return`
                          <div class="pacom-receipt-item">
                            <div>
                              <div><strong>${S(W.deviceId)}</strong> · ${S(W.command)} → ${S(W.targetValue)}</div>
                              ${W.errorMessage?`<div style="color:var(--pacom-status-critical);">${S(W.errorMessage)}</div>`:""}
                            </div>
                            <span class="pacom-badge ${Z.badge}">${Z.text}</span>
                          </div>`}).join("")}
                  </div>
                </div>`:""}`:G==="trend"?`
              <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="pacom-row-sub">近 24 小时趋势（${h?"亮度 %":f?"温度 °C":d.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${S(d.id)}">查看完整时序 →</button>
                </div>
                <svg viewBox="0 0 280 48" style="width:100%; height:48px; display:block;">
                  <line x1="0" y1="24" x2="280" y2="24" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
                  <polyline fill="none" stroke="${d.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${h?"0,38 40,38 80,16 120,12 160,14 200,20 240,14 280,16":f?"0,28 40,30 80,25 120,20 160,18 200,22 240,24 280,20":"0,24 40,25 80,23 120,21 160,20 200,22 240,21 280,22"}" />
                </svg>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:12px; font-weight:500;">本机活跃告警与未结工单</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
                </div>
                ${I.length===0&&ee.length===0?'<div class="pacom-row-sub">当前设备运行平稳，无未处理告警或工单。</div>':`${I.map(W=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${S(W.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${S(W.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去诊断 →</span>
                          </button>`).join("")}${ee.map(W=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-wo-id="${S(W.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${S(W.title)}</span>
                            <span class="pacom-badge pacom-badge--accent">查看工单 →</span>
                          </button>`).join("")}`}
              </div>`:`
              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">上下游拓扑关系（Twin Relationships）</span>
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; font-size:12px;">
                  <span class="pacom-badge pacom-badge--neutral">E7F 主控网关-01</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--accent">${S(Ge(d))}</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--online">${S(H(d.logicalZoneId).replace(/^7F\s*/,""))}</span>
                </div>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">关联竣工图纸与设备手册</span>
                ${w?`<div class="pacom-info-banner">${S(w)}</div>`:""}
                ${pe.map(W=>`
                    <div class="pacom-receipt-item">
                      <span style="font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${S(W.name)}">${S(W.name)}</span>
                      <button type="button" class="pacom-btn" style="height:24px; padding:0 8px; font-size:11px;" data-drawer-doc="${S(W.name)}">查阅</button>
                    </div>`).join("")}
              </div>

              <details class="lov-tech-details" open>
                <summary><span>技术标识与硬件绑定</span>${ue("chevron-down",12)}</summary>
                <div class="pacom-kv-grid">
                  <span class="pacom-kv-label">设备编号</span><span><code>${S(d.id)}</code> · v${d.version}</span>
                  <span class="pacom-kv-label">图上点位</span><span>${d.planPoint?`x=${d.planPoint.x.toFixed(2)}, y=${d.planPoint.y.toFixed(2)} (图 v${d.planPoint.planVersion})`:"未标点"}</span>
                  <span class="pacom-kv-label">物理安装</span><span>${d.physicalInstalled?"现场已确认":"待现场复核"}</span>
                  <span class="pacom-kv-label">硬件绑定</span><span>${d.hardwareBinding?`${d.hardwareBinding.protocol.toUpperCase()} · ${d.hardwareBinding.networkAddress}`:"未绑定"}</span>
                </div>
              </details>`}
      </aside>
    `}function ae(d,h,f){if(!B)return"";const i=Math.max(0,D.length-d),u=ge==="week",R=l.filter(I=>I.status==="active").slice(0,2);return`
      <div class="lov-briefing-pop" style="width:420px; top:48px; right:20px;" role="dialog" aria-label="运行简报" data-role="briefing-pop">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <div>
            <strong style="font-size:14px; font-weight:500;">E7F ${u?"本周运行汇总简报":"今日值班晨报"}</strong>
            <div class="pacom-row-sub">广州 26°C 多云 · 湿度 64% · 舒适度达标 96.2%</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <div class="pacom-tabs">
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${!u}" data-briefing-period="today">今日值班</button>
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${u}" data-briefing-period="week">本周汇总</button>
            </div>
            <button type="button" class="pacom-drawer-close" data-toggle-briefing="1" aria-label="关闭简报">${ue("x",16)}</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">${u?"本周累计节能":"昨日能耗偏差"}</span><strong style="color:var(--pacom-status-online);">${u?"-7.1%（省 ¥342）":"-6.4%（省 ¥48）"}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">均温 / 在线率</span><strong>${S(f)}°C · ${d}/${D.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${h} 告警 · ${i} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖 / 未结工单</span><strong>${Math.max(1,y.size)} 覆盖 · ${L.filter(I=>I.status!=="closed").length} 工单</strong></div>
        </div>
        ${R.length>0?`<div style="display:flex; flex-direction:column; gap:5px;">
                <span class="pacom-row-sub">优先关注事项（点击直达）</span>
                ${R.map(I=>`
                    <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${S(I.id)}">
                      <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${S(I.title)}</span>
                      <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                    </button>`).join("")}
              </div>`:""}
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报 (.txt)</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">进入告警中心 →</button>
        </div>
      </div>
    `}function $(){const d=l.filter(i=>i.status==="active").length,h=D.filter(i=>i.connectivity==="online").length,f=D.find(i=>i.category==="sensor")?.telemetry.temp?.value??"23.4";e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title" style="flex-shrink:0;">空间总览</h1>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${re?o?'<span class="pacom-badge pacom-badge--neutral"><span class="pacom-dot pacom-dot--offline"></span>演示模式</span>':'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>':`<button type="button" class="pacom-pulse-btn" data-toggle-briefing="1" aria-expanded="${B}" title="点击查看今日运行简报">
                      <span class="pacom-dot pacom-dot--online"></span>
                      <span>${h}/${D.length} 在线 · ${S(f)}°C · 简报</span>
                      <span style="display:inline-flex; color:var(--pacom-text-secondary);">${Ye}</span>
                    </button>`}
            </div>
          </div>
        </header>

        ${ae(h,d,f)}

        <main class="pacom-spatial-stage">
          ${Fe(d)}
          ${z(h,d)}
          ${n(d)}
          ${g(h,d)}
          ${T()}
        </main>
      </div>
    `,oe()}function oe(){e.querySelectorAll("[data-toggle-space-pop]").forEach(i=>{i.addEventListener("click",u=>{u.stopPropagation(),Y=!Y,Y&&(B=!1,_=!1),$(),Y&&e.querySelector('[data-role="space-search"]')?.focus()})}),e.querySelector('[data-role="space-search"]')?.addEventListener("input",i=>{Q=i.currentTarget.value,we()}),e.querySelectorAll("[data-nav-scope]").forEach(i=>{i.addEventListener("click",u=>{u.stopPropagation(),i.dataset.navScope&&b(ke(i.dataset.navScope))})}),e.querySelectorAll("[data-hud-tab]").forEach(i=>{i.addEventListener("click",u=>{u.stopPropagation();const R=i.dataset.hudTab;_&&ie===R?_=!1:(ie=R,_=!0,Y=!1,B=!1),$()})}),e.querySelectorAll("[data-toggle-hud]").forEach(i=>{i.addEventListener("click",u=>{u.stopPropagation(),_=!_,_&&(Y=!1,B=!1),$()})}),e.querySelectorAll("[data-close-hud]").forEach(i=>{i.addEventListener("click",u=>{u.stopPropagation(),_=!1,$()})});const d=e.querySelector('[data-role="search"]');d?.addEventListener("focus",()=>{_||(_=!0,Y=!1,B=!1,we())}),d?.addEventListener("input",i=>{ce=i.currentTarget.value,_=!0,we()}),e.querySelector('[data-role="category"]')?.addEventListener("change",i=>{P=i.currentTarget.value,$()}),e.querySelectorAll("[data-filter-zone]").forEach(i=>{i.addEventListener("click",u=>{u.stopPropagation(),A=i.dataset.filterZone??"all",$()})}),e.querySelectorAll("[data-select-device]").forEach(i=>{i.addEventListener("click",u=>{u.target.tagName!=="INPUT"&&(p=i.dataset.selectDevice??null,j=!0,$())})}),e.querySelectorAll("[data-check-device]").forEach(i=>{i.addEventListener("change",()=>{const u=i.dataset.checkDevice;u&&(i.checked?x.add(u):x.delete(u),$())})}),e.querySelectorAll("[data-pin-device]").forEach(i=>{i.addEventListener("click",u=>{u.stopPropagation(),p=i.dataset.pinDevice??null,j=!0,Y=!1,B=!1,$()})}),e.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{j=!1,$()}),e.querySelectorAll("[data-drawer-tab]").forEach(i=>{i.addEventListener("click",()=>{G=i.dataset.drawerTab??"control",w="",$()})}),e.querySelectorAll("[data-drawer-doc]").forEach(i=>{i.addEventListener("click",()=>{w=`已调阅「${i.dataset.drawerDoc??""}」（完整工程文档库见「系统部署 → 楼层与功能区」）。`,$()})}),e.querySelectorAll("[data-briefing-period]").forEach(i=>{i.addEventListener("click",()=>{ge=i.dataset.briefingPeriod??"today",$()})}),e.querySelectorAll("[data-go-alarm-id]").forEach(i=>{i.addEventListener("click",()=>{const u=i.dataset.goAlarmId??"";window.location.hash=u?`#alarms?alarm=${encodeURIComponent(u)}`:"#alarms"})}),e.querySelectorAll("[data-go-wo-id]").forEach(i=>{i.addEventListener("click",()=>{const u=i.dataset.goWoId??"";window.location.hash=u?`#alarms?wo=${encodeURIComponent(u)}`:"#alarms"})}),e.querySelector("[data-release-override]")?.addEventListener("click",i=>{const u=i.currentTarget.dataset.releaseOverride;u&&(y.delete(u),$())}),e.querySelectorAll("[data-zone-power]").forEach(i=>{i.addEventListener("click",u=>{u.stopPropagation();const R=i.dataset.zonePower,I=i.dataset.zoneVal==="true";if(!R)return;const ee=D.filter(v=>v.logicalZoneId===R&&v.category==="lighting").map(v=>v.id),pe=D.filter(v=>v.logicalZoneId===R&&v.category==="hvac").map(v=>v.id);ee.length?me(ee,"lighting.power",I):pe.length&&me(pe,"hvac.power",I)})}),e.querySelectorAll("[data-locate-device]").forEach(i=>{i.addEventListener("click",()=>{const u=i.dataset.locateDevice;u&&(p=u,j=!0,_=!1,$())})}),e.querySelectorAll("[data-go-alarms]").forEach(i=>{i.addEventListener("click",()=>{window.location.hash="#alarms"})}),e.querySelectorAll("[data-go-analysis]").forEach(i=>{i.addEventListener("click",()=>{const u=i.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(u)}`})}),e.querySelectorAll("[data-go-timeseries]").forEach(i=>{i.addEventListener("click",()=>{const u=i.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(u)}`})}),e.querySelectorAll("[data-toggle-briefing]").forEach(i=>{i.addEventListener("click",u=>{u.stopPropagation(),B=!B,B&&(Y=!1,_=!1),$()})}),e.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const i=D.filter(v=>v.connectivity==="online").length,u=l.filter(v=>v.status==="active").length,R=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${i}/${D.length}（离线 ${D.length-i} 台）`,`待处理告警：${u} 条`,`人工覆盖中：${y.size} 台`].join(`
`),I=new Blob([R],{type:"text/plain;charset=utf-8;"}),ee=URL.createObjectURL(I),pe=document.createElement("a");pe.href=ee,pe.download="pacom-daily-briefing.txt",pe.click(),URL.revokeObjectURL(ee)}),e.querySelectorAll("[data-ctrl-cmd]").forEach(i=>{i.addEventListener("click",()=>{if(!p||!i.dataset.ctrlCmd)return;const u=i.dataset.ctrlVal??"",R=u==="true"?!0:u==="false"?!1:Number(u);me([p],i.dataset.ctrlCmd,R)})}),e.querySelector("[data-ctrl-slider]")?.addEventListener("change",i=>{const u=i.currentTarget;!p||!u.dataset.ctrlSlider||me([p],u.dataset.ctrlSlider,Number(u.value))}),e.querySelectorAll("[data-batch-cmd]").forEach(i=>{i.addEventListener("click",()=>{const u=Array.from(x),R=i.dataset.batchVal??"",I=R==="true"?!0:R==="false"?!1:R;me(u,i.dataset.batchCmd,I)})}),e.querySelectorAll("[data-ack-alarm]").forEach(i=>{i.addEventListener("click",async()=>{!i.dataset.ackAlarm||k.level!=="floor"||!C||(await t.acknowledgeAlarm(i.dataset.ackAlarm,"首页快速确认"),l=await t.listAlarms(k.floorId),$())})}),e.querySelectorAll("[data-canvas-layer]").forEach(i=>{i.addEventListener("click",()=>{const u=i.dataset.canvasLayer;u&&(E=u,$())})}),e.querySelectorAll("[data-zoom]").forEach(i=>{i.addEventListener("click",()=>{const u=i.dataset.zoom;u==="in"?he=Math.min(2.6,Number((he+.2).toFixed(2))):u==="out"?he=Math.max(.6,Number((he-.2).toFixed(2))):(he=1,J=0,$e=0),Le()})}),e.querySelector('[data-role="elevation-scrubber"]')?.addEventListener("wheel",i=>{i.preventDefault();const u=k;if(u.level!=="building"&&u.level!=="floor")return;const R=m(u.buildingId),I=[...N?[{level:"building",projectId:u.projectId,buildingId:u.buildingId}]:[],...R.map(v=>({level:"floor",projectId:u.projectId,buildingId:u.buildingId,floorId:v.id}))],ee=I.findIndex(v=>v.level==="building"?u.level==="building":v.level==="floor"&&u.level==="floor"&&v.floorId===u.floorId);if(ee<0)return;const pe=Math.max(0,Math.min(I.length-1,ee+(i.deltaY>0?1:-1)));pe!==ee&&I[pe]&&b(I[pe])},{passive:!1});const f=e.querySelector('[data-role="canvas-stage"]');if(f&&!re){let i=!1,u=!1,R=0,I=0,ee=0,pe=0;f.addEventListener("pointerdown",W=>{W.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(i=!0,u=!1,R=W.clientX,I=W.clientY,ee=J,pe=$e,f.classList.add("is-panning"),f.setPointerCapture?.(W.pointerId))}),f.addEventListener("pointermove",W=>{if(!i)return;const Z=W.clientX-R,ye=W.clientY-I;(Math.abs(Z)>3||Math.abs(ye)>3)&&(u=!0),J=ee+Z,$e=pe+ye,Le()});const v=()=>{i&&(i=!1,f.classList.remove("is-panning"),!u&&(_||Y||B)&&(_=!1,Y=!1,B=!1,$()))};f.addEventListener("pointerup",v),f.addEventListener("pointercancel",v),f.addEventListener("wheel",W=>{W.preventDefault();const Z=W.deltaY<0?.12:-.12;he=Math.max(.6,Math.min(2.6,Number((he+Z).toFixed(2)))),Le()},{passive:!1}),f.addEventListener("dblclick",W=>{W.target?.closest("button")||(he=1,J=0,$e=0,Le())})}else e.querySelector(".pacom-spatial-stage")?.addEventListener("click",i=>{i.target?.closest("button, input, select, .pacom-hud-search-wrap, .pacom-space-popover, .lov-briefing-pop")||(_||Y||B)&&(_=!1,Y=!1,B=!1,$())})}e.addEventListener("keydown",d=>{d.key==="Escape"&&(Y||B||_||j)&&(Y=!1,B=!1,_=!1,j=!1,$())}),await b(k,!0)}const zt=new Set(["lighting","hvac","alarm_rules"]),Xe={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},Te=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function Dt(e){const t=new Set;for(const s of e.actions)s.command.startsWith("lighting")?t.add("照明"):s.command.startsWith("hvac")?t.add("暖通"):t.add("综合");return Array.from(t)}function qt(e,t,s){const a=s?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
    <div style="width:150px; display:flex; flex-direction:column; gap:3px;">
      <div style="position:relative; height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
        ${e<t?`<div style="position:absolute; left:${e/24*100}%; width:${(t-e)/24*100}%; top:0; bottom:0; border-radius:999px; background:${a};"></div>`:`
        <div style="position:absolute; left:${e/24*100}%; width:${(24-e)/24*100}%; top:0; bottom:0; border-radius:999px; background:${a};"></div>
        <div style="position:absolute; left:0; width:${t/24*100}%; top:0; bottom:0; border-radius:999px; background:${a};"></div>`}
      </div>
      <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--pacom-text-muted);">
        <span>00</span><span>12</span><span>24</span>
      </div>
    </div>
  `}async function Tt(e,t,s){let[a,o,c]=await Promise.all([t.listScenes(r.floorId),t.getRuntimeSettings(r.projectId),t.getFloorDevices(r.floorId).catch(()=>[])]),C="manual",O="balanced",U="all",X=null,q="",K=!1,N=!1,ne=!1,k="all",ie=null,_="",Y="",Q=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const ce=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],P=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],A=[{deviceId:c[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],le=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${o.calendar.workdayStart} – ${o.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${o.calendar.nightGuardStart} – 次日 ${o.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],be=t.subscribeFloorEvents(r.floorId,async p=>{p.type==="control.receipt.updated"&&X?.batchId===p.batchId&&(X=await t.getControlBatch(p.batchId),se())});function se(){const p=q.trim().toLowerCase(),j=p?a.filter(l=>`${l.name} ${l.description}`.toLowerCase().includes(p)):a,G=o.rules.filter(l=>zt.has(l.category)),w=U==="all"?G:U==="cbm"?[]:G.filter(l=>l.category===U),B=U==="all"||U==="cbm",ge=k==="issues"?ce.filter(l=>l.status!=="verified"):ce,E=Te.find(l=>l.id===O)??Te[1],y=s.scope.canControlDevices,x=s.scope.canEditDeployment;e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">智能策略</h1>
              <div class="pacom-tabs" role="tablist" aria-label="智能策略分类">
                <button class="pacom-tab" role="tab" aria-selected="${C==="manual"}" data-scene-tab="manual">快捷场景（${a.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${C==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
                <button class="pacom-tab" role="tab" aria-selected="${C==="rules"}" data-scene-tab="rules">条件联动（${G.length+P.length}）</button>
              </div>
            </div>

            <div class="pacom-header-meta">
              <button type="button" class="pacom-badge ${Q.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${Q.length>0?`人工覆盖中：${Q.length} 台 ${ue("chevron-down",12)}`:`全部自动托管 ${ue("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${ne?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${ce.length}）</button>
              ${C==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${K?"收起表单":"+ 新建场景"}</button>`:C==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
        </header>

        ${N?`
            <div class="lov-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${Q.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${ue("x",16)}</button>
              </div>
              ${Q.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':Q.map(l=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${l.name}</div>
                            <div class="pacom-row-sub">${l.reason}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${l.id}" ${y?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${Q.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${y?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${ne?`
            <aside class="lov-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${ue("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${k==="all"}" data-log-filter="all">全部（${ce.length}）</button>
                  <button class="pacom-tab" aria-selected="${k==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${ge.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${ge.map(l=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${l.device}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${l.source}</span>
                        </div>
                        <span class="pacom-row-sub">${l.action} · ${l.at}</span>
                      </div>
                      <span class="pacom-badge ${l.status==="verified"?"pacom-badge--online":l.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${l.status==="verified"?"回读确认":l.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${_?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${_}</span></div>`:""}
          ${Y?`<div class="pacom-alert-banner">${Y}</div>`:""}

          ${C==="manual"?`
              ${X?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="lov-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${X.batchId}</span>
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
                            ${X.receipts.map(l=>`
                                <tr>
                                  <td><code style="font-size:12px;">${l.deviceId}</code></td>
                                  <td>${l.command}</td>
                                  <td>${String(l.targetValue)}${l.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${l.errorMessage}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${l.status==="verified_success"?"pacom-badge--online":l.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${l.status}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${K?`
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
                          <span class="lov-setting-title">联动动作列表（${A.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${A.map((l,L)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" data-draft-dev="${L}" aria-label="目标设备">
                                ${c.map(V=>`<option value="${V.id}" ${V.id===l.deviceId?"selected":""}>${V.name}</option>`).join("")}
                              </select>
                              <select class="pacom-select" data-draft-cmd="${L}" aria-label="执行指令">
                                <option value="lighting.dimming" ${l.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${l.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${l.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" data-draft-val="${L}" value="${l.targetValue}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${L}" ${A.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="lov-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit">保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="lov-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${q}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${j.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${j.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="lov-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':j.map(l=>{const L=Dt(l),V=l.actions.slice(0,3).map(re=>{const he=c.find($e=>$e.id===re.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??re.deviceId,J=re.command==="lighting.dimming"?`亮度 ${re.targetValue}%`:re.command==="hvac.setpoint"?`设温 ${re.targetValue}°C`:re.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${he} → ${J}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${l.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${L.map(re=>`<span class="pacom-badge pacom-badge--accent">${re}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${l.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${l.description}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${V}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${l.lastExecutedAt?l.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${l.id}" ${y?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:C==="schedule_oss"?`
                <div class="lov-kpi-strip lov-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">当前优化启停模式</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${E.title}</div>
                    <span class="lov-kpi-delta">${E.estSaving}</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">明日预测预启动时刻</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${E.predictedStart}</div>
                    <span class="lov-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">本周累计节省运行工时</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${E.savedHours}</div>
                    <span class="lov-kpi-delta">当前人工覆盖挂起：${Q.length} 台</span>
                  </div>
                </div>

                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="lov-mode-grid">
                    ${Te.map(l=>`
                      <button type="button" class="lov-mode-card" aria-pressed="${O===l.id}" data-oss-mode="${l.id}" ${y?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${l.title}</strong>
                          <span class="pacom-badge ${O===l.id?"pacom-badge--online":"pacom-badge--neutral"}">${O===l.id?"当前生效":l.badge}</span>
                        </div>
                        <span class="lov-setting-desc">${l.desc}</span>
                        <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${l.estSaving}</span>
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
                          ${le.map(l=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${l.name}</span>
                                    ${l.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${l.windowLabel}</div>
                                </td>
                                <td>${qt(l.startHour,l.endHour,l.enabled)}</td>
                                <td><span class="pacom-row-sub">${l.scope}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${l.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="lov-switch"
                                      role="switch"
                                      aria-checked="${l.enabled}"
                                      aria-label="切换排程 ${l.name}"
                                      data-toggle-schedule="${l.id}"
                                      ${y?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(l=>{const L=l==="all"?"全部":Xe[l]??l,V=l==="all"?G.length+P.length:l==="cbm"?P.length:G.filter(re=>re.category===l).length;return`
                            <button type="button" class="lov-count-pill" aria-pressed="${U===l}" data-rule-cat="${l}">
                              <span>${L}</span><span class="lov-count-num">${V}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="lov-settings-card">
                    ${w.map(l=>{const L=ie===l.id;return`
                          <div class="lov-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="lov-setting-meta">
                                <span class="lov-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${Xe[l.category]??l.category}</span>
                                  <span>${l.name}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${l.version}</span>
                                </span>
                                <span class="lov-setting-desc">${l.summary} · 范围：${l.scopeLabel} · 回执：${l.receiptSummary??"已同步"}</span>
                              </div>
                              <div class="lov-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${l.id}">${L?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${l.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="lov-switch"
                                  role="switch"
                                  aria-checked="${l.enabled?"true":"false"}"
                                  aria-label="切换 ${l.name}"
                                  data-toggle-strategy-rule="${l.id}"
                                  data-rule-ver="${l.version}"
                                  data-rule-next="${!l.enabled}"
                                  ${x?"":"disabled"}
                                >
                                  <span class="lov-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${L?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${l.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":l.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${l.scopeLabel} · 当前版本：v${l.version} · 最近同步：${l.receiptSummary??"已同步"}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${B?P.map(l=>{const L=Math.min(100,Math.round(l.runtimeHours/l.thresholdHours*100));return`
                                <div class="lov-setting-row">
                                  <div class="lov-setting-meta" style="gap:6px;">
                                    <span class="lov-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${l.name}</span>
                                      <span class="pacom-badge ${L>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${l.runtimeHours} / ${l.thresholdHours} h（${L}%）</span>
                                    </span>
                                    <div class="lov-progress-track" style="max-width:340px;">
                                      <div class="lov-progress-fill" style="width:${L}%; background:${L>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="lov-setting-desc">绑定设备：${l.equipment} · 上次重置：${l.lastReset}</span>
                                  </div>
                                  <div class="lov-setting-control">
                                    <span class="pacom-row-sub">${l.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="lov-switch" role="switch" aria-checked="${l.enabled}" data-toggle-cbm="${l.id}" aria-label="切换 ${l.name}" ${x?"":"disabled"}>
                                      <span class="lov-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,e.querySelectorAll("[data-scene-tab]").forEach(l=>{l.addEventListener("click",()=>{C=l.dataset.sceneTab??"manual",_="",se()})}),e.querySelectorAll("[data-toggle-overrides]").forEach(l=>{l.addEventListener("click",()=>{N=!N,se()})}),e.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{Q=[],_="已释放全部人工覆盖设备，自动节能策略已恢复托管。",se()}),e.querySelectorAll("[data-release-one]").forEach(l=>{l.addEventListener("click",()=>{const L=l.dataset.releaseOne;Q=Q.filter(V=>V.id!==L),_="已恢复该设备的自动策略托管。",se()})}),e.querySelectorAll("[data-toggle-cmdlog]").forEach(l=>{l.addEventListener("click",()=>{ne=!ne,se()})}),e.querySelectorAll("[data-log-filter]").forEach(l=>{l.addEventListener("click",()=>{k=l.dataset.logFilter??"all",se()})}),e.querySelector("[data-close-batch]")?.addEventListener("click",()=>{X=null,se()}),e.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),e.querySelectorAll("[data-oss-mode]").forEach(l=>{l.addEventListener("click",()=>{const L=l.dataset.ossMode;if(!L)return;O=L;const V=Te.find(re=>re.id===L);_=`已切换至「${V?.title??L}」模式（明日预测启动 ${V?.predictedStart??""}）。`,se()})}),e.querySelectorAll("[data-toggle-schedule]").forEach(l=>{l.addEventListener("click",()=>{const L=l.dataset.toggleSchedule,V=le.find(re=>re.id===L);V&&(V.enabled=!V.enabled,_=`排程「${V.name}」已${V.enabled?"恢复启用":"临时暂停"}。`,se())})}),e.querySelectorAll("[data-rule-cat]").forEach(l=>{l.addEventListener("click",()=>{U=l.dataset.ruleCat??"all",se()})}),e.querySelectorAll("[data-expand-rule]").forEach(l=>{l.addEventListener("click",()=>{const L=l.dataset.expandRule??null;ie=ie===L?null:L,se()})}),e.querySelectorAll("[data-toggle-cbm]").forEach(l=>{l.addEventListener("click",()=>{const L=P.find(V=>V.id===l.dataset.toggleCbm);L&&(L.enabled=!L.enabled,_=`工时维保规则「${L.name}」已${L.enabled?"启用":"停用"}。`,se())})}),e.querySelectorAll("[data-toggle-strategy-rule]").forEach(l=>{l.addEventListener("click",async()=>{Y="";try{await t.toggleRuntimeRule(l.dataset.toggleStrategyRule,l.dataset.ruleNext==="true",Number(l.dataset.ruleVer)),o=await t.getRuntimeSettings(r.projectId),_="条件联动规则状态与版本回执已更新。",se()}catch(L){Y=L instanceof Error?L.message:String(L),se()}})}),e.querySelectorAll("[data-toggle-create]").forEach(l=>{l.addEventListener("click",()=>{K=!K,se()})}),e.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{A.push({deviceId:c[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),se()}),e.querySelectorAll("[data-del-draft-action]").forEach(l=>{l.addEventListener("click",()=>{const L=Number(l.dataset.delDraftAction);A.length>1&&(A.splice(L,1),se())})}),e.querySelectorAll("[data-draft-dev]").forEach(l=>{l.addEventListener("change",()=>{const L=A[Number(l.dataset.draftDev)];L&&(L.deviceId=l.value)})}),e.querySelectorAll("[data-draft-cmd]").forEach(l=>{l.addEventListener("change",()=>{const L=A[Number(l.dataset.draftCmd)];L&&(L.command=l.value)})}),e.querySelectorAll("[data-draft-val]").forEach(l=>{l.addEventListener("change",()=>{const L=A[Number(l.dataset.draftVal)];L&&(L.targetValue=l.value)})}),e.querySelector("[data-scene-search]")?.addEventListener("input",l=>{const L=l.currentTarget,V=L.selectionStart??L.value.length;q=L.value,se();const re=e.querySelector("[data-scene-search]");re&&(re.focus(),re.setSelectionRange(V,V))}),e.querySelectorAll("[data-exec-scene]").forEach(l=>{l.addEventListener("click",async()=>{Y="";const L=a.find(V=>V.id===l.dataset.execScene);try{X=await t.executeScene(l.dataset.execScene),a=await t.listScenes(r.floorId),ce.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:L?.name??"E7F 场景",action:`${X.receipts.length} 台设备联动下发`,status:"verified"}),se()}catch(V){Y=V instanceof Error?V.message:String(V),se()}})}),e.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async l=>{l.preventDefault();const L=new FormData(l.currentTarget);try{await t.createScene({projectId:r.projectId,floorId:r.floorId,name:String(L.get("name")??""),description:String(L.get("description")??""),actions:A.map(V=>({deviceId:V.deviceId,command:V.command,targetValue:V.targetValue==="true"?!0:V.targetValue==="false"?!1:Number(V.targetValue)||50}))}),a=await t.listScenes(r.floorId),K=!1,_=`快捷场景已保存（共绑定 ${A.length} 条联动动作）。`,se()}catch(V){Y=V instanceof Error?V.message:String(V),se()}})}se(),window.addEventListener("hashchange",()=>be(),{once:!0})}function Ve(e,t){return e.length===0?'<div class="lov-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':e.map(s=>`
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
            ${t?"":"disabled"}
          >
            <span class="lov-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function Ot(e,t,s){let a="calendar",o=await t.getRuntimeSettings(r.projectId),c=o.calendar.workdayStart,C=o.calendar.workdayEnd,O=o.calendar.nightGuardStart,U=o.calendar.nightGuardEnd,X=!0,q=[];const K=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let N="flat";const ne={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},k={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},ie={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},_={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},Y=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let Q="",ce="";function P(){const A=s.scope.canEditDeployment,le=o.rules.filter(p=>p.category==="weather_area"),be=o.rules.filter(p=>p.category==="metering_carbon"),se=o.rules.filter(p=>p.category==="templates");e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">运行设置</h1>
              <div class="pacom-tabs" role="tablist" aria-label="运行设置分类">
                <button class="pacom-tab" role="tab" aria-selected="${a==="calendar"}" data-stab="calendar">运行日历</button>
                <button class="pacom-tab" role="tab" aria-selected="${a==="energy_weather"}" data-stab="energy_weather">能碳与气象</button>
                <button class="pacom-tab" role="tab" aria-selected="${a==="guardrails"}" data-stab="guardrails">控制与安全</button>
                <button class="pacom-tab" role="tab" aria-selected="${a==="notifications"}" data-stab="notifications">通知与工单规则</button>
              </div>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">项目范围：广实2号园</span>
              <span class="pacom-badge ${A?"pacom-badge--online":"pacom-badge--warning"}">
                ${A?"可修改并下发配置":"当前角色只读"}
              </span>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:8px 6px 32px;">
          <div style="width:100%; max-width:920px; margin:0 auto; display:flex; flex-direction:column; gap:20px;">
            ${Q?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${Q}</span></div>`:""}
            ${ce?`<div class="pacom-alert-banner">${ce}</div>`:""}

            ${a==="calendar"?`
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
                        <input class="pacom-input" style="width:116px;" type="time" data-cal-start value="${c}" aria-label="工作日上班时间" ${A?"":"disabled"} />
                        <span class="pacom-row-sub">至</span>
                        <input class="pacom-input" style="width:116px;" type="time" data-cal-end value="${C}" aria-label="工作日下班时间" ${A?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">夜间值守巡检窗口</span>
                        <span class="lov-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:116px;" type="time" data-night-start value="${O}" aria-label="夜间值守开始" ${A?"":"disabled"} />
                        <span class="pacom-row-sub">至次日</span>
                        <input class="pacom-input" style="width:116px;" type="time" data-night-end value="${U}" aria-label="夜间值守结束" ${A?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">自动跳过中国法定节假日</span>
                        <span class="lov-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                      </div>
                      <div class="lov-setting-control">
                        <span class="pacom-row-sub">${X?"已开启":"已关闭"}</span>
                        <button type="button" class="lov-switch" role="switch" aria-checked="${X}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${A?"":"disabled"}>
                          <span class="lov-switch-thumb"></span>
                        </button>
                      </div>
                    </div>
                    <div class="lov-setting-row" style="justify-content:flex-end;">
                      <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                      <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${A?"":"disabled"}>保存并校验版本</button>
                    </div>
                  </div>
                </section>

                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">特殊例外日期（加班 / 接待覆盖默认日历）</h2>
                    <span class="pacom-row-sub">共 ${K.length} 条</span>
                  </div>
                  <div class="lov-settings-card">
                    ${K.map(p=>`
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title"><span>${p.date}</span><span class="pacom-badge pacom-badge--accent">${p.mode}</span></span>
                            <span class="lov-setting-desc">${p.label}</span>
                          </div>
                          <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${p.id}" ${A?"":"disabled"}>移除</button>
                        </div>`).join("")}
                    <form data-add-sd-form class="lov-setting-row" style="display:grid; grid-template-columns:145px 1fr 148px auto; gap:8px; align-items:center;">
                      <input class="pacom-input" name="date" type="date" required ${A?"":"disabled"} />
                      <input class="pacom-input" name="label" placeholder="说明（如：重要接待日 / 实验加班）" required ${A?"":"disabled"} />
                      <select class="pacom-select" name="mode" ${A?"":"disabled"}>
                        <option value="保持工作日工况">保持工作日工况</option>
                        <option value="全天节能值守">全天节能值守</option>
                      </select>
                      <button class="pacom-btn" type="submit" ${A?"":"disabled"}>+ 添加例外</button>
                    </form>
                  </div>
                </section>

                ${q.length>0?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">受影响的定时与夜间规则预览</h2>
                        <span class="pacom-row-sub">共 ${q.length} 条</span>
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
                              ${q.map(p=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${p.ruleName}</div>
                                      ${p.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${p.conflictWarning}</div>`:""}
                                    </td>
                                    <td>${p.beforeWindow}</td>
                                    <td><strong>${p.afterWindow}</strong></td>
                                    <td>
                                      <span class="pacom-badge ${p.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                        ${p.conflictWarning?"交叠警告":"自动跟随"}
                                      </span>
                                    </td>
                                  </tr>`).join("")}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>`:""}`:a==="energy_weather"?`
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
                          <select class="pacom-select" data-energy-field="weatherSource" aria-label="室外气象数据源" ${A?"":"disabled"}>
                            <option value="guanzhou_station" ${ne.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                            <option value="campus_sensor" ${ne.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                          </select>
                        </div>
                      </div>
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">E 栋计费与能效面积（m²）</span>
                          <span class="lov-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                        </div>
                        <div class="lov-setting-control">
                          <input class="pacom-input" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${ne.billingArea}" aria-label="计费面积" ${A?"":"disabled"} />
                        </div>
                      </div>
                      ${Ve(le,A)}
                    </div>
                  </section>

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">电价与碳排口径</h2>
                      <div class="pacom-tabs">
                        <button class="pacom-tab" aria-selected="${N==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                        <button class="pacom-tab" aria-selected="${N==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                      </div>
                    </div>
                    <div class="lov-settings-card">
                      ${N==="flat"?`
                          <div class="lov-setting-row">
                            <div class="lov-setting-meta">
                              <span class="lov-setting-title">综合电价参考（元 / kWh）</span>
                              <span class="lov-setting-desc">用于数据分析中的月度节能金额估算</span>
                            </div>
                            <div class="lov-setting-control">
                              <input class="pacom-input" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${ne.tariffYuan}" aria-label="综合电价" ${A?"":"disabled"} />
                            </div>
                          </div>`:`
                          <div class="lov-setting-row">
                            <div class="lov-setting-meta">
                              <span class="lov-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                              <span class="lov-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                            </div>
                            <div class="lov-setting-control" style="gap:6px;">
                              <span class="pacom-row-sub">峰</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${ne.tariffPeak}" ${A?"":"disabled"} />
                              <span class="pacom-row-sub">平</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${ne.tariffFlat}" ${A?"":"disabled"} />
                              <span class="pacom-row-sub">谷</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${ne.tariffValley}" ${A?"":"disabled"} />
                            </div>
                          </div>`}
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">区域电网碳排放因子</span>
                          <span class="lov-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                        </div>
                        <div class="lov-setting-control">
                          <select class="pacom-select" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${A?"":"disabled"}>
                            <option value="0.5271" ${ne.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                            <option value="0.5703" ${ne.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                          </select>
                        </div>
                      </div>
                      ${Ve(be,A)}
                      <div class="lov-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${A?"":"disabled"}>保存口径参数</button>
                      </div>
                    </div>
                  </section>`:a==="guardrails"?`
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
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="minTemp" value="${k.minTemp}" aria-label="最低设定温度" ${A?"":"disabled"} />
                            <span class="pacom-row-sub">至</span>
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="maxTemp" value="${k.maxTemp}" aria-label="最高设定温度" ${A?"":"disabled"} />
                            <span class="pacom-row-sub">°C</span>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">人工覆盖自动释放时长</span>
                            <span class="lov-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                          </div>
                          <div class="lov-setting-control">
                            <select class="pacom-select" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${A?"":"disabled"}>
                              <option value="2h" ${k.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                              <option value="4h" ${k.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                              <option value="eod" ${k.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                              <option value="permanent" ${k.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                            </select>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">控制指令回读超时阈值（秒）</span>
                            <span class="lov-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                          </div>
                          <div class="lov-setting-control">
                            <input class="pacom-input" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${k.readbackTimeoutSec}" aria-label="回读超时阈值" ${A?"":"disabled"} />
                            <span class="pacom-row-sub">秒</span>
                          </div>
                        </div>
                        <div class="lov-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${A?"":"disabled"}>保存安全边界</button>
                        </div>
                      </div>
                    </section>

                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">标准设备参数模板</h2>
                        <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                      </div>
                      <div class="lov-settings-card">
                        ${Ve(se,A)}
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
                            <input class="pacom-input" style="width:72px;" type="number" data-auto-wo="delayMin" value="${ie.delayMin}" ${A?"":"disabled"} />
                            <span class="pacom-row-sub">分钟</span>
                            <button type="button" class="lov-switch" role="switch" aria-checked="${ie.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${A?"":"disabled"}>
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
                            <select class="pacom-select" data-auto-wo="defaultGroup" aria-label="默认处理组" ${A?"":"disabled"}>
                              <option value="暖通运维组" ${ie.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                              <option value="强电照明组" ${ie.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                              <option value="园区物业值班组" ${ie.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                            </select>
                            <span class="pacom-row-sub">防重</span>
                            <button type="button" class="lov-switch" role="switch" aria-checked="${ie.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${A?"":"disabled"}>
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
                            <input class="pacom-input" style="width:116px;" type="time" data-digest-time value="${_.dailyDigestTime}" aria-label="每日简报发送时间" />
                            <button type="button" class="lov-switch" role="switch" aria-checked="${_.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报">
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
                            <button type="button" class="lov-switch" role="switch" aria-checked="${_.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰">
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
                              ${Y.map(p=>`
                                  <tr>
                                    <td><strong>${p.groupName}</strong></td>
                                    <td>${p.scope}</td>
                                    <td><span class="pacom-badge pacom-badge--neutral">${p.severity}</span></td>
                                    <td><span class="pacom-badge pacom-badge--accent">${p.channels}</span></td>
                                    <td style="text-align:right;">
                                      <button type="button" class="lov-switch" role="switch" aria-checked="${p.enabled}" data-toggle-nr="${p.id}" aria-label="切换 ${p.groupName} 通知规则">
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
    `,e.querySelectorAll("[data-stab]").forEach(p=>{p.addEventListener("click",()=>{a=p.dataset.stab??"calendar",Q="",ce="",P()})}),e.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{X=!X,Q=`法定节假日自动跳过已${X?"开启":"关闭"}。`,P()}),e.querySelector("[data-night-start]")?.addEventListener("change",p=>{O=p.currentTarget.value}),e.querySelector("[data-night-end]")?.addEventListener("change",p=>{U=p.currentTarget.value}),e.querySelector("[data-add-sd-form]")?.addEventListener("submit",p=>{p.preventDefault();const j=new FormData(p.currentTarget);K.push({id:`sd-${Date.now()}`,date:String(j.get("date")??""),label:String(j.get("label")??""),mode:String(j.get("mode")??"保持工作日工况")}),Q="已添加特殊例外日期，当日自动覆盖默认节假日排程。",P()}),e.querySelectorAll("[data-del-sd]").forEach(p=>{p.addEventListener("click",()=>{const j=K.findIndex(G=>G.id===p.dataset.delSd);j>=0&&K.splice(j,1),P()})}),e.querySelectorAll("[data-tariff-mode]").forEach(p=>{p.addEventListener("click",()=>{N=p.dataset.tariffMode??"flat",P()})}),e.querySelectorAll("[data-energy-field]").forEach(p=>{p.addEventListener("change",()=>{const j=p.dataset.energyField;j&&(ne[j]=p.value)})}),e.querySelector("[data-save-energy]")?.addEventListener("click",()=>{Q=N==="flat"?`能碳与气象口径已保存（面积 ${ne.billingArea} m² · 综合电价 ¥${ne.tariffYuan}/kWh · 因子 ${ne.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${ne.tariffPeak} / 平 ¥${ne.tariffFlat} / 谷 ¥${ne.tariffValley}）。`,P()}),e.querySelectorAll("[data-guard-field]").forEach(p=>{p.addEventListener("change",()=>{const j=p.dataset.guardField;j&&(k[j]=p.value)})}),e.querySelector("[data-save-guard]")?.addEventListener("click",()=>{Q=`控制安全边界已保存（温区 ${k.minTemp}–${k.maxTemp}°C · 超时 ${k.readbackTimeoutSec}s）。`,P()}),e.querySelectorAll("[data-auto-wo]").forEach(p=>{p.addEventListener("change",()=>{const j=p.dataset.autoWo;j&&(ie[j]=p.value),Q="自动转工单配置已更新。",P()})}),e.querySelectorAll("[data-toggle-autowo]").forEach(p=>{p.addEventListener("click",()=>{const j=p.dataset.toggleAutowo;j&&(ie[j]=!ie[j],Q="自动转工单保护策略已更新。",P())})}),e.querySelector("[data-digest-time]")?.addEventListener("change",p=>{_.dailyDigestTime=p.currentTarget.value,Q=`每日晨间简报发送时刻已更新为 ${_.dailyDigestTime}。`,P()}),e.querySelectorAll("[data-notify-key]").forEach(p=>{p.addEventListener("click",()=>{const j=p.dataset.notifyKey;j&&(_[j]=!_[j],Q="通知策略偏好已更新。",P())})}),e.querySelectorAll("[data-toggle-nr]").forEach(p=>{p.addEventListener("click",()=>{const j=Y.find(G=>G.id===p.dataset.toggleNr);j&&(j.enabled=!j.enabled,Q=`工作组「${j.groupName}」的通知分流规则已${j.enabled?"启用":"停用"}。`,P())})}),e.querySelector("[data-cal-start]")?.addEventListener("change",p=>{c=p.currentTarget.value}),e.querySelector("[data-cal-end]")?.addEventListener("change",p=>{C=p.currentTarget.value}),e.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{ce="",q=await t.previewCalendarImpact(r.projectId,c,C),P()}),e.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{ce="";try{const p=await t.saveWorkCalendar(r.projectId,c,C,o.calendar.version);o={...o,calendar:{...p,nightGuardStart:O,nightGuardEnd:U}},Q=`运行日历已保存至 v${p.version}（工作日 ${p.workdayStart}–${p.workdayEnd} · 夜间值守 ${O}–${U}）`,q=[],P()}catch(p){ce=p instanceof Error?p.message:String(p),P()}}),e.querySelectorAll("[data-toggle-rule]").forEach(p=>{p.addEventListener("click",async()=>{ce="";try{await t.toggleRuntimeRule(p.dataset.toggleRule,p.dataset.ruleNext==="true",Number(p.dataset.ruleVer)),o=await t.getRuntimeSettings(r.projectId),Q="策略状态与版本回执已更新。",P()}catch(j){ce=j instanceof Error?j.message:String(j),P()}})})}P()}const Je="pacom.web.sidebar.collapsed",Rt=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Ue=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"运行设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],He={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"运行设置",deployment:"系统部署",account:"机构与账户"},et=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function We(){const e=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return e in He?e:"home"}function xe(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function Pt(e,t,s,a){e.classList.remove("bare-login");let o=s,c=We(),C=localStorage.getItem(Je)==="1",O=!1,U=!1,X="",q=!1,K=0,N={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};const ne=t.mode==="demo"&&typeof t.switchDemoRole=="function";async function k(){try{const[E,y,x,D,l]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(r.floorId).catch(()=>[]),t.listAlarms(r.floorId).catch(()=>[]),t.listWorkOrders(r.floorId).catch(()=>[]),t.listScenes(r.floorId).catch(()=>[])]);N={devices:y,zones:E.zones,alarms:x,workOrders:D,scenes:l},K=x.filter(L=>L.status==="active").length,le()}catch{}}function ie(){return Ue.map(E=>`
        ${E.id==="settings"?'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${E.id}" aria-current="${c===E.id?"page":"false"}" title="${E.label}">
          ${ue(E.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${E.label}</span>
          ${E.id==="alarms"&&K>0?`<span class="pacom-nav-count" title="待处理告警 ${K} 条">${K}</span>`:""}
        </button>`).join("")}function _(){const E=X.trim().toLowerCase(),y=E?Ue.filter(J=>J.label.toLowerCase().includes(E)).slice(0,4):Ue,x=E?N.devices.filter(J=>`${J.name} ${J.id} ${J.category}`.toLowerCase().includes(E)).slice(0,5):N.devices.slice(0,3),D=E?N.zones.filter(J=>J.name.toLowerCase().includes(E)).slice(0,3):[],l=E?N.alarms.filter(J=>`${J.title} ${J.message} ${J.id}`.toLowerCase().includes(E)).slice(0,4):N.alarms.filter(J=>J.status==="active").slice(0,2),L=E?N.workOrders.filter(J=>`${J.title} ${J.id}`.toLowerCase().includes(E)).slice(0,3):[],V=E?N.scenes.filter(J=>`${J.name} ${J.description}`.toLowerCase().includes(E)).slice(0,3):[],re=E?et.filter(J=>`${J.title} ${J.category}`.toLowerCase().includes(E)).slice(0,4):et.slice(0,2),he=[];return x.length&&he.push(`<div class="pacom-search-group">${E?"设备（空间总览）":"常用设备直达"}</div>`+x.map(J=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(J.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${xe(J.name)}</span><span class="pacom-badge ${J.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${J.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),D.length&&he.push('<div class="pacom-search-group">功能区</div>'+D.map(J=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(J.id)}"><span>${xe(J.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),l.length&&he.push(`<div class="pacom-search-group">${E?"告警":"待处理告警"}</div>`+l.map(J=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(J.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${xe(J.title)}</span><span class="pacom-badge pacom-badge--warning">${J.status==="active"?"待处理":"已确认"}</span></button>`).join("")),L.length&&he.push('<div class="pacom-search-group">运维工单</div>'+L.map(J=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(J.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${xe(J.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),V.length&&he.push('<div class="pacom-search-group">智能策略</div>'+V.map(J=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${xe(J.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),re.length&&he.push('<div class="pacom-search-group">图纸与工程文档</div>'+re.map(J=>`<button type="button" class="pacom-search-hit" data-search-hash="${J.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${xe(J.title)}</span><span class="pacom-badge pacom-badge--neutral">${xe(J.category)}</span></button>`).join("")),y.length&&he.push('<div class="pacom-search-group">工作区</div>'+y.map(J=>`<button type="button" class="pacom-search-hit" data-search-hash="#${J.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${ue(J.icon,14)}${xe(J.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),he.length?he.join(""):`<div class="pacom-nav-empty">未找到与「${xe(X)}」匹配的设备、区域、告警、工单或图纸</div>`}function Y(E){E.querySelectorAll("[data-search-hash]").forEach(y=>{y.addEventListener("click",()=>{const x=y.dataset.searchHash||"#home";q=!1,X="",Q(),O=!1,window.location.hash===x?(c=We(),j(!0)):window.location.hash=x})})}function Q(){if(e.querySelector('[data-role="cmd-scrim"]')?.remove(),!q)return;const E=document.createElement("div");E.className="pacom-cmd-scrim",E.dataset.role="cmd-scrim",E.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${ue("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${xe(X)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${_()}
        </div>
      </div>
    `,e.appendChild(E),E.addEventListener("click",D=>{D.target===E&&(q=!1,Q())});const y=E.querySelector('[data-role="cmd-input"]'),x=E.querySelector('[data-role="cmd-body"]');x&&Y(x),y?.focus(),y?.addEventListener("input",D=>{X=D.currentTarget.value,x&&(x.innerHTML=_(),Y(x))})}function ce(){if(!U)return"";const E=o.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${C?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${xe(o.roleLabel)}${ne?" · 演示":""}</small>
          </span>
          ${ue("check",16,"pacom-pop-check")}
        </button>

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${ue("settings",16)}</span>
          <span class="pacom-pop-text">机构设置</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${xe(E)}</span>
          <span class="pacom-pop-text">
            <b>${xe(o.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${ne?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">演示角色切换（RBAC 权限预览）</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(Ee).map(y=>{const x=Ee[y],D=y===o.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${D}" data-pop-role="${y}">
                      <span class="pacom-pop-text">
                        <b>${xe(x.roleLabel)}</b>
                        <small>${xe(x.displayName)}</small>
                      </span>
                      ${D?ue("check",16,"pacom-pop-check"):""}
                    </button>`}).join("")}
            </div>`:""}

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${ue("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function P(E){switch(document.title=`${He[c]} · PACOM Station`,c){case"home":await Mt(E,t,o);return;case"analysis":await kt(E,t);return;case"alarms":await ut(E,t,o);return;case"scenes":await Tt(E,t,o);return;case"settings":await Ot(E,t,o);return;case"deployment":await At(E,t,o);return;case"account":await it(E,t,o,y=>{o=y,j(!0)},A);return}}async function A(){U=!1,O=!1,q=!1,ge();try{await t.logout()}finally{window.location.hash="#login",a()}}function le(){const E=e.querySelector('[data-role="nav-list"]');E&&(E.innerHTML=ie(),se())}function be(){e.querySelector('[data-role="org-popover"]')?.remove();const E=e.querySelector('[data-role="org-menu-btn"]');if(E&&E.setAttribute("aria-expanded",String(U)),!U)return;const y=document.createElement("div");y.innerHTML=ce().trim();const x=y.firstElementChild;x&&(e.appendChild(x),p())}function se(){e.querySelectorAll("[data-route]").forEach(E=>{E.addEventListener("click",()=>{const y=E.dataset.route;y===c&&!O||(c=y,O=!1,U=!1,window.location.hash=`#${c}`,j(!0))})})}function p(){e.querySelectorAll('[data-pop-act="go-account"]').forEach(E=>{E.addEventListener("click",()=>{U=!1,O=!1,c="account",window.location.hash="#account",j(!0)})}),e.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{A()}),e.querySelectorAll("[data-pop-role]").forEach(E=>{E.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const y=E.dataset.popRole;U=!1,O=!1,o=await t.switchDemoRole(y),await j(!0)})})}async function j(E){const y=e.querySelector('[data-role="main-stage"]');if(!E&&y){const D=e.querySelector(".pacom-nav-rail");D&&(D.classList.toggle("is-collapsed",C),D.classList.toggle("is-mobile-open",O));const l=e.querySelector('[data-role="mobile-scrim"]');l&&l.classList.toggle("is-open",O),be();return}e.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${ue("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${He[c]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${xe(o.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${O?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${C?"is-collapsed":""} ${O?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${Rt}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${C?"展开侧栏":"收起侧栏"}" aria-label="${C?"展开侧栏":"收起侧栏"}">
              ${ue("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${ue("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${ie()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${c==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${U}" title="广州国家实验室 · ${xe(o.displayName)}">
              <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>
              <span class="pacom-org-name">广州国家实验室</span>
              ${ue("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,e.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{C=!C,U=!1,localStorage.setItem(Je,C?"1":"0");const D=e.querySelector(".pacom-nav-rail"),l=e.querySelector('[data-role="toggle-sidebar"]');D&&D.classList.toggle("is-collapsed",C),l&&(l.title=C?"展开侧栏":"收起侧栏",l.setAttribute("aria-label",l.title),l.innerHTML=ue("panel-left",16)),be()}),e.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{U=!1,be(),q=!0,Q()}),e.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{O=!O,j(!1)}),e.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{O=!1,U=!1,j(!1)}),e.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",D=>{D.stopPropagation(),U=!U,be()}),se(),be(),Q();const x=e.querySelector('[data-role="main-stage"]');x&&await P(x)}const G=E=>{const y=E.target;U&&!y?.closest('[data-role="org-popover"]')&&!y?.closest('[data-role="org-menu-btn"]')&&(U=!1,be())},w=E=>{if((E.metaKey||E.ctrlKey)&&E.key.toLowerCase()==="k"){E.preventDefault(),U=!1,be(),q=!q,Q();return}E.key==="Escape"&&(q?(q=!1,Q()):U?(U=!1,be()):O&&(O=!1,j(!1)))},B=()=>{c=We(),U=!1,O=!1,q=!1,j(!0),k()};function ge(){document.removeEventListener("click",G),document.removeEventListener("keydown",w),window.removeEventListener("hashchange",B)}document.addEventListener("click",G),document.addEventListener("keydown",w),window.addEventListener("hashchange",B),await j(!0),k()}const Nt=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,_t='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',Bt='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',Me=ue("x",16),tt={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},Vt={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function Ut(e){const t=e.replace(/\D/g,"");return t.length===11?`${t.slice(0,3)} •••• ${t.slice(7)}`:e}function Ie(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function at(e,t,s){e.classList.add("bare-login"),document.title="登录 · PACOM Station";let a=!1,o=!1,c="",C="",O="",U="",X=!1,q={},K="",N=!1,ne="",k=0,ie=null,_=null,Y="privacy",Q="",ce="",P="";const A=t.mode==="demo"&&typeof t.switchDemoRole=="function";function le(){ie!==null&&(window.clearInterval(ie),ie=null),e.classList.remove("bare-login")}function be(){k=60,ie!==null&&window.clearInterval(ie),ie=window.setInterval(()=>{k-=1,k<=0&&(k=0,ie!==null&&(window.clearInterval(ie),ie=null));const G=e.querySelector('[data-act="send-sms"]');G&&(G.disabled=k>0,G.textContent=k>0?`${k} 秒后重发`:ne?"重新获取":"获取验证码")},1e3)}function se(){if(!_)return"";if(_==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Me}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${Ie(ce)}" />
                  </div>
                </div>
                ${P?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${Ie(P)}</p>`:""}
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary">发送验证码</button>
            </div>
          </section>
        </div>
      `;if(_==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Me}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                ${A?"当前为离线演示环境，您可直接通过登录页的「演示角色快速体验」切换 5 类内置角色进入 E7F 工作区。":"正式接入账户服务后，将在此开放自助注册与机构邀请码加入流程。"}
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
              ${A?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">选择演示角色</button>':""}
            </div>
          </section>
        </div>
      `;if(_==="legal"){const G=tt[Y],w=["privacy","terms","service"].map(B=>`<button type="button" role="tab" aria-selected="${Y===B}" class="au-legal-tab ${Y===B?"is-active":""}" data-act="switch-legal" data-tab="${B}">${tt[B].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Me}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${w}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${G.items.map(B=>`<li>${Ie(B)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return _==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Me}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${Q||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:_==="demoRoles"&&A?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择演示角色</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Me}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(Ee).map(G=>{const w=Ee[G];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${G}">
                        <div>
                          <b>${Ie(w.roleLabel)} · ${Ie(w.displayName)}</b>
                          <small>${Ie(Vt[G])}</small>
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
      `:""}function p(){const G=a?`
        <div class="au-field ${q.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Ie(O)}" aria-invalid="${q.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${k>0?"disabled":""}>
              ${k>0?`${k} 秒后重发`:ne?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${Ie(q.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${ne?`验证码已发送至 ${Ie(Ut(ne))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${q.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Ie(c)}" aria-invalid="${q.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${Ie(q.id??"")}</p>
        </div>
      `,w=a?`
        <div class="au-field ${q.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Ie(U)}" aria-invalid="${q.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${Ie(q.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${q.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${o?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Ie(C)}" aria-invalid="${q.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${o?"隐藏密码":"显示密码"}">
              ${o?Bt:_t}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${Ie(q.pwd??"")}</p>
        </div>
      `;e.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${Nt}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${N?"disabled":""}>
                  ${G}
                  ${w}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${K?"":"hidden"}>${Ie(K)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${X?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${N?"disabled":""}>
                    ${N?"正在登录…":"登录"}
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
                ${A?`<div class="au-demo-bar">
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
      ${se()}
    `,j()}function j(){const G=e.querySelector("#au-id"),w=e.querySelector("#au-pwd"),B=e.querySelector("#au-sphone"),ge=e.querySelector("#au-scode"),E=e.querySelector('input[name="keep"]');G?.addEventListener("input",()=>{if(c=G.value,q.id||K){delete q.id,K="",G.closest(".au-field")?.classList.remove("bad");const y=e.querySelector("#au-id-err");y&&(y.textContent="");const x=e.querySelector("#au-login-ferr");x&&(x.hidden=!0)}}),w?.addEventListener("input",()=>{if(C=w.value,q.pwd||K){delete q.pwd,K="",w.closest(".au-field")?.classList.remove("bad");const y=e.querySelector("#au-pwd-err");y&&(y.textContent="");const x=e.querySelector("#au-login-ferr");x&&(x.hidden=!0)}}),B?.addEventListener("input",()=>{if(O=B.value,q.sphone||K){delete q.sphone,K="",B.closest(".au-field")?.classList.remove("bad");const y=e.querySelector("#au-sphone-err");y&&(y.textContent="");const x=e.querySelector("#au-login-ferr");x&&(x.hidden=!0)}}),ge?.addEventListener("input",()=>{if(U=ge.value.replace(/\D/g,"").slice(0,6),ge.value=U,q.scode||K){delete q.scode,K="",ge.closest(".au-field")?.classList.remove("bad");const y=e.querySelector("#au-scode-err");y&&(y.textContent="");const x=e.querySelector("#au-login-ferr");x&&(x.hidden=!0)}}),E?.addEventListener("change",()=>{X=E.checked}),e.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{o=!o,p(),e.querySelector("#au-pwd")?.focus()}),e.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{a=!a,q={},K="",p(),e.querySelector(a?"#au-sphone":"#au-id")?.focus()}),e.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const y=O.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(y)){q={sphone:"请输入有效的手机号码"},p(),e.querySelector("#au-sphone")?.focus();return}q={},ne=y,be(),p(),e.querySelector("#au-scode")?.focus()}),e.querySelector('form[data-form="login"]')?.addEventListener("submit",async y=>{if(y.preventDefault(),!N){if(q={},K="",a?(O.trim()||(q.sphone="请输入手机号码"),/^\d{6}$/.test(U.trim())||(q.scode="请输入 6 位验证码")):(c.trim()||(q.id="请输入电子邮箱或手机号码"),C||(q.pwd="请输入密码")),Object.keys(q).length>0){p();const x=Object.keys(q)[0];e.querySelector(`#au-${x}`)?.focus();return}N=!0,p();try{const x=await t.login({account:(a?O:c).trim(),password:a?U.trim():C});le(),s(x)}catch(x){N=!1,K=x instanceof Error?x.message:"账户或密码不正确",p()}}}),e.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{ce=c.trim(),P="",_="reset",p(),e.querySelector("#au-rs-id")?.focus()}),e.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{_="register",p()}),e.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{_="legal",p()}),e.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{Q="",_="contact",p()}),e.querySelectorAll('[data-act="open-demo-roles"]').forEach(y=>{y.addEventListener("click",()=>{_="demoRoles",p()})}),e.querySelectorAll('[data-act="close-modal"]').forEach(y=>{y.addEventListener("click",()=>{_=null,p()})}),e.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",y=>{y.target===y.currentTarget&&(_=null,p())}),e.querySelectorAll('[data-act="switch-legal"]').forEach(y=>{y.addEventListener("click",()=>{const x=y.dataset.tab;x&&(Y=x,p())})}),e.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),Q="已复制"}catch{Q="support@pacom.cn"}p()}),e.querySelector("#au-reset-form")?.addEventListener("submit",y=>{y.preventDefault(),ce=e.querySelector("#au-rs-id")?.value.trim()??"",ce?A?P="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":P="如账户存在，验证码已发送。":P="请输入电子邮箱或手机号码",p()}),e.querySelectorAll('[data-act="pick-demo-role"]').forEach(y=>{y.addEventListener("click",async()=>{const x=y.dataset.roleId;if(!x||!t.switchDemoRole)return;const D=await t.switchDemoRole(x);le(),s(D)})})}p()}async function Wt(){const e=document.getElementById("app");if(e)try{const t=lt(),s=await t.getSession(),a=async o=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await Pt(e,t,o,()=>{at(e,t,c=>{a(c)})})};if(!s||window.location.hash==="#login"){at(e,t,o=>{a(o)});return}await a(s)}catch(t){e.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(t)}</div></div>`}}Wt();
//# sourceMappingURL=index-udQD9WQf.js.map
