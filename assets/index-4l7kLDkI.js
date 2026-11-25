(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const D of c.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&s(D)}).observe(document,{childList:!0,subtree:!0});function a(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=a(l);fetch(l.href,c)}})();const r={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},qe={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[r.projectId,r.project1Id],allowedBuildingIds:[r.buildingId,r.buildingFId],allowedFloorIds:[r.lockedFloor8Id,r.floorId,r.lockedFloor6Id],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId,r.buildingFId],allowedFloorIds:[r.lockedFloor8Id,r.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId],allowedFloorIds:[r.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId],allowedFloorIds:[r.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId],allowedFloorIds:[r.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},Ge="pacom.web.demo.role";class Et{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){const t=sessionStorage.getItem(Ge);t&&qe[t]&&(this.activeSession=structuredClone(qe[t]));const a=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:r.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:a,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:a,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:r.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:a,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:a,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:r.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:a,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:a,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:r.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:a,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:a,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:a,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:a,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:r.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:a,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:r.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:a,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:a,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:a,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:a},{id:"conn-e7f-dali",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:a},{id:"conn-e7f-modbus",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:r.projectId,floorId:r.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:r.projectId,floorId:r.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:r.projectId,floorId:r.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:r.projectId,floorId:r.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:r.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:r.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:a,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:r.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:a,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:r.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:a,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:r.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:a,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:r.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:a,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:r.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:a,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(qe).map((s,l)=>({userId:s.userId,displayName:s.displayName,email:`${s.role.replaceAll("_",".")}@pacom.local`,role:s.role,roleLabel:s.roleLabel,scopeSummary:s.scope.allowedZoneIds?.length?`E栋 7F（${s.scope.allowedZoneIds.length} 个我的区域）`:`${s.scope.allowedProjectIds.length} 项目 / ${s.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:l===0?a:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(t,a,s,l,c){this.traces.unshift({at:new Date().toISOString(),channel:t,operation:a,endpoint:s,request:c,response:l}),this.traces.length>40&&this.traces.pop()}pushAudit(t,a,s,l){const c=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:c?.displayName??"anonymous",role:c?.role??"member",action:t,target:a,result:s,detail:l})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(t){if(!t.account.trim()||!t.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const a=t.account.includes("admin")?"org_admin":t.account.includes("eng")?"commissioning_engineer":t.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(qe[a]),sessionStorage.setItem(Ge,a),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:t.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(Ge),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(t){return this.activeSession=structuredClone(qe[t]),sessionStorage.setItem(Ge,t),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${t}`,this.activeSession),structuredClone(this.activeSession)}async getSpatialTree(){const t=this.requireSession(),a=[{id:r.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"},{id:r.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"}],s=[{id:r.buildingId,projectId:r.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.png"},{id:r.buildingFId,projectId:r.projectId,name:"F栋",aboveFloors:12,belowFloors:2,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.png"}],l={projects:a.filter(c=>t.scope.allowedProjectIds.includes(c.id)),buildings:s.filter(c=>t.scope.allowedBuildingIds.includes(c.id)),floors:[{id:r.lockedFloor8Id,buildingId:r.buildingId,kind:"above",level:8,name:"8F",plan:null},{id:r.floorId,buildingId:r.buildingId,kind:"above",level:7,name:"7F",areaSqm:1383.1,plan:{floorId:r.floorId,imageUrl:"./media/7F.webp",planVersion:1,updatedAt:"2026-11-22T00:00:00Z"}},{id:r.lockedFloor6Id,buildingId:r.buildingId,kind:"above",level:6,name:"6F",plan:null}],zones:[{id:"zone-e7f-lab-east",floorId:r.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:r.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:r.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:r.floorId,name:"核心走廊与弱电井",category:"corridor"}]};return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:l.projects.length,buildings:l.buildings.length,floors:l.floors.length}),l}async getFloorDevices(t){const a=this.requireSession();if(!a.scope.allowedFloorIds.includes(t)){const l={code:"FORBIDDEN",status:403,message:`当前角色「${a.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,l),this.pushAudit("floor.read",t,"denied",l.message),new Error(`403 FORBIDDEN: ${l.message}`)}if(t!==r.floorId)return[];let s=structuredClone(this.devices);return a.scope.allowedZoneIds?.length&&(s=s.filter(l=>l.logicalZoneId&&a.scope.allowedZoneIds.includes(l.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,{count:s.length}),s}async dispatchControlBatch(t){const a=this.requireSession();if(!a.scope.canControlDevices||!a.scope.allowedFloorIds.includes(t.floorId))throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权下发控制指令`);const s=`batch-e7f-${Date.now().toString(36)}`,l={batchId:s,floorId:t.floorId,createdBy:a.userId,createdAt:new Date().toISOString(),receipts:t.targets.map(c=>({deviceId:c.deviceId,command:c.command,targetValue:c.targetValue,status:"queued"}))};return this.batches.set(s,l),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",l,t),this.pushAudit("control.dispatch",s,"success",`下发 ${t.targets.length} 台设备`),l.receipts.forEach((c,D)=>{const O=this.devices.find(N=>N.id===c.deviceId);setTimeout(()=>{c.status="dispatched",c.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:s,deviceId:c.deviceId,status:"dispatched",at:c.dispatchedAt})},280+D*120),setTimeout(()=>{const N=new Date().toISOString();!O||O.connectivity==="offline"?(c.status="timeout",c.errorCode="GATEWAY_READBACK_TIMEOUT",c.errorMessage="设备离线，网关未收到回读确认",c.verifiedAt=N):(c.status="verified_success",c.observedValue=c.targetValue,c.verifiedAt=N,this.applyObservedTelemetry(O,c.command,c.targetValue,N)),this.emit({type:"control.receipt.updated",batchId:s,deviceId:c.deviceId,status:c.status,observedValue:c.observedValue,at:N})},900+D*220)}),structuredClone(l)}applyObservedTelemetry(t,a,s,l){a==="lighting.dimming"&&t.telemetry.dimming?(t.telemetry.dimming={...t.telemetry.dimming,value:s,collectedAt:l,stale:!1},t.telemetry.power&&(t.telemetry.power={...t.telemetry.power,value:Number(s)>0,collectedAt:l,stale:!1})):(a==="lighting.power"||a==="hvac.power")&&t.telemetry.power?t.telemetry.power={...t.telemetry.power,value:s,collectedAt:l,stale:!1}:a==="hvac.setpoint"&&t.telemetry.setpoint&&(t.telemetry.setpoint={...t.telemetry.setpoint,value:s,collectedAt:l,stale:!1}),this.emit({type:"telemetry.updated",floorId:t.floorId,deviceId:t.id,collectedAt:l,values:{[a]:s}})}async getControlBatch(t){this.requireSession();const a=this.batches.get(t);if(!a)throw new Error(`404 NOT_FOUND: 批次 ${t} 不存在`);return structuredClone(a)}async listAlarms(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==r.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(t,a){const s=this.requireSession();if(!s.scope.canManageAlarms){const c=`角色「${s.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",t,"denied",c),new Error(`403 FORBIDDEN: ${c}`)}const l=this.alarms.find(c=>c.id===t);if(!l)throw new Error(`404 NOT_FOUND: 告警 ${t} 不存在`);return l.status="acknowledged",l.acknowledgedAt=new Date().toISOString(),l.acknowledgedBy=s.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${t}/acknowledge`,l,{note:a}),this.pushAudit("alarm.acknowledge",t,"success",a),this.emit({type:"alarm.changed",floorId:l.floorId,alarmId:t,status:"acknowledged",at:l.acknowledgedAt}),structuredClone(l)}async listWorkOrders(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==r.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(t){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权创建工单`);const s=new Date().toISOString(),l={id:`wo-e7f-${Date.now().toString(36)}`,projectId:r.projectId,buildingId:r.buildingId,floorId:t.floorId,deviceId:t.deviceId??null,alarmId:t.alarmId??null,title:t.title,description:t.description,status:"open",assigneeId:null,createdAt:s,updatedAt:s};if(this.workOrders.unshift(l),t.alarmId){const c=this.alarms.find(D=>D.id===t.alarmId);c&&(c.workOrderId=l.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",l,t),this.pushAudit("work_order.create",l.id,"success",l.title),structuredClone(l)}async updateWorkOrderStatus(t,a){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权流转工单`);const l=this.workOrders.find(c=>c.id===t);if(!l)throw new Error(`404 NOT_FOUND: 工单 ${t} 不存在`);return l.status=a,l.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${t}`,l,{status:a}),this.pushAudit("work_order.update",t,"success",`状态更新为 ${a}`),structuredClone(l)}async updateDevicePlanPoint(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw this.pushAudit("device.plan_point",t.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权编辑图纸标点`);const s=this.devices.find(l=>l.id===t.deviceId);if(!s)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(s.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${s.version}，请刷新后重试`);return s.planPoint={floorId:t.floorId,planVersion:t.planVersion,x:Number(t.x.toFixed(4)),y:Number(t.y.toFixed(4))},s.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${t.deviceId}/plan-point`,s,t),this.pushAudit("device.plan_point",t.deviceId,"success",`坐标更新 (${s.planPoint.x}, ${s.planPoint.y})`),structuredClone(s)}async updateDeviceHardwareBinding(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权修改硬件绑定`);const s=this.devices.find(c=>c.id===t.deviceId);if(!s)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(s.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${s.version}）`);const l=new Date().toISOString();return s.physicalInstalled=t.physicalInstalled,s.physicalVerifiedAt=t.physicalInstalled?l:null,s.hardwareBinding={gatewayId:t.gatewayId,protocol:t.protocol,networkAddress:t.networkAddress,portOrChannel:t.portOrChannel,boundAt:l,boundBy:a.displayName},s.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${t.deviceId}/hardware-binding`,s,t),this.pushAudit("device.hardware_binding",t.deviceId,"success",`${t.protocol} ${t.networkAddress}`),structuredClone(s)}async listConnections(t){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(t){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权冻结交付批次`);const l=this.devices.filter(D=>D.physicalInstalled&&D.hardwareBinding).length,c={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:r.projectId,floorId:t,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:l,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:s.displayName,note:a||"例行交付基线冻结"};return this.deliveryBatches.unshift(c),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${t}/deliveries/freeze`,c,{note:a}),this.pushAudit("delivery.freeze",c.id,"success",`${l}/${this.devices.length} 已现场核验`),structuredClone(c)}async getAnalysisReport(t,a,s){this.requireSession();const l=a==="today"?1:a==="7d"?7:30,D={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*l)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*l).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(J=>J.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*l).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*l).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*l).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[t],O=a==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],N={category:t,range:a,scopeId:s,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:D.kpis,unit:D.unit,series:D.base.map((J,T)=>({label:O[T],value:Math.round(J*(t==="energy"||t==="carbon"?l/2+.5:1)),baseline:Math.round(J*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:D.base[3],unit:D.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:D.base[4],unit:D.unit,status:t==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:D.base[1],unit:D.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${t}?range=${a}&scopeId=${s}`,{kpis:N.kpis.length}),N}async listScenes(t){return this.requireSession(),structuredClone(this.scenes)}async createScene(t){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const s={id:`scn-e7f-${Date.now().toString(36)}`,projectId:t.projectId,floorId:t.floorId,name:t.name,description:t.description,enabled:!0,scheduleSummary:"手动触发",actions:t.actions,lastExecutedAt:null};return this.scenes.unshift(s),this.record("REST","createScene","POST /api/v1/scenes",s,t),this.pushAudit("scene.create",s.id,"success",s.name),structuredClone(s)}async executeScene(t){const a=this.scenes.find(l=>l.id===t);if(!a)throw new Error(`404 NOT_FOUND: 场景 ${t} 不存在`);const s=await this.dispatchControlBatch({floorId:a.floorId,idempotencyKey:`scene-${t}-${Date.now()}`,targets:a.actions,reason:`触发场景：${a.name}`});return a.lastExecutedAt=new Date().toISOString(),a.lastBatchId=s.batchId,s}async getRuntimeSettings(t){return this.requireSession(),structuredClone({projectId:r.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(t,a,s){this.requireSession();const l=s>=this.calendar.nightGuardStart?`下班时间 ${s} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,c=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${a} - ${s}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${a} (-30m) ~ ${s} (+30m)`,conflictWarning:l},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:l}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",c,{workdayStart:a,workdayEnd:s}),c}async saveWorkCalendar(t,a,s,l){const c=this.requireSession();if(!c.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${c.roleLabel}」无权修改运行日历`);if(this.calendar.version!==l)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(a>=s)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:a,workdayEnd:s,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:a,workdayEnd:s,expectedVersion:l}),this.pushAudit("settings.calendar",r.projectId,"success",`${a}-${s}`),structuredClone(this.calendar)}async toggleRuntimeRule(t,a,s){const l=this.requireSession();if(!l.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权启停运行规则`);const c=this.rules.find(D=>D.id===t);if(!c)throw new Error(`404 NOT_FOUND: 规则 ${t} 不存在`);if(c.version!==s)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${c.version}）`);return c.enabled=a,c.version+=1,c.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${t}`,c,{enabled:a,expectedVersion:s}),this.pushAudit("settings.rule_toggle",t,"success",a?"启用":"停用"),structuredClone(c)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(t,a){const s=this.requireSession();if(s.role!=="org_admin"&&s.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const l=qe[a],c={userId:`inv-${Date.now().toString(36)}`,displayName:t.split("@")[0]||t,email:t,role:a,roleLabel:l.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(c),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",c,{email:t,role:a}),this.pushAudit("org.invite",t,"success",l.roleLabel),structuredClone(c)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(t,a){return t!==r.floorId?()=>{}:(this.listeners.add(a),()=>{this.listeners.delete(a)})}emit(t){this.record("WS",t.type,`WS /ws/v1/stream?floorId=${r.floorId}`,t),this.listeners.forEach(a=>a(t))}}function Lt(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new Et}const jt={"building-2":'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',"settings-2":'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',check:'<path d="M20 6 9 17l-5-5"/>',menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',"layout-dashboard":'<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',layers:'<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',list:'<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',"folder-kanban":'<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/>',waypoints:'<circle cx="12" cy="4.5" r="2.5"/><path d="m10.2 6.3-3.9 3.9"/><circle cx="4.5" cy="12" r="2.5"/><path d="M7 12h10"/><circle cx="19.5" cy="12" r="2.5"/><path d="m13.8 17.7 3.9-3.9"/><circle cx="12" cy="19.5" r="2.5"/>',plug:'<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',calendar:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',zap:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',"shield-check":'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>'};function At(e){return e>=20?"1.5":e>=16?"1.75":e>=14?"2":"2.25"}function me(e,t=16,a=""){const s=At(t);return`<svg${a?` class="${a}"`:""} width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${s}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;">${jt[e]}</svg>`}const at=[{id:"wg-hvac",name:"暖通运维组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋 5F–7F（HVAC、FCU 与 VAV 系统）",memberCount:3,membersSummary:"陈值班、林工、周工",notifyChannel:"站内 + 短信"},{id:"wg-elec",name:"强电照明组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋全楼照明与配电回路",memberCount:2,membersSummary:"黄工、刘工",notifyChannel:"站内 + 邮件"},{id:"wg-property",name:"园区物业值班组",defaultRoleLabel:"只读访客 / 值班巡检",locationScope:"广实2号园 / 全园区公共空间与值班台",memberCount:4,membersSummary:"张班长、王巡检、赵巡检、吴值守",notifyChannel:"站内 + 每日晨报"}];async function Ct(e,t,a,s,l){let c="profile",D="directory",O=await t.listOrgMembers(),N=await t.listAuditLogs(),J="",T="all",ee="all",H="all",ce=!1,y=!1,G=!1,P=a.displayName,Z=a.role==="org_admin"||a.role==="project_admin"?"设施运维总监":a.role==="commissioning_engineer"?"楼宇自控部署工程师":a.role==="facility_operator"?"暖通运行值班工程师":"园区巡检成员",X="138-0013-8072",ne="",te="";async function oe(){[O,N]=await Promise.all([t.listOrgMembers(),t.listAuditLogs()]),ae()}function ae(){const re=t.mode==="demo"&&typeof t.switchDemoRole=="function",$e=J.trim().toLowerCase(),M=O.filter(m=>T!=="all"&&m.role!==T?!1:$e?`${m.displayName} ${m.email} ${m.roleLabel} ${m.scopeSummary}`.toLowerCase().includes($e):!0),R=N.filter(m=>{if(ee==="success"&&m.result!=="success"||ee==="denied"&&m.result==="success")return!1;if(H!=="all"){const C=`${m.action} ${m.target}`.toLowerCase();if(H==="control"&&!C.includes("control")&&!C.includes("scene")&&!C.includes("控制")||H==="alarm"&&!C.includes("alarm")&&!C.includes("work")&&!C.includes("告警")||H==="deploy"&&!C.includes("deploy")&&!C.includes("plan")&&!C.includes("hardware")&&!C.includes("部署"))return!1}return!0});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">机构与账户</h1>
              <div class="pacom-tabs" role="tablist" aria-label="机构与账户视图">
                <button class="pacom-tab" role="tab" aria-selected="${c==="profile"}" data-atab="profile">我的账户与权限</button>
                <button class="pacom-tab" role="tab" aria-selected="${c==="members"}" data-atab="members">成员与角色（${O.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${c==="audit"}" data-atab="audit">操作审计日志（${N.length}）</button>
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
            ${ne?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${ne}</span></div>`:""}
            ${te?`<div class="pacom-alert-banner">${te}</div>`:""}
            ${c==="profile"?`
                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">个人资料与授权摘要</h2>
                    <span class="pacom-badge pacom-badge--online">${a.roleLabel}</span>
                  </div>
                  <form class="pacom-settings-card" data-role="profile-form">
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">显示姓名与岗位</span>
                        <span class="pacom-setting-desc">账号 ID：${a.userId} · 所属机构：广州国家实验室</span>
                      </div>
                      <div class="pacom-setting-control" style="flex-wrap:wrap;">
                        <input class="pacom-input" style="width:150px;" name="displayName" value="${P}" aria-label="显示姓名" required />
                        <input class="pacom-input" style="width:180px;" name="jobTitle" value="${Z}" aria-label="岗位职务" />
                      </div>
                    </div>
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">告警接收手机号（SMS）</span>
                        <span class="pacom-setting-desc">用于接收 P1 严重告警短信推送与工单升级提醒</span>
                      </div>
                      <div class="pacom-setting-control">
                        <input class="pacom-input" style="width:180px;" name="phone" value="${X}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
                        <button type="submit" class="pacom-btn pacom-btn--primary">保存资料</button>
                      </div>
                    </div>
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">楼层与操作权限</span>
                        <span class="pacom-setting-desc">
                          已授权楼层 ${a.scope.allowedFloorIds.length} 层 · 设备控制：${a.scope.canControlDevices?"允许":"只读"} · 部署编辑：${a.scope.canEditDeployment?"允许":"只读"}
                        </span>
                      </div>
                    </div>
                  </form>
                </section>

                ${re?`
                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">多角色权限预览切换</h2>
                        <span class="pacom-badge pacom-badge--neutral">仅 Demo 预览可用</span>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(qe).map(m=>{const C=qe[m];return`
                              <button class="pacom-role-card ${m===a.role?"is-active":""}" data-switch-role="${m}">
                                <strong style="font-weight:500;">${C.roleLabel}</strong>
                                <span class="pacom-row-sub">${C.displayName}</span>
                                <span class="pacom-row-sub">授权楼层 ${C.scope.allowedFloorIds.length} 层 · 部署编辑：${C.scope.canEditDeployment?"是":"否"}</span>
                              </button>`}).join("")}
                      </div>
                    </section>`:""}

                <section class="pacom-section">
                  <h2 class="pacom-section-title">会话安全</h2>
                  <div class="pacom-settings-card">
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">退出当前账号</span>
                        <span class="pacom-setting-desc">退出后将清除本机登录态并返回 PACOM Station 登录页</span>
                      </div>
                      <div class="pacom-setting-control">
                        <button class="pacom-btn pacom-btn--danger" data-role="logout-btn">退出登录</button>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="pacom-section">
                  <details class="pacom-tech-details pacom-card" style="padding:12px 18px; border-top:0;">
                    <summary style="font-size:13px; font-weight:500; color:var(--pacom-text-body);">
                      <span>开发者联调：会话 RBAC 权限契约（JSON）</span>
                      <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:4px;">展开查看 ${me("chevron-down",12)}</span>
                    </summary>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                      <span class="pacom-row-sub">服务端下发的当前会话权限对象（供前后端核对）</span>
                      <button class="pacom-btn" data-copy-session="1">${G?"已复制":"复制 JSON"}</button>
                    </div>
                    <pre class="pacom-code">${JSON.stringify(a,null,2)}</pre>
                  </details>
                </section>`:c==="members"?`
                  ${ce?`
                      <section class="pacom-section">
                        <h2 class="pacom-section-title">邀请新成员</h2>
                        <form class="pacom-settings-card" data-role="invite-form">
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">成员邮箱与角色</span>
                              <span class="pacom-setting-desc">受邀成员将按角色获得对应项目与楼层的默认授权范围</span>
                            </div>
                            <div class="pacom-setting-control" style="flex-wrap:wrap;">
                              <input class="pacom-input" style="width:220px;" name="email" type="email" placeholder="colleague@pacom.local" required />
                              <select class="pacom-select" name="role">
                                ${Object.keys(qe).map(m=>`<option value="${m}">${qe[m].roleLabel}</option>`).join("")}
                              </select>
                              <button class="pacom-btn pacom-btn--primary" type="submit">发送邀请</button>
                            </div>
                          </div>
                        </form>
                      </section>`:""}

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                        <h2 class="pacom-section-title">${D==="directory"?"机构成员目录":"工作组与空间授权（Groups & Scope）"}</h2>
                        <div class="pacom-tabs" role="tablist" aria-label="成员与工作组切换">
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${D==="directory"}" data-msub="directory">成员目录（${O.length}）</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${D==="groups"}" data-msub="groups">工作组（${at.length}）</button>
                        </div>
                      </div>
                      <span class="pacom-row-sub">${D==="directory"?`当前显示 ${M.length} 人`:"按空间边界与值班组统一分派告警与工单"}</span>
                    </div>
                    ${D==="directory"?`
                        <div class="pacom-table-card">
                          <div class="pacom-table-toolbar">
                            <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                              <input class="pacom-input" name="memberSearch" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${J}" />
                              <select class="pacom-select" name="memberRoleFilter" data-role-filter>
                                <option value="all" ${T==="all"?"selected":""}>全部角色</option>
                                ${Object.keys(qe).map(m=>`<option value="${m}" ${T===m?"selected":""}>${qe[m].roleLabel}</option>`).join("")}
                              </select>
                            </div>
                            <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                              ${ce?"收起邀请":"+ 邀请成员"}
                            </button>
                          </div>
                          <div class="pacom-table-wrap">
                            <table class="pacom-table">
                              <thead>
                                <tr>
                                  <th>成员</th>
                                  <th>角色</th>
                                  <th>授权范围</th>
                                  <th>状态</th>
                                </tr>
                              </thead>
                              <tbody>
                                ${M.map(m=>`
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
                        ${y?`
                            <form class="pacom-settings-card" data-role="new-group-form" style="margin-bottom:10px;">
                              <div class="pacom-setting-row" style="display:grid; grid-template-columns:140px 130px 1fr auto; gap:8px; align-items:center;">
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
                        <div class="pacom-table-card">
                          <div class="pacom-table-toolbar">
                            <span class="pacom-row-sub">工作组同时用于「应用设置 → 消息通知」的告警分流与自动派单</span>
                            <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-group="1">${y?"收起表单":"+ 新建工作组"}</button>
                          </div>
                          <div class="pacom-table-wrap">
                            <table class="pacom-table">
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
                                ${at.map(m=>`
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
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">操作与权限拦截审计日志</h2>
                      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                        <select class="pacom-select" name="auditActionCat" data-audit-cat aria-label="按行为类别筛选">
                          <option value="all" ${H==="all"?"selected":""}>全部操作类型</option>
                          <option value="control" ${H==="control"?"selected":""}>设备控制与场景</option>
                          <option value="alarm" ${H==="alarm"?"selected":""}>告警与工单处置</option>
                          <option value="deploy" ${H==="deploy"?"selected":""}>系统部署与点位</option>
                        </select>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${ee==="all"}" data-audit-filter="all">全部（${N.length}）</button>
                          <button class="pacom-tab" aria-selected="${ee==="success"}" data-audit-filter="success">成功</button>
                          <button class="pacom-tab" aria-selected="${ee==="denied"}" data-audit-filter="denied">已拦截</button>
                        </div>
                      </div>
                    </div>
                    <div class="pacom-table-card">
                      <div class="pacom-table-wrap">
                        <table class="pacom-table">
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
                            ${R.map(m=>`
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
    `,e.querySelectorAll("[data-atab]").forEach(m=>{m.addEventListener("click",()=>{c=m.dataset.atab,ne="",te="",ae()})}),e.querySelectorAll("[data-msub]").forEach(m=>{m.addEventListener("click",()=>{D=m.dataset.msub??"directory",ae()})}),e.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{y=!y,ae()}),e.querySelector('[data-role="new-group-form"]')?.addEventListener("submit",m=>{m.preventDefault();const C=new FormData(m.currentTarget),S=String(C.get("wgName")??"").trim(),v=String(C.get("wgRole")??"运行值班员"),$=String(C.get("wgScope")??"").trim();!S||!$||(at.push({id:`wg-${Date.now()}`,name:S,defaultRoleLabel:v,locationScope:$,memberCount:1,membersSummary:a.displayName,notifyChannel:"站内 + 邮件"}),y=!1,ne=`已创建工作组「${S}」（授权空间：${$}）。`,ae())}),e.querySelector('[data-role="profile-form"]')?.addEventListener("submit",m=>{m.preventDefault();const C=new FormData(m.currentTarget);P=String(C.get("displayName")??"").trim()||a.displayName,Z=String(C.get("jobTitle")??"").trim()||Z,X=String(C.get("phone")??"").trim()||X,ne=`已更新个人资料：${P}（${Z}）· 告警短信接收号 ${X}。`,ae()}),e.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await t.logout(),window.location.hash="#login",l()}),e.querySelector("[data-copy-session]")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(a,null,2)),G=!0,ae(),window.setTimeout(()=>{G=!1,ae()},1600)}catch{}}),e.querySelectorAll("[data-switch-role]").forEach(m=>{m.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const C=await t.switchDemoRole(m.dataset.switchRole);s(C)})}),e.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{ce=!ce,ae()}),e.querySelector("[data-member-search]")?.addEventListener("input",m=>{const C=m.currentTarget,S=C.selectionStart??C.value.length;J=C.value,ae();const v=e.querySelector("[data-member-search]");v&&(v.focus(),v.setSelectionRange(S,S))}),e.querySelector("[data-role-filter]")?.addEventListener("change",m=>{T=m.currentTarget.value,ae()}),e.querySelectorAll("[data-audit-filter]").forEach(m=>{m.addEventListener("click",()=>{ee=m.dataset.auditFilter??"all",ae()})}),e.querySelector("[data-audit-cat]")?.addEventListener("change",m=>{H=m.currentTarget.value??"all",ae()}),e.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async m=>{m.preventDefault(),te="";const C=new FormData(m.currentTarget);try{await t.inviteOrgMember(String(C.get("email")??""),String(C.get("role"))),ce=!1,await oe()}catch(S){te=S instanceof Error?S.message:String(S),ae()}})}ae()}let Qe={level:"floor",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId};function Ve(){return Qe}function pt(e){return Qe=e,Qe}function Ae(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function mt(e){const t=e.match(/(-?\d+)/);if(!t)return 0;const a=Number(t[1]);return e.toUpperCase().startsWith("B")?-Math.abs(a):a}function Ft(e){if(e==="all")return{level:"all-projects"};const t=e.split(":");return t[0]==="project"&&t[1]?{level:"project",projectId:t[1]}:t[0]==="building"&&t[1]&&t[2]?{level:"building",projectId:t[1],buildingId:t[2]}:t[0]==="floor"&&t[1]&&t[2]&&t[3]?{level:"floor",projectId:t[1],buildingId:t[2],floorId:t[3]}:{level:"project",projectId:r.projectId}}function Mt(e,t,a){return a==="project"?e.level==="all-projects"?{level:"project",projectId:t.projects[0]?.id??r.projectId}:{level:"project",projectId:e.projectId}:a==="building"&&e.level==="floor"?{level:"building",projectId:e.projectId,buildingId:e.buildingId}:e}function Ue(e){const{tree:t,session:a,isOpen:s,searchKeyword:l}=e,c=e.maxGranularity??"floor",D=e.activeAlarmCount??0,O=a.scope.allowedZoneIds?.length?a.scope.allowedZoneIds:null,N=t.floors.filter(S=>a.scope.allowedFloorIds.includes(S.id)),J=O||t.projects.length<=1&&t.buildings.length<=1&&N.length<=1?"floors-only":t.projects.length>1?"multi-project":t.buildings.length>1?"single-project-multi-building":"single-building",T=J==="multi-project"&&c!=="project",ee=J==="multi-project"||J==="single-project-multi-building",H=J!=="floors-only"&&c!=="project",ce=c==="project"&&t.projects.length<=1||J==="floors-only"&&N.length<=1,y=Mt(e.scope??Qe,t,c),G=y.level==="all-projects"?null:t.projects.find(S=>S.id===y.projectId)??t.projects[0],P=y.level==="building"||y.level==="floor"?t.buildings.find(S=>S.id===y.buildingId):null,Z=y.level==="floor"?t.floors.find(S=>S.id===y.floorId):null,X=[];if(y.level==="all-projects")X.push(`全部项目（${t.projects.length}）`);else if(y.level==="project")X.push(Ae(G?.name??"广实2号园"));else if(y.level==="building")G&&X.push(`<span class="pacom-path-muted">${Ae(G.name)}</span>`),X.push(Ae(P?.name??"E栋"));else{G&&J!=="floors-only"&&X.push(`<span class="pacom-path-muted">${Ae(G.name)}</span>`),P&&H&&X.push(`<span class="pacom-path-muted">${Ae(P.name)}</span>`);const S=!H&&P?`${P.name} ${Z?.name??"7F"}`:Z?.name??"7F";X.push(Ae(S))}const ne='<span class="pacom-path-muted" style="margin:0 3px;">·</span>',te=ce?`<span class="pacom-path-trigger is-static">${X.join(ne)}</span>`:`<button type="button" class="pacom-path-trigger" data-global-space-toggle="1" aria-expanded="${s}" aria-haspopup="dialog" title="切换项目 / 楼宇 / 楼层">
        <span>${X.join(ne)}</span>
        <span style="display:inline-flex; color:var(--pacom-text-secondary);">${me("chevron-down",12)}</span>
      </button>`;if(!s||ce)return`<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap">${te}</div>`;const oe=l.trim().toLowerCase(),ae=y.level==="all-projects"?t.projects[0]?.id??r.projectId:y.projectId,re=y.level==="building"||y.level==="floor"?y.buildingId:t.buildings.find(S=>S.projectId===ae)?.id??r.buildingId,$e=t.projects.filter(S=>!oe||S.name.toLowerCase().includes(oe)),M=t.buildings.filter(S=>S.projectId===ae&&(!oe||S.name.toLowerCase().includes(oe))),R=[...t.floors.filter(S=>S.buildingId===re)].sort((S,v)=>mt(v.name)-mt(S.name)).filter(S=>!oe||S.name.toLowerCase().includes(oe)),B=c==="project"||t.projects.length>1,m=c!=="project"&&ee,C=c==="floor";return`
    <span class="pacom-title-slash" aria-hidden="true">/</span>
    <div class="pacom-path-wrap" data-role="global-space-wrap">
      ${te}
      <div class="pacom-space-popover pacom-path-popover" role="dialog" aria-label="全局空间切换" data-role="global-space-pop">
        <div class="pacom-space-pop-head">
          ${me("search",14)}
          <input type="text" name="globalSpaceSearch" data-global-space-search placeholder="检索园区、楼宇或楼层…" value="${Ae(l)}" aria-label="检索空间" />
          <button type="button" class="pacom-drawer-close" style="width:24px; height:24px;" data-global-space-toggle="1" aria-label="关闭">${me("x",14)}</button>
        </div>
        <div class="pacom-space-pop-cols">
          ${B?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">项目 / 园区</div>
                ${T?`<button type="button" class="pacom-space-pop-item ${y.level==="all-projects"?"is-active":""}" data-global-space-pick="all">
                        <span>全部项目（${t.projects.length}）</span>
                        ${y.level==="all-projects"?me("check",14):""}
                      </button>`:""}
                ${$e.map(S=>{const v=y.level==="project"&&y.projectId===S.id;return`<button type="button" class="pacom-space-pop-item ${v?"is-active":""}" data-global-space-pick="project:${Ae(S.id)}">
                      <span>${Ae(S.name)}</span>
                      ${v?me("check",14):me("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${m?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Ae(t.projects.find(S=>S.id===ae)?.name??"园区")} · 楼宇</div>
                <button type="button" class="pacom-space-pop-item ${y.level==="project"?"is-active":""}" data-global-space-pick="project:${Ae(ae)}">
                  <span>全园区</span>
                  ${y.level==="project"?me("check",14):""}
                </button>
                ${M.map(S=>{const v=y.level==="building"&&y.buildingId===S.id;return`<button type="button" class="pacom-space-pop-item ${v?"is-active":""}" data-global-space-pick="building:${Ae(S.projectId)}:${Ae(S.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Ae(S.name)}</span>
                        ${S.id===r.buildingId&&D>0?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      ${v?me("check",14):me("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${C?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Ae(t.buildings.find(S=>S.id===re)?.name??"楼宇")} · 楼层</div>
                ${H?`<button type="button" class="pacom-space-pop-item ${y.level==="building"&&y.buildingId===re?"is-active":""}" data-global-space-pick="building:${Ae(ae)}:${Ae(re)}">
                        <span>整栋</span>
                        ${y.level==="building"&&y.buildingId===re?me("check",14):""}
                      </button>`:""}
                ${R.map(S=>{const v=a.scope.allowedFloorIds.includes(S.id),$=y.level==="floor"&&y.floorId===S.id,d=S.id===r.floorId&&D>0;return`<button type="button" class="pacom-space-pop-item ${$?"is-active":""}" style="${v?"":"opacity:0.5;"}" data-global-space-pick="floor:${Ae(ae)}:${Ae(re)}:${Ae(S.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Ae(S.name)}</span>
                        ${d?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      <span class="pacom-row-sub" style="font-size:11px;">${$?me("check",14):v?S.plan?"2D":"待部署":"未授权"}</span>
                    </button>`}).join("")}
              </div>`:""}
        </div>
      </div>
    </div>
  `}function He(e,t){e.querySelectorAll("[data-global-space-toggle]").forEach(s=>{s.addEventListener("click",l=>{l.stopPropagation(),t.onToggle()})}),e.querySelector("[data-global-space-search]")?.addEventListener("input",s=>{t.onSearch(s.currentTarget.value)}),e.querySelectorAll("[data-global-space-pick]").forEach(s=>{s.addEventListener("click",l=>{l.stopPropagation();const c=s.dataset.globalSpacePick;if(!c)return;const D=pt(Ft(c));t.onPick(D)})})}const Be={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},qt={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},Dt={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function zt(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("modbus")||t.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":t.includes("co₂")||t.includes("co2")||t.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function Tt(e){return e.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:e.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function st(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("vav")||e.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:t.includes("co₂")||t.includes("co2")||e.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function Ot(e,t,a){const s=new URLSearchParams(window.location.hash.split("?")[1]??""),l=s.get("alarm"),c=s.get("wo");let D=await t.getSpatialTree(),O=Ve(),N=!1,J="",T=[],ee=[],H=[],ce=c?"workorders":"alarms",y="all",G="all",P="all",Z="impact",X=!1,ne="",te=l,oe=c,ae=null,re=null,$e="resolved";const M=new Set,R=new Map,B=new Map,m=new Map,C=new Map;let S="",v="";function $(se){const Q=C.get(se.id);if(Q)return Q;const n=se.id.match(/(\d+)$/),h=`WO-2026-${n?n[1]:se.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,K={estCost:"¥ 450",actualCost:se.status==="closed"?"¥ 380":"--",cmmsNo:h,assigneeGroup:"暖通运维组",tasks:[{id:`${se.id}-t1`,label:"核查设备供电与现场指示灯状态",done:se.status!=="open"},{id:`${se.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:se.status==="resolved"||se.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:se.createdAt?se.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${h}）`}]};return C.set(se.id,K),K}async function d(){[T,ee,H]=await Promise.all([t.listAlarms(r.floorId),t.listWorkOrders(r.floorId),t.getFloorDevices(r.floorId).catch(()=>[])]),ee.forEach(se=>$(se)),de()}function w(se){if(!se)return{name:"楼层通用",zone:"E7F",dev:null};const Q=H.find(n=>n.id===se)??null;return Q?{name:Q.name,zone:(Q.logicalZoneId?Dt[Q.logicalZoneId]:void 0)??"E7F",dev:Q}:{name:se,zone:"E7F",dev:null}}function le(se){const Q=w(se.deviceId).dev;Q&&Q.connectivity==="offline"?m.set(se.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${Q.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):m.set(se.id,{verdict:"pass",summary:`自检通过（PASS）：「${Q?.name??se.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),te=se.id,de()}function de(){const se=T.filter(i=>i.status==="active"&&!R.has(i.id)),Q=ee.filter(i=>!$(i).cancelled&&(i.status==="open"||i.status==="assigned"||i.status==="in_progress")),n=T.filter(i=>i.status!=="active").length+B.size,h=0,K=R.size,ve=ne.trim().toLowerCase(),De=T.filter(i=>{const g=R.has(i.id);if(y==="snoozed"){if(!g)return!1}else if(y==="active"){if(i.status!=="active"||g)return!1}else if(y==="acknowledged"){if(i.status!=="acknowledged")return!1}else if(g)return!1;if(P!=="all"&&i.severity!==P)return!1;if(!ve)return!0;const Y=w(i.deviceId);return`${i.title} ${i.message} ${Y.name} ${Y.zone} ${i.deviceId}`.toLowerCase().includes(ve)}),Ee=new Map;for(const i of De){const g=`${i.title} ${i.message}`.toLowerCase(),Y=g.includes("离线")||g.includes("modbus")||g.includes("通信"),be=X?Y?"root-gateway-modbus":i.deviceId:i.id,he=Y?"根因：E7F 主控网关通信链路":`根因：${w(i.deviceId).name}`,je=Ee.get(be)??{rootLabel:he,items:[]};je.items.push(i),Ee.set(be,je)}const ye=Array.from(Ee.values());Z==="impact"&&ye.sort((i,g)=>st(g.items[0]).costYuan-st(i.items[0]).costYuan);const ke=ee.filter(i=>{const g=$(i);if(G==="cancelled"){if(!g.cancelled)return!1}else if(g.cancelled||G==="open"&&(i.status==="resolved"||i.status==="closed")||G==="resolved"&&i.status!=="resolved"||G==="closed"&&i.status!=="closed")return!1;if(!ve)return!0;const Y=w(i.deviceId);return`${i.title} ${i.description} ${i.id} ${g.cmmsNo} ${Y.name}`.toLowerCase().includes(ve)});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${Ue({tree:D,session:a,scope:O,activeAlarmCount:se.length,isOpen:N,searchKeyword:J})}
            </div>

            <div class="pacom-header-meta">
              ${ce==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${X}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="pacom-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${a.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${a.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="pacom-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${me("refresh-cw",14)}</button>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="告警中心视图">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${ce==="alarms"}" data-main-tab="alarms">实时告警（${T.length-K}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${ce==="workorders"}" data-main-tab="workorders">运维工单（${ee.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ce==="alarms"&&y==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${se.length}<span class="pacom-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ce==="workorders"&&G==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${Q.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ce==="alarms"&&y==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">已闭环生效</span>
              <div class="pacom-kpi-value">${n}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="pacom-kpi-cell">
              <span class="pacom-kpi-label">关单复发待查</span>
              <div class="pacom-kpi-value" style="color:var(--pacom-status-online);">${h}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${S?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${S}</span></div>`:""}
          ${v?`<div class="pacom-alert-banner">${v}</div>`:""}

          ${ce==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${ne}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${P==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${P==="critical"?"selected":""}>严重</option>
                      <option value="major" ${P==="major"?"selected":""}>重要</option>
                      <option value="minor" ${P==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${Z==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${Z==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${y==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${y==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${y==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${y==="snoozed"}" data-status-pill="snoozed">已忽略（${K}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${M.size>0&&a.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${M.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${ye.length} 项</span>
                  </div>
                </div>
                ${ye.length===0?'<div class="pacom-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
                    <div class="pacom-table-wrap">
                      <table class="pacom-table">
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
                          ${ye.map(i=>{const g=i.items[0],Y=qt[g.severity]??{label:g.severity,cls:"pacom-badge--neutral"},be=w(g.deviceId),he=Tt(g),je=st(g),Oe=te===g.id,xe=R.get(g.id),Le=!!xe,Ne=M.has(g.id),ze=m.get(g.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${g.id}" data-check-alarm="${g.id}" ${Ne?"checked":""} ${g.status!=="active"||Le?"disabled":""} aria-label="选择 ${g.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${Y.cls}">${Y.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${g.title}</span>
                                      ${X?`<span class="pacom-badge pacom-badge--accent">${i.rootLabel}${i.items.length>1?` · 影响 ${i.items.length} 项`:""}</span>`:""}
                                      ${ze?`<span class="pacom-badge ${ze.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${ze.verdict.toUpperCase()}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${g.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${be.name}</div>
                                    <div class="pacom-row-sub">${be.zone}</div>
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
                                    <span class="pacom-badge ${Le?"pacom-badge--neutral":g.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${Le?`忽略 ${xe?.duration}`:g.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${Le?`<button class="pacom-btn" data-unsnooze="${g.id}">恢复监控</button>`:`
                                            ${g.status==="active"?`<button class="pacom-btn" data-mark-actioned="${g.id}" ${a.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${g.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${g.id}" ${a.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${g.id}">${Oe?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${Oe?`
                                    <tr class="pacom-table-detail-row">
                                      <td colspan="8">
                                        <div class="pacom-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${zt(g)}
                                            </div>
                                            ${xe?`<div class="pacom-info-banner">忽略周期：${xe.duration} · 原因备注：${xe.reason}</div>`:""}
                                            ${ze?`
                                                <div class="pacom-banner ${ze.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${ze.summary}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${ze.steps.map(Se=>`<span>${Se}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${g.id}</code> · 设备编号 <code>${g.deviceId}</code> · 关联工单 ${g.workOrderId??"无"}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${g.id}">单机自检（FTT）</button>
                                              ${!Le&&g.status==="active"?`<button class="pacom-btn" data-open-snooze="${g.id}">限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${g.deviceId}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${g.deviceId}">定位设备 →</button>
                                            </div>
                                            ${ae===g.id?`
                                                <form data-snooze-form="${g.id}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
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
              ${(()=>{const i=oe?ee.find(g=>g.id===oe)??null:null;if(i){const g=w(i.deviceId),Y=$(i),be=!!(Y.cancelled||i.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${i.id}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${i.title}</h2>
                        <span class="pacom-badge pacom-badge--accent">${Y.cmmsNo}</span>
                        ${Y.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${i.id}" data-wo-status="${i.id}" aria-label="更新工单状态" ${be?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(he=>`<option value="${he}" ${i.status===he?"selected":""}>${Be[he]}</option>`).join("")}
                          <option value="cancelled" ${Y.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${re===i.id?`
                        <form data-close-wo-form="${i.id}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${Be[$e]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${Y.cause??""}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${Y.solution??""}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${Y.actualCost==="--"?"":Y.actualCost}" />
                          </div>
                          <div style="display:flex; justify-content:flex-end; gap:8px;">
                            <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                            <button class="pacom-btn pacom-btn--primary" type="submit">保存并更新状态</button>
                          </div>
                        </form>`:""}
                    <div class="pacom-wo-workbench">
                      <div style="display:flex; flex-direction:column; gap:14px;">
                        <div class="pacom-card" style="gap:10px;">
                          <strong style="font-size:14px; font-weight:500;">工单描述与现场检查任务清单</strong>
                          <div class="pacom-row-sub">${i.description}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${Y.tasks.map(he=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${he.id}" data-wo-task="${i.id}" data-task-id="${he.id}" ${he.done?"checked":""} ${be?"disabled":""} />
                                    <span>${he.label}</span>
                                  </span>
                                  ${he.unit?`<span class="pacom-row-sub">实测：${he.reading??"--"} ${he.unit}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${Y.history.map(he=>`<span>• <span class="pacom-row-sub">${he.at}</span> — ${he.text}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${i.id}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${Y.cmmsNo}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${g.name}（${g.zone}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${Y.assigneeGroup}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${Y.estCost} / 实际 ${Y.actualCost}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${Y.cause??"待完单填写"}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${Y.solution??"待完单填写"}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${i.deviceId}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${i.deviceId}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="pacom-table-card">
                  <div class="pacom-table-toolbar">
                    <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${ne}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${G==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${G==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${G==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${G==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${G==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${ke.length} 条工单</span>
                  </div>
                  ${ke.length===0?'<div class="pacom-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
                      <div class="pacom-table-wrap">
                        <table class="pacom-table">
                          <thead>
                            <tr>
                              <th>工单事项</th>
                              <th>关联设备与空间</th>
                              <th>CMMS 单号 / 责任组</th>
                              <th style="text-align:right;">状态流转与详情</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${ke.map(g=>{const Y=w(g.deviceId),be=$(g),he=!!(be.cancelled||g.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${g.title}</span>
                                        ${be.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${g.description} · <code>${g.id}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${Y.name}</div>
                                      <div class="pacom-row-sub">${Y.zone}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${be.cmmsNo}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${be.assigneeGroup} · 预估 ${be.estCost}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${g.id}" data-wo-status="${g.id}" aria-label="更新工单状态" ${he?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(je=>`<option value="${je}" ${g.status===je?"selected":""}>${Be[je]}</option>`).join("")}
                                          <option value="cancelled" ${be.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${g.id}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${re===g.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${g.id}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${Be[$e]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${be.cause??""}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${be.solution??""}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${be.actualCost==="--"?"":be.actualCost}" />
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
    `,He(e,{onToggle:()=>{N=!N,de(),N&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:i=>{J=i,de();const g=e.querySelector("[data-global-space-search]");g&&(g.focus(),g.setSelectionRange(i.length,i.length))},onPick:i=>{O=i,N=!1,de()}}),e.querySelectorAll("[data-main-tab]").forEach(i=>{i.addEventListener("click",()=>{ce=i.dataset.mainTab??"alarms",S="",de()})}),e.querySelectorAll("[data-kpi-filter]").forEach(i=>{i.addEventListener("click",()=>{const g=i.dataset.kpiFilter;S="",g==="workorders"?(ce="workorders",G=G==="open"?"all":"open"):(g==="active"||g==="acknowledged")&&(ce="alarms",y=y===g?"all":g),de()})}),e.querySelectorAll("[data-status-pill]").forEach(i=>{i.addEventListener("click",()=>{y=i.dataset.statusPill??"all",de()})}),e.querySelectorAll("[data-wo-pill]").forEach(i=>{i.addEventListener("click",()=>{G=i.dataset.woPill??"all",de()})}),e.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{S="",d()}),e.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{X=!X,de()}),e.querySelector("[data-severity-filter]")?.addEventListener("change",i=>{P=i.currentTarget.value,de()}),e.querySelector("[data-alarm-sort]")?.addEventListener("change",i=>{Z=i.currentTarget.value??"impact",de()}),e.querySelector("[data-alarm-search]")?.addEventListener("input",i=>{const g=i.currentTarget,Y=g.selectionStart??g.value.length;ne=g.value,de();const be=e.querySelector("[data-alarm-search]");be&&(be.focus(),be.setSelectionRange(Y,Y))}),e.querySelectorAll("[data-check-alarm]").forEach(i=>{i.addEventListener("change",()=>{const g=i.dataset.checkAlarm;g&&(i.checked?M.add(g):M.delete(g),de())})}),e.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{v="";const i=Array.from(M);try{for(const g of i)await t.acknowledgeAlarm(g,"告警中心批量确认"),B.set(g,"批量确认处置");M.clear(),S=`已批量确认 ${i.length} 条告警，未来 24 小时持续校验无复发。`,await d()}catch(g){v=g instanceof Error?g.message:String(g),de()}}),e.querySelectorAll("[data-expand-alarm]").forEach(i=>{i.addEventListener("click",()=>{const g=i.dataset.expandAlarm??null;te=te===g?null:g,ae=null,de()})}),e.querySelectorAll("[data-expand-wo]").forEach(i=>{i.addEventListener("click",()=>{const g=i.dataset.expandWo??null;oe=oe===g?null:g,de()})}),e.querySelectorAll("[data-run-ftt]").forEach(i=>{i.addEventListener("click",()=>{const g=T.find(Y=>Y.id===i.dataset.runFtt);g&&le(g)})}),e.querySelectorAll("[data-open-snooze]").forEach(i=>{i.addEventListener("click",()=>{ae=i.dataset.openSnooze??null,de()})}),e.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{ae=null,de()}),e.querySelectorAll("[data-snooze-form]").forEach(i=>{i.addEventListener("submit",g=>{g.preventDefault();const Y=i.dataset.snoozeForm;if(!Y)return;const be=new FormData(i),he=String(be.get("duration")??"24h"),je=String(be.get("reason")??"").trim()||"现场核查中";R.set(Y,{duration:he,reason:je}),M.delete(Y),ae=null,S=`已限时忽略该告警（${he} · ${je}），可在「已忽略」页签中随时恢复。`,de()})}),e.querySelectorAll("[data-unsnooze]").forEach(i=>{i.addEventListener("click",()=>{const g=i.dataset.unsnooze;g&&(R.delete(g),S="已恢复该告警的实时监控。",de())})}),e.querySelectorAll("[data-go-ts]").forEach(i=>{i.addEventListener("click",()=>{const g=i.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(g)}`})}),e.querySelectorAll("[data-locate-home]").forEach(i=>{i.addEventListener("click",()=>{const g=i.dataset.locateHome??"";window.location.hash=g?`#home?device=${encodeURIComponent(g)}`:"#home"})}),e.querySelectorAll("[data-mark-actioned]").forEach(i=>{i.addEventListener("click",async()=>{v="";const g=i.dataset.markActioned;try{await t.acknowledgeAlarm(g,"现场自处理完成（Mark Actioned）"),B.set(g,"现场自处理完成"),M.delete(g),S="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await d()}catch(Y){v=Y instanceof Error?Y.message:String(Y),de()}})}),e.querySelectorAll("[data-to-wo]").forEach(i=>{i.addEventListener("click",async()=>{v="";const g=T.find(Y=>Y.id===i.dataset.toWo);if(g)try{await t.createWorkOrder({floorId:g.floorId,deviceId:g.deviceId,alarmId:g.id,title:`处置告警：${g.title}`,description:g.message}),S=`已将「${g.title}」转为运维工单并同步 CMMS。`,await d()}catch(Y){v=Y instanceof Error?Y.message:String(Y),de()}})}),e.querySelectorAll("[data-wo-status]").forEach(i=>{i.addEventListener("change",async()=>{const g=i.dataset.woStatus,Y=i.value;if(v="",Y==="cancelled"){const be=ee.find(he=>he.id===g);if(be){const he=$(be);he.cancelled=!0,he.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),S="工单已移入「已取消」分类并锁定编辑。",de()}return}if(Y==="resolved"||Y==="closed"){re=g,$e=Y,de();return}try{await t.updateWorkOrderStatus(g,Y);const be=ee.find(he=>he.id===g);be&&$(be).history.unshift({at:"刚刚",text:`状态变更为「${Be[Y]}」`}),S="工单状态已更新并写入审计日志。",await d()}catch(be){v=be instanceof Error?be.message:String(be),await d()}})}),e.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{re=null,de()}),e.querySelectorAll("[data-close-wo-form]").forEach(i=>{i.addEventListener("submit",async g=>{g.preventDefault();const Y=i.dataset.closeWoForm,be=new FormData(i),he=String(be.get("cause")??"").trim(),je=String(be.get("solution")??"").trim(),Oe=String(be.get("actualCost")??"").trim();try{await t.updateWorkOrderStatus(Y,$e);const xe=ee.find(Le=>Le.id===Y);if(xe){const Le=$(xe);Le.cause=he,Le.solution=je,Oe&&(Le.actualCost=Oe),Le.history.unshift({at:"刚刚",text:`流转至「${Be[$e]}」· 根因：${he}`})}re=null,oe=Y,S=`工单已更新为「${Be[$e]}」，根因与方案已沉淀归档。`,await d()}catch(xe){v=xe instanceof Error?xe.message:String(xe),de()}})}),e.querySelectorAll("[data-wo-task]").forEach(i=>{i.addEventListener("change",()=>{const g=ee.find(he=>he.id===i.dataset.woTask);if(!g)return;const be=$(g).tasks.find(he=>he.id===i.dataset.taskId);be&&(be.done=i.checked),de()})})}await d()}const Pt=me("chevron-down",12),Ke=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],gt=[{id:r.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:r.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:r.projectId,label:"广实2号园（全园区）",factor:18.2}],Rt={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},Nt=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],Re=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function ot(e,t=""){const a=(e??"").trim().toLowerCase();return!(!a||a.includes("%")||a.includes("°c")||a.includes("ppm")||a.includes("ms")||a.includes("m²")||a.includes("/m2")||a.includes("db")||a.includes("lx")||t.includes("率")||t.includes("均")||t.includes("强度")||t.includes("延迟"))}function Ye(e,t){const a=e*t;return Math.abs(a)>=10?Math.round(a):Math.round(a*10)/10}function _t(e,t){const a=Number(String(e).replaceAll(",","")),s=t??"";return Number.isFinite(a)?s==="kWh"&&Math.abs(a)>=1e4?{value:(a/1e3).toFixed(1),unit:"MWh",title:`精确值：${a.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(a)?a.toLocaleString("en-US"):a.toLocaleString("en-US",{maximumFractionDigits:1}),unit:s,title:`${a.toLocaleString("en-US")} ${s}`.trim()}:{value:e,unit:s,title:`${e} ${s}`.trim()}}function Bt(e,t){if(t===1)return e;const a=ot(e.unit);return{...e,kpis:e.kpis.map(s=>{const l=Number(String(s.value).replaceAll(",",""));return!Number.isFinite(l)||!ot(s.unit,s.label)?s:{...s,value:String(Ye(l,t))}}),series:a?e.series.map(s=>({...s,value:Ye(s.value,t),...typeof s.baseline=="number"?{baseline:Ye(s.baseline,t)}:{}})):e.series,zoneBreakdown:e.zoneBreakdown.map(s=>ot(s.unit)?{...s,value:Ye(s.value,t)}:s)}}function Vt(e,t){const a=Math.max(...e.series.map(H=>Math.max(H.value,H.baseline??0)),1),s=46,l=34,c=36,D=Math.max(e.series.length*(s+l)+c*2,620),O=228,N=184,J=132,T=[0,.25,.5,.75,1].map(H=>{const ce=Math.round(N-H*J);return`<line x1="${c-8}" y1="${ce}" x2="${D-18}" y2="${ce}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${H===0?"0":"3 3"}" />`}).join(""),ee=e.series.map((H,ce)=>{const y=c+ce*(s+l),G=Math.max(8,Math.round(H.value/a*J)),P=N-G,Z=typeof H.baseline=="number"&&H.value>H.baseline*1.08,X=Z?`<rect x="${y-8}" y="34" width="${s+16}" height="${N-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",ne=typeof H.baseline=="number"?`<line x1="${y-5}" y1="${Math.round(N-H.baseline/a*J)}" x2="${y+s+5}" y2="${Math.round(N-H.baseline/a*J)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",te=t&&(Z||ce===1)?`<g><title>${Z?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${y+s/2}" cy="18" r="7" fill="${Z?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${y+s/2}" y="21" text-anchor="middle" font-size="8.5" font-weight="600" fill="#fff">${Z?"!":"S"}</text></g>`:"",oe=H.value>=1e4?`${(H.value/1e3).toFixed(1)}k`:H.value.toLocaleString("en-US");return`
        ${X}
        ${ne}
        ${te}
        <g>
          <title>${H.label}：实测 ${H.value.toLocaleString("en-US")} ${e.unit}${H.baseline!==void 0?` / 基线 ${H.baseline.toLocaleString("en-US")} ${e.unit}`:""}</title>
          <rect x="${y}" y="${P}" width="${s}" height="${G}" rx="7" fill="${Z?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${y+s/2}" y="${P-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${oe}</text>
        <text x="${y+s/2}" y="${N+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${H.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${D} ${O}" style="width:100%; height:232px; display:block;" role="img" aria-label="${e.category} 趋势图">
      ${T}
      ${ee}
    </svg>
  `}function Ut(e,t){const a=e.connectivity==="offline";if(e.category==="hvac"){const s=Number(e.telemetry.setpoint?.value??24);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:a?[23.8,24,24.1,null,null,null,null,null]:[s+.8,s+.6,s+.3,s,s-.2,s+.1,s+.2,s],offline:a,colorIdx:t},{id:`${e.id}:setpoint`,deviceId:e.id,deviceName:e.name,pointKey:"setpoint",label:"设定温度",unit:"°C",points:a?[24,24,24,null,null,null,null,null]:[s,s,s,s,s,s,s,s],offline:a,colorIdx:t+1},{id:`${e.id}:valve`,deviceId:e.id,deviceName:e.name,pointKey:"valve",label:"冷阀开度",unit:"%",points:a?[42,46,51,null,null,null,null,null]:[20,24,38,62,74,68,52,30],offline:a,colorIdx:t+2}]}if(e.category==="lighting"){const s=Number(e.telemetry.dimming?.value??60);return[{id:`${e.id}:dimming`,deviceId:e.id,deviceName:e.name,pointKey:"dimming",label:"回路亮度",unit:"%",points:[0,0,Math.round(s*.8),s,s,Math.round(s*.6),s,Math.round(s*.9)],offline:a,colorIdx:t},{id:`${e.id}:power`,deviceId:e.id,deviceName:e.name,pointKey:"power",label:"实时功率",unit:"W",points:[12,12,220,285,290,175,280,245],offline:a,colorIdx:t+1}]}if(e.category==="sensor"){const s=Number(e.telemetry.temp?.value??23.4);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:[s-.5,s-.3,s,s+.3,s+.5,s+.2,s+.1,s],offline:a,colorIdx:t},{id:`${e.id}:co2`,deviceId:e.id,deviceName:e.name,pointKey:"co2",label:"CO₂ 浓度",unit:"ppm",points:[410,415,440,520,580,540,495,430],offline:a,colorIdx:t+1},{id:`${e.id}:humidity`,deviceId:e.id,deviceName:e.name,pointKey:"humidity",label:"相对湿度",unit:"%RH",points:[49,50,51,52,53,51,50,49],offline:a,colorIdx:t+2}]}return[{id:`${e.id}:latency`,deviceId:e.id,deviceName:e.name,pointKey:"latency",label:"心跳延迟",unit:"ms",points:[16,18,17,19,18,17,18,18],offline:a,colorIdx:t}]}function Ht(e){const t=e.points.filter(O=>typeof O=="number");if(!t.length)return{min:"-",avg:"-",max:"-",curr:"离线"};const a=Math.min(...t),s=Math.max(...t),l=t.reduce((O,N)=>O+N,0)/t.length,c=e.points[e.points.length-1],D=O=>Math.abs(O)<100&&!Number.isInteger(O)?O.toFixed(1):Math.round(O).toString();return{min:D(a),avg:l.toFixed(Math.abs(l)<100?1:0),max:D(s),curr:typeof c=="number"?D(c):"离线"}}function Wt(e,t,a){const s=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!e.length)return'<div class="pacom-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧展开设备并勾选 1 个或多个测点以开始多点时序对比。</span></div>';const l=(D,O)=>{const P=[];for(const M of D)for(const R of M.points)typeof R=="number"&&P.push(R);const Z=P.length?Math.min(...P)*.92:0,X=P.length?Math.max(...P)*1.08:100,ne=Math.max(X-Z,1),te=[0,.5,1].map(M=>{const R=Math.round(26+106*(1-M)),B=(Z+ne*M).toFixed(ne<15?1:0);return`
          <line x1="44" y1="${R}" x2="662" y2="${R}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${M===0?"0":"3 3"}" />
          <text x="38" y="${R+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${B}</text>
        `}).join(""),oe=s.map((M,R)=>`<text x="${44+R/(s.length-1)*618}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${M}</text>`).join(""),ae=D.map((M,R)=>{const B=Re[(M.colorIdx+R)%Re.length],m=M.points,C=[];let S=44,v=26+106/2,$=!1;m.forEach((w,le)=>{const de=44+le/(m.length-1)*618;if(typeof w=="number"){const se=26+106*(1-(w-Z)/ne);C.push(`${de.toFixed(1)},${se.toFixed(1)}`),S=de,v=se}else $=!0});const d=a?m.map((w,le)=>{if(typeof w!="number")return null;const de=44+le/(m.length-1)*618,Q=26+106*(1-(w*.96-Z)/ne);return`${de.toFixed(1)},${Q.toFixed(1)}`}).filter(Boolean).join(" "):"";return`
          ${d?`<polyline fill="none" stroke="${B}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.42" points="${d}" />`:""}
          ${C.length?`<polyline fill="none" stroke="${B}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${C.join(" ")}" />`:""}
          ${$?`<line x1="${S.toFixed(1)}" y1="${v.toFixed(1)}" x2="662" y2="${v.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${v-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),re=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${44+3/7*618}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${44+3/7*618}" y="14.8" text-anchor="middle" font-size="7.5" font-weight="600" fill="#fff">S</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${44+5/7*618}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${44+5/7*618}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `,$e=D.map((M,R)=>{const B=Re[(M.colorIdx+R)%Re.length],m=Ht(M);return`
          <tr>
            <td><span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:7px; height:7px; border-radius:50%; background:${B};"></span>${M.deviceName} · ${M.label}</span></td>
            <td><strong>${m.curr}</strong> <span class="pacom-row-sub">${M.unit}</span></td>
            <td>${m.min} <span class="pacom-row-sub">${M.unit}</span></td>
            <td>${m.avg} <span class="pacom-row-sub">${M.unit}</span></td>
            <td>${m.max} <span class="pacom-row-sub">${M.unit}</span></td>
          </tr>`}).join("");return`
      <div class="pacom-card" style="padding:14px 16px; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${O}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${D.map((M,R)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${Re[(M.colorIdx+R)%Re.length]};"></span>${M.deviceName}·${M.label}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${te}
          ${oe}
          ${re}
          ${ae}
        </svg>
        <div class="pacom-table-wrap" style="border-top:var(--hw) solid var(--pacom-border-subtle); padding-top:6px;">
          <table class="pacom-table" style="font-size:12px;">
            <thead><tr><th>测点</th><th>当前值</th><th>最小值 (Min)</th><th>平均值 (Avg)</th><th>最大值 (Max)</th></tr></thead>
            <tbody>${$e}</tbody>
          </table>
        </div>
      </div>
    `};if(t==="shared")return l(e,"单图叠合对比（Shared）");const c=new Map;for(const D of e){const O=c.get(D.unit)??[];O.push(D),c.set(D.unit,O)}return Array.from(c.entries()).map(([D,O])=>l(O,`按单位分组泳道（${D}）`)).join("")}function Zt(e){const t=[["时段",`数值 (${e.unit})`,`基线 (${e.unit})`].join(","),...e.series.map(c=>[c.label,String(c.value),c.baseline!==void 0?String(c.baseline):""].join(","))],a=new Blob([`\uFEFF${t.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),s=URL.createObjectURL(a),l=document.createElement("a");l.href=s,l.download=`pacom-${e.category}-${e.range}.csv`,l.click(),URL.revokeObjectURL(s)}function Gt(e){const t=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],a=["时间",...e.map(O=>`${O.deviceName}·${O.label}(${O.unit})`)].join(","),s=t.map((O,N)=>[O,...e.map(J=>String(J.points[N]??"No Data"))].join(",")),l=new Blob([`\uFEFF${[a,...s].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(l),D=document.createElement("a");D.href=c,D.download="pacom-timeseries-export.csv",D.click(),URL.revokeObjectURL(c)}async function Kt(e,t,a){const s=new URLSearchParams(window.location.hash.split("?")[1]??""),l=s.get("tab"),c=s.get("cat"),D=s.get("device"),O=s.get("points"),N=s.get("mode"),J=s.get("interval");let T=l==="timeseries"?"timeseries":c&&Ke.some(Q=>Q.id===c)?c:"energy",ee="7d",H="2026-11-16",ce="2026-11-23",y=Ve(),G=!1,P="",Z=y.level==="all-projects"||y.level==="project"?r.projectId:y.level==="building"?r.buildingId:r.floorId,X="chart",ne=!0,te="breakdown",oe=!1,ae=null;const[re,$e]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(r.floorId).catch(()=>[])]);let M=$e;const R=new Map,B=[];M.forEach((Q,n)=>{const h=Ut(Q,n);R.set(Q.id,h),B.push(...h)});let m=N==="shared"||N==="grouped"?N:"grouped",C=J==="15m"||J==="1h"||J==="1d"?J:"1h",S=!1;const v=[];if(O?O.split(",").forEach(Q=>{B.some(n=>n.id===Q)&&v.push(Q)}):D&&R.has(D)&&(R.get(D)??[]).slice(0,2).forEach(Q=>v.push(Q.id)),!v.length){const Q=M.find(K=>K.category==="hvac"),n=M.find(K=>K.category==="sensor"),h=M.find(K=>K.category==="lighting");Q&&(R.get(Q.id)??[]).slice(0,2).forEach(K=>v.push(K.id)),n&&(R.get(n.id)??[]).slice(0,1).forEach(K=>v.push(K.id)),h&&(R.get(h.id)??[]).slice(0,1).forEach(K=>v.push(K.id)),v.length||B.slice(0,3).forEach(K=>v.push(K.id))}const $=new Set(v),d=new Set(M.filter((Q,n)=>n<2||(R.get(Q.id)??[]).some(h=>$.has(h.id))).map(Q=>Q.id)),w=[{id:"fav-hvac",name:"E7F 空调温控与 CO₂ 联动对照",pointIds:B.filter(Q=>Q.pointKey==="temp"||Q.pointKey==="setpoint"||Q.pointKey==="co2").slice(0,4).map(Q=>Q.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度与功率对比",pointIds:B.filter(Q=>Q.pointKey==="dimming"||Q.pointKey==="power").slice(0,4).map(Q=>Q.id),mode:"grouped",interval:"15m"}];let le="";async function de(){const Q=T==="timeseries"?"energy":T,n=ee==="custom"?"30d":ee;ae=await t.getAnalysisReport(Q,n,r.floorId),se()}function se(){if(!ae)return;const Q=T==="timeseries",n=T==="timeseries"?"energy":T,h=Ke.find(E=>E.id===n)??Ke[0],K=gt.find(E=>E.id===Z)??gt[0],ve=Bt(ae,K.factor),De=ve.zoneBreakdown.filter(E=>E.status==="warning"),Ee=Rt[n],ye=Math.max(...ve.zoneBreakdown.map(E=>E.value),1),ke=B.filter(E=>$.has(E.id));e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">数据分析</h1>
              ${Ue({tree:re,session:a,scope:y,isOpen:G,searchKeyword:P})}
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px; width:108px;">
                <option value="today" ${ee==="today"?"selected":""}>今日</option>
                <option value="7d" ${ee==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${ee==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${ee==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${Q?"":`<button class="pacom-btn ${oe?"pacom-btn--primary":""}" data-toggle-canvas="1">${oe?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="分析维度">
            ${Ke.map(E=>`<button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${T===E.id}" data-cat="${E.id}">${E.label}</button>`).join("")}
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${T==="timeseries"}" data-cat="timeseries">多点时序</button>
          </nav>
          ${ee==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${H}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${ce}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${Q?`
            <div class="pacom-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:296px; min-width:272px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">设备 → 测点树</span>
                    <span class="pacom-row-sub">已选 ${ke.length} 个测点</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${w.map(E=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${E.id}">${me("star",14)}<span style="overflow:hidden;text-overflow:ellipsis;">${E.name}</span></button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${M.map(E=>{const i=R.get(E.id)??[],g=d.has(E.id),Y=i.filter(be=>$.has(be.id)).length;return`
                        <div style="display:flex; flex-direction:column; gap:2px;">
                          <button type="button" class="pacom-row" data-ts-expand="${E.id}" style="cursor:pointer; justify-content:space-between;" title="${E.name}">
                            <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
                              <span style="display:inline-flex; transition:transform 140ms ease; transform:rotate(${g?"0deg":"-90deg"}); opacity:0.65;">${Pt}</span>
                              <div style="min-width:0; flex:1; text-align:left;">
                                <div class="pacom-row-title" style="font-size:13px;">${E.name}</div>
                                <div class="pacom-row-sub">${i.length} 个测点 · ${E.connectivity==="online"?"在线":"离线"}</div>
                              </div>
                            </div>
                            ${Y>0?`<span class="pacom-badge pacom-badge--accent">${Y}</span>`:""}
                          </button>
                          ${g?`<div style="display:flex; flex-direction:column; gap:2px; padding-left:20px; padding-bottom:4px;">
                                  ${i.map(be=>{const he=$.has(be.id),je=Re[be.colorIdx%Re.length];return`
                                        <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:5px 8px; border-radius:var(--pacom-radius-sm); cursor:pointer; font-size:12px; background:${he?"var(--pacom-surface-recessed)":"transparent"};">
                                          <span style="display:inline-flex; align-items:center; gap:6px;">
                                            <input type="checkbox" name="tsPoint-${be.id}" data-ts-point="${be.id}" ${he?"checked":""} />
                                            <span style="width:7px; height:7px; border-radius:50%; background:${je};"></span>
                                            <span style="color:var(--pacom-text-primary);">${be.label}</span>
                                          </span>
                                          <span class="pacom-row-sub">${be.unit}</span>
                                        </label>`}).join("")}
                                </div>`:""}
                        </div>`}).join("")}
                </div>
              </aside>
              <div class="pacom-subnav-main" style="padding:2px 4px 24px;">
                ${le?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${le}</span></div>`:""}
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">多测点实时遥测对比（Time Series）</h2>
                    <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:6px;">${me("clock",12)} 排程(S) · ${me("triangle-alert",12)} 告警(!) · 虚线为断流/上周同期</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>对比上周同期</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${S}" data-ts-compare="1" aria-label="叠加对比上周同期曲线">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <select class="pacom-select" name="tsInterval" data-ts-interval aria-label="采样粒度" style="height:28px; font-size:12px;">
                      <option value="15m" ${C==="15m"?"selected":""}>15 分钟</option>
                      <option value="1h" ${C==="1h"?"selected":""}>1 小时</option>
                      <option value="1d" ${C==="1d"?"selected":""}>1 天</option>
                    </select>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${m==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${m==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ts-share="1">复制分享链接</button>
                  </div>
                </div>
                ${Wt(ke,m,S)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="pacom-kpi-strip" role="region" aria-label="核心统计指标">
                ${ve.kpis.map(E=>{const i=_t(E.value,E.unit);return`
                      <div class="pacom-kpi-cell" title="${i.title}">
                        <span class="pacom-kpi-label">${E.label}</span>
                        <div class="pacom-kpi-value">
                          <span>${i.value}</span>
                          ${i.unit?`<span class="pacom-kpi-unit">${i.unit}</span>`:""}
                        </div>
                        <span class="pacom-kpi-delta">${E.delta??"与基线持平"}</span>
                      </div>`}).join("")}
              </div>

              <section class="pacom-section">
                <div class="pacom-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="pacom-section-title">${h?.label??"趋势"}趋势（${ve.unit}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${K.label} · 更新于 ${ve.updatedAt.slice(5,16).replace("T"," ")}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${ne}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
                        <span class="pacom-switch-thumb"></span>
                      </button>
                    </label>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${X==="chart"}" data-chart-mode="chart">趋势图</button>
                      <button class="pacom-tab" aria-selected="${X==="table"}" data-chart-mode="table">明细原表</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-card" style="gap:10px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                    <span class="pacom-row-sub">
                      ${De.length>0?`关注：${De.map(E=>E.zoneName).join("、")} 指标偏高，建议前往智能策略优化启停时段。`:`${h?.desc??"空间运行洞察"} · ${Ee.summary}`}
                    </span>
                    <button class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-strategy="1">去智能策略优化 →</button>
                  </div>
                  ${X==="chart"?Vt(ve,ne):`
                      <div class="pacom-table-wrap">
                        <table class="pacom-table">
                          <thead>
                            <tr>
                              <th>统计时段</th>
                              <th>实测值（${ve.unit}）</th>
                              <th>基线参考</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${ve.series.map(E=>{const i=typeof E.baseline=="number"&&E.value>E.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${E.label}</strong></td>
                                    <td>${E.value.toLocaleString("en-US")}</td>
                                    <td>${E.baseline!==void 0?E.baseline.toLocaleString("en-US"):"-"}</td>
                                    <td><span class="pacom-badge ${i?"pacom-badge--warning":"pacom-badge--online"}">${i?"超基线":"正常"}</span></td>
                                  </tr>`}).join("")}
                          </tbody>
                        </table>
                      </div>`}
                </div>
              </section>

              <div class="pacom-grid-2">
                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">功能区排行对比</h2>
                    <span class="pacom-row-sub">${ve.zoneBreakdown.length} 个功能区</span>
                  </div>
                  <div class="pacom-table-card">
                    <div class="pacom-table-wrap">
                      <table class="pacom-table">
                        <thead>
                          <tr>
                            <th>功能区</th>
                            <th>占比分布</th>
                            <th>当前值</th>
                            <th>状态</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${ve.zoneBreakdown.map(E=>{const i=Math.max(8,Math.round(E.value/ye*100));return`
                                <tr>
                                  <td style="font-weight:500;">${E.zoneName.replace(/^7F\s*/,"")}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${i}%; height:100%; border-radius:999px; background:${E.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${E.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${E.unit}</span></td>
                                  <td>
                                    <span class="pacom-badge ${E.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${E.status==="warning"?"偏高关注":"正常"}
                                    </span>
                                  </td>
                                </tr>`}).join("")}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">${oe?"E7F 空间对照预览":n==="energy"&&te==="load"?"峰谷负荷分布（Load Profile）":Ee.title}</h2>
                    ${!oe&&n==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${te==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${te==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${oe?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${oe?'<img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
                        ${n==="environment"?`
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
                        ${(n==="energy"&&te==="load"?Nt:Ee.items).map(E=>`
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                                <span style="font-weight:500; color:var(--pacom-text-primary);">${E.name}</span>
                                <span class="pacom-row-sub">${E.detail} · <strong style="color:var(--pacom-text-primary);">${E.pct}%</strong></span>
                              </div>
                              <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                <div style="width:${Math.min(100,E.pct)}%; height:100%; border-radius:999px; background:${E.color};"></div>
                              </div>
                            </div>`).join("")}`}
                  </div>
                </section>
              </div>
            </div>`}
      </div>
    `,He(e,{onToggle:()=>{G=!G,se(),G&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:E=>{P=E,se();const i=e.querySelector("[data-global-space-search]");i&&(i.focus(),i.setSelectionRange(E.length,E.length))},onPick:E=>{y=E,Z=E.level==="all-projects"||E.level==="project"?r.projectId:E.level==="building"?r.buildingId:r.floorId,G=!1,se()}}),e.querySelectorAll("[data-cat]").forEach(E=>{E.addEventListener("click",()=>{T=E.dataset.cat??"energy",le="",T==="timeseries"?se():de()})}),e.querySelector("[data-range-select]")?.addEventListener("change",E=>{ee=E.currentTarget.value??"7d",de()}),e.querySelector("[data-custom-start]")?.addEventListener("change",E=>{H=E.currentTarget.value}),e.querySelector("[data-custom-end]")?.addEventListener("change",E=>{ce=E.currentTarget.value}),e.querySelectorAll("[data-chart-mode]").forEach(E=>{E.addEventListener("click",()=>{X=E.dataset.chartMode??"chart",se()})}),e.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{ne=!ne,se()}),e.querySelectorAll("[data-energy-right]").forEach(E=>{E.addEventListener("click",()=>{te=E.dataset.energyRight??"breakdown",se()})}),e.querySelector("[data-export-csv]")?.addEventListener("click",()=>{Q?Gt(ke):Zt(ve)}),e.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{oe=!oe,se()}),e.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),e.querySelectorAll("[data-ts-expand]").forEach(E=>{E.addEventListener("click",()=>{const i=E.dataset.tsExpand;i&&(d.has(i)?d.delete(i):d.add(i),se())})}),e.querySelectorAll("[data-ts-point]").forEach(E=>{E.addEventListener("change",()=>{const i=E.dataset.tsPoint;i&&(E.checked?$.add(i):$.delete(i),le="",se())})}),e.querySelectorAll("[data-ts-mode]").forEach(E=>{E.addEventListener("click",()=>{m=E.dataset.tsMode??"grouped",se()})}),e.querySelector("[data-ts-interval]")?.addEventListener("change",E=>{C=E.currentTarget.value??"1h",se()}),e.querySelector("[data-ts-compare]")?.addEventListener("click",()=>{S=!S,se()}),e.querySelector("[data-ts-share]")?.addEventListener("click",()=>{const i=`#analysis?tab=timeseries&points=${encodeURIComponent(Array.from($).join(","))}&mode=${m}&interval=${C}`,g=`${window.location.origin}${window.location.pathname}${i}`;navigator.clipboard?.writeText&&navigator.clipboard.writeText(g).catch(()=>{}),window.history.replaceState(null,"",i),le=`已复制分享链接（含 ${$.size} 个测点、${m==="grouped"?"按单位分组":"单图叠合"}、${C} 粒度）。`,se()}),e.querySelectorAll("[data-load-fav]").forEach(E=>{E.addEventListener("click",()=>{const i=w.find(g=>g.id===E.dataset.loadFav);i&&($.clear(),i.pointIds.forEach(g=>{$.add(g);const Y=g.split(":")[0];Y&&d.add(Y)}),m=i.mode,C=i.interval,le=`已加载收藏视图「${i.name}」。`,se())})}),e.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if($.size===0)return;const E=`自定义对比 #${w.length+1}（${$.size} 测点）`;w.push({id:`fav-${Date.now()}`,name:E,pointIds:Array.from($),mode:m,interval:C}),le=`已保存当前时序配置为「${E}」。`,se()})}await de()}const Yt={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},Xt={frozen:"已冻结",draft:"草稿",delivered:"已交付"},nt=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"每层建议 2–3 个 Proxy，空旷 20–30m 或拐角可按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 避免广播干扰；自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度 0–10 级调光；自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造；支持通断控制"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay 保障吞吐"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"1 层 1 网标准配置，承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙/拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关接入，无需加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485/通讯管理机接入，记录厂家编码与表号"}],lt=[{id:"doc-hvac-7f",name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",name:"E7F_协议点位与蓝牙Mesh映射台账.xlsx",category:"点位台账",boundScope:"E栋 7F · 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}],Qt={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function A(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function vt(e){const t=e.match(/(-?\d+)/);if(!t)return 0;const a=Number(t[1]);return e.toUpperCase().startsWith("B")?-Math.abs(a):a}function Jt(e){return e.category==="gateway"?e.name.includes("蓝牙")?"蓝牙适配器":"主控网关":e.category==="lighting"?e.name.includes("702")?"702 照明":e.name.slice(0,6):e.category==="hvac"?e.name.includes("VAV")?"VAV-02":e.name.includes("FCU")?"FCU-01":e.name.slice(0,6):e.category==="sensor"?"环境传感":e.name.slice(0,6)}function ea(e,t){const a=e.status!=="connected",s=t.filter(l=>l.hardwareBinding?.protocol===e.protocol);return s.length>0?s.map(l=>{const c=l.connectivity==="offline"||a;return{pointName:l.category==="hvac"?"送风温度 / 阀门开度":l.category==="lighting"?"回路开关 / 亮度反馈":l.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:l.name,value:c?"无上报":l.category==="hvac"?"23.4°C · 62%":l.category==="lighting"?"开启 · 80%":l.category==="sensor"?"23.2°C · 640 ppm":"负载 24% · 18ms",interval:"60s",lastSeen:c?"46 分钟前":"12 秒前",quality:c?l.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${e.protocol.toUpperCase()} 采集通道汇总点`,deviceName:e.name,value:a?"采样延迟":"正常上报",interval:"60s",lastSeen:a?"38 分钟前":"9 秒前",quality:a?"delayed":"online"}]}async function ta(e,t,a){const s=new URLSearchParams(window.location.hash.split("?")[1]??"").get("sec");let l=s==="floors"||s==="projects"?"project_config":s==="floorplan"||s==="devices"?"floorplan":s==="inventory"?"ledger":s==="connections"?"connections":"overview",c=s==="floors"?"floor_zones":"project_building",D="",O="all",N=Ve(),J=!1,T="",ee="device",H="all",ce="",y=!1,G=!1,P="mesh",Z=1,X=0,ne=0,te=await t.getSpatialTree(),oe=[],ae=[],re=[];const $e=[],M=new Map,R=new Map,B=[],m={...Qt},C=[];let S=N.level==="floor"?N.floorId:r.floorId,v=N.level==="building"||N.level==="floor"?N.buildingId:r.buildingId,$=null,d=!1,w=!1,le=!1,de=!1,se=!1,Q=null,n=null,h=null,K=3,ve=!1,De=[],Ee=null,ye="",ke="";const E=new Map([["dev-e7f-gw-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-02",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-env-01",{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}]]),i=[{id:"lm-1",deviceId:"dev-e7f-lt-01",channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],g=[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:r.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:r.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:r.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:r.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],Y=new Map;function be(){return{...te,floors:he(),zones:Oe()}}function he(){return[...te.floors,...$e].map(k=>{const U=M.get(k.id);return U?{...k,plan:{floorId:k.id,imageUrl:U,planVersion:(k.plan?.planVersion??0)+1,updatedAt:new Date().toISOString()}}:k})}function je(k){return[...he().filter(U=>U.buildingId===k)].sort((U,o)=>vt(o.name)-vt(U.name))}function Oe(){return[...te.zones,...B]}function xe(k){return[...k===r.floorId?oe:[],...C.filter(o=>o.floorId===k)]}function Le(k){return k?Oe().find(U=>U.id===k)?.name.replace(/^7F\s*/,"")??k:"未分配功能区"}function Ne(k){S=k;const U=he().find(o=>o.id===k);U&&(v=U.buildingId,N=pt({level:"floor",projectId:r.projectId,buildingId:U.buildingId,floorId:U.id})),$=null,G=!1,w=!1,Z=1,X=0,ne=0}async function ze(){ke="";const[k,U,o,u]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(r.floorId).catch(()=>[]),t.listConnections(r.projectId),t.listDeliveryBatches(r.floorId)]);te=k,oe=U,ae=o,re=u;const b=xe(S);$&&!b.some(ge=>ge.id===$)&&($=null,G=!1),d=b.find(ge=>ge.id===$)?.physicalInstalled??!1,ue()}function Se(){const k=e.querySelector('[data-role="dep-viewport"]');k&&(k.style.transform=`translate(${X}px, ${ne}px) scale(${Z})`);const U=e.querySelector('[data-role="dep-zoom-label"]');U&&(U.textContent=`${Math.round(Z*100)}%`)}function Ze(k){ke="",k.connectivity==="offline"?ke=`单机回读自检未通过（FAIL）：「${k.name}」当前离线，请核查网关链路或中继覆盖。`:ye=`单机回读自检通过（PASS）：「${k.name}」指令下发与状态回读一致，已安全复位。`,ue()}function x(){ke="";const k=xe(S),U=k.filter(L=>L.connectivity==="offline"),o=k.length-U.length,u=new Date;Ee={ranAt:`${String(u.getHours()).padStart(2,"0")}:${String(u.getMinutes()).padStart(2,"0")}:${String(u.getSeconds()).padStart(2,"0")}`,total:k.length,passed:o,failed:U.length,failedNames:U.map(L=>L.name)},U.length>0?ke=`全层批量自检完成：${o}/${k.length} 台通过，${U.length} 台异常（${U.map(L=>L.name).join("、")}）。`:ye=`全层批量自检全部通过（${o}/${k.length}），设备已自动安全复位。`,ue()}function W(){const k=xe(S),U=[],o=k.filter(j=>j.connectivity==="offline"),u=k.filter(j=>!j.planPoint),b=k.filter(j=>E.get(j.id)?.proxy).length,L=k.filter(j=>E.get(j.id)?.relay).length,ge=k.length?L/k.length:0;o.length>0?o.forEach(j=>U.push({level:"fail",title:`节点不可达：${j.name}`,detail:"建议检查供电、通信端子，若属无线节点可在遮挡拐角处增设中继节点。",deviceId:j.id})):U.push({level:"ok",title:"全网节点可达性正常",detail:`${k.length} 台设备均正常响应心跳。`}),b<1?U.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，方便现场 App 接入网络。"}):U.push({level:"ok",title:`代理节点配置合理（${b} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),ge>.25&&k.length>=4&&U.push({level:"warn",title:`中继比例偏高（${Math.round(ge*100)}%）`,detail:"建议中继节点控制在总设备数 10% 左右，避免广播风暴。"}),u.length>0&&U.push({level:"warn",title:`尚有 ${u.length} 台未完成图纸标点`,detail:"请在「图纸标点」中补齐坐标以便施工定位。"}),De=U,ye=`已完成蓝牙 Mesh 网络体检（检测 ${k.length} 台节点，发现 ${U.filter(j=>j.level!=="ok").length} 项关注）。`,ue()}function q(){const k=xe(S),U=[["设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...k.map(L=>[L.name,L.category,Le(L.logicalZoneId),L.planPoint?`${Math.round(L.planPoint.x*100)}%/${Math.round(L.planPoint.y*100)}%`:"未标点",L.hardwareBinding?`${L.hardwareBinding.protocol} ${L.hardwareBinding.networkAddress}`:"未绑定",L.physicalInstalled?"已复核":"待复核",L.connectivity==="online"?"在线":"离线"].join(","))],o=new Blob([`\uFEFF${U.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),u=URL.createObjectURL(o),b=document.createElement("a");b.href=u,b.download="pacom-deployment-inventory.csv",b.click(),URL.revokeObjectURL(u)}const p={overview:{title:"部署总览",subtitle:"按 5 步工程流水线跟踪整栋底图、设备标记、入网与边缘同步进度。"},project_config:{title:"项目配置",subtitle:"维护项目地理坐标、楼宇实景图、批量楼层及各层 2D 平面底图与功能区。"},floorplan:{title:"设备标记",subtitle:"在 2D 平面底图上完成设备标记、回路灯点与硬件复核。"},ledger:{title:"设备列表",subtitle:"核查全层四态设备清单，统一下发人感/光感参数并执行单机或全层自检。"},groups:{title:"设备分组",subtitle:"统一管理端侧蓝牙 Mesh 自治联动组与云端业务分组。"},network_topo:{title:"设备网络",subtitle:"执行蓝牙 Mesh 网络体检、云边协同同步，并查看自动生成的通信与业务拓扑。"},connections:{title:"系统接入",subtitle:"管理边缘网关服务与暖通、电表、环境等异构子系统通道及传感器采集质量。"}};function f(){const k=(U,o,u)=>`
      <button type="button" class="pacom-unified-item" aria-current="${l===U}" data-dep-nav="${U}">
        ${me(o,16)}
        <span>${u}</span>
      </button>`;return`
      <aside class="pacom-unified-rail" aria-label="系统部署菜单">
        <div class="pacom-unified-group">
          ${k("overview","layout-dashboard","部署总览")}
          ${k("project_config","layers","项目配置")}
          ${k("floorplan","map-pin","设备标记")}
          ${k("ledger","list","设备列表")}
          ${k("groups","folder-kanban","设备分组")}
          ${k("network_topo","waypoints","设备网络")}
          ${k("connections","plug","系统接入")}
        </div>
      </aside>
    `}function V(k){return l==="overview"?`
        <button type="button" class="pacom-btn" data-export-inv="1">导出台账</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${k?"":"disabled"}>+ 交付冻结</button>
      `:l==="floorplan"?'<button type="button" class="pacom-btn" data-export-inv="1">导出施工标点表</button>':l==="ledger"?'<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ftt="1">一键全层自检 (FTT)</button>':l==="groups"?`<button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-group="1" ${k?"":"disabled"}>${se?"收起表单":"+ 新建分组"}</button>`:l==="network_topo"?`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">一键网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${k?"":"disabled"}>${ve?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `:l==="connections"?`
        <button type="button" class="pacom-btn" data-edge-restart="service" ${k?"":"disabled"}>重启边缘服务</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-conn="1" ${k?"":"disabled"}>${de?"收起向导":"+ 新增接入通道"}</button>
      `:`<span class="pacom-badge ${k?"pacom-badge--online":"pacom-badge--warning"}">${k?"可编辑":"只读"}</span>`}function F(){const k=je(v),U=k.filter(j=>!!j.plan).length,o=k.flatMap(j=>xe(j.id)),u=o.filter(j=>!!j.planPoint).length,b=o.filter(j=>j.connectivity==="online").length,L=o.filter(j=>j.physicalInstalled).length,ge=k.filter(j=>xe(j.id).length>0&&!ve).length;return`
      <div class="pacom-kpi-strip pacom-kpi-strip--5" role="region" aria-label="整栋 5 步部署流水线">
        <button type="button" class="pacom-kpi-cell" data-dep-nav="project_config" data-proj-sub="floor_zones" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${U===k.length?"pacom-dot--online":"pacom-dot--warning"}"></span>1. 空间与底图</span>
          <div class="pacom-kpi-value">${U}<span class="pacom-kpi-unit">/ ${k.length} 层</span></div>
          <span class="pacom-kpi-delta">${U===k.length?"全部底图就绪":`尚缺 ${k.length-U} 层底图 →`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="floorplan" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${u===o.length?"pacom-dot--online":"pacom-dot--warning"}"></span>2. 设备标记</span>
          <div class="pacom-kpi-value">${u}<span class="pacom-kpi-unit">/ ${o.length} 台</span></div>
          <span class="pacom-kpi-delta">含 ${i.length} 处回路灯点</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${b===o.length?"pacom-dot--online":"pacom-dot--warning"}"></span>3. 入网在线</span>
          <div class="pacom-kpi-value">${b}<span class="pacom-kpi-unit">/ ${o.length} 台</span></div>
          <span class="pacom-kpi-delta">${o.length-b>0?`${o.length-b} 台离线 →`:"全量在线"}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${ve?"pacom-dot--warning":"pacom-dot--online"}"></span>4. 边缘同步</span>
          <div class="pacom-kpi-value">${ge}<span class="pacom-kpi-unit">/ ${k.length} 层</span></div>
          <span class="pacom-kpi-delta">${ve?"有变更待下发 →":`基线 v${K}`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="ledger" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${L===o.length?"pacom-dot--online":"pacom-dot--warning"}"></span>5. 复核自检</span>
          <div class="pacom-kpi-value">${L}<span class="pacom-kpi-unit">/ ${o.length} 台</span></div>
          <span class="pacom-kpi-delta">${L===o.length?"可交付冻结":`待复核 ${o.length-L} 台 →`}</span>
        </button>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <div>
            <h2 class="pacom-section-title">楼层 × 工序交付门控矩阵</h2>
            <span class="pacom-row-sub">点击任意单元格，直接切至对应楼层与页面修复</span>
          </div>
          <button type="button" class="pacom-btn" data-batch-ftt="1">一键全层自检 (FTT)</button>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
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
                ${k.map(j=>{const I=xe(j.id),Ie=Oe().filter(_e=>_e.floorId===j.id),_=I.filter(_e=>!!_e.planPoint).length,Te=I.filter(_e=>_e.connectivity==="online").length,et=I.filter(_e=>_e.physicalInstalled).length,tt=!!j.plan,ut=tt&&I.length>0&&_===I.length&&et===I.length&&Te===I.length&&!ve;return`
                      <tr>
                        <td><strong>${A(j.name)}</strong><div class="pacom-row-sub">${j.areaSqm?`${j.areaSqm} m²`:"待补面积"}</div></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-proj-sub="floor_zones" data-matrix-floor="${A(j.id)}"><span class="pacom-dot ${tt?"pacom-dot--online":"pacom-dot--offline"}"></span><span>${tt?`已传图 · ${Ie.length} 区`:"待传底图"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="floorplan" data-matrix-floor="${A(j.id)}"><span class="pacom-dot ${I.length>0&&_===I.length?"pacom-dot--online":I.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${I.length>0?`${_}/${I.length}`:"未标点"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${A(j.id)}"><span class="pacom-dot ${I.length>0&&Te===I.length?"pacom-dot--online":I.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${I.length>0?`${Te}/${I.length}`:"—"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${A(j.id)}"><span class="pacom-dot ${I.length===0?"pacom-dot--offline":ve?"pacom-dot--warning":"pacom-dot--online"}"></span><span>${I.length===0?"—":ve?"待同步":`v${K}`}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="ledger" data-matrix-floor="${A(j.id)}"><span class="pacom-dot ${I.length>0&&et===I.length?"pacom-dot--online":I.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${I.length>0?`${et}/${I.length}`:"—"}</span></button></td>
                        <td style="text-align:right;"><span class="pacom-badge ${ut?"pacom-badge--online":I.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">${ut?"可验收交付":I.length>0?"实施中":"待配置"}</span></td>
                      </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      ${Ee?`<div class="pacom-banner ${Ee.failed===0?"pacom-banner--ok":"pacom-banner--critical"}">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">最近批量自检（FTT） · ${Ee.ranAt}</span>
                <span class="pacom-banner-sub">通过 ${Ee.passed}/${Ee.total} 台${Ee.failedNames.length?` · 异常：${Ee.failedNames.join("、")}`:" · 全部安全复位"}</span>
              </div>
            </div>`:""}

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">交付冻结基线记录</h2>
          <span class="pacom-row-sub">共 ${re.length} 条冻结快照</span>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead><tr><th>版本标签</th><th>现场核验进度</th><th>冻结人与备注</th><th>状态</th></tr></thead>
              <tbody>
                ${re.map(j=>`
                    <tr>
                      <td><div style="font-weight:450;">${A(j.versionTag)}</div><div class="pacom-row-sub"><code>${A(j.id)}</code></div></td>
                      <td><strong>${j.verifiedCount}</strong> / ${j.deviceCount} 台</td>
                      <td><div>${A(j.frozenBy)}</div><div class="pacom-row-sub">${A(j.note??"-")}</div></td>
                      <td><span class="pacom-badge pacom-badge--accent">${Xt[j.status]??j.status}</span></td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function pe(k){const U=te.projects[0],o=te.buildings.find(u=>u.id===v)??te.buildings[0];return`
      <div style="width:100%; display:flex; flex-direction:column; gap:24px;">
        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">项目基础信息</h2>
            <span class="pacom-badge pacom-badge--accent">经纬度驱动气象与能耗基准</span>
          </div>
          <form class="pacom-settings-card" data-save-project="1">
            <div class="pacom-setting-row">
              <div class="pacom-setting-meta"><span class="pacom-setting-title">项目名称与城市</span><span class="pacom-setting-desc">用于全局路径导航与多园区地图定位</span></div>
              <div class="pacom-setting-control"><input class="pacom-input" name="pName" value="${A(U?.name??"广实2号园")}" style="width:180px;" ${k?"":"disabled"} /><input class="pacom-input" name="pCity" value="${A(U?.city??"广州市")}" style="width:120px;" ${k?"":"disabled"} /></div>
            </div>
            <div class="pacom-setting-row">
              <div class="pacom-setting-meta"><span class="pacom-setting-title">详细地址与地理坐标</span><span class="pacom-setting-desc">自动匹配周边气象站实况温度与湿度</span></div>
              <div class="pacom-setting-control"><input class="pacom-input" name="pAddr" value="${A(U?.address??"")}" style="width:220px;" ${k?"":"disabled"} /><input class="pacom-input" name="pLngLat" value="113.3824, 23.0652" style="width:150px;" ${k?"":"disabled"} /></div>
            </div>
            <div class="pacom-setting-row" style="justify-content:flex-end;">
              <button type="submit" class="pacom-btn pacom-btn--primary" ${k?"":"disabled"}>保存项目信息</button>
            </div>
          </form>
        </section>

        ${o?`
            <section class="pacom-section">
              <div class="pacom-section-head">
                <h2 class="pacom-section-title">楼宇实景图：${A(o.name)}</h2>
                <span class="pacom-row-sub">建筑面积 ${o.areaSqm??"-"} m² · 地上 ${o.aboveFloors} 层</span>
              </div>
              <div class="pacom-card" style="gap:14px;">
                <div style="display:grid; grid-template-columns:minmax(0,1.2fr) minmax(240px,1fr); gap:16px; align-items:center;">
                  <div style="border-radius:12px; overflow:hidden; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                    <img src="${A(R.get(o.id)??o.imageUrl??"./media/building-e.png")}" alt="${A(o.name)}" style="width:100%; max-height:240px; object-fit:contain; display:block;" />
                  </div>
                  <div class="dep-upload-drop">
                    <strong style="font-size:14px; font-weight:450;">上传 / 替换楼宇实景图</strong>
                    <span class="pacom-row-sub">支持 PNG / WebP / JPG，用于空间总览整栋视图展示</span>
                    <label class="pacom-btn" style="cursor:pointer;">
                      <span>选择本地图片</span>
                      <input type="file" accept="image/*" data-upload-bld="${A(o.id)}" style="display:none;" ${k?"":"disabled"} />
                    </label>
                  </div>
                </div>
              </div>
            </section>

            <section class="pacom-section">
              <div class="pacom-section-head">
                <h2 class="pacom-section-title">一键批量生成楼层（自动初始化 1 层 1 蓝牙 Mesh 网络）</h2>
                <span class="pacom-row-sub">无需手动逐层建表或单独创建 Mesh 网络</span>
              </div>
              <form class="pacom-settings-card" data-batch-floors="${A(o.id)}">
                <div class="pacom-setting-row">
                  <div class="pacom-setting-meta">
                    <span class="pacom-setting-title">起止楼层范围</span>
                    <span class="pacom-setting-desc">例如 1 到 6 自动补齐 1F–6F，已存在楼层自动跳过</span>
                  </div>
                  <div class="pacom-setting-control">
                    <input class="pacom-input" name="fromFloor" type="number" min="1" max="50" value="1" style="width:72px;" ${k?"":"disabled"} />
                    <span class="pacom-row-sub">F 至</span>
                    <input class="pacom-input" name="toFloor" type="number" min="1" max="50" value="6" style="width:72px;" ${k?"":"disabled"} />
                    <span class="pacom-row-sub">F</span>
                    <label style="display:inline-flex; align-items:center; gap:5px; font-size:14px; margin-left:6px;"><input type="checkbox" name="includeB1" checked ${k?"":"disabled"} />B1</label>
                    <label style="display:inline-flex; align-items:center; gap:5px; font-size:14px;"><input type="checkbox" name="includeRF" checked ${k?"":"disabled"} />RF</label>
                    <button type="submit" class="pacom-btn pacom-btn--primary" ${k?"":"disabled"}>批量生成</button>
                  </div>
                </div>
              </form>
            </section>`:""}
      </div>
    `}function fe(k){const U=je(v),o=U.find(b=>b.id===S)??U[0],u=o?Oe().filter(b=>b.floorId===o.id):[];return`
      <div style="width:100%; display:flex; flex-direction:column; gap:24px;">
        <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
          ${U.map(b=>`
              <button type="button" class="pacom-count-pill" aria-pressed="${o?.id===b.id}" data-pick-floor-pill="${A(b.id)}">
                <span class="pacom-dot ${b.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                <span>${A(b.name)}</span>
              </button>`).join("")}
        </div>

        ${o?`
            <section class="pacom-section">
              <div class="pacom-section-head">
                <div style="display:flex; align-items:center; gap:8px;">
                  <h2 class="pacom-section-title">${A(o.name)} · 2D 平面底图</h2>
                  <span class="pacom-badge pacom-badge--online">蓝牙 Mesh 网络已初始化</span>
                </div>
                <button type="button" class="pacom-btn pacom-btn--primary" data-dep-nav="floorplan">进入本层图纸标点 →</button>
              </div>
              <div class="pacom-card" style="gap:14px;">
                <div style="display:grid; grid-template-columns:minmax(0,1.35fr) minmax(240px,1fr); gap:16px; align-items:center;">
                  <div style="border-radius:12px; overflow:hidden; background:var(--pacom-surface-primary); min-height:200px; display:flex; align-items:center; justify-content:center; border:var(--hw) solid var(--pacom-border-subtle);">
                    ${o.plan?`<img src="${A(o.plan.imageUrl)}" alt="${A(o.name)} 平面图" style="width:100%; max-height:280px; object-fit:contain; display:block;" />`:'<span class="pacom-row-sub">暂未上传 2D 平面底图，请在右侧选择真实图纸</span>'}
                  </div>
                  <div class="dep-upload-drop">
                    <strong style="font-size:14px; font-weight:450;">${o.plan?"替换本层 2D 平面底图":"上传本层 2D 平面底图"}</strong>
                    <span class="pacom-row-sub">推荐清晰建筑线条 PNG / WebP（宽度 ≤ 3000px，体积 ≤ 500KB）</span>
                    <label class="pacom-btn pacom-btn--primary" style="cursor:pointer;">
                      <span>选择真实平面图</span>
                      <input type="file" accept="image/*" data-upload-floor="${A(o.id)}" style="display:none;" ${k?"":"disabled"} />
                    </label>
                  </div>
                </div>
              </div>
            </section>

            <section class="pacom-section">
              <div class="pacom-section-head">
                <h2 class="pacom-section-title">本层功能区清单</h2>
                <span class="pacom-row-sub">${u.length} 个功能区</span>
              </div>
              <div class="pacom-settings-card">
                ${u.map(b=>`
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">${A(b.name)} <span class="pacom-badge pacom-badge--neutral">${A(b.category)}</span></span>
                      </div>
                      <span class="pacom-row-sub">${xe(o.id).filter(L=>L.logicalZoneId===b.id).length} 台设备</span>
                    </div>`).join("")}
                <form class="pacom-setting-row" style="gap:8px;" data-add-zone="${A(o.id)}">
                  <input class="pacom-input" name="zoneName" placeholder="输入新功能区名称（如：东侧会议室）" required ${k?"":"disabled"} />
                  <select class="pacom-select" name="zoneCat" ${k?"":"disabled"}>
                    <option value="lab">实验区</option>
                    <option value="office">办公区</option>
                    <option value="meeting">会议室</option>
                    <option value="corridor">走廊/弱电</option>
                    <option value="utility">机房/设备间</option>
                  </select>
                  <button type="submit" class="pacom-btn" ${k?"":"disabled"}>+ 添加功能区</button>
                </form>
              </div>
            </section>

            <section class="pacom-section">
              <div class="pacom-section-head">
                <h2 class="pacom-section-title">竣工图纸与设备手册附件</h2>
                <span class="pacom-row-sub">共 ${lt.length} 份工程文档</span>
              </div>
              <div class="pacom-table-card">
                <div class="pacom-table-wrap">
                  <table class="pacom-table">
                    <thead><tr><th>文档名称</th><th>类型</th><th>关联范围</th><th style="text-align:right;">操作</th></tr></thead>
                    <tbody>
                      ${lt.map(b=>`
                        <tr>
                          <td><div style="font-weight:450;">${b.name}</div><div class="pacom-row-sub">${b.size} · ${b.updatedAt}</div></td>
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
    `}function we(k){const U=je(v),o=U.find(_=>_.id===S)??U[0],u=xe(S),b=Oe().filter(_=>_.floorId===S),L=G?u.find(_=>_.id===$)??null:null,ge=L?E.get(L.id)??{proxy:!1,relay:!1,meshUuid:`mesh-${S.slice(-4)}`}:null,j=L?i.filter(_=>_.deviceId===L.id):[],I=ce.trim().toLowerCase(),Ie=u.filter(_=>!(H==="unverified"&&_.physicalInstalled||H==="unplaced"&&_.planPoint||I&&!`${_.name} ${Le(_.logicalZoneId)}`.toLowerCase().includes(I)));return`
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(420px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${me("search",16)}
            <input class="pacom-hud-input" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${A(ce)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill ${y?"is-active":""}" data-toggle-hud-pool="1">设备池 ${u.length}</button>
            <button type="button" class="pacom-hud-pill" data-toggle-new-dev="1" ${k?"":"disabled"}>+ 标点</button>
          </div>

          ${y||le?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:14px; font-weight:450;">${le?"新增设备标点":`${A(o?.name??"7F")} 设备池（${Ie.length}）`}</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${me("x",16)}</button>
                </div>
                ${le?`
                    <form data-create-dev="1" style="padding:12px; display:flex; flex-direction:column; gap:8px;">
                      <input class="pacom-input" name="devName" placeholder="设备名称（如：703 会议室三控面板）" required />
                      <select class="pacom-select" name="devPreset">${nt.map(_=>`<option value="${_.key}">${_.label}</option>`).join("")}</select>
                      <select class="pacom-select" name="devZone">${b.map(_=>`<option value="${A(_.id)}">${A(_.name)}</option>`).join("")}</select>
                      <button type="submit" class="pacom-btn pacom-btn--primary">加入图纸并预设 Mesh 角色</button>
                    </form>`:`
                    <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                      <div class="pacom-count-pills">
                        <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${H==="all"}" data-dev-filter="all">全部 <span class="pacom-count-num">${u.length}</span></button>
                        <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${H==="unverified"}" data-dev-filter="unverified">待复核 <span class="pacom-count-num">${u.filter(_=>!_.physicalInstalled).length}</span></button>
                        <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${H==="unplaced"}" data-dev-filter="unplaced">未标点 <span class="pacom-count-num">${u.filter(_=>!_.planPoint).length}</span></button>
                      </div>
                    </div>
                    <div class="pacom-list" style="padding:6px;">
                      ${Ie.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">无匹配设备</div>':Ie.map(_=>`
                                <div class="pacom-row ${_.id===$&&G?"is-selected":""}" data-pick-dev="${A(_.id)}" style="padding:8px;">
                                  <div style="min-width:0;">
                                    <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${A(_.name)}</div>
                                    <div class="pacom-row-sub">${A(Le(_.logicalZoneId))} · ${_.physicalInstalled?"已复核":"待复核"}</div>
                                  </div>
                                  <span class="pacom-badge ${_.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${_.planPoint?"已标点":"未标点"}</span>
                                </div>`).join("")}
                    </div>`}
              </div>`:""}
        </div>

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${w?"crosshair":"grab"};">
          ${o?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${X}px, ${ne}px) scale(${Z});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${A(o.plan.imageUrl)}" alt="${A(o.name)} 平面图" />
                  ${ee==="zone"?b.map(_=>{const Te=m[_.id];return Te?`<div class="pacom-zone-hotspot is-active" style="left:${Te.left}%; top:${Te.top}%; width:${Te.width}%; height:${Te.height}%;"><span class="pacom-zone-tag">${A(_.name.replace(/^7F\s*/,""))}</span></div>`:""}).join(""):""}
                  ${u.filter(_=>_.planPoint).map(_=>`
                      <button type="button" class="pacom-pin ${_.id===$&&G?"is-selected":""} ${_.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(_.planPoint.x*100).toFixed(2)}%; top:${(_.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${A(_.id)}" title="${A(_.name)}">
                        <span class="pacom-dot ${_.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${A(Jt(_))}</span>
                      </button>`).join("")}
                  ${ee==="light_marker"||L?.category==="lighting"?i.filter(_=>u.some(Te=>Te.id===_.deviceId)).map(_=>`
                            <span class="dep-light-dot" style="left:${(_.x*100).toFixed(1)}%; top:${(_.y*100).toFixed(1)}%;" title="${A(_.label)}（${A(_.channel)}）">
                              ${me("sparkles",12)}<span>${A(_.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-dep-nav="project_config" data-proj-sub="floor_zones">前往「项目配置」上传真实底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${U.map(_=>`
              <button type="button" class="pacom-elev-item ${_.id===S?"is-active":""}" data-scrubber-floor="${A(_.id)}" title="${A(_.name)}${_.plan?" · 已传底图":" · 待传底图"}">
                ${_.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${A(_.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标记画笔与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${ee==="device"}" data-brush="device">设备标记</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${ee==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${ee==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${me("minus",16)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(Z*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${me("plus",16)}</button>
        </div>

        ${L?`
            <aside class="pacom-drawer" aria-label="设备部署属性">
              <div class="pacom-drawer-head">
                <div style="min-width:0;">
                  <h2 class="pacom-drawer-title">${A(L.name)}</h2>
                  <div class="pacom-row-sub">${A(Le(L.logicalZoneId))} · v${L.version}</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${me("x",16)}</button>
              </div>

              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-place="1" ${k?"":"disabled"}>${w?"点击图纸定位中…":"点图更新坐标"}</button>
                <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${A(L.id)}">Ping 闪灯 5s</button>
                <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-test="1">单机自检</button>
              </div>

              ${L.category==="lighting"?`
                  <div class="pacom-control-box" style="gap:6px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span style="font-size:14px; font-weight:450;">回路可视化灯点（${j.length}）</span>
                      <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${A(L.id)}" ${k?"":"disabled"}>+ 添加灯点</button>
                    </div>
                    ${j.map(_=>`
                        <div class="pacom-receipt-item" style="padding:6px 8px; font-size:13px;">
                          <span><strong>${A(_.channel)}</strong> · ${A(_.label)}</span>
                          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 6px; font-size:13px;" data-del-light-marker="${A(_.id)}" ${k?"":"disabled"}>删</button>
                        </div>`).join("")}
                  </div>`:""}

              ${L.category!=="hvac"&&L.category!=="meter"&&ge?`
                  <div class="pacom-control-box" style="gap:6px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span style="font-size:14px; font-weight:450;">蓝牙 Mesh 节点角色</span>
                      <code style="font-size:12px;">${A(ge.meshUuid)}</code>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                      <span>Proxy 代理（建议每层 2–3 个）</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${ge.proxy}" data-toggle-mesh-role="proxy" data-mesh-dev="${A(L.id)}" ${k?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                      <span>Relay 中继（建议 ≤10%，面板默认关）</span>
                      <button type="button" class="pacom-switch" role="switch" aria-checked="${ge.relay}" data-toggle-mesh-role="relay" data-mesh-dev="${A(L.id)}" ${k?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                    </div>
                  </div>`:""}

              <form data-role="binding-form" class="pacom-control-box" style="gap:8px;">
                <span style="font-size:14px; font-weight:450;">硬件绑定与物理安装复核</span>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
                  <select class="pacom-select" style="height:30px; font-size:13px;" name="protocol" aria-label="通信协议">
                    ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(_=>`<option value="${_}" ${L.hardwareBinding?.protocol===_?"selected":""}>${_.toUpperCase()}</option>`).join("")}
                  </select>
                  <input class="pacom-input" style="height:30px; font-size:13px;" name="networkAddress" placeholder="网络地址/主题" value="${A(L.hardwareBinding?.networkAddress??"")}" />
                </div>
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                  <input class="pacom-input" style="height:30px; font-size:13px;" name="portOrChannel" placeholder="端口/回路" value="${A(L.hardwareBinding?.portOrChannel??"")}" />
                  <span style="display:inline-flex; align-items:center; gap:6px; font-size:13px; flex-shrink:0;">
                    <span>物理已复核</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${d}" data-toggle-phys="1" ${k?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </span>
                </div>
                <button class="pacom-btn pacom-btn--primary" type="submit" ${k?"":"disabled"}>保存绑定与复核（v${L.version}）</button>
              </form>
            </aside>`:""}
      </main>
    `}function ie(k){const U=xe(S),o=D.trim().toLowerCase(),u=U.filter(j=>!(O==="online"&&j.connectivity!=="online"||O==="offline"&&j.connectivity!=="offline"||O==="unverified"&&j.physicalInstalled||o&&!`${j.name} ${Le(j.logicalZoneId)} ${j.hardwareBinding?.protocol??""}`.toLowerCase().includes(o))),b=U.filter(j=>j.connectivity==="online").length,L=Q?U.find(j=>j.id===Q)??null:null,ge=L?Y.get(L.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450}:null;return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" style="width:220px;" data-ledger-search placeholder="搜索设备名称或功能区…" value="${A(D)}" aria-label="搜索设备列表" />
          <select class="pacom-select" data-ledger-filter aria-label="按设备状态筛选">
            <option value="all" ${O==="all"?"selected":""}>全部状态（${U.length}）</option>
            <option value="online" ${O==="online"?"selected":""}>仅看在线（${b}）</option>
            <option value="offline" ${O==="offline"?"selected":""}>仅看离线（${U.length-b}）</option>
            <option value="unverified" ${O==="unverified"?"selected":""}>待物理复核（${U.filter(j=>!j.physicalInstalled).length}）</option>
          </select>
          <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${me("refresh-cw",16)}</button>
        </div>
        <div class="pacom-log-filters">
          <button type="button" class="pacom-btn" data-export-inv="1">导出 CSV</button>
        </div>
      </div>
      ${L&&ge?`
          <form class="pacom-settings-card" data-save-dev-params="${A(L.id)}">
            <div class="pacom-setting-row">
              <div class="pacom-setting-meta">
                <span class="pacom-setting-title">设备参数配置：${A(L.name)}</span>
                <span class="pacom-setting-desc">人感自动关灯延时、光照度开关门限与默认亮度参数</span>
              </div>
              <button type="button" class="pacom-drawer-close" data-close-param="1">${me("x",16)}</button>
            </div>
            <div class="pacom-setting-row" style="display:grid; grid-template-columns:repeat(4,1fr); gap:10px;">
              <label class="pacom-field"><span>自动关灯延时(分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${ge.offDelayMin}" /></label>
              <label class="pacom-field"><span>恢复自动延时(分)</span><input class="pacom-input" name="restoreMin" type="number" value="${ge.restoreMin}" /></label>
              <label class="pacom-field"><span>开灯光感门限(lx)</span><input class="pacom-input" name="luxOn" type="number" value="${ge.luxOn}" /></label>
              <label class="pacom-field"><span>关灯光感门限(lx)</span><input class="pacom-input" name="luxOff" type="number" value="${ge.luxOff}" /></label>
            </div>
            <div class="pacom-setting-row" style="justify-content:flex-end;">
              <button type="submit" class="pacom-btn pacom-btn--primary" ${k?"":"disabled"}>下发设备参数</button>
            </div>
          </form>`:""}
      <div class="pacom-table-card">
        <div class="pacom-table-wrap">
          <table class="pacom-table">
            <thead><tr><th>设备与功能区</th><th>1. 图上标记</th><th>2. 网络绑定</th><th>3. 物理复核</th><th>4. 在线态</th><th style="text-align:right;">操作</th></tr></thead>
            <tbody>
              ${u.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配设备</strong><span>可调整搜索词或切换状态筛选。</span></div></td></tr>':u.map(j=>`
                        <tr>
                          <td><div style="font-weight:450;">${A(j.name)}</div><div class="pacom-row-sub">${A(Le(j.logicalZoneId))} · v${j.version}</div></td>
                          <td><span class="pacom-badge ${j.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${j.planPoint?`${Math.round(j.planPoint.x*100)}%,${Math.round(j.planPoint.y*100)}%`:"未标记"}</span></td>
                          <td><span class="pacom-badge ${j.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${j.hardwareBinding?j.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                          <td><span class="pacom-badge ${j.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${j.physicalInstalled?"已复核":"待复核"}</span></td>
                          <td><span class="pacom-badge ${j.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${j.connectivity==="online"?"在线":"离线"}</span></td>
                          <td>
                            <div style="display:flex; justify-content:flex-end; gap:6px;">
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${A(j.id)}">Ping</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-open-param="${A(j.id)}">参数</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-dev="${A(j.id)}">自检</button>
                            </div>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
        <div class="pacom-table-footer">
          <span>显示 ${u.length} / ${U.length} 台设备 · ${b} 在线 · ${U.length-b} 离线</span>
          <button type="button" class="pacom-btn pacom-btn--sm" data-dep-nav="floorplan">前往设备标记 →</button>
        </div>
      </div>
    `}function Fe(){const k=g.filter(o=>o.track==="mesh_auto"),U=g.filter(o=>o.track==="cloud_biz");return`
      ${se?`
          <form class="pacom-settings-card" data-create-group="1">
            <div class="pacom-setting-row" style="display:grid; grid-template-columns:1fr 180px 180px auto; gap:8px; align-items:center;">
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
      <div class="pacom-grid-2">
        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">端侧蓝牙 Mesh 自治组（${k.length}）</h2>
            <span class="pacom-badge pacom-badge--accent">自动纳入蓝牙适配器防漏报</span>
          </div>
          <div class="pacom-settings-card">
            ${k.map(o=>`
                <div class="pacom-setting-row">
                  <div class="pacom-setting-meta">
                    <span class="pacom-setting-title">${A(o.name)} <span class="pacom-badge pacom-badge--neutral">${A(o.groupType)}</span></span>
                    <span class="pacom-setting-desc">成员 ${o.deviceIds.length} 台 · 断网仍可端侧自治联动</span>
                  </div>
                  <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${A(o.id)}">组控测试</button></div>
                </div>`).join("")}
          </div>
        </section>

        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">云端业务分组（${U.length}）</h2>
            <span class="pacom-row-sub">空调 / 标牌 / 部门组，无需蓝牙配网</span>
          </div>
          <div class="pacom-settings-card">
            ${U.map(o=>`
                <div class="pacom-setting-row">
                  <div class="pacom-setting-meta">
                    <span class="pacom-setting-title">${A(o.name)} <span class="pacom-badge pacom-badge--neutral">${A(o.groupType)}</span></span>
                    <span class="pacom-setting-desc">成员 ${o.deviceIds.length} 台 · 供首页批控与标牌复用</span>
                  </div>
                  <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${A(o.id)}">组控测试</button></div>
                </div>`).join("")}
          </div>
        </section>
      </div>
    `}function Pe(){const k=xe(S),U=Oe().filter(I=>I.floorId===S),o=k.filter(I=>I.category!=="hvac"&&I.category!=="meter"),u=o.filter(I=>E.get(I.id)?.proxy).length,b=o.filter(I=>E.get(I.id)?.relay).length,L=k.filter(I=>I.category==="gateway"),ge=k.filter(I=>E.get(I.id)?.relay||E.get(I.id)?.proxy),j=k.filter(I=>I.category!=="gateway");return`
      <div class="pacom-card" style="gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <strong style="font-size:14px; font-weight:450;">本层蓝牙 Mesh 网络</strong>
            <span class="pacom-badge pacom-badge--online">协同锁空闲 · 可同步</span>
            <span class="pacom-row-sub">Mesh 节点 ${o.length} 台 · Proxy ${u} 个 · Relay ${b} 个 · 边缘基线 v${K}</span>
          </div>
        </div>
        ${De.length>0?`<div style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                ${De.map(I=>`
                    <div class="pacom-receipt-item" style="padding:8px 10px;">
                      <div><strong>${A(I.title)}</strong> <span class="pacom-row-sub">· ${A(I.detail)}</span></div>
                      <span class="pacom-badge ${I.level==="ok"?"pacom-badge--online":I.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${I.level==="ok"?"通过":I.level==="warn"?"建议优化":"异常"}</span>
                    </div>`).join("")}
              </div>`:""}
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">自动生成设备拓扑（点击节点直达图纸标点）</h2>
          <div class="pacom-tabs">
            <button type="button" class="pacom-tab" aria-selected="${P==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
            <button type="button" class="pacom-tab" aria-selected="${P==="business"}" data-topo-mode="business">业务联动与供能流向</button>
          </div>
        </div>
        ${P==="mesh"?`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器</strong>
                ${L.map(I=>`
                    <button type="button" class="dep-topo-node ${I.connectivity==="offline"?"is-issue":""}" data-topo-jump="${A(I.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${A(I.name)}</strong><span class="pacom-badge pacom-badge--online">网桥中心</span></div>
                      <span class="pacom-row-sub">${A(I.hardwareBinding?.networkAddress??"-")} · 云边同步通道</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（Proxy / Relay）</strong>
                ${ge.length===0?'<div class="pacom-row-sub">暂未启用中继或代理节点，请在图纸标点抽屉中为传感器开启。</div>':ge.map(I=>{const Ie=E.get(I.id);return`
                            <button type="button" class="dep-topo-node ${I.connectivity==="offline"?"is-issue":""}" data-topo-jump="${A(I.id)}">
                              <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${A(I.name)}</strong><span class="pacom-badge pacom-badge--accent">${Ie?.proxy?"Proxy":""}${Ie?.proxy&&Ie?.relay?" + ":""}${Ie?.relay?"Relay":""}</span></div>
                              <span class="pacom-row-sub">${A(Le(I.logicalZoneId))}</span>
                            </button>`}).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 末端节点（异常自动标红）</strong>
                ${j.map(I=>`
                    <button type="button" class="dep-topo-node ${I.connectivity==="offline"?"is-issue":""}" data-topo-jump="${A(I.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${A(I.name)}</strong><span class="pacom-badge ${I.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${I.connectivity==="online"?"在线":"离线"}</span></div>
                      <span class="pacom-row-sub">${A(Le(I.logicalZoneId))} · ${A(I.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                    </button>`).join("")}
              </div>
            </div>`:`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">上游源头 / 传感触发</strong>
                ${k.filter(I=>I.category==="sensor"||I.category==="gateway").map(I=>`
                    <button type="button" class="dep-topo-node" data-topo-jump="${A(I.id)}">
                      <strong>${A(I.name)}</strong>
                      <span class="pacom-row-sub">${I.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">受控末端（照明 / 暖通）</strong>
                ${k.filter(I=>I.category==="lighting"||I.category==="hvac").map(I=>`
                    <button type="button" class="dep-topo-node ${I.connectivity==="offline"?"is-issue":""}" data-topo-jump="${A(I.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${A(I.name)}</strong><span class="pacom-badge ${I.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${I.connectivity==="online"?"正常":"离线"}</span></div>
                      <span class="pacom-row-sub">服务：${A(Le(I.logicalZoneId))}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">服务功能区（影响面）</strong>
                ${U.map(I=>{const Ie=k.filter(Te=>Te.logicalZoneId===I.id),_=Ie.some(Te=>Te.connectivity==="offline");return`
                      <div class="dep-topo-node ${_?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${A(I.name.replace(/^7F\s*/,""))}</strong><span class="pacom-badge ${_?"pacom-badge--warning":"pacom-badge--online"}">${Ie.length} 台设备</span></div>
                        <span class="pacom-row-sub">${_?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                      </div>`}).join("")}
              </div>
            </div>`}
      </section>
    `}function Je(){const k=ae.reduce((b,L)=>b+L.collectedPoints,0),U=ae.reduce((b,L)=>b+L.calculatedPoints,0),o=ae.filter(b=>b.status==="connected").length,u=ae.filter(b=>b.status!=="connected");return`
      <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">已连通网关通道</span><div class="pacom-kpi-value">${o}<span class="pacom-kpi-unit">/ ${ae.length}</span></div><span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">数据采集健康度</span><div class="pacom-kpi-value">${ae.length?Math.round(o/ae.length*100):100}<span class="pacom-kpi-unit">%</span></div><span class="pacom-kpi-delta">区分网关断流与末端真故障</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">原始采集点</span><div class="pacom-kpi-value">${k}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">协议直采实时遥测</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">衍生计算点</span><div class="pacom-kpi-value">${U}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">能耗与聚合虚拟点位</span></div>
      </div>

      ${u.length>0?`<div class="pacom-banner pacom-banner--critical">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">检测到 ${u.length} 条采集通道通信降级（${u.map(b=>b.name).join("、")}）</span>
                <span class="pacom-banner-sub">建议优先核查局域网 UDP/TCP 端口冲突、RS485 终端电阻与从站地址。</span>
              </div>
            </div>`:""}

      ${de?`
          <form class="pacom-settings-card" data-create-conn="1">
            <div class="pacom-setting-row">
              <div class="pacom-setting-meta">
                <span class="pacom-setting-title">新增子系统接入通道</span>
                <span class="pacom-setting-desc">支持边缘网关、中央空调/线控网关、智能电表通讯机、空气质量与数字标牌（自动检测局域网端口冲突）</span>
              </div>
              <button type="button" class="pacom-drawer-close" data-toggle-new-conn="1">${me("x",16)}</button>
            </div>
            <div class="pacom-setting-row" style="display:grid; grid-template-columns:1.2fr 160px 1fr auto; gap:8px; align-items:center;">
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

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">边缘网关与异构子系统接入清单</h2>
          <span class="pacom-row-sub">支持测通、复制端点及展开传感器级三态质量</span>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead><tr><th>通道名称</th><th>协议</th><th>接入端点</th><th>点位规模</th><th>健康度</th><th style="text-align:right;">操作</th></tr></thead>
              <tbody>
                ${ae.map(b=>{const L=Yt[b.status]??{label:b.status,cls:"pacom-badge--neutral"},ge=b.status==="connected"?98:b.status==="degraded"?62:0,j=ge>=75?"var(--pacom-status-online)":ge>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",I=h===b.id,Ie=I?ea(b,oe):[];return`
                      <tr>
                        <td><strong>${A(b.name)}</strong></td>
                        <td><span class="pacom-badge pacom-badge--neutral">${b.protocol.toUpperCase()}</span></td>
                        <td><code style="font-size:12px;">${A(b.endpoint)}</code></td>
                        <td>采集 ${b.collectedPoints} / 计算 ${b.calculatedPoints}</td>
                        <td style="min-width:130px;">
                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span class="pacom-badge ${L.cls}">${L.label}</span>
                            <span class="pacom-row-sub">${ge}%</span>
                          </div>
                          <div class="pacom-progress-track"><div class="pacom-progress-fill" style="width:${ge}%; background:${j};"></div></div>
                        </td>
                        <td>
                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                            <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${A(b.id)}">${I?"收起点位":"点位质量"}</button>
                            <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${A(b.id)}">测通</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-endpoint="${A(b.id)}" data-endpoint-val="${A(b.endpoint)}">${n===b.id?"已复制":"复制"}</button>
                          </div>
                        </td>
                      </tr>
                      ${I?`
                          <tr class="pacom-table-detail-row">
                            <td colspan="6">
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                <div style="display:flex; justify-content:space-between; font-size:13px;">
                                  <strong>传感器 / 子设备采集质量明细（${A(b.name)}）</strong>
                                  <span class="pacom-row-sub">在线正常 · 延迟 &gt;30m · 断流 &gt;3×间隔</span>
                                </div>
                                ${Ie.map(_=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${A(_.deviceName)}</strong> · ${A(_.pointName)}</span>
                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                        <span class="pacom-row-sub">当前 ${A(_.value)} · ${A(_.lastSeen)}</span>
                                        <span class="pacom-badge ${_.quality==="online"?"pacom-badge--online":_.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                          ${_.quality==="online"?"在线正常":_.quality==="delayed"?"延迟 >30m":"断流"}
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
    `}function ue(){const k=a.scope.canEditDeployment;e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${Ue({tree:be(),session:a,scope:N,isOpen:J,searchKeyword:T})}
            </div>
            <div class="pacom-header-meta">
              ${V(k)}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${f()}
          ${l==="floorplan"?`<div class="pacom-unified-main--canvas">
                  ${ye?`<div class="pacom-banner pacom-banner--ok" style="margin-bottom:8px; flex-shrink:0;"><span class="pacom-banner-title">${A(ye)}</span></div>`:""}
                  ${ke?`<div class="pacom-alert-banner" style="margin-bottom:8px; flex-shrink:0;">${A(ke)}</div>`:""}
                  ${we(k)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner">
                  <div class="pacom-unified-head">
                    <h2 class="pacom-unified-title">${p[l].title}</h2>
                    <p class="pacom-unified-subtitle">${p[l].subtitle}</p>
                  </div>
                  ${l==="project_config"?`<div class="pacom-tabs" style="align-self:flex-start;" role="tablist" aria-label="项目配置分段">
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${c==="project_building"}" data-proj-sub-tab="project_building">项目与楼宇</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${c==="floor_zones"}" data-proj-sub-tab="floor_zones">楼层与图纸</button>
                        </div>`:""}
                  ${ye?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${A(ye)}</span></div>`:""}
                  ${ke?`<div class="pacom-alert-banner">${A(ke)}</div>`:""}
                  ${l==="overview"?F():l==="project_config"?c==="floor_zones"?fe(k):pe(k):l==="ledger"?ie(k):l==="groups"?Fe():l==="network_topo"?Pe():Je()}
                </div>
              </div>`}
        </div>
      </div>
    `,It()}function It(){He(e,{onToggle:()=>{J=!J,ue(),J&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:o=>{T=o,ue();const u=e.querySelector("[data-global-space-search]");u&&(u.focus(),u.setSelectionRange(o.length,o.length))},onPick:o=>{N=o,J=!1,o.level==="building"?v=o.buildingId:o.level==="floor"&&(v=o.buildingId,S=o.floorId,$=null,G=!1),ue()}}),e.querySelectorAll("[data-dep-nav]").forEach(o=>{o.addEventListener("click",()=>{l=o.dataset.depNav??"overview",o.dataset.projSub&&(c=o.dataset.projSub),ye="",ke="",ue()})}),e.querySelectorAll("[data-proj-sub-tab]").forEach(o=>{o.addEventListener("click",()=>{c=o.dataset.projSubTab??"project_building",ue()})}),e.querySelector("[data-ledger-search]")?.addEventListener("input",o=>{D=o.currentTarget.value,ue();const u=e.querySelector("[data-ledger-search]");u&&(u.focus(),u.setSelectionRange(D.length,D.length))}),e.querySelector("[data-ledger-filter]")?.addEventListener("change",o=>{O=o.currentTarget.value??"all",ue()}),e.querySelectorAll("[data-refresh-dep]").forEach(o=>{o.addEventListener("click",()=>{ze()})}),e.querySelectorAll("[data-matrix-nav]").forEach(o=>{o.addEventListener("click",()=>{const u=o.dataset.matrixFloor;u&&Ne(u),l=o.dataset.matrixNav??"floorplan",o.dataset.projSub&&(c=o.dataset.projSub),ue()})}),e.querySelectorAll("[data-pick-floor-pill]").forEach(o=>{o.addEventListener("click",()=>{const u=o.dataset.pickFloorPill;u&&(Ne(u),ue())})}),e.querySelectorAll("[data-scrubber-floor]").forEach(o=>{o.addEventListener("click",()=>{const u=o.dataset.scrubberFloor;u&&(Ne(u),ue())})}),e.querySelector("[data-save-project]")?.addEventListener("submit",o=>{o.preventDefault(),ye="项目基础信息与经纬度坐标已更新。",ue()}),e.querySelector("[data-upload-bld]")?.addEventListener("change",o=>{const u=o.currentTarget,b=u.dataset.uploadBld,L=u.files?.[0];if(!b||!L)return;const ge=new FileReader;ge.onload=()=>{typeof ge.result=="string"&&(R.set(b,ge.result),ye=`已更新楼宇实景图「${L.name}」。`,ue())},ge.readAsDataURL(L)}),e.querySelector("[data-upload-floor]")?.addEventListener("change",o=>{const u=o.currentTarget,b=u.dataset.uploadFloor,L=u.files?.[0];if(!b||!L)return;const ge=new FileReader;ge.onload=()=>{typeof ge.result=="string"&&(M.set(b,ge.result),ye=`已上传本层真实 2D 平面底图「${L.name}」，可立即进入图纸标点。`,ue())},ge.readAsDataURL(L)}),e.querySelector("[data-batch-floors]")?.addEventListener("submit",o=>{o.preventDefault();const u=o.currentTarget.dataset.batchFloors,b=new FormData(o.currentTarget),L=Number(b.get("fromFloor")??1),ge=Number(b.get("toFloor")??6),j=new Set(he().filter(Ie=>Ie.buildingId===u).map(Ie=>Ie.name));let I=0;for(let Ie=Math.min(L,ge);Ie<=Math.max(L,ge);Ie+=1){const _=`${Ie}F`;j.has(_)||($e.push({id:`floor-${u}-above-${Ie}`,buildingId:u,kind:"above",level:Ie,name:_,plan:null}),I+=1)}b.get("includeB1")&&!j.has("B1")&&($e.push({id:`floor-${u}-below-1`,buildingId:u,kind:"below",level:-1,name:"B1",plan:null}),I+=1),b.get("includeRF")&&!j.has("RF")&&($e.push({id:`floor-${u}-roof-1`,buildingId:u,kind:"roof",level:99,name:"RF",plan:null}),I+=1),ye=I>0?`已批量新增 ${I} 个楼层，并自动初始化各层默认蓝牙 Mesh 网络。`:"所选范围楼层均已存在，未重复创建。",ue()}),e.querySelector("[data-add-zone]")?.addEventListener("submit",o=>{o.preventDefault();const u=o.currentTarget.dataset.addZone,b=new FormData(o.currentTarget),L=String(b.get("zoneName")??"").trim(),ge=String(b.get("zoneCat")??"office");if(!L)return;const j=`zone-custom-${Date.now().toString(36)}`;B.push({id:j,floorId:u,name:L,category:ge}),m[j]={left:20,top:20,width:24,height:24},ye=`已添加功能区「${L}」。`,ue()});const k=e.querySelector("[data-dep-canvas-search]");k?.addEventListener("focus",()=>{!y&&!le&&(y=!0,ue(),e.querySelector("[data-dep-canvas-search]")?.focus())}),k?.addEventListener("input",o=>{ce=o.currentTarget.value,y=!0,le=!1,ue();const u=e.querySelector("[data-dep-canvas-search]");u&&(u.focus(),u.setSelectionRange(ce.length,ce.length))}),e.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{y=!y,y&&(le=!1),ue()}),e.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{y=!1,le=!1,ue()}),e.querySelector("[data-toggle-new-dev]")?.addEventListener("click",()=>{le=!le,le&&(y=!1),ue()}),e.querySelectorAll("[data-brush]").forEach(o=>{o.addEventListener("click",()=>{ee=o.dataset.brush??"device",ue()})}),e.querySelectorAll("[data-dep-zoom]").forEach(o=>{o.addEventListener("click",()=>{const u=o.dataset.depZoom;u==="in"?Z=Math.min(2.6,Number((Z+.2).toFixed(2))):u==="out"?Z=Math.max(.6,Number((Z-.2).toFixed(2))):(Z=1,X=0,ne=0),Se()})});const U=e.querySelector('[data-role="dep-stage"]');if(U&&!w){let o=!1,u=0,b=0,L=0,ge=0;U.addEventListener("pointerdown",I=>{I.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(o=!0,u=I.clientX,b=I.clientY,L=X,ge=ne,U.classList.add("is-panning"),U.setPointerCapture?.(I.pointerId))}),U.addEventListener("pointermove",I=>{o&&(X=L+(I.clientX-u),ne=ge+(I.clientY-b),Se())});const j=()=>{o&&(o=!1,U.classList.remove("is-panning"))};U.addEventListener("pointerup",j),U.addEventListener("pointercancel",j),U.addEventListener("wheel",I=>{I.preventDefault();const Ie=I.deltaY<0?.12:-.12;Z=Math.max(.6,Math.min(2.6,Number((Z+Ie).toFixed(2)))),Se()},{passive:!1}),U.addEventListener("dblclick",I=>{I.target?.closest("button")||(Z=1,X=0,ne=0,Se())})}e.querySelectorAll("[data-dev-filter]").forEach(o=>{o.addEventListener("click",()=>{H=o.dataset.devFilter??"all",ue()})}),e.querySelector("[data-create-dev]")?.addEventListener("submit",o=>{o.preventDefault();const u=new FormData(o.currentTarget),b=String(u.get("devName")??"").trim(),L=String(u.get("devPreset")??"sensor"),ge=String(u.get("devZone")??"")||null,j=nt.find(Ie=>Ie.key===L)??nt[0],I=`dev-custom-${Date.now().toString(36)}`;C.push({id:I,name:b,category:j.category,projectId:r.projectId,buildingId:v,floorId:S,logicalZoneId:ge,planPoint:{floorId:S,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}}),E.set(I,{proxy:j.defaultProxy,relay:j.defaultRelay,meshUuid:`mesh-${S.slice(-4)}`}),j.category==="lighting"&&i.push({id:`lm-${Date.now().toString(36)}`,deviceId:I,channel:"回路 1",label:`${b.slice(0,6)}主灯`,x:.52,y:.45}),$=I,G=!0,le=!1,ve=!0,ye=`已新增「${b}」（${j.hint}），已标注默认点位并标记待同步边缘。`,ue()}),e.querySelectorAll("[data-pick-dev]").forEach(o=>{o.addEventListener("click",u=>{u.stopPropagation(),$=o.dataset.pickDev??null,G=!0,d=xe(S).find(L=>L.id===$)?.physicalInstalled??!1,ue()})}),e.querySelector("[data-close-sel]")?.addEventListener("click",()=>{G=!1,w=!1,ue()}),e.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{w=!w,ue()}),e.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{d=!d,ue()}),e.querySelectorAll("[data-ping-dev]").forEach(o=>{o.addEventListener("click",()=>{const u=xe(S).find(b=>b.id===o.dataset.pingDev);u&&(ye=`已向「${u.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,ue())})}),e.querySelector("[data-add-light-marker]")?.addEventListener("click",o=>{const u=o.currentTarget.dataset.addLightMarker,b=i.filter(L=>L.deviceId===u).length+1;i.push({id:`lm-${Date.now().toString(36)}`,deviceId:u,channel:`回路 ${b}`,label:`照明点位 ${b}`,x:Math.min(.86,.35+b*.1),y:.42}),ee="light_marker",ye=`已新增「回路 ${b}」可视化灯点。`,ue()}),e.querySelectorAll("[data-del-light-marker]").forEach(o=>{o.addEventListener("click",()=>{const u=i.findIndex(b=>b.id===o.dataset.delLightMarker);u>=0&&i.splice(u,1),ue()})}),e.querySelectorAll("[data-toggle-mesh-role]").forEach(o=>{o.addEventListener("click",()=>{const u=o.dataset.meshDev,b=o.dataset.toggleMeshRole,L=E.get(u)??{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"};L[b]=!L[b],E.set(u,L),ve=!0,ye=`已更新节点 ${b.toUpperCase()} 状态，记得在「网络与拓扑」中同步下发至边缘网关。`,ue()})}),e.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async o=>{const u=xe(S).find(j=>j.id===$);if(!w||!u)return;const b=o.currentTarget.getBoundingClientRect(),L=Math.max(.02,Math.min(.98,(o.clientX-b.left)/b.width)),ge=Math.max(.02,Math.min(.98,(o.clientY-b.top)/b.height));if(C.some(j=>j.id===u.id)){u.planPoint={floorId:S,planVersion:1,x:Number(L.toFixed(4)),y:Number(ge.toFixed(4))},w=!1,ye=`已更新「${u.name}」图上坐标。`,ue();return}try{await t.updateDevicePlanPoint({deviceId:u.id,floorId:r.floorId,planVersion:u.planPoint?.planVersion??1,x:L,y:ge,expectedVersion:u.version}),w=!1,ye=`已更新「${u.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await ze()}catch(j){ke=j instanceof Error?j.message:String(j),ue()}}),e.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async o=>{o.preventDefault();const u=xe(S).find(L=>L.id===$);if(!u)return;const b=new FormData(o.currentTarget);if(C.some(L=>L.id===u.id)){u.physicalInstalled=d,u.hardwareBinding={gatewayId:"dev-e7f-gw-01",protocol:String(b.get("protocol")),networkAddress:String(b.get("networkAddress")??""),portOrChannel:String(b.get("portOrChannel")??""),boundAt:new Date().toISOString(),boundBy:a.displayName},u.version+=1,ve=!0,ye=`已保存「${u.name}」的硬件绑定与物理复核状态。`,ue();return}try{await t.updateDeviceHardwareBinding({deviceId:u.id,gatewayId:u.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(b.get("protocol")),networkAddress:String(b.get("networkAddress")??""),portOrChannel:String(b.get("portOrChannel")??""),physicalInstalled:d,expectedVersion:u.version}),ve=!0,ye=`已保存「${u.name}」的硬件绑定与物理安装复核状态。`,await ze()}catch(L){ke=L instanceof Error?L.message:String(L),ue()}}),e.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const o=xe(S).find(u=>u.id===$);o&&Ze(o)}),e.querySelectorAll("[data-ftt-dev]").forEach(o=>{o.addEventListener("click",()=>{const u=xe(S).find(b=>b.id===o.dataset.fttDev);u&&Ze(u)})}),e.querySelectorAll("[data-batch-ftt]").forEach(o=>{o.addEventListener("click",()=>x())}),e.querySelectorAll("[data-export-inv]").forEach(o=>{o.addEventListener("click",()=>q())}),e.querySelectorAll("[data-open-param]").forEach(o=>{o.addEventListener("click",()=>{Q=o.dataset.openParam??null,ue()})}),e.querySelector("[data-close-param]")?.addEventListener("click",()=>{Q=null,ue()}),e.querySelector("[data-save-dev-params]")?.addEventListener("submit",o=>{o.preventDefault();const u=o.currentTarget.dataset.saveDevParams,b=new FormData(o.currentTarget);Y.set(u,{offDelayMin:Number(b.get("offDelayMin")??15),restoreMin:Number(b.get("restoreMin")??30),luxOn:Number(b.get("luxOn")??280),luxOff:Number(b.get("luxOff")??450)}),Q=null,ve=!0,ye="设备自治延时与光感门限参数已下发并同步至配置基线。",ue()}),e.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{se=!se,ue()}),e.querySelector("[data-create-group]")?.addEventListener("submit",o=>{o.preventDefault();const u=new FormData(o.currentTarget),b=String(u.get("gName")??"").trim(),L=u.get("gTrack")??"mesh_auto",ge=String(u.get("gType")??"灯光联动组");b&&(g.unshift({id:`grp-${Date.now().toString(36)}`,track:L,groupType:ge,name:b,floorId:S,includesAdapter:L==="mesh_auto",deviceIds:L==="mesh_auto"?["dev-e7f-gw-01"]:[]}),se=!1,L==="mesh_auto"&&(ve=!0),ye=`已新建${L==="mesh_auto"?"端侧蓝牙 Mesh 自治组（已自动纳入蓝牙适配器）":"云端业务分组"}「${b}」。`,ue())}),e.querySelectorAll("[data-test-group]").forEach(o=>{o.addEventListener("click",()=>{const u=g.find(b=>b.id===o.dataset.testGroup);u&&(ye=`已向分组「${u.name}」发送群组试控指令，${u.deviceIds.length} 台成员回读正常。`,ue())})}),e.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>W()),e.querySelector("[data-sync-edge]")?.addEventListener("click",()=>{K+=1,ve=!1,ye=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${K}）。`,ue()}),e.querySelectorAll("[data-topo-mode]").forEach(o=>{o.addEventListener("click",()=>{P=o.dataset.topoMode??"mesh",ue()})}),e.querySelectorAll("[data-topo-jump]").forEach(o=>{o.addEventListener("click",()=>{$=o.dataset.topoJump??null,G=!0,l="floorplan",ue()})}),e.querySelector("[data-toggle-new-conn]")?.addEventListener("click",()=>{de=!de,ue()}),e.querySelector("[data-create-conn]")?.addEventListener("submit",o=>{o.preventDefault();const u=new FormData(o.currentTarget),b=String(u.get("cName")??"").trim(),L=String(u.get("cProto")??"bacnet_ip"),ge=String(u.get("cEndpoint")??"").trim();if(ae.some(j=>j.endpoint===ge)){ke=`端口冲突警告：局域网端点「${ge}」已被其他通道占用，请更换端口后重试。`,ue();return}ae.unshift({id:`conn-${Date.now().toString(36)}`,projectId:r.projectId,buildingId:v,floorId:S,name:b,protocol:L,endpoint:ge,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()}),de=!1,ke="",ye=`已接入「${b}」（${ge}），连通测试通过（18 ms）。`,ue()}),e.querySelector("[data-edge-restart]")?.addEventListener("click",()=>{ye="已下发「重启边缘服务」指令，边缘网关服务将在 5 秒内平滑重连。",ue()}),e.querySelectorAll("[data-expand-conn]").forEach(o=>{o.addEventListener("click",()=>{const u=o.dataset.expandConn??null;h=h===u?null:u,ue()})}),e.querySelectorAll("[data-ping-conn]").forEach(o=>{o.addEventListener("click",()=>{const u=ae.find(b=>b.id===o.dataset.pingConn);u&&(ke="",u.status==="connected"?ye=`连通测试通过：「${u.name}」（${u.endpoint}）响应正常，延迟 18 ms。`:ke=`连通测试异常：「${u.name}」（${u.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,ue())})}),e.querySelectorAll("[data-copy-endpoint]").forEach(o=>{o.addEventListener("click",async()=>{const u=o.dataset.endpointVal??"",b=o.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(u),n=b,ue(),window.setTimeout(()=>{n=null,ue()},1600)}catch{}})}),e.querySelectorAll("[data-preview-doc]").forEach(o=>{o.addEventListener("click",()=>{const u=lt.find(b=>b.id===o.dataset.previewDoc);u&&(ye=`已调阅工程附件「${u.name}」（关联范围：${u.boundScope}，更新于 ${u.updatedAt}）。`,ue())})}),e.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const o=await t.freezeDeliveryBatch(r.floorId,"部署总览验收发起交付冻结");ye=`已生成交付冻结快照 ${o.versionTag}（核验 ${o.verifiedCount}/${o.deviceCount}）。`,await ze()}catch(o){ke=o instanceof Error?o.message:String(o),ue()}})}await ze()}function bt(e){if(e.connectivity==="offline")return`${e.name.includes("VAV")?"VAV-02":e.name.slice(0,6)} 离线`;if(e.category==="lighting"){const t=e.name.includes("702")?"702 照明":"主照明",a=Number(e.telemetry.dimming?.value??0);return a>0?`${t} ${a}%`:`${t} 关`}return e.category==="hvac"?`${e.name.includes("VAV")?"VAV-02":"FCU-01"} ${e.telemetry.setpoint?.value??24}°C`:e.category==="sensor"?`环境 ${e.telemetry.temp?.value??"23.4"}°C`:e.category==="gateway"?"主控网关":e.name.slice(0,6)}const ht={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},aa={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},sa=me("chevron-down",12),oa={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function z(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function ft(e){const t=e.match(/(-?\d+)/);if(!t)return 0;const a=Number(t[1]);return e.toUpperCase().startsWith("B")?-Math.abs(a):a}async function na(e,t,a){const s=await t.getSpatialTree(),l=t.mode==="demo",c=a.scope.canControlDevices,D=a.scope.canManageAlarms,O=a.scope.allowedZoneIds?.length?a.scope.allowedZoneIds:null,N=s.floors.filter(x=>a.scope.allowedFloorIds.includes(x.id)),J=O||s.projects.length<=1&&s.buildings.length<=1&&N.length<=1?"floors-only":s.projects.length>1?"multi-project":s.buildings.length>1?"single-project-multi-building":"single-building",T=J==="multi-project",ee=J==="multi-project"||J==="single-project-multi-building",H=J!=="floors-only",ce=J==="floors-only"&&N.length<=1;let y=Ve(),G="devices",P=!1,Z=!1,X="",ne="",te="all",oe="all";const ae=new URLSearchParams(window.location.hash.split("?")[1]??""),re=ae.get("device"),$e=ae.get("zone");let M=re,R=!!re,B="control",m="",C=!1,S="today",v="devices";const $=new Set,d=new Set;let w=[],le=[],de=[],se=null,Q=null,n=1,h=0,K=0,ve=null;function De(){return s.zones.filter(x=>!(y.level==="floor"&&x.floorId!==y.floorId||O&&!O.includes(x.id)))}function Ee(x){return[...s.floors.filter(q=>q.buildingId!==x?!1:J==="floors-only"?a.scope.allowedFloorIds.includes(q.id):!0)].sort((q,p)=>ft(p.name)-ft(q.name))}async function ye(x,W=!1){let q=x;q.level==="all-projects"&&!T&&(q={level:"project",projectId:s.projects[0]?.id??r.projectId}),q.level==="project"&&!ee&&(q={level:"building",projectId:q.projectId,buildingId:s.buildings[0]?.id??r.buildingId}),q.level==="building"&&!H&&(q={level:"floor",projectId:q.projectId,buildingId:q.buildingId,floorId:N[0]?.id??r.floorId}),y=q,pt(q),Q=null,oe=W&&$e?$e:"all",C=!1,Z=!1,P=!1,d.clear(),n=1,h=0,K=0,ve&&(ve(),ve=null);const p=y.level==="floor"?y.floorId:r.floorId;if(y.level==="floor")try{const[f,V,F]=await Promise.all([t.getFloorDevices(y.floorId),t.listAlarms(y.floorId),t.listWorkOrders(y.floorId)]);w=f,le=V,de=F,w.some(pe=>pe.id===M)?W&&re&&(R=!0):(M=w[1]?.id??w[0]?.id??null,R=!1),ve=t.subscribeFloorEvents(y.floorId,async pe=>{pe.type==="control.receipt.updated"&&se?.batchId===pe.batchId&&(se=await t.getControlBatch(pe.batchId)),(pe.type==="telemetry.updated"||pe.type==="device.connectivity")&&y.level==="floor"&&(w=await t.getFloorDevices(y.floorId)),pe.type==="alarm.changed"&&y.level==="floor"&&(le=await t.listAlarms(y.floorId)),g()})}catch(f){w=[],le=[],de=[],M=null,R=!1,Q=f instanceof Error?f.message:String(f)}else{R=!1;const[f,V,F]=await Promise.all([t.getFloorDevices(p).catch(()=>[]),t.listAlarms(p).catch(()=>[]),t.listWorkOrders(p).catch(()=>[])]);w=f,le=V,de=F}Se()}function ke(x){return x?s.zones.find(W=>W.id===x)?.name??x:"未分配逻辑区"}function E(){const x=ne.trim().toLowerCase();return w.filter(W=>oe!=="all"&&W.logicalZoneId!==oe||te!=="all"&&W.category!==te?!1:x?W.name.toLowerCase().includes(x)||W.id.toLowerCase().includes(x)||ke(W.logicalZoneId).toLowerCase().includes(x):!0)}async function i(x,W,q){!x.length||y.level!=="floor"||!c||(x.forEach(p=>$.add(p)),se=await t.dispatchControlBatch({floorId:y.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:x.map(p=>({deviceId:p,command:W,targetValue:q}))}),g())}function g(){const x=document.activeElement,W=x?.dataset?.role,q=x&&"selectionStart"in x?x.selectionStart:null,p=x&&"selectionEnd"in x?x.selectionEnd:null,f=e.querySelector(".pacom-list")?.scrollTop??0;Se();const V=e.querySelector(".pacom-list");if(V&&(V.scrollTop=f),W==="search"||W==="space-search"){const F=e.querySelector(`[data-role="${W}"]`);F&&(F.focus(),q!==null&&p!==null&&F.setSelectionRange(q,p))}}function Y(){const x=e.querySelector('[data-role="canvas-viewport"]');x&&(x.style.transform=`translate(${h}px, ${K}px) scale(${n})`);const W=e.querySelector('[data-role="zoom-label"]');W&&(W.textContent=`${Math.round(n*100)}%`)}function be(x){if(x==="all")return{level:"all-projects"};const W=x.split(":");return W[0]==="project"&&W[1]?{level:"project",projectId:W[1]}:W[0]==="building"&&W[1]&&W[2]?{level:"building",projectId:W[1],buildingId:W[2]}:W[0]==="floor"&&W[1]&&W[2]&&W[3]?{level:"floor",projectId:W[1],buildingId:W[2],floorId:W[3]}:{level:"all-projects"}}function he(x){const W=y;if(W.level==="all-projects"){const q=ne.trim().toLowerCase(),p=s.projects.filter(f=>!q||f.name.toLowerCase().includes(q));return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">授权园区（${p.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${me("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:6px; padding:8px;">
          ${p.map(f=>{const V=s.buildings.filter(F=>F.projectId===f.id).length;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="project:${z(f.id)}">
                  <div>
                    <div class="pacom-row-title">${z(f.name)}</div>
                    <div class="pacom-row-sub">${z(f.city??"")} · ${V} 栋楼宇</div>
                  </div>
                  <span class="pacom-badge pacom-badge--accent">进入 →</span>
                </button>`}).join("")}
        </div>
      `}if(W.level==="project"){const q=ne.trim().toLowerCase(),p=s.buildings.filter(F=>F.projectId===W.projectId&&(!q||F.name.toLowerCase().includes(q))),f=w.filter(F=>F.connectivity==="online").length,V=w.length?Math.round(f/w.length*100):100;return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">园区楼宇（${p.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${me("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${p.map(F=>{const pe=F.id===r.buildingId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="building:${z(F.projectId)}:${z(F.id)}">
                  <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                    <span class="pacom-dot ${pe&&x>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <div>
                      <div class="pacom-row-title">${z(F.name)}</div>
                      <div class="pacom-row-sub">地上 ${F.aboveFloors} 层 · ${F.areaSqm??"-"} m²</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${pe?"pacom-badge--accent":"pacom-badge--neutral"}">${pe?`在线 ${V}%`:"运行平稳"}</span>
                </button>`}).join("")}
        </div>
      `}if(W.level==="building"){const q=ne.trim().toLowerCase(),p=Ee(W.buildingId).filter(V=>!q||V.name.toLowerCase().includes(q)),f=s.buildings.find(V=>V.id===W.buildingId);return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">${z(f?.name??"楼宇")} 楼层导览（${p.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${me("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${p.map(V=>{const F=a.scope.allowedFloorIds.includes(V.id),pe=V.id===r.floorId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left; ${F?"":"opacity:0.6;"}" data-nav-scope="floor:${z(W.projectId)}:${z(W.buildingId)}:${z(V.id)}">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="pacom-dot ${pe&&x>0?"pacom-dot--warning":V.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                    <div>
                      <div class="pacom-row-title">${z(f?.name??"")} ${z(V.name)}</div>
                      <div class="pacom-row-sub">${V.plan?"2D 平面控图就绪":"暂未上传平面图"}${pe&&x>0?` · ${x} 告警`:""}</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${F&&V.plan?"pacom-badge--online":"pacom-badge--neutral"}">${F?V.plan?"进入 →":"待部署":"未授权"}</span>
                </button>`}).join("")}
        </div>
      `}if(G==="devices"){const q=E(),p=De(),f=Array.from(d);return`
        <div class="pacom-pane-toolbar" style="padding:10px 12px; gap:8px;">
          ${O?`<div class="pacom-info-banner">我的区域视图：仅显示获授权的 ${O.length} 个功能区及设备。</div>`:""}
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
            <select class="pacom-select" style="height:28px; font-size:12px;" name="deviceCategory" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${te==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${te==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${te==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${te==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${te==="gateway"?"selected":""}>网关</option>
            </select>
            <span style="font-size:12px; color:var(--pacom-text-secondary);">可见 ${q.length} 台${c&&f.length?` · 已选 ${f.length}`:""}</span>
            <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${me("x",14)}</button>
          </div>
          ${p.length>0&&!Q?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${oe==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${p.map(V=>`<button type="button" class="pacom-zone-pill ${oe===V.id?"is-active":""}" data-filter-zone="${z(V.id)}">${z(V.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
        </div>
        <div class="pacom-list" style="padding:6px;">
          ${Q?`<div class="pacom-alert-banner">${z(Q)}</div>`:q.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">没有匹配的设备</div>':q.map(V=>{const F=V.id===M&&R,pe=d.has(V.id),fe=V.connectivity==="offline",we=fe?"pacom-dot--critical":"pacom-dot--online",ie=fe?"离线":V.category==="lighting"?`${V.telemetry.dimming?.value??"--"}%`:V.category==="hvac"?`${V.telemetry.setpoint?.value??"--"}°C`:V.category==="sensor"?`${V.telemetry.temp?.value??"--"}°C`:"在线";return`
                        <div class="pacom-row ${F?"is-selected":""}" data-select-device="${z(V.id)}" style="padding:8px;">
                          <div class="pacom-row-main">
                            ${c?`<input type="checkbox" name="devCheck-${z(V.id)}" data-check-device="${z(V.id)}" ${pe?"checked":""} style="margin-top:3px;" aria-label="勾选 ${z(V.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title" style="font-size:13px;">${z(V.name)}</div>
                              <div class="pacom-row-sub">${z(ke(V.logicalZoneId).replace(/^7F\s*/,""))} · ${z(ht[V.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${fe?"pacom-badge--critical":"pacom-badge--online"}">
                            <span class="pacom-dot ${we}"></span>${z(ie)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${c&&f.length>0?`
            <div class="pacom-batch-bar" style="padding:8px 12px;">
              <span style="font-size:12px;">已选 <strong>${f.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(G==="zones"){const q=De(),p={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">功能区快控（${q.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${me("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:8px; padding:10px;">
          ${q.map(f=>{const V=w.filter(ie=>ie.logicalZoneId===f.id),F=V.filter(ie=>ie.connectivity==="online").length,pe=V.filter(ie=>ie.category==="lighting"||ie.category==="hvac").length,fe=oe===f.id,we=p[f.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${fe?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${fe?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${z(fe?"all":f.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:13px; font-weight:500;">${z(f.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${F}/${V.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时 ${we.temp} · ${we.occ}</div>
                  ${pe>0?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-zone-power="${z(f.id)}" data-zone-val="true" ${c?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-zone-power="${z(f.id)}" data-zone-val="false" ${c?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">弱电 / 网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-hud-sheet-head">
        <strong style="font-size:13px; font-weight:500;">本层告警（${le.length}）</strong>
        <div style="display:flex; align-items:center; gap:4px;">
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${me("x",14)}</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:10px;">
        ${le.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">当前楼层无活跃告警</div>':le.map(q=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${z(q.title)}</strong>
                      <span class="pacom-badge ${q.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${q.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${z(q.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-locate-device="${z(q.deviceId)}">定位设备</button>
                      ${q.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-ack-alarm="${z(q.id)}" ${D?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function je(x){const W=y,q=De().length,p=W.level==="floor"?"搜索设备或区域…":W.level==="building"?"搜索楼层…":W.level==="project"?"搜索楼宇…":"搜索园区…",f=W.level==="floor"?`
          <button type="button" class="pacom-hud-pill ${P&&G==="devices"?"is-active":""}" data-hud-tab="devices">设备 ${w.length}</button>
          <button type="button" class="pacom-hud-pill ${P&&G==="zones"?"is-active":""}" data-hud-tab="zones">区域 ${q}</button>
          <button type="button" class="pacom-hud-pill ${x>0?"pacom-hud-pill--alert":""} ${P&&G==="alarms"?"is-active":""}" data-hud-tab="alarms">告警 ${x}</button>
        `:W.level==="building"?`
            <button type="button" class="pacom-hud-pill ${P?"is-active":""}" data-toggle-hud="1">楼层 ${Ee(W.buildingId).length}</button>
            ${x>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${x}</button>`:""}
          `:W.level==="project"?`
              <button type="button" class="pacom-hud-pill ${P?"is-active":""}" data-toggle-hud="1">楼宇 ${s.buildings.filter(V=>V.projectId===W.projectId).length}</button>
              ${x>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${x}</button>`:""}
            `:`<button type="button" class="pacom-hud-pill ${P?"is-active":""}" data-toggle-hud="1">园区 ${s.projects.length}</button>`;return`
      <div class="pacom-hud-search-wrap" data-role="hud-wrap">
        <div class="pacom-hud-bar" style="padding:0 8px 0 12px;">
          ${me("search",14)}
          <input class="pacom-hud-input" name="spatialSearch" data-role="search" placeholder="${p}" value="${z(ne)}" aria-label="${p}" />
          ${f}
        </div>
        ${P?`<div class="pacom-hud-sheet" data-role="hud-sheet">${he(x)}</div>`:""}
      </div>
    `}function Oe(x){if(ce||y.level!=="building"&&y.level!=="floor")return"";const W=y.buildingId,q=y.projectId,p=Ee(W);return!H&&p.length<=1?"":`
      <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换" data-role="elevation-scrubber">
        ${H?`<button type="button" class="pacom-elev-item ${y.level==="building"?"is-active":""}" data-nav-scope="building:${z(q)}:${z(W)}" title="查看整栋视图">
                <span>栋</span>
                <span class="pacom-elev-tick"></span>
              </button>`:""}
        ${p.map(f=>{const V=a.scope.allowedFloorIds.includes(f.id),F=y.level==="floor"&&y.floorId===f.id,pe=f.id===r.floorId&&x>0;return`
              <button type="button" class="pacom-elev-item ${F?"is-active":""} ${V?"":"is-locked"}"
                data-nav-scope="floor:${z(q)}:${z(W)}:${z(f.id)}"
                title="${z(f.name)}${V?pe?` · ${x} 条告警`:"":"（无权限）"}">
                ${pe?'<span class="pacom-elev-dot" aria-hidden="true"></span>':""}
                <span>${z(f.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`}).join("")}
      </nav>
    `}function xe(x,W){const q=y;if(q.level==="floor")return Q?"":`
        <div class="pacom-canvas-dock" role="toolbar" aria-label="平面图图层与缩放控制">
          <button type="button" class="pacom-dock-btn" aria-pressed="${v==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${v==="temp"}" data-canvas-layer="temp">温度热力</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${v==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-zoom="out" title="缩小" aria-label="缩小">${me("minus",14)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-zoom="reset" data-role="zoom-label" title="点击复位 100%">${Math.round(n*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-zoom="in" title="放大" aria-label="放大">${me("plus",14)}</button>
        </div>
      `;const p=w.length?Math.round(x/w.length*100):100,f=q.level==="building"?"418 kWh":"1,248 kWh",V=Math.round(96.2*.45+93.6*.35+p*.2),F=q.level==="building"?Ee(q.buildingId).find(pe=>pe.id===r.floorId)??Ee(q.buildingId)[0]:null;return`
      <div class="pacom-canvas-dock" role="region" aria-label="空间运行态势">
        <button type="button" class="pacom-dock-metric" data-go-analysis="health">
          <span class="pacom-dot pacom-dot--online"></span>
          <span>健康 <strong>${V}</strong></span>
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
          <span class="pacom-dot ${W>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
          <span>告警 <strong>${W}</strong></span>
        </button>
        ${q.level==="building"&&F?`<span class="pacom-dock-sep" aria-hidden="true"></span>
               <button type="button" class="pacom-dock-btn" aria-pressed="true" data-nav-scope="floor:${z(q.projectId)}:${z(q.buildingId)}:${z(F.id)}">进入 ${z(F.name)} 平面图 →</button>`:""}
      </div>
    `}function Le(x,W){const q=y,p=w.length?Math.round(x/w.length*100):100;if(q.level==="all-projects")return`
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
            ${s.projects.map((F,pe)=>`
                <button type="button" class="pacom-pin is-selected" style="left:${pe===0?50:28}%; top:${pe===0?52:34}%; padding:0 12px; height:32px; font-size:12px;" data-nav-scope="project:${z(F.id)}">
                  <span class="pacom-dot ${W>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <span>${z(F.name)} · 在线 ${p}%</span>
                </button>`).join("")}
          </div>
        </div>
      `;if(q.level==="project"){const F=s.projects.find(fe=>fe.id===q.projectId)??s.projects[0],pe=s.buildings.filter(fe=>!F||fe.projectId===F.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 24px 72px; cursor:default;">
          <div style="position:relative; width:min(940px, 92%); border-radius:16px; overflow:hidden; box-shadow:0 14px 36px rgba(15,23,42,0.12); background:#fff;">
            <img src="${z(F?.imageUrl??"./media/gzlab.jpg")}" alt="${z(F?.name??"园区")}俯瞰" style="width:100%; max-height:72vh; object-fit:cover; display:block;" />
            ${pe.map((fe,we)=>{const ie=fe.id===r.buildingId;return`
                  <button type="button" class="pacom-pin ${ie?"is-selected":""}" style="left:${we===0?56:38}%; top:${we===0?44:62}%; height:30px; padding:0 11px;" data-nav-scope="building:${z(fe.projectId)}:${z(fe.id)}">
                    <span class="pacom-dot ${ie&&W>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${z(fe.name)} · ${ie?`在线 ${p}% · 告警 ${W}`:"运行平稳"}</span>
                  </button>`}).join("")}
          </div>
        </div>
      `}if(q.level==="building"){const F=s.buildings.find(fe=>fe.id===q.buildingId),pe=Ee(q.buildingId).find(fe=>fe.id===r.floorId)??Ee(q.buildingId)[0];return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 68px 72px 24px; cursor:default;">
          <div style="position:relative; display:inline-block;">
            <img class="pacom-plan-img" src="${z(F?.imageUrl??"./media/building-e.png")}" alt="${z(F?.name??"楼宇")} 整栋实景图" style="max-height:74vh;" />
            ${pe?`<button type="button" class="pacom-pin is-selected" style="left:52%; top:38%; height:30px; padding:0 11px;" data-nav-scope="floor:${z(q.projectId)}:${z(q.buildingId)}:${z(pe.id)}">
                    <span class="pacom-dot ${W>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${z(F?.name??"")} ${z(pe.name)} · 在线 ${x}/${w.length}</span>
                  </button>`:""}
          </div>
        </div>
      `}const f=s.floors.find(F=>F.id===q.floorId),V=De();return`
      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${Q?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${z(Q)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${h}px, ${K}px) scale(${n});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${z(f?.plan?.imageUrl??"./media/7F.webp")}" alt="E栋 ${z(f?.name??"7F")} 平面图" />
                  ${V.map((F,pe)=>{const fe=oa[F.id];if(!fe)return"";const we=oe===F.id,ie=["23.2°C","24.6°C","22.8°C","23.9°C"],Fe=["有人 74%","会议中","有人 52%","空闲"],Pe=v==="temp"?` · ${ie[pe%ie.length]}`:v==="occupancy"?` · ${Fe[pe%Fe.length]}`:"",Je=v==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":v==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${we?"is-active":""}"
                          style="left:${fe.left}%; top:${fe.top}%; width:${fe.width}%; height:${fe.height}%; ${we?"":Je}"
                          data-filter-zone="${z(we?"all":F.id)}"
                          title="${z(F.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${z(F.name.replace(/^7F\s*/,""))}${Pe}</span>
                        </button>`}).join("")}
                  ${w.filter(F=>F.planPoint).map(F=>{const pe=le.some(Pe=>Pe.deviceId===F.id&&Pe.status==="active"),fe=P&&G==="alarms",we=oe!=="all"&&F.logicalZoneId!==oe||fe&&!pe,ie=fe&&pe?"background:var(--pacom-status-critical);":"",Fe=F.category==="gateway"?Math.min(92,F.planPoint.y*100+5.5):F.planPoint.y*100;return`
                        <button type="button" class="pacom-pin ${F.id===M&&R?"is-selected":""} ${F.connectivity==="offline"?"pacom-pin--offline":""} ${we?"pacom-pin--dimmed":""}"
                          style="left:${(F.planPoint.x*100).toFixed(2)}%; top:${Fe.toFixed(2)}%; ${ie}"
                          data-pin-device="${z(F.id)}" title="${z(F.name)}">
                          <span class="pacom-dot ${pe?"pacom-dot--critical":F.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${z(bt(F))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>
    `}function Ne(){if(y.level!=="floor"||!R)return"";const x=w.find(ie=>ie.id===M);if(!x)return"";const W=x.category==="lighting",q=x.category==="hvac",p=Number(x.telemetry.dimming?.value??50),f=Number(x.telemetry.setpoint?.value??24),V=$.has(x.id),F=le.filter(ie=>ie.deviceId===x.id&&ie.status==="active"),pe=de.filter(ie=>ie.deviceId===x.id&&ie.status!=="closed"),fe=q?[{name:"E7F_暖通空调与末端竣工图_v2.3.pdf",tag:"竣工图纸"},{name:"FCU-01_风机盘管维保与排障手册.pdf",tag:"维保手册"}]:W?[{name:"E7F_强电照明与DALI回路拓扑.pdf",tag:"回路图纸"}]:[{name:"E7F_BACnet_Modbus_点位映射表.xlsx",tag:"点位台账"}],we=W?[{label:"当前开关",value:p>0?"开启":"关闭"},{label:"当前亮度",value:`${p}%`},{label:"实时功率",value:p>0?`${Math.round(p*1.4)} W`:"0 W"},{label:"运行模式",value:V?"人工覆盖":"自动策略"}]:q?[{label:"室内温度",value:`${x.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${f.toFixed(1)}°C`},{label:"运行工况",value:x.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:V?"人工覆盖":"自动策略"}]:x.category==="sensor"?[{label:"实时温度",value:`${x.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${x.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${x.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:x.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:x.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:x.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:x.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:x.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${z(x.name)}</h2>
            <div class="pacom-row-sub">${z(ke(x.logicalZoneId))} · ${z(ht[x.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${x.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${x.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              ${me("x",16)}
            </button>
          </div>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备档案分页" style="width:100%; justify-content:space-between;">
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${B==="control"}" data-drawer-tab="control">控制与工况</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${B==="trend"}" data-drawer-tab="trend">趋势与告警${F.length>0?` (${F.length})`:""}</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${B==="profile"}" data-drawer-tab="profile">档案与图纸</button>
        </div>

        ${B==="control"?`
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
              ${we.map(ie=>`
                  <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                    <span class="pacom-row-sub">${ie.label}</span>
                    <strong style="font-size:13px; font-weight:500;">${z(ie.value)}</strong>
                  </div>`).join("")}
            </div>

            ${q?`
                <div class="pacom-schematic-strip" aria-label="暖通工况简图">
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                    <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                    <span class="pacom-row-sub">${x.connectivity==="online"?"制冷运转":"通信离线"}</span>
                  </div>
                  <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                    <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                    <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                    <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${z(x.telemetry.temp?.value??"23.8")}°</text>
                    <rect x="80" y="8" width="54" height="28" rx="6" fill="${x.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${x.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                    <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${x.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                    <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${x.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                    <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                    <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                    <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${f.toFixed(1)}°C</text>
                  </svg>
                </div>`:""}

            ${W||q?`
                <div class="pacom-control-box">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                    ${V&&c?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${z(x.id)}">恢复自动策略</button>`:c?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
                  </div>
                  ${x.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
                  ${W?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${c?"":"disabled"}>开灯</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${c?"":"disabled"}>关灯</button>
                      </div>
                      <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                        亮度目标：<strong>${p}%</strong>
                        <input type="range" min="0" max="100" step="10" value="${p}" data-ctrl-slider="lighting.dimming" ${c?"":"disabled"} />
                      </label>`:`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${c?"":"disabled"}>开机</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${c?"":"disabled"}>关机</button>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:12px;">设定温度：</span>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${f-.5}" ${c?"":"disabled"}>-0.5°C</button>
                        <strong>${f.toFixed(1)}°C</strong>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${f+.5}" ${c?"":"disabled"}>+0.5°C</button>
                      </div>`}
                </div>`:""}

            ${se?`
                <div class="pacom-control-box">
                  <div style="font-size:12px; font-weight:500;">最近批次：<code>${z(se.batchId)}</code></div>
                  <div class="pacom-receipt-list">
                    ${se.receipts.map(ie=>{const Fe=aa[ie.status]??{text:ie.status,badge:"pacom-badge--neutral"};return`
                          <div class="pacom-receipt-item">
                            <div>
                              <div><strong>${z(ie.deviceId)}</strong> · ${z(ie.command)} → ${z(ie.targetValue)}</div>
                              ${ie.errorMessage?`<div style="color:var(--pacom-status-critical);">${z(ie.errorMessage)}</div>`:""}
                            </div>
                            <span class="pacom-badge ${Fe.badge}">${Fe.text}</span>
                          </div>`}).join("")}
                  </div>
                </div>`:""}`:B==="trend"?`
              <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="pacom-row-sub">近 24 小时趋势（${W?"亮度 %":q?"温度 °C":x.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${z(x.id)}">查看完整时序 →</button>
                </div>
                <svg viewBox="0 0 280 48" style="width:100%; height:48px; display:block;">
                  <line x1="0" y1="24" x2="280" y2="24" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
                  <polyline fill="none" stroke="${x.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${W?"0,38 40,38 80,16 120,12 160,14 200,20 240,14 280,16":q?"0,28 40,30 80,25 120,20 160,18 200,22 240,24 280,20":"0,24 40,25 80,23 120,21 160,20 200,22 240,21 280,22"}" />
                </svg>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:12px; font-weight:500;">本机活跃告警与未结工单</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
                </div>
                ${F.length===0&&pe.length===0?'<div class="pacom-row-sub">当前设备运行平稳，无未处理告警或工单。</div>':`${F.map(ie=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${z(ie.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${z(ie.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去诊断 →</span>
                          </button>`).join("")}${pe.map(ie=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-wo-id="${z(ie.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${z(ie.title)}</span>
                            <span class="pacom-badge pacom-badge--accent">查看工单 →</span>
                          </button>`).join("")}`}
              </div>`:`
              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">上下游拓扑关系（Twin Relationships）</span>
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; font-size:12px;">
                  <span class="pacom-badge pacom-badge--neutral">E7F 主控网关-01</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--accent">${z(bt(x))}</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--online">${z(ke(x.logicalZoneId).replace(/^7F\s*/,""))}</span>
                </div>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">关联竣工图纸与设备手册</span>
                ${m?`<div class="pacom-info-banner">${z(m)}</div>`:""}
                ${fe.map(ie=>`
                    <div class="pacom-receipt-item">
                      <span style="font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${z(ie.name)}">${z(ie.name)}</span>
                      <button type="button" class="pacom-btn" style="height:24px; padding:0 8px; font-size:11px;" data-drawer-doc="${z(ie.name)}">查阅</button>
                    </div>`).join("")}
              </div>

              <details class="pacom-tech-details" open>
                <summary><span>技术标识与硬件绑定</span>${me("chevron-down",12)}</summary>
                <div class="pacom-kv-grid">
                  <span class="pacom-kv-label">设备编号</span><span><code>${z(x.id)}</code> · v${x.version}</span>
                  <span class="pacom-kv-label">图上点位</span><span>${x.planPoint?`x=${x.planPoint.x.toFixed(2)}, y=${x.planPoint.y.toFixed(2)} (图 v${x.planPoint.planVersion})`:"未标点"}</span>
                  <span class="pacom-kv-label">物理安装</span><span>${x.physicalInstalled?"现场已确认":"待现场复核"}</span>
                  <span class="pacom-kv-label">硬件绑定</span><span>${x.hardwareBinding?`${x.hardwareBinding.protocol.toUpperCase()} · ${x.hardwareBinding.networkAddress}`:"未绑定"}</span>
                </div>
              </details>`}
      </aside>
    `}function ze(x,W,q){if(!C)return"";const p=Math.max(0,w.length-x),f=S==="week",V=le.filter(F=>F.status==="active").slice(0,2);return`
      <div class="pacom-briefing-pop" style="width:420px; top:48px; right:20px;" role="dialog" aria-label="运行简报" data-role="briefing-pop">
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
            <button type="button" class="pacom-drawer-close" data-toggle-briefing="1" aria-label="关闭简报">${me("x",16)}</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">${f?"本周累计节能":"昨日能耗偏差"}</span><strong style="color:var(--pacom-status-online);">${f?"-7.1%（省 ¥342）":"-6.4%（省 ¥48）"}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">均温 / 在线率</span><strong>${z(q)}°C · ${x}/${w.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${W} 告警 · ${p} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖 / 未结工单</span><strong>${Math.max(1,$.size)} 覆盖 · ${de.filter(F=>F.status!=="closed").length} 工单</strong></div>
        </div>
        ${V.length>0?`<div style="display:flex; flex-direction:column; gap:5px;">
                <span class="pacom-row-sub">优先关注事项（点击直达）</span>
                ${V.map(F=>`
                    <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${z(F.id)}">
                      <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${z(F.title)}</span>
                      <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                    </button>`).join("")}
              </div>`:""}
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报 (.txt)</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">进入告警中心 →</button>
        </div>
      </div>
    `}function Se(){const x=le.filter(p=>p.status==="active").length,W=w.filter(p=>p.connectivity==="online").length,q=w.find(p=>p.category==="sensor")?.telemetry.temp?.value??"23.4";e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">空间总览</h1>
              ${Ue({tree:s,session:a,scope:y,activeAlarmCount:x,isOpen:Z,searchKeyword:X})}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${Q?l?'<span class="pacom-badge pacom-badge--neutral"><span class="pacom-dot pacom-dot--offline"></span>演示模式</span>':'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>':`<button type="button" class="pacom-pulse-btn" data-toggle-briefing="1" aria-expanded="${C}" title="点击查看今日运行简报">
                      <span class="pacom-dot pacom-dot--online"></span>
                      <span>${W}/${w.length} 在线 · ${z(q)}°C · 简报</span>
                      <span style="display:inline-flex; color:var(--pacom-text-secondary);">${sa}</span>
                    </button>`}
            </div>
          </div>
        </header>

        ${ze(W,x,q)}

        <main class="pacom-spatial-stage">
          ${je(x)}
          ${Le(W,x)}
          ${Oe(x)}
          ${xe(W,x)}
          ${Ne()}
        </main>
      </div>
    `,Ze()}function Ze(){He(e,{onToggle:()=>{Z=!Z,Z&&(C=!1,P=!1),Se(),Z&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:p=>{X=p,Se();const f=e.querySelector("[data-global-space-search]");f&&(f.focus(),f.setSelectionRange(p.length,p.length))},onPick:p=>{Z=!1,ye(p)}}),e.querySelectorAll("[data-nav-scope]").forEach(p=>{p.addEventListener("click",f=>{f.stopPropagation(),p.dataset.navScope&&ye(be(p.dataset.navScope))})}),e.querySelectorAll("[data-hud-tab]").forEach(p=>{p.addEventListener("click",f=>{f.stopPropagation();const V=p.dataset.hudTab;P&&G===V?P=!1:(G=V,P=!0,Z=!1,C=!1),Se()})}),e.querySelectorAll("[data-toggle-hud]").forEach(p=>{p.addEventListener("click",f=>{f.stopPropagation(),P=!P,P&&(Z=!1,C=!1),Se()})}),e.querySelectorAll("[data-close-hud]").forEach(p=>{p.addEventListener("click",f=>{f.stopPropagation(),P=!1,Se()})});const x=e.querySelector('[data-role="search"]');x?.addEventListener("focus",()=>{P||(P=!0,Z=!1,C=!1,g())}),x?.addEventListener("input",p=>{ne=p.currentTarget.value,P=!0,g()}),e.querySelector('[data-role="category"]')?.addEventListener("change",p=>{te=p.currentTarget.value,Se()}),e.querySelectorAll("[data-filter-zone]").forEach(p=>{p.addEventListener("click",f=>{f.stopPropagation(),oe=p.dataset.filterZone??"all",Se()})}),e.querySelectorAll("[data-select-device]").forEach(p=>{p.addEventListener("click",f=>{f.target.tagName!=="INPUT"&&(M=p.dataset.selectDevice??null,R=!0,Se())})}),e.querySelectorAll("[data-check-device]").forEach(p=>{p.addEventListener("change",()=>{const f=p.dataset.checkDevice;f&&(p.checked?d.add(f):d.delete(f),Se())})}),e.querySelectorAll("[data-pin-device]").forEach(p=>{p.addEventListener("click",f=>{f.stopPropagation(),M=p.dataset.pinDevice??null,R=!0,Z=!1,C=!1,Se()})}),e.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{R=!1,Se()}),e.querySelectorAll("[data-drawer-tab]").forEach(p=>{p.addEventListener("click",()=>{B=p.dataset.drawerTab??"control",m="",Se()})}),e.querySelectorAll("[data-drawer-doc]").forEach(p=>{p.addEventListener("click",()=>{m=`已调阅「${p.dataset.drawerDoc??""}」（完整工程文档库见「系统部署 → 楼层与功能区」）。`,Se()})}),e.querySelectorAll("[data-briefing-period]").forEach(p=>{p.addEventListener("click",()=>{S=p.dataset.briefingPeriod??"today",Se()})}),e.querySelectorAll("[data-go-alarm-id]").forEach(p=>{p.addEventListener("click",()=>{const f=p.dataset.goAlarmId??"";window.location.hash=f?`#alarms?alarm=${encodeURIComponent(f)}`:"#alarms"})}),e.querySelectorAll("[data-go-wo-id]").forEach(p=>{p.addEventListener("click",()=>{const f=p.dataset.goWoId??"";window.location.hash=f?`#alarms?wo=${encodeURIComponent(f)}`:"#alarms"})}),e.querySelector("[data-release-override]")?.addEventListener("click",p=>{const f=p.currentTarget.dataset.releaseOverride;f&&($.delete(f),Se())}),e.querySelectorAll("[data-zone-power]").forEach(p=>{p.addEventListener("click",f=>{f.stopPropagation();const V=p.dataset.zonePower,F=p.dataset.zoneVal==="true";if(!V)return;const pe=w.filter(we=>we.logicalZoneId===V&&we.category==="lighting").map(we=>we.id),fe=w.filter(we=>we.logicalZoneId===V&&we.category==="hvac").map(we=>we.id);pe.length?i(pe,"lighting.power",F):fe.length&&i(fe,"hvac.power",F)})}),e.querySelectorAll("[data-locate-device]").forEach(p=>{p.addEventListener("click",()=>{const f=p.dataset.locateDevice;f&&(M=f,R=!0,P=!1,Se())})}),e.querySelectorAll("[data-go-alarms]").forEach(p=>{p.addEventListener("click",()=>{window.location.hash="#alarms"})}),e.querySelectorAll("[data-go-analysis]").forEach(p=>{p.addEventListener("click",()=>{const f=p.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(f)}`})}),e.querySelectorAll("[data-go-timeseries]").forEach(p=>{p.addEventListener("click",()=>{const f=p.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(f)}`})}),e.querySelectorAll("[data-toggle-briefing]").forEach(p=>{p.addEventListener("click",f=>{f.stopPropagation(),C=!C,C&&(Z=!1,P=!1),Se()})}),e.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const p=w.filter(we=>we.connectivity==="online").length,f=le.filter(we=>we.status==="active").length,V=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${p}/${w.length}（离线 ${w.length-p} 台）`,`待处理告警：${f} 条`,`人工覆盖中：${$.size} 台`].join(`
`),F=new Blob([V],{type:"text/plain;charset=utf-8;"}),pe=URL.createObjectURL(F),fe=document.createElement("a");fe.href=pe,fe.download="pacom-daily-briefing.txt",fe.click(),URL.revokeObjectURL(pe)}),e.querySelectorAll("[data-ctrl-cmd]").forEach(p=>{p.addEventListener("click",()=>{if(!M||!p.dataset.ctrlCmd)return;const f=p.dataset.ctrlVal??"",V=f==="true"?!0:f==="false"?!1:Number(f);i([M],p.dataset.ctrlCmd,V)})}),e.querySelector("[data-ctrl-slider]")?.addEventListener("change",p=>{const f=p.currentTarget;!M||!f.dataset.ctrlSlider||i([M],f.dataset.ctrlSlider,Number(f.value))}),e.querySelectorAll("[data-batch-cmd]").forEach(p=>{p.addEventListener("click",()=>{const f=Array.from(d),V=p.dataset.batchVal??"",F=V==="true"?!0:V==="false"?!1:V;i(f,p.dataset.batchCmd,F)})}),e.querySelectorAll("[data-ack-alarm]").forEach(p=>{p.addEventListener("click",async()=>{!p.dataset.ackAlarm||y.level!=="floor"||!D||(await t.acknowledgeAlarm(p.dataset.ackAlarm,"首页快速确认"),le=await t.listAlarms(y.floorId),Se())})}),e.querySelectorAll("[data-canvas-layer]").forEach(p=>{p.addEventListener("click",()=>{const f=p.dataset.canvasLayer;f&&(v=f,Se())})}),e.querySelectorAll("[data-zoom]").forEach(p=>{p.addEventListener("click",()=>{const f=p.dataset.zoom;f==="in"?n=Math.min(2.6,Number((n+.2).toFixed(2))):f==="out"?n=Math.max(.6,Number((n-.2).toFixed(2))):(n=1,h=0,K=0),Y()})}),e.querySelector('[data-role="elevation-scrubber"]')?.addEventListener("wheel",p=>{p.preventDefault();const f=y;if(f.level!=="building"&&f.level!=="floor")return;const V=Ee(f.buildingId),F=[...H?[{level:"building",projectId:f.projectId,buildingId:f.buildingId}]:[],...V.map(we=>({level:"floor",projectId:f.projectId,buildingId:f.buildingId,floorId:we.id}))],pe=F.findIndex(we=>we.level==="building"?f.level==="building":we.level==="floor"&&f.level==="floor"&&we.floorId===f.floorId);if(pe<0)return;const fe=Math.max(0,Math.min(F.length-1,pe+(p.deltaY>0?1:-1)));fe!==pe&&F[fe]&&ye(F[fe])},{passive:!1});const q=e.querySelector('[data-role="canvas-stage"]');if(q&&!Q){let p=!1,f=!1,V=0,F=0,pe=0,fe=0;q.addEventListener("pointerdown",ie=>{ie.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(p=!0,f=!1,V=ie.clientX,F=ie.clientY,pe=h,fe=K,q.classList.add("is-panning"),q.setPointerCapture?.(ie.pointerId))}),q.addEventListener("pointermove",ie=>{if(!p)return;const Fe=ie.clientX-V,Pe=ie.clientY-F;(Math.abs(Fe)>3||Math.abs(Pe)>3)&&(f=!0),h=pe+Fe,K=fe+Pe,Y()});const we=()=>{p&&(p=!1,q.classList.remove("is-panning"),!f&&(P||Z||C)&&(P=!1,Z=!1,C=!1,Se()))};q.addEventListener("pointerup",we),q.addEventListener("pointercancel",we),q.addEventListener("wheel",ie=>{ie.preventDefault();const Fe=ie.deltaY<0?.12:-.12;n=Math.max(.6,Math.min(2.6,Number((n+Fe).toFixed(2)))),Y()},{passive:!1}),q.addEventListener("dblclick",ie=>{ie.target?.closest("button")||(n=1,h=0,K=0,Y())})}else e.querySelector(".pacom-spatial-stage")?.addEventListener("click",p=>{p.target?.closest("button, input, select, .pacom-hud-search-wrap, .pacom-space-popover, .pacom-briefing-pop")||(P||Z||C)&&(P=!1,Z=!1,C=!1,Se())})}e.addEventListener("keydown",x=>{x.key==="Escape"&&(Z||C||P||R)&&(Z=!1,C=!1,P=!1,R=!1,Se())}),await ye(y,!0)}const la=new Set(["lighting","hvac","alarm_rules"]),yt={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},Xe=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function ia(e){const t=new Set;for(const a of e.actions)a.command.startsWith("lighting")?t.add("照明"):a.command.startsWith("hvac")?t.add("暖通"):t.add("综合");return Array.from(t)}function ca(e,t,a){const s=a?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
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
  `}async function da(e,t,a){let s=Ve(),l=!1,c="",[D,O,N,J]=await Promise.all([t.getSpatialTree(),t.listScenes(r.floorId),t.getRuntimeSettings(r.projectId),t.getFloorDevices(r.floorId).catch(()=>[])]),T="manual",ee="balanced",H="all",ce=null,y="",G=!1,P=!1,Z=!1,X="all",ne=null,te="",oe="",ae=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const re=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],$e=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],M=[{deviceId:J[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],R=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${N.calendar.workdayStart} – ${N.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${N.calendar.nightGuardStart} – 次日 ${N.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],B=t.subscribeFloorEvents(r.floorId,async C=>{C.type==="control.receipt.updated"&&ce?.batchId===C.batchId&&(ce=await t.getControlBatch(C.batchId),m())});function m(){const C=y.trim().toLowerCase(),S=C?O.filter(n=>`${n.name} ${n.description}`.toLowerCase().includes(C)):O,v=N.rules.filter(n=>la.has(n.category)),$=H==="all"?v:H==="cbm"?[]:v.filter(n=>n.category===H),d=H==="all"||H==="cbm",w=X==="issues"?re.filter(n=>n.status!=="verified"):re,le=Xe.find(n=>n.id===ee)??Xe[1],de=a.scope.canControlDevices,se=a.scope.canEditDeployment;e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${Ue({tree:D,session:a,scope:s,isOpen:l,searchKeyword:c})}
            </div>

            <div class="pacom-header-meta">
              <button type="button" class="pacom-badge ${ae.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${ae.length>0?`人工覆盖中：${ae.length} 台 ${me("chevron-down",12)}`:`全部自动托管 ${me("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${Z?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${re.length}）</button>
              ${T==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${G?"收起表单":"+ 新建场景"}</button>`:T==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${T==="manual"}" data-scene-tab="manual">快捷场景（${O.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${T==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${T==="rules"}" data-scene-tab="rules">条件联动（${v.length+$e.length}）</button>
          </nav>
        </header>

        ${P?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${ae.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${me("x",16)}</button>
              </div>
              ${ae.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':ae.map(n=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${n.name}</div>
                            <div class="pacom-row-sub">${n.reason}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${n.id}" ${de?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${ae.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${de?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${Z?`
            <aside class="pacom-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${me("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${X==="all"}" data-log-filter="all">全部（${re.length}）</button>
                  <button class="pacom-tab" aria-selected="${X==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${w.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${w.map(n=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${n.device}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${n.source}</span>
                        </div>
                        <span class="pacom-row-sub">${n.action} · ${n.at}</span>
                      </div>
                      <span class="pacom-badge ${n.status==="verified"?"pacom-badge--online":n.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${n.status==="verified"?"回读确认":n.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${te?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${te}</span></div>`:""}
          ${oe?`<div class="pacom-alert-banner">${oe}</div>`:""}

          ${T==="manual"?`
              ${ce?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${ce.batchId}</span>
                      </div>
                      <button class="pacom-btn pacom-btn--ghost" data-close-batch="1">关闭回执</button>
                    </div>
                    <div class="pacom-table-card">
                      <div class="pacom-table-wrap">
                        <table class="pacom-table">
                          <thead>
                            <tr>
                              <th>目标设备</th>
                              <th>下发指令</th>
                              <th>目标值</th>
                              <th>回读状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${ce.receipts.map(n=>`
                                <tr>
                                  <td><code style="font-size:12px;">${n.deviceId}</code></td>
                                  <td>${n.command}</td>
                                  <td>${String(n.targetValue)}${n.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${n.errorMessage}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${n.status==="verified_success"?"pacom-badge--online":n.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${n.status}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${G?`
                  <section class="pacom-section">
                    <h2 class="pacom-section-title">新建快捷场景（多设备动作编排）</h2>
                    <form class="pacom-settings-card" data-role="new-scene-form">
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">场景名称与说明</span>
                          <span class="pacom-setting-desc">例如「实验区午休调光」「重要来访接待模式」</span>
                        </div>
                        <div class="pacom-setting-control" style="width:min(460px,100%); gap:8px;">
                          <input class="pacom-input" name="name" placeholder="场景名称" required />
                          <input class="pacom-input" name="description" placeholder="联动效果说明" required />
                        </div>
                      </div>
                      <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:8px;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                          <span class="pacom-setting-title">联动动作列表（${M.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${M.map((n,h)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" data-draft-dev="${h}" aria-label="目标设备">
                                ${J.map(K=>`<option value="${K.id}" ${K.id===n.deviceId?"selected":""}>${K.name}</option>`).join("")}
                              </select>
                              <select class="pacom-select" data-draft-cmd="${h}" aria-label="执行指令">
                                <option value="lighting.dimming" ${n.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${n.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${n.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" data-draft-val="${h}" value="${n.targetValue}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${h}" ${M.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit">保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="pacom-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${y}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${S.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${S.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':S.map(n=>{const h=ia(n),K=n.actions.slice(0,3).map(ve=>{const De=J.find(ye=>ye.id===ve.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??ve.deviceId,Ee=ve.command==="lighting.dimming"?`亮度 ${ve.targetValue}%`:ve.command==="hvac.setpoint"?`设温 ${ve.targetValue}°C`:ve.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${De} → ${Ee}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${n.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${h.map(ve=>`<span class="pacom-badge pacom-badge--accent">${ve}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${n.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${n.description}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${K}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${n.lastExecutedAt?n.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${n.id}" ${de?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:T==="schedule_oss"?`
                <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">当前优化启停模式</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${le.title}</div>
                    <span class="pacom-kpi-delta">${le.estSaving}</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">明日预测预启动时刻</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${le.predictedStart}</div>
                    <span class="pacom-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">本周累计节省运行工时</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${le.savedHours}</div>
                    <span class="pacom-kpi-delta">当前人工覆盖挂起：${ae.length} 台</span>
                  </div>
                </div>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="pacom-mode-grid">
                    ${Xe.map(n=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${ee===n.id}" data-oss-mode="${n.id}" ${de?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${n.title}</strong>
                          <span class="pacom-badge ${ee===n.id?"pacom-badge--online":"pacom-badge--neutral"}">${ee===n.id?"当前生效":n.badge}</span>
                        </div>
                        <span class="pacom-setting-desc">${n.desc}</span>
                        <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${n.estSaving}</span>
                      </button>`).join("")}
                  </div>
                </section>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">E7F 自动排程时间表</h2>
                    <button class="pacom-btn" data-go-settings="1">调整项目工作日历 →</button>
                  </div>
                  <div class="pacom-table-card">
                    <div class="pacom-table-wrap">
                      <table class="pacom-table">
                        <thead>
                          <tr>
                            <th>排程任务</th>
                            <th>24 小时覆盖时段</th>
                            <th>联动范围</th>
                            <th style="text-align:right;">启停状态</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${R.map(n=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${n.name}</span>
                                    ${n.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${n.windowLabel}</div>
                                </td>
                                <td>${ca(n.startHour,n.endHour,n.enabled)}</td>
                                <td><span class="pacom-row-sub">${n.scope}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${n.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="pacom-switch"
                                      role="switch"
                                      aria-checked="${n.enabled}"
                                      aria-label="切换排程 ${n.name}"
                                      data-toggle-schedule="${n.id}"
                                      ${de?"":"disabled"}
                                    >
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </td>
                              </tr>`).join("")}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>`:`
                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">事件、传感联动与工时维保规则（IF → THEN / CBM）</h2>
                    <div class="pacom-count-pills" role="group" aria-label="按系统筛选规则">
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(n=>{const h=n==="all"?"全部":yt[n]??n,K=n==="all"?v.length+$e.length:n==="cbm"?$e.length:v.filter(ve=>ve.category===n).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${H===n}" data-rule-cat="${n}">
                              <span>${h}</span><span class="pacom-count-num">${K}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${$.map(n=>{const h=ne===n.id;return`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${yt[n.category]??n.category}</span>
                                  <span>${n.name}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${n.version}</span>
                                </span>
                                <span class="pacom-setting-desc">${n.summary} · 范围：${n.scopeLabel} · 回执：${n.receiptSummary??"已同步"}</span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${n.id}">${h?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${n.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="pacom-switch"
                                  role="switch"
                                  aria-checked="${n.enabled?"true":"false"}"
                                  aria-label="切换 ${n.name}"
                                  data-toggle-strategy-rule="${n.id}"
                                  data-rule-ver="${n.version}"
                                  data-rule-next="${!n.enabled}"
                                  ${se?"":"disabled"}
                                >
                                  <span class="pacom-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${h?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${n.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":n.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${n.scopeLabel} · 当前版本：v${n.version} · 最近同步：${n.receiptSummary??"已同步"}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${d?$e.map(n=>{const h=Math.min(100,Math.round(n.runtimeHours/n.thresholdHours*100));return`
                                <div class="pacom-setting-row">
                                  <div class="pacom-setting-meta" style="gap:6px;">
                                    <span class="pacom-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${n.name}</span>
                                      <span class="pacom-badge ${h>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${n.runtimeHours} / ${n.thresholdHours} h（${h}%）</span>
                                    </span>
                                    <div class="pacom-progress-track" style="max-width:340px;">
                                      <div class="pacom-progress-fill" style="width:${h}%; background:${h>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="pacom-setting-desc">绑定设备：${n.equipment} · 上次重置：${n.lastReset}</span>
                                  </div>
                                  <div class="pacom-setting-control">
                                    <span class="pacom-row-sub">${n.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="pacom-switch" role="switch" aria-checked="${n.enabled}" data-toggle-cbm="${n.id}" aria-label="切换 ${n.name}" ${se?"":"disabled"}>
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,He(e,{onToggle:()=>{l=!l,m(),l&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:n=>{c=n,m();const h=e.querySelector("[data-global-space-search]");h&&(h.focus(),h.setSelectionRange(n.length,n.length))},onPick:n=>{s=n,l=!1,m()}}),e.querySelectorAll("[data-scene-tab]").forEach(n=>{n.addEventListener("click",()=>{T=n.dataset.sceneTab??"manual",te="",m()})}),e.querySelectorAll("[data-toggle-overrides]").forEach(n=>{n.addEventListener("click",()=>{P=!P,m()})}),e.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{ae=[],te="已释放全部人工覆盖设备，自动节能策略已恢复托管。",m()}),e.querySelectorAll("[data-release-one]").forEach(n=>{n.addEventListener("click",()=>{const h=n.dataset.releaseOne;ae=ae.filter(K=>K.id!==h),te="已恢复该设备的自动策略托管。",m()})}),e.querySelectorAll("[data-toggle-cmdlog]").forEach(n=>{n.addEventListener("click",()=>{Z=!Z,m()})}),e.querySelectorAll("[data-log-filter]").forEach(n=>{n.addEventListener("click",()=>{X=n.dataset.logFilter??"all",m()})}),e.querySelector("[data-close-batch]")?.addEventListener("click",()=>{ce=null,m()}),e.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),e.querySelectorAll("[data-oss-mode]").forEach(n=>{n.addEventListener("click",()=>{const h=n.dataset.ossMode;if(!h)return;ee=h;const K=Xe.find(ve=>ve.id===h);te=`已切换至「${K?.title??h}」模式（明日预测启动 ${K?.predictedStart??""}）。`,m()})}),e.querySelectorAll("[data-toggle-schedule]").forEach(n=>{n.addEventListener("click",()=>{const h=n.dataset.toggleSchedule,K=R.find(ve=>ve.id===h);K&&(K.enabled=!K.enabled,te=`排程「${K.name}」已${K.enabled?"恢复启用":"临时暂停"}。`,m())})}),e.querySelectorAll("[data-rule-cat]").forEach(n=>{n.addEventListener("click",()=>{H=n.dataset.ruleCat??"all",m()})}),e.querySelectorAll("[data-expand-rule]").forEach(n=>{n.addEventListener("click",()=>{const h=n.dataset.expandRule??null;ne=ne===h?null:h,m()})}),e.querySelectorAll("[data-toggle-cbm]").forEach(n=>{n.addEventListener("click",()=>{const h=$e.find(K=>K.id===n.dataset.toggleCbm);h&&(h.enabled=!h.enabled,te=`工时维保规则「${h.name}」已${h.enabled?"启用":"停用"}。`,m())})}),e.querySelectorAll("[data-toggle-strategy-rule]").forEach(n=>{n.addEventListener("click",async()=>{oe="";try{await t.toggleRuntimeRule(n.dataset.toggleStrategyRule,n.dataset.ruleNext==="true",Number(n.dataset.ruleVer)),N=await t.getRuntimeSettings(r.projectId),te="条件联动规则状态与版本回执已更新。",m()}catch(h){oe=h instanceof Error?h.message:String(h),m()}})}),e.querySelectorAll("[data-toggle-create]").forEach(n=>{n.addEventListener("click",()=>{G=!G,m()})}),e.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{M.push({deviceId:J[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),m()}),e.querySelectorAll("[data-del-draft-action]").forEach(n=>{n.addEventListener("click",()=>{const h=Number(n.dataset.delDraftAction);M.length>1&&(M.splice(h,1),m())})}),e.querySelectorAll("[data-draft-dev]").forEach(n=>{n.addEventListener("change",()=>{const h=M[Number(n.dataset.draftDev)];h&&(h.deviceId=n.value)})}),e.querySelectorAll("[data-draft-cmd]").forEach(n=>{n.addEventListener("change",()=>{const h=M[Number(n.dataset.draftCmd)];h&&(h.command=n.value)})}),e.querySelectorAll("[data-draft-val]").forEach(n=>{n.addEventListener("change",()=>{const h=M[Number(n.dataset.draftVal)];h&&(h.targetValue=n.value)})}),e.querySelector("[data-scene-search]")?.addEventListener("input",n=>{const h=n.currentTarget,K=h.selectionStart??h.value.length;y=h.value,m();const ve=e.querySelector("[data-scene-search]");ve&&(ve.focus(),ve.setSelectionRange(K,K))}),e.querySelectorAll("[data-exec-scene]").forEach(n=>{n.addEventListener("click",async()=>{oe="";const h=O.find(K=>K.id===n.dataset.execScene);try{ce=await t.executeScene(n.dataset.execScene),O=await t.listScenes(r.floorId),re.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:h?.name??"E7F 场景",action:`${ce.receipts.length} 台设备联动下发`,status:"verified"}),m()}catch(K){oe=K instanceof Error?K.message:String(K),m()}})}),e.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async n=>{n.preventDefault();const h=new FormData(n.currentTarget);try{await t.createScene({projectId:r.projectId,floorId:r.floorId,name:String(h.get("name")??""),description:String(h.get("description")??""),actions:M.map(K=>({deviceId:K.deviceId,command:K.command,targetValue:K.targetValue==="true"?!0:K.targetValue==="false"?!1:Number(K.targetValue)||50}))}),O=await t.listScenes(r.floorId),G=!1,te=`快捷场景已保存（共绑定 ${M.length} 条联动动作）。`,m()}catch(K){oe=K instanceof Error?K.message:String(K),m()}})}m(),window.addEventListener("hashchange",()=>B(),{once:!0})}const $t={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function it(e,t){return e.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':e.map(a=>`
      <div class="pacom-setting-row">
        <div class="pacom-setting-meta">
          <span class="pacom-setting-title">
            <span>${a.name}</span>
            <span class="pacom-badge pacom-badge--neutral">v${a.version}</span>
            <span class="pacom-badge pacom-badge--accent">${a.scopeLabel}</span>
          </span>
          <span class="pacom-setting-desc">${a.summary} · 回执：${a.receiptSummary??"已同步"}</span>
        </div>
        <div class="pacom-setting-control">
          <span class="pacom-row-sub">${a.enabled?"已启用":"已停用"}</span>
          <button
            type="button"
            class="pacom-switch"
            role="switch"
            aria-checked="${a.enabled?"true":"false"}"
            aria-label="切换 ${a.name}"
            data-toggle-rule="${a.id}"
            data-rule-ver="${a.version}"
            data-rule-next="${!a.enabled}"
            ${t?"":"disabled"}
          >
            <span class="pacom-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function ra(e,t,a){let s="calendar",l=Ve(),c=!1,D="";const[O,N]=await Promise.all([t.getSpatialTree(),t.getRuntimeSettings(r.projectId)]);let J=N,T=J.calendar.workdayStart,ee=J.calendar.workdayEnd,H=J.calendar.nightGuardStart,ce=J.calendar.nightGuardEnd,y=!0,G=[];const P=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let Z="flat";const X={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},ne={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},te={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},oe={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},ae=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let re="",$e="";function M(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(m=>{const C=$t[m];return`
                <button type="button" class="pacom-unified-item" aria-current="${s===m}" data-stab="${m}">
                  ${me(C.icon,16)}
                  <span>${C.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function R(){const B=a.scope.canEditDeployment,m=O.projects[0]?.name??"当前项目",C=J.rules.filter(d=>d.category==="weather_area"),S=J.rules.filter(d=>d.category==="metering_carbon"),v=J.rules.filter(d=>d.category==="templates"),$=$t[s];e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${Ue({tree:O,session:a,scope:l,maxGranularity:"project",isOpen:c,searchKeyword:D})}
            </div>
            <div class="pacom-header-meta">
              ${B?"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${M()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head">
                <h2 class="pacom-unified-title">${$.label}</h2>
                <p class="pacom-unified-subtitle">${$.subtitle}</p>
              </div>
              ${re?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${re}</span></div>`:""}
              ${$e?`<div class="pacom-alert-banner">${$e}</div>`:""}

              ${s==="calendar"?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">工作时间与夜间值守基准</h2>
                      <span class="pacom-badge pacom-badge--neutral">版本 v${J.calendar.version}</span>
                    </div>
                    <div class="pacom-settings-card">
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">工作日上班 / 下班时间</span>
                          <span class="pacom-setting-desc">驱动「智能策略 → 排程与节能」早间预冷及公区照明启停；晚于 21:30 将自动提示交叠冲突</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" style="width:116px;" type="time" data-cal-start value="${T}" aria-label="工作日上班时间" ${B?"":"disabled"} />
                          <span class="pacom-row-sub">至</span>
                          <input class="pacom-input" style="width:116px;" type="time" data-cal-end value="${ee}" aria-label="工作日下班时间" ${B?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" style="width:116px;" type="time" data-night-start value="${H}" aria-label="夜间值守开始" ${B?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" style="width:116px;" type="time" data-night-end value="${ce}" aria-label="夜间值守结束" ${B?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">自动跳过中国法定节假日</span>
                          <span class="pacom-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                        </div>
                        <div class="pacom-setting-control">
                          <span class="pacom-row-sub">${y?"已开启":"已关闭"}</span>
                          <button type="button" class="pacom-switch" role="switch" aria-checked="${y}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${B?"":"disabled"}>
                            <span class="pacom-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                        <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${B?"":"disabled"}>保存并校验版本</button>
                      </div>
                    </div>
                  </section>

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">特殊例外日期（加班 / 接待覆盖默认日历）</h2>
                      <span class="pacom-row-sub">共 ${P.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${P.map(d=>`
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title"><span>${d.date}</span><span class="pacom-badge pacom-badge--accent">${d.mode}</span></span>
                              <span class="pacom-setting-desc">${d.label}</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${d.id}" ${B?"":"disabled"}>移除</button>
                          </div>`).join("")}
                      <form data-add-sd-form class="pacom-setting-row" style="display:grid; grid-template-columns:145px 1fr 148px auto; gap:8px; align-items:center;">
                        <input class="pacom-input" name="date" type="date" required ${B?"":"disabled"} />
                        <input class="pacom-input" name="label" placeholder="说明（如：重要接待日 / 实验加班）" required ${B?"":"disabled"} />
                        <select class="pacom-select" name="mode" ${B?"":"disabled"}>
                          <option value="保持工作日工况">保持工作日工况</option>
                          <option value="全天节能值守">全天节能值守</option>
                        </select>
                        <button class="pacom-btn" type="submit" ${B?"":"disabled"}>+ 添加例外</button>
                      </form>
                    </div>
                  </section>

                  ${G.length>0?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">受影响的定时与夜间规则预览</h2>
                          <span class="pacom-row-sub">共 ${G.length} 条</span>
                        </div>
                        <div class="pacom-table-card">
                          <div class="pacom-table-wrap">
                            <table class="pacom-table">
                              <thead>
                                <tr>
                                  <th>规则名称</th>
                                  <th>原时间窗口</th>
                                  <th>变更后窗口</th>
                                  <th>影响评估</th>
                                </tr>
                              </thead>
                              <tbody>
                                ${G.map(d=>`
                                    <tr>
                                      <td>
                                        <div style="font-weight:450;">${d.ruleName}</div>
                                        ${d.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${d.conflictWarning}</div>`:""}
                                      </td>
                                      <td>${d.beforeWindow}</td>
                                      <td><strong>${d.afterWindow}</strong></td>
                                      <td>
                                        <span class="pacom-badge ${d.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                          ${d.conflictWarning?"交叠警告":"自动跟随"}
                                        </span>
                                      </td>
                                    </tr>`).join("")}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </section>`:""}`:s==="energy_weather"?`
                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">气象与面积口径</h2>
                        <span class="pacom-row-sub">用于能效归一化与负荷预测基准</span>
                      </div>
                      <div class="pacom-settings-card">
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">室外气象数据源</span>
                            <span class="pacom-setting-desc">自动接入室外温湿度与辐射数据，支撑暖通预冷与能耗基线修正</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" data-energy-field="weatherSource" aria-label="室外气象数据源" ${B?"":"disabled"}>
                              <option value="guanzhou_station" ${X.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                              <option value="campus_sensor" ${X.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                            </select>
                          </div>
                        </div>
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">${m}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${X.billingArea}" aria-label="计费面积" ${B?"":"disabled"} />
                          </div>
                        </div>
                        ${it(C,B)}
                      </div>
                    </section>

                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">电价与碳排口径</h2>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${Z==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                          <button class="pacom-tab" aria-selected="${Z==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                        </div>
                      </div>
                      <div class="pacom-settings-card">
                        ${Z==="flat"?`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">综合电价参考（元 / kWh）</span>
                                <span class="pacom-setting-desc">用于数据分析中的月度节能金额估算</span>
                              </div>
                              <div class="pacom-setting-control">
                                <input class="pacom-input" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${X.tariffYuan}" aria-label="综合电价" ${B?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${X.tariffPeak}" ${B?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${X.tariffFlat}" ${B?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${X.tariffValley}" ${B?"":"disabled"} />
                              </div>
                            </div>`}
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">区域电网碳排放因子</span>
                            <span class="pacom-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${B?"":"disabled"}>
                              <option value="0.5271" ${X.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                              <option value="0.5703" ${X.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                            </select>
                          </div>
                        </div>
                        ${it(S,B)}
                        <div class="pacom-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${B?"":"disabled"}>保存口径参数</button>
                        </div>
                      </div>
                    </section>`:s==="guardrails"?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">设备控制保护参数</h2>
                          <span class="pacom-badge pacom-badge--accent">防止误操作与设备空转</span>
                        </div>
                        <div class="pacom-settings-card">
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">空调允许设定温区（°C）</span>
                              <span class="pacom-setting-desc">前端控制抽屉与批量指令均不得超出此安全上下限</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" style="width:72px;" type="number" data-guard-field="minTemp" value="${ne.minTemp}" aria-label="最低设定温度" ${B?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" style="width:72px;" type="number" data-guard-field="maxTemp" value="${ne.maxTemp}" aria-label="最高设定温度" ${B?"":"disabled"} />
                              <span class="pacom-row-sub">°C</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">人工覆盖自动释放时长</span>
                              <span class="pacom-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                            </div>
                            <div class="pacom-setting-control">
                              <select class="pacom-select" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${B?"":"disabled"}>
                                <option value="2h" ${ne.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                                <option value="4h" ${ne.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                                <option value="eod" ${ne.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                                <option value="permanent" ${ne.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                              </select>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">控制指令回读超时阈值（秒）</span>
                              <span class="pacom-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${ne.readbackTimeoutSec}" aria-label="回读超时阈值" ${B?"":"disabled"} />
                              <span class="pacom-row-sub">秒</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row" style="justify-content:flex-end;">
                            <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${B?"":"disabled"}>保存控制参数</button>
                          </div>
                        </div>
                      </section>

                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">标准设备参数模板</h2>
                          <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                        </div>
                        <div class="pacom-settings-card">
                          ${it(v,B)}
                        </div>
                      </section>`:`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">定时简报与夜间静默</h2>
                        </div>
                        <div class="pacom-settings-card">
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">每日运行与能耗晨间简报</span>
                              <span class="pacom-setting-desc">定时汇总昨日能耗偏差、未结工单、舒适度达标与室外天气（首页亦可随时手动查看）</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" style="width:116px;" type="time" data-digest-time value="${oe.dailyDigestTime}" aria-label="每日简报发送时间" />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${oe.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报">
                                <span class="pacom-switch-thumb"></span>
                              </button>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">夜间静默免打扰（23:00 – 07:00）</span>
                              <span class="pacom-setting-desc">夜间静默一般与重要提醒，严重级别告警与网关中断仍自动穿透</span>
                            </div>
                            <div class="pacom-setting-control">
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${oe.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰">
                                <span class="pacom-switch-thumb"></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">告警超时自动派单</h2>
                          <span class="pacom-row-sub">引用「机构与账户」工作组定义</span>
                        </div>
                        <div class="pacom-settings-card">
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">严重告警持续超阈值自动派单</span>
                              <span class="pacom-setting-desc">告警持续未恢复达到设定分钟数时，自动创建运维工单并分派至对应处理组</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" style="width:72px;" type="number" data-auto-wo="delayMin" value="${te.delayMin}" ${B?"":"disabled"} />
                              <span class="pacom-row-sub">分钟</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${te.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${B?"":"disabled"}>
                                <span class="pacom-switch-thumb"></span>
                              </button>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">默认派单处理组与防重保护</span>
                              <span class="pacom-setting-desc">同一告警若已关联未结工单，自动跳过建单以避免重复派单</span>
                            </div>
                            <div class="pacom-setting-control">
                              <select class="pacom-select" data-auto-wo="defaultGroup" aria-label="默认处理组" ${B?"":"disabled"}>
                                <option value="暖通运维组" ${te.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                                <option value="强电照明组" ${te.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                                <option value="园区物业值班组" ${te.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                              </select>
                              <span class="pacom-row-sub">防重</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${te.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${B?"":"disabled"}>
                                <span class="pacom-switch-thumb"></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">按工作组分流推送规则</h2>
                          <span class="pacom-row-sub">按专业工作组、负责空间与告警级别精准触达</span>
                        </div>
                        <div class="pacom-table-card">
                          <div class="pacom-table-wrap">
                            <table class="pacom-table">
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
                                ${ae.map(d=>`
                                    <tr>
                                      <td><strong>${d.groupName}</strong></td>
                                      <td>${d.scope}</td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${d.severity}</span></td>
                                      <td><span class="pacom-badge pacom-badge--accent">${d.channels}</span></td>
                                      <td style="text-align:right;">
                                        <button type="button" class="pacom-switch" role="switch" aria-checked="${d.enabled}" data-toggle-nr="${d.id}" aria-label="切换 ${d.groupName} 通知规则">
                                          <span class="pacom-switch-thumb"></span>
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
      </div>
    `,He(e,{onToggle:()=>{c=!c,R(),c&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:d=>{D=d,R();const w=e.querySelector("[data-global-space-search]");w&&(w.focus(),w.setSelectionRange(d.length,d.length))},onPick:d=>{l=d,c=!1,R()}}),e.querySelectorAll("[data-stab]").forEach(d=>{d.addEventListener("click",()=>{s=d.dataset.stab??"calendar",re="",$e="",R()})}),e.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{y=!y,re=`法定节假日自动跳过已${y?"开启":"关闭"}。`,R()}),e.querySelector("[data-night-start]")?.addEventListener("change",d=>{H=d.currentTarget.value}),e.querySelector("[data-night-end]")?.addEventListener("change",d=>{ce=d.currentTarget.value}),e.querySelector("[data-add-sd-form]")?.addEventListener("submit",d=>{d.preventDefault();const w=new FormData(d.currentTarget);P.push({id:`sd-${Date.now()}`,date:String(w.get("date")??""),label:String(w.get("label")??""),mode:String(w.get("mode")??"保持工作日工况")}),re="已添加特殊例外日期，当日自动覆盖默认节假日排程。",R()}),e.querySelectorAll("[data-del-sd]").forEach(d=>{d.addEventListener("click",()=>{const w=P.findIndex(le=>le.id===d.dataset.delSd);w>=0&&P.splice(w,1),R()})}),e.querySelectorAll("[data-tariff-mode]").forEach(d=>{d.addEventListener("click",()=>{Z=d.dataset.tariffMode??"flat",R()})}),e.querySelectorAll("[data-energy-field]").forEach(d=>{d.addEventListener("change",()=>{const w=d.dataset.energyField;w&&(X[w]=d.value)})}),e.querySelector("[data-save-energy]")?.addEventListener("click",()=>{re=Z==="flat"?`能耗计费与气象口径已保存（面积 ${X.billingArea} m² · 综合电价 ¥${X.tariffYuan}/kWh · 因子 ${X.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${X.tariffPeak} / 平 ¥${X.tariffFlat} / 谷 ¥${X.tariffValley}）。`,R()}),e.querySelectorAll("[data-guard-field]").forEach(d=>{d.addEventListener("change",()=>{const w=d.dataset.guardField;w&&(ne[w]=d.value)})}),e.querySelector("[data-save-guard]")?.addEventListener("click",()=>{re=`控制保护参数已保存（温区 ${ne.minTemp}–${ne.maxTemp}°C · 超时 ${ne.readbackTimeoutSec}s）。`,R()}),e.querySelectorAll("[data-auto-wo]").forEach(d=>{d.addEventListener("change",()=>{const w=d.dataset.autoWo;w&&(te[w]=d.value),re="超时自动派单配置已更新。",R()})}),e.querySelectorAll("[data-toggle-autowo]").forEach(d=>{d.addEventListener("click",()=>{const w=d.dataset.toggleAutowo;w&&(te[w]=!te[w],re="自动派单保护策略已更新。",R())})}),e.querySelector("[data-digest-time]")?.addEventListener("change",d=>{oe.dailyDigestTime=d.currentTarget.value,re=`每日晨间简报发送时刻已更新为 ${oe.dailyDigestTime}。`,R()}),e.querySelectorAll("[data-notify-key]").forEach(d=>{d.addEventListener("click",()=>{const w=d.dataset.notifyKey;w&&(oe[w]=!oe[w],re="消息通知偏好已更新。",R())})}),e.querySelectorAll("[data-toggle-nr]").forEach(d=>{d.addEventListener("click",()=>{const w=ae.find(le=>le.id===d.dataset.toggleNr);w&&(w.enabled=!w.enabled,re=`工作组「${w.groupName}」的分流推送规则已${w.enabled?"启用":"停用"}。`,R())})}),e.querySelector("[data-cal-start]")?.addEventListener("change",d=>{T=d.currentTarget.value}),e.querySelector("[data-cal-end]")?.addEventListener("change",d=>{ee=d.currentTarget.value}),e.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{$e="",G=await t.previewCalendarImpact(r.projectId,T,ee),R()}),e.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{$e="";try{const d=await t.saveWorkCalendar(r.projectId,T,ee,J.calendar.version);J={...J,calendar:{...d,nightGuardStart:H,nightGuardEnd:ce}},re=`工作时间配置已保存至 v${d.version}（工作日 ${d.workdayStart}–${d.workdayEnd} · 夜间值守 ${H}–${ce}）`,G=[],R()}catch(d){$e=d instanceof Error?d.message:String(d),R()}}),e.querySelectorAll("[data-toggle-rule]").forEach(d=>{d.addEventListener("click",async()=>{$e="";try{await t.toggleRuntimeRule(d.dataset.toggleRule,d.dataset.ruleNext==="true",Number(d.dataset.ruleVer)),J=await t.getRuntimeSettings(r.projectId),re="策略状态与版本回执已更新。",R()}catch(w){$e=w instanceof Error?w.message:String(w),R()}})})}R()}const wt="pacom.web.sidebar.collapsed",pa=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,ct=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],rt={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},xt=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function dt(){const e=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return e in rt?e:"home"}function Ce(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function ua(e,t,a,s){e.classList.remove("bare-login");let l=a,c=dt(),D=localStorage.getItem(wt)==="1",O=!1,N=!1,J="",T=!1,ee=0,H={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};const ce=t.mode==="demo"&&typeof t.switchDemoRole=="function";async function y(){try{const[v,$,d,w,le]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(r.floorId).catch(()=>[]),t.listAlarms(r.floorId).catch(()=>[]),t.listWorkOrders(r.floorId).catch(()=>[]),t.listScenes(r.floorId).catch(()=>[])]);H={devices:$,zones:v.zones,alarms:d,workOrders:w,scenes:le},ee=d.filter(de=>de.status==="active").length,ae()}catch{}}function G(){return ct.map(v=>`
        ${v.id==="settings"?'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${v.id}" aria-current="${c===v.id?"page":"false"}" title="${v.label}">
          ${me(v.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${v.label}</span>
          ${v.id==="alarms"&&ee>0?`<span class="pacom-nav-count" title="待处理告警 ${ee} 条">${ee}</span>`:""}
        </button>`).join("")}function P(){const v=J.trim().toLowerCase(),$=v?ct.filter(h=>h.label.toLowerCase().includes(v)).slice(0,4):ct,d=v?H.devices.filter(h=>`${h.name} ${h.id} ${h.category}`.toLowerCase().includes(v)).slice(0,5):H.devices.slice(0,3),w=v?H.zones.filter(h=>h.name.toLowerCase().includes(v)).slice(0,3):[],le=v?H.alarms.filter(h=>`${h.title} ${h.message} ${h.id}`.toLowerCase().includes(v)).slice(0,4):H.alarms.filter(h=>h.status==="active").slice(0,2),de=v?H.workOrders.filter(h=>`${h.title} ${h.id}`.toLowerCase().includes(v)).slice(0,3):[],se=v?H.scenes.filter(h=>`${h.name} ${h.description}`.toLowerCase().includes(v)).slice(0,3):[],Q=v?xt.filter(h=>`${h.title} ${h.category}`.toLowerCase().includes(v)).slice(0,4):xt.slice(0,2),n=[];return d.length&&n.push(`<div class="pacom-search-group">${v?"设备（空间总览）":"常用设备直达"}</div>`+d.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(h.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Ce(h.name)}</span><span class="pacom-badge ${h.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${h.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),w.length&&n.push('<div class="pacom-search-group">功能区</div>'+w.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(h.id)}"><span>${Ce(h.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),le.length&&n.push(`<div class="pacom-search-group">${v?"告警":"待处理告警"}</div>`+le.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(h.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Ce(h.title)}</span><span class="pacom-badge pacom-badge--warning">${h.status==="active"?"待处理":"已确认"}</span></button>`).join("")),de.length&&n.push('<div class="pacom-search-group">运维工单</div>'+de.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(h.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Ce(h.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),se.length&&n.push('<div class="pacom-search-group">智能策略</div>'+se.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${Ce(h.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),Q.length&&n.push('<div class="pacom-search-group">图纸与工程文档</div>'+Q.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="${h.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Ce(h.title)}</span><span class="pacom-badge pacom-badge--neutral">${Ce(h.category)}</span></button>`).join("")),$.length&&n.push('<div class="pacom-search-group">工作区</div>'+$.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#${h.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${me(h.icon,14)}${Ce(h.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),n.length?n.join(""):`<div class="pacom-nav-empty">未找到与「${Ce(J)}」匹配的设备、区域、告警、工单或图纸</div>`}function Z(v){v.querySelectorAll("[data-search-hash]").forEach($=>{$.addEventListener("click",()=>{const d=$.dataset.searchHash||"#home";T=!1,J="",X(),O=!1,window.location.hash===d?(c=dt(),R(!0)):window.location.hash=d})})}function X(){if(e.querySelector('[data-role="cmd-scrim"]')?.remove(),!T)return;const v=document.createElement("div");v.className="pacom-cmd-scrim",v.dataset.role="cmd-scrim",v.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${me("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${Ce(J)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${P()}
        </div>
      </div>
    `,e.appendChild(v),v.addEventListener("click",w=>{w.target===v&&(T=!1,X())});const $=v.querySelector('[data-role="cmd-input"]'),d=v.querySelector('[data-role="cmd-body"]');d&&Z(d),$?.focus(),$?.addEventListener("input",w=>{J=w.currentTarget.value,d&&(d.innerHTML=P(),Z(d))})}function ne(){if(!N)return"";const v=l.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${D?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${Ce(l.roleLabel)}${ce?" · 演示":""}</small>
          </span>
          ${me("check",16,"pacom-pop-check")}
        </button>

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${me("settings",16)}</span>
          <span class="pacom-pop-text">机构设置</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${Ce(v)}</span>
          <span class="pacom-pop-text">
            <b>${Ce(l.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${ce?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">演示角色切换（RBAC 权限预览）</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(qe).map($=>{const d=qe[$],w=$===l.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${w}" data-pop-role="${$}">
                      <span class="pacom-pop-text">
                        <b>${Ce(d.roleLabel)}</b>
                        <small>${Ce(d.displayName)}</small>
                      </span>
                      ${w?me("check",16,"pacom-pop-check"):""}
                    </button>`}).join("")}
            </div>`:""}

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${me("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function te(v){switch(document.title=`${rt[c]} · PACOM Station`,c){case"home":await na(v,t,l);return;case"analysis":await Kt(v,t,l);return;case"alarms":await Ot(v,t,l);return;case"scenes":await da(v,t,l);return;case"settings":await ra(v,t,l);return;case"deployment":await ta(v,t,l);return;case"account":await Ct(v,t,l,$=>{l=$,R(!0)},oe);return}}async function oe(){N=!1,O=!1,T=!1,S();try{await t.logout()}finally{window.location.hash="#login",s()}}function ae(){const v=e.querySelector('[data-role="nav-list"]');v&&(v.innerHTML=G(),$e())}function re(){e.querySelector('[data-role="org-popover"]')?.remove();const v=e.querySelector('[data-role="org-menu-btn"]');if(v&&v.setAttribute("aria-expanded",String(N)),!N)return;const $=document.createElement("div");$.innerHTML=ne().trim();const d=$.firstElementChild;d&&(e.appendChild(d),M())}function $e(){e.querySelectorAll("[data-route]").forEach(v=>{v.addEventListener("click",()=>{const $=v.dataset.route;$===c&&!O||(c=$,O=!1,N=!1,window.location.hash=`#${c}`,R(!0))})})}function M(){e.querySelectorAll('[data-pop-act="go-account"]').forEach(v=>{v.addEventListener("click",()=>{N=!1,O=!1,c="account",window.location.hash="#account",R(!0)})}),e.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{oe()}),e.querySelectorAll("[data-pop-role]").forEach(v=>{v.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const $=v.dataset.popRole;N=!1,O=!1,l=await t.switchDemoRole($),await R(!0)})})}async function R(v){const $=e.querySelector('[data-role="main-stage"]');if(!v&&$){const w=e.querySelector(".pacom-nav-rail");w&&(w.classList.toggle("is-collapsed",D),w.classList.toggle("is-mobile-open",O));const le=e.querySelector('[data-role="mobile-scrim"]');le&&le.classList.toggle("is-open",O),re();return}e.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${me("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${rt[c]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${Ce(l.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${O?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${D?"is-collapsed":""} ${O?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${pa}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${D?"展开侧栏":"收起侧栏"}" aria-label="${D?"展开侧栏":"收起侧栏"}">
              ${me("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${me("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${G()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${c==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${N}" title="广州国家实验室 · ${Ce(l.displayName)}">
              <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>
              <span class="pacom-org-name">广州国家实验室</span>
              ${me("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,e.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{D=!D,N=!1,localStorage.setItem(wt,D?"1":"0");const w=e.querySelector(".pacom-nav-rail"),le=e.querySelector('[data-role="toggle-sidebar"]');w&&w.classList.toggle("is-collapsed",D),le&&(le.title=D?"展开侧栏":"收起侧栏",le.setAttribute("aria-label",le.title),le.innerHTML=me("panel-left",16)),re()}),e.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{N=!1,re(),T=!0,X()}),e.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{O=!O,R(!1)}),e.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{O=!1,N=!1,R(!1)}),e.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",w=>{w.stopPropagation(),N=!N,re()}),$e(),re(),X();const d=e.querySelector('[data-role="main-stage"]');d&&await te(d)}const B=v=>{const $=v.target;N&&!$?.closest('[data-role="org-popover"]')&&!$?.closest('[data-role="org-menu-btn"]')&&(N=!1,re())},m=v=>{if((v.metaKey||v.ctrlKey)&&v.key.toLowerCase()==="k"){v.preventDefault(),N=!1,re(),T=!T,X();return}v.key==="Escape"&&(T?(T=!1,X()):N?(N=!1,re()):O&&(O=!1,R(!1)))},C=()=>{c=dt(),N=!1,O=!1,T=!1,R(!0),y()};function S(){document.removeEventListener("click",B),document.removeEventListener("keydown",m),window.removeEventListener("hashchange",C)}document.addEventListener("click",B),document.addEventListener("keydown",m),window.addEventListener("hashchange",C),await R(!0),y()}const ma=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,ga='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',va='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',We=me("x",16),St={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},ba={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function ha(e){const t=e.replace(/\D/g,"");return t.length===11?`${t.slice(0,3)} •••• ${t.slice(7)}`:e}function Me(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function kt(e,t,a){e.classList.add("bare-login"),document.title="登录 · PACOM Station";let s=!1,l=!1,c="",D="",O="",N="",J=!1,T={},ee="",H=!1,ce="",y=0,G=null,P=null,Z="privacy",X="",ne="",te="";const oe=t.mode==="demo"&&typeof t.switchDemoRole=="function";function ae(){G!==null&&(window.clearInterval(G),G=null),e.classList.remove("bare-login")}function re(){y=60,G!==null&&window.clearInterval(G),G=window.setInterval(()=>{y-=1,y<=0&&(y=0,G!==null&&(window.clearInterval(G),G=null));const B=e.querySelector('[data-act="send-sms"]');B&&(B.disabled=y>0,B.textContent=y>0?`${y} 秒后重发`:ce?"重新获取":"获取验证码")},1e3)}function $e(){if(!P)return"";if(P==="reset")return`
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
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${Me(ne)}" />
                  </div>
                </div>
                ${te?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${Me(te)}</p>`:""}
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary">发送验证码</button>
            </div>
          </section>
        </div>
      `;if(P==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${We}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                ${oe?"当前为离线演示环境，您可直接通过登录页的「演示角色快速体验」切换 5 类内置角色进入 E7F 工作区。":"正式接入账户服务后，将在此开放自助注册与机构邀请码加入流程。"}
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
              ${oe?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">选择演示角色</button>':""}
            </div>
          </section>
        </div>
      `;if(P==="legal"){const B=St[Z],m=["privacy","terms","service"].map(C=>`<button type="button" role="tab" aria-selected="${Z===C}" class="au-legal-tab ${Z===C?"is-active":""}" data-act="switch-legal" data-tab="${C}">${St[C].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${We}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${m}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${B.items.map(C=>`<li>${Me(C)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return P==="contact"?`
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
                  ${X||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:P==="demoRoles"&&oe?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择演示角色</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${We}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(qe).map(B=>{const m=qe[B];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${B}">
                        <div>
                          <b>${Me(m.roleLabel)} · ${Me(m.displayName)}</b>
                          <small>${Me(ba[B])}</small>
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
      `:""}function M(){const B=s?`
        <div class="au-field ${T.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Me(O)}" aria-invalid="${T.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${y>0?"disabled":""}>
              ${y>0?`${y} 秒后重发`:ce?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${Me(T.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${ce?`验证码已发送至 ${Me(ha(ce))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${T.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Me(c)}" aria-invalid="${T.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${Me(T.id??"")}</p>
        </div>
      `,m=s?`
        <div class="au-field ${T.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Me(N)}" aria-invalid="${T.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${Me(T.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${T.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${l?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Me(D)}" aria-invalid="${T.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${l?"隐藏密码":"显示密码"}">
              ${l?va:ga}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${Me(T.pwd??"")}</p>
        </div>
      `;e.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${ma}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${H?"disabled":""}>
                  ${B}
                  ${m}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${ee?"":"hidden"}>${Me(ee)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${J?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${H?"disabled":""}>
                    ${H?"正在登录…":"登录"}
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
                ${oe?`<div class="au-demo-bar">
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
    `,R()}function R(){const B=e.querySelector("#au-id"),m=e.querySelector("#au-pwd"),C=e.querySelector("#au-sphone"),S=e.querySelector("#au-scode"),v=e.querySelector('input[name="keep"]');B?.addEventListener("input",()=>{if(c=B.value,T.id||ee){delete T.id,ee="",B.closest(".au-field")?.classList.remove("bad");const $=e.querySelector("#au-id-err");$&&($.textContent="");const d=e.querySelector("#au-login-ferr");d&&(d.hidden=!0)}}),m?.addEventListener("input",()=>{if(D=m.value,T.pwd||ee){delete T.pwd,ee="",m.closest(".au-field")?.classList.remove("bad");const $=e.querySelector("#au-pwd-err");$&&($.textContent="");const d=e.querySelector("#au-login-ferr");d&&(d.hidden=!0)}}),C?.addEventListener("input",()=>{if(O=C.value,T.sphone||ee){delete T.sphone,ee="",C.closest(".au-field")?.classList.remove("bad");const $=e.querySelector("#au-sphone-err");$&&($.textContent="");const d=e.querySelector("#au-login-ferr");d&&(d.hidden=!0)}}),S?.addEventListener("input",()=>{if(N=S.value.replace(/\D/g,"").slice(0,6),S.value=N,T.scode||ee){delete T.scode,ee="",S.closest(".au-field")?.classList.remove("bad");const $=e.querySelector("#au-scode-err");$&&($.textContent="");const d=e.querySelector("#au-login-ferr");d&&(d.hidden=!0)}}),v?.addEventListener("change",()=>{J=v.checked}),e.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{l=!l,M(),e.querySelector("#au-pwd")?.focus()}),e.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{s=!s,T={},ee="",M(),e.querySelector(s?"#au-sphone":"#au-id")?.focus()}),e.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const $=O.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test($)){T={sphone:"请输入有效的手机号码"},M(),e.querySelector("#au-sphone")?.focus();return}T={},ce=$,re(),M(),e.querySelector("#au-scode")?.focus()}),e.querySelector('form[data-form="login"]')?.addEventListener("submit",async $=>{if($.preventDefault(),!H){if(T={},ee="",s?(O.trim()||(T.sphone="请输入手机号码"),/^\d{6}$/.test(N.trim())||(T.scode="请输入 6 位验证码")):(c.trim()||(T.id="请输入电子邮箱或手机号码"),D||(T.pwd="请输入密码")),Object.keys(T).length>0){M();const d=Object.keys(T)[0];e.querySelector(`#au-${d}`)?.focus();return}H=!0,M();try{const d=await t.login({account:(s?O:c).trim(),password:s?N.trim():D});ae(),a(d)}catch(d){H=!1,ee=d instanceof Error?d.message:"账户或密码不正确",M()}}}),e.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{ne=c.trim(),te="",P="reset",M(),e.querySelector("#au-rs-id")?.focus()}),e.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{P="register",M()}),e.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{P="legal",M()}),e.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{X="",P="contact",M()}),e.querySelectorAll('[data-act="open-demo-roles"]').forEach($=>{$.addEventListener("click",()=>{P="demoRoles",M()})}),e.querySelectorAll('[data-act="close-modal"]').forEach($=>{$.addEventListener("click",()=>{P=null,M()})}),e.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",$=>{$.target===$.currentTarget&&(P=null,M())}),e.querySelectorAll('[data-act="switch-legal"]').forEach($=>{$.addEventListener("click",()=>{const d=$.dataset.tab;d&&(Z=d,M())})}),e.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),X="已复制"}catch{X="support@pacom.cn"}M()}),e.querySelector("#au-reset-form")?.addEventListener("submit",$=>{$.preventDefault(),ne=e.querySelector("#au-rs-id")?.value.trim()??"",ne?oe?te="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":te="如账户存在，验证码已发送。":te="请输入电子邮箱或手机号码",M()}),e.querySelectorAll('[data-act="pick-demo-role"]').forEach($=>{$.addEventListener("click",async()=>{const d=$.dataset.roleId;if(!d||!t.switchDemoRole)return;const w=await t.switchDemoRole(d);ae(),a(w)})})}M()}async function fa(){const e=document.getElementById("app");if(e)try{const t=Lt(),a=await t.getSession(),s=async l=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await ua(e,t,l,()=>{kt(e,t,c=>{s(c)})})};if(!a||window.location.hash==="#login"){kt(e,t,l=>{s(l)});return}await s(a)}catch(t){e.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(t)}</div></div>`}}fa();
//# sourceMappingURL=index-4l7kLDkI.js.map
