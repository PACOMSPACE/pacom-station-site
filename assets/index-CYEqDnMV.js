(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const L of i.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&a(L)}).observe(document,{childList:!0,subtree:!0});function l(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=l(n);fetch(n.href,i)}})();const r={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},me={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[r.projectId,r.project1Id],allowedBuildingIds:[r.buildingId,r.buildingFId],allowedFloorIds:[r.lockedFloor8Id,r.floorId,r.lockedFloor6Id],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId,r.buildingFId],allowedFloorIds:[r.lockedFloor8Id,r.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId],allowedFloorIds:[r.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId],allowedFloorIds:[r.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[r.projectId],allowedBuildingIds:[r.buildingId],allowedFloorIds:[r.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},Se="pacom.web.demo.role";class tt{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){const t=sessionStorage.getItem(Se);t&&me[t]&&(this.activeSession=structuredClone(me[t]));const l=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:r.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:l,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:l,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:r.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:l,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:l,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:r.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:l,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:l,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:r.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:l,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:l,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:l,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:l,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:r.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:l,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:r.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:l,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:l,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:l,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:l},{id:"conn-e7f-dali",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:l},{id:"conn-e7f-modbus",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:r.projectId,floorId:r.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:r.projectId,floorId:r.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:r.projectId,floorId:r.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:r.projectId,floorId:r.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:r.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:r.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:l,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:r.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:l,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:r.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:l,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:r.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:l,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:r.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:l,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:r.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:l,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(me).map((a,n)=>({userId:a.userId,displayName:a.displayName,email:`${a.role.replaceAll("_",".")}@pacom.local`,role:a.role,roleLabel:a.roleLabel,scopeSummary:a.scope.allowedZoneIds?.length?`E栋 7F（${a.scope.allowedZoneIds.length} 个我的区域）`:`${a.scope.allowedProjectIds.length} 项目 / ${a.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:n===0?l:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(t,l,a,n,i){this.traces.unshift({at:new Date().toISOString(),channel:t,operation:l,endpoint:a,request:i,response:n}),this.traces.length>40&&this.traces.pop()}pushAudit(t,l,a,n){const i=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:i?.displayName??"anonymous",role:i?.role??"member",action:t,target:l,result:a,detail:n})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(t){if(!t.account.trim()||!t.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const l=t.account.includes("admin")?"org_admin":t.account.includes("eng")?"commissioning_engineer":t.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(me[l]),sessionStorage.setItem(Se,l),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:t.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(Se),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(t){return this.activeSession=structuredClone(me[t]),sessionStorage.setItem(Se,t),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${t}`,this.activeSession),structuredClone(this.activeSession)}async getSpatialTree(){const t=this.requireSession(),l=[{id:r.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"},{id:r.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"}],a=[{id:r.buildingId,projectId:r.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.png"},{id:r.buildingFId,projectId:r.projectId,name:"F栋",aboveFloors:12,belowFloors:2,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.png"}],n={projects:l.filter(i=>t.scope.allowedProjectIds.includes(i.id)),buildings:a.filter(i=>t.scope.allowedBuildingIds.includes(i.id)),floors:[{id:r.lockedFloor8Id,buildingId:r.buildingId,kind:"above",level:8,name:"8F",plan:null},{id:r.floorId,buildingId:r.buildingId,kind:"above",level:7,name:"7F",areaSqm:1383.1,plan:{floorId:r.floorId,imageUrl:"./media/7F.webp",planVersion:1,updatedAt:"2026-11-22T00:00:00Z"}},{id:r.lockedFloor6Id,buildingId:r.buildingId,kind:"above",level:6,name:"6F",plan:null}],zones:[{id:"zone-e7f-lab-east",floorId:r.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:r.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:r.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:r.floorId,name:"核心走廊与弱电井",category:"corridor"}]};return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:n.projects.length,buildings:n.buildings.length,floors:n.floors.length}),n}async getFloorDevices(t){const l=this.requireSession();if(!l.scope.allowedFloorIds.includes(t)){const n={code:"FORBIDDEN",status:403,message:`当前角色「${l.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,n),this.pushAudit("floor.read",t,"denied",n.message),new Error(`403 FORBIDDEN: ${n.message}`)}if(t!==r.floorId)return[];let a=structuredClone(this.devices);return l.scope.allowedZoneIds?.length&&(a=a.filter(n=>n.logicalZoneId&&l.scope.allowedZoneIds.includes(n.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,{count:a.length}),a}async dispatchControlBatch(t){const l=this.requireSession();if(!l.scope.canControlDevices||!l.scope.allowedFloorIds.includes(t.floorId))throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权下发控制指令`);const a=`batch-e7f-${Date.now().toString(36)}`,n={batchId:a,floorId:t.floorId,createdBy:l.userId,createdAt:new Date().toISOString(),receipts:t.targets.map(i=>({deviceId:i.deviceId,command:i.command,targetValue:i.targetValue,status:"queued"}))};return this.batches.set(a,n),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",n,t),this.pushAudit("control.dispatch",a,"success",`下发 ${t.targets.length} 台设备`),n.receipts.forEach((i,L)=>{const y=this.devices.find(q=>q.id===i.deviceId);setTimeout(()=>{i.status="dispatched",i.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:a,deviceId:i.deviceId,status:"dispatched",at:i.dispatchedAt})},280+L*120),setTimeout(()=>{const q=new Date().toISOString();!y||y.connectivity==="offline"?(i.status="timeout",i.errorCode="GATEWAY_READBACK_TIMEOUT",i.errorMessage="设备离线，网关未收到回读确认",i.verifiedAt=q):(i.status="verified_success",i.observedValue=i.targetValue,i.verifiedAt=q,this.applyObservedTelemetry(y,i.command,i.targetValue,q)),this.emit({type:"control.receipt.updated",batchId:a,deviceId:i.deviceId,status:i.status,observedValue:i.observedValue,at:q})},900+L*220)}),structuredClone(n)}applyObservedTelemetry(t,l,a,n){l==="lighting.dimming"&&t.telemetry.dimming?(t.telemetry.dimming={...t.telemetry.dimming,value:a,collectedAt:n,stale:!1},t.telemetry.power&&(t.telemetry.power={...t.telemetry.power,value:Number(a)>0,collectedAt:n,stale:!1})):(l==="lighting.power"||l==="hvac.power")&&t.telemetry.power?t.telemetry.power={...t.telemetry.power,value:a,collectedAt:n,stale:!1}:l==="hvac.setpoint"&&t.telemetry.setpoint&&(t.telemetry.setpoint={...t.telemetry.setpoint,value:a,collectedAt:n,stale:!1}),this.emit({type:"telemetry.updated",floorId:t.floorId,deviceId:t.id,collectedAt:n,values:{[l]:a}})}async getControlBatch(t){this.requireSession();const l=this.batches.get(t);if(!l)throw new Error(`404 NOT_FOUND: 批次 ${t} 不存在`);return structuredClone(l)}async listAlarms(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==r.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(t,l){const a=this.requireSession();if(!a.scope.canManageAlarms){const i=`角色「${a.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",t,"denied",i),new Error(`403 FORBIDDEN: ${i}`)}const n=this.alarms.find(i=>i.id===t);if(!n)throw new Error(`404 NOT_FOUND: 告警 ${t} 不存在`);return n.status="acknowledged",n.acknowledgedAt=new Date().toISOString(),n.acknowledgedBy=a.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${t}/acknowledge`,n,{note:l}),this.pushAudit("alarm.acknowledge",t,"success",l),this.emit({type:"alarm.changed",floorId:n.floorId,alarmId:t,status:"acknowledged",at:n.acknowledgedAt}),structuredClone(n)}async listWorkOrders(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==r.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(t){const l=this.requireSession();if(!l.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权创建工单`);const a=new Date().toISOString(),n={id:`wo-e7f-${Date.now().toString(36)}`,projectId:r.projectId,buildingId:r.buildingId,floorId:t.floorId,deviceId:t.deviceId??null,alarmId:t.alarmId??null,title:t.title,description:t.description,status:"open",assigneeId:null,createdAt:a,updatedAt:a};if(this.workOrders.unshift(n),t.alarmId){const i=this.alarms.find(L=>L.id===t.alarmId);i&&(i.workOrderId=n.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",n,t),this.pushAudit("work_order.create",n.id,"success",n.title),structuredClone(n)}async updateWorkOrderStatus(t,l){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权流转工单`);const n=this.workOrders.find(i=>i.id===t);if(!n)throw new Error(`404 NOT_FOUND: 工单 ${t} 不存在`);return n.status=l,n.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${t}`,n,{status:l}),this.pushAudit("work_order.update",t,"success",`状态更新为 ${l}`),structuredClone(n)}async updateDevicePlanPoint(t){const l=this.requireSession();if(!l.scope.canEditDeployment)throw this.pushAudit("device.plan_point",t.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权编辑图纸标点`);const a=this.devices.find(n=>n.id===t.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(a.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${a.version}，请刷新后重试`);return a.planPoint={floorId:t.floorId,planVersion:t.planVersion,x:Number(t.x.toFixed(4)),y:Number(t.y.toFixed(4))},a.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${t.deviceId}/plan-point`,a,t),this.pushAudit("device.plan_point",t.deviceId,"success",`坐标更新 (${a.planPoint.x}, ${a.planPoint.y})`),structuredClone(a)}async updateDeviceHardwareBinding(t){const l=this.requireSession();if(!l.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权修改硬件绑定`);const a=this.devices.find(i=>i.id===t.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(a.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${a.version}）`);const n=new Date().toISOString();return a.physicalInstalled=t.physicalInstalled,a.physicalVerifiedAt=t.physicalInstalled?n:null,a.hardwareBinding={gatewayId:t.gatewayId,protocol:t.protocol,networkAddress:t.networkAddress,portOrChannel:t.portOrChannel,boundAt:n,boundBy:l.displayName},a.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${t.deviceId}/hardware-binding`,a,t),this.pushAudit("device.hardware_binding",t.deviceId,"success",`${t.protocol} ${t.networkAddress}`),structuredClone(a)}async listConnections(t){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(t){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(t,l){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权冻结交付批次`);const n=this.devices.filter(L=>L.physicalInstalled&&L.hardwareBinding).length,i={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:r.projectId,floorId:t,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:n,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:a.displayName,note:l||"例行交付基线冻结"};return this.deliveryBatches.unshift(i),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${t}/deliveries/freeze`,i,{note:l}),this.pushAudit("delivery.freeze",i.id,"success",`${n}/${this.devices.length} 已现场核验`),structuredClone(i)}async getAnalysisReport(t,l,a){this.requireSession();const n=l==="today"?1:l==="7d"?7:30,L={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*n)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*n).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(K=>K.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*n).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*n).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*n).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[t],y=l==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],q={category:t,range:l,scopeId:a,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:L.kpis,unit:L.unit,series:L.base.map((K,j)=>({label:y[j],value:Math.round(K*(t==="energy"||t==="carbon"?n/2+.5:1)),baseline:Math.round(K*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:L.base[3],unit:L.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:L.base[4],unit:L.unit,status:t==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:L.base[1],unit:L.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${t}?range=${l}&scopeId=${a}`,{kpis:q.kpis.length}),q}async listScenes(t){return this.requireSession(),structuredClone(this.scenes)}async createScene(t){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const a={id:`scn-e7f-${Date.now().toString(36)}`,projectId:t.projectId,floorId:t.floorId,name:t.name,description:t.description,enabled:!0,scheduleSummary:"手动触发",actions:t.actions,lastExecutedAt:null};return this.scenes.unshift(a),this.record("REST","createScene","POST /api/v1/scenes",a,t),this.pushAudit("scene.create",a.id,"success",a.name),structuredClone(a)}async executeScene(t){const l=this.scenes.find(n=>n.id===t);if(!l)throw new Error(`404 NOT_FOUND: 场景 ${t} 不存在`);const a=await this.dispatchControlBatch({floorId:l.floorId,idempotencyKey:`scene-${t}-${Date.now()}`,targets:l.actions,reason:`触发场景：${l.name}`});return l.lastExecutedAt=new Date().toISOString(),l.lastBatchId=a.batchId,a}async getRuntimeSettings(t){return this.requireSession(),structuredClone({projectId:r.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(t,l,a){this.requireSession();const n=a>=this.calendar.nightGuardStart?`下班时间 ${a} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,i=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${l} - ${a}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${l} (-30m) ~ ${a} (+30m)`,conflictWarning:n},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:n}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",i,{workdayStart:l,workdayEnd:a}),i}async saveWorkCalendar(t,l,a,n){const i=this.requireSession();if(!i.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权修改运行日历`);if(this.calendar.version!==n)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(l>=a)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:l,workdayEnd:a,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:l,workdayEnd:a,expectedVersion:n}),this.pushAudit("settings.calendar",r.projectId,"success",`${l}-${a}`),structuredClone(this.calendar)}async toggleRuntimeRule(t,l,a){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权启停运行规则`);const i=this.rules.find(L=>L.id===t);if(!i)throw new Error(`404 NOT_FOUND: 规则 ${t} 不存在`);if(i.version!==a)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${i.version}）`);return i.enabled=l,i.version+=1,i.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${t}`,i,{enabled:l,expectedVersion:a}),this.pushAudit("settings.rule_toggle",t,"success",l?"启用":"停用"),structuredClone(i)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(t,l){const a=this.requireSession();if(a.role!=="org_admin"&&a.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const n=me[l],i={userId:`inv-${Date.now().toString(36)}`,displayName:t.split("@")[0]||t,email:t,role:l,roleLabel:n.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(i),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",i,{email:t,role:l}),this.pushAudit("org.invite",t,"success",n.roleLabel),structuredClone(i)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(t,l){return t!==r.floorId?()=>{}:(this.listeners.add(l),()=>{this.listeners.delete(l)})}emit(t){this.record("WS",t.type,`WS /ws/v1/stream?floorId=${r.floorId}`,t),this.listeners.forEach(l=>l(t))}}function at(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new tt}const st={"building-2":'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',"settings-2":'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',check:'<path d="M20 6 9 17l-5-5"/>',menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>'};function lt(e){return e>=20?"1.5":e>=16?"1.75":e>=14?"2":"2.25"}function te(e,t=16,l=""){const a=lt(t);return`<svg${l?` class="${l}"`:""} width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${a}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;">${st[e]}</svg>`}const je=[{id:"wg-hvac",name:"暖通运维组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋 5F–7F（HVAC、FCU 与 VAV 系统）",memberCount:3,membersSummary:"陈值班、林工、周工",notifyChannel:"站内 + 短信"},{id:"wg-elec",name:"强电照明组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋全楼照明与配电回路",memberCount:2,membersSummary:"黄工、刘工",notifyChannel:"站内 + 邮件"},{id:"wg-property",name:"园区物业值班组",defaultRoleLabel:"只读访客 / 值班巡检",locationScope:"广实2号园 / 全园区公共空间与值班台",memberCount:4,membersSummary:"张班长、王巡检、赵巡检、吴值守",notifyChannel:"站内 + 每日晨报"}];async function ot(e,t,l,a,n){let i="profile",L="directory",y=await t.listOrgMembers(),q=await t.listAuditLogs(),K="",j="all",B="all",O="all",Q=!1,$=!1,V=!1,C=l.displayName,R=l.role==="org_admin"||l.role==="project_admin"?"设施运维总监":l.role==="commissioning_engineer"?"楼宇自控部署工程师":l.role==="facility_operator"?"暖通运行值班工程师":"园区巡检成员",U="138-0013-8072",J="",H="";async function I(){[y,q]=await Promise.all([t.listOrgMembers(),t.listAuditLogs()]),N()}function N(){const se=t.mode==="demo"&&typeof t.switchDemoRole=="function",Y=K.trim().toLowerCase(),c=y.filter(m=>j!=="all"&&m.role!==j?!1:Y?`${m.displayName} ${m.email} ${m.roleLabel} ${m.scopeSummary}`.toLowerCase().includes(Y):!0),x=q.filter(m=>{if(B==="success"&&m.result!=="success"||B==="denied"&&m.result==="success")return!1;if(O!=="all"){const D=`${m.action} ${m.target}`.toLowerCase();if(O==="control"&&!D.includes("control")&&!D.includes("scene")&&!D.includes("控制")||O==="alarm"&&!D.includes("alarm")&&!D.includes("work")&&!D.includes("告警")||O==="deploy"&&!D.includes("deploy")&&!D.includes("plan")&&!D.includes("hardware")&&!D.includes("部署"))return!1}return!0});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">机构与账户</h1>
              <div class="pacom-tabs" role="tablist" aria-label="机构与账户视图">
                <button class="pacom-tab" role="tab" aria-selected="${i==="profile"}" data-atab="profile">我的账户与权限</button>
                <button class="pacom-tab" role="tab" aria-selected="${i==="members"}" data-atab="members">成员与角色（${y.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${i==="audit"}" data-atab="audit">操作审计日志（${q.length}）</button>
              </div>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">广州国家实验室</span>
              <span class="pacom-badge pacom-badge--accent">${l.roleLabel}</span>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:8px 6px 32px;">
          <div style="width:100%; max-width:960px; margin:0 auto; display:flex; flex-direction:column; gap:20px;">
            ${J?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${J}</span></div>`:""}
            ${H?`<div class="pacom-alert-banner">${H}</div>`:""}
            ${i==="profile"?`
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">个人资料与授权摘要</h2>
                    <span class="pacom-badge pacom-badge--online">${l.roleLabel}</span>
                  </div>
                  <form class="lov-settings-card" data-role="profile-form">
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">显示姓名与岗位</span>
                        <span class="lov-setting-desc">账号 ID：${l.userId} · 所属机构：广州国家实验室</span>
                      </div>
                      <div class="lov-setting-control" style="flex-wrap:wrap;">
                        <input class="pacom-input" style="width:150px;" name="displayName" value="${C}" aria-label="显示姓名" required />
                        <input class="pacom-input" style="width:180px;" name="jobTitle" value="${R}" aria-label="岗位职务" />
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
                          已授权楼层 ${l.scope.allowedFloorIds.length} 层 · 设备控制：${l.scope.canControlDevices?"允许":"只读"} · 部署编辑：${l.scope.canEditDeployment?"允许":"只读"}
                        </span>
                      </div>
                    </div>
                  </form>
                </section>

                ${se?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">多角色权限预览切换</h2>
                        <span class="pacom-badge pacom-badge--neutral">仅 Demo 预览可用</span>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(me).map(m=>{const D=me[m];return`
                              <button class="pacom-role-card ${m===l.role?"is-active":""}" data-switch-role="${m}">
                                <strong style="font-weight:500;">${D.roleLabel}</strong>
                                <span class="pacom-row-sub">${D.displayName}</span>
                                <span class="pacom-row-sub">授权楼层 ${D.scope.allowedFloorIds.length} 层 · 部署编辑：${D.scope.canEditDeployment?"是":"否"}</span>
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
                      <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:4px;">展开查看 ${te("chevron-down",12)}</span>
                    </summary>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                      <span class="pacom-row-sub">服务端下发的当前会话权限对象（供前后端核对）</span>
                      <button class="pacom-btn" data-copy-session="1">${V?"已复制":"复制 JSON"}</button>
                    </div>
                    <pre class="pacom-code">${JSON.stringify(l,null,2)}</pre>
                  </details>
                </section>`:i==="members"?`
                  ${Q?`
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
                                ${Object.keys(me).map(m=>`<option value="${m}">${me[m].roleLabel}</option>`).join("")}
                              </select>
                              <button class="pacom-btn pacom-btn--primary" type="submit">发送邀请</button>
                            </div>
                          </div>
                        </form>
                      </section>`:""}

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                        <h2 class="lov-section-title">${L==="directory"?"机构成员目录":"工作组与空间授权（Groups & Scope）"}</h2>
                        <div class="pacom-tabs" role="tablist" aria-label="成员与工作组切换">
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${L==="directory"}" data-msub="directory">成员目录（${y.length}）</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${L==="groups"}" data-msub="groups">工作组（${je.length}）</button>
                        </div>
                      </div>
                      <span class="pacom-row-sub">${L==="directory"?`当前显示 ${c.length} 人`:"按空间边界与值班组统一分派告警与工单"}</span>
                    </div>
                    ${L==="directory"?`
                        <div class="lov-table-card">
                          <div class="lov-table-toolbar">
                            <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                              <input class="pacom-input" name="memberSearch" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${K}" />
                              <select class="pacom-select" name="memberRoleFilter" data-role-filter>
                                <option value="all" ${j==="all"?"selected":""}>全部角色</option>
                                ${Object.keys(me).map(m=>`<option value="${m}" ${j===m?"selected":""}>${me[m].roleLabel}</option>`).join("")}
                              </select>
                            </div>
                            <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                              ${Q?"收起邀请":"+ 邀请成员"}
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
                                ${c.map(m=>`
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
                        ${$?`
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
                            <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-group="1">${$?"收起表单":"+ 新建工作组"}</button>
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
                                ${je.map(m=>`
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
                          <button class="pacom-tab" aria-selected="${B==="all"}" data-audit-filter="all">全部（${q.length}）</button>
                          <button class="pacom-tab" aria-selected="${B==="success"}" data-audit-filter="success">成功</button>
                          <button class="pacom-tab" aria-selected="${B==="denied"}" data-audit-filter="denied">已拦截</button>
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
                            ${x.map(m=>`
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
    `,e.querySelectorAll("[data-atab]").forEach(m=>{m.addEventListener("click",()=>{i=m.dataset.atab,J="",H="",N()})}),e.querySelectorAll("[data-msub]").forEach(m=>{m.addEventListener("click",()=>{L=m.dataset.msub??"directory",N()})}),e.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{$=!$,N()}),e.querySelector('[data-role="new-group-form"]')?.addEventListener("submit",m=>{m.preventDefault();const D=new FormData(m.currentTarget),ee=String(D.get("wgName")??"").trim(),S=String(D.get("wgRole")??"运行值班员"),h=String(D.get("wgScope")??"").trim();!ee||!h||(je.push({id:`wg-${Date.now()}`,name:ee,defaultRoleLabel:S,locationScope:h,memberCount:1,membersSummary:l.displayName,notifyChannel:"站内 + 邮件"}),$=!1,J=`已创建工作组「${ee}」（授权空间：${h}）。`,N())}),e.querySelector('[data-role="profile-form"]')?.addEventListener("submit",m=>{m.preventDefault();const D=new FormData(m.currentTarget);C=String(D.get("displayName")??"").trim()||l.displayName,R=String(D.get("jobTitle")??"").trim()||R,U=String(D.get("phone")??"").trim()||U,J=`已更新个人资料：${C}（${R}）· 告警短信接收号 ${U}。`,N()}),e.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await t.logout(),window.location.hash="#login",n()}),e.querySelector("[data-copy-session]")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(l,null,2)),V=!0,N(),window.setTimeout(()=>{V=!1,N()},1600)}catch{}}),e.querySelectorAll("[data-switch-role]").forEach(m=>{m.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const D=await t.switchDemoRole(m.dataset.switchRole);a(D)})}),e.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{Q=!Q,N()}),e.querySelector("[data-member-search]")?.addEventListener("input",m=>{const D=m.currentTarget,ee=D.selectionStart??D.value.length;K=D.value,N();const S=e.querySelector("[data-member-search]");S&&(S.focus(),S.setSelectionRange(ee,ee))}),e.querySelector("[data-role-filter]")?.addEventListener("change",m=>{j=m.currentTarget.value,N()}),e.querySelectorAll("[data-audit-filter]").forEach(m=>{m.addEventListener("click",()=>{B=m.dataset.auditFilter??"all",N()})}),e.querySelector("[data-audit-cat]")?.addEventListener("change",m=>{O=m.currentTarget.value??"all",N()}),e.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async m=>{m.preventDefault(),H="";const D=new FormData(m.currentTarget);try{await t.inviteOrgMember(String(D.get("email")??""),String(D.get("role"))),Q=!1,await I()}catch(ee){H=ee instanceof Error?ee.message:String(ee),N()}})}N()}const we={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},nt={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},it={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function ct(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("modbus")||t.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":t.includes("co₂")||t.includes("co2")||t.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function dt(e){return e.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:e.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function Ce(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("vav")||e.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:t.includes("co₂")||t.includes("co2")||e.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function rt(e,t,l){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),n=a.get("alarm"),i=a.get("wo");let L=[],y=[],q=[],K=i?"workorders":"alarms",j="all",B="all",O="all",Q="impact",$=!1,V="",C=n,R=i,U=null,J=null,H="resolved";const I=new Set,N=new Map,se=new Map,Y=new Map,c=new Map;let x="",z="";function m(f){const F=c.get(f.id);if(F)return F;const o=f.id.match(/(\d+)$/),s=`WO-2026-${o?o[1]:f.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,g={estCost:"¥ 450",actualCost:f.status==="closed"?"¥ 380":"--",cmmsNo:s,assigneeGroup:"暖通运维组",tasks:[{id:`${f.id}-t1`,label:"核查设备供电与现场指示灯状态",done:f.status!=="open"},{id:`${f.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:f.status==="resolved"||f.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:f.createdAt?f.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${s}）`}]};return c.set(f.id,g),g}async function D(){[L,y,q]=await Promise.all([t.listAlarms(r.floorId),t.listWorkOrders(r.floorId),t.getFloorDevices(r.floorId).catch(()=>[])]),y.forEach(f=>m(f)),h()}function ee(f){if(!f)return{name:"楼层通用",zone:"E7F",dev:null};const F=q.find(o=>o.id===f)??null;return F?{name:F.name,zone:(F.logicalZoneId?it[F.logicalZoneId]:void 0)??"E7F",dev:F}:{name:f,zone:"E7F",dev:null}}function S(f){const F=ee(f.deviceId).dev;F&&F.connectivity==="offline"?Y.set(f.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${F.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):Y.set(f.id,{verdict:"pass",summary:`自检通过（PASS）：「${F?.name??f.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),C=f.id,h()}function h(){const f=L.filter(p=>p.status==="active"&&!N.has(p.id)),F=y.filter(p=>!m(p).cancelled&&(p.status==="open"||p.status==="assigned"||p.status==="in_progress")),o=L.filter(p=>p.status!=="active").length+se.size,s=0,g=N.size,P=V.trim().toLowerCase(),ne=L.filter(p=>{const v=N.has(p.id);if(j==="snoozed"){if(!v)return!1}else if(j==="active"){if(p.status!=="active"||v)return!1}else if(j==="acknowledged"){if(p.status!=="acknowledged")return!1}else if(v)return!1;if(O!=="all"&&p.severity!==O)return!1;if(!P)return!0;const _=ee(p.deviceId);return`${p.title} ${p.message} ${_.name} ${_.zone} ${p.deviceId}`.toLowerCase().includes(P)}),W=new Map;for(const p of ne){const v=`${p.title} ${p.message}`.toLowerCase(),_=v.includes("离线")||v.includes("modbus")||v.includes("通信"),ae=$?_?"root-gateway-modbus":p.deviceId:p.id,le=_?"根因：E7F 主控网关通信链路":`根因：${ee(p.deviceId).name}`,re=W.get(ae)??{rootLabel:le,items:[]};re.items.push(p),W.set(ae,re)}const de=Array.from(W.values());Q==="impact"&&de.sort((p,v)=>Ce(v.items[0]).costYuan-Ce(p.items[0]).costYuan);const k=y.filter(p=>{const v=m(p);if(B==="cancelled"){if(!v.cancelled)return!1}else if(v.cancelled||B==="open"&&(p.status==="resolved"||p.status==="closed")||B==="resolved"&&p.status!=="resolved"||B==="closed"&&p.status!=="closed")return!1;if(!P)return!0;const _=ee(p.deviceId);return`${p.title} ${p.description} ${p.id} ${v.cmmsNo} ${_.name}`.toLowerCase().includes(P)});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">告警中心</h1>
              <div class="pacom-tabs" role="tablist" aria-label="告警中心视图">
                <button class="pacom-tab" role="tab" aria-selected="${K==="alarms"}" data-main-tab="alarms">
                  实时告警（${L.length-g}）
                </button>
                <button class="pacom-tab" role="tab" aria-selected="${K==="workorders"}" data-main-tab="workorders">
                  运维工单（${y.length}）
                </button>
              </div>
            </div>

            <div class="pacom-header-meta">
              ${K==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="lov-switch" role="switch" aria-checked="${$}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="lov-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${l.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${l.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="lov-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${te("refresh-cw",14)}</button>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="lov-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="lov-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${K==="alarms"&&j==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">待处理告警</span>
              <div class="lov-kpi-value">${f.length}<span class="lov-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="lov-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${K==="workorders"&&B==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">处理中工单</span>
              <div class="lov-kpi-value">${F.length}<span class="lov-kpi-unit">单</span></div>
              <span class="lov-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${K==="alarms"&&j==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">已闭环生效</span>
              <div class="lov-kpi-value">${o}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="lov-kpi-cell">
              <span class="lov-kpi-label">关单复发待查</span>
              <div class="lov-kpi-value" style="color:var(--pacom-status-online);">${s}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${x?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${x}</span></div>`:""}
          ${z?`<div class="pacom-alert-banner">${z}</div>`:""}

          ${K==="alarms"?`
              <section class="lov-table-card">
                <div class="lov-table-toolbar">
                  <div class="lov-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${V}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${O==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${O==="critical"?"selected":""}>严重</option>
                      <option value="major" ${O==="major"?"selected":""}>重要</option>
                      <option value="minor" ${O==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${Q==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${Q==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${j==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${j==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${j==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${j==="snoozed"}" data-status-pill="snoozed">已忽略（${g}）</button>
                    </div>
                  </div>
                  <div class="lov-table-toolbar-group">
                    ${I.size>0&&l.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${I.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${de.length} 项</span>
                  </div>
                </div>
                ${de.length===0?'<div class="lov-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${de.map(p=>{const v=p.items[0],_=nt[v.severity]??{label:v.severity,cls:"pacom-badge--neutral"},ae=ee(v.deviceId),le=dt(v),re=Ce(v),he=C===v.id,ge=N.get(v.id),be=!!ge,Le=I.has(v.id),fe=Y.get(v.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${v.id}" data-check-alarm="${v.id}" ${Le?"checked":""} ${v.status!=="active"||be?"disabled":""} aria-label="选择 ${v.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${_.cls}">${_.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${v.title}</span>
                                      ${$?`<span class="pacom-badge pacom-badge--accent">${p.rootLabel}${p.items.length>1?` · 影响 ${p.items.length} 项`:""}</span>`:""}
                                      ${fe?`<span class="pacom-badge ${fe.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${fe.verdict.toUpperCase()}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${v.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${ae.name}</div>
                                    <div class="pacom-row-sub">${ae.zone}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${re.costLabel}</div>
                                    <div class="pacom-row-sub">${re.comfortLabel}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${le.duration}</div>
                                    <div class="pacom-row-sub" style="color:${le.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${le.trend}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${be?"pacom-badge--neutral":v.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${be?`忽略 ${ge?.duration}`:v.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${be?`<button class="pacom-btn" data-unsnooze="${v.id}">恢复监控</button>`:`
                                            ${v.status==="active"?`<button class="pacom-btn" data-mark-actioned="${v.id}" ${l.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${v.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${v.id}" ${l.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${v.id}">${he?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${he?`
                                    <tr class="lov-table-detail-row">
                                      <td colspan="8">
                                        <div class="lov-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${ct(v)}
                                            </div>
                                            ${ge?`<div class="pacom-info-banner">忽略周期：${ge.duration} · 原因备注：${ge.reason}</div>`:""}
                                            ${fe?`
                                                <div class="lov-banner ${fe.verdict==="pass"?"lov-banner--ok":"lov-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="lov-banner-title">${fe.summary}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${fe.steps.map(Ae=>`<span>${Ae}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${v.id}</code> · 设备编号 <code>${v.deviceId}</code> · 关联工单 ${v.workOrderId??"无"}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${v.id}">单机自检（FTT）</button>
                                              ${!be&&v.status==="active"?`<button class="pacom-btn" data-open-snooze="${v.id}">限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${v.deviceId}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${v.deviceId}">定位设备 →</button>
                                            </div>
                                            ${U===v.id?`
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
              ${(()=>{const p=R?y.find(v=>v.id===R)??null:null;if(p){const v=ee(p.deviceId),_=m(p),ae=!!(_.cancelled||p.status==="closed");return`
                  <section class="lov-section" data-role="wo-workbench">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${p.id}">← 返回运维工单列表</button>
                        <h2 class="lov-section-title">${p.title}</h2>
                        <span class="pacom-badge pacom-badge--accent">${_.cmmsNo}</span>
                        ${_.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${p.id}" data-wo-status="${p.id}" aria-label="更新工单状态" ${ae?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(le=>`<option value="${le}" ${p.status===le?"selected":""}>${we[le]}</option>`).join("")}
                          <option value="cancelled" ${_.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${J===p.id?`
                        <form data-close-wo-form="${p.id}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${we[H]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${_.cause??""}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${_.solution??""}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${_.actualCost==="--"?"":_.actualCost}" />
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
                          <div class="pacom-row-sub">${p.description}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${_.tasks.map(le=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${le.id}" data-wo-task="${p.id}" data-task-id="${le.id}" ${le.done?"checked":""} ${ae?"disabled":""} />
                                    <span>${le.label}</span>
                                  </span>
                                  ${le.unit?`<span class="pacom-row-sub">实测：${le.reading??"--"} ${le.unit}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${_.history.map(le=>`<span>• <span class="pacom-row-sub">${le.at}</span> — ${le.text}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${p.id}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${_.cmmsNo}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${v.name}（${v.zone}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${_.assigneeGroup}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${_.estCost} / 实际 ${_.actualCost}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${_.cause??"待完单填写"}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${_.solution??"待完单填写"}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${p.deviceId}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${p.deviceId}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="lov-table-card">
                  <div class="lov-table-toolbar">
                    <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${V}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${B==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${B==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${B==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${B==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${B==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${k.length} 条工单</span>
                  </div>
                  ${k.length===0?'<div class="lov-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${k.map(v=>{const _=ee(v.deviceId),ae=m(v),le=!!(ae.cancelled||v.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${v.title}</span>
                                        ${ae.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${v.description} · <code>${v.id}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${_.name}</div>
                                      <div class="pacom-row-sub">${_.zone}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${ae.cmmsNo}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${ae.assigneeGroup} · 预估 ${ae.estCost}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${v.id}" data-wo-status="${v.id}" aria-label="更新工单状态" ${le?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(re=>`<option value="${re}" ${v.status===re?"selected":""}>${we[re]}</option>`).join("")}
                                          <option value="cancelled" ${ae.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${v.id}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${J===v.id?`
                                      <tr class="lov-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${v.id}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${we[H]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${ae.cause??""}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${ae.solution??""}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${ae.actualCost==="--"?"":ae.actualCost}" />
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
    `,e.querySelectorAll("[data-main-tab]").forEach(p=>{p.addEventListener("click",()=>{K=p.dataset.mainTab??"alarms",x="",h()})}),e.querySelectorAll("[data-kpi-filter]").forEach(p=>{p.addEventListener("click",()=>{const v=p.dataset.kpiFilter;x="",v==="workorders"?(K="workorders",B=B==="open"?"all":"open"):(v==="active"||v==="acknowledged")&&(K="alarms",j=j===v?"all":v),h()})}),e.querySelectorAll("[data-status-pill]").forEach(p=>{p.addEventListener("click",()=>{j=p.dataset.statusPill??"all",h()})}),e.querySelectorAll("[data-wo-pill]").forEach(p=>{p.addEventListener("click",()=>{B=p.dataset.woPill??"all",h()})}),e.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{x="",D()}),e.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{$=!$,h()}),e.querySelector("[data-severity-filter]")?.addEventListener("change",p=>{O=p.currentTarget.value,h()}),e.querySelector("[data-alarm-sort]")?.addEventListener("change",p=>{Q=p.currentTarget.value??"impact",h()}),e.querySelector("[data-alarm-search]")?.addEventListener("input",p=>{const v=p.currentTarget,_=v.selectionStart??v.value.length;V=v.value,h();const ae=e.querySelector("[data-alarm-search]");ae&&(ae.focus(),ae.setSelectionRange(_,_))}),e.querySelectorAll("[data-check-alarm]").forEach(p=>{p.addEventListener("change",()=>{const v=p.dataset.checkAlarm;v&&(p.checked?I.add(v):I.delete(v),h())})}),e.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{z="";const p=Array.from(I);try{for(const v of p)await t.acknowledgeAlarm(v,"告警中心批量确认"),se.set(v,"批量确认处置");I.clear(),x=`已批量确认 ${p.length} 条告警，未来 24 小时持续校验无复发。`,await D()}catch(v){z=v instanceof Error?v.message:String(v),h()}}),e.querySelectorAll("[data-expand-alarm]").forEach(p=>{p.addEventListener("click",()=>{const v=p.dataset.expandAlarm??null;C=C===v?null:v,U=null,h()})}),e.querySelectorAll("[data-expand-wo]").forEach(p=>{p.addEventListener("click",()=>{const v=p.dataset.expandWo??null;R=R===v?null:v,h()})}),e.querySelectorAll("[data-run-ftt]").forEach(p=>{p.addEventListener("click",()=>{const v=L.find(_=>_.id===p.dataset.runFtt);v&&S(v)})}),e.querySelectorAll("[data-open-snooze]").forEach(p=>{p.addEventListener("click",()=>{U=p.dataset.openSnooze??null,h()})}),e.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{U=null,h()}),e.querySelectorAll("[data-snooze-form]").forEach(p=>{p.addEventListener("submit",v=>{v.preventDefault();const _=p.dataset.snoozeForm;if(!_)return;const ae=new FormData(p),le=String(ae.get("duration")??"24h"),re=String(ae.get("reason")??"").trim()||"现场核查中";N.set(_,{duration:le,reason:re}),I.delete(_),U=null,x=`已限时忽略该告警（${le} · ${re}），可在「已忽略」页签中随时恢复。`,h()})}),e.querySelectorAll("[data-unsnooze]").forEach(p=>{p.addEventListener("click",()=>{const v=p.dataset.unsnooze;v&&(N.delete(v),x="已恢复该告警的实时监控。",h())})}),e.querySelectorAll("[data-go-ts]").forEach(p=>{p.addEventListener("click",()=>{const v=p.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(v)}`})}),e.querySelectorAll("[data-locate-home]").forEach(p=>{p.addEventListener("click",()=>{const v=p.dataset.locateHome??"";window.location.hash=v?`#home?device=${encodeURIComponent(v)}`:"#home"})}),e.querySelectorAll("[data-mark-actioned]").forEach(p=>{p.addEventListener("click",async()=>{z="";const v=p.dataset.markActioned;try{await t.acknowledgeAlarm(v,"现场自处理完成（Mark Actioned）"),se.set(v,"现场自处理完成"),I.delete(v),x="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await D()}catch(_){z=_ instanceof Error?_.message:String(_),h()}})}),e.querySelectorAll("[data-to-wo]").forEach(p=>{p.addEventListener("click",async()=>{z="";const v=L.find(_=>_.id===p.dataset.toWo);if(v)try{await t.createWorkOrder({floorId:v.floorId,deviceId:v.deviceId,alarmId:v.id,title:`处置告警：${v.title}`,description:v.message}),x=`已将「${v.title}」转为运维工单并同步 CMMS。`,await D()}catch(_){z=_ instanceof Error?_.message:String(_),h()}})}),e.querySelectorAll("[data-wo-status]").forEach(p=>{p.addEventListener("change",async()=>{const v=p.dataset.woStatus,_=p.value;if(z="",_==="cancelled"){const ae=y.find(le=>le.id===v);if(ae){const le=m(ae);le.cancelled=!0,le.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),x="工单已移入「已取消」分类并锁定编辑。",h()}return}if(_==="resolved"||_==="closed"){J=v,H=_,h();return}try{await t.updateWorkOrderStatus(v,_);const ae=y.find(le=>le.id===v);ae&&m(ae).history.unshift({at:"刚刚",text:`状态变更为「${we[_]}」`}),x="工单状态已更新并写入审计日志。",await D()}catch(ae){z=ae instanceof Error?ae.message:String(ae),await D()}})}),e.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{J=null,h()}),e.querySelectorAll("[data-close-wo-form]").forEach(p=>{p.addEventListener("submit",async v=>{v.preventDefault();const _=p.dataset.closeWoForm,ae=new FormData(p),le=String(ae.get("cause")??"").trim(),re=String(ae.get("solution")??"").trim(),he=String(ae.get("actualCost")??"").trim();try{await t.updateWorkOrderStatus(_,H);const ge=y.find(be=>be.id===_);if(ge){const be=m(ge);be.cause=le,be.solution=re,he&&(be.actualCost=he),be.history.unshift({at:"刚刚",text:`流转至「${we[H]}」· 根因：${le}`})}J=null,R=_,x=`工单已更新为「${we[H]}」，根因与方案已沉淀归档。`,await D()}catch(ge){z=ge instanceof Error?ge.message:String(ge),h()}})}),e.querySelectorAll("[data-wo-task]").forEach(p=>{p.addEventListener("change",()=>{const v=y.find(le=>le.id===p.dataset.woTask);if(!v)return;const ae=m(v).tasks.find(le=>le.id===p.dataset.taskId);ae&&(ae.done=p.checked),h()})})}await D()}const Re=te("chevron-down",12),ke=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],Fe=[{id:r.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:r.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:r.projectId,label:"广实2号园（全园区）",factor:18.2}],pt={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},ut=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],$e=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function Me(e,t=""){const l=(e??"").trim().toLowerCase();return!(!l||l.includes("%")||l.includes("°c")||l.includes("ppm")||l.includes("ms")||l.includes("m²")||l.includes("/m2")||l.includes("db")||l.includes("lx")||t.includes("率")||t.includes("均")||t.includes("强度")||t.includes("延迟"))}function Ie(e,t){const l=e*t;return Math.abs(l)>=10?Math.round(l):Math.round(l*10)/10}function vt(e,t){const l=Number(String(e).replaceAll(",","")),a=t??"";return Number.isFinite(l)?a==="kWh"&&Math.abs(l)>=1e4?{value:(l/1e3).toFixed(1),unit:"MWh",title:`精确值：${l.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(l)?l.toLocaleString("en-US"):l.toLocaleString("en-US",{maximumFractionDigits:1}),unit:a,title:`${l.toLocaleString("en-US")} ${a}`.trim()}:{value:e,unit:a,title:`${e} ${a}`.trim()}}function mt(e,t){if(t===1)return e;const l=Me(e.unit);return{...e,kpis:e.kpis.map(a=>{const n=Number(String(a.value).replaceAll(",",""));return!Number.isFinite(n)||!Me(a.unit,a.label)?a:{...a,value:String(Ie(n,t))}}),series:l?e.series.map(a=>({...a,value:Ie(a.value,t),...typeof a.baseline=="number"?{baseline:Ie(a.baseline,t)}:{}})):e.series,zoneBreakdown:e.zoneBreakdown.map(a=>Me(a.unit)?{...a,value:Ie(a.value,t)}:a)}}function gt(e,t){const l=Math.max(...e.series.map(O=>Math.max(O.value,O.baseline??0)),1),a=46,n=34,i=36,L=Math.max(e.series.length*(a+n)+i*2,620),y=228,q=184,K=132,j=[0,.25,.5,.75,1].map(O=>{const Q=Math.round(q-O*K);return`<line x1="${i-8}" y1="${Q}" x2="${L-18}" y2="${Q}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${O===0?"0":"3 3"}" />`}).join(""),B=e.series.map((O,Q)=>{const $=i+Q*(a+n),V=Math.max(8,Math.round(O.value/l*K)),C=q-V,R=typeof O.baseline=="number"&&O.value>O.baseline*1.08,U=R?`<rect x="${$-8}" y="34" width="${a+16}" height="${q-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",J=typeof O.baseline=="number"?`<line x1="${$-5}" y1="${Math.round(q-O.baseline/l*K)}" x2="${$+a+5}" y2="${Math.round(q-O.baseline/l*K)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",H=t&&(R||Q===1)?`<g><title>${R?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${$+a/2}" cy="18" r="7" fill="${R?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${$+a/2}" y="21" text-anchor="middle" font-size="8.5" font-weight="600" fill="#fff">${R?"!":"S"}</text></g>`:"",I=O.value>=1e4?`${(O.value/1e3).toFixed(1)}k`:O.value.toLocaleString("en-US");return`
        ${U}
        ${J}
        ${H}
        <g>
          <title>${O.label}：实测 ${O.value.toLocaleString("en-US")} ${e.unit}${O.baseline!==void 0?` / 基线 ${O.baseline.toLocaleString("en-US")} ${e.unit}`:""}</title>
          <rect x="${$}" y="${C}" width="${a}" height="${V}" rx="7" fill="${R?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${$+a/2}" y="${C-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${I}</text>
        <text x="${$+a/2}" y="${q+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${O.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${L} ${y}" style="width:100%; height:232px; display:block;" role="img" aria-label="${e.category} 趋势图">
      ${j}
      ${B}
    </svg>
  `}function bt(e,t){const l=e.connectivity==="offline";if(e.category==="hvac"){const a=Number(e.telemetry.setpoint?.value??24);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:l?[23.8,24,24.1,null,null,null,null,null]:[a+.8,a+.6,a+.3,a,a-.2,a+.1,a+.2,a],offline:l,colorIdx:t},{id:`${e.id}:setpoint`,deviceId:e.id,deviceName:e.name,pointKey:"setpoint",label:"设定温度",unit:"°C",points:l?[24,24,24,null,null,null,null,null]:[a,a,a,a,a,a,a,a],offline:l,colorIdx:t+1},{id:`${e.id}:valve`,deviceId:e.id,deviceName:e.name,pointKey:"valve",label:"冷阀开度",unit:"%",points:l?[42,46,51,null,null,null,null,null]:[20,24,38,62,74,68,52,30],offline:l,colorIdx:t+2}]}if(e.category==="lighting"){const a=Number(e.telemetry.dimming?.value??60);return[{id:`${e.id}:dimming`,deviceId:e.id,deviceName:e.name,pointKey:"dimming",label:"回路亮度",unit:"%",points:[0,0,Math.round(a*.8),a,a,Math.round(a*.6),a,Math.round(a*.9)],offline:l,colorIdx:t},{id:`${e.id}:power`,deviceId:e.id,deviceName:e.name,pointKey:"power",label:"实时功率",unit:"W",points:[12,12,220,285,290,175,280,245],offline:l,colorIdx:t+1}]}if(e.category==="sensor"){const a=Number(e.telemetry.temp?.value??23.4);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:[a-.5,a-.3,a,a+.3,a+.5,a+.2,a+.1,a],offline:l,colorIdx:t},{id:`${e.id}:co2`,deviceId:e.id,deviceName:e.name,pointKey:"co2",label:"CO₂ 浓度",unit:"ppm",points:[410,415,440,520,580,540,495,430],offline:l,colorIdx:t+1},{id:`${e.id}:humidity`,deviceId:e.id,deviceName:e.name,pointKey:"humidity",label:"相对湿度",unit:"%RH",points:[49,50,51,52,53,51,50,49],offline:l,colorIdx:t+2}]}return[{id:`${e.id}:latency`,deviceId:e.id,deviceName:e.name,pointKey:"latency",label:"心跳延迟",unit:"ms",points:[16,18,17,19,18,17,18,18],offline:l,colorIdx:t}]}function ht(e){const t=e.points.filter(y=>typeof y=="number");if(!t.length)return{min:"-",avg:"-",max:"-",curr:"离线"};const l=Math.min(...t),a=Math.max(...t),n=t.reduce((y,q)=>y+q,0)/t.length,i=e.points[e.points.length-1],L=y=>Math.abs(y)<100&&!Number.isInteger(y)?y.toFixed(1):Math.round(y).toString();return{min:L(l),avg:n.toFixed(Math.abs(n)<100?1:0),max:L(a),curr:typeof i=="number"?L(i):"离线"}}function ft(e,t,l){const a=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!e.length)return'<div class="lov-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧展开设备并勾选 1 个或多个测点以开始多点时序对比。</span></div>';const n=(L,y)=>{const C=[];for(const c of L)for(const x of c.points)typeof x=="number"&&C.push(x);const R=C.length?Math.min(...C)*.92:0,U=C.length?Math.max(...C)*1.08:100,J=Math.max(U-R,1),H=[0,.5,1].map(c=>{const x=Math.round(26+106*(1-c)),z=(R+J*c).toFixed(J<15?1:0);return`
          <line x1="44" y1="${x}" x2="662" y2="${x}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${c===0?"0":"3 3"}" />
          <text x="38" y="${x+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${z}</text>
        `}).join(""),I=a.map((c,x)=>`<text x="${44+x/(a.length-1)*618}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${c}</text>`).join(""),N=L.map((c,x)=>{const z=$e[(c.colorIdx+x)%$e.length],m=c.points,D=[];let ee=44,S=26+106/2,h=!1;m.forEach((F,o)=>{const s=44+o/(m.length-1)*618;if(typeof F=="number"){const g=26+106*(1-(F-R)/J);D.push(`${s.toFixed(1)},${g.toFixed(1)}`),ee=s,S=g}else h=!0});const f=l?m.map((F,o)=>{if(typeof F!="number")return null;const s=44+o/(m.length-1)*618,P=26+106*(1-(F*.96-R)/J);return`${s.toFixed(1)},${P.toFixed(1)}`}).filter(Boolean).join(" "):"";return`
          ${f?`<polyline fill="none" stroke="${z}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.42" points="${f}" />`:""}
          ${D.length?`<polyline fill="none" stroke="${z}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${D.join(" ")}" />`:""}
          ${h?`<line x1="${ee.toFixed(1)}" y1="${S.toFixed(1)}" x2="662" y2="${S.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${S-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),se=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${44+3/7*618}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${44+3/7*618}" y="14.8" text-anchor="middle" font-size="7.5" font-weight="600" fill="#fff">S</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${44+5/7*618}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${44+5/7*618}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `,Y=L.map((c,x)=>{const z=$e[(c.colorIdx+x)%$e.length],m=ht(c);return`
          <tr>
            <td><span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:7px; height:7px; border-radius:50%; background:${z};"></span>${c.deviceName} · ${c.label}</span></td>
            <td><strong>${m.curr}</strong> <span class="pacom-row-sub">${c.unit}</span></td>
            <td>${m.min} <span class="pacom-row-sub">${c.unit}</span></td>
            <td>${m.avg} <span class="pacom-row-sub">${c.unit}</span></td>
            <td>${m.max} <span class="pacom-row-sub">${c.unit}</span></td>
          </tr>`}).join("");return`
      <div class="pacom-card" style="padding:14px 16px; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${y}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${L.map((c,x)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${$e[(c.colorIdx+x)%$e.length]};"></span>${c.deviceName}·${c.label}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${H}
          ${I}
          ${se}
          ${N}
        </svg>
        <div class="lov-table-wrap" style="border-top:var(--hw) solid var(--pacom-border-subtle); padding-top:6px;">
          <table class="lov-table" style="font-size:12px;">
            <thead><tr><th>测点</th><th>当前值</th><th>最小值 (Min)</th><th>平均值 (Avg)</th><th>最大值 (Max)</th></tr></thead>
            <tbody>${Y}</tbody>
          </table>
        </div>
      </div>
    `};if(t==="shared")return n(e,"单图叠合对比（Shared）");const i=new Map;for(const L of e){const y=i.get(L.unit)??[];y.push(L),i.set(L.unit,y)}return Array.from(i.entries()).map(([L,y])=>n(y,`按单位分组泳道（${L}）`)).join("")}function yt(e){const t=[["时段",`数值 (${e.unit})`,`基线 (${e.unit})`].join(","),...e.series.map(i=>[i.label,String(i.value),i.baseline!==void 0?String(i.baseline):""].join(","))],l=new Blob([`\uFEFF${t.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(l),n=document.createElement("a");n.href=a,n.download=`pacom-${e.category}-${e.range}.csv`,n.click(),URL.revokeObjectURL(a)}function $t(e){const t=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],l=["时间",...e.map(y=>`${y.deviceName}·${y.label}(${y.unit})`)].join(","),a=t.map((y,q)=>[y,...e.map(K=>String(K.points[q]??"No Data"))].join(",")),n=new Blob([`\uFEFF${[l,...a].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),L=document.createElement("a");L.href=i,L.download="pacom-timeseries-export.csv",L.click(),URL.revokeObjectURL(i)}async function wt(e,t,l){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),n=a.get("tab"),i=a.get("cat"),L=a.get("device"),y=a.get("points"),q=a.get("mode"),K=a.get("interval");let j=n==="timeseries"?"timeseries":i&&ke.some(f=>f.id===i)?i:"energy",B="7d",O="2026-11-16",Q="2026-11-23",$=r.floorId,V="chart",C=!0,R="breakdown",U=!1,J=null,H=await t.getFloorDevices(r.floorId).catch(()=>[]);const I=new Map,N=[];H.forEach((f,F)=>{const o=bt(f,F);I.set(f.id,o),N.push(...o)});let se=q==="shared"||q==="grouped"?q:"grouped",Y=K==="15m"||K==="1h"||K==="1d"?K:"1h",c=!1;const x=[];if(y?y.split(",").forEach(f=>{N.some(F=>F.id===f)&&x.push(f)}):L&&I.has(L)&&(I.get(L)??[]).slice(0,2).forEach(f=>x.push(f.id)),!x.length){const f=H.find(s=>s.category==="hvac"),F=H.find(s=>s.category==="sensor"),o=H.find(s=>s.category==="lighting");f&&(I.get(f.id)??[]).slice(0,2).forEach(s=>x.push(s.id)),F&&(I.get(F.id)??[]).slice(0,1).forEach(s=>x.push(s.id)),o&&(I.get(o.id)??[]).slice(0,1).forEach(s=>x.push(s.id)),x.length||N.slice(0,3).forEach(s=>x.push(s.id))}const z=new Set(x),m=new Set(H.filter((f,F)=>F<2||(I.get(f.id)??[]).some(o=>z.has(o.id))).map(f=>f.id)),D=[{id:"fav-hvac",name:"E7F 空调温控与 CO₂ 联动对照",pointIds:N.filter(f=>f.pointKey==="temp"||f.pointKey==="setpoint"||f.pointKey==="co2").slice(0,4).map(f=>f.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度与功率对比",pointIds:N.filter(f=>f.pointKey==="dimming"||f.pointKey==="power").slice(0,4).map(f=>f.id),mode:"grouped",interval:"15m"}];let ee="";async function S(){const f=j==="timeseries"?"energy":j,F=B==="custom"?"30d":B;J=await t.getAnalysisReport(f,F,r.floorId),h()}function h(){if(!J)return;const f=j==="timeseries",F=j==="timeseries"?"energy":j,o=ke.find(k=>k.id===F)??ke[0],s=Fe.find(k=>k.id===$)??Fe[0],g=mt(J,s.factor),P=g.zoneBreakdown.filter(k=>k.status==="warning"),ne=pt[F],W=Math.max(...g.zoneBreakdown.map(k=>k.value),1),de=N.filter(k=>z.has(k.id));e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:10px; min-width:0;">
              <h1 class="pacom-title" style="flex-shrink:0;">数据分析</h1>
              <div class="pacom-tabs" role="tablist" aria-label="分析维度">
                ${ke.map(k=>`<button class="pacom-tab" role="tab" aria-selected="${j===k.id}" data-cat="${k.id}">${k.label}</button>`).join("")}
                <button class="pacom-tab" role="tab" aria-selected="${j==="timeseries"}" data-cat="timeseries">多点时序</button>
              </div>
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <div class="pacom-scope-pill" style="width:210px;" title="切换统计空间范围">
                <select name="analysisScope" data-scope-select aria-label="选择统计空间范围">
                  ${Fe.map(k=>`<option value="${k.id}" ${k.id===$?"selected":""}>${k.label}</option>`).join("")}
                </select>
                <span class="pacom-scope-chevron">${Re}</span>
              </div>
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px; width:108px;">
                <option value="today" ${B==="today"?"selected":""}>今日</option>
                <option value="7d" ${B==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${B==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${B==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${f?"":`<button class="pacom-btn ${U?"pacom-btn--primary":""}" data-toggle-canvas="1">${U?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          ${B==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${O}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${Q}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${f?`
            <div class="lov-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:296px; min-width:272px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">设备 → 测点树</span>
                    <span class="pacom-row-sub">已选 ${de.length} 个测点</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${D.map(k=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${k.id}">${te("star",14)}<span style="overflow:hidden;text-overflow:ellipsis;">${k.name}</span></button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${H.map(k=>{const ie=I.get(k.id)??[],p=m.has(k.id),v=ie.filter(_=>z.has(_.id)).length;return`
                        <div style="display:flex; flex-direction:column; gap:2px;">
                          <button type="button" class="pacom-row" data-ts-expand="${k.id}" style="cursor:pointer; justify-content:space-between;" title="${k.name}">
                            <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
                              <span style="display:inline-flex; transition:transform 140ms ease; transform:rotate(${p?"0deg":"-90deg"}); opacity:0.65;">${Re}</span>
                              <div style="min-width:0; flex:1; text-align:left;">
                                <div class="pacom-row-title" style="font-size:13px;">${k.name}</div>
                                <div class="pacom-row-sub">${ie.length} 个测点 · ${k.connectivity==="online"?"在线":"离线"}</div>
                              </div>
                            </div>
                            ${v>0?`<span class="pacom-badge pacom-badge--accent">${v}</span>`:""}
                          </button>
                          ${p?`<div style="display:flex; flex-direction:column; gap:2px; padding-left:20px; padding-bottom:4px;">
                                  ${ie.map(_=>{const ae=z.has(_.id),le=$e[_.colorIdx%$e.length];return`
                                        <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:5px 8px; border-radius:var(--pacom-radius-sm); cursor:pointer; font-size:12px; background:${ae?"var(--pacom-surface-recessed)":"transparent"};">
                                          <span style="display:inline-flex; align-items:center; gap:6px;">
                                            <input type="checkbox" name="tsPoint-${_.id}" data-ts-point="${_.id}" ${ae?"checked":""} />
                                            <span style="width:7px; height:7px; border-radius:50%; background:${le};"></span>
                                            <span style="color:var(--pacom-text-primary);">${_.label}</span>
                                          </span>
                                          <span class="pacom-row-sub">${_.unit}</span>
                                        </label>`}).join("")}
                                </div>`:""}
                        </div>`}).join("")}
                </div>
              </aside>
              <div class="lov-subnav-main" style="padding:2px 4px 24px;">
                ${ee?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${ee}</span></div>`:""}
                <div class="lov-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="lov-section-title">多测点实时遥测对比（Time Series）</h2>
                    <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:6px;">${te("clock",12)} 排程(S) · ${te("triangle-alert",12)} 告警(!) · 虚线为断流/上周同期</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>对比上周同期</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${c}" data-ts-compare="1" aria-label="叠加对比上周同期曲线">
                        <span class="lov-switch-thumb"></span>
                      </button>
                    </label>
                    <select class="pacom-select" name="tsInterval" data-ts-interval aria-label="采样粒度" style="height:28px; font-size:12px;">
                      <option value="15m" ${Y==="15m"?"selected":""}>15 分钟</option>
                      <option value="1h" ${Y==="1h"?"selected":""}>1 小时</option>
                      <option value="1d" ${Y==="1d"?"selected":""}>1 天</option>
                    </select>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${se==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${se==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ts-share="1">复制分享链接</button>
                  </div>
                </div>
                ${ft(de,se,c)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="lov-kpi-strip" role="region" aria-label="核心统计指标">
                ${g.kpis.map(k=>{const ie=vt(k.value,k.unit);return`
                      <div class="lov-kpi-cell" title="${ie.title}">
                        <span class="lov-kpi-label">${k.label}</span>
                        <div class="lov-kpi-value">
                          <span>${ie.value}</span>
                          ${ie.unit?`<span class="lov-kpi-unit">${ie.unit}</span>`:""}
                        </div>
                        <span class="lov-kpi-delta">${k.delta??"与基线持平"}</span>
                      </div>`}).join("")}
              </div>

              <section class="lov-section">
                <div class="lov-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="lov-section-title">${o?.label??"趋势"}趋势（${g.unit}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${s.label} · 更新于 ${g.updatedAt.slice(5,16).replace("T"," ")}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${C}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
                        <span class="lov-switch-thumb"></span>
                      </button>
                    </label>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${V==="chart"}" data-chart-mode="chart">趋势图</button>
                      <button class="pacom-tab" aria-selected="${V==="table"}" data-chart-mode="table">明细原表</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-card" style="gap:10px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                    <span class="pacom-row-sub">
                      ${P.length>0?`关注：${P.map(k=>k.zoneName).join("、")} 指标偏高，建议前往智能策略优化启停时段。`:`${o?.desc??"空间运行洞察"} · ${ne.summary}`}
                    </span>
                    <button class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-strategy="1">去智能策略优化 →</button>
                  </div>
                  ${V==="chart"?gt(g,C):`
                      <div class="lov-table-wrap">
                        <table class="lov-table">
                          <thead>
                            <tr>
                              <th>统计时段</th>
                              <th>实测值（${g.unit}）</th>
                              <th>基线参考</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${g.series.map(k=>{const ie=typeof k.baseline=="number"&&k.value>k.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${k.label}</strong></td>
                                    <td>${k.value.toLocaleString("en-US")}</td>
                                    <td>${k.baseline!==void 0?k.baseline.toLocaleString("en-US"):"-"}</td>
                                    <td><span class="pacom-badge ${ie?"pacom-badge--warning":"pacom-badge--online"}">${ie?"超基线":"正常"}</span></td>
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
                    <span class="pacom-row-sub">${g.zoneBreakdown.length} 个功能区</span>
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
                          ${g.zoneBreakdown.map(k=>{const ie=Math.max(8,Math.round(k.value/W*100));return`
                                <tr>
                                  <td style="font-weight:500;">${k.zoneName.replace(/^7F\s*/,"")}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${ie}%; height:100%; border-radius:999px; background:${k.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${k.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${k.unit}</span></td>
                                  <td>
                                    <span class="pacom-badge ${k.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${k.status==="warning"?"偏高关注":"正常"}
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
                    <h2 class="lov-section-title">${U?"E7F 空间对照预览":F==="energy"&&R==="load"?"峰谷负荷分布（Load Profile）":ne.title}</h2>
                    ${!U&&F==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${R==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${R==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${U?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${U?'<img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
                        ${F==="environment"?`
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
                        ${(F==="energy"&&R==="load"?ut:ne.items).map(k=>`
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                                <span style="font-weight:500; color:var(--pacom-text-primary);">${k.name}</span>
                                <span class="pacom-row-sub">${k.detail} · <strong style="color:var(--pacom-text-primary);">${k.pct}%</strong></span>
                              </div>
                              <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                <div style="width:${Math.min(100,k.pct)}%; height:100%; border-radius:999px; background:${k.color};"></div>
                              </div>
                            </div>`).join("")}`}
                  </div>
                </section>
              </div>
            </div>`}
      </div>
    `,e.querySelectorAll("[data-cat]").forEach(k=>{k.addEventListener("click",()=>{j=k.dataset.cat??"energy",ee="",j==="timeseries"?h():S()})}),e.querySelector("[data-scope-select]")?.addEventListener("change",k=>{$=k.currentTarget.value,h()}),e.querySelector("[data-range-select]")?.addEventListener("change",k=>{B=k.currentTarget.value??"7d",S()}),e.querySelector("[data-custom-start]")?.addEventListener("change",k=>{O=k.currentTarget.value}),e.querySelector("[data-custom-end]")?.addEventListener("change",k=>{Q=k.currentTarget.value}),e.querySelectorAll("[data-chart-mode]").forEach(k=>{k.addEventListener("click",()=>{V=k.dataset.chartMode??"chart",h()})}),e.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{C=!C,h()}),e.querySelectorAll("[data-energy-right]").forEach(k=>{k.addEventListener("click",()=>{R=k.dataset.energyRight??"breakdown",h()})}),e.querySelector("[data-export-csv]")?.addEventListener("click",()=>{f?$t(de):yt(g)}),e.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{U=!U,h()}),e.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),e.querySelectorAll("[data-ts-expand]").forEach(k=>{k.addEventListener("click",()=>{const ie=k.dataset.tsExpand;ie&&(m.has(ie)?m.delete(ie):m.add(ie),h())})}),e.querySelectorAll("[data-ts-point]").forEach(k=>{k.addEventListener("change",()=>{const ie=k.dataset.tsPoint;ie&&(k.checked?z.add(ie):z.delete(ie),ee="",h())})}),e.querySelectorAll("[data-ts-mode]").forEach(k=>{k.addEventListener("click",()=>{se=k.dataset.tsMode??"grouped",h()})}),e.querySelector("[data-ts-interval]")?.addEventListener("change",k=>{Y=k.currentTarget.value??"1h",h()}),e.querySelector("[data-ts-compare]")?.addEventListener("click",()=>{c=!c,h()}),e.querySelector("[data-ts-share]")?.addEventListener("click",()=>{const ie=`#analysis?tab=timeseries&points=${encodeURIComponent(Array.from(z).join(","))}&mode=${se}&interval=${Y}`,p=`${window.location.origin}${window.location.pathname}${ie}`;navigator.clipboard?.writeText&&navigator.clipboard.writeText(p).catch(()=>{}),window.history.replaceState(null,"",ie),ee=`已复制分享链接（含 ${z.size} 个测点、${se==="grouped"?"按单位分组":"单图叠合"}、${Y} 粒度）。`,h()}),e.querySelectorAll("[data-load-fav]").forEach(k=>{k.addEventListener("click",()=>{const ie=D.find(p=>p.id===k.dataset.loadFav);ie&&(z.clear(),ie.pointIds.forEach(p=>{z.add(p);const v=p.split(":")[0];v&&m.add(v)}),se=ie.mode,Y=ie.interval,ee=`已加载收藏视图「${ie.name}」。`,h())})}),e.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if(z.size===0)return;const k=`自定义对比 #${D.length+1}（${z.size} 测点）`;D.push({id:`fav-${Date.now()}`,name:k,pointIds:Array.from(z),mode:se,interval:Y}),ee=`已保存当前时序配置为「${k}」。`,h()})}await S()}const xt=[{group:"一、项目配置",items:[{id:"projects",label:"项目与楼宇"},{id:"floors",label:"楼层与功能区"}]},{group:"二、系统接入",items:[{id:"connections",label:"网关与数据健康"}]},{group:"三、设备部署",items:[{id:"floorplan",label:"图纸标点与绑定"},{id:"inventory",label:"设备四态台账"}]},{group:"四、交付验收",items:[{id:"delivery",label:"进度与交付冻结"}]}],St={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},kt={frozen:"已冻结",draft:"草稿",delivered:"已交付"},It={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"},Te=[{id:"doc-hvac-7f",name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · FCU-01 / VAV-02",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",name:"E7F_强电照明与DALI回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-bacnet-map",name:"E7F_BACnet_Modbus_点位映射表.xlsx",category:"点位台账",boundScope:"E栋 7F · 主控网关 GW-01",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",name:"FCU-01_风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}];function Et(e,t){const l=e.status!=="connected",a=t.filter(n=>n.hardwareBinding?.protocol===e.protocol);return a.length>0?a.flatMap(n=>{const i=n.connectivity==="offline"||l;return[{pointName:n.category==="hvac"?"送风温度 / 阀门开度":n.category==="lighting"?"回路开关 / 调光反馈":n.category==="sensor"?"温湿度 / CO₂ 遥测":"网关心跳 / 负载",deviceName:n.name,value:i?"No Data":n.category==="hvac"?"23.4°C · 62%":n.category==="lighting"?"ON · 80%":n.category==="sensor"?"24.1°C · 510 ppm":"CPU 18% · 18ms",interval:"60s",lastSeen:i?"46 分钟前":"12 秒前",quality:i?n.connectivity==="offline"?"offline":"delayed":"online"}]}):[{pointName:`${e.protocol.toUpperCase()} 主干遥测汇总点`,deviceName:e.name,value:l?"采样延迟":"正常上报",interval:"60s",lastSeen:l?"38 分钟前":"9 秒前",quality:l?"delayed":"online"}]}function Lt(e){return e.category==="gateway"?"主控网关":e.category==="lighting"?e.name.includes("702")?"702 照明":"主照明":e.category==="hvac"?e.name.includes("VAV")?"VAV-02":"FCU-01":e.category==="sensor"?"环境传感":e.name.slice(0,6)}async function At(e,t,l){const a=new URLSearchParams(window.location.hash.split("?")[1]??"").get("sec");let n=a&&["projects","floors","connections","floorplan","inventory","delivery"].includes(a)?a:"floorplan",i="all",L=await t.getSpatialTree(),y=[],q=[],K=[],j=null,B=!1,O=!1,Q=null,$=null,V=null,C="",R="";async function U(){R="";const[N,se,Y,c]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(r.floorId).catch(()=>[]),t.listConnections(r.projectId),t.listDeliveryBatches(r.floorId)]);L=N,y=se,q=Y,K=c,y.some(z=>z.id===j)||(j=y[0]?.id??null),B=y.find(z=>z.id===j)?.physicalInstalled??!1,I()}function J(N){R="",N.connectivity==="offline"?R=`单机回读自检未通过（FAIL）：「${N.name}」当前离线，请先在「网关与数据健康」核查 ${N.hardwareBinding?.networkAddress??"-"} 链路状态。`:C=`单机回读自检通过（PASS）：「${N.name}」指令下发 → 状态回读一致 → 已安全自动恢复原工况。`,I()}function H(){R="";const N=y.filter(m=>m.connectivity==="offline"),se=y.length-N.length,Y=new Date,c=String(Y.getHours()).padStart(2,"0"),x=String(Y.getMinutes()).padStart(2,"0"),z=String(Y.getSeconds()).padStart(2,"0");V={ranAt:`${c}:${x}:${z}`,total:y.length,passed:se,failed:N.length,failedNames:N.map(m=>m.name)},N.length>0?R=`全层批量自检（FTT）完成：${se}/${y.length} 台通过，${N.length} 台失败（${N.map(m=>m.name).join("、")}），其余设备已安全复位。`:C=`全层批量自检（FTT）全部通过：${se}/${y.length} 台设备指令下发、状态回读一致并已安全复位。`,I()}function I(){const N=y.find(s=>s.id===j)??null,se=l.scope.canEditDeployment,Y=q.reduce((s,g)=>s+g.collectedPoints,0),c=q.reduce((s,g)=>s+g.calculatedPoints,0),x=q.filter(s=>s.status==="connected").length,z=q.filter(s=>s.status!=="connected"),m=y.filter(s=>!!s.planPoint).length,D=y.filter(s=>s.physicalInstalled).length,ee=y.length-D,S=y.length-m,h=y.filter(s=>i==="unverified"?!s.physicalInstalled:i==="unplaced"?!s.planPoint:!0),f=L.buildings.find(s=>s.id===r.buildingId),F=L.floors.filter(s=>s.buildingId===r.buildingId),o=L.zones.filter(s=>s.floorId===r.floorId);e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">系统部署</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">当前试点：广实2号园 / E栋 7F</span>
              <span class="pacom-badge ${se?"pacom-badge--online":"pacom-badge--warning"}">
                ${se?"可编辑部署与硬件绑定":"只读权限（写入将被服务端 403 拦截）"}
              </span>
            </div>
          </div>
        </header>

        ${C?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${C}</span></div>`:""}
        ${R?`<div class="pacom-alert-banner">${R}</div>`:""}

        <div class="lov-subnav-layout">
          <nav class="lov-subnav-rail lov-subnav-rail--compact" style="width:172px;" aria-label="工程部署阶段导轨">
            ${xt.map(s=>`
              <div class="lov-subnav-group">
                <div class="lov-subnav-group-title">${s.group}</div>
                ${s.items.map(g=>`
                    <button type="button" class="lov-subnav-item" aria-current="${n===g.id?"true":"false"}" data-dsec="${g.id}">
                      <span>${g.label}</span>
                      ${g.id==="connections"&&z.length>0?`<span class="pacom-badge pacom-badge--warning">${z.length}</span>`:""}
                      ${g.id==="floorplan"&&ee>0?`<span class="pacom-badge pacom-badge--neutral">${ee}</span>`:""}
                    </button>`).join("")}
              </div>`).join("")}
          </nav>

          <div class="lov-subnav-main" style="${n==="floorplan"?"overflow:hidden; padding:0;":"padding:4px 4px 24px;"}">
            ${n==="floorplan"?`
                <section class="pacom-split" style="height:100%;">
                  <aside class="pacom-left-pane" style="--pacom-sidebar-width:288px; min-width:268px;">
                    <div class="pacom-pane-toolbar">
                      <div style="font-weight:500;">E7F 图纸标点与四态绑定（${y.length}）</div>
                      <div class="pacom-row-sub">图上放点仅更新坐标，绝不自动改写物理安装态或硬件绑定。</div>
                      <div class="lov-count-pills" role="group" aria-label="筛选核验状态">
                        <button type="button" class="lov-count-pill" style="height:26px; font-size:12px;" aria-pressed="${i==="all"}" data-dev-filter="all">
                          <span>全部</span><span class="lov-count-num">${y.length}</span>
                        </button>
                        <button type="button" class="lov-count-pill" style="height:26px; font-size:12px;" aria-pressed="${i==="unverified"}" data-dev-filter="unverified">
                          <span>待复核</span><span class="lov-count-num">${ee}</span>
                        </button>
                        <button type="button" class="lov-count-pill" style="height:26px; font-size:12px;" aria-pressed="${i==="unplaced"}" data-dev-filter="unplaced">
                          <span>未标点</span><span class="lov-count-num">${S}</span>
                        </button>
                      </div>
                    </div>
                    <div class="pacom-list">
                      ${h.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">该筛选条件下无设备</div>':h.map(s=>`
                                <div class="pacom-row ${s.id===j?"is-selected":""}" data-pick-dev="${s.id}">
                                  <div style="min-width:0;">
                                    <div class="pacom-row-title">${s.name}</div>
                                    <div class="pacom-row-sub">v${s.version} · ${s.hardwareBinding?.protocol.toUpperCase()??"未绑定"} · ${s.physicalInstalled?"物理已复核":"待物理复核"}</div>
                                  </div>
                                  <span class="pacom-badge ${s.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">
                                    ${s.planPoint?`${Math.round(s.planPoint.x*100)}%,${Math.round(s.planPoint.y*100)}%`:"未标点"}
                                  </span>
                                </div>`).join("")}
                    </div>
                    ${N?`
                        <form data-role="binding-form" style="padding:14px 16px; border-top:var(--hw) solid var(--pacom-border-subtle); background:var(--pacom-surface-primary); display:flex; flex-direction:column; gap:10px;">
                          <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-weight:500; font-size:13px;">显式硬件绑定与现场复核</span>
                            <span class="pacom-badge pacom-badge--neutral">${N.id}</span>
                          </div>
                          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                            <select class="pacom-select" name="protocol" aria-label="通信协议">
                              ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(s=>`<option value="${s}" ${N.hardwareBinding?.protocol===s?"selected":""}>${s.toUpperCase()}</option>`).join("")}
                            </select>
                            <input class="pacom-input" name="networkAddress" placeholder="网络地址/主题" value="${N.hardwareBinding?.networkAddress??""}" aria-label="网络地址" />
                          </div>
                          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                            <input class="pacom-input" name="portOrChannel" placeholder="端口/回路" value="${N.hardwareBinding?.portOrChannel??""}" aria-label="端口或回路" />
                            <div style="display:inline-flex; align-items:center; gap:6px; flex-shrink:0;">
                              <span class="pacom-row-sub">物理已复核</span>
                              <button type="button" class="lov-switch" role="switch" aria-checked="${B}" data-toggle-phys="1" aria-label="现场物理安装已复核" ${se?"":"disabled"}>
                                <span class="lov-switch-thumb"></span>
                              </button>
                            </div>
                          </div>
                          <div style="display:flex; gap:6px; flex-wrap:wrap;">
                            <button class="pacom-btn" type="button" data-toggle-place="1">${O?"取消标点":"点图更新坐标"}</button>
                            <button class="pacom-btn" type="button" data-ftt-test="1" title="验证指令下发、回读并自动复位">单机自检</button>
                            <button class="pacom-btn pacom-btn--primary" type="submit" style="flex:1;" ${se?"":"disabled"}>保存绑定（v${N.version}）</button>
                          </div>
                        </form>`:""}
                  </aside>
                  <div class="pacom-splitter"></div>
                  <main class="pacom-right-pane">
                    <div class="pacom-canvas-stage" data-role="deploy-stage" style="cursor:${O?"crosshair":"default"};">
                      <div class="pacom-canvas-viewport">
                        <div class="pacom-plan-wrap" data-role="deploy-plan">
                          <img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 部署平面图" />
                          ${y.filter(s=>s.planPoint).map(s=>`
                              <button type="button" class="pacom-pin ${s.id===j?"is-selected":""} ${s.connectivity==="offline"?"pacom-pin--offline":""}"
                                style="left:${(s.planPoint.x*100).toFixed(2)}%; top:${(s.planPoint.y*100).toFixed(2)}%;"
                                data-pick-dev="${s.id}" title="${s.name}">
                                <span class="pacom-dot ${s.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                <span>${Lt(s)}</span>
                              </button>`).join("")}
                        </div>
                      </div>
                      ${O&&N?`<div style="position:absolute; top:16px; left:16px; z-index:8;" class="pacom-badge pacom-badge--accent">标点模式：点击图纸任意位置更新「${N.name}」的 2D 坐标（不改动硬件绑定）</div>`:""}
                    </div>
                  </main>
                </section>`:n==="projects"?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">项目与楼宇归属配置</h2>
                      <span class="pacom-row-sub">共 ${L.projects.length} 个授权项目 · ${L.buildings.length} 栋楼宇</span>
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                      ${L.projects.map(s=>{const g=L.buildings.filter(P=>P.projectId===s.id);return`
                            <div class="pacom-card" style="padding:16px; gap:10px;">
                              <img src="${s.imageUrl??"./media/gzlab.jpg"}" alt="${s.name}" style="width:100%; height:132px; object-fit:cover; border-radius:10px;" />
                              <div>
                                <strong style="font-size:15px; font-weight:500;">${s.name}</strong>
                                <div class="pacom-row-sub">${s.city??""} ${s.address??""} · ${g.length} 栋楼宇</div>
                              </div>
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                ${g.map(P=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${P.name}</strong> · 地上 ${P.aboveFloors}F / ${P.areaSqm??"-"} m²</span>
                                      <span class="pacom-badge ${P.id===r.buildingId?"pacom-badge--accent":"pacom-badge--neutral"}">${P.id===r.buildingId?"含 E7F 试点":"对照楼宇"}</span>
                                    </div>`).join("")}
                              </div>
                            </div>`}).join("")}
                    </div>
                  </section>`:n==="floors"?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">${f?.name??"E栋"} 楼层与 2D 图纸清单</h2>
                        <span class="pacom-row-sub">共登记 ${F.length} 个楼层</span>
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
                              ${F.map(s=>{const g=s.id===r.floorId,P=l.scope.allowedFloorIds.includes(s.id);return`
                                    <tr>
                                      <td><strong>${f?.name??""} ${s.name}</strong></td>
                                      <td><span class="pacom-badge ${s.plan?"pacom-badge--online":"pacom-badge--neutral"}">${s.plan?"已上传 2D 图纸":"待上传图纸"}</span></td>
                                      <td>${g?`${y.length} 台设备 · ${o.length} 个功能区`:"-"}</td>
                                      <td><span class="pacom-badge ${P?"pacom-badge--accent":"pacom-badge--warning"}">${P?"已授权":"未授权"}</span></td>
                                      <td style="text-align:right;">
                                        ${g?'<button type="button" class="pacom-btn" data-dsec="floorplan">去标点与绑定 →</button>':'<span class="pacom-row-sub">暂未入网</span>'}
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
                        <span class="pacom-row-sub">${o.length} 个逻辑功能区</span>
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
                              ${o.map(s=>{const g=y.filter(ne=>ne.logicalZoneId===s.id),P=g.filter(ne=>ne.physicalInstalled).length;return`
                                    <tr>
                                      <td><strong>${s.name.replace(/^7F\s*/,"")}</strong></td>
                                      <td>${g.length} 台</td>
                                      <td><span class="pacom-badge ${P===g.length?"pacom-badge--online":"pacom-badge--warning"}">${P} / ${g.length} 已复核</span></td>
                                    </tr>`}).join("")}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>

                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">E7F 竣工图纸与设备手册附件</h2>
                        <span class="pacom-row-sub">共 ${Te.length} 份关联工程文档（支持按空间与设备查阅）</span>
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
                              ${Te.map(s=>`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${s.name}</div>
                                    <div class="pacom-row-sub">${s.size}</div>
                                  </td>
                                  <td><span class="pacom-badge pacom-badge--neutral">${s.category}</span></td>
                                  <td><span class="pacom-row-sub">${s.boundScope}</span></td>
                                  <td><span class="pacom-row-sub">${s.updatedAt}</span></td>
                                  <td style="text-align:right;">
                                    <button type="button" class="pacom-btn" data-preview-doc="${s.id}">查阅附件</button>
                                  </td>
                                </tr>`).join("")}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>`:n==="connections"?`
                      <div class="lov-kpi-strip" role="region" aria-label="数据采集健康度">
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">已连通通道</span>
                          <div class="lov-kpi-value">${x}<span class="lov-kpi-unit">/ ${q.length}</span></div>
                          <span class="lov-kpi-delta">边缘网关在线监控</span>
                        </div>
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">数据采集健康度</span>
                          <div class="lov-kpi-value">${q.length>0?Math.round(x/q.length*100):100}<span class="lov-kpi-unit">%</span></div>
                          <span class="lov-kpi-delta">区分设备真故障与断流</span>
                        </div>
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">原始采集点</span>
                          <div class="lov-kpi-value">${Y}<span class="lov-kpi-unit">点</span></div>
                          <span class="lov-kpi-delta">协议直采实时遥测</span>
                        </div>
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">衍生计算点</span>
                          <div class="lov-kpi-value">${c}<span class="lov-kpi-unit">点</span></div>
                          <span class="lov-kpi-delta">能碳与聚合虚拟点位</span>
                        </div>
                      </div>

                      ${z.length>0?`
                          <div class="lov-banner lov-banner--critical">
                            <div class="lov-banner-text">
                              <span class="lov-banner-title">检测到 ${z.length} 条采集通道通信降级（${z.map(s=>s.name).join("、")}）</span>
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
                                ${q.map(s=>{const g=St[s.status]??{label:s.status,cls:"pacom-badge--neutral"},P=s.status==="connected"?98:s.status==="degraded"?62:0,ne=P>=75?"var(--pacom-status-online)":P>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",W=$===s.id,de=W?Et(s,y):[];return`
                                      <tr>
                                        <td><strong>${s.name}</strong></td>
                                        <td><span class="pacom-badge pacom-badge--neutral">${s.protocol.toUpperCase()}</span></td>
                                        <td><code style="font-size:12px;">${s.endpoint}</code></td>
                                        <td>采集 ${s.collectedPoints} / 计算 ${s.calculatedPoints}</td>
                                        <td style="min-width:130px;">
                                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                                            <span class="pacom-badge ${g.cls}">${g.label}</span>
                                            <span class="pacom-row-sub">${P}%</span>
                                          </div>
                                          <div class="lov-progress-track"><div class="lov-progress-fill" style="width:${P}%; background:${ne};"></div></div>
                                        </td>
                                        <td>
                                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                                            <button type="button" class="pacom-btn" data-expand-conn="${s.id}">${W?"收起点位":"点位质量"}</button>
                                            <button type="button" class="pacom-btn" data-ping-conn="${s.id}">测试连通</button>
                                            <button type="button" class="pacom-btn pacom-btn--ghost" data-copy-endpoint="${s.id}" data-endpoint-val="${s.endpoint}">
                                              ${Q===s.id?"已复制":"复制端点"}
                                            </button>
                                          </div>
                                        </td>
                                      </tr>
                                      ${W?`
                                          <tr>
                                            <td colspan="6" style="background:var(--pacom-surface-secondary); padding:12px 16px;">
                                              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                                                <span style="font-size:12px; font-weight:500;">传感器级点位数据质量明细（${s.name}）</span>
                                                <span class="pacom-row-sub">在线正常 · 延迟 &gt;30 分钟（Delayed） · 断流 &gt;3×采集间隔（Offline）</span>
                                              </div>
                                              <div style="display:flex; flex-direction:column; gap:6px;">
                                                ${de.map(k=>`
                                                    <div class="pacom-receipt-item" style="background:var(--pacom-surface-primary);">
                                                      <span><strong>${k.deviceName}</strong> · ${k.pointName}</span>
                                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                                        <span class="pacom-row-sub">当前：${k.value} · 间隔 ${k.interval} · 上次上报 ${k.lastSeen}</span>
                                                        <span class="pacom-badge ${k.quality==="online"?"pacom-badge--online":k.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                                          ${k.quality==="online"?"在线正常":k.quality==="delayed"?"延迟 >30m":"断流 >3×间隔"}
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
                      </section>`:n==="inventory"?`
                        ${V?`
                            <div class="lov-banner ${V.failed===0?"lov-banner--ok":"lov-banner--critical"}">
                              <div class="lov-banner-text">
                                <span class="lov-banner-title">批量功能自检（FTT）摘要 · ${V.ranAt}</span>
                                <span class="lov-banner-sub">共检测 ${V.total} 台：通过 ${V.passed} 台，异常 ${V.failed} 台${V.failedNames.length>0?`（${V.failedNames.join("、")}）`:"，全部设备已自动复位"}</span>
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
                                  ${y.map(s=>{const g=(s.logicalZoneId?It[s.logicalZoneId]:void 0)??"E7F";return`
                                        <tr>
                                          <td>
                                            <div style="font-weight:500;">${s.name}</div>
                                            <div class="pacom-row-sub">${g} · v${s.version}</div>
                                          </td>
                                          <td>
                                            <span class="pacom-badge ${s.planPoint?"pacom-badge--online":"pacom-badge--warning"}">
                                              ${s.planPoint?`${Math.round(s.planPoint.x*100)}%, ${Math.round(s.planPoint.y*100)}%`:"未标点"}
                                            </span>
                                          </td>
                                          <td>
                                            <span class="pacom-badge ${s.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">
                                              ${s.hardwareBinding?s.hardwareBinding.protocol.toUpperCase():"未绑定"}
                                            </span>
                                          </td>
                                          <td>
                                            <span class="pacom-badge ${s.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">
                                              ${s.physicalInstalled?"已复核":"待复核"}
                                            </span>
                                          </td>
                                          <td>
                                            <span class="pacom-badge ${s.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
                                              ${s.connectivity==="online"?"在线":"离线"}
                                            </span>
                                          </td>
                                          <td style="text-align:right;">
                                            <button type="button" class="pacom-btn" data-ftt-dev="${s.id}">单机自检</button>
                                          </td>
                                        </tr>`}).join("")}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </section>`:`
                        <div class="lov-kpi-strip" role="region" aria-label="交付就绪检查门控">
                          <button type="button" class="lov-kpi-cell ${S===0?"lov-gate-ok":"lov-gate-warn"}" data-dsec="floorplan" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">1. 图纸标点就绪</span>
                            <div class="lov-kpi-value">${m}<span class="lov-kpi-unit">/ ${y.length}</span></div>
                            <span class="lov-kpi-delta" style="display:inline-flex; align-items:center; gap:4px;">${S===0?`${te("check",12)} 全部设备已完成标点`:`尚差 ${S} 台未标点 →`}</span>
                          </button>
                          <button type="button" class="lov-kpi-cell ${ee===0?"lov-gate-ok":"lov-gate-warn"}" data-dsec="inventory" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">2. 物理安装复核</span>
                            <div class="lov-kpi-value">${D}<span class="lov-kpi-unit">/ ${y.length}</span></div>
                            <span class="lov-kpi-delta" style="display:inline-flex; align-items:center; gap:4px; ${ee>0?"color:var(--pacom-status-warning);":""}">${ee===0?`${te("check",12)} 现场复核全绿`:`待复核 ${ee} 台，点击查看 →`}</span>
                          </button>
                          <button type="button" class="lov-kpi-cell ${z.length===0?"lov-gate-ok":"lov-gate-warn"}" data-dsec="connections" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">3. 网关通道连通</span>
                            <div class="lov-kpi-value">${x}<span class="lov-kpi-unit">/ ${q.length}</span></div>
                            <span class="lov-kpi-delta" style="display:inline-flex; align-items:center; gap:4px; ${z.length>0?"color:var(--pacom-status-warning);":""}">${z.length===0?`${te("check",12)} 全部通道健康`:`${z.length} 条通道降级，点击排查 →`}</span>
                          </button>
                          <button type="button" class="lov-kpi-cell ${V&&V.failed===0?"lov-gate-ok":"lov-gate-warn"}" data-batch-ftt="1" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">4. 批量功能自检（FTT）</span>
                            <div class="lov-kpi-value">${V?V.passed:y.filter(s=>s.connectivity==="online").length}<span class="lov-kpi-unit">/ ${y.length}</span></div>
                            <span class="lov-kpi-delta" style="display:inline-flex; align-items:center; gap:4px; ${V&&V.failed>0?"color:var(--pacom-status-warning);":""}">${V?V.failed===0?`${te("check",12)} 已于 ${V.ranAt} 全绿通过`:`${V.failed} 台未通过，点击复检 →`:"点击发起全层批量自检 →"}</span>
                          </button>
                        </div>

                        <section class="lov-section">
                          <div class="lov-section-head">
                            <div>
                              <h2 class="lov-section-title">E7F 交付冻结批次</h2>
                              ${ee>0||z.length>0?`<span class="pacom-row-sub">当前尚有 ${ee} 台待复核与 ${z.length} 条降级链路，仍可生成阶段快照</span>`:""}
                            </div>
                            <div style="display:flex; gap:8px; flex-wrap:wrap;">
                              <button type="button" class="pacom-btn" data-batch-ftt="1">一键全层批量自检（FTT）</button>
                              <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${se?"":"disabled"}>+ 新建交付冻结快照</button>
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
                                  ${K.map(s=>`
                                      <tr>
                                        <td>
                                          <div style="font-weight:500;">${s.versionTag}</div>
                                          <div class="pacom-row-sub"><code>${s.id}</code></div>
                                        </td>
                                        <td><strong>${s.verifiedCount}</strong> / ${s.deviceCount} 台设备</td>
                                        <td>
                                          <div>${s.frozenBy}</div>
                                          <div class="pacom-row-sub">${s.note??"-"}</div>
                                        </td>
                                        <td><span class="pacom-badge pacom-badge--accent">${kt[s.status]??s.status}</span></td>
                                      </tr>`).join("")}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </section>`}
          </div>
        </div>
      </div>
    `,e.querySelectorAll("[data-dsec]").forEach(s=>{s.addEventListener("click",()=>{const g=s.dataset.dsec;g&&(n=g,C="",R="",I())})}),e.querySelectorAll("[data-dev-filter]").forEach(s=>{s.addEventListener("click",()=>{i=s.dataset.devFilter??"all",I()})}),e.querySelectorAll("[data-pick-dev]").forEach(s=>{s.addEventListener("click",()=>{j=s.dataset.pickDev??null,B=y.find(P=>P.id===j)?.physicalInstalled??!1,I()})}),e.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{B=!B,I()}),e.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{O=!O,I()}),e.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{N&&J(N)}),e.querySelectorAll("[data-ftt-dev]").forEach(s=>{s.addEventListener("click",()=>{const g=y.find(P=>P.id===s.dataset.fttDev);g&&J(g)})}),e.querySelectorAll("[data-batch-ftt]").forEach(s=>{s.addEventListener("click",()=>{H()})}),e.querySelectorAll("[data-expand-conn]").forEach(s=>{s.addEventListener("click",()=>{const g=s.dataset.expandConn??null;$=$===g?null:g,I()})}),e.querySelectorAll("[data-preview-doc]").forEach(s=>{s.addEventListener("click",()=>{const g=Te.find(P=>P.id===s.dataset.previewDoc);g&&(R="",C=`已调阅工程附件「${g.name}」（关联范围：${g.boundScope}，更新于 ${g.updatedAt}）。`,I())})}),e.querySelectorAll("[data-ping-conn]").forEach(s=>{s.addEventListener("click",()=>{const g=q.find(P=>P.id===s.dataset.pingConn);g&&(R="",g.status==="connected"?C=`连通性测试通过：「${g.name}」（${g.endpoint}）响应正常，延迟 18 ms。`:R=`连通性测试异常：「${g.name}」（${g.endpoint}）超时无应答，建议排查边缘网关端口与 RS485 链路。`,I())})}),e.querySelectorAll("[data-copy-endpoint]").forEach(s=>{s.addEventListener("click",async()=>{const g=s.dataset.endpointVal??"",P=s.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(g),Q=P,I(),window.setTimeout(()=>{Q=null,I()},1600)}catch{}})}),e.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async s=>{if(!O||!N)return;const g=s.currentTarget.getBoundingClientRect(),P=Math.max(.02,Math.min(.98,(s.clientX-g.left)/g.width)),ne=Math.max(.02,Math.min(.98,(s.clientY-g.top)/g.height));try{await t.updateDevicePlanPoint({deviceId:N.id,floorId:r.floorId,planVersion:N.planPoint?.planVersion??1,x:P,y:ne,expectedVersion:N.version}),O=!1,C=`已更新「${N.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await U()}catch(W){R=W instanceof Error?W.message:String(W),I()}}),e.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async s=>{if(s.preventDefault(),!N)return;const g=new FormData(s.currentTarget);try{await t.updateDeviceHardwareBinding({deviceId:N.id,gatewayId:N.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(g.get("protocol")),networkAddress:String(g.get("networkAddress")??""),portOrChannel:String(g.get("portOrChannel")??""),physicalInstalled:B,expectedVersion:N.version}),C=`已保存「${N.name}」的硬件绑定与物理安装复核状态。`,await U()}catch(P){R=P instanceof Error?P.message:String(P),I()}}),e.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const s=await t.freezeDeliveryBatch(r.floorId,"系统部署交付验收发起冻结");C=`已生成冻结批次 ${s.versionTag}（核验 ${s.verifiedCount}/${s.deviceCount}）。`,await U()}catch(s){R=s instanceof Error?s.message:String(s),I()}})}await U()}function Ne(e){if(e.connectivity==="offline")return`${e.name.includes("VAV")?"VAV-02":e.name.slice(0,6)} 离线`;if(e.category==="lighting"){const t=e.name.includes("702")?"702 照明":"主照明",l=Number(e.telemetry.dimming?.value??0);return l>0?`${t} ${l}%`:`${t} 关`}return e.category==="hvac"?`${e.name.includes("VAV")?"VAV-02":"FCU-01"} ${e.telemetry.setpoint?.value??24}°C`:e.category==="sensor"?`环境 ${e.telemetry.temp?.value??"23.4"}°C`:e.category==="gateway"?"主控网关":e.name.slice(0,6)}const Pe={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},jt={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},Be=te("chevron-down",12),Ct={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function w(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function _e(e){const t=e.match(/(-?\d+)/);if(!t)return 0;const l=Number(t[1]);return e.toUpperCase().startsWith("B")?-Math.abs(l):l}async function Ft(e,t,l){const a=await t.getSpatialTree(),n=t.mode==="demo",i=l.scope.canControlDevices,L=l.scope.canManageAlarms,y=l.scope.allowedZoneIds?.length?l.scope.allowedZoneIds:null,q=a.floors.filter(b=>l.scope.allowedFloorIds.includes(b.id)),K=y||a.projects.length<=1&&a.buildings.length<=1&&q.length<=1?"floors-only":a.projects.length>1?"multi-project":a.buildings.length>1?"single-project-multi-building":"single-building",j=K==="multi-project",B=K==="multi-project"||K==="single-project-multi-building",O=K!=="floors-only",Q=K==="floors-only"&&q.length<=1;let $={level:"floor",projectId:r.projectId,buildingId:r.buildingId,floorId:r.floorId},V="devices",C=!1,R=!1,U="",J="",H="all",I="all";const N=new URLSearchParams(window.location.hash.split("?")[1]??""),se=N.get("device"),Y=N.get("zone");let c=se,x=!!se,z="control",m="",D=!1,ee="today",S="devices";const h=new Set,f=new Set;let F=[],o=[],s=[],g=null,P=null,ne=1,W=0,de=0,k=null;function ie(){return a.zones.filter(b=>!($.level==="floor"&&b.floorId!==$.floorId||y&&!y.includes(b.id)))}function p(b){return[...a.floors.filter(A=>A.buildingId!==b?!1:K==="floors-only"?l.scope.allowedFloorIds.includes(A.id):!0)].sort((A,d)=>_e(d.name)-_e(A.name))}async function v(b,M=!1){let A=b;A.level==="all-projects"&&!j&&(A={level:"project",projectId:a.projects[0]?.id??r.projectId}),A.level==="project"&&!B&&(A={level:"building",projectId:A.projectId,buildingId:a.buildings[0]?.id??r.buildingId}),A.level==="building"&&!O&&(A={level:"floor",projectId:A.projectId,buildingId:A.buildingId,floorId:q[0]?.id??r.floorId}),$=A,P=null,I=M&&Y?Y:"all",D=!1,R=!1,C=!1,f.clear(),ne=1,W=0,de=0,k&&(k(),k=null);const d=$.level==="floor"?$.floorId:r.floorId;if($.level==="floor")try{const[u,T,E]=await Promise.all([t.getFloorDevices($.floorId),t.listAlarms($.floorId),t.listWorkOrders($.floorId)]);F=u,o=T,s=E,F.some(X=>X.id===c)?M&&se&&(x=!0):(c=F[1]?.id??F[0]?.id??null,x=!1),k=t.subscribeFloorEvents($.floorId,async X=>{X.type==="control.receipt.updated"&&g?.batchId===X.batchId&&(g=await t.getControlBatch(X.batchId)),(X.type==="telemetry.updated"||X.type==="device.connectivity")&&$.level==="floor"&&(F=await t.getFloorDevices($.floorId)),X.type==="alarm.changed"&&$.level==="floor"&&(o=await t.listAlarms($.floorId)),re()})}catch(u){F=[],o=[],s=[],c=null,x=!1,P=u instanceof Error?u.message:String(u)}else{x=!1;const[u,T,E]=await Promise.all([t.getFloorDevices(d).catch(()=>[]),t.listAlarms(d).catch(()=>[]),t.listWorkOrders(d).catch(()=>[])]);F=u,o=T,s=E}ce()}function _(b){return b?a.zones.find(M=>M.id===b)?.name??b:"未分配逻辑区"}function ae(){const b=J.trim().toLowerCase();return F.filter(M=>I!=="all"&&M.logicalZoneId!==I||H!=="all"&&M.category!==H?!1:b?M.name.toLowerCase().includes(b)||M.id.toLowerCase().includes(b)||_(M.logicalZoneId).toLowerCase().includes(b):!0)}async function le(b,M,A){!b.length||$.level!=="floor"||!i||(b.forEach(d=>h.add(d)),g=await t.dispatchControlBatch({floorId:$.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:b.map(d=>({deviceId:d,command:M,targetValue:A}))}),re())}function re(){const b=document.activeElement,M=b?.dataset?.role,A=b&&"selectionStart"in b?b.selectionStart:null,d=b&&"selectionEnd"in b?b.selectionEnd:null,u=e.querySelector(".pacom-list")?.scrollTop??0;ce();const T=e.querySelector(".pacom-list");if(T&&(T.scrollTop=u),M==="search"||M==="space-search"){const E=e.querySelector(`[data-role="${M}"]`);E&&(E.focus(),A!==null&&d!==null&&E.setSelectionRange(A,d))}}function he(){const b=e.querySelector('[data-role="canvas-viewport"]');b&&(b.style.transform=`translate(${W}px, ${de}px) scale(${ne})`);const M=e.querySelector('[data-role="zoom-label"]');M&&(M.textContent=`${Math.round(ne*100)}%`)}function ge(b){if(b==="all")return{level:"all-projects"};const M=b.split(":");return M[0]==="project"&&M[1]?{level:"project",projectId:M[1]}:M[0]==="building"&&M[1]&&M[2]?{level:"building",projectId:M[1],buildingId:M[2]}:M[0]==="floor"&&M[1]&&M[2]&&M[3]?{level:"floor",projectId:M[1],buildingId:M[2],floorId:M[3]}:{level:"all-projects"}}function be(){const b=$,M=b.level==="all-projects"?null:a.projects.find(E=>E.id===b.projectId)??a.projects[0],A=b.level==="building"||b.level==="floor"?a.buildings.find(E=>E.id===b.buildingId):null,d=b.level==="floor"?a.floors.find(E=>E.id===b.floorId):null,u=[];if($.level==="all-projects")u.push(`全部项目（${a.projects.length}）`);else if($.level==="project")u.push(w(M?.name??"园区"));else if($.level==="building")B&&M&&u.push(`<span class="pacom-space-trigger-muted">${w(M.name)}</span>`),u.push(w(A?.name??"楼宇"));else{B&&M&&u.push(`<span class="pacom-space-trigger-muted">${w(M.name)}</span>`),O&&A&&u.push(`<span class="pacom-space-trigger-muted">${w(A.name)}</span>`);const E=!O&&A?`${A.name} ${d?.name??"7F"}`:d?.name??"7F";u.push(w(E))}const T='<span class="pacom-space-trigger-muted" style="margin:0 1px;">·</span>';return Q?`<span class="pacom-space-trigger is-static" title="当前授权空间">${u.join(T)}</span>`:`
      <button type="button" class="pacom-space-trigger" data-toggle-space-pop="1" aria-expanded="${R}" aria-haspopup="dialog" title="切换项目 / 楼宇 / 楼层">
        <span>${u.join(T)}</span>
        <span style="display:inline-flex; color:var(--pacom-text-secondary);">${Be}</span>
      </button>
    `}function Le(b){if(!R||Q)return"";const M=U.trim().toLowerCase(),A=$.level==="all-projects"?a.projects[0]?.id??r.projectId:$.projectId,d=$.level==="building"||$.level==="floor"?$.buildingId:a.buildings.find(Z=>Z.projectId===A)?.id??r.buildingId,u=a.projects.filter(Z=>!M||Z.name.toLowerCase().includes(M)),T=a.buildings.filter(Z=>Z.projectId===A&&(!M||Z.name.toLowerCase().includes(M))),E=p(d).filter(Z=>!M||Z.name.toLowerCase().includes(M)),X=j,oe=B;return`
      <div class="pacom-space-popover" role="dialog" aria-label="空间快速切换" data-role="space-popover">
        <div class="pacom-space-pop-head">
          ${te("search",14)}
          <input type="text" name="spaceQuickSearch" data-role="space-search" placeholder="快速检索园区、楼宇或楼层…" value="${w(U)}" aria-label="检索空间" />
          <button type="button" class="pacom-drawer-close" style="width:24px; height:24px;" data-toggle-space-pop="1" aria-label="关闭">${te("x",14)}</button>
        </div>
        <div class="pacom-space-pop-cols">
          ${X?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">园区 / 项目</div>
                ${j?`<button type="button" class="pacom-space-pop-item ${$.level==="all-projects"?"is-active":""}" data-nav-scope="all">
                        <span>全部项目（${a.projects.length}）</span>
                        ${$.level==="all-projects"?te("check",14):""}
                      </button>`:""}
                ${u.map(Z=>{const G=$.level==="project"&&$.projectId===Z.id;return`<button type="button" class="pacom-space-pop-item ${G?"is-active":""}" data-nav-scope="project:${w(Z.id)}">
                      <span>${w(Z.name)}</span>
                      ${G?te("check",14):te("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          ${oe?`
              <div class="pacom-space-pop-col">
                <div class="pacom-space-pop-label">${w(a.projects.find(Z=>Z.id===A)?.name??"园区")} · 楼宇</div>
                ${B?`<button type="button" class="pacom-space-pop-item ${$.level==="project"?"is-active":""}" data-nav-scope="project:${w(A)}">
                        <span>园区总览</span>
                        ${$.level==="project"?te("check",14):""}
                      </button>`:""}
                ${T.map(Z=>{const G=$.level==="building"&&$.buildingId===Z.id,pe=Z.id===r.buildingId;return`<button type="button" class="pacom-space-pop-item ${G?"is-active":""}" data-nav-scope="building:${w(Z.projectId)}:${w(Z.id)}">
                      <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>${w(Z.name)}</span>
                        ${pe&&b>0?'<span class="pacom-elev-dot" title="有活跃告警"></span>':""}
                      </span>
                      ${G?te("check",14):te("chevron-right",12)}
                    </button>`}).join("")}
              </div>`:""}
          <div class="pacom-space-pop-col">
            <div class="pacom-space-pop-label">${w(a.buildings.find(Z=>Z.id===d)?.name??"楼宇")} · 楼层</div>
            ${O?`<button type="button" class="pacom-space-pop-item ${$.level==="building"&&$.buildingId===d?"is-active":""}" data-nav-scope="building:${w(A)}:${w(d)}">
                    <span>整栋视图</span>
                    ${$.level==="building"&&$.buildingId===d?te("check",14):""}
                  </button>`:""}
            ${E.map(Z=>{const G=l.scope.allowedFloorIds.includes(Z.id),pe=$.level==="floor"&&$.floorId===Z.id,ye=Z.id===r.floorId&&b>0;return`<button type="button" class="pacom-space-pop-item ${pe?"is-active":""}" style="${G?"":"opacity:0.5;"}" data-nav-scope="floor:${w(A)}:${w(d)}:${w(Z.id)}">
                  <span style="display:inline-flex; align-items:center; gap:6px;">
                    <span>${w(Z.name)}</span>
                    ${ye?'<span class="pacom-elev-dot"></span>':""}
                  </span>
                  <span class="pacom-row-sub" style="font-size:11px;">${pe?te("check",14):G?Z.plan?"2D":"待部署":"未授权"}</span>
                </button>`}).join("")}
          </div>
        </div>
      </div>
    `}function fe(b){const M=$;if(M.level==="all-projects"){const A=J.trim().toLowerCase(),d=a.projects.filter(u=>!A||u.name.toLowerCase().includes(A));return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">授权园区（${d.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${te("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:6px; padding:8px;">
          ${d.map(u=>{const T=a.buildings.filter(E=>E.projectId===u.id).length;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="project:${w(u.id)}">
                  <div>
                    <div class="pacom-row-title">${w(u.name)}</div>
                    <div class="pacom-row-sub">${w(u.city??"")} · ${T} 栋楼宇</div>
                  </div>
                  <span class="pacom-badge pacom-badge--accent">进入 →</span>
                </button>`}).join("")}
        </div>
      `}if(M.level==="project"){const A=J.trim().toLowerCase(),d=a.buildings.filter(E=>E.projectId===M.projectId&&(!A||E.name.toLowerCase().includes(A))),u=F.filter(E=>E.connectivity==="online").length,T=F.length?Math.round(u/F.length*100):100;return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">园区楼宇（${d.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${te("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${d.map(E=>{const X=E.id===r.buildingId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left;" data-nav-scope="building:${w(E.projectId)}:${w(E.id)}">
                  <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                    <span class="pacom-dot ${X&&b>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <div>
                      <div class="pacom-row-title">${w(E.name)}</div>
                      <div class="pacom-row-sub">地上 ${E.aboveFloors} 层 · ${E.areaSqm??"-"} m²</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${X?"pacom-badge--accent":"pacom-badge--neutral"}">${X?`在线 ${T}%`:"运行平稳"}</span>
                </button>`}).join("")}
        </div>
      `}if(M.level==="building"){const A=J.trim().toLowerCase(),d=p(M.buildingId).filter(T=>!A||T.name.toLowerCase().includes(A)),u=a.buildings.find(T=>T.id===M.buildingId);return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">${w(u?.name??"楼宇")} 楼层导览（${d.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${te("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:4px; padding:8px;">
          ${d.map(T=>{const E=l.scope.allowedFloorIds.includes(T.id),X=T.id===r.floorId;return`
                <button type="button" class="pacom-row" style="width:100%; background:transparent; text-align:left; ${E?"":"opacity:0.6;"}" data-nav-scope="floor:${w(M.projectId)}:${w(M.buildingId)}:${w(T.id)}">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="pacom-dot ${X&&b>0?"pacom-dot--warning":T.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                    <div>
                      <div class="pacom-row-title">${w(u?.name??"")} ${w(T.name)}</div>
                      <div class="pacom-row-sub">${T.plan?"2D 平面控图就绪":"暂未上传平面图"}${X&&b>0?` · ${b} 告警`:""}</div>
                    </div>
                  </div>
                  <span class="pacom-badge ${E&&T.plan?"pacom-badge--online":"pacom-badge--neutral"}">${E?T.plan?"进入 →":"待部署":"未授权"}</span>
                </button>`}).join("")}
        </div>
      `}if(V==="devices"){const A=ae(),d=ie(),u=Array.from(f);return`
        <div class="pacom-pane-toolbar" style="padding:10px 12px; gap:8px;">
          ${y?`<div class="pacom-info-banner">我的区域视图：仅显示获授权的 ${y.length} 个功能区及设备。</div>`:""}
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
            <select class="pacom-select" style="height:28px; font-size:12px;" name="deviceCategory" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${H==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${H==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${H==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${H==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${H==="gateway"?"selected":""}>网关</option>
            </select>
            <span style="font-size:12px; color:var(--pacom-text-secondary);">可见 ${A.length} 台${i&&u.length?` · 已选 ${u.length}`:""}</span>
            <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${te("x",14)}</button>
          </div>
          ${d.length>0&&!P?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${I==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${d.map(T=>`<button type="button" class="pacom-zone-pill ${I===T.id?"is-active":""}" data-filter-zone="${w(T.id)}">${w(T.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
        </div>
        <div class="pacom-list" style="padding:6px;">
          ${P?`<div class="pacom-alert-banner">${w(P)}</div>`:A.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">没有匹配的设备</div>':A.map(T=>{const E=T.id===c&&x,X=f.has(T.id),oe=T.connectivity==="offline",Z=oe?"pacom-dot--critical":"pacom-dot--online",G=oe?"离线":T.category==="lighting"?`${T.telemetry.dimming?.value??"--"}%`:T.category==="hvac"?`${T.telemetry.setpoint?.value??"--"}°C`:T.category==="sensor"?`${T.telemetry.temp?.value??"--"}°C`:"在线";return`
                        <div class="pacom-row ${E?"is-selected":""}" data-select-device="${w(T.id)}" style="padding:8px;">
                          <div class="pacom-row-main">
                            ${i?`<input type="checkbox" name="devCheck-${w(T.id)}" data-check-device="${w(T.id)}" ${X?"checked":""} style="margin-top:3px;" aria-label="勾选 ${w(T.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title" style="font-size:13px;">${w(T.name)}</div>
                              <div class="pacom-row-sub">${w(_(T.logicalZoneId).replace(/^7F\s*/,""))} · ${w(Pe[T.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${oe?"pacom-badge--critical":"pacom-badge--online"}">
                            <span class="pacom-dot ${Z}"></span>${w(G)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${i&&u.length>0?`
            <div class="pacom-batch-bar" style="padding:8px 12px;">
              <span style="font-size:12px;">已选 <strong>${u.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(V==="zones"){const A=ie(),d={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-hud-sheet-head">
          <strong style="font-size:13px; font-weight:500;">功能区快控（${A.length}）</strong>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${te("x",14)}</button>
        </div>
        <div class="pacom-list" style="gap:8px; padding:10px;">
          ${A.map(u=>{const T=F.filter(G=>G.logicalZoneId===u.id),E=T.filter(G=>G.connectivity==="online").length,X=T.filter(G=>G.category==="lighting"||G.category==="hvac").length,oe=I===u.id,Z=d[u.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${oe?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${oe?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${w(oe?"all":u.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:13px; font-weight:500;">${w(u.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${E}/${T.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时 ${Z.temp} · ${Z.occ}</div>
                  ${X>0?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-zone-power="${w(u.id)}" data-zone-val="true" ${i?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-zone-power="${w(u.id)}" data-zone-val="false" ${i?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">弱电 / 网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-hud-sheet-head">
        <strong style="font-size:13px; font-weight:500;">本层告警（${o.length}）</strong>
        <div style="display:flex; align-items:center; gap:4px;">
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
          <button type="button" class="pacom-drawer-close" data-close-hud="1" aria-label="收起列表">${te("x",14)}</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:10px;">
        ${o.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">当前楼层无活跃告警</div>':o.map(A=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${w(A.title)}</strong>
                      <span class="pacom-badge ${A.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${A.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${w(A.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-locate-device="${w(A.deviceId)}">定位设备</button>
                      ${A.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:28px; font-size:12px;" data-ack-alarm="${w(A.id)}" ${L?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function Ae(b){const M=$,A=ie().length,d=M.level==="floor"?"搜索设备或区域…":M.level==="building"?"搜索楼层…":M.level==="project"?"搜索楼宇…":"搜索园区…",u=M.level==="floor"?`
          <button type="button" class="pacom-hud-pill ${C&&V==="devices"?"is-active":""}" data-hud-tab="devices">设备 ${F.length}</button>
          <button type="button" class="pacom-hud-pill ${C&&V==="zones"?"is-active":""}" data-hud-tab="zones">区域 ${A}</button>
          <button type="button" class="pacom-hud-pill ${b>0?"pacom-hud-pill--alert":""} ${C&&V==="alarms"?"is-active":""}" data-hud-tab="alarms">告警 ${b}</button>
        `:M.level==="building"?`
            <button type="button" class="pacom-hud-pill ${C?"is-active":""}" data-toggle-hud="1">楼层 ${p(M.buildingId).length}</button>
            ${b>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${b}</button>`:""}
          `:M.level==="project"?`
              <button type="button" class="pacom-hud-pill ${C?"is-active":""}" data-toggle-hud="1">楼宇 ${a.buildings.filter(T=>T.projectId===M.projectId).length}</button>
              ${b>0?`<button type="button" class="pacom-hud-pill pacom-hud-pill--alert" data-go-alarms="1">告警 ${b}</button>`:""}
            `:`<button type="button" class="pacom-hud-pill ${C?"is-active":""}" data-toggle-hud="1">园区 ${a.projects.length}</button>`;return`
      <div class="pacom-hud-search-wrap" data-role="hud-wrap">
        <div class="pacom-hud-bar">
          ${te("search",14)}
          <input class="pacom-hud-input" name="spatialSearch" data-role="search" placeholder="${d}" value="${w(J)}" aria-label="${d}" />
          ${u}
        </div>
        ${C?`<div class="pacom-hud-sheet" data-role="hud-sheet">${fe(b)}</div>`:""}
      </div>
    `}function Ge(b){if(Q||$.level!=="building"&&$.level!=="floor")return"";const M=$.buildingId,A=$.projectId,d=p(M);return!O&&d.length<=1?"":`
      <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换" data-role="elevation-scrubber">
        ${O?`<button type="button" class="pacom-elev-item ${$.level==="building"?"is-active":""}" data-nav-scope="building:${w(A)}:${w(M)}" title="查看整栋视图">
                <span>栋</span>
                <span class="pacom-elev-tick"></span>
              </button>`:""}
        ${d.map(u=>{const T=l.scope.allowedFloorIds.includes(u.id),E=$.level==="floor"&&$.floorId===u.id,X=u.id===r.floorId&&b>0;return`
              <button type="button" class="pacom-elev-item ${E?"is-active":""} ${T?"":"is-locked"}"
                data-nav-scope="floor:${w(A)}:${w(M)}:${w(u.id)}"
                title="${w(u.name)}${T?X?` · ${b} 条告警`:"":"（无权限）"}">
                ${X?'<span class="pacom-elev-dot" aria-hidden="true"></span>':""}
                <span>${w(u.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`}).join("")}
      </nav>
    `}function Ke(b,M){const A=$;if(A.level==="floor")return P?"":`
        <div class="pacom-canvas-dock" role="toolbar" aria-label="平面图图层与缩放控制">
          <button type="button" class="pacom-dock-btn" aria-pressed="${S==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${S==="temp"}" data-canvas-layer="temp">温度热力</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${S==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-zoom="out" title="缩小" aria-label="缩小">${te("minus",14)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-zoom="reset" data-role="zoom-label" title="点击复位 100%">${Math.round(ne*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-zoom="in" title="放大" aria-label="放大">${te("plus",14)}</button>
        </div>
      `;const d=F.length?Math.round(b/F.length*100):100,u=A.level==="building"?"418 kWh":"1,248 kWh",T=Math.round(96.2*.45+93.6*.35+d*.2),E=A.level==="building"?p(A.buildingId).find(X=>X.id===r.floorId)??p(A.buildingId)[0]:null;return`
      <div class="pacom-canvas-dock" role="region" aria-label="空间运行态势">
        <button type="button" class="pacom-dock-metric" data-go-analysis="health">
          <span class="pacom-dot pacom-dot--online"></span>
          <span>健康 <strong>${T}</strong></span>
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
          <span class="pacom-dot ${M>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
          <span>告警 <strong>${M}</strong></span>
        </button>
        ${A.level==="building"&&E?`<span class="pacom-dock-sep" aria-hidden="true"></span>
               <button type="button" class="pacom-dock-btn" aria-pressed="true" data-nav-scope="floor:${w(A.projectId)}:${w(A.buildingId)}:${w(E.id)}">进入 ${w(E.name)} 平面图 →</button>`:""}
      </div>
    `}function Ye(b,M){const A=$,d=F.length?Math.round(b/F.length*100):100;if(A.level==="all-projects")return`
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
            ${a.projects.map((E,X)=>`
                <button type="button" class="pacom-pin is-selected" style="left:${X===0?50:28}%; top:${X===0?52:34}%; padding:0 12px; height:32px; font-size:12px;" data-nav-scope="project:${w(E.id)}">
                  <span class="pacom-dot ${M>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <span>${w(E.name)} · 在线 ${d}%</span>
                </button>`).join("")}
          </div>
        </div>
      `;if(A.level==="project"){const E=a.projects.find(oe=>oe.id===A.projectId)??a.projects[0],X=a.buildings.filter(oe=>!E||oe.projectId===E.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 24px 72px; cursor:default;">
          <div style="position:relative; width:min(940px, 92%); border-radius:16px; overflow:hidden; box-shadow:0 14px 36px rgba(15,23,42,0.12); background:#fff;">
            <img src="${w(E?.imageUrl??"./media/gzlab.jpg")}" alt="${w(E?.name??"园区")}俯瞰" style="width:100%; max-height:72vh; object-fit:cover; display:block;" />
            ${X.map((oe,Z)=>{const G=oe.id===r.buildingId;return`
                  <button type="button" class="pacom-pin ${G?"is-selected":""}" style="left:${Z===0?56:38}%; top:${Z===0?44:62}%; height:30px; padding:0 11px;" data-nav-scope="building:${w(oe.projectId)}:${w(oe.id)}">
                    <span class="pacom-dot ${G&&M>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${w(oe.name)} · ${G?`在线 ${d}% · 告警 ${M}`:"运行平稳"}</span>
                  </button>`}).join("")}
          </div>
        </div>
      `}if(A.level==="building"){const E=a.buildings.find(oe=>oe.id===A.buildingId),X=p(A.buildingId).find(oe=>oe.id===r.floorId)??p(A.buildingId)[0];return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:48px 68px 72px 24px; cursor:default;">
          <div style="position:relative; display:inline-block;">
            <img class="pacom-plan-img" src="${w(E?.imageUrl??"./media/building-e.png")}" alt="${w(E?.name??"楼宇")} 整栋实景图" style="max-height:74vh;" />
            ${X?`<button type="button" class="pacom-pin is-selected" style="left:52%; top:38%; height:30px; padding:0 11px;" data-nav-scope="floor:${w(A.projectId)}:${w(A.buildingId)}:${w(X.id)}">
                    <span class="pacom-dot ${M>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                    <span>${w(E?.name??"")} ${w(X.name)} · 在线 ${b}/${F.length}</span>
                  </button>`:""}
          </div>
        </div>
      `}const u=a.floors.find(E=>E.id===A.floorId),T=ie();return`
      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${P?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${w(P)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${W}px, ${de}px) scale(${ne});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${w(u?.plan?.imageUrl??"./media/7F.webp")}" alt="E栋 ${w(u?.name??"7F")} 平面图" />
                  ${T.map((E,X)=>{const oe=Ct[E.id];if(!oe)return"";const Z=I===E.id,G=["23.2°C","24.6°C","22.8°C","23.9°C"],pe=["有人 74%","会议中","有人 52%","空闲"],ye=S==="temp"?` · ${G[X%G.length]}`:S==="occupancy"?` · ${pe[X%pe.length]}`:"",et=S==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":S==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${Z?"is-active":""}"
                          style="left:${oe.left}%; top:${oe.top}%; width:${oe.width}%; height:${oe.height}%; ${Z?"":et}"
                          data-filter-zone="${w(Z?"all":E.id)}"
                          title="${w(E.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${w(E.name.replace(/^7F\s*/,""))}${ye}</span>
                        </button>`}).join("")}
                  ${F.filter(E=>E.planPoint).map(E=>{const X=o.some(ye=>ye.deviceId===E.id&&ye.status==="active"),oe=C&&V==="alarms",Z=I!=="all"&&E.logicalZoneId!==I||oe&&!X,G=oe&&X?"background:var(--pacom-status-critical);":"",pe=E.category==="gateway"?Math.min(92,E.planPoint.y*100+5.5):E.planPoint.y*100;return`
                        <button type="button" class="pacom-pin ${E.id===c&&x?"is-selected":""} ${E.connectivity==="offline"?"pacom-pin--offline":""} ${Z?"pacom-pin--dimmed":""}"
                          style="left:${(E.planPoint.x*100).toFixed(2)}%; top:${pe.toFixed(2)}%; ${G}"
                          data-pin-device="${w(E.id)}" title="${w(E.name)}">
                          <span class="pacom-dot ${X?"pacom-dot--critical":E.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${w(Ne(E))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>
    `}function Qe(){if($.level!=="floor"||!x)return"";const b=F.find(G=>G.id===c);if(!b)return"";const M=b.category==="lighting",A=b.category==="hvac",d=Number(b.telemetry.dimming?.value??50),u=Number(b.telemetry.setpoint?.value??24),T=h.has(b.id),E=o.filter(G=>G.deviceId===b.id&&G.status==="active"),X=s.filter(G=>G.deviceId===b.id&&G.status!=="closed"),oe=A?[{name:"E7F_暖通空调与末端竣工图_v2.3.pdf",tag:"竣工图纸"},{name:"FCU-01_风机盘管维保与排障手册.pdf",tag:"维保手册"}]:M?[{name:"E7F_强电照明与DALI回路拓扑.pdf",tag:"回路图纸"}]:[{name:"E7F_BACnet_Modbus_点位映射表.xlsx",tag:"点位台账"}],Z=M?[{label:"当前开关",value:d>0?"开启":"关闭"},{label:"当前亮度",value:`${d}%`},{label:"实时功率",value:d>0?`${Math.round(d*1.4)} W`:"0 W"},{label:"运行模式",value:T?"人工覆盖":"自动策略"}]:A?[{label:"室内温度",value:`${b.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${u.toFixed(1)}°C`},{label:"运行工况",value:b.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:T?"人工覆盖":"自动策略"}]:b.category==="sensor"?[{label:"实时温度",value:`${b.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${b.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${b.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:b.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:b.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:b.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:b.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:b.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${w(b.name)}</h2>
            <div class="pacom-row-sub">${w(_(b.logicalZoneId))} · ${w(Pe[b.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${b.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${b.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              ${te("x",16)}
            </button>
          </div>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备档案分页" style="width:100%; justify-content:space-between;">
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${z==="control"}" data-drawer-tab="control">控制与工况</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${z==="trend"}" data-drawer-tab="trend">趋势与告警${E.length>0?` (${E.length})`:""}</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${z==="profile"}" data-drawer-tab="profile">档案与图纸</button>
        </div>

        ${z==="control"?`
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
              ${Z.map(G=>`
                  <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                    <span class="pacom-row-sub">${G.label}</span>
                    <strong style="font-size:13px; font-weight:500;">${w(G.value)}</strong>
                  </div>`).join("")}
            </div>

            ${A?`
                <div class="lov-schematic-strip" aria-label="暖通工况简图">
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                    <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                    <span class="pacom-row-sub">${b.connectivity==="online"?"制冷运转":"通信离线"}</span>
                  </div>
                  <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                    <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                    <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                    <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${w(b.telemetry.temp?.value??"23.8")}°</text>
                    <rect x="80" y="8" width="54" height="28" rx="6" fill="${b.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${b.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                    <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${b.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                    <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${b.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                    <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                    <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                    <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${u.toFixed(1)}°C</text>
                  </svg>
                </div>`:""}

            ${M||A?`
                <div class="pacom-control-box">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                    ${T&&i?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${w(b.id)}">恢复自动策略</button>`:i?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
                  </div>
                  ${b.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
                  ${M?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${i?"":"disabled"}>开灯</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${i?"":"disabled"}>关灯</button>
                      </div>
                      <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                        亮度目标：<strong>${d}%</strong>
                        <input type="range" min="0" max="100" step="10" value="${d}" data-ctrl-slider="lighting.dimming" ${i?"":"disabled"} />
                      </label>`:`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${i?"":"disabled"}>开机</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${i?"":"disabled"}>关机</button>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:12px;">设定温度：</span>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${u-.5}" ${i?"":"disabled"}>-0.5°C</button>
                        <strong>${u.toFixed(1)}°C</strong>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${u+.5}" ${i?"":"disabled"}>+0.5°C</button>
                      </div>`}
                </div>`:""}

            ${g?`
                <div class="pacom-control-box">
                  <div style="font-size:12px; font-weight:500;">最近批次：<code>${w(g.batchId)}</code></div>
                  <div class="pacom-receipt-list">
                    ${g.receipts.map(G=>{const pe=jt[G.status]??{text:G.status,badge:"pacom-badge--neutral"};return`
                          <div class="pacom-receipt-item">
                            <div>
                              <div><strong>${w(G.deviceId)}</strong> · ${w(G.command)} → ${w(G.targetValue)}</div>
                              ${G.errorMessage?`<div style="color:var(--pacom-status-critical);">${w(G.errorMessage)}</div>`:""}
                            </div>
                            <span class="pacom-badge ${pe.badge}">${pe.text}</span>
                          </div>`}).join("")}
                  </div>
                </div>`:""}`:z==="trend"?`
              <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="pacom-row-sub">近 24 小时趋势（${M?"亮度 %":A?"温度 °C":b.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${w(b.id)}">查看完整时序 →</button>
                </div>
                <svg viewBox="0 0 280 48" style="width:100%; height:48px; display:block;">
                  <line x1="0" y1="24" x2="280" y2="24" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
                  <polyline fill="none" stroke="${b.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${M?"0,38 40,38 80,16 120,12 160,14 200,20 240,14 280,16":A?"0,28 40,30 80,25 120,20 160,18 200,22 240,24 280,20":"0,24 40,25 80,23 120,21 160,20 200,22 240,21 280,22"}" />
                </svg>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:12px; font-weight:500;">本机活跃告警与未结工单</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
                </div>
                ${E.length===0&&X.length===0?'<div class="pacom-row-sub">当前设备运行平稳，无未处理告警或工单。</div>':`${E.map(G=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${w(G.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${w(G.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去诊断 →</span>
                          </button>`).join("")}${X.map(G=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-wo-id="${w(G.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${w(G.title)}</span>
                            <span class="pacom-badge pacom-badge--accent">查看工单 →</span>
                          </button>`).join("")}`}
              </div>`:`
              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">上下游拓扑关系（Twin Relationships）</span>
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; font-size:12px;">
                  <span class="pacom-badge pacom-badge--neutral">E7F 主控网关-01</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--accent">${w(Ne(b))}</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--online">${w(_(b.logicalZoneId).replace(/^7F\s*/,""))}</span>
                </div>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">关联竣工图纸与设备手册</span>
                ${m?`<div class="pacom-info-banner">${w(m)}</div>`:""}
                ${oe.map(G=>`
                    <div class="pacom-receipt-item">
                      <span style="font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${w(G.name)}">${w(G.name)}</span>
                      <button type="button" class="pacom-btn" style="height:24px; padding:0 8px; font-size:11px;" data-drawer-doc="${w(G.name)}">查阅</button>
                    </div>`).join("")}
              </div>

              <details class="lov-tech-details" open>
                <summary><span>技术标识与硬件绑定</span>${te("chevron-down",12)}</summary>
                <div class="pacom-kv-grid">
                  <span class="pacom-kv-label">设备编号</span><span><code>${w(b.id)}</code> · v${b.version}</span>
                  <span class="pacom-kv-label">图上点位</span><span>${b.planPoint?`x=${b.planPoint.x.toFixed(2)}, y=${b.planPoint.y.toFixed(2)} (图 v${b.planPoint.planVersion})`:"未标点"}</span>
                  <span class="pacom-kv-label">物理安装</span><span>${b.physicalInstalled?"现场已确认":"待现场复核"}</span>
                  <span class="pacom-kv-label">硬件绑定</span><span>${b.hardwareBinding?`${b.hardwareBinding.protocol.toUpperCase()} · ${b.hardwareBinding.networkAddress}`:"未绑定"}</span>
                </div>
              </details>`}
      </aside>
    `}function Xe(b,M,A){if(!D)return"";const d=Math.max(0,F.length-b),u=ee==="week",T=o.filter(E=>E.status==="active").slice(0,2);return`
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
            <button type="button" class="pacom-drawer-close" data-toggle-briefing="1" aria-label="关闭简报">${te("x",16)}</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">${u?"本周累计节能":"昨日能耗偏差"}</span><strong style="color:var(--pacom-status-online);">${u?"-7.1%（省 ¥342）":"-6.4%（省 ¥48）"}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">均温 / 在线率</span><strong>${w(A)}°C · ${b}/${F.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${M} 告警 · ${d} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖 / 未结工单</span><strong>${Math.max(1,h.size)} 覆盖 · ${s.filter(E=>E.status!=="closed").length} 工单</strong></div>
        </div>
        ${T.length>0?`<div style="display:flex; flex-direction:column; gap:5px;">
                <span class="pacom-row-sub">优先关注事项（点击直达）</span>
                ${T.map(E=>`
                    <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${w(E.id)}">
                      <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${w(E.title)}</span>
                      <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                    </button>`).join("")}
              </div>`:""}
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报 (.txt)</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">进入告警中心 →</button>
        </div>
      </div>
    `}function ce(){const b=o.filter(d=>d.status==="active").length,M=F.filter(d=>d.connectivity==="online").length,A=F.find(d=>d.category==="sensor")?.telemetry.temp?.value??"23.4";e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:12px; min-width:0;">
              <h1 class="pacom-title" style="flex-shrink:0;">空间总览</h1>
              <span class="pacom-header-sep" aria-hidden="true"></span>
              ${be()}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${P?n?'<span class="pacom-badge pacom-badge--neutral"><span class="pacom-dot pacom-dot--offline"></span>演示模式</span>':'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>':`<button type="button" class="pacom-pulse-btn" data-toggle-briefing="1" aria-expanded="${D}" title="点击查看今日运行简报">
                      <span class="pacom-dot pacom-dot--online"></span>
                      <span>${M}/${F.length} 在线 · ${w(A)}°C · 简报</span>
                      <span style="display:inline-flex; color:var(--pacom-text-secondary);">${Be}</span>
                    </button>`}
            </div>
          </div>
        </header>

        ${Le(b)}
        ${Xe(M,b,A)}

        <main class="pacom-spatial-stage">
          ${Ae(b)}
          ${Ye(M,b)}
          ${Ge(b)}
          ${Ke(M,b)}
          ${Qe()}
        </main>
      </div>
    `,Je()}function Je(){e.querySelectorAll("[data-toggle-space-pop]").forEach(d=>{d.addEventListener("click",u=>{u.stopPropagation(),R=!R,R&&(D=!1,C=!1),ce(),R&&e.querySelector('[data-role="space-search"]')?.focus()})}),e.querySelector('[data-role="space-search"]')?.addEventListener("input",d=>{U=d.currentTarget.value,re()}),e.querySelectorAll("[data-nav-scope]").forEach(d=>{d.addEventListener("click",u=>{u.stopPropagation(),d.dataset.navScope&&v(ge(d.dataset.navScope))})}),e.querySelectorAll("[data-hud-tab]").forEach(d=>{d.addEventListener("click",u=>{u.stopPropagation();const T=d.dataset.hudTab;C&&V===T?C=!1:(V=T,C=!0,R=!1,D=!1),ce()})}),e.querySelectorAll("[data-toggle-hud]").forEach(d=>{d.addEventListener("click",u=>{u.stopPropagation(),C=!C,C&&(R=!1,D=!1),ce()})}),e.querySelectorAll("[data-close-hud]").forEach(d=>{d.addEventListener("click",u=>{u.stopPropagation(),C=!1,ce()})});const b=e.querySelector('[data-role="search"]');b?.addEventListener("focus",()=>{C||(C=!0,R=!1,D=!1,re())}),b?.addEventListener("input",d=>{J=d.currentTarget.value,C=!0,re()}),e.querySelector('[data-role="category"]')?.addEventListener("change",d=>{H=d.currentTarget.value,ce()}),e.querySelectorAll("[data-filter-zone]").forEach(d=>{d.addEventListener("click",u=>{u.stopPropagation(),I=d.dataset.filterZone??"all",ce()})}),e.querySelectorAll("[data-select-device]").forEach(d=>{d.addEventListener("click",u=>{u.target.tagName!=="INPUT"&&(c=d.dataset.selectDevice??null,x=!0,ce())})}),e.querySelectorAll("[data-check-device]").forEach(d=>{d.addEventListener("change",()=>{const u=d.dataset.checkDevice;u&&(d.checked?f.add(u):f.delete(u),ce())})}),e.querySelectorAll("[data-pin-device]").forEach(d=>{d.addEventListener("click",u=>{u.stopPropagation(),c=d.dataset.pinDevice??null,x=!0,R=!1,D=!1,ce()})}),e.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{x=!1,ce()}),e.querySelectorAll("[data-drawer-tab]").forEach(d=>{d.addEventListener("click",()=>{z=d.dataset.drawerTab??"control",m="",ce()})}),e.querySelectorAll("[data-drawer-doc]").forEach(d=>{d.addEventListener("click",()=>{m=`已调阅「${d.dataset.drawerDoc??""}」（完整工程文档库见「系统部署 → 楼层与功能区」）。`,ce()})}),e.querySelectorAll("[data-briefing-period]").forEach(d=>{d.addEventListener("click",()=>{ee=d.dataset.briefingPeriod??"today",ce()})}),e.querySelectorAll("[data-go-alarm-id]").forEach(d=>{d.addEventListener("click",()=>{const u=d.dataset.goAlarmId??"";window.location.hash=u?`#alarms?alarm=${encodeURIComponent(u)}`:"#alarms"})}),e.querySelectorAll("[data-go-wo-id]").forEach(d=>{d.addEventListener("click",()=>{const u=d.dataset.goWoId??"";window.location.hash=u?`#alarms?wo=${encodeURIComponent(u)}`:"#alarms"})}),e.querySelector("[data-release-override]")?.addEventListener("click",d=>{const u=d.currentTarget.dataset.releaseOverride;u&&(h.delete(u),ce())}),e.querySelectorAll("[data-zone-power]").forEach(d=>{d.addEventListener("click",u=>{u.stopPropagation();const T=d.dataset.zonePower,E=d.dataset.zoneVal==="true";if(!T)return;const X=F.filter(Z=>Z.logicalZoneId===T&&Z.category==="lighting").map(Z=>Z.id),oe=F.filter(Z=>Z.logicalZoneId===T&&Z.category==="hvac").map(Z=>Z.id);X.length?le(X,"lighting.power",E):oe.length&&le(oe,"hvac.power",E)})}),e.querySelectorAll("[data-locate-device]").forEach(d=>{d.addEventListener("click",()=>{const u=d.dataset.locateDevice;u&&(c=u,x=!0,C=!1,ce())})}),e.querySelectorAll("[data-go-alarms]").forEach(d=>{d.addEventListener("click",()=>{window.location.hash="#alarms"})}),e.querySelectorAll("[data-go-analysis]").forEach(d=>{d.addEventListener("click",()=>{const u=d.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(u)}`})}),e.querySelectorAll("[data-go-timeseries]").forEach(d=>{d.addEventListener("click",()=>{const u=d.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(u)}`})}),e.querySelectorAll("[data-toggle-briefing]").forEach(d=>{d.addEventListener("click",u=>{u.stopPropagation(),D=!D,D&&(R=!1,C=!1),ce()})}),e.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const d=F.filter(Z=>Z.connectivity==="online").length,u=o.filter(Z=>Z.status==="active").length,T=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${d}/${F.length}（离线 ${F.length-d} 台）`,`待处理告警：${u} 条`,`人工覆盖中：${h.size} 台`].join(`
`),E=new Blob([T],{type:"text/plain;charset=utf-8;"}),X=URL.createObjectURL(E),oe=document.createElement("a");oe.href=X,oe.download="pacom-daily-briefing.txt",oe.click(),URL.revokeObjectURL(X)}),e.querySelectorAll("[data-ctrl-cmd]").forEach(d=>{d.addEventListener("click",()=>{if(!c||!d.dataset.ctrlCmd)return;const u=d.dataset.ctrlVal??"",T=u==="true"?!0:u==="false"?!1:Number(u);le([c],d.dataset.ctrlCmd,T)})}),e.querySelector("[data-ctrl-slider]")?.addEventListener("change",d=>{const u=d.currentTarget;!c||!u.dataset.ctrlSlider||le([c],u.dataset.ctrlSlider,Number(u.value))}),e.querySelectorAll("[data-batch-cmd]").forEach(d=>{d.addEventListener("click",()=>{const u=Array.from(f),T=d.dataset.batchVal??"",E=T==="true"?!0:T==="false"?!1:T;le(u,d.dataset.batchCmd,E)})}),e.querySelectorAll("[data-ack-alarm]").forEach(d=>{d.addEventListener("click",async()=>{!d.dataset.ackAlarm||$.level!=="floor"||!L||(await t.acknowledgeAlarm(d.dataset.ackAlarm,"首页快速确认"),o=await t.listAlarms($.floorId),ce())})}),e.querySelectorAll("[data-canvas-layer]").forEach(d=>{d.addEventListener("click",()=>{const u=d.dataset.canvasLayer;u&&(S=u,ce())})}),e.querySelectorAll("[data-zoom]").forEach(d=>{d.addEventListener("click",()=>{const u=d.dataset.zoom;u==="in"?ne=Math.min(2.6,Number((ne+.2).toFixed(2))):u==="out"?ne=Math.max(.6,Number((ne-.2).toFixed(2))):(ne=1,W=0,de=0),he()})}),e.querySelector('[data-role="elevation-scrubber"]')?.addEventListener("wheel",d=>{d.preventDefault();const u=$;if(u.level!=="building"&&u.level!=="floor")return;const T=p(u.buildingId),E=[...O?[{level:"building",projectId:u.projectId,buildingId:u.buildingId}]:[],...T.map(Z=>({level:"floor",projectId:u.projectId,buildingId:u.buildingId,floorId:Z.id}))],X=E.findIndex(Z=>Z.level==="building"?u.level==="building":Z.level==="floor"&&u.level==="floor"&&Z.floorId===u.floorId);if(X<0)return;const oe=Math.max(0,Math.min(E.length-1,X+(d.deltaY>0?1:-1)));oe!==X&&E[oe]&&v(E[oe])},{passive:!1});const A=e.querySelector('[data-role="canvas-stage"]');if(A&&!P){let d=!1,u=!1,T=0,E=0,X=0,oe=0;A.addEventListener("pointerdown",G=>{G.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(d=!0,u=!1,T=G.clientX,E=G.clientY,X=W,oe=de,A.classList.add("is-panning"),A.setPointerCapture?.(G.pointerId))}),A.addEventListener("pointermove",G=>{if(!d)return;const pe=G.clientX-T,ye=G.clientY-E;(Math.abs(pe)>3||Math.abs(ye)>3)&&(u=!0),W=X+pe,de=oe+ye,he()});const Z=()=>{d&&(d=!1,A.classList.remove("is-panning"),!u&&(C||R||D)&&(C=!1,R=!1,D=!1,ce()))};A.addEventListener("pointerup",Z),A.addEventListener("pointercancel",Z),A.addEventListener("wheel",G=>{G.preventDefault();const pe=G.deltaY<0?.12:-.12;ne=Math.max(.6,Math.min(2.6,Number((ne+pe).toFixed(2)))),he()},{passive:!1}),A.addEventListener("dblclick",G=>{G.target?.closest("button")||(ne=1,W=0,de=0,he())})}else e.querySelector(".pacom-spatial-stage")?.addEventListener("click",d=>{d.target?.closest("button, input, select, .pacom-hud-search-wrap, .pacom-space-popover, .lov-briefing-pop")||(C||R||D)&&(C=!1,R=!1,D=!1,ce())})}e.addEventListener("keydown",b=>{b.key==="Escape"&&(R||D||C||x)&&(R=!1,D=!1,C=!1,x=!1,ce())}),await v($,!0)}const Mt=new Set(["lighting","hvac","alarm_rules"]),Ve={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},Ee=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function Tt(e){const t=new Set;for(const l of e.actions)l.command.startsWith("lighting")?t.add("照明"):l.command.startsWith("hvac")?t.add("暖通"):t.add("综合");return Array.from(t)}function qt(e,t,l){const a=l?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
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
  `}async function zt(e,t,l){let[a,n,i]=await Promise.all([t.listScenes(r.floorId),t.getRuntimeSettings(r.projectId),t.getFloorDevices(r.floorId).catch(()=>[])]),L="manual",y="balanced",q="all",K=null,j="",B=!1,O=!1,Q=!1,$="all",V=null,C="",R="",U=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const J=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],H=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],I=[{deviceId:i[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],N=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${n.calendar.workdayStart} – ${n.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${n.calendar.nightGuardStart} – 次日 ${n.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],se=t.subscribeFloorEvents(r.floorId,async c=>{c.type==="control.receipt.updated"&&K?.batchId===c.batchId&&(K=await t.getControlBatch(c.batchId),Y())});function Y(){const c=j.trim().toLowerCase(),x=c?a.filter(o=>`${o.name} ${o.description}`.toLowerCase().includes(c)):a,z=n.rules.filter(o=>Mt.has(o.category)),m=q==="all"?z:q==="cbm"?[]:z.filter(o=>o.category===q),D=q==="all"||q==="cbm",ee=$==="issues"?J.filter(o=>o.status!=="verified"):J,S=Ee.find(o=>o.id===y)??Ee[1],h=l.scope.canControlDevices,f=l.scope.canEditDeployment;e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">智能策略</h1>
              <div class="pacom-tabs" role="tablist" aria-label="智能策略分类">
                <button class="pacom-tab" role="tab" aria-selected="${L==="manual"}" data-scene-tab="manual">快捷场景（${a.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${L==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
                <button class="pacom-tab" role="tab" aria-selected="${L==="rules"}" data-scene-tab="rules">条件联动（${z.length+H.length}）</button>
              </div>
            </div>

            <div class="pacom-header-meta">
              <button type="button" class="pacom-badge ${U.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${U.length>0?`人工覆盖中：${U.length} 台 ${te("chevron-down",12)}`:`全部自动托管 ${te("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${Q?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${J.length}）</button>
              ${L==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${B?"收起表单":"+ 新建场景"}</button>`:L==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
        </header>

        ${O?`
            <div class="lov-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${U.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${te("x",16)}</button>
              </div>
              ${U.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':U.map(o=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${o.name}</div>
                            <div class="pacom-row-sub">${o.reason}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${o.id}" ${h?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${U.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${h?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${Q?`
            <aside class="lov-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${te("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${$==="all"}" data-log-filter="all">全部（${J.length}）</button>
                  <button class="pacom-tab" aria-selected="${$==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${ee.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${ee.map(o=>`
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
          ${C?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${C}</span></div>`:""}
          ${R?`<div class="pacom-alert-banner">${R}</div>`:""}

          ${L==="manual"?`
              ${K?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="lov-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${K.batchId}</span>
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
                            ${K.receipts.map(o=>`
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

              ${B?`
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
                          <span class="lov-setting-title">联动动作列表（${I.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${I.map((o,s)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" data-draft-dev="${s}" aria-label="目标设备">
                                ${i.map(g=>`<option value="${g.id}" ${g.id===o.deviceId?"selected":""}>${g.name}</option>`).join("")}
                              </select>
                              <select class="pacom-select" data-draft-cmd="${s}" aria-label="执行指令">
                                <option value="lighting.dimming" ${o.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${o.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${o.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" data-draft-val="${s}" value="${o.targetValue}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${s}" ${I.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="lov-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit">保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="lov-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${j}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${x.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${x.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="lov-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':x.map(o=>{const s=Tt(o),g=o.actions.slice(0,3).map(P=>{const ne=i.find(de=>de.id===P.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??P.deviceId,W=P.command==="lighting.dimming"?`亮度 ${P.targetValue}%`:P.command==="hvac.setpoint"?`设温 ${P.targetValue}°C`:P.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${ne} → ${W}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${o.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${s.map(P=>`<span class="pacom-badge pacom-badge--accent">${P}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${o.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${o.description}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${g}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${o.lastExecutedAt?o.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${o.id}" ${h?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:L==="schedule_oss"?`
                <div class="lov-kpi-strip lov-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">当前优化启停模式</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${S.title}</div>
                    <span class="lov-kpi-delta">${S.estSaving}</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">明日预测预启动时刻</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${S.predictedStart}</div>
                    <span class="lov-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">本周累计节省运行工时</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${S.savedHours}</div>
                    <span class="lov-kpi-delta">当前人工覆盖挂起：${U.length} 台</span>
                  </div>
                </div>

                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="lov-mode-grid">
                    ${Ee.map(o=>`
                      <button type="button" class="lov-mode-card" aria-pressed="${y===o.id}" data-oss-mode="${o.id}" ${h?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${o.title}</strong>
                          <span class="pacom-badge ${y===o.id?"pacom-badge--online":"pacom-badge--neutral"}">${y===o.id?"当前生效":o.badge}</span>
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
                          ${N.map(o=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${o.name}</span>
                                    ${o.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${o.windowLabel}</div>
                                </td>
                                <td>${qt(o.startHour,o.endHour,o.enabled)}</td>
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
                                      ${h?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(o=>{const s=o==="all"?"全部":Ve[o]??o,g=o==="all"?z.length+H.length:o==="cbm"?H.length:z.filter(P=>P.category===o).length;return`
                            <button type="button" class="lov-count-pill" aria-pressed="${q===o}" data-rule-cat="${o}">
                              <span>${s}</span><span class="lov-count-num">${g}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="lov-settings-card">
                    ${m.map(o=>{const s=V===o.id;return`
                          <div class="lov-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="lov-setting-meta">
                                <span class="lov-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${Ve[o.category]??o.category}</span>
                                  <span>${o.name}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${o.version}</span>
                                </span>
                                <span class="lov-setting-desc">${o.summary} · 范围：${o.scopeLabel} · 回执：${o.receiptSummary??"已同步"}</span>
                              </div>
                              <div class="lov-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${o.id}">${s?"收起逻辑":"查看逻辑"}</button>
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
                                  ${f?"":"disabled"}
                                >
                                  <span class="lov-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${s?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${o.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":o.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${o.scopeLabel} · 当前版本：v${o.version} · 最近同步：${o.receiptSummary??"已同步"}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${D?H.map(o=>{const s=Math.min(100,Math.round(o.runtimeHours/o.thresholdHours*100));return`
                                <div class="lov-setting-row">
                                  <div class="lov-setting-meta" style="gap:6px;">
                                    <span class="lov-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${o.name}</span>
                                      <span class="pacom-badge ${s>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${o.runtimeHours} / ${o.thresholdHours} h（${s}%）</span>
                                    </span>
                                    <div class="lov-progress-track" style="max-width:340px;">
                                      <div class="lov-progress-fill" style="width:${s}%; background:${s>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="lov-setting-desc">绑定设备：${o.equipment} · 上次重置：${o.lastReset}</span>
                                  </div>
                                  <div class="lov-setting-control">
                                    <span class="pacom-row-sub">${o.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="lov-switch" role="switch" aria-checked="${o.enabled}" data-toggle-cbm="${o.id}" aria-label="切换 ${o.name}" ${f?"":"disabled"}>
                                      <span class="lov-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,e.querySelectorAll("[data-scene-tab]").forEach(o=>{o.addEventListener("click",()=>{L=o.dataset.sceneTab??"manual",C="",Y()})}),e.querySelectorAll("[data-toggle-overrides]").forEach(o=>{o.addEventListener("click",()=>{O=!O,Y()})}),e.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{U=[],C="已释放全部人工覆盖设备，自动节能策略已恢复托管。",Y()}),e.querySelectorAll("[data-release-one]").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.releaseOne;U=U.filter(g=>g.id!==s),C="已恢复该设备的自动策略托管。",Y()})}),e.querySelectorAll("[data-toggle-cmdlog]").forEach(o=>{o.addEventListener("click",()=>{Q=!Q,Y()})}),e.querySelectorAll("[data-log-filter]").forEach(o=>{o.addEventListener("click",()=>{$=o.dataset.logFilter??"all",Y()})}),e.querySelector("[data-close-batch]")?.addEventListener("click",()=>{K=null,Y()}),e.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),e.querySelectorAll("[data-oss-mode]").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.ossMode;if(!s)return;y=s;const g=Ee.find(P=>P.id===s);C=`已切换至「${g?.title??s}」模式（明日预测启动 ${g?.predictedStart??""}）。`,Y()})}),e.querySelectorAll("[data-toggle-schedule]").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.toggleSchedule,g=N.find(P=>P.id===s);g&&(g.enabled=!g.enabled,C=`排程「${g.name}」已${g.enabled?"恢复启用":"临时暂停"}。`,Y())})}),e.querySelectorAll("[data-rule-cat]").forEach(o=>{o.addEventListener("click",()=>{q=o.dataset.ruleCat??"all",Y()})}),e.querySelectorAll("[data-expand-rule]").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.expandRule??null;V=V===s?null:s,Y()})}),e.querySelectorAll("[data-toggle-cbm]").forEach(o=>{o.addEventListener("click",()=>{const s=H.find(g=>g.id===o.dataset.toggleCbm);s&&(s.enabled=!s.enabled,C=`工时维保规则「${s.name}」已${s.enabled?"启用":"停用"}。`,Y())})}),e.querySelectorAll("[data-toggle-strategy-rule]").forEach(o=>{o.addEventListener("click",async()=>{R="";try{await t.toggleRuntimeRule(o.dataset.toggleStrategyRule,o.dataset.ruleNext==="true",Number(o.dataset.ruleVer)),n=await t.getRuntimeSettings(r.projectId),C="条件联动规则状态与版本回执已更新。",Y()}catch(s){R=s instanceof Error?s.message:String(s),Y()}})}),e.querySelectorAll("[data-toggle-create]").forEach(o=>{o.addEventListener("click",()=>{B=!B,Y()})}),e.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{I.push({deviceId:i[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),Y()}),e.querySelectorAll("[data-del-draft-action]").forEach(o=>{o.addEventListener("click",()=>{const s=Number(o.dataset.delDraftAction);I.length>1&&(I.splice(s,1),Y())})}),e.querySelectorAll("[data-draft-dev]").forEach(o=>{o.addEventListener("change",()=>{const s=I[Number(o.dataset.draftDev)];s&&(s.deviceId=o.value)})}),e.querySelectorAll("[data-draft-cmd]").forEach(o=>{o.addEventListener("change",()=>{const s=I[Number(o.dataset.draftCmd)];s&&(s.command=o.value)})}),e.querySelectorAll("[data-draft-val]").forEach(o=>{o.addEventListener("change",()=>{const s=I[Number(o.dataset.draftVal)];s&&(s.targetValue=o.value)})}),e.querySelector("[data-scene-search]")?.addEventListener("input",o=>{const s=o.currentTarget,g=s.selectionStart??s.value.length;j=s.value,Y();const P=e.querySelector("[data-scene-search]");P&&(P.focus(),P.setSelectionRange(g,g))}),e.querySelectorAll("[data-exec-scene]").forEach(o=>{o.addEventListener("click",async()=>{R="";const s=a.find(g=>g.id===o.dataset.execScene);try{K=await t.executeScene(o.dataset.execScene),a=await t.listScenes(r.floorId),J.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:s?.name??"E7F 场景",action:`${K.receipts.length} 台设备联动下发`,status:"verified"}),Y()}catch(g){R=g instanceof Error?g.message:String(g),Y()}})}),e.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async o=>{o.preventDefault();const s=new FormData(o.currentTarget);try{await t.createScene({projectId:r.projectId,floorId:r.floorId,name:String(s.get("name")??""),description:String(s.get("description")??""),actions:I.map(g=>({deviceId:g.deviceId,command:g.command,targetValue:g.targetValue==="true"?!0:g.targetValue==="false"?!1:Number(g.targetValue)||50}))}),a=await t.listScenes(r.floorId),B=!1,C=`快捷场景已保存（共绑定 ${I.length} 条联动动作）。`,Y()}catch(g){R=g instanceof Error?g.message:String(g),Y()}})}Y(),window.addEventListener("hashchange",()=>se(),{once:!0})}function qe(e,t){return e.length===0?'<div class="lov-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':e.map(l=>`
      <div class="lov-setting-row">
        <div class="lov-setting-meta">
          <span class="lov-setting-title">
            <span>${l.name}</span>
            <span class="pacom-badge pacom-badge--neutral">v${l.version}</span>
            <span class="pacom-badge pacom-badge--accent">${l.scopeLabel}</span>
          </span>
          <span class="lov-setting-desc">${l.summary} · 回执：${l.receiptSummary??"已同步"}</span>
        </div>
        <div class="lov-setting-control">
          <span class="pacom-row-sub">${l.enabled?"已启用":"已停用"}</span>
          <button
            type="button"
            class="lov-switch"
            role="switch"
            aria-checked="${l.enabled?"true":"false"}"
            aria-label="切换 ${l.name}"
            data-toggle-rule="${l.id}"
            data-rule-ver="${l.version}"
            data-rule-next="${!l.enabled}"
            ${t?"":"disabled"}
          >
            <span class="lov-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function Dt(e,t,l){let a="calendar",n=await t.getRuntimeSettings(r.projectId),i=n.calendar.workdayStart,L=n.calendar.workdayEnd,y=n.calendar.nightGuardStart,q=n.calendar.nightGuardEnd,K=!0,j=[];const B=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let O="flat";const Q={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},$={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},V={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},C={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},R=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let U="",J="";function H(){const I=l.scope.canEditDeployment,N=n.rules.filter(c=>c.category==="weather_area"),se=n.rules.filter(c=>c.category==="metering_carbon"),Y=n.rules.filter(c=>c.category==="templates");e.innerHTML=`
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
              <span class="pacom-badge ${I?"pacom-badge--online":"pacom-badge--warning"}">
                ${I?"可修改并下发配置":"当前角色只读"}
              </span>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:8px 6px 32px;">
          <div style="width:100%; max-width:920px; margin:0 auto; display:flex; flex-direction:column; gap:20px;">
            ${U?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${U}</span></div>`:""}
            ${J?`<div class="pacom-alert-banner">${J}</div>`:""}

            ${a==="calendar"?`
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">工作时间与夜间值守基准</h2>
                    <span class="pacom-badge pacom-badge--neutral">版本 v${n.calendar.version}</span>
                  </div>
                  <div class="lov-settings-card">
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">工作日上班 / 下班时间</span>
                        <span class="lov-setting-desc">驱动「智能策略 → 排程与节能」早间预冷及公区照明启停；晚于 21:30 将自动提示交叠冲突</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:116px;" type="time" data-cal-start value="${i}" aria-label="工作日上班时间" ${I?"":"disabled"} />
                        <span class="pacom-row-sub">至</span>
                        <input class="pacom-input" style="width:116px;" type="time" data-cal-end value="${L}" aria-label="工作日下班时间" ${I?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">夜间值守巡检窗口</span>
                        <span class="lov-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:116px;" type="time" data-night-start value="${y}" aria-label="夜间值守开始" ${I?"":"disabled"} />
                        <span class="pacom-row-sub">至次日</span>
                        <input class="pacom-input" style="width:116px;" type="time" data-night-end value="${q}" aria-label="夜间值守结束" ${I?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">自动跳过中国法定节假日</span>
                        <span class="lov-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                      </div>
                      <div class="lov-setting-control">
                        <span class="pacom-row-sub">${K?"已开启":"已关闭"}</span>
                        <button type="button" class="lov-switch" role="switch" aria-checked="${K}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${I?"":"disabled"}>
                          <span class="lov-switch-thumb"></span>
                        </button>
                      </div>
                    </div>
                    <div class="lov-setting-row" style="justify-content:flex-end;">
                      <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                      <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${I?"":"disabled"}>保存并校验版本</button>
                    </div>
                  </div>
                </section>

                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">特殊例外日期（加班 / 接待覆盖默认日历）</h2>
                    <span class="pacom-row-sub">共 ${B.length} 条</span>
                  </div>
                  <div class="lov-settings-card">
                    ${B.map(c=>`
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title"><span>${c.date}</span><span class="pacom-badge pacom-badge--accent">${c.mode}</span></span>
                            <span class="lov-setting-desc">${c.label}</span>
                          </div>
                          <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${c.id}" ${I?"":"disabled"}>移除</button>
                        </div>`).join("")}
                    <form data-add-sd-form class="lov-setting-row" style="display:grid; grid-template-columns:145px 1fr 148px auto; gap:8px; align-items:center;">
                      <input class="pacom-input" name="date" type="date" required ${I?"":"disabled"} />
                      <input class="pacom-input" name="label" placeholder="说明（如：重要接待日 / 实验加班）" required ${I?"":"disabled"} />
                      <select class="pacom-select" name="mode" ${I?"":"disabled"}>
                        <option value="保持工作日工况">保持工作日工况</option>
                        <option value="全天节能值守">全天节能值守</option>
                      </select>
                      <button class="pacom-btn" type="submit" ${I?"":"disabled"}>+ 添加例外</button>
                    </form>
                  </div>
                </section>

                ${j.length>0?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">受影响的定时与夜间规则预览</h2>
                        <span class="pacom-row-sub">共 ${j.length} 条</span>
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
                              ${j.map(c=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${c.ruleName}</div>
                                      ${c.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${c.conflictWarning}</div>`:""}
                                    </td>
                                    <td>${c.beforeWindow}</td>
                                    <td><strong>${c.afterWindow}</strong></td>
                                    <td>
                                      <span class="pacom-badge ${c.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                        ${c.conflictWarning?"交叠警告":"自动跟随"}
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
                          <select class="pacom-select" data-energy-field="weatherSource" aria-label="室外气象数据源" ${I?"":"disabled"}>
                            <option value="guanzhou_station" ${Q.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                            <option value="campus_sensor" ${Q.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                          </select>
                        </div>
                      </div>
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">E 栋计费与能效面积（m²）</span>
                          <span class="lov-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                        </div>
                        <div class="lov-setting-control">
                          <input class="pacom-input" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${Q.billingArea}" aria-label="计费面积" ${I?"":"disabled"} />
                        </div>
                      </div>
                      ${qe(N,I)}
                    </div>
                  </section>

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">电价与碳排口径</h2>
                      <div class="pacom-tabs">
                        <button class="pacom-tab" aria-selected="${O==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                        <button class="pacom-tab" aria-selected="${O==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                      </div>
                    </div>
                    <div class="lov-settings-card">
                      ${O==="flat"?`
                          <div class="lov-setting-row">
                            <div class="lov-setting-meta">
                              <span class="lov-setting-title">综合电价参考（元 / kWh）</span>
                              <span class="lov-setting-desc">用于数据分析中的月度节能金额估算</span>
                            </div>
                            <div class="lov-setting-control">
                              <input class="pacom-input" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${Q.tariffYuan}" aria-label="综合电价" ${I?"":"disabled"} />
                            </div>
                          </div>`:`
                          <div class="lov-setting-row">
                            <div class="lov-setting-meta">
                              <span class="lov-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                              <span class="lov-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                            </div>
                            <div class="lov-setting-control" style="gap:6px;">
                              <span class="pacom-row-sub">峰</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${Q.tariffPeak}" ${I?"":"disabled"} />
                              <span class="pacom-row-sub">平</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${Q.tariffFlat}" ${I?"":"disabled"} />
                              <span class="pacom-row-sub">谷</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${Q.tariffValley}" ${I?"":"disabled"} />
                            </div>
                          </div>`}
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">区域电网碳排放因子</span>
                          <span class="lov-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                        </div>
                        <div class="lov-setting-control">
                          <select class="pacom-select" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${I?"":"disabled"}>
                            <option value="0.5271" ${Q.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                            <option value="0.5703" ${Q.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                          </select>
                        </div>
                      </div>
                      ${qe(se,I)}
                      <div class="lov-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${I?"":"disabled"}>保存口径参数</button>
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
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="minTemp" value="${$.minTemp}" aria-label="最低设定温度" ${I?"":"disabled"} />
                            <span class="pacom-row-sub">至</span>
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="maxTemp" value="${$.maxTemp}" aria-label="最高设定温度" ${I?"":"disabled"} />
                            <span class="pacom-row-sub">°C</span>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">人工覆盖自动释放时长</span>
                            <span class="lov-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                          </div>
                          <div class="lov-setting-control">
                            <select class="pacom-select" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${I?"":"disabled"}>
                              <option value="2h" ${$.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                              <option value="4h" ${$.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                              <option value="eod" ${$.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                              <option value="permanent" ${$.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                            </select>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">控制指令回读超时阈值（秒）</span>
                            <span class="lov-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                          </div>
                          <div class="lov-setting-control">
                            <input class="pacom-input" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${$.readbackTimeoutSec}" aria-label="回读超时阈值" ${I?"":"disabled"} />
                            <span class="pacom-row-sub">秒</span>
                          </div>
                        </div>
                        <div class="lov-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${I?"":"disabled"}>保存安全边界</button>
                        </div>
                      </div>
                    </section>

                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">标准设备参数模板</h2>
                        <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                      </div>
                      <div class="lov-settings-card">
                        ${qe(Y,I)}
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
                            <input class="pacom-input" style="width:72px;" type="number" data-auto-wo="delayMin" value="${V.delayMin}" ${I?"":"disabled"} />
                            <span class="pacom-row-sub">分钟</span>
                            <button type="button" class="lov-switch" role="switch" aria-checked="${V.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${I?"":"disabled"}>
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
                            <select class="pacom-select" data-auto-wo="defaultGroup" aria-label="默认处理组" ${I?"":"disabled"}>
                              <option value="暖通运维组" ${V.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                              <option value="强电照明组" ${V.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                              <option value="园区物业值班组" ${V.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                            </select>
                            <span class="pacom-row-sub">防重</span>
                            <button type="button" class="lov-switch" role="switch" aria-checked="${V.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${I?"":"disabled"}>
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
                            <input class="pacom-input" style="width:116px;" type="time" data-digest-time value="${C.dailyDigestTime}" aria-label="每日简报发送时间" />
                            <button type="button" class="lov-switch" role="switch" aria-checked="${C.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报">
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
                            <button type="button" class="lov-switch" role="switch" aria-checked="${C.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰">
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
                              ${R.map(c=>`
                                  <tr>
                                    <td><strong>${c.groupName}</strong></td>
                                    <td>${c.scope}</td>
                                    <td><span class="pacom-badge pacom-badge--neutral">${c.severity}</span></td>
                                    <td><span class="pacom-badge pacom-badge--accent">${c.channels}</span></td>
                                    <td style="text-align:right;">
                                      <button type="button" class="lov-switch" role="switch" aria-checked="${c.enabled}" data-toggle-nr="${c.id}" aria-label="切换 ${c.groupName} 通知规则">
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
    `,e.querySelectorAll("[data-stab]").forEach(c=>{c.addEventListener("click",()=>{a=c.dataset.stab??"calendar",U="",J="",H()})}),e.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{K=!K,U=`法定节假日自动跳过已${K?"开启":"关闭"}。`,H()}),e.querySelector("[data-night-start]")?.addEventListener("change",c=>{y=c.currentTarget.value}),e.querySelector("[data-night-end]")?.addEventListener("change",c=>{q=c.currentTarget.value}),e.querySelector("[data-add-sd-form]")?.addEventListener("submit",c=>{c.preventDefault();const x=new FormData(c.currentTarget);B.push({id:`sd-${Date.now()}`,date:String(x.get("date")??""),label:String(x.get("label")??""),mode:String(x.get("mode")??"保持工作日工况")}),U="已添加特殊例外日期，当日自动覆盖默认节假日排程。",H()}),e.querySelectorAll("[data-del-sd]").forEach(c=>{c.addEventListener("click",()=>{const x=B.findIndex(z=>z.id===c.dataset.delSd);x>=0&&B.splice(x,1),H()})}),e.querySelectorAll("[data-tariff-mode]").forEach(c=>{c.addEventListener("click",()=>{O=c.dataset.tariffMode??"flat",H()})}),e.querySelectorAll("[data-energy-field]").forEach(c=>{c.addEventListener("change",()=>{const x=c.dataset.energyField;x&&(Q[x]=c.value)})}),e.querySelector("[data-save-energy]")?.addEventListener("click",()=>{U=O==="flat"?`能碳与气象口径已保存（面积 ${Q.billingArea} m² · 综合电价 ¥${Q.tariffYuan}/kWh · 因子 ${Q.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${Q.tariffPeak} / 平 ¥${Q.tariffFlat} / 谷 ¥${Q.tariffValley}）。`,H()}),e.querySelectorAll("[data-guard-field]").forEach(c=>{c.addEventListener("change",()=>{const x=c.dataset.guardField;x&&($[x]=c.value)})}),e.querySelector("[data-save-guard]")?.addEventListener("click",()=>{U=`控制安全边界已保存（温区 ${$.minTemp}–${$.maxTemp}°C · 超时 ${$.readbackTimeoutSec}s）。`,H()}),e.querySelectorAll("[data-auto-wo]").forEach(c=>{c.addEventListener("change",()=>{const x=c.dataset.autoWo;x&&(V[x]=c.value),U="自动转工单配置已更新。",H()})}),e.querySelectorAll("[data-toggle-autowo]").forEach(c=>{c.addEventListener("click",()=>{const x=c.dataset.toggleAutowo;x&&(V[x]=!V[x],U="自动转工单保护策略已更新。",H())})}),e.querySelector("[data-digest-time]")?.addEventListener("change",c=>{C.dailyDigestTime=c.currentTarget.value,U=`每日晨间简报发送时刻已更新为 ${C.dailyDigestTime}。`,H()}),e.querySelectorAll("[data-notify-key]").forEach(c=>{c.addEventListener("click",()=>{const x=c.dataset.notifyKey;x&&(C[x]=!C[x],U="通知策略偏好已更新。",H())})}),e.querySelectorAll("[data-toggle-nr]").forEach(c=>{c.addEventListener("click",()=>{const x=R.find(z=>z.id===c.dataset.toggleNr);x&&(x.enabled=!x.enabled,U=`工作组「${x.groupName}」的通知分流规则已${x.enabled?"启用":"停用"}。`,H())})}),e.querySelector("[data-cal-start]")?.addEventListener("change",c=>{i=c.currentTarget.value}),e.querySelector("[data-cal-end]")?.addEventListener("change",c=>{L=c.currentTarget.value}),e.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{J="",j=await t.previewCalendarImpact(r.projectId,i,L),H()}),e.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{J="";try{const c=await t.saveWorkCalendar(r.projectId,i,L,n.calendar.version);n={...n,calendar:{...c,nightGuardStart:y,nightGuardEnd:q}},U=`运行日历已保存至 v${c.version}（工作日 ${c.workdayStart}–${c.workdayEnd} · 夜间值守 ${y}–${q}）`,j=[],H()}catch(c){J=c instanceof Error?c.message:String(c),H()}}),e.querySelectorAll("[data-toggle-rule]").forEach(c=>{c.addEventListener("click",async()=>{J="";try{await t.toggleRuntimeRule(c.dataset.toggleRule,c.dataset.ruleNext==="true",Number(c.dataset.ruleVer)),n=await t.getRuntimeSettings(r.projectId),U="策略状态与版本回执已更新。",H()}catch(x){J=x instanceof Error?x.message:String(x),H()}})})}H()}const Ue="pacom.web.sidebar.collapsed",Ot=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,ze=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"运行设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],Oe={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"运行设置",deployment:"系统部署",account:"机构与账户"},We=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function De(){const e=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return e in Oe?e:"home"}function ue(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function Rt(e,t,l,a){e.classList.remove("bare-login");let n=l,i=De(),L=localStorage.getItem(Ue)==="1",y=!1,q=!1,K="",j=!1,B=0,O={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};const Q=t.mode==="demo"&&typeof t.switchDemoRole=="function";async function $(){try{const[S,h,f,F,o]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(r.floorId).catch(()=>[]),t.listAlarms(r.floorId).catch(()=>[]),t.listWorkOrders(r.floorId).catch(()=>[]),t.listScenes(r.floorId).catch(()=>[])]);O={devices:h,zones:S.zones,alarms:f,workOrders:F,scenes:o},B=f.filter(s=>s.status==="active").length,N()}catch{}}function V(){return ze.map(S=>`
        ${S.id==="settings"?'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${S.id}" aria-current="${i===S.id?"page":"false"}" title="${S.label}">
          ${te(S.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${S.label}</span>
          ${S.id==="alarms"&&B>0?`<span class="pacom-nav-count" title="待处理告警 ${B} 条">${B}</span>`:""}
        </button>`).join("")}function C(){const S=K.trim().toLowerCase(),h=S?ze.filter(W=>W.label.toLowerCase().includes(S)).slice(0,4):ze,f=S?O.devices.filter(W=>`${W.name} ${W.id} ${W.category}`.toLowerCase().includes(S)).slice(0,5):O.devices.slice(0,3),F=S?O.zones.filter(W=>W.name.toLowerCase().includes(S)).slice(0,3):[],o=S?O.alarms.filter(W=>`${W.title} ${W.message} ${W.id}`.toLowerCase().includes(S)).slice(0,4):O.alarms.filter(W=>W.status==="active").slice(0,2),s=S?O.workOrders.filter(W=>`${W.title} ${W.id}`.toLowerCase().includes(S)).slice(0,3):[],g=S?O.scenes.filter(W=>`${W.name} ${W.description}`.toLowerCase().includes(S)).slice(0,3):[],P=S?We.filter(W=>`${W.title} ${W.category}`.toLowerCase().includes(S)).slice(0,4):We.slice(0,2),ne=[];return f.length&&ne.push(`<div class="pacom-search-group">${S?"设备（空间总览）":"常用设备直达"}</div>`+f.map(W=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(W.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${ue(W.name)}</span><span class="pacom-badge ${W.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${W.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),F.length&&ne.push('<div class="pacom-search-group">功能区</div>'+F.map(W=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(W.id)}"><span>${ue(W.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),o.length&&ne.push(`<div class="pacom-search-group">${S?"告警":"待处理告警"}</div>`+o.map(W=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(W.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${ue(W.title)}</span><span class="pacom-badge pacom-badge--warning">${W.status==="active"?"待处理":"已确认"}</span></button>`).join("")),s.length&&ne.push('<div class="pacom-search-group">运维工单</div>'+s.map(W=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(W.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${ue(W.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),g.length&&ne.push('<div class="pacom-search-group">智能策略</div>'+g.map(W=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${ue(W.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),P.length&&ne.push('<div class="pacom-search-group">图纸与工程文档</div>'+P.map(W=>`<button type="button" class="pacom-search-hit" data-search-hash="${W.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${ue(W.title)}</span><span class="pacom-badge pacom-badge--neutral">${ue(W.category)}</span></button>`).join("")),h.length&&ne.push('<div class="pacom-search-group">工作区</div>'+h.map(W=>`<button type="button" class="pacom-search-hit" data-search-hash="#${W.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${te(W.icon,14)}${ue(W.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),ne.length?ne.join(""):`<div class="pacom-nav-empty">未找到与「${ue(K)}」匹配的设备、区域、告警、工单或图纸</div>`}function R(S){S.querySelectorAll("[data-search-hash]").forEach(h=>{h.addEventListener("click",()=>{const f=h.dataset.searchHash||"#home";j=!1,K="",U(),y=!1,window.location.hash===f?(i=De(),x(!0)):window.location.hash=f})})}function U(){if(e.querySelector('[data-role="cmd-scrim"]')?.remove(),!j)return;const S=document.createElement("div");S.className="pacom-cmd-scrim",S.dataset.role="cmd-scrim",S.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${te("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${ue(K)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${C()}
        </div>
      </div>
    `,e.appendChild(S),S.addEventListener("click",F=>{F.target===S&&(j=!1,U())});const h=S.querySelector('[data-role="cmd-input"]'),f=S.querySelector('[data-role="cmd-body"]');f&&R(f),h?.focus(),h?.addEventListener("input",F=>{K=F.currentTarget.value,f&&(f.innerHTML=C(),R(f))})}function J(){if(!q)return"";const S=n.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${L?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${ue(n.roleLabel)}${Q?" · 演示":""}</small>
          </span>
          ${te("check",16,"pacom-pop-check")}
        </button>

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${te("settings",16)}</span>
          <span class="pacom-pop-text">机构设置</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${ue(S)}</span>
          <span class="pacom-pop-text">
            <b>${ue(n.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${Q?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">演示角色切换（RBAC 权限预览）</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(me).map(h=>{const f=me[h],F=h===n.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${F}" data-pop-role="${h}">
                      <span class="pacom-pop-text">
                        <b>${ue(f.roleLabel)}</b>
                        <small>${ue(f.displayName)}</small>
                      </span>
                      ${F?te("check",16,"pacom-pop-check"):""}
                    </button>`}).join("")}
            </div>`:""}

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${te("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function H(S){switch(document.title=`${Oe[i]} · PACOM Station`,i){case"home":await Ft(S,t,n);return;case"analysis":await wt(S,t);return;case"alarms":await rt(S,t,n);return;case"scenes":await zt(S,t,n);return;case"settings":await Dt(S,t,n);return;case"deployment":await At(S,t,n);return;case"account":await ot(S,t,n,h=>{n=h,x(!0)},I);return}}async function I(){q=!1,y=!1,j=!1,ee();try{await t.logout()}finally{window.location.hash="#login",a()}}function N(){const S=e.querySelector('[data-role="nav-list"]');S&&(S.innerHTML=V(),Y())}function se(){e.querySelector('[data-role="org-popover"]')?.remove();const S=e.querySelector('[data-role="org-menu-btn"]');if(S&&S.setAttribute("aria-expanded",String(q)),!q)return;const h=document.createElement("div");h.innerHTML=J().trim();const f=h.firstElementChild;f&&(e.appendChild(f),c())}function Y(){e.querySelectorAll("[data-route]").forEach(S=>{S.addEventListener("click",()=>{const h=S.dataset.route;h===i&&!y||(i=h,y=!1,q=!1,window.location.hash=`#${i}`,x(!0))})})}function c(){e.querySelectorAll('[data-pop-act="go-account"]').forEach(S=>{S.addEventListener("click",()=>{q=!1,y=!1,i="account",window.location.hash="#account",x(!0)})}),e.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{I()}),e.querySelectorAll("[data-pop-role]").forEach(S=>{S.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const h=S.dataset.popRole;q=!1,y=!1,n=await t.switchDemoRole(h),await x(!0)})})}async function x(S){const h=e.querySelector('[data-role="main-stage"]');if(!S&&h){const F=e.querySelector(".pacom-nav-rail");F&&(F.classList.toggle("is-collapsed",L),F.classList.toggle("is-mobile-open",y));const o=e.querySelector('[data-role="mobile-scrim"]');o&&o.classList.toggle("is-open",y),se();return}e.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${te("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${Oe[i]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${ue(n.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${y?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${L?"is-collapsed":""} ${y?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${Ot}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${L?"展开侧栏":"收起侧栏"}" aria-label="${L?"展开侧栏":"收起侧栏"}">
              ${te("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${te("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${V()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${i==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${q}" title="广州国家实验室 · ${ue(n.displayName)}">
              <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>
              <span class="pacom-org-name">广州国家实验室</span>
              ${te("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,e.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{L=!L,q=!1,localStorage.setItem(Ue,L?"1":"0");const F=e.querySelector(".pacom-nav-rail"),o=e.querySelector('[data-role="toggle-sidebar"]');F&&F.classList.toggle("is-collapsed",L),o&&(o.title=L?"展开侧栏":"收起侧栏",o.setAttribute("aria-label",o.title),o.innerHTML=te("panel-left",16)),se()}),e.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{q=!1,se(),j=!0,U()}),e.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{y=!y,x(!1)}),e.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{y=!1,q=!1,x(!1)}),e.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",F=>{F.stopPropagation(),q=!q,se()}),Y(),se(),U();const f=e.querySelector('[data-role="main-stage"]');f&&await H(f)}const z=S=>{const h=S.target;q&&!h?.closest('[data-role="org-popover"]')&&!h?.closest('[data-role="org-menu-btn"]')&&(q=!1,se())},m=S=>{if((S.metaKey||S.ctrlKey)&&S.key.toLowerCase()==="k"){S.preventDefault(),q=!1,se(),j=!j,U();return}S.key==="Escape"&&(j?(j=!1,U()):q?(q=!1,se()):y&&(y=!1,x(!1)))},D=()=>{i=De(),q=!1,y=!1,j=!1,x(!0),$()};function ee(){document.removeEventListener("click",z),document.removeEventListener("keydown",m),window.removeEventListener("hashchange",D)}document.addEventListener("click",z),document.addEventListener("keydown",m),window.addEventListener("hashchange",D),await x(!0),$()}const Nt=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Pt='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',Bt='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',xe=te("x",16),He={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},_t={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function Vt(e){const t=e.replace(/\D/g,"");return t.length===11?`${t.slice(0,3)} •••• ${t.slice(7)}`:e}function ve(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Ze(e,t,l){e.classList.add("bare-login"),document.title="登录 · PACOM Station";let a=!1,n=!1,i="",L="",y="",q="",K=!1,j={},B="",O=!1,Q="",$=0,V=null,C=null,R="privacy",U="",J="",H="";const I=t.mode==="demo"&&typeof t.switchDemoRole=="function";function N(){V!==null&&(window.clearInterval(V),V=null),e.classList.remove("bare-login")}function se(){$=60,V!==null&&window.clearInterval(V),V=window.setInterval(()=>{$-=1,$<=0&&($=0,V!==null&&(window.clearInterval(V),V=null));const z=e.querySelector('[data-act="send-sms"]');z&&(z.disabled=$>0,z.textContent=$>0?`${$} 秒后重发`:Q?"重新获取":"获取验证码")},1e3)}function Y(){if(!C)return"";if(C==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${xe}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${ve(J)}" />
                  </div>
                </div>
                ${H?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${ve(H)}</p>`:""}
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary">发送验证码</button>
            </div>
          </section>
        </div>
      `;if(C==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${xe}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                ${I?"当前为离线演示环境，您可直接通过登录页的「演示角色快速体验」切换 5 类内置角色进入 E7F 工作区。":"正式接入账户服务后，将在此开放自助注册与机构邀请码加入流程。"}
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
              ${I?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">选择演示角色</button>':""}
            </div>
          </section>
        </div>
      `;if(C==="legal"){const z=He[R],m=["privacy","terms","service"].map(D=>`<button type="button" role="tab" aria-selected="${R===D}" class="au-legal-tab ${R===D?"is-active":""}" data-act="switch-legal" data-tab="${D}">${He[D].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${xe}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${m}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${z.items.map(D=>`<li>${ve(D)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return C==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${xe}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${U||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:C==="demoRoles"&&I?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择演示角色</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${xe}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(me).map(z=>{const m=me[z];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${z}">
                        <div>
                          <b>${ve(m.roleLabel)} · ${ve(m.displayName)}</b>
                          <small>${ve(_t[z])}</small>
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
      `:""}function c(){const z=a?`
        <div class="au-field ${j.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ve(y)}" aria-invalid="${j.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${$>0?"disabled":""}>
              ${$>0?`${$} 秒后重发`:Q?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${ve(j.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${Q?`验证码已发送至 ${ve(Vt(Q))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${j.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ve(i)}" aria-invalid="${j.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${ve(j.id??"")}</p>
        </div>
      `,m=a?`
        <div class="au-field ${j.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ve(q)}" aria-invalid="${j.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${ve(j.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${j.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${n?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ve(L)}" aria-invalid="${j.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${n?"隐藏密码":"显示密码"}">
              ${n?Bt:Pt}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${ve(j.pwd??"")}</p>
        </div>
      `;e.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${Nt}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${O?"disabled":""}>
                  ${z}
                  ${m}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${B?"":"hidden"}>${ve(B)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${K?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${O?"disabled":""}>
                    ${O?"正在登录…":"登录"}
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
                ${I?`<div class="au-demo-bar">
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
      ${Y()}
    `,x()}function x(){const z=e.querySelector("#au-id"),m=e.querySelector("#au-pwd"),D=e.querySelector("#au-sphone"),ee=e.querySelector("#au-scode"),S=e.querySelector('input[name="keep"]');z?.addEventListener("input",()=>{if(i=z.value,j.id||B){delete j.id,B="",z.closest(".au-field")?.classList.remove("bad");const h=e.querySelector("#au-id-err");h&&(h.textContent="");const f=e.querySelector("#au-login-ferr");f&&(f.hidden=!0)}}),m?.addEventListener("input",()=>{if(L=m.value,j.pwd||B){delete j.pwd,B="",m.closest(".au-field")?.classList.remove("bad");const h=e.querySelector("#au-pwd-err");h&&(h.textContent="");const f=e.querySelector("#au-login-ferr");f&&(f.hidden=!0)}}),D?.addEventListener("input",()=>{if(y=D.value,j.sphone||B){delete j.sphone,B="",D.closest(".au-field")?.classList.remove("bad");const h=e.querySelector("#au-sphone-err");h&&(h.textContent="");const f=e.querySelector("#au-login-ferr");f&&(f.hidden=!0)}}),ee?.addEventListener("input",()=>{if(q=ee.value.replace(/\D/g,"").slice(0,6),ee.value=q,j.scode||B){delete j.scode,B="",ee.closest(".au-field")?.classList.remove("bad");const h=e.querySelector("#au-scode-err");h&&(h.textContent="");const f=e.querySelector("#au-login-ferr");f&&(f.hidden=!0)}}),S?.addEventListener("change",()=>{K=S.checked}),e.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{n=!n,c(),e.querySelector("#au-pwd")?.focus()}),e.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{a=!a,j={},B="",c(),e.querySelector(a?"#au-sphone":"#au-id")?.focus()}),e.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const h=y.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(h)){j={sphone:"请输入有效的手机号码"},c(),e.querySelector("#au-sphone")?.focus();return}j={},Q=h,se(),c(),e.querySelector("#au-scode")?.focus()}),e.querySelector('form[data-form="login"]')?.addEventListener("submit",async h=>{if(h.preventDefault(),!O){if(j={},B="",a?(y.trim()||(j.sphone="请输入手机号码"),/^\d{6}$/.test(q.trim())||(j.scode="请输入 6 位验证码")):(i.trim()||(j.id="请输入电子邮箱或手机号码"),L||(j.pwd="请输入密码")),Object.keys(j).length>0){c();const f=Object.keys(j)[0];e.querySelector(`#au-${f}`)?.focus();return}O=!0,c();try{const f=await t.login({account:(a?y:i).trim(),password:a?q.trim():L});N(),l(f)}catch(f){O=!1,B=f instanceof Error?f.message:"账户或密码不正确",c()}}}),e.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{J=i.trim(),H="",C="reset",c(),e.querySelector("#au-rs-id")?.focus()}),e.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{C="register",c()}),e.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{C="legal",c()}),e.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{U="",C="contact",c()}),e.querySelectorAll('[data-act="open-demo-roles"]').forEach(h=>{h.addEventListener("click",()=>{C="demoRoles",c()})}),e.querySelectorAll('[data-act="close-modal"]').forEach(h=>{h.addEventListener("click",()=>{C=null,c()})}),e.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",h=>{h.target===h.currentTarget&&(C=null,c())}),e.querySelectorAll('[data-act="switch-legal"]').forEach(h=>{h.addEventListener("click",()=>{const f=h.dataset.tab;f&&(R=f,c())})}),e.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),U="已复制"}catch{U="support@pacom.cn"}c()}),e.querySelector("#au-reset-form")?.addEventListener("submit",h=>{h.preventDefault(),J=e.querySelector("#au-rs-id")?.value.trim()??"",J?I?H="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":H="如账户存在，验证码已发送。":H="请输入电子邮箱或手机号码",c()}),e.querySelectorAll('[data-act="pick-demo-role"]').forEach(h=>{h.addEventListener("click",async()=>{const f=h.dataset.roleId;if(!f||!t.switchDemoRole)return;const F=await t.switchDemoRole(f);N(),l(F)})})}c()}async function Ut(){const e=document.getElementById("app");if(e)try{const t=at(),l=await t.getSession(),a=async n=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await Rt(e,t,n,()=>{Ze(e,t,i=>{a(i)})})};if(!l||window.location.hash==="#login"){Ze(e,t,n=>{a(n)});return}await a(l)}catch(t){e.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(t)}</div></div>`}}Ut();
//# sourceMappingURL=index-CYEqDnMV.js.map
