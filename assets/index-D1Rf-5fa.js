(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const q of r.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&s(q)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();const p={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},qe={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[p.projectId,p.project1Id],allowedBuildingIds:[p.buildingId,p.buildingFId],allowedFloorIds:[p.lockedFloor8Id,p.floorId,p.lockedFloor6Id],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[p.projectId],allowedBuildingIds:[p.buildingId,p.buildingFId],allowedFloorIds:[p.lockedFloor8Id,p.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[p.projectId],allowedBuildingIds:[p.buildingId],allowedFloorIds:[p.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[p.projectId],allowedBuildingIds:[p.buildingId],allowedFloorIds:[p.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[p.projectId],allowedBuildingIds:[p.buildingId],allowedFloorIds:[p.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},Ge="pacom.web.demo.role";class It{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){const t=sessionStorage.getItem(Ge);t&&qe[t]&&(this.activeSession=structuredClone(qe[t]));const a=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:p.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:a,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:a,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:p.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:a,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:a,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:p.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:a,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:a,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:p.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:a,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:a,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:a,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:a,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:p.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:a,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:p.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:a,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:a,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:a,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:a},{id:"conn-e7f-dali",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:a},{id:"conn-e7f-modbus",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:p.projectId,floorId:p.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:p.projectId,floorId:p.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:p.projectId,floorId:p.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:p.projectId,floorId:p.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:p.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:p.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:a,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:p.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:a,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:p.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:a,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:p.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:a,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:p.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:a,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:p.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:a,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(qe).map((s,i)=>({userId:s.userId,displayName:s.displayName,email:`${s.role.replaceAll("_",".")}@pacom.local`,role:s.role,roleLabel:s.roleLabel,scopeSummary:s.scope.allowedZoneIds?.length?`E栋 7F（${s.scope.allowedZoneIds.length} 个我的区域）`:`${s.scope.allowedProjectIds.length} 项目 / ${s.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:i===0?a:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(t,a,s,i,r){this.traces.unshift({at:new Date().toISOString(),channel:t,operation:a,endpoint:s,request:r,response:i}),this.traces.length>40&&this.traces.pop()}pushAudit(t,a,s,i){const r=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:r?.displayName??"anonymous",role:r?.role??"member",action:t,target:a,result:s,detail:i})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(t){if(!t.account.trim()||!t.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const a=t.account.includes("admin")?"org_admin":t.account.includes("eng")?"commissioning_engineer":t.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(qe[a]),sessionStorage.setItem(Ge,a),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:t.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(Ge),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(t){return this.activeSession=structuredClone(qe[t]),sessionStorage.setItem(Ge,t),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${t}`,this.activeSession),structuredClone(this.activeSession)}async getSpatialTree(){const t=this.requireSession(),a=[{id:p.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"},{id:p.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"}],s=[{id:p.buildingId,projectId:p.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.png"},{id:p.buildingFId,projectId:p.projectId,name:"F栋",aboveFloors:12,belowFloors:2,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.png"}],i={projects:a.filter(r=>t.scope.allowedProjectIds.includes(r.id)),buildings:s.filter(r=>t.scope.allowedBuildingIds.includes(r.id)),floors:[{id:p.lockedFloor8Id,buildingId:p.buildingId,kind:"above",level:8,name:"8F",plan:null},{id:p.floorId,buildingId:p.buildingId,kind:"above",level:7,name:"7F",areaSqm:1383.1,plan:{floorId:p.floorId,imageUrl:"./media/7F.webp",planVersion:1,updatedAt:"2026-11-22T00:00:00Z"}},{id:p.lockedFloor6Id,buildingId:p.buildingId,kind:"above",level:6,name:"6F",plan:null}],zones:[{id:"zone-e7f-lab-east",floorId:p.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:p.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:p.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:p.floorId,name:"核心走廊与弱电井",category:"corridor"}]};return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:i.projects.length,buildings:i.buildings.length,floors:i.floors.length}),i}async getFloorDevices(t){const a=this.requireSession();if(!a.scope.allowedFloorIds.includes(t)){const i={code:"FORBIDDEN",status:403,message:`当前角色「${a.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,i),this.pushAudit("floor.read",t,"denied",i.message),new Error(`403 FORBIDDEN: ${i.message}`)}if(t!==p.floorId)return[];let s=structuredClone(this.devices);return a.scope.allowedZoneIds?.length&&(s=s.filter(i=>i.logicalZoneId&&a.scope.allowedZoneIds.includes(i.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,{count:s.length}),s}async dispatchControlBatch(t){const a=this.requireSession();if(!a.scope.canControlDevices||!a.scope.allowedFloorIds.includes(t.floorId))throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权下发控制指令`);const s=`batch-e7f-${Date.now().toString(36)}`,i={batchId:s,floorId:t.floorId,createdBy:a.userId,createdAt:new Date().toISOString(),receipts:t.targets.map(r=>({deviceId:r.deviceId,command:r.command,targetValue:r.targetValue,status:"queued"}))};return this.batches.set(s,i),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",i,t),this.pushAudit("control.dispatch",s,"success",`下发 ${t.targets.length} 台设备`),i.receipts.forEach((r,q)=>{const O=this.devices.find(P=>P.id===r.deviceId);setTimeout(()=>{r.status="dispatched",r.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:s,deviceId:r.deviceId,status:"dispatched",at:r.dispatchedAt})},280+q*120),setTimeout(()=>{const P=new Date().toISOString();!O||O.connectivity==="offline"?(r.status="timeout",r.errorCode="GATEWAY_READBACK_TIMEOUT",r.errorMessage="设备离线，网关未收到回读确认",r.verifiedAt=P):(r.status="verified_success",r.observedValue=r.targetValue,r.verifiedAt=P,this.applyObservedTelemetry(O,r.command,r.targetValue,P)),this.emit({type:"control.receipt.updated",batchId:s,deviceId:r.deviceId,status:r.status,observedValue:r.observedValue,at:P})},900+q*220)}),structuredClone(i)}applyObservedTelemetry(t,a,s,i){a==="lighting.dimming"&&t.telemetry.dimming?(t.telemetry.dimming={...t.telemetry.dimming,value:s,collectedAt:i,stale:!1},t.telemetry.power&&(t.telemetry.power={...t.telemetry.power,value:Number(s)>0,collectedAt:i,stale:!1})):(a==="lighting.power"||a==="hvac.power")&&t.telemetry.power?t.telemetry.power={...t.telemetry.power,value:s,collectedAt:i,stale:!1}:a==="hvac.setpoint"&&t.telemetry.setpoint&&(t.telemetry.setpoint={...t.telemetry.setpoint,value:s,collectedAt:i,stale:!1}),this.emit({type:"telemetry.updated",floorId:t.floorId,deviceId:t.id,collectedAt:i,values:{[a]:s}})}async getControlBatch(t){this.requireSession();const a=this.batches.get(t);if(!a)throw new Error(`404 NOT_FOUND: 批次 ${t} 不存在`);return structuredClone(a)}async listAlarms(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==p.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(t,a){const s=this.requireSession();if(!s.scope.canManageAlarms){const r=`角色「${s.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",t,"denied",r),new Error(`403 FORBIDDEN: ${r}`)}const i=this.alarms.find(r=>r.id===t);if(!i)throw new Error(`404 NOT_FOUND: 告警 ${t} 不存在`);return i.status="acknowledged",i.acknowledgedAt=new Date().toISOString(),i.acknowledgedBy=s.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${t}/acknowledge`,i,{note:a}),this.pushAudit("alarm.acknowledge",t,"success",a),this.emit({type:"alarm.changed",floorId:i.floorId,alarmId:t,status:"acknowledged",at:i.acknowledgedAt}),structuredClone(i)}async listWorkOrders(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==p.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(t){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权创建工单`);const s=new Date().toISOString(),i={id:`wo-e7f-${Date.now().toString(36)}`,projectId:p.projectId,buildingId:p.buildingId,floorId:t.floorId,deviceId:t.deviceId??null,alarmId:t.alarmId??null,title:t.title,description:t.description,status:"open",assigneeId:null,createdAt:s,updatedAt:s};if(this.workOrders.unshift(i),t.alarmId){const r=this.alarms.find(q=>q.id===t.alarmId);r&&(r.workOrderId=i.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",i,t),this.pushAudit("work_order.create",i.id,"success",i.title),structuredClone(i)}async updateWorkOrderStatus(t,a){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权流转工单`);const i=this.workOrders.find(r=>r.id===t);if(!i)throw new Error(`404 NOT_FOUND: 工单 ${t} 不存在`);return i.status=a,i.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${t}`,i,{status:a}),this.pushAudit("work_order.update",t,"success",`状态更新为 ${a}`),structuredClone(i)}async updateDevicePlanPoint(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw this.pushAudit("device.plan_point",t.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权编辑图纸标点`);const s=this.devices.find(i=>i.id===t.deviceId);if(!s)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(s.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${s.version}，请刷新后重试`);return s.planPoint={floorId:t.floorId,planVersion:t.planVersion,x:Number(t.x.toFixed(4)),y:Number(t.y.toFixed(4))},s.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${t.deviceId}/plan-point`,s,t),this.pushAudit("device.plan_point",t.deviceId,"success",`坐标更新 (${s.planPoint.x}, ${s.planPoint.y})`),structuredClone(s)}async updateDeviceHardwareBinding(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权修改硬件绑定`);const s=this.devices.find(r=>r.id===t.deviceId);if(!s)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(s.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${s.version}）`);const i=new Date().toISOString();return s.physicalInstalled=t.physicalInstalled,s.physicalVerifiedAt=t.physicalInstalled?i:null,s.hardwareBinding={gatewayId:t.gatewayId,protocol:t.protocol,networkAddress:t.networkAddress,portOrChannel:t.portOrChannel,boundAt:i,boundBy:a.displayName},s.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${t.deviceId}/hardware-binding`,s,t),this.pushAudit("device.hardware_binding",t.deviceId,"success",`${t.protocol} ${t.networkAddress}`),structuredClone(s)}async listConnections(t){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(t){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权冻结交付批次`);const i=this.devices.filter(q=>q.physicalInstalled&&q.hardwareBinding).length,r={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:p.projectId,floorId:t,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:i,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:s.displayName,note:a||"例行交付基线冻结"};return this.deliveryBatches.unshift(r),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${t}/deliveries/freeze`,r,{note:a}),this.pushAudit("delivery.freeze",r.id,"success",`${i}/${this.devices.length} 已现场核验`),structuredClone(r)}async getAnalysisReport(t,a,s){this.requireSession();const i=a==="today"?1:a==="7d"?7:30,q={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*i)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*i).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(Q=>Q.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*i).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*i).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*i).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[t],O=a==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],P={category:t,range:a,scopeId:s,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:q.kpis,unit:q.unit,series:q.base.map((Q,D)=>({label:O[D],value:Math.round(Q*(t==="energy"||t==="carbon"?i/2+.5:1)),baseline:Math.round(Q*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:q.base[3],unit:q.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:q.base[4],unit:q.unit,status:t==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:q.base[1],unit:q.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${t}?range=${a}&scopeId=${s}`,{kpis:P.kpis.length}),P}async listScenes(t){return this.requireSession(),structuredClone(this.scenes)}async createScene(t){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const s={id:`scn-e7f-${Date.now().toString(36)}`,projectId:t.projectId,floorId:t.floorId,name:t.name,description:t.description,enabled:!0,scheduleSummary:"手动触发",actions:t.actions,lastExecutedAt:null};return this.scenes.unshift(s),this.record("REST","createScene","POST /api/v1/scenes",s,t),this.pushAudit("scene.create",s.id,"success",s.name),structuredClone(s)}async executeScene(t){const a=this.scenes.find(i=>i.id===t);if(!a)throw new Error(`404 NOT_FOUND: 场景 ${t} 不存在`);const s=await this.dispatchControlBatch({floorId:a.floorId,idempotencyKey:`scene-${t}-${Date.now()}`,targets:a.actions,reason:`触发场景：${a.name}`});return a.lastExecutedAt=new Date().toISOString(),a.lastBatchId=s.batchId,s}async getRuntimeSettings(t){return this.requireSession(),structuredClone({projectId:p.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(t,a,s){this.requireSession();const i=s>=this.calendar.nightGuardStart?`下班时间 ${s} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,r=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${a} - ${s}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${a} (-30m) ~ ${s} (+30m)`,conflictWarning:i},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:i}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",r,{workdayStart:a,workdayEnd:s}),r}async saveWorkCalendar(t,a,s,i){const r=this.requireSession();if(!r.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${r.roleLabel}」无权修改运行日历`);if(this.calendar.version!==i)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(a>=s)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:a,workdayEnd:s,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:a,workdayEnd:s,expectedVersion:i}),this.pushAudit("settings.calendar",p.projectId,"success",`${a}-${s}`),structuredClone(this.calendar)}async toggleRuntimeRule(t,a,s){const i=this.requireSession();if(!i.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权启停运行规则`);const r=this.rules.find(q=>q.id===t);if(!r)throw new Error(`404 NOT_FOUND: 规则 ${t} 不存在`);if(r.version!==s)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${r.version}）`);return r.enabled=a,r.version+=1,r.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${t}`,r,{enabled:a,expectedVersion:s}),this.pushAudit("settings.rule_toggle",t,"success",a?"启用":"停用"),structuredClone(r)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(t,a){const s=this.requireSession();if(s.role!=="org_admin"&&s.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const i=qe[a],r={userId:`inv-${Date.now().toString(36)}`,displayName:t.split("@")[0]||t,email:t,role:a,roleLabel:i.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(r),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",r,{email:t,role:a}),this.pushAudit("org.invite",t,"success",i.roleLabel),structuredClone(r)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(t,a){return t!==p.floorId?()=>{}:(this.listeners.add(a),()=>{this.listeners.delete(a)})}emit(t){this.record("WS",t.type,`WS /ws/v1/stream?floorId=${p.floorId}`,t),this.listeners.forEach(a=>a(t))}}function Et(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new It}const Lt={"building-2":'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',"settings-2":'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',check:'<path d="M20 6 9 17l-5-5"/>',menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',layers:'<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',list:'<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',"folder-kanban":'<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/>',plug:'<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>'};function jt(e){return e>=20?"1.5":e>=16?"1.75":e>=14?"2":"2.25"}function ve(e,t=16,a=""){const s=jt(t);return`<svg${a?` class="${a}"`:""} width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${s}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;">${Lt[e]}</svg>`}const at=[{id:"wg-hvac",name:"暖通运维组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋 5F–7F（HVAC、FCU 与 VAV 系统）",memberCount:3,membersSummary:"陈值班、林工、周工",notifyChannel:"站内 + 短信"},{id:"wg-elec",name:"强电照明组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋全楼照明与配电回路",memberCount:2,membersSummary:"黄工、刘工",notifyChannel:"站内 + 邮件"},{id:"wg-property",name:"园区物业值班组",defaultRoleLabel:"只读访客 / 值班巡检",locationScope:"广实2号园 / 全园区公共空间与值班台",memberCount:4,membersSummary:"张班长、王巡检、赵巡检、吴值守",notifyChannel:"站内 + 每日晨报"}];async function At(e,t,a,s,i){let r="profile",q="directory",O=await t.listOrgMembers(),P=await t.listAuditLogs(),Q="",D="all",J="all",U="all",ne=!1,y=!1,Z=!1,T=a.displayName,W=a.role==="org_admin"||a.role==="project_admin"?"设施运维总监":a.role==="commissioning_engineer"?"楼宇自控部署工程师":a.role==="facility_operator"?"暖通运行值班工程师":"园区巡检成员",Y="138-0013-8072",le="",ee="";async function se(){[O,P]=await Promise.all([t.listOrgMembers(),t.listAuditLogs()]),te()}function te(){const ce=t.mode==="demo"&&typeof t.switchDemoRole=="function",$e=Q.trim().toLowerCase(),k=O.filter(g=>D!=="all"&&g.role!==D?!1:$e?`${g.displayName} ${g.email} ${g.roleLabel} ${g.scopeSummary}`.toLowerCase().includes($e):!0),A=P.filter(g=>{if(J==="success"&&g.result!=="success"||J==="denied"&&g.result==="success")return!1;if(U!=="all"){const F=`${g.action} ${g.target}`.toLowerCase();if(U==="control"&&!F.includes("control")&&!F.includes("scene")&&!F.includes("控制")||U==="alarm"&&!F.includes("alarm")&&!F.includes("work")&&!F.includes("告警")||U==="deploy"&&!F.includes("deploy")&&!F.includes("plan")&&!F.includes("hardware")&&!F.includes("部署"))return!1}return!0});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">机构与账户</h1>
              <div class="pacom-tabs" role="tablist" aria-label="机构与账户视图">
                <button class="pacom-tab" role="tab" aria-selected="${r==="profile"}" data-atab="profile">我的账户与权限</button>
                <button class="pacom-tab" role="tab" aria-selected="${r==="members"}" data-atab="members">成员与角色（${O.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${r==="audit"}" data-atab="audit">操作审计日志（${P.length}）</button>
              </div>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">广州国家实验室</span>
              <span class="pacom-badge pacom-badge--accent">${a.roleLabel}</span>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:8px 6px 32px;">
          <div style="width:100%; max-width:960px; margin:0 auto; display:flex; flex-direction:column; gap:20px;">
            ${le?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${le}</span></div>`:""}
            ${ee?`<div class="pacom-alert-banner">${ee}</div>`:""}
            ${r==="profile"?`
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">个人资料与授权摘要</h2>
                    <span class="pacom-badge pacom-badge--online">${a.roleLabel}</span>
                  </div>
                  <form class="lov-settings-card" data-role="profile-form">
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">显示姓名与岗位</span>
                        <span class="lov-setting-desc">账号 ID：${a.userId} · 所属机构：广州国家实验室</span>
                      </div>
                      <div class="lov-setting-control" style="flex-wrap:wrap;">
                        <input class="pacom-input" style="width:150px;" name="displayName" value="${T}" aria-label="显示姓名" required />
                        <input class="pacom-input" style="width:180px;" name="jobTitle" value="${W}" aria-label="岗位职务" />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">告警接收手机号（SMS）</span>
                        <span class="lov-setting-desc">用于接收 P1 严重告警短信推送与工单升级提醒</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:180px;" name="phone" value="${Y}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
                        <button type="submit" class="pacom-btn pacom-btn--primary">保存资料</button>
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
                  </form>
                </section>

                ${ce?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">多角色权限预览切换</h2>
                        <span class="pacom-badge pacom-badge--neutral">仅 Demo 预览可用</span>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(qe).map(g=>{const F=qe[g];return`
                              <button class="pacom-role-card ${g===a.role?"is-active":""}" data-switch-role="${g}">
                                <strong style="font-weight:500;">${F.roleLabel}</strong>
                                <span class="pacom-row-sub">${F.displayName}</span>
                                <span class="pacom-row-sub">授权楼层 ${F.scope.allowedFloorIds.length} 层 · 部署编辑：${F.scope.canEditDeployment?"是":"否"}</span>
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
                      <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:4px;">展开查看 ${ve("chevron-down",12)}</span>
                    </summary>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                      <span class="pacom-row-sub">服务端下发的当前会话权限对象（供前后端核对）</span>
                      <button class="pacom-btn" data-copy-session="1">${Z?"已复制":"复制 JSON"}</button>
                    </div>
                    <pre class="pacom-code">${JSON.stringify(a,null,2)}</pre>
                  </details>
                </section>`:r==="members"?`
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
                                ${Object.keys(qe).map(g=>`<option value="${g}">${qe[g].roleLabel}</option>`).join("")}
                              </select>
                              <button class="pacom-btn pacom-btn--primary" type="submit">发送邀请</button>
                            </div>
                          </div>
                        </form>
                      </section>`:""}

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                        <h2 class="lov-section-title">${q==="directory"?"机构成员目录":"工作组与空间授权（Groups & Scope）"}</h2>
                        <div class="pacom-tabs" role="tablist" aria-label="成员与工作组切换">
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${q==="directory"}" data-msub="directory">成员目录（${O.length}）</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${q==="groups"}" data-msub="groups">工作组（${at.length}）</button>
                        </div>
                      </div>
                      <span class="pacom-row-sub">${q==="directory"?`当前显示 ${k.length} 人`:"按空间边界与值班组统一分派告警与工单"}</span>
                    </div>
                    ${q==="directory"?`
                        <div class="lov-table-card">
                          <div class="lov-table-toolbar">
                            <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                              <input class="pacom-input" name="memberSearch" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${Q}" />
                              <select class="pacom-select" name="memberRoleFilter" data-role-filter>
                                <option value="all" ${D==="all"?"selected":""}>全部角色</option>
                                ${Object.keys(qe).map(g=>`<option value="${g}" ${D===g?"selected":""}>${qe[g].roleLabel}</option>`).join("")}
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
                                ${k.map(g=>`
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
                        </div>`:`
                        ${y?`
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
                            <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-group="1">${y?"收起表单":"+ 新建工作组"}</button>
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
                                ${at.map(g=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${g.name}</div>
                                      <div class="pacom-row-sub">${g.membersSummary}</div>
                                    </td>
                                    <td><span class="pacom-badge pacom-badge--neutral">${g.defaultRoleLabel}</span></td>
                                    <td><span class="pacom-row-sub">${g.locationScope}</span></td>
                                    <td><strong>${g.memberCount}</strong> 人</td>
                                    <td><span class="pacom-badge pacom-badge--accent">${g.notifyChannel}</span></td>
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
                          <option value="all" ${U==="all"?"selected":""}>全部操作类型</option>
                          <option value="control" ${U==="control"?"selected":""}>设备控制与场景</option>
                          <option value="alarm" ${U==="alarm"?"selected":""}>告警与工单处置</option>
                          <option value="deploy" ${U==="deploy"?"selected":""}>系统部署与点位</option>
                        </select>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${J==="all"}" data-audit-filter="all">全部（${P.length}）</button>
                          <button class="pacom-tab" aria-selected="${J==="success"}" data-audit-filter="success">成功</button>
                          <button class="pacom-tab" aria-selected="${J==="denied"}" data-audit-filter="denied">已拦截</button>
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
                            ${A.map(g=>`
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
    `,e.querySelectorAll("[data-atab]").forEach(g=>{g.addEventListener("click",()=>{r=g.dataset.atab,le="",ee="",te()})}),e.querySelectorAll("[data-msub]").forEach(g=>{g.addEventListener("click",()=>{q=g.dataset.msub??"directory",te()})}),e.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{y=!y,te()}),e.querySelector('[data-role="new-group-form"]')?.addEventListener("submit",g=>{g.preventDefault();const F=new FormData(g.currentTarget),n=String(F.get("wgName")??"").trim(),d=String(F.get("wgRole")??"运行值班员"),$=String(F.get("wgScope")??"").trim();!n||!$||(at.push({id:`wg-${Date.now()}`,name:n,defaultRoleLabel:d,locationScope:$,memberCount:1,membersSummary:a.displayName,notifyChannel:"站内 + 邮件"}),y=!1,le=`已创建工作组「${n}」（授权空间：${$}）。`,te())}),e.querySelector('[data-role="profile-form"]')?.addEventListener("submit",g=>{g.preventDefault();const F=new FormData(g.currentTarget);T=String(F.get("displayName")??"").trim()||a.displayName,W=String(F.get("jobTitle")??"").trim()||W,Y=String(F.get("phone")??"").trim()||Y,le=`已更新个人资料：${T}（${W}）· 告警短信接收号 ${Y}。`,te()}),e.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await t.logout(),window.location.hash="#login",i()}),e.querySelector("[data-copy-session]")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(a,null,2)),Z=!0,te(),window.setTimeout(()=>{Z=!1,te()},1600)}catch{}}),e.querySelectorAll("[data-switch-role]").forEach(g=>{g.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const F=await t.switchDemoRole(g.dataset.switchRole);s(F)})}),e.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{ne=!ne,te()}),e.querySelector("[data-member-search]")?.addEventListener("input",g=>{const F=g.currentTarget,n=F.selectionStart??F.value.length;Q=F.value,te();const d=e.querySelector("[data-member-search]");d&&(d.focus(),d.setSelectionRange(n,n))}),e.querySelector("[data-role-filter]")?.addEventListener("change",g=>{D=g.currentTarget.value,te()}),e.querySelectorAll("[data-audit-filter]").forEach(g=>{g.addEventListener("click",()=>{J=g.dataset.auditFilter??"all",te()})}),e.querySelector("[data-audit-cat]")?.addEventListener("change",g=>{U=g.currentTarget.value??"all",te()}),e.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async g=>{g.preventDefault(),ee="";const F=new FormData(g.currentTarget);try{await t.inviteOrgMember(String(F.get("email")??""),String(F.get("role"))),ne=!1,await se()}catch(n){ee=n instanceof Error?n.message:String(n),te()}})}te()}let Qe={level:"floor",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId};function Ve(){return Qe}function pt(e){return Qe=e,Qe}function Ae(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function vt(e){const t=e.match(/(-?\d+)/);if(!t)return 0;const a=Number(t[1]);return e.toUpperCase().startsWith("B")?-Math.abs(a):a}function Ct(e){if(e==="all")return{level:"all-projects"};const t=e.split(":");return t[0]==="project"&&t[1]?{level:"project",projectId:t[1]}:t[0]==="building"&&t[1]&&t[2]?{level:"building",projectId:t[1],buildingId:t[2]}:t[0]==="floor"&&t[1]&&t[2]&&t[3]?{level:"floor",projectId:t[1],buildingId:t[2],floorId:t[3]}:{level:"project",projectId:p.projectId}}function Ft(e,t,a){return a==="project"?e.level==="all-projects"?{level:"project",projectId:t.projects[0]?.id??p.projectId}:{level:"project",projectId:e.projectId}:a==="building"&&e.level==="floor"?{level:"building",projectId:e.projectId,buildingId:e.buildingId}:e}function Ue(e){const{tree:t,session:a,isOpen:s,searchKeyword:i}=e,r=e.maxGranularity??"floor",q=e.activeAlarmCount??0,O=a.scope.allowedZoneIds?.length?a.scope.allowedZoneIds:null,P=t.floors.filter(n=>a.scope.allowedFloorIds.includes(n.id)),Q=O||t.projects.length<=1&&t.buildings.length<=1&&P.length<=1?"floors-only":t.projects.length>1?"multi-project":t.buildings.length>1?"single-project-multi-building":"single-building",D=Q==="multi-project"&&r!=="project",J=Q==="multi-project"||Q==="single-project-multi-building",U=Q!=="floors-only"&&r!=="project",ne=r==="project"&&t.projects.length<=1||Q==="floors-only"&&P.length<=1,y=Ft(e.scope??Qe,t,r),Z=y.level==="all-projects"?null:t.projects.find(n=>n.id===y.projectId)??t.projects[0],T=y.level==="building"||y.level==="floor"?t.buildings.find(n=>n.id===y.buildingId):null,W=y.level==="floor"?t.floors.find(n=>n.id===y.floorId):null,Y=[];if(y.level==="all-projects")Y.push(`全部项目（${t.projects.length}）`);else if(y.level==="project")Y.push(Ae(Z?.name??"广实2号园"));else if(y.level==="building")Z&&Y.push(`<span class="pacom-path-muted">${Ae(Z.name)}</span>`),Y.push(Ae(T?.name??"E栋"));else{Z&&Q!=="floors-only"&&Y.push(`<span class="pacom-path-muted">${Ae(Z.name)}</span>`),T&&U&&Y.push(`<span class="pacom-path-muted">${Ae(T.name)}</span>`);const n=!U&&T?`${T.name} ${W?.name??"7F"}`:W?.name??"7F";Y.push(Ae(n))}const le='<span class="pacom-path-muted" style="margin:0 3px;">·</span>',ee=ne?`<span class="pacom-path-trigger is-static">${Y.join(le)}</span>`:`<button type="button" class="pacom-path-trigger" data-global-space-toggle="1" aria-expanded="${s}" aria-haspopup="dialog" title="切换项目 / 楼宇 / 楼层">
        <span>${Y.join(le)}</span>
        <span style="display:inline-flex; color:var(--pacom-text-secondary);">${ve("chevron-down",12)}</span>
      </button>`;if(!s||ne)return`<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap">${ee}</div>`;const se=i.trim().toLowerCase(),te=y.level==="all-projects"?t.projects[0]?.id??p.projectId:y.projectId,ce=y.level==="building"||y.level==="floor"?y.buildingId:t.buildings.find(n=>n.projectId===te)?.id??p.buildingId,$e=t.projects.filter(n=>!se||n.name.toLowerCase().includes(se)),k=t.buildings.filter(n=>n.projectId===te&&(!se||n.name.toLowerCase().includes(se))),A=[...t.floors.filter(n=>n.buildingId===ce)].sort((n,d)=>vt(d.name)-vt(n.name)).filter(n=>!se||n.name.toLowerCase().includes(se)),be=r==="project"||t.projects.length>1,g=r!=="project"&&J,F=r==="floor";return`
    <span class="pacom-title-slash" aria-hidden="true">/</span>
    <div class="pacom-path-wrap" data-role="global-space-wrap">
      ${ee}
      <div class="pacom-space-popover pacom-path-popover" role="dialog" aria-label="全局空间切换" data-role="global-space-pop">
        <div class="pacom-space-pop-head">
          ${ve("search",14)}
          <input type="text" name="globalSpaceSearch" data-global-space-search placeholder="检索园区、楼宇或楼层…" value="${Ae(i)}" aria-label="检索空间" />
          <button type="button" class="pacom-drawer-close" style="width:24px; height:24px;" data-global-space-toggle="1" aria-label="关闭">${ve("x",14)}</button>
        </div>
        <div class="pacom-space-pop-cols">
          ${be?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">项目 / 园区</div>
                ${D?`<button type="button" class="pacom-space-pop-item ${y.level==="all-projects"?"is-active":""}" data-global-space-pick="all">
                        <span>全部项目（${t.projects.length}）</span>
                        ${y.level==="all-projects"?ve("check",14):""}
                      </button>`:""}
                ${$e.map(n=>{const d=y.level==="project"&&y.projectId===n.id;return`<button type="button" class="pacom-space-pop-item ${d?"is-active":""}" data-global-space-pick="project:${Ae(n.id)}">
                      <span>${Ae(n.name)}</span>
                      ${d?ve("check",14):ve("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${g?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Ae(t.projects.find(n=>n.id===te)?.name??"园区")} · 楼宇</div>
                <button type="button" class="pacom-space-pop-item ${y.level==="project"?"is-active":""}" data-global-space-pick="project:${Ae(te)}">
                  <span>全园区</span>
                  ${y.level==="project"?ve("check",14):""}
                </button>
                ${k.map(n=>{const d=y.level==="building"&&y.buildingId===n.id;return`<button type="button" class="pacom-space-pop-item ${d?"is-active":""}" data-global-space-pick="building:${Ae(n.projectId)}:${Ae(n.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Ae(n.name)}</span>
                        ${n.id===p.buildingId&&q>0?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      ${d?ve("check",14):ve("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${F?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Ae(t.buildings.find(n=>n.id===ce)?.name??"楼宇")} · 楼层</div>
                ${U?`<button type="button" class="pacom-space-pop-item ${y.level==="building"&&y.buildingId===ce?"is-active":""}" data-global-space-pick="building:${Ae(te)}:${Ae(ce)}">
                        <span>整栋</span>
                        ${y.level==="building"&&y.buildingId===ce?ve("check",14):""}
                      </button>`:""}
                ${A.map(n=>{const d=a.scope.allowedFloorIds.includes(n.id),$=y.level==="floor"&&y.floorId===n.id,N=n.id===p.floorId&&q>0;return`<button type="button" class="pacom-space-pop-item ${$?"is-active":""}" style="${d?"":"opacity:0.5;"}" data-global-space-pick="floor:${Ae(te)}:${Ae(ce)}:${Ae(n.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Ae(n.name)}</span>
                        ${N?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      <span class="pacom-row-sub" style="font-size:11px;">${$?ve("check",14):d?n.plan?"2D":"待部署":"未授权"}</span>
                    </button>`}).join("")}
              </div>`:""}
        </div>
      </div>
    </div>
  `}function He(e,t){e.querySelectorAll("[data-global-space-toggle]").forEach(s=>{s.addEventListener("click",i=>{i.stopPropagation(),t.onToggle()})}),e.querySelector("[data-global-space-search]")?.addEventListener("input",s=>{t.onSearch(s.currentTarget.value)}),e.querySelectorAll("[data-global-space-pick]").forEach(s=>{s.addEventListener("click",i=>{i.stopPropagation();const r=s.dataset.globalSpacePick;if(!r)return;const q=pt(Ct(r));t.onPick(q)})})}const Be={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},Mt={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},qt={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function zt(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("modbus")||t.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":t.includes("co₂")||t.includes("co2")||t.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function Dt(e){return e.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:e.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function st(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("vav")||e.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:t.includes("co₂")||t.includes("co2")||e.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function Tt(e,t,a){const s=new URLSearchParams(window.location.hash.split("?")[1]??""),i=s.get("alarm"),r=s.get("wo");let q=await t.getSpatialTree(),O=Ve(),P=!1,Q="",D=[],J=[],U=[],ne=r?"workorders":"alarms",y="all",Z="all",T="all",W="impact",Y=!1,le="",ee=i,se=r,te=null,ce=null,$e="resolved";const k=new Set,A=new Map,be=new Map,g=new Map,F=new Map;let n="",d="";function $(ae){const X=F.get(ae.id);if(X)return X;const o=ae.id.match(/(\d+)$/),h=`WO-2026-${o?o[1]:ae.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,G={estCost:"¥ 450",actualCost:ae.status==="closed"?"¥ 380":"--",cmmsNo:h,assigneeGroup:"暖通运维组",tasks:[{id:`${ae.id}-t1`,label:"核查设备供电与现场指示灯状态",done:ae.status!=="open"},{id:`${ae.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:ae.status==="resolved"||ae.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:ae.createdAt?ae.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${h}）`}]};return F.set(ae.id,G),G}async function N(){[D,J,U]=await Promise.all([t.listAlarms(p.floorId),t.listWorkOrders(p.floorId),t.getFloorDevices(p.floorId).catch(()=>[])]),J.forEach(ae=>$(ae)),ie()}function _(ae){if(!ae)return{name:"楼层通用",zone:"E7F",dev:null};const X=U.find(o=>o.id===ae)??null;return X?{name:X.name,zone:(X.logicalZoneId?qt[X.logicalZoneId]:void 0)??"E7F",dev:X}:{name:ae,zone:"E7F",dev:null}}function de(ae){const X=_(ae.deviceId).dev;X&&X.connectivity==="offline"?g.set(ae.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${X.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):g.set(ae.id,{verdict:"pass",summary:`自检通过（PASS）：「${X?.name??ae.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),ee=ae.id,ie()}function ie(){const ae=D.filter(c=>c.status==="active"&&!A.has(c.id)),X=J.filter(c=>!$(c).cancelled&&(c.status==="open"||c.status==="assigned"||c.status==="in_progress")),o=D.filter(c=>c.status!=="active").length+be.size,h=0,G=A.size,me=le.trim().toLowerCase(),ze=D.filter(c=>{const m=A.has(c.id);if(y==="snoozed"){if(!m)return!1}else if(y==="active"){if(c.status!=="active"||m)return!1}else if(y==="acknowledged"){if(c.status!=="acknowledged")return!1}else if(m)return!1;if(T!=="all"&&c.severity!==T)return!1;if(!me)return!0;const K=_(c.deviceId);return`${c.title} ${c.message} ${K.name} ${K.zone} ${c.deviceId}`.toLowerCase().includes(me)}),Ee=new Map;for(const c of ze){const m=`${c.title} ${c.message}`.toLowerCase(),K=m.includes("离线")||m.includes("modbus")||m.includes("通信"),ge=Y?K?"root-gateway-modbus":c.deviceId:c.id,he=K?"根因：E7F 主控网关通信链路":`根因：${_(c.deviceId).name}`,je=Ee.get(ge)??{rootLabel:he,items:[]};je.items.push(c),Ee.set(ge,je)}const ye=Array.from(Ee.values());W==="impact"&&ye.sort((c,m)=>st(m.items[0]).costYuan-st(c.items[0]).costYuan);const ke=J.filter(c=>{const m=$(c);if(Z==="cancelled"){if(!m.cancelled)return!1}else if(m.cancelled||Z==="open"&&(c.status==="resolved"||c.status==="closed")||Z==="resolved"&&c.status!=="resolved"||Z==="closed"&&c.status!=="closed")return!1;if(!me)return!0;const K=_(c.deviceId);return`${c.title} ${c.description} ${c.id} ${m.cmmsNo} ${K.name}`.toLowerCase().includes(me)});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${Ue({tree:q,session:a,scope:O,activeAlarmCount:ae.length,isOpen:P,searchKeyword:Q})}
            </div>

            <div class="pacom-header-meta">
              ${ne==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="lov-switch" role="switch" aria-checked="${Y}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="lov-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${a.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${a.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="lov-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${ve("refresh-cw",14)}</button>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="告警中心视图">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${ne==="alarms"}" data-main-tab="alarms">实时告警（${D.length-G}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${ne==="workorders"}" data-main-tab="workorders">运维工单（${J.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="lov-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="lov-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ne==="alarms"&&y==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">待处理告警</span>
              <div class="lov-kpi-value">${ae.length}<span class="lov-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="lov-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ne==="workorders"&&Z==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">处理中工单</span>
              <div class="lov-kpi-value">${X.length}<span class="lov-kpi-unit">单</span></div>
              <span class="lov-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ne==="alarms"&&y==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">已闭环生效</span>
              <div class="lov-kpi-value">${o}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="lov-kpi-cell">
              <span class="lov-kpi-label">关单复发待查</span>
              <div class="lov-kpi-value" style="color:var(--pacom-status-online);">${h}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${n?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${n}</span></div>`:""}
          ${d?`<div class="pacom-alert-banner">${d}</div>`:""}

          ${ne==="alarms"?`
              <section class="lov-table-card">
                <div class="lov-table-toolbar">
                  <div class="lov-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${le}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${T==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${T==="critical"?"selected":""}>严重</option>
                      <option value="major" ${T==="major"?"selected":""}>重要</option>
                      <option value="minor" ${T==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${W==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${W==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${y==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${y==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${y==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${y==="snoozed"}" data-status-pill="snoozed">已忽略（${G}）</button>
                    </div>
                  </div>
                  <div class="lov-table-toolbar-group">
                    ${k.size>0&&a.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${k.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${ye.length} 项</span>
                  </div>
                </div>
                ${ye.length===0?'<div class="lov-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${ye.map(c=>{const m=c.items[0],K=Mt[m.severity]??{label:m.severity,cls:"pacom-badge--neutral"},ge=_(m.deviceId),he=Dt(m),je=st(m),Oe=ee===m.id,xe=A.get(m.id),Le=!!xe,Ne=k.has(m.id),De=g.get(m.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${m.id}" data-check-alarm="${m.id}" ${Ne?"checked":""} ${m.status!=="active"||Le?"disabled":""} aria-label="选择 ${m.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${K.cls}">${K.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${m.title}</span>
                                      ${Y?`<span class="pacom-badge pacom-badge--accent">${c.rootLabel}${c.items.length>1?` · 影响 ${c.items.length} 项`:""}</span>`:""}
                                      ${De?`<span class="pacom-badge ${De.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${De.verdict.toUpperCase()}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${m.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${ge.name}</div>
                                    <div class="pacom-row-sub">${ge.zone}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${je.costLabel}</div>
                                    <div class="pacom-row-sub">${je.comfortLabel}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${he.duration}</div>
                                    <div class="pacom-row-sub" style="color:${he.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${he.trend}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${Le?"pacom-badge--neutral":m.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${Le?`忽略 ${xe?.duration}`:m.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${Le?`<button class="pacom-btn" data-unsnooze="${m.id}">恢复监控</button>`:`
                                            ${m.status==="active"?`<button class="pacom-btn" data-mark-actioned="${m.id}" ${a.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${m.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${m.id}" ${a.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${m.id}">${Oe?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${Oe?`
                                    <tr class="lov-table-detail-row">
                                      <td colspan="8">
                                        <div class="lov-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${zt(m)}
                                            </div>
                                            ${xe?`<div class="pacom-info-banner">忽略周期：${xe.duration} · 原因备注：${xe.reason}</div>`:""}
                                            ${De?`
                                                <div class="lov-banner ${De.verdict==="pass"?"lov-banner--ok":"lov-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="lov-banner-title">${De.summary}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${De.steps.map(Se=>`<span>${Se}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${m.id}</code> · 设备编号 <code>${m.deviceId}</code> · 关联工单 ${m.workOrderId??"无"}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${m.id}">单机自检（FTT）</button>
                                              ${!Le&&m.status==="active"?`<button class="pacom-btn" data-open-snooze="${m.id}">限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${m.deviceId}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${m.deviceId}">定位设备 →</button>
                                            </div>
                                            ${te===m.id?`
                                                <form data-snooze-form="${m.id}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
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
              ${(()=>{const c=se?J.find(m=>m.id===se)??null:null;if(c){const m=_(c.deviceId),K=$(c),ge=!!(K.cancelled||c.status==="closed");return`
                  <section class="lov-section" data-role="wo-workbench">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${c.id}">← 返回运维工单列表</button>
                        <h2 class="lov-section-title">${c.title}</h2>
                        <span class="pacom-badge pacom-badge--accent">${K.cmmsNo}</span>
                        ${K.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${c.id}" data-wo-status="${c.id}" aria-label="更新工单状态" ${ge?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(he=>`<option value="${he}" ${c.status===he?"selected":""}>${Be[he]}</option>`).join("")}
                          <option value="cancelled" ${K.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${ce===c.id?`
                        <form data-close-wo-form="${c.id}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${Be[$e]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${K.cause??""}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${K.solution??""}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${K.actualCost==="--"?"":K.actualCost}" />
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
                          <div class="pacom-row-sub">${c.description}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${K.tasks.map(he=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${he.id}" data-wo-task="${c.id}" data-task-id="${he.id}" ${he.done?"checked":""} ${ge?"disabled":""} />
                                    <span>${he.label}</span>
                                  </span>
                                  ${he.unit?`<span class="pacom-row-sub">实测：${he.reading??"--"} ${he.unit}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${K.history.map(he=>`<span>• <span class="pacom-row-sub">${he.at}</span> — ${he.text}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${c.id}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${K.cmmsNo}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${m.name}（${m.zone}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${K.assigneeGroup}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${K.estCost} / 实际 ${K.actualCost}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${K.cause??"待完单填写"}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${K.solution??"待完单填写"}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${c.deviceId}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${c.deviceId}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="lov-table-card">
                  <div class="lov-table-toolbar">
                    <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${le}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${Z==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${Z==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${Z==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${Z==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${Z==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${ke.length} 条工单</span>
                  </div>
                  ${ke.length===0?'<div class="lov-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${ke.map(m=>{const K=_(m.deviceId),ge=$(m),he=!!(ge.cancelled||m.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${m.title}</span>
                                        ${ge.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${m.description} · <code>${m.id}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${K.name}</div>
                                      <div class="pacom-row-sub">${K.zone}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${ge.cmmsNo}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${ge.assigneeGroup} · 预估 ${ge.estCost}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${m.id}" data-wo-status="${m.id}" aria-label="更新工单状态" ${he?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(je=>`<option value="${je}" ${m.status===je?"selected":""}>${Be[je]}</option>`).join("")}
                                          <option value="cancelled" ${ge.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${m.id}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${ce===m.id?`
                                      <tr class="lov-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${m.id}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${Be[$e]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${ge.cause??""}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${ge.solution??""}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${ge.actualCost==="--"?"":ge.actualCost}" />
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
    `,He(e,{onToggle:()=>{P=!P,ie(),P&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:c=>{Q=c,ie();const m=e.querySelector("[data-global-space-search]");m&&(m.focus(),m.setSelectionRange(c.length,c.length))},onPick:c=>{O=c,P=!1,ie()}}),e.querySelectorAll("[data-main-tab]").forEach(c=>{c.addEventListener("click",()=>{ne=c.dataset.mainTab??"alarms",n="",ie()})}),e.querySelectorAll("[data-kpi-filter]").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.kpiFilter;n="",m==="workorders"?(ne="workorders",Z=Z==="open"?"all":"open"):(m==="active"||m==="acknowledged")&&(ne="alarms",y=y===m?"all":m),ie()})}),e.querySelectorAll("[data-status-pill]").forEach(c=>{c.addEventListener("click",()=>{y=c.dataset.statusPill??"all",ie()})}),e.querySelectorAll("[data-wo-pill]").forEach(c=>{c.addEventListener("click",()=>{Z=c.dataset.woPill??"all",ie()})}),e.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{n="",N()}),e.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{Y=!Y,ie()}),e.querySelector("[data-severity-filter]")?.addEventListener("change",c=>{T=c.currentTarget.value,ie()}),e.querySelector("[data-alarm-sort]")?.addEventListener("change",c=>{W=c.currentTarget.value??"impact",ie()}),e.querySelector("[data-alarm-search]")?.addEventListener("input",c=>{const m=c.currentTarget,K=m.selectionStart??m.value.length;le=m.value,ie();const ge=e.querySelector("[data-alarm-search]");ge&&(ge.focus(),ge.setSelectionRange(K,K))}),e.querySelectorAll("[data-check-alarm]").forEach(c=>{c.addEventListener("change",()=>{const m=c.dataset.checkAlarm;m&&(c.checked?k.add(m):k.delete(m),ie())})}),e.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{d="";const c=Array.from(k);try{for(const m of c)await t.acknowledgeAlarm(m,"告警中心批量确认"),be.set(m,"批量确认处置");k.clear(),n=`已批量确认 ${c.length} 条告警，未来 24 小时持续校验无复发。`,await N()}catch(m){d=m instanceof Error?m.message:String(m),ie()}}),e.querySelectorAll("[data-expand-alarm]").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.expandAlarm??null;ee=ee===m?null:m,te=null,ie()})}),e.querySelectorAll("[data-expand-wo]").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.expandWo??null;se=se===m?null:m,ie()})}),e.querySelectorAll("[data-run-ftt]").forEach(c=>{c.addEventListener("click",()=>{const m=D.find(K=>K.id===c.dataset.runFtt);m&&de(m)})}),e.querySelectorAll("[data-open-snooze]").forEach(c=>{c.addEventListener("click",()=>{te=c.dataset.openSnooze??null,ie()})}),e.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{te=null,ie()}),e.querySelectorAll("[data-snooze-form]").forEach(c=>{c.addEventListener("submit",m=>{m.preventDefault();const K=c.dataset.snoozeForm;if(!K)return;const ge=new FormData(c),he=String(ge.get("duration")??"24h"),je=String(ge.get("reason")??"").trim()||"现场核查中";A.set(K,{duration:he,reason:je}),k.delete(K),te=null,n=`已限时忽略该告警（${he} · ${je}），可在「已忽略」页签中随时恢复。`,ie()})}),e.querySelectorAll("[data-unsnooze]").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.unsnooze;m&&(A.delete(m),n="已恢复该告警的实时监控。",ie())})}),e.querySelectorAll("[data-go-ts]").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(m)}`})}),e.querySelectorAll("[data-locate-home]").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.locateHome??"";window.location.hash=m?`#home?device=${encodeURIComponent(m)}`:"#home"})}),e.querySelectorAll("[data-mark-actioned]").forEach(c=>{c.addEventListener("click",async()=>{d="";const m=c.dataset.markActioned;try{await t.acknowledgeAlarm(m,"现场自处理完成（Mark Actioned）"),be.set(m,"现场自处理完成"),k.delete(m),n="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await N()}catch(K){d=K instanceof Error?K.message:String(K),ie()}})}),e.querySelectorAll("[data-to-wo]").forEach(c=>{c.addEventListener("click",async()=>{d="";const m=D.find(K=>K.id===c.dataset.toWo);if(m)try{await t.createWorkOrder({floorId:m.floorId,deviceId:m.deviceId,alarmId:m.id,title:`处置告警：${m.title}`,description:m.message}),n=`已将「${m.title}」转为运维工单并同步 CMMS。`,await N()}catch(K){d=K instanceof Error?K.message:String(K),ie()}})}),e.querySelectorAll("[data-wo-status]").forEach(c=>{c.addEventListener("change",async()=>{const m=c.dataset.woStatus,K=c.value;if(d="",K==="cancelled"){const ge=J.find(he=>he.id===m);if(ge){const he=$(ge);he.cancelled=!0,he.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),n="工单已移入「已取消」分类并锁定编辑。",ie()}return}if(K==="resolved"||K==="closed"){ce=m,$e=K,ie();return}try{await t.updateWorkOrderStatus(m,K);const ge=J.find(he=>he.id===m);ge&&$(ge).history.unshift({at:"刚刚",text:`状态变更为「${Be[K]}」`}),n="工单状态已更新并写入审计日志。",await N()}catch(ge){d=ge instanceof Error?ge.message:String(ge),await N()}})}),e.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{ce=null,ie()}),e.querySelectorAll("[data-close-wo-form]").forEach(c=>{c.addEventListener("submit",async m=>{m.preventDefault();const K=c.dataset.closeWoForm,ge=new FormData(c),he=String(ge.get("cause")??"").trim(),je=String(ge.get("solution")??"").trim(),Oe=String(ge.get("actualCost")??"").trim();try{await t.updateWorkOrderStatus(K,$e);const xe=J.find(Le=>Le.id===K);if(xe){const Le=$(xe);Le.cause=he,Le.solution=je,Oe&&(Le.actualCost=Oe),Le.history.unshift({at:"刚刚",text:`流转至「${Be[$e]}」· 根因：${he}`})}ce=null,se=K,n=`工单已更新为「${Be[$e]}」，根因与方案已沉淀归档。`,await N()}catch(xe){d=xe instanceof Error?xe.message:String(xe),ie()}})}),e.querySelectorAll("[data-wo-task]").forEach(c=>{c.addEventListener("change",()=>{const m=J.find(he=>he.id===c.dataset.woTask);if(!m)return;const ge=$(m).tasks.find(he=>he.id===c.dataset.taskId);ge&&(ge.done=c.checked),ie()})})}await N()}const Ot=ve("chevron-down",12),Ke=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],mt=[{id:p.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:p.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:p.projectId,label:"广实2号园（全园区）",factor:18.2}],Pt={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},Rt=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],Re=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function lt(e,t=""){const a=(e??"").trim().toLowerCase();return!(!a||a.includes("%")||a.includes("°c")||a.includes("ppm")||a.includes("ms")||a.includes("m²")||a.includes("/m2")||a.includes("db")||a.includes("lx")||t.includes("率")||t.includes("均")||t.includes("强度")||t.includes("延迟"))}function Ye(e,t){const a=e*t;return Math.abs(a)>=10?Math.round(a):Math.round(a*10)/10}function Nt(e,t){const a=Number(String(e).replaceAll(",","")),s=t??"";return Number.isFinite(a)?s==="kWh"&&Math.abs(a)>=1e4?{value:(a/1e3).toFixed(1),unit:"MWh",title:`精确值：${a.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(a)?a.toLocaleString("en-US"):a.toLocaleString("en-US",{maximumFractionDigits:1}),unit:s,title:`${a.toLocaleString("en-US")} ${s}`.trim()}:{value:e,unit:s,title:`${e} ${s}`.trim()}}function _t(e,t){if(t===1)return e;const a=lt(e.unit);return{...e,kpis:e.kpis.map(s=>{const i=Number(String(s.value).replaceAll(",",""));return!Number.isFinite(i)||!lt(s.unit,s.label)?s:{...s,value:String(Ye(i,t))}}),series:a?e.series.map(s=>({...s,value:Ye(s.value,t),...typeof s.baseline=="number"?{baseline:Ye(s.baseline,t)}:{}})):e.series,zoneBreakdown:e.zoneBreakdown.map(s=>lt(s.unit)?{...s,value:Ye(s.value,t)}:s)}}function Bt(e,t){const a=Math.max(...e.series.map(U=>Math.max(U.value,U.baseline??0)),1),s=46,i=34,r=36,q=Math.max(e.series.length*(s+i)+r*2,620),O=228,P=184,Q=132,D=[0,.25,.5,.75,1].map(U=>{const ne=Math.round(P-U*Q);return`<line x1="${r-8}" y1="${ne}" x2="${q-18}" y2="${ne}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${U===0?"0":"3 3"}" />`}).join(""),J=e.series.map((U,ne)=>{const y=r+ne*(s+i),Z=Math.max(8,Math.round(U.value/a*Q)),T=P-Z,W=typeof U.baseline=="number"&&U.value>U.baseline*1.08,Y=W?`<rect x="${y-8}" y="34" width="${s+16}" height="${P-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",le=typeof U.baseline=="number"?`<line x1="${y-5}" y1="${Math.round(P-U.baseline/a*Q)}" x2="${y+s+5}" y2="${Math.round(P-U.baseline/a*Q)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",ee=t&&(W||ne===1)?`<g><title>${W?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${y+s/2}" cy="18" r="7" fill="${W?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${y+s/2}" y="21" text-anchor="middle" font-size="8.5" font-weight="600" fill="#fff">${W?"!":"S"}</text></g>`:"",se=U.value>=1e4?`${(U.value/1e3).toFixed(1)}k`:U.value.toLocaleString("en-US");return`
        ${Y}
        ${le}
        ${ee}
        <g>
          <title>${U.label}：实测 ${U.value.toLocaleString("en-US")} ${e.unit}${U.baseline!==void 0?` / 基线 ${U.baseline.toLocaleString("en-US")} ${e.unit}`:""}</title>
          <rect x="${y}" y="${T}" width="${s}" height="${Z}" rx="7" fill="${W?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${y+s/2}" y="${T-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${se}</text>
        <text x="${y+s/2}" y="${P+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${U.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${q} ${O}" style="width:100%; height:232px; display:block;" role="img" aria-label="${e.category} 趋势图">
      ${D}
      ${J}
    </svg>
  `}function Vt(e,t){const a=e.connectivity==="offline";if(e.category==="hvac"){const s=Number(e.telemetry.setpoint?.value??24);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:a?[23.8,24,24.1,null,null,null,null,null]:[s+.8,s+.6,s+.3,s,s-.2,s+.1,s+.2,s],offline:a,colorIdx:t},{id:`${e.id}:setpoint`,deviceId:e.id,deviceName:e.name,pointKey:"setpoint",label:"设定温度",unit:"°C",points:a?[24,24,24,null,null,null,null,null]:[s,s,s,s,s,s,s,s],offline:a,colorIdx:t+1},{id:`${e.id}:valve`,deviceId:e.id,deviceName:e.name,pointKey:"valve",label:"冷阀开度",unit:"%",points:a?[42,46,51,null,null,null,null,null]:[20,24,38,62,74,68,52,30],offline:a,colorIdx:t+2}]}if(e.category==="lighting"){const s=Number(e.telemetry.dimming?.value??60);return[{id:`${e.id}:dimming`,deviceId:e.id,deviceName:e.name,pointKey:"dimming",label:"回路亮度",unit:"%",points:[0,0,Math.round(s*.8),s,s,Math.round(s*.6),s,Math.round(s*.9)],offline:a,colorIdx:t},{id:`${e.id}:power`,deviceId:e.id,deviceName:e.name,pointKey:"power",label:"实时功率",unit:"W",points:[12,12,220,285,290,175,280,245],offline:a,colorIdx:t+1}]}if(e.category==="sensor"){const s=Number(e.telemetry.temp?.value??23.4);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:[s-.5,s-.3,s,s+.3,s+.5,s+.2,s+.1,s],offline:a,colorIdx:t},{id:`${e.id}:co2`,deviceId:e.id,deviceName:e.name,pointKey:"co2",label:"CO₂ 浓度",unit:"ppm",points:[410,415,440,520,580,540,495,430],offline:a,colorIdx:t+1},{id:`${e.id}:humidity`,deviceId:e.id,deviceName:e.name,pointKey:"humidity",label:"相对湿度",unit:"%RH",points:[49,50,51,52,53,51,50,49],offline:a,colorIdx:t+2}]}return[{id:`${e.id}:latency`,deviceId:e.id,deviceName:e.name,pointKey:"latency",label:"心跳延迟",unit:"ms",points:[16,18,17,19,18,17,18,18],offline:a,colorIdx:t}]}function Ut(e){const t=e.points.filter(O=>typeof O=="number");if(!t.length)return{min:"-",avg:"-",max:"-",curr:"离线"};const a=Math.min(...t),s=Math.max(...t),i=t.reduce((O,P)=>O+P,0)/t.length,r=e.points[e.points.length-1],q=O=>Math.abs(O)<100&&!Number.isInteger(O)?O.toFixed(1):Math.round(O).toString();return{min:q(a),avg:i.toFixed(Math.abs(i)<100?1:0),max:q(s),curr:typeof r=="number"?q(r):"离线"}}function Ht(e,t,a){const s=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!e.length)return'<div class="lov-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧展开设备并勾选 1 个或多个测点以开始多点时序对比。</span></div>';const i=(q,O)=>{const T=[];for(const k of q)for(const A of k.points)typeof A=="number"&&T.push(A);const W=T.length?Math.min(...T)*.92:0,Y=T.length?Math.max(...T)*1.08:100,le=Math.max(Y-W,1),ee=[0,.5,1].map(k=>{const A=Math.round(26+106*(1-k)),be=(W+le*k).toFixed(le<15?1:0);return`
          <line x1="44" y1="${A}" x2="662" y2="${A}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${k===0?"0":"3 3"}" />
          <text x="38" y="${A+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${be}</text>
        `}).join(""),se=s.map((k,A)=>`<text x="${44+A/(s.length-1)*618}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${k}</text>`).join(""),te=q.map((k,A)=>{const be=Re[(k.colorIdx+A)%Re.length],g=k.points,F=[];let n=44,d=26+106/2,$=!1;g.forEach((_,de)=>{const ie=44+de/(g.length-1)*618;if(typeof _=="number"){const ae=26+106*(1-(_-W)/le);F.push(`${ie.toFixed(1)},${ae.toFixed(1)}`),n=ie,d=ae}else $=!0});const N=a?g.map((_,de)=>{if(typeof _!="number")return null;const ie=44+de/(g.length-1)*618,X=26+106*(1-(_*.96-W)/le);return`${ie.toFixed(1)},${X.toFixed(1)}`}).filter(Boolean).join(" "):"";return`
          ${N?`<polyline fill="none" stroke="${be}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.42" points="${N}" />`:""}
          ${F.length?`<polyline fill="none" stroke="${be}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${F.join(" ")}" />`:""}
          ${$?`<line x1="${n.toFixed(1)}" y1="${d.toFixed(1)}" x2="662" y2="${d.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${d-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),ce=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${44+3/7*618}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${44+3/7*618}" y="14.8" text-anchor="middle" font-size="7.5" font-weight="600" fill="#fff">S</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${44+5/7*618}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${44+5/7*618}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `,$e=q.map((k,A)=>{const be=Re[(k.colorIdx+A)%Re.length],g=Ut(k);return`
          <tr>
            <td><span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:7px; height:7px; border-radius:50%; background:${be};"></span>${k.deviceName} · ${k.label}</span></td>
            <td><strong>${g.curr}</strong> <span class="pacom-row-sub">${k.unit}</span></td>
            <td>${g.min} <span class="pacom-row-sub">${k.unit}</span></td>
            <td>${g.avg} <span class="pacom-row-sub">${k.unit}</span></td>
            <td>${g.max} <span class="pacom-row-sub">${k.unit}</span></td>
          </tr>`}).join("");return`
      <div class="pacom-card" style="padding:14px 16px; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${O}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${q.map((k,A)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${Re[(k.colorIdx+A)%Re.length]};"></span>${k.deviceName}·${k.label}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${ee}
          ${se}
          ${ce}
          ${te}
        </svg>
        <div class="lov-table-wrap" style="border-top:var(--hw) solid var(--pacom-border-subtle); padding-top:6px;">
          <table class="lov-table" style="font-size:12px;">
            <thead><tr><th>测点</th><th>当前值</th><th>最小值 (Min)</th><th>平均值 (Avg)</th><th>最大值 (Max)</th></tr></thead>
            <tbody>${$e}</tbody>
          </table>
        </div>
      </div>
    `};if(t==="shared")return i(e,"单图叠合对比（Shared）");const r=new Map;for(const q of e){const O=r.get(q.unit)??[];O.push(q),r.set(q.unit,O)}return Array.from(r.entries()).map(([q,O])=>i(O,`按单位分组泳道（${q}）`)).join("")}function Wt(e){const t=[["时段",`数值 (${e.unit})`,`基线 (${e.unit})`].join(","),...e.series.map(r=>[r.label,String(r.value),r.baseline!==void 0?String(r.baseline):""].join(","))],a=new Blob([`\uFEFF${t.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),s=URL.createObjectURL(a),i=document.createElement("a");i.href=s,i.download=`pacom-${e.category}-${e.range}.csv`,i.click(),URL.revokeObjectURL(s)}function Zt(e){const t=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],a=["时间",...e.map(O=>`${O.deviceName}·${O.label}(${O.unit})`)].join(","),s=t.map((O,P)=>[O,...e.map(Q=>String(Q.points[P]??"No Data"))].join(",")),i=new Blob([`\uFEFF${[a,...s].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(i),q=document.createElement("a");q.href=r,q.download="pacom-timeseries-export.csv",q.click(),URL.revokeObjectURL(r)}async function Gt(e,t,a){const s=new URLSearchParams(window.location.hash.split("?")[1]??""),i=s.get("tab"),r=s.get("cat"),q=s.get("device"),O=s.get("points"),P=s.get("mode"),Q=s.get("interval");let D=i==="timeseries"?"timeseries":r&&Ke.some(X=>X.id===r)?r:"energy",J="7d",U="2026-11-16",ne="2026-11-23",y=Ve(),Z=!1,T="",W=y.level==="all-projects"||y.level==="project"?p.projectId:y.level==="building"?p.buildingId:p.floorId,Y="chart",le=!0,ee="breakdown",se=!1,te=null;const[ce,$e]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(p.floorId).catch(()=>[])]);let k=$e;const A=new Map,be=[];k.forEach((X,o)=>{const h=Vt(X,o);A.set(X.id,h),be.push(...h)});let g=P==="shared"||P==="grouped"?P:"grouped",F=Q==="15m"||Q==="1h"||Q==="1d"?Q:"1h",n=!1;const d=[];if(O?O.split(",").forEach(X=>{be.some(o=>o.id===X)&&d.push(X)}):q&&A.has(q)&&(A.get(q)??[]).slice(0,2).forEach(X=>d.push(X.id)),!d.length){const X=k.find(G=>G.category==="hvac"),o=k.find(G=>G.category==="sensor"),h=k.find(G=>G.category==="lighting");X&&(A.get(X.id)??[]).slice(0,2).forEach(G=>d.push(G.id)),o&&(A.get(o.id)??[]).slice(0,1).forEach(G=>d.push(G.id)),h&&(A.get(h.id)??[]).slice(0,1).forEach(G=>d.push(G.id)),d.length||be.slice(0,3).forEach(G=>d.push(G.id))}const $=new Set(d),N=new Set(k.filter((X,o)=>o<2||(A.get(X.id)??[]).some(h=>$.has(h.id))).map(X=>X.id)),_=[{id:"fav-hvac",name:"E7F 空调温控与 CO₂ 联动对照",pointIds:be.filter(X=>X.pointKey==="temp"||X.pointKey==="setpoint"||X.pointKey==="co2").slice(0,4).map(X=>X.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度与功率对比",pointIds:be.filter(X=>X.pointKey==="dimming"||X.pointKey==="power").slice(0,4).map(X=>X.id),mode:"grouped",interval:"15m"}];let de="";async function ie(){const X=D==="timeseries"?"energy":D,o=J==="custom"?"30d":J;te=await t.getAnalysisReport(X,o,p.floorId),ae()}function ae(){if(!te)return;const X=D==="timeseries",o=D==="timeseries"?"energy":D,h=Ke.find(I=>I.id===o)??Ke[0],G=mt.find(I=>I.id===W)??mt[0],me=_t(te,G.factor),ze=me.zoneBreakdown.filter(I=>I.status==="warning"),Ee=Pt[o],ye=Math.max(...me.zoneBreakdown.map(I=>I.value),1),ke=be.filter(I=>$.has(I.id));e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">数据分析</h1>
              ${Ue({tree:ce,session:a,scope:y,isOpen:Z,searchKeyword:T})}
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px; width:108px;">
                <option value="today" ${J==="today"?"selected":""}>今日</option>
                <option value="7d" ${J==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${J==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${J==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${X?"":`<button class="pacom-btn ${se?"pacom-btn--primary":""}" data-toggle-canvas="1">${se?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="分析维度">
            ${Ke.map(I=>`<button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${D===I.id}" data-cat="${I.id}">${I.label}</button>`).join("")}
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${D==="timeseries"}" data-cat="timeseries">多点时序</button>
          </nav>
          ${J==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${U}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${ne}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${X?`
            <div class="lov-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:296px; min-width:272px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">设备 → 测点树</span>
                    <span class="pacom-row-sub">已选 ${ke.length} 个测点</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${_.map(I=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${I.id}">${ve("star",14)}<span style="overflow:hidden;text-overflow:ellipsis;">${I.name}</span></button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${k.map(I=>{const c=A.get(I.id)??[],m=N.has(I.id),K=c.filter(ge=>$.has(ge.id)).length;return`
                        <div style="display:flex; flex-direction:column; gap:2px;">
                          <button type="button" class="pacom-row" data-ts-expand="${I.id}" style="cursor:pointer; justify-content:space-between;" title="${I.name}">
                            <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
                              <span style="display:inline-flex; transition:transform 140ms ease; transform:rotate(${m?"0deg":"-90deg"}); opacity:0.65;">${Ot}</span>
                              <div style="min-width:0; flex:1; text-align:left;">
                                <div class="pacom-row-title" style="font-size:13px;">${I.name}</div>
                                <div class="pacom-row-sub">${c.length} 个测点 · ${I.connectivity==="online"?"在线":"离线"}</div>
                              </div>
                            </div>
                            ${K>0?`<span class="pacom-badge pacom-badge--accent">${K}</span>`:""}
                          </button>
                          ${m?`<div style="display:flex; flex-direction:column; gap:2px; padding-left:20px; padding-bottom:4px;">
                                  ${c.map(ge=>{const he=$.has(ge.id),je=Re[ge.colorIdx%Re.length];return`
                                        <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:5px 8px; border-radius:var(--pacom-radius-sm); cursor:pointer; font-size:12px; background:${he?"var(--pacom-surface-recessed)":"transparent"};">
                                          <span style="display:inline-flex; align-items:center; gap:6px;">
                                            <input type="checkbox" name="tsPoint-${ge.id}" data-ts-point="${ge.id}" ${he?"checked":""} />
                                            <span style="width:7px; height:7px; border-radius:50%; background:${je};"></span>
                                            <span style="color:var(--pacom-text-primary);">${ge.label}</span>
                                          </span>
                                          <span class="pacom-row-sub">${ge.unit}</span>
                                        </label>`}).join("")}
                                </div>`:""}
                        </div>`}).join("")}
                </div>
              </aside>
              <div class="lov-subnav-main" style="padding:2px 4px 24px;">
                ${de?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${de}</span></div>`:""}
                <div class="lov-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="lov-section-title">多测点实时遥测对比（Time Series）</h2>
                    <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:6px;">${ve("clock",12)} 排程(S) · ${ve("triangle-alert",12)} 告警(!) · 虚线为断流/上周同期</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>对比上周同期</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${n}" data-ts-compare="1" aria-label="叠加对比上周同期曲线">
                        <span class="lov-switch-thumb"></span>
                      </button>
                    </label>
                    <select class="pacom-select" name="tsInterval" data-ts-interval aria-label="采样粒度" style="height:28px; font-size:12px;">
                      <option value="15m" ${F==="15m"?"selected":""}>15 分钟</option>
                      <option value="1h" ${F==="1h"?"selected":""}>1 小时</option>
                      <option value="1d" ${F==="1d"?"selected":""}>1 天</option>
                    </select>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${g==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${g==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ts-share="1">复制分享链接</button>
                  </div>
                </div>
                ${Ht(ke,g,n)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="lov-kpi-strip" role="region" aria-label="核心统计指标">
                ${me.kpis.map(I=>{const c=Nt(I.value,I.unit);return`
                      <div class="lov-kpi-cell" title="${c.title}">
                        <span class="lov-kpi-label">${I.label}</span>
                        <div class="lov-kpi-value">
                          <span>${c.value}</span>
                          ${c.unit?`<span class="lov-kpi-unit">${c.unit}</span>`:""}
                        </div>
                        <span class="lov-kpi-delta">${I.delta??"与基线持平"}</span>
                      </div>`}).join("")}
              </div>

              <section class="lov-section">
                <div class="lov-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="lov-section-title">${h?.label??"趋势"}趋势（${me.unit}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${G.label} · 更新于 ${me.updatedAt.slice(5,16).replace("T"," ")}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${le}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
                        <span class="lov-switch-thumb"></span>
                      </button>
                    </label>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${Y==="chart"}" data-chart-mode="chart">趋势图</button>
                      <button class="pacom-tab" aria-selected="${Y==="table"}" data-chart-mode="table">明细原表</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-card" style="gap:10px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                    <span class="pacom-row-sub">
                      ${ze.length>0?`关注：${ze.map(I=>I.zoneName).join("、")} 指标偏高，建议前往智能策略优化启停时段。`:`${h?.desc??"空间运行洞察"} · ${Ee.summary}`}
                    </span>
                    <button class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-strategy="1">去智能策略优化 →</button>
                  </div>
                  ${Y==="chart"?Bt(me,le):`
                      <div class="lov-table-wrap">
                        <table class="lov-table">
                          <thead>
                            <tr>
                              <th>统计时段</th>
                              <th>实测值（${me.unit}）</th>
                              <th>基线参考</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${me.series.map(I=>{const c=typeof I.baseline=="number"&&I.value>I.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${I.label}</strong></td>
                                    <td>${I.value.toLocaleString("en-US")}</td>
                                    <td>${I.baseline!==void 0?I.baseline.toLocaleString("en-US"):"-"}</td>
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
                    <span class="pacom-row-sub">${me.zoneBreakdown.length} 个功能区</span>
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
                          ${me.zoneBreakdown.map(I=>{const c=Math.max(8,Math.round(I.value/ye*100));return`
                                <tr>
                                  <td style="font-weight:500;">${I.zoneName.replace(/^7F\s*/,"")}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${c}%; height:100%; border-radius:999px; background:${I.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${I.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${I.unit}</span></td>
                                  <td>
                                    <span class="pacom-badge ${I.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${I.status==="warning"?"偏高关注":"正常"}
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
                    <h2 class="lov-section-title">${se?"E7F 空间对照预览":o==="energy"&&ee==="load"?"峰谷负荷分布（Load Profile）":Ee.title}</h2>
                    ${!se&&o==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${ee==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${ee==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${se?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${se?'<img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
                        ${o==="environment"?`
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
                        ${(o==="energy"&&ee==="load"?Rt:Ee.items).map(I=>`
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                                <span style="font-weight:500; color:var(--pacom-text-primary);">${I.name}</span>
                                <span class="pacom-row-sub">${I.detail} · <strong style="color:var(--pacom-text-primary);">${I.pct}%</strong></span>
                              </div>
                              <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                <div style="width:${Math.min(100,I.pct)}%; height:100%; border-radius:999px; background:${I.color};"></div>
                              </div>
                            </div>`).join("")}`}
                  </div>
                </section>
              </div>
            </div>`}
      </div>
    `,He(e,{onToggle:()=>{Z=!Z,ae(),Z&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:I=>{T=I,ae();const c=e.querySelector("[data-global-space-search]");c&&(c.focus(),c.setSelectionRange(I.length,I.length))},onPick:I=>{y=I,W=I.level==="all-projects"||I.level==="project"?p.projectId:I.level==="building"?p.buildingId:p.floorId,Z=!1,ae()}}),e.querySelectorAll("[data-cat]").forEach(I=>{I.addEventListener("click",()=>{D=I.dataset.cat??"energy",de="",D==="timeseries"?ae():ie()})}),e.querySelector("[data-range-select]")?.addEventListener("change",I=>{J=I.currentTarget.value??"7d",ie()}),e.querySelector("[data-custom-start]")?.addEventListener("change",I=>{U=I.currentTarget.value}),e.querySelector("[data-custom-end]")?.addEventListener("change",I=>{ne=I.currentTarget.value}),e.querySelectorAll("[data-chart-mode]").forEach(I=>{I.addEventListener("click",()=>{Y=I.dataset.chartMode??"chart",ae()})}),e.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{le=!le,ae()}),e.querySelectorAll("[data-energy-right]").forEach(I=>{I.addEventListener("click",()=>{ee=I.dataset.energyRight??"breakdown",ae()})}),e.querySelector("[data-export-csv]")?.addEventListener("click",()=>{X?Zt(ke):Wt(me)}),e.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{se=!se,ae()}),e.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),e.querySelectorAll("[data-ts-expand]").forEach(I=>{I.addEventListener("click",()=>{const c=I.dataset.tsExpand;c&&(N.has(c)?N.delete(c):N.add(c),ae())})}),e.querySelectorAll("[data-ts-point]").forEach(I=>{I.addEventListener("change",()=>{const c=I.dataset.tsPoint;c&&(I.checked?$.add(c):$.delete(c),de="",ae())})}),e.querySelectorAll("[data-ts-mode]").forEach(I=>{I.addEventListener("click",()=>{g=I.dataset.tsMode??"grouped",ae()})}),e.querySelector("[data-ts-interval]")?.addEventListener("change",I=>{F=I.currentTarget.value??"1h",ae()}),e.querySelector("[data-ts-compare]")?.addEventListener("click",()=>{n=!n,ae()}),e.querySelector("[data-ts-share]")?.addEventListener("click",()=>{const c=`#analysis?tab=timeseries&points=${encodeURIComponent(Array.from($).join(","))}&mode=${g}&interval=${F}`,m=`${window.location.origin}${window.location.pathname}${c}`;navigator.clipboard?.writeText&&navigator.clipboard.writeText(m).catch(()=>{}),window.history.replaceState(null,"",c),de=`已复制分享链接（含 ${$.size} 个测点、${g==="grouped"?"按单位分组":"单图叠合"}、${F} 粒度）。`,ae()}),e.querySelectorAll("[data-load-fav]").forEach(I=>{I.addEventListener("click",()=>{const c=_.find(m=>m.id===I.dataset.loadFav);c&&($.clear(),c.pointIds.forEach(m=>{$.add(m);const K=m.split(":")[0];K&&N.add(K)}),g=c.mode,F=c.interval,de=`已加载收藏视图「${c.name}」。`,ae())})}),e.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if($.size===0)return;const I=`自定义对比 #${_.length+1}（${$.size} 测点）`;_.push({id:`fav-${Date.now()}`,name:I,pointIds:Array.from($),mode:g,interval:F}),de=`已保存当前时序配置为「${I}」。`,ae()})}await ie()}const Kt={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},Yt={frozen:"已冻结",draft:"草稿",delivered:"已交付"},ot=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"每层建议 2–3 个 Proxy，空旷 20–30m 或拐角可按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 避免广播干扰；自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度 0–10 级调光；自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造；支持通断控制"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay 保障吞吐"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"1 层 1 网标准配置，承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙/拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关接入，无需加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485/通讯管理机接入，记录厂家编码与表号"}],nt=[{id:"doc-hvac-7f",name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",name:"E7F_协议点位与蓝牙Mesh映射台账.xlsx",category:"点位台账",boundScope:"E栋 7F · 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}],Xt={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function j(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function gt(e){const t=e.match(/(-?\d+)/);if(!t)return 0;const a=Number(t[1]);return e.toUpperCase().startsWith("B")?-Math.abs(a):a}function Qt(e){return e.category==="gateway"?e.name.includes("蓝牙")?"蓝牙适配器":"主控网关":e.category==="lighting"?e.name.includes("702")?"702 照明":e.name.slice(0,6):e.category==="hvac"?e.name.includes("VAV")?"VAV-02":e.name.includes("FCU")?"FCU-01":e.name.slice(0,6):e.category==="sensor"?"环境传感":e.name.slice(0,6)}function Jt(e,t){const a=e.status!=="connected",s=t.filter(i=>i.hardwareBinding?.protocol===e.protocol);return s.length>0?s.map(i=>{const r=i.connectivity==="offline"||a;return{pointName:i.category==="hvac"?"送风温度 / 阀门开度":i.category==="lighting"?"回路开关 / 亮度反馈":i.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:i.name,value:r?"无上报":i.category==="hvac"?"23.4°C · 62%":i.category==="lighting"?"开启 · 80%":i.category==="sensor"?"23.2°C · 640 ppm":"负载 24% · 18ms",interval:"60s",lastSeen:r?"46 分钟前":"12 秒前",quality:r?i.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${e.protocol.toUpperCase()} 采集通道汇总点`,deviceName:e.name,value:a?"采样延迟":"正常上报",interval:"60s",lastSeen:a?"38 分钟前":"9 秒前",quality:a?"delayed":"online"}]}async function ea(e,t,a){const s=new URLSearchParams(window.location.hash.split("?")[1]??"").get("sec");let i=s==="floors"||s==="projects"?"project_config":s==="floorplan"||s==="devices"?"floorplan":s==="inventory"?"ledger":s==="connections"?"connections":"overview",r=s==="floors"?"floor_zones":"project_building",q="",O="all",P=Ve(),Q=!1,D="",J="device",U="all",ne="",y=!1,Z=!1,T="mesh",W=1,Y=0,le=0,ee=await t.getSpatialTree(),se=[],te=[],ce=[];const $e=[],k=new Map,A=new Map,be=[],g={...Xt},F=[];let n=P.level==="floor"?P.floorId:p.floorId,d=P.level==="building"||P.level==="floor"?P.buildingId:p.buildingId,$=null,N=!1,_=!1,de=!1,ie=!1,ae=!1,X=null,o=null,h=null,G=3,me=!1,ze=[],Ee=null,ye="",ke="";const I=new Map([["dev-e7f-gw-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-02",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-env-01",{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}]]),c=[{id:"lm-1",deviceId:"dev-e7f-lt-01",channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],m=[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:p.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:p.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:p.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:p.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],K=new Map;function ge(){return{...ee,floors:he(),zones:Oe()}}function he(){return[...ee.floors,...$e].map(x=>{const V=k.get(x.id);return V?{...x,plan:{floorId:x.id,imageUrl:V,planVersion:(x.plan?.planVersion??0)+1,updatedAt:new Date().toISOString()}}:x})}function je(x){return[...he().filter(V=>V.buildingId===x)].sort((V,l)=>gt(l.name)-gt(V.name))}function Oe(){return[...ee.zones,...be]}function xe(x){return[...x===p.floorId?se:[],...F.filter(l=>l.floorId===x)]}function Le(x){return x?Oe().find(V=>V.id===x)?.name.replace(/^7F\s*/,"")??x:"未分配功能区"}function Ne(x){n=x;const V=he().find(l=>l.id===x);V&&(d=V.buildingId,P=pt({level:"floor",projectId:p.projectId,buildingId:V.buildingId,floorId:V.id})),$=null,Z=!1,_=!1,W=1,Y=0,le=0}async function De(){ke="";const[x,V,l,v]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(p.floorId).catch(()=>[]),t.listConnections(p.projectId),t.listDeliveryBatches(p.floorId)]);ee=x,se=V,te=l,ce=v;const b=xe(n);$&&!b.some(ue=>ue.id===$)&&($=null,Z=!1),N=b.find(ue=>ue.id===$)?.physicalInstalled??!1,pe()}function Se(){const x=e.querySelector('[data-role="dep-viewport"]');x&&(x.style.transform=`translate(${Y}px, ${le}px) scale(${W})`);const V=e.querySelector('[data-role="dep-zoom-label"]');V&&(V.textContent=`${Math.round(W*100)}%`)}function Ze(x){ke="",x.connectivity==="offline"?ke=`单机回读自检未通过（FAIL）：「${x.name}」当前离线，请核查网关链路或中继覆盖。`:ye=`单机回读自检通过（PASS）：「${x.name}」指令下发与状态回读一致，已安全复位。`,pe()}function w(){ke="";const x=xe(n),V=x.filter(E=>E.connectivity==="offline"),l=x.length-V.length,v=new Date;Ee={ranAt:`${String(v.getHours()).padStart(2,"0")}:${String(v.getMinutes()).padStart(2,"0")}:${String(v.getSeconds()).padStart(2,"0")}`,total:x.length,passed:l,failed:V.length,failedNames:V.map(E=>E.name)},V.length>0?ke=`全层批量自检完成：${l}/${x.length} 台通过，${V.length} 台异常（${V.map(E=>E.name).join("、")}）。`:ye=`全层批量自检全部通过（${l}/${x.length}），设备已自动安全复位。`,pe()}function H(){const x=xe(n),V=[],l=x.filter(L=>L.connectivity==="offline"),v=x.filter(L=>!L.planPoint),b=x.filter(L=>I.get(L.id)?.proxy).length,E=x.filter(L=>I.get(L.id)?.relay).length,ue=x.length?E/x.length:0;l.length>0?l.forEach(L=>V.push({level:"fail",title:`节点不可达：${L.name}`,detail:"建议检查供电、通信端子，若属无线节点可在遮挡拐角处增设中继节点。",deviceId:L.id})):V.push({level:"ok",title:"全网节点可达性正常",detail:`${x.length} 台设备均正常响应心跳。`}),b<1?V.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，方便现场 App 接入网络。"}):V.push({level:"ok",title:`代理节点配置合理（${b} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),ue>.25&&x.length>=4&&V.push({level:"warn",title:`中继比例偏高（${Math.round(ue*100)}%）`,detail:"建议中继节点控制在总设备数 10% 左右，避免广播风暴。"}),v.length>0&&V.push({level:"warn",title:`尚有 ${v.length} 台未完成图纸标点`,detail:"请在「图纸标点」中补齐坐标以便施工定位。"}),ze=V,ye=`已完成蓝牙 Mesh 网络体检（检测 ${x.length} 台节点，发现 ${V.filter(L=>L.level!=="ok").length} 项关注）。`,pe()}function M(){const x=xe(n),V=[["设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...x.map(E=>[E.name,E.category,Le(E.logicalZoneId),E.planPoint?`${Math.round(E.planPoint.x*100)}%/${Math.round(E.planPoint.y*100)}%`:"未标点",E.hardwareBinding?`${E.hardwareBinding.protocol} ${E.hardwareBinding.networkAddress}`:"未绑定",E.physicalInstalled?"已复核":"待复核",E.connectivity==="online"?"在线":"离线"].join(","))],l=new Blob([`\uFEFF${V.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),v=URL.createObjectURL(l),b=document.createElement("a");b.href=v,b.download="pacom-deployment-inventory.csv",b.click(),URL.revokeObjectURL(v)}const u={overview:{title:"部署总览",subtitle:"按 5 步工程流水线跟踪整栋底图、设备标记、入网与边缘同步进度。"},project_config:{title:"项目配置",subtitle:"维护项目地理坐标、楼宇实景图、批量楼层及各层 2D 平面底图与功能区。"},floorplan:{title:"设备标记",subtitle:"在 2D 平面底图上完成设备标记、回路灯点与硬件复核。"},ledger:{title:"设备列表",subtitle:"核查全层四态设备清单，统一下发人感/光感参数并执行单机或全层自检。"},groups:{title:"设备分组",subtitle:"统一管理端侧蓝牙 Mesh 自治联动组与云端业务分组。"},network_topo:{title:"设备网络",subtitle:"执行蓝牙 Mesh 网络体检、云边协同同步，并查看自动生成的通信与业务拓扑。"},connections:{title:"系统接入",subtitle:"管理边缘网关服务与暖通、电表、环境等异构子系统通道及传感器采集质量。"}};function f(){const x=(V,l,v)=>`
      <button type="button" class="lov-unified-item" aria-current="${i===V}" data-dep-nav="${V}">
        ${ve(l,16)}
        <span>${v}</span>
      </button>`;return`
      <aside class="lov-unified-rail" aria-label="系统部署菜单">
        <div class="lov-unified-group">
          ${x("overview","chart-column","部署总览")}
          ${x("project_config","building-2","项目配置")}
          ${x("floorplan","map-pin","设备标记")}
          ${x("ledger","list","设备列表")}
          ${x("groups","folder-kanban","设备分组")}
          ${x("network_topo","network","设备网络")}
          ${x("connections","plug","系统接入")}
        </div>
      </aside>
    `}function B(x){return i==="overview"?`
        <button type="button" class="pacom-btn" data-export-inv="1">导出台账</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${x?"":"disabled"}>+ 交付冻结</button>
      `:i==="floorplan"?'<button type="button" class="pacom-btn" data-export-inv="1">导出施工标点表</button>':i==="ledger"?'<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ftt="1">一键全层自检 (FTT)</button>':i==="groups"?`<button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-group="1" ${x?"":"disabled"}>${ae?"收起表单":"+ 新建分组"}</button>`:i==="network_topo"?`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">一键网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${x?"":"disabled"}>${me?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `:i==="connections"?`
        <button type="button" class="pacom-btn" data-edge-restart="service" ${x?"":"disabled"}>重启边缘服务</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-conn="1" ${x?"":"disabled"}>${ie?"收起向导":"+ 新增接入通道"}</button>
      `:`<span class="pacom-badge ${x?"pacom-badge--online":"pacom-badge--warning"}">${x?"可编辑":"只读"}</span>`}function C(){const x=je(d),V=x.filter(L=>!!L.plan).length,l=x.flatMap(L=>xe(L.id)),v=l.filter(L=>!!L.planPoint).length,b=l.filter(L=>L.connectivity==="online").length,E=l.filter(L=>L.physicalInstalled).length,ue=x.filter(L=>xe(L.id).length>0&&!me).length;return`
      <div class="lov-kpi-strip lov-kpi-strip--5" role="region" aria-label="整栋 5 步部署流水线">
        <button type="button" class="lov-kpi-cell" data-dep-nav="project_config" data-proj-sub="floor_zones" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="lov-kpi-label"><span class="pacom-dot ${V===x.length?"pacom-dot--online":"pacom-dot--warning"}"></span>1. 空间与底图</span>
          <div class="lov-kpi-value">${V}<span class="lov-kpi-unit">/ ${x.length} 层</span></div>
          <span class="lov-kpi-delta">${V===x.length?"全部底图就绪":`尚缺 ${x.length-V} 层底图 →`}</span>
        </button>
        <button type="button" class="lov-kpi-cell" data-dep-nav="floorplan" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="lov-kpi-label"><span class="pacom-dot ${v===l.length?"pacom-dot--online":"pacom-dot--warning"}"></span>2. 设备标记</span>
          <div class="lov-kpi-value">${v}<span class="lov-kpi-unit">/ ${l.length} 台</span></div>
          <span class="lov-kpi-delta">含 ${c.length} 处回路灯点</span>
        </button>
        <button type="button" class="lov-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="lov-kpi-label"><span class="pacom-dot ${b===l.length?"pacom-dot--online":"pacom-dot--warning"}"></span>3. 入网在线</span>
          <div class="lov-kpi-value">${b}<span class="lov-kpi-unit">/ ${l.length} 台</span></div>
          <span class="lov-kpi-delta">${l.length-b>0?`${l.length-b} 台离线 →`:"全量在线"}</span>
        </button>
        <button type="button" class="lov-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="lov-kpi-label"><span class="pacom-dot ${me?"pacom-dot--warning":"pacom-dot--online"}"></span>4. 边缘同步</span>
          <div class="lov-kpi-value">${ue}<span class="lov-kpi-unit">/ ${x.length} 层</span></div>
          <span class="lov-kpi-delta">${me?"有变更待下发 →":`基线 v${G}`}</span>
        </button>
        <button type="button" class="lov-kpi-cell" data-dep-nav="ledger" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="lov-kpi-label"><span class="pacom-dot ${E===l.length?"pacom-dot--online":"pacom-dot--warning"}"></span>5. 复核自检</span>
          <div class="lov-kpi-value">${E}<span class="lov-kpi-unit">/ ${l.length} 台</span></div>
          <span class="lov-kpi-delta">${E===l.length?"可交付冻结":`待复核 ${l.length-E} 台 →`}</span>
        </button>
      </div>

      <section class="lov-section">
        <div class="lov-section-head">
          <div>
            <h2 class="lov-section-title">楼层 × 工序交付门控矩阵</h2>
            <span class="pacom-row-sub">点击任意单元格，直接切至对应楼层与页面修复</span>
          </div>
          <button type="button" class="pacom-btn" data-batch-ftt="1">一键全层自检 (FTT)</button>
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
                ${x.map(L=>{const S=xe(L.id),Ie=Oe().filter(_e=>_e.floorId===L.id),R=S.filter(_e=>!!_e.planPoint).length,Te=S.filter(_e=>_e.connectivity==="online").length,et=S.filter(_e=>_e.physicalInstalled).length,tt=!!L.plan,ut=tt&&S.length>0&&R===S.length&&et===S.length&&Te===S.length&&!me;return`
                      <tr>
                        <td><strong>${j(L.name)}</strong><div class="pacom-row-sub">${L.areaSqm?`${L.areaSqm} m²`:"待补面积"}</div></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-proj-sub="floor_zones" data-matrix-floor="${j(L.id)}"><span class="pacom-dot ${tt?"pacom-dot--online":"pacom-dot--offline"}"></span><span>${tt?`已传图 · ${Ie.length} 区`:"待传底图"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="floorplan" data-matrix-floor="${j(L.id)}"><span class="pacom-dot ${S.length>0&&R===S.length?"pacom-dot--online":S.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${S.length>0?`${R}/${S.length}`:"未标点"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${j(L.id)}"><span class="pacom-dot ${S.length>0&&Te===S.length?"pacom-dot--online":S.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${S.length>0?`${Te}/${S.length}`:"—"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${j(L.id)}"><span class="pacom-dot ${S.length===0?"pacom-dot--offline":me?"pacom-dot--warning":"pacom-dot--online"}"></span><span>${S.length===0?"—":me?"待同步":`v${G}`}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="ledger" data-matrix-floor="${j(L.id)}"><span class="pacom-dot ${S.length>0&&et===S.length?"pacom-dot--online":S.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${S.length>0?`${et}/${S.length}`:"—"}</span></button></td>
                        <td style="text-align:right;"><span class="pacom-badge ${ut?"pacom-badge--online":S.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">${ut?"可验收交付":S.length>0?"实施中":"待配置"}</span></td>
                      </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      ${Ee?`<div class="lov-banner ${Ee.failed===0?"lov-banner--ok":"lov-banner--critical"}">
              <div class="lov-banner-text">
                <span class="lov-banner-title">最近批量自检（FTT） · ${Ee.ranAt}</span>
                <span class="lov-banner-sub">通过 ${Ee.passed}/${Ee.total} 台${Ee.failedNames.length?` · 异常：${Ee.failedNames.join("、")}`:" · 全部安全复位"}</span>
              </div>
            </div>`:""}

      <section class="lov-section">
        <div class="lov-section-head">
          <h2 class="lov-section-title">交付冻结基线记录</h2>
          <span class="pacom-row-sub">共 ${ce.length} 条冻结快照</span>
        </div>
        <div class="lov-table-card">
          <div class="lov-table-wrap">
            <table class="lov-table">
              <thead><tr><th>版本标签</th><th>现场核验进度</th><th>冻结人与备注</th><th>状态</th></tr></thead>
              <tbody>
                ${ce.map(L=>`
                    <tr>
                      <td><div style="font-weight:500;">${j(L.versionTag)}</div><div class="pacom-row-sub"><code>${j(L.id)}</code></div></td>
                      <td><strong>${L.verifiedCount}</strong> / ${L.deviceCount} 台</td>
                      <td><div>${j(L.frozenBy)}</div><div class="pacom-row-sub">${j(L.note??"-")}</div></td>
                      <td><span class="pacom-badge pacom-badge--accent">${Yt[L.status]??L.status}</span></td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function re(x){const V=ee.projects[0],l=ee.buildings.find(v=>v.id===d)??ee.buildings[0];return`
      <div style="width:100%; display:flex; flex-direction:column; gap:28px;">
        <section class="lov-section">
          <div class="lov-section-head">
            <h2 class="lov-section-title">项目基础信息</h2>
            <span class="pacom-badge pacom-badge--accent">经纬度驱动气象与能耗基准</span>
          </div>
          <form class="lov-settings-card" data-save-project="1">
            <div class="lov-setting-row">
              <div class="lov-setting-meta"><span class="lov-setting-title">项目名称与城市</span><span class="lov-setting-desc">用于全局路径导航与多园区地图定位</span></div>
              <div class="lov-setting-control"><input class="pacom-input" name="pName" value="${j(V?.name??"广实2号园")}" style="width:180px;" ${x?"":"disabled"} /><input class="pacom-input" name="pCity" value="${j(V?.city??"广州市")}" style="width:120px;" ${x?"":"disabled"} /></div>
            </div>
            <div class="lov-setting-row">
              <div class="lov-setting-meta"><span class="lov-setting-title">详细地址与地理坐标</span><span class="lov-setting-desc">自动匹配周边气象站实况温度与湿度</span></div>
              <div class="lov-setting-control"><input class="pacom-input" name="pAddr" value="${j(V?.address??"")}" style="width:220px;" ${x?"":"disabled"} /><input class="pacom-input" name="pLngLat" value="113.3824, 23.0652" style="width:150px;" ${x?"":"disabled"} /></div>
            </div>
            <div class="lov-setting-row" style="justify-content:flex-end;">
              <button type="submit" class="pacom-btn pacom-btn--primary" ${x?"":"disabled"}>保存项目信息</button>
            </div>
          </form>
        </section>

        ${l?`
            <section class="lov-section">
              <div class="lov-section-head">
                <h2 class="lov-section-title">楼宇实景图：${j(l.name)}</h2>
                <span class="pacom-row-sub">建筑面积 ${l.areaSqm??"-"} m² · 地上 ${l.aboveFloors} 层</span>
              </div>
              <div class="pacom-card" style="gap:14px;">
                <div style="display:grid; grid-template-columns:minmax(0,1.2fr) minmax(240px,1fr); gap:16px; align-items:center;">
                  <div style="border-radius:12px; overflow:hidden; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                    <img src="${j(A.get(l.id)??l.imageUrl??"./media/building-e.png")}" alt="${j(l.name)}" style="width:100%; max-height:240px; object-fit:contain; display:block;" />
                  </div>
                  <div class="dep-upload-drop">
                    <strong style="font-size:13px; font-weight:500;">上传 / 替换楼宇实景图</strong>
                    <span class="pacom-row-sub">支持 PNG / WebP / JPG，用于空间总览整栋视图展示</span>
                    <label class="pacom-btn" style="cursor:pointer;">
                      <span>选择本地图片</span>
                      <input type="file" accept="image/*" data-upload-bld="${j(l.id)}" style="display:none;" ${x?"":"disabled"} />
                    </label>
                  </div>
                </div>
              </div>
            </section>

            <section class="lov-section">
              <div class="lov-section-head">
                <h2 class="lov-section-title">一键批量生成楼层（自动初始化 1 层 1 蓝牙 Mesh 网络）</h2>
                <span class="pacom-row-sub">无需手动逐层建表或单独创建 Mesh 网络</span>
              </div>
              <form class="lov-settings-card" data-batch-floors="${j(l.id)}">
                <div class="lov-setting-row">
                  <div class="lov-setting-meta">
                    <span class="lov-setting-title">起止楼层范围</span>
                    <span class="lov-setting-desc">例如 1 到 6 自动补齐 1F–6F，已存在楼层自动跳过</span>
                  </div>
                  <div class="lov-setting-control">
                    <input class="pacom-input" name="fromFloor" type="number" min="1" max="50" value="1" style="width:72px;" ${x?"":"disabled"} />
                    <span class="pacom-row-sub">F 至</span>
                    <input class="pacom-input" name="toFloor" type="number" min="1" max="50" value="6" style="width:72px;" ${x?"":"disabled"} />
                    <span class="pacom-row-sub">F</span>
                    <label style="display:inline-flex; align-items:center; gap:5px; font-size:12px; margin-left:6px;"><input type="checkbox" name="includeB1" checked ${x?"":"disabled"} />B1</label>
                    <label style="display:inline-flex; align-items:center; gap:5px; font-size:12px;"><input type="checkbox" name="includeRF" checked ${x?"":"disabled"} />RF</label>
                    <button type="submit" class="pacom-btn pacom-btn--primary" ${x?"":"disabled"}>批量生成</button>
                  </div>
                </div>
              </form>
            </section>`:""}
      </div>
    `}function fe(x){const V=je(d),l=V.find(b=>b.id===n)??V[0],v=l?Oe().filter(b=>b.floorId===l.id):[];return`
      <div style="width:100%; display:flex; flex-direction:column; gap:28px;">
        <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
          ${V.map(b=>`
              <button type="button" class="lov-count-pill" aria-pressed="${l?.id===b.id}" data-pick-floor-pill="${j(b.id)}">
                <span class="pacom-dot ${b.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                <span>${j(b.name)}</span>
              </button>`).join("")}
        </div>

        ${l?`
            <section class="lov-section">
              <div class="lov-section-head">
                <div style="display:flex; align-items:center; gap:8px;">
                  <h2 class="lov-section-title">${j(l.name)} · 2D 平面底图</h2>
                  <span class="pacom-badge pacom-badge--online">蓝牙 Mesh 网络已初始化</span>
                </div>
                <button type="button" class="pacom-btn pacom-btn--primary" data-dep-nav="floorplan">进入本层图纸标点 →</button>
              </div>
              <div class="pacom-card" style="gap:14px;">
                <div style="display:grid; grid-template-columns:minmax(0,1.35fr) minmax(240px,1fr); gap:16px; align-items:center;">
                  <div style="border-radius:12px; overflow:hidden; background:var(--pacom-surface-primary); min-height:200px; display:flex; align-items:center; justify-content:center; border:var(--hw) solid var(--pacom-border-subtle);">
                    ${l.plan?`<img src="${j(l.plan.imageUrl)}" alt="${j(l.name)} 平面图" style="width:100%; max-height:280px; object-fit:contain; display:block;" />`:'<span class="pacom-row-sub">暂未上传 2D 平面底图，请在右侧选择真实图纸</span>'}
                  </div>
                  <div class="dep-upload-drop">
                    <strong style="font-size:13px; font-weight:500;">${l.plan?"替换本层 2D 平面底图":"上传本层 2D 平面底图"}</strong>
                    <span class="pacom-row-sub">推荐清晰建筑线条 PNG / WebP（宽度 ≤ 3000px，体积 ≤ 500KB）</span>
                    <label class="pacom-btn pacom-btn--primary" style="cursor:pointer;">
                      <span>选择真实平面图</span>
                      <input type="file" accept="image/*" data-upload-floor="${j(l.id)}" style="display:none;" ${x?"":"disabled"} />
                    </label>
                  </div>
                </div>
              </div>
            </section>

            <section class="lov-section">
              <div class="lov-section-head">
                <h2 class="lov-section-title">本层功能区清单</h2>
                <span class="pacom-row-sub">${v.length} 个功能区</span>
              </div>
              <div class="lov-settings-card">
                ${v.map(b=>`
                    <div class="lov-setting-row" style="padding:11px 0;">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">${j(b.name)} <span class="pacom-badge pacom-badge--neutral">${j(b.category)}</span></span>
                      </div>
                      <span class="pacom-row-sub">${xe(l.id).filter(E=>E.logicalZoneId===b.id).length} 台设备</span>
                    </div>`).join("")}
                <form class="lov-setting-row" style="padding:12px 0; gap:8px;" data-add-zone="${j(l.id)}">
                  <input class="pacom-input" name="zoneName" placeholder="输入新功能区名称（如：东侧会议室）" required ${x?"":"disabled"} />
                  <select class="pacom-select" name="zoneCat" ${x?"":"disabled"}>
                    <option value="lab">实验区</option>
                    <option value="office">办公区</option>
                    <option value="meeting">会议室</option>
                    <option value="corridor">走廊/弱电</option>
                    <option value="utility">机房/设备间</option>
                  </select>
                  <button type="submit" class="pacom-btn" ${x?"":"disabled"}>+ 添加功能区</button>
                </form>
              </div>
            </section>

            <section class="lov-section">
              <div class="lov-section-head">
                <h2 class="lov-section-title">竣工图纸与设备手册附件</h2>
                <span class="pacom-row-sub">共 ${nt.length} 份工程文档</span>
              </div>
              <div class="lov-table-card">
                <div class="lov-table-wrap">
                  <table class="lov-table">
                    <thead><tr><th>文档名称</th><th>类型</th><th>关联范围</th><th style="text-align:right;">操作</th></tr></thead>
                    <tbody>
                      ${nt.map(b=>`
                        <tr>
                          <td><div style="font-weight:500;">${b.name}</div><div class="pacom-row-sub">${b.size} · ${b.updatedAt}</div></td>
                          <td><span class="pacom-badge pacom-badge--neutral">${b.category}</span></td>
                          <td><span class="pacom-row-sub">${b.boundScope}</span></td>
                          <td style="text-align:right;"><button type="button" class="pacom-btn" data-preview-doc="${b.id}">查阅</button></td>
                        </tr>`).join("")}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>`:""}
      </div>
    `}function we(x){const V=je(d),l=V.find(R=>R.id===n)??V[0],v=xe(n),b=Oe().filter(R=>R.floorId===n),E=Z?v.find(R=>R.id===$)??null:null,ue=E?I.get(E.id)??{proxy:!1,relay:!1,meshUuid:`mesh-${n.slice(-4)}`}:null,L=E?c.filter(R=>R.deviceId===E.id):[],S=ne.trim().toLowerCase(),Ie=v.filter(R=>!(U==="unverified"&&R.physicalInstalled||U==="unplaced"&&R.planPoint||S&&!`${R.name} ${Le(R.logicalZoneId)}`.toLowerCase().includes(S)));return`
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(420px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${ve("search",14)}
            <input class="pacom-hud-input" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${j(ne)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill ${y?"is-active":""}" data-toggle-hud-pool="1">设备池 ${v.length}</button>
            <button type="button" class="pacom-hud-pill" data-toggle-new-dev="1" ${x?"":"disabled"}>+ 标点</button>
          </div>

          ${y||de?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:13px; font-weight:500;">${de?"新增设备标点":`${j(l?.name??"7F")} 设备池（${Ie.length}）`}</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${ve("x",14)}</button>
                </div>
                ${de?`
                    <form data-create-dev="1" style="padding:12px; display:flex; flex-direction:column; gap:8px;">
                      <input class="pacom-input" name="devName" placeholder="设备名称（如：703 会议室三控面板）" required />
                      <select class="pacom-select" name="devPreset">${ot.map(R=>`<option value="${R.key}">${R.label}</option>`).join("")}</select>
                      <select class="pacom-select" name="devZone">${b.map(R=>`<option value="${j(R.id)}">${j(R.name)}</option>`).join("")}</select>
                      <button type="submit" class="pacom-btn pacom-btn--primary">加入图纸并预设 Mesh 角色</button>
                    </form>`:`
                    <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                      <div class="lov-count-pills">
                        <button type="button" class="lov-count-pill" style="height:24px; padding:0 8px; font-size:11px;" aria-pressed="${U==="all"}" data-dev-filter="all">全部 <span class="lov-count-num">${v.length}</span></button>
                        <button type="button" class="lov-count-pill" style="height:24px; padding:0 8px; font-size:11px;" aria-pressed="${U==="unverified"}" data-dev-filter="unverified">待复核 <span class="lov-count-num">${v.filter(R=>!R.physicalInstalled).length}</span></button>
                        <button type="button" class="lov-count-pill" style="height:24px; padding:0 8px; font-size:11px;" aria-pressed="${U==="unplaced"}" data-dev-filter="unplaced">未标点 <span class="lov-count-num">${v.filter(R=>!R.planPoint).length}</span></button>
                      </div>
                    </div>
                    <div class="pacom-list" style="padding:6px;">
                      ${Ie.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">无匹配设备</div>':Ie.map(R=>`
                                <div class="pacom-row ${R.id===$&&Z?"is-selected":""}" data-pick-dev="${j(R.id)}" style="padding:8px;">
                                  <div style="min-width:0;">
                                    <div class="pacom-row-title" style="font-size:13px;">${j(R.name)}</div>
                                    <div class="pacom-row-sub">${j(Le(R.logicalZoneId))} · ${R.physicalInstalled?"已复核":"待复核"}</div>
                                  </div>
                                  <span class="pacom-badge ${R.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${R.planPoint?"已标点":"未标点"}</span>
                                </div>`).join("")}
                    </div>`}
              </div>`:""}
        </div>

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${_?"crosshair":"grab"};">
          ${l?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${Y}px, ${le}px) scale(${W});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${j(l.plan.imageUrl)}" alt="${j(l.name)} 平面图" />
                  ${J==="zone"?b.map(R=>{const Te=g[R.id];return Te?`<div class="pacom-zone-hotspot is-active" style="left:${Te.left}%; top:${Te.top}%; width:${Te.width}%; height:${Te.height}%;"><span class="pacom-zone-tag">${j(R.name.replace(/^7F\s*/,""))}</span></div>`:""}).join(""):""}
                  ${v.filter(R=>R.planPoint).map(R=>`
                      <button type="button" class="pacom-pin ${R.id===$&&Z?"is-selected":""} ${R.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(R.planPoint.x*100).toFixed(2)}%; top:${(R.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${j(R.id)}" title="${j(R.name)}">
                        <span class="pacom-dot ${R.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${j(Qt(R))}</span>
                      </button>`).join("")}
                  ${J==="light_marker"||E?.category==="lighting"?c.filter(R=>v.some(Te=>Te.id===R.deviceId)).map(R=>`
                            <span class="dep-light-dot" style="left:${(R.x*100).toFixed(1)}%; top:${(R.y*100).toFixed(1)}%;" title="${j(R.label)}（${j(R.channel)}）">
                              ${ve("sparkles",12)}<span>${j(R.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-dep-nav="project_config" data-proj-sub="floor_zones">前往「项目配置」上传真实底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${V.map(R=>`
              <button type="button" class="pacom-elev-item ${R.id===n?"is-active":""}" data-scrubber-floor="${j(R.id)}" title="${j(R.name)}${R.plan?" · 已传底图":" · 待传底图"}">
                ${R.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${j(R.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标记画笔与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${J==="device"}" data-brush="device">设备标记</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${J==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${J==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${ve("minus",14)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(W*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${ve("plus",14)}</button>
        </div>

        ${E?`
            <aside class="pacom-drawer" aria-label="设备部署属性">
              <div class="pacom-drawer-head">
                <div style="min-width:0;">
                  <h2 class="pacom-drawer-title">${j(E.name)}</h2>
                  <div class="pacom-row-sub">${j(Le(E.logicalZoneId))} · v${E.version}</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${ve("x",16)}</button>
              </div>

              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-toggle-place="1" ${x?"":"disabled"}>${_?"点击图纸定位中…":"点图更新坐标"}</button>
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ping-dev="${j(E.id)}">Ping 闪灯 5s</button>
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ftt-test="1">单机自检</button>
              </div>

              ${E.category==="lighting"?`
                  <div class="pacom-control-box" style="gap:6px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span style="font-size:12px; font-weight:500;">回路可视化灯点（${L.length}）</span>
                      <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:11px;" data-add-light-marker="${j(E.id)}" ${x?"":"disabled"}>+ 添加灯点</button>
                    </div>
                    ${L.map(R=>`
                        <div class="pacom-receipt-item" style="padding:6px 8px; font-size:12px;">
                          <span><strong>${j(R.channel)}</strong> · ${j(R.label)}</span>
                          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:20px; padding:0 6px; font-size:11px;" data-del-light-marker="${j(R.id)}" ${x?"":"disabled"}>删</button>
                        </div>`).join("")}
                  </div>`:""}

              ${E.category!=="hvac"&&E.category!=="meter"&&ue?`
                  <div class="pacom-control-box" style="gap:6px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span style="font-size:12px; font-weight:500;">蓝牙 Mesh 节点角色</span>
                      <code style="font-size:11px;">${j(ue.meshUuid)}</code>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                      <span>Proxy 代理（建议每层 2–3 个）</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${ue.proxy}" data-toggle-mesh-role="proxy" data-mesh-dev="${j(E.id)}" ${x?"":"disabled"}><span class="lov-switch-thumb"></span></button>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                      <span>Relay 中继（建议 ≤10%，面板默认关）</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${ue.relay}" data-toggle-mesh-role="relay" data-mesh-dev="${j(E.id)}" ${x?"":"disabled"}><span class="lov-switch-thumb"></span></button>
                    </div>
                  </div>`:""}

              <form data-role="binding-form" class="pacom-control-box" style="gap:8px;">
                <span style="font-size:12px; font-weight:500;">硬件绑定与物理安装复核</span>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
                  <select class="pacom-select" style="height:28px; font-size:12px;" name="protocol" aria-label="通信协议">
                    ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(R=>`<option value="${R}" ${E.hardwareBinding?.protocol===R?"selected":""}>${R.toUpperCase()}</option>`).join("")}
                  </select>
                  <input class="pacom-input" style="height:28px; font-size:12px;" name="networkAddress" placeholder="网络地址/主题" value="${j(E.hardwareBinding?.networkAddress??"")}" />
                </div>
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                  <input class="pacom-input" style="height:28px; font-size:12px;" name="portOrChannel" placeholder="端口/回路" value="${j(E.hardwareBinding?.portOrChannel??"")}" />
                  <span style="display:inline-flex; align-items:center; gap:6px; font-size:12px; flex-shrink:0;">
                    <span>物理已复核</span>
                    <button type="button" class="lov-switch" role="switch" aria-checked="${N}" data-toggle-phys="1" ${x?"":"disabled"}><span class="lov-switch-thumb"></span></button>
                  </span>
                </div>
                <button class="pacom-btn pacom-btn--primary" type="submit" style="height:30px; font-size:13px;" ${x?"":"disabled"}>保存绑定与复核（v${E.version}）</button>
              </form>
            </aside>`:""}
      </main>
    `}function oe(x){const V=xe(n),l=q.trim().toLowerCase(),v=V.filter(L=>!(O==="online"&&L.connectivity!=="online"||O==="offline"&&L.connectivity!=="offline"||O==="unverified"&&L.physicalInstalled||l&&!`${L.name} ${Le(L.logicalZoneId)} ${L.hardwareBinding?.protocol??""}`.toLowerCase().includes(l))),b=V.filter(L=>L.connectivity==="online").length,E=X?V.find(L=>L.id===X)??null:null,ue=E?K.get(E.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450}:null;return`
      <div class="lov-log-toolbar">
        <div class="lov-log-filters">
          <input class="pacom-input" style="width:220px;" data-ledger-search placeholder="搜索设备名称或功能区…" value="${j(q)}" aria-label="搜索设备列表" />
          <select class="pacom-select" data-ledger-filter aria-label="按设备状态筛选">
            <option value="all" ${O==="all"?"selected":""}>全部状态（${V.length}）</option>
            <option value="online" ${O==="online"?"selected":""}>仅看在线（${b}）</option>
            <option value="offline" ${O==="offline"?"selected":""}>仅看离线（${V.length-b}）</option>
            <option value="unverified" ${O==="unverified"?"selected":""}>待物理复核（${V.filter(L=>!L.physicalInstalled).length}）</option>
          </select>
          <button type="button" class="lov-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${ve("refresh-cw",14)}</button>
        </div>
        <div class="lov-log-filters">
          <button type="button" class="pacom-btn" data-export-inv="1">导出 CSV</button>
        </div>
      </div>
      ${E&&ue?`
          <form class="lov-settings-card" data-save-dev-params="${j(E.id)}">
            <div class="lov-setting-row">
              <div class="lov-setting-meta">
                <span class="lov-setting-title">设备参数配置：${j(E.name)}</span>
                <span class="lov-setting-desc">人感自动关灯延时、光照度开关门限与默认亮度参数</span>
              </div>
              <button type="button" class="pacom-drawer-close" data-close-param="1">${ve("x",16)}</button>
            </div>
            <div class="lov-setting-row" style="display:grid; grid-template-columns:repeat(4,1fr); gap:10px;">
              <label class="pacom-field"><span>自动关灯延时(分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${ue.offDelayMin}" /></label>
              <label class="pacom-field"><span>恢复自动延时(分)</span><input class="pacom-input" name="restoreMin" type="number" value="${ue.restoreMin}" /></label>
              <label class="pacom-field"><span>开灯光感门限(lx)</span><input class="pacom-input" name="luxOn" type="number" value="${ue.luxOn}" /></label>
              <label class="pacom-field"><span>关灯光感门限(lx)</span><input class="pacom-input" name="luxOff" type="number" value="${ue.luxOff}" /></label>
            </div>
            <div class="lov-setting-row" style="justify-content:flex-end;">
              <button type="submit" class="pacom-btn pacom-btn--primary" ${x?"":"disabled"}>下发设备参数</button>
            </div>
          </form>`:""}
      <div class="lov-table-card">
        <div class="lov-table-wrap">
          <table class="lov-table">
            <thead><tr><th>设备与功能区</th><th>1. 图上标记</th><th>2. 网络绑定</th><th>3. 物理复核</th><th>4. 在线态</th><th style="text-align:right;">操作</th></tr></thead>
            <tbody>
              ${v.length===0?'<tr><td colspan="6"><div class="lov-empty-state" style="padding:32px 16px;"><strong>无匹配设备</strong><span>可调整搜索词或切换状态筛选。</span></div></td></tr>':v.map(L=>`
                        <tr>
                          <td><div style="font-weight:500;">${j(L.name)}</div><div class="pacom-row-sub">${j(Le(L.logicalZoneId))} · v${L.version}</div></td>
                          <td><span class="pacom-badge ${L.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${L.planPoint?`${Math.round(L.planPoint.x*100)}%,${Math.round(L.planPoint.y*100)}%`:"未标记"}</span></td>
                          <td><span class="pacom-badge ${L.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${L.hardwareBinding?L.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                          <td><span class="pacom-badge ${L.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${L.physicalInstalled?"已复核":"待复核"}</span></td>
                          <td><span class="pacom-badge ${L.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${L.connectivity==="online"?"在线":"离线"}</span></td>
                          <td>
                            <div style="display:flex; justify-content:flex-end; gap:6px;">
                              <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ping-dev="${j(L.id)}">Ping</button>
                              <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-open-param="${j(L.id)}">参数</button>
                              <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ftt-dev="${j(L.id)}">自检</button>
                            </div>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
        <div class="lov-table-footer">
          <span>显示 ${v.length} / ${V.length} 台设备 · ${b} 在线 · ${V.length-b} 离线</span>
          <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-dep-nav="floorplan">前往设备标记 →</button>
        </div>
      </div>
    `}function Fe(){const x=m.filter(l=>l.track==="mesh_auto"),V=m.filter(l=>l.track==="cloud_biz");return`
      ${ae?`
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
            <h2 class="lov-section-title">端侧蓝牙 Mesh 自治组（${x.length}）</h2>
            <span class="pacom-badge pacom-badge--accent">自动纳入蓝牙适配器防漏报</span>
          </div>
          <div class="lov-settings-card">
            ${x.map(l=>`
                <div class="lov-setting-row">
                  <div class="lov-setting-meta">
                    <span class="lov-setting-title">${j(l.name)} <span class="pacom-badge pacom-badge--neutral">${j(l.groupType)}</span></span>
                    <span class="lov-setting-desc">成员 ${l.deviceIds.length} 台 · 断网仍可端侧自治联动</span>
                  </div>
                  <div class="lov-setting-control"><button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-test-group="${j(l.id)}">组控测试</button></div>
                </div>`).join("")}
          </div>
        </section>

        <section class="lov-section">
          <div class="lov-section-head">
            <h2 class="lov-section-title">云端业务分组（${V.length}）</h2>
            <span class="pacom-row-sub">空调 / 标牌 / 部门组，无需蓝牙配网</span>
          </div>
          <div class="lov-settings-card">
            ${V.map(l=>`
                <div class="lov-setting-row">
                  <div class="lov-setting-meta">
                    <span class="lov-setting-title">${j(l.name)} <span class="pacom-badge pacom-badge--neutral">${j(l.groupType)}</span></span>
                    <span class="lov-setting-desc">成员 ${l.deviceIds.length} 台 · 供首页批控与标牌复用</span>
                  </div>
                  <div class="lov-setting-control"><button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-test-group="${j(l.id)}">组控测试</button></div>
                </div>`).join("")}
          </div>
        </section>
      </div>
    `}function Pe(){const x=xe(n),V=Oe().filter(S=>S.floorId===n),l=x.filter(S=>S.category!=="hvac"&&S.category!=="meter"),v=l.filter(S=>I.get(S.id)?.proxy).length,b=l.filter(S=>I.get(S.id)?.relay).length,E=x.filter(S=>S.category==="gateway"),ue=x.filter(S=>I.get(S.id)?.relay||I.get(S.id)?.proxy),L=x.filter(S=>S.category!=="gateway");return`
      <div class="pacom-card" style="padding:14px 18px; gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <strong style="font-size:14px; font-weight:500;">本层蓝牙 Mesh 网络</strong>
            <span class="pacom-badge pacom-badge--online">协同锁空闲 · 可同步</span>
            <span class="pacom-row-sub">Mesh 节点 ${l.length} 台 · Proxy ${v} 个 · Relay ${b} 个 · 边缘基线 v${G}</span>
          </div>
        </div>
        ${ze.length>0?`<div style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                ${ze.map(S=>`
                    <div class="pacom-receipt-item" style="padding:8px 10px;">
                      <div><strong>${j(S.title)}</strong> <span class="pacom-row-sub">· ${j(S.detail)}</span></div>
                      <span class="pacom-badge ${S.level==="ok"?"pacom-badge--online":S.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${S.level==="ok"?"通过":S.level==="warn"?"建议优化":"异常"}</span>
                    </div>`).join("")}
              </div>`:""}
      </div>

      <section class="lov-section">
        <div class="lov-section-head">
          <h2 class="lov-section-title">自动生成设备拓扑（点击节点直达图纸标点）</h2>
          <div class="pacom-tabs">
            <button type="button" class="pacom-tab" aria-selected="${T==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
            <button type="button" class="pacom-tab" aria-selected="${T==="business"}" data-topo-mode="business">业务联动与供能流向</button>
          </div>
        </div>
        ${T==="mesh"?`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:13px; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器</strong>
                ${E.map(S=>`
                    <button type="button" class="dep-topo-node ${S.connectivity==="offline"?"is-issue":""}" data-topo-jump="${j(S.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${j(S.name)}</strong><span class="pacom-badge pacom-badge--online">网桥中心</span></div>
                      <span class="pacom-row-sub">${j(S.hardwareBinding?.networkAddress??"-")} · 云边同步通道</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:13px; color:var(--pacom-text-secondary);">2. 代理与中继骨架（Proxy / Relay）</strong>
                ${ue.length===0?'<div class="pacom-row-sub">暂未启用中继或代理节点，请在图纸标点抽屉中为传感器开启。</div>':ue.map(S=>{const Ie=I.get(S.id);return`
                            <button type="button" class="dep-topo-node ${S.connectivity==="offline"?"is-issue":""}" data-topo-jump="${j(S.id)}">
                              <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${j(S.name)}</strong><span class="pacom-badge pacom-badge--accent">${Ie?.proxy?"Proxy":""}${Ie?.proxy&&Ie?.relay?" + ":""}${Ie?.relay?"Relay":""}</span></div>
                              <span class="pacom-row-sub">${j(Le(S.logicalZoneId))}</span>
                            </button>`}).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:13px; color:var(--pacom-text-secondary);">3. 末端节点（异常自动标红）</strong>
                ${L.map(S=>`
                    <button type="button" class="dep-topo-node ${S.connectivity==="offline"?"is-issue":""}" data-topo-jump="${j(S.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${j(S.name)}</strong><span class="pacom-badge ${S.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${S.connectivity==="online"?"在线":"离线"}</span></div>
                      <span class="pacom-row-sub">${j(Le(S.logicalZoneId))} · ${j(S.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                    </button>`).join("")}
              </div>
            </div>`:`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:13px; color:var(--pacom-text-secondary);">上游源头 / 传感触发</strong>
                ${x.filter(S=>S.category==="sensor"||S.category==="gateway").map(S=>`
                    <button type="button" class="dep-topo-node" data-topo-jump="${j(S.id)}">
                      <strong>${j(S.name)}</strong>
                      <span class="pacom-row-sub">${S.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:13px; color:var(--pacom-text-secondary);">受控末端（照明 / 暖通）</strong>
                ${x.filter(S=>S.category==="lighting"||S.category==="hvac").map(S=>`
                    <button type="button" class="dep-topo-node ${S.connectivity==="offline"?"is-issue":""}" data-topo-jump="${j(S.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${j(S.name)}</strong><span class="pacom-badge ${S.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${S.connectivity==="online"?"正常":"离线"}</span></div>
                      <span class="pacom-row-sub">服务：${j(Le(S.logicalZoneId))}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:13px; color:var(--pacom-text-secondary);">服务功能区（影响面）</strong>
                ${V.map(S=>{const Ie=x.filter(Te=>Te.logicalZoneId===S.id),R=Ie.some(Te=>Te.connectivity==="offline");return`
                      <div class="dep-topo-node ${R?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${j(S.name.replace(/^7F\s*/,""))}</strong><span class="pacom-badge ${R?"pacom-badge--warning":"pacom-badge--online"}">${Ie.length} 台设备</span></div>
                        <span class="pacom-row-sub">${R?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                      </div>`}).join("")}
              </div>
            </div>`}
      </section>
    `}function Je(){const x=te.reduce((b,E)=>b+E.collectedPoints,0),V=te.reduce((b,E)=>b+E.calculatedPoints,0),l=te.filter(b=>b.status==="connected").length,v=te.filter(b=>b.status!=="connected");return`
      <div class="lov-kpi-strip" role="region" aria-label="系统接入健康度">
        <div class="lov-kpi-cell"><span class="lov-kpi-label">已连通网关通道</span><div class="lov-kpi-value">${l}<span class="lov-kpi-unit">/ ${te.length}</span></div><span class="lov-kpi-delta">含边缘网关与非 Mesh 子系统</span></div>
        <div class="lov-kpi-cell"><span class="lov-kpi-label">数据采集健康度</span><div class="lov-kpi-value">${te.length?Math.round(l/te.length*100):100}<span class="lov-kpi-unit">%</span></div><span class="lov-kpi-delta">区分网关断流与末端真故障</span></div>
        <div class="lov-kpi-cell"><span class="lov-kpi-label">原始采集点</span><div class="lov-kpi-value">${x}<span class="lov-kpi-unit">点</span></div><span class="lov-kpi-delta">协议直采实时遥测</span></div>
        <div class="lov-kpi-cell"><span class="lov-kpi-label">衍生计算点</span><div class="lov-kpi-value">${V}<span class="lov-kpi-unit">点</span></div><span class="lov-kpi-delta">能耗与聚合虚拟点位</span></div>
      </div>

      ${v.length>0?`<div class="lov-banner lov-banner--critical">
              <div class="lov-banner-text">
                <span class="lov-banner-title">检测到 ${v.length} 条采集通道通信降级（${v.map(b=>b.name).join("、")}）</span>
                <span class="lov-banner-sub">建议优先核查局域网 UDP/TCP 端口冲突、RS485 终端电阻与从站地址。</span>
              </div>
            </div>`:""}

      ${ie?`
          <form class="lov-settings-card" data-create-conn="1">
            <div class="lov-setting-row">
              <div class="lov-setting-meta">
                <span class="lov-setting-title">新增子系统接入通道</span>
                <span class="lov-setting-desc">支持边缘网关、中央空调/线控网关、智能电表通讯机、空气质量与数字标牌（自动检测局域网端口冲突）</span>
              </div>
              <button type="button" class="pacom-drawer-close" data-toggle-new-conn="1">${ve("x",16)}</button>
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
          <h2 class="lov-section-title">边缘网关与异构子系统接入清单</h2>
          <span class="pacom-row-sub">支持测通、复制端点及展开传感器级三态质量</span>
        </div>
        <div class="lov-table-card">
          <div class="lov-table-wrap">
            <table class="lov-table">
              <thead><tr><th>通道名称</th><th>协议</th><th>接入端点</th><th>点位规模</th><th>健康度</th><th style="text-align:right;">操作</th></tr></thead>
              <tbody>
                ${te.map(b=>{const E=Kt[b.status]??{label:b.status,cls:"pacom-badge--neutral"},ue=b.status==="connected"?98:b.status==="degraded"?62:0,L=ue>=75?"var(--pacom-status-online)":ue>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",S=h===b.id,Ie=S?Jt(b,se):[];return`
                      <tr>
                        <td><strong>${j(b.name)}</strong></td>
                        <td><span class="pacom-badge pacom-badge--neutral">${b.protocol.toUpperCase()}</span></td>
                        <td><code style="font-size:12px;">${j(b.endpoint)}</code></td>
                        <td>采集 ${b.collectedPoints} / 计算 ${b.calculatedPoints}</td>
                        <td style="min-width:130px;">
                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span class="pacom-badge ${E.cls}">${E.label}</span>
                            <span class="pacom-row-sub">${ue}%</span>
                          </div>
                          <div class="lov-progress-track"><div class="lov-progress-fill" style="width:${ue}%; background:${L};"></div></div>
                        </td>
                        <td>
                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                            <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-expand-conn="${j(b.id)}">${S?"收起点位":"点位质量"}</button>
                            <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ping-conn="${j(b.id)}">测通</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost" style="height:28px; font-size:12px;" data-copy-endpoint="${j(b.id)}" data-endpoint-val="${j(b.endpoint)}">${o===b.id?"已复制":"复制"}</button>
                          </div>
                        </td>
                      </tr>
                      ${S?`
                          <tr class="lov-table-detail-row">
                            <td colspan="6">
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                <div style="display:flex; justify-content:space-between; font-size:12px;">
                                  <strong>传感器 / 子设备采集质量明细（${j(b.name)}）</strong>
                                  <span class="pacom-row-sub">在线正常 · 延迟 &gt;30m · 断流 &gt;3×间隔</span>
                                </div>
                                ${Ie.map(R=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${j(R.deviceName)}</strong> · ${j(R.pointName)}</span>
                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                        <span class="pacom-row-sub">当前 ${j(R.value)} · ${j(R.lastSeen)}</span>
                                        <span class="pacom-badge ${R.quality==="online"?"pacom-badge--online":R.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                          ${R.quality==="online"?"在线正常":R.quality==="delayed"?"延迟 >30m":"断流"}
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
    `}function pe(){const x=a.scope.canEditDeployment;e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${Ue({tree:ge(),session:a,scope:P,isOpen:Q,searchKeyword:D})}
            </div>
            <div class="pacom-header-meta">
              ${B(x)}
            </div>
          </div>
        </header>

        <div class="lov-unified-sheet">
          ${f()}
          ${i==="floorplan"?`<div class="lov-unified-main--canvas">
                  ${ye?`<div class="lov-banner lov-banner--ok" style="margin-bottom:8px; flex-shrink:0;"><span class="lov-banner-title">${j(ye)}</span></div>`:""}
                  ${ke?`<div class="pacom-alert-banner" style="margin-bottom:8px; flex-shrink:0;">${j(ke)}</div>`:""}
                  ${we(x)}
                </div>`:`
              <div class="lov-unified-main">
                <div class="lov-unified-inner">
                  <div class="lov-unified-head">
                    <h2 class="lov-unified-title">${u[i].title}</h2>
                    <p class="lov-unified-subtitle">${u[i].subtitle}</p>
                  </div>
                  ${i==="project_config"?`<div class="pacom-tabs" style="align-self:flex-start;" role="tablist" aria-label="项目配置分段">
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${r==="project_building"}" data-proj-sub-tab="project_building">项目与楼宇</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${r==="floor_zones"}" data-proj-sub-tab="floor_zones">楼层与图纸</button>
                        </div>`:""}
                  ${ye?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${j(ye)}</span></div>`:""}
                  ${ke?`<div class="pacom-alert-banner">${j(ke)}</div>`:""}
                  ${i==="overview"?C():i==="project_config"?r==="floor_zones"?fe(x):re(x):i==="ledger"?oe(x):i==="groups"?Fe():i==="network_topo"?Pe():Je()}
                </div>
              </div>`}
        </div>
      </div>
    `,kt()}function kt(){He(e,{onToggle:()=>{Q=!Q,pe(),Q&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:l=>{D=l,pe();const v=e.querySelector("[data-global-space-search]");v&&(v.focus(),v.setSelectionRange(l.length,l.length))},onPick:l=>{P=l,Q=!1,l.level==="building"?d=l.buildingId:l.level==="floor"&&(d=l.buildingId,n=l.floorId,$=null,Z=!1),pe()}}),e.querySelectorAll("[data-dep-nav]").forEach(l=>{l.addEventListener("click",()=>{i=l.dataset.depNav??"overview",l.dataset.projSub&&(r=l.dataset.projSub),ye="",ke="",pe()})}),e.querySelectorAll("[data-proj-sub-tab]").forEach(l=>{l.addEventListener("click",()=>{r=l.dataset.projSubTab??"project_building",pe()})}),e.querySelector("[data-ledger-search]")?.addEventListener("input",l=>{q=l.currentTarget.value,pe();const v=e.querySelector("[data-ledger-search]");v&&(v.focus(),v.setSelectionRange(q.length,q.length))}),e.querySelector("[data-ledger-filter]")?.addEventListener("change",l=>{O=l.currentTarget.value??"all",pe()}),e.querySelectorAll("[data-refresh-dep]").forEach(l=>{l.addEventListener("click",()=>{De()})}),e.querySelectorAll("[data-matrix-nav]").forEach(l=>{l.addEventListener("click",()=>{const v=l.dataset.matrixFloor;v&&Ne(v),i=l.dataset.matrixNav??"floorplan",l.dataset.projSub&&(r=l.dataset.projSub),pe()})}),e.querySelectorAll("[data-pick-floor-pill]").forEach(l=>{l.addEventListener("click",()=>{const v=l.dataset.pickFloorPill;v&&(Ne(v),pe())})}),e.querySelectorAll("[data-scrubber-floor]").forEach(l=>{l.addEventListener("click",()=>{const v=l.dataset.scrubberFloor;v&&(Ne(v),pe())})}),e.querySelector("[data-save-project]")?.addEventListener("submit",l=>{l.preventDefault(),ye="项目基础信息与经纬度坐标已更新。",pe()}),e.querySelector("[data-upload-bld]")?.addEventListener("change",l=>{const v=l.currentTarget,b=v.dataset.uploadBld,E=v.files?.[0];if(!b||!E)return;const ue=new FileReader;ue.onload=()=>{typeof ue.result=="string"&&(A.set(b,ue.result),ye=`已更新楼宇实景图「${E.name}」。`,pe())},ue.readAsDataURL(E)}),e.querySelector("[data-upload-floor]")?.addEventListener("change",l=>{const v=l.currentTarget,b=v.dataset.uploadFloor,E=v.files?.[0];if(!b||!E)return;const ue=new FileReader;ue.onload=()=>{typeof ue.result=="string"&&(k.set(b,ue.result),ye=`已上传本层真实 2D 平面底图「${E.name}」，可立即进入图纸标点。`,pe())},ue.readAsDataURL(E)}),e.querySelector("[data-batch-floors]")?.addEventListener("submit",l=>{l.preventDefault();const v=l.currentTarget.dataset.batchFloors,b=new FormData(l.currentTarget),E=Number(b.get("fromFloor")??1),ue=Number(b.get("toFloor")??6),L=new Set(he().filter(Ie=>Ie.buildingId===v).map(Ie=>Ie.name));let S=0;for(let Ie=Math.min(E,ue);Ie<=Math.max(E,ue);Ie+=1){const R=`${Ie}F`;L.has(R)||($e.push({id:`floor-${v}-above-${Ie}`,buildingId:v,kind:"above",level:Ie,name:R,plan:null}),S+=1)}b.get("includeB1")&&!L.has("B1")&&($e.push({id:`floor-${v}-below-1`,buildingId:v,kind:"below",level:-1,name:"B1",plan:null}),S+=1),b.get("includeRF")&&!L.has("RF")&&($e.push({id:`floor-${v}-roof-1`,buildingId:v,kind:"roof",level:99,name:"RF",plan:null}),S+=1),ye=S>0?`已批量新增 ${S} 个楼层，并自动初始化各层默认蓝牙 Mesh 网络。`:"所选范围楼层均已存在，未重复创建。",pe()}),e.querySelector("[data-add-zone]")?.addEventListener("submit",l=>{l.preventDefault();const v=l.currentTarget.dataset.addZone,b=new FormData(l.currentTarget),E=String(b.get("zoneName")??"").trim(),ue=String(b.get("zoneCat")??"office");if(!E)return;const L=`zone-custom-${Date.now().toString(36)}`;be.push({id:L,floorId:v,name:E,category:ue}),g[L]={left:20,top:20,width:24,height:24},ye=`已添加功能区「${E}」。`,pe()});const x=e.querySelector("[data-dep-canvas-search]");x?.addEventListener("focus",()=>{!y&&!de&&(y=!0,pe(),e.querySelector("[data-dep-canvas-search]")?.focus())}),x?.addEventListener("input",l=>{ne=l.currentTarget.value,y=!0,de=!1,pe();const v=e.querySelector("[data-dep-canvas-search]");v&&(v.focus(),v.setSelectionRange(ne.length,ne.length))}),e.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{y=!y,y&&(de=!1),pe()}),e.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{y=!1,de=!1,pe()}),e.querySelector("[data-toggle-new-dev]")?.addEventListener("click",()=>{de=!de,de&&(y=!1),pe()}),e.querySelectorAll("[data-brush]").forEach(l=>{l.addEventListener("click",()=>{J=l.dataset.brush??"device",pe()})}),e.querySelectorAll("[data-dep-zoom]").forEach(l=>{l.addEventListener("click",()=>{const v=l.dataset.depZoom;v==="in"?W=Math.min(2.6,Number((W+.2).toFixed(2))):v==="out"?W=Math.max(.6,Number((W-.2).toFixed(2))):(W=1,Y=0,le=0),Se()})});const V=e.querySelector('[data-role="dep-stage"]');if(V&&!_){let l=!1,v=0,b=0,E=0,ue=0;V.addEventListener("pointerdown",S=>{S.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(l=!0,v=S.clientX,b=S.clientY,E=Y,ue=le,V.classList.add("is-panning"),V.setPointerCapture?.(S.pointerId))}),V.addEventListener("pointermove",S=>{l&&(Y=E+(S.clientX-v),le=ue+(S.clientY-b),Se())});const L=()=>{l&&(l=!1,V.classList.remove("is-panning"))};V.addEventListener("pointerup",L),V.addEventListener("pointercancel",L),V.addEventListener("wheel",S=>{S.preventDefault();const Ie=S.deltaY<0?.12:-.12;W=Math.max(.6,Math.min(2.6,Number((W+Ie).toFixed(2)))),Se()},{passive:!1}),V.addEventListener("dblclick",S=>{S.target?.closest("button")||(W=1,Y=0,le=0,Se())})}e.querySelectorAll("[data-dev-filter]").forEach(l=>{l.addEventListener("click",()=>{U=l.dataset.devFilter??"all",pe()})}),e.querySelector("[data-create-dev]")?.addEventListener("submit",l=>{l.preventDefault();const v=new FormData(l.currentTarget),b=String(v.get("devName")??"").trim(),E=String(v.get("devPreset")??"sensor"),ue=String(v.get("devZone")??"")||null,L=ot.find(Ie=>Ie.key===E)??ot[0],S=`dev-custom-${Date.now().toString(36)}`;F.push({id:S,name:b,category:L.category,projectId:p.projectId,buildingId:d,floorId:n,logicalZoneId:ue,planPoint:{floorId:n,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}}),I.set(S,{proxy:L.defaultProxy,relay:L.defaultRelay,meshUuid:`mesh-${n.slice(-4)}`}),L.category==="lighting"&&c.push({id:`lm-${Date.now().toString(36)}`,deviceId:S,channel:"回路 1",label:`${b.slice(0,6)}主灯`,x:.52,y:.45}),$=S,Z=!0,de=!1,me=!0,ye=`已新增「${b}」（${L.hint}），已标注默认点位并标记待同步边缘。`,pe()}),e.querySelectorAll("[data-pick-dev]").forEach(l=>{l.addEventListener("click",v=>{v.stopPropagation(),$=l.dataset.pickDev??null,Z=!0,N=xe(n).find(E=>E.id===$)?.physicalInstalled??!1,pe()})}),e.querySelector("[data-close-sel]")?.addEventListener("click",()=>{Z=!1,_=!1,pe()}),e.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{_=!_,pe()}),e.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{N=!N,pe()}),e.querySelectorAll("[data-ping-dev]").forEach(l=>{l.addEventListener("click",()=>{const v=xe(n).find(b=>b.id===l.dataset.pingDev);v&&(ye=`已向「${v.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,pe())})}),e.querySelector("[data-add-light-marker]")?.addEventListener("click",l=>{const v=l.currentTarget.dataset.addLightMarker,b=c.filter(E=>E.deviceId===v).length+1;c.push({id:`lm-${Date.now().toString(36)}`,deviceId:v,channel:`回路 ${b}`,label:`照明点位 ${b}`,x:Math.min(.86,.35+b*.1),y:.42}),J="light_marker",ye=`已新增「回路 ${b}」可视化灯点。`,pe()}),e.querySelectorAll("[data-del-light-marker]").forEach(l=>{l.addEventListener("click",()=>{const v=c.findIndex(b=>b.id===l.dataset.delLightMarker);v>=0&&c.splice(v,1),pe()})}),e.querySelectorAll("[data-toggle-mesh-role]").forEach(l=>{l.addEventListener("click",()=>{const v=l.dataset.meshDev,b=l.dataset.toggleMeshRole,E=I.get(v)??{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"};E[b]=!E[b],I.set(v,E),me=!0,ye=`已更新节点 ${b.toUpperCase()} 状态，记得在「网络与拓扑」中同步下发至边缘网关。`,pe()})}),e.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async l=>{const v=xe(n).find(L=>L.id===$);if(!_||!v)return;const b=l.currentTarget.getBoundingClientRect(),E=Math.max(.02,Math.min(.98,(l.clientX-b.left)/b.width)),ue=Math.max(.02,Math.min(.98,(l.clientY-b.top)/b.height));if(F.some(L=>L.id===v.id)){v.planPoint={floorId:n,planVersion:1,x:Number(E.toFixed(4)),y:Number(ue.toFixed(4))},_=!1,ye=`已更新「${v.name}」图上坐标。`,pe();return}try{await t.updateDevicePlanPoint({deviceId:v.id,floorId:p.floorId,planVersion:v.planPoint?.planVersion??1,x:E,y:ue,expectedVersion:v.version}),_=!1,ye=`已更新「${v.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await De()}catch(L){ke=L instanceof Error?L.message:String(L),pe()}}),e.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async l=>{l.preventDefault();const v=xe(n).find(E=>E.id===$);if(!v)return;const b=new FormData(l.currentTarget);if(F.some(E=>E.id===v.id)){v.physicalInstalled=N,v.hardwareBinding={gatewayId:"dev-e7f-gw-01",protocol:String(b.get("protocol")),networkAddress:String(b.get("networkAddress")??""),portOrChannel:String(b.get("portOrChannel")??""),boundAt:new Date().toISOString(),boundBy:a.displayName},v.version+=1,me=!0,ye=`已保存「${v.name}」的硬件绑定与物理复核状态。`,pe();return}try{await t.updateDeviceHardwareBinding({deviceId:v.id,gatewayId:v.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(b.get("protocol")),networkAddress:String(b.get("networkAddress")??""),portOrChannel:String(b.get("portOrChannel")??""),physicalInstalled:N,expectedVersion:v.version}),me=!0,ye=`已保存「${v.name}」的硬件绑定与物理安装复核状态。`,await De()}catch(E){ke=E instanceof Error?E.message:String(E),pe()}}),e.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const l=xe(n).find(v=>v.id===$);l&&Ze(l)}),e.querySelectorAll("[data-ftt-dev]").forEach(l=>{l.addEventListener("click",()=>{const v=xe(n).find(b=>b.id===l.dataset.fttDev);v&&Ze(v)})}),e.querySelectorAll("[data-batch-ftt]").forEach(l=>{l.addEventListener("click",()=>w())}),e.querySelectorAll("[data-export-inv]").forEach(l=>{l.addEventListener("click",()=>M())}),e.querySelectorAll("[data-open-param]").forEach(l=>{l.addEventListener("click",()=>{X=l.dataset.openParam??null,pe()})}),e.querySelector("[data-close-param]")?.addEventListener("click",()=>{X=null,pe()}),e.querySelector("[data-save-dev-params]")?.addEventListener("submit",l=>{l.preventDefault();const v=l.currentTarget.dataset.saveDevParams,b=new FormData(l.currentTarget);K.set(v,{offDelayMin:Number(b.get("offDelayMin")??15),restoreMin:Number(b.get("restoreMin")??30),luxOn:Number(b.get("luxOn")??280),luxOff:Number(b.get("luxOff")??450)}),X=null,me=!0,ye="设备自治延时与光感门限参数已下发并同步至配置基线。",pe()}),e.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{ae=!ae,pe()}),e.querySelector("[data-create-group]")?.addEventListener("submit",l=>{l.preventDefault();const v=new FormData(l.currentTarget),b=String(v.get("gName")??"").trim(),E=v.get("gTrack")??"mesh_auto",ue=String(v.get("gType")??"灯光联动组");b&&(m.unshift({id:`grp-${Date.now().toString(36)}`,track:E,groupType:ue,name:b,floorId:n,includesAdapter:E==="mesh_auto",deviceIds:E==="mesh_auto"?["dev-e7f-gw-01"]:[]}),ae=!1,E==="mesh_auto"&&(me=!0),ye=`已新建${E==="mesh_auto"?"端侧蓝牙 Mesh 自治组（已自动纳入蓝牙适配器）":"云端业务分组"}「${b}」。`,pe())}),e.querySelectorAll("[data-test-group]").forEach(l=>{l.addEventListener("click",()=>{const v=m.find(b=>b.id===l.dataset.testGroup);v&&(ye=`已向分组「${v.name}」发送群组试控指令，${v.deviceIds.length} 台成员回读正常。`,pe())})}),e.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>H()),e.querySelector("[data-sync-edge]")?.addEventListener("click",()=>{G+=1,me=!1,ye=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${G}）。`,pe()}),e.querySelectorAll("[data-topo-mode]").forEach(l=>{l.addEventListener("click",()=>{T=l.dataset.topoMode??"mesh",pe()})}),e.querySelectorAll("[data-topo-jump]").forEach(l=>{l.addEventListener("click",()=>{$=l.dataset.topoJump??null,Z=!0,i="floorplan",pe()})}),e.querySelector("[data-toggle-new-conn]")?.addEventListener("click",()=>{ie=!ie,pe()}),e.querySelector("[data-create-conn]")?.addEventListener("submit",l=>{l.preventDefault();const v=new FormData(l.currentTarget),b=String(v.get("cName")??"").trim(),E=String(v.get("cProto")??"bacnet_ip"),ue=String(v.get("cEndpoint")??"").trim();if(te.some(L=>L.endpoint===ue)){ke=`端口冲突警告：局域网端点「${ue}」已被其他通道占用，请更换端口后重试。`,pe();return}te.unshift({id:`conn-${Date.now().toString(36)}`,projectId:p.projectId,buildingId:d,floorId:n,name:b,protocol:E,endpoint:ue,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()}),ie=!1,ke="",ye=`已接入「${b}」（${ue}），连通测试通过（18 ms）。`,pe()}),e.querySelector("[data-edge-restart]")?.addEventListener("click",()=>{ye="已下发「重启边缘服务」指令，边缘网关服务将在 5 秒内平滑重连。",pe()}),e.querySelectorAll("[data-expand-conn]").forEach(l=>{l.addEventListener("click",()=>{const v=l.dataset.expandConn??null;h=h===v?null:v,pe()})}),e.querySelectorAll("[data-ping-conn]").forEach(l=>{l.addEventListener("click",()=>{const v=te.find(b=>b.id===l.dataset.pingConn);v&&(ke="",v.status==="connected"?ye=`连通测试通过：「${v.name}」（${v.endpoint}）响应正常，延迟 18 ms。`:ke=`连通测试异常：「${v.name}」（${v.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,pe())})}),e.querySelectorAll("[data-copy-endpoint]").forEach(l=>{l.addEventListener("click",async()=>{const v=l.dataset.endpointVal??"",b=l.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(v),o=b,pe(),window.setTimeout(()=>{o=null,pe()},1600)}catch{}})}),e.querySelectorAll("[data-preview-doc]").forEach(l=>{l.addEventListener("click",()=>{const v=nt.find(b=>b.id===l.dataset.previewDoc);v&&(ye=`已调阅工程附件「${v.name}」（关联范围：${v.boundScope}，更新于 ${v.updatedAt}）。`,pe())})}),e.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const l=await t.freezeDeliveryBatch(p.floorId,"部署总览验收发起交付冻结");ye=`已生成交付冻结快照 ${l.versionTag}（核验 ${l.verifiedCount}/${l.deviceCount}）。`,await De()}catch(l){ke=l instanceof Error?l.message:String(l),pe()}})}await De()}function bt(e){if(e.connectivity==="offline")return`${e.name.includes("VAV")?"VAV-02":e.name.slice(0,6)} 离线`;if(e.category==="lighting"){const t=e.name.includes("702")?"702 照明":"主照明",a=Number(e.telemetry.dimming?.value??0);return a>0?`${t} ${a}%`:`${t} 关`}return e.category==="hvac"?`${e.name.includes("VAV")?"VAV-02":"FCU-01"} ${e.telemetry.setpoint?.value??24}°C`:e.category==="sensor"?`环境 ${e.telemetry.temp?.value??"23.4"}°C`:e.category==="gateway"?"主控网关":e.name.slice(0,6)}const ht={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},ta={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},aa=ve("chevron-down",12),sa={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function z(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function ft(e){const t=e.match(/(-?\d+)/);if(!t)return 0;const a=Number(t[1]);return e.toUpperCase().startsWith("B")?-Math.abs(a):a}async function la(e,t,a){const s=await t.getSpatialTree(),i=t.mode==="demo",r=a.scope.canControlDevices,q=a.scope.canManageAlarms,O=a.scope.allowedZoneIds?.length?a.scope.allowedZoneIds:null,P=s.floors.filter(w=>a.scope.allowedFloorIds.includes(w.id)),Q=O||s.projects.length<=1&&s.buildings.length<=1&&P.length<=1?"floors-only":s.projects.length>1?"multi-project":s.buildings.length>1?"single-project-multi-building":"single-building",D=Q==="multi-project",J=Q==="multi-project"||Q==="single-project-multi-building",U=Q!=="floors-only",ne=Q==="floors-only"&&P.length<=1;let y=Ve(),Z="devices",T=!1,W=!1,Y="",le="",ee="all",se="all";const te=new URLSearchParams(window.location.hash.split("?")[1]??""),ce=te.get("device"),$e=te.get("zone");let k=ce,A=!!ce,be="control",g="",F=!1,n="today",d="devices";const $=new Set,N=new Set;let _=[],de=[],ie=[],ae=null,X=null,o=1,h=0,G=0,me=null;function ze(){return s.zones.filter(w=>!(y.level==="floor"&&w.floorId!==y.floorId||O&&!O.includes(w.id)))}function Ee(w){return[...s.floors.filter(M=>M.buildingId!==w?!1:Q==="floors-only"?a.scope.allowedFloorIds.includes(M.id):!0)].sort((M,u)=>ft(u.name)-ft(M.name))}async function ye(w,H=!1){let M=w;M.level==="all-projects"&&!D&&(M={level:"project",projectId:s.projects[0]?.id??p.projectId}),M.level==="project"&&!J&&(M={level:"building",projectId:M.projectId,buildingId:s.buildings[0]?.id??p.buildingId}),M.level==="building"&&!U&&(M={level:"floor",projectId:M.projectId,buildingId:M.buildingId,floorId:P[0]?.id??p.floorId}),y=M,pt(M),X=null,se=H&&$e?$e:"all",F=!1,W=!1,T=!1,N.clear(),o=1,h=0,G=0,me&&(me(),me=null);const u=y.level==="floor"?y.floorId:p.floorId;if(y.level==="floor")try{const[f,B,C]=await Promise.all([t.getFloorDevices(y.floorId),t.listAlarms(y.floorId),t.listWorkOrders(y.floorId)]);_=f,de=B,ie=C,_.some(re=>re.id===k)?H&&ce&&(A=!0):(k=_[1]?.id??_[0]?.id??null,A=!1),me=t.subscribeFloorEvents(y.floorId,async re=>{re.type==="control.receipt.updated"&&ae?.batchId===re.batchId&&(ae=await t.getControlBatch(re.batchId)),(re.type==="telemetry.updated"||re.type==="device.connectivity")&&y.level==="floor"&&(_=await t.getFloorDevices(y.floorId)),re.type==="alarm.changed"&&y.level==="floor"&&(de=await t.listAlarms(y.floorId)),m()})}catch(f){_=[],de=[],ie=[],k=null,A=!1,X=f instanceof Error?f.message:String(f)}else{A=!1;const[f,B,C]=await Promise.all([t.getFloorDevices(u).catch(()=>[]),t.listAlarms(u).catch(()=>[]),t.listWorkOrders(u).catch(()=>[])]);_=f,de=B,ie=C}Se()}function ke(w){return w?s.zones.find(H=>H.id===w)?.name??w:"未分配逻辑区"}function I(){const w=le.trim().toLowerCase();return _.filter(H=>se!=="all"&&H.logicalZoneId!==se||ee!=="all"&&H.category!==ee?!1:w?H.name.toLowerCase().includes(w)||H.id.toLowerCase().includes(w)||ke(H.logicalZoneId).toLowerCase().includes(w):!0)}async function c(w,H,M){!w.length||y.level!=="floor"||!r||(w.forEach(u=>$.add(u)),ae=await t.dispatchControlBatch({floorId:y.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:w.map(u=>({deviceId:u,command:H,targetValue:M}))}),m())}function m(){const w=document.activeElement,H=w?.dataset?.role,M=w&&"selectionStart"in w?w.selectionStart:null,u=w&&"selectionEnd"in w?w.selectionEnd:null,f=e.querySelector(".pacom-list")?.scrollTop??0;Se();const B=e.querySelector(".pacom-list");if(B&&(B.scrollTop=f),H==="search"||H==="space-search"){const C=e.querySelector(`[data-role="${H}"]`);C&&(C.focus(),M!==null&&u!==null&&C.setSelectionRange(M,u))}}function K(){const w=e.querySelector('[data-role="canvas-viewport"]');w&&(w.style.transform=`translate(${h}px, ${G}px) scale(${o})`);const H=e.querySelector('[data-role="zoom-label"]');H&&(H.textContent=`${Math.round(o*100)}%`)}function ge(w){if(w==="all")return{level:"all-projects"};const H=w.split(":");return H[0]==="project"&&H[1]?{level:"project",projectId:H[1]}:H[0]==="building"&&H[1]&&H[2]?{level:"building",projectId:H[1],buildingId:H[2]}:H[0]==="floor"&&H[1]&&H[2]&&H[3]?{level:"floor",projectId:H[1],buildingId:H[2],floorId:H[3]}:{level:"all-projects"}}function he(w){const H=y;if(H.level==="all-projects"){const M=le.trim().toLowerCase(),u=s.projects.filter(f=>!M||f.name.toLowerCase().includes(M));return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">授权园区（${u.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ve("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:6px; padding:8px;">
          ${u.map(f=>{const B=s.buildings.filter(C=>C.projectId===f.id).length;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="project:${z(f.id)}">
                  <div>
                    <div class="pacom-row-title">${z(f.name)}</div>
                    <div class="pacom-row-sub">${z(f.city??"")} · ${B} 栋楼宇</div>
                  </div>
                  <span class="pacom-badge pacom-badge--accent">进入 →</span>
                </button>`}).join("")}
        </div>
      `}if(H.level==="project"){const M=le.trim().toLowerCase(),u=s.buildings.filter(C=>C.projectId===H.projectId&&(!M||C.name.toLowerCase().includes(M))),f=_.filter(C=>C.connectivity==="online").length,B=_.length?Math.round(f/_.length*100):100;return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">园区楼宇（${u.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ve("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${u.map(C=>{const re=C.id===p.buildingId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="building:${z(C.projectId)}:${z(C.id)}">
                  <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                    <span class="pacom-dot ${re&&w>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <div>
                      <div class="pacom-row-title">${z(C.name)}</div>
                      <div class="pacom-row-sub">地上 ${C.aboveFloors} 层 · ${C.areaSqm??"-"} m²</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${re?"pacom-badge--accent":"pacom-badge--neutral"}">${re?`在线 ${B}%`:"运行平稳"}</span>
                </button>`}).join("")}
        </div>
      `}if(H.level==="building"){const M=le.trim().toLowerCase(),u=Ee(H.buildingId).filter(B=>!M||B.name.toLowerCase().includes(M)),f=s.buildings.find(B=>B.id===H.buildingId);return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">${z(f?.name??"楼宇")} 楼层导览（${u.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ve("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${u.map(B=>{const C=a.scope.allowedFloorIds.includes(B.id),re=B.id===p.floorId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left; ${C?"":"opacity:0.6;"}" data-nav-scope="floor:${z(H.projectId)}:${z(H.buildingId)}:${z(B.id)}">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="pacom-dot ${re&&w>0?"pacom-dot--warning":B.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                    <div>
                      <div class="pacom-row-title">${z(f?.name??"")} ${z(B.name)}</div>
                      <div class="pacom-row-sub">${B.plan?"2D 平面控图就绪":"暂未上传平面图"}${re&&w>0?` · ${w} 告警`:""}</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${C&&B.plan?"pacom-badge--online":"pacom-badge--neutral"}">${C?B.plan?"进入 →":"待部署":"未授权"}</span>
                </button>`}).join("")}
        </div>
      `}if(Z==="devices"){const M=I(),u=ze(),f=Array.from(N);return`
        <div class="pacom-pane-toolbar" style="padding:10px 12px; gap:8px;">
          ${O?`<div class="pacom-info-banner">我的区域视图：仅显示获授权的 ${O.length} 个功能区及设备。</div>`:""}
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
            <select class="pacom-select" style="height:28px; font-size:12px;" name="deviceCategory" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${ee==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${ee==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${ee==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${ee==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${ee==="gateway"?"selected":""}>网关</option>
            </select>
            <span style="font-size:12px; color:var(--pacom-text-secondary);">可见 ${M.length} 台${r&&f.length?` · 已选 ${f.length}`:""}</span>
            <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ve("x",14)}</button>
          </div>
          ${u.length>0&&!X?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${se==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${u.map(B=>`<button type="button" class="pacom-zone-pill ${se===B.id?"is-active":""}" data-filter-zone="${z(B.id)}">${z(B.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
        </div>
        <div class="pacom-list" style="padding:6px;">
          ${X?`<div class="pacom-alert-banner">${z(X)}</div>`:M.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">没有匹配的设备</div>':M.map(B=>{const C=B.id===k&&A,re=N.has(B.id),fe=B.connectivity==="offline",we=fe?"pacom-dot--critical":"pacom-dot--online",oe=fe?"离线":B.category==="lighting"?`${B.telemetry.dimming?.value??"--"}%`:B.category==="hvac"?`${B.telemetry.setpoint?.value??"--"}°C`:B.category==="sensor"?`${B.telemetry.temp?.value??"--"}°C`:"在线";return`
                        <div class="pacom-row ${C?"is-selected":""}" data-select-device="${z(B.id)}" style="padding:8px;">
                          <div class="pacom-row-main">
                            ${r?`<input type="checkbox" name="devCheck-${z(B.id)}" data-check-device="${z(B.id)}" ${re?"checked":""} style="margin-top:3px;" aria-label="勾选 ${z(B.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title" style="font-size:13px;">${z(B.name)}</div>
                              <div class="pacom-row-sub">${z(ke(B.logicalZoneId).replace(/^7F\s*/,""))} · ${z(ht[B.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${fe?"pacom-badge--critical":"pacom-badge--online"}">
                            <span class="pacom-dot ${we}"></span>${z(oe)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${r&&f.length>0?`
            <div class="pacom-batch-bar" style="padding:8px 12px;">
              <span style="font-size:12px;">已选 <strong>${f.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(Z==="zones"){const M=ze(),u={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">功能区快控（${M.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ve("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:8px; padding:10px;">
          ${M.map(f=>{const B=_.filter(oe=>oe.logicalZoneId===f.id),C=B.filter(oe=>oe.connectivity==="online").length,re=B.filter(oe=>oe.category==="lighting"||oe.category==="hvac").length,fe=se===f.id,we=u[f.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${fe?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${fe?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${z(fe?"all":f.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:13px; font-weight:500;">${z(f.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${C}/${B.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时 ${we.temp} · ${we.occ}</div>
                  ${re>0?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-zone-power="${z(f.id)}" data-zone-val="true" ${r?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-zone-power="${z(f.id)}" data-zone-val="false" ${r?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">弱电 / 网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-hud-sheet-head">
        <strong style="font-size:13px; font-weight:500;">本层告警（${de.length}）</strong>
        <div style="display:flex; align-items:center; gap:4px;">
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ve("x",14)}</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:10px;">
        ${de.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">当前楼层无活跃告警</div>':de.map(M=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${z(M.title)}</strong>
                      <span class="pacom-badge ${M.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${M.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${z(M.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-locate-device="${z(M.deviceId)}">定位设备</button>
                      ${M.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-ack-alarm="${z(M.id)}" ${q?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function je(w){const H=y,M=ze().length,u=H.level==="floor"?"搜索设备或区域…":H.level==="building"?"搜索楼层…":H.level==="project"?"搜索楼宇…":"搜索园区…",f=H.level==="floor"?`
          <button type="button" class="pacom-hud-pill ${T&&Z==="devices"?"is-active":""}" data-hud-tab="devices">设备 ${_.length}</button>
          <button type="button" class="pacom-hud-pill ${T&&Z==="zones"?"is-active":""}" data-hud-tab="zones">区域 ${M}</button>
          <button type="button" class="pacom-hud-pill ${w>0?"pacom-hud-pill--alert":""} ${T&&Z==="alarms"?"is-active":""}" data-hud-tab="alarms">告警 ${w}</button>
        `:H.level==="building"?`
            <button type="button" class="pacom-hud-pill ${T?"is-active":""}" data-toggle-hud="1">楼层 ${Ee(H.buildingId).length}</button>
            ${w>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${w}</button>`:""}
          `:H.level==="project"?`
              <button type="button" class="pacom-hud-pill ${T?"is-active":""}" data-toggle-hud="1">楼宇 ${s.buildings.filter(B=>B.projectId===H.projectId).length}</button>
              ${w>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${w}</button>`:""}
            `:`<button type="button" class="pacom-hud-pill ${T?"is-active":""}" data-toggle-hud="1">园区 ${s.projects.length}</button>`;return`
      <div class="pacom-hud-search-wrap" data-role="hud-wrap">
        <div class="pacom-hud-bar" style="padding:0 8px 0 12px;">
          ${ve("search",14)}
          <input class="pacom-hud-input" name="spatialSearch" data-role="search" placeholder="${u}" value="${z(le)}" aria-label="${u}" />
          ${f}
        </div>
        ${T?`<div class="pacom-hud-sheet" data-role="hud-sheet">${he(w)}</div>`:""}
      </div>
    `}function Oe(w){if(ne||y.level!=="building"&&y.level!=="floor")return"";const H=y.buildingId,M=y.projectId,u=Ee(H);return!U&&u.length<=1?"":`
      <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换" data-role="elevation-scrubber">
        ${U?`<button type="button" class="pacom-elev-item ${y.level==="building"?"is-active":""}" data-nav-scope="building:${z(M)}:${z(H)}" title="查看整栋视图">
                <span>栋</span>
                <span class="pacom-elev-tick"></span>
              </button>`:""}
        ${u.map(f=>{const B=a.scope.allowedFloorIds.includes(f.id),C=y.level==="floor"&&y.floorId===f.id,re=f.id===p.floorId&&w>0;return`
              <button type="button" class="pacom-elev-item ${C?"is-active":""} ${B?"":"is-locked"}"
                data-nav-scope="floor:${z(M)}:${z(H)}:${z(f.id)}"
                title="${z(f.name)}${B?re?` · ${w} 条告警`:"":"（无权限）"}">
                ${re?'<span class="pacom-elev-dot" aria-hidden="true"></span>':""}
                <span>${z(f.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`}).join("")}
      </nav>
    `}function xe(w,H){const M=y;if(M.level==="floor")return X?"":`
        <div class="pacom-canvas-dock" role="toolbar" aria-label="平面图图层与缩放控制">
          <button type="button" class="pacom-dock-btn" aria-pressed="${d==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${d==="temp"}" data-canvas-layer="temp">温度热力</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${d==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-zoom="out" title="缩小" aria-label="缩小">${ve("minus",14)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-zoom="reset" data-role="zoom-label" title="点击复位 100%">${Math.round(o*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-zoom="in" title="放大" aria-label="放大">${ve("plus",14)}</button>
        </div>
      `;const u=_.length?Math.round(w/_.length*100):100,f=M.level==="building"?"418 kWh":"1,248 kWh",B=Math.round(96.2*.45+93.6*.35+u*.2),C=M.level==="building"?Ee(M.buildingId).find(re=>re.id===p.floorId)??Ee(M.buildingId)[0]:null;return`
      <div class="pacom-canvas-dock" role="region" aria-label="空间运行态势">
        <button type="button" class="pacom-dock-metric" data-go-analysis="health">
          <span class="pacom-dot pacom-dot--online"></span>
          <span>健康 <strong>${B}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="environment">
          <span>舒适度 <strong>96.2%</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-analysis="energy">
          <span>今日能耗 <strong>${f}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-alarms="1">
          <span class="pacom-dot ${H>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
          <span>告警 <strong>${H}</strong></span>
        </button>
        ${M.level==="building"&&C?`<span class="pacom-dock-sep" aria-hidden="true"></span>
               <button type="button" class="pacom-dock-btn" aria-pressed="true" data-nav-scope="floor:${z(M.projectId)}:${z(M.buildingId)}:${z(C.id)}">进入 ${z(C.name)} 平面图 →</button>`:""}
      </div>
    `}function Le(w,H){const M=y,u=_.length?Math.round(w/_.length*100):100;if(M.level==="all-projects")return`
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
            ${s.projects.map((C,re)=>`
                <button type="button" class="pacom-pin is-selected" style="left:${re===0?50:28}%; top:${re===0?52:34}%; padding:0 12px; height:32px; font-size:12px;" data-nav-scope="project:${z(C.id)}">
                  <span class="pacom-dot ${H>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <span>${z(C.name)} · 在线 ${u}%</span>
                </button>`).join("")}
          </div>
        </div>
      `;if(M.level==="project"){const C=s.projects.find(fe=>fe.id===M.projectId)??s.projects[0],re=s.buildings.filter(fe=>!C||fe.projectId===C.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 24px 72px; cursor:default;">
          <div style="position:relative; width:min(940px, 92%); border-radius:16px; overflow:hidden; box-shadow:0 14px 36px rgba(15,23,42,0.12); background:#fff;">
            <img src="${z(C?.imageUrl??"./media/gzlab.jpg")}" alt="${z(C?.name??"园区")}俯瞰" style="width:100%; max-height:72vh; object-fit:cover; display:block;" />
            ${re.map((fe,we)=>{const oe=fe.id===p.buildingId;return`
                  <button type="button" class="pacom-pin ${oe?"is-selected":""}" style="left:${we===0?56:38}%; top:${we===0?44:62}%; height:30px; padding:0 11px;" data-nav-scope="building:${z(fe.projectId)}:${z(fe.id)}">
                    <span class="pacom-dot ${oe&&H>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${z(fe.name)} · ${oe?`在线 ${u}% · 告警 ${H}`:"运行平稳"}</span>
                  </button>`}).join("")}
          </div>
        </div>
      `}if(M.level==="building"){const C=s.buildings.find(fe=>fe.id===M.buildingId),re=Ee(M.buildingId).find(fe=>fe.id===p.floorId)??Ee(M.buildingId)[0];return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 68px 72px 24px; cursor:default;">
          <div style="position:relative; display:inline-block;">
            <img class="pacom-plan-img" src="${z(C?.imageUrl??"./media/building-e.png")}" alt="${z(C?.name??"楼宇")} 整栋实景图" style="max-height:74vh;" />
            ${re?`<button type="button" class="pacom-pin is-selected" style="left:52%; top:38%; height:30px; padding:0 11px;" data-nav-scope="floor:${z(M.projectId)}:${z(M.buildingId)}:${z(re.id)}">
                    <span class="pacom-dot ${H>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${z(C?.name??"")} ${z(re.name)} · 在线 ${w}/${_.length}</span>
                  </button>`:""}
          </div>
        </div>
      `}const f=s.floors.find(C=>C.id===M.floorId),B=ze();return`
      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${X?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${z(X)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${h}px, ${G}px) scale(${o});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${z(f?.plan?.imageUrl??"./media/7F.webp")}" alt="E栋 ${z(f?.name??"7F")} 平面图" />
                  ${B.map((C,re)=>{const fe=sa[C.id];if(!fe)return"";const we=se===C.id,oe=["23.2°C","24.6°C","22.8°C","23.9°C"],Fe=["有人 74%","会议中","有人 52%","空闲"],Pe=d==="temp"?` · ${oe[re%oe.length]}`:d==="occupancy"?` · ${Fe[re%Fe.length]}`:"",Je=d==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":d==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${we?"is-active":""}"
                          style="left:${fe.left}%; top:${fe.top}%; width:${fe.width}%; height:${fe.height}%; ${we?"":Je}"
                          data-filter-zone="${z(we?"all":C.id)}"
                          title="${z(C.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${z(C.name.replace(/^7F\s*/,""))}${Pe}</span>
                        </button>`}).join("")}
                  ${_.filter(C=>C.planPoint).map(C=>{const re=de.some(Pe=>Pe.deviceId===C.id&&Pe.status==="active"),fe=T&&Z==="alarms",we=se!=="all"&&C.logicalZoneId!==se||fe&&!re,oe=fe&&re?"background:var(--pacom-status-critical);":"",Fe=C.category==="gateway"?Math.min(92,C.planPoint.y*100+5.5):C.planPoint.y*100;return`
                        <button type="button" class="pacom-pin ${C.id===k&&A?"is-selected":""} ${C.connectivity==="offline"?"pacom-pin--offline":""} ${we?"pacom-pin--dimmed":""}"
                          style="left:${(C.planPoint.x*100).toFixed(2)}%; top:${Fe.toFixed(2)}%; ${oe}"
                          data-pin-device="${z(C.id)}" title="${z(C.name)}">
                          <span class="pacom-dot ${re?"pacom-dot--critical":C.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${z(bt(C))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>
    `}function Ne(){if(y.level!=="floor"||!A)return"";const w=_.find(oe=>oe.id===k);if(!w)return"";const H=w.category==="lighting",M=w.category==="hvac",u=Number(w.telemetry.dimming?.value??50),f=Number(w.telemetry.setpoint?.value??24),B=$.has(w.id),C=de.filter(oe=>oe.deviceId===w.id&&oe.status==="active"),re=ie.filter(oe=>oe.deviceId===w.id&&oe.status!=="closed"),fe=M?[{name:"E7F_暖通空调与末端竣工图_v2.3.pdf",tag:"竣工图纸"},{name:"FCU-01_风机盘管维保与排障手册.pdf",tag:"维保手册"}]:H?[{name:"E7F_强电照明与DALI回路拓扑.pdf",tag:"回路图纸"}]:[{name:"E7F_BACnet_Modbus_点位映射表.xlsx",tag:"点位台账"}],we=H?[{label:"当前开关",value:u>0?"开启":"关闭"},{label:"当前亮度",value:`${u}%`},{label:"实时功率",value:u>0?`${Math.round(u*1.4)} W`:"0 W"},{label:"运行模式",value:B?"人工覆盖":"自动策略"}]:M?[{label:"室内温度",value:`${w.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${f.toFixed(1)}°C`},{label:"运行工况",value:w.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:B?"人工覆盖":"自动策略"}]:w.category==="sensor"?[{label:"实时温度",value:`${w.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${w.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${w.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:w.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:w.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:w.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:w.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:w.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${z(w.name)}</h2>
            <div class="pacom-row-sub">${z(ke(w.logicalZoneId))} · ${z(ht[w.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${w.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${w.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              ${ve("x",16)}
            </button>
          </div>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备档案分页" style="width:100%; justify-content:space-between;">
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${be==="control"}" data-drawer-tab="control">控制与工况</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${be==="trend"}" data-drawer-tab="trend">趋势与告警${C.length>0?` (${C.length})`:""}</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${be==="profile"}" data-drawer-tab="profile">档案与图纸</button>
        </div>

        ${be==="control"?`
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
              ${we.map(oe=>`
                  <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                    <span class="pacom-row-sub">${oe.label}</span>
                    <strong style="font-size:13px; font-weight:500;">${z(oe.value)}</strong>
                  </div>`).join("")}
            </div>

            ${M?`
                <div class="lov-schematic-strip" aria-label="暖通工况简图">
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                    <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                    <span class="pacom-row-sub">${w.connectivity==="online"?"制冷运转":"通信离线"}</span>
                  </div>
                  <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                    <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                    <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                    <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${z(w.telemetry.temp?.value??"23.8")}°</text>
                    <rect x="80" y="8" width="54" height="28" rx="6" fill="${w.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${w.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                    <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${w.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                    <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${w.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                    <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                    <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                    <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${f.toFixed(1)}°C</text>
                  </svg>
                </div>`:""}

            ${H||M?`
                <div class="pacom-control-box">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                    ${B&&r?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${z(w.id)}">恢复自动策略</button>`:r?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
                  </div>
                  ${w.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
                  ${H?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${r?"":"disabled"}>开灯</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${r?"":"disabled"}>关灯</button>
                      </div>
                      <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                        亮度目标：<strong>${u}%</strong>
                        <input type="range" min="0" max="100" step="10" value="${u}" data-ctrl-slider="lighting.dimming" ${r?"":"disabled"} />
                      </label>`:`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${r?"":"disabled"}>开机</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${r?"":"disabled"}>关机</button>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:12px;">设定温度：</span>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${f-.5}" ${r?"":"disabled"}>-0.5°C</button>
                        <strong>${f.toFixed(1)}°C</strong>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${f+.5}" ${r?"":"disabled"}>+0.5°C</button>
                      </div>`}
                </div>`:""}

            ${ae?`
                <div class="pacom-control-box">
                  <div style="font-size:12px; font-weight:500;">最近批次：<code>${z(ae.batchId)}</code></div>
                  <div class="pacom-receipt-list">
                    ${ae.receipts.map(oe=>{const Fe=ta[oe.status]??{text:oe.status,badge:"pacom-badge--neutral"};return`
                          <div class="pacom-receipt-item">
                            <div>
                              <div><strong>${z(oe.deviceId)}</strong> · ${z(oe.command)} → ${z(oe.targetValue)}</div>
                              ${oe.errorMessage?`<div style="color:var(--pacom-status-critical);">${z(oe.errorMessage)}</div>`:""}
                            </div>
                            <span class="pacom-badge ${Fe.badge}">${Fe.text}</span>
                          </div>`}).join("")}
                  </div>
                </div>`:""}`:be==="trend"?`
              <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="pacom-row-sub">近 24 小时趋势（${H?"亮度 %":M?"温度 °C":w.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${z(w.id)}">查看完整时序 →</button>
                </div>
                <svg viewBox="0 0 280 48" style="width:100%; height:48px; display:block;">
                  <line x1="0" y1="24" x2="280" y2="24" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
                  <polyline fill="none" stroke="${w.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${H?"0,38 40,38 80,16 120,12 160,14 200,20 240,14 280,16":M?"0,28 40,30 80,25 120,20 160,18 200,22 240,24 280,20":"0,24 40,25 80,23 120,21 160,20 200,22 240,21 280,22"}" />
                </svg>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:12px; font-weight:500;">本机活跃告警与未结工单</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
                </div>
                ${C.length===0&&re.length===0?'<div class="pacom-row-sub">当前设备运行平稳，无未处理告警或工单。</div>':`${C.map(oe=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${z(oe.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${z(oe.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去诊断 →</span>
                          </button>`).join("")}${re.map(oe=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-wo-id="${z(oe.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${z(oe.title)}</span>
                            <span class="pacom-badge pacom-badge--accent">查看工单 →</span>
                          </button>`).join("")}`}
              </div>`:`
              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">上下游拓扑关系（Twin Relationships）</span>
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; font-size:12px;">
                  <span class="pacom-badge pacom-badge--neutral">E7F 主控网关-01</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--accent">${z(bt(w))}</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--online">${z(ke(w.logicalZoneId).replace(/^7F\s*/,""))}</span>
                </div>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">关联竣工图纸与设备手册</span>
                ${g?`<div class="pacom-info-banner">${z(g)}</div>`:""}
                ${fe.map(oe=>`
                    <div class="pacom-receipt-item">
                      <span style="font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${z(oe.name)}">${z(oe.name)}</span>
                      <button type="button" class="pacom-btn" style="height:24px; padding:0 8px; font-size:11px;" data-drawer-doc="${z(oe.name)}">查阅</button>
                    </div>`).join("")}
              </div>

              <details class="lov-tech-details" open>
                <summary><span>技术标识与硬件绑定</span>${ve("chevron-down",12)}</summary>
                <div class="pacom-kv-grid">
                  <span class="pacom-kv-label">设备编号</span><span><code>${z(w.id)}</code> · v${w.version}</span>
                  <span class="pacom-kv-label">图上点位</span><span>${w.planPoint?`x=${w.planPoint.x.toFixed(2)}, y=${w.planPoint.y.toFixed(2)} (图 v${w.planPoint.planVersion})`:"未标点"}</span>
                  <span class="pacom-kv-label">物理安装</span><span>${w.physicalInstalled?"现场已确认":"待现场复核"}</span>
                  <span class="pacom-kv-label">硬件绑定</span><span>${w.hardwareBinding?`${w.hardwareBinding.protocol.toUpperCase()} · ${w.hardwareBinding.networkAddress}`:"未绑定"}</span>
                </div>
              </details>`}
      </aside>
    `}function De(w,H,M){if(!F)return"";const u=Math.max(0,_.length-w),f=n==="week",B=de.filter(C=>C.status==="active").slice(0,2);return`
      <div class="lov-briefing-pop" style="width:420px; top:48px; right:20px;" role="dialog" aria-label="运行简报" data-role="briefing-pop">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <div>
            <strong style="font-size:14px; font-weight:500;">E7F ${f?"本周运行汇总简报":"今日值班晨报"}</strong>
            <div class="pacom-row-sub">广州 26°C 多云 · 湿度 64% · 舒适度达标 96.2%</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <div class="pacom-tabs">
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${!f}" data-briefing-period="today">今日值班</button>
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${f}" data-briefing-period="week">本周汇总</button>
            </div>
            <button type="button" class="pacom-drawer-close" data-toggle-briefing="1" aria-label="关闭简报">${ve("x",16)}</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">${f?"本周累计节能":"昨日能耗偏差"}</span><strong style="color:var(--pacom-status-online);">${f?"-7.1%（省 ¥342）":"-6.4%（省 ¥48）"}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">均温 / 在线率</span><strong>${z(M)}°C · ${w}/${_.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${H} 告警 · ${u} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖 / 未结工单</span><strong>${Math.max(1,$.size)} 覆盖 · ${ie.filter(C=>C.status!=="closed").length} 工单</strong></div>
        </div>
        ${B.length>0?`<div style="display:flex; flex-direction:column; gap:5px;">
                <span class="pacom-row-sub">优先关注事项（点击直达）</span>
                ${B.map(C=>`
                    <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${z(C.id)}">
                      <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${z(C.title)}</span>
                      <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                    </button>`).join("")}
              </div>`:""}
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报 (.txt)</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">进入告警中心 →</button>
        </div>
      </div>
    `}function Se(){const w=de.filter(u=>u.status==="active").length,H=_.filter(u=>u.connectivity==="online").length,M=_.find(u=>u.category==="sensor")?.telemetry.temp?.value??"23.4";e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">空间总览</h1>
              ${Ue({tree:s,session:a,scope:y,activeAlarmCount:w,isOpen:W,searchKeyword:Y})}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${X?i?'<span class="pacom-badge pacom-badge--neutral"><span class="pacom-dot pacom-dot--offline"></span>演示模式</span>':'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>':`<button type="button" class="pacom-pulse-btn" data-toggle-briefing="1" aria-expanded="${F}" title="点击查看今日运行简报">
                      <span class="pacom-dot pacom-dot--online"></span>
                      <span>${H}/${_.length} 在线 · ${z(M)}°C · 简报</span>
                      <span style="display:inline-flex; color:var(--pacom-text-secondary);">${aa}</span>
                    </button>`}
            </div>
          </div>
        </header>

        ${De(H,w,M)}

        <main class="pacom-spatial-stage">
          ${je(w)}
          ${Le(H,w)}
          ${Oe(w)}
          ${xe(H,w)}
          ${Ne()}
        </main>
      </div>
    `,Ze()}function Ze(){He(e,{onToggle:()=>{W=!W,W&&(F=!1,T=!1),Se(),W&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:u=>{Y=u,Se();const f=e.querySelector("[data-global-space-search]");f&&(f.focus(),f.setSelectionRange(u.length,u.length))},onPick:u=>{W=!1,ye(u)}}),e.querySelectorAll("[data-nav-scope]").forEach(u=>{u.addEventListener("click",f=>{f.stopPropagation(),u.dataset.navScope&&ye(ge(u.dataset.navScope))})}),e.querySelectorAll("[data-hud-tab]").forEach(u=>{u.addEventListener("click",f=>{f.stopPropagation();const B=u.dataset.hudTab;T&&Z===B?T=!1:(Z=B,T=!0,W=!1,F=!1),Se()})}),e.querySelectorAll("[data-toggle-hud]").forEach(u=>{u.addEventListener("click",f=>{f.stopPropagation(),T=!T,T&&(W=!1,F=!1),Se()})}),e.querySelectorAll("[data-close-hud]").forEach(u=>{u.addEventListener("click",f=>{f.stopPropagation(),T=!1,Se()})});const w=e.querySelector('[data-role="search"]');w?.addEventListener("focus",()=>{T||(T=!0,W=!1,F=!1,m())}),w?.addEventListener("input",u=>{le=u.currentTarget.value,T=!0,m()}),e.querySelector('[data-role="category"]')?.addEventListener("change",u=>{ee=u.currentTarget.value,Se()}),e.querySelectorAll("[data-filter-zone]").forEach(u=>{u.addEventListener("click",f=>{f.stopPropagation(),se=u.dataset.filterZone??"all",Se()})}),e.querySelectorAll("[data-select-device]").forEach(u=>{u.addEventListener("click",f=>{f.target.tagName!=="INPUT"&&(k=u.dataset.selectDevice??null,A=!0,Se())})}),e.querySelectorAll("[data-check-device]").forEach(u=>{u.addEventListener("change",()=>{const f=u.dataset.checkDevice;f&&(u.checked?N.add(f):N.delete(f),Se())})}),e.querySelectorAll("[data-pin-device]").forEach(u=>{u.addEventListener("click",f=>{f.stopPropagation(),k=u.dataset.pinDevice??null,A=!0,W=!1,F=!1,Se()})}),e.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{A=!1,Se()}),e.querySelectorAll("[data-drawer-tab]").forEach(u=>{u.addEventListener("click",()=>{be=u.dataset.drawerTab??"control",g="",Se()})}),e.querySelectorAll("[data-drawer-doc]").forEach(u=>{u.addEventListener("click",()=>{g=`已调阅「${u.dataset.drawerDoc??""}」（完整工程文档库见「系统部署 → 楼层与功能区」）。`,Se()})}),e.querySelectorAll("[data-briefing-period]").forEach(u=>{u.addEventListener("click",()=>{n=u.dataset.briefingPeriod??"today",Se()})}),e.querySelectorAll("[data-go-alarm-id]").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.goAlarmId??"";window.location.hash=f?`#alarms?alarm=${encodeURIComponent(f)}`:"#alarms"})}),e.querySelectorAll("[data-go-wo-id]").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.goWoId??"";window.location.hash=f?`#alarms?wo=${encodeURIComponent(f)}`:"#alarms"})}),e.querySelector("[data-release-override]")?.addEventListener("click",u=>{const f=u.currentTarget.dataset.releaseOverride;f&&($.delete(f),Se())}),e.querySelectorAll("[data-zone-power]").forEach(u=>{u.addEventListener("click",f=>{f.stopPropagation();const B=u.dataset.zonePower,C=u.dataset.zoneVal==="true";if(!B)return;const re=_.filter(we=>we.logicalZoneId===B&&we.category==="lighting").map(we=>we.id),fe=_.filter(we=>we.logicalZoneId===B&&we.category==="hvac").map(we=>we.id);re.length?c(re,"lighting.power",C):fe.length&&c(fe,"hvac.power",C)})}),e.querySelectorAll("[data-locate-device]").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.locateDevice;f&&(k=f,A=!0,T=!1,Se())})}),e.querySelectorAll("[data-go-alarms]").forEach(u=>{u.addEventListener("click",()=>{window.location.hash="#alarms"})}),e.querySelectorAll("[data-go-analysis]").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(f)}`})}),e.querySelectorAll("[data-go-timeseries]").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(f)}`})}),e.querySelectorAll("[data-toggle-briefing]").forEach(u=>{u.addEventListener("click",f=>{f.stopPropagation(),F=!F,F&&(W=!1,T=!1),Se()})}),e.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const u=_.filter(we=>we.connectivity==="online").length,f=de.filter(we=>we.status==="active").length,B=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${u}/${_.length}（离线 ${_.length-u} 台）`,`待处理告警：${f} 条`,`人工覆盖中：${$.size} 台`].join(`
`),C=new Blob([B],{type:"text/plain;charset=utf-8;"}),re=URL.createObjectURL(C),fe=document.createElement("a");fe.href=re,fe.download="pacom-daily-briefing.txt",fe.click(),URL.revokeObjectURL(re)}),e.querySelectorAll("[data-ctrl-cmd]").forEach(u=>{u.addEventListener("click",()=>{if(!k||!u.dataset.ctrlCmd)return;const f=u.dataset.ctrlVal??"",B=f==="true"?!0:f==="false"?!1:Number(f);c([k],u.dataset.ctrlCmd,B)})}),e.querySelector("[data-ctrl-slider]")?.addEventListener("change",u=>{const f=u.currentTarget;!k||!f.dataset.ctrlSlider||c([k],f.dataset.ctrlSlider,Number(f.value))}),e.querySelectorAll("[data-batch-cmd]").forEach(u=>{u.addEventListener("click",()=>{const f=Array.from(N),B=u.dataset.batchVal??"",C=B==="true"?!0:B==="false"?!1:B;c(f,u.dataset.batchCmd,C)})}),e.querySelectorAll("[data-ack-alarm]").forEach(u=>{u.addEventListener("click",async()=>{!u.dataset.ackAlarm||y.level!=="floor"||!q||(await t.acknowledgeAlarm(u.dataset.ackAlarm,"首页快速确认"),de=await t.listAlarms(y.floorId),Se())})}),e.querySelectorAll("[data-canvas-layer]").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.canvasLayer;f&&(d=f,Se())})}),e.querySelectorAll("[data-zoom]").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.zoom;f==="in"?o=Math.min(2.6,Number((o+.2).toFixed(2))):f==="out"?o=Math.max(.6,Number((o-.2).toFixed(2))):(o=1,h=0,G=0),K()})}),e.querySelector('[data-role="elevation-scrubber"]')?.addEventListener("wheel",u=>{u.preventDefault();const f=y;if(f.level!=="building"&&f.level!=="floor")return;const B=Ee(f.buildingId),C=[...U?[{level:"building",projectId:f.projectId,buildingId:f.buildingId}]:[],...B.map(we=>({level:"floor",projectId:f.projectId,buildingId:f.buildingId,floorId:we.id}))],re=C.findIndex(we=>we.level==="building"?f.level==="building":we.level==="floor"&&f.level==="floor"&&we.floorId===f.floorId);if(re<0)return;const fe=Math.max(0,Math.min(C.length-1,re+(u.deltaY>0?1:-1)));fe!==re&&C[fe]&&ye(C[fe])},{passive:!1});const M=e.querySelector('[data-role="canvas-stage"]');if(M&&!X){let u=!1,f=!1,B=0,C=0,re=0,fe=0;M.addEventListener("pointerdown",oe=>{oe.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(u=!0,f=!1,B=oe.clientX,C=oe.clientY,re=h,fe=G,M.classList.add("is-panning"),M.setPointerCapture?.(oe.pointerId))}),M.addEventListener("pointermove",oe=>{if(!u)return;const Fe=oe.clientX-B,Pe=oe.clientY-C;(Math.abs(Fe)>3||Math.abs(Pe)>3)&&(f=!0),h=re+Fe,G=fe+Pe,K()});const we=()=>{u&&(u=!1,M.classList.remove("is-panning"),!f&&(T||W||F)&&(T=!1,W=!1,F=!1,Se()))};M.addEventListener("pointerup",we),M.addEventListener("pointercancel",we),M.addEventListener("wheel",oe=>{oe.preventDefault();const Fe=oe.deltaY<0?.12:-.12;o=Math.max(.6,Math.min(2.6,Number((o+Fe).toFixed(2)))),K()},{passive:!1}),M.addEventListener("dblclick",oe=>{oe.target?.closest("button")||(o=1,h=0,G=0,K())})}else e.querySelector(".pacom-spatial-stage")?.addEventListener("click",u=>{u.target?.closest("button, input, select, .pacom-hud-search-wrap, .pacom-space-popover, .lov-briefing-pop")||(T||W||F)&&(T=!1,W=!1,F=!1,Se())})}e.addEventListener("keydown",w=>{w.key==="Escape"&&(W||F||T||A)&&(W=!1,F=!1,T=!1,A=!1,Se())}),await ye(y,!0)}const oa=new Set(["lighting","hvac","alarm_rules"]),yt={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},Xe=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function na(e){const t=new Set;for(const a of e.actions)a.command.startsWith("lighting")?t.add("照明"):a.command.startsWith("hvac")?t.add("暖通"):t.add("综合");return Array.from(t)}function ia(e,t,a){const s=a?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
    <div style="width:150px; display:flex; flex-direction:column; gap:3px;">
      <div style="position:relative; height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
        ${e<t?`<div style="position:absolute; left:${e/24*100}%; width:${(t-e)/24*100}%; top:0; bottom:0; border-radius:999px; background:${s};"></div>`:`
        <div style="position:absolute; left:${e/24*100}%; width:${(24-e)/24*100}%; top:0; bottom:0; border-radius:999px; background:${s};"></div>
        <div style="position:absolute; left:0; width:${t/24*100}%; top:0; bottom:0; border-radius:999px; background:${s};"></div>`}
      </div>
      <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--pacom-text-muted);">
        <span>00</span><span>12</span><span>24</span>
      </div>
    </div>
  `}async function ca(e,t,a){let s=Ve(),i=!1,r="",[q,O,P,Q]=await Promise.all([t.getSpatialTree(),t.listScenes(p.floorId),t.getRuntimeSettings(p.projectId),t.getFloorDevices(p.floorId).catch(()=>[])]),D="manual",J="balanced",U="all",ne=null,y="",Z=!1,T=!1,W=!1,Y="all",le=null,ee="",se="",te=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const ce=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],$e=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],k=[{deviceId:Q[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],A=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${P.calendar.workdayStart} – ${P.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${P.calendar.nightGuardStart} – 次日 ${P.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],be=t.subscribeFloorEvents(p.floorId,async F=>{F.type==="control.receipt.updated"&&ne?.batchId===F.batchId&&(ne=await t.getControlBatch(F.batchId),g())});function g(){const F=y.trim().toLowerCase(),n=F?O.filter(o=>`${o.name} ${o.description}`.toLowerCase().includes(F)):O,d=P.rules.filter(o=>oa.has(o.category)),$=U==="all"?d:U==="cbm"?[]:d.filter(o=>o.category===U),N=U==="all"||U==="cbm",_=Y==="issues"?ce.filter(o=>o.status!=="verified"):ce,de=Xe.find(o=>o.id===J)??Xe[1],ie=a.scope.canControlDevices,ae=a.scope.canEditDeployment;e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${Ue({tree:q,session:a,scope:s,isOpen:i,searchKeyword:r})}
            </div>

            <div class="pacom-header-meta">
              <button type="button" class="pacom-badge ${te.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${te.length>0?`人工覆盖中：${te.length} 台 ${ve("chevron-down",12)}`:`全部自动托管 ${ve("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${W?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${ce.length}）</button>
              ${D==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${Z?"收起表单":"+ 新建场景"}</button>`:D==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${D==="manual"}" data-scene-tab="manual">快捷场景（${O.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${D==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${D==="rules"}" data-scene-tab="rules">条件联动（${d.length+$e.length}）</button>
          </nav>
        </header>

        ${T?`
            <div class="lov-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${te.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${ve("x",16)}</button>
              </div>
              ${te.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':te.map(o=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${o.name}</div>
                            <div class="pacom-row-sub">${o.reason}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${o.id}" ${ie?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${te.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${ie?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${W?`
            <aside class="lov-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${ve("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${Y==="all"}" data-log-filter="all">全部（${ce.length}）</button>
                  <button class="pacom-tab" aria-selected="${Y==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${_.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${_.map(o=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${o.device}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${o.source}</span>
                        </div>
                        <span class="pacom-row-sub">${o.action} · ${o.at}</span>
                      </div>
                      <span class="pacom-badge ${o.status==="verified"?"pacom-badge--online":o.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${o.status==="verified"?"回读确认":o.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${ee?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${ee}</span></div>`:""}
          ${se?`<div class="pacom-alert-banner">${se}</div>`:""}

          ${D==="manual"?`
              ${ne?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="lov-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${ne.batchId}</span>
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
                            ${ne.receipts.map(o=>`
                                <tr>
                                  <td><code style="font-size:12px;">${o.deviceId}</code></td>
                                  <td>${o.command}</td>
                                  <td>${String(o.targetValue)}${o.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${o.errorMessage}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${o.status==="verified_success"?"pacom-badge--online":o.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${o.status}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${Z?`
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
                          <span class="lov-setting-title">联动动作列表（${k.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${k.map((o,h)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" data-draft-dev="${h}" aria-label="目标设备">
                                ${Q.map(G=>`<option value="${G.id}" ${G.id===o.deviceId?"selected":""}>${G.name}</option>`).join("")}
                              </select>
                              <select class="pacom-select" data-draft-cmd="${h}" aria-label="执行指令">
                                <option value="lighting.dimming" ${o.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${o.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${o.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" data-draft-val="${h}" value="${o.targetValue}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${h}" ${k.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="lov-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit">保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="lov-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${y}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${n.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${n.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="lov-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':n.map(o=>{const h=na(o),G=o.actions.slice(0,3).map(me=>{const ze=Q.find(ye=>ye.id===me.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??me.deviceId,Ee=me.command==="lighting.dimming"?`亮度 ${me.targetValue}%`:me.command==="hvac.setpoint"?`设温 ${me.targetValue}°C`:me.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${ze} → ${Ee}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${o.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${h.map(me=>`<span class="pacom-badge pacom-badge--accent">${me}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${o.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${o.description}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${G}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${o.lastExecutedAt?o.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${o.id}" ${ie?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:D==="schedule_oss"?`
                <div class="lov-kpi-strip lov-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">当前优化启停模式</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${de.title}</div>
                    <span class="lov-kpi-delta">${de.estSaving}</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">明日预测预启动时刻</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${de.predictedStart}</div>
                    <span class="lov-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">本周累计节省运行工时</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${de.savedHours}</div>
                    <span class="lov-kpi-delta">当前人工覆盖挂起：${te.length} 台</span>
                  </div>
                </div>

                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="lov-mode-grid">
                    ${Xe.map(o=>`
                      <button type="button" class="lov-mode-card" aria-pressed="${J===o.id}" data-oss-mode="${o.id}" ${ie?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${o.title}</strong>
                          <span class="pacom-badge ${J===o.id?"pacom-badge--online":"pacom-badge--neutral"}">${J===o.id?"当前生效":o.badge}</span>
                        </div>
                        <span class="lov-setting-desc">${o.desc}</span>
                        <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${o.estSaving}</span>
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
                          ${A.map(o=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${o.name}</span>
                                    ${o.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${o.windowLabel}</div>
                                </td>
                                <td>${ia(o.startHour,o.endHour,o.enabled)}</td>
                                <td><span class="pacom-row-sub">${o.scope}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${o.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="lov-switch"
                                      role="switch"
                                      aria-checked="${o.enabled}"
                                      aria-label="切换排程 ${o.name}"
                                      data-toggle-schedule="${o.id}"
                                      ${ie?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(o=>{const h=o==="all"?"全部":yt[o]??o,G=o==="all"?d.length+$e.length:o==="cbm"?$e.length:d.filter(me=>me.category===o).length;return`
                            <button type="button" class="lov-count-pill" aria-pressed="${U===o}" data-rule-cat="${o}">
                              <span>${h}</span><span class="lov-count-num">${G}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="lov-settings-card">
                    ${$.map(o=>{const h=le===o.id;return`
                          <div class="lov-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="lov-setting-meta">
                                <span class="lov-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${yt[o.category]??o.category}</span>
                                  <span>${o.name}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${o.version}</span>
                                </span>
                                <span class="lov-setting-desc">${o.summary} · 范围：${o.scopeLabel} · 回执：${o.receiptSummary??"已同步"}</span>
                              </div>
                              <div class="lov-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${o.id}">${h?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${o.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="lov-switch"
                                  role="switch"
                                  aria-checked="${o.enabled?"true":"false"}"
                                  aria-label="切换 ${o.name}"
                                  data-toggle-strategy-rule="${o.id}"
                                  data-rule-ver="${o.version}"
                                  data-rule-next="${!o.enabled}"
                                  ${ae?"":"disabled"}
                                >
                                  <span class="lov-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${h?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${o.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":o.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${o.scopeLabel} · 当前版本：v${o.version} · 最近同步：${o.receiptSummary??"已同步"}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${N?$e.map(o=>{const h=Math.min(100,Math.round(o.runtimeHours/o.thresholdHours*100));return`
                                <div class="lov-setting-row">
                                  <div class="lov-setting-meta" style="gap:6px;">
                                    <span class="lov-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${o.name}</span>
                                      <span class="pacom-badge ${h>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${o.runtimeHours} / ${o.thresholdHours} h（${h}%）</span>
                                    </span>
                                    <div class="lov-progress-track" style="max-width:340px;">
                                      <div class="lov-progress-fill" style="width:${h}%; background:${h>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="lov-setting-desc">绑定设备：${o.equipment} · 上次重置：${o.lastReset}</span>
                                  </div>
                                  <div class="lov-setting-control">
                                    <span class="pacom-row-sub">${o.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="lov-switch" role="switch" aria-checked="${o.enabled}" data-toggle-cbm="${o.id}" aria-label="切换 ${o.name}" ${ae?"":"disabled"}>
                                      <span class="lov-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,He(e,{onToggle:()=>{i=!i,g(),i&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:o=>{r=o,g();const h=e.querySelector("[data-global-space-search]");h&&(h.focus(),h.setSelectionRange(o.length,o.length))},onPick:o=>{s=o,i=!1,g()}}),e.querySelectorAll("[data-scene-tab]").forEach(o=>{o.addEventListener("click",()=>{D=o.dataset.sceneTab??"manual",ee="",g()})}),e.querySelectorAll("[data-toggle-overrides]").forEach(o=>{o.addEventListener("click",()=>{T=!T,g()})}),e.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{te=[],ee="已释放全部人工覆盖设备，自动节能策略已恢复托管。",g()}),e.querySelectorAll("[data-release-one]").forEach(o=>{o.addEventListener("click",()=>{const h=o.dataset.releaseOne;te=te.filter(G=>G.id!==h),ee="已恢复该设备的自动策略托管。",g()})}),e.querySelectorAll("[data-toggle-cmdlog]").forEach(o=>{o.addEventListener("click",()=>{W=!W,g()})}),e.querySelectorAll("[data-log-filter]").forEach(o=>{o.addEventListener("click",()=>{Y=o.dataset.logFilter??"all",g()})}),e.querySelector("[data-close-batch]")?.addEventListener("click",()=>{ne=null,g()}),e.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),e.querySelectorAll("[data-oss-mode]").forEach(o=>{o.addEventListener("click",()=>{const h=o.dataset.ossMode;if(!h)return;J=h;const G=Xe.find(me=>me.id===h);ee=`已切换至「${G?.title??h}」模式（明日预测启动 ${G?.predictedStart??""}）。`,g()})}),e.querySelectorAll("[data-toggle-schedule]").forEach(o=>{o.addEventListener("click",()=>{const h=o.dataset.toggleSchedule,G=A.find(me=>me.id===h);G&&(G.enabled=!G.enabled,ee=`排程「${G.name}」已${G.enabled?"恢复启用":"临时暂停"}。`,g())})}),e.querySelectorAll("[data-rule-cat]").forEach(o=>{o.addEventListener("click",()=>{U=o.dataset.ruleCat??"all",g()})}),e.querySelectorAll("[data-expand-rule]").forEach(o=>{o.addEventListener("click",()=>{const h=o.dataset.expandRule??null;le=le===h?null:h,g()})}),e.querySelectorAll("[data-toggle-cbm]").forEach(o=>{o.addEventListener("click",()=>{const h=$e.find(G=>G.id===o.dataset.toggleCbm);h&&(h.enabled=!h.enabled,ee=`工时维保规则「${h.name}」已${h.enabled?"启用":"停用"}。`,g())})}),e.querySelectorAll("[data-toggle-strategy-rule]").forEach(o=>{o.addEventListener("click",async()=>{se="";try{await t.toggleRuntimeRule(o.dataset.toggleStrategyRule,o.dataset.ruleNext==="true",Number(o.dataset.ruleVer)),P=await t.getRuntimeSettings(p.projectId),ee="条件联动规则状态与版本回执已更新。",g()}catch(h){se=h instanceof Error?h.message:String(h),g()}})}),e.querySelectorAll("[data-toggle-create]").forEach(o=>{o.addEventListener("click",()=>{Z=!Z,g()})}),e.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{k.push({deviceId:Q[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),g()}),e.querySelectorAll("[data-del-draft-action]").forEach(o=>{o.addEventListener("click",()=>{const h=Number(o.dataset.delDraftAction);k.length>1&&(k.splice(h,1),g())})}),e.querySelectorAll("[data-draft-dev]").forEach(o=>{o.addEventListener("change",()=>{const h=k[Number(o.dataset.draftDev)];h&&(h.deviceId=o.value)})}),e.querySelectorAll("[data-draft-cmd]").forEach(o=>{o.addEventListener("change",()=>{const h=k[Number(o.dataset.draftCmd)];h&&(h.command=o.value)})}),e.querySelectorAll("[data-draft-val]").forEach(o=>{o.addEventListener("change",()=>{const h=k[Number(o.dataset.draftVal)];h&&(h.targetValue=o.value)})}),e.querySelector("[data-scene-search]")?.addEventListener("input",o=>{const h=o.currentTarget,G=h.selectionStart??h.value.length;y=h.value,g();const me=e.querySelector("[data-scene-search]");me&&(me.focus(),me.setSelectionRange(G,G))}),e.querySelectorAll("[data-exec-scene]").forEach(o=>{o.addEventListener("click",async()=>{se="";const h=O.find(G=>G.id===o.dataset.execScene);try{ne=await t.executeScene(o.dataset.execScene),O=await t.listScenes(p.floorId),ce.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:h?.name??"E7F 场景",action:`${ne.receipts.length} 台设备联动下发`,status:"verified"}),g()}catch(G){se=G instanceof Error?G.message:String(G),g()}})}),e.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async o=>{o.preventDefault();const h=new FormData(o.currentTarget);try{await t.createScene({projectId:p.projectId,floorId:p.floorId,name:String(h.get("name")??""),description:String(h.get("description")??""),actions:k.map(G=>({deviceId:G.deviceId,command:G.command,targetValue:G.targetValue==="true"?!0:G.targetValue==="false"?!1:Number(G.targetValue)||50}))}),O=await t.listScenes(p.floorId),Z=!1,ee=`快捷场景已保存（共绑定 ${k.length} 条联动动作）。`,g()}catch(G){se=G instanceof Error?G.message:String(G),g()}})}g(),window.addEventListener("hashchange",()=>be(),{once:!0})}function it(e,t){return e.length===0?'<div class="lov-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':e.map(a=>`
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
            ${t?"":"disabled"}
          >
            <span class="lov-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function da(e,t,a){let s="calendar",i=Ve(),r=!1,q="";const[O,P]=await Promise.all([t.getSpatialTree(),t.getRuntimeSettings(p.projectId)]);let Q=P,D=Q.calendar.workdayStart,J=Q.calendar.workdayEnd,U=Q.calendar.nightGuardStart,ne=Q.calendar.nightGuardEnd,y=!0,Z=[];const T=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let W="flat";const Y={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},le={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},ee={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},se={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},te=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let ce="",$e="";function k(){const A=a.scope.canEditDeployment,be=Q.rules.filter(n=>n.category==="weather_area"),g=Q.rules.filter(n=>n.category==="metering_carbon"),F=Q.rules.filter(n=>n.category==="templates");e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">运行设置</h1>
              ${Ue({tree:O,session:a,scope:i,maxGranularity:"project",isOpen:r,searchKeyword:q})}
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge ${A?"pacom-badge--online":"pacom-badge--warning"}">
                ${A?"可修改并下发配置":"当前角色只读"}
              </span>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="运行设置分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${s==="calendar"}" data-stab="calendar">运行日历</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${s==="energy_weather"}" data-stab="energy_weather">能碳与气象</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${s==="guardrails"}" data-stab="guardrails">控制与安全</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${s==="notifications"}" data-stab="notifications">通知与工单规则</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:8px 6px 32px;">
          <div style="width:100%; max-width:920px; margin:0 auto; display:flex; flex-direction:column; gap:20px;">
            ${ce?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${ce}</span></div>`:""}
            ${$e?`<div class="pacom-alert-banner">${$e}</div>`:""}

            ${s==="calendar"?`
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">工作时间与夜间值守基准</h2>
                    <span class="pacom-badge pacom-badge--neutral">版本 v${Q.calendar.version}</span>
                  </div>
                  <div class="lov-settings-card">
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">工作日上班 / 下班时间</span>
                        <span class="lov-setting-desc">驱动「智能策略 → 排程与节能」早间预冷及公区照明启停；晚于 21:30 将自动提示交叠冲突</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:116px;" type="time" data-cal-start value="${D}" aria-label="工作日上班时间" ${A?"":"disabled"} />
                        <span class="pacom-row-sub">至</span>
                        <input class="pacom-input" style="width:116px;" type="time" data-cal-end value="${J}" aria-label="工作日下班时间" ${A?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">夜间值守巡检窗口</span>
                        <span class="lov-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:116px;" type="time" data-night-start value="${U}" aria-label="夜间值守开始" ${A?"":"disabled"} />
                        <span class="pacom-row-sub">至次日</span>
                        <input class="pacom-input" style="width:116px;" type="time" data-night-end value="${ne}" aria-label="夜间值守结束" ${A?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">自动跳过中国法定节假日</span>
                        <span class="lov-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                      </div>
                      <div class="lov-setting-control">
                        <span class="pacom-row-sub">${y?"已开启":"已关闭"}</span>
                        <button type="button" class="lov-switch" role="switch" aria-checked="${y}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${A?"":"disabled"}>
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
                    <span class="pacom-row-sub">共 ${T.length} 条</span>
                  </div>
                  <div class="lov-settings-card">
                    ${T.map(n=>`
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title"><span>${n.date}</span><span class="pacom-badge pacom-badge--accent">${n.mode}</span></span>
                            <span class="lov-setting-desc">${n.label}</span>
                          </div>
                          <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${n.id}" ${A?"":"disabled"}>移除</button>
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

                ${Z.length>0?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">受影响的定时与夜间规则预览</h2>
                        <span class="pacom-row-sub">共 ${Z.length} 条</span>
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
                              ${Z.map(n=>`
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
                          <select class="pacom-select" data-energy-field="weatherSource" aria-label="室外气象数据源" ${A?"":"disabled"}>
                            <option value="guanzhou_station" ${Y.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                            <option value="campus_sensor" ${Y.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                          </select>
                        </div>
                      </div>
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">E 栋计费与能效面积（m²）</span>
                          <span class="lov-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                        </div>
                        <div class="lov-setting-control">
                          <input class="pacom-input" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${Y.billingArea}" aria-label="计费面积" ${A?"":"disabled"} />
                        </div>
                      </div>
                      ${it(be,A)}
                    </div>
                  </section>

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">电价与碳排口径</h2>
                      <div class="pacom-tabs">
                        <button class="pacom-tab" aria-selected="${W==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                        <button class="pacom-tab" aria-selected="${W==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                      </div>
                    </div>
                    <div class="lov-settings-card">
                      ${W==="flat"?`
                          <div class="lov-setting-row">
                            <div class="lov-setting-meta">
                              <span class="lov-setting-title">综合电价参考（元 / kWh）</span>
                              <span class="lov-setting-desc">用于数据分析中的月度节能金额估算</span>
                            </div>
                            <div class="lov-setting-control">
                              <input class="pacom-input" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${Y.tariffYuan}" aria-label="综合电价" ${A?"":"disabled"} />
                            </div>
                          </div>`:`
                          <div class="lov-setting-row">
                            <div class="lov-setting-meta">
                              <span class="lov-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                              <span class="lov-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                            </div>
                            <div class="lov-setting-control" style="gap:6px;">
                              <span class="pacom-row-sub">峰</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${Y.tariffPeak}" ${A?"":"disabled"} />
                              <span class="pacom-row-sub">平</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${Y.tariffFlat}" ${A?"":"disabled"} />
                              <span class="pacom-row-sub">谷</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${Y.tariffValley}" ${A?"":"disabled"} />
                            </div>
                          </div>`}
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">区域电网碳排放因子</span>
                          <span class="lov-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                        </div>
                        <div class="lov-setting-control">
                          <select class="pacom-select" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${A?"":"disabled"}>
                            <option value="0.5271" ${Y.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                            <option value="0.5703" ${Y.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                          </select>
                        </div>
                      </div>
                      ${it(g,A)}
                      <div class="lov-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${A?"":"disabled"}>保存口径参数</button>
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
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="minTemp" value="${le.minTemp}" aria-label="最低设定温度" ${A?"":"disabled"} />
                            <span class="pacom-row-sub">至</span>
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="maxTemp" value="${le.maxTemp}" aria-label="最高设定温度" ${A?"":"disabled"} />
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
                              <option value="2h" ${le.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                              <option value="4h" ${le.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                              <option value="eod" ${le.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                              <option value="permanent" ${le.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                            </select>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">控制指令回读超时阈值（秒）</span>
                            <span class="lov-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                          </div>
                          <div class="lov-setting-control">
                            <input class="pacom-input" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${le.readbackTimeoutSec}" aria-label="回读超时阈值" ${A?"":"disabled"} />
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
                        ${it(F,A)}
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
                            <input class="pacom-input" style="width:72px;" type="number" data-auto-wo="delayMin" value="${ee.delayMin}" ${A?"":"disabled"} />
                            <span class="pacom-row-sub">分钟</span>
                            <button type="button" class="lov-switch" role="switch" aria-checked="${ee.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${A?"":"disabled"}>
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
                              <option value="暖通运维组" ${ee.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                              <option value="强电照明组" ${ee.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                              <option value="园区物业值班组" ${ee.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                            </select>
                            <span class="pacom-row-sub">防重</span>
                            <button type="button" class="lov-switch" role="switch" aria-checked="${ee.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${A?"":"disabled"}>
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
                            <input class="pacom-input" style="width:116px;" type="time" data-digest-time value="${se.dailyDigestTime}" aria-label="每日简报发送时间" />
                            <button type="button" class="lov-switch" role="switch" aria-checked="${se.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报">
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
                            <button type="button" class="lov-switch" role="switch" aria-checked="${se.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰">
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
                              ${te.map(n=>`
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
    `,He(e,{onToggle:()=>{r=!r,k(),r&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:n=>{q=n,k();const d=e.querySelector("[data-global-space-search]");d&&(d.focus(),d.setSelectionRange(n.length,n.length))},onPick:n=>{i=n,r=!1,k()}}),e.querySelectorAll("[data-stab]").forEach(n=>{n.addEventListener("click",()=>{s=n.dataset.stab??"calendar",ce="",$e="",k()})}),e.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{y=!y,ce=`法定节假日自动跳过已${y?"开启":"关闭"}。`,k()}),e.querySelector("[data-night-start]")?.addEventListener("change",n=>{U=n.currentTarget.value}),e.querySelector("[data-night-end]")?.addEventListener("change",n=>{ne=n.currentTarget.value}),e.querySelector("[data-add-sd-form]")?.addEventListener("submit",n=>{n.preventDefault();const d=new FormData(n.currentTarget);T.push({id:`sd-${Date.now()}`,date:String(d.get("date")??""),label:String(d.get("label")??""),mode:String(d.get("mode")??"保持工作日工况")}),ce="已添加特殊例外日期，当日自动覆盖默认节假日排程。",k()}),e.querySelectorAll("[data-del-sd]").forEach(n=>{n.addEventListener("click",()=>{const d=T.findIndex($=>$.id===n.dataset.delSd);d>=0&&T.splice(d,1),k()})}),e.querySelectorAll("[data-tariff-mode]").forEach(n=>{n.addEventListener("click",()=>{W=n.dataset.tariffMode??"flat",k()})}),e.querySelectorAll("[data-energy-field]").forEach(n=>{n.addEventListener("change",()=>{const d=n.dataset.energyField;d&&(Y[d]=n.value)})}),e.querySelector("[data-save-energy]")?.addEventListener("click",()=>{ce=W==="flat"?`能碳与气象口径已保存（面积 ${Y.billingArea} m² · 综合电价 ¥${Y.tariffYuan}/kWh · 因子 ${Y.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${Y.tariffPeak} / 平 ¥${Y.tariffFlat} / 谷 ¥${Y.tariffValley}）。`,k()}),e.querySelectorAll("[data-guard-field]").forEach(n=>{n.addEventListener("change",()=>{const d=n.dataset.guardField;d&&(le[d]=n.value)})}),e.querySelector("[data-save-guard]")?.addEventListener("click",()=>{ce=`控制安全边界已保存（温区 ${le.minTemp}–${le.maxTemp}°C · 超时 ${le.readbackTimeoutSec}s）。`,k()}),e.querySelectorAll("[data-auto-wo]").forEach(n=>{n.addEventListener("change",()=>{const d=n.dataset.autoWo;d&&(ee[d]=n.value),ce="自动转工单配置已更新。",k()})}),e.querySelectorAll("[data-toggle-autowo]").forEach(n=>{n.addEventListener("click",()=>{const d=n.dataset.toggleAutowo;d&&(ee[d]=!ee[d],ce="自动转工单保护策略已更新。",k())})}),e.querySelector("[data-digest-time]")?.addEventListener("change",n=>{se.dailyDigestTime=n.currentTarget.value,ce=`每日晨间简报发送时刻已更新为 ${se.dailyDigestTime}。`,k()}),e.querySelectorAll("[data-notify-key]").forEach(n=>{n.addEventListener("click",()=>{const d=n.dataset.notifyKey;d&&(se[d]=!se[d],ce="通知策略偏好已更新。",k())})}),e.querySelectorAll("[data-toggle-nr]").forEach(n=>{n.addEventListener("click",()=>{const d=te.find($=>$.id===n.dataset.toggleNr);d&&(d.enabled=!d.enabled,ce=`工作组「${d.groupName}」的通知分流规则已${d.enabled?"启用":"停用"}。`,k())})}),e.querySelector("[data-cal-start]")?.addEventListener("change",n=>{D=n.currentTarget.value}),e.querySelector("[data-cal-end]")?.addEventListener("change",n=>{J=n.currentTarget.value}),e.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{$e="",Z=await t.previewCalendarImpact(p.projectId,D,J),k()}),e.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{$e="";try{const n=await t.saveWorkCalendar(p.projectId,D,J,Q.calendar.version);Q={...Q,calendar:{...n,nightGuardStart:U,nightGuardEnd:ne}},ce=`运行日历已保存至 v${n.version}（工作日 ${n.workdayStart}–${n.workdayEnd} · 夜间值守 ${U}–${ne}）`,Z=[],k()}catch(n){$e=n instanceof Error?n.message:String(n),k()}}),e.querySelectorAll("[data-toggle-rule]").forEach(n=>{n.addEventListener("click",async()=>{$e="";try{await t.toggleRuntimeRule(n.dataset.toggleRule,n.dataset.ruleNext==="true",Number(n.dataset.ruleVer)),Q=await t.getRuntimeSettings(p.projectId),ce="策略状态与版本回执已更新。",k()}catch(d){$e=d instanceof Error?d.message:String(d),k()}})})}k()}const $t="pacom.web.sidebar.collapsed",ra=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,ct=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"运行设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],rt={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"运行设置",deployment:"系统部署",account:"机构与账户"},wt=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function dt(){const e=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return e in rt?e:"home"}function Ce(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function pa(e,t,a,s){e.classList.remove("bare-login");let i=a,r=dt(),q=localStorage.getItem($t)==="1",O=!1,P=!1,Q="",D=!1,J=0,U={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};const ne=t.mode==="demo"&&typeof t.switchDemoRole=="function";async function y(){try{const[d,$,N,_,de]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(p.floorId).catch(()=>[]),t.listAlarms(p.floorId).catch(()=>[]),t.listWorkOrders(p.floorId).catch(()=>[]),t.listScenes(p.floorId).catch(()=>[])]);U={devices:$,zones:d.zones,alarms:N,workOrders:_,scenes:de},J=N.filter(ie=>ie.status==="active").length,te()}catch{}}function Z(){return ct.map(d=>`
        ${d.id==="settings"?'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${d.id}" aria-current="${r===d.id?"page":"false"}" title="${d.label}">
          ${ve(d.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${d.label}</span>
          ${d.id==="alarms"&&J>0?`<span class="pacom-nav-count" title="待处理告警 ${J} 条">${J}</span>`:""}
        </button>`).join("")}function T(){const d=Q.trim().toLowerCase(),$=d?ct.filter(h=>h.label.toLowerCase().includes(d)).slice(0,4):ct,N=d?U.devices.filter(h=>`${h.name} ${h.id} ${h.category}`.toLowerCase().includes(d)).slice(0,5):U.devices.slice(0,3),_=d?U.zones.filter(h=>h.name.toLowerCase().includes(d)).slice(0,3):[],de=d?U.alarms.filter(h=>`${h.title} ${h.message} ${h.id}`.toLowerCase().includes(d)).slice(0,4):U.alarms.filter(h=>h.status==="active").slice(0,2),ie=d?U.workOrders.filter(h=>`${h.title} ${h.id}`.toLowerCase().includes(d)).slice(0,3):[],ae=d?U.scenes.filter(h=>`${h.name} ${h.description}`.toLowerCase().includes(d)).slice(0,3):[],X=d?wt.filter(h=>`${h.title} ${h.category}`.toLowerCase().includes(d)).slice(0,4):wt.slice(0,2),o=[];return N.length&&o.push(`<div class="pacom-search-group">${d?"设备（空间总览）":"常用设备直达"}</div>`+N.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(h.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Ce(h.name)}</span><span class="pacom-badge ${h.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${h.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),_.length&&o.push('<div class="pacom-search-group">功能区</div>'+_.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(h.id)}"><span>${Ce(h.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),de.length&&o.push(`<div class="pacom-search-group">${d?"告警":"待处理告警"}</div>`+de.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(h.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Ce(h.title)}</span><span class="pacom-badge pacom-badge--warning">${h.status==="active"?"待处理":"已确认"}</span></button>`).join("")),ie.length&&o.push('<div class="pacom-search-group">运维工单</div>'+ie.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(h.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Ce(h.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),ae.length&&o.push('<div class="pacom-search-group">智能策略</div>'+ae.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${Ce(h.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),X.length&&o.push('<div class="pacom-search-group">图纸与工程文档</div>'+X.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="${h.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Ce(h.title)}</span><span class="pacom-badge pacom-badge--neutral">${Ce(h.category)}</span></button>`).join("")),$.length&&o.push('<div class="pacom-search-group">工作区</div>'+$.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#${h.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${ve(h.icon,14)}${Ce(h.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),o.length?o.join(""):`<div class="pacom-nav-empty">未找到与「${Ce(Q)}」匹配的设备、区域、告警、工单或图纸</div>`}function W(d){d.querySelectorAll("[data-search-hash]").forEach($=>{$.addEventListener("click",()=>{const N=$.dataset.searchHash||"#home";D=!1,Q="",Y(),O=!1,window.location.hash===N?(r=dt(),A(!0)):window.location.hash=N})})}function Y(){if(e.querySelector('[data-role="cmd-scrim"]')?.remove(),!D)return;const d=document.createElement("div");d.className="pacom-cmd-scrim",d.dataset.role="cmd-scrim",d.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${ve("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${Ce(Q)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${T()}
        </div>
      </div>
    `,e.appendChild(d),d.addEventListener("click",_=>{_.target===d&&(D=!1,Y())});const $=d.querySelector('[data-role="cmd-input"]'),N=d.querySelector('[data-role="cmd-body"]');N&&W(N),$?.focus(),$?.addEventListener("input",_=>{Q=_.currentTarget.value,N&&(N.innerHTML=T(),W(N))})}function le(){if(!P)return"";const d=i.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${q?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${Ce(i.roleLabel)}${ne?" · 演示":""}</small>
          </span>
          ${ve("check",16,"pacom-pop-check")}
        </button>

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${ve("settings",16)}</span>
          <span class="pacom-pop-text">机构设置</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${Ce(d)}</span>
          <span class="pacom-pop-text">
            <b>${Ce(i.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${ne?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">演示角色切换（RBAC 权限预览）</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(qe).map($=>{const N=qe[$],_=$===i.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${_}" data-pop-role="${$}">
                      <span class="pacom-pop-text">
                        <b>${Ce(N.roleLabel)}</b>
                        <small>${Ce(N.displayName)}</small>
                      </span>
                      ${_?ve("check",16,"pacom-pop-check"):""}
                    </button>`}).join("")}
            </div>`:""}

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${ve("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function ee(d){switch(document.title=`${rt[r]} · PACOM Station`,r){case"home":await la(d,t,i);return;case"analysis":await Gt(d,t,i);return;case"alarms":await Tt(d,t,i);return;case"scenes":await ca(d,t,i);return;case"settings":await da(d,t,i);return;case"deployment":await ea(d,t,i);return;case"account":await At(d,t,i,$=>{i=$,A(!0)},se);return}}async function se(){P=!1,O=!1,D=!1,n();try{await t.logout()}finally{window.location.hash="#login",s()}}function te(){const d=e.querySelector('[data-role="nav-list"]');d&&(d.innerHTML=Z(),$e())}function ce(){e.querySelector('[data-role="org-popover"]')?.remove();const d=e.querySelector('[data-role="org-menu-btn"]');if(d&&d.setAttribute("aria-expanded",String(P)),!P)return;const $=document.createElement("div");$.innerHTML=le().trim();const N=$.firstElementChild;N&&(e.appendChild(N),k())}function $e(){e.querySelectorAll("[data-route]").forEach(d=>{d.addEventListener("click",()=>{const $=d.dataset.route;$===r&&!O||(r=$,O=!1,P=!1,window.location.hash=`#${r}`,A(!0))})})}function k(){e.querySelectorAll('[data-pop-act="go-account"]').forEach(d=>{d.addEventListener("click",()=>{P=!1,O=!1,r="account",window.location.hash="#account",A(!0)})}),e.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{se()}),e.querySelectorAll("[data-pop-role]").forEach(d=>{d.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const $=d.dataset.popRole;P=!1,O=!1,i=await t.switchDemoRole($),await A(!0)})})}async function A(d){const $=e.querySelector('[data-role="main-stage"]');if(!d&&$){const _=e.querySelector(".pacom-nav-rail");_&&(_.classList.toggle("is-collapsed",q),_.classList.toggle("is-mobile-open",O));const de=e.querySelector('[data-role="mobile-scrim"]');de&&de.classList.toggle("is-open",O),ce();return}e.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${ve("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${rt[r]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${Ce(i.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${O?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${q?"is-collapsed":""} ${O?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${ra}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${q?"展开侧栏":"收起侧栏"}" aria-label="${q?"展开侧栏":"收起侧栏"}">
              ${ve("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${ve("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${Z()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${r==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${P}" title="广州国家实验室 · ${Ce(i.displayName)}">
              <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>
              <span class="pacom-org-name">广州国家实验室</span>
              ${ve("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,e.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{q=!q,P=!1,localStorage.setItem($t,q?"1":"0");const _=e.querySelector(".pacom-nav-rail"),de=e.querySelector('[data-role="toggle-sidebar"]');_&&_.classList.toggle("is-collapsed",q),de&&(de.title=q?"展开侧栏":"收起侧栏",de.setAttribute("aria-label",de.title),de.innerHTML=ve("panel-left",16)),ce()}),e.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{P=!1,ce(),D=!0,Y()}),e.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{O=!O,A(!1)}),e.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{O=!1,P=!1,A(!1)}),e.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",_=>{_.stopPropagation(),P=!P,ce()}),$e(),ce(),Y();const N=e.querySelector('[data-role="main-stage"]');N&&await ee(N)}const be=d=>{const $=d.target;P&&!$?.closest('[data-role="org-popover"]')&&!$?.closest('[data-role="org-menu-btn"]')&&(P=!1,ce())},g=d=>{if((d.metaKey||d.ctrlKey)&&d.key.toLowerCase()==="k"){d.preventDefault(),P=!1,ce(),D=!D,Y();return}d.key==="Escape"&&(D?(D=!1,Y()):P?(P=!1,ce()):O&&(O=!1,A(!1)))},F=()=>{r=dt(),P=!1,O=!1,D=!1,A(!0),y()};function n(){document.removeEventListener("click",be),document.removeEventListener("keydown",g),window.removeEventListener("hashchange",F)}document.addEventListener("click",be),document.addEventListener("keydown",g),window.addEventListener("hashchange",F),await A(!0),y()}const ua=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,va='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',ma='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',We=ve("x",16),xt={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},ga={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function ba(e){const t=e.replace(/\D/g,"");return t.length===11?`${t.slice(0,3)} •••• ${t.slice(7)}`:e}function Me(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function St(e,t,a){e.classList.add("bare-login"),document.title="登录 · PACOM Station";let s=!1,i=!1,r="",q="",O="",P="",Q=!1,D={},J="",U=!1,ne="",y=0,Z=null,T=null,W="privacy",Y="",le="",ee="";const se=t.mode==="demo"&&typeof t.switchDemoRole=="function";function te(){Z!==null&&(window.clearInterval(Z),Z=null),e.classList.remove("bare-login")}function ce(){y=60,Z!==null&&window.clearInterval(Z),Z=window.setInterval(()=>{y-=1,y<=0&&(y=0,Z!==null&&(window.clearInterval(Z),Z=null));const be=e.querySelector('[data-act="send-sms"]');be&&(be.disabled=y>0,be.textContent=y>0?`${y} 秒后重发`:ne?"重新获取":"获取验证码")},1e3)}function $e(){if(!T)return"";if(T==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${We}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${Me(le)}" />
                  </div>
                </div>
                ${ee?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${Me(ee)}</p>`:""}
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary">发送验证码</button>
            </div>
          </section>
        </div>
      `;if(T==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${We}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                ${se?"当前为离线演示环境，您可直接通过登录页的「演示角色快速体验」切换 5 类内置角色进入 E7F 工作区。":"正式接入账户服务后，将在此开放自助注册与机构邀请码加入流程。"}
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
              ${se?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">选择演示角色</button>':""}
            </div>
          </section>
        </div>
      `;if(T==="legal"){const be=xt[W],g=["privacy","terms","service"].map(F=>`<button type="button" role="tab" aria-selected="${W===F}" class="au-legal-tab ${W===F?"is-active":""}" data-act="switch-legal" data-tab="${F}">${xt[F].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${We}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${g}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${be.items.map(F=>`<li>${Me(F)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return T==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${We}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${Y||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:T==="demoRoles"&&se?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择演示角色</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${We}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(qe).map(be=>{const g=qe[be];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${be}">
                        <div>
                          <b>${Me(g.roleLabel)} · ${Me(g.displayName)}</b>
                          <small>${Me(ga[be])}</small>
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
      `:""}function k(){const be=s?`
        <div class="au-field ${D.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Me(O)}" aria-invalid="${D.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${y>0?"disabled":""}>
              ${y>0?`${y} 秒后重发`:ne?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${Me(D.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${ne?`验证码已发送至 ${Me(ba(ne))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${D.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Me(r)}" aria-invalid="${D.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${Me(D.id??"")}</p>
        </div>
      `,g=s?`
        <div class="au-field ${D.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Me(P)}" aria-invalid="${D.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${Me(D.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${D.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${i?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Me(q)}" aria-invalid="${D.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${i?"隐藏密码":"显示密码"}">
              ${i?ma:va}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${Me(D.pwd??"")}</p>
        </div>
      `;e.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${ua}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${U?"disabled":""}>
                  ${be}
                  ${g}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${J?"":"hidden"}>${Me(J)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${Q?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${U?"disabled":""}>
                    ${U?"正在登录…":"登录"}
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
                ${se?`<div class="au-demo-bar">
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
      ${$e()}
    `,A()}function A(){const be=e.querySelector("#au-id"),g=e.querySelector("#au-pwd"),F=e.querySelector("#au-sphone"),n=e.querySelector("#au-scode"),d=e.querySelector('input[name="keep"]');be?.addEventListener("input",()=>{if(r=be.value,D.id||J){delete D.id,J="",be.closest(".au-field")?.classList.remove("bad");const $=e.querySelector("#au-id-err");$&&($.textContent="");const N=e.querySelector("#au-login-ferr");N&&(N.hidden=!0)}}),g?.addEventListener("input",()=>{if(q=g.value,D.pwd||J){delete D.pwd,J="",g.closest(".au-field")?.classList.remove("bad");const $=e.querySelector("#au-pwd-err");$&&($.textContent="");const N=e.querySelector("#au-login-ferr");N&&(N.hidden=!0)}}),F?.addEventListener("input",()=>{if(O=F.value,D.sphone||J){delete D.sphone,J="",F.closest(".au-field")?.classList.remove("bad");const $=e.querySelector("#au-sphone-err");$&&($.textContent="");const N=e.querySelector("#au-login-ferr");N&&(N.hidden=!0)}}),n?.addEventListener("input",()=>{if(P=n.value.replace(/\D/g,"").slice(0,6),n.value=P,D.scode||J){delete D.scode,J="",n.closest(".au-field")?.classList.remove("bad");const $=e.querySelector("#au-scode-err");$&&($.textContent="");const N=e.querySelector("#au-login-ferr");N&&(N.hidden=!0)}}),d?.addEventListener("change",()=>{Q=d.checked}),e.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{i=!i,k(),e.querySelector("#au-pwd")?.focus()}),e.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{s=!s,D={},J="",k(),e.querySelector(s?"#au-sphone":"#au-id")?.focus()}),e.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const $=O.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test($)){D={sphone:"请输入有效的手机号码"},k(),e.querySelector("#au-sphone")?.focus();return}D={},ne=$,ce(),k(),e.querySelector("#au-scode")?.focus()}),e.querySelector('form[data-form="login"]')?.addEventListener("submit",async $=>{if($.preventDefault(),!U){if(D={},J="",s?(O.trim()||(D.sphone="请输入手机号码"),/^\d{6}$/.test(P.trim())||(D.scode="请输入 6 位验证码")):(r.trim()||(D.id="请输入电子邮箱或手机号码"),q||(D.pwd="请输入密码")),Object.keys(D).length>0){k();const N=Object.keys(D)[0];e.querySelector(`#au-${N}`)?.focus();return}U=!0,k();try{const N=await t.login({account:(s?O:r).trim(),password:s?P.trim():q});te(),a(N)}catch(N){U=!1,J=N instanceof Error?N.message:"账户或密码不正确",k()}}}),e.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{le=r.trim(),ee="",T="reset",k(),e.querySelector("#au-rs-id")?.focus()}),e.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{T="register",k()}),e.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{T="legal",k()}),e.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{Y="",T="contact",k()}),e.querySelectorAll('[data-act="open-demo-roles"]').forEach($=>{$.addEventListener("click",()=>{T="demoRoles",k()})}),e.querySelectorAll('[data-act="close-modal"]').forEach($=>{$.addEventListener("click",()=>{T=null,k()})}),e.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",$=>{$.target===$.currentTarget&&(T=null,k())}),e.querySelectorAll('[data-act="switch-legal"]').forEach($=>{$.addEventListener("click",()=>{const N=$.dataset.tab;N&&(W=N,k())})}),e.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),Y="已复制"}catch{Y="support@pacom.cn"}k()}),e.querySelector("#au-reset-form")?.addEventListener("submit",$=>{$.preventDefault(),le=e.querySelector("#au-rs-id")?.value.trim()??"",le?se?ee="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":ee="如账户存在，验证码已发送。":ee="请输入电子邮箱或手机号码",k()}),e.querySelectorAll('[data-act="pick-demo-role"]').forEach($=>{$.addEventListener("click",async()=>{const N=$.dataset.roleId;if(!N||!t.switchDemoRole)return;const _=await t.switchDemoRole(N);te(),a(_)})})}k()}async function ha(){const e=document.getElementById("app");if(e)try{const t=Et(),a=await t.getSession(),s=async i=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await pa(e,t,i,()=>{St(e,t,r=>{s(r)})})};if(!a||window.location.hash==="#login"){St(e,t,i=>{s(i)});return}await s(a)}catch(t){e.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(t)}</div></div>`}}ha();
//# sourceMappingURL=index-D1Rf-5fa.js.map
