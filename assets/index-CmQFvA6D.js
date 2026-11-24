(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const q of d.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&s(q)}).observe(document,{childList:!0,subtree:!0});function a(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerPolicy&&(d.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?d.credentials="include":n.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(n){if(n.ep)return;n.ep=!0;const d=a(n);fetch(n.href,d)}})();const p={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},qe={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[p.projectId,p.project1Id],allowedBuildingIds:[p.buildingId,p.buildingFId],allowedFloorIds:[p.lockedFloor8Id,p.floorId,p.lockedFloor6Id],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[p.projectId],allowedBuildingIds:[p.buildingId,p.buildingFId],allowedFloorIds:[p.lockedFloor8Id,p.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[p.projectId],allowedBuildingIds:[p.buildingId],allowedFloorIds:[p.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[p.projectId],allowedBuildingIds:[p.buildingId],allowedFloorIds:[p.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[p.projectId],allowedBuildingIds:[p.buildingId],allowedFloorIds:[p.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},We="pacom.web.demo.role";class xt{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){const t=sessionStorage.getItem(We);t&&qe[t]&&(this.activeSession=structuredClone(qe[t]));const a=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:p.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:a,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:a,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:p.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:a,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:a,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:p.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:a,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:a,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:p.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:a,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:a,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:a,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:a,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:p.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:a,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:p.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:a,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:a,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:a,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:a},{id:"conn-e7f-dali",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:a},{id:"conn-e7f-modbus",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:p.projectId,floorId:p.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:p.projectId,floorId:p.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:p.projectId,floorId:p.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:p.projectId,floorId:p.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:p.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:p.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:a,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:p.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:a,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:p.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:a,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:p.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:a,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:p.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:a,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:p.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:a,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(qe).map((s,n)=>({userId:s.userId,displayName:s.displayName,email:`${s.role.replaceAll("_",".")}@pacom.local`,role:s.role,roleLabel:s.roleLabel,scopeSummary:s.scope.allowedZoneIds?.length?`E栋 7F（${s.scope.allowedZoneIds.length} 个我的区域）`:`${s.scope.allowedProjectIds.length} 项目 / ${s.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:n===0?a:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(t,a,s,n,d){this.traces.unshift({at:new Date().toISOString(),channel:t,operation:a,endpoint:s,request:d,response:n}),this.traces.length>40&&this.traces.pop()}pushAudit(t,a,s,n){const d=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:d?.displayName??"anonymous",role:d?.role??"member",action:t,target:a,result:s,detail:n})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(t){if(!t.account.trim()||!t.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const a=t.account.includes("admin")?"org_admin":t.account.includes("eng")?"commissioning_engineer":t.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(qe[a]),sessionStorage.setItem(We,a),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:t.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(We),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(t){return this.activeSession=structuredClone(qe[t]),sessionStorage.setItem(We,t),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${t}`,this.activeSession),structuredClone(this.activeSession)}async getSpatialTree(){const t=this.requireSession(),a=[{id:p.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"},{id:p.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"}],s=[{id:p.buildingId,projectId:p.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.png"},{id:p.buildingFId,projectId:p.projectId,name:"F栋",aboveFloors:12,belowFloors:2,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.png"}],n={projects:a.filter(d=>t.scope.allowedProjectIds.includes(d.id)),buildings:s.filter(d=>t.scope.allowedBuildingIds.includes(d.id)),floors:[{id:p.lockedFloor8Id,buildingId:p.buildingId,kind:"above",level:8,name:"8F",plan:null},{id:p.floorId,buildingId:p.buildingId,kind:"above",level:7,name:"7F",areaSqm:1383.1,plan:{floorId:p.floorId,imageUrl:"./media/7F.webp",planVersion:1,updatedAt:"2026-11-22T00:00:00Z"}},{id:p.lockedFloor6Id,buildingId:p.buildingId,kind:"above",level:6,name:"6F",plan:null}],zones:[{id:"zone-e7f-lab-east",floorId:p.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:p.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:p.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:p.floorId,name:"核心走廊与弱电井",category:"corridor"}]};return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:n.projects.length,buildings:n.buildings.length,floors:n.floors.length}),n}async getFloorDevices(t){const a=this.requireSession();if(!a.scope.allowedFloorIds.includes(t)){const n={code:"FORBIDDEN",status:403,message:`当前角色「${a.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,n),this.pushAudit("floor.read",t,"denied",n.message),new Error(`403 FORBIDDEN: ${n.message}`)}if(t!==p.floorId)return[];let s=structuredClone(this.devices);return a.scope.allowedZoneIds?.length&&(s=s.filter(n=>n.logicalZoneId&&a.scope.allowedZoneIds.includes(n.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,{count:s.length}),s}async dispatchControlBatch(t){const a=this.requireSession();if(!a.scope.canControlDevices||!a.scope.allowedFloorIds.includes(t.floorId))throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权下发控制指令`);const s=`batch-e7f-${Date.now().toString(36)}`,n={batchId:s,floorId:t.floorId,createdBy:a.userId,createdAt:new Date().toISOString(),receipts:t.targets.map(d=>({deviceId:d.deviceId,command:d.command,targetValue:d.targetValue,status:"queued"}))};return this.batches.set(s,n),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",n,t),this.pushAudit("control.dispatch",s,"success",`下发 ${t.targets.length} 台设备`),n.receipts.forEach((d,q)=>{const _=this.devices.find(P=>P.id===d.deviceId);setTimeout(()=>{d.status="dispatched",d.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:s,deviceId:d.deviceId,status:"dispatched",at:d.dispatchedAt})},280+q*120),setTimeout(()=>{const P=new Date().toISOString();!_||_.connectivity==="offline"?(d.status="timeout",d.errorCode="GATEWAY_READBACK_TIMEOUT",d.errorMessage="设备离线，网关未收到回读确认",d.verifiedAt=P):(d.status="verified_success",d.observedValue=d.targetValue,d.verifiedAt=P,this.applyObservedTelemetry(_,d.command,d.targetValue,P)),this.emit({type:"control.receipt.updated",batchId:s,deviceId:d.deviceId,status:d.status,observedValue:d.observedValue,at:P})},900+q*220)}),structuredClone(n)}applyObservedTelemetry(t,a,s,n){a==="lighting.dimming"&&t.telemetry.dimming?(t.telemetry.dimming={...t.telemetry.dimming,value:s,collectedAt:n,stale:!1},t.telemetry.power&&(t.telemetry.power={...t.telemetry.power,value:Number(s)>0,collectedAt:n,stale:!1})):(a==="lighting.power"||a==="hvac.power")&&t.telemetry.power?t.telemetry.power={...t.telemetry.power,value:s,collectedAt:n,stale:!1}:a==="hvac.setpoint"&&t.telemetry.setpoint&&(t.telemetry.setpoint={...t.telemetry.setpoint,value:s,collectedAt:n,stale:!1}),this.emit({type:"telemetry.updated",floorId:t.floorId,deviceId:t.id,collectedAt:n,values:{[a]:s}})}async getControlBatch(t){this.requireSession();const a=this.batches.get(t);if(!a)throw new Error(`404 NOT_FOUND: 批次 ${t} 不存在`);return structuredClone(a)}async listAlarms(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==p.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(t,a){const s=this.requireSession();if(!s.scope.canManageAlarms){const d=`角色「${s.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",t,"denied",d),new Error(`403 FORBIDDEN: ${d}`)}const n=this.alarms.find(d=>d.id===t);if(!n)throw new Error(`404 NOT_FOUND: 告警 ${t} 不存在`);return n.status="acknowledged",n.acknowledgedAt=new Date().toISOString(),n.acknowledgedBy=s.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${t}/acknowledge`,n,{note:a}),this.pushAudit("alarm.acknowledge",t,"success",a),this.emit({type:"alarm.changed",floorId:n.floorId,alarmId:t,status:"acknowledged",at:n.acknowledgedAt}),structuredClone(n)}async listWorkOrders(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==p.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(t){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权创建工单`);const s=new Date().toISOString(),n={id:`wo-e7f-${Date.now().toString(36)}`,projectId:p.projectId,buildingId:p.buildingId,floorId:t.floorId,deviceId:t.deviceId??null,alarmId:t.alarmId??null,title:t.title,description:t.description,status:"open",assigneeId:null,createdAt:s,updatedAt:s};if(this.workOrders.unshift(n),t.alarmId){const d=this.alarms.find(q=>q.id===t.alarmId);d&&(d.workOrderId=n.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",n,t),this.pushAudit("work_order.create",n.id,"success",n.title),structuredClone(n)}async updateWorkOrderStatus(t,a){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权流转工单`);const n=this.workOrders.find(d=>d.id===t);if(!n)throw new Error(`404 NOT_FOUND: 工单 ${t} 不存在`);return n.status=a,n.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${t}`,n,{status:a}),this.pushAudit("work_order.update",t,"success",`状态更新为 ${a}`),structuredClone(n)}async updateDevicePlanPoint(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw this.pushAudit("device.plan_point",t.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权编辑图纸标点`);const s=this.devices.find(n=>n.id===t.deviceId);if(!s)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(s.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${s.version}，请刷新后重试`);return s.planPoint={floorId:t.floorId,planVersion:t.planVersion,x:Number(t.x.toFixed(4)),y:Number(t.y.toFixed(4))},s.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${t.deviceId}/plan-point`,s,t),this.pushAudit("device.plan_point",t.deviceId,"success",`坐标更新 (${s.planPoint.x}, ${s.planPoint.y})`),structuredClone(s)}async updateDeviceHardwareBinding(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权修改硬件绑定`);const s=this.devices.find(d=>d.id===t.deviceId);if(!s)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(s.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${s.version}）`);const n=new Date().toISOString();return s.physicalInstalled=t.physicalInstalled,s.physicalVerifiedAt=t.physicalInstalled?n:null,s.hardwareBinding={gatewayId:t.gatewayId,protocol:t.protocol,networkAddress:t.networkAddress,portOrChannel:t.portOrChannel,boundAt:n,boundBy:a.displayName},s.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${t.deviceId}/hardware-binding`,s,t),this.pushAudit("device.hardware_binding",t.deviceId,"success",`${t.protocol} ${t.networkAddress}`),structuredClone(s)}async listConnections(t){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(t){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权冻结交付批次`);const n=this.devices.filter(q=>q.physicalInstalled&&q.hardwareBinding).length,d={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:p.projectId,floorId:t,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:n,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:s.displayName,note:a||"例行交付基线冻结"};return this.deliveryBatches.unshift(d),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${t}/deliveries/freeze`,d,{note:a}),this.pushAudit("delivery.freeze",d.id,"success",`${n}/${this.devices.length} 已现场核验`),structuredClone(d)}async getAnalysisReport(t,a,s){this.requireSession();const n=a==="today"?1:a==="7d"?7:30,q={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*n)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*n).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(Q=>Q.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*n).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*n).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*n).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[t],_=a==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],P={category:t,range:a,scopeId:s,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:q.kpis,unit:q.unit,series:q.base.map((Q,M)=>({label:_[M],value:Math.round(Q*(t==="energy"||t==="carbon"?n/2+.5:1)),baseline:Math.round(Q*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:q.base[3],unit:q.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:q.base[4],unit:q.unit,status:t==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:q.base[1],unit:q.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${t}?range=${a}&scopeId=${s}`,{kpis:P.kpis.length}),P}async listScenes(t){return this.requireSession(),structuredClone(this.scenes)}async createScene(t){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const s={id:`scn-e7f-${Date.now().toString(36)}`,projectId:t.projectId,floorId:t.floorId,name:t.name,description:t.description,enabled:!0,scheduleSummary:"手动触发",actions:t.actions,lastExecutedAt:null};return this.scenes.unshift(s),this.record("REST","createScene","POST /api/v1/scenes",s,t),this.pushAudit("scene.create",s.id,"success",s.name),structuredClone(s)}async executeScene(t){const a=this.scenes.find(n=>n.id===t);if(!a)throw new Error(`404 NOT_FOUND: 场景 ${t} 不存在`);const s=await this.dispatchControlBatch({floorId:a.floorId,idempotencyKey:`scene-${t}-${Date.now()}`,targets:a.actions,reason:`触发场景：${a.name}`});return a.lastExecutedAt=new Date().toISOString(),a.lastBatchId=s.batchId,s}async getRuntimeSettings(t){return this.requireSession(),structuredClone({projectId:p.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(t,a,s){this.requireSession();const n=s>=this.calendar.nightGuardStart?`下班时间 ${s} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,d=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${a} - ${s}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${a} (-30m) ~ ${s} (+30m)`,conflictWarning:n},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:n}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",d,{workdayStart:a,workdayEnd:s}),d}async saveWorkCalendar(t,a,s,n){const d=this.requireSession();if(!d.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${d.roleLabel}」无权修改运行日历`);if(this.calendar.version!==n)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(a>=s)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:a,workdayEnd:s,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:a,workdayEnd:s,expectedVersion:n}),this.pushAudit("settings.calendar",p.projectId,"success",`${a}-${s}`),structuredClone(this.calendar)}async toggleRuntimeRule(t,a,s){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权启停运行规则`);const d=this.rules.find(q=>q.id===t);if(!d)throw new Error(`404 NOT_FOUND: 规则 ${t} 不存在`);if(d.version!==s)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${d.version}）`);return d.enabled=a,d.version+=1,d.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${t}`,d,{enabled:a,expectedVersion:s}),this.pushAudit("settings.rule_toggle",t,"success",a?"启用":"停用"),structuredClone(d)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(t,a){const s=this.requireSession();if(s.role!=="org_admin"&&s.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const n=qe[a],d={userId:`inv-${Date.now().toString(36)}`,displayName:t.split("@")[0]||t,email:t,role:a,roleLabel:n.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(d),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",d,{email:t,role:a}),this.pushAudit("org.invite",t,"success",n.roleLabel),structuredClone(d)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(t,a){return t!==p.floorId?()=>{}:(this.listeners.add(a),()=>{this.listeners.delete(a)})}emit(t){this.record("WS",t.type,`WS /ws/v1/stream?floorId=${p.floorId}`,t),this.listeners.forEach(a=>a(t))}}function St(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new xt}const kt={"building-2":'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',"settings-2":'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',check:'<path d="M20 6 9 17l-5-5"/>',menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',layers:'<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',list:'<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',"folder-kanban":'<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/>',plug:'<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>'};function It(e){return e>=20?"1.5":e>=16?"1.75":e>=14?"2":"2.25"}function ge(e,t=16,a=""){const s=It(t);return`<svg${a?` class="${a}"`:""} width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${s}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;">${kt[e]}</svg>`}const et=[{id:"wg-hvac",name:"暖通运维组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋 5F–7F（HVAC、FCU 与 VAV 系统）",memberCount:3,membersSummary:"陈值班、林工、周工",notifyChannel:"站内 + 短信"},{id:"wg-elec",name:"强电照明组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋全楼照明与配电回路",memberCount:2,membersSummary:"黄工、刘工",notifyChannel:"站内 + 邮件"},{id:"wg-property",name:"园区物业值班组",defaultRoleLabel:"只读访客 / 值班巡检",locationScope:"广实2号园 / 全园区公共空间与值班台",memberCount:4,membersSummary:"张班长、王巡检、赵巡检、吴值守",notifyChannel:"站内 + 每日晨报"}];async function Et(e,t,a,s,n){let d="profile",q="directory",_=await t.listOrgMembers(),P=await t.listAuditLogs(),Q="",M="all",Y="all",T="all",pe=!1,y=!1,K=!1,z=a.displayName,X=a.role==="org_admin"||a.role==="project_admin"?"设施运维总监":a.role==="commissioning_engineer"?"楼宇自控部署工程师":a.role==="facility_operator"?"暖通运行值班工程师":"园区巡检成员",te="138-0013-8072",se="",oe="";async function le(){[_,P]=await Promise.all([t.listOrgMembers(),t.listAuditLogs()]),re()}function re(){const me=t.mode==="demo"&&typeof t.switchDemoRole=="function",ye=Q.trim().toLowerCase(),k=_.filter(u=>M!=="all"&&u.role!==M?!1:ye?`${u.displayName} ${u.email} ${u.roleLabel} ${u.scopeSummary}`.toLowerCase().includes(ye):!0),A=P.filter(u=>{if(Y==="success"&&u.result!=="success"||Y==="denied"&&u.result==="success")return!1;if(T!=="all"){const I=`${u.action} ${u.target}`.toLowerCase();if(T==="control"&&!I.includes("control")&&!I.includes("scene")&&!I.includes("控制")||T==="alarm"&&!I.includes("alarm")&&!I.includes("work")&&!I.includes("告警")||T==="deploy"&&!I.includes("deploy")&&!I.includes("plan")&&!I.includes("hardware")&&!I.includes("部署"))return!1}return!0});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">机构与账户</h1>
              <div class="pacom-tabs" role="tablist" aria-label="机构与账户视图">
                <button class="pacom-tab" role="tab" aria-selected="${d==="profile"}" data-atab="profile">我的账户与权限</button>
                <button class="pacom-tab" role="tab" aria-selected="${d==="members"}" data-atab="members">成员与角色（${_.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${d==="audit"}" data-atab="audit">操作审计日志（${P.length}）</button>
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
            ${se?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${se}</span></div>`:""}
            ${oe?`<div class="pacom-alert-banner">${oe}</div>`:""}
            ${d==="profile"?`
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
                        <input class="pacom-input" style="width:150px;" name="displayName" value="${z}" aria-label="显示姓名" required />
                        <input class="pacom-input" style="width:180px;" name="jobTitle" value="${X}" aria-label="岗位职务" />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">告警接收手机号（SMS）</span>
                        <span class="lov-setting-desc">用于接收 P1 严重告警短信推送与工单升级提醒</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:180px;" name="phone" value="${te}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
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

                ${me?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">多角色权限预览切换</h2>
                        <span class="pacom-badge pacom-badge--neutral">仅 Demo 预览可用</span>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(qe).map(u=>{const I=qe[u];return`
                              <button class="pacom-role-card ${u===a.role?"is-active":""}" data-switch-role="${u}">
                                <strong style="font-weight:500;">${I.roleLabel}</strong>
                                <span class="pacom-row-sub">${I.displayName}</span>
                                <span class="pacom-row-sub">授权楼层 ${I.scope.allowedFloorIds.length} 层 · 部署编辑：${I.scope.canEditDeployment?"是":"否"}</span>
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
                      <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:4px;">展开查看 ${ge("chevron-down",12)}</span>
                    </summary>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                      <span class="pacom-row-sub">服务端下发的当前会话权限对象（供前后端核对）</span>
                      <button class="pacom-btn" data-copy-session="1">${K?"已复制":"复制 JSON"}</button>
                    </div>
                    <pre class="pacom-code">${JSON.stringify(a,null,2)}</pre>
                  </details>
                </section>`:d==="members"?`
                  ${pe?`
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
                                ${Object.keys(qe).map(u=>`<option value="${u}">${qe[u].roleLabel}</option>`).join("")}
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
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${q==="directory"}" data-msub="directory">成员目录（${_.length}）</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${q==="groups"}" data-msub="groups">工作组（${et.length}）</button>
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
                                <option value="all" ${M==="all"?"selected":""}>全部角色</option>
                                ${Object.keys(qe).map(u=>`<option value="${u}" ${M===u?"selected":""}>${qe[u].roleLabel}</option>`).join("")}
                              </select>
                            </div>
                            <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                              ${pe?"收起邀请":"+ 邀请成员"}
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
                                ${k.map(u=>`
                                    <tr>
                                      <td>
                                        <div style="display:flex; align-items:center; gap:10px;">
                                          <span class="pacom-pop-avatar">${u.displayName.slice(0,1)}</span>
                                          <div>
                                            <div style="font-weight:500;">${u.displayName}</div>
                                            <div class="pacom-row-sub">${u.email}</div>
                                          </div>
                                        </div>
                                      </td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${u.roleLabel}</span></td>
                                      <td><span class="pacom-row-sub">${u.scopeSummary}</span></td>
                                      <td>
                                        <span class="pacom-badge ${u.status==="active"?"pacom-badge--online":"pacom-badge--accent"}">
                                          ${u.status==="active"?"正常":u.status}
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
                                ${et.map(u=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${u.name}</div>
                                      <div class="pacom-row-sub">${u.membersSummary}</div>
                                    </td>
                                    <td><span class="pacom-badge pacom-badge--neutral">${u.defaultRoleLabel}</span></td>
                                    <td><span class="pacom-row-sub">${u.locationScope}</span></td>
                                    <td><strong>${u.memberCount}</strong> 人</td>
                                    <td><span class="pacom-badge pacom-badge--accent">${u.notifyChannel}</span></td>
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
                          <option value="all" ${T==="all"?"selected":""}>全部操作类型</option>
                          <option value="control" ${T==="control"?"selected":""}>设备控制与场景</option>
                          <option value="alarm" ${T==="alarm"?"selected":""}>告警与工单处置</option>
                          <option value="deploy" ${T==="deploy"?"selected":""}>系统部署与点位</option>
                        </select>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${Y==="all"}" data-audit-filter="all">全部（${P.length}）</button>
                          <button class="pacom-tab" aria-selected="${Y==="success"}" data-audit-filter="success">成功</button>
                          <button class="pacom-tab" aria-selected="${Y==="denied"}" data-audit-filter="denied">已拦截</button>
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
                            ${A.map(u=>`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${u.action}</div>
                                    ${u.detail?`<div class="pacom-row-sub">${u.detail}</div>`:""}
                                  </td>
                                  <td><code style="font-size:12px;">${u.target}</code></td>
                                  <td>${u.actor}</td>
                                  <td><span class="pacom-row-sub">${u.at.slice(0,19).replace("T"," ")}</span></td>
                                  <td>
                                    <span class="pacom-badge ${u.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                                      ${u.result==="success"?"成功":u.result}
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
    `,e.querySelectorAll("[data-atab]").forEach(u=>{u.addEventListener("click",()=>{d=u.dataset.atab,se="",oe="",re()})}),e.querySelectorAll("[data-msub]").forEach(u=>{u.addEventListener("click",()=>{q=u.dataset.msub??"directory",re()})}),e.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{y=!y,re()}),e.querySelector('[data-role="new-group-form"]')?.addEventListener("submit",u=>{u.preventDefault();const I=new FormData(u.currentTarget),i=String(I.get("wgName")??"").trim(),c=String(I.get("wgRole")??"运行值班员"),w=String(I.get("wgScope")??"").trim();!i||!w||(et.push({id:`wg-${Date.now()}`,name:i,defaultRoleLabel:c,locationScope:w,memberCount:1,membersSummary:a.displayName,notifyChannel:"站内 + 邮件"}),y=!1,se=`已创建工作组「${i}」（授权空间：${w}）。`,re())}),e.querySelector('[data-role="profile-form"]')?.addEventListener("submit",u=>{u.preventDefault();const I=new FormData(u.currentTarget);z=String(I.get("displayName")??"").trim()||a.displayName,X=String(I.get("jobTitle")??"").trim()||X,te=String(I.get("phone")??"").trim()||te,se=`已更新个人资料：${z}（${X}）· 告警短信接收号 ${te}。`,re()}),e.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await t.logout(),window.location.hash="#login",n()}),e.querySelector("[data-copy-session]")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(a,null,2)),K=!0,re(),window.setTimeout(()=>{K=!1,re()},1600)}catch{}}),e.querySelectorAll("[data-switch-role]").forEach(u=>{u.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const I=await t.switchDemoRole(u.dataset.switchRole);s(I)})}),e.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{pe=!pe,re()}),e.querySelector("[data-member-search]")?.addEventListener("input",u=>{const I=u.currentTarget,i=I.selectionStart??I.value.length;Q=I.value,re();const c=e.querySelector("[data-member-search]");c&&(c.focus(),c.setSelectionRange(i,i))}),e.querySelector("[data-role-filter]")?.addEventListener("change",u=>{M=u.currentTarget.value,re()}),e.querySelectorAll("[data-audit-filter]").forEach(u=>{u.addEventListener("click",()=>{Y=u.dataset.auditFilter??"all",re()})}),e.querySelector("[data-audit-cat]")?.addEventListener("change",u=>{T=u.currentTarget.value??"all",re()}),e.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async u=>{u.preventDefault(),oe="";const I=new FormData(u.currentTarget);try{await t.inviteOrgMember(String(I.get("email")??""),String(I.get("role"))),pe=!1,await le()}catch(i){oe=i instanceof Error?i.message:String(i),re()}})}re()}let Ye={level:"floor",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId};function Be(){return Ye}function dt(e){return Ye=e,Ye}function Le(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function pt(e){const t=e.match(/(-?\d+)/);if(!t)return 0;const a=Number(t[1]);return e.toUpperCase().startsWith("B")?-Math.abs(a):a}function Lt(e){if(e==="all")return{level:"all-projects"};const t=e.split(":");return t[0]==="project"&&t[1]?{level:"project",projectId:t[1]}:t[0]==="building"&&t[1]&&t[2]?{level:"building",projectId:t[1],buildingId:t[2]}:t[0]==="floor"&&t[1]&&t[2]&&t[3]?{level:"floor",projectId:t[1],buildingId:t[2],floorId:t[3]}:{level:"project",projectId:p.projectId}}function At(e,t,a){return a==="project"?e.level==="all-projects"?{level:"project",projectId:t.projects[0]?.id??p.projectId}:{level:"project",projectId:e.projectId}:a==="building"&&e.level==="floor"?{level:"building",projectId:e.projectId,buildingId:e.buildingId}:e}function Ve(e){const{tree:t,session:a,isOpen:s,searchKeyword:n}=e,d=e.maxGranularity??"floor",q=e.activeAlarmCount??0,_=a.scope.allowedZoneIds?.length?a.scope.allowedZoneIds:null,P=t.floors.filter(i=>a.scope.allowedFloorIds.includes(i.id)),Q=_||t.projects.length<=1&&t.buildings.length<=1&&P.length<=1?"floors-only":t.projects.length>1?"multi-project":t.buildings.length>1?"single-project-multi-building":"single-building",M=Q==="multi-project"&&d!=="project",Y=Q==="multi-project"||Q==="single-project-multi-building",T=Q!=="floors-only"&&d!=="project",pe=d==="project"&&t.projects.length<=1||Q==="floors-only"&&P.length<=1,y=At(e.scope??Ye,t,d),K=y.level==="all-projects"?null:t.projects.find(i=>i.id===y.projectId)??t.projects[0],z=y.level==="building"||y.level==="floor"?t.buildings.find(i=>i.id===y.buildingId):null,X=y.level==="floor"?t.floors.find(i=>i.id===y.floorId):null,te=[];if(y.level==="all-projects")te.push(`全部项目（${t.projects.length}）`);else if(y.level==="project")te.push(Le(K?.name??"广实2号园"));else if(y.level==="building")K&&te.push(`<span class="pacom-path-muted">${Le(K.name)}</span>`),te.push(Le(z?.name??"E栋"));else{K&&Q!=="floors-only"&&te.push(`<span class="pacom-path-muted">${Le(K.name)}</span>`),z&&T&&te.push(`<span class="pacom-path-muted">${Le(z.name)}</span>`);const i=!T&&z?`${z.name} ${X?.name??"7F"}`:X?.name??"7F";te.push(Le(i))}const se='<span class="pacom-path-muted" style="margin:0 3px;">·</span>',oe=pe?`<span class="pacom-path-trigger is-static">${te.join(se)}</span>`:`<button type="button" class="pacom-path-trigger" data-global-space-toggle="1" aria-expanded="${s}" aria-haspopup="dialog" title="切换项目 / 楼宇 / 楼层">
        <span>${te.join(se)}</span>
        <span style="display:inline-flex; color:var(--pacom-text-secondary);">${ge("chevron-down",12)}</span>
      </button>`;if(!s||pe)return`<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap">${oe}</div>`;const le=n.trim().toLowerCase(),re=y.level==="all-projects"?t.projects[0]?.id??p.projectId:y.projectId,me=y.level==="building"||y.level==="floor"?y.buildingId:t.buildings.find(i=>i.projectId===re)?.id??p.buildingId,ye=t.projects.filter(i=>!le||i.name.toLowerCase().includes(le)),k=t.buildings.filter(i=>i.projectId===re&&(!le||i.name.toLowerCase().includes(le))),A=[...t.floors.filter(i=>i.buildingId===me)].sort((i,c)=>pt(c.name)-pt(i.name)).filter(i=>!le||i.name.toLowerCase().includes(le)),U=d==="project"||t.projects.length>1,u=d!=="project"&&Y,I=d==="floor";return`
    <span class="pacom-title-slash" aria-hidden="true">/</span>
    <div class="pacom-path-wrap" data-role="global-space-wrap">
      ${oe}
      <div class="pacom-space-popover pacom-path-popover" role="dialog" aria-label="全局空间切换" data-role="global-space-pop">
        <div class="pacom-space-pop-head">
          ${ge("search",14)}
          <input type="text" name="globalSpaceSearch" data-global-space-search placeholder="检索园区、楼宇或楼层…" value="${Le(n)}" aria-label="检索空间" />
          <button type="button" class="pacom-drawer-close" style="width:24px; height:24px;" data-global-space-toggle="1" aria-label="关闭">${ge("x",14)}</button>
        </div>
        <div class="pacom-space-pop-cols">
          ${U?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">项目 / 园区</div>
                ${M?`<button type="button" class="pacom-space-pop-item ${y.level==="all-projects"?"is-active":""}" data-global-space-pick="all">
                        <span>全部项目（${t.projects.length}）</span>
                        ${y.level==="all-projects"?ge("check",14):""}
                      </button>`:""}
                ${ye.map(i=>{const c=y.level==="project"&&y.projectId===i.id;return`<button type="button" class="pacom-space-pop-item ${c?"is-active":""}" data-global-space-pick="project:${Le(i.id)}">
                      <span>${Le(i.name)}</span>
                      ${c?ge("check",14):ge("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${u?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Le(t.projects.find(i=>i.id===re)?.name??"园区")} · 楼宇</div>
                <button type="button" class="pacom-space-pop-item ${y.level==="project"?"is-active":""}" data-global-space-pick="project:${Le(re)}">
                  <span>全园区</span>
                  ${y.level==="project"?ge("check",14):""}
                </button>
                ${k.map(i=>{const c=y.level==="building"&&y.buildingId===i.id;return`<button type="button" class="pacom-space-pop-item ${c?"is-active":""}" data-global-space-pick="building:${Le(i.projectId)}:${Le(i.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Le(i.name)}</span>
                        ${i.id===p.buildingId&&q>0?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      ${c?ge("check",14):ge("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${I?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Le(t.buildings.find(i=>i.id===me)?.name??"楼宇")} · 楼层</div>
                ${T?`<button type="button" class="pacom-space-pop-item ${y.level==="building"&&y.buildingId===me?"is-active":""}" data-global-space-pick="building:${Le(re)}:${Le(me)}">
                        <span>整栋</span>
                        ${y.level==="building"&&y.buildingId===me?ge("check",14):""}
                      </button>`:""}
                ${A.map(i=>{const c=a.scope.allowedFloorIds.includes(i.id),w=y.level==="floor"&&y.floorId===i.id,N=i.id===p.floorId&&q>0;return`<button type="button" class="pacom-space-pop-item ${w?"is-active":""}" style="${c?"":"opacity:0.5;"}" data-global-space-pick="floor:${Le(re)}:${Le(me)}:${Le(i.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Le(i.name)}</span>
                        ${N?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      <span class="pacom-row-sub" style="font-size:11px;">${w?ge("check",14):c?i.plan?"2D":"待部署":"未授权"}</span>
                    </button>`}).join("")}
              </div>`:""}
        </div>
      </div>
    </div>
  `}function Ue(e,t){e.querySelectorAll("[data-global-space-toggle]").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation(),t.onToggle()})}),e.querySelector("[data-global-space-search]")?.addEventListener("input",s=>{t.onSearch(s.currentTarget.value)}),e.querySelectorAll("[data-global-space-pick]").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation();const d=s.dataset.globalSpacePick;if(!d)return;const q=dt(Lt(d));t.onPick(q)})})}const Ne={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},jt={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},Ct={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function Ft(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("modbus")||t.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":t.includes("co₂")||t.includes("co2")||t.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function Mt(e){return e.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:e.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function tt(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("vav")||e.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:t.includes("co₂")||t.includes("co2")||e.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function qt(e,t,a){const s=new URLSearchParams(window.location.hash.split("?")[1]??""),n=s.get("alarm"),d=s.get("wo");let q=await t.getSpatialTree(),_=Be(),P=!1,Q="",M=[],Y=[],T=[],pe=d?"workorders":"alarms",y="all",K="all",z="all",X="impact",te=!1,se="",oe=n,le=d,re=null,me=null,ye="resolved";const k=new Set,A=new Map,U=new Map,u=new Map,I=new Map;let i="",c="";function w(ne){const J=I.get(ne.id);if(J)return J;const l=ne.id.match(/(\d+)$/),h=`WO-2026-${l?l[1]:ne.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,H={estCost:"¥ 450",actualCost:ne.status==="closed"?"¥ 380":"--",cmmsNo:h,assigneeGroup:"暖通运维组",tasks:[{id:`${ne.id}-t1`,label:"核查设备供电与现场指示灯状态",done:ne.status!=="open"},{id:`${ne.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:ne.status==="resolved"||ne.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:ne.createdAt?ne.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${h}）`}]};return I.set(ne.id,H),H}async function N(){[M,Y,T]=await Promise.all([t.listAlarms(p.floorId),t.listWorkOrders(p.floorId),t.getFloorDevices(p.floorId).catch(()=>[])]),Y.forEach(ne=>w(ne)),ue()}function V(ne){if(!ne)return{name:"楼层通用",zone:"E7F",dev:null};const J=T.find(l=>l.id===ne)??null;return J?{name:J.name,zone:(J.logicalZoneId?Ct[J.logicalZoneId]:void 0)??"E7F",dev:J}:{name:ne,zone:"E7F",dev:null}}function be(ne){const J=V(ne.deviceId).dev;J&&J.connectivity==="offline"?u.set(ne.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${J.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):u.set(ne.id,{verdict:"pass",summary:`自检通过（PASS）：「${J?.name??ne.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),oe=ne.id,ue()}function ue(){const ne=M.filter(r=>r.status==="active"&&!A.has(r.id)),J=Y.filter(r=>!w(r).cancelled&&(r.status==="open"||r.status==="assigned"||r.status==="in_progress")),l=M.filter(r=>r.status!=="active").length+U.size,h=0,H=A.size,ee=se.trim().toLowerCase(),Se=M.filter(r=>{const b=A.has(r.id);if(y==="snoozed"){if(!b)return!1}else if(y==="active"){if(r.status!=="active"||b)return!1}else if(y==="acknowledged"){if(r.status!=="acknowledged")return!1}else if(b)return!1;if(z!=="all"&&r.severity!==z)return!1;if(!ee)return!0;const G=V(r.deviceId);return`${r.title} ${r.message} ${G.name} ${G.zone} ${r.deviceId}`.toLowerCase().includes(ee)}),we=new Map;for(const r of Se){const b=`${r.title} ${r.message}`.toLowerCase(),G=b.includes("离线")||b.includes("modbus")||b.includes("通信"),ce=te?G?"root-gateway-modbus":r.deviceId:r.id,ie=G?"根因：E7F 主控网关通信链路":`根因：${V(r.deviceId).name}`,Ie=we.get(ce)??{rootLabel:ie,items:[]};Ie.items.push(r),we.set(ce,Ie)}const Ee=Array.from(we.values());X==="impact"&&Ee.sort((r,b)=>tt(b.items[0]).costYuan-tt(r.items[0]).costYuan);const Ce=Y.filter(r=>{const b=w(r);if(K==="cancelled"){if(!b.cancelled)return!1}else if(b.cancelled||K==="open"&&(r.status==="resolved"||r.status==="closed")||K==="resolved"&&r.status!=="resolved"||K==="closed"&&r.status!=="closed")return!1;if(!ee)return!0;const G=V(r.deviceId);return`${r.title} ${r.description} ${r.id} ${b.cmmsNo} ${G.name}`.toLowerCase().includes(ee)});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${Ve({tree:q,session:a,scope:_,activeAlarmCount:ne.length,isOpen:P,searchKeyword:Q})}
            </div>

            <div class="pacom-header-meta">
              ${pe==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="lov-switch" role="switch" aria-checked="${te}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="lov-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${a.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${a.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="lov-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${ge("refresh-cw",14)}</button>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="告警中心视图">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${pe==="alarms"}" data-main-tab="alarms">实时告警（${M.length-H}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${pe==="workorders"}" data-main-tab="workorders">运维工单（${Y.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="lov-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="lov-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${pe==="alarms"&&y==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">待处理告警</span>
              <div class="lov-kpi-value">${ne.length}<span class="lov-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="lov-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${pe==="workorders"&&K==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">处理中工单</span>
              <div class="lov-kpi-value">${J.length}<span class="lov-kpi-unit">单</span></div>
              <span class="lov-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${pe==="alarms"&&y==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">已闭环生效</span>
              <div class="lov-kpi-value">${l}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="lov-kpi-cell">
              <span class="lov-kpi-label">关单复发待查</span>
              <div class="lov-kpi-value" style="color:var(--pacom-status-online);">${h}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${i?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${i}</span></div>`:""}
          ${c?`<div class="pacom-alert-banner">${c}</div>`:""}

          ${pe==="alarms"?`
              <section class="lov-table-card">
                <div class="lov-table-toolbar">
                  <div class="lov-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${se}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${z==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${z==="critical"?"selected":""}>严重</option>
                      <option value="major" ${z==="major"?"selected":""}>重要</option>
                      <option value="minor" ${z==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${X==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${X==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${y==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${y==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${y==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${y==="snoozed"}" data-status-pill="snoozed">已忽略（${H}）</button>
                    </div>
                  </div>
                  <div class="lov-table-toolbar-group">
                    ${k.size>0&&a.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${k.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${Ee.length} 项</span>
                  </div>
                </div>
                ${Ee.length===0?'<div class="lov-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${Ee.map(r=>{const b=r.items[0],G=jt[b.severity]??{label:b.severity,cls:"pacom-badge--neutral"},ce=V(b.deviceId),ie=Mt(b),Ie=tt(b),De=oe===b.id,Ae=A.get(b.id),je=!!Ae,_e=k.has(b.id),Te=u.get(b.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${b.id}" data-check-alarm="${b.id}" ${_e?"checked":""} ${b.status!=="active"||je?"disabled":""} aria-label="选择 ${b.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${G.cls}">${G.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${b.title}</span>
                                      ${te?`<span class="pacom-badge pacom-badge--accent">${r.rootLabel}${r.items.length>1?` · 影响 ${r.items.length} 项`:""}</span>`:""}
                                      ${Te?`<span class="pacom-badge ${Te.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${Te.verdict.toUpperCase()}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${b.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${ce.name}</div>
                                    <div class="pacom-row-sub">${ce.zone}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${Ie.costLabel}</div>
                                    <div class="pacom-row-sub">${Ie.comfortLabel}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${ie.duration}</div>
                                    <div class="pacom-row-sub" style="color:${ie.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${ie.trend}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${je?"pacom-badge--neutral":b.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${je?`忽略 ${Ae?.duration}`:b.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${je?`<button class="pacom-btn" data-unsnooze="${b.id}">恢复监控</button>`:`
                                            ${b.status==="active"?`<button class="pacom-btn" data-mark-actioned="${b.id}" ${a.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${b.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${b.id}" ${a.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${b.id}">${De?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${De?`
                                    <tr class="lov-table-detail-row">
                                      <td colspan="8">
                                        <div class="lov-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${Ft(b)}
                                            </div>
                                            ${Ae?`<div class="pacom-info-banner">忽略周期：${Ae.duration} · 原因备注：${Ae.reason}</div>`:""}
                                            ${Te?`
                                                <div class="lov-banner ${Te.verdict==="pass"?"lov-banner--ok":"lov-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="lov-banner-title">${Te.summary}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${Te.steps.map(ke=>`<span>${ke}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${b.id}</code> · 设备编号 <code>${b.deviceId}</code> · 关联工单 ${b.workOrderId??"无"}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${b.id}">单机自检（FTT）</button>
                                              ${!je&&b.status==="active"?`<button class="pacom-btn" data-open-snooze="${b.id}">限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${b.deviceId}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${b.deviceId}">定位设备 →</button>
                                            </div>
                                            ${re===b.id?`
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
              ${(()=>{const r=le?Y.find(b=>b.id===le)??null:null;if(r){const b=V(r.deviceId),G=w(r),ce=!!(G.cancelled||r.status==="closed");return`
                  <section class="lov-section" data-role="wo-workbench">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${r.id}">← 返回运维工单列表</button>
                        <h2 class="lov-section-title">${r.title}</h2>
                        <span class="pacom-badge pacom-badge--accent">${G.cmmsNo}</span>
                        ${G.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${r.id}" data-wo-status="${r.id}" aria-label="更新工单状态" ${ce?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(ie=>`<option value="${ie}" ${r.status===ie?"selected":""}>${Ne[ie]}</option>`).join("")}
                          <option value="cancelled" ${G.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${me===r.id?`
                        <form data-close-wo-form="${r.id}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${Ne[ye]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${G.cause??""}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${G.solution??""}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${G.actualCost==="--"?"":G.actualCost}" />
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
                          <div class="pacom-row-sub">${r.description}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${G.tasks.map(ie=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${ie.id}" data-wo-task="${r.id}" data-task-id="${ie.id}" ${ie.done?"checked":""} ${ce?"disabled":""} />
                                    <span>${ie.label}</span>
                                  </span>
                                  ${ie.unit?`<span class="pacom-row-sub">实测：${ie.reading??"--"} ${ie.unit}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${G.history.map(ie=>`<span>• <span class="pacom-row-sub">${ie.at}</span> — ${ie.text}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${r.id}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${G.cmmsNo}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${b.name}（${b.zone}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${G.assigneeGroup}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${G.estCost} / 实际 ${G.actualCost}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${G.cause??"待完单填写"}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${G.solution??"待完单填写"}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${r.deviceId}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${r.deviceId}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="lov-table-card">
                  <div class="lov-table-toolbar">
                    <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${se}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${K==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${K==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${K==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${K==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${K==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${Ce.length} 条工单</span>
                  </div>
                  ${Ce.length===0?'<div class="lov-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${Ce.map(b=>{const G=V(b.deviceId),ce=w(b),ie=!!(ce.cancelled||b.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${b.title}</span>
                                        ${ce.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${b.description} · <code>${b.id}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${G.name}</div>
                                      <div class="pacom-row-sub">${G.zone}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${ce.cmmsNo}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${ce.assigneeGroup} · 预估 ${ce.estCost}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${b.id}" data-wo-status="${b.id}" aria-label="更新工单状态" ${ie?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(Ie=>`<option value="${Ie}" ${b.status===Ie?"selected":""}>${Ne[Ie]}</option>`).join("")}
                                          <option value="cancelled" ${ce.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${b.id}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${me===b.id?`
                                      <tr class="lov-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${b.id}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${Ne[ye]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${ce.cause??""}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${ce.solution??""}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${ce.actualCost==="--"?"":ce.actualCost}" />
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
    `,Ue(e,{onToggle:()=>{P=!P,ue(),P&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:r=>{Q=r,ue();const b=e.querySelector("[data-global-space-search]");b&&(b.focus(),b.setSelectionRange(r.length,r.length))},onPick:r=>{_=r,P=!1,ue()}}),e.querySelectorAll("[data-main-tab]").forEach(r=>{r.addEventListener("click",()=>{pe=r.dataset.mainTab??"alarms",i="",ue()})}),e.querySelectorAll("[data-kpi-filter]").forEach(r=>{r.addEventListener("click",()=>{const b=r.dataset.kpiFilter;i="",b==="workorders"?(pe="workorders",K=K==="open"?"all":"open"):(b==="active"||b==="acknowledged")&&(pe="alarms",y=y===b?"all":b),ue()})}),e.querySelectorAll("[data-status-pill]").forEach(r=>{r.addEventListener("click",()=>{y=r.dataset.statusPill??"all",ue()})}),e.querySelectorAll("[data-wo-pill]").forEach(r=>{r.addEventListener("click",()=>{K=r.dataset.woPill??"all",ue()})}),e.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{i="",N()}),e.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{te=!te,ue()}),e.querySelector("[data-severity-filter]")?.addEventListener("change",r=>{z=r.currentTarget.value,ue()}),e.querySelector("[data-alarm-sort]")?.addEventListener("change",r=>{X=r.currentTarget.value??"impact",ue()}),e.querySelector("[data-alarm-search]")?.addEventListener("input",r=>{const b=r.currentTarget,G=b.selectionStart??b.value.length;se=b.value,ue();const ce=e.querySelector("[data-alarm-search]");ce&&(ce.focus(),ce.setSelectionRange(G,G))}),e.querySelectorAll("[data-check-alarm]").forEach(r=>{r.addEventListener("change",()=>{const b=r.dataset.checkAlarm;b&&(r.checked?k.add(b):k.delete(b),ue())})}),e.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{c="";const r=Array.from(k);try{for(const b of r)await t.acknowledgeAlarm(b,"告警中心批量确认"),U.set(b,"批量确认处置");k.clear(),i=`已批量确认 ${r.length} 条告警，未来 24 小时持续校验无复发。`,await N()}catch(b){c=b instanceof Error?b.message:String(b),ue()}}),e.querySelectorAll("[data-expand-alarm]").forEach(r=>{r.addEventListener("click",()=>{const b=r.dataset.expandAlarm??null;oe=oe===b?null:b,re=null,ue()})}),e.querySelectorAll("[data-expand-wo]").forEach(r=>{r.addEventListener("click",()=>{const b=r.dataset.expandWo??null;le=le===b?null:b,ue()})}),e.querySelectorAll("[data-run-ftt]").forEach(r=>{r.addEventListener("click",()=>{const b=M.find(G=>G.id===r.dataset.runFtt);b&&be(b)})}),e.querySelectorAll("[data-open-snooze]").forEach(r=>{r.addEventListener("click",()=>{re=r.dataset.openSnooze??null,ue()})}),e.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{re=null,ue()}),e.querySelectorAll("[data-snooze-form]").forEach(r=>{r.addEventListener("submit",b=>{b.preventDefault();const G=r.dataset.snoozeForm;if(!G)return;const ce=new FormData(r),ie=String(ce.get("duration")??"24h"),Ie=String(ce.get("reason")??"").trim()||"现场核查中";A.set(G,{duration:ie,reason:Ie}),k.delete(G),re=null,i=`已限时忽略该告警（${ie} · ${Ie}），可在「已忽略」页签中随时恢复。`,ue()})}),e.querySelectorAll("[data-unsnooze]").forEach(r=>{r.addEventListener("click",()=>{const b=r.dataset.unsnooze;b&&(A.delete(b),i="已恢复该告警的实时监控。",ue())})}),e.querySelectorAll("[data-go-ts]").forEach(r=>{r.addEventListener("click",()=>{const b=r.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(b)}`})}),e.querySelectorAll("[data-locate-home]").forEach(r=>{r.addEventListener("click",()=>{const b=r.dataset.locateHome??"";window.location.hash=b?`#home?device=${encodeURIComponent(b)}`:"#home"})}),e.querySelectorAll("[data-mark-actioned]").forEach(r=>{r.addEventListener("click",async()=>{c="";const b=r.dataset.markActioned;try{await t.acknowledgeAlarm(b,"现场自处理完成（Mark Actioned）"),U.set(b,"现场自处理完成"),k.delete(b),i="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await N()}catch(G){c=G instanceof Error?G.message:String(G),ue()}})}),e.querySelectorAll("[data-to-wo]").forEach(r=>{r.addEventListener("click",async()=>{c="";const b=M.find(G=>G.id===r.dataset.toWo);if(b)try{await t.createWorkOrder({floorId:b.floorId,deviceId:b.deviceId,alarmId:b.id,title:`处置告警：${b.title}`,description:b.message}),i=`已将「${b.title}」转为运维工单并同步 CMMS。`,await N()}catch(G){c=G instanceof Error?G.message:String(G),ue()}})}),e.querySelectorAll("[data-wo-status]").forEach(r=>{r.addEventListener("change",async()=>{const b=r.dataset.woStatus,G=r.value;if(c="",G==="cancelled"){const ce=Y.find(ie=>ie.id===b);if(ce){const ie=w(ce);ie.cancelled=!0,ie.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),i="工单已移入「已取消」分类并锁定编辑。",ue()}return}if(G==="resolved"||G==="closed"){me=b,ye=G,ue();return}try{await t.updateWorkOrderStatus(b,G);const ce=Y.find(ie=>ie.id===b);ce&&w(ce).history.unshift({at:"刚刚",text:`状态变更为「${Ne[G]}」`}),i="工单状态已更新并写入审计日志。",await N()}catch(ce){c=ce instanceof Error?ce.message:String(ce),await N()}})}),e.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{me=null,ue()}),e.querySelectorAll("[data-close-wo-form]").forEach(r=>{r.addEventListener("submit",async b=>{b.preventDefault();const G=r.dataset.closeWoForm,ce=new FormData(r),ie=String(ce.get("cause")??"").trim(),Ie=String(ce.get("solution")??"").trim(),De=String(ce.get("actualCost")??"").trim();try{await t.updateWorkOrderStatus(G,ye);const Ae=Y.find(je=>je.id===G);if(Ae){const je=w(Ae);je.cause=ie,je.solution=Ie,De&&(je.actualCost=De),je.history.unshift({at:"刚刚",text:`流转至「${Ne[ye]}」· 根因：${ie}`})}me=null,le=G,i=`工单已更新为「${Ne[ye]}」，根因与方案已沉淀归档。`,await N()}catch(Ae){c=Ae instanceof Error?Ae.message:String(Ae),ue()}})}),e.querySelectorAll("[data-wo-task]").forEach(r=>{r.addEventListener("change",()=>{const b=Y.find(ie=>ie.id===r.dataset.woTask);if(!b)return;const ce=w(b).tasks.find(ie=>ie.id===r.dataset.taskId);ce&&(ce.done=r.checked),ue()})})}await N()}const zt=ge("chevron-down",12),Ze=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],ut=[{id:p.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:p.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:p.projectId,label:"广实2号园（全园区）",factor:18.2}],Dt={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},Tt=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],Pe=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function at(e,t=""){const a=(e??"").trim().toLowerCase();return!(!a||a.includes("%")||a.includes("°c")||a.includes("ppm")||a.includes("ms")||a.includes("m²")||a.includes("/m2")||a.includes("db")||a.includes("lx")||t.includes("率")||t.includes("均")||t.includes("强度")||t.includes("延迟"))}function Ge(e,t){const a=e*t;return Math.abs(a)>=10?Math.round(a):Math.round(a*10)/10}function Ot(e,t){const a=Number(String(e).replaceAll(",","")),s=t??"";return Number.isFinite(a)?s==="kWh"&&Math.abs(a)>=1e4?{value:(a/1e3).toFixed(1),unit:"MWh",title:`精确值：${a.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(a)?a.toLocaleString("en-US"):a.toLocaleString("en-US",{maximumFractionDigits:1}),unit:s,title:`${a.toLocaleString("en-US")} ${s}`.trim()}:{value:e,unit:s,title:`${e} ${s}`.trim()}}function Pt(e,t){if(t===1)return e;const a=at(e.unit);return{...e,kpis:e.kpis.map(s=>{const n=Number(String(s.value).replaceAll(",",""));return!Number.isFinite(n)||!at(s.unit,s.label)?s:{...s,value:String(Ge(n,t))}}),series:a?e.series.map(s=>({...s,value:Ge(s.value,t),...typeof s.baseline=="number"?{baseline:Ge(s.baseline,t)}:{}})):e.series,zoneBreakdown:e.zoneBreakdown.map(s=>at(s.unit)?{...s,value:Ge(s.value,t)}:s)}}function Rt(e,t){const a=Math.max(...e.series.map(T=>Math.max(T.value,T.baseline??0)),1),s=46,n=34,d=36,q=Math.max(e.series.length*(s+n)+d*2,620),_=228,P=184,Q=132,M=[0,.25,.5,.75,1].map(T=>{const pe=Math.round(P-T*Q);return`<line x1="${d-8}" y1="${pe}" x2="${q-18}" y2="${pe}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${T===0?"0":"3 3"}" />`}).join(""),Y=e.series.map((T,pe)=>{const y=d+pe*(s+n),K=Math.max(8,Math.round(T.value/a*Q)),z=P-K,X=typeof T.baseline=="number"&&T.value>T.baseline*1.08,te=X?`<rect x="${y-8}" y="34" width="${s+16}" height="${P-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",se=typeof T.baseline=="number"?`<line x1="${y-5}" y1="${Math.round(P-T.baseline/a*Q)}" x2="${y+s+5}" y2="${Math.round(P-T.baseline/a*Q)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",oe=t&&(X||pe===1)?`<g><title>${X?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${y+s/2}" cy="18" r="7" fill="${X?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${y+s/2}" y="21" text-anchor="middle" font-size="8.5" font-weight="600" fill="#fff">${X?"!":"S"}</text></g>`:"",le=T.value>=1e4?`${(T.value/1e3).toFixed(1)}k`:T.value.toLocaleString("en-US");return`
        ${te}
        ${se}
        ${oe}
        <g>
          <title>${T.label}：实测 ${T.value.toLocaleString("en-US")} ${e.unit}${T.baseline!==void 0?` / 基线 ${T.baseline.toLocaleString("en-US")} ${e.unit}`:""}</title>
          <rect x="${y}" y="${z}" width="${s}" height="${K}" rx="7" fill="${X?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${y+s/2}" y="${z-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${le}</text>
        <text x="${y+s/2}" y="${P+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${T.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${q} ${_}" style="width:100%; height:232px; display:block;" role="img" aria-label="${e.category} 趋势图">
      ${M}
      ${Y}
    </svg>
  `}function Nt(e,t){const a=e.connectivity==="offline";if(e.category==="hvac"){const s=Number(e.telemetry.setpoint?.value??24);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:a?[23.8,24,24.1,null,null,null,null,null]:[s+.8,s+.6,s+.3,s,s-.2,s+.1,s+.2,s],offline:a,colorIdx:t},{id:`${e.id}:setpoint`,deviceId:e.id,deviceName:e.name,pointKey:"setpoint",label:"设定温度",unit:"°C",points:a?[24,24,24,null,null,null,null,null]:[s,s,s,s,s,s,s,s],offline:a,colorIdx:t+1},{id:`${e.id}:valve`,deviceId:e.id,deviceName:e.name,pointKey:"valve",label:"冷阀开度",unit:"%",points:a?[42,46,51,null,null,null,null,null]:[20,24,38,62,74,68,52,30],offline:a,colorIdx:t+2}]}if(e.category==="lighting"){const s=Number(e.telemetry.dimming?.value??60);return[{id:`${e.id}:dimming`,deviceId:e.id,deviceName:e.name,pointKey:"dimming",label:"回路亮度",unit:"%",points:[0,0,Math.round(s*.8),s,s,Math.round(s*.6),s,Math.round(s*.9)],offline:a,colorIdx:t},{id:`${e.id}:power`,deviceId:e.id,deviceName:e.name,pointKey:"power",label:"实时功率",unit:"W",points:[12,12,220,285,290,175,280,245],offline:a,colorIdx:t+1}]}if(e.category==="sensor"){const s=Number(e.telemetry.temp?.value??23.4);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:[s-.5,s-.3,s,s+.3,s+.5,s+.2,s+.1,s],offline:a,colorIdx:t},{id:`${e.id}:co2`,deviceId:e.id,deviceName:e.name,pointKey:"co2",label:"CO₂ 浓度",unit:"ppm",points:[410,415,440,520,580,540,495,430],offline:a,colorIdx:t+1},{id:`${e.id}:humidity`,deviceId:e.id,deviceName:e.name,pointKey:"humidity",label:"相对湿度",unit:"%RH",points:[49,50,51,52,53,51,50,49],offline:a,colorIdx:t+2}]}return[{id:`${e.id}:latency`,deviceId:e.id,deviceName:e.name,pointKey:"latency",label:"心跳延迟",unit:"ms",points:[16,18,17,19,18,17,18,18],offline:a,colorIdx:t}]}function _t(e){const t=e.points.filter(_=>typeof _=="number");if(!t.length)return{min:"-",avg:"-",max:"-",curr:"离线"};const a=Math.min(...t),s=Math.max(...t),n=t.reduce((_,P)=>_+P,0)/t.length,d=e.points[e.points.length-1],q=_=>Math.abs(_)<100&&!Number.isInteger(_)?_.toFixed(1):Math.round(_).toString();return{min:q(a),avg:n.toFixed(Math.abs(n)<100?1:0),max:q(s),curr:typeof d=="number"?q(d):"离线"}}function Bt(e,t,a){const s=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!e.length)return'<div class="lov-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧展开设备并勾选 1 个或多个测点以开始多点时序对比。</span></div>';const n=(q,_)=>{const z=[];for(const k of q)for(const A of k.points)typeof A=="number"&&z.push(A);const X=z.length?Math.min(...z)*.92:0,te=z.length?Math.max(...z)*1.08:100,se=Math.max(te-X,1),oe=[0,.5,1].map(k=>{const A=Math.round(26+106*(1-k)),U=(X+se*k).toFixed(se<15?1:0);return`
          <line x1="44" y1="${A}" x2="662" y2="${A}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${k===0?"0":"3 3"}" />
          <text x="38" y="${A+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${U}</text>
        `}).join(""),le=s.map((k,A)=>`<text x="${44+A/(s.length-1)*618}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${k}</text>`).join(""),re=q.map((k,A)=>{const U=Pe[(k.colorIdx+A)%Pe.length],u=k.points,I=[];let i=44,c=26+106/2,w=!1;u.forEach((V,be)=>{const ue=44+be/(u.length-1)*618;if(typeof V=="number"){const ne=26+106*(1-(V-X)/se);I.push(`${ue.toFixed(1)},${ne.toFixed(1)}`),i=ue,c=ne}else w=!0});const N=a?u.map((V,be)=>{if(typeof V!="number")return null;const ue=44+be/(u.length-1)*618,J=26+106*(1-(V*.96-X)/se);return`${ue.toFixed(1)},${J.toFixed(1)}`}).filter(Boolean).join(" "):"";return`
          ${N?`<polyline fill="none" stroke="${U}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.42" points="${N}" />`:""}
          ${I.length?`<polyline fill="none" stroke="${U}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${I.join(" ")}" />`:""}
          ${w?`<line x1="${i.toFixed(1)}" y1="${c.toFixed(1)}" x2="662" y2="${c.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${c-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),me=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${44+3/7*618}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${44+3/7*618}" y="14.8" text-anchor="middle" font-size="7.5" font-weight="600" fill="#fff">S</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${44+5/7*618}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${44+5/7*618}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `,ye=q.map((k,A)=>{const U=Pe[(k.colorIdx+A)%Pe.length],u=_t(k);return`
          <tr>
            <td><span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:7px; height:7px; border-radius:50%; background:${U};"></span>${k.deviceName} · ${k.label}</span></td>
            <td><strong>${u.curr}</strong> <span class="pacom-row-sub">${k.unit}</span></td>
            <td>${u.min} <span class="pacom-row-sub">${k.unit}</span></td>
            <td>${u.avg} <span class="pacom-row-sub">${k.unit}</span></td>
            <td>${u.max} <span class="pacom-row-sub">${k.unit}</span></td>
          </tr>`}).join("");return`
      <div class="pacom-card" style="padding:14px 16px; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${_}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${q.map((k,A)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${Pe[(k.colorIdx+A)%Pe.length]};"></span>${k.deviceName}·${k.label}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${oe}
          ${le}
          ${me}
          ${re}
        </svg>
        <div class="lov-table-wrap" style="border-top:var(--hw) solid var(--pacom-border-subtle); padding-top:6px;">
          <table class="lov-table" style="font-size:12px;">
            <thead><tr><th>测点</th><th>当前值</th><th>最小值 (Min)</th><th>平均值 (Avg)</th><th>最大值 (Max)</th></tr></thead>
            <tbody>${ye}</tbody>
          </table>
        </div>
      </div>
    `};if(t==="shared")return n(e,"单图叠合对比（Shared）");const d=new Map;for(const q of e){const _=d.get(q.unit)??[];_.push(q),d.set(q.unit,_)}return Array.from(d.entries()).map(([q,_])=>n(_,`按单位分组泳道（${q}）`)).join("")}function Vt(e){const t=[["时段",`数值 (${e.unit})`,`基线 (${e.unit})`].join(","),...e.series.map(d=>[d.label,String(d.value),d.baseline!==void 0?String(d.baseline):""].join(","))],a=new Blob([`\uFEFF${t.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),s=URL.createObjectURL(a),n=document.createElement("a");n.href=s,n.download=`pacom-${e.category}-${e.range}.csv`,n.click(),URL.revokeObjectURL(s)}function Ut(e){const t=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],a=["时间",...e.map(_=>`${_.deviceName}·${_.label}(${_.unit})`)].join(","),s=t.map((_,P)=>[_,...e.map(Q=>String(Q.points[P]??"No Data"))].join(",")),n=new Blob([`\uFEFF${[a,...s].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),d=URL.createObjectURL(n),q=document.createElement("a");q.href=d,q.download="pacom-timeseries-export.csv",q.click(),URL.revokeObjectURL(d)}async function Ht(e,t,a){const s=new URLSearchParams(window.location.hash.split("?")[1]??""),n=s.get("tab"),d=s.get("cat"),q=s.get("device"),_=s.get("points"),P=s.get("mode"),Q=s.get("interval");let M=n==="timeseries"?"timeseries":d&&Ze.some(J=>J.id===d)?d:"energy",Y="7d",T="2026-11-16",pe="2026-11-23",y=Be(),K=!1,z="",X=y.level==="all-projects"||y.level==="project"?p.projectId:y.level==="building"?p.buildingId:p.floorId,te="chart",se=!0,oe="breakdown",le=!1,re=null;const[me,ye]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(p.floorId).catch(()=>[])]);let k=ye;const A=new Map,U=[];k.forEach((J,l)=>{const h=Nt(J,l);A.set(J.id,h),U.push(...h)});let u=P==="shared"||P==="grouped"?P:"grouped",I=Q==="15m"||Q==="1h"||Q==="1d"?Q:"1h",i=!1;const c=[];if(_?_.split(",").forEach(J=>{U.some(l=>l.id===J)&&c.push(J)}):q&&A.has(q)&&(A.get(q)??[]).slice(0,2).forEach(J=>c.push(J.id)),!c.length){const J=k.find(H=>H.category==="hvac"),l=k.find(H=>H.category==="sensor"),h=k.find(H=>H.category==="lighting");J&&(A.get(J.id)??[]).slice(0,2).forEach(H=>c.push(H.id)),l&&(A.get(l.id)??[]).slice(0,1).forEach(H=>c.push(H.id)),h&&(A.get(h.id)??[]).slice(0,1).forEach(H=>c.push(H.id)),c.length||U.slice(0,3).forEach(H=>c.push(H.id))}const w=new Set(c),N=new Set(k.filter((J,l)=>l<2||(A.get(J.id)??[]).some(h=>w.has(h.id))).map(J=>J.id)),V=[{id:"fav-hvac",name:"E7F 空调温控与 CO₂ 联动对照",pointIds:U.filter(J=>J.pointKey==="temp"||J.pointKey==="setpoint"||J.pointKey==="co2").slice(0,4).map(J=>J.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度与功率对比",pointIds:U.filter(J=>J.pointKey==="dimming"||J.pointKey==="power").slice(0,4).map(J=>J.id),mode:"grouped",interval:"15m"}];let be="";async function ue(){const J=M==="timeseries"?"energy":M,l=Y==="custom"?"30d":Y;re=await t.getAnalysisReport(J,l,p.floorId),ne()}function ne(){if(!re)return;const J=M==="timeseries",l=M==="timeseries"?"energy":M,h=Ze.find(j=>j.id===l)??Ze[0],H=ut.find(j=>j.id===X)??ut[0],ee=Pt(re,H.factor),Se=ee.zoneBreakdown.filter(j=>j.status==="warning"),we=Dt[l],Ee=Math.max(...ee.zoneBreakdown.map(j=>j.value),1),Ce=U.filter(j=>w.has(j.id));e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">数据分析</h1>
              ${Ve({tree:me,session:a,scope:y,isOpen:K,searchKeyword:z})}
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px; width:108px;">
                <option value="today" ${Y==="today"?"selected":""}>今日</option>
                <option value="7d" ${Y==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${Y==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${Y==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${J?"":`<button class="pacom-btn ${le?"pacom-btn--primary":""}" data-toggle-canvas="1">${le?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="分析维度">
            ${Ze.map(j=>`<button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${M===j.id}" data-cat="${j.id}">${j.label}</button>`).join("")}
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${M==="timeseries"}" data-cat="timeseries">多点时序</button>
          </nav>
          ${Y==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${T}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${pe}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${J?`
            <div class="lov-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:296px; min-width:272px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">设备 → 测点树</span>
                    <span class="pacom-row-sub">已选 ${Ce.length} 个测点</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${V.map(j=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${j.id}">${ge("star",14)}<span style="overflow:hidden;text-overflow:ellipsis;">${j.name}</span></button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${k.map(j=>{const r=A.get(j.id)??[],b=N.has(j.id),G=r.filter(ce=>w.has(ce.id)).length;return`
                        <div style="display:flex; flex-direction:column; gap:2px;">
                          <button type="button" class="pacom-row" data-ts-expand="${j.id}" style="cursor:pointer; justify-content:space-between;" title="${j.name}">
                            <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
                              <span style="display:inline-flex; transition:transform 140ms ease; transform:rotate(${b?"0deg":"-90deg"}); opacity:0.65;">${zt}</span>
                              <div style="min-width:0; flex:1; text-align:left;">
                                <div class="pacom-row-title" style="font-size:13px;">${j.name}</div>
                                <div class="pacom-row-sub">${r.length} 个测点 · ${j.connectivity==="online"?"在线":"离线"}</div>
                              </div>
                            </div>
                            ${G>0?`<span class="pacom-badge pacom-badge--accent">${G}</span>`:""}
                          </button>
                          ${b?`<div style="display:flex; flex-direction:column; gap:2px; padding-left:20px; padding-bottom:4px;">
                                  ${r.map(ce=>{const ie=w.has(ce.id),Ie=Pe[ce.colorIdx%Pe.length];return`
                                        <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:5px 8px; border-radius:var(--pacom-radius-sm); cursor:pointer; font-size:12px; background:${ie?"var(--pacom-surface-recessed)":"transparent"};">
                                          <span style="display:inline-flex; align-items:center; gap:6px;">
                                            <input type="checkbox" name="tsPoint-${ce.id}" data-ts-point="${ce.id}" ${ie?"checked":""} />
                                            <span style="width:7px; height:7px; border-radius:50%; background:${Ie};"></span>
                                            <span style="color:var(--pacom-text-primary);">${ce.label}</span>
                                          </span>
                                          <span class="pacom-row-sub">${ce.unit}</span>
                                        </label>`}).join("")}
                                </div>`:""}
                        </div>`}).join("")}
                </div>
              </aside>
              <div class="lov-subnav-main" style="padding:2px 4px 24px;">
                ${be?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${be}</span></div>`:""}
                <div class="lov-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="lov-section-title">多测点实时遥测对比（Time Series）</h2>
                    <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:6px;">${ge("clock",12)} 排程(S) · ${ge("triangle-alert",12)} 告警(!) · 虚线为断流/上周同期</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>对比上周同期</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${i}" data-ts-compare="1" aria-label="叠加对比上周同期曲线">
                        <span class="lov-switch-thumb"></span>
                      </button>
                    </label>
                    <select class="pacom-select" name="tsInterval" data-ts-interval aria-label="采样粒度" style="height:28px; font-size:12px;">
                      <option value="15m" ${I==="15m"?"selected":""}>15 分钟</option>
                      <option value="1h" ${I==="1h"?"selected":""}>1 小时</option>
                      <option value="1d" ${I==="1d"?"selected":""}>1 天</option>
                    </select>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${u==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${u==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ts-share="1">复制分享链接</button>
                  </div>
                </div>
                ${Bt(Ce,u,i)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="lov-kpi-strip" role="region" aria-label="核心统计指标">
                ${ee.kpis.map(j=>{const r=Ot(j.value,j.unit);return`
                      <div class="lov-kpi-cell" title="${r.title}">
                        <span class="lov-kpi-label">${j.label}</span>
                        <div class="lov-kpi-value">
                          <span>${r.value}</span>
                          ${r.unit?`<span class="lov-kpi-unit">${r.unit}</span>`:""}
                        </div>
                        <span class="lov-kpi-delta">${j.delta??"与基线持平"}</span>
                      </div>`}).join("")}
              </div>

              <section class="lov-section">
                <div class="lov-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="lov-section-title">${h?.label??"趋势"}趋势（${ee.unit}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${H.label} · 更新于 ${ee.updatedAt.slice(5,16).replace("T"," ")}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${se}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
                        <span class="lov-switch-thumb"></span>
                      </button>
                    </label>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${te==="chart"}" data-chart-mode="chart">趋势图</button>
                      <button class="pacom-tab" aria-selected="${te==="table"}" data-chart-mode="table">明细原表</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-card" style="gap:10px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                    <span class="pacom-row-sub">
                      ${Se.length>0?`关注：${Se.map(j=>j.zoneName).join("、")} 指标偏高，建议前往智能策略优化启停时段。`:`${h?.desc??"空间运行洞察"} · ${we.summary}`}
                    </span>
                    <button class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-strategy="1">去智能策略优化 →</button>
                  </div>
                  ${te==="chart"?Rt(ee,se):`
                      <div class="lov-table-wrap">
                        <table class="lov-table">
                          <thead>
                            <tr>
                              <th>统计时段</th>
                              <th>实测值（${ee.unit}）</th>
                              <th>基线参考</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${ee.series.map(j=>{const r=typeof j.baseline=="number"&&j.value>j.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${j.label}</strong></td>
                                    <td>${j.value.toLocaleString("en-US")}</td>
                                    <td>${j.baseline!==void 0?j.baseline.toLocaleString("en-US"):"-"}</td>
                                    <td><span class="pacom-badge ${r?"pacom-badge--warning":"pacom-badge--online"}">${r?"超基线":"正常"}</span></td>
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
                    <span class="pacom-row-sub">${ee.zoneBreakdown.length} 个功能区</span>
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
                          ${ee.zoneBreakdown.map(j=>{const r=Math.max(8,Math.round(j.value/Ee*100));return`
                                <tr>
                                  <td style="font-weight:500;">${j.zoneName.replace(/^7F\s*/,"")}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${r}%; height:100%; border-radius:999px; background:${j.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${j.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${j.unit}</span></td>
                                  <td>
                                    <span class="pacom-badge ${j.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${j.status==="warning"?"偏高关注":"正常"}
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
                    <h2 class="lov-section-title">${le?"E7F 空间对照预览":l==="energy"&&oe==="load"?"峰谷负荷分布（Load Profile）":we.title}</h2>
                    ${!le&&l==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${oe==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${oe==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${le?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${le?'<img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
                        ${l==="environment"?`
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
                        ${(l==="energy"&&oe==="load"?Tt:we.items).map(j=>`
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                                <span style="font-weight:500; color:var(--pacom-text-primary);">${j.name}</span>
                                <span class="pacom-row-sub">${j.detail} · <strong style="color:var(--pacom-text-primary);">${j.pct}%</strong></span>
                              </div>
                              <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                <div style="width:${Math.min(100,j.pct)}%; height:100%; border-radius:999px; background:${j.color};"></div>
                              </div>
                            </div>`).join("")}`}
                  </div>
                </section>
              </div>
            </div>`}
      </div>
    `,Ue(e,{onToggle:()=>{K=!K,ne(),K&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:j=>{z=j,ne();const r=e.querySelector("[data-global-space-search]");r&&(r.focus(),r.setSelectionRange(j.length,j.length))},onPick:j=>{y=j,X=j.level==="all-projects"||j.level==="project"?p.projectId:j.level==="building"?p.buildingId:p.floorId,K=!1,ne()}}),e.querySelectorAll("[data-cat]").forEach(j=>{j.addEventListener("click",()=>{M=j.dataset.cat??"energy",be="",M==="timeseries"?ne():ue()})}),e.querySelector("[data-range-select]")?.addEventListener("change",j=>{Y=j.currentTarget.value??"7d",ue()}),e.querySelector("[data-custom-start]")?.addEventListener("change",j=>{T=j.currentTarget.value}),e.querySelector("[data-custom-end]")?.addEventListener("change",j=>{pe=j.currentTarget.value}),e.querySelectorAll("[data-chart-mode]").forEach(j=>{j.addEventListener("click",()=>{te=j.dataset.chartMode??"chart",ne()})}),e.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{se=!se,ne()}),e.querySelectorAll("[data-energy-right]").forEach(j=>{j.addEventListener("click",()=>{oe=j.dataset.energyRight??"breakdown",ne()})}),e.querySelector("[data-export-csv]")?.addEventListener("click",()=>{J?Ut(Ce):Vt(ee)}),e.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{le=!le,ne()}),e.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),e.querySelectorAll("[data-ts-expand]").forEach(j=>{j.addEventListener("click",()=>{const r=j.dataset.tsExpand;r&&(N.has(r)?N.delete(r):N.add(r),ne())})}),e.querySelectorAll("[data-ts-point]").forEach(j=>{j.addEventListener("change",()=>{const r=j.dataset.tsPoint;r&&(j.checked?w.add(r):w.delete(r),be="",ne())})}),e.querySelectorAll("[data-ts-mode]").forEach(j=>{j.addEventListener("click",()=>{u=j.dataset.tsMode??"grouped",ne()})}),e.querySelector("[data-ts-interval]")?.addEventListener("change",j=>{I=j.currentTarget.value??"1h",ne()}),e.querySelector("[data-ts-compare]")?.addEventListener("click",()=>{i=!i,ne()}),e.querySelector("[data-ts-share]")?.addEventListener("click",()=>{const r=`#analysis?tab=timeseries&points=${encodeURIComponent(Array.from(w).join(","))}&mode=${u}&interval=${I}`,b=`${window.location.origin}${window.location.pathname}${r}`;navigator.clipboard?.writeText&&navigator.clipboard.writeText(b).catch(()=>{}),window.history.replaceState(null,"",r),be=`已复制分享链接（含 ${w.size} 个测点、${u==="grouped"?"按单位分组":"单图叠合"}、${I} 粒度）。`,ne()}),e.querySelectorAll("[data-load-fav]").forEach(j=>{j.addEventListener("click",()=>{const r=V.find(b=>b.id===j.dataset.loadFav);r&&(w.clear(),r.pointIds.forEach(b=>{w.add(b);const G=b.split(":")[0];G&&N.add(G)}),u=r.mode,I=r.interval,be=`已加载收藏视图「${r.name}」。`,ne())})}),e.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if(w.size===0)return;const j=`自定义对比 #${V.length+1}（${w.size} 测点）`;V.push({id:`fav-${Date.now()}`,name:j,pointIds:Array.from(w),mode:u,interval:I}),be=`已保存当前时序配置为「${j}」。`,ne()})}await ue()}const Wt={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},Zt={frozen:"已冻结",draft:"草稿",delivered:"已交付"},st=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"每层建议 2–3 个 Proxy，空旷 20–30m 或拐角可按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 避免广播干扰；自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度 0–10 级调光；自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造；支持通断控制"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay 保障吞吐"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"1 层 1 网标准配置，承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙/拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关接入，无需加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485/通讯管理机接入，记录厂家编码与表号"}],lt=[{id:"doc-hvac-7f",name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",name:"E7F_协议点位与蓝牙Mesh映射台账.xlsx",category:"点位台账",boundScope:"E栋 7F · 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}],Gt={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function L(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function vt(e){const t=e.match(/(-?\d+)/);if(!t)return 0;const a=Number(t[1]);return e.toUpperCase().startsWith("B")?-Math.abs(a):a}function Kt(e){return e.category==="gateway"?e.name.includes("蓝牙")?"蓝牙适配器":"主控网关":e.category==="lighting"?e.name.includes("702")?"702 照明":e.name.slice(0,6):e.category==="hvac"?e.name.includes("VAV")?"VAV-02":e.name.includes("FCU")?"FCU-01":e.name.slice(0,6):e.category==="sensor"?"环境传感":e.name.slice(0,6)}function Yt(e,t){const a=e.status!=="connected",s=t.filter(n=>n.hardwareBinding?.protocol===e.protocol);return s.length>0?s.map(n=>{const d=n.connectivity==="offline"||a;return{pointName:n.category==="hvac"?"送风温度 / 阀门开度":n.category==="lighting"?"回路开关 / 亮度反馈":n.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:n.name,value:d?"无上报":n.category==="hvac"?"23.4°C · 62%":n.category==="lighting"?"开启 · 80%":n.category==="sensor"?"23.2°C · 640 ppm":"负载 24% · 18ms",interval:"60s",lastSeen:d?"46 分钟前":"12 秒前",quality:d?n.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${e.protocol.toUpperCase()} 采集通道汇总点`,deviceName:e.name,value:a?"采样延迟":"正常上报",interval:"60s",lastSeen:a?"38 分钟前":"9 秒前",quality:a?"delayed":"online"}]}async function Xt(e,t,a){const s=new URLSearchParams(window.location.hash.split("?")[1]??"").get("sec");let n=s==="floors"?"floor_zones":s==="projects"?"project_building":s==="floorplan"||s==="devices"?"floorplan":s==="inventory"?"ledger":s==="connections"?"connections":"overview",d=Be(),q=!1,_="",P="device",Q="all",M="",Y=!1,T=!1,pe="mesh",y=1,K=0,z=0,X=await t.getSpatialTree(),te=[],se=[],oe=[];const le=[],re=new Map,me=new Map,ye=[],k={...Gt},A=[];let U=d.level==="floor"?d.floorId:p.floorId,u=d.level==="building"||d.level==="floor"?d.buildingId:p.buildingId,I=null,i=!1,c=!1,w=!1,N=!1,V=!1,be=null,ue=null,ne=null,J=3,l=!1,h=[],H=null,ee="",Se="";const we=new Map([["dev-e7f-gw-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-02",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-env-01",{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}]]),Ee=[{id:"lm-1",deviceId:"dev-e7f-lt-01",channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],Ce=[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:p.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:p.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:p.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:p.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],j=new Map;function r(){return{...X,floors:b(),zones:ce()}}function b(){return[...X.floors,...le].map($=>{const W=re.get($.id);return W?{...$,plan:{floorId:$.id,imageUrl:W,planVersion:($.plan?.planVersion??0)+1,updatedAt:new Date().toISOString()}}:$})}function G($){return[...b().filter(W=>W.buildingId===$)].sort((W,o)=>vt(o.name)-vt(W.name))}function ce(){return[...X.zones,...ye]}function ie($){return[...$===p.floorId?te:[],...A.filter(o=>o.floorId===$)]}function Ie($){return $?ce().find(W=>W.id===$)?.name.replace(/^7F\s*/,"")??$:"未分配功能区"}function De($){U=$;const W=b().find(o=>o.id===$);W&&(u=W.buildingId,d=dt({level:"floor",projectId:p.projectId,buildingId:W.buildingId,floorId:W.id})),I=null,T=!1,c=!1,y=1,K=0,z=0}async function Ae(){Se="";const[$,W,o,g]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(p.floorId).catch(()=>[]),t.listConnections(p.projectId),t.listDeliveryBatches(p.floorId)]);X=$,te=W,se=o,oe=g;const v=ie(U);I&&!v.some(he=>he.id===I)&&(I=null,T=!1),i=v.find(he=>he.id===I)?.physicalInstalled??!1,ae()}function je(){const $=e.querySelector('[data-role="dep-viewport"]');$&&($.style.transform=`translate(${K}px, ${z}px) scale(${y})`);const W=e.querySelector('[data-role="dep-zoom-label"]');W&&(W.textContent=`${Math.round(y*100)}%`)}function _e($){Se="",$.connectivity==="offline"?Se=`单机回读自检未通过（FAIL）：「${$.name}」当前离线，请核查网关链路或中继覆盖。`:ee=`单机回读自检通过（PASS）：「${$.name}」指令下发与状态回读一致，已安全复位。`,ae()}function Te(){Se="";const $=ie(U),W=$.filter(E=>E.connectivity==="offline"),o=$.length-W.length,g=new Date;H={ranAt:`${String(g.getHours()).padStart(2,"0")}:${String(g.getMinutes()).padStart(2,"0")}:${String(g.getSeconds()).padStart(2,"0")}`,total:$.length,passed:o,failed:W.length,failedNames:W.map(E=>E.name)},W.length>0?Se=`全层批量自检完成：${o}/${$.length} 台通过，${W.length} 台异常（${W.map(E=>E.name).join("、")}）。`:ee=`全层批量自检全部通过（${o}/${$.length}），设备已自动安全复位。`,ae()}function ke(){const $=ie(U),W=[],o=$.filter(Z=>Z.connectivity==="offline"),g=$.filter(Z=>!Z.planPoint),v=$.filter(Z=>we.get(Z.id)?.proxy).length,E=$.filter(Z=>we.get(Z.id)?.relay).length,he=$.length?E/$.length:0;o.length>0?o.forEach(Z=>W.push({level:"fail",title:`节点不可达：${Z.name}`,detail:"建议检查供电、通信端子，若属无线节点可在遮挡拐角处增设中继节点。",deviceId:Z.id})):W.push({level:"ok",title:"全网节点可达性正常",detail:`${$.length} 台设备均正常响应心跳。`}),v<1?W.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，方便现场 App 接入网络。"}):W.push({level:"ok",title:`代理节点配置合理（${v} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),he>.25&&$.length>=4&&W.push({level:"warn",title:`中继比例偏高（${Math.round(he*100)}%）`,detail:"建议中继节点控制在总设备数 10% 左右，避免广播风暴。"}),g.length>0&&W.push({level:"warn",title:`尚有 ${g.length} 台未完成图纸标点`,detail:"请在「图纸标点」中补齐坐标以便施工定位。"}),h=W,ee=`已完成蓝牙 Mesh 网络体检（检测 ${$.length} 台节点，发现 ${W.filter(Z=>Z.level!=="ok").length} 项关注）。`,ae()}function Xe(){const $=ie(U),W=[["设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...$.map(E=>[E.name,E.category,Ie(E.logicalZoneId),E.planPoint?`${Math.round(E.planPoint.x*100)}%/${Math.round(E.planPoint.y*100)}%`:"未标点",E.hardwareBinding?`${E.hardwareBinding.protocol} ${E.hardwareBinding.networkAddress}`:"未绑定",E.physicalInstalled?"已复核":"待复核",E.connectivity==="online"?"在线":"离线"].join(","))],o=new Blob([`\uFEFF${W.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),g=URL.createObjectURL(o),v=document.createElement("a");v.href=g,v.download="pacom-deployment-inventory.csv",v.click(),URL.revokeObjectURL(g)}const x={overview:"部署总览",project_building:"项目与楼宇",floor_zones:"楼层底图与分区",floorplan:"图纸标点",ledger:"设备台账",groups:"双轨分组",network_topo:"网络与拓扑",connections:"系统接入"};function B(){const $=(W,o,g)=>`
      <button type="button" class="lov-unified-item" aria-current="${n===W}" data-dep-nav="${W}">
        ${ge(o,16)}
        <span>${g}</span>
      </button>`;return`
      <aside class="lov-unified-rail" aria-label="系统部署菜单">
        <div class="lov-unified-group">
          ${$("overview","chart-column","部署总览")}
        </div>
        <div class="lov-unified-group">
          <div class="lov-unified-group-title">项目配置</div>
          ${$("project_building","building-2","项目与楼宇")}
          ${$("floor_zones","layers","楼层底图与分区")}
        </div>
        <div class="lov-unified-group">
          <div class="lov-unified-group-title">设备部署</div>
          ${$("floorplan","map-pin","图纸标点")}
          ${$("ledger","list","设备台账")}
          ${$("groups","folder-kanban","双轨分组")}
          ${$("network_topo","network","网络与拓扑")}
        </div>
        <div class="lov-unified-group">
          ${$("connections","plug","系统接入")}
        </div>
      </aside>
    `}function F($){return n==="overview"?`
        <button type="button" class="pacom-btn" data-export-inv="1">导出台账</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${$?"":"disabled"}>+ 交付冻结</button>
      `:n==="floorplan"?'<button type="button" class="pacom-btn" data-export-inv="1">导出施工标点表</button>':n==="ledger"?'<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ftt="1">一键全层自检 (FTT)</button>':n==="groups"?`<button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-group="1" ${$?"":"disabled"}>${V?"收起表单":"+ 新建分组"}</button>`:n==="network_topo"?`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">一键网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${$?"":"disabled"}>${l?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `:n==="connections"?`
        <button type="button" class="pacom-btn" data-edge-restart="service" ${$?"":"disabled"}>重启边缘服务</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-conn="1" ${$?"":"disabled"}>${N?"收起向导":"+ 新增接入通道"}</button>
      `:`<span class="pacom-badge ${$?"pacom-badge--online":"pacom-badge--warning"}">${$?"可编辑":"只读"}</span>`}function m(){const $=G(u),W=$.filter(Z=>!!Z.plan).length,o=$.flatMap(Z=>ie(Z.id)),g=o.filter(Z=>!!Z.planPoint).length,v=o.filter(Z=>Z.connectivity==="online").length,E=o.filter(Z=>Z.physicalInstalled).length,he=$.filter(Z=>ie(Z.id).length>0&&!l).length;return`
      <div class="lov-kpi-strip lov-kpi-strip--5" role="region" aria-label="整栋 5 步部署流水线">
        <button type="button" class="lov-kpi-cell ${W===$.length?"lov-gate-ok":"lov-gate-warn"}" data-dep-nav="floor_zones" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="lov-kpi-label">1. 空间与底图</span>
          <div class="lov-kpi-value">${W}<span class="lov-kpi-unit">/ ${$.length} 层</span></div>
          <span class="lov-kpi-delta">${W===$.length?"全部底图就绪":`尚缺 ${$.length-W} 层底图 →`}</span>
        </button>
        <button type="button" class="lov-kpi-cell ${g===o.length?"lov-gate-ok":"lov-gate-warn"}" data-dep-nav="floorplan" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="lov-kpi-label">2. 云端标点</span>
          <div class="lov-kpi-value">${g}<span class="lov-kpi-unit">/ ${o.length} 台</span></div>
          <span class="lov-kpi-delta">含 ${Ee.length} 处回路灯点</span>
        </button>
        <button type="button" class="lov-kpi-cell ${v===o.length?"lov-gate-ok":"lov-gate-warn"}" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="lov-kpi-label">3. 入网在线</span>
          <div class="lov-kpi-value">${v}<span class="lov-kpi-unit">/ ${o.length} 台</span></div>
          <span class="lov-kpi-delta">${o.length-v>0?`${o.length-v} 台离线 →`:"全量在线"}</span>
        </button>
        <button type="button" class="lov-kpi-cell ${l?"lov-gate-warn":"lov-gate-ok"}" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="lov-kpi-label">4. 边缘同步</span>
          <div class="lov-kpi-value">${he}<span class="lov-kpi-unit">/ ${$.length} 层</span></div>
          <span class="lov-kpi-delta">${l?"有变更待下发 →":`基线 v${J}`}</span>
        </button>
        <button type="button" class="lov-kpi-cell ${E===o.length?"lov-gate-ok":"lov-gate-warn"}" data-dep-nav="ledger" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="lov-kpi-label">5. 复核自检</span>
          <div class="lov-kpi-value">${E}<span class="lov-kpi-unit">/ ${o.length} 台</span></div>
          <span class="lov-kpi-delta">${E===o.length?"可交付冻结":`待复核 ${o.length-E} 台 →`}</span>
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
                ${$.map(Z=>{const S=ie(Z.id),xe=ce().filter(Re=>Re.floorId===Z.id),O=S.filter(Re=>!!Re.planPoint).length,ze=S.filter(Re=>Re.connectivity==="online").length,Qe=S.filter(Re=>Re.physicalInstalled).length,Je=!!Z.plan,rt=Je&&S.length>0&&O===S.length&&Qe===S.length&&ze===S.length&&!l;return`
                      <tr>
                        <td><strong>${L(Z.name)}</strong><div class="pacom-row-sub">${Z.areaSqm?`${Z.areaSqm} m²`:"待补面积"}</div></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="floor_zones" data-matrix-floor="${L(Z.id)}"><span class="pacom-dot ${Je?"pacom-dot--online":"pacom-dot--offline"}"></span><span>${Je?`已传图 · ${xe.length} 区`:"待传底图"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="floorplan" data-matrix-floor="${L(Z.id)}"><span class="pacom-dot ${S.length>0&&O===S.length?"pacom-dot--online":S.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${S.length>0?`${O}/${S.length}`:"未标点"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${L(Z.id)}"><span class="pacom-dot ${S.length>0&&ze===S.length?"pacom-dot--online":S.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${S.length>0?`${ze}/${S.length}`:"—"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${L(Z.id)}"><span class="pacom-dot ${S.length===0?"pacom-dot--offline":l?"pacom-dot--warning":"pacom-dot--online"}"></span><span>${S.length===0?"—":l?"待同步":`v${J}`}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="ledger" data-matrix-floor="${L(Z.id)}"><span class="pacom-dot ${S.length>0&&Qe===S.length?"pacom-dot--online":S.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${S.length>0?`${Qe}/${S.length}`:"—"}</span></button></td>
                        <td style="text-align:right;"><span class="pacom-badge ${rt?"pacom-badge--online":S.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">${rt?"可验收交付":S.length>0?"实施中":"待配置"}</span></td>
                      </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      ${H?`<div class="lov-banner ${H.failed===0?"lov-banner--ok":"lov-banner--critical"}">
              <div class="lov-banner-text">
                <span class="lov-banner-title">最近批量自检（FTT） · ${H.ranAt}</span>
                <span class="lov-banner-sub">通过 ${H.passed}/${H.total} 台${H.failedNames.length?` · 异常：${H.failedNames.join("、")}`:" · 全部安全复位"}</span>
              </div>
            </div>`:""}

      <section class="lov-section">
        <div class="lov-section-head">
          <h2 class="lov-section-title">交付冻结基线记录</h2>
          <span class="pacom-row-sub">共 ${oe.length} 条冻结快照</span>
        </div>
        <div class="lov-table-card">
          <div class="lov-table-wrap">
            <table class="lov-table">
              <thead><tr><th>版本标签</th><th>现场核验进度</th><th>冻结人与备注</th><th>状态</th></tr></thead>
              <tbody>
                ${oe.map(Z=>`
                    <tr>
                      <td><div style="font-weight:500;">${L(Z.versionTag)}</div><div class="pacom-row-sub"><code>${L(Z.id)}</code></div></td>
                      <td><strong>${Z.verifiedCount}</strong> / ${Z.deviceCount} 台</td>
                      <td><div>${L(Z.frozenBy)}</div><div class="pacom-row-sub">${L(Z.note??"-")}</div></td>
                      <td><span class="pacom-badge pacom-badge--accent">${Zt[Z.status]??Z.status}</span></td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function f($){const W=X.projects[0],o=X.buildings.find(g=>g.id===u)??X.buildings[0];return`
      <div style="width:100%; max-width:960px; display:flex; flex-direction:column; gap:20px;">
        <section class="lov-section">
          <div class="lov-section-head">
            <h2 class="lov-section-title">项目基础信息</h2>
            <span class="pacom-badge pacom-badge--accent">经纬度驱动气象与能耗基准</span>
          </div>
          <form class="lov-settings-card" data-save-project="1">
            <div class="lov-setting-row">
              <div class="lov-setting-meta"><span class="lov-setting-title">项目名称与城市</span><span class="lov-setting-desc">用于全局路径导航与多园区地图定位</span></div>
              <div class="lov-setting-control"><input class="pacom-input" name="pName" value="${L(W?.name??"广实2号园")}" style="width:180px;" ${$?"":"disabled"} /><input class="pacom-input" name="pCity" value="${L(W?.city??"广州市")}" style="width:120px;" ${$?"":"disabled"} /></div>
            </div>
            <div class="lov-setting-row">
              <div class="lov-setting-meta"><span class="lov-setting-title">详细地址与地理坐标</span><span class="lov-setting-desc">自动匹配周边气象站实况温度与湿度</span></div>
              <div class="lov-setting-control"><input class="pacom-input" name="pAddr" value="${L(W?.address??"")}" style="width:220px;" ${$?"":"disabled"} /><input class="pacom-input" name="pLngLat" value="113.3824, 23.0652" style="width:150px;" ${$?"":"disabled"} /></div>
            </div>
            <div class="lov-setting-row" style="justify-content:flex-end;">
              <button type="submit" class="pacom-btn pacom-btn--primary" ${$?"":"disabled"}>保存项目信息</button>
            </div>
          </form>
        </section>

        ${o?`
            <section class="lov-section">
              <div class="lov-section-head">
                <h2 class="lov-section-title">楼宇实景图：${L(o.name)}</h2>
                <span class="pacom-row-sub">建筑面积 ${o.areaSqm??"-"} m² · 地上 ${o.aboveFloors} 层</span>
              </div>
              <div class="pacom-card" style="gap:14px;">
                <div style="display:grid; grid-template-columns:minmax(0,1.2fr) minmax(240px,1fr); gap:16px; align-items:center;">
                  <div style="border-radius:12px; overflow:hidden; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                    <img src="${L(me.get(o.id)??o.imageUrl??"./media/building-e.png")}" alt="${L(o.name)}" style="width:100%; max-height:240px; object-fit:contain; display:block;" />
                  </div>
                  <div class="dep-upload-drop">
                    <strong style="font-size:13px; font-weight:500;">上传 / 替换楼宇实景图</strong>
                    <span class="pacom-row-sub">支持 PNG / WebP / JPG，用于空间总览整栋视图展示</span>
                    <label class="pacom-btn" style="cursor:pointer;">
                      <span>选择本地图片</span>
                      <input type="file" accept="image/*" data-upload-bld="${L(o.id)}" style="display:none;" ${$?"":"disabled"} />
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
              <form class="lov-settings-card" data-batch-floors="${L(o.id)}">
                <div class="lov-setting-row">
                  <div class="lov-setting-meta">
                    <span class="lov-setting-title">起止楼层范围</span>
                    <span class="lov-setting-desc">例如 1 到 6 自动补齐 1F–6F，已存在楼层自动跳过</span>
                  </div>
                  <div class="lov-setting-control">
                    <input class="pacom-input" name="fromFloor" type="number" min="1" max="50" value="1" style="width:72px;" ${$?"":"disabled"} />
                    <span class="pacom-row-sub">F 至</span>
                    <input class="pacom-input" name="toFloor" type="number" min="1" max="50" value="6" style="width:72px;" ${$?"":"disabled"} />
                    <span class="pacom-row-sub">F</span>
                    <label style="display:inline-flex; align-items:center; gap:5px; font-size:12px; margin-left:6px;"><input type="checkbox" name="includeB1" checked ${$?"":"disabled"} />B1</label>
                    <label style="display:inline-flex; align-items:center; gap:5px; font-size:12px;"><input type="checkbox" name="includeRF" checked ${$?"":"disabled"} />RF</label>
                    <button type="submit" class="pacom-btn pacom-btn--primary" ${$?"":"disabled"}>批量生成</button>
                  </div>
                </div>
              </form>
            </section>`:""}
      </div>
    `}function R($){const W=G(u),o=W.find(v=>v.id===U)??W[0],g=o?ce().filter(v=>v.floorId===o.id):[];return`
      <div style="width:100%; max-width:960px; display:flex; flex-direction:column; gap:20px;">
        <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
          ${W.map(v=>`
              <button type="button" class="lov-count-pill" aria-pressed="${o?.id===v.id}" data-pick-floor-pill="${L(v.id)}">
                <span class="pacom-dot ${v.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                <span>${L(v.name)}</span>
              </button>`).join("")}
        </div>

        ${o?`
            <section class="lov-section">
              <div class="lov-section-head">
                <div style="display:flex; align-items:center; gap:8px;">
                  <h2 class="lov-section-title">${L(o.name)} · 2D 平面底图</h2>
                  <span class="pacom-badge pacom-badge--online">蓝牙 Mesh 网络已初始化</span>
                </div>
                <button type="button" class="pacom-btn pacom-btn--primary" data-dep-nav="floorplan">进入本层图纸标点 →</button>
              </div>
              <div class="pacom-card" style="gap:14px;">
                <div style="display:grid; grid-template-columns:minmax(0,1.35fr) minmax(240px,1fr); gap:16px; align-items:center;">
                  <div style="border-radius:12px; overflow:hidden; background:var(--pacom-surface-primary); min-height:200px; display:flex; align-items:center; justify-content:center; border:var(--hw) solid var(--pacom-border-subtle);">
                    ${o.plan?`<img src="${L(o.plan.imageUrl)}" alt="${L(o.name)} 平面图" style="width:100%; max-height:280px; object-fit:contain; display:block;" />`:'<span class="pacom-row-sub">暂未上传 2D 平面底图，请在右侧选择真实图纸</span>'}
                  </div>
                  <div class="dep-upload-drop">
                    <strong style="font-size:13px; font-weight:500;">${o.plan?"替换本层 2D 平面底图":"上传本层 2D 平面底图"}</strong>
                    <span class="pacom-row-sub">推荐清晰建筑线条 PNG / WebP（宽度 ≤ 3000px，体积 ≤ 500KB）</span>
                    <label class="pacom-btn pacom-btn--primary" style="cursor:pointer;">
                      <span>选择真实平面图</span>
                      <input type="file" accept="image/*" data-upload-floor="${L(o.id)}" style="display:none;" ${$?"":"disabled"} />
                    </label>
                  </div>
                </div>
              </div>
            </section>

            <section class="lov-section">
              <div class="lov-section-head">
                <h2 class="lov-section-title">本层功能区清单</h2>
                <span class="pacom-row-sub">${g.length} 个功能区</span>
              </div>
              <div class="lov-settings-card">
                ${g.map(v=>`
                    <div class="lov-setting-row" style="padding:11px 0;">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">${L(v.name)} <span class="pacom-badge pacom-badge--neutral">${L(v.category)}</span></span>
                      </div>
                      <span class="pacom-row-sub">${ie(o.id).filter(E=>E.logicalZoneId===v.id).length} 台设备</span>
                    </div>`).join("")}
                <form class="lov-setting-row" style="padding:12px 0; gap:8px;" data-add-zone="${L(o.id)}">
                  <input class="pacom-input" name="zoneName" placeholder="输入新功能区名称（如：东侧会议室）" required ${$?"":"disabled"} />
                  <select class="pacom-select" name="zoneCat" ${$?"":"disabled"}>
                    <option value="lab">实验区</option>
                    <option value="office">办公区</option>
                    <option value="meeting">会议室</option>
                    <option value="corridor">走廊/弱电</option>
                    <option value="utility">机房/设备间</option>
                  </select>
                  <button type="submit" class="pacom-btn" ${$?"":"disabled"}>+ 添加功能区</button>
                </form>
              </div>
            </section>

            <section class="lov-section">
              <div class="lov-section-head">
                <h2 class="lov-section-title">竣工图纸与设备手册附件</h2>
                <span class="pacom-row-sub">共 ${lt.length} 份工程文档</span>
              </div>
              <div class="lov-table-card">
                <div class="lov-table-wrap">
                  <table class="lov-table">
                    <thead><tr><th>文档名称</th><th>类型</th><th>关联范围</th><th style="text-align:right;">操作</th></tr></thead>
                    <tbody>
                      ${lt.map(v=>`
                        <tr>
                          <td><div style="font-weight:500;">${v.name}</div><div class="pacom-row-sub">${v.size} · ${v.updatedAt}</div></td>
                          <td><span class="pacom-badge pacom-badge--neutral">${v.category}</span></td>
                          <td><span class="pacom-row-sub">${v.boundScope}</span></td>
                          <td style="text-align:right;"><button type="button" class="pacom-btn" data-preview-doc="${v.id}">查阅</button></td>
                        </tr>`).join("")}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>`:""}
      </div>
    `}function C($){const W=G(u),o=W.find(O=>O.id===U)??W[0],g=ie(U),v=ce().filter(O=>O.floorId===U),E=T?g.find(O=>O.id===I)??null:null,he=E?we.get(E.id)??{proxy:!1,relay:!1,meshUuid:`mesh-${U.slice(-4)}`}:null,Z=E?Ee.filter(O=>O.deviceId===E.id):[],S=M.trim().toLowerCase(),xe=g.filter(O=>!(Q==="unverified"&&O.physicalInstalled||Q==="unplaced"&&O.planPoint||S&&!`${O.name} ${Ie(O.logicalZoneId)}`.toLowerCase().includes(S)));return`
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(420px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${ge("search",14)}
            <input class="pacom-hud-input" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${L(M)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill ${Y?"is-active":""}" data-toggle-hud-pool="1">设备池 ${g.length}</button>
            <button type="button" class="pacom-hud-pill" data-toggle-new-dev="1" ${$?"":"disabled"}>+ 标点</button>
          </div>

          ${Y||w?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:13px; font-weight:500;">${w?"新增设备标点":`${L(o?.name??"7F")} 设备池（${xe.length}）`}</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${ge("x",14)}</button>
                </div>
                ${w?`
                    <form data-create-dev="1" style="padding:12px; display:flex; flex-direction:column; gap:8px;">
                      <input class="pacom-input" name="devName" placeholder="设备名称（如：703 会议室三控面板）" required />
                      <select class="pacom-select" name="devPreset">${st.map(O=>`<option value="${O.key}">${O.label}</option>`).join("")}</select>
                      <select class="pacom-select" name="devZone">${v.map(O=>`<option value="${L(O.id)}">${L(O.name)}</option>`).join("")}</select>
                      <button type="submit" class="pacom-btn pacom-btn--primary">加入图纸并预设 Mesh 角色</button>
                    </form>`:`
                    <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                      <div class="lov-count-pills">
                        <button type="button" class="lov-count-pill" style="height:24px; padding:0 8px; font-size:11px;" aria-pressed="${Q==="all"}" data-dev-filter="all">全部 <span class="lov-count-num">${g.length}</span></button>
                        <button type="button" class="lov-count-pill" style="height:24px; padding:0 8px; font-size:11px;" aria-pressed="${Q==="unverified"}" data-dev-filter="unverified">待复核 <span class="lov-count-num">${g.filter(O=>!O.physicalInstalled).length}</span></button>
                        <button type="button" class="lov-count-pill" style="height:24px; padding:0 8px; font-size:11px;" aria-pressed="${Q==="unplaced"}" data-dev-filter="unplaced">未标点 <span class="lov-count-num">${g.filter(O=>!O.planPoint).length}</span></button>
                      </div>
                    </div>
                    <div class="pacom-list" style="padding:6px;">
                      ${xe.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">无匹配设备</div>':xe.map(O=>`
                                <div class="pacom-row ${O.id===I&&T?"is-selected":""}" data-pick-dev="${L(O.id)}" style="padding:8px;">
                                  <div style="min-width:0;">
                                    <div class="pacom-row-title" style="font-size:13px;">${L(O.name)}</div>
                                    <div class="pacom-row-sub">${L(Ie(O.logicalZoneId))} · ${O.physicalInstalled?"已复核":"待复核"}</div>
                                  </div>
                                  <span class="pacom-badge ${O.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${O.planPoint?"已标点":"未标点"}</span>
                                </div>`).join("")}
                    </div>`}
              </div>`:""}
        </div>

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${c?"crosshair":"grab"};">
          ${o?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${K}px, ${z}px) scale(${y});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${L(o.plan.imageUrl)}" alt="${L(o.name)} 平面图" />
                  ${P==="zone"?v.map(O=>{const ze=k[O.id];return ze?`<div class="pacom-zone-hotspot is-active" style="left:${ze.left}%; top:${ze.top}%; width:${ze.width}%; height:${ze.height}%;"><span class="pacom-zone-tag">${L(O.name.replace(/^7F\s*/,""))}</span></div>`:""}).join(""):""}
                  ${g.filter(O=>O.planPoint).map(O=>`
                      <button type="button" class="pacom-pin ${O.id===I&&T?"is-selected":""} ${O.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(O.planPoint.x*100).toFixed(2)}%; top:${(O.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${L(O.id)}" title="${L(O.name)}">
                        <span class="pacom-dot ${O.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${L(Kt(O))}</span>
                      </button>`).join("")}
                  ${P==="light_marker"||E?.category==="lighting"?Ee.filter(O=>g.some(ze=>ze.id===O.deviceId)).map(O=>`
                            <span class="dep-light-dot" style="left:${(O.x*100).toFixed(1)}%; top:${(O.y*100).toFixed(1)}%;" title="${L(O.label)}（${L(O.channel)}）">
                              ${ge("sparkles",12)}<span>${L(O.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-dep-nav="floor_zones">前往「楼层底图与分区」上传真实底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${W.map(O=>`
              <button type="button" class="pacom-elev-item ${O.id===U?"is-active":""}" data-scrubber-floor="${L(O.id)}" title="${L(O.name)}${O.plan?" · 已传底图":" · 待传底图"}">
                ${O.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${L(O.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标点画笔与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${P==="device"}" data-brush="device">设备标点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${P==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${P==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${ge("minus",14)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(y*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${ge("plus",14)}</button>
        </div>

        ${E?`
            <aside class="pacom-drawer" aria-label="设备部署属性">
              <div class="pacom-drawer-head">
                <div style="min-width:0;">
                  <h2 class="pacom-drawer-title">${L(E.name)}</h2>
                  <div class="pacom-row-sub">${L(Ie(E.logicalZoneId))} · v${E.version}</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${ge("x",16)}</button>
              </div>

              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-toggle-place="1" ${$?"":"disabled"}>${c?"点击图纸定位中…":"点图更新坐标"}</button>
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ping-dev="${L(E.id)}">Ping 闪灯 5s</button>
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ftt-test="1">单机自检</button>
              </div>

              ${E.category==="lighting"?`
                  <div class="pacom-control-box" style="gap:6px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span style="font-size:12px; font-weight:500;">回路可视化灯点（${Z.length}）</span>
                      <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:11px;" data-add-light-marker="${L(E.id)}" ${$?"":"disabled"}>+ 添加灯点</button>
                    </div>
                    ${Z.map(O=>`
                        <div class="pacom-receipt-item" style="padding:6px 8px; font-size:12px;">
                          <span><strong>${L(O.channel)}</strong> · ${L(O.label)}</span>
                          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:20px; padding:0 6px; font-size:11px;" data-del-light-marker="${L(O.id)}" ${$?"":"disabled"}>删</button>
                        </div>`).join("")}
                  </div>`:""}

              ${E.category!=="hvac"&&E.category!=="meter"&&he?`
                  <div class="pacom-control-box" style="gap:6px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span style="font-size:12px; font-weight:500;">蓝牙 Mesh 节点角色</span>
                      <code style="font-size:11px;">${L(he.meshUuid)}</code>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                      <span>Proxy 代理（建议每层 2–3 个）</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${he.proxy}" data-toggle-mesh-role="proxy" data-mesh-dev="${L(E.id)}" ${$?"":"disabled"}><span class="lov-switch-thumb"></span></button>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                      <span>Relay 中继（建议 ≤10%，面板默认关）</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${he.relay}" data-toggle-mesh-role="relay" data-mesh-dev="${L(E.id)}" ${$?"":"disabled"}><span class="lov-switch-thumb"></span></button>
                    </div>
                  </div>`:""}

              <form data-role="binding-form" class="pacom-control-box" style="gap:8px;">
                <span style="font-size:12px; font-weight:500;">硬件绑定与物理安装复核</span>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
                  <select class="pacom-select" style="height:28px; font-size:12px;" name="protocol" aria-label="通信协议">
                    ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(O=>`<option value="${O}" ${E.hardwareBinding?.protocol===O?"selected":""}>${O.toUpperCase()}</option>`).join("")}
                  </select>
                  <input class="pacom-input" style="height:28px; font-size:12px;" name="networkAddress" placeholder="网络地址/主题" value="${L(E.hardwareBinding?.networkAddress??"")}" />
                </div>
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                  <input class="pacom-input" style="height:28px; font-size:12px;" name="portOrChannel" placeholder="端口/回路" value="${L(E.hardwareBinding?.portOrChannel??"")}" />
                  <span style="display:inline-flex; align-items:center; gap:6px; font-size:12px; flex-shrink:0;">
                    <span>物理已复核</span>
                    <button type="button" class="lov-switch" role="switch" aria-checked="${i}" data-toggle-phys="1" ${$?"":"disabled"}><span class="lov-switch-thumb"></span></button>
                  </span>
                </div>
                <button class="pacom-btn pacom-btn--primary" type="submit" style="height:30px; font-size:13px;" ${$?"":"disabled"}>保存绑定与复核（v${E.version}）</button>
              </form>
            </aside>`:""}
      </main>
    `}function ve($){const W=ie(U),o=be?W.find(v=>v.id===be)??null:null,g=o?j.get(o.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450}:null;return`
      ${o&&g?`
          <form class="lov-settings-card" data-save-dev-params="${L(o.id)}">
            <div class="lov-setting-row">
              <div class="lov-setting-meta">
                <span class="lov-setting-title">设备参数配置：${L(o.name)}</span>
                <span class="lov-setting-desc">人感自动关灯延时、光照度开关门限与默认亮度参数</span>
              </div>
              <button type="button" class="pacom-drawer-close" data-close-param="1">${ge("x",16)}</button>
            </div>
            <div class="lov-setting-row" style="display:grid; grid-template-columns:repeat(4,1fr); gap:10px;">
              <label class="pacom-field"><span>自动关灯延时(分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${g.offDelayMin}" /></label>
              <label class="pacom-field"><span>恢复自动延时(分)</span><input class="pacom-input" name="restoreMin" type="number" value="${g.restoreMin}" /></label>
              <label class="pacom-field"><span>开灯光感门限(lx)</span><input class="pacom-input" name="luxOn" type="number" value="${g.luxOn}" /></label>
              <label class="pacom-field"><span>关灯光感门限(lx)</span><input class="pacom-input" name="luxOff" type="number" value="${g.luxOff}" /></label>
            </div>
            <div class="lov-setting-row" style="justify-content:flex-end;">
              <button type="submit" class="pacom-btn pacom-btn--primary" ${$?"":"disabled"}>下发设备参数</button>
            </div>
          </form>`:""}
      <section class="lov-section">
        <div class="lov-section-head">
          <h2 class="lov-section-title">设备四态台账（${W.length} 台）</h2>
          <span class="pacom-row-sub">图上标点 · 网络绑定 · 物理复核 · 在线态</span>
        </div>
        <div class="lov-table-card">
          <div class="lov-table-wrap">
            <table class="lov-table">
              <thead><tr><th>设备与功能区</th><th>1. 图上标点</th><th>2. 网络绑定</th><th>3. 物理复核</th><th>4. 在线态</th><th style="text-align:right;">操作</th></tr></thead>
              <tbody>
                ${W.map(v=>`
                    <tr>
                      <td><div style="font-weight:500;">${L(v.name)}</div><div class="pacom-row-sub">${L(Ie(v.logicalZoneId))} · v${v.version}</div></td>
                      <td><span class="pacom-badge ${v.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${v.planPoint?`${Math.round(v.planPoint.x*100)}%,${Math.round(v.planPoint.y*100)}%`:"未标点"}</span></td>
                      <td><span class="pacom-badge ${v.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${v.hardwareBinding?v.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                      <td><span class="pacom-badge ${v.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${v.physicalInstalled?"已复核":"待复核"}</span></td>
                      <td><span class="pacom-badge ${v.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${v.connectivity==="online"?"在线":"离线"}</span></td>
                      <td>
                        <div style="display:flex; justify-content:flex-end; gap:6px;">
                          <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ping-dev="${L(v.id)}">Ping</button>
                          <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-open-param="${L(v.id)}">参数</button>
                          <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ftt-dev="${L(v.id)}">自检</button>
                        </div>
                      </td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function fe(){const $=Ce.filter(o=>o.track==="mesh_auto"),W=Ce.filter(o=>o.track==="cloud_biz");return`
      ${V?`
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
            <h2 class="lov-section-title">端侧蓝牙 Mesh 自治组（${$.length}）</h2>
            <span class="pacom-badge pacom-badge--accent">自动纳入蓝牙适配器防漏报</span>
          </div>
          <div class="lov-settings-card">
            ${$.map(o=>`
                <div class="lov-setting-row">
                  <div class="lov-setting-meta">
                    <span class="lov-setting-title">${L(o.name)} <span class="pacom-badge pacom-badge--neutral">${L(o.groupType)}</span></span>
                    <span class="lov-setting-desc">成员 ${o.deviceIds.length} 台 · 断网仍可端侧自治联动</span>
                  </div>
                  <div class="lov-setting-control"><button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-test-group="${L(o.id)}">组控测试</button></div>
                </div>`).join("")}
          </div>
        </section>

        <section class="lov-section">
          <div class="lov-section-head">
            <h2 class="lov-section-title">云端业务分组（${W.length}）</h2>
            <span class="pacom-row-sub">空调 / 标牌 / 部门组，无需蓝牙配网</span>
          </div>
          <div class="lov-settings-card">
            ${W.map(o=>`
                <div class="lov-setting-row">
                  <div class="lov-setting-meta">
                    <span class="lov-setting-title">${L(o.name)} <span class="pacom-badge pacom-badge--neutral">${L(o.groupType)}</span></span>
                    <span class="lov-setting-desc">成员 ${o.deviceIds.length} 台 · 供首页批控与标牌复用</span>
                  </div>
                  <div class="lov-setting-control"><button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-test-group="${L(o.id)}">组控测试</button></div>
                </div>`).join("")}
          </div>
        </section>
      </div>
    `}function $e(){const $=ie(U),W=ce().filter(S=>S.floorId===U),o=$.filter(S=>S.category!=="hvac"&&S.category!=="meter"),g=o.filter(S=>we.get(S.id)?.proxy).length,v=o.filter(S=>we.get(S.id)?.relay).length,E=$.filter(S=>S.category==="gateway"),he=$.filter(S=>we.get(S.id)?.relay||we.get(S.id)?.proxy),Z=$.filter(S=>S.category!=="gateway");return`
      <div class="pacom-card" style="padding:14px 18px; gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <strong style="font-size:14px; font-weight:500;">本层蓝牙 Mesh 网络</strong>
            <span class="pacom-badge pacom-badge--online">协同锁空闲 · 可同步</span>
            <span class="pacom-row-sub">Mesh 节点 ${o.length} 台 · Proxy ${g} 个 · Relay ${v} 个 · 边缘基线 v${J}</span>
          </div>
        </div>
        ${h.length>0?`<div style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                ${h.map(S=>`
                    <div class="pacom-receipt-item" style="padding:8px 10px;">
                      <div><strong>${L(S.title)}</strong> <span class="pacom-row-sub">· ${L(S.detail)}</span></div>
                      <span class="pacom-badge ${S.level==="ok"?"pacom-badge--online":S.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${S.level==="ok"?"通过":S.level==="warn"?"建议优化":"异常"}</span>
                    </div>`).join("")}
              </div>`:""}
      </div>

      <section class="lov-section">
        <div class="lov-section-head">
          <h2 class="lov-section-title">自动生成设备拓扑（点击节点直达图纸标点）</h2>
          <div class="pacom-tabs">
            <button type="button" class="pacom-tab" aria-selected="${pe==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
            <button type="button" class="pacom-tab" aria-selected="${pe==="business"}" data-topo-mode="business">业务联动与供能流向</button>
          </div>
        </div>
        ${pe==="mesh"?`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:13px; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器</strong>
                ${E.map(S=>`
                    <button type="button" class="dep-topo-node ${S.connectivity==="offline"?"is-issue":""}" data-topo-jump="${L(S.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${L(S.name)}</strong><span class="pacom-badge pacom-badge--online">网桥中心</span></div>
                      <span class="pacom-row-sub">${L(S.hardwareBinding?.networkAddress??"-")} · 云边同步通道</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:13px; color:var(--pacom-text-secondary);">2. 代理与中继骨架（Proxy / Relay）</strong>
                ${he.length===0?'<div class="pacom-row-sub">暂未启用中继或代理节点，请在图纸标点抽屉中为传感器开启。</div>':he.map(S=>{const xe=we.get(S.id);return`
                            <button type="button" class="dep-topo-node ${S.connectivity==="offline"?"is-issue":""}" data-topo-jump="${L(S.id)}">
                              <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${L(S.name)}</strong><span class="pacom-badge pacom-badge--accent">${xe?.proxy?"Proxy":""}${xe?.proxy&&xe?.relay?" + ":""}${xe?.relay?"Relay":""}</span></div>
                              <span class="pacom-row-sub">${L(Ie(S.logicalZoneId))}</span>
                            </button>`}).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:13px; color:var(--pacom-text-secondary);">3. 末端节点（异常自动标红）</strong>
                ${Z.map(S=>`
                    <button type="button" class="dep-topo-node ${S.connectivity==="offline"?"is-issue":""}" data-topo-jump="${L(S.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${L(S.name)}</strong><span class="pacom-badge ${S.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${S.connectivity==="online"?"在线":"离线"}</span></div>
                      <span class="pacom-row-sub">${L(Ie(S.logicalZoneId))} · ${L(S.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                    </button>`).join("")}
              </div>
            </div>`:`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:13px; color:var(--pacom-text-secondary);">上游源头 / 传感触发</strong>
                ${$.filter(S=>S.category==="sensor"||S.category==="gateway").map(S=>`
                    <button type="button" class="dep-topo-node" data-topo-jump="${L(S.id)}">
                      <strong>${L(S.name)}</strong>
                      <span class="pacom-row-sub">${S.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:13px; color:var(--pacom-text-secondary);">受控末端（照明 / 暖通）</strong>
                ${$.filter(S=>S.category==="lighting"||S.category==="hvac").map(S=>`
                    <button type="button" class="dep-topo-node ${S.connectivity==="offline"?"is-issue":""}" data-topo-jump="${L(S.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${L(S.name)}</strong><span class="pacom-badge ${S.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${S.connectivity==="online"?"正常":"离线"}</span></div>
                      <span class="pacom-row-sub">服务：${L(Ie(S.logicalZoneId))}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:13px; color:var(--pacom-text-secondary);">服务功能区（影响面）</strong>
                ${W.map(S=>{const xe=$.filter(ze=>ze.logicalZoneId===S.id),O=xe.some(ze=>ze.connectivity==="offline");return`
                      <div class="dep-topo-node ${O?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${L(S.name.replace(/^7F\s*/,""))}</strong><span class="pacom-badge ${O?"pacom-badge--warning":"pacom-badge--online"}">${xe.length} 台设备</span></div>
                        <span class="pacom-row-sub">${O?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                      </div>`}).join("")}
              </div>
            </div>`}
      </section>
    `}function de(){const $=se.reduce((v,E)=>v+E.collectedPoints,0),W=se.reduce((v,E)=>v+E.calculatedPoints,0),o=se.filter(v=>v.status==="connected").length,g=se.filter(v=>v.status!=="connected");return`
      <div class="lov-kpi-strip" role="region" aria-label="系统接入健康度">
        <div class="lov-kpi-cell"><span class="lov-kpi-label">已连通网关通道</span><div class="lov-kpi-value">${o}<span class="lov-kpi-unit">/ ${se.length}</span></div><span class="lov-kpi-delta">含边缘网关与非 Mesh 子系统</span></div>
        <div class="lov-kpi-cell"><span class="lov-kpi-label">数据采集健康度</span><div class="lov-kpi-value">${se.length?Math.round(o/se.length*100):100}<span class="lov-kpi-unit">%</span></div><span class="lov-kpi-delta">区分网关断流与末端真故障</span></div>
        <div class="lov-kpi-cell"><span class="lov-kpi-label">原始采集点</span><div class="lov-kpi-value">${$}<span class="lov-kpi-unit">点</span></div><span class="lov-kpi-delta">协议直采实时遥测</span></div>
        <div class="lov-kpi-cell"><span class="lov-kpi-label">衍生计算点</span><div class="lov-kpi-value">${W}<span class="lov-kpi-unit">点</span></div><span class="lov-kpi-delta">能耗与聚合虚拟点位</span></div>
      </div>

      ${g.length>0?`<div class="lov-banner lov-banner--critical">
              <div class="lov-banner-text">
                <span class="lov-banner-title">检测到 ${g.length} 条采集通道通信降级（${g.map(v=>v.name).join("、")}）</span>
                <span class="lov-banner-sub">建议优先核查局域网 UDP/TCP 端口冲突、RS485 终端电阻与从站地址。</span>
              </div>
            </div>`:""}

      ${N?`
          <form class="lov-settings-card" data-create-conn="1">
            <div class="lov-setting-row">
              <div class="lov-setting-meta">
                <span class="lov-setting-title">新增子系统接入通道</span>
                <span class="lov-setting-desc">支持边缘网关、中央空调/线控网关、智能电表通讯机、空气质量与数字标牌（自动检测局域网端口冲突）</span>
              </div>
              <button type="button" class="pacom-drawer-close" data-toggle-new-conn="1">${ge("x",16)}</button>
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
                ${se.map(v=>{const E=Wt[v.status]??{label:v.status,cls:"pacom-badge--neutral"},he=v.status==="connected"?98:v.status==="degraded"?62:0,Z=he>=75?"var(--pacom-status-online)":he>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",S=ne===v.id,xe=S?Yt(v,te):[];return`
                      <tr>
                        <td><strong>${L(v.name)}</strong></td>
                        <td><span class="pacom-badge pacom-badge--neutral">${v.protocol.toUpperCase()}</span></td>
                        <td><code style="font-size:12px;">${L(v.endpoint)}</code></td>
                        <td>采集 ${v.collectedPoints} / 计算 ${v.calculatedPoints}</td>
                        <td style="min-width:130px;">
                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span class="pacom-badge ${E.cls}">${E.label}</span>
                            <span class="pacom-row-sub">${he}%</span>
                          </div>
                          <div class="lov-progress-track"><div class="lov-progress-fill" style="width:${he}%; background:${Z};"></div></div>
                        </td>
                        <td>
                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                            <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-expand-conn="${L(v.id)}">${S?"收起点位":"点位质量"}</button>
                            <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ping-conn="${L(v.id)}">测通</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost" style="height:28px; font-size:12px;" data-copy-endpoint="${L(v.id)}" data-endpoint-val="${L(v.endpoint)}">${ue===v.id?"已复制":"复制"}</button>
                          </div>
                        </td>
                      </tr>
                      ${S?`
                          <tr class="lov-table-detail-row">
                            <td colspan="6">
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                <div style="display:flex; justify-content:space-between; font-size:12px;">
                                  <strong>传感器 / 子设备采集质量明细（${L(v.name)}）</strong>
                                  <span class="pacom-row-sub">在线正常 · 延迟 &gt;30m · 断流 &gt;3×间隔</span>
                                </div>
                                ${xe.map(O=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${L(O.deviceName)}</strong> · ${L(O.pointName)}</span>
                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                        <span class="pacom-row-sub">当前 ${L(O.value)} · ${L(O.lastSeen)}</span>
                                        <span class="pacom-badge ${O.quality==="online"?"pacom-badge--online":O.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                          ${O.quality==="online"?"在线正常":O.quality==="delayed"?"延迟 >30m":"断流"}
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
    `}function ae(){const $=a.scope.canEditDeployment;e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${Ve({tree:r(),session:a,scope:d,isOpen:q,searchKeyword:_})}
            </div>
            <div class="pacom-header-meta">
              ${F($)}
            </div>
          </div>
        </header>

        <div class="lov-unified-sheet">
          ${B()}
          ${n==="floorplan"?`<div class="lov-unified-main--canvas">
                  ${ee?`<div class="lov-banner lov-banner--ok" style="margin-bottom:8px; flex-shrink:0;"><span class="lov-banner-title">${L(ee)}</span></div>`:""}
                  ${Se?`<div class="pacom-alert-banner" style="margin-bottom:8px; flex-shrink:0;">${L(Se)}</div>`:""}
                  ${C($)}
                </div>`:`
              <div class="lov-unified-main">
                <div class="lov-unified-inner">
                  <h2 class="lov-unified-title">${x[n]}</h2>
                  ${ee?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${L(ee)}</span></div>`:""}
                  ${Se?`<div class="pacom-alert-banner">${L(Se)}</div>`:""}
                  ${n==="overview"?m():n==="project_building"?f($):n==="floor_zones"?R($):n==="ledger"?ve($):n==="groups"?fe():n==="network_topo"?$e():de()}
                </div>
              </div>`}
        </div>
      </div>
    `,Oe()}function Oe(){Ue(e,{onToggle:()=>{q=!q,ae(),q&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:o=>{_=o,ae();const g=e.querySelector("[data-global-space-search]");g&&(g.focus(),g.setSelectionRange(o.length,o.length))},onPick:o=>{d=o,q=!1,o.level==="building"?u=o.buildingId:o.level==="floor"&&(u=o.buildingId,U=o.floorId,I=null,T=!1),ae()}}),e.querySelectorAll("[data-dep-nav]").forEach(o=>{o.addEventListener("click",()=>{n=o.dataset.depNav??"overview",ee="",Se="",ae()})}),e.querySelectorAll("[data-matrix-nav]").forEach(o=>{o.addEventListener("click",()=>{const g=o.dataset.matrixFloor;g&&De(g),n=o.dataset.matrixNav??"floorplan",ae()})}),e.querySelectorAll("[data-pick-floor-pill]").forEach(o=>{o.addEventListener("click",()=>{const g=o.dataset.pickFloorPill;g&&(De(g),ae())})}),e.querySelectorAll("[data-scrubber-floor]").forEach(o=>{o.addEventListener("click",()=>{const g=o.dataset.scrubberFloor;g&&(De(g),ae())})}),e.querySelector("[data-save-project]")?.addEventListener("submit",o=>{o.preventDefault(),ee="项目基础信息与经纬度坐标已更新。",ae()}),e.querySelector("[data-upload-bld]")?.addEventListener("change",o=>{const g=o.currentTarget,v=g.dataset.uploadBld,E=g.files?.[0];if(!v||!E)return;const he=new FileReader;he.onload=()=>{typeof he.result=="string"&&(me.set(v,he.result),ee=`已更新楼宇实景图「${E.name}」。`,ae())},he.readAsDataURL(E)}),e.querySelector("[data-upload-floor]")?.addEventListener("change",o=>{const g=o.currentTarget,v=g.dataset.uploadFloor,E=g.files?.[0];if(!v||!E)return;const he=new FileReader;he.onload=()=>{typeof he.result=="string"&&(re.set(v,he.result),ee=`已上传本层真实 2D 平面底图「${E.name}」，可立即进入图纸标点。`,ae())},he.readAsDataURL(E)}),e.querySelector("[data-batch-floors]")?.addEventListener("submit",o=>{o.preventDefault();const g=o.currentTarget.dataset.batchFloors,v=new FormData(o.currentTarget),E=Number(v.get("fromFloor")??1),he=Number(v.get("toFloor")??6),Z=new Set(b().filter(xe=>xe.buildingId===g).map(xe=>xe.name));let S=0;for(let xe=Math.min(E,he);xe<=Math.max(E,he);xe+=1){const O=`${xe}F`;Z.has(O)||(le.push({id:`floor-${g}-above-${xe}`,buildingId:g,kind:"above",level:xe,name:O,plan:null}),S+=1)}v.get("includeB1")&&!Z.has("B1")&&(le.push({id:`floor-${g}-below-1`,buildingId:g,kind:"below",level:-1,name:"B1",plan:null}),S+=1),v.get("includeRF")&&!Z.has("RF")&&(le.push({id:`floor-${g}-roof-1`,buildingId:g,kind:"roof",level:99,name:"RF",plan:null}),S+=1),ee=S>0?`已批量新增 ${S} 个楼层，并自动初始化各层默认蓝牙 Mesh 网络。`:"所选范围楼层均已存在，未重复创建。",ae()}),e.querySelector("[data-add-zone]")?.addEventListener("submit",o=>{o.preventDefault();const g=o.currentTarget.dataset.addZone,v=new FormData(o.currentTarget),E=String(v.get("zoneName")??"").trim(),he=String(v.get("zoneCat")??"office");if(!E)return;const Z=`zone-custom-${Date.now().toString(36)}`;ye.push({id:Z,floorId:g,name:E,category:he}),k[Z]={left:20,top:20,width:24,height:24},ee=`已添加功能区「${E}」。`,ae()});const $=e.querySelector("[data-dep-canvas-search]");$?.addEventListener("focus",()=>{!Y&&!w&&(Y=!0,ae(),e.querySelector("[data-dep-canvas-search]")?.focus())}),$?.addEventListener("input",o=>{M=o.currentTarget.value,Y=!0,w=!1,ae();const g=e.querySelector("[data-dep-canvas-search]");g&&(g.focus(),g.setSelectionRange(M.length,M.length))}),e.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{Y=!Y,Y&&(w=!1),ae()}),e.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{Y=!1,w=!1,ae()}),e.querySelector("[data-toggle-new-dev]")?.addEventListener("click",()=>{w=!w,w&&(Y=!1),ae()}),e.querySelectorAll("[data-brush]").forEach(o=>{o.addEventListener("click",()=>{P=o.dataset.brush??"device",ae()})}),e.querySelectorAll("[data-dep-zoom]").forEach(o=>{o.addEventListener("click",()=>{const g=o.dataset.depZoom;g==="in"?y=Math.min(2.6,Number((y+.2).toFixed(2))):g==="out"?y=Math.max(.6,Number((y-.2).toFixed(2))):(y=1,K=0,z=0),je()})});const W=e.querySelector('[data-role="dep-stage"]');if(W&&!c){let o=!1,g=0,v=0,E=0,he=0;W.addEventListener("pointerdown",S=>{S.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(o=!0,g=S.clientX,v=S.clientY,E=K,he=z,W.classList.add("is-panning"),W.setPointerCapture?.(S.pointerId))}),W.addEventListener("pointermove",S=>{o&&(K=E+(S.clientX-g),z=he+(S.clientY-v),je())});const Z=()=>{o&&(o=!1,W.classList.remove("is-panning"))};W.addEventListener("pointerup",Z),W.addEventListener("pointercancel",Z),W.addEventListener("wheel",S=>{S.preventDefault();const xe=S.deltaY<0?.12:-.12;y=Math.max(.6,Math.min(2.6,Number((y+xe).toFixed(2)))),je()},{passive:!1}),W.addEventListener("dblclick",S=>{S.target?.closest("button")||(y=1,K=0,z=0,je())})}e.querySelectorAll("[data-dev-filter]").forEach(o=>{o.addEventListener("click",()=>{Q=o.dataset.devFilter??"all",ae()})}),e.querySelector("[data-create-dev]")?.addEventListener("submit",o=>{o.preventDefault();const g=new FormData(o.currentTarget),v=String(g.get("devName")??"").trim(),E=String(g.get("devPreset")??"sensor"),he=String(g.get("devZone")??"")||null,Z=st.find(xe=>xe.key===E)??st[0],S=`dev-custom-${Date.now().toString(36)}`;A.push({id:S,name:v,category:Z.category,projectId:p.projectId,buildingId:u,floorId:U,logicalZoneId:he,planPoint:{floorId:U,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}}),we.set(S,{proxy:Z.defaultProxy,relay:Z.defaultRelay,meshUuid:`mesh-${U.slice(-4)}`}),Z.category==="lighting"&&Ee.push({id:`lm-${Date.now().toString(36)}`,deviceId:S,channel:"回路 1",label:`${v.slice(0,6)}主灯`,x:.52,y:.45}),I=S,T=!0,w=!1,l=!0,ee=`已新增「${v}」（${Z.hint}），已标注默认点位并标记待同步边缘。`,ae()}),e.querySelectorAll("[data-pick-dev]").forEach(o=>{o.addEventListener("click",g=>{g.stopPropagation(),I=o.dataset.pickDev??null,T=!0,i=ie(U).find(E=>E.id===I)?.physicalInstalled??!1,ae()})}),e.querySelector("[data-close-sel]")?.addEventListener("click",()=>{T=!1,c=!1,ae()}),e.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{c=!c,ae()}),e.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{i=!i,ae()}),e.querySelectorAll("[data-ping-dev]").forEach(o=>{o.addEventListener("click",()=>{const g=ie(U).find(v=>v.id===o.dataset.pingDev);g&&(ee=`已向「${g.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,ae())})}),e.querySelector("[data-add-light-marker]")?.addEventListener("click",o=>{const g=o.currentTarget.dataset.addLightMarker,v=Ee.filter(E=>E.deviceId===g).length+1;Ee.push({id:`lm-${Date.now().toString(36)}`,deviceId:g,channel:`回路 ${v}`,label:`照明点位 ${v}`,x:Math.min(.86,.35+v*.1),y:.42}),P="light_marker",ee=`已新增「回路 ${v}」可视化灯点。`,ae()}),e.querySelectorAll("[data-del-light-marker]").forEach(o=>{o.addEventListener("click",()=>{const g=Ee.findIndex(v=>v.id===o.dataset.delLightMarker);g>=0&&Ee.splice(g,1),ae()})}),e.querySelectorAll("[data-toggle-mesh-role]").forEach(o=>{o.addEventListener("click",()=>{const g=o.dataset.meshDev,v=o.dataset.toggleMeshRole,E=we.get(g)??{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"};E[v]=!E[v],we.set(g,E),l=!0,ee=`已更新节点 ${v.toUpperCase()} 状态，记得在「网络与拓扑」中同步下发至边缘网关。`,ae()})}),e.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async o=>{const g=ie(U).find(Z=>Z.id===I);if(!c||!g)return;const v=o.currentTarget.getBoundingClientRect(),E=Math.max(.02,Math.min(.98,(o.clientX-v.left)/v.width)),he=Math.max(.02,Math.min(.98,(o.clientY-v.top)/v.height));if(A.some(Z=>Z.id===g.id)){g.planPoint={floorId:U,planVersion:1,x:Number(E.toFixed(4)),y:Number(he.toFixed(4))},c=!1,ee=`已更新「${g.name}」图上坐标。`,ae();return}try{await t.updateDevicePlanPoint({deviceId:g.id,floorId:p.floorId,planVersion:g.planPoint?.planVersion??1,x:E,y:he,expectedVersion:g.version}),c=!1,ee=`已更新「${g.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await Ae()}catch(Z){Se=Z instanceof Error?Z.message:String(Z),ae()}}),e.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async o=>{o.preventDefault();const g=ie(U).find(E=>E.id===I);if(!g)return;const v=new FormData(o.currentTarget);if(A.some(E=>E.id===g.id)){g.physicalInstalled=i,g.hardwareBinding={gatewayId:"dev-e7f-gw-01",protocol:String(v.get("protocol")),networkAddress:String(v.get("networkAddress")??""),portOrChannel:String(v.get("portOrChannel")??""),boundAt:new Date().toISOString(),boundBy:a.displayName},g.version+=1,l=!0,ee=`已保存「${g.name}」的硬件绑定与物理复核状态。`,ae();return}try{await t.updateDeviceHardwareBinding({deviceId:g.id,gatewayId:g.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(v.get("protocol")),networkAddress:String(v.get("networkAddress")??""),portOrChannel:String(v.get("portOrChannel")??""),physicalInstalled:i,expectedVersion:g.version}),l=!0,ee=`已保存「${g.name}」的硬件绑定与物理安装复核状态。`,await Ae()}catch(E){Se=E instanceof Error?E.message:String(E),ae()}}),e.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const o=ie(U).find(g=>g.id===I);o&&_e(o)}),e.querySelectorAll("[data-ftt-dev]").forEach(o=>{o.addEventListener("click",()=>{const g=ie(U).find(v=>v.id===o.dataset.fttDev);g&&_e(g)})}),e.querySelectorAll("[data-batch-ftt]").forEach(o=>{o.addEventListener("click",()=>Te())}),e.querySelectorAll("[data-export-inv]").forEach(o=>{o.addEventListener("click",()=>Xe())}),e.querySelectorAll("[data-open-param]").forEach(o=>{o.addEventListener("click",()=>{be=o.dataset.openParam??null,ae()})}),e.querySelector("[data-close-param]")?.addEventListener("click",()=>{be=null,ae()}),e.querySelector("[data-save-dev-params]")?.addEventListener("submit",o=>{o.preventDefault();const g=o.currentTarget.dataset.saveDevParams,v=new FormData(o.currentTarget);j.set(g,{offDelayMin:Number(v.get("offDelayMin")??15),restoreMin:Number(v.get("restoreMin")??30),luxOn:Number(v.get("luxOn")??280),luxOff:Number(v.get("luxOff")??450)}),be=null,l=!0,ee="设备自治延时与光感门限参数已下发并同步至配置基线。",ae()}),e.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{V=!V,ae()}),e.querySelector("[data-create-group]")?.addEventListener("submit",o=>{o.preventDefault();const g=new FormData(o.currentTarget),v=String(g.get("gName")??"").trim(),E=g.get("gTrack")??"mesh_auto",he=String(g.get("gType")??"灯光联动组");v&&(Ce.unshift({id:`grp-${Date.now().toString(36)}`,track:E,groupType:he,name:v,floorId:U,includesAdapter:E==="mesh_auto",deviceIds:E==="mesh_auto"?["dev-e7f-gw-01"]:[]}),V=!1,E==="mesh_auto"&&(l=!0),ee=`已新建${E==="mesh_auto"?"端侧蓝牙 Mesh 自治组（已自动纳入蓝牙适配器）":"云端业务分组"}「${v}」。`,ae())}),e.querySelectorAll("[data-test-group]").forEach(o=>{o.addEventListener("click",()=>{const g=Ce.find(v=>v.id===o.dataset.testGroup);g&&(ee=`已向分组「${g.name}」发送群组试控指令，${g.deviceIds.length} 台成员回读正常。`,ae())})}),e.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>ke()),e.querySelector("[data-sync-edge]")?.addEventListener("click",()=>{J+=1,l=!1,ee=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${J}）。`,ae()}),e.querySelectorAll("[data-topo-mode]").forEach(o=>{o.addEventListener("click",()=>{pe=o.dataset.topoMode??"mesh",ae()})}),e.querySelectorAll("[data-topo-jump]").forEach(o=>{o.addEventListener("click",()=>{I=o.dataset.topoJump??null,T=!0,n="floorplan",ae()})}),e.querySelector("[data-toggle-new-conn]")?.addEventListener("click",()=>{N=!N,ae()}),e.querySelector("[data-create-conn]")?.addEventListener("submit",o=>{o.preventDefault();const g=new FormData(o.currentTarget),v=String(g.get("cName")??"").trim(),E=String(g.get("cProto")??"bacnet_ip"),he=String(g.get("cEndpoint")??"").trim();if(se.some(Z=>Z.endpoint===he)){Se=`端口冲突警告：局域网端点「${he}」已被其他通道占用，请更换端口后重试。`,ae();return}se.unshift({id:`conn-${Date.now().toString(36)}`,projectId:p.projectId,buildingId:u,floorId:U,name:v,protocol:E,endpoint:he,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()}),N=!1,Se="",ee=`已接入「${v}」（${he}），连通测试通过（18 ms）。`,ae()}),e.querySelector("[data-edge-restart]")?.addEventListener("click",()=>{ee="已下发「重启边缘服务」指令，边缘网关服务将在 5 秒内平滑重连。",ae()}),e.querySelectorAll("[data-expand-conn]").forEach(o=>{o.addEventListener("click",()=>{const g=o.dataset.expandConn??null;ne=ne===g?null:g,ae()})}),e.querySelectorAll("[data-ping-conn]").forEach(o=>{o.addEventListener("click",()=>{const g=se.find(v=>v.id===o.dataset.pingConn);g&&(Se="",g.status==="connected"?ee=`连通测试通过：「${g.name}」（${g.endpoint}）响应正常，延迟 18 ms。`:Se=`连通测试异常：「${g.name}」（${g.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,ae())})}),e.querySelectorAll("[data-copy-endpoint]").forEach(o=>{o.addEventListener("click",async()=>{const g=o.dataset.endpointVal??"",v=o.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(g),ue=v,ae(),window.setTimeout(()=>{ue=null,ae()},1600)}catch{}})}),e.querySelectorAll("[data-preview-doc]").forEach(o=>{o.addEventListener("click",()=>{const g=lt.find(v=>v.id===o.dataset.previewDoc);g&&(ee=`已调阅工程附件「${g.name}」（关联范围：${g.boundScope}，更新于 ${g.updatedAt}）。`,ae())})}),e.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const o=await t.freezeDeliveryBatch(p.floorId,"部署总览验收发起交付冻结");ee=`已生成交付冻结快照 ${o.versionTag}（核验 ${o.verifiedCount}/${o.deviceCount}）。`,await Ae()}catch(o){Se=o instanceof Error?o.message:String(o),ae()}})}await Ae()}function mt(e){if(e.connectivity==="offline")return`${e.name.includes("VAV")?"VAV-02":e.name.slice(0,6)} 离线`;if(e.category==="lighting"){const t=e.name.includes("702")?"702 照明":"主照明",a=Number(e.telemetry.dimming?.value??0);return a>0?`${t} ${a}%`:`${t} 关`}return e.category==="hvac"?`${e.name.includes("VAV")?"VAV-02":"FCU-01"} ${e.telemetry.setpoint?.value??24}°C`:e.category==="sensor"?`环境 ${e.telemetry.temp?.value??"23.4"}°C`:e.category==="gateway"?"主控网关":e.name.slice(0,6)}const gt={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},Qt={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},Jt=ge("chevron-down",12),ea={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function D(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function bt(e){const t=e.match(/(-?\d+)/);if(!t)return 0;const a=Number(t[1]);return e.toUpperCase().startsWith("B")?-Math.abs(a):a}async function ta(e,t,a){const s=await t.getSpatialTree(),n=t.mode==="demo",d=a.scope.canControlDevices,q=a.scope.canManageAlarms,_=a.scope.allowedZoneIds?.length?a.scope.allowedZoneIds:null,P=s.floors.filter(x=>a.scope.allowedFloorIds.includes(x.id)),Q=_||s.projects.length<=1&&s.buildings.length<=1&&P.length<=1?"floors-only":s.projects.length>1?"multi-project":s.buildings.length>1?"single-project-multi-building":"single-building",M=Q==="multi-project",Y=Q==="multi-project"||Q==="single-project-multi-building",T=Q!=="floors-only",pe=Q==="floors-only"&&P.length<=1;let y=Be(),K="devices",z=!1,X=!1,te="",se="",oe="all",le="all";const re=new URLSearchParams(window.location.hash.split("?")[1]??""),me=re.get("device"),ye=re.get("zone");let k=me,A=!!me,U="control",u="",I=!1,i="today",c="devices";const w=new Set,N=new Set;let V=[],be=[],ue=[],ne=null,J=null,l=1,h=0,H=0,ee=null;function Se(){return s.zones.filter(x=>!(y.level==="floor"&&x.floorId!==y.floorId||_&&!_.includes(x.id)))}function we(x){return[...s.floors.filter(F=>F.buildingId!==x?!1:Q==="floors-only"?a.scope.allowedFloorIds.includes(F.id):!0)].sort((F,m)=>bt(m.name)-bt(F.name))}async function Ee(x,B=!1){let F=x;F.level==="all-projects"&&!M&&(F={level:"project",projectId:s.projects[0]?.id??p.projectId}),F.level==="project"&&!Y&&(F={level:"building",projectId:F.projectId,buildingId:s.buildings[0]?.id??p.buildingId}),F.level==="building"&&!T&&(F={level:"floor",projectId:F.projectId,buildingId:F.buildingId,floorId:P[0]?.id??p.floorId}),y=F,dt(F),J=null,le=B&&ye?ye:"all",I=!1,X=!1,z=!1,N.clear(),l=1,h=0,H=0,ee&&(ee(),ee=null);const m=y.level==="floor"?y.floorId:p.floorId;if(y.level==="floor")try{const[f,R,C]=await Promise.all([t.getFloorDevices(y.floorId),t.listAlarms(y.floorId),t.listWorkOrders(y.floorId)]);V=f,be=R,ue=C,V.some(ve=>ve.id===k)?B&&me&&(A=!0):(k=V[1]?.id??V[0]?.id??null,A=!1),ee=t.subscribeFloorEvents(y.floorId,async ve=>{ve.type==="control.receipt.updated"&&ne?.batchId===ve.batchId&&(ne=await t.getControlBatch(ve.batchId)),(ve.type==="telemetry.updated"||ve.type==="device.connectivity")&&y.level==="floor"&&(V=await t.getFloorDevices(y.floorId)),ve.type==="alarm.changed"&&y.level==="floor"&&(be=await t.listAlarms(y.floorId)),b()})}catch(f){V=[],be=[],ue=[],k=null,A=!1,J=f instanceof Error?f.message:String(f)}else{A=!1;const[f,R,C]=await Promise.all([t.getFloorDevices(m).catch(()=>[]),t.listAlarms(m).catch(()=>[]),t.listWorkOrders(m).catch(()=>[])]);V=f,be=R,ue=C}ke()}function Ce(x){return x?s.zones.find(B=>B.id===x)?.name??x:"未分配逻辑区"}function j(){const x=se.trim().toLowerCase();return V.filter(B=>le!=="all"&&B.logicalZoneId!==le||oe!=="all"&&B.category!==oe?!1:x?B.name.toLowerCase().includes(x)||B.id.toLowerCase().includes(x)||Ce(B.logicalZoneId).toLowerCase().includes(x):!0)}async function r(x,B,F){!x.length||y.level!=="floor"||!d||(x.forEach(m=>w.add(m)),ne=await t.dispatchControlBatch({floorId:y.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:x.map(m=>({deviceId:m,command:B,targetValue:F}))}),b())}function b(){const x=document.activeElement,B=x?.dataset?.role,F=x&&"selectionStart"in x?x.selectionStart:null,m=x&&"selectionEnd"in x?x.selectionEnd:null,f=e.querySelector(".pacom-list")?.scrollTop??0;ke();const R=e.querySelector(".pacom-list");if(R&&(R.scrollTop=f),B==="search"||B==="space-search"){const C=e.querySelector(`[data-role="${B}"]`);C&&(C.focus(),F!==null&&m!==null&&C.setSelectionRange(F,m))}}function G(){const x=e.querySelector('[data-role="canvas-viewport"]');x&&(x.style.transform=`translate(${h}px, ${H}px) scale(${l})`);const B=e.querySelector('[data-role="zoom-label"]');B&&(B.textContent=`${Math.round(l*100)}%`)}function ce(x){if(x==="all")return{level:"all-projects"};const B=x.split(":");return B[0]==="project"&&B[1]?{level:"project",projectId:B[1]}:B[0]==="building"&&B[1]&&B[2]?{level:"building",projectId:B[1],buildingId:B[2]}:B[0]==="floor"&&B[1]&&B[2]&&B[3]?{level:"floor",projectId:B[1],buildingId:B[2],floorId:B[3]}:{level:"all-projects"}}function ie(x){const B=y;if(B.level==="all-projects"){const F=se.trim().toLowerCase(),m=s.projects.filter(f=>!F||f.name.toLowerCase().includes(F));return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">授权园区（${m.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ge("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:6px; padding:8px;">
          ${m.map(f=>{const R=s.buildings.filter(C=>C.projectId===f.id).length;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="project:${D(f.id)}">
                  <div>
                    <div class="pacom-row-title">${D(f.name)}</div>
                    <div class="pacom-row-sub">${D(f.city??"")} · ${R} 栋楼宇</div>
                  </div>
                  <span class="pacom-badge pacom-badge--accent">进入 →</span>
                </button>`}).join("")}
        </div>
      `}if(B.level==="project"){const F=se.trim().toLowerCase(),m=s.buildings.filter(C=>C.projectId===B.projectId&&(!F||C.name.toLowerCase().includes(F))),f=V.filter(C=>C.connectivity==="online").length,R=V.length?Math.round(f/V.length*100):100;return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">园区楼宇（${m.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ge("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${m.map(C=>{const ve=C.id===p.buildingId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="building:${D(C.projectId)}:${D(C.id)}">
                  <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                    <span class="pacom-dot ${ve&&x>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <div>
                      <div class="pacom-row-title">${D(C.name)}</div>
                      <div class="pacom-row-sub">地上 ${C.aboveFloors} 层 · ${C.areaSqm??"-"} m²</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${ve?"pacom-badge--accent":"pacom-badge--neutral"}">${ve?`在线 ${R}%`:"运行平稳"}</span>
                </button>`}).join("")}
        </div>
      `}if(B.level==="building"){const F=se.trim().toLowerCase(),m=we(B.buildingId).filter(R=>!F||R.name.toLowerCase().includes(F)),f=s.buildings.find(R=>R.id===B.buildingId);return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">${D(f?.name??"楼宇")} 楼层导览（${m.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ge("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${m.map(R=>{const C=a.scope.allowedFloorIds.includes(R.id),ve=R.id===p.floorId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left; ${C?"":"opacity:0.6;"}" data-nav-scope="floor:${D(B.projectId)}:${D(B.buildingId)}:${D(R.id)}">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="pacom-dot ${ve&&x>0?"pacom-dot--warning":R.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                    <div>
                      <div class="pacom-row-title">${D(f?.name??"")} ${D(R.name)}</div>
                      <div class="pacom-row-sub">${R.plan?"2D 平面控图就绪":"暂未上传平面图"}${ve&&x>0?` · ${x} 告警`:""}</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${C&&R.plan?"pacom-badge--online":"pacom-badge--neutral"}">${C?R.plan?"进入 →":"待部署":"未授权"}</span>
                </button>`}).join("")}
        </div>
      `}if(K==="devices"){const F=j(),m=Se(),f=Array.from(N);return`
        <div class="pacom-pane-toolbar" style="padding:10px 12px; gap:8px;">
          ${_?`<div class="pacom-info-banner">我的区域视图：仅显示获授权的 ${_.length} 个功能区及设备。</div>`:""}
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
            <select class="pacom-select" style="height:28px; font-size:12px;" name="deviceCategory" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${oe==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${oe==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${oe==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${oe==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${oe==="gateway"?"selected":""}>网关</option>
            </select>
            <span style="font-size:12px; color:var(--pacom-text-secondary);">可见 ${F.length} 台${d&&f.length?` · 已选 ${f.length}`:""}</span>
            <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ge("x",14)}</button>
          </div>
          ${m.length>0&&!J?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${le==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${m.map(R=>`<button type="button" class="pacom-zone-pill ${le===R.id?"is-active":""}" data-filter-zone="${D(R.id)}">${D(R.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
        </div>
        <div class="pacom-list" style="padding:6px;">
          ${J?`<div class="pacom-alert-banner">${D(J)}</div>`:F.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">没有匹配的设备</div>':F.map(R=>{const C=R.id===k&&A,ve=N.has(R.id),fe=R.connectivity==="offline",$e=fe?"pacom-dot--critical":"pacom-dot--online",de=fe?"离线":R.category==="lighting"?`${R.telemetry.dimming?.value??"--"}%`:R.category==="hvac"?`${R.telemetry.setpoint?.value??"--"}°C`:R.category==="sensor"?`${R.telemetry.temp?.value??"--"}°C`:"在线";return`
                        <div class="pacom-row ${C?"is-selected":""}" data-select-device="${D(R.id)}" style="padding:8px;">
                          <div class="pacom-row-main">
                            ${d?`<input type="checkbox" name="devCheck-${D(R.id)}" data-check-device="${D(R.id)}" ${ve?"checked":""} style="margin-top:3px;" aria-label="勾选 ${D(R.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title" style="font-size:13px;">${D(R.name)}</div>
                              <div class="pacom-row-sub">${D(Ce(R.logicalZoneId).replace(/^7F\s*/,""))} · ${D(gt[R.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${fe?"pacom-badge--critical":"pacom-badge--online"}">
                            <span class="pacom-dot ${$e}"></span>${D(de)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${d&&f.length>0?`
            <div class="pacom-batch-bar" style="padding:8px 12px;">
              <span style="font-size:12px;">已选 <strong>${f.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(K==="zones"){const F=Se(),m={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">功能区快控（${F.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ge("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:8px; padding:10px;">
          ${F.map(f=>{const R=V.filter(de=>de.logicalZoneId===f.id),C=R.filter(de=>de.connectivity==="online").length,ve=R.filter(de=>de.category==="lighting"||de.category==="hvac").length,fe=le===f.id,$e=m[f.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${fe?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${fe?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${D(fe?"all":f.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:13px; font-weight:500;">${D(f.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${C}/${R.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时 ${$e.temp} · ${$e.occ}</div>
                  ${ve>0?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-zone-power="${D(f.id)}" data-zone-val="true" ${d?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-zone-power="${D(f.id)}" data-zone-val="false" ${d?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">弱电 / 网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-hud-sheet-head">
        <strong style="font-size:13px; font-weight:500;">本层告警（${be.length}）</strong>
        <div style="display:flex; align-items:center; gap:4px;">
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${ge("x",14)}</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:10px;">
        ${be.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">当前楼层无活跃告警</div>':be.map(F=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${D(F.title)}</strong>
                      <span class="pacom-badge ${F.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${F.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${D(F.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-locate-device="${D(F.deviceId)}">定位设备</button>
                      ${F.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-ack-alarm="${D(F.id)}" ${q?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function Ie(x){const B=y,F=Se().length,m=B.level==="floor"?"搜索设备或区域…":B.level==="building"?"搜索楼层…":B.level==="project"?"搜索楼宇…":"搜索园区…",f=B.level==="floor"?`
          <button type="button" class="pacom-hud-pill ${z&&K==="devices"?"is-active":""}" data-hud-tab="devices">设备 ${V.length}</button>
          <button type="button" class="pacom-hud-pill ${z&&K==="zones"?"is-active":""}" data-hud-tab="zones">区域 ${F}</button>
          <button type="button" class="pacom-hud-pill ${x>0?"pacom-hud-pill--alert":""} ${z&&K==="alarms"?"is-active":""}" data-hud-tab="alarms">告警 ${x}</button>
        `:B.level==="building"?`
            <button type="button" class="pacom-hud-pill ${z?"is-active":""}" data-toggle-hud="1">楼层 ${we(B.buildingId).length}</button>
            ${x>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${x}</button>`:""}
          `:B.level==="project"?`
              <button type="button" class="pacom-hud-pill ${z?"is-active":""}" data-toggle-hud="1">楼宇 ${s.buildings.filter(R=>R.projectId===B.projectId).length}</button>
              ${x>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${x}</button>`:""}
            `:`<button type="button" class="pacom-hud-pill ${z?"is-active":""}" data-toggle-hud="1">园区 ${s.projects.length}</button>`;return`
      <div class="pacom-hud-search-wrap" data-role="hud-wrap">
        <div class="pacom-hud-bar" style="padding:0 8px 0 12px;">
          ${ge("search",14)}
          <input class="pacom-hud-input" name="spatialSearch" data-role="search" placeholder="${m}" value="${D(se)}" aria-label="${m}" />
          ${f}
        </div>
        ${z?`<div class="pacom-hud-sheet" data-role="hud-sheet">${ie(x)}</div>`:""}
      </div>
    `}function De(x){if(pe||y.level!=="building"&&y.level!=="floor")return"";const B=y.buildingId,F=y.projectId,m=we(B);return!T&&m.length<=1?"":`
      <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换" data-role="elevation-scrubber">
        ${T?`<button type="button" class="pacom-elev-item ${y.level==="building"?"is-active":""}" data-nav-scope="building:${D(F)}:${D(B)}" title="查看整栋视图">
                <span>栋</span>
                <span class="pacom-elev-tick"></span>
              </button>`:""}
        ${m.map(f=>{const R=a.scope.allowedFloorIds.includes(f.id),C=y.level==="floor"&&y.floorId===f.id,ve=f.id===p.floorId&&x>0;return`
              <button type="button" class="pacom-elev-item ${C?"is-active":""} ${R?"":"is-locked"}"
                data-nav-scope="floor:${D(F)}:${D(B)}:${D(f.id)}"
                title="${D(f.name)}${R?ve?` · ${x} 条告警`:"":"（无权限）"}">
                ${ve?'<span class="pacom-elev-dot" aria-hidden="true"></span>':""}
                <span>${D(f.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`}).join("")}
      </nav>
    `}function Ae(x,B){const F=y;if(F.level==="floor")return J?"":`
        <div class="pacom-canvas-dock" role="toolbar" aria-label="平面图图层与缩放控制">
          <button type="button" class="pacom-dock-btn" aria-pressed="${c==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${c==="temp"}" data-canvas-layer="temp">温度热力</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${c==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-zoom="out" title="缩小" aria-label="缩小">${ge("minus",14)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-zoom="reset" data-role="zoom-label" title="点击复位 100%">${Math.round(l*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-zoom="in" title="放大" aria-label="放大">${ge("plus",14)}</button>
        </div>
      `;const m=V.length?Math.round(x/V.length*100):100,f=F.level==="building"?"418 kWh":"1,248 kWh",R=Math.round(96.2*.45+93.6*.35+m*.2),C=F.level==="building"?we(F.buildingId).find(ve=>ve.id===p.floorId)??we(F.buildingId)[0]:null;return`
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
          <span>今日能耗 <strong>${f}</strong></span>
        </button>
        <span class="pacom-dock-sep" aria-hidden="true"></span>
        <button type="button" class="pacom-dock-metric" data-go-alarms="1">
          <span class="pacom-dot ${B>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
          <span>告警 <strong>${B}</strong></span>
        </button>
        ${F.level==="building"&&C?`<span class="pacom-dock-sep" aria-hidden="true"></span>
               <button type="button" class="pacom-dock-btn" aria-pressed="true" data-nav-scope="floor:${D(F.projectId)}:${D(F.buildingId)}:${D(C.id)}">进入 ${D(C.name)} 平面图 →</button>`:""}
      </div>
    `}function je(x,B){const F=y,m=V.length?Math.round(x/V.length*100):100;if(F.level==="all-projects")return`
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
            ${s.projects.map((C,ve)=>`
                <button type="button" class="pacom-pin is-selected" style="left:${ve===0?50:28}%; top:${ve===0?52:34}%; padding:0 12px; height:32px; font-size:12px;" data-nav-scope="project:${D(C.id)}">
                  <span class="pacom-dot ${B>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <span>${D(C.name)} · 在线 ${m}%</span>
                </button>`).join("")}
          </div>
        </div>
      `;if(F.level==="project"){const C=s.projects.find(fe=>fe.id===F.projectId)??s.projects[0],ve=s.buildings.filter(fe=>!C||fe.projectId===C.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 24px 72px; cursor:default;">
          <div style="position:relative; width:min(940px, 92%); border-radius:16px; overflow:hidden; box-shadow:0 14px 36px rgba(15,23,42,0.12); background:#fff;">
            <img src="${D(C?.imageUrl??"./media/gzlab.jpg")}" alt="${D(C?.name??"园区")}俯瞰" style="width:100%; max-height:72vh; object-fit:cover; display:block;" />
            ${ve.map((fe,$e)=>{const de=fe.id===p.buildingId;return`
                  <button type="button" class="pacom-pin ${de?"is-selected":""}" style="left:${$e===0?56:38}%; top:${$e===0?44:62}%; height:30px; padding:0 11px;" data-nav-scope="building:${D(fe.projectId)}:${D(fe.id)}">
                    <span class="pacom-dot ${de&&B>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${D(fe.name)} · ${de?`在线 ${m}% · 告警 ${B}`:"运行平稳"}</span>
                  </button>`}).join("")}
          </div>
        </div>
      `}if(F.level==="building"){const C=s.buildings.find(fe=>fe.id===F.buildingId),ve=we(F.buildingId).find(fe=>fe.id===p.floorId)??we(F.buildingId)[0];return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 68px 72px 24px; cursor:default;">
          <div style="position:relative; display:inline-block;">
            <img class="pacom-plan-img" src="${D(C?.imageUrl??"./media/building-e.png")}" alt="${D(C?.name??"楼宇")} 整栋实景图" style="max-height:74vh;" />
            ${ve?`<button type="button" class="pacom-pin is-selected" style="left:52%; top:38%; height:30px; padding:0 11px;" data-nav-scope="floor:${D(F.projectId)}:${D(F.buildingId)}:${D(ve.id)}">
                    <span class="pacom-dot ${B>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${D(C?.name??"")} ${D(ve.name)} · 在线 ${x}/${V.length}</span>
                  </button>`:""}
          </div>
        </div>
      `}const f=s.floors.find(C=>C.id===F.floorId),R=Se();return`
      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${J?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${D(J)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${h}px, ${H}px) scale(${l});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${D(f?.plan?.imageUrl??"./media/7F.webp")}" alt="E栋 ${D(f?.name??"7F")} 平面图" />
                  ${R.map((C,ve)=>{const fe=ea[C.id];if(!fe)return"";const $e=le===C.id,de=["23.2°C","24.6°C","22.8°C","23.9°C"],ae=["有人 74%","会议中","有人 52%","空闲"],Oe=c==="temp"?` · ${de[ve%de.length]}`:c==="occupancy"?` · ${ae[ve%ae.length]}`:"",$=c==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":c==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${$e?"is-active":""}"
                          style="left:${fe.left}%; top:${fe.top}%; width:${fe.width}%; height:${fe.height}%; ${$e?"":$}"
                          data-filter-zone="${D($e?"all":C.id)}"
                          title="${D(C.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${D(C.name.replace(/^7F\s*/,""))}${Oe}</span>
                        </button>`}).join("")}
                  ${V.filter(C=>C.planPoint).map(C=>{const ve=be.some(Oe=>Oe.deviceId===C.id&&Oe.status==="active"),fe=z&&K==="alarms",$e=le!=="all"&&C.logicalZoneId!==le||fe&&!ve,de=fe&&ve?"background:var(--pacom-status-critical);":"",ae=C.category==="gateway"?Math.min(92,C.planPoint.y*100+5.5):C.planPoint.y*100;return`
                        <button type="button" class="pacom-pin ${C.id===k&&A?"is-selected":""} ${C.connectivity==="offline"?"pacom-pin--offline":""} ${$e?"pacom-pin--dimmed":""}"
                          style="left:${(C.planPoint.x*100).toFixed(2)}%; top:${ae.toFixed(2)}%; ${de}"
                          data-pin-device="${D(C.id)}" title="${D(C.name)}">
                          <span class="pacom-dot ${ve?"pacom-dot--critical":C.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${D(mt(C))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>
    `}function _e(){if(y.level!=="floor"||!A)return"";const x=V.find(de=>de.id===k);if(!x)return"";const B=x.category==="lighting",F=x.category==="hvac",m=Number(x.telemetry.dimming?.value??50),f=Number(x.telemetry.setpoint?.value??24),R=w.has(x.id),C=be.filter(de=>de.deviceId===x.id&&de.status==="active"),ve=ue.filter(de=>de.deviceId===x.id&&de.status!=="closed"),fe=F?[{name:"E7F_暖通空调与末端竣工图_v2.3.pdf",tag:"竣工图纸"},{name:"FCU-01_风机盘管维保与排障手册.pdf",tag:"维保手册"}]:B?[{name:"E7F_强电照明与DALI回路拓扑.pdf",tag:"回路图纸"}]:[{name:"E7F_BACnet_Modbus_点位映射表.xlsx",tag:"点位台账"}],$e=B?[{label:"当前开关",value:m>0?"开启":"关闭"},{label:"当前亮度",value:`${m}%`},{label:"实时功率",value:m>0?`${Math.round(m*1.4)} W`:"0 W"},{label:"运行模式",value:R?"人工覆盖":"自动策略"}]:F?[{label:"室内温度",value:`${x.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${f.toFixed(1)}°C`},{label:"运行工况",value:x.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:R?"人工覆盖":"自动策略"}]:x.category==="sensor"?[{label:"实时温度",value:`${x.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${x.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${x.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:x.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:x.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:x.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:x.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:x.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${D(x.name)}</h2>
            <div class="pacom-row-sub">${D(Ce(x.logicalZoneId))} · ${D(gt[x.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${x.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${x.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              ${ge("x",16)}
            </button>
          </div>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备档案分页" style="width:100%; justify-content:space-between;">
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${U==="control"}" data-drawer-tab="control">控制与工况</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${U==="trend"}" data-drawer-tab="trend">趋势与告警${C.length>0?` (${C.length})`:""}</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${U==="profile"}" data-drawer-tab="profile">档案与图纸</button>
        </div>

        ${U==="control"?`
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
              ${$e.map(de=>`
                  <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                    <span class="pacom-row-sub">${de.label}</span>
                    <strong style="font-size:13px; font-weight:500;">${D(de.value)}</strong>
                  </div>`).join("")}
            </div>

            ${F?`
                <div class="lov-schematic-strip" aria-label="暖通工况简图">
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                    <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                    <span class="pacom-row-sub">${x.connectivity==="online"?"制冷运转":"通信离线"}</span>
                  </div>
                  <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                    <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                    <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                    <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${D(x.telemetry.temp?.value??"23.8")}°</text>
                    <rect x="80" y="8" width="54" height="28" rx="6" fill="${x.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${x.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                    <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${x.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                    <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${x.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                    <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                    <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                    <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${f.toFixed(1)}°C</text>
                  </svg>
                </div>`:""}

            ${B||F?`
                <div class="pacom-control-box">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                    ${R&&d?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${D(x.id)}">恢复自动策略</button>`:d?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
                  </div>
                  ${x.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
                  ${B?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${d?"":"disabled"}>开灯</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${d?"":"disabled"}>关灯</button>
                      </div>
                      <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                        亮度目标：<strong>${m}%</strong>
                        <input type="range" min="0" max="100" step="10" value="${m}" data-ctrl-slider="lighting.dimming" ${d?"":"disabled"} />
                      </label>`:`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${d?"":"disabled"}>开机</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${d?"":"disabled"}>关机</button>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:12px;">设定温度：</span>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${f-.5}" ${d?"":"disabled"}>-0.5°C</button>
                        <strong>${f.toFixed(1)}°C</strong>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${f+.5}" ${d?"":"disabled"}>+0.5°C</button>
                      </div>`}
                </div>`:""}

            ${ne?`
                <div class="pacom-control-box">
                  <div style="font-size:12px; font-weight:500;">最近批次：<code>${D(ne.batchId)}</code></div>
                  <div class="pacom-receipt-list">
                    ${ne.receipts.map(de=>{const ae=Qt[de.status]??{text:de.status,badge:"pacom-badge--neutral"};return`
                          <div class="pacom-receipt-item">
                            <div>
                              <div><strong>${D(de.deviceId)}</strong> · ${D(de.command)} → ${D(de.targetValue)}</div>
                              ${de.errorMessage?`<div style="color:var(--pacom-status-critical);">${D(de.errorMessage)}</div>`:""}
                            </div>
                            <span class="pacom-badge ${ae.badge}">${ae.text}</span>
                          </div>`}).join("")}
                  </div>
                </div>`:""}`:U==="trend"?`
              <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="pacom-row-sub">近 24 小时趋势（${B?"亮度 %":F?"温度 °C":x.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${D(x.id)}">查看完整时序 →</button>
                </div>
                <svg viewBox="0 0 280 48" style="width:100%; height:48px; display:block;">
                  <line x1="0" y1="24" x2="280" y2="24" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
                  <polyline fill="none" stroke="${x.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${B?"0,38 40,38 80,16 120,12 160,14 200,20 240,14 280,16":F?"0,28 40,30 80,25 120,20 160,18 200,22 240,24 280,20":"0,24 40,25 80,23 120,21 160,20 200,22 240,21 280,22"}" />
                </svg>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:12px; font-weight:500;">本机活跃告警与未结工单</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
                </div>
                ${C.length===0&&ve.length===0?'<div class="pacom-row-sub">当前设备运行平稳，无未处理告警或工单。</div>':`${C.map(de=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${D(de.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${D(de.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去诊断 →</span>
                          </button>`).join("")}${ve.map(de=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-wo-id="${D(de.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${D(de.title)}</span>
                            <span class="pacom-badge pacom-badge--accent">查看工单 →</span>
                          </button>`).join("")}`}
              </div>`:`
              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">上下游拓扑关系（Twin Relationships）</span>
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; font-size:12px;">
                  <span class="pacom-badge pacom-badge--neutral">E7F 主控网关-01</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--accent">${D(mt(x))}</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--online">${D(Ce(x.logicalZoneId).replace(/^7F\s*/,""))}</span>
                </div>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">关联竣工图纸与设备手册</span>
                ${u?`<div class="pacom-info-banner">${D(u)}</div>`:""}
                ${fe.map(de=>`
                    <div class="pacom-receipt-item">
                      <span style="font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${D(de.name)}">${D(de.name)}</span>
                      <button type="button" class="pacom-btn" style="height:24px; padding:0 8px; font-size:11px;" data-drawer-doc="${D(de.name)}">查阅</button>
                    </div>`).join("")}
              </div>

              <details class="lov-tech-details" open>
                <summary><span>技术标识与硬件绑定</span>${ge("chevron-down",12)}</summary>
                <div class="pacom-kv-grid">
                  <span class="pacom-kv-label">设备编号</span><span><code>${D(x.id)}</code> · v${x.version}</span>
                  <span class="pacom-kv-label">图上点位</span><span>${x.planPoint?`x=${x.planPoint.x.toFixed(2)}, y=${x.planPoint.y.toFixed(2)} (图 v${x.planPoint.planVersion})`:"未标点"}</span>
                  <span class="pacom-kv-label">物理安装</span><span>${x.physicalInstalled?"现场已确认":"待现场复核"}</span>
                  <span class="pacom-kv-label">硬件绑定</span><span>${x.hardwareBinding?`${x.hardwareBinding.protocol.toUpperCase()} · ${x.hardwareBinding.networkAddress}`:"未绑定"}</span>
                </div>
              </details>`}
      </aside>
    `}function Te(x,B,F){if(!I)return"";const m=Math.max(0,V.length-x),f=i==="week",R=be.filter(C=>C.status==="active").slice(0,2);return`
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
            <button type="button" class="pacom-drawer-close" data-toggle-briefing="1" aria-label="关闭简报">${ge("x",16)}</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">${f?"本周累计节能":"昨日能耗偏差"}</span><strong style="color:var(--pacom-status-online);">${f?"-7.1%（省 ¥342）":"-6.4%（省 ¥48）"}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">均温 / 在线率</span><strong>${D(F)}°C · ${x}/${V.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${B} 告警 · ${m} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖 / 未结工单</span><strong>${Math.max(1,w.size)} 覆盖 · ${ue.filter(C=>C.status!=="closed").length} 工单</strong></div>
        </div>
        ${R.length>0?`<div style="display:flex; flex-direction:column; gap:5px;">
                <span class="pacom-row-sub">优先关注事项（点击直达）</span>
                ${R.map(C=>`
                    <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${D(C.id)}">
                      <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${D(C.title)}</span>
                      <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                    </button>`).join("")}
              </div>`:""}
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报 (.txt)</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">进入告警中心 →</button>
        </div>
      </div>
    `}function ke(){const x=be.filter(m=>m.status==="active").length,B=V.filter(m=>m.connectivity==="online").length,F=V.find(m=>m.category==="sensor")?.telemetry.temp?.value??"23.4";e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">空间总览</h1>
              ${Ve({tree:s,session:a,scope:y,activeAlarmCount:x,isOpen:X,searchKeyword:te})}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${J?n?'<span class="pacom-badge pacom-badge--neutral"><span class="pacom-dot pacom-dot--offline"></span>演示模式</span>':'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>':`<button type="button" class="pacom-pulse-btn" data-toggle-briefing="1" aria-expanded="${I}" title="点击查看今日运行简报">
                      <span class="pacom-dot pacom-dot--online"></span>
                      <span>${B}/${V.length} 在线 · ${D(F)}°C · 简报</span>
                      <span style="display:inline-flex; color:var(--pacom-text-secondary);">${Jt}</span>
                    </button>`}
            </div>
          </div>
        </header>

        ${Te(B,x,F)}

        <main class="pacom-spatial-stage">
          ${Ie(x)}
          ${je(B,x)}
          ${De(x)}
          ${Ae(B,x)}
          ${_e()}
        </main>
      </div>
    `,Xe()}function Xe(){Ue(e,{onToggle:()=>{X=!X,X&&(I=!1,z=!1),ke(),X&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:m=>{te=m,ke();const f=e.querySelector("[data-global-space-search]");f&&(f.focus(),f.setSelectionRange(m.length,m.length))},onPick:m=>{X=!1,Ee(m)}}),e.querySelectorAll("[data-nav-scope]").forEach(m=>{m.addEventListener("click",f=>{f.stopPropagation(),m.dataset.navScope&&Ee(ce(m.dataset.navScope))})}),e.querySelectorAll("[data-hud-tab]").forEach(m=>{m.addEventListener("click",f=>{f.stopPropagation();const R=m.dataset.hudTab;z&&K===R?z=!1:(K=R,z=!0,X=!1,I=!1),ke()})}),e.querySelectorAll("[data-toggle-hud]").forEach(m=>{m.addEventListener("click",f=>{f.stopPropagation(),z=!z,z&&(X=!1,I=!1),ke()})}),e.querySelectorAll("[data-close-hud]").forEach(m=>{m.addEventListener("click",f=>{f.stopPropagation(),z=!1,ke()})});const x=e.querySelector('[data-role="search"]');x?.addEventListener("focus",()=>{z||(z=!0,X=!1,I=!1,b())}),x?.addEventListener("input",m=>{se=m.currentTarget.value,z=!0,b()}),e.querySelector('[data-role="category"]')?.addEventListener("change",m=>{oe=m.currentTarget.value,ke()}),e.querySelectorAll("[data-filter-zone]").forEach(m=>{m.addEventListener("click",f=>{f.stopPropagation(),le=m.dataset.filterZone??"all",ke()})}),e.querySelectorAll("[data-select-device]").forEach(m=>{m.addEventListener("click",f=>{f.target.tagName!=="INPUT"&&(k=m.dataset.selectDevice??null,A=!0,ke())})}),e.querySelectorAll("[data-check-device]").forEach(m=>{m.addEventListener("change",()=>{const f=m.dataset.checkDevice;f&&(m.checked?N.add(f):N.delete(f),ke())})}),e.querySelectorAll("[data-pin-device]").forEach(m=>{m.addEventListener("click",f=>{f.stopPropagation(),k=m.dataset.pinDevice??null,A=!0,X=!1,I=!1,ke()})}),e.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{A=!1,ke()}),e.querySelectorAll("[data-drawer-tab]").forEach(m=>{m.addEventListener("click",()=>{U=m.dataset.drawerTab??"control",u="",ke()})}),e.querySelectorAll("[data-drawer-doc]").forEach(m=>{m.addEventListener("click",()=>{u=`已调阅「${m.dataset.drawerDoc??""}」（完整工程文档库见「系统部署 → 楼层与功能区」）。`,ke()})}),e.querySelectorAll("[data-briefing-period]").forEach(m=>{m.addEventListener("click",()=>{i=m.dataset.briefingPeriod??"today",ke()})}),e.querySelectorAll("[data-go-alarm-id]").forEach(m=>{m.addEventListener("click",()=>{const f=m.dataset.goAlarmId??"";window.location.hash=f?`#alarms?alarm=${encodeURIComponent(f)}`:"#alarms"})}),e.querySelectorAll("[data-go-wo-id]").forEach(m=>{m.addEventListener("click",()=>{const f=m.dataset.goWoId??"";window.location.hash=f?`#alarms?wo=${encodeURIComponent(f)}`:"#alarms"})}),e.querySelector("[data-release-override]")?.addEventListener("click",m=>{const f=m.currentTarget.dataset.releaseOverride;f&&(w.delete(f),ke())}),e.querySelectorAll("[data-zone-power]").forEach(m=>{m.addEventListener("click",f=>{f.stopPropagation();const R=m.dataset.zonePower,C=m.dataset.zoneVal==="true";if(!R)return;const ve=V.filter($e=>$e.logicalZoneId===R&&$e.category==="lighting").map($e=>$e.id),fe=V.filter($e=>$e.logicalZoneId===R&&$e.category==="hvac").map($e=>$e.id);ve.length?r(ve,"lighting.power",C):fe.length&&r(fe,"hvac.power",C)})}),e.querySelectorAll("[data-locate-device]").forEach(m=>{m.addEventListener("click",()=>{const f=m.dataset.locateDevice;f&&(k=f,A=!0,z=!1,ke())})}),e.querySelectorAll("[data-go-alarms]").forEach(m=>{m.addEventListener("click",()=>{window.location.hash="#alarms"})}),e.querySelectorAll("[data-go-analysis]").forEach(m=>{m.addEventListener("click",()=>{const f=m.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(f)}`})}),e.querySelectorAll("[data-go-timeseries]").forEach(m=>{m.addEventListener("click",()=>{const f=m.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(f)}`})}),e.querySelectorAll("[data-toggle-briefing]").forEach(m=>{m.addEventListener("click",f=>{f.stopPropagation(),I=!I,I&&(X=!1,z=!1),ke()})}),e.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const m=V.filter($e=>$e.connectivity==="online").length,f=be.filter($e=>$e.status==="active").length,R=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${m}/${V.length}（离线 ${V.length-m} 台）`,`待处理告警：${f} 条`,`人工覆盖中：${w.size} 台`].join(`
`),C=new Blob([R],{type:"text/plain;charset=utf-8;"}),ve=URL.createObjectURL(C),fe=document.createElement("a");fe.href=ve,fe.download="pacom-daily-briefing.txt",fe.click(),URL.revokeObjectURL(ve)}),e.querySelectorAll("[data-ctrl-cmd]").forEach(m=>{m.addEventListener("click",()=>{if(!k||!m.dataset.ctrlCmd)return;const f=m.dataset.ctrlVal??"",R=f==="true"?!0:f==="false"?!1:Number(f);r([k],m.dataset.ctrlCmd,R)})}),e.querySelector("[data-ctrl-slider]")?.addEventListener("change",m=>{const f=m.currentTarget;!k||!f.dataset.ctrlSlider||r([k],f.dataset.ctrlSlider,Number(f.value))}),e.querySelectorAll("[data-batch-cmd]").forEach(m=>{m.addEventListener("click",()=>{const f=Array.from(N),R=m.dataset.batchVal??"",C=R==="true"?!0:R==="false"?!1:R;r(f,m.dataset.batchCmd,C)})}),e.querySelectorAll("[data-ack-alarm]").forEach(m=>{m.addEventListener("click",async()=>{!m.dataset.ackAlarm||y.level!=="floor"||!q||(await t.acknowledgeAlarm(m.dataset.ackAlarm,"首页快速确认"),be=await t.listAlarms(y.floorId),ke())})}),e.querySelectorAll("[data-canvas-layer]").forEach(m=>{m.addEventListener("click",()=>{const f=m.dataset.canvasLayer;f&&(c=f,ke())})}),e.querySelectorAll("[data-zoom]").forEach(m=>{m.addEventListener("click",()=>{const f=m.dataset.zoom;f==="in"?l=Math.min(2.6,Number((l+.2).toFixed(2))):f==="out"?l=Math.max(.6,Number((l-.2).toFixed(2))):(l=1,h=0,H=0),G()})}),e.querySelector('[data-role="elevation-scrubber"]')?.addEventListener("wheel",m=>{m.preventDefault();const f=y;if(f.level!=="building"&&f.level!=="floor")return;const R=we(f.buildingId),C=[...T?[{level:"building",projectId:f.projectId,buildingId:f.buildingId}]:[],...R.map($e=>({level:"floor",projectId:f.projectId,buildingId:f.buildingId,floorId:$e.id}))],ve=C.findIndex($e=>$e.level==="building"?f.level==="building":$e.level==="floor"&&f.level==="floor"&&$e.floorId===f.floorId);if(ve<0)return;const fe=Math.max(0,Math.min(C.length-1,ve+(m.deltaY>0?1:-1)));fe!==ve&&C[fe]&&Ee(C[fe])},{passive:!1});const F=e.querySelector('[data-role="canvas-stage"]');if(F&&!J){let m=!1,f=!1,R=0,C=0,ve=0,fe=0;F.addEventListener("pointerdown",de=>{de.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(m=!0,f=!1,R=de.clientX,C=de.clientY,ve=h,fe=H,F.classList.add("is-panning"),F.setPointerCapture?.(de.pointerId))}),F.addEventListener("pointermove",de=>{if(!m)return;const ae=de.clientX-R,Oe=de.clientY-C;(Math.abs(ae)>3||Math.abs(Oe)>3)&&(f=!0),h=ve+ae,H=fe+Oe,G()});const $e=()=>{m&&(m=!1,F.classList.remove("is-panning"),!f&&(z||X||I)&&(z=!1,X=!1,I=!1,ke()))};F.addEventListener("pointerup",$e),F.addEventListener("pointercancel",$e),F.addEventListener("wheel",de=>{de.preventDefault();const ae=de.deltaY<0?.12:-.12;l=Math.max(.6,Math.min(2.6,Number((l+ae).toFixed(2)))),G()},{passive:!1}),F.addEventListener("dblclick",de=>{de.target?.closest("button")||(l=1,h=0,H=0,G())})}else e.querySelector(".pacom-spatial-stage")?.addEventListener("click",m=>{m.target?.closest("button, input, select, .pacom-hud-search-wrap, .pacom-space-popover, .lov-briefing-pop")||(z||X||I)&&(z=!1,X=!1,I=!1,ke())})}e.addEventListener("keydown",x=>{x.key==="Escape"&&(X||I||z||A)&&(X=!1,I=!1,z=!1,A=!1,ke())}),await Ee(y,!0)}const aa=new Set(["lighting","hvac","alarm_rules"]),ht={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},Ke=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function sa(e){const t=new Set;for(const a of e.actions)a.command.startsWith("lighting")?t.add("照明"):a.command.startsWith("hvac")?t.add("暖通"):t.add("综合");return Array.from(t)}function la(e,t,a){const s=a?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
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
  `}async function oa(e,t,a){let s=Be(),n=!1,d="",[q,_,P,Q]=await Promise.all([t.getSpatialTree(),t.listScenes(p.floorId),t.getRuntimeSettings(p.projectId),t.getFloorDevices(p.floorId).catch(()=>[])]),M="manual",Y="balanced",T="all",pe=null,y="",K=!1,z=!1,X=!1,te="all",se=null,oe="",le="",re=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const me=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],ye=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],k=[{deviceId:Q[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],A=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${P.calendar.workdayStart} – ${P.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${P.calendar.nightGuardStart} – 次日 ${P.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],U=t.subscribeFloorEvents(p.floorId,async I=>{I.type==="control.receipt.updated"&&pe?.batchId===I.batchId&&(pe=await t.getControlBatch(I.batchId),u())});function u(){const I=y.trim().toLowerCase(),i=I?_.filter(l=>`${l.name} ${l.description}`.toLowerCase().includes(I)):_,c=P.rules.filter(l=>aa.has(l.category)),w=T==="all"?c:T==="cbm"?[]:c.filter(l=>l.category===T),N=T==="all"||T==="cbm",V=te==="issues"?me.filter(l=>l.status!=="verified"):me,be=Ke.find(l=>l.id===Y)??Ke[1],ue=a.scope.canControlDevices,ne=a.scope.canEditDeployment;e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${Ve({tree:q,session:a,scope:s,isOpen:n,searchKeyword:d})}
            </div>

            <div class="pacom-header-meta">
              <button type="button" class="pacom-badge ${re.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${re.length>0?`人工覆盖中：${re.length} 台 ${ge("chevron-down",12)}`:`全部自动托管 ${ge("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${X?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${me.length}）</button>
              ${M==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${K?"收起表单":"+ 新建场景"}</button>`:M==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${M==="manual"}" data-scene-tab="manual">快捷场景（${_.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${M==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${M==="rules"}" data-scene-tab="rules">条件联动（${c.length+ye.length}）</button>
          </nav>
        </header>

        ${z?`
            <div class="lov-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${re.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${ge("x",16)}</button>
              </div>
              ${re.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':re.map(l=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${l.name}</div>
                            <div class="pacom-row-sub">${l.reason}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${l.id}" ${ue?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${re.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${ue?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${X?`
            <aside class="lov-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${ge("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${te==="all"}" data-log-filter="all">全部（${me.length}）</button>
                  <button class="pacom-tab" aria-selected="${te==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${V.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${V.map(l=>`
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
          ${oe?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${oe}</span></div>`:""}
          ${le?`<div class="pacom-alert-banner">${le}</div>`:""}

          ${M==="manual"?`
              ${pe?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="lov-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${pe.batchId}</span>
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
                            ${pe.receipts.map(l=>`
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
                          <span class="lov-setting-title">联动动作列表（${k.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${k.map((l,h)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" data-draft-dev="${h}" aria-label="目标设备">
                                ${Q.map(H=>`<option value="${H.id}" ${H.id===l.deviceId?"selected":""}>${H.name}</option>`).join("")}
                              </select>
                              <select class="pacom-select" data-draft-cmd="${h}" aria-label="执行指令">
                                <option value="lighting.dimming" ${l.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${l.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${l.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" data-draft-val="${h}" value="${l.targetValue}" placeholder="目标值" aria-label="目标值" />
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
                <span class="pacom-row-sub">共 ${i.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${i.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="lov-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':i.map(l=>{const h=sa(l),H=l.actions.slice(0,3).map(ee=>{const Se=Q.find(Ee=>Ee.id===ee.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??ee.deviceId,we=ee.command==="lighting.dimming"?`亮度 ${ee.targetValue}%`:ee.command==="hvac.setpoint"?`设温 ${ee.targetValue}°C`:ee.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${Se} → ${we}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${l.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${h.map(ee=>`<span class="pacom-badge pacom-badge--accent">${ee}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${l.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${l.description}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${H}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${l.lastExecutedAt?l.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${l.id}" ${ue?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:M==="schedule_oss"?`
                <div class="lov-kpi-strip lov-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">当前优化启停模式</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${be.title}</div>
                    <span class="lov-kpi-delta">${be.estSaving}</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">明日预测预启动时刻</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${be.predictedStart}</div>
                    <span class="lov-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">本周累计节省运行工时</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${be.savedHours}</div>
                    <span class="lov-kpi-delta">当前人工覆盖挂起：${re.length} 台</span>
                  </div>
                </div>

                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="lov-mode-grid">
                    ${Ke.map(l=>`
                      <button type="button" class="lov-mode-card" aria-pressed="${Y===l.id}" data-oss-mode="${l.id}" ${ue?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${l.title}</strong>
                          <span class="pacom-badge ${Y===l.id?"pacom-badge--online":"pacom-badge--neutral"}">${Y===l.id?"当前生效":l.badge}</span>
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
                          ${A.map(l=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${l.name}</span>
                                    ${l.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${l.windowLabel}</div>
                                </td>
                                <td>${la(l.startHour,l.endHour,l.enabled)}</td>
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
                                      ${ue?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(l=>{const h=l==="all"?"全部":ht[l]??l,H=l==="all"?c.length+ye.length:l==="cbm"?ye.length:c.filter(ee=>ee.category===l).length;return`
                            <button type="button" class="lov-count-pill" aria-pressed="${T===l}" data-rule-cat="${l}">
                              <span>${h}</span><span class="lov-count-num">${H}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="lov-settings-card">
                    ${w.map(l=>{const h=se===l.id;return`
                          <div class="lov-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="lov-setting-meta">
                                <span class="lov-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${ht[l.category]??l.category}</span>
                                  <span>${l.name}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${l.version}</span>
                                </span>
                                <span class="lov-setting-desc">${l.summary} · 范围：${l.scopeLabel} · 回执：${l.receiptSummary??"已同步"}</span>
                              </div>
                              <div class="lov-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${l.id}">${h?"收起逻辑":"查看逻辑"}</button>
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
                                  ${ne?"":"disabled"}
                                >
                                  <span class="lov-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${h?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${l.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":l.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${l.scopeLabel} · 当前版本：v${l.version} · 最近同步：${l.receiptSummary??"已同步"}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${N?ye.map(l=>{const h=Math.min(100,Math.round(l.runtimeHours/l.thresholdHours*100));return`
                                <div class="lov-setting-row">
                                  <div class="lov-setting-meta" style="gap:6px;">
                                    <span class="lov-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${l.name}</span>
                                      <span class="pacom-badge ${h>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${l.runtimeHours} / ${l.thresholdHours} h（${h}%）</span>
                                    </span>
                                    <div class="lov-progress-track" style="max-width:340px;">
                                      <div class="lov-progress-fill" style="width:${h}%; background:${h>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="lov-setting-desc">绑定设备：${l.equipment} · 上次重置：${l.lastReset}</span>
                                  </div>
                                  <div class="lov-setting-control">
                                    <span class="pacom-row-sub">${l.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="lov-switch" role="switch" aria-checked="${l.enabled}" data-toggle-cbm="${l.id}" aria-label="切换 ${l.name}" ${ne?"":"disabled"}>
                                      <span class="lov-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,Ue(e,{onToggle:()=>{n=!n,u(),n&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:l=>{d=l,u();const h=e.querySelector("[data-global-space-search]");h&&(h.focus(),h.setSelectionRange(l.length,l.length))},onPick:l=>{s=l,n=!1,u()}}),e.querySelectorAll("[data-scene-tab]").forEach(l=>{l.addEventListener("click",()=>{M=l.dataset.sceneTab??"manual",oe="",u()})}),e.querySelectorAll("[data-toggle-overrides]").forEach(l=>{l.addEventListener("click",()=>{z=!z,u()})}),e.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{re=[],oe="已释放全部人工覆盖设备，自动节能策略已恢复托管。",u()}),e.querySelectorAll("[data-release-one]").forEach(l=>{l.addEventListener("click",()=>{const h=l.dataset.releaseOne;re=re.filter(H=>H.id!==h),oe="已恢复该设备的自动策略托管。",u()})}),e.querySelectorAll("[data-toggle-cmdlog]").forEach(l=>{l.addEventListener("click",()=>{X=!X,u()})}),e.querySelectorAll("[data-log-filter]").forEach(l=>{l.addEventListener("click",()=>{te=l.dataset.logFilter??"all",u()})}),e.querySelector("[data-close-batch]")?.addEventListener("click",()=>{pe=null,u()}),e.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),e.querySelectorAll("[data-oss-mode]").forEach(l=>{l.addEventListener("click",()=>{const h=l.dataset.ossMode;if(!h)return;Y=h;const H=Ke.find(ee=>ee.id===h);oe=`已切换至「${H?.title??h}」模式（明日预测启动 ${H?.predictedStart??""}）。`,u()})}),e.querySelectorAll("[data-toggle-schedule]").forEach(l=>{l.addEventListener("click",()=>{const h=l.dataset.toggleSchedule,H=A.find(ee=>ee.id===h);H&&(H.enabled=!H.enabled,oe=`排程「${H.name}」已${H.enabled?"恢复启用":"临时暂停"}。`,u())})}),e.querySelectorAll("[data-rule-cat]").forEach(l=>{l.addEventListener("click",()=>{T=l.dataset.ruleCat??"all",u()})}),e.querySelectorAll("[data-expand-rule]").forEach(l=>{l.addEventListener("click",()=>{const h=l.dataset.expandRule??null;se=se===h?null:h,u()})}),e.querySelectorAll("[data-toggle-cbm]").forEach(l=>{l.addEventListener("click",()=>{const h=ye.find(H=>H.id===l.dataset.toggleCbm);h&&(h.enabled=!h.enabled,oe=`工时维保规则「${h.name}」已${h.enabled?"启用":"停用"}。`,u())})}),e.querySelectorAll("[data-toggle-strategy-rule]").forEach(l=>{l.addEventListener("click",async()=>{le="";try{await t.toggleRuntimeRule(l.dataset.toggleStrategyRule,l.dataset.ruleNext==="true",Number(l.dataset.ruleVer)),P=await t.getRuntimeSettings(p.projectId),oe="条件联动规则状态与版本回执已更新。",u()}catch(h){le=h instanceof Error?h.message:String(h),u()}})}),e.querySelectorAll("[data-toggle-create]").forEach(l=>{l.addEventListener("click",()=>{K=!K,u()})}),e.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{k.push({deviceId:Q[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),u()}),e.querySelectorAll("[data-del-draft-action]").forEach(l=>{l.addEventListener("click",()=>{const h=Number(l.dataset.delDraftAction);k.length>1&&(k.splice(h,1),u())})}),e.querySelectorAll("[data-draft-dev]").forEach(l=>{l.addEventListener("change",()=>{const h=k[Number(l.dataset.draftDev)];h&&(h.deviceId=l.value)})}),e.querySelectorAll("[data-draft-cmd]").forEach(l=>{l.addEventListener("change",()=>{const h=k[Number(l.dataset.draftCmd)];h&&(h.command=l.value)})}),e.querySelectorAll("[data-draft-val]").forEach(l=>{l.addEventListener("change",()=>{const h=k[Number(l.dataset.draftVal)];h&&(h.targetValue=l.value)})}),e.querySelector("[data-scene-search]")?.addEventListener("input",l=>{const h=l.currentTarget,H=h.selectionStart??h.value.length;y=h.value,u();const ee=e.querySelector("[data-scene-search]");ee&&(ee.focus(),ee.setSelectionRange(H,H))}),e.querySelectorAll("[data-exec-scene]").forEach(l=>{l.addEventListener("click",async()=>{le="";const h=_.find(H=>H.id===l.dataset.execScene);try{pe=await t.executeScene(l.dataset.execScene),_=await t.listScenes(p.floorId),me.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:h?.name??"E7F 场景",action:`${pe.receipts.length} 台设备联动下发`,status:"verified"}),u()}catch(H){le=H instanceof Error?H.message:String(H),u()}})}),e.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async l=>{l.preventDefault();const h=new FormData(l.currentTarget);try{await t.createScene({projectId:p.projectId,floorId:p.floorId,name:String(h.get("name")??""),description:String(h.get("description")??""),actions:k.map(H=>({deviceId:H.deviceId,command:H.command,targetValue:H.targetValue==="true"?!0:H.targetValue==="false"?!1:Number(H.targetValue)||50}))}),_=await t.listScenes(p.floorId),K=!1,oe=`快捷场景已保存（共绑定 ${k.length} 条联动动作）。`,u()}catch(H){le=H instanceof Error?H.message:String(H),u()}})}u(),window.addEventListener("hashchange",()=>U(),{once:!0})}function ot(e,t){return e.length===0?'<div class="lov-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':e.map(a=>`
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
      </div>`).join("")}async function na(e,t,a){let s="calendar",n=Be(),d=!1,q="";const[_,P]=await Promise.all([t.getSpatialTree(),t.getRuntimeSettings(p.projectId)]);let Q=P,M=Q.calendar.workdayStart,Y=Q.calendar.workdayEnd,T=Q.calendar.nightGuardStart,pe=Q.calendar.nightGuardEnd,y=!0,K=[];const z=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let X="flat";const te={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},se={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},oe={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},le={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},re=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let me="",ye="";function k(){const A=a.scope.canEditDeployment,U=Q.rules.filter(i=>i.category==="weather_area"),u=Q.rules.filter(i=>i.category==="metering_carbon"),I=Q.rules.filter(i=>i.category==="templates");e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">运行设置</h1>
              ${Ve({tree:_,session:a,scope:n,maxGranularity:"project",isOpen:d,searchKeyword:q})}
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
            ${me?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${me}</span></div>`:""}
            ${ye?`<div class="pacom-alert-banner">${ye}</div>`:""}

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
                        <input class="pacom-input" style="width:116px;" type="time" data-cal-start value="${M}" aria-label="工作日上班时间" ${A?"":"disabled"} />
                        <span class="pacom-row-sub">至</span>
                        <input class="pacom-input" style="width:116px;" type="time" data-cal-end value="${Y}" aria-label="工作日下班时间" ${A?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">夜间值守巡检窗口</span>
                        <span class="lov-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:116px;" type="time" data-night-start value="${T}" aria-label="夜间值守开始" ${A?"":"disabled"} />
                        <span class="pacom-row-sub">至次日</span>
                        <input class="pacom-input" style="width:116px;" type="time" data-night-end value="${pe}" aria-label="夜间值守结束" ${A?"":"disabled"} />
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
                    <span class="pacom-row-sub">共 ${z.length} 条</span>
                  </div>
                  <div class="lov-settings-card">
                    ${z.map(i=>`
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title"><span>${i.date}</span><span class="pacom-badge pacom-badge--accent">${i.mode}</span></span>
                            <span class="lov-setting-desc">${i.label}</span>
                          </div>
                          <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${i.id}" ${A?"":"disabled"}>移除</button>
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

                ${K.length>0?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">受影响的定时与夜间规则预览</h2>
                        <span class="pacom-row-sub">共 ${K.length} 条</span>
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
                              ${K.map(i=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${i.ruleName}</div>
                                      ${i.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${i.conflictWarning}</div>`:""}
                                    </td>
                                    <td>${i.beforeWindow}</td>
                                    <td><strong>${i.afterWindow}</strong></td>
                                    <td>
                                      <span class="pacom-badge ${i.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                        ${i.conflictWarning?"交叠警告":"自动跟随"}
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
                            <option value="guanzhou_station" ${te.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                            <option value="campus_sensor" ${te.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                          </select>
                        </div>
                      </div>
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">E 栋计费与能效面积（m²）</span>
                          <span class="lov-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                        </div>
                        <div class="lov-setting-control">
                          <input class="pacom-input" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${te.billingArea}" aria-label="计费面积" ${A?"":"disabled"} />
                        </div>
                      </div>
                      ${ot(U,A)}
                    </div>
                  </section>

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">电价与碳排口径</h2>
                      <div class="pacom-tabs">
                        <button class="pacom-tab" aria-selected="${X==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                        <button class="pacom-tab" aria-selected="${X==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                      </div>
                    </div>
                    <div class="lov-settings-card">
                      ${X==="flat"?`
                          <div class="lov-setting-row">
                            <div class="lov-setting-meta">
                              <span class="lov-setting-title">综合电价参考（元 / kWh）</span>
                              <span class="lov-setting-desc">用于数据分析中的月度节能金额估算</span>
                            </div>
                            <div class="lov-setting-control">
                              <input class="pacom-input" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${te.tariffYuan}" aria-label="综合电价" ${A?"":"disabled"} />
                            </div>
                          </div>`:`
                          <div class="lov-setting-row">
                            <div class="lov-setting-meta">
                              <span class="lov-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                              <span class="lov-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                            </div>
                            <div class="lov-setting-control" style="gap:6px;">
                              <span class="pacom-row-sub">峰</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${te.tariffPeak}" ${A?"":"disabled"} />
                              <span class="pacom-row-sub">平</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${te.tariffFlat}" ${A?"":"disabled"} />
                              <span class="pacom-row-sub">谷</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${te.tariffValley}" ${A?"":"disabled"} />
                            </div>
                          </div>`}
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">区域电网碳排放因子</span>
                          <span class="lov-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                        </div>
                        <div class="lov-setting-control">
                          <select class="pacom-select" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${A?"":"disabled"}>
                            <option value="0.5271" ${te.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                            <option value="0.5703" ${te.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                          </select>
                        </div>
                      </div>
                      ${ot(u,A)}
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
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="minTemp" value="${se.minTemp}" aria-label="最低设定温度" ${A?"":"disabled"} />
                            <span class="pacom-row-sub">至</span>
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="maxTemp" value="${se.maxTemp}" aria-label="最高设定温度" ${A?"":"disabled"} />
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
                              <option value="2h" ${se.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                              <option value="4h" ${se.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                              <option value="eod" ${se.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                              <option value="permanent" ${se.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                            </select>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">控制指令回读超时阈值（秒）</span>
                            <span class="lov-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                          </div>
                          <div class="lov-setting-control">
                            <input class="pacom-input" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${se.readbackTimeoutSec}" aria-label="回读超时阈值" ${A?"":"disabled"} />
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
                        ${ot(I,A)}
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
                            <input class="pacom-input" style="width:72px;" type="number" data-auto-wo="delayMin" value="${oe.delayMin}" ${A?"":"disabled"} />
                            <span class="pacom-row-sub">分钟</span>
                            <button type="button" class="lov-switch" role="switch" aria-checked="${oe.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${A?"":"disabled"}>
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
                              <option value="暖通运维组" ${oe.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                              <option value="强电照明组" ${oe.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                              <option value="园区物业值班组" ${oe.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                            </select>
                            <span class="pacom-row-sub">防重</span>
                            <button type="button" class="lov-switch" role="switch" aria-checked="${oe.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${A?"":"disabled"}>
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
                            <input class="pacom-input" style="width:116px;" type="time" data-digest-time value="${le.dailyDigestTime}" aria-label="每日简报发送时间" />
                            <button type="button" class="lov-switch" role="switch" aria-checked="${le.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报">
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
                            <button type="button" class="lov-switch" role="switch" aria-checked="${le.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰">
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
                              ${re.map(i=>`
                                  <tr>
                                    <td><strong>${i.groupName}</strong></td>
                                    <td>${i.scope}</td>
                                    <td><span class="pacom-badge pacom-badge--neutral">${i.severity}</span></td>
                                    <td><span class="pacom-badge pacom-badge--accent">${i.channels}</span></td>
                                    <td style="text-align:right;">
                                      <button type="button" class="lov-switch" role="switch" aria-checked="${i.enabled}" data-toggle-nr="${i.id}" aria-label="切换 ${i.groupName} 通知规则">
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
    `,Ue(e,{onToggle:()=>{d=!d,k(),d&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:i=>{q=i,k();const c=e.querySelector("[data-global-space-search]");c&&(c.focus(),c.setSelectionRange(i.length,i.length))},onPick:i=>{n=i,d=!1,k()}}),e.querySelectorAll("[data-stab]").forEach(i=>{i.addEventListener("click",()=>{s=i.dataset.stab??"calendar",me="",ye="",k()})}),e.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{y=!y,me=`法定节假日自动跳过已${y?"开启":"关闭"}。`,k()}),e.querySelector("[data-night-start]")?.addEventListener("change",i=>{T=i.currentTarget.value}),e.querySelector("[data-night-end]")?.addEventListener("change",i=>{pe=i.currentTarget.value}),e.querySelector("[data-add-sd-form]")?.addEventListener("submit",i=>{i.preventDefault();const c=new FormData(i.currentTarget);z.push({id:`sd-${Date.now()}`,date:String(c.get("date")??""),label:String(c.get("label")??""),mode:String(c.get("mode")??"保持工作日工况")}),me="已添加特殊例外日期，当日自动覆盖默认节假日排程。",k()}),e.querySelectorAll("[data-del-sd]").forEach(i=>{i.addEventListener("click",()=>{const c=z.findIndex(w=>w.id===i.dataset.delSd);c>=0&&z.splice(c,1),k()})}),e.querySelectorAll("[data-tariff-mode]").forEach(i=>{i.addEventListener("click",()=>{X=i.dataset.tariffMode??"flat",k()})}),e.querySelectorAll("[data-energy-field]").forEach(i=>{i.addEventListener("change",()=>{const c=i.dataset.energyField;c&&(te[c]=i.value)})}),e.querySelector("[data-save-energy]")?.addEventListener("click",()=>{me=X==="flat"?`能碳与气象口径已保存（面积 ${te.billingArea} m² · 综合电价 ¥${te.tariffYuan}/kWh · 因子 ${te.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${te.tariffPeak} / 平 ¥${te.tariffFlat} / 谷 ¥${te.tariffValley}）。`,k()}),e.querySelectorAll("[data-guard-field]").forEach(i=>{i.addEventListener("change",()=>{const c=i.dataset.guardField;c&&(se[c]=i.value)})}),e.querySelector("[data-save-guard]")?.addEventListener("click",()=>{me=`控制安全边界已保存（温区 ${se.minTemp}–${se.maxTemp}°C · 超时 ${se.readbackTimeoutSec}s）。`,k()}),e.querySelectorAll("[data-auto-wo]").forEach(i=>{i.addEventListener("change",()=>{const c=i.dataset.autoWo;c&&(oe[c]=i.value),me="自动转工单配置已更新。",k()})}),e.querySelectorAll("[data-toggle-autowo]").forEach(i=>{i.addEventListener("click",()=>{const c=i.dataset.toggleAutowo;c&&(oe[c]=!oe[c],me="自动转工单保护策略已更新。",k())})}),e.querySelector("[data-digest-time]")?.addEventListener("change",i=>{le.dailyDigestTime=i.currentTarget.value,me=`每日晨间简报发送时刻已更新为 ${le.dailyDigestTime}。`,k()}),e.querySelectorAll("[data-notify-key]").forEach(i=>{i.addEventListener("click",()=>{const c=i.dataset.notifyKey;c&&(le[c]=!le[c],me="通知策略偏好已更新。",k())})}),e.querySelectorAll("[data-toggle-nr]").forEach(i=>{i.addEventListener("click",()=>{const c=re.find(w=>w.id===i.dataset.toggleNr);c&&(c.enabled=!c.enabled,me=`工作组「${c.groupName}」的通知分流规则已${c.enabled?"启用":"停用"}。`,k())})}),e.querySelector("[data-cal-start]")?.addEventListener("change",i=>{M=i.currentTarget.value}),e.querySelector("[data-cal-end]")?.addEventListener("change",i=>{Y=i.currentTarget.value}),e.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{ye="",K=await t.previewCalendarImpact(p.projectId,M,Y),k()}),e.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{ye="";try{const i=await t.saveWorkCalendar(p.projectId,M,Y,Q.calendar.version);Q={...Q,calendar:{...i,nightGuardStart:T,nightGuardEnd:pe}},me=`运行日历已保存至 v${i.version}（工作日 ${i.workdayStart}–${i.workdayEnd} · 夜间值守 ${T}–${pe}）`,K=[],k()}catch(i){ye=i instanceof Error?i.message:String(i),k()}}),e.querySelectorAll("[data-toggle-rule]").forEach(i=>{i.addEventListener("click",async()=>{ye="";try{await t.toggleRuntimeRule(i.dataset.toggleRule,i.dataset.ruleNext==="true",Number(i.dataset.ruleVer)),Q=await t.getRuntimeSettings(p.projectId),me="策略状态与版本回执已更新。",k()}catch(c){ye=c instanceof Error?c.message:String(c),k()}})})}k()}const ft="pacom.web.sidebar.collapsed",ia=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,nt=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"运行设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],ct={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"运行设置",deployment:"系统部署",account:"机构与账户"},yt=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function it(){const e=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return e in ct?e:"home"}function Fe(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function ca(e,t,a,s){e.classList.remove("bare-login");let n=a,d=it(),q=localStorage.getItem(ft)==="1",_=!1,P=!1,Q="",M=!1,Y=0,T={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};const pe=t.mode==="demo"&&typeof t.switchDemoRole=="function";async function y(){try{const[c,w,N,V,be]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(p.floorId).catch(()=>[]),t.listAlarms(p.floorId).catch(()=>[]),t.listWorkOrders(p.floorId).catch(()=>[]),t.listScenes(p.floorId).catch(()=>[])]);T={devices:w,zones:c.zones,alarms:N,workOrders:V,scenes:be},Y=N.filter(ue=>ue.status==="active").length,re()}catch{}}function K(){return nt.map(c=>`
        ${c.id==="settings"?'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${c.id}" aria-current="${d===c.id?"page":"false"}" title="${c.label}">
          ${ge(c.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${c.label}</span>
          ${c.id==="alarms"&&Y>0?`<span class="pacom-nav-count" title="待处理告警 ${Y} 条">${Y}</span>`:""}
        </button>`).join("")}function z(){const c=Q.trim().toLowerCase(),w=c?nt.filter(h=>h.label.toLowerCase().includes(c)).slice(0,4):nt,N=c?T.devices.filter(h=>`${h.name} ${h.id} ${h.category}`.toLowerCase().includes(c)).slice(0,5):T.devices.slice(0,3),V=c?T.zones.filter(h=>h.name.toLowerCase().includes(c)).slice(0,3):[],be=c?T.alarms.filter(h=>`${h.title} ${h.message} ${h.id}`.toLowerCase().includes(c)).slice(0,4):T.alarms.filter(h=>h.status==="active").slice(0,2),ue=c?T.workOrders.filter(h=>`${h.title} ${h.id}`.toLowerCase().includes(c)).slice(0,3):[],ne=c?T.scenes.filter(h=>`${h.name} ${h.description}`.toLowerCase().includes(c)).slice(0,3):[],J=c?yt.filter(h=>`${h.title} ${h.category}`.toLowerCase().includes(c)).slice(0,4):yt.slice(0,2),l=[];return N.length&&l.push(`<div class="pacom-search-group">${c?"设备（空间总览）":"常用设备直达"}</div>`+N.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(h.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Fe(h.name)}</span><span class="pacom-badge ${h.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${h.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),V.length&&l.push('<div class="pacom-search-group">功能区</div>'+V.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(h.id)}"><span>${Fe(h.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),be.length&&l.push(`<div class="pacom-search-group">${c?"告警":"待处理告警"}</div>`+be.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(h.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Fe(h.title)}</span><span class="pacom-badge pacom-badge--warning">${h.status==="active"?"待处理":"已确认"}</span></button>`).join("")),ue.length&&l.push('<div class="pacom-search-group">运维工单</div>'+ue.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(h.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Fe(h.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),ne.length&&l.push('<div class="pacom-search-group">智能策略</div>'+ne.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${Fe(h.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),J.length&&l.push('<div class="pacom-search-group">图纸与工程文档</div>'+J.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="${h.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Fe(h.title)}</span><span class="pacom-badge pacom-badge--neutral">${Fe(h.category)}</span></button>`).join("")),w.length&&l.push('<div class="pacom-search-group">工作区</div>'+w.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#${h.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${ge(h.icon,14)}${Fe(h.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),l.length?l.join(""):`<div class="pacom-nav-empty">未找到与「${Fe(Q)}」匹配的设备、区域、告警、工单或图纸</div>`}function X(c){c.querySelectorAll("[data-search-hash]").forEach(w=>{w.addEventListener("click",()=>{const N=w.dataset.searchHash||"#home";M=!1,Q="",te(),_=!1,window.location.hash===N?(d=it(),A(!0)):window.location.hash=N})})}function te(){if(e.querySelector('[data-role="cmd-scrim"]')?.remove(),!M)return;const c=document.createElement("div");c.className="pacom-cmd-scrim",c.dataset.role="cmd-scrim",c.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${ge("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${Fe(Q)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${z()}
        </div>
      </div>
    `,e.appendChild(c),c.addEventListener("click",V=>{V.target===c&&(M=!1,te())});const w=c.querySelector('[data-role="cmd-input"]'),N=c.querySelector('[data-role="cmd-body"]');N&&X(N),w?.focus(),w?.addEventListener("input",V=>{Q=V.currentTarget.value,N&&(N.innerHTML=z(),X(N))})}function se(){if(!P)return"";const c=n.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${q?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${Fe(n.roleLabel)}${pe?" · 演示":""}</small>
          </span>
          ${ge("check",16,"pacom-pop-check")}
        </button>

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${ge("settings",16)}</span>
          <span class="pacom-pop-text">机构设置</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${Fe(c)}</span>
          <span class="pacom-pop-text">
            <b>${Fe(n.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${pe?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">演示角色切换（RBAC 权限预览）</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(qe).map(w=>{const N=qe[w],V=w===n.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${V}" data-pop-role="${w}">
                      <span class="pacom-pop-text">
                        <b>${Fe(N.roleLabel)}</b>
                        <small>${Fe(N.displayName)}</small>
                      </span>
                      ${V?ge("check",16,"pacom-pop-check"):""}
                    </button>`}).join("")}
            </div>`:""}

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${ge("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function oe(c){switch(document.title=`${ct[d]} · PACOM Station`,d){case"home":await ta(c,t,n);return;case"analysis":await Ht(c,t,n);return;case"alarms":await qt(c,t,n);return;case"scenes":await oa(c,t,n);return;case"settings":await na(c,t,n);return;case"deployment":await Xt(c,t,n);return;case"account":await Et(c,t,n,w=>{n=w,A(!0)},le);return}}async function le(){P=!1,_=!1,M=!1,i();try{await t.logout()}finally{window.location.hash="#login",s()}}function re(){const c=e.querySelector('[data-role="nav-list"]');c&&(c.innerHTML=K(),ye())}function me(){e.querySelector('[data-role="org-popover"]')?.remove();const c=e.querySelector('[data-role="org-menu-btn"]');if(c&&c.setAttribute("aria-expanded",String(P)),!P)return;const w=document.createElement("div");w.innerHTML=se().trim();const N=w.firstElementChild;N&&(e.appendChild(N),k())}function ye(){e.querySelectorAll("[data-route]").forEach(c=>{c.addEventListener("click",()=>{const w=c.dataset.route;w===d&&!_||(d=w,_=!1,P=!1,window.location.hash=`#${d}`,A(!0))})})}function k(){e.querySelectorAll('[data-pop-act="go-account"]').forEach(c=>{c.addEventListener("click",()=>{P=!1,_=!1,d="account",window.location.hash="#account",A(!0)})}),e.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{le()}),e.querySelectorAll("[data-pop-role]").forEach(c=>{c.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const w=c.dataset.popRole;P=!1,_=!1,n=await t.switchDemoRole(w),await A(!0)})})}async function A(c){const w=e.querySelector('[data-role="main-stage"]');if(!c&&w){const V=e.querySelector(".pacom-nav-rail");V&&(V.classList.toggle("is-collapsed",q),V.classList.toggle("is-mobile-open",_));const be=e.querySelector('[data-role="mobile-scrim"]');be&&be.classList.toggle("is-open",_),me();return}e.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${ge("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${ct[d]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${Fe(n.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${_?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${q?"is-collapsed":""} ${_?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${ia}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${q?"展开侧栏":"收起侧栏"}" aria-label="${q?"展开侧栏":"收起侧栏"}">
              ${ge("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${ge("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${K()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${d==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${P}" title="广州国家实验室 · ${Fe(n.displayName)}">
              <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>
              <span class="pacom-org-name">广州国家实验室</span>
              ${ge("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,e.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{q=!q,P=!1,localStorage.setItem(ft,q?"1":"0");const V=e.querySelector(".pacom-nav-rail"),be=e.querySelector('[data-role="toggle-sidebar"]');V&&V.classList.toggle("is-collapsed",q),be&&(be.title=q?"展开侧栏":"收起侧栏",be.setAttribute("aria-label",be.title),be.innerHTML=ge("panel-left",16)),me()}),e.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{P=!1,me(),M=!0,te()}),e.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{_=!_,A(!1)}),e.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{_=!1,P=!1,A(!1)}),e.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",V=>{V.stopPropagation(),P=!P,me()}),ye(),me(),te();const N=e.querySelector('[data-role="main-stage"]');N&&await oe(N)}const U=c=>{const w=c.target;P&&!w?.closest('[data-role="org-popover"]')&&!w?.closest('[data-role="org-menu-btn"]')&&(P=!1,me())},u=c=>{if((c.metaKey||c.ctrlKey)&&c.key.toLowerCase()==="k"){c.preventDefault(),P=!1,me(),M=!M,te();return}c.key==="Escape"&&(M?(M=!1,te()):P?(P=!1,me()):_&&(_=!1,A(!1)))},I=()=>{d=it(),P=!1,_=!1,M=!1,A(!0),y()};function i(){document.removeEventListener("click",U),document.removeEventListener("keydown",u),window.removeEventListener("hashchange",I)}document.addEventListener("click",U),document.addEventListener("keydown",u),window.addEventListener("hashchange",I),await A(!0),y()}const da=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,ra='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',pa='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',He=ge("x",16),$t={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},ua={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function va(e){const t=e.replace(/\D/g,"");return t.length===11?`${t.slice(0,3)} •••• ${t.slice(7)}`:e}function Me(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function wt(e,t,a){e.classList.add("bare-login"),document.title="登录 · PACOM Station";let s=!1,n=!1,d="",q="",_="",P="",Q=!1,M={},Y="",T=!1,pe="",y=0,K=null,z=null,X="privacy",te="",se="",oe="";const le=t.mode==="demo"&&typeof t.switchDemoRole=="function";function re(){K!==null&&(window.clearInterval(K),K=null),e.classList.remove("bare-login")}function me(){y=60,K!==null&&window.clearInterval(K),K=window.setInterval(()=>{y-=1,y<=0&&(y=0,K!==null&&(window.clearInterval(K),K=null));const U=e.querySelector('[data-act="send-sms"]');U&&(U.disabled=y>0,U.textContent=y>0?`${y} 秒后重发`:pe?"重新获取":"获取验证码")},1e3)}function ye(){if(!z)return"";if(z==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${He}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${Me(se)}" />
                  </div>
                </div>
                ${oe?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${Me(oe)}</p>`:""}
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
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${He}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                ${le?"当前为离线演示环境，您可直接通过登录页的「演示角色快速体验」切换 5 类内置角色进入 E7F 工作区。":"正式接入账户服务后，将在此开放自助注册与机构邀请码加入流程。"}
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
              ${le?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">选择演示角色</button>':""}
            </div>
          </section>
        </div>
      `;if(z==="legal"){const U=$t[X],u=["privacy","terms","service"].map(I=>`<button type="button" role="tab" aria-selected="${X===I}" class="au-legal-tab ${X===I?"is-active":""}" data-act="switch-legal" data-tab="${I}">${$t[I].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${He}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${u}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${U.items.map(I=>`<li>${Me(I)}</li>`).join("")}
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
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${He}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${te||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:z==="demoRoles"&&le?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择演示角色</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${He}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(qe).map(U=>{const u=qe[U];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${U}">
                        <div>
                          <b>${Me(u.roleLabel)} · ${Me(u.displayName)}</b>
                          <small>${Me(ua[U])}</small>
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
      `:""}function k(){const U=s?`
        <div class="au-field ${M.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Me(_)}" aria-invalid="${M.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${y>0?"disabled":""}>
              ${y>0?`${y} 秒后重发`:pe?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${Me(M.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${pe?`验证码已发送至 ${Me(va(pe))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${M.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Me(d)}" aria-invalid="${M.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${Me(M.id??"")}</p>
        </div>
      `,u=s?`
        <div class="au-field ${M.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Me(P)}" aria-invalid="${M.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${Me(M.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${M.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${n?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Me(q)}" aria-invalid="${M.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${n?"隐藏密码":"显示密码"}">
              ${n?pa:ra}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${Me(M.pwd??"")}</p>
        </div>
      `;e.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${da}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${T?"disabled":""}>
                  ${U}
                  ${u}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${Y?"":"hidden"}>${Me(Y)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${Q?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${T?"disabled":""}>
                    ${T?"正在登录…":"登录"}
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
                ${le?`<div class="au-demo-bar">
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
      ${ye()}
    `,A()}function A(){const U=e.querySelector("#au-id"),u=e.querySelector("#au-pwd"),I=e.querySelector("#au-sphone"),i=e.querySelector("#au-scode"),c=e.querySelector('input[name="keep"]');U?.addEventListener("input",()=>{if(d=U.value,M.id||Y){delete M.id,Y="",U.closest(".au-field")?.classList.remove("bad");const w=e.querySelector("#au-id-err");w&&(w.textContent="");const N=e.querySelector("#au-login-ferr");N&&(N.hidden=!0)}}),u?.addEventListener("input",()=>{if(q=u.value,M.pwd||Y){delete M.pwd,Y="",u.closest(".au-field")?.classList.remove("bad");const w=e.querySelector("#au-pwd-err");w&&(w.textContent="");const N=e.querySelector("#au-login-ferr");N&&(N.hidden=!0)}}),I?.addEventListener("input",()=>{if(_=I.value,M.sphone||Y){delete M.sphone,Y="",I.closest(".au-field")?.classList.remove("bad");const w=e.querySelector("#au-sphone-err");w&&(w.textContent="");const N=e.querySelector("#au-login-ferr");N&&(N.hidden=!0)}}),i?.addEventListener("input",()=>{if(P=i.value.replace(/\D/g,"").slice(0,6),i.value=P,M.scode||Y){delete M.scode,Y="",i.closest(".au-field")?.classList.remove("bad");const w=e.querySelector("#au-scode-err");w&&(w.textContent="");const N=e.querySelector("#au-login-ferr");N&&(N.hidden=!0)}}),c?.addEventListener("change",()=>{Q=c.checked}),e.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{n=!n,k(),e.querySelector("#au-pwd")?.focus()}),e.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{s=!s,M={},Y="",k(),e.querySelector(s?"#au-sphone":"#au-id")?.focus()}),e.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const w=_.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(w)){M={sphone:"请输入有效的手机号码"},k(),e.querySelector("#au-sphone")?.focus();return}M={},pe=w,me(),k(),e.querySelector("#au-scode")?.focus()}),e.querySelector('form[data-form="login"]')?.addEventListener("submit",async w=>{if(w.preventDefault(),!T){if(M={},Y="",s?(_.trim()||(M.sphone="请输入手机号码"),/^\d{6}$/.test(P.trim())||(M.scode="请输入 6 位验证码")):(d.trim()||(M.id="请输入电子邮箱或手机号码"),q||(M.pwd="请输入密码")),Object.keys(M).length>0){k();const N=Object.keys(M)[0];e.querySelector(`#au-${N}`)?.focus();return}T=!0,k();try{const N=await t.login({account:(s?_:d).trim(),password:s?P.trim():q});re(),a(N)}catch(N){T=!1,Y=N instanceof Error?N.message:"账户或密码不正确",k()}}}),e.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{se=d.trim(),oe="",z="reset",k(),e.querySelector("#au-rs-id")?.focus()}),e.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{z="register",k()}),e.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{z="legal",k()}),e.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{te="",z="contact",k()}),e.querySelectorAll('[data-act="open-demo-roles"]').forEach(w=>{w.addEventListener("click",()=>{z="demoRoles",k()})}),e.querySelectorAll('[data-act="close-modal"]').forEach(w=>{w.addEventListener("click",()=>{z=null,k()})}),e.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",w=>{w.target===w.currentTarget&&(z=null,k())}),e.querySelectorAll('[data-act="switch-legal"]').forEach(w=>{w.addEventListener("click",()=>{const N=w.dataset.tab;N&&(X=N,k())})}),e.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),te="已复制"}catch{te="support@pacom.cn"}k()}),e.querySelector("#au-reset-form")?.addEventListener("submit",w=>{w.preventDefault(),se=e.querySelector("#au-rs-id")?.value.trim()??"",se?le?oe="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":oe="如账户存在，验证码已发送。":oe="请输入电子邮箱或手机号码",k()}),e.querySelectorAll('[data-act="pick-demo-role"]').forEach(w=>{w.addEventListener("click",async()=>{const N=w.dataset.roleId;if(!N||!t.switchDemoRole)return;const V=await t.switchDemoRole(N);re(),a(V)})})}k()}async function ma(){const e=document.getElementById("app");if(e)try{const t=St(),a=await t.getSession(),s=async n=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await ca(e,t,n,()=>{wt(e,t,d=>{s(d)})})};if(!a||window.location.hash==="#login"){wt(e,t,n=>{s(n)});return}await s(a)}catch(t){e.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(t)}</div></div>`}}ma();
//# sourceMappingURL=index-CmQFvA6D.js.map
