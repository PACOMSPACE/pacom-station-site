(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const z of d.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&s(z)}).observe(document,{childList:!0,subtree:!0});function a(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerPolicy&&(d.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?d.credentials="include":n.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(n){if(n.ep)return;n.ep=!0;const d=a(n);fetch(n.href,d)}})();const p={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},qe={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[p.projectId,p.project1Id],allowedBuildingIds:[p.buildingId,p.buildingFId],allowedFloorIds:[p.lockedFloor8Id,p.floorId,p.lockedFloor6Id],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[p.projectId],allowedBuildingIds:[p.buildingId,p.buildingFId],allowedFloorIds:[p.lockedFloor8Id,p.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[p.projectId],allowedBuildingIds:[p.buildingId],allowedFloorIds:[p.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[p.projectId],allowedBuildingIds:[p.buildingId],allowedFloorIds:[p.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[p.projectId],allowedBuildingIds:[p.buildingId],allowedFloorIds:[p.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},He="pacom.web.demo.role";class wt{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){const t=sessionStorage.getItem(He);t&&qe[t]&&(this.activeSession=structuredClone(qe[t]));const a=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:p.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:a,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:a,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:p.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:a,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:a,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:p.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:a,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:a,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:p.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:a,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:a,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:a,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:a,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:p.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:a,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:p.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:a,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:a,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:a,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:a,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:a,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:a},{id:"conn-e7f-dali",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:a},{id:"conn-e7f-modbus",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:p.projectId,floorId:p.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:p.projectId,floorId:p.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:p.projectId,floorId:p.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:p.projectId,floorId:p.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:p.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:p.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:a,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:p.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:a,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:p.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:a,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:p.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:a,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:p.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:a,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:p.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:a,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(qe).map((s,n)=>({userId:s.userId,displayName:s.displayName,email:`${s.role.replaceAll("_",".")}@pacom.local`,role:s.role,roleLabel:s.roleLabel,scopeSummary:s.scope.allowedZoneIds?.length?`E栋 7F（${s.scope.allowedZoneIds.length} 个我的区域）`:`${s.scope.allowedProjectIds.length} 项目 / ${s.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:n===0?a:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(t,a,s,n,d){this.traces.unshift({at:new Date().toISOString(),channel:t,operation:a,endpoint:s,request:d,response:n}),this.traces.length>40&&this.traces.pop()}pushAudit(t,a,s,n){const d=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:d?.displayName??"anonymous",role:d?.role??"member",action:t,target:a,result:s,detail:n})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(t){if(!t.account.trim()||!t.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const a=t.account.includes("admin")?"org_admin":t.account.includes("eng")?"commissioning_engineer":t.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(qe[a]),sessionStorage.setItem(He,a),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:t.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(He),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(t){return this.activeSession=structuredClone(qe[t]),sessionStorage.setItem(He,t),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${t}`,this.activeSession),structuredClone(this.activeSession)}async getSpatialTree(){const t=this.requireSession(),a=[{id:p.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"},{id:p.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"}],s=[{id:p.buildingId,projectId:p.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.png"},{id:p.buildingFId,projectId:p.projectId,name:"F栋",aboveFloors:12,belowFloors:2,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.png"}],n={projects:a.filter(d=>t.scope.allowedProjectIds.includes(d.id)),buildings:s.filter(d=>t.scope.allowedBuildingIds.includes(d.id)),floors:[{id:p.lockedFloor8Id,buildingId:p.buildingId,kind:"above",level:8,name:"8F",plan:null},{id:p.floorId,buildingId:p.buildingId,kind:"above",level:7,name:"7F",areaSqm:1383.1,plan:{floorId:p.floorId,imageUrl:"./media/7F.webp",planVersion:1,updatedAt:"2026-11-22T00:00:00Z"}},{id:p.lockedFloor6Id,buildingId:p.buildingId,kind:"above",level:6,name:"6F",plan:null}],zones:[{id:"zone-e7f-lab-east",floorId:p.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:p.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:p.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:p.floorId,name:"核心走廊与弱电井",category:"corridor"}]};return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:n.projects.length,buildings:n.buildings.length,floors:n.floors.length}),n}async getFloorDevices(t){const a=this.requireSession();if(!a.scope.allowedFloorIds.includes(t)){const n={code:"FORBIDDEN",status:403,message:`当前角色「${a.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,n),this.pushAudit("floor.read",t,"denied",n.message),new Error(`403 FORBIDDEN: ${n.message}`)}if(t!==p.floorId)return[];let s=structuredClone(this.devices);return a.scope.allowedZoneIds?.length&&(s=s.filter(n=>n.logicalZoneId&&a.scope.allowedZoneIds.includes(n.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,{count:s.length}),s}async dispatchControlBatch(t){const a=this.requireSession();if(!a.scope.canControlDevices||!a.scope.allowedFloorIds.includes(t.floorId))throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权下发控制指令`);const s=`batch-e7f-${Date.now().toString(36)}`,n={batchId:s,floorId:t.floorId,createdBy:a.userId,createdAt:new Date().toISOString(),receipts:t.targets.map(d=>({deviceId:d.deviceId,command:d.command,targetValue:d.targetValue,status:"queued"}))};return this.batches.set(s,n),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",n,t),this.pushAudit("control.dispatch",s,"success",`下发 ${t.targets.length} 台设备`),n.receipts.forEach((d,z)=>{const B=this.devices.find(R=>R.id===d.deviceId);setTimeout(()=>{d.status="dispatched",d.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:s,deviceId:d.deviceId,status:"dispatched",at:d.dispatchedAt})},280+z*120),setTimeout(()=>{const R=new Date().toISOString();!B||B.connectivity==="offline"?(d.status="timeout",d.errorCode="GATEWAY_READBACK_TIMEOUT",d.errorMessage="设备离线，网关未收到回读确认",d.verifiedAt=R):(d.status="verified_success",d.observedValue=d.targetValue,d.verifiedAt=R,this.applyObservedTelemetry(B,d.command,d.targetValue,R)),this.emit({type:"control.receipt.updated",batchId:s,deviceId:d.deviceId,status:d.status,observedValue:d.observedValue,at:R})},900+z*220)}),structuredClone(n)}applyObservedTelemetry(t,a,s,n){a==="lighting.dimming"&&t.telemetry.dimming?(t.telemetry.dimming={...t.telemetry.dimming,value:s,collectedAt:n,stale:!1},t.telemetry.power&&(t.telemetry.power={...t.telemetry.power,value:Number(s)>0,collectedAt:n,stale:!1})):(a==="lighting.power"||a==="hvac.power")&&t.telemetry.power?t.telemetry.power={...t.telemetry.power,value:s,collectedAt:n,stale:!1}:a==="hvac.setpoint"&&t.telemetry.setpoint&&(t.telemetry.setpoint={...t.telemetry.setpoint,value:s,collectedAt:n,stale:!1}),this.emit({type:"telemetry.updated",floorId:t.floorId,deviceId:t.id,collectedAt:n,values:{[a]:s}})}async getControlBatch(t){this.requireSession();const a=this.batches.get(t);if(!a)throw new Error(`404 NOT_FOUND: 批次 ${t} 不存在`);return structuredClone(a)}async listAlarms(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==p.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(t,a){const s=this.requireSession();if(!s.scope.canManageAlarms){const d=`角色「${s.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",t,"denied",d),new Error(`403 FORBIDDEN: ${d}`)}const n=this.alarms.find(d=>d.id===t);if(!n)throw new Error(`404 NOT_FOUND: 告警 ${t} 不存在`);return n.status="acknowledged",n.acknowledgedAt=new Date().toISOString(),n.acknowledgedBy=s.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${t}/acknowledge`,n,{note:a}),this.pushAudit("alarm.acknowledge",t,"success",a),this.emit({type:"alarm.changed",floorId:n.floorId,alarmId:t,status:"acknowledged",at:n.acknowledgedAt}),structuredClone(n)}async listWorkOrders(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==p.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(t){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权创建工单`);const s=new Date().toISOString(),n={id:`wo-e7f-${Date.now().toString(36)}`,projectId:p.projectId,buildingId:p.buildingId,floorId:t.floorId,deviceId:t.deviceId??null,alarmId:t.alarmId??null,title:t.title,description:t.description,status:"open",assigneeId:null,createdAt:s,updatedAt:s};if(this.workOrders.unshift(n),t.alarmId){const d=this.alarms.find(z=>z.id===t.alarmId);d&&(d.workOrderId=n.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",n,t),this.pushAudit("work_order.create",n.id,"success",n.title),structuredClone(n)}async updateWorkOrderStatus(t,a){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权流转工单`);const n=this.workOrders.find(d=>d.id===t);if(!n)throw new Error(`404 NOT_FOUND: 工单 ${t} 不存在`);return n.status=a,n.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${t}`,n,{status:a}),this.pushAudit("work_order.update",t,"success",`状态更新为 ${a}`),structuredClone(n)}async updateDevicePlanPoint(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw this.pushAudit("device.plan_point",t.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权编辑图纸标点`);const s=this.devices.find(n=>n.id===t.deviceId);if(!s)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(s.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${s.version}，请刷新后重试`);return s.planPoint={floorId:t.floorId,planVersion:t.planVersion,x:Number(t.x.toFixed(4)),y:Number(t.y.toFixed(4))},s.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${t.deviceId}/plan-point`,s,t),this.pushAudit("device.plan_point",t.deviceId,"success",`坐标更新 (${s.planPoint.x}, ${s.planPoint.y})`),structuredClone(s)}async updateDeviceHardwareBinding(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权修改硬件绑定`);const s=this.devices.find(d=>d.id===t.deviceId);if(!s)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(s.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${s.version}）`);const n=new Date().toISOString();return s.physicalInstalled=t.physicalInstalled,s.physicalVerifiedAt=t.physicalInstalled?n:null,s.hardwareBinding={gatewayId:t.gatewayId,protocol:t.protocol,networkAddress:t.networkAddress,portOrChannel:t.portOrChannel,boundAt:n,boundBy:a.displayName},s.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${t.deviceId}/hardware-binding`,s,t),this.pushAudit("device.hardware_binding",t.deviceId,"success",`${t.protocol} ${t.networkAddress}`),structuredClone(s)}async listConnections(t){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(t){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权冻结交付批次`);const n=this.devices.filter(z=>z.physicalInstalled&&z.hardwareBinding).length,d={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:p.projectId,floorId:t,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:n,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:s.displayName,note:a||"例行交付基线冻结"};return this.deliveryBatches.unshift(d),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${t}/deliveries/freeze`,d,{note:a}),this.pushAudit("delivery.freeze",d.id,"success",`${n}/${this.devices.length} 已现场核验`),structuredClone(d)}async getAnalysisReport(t,a,s){this.requireSession();const n=a==="today"?1:a==="7d"?7:30,z={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*n)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*n).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(J=>J.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*n).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*n).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*n).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[t],B=a==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],R={category:t,range:a,scopeId:s,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:z.kpis,unit:z.unit,series:z.base.map((J,q)=>({label:B[q],value:Math.round(J*(t==="energy"||t==="carbon"?n/2+.5:1)),baseline:Math.round(J*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:z.base[3],unit:z.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:z.base[4],unit:z.unit,status:t==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:z.base[1],unit:z.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${t}?range=${a}&scopeId=${s}`,{kpis:R.kpis.length}),R}async listScenes(t){return this.requireSession(),structuredClone(this.scenes)}async createScene(t){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const s={id:`scn-e7f-${Date.now().toString(36)}`,projectId:t.projectId,floorId:t.floorId,name:t.name,description:t.description,enabled:!0,scheduleSummary:"手动触发",actions:t.actions,lastExecutedAt:null};return this.scenes.unshift(s),this.record("REST","createScene","POST /api/v1/scenes",s,t),this.pushAudit("scene.create",s.id,"success",s.name),structuredClone(s)}async executeScene(t){const a=this.scenes.find(n=>n.id===t);if(!a)throw new Error(`404 NOT_FOUND: 场景 ${t} 不存在`);const s=await this.dispatchControlBatch({floorId:a.floorId,idempotencyKey:`scene-${t}-${Date.now()}`,targets:a.actions,reason:`触发场景：${a.name}`});return a.lastExecutedAt=new Date().toISOString(),a.lastBatchId=s.batchId,s}async getRuntimeSettings(t){return this.requireSession(),structuredClone({projectId:p.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(t,a,s){this.requireSession();const n=s>=this.calendar.nightGuardStart?`下班时间 ${s} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,d=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${a} - ${s}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${a} (-30m) ~ ${s} (+30m)`,conflictWarning:n},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:n}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",d,{workdayStart:a,workdayEnd:s}),d}async saveWorkCalendar(t,a,s,n){const d=this.requireSession();if(!d.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${d.roleLabel}」无权修改运行日历`);if(this.calendar.version!==n)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(a>=s)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:a,workdayEnd:s,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:a,workdayEnd:s,expectedVersion:n}),this.pushAudit("settings.calendar",p.projectId,"success",`${a}-${s}`),structuredClone(this.calendar)}async toggleRuntimeRule(t,a,s){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权启停运行规则`);const d=this.rules.find(z=>z.id===t);if(!d)throw new Error(`404 NOT_FOUND: 规则 ${t} 不存在`);if(d.version!==s)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${d.version}）`);return d.enabled=a,d.version+=1,d.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${t}`,d,{enabled:a,expectedVersion:s}),this.pushAudit("settings.rule_toggle",t,"success",a?"启用":"停用"),structuredClone(d)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(t,a){const s=this.requireSession();if(s.role!=="org_admin"&&s.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const n=qe[a],d={userId:`inv-${Date.now().toString(36)}`,displayName:t.split("@")[0]||t,email:t,role:a,roleLabel:n.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(d),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",d,{email:t,role:a}),this.pushAudit("org.invite",t,"success",n.roleLabel),structuredClone(d)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(t,a){return t!==p.floorId?()=>{}:(this.listeners.add(a),()=>{this.listeners.delete(a)})}emit(t){this.record("WS",t.type,`WS /ws/v1/stream?floorId=${p.floorId}`,t),this.listeners.forEach(a=>a(t))}}function xt(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new wt}const St={"building-2":'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',"settings-2":'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',check:'<path d="M20 6 9 17l-5-5"/>',menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>'};function kt(e){return e>=20?"1.5":e>=16?"1.75":e>=14?"2":"2.25"}function me(e,t=16,a=""){const s=kt(t);return`<svg${a?` class="${a}"`:""} width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${s}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;">${St[e]}</svg>`}const Je=[{id:"wg-hvac",name:"暖通运维组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋 5F–7F（HVAC、FCU 与 VAV 系统）",memberCount:3,membersSummary:"陈值班、林工、周工",notifyChannel:"站内 + 短信"},{id:"wg-elec",name:"强电照明组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋全楼照明与配电回路",memberCount:2,membersSummary:"黄工、刘工",notifyChannel:"站内 + 邮件"},{id:"wg-property",name:"园区物业值班组",defaultRoleLabel:"只读访客 / 值班巡检",locationScope:"广实2号园 / 全园区公共空间与值班台",memberCount:4,membersSummary:"张班长、王巡检、赵巡检、吴值守",notifyChannel:"站内 + 每日晨报"}];async function It(e,t,a,s,n){let d="profile",z="directory",B=await t.listOrgMembers(),R=await t.listAuditLogs(),J="",q="all",X="all",O="all",re=!1,y=!1,Y=!1,D=a.displayName,Q=a.role==="org_admin"||a.role==="project_admin"?"设施运维总监":a.role==="commissioning_engineer"?"楼宇自控部署工程师":a.role==="facility_operator"?"暖通运行值班工程师":"园区巡检成员",te="138-0013-8072",ae="",oe="";async function le(){[B,R]=await Promise.all([t.listOrgMembers(),t.listAuditLogs()]),de()}function de(){const ve=t.mode==="demo"&&typeof t.switchDemoRole=="function",fe=J.trim().toLowerCase(),k=B.filter(m=>q!=="all"&&m.role!==q?!1:fe?`${m.displayName} ${m.email} ${m.roleLabel} ${m.scopeSummary}`.toLowerCase().includes(fe):!0),A=R.filter(m=>{if(X==="success"&&m.result!=="success"||X==="denied"&&m.result==="success")return!1;if(O!=="all"){const E=`${m.action} ${m.target}`.toLowerCase();if(O==="control"&&!E.includes("control")&&!E.includes("scene")&&!E.includes("控制")||O==="alarm"&&!E.includes("alarm")&&!E.includes("work")&&!E.includes("告警")||O==="deploy"&&!E.includes("deploy")&&!E.includes("plan")&&!E.includes("hardware")&&!E.includes("部署"))return!1}return!0});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">机构与账户</h1>
              <div class="pacom-tabs" role="tablist" aria-label="机构与账户视图">
                <button class="pacom-tab" role="tab" aria-selected="${d==="profile"}" data-atab="profile">我的账户与权限</button>
                <button class="pacom-tab" role="tab" aria-selected="${d==="members"}" data-atab="members">成员与角色（${B.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${d==="audit"}" data-atab="audit">操作审计日志（${R.length}）</button>
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
            ${ae?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${ae}</span></div>`:""}
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
                        <input class="pacom-input" style="width:150px;" name="displayName" value="${D}" aria-label="显示姓名" required />
                        <input class="pacom-input" style="width:180px;" name="jobTitle" value="${Q}" aria-label="岗位职务" />
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

                ${ve?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">多角色权限预览切换</h2>
                        <span class="pacom-badge pacom-badge--neutral">仅 Demo 预览可用</span>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(qe).map(m=>{const E=qe[m];return`
                              <button class="pacom-role-card ${m===a.role?"is-active":""}" data-switch-role="${m}">
                                <strong style="font-weight:500;">${E.roleLabel}</strong>
                                <span class="pacom-row-sub">${E.displayName}</span>
                                <span class="pacom-row-sub">授权楼层 ${E.scope.allowedFloorIds.length} 层 · 部署编辑：${E.scope.canEditDeployment?"是":"否"}</span>
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
                      <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:4px;">展开查看 ${me("chevron-down",12)}</span>
                    </summary>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                      <span class="pacom-row-sub">服务端下发的当前会话权限对象（供前后端核对）</span>
                      <button class="pacom-btn" data-copy-session="1">${Y?"已复制":"复制 JSON"}</button>
                    </div>
                    <pre class="pacom-code">${JSON.stringify(a,null,2)}</pre>
                  </details>
                </section>`:d==="members"?`
                  ${re?`
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
                                ${Object.keys(qe).map(m=>`<option value="${m}">${qe[m].roleLabel}</option>`).join("")}
                              </select>
                              <button class="pacom-btn pacom-btn--primary" type="submit">发送邀请</button>
                            </div>
                          </div>
                        </form>
                      </section>`:""}

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                        <h2 class="lov-section-title">${z==="directory"?"机构成员目录":"工作组与空间授权（Groups & Scope）"}</h2>
                        <div class="pacom-tabs" role="tablist" aria-label="成员与工作组切换">
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${z==="directory"}" data-msub="directory">成员目录（${B.length}）</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${z==="groups"}" data-msub="groups">工作组（${Je.length}）</button>
                        </div>
                      </div>
                      <span class="pacom-row-sub">${z==="directory"?`当前显示 ${k.length} 人`:"按空间边界与值班组统一分派告警与工单"}</span>
                    </div>
                    ${z==="directory"?`
                        <div class="lov-table-card">
                          <div class="lov-table-toolbar">
                            <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                              <input class="pacom-input" name="memberSearch" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${J}" />
                              <select class="pacom-select" name="memberRoleFilter" data-role-filter>
                                <option value="all" ${q==="all"?"selected":""}>全部角色</option>
                                ${Object.keys(qe).map(m=>`<option value="${m}" ${q===m?"selected":""}>${qe[m].roleLabel}</option>`).join("")}
                              </select>
                            </div>
                            <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                              ${re?"收起邀请":"+ 邀请成员"}
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
                                ${k.map(m=>`
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
                                ${Je.map(m=>`
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
                        <select class="pacom-select" name="auditActionCat" data-audit-cat aria-label="按行为类别筛选">
                          <option value="all" ${O==="all"?"selected":""}>全部操作类型</option>
                          <option value="control" ${O==="control"?"selected":""}>设备控制与场景</option>
                          <option value="alarm" ${O==="alarm"?"selected":""}>告警与工单处置</option>
                          <option value="deploy" ${O==="deploy"?"selected":""}>系统部署与点位</option>
                        </select>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${X==="all"}" data-audit-filter="all">全部（${R.length}）</button>
                          <button class="pacom-tab" aria-selected="${X==="success"}" data-audit-filter="success">成功</button>
                          <button class="pacom-tab" aria-selected="${X==="denied"}" data-audit-filter="denied">已拦截</button>
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
                            ${A.map(m=>`
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
    `,e.querySelectorAll("[data-atab]").forEach(m=>{m.addEventListener("click",()=>{d=m.dataset.atab,ae="",oe="",de()})}),e.querySelectorAll("[data-msub]").forEach(m=>{m.addEventListener("click",()=>{z=m.dataset.msub??"directory",de()})}),e.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{y=!y,de()}),e.querySelector('[data-role="new-group-form"]')?.addEventListener("submit",m=>{m.preventDefault();const E=new FormData(m.currentTarget),i=String(E.get("wgName")??"").trim(),c=String(E.get("wgRole")??"运行值班员"),w=String(E.get("wgScope")??"").trim();!i||!w||(Je.push({id:`wg-${Date.now()}`,name:i,defaultRoleLabel:c,locationScope:w,memberCount:1,membersSummary:a.displayName,notifyChannel:"站内 + 邮件"}),y=!1,ae=`已创建工作组「${i}」（授权空间：${w}）。`,de())}),e.querySelector('[data-role="profile-form"]')?.addEventListener("submit",m=>{m.preventDefault();const E=new FormData(m.currentTarget);D=String(E.get("displayName")??"").trim()||a.displayName,Q=String(E.get("jobTitle")??"").trim()||Q,te=String(E.get("phone")??"").trim()||te,ae=`已更新个人资料：${D}（${Q}）· 告警短信接收号 ${te}。`,de()}),e.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await t.logout(),window.location.hash="#login",n()}),e.querySelector("[data-copy-session]")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(a,null,2)),Y=!0,de(),window.setTimeout(()=>{Y=!1,de()},1600)}catch{}}),e.querySelectorAll("[data-switch-role]").forEach(m=>{m.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const E=await t.switchDemoRole(m.dataset.switchRole);s(E)})}),e.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{re=!re,de()}),e.querySelector("[data-member-search]")?.addEventListener("input",m=>{const E=m.currentTarget,i=E.selectionStart??E.value.length;J=E.value,de();const c=e.querySelector("[data-member-search]");c&&(c.focus(),c.setSelectionRange(i,i))}),e.querySelector("[data-role-filter]")?.addEventListener("change",m=>{q=m.currentTarget.value,de()}),e.querySelectorAll("[data-audit-filter]").forEach(m=>{m.addEventListener("click",()=>{X=m.dataset.auditFilter??"all",de()})}),e.querySelector("[data-audit-cat]")?.addEventListener("change",m=>{O=m.currentTarget.value??"all",de()}),e.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async m=>{m.preventDefault(),oe="";const E=new FormData(m.currentTarget);try{await t.inviteOrgMember(String(E.get("email")??""),String(E.get("role"))),re=!1,await le()}catch(i){oe=i instanceof Error?i.message:String(i),de()}})}de()}let Ke={level:"floor",projectId:p.projectId,buildingId:p.buildingId,floorId:p.floorId};function _e(){return Ke}function ct(e){return Ke=e,Ke}function Ee(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function rt(e){const t=e.match(/(-?\d+)/);if(!t)return 0;const a=Number(t[1]);return e.toUpperCase().startsWith("B")?-Math.abs(a):a}function Et(e){if(e==="all")return{level:"all-projects"};const t=e.split(":");return t[0]==="project"&&t[1]?{level:"project",projectId:t[1]}:t[0]==="building"&&t[1]&&t[2]?{level:"building",projectId:t[1],buildingId:t[2]}:t[0]==="floor"&&t[1]&&t[2]&&t[3]?{level:"floor",projectId:t[1],buildingId:t[2],floorId:t[3]}:{level:"project",projectId:p.projectId}}function Lt(e,t,a){return a==="project"?e.level==="all-projects"?{level:"project",projectId:t.projects[0]?.id??p.projectId}:{level:"project",projectId:e.projectId}:a==="building"&&e.level==="floor"?{level:"building",projectId:e.projectId,buildingId:e.buildingId}:e}function Be(e){const{tree:t,session:a,isOpen:s,searchKeyword:n}=e,d=e.maxGranularity??"floor",z=e.activeAlarmCount??0,B=a.scope.allowedZoneIds?.length?a.scope.allowedZoneIds:null,R=t.floors.filter(i=>a.scope.allowedFloorIds.includes(i.id)),J=B||t.projects.length<=1&&t.buildings.length<=1&&R.length<=1?"floors-only":t.projects.length>1?"multi-project":t.buildings.length>1?"single-project-multi-building":"single-building",q=J==="multi-project"&&d!=="project",X=J==="multi-project"||J==="single-project-multi-building",O=J!=="floors-only"&&d!=="project",re=d==="project"&&t.projects.length<=1||J==="floors-only"&&R.length<=1,y=Lt(e.scope??Ke,t,d),Y=y.level==="all-projects"?null:t.projects.find(i=>i.id===y.projectId)??t.projects[0],D=y.level==="building"||y.level==="floor"?t.buildings.find(i=>i.id===y.buildingId):null,Q=y.level==="floor"?t.floors.find(i=>i.id===y.floorId):null,te=[];if(y.level==="all-projects")te.push(`全部项目（${t.projects.length}）`);else if(y.level==="project")te.push(Ee(Y?.name??"广实2号园"));else if(y.level==="building")Y&&te.push(`<span class="pacom-path-muted">${Ee(Y.name)}</span>`),te.push(Ee(D?.name??"E栋"));else{Y&&J!=="floors-only"&&te.push(`<span class="pacom-path-muted">${Ee(Y.name)}</span>`),D&&O&&te.push(`<span class="pacom-path-muted">${Ee(D.name)}</span>`);const i=!O&&D?`${D.name} ${Q?.name??"7F"}`:Q?.name??"7F";te.push(Ee(i))}const ae='<span class="pacom-path-muted" style="margin:0 3px;">·</span>',oe=re?`<span class="pacom-path-trigger is-static">${te.join(ae)}</span>`:`<button type="button" class="pacom-path-trigger" data-global-space-toggle="1" aria-expanded="${s}" aria-haspopup="dialog" title="切换项目 / 楼宇 / 楼层">
        <span>${te.join(ae)}</span>
        <span style="display:inline-flex; color:var(--pacom-text-secondary);">${me("chevron-down",12)}</span>
      </button>`;if(!s||re)return`<span class="pacom-title-slash" aria-hidden="true">/</span><div class="pacom-path-wrap">${oe}</div>`;const le=n.trim().toLowerCase(),de=y.level==="all-projects"?t.projects[0]?.id??p.projectId:y.projectId,ve=y.level==="building"||y.level==="floor"?y.buildingId:t.buildings.find(i=>i.projectId===de)?.id??p.buildingId,fe=t.projects.filter(i=>!le||i.name.toLowerCase().includes(le)),k=t.buildings.filter(i=>i.projectId===de&&(!le||i.name.toLowerCase().includes(le))),A=[...t.floors.filter(i=>i.buildingId===ve)].sort((i,c)=>rt(c.name)-rt(i.name)).filter(i=>!le||i.name.toLowerCase().includes(le)),W=d==="project"||t.projects.length>1,m=d!=="project"&&X,E=d==="floor";return`
    <span class="pacom-title-slash" aria-hidden="true">/</span>
    <div class="pacom-path-wrap" data-role="global-space-wrap">
      ${oe}
      <div class="pacom-space-popover pacom-path-popover" role="dialog" aria-label="全局空间切换" data-role="global-space-pop">
        <div class="pacom-space-pop-head">
          ${me("search",14)}
          <input type="text" name="globalSpaceSearch" data-global-space-search placeholder="检索园区、楼宇或楼层…" value="${Ee(n)}" aria-label="检索空间" />
          <button type="button" class="pacom-drawer-close" style="width:24px; height:24px;" data-global-space-toggle="1" aria-label="关闭">${me("x",14)}</button>
        </div>
        <div class="pacom-space-pop-cols">
          ${W?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">项目 / 园区</div>
                ${q?`<button type="button" class="pacom-space-pop-item ${y.level==="all-projects"?"is-active":""}" data-global-space-pick="all">
                        <span>全部项目（${t.projects.length}）</span>
                        ${y.level==="all-projects"?me("check",14):""}
                      </button>`:""}
                ${fe.map(i=>{const c=y.level==="project"&&y.projectId===i.id;return`<button type="button" class="pacom-space-pop-item ${c?"is-active":""}" data-global-space-pick="project:${Ee(i.id)}">
                      <span>${Ee(i.name)}</span>
                      ${c?me("check",14):me("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${m?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Ee(t.projects.find(i=>i.id===de)?.name??"园区")} · 楼宇</div>
                <button type="button" class="pacom-space-pop-item ${y.level==="project"?"is-active":""}" data-global-space-pick="project:${Ee(de)}">
                  <span>全园区</span>
                  ${y.level==="project"?me("check",14):""}
                </button>
                ${k.map(i=>{const c=y.level==="building"&&y.buildingId===i.id;return`<button type="button" class="pacom-space-pop-item ${c?"is-active":""}" data-global-space-pick="building:${Ee(i.projectId)}:${Ee(i.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Ee(i.name)}</span>
                        ${i.id===p.buildingId&&z>0?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      ${c?me("check",14):me("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${E?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${Ee(t.buildings.find(i=>i.id===ve)?.name??"楼宇")} · 楼层</div>
                ${O?`<button type="button" class="pacom-space-pop-item ${y.level==="building"&&y.buildingId===ve?"is-active":""}" data-global-space-pick="building:${Ee(de)}:${Ee(ve)}">
                        <span>整栋</span>
                        ${y.level==="building"&&y.buildingId===ve?me("check",14):""}
                      </button>`:""}
                ${A.map(i=>{const c=a.scope.allowedFloorIds.includes(i.id),w=y.level==="floor"&&y.floorId===i.id,_=i.id===p.floorId&&z>0;return`<button type="button" class="pacom-space-pop-item ${w?"is-active":""}" style="${c?"":"opacity:0.5;"}" data-global-space-pick="floor:${Ee(de)}:${Ee(ve)}:${Ee(i.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${Ee(i.name)}</span>
                        ${_?'<span class="pacom-elev-dot"></span>':""}
                      </span>
                      <span class="pacom-row-sub" style="font-size:11px;">${w?me("check",14):c?i.plan?"2D":"待部署":"未授权"}</span>
                    </button>`}).join("")}
              </div>`:""}
        </div>
      </div>
    </div>
  `}function Ve(e,t){e.querySelectorAll("[data-global-space-toggle]").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation(),t.onToggle()})}),e.querySelector("[data-global-space-search]")?.addEventListener("input",s=>{t.onSearch(s.currentTarget.value)}),e.querySelectorAll("[data-global-space-pick]").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation();const d=s.dataset.globalSpacePick;if(!d)return;const z=ct(Et(d));t.onPick(z)})})}const Re={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},At={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},jt={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function Ct(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("modbus")||t.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":t.includes("co₂")||t.includes("co2")||t.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function Ft(e){return e.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:e.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function et(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("vav")||e.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:t.includes("co₂")||t.includes("co2")||e.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function Mt(e,t,a){const s=new URLSearchParams(window.location.hash.split("?")[1]??""),n=s.get("alarm"),d=s.get("wo");let z=await t.getSpatialTree(),B=_e(),R=!1,J="",q=[],X=[],O=[],re=d?"workorders":"alarms",y="all",Y="all",D="all",Q="impact",te=!1,ae="",oe=n,le=d,de=null,ve=null,fe="resolved";const k=new Set,A=new Map,W=new Map,m=new Map,E=new Map;let i="",c="";function w(ne){const ee=E.get(ne.id);if(ee)return ee;const l=ne.id.match(/(\d+)$/),h=`WO-2026-${l?l[1]:ne.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,Z={estCost:"¥ 450",actualCost:ne.status==="closed"?"¥ 380":"--",cmmsNo:h,assigneeGroup:"暖通运维组",tasks:[{id:`${ne.id}-t1`,label:"核查设备供电与现场指示灯状态",done:ne.status!=="open"},{id:`${ne.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:ne.status==="resolved"||ne.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:ne.createdAt?ne.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${h}）`}]};return E.set(ne.id,Z),Z}async function _(){[q,X,O]=await Promise.all([t.listAlarms(p.floorId),t.listWorkOrders(p.floorId),t.getFloorDevices(p.floorId).catch(()=>[])]),X.forEach(ne=>w(ne)),pe()}function H(ne){if(!ne)return{name:"楼层通用",zone:"E7F",dev:null};const ee=O.find(l=>l.id===ne)??null;return ee?{name:ee.name,zone:(ee.logicalZoneId?jt[ee.logicalZoneId]:void 0)??"E7F",dev:ee}:{name:ne,zone:"E7F",dev:null}}function be(ne){const ee=H(ne.deviceId).dev;ee&&ee.connectivity==="offline"?m.set(ne.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${ee.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):m.set(ne.id,{verdict:"pass",summary:`自检通过（PASS）：「${ee?.name??ne.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),oe=ne.id,pe()}function pe(){const ne=q.filter(r=>r.status==="active"&&!A.has(r.id)),ee=X.filter(r=>!w(r).cancelled&&(r.status==="open"||r.status==="assigned"||r.status==="in_progress")),l=q.filter(r=>r.status!=="active").length+W.size,h=0,Z=A.size,se=ae.trim().toLowerCase(),Se=q.filter(r=>{const b=A.has(r.id);if(y==="snoozed"){if(!b)return!1}else if(y==="active"){if(r.status!=="active"||b)return!1}else if(y==="acknowledged"){if(r.status!=="acknowledged")return!1}else if(b)return!1;if(D!=="all"&&r.severity!==D)return!1;if(!se)return!0;const K=H(r.deviceId);return`${r.title} ${r.message} ${K.name} ${K.zone} ${r.deviceId}`.toLowerCase().includes(se)}),$e=new Map;for(const r of Se){const b=`${r.title} ${r.message}`.toLowerCase(),K=b.includes("离线")||b.includes("modbus")||b.includes("通信"),ce=te?K?"root-gateway-modbus":r.deviceId:r.id,ie=K?"根因：E7F 主控网关通信链路":`根因：${H(r.deviceId).name}`,ke=$e.get(ce)??{rootLabel:ie,items:[]};ke.items.push(r),$e.set(ce,ke)}const Ie=Array.from($e.values());Q==="impact"&&Ie.sort((r,b)=>et(b.items[0]).costYuan-et(r.items[0]).costYuan);const je=X.filter(r=>{const b=w(r);if(Y==="cancelled"){if(!b.cancelled)return!1}else if(b.cancelled||Y==="open"&&(r.status==="resolved"||r.status==="closed")||Y==="resolved"&&r.status!=="resolved"||Y==="closed"&&r.status!=="closed")return!1;if(!se)return!0;const K=H(r.deviceId);return`${r.title} ${r.description} ${r.id} ${b.cmmsNo} ${K.name}`.toLowerCase().includes(se)});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${Be({tree:z,session:a,scope:B,activeAlarmCount:ne.length,isOpen:R,searchKeyword:J})}
            </div>

            <div class="pacom-header-meta">
              ${re==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="lov-switch" role="switch" aria-checked="${te}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="lov-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${a.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${a.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="lov-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${me("refresh-cw",14)}</button>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="告警中心视图">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${re==="alarms"}" data-main-tab="alarms">实时告警（${q.length-Z}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${re==="workorders"}" data-main-tab="workorders">运维工单（${X.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="lov-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="lov-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${re==="alarms"&&y==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">待处理告警</span>
              <div class="lov-kpi-value">${ne.length}<span class="lov-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="lov-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${re==="workorders"&&Y==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">处理中工单</span>
              <div class="lov-kpi-value">${ee.length}<span class="lov-kpi-unit">单</span></div>
              <span class="lov-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${re==="alarms"&&y==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
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

          ${re==="alarms"?`
              <section class="lov-table-card">
                <div class="lov-table-toolbar">
                  <div class="lov-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${ae}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${D==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${D==="critical"?"selected":""}>严重</option>
                      <option value="major" ${D==="major"?"selected":""}>重要</option>
                      <option value="minor" ${D==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${Q==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${Q==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${y==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${y==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${y==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${y==="snoozed"}" data-status-pill="snoozed">已忽略（${Z}）</button>
                    </div>
                  </div>
                  <div class="lov-table-toolbar-group">
                    ${k.size>0&&a.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${k.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${Ie.length} 项</span>
                  </div>
                </div>
                ${Ie.length===0?'<div class="lov-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${Ie.map(r=>{const b=r.items[0],K=At[b.severity]??{label:b.severity,cls:"pacom-badge--neutral"},ce=H(b.deviceId),ie=Ft(b),ke=et(b),De=oe===b.id,Le=A.get(b.id),Ae=!!Le,Ne=k.has(b.id),Te=m.get(b.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${b.id}" data-check-alarm="${b.id}" ${Ne?"checked":""} ${b.status!=="active"||Ae?"disabled":""} aria-label="选择 ${b.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${K.cls}">${K.label}</span></td>
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
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${ke.costLabel}</div>
                                    <div class="pacom-row-sub">${ke.comfortLabel}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${ie.duration}</div>
                                    <div class="pacom-row-sub" style="color:${ie.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${ie.trend}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${Ae?"pacom-badge--neutral":b.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${Ae?`忽略 ${Le?.duration}`:b.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${Ae?`<button class="pacom-btn" data-unsnooze="${b.id}">恢复监控</button>`:`
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
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${Ct(b)}
                                            </div>
                                            ${Le?`<div class="pacom-info-banner">忽略周期：${Le.duration} · 原因备注：${Le.reason}</div>`:""}
                                            ${Te?`
                                                <div class="lov-banner ${Te.verdict==="pass"?"lov-banner--ok":"lov-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="lov-banner-title">${Te.summary}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${Te.steps.map(xe=>`<span>${xe}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${b.id}</code> · 设备编号 <code>${b.deviceId}</code> · 关联工单 ${b.workOrderId??"无"}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${b.id}">单机自检（FTT）</button>
                                              ${!Ae&&b.status==="active"?`<button class="pacom-btn" data-open-snooze="${b.id}">限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${b.deviceId}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${b.deviceId}">定位设备 →</button>
                                            </div>
                                            ${de===b.id?`
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
              ${(()=>{const r=le?X.find(b=>b.id===le)??null:null;if(r){const b=H(r.deviceId),K=w(r),ce=!!(K.cancelled||r.status==="closed");return`
                  <section class="lov-section" data-role="wo-workbench">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${r.id}">← 返回运维工单列表</button>
                        <h2 class="lov-section-title">${r.title}</h2>
                        <span class="pacom-badge pacom-badge--accent">${K.cmmsNo}</span>
                        ${K.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${r.id}" data-wo-status="${r.id}" aria-label="更新工单状态" ${ce?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(ie=>`<option value="${ie}" ${r.status===ie?"selected":""}>${Re[ie]}</option>`).join("")}
                          <option value="cancelled" ${K.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${ve===r.id?`
                        <form data-close-wo-form="${r.id}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${Re[fe]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
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
                          <div class="pacom-row-sub">${r.description}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${K.tasks.map(ie=>`
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
                            ${K.history.map(ie=>`<span>• <span class="pacom-row-sub">${ie.at}</span> — ${ie.text}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${r.id}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${K.cmmsNo}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${b.name}（${b.zone}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${K.assigneeGroup}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${K.estCost} / 实际 ${K.actualCost}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${K.cause??"待完单填写"}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${K.solution??"待完单填写"}</span>
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
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${ae}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${Y==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${Y==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${Y==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${Y==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${Y==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${je.length} 条工单</span>
                  </div>
                  ${je.length===0?'<div class="lov-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${je.map(b=>{const K=H(b.deviceId),ce=w(b),ie=!!(ce.cancelled||b.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${b.title}</span>
                                        ${ce.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${b.description} · <code>${b.id}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${K.name}</div>
                                      <div class="pacom-row-sub">${K.zone}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${ce.cmmsNo}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${ce.assigneeGroup} · 预估 ${ce.estCost}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${b.id}" data-wo-status="${b.id}" aria-label="更新工单状态" ${ie?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(ke=>`<option value="${ke}" ${b.status===ke?"selected":""}>${Re[ke]}</option>`).join("")}
                                          <option value="cancelled" ${ce.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${b.id}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${ve===b.id?`
                                      <tr class="lov-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${b.id}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${Re[fe]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
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
    `,Ve(e,{onToggle:()=>{R=!R,pe(),R&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:r=>{J=r,pe();const b=e.querySelector("[data-global-space-search]");b&&(b.focus(),b.setSelectionRange(r.length,r.length))},onPick:r=>{B=r,R=!1,pe()}}),e.querySelectorAll("[data-main-tab]").forEach(r=>{r.addEventListener("click",()=>{re=r.dataset.mainTab??"alarms",i="",pe()})}),e.querySelectorAll("[data-kpi-filter]").forEach(r=>{r.addEventListener("click",()=>{const b=r.dataset.kpiFilter;i="",b==="workorders"?(re="workorders",Y=Y==="open"?"all":"open"):(b==="active"||b==="acknowledged")&&(re="alarms",y=y===b?"all":b),pe()})}),e.querySelectorAll("[data-status-pill]").forEach(r=>{r.addEventListener("click",()=>{y=r.dataset.statusPill??"all",pe()})}),e.querySelectorAll("[data-wo-pill]").forEach(r=>{r.addEventListener("click",()=>{Y=r.dataset.woPill??"all",pe()})}),e.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{i="",_()}),e.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{te=!te,pe()}),e.querySelector("[data-severity-filter]")?.addEventListener("change",r=>{D=r.currentTarget.value,pe()}),e.querySelector("[data-alarm-sort]")?.addEventListener("change",r=>{Q=r.currentTarget.value??"impact",pe()}),e.querySelector("[data-alarm-search]")?.addEventListener("input",r=>{const b=r.currentTarget,K=b.selectionStart??b.value.length;ae=b.value,pe();const ce=e.querySelector("[data-alarm-search]");ce&&(ce.focus(),ce.setSelectionRange(K,K))}),e.querySelectorAll("[data-check-alarm]").forEach(r=>{r.addEventListener("change",()=>{const b=r.dataset.checkAlarm;b&&(r.checked?k.add(b):k.delete(b),pe())})}),e.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{c="";const r=Array.from(k);try{for(const b of r)await t.acknowledgeAlarm(b,"告警中心批量确认"),W.set(b,"批量确认处置");k.clear(),i=`已批量确认 ${r.length} 条告警，未来 24 小时持续校验无复发。`,await _()}catch(b){c=b instanceof Error?b.message:String(b),pe()}}),e.querySelectorAll("[data-expand-alarm]").forEach(r=>{r.addEventListener("click",()=>{const b=r.dataset.expandAlarm??null;oe=oe===b?null:b,de=null,pe()})}),e.querySelectorAll("[data-expand-wo]").forEach(r=>{r.addEventListener("click",()=>{const b=r.dataset.expandWo??null;le=le===b?null:b,pe()})}),e.querySelectorAll("[data-run-ftt]").forEach(r=>{r.addEventListener("click",()=>{const b=q.find(K=>K.id===r.dataset.runFtt);b&&be(b)})}),e.querySelectorAll("[data-open-snooze]").forEach(r=>{r.addEventListener("click",()=>{de=r.dataset.openSnooze??null,pe()})}),e.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{de=null,pe()}),e.querySelectorAll("[data-snooze-form]").forEach(r=>{r.addEventListener("submit",b=>{b.preventDefault();const K=r.dataset.snoozeForm;if(!K)return;const ce=new FormData(r),ie=String(ce.get("duration")??"24h"),ke=String(ce.get("reason")??"").trim()||"现场核查中";A.set(K,{duration:ie,reason:ke}),k.delete(K),de=null,i=`已限时忽略该告警（${ie} · ${ke}），可在「已忽略」页签中随时恢复。`,pe()})}),e.querySelectorAll("[data-unsnooze]").forEach(r=>{r.addEventListener("click",()=>{const b=r.dataset.unsnooze;b&&(A.delete(b),i="已恢复该告警的实时监控。",pe())})}),e.querySelectorAll("[data-go-ts]").forEach(r=>{r.addEventListener("click",()=>{const b=r.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(b)}`})}),e.querySelectorAll("[data-locate-home]").forEach(r=>{r.addEventListener("click",()=>{const b=r.dataset.locateHome??"";window.location.hash=b?`#home?device=${encodeURIComponent(b)}`:"#home"})}),e.querySelectorAll("[data-mark-actioned]").forEach(r=>{r.addEventListener("click",async()=>{c="";const b=r.dataset.markActioned;try{await t.acknowledgeAlarm(b,"现场自处理完成（Mark Actioned）"),W.set(b,"现场自处理完成"),k.delete(b),i="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await _()}catch(K){c=K instanceof Error?K.message:String(K),pe()}})}),e.querySelectorAll("[data-to-wo]").forEach(r=>{r.addEventListener("click",async()=>{c="";const b=q.find(K=>K.id===r.dataset.toWo);if(b)try{await t.createWorkOrder({floorId:b.floorId,deviceId:b.deviceId,alarmId:b.id,title:`处置告警：${b.title}`,description:b.message}),i=`已将「${b.title}」转为运维工单并同步 CMMS。`,await _()}catch(K){c=K instanceof Error?K.message:String(K),pe()}})}),e.querySelectorAll("[data-wo-status]").forEach(r=>{r.addEventListener("change",async()=>{const b=r.dataset.woStatus,K=r.value;if(c="",K==="cancelled"){const ce=X.find(ie=>ie.id===b);if(ce){const ie=w(ce);ie.cancelled=!0,ie.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),i="工单已移入「已取消」分类并锁定编辑。",pe()}return}if(K==="resolved"||K==="closed"){ve=b,fe=K,pe();return}try{await t.updateWorkOrderStatus(b,K);const ce=X.find(ie=>ie.id===b);ce&&w(ce).history.unshift({at:"刚刚",text:`状态变更为「${Re[K]}」`}),i="工单状态已更新并写入审计日志。",await _()}catch(ce){c=ce instanceof Error?ce.message:String(ce),await _()}})}),e.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{ve=null,pe()}),e.querySelectorAll("[data-close-wo-form]").forEach(r=>{r.addEventListener("submit",async b=>{b.preventDefault();const K=r.dataset.closeWoForm,ce=new FormData(r),ie=String(ce.get("cause")??"").trim(),ke=String(ce.get("solution")??"").trim(),De=String(ce.get("actualCost")??"").trim();try{await t.updateWorkOrderStatus(K,fe);const Le=X.find(Ae=>Ae.id===K);if(Le){const Ae=w(Le);Ae.cause=ie,Ae.solution=ke,De&&(Ae.actualCost=De),Ae.history.unshift({at:"刚刚",text:`流转至「${Re[fe]}」· 根因：${ie}`})}ve=null,le=K,i=`工单已更新为「${Re[fe]}」，根因与方案已沉淀归档。`,await _()}catch(Le){c=Le instanceof Error?Le.message:String(Le),pe()}})}),e.querySelectorAll("[data-wo-task]").forEach(r=>{r.addEventListener("change",()=>{const b=X.find(ie=>ie.id===r.dataset.woTask);if(!b)return;const ce=w(b).tasks.find(ie=>ie.id===r.dataset.taskId);ce&&(ce.done=r.checked),pe()})})}await _()}const qt=me("chevron-down",12),We=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],pt=[{id:p.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:p.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:p.projectId,label:"广实2号园（全园区）",factor:18.2}],zt={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},Dt=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],Oe=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function tt(e,t=""){const a=(e??"").trim().toLowerCase();return!(!a||a.includes("%")||a.includes("°c")||a.includes("ppm")||a.includes("ms")||a.includes("m²")||a.includes("/m2")||a.includes("db")||a.includes("lx")||t.includes("率")||t.includes("均")||t.includes("强度")||t.includes("延迟"))}function Ze(e,t){const a=e*t;return Math.abs(a)>=10?Math.round(a):Math.round(a*10)/10}function Tt(e,t){const a=Number(String(e).replaceAll(",","")),s=t??"";return Number.isFinite(a)?s==="kWh"&&Math.abs(a)>=1e4?{value:(a/1e3).toFixed(1),unit:"MWh",title:`精确值：${a.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(a)?a.toLocaleString("en-US"):a.toLocaleString("en-US",{maximumFractionDigits:1}),unit:s,title:`${a.toLocaleString("en-US")} ${s}`.trim()}:{value:e,unit:s,title:`${e} ${s}`.trim()}}function Ot(e,t){if(t===1)return e;const a=tt(e.unit);return{...e,kpis:e.kpis.map(s=>{const n=Number(String(s.value).replaceAll(",",""));return!Number.isFinite(n)||!tt(s.unit,s.label)?s:{...s,value:String(Ze(n,t))}}),series:a?e.series.map(s=>({...s,value:Ze(s.value,t),...typeof s.baseline=="number"?{baseline:Ze(s.baseline,t)}:{}})):e.series,zoneBreakdown:e.zoneBreakdown.map(s=>tt(s.unit)?{...s,value:Ze(s.value,t)}:s)}}function Pt(e,t){const a=Math.max(...e.series.map(O=>Math.max(O.value,O.baseline??0)),1),s=46,n=34,d=36,z=Math.max(e.series.length*(s+n)+d*2,620),B=228,R=184,J=132,q=[0,.25,.5,.75,1].map(O=>{const re=Math.round(R-O*J);return`<line x1="${d-8}" y1="${re}" x2="${z-18}" y2="${re}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${O===0?"0":"3 3"}" />`}).join(""),X=e.series.map((O,re)=>{const y=d+re*(s+n),Y=Math.max(8,Math.round(O.value/a*J)),D=R-Y,Q=typeof O.baseline=="number"&&O.value>O.baseline*1.08,te=Q?`<rect x="${y-8}" y="34" width="${s+16}" height="${R-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",ae=typeof O.baseline=="number"?`<line x1="${y-5}" y1="${Math.round(R-O.baseline/a*J)}" x2="${y+s+5}" y2="${Math.round(R-O.baseline/a*J)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",oe=t&&(Q||re===1)?`<g><title>${Q?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${y+s/2}" cy="18" r="7" fill="${Q?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${y+s/2}" y="21" text-anchor="middle" font-size="8.5" font-weight="600" fill="#fff">${Q?"!":"S"}</text></g>`:"",le=O.value>=1e4?`${(O.value/1e3).toFixed(1)}k`:O.value.toLocaleString("en-US");return`
        ${te}
        ${ae}
        ${oe}
        <g>
          <title>${O.label}：实测 ${O.value.toLocaleString("en-US")} ${e.unit}${O.baseline!==void 0?` / 基线 ${O.baseline.toLocaleString("en-US")} ${e.unit}`:""}</title>
          <rect x="${y}" y="${D}" width="${s}" height="${Y}" rx="7" fill="${Q?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${y+s/2}" y="${D-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${le}</text>
        <text x="${y+s/2}" y="${R+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${O.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${z} ${B}" style="width:100%; height:232px; display:block;" role="img" aria-label="${e.category} 趋势图">
      ${q}
      ${X}
    </svg>
  `}function Rt(e,t){const a=e.connectivity==="offline";if(e.category==="hvac"){const s=Number(e.telemetry.setpoint?.value??24);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:a?[23.8,24,24.1,null,null,null,null,null]:[s+.8,s+.6,s+.3,s,s-.2,s+.1,s+.2,s],offline:a,colorIdx:t},{id:`${e.id}:setpoint`,deviceId:e.id,deviceName:e.name,pointKey:"setpoint",label:"设定温度",unit:"°C",points:a?[24,24,24,null,null,null,null,null]:[s,s,s,s,s,s,s,s],offline:a,colorIdx:t+1},{id:`${e.id}:valve`,deviceId:e.id,deviceName:e.name,pointKey:"valve",label:"冷阀开度",unit:"%",points:a?[42,46,51,null,null,null,null,null]:[20,24,38,62,74,68,52,30],offline:a,colorIdx:t+2}]}if(e.category==="lighting"){const s=Number(e.telemetry.dimming?.value??60);return[{id:`${e.id}:dimming`,deviceId:e.id,deviceName:e.name,pointKey:"dimming",label:"回路亮度",unit:"%",points:[0,0,Math.round(s*.8),s,s,Math.round(s*.6),s,Math.round(s*.9)],offline:a,colorIdx:t},{id:`${e.id}:power`,deviceId:e.id,deviceName:e.name,pointKey:"power",label:"实时功率",unit:"W",points:[12,12,220,285,290,175,280,245],offline:a,colorIdx:t+1}]}if(e.category==="sensor"){const s=Number(e.telemetry.temp?.value??23.4);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:[s-.5,s-.3,s,s+.3,s+.5,s+.2,s+.1,s],offline:a,colorIdx:t},{id:`${e.id}:co2`,deviceId:e.id,deviceName:e.name,pointKey:"co2",label:"CO₂ 浓度",unit:"ppm",points:[410,415,440,520,580,540,495,430],offline:a,colorIdx:t+1},{id:`${e.id}:humidity`,deviceId:e.id,deviceName:e.name,pointKey:"humidity",label:"相对湿度",unit:"%RH",points:[49,50,51,52,53,51,50,49],offline:a,colorIdx:t+2}]}return[{id:`${e.id}:latency`,deviceId:e.id,deviceName:e.name,pointKey:"latency",label:"心跳延迟",unit:"ms",points:[16,18,17,19,18,17,18,18],offline:a,colorIdx:t}]}function Nt(e){const t=e.points.filter(B=>typeof B=="number");if(!t.length)return{min:"-",avg:"-",max:"-",curr:"离线"};const a=Math.min(...t),s=Math.max(...t),n=t.reduce((B,R)=>B+R,0)/t.length,d=e.points[e.points.length-1],z=B=>Math.abs(B)<100&&!Number.isInteger(B)?B.toFixed(1):Math.round(B).toString();return{min:z(a),avg:n.toFixed(Math.abs(n)<100?1:0),max:z(s),curr:typeof d=="number"?z(d):"离线"}}function _t(e,t,a){const s=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!e.length)return'<div class="lov-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧展开设备并勾选 1 个或多个测点以开始多点时序对比。</span></div>';const n=(z,B)=>{const D=[];for(const k of z)for(const A of k.points)typeof A=="number"&&D.push(A);const Q=D.length?Math.min(...D)*.92:0,te=D.length?Math.max(...D)*1.08:100,ae=Math.max(te-Q,1),oe=[0,.5,1].map(k=>{const A=Math.round(26+106*(1-k)),W=(Q+ae*k).toFixed(ae<15?1:0);return`
          <line x1="44" y1="${A}" x2="662" y2="${A}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${k===0?"0":"3 3"}" />
          <text x="38" y="${A+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${W}</text>
        `}).join(""),le=s.map((k,A)=>`<text x="${44+A/(s.length-1)*618}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${k}</text>`).join(""),de=z.map((k,A)=>{const W=Oe[(k.colorIdx+A)%Oe.length],m=k.points,E=[];let i=44,c=26+106/2,w=!1;m.forEach((H,be)=>{const pe=44+be/(m.length-1)*618;if(typeof H=="number"){const ne=26+106*(1-(H-Q)/ae);E.push(`${pe.toFixed(1)},${ne.toFixed(1)}`),i=pe,c=ne}else w=!0});const _=a?m.map((H,be)=>{if(typeof H!="number")return null;const pe=44+be/(m.length-1)*618,ee=26+106*(1-(H*.96-Q)/ae);return`${pe.toFixed(1)},${ee.toFixed(1)}`}).filter(Boolean).join(" "):"";return`
          ${_?`<polyline fill="none" stroke="${W}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.42" points="${_}" />`:""}
          ${E.length?`<polyline fill="none" stroke="${W}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${E.join(" ")}" />`:""}
          ${w?`<line x1="${i.toFixed(1)}" y1="${c.toFixed(1)}" x2="662" y2="${c.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${c-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),ve=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${44+3/7*618}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${44+3/7*618}" y="14.8" text-anchor="middle" font-size="7.5" font-weight="600" fill="#fff">S</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${44+5/7*618}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${44+5/7*618}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `,fe=z.map((k,A)=>{const W=Oe[(k.colorIdx+A)%Oe.length],m=Nt(k);return`
          <tr>
            <td><span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:7px; height:7px; border-radius:50%; background:${W};"></span>${k.deviceName} · ${k.label}</span></td>
            <td><strong>${m.curr}</strong> <span class="pacom-row-sub">${k.unit}</span></td>
            <td>${m.min} <span class="pacom-row-sub">${k.unit}</span></td>
            <td>${m.avg} <span class="pacom-row-sub">${k.unit}</span></td>
            <td>${m.max} <span class="pacom-row-sub">${k.unit}</span></td>
          </tr>`}).join("");return`
      <div class="pacom-card" style="padding:14px 16px; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${B}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${z.map((k,A)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${Oe[(k.colorIdx+A)%Oe.length]};"></span>${k.deviceName}·${k.label}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${oe}
          ${le}
          ${ve}
          ${de}
        </svg>
        <div class="lov-table-wrap" style="border-top:var(--hw) solid var(--pacom-border-subtle); padding-top:6px;">
          <table class="lov-table" style="font-size:12px;">
            <thead><tr><th>测点</th><th>当前值</th><th>最小值 (Min)</th><th>平均值 (Avg)</th><th>最大值 (Max)</th></tr></thead>
            <tbody>${fe}</tbody>
          </table>
        </div>
      </div>
    `};if(t==="shared")return n(e,"单图叠合对比（Shared）");const d=new Map;for(const z of e){const B=d.get(z.unit)??[];B.push(z),d.set(z.unit,B)}return Array.from(d.entries()).map(([z,B])=>n(B,`按单位分组泳道（${z}）`)).join("")}function Bt(e){const t=[["时段",`数值 (${e.unit})`,`基线 (${e.unit})`].join(","),...e.series.map(d=>[d.label,String(d.value),d.baseline!==void 0?String(d.baseline):""].join(","))],a=new Blob([`\uFEFF${t.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),s=URL.createObjectURL(a),n=document.createElement("a");n.href=s,n.download=`pacom-${e.category}-${e.range}.csv`,n.click(),URL.revokeObjectURL(s)}function Vt(e){const t=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],a=["时间",...e.map(B=>`${B.deviceName}·${B.label}(${B.unit})`)].join(","),s=t.map((B,R)=>[B,...e.map(J=>String(J.points[R]??"No Data"))].join(",")),n=new Blob([`\uFEFF${[a,...s].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),d=URL.createObjectURL(n),z=document.createElement("a");z.href=d,z.download="pacom-timeseries-export.csv",z.click(),URL.revokeObjectURL(d)}async function Ut(e,t,a){const s=new URLSearchParams(window.location.hash.split("?")[1]??""),n=s.get("tab"),d=s.get("cat"),z=s.get("device"),B=s.get("points"),R=s.get("mode"),J=s.get("interval");let q=n==="timeseries"?"timeseries":d&&We.some(ee=>ee.id===d)?d:"energy",X="7d",O="2026-11-16",re="2026-11-23",y=_e(),Y=!1,D="",Q=y.level==="all-projects"||y.level==="project"?p.projectId:y.level==="building"?p.buildingId:p.floorId,te="chart",ae=!0,oe="breakdown",le=!1,de=null;const[ve,fe]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(p.floorId).catch(()=>[])]);let k=fe;const A=new Map,W=[];k.forEach((ee,l)=>{const h=Rt(ee,l);A.set(ee.id,h),W.push(...h)});let m=R==="shared"||R==="grouped"?R:"grouped",E=J==="15m"||J==="1h"||J==="1d"?J:"1h",i=!1;const c=[];if(B?B.split(",").forEach(ee=>{W.some(l=>l.id===ee)&&c.push(ee)}):z&&A.has(z)&&(A.get(z)??[]).slice(0,2).forEach(ee=>c.push(ee.id)),!c.length){const ee=k.find(Z=>Z.category==="hvac"),l=k.find(Z=>Z.category==="sensor"),h=k.find(Z=>Z.category==="lighting");ee&&(A.get(ee.id)??[]).slice(0,2).forEach(Z=>c.push(Z.id)),l&&(A.get(l.id)??[]).slice(0,1).forEach(Z=>c.push(Z.id)),h&&(A.get(h.id)??[]).slice(0,1).forEach(Z=>c.push(Z.id)),c.length||W.slice(0,3).forEach(Z=>c.push(Z.id))}const w=new Set(c),_=new Set(k.filter((ee,l)=>l<2||(A.get(ee.id)??[]).some(h=>w.has(h.id))).map(ee=>ee.id)),H=[{id:"fav-hvac",name:"E7F 空调温控与 CO₂ 联动对照",pointIds:W.filter(ee=>ee.pointKey==="temp"||ee.pointKey==="setpoint"||ee.pointKey==="co2").slice(0,4).map(ee=>ee.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度与功率对比",pointIds:W.filter(ee=>ee.pointKey==="dimming"||ee.pointKey==="power").slice(0,4).map(ee=>ee.id),mode:"grouped",interval:"15m"}];let be="";async function pe(){const ee=q==="timeseries"?"energy":q,l=X==="custom"?"30d":X;de=await t.getAnalysisReport(ee,l,p.floorId),ne()}function ne(){if(!de)return;const ee=q==="timeseries",l=q==="timeseries"?"energy":q,h=We.find(C=>C.id===l)??We[0],Z=pt.find(C=>C.id===Q)??pt[0],se=Ot(de,Z.factor),Se=se.zoneBreakdown.filter(C=>C.status==="warning"),$e=zt[l],Ie=Math.max(...se.zoneBreakdown.map(C=>C.value),1),je=W.filter(C=>w.has(C.id));e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">数据分析</h1>
              ${Be({tree:ve,session:a,scope:y,isOpen:Y,searchKeyword:D})}
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px; width:108px;">
                <option value="today" ${X==="today"?"selected":""}>今日</option>
                <option value="7d" ${X==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${X==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${X==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${ee?"":`<button class="pacom-btn ${le?"pacom-btn--primary":""}" data-toggle-canvas="1">${le?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="分析维度">
            ${We.map(C=>`<button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${q===C.id}" data-cat="${C.id}">${C.label}</button>`).join("")}
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${q==="timeseries"}" data-cat="timeseries">多点时序</button>
          </nav>
          ${X==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${O}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${re}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${ee?`
            <div class="lov-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:296px; min-width:272px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">设备 → 测点树</span>
                    <span class="pacom-row-sub">已选 ${je.length} 个测点</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${H.map(C=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${C.id}">${me("star",14)}<span style="overflow:hidden;text-overflow:ellipsis;">${C.name}</span></button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${k.map(C=>{const r=A.get(C.id)??[],b=_.has(C.id),K=r.filter(ce=>w.has(ce.id)).length;return`
                        <div style="display:flex; flex-direction:column; gap:2px;">
                          <button type="button" class="pacom-row" data-ts-expand="${C.id}" style="cursor:pointer; justify-content:space-between;" title="${C.name}">
                            <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
                              <span style="display:inline-flex; transition:transform 140ms ease; transform:rotate(${b?"0deg":"-90deg"}); opacity:0.65;">${qt}</span>
                              <div style="min-width:0; flex:1; text-align:left;">
                                <div class="pacom-row-title" style="font-size:13px;">${C.name}</div>
                                <div class="pacom-row-sub">${r.length} 个测点 · ${C.connectivity==="online"?"在线":"离线"}</div>
                              </div>
                            </div>
                            ${K>0?`<span class="pacom-badge pacom-badge--accent">${K}</span>`:""}
                          </button>
                          ${b?`<div style="display:flex; flex-direction:column; gap:2px; padding-left:20px; padding-bottom:4px;">
                                  ${r.map(ce=>{const ie=w.has(ce.id),ke=Oe[ce.colorIdx%Oe.length];return`
                                        <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:5px 8px; border-radius:var(--pacom-radius-sm); cursor:pointer; font-size:12px; background:${ie?"var(--pacom-surface-recessed)":"transparent"};">
                                          <span style="display:inline-flex; align-items:center; gap:6px;">
                                            <input type="checkbox" name="tsPoint-${ce.id}" data-ts-point="${ce.id}" ${ie?"checked":""} />
                                            <span style="width:7px; height:7px; border-radius:50%; background:${ke};"></span>
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
                    <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:6px;">${me("clock",12)} 排程(S) · ${me("triangle-alert",12)} 告警(!) · 虚线为断流/上周同期</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>对比上周同期</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${i}" data-ts-compare="1" aria-label="叠加对比上周同期曲线">
                        <span class="lov-switch-thumb"></span>
                      </button>
                    </label>
                    <select class="pacom-select" name="tsInterval" data-ts-interval aria-label="采样粒度" style="height:28px; font-size:12px;">
                      <option value="15m" ${E==="15m"?"selected":""}>15 分钟</option>
                      <option value="1h" ${E==="1h"?"selected":""}>1 小时</option>
                      <option value="1d" ${E==="1d"?"selected":""}>1 天</option>
                    </select>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${m==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${m==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ts-share="1">复制分享链接</button>
                  </div>
                </div>
                ${_t(je,m,i)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="lov-kpi-strip" role="region" aria-label="核心统计指标">
                ${se.kpis.map(C=>{const r=Tt(C.value,C.unit);return`
                      <div class="lov-kpi-cell" title="${r.title}">
                        <span class="lov-kpi-label">${C.label}</span>
                        <div class="lov-kpi-value">
                          <span>${r.value}</span>
                          ${r.unit?`<span class="lov-kpi-unit">${r.unit}</span>`:""}
                        </div>
                        <span class="lov-kpi-delta">${C.delta??"与基线持平"}</span>
                      </div>`}).join("")}
              </div>

              <section class="lov-section">
                <div class="lov-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="lov-section-title">${h?.label??"趋势"}趋势（${se.unit}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${Z.label} · 更新于 ${se.updatedAt.slice(5,16).replace("T"," ")}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${ae}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
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
                      ${Se.length>0?`关注：${Se.map(C=>C.zoneName).join("、")} 指标偏高，建议前往智能策略优化启停时段。`:`${h?.desc??"空间运行洞察"} · ${$e.summary}`}
                    </span>
                    <button class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-strategy="1">去智能策略优化 →</button>
                  </div>
                  ${te==="chart"?Pt(se,ae):`
                      <div class="lov-table-wrap">
                        <table class="lov-table">
                          <thead>
                            <tr>
                              <th>统计时段</th>
                              <th>实测值（${se.unit}）</th>
                              <th>基线参考</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${se.series.map(C=>{const r=typeof C.baseline=="number"&&C.value>C.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${C.label}</strong></td>
                                    <td>${C.value.toLocaleString("en-US")}</td>
                                    <td>${C.baseline!==void 0?C.baseline.toLocaleString("en-US"):"-"}</td>
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
                    <span class="pacom-row-sub">${se.zoneBreakdown.length} 个功能区</span>
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
                          ${se.zoneBreakdown.map(C=>{const r=Math.max(8,Math.round(C.value/Ie*100));return`
                                <tr>
                                  <td style="font-weight:500;">${C.zoneName.replace(/^7F\s*/,"")}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${r}%; height:100%; border-radius:999px; background:${C.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${C.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${C.unit}</span></td>
                                  <td>
                                    <span class="pacom-badge ${C.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${C.status==="warning"?"偏高关注":"正常"}
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
                    <h2 class="lov-section-title">${le?"E7F 空间对照预览":l==="energy"&&oe==="load"?"峰谷负荷分布（Load Profile）":$e.title}</h2>
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
                        ${(l==="energy"&&oe==="load"?Dt:$e.items).map(C=>`
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                                <span style="font-weight:500; color:var(--pacom-text-primary);">${C.name}</span>
                                <span class="pacom-row-sub">${C.detail} · <strong style="color:var(--pacom-text-primary);">${C.pct}%</strong></span>
                              </div>
                              <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                <div style="width:${Math.min(100,C.pct)}%; height:100%; border-radius:999px; background:${C.color};"></div>
                              </div>
                            </div>`).join("")}`}
                  </div>
                </section>
              </div>
            </div>`}
      </div>
    `,Ve(e,{onToggle:()=>{Y=!Y,ne(),Y&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:C=>{D=C,ne();const r=e.querySelector("[data-global-space-search]");r&&(r.focus(),r.setSelectionRange(C.length,C.length))},onPick:C=>{y=C,Q=C.level==="all-projects"||C.level==="project"?p.projectId:C.level==="building"?p.buildingId:p.floorId,Y=!1,ne()}}),e.querySelectorAll("[data-cat]").forEach(C=>{C.addEventListener("click",()=>{q=C.dataset.cat??"energy",be="",q==="timeseries"?ne():pe()})}),e.querySelector("[data-range-select]")?.addEventListener("change",C=>{X=C.currentTarget.value??"7d",pe()}),e.querySelector("[data-custom-start]")?.addEventListener("change",C=>{O=C.currentTarget.value}),e.querySelector("[data-custom-end]")?.addEventListener("change",C=>{re=C.currentTarget.value}),e.querySelectorAll("[data-chart-mode]").forEach(C=>{C.addEventListener("click",()=>{te=C.dataset.chartMode??"chart",ne()})}),e.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{ae=!ae,ne()}),e.querySelectorAll("[data-energy-right]").forEach(C=>{C.addEventListener("click",()=>{oe=C.dataset.energyRight??"breakdown",ne()})}),e.querySelector("[data-export-csv]")?.addEventListener("click",()=>{ee?Vt(je):Bt(se)}),e.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{le=!le,ne()}),e.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),e.querySelectorAll("[data-ts-expand]").forEach(C=>{C.addEventListener("click",()=>{const r=C.dataset.tsExpand;r&&(_.has(r)?_.delete(r):_.add(r),ne())})}),e.querySelectorAll("[data-ts-point]").forEach(C=>{C.addEventListener("change",()=>{const r=C.dataset.tsPoint;r&&(C.checked?w.add(r):w.delete(r),be="",ne())})}),e.querySelectorAll("[data-ts-mode]").forEach(C=>{C.addEventListener("click",()=>{m=C.dataset.tsMode??"grouped",ne()})}),e.querySelector("[data-ts-interval]")?.addEventListener("change",C=>{E=C.currentTarget.value??"1h",ne()}),e.querySelector("[data-ts-compare]")?.addEventListener("click",()=>{i=!i,ne()}),e.querySelector("[data-ts-share]")?.addEventListener("click",()=>{const r=`#analysis?tab=timeseries&points=${encodeURIComponent(Array.from(w).join(","))}&mode=${m}&interval=${E}`,b=`${window.location.origin}${window.location.pathname}${r}`;navigator.clipboard?.writeText&&navigator.clipboard.writeText(b).catch(()=>{}),window.history.replaceState(null,"",r),be=`已复制分享链接（含 ${w.size} 个测点、${m==="grouped"?"按单位分组":"单图叠合"}、${E} 粒度）。`,ne()}),e.querySelectorAll("[data-load-fav]").forEach(C=>{C.addEventListener("click",()=>{const r=H.find(b=>b.id===C.dataset.loadFav);r&&(w.clear(),r.pointIds.forEach(b=>{w.add(b);const K=b.split(":")[0];K&&_.add(K)}),m=r.mode,E=r.interval,be=`已加载收藏视图「${r.name}」。`,ne())})}),e.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if(w.size===0)return;const C=`自定义对比 #${H.length+1}（${w.size} 测点）`;H.push({id:`fav-${Date.now()}`,name:C,pointIds:Array.from(w),mode:m,interval:E}),be=`已保存当前时序配置为「${C}」。`,ne()})}await pe()}const Ht={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},Wt={frozen:"已冻结",draft:"草稿",delivered:"已交付"},at=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"每层建议 2–3 个 Proxy，空旷 20–30m 或拐角可按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 避免广播干扰；自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度 0–10 级调光；自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造；支持通断控制"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay 保障吞吐"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"1 层 1 网标准配置，承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙/拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关接入，无需加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485/通讯管理机接入，记录厂家编码与表号"}],st=[{id:"doc-hvac-7f",name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",name:"E7F_协议点位与蓝牙Mesh映射台账.xlsx",category:"点位台账",boundScope:"E栋 7F · 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}],Zt={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function j(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function ut(e){const t=e.match(/(-?\d+)/);if(!t)return 0;const a=Number(t[1]);return e.toUpperCase().startsWith("B")?-Math.abs(a):a}function Gt(e){return e.category==="gateway"?e.name.includes("蓝牙")?"蓝牙适配器":"主控网关":e.category==="lighting"?e.name.includes("702")?"702 照明":e.name.slice(0,6):e.category==="hvac"?e.name.includes("VAV")?"VAV-02":e.name.includes("FCU")?"FCU-01":e.name.slice(0,6):e.category==="sensor"?"环境传感":e.name.slice(0,6)}function Kt(e,t){const a=e.status!=="connected",s=t.filter(n=>n.hardwareBinding?.protocol===e.protocol);return s.length>0?s.map(n=>{const d=n.connectivity==="offline"||a;return{pointName:n.category==="hvac"?"送风温度 / 阀门开度":n.category==="lighting"?"回路开关 / 亮度反馈":n.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:n.name,value:d?"无上报":n.category==="hvac"?"23.4°C · 62%":n.category==="lighting"?"开启 · 80%":n.category==="sensor"?"23.2°C · 640 ppm":"负载 24% · 18ms",interval:"60s",lastSeen:d?"46 分钟前":"12 秒前",quality:d?n.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${e.protocol.toUpperCase()} 采集通道汇总点`,deviceName:e.name,value:a?"采样延迟":"正常上报",interval:"60s",lastSeen:a?"38 分钟前":"9 秒前",quality:a?"delayed":"online"}]}async function Yt(e,t,a){const s=new URLSearchParams(window.location.hash.split("?")[1]??"").get("sec");let n=s==="floors"?"floor_zones":s==="projects"?"project_building":s==="floorplan"||s==="devices"?"floorplan":s==="inventory"?"ledger":s==="connections"?"connections":"overview",d=_e(),z=!1,B="",R="device",J="all",q="",X=!1,O=!1,re="mesh",y=1,Y=0,D=0,Q=await t.getSpatialTree(),te=[],ae=[],oe=[];const le=[],de=new Map,ve=new Map,fe=[],k={...Zt},A=[];let W=d.level==="floor"?d.floorId:p.floorId,m=d.level==="building"||d.level==="floor"?d.buildingId:p.buildingId,E=null,i=!1,c=!1,w=!1,_=!1,H=!1,be=null,pe=null,ne=null,ee=3,l=!1,h=[],Z=null,se="",Se="";const $e=new Map([["dev-e7f-gw-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-02",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-env-01",{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}]]),Ie=[{id:"lm-1",deviceId:"dev-e7f-lt-01",channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],je=[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:p.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:p.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:p.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:p.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],C=new Map;function r(){return{...Q,floors:b(),zones:ce()}}function b(){return[...Q.floors,...le].map($=>{const U=de.get($.id);return U?{...$,plan:{floorId:$.id,imageUrl:U,planVersion:($.plan?.planVersion??0)+1,updatedAt:new Date().toISOString()}}:$})}function K($){return[...b().filter(U=>U.buildingId===$)].sort((U,o)=>ut(o.name)-ut(U.name))}function ce(){return[...Q.zones,...fe]}function ie($){return[...$===p.floorId?te:[],...A.filter(o=>o.floorId===$)]}function ke($){return $?ce().find(U=>U.id===$)?.name.replace(/^7F\s*/,"")??$:"未分配功能区"}function De($){W=$;const U=b().find(o=>o.id===$);U&&(m=U.buildingId,d=ct({level:"floor",projectId:p.projectId,buildingId:U.buildingId,floorId:U.id})),E=null,O=!1,c=!1,y=1,Y=0,D=0}async function Le(){Se="";const[$,U,o,v]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(p.floorId).catch(()=>[]),t.listConnections(p.projectId),t.listDeliveryBatches(p.floorId)]);Q=$,te=U,ae=o,oe=v;const u=ie(W);E&&!u.some(ge=>ge.id===E)&&(E=null,O=!1),i=u.find(ge=>ge.id===E)?.physicalInstalled??!1,I()}function Ae(){const $=e.querySelector('[data-role="dep-viewport"]');$&&($.style.transform=`translate(${Y}px, ${D}px) scale(${y})`);const U=e.querySelector('[data-role="dep-zoom-label"]');U&&(U.textContent=`${Math.round(y*100)}%`)}function Ne($){Se="",$.connectivity==="offline"?Se=`单机回读自检未通过（FAIL）：「${$.name}」当前离线，请核查网关链路或中继覆盖。`:se=`单机回读自检通过（PASS）：「${$.name}」指令下发与状态回读一致，已安全复位。`,I()}function Te(){Se="";const $=ie(W),U=$.filter(L=>L.connectivity==="offline"),o=$.length-U.length,v=new Date;Z={ranAt:`${String(v.getHours()).padStart(2,"0")}:${String(v.getMinutes()).padStart(2,"0")}:${String(v.getSeconds()).padStart(2,"0")}`,total:$.length,passed:o,failed:U.length,failedNames:U.map(L=>L.name)},U.length>0?Se=`全层批量自检完成：${o}/${$.length} 台通过，${U.length} 台异常（${U.map(L=>L.name).join("、")}）。`:se=`全层批量自检全部通过（${o}/${$.length}），设备已自动安全复位。`,I()}function xe(){const $=ie(W),U=[],o=$.filter(G=>G.connectivity==="offline"),v=$.filter(G=>!G.planPoint),u=$.filter(G=>$e.get(G.id)?.proxy).length,L=$.filter(G=>$e.get(G.id)?.relay).length,ge=$.length?L/$.length:0;o.length>0?o.forEach(G=>U.push({level:"fail",title:`节点不可达：${G.name}`,detail:"建议检查供电、通信端子，若属无线节点可在遮挡拐角处增设中继节点。",deviceId:G.id})):U.push({level:"ok",title:"全网节点可达性正常",detail:`${$.length} 台设备均正常响应心跳。`}),u<1?U.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，方便现场 App 接入网络。"}):U.push({level:"ok",title:`代理节点配置合理（${u} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),ge>.25&&$.length>=4&&U.push({level:"warn",title:`中继比例偏高（${Math.round(ge*100)}%）`,detail:"建议中继节点控制在总设备数 10% 左右，避免广播风暴。"}),v.length>0&&U.push({level:"warn",title:`尚有 ${v.length} 台未完成图纸标点`,detail:"请在「图纸标点」中补齐坐标以便施工定位。"}),h=U,se=`已完成蓝牙 Mesh 网络体检（检测 ${$.length} 台节点，发现 ${U.filter(G=>G.level!=="ok").length} 项关注）。`,I()}function Ye(){const $=ie(W),U=[["设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...$.map(L=>[L.name,L.category,ke(L.logicalZoneId),L.planPoint?`${Math.round(L.planPoint.x*100)}%/${Math.round(L.planPoint.y*100)}%`:"未标点",L.hardwareBinding?`${L.hardwareBinding.protocol} ${L.hardwareBinding.networkAddress}`:"未绑定",L.physicalInstalled?"已复核":"待复核",L.connectivity==="online"?"在线":"离线"].join(","))],o=new Blob([`\uFEFF${U.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),v=URL.createObjectURL(o),u=document.createElement("a");u.href=v,u.download="pacom-deployment-inventory.csv",u.click(),URL.revokeObjectURL(v)}function x(){const $=b().filter(u=>u.buildingId===m),U=ie(W),o=ae.filter(u=>u.status!=="connected").length,v=(u,L,ge)=>`
      <button type="button" class="lov-subnav-item" aria-current="${n===u}" data-dep-nav="${u}">
        <span>${L}</span>
        ${ge?`<span class="pacom-row-sub" style="font-size:11px;">${ge}</span>`:""}
      </button>`;return`
      <aside class="lov-subnav-rail" style="width:196px;" aria-label="系统部署菜单">
        <div class="lov-subnav-group">
          ${v("overview","部署总览",`${$.filter(u=>u.plan).length}/${$.length}`)}
        </div>
        <div class="lov-subnav-group">
          <div class="lov-subnav-group-title">项目配置</div>
          ${v("project_building","项目与楼宇")}
          ${v("floor_zones","楼层底图与分区",`${$.length} 层`)}
        </div>
        <div class="lov-subnav-group">
          <div class="lov-subnav-group-title">设备部署</div>
          ${v("floorplan","图纸标点",`${U.filter(u=>u.planPoint).length}/${U.length}`)}
          ${v("ledger","设备台账",`${U.length}`)}
          ${v("groups","双轨分组",`${je.length}`)}
          ${v("network_topo","网络与拓扑",l?"待同步":void 0)}
        </div>
        <div class="lov-subnav-group">
          ${v("connections","系统接入",o>0?`${o} 降级`:`${ae.length}`)}
        </div>
      </aside>
    `}function V($){return n==="overview"?`
        <button type="button" class="pacom-btn" data-export-inv="1">导出台账</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${$?"":"disabled"}>+ 交付冻结</button>
      `:n==="floorplan"?'<button type="button" class="pacom-btn" data-export-inv="1">导出施工标点表</button>':n==="ledger"?'<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ftt="1">一键全层自检 (FTT)</button>':n==="groups"?`<button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-group="1" ${$?"":"disabled"}>${H?"收起表单":"+ 新建分组"}</button>`:n==="network_topo"?`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">一键网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${$?"":"disabled"}>${l?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `:n==="connections"?`
        <button type="button" class="pacom-btn" data-edge-restart="service" ${$?"":"disabled"}>重启边缘服务</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-conn="1" ${$?"":"disabled"}>${_?"收起向导":"+ 新增接入通道"}</button>
      `:`<span class="pacom-badge ${$?"pacom-badge--online":"pacom-badge--warning"}">${$?"可编辑":"只读"}</span>`}function M(){const $=K(m),U=$.filter(G=>!!G.plan).length,o=$.flatMap(G=>ie(G.id)),v=o.filter(G=>!!G.planPoint).length,u=o.filter(G=>G.connectivity==="online").length,L=o.filter(G=>G.physicalInstalled).length,ge=$.filter(G=>ie(G.id).length>0&&!l).length;return`
      <div class="lov-kpi-strip lov-kpi-strip--5" role="region" aria-label="整栋 5 步部署流水线">
        <button type="button" class="lov-kpi-cell ${U===$.length?"lov-gate-ok":"lov-gate-warn"}" data-dep-nav="floor_zones" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="lov-kpi-label">1. 空间与底图</span>
          <div class="lov-kpi-value">${U}<span class="lov-kpi-unit">/ ${$.length} 层</span></div>
          <span class="lov-kpi-delta">${U===$.length?"全部底图就绪":`尚缺 ${$.length-U} 层底图 →`}</span>
        </button>
        <button type="button" class="lov-kpi-cell ${v===o.length?"lov-gate-ok":"lov-gate-warn"}" data-dep-nav="floorplan" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="lov-kpi-label">2. 云端标点</span>
          <div class="lov-kpi-value">${v}<span class="lov-kpi-unit">/ ${o.length} 台</span></div>
          <span class="lov-kpi-delta">含 ${Ie.length} 处回路灯点</span>
        </button>
        <button type="button" class="lov-kpi-cell ${u===o.length?"lov-gate-ok":"lov-gate-warn"}" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="lov-kpi-label">3. 入网在线</span>
          <div class="lov-kpi-value">${u}<span class="lov-kpi-unit">/ ${o.length} 台</span></div>
          <span class="lov-kpi-delta">${o.length-u>0?`${o.length-u} 台离线 →`:"全量在线"}</span>
        </button>
        <button type="button" class="lov-kpi-cell ${l?"lov-gate-warn":"lov-gate-ok"}" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="lov-kpi-label">4. 边缘同步</span>
          <div class="lov-kpi-value">${ge}<span class="lov-kpi-unit">/ ${$.length} 层</span></div>
          <span class="lov-kpi-delta">${l?"有变更待下发 →":`基线 v${ee}`}</span>
        </button>
        <button type="button" class="lov-kpi-cell ${L===o.length?"lov-gate-ok":"lov-gate-warn"}" data-dep-nav="ledger" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="lov-kpi-label">5. 复核自检</span>
          <div class="lov-kpi-value">${L}<span class="lov-kpi-unit">/ ${o.length} 台</span></div>
          <span class="lov-kpi-delta">${L===o.length?"可交付冻结":`待复核 ${o.length-L} 台 →`}</span>
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
                ${$.map(G=>{const S=ie(G.id),we=ce().filter(Pe=>Pe.floorId===G.id),P=S.filter(Pe=>!!Pe.planPoint).length,ze=S.filter(Pe=>Pe.connectivity==="online").length,Xe=S.filter(Pe=>Pe.physicalInstalled).length,Qe=!!G.plan,dt=Qe&&S.length>0&&P===S.length&&Xe===S.length&&ze===S.length&&!l;return`
                      <tr>
                        <td><strong>${j(G.name)}</strong><div class="pacom-row-sub">${G.areaSqm?`${G.areaSqm} m²`:"待补面积"}</div></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="floor_zones" data-matrix-floor="${j(G.id)}"><span class="pacom-dot ${Qe?"pacom-dot--online":"pacom-dot--offline"}"></span><span>${Qe?`已传图 · ${we.length} 区`:"待传底图"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="floorplan" data-matrix-floor="${j(G.id)}"><span class="pacom-dot ${S.length>0&&P===S.length?"pacom-dot--online":S.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${S.length>0?`${P}/${S.length}`:"未标点"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${j(G.id)}"><span class="pacom-dot ${S.length>0&&ze===S.length?"pacom-dot--online":S.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${S.length>0?`${ze}/${S.length}`:"—"}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${j(G.id)}"><span class="pacom-dot ${S.length===0?"pacom-dot--offline":l?"pacom-dot--warning":"pacom-dot--online"}"></span><span>${S.length===0?"—":l?"待同步":`v${ee}`}</span></button></td>
                        <td><button type="button" class="dep-matrix-btn" data-matrix-nav="ledger" data-matrix-floor="${j(G.id)}"><span class="pacom-dot ${S.length>0&&Xe===S.length?"pacom-dot--online":S.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${S.length>0?`${Xe}/${S.length}`:"—"}</span></button></td>
                        <td style="text-align:right;"><span class="pacom-badge ${dt?"pacom-badge--online":S.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">${dt?"可验收交付":S.length>0?"实施中":"待配置"}</span></td>
                      </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      ${Z?`<div class="lov-banner ${Z.failed===0?"lov-banner--ok":"lov-banner--critical"}">
              <div class="lov-banner-text">
                <span class="lov-banner-title">最近批量自检（FTT） · ${Z.ranAt}</span>
                <span class="lov-banner-sub">通过 ${Z.passed}/${Z.total} 台${Z.failedNames.length?` · 异常：${Z.failedNames.join("、")}`:" · 全部安全复位"}</span>
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
                ${oe.map(G=>`
                    <tr>
                      <td><div style="font-weight:500;">${j(G.versionTag)}</div><div class="pacom-row-sub"><code>${j(G.id)}</code></div></td>
                      <td><strong>${G.verifiedCount}</strong> / ${G.deviceCount} 台</td>
                      <td><div>${j(G.frozenBy)}</div><div class="pacom-row-sub">${j(G.note??"-")}</div></td>
                      <td><span class="pacom-badge pacom-badge--accent">${Wt[G.status]??G.status}</span></td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function g($){const U=Q.projects[0],o=Q.buildings.find(v=>v.id===m)??Q.buildings[0];return`
      <div style="width:100%; max-width:960px; display:flex; flex-direction:column; gap:20px;">
        <section class="lov-section">
          <div class="lov-section-head">
            <h2 class="lov-section-title">项目基础信息</h2>
            <span class="pacom-badge pacom-badge--accent">经纬度驱动气象与能耗基准</span>
          </div>
          <form class="lov-settings-card" data-save-project="1">
            <div class="lov-setting-row">
              <div class="lov-setting-meta"><span class="lov-setting-title">项目名称与城市</span><span class="lov-setting-desc">用于全局路径导航与多园区地图定位</span></div>
              <div class="lov-setting-control"><input class="pacom-input" name="pName" value="${j(U?.name??"广实2号园")}" style="width:180px;" ${$?"":"disabled"} /><input class="pacom-input" name="pCity" value="${j(U?.city??"广州市")}" style="width:120px;" ${$?"":"disabled"} /></div>
            </div>
            <div class="lov-setting-row">
              <div class="lov-setting-meta"><span class="lov-setting-title">详细地址与地理坐标</span><span class="lov-setting-desc">自动匹配周边气象站实况温度与湿度</span></div>
              <div class="lov-setting-control"><input class="pacom-input" name="pAddr" value="${j(U?.address??"")}" style="width:220px;" ${$?"":"disabled"} /><input class="pacom-input" name="pLngLat" value="113.3824, 23.0652" style="width:150px;" ${$?"":"disabled"} /></div>
            </div>
            <div class="lov-setting-row" style="justify-content:flex-end;">
              <button type="submit" class="pacom-btn pacom-btn--primary" ${$?"":"disabled"}>保存项目信息</button>
            </div>
          </form>
        </section>

        ${o?`
            <section class="lov-section">
              <div class="lov-section-head">
                <h2 class="lov-section-title">楼宇实景图：${j(o.name)}</h2>
                <span class="pacom-row-sub">建筑面积 ${o.areaSqm??"-"} m² · 地上 ${o.aboveFloors} 层</span>
              </div>
              <div class="pacom-card" style="gap:14px;">
                <div style="display:grid; grid-template-columns:minmax(0,1.2fr) minmax(240px,1fr); gap:16px; align-items:center;">
                  <div style="border-radius:12px; overflow:hidden; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                    <img src="${j(ve.get(o.id)??o.imageUrl??"./media/building-e.png")}" alt="${j(o.name)}" style="width:100%; max-height:240px; object-fit:contain; display:block;" />
                  </div>
                  <div class="dep-upload-drop">
                    <strong style="font-size:13px; font-weight:500;">上传 / 替换楼宇实景图</strong>
                    <span class="pacom-row-sub">支持 PNG / WebP / JPG，用于空间总览整栋视图展示</span>
                    <label class="pacom-btn" style="cursor:pointer;">
                      <span>选择本地图片</span>
                      <input type="file" accept="image/*" data-upload-bld="${j(o.id)}" style="display:none;" ${$?"":"disabled"} />
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
              <form class="lov-settings-card" data-batch-floors="${j(o.id)}">
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
    `}function f($){const U=K(m),o=U.find(u=>u.id===W)??U[0],v=o?ce().filter(u=>u.floorId===o.id):[];return`
      <div style="width:100%; max-width:960px; display:flex; flex-direction:column; gap:20px;">
        <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
          ${U.map(u=>`
              <button type="button" class="lov-count-pill" aria-pressed="${o?.id===u.id}" data-pick-floor-pill="${j(u.id)}">
                <span class="pacom-dot ${u.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                <span>${j(u.name)}</span>
              </button>`).join("")}
        </div>

        ${o?`
            <section class="lov-section">
              <div class="lov-section-head">
                <div style="display:flex; align-items:center; gap:8px;">
                  <h2 class="lov-section-title">${j(o.name)} · 2D 平面底图</h2>
                  <span class="pacom-badge pacom-badge--online">蓝牙 Mesh 网络已初始化</span>
                </div>
                <button type="button" class="pacom-btn pacom-btn--primary" data-dep-nav="floorplan">进入本层图纸标点 →</button>
              </div>
              <div class="pacom-card" style="gap:14px;">
                <div style="display:grid; grid-template-columns:minmax(0,1.35fr) minmax(240px,1fr); gap:16px; align-items:center;">
                  <div style="border-radius:12px; overflow:hidden; background:var(--pacom-surface-primary); min-height:200px; display:flex; align-items:center; justify-content:center; border:var(--hw) solid var(--pacom-border-subtle);">
                    ${o.plan?`<img src="${j(o.plan.imageUrl)}" alt="${j(o.name)} 平面图" style="width:100%; max-height:280px; object-fit:contain; display:block;" />`:'<span class="pacom-row-sub">暂未上传 2D 平面底图，请在右侧选择真实图纸</span>'}
                  </div>
                  <div class="dep-upload-drop">
                    <strong style="font-size:13px; font-weight:500;">${o.plan?"替换本层 2D 平面底图":"上传本层 2D 平面底图"}</strong>
                    <span class="pacom-row-sub">推荐清晰建筑线条 PNG / WebP（宽度 ≤ 3000px，体积 ≤ 500KB）</span>
                    <label class="pacom-btn pacom-btn--primary" style="cursor:pointer;">
                      <span>选择真实平面图</span>
                      <input type="file" accept="image/*" data-upload-floor="${j(o.id)}" style="display:none;" ${$?"":"disabled"} />
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
                ${v.map(u=>`
                    <div class="lov-setting-row" style="padding:11px 0;">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">${j(u.name)} <span class="pacom-badge pacom-badge--neutral">${j(u.category)}</span></span>
                      </div>
                      <span class="pacom-row-sub">${ie(o.id).filter(L=>L.logicalZoneId===u.id).length} 台设备</span>
                    </div>`).join("")}
                <form class="lov-setting-row" style="padding:12px 0; gap:8px;" data-add-zone="${j(o.id)}">
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
                <span class="pacom-row-sub">共 ${st.length} 份工程文档</span>
              </div>
              <div class="lov-table-card">
                <div class="lov-table-wrap">
                  <table class="lov-table">
                    <thead><tr><th>文档名称</th><th>类型</th><th>关联范围</th><th style="text-align:right;">操作</th></tr></thead>
                    <tbody>
                      ${st.map(u=>`
                        <tr>
                          <td><div style="font-weight:500;">${u.name}</div><div class="pacom-row-sub">${u.size} · ${u.updatedAt}</div></td>
                          <td><span class="pacom-badge pacom-badge--neutral">${u.category}</span></td>
                          <td><span class="pacom-row-sub">${u.boundScope}</span></td>
                          <td style="text-align:right;"><button type="button" class="pacom-btn" data-preview-doc="${u.id}">查阅</button></td>
                        </tr>`).join("")}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>`:""}
      </div>
    `}function N($){const U=K(m),o=U.find(P=>P.id===W)??U[0],v=ie(W),u=ce().filter(P=>P.floorId===W),L=O?v.find(P=>P.id===E)??null:null,ge=L?$e.get(L.id)??{proxy:!1,relay:!1,meshUuid:`mesh-${W.slice(-4)}`}:null,G=L?Ie.filter(P=>P.deviceId===L.id):[],S=q.trim().toLowerCase(),we=v.filter(P=>!(J==="unverified"&&P.physicalInstalled||J==="unplaced"&&P.planPoint||S&&!`${P.name} ${ke(P.logicalZoneId)}`.toLowerCase().includes(S)));return`
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(420px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${me("search",14)}
            <input class="pacom-hud-input" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${j(q)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill ${X?"is-active":""}" data-toggle-hud-pool="1">设备池 ${v.length}</button>
            <button type="button" class="pacom-hud-pill" data-toggle-new-dev="1" ${$?"":"disabled"}>+ 标点</button>
          </div>

          ${X||w?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:13px; font-weight:500;">${w?"新增设备标点":`${j(o?.name??"7F")} 设备池（${we.length}）`}</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${me("x",14)}</button>
                </div>
                ${w?`
                    <form data-create-dev="1" style="padding:12px; display:flex; flex-direction:column; gap:8px;">
                      <input class="pacom-input" name="devName" placeholder="设备名称（如：703 会议室三控面板）" required />
                      <select class="pacom-select" name="devPreset">${at.map(P=>`<option value="${P.key}">${P.label}</option>`).join("")}</select>
                      <select class="pacom-select" name="devZone">${u.map(P=>`<option value="${j(P.id)}">${j(P.name)}</option>`).join("")}</select>
                      <button type="submit" class="pacom-btn pacom-btn--primary">加入图纸并预设 Mesh 角色</button>
                    </form>`:`
                    <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                      <div class="lov-count-pills">
                        <button type="button" class="lov-count-pill" style="height:24px; padding:0 8px; font-size:11px;" aria-pressed="${J==="all"}" data-dev-filter="all">全部 <span class="lov-count-num">${v.length}</span></button>
                        <button type="button" class="lov-count-pill" style="height:24px; padding:0 8px; font-size:11px;" aria-pressed="${J==="unverified"}" data-dev-filter="unverified">待复核 <span class="lov-count-num">${v.filter(P=>!P.physicalInstalled).length}</span></button>
                        <button type="button" class="lov-count-pill" style="height:24px; padding:0 8px; font-size:11px;" aria-pressed="${J==="unplaced"}" data-dev-filter="unplaced">未标点 <span class="lov-count-num">${v.filter(P=>!P.planPoint).length}</span></button>
                      </div>
                    </div>
                    <div class="pacom-list" style="padding:6px;">
                      ${we.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">无匹配设备</div>':we.map(P=>`
                                <div class="pacom-row ${P.id===E&&O?"is-selected":""}" data-pick-dev="${j(P.id)}" style="padding:8px;">
                                  <div style="min-width:0;">
                                    <div class="pacom-row-title" style="font-size:13px;">${j(P.name)}</div>
                                    <div class="pacom-row-sub">${j(ke(P.logicalZoneId))} · ${P.physicalInstalled?"已复核":"待复核"}</div>
                                  </div>
                                  <span class="pacom-badge ${P.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${P.planPoint?"已标点":"未标点"}</span>
                                </div>`).join("")}
                    </div>`}
              </div>`:""}
        </div>

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${c?"crosshair":"grab"};">
          ${o?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${Y}px, ${D}px) scale(${y});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${j(o.plan.imageUrl)}" alt="${j(o.name)} 平面图" />
                  ${R==="zone"?u.map(P=>{const ze=k[P.id];return ze?`<div class="pacom-zone-hotspot is-active" style="left:${ze.left}%; top:${ze.top}%; width:${ze.width}%; height:${ze.height}%;"><span class="pacom-zone-tag">${j(P.name.replace(/^7F\s*/,""))}</span></div>`:""}).join(""):""}
                  ${v.filter(P=>P.planPoint).map(P=>`
                      <button type="button" class="pacom-pin ${P.id===E&&O?"is-selected":""} ${P.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(P.planPoint.x*100).toFixed(2)}%; top:${(P.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${j(P.id)}" title="${j(P.name)}">
                        <span class="pacom-dot ${P.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${j(Gt(P))}</span>
                      </button>`).join("")}
                  ${R==="light_marker"||L?.category==="lighting"?Ie.filter(P=>v.some(ze=>ze.id===P.deviceId)).map(P=>`
                            <span class="dep-light-dot" style="left:${(P.x*100).toFixed(1)}%; top:${(P.y*100).toFixed(1)}%;" title="${j(P.label)}（${j(P.channel)}）">
                              ${me("sparkles",12)}<span>${j(P.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-dep-nav="floor_zones">前往「楼层底图与分区」上传真实底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${U.map(P=>`
              <button type="button" class="pacom-elev-item ${P.id===W?"is-active":""}" data-scrubber-floor="${j(P.id)}" title="${j(P.name)}${P.plan?" · 已传底图":" · 待传底图"}">
                ${P.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${j(P.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标点画笔与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${R==="device"}" data-brush="device">设备标点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${R==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${R==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${me("minus",14)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(y*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${me("plus",14)}</button>
        </div>

        ${L?`
            <aside class="pacom-drawer" aria-label="设备部署属性">
              <div class="pacom-drawer-head">
                <div style="min-width:0;">
                  <h2 class="pacom-drawer-title">${j(L.name)}</h2>
                  <div class="pacom-row-sub">${j(ke(L.logicalZoneId))} · v${L.version}</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${me("x",16)}</button>
              </div>

              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-toggle-place="1" ${$?"":"disabled"}>${c?"点击图纸定位中…":"点图更新坐标"}</button>
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ping-dev="${j(L.id)}">Ping 闪灯 5s</button>
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ftt-test="1">单机自检</button>
              </div>

              ${L.category==="lighting"?`
                  <div class="pacom-control-box" style="gap:6px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span style="font-size:12px; font-weight:500;">回路可视化灯点（${G.length}）</span>
                      <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:11px;" data-add-light-marker="${j(L.id)}" ${$?"":"disabled"}>+ 添加灯点</button>
                    </div>
                    ${G.map(P=>`
                        <div class="pacom-receipt-item" style="padding:6px 8px; font-size:12px;">
                          <span><strong>${j(P.channel)}</strong> · ${j(P.label)}</span>
                          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:20px; padding:0 6px; font-size:11px;" data-del-light-marker="${j(P.id)}" ${$?"":"disabled"}>删</button>
                        </div>`).join("")}
                  </div>`:""}

              ${L.category!=="hvac"&&L.category!=="meter"&&ge?`
                  <div class="pacom-control-box" style="gap:6px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span style="font-size:12px; font-weight:500;">蓝牙 Mesh 节点角色</span>
                      <code style="font-size:11px;">${j(ge.meshUuid)}</code>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                      <span>Proxy 代理（建议每层 2–3 个）</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${ge.proxy}" data-toggle-mesh-role="proxy" data-mesh-dev="${j(L.id)}" ${$?"":"disabled"}><span class="lov-switch-thumb"></span></button>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                      <span>Relay 中继（建议 ≤10%，面板默认关）</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${ge.relay}" data-toggle-mesh-role="relay" data-mesh-dev="${j(L.id)}" ${$?"":"disabled"}><span class="lov-switch-thumb"></span></button>
                    </div>
                  </div>`:""}

              <form data-role="binding-form" class="pacom-control-box" style="gap:8px;">
                <span style="font-size:12px; font-weight:500;">硬件绑定与物理安装复核</span>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
                  <select class="pacom-select" style="height:28px; font-size:12px;" name="protocol" aria-label="通信协议">
                    ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(P=>`<option value="${P}" ${L.hardwareBinding?.protocol===P?"selected":""}>${P.toUpperCase()}</option>`).join("")}
                  </select>
                  <input class="pacom-input" style="height:28px; font-size:12px;" name="networkAddress" placeholder="网络地址/主题" value="${j(L.hardwareBinding?.networkAddress??"")}" />
                </div>
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                  <input class="pacom-input" style="height:28px; font-size:12px;" name="portOrChannel" placeholder="端口/回路" value="${j(L.hardwareBinding?.portOrChannel??"")}" />
                  <span style="display:inline-flex; align-items:center; gap:6px; font-size:12px; flex-shrink:0;">
                    <span>物理已复核</span>
                    <button type="button" class="lov-switch" role="switch" aria-checked="${i}" data-toggle-phys="1" ${$?"":"disabled"}><span class="lov-switch-thumb"></span></button>
                  </span>
                </div>
                <button class="pacom-btn pacom-btn--primary" type="submit" style="height:30px; font-size:13px;" ${$?"":"disabled"}>保存绑定与复核（v${L.version}）</button>
              </form>
            </aside>`:""}
      </main>
    `}function F($){const U=ie(W),o=be?U.find(u=>u.id===be)??null:null,v=o?C.get(o.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450}:null;return`
      ${o&&v?`
          <form class="lov-settings-card" data-save-dev-params="${j(o.id)}">
            <div class="lov-setting-row">
              <div class="lov-setting-meta">
                <span class="lov-setting-title">设备参数配置：${j(o.name)}</span>
                <span class="lov-setting-desc">人感自动关灯延时、光照度开关门限与默认亮度参数</span>
              </div>
              <button type="button" class="pacom-drawer-close" data-close-param="1">${me("x",16)}</button>
            </div>
            <div class="lov-setting-row" style="display:grid; grid-template-columns:repeat(4,1fr); gap:10px;">
              <label class="pacom-field"><span>自动关灯延时(分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${v.offDelayMin}" /></label>
              <label class="pacom-field"><span>恢复自动延时(分)</span><input class="pacom-input" name="restoreMin" type="number" value="${v.restoreMin}" /></label>
              <label class="pacom-field"><span>开灯光感门限(lx)</span><input class="pacom-input" name="luxOn" type="number" value="${v.luxOn}" /></label>
              <label class="pacom-field"><span>关灯光感门限(lx)</span><input class="pacom-input" name="luxOff" type="number" value="${v.luxOff}" /></label>
            </div>
            <div class="lov-setting-row" style="justify-content:flex-end;">
              <button type="submit" class="pacom-btn pacom-btn--primary" ${$?"":"disabled"}>下发设备参数</button>
            </div>
          </form>`:""}
      <section class="lov-section">
        <div class="lov-section-head">
          <h2 class="lov-section-title">设备四态台账（${U.length} 台）</h2>
          <span class="pacom-row-sub">图上标点 · 网络绑定 · 物理复核 · 在线态</span>
        </div>
        <div class="lov-table-card">
          <div class="lov-table-wrap">
            <table class="lov-table">
              <thead><tr><th>设备与功能区</th><th>1. 图上标点</th><th>2. 网络绑定</th><th>3. 物理复核</th><th>4. 在线态</th><th style="text-align:right;">操作</th></tr></thead>
              <tbody>
                ${U.map(u=>`
                    <tr>
                      <td><div style="font-weight:500;">${j(u.name)}</div><div class="pacom-row-sub">${j(ke(u.logicalZoneId))} · v${u.version}</div></td>
                      <td><span class="pacom-badge ${u.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${u.planPoint?`${Math.round(u.planPoint.x*100)}%,${Math.round(u.planPoint.y*100)}%`:"未标点"}</span></td>
                      <td><span class="pacom-badge ${u.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${u.hardwareBinding?u.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                      <td><span class="pacom-badge ${u.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${u.physicalInstalled?"已复核":"待复核"}</span></td>
                      <td><span class="pacom-badge ${u.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${u.connectivity==="online"?"在线":"离线"}</span></td>
                      <td>
                        <div style="display:flex; justify-content:flex-end; gap:6px;">
                          <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ping-dev="${j(u.id)}">Ping</button>
                          <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-open-param="${j(u.id)}">参数</button>
                          <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ftt-dev="${j(u.id)}">自检</button>
                        </div>
                      </td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function ue(){const $=je.filter(o=>o.track==="mesh_auto"),U=je.filter(o=>o.track==="cloud_biz");return`
      ${H?`
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
                    <span class="lov-setting-title">${j(o.name)} <span class="pacom-badge pacom-badge--neutral">${j(o.groupType)}</span></span>
                    <span class="lov-setting-desc">成员 ${o.deviceIds.length} 台 · 断网仍可端侧自治联动</span>
                  </div>
                  <div class="lov-setting-control"><button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-test-group="${j(o.id)}">组控测试</button></div>
                </div>`).join("")}
          </div>
        </section>

        <section class="lov-section">
          <div class="lov-section-head">
            <h2 class="lov-section-title">云端业务分组（${U.length}）</h2>
            <span class="pacom-row-sub">空调 / 标牌 / 部门组，无需蓝牙配网</span>
          </div>
          <div class="lov-settings-card">
            ${U.map(o=>`
                <div class="lov-setting-row">
                  <div class="lov-setting-meta">
                    <span class="lov-setting-title">${j(o.name)} <span class="pacom-badge pacom-badge--neutral">${j(o.groupType)}</span></span>
                    <span class="lov-setting-desc">成员 ${o.deviceIds.length} 台 · 供首页批控与标牌复用</span>
                  </div>
                  <div class="lov-setting-control"><button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-test-group="${j(o.id)}">组控测试</button></div>
                </div>`).join("")}
          </div>
        </section>
      </div>
    `}function he(){const $=ie(W),U=ce().filter(S=>S.floorId===W),o=$.filter(S=>S.category!=="hvac"&&S.category!=="meter"),v=o.filter(S=>$e.get(S.id)?.proxy).length,u=o.filter(S=>$e.get(S.id)?.relay).length,L=$.filter(S=>S.category==="gateway"),ge=$.filter(S=>$e.get(S.id)?.relay||$e.get(S.id)?.proxy),G=$.filter(S=>S.category!=="gateway");return`
      <div class="pacom-card" style="padding:14px 18px; gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <strong style="font-size:14px; font-weight:500;">本层蓝牙 Mesh 网络</strong>
            <span class="pacom-badge pacom-badge--online">协同锁空闲 · 可同步</span>
            <span class="pacom-row-sub">Mesh 节点 ${o.length} 台 · Proxy ${v} 个 · Relay ${u} 个 · 边缘基线 v${ee}</span>
          </div>
        </div>
        ${h.length>0?`<div style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                ${h.map(S=>`
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
            <button type="button" class="pacom-tab" aria-selected="${re==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
            <button type="button" class="pacom-tab" aria-selected="${re==="business"}" data-topo-mode="business">业务联动与供能流向</button>
          </div>
        </div>
        ${re==="mesh"?`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:13px; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器</strong>
                ${L.map(S=>`
                    <button type="button" class="dep-topo-node ${S.connectivity==="offline"?"is-issue":""}" data-topo-jump="${j(S.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${j(S.name)}</strong><span class="pacom-badge pacom-badge--online">网桥中心</span></div>
                      <span class="pacom-row-sub">${j(S.hardwareBinding?.networkAddress??"-")} · 云边同步通道</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:13px; color:var(--pacom-text-secondary);">2. 代理与中继骨架（Proxy / Relay）</strong>
                ${ge.length===0?'<div class="pacom-row-sub">暂未启用中继或代理节点，请在图纸标点抽屉中为传感器开启。</div>':ge.map(S=>{const we=$e.get(S.id);return`
                            <button type="button" class="dep-topo-node ${S.connectivity==="offline"?"is-issue":""}" data-topo-jump="${j(S.id)}">
                              <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${j(S.name)}</strong><span class="pacom-badge pacom-badge--accent">${we?.proxy?"Proxy":""}${we?.proxy&&we?.relay?" + ":""}${we?.relay?"Relay":""}</span></div>
                              <span class="pacom-row-sub">${j(ke(S.logicalZoneId))}</span>
                            </button>`}).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:13px; color:var(--pacom-text-secondary);">3. 末端节点（异常自动标红）</strong>
                ${G.map(S=>`
                    <button type="button" class="dep-topo-node ${S.connectivity==="offline"?"is-issue":""}" data-topo-jump="${j(S.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${j(S.name)}</strong><span class="pacom-badge ${S.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${S.connectivity==="online"?"在线":"离线"}</span></div>
                      <span class="pacom-row-sub">${j(ke(S.logicalZoneId))} · ${j(S.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                    </button>`).join("")}
              </div>
            </div>`:`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:13px; color:var(--pacom-text-secondary);">上游源头 / 传感触发</strong>
                ${$.filter(S=>S.category==="sensor"||S.category==="gateway").map(S=>`
                    <button type="button" class="dep-topo-node" data-topo-jump="${j(S.id)}">
                      <strong>${j(S.name)}</strong>
                      <span class="pacom-row-sub">${S.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:13px; color:var(--pacom-text-secondary);">受控末端（照明 / 暖通）</strong>
                ${$.filter(S=>S.category==="lighting"||S.category==="hvac").map(S=>`
                    <button type="button" class="dep-topo-node ${S.connectivity==="offline"?"is-issue":""}" data-topo-jump="${j(S.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${j(S.name)}</strong><span class="pacom-badge ${S.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${S.connectivity==="online"?"正常":"离线"}</span></div>
                      <span class="pacom-row-sub">服务：${j(ke(S.logicalZoneId))}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:13px; color:var(--pacom-text-secondary);">服务功能区（影响面）</strong>
                ${U.map(S=>{const we=$.filter(ze=>ze.logicalZoneId===S.id),P=we.some(ze=>ze.connectivity==="offline");return`
                      <div class="dep-topo-node ${P?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${j(S.name.replace(/^7F\s*/,""))}</strong><span class="pacom-badge ${P?"pacom-badge--warning":"pacom-badge--online"}">${we.length} 台设备</span></div>
                        <span class="pacom-row-sub">${P?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                      </div>`}).join("")}
              </div>
            </div>`}
      </section>
    `}function ye(){const $=ae.reduce((u,L)=>u+L.collectedPoints,0),U=ae.reduce((u,L)=>u+L.calculatedPoints,0),o=ae.filter(u=>u.status==="connected").length,v=ae.filter(u=>u.status!=="connected");return`
      <div class="lov-kpi-strip" role="region" aria-label="系统接入健康度">
        <div class="lov-kpi-cell"><span class="lov-kpi-label">已连通网关通道</span><div class="lov-kpi-value">${o}<span class="lov-kpi-unit">/ ${ae.length}</span></div><span class="lov-kpi-delta">含边缘网关与非 Mesh 子系统</span></div>
        <div class="lov-kpi-cell"><span class="lov-kpi-label">数据采集健康度</span><div class="lov-kpi-value">${ae.length?Math.round(o/ae.length*100):100}<span class="lov-kpi-unit">%</span></div><span class="lov-kpi-delta">区分网关断流与末端真故障</span></div>
        <div class="lov-kpi-cell"><span class="lov-kpi-label">原始采集点</span><div class="lov-kpi-value">${$}<span class="lov-kpi-unit">点</span></div><span class="lov-kpi-delta">协议直采实时遥测</span></div>
        <div class="lov-kpi-cell"><span class="lov-kpi-label">衍生计算点</span><div class="lov-kpi-value">${U}<span class="lov-kpi-unit">点</span></div><span class="lov-kpi-delta">能耗与聚合虚拟点位</span></div>
      </div>

      ${v.length>0?`<div class="lov-banner lov-banner--critical">
              <div class="lov-banner-text">
                <span class="lov-banner-title">检测到 ${v.length} 条采集通道通信降级（${v.map(u=>u.name).join("、")}）</span>
                <span class="lov-banner-sub">建议优先核查局域网 UDP/TCP 端口冲突、RS485 终端电阻与从站地址。</span>
              </div>
            </div>`:""}

      ${_?`
          <form class="lov-settings-card" data-create-conn="1">
            <div class="lov-setting-row">
              <div class="lov-setting-meta">
                <span class="lov-setting-title">新增子系统接入通道</span>
                <span class="lov-setting-desc">支持边缘网关、中央空调/线控网关、智能电表通讯机、空气质量与数字标牌（自动检测局域网端口冲突）</span>
              </div>
              <button type="button" class="pacom-drawer-close" data-toggle-new-conn="1">${me("x",16)}</button>
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
                ${ae.map(u=>{const L=Ht[u.status]??{label:u.status,cls:"pacom-badge--neutral"},ge=u.status==="connected"?98:u.status==="degraded"?62:0,G=ge>=75?"var(--pacom-status-online)":ge>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",S=ne===u.id,we=S?Kt(u,te):[];return`
                      <tr>
                        <td><strong>${j(u.name)}</strong></td>
                        <td><span class="pacom-badge pacom-badge--neutral">${u.protocol.toUpperCase()}</span></td>
                        <td><code style="font-size:12px;">${j(u.endpoint)}</code></td>
                        <td>采集 ${u.collectedPoints} / 计算 ${u.calculatedPoints}</td>
                        <td style="min-width:130px;">
                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span class="pacom-badge ${L.cls}">${L.label}</span>
                            <span class="pacom-row-sub">${ge}%</span>
                          </div>
                          <div class="lov-progress-track"><div class="lov-progress-fill" style="width:${ge}%; background:${G};"></div></div>
                        </td>
                        <td>
                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                            <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-expand-conn="${j(u.id)}">${S?"收起点位":"点位质量"}</button>
                            <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ping-conn="${j(u.id)}">测通</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost" style="height:28px; font-size:12px;" data-copy-endpoint="${j(u.id)}" data-endpoint-val="${j(u.endpoint)}">${pe===u.id?"已复制":"复制"}</button>
                          </div>
                        </td>
                      </tr>
                      ${S?`
                          <tr class="lov-table-detail-row">
                            <td colspan="6">
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                <div style="display:flex; justify-content:space-between; font-size:12px;">
                                  <strong>传感器 / 子设备采集质量明细（${j(u.name)}）</strong>
                                  <span class="pacom-row-sub">在线正常 · 延迟 &gt;30m · 断流 &gt;3×间隔</span>
                                </div>
                                ${we.map(P=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${j(P.deviceName)}</strong> · ${j(P.pointName)}</span>
                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                        <span class="pacom-row-sub">当前 ${j(P.value)} · ${j(P.lastSeen)}</span>
                                        <span class="pacom-badge ${P.quality==="online"?"pacom-badge--online":P.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                          ${P.quality==="online"?"在线正常":P.quality==="delayed"?"延迟 >30m":"断流"}
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
    `}function I(){const $=a.scope.canEditDeployment;e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${Be({tree:r(),session:a,scope:d,isOpen:z,searchKeyword:B})}
            </div>
            <div class="pacom-header-meta">
              ${V($)}
            </div>
          </div>
        </header>

        ${se?`<div class="lov-banner lov-banner--ok" style="flex-shrink:0;"><span class="lov-banner-title">${j(se)}</span></div>`:""}
        ${Se?`<div class="pacom-alert-banner" style="flex-shrink:0;">${j(Se)}</div>`:""}

        <div class="lov-subnav-layout">
          ${x()}
          ${n==="floorplan"?N($):`
              <div class="lov-subnav-main">
                ${n==="overview"?M():n==="project_building"?g($):n==="floor_zones"?f($):n==="ledger"?F($):n==="groups"?ue():n==="network_topo"?he():ye()}
              </div>`}
        </div>
      </div>
    `,Fe()}function Fe(){Ve(e,{onToggle:()=>{z=!z,I(),z&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:o=>{B=o,I();const v=e.querySelector("[data-global-space-search]");v&&(v.focus(),v.setSelectionRange(o.length,o.length))},onPick:o=>{d=o,z=!1,o.level==="building"?m=o.buildingId:o.level==="floor"&&(m=o.buildingId,W=o.floorId,E=null,O=!1),I()}}),e.querySelectorAll("[data-dep-nav]").forEach(o=>{o.addEventListener("click",()=>{n=o.dataset.depNav??"overview",se="",Se="",I()})}),e.querySelectorAll("[data-matrix-nav]").forEach(o=>{o.addEventListener("click",()=>{const v=o.dataset.matrixFloor;v&&De(v),n=o.dataset.matrixNav??"floorplan",I()})}),e.querySelectorAll("[data-pick-floor-pill]").forEach(o=>{o.addEventListener("click",()=>{const v=o.dataset.pickFloorPill;v&&(De(v),I())})}),e.querySelectorAll("[data-scrubber-floor]").forEach(o=>{o.addEventListener("click",()=>{const v=o.dataset.scrubberFloor;v&&(De(v),I())})}),e.querySelector("[data-save-project]")?.addEventListener("submit",o=>{o.preventDefault(),se="项目基础信息与经纬度坐标已更新。",I()}),e.querySelector("[data-upload-bld]")?.addEventListener("change",o=>{const v=o.currentTarget,u=v.dataset.uploadBld,L=v.files?.[0];if(!u||!L)return;const ge=new FileReader;ge.onload=()=>{typeof ge.result=="string"&&(ve.set(u,ge.result),se=`已更新楼宇实景图「${L.name}」。`,I())},ge.readAsDataURL(L)}),e.querySelector("[data-upload-floor]")?.addEventListener("change",o=>{const v=o.currentTarget,u=v.dataset.uploadFloor,L=v.files?.[0];if(!u||!L)return;const ge=new FileReader;ge.onload=()=>{typeof ge.result=="string"&&(de.set(u,ge.result),se=`已上传本层真实 2D 平面底图「${L.name}」，可立即进入图纸标点。`,I())},ge.readAsDataURL(L)}),e.querySelector("[data-batch-floors]")?.addEventListener("submit",o=>{o.preventDefault();const v=o.currentTarget.dataset.batchFloors,u=new FormData(o.currentTarget),L=Number(u.get("fromFloor")??1),ge=Number(u.get("toFloor")??6),G=new Set(b().filter(we=>we.buildingId===v).map(we=>we.name));let S=0;for(let we=Math.min(L,ge);we<=Math.max(L,ge);we+=1){const P=`${we}F`;G.has(P)||(le.push({id:`floor-${v}-above-${we}`,buildingId:v,kind:"above",level:we,name:P,plan:null}),S+=1)}u.get("includeB1")&&!G.has("B1")&&(le.push({id:`floor-${v}-below-1`,buildingId:v,kind:"below",level:-1,name:"B1",plan:null}),S+=1),u.get("includeRF")&&!G.has("RF")&&(le.push({id:`floor-${v}-roof-1`,buildingId:v,kind:"roof",level:99,name:"RF",plan:null}),S+=1),se=S>0?`已批量新增 ${S} 个楼层，并自动初始化各层默认蓝牙 Mesh 网络。`:"所选范围楼层均已存在，未重复创建。",I()}),e.querySelector("[data-add-zone]")?.addEventListener("submit",o=>{o.preventDefault();const v=o.currentTarget.dataset.addZone,u=new FormData(o.currentTarget),L=String(u.get("zoneName")??"").trim(),ge=String(u.get("zoneCat")??"office");if(!L)return;const G=`zone-custom-${Date.now().toString(36)}`;fe.push({id:G,floorId:v,name:L,category:ge}),k[G]={left:20,top:20,width:24,height:24},se=`已添加功能区「${L}」。`,I()});const $=e.querySelector("[data-dep-canvas-search]");$?.addEventListener("focus",()=>{!X&&!w&&(X=!0,I(),e.querySelector("[data-dep-canvas-search]")?.focus())}),$?.addEventListener("input",o=>{q=o.currentTarget.value,X=!0,w=!1,I();const v=e.querySelector("[data-dep-canvas-search]");v&&(v.focus(),v.setSelectionRange(q.length,q.length))}),e.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{X=!X,X&&(w=!1),I()}),e.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{X=!1,w=!1,I()}),e.querySelector("[data-toggle-new-dev]")?.addEventListener("click",()=>{w=!w,w&&(X=!1),I()}),e.querySelectorAll("[data-brush]").forEach(o=>{o.addEventListener("click",()=>{R=o.dataset.brush??"device",I()})}),e.querySelectorAll("[data-dep-zoom]").forEach(o=>{o.addEventListener("click",()=>{const v=o.dataset.depZoom;v==="in"?y=Math.min(2.6,Number((y+.2).toFixed(2))):v==="out"?y=Math.max(.6,Number((y-.2).toFixed(2))):(y=1,Y=0,D=0),Ae()})});const U=e.querySelector('[data-role="dep-stage"]');if(U&&!c){let o=!1,v=0,u=0,L=0,ge=0;U.addEventListener("pointerdown",S=>{S.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(o=!0,v=S.clientX,u=S.clientY,L=Y,ge=D,U.classList.add("is-panning"),U.setPointerCapture?.(S.pointerId))}),U.addEventListener("pointermove",S=>{o&&(Y=L+(S.clientX-v),D=ge+(S.clientY-u),Ae())});const G=()=>{o&&(o=!1,U.classList.remove("is-panning"))};U.addEventListener("pointerup",G),U.addEventListener("pointercancel",G),U.addEventListener("wheel",S=>{S.preventDefault();const we=S.deltaY<0?.12:-.12;y=Math.max(.6,Math.min(2.6,Number((y+we).toFixed(2)))),Ae()},{passive:!1}),U.addEventListener("dblclick",S=>{S.target?.closest("button")||(y=1,Y=0,D=0,Ae())})}e.querySelectorAll("[data-dev-filter]").forEach(o=>{o.addEventListener("click",()=>{J=o.dataset.devFilter??"all",I()})}),e.querySelector("[data-create-dev]")?.addEventListener("submit",o=>{o.preventDefault();const v=new FormData(o.currentTarget),u=String(v.get("devName")??"").trim(),L=String(v.get("devPreset")??"sensor"),ge=String(v.get("devZone")??"")||null,G=at.find(we=>we.key===L)??at[0],S=`dev-custom-${Date.now().toString(36)}`;A.push({id:S,name:u,category:G.category,projectId:p.projectId,buildingId:m,floorId:W,logicalZoneId:ge,planPoint:{floorId:W,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}}),$e.set(S,{proxy:G.defaultProxy,relay:G.defaultRelay,meshUuid:`mesh-${W.slice(-4)}`}),G.category==="lighting"&&Ie.push({id:`lm-${Date.now().toString(36)}`,deviceId:S,channel:"回路 1",label:`${u.slice(0,6)}主灯`,x:.52,y:.45}),E=S,O=!0,w=!1,l=!0,se=`已新增「${u}」（${G.hint}），已标注默认点位并标记待同步边缘。`,I()}),e.querySelectorAll("[data-pick-dev]").forEach(o=>{o.addEventListener("click",v=>{v.stopPropagation(),E=o.dataset.pickDev??null,O=!0,i=ie(W).find(L=>L.id===E)?.physicalInstalled??!1,I()})}),e.querySelector("[data-close-sel]")?.addEventListener("click",()=>{O=!1,c=!1,I()}),e.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{c=!c,I()}),e.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{i=!i,I()}),e.querySelectorAll("[data-ping-dev]").forEach(o=>{o.addEventListener("click",()=>{const v=ie(W).find(u=>u.id===o.dataset.pingDev);v&&(se=`已向「${v.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,I())})}),e.querySelector("[data-add-light-marker]")?.addEventListener("click",o=>{const v=o.currentTarget.dataset.addLightMarker,u=Ie.filter(L=>L.deviceId===v).length+1;Ie.push({id:`lm-${Date.now().toString(36)}`,deviceId:v,channel:`回路 ${u}`,label:`照明点位 ${u}`,x:Math.min(.86,.35+u*.1),y:.42}),R="light_marker",se=`已新增「回路 ${u}」可视化灯点。`,I()}),e.querySelectorAll("[data-del-light-marker]").forEach(o=>{o.addEventListener("click",()=>{const v=Ie.findIndex(u=>u.id===o.dataset.delLightMarker);v>=0&&Ie.splice(v,1),I()})}),e.querySelectorAll("[data-toggle-mesh-role]").forEach(o=>{o.addEventListener("click",()=>{const v=o.dataset.meshDev,u=o.dataset.toggleMeshRole,L=$e.get(v)??{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"};L[u]=!L[u],$e.set(v,L),l=!0,se=`已更新节点 ${u.toUpperCase()} 状态，记得在「网络与拓扑」中同步下发至边缘网关。`,I()})}),e.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async o=>{const v=ie(W).find(G=>G.id===E);if(!c||!v)return;const u=o.currentTarget.getBoundingClientRect(),L=Math.max(.02,Math.min(.98,(o.clientX-u.left)/u.width)),ge=Math.max(.02,Math.min(.98,(o.clientY-u.top)/u.height));if(A.some(G=>G.id===v.id)){v.planPoint={floorId:W,planVersion:1,x:Number(L.toFixed(4)),y:Number(ge.toFixed(4))},c=!1,se=`已更新「${v.name}」图上坐标。`,I();return}try{await t.updateDevicePlanPoint({deviceId:v.id,floorId:p.floorId,planVersion:v.planPoint?.planVersion??1,x:L,y:ge,expectedVersion:v.version}),c=!1,se=`已更新「${v.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await Le()}catch(G){Se=G instanceof Error?G.message:String(G),I()}}),e.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async o=>{o.preventDefault();const v=ie(W).find(L=>L.id===E);if(!v)return;const u=new FormData(o.currentTarget);if(A.some(L=>L.id===v.id)){v.physicalInstalled=i,v.hardwareBinding={gatewayId:"dev-e7f-gw-01",protocol:String(u.get("protocol")),networkAddress:String(u.get("networkAddress")??""),portOrChannel:String(u.get("portOrChannel")??""),boundAt:new Date().toISOString(),boundBy:a.displayName},v.version+=1,l=!0,se=`已保存「${v.name}」的硬件绑定与物理复核状态。`,I();return}try{await t.updateDeviceHardwareBinding({deviceId:v.id,gatewayId:v.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(u.get("protocol")),networkAddress:String(u.get("networkAddress")??""),portOrChannel:String(u.get("portOrChannel")??""),physicalInstalled:i,expectedVersion:v.version}),l=!0,se=`已保存「${v.name}」的硬件绑定与物理安装复核状态。`,await Le()}catch(L){Se=L instanceof Error?L.message:String(L),I()}}),e.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const o=ie(W).find(v=>v.id===E);o&&Ne(o)}),e.querySelectorAll("[data-ftt-dev]").forEach(o=>{o.addEventListener("click",()=>{const v=ie(W).find(u=>u.id===o.dataset.fttDev);v&&Ne(v)})}),e.querySelectorAll("[data-batch-ftt]").forEach(o=>{o.addEventListener("click",()=>Te())}),e.querySelectorAll("[data-export-inv]").forEach(o=>{o.addEventListener("click",()=>Ye())}),e.querySelectorAll("[data-open-param]").forEach(o=>{o.addEventListener("click",()=>{be=o.dataset.openParam??null,I()})}),e.querySelector("[data-close-param]")?.addEventListener("click",()=>{be=null,I()}),e.querySelector("[data-save-dev-params]")?.addEventListener("submit",o=>{o.preventDefault();const v=o.currentTarget.dataset.saveDevParams,u=new FormData(o.currentTarget);C.set(v,{offDelayMin:Number(u.get("offDelayMin")??15),restoreMin:Number(u.get("restoreMin")??30),luxOn:Number(u.get("luxOn")??280),luxOff:Number(u.get("luxOff")??450)}),be=null,l=!0,se="设备自治延时与光感门限参数已下发并同步至配置基线。",I()}),e.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{H=!H,I()}),e.querySelector("[data-create-group]")?.addEventListener("submit",o=>{o.preventDefault();const v=new FormData(o.currentTarget),u=String(v.get("gName")??"").trim(),L=v.get("gTrack")??"mesh_auto",ge=String(v.get("gType")??"灯光联动组");u&&(je.unshift({id:`grp-${Date.now().toString(36)}`,track:L,groupType:ge,name:u,floorId:W,includesAdapter:L==="mesh_auto",deviceIds:L==="mesh_auto"?["dev-e7f-gw-01"]:[]}),H=!1,L==="mesh_auto"&&(l=!0),se=`已新建${L==="mesh_auto"?"端侧蓝牙 Mesh 自治组（已自动纳入蓝牙适配器）":"云端业务分组"}「${u}」。`,I())}),e.querySelectorAll("[data-test-group]").forEach(o=>{o.addEventListener("click",()=>{const v=je.find(u=>u.id===o.dataset.testGroup);v&&(se=`已向分组「${v.name}」发送群组试控指令，${v.deviceIds.length} 台成员回读正常。`,I())})}),e.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>xe()),e.querySelector("[data-sync-edge]")?.addEventListener("click",()=>{ee+=1,l=!1,se=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${ee}）。`,I()}),e.querySelectorAll("[data-topo-mode]").forEach(o=>{o.addEventListener("click",()=>{re=o.dataset.topoMode??"mesh",I()})}),e.querySelectorAll("[data-topo-jump]").forEach(o=>{o.addEventListener("click",()=>{E=o.dataset.topoJump??null,O=!0,n="floorplan",I()})}),e.querySelector("[data-toggle-new-conn]")?.addEventListener("click",()=>{_=!_,I()}),e.querySelector("[data-create-conn]")?.addEventListener("submit",o=>{o.preventDefault();const v=new FormData(o.currentTarget),u=String(v.get("cName")??"").trim(),L=String(v.get("cProto")??"bacnet_ip"),ge=String(v.get("cEndpoint")??"").trim();if(ae.some(G=>G.endpoint===ge)){Se=`端口冲突警告：局域网端点「${ge}」已被其他通道占用，请更换端口后重试。`,I();return}ae.unshift({id:`conn-${Date.now().toString(36)}`,projectId:p.projectId,buildingId:m,floorId:W,name:u,protocol:L,endpoint:ge,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()}),_=!1,Se="",se=`已接入「${u}」（${ge}），连通测试通过（18 ms）。`,I()}),e.querySelector("[data-edge-restart]")?.addEventListener("click",()=>{se="已下发「重启边缘服务」指令，边缘网关服务将在 5 秒内平滑重连。",I()}),e.querySelectorAll("[data-expand-conn]").forEach(o=>{o.addEventListener("click",()=>{const v=o.dataset.expandConn??null;ne=ne===v?null:v,I()})}),e.querySelectorAll("[data-ping-conn]").forEach(o=>{o.addEventListener("click",()=>{const v=ae.find(u=>u.id===o.dataset.pingConn);v&&(Se="",v.status==="connected"?se=`连通测试通过：「${v.name}」（${v.endpoint}）响应正常，延迟 18 ms。`:Se=`连通测试异常：「${v.name}」（${v.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,I())})}),e.querySelectorAll("[data-copy-endpoint]").forEach(o=>{o.addEventListener("click",async()=>{const v=o.dataset.endpointVal??"",u=o.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(v),pe=u,I(),window.setTimeout(()=>{pe=null,I()},1600)}catch{}})}),e.querySelectorAll("[data-preview-doc]").forEach(o=>{o.addEventListener("click",()=>{const v=st.find(u=>u.id===o.dataset.previewDoc);v&&(se=`已调阅工程附件「${v.name}」（关联范围：${v.boundScope}，更新于 ${v.updatedAt}）。`,I())})}),e.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const o=await t.freezeDeliveryBatch(p.floorId,"部署总览验收发起交付冻结");se=`已生成交付冻结快照 ${o.versionTag}（核验 ${o.verifiedCount}/${o.deviceCount}）。`,await Le()}catch(o){Se=o instanceof Error?o.message:String(o),I()}})}await Le()}function vt(e){if(e.connectivity==="offline")return`${e.name.includes("VAV")?"VAV-02":e.name.slice(0,6)} 离线`;if(e.category==="lighting"){const t=e.name.includes("702")?"702 照明":"主照明",a=Number(e.telemetry.dimming?.value??0);return a>0?`${t} ${a}%`:`${t} 关`}return e.category==="hvac"?`${e.name.includes("VAV")?"VAV-02":"FCU-01"} ${e.telemetry.setpoint?.value??24}°C`:e.category==="sensor"?`环境 ${e.telemetry.temp?.value??"23.4"}°C`:e.category==="gateway"?"主控网关":e.name.slice(0,6)}const mt={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},Xt={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},Qt=me("chevron-down",12),Jt={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function T(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function gt(e){const t=e.match(/(-?\d+)/);if(!t)return 0;const a=Number(t[1]);return e.toUpperCase().startsWith("B")?-Math.abs(a):a}async function ea(e,t,a){const s=await t.getSpatialTree(),n=t.mode==="demo",d=a.scope.canControlDevices,z=a.scope.canManageAlarms,B=a.scope.allowedZoneIds?.length?a.scope.allowedZoneIds:null,R=s.floors.filter(x=>a.scope.allowedFloorIds.includes(x.id)),J=B||s.projects.length<=1&&s.buildings.length<=1&&R.length<=1?"floors-only":s.projects.length>1?"multi-project":s.buildings.length>1?"single-project-multi-building":"single-building",q=J==="multi-project",X=J==="multi-project"||J==="single-project-multi-building",O=J!=="floors-only",re=J==="floors-only"&&R.length<=1;let y=_e(),Y="devices",D=!1,Q=!1,te="",ae="",oe="all",le="all";const de=new URLSearchParams(window.location.hash.split("?")[1]??""),ve=de.get("device"),fe=de.get("zone");let k=ve,A=!!ve,W="control",m="",E=!1,i="today",c="devices";const w=new Set,_=new Set;let H=[],be=[],pe=[],ne=null,ee=null,l=1,h=0,Z=0,se=null;function Se(){return s.zones.filter(x=>!(y.level==="floor"&&x.floorId!==y.floorId||B&&!B.includes(x.id)))}function $e(x){return[...s.floors.filter(M=>M.buildingId!==x?!1:J==="floors-only"?a.scope.allowedFloorIds.includes(M.id):!0)].sort((M,g)=>gt(g.name)-gt(M.name))}async function Ie(x,V=!1){let M=x;M.level==="all-projects"&&!q&&(M={level:"project",projectId:s.projects[0]?.id??p.projectId}),M.level==="project"&&!X&&(M={level:"building",projectId:M.projectId,buildingId:s.buildings[0]?.id??p.buildingId}),M.level==="building"&&!O&&(M={level:"floor",projectId:M.projectId,buildingId:M.buildingId,floorId:R[0]?.id??p.floorId}),y=M,ct(M),ee=null,le=V&&fe?fe:"all",E=!1,Q=!1,D=!1,_.clear(),l=1,h=0,Z=0,se&&(se(),se=null);const g=y.level==="floor"?y.floorId:p.floorId;if(y.level==="floor")try{const[f,N,F]=await Promise.all([t.getFloorDevices(y.floorId),t.listAlarms(y.floorId),t.listWorkOrders(y.floorId)]);H=f,be=N,pe=F,H.some(ue=>ue.id===k)?V&&ve&&(A=!0):(k=H[1]?.id??H[0]?.id??null,A=!1),se=t.subscribeFloorEvents(y.floorId,async ue=>{ue.type==="control.receipt.updated"&&ne?.batchId===ue.batchId&&(ne=await t.getControlBatch(ue.batchId)),(ue.type==="telemetry.updated"||ue.type==="device.connectivity")&&y.level==="floor"&&(H=await t.getFloorDevices(y.floorId)),ue.type==="alarm.changed"&&y.level==="floor"&&(be=await t.listAlarms(y.floorId)),b()})}catch(f){H=[],be=[],pe=[],k=null,A=!1,ee=f instanceof Error?f.message:String(f)}else{A=!1;const[f,N,F]=await Promise.all([t.getFloorDevices(g).catch(()=>[]),t.listAlarms(g).catch(()=>[]),t.listWorkOrders(g).catch(()=>[])]);H=f,be=N,pe=F}xe()}function je(x){return x?s.zones.find(V=>V.id===x)?.name??x:"未分配逻辑区"}function C(){const x=ae.trim().toLowerCase();return H.filter(V=>le!=="all"&&V.logicalZoneId!==le||oe!=="all"&&V.category!==oe?!1:x?V.name.toLowerCase().includes(x)||V.id.toLowerCase().includes(x)||je(V.logicalZoneId).toLowerCase().includes(x):!0)}async function r(x,V,M){!x.length||y.level!=="floor"||!d||(x.forEach(g=>w.add(g)),ne=await t.dispatchControlBatch({floorId:y.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:x.map(g=>({deviceId:g,command:V,targetValue:M}))}),b())}function b(){const x=document.activeElement,V=x?.dataset?.role,M=x&&"selectionStart"in x?x.selectionStart:null,g=x&&"selectionEnd"in x?x.selectionEnd:null,f=e.querySelector(".pacom-list")?.scrollTop??0;xe();const N=e.querySelector(".pacom-list");if(N&&(N.scrollTop=f),V==="search"||V==="space-search"){const F=e.querySelector(`[data-role="${V}"]`);F&&(F.focus(),M!==null&&g!==null&&F.setSelectionRange(M,g))}}function K(){const x=e.querySelector('[data-role="canvas-viewport"]');x&&(x.style.transform=`translate(${h}px, ${Z}px) scale(${l})`);const V=e.querySelector('[data-role="zoom-label"]');V&&(V.textContent=`${Math.round(l*100)}%`)}function ce(x){if(x==="all")return{level:"all-projects"};const V=x.split(":");return V[0]==="project"&&V[1]?{level:"project",projectId:V[1]}:V[0]==="building"&&V[1]&&V[2]?{level:"building",projectId:V[1],buildingId:V[2]}:V[0]==="floor"&&V[1]&&V[2]&&V[3]?{level:"floor",projectId:V[1],buildingId:V[2],floorId:V[3]}:{level:"all-projects"}}function ie(x){const V=y;if(V.level==="all-projects"){const M=ae.trim().toLowerCase(),g=s.projects.filter(f=>!M||f.name.toLowerCase().includes(M));return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">授权园区（${g.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${me("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:6px; padding:8px;">
          ${g.map(f=>{const N=s.buildings.filter(F=>F.projectId===f.id).length;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="project:${T(f.id)}">
                  <div>
                    <div class="pacom-row-title">${T(f.name)}</div>
                    <div class="pacom-row-sub">${T(f.city??"")} · ${N} 栋楼宇</div>
                  </div>
                  <span class="pacom-badge pacom-badge--accent">进入 →</span>
                </button>`}).join("")}
        </div>
      `}if(V.level==="project"){const M=ae.trim().toLowerCase(),g=s.buildings.filter(F=>F.projectId===V.projectId&&(!M||F.name.toLowerCase().includes(M))),f=H.filter(F=>F.connectivity==="online").length,N=H.length?Math.round(f/H.length*100):100;return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">园区楼宇（${g.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${me("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${g.map(F=>{const ue=F.id===p.buildingId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="building:${T(F.projectId)}:${T(F.id)}">
                  <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                    <span class="pacom-dot ${ue&&x>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <div>
                      <div class="pacom-row-title">${T(F.name)}</div>
                      <div class="pacom-row-sub">地上 ${F.aboveFloors} 层 · ${F.areaSqm??"-"} m²</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${ue?"pacom-badge--accent":"pacom-badge--neutral"}">${ue?`在线 ${N}%`:"运行平稳"}</span>
                </button>`}).join("")}
        </div>
      `}if(V.level==="building"){const M=ae.trim().toLowerCase(),g=$e(V.buildingId).filter(N=>!M||N.name.toLowerCase().includes(M)),f=s.buildings.find(N=>N.id===V.buildingId);return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">${T(f?.name??"楼宇")} 楼层导览（${g.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${me("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${g.map(N=>{const F=a.scope.allowedFloorIds.includes(N.id),ue=N.id===p.floorId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left; ${F?"":"opacity:0.6;"}" data-nav-scope="floor:${T(V.projectId)}:${T(V.buildingId)}:${T(N.id)}">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="pacom-dot ${ue&&x>0?"pacom-dot--warning":N.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                    <div>
                      <div class="pacom-row-title">${T(f?.name??"")} ${T(N.name)}</div>
                      <div class="pacom-row-sub">${N.plan?"2D 平面控图就绪":"暂未上传平面图"}${ue&&x>0?` · ${x} 告警`:""}</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${F&&N.plan?"pacom-badge--online":"pacom-badge--neutral"}">${F?N.plan?"进入 →":"待部署":"未授权"}</span>
                </button>`}).join("")}
        </div>
      `}if(Y==="devices"){const M=C(),g=Se(),f=Array.from(_);return`
        <div class="pacom-pane-toolbar" style="padding:10px 12px; gap:8px;">
          ${B?`<div class="pacom-info-banner">我的区域视图：仅显示获授权的 ${B.length} 个功能区及设备。</div>`:""}
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
            <select class="pacom-select" style="height:28px; font-size:12px;" name="deviceCategory" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${oe==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${oe==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${oe==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${oe==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${oe==="gateway"?"selected":""}>网关</option>
            </select>
            <span style="font-size:12px; color:var(--pacom-text-secondary);">可见 ${M.length} 台${d&&f.length?` · 已选 ${f.length}`:""}</span>
            <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${me("x",14)}</button>
          </div>
          ${g.length>0&&!ee?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${le==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${g.map(N=>`<button type="button" class="pacom-zone-pill ${le===N.id?"is-active":""}" data-filter-zone="${T(N.id)}">${T(N.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
        </div>
        <div class="pacom-list" style="padding:6px;">
          ${ee?`<div class="pacom-alert-banner">${T(ee)}</div>`:M.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">没有匹配的设备</div>':M.map(N=>{const F=N.id===k&&A,ue=_.has(N.id),he=N.connectivity==="offline",ye=he?"pacom-dot--critical":"pacom-dot--online",I=he?"离线":N.category==="lighting"?`${N.telemetry.dimming?.value??"--"}%`:N.category==="hvac"?`${N.telemetry.setpoint?.value??"--"}°C`:N.category==="sensor"?`${N.telemetry.temp?.value??"--"}°C`:"在线";return`
                        <div class="pacom-row ${F?"is-selected":""}" data-select-device="${T(N.id)}" style="padding:8px;">
                          <div class="pacom-row-main">
                            ${d?`<input type="checkbox" name="devCheck-${T(N.id)}" data-check-device="${T(N.id)}" ${ue?"checked":""} style="margin-top:3px;" aria-label="勾选 ${T(N.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title" style="font-size:13px;">${T(N.name)}</div>
                              <div class="pacom-row-sub">${T(je(N.logicalZoneId).replace(/^7F\s*/,""))} · ${T(mt[N.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${he?"pacom-badge--critical":"pacom-badge--online"}">
                            <span class="pacom-dot ${ye}"></span>${T(I)}
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
      `}if(Y==="zones"){const M=Se(),g={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">功能区快控（${M.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${me("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:8px; padding:10px;">
          ${M.map(f=>{const N=H.filter(I=>I.logicalZoneId===f.id),F=N.filter(I=>I.connectivity==="online").length,ue=N.filter(I=>I.category==="lighting"||I.category==="hvac").length,he=le===f.id,ye=g[f.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${he?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${he?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${T(he?"all":f.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:13px; font-weight:500;">${T(f.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${F}/${N.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时 ${ye.temp} · ${ye.occ}</div>
                  ${ue>0?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-zone-power="${T(f.id)}" data-zone-val="true" ${d?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-zone-power="${T(f.id)}" data-zone-val="false" ${d?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">弱电 / 网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-hud-sheet-head">
        <strong style="font-size:13px; font-weight:500;">本层告警（${be.length}）</strong>
        <div style="display:flex; align-items:center; gap:4px;">
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${me("x",14)}</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:10px;">
        ${be.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">当前楼层无活跃告警</div>':be.map(M=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${T(M.title)}</strong>
                      <span class="pacom-badge ${M.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${M.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${T(M.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-locate-device="${T(M.deviceId)}">定位设备</button>
                      ${M.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-ack-alarm="${T(M.id)}" ${z?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function ke(x){const V=y,M=Se().length,g=V.level==="floor"?"搜索设备或区域…":V.level==="building"?"搜索楼层…":V.level==="project"?"搜索楼宇…":"搜索园区…",f=V.level==="floor"?`
          <button type="button" class="pacom-hud-pill ${D&&Y==="devices"?"is-active":""}" data-hud-tab="devices">设备 ${H.length}</button>
          <button type="button" class="pacom-hud-pill ${D&&Y==="zones"?"is-active":""}" data-hud-tab="zones">区域 ${M}</button>
          <button type="button" class="pacom-hud-pill ${x>0?"pacom-hud-pill--alert":""} ${D&&Y==="alarms"?"is-active":""}" data-hud-tab="alarms">告警 ${x}</button>
        `:V.level==="building"?`
            <button type="button" class="pacom-hud-pill ${D?"is-active":""}" data-toggle-hud="1">楼层 ${$e(V.buildingId).length}</button>
            ${x>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${x}</button>`:""}
          `:V.level==="project"?`
              <button type="button" class="pacom-hud-pill ${D?"is-active":""}" data-toggle-hud="1">楼宇 ${s.buildings.filter(N=>N.projectId===V.projectId).length}</button>
              ${x>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${x}</button>`:""}
            `:`<button type="button" class="pacom-hud-pill ${D?"is-active":""}" data-toggle-hud="1">园区 ${s.projects.length}</button>`;return`
      <div class="pacom-hud-search-wrap" data-role="hud-wrap">
        <div class="pacom-hud-bar" style="padding:0 8px 0 12px;">
          ${me("search",14)}
          <input class="pacom-hud-input" name="spatialSearch" data-role="search" placeholder="${g}" value="${T(ae)}" aria-label="${g}" />
          ${f}
        </div>
        ${D?`<div class="pacom-hud-sheet" data-role="hud-sheet">${ie(x)}</div>`:""}
      </div>
    `}function De(x){if(re||y.level!=="building"&&y.level!=="floor")return"";const V=y.buildingId,M=y.projectId,g=$e(V);return!O&&g.length<=1?"":`
      <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换" data-role="elevation-scrubber">
        ${O?`<button type="button" class="pacom-elev-item ${y.level==="building"?"is-active":""}" data-nav-scope="building:${T(M)}:${T(V)}" title="查看整栋视图">
                <span>栋</span>
                <span class="pacom-elev-tick"></span>
              </button>`:""}
        ${g.map(f=>{const N=a.scope.allowedFloorIds.includes(f.id),F=y.level==="floor"&&y.floorId===f.id,ue=f.id===p.floorId&&x>0;return`
              <button type="button" class="pacom-elev-item ${F?"is-active":""} ${N?"":"is-locked"}"
                data-nav-scope="floor:${T(M)}:${T(V)}:${T(f.id)}"
                title="${T(f.name)}${N?ue?` · ${x} 条告警`:"":"（无权限）"}">
                ${ue?'<span class="pacom-elev-dot" aria-hidden="true"></span>':""}
                <span>${T(f.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`}).join("")}
      </nav>
    `}function Le(x,V){const M=y;if(M.level==="floor")return ee?"":`
        <div class="pacom-canvas-dock" role="toolbar" aria-label="平面图图层与缩放控制">
          <button type="button" class="pacom-dock-btn" aria-pressed="${c==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${c==="temp"}" data-canvas-layer="temp">温度热力</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${c==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-zoom="out" title="缩小" aria-label="缩小">${me("minus",14)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-zoom="reset" data-role="zoom-label" title="点击复位 100%">${Math.round(l*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-zoom="in" title="放大" aria-label="放大">${me("plus",14)}</button>
        </div>
      `;const g=H.length?Math.round(x/H.length*100):100,f=M.level==="building"?"418 kWh":"1,248 kWh",N=Math.round(96.2*.45+93.6*.35+g*.2),F=M.level==="building"?$e(M.buildingId).find(ue=>ue.id===p.floorId)??$e(M.buildingId)[0]:null;return`
      <div class="pacom-canvas-dock" role="region" aria-label="空间运行态势">
        <button type="button" class="pacom-dock-metric" data-go-analysis="health">
          <span class="pacom-dot pacom-dot--online"></span>
          <span>健康 <strong>${N}</strong></span>
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
          <span class="pacom-dot ${V>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
          <span>告警 <strong>${V}</strong></span>
        </button>
        ${M.level==="building"&&F?`<span class="pacom-dock-sep" aria-hidden="true"></span>
               <button type="button" class="pacom-dock-btn" aria-pressed="true" data-nav-scope="floor:${T(M.projectId)}:${T(M.buildingId)}:${T(F.id)}">进入 ${T(F.name)} 平面图 →</button>`:""}
      </div>
    `}function Ae(x,V){const M=y,g=H.length?Math.round(x/H.length*100):100;if(M.level==="all-projects")return`
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
            ${s.projects.map((F,ue)=>`
                <button type="button" class="pacom-pin is-selected" style="left:${ue===0?50:28}%; top:${ue===0?52:34}%; padding:0 12px; height:32px; font-size:12px;" data-nav-scope="project:${T(F.id)}">
                  <span class="pacom-dot ${V>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <span>${T(F.name)} · 在线 ${g}%</span>
                </button>`).join("")}
          </div>
        </div>
      `;if(M.level==="project"){const F=s.projects.find(he=>he.id===M.projectId)??s.projects[0],ue=s.buildings.filter(he=>!F||he.projectId===F.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 24px 72px; cursor:default;">
          <div style="position:relative; width:min(940px, 92%); border-radius:16px; overflow:hidden; box-shadow:0 14px 36px rgba(15,23,42,0.12); background:#fff;">
            <img src="${T(F?.imageUrl??"./media/gzlab.jpg")}" alt="${T(F?.name??"园区")}俯瞰" style="width:100%; max-height:72vh; object-fit:cover; display:block;" />
            ${ue.map((he,ye)=>{const I=he.id===p.buildingId;return`
                  <button type="button" class="pacom-pin ${I?"is-selected":""}" style="left:${ye===0?56:38}%; top:${ye===0?44:62}%; height:30px; padding:0 11px;" data-nav-scope="building:${T(he.projectId)}:${T(he.id)}">
                    <span class="pacom-dot ${I&&V>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${T(he.name)} · ${I?`在线 ${g}% · 告警 ${V}`:"运行平稳"}</span>
                  </button>`}).join("")}
          </div>
        </div>
      `}if(M.level==="building"){const F=s.buildings.find(he=>he.id===M.buildingId),ue=$e(M.buildingId).find(he=>he.id===p.floorId)??$e(M.buildingId)[0];return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 68px 72px 24px; cursor:default;">
          <div style="position:relative; display:inline-block;">
            <img class="pacom-plan-img" src="${T(F?.imageUrl??"./media/building-e.png")}" alt="${T(F?.name??"楼宇")} 整栋实景图" style="max-height:74vh;" />
            ${ue?`<button type="button" class="pacom-pin is-selected" style="left:52%; top:38%; height:30px; padding:0 11px;" data-nav-scope="floor:${T(M.projectId)}:${T(M.buildingId)}:${T(ue.id)}">
                    <span class="pacom-dot ${V>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${T(F?.name??"")} ${T(ue.name)} · 在线 ${x}/${H.length}</span>
                  </button>`:""}
          </div>
        </div>
      `}const f=s.floors.find(F=>F.id===M.floorId),N=Se();return`
      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${ee?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${T(ee)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${h}px, ${Z}px) scale(${l});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${T(f?.plan?.imageUrl??"./media/7F.webp")}" alt="E栋 ${T(f?.name??"7F")} 平面图" />
                  ${N.map((F,ue)=>{const he=Jt[F.id];if(!he)return"";const ye=le===F.id,I=["23.2°C","24.6°C","22.8°C","23.9°C"],Fe=["有人 74%","会议中","有人 52%","空闲"],$=c==="temp"?` · ${I[ue%I.length]}`:c==="occupancy"?` · ${Fe[ue%Fe.length]}`:"",U=c==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":c==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${ye?"is-active":""}"
                          style="left:${he.left}%; top:${he.top}%; width:${he.width}%; height:${he.height}%; ${ye?"":U}"
                          data-filter-zone="${T(ye?"all":F.id)}"
                          title="${T(F.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${T(F.name.replace(/^7F\s*/,""))}${$}</span>
                        </button>`}).join("")}
                  ${H.filter(F=>F.planPoint).map(F=>{const ue=be.some($=>$.deviceId===F.id&&$.status==="active"),he=D&&Y==="alarms",ye=le!=="all"&&F.logicalZoneId!==le||he&&!ue,I=he&&ue?"background:var(--pacom-status-critical);":"",Fe=F.category==="gateway"?Math.min(92,F.planPoint.y*100+5.5):F.planPoint.y*100;return`
                        <button type="button" class="pacom-pin ${F.id===k&&A?"is-selected":""} ${F.connectivity==="offline"?"pacom-pin--offline":""} ${ye?"pacom-pin--dimmed":""}"
                          style="left:${(F.planPoint.x*100).toFixed(2)}%; top:${Fe.toFixed(2)}%; ${I}"
                          data-pin-device="${T(F.id)}" title="${T(F.name)}">
                          <span class="pacom-dot ${ue?"pacom-dot--critical":F.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${T(vt(F))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>
    `}function Ne(){if(y.level!=="floor"||!A)return"";const x=H.find(I=>I.id===k);if(!x)return"";const V=x.category==="lighting",M=x.category==="hvac",g=Number(x.telemetry.dimming?.value??50),f=Number(x.telemetry.setpoint?.value??24),N=w.has(x.id),F=be.filter(I=>I.deviceId===x.id&&I.status==="active"),ue=pe.filter(I=>I.deviceId===x.id&&I.status!=="closed"),he=M?[{name:"E7F_暖通空调与末端竣工图_v2.3.pdf",tag:"竣工图纸"},{name:"FCU-01_风机盘管维保与排障手册.pdf",tag:"维保手册"}]:V?[{name:"E7F_强电照明与DALI回路拓扑.pdf",tag:"回路图纸"}]:[{name:"E7F_BACnet_Modbus_点位映射表.xlsx",tag:"点位台账"}],ye=V?[{label:"当前开关",value:g>0?"开启":"关闭"},{label:"当前亮度",value:`${g}%`},{label:"实时功率",value:g>0?`${Math.round(g*1.4)} W`:"0 W"},{label:"运行模式",value:N?"人工覆盖":"自动策略"}]:M?[{label:"室内温度",value:`${x.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${f.toFixed(1)}°C`},{label:"运行工况",value:x.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:N?"人工覆盖":"自动策略"}]:x.category==="sensor"?[{label:"实时温度",value:`${x.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${x.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${x.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:x.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:x.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:x.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:x.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:x.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${T(x.name)}</h2>
            <div class="pacom-row-sub">${T(je(x.logicalZoneId))} · ${T(mt[x.category])}</div>
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
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${W==="control"}" data-drawer-tab="control">控制与工况</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${W==="trend"}" data-drawer-tab="trend">趋势与告警${F.length>0?` (${F.length})`:""}</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${W==="profile"}" data-drawer-tab="profile">档案与图纸</button>
        </div>

        ${W==="control"?`
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
              ${ye.map(I=>`
                  <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                    <span class="pacom-row-sub">${I.label}</span>
                    <strong style="font-size:13px; font-weight:500;">${T(I.value)}</strong>
                  </div>`).join("")}
            </div>

            ${M?`
                <div class="lov-schematic-strip" aria-label="暖通工况简图">
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                    <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                    <span class="pacom-row-sub">${x.connectivity==="online"?"制冷运转":"通信离线"}</span>
                  </div>
                  <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                    <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                    <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                    <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${T(x.telemetry.temp?.value??"23.8")}°</text>
                    <rect x="80" y="8" width="54" height="28" rx="6" fill="${x.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${x.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                    <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${x.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                    <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${x.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                    <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                    <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                    <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${f.toFixed(1)}°C</text>
                  </svg>
                </div>`:""}

            ${V||M?`
                <div class="pacom-control-box">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                    ${N&&d?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${T(x.id)}">恢复自动策略</button>`:d?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
                  </div>
                  ${x.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
                  ${V?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${d?"":"disabled"}>开灯</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${d?"":"disabled"}>关灯</button>
                      </div>
                      <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                        亮度目标：<strong>${g}%</strong>
                        <input type="range" min="0" max="100" step="10" value="${g}" data-ctrl-slider="lighting.dimming" ${d?"":"disabled"} />
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
                  <div style="font-size:12px; font-weight:500;">最近批次：<code>${T(ne.batchId)}</code></div>
                  <div class="pacom-receipt-list">
                    ${ne.receipts.map(I=>{const Fe=Xt[I.status]??{text:I.status,badge:"pacom-badge--neutral"};return`
                          <div class="pacom-receipt-item">
                            <div>
                              <div><strong>${T(I.deviceId)}</strong> · ${T(I.command)} → ${T(I.targetValue)}</div>
                              ${I.errorMessage?`<div style="color:var(--pacom-status-critical);">${T(I.errorMessage)}</div>`:""}
                            </div>
                            <span class="pacom-badge ${Fe.badge}">${Fe.text}</span>
                          </div>`}).join("")}
                  </div>
                </div>`:""}`:W==="trend"?`
              <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="pacom-row-sub">近 24 小时趋势（${V?"亮度 %":M?"温度 °C":x.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${T(x.id)}">查看完整时序 →</button>
                </div>
                <svg viewBox="0 0 280 48" style="width:100%; height:48px; display:block;">
                  <line x1="0" y1="24" x2="280" y2="24" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
                  <polyline fill="none" stroke="${x.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${V?"0,38 40,38 80,16 120,12 160,14 200,20 240,14 280,16":M?"0,28 40,30 80,25 120,20 160,18 200,22 240,24 280,20":"0,24 40,25 80,23 120,21 160,20 200,22 240,21 280,22"}" />
                </svg>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:12px; font-weight:500;">本机活跃告警与未结工单</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
                </div>
                ${F.length===0&&ue.length===0?'<div class="pacom-row-sub">当前设备运行平稳，无未处理告警或工单。</div>':`${F.map(I=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${T(I.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${T(I.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去诊断 →</span>
                          </button>`).join("")}${ue.map(I=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-wo-id="${T(I.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${T(I.title)}</span>
                            <span class="pacom-badge pacom-badge--accent">查看工单 →</span>
                          </button>`).join("")}`}
              </div>`:`
              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">上下游拓扑关系（Twin Relationships）</span>
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; font-size:12px;">
                  <span class="pacom-badge pacom-badge--neutral">E7F 主控网关-01</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--accent">${T(vt(x))}</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--online">${T(je(x.logicalZoneId).replace(/^7F\s*/,""))}</span>
                </div>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">关联竣工图纸与设备手册</span>
                ${m?`<div class="pacom-info-banner">${T(m)}</div>`:""}
                ${he.map(I=>`
                    <div class="pacom-receipt-item">
                      <span style="font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${T(I.name)}">${T(I.name)}</span>
                      <button type="button" class="pacom-btn" style="height:24px; padding:0 8px; font-size:11px;" data-drawer-doc="${T(I.name)}">查阅</button>
                    </div>`).join("")}
              </div>

              <details class="lov-tech-details" open>
                <summary><span>技术标识与硬件绑定</span>${me("chevron-down",12)}</summary>
                <div class="pacom-kv-grid">
                  <span class="pacom-kv-label">设备编号</span><span><code>${T(x.id)}</code> · v${x.version}</span>
                  <span class="pacom-kv-label">图上点位</span><span>${x.planPoint?`x=${x.planPoint.x.toFixed(2)}, y=${x.planPoint.y.toFixed(2)} (图 v${x.planPoint.planVersion})`:"未标点"}</span>
                  <span class="pacom-kv-label">物理安装</span><span>${x.physicalInstalled?"现场已确认":"待现场复核"}</span>
                  <span class="pacom-kv-label">硬件绑定</span><span>${x.hardwareBinding?`${x.hardwareBinding.protocol.toUpperCase()} · ${x.hardwareBinding.networkAddress}`:"未绑定"}</span>
                </div>
              </details>`}
      </aside>
    `}function Te(x,V,M){if(!E)return"";const g=Math.max(0,H.length-x),f=i==="week",N=be.filter(F=>F.status==="active").slice(0,2);return`
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
            <button type="button" class="pacom-drawer-close" data-toggle-briefing="1" aria-label="关闭简报">${me("x",16)}</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">${f?"本周累计节能":"昨日能耗偏差"}</span><strong style="color:var(--pacom-status-online);">${f?"-7.1%（省 ¥342）":"-6.4%（省 ¥48）"}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">均温 / 在线率</span><strong>${T(M)}°C · ${x}/${H.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${V} 告警 · ${g} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖 / 未结工单</span><strong>${Math.max(1,w.size)} 覆盖 · ${pe.filter(F=>F.status!=="closed").length} 工单</strong></div>
        </div>
        ${N.length>0?`<div style="display:flex; flex-direction:column; gap:5px;">
                <span class="pacom-row-sub">优先关注事项（点击直达）</span>
                ${N.map(F=>`
                    <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${T(F.id)}">
                      <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${T(F.title)}</span>
                      <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                    </button>`).join("")}
              </div>`:""}
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报 (.txt)</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">进入告警中心 →</button>
        </div>
      </div>
    `}function xe(){const x=be.filter(g=>g.status==="active").length,V=H.filter(g=>g.connectivity==="online").length,M=H.find(g=>g.category==="sensor")?.telemetry.temp?.value??"23.4";e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">空间总览</h1>
              ${Be({tree:s,session:a,scope:y,activeAlarmCount:x,isOpen:Q,searchKeyword:te})}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${ee?n?'<span class="pacom-badge pacom-badge--neutral"><span class="pacom-dot pacom-dot--offline"></span>演示模式</span>':'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>':`<button type="button" class="pacom-pulse-btn" data-toggle-briefing="1" aria-expanded="${E}" title="点击查看今日运行简报">
                      <span class="pacom-dot pacom-dot--online"></span>
                      <span>${V}/${H.length} 在线 · ${T(M)}°C · 简报</span>
                      <span style="display:inline-flex; color:var(--pacom-text-secondary);">${Qt}</span>
                    </button>`}
            </div>
          </div>
        </header>

        ${Te(V,x,M)}

        <main class="pacom-spatial-stage">
          ${ke(x)}
          ${Ae(V,x)}
          ${De(x)}
          ${Le(V,x)}
          ${Ne()}
        </main>
      </div>
    `,Ye()}function Ye(){Ve(e,{onToggle:()=>{Q=!Q,Q&&(E=!1,D=!1),xe(),Q&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:g=>{te=g,xe();const f=e.querySelector("[data-global-space-search]");f&&(f.focus(),f.setSelectionRange(g.length,g.length))},onPick:g=>{Q=!1,Ie(g)}}),e.querySelectorAll("[data-nav-scope]").forEach(g=>{g.addEventListener("click",f=>{f.stopPropagation(),g.dataset.navScope&&Ie(ce(g.dataset.navScope))})}),e.querySelectorAll("[data-hud-tab]").forEach(g=>{g.addEventListener("click",f=>{f.stopPropagation();const N=g.dataset.hudTab;D&&Y===N?D=!1:(Y=N,D=!0,Q=!1,E=!1),xe()})}),e.querySelectorAll("[data-toggle-hud]").forEach(g=>{g.addEventListener("click",f=>{f.stopPropagation(),D=!D,D&&(Q=!1,E=!1),xe()})}),e.querySelectorAll("[data-close-hud]").forEach(g=>{g.addEventListener("click",f=>{f.stopPropagation(),D=!1,xe()})});const x=e.querySelector('[data-role="search"]');x?.addEventListener("focus",()=>{D||(D=!0,Q=!1,E=!1,b())}),x?.addEventListener("input",g=>{ae=g.currentTarget.value,D=!0,b()}),e.querySelector('[data-role="category"]')?.addEventListener("change",g=>{oe=g.currentTarget.value,xe()}),e.querySelectorAll("[data-filter-zone]").forEach(g=>{g.addEventListener("click",f=>{f.stopPropagation(),le=g.dataset.filterZone??"all",xe()})}),e.querySelectorAll("[data-select-device]").forEach(g=>{g.addEventListener("click",f=>{f.target.tagName!=="INPUT"&&(k=g.dataset.selectDevice??null,A=!0,xe())})}),e.querySelectorAll("[data-check-device]").forEach(g=>{g.addEventListener("change",()=>{const f=g.dataset.checkDevice;f&&(g.checked?_.add(f):_.delete(f),xe())})}),e.querySelectorAll("[data-pin-device]").forEach(g=>{g.addEventListener("click",f=>{f.stopPropagation(),k=g.dataset.pinDevice??null,A=!0,Q=!1,E=!1,xe()})}),e.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{A=!1,xe()}),e.querySelectorAll("[data-drawer-tab]").forEach(g=>{g.addEventListener("click",()=>{W=g.dataset.drawerTab??"control",m="",xe()})}),e.querySelectorAll("[data-drawer-doc]").forEach(g=>{g.addEventListener("click",()=>{m=`已调阅「${g.dataset.drawerDoc??""}」（完整工程文档库见「系统部署 → 楼层与功能区」）。`,xe()})}),e.querySelectorAll("[data-briefing-period]").forEach(g=>{g.addEventListener("click",()=>{i=g.dataset.briefingPeriod??"today",xe()})}),e.querySelectorAll("[data-go-alarm-id]").forEach(g=>{g.addEventListener("click",()=>{const f=g.dataset.goAlarmId??"";window.location.hash=f?`#alarms?alarm=${encodeURIComponent(f)}`:"#alarms"})}),e.querySelectorAll("[data-go-wo-id]").forEach(g=>{g.addEventListener("click",()=>{const f=g.dataset.goWoId??"";window.location.hash=f?`#alarms?wo=${encodeURIComponent(f)}`:"#alarms"})}),e.querySelector("[data-release-override]")?.addEventListener("click",g=>{const f=g.currentTarget.dataset.releaseOverride;f&&(w.delete(f),xe())}),e.querySelectorAll("[data-zone-power]").forEach(g=>{g.addEventListener("click",f=>{f.stopPropagation();const N=g.dataset.zonePower,F=g.dataset.zoneVal==="true";if(!N)return;const ue=H.filter(ye=>ye.logicalZoneId===N&&ye.category==="lighting").map(ye=>ye.id),he=H.filter(ye=>ye.logicalZoneId===N&&ye.category==="hvac").map(ye=>ye.id);ue.length?r(ue,"lighting.power",F):he.length&&r(he,"hvac.power",F)})}),e.querySelectorAll("[data-locate-device]").forEach(g=>{g.addEventListener("click",()=>{const f=g.dataset.locateDevice;f&&(k=f,A=!0,D=!1,xe())})}),e.querySelectorAll("[data-go-alarms]").forEach(g=>{g.addEventListener("click",()=>{window.location.hash="#alarms"})}),e.querySelectorAll("[data-go-analysis]").forEach(g=>{g.addEventListener("click",()=>{const f=g.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(f)}`})}),e.querySelectorAll("[data-go-timeseries]").forEach(g=>{g.addEventListener("click",()=>{const f=g.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(f)}`})}),e.querySelectorAll("[data-toggle-briefing]").forEach(g=>{g.addEventListener("click",f=>{f.stopPropagation(),E=!E,E&&(Q=!1,D=!1),xe()})}),e.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const g=H.filter(ye=>ye.connectivity==="online").length,f=be.filter(ye=>ye.status==="active").length,N=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${g}/${H.length}（离线 ${H.length-g} 台）`,`待处理告警：${f} 条`,`人工覆盖中：${w.size} 台`].join(`
`),F=new Blob([N],{type:"text/plain;charset=utf-8;"}),ue=URL.createObjectURL(F),he=document.createElement("a");he.href=ue,he.download="pacom-daily-briefing.txt",he.click(),URL.revokeObjectURL(ue)}),e.querySelectorAll("[data-ctrl-cmd]").forEach(g=>{g.addEventListener("click",()=>{if(!k||!g.dataset.ctrlCmd)return;const f=g.dataset.ctrlVal??"",N=f==="true"?!0:f==="false"?!1:Number(f);r([k],g.dataset.ctrlCmd,N)})}),e.querySelector("[data-ctrl-slider]")?.addEventListener("change",g=>{const f=g.currentTarget;!k||!f.dataset.ctrlSlider||r([k],f.dataset.ctrlSlider,Number(f.value))}),e.querySelectorAll("[data-batch-cmd]").forEach(g=>{g.addEventListener("click",()=>{const f=Array.from(_),N=g.dataset.batchVal??"",F=N==="true"?!0:N==="false"?!1:N;r(f,g.dataset.batchCmd,F)})}),e.querySelectorAll("[data-ack-alarm]").forEach(g=>{g.addEventListener("click",async()=>{!g.dataset.ackAlarm||y.level!=="floor"||!z||(await t.acknowledgeAlarm(g.dataset.ackAlarm,"首页快速确认"),be=await t.listAlarms(y.floorId),xe())})}),e.querySelectorAll("[data-canvas-layer]").forEach(g=>{g.addEventListener("click",()=>{const f=g.dataset.canvasLayer;f&&(c=f,xe())})}),e.querySelectorAll("[data-zoom]").forEach(g=>{g.addEventListener("click",()=>{const f=g.dataset.zoom;f==="in"?l=Math.min(2.6,Number((l+.2).toFixed(2))):f==="out"?l=Math.max(.6,Number((l-.2).toFixed(2))):(l=1,h=0,Z=0),K()})}),e.querySelector('[data-role="elevation-scrubber"]')?.addEventListener("wheel",g=>{g.preventDefault();const f=y;if(f.level!=="building"&&f.level!=="floor")return;const N=$e(f.buildingId),F=[...O?[{level:"building",projectId:f.projectId,buildingId:f.buildingId}]:[],...N.map(ye=>({level:"floor",projectId:f.projectId,buildingId:f.buildingId,floorId:ye.id}))],ue=F.findIndex(ye=>ye.level==="building"?f.level==="building":ye.level==="floor"&&f.level==="floor"&&ye.floorId===f.floorId);if(ue<0)return;const he=Math.max(0,Math.min(F.length-1,ue+(g.deltaY>0?1:-1)));he!==ue&&F[he]&&Ie(F[he])},{passive:!1});const M=e.querySelector('[data-role="canvas-stage"]');if(M&&!ee){let g=!1,f=!1,N=0,F=0,ue=0,he=0;M.addEventListener("pointerdown",I=>{I.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(g=!0,f=!1,N=I.clientX,F=I.clientY,ue=h,he=Z,M.classList.add("is-panning"),M.setPointerCapture?.(I.pointerId))}),M.addEventListener("pointermove",I=>{if(!g)return;const Fe=I.clientX-N,$=I.clientY-F;(Math.abs(Fe)>3||Math.abs($)>3)&&(f=!0),h=ue+Fe,Z=he+$,K()});const ye=()=>{g&&(g=!1,M.classList.remove("is-panning"),!f&&(D||Q||E)&&(D=!1,Q=!1,E=!1,xe()))};M.addEventListener("pointerup",ye),M.addEventListener("pointercancel",ye),M.addEventListener("wheel",I=>{I.preventDefault();const Fe=I.deltaY<0?.12:-.12;l=Math.max(.6,Math.min(2.6,Number((l+Fe).toFixed(2)))),K()},{passive:!1}),M.addEventListener("dblclick",I=>{I.target?.closest("button")||(l=1,h=0,Z=0,K())})}else e.querySelector(".pacom-spatial-stage")?.addEventListener("click",g=>{g.target?.closest("button, input, select, .pacom-hud-search-wrap, .pacom-space-popover, .lov-briefing-pop")||(D||Q||E)&&(D=!1,Q=!1,E=!1,xe())})}e.addEventListener("keydown",x=>{x.key==="Escape"&&(Q||E||D||A)&&(Q=!1,E=!1,D=!1,A=!1,xe())}),await Ie(y,!0)}const ta=new Set(["lighting","hvac","alarm_rules"]),bt={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},Ge=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function aa(e){const t=new Set;for(const a of e.actions)a.command.startsWith("lighting")?t.add("照明"):a.command.startsWith("hvac")?t.add("暖通"):t.add("综合");return Array.from(t)}function sa(e,t,a){const s=a?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
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
  `}async function la(e,t,a){let s=_e(),n=!1,d="",[z,B,R,J]=await Promise.all([t.getSpatialTree(),t.listScenes(p.floorId),t.getRuntimeSettings(p.projectId),t.getFloorDevices(p.floorId).catch(()=>[])]),q="manual",X="balanced",O="all",re=null,y="",Y=!1,D=!1,Q=!1,te="all",ae=null,oe="",le="",de=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const ve=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],fe=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],k=[{deviceId:J[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],A=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${R.calendar.workdayStart} – ${R.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${R.calendar.nightGuardStart} – 次日 ${R.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],W=t.subscribeFloorEvents(p.floorId,async E=>{E.type==="control.receipt.updated"&&re?.batchId===E.batchId&&(re=await t.getControlBatch(E.batchId),m())});function m(){const E=y.trim().toLowerCase(),i=E?B.filter(l=>`${l.name} ${l.description}`.toLowerCase().includes(E)):B,c=R.rules.filter(l=>ta.has(l.category)),w=O==="all"?c:O==="cbm"?[]:c.filter(l=>l.category===O),_=O==="all"||O==="cbm",H=te==="issues"?ve.filter(l=>l.status!=="verified"):ve,be=Ge.find(l=>l.id===X)??Ge[1],pe=a.scope.canControlDevices,ne=a.scope.canEditDeployment;e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${Be({tree:z,session:a,scope:s,isOpen:n,searchKeyword:d})}
            </div>

            <div class="pacom-header-meta">
              <button type="button" class="pacom-badge ${de.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${de.length>0?`人工覆盖中：${de.length} 台 ${me("chevron-down",12)}`:`全部自动托管 ${me("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${Q?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${ve.length}）</button>
              ${q==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${Y?"收起表单":"+ 新建场景"}</button>`:q==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${q==="manual"}" data-scene-tab="manual">快捷场景（${B.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${q==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${q==="rules"}" data-scene-tab="rules">条件联动（${c.length+fe.length}）</button>
          </nav>
        </header>

        ${D?`
            <div class="lov-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${de.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${me("x",16)}</button>
              </div>
              ${de.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':de.map(l=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${l.name}</div>
                            <div class="pacom-row-sub">${l.reason}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${l.id}" ${pe?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${de.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${pe?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${Q?`
            <aside class="lov-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${me("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${te==="all"}" data-log-filter="all">全部（${ve.length}）</button>
                  <button class="pacom-tab" aria-selected="${te==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${H.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${H.map(l=>`
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

          ${q==="manual"?`
              ${re?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="lov-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${re.batchId}</span>
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
                            ${re.receipts.map(l=>`
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

              ${Y?`
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
                                ${J.map(Z=>`<option value="${Z.id}" ${Z.id===l.deviceId?"selected":""}>${Z.name}</option>`).join("")}
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
                ${i.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="lov-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':i.map(l=>{const h=aa(l),Z=l.actions.slice(0,3).map(se=>{const Se=J.find(Ie=>Ie.id===se.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??se.deviceId,$e=se.command==="lighting.dimming"?`亮度 ${se.targetValue}%`:se.command==="hvac.setpoint"?`设温 ${se.targetValue}°C`:se.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${Se} → ${$e}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${l.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${h.map(se=>`<span class="pacom-badge pacom-badge--accent">${se}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${l.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${l.description}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${Z}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${l.lastExecutedAt?l.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${l.id}" ${pe?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:q==="schedule_oss"?`
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
                    <span class="lov-kpi-delta">当前人工覆盖挂起：${de.length} 台</span>
                  </div>
                </div>

                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="lov-mode-grid">
                    ${Ge.map(l=>`
                      <button type="button" class="lov-mode-card" aria-pressed="${X===l.id}" data-oss-mode="${l.id}" ${pe?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${l.title}</strong>
                          <span class="pacom-badge ${X===l.id?"pacom-badge--online":"pacom-badge--neutral"}">${X===l.id?"当前生效":l.badge}</span>
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
                                <td>${sa(l.startHour,l.endHour,l.enabled)}</td>
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
                                      ${pe?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(l=>{const h=l==="all"?"全部":bt[l]??l,Z=l==="all"?c.length+fe.length:l==="cbm"?fe.length:c.filter(se=>se.category===l).length;return`
                            <button type="button" class="lov-count-pill" aria-pressed="${O===l}" data-rule-cat="${l}">
                              <span>${h}</span><span class="lov-count-num">${Z}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="lov-settings-card">
                    ${w.map(l=>{const h=ae===l.id;return`
                          <div class="lov-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="lov-setting-meta">
                                <span class="lov-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${bt[l.category]??l.category}</span>
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
                    ${_?fe.map(l=>{const h=Math.min(100,Math.round(l.runtimeHours/l.thresholdHours*100));return`
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
    `,Ve(e,{onToggle:()=>{n=!n,m(),n&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:l=>{d=l,m();const h=e.querySelector("[data-global-space-search]");h&&(h.focus(),h.setSelectionRange(l.length,l.length))},onPick:l=>{s=l,n=!1,m()}}),e.querySelectorAll("[data-scene-tab]").forEach(l=>{l.addEventListener("click",()=>{q=l.dataset.sceneTab??"manual",oe="",m()})}),e.querySelectorAll("[data-toggle-overrides]").forEach(l=>{l.addEventListener("click",()=>{D=!D,m()})}),e.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{de=[],oe="已释放全部人工覆盖设备，自动节能策略已恢复托管。",m()}),e.querySelectorAll("[data-release-one]").forEach(l=>{l.addEventListener("click",()=>{const h=l.dataset.releaseOne;de=de.filter(Z=>Z.id!==h),oe="已恢复该设备的自动策略托管。",m()})}),e.querySelectorAll("[data-toggle-cmdlog]").forEach(l=>{l.addEventListener("click",()=>{Q=!Q,m()})}),e.querySelectorAll("[data-log-filter]").forEach(l=>{l.addEventListener("click",()=>{te=l.dataset.logFilter??"all",m()})}),e.querySelector("[data-close-batch]")?.addEventListener("click",()=>{re=null,m()}),e.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),e.querySelectorAll("[data-oss-mode]").forEach(l=>{l.addEventListener("click",()=>{const h=l.dataset.ossMode;if(!h)return;X=h;const Z=Ge.find(se=>se.id===h);oe=`已切换至「${Z?.title??h}」模式（明日预测启动 ${Z?.predictedStart??""}）。`,m()})}),e.querySelectorAll("[data-toggle-schedule]").forEach(l=>{l.addEventListener("click",()=>{const h=l.dataset.toggleSchedule,Z=A.find(se=>se.id===h);Z&&(Z.enabled=!Z.enabled,oe=`排程「${Z.name}」已${Z.enabled?"恢复启用":"临时暂停"}。`,m())})}),e.querySelectorAll("[data-rule-cat]").forEach(l=>{l.addEventListener("click",()=>{O=l.dataset.ruleCat??"all",m()})}),e.querySelectorAll("[data-expand-rule]").forEach(l=>{l.addEventListener("click",()=>{const h=l.dataset.expandRule??null;ae=ae===h?null:h,m()})}),e.querySelectorAll("[data-toggle-cbm]").forEach(l=>{l.addEventListener("click",()=>{const h=fe.find(Z=>Z.id===l.dataset.toggleCbm);h&&(h.enabled=!h.enabled,oe=`工时维保规则「${h.name}」已${h.enabled?"启用":"停用"}。`,m())})}),e.querySelectorAll("[data-toggle-strategy-rule]").forEach(l=>{l.addEventListener("click",async()=>{le="";try{await t.toggleRuntimeRule(l.dataset.toggleStrategyRule,l.dataset.ruleNext==="true",Number(l.dataset.ruleVer)),R=await t.getRuntimeSettings(p.projectId),oe="条件联动规则状态与版本回执已更新。",m()}catch(h){le=h instanceof Error?h.message:String(h),m()}})}),e.querySelectorAll("[data-toggle-create]").forEach(l=>{l.addEventListener("click",()=>{Y=!Y,m()})}),e.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{k.push({deviceId:J[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),m()}),e.querySelectorAll("[data-del-draft-action]").forEach(l=>{l.addEventListener("click",()=>{const h=Number(l.dataset.delDraftAction);k.length>1&&(k.splice(h,1),m())})}),e.querySelectorAll("[data-draft-dev]").forEach(l=>{l.addEventListener("change",()=>{const h=k[Number(l.dataset.draftDev)];h&&(h.deviceId=l.value)})}),e.querySelectorAll("[data-draft-cmd]").forEach(l=>{l.addEventListener("change",()=>{const h=k[Number(l.dataset.draftCmd)];h&&(h.command=l.value)})}),e.querySelectorAll("[data-draft-val]").forEach(l=>{l.addEventListener("change",()=>{const h=k[Number(l.dataset.draftVal)];h&&(h.targetValue=l.value)})}),e.querySelector("[data-scene-search]")?.addEventListener("input",l=>{const h=l.currentTarget,Z=h.selectionStart??h.value.length;y=h.value,m();const se=e.querySelector("[data-scene-search]");se&&(se.focus(),se.setSelectionRange(Z,Z))}),e.querySelectorAll("[data-exec-scene]").forEach(l=>{l.addEventListener("click",async()=>{le="";const h=B.find(Z=>Z.id===l.dataset.execScene);try{re=await t.executeScene(l.dataset.execScene),B=await t.listScenes(p.floorId),ve.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:h?.name??"E7F 场景",action:`${re.receipts.length} 台设备联动下发`,status:"verified"}),m()}catch(Z){le=Z instanceof Error?Z.message:String(Z),m()}})}),e.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async l=>{l.preventDefault();const h=new FormData(l.currentTarget);try{await t.createScene({projectId:p.projectId,floorId:p.floorId,name:String(h.get("name")??""),description:String(h.get("description")??""),actions:k.map(Z=>({deviceId:Z.deviceId,command:Z.command,targetValue:Z.targetValue==="true"?!0:Z.targetValue==="false"?!1:Number(Z.targetValue)||50}))}),B=await t.listScenes(p.floorId),Y=!1,oe=`快捷场景已保存（共绑定 ${k.length} 条联动动作）。`,m()}catch(Z){le=Z instanceof Error?Z.message:String(Z),m()}})}m(),window.addEventListener("hashchange",()=>W(),{once:!0})}function lt(e,t){return e.length===0?'<div class="lov-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':e.map(a=>`
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
      </div>`).join("")}async function oa(e,t,a){let s="calendar",n=_e(),d=!1,z="";const[B,R]=await Promise.all([t.getSpatialTree(),t.getRuntimeSettings(p.projectId)]);let J=R,q=J.calendar.workdayStart,X=J.calendar.workdayEnd,O=J.calendar.nightGuardStart,re=J.calendar.nightGuardEnd,y=!0,Y=[];const D=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let Q="flat";const te={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},ae={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},oe={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},le={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},de=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let ve="",fe="";function k(){const A=a.scope.canEditDeployment,W=J.rules.filter(i=>i.category==="weather_area"),m=J.rules.filter(i=>i.category==="metering_carbon"),E=J.rules.filter(i=>i.category==="templates");e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">运行设置</h1>
              ${Be({tree:B,session:a,scope:n,maxGranularity:"project",isOpen:d,searchKeyword:z})}
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
            ${ve?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${ve}</span></div>`:""}
            ${fe?`<div class="pacom-alert-banner">${fe}</div>`:""}

            ${s==="calendar"?`
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">工作时间与夜间值守基准</h2>
                    <span class="pacom-badge pacom-badge--neutral">版本 v${J.calendar.version}</span>
                  </div>
                  <div class="lov-settings-card">
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">工作日上班 / 下班时间</span>
                        <span class="lov-setting-desc">驱动「智能策略 → 排程与节能」早间预冷及公区照明启停；晚于 21:30 将自动提示交叠冲突</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:116px;" type="time" data-cal-start value="${q}" aria-label="工作日上班时间" ${A?"":"disabled"} />
                        <span class="pacom-row-sub">至</span>
                        <input class="pacom-input" style="width:116px;" type="time" data-cal-end value="${X}" aria-label="工作日下班时间" ${A?"":"disabled"} />
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
                        <input class="pacom-input" style="width:116px;" type="time" data-night-end value="${re}" aria-label="夜间值守结束" ${A?"":"disabled"} />
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
                    <span class="pacom-row-sub">共 ${D.length} 条</span>
                  </div>
                  <div class="lov-settings-card">
                    ${D.map(i=>`
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

                ${Y.length>0?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">受影响的定时与夜间规则预览</h2>
                        <span class="pacom-row-sub">共 ${Y.length} 条</span>
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
                              ${Y.map(i=>`
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
                      ${lt(W,A)}
                    </div>
                  </section>

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">电价与碳排口径</h2>
                      <div class="pacom-tabs">
                        <button class="pacom-tab" aria-selected="${Q==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                        <button class="pacom-tab" aria-selected="${Q==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                      </div>
                    </div>
                    <div class="lov-settings-card">
                      ${Q==="flat"?`
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
                      ${lt(m,A)}
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
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="minTemp" value="${ae.minTemp}" aria-label="最低设定温度" ${A?"":"disabled"} />
                            <span class="pacom-row-sub">至</span>
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="maxTemp" value="${ae.maxTemp}" aria-label="最高设定温度" ${A?"":"disabled"} />
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
                              <option value="2h" ${ae.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                              <option value="4h" ${ae.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                              <option value="eod" ${ae.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                              <option value="permanent" ${ae.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                            </select>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">控制指令回读超时阈值（秒）</span>
                            <span class="lov-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                          </div>
                          <div class="lov-setting-control">
                            <input class="pacom-input" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${ae.readbackTimeoutSec}" aria-label="回读超时阈值" ${A?"":"disabled"} />
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
                        ${lt(E,A)}
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
                              ${de.map(i=>`
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
    `,Ve(e,{onToggle:()=>{d=!d,k(),d&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:i=>{z=i,k();const c=e.querySelector("[data-global-space-search]");c&&(c.focus(),c.setSelectionRange(i.length,i.length))},onPick:i=>{n=i,d=!1,k()}}),e.querySelectorAll("[data-stab]").forEach(i=>{i.addEventListener("click",()=>{s=i.dataset.stab??"calendar",ve="",fe="",k()})}),e.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{y=!y,ve=`法定节假日自动跳过已${y?"开启":"关闭"}。`,k()}),e.querySelector("[data-night-start]")?.addEventListener("change",i=>{O=i.currentTarget.value}),e.querySelector("[data-night-end]")?.addEventListener("change",i=>{re=i.currentTarget.value}),e.querySelector("[data-add-sd-form]")?.addEventListener("submit",i=>{i.preventDefault();const c=new FormData(i.currentTarget);D.push({id:`sd-${Date.now()}`,date:String(c.get("date")??""),label:String(c.get("label")??""),mode:String(c.get("mode")??"保持工作日工况")}),ve="已添加特殊例外日期，当日自动覆盖默认节假日排程。",k()}),e.querySelectorAll("[data-del-sd]").forEach(i=>{i.addEventListener("click",()=>{const c=D.findIndex(w=>w.id===i.dataset.delSd);c>=0&&D.splice(c,1),k()})}),e.querySelectorAll("[data-tariff-mode]").forEach(i=>{i.addEventListener("click",()=>{Q=i.dataset.tariffMode??"flat",k()})}),e.querySelectorAll("[data-energy-field]").forEach(i=>{i.addEventListener("change",()=>{const c=i.dataset.energyField;c&&(te[c]=i.value)})}),e.querySelector("[data-save-energy]")?.addEventListener("click",()=>{ve=Q==="flat"?`能碳与气象口径已保存（面积 ${te.billingArea} m² · 综合电价 ¥${te.tariffYuan}/kWh · 因子 ${te.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${te.tariffPeak} / 平 ¥${te.tariffFlat} / 谷 ¥${te.tariffValley}）。`,k()}),e.querySelectorAll("[data-guard-field]").forEach(i=>{i.addEventListener("change",()=>{const c=i.dataset.guardField;c&&(ae[c]=i.value)})}),e.querySelector("[data-save-guard]")?.addEventListener("click",()=>{ve=`控制安全边界已保存（温区 ${ae.minTemp}–${ae.maxTemp}°C · 超时 ${ae.readbackTimeoutSec}s）。`,k()}),e.querySelectorAll("[data-auto-wo]").forEach(i=>{i.addEventListener("change",()=>{const c=i.dataset.autoWo;c&&(oe[c]=i.value),ve="自动转工单配置已更新。",k()})}),e.querySelectorAll("[data-toggle-autowo]").forEach(i=>{i.addEventListener("click",()=>{const c=i.dataset.toggleAutowo;c&&(oe[c]=!oe[c],ve="自动转工单保护策略已更新。",k())})}),e.querySelector("[data-digest-time]")?.addEventListener("change",i=>{le.dailyDigestTime=i.currentTarget.value,ve=`每日晨间简报发送时刻已更新为 ${le.dailyDigestTime}。`,k()}),e.querySelectorAll("[data-notify-key]").forEach(i=>{i.addEventListener("click",()=>{const c=i.dataset.notifyKey;c&&(le[c]=!le[c],ve="通知策略偏好已更新。",k())})}),e.querySelectorAll("[data-toggle-nr]").forEach(i=>{i.addEventListener("click",()=>{const c=de.find(w=>w.id===i.dataset.toggleNr);c&&(c.enabled=!c.enabled,ve=`工作组「${c.groupName}」的通知分流规则已${c.enabled?"启用":"停用"}。`,k())})}),e.querySelector("[data-cal-start]")?.addEventListener("change",i=>{q=i.currentTarget.value}),e.querySelector("[data-cal-end]")?.addEventListener("change",i=>{X=i.currentTarget.value}),e.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{fe="",Y=await t.previewCalendarImpact(p.projectId,q,X),k()}),e.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{fe="";try{const i=await t.saveWorkCalendar(p.projectId,q,X,J.calendar.version);J={...J,calendar:{...i,nightGuardStart:O,nightGuardEnd:re}},ve=`运行日历已保存至 v${i.version}（工作日 ${i.workdayStart}–${i.workdayEnd} · 夜间值守 ${O}–${re}）`,Y=[],k()}catch(i){fe=i instanceof Error?i.message:String(i),k()}}),e.querySelectorAll("[data-toggle-rule]").forEach(i=>{i.addEventListener("click",async()=>{fe="";try{await t.toggleRuntimeRule(i.dataset.toggleRule,i.dataset.ruleNext==="true",Number(i.dataset.ruleVer)),J=await t.getRuntimeSettings(p.projectId),ve="策略状态与版本回执已更新。",k()}catch(c){fe=c instanceof Error?c.message:String(c),k()}})})}k()}const ht="pacom.web.sidebar.collapsed",na=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,ot=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"运行设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],it={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"运行设置",deployment:"系统部署",account:"机构与账户"},ft=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function nt(){const e=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return e in it?e:"home"}function Ce(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function ia(e,t,a,s){e.classList.remove("bare-login");let n=a,d=nt(),z=localStorage.getItem(ht)==="1",B=!1,R=!1,J="",q=!1,X=0,O={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};const re=t.mode==="demo"&&typeof t.switchDemoRole=="function";async function y(){try{const[c,w,_,H,be]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(p.floorId).catch(()=>[]),t.listAlarms(p.floorId).catch(()=>[]),t.listWorkOrders(p.floorId).catch(()=>[]),t.listScenes(p.floorId).catch(()=>[])]);O={devices:w,zones:c.zones,alarms:_,workOrders:H,scenes:be},X=_.filter(pe=>pe.status==="active").length,de()}catch{}}function Y(){return ot.map(c=>`
        ${c.id==="settings"?'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${c.id}" aria-current="${d===c.id?"page":"false"}" title="${c.label}">
          ${me(c.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${c.label}</span>
          ${c.id==="alarms"&&X>0?`<span class="pacom-nav-count" title="待处理告警 ${X} 条">${X}</span>`:""}
        </button>`).join("")}function D(){const c=J.trim().toLowerCase(),w=c?ot.filter(h=>h.label.toLowerCase().includes(c)).slice(0,4):ot,_=c?O.devices.filter(h=>`${h.name} ${h.id} ${h.category}`.toLowerCase().includes(c)).slice(0,5):O.devices.slice(0,3),H=c?O.zones.filter(h=>h.name.toLowerCase().includes(c)).slice(0,3):[],be=c?O.alarms.filter(h=>`${h.title} ${h.message} ${h.id}`.toLowerCase().includes(c)).slice(0,4):O.alarms.filter(h=>h.status==="active").slice(0,2),pe=c?O.workOrders.filter(h=>`${h.title} ${h.id}`.toLowerCase().includes(c)).slice(0,3):[],ne=c?O.scenes.filter(h=>`${h.name} ${h.description}`.toLowerCase().includes(c)).slice(0,3):[],ee=c?ft.filter(h=>`${h.title} ${h.category}`.toLowerCase().includes(c)).slice(0,4):ft.slice(0,2),l=[];return _.length&&l.push(`<div class="pacom-search-group">${c?"设备（空间总览）":"常用设备直达"}</div>`+_.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(h.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Ce(h.name)}</span><span class="pacom-badge ${h.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${h.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),H.length&&l.push('<div class="pacom-search-group">功能区</div>'+H.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(h.id)}"><span>${Ce(h.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),be.length&&l.push(`<div class="pacom-search-group">${c?"告警":"待处理告警"}</div>`+be.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(h.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Ce(h.title)}</span><span class="pacom-badge pacom-badge--warning">${h.status==="active"?"待处理":"已确认"}</span></button>`).join("")),pe.length&&l.push('<div class="pacom-search-group">运维工单</div>'+pe.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(h.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Ce(h.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),ne.length&&l.push('<div class="pacom-search-group">智能策略</div>'+ne.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${Ce(h.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),ee.length&&l.push('<div class="pacom-search-group">图纸与工程文档</div>'+ee.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="${h.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Ce(h.title)}</span><span class="pacom-badge pacom-badge--neutral">${Ce(h.category)}</span></button>`).join("")),w.length&&l.push('<div class="pacom-search-group">工作区</div>'+w.map(h=>`<button type="button" class="pacom-search-hit" data-search-hash="#${h.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${me(h.icon,14)}${Ce(h.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),l.length?l.join(""):`<div class="pacom-nav-empty">未找到与「${Ce(J)}」匹配的设备、区域、告警、工单或图纸</div>`}function Q(c){c.querySelectorAll("[data-search-hash]").forEach(w=>{w.addEventListener("click",()=>{const _=w.dataset.searchHash||"#home";q=!1,J="",te(),B=!1,window.location.hash===_?(d=nt(),A(!0)):window.location.hash=_})})}function te(){if(e.querySelector('[data-role="cmd-scrim"]')?.remove(),!q)return;const c=document.createElement("div");c.className="pacom-cmd-scrim",c.dataset.role="cmd-scrim",c.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${me("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${Ce(J)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${D()}
        </div>
      </div>
    `,e.appendChild(c),c.addEventListener("click",H=>{H.target===c&&(q=!1,te())});const w=c.querySelector('[data-role="cmd-input"]'),_=c.querySelector('[data-role="cmd-body"]');_&&Q(_),w?.focus(),w?.addEventListener("input",H=>{J=H.currentTarget.value,_&&(_.innerHTML=D(),Q(_))})}function ae(){if(!R)return"";const c=n.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${z?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${Ce(n.roleLabel)}${re?" · 演示":""}</small>
          </span>
          ${me("check",16,"pacom-pop-check")}
        </button>

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${me("settings",16)}</span>
          <span class="pacom-pop-text">机构设置</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${Ce(c)}</span>
          <span class="pacom-pop-text">
            <b>${Ce(n.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${re?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">演示角色切换（RBAC 权限预览）</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(qe).map(w=>{const _=qe[w],H=w===n.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${H}" data-pop-role="${w}">
                      <span class="pacom-pop-text">
                        <b>${Ce(_.roleLabel)}</b>
                        <small>${Ce(_.displayName)}</small>
                      </span>
                      ${H?me("check",16,"pacom-pop-check"):""}
                    </button>`}).join("")}
            </div>`:""}

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${me("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function oe(c){switch(document.title=`${it[d]} · PACOM Station`,d){case"home":await ea(c,t,n);return;case"analysis":await Ut(c,t,n);return;case"alarms":await Mt(c,t,n);return;case"scenes":await la(c,t,n);return;case"settings":await oa(c,t,n);return;case"deployment":await Yt(c,t,n);return;case"account":await It(c,t,n,w=>{n=w,A(!0)},le);return}}async function le(){R=!1,B=!1,q=!1,i();try{await t.logout()}finally{window.location.hash="#login",s()}}function de(){const c=e.querySelector('[data-role="nav-list"]');c&&(c.innerHTML=Y(),fe())}function ve(){e.querySelector('[data-role="org-popover"]')?.remove();const c=e.querySelector('[data-role="org-menu-btn"]');if(c&&c.setAttribute("aria-expanded",String(R)),!R)return;const w=document.createElement("div");w.innerHTML=ae().trim();const _=w.firstElementChild;_&&(e.appendChild(_),k())}function fe(){e.querySelectorAll("[data-route]").forEach(c=>{c.addEventListener("click",()=>{const w=c.dataset.route;w===d&&!B||(d=w,B=!1,R=!1,window.location.hash=`#${d}`,A(!0))})})}function k(){e.querySelectorAll('[data-pop-act="go-account"]').forEach(c=>{c.addEventListener("click",()=>{R=!1,B=!1,d="account",window.location.hash="#account",A(!0)})}),e.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{le()}),e.querySelectorAll("[data-pop-role]").forEach(c=>{c.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const w=c.dataset.popRole;R=!1,B=!1,n=await t.switchDemoRole(w),await A(!0)})})}async function A(c){const w=e.querySelector('[data-role="main-stage"]');if(!c&&w){const H=e.querySelector(".pacom-nav-rail");H&&(H.classList.toggle("is-collapsed",z),H.classList.toggle("is-mobile-open",B));const be=e.querySelector('[data-role="mobile-scrim"]');be&&be.classList.toggle("is-open",B),ve();return}e.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${me("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${it[d]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${Ce(n.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${B?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${z?"is-collapsed":""} ${B?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${na}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${z?"展开侧栏":"收起侧栏"}" aria-label="${z?"展开侧栏":"收起侧栏"}">
              ${me("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${me("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${Y()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${d==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${R}" title="广州国家实验室 · ${Ce(n.displayName)}">
              <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>
              <span class="pacom-org-name">广州国家实验室</span>
              ${me("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,e.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{z=!z,R=!1,localStorage.setItem(ht,z?"1":"0");const H=e.querySelector(".pacom-nav-rail"),be=e.querySelector('[data-role="toggle-sidebar"]');H&&H.classList.toggle("is-collapsed",z),be&&(be.title=z?"展开侧栏":"收起侧栏",be.setAttribute("aria-label",be.title),be.innerHTML=me("panel-left",16)),ve()}),e.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{R=!1,ve(),q=!0,te()}),e.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{B=!B,A(!1)}),e.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{B=!1,R=!1,A(!1)}),e.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",H=>{H.stopPropagation(),R=!R,ve()}),fe(),ve(),te();const _=e.querySelector('[data-role="main-stage"]');_&&await oe(_)}const W=c=>{const w=c.target;R&&!w?.closest('[data-role="org-popover"]')&&!w?.closest('[data-role="org-menu-btn"]')&&(R=!1,ve())},m=c=>{if((c.metaKey||c.ctrlKey)&&c.key.toLowerCase()==="k"){c.preventDefault(),R=!1,ve(),q=!q,te();return}c.key==="Escape"&&(q?(q=!1,te()):R?(R=!1,ve()):B&&(B=!1,A(!1)))},E=()=>{d=nt(),R=!1,B=!1,q=!1,A(!0),y()};function i(){document.removeEventListener("click",W),document.removeEventListener("keydown",m),window.removeEventListener("hashchange",E)}document.addEventListener("click",W),document.addEventListener("keydown",m),window.addEventListener("hashchange",E),await A(!0),y()}const ca=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,da='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',ra='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',Ue=me("x",16),yt={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},pa={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function ua(e){const t=e.replace(/\D/g,"");return t.length===11?`${t.slice(0,3)} •••• ${t.slice(7)}`:e}function Me(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function $t(e,t,a){e.classList.add("bare-login"),document.title="登录 · PACOM Station";let s=!1,n=!1,d="",z="",B="",R="",J=!1,q={},X="",O=!1,re="",y=0,Y=null,D=null,Q="privacy",te="",ae="",oe="";const le=t.mode==="demo"&&typeof t.switchDemoRole=="function";function de(){Y!==null&&(window.clearInterval(Y),Y=null),e.classList.remove("bare-login")}function ve(){y=60,Y!==null&&window.clearInterval(Y),Y=window.setInterval(()=>{y-=1,y<=0&&(y=0,Y!==null&&(window.clearInterval(Y),Y=null));const W=e.querySelector('[data-act="send-sms"]');W&&(W.disabled=y>0,W.textContent=y>0?`${y} 秒后重发`:re?"重新获取":"获取验证码")},1e3)}function fe(){if(!D)return"";if(D==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ue}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${Me(ae)}" />
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
      `;if(D==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ue}</button>
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
      `;if(D==="legal"){const W=yt[Q],m=["privacy","terms","service"].map(E=>`<button type="button" role="tab" aria-selected="${Q===E}" class="au-legal-tab ${Q===E?"is-active":""}" data-act="switch-legal" data-tab="${E}">${yt[E].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ue}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${m}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${W.items.map(E=>`<li>${Me(E)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return D==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ue}</button>
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
      `:D==="demoRoles"&&le?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择演示角色</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ue}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(qe).map(W=>{const m=qe[W];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${W}">
                        <div>
                          <b>${Me(m.roleLabel)} · ${Me(m.displayName)}</b>
                          <small>${Me(pa[W])}</small>
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
      `:""}function k(){const W=s?`
        <div class="au-field ${q.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Me(B)}" aria-invalid="${q.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${y>0?"disabled":""}>
              ${y>0?`${y} 秒后重发`:re?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${Me(q.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${re?`验证码已发送至 ${Me(ua(re))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${q.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Me(d)}" aria-invalid="${q.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${Me(q.id??"")}</p>
        </div>
      `,m=s?`
        <div class="au-field ${q.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Me(R)}" aria-invalid="${q.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${Me(q.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${q.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${n?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${Me(z)}" aria-invalid="${q.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${n?"隐藏密码":"显示密码"}">
              ${n?ra:da}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${Me(q.pwd??"")}</p>
        </div>
      `;e.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${ca}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${O?"disabled":""}>
                  ${W}
                  ${m}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${X?"":"hidden"}>${Me(X)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${J?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${O?"disabled":""}>
                    ${O?"正在登录…":"登录"}
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
      ${fe()}
    `,A()}function A(){const W=e.querySelector("#au-id"),m=e.querySelector("#au-pwd"),E=e.querySelector("#au-sphone"),i=e.querySelector("#au-scode"),c=e.querySelector('input[name="keep"]');W?.addEventListener("input",()=>{if(d=W.value,q.id||X){delete q.id,X="",W.closest(".au-field")?.classList.remove("bad");const w=e.querySelector("#au-id-err");w&&(w.textContent="");const _=e.querySelector("#au-login-ferr");_&&(_.hidden=!0)}}),m?.addEventListener("input",()=>{if(z=m.value,q.pwd||X){delete q.pwd,X="",m.closest(".au-field")?.classList.remove("bad");const w=e.querySelector("#au-pwd-err");w&&(w.textContent="");const _=e.querySelector("#au-login-ferr");_&&(_.hidden=!0)}}),E?.addEventListener("input",()=>{if(B=E.value,q.sphone||X){delete q.sphone,X="",E.closest(".au-field")?.classList.remove("bad");const w=e.querySelector("#au-sphone-err");w&&(w.textContent="");const _=e.querySelector("#au-login-ferr");_&&(_.hidden=!0)}}),i?.addEventListener("input",()=>{if(R=i.value.replace(/\D/g,"").slice(0,6),i.value=R,q.scode||X){delete q.scode,X="",i.closest(".au-field")?.classList.remove("bad");const w=e.querySelector("#au-scode-err");w&&(w.textContent="");const _=e.querySelector("#au-login-ferr");_&&(_.hidden=!0)}}),c?.addEventListener("change",()=>{J=c.checked}),e.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{n=!n,k(),e.querySelector("#au-pwd")?.focus()}),e.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{s=!s,q={},X="",k(),e.querySelector(s?"#au-sphone":"#au-id")?.focus()}),e.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const w=B.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(w)){q={sphone:"请输入有效的手机号码"},k(),e.querySelector("#au-sphone")?.focus();return}q={},re=w,ve(),k(),e.querySelector("#au-scode")?.focus()}),e.querySelector('form[data-form="login"]')?.addEventListener("submit",async w=>{if(w.preventDefault(),!O){if(q={},X="",s?(B.trim()||(q.sphone="请输入手机号码"),/^\d{6}$/.test(R.trim())||(q.scode="请输入 6 位验证码")):(d.trim()||(q.id="请输入电子邮箱或手机号码"),z||(q.pwd="请输入密码")),Object.keys(q).length>0){k();const _=Object.keys(q)[0];e.querySelector(`#au-${_}`)?.focus();return}O=!0,k();try{const _=await t.login({account:(s?B:d).trim(),password:s?R.trim():z});de(),a(_)}catch(_){O=!1,X=_ instanceof Error?_.message:"账户或密码不正确",k()}}}),e.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{ae=d.trim(),oe="",D="reset",k(),e.querySelector("#au-rs-id")?.focus()}),e.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{D="register",k()}),e.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{D="legal",k()}),e.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{te="",D="contact",k()}),e.querySelectorAll('[data-act="open-demo-roles"]').forEach(w=>{w.addEventListener("click",()=>{D="demoRoles",k()})}),e.querySelectorAll('[data-act="close-modal"]').forEach(w=>{w.addEventListener("click",()=>{D=null,k()})}),e.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",w=>{w.target===w.currentTarget&&(D=null,k())}),e.querySelectorAll('[data-act="switch-legal"]').forEach(w=>{w.addEventListener("click",()=>{const _=w.dataset.tab;_&&(Q=_,k())})}),e.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),te="已复制"}catch{te="support@pacom.cn"}k()}),e.querySelector("#au-reset-form")?.addEventListener("submit",w=>{w.preventDefault(),ae=e.querySelector("#au-rs-id")?.value.trim()??"",ae?le?oe="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":oe="如账户存在，验证码已发送。":oe="请输入电子邮箱或手机号码",k()}),e.querySelectorAll('[data-act="pick-demo-role"]').forEach(w=>{w.addEventListener("click",async()=>{const _=w.dataset.roleId;if(!_||!t.switchDemoRole)return;const H=await t.switchDemoRole(_);de(),a(H)})})}k()}async function va(){const e=document.getElementById("app");if(e)try{const t=xt(),a=await t.getSession(),s=async n=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await ia(e,t,n,()=>{$t(e,t,d=>{s(d)})})};if(!a||window.location.hash==="#login"){$t(e,t,n=>{s(n)});return}await s(a)}catch(t){e.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(t)}</div></div>`}}va();
//# sourceMappingURL=index-azeRazcC.js.map
