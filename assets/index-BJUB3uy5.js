(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const I of i.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&a(I)}).observe(document,{childList:!0,subtree:!0});function l(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=l(n);fetch(n.href,i)}})();const d={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},me={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[d.projectId,d.project1Id],allowedBuildingIds:[d.buildingId,d.buildingFId],allowedFloorIds:[d.lockedFloor8Id,d.floorId,d.lockedFloor6Id],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[d.projectId],allowedBuildingIds:[d.buildingId,d.buildingFId],allowedFloorIds:[d.lockedFloor8Id,d.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[d.projectId],allowedBuildingIds:[d.buildingId],allowedFloorIds:[d.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[d.projectId],allowedBuildingIds:[d.buildingId],allowedFloorIds:[d.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[d.projectId],allowedBuildingIds:[d.buildingId],allowedFloorIds:[d.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},Ee="pacom.web.demo.role";class Ge{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){const t=sessionStorage.getItem(Ee);t&&me[t]&&(this.activeSession=structuredClone(me[t]));const l=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:d.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:l,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:l,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:d.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:l,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:l,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:d.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:l,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:l,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:d.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:l,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:l,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:l,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:l,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:d.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:l,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:d.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:l,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:l,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:l,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:l},{id:"conn-e7f-dali",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:l},{id:"conn-e7f-modbus",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:d.projectId,floorId:d.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:d.projectId,floorId:d.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:d.projectId,floorId:d.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:d.projectId,floorId:d.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:d.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:d.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:l,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:d.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:l,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:d.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:l,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:d.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:l,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:d.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:l,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:d.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:l,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(me).map((a,n)=>({userId:a.userId,displayName:a.displayName,email:`${a.role.replaceAll("_",".")}@pacom.local`,role:a.role,roleLabel:a.roleLabel,scopeSummary:a.scope.allowedZoneIds?.length?`E栋 7F（${a.scope.allowedZoneIds.length} 个我的区域）`:`${a.scope.allowedProjectIds.length} 项目 / ${a.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:n===0?l:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(t,l,a,n,i){this.traces.unshift({at:new Date().toISOString(),channel:t,operation:l,endpoint:a,request:i,response:n}),this.traces.length>40&&this.traces.pop()}pushAudit(t,l,a,n){const i=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:i?.displayName??"anonymous",role:i?.role??"member",action:t,target:l,result:a,detail:n})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(t){if(!t.account.trim()||!t.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const l=t.account.includes("admin")?"org_admin":t.account.includes("eng")?"commissioning_engineer":t.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(me[l]),sessionStorage.setItem(Ee,l),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:t.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(Ee),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(t){return this.activeSession=structuredClone(me[t]),sessionStorage.setItem(Ee,t),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${t}`,this.activeSession),structuredClone(this.activeSession)}async getSpatialTree(){const t=this.requireSession(),l=[{id:d.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"},{id:d.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"}],a=[{id:d.buildingId,projectId:d.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.png"},{id:d.buildingFId,projectId:d.projectId,name:"F栋",aboveFloors:12,belowFloors:2,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.png"}],n={projects:l.filter(i=>t.scope.allowedProjectIds.includes(i.id)),buildings:a.filter(i=>t.scope.allowedBuildingIds.includes(i.id)),floors:[{id:d.lockedFloor8Id,buildingId:d.buildingId,kind:"above",level:8,name:"8F",plan:null},{id:d.floorId,buildingId:d.buildingId,kind:"above",level:7,name:"7F",areaSqm:1383.1,plan:{floorId:d.floorId,imageUrl:"./media/7F.webp",planVersion:1,updatedAt:"2026-11-22T00:00:00Z"}},{id:d.lockedFloor6Id,buildingId:d.buildingId,kind:"above",level:6,name:"6F",plan:null}],zones:[{id:"zone-e7f-lab-east",floorId:d.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:d.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:d.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:d.floorId,name:"核心走廊与弱电井",category:"corridor"}]};return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:n.projects.length,buildings:n.buildings.length,floors:n.floors.length}),n}async getFloorDevices(t){const l=this.requireSession();if(!l.scope.allowedFloorIds.includes(t)){const n={code:"FORBIDDEN",status:403,message:`当前角色「${l.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,n),this.pushAudit("floor.read",t,"denied",n.message),new Error(`403 FORBIDDEN: ${n.message}`)}if(t!==d.floorId)return[];let a=structuredClone(this.devices);return l.scope.allowedZoneIds?.length&&(a=a.filter(n=>n.logicalZoneId&&l.scope.allowedZoneIds.includes(n.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,{count:a.length}),a}async dispatchControlBatch(t){const l=this.requireSession();if(!l.scope.canControlDevices||!l.scope.allowedFloorIds.includes(t.floorId))throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权下发控制指令`);const a=`batch-e7f-${Date.now().toString(36)}`,n={batchId:a,floorId:t.floorId,createdBy:l.userId,createdAt:new Date().toISOString(),receipts:t.targets.map(i=>({deviceId:i.deviceId,command:i.command,targetValue:i.targetValue,status:"queued"}))};return this.batches.set(a,n),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",n,t),this.pushAudit("control.dispatch",a,"success",`下发 ${t.targets.length} 台设备`),n.receipts.forEach((i,I)=>{const x=this.devices.find(w=>w.id===i.deviceId);setTimeout(()=>{i.status="dispatched",i.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:a,deviceId:i.deviceId,status:"dispatched",at:i.dispatchedAt})},280+I*120),setTimeout(()=>{const w=new Date().toISOString();!x||x.connectivity==="offline"?(i.status="timeout",i.errorCode="GATEWAY_READBACK_TIMEOUT",i.errorMessage="设备离线，网关未收到回读确认",i.verifiedAt=w):(i.status="verified_success",i.observedValue=i.targetValue,i.verifiedAt=w,this.applyObservedTelemetry(x,i.command,i.targetValue,w)),this.emit({type:"control.receipt.updated",batchId:a,deviceId:i.deviceId,status:i.status,observedValue:i.observedValue,at:w})},900+I*220)}),structuredClone(n)}applyObservedTelemetry(t,l,a,n){l==="lighting.dimming"&&t.telemetry.dimming?(t.telemetry.dimming={...t.telemetry.dimming,value:a,collectedAt:n,stale:!1},t.telemetry.power&&(t.telemetry.power={...t.telemetry.power,value:Number(a)>0,collectedAt:n,stale:!1})):(l==="lighting.power"||l==="hvac.power")&&t.telemetry.power?t.telemetry.power={...t.telemetry.power,value:a,collectedAt:n,stale:!1}:l==="hvac.setpoint"&&t.telemetry.setpoint&&(t.telemetry.setpoint={...t.telemetry.setpoint,value:a,collectedAt:n,stale:!1}),this.emit({type:"telemetry.updated",floorId:t.floorId,deviceId:t.id,collectedAt:n,values:{[l]:a}})}async getControlBatch(t){this.requireSession();const l=this.batches.get(t);if(!l)throw new Error(`404 NOT_FOUND: 批次 ${t} 不存在`);return structuredClone(l)}async listAlarms(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==d.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(t,l){const a=this.requireSession();if(!a.scope.canManageAlarms){const i=`角色「${a.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",t,"denied",i),new Error(`403 FORBIDDEN: ${i}`)}const n=this.alarms.find(i=>i.id===t);if(!n)throw new Error(`404 NOT_FOUND: 告警 ${t} 不存在`);return n.status="acknowledged",n.acknowledgedAt=new Date().toISOString(),n.acknowledgedBy=a.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${t}/acknowledge`,n,{note:l}),this.pushAudit("alarm.acknowledge",t,"success",l),this.emit({type:"alarm.changed",floorId:n.floorId,alarmId:t,status:"acknowledged",at:n.acknowledgedAt}),structuredClone(n)}async listWorkOrders(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==d.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(t){const l=this.requireSession();if(!l.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权创建工单`);const a=new Date().toISOString(),n={id:`wo-e7f-${Date.now().toString(36)}`,projectId:d.projectId,buildingId:d.buildingId,floorId:t.floorId,deviceId:t.deviceId??null,alarmId:t.alarmId??null,title:t.title,description:t.description,status:"open",assigneeId:null,createdAt:a,updatedAt:a};if(this.workOrders.unshift(n),t.alarmId){const i=this.alarms.find(I=>I.id===t.alarmId);i&&(i.workOrderId=n.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",n,t),this.pushAudit("work_order.create",n.id,"success",n.title),structuredClone(n)}async updateWorkOrderStatus(t,l){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权流转工单`);const n=this.workOrders.find(i=>i.id===t);if(!n)throw new Error(`404 NOT_FOUND: 工单 ${t} 不存在`);return n.status=l,n.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${t}`,n,{status:l}),this.pushAudit("work_order.update",t,"success",`状态更新为 ${l}`),structuredClone(n)}async updateDevicePlanPoint(t){const l=this.requireSession();if(!l.scope.canEditDeployment)throw this.pushAudit("device.plan_point",t.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权编辑图纸标点`);const a=this.devices.find(n=>n.id===t.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(a.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${a.version}，请刷新后重试`);return a.planPoint={floorId:t.floorId,planVersion:t.planVersion,x:Number(t.x.toFixed(4)),y:Number(t.y.toFixed(4))},a.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${t.deviceId}/plan-point`,a,t),this.pushAudit("device.plan_point",t.deviceId,"success",`坐标更新 (${a.planPoint.x}, ${a.planPoint.y})`),structuredClone(a)}async updateDeviceHardwareBinding(t){const l=this.requireSession();if(!l.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权修改硬件绑定`);const a=this.devices.find(i=>i.id===t.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(a.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${a.version}）`);const n=new Date().toISOString();return a.physicalInstalled=t.physicalInstalled,a.physicalVerifiedAt=t.physicalInstalled?n:null,a.hardwareBinding={gatewayId:t.gatewayId,protocol:t.protocol,networkAddress:t.networkAddress,portOrChannel:t.portOrChannel,boundAt:n,boundBy:l.displayName},a.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${t.deviceId}/hardware-binding`,a,t),this.pushAudit("device.hardware_binding",t.deviceId,"success",`${t.protocol} ${t.networkAddress}`),structuredClone(a)}async listConnections(t){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(t){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(t,l){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权冻结交付批次`);const n=this.devices.filter(I=>I.physicalInstalled&&I.hardwareBinding).length,i={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:d.projectId,floorId:t,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:n,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:a.displayName,note:l||"例行交付基线冻结"};return this.deliveryBatches.unshift(i),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${t}/deliveries/freeze`,i,{note:l}),this.pushAudit("delivery.freeze",i.id,"success",`${n}/${this.devices.length} 已现场核验`),structuredClone(i)}async getAnalysisReport(t,l,a){this.requireSession();const n=l==="today"?1:l==="7d"?7:30,I={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*n)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*n).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(W=>W.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*n).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*n).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*n).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[t],x=l==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],w={category:t,range:l,scopeId:a,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:I.kpis,unit:I.unit,series:I.base.map((W,L)=>({label:x[L],value:Math.round(W*(t==="energy"||t==="carbon"?n/2+.5:1)),baseline:Math.round(W*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:I.base[3],unit:I.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:I.base[4],unit:I.unit,status:t==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:I.base[1],unit:I.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${t}?range=${l}&scopeId=${a}`,{kpis:w.kpis.length}),w}async listScenes(t){return this.requireSession(),structuredClone(this.scenes)}async createScene(t){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const a={id:`scn-e7f-${Date.now().toString(36)}`,projectId:t.projectId,floorId:t.floorId,name:t.name,description:t.description,enabled:!0,scheduleSummary:"手动触发",actions:t.actions,lastExecutedAt:null};return this.scenes.unshift(a),this.record("REST","createScene","POST /api/v1/scenes",a,t),this.pushAudit("scene.create",a.id,"success",a.name),structuredClone(a)}async executeScene(t){const l=this.scenes.find(n=>n.id===t);if(!l)throw new Error(`404 NOT_FOUND: 场景 ${t} 不存在`);const a=await this.dispatchControlBatch({floorId:l.floorId,idempotencyKey:`scene-${t}-${Date.now()}`,targets:l.actions,reason:`触发场景：${l.name}`});return l.lastExecutedAt=new Date().toISOString(),l.lastBatchId=a.batchId,a}async getRuntimeSettings(t){return this.requireSession(),structuredClone({projectId:d.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(t,l,a){this.requireSession();const n=a>=this.calendar.nightGuardStart?`下班时间 ${a} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,i=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${l} - ${a}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${l} (-30m) ~ ${a} (+30m)`,conflictWarning:n},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:n}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",i,{workdayStart:l,workdayEnd:a}),i}async saveWorkCalendar(t,l,a,n){const i=this.requireSession();if(!i.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权修改运行日历`);if(this.calendar.version!==n)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(l>=a)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:l,workdayEnd:a,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:l,workdayEnd:a,expectedVersion:n}),this.pushAudit("settings.calendar",d.projectId,"success",`${l}-${a}`),structuredClone(this.calendar)}async toggleRuntimeRule(t,l,a){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权启停运行规则`);const i=this.rules.find(I=>I.id===t);if(!i)throw new Error(`404 NOT_FOUND: 规则 ${t} 不存在`);if(i.version!==a)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${i.version}）`);return i.enabled=l,i.version+=1,i.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${t}`,i,{enabled:l,expectedVersion:a}),this.pushAudit("settings.rule_toggle",t,"success",l?"启用":"停用"),structuredClone(i)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(t,l){const a=this.requireSession();if(a.role!=="org_admin"&&a.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const n=me[l],i={userId:`inv-${Date.now().toString(36)}`,displayName:t.split("@")[0]||t,email:t,role:l,roleLabel:n.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(i),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",i,{email:t,role:l}),this.pushAudit("org.invite",t,"success",n.roleLabel),structuredClone(i)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(t,l){return t!==d.floorId?()=>{}:(this.listeners.add(l),()=>{this.listeners.delete(l)})}emit(t){this.record("WS",t.type,`WS /ws/v1/stream?floorId=${d.floorId}`,t),this.listeners.forEach(l=>l(t))}}function Ke(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new Ge}const Ye={"building-2":'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',"settings-2":'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',check:'<path d="M20 6 9 17l-5-5"/>',menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>'};function Xe(e){return e>=20?"1.5":e>=16?"1.75":e>=14?"2":"2.25"}function ne(e,t=16,l=""){const a=Xe(t);return`<svg${l?` class="${l}"`:""} width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${a}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;">${Ye[e]}</svg>`}const je=[{id:"wg-hvac",name:"暖通运维组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋 5F–7F（HVAC、FCU 与 VAV 系统）",memberCount:3,membersSummary:"陈值班、林工、周工",notifyChannel:"站内 + 短信"},{id:"wg-elec",name:"强电照明组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋全楼照明与配电回路",memberCount:2,membersSummary:"黄工、刘工",notifyChannel:"站内 + 邮件"},{id:"wg-property",name:"园区物业值班组",defaultRoleLabel:"只读访客 / 值班巡检",locationScope:"广实2号园 / 全园区公共空间与值班台",memberCount:4,membersSummary:"张班长、王巡检、赵巡检、吴值守",notifyChannel:"站内 + 每日晨报"}];async function Qe(e,t,l,a,n){let i="profile",I="directory",x=await t.listOrgMembers(),w=await t.listAuditLogs(),W="",L="all",R="all",M="all",H=!1,G=!1,U=!1,P=l.displayName,O=l.role==="org_admin"||l.role==="project_admin"?"设施运维总监":l.role==="commissioning_engineer"?"楼宇自控部署工程师":l.role==="facility_operator"?"暖通运行值班工程师":"园区巡检成员",D="138-0013-8072",Q="",Z="";async function A(){[x,w]=await Promise.all([t.listOrgMembers(),t.listAuditLogs()]),q()}function q(){const ee=t.mode==="demo"&&typeof t.switchDemoRole=="function",K=W.trim().toLowerCase(),c=x.filter(g=>L!=="all"&&g.role!==L?!1:K?`${g.displayName} ${g.email} ${g.roleLabel} ${g.scopeSummary}`.toLowerCase().includes(K):!0),v=w.filter(g=>{if(R==="success"&&g.result!=="success"||R==="denied"&&g.result==="success")return!1;if(M!=="all"){const z=`${g.action} ${g.target}`.toLowerCase();if(M==="control"&&!z.includes("control")&&!z.includes("scene")&&!z.includes("控制")||M==="alarm"&&!z.includes("alarm")&&!z.includes("work")&&!z.includes("告警")||M==="deploy"&&!z.includes("deploy")&&!z.includes("plan")&&!z.includes("hardware")&&!z.includes("部署"))return!1}return!0});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">机构与账户</h1>
              <div class="pacom-tabs" role="tablist" aria-label="机构与账户视图">
                <button class="pacom-tab" role="tab" aria-selected="${i==="profile"}" data-atab="profile">我的账户与权限</button>
                <button class="pacom-tab" role="tab" aria-selected="${i==="members"}" data-atab="members">成员与角色（${x.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${i==="audit"}" data-atab="audit">操作审计日志（${w.length}）</button>
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
            ${Q?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${Q}</span></div>`:""}
            ${Z?`<div class="pacom-alert-banner">${Z}</div>`:""}
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
                        <input class="pacom-input" style="width:150px;" name="displayName" value="${P}" aria-label="显示姓名" required />
                        <input class="pacom-input" style="width:180px;" name="jobTitle" value="${O}" aria-label="岗位职务" />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">告警接收手机号（SMS）</span>
                        <span class="lov-setting-desc">用于接收 P1 严重告警短信推送与工单升级提醒</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:180px;" name="phone" value="${D}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
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

                ${ee?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">多角色权限预览切换</h2>
                        <span class="pacom-badge pacom-badge--neutral">仅 Demo 预览可用</span>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(me).map(g=>{const z=me[g];return`
                              <button class="pacom-role-card ${g===l.role?"is-active":""}" data-switch-role="${g}">
                                <strong style="font-weight:500;">${z.roleLabel}</strong>
                                <span class="pacom-row-sub">${z.displayName}</span>
                                <span class="pacom-row-sub">授权楼层 ${z.scope.allowedFloorIds.length} 层 · 部署编辑：${z.scope.canEditDeployment?"是":"否"}</span>
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
                      <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:4px;">展开查看 ${ne("chevron-down",12)}</span>
                    </summary>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                      <span class="pacom-row-sub">服务端下发的当前会话权限对象（供前后端核对）</span>
                      <button class="pacom-btn" data-copy-session="1">${U?"已复制":"复制 JSON"}</button>
                    </div>
                    <pre class="pacom-code">${JSON.stringify(l,null,2)}</pre>
                  </details>
                </section>`:i==="members"?`
                  ${H?`
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
                                ${Object.keys(me).map(g=>`<option value="${g}">${me[g].roleLabel}</option>`).join("")}
                              </select>
                              <button class="pacom-btn pacom-btn--primary" type="submit">发送邀请</button>
                            </div>
                          </div>
                        </form>
                      </section>`:""}

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                        <h2 class="lov-section-title">${I==="directory"?"机构成员目录":"工作组与空间授权（Groups & Scope）"}</h2>
                        <div class="pacom-tabs" role="tablist" aria-label="成员与工作组切换">
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${I==="directory"}" data-msub="directory">成员目录（${x.length}）</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${I==="groups"}" data-msub="groups">工作组（${je.length}）</button>
                        </div>
                      </div>
                      <span class="pacom-row-sub">${I==="directory"?`当前显示 ${c.length} 人`:"按空间边界与值班组统一分派告警与工单"}</span>
                    </div>
                    ${I==="directory"?`
                        <div class="lov-table-card">
                          <div class="lov-table-toolbar">
                            <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                              <input class="pacom-input" name="memberSearch" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${W}" />
                              <select class="pacom-select" name="memberRoleFilter" data-role-filter>
                                <option value="all" ${L==="all"?"selected":""}>全部角色</option>
                                ${Object.keys(me).map(g=>`<option value="${g}" ${L===g?"selected":""}>${me[g].roleLabel}</option>`).join("")}
                              </select>
                            </div>
                            <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                              ${H?"收起邀请":"+ 邀请成员"}
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
                                ${c.map(g=>`
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
                        ${G?`
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
                            <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-group="1">${G?"收起表单":"+ 新建工作组"}</button>
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
                                ${je.map(g=>`
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
                          <option value="all" ${M==="all"?"selected":""}>全部操作类型</option>
                          <option value="control" ${M==="control"?"selected":""}>设备控制与场景</option>
                          <option value="alarm" ${M==="alarm"?"selected":""}>告警与工单处置</option>
                          <option value="deploy" ${M==="deploy"?"selected":""}>系统部署与点位</option>
                        </select>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${R==="all"}" data-audit-filter="all">全部（${w.length}）</button>
                          <button class="pacom-tab" aria-selected="${R==="success"}" data-audit-filter="success">成功</button>
                          <button class="pacom-tab" aria-selected="${R==="denied"}" data-audit-filter="denied">已拦截</button>
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
                            ${v.map(g=>`
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
    `,e.querySelectorAll("[data-atab]").forEach(g=>{g.addEventListener("click",()=>{i=g.dataset.atab,Q="",Z="",q()})}),e.querySelectorAll("[data-msub]").forEach(g=>{g.addEventListener("click",()=>{I=g.dataset.msub??"directory",q()})}),e.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{G=!G,q()}),e.querySelector('[data-role="new-group-form"]')?.addEventListener("submit",g=>{g.preventDefault();const z=new FormData(g.currentTarget),Y=String(z.get("wgName")??"").trim(),S=String(z.get("wgRole")??"运行值班员"),b=String(z.get("wgScope")??"").trim();!Y||!b||(je.push({id:`wg-${Date.now()}`,name:Y,defaultRoleLabel:S,locationScope:b,memberCount:1,membersSummary:l.displayName,notifyChannel:"站内 + 邮件"}),G=!1,Q=`已创建工作组「${Y}」（授权空间：${b}）。`,q())}),e.querySelector('[data-role="profile-form"]')?.addEventListener("submit",g=>{g.preventDefault();const z=new FormData(g.currentTarget);P=String(z.get("displayName")??"").trim()||l.displayName,O=String(z.get("jobTitle")??"").trim()||O,D=String(z.get("phone")??"").trim()||D,Q=`已更新个人资料：${P}（${O}）· 告警短信接收号 ${D}。`,q()}),e.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await t.logout(),window.location.hash="#login",n()}),e.querySelector("[data-copy-session]")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(l,null,2)),U=!0,q(),window.setTimeout(()=>{U=!1,q()},1600)}catch{}}),e.querySelectorAll("[data-switch-role]").forEach(g=>{g.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const z=await t.switchDemoRole(g.dataset.switchRole);a(z)})}),e.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{H=!H,q()}),e.querySelector("[data-member-search]")?.addEventListener("input",g=>{const z=g.currentTarget,Y=z.selectionStart??z.value.length;W=z.value,q();const S=e.querySelector("[data-member-search]");S&&(S.focus(),S.setSelectionRange(Y,Y))}),e.querySelector("[data-role-filter]")?.addEventListener("change",g=>{L=g.currentTarget.value,q()}),e.querySelectorAll("[data-audit-filter]").forEach(g=>{g.addEventListener("click",()=>{R=g.dataset.auditFilter??"all",q()})}),e.querySelector("[data-audit-cat]")?.addEventListener("change",g=>{M=g.currentTarget.value??"all",q()}),e.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async g=>{g.preventDefault(),Z="";const z=new FormData(g.currentTarget);try{await t.inviteOrgMember(String(z.get("email")??""),String(z.get("role"))),H=!1,await A()}catch(Y){Z=Y instanceof Error?Y.message:String(Y),q()}})}q()}const xe={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},Je={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},et={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function tt(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("modbus")||t.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":t.includes("co₂")||t.includes("co2")||t.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function at(e){return e.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:e.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function Fe(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("vav")||e.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:t.includes("co₂")||t.includes("co2")||e.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function st(e,t,l){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),n=a.get("alarm"),i=a.get("wo");let I=[],x=[],w=[],W=i?"workorders":"alarms",L="all",R="all",M="all",H="impact",G=!1,U="",P=n,O=i,D=null,Q=null,Z="resolved";const A=new Set,q=new Map,ee=new Map,K=new Map,c=new Map;let v="",C="";function g(h){const T=c.get(h.id);if(T)return T;const o=h.id.match(/(\d+)$/),s=`WO-2026-${o?o[1]:h.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,f={estCost:"¥ 450",actualCost:h.status==="closed"?"¥ 380":"--",cmmsNo:s,assigneeGroup:"暖通运维组",tasks:[{id:`${h.id}-t1`,label:"核查设备供电与现场指示灯状态",done:h.status!=="open"},{id:`${h.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:h.status==="resolved"||h.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:h.createdAt?h.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${s}）`}]};return c.set(h.id,f),f}async function z(){[I,x,w]=await Promise.all([t.listAlarms(d.floorId),t.listWorkOrders(d.floorId),t.getFloorDevices(d.floorId).catch(()=>[])]),x.forEach(h=>g(h)),b()}function Y(h){if(!h)return{name:"楼层通用",zone:"E7F",dev:null};const T=w.find(o=>o.id===h)??null;return T?{name:T.name,zone:(T.logicalZoneId?et[T.logicalZoneId]:void 0)??"E7F",dev:T}:{name:h,zone:"E7F",dev:null}}function S(h){const T=Y(h.deviceId).dev;T&&T.connectivity==="offline"?K.set(h.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${T.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):K.set(h.id,{verdict:"pass",summary:`自检通过（PASS）：「${T?.name??h.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),P=h.id,b()}function b(){const h=I.filter(p=>p.status==="active"&&!q.has(p.id)),T=x.filter(p=>!g(p).cancelled&&(p.status==="open"||p.status==="assigned"||p.status==="in_progress")),o=I.filter(p=>p.status!=="active").length+ee.size,s=0,f=q.size,B=U.trim().toLowerCase(),de=I.filter(p=>{const u=q.has(p.id);if(L==="snoozed"){if(!u)return!1}else if(L==="active"){if(p.status!=="active"||u)return!1}else if(L==="acknowledged"){if(p.status!=="acknowledged")return!1}else if(u)return!1;if(M!=="all"&&p.severity!==M)return!1;if(!B)return!0;const N=Y(p.deviceId);return`${p.title} ${p.message} ${N.name} ${N.zone} ${p.deviceId}`.toLowerCase().includes(B)}),V=new Map;for(const p of de){const u=`${p.title} ${p.message}`.toLowerCase(),N=u.includes("离线")||u.includes("modbus")||u.includes("通信"),te=G?N?"root-gateway-modbus":p.deviceId:p.id,le=N?"根因：E7F 主控网关通信链路":`根因：${Y(p.deviceId).name}`,ue=V.get(te)??{rootLabel:le,items:[]};ue.items.push(p),V.set(te,ue)}const pe=Array.from(V.values());H==="impact"&&pe.sort((p,u)=>Fe(u.items[0]).costYuan-Fe(p.items[0]).costYuan);const k=x.filter(p=>{const u=g(p);if(R==="cancelled"){if(!u.cancelled)return!1}else if(u.cancelled||R==="open"&&(p.status==="resolved"||p.status==="closed")||R==="resolved"&&p.status!=="resolved"||R==="closed"&&p.status!=="closed")return!1;if(!B)return!0;const N=Y(p.deviceId);return`${p.title} ${p.description} ${p.id} ${u.cmmsNo} ${N.name}`.toLowerCase().includes(B)});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">告警中心</h1>
              <div class="pacom-tabs" role="tablist" aria-label="告警中心视图">
                <button class="pacom-tab" role="tab" aria-selected="${W==="alarms"}" data-main-tab="alarms">
                  实时告警（${I.length-f}）
                </button>
                <button class="pacom-tab" role="tab" aria-selected="${W==="workorders"}" data-main-tab="workorders">
                  运维工单（${x.length}）
                </button>
              </div>
            </div>

            <div class="pacom-header-meta">
              ${W==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="lov-switch" role="switch" aria-checked="${G}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="lov-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${l.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${l.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="lov-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${ne("refresh-cw",14)}</button>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="lov-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="lov-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${W==="alarms"&&L==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">待处理告警</span>
              <div class="lov-kpi-value">${h.length}<span class="lov-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="lov-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${W==="workorders"&&R==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">处理中工单</span>
              <div class="lov-kpi-value">${T.length}<span class="lov-kpi-unit">单</span></div>
              <span class="lov-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${W==="alarms"&&L==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
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

          ${v?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${v}</span></div>`:""}
          ${C?`<div class="pacom-alert-banner">${C}</div>`:""}

          ${W==="alarms"?`
              <section class="lov-table-card">
                <div class="lov-table-toolbar">
                  <div class="lov-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${U}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${M==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${M==="critical"?"selected":""}>严重</option>
                      <option value="major" ${M==="major"?"selected":""}>重要</option>
                      <option value="minor" ${M==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${H==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${H==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${L==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${L==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${L==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${L==="snoozed"}" data-status-pill="snoozed">已忽略（${f}）</button>
                    </div>
                  </div>
                  <div class="lov-table-toolbar-group">
                    ${A.size>0&&l.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${A.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${pe.length} 项</span>
                  </div>
                </div>
                ${pe.length===0?'<div class="lov-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${pe.map(p=>{const u=p.items[0],N=Je[u.severity]??{label:u.severity,cls:"pacom-badge--neutral"},te=Y(u.deviceId),le=at(u),ue=Fe(u),$e=P===u.id,ce=q.get(u.id),be=!!ce,m=A.has(u.id),j=K.get(u.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${u.id}" data-check-alarm="${u.id}" ${m?"checked":""} ${u.status!=="active"||be?"disabled":""} aria-label="选择 ${u.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${N.cls}">${N.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${u.title}</span>
                                      ${G?`<span class="pacom-badge pacom-badge--accent">${p.rootLabel}${p.items.length>1?` · 影响 ${p.items.length} 项`:""}</span>`:""}
                                      ${j?`<span class="pacom-badge ${j.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${j.verdict.toUpperCase()}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${u.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${te.name}</div>
                                    <div class="pacom-row-sub">${te.zone}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${ue.costLabel}</div>
                                    <div class="pacom-row-sub">${ue.comfortLabel}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${le.duration}</div>
                                    <div class="pacom-row-sub" style="color:${le.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${le.trend}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${be?"pacom-badge--neutral":u.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${be?`忽略 ${ce?.duration}`:u.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${be?`<button class="pacom-btn" data-unsnooze="${u.id}">恢复监控</button>`:`
                                            ${u.status==="active"?`<button class="pacom-btn" data-mark-actioned="${u.id}" ${l.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${u.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${u.id}" ${l.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${u.id}">${$e?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${$e?`
                                    <tr class="lov-table-detail-row">
                                      <td colspan="8">
                                        <div class="lov-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${tt(u)}
                                            </div>
                                            ${ce?`<div class="pacom-info-banner">忽略周期：${ce.duration} · 原因备注：${ce.reason}</div>`:""}
                                            ${j?`
                                                <div class="lov-banner ${j.verdict==="pass"?"lov-banner--ok":"lov-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="lov-banner-title">${j.summary}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${j.steps.map(r=>`<span>${r}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${u.id}</code> · 设备编号 <code>${u.deviceId}</code> · 关联工单 ${u.workOrderId??"无"}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${u.id}">单机自检（FTT）</button>
                                              ${!be&&u.status==="active"?`<button class="pacom-btn" data-open-snooze="${u.id}">限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${u.deviceId}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${u.deviceId}">定位设备 →</button>
                                            </div>
                                            ${D===u.id?`
                                                <form data-snooze-form="${u.id}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
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
              ${(()=>{const p=O?x.find(u=>u.id===O)??null:null;if(p){const u=Y(p.deviceId),N=g(p),te=!!(N.cancelled||p.status==="closed");return`
                  <section class="lov-section" data-role="wo-workbench">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${p.id}">← 返回运维工单列表</button>
                        <h2 class="lov-section-title">${p.title}</h2>
                        <span class="pacom-badge pacom-badge--accent">${N.cmmsNo}</span>
                        ${N.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${p.id}" data-wo-status="${p.id}" aria-label="更新工单状态" ${te?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(le=>`<option value="${le}" ${p.status===le?"selected":""}>${xe[le]}</option>`).join("")}
                          <option value="cancelled" ${N.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${Q===p.id?`
                        <form data-close-wo-form="${p.id}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${xe[Z]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${N.cause??""}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${N.solution??""}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${N.actualCost==="--"?"":N.actualCost}" />
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
                            ${N.tasks.map(le=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${le.id}" data-wo-task="${p.id}" data-task-id="${le.id}" ${le.done?"checked":""} ${te?"disabled":""} />
                                    <span>${le.label}</span>
                                  </span>
                                  ${le.unit?`<span class="pacom-row-sub">实测：${le.reading??"--"} ${le.unit}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${N.history.map(le=>`<span>• <span class="pacom-row-sub">${le.at}</span> — ${le.text}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${p.id}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${N.cmmsNo}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${u.name}（${u.zone}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${N.assigneeGroup}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${N.estCost} / 实际 ${N.actualCost}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${N.cause??"待完单填写"}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${N.solution??"待完单填写"}</span>
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
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${U}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${R==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${R==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${R==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${R==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${R==="cancelled"}" data-wo-pill="cancelled">已取消</button>
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
                            ${k.map(u=>{const N=Y(u.deviceId),te=g(u),le=!!(te.cancelled||u.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${u.title}</span>
                                        ${te.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${u.description} · <code>${u.id}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${N.name}</div>
                                      <div class="pacom-row-sub">${N.zone}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${te.cmmsNo}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${te.assigneeGroup} · 预估 ${te.estCost}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${u.id}" data-wo-status="${u.id}" aria-label="更新工单状态" ${le?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(ue=>`<option value="${ue}" ${u.status===ue?"selected":""}>${xe[ue]}</option>`).join("")}
                                          <option value="cancelled" ${te.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${u.id}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${Q===u.id?`
                                      <tr class="lov-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${u.id}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${xe[Z]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${te.cause??""}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${te.solution??""}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${te.actualCost==="--"?"":te.actualCost}" />
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
    `,e.querySelectorAll("[data-main-tab]").forEach(p=>{p.addEventListener("click",()=>{W=p.dataset.mainTab??"alarms",v="",b()})}),e.querySelectorAll("[data-kpi-filter]").forEach(p=>{p.addEventListener("click",()=>{const u=p.dataset.kpiFilter;v="",u==="workorders"?(W="workorders",R=R==="open"?"all":"open"):(u==="active"||u==="acknowledged")&&(W="alarms",L=L===u?"all":u),b()})}),e.querySelectorAll("[data-status-pill]").forEach(p=>{p.addEventListener("click",()=>{L=p.dataset.statusPill??"all",b()})}),e.querySelectorAll("[data-wo-pill]").forEach(p=>{p.addEventListener("click",()=>{R=p.dataset.woPill??"all",b()})}),e.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{v="",z()}),e.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{G=!G,b()}),e.querySelector("[data-severity-filter]")?.addEventListener("change",p=>{M=p.currentTarget.value,b()}),e.querySelector("[data-alarm-sort]")?.addEventListener("change",p=>{H=p.currentTarget.value??"impact",b()}),e.querySelector("[data-alarm-search]")?.addEventListener("input",p=>{const u=p.currentTarget,N=u.selectionStart??u.value.length;U=u.value,b();const te=e.querySelector("[data-alarm-search]");te&&(te.focus(),te.setSelectionRange(N,N))}),e.querySelectorAll("[data-check-alarm]").forEach(p=>{p.addEventListener("change",()=>{const u=p.dataset.checkAlarm;u&&(p.checked?A.add(u):A.delete(u),b())})}),e.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{C="";const p=Array.from(A);try{for(const u of p)await t.acknowledgeAlarm(u,"告警中心批量确认"),ee.set(u,"批量确认处置");A.clear(),v=`已批量确认 ${p.length} 条告警，未来 24 小时持续校验无复发。`,await z()}catch(u){C=u instanceof Error?u.message:String(u),b()}}),e.querySelectorAll("[data-expand-alarm]").forEach(p=>{p.addEventListener("click",()=>{const u=p.dataset.expandAlarm??null;P=P===u?null:u,D=null,b()})}),e.querySelectorAll("[data-expand-wo]").forEach(p=>{p.addEventListener("click",()=>{const u=p.dataset.expandWo??null;O=O===u?null:u,b()})}),e.querySelectorAll("[data-run-ftt]").forEach(p=>{p.addEventListener("click",()=>{const u=I.find(N=>N.id===p.dataset.runFtt);u&&S(u)})}),e.querySelectorAll("[data-open-snooze]").forEach(p=>{p.addEventListener("click",()=>{D=p.dataset.openSnooze??null,b()})}),e.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{D=null,b()}),e.querySelectorAll("[data-snooze-form]").forEach(p=>{p.addEventListener("submit",u=>{u.preventDefault();const N=p.dataset.snoozeForm;if(!N)return;const te=new FormData(p),le=String(te.get("duration")??"24h"),ue=String(te.get("reason")??"").trim()||"现场核查中";q.set(N,{duration:le,reason:ue}),A.delete(N),D=null,v=`已限时忽略该告警（${le} · ${ue}），可在「已忽略」页签中随时恢复。`,b()})}),e.querySelectorAll("[data-unsnooze]").forEach(p=>{p.addEventListener("click",()=>{const u=p.dataset.unsnooze;u&&(q.delete(u),v="已恢复该告警的实时监控。",b())})}),e.querySelectorAll("[data-go-ts]").forEach(p=>{p.addEventListener("click",()=>{const u=p.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(u)}`})}),e.querySelectorAll("[data-locate-home]").forEach(p=>{p.addEventListener("click",()=>{const u=p.dataset.locateHome??"";window.location.hash=u?`#home?device=${encodeURIComponent(u)}`:"#home"})}),e.querySelectorAll("[data-mark-actioned]").forEach(p=>{p.addEventListener("click",async()=>{C="";const u=p.dataset.markActioned;try{await t.acknowledgeAlarm(u,"现场自处理完成（Mark Actioned）"),ee.set(u,"现场自处理完成"),A.delete(u),v="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await z()}catch(N){C=N instanceof Error?N.message:String(N),b()}})}),e.querySelectorAll("[data-to-wo]").forEach(p=>{p.addEventListener("click",async()=>{C="";const u=I.find(N=>N.id===p.dataset.toWo);if(u)try{await t.createWorkOrder({floorId:u.floorId,deviceId:u.deviceId,alarmId:u.id,title:`处置告警：${u.title}`,description:u.message}),v=`已将「${u.title}」转为运维工单并同步 CMMS。`,await z()}catch(N){C=N instanceof Error?N.message:String(N),b()}})}),e.querySelectorAll("[data-wo-status]").forEach(p=>{p.addEventListener("change",async()=>{const u=p.dataset.woStatus,N=p.value;if(C="",N==="cancelled"){const te=x.find(le=>le.id===u);if(te){const le=g(te);le.cancelled=!0,le.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),v="工单已移入「已取消」分类并锁定编辑。",b()}return}if(N==="resolved"||N==="closed"){Q=u,Z=N,b();return}try{await t.updateWorkOrderStatus(u,N);const te=x.find(le=>le.id===u);te&&g(te).history.unshift({at:"刚刚",text:`状态变更为「${xe[N]}」`}),v="工单状态已更新并写入审计日志。",await z()}catch(te){C=te instanceof Error?te.message:String(te),await z()}})}),e.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{Q=null,b()}),e.querySelectorAll("[data-close-wo-form]").forEach(p=>{p.addEventListener("submit",async u=>{u.preventDefault();const N=p.dataset.closeWoForm,te=new FormData(p),le=String(te.get("cause")??"").trim(),ue=String(te.get("solution")??"").trim(),$e=String(te.get("actualCost")??"").trim();try{await t.updateWorkOrderStatus(N,Z);const ce=x.find(be=>be.id===N);if(ce){const be=g(ce);be.cause=le,be.solution=ue,$e&&(be.actualCost=$e),be.history.unshift({at:"刚刚",text:`流转至「${xe[Z]}」· 根因：${le}`})}Q=null,O=N,v=`工单已更新为「${xe[Z]}」，根因与方案已沉淀归档。`,await z()}catch(ce){C=ce instanceof Error?ce.message:String(ce),b()}})}),e.querySelectorAll("[data-wo-task]").forEach(p=>{p.addEventListener("change",()=>{const u=x.find(le=>le.id===p.dataset.woTask);if(!u)return;const te=g(u).tasks.find(le=>le.id===p.dataset.taskId);te&&(te.done=p.checked),b()})})}await z()}const Pe=ne("chevron-down",12),Le=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],Me=[{id:d.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:d.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:d.projectId,label:"广实2号园（全园区）",factor:18.2}],lt={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},ot=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],ye=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function Te(e,t=""){const l=(e??"").trim().toLowerCase();return!(!l||l.includes("%")||l.includes("°c")||l.includes("ppm")||l.includes("ms")||l.includes("m²")||l.includes("/m2")||l.includes("db")||l.includes("lx")||t.includes("率")||t.includes("均")||t.includes("强度")||t.includes("延迟"))}function Ae(e,t){const l=e*t;return Math.abs(l)>=10?Math.round(l):Math.round(l*10)/10}function nt(e,t){const l=Number(String(e).replaceAll(",","")),a=t??"";return Number.isFinite(l)?a==="kWh"&&Math.abs(l)>=1e4?{value:(l/1e3).toFixed(1),unit:"MWh",title:`精确值：${l.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(l)?l.toLocaleString("en-US"):l.toLocaleString("en-US",{maximumFractionDigits:1}),unit:a,title:`${l.toLocaleString("en-US")} ${a}`.trim()}:{value:e,unit:a,title:`${e} ${a}`.trim()}}function it(e,t){if(t===1)return e;const l=Te(e.unit);return{...e,kpis:e.kpis.map(a=>{const n=Number(String(a.value).replaceAll(",",""));return!Number.isFinite(n)||!Te(a.unit,a.label)?a:{...a,value:String(Ae(n,t))}}),series:l?e.series.map(a=>({...a,value:Ae(a.value,t),...typeof a.baseline=="number"?{baseline:Ae(a.baseline,t)}:{}})):e.series,zoneBreakdown:e.zoneBreakdown.map(a=>Te(a.unit)?{...a,value:Ae(a.value,t)}:a)}}function ct(e,t){const l=Math.max(...e.series.map(M=>Math.max(M.value,M.baseline??0)),1),a=46,n=34,i=36,I=Math.max(e.series.length*(a+n)+i*2,620),x=228,w=184,W=132,L=[0,.25,.5,.75,1].map(M=>{const H=Math.round(w-M*W);return`<line x1="${i-8}" y1="${H}" x2="${I-18}" y2="${H}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${M===0?"0":"3 3"}" />`}).join(""),R=e.series.map((M,H)=>{const G=i+H*(a+n),U=Math.max(8,Math.round(M.value/l*W)),P=w-U,O=typeof M.baseline=="number"&&M.value>M.baseline*1.08,D=O?`<rect x="${G-8}" y="34" width="${a+16}" height="${w-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",Q=typeof M.baseline=="number"?`<line x1="${G-5}" y1="${Math.round(w-M.baseline/l*W)}" x2="${G+a+5}" y2="${Math.round(w-M.baseline/l*W)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",Z=t&&(O||H===1)?`<g><title>${O?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${G+a/2}" cy="18" r="7" fill="${O?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${G+a/2}" y="21" text-anchor="middle" font-size="8.5" font-weight="600" fill="#fff">${O?"!":"S"}</text></g>`:"",A=M.value>=1e4?`${(M.value/1e3).toFixed(1)}k`:M.value.toLocaleString("en-US");return`
        ${D}
        ${Q}
        ${Z}
        <g>
          <title>${M.label}：实测 ${M.value.toLocaleString("en-US")} ${e.unit}${M.baseline!==void 0?` / 基线 ${M.baseline.toLocaleString("en-US")} ${e.unit}`:""}</title>
          <rect x="${G}" y="${P}" width="${a}" height="${U}" rx="7" fill="${O?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${G+a/2}" y="${P-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${A}</text>
        <text x="${G+a/2}" y="${w+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${M.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${I} ${x}" style="width:100%; height:232px; display:block;" role="img" aria-label="${e.category} 趋势图">
      ${L}
      ${R}
    </svg>
  `}function dt(e,t){const l=e.connectivity==="offline";if(e.category==="hvac"){const a=Number(e.telemetry.setpoint?.value??24);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:l?[23.8,24,24.1,null,null,null,null,null]:[a+.8,a+.6,a+.3,a,a-.2,a+.1,a+.2,a],offline:l,colorIdx:t},{id:`${e.id}:setpoint`,deviceId:e.id,deviceName:e.name,pointKey:"setpoint",label:"设定温度",unit:"°C",points:l?[24,24,24,null,null,null,null,null]:[a,a,a,a,a,a,a,a],offline:l,colorIdx:t+1},{id:`${e.id}:valve`,deviceId:e.id,deviceName:e.name,pointKey:"valve",label:"冷阀开度",unit:"%",points:l?[42,46,51,null,null,null,null,null]:[20,24,38,62,74,68,52,30],offline:l,colorIdx:t+2}]}if(e.category==="lighting"){const a=Number(e.telemetry.dimming?.value??60);return[{id:`${e.id}:dimming`,deviceId:e.id,deviceName:e.name,pointKey:"dimming",label:"回路亮度",unit:"%",points:[0,0,Math.round(a*.8),a,a,Math.round(a*.6),a,Math.round(a*.9)],offline:l,colorIdx:t},{id:`${e.id}:power`,deviceId:e.id,deviceName:e.name,pointKey:"power",label:"实时功率",unit:"W",points:[12,12,220,285,290,175,280,245],offline:l,colorIdx:t+1}]}if(e.category==="sensor"){const a=Number(e.telemetry.temp?.value??23.4);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:[a-.5,a-.3,a,a+.3,a+.5,a+.2,a+.1,a],offline:l,colorIdx:t},{id:`${e.id}:co2`,deviceId:e.id,deviceName:e.name,pointKey:"co2",label:"CO₂ 浓度",unit:"ppm",points:[410,415,440,520,580,540,495,430],offline:l,colorIdx:t+1},{id:`${e.id}:humidity`,deviceId:e.id,deviceName:e.name,pointKey:"humidity",label:"相对湿度",unit:"%RH",points:[49,50,51,52,53,51,50,49],offline:l,colorIdx:t+2}]}return[{id:`${e.id}:latency`,deviceId:e.id,deviceName:e.name,pointKey:"latency",label:"心跳延迟",unit:"ms",points:[16,18,17,19,18,17,18,18],offline:l,colorIdx:t}]}function rt(e){const t=e.points.filter(x=>typeof x=="number");if(!t.length)return{min:"-",avg:"-",max:"-",curr:"离线"};const l=Math.min(...t),a=Math.max(...t),n=t.reduce((x,w)=>x+w,0)/t.length,i=e.points[e.points.length-1],I=x=>Math.abs(x)<100&&!Number.isInteger(x)?x.toFixed(1):Math.round(x).toString();return{min:I(l),avg:n.toFixed(Math.abs(n)<100?1:0),max:I(a),curr:typeof i=="number"?I(i):"离线"}}function pt(e,t,l){const a=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!e.length)return'<div class="lov-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧展开设备并勾选 1 个或多个测点以开始多点时序对比。</span></div>';const n=(I,x)=>{const P=[];for(const c of I)for(const v of c.points)typeof v=="number"&&P.push(v);const O=P.length?Math.min(...P)*.92:0,D=P.length?Math.max(...P)*1.08:100,Q=Math.max(D-O,1),Z=[0,.5,1].map(c=>{const v=Math.round(26+106*(1-c)),C=(O+Q*c).toFixed(Q<15?1:0);return`
          <line x1="44" y1="${v}" x2="662" y2="${v}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${c===0?"0":"3 3"}" />
          <text x="38" y="${v+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${C}</text>
        `}).join(""),A=a.map((c,v)=>`<text x="${44+v/(a.length-1)*618}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${c}</text>`).join(""),q=I.map((c,v)=>{const C=ye[(c.colorIdx+v)%ye.length],g=c.points,z=[];let Y=44,S=26+106/2,b=!1;g.forEach((T,o)=>{const s=44+o/(g.length-1)*618;if(typeof T=="number"){const f=26+106*(1-(T-O)/Q);z.push(`${s.toFixed(1)},${f.toFixed(1)}`),Y=s,S=f}else b=!0});const h=l?g.map((T,o)=>{if(typeof T!="number")return null;const s=44+o/(g.length-1)*618,B=26+106*(1-(T*.96-O)/Q);return`${s.toFixed(1)},${B.toFixed(1)}`}).filter(Boolean).join(" "):"";return`
          ${h?`<polyline fill="none" stroke="${C}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.42" points="${h}" />`:""}
          ${z.length?`<polyline fill="none" stroke="${C}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${z.join(" ")}" />`:""}
          ${b?`<line x1="${Y.toFixed(1)}" y1="${S.toFixed(1)}" x2="662" y2="${S.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${S-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),ee=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${44+3/7*618}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${44+3/7*618}" y="14.8" text-anchor="middle" font-size="7.5" font-weight="600" fill="#fff">S</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${44+5/7*618}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${44+5/7*618}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `,K=I.map((c,v)=>{const C=ye[(c.colorIdx+v)%ye.length],g=rt(c);return`
          <tr>
            <td><span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:7px; height:7px; border-radius:50%; background:${C};"></span>${c.deviceName} · ${c.label}</span></td>
            <td><strong>${g.curr}</strong> <span class="pacom-row-sub">${c.unit}</span></td>
            <td>${g.min} <span class="pacom-row-sub">${c.unit}</span></td>
            <td>${g.avg} <span class="pacom-row-sub">${c.unit}</span></td>
            <td>${g.max} <span class="pacom-row-sub">${c.unit}</span></td>
          </tr>`}).join("");return`
      <div class="pacom-card" style="padding:14px 16px; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${x}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${I.map((c,v)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${ye[(c.colorIdx+v)%ye.length]};"></span>${c.deviceName}·${c.label}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${Z}
          ${A}
          ${ee}
          ${q}
        </svg>
        <div class="lov-table-wrap" style="border-top:var(--hw) solid var(--pacom-border-subtle); padding-top:6px;">
          <table class="lov-table" style="font-size:12px;">
            <thead><tr><th>测点</th><th>当前值</th><th>最小值 (Min)</th><th>平均值 (Avg)</th><th>最大值 (Max)</th></tr></thead>
            <tbody>${K}</tbody>
          </table>
        </div>
      </div>
    `};if(t==="shared")return n(e,"单图叠合对比（Shared）");const i=new Map;for(const I of e){const x=i.get(I.unit)??[];x.push(I),i.set(I.unit,x)}return Array.from(i.entries()).map(([I,x])=>n(x,`按单位分组泳道（${I}）`)).join("")}function ut(e){const t=[["时段",`数值 (${e.unit})`,`基线 (${e.unit})`].join(","),...e.series.map(i=>[i.label,String(i.value),i.baseline!==void 0?String(i.baseline):""].join(","))],l=new Blob([`\uFEFF${t.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(l),n=document.createElement("a");n.href=a,n.download=`pacom-${e.category}-${e.range}.csv`,n.click(),URL.revokeObjectURL(a)}function vt(e){const t=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],l=["时间",...e.map(x=>`${x.deviceName}·${x.label}(${x.unit})`)].join(","),a=t.map((x,w)=>[x,...e.map(W=>String(W.points[w]??"No Data"))].join(",")),n=new Blob([`\uFEFF${[l,...a].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),I=document.createElement("a");I.href=i,I.download="pacom-timeseries-export.csv",I.click(),URL.revokeObjectURL(i)}async function mt(e,t,l){const a=new URLSearchParams(window.location.hash.split("?")[1]??""),n=a.get("tab"),i=a.get("cat"),I=a.get("device"),x=a.get("points"),w=a.get("mode"),W=a.get("interval");let L=n==="timeseries"?"timeseries":i&&Le.some(h=>h.id===i)?i:"energy",R="7d",M="2026-11-16",H="2026-11-23",G=d.floorId,U="chart",P=!0,O="breakdown",D=!1,Q=null,Z=await t.getFloorDevices(d.floorId).catch(()=>[]);const A=new Map,q=[];Z.forEach((h,T)=>{const o=dt(h,T);A.set(h.id,o),q.push(...o)});let ee=w==="shared"||w==="grouped"?w:"grouped",K=W==="15m"||W==="1h"||W==="1d"?W:"1h",c=!1;const v=[];if(x?x.split(",").forEach(h=>{q.some(T=>T.id===h)&&v.push(h)}):I&&A.has(I)&&(A.get(I)??[]).slice(0,2).forEach(h=>v.push(h.id)),!v.length){const h=Z.find(s=>s.category==="hvac"),T=Z.find(s=>s.category==="sensor"),o=Z.find(s=>s.category==="lighting");h&&(A.get(h.id)??[]).slice(0,2).forEach(s=>v.push(s.id)),T&&(A.get(T.id)??[]).slice(0,1).forEach(s=>v.push(s.id)),o&&(A.get(o.id)??[]).slice(0,1).forEach(s=>v.push(s.id)),v.length||q.slice(0,3).forEach(s=>v.push(s.id))}const C=new Set(v),g=new Set(Z.filter((h,T)=>T<2||(A.get(h.id)??[]).some(o=>C.has(o.id))).map(h=>h.id)),z=[{id:"fav-hvac",name:"E7F 空调温控与 CO₂ 联动对照",pointIds:q.filter(h=>h.pointKey==="temp"||h.pointKey==="setpoint"||h.pointKey==="co2").slice(0,4).map(h=>h.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度与功率对比",pointIds:q.filter(h=>h.pointKey==="dimming"||h.pointKey==="power").slice(0,4).map(h=>h.id),mode:"grouped",interval:"15m"}];let Y="";async function S(){const h=L==="timeseries"?"energy":L,T=R==="custom"?"30d":R;Q=await t.getAnalysisReport(h,T,d.floorId),b()}function b(){if(!Q)return;const h=L==="timeseries",T=L==="timeseries"?"energy":L,o=Le.find(k=>k.id===T)??Le[0],s=Me.find(k=>k.id===G)??Me[0],f=it(Q,s.factor),B=f.zoneBreakdown.filter(k=>k.status==="warning"),de=lt[T],V=Math.max(...f.zoneBreakdown.map(k=>k.value),1),pe=q.filter(k=>C.has(k.id));e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:10px; min-width:0;">
              <h1 class="pacom-title" style="flex-shrink:0;">数据分析</h1>
              <div class="pacom-tabs" role="tablist" aria-label="分析维度">
                ${Le.map(k=>`<button class="pacom-tab" role="tab" aria-selected="${L===k.id}" data-cat="${k.id}">${k.label}</button>`).join("")}
                <button class="pacom-tab" role="tab" aria-selected="${L==="timeseries"}" data-cat="timeseries">多点时序</button>
              </div>
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <div class="pacom-scope-pill" style="width:210px;" title="切换统计空间范围">
                <select name="analysisScope" data-scope-select aria-label="选择统计空间范围">
                  ${Me.map(k=>`<option value="${k.id}" ${k.id===G?"selected":""}>${k.label}</option>`).join("")}
                </select>
                <span class="pacom-scope-chevron">${Pe}</span>
              </div>
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px; width:108px;">
                <option value="today" ${R==="today"?"selected":""}>今日</option>
                <option value="7d" ${R==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${R==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${R==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${h?"":`<button class="pacom-btn ${D?"pacom-btn--primary":""}" data-toggle-canvas="1">${D?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          ${R==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${M}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${H}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${h?`
            <div class="lov-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:296px; min-width:272px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">设备 → 测点树</span>
                    <span class="pacom-row-sub">已选 ${pe.length} 个测点</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${z.map(k=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${k.id}">${ne("star",14)}<span style="overflow:hidden;text-overflow:ellipsis;">${k.name}</span></button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${Z.map(k=>{const ie=A.get(k.id)??[],p=g.has(k.id),u=ie.filter(N=>C.has(N.id)).length;return`
                        <div style="display:flex; flex-direction:column; gap:2px;">
                          <button type="button" class="pacom-row" data-ts-expand="${k.id}" style="cursor:pointer; justify-content:space-between;" title="${k.name}">
                            <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
                              <span style="display:inline-flex; transition:transform 140ms ease; transform:rotate(${p?"0deg":"-90deg"}); opacity:0.65;">${Pe}</span>
                              <div style="min-width:0; flex:1; text-align:left;">
                                <div class="pacom-row-title" style="font-size:13px;">${k.name}</div>
                                <div class="pacom-row-sub">${ie.length} 个测点 · ${k.connectivity==="online"?"在线":"离线"}</div>
                              </div>
                            </div>
                            ${u>0?`<span class="pacom-badge pacom-badge--accent">${u}</span>`:""}
                          </button>
                          ${p?`<div style="display:flex; flex-direction:column; gap:2px; padding-left:20px; padding-bottom:4px;">
                                  ${ie.map(N=>{const te=C.has(N.id),le=ye[N.colorIdx%ye.length];return`
                                        <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:5px 8px; border-radius:var(--pacom-radius-sm); cursor:pointer; font-size:12px; background:${te?"var(--pacom-surface-recessed)":"transparent"};">
                                          <span style="display:inline-flex; align-items:center; gap:6px;">
                                            <input type="checkbox" name="tsPoint-${N.id}" data-ts-point="${N.id}" ${te?"checked":""} />
                                            <span style="width:7px; height:7px; border-radius:50%; background:${le};"></span>
                                            <span style="color:var(--pacom-text-primary);">${N.label}</span>
                                          </span>
                                          <span class="pacom-row-sub">${N.unit}</span>
                                        </label>`}).join("")}
                                </div>`:""}
                        </div>`}).join("")}
                </div>
              </aside>
              <div class="lov-subnav-main" style="padding:2px 4px 24px;">
                ${Y?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${Y}</span></div>`:""}
                <div class="lov-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="lov-section-title">多测点实时遥测对比（Time Series）</h2>
                    <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:6px;">${ne("clock",12)} 排程(S) · ${ne("triangle-alert",12)} 告警(!) · 虚线为断流/上周同期</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>对比上周同期</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${c}" data-ts-compare="1" aria-label="叠加对比上周同期曲线">
                        <span class="lov-switch-thumb"></span>
                      </button>
                    </label>
                    <select class="pacom-select" name="tsInterval" data-ts-interval aria-label="采样粒度" style="height:28px; font-size:12px;">
                      <option value="15m" ${K==="15m"?"selected":""}>15 分钟</option>
                      <option value="1h" ${K==="1h"?"selected":""}>1 小时</option>
                      <option value="1d" ${K==="1d"?"selected":""}>1 天</option>
                    </select>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${ee==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${ee==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ts-share="1">复制分享链接</button>
                  </div>
                </div>
                ${pt(pe,ee,c)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="lov-kpi-strip" role="region" aria-label="核心统计指标">
                ${f.kpis.map(k=>{const ie=nt(k.value,k.unit);return`
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
                    <h2 class="lov-section-title">${o?.label??"趋势"}趋势（${f.unit}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${s.label} · 更新于 ${f.updatedAt.slice(5,16).replace("T"," ")}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${P}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
                        <span class="lov-switch-thumb"></span>
                      </button>
                    </label>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${U==="chart"}" data-chart-mode="chart">趋势图</button>
                      <button class="pacom-tab" aria-selected="${U==="table"}" data-chart-mode="table">明细原表</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-card" style="gap:10px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                    <span class="pacom-row-sub">
                      ${B.length>0?`关注：${B.map(k=>k.zoneName).join("、")} 指标偏高，建议前往智能策略优化启停时段。`:`${o?.desc??"空间运行洞察"} · ${de.summary}`}
                    </span>
                    <button class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-strategy="1">去智能策略优化 →</button>
                  </div>
                  ${U==="chart"?ct(f,P):`
                      <div class="lov-table-wrap">
                        <table class="lov-table">
                          <thead>
                            <tr>
                              <th>统计时段</th>
                              <th>实测值（${f.unit}）</th>
                              <th>基线参考</th>
                              <th>状态</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${f.series.map(k=>{const ie=typeof k.baseline=="number"&&k.value>k.baseline*1.08;return`
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
                    <span class="pacom-row-sub">${f.zoneBreakdown.length} 个功能区</span>
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
                          ${f.zoneBreakdown.map(k=>{const ie=Math.max(8,Math.round(k.value/V*100));return`
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
                    <h2 class="lov-section-title">${D?"E7F 空间对照预览":T==="energy"&&O==="load"?"峰谷负荷分布（Load Profile）":de.title}</h2>
                    ${!D&&T==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${O==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${O==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${D?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${D?'<img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
                        ${T==="environment"?`
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
                        ${(T==="energy"&&O==="load"?ot:de.items).map(k=>`
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
    `,e.querySelectorAll("[data-cat]").forEach(k=>{k.addEventListener("click",()=>{L=k.dataset.cat??"energy",Y="",L==="timeseries"?b():S()})}),e.querySelector("[data-scope-select]")?.addEventListener("change",k=>{G=k.currentTarget.value,b()}),e.querySelector("[data-range-select]")?.addEventListener("change",k=>{R=k.currentTarget.value??"7d",S()}),e.querySelector("[data-custom-start]")?.addEventListener("change",k=>{M=k.currentTarget.value}),e.querySelector("[data-custom-end]")?.addEventListener("change",k=>{H=k.currentTarget.value}),e.querySelectorAll("[data-chart-mode]").forEach(k=>{k.addEventListener("click",()=>{U=k.dataset.chartMode??"chart",b()})}),e.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{P=!P,b()}),e.querySelectorAll("[data-energy-right]").forEach(k=>{k.addEventListener("click",()=>{O=k.dataset.energyRight??"breakdown",b()})}),e.querySelector("[data-export-csv]")?.addEventListener("click",()=>{h?vt(pe):ut(f)}),e.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{D=!D,b()}),e.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),e.querySelectorAll("[data-ts-expand]").forEach(k=>{k.addEventListener("click",()=>{const ie=k.dataset.tsExpand;ie&&(g.has(ie)?g.delete(ie):g.add(ie),b())})}),e.querySelectorAll("[data-ts-point]").forEach(k=>{k.addEventListener("change",()=>{const ie=k.dataset.tsPoint;ie&&(k.checked?C.add(ie):C.delete(ie),Y="",b())})}),e.querySelectorAll("[data-ts-mode]").forEach(k=>{k.addEventListener("click",()=>{ee=k.dataset.tsMode??"grouped",b()})}),e.querySelector("[data-ts-interval]")?.addEventListener("change",k=>{K=k.currentTarget.value??"1h",b()}),e.querySelector("[data-ts-compare]")?.addEventListener("click",()=>{c=!c,b()}),e.querySelector("[data-ts-share]")?.addEventListener("click",()=>{const ie=`#analysis?tab=timeseries&points=${encodeURIComponent(Array.from(C).join(","))}&mode=${ee}&interval=${K}`,p=`${window.location.origin}${window.location.pathname}${ie}`;navigator.clipboard?.writeText&&navigator.clipboard.writeText(p).catch(()=>{}),window.history.replaceState(null,"",ie),Y=`已复制分享链接（含 ${C.size} 个测点、${ee==="grouped"?"按单位分组":"单图叠合"}、${K} 粒度）。`,b()}),e.querySelectorAll("[data-load-fav]").forEach(k=>{k.addEventListener("click",()=>{const ie=z.find(p=>p.id===k.dataset.loadFav);ie&&(C.clear(),ie.pointIds.forEach(p=>{C.add(p);const u=p.split(":")[0];u&&g.add(u)}),ee=ie.mode,K=ie.interval,Y=`已加载收藏视图「${ie.name}」。`,b())})}),e.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if(C.size===0)return;const k=`自定义对比 #${z.length+1}（${C.size} 测点）`;z.push({id:`fav-${Date.now()}`,name:k,pointIds:Array.from(C),mode:ee,interval:K}),Y=`已保存当前时序配置为「${k}」。`,b()})}await S()}const gt=[{group:"一、项目配置",items:[{id:"projects",label:"项目与楼宇"},{id:"floors",label:"楼层与功能区"}]},{group:"二、系统接入",items:[{id:"connections",label:"网关与数据健康"}]},{group:"三、设备部署",items:[{id:"floorplan",label:"图纸标点与绑定"},{id:"inventory",label:"设备四态台账"}]},{group:"四、交付验收",items:[{id:"delivery",label:"进度与交付冻结"}]}],bt={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},ht={frozen:"已冻结",draft:"草稿",delivered:"已交付"},ft={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"},De=[{id:"doc-hvac-7f",name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · FCU-01 / VAV-02",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",name:"E7F_强电照明与DALI回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-bacnet-map",name:"E7F_BACnet_Modbus_点位映射表.xlsx",category:"点位台账",boundScope:"E栋 7F · 主控网关 GW-01",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",name:"FCU-01_风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}];function yt(e,t){const l=e.status!=="connected",a=t.filter(n=>n.hardwareBinding?.protocol===e.protocol);return a.length>0?a.flatMap(n=>{const i=n.connectivity==="offline"||l;return[{pointName:n.category==="hvac"?"送风温度 / 阀门开度":n.category==="lighting"?"回路开关 / 调光反馈":n.category==="sensor"?"温湿度 / CO₂ 遥测":"网关心跳 / 负载",deviceName:n.name,value:i?"No Data":n.category==="hvac"?"23.4°C · 62%":n.category==="lighting"?"ON · 80%":n.category==="sensor"?"24.1°C · 510 ppm":"CPU 18% · 18ms",interval:"60s",lastSeen:i?"46 分钟前":"12 秒前",quality:i?n.connectivity==="offline"?"offline":"delayed":"online"}]}):[{pointName:`${e.protocol.toUpperCase()} 主干遥测汇总点`,deviceName:e.name,value:l?"采样延迟":"正常上报",interval:"60s",lastSeen:l?"38 分钟前":"9 秒前",quality:l?"delayed":"online"}]}function $t(e){return e.category==="gateway"?"主控网关":e.category==="lighting"?e.name.includes("702")?"702 照明":"主照明":e.category==="hvac"?e.name.includes("VAV")?"VAV-02":"FCU-01":e.category==="sensor"?"环境传感":e.name.slice(0,6)}async function wt(e,t,l){const a=new URLSearchParams(window.location.hash.split("?")[1]??"").get("sec");let n=a&&["projects","floors","connections","floorplan","inventory","delivery"].includes(a)?a:"floorplan",i="all",I=await t.getSpatialTree(),x=[],w=[],W=[],L=null,R=!1,M=!1,H=null,G=null,U=null,P="",O="";async function D(){O="";const[q,ee,K,c]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(d.floorId).catch(()=>[]),t.listConnections(d.projectId),t.listDeliveryBatches(d.floorId)]);I=q,x=ee,w=K,W=c,x.some(C=>C.id===L)||(L=x[0]?.id??null),R=x.find(C=>C.id===L)?.physicalInstalled??!1,A()}function Q(q){O="",q.connectivity==="offline"?O=`单机回读自检未通过（FAIL）：「${q.name}」当前离线，请先在「网关与数据健康」核查 ${q.hardwareBinding?.networkAddress??"-"} 链路状态。`:P=`单机回读自检通过（PASS）：「${q.name}」指令下发 → 状态回读一致 → 已安全自动恢复原工况。`,A()}function Z(){O="";const q=x.filter(g=>g.connectivity==="offline"),ee=x.length-q.length,K=new Date,c=String(K.getHours()).padStart(2,"0"),v=String(K.getMinutes()).padStart(2,"0"),C=String(K.getSeconds()).padStart(2,"0");U={ranAt:`${c}:${v}:${C}`,total:x.length,passed:ee,failed:q.length,failedNames:q.map(g=>g.name)},q.length>0?O=`全层批量自检（FTT）完成：${ee}/${x.length} 台通过，${q.length} 台失败（${q.map(g=>g.name).join("、")}），其余设备已安全复位。`:P=`全层批量自检（FTT）全部通过：${ee}/${x.length} 台设备指令下发、状态回读一致并已安全复位。`,A()}function A(){const q=x.find(s=>s.id===L)??null,ee=l.scope.canEditDeployment,K=w.reduce((s,f)=>s+f.collectedPoints,0),c=w.reduce((s,f)=>s+f.calculatedPoints,0),v=w.filter(s=>s.status==="connected").length,C=w.filter(s=>s.status!=="connected"),g=x.filter(s=>!!s.planPoint).length,z=x.filter(s=>s.physicalInstalled).length,Y=x.length-z,S=x.length-g,b=x.filter(s=>i==="unverified"?!s.physicalInstalled:i==="unplaced"?!s.planPoint:!0),h=I.buildings.find(s=>s.id===d.buildingId),T=I.floors.filter(s=>s.buildingId===d.buildingId),o=I.zones.filter(s=>s.floorId===d.floorId);e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">系统部署</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">当前试点：广实2号园 / E栋 7F</span>
              <span class="pacom-badge ${ee?"pacom-badge--online":"pacom-badge--warning"}">
                ${ee?"可编辑部署与硬件绑定":"只读权限（写入将被服务端 403 拦截）"}
              </span>
            </div>
          </div>
        </header>

        ${P?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${P}</span></div>`:""}
        ${O?`<div class="pacom-alert-banner">${O}</div>`:""}

        <div class="lov-subnav-layout">
          <nav class="lov-subnav-rail lov-subnav-rail--compact" style="width:172px;" aria-label="工程部署阶段导轨">
            ${gt.map(s=>`
              <div class="lov-subnav-group">
                <div class="lov-subnav-group-title">${s.group}</div>
                ${s.items.map(f=>`
                    <button type="button" class="lov-subnav-item" aria-current="${n===f.id?"true":"false"}" data-dsec="${f.id}">
                      <span>${f.label}</span>
                      ${f.id==="connections"&&C.length>0?`<span class="pacom-badge pacom-badge--warning">${C.length}</span>`:""}
                      ${f.id==="floorplan"&&Y>0?`<span class="pacom-badge pacom-badge--neutral">${Y}</span>`:""}
                    </button>`).join("")}
              </div>`).join("")}
          </nav>

          <div class="lov-subnav-main" style="${n==="floorplan"?"overflow:hidden; padding:0;":"padding:4px 4px 24px;"}">
            ${n==="floorplan"?`
                <section class="pacom-split" style="height:100%;">
                  <aside class="pacom-left-pane" style="--pacom-sidebar-width:288px; min-width:268px;">
                    <div class="pacom-pane-toolbar">
                      <div style="font-weight:500;">E7F 图纸标点与四态绑定（${x.length}）</div>
                      <div class="pacom-row-sub">图上放点仅更新坐标，绝不自动改写物理安装态或硬件绑定。</div>
                      <div class="lov-count-pills" role="group" aria-label="筛选核验状态">
                        <button type="button" class="lov-count-pill" style="height:26px; font-size:12px;" aria-pressed="${i==="all"}" data-dev-filter="all">
                          <span>全部</span><span class="lov-count-num">${x.length}</span>
                        </button>
                        <button type="button" class="lov-count-pill" style="height:26px; font-size:12px;" aria-pressed="${i==="unverified"}" data-dev-filter="unverified">
                          <span>待复核</span><span class="lov-count-num">${Y}</span>
                        </button>
                        <button type="button" class="lov-count-pill" style="height:26px; font-size:12px;" aria-pressed="${i==="unplaced"}" data-dev-filter="unplaced">
                          <span>未标点</span><span class="lov-count-num">${S}</span>
                        </button>
                      </div>
                    </div>
                    <div class="pacom-list">
                      ${b.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">该筛选条件下无设备</div>':b.map(s=>`
                                <div class="pacom-row ${s.id===L?"is-selected":""}" data-pick-dev="${s.id}">
                                  <div style="min-width:0;">
                                    <div class="pacom-row-title">${s.name}</div>
                                    <div class="pacom-row-sub">v${s.version} · ${s.hardwareBinding?.protocol.toUpperCase()??"未绑定"} · ${s.physicalInstalled?"物理已复核":"待物理复核"}</div>
                                  </div>
                                  <span class="pacom-badge ${s.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">
                                    ${s.planPoint?`${Math.round(s.planPoint.x*100)}%,${Math.round(s.planPoint.y*100)}%`:"未标点"}
                                  </span>
                                </div>`).join("")}
                    </div>
                    ${q?`
                        <form data-role="binding-form" style="padding:14px 16px; border-top:var(--hw) solid var(--pacom-border-subtle); background:var(--pacom-surface-primary); display:flex; flex-direction:column; gap:10px;">
                          <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-weight:500; font-size:13px;">显式硬件绑定与现场复核</span>
                            <span class="pacom-badge pacom-badge--neutral">${q.id}</span>
                          </div>
                          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                            <select class="pacom-select" name="protocol" aria-label="通信协议">
                              ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(s=>`<option value="${s}" ${q.hardwareBinding?.protocol===s?"selected":""}>${s.toUpperCase()}</option>`).join("")}
                            </select>
                            <input class="pacom-input" name="networkAddress" placeholder="网络地址/主题" value="${q.hardwareBinding?.networkAddress??""}" aria-label="网络地址" />
                          </div>
                          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                            <input class="pacom-input" name="portOrChannel" placeholder="端口/回路" value="${q.hardwareBinding?.portOrChannel??""}" aria-label="端口或回路" />
                            <div style="display:inline-flex; align-items:center; gap:6px; flex-shrink:0;">
                              <span class="pacom-row-sub">物理已复核</span>
                              <button type="button" class="lov-switch" role="switch" aria-checked="${R}" data-toggle-phys="1" aria-label="现场物理安装已复核" ${ee?"":"disabled"}>
                                <span class="lov-switch-thumb"></span>
                              </button>
                            </div>
                          </div>
                          <div style="display:flex; gap:6px; flex-wrap:wrap;">
                            <button class="pacom-btn" type="button" data-toggle-place="1">${M?"取消标点":"点图更新坐标"}</button>
                            <button class="pacom-btn" type="button" data-ftt-test="1" title="验证指令下发、回读并自动复位">单机自检</button>
                            <button class="pacom-btn pacom-btn--primary" type="submit" style="flex:1;" ${ee?"":"disabled"}>保存绑定（v${q.version}）</button>
                          </div>
                        </form>`:""}
                  </aside>
                  <div class="pacom-splitter"></div>
                  <main class="pacom-right-pane">
                    <div class="pacom-canvas-stage" data-role="deploy-stage" style="cursor:${M?"crosshair":"default"};">
                      <div class="pacom-canvas-viewport">
                        <div class="pacom-plan-wrap" data-role="deploy-plan">
                          <img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 部署平面图" />
                          ${x.filter(s=>s.planPoint).map(s=>`
                              <button type="button" class="pacom-pin ${s.id===L?"is-selected":""} ${s.connectivity==="offline"?"pacom-pin--offline":""}"
                                style="left:${(s.planPoint.x*100).toFixed(2)}%; top:${(s.planPoint.y*100).toFixed(2)}%;"
                                data-pick-dev="${s.id}" title="${s.name}">
                                <span class="pacom-dot ${s.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                <span>${$t(s)}</span>
                              </button>`).join("")}
                        </div>
                      </div>
                      ${M&&q?`<div style="position:absolute; top:16px; left:16px; z-index:8;" class="pacom-badge pacom-badge--accent">标点模式：点击图纸任意位置更新「${q.name}」的 2D 坐标（不改动硬件绑定）</div>`:""}
                    </div>
                  </main>
                </section>`:n==="projects"?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">项目与楼宇归属配置</h2>
                      <span class="pacom-row-sub">共 ${I.projects.length} 个授权项目 · ${I.buildings.length} 栋楼宇</span>
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                      ${I.projects.map(s=>{const f=I.buildings.filter(B=>B.projectId===s.id);return`
                            <div class="pacom-card" style="padding:16px; gap:10px;">
                              <img src="${s.imageUrl??"./media/gzlab.jpg"}" alt="${s.name}" style="width:100%; height:132px; object-fit:cover; border-radius:10px;" />
                              <div>
                                <strong style="font-size:15px; font-weight:500;">${s.name}</strong>
                                <div class="pacom-row-sub">${s.city??""} ${s.address??""} · ${f.length} 栋楼宇</div>
                              </div>
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                ${f.map(B=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${B.name}</strong> · 地上 ${B.aboveFloors}F / ${B.areaSqm??"-"} m²</span>
                                      <span class="pacom-badge ${B.id===d.buildingId?"pacom-badge--accent":"pacom-badge--neutral"}">${B.id===d.buildingId?"含 E7F 试点":"对照楼宇"}</span>
                                    </div>`).join("")}
                              </div>
                            </div>`}).join("")}
                    </div>
                  </section>`:n==="floors"?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">${h?.name??"E栋"} 楼层与 2D 图纸清单</h2>
                        <span class="pacom-row-sub">共登记 ${T.length} 个楼层</span>
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
                              ${T.map(s=>{const f=s.id===d.floorId,B=l.scope.allowedFloorIds.includes(s.id);return`
                                    <tr>
                                      <td><strong>${h?.name??""} ${s.name}</strong></td>
                                      <td><span class="pacom-badge ${s.plan?"pacom-badge--online":"pacom-badge--neutral"}">${s.plan?"已上传 2D 图纸":"待上传图纸"}</span></td>
                                      <td>${f?`${x.length} 台设备 · ${o.length} 个功能区`:"-"}</td>
                                      <td><span class="pacom-badge ${B?"pacom-badge--accent":"pacom-badge--warning"}">${B?"已授权":"未授权"}</span></td>
                                      <td style="text-align:right;">
                                        ${f?'<button type="button" class="pacom-btn" data-dsec="floorplan">去标点与绑定 →</button>':'<span class="pacom-row-sub">暂未入网</span>'}
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
                              ${o.map(s=>{const f=x.filter(de=>de.logicalZoneId===s.id),B=f.filter(de=>de.physicalInstalled).length;return`
                                    <tr>
                                      <td><strong>${s.name.replace(/^7F\s*/,"")}</strong></td>
                                      <td>${f.length} 台</td>
                                      <td><span class="pacom-badge ${B===f.length?"pacom-badge--online":"pacom-badge--warning"}">${B} / ${f.length} 已复核</span></td>
                                    </tr>`}).join("")}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>

                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">E7F 竣工图纸与设备手册附件</h2>
                        <span class="pacom-row-sub">共 ${De.length} 份关联工程文档（支持按空间与设备查阅）</span>
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
                              ${De.map(s=>`
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
                          <div class="lov-kpi-value">${v}<span class="lov-kpi-unit">/ ${w.length}</span></div>
                          <span class="lov-kpi-delta">边缘网关在线监控</span>
                        </div>
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">数据采集健康度</span>
                          <div class="lov-kpi-value">${w.length>0?Math.round(v/w.length*100):100}<span class="lov-kpi-unit">%</span></div>
                          <span class="lov-kpi-delta">区分设备真故障与断流</span>
                        </div>
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">原始采集点</span>
                          <div class="lov-kpi-value">${K}<span class="lov-kpi-unit">点</span></div>
                          <span class="lov-kpi-delta">协议直采实时遥测</span>
                        </div>
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">衍生计算点</span>
                          <div class="lov-kpi-value">${c}<span class="lov-kpi-unit">点</span></div>
                          <span class="lov-kpi-delta">能碳与聚合虚拟点位</span>
                        </div>
                      </div>

                      ${C.length>0?`
                          <div class="lov-banner lov-banner--critical">
                            <div class="lov-banner-text">
                              <span class="lov-banner-title">检测到 ${C.length} 条采集通道通信降级（${C.map(s=>s.name).join("、")}）</span>
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
                                ${w.map(s=>{const f=bt[s.status]??{label:s.status,cls:"pacom-badge--neutral"},B=s.status==="connected"?98:s.status==="degraded"?62:0,de=B>=75?"var(--pacom-status-online)":B>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",V=G===s.id,pe=V?yt(s,x):[];return`
                                      <tr>
                                        <td><strong>${s.name}</strong></td>
                                        <td><span class="pacom-badge pacom-badge--neutral">${s.protocol.toUpperCase()}</span></td>
                                        <td><code style="font-size:12px;">${s.endpoint}</code></td>
                                        <td>采集 ${s.collectedPoints} / 计算 ${s.calculatedPoints}</td>
                                        <td style="min-width:130px;">
                                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                                            <span class="pacom-badge ${f.cls}">${f.label}</span>
                                            <span class="pacom-row-sub">${B}%</span>
                                          </div>
                                          <div class="lov-progress-track"><div class="lov-progress-fill" style="width:${B}%; background:${de};"></div></div>
                                        </td>
                                        <td>
                                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                                            <button type="button" class="pacom-btn" data-expand-conn="${s.id}">${V?"收起点位":"点位质量"}</button>
                                            <button type="button" class="pacom-btn" data-ping-conn="${s.id}">测试连通</button>
                                            <button type="button" class="pacom-btn pacom-btn--ghost" data-copy-endpoint="${s.id}" data-endpoint-val="${s.endpoint}">
                                              ${H===s.id?"已复制":"复制端点"}
                                            </button>
                                          </div>
                                        </td>
                                      </tr>
                                      ${V?`
                                          <tr>
                                            <td colspan="6" style="background:var(--pacom-surface-secondary); padding:12px 16px;">
                                              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                                                <span style="font-size:12px; font-weight:500;">传感器级点位数据质量明细（${s.name}）</span>
                                                <span class="pacom-row-sub">在线正常 · 延迟 &gt;30 分钟（Delayed） · 断流 &gt;3×采集间隔（Offline）</span>
                                              </div>
                                              <div style="display:flex; flex-direction:column; gap:6px;">
                                                ${pe.map(k=>`
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
                        ${U?`
                            <div class="lov-banner ${U.failed===0?"lov-banner--ok":"lov-banner--critical"}">
                              <div class="lov-banner-text">
                                <span class="lov-banner-title">批量功能自检（FTT）摘要 · ${U.ranAt}</span>
                                <span class="lov-banner-sub">共检测 ${U.total} 台：通过 ${U.passed} 台，异常 ${U.failed} 台${U.failedNames.length>0?`（${U.failedNames.join("、")}）`:"，全部设备已自动复位"}</span>
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
                                  ${x.map(s=>{const f=(s.logicalZoneId?ft[s.logicalZoneId]:void 0)??"E7F";return`
                                        <tr>
                                          <td>
                                            <div style="font-weight:500;">${s.name}</div>
                                            <div class="pacom-row-sub">${f} · v${s.version}</div>
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
                            <div class="lov-kpi-value">${g}<span class="lov-kpi-unit">/ ${x.length}</span></div>
                            <span class="lov-kpi-delta" style="display:inline-flex; align-items:center; gap:4px;">${S===0?`${ne("check",12)} 全部设备已完成标点`:`尚差 ${S} 台未标点 →`}</span>
                          </button>
                          <button type="button" class="lov-kpi-cell ${Y===0?"lov-gate-ok":"lov-gate-warn"}" data-dsec="inventory" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">2. 物理安装复核</span>
                            <div class="lov-kpi-value">${z}<span class="lov-kpi-unit">/ ${x.length}</span></div>
                            <span class="lov-kpi-delta" style="display:inline-flex; align-items:center; gap:4px; ${Y>0?"color:var(--pacom-status-warning);":""}">${Y===0?`${ne("check",12)} 现场复核全绿`:`待复核 ${Y} 台，点击查看 →`}</span>
                          </button>
                          <button type="button" class="lov-kpi-cell ${C.length===0?"lov-gate-ok":"lov-gate-warn"}" data-dsec="connections" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">3. 网关通道连通</span>
                            <div class="lov-kpi-value">${v}<span class="lov-kpi-unit">/ ${w.length}</span></div>
                            <span class="lov-kpi-delta" style="display:inline-flex; align-items:center; gap:4px; ${C.length>0?"color:var(--pacom-status-warning);":""}">${C.length===0?`${ne("check",12)} 全部通道健康`:`${C.length} 条通道降级，点击排查 →`}</span>
                          </button>
                          <button type="button" class="lov-kpi-cell ${U&&U.failed===0?"lov-gate-ok":"lov-gate-warn"}" data-batch-ftt="1" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">4. 批量功能自检（FTT）</span>
                            <div class="lov-kpi-value">${U?U.passed:x.filter(s=>s.connectivity==="online").length}<span class="lov-kpi-unit">/ ${x.length}</span></div>
                            <span class="lov-kpi-delta" style="display:inline-flex; align-items:center; gap:4px; ${U&&U.failed>0?"color:var(--pacom-status-warning);":""}">${U?U.failed===0?`${ne("check",12)} 已于 ${U.ranAt} 全绿通过`:`${U.failed} 台未通过，点击复检 →`:"点击发起全层批量自检 →"}</span>
                          </button>
                        </div>

                        <section class="lov-section">
                          <div class="lov-section-head">
                            <div>
                              <h2 class="lov-section-title">E7F 交付冻结批次</h2>
                              ${Y>0||C.length>0?`<span class="pacom-row-sub">当前尚有 ${Y} 台待复核与 ${C.length} 条降级链路，仍可生成阶段快照</span>`:""}
                            </div>
                            <div style="display:flex; gap:8px; flex-wrap:wrap;">
                              <button type="button" class="pacom-btn" data-batch-ftt="1">一键全层批量自检（FTT）</button>
                              <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${ee?"":"disabled"}>+ 新建交付冻结快照</button>
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
                                  ${W.map(s=>`
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
                                        <td><span class="pacom-badge pacom-badge--accent">${ht[s.status]??s.status}</span></td>
                                      </tr>`).join("")}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </section>`}
          </div>
        </div>
      </div>
    `,e.querySelectorAll("[data-dsec]").forEach(s=>{s.addEventListener("click",()=>{const f=s.dataset.dsec;f&&(n=f,P="",O="",A())})}),e.querySelectorAll("[data-dev-filter]").forEach(s=>{s.addEventListener("click",()=>{i=s.dataset.devFilter??"all",A()})}),e.querySelectorAll("[data-pick-dev]").forEach(s=>{s.addEventListener("click",()=>{L=s.dataset.pickDev??null,R=x.find(B=>B.id===L)?.physicalInstalled??!1,A()})}),e.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{R=!R,A()}),e.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{M=!M,A()}),e.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{q&&Q(q)}),e.querySelectorAll("[data-ftt-dev]").forEach(s=>{s.addEventListener("click",()=>{const f=x.find(B=>B.id===s.dataset.fttDev);f&&Q(f)})}),e.querySelectorAll("[data-batch-ftt]").forEach(s=>{s.addEventListener("click",()=>{Z()})}),e.querySelectorAll("[data-expand-conn]").forEach(s=>{s.addEventListener("click",()=>{const f=s.dataset.expandConn??null;G=G===f?null:f,A()})}),e.querySelectorAll("[data-preview-doc]").forEach(s=>{s.addEventListener("click",()=>{const f=De.find(B=>B.id===s.dataset.previewDoc);f&&(O="",P=`已调阅工程附件「${f.name}」（关联范围：${f.boundScope}，更新于 ${f.updatedAt}）。`,A())})}),e.querySelectorAll("[data-ping-conn]").forEach(s=>{s.addEventListener("click",()=>{const f=w.find(B=>B.id===s.dataset.pingConn);f&&(O="",f.status==="connected"?P=`连通性测试通过：「${f.name}」（${f.endpoint}）响应正常，延迟 18 ms。`:O=`连通性测试异常：「${f.name}」（${f.endpoint}）超时无应答，建议排查边缘网关端口与 RS485 链路。`,A())})}),e.querySelectorAll("[data-copy-endpoint]").forEach(s=>{s.addEventListener("click",async()=>{const f=s.dataset.endpointVal??"",B=s.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(f),H=B,A(),window.setTimeout(()=>{H=null,A()},1600)}catch{}})}),e.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async s=>{if(!M||!q)return;const f=s.currentTarget.getBoundingClientRect(),B=Math.max(.02,Math.min(.98,(s.clientX-f.left)/f.width)),de=Math.max(.02,Math.min(.98,(s.clientY-f.top)/f.height));try{await t.updateDevicePlanPoint({deviceId:q.id,floorId:d.floorId,planVersion:q.planPoint?.planVersion??1,x:B,y:de,expectedVersion:q.version}),M=!1,P=`已更新「${q.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await D()}catch(V){O=V instanceof Error?V.message:String(V),A()}}),e.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async s=>{if(s.preventDefault(),!q)return;const f=new FormData(s.currentTarget);try{await t.updateDeviceHardwareBinding({deviceId:q.id,gatewayId:q.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(f.get("protocol")),networkAddress:String(f.get("networkAddress")??""),portOrChannel:String(f.get("portOrChannel")??""),physicalInstalled:R,expectedVersion:q.version}),P=`已保存「${q.name}」的硬件绑定与物理安装复核状态。`,await D()}catch(B){O=B instanceof Error?B.message:String(B),A()}}),e.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const s=await t.freezeDeliveryBatch(d.floorId,"系统部署交付验收发起冻结");P=`已生成冻结批次 ${s.versionTag}（核验 ${s.verifiedCount}/${s.deviceCount}）。`,await D()}catch(s){O=s instanceof Error?s.message:String(s),A()}})}await D()}function Be(e){if(e.connectivity==="offline")return`${e.name.includes("VAV")?"VAV-02":e.name.slice(0,6)} 离线`;if(e.category==="lighting"){const t=e.name.includes("702")?"702 照明":"主照明",l=Number(e.telemetry.dimming?.value??0);return l>0?`${t} ${l}%`:`${t} 关`}return e.category==="hvac"?`${e.name.includes("VAV")?"VAV-02":"FCU-01"} ${e.telemetry.setpoint?.value??24}°C`:e.category==="sensor"?`环境 ${e.telemetry.temp?.value??"23.4"}°C`:e.category==="gateway"?"主控网关":e.name.slice(0,6)}const qe="pacom.web.e7f.leftWidth",_e={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},xt={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},St=ne("chevron-down",12),kt={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function $(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function It(e){return e.level==="all-projects"?"all":e.level==="project"?`project:${e.projectId}`:e.level==="building"?`building:${e.projectId}:${e.buildingId}`:`floor:${e.projectId}:${e.buildingId}:${e.floorId}`}async function Et(e,t,l){const a=await t.getSpatialTree(),n=t.mode==="demo",i=l.scope.canControlDevices,I=l.scope.canManageAlarms,x=l.scope.allowedZoneIds?.length?l.scope.allowedZoneIds:null;let w={level:"floor",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId},W="devices",L="canvas",R="",M="all",H="all";const G=new URLSearchParams(window.location.hash.split("?")[1]??""),U=G.get("device"),P=G.get("zone");let O=U,D=!!U,Q="control",Z="",A=!1,q="today",ee="devices";const K=new Set,c=new Set;let v=[],C=[],g=[],z=null,Y=null,S=1,b=0,h=0,T=Number(localStorage.getItem(qe)||400);(!Number.isFinite(T)||T<320||T>680)&&(T=400);let o=null;function s(){return a.zones.filter(m=>!(w.level==="floor"&&m.floorId!==w.floorId||x&&!x.includes(m.id)))}async function f(m,j=!1){w=m,Y=null,H=j&&P?P:"all",A=!1,c.clear(),S=1,b=0,h=0,o&&(o(),o=null);const r=w.level==="floor"?w.floorId:d.floorId;if(w.level==="floor")try{const[y,E,ae]=await Promise.all([t.getFloorDevices(w.floorId),t.listAlarms(w.floorId),t.listWorkOrders(w.floorId)]);v=y,C=E,g=ae,v.some(_=>_.id===O)?j&&U&&(D=!0):(O=v[1]?.id??v[0]?.id??null,D=!1),o=t.subscribeFloorEvents(w.floorId,async _=>{_.type==="control.receipt.updated"&&z?.batchId===_.batchId&&(z=await t.getControlBatch(_.batchId)),(_.type==="telemetry.updated"||_.type==="device.connectivity")&&w.level==="floor"&&(v=await t.getFloorDevices(w.floorId)),_.type==="alarm.changed"&&w.level==="floor"&&(C=await t.listAlarms(w.floorId)),pe()})}catch(y){v=[],C=[],g=[],O=null,D=!1,Y=y instanceof Error?y.message:String(y)}else{D=!1;const[y,E,ae]=await Promise.all([t.getFloorDevices(r).catch(()=>[]),t.listAlarms(r).catch(()=>[]),t.listWorkOrders(r).catch(()=>[])]);v=y,C=E,g=ae}ce()}function B(m){return m?a.zones.find(j=>j.id===m)?.name??m:"未分配逻辑区"}function de(){const m=R.trim().toLowerCase();return v.filter(j=>H!=="all"&&j.logicalZoneId!==H||M!=="all"&&j.category!==M?!1:m?j.name.toLowerCase().includes(m)||j.id.toLowerCase().includes(m)||B(j.logicalZoneId).toLowerCase().includes(m):!0)}async function V(m,j,r){!m.length||w.level!=="floor"||!i||(m.forEach(y=>K.add(y)),z=await t.dispatchControlBatch({floorId:w.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:m.map(y=>({deviceId:y,command:j,targetValue:r}))}),pe())}function pe(){const m=document.activeElement,j=m?.dataset?.role,r=m&&"selectionStart"in m?m.selectionStart:null,y=m&&"selectionEnd"in m?m.selectionEnd:null,E=e.querySelector(".pacom-list")?.scrollTop??0;ce();const ae=e.querySelector(".pacom-list");if(ae&&(ae.scrollTop=E),j==="search"){const _=e.querySelector('[data-role="search"]');_&&(_.focus(),r!==null&&y!==null&&_.setSelectionRange(r,y))}}function k(){const m=e.querySelector('[data-role="canvas-viewport"]');m&&(m.style.transform=`translate(${b}px, ${h}px) scale(${S})`);const j=e.querySelector('[data-role="canvas-hint"]');j&&(j.textContent=`缩放 ${Math.round(S*100)}% · 滚轮缩放 · 拖动平移 · 双击复位`)}function ie(){return w.level==="floor"?`building:${w.projectId}:${w.buildingId}`:w.level==="building"?`project:${w.projectId}`:w.level==="project"?"all":null}function p(){const m=It(w),j=a.projects.map(E=>`<option value="project:${$(E.id)}" ${m===`project:${E.id}`?"selected":""}>项目 · ${$(E.name)}</option>`).join(""),r=a.buildings.map(E=>{const ae=`building:${E.projectId}:${E.id}`;return`<option value="${$(ae)}" ${m===ae?"selected":""}>楼宇 · 广实2号园 / ${$(E.name)}</option>`}).join(""),y=a.floors.map(E=>{const ae=l.scope.allowedFloorIds.includes(E.id),_=`floor:${d.projectId}:${E.buildingId}:${E.id}`;return`<option value="${$(_)}" ${m===_?"selected":""}>楼层 · 广实2号园 / E栋 / ${$(E.name)}${ae?"":"（未授权）"}</option>`}).join("");return`
      <option value="all" ${m==="all"?"selected":""}>全部项目（${a.projects.length} 个授权园区）</option>
      <optgroup label="项目级">${j}</optgroup>
      <optgroup label="楼宇级">${r}</optgroup>
      <optgroup label="楼层级">${y}</optgroup>
    `}function u(){if(w.level==="all-projects"){const j=v.filter(y=>y.connectivity==="online").length,r=C.filter(y=>y.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">授权项目总览（${a.projects.length}）</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">楼宇</span><strong>${a.buildings.length} 栋</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线</span><strong>${j}/${v.length}</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:var(--pacom-status-warning);">${r} 条</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${a.projects.map(y=>{const E=a.buildings.filter(ae=>ae.projectId===y.id).length;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="project:${$(y.id)}">
                  <img src="${$(y.imageUrl??"./media/gzlab.jpg")}" alt="${$(y.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${$(y.name)}</strong>
                    <span class="pacom-badge pacom-badge--accent">${E} 栋楼宇</span>
                  </div>
                  <div class="pacom-row-sub">${$(y.city??"")} · ${$(y.address??"")}</div>
                </article>`}).join("")}
        </div>
      `}const m=w;if(m.level==="project"){const j=a.projects.find(_=>_.id===m.projectId),r=a.buildings.filter(_=>_.projectId===m.projectId),y=v.filter(_=>_.connectivity==="online").length,E=v.length?Math.round(y/v.length*100):100,ae=C.filter(_=>_.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${$(j?.name??"园区")} · 楼宇绩效（${r.length}）</div>
          <div class="pacom-row-sub">${$(j?.city??"")} ${$(j?.address??"")}</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">在线率</span><strong>${E}%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:${ae>0?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${ae} 条</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>1,248 kWh</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${r.map(_=>{const F=_.id===d.buildingId;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="building:${$(_.projectId)}:${$(_.id)}">
                  <img src="${$(_.imageUrl??"./media/building-e.png")}" alt="${$(_.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${$(_.name)}</strong>
                    <span class="pacom-badge ${F?"pacom-badge--online":"pacom-badge--neutral"}">${F?`在线 ${E}% · 告警 ${ae}`:"运行平稳"}</span>
                  </div>
                  <div class="pacom-row-sub">地上 ${_.aboveFloors} 层 · 面积 ${_.areaSqm??"-"} m² · 舒适度达标 96%</div>
                </article>`}).join("")}
        </div>
      `}if(m.level==="building"){const j=a.buildings.find(F=>F.id===m.buildingId),r=a.floors.filter(F=>F.buildingId===m.buildingId),y=g.filter(F=>F.status!=="closed"&&F.status!=="resolved"),E=v.filter(F=>F.connectivity==="online").length,ae=v.length?Math.round(E/v.length*100):100,_=C.filter(F=>F.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${$(j?.name??"楼宇")} 运行概况</div>
          <div class="pacom-row-sub">地上 ${j?.aboveFloors??0} 层 · 面积 ${j?.areaSqm??"-"} m²</div>
          <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线率</span><strong>${ae}%（${E}/${v.length}）</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">舒适度达标</span><strong>96.2%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>418 kWh</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">告警 / 工单</span><strong style="color:var(--pacom-status-warning);">${_} 告警 · ${y.length} 工单</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:8px; padding:12px;">
          <div style="font-weight:500; font-size:13px;">楼层列表（点击进入 2D 平面控制）</div>
          ${r.length?r.map(F=>{const X=l.scope.allowedFloorIds.includes(F.id),se=F.id===d.floorId;return`
                      <div class="pacom-row" data-nav-scope="floor:${$(m.projectId)}:${$(m.buildingId)}:${$(F.id)}">
                        <div>
                          <div class="pacom-row-title">${$(j?.name??"")} ${$(F.name)}</div>
                          <div class="pacom-row-sub">${F.plan?"2D 平面图就绪":"暂未上传图纸"}${se&&_>0?` · ${_} 条待处理告警`:""}</div>
                        </div>
                        <span class="pacom-badge ${X?"pacom-badge--online":"pacom-badge--warning"}">${X?"进入楼层":"无权限"}</span>
                      </div>`}).join(""):'<div class="pacom-row-sub">该楼宇暂未配置试点楼层。</div>'}
        </div>
      `}if(W==="devices"){const j=de(),r=s(),y=Array.from(c);return`
        <div class="pacom-pane-toolbar">
          ${x?`<div class="pacom-info-banner">我的区域视图：仅显示当前账号获授权的 ${x.length} 个功能区及设备。</div>`:""}
          <div class="pacom-search-row">
            <input class="pacom-input" name="deviceSearch" data-role="search" placeholder="搜索设备名 / ID / 区域…" value="${$(R)}" aria-label="搜索楼层设备" />
            <select class="pacom-select" name="deviceCategory" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${M==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${M==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${M==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${M==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${M==="gateway"?"selected":""}>网关</option>
            </select>
          </div>
          ${r.length>0&&!Y?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${H==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${r.map(E=>`<button type="button" class="pacom-zone-pill ${H===E.id?"is-active":""}" data-filter-zone="${$(E.id)}">${$(E.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; color:var(--pacom-text-secondary);">
            <span>当前可见 ${j.length} 台设备</span>
            <span>${i?`已勾选 ${y.length} 台`:"只读模式"}</span>
          </div>
        </div>
        <div class="pacom-list">
          ${Y?`<div class="pacom-alert-banner">${$(Y)}</div>`:j.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">没有匹配的设备</div>':j.map(E=>{const ae=E.id===O&&D,_=c.has(E.id),F=E.connectivity==="offline",X=F?"pacom-dot--critical":"pacom-dot--online",se=F?"离线 · 无遥测":E.category==="lighting"?`亮度 ${E.telemetry.dimming?.value??"--"}%`:E.category==="hvac"?`设定 ${E.telemetry.setpoint?.value??"--"}°C`:E.category==="sensor"?`${E.telemetry.temp?.value??"--"}°C · CO₂ ${E.telemetry.co2?.value??"--"}`:E.hardwareBinding?.networkAddress??"未绑定";return`
                        <div class="pacom-row ${ae?"is-selected":""}" data-select-device="${$(E.id)}">
                          <div class="pacom-row-main">
                            ${i?`<input type="checkbox" name="devCheck-${$(E.id)}" data-check-device="${$(E.id)}" ${_?"checked":""} style="margin-top:3px;" aria-label="勾选 ${$(E.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title">${$(E.name)}</div>
                              <div class="pacom-row-sub">${$(B(E.logicalZoneId))} · ${$(_e[E.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${F?"pacom-badge--critical":"pacom-badge--online"}">
                            <span class="pacom-dot ${X}"></span>${$(se)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${i&&y.length>0?`
            <div class="pacom-batch-bar">
              <span style="font-size:12px;">显式批量目标：<strong>${y.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(W==="zones"){const j=s(),r={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">E7F 功能区快控（${j.length}）</div>
          <div class="pacom-row-sub">点击卡片同步高亮右侧平面图热区，支持按区域一键批量控制。</div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${j.map(y=>{const E=v.filter(se=>se.logicalZoneId===y.id),ae=E.filter(se=>se.connectivity==="online").length,_=E.filter(se=>se.category==="lighting"||se.category==="hvac").length,F=H===y.id,X=r[y.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${F?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${F?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${$(F?"all":y.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:14px; font-weight:500;">${$(y.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${ae}/${E.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时温度 ${X.temp} · 占用 ${X.occ}</div>
                  ${_>0?`
                      <div style="display:flex; gap:6px; margin-top:2px;">
                        <button type="button" class="pacom-btn" data-zone-power="${$(y.id)}" data-zone-val="true" ${i?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" data-zone-power="${$(y.id)}" data-zone-val="false" ${i?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">该区域为弱电/网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-pane-toolbar">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-weight:500;">本层告警快览（${C.length}）</span>
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-alarms="1">前往告警中心 →</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:12px;">
        ${C.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">当前楼层无活跃告警</div>':C.map(j=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${$(j.title)}</strong>
                      <span class="pacom-badge ${j.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${j.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${$(j.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" data-locate-device="${$(j.deviceId)}">定位设备</button>
                      ${j.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" data-ack-alarm="${$(j.id)}" ${I?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function N(){const m=w,j=v.filter(F=>F.connectivity==="online").length,r=v.length?Math.round(j/v.length*100):100,y=C.filter(F=>F.status==="active").length;if(m.level==="all-projects"||m.level==="project"){const F=m.level==="project"?a.projects.find(se=>se.id===m.projectId):a.projects[0],X=a.buildings.filter(se=>!F||se.projectId===F.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:24px; cursor:default;">
          <div style="position:relative; width:min(760px, 94%); border-radius:16px; overflow:hidden; box-shadow:0 12px 32px rgba(15,23,42,0.14); background:#fff;">
            <img src="${$(F?.imageUrl??"./media/gzlab.jpg")}" alt="园区俯瞰" style="width:100%; height:440px; object-fit:cover; display:block;" />
            ${m.level==="all-projects"?a.projects.map((se,J)=>`
                      <button type="button" class="pacom-pin is-selected" style="left:${J===0?48:26}%; top:${J===0?52:34}%;" data-nav-scope="project:${$(se.id)}">
                        <span class="pacom-dot pacom-dot--online"></span>
                        <span>${$(se.name)}</span>
                      </button>`).join(""):X.map((se,J)=>{const ge=se.id===d.buildingId;return`
                        <button type="button" class="pacom-pin ${ge?"is-selected":""}" style="left:${J===0?56:38}%; top:${J===0?44:62}%;" data-nav-scope="building:${$(se.projectId)}:${$(se.id)}">
                          <span class="pacom-dot ${ge&&y>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                          <span>${$(se.name)} · ${ge?`在线 ${r}% · 告警 ${y}`:"运行平稳"}</span>
                        </button>`}).join("")}
          </div>
        </div>
      `}if(m.level==="building"){const F=a.buildings.find(J=>J.id===m.buildingId),X=a.floors.filter(J=>J.buildingId===m.buildingId),se=X.find(J=>J.id===d.floorId)??X[0];return`
        ${X.length?`
            <nav class="pacom-floor-rail" aria-label="整栋楼层选择轨道">
              <button type="button" class="pacom-floor-btn is-active" title="整栋视图">栋</button>
              ${X.map(J=>{const ge=l.scope.allowedFloorIds.includes(J.id),fe=J.id===d.floorId&&y>0;return`<button type="button" class="pacom-floor-btn ${ge?"":"is-locked"}" data-nav-scope="floor:${$(m.projectId)}:${$(m.buildingId)}:${$(J.id)}" title="${$(J.name)}${fe?`（${y} 条待处理告警）`:""}">${$(J.name.replace("F",""))}${fe?'<span class="pacom-floor-alert-dot"></span>':""}</button>`}).join("")}
            </nav>`:""}
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:24px; cursor:default;">
          <img class="pacom-plan-img" src="${$(F?.imageUrl??"./media/building-e.png")}" alt="${$(F?.name??"楼宇")} 整栋实景图" style="max-height:72vh;" />
        </div>
        ${se?`<div style="position:absolute; right:16px; bottom:16px; z-index:6;">
                <button type="button" class="pacom-btn pacom-btn--primary" data-nav-scope="floor:${$(m.projectId)}:${$(m.buildingId)}:${$(se.id)}">进入 ${$(F?.name??"")} ${$(se.name)} 2D 控图 →</button>
              </div>`:""}
      `}const E=a.floors.find(F=>F.id===m.floorId),ae=a.floors.filter(F=>F.buildingId===m.buildingId),_=s();return`
      <nav class="pacom-floor-rail" aria-label="楼层选择轨道">
        <button type="button" class="pacom-floor-btn" data-nav-scope="building:${$(m.projectId)}:${$(m.buildingId)}" title="返回整栋楼宇">栋</button>
        ${ae.map(F=>{const X=l.scope.allowedFloorIds.includes(F.id),se=F.id===d.floorId&&y>0;return`<button type="button" class="pacom-floor-btn ${F.id===m.floorId?"is-active":""} ${X?"":"is-locked"}"
              data-nav-scope="floor:${$(m.projectId)}:${$(m.buildingId)}:${$(F.id)}" title="${$(F.name)}${X?se?` · ${y} 条告警`:"":"（无权限）"}">
              ${$(F.name.replace("F",""))}
              ${se?'<span class="pacom-floor-alert-dot"></span>':""}
            </button>`}).join("")}
      </nav>

      <div class="pacom-canvas-tools" aria-label="画布工具">
        <button type="button" class="pacom-tool-btn" data-zoom="reset" title="复位视图" aria-label="复位视图">${ne("rotate-ccw",16)}</button>
        <div class="pacom-tool-divider" aria-hidden="true"></div>
        <button type="button" class="pacom-tool-btn" data-zoom="in" title="放大" aria-label="放大">${ne("plus",16)}</button>
        <button type="button" class="pacom-tool-btn" data-zoom="out" title="缩小" aria-label="缩小">${ne("minus",16)}</button>
      </div>

      ${Y?"":`
        <div class="lov-layer-bar" role="group" aria-label="平面图图层切换">
          <button type="button" class="lov-layer-btn" aria-pressed="${ee==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${ee==="temp"}" data-canvas-layer="temp">温度热区</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${ee==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
        </div>`}

      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${Y?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${$(Y)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${b}px, ${h}px) scale(${S});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${$(E?.plan?.imageUrl??"./media/7F.webp")}" alt="E栋 ${$(E?.name??"7F")} 平面图" />
                  ${_.map((F,X)=>{const se=kt[F.id];if(!se)return"";const J=H===F.id,ge=["23.2°C","24.6°C","22.8°C","23.9°C"],fe=["有人 74%","会议中","有人 52%","空闲"],Se=ee==="temp"?` · ${ge[X%ge.length]}`:ee==="occupancy"?` · ${fe[X%fe.length]}`:"",oe=ee==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":ee==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${J?"is-active":""}"
                          style="left:${se.left}%; top:${se.top}%; width:${se.width}%; height:${se.height}%; ${J?"":oe}"
                          data-filter-zone="${$(J?"all":F.id)}"
                          title="${$(F.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${$(F.name.replace(/^7F\s*/,""))}${Se}</span>
                        </button>`}).join("")}
                  ${v.filter(F=>F.planPoint).map(F=>{const X=C.some(Se=>Se.deviceId===F.id&&Se.status==="active"),se=W==="alarms",J=H!=="all"&&F.logicalZoneId!==H||se&&!X,ge=se&&X?"background:var(--pacom-status-critical);":"",fe=F.category==="gateway"?Math.min(92,F.planPoint.y*100+5.5):F.planPoint.y*100;return`
                        <button type="button" class="pacom-pin ${F.id===O&&D?"is-selected":""} ${F.connectivity==="offline"?"pacom-pin--offline":""} ${J?"pacom-pin--dimmed":""}"
                          style="left:${(F.planPoint.x*100).toFixed(2)}%; top:${fe.toFixed(2)}%; ${ge}"
                          data-pin-device="${$(F.id)}" title="${$(F.name)}">
                          <span class="pacom-dot ${X?"pacom-dot--critical":F.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${$(Be(F))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>

      ${Y?"":`<div class="pacom-canvas-hint" data-role="canvas-hint">缩放 ${Math.round(S*100)}% · 滚轮缩放 · 拖动平移 · 双击复位</div>`}
      ${te()}
    `}function te(){if(w.level!=="floor"||!D)return"";const m=v.find(J=>J.id===O);if(!m)return"";const j=m.category==="lighting",r=m.category==="hvac",y=Number(m.telemetry.dimming?.value??50),E=Number(m.telemetry.setpoint?.value??24),ae=K.has(m.id),_=C.filter(J=>J.deviceId===m.id&&J.status==="active"),F=g.filter(J=>J.deviceId===m.id&&J.status!=="closed"),X=r?[{name:"E7F_暖通空调与末端竣工图_v2.3.pdf",tag:"竣工图纸"},{name:"FCU-01_风机盘管维保与排障手册.pdf",tag:"维保手册"}]:j?[{name:"E7F_强电照明与DALI回路拓扑.pdf",tag:"回路图纸"}]:[{name:"E7F_BACnet_Modbus_点位映射表.xlsx",tag:"点位台账"}],se=j?[{label:"当前开关",value:y>0?"开启":"关闭"},{label:"当前亮度",value:`${y}%`},{label:"实时功率",value:y>0?`${Math.round(y*1.4)} W`:"0 W"},{label:"运行模式",value:ae?"人工覆盖":"自动策略"}]:r?[{label:"室内温度",value:`${m.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${E.toFixed(1)}°C`},{label:"运行工况",value:m.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:ae?"人工覆盖":"自动策略"}]:m.category==="sensor"?[{label:"实时温度",value:`${m.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${m.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${m.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:m.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:m.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:m.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:m.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:m.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${$(m.name)}</h2>
            <div class="pacom-row-sub">${$(B(m.logicalZoneId))} · ${$(_e[m.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${m.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${m.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              ${ne("x",16)}
            </button>
          </div>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备档案分页" style="width:100%; justify-content:space-between;">
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${Q==="control"}" data-drawer-tab="control">控制与工况</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${Q==="trend"}" data-drawer-tab="trend">趋势与告警${_.length>0?` (${_.length})`:""}</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${Q==="profile"}" data-drawer-tab="profile">档案与图纸</button>
        </div>

        ${Q==="control"?`
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
              ${se.map(J=>`
                  <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                    <span class="pacom-row-sub">${J.label}</span>
                    <strong style="font-size:13px; font-weight:500;">${$(J.value)}</strong>
                  </div>`).join("")}
            </div>

            ${r?`
                <div class="lov-schematic-strip" aria-label="暖通工况简图">
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                    <span style="font-weight:500; color:var(--pacom-text-primary);">实时气流工况示意</span>
                    <span class="pacom-row-sub">${m.connectivity==="online"?"制冷运转":"通信离线"}</span>
                  </div>
                  <svg viewBox="0 0 300 44" style="width:100%; height:44px; display:block;">
                    <line x1="10" y1="22" x2="290" y2="22" stroke="oklch(85.12% 0 107)" stroke-width="2" stroke-dasharray="4 3" />
                    <rect x="12" y="10" width="46" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="oklch(82% 0 107)" />
                    <text x="35" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">回风 ${$(m.telemetry.temp?.value??"23.8")}°</text>
                    <rect x="80" y="8" width="54" height="28" rx="6" fill="${m.connectivity==="online"?"oklch(95% 0.04 145)":"var(--pacom-surface-recessed)"}" stroke="${m.connectivity==="online"?"var(--pacom-status-online)":"oklch(82% 0 107)"}" />
                    <text x="107" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">${m.connectivity==="online"?"冷盘管 开":"盘管 离线"}</text>
                    <circle cx="172" cy="22" r="13" fill="var(--pacom-surface-card)" stroke="${m.connectivity==="online"?"var(--pacom-accent-solid)":"oklch(75% 0 107)"}" stroke-width="1.5" />
                    <text x="172" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">风机</text>
                    <rect x="208" y="10" width="78" height="24" rx="6" fill="var(--pacom-surface-card)" stroke="var(--pacom-accent-solid)" />
                    <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${E.toFixed(1)}°C</text>
                  </svg>
                </div>`:""}

            ${j||r?`
                <div class="pacom-control-box">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                    ${ae&&i?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${$(m.id)}">恢复自动策略</button>`:i?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
                  </div>
                  ${m.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
                  ${j?`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${i?"":"disabled"}>开灯</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${i?"":"disabled"}>关灯</button>
                      </div>
                      <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                        亮度目标：<strong>${y}%</strong>
                        <input type="range" min="0" max="100" step="10" value="${y}" data-ctrl-slider="lighting.dimming" ${i?"":"disabled"} />
                      </label>`:`
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${i?"":"disabled"}>开机</button>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${i?"":"disabled"}>关机</button>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:12px;">设定温度：</span>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${E-.5}" ${i?"":"disabled"}>-0.5°C</button>
                        <strong>${E.toFixed(1)}°C</strong>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${E+.5}" ${i?"":"disabled"}>+0.5°C</button>
                      </div>`}
                </div>`:""}

            ${z?`
                <div class="pacom-control-box">
                  <div style="font-size:12px; font-weight:500;">最近批次：<code>${$(z.batchId)}</code></div>
                  <div class="pacom-receipt-list">
                    ${z.receipts.map(J=>{const ge=xt[J.status]??{text:J.status,badge:"pacom-badge--neutral"};return`
                          <div class="pacom-receipt-item">
                            <div>
                              <div><strong>${$(J.deviceId)}</strong> · ${$(J.command)} → ${$(J.targetValue)}</div>
                              ${J.errorMessage?`<div style="color:var(--pacom-status-critical);">${$(J.errorMessage)}</div>`:""}
                            </div>
                            <span class="pacom-badge ${ge.badge}">${ge.text}</span>
                          </div>`}).join("")}
                  </div>
                </div>`:""}`:Q==="trend"?`
              <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="pacom-row-sub">近 24 小时趋势（${j?"亮度 %":r?"温度 °C":m.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${$(m.id)}">查看完整时序 →</button>
                </div>
                <svg viewBox="0 0 280 48" style="width:100%; height:48px; display:block;">
                  <line x1="0" y1="24" x2="280" y2="24" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
                  <polyline fill="none" stroke="${m.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${j?"0,38 40,38 80,16 120,12 160,14 200,20 240,14 280,16":r?"0,28 40,30 80,25 120,20 160,18 200,22 240,24 280,20":"0,24 40,25 80,23 120,21 160,20 200,22 240,21 280,22"}" />
                </svg>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:12px; font-weight:500;">本机活跃告警与未结工单</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
                </div>
                ${_.length===0&&F.length===0?'<div class="pacom-row-sub">当前设备运行平稳，无未处理告警或工单。</div>':`${_.map(J=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${$(J.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${$(J.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去诊断 →</span>
                          </button>`).join("")}${F.map(J=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-wo-id="${$(J.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${$(J.title)}</span>
                            <span class="pacom-badge pacom-badge--accent">查看工单 →</span>
                          </button>`).join("")}`}
              </div>`:`
              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">上下游拓扑关系（Twin Relationships）</span>
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; font-size:12px;">
                  <span class="pacom-badge pacom-badge--neutral">E7F 主控网关-01</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--accent">${$(Be(m))}</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--online">${$(B(m.logicalZoneId).replace(/^7F\s*/,""))}</span>
                </div>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">关联竣工图纸与设备手册</span>
                ${Z?`<div class="pacom-info-banner">${$(Z)}</div>`:""}
                ${X.map(J=>`
                    <div class="pacom-receipt-item">
                      <span style="font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${$(J.name)}">${$(J.name)}</span>
                      <button type="button" class="pacom-btn" style="height:24px; padding:0 8px; font-size:11px;" data-drawer-doc="${$(J.name)}">查阅</button>
                    </div>`).join("")}
              </div>

              <details class="lov-tech-details" open>
                <summary><span>技术标识与硬件绑定</span>${ne("chevron-down",12)}</summary>
                <div class="pacom-kv-grid">
                  <span class="pacom-kv-label">设备编号</span><span><code>${$(m.id)}</code> · v${m.version}</span>
                  <span class="pacom-kv-label">图上点位</span><span>${m.planPoint?`x=${m.planPoint.x.toFixed(2)}, y=${m.planPoint.y.toFixed(2)} (图 v${m.planPoint.planVersion})`:"未标点"}</span>
                  <span class="pacom-kv-label">物理安装</span><span>${m.physicalInstalled?"现场已确认":"待现场复核"}</span>
                  <span class="pacom-kv-label">硬件绑定</span><span>${m.hardwareBinding?`${m.hardwareBinding.protocol.toUpperCase()} · ${m.hardwareBinding.networkAddress}`:"未绑定"}</span>
                </div>
              </details>`}
      </aside>
    `}function le(m){if(m==="all")return{level:"all-projects"};const j=m.split(":");return j[0]==="project"&&j[1]?{level:"project",projectId:j[1]}:j[0]==="building"&&j[1]&&j[2]?{level:"building",projectId:j[1],buildingId:j[2]}:j[0]==="floor"&&j[1]&&j[2]&&j[3]?{level:"floor",projectId:j[1],buildingId:j[2],floorId:j[3]}:{level:"all-projects"}}function ue(){const m=v.filter(oe=>oe.connectivity==="online").length,j=v.length?Math.round(m/v.length*100):100,r=C.filter(oe=>oe.status==="active").length,y=g.filter(oe=>oe.status!=="closed"&&oe.status!=="resolved").length,E=w,ae=E.level==="building",_=E.level==="project"?a.projects.find(oe=>oe.id===E.projectId):a.projects[0],F=E.level==="building"?a.buildings.find(oe=>oe.id===E.buildingId):null,X=E.level==="building"?F?.name??"E栋":E.level==="project"?_?.name??"广实2号园":`全部授权项目（${a.projects.length}）`,se=E.level==="building"?`地上 ${F?.aboveFloors??0} 层 · 建筑面积 ${F?.areaSqm??"-"} m²`:`${_?.city??"广州"} ${_?.address??""} · 共 ${a.buildings.length} 栋楼宇`,J=ae?"418 kWh":"1,248 kWh",ge=Math.round(96.2*.45+93.6*.35+j*.2),fe=C.filter(oe=>oe.status==="active").slice(0,2),Se=E.level==="building"?a.floors.filter(oe=>oe.buildingId===E.buildingId).map(oe=>{const he=oe.id===d.floorId,Ie=l.scope.allowedFloorIds.includes(oe.id),we=!!oe.plan&&Ie;return`
              <div class="pacom-row" ${we?`data-nav-scope="floor:${$(E.projectId)}:${$(E.buildingId)}:${$(oe.id)}"`:'style="opacity:0.72; cursor:default;"'}>
                <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                  <span class="pacom-dot ${he&&r>0?"pacom-dot--warning":we?"pacom-dot--online":"pacom-dot--offline"}"></span>
                  <div>
                    <div class="pacom-row-title">${$(F?.name??"")} ${$(oe.name)}</div>
                    <div class="pacom-row-sub">${oe.plan?"2D 平面控图就绪":"暂未上传平面图纸"}${he&&r>0?` · ${r} 条待处理告警`:""}</div>
                  </div>
                </div>
                <span class="pacom-badge ${we?"pacom-badge--online":"pacom-badge--neutral"}">${we?"进入平面图 →":Ie?"待部署":"未授权"}</span>
              </div>`}).join(""):a.buildings.filter(oe=>E.level!=="project"||oe.projectId===E.projectId).map(oe=>{const he=oe.id===d.buildingId;return`
              <div class="pacom-row" data-nav-scope="building:${$(oe.projectId)}:${$(oe.id)}">
                <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                  <span class="pacom-dot ${he&&r>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <div>
                    <div class="pacom-row-title">${$(oe.name)}</div>
                    <div class="pacom-row-sub">地上 ${oe.aboveFloors} 层 · ${oe.areaSqm??"-"} m² · 舒适度 96.2%</div>
                  </div>
                </div>
                <span class="pacom-badge ${he?"pacom-badge--accent":"pacom-badge--neutral"}">${he?`在线 ${j}% · 告警 ${r}`:"运行平稳"}</span>
              </div>`}).join("");return`
      <section class="lov-bento-shell">
        <div class="lov-bento-left">
          <div class="pacom-card" style="padding:16px 20px; gap:12px;">
            <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
              <div>
                <div style="display:flex; align-items:center; gap:8px;">
                  <strong style="font-size:16px; font-weight:500;">${$(X)}</strong>
                  <span class="pacom-badge pacom-badge--online">综合健康 ${ge} 分</span>
                </div>
                <div class="pacom-row-sub" style="margin-top:4px;">${$(se)}</div>
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
                <div class="lov-kpi-value">${J}</div>
                <svg viewBox="0 0 100 24" style="width:96px; height:22px; flex-shrink:0;"><polyline fill="none" stroke="var(--pacom-accent-solid)" stroke-width="1.8" stroke-linecap="round" points="2,8 20,10 38,13 56,11 74,16 98,18" /></svg>
              </div>
              <span class="lov-kpi-delta">较基线 -6.4% · 节能良好</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-go-analysis="health" style="border:0; background:transparent; text-align:left; cursor:pointer;">
              <span class="lov-kpi-label">设备在线率</span>
              <div style="display:flex; align-items:flex-end; justify-content:space-between; gap:8px;">
                <div class="lov-kpi-value">${j}<span class="lov-kpi-unit">%（${m}/${v.length}）</span></div>
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
                <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">待处理</span><strong style="color:var(--pacom-status-warning);">${r} 条</strong></div>
                <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">处理中工单</span><strong>${y} 单</strong></div>
                <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">月可节省</span><strong style="color:var(--pacom-status-online);">¥ 1,420</strong></div>
              </div>
              ${fe.length>0?`<div style="display:flex; flex-direction:column; gap:6px;">
                      <div class="pacom-row-sub">优先处置项</div>
                      ${fe.map(oe=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarms="1">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${$(oe.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                          </button>`).join("")}
                    </div>`:""}
              <div>
                <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--pacom-text-secondary); margin-bottom:4px;">
                  <span>近 7 天每日告警触发</span><span>今日 ${r} 条</span>
                </div>
                <svg viewBox="0 0 210 56" style="width:100%; height:56px; display:block;">
                  ${[2,1,3,2,1,2,Math.max(1,r)].map((oe,he)=>{const Ie=["一","二","三","四","五","六","今"],we=oe*9;return`<rect x="${he*30+6}" y="${38-we}" width="18" height="${we}" rx="4" fill="${he===6?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.82" /><text x="${he*30+15}" y="52" text-anchor="middle" font-size="9" fill="var(--pacom-text-secondary)">${Ie[he]}</text>`}).join("")}
                </svg>
              </div>
            </div>

            <div class="pacom-card" style="padding:16px 18px; gap:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <strong style="font-size:14px; font-weight:500;">${ae?"楼层健康与告警导览":"楼宇健康与告警导览"}</strong>
                <span class="pacom-row-sub">点击已部署项下钻</span>
              </div>
              <div style="display:flex; flex-direction:column; gap:4px;">
                ${Se}
              </div>
            </div>
          </div>
        </div>

        <main class="pacom-right-pane">
          ${N()}
        </main>
      </section>
    `}function $e(m,j,r){if(!A)return"";const y=Math.max(0,v.length-m),E=q==="week",ae=C.filter(_=>_.status==="active").slice(0,2);return`
      <div class="lov-briefing-pop" style="width:430px;" role="dialog" aria-label="运行简报" data-role="briefing-pop">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <div>
            <strong style="font-size:14px; font-weight:500;">E7F ${E?"本周运行汇总简报":"今日值班晨报"}</strong>
            <div class="pacom-row-sub">广州 26°C 多云 · 湿度 64% · 舒适度达标 96.2%</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <div class="pacom-tabs">
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${!E}" data-briefing-period="today">今日值班</button>
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${E}" data-briefing-period="week">本周汇总</button>
            </div>
            <button type="button" class="pacom-drawer-close" data-toggle-briefing="1" aria-label="关闭简报">${ne("x",16)}</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">${E?"本周累计节能":"昨日能耗偏差"}</span><strong style="color:var(--pacom-status-online);">${E?"-7.1%（省 ¥342）":"-6.4%（省 ¥48）"}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">均温 / 在线率</span><strong>${$(r)}°C · ${m}/${v.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${j} 告警 · ${y} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖 / 未结工单</span><strong>${Math.max(1,K.size)} 覆盖 · ${g.filter(_=>_.status!=="closed").length} 工单</strong></div>
        </div>
        ${ae.length>0?`<div style="display:flex; flex-direction:column; gap:5px;">
                <span class="pacom-row-sub">优先关注事项（点击直达）</span>
                ${ae.map(_=>`
                    <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${$(_.id)}">
                      <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${$(_.title)}</span>
                      <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                    </button>`).join("")}
              </div>`:""}
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报 (.txt)</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">进入告警中心 →</button>
        </div>
      </div>
    `}function ce(){const m=C.filter(E=>E.status==="active").length,j=v.filter(E=>E.connectivity==="online").length,r=ie(),y=v.find(E=>E.category==="sensor")?.telemetry.temp?.value??"23.4";e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:10px; min-width:0; flex:1;">
              <h1 class="pacom-title" style="flex-shrink:0;">空间总览</h1>
              ${r?`<button type="button" class="lov-icon-btn" data-nav-scope="${$(r)}" title="返回上一空间层级" aria-label="返回上一空间层级">${ne("arrow-left",14)}</button>`:""}
              <div class="pacom-scope-pill" style="width:min(268px, 32vw); flex-shrink:1;" title="项目 / 楼宇 / 楼层空间范围切换">
                <select name="homeScope" data-role="scope-select" aria-label="选择查看范围">
                  ${p()}
                </select>
                <span class="pacom-scope-chevron">${St}</span>
              </div>
              ${w.level==="floor"?`
                  <div class="pacom-tabs" role="tablist" style="flex-shrink:0;">
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${W==="devices"}" data-tab="devices">设备</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${W==="zones"}" data-tab="zones">区域</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${W==="alarms"}" data-tab="alarms">
                      告警 ${m>0?`<span class="pacom-badge pacom-badge--warning">${m}</span>`:""}
                    </button>
                  </div>`:""}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${Y?n?'<span class="pacom-badge pacom-badge--neutral"><span class="pacom-dot pacom-dot--offline"></span>演示模式</span>':'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>':`<button type="button" class="pacom-badge pacom-badge--online" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-briefing="1" title="点击查看今日运行简报">在线 ${j}/${v.length} · ${$(y)}°C · 简报 ${ne("chevron-down",12)}</button>`}
              <div class="pacom-tabs pacom-mobile-view-switch" role="group" aria-label="窄屏视图切换">
                <button type="button" class="pacom-tab" aria-selected="${L==="list"}" data-mobile-pane-btn="list">列表</button>
                <button type="button" class="pacom-tab" aria-selected="${L==="canvas"}" data-mobile-pane-btn="canvas">平面图</button>
              </div>
            </div>
          </div>
        </header>

        ${$e(j,m,y)}

        ${w.level==="floor"?`
            <section class="pacom-split" data-mobile-pane="${L}">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:${T}px;">
                ${u()}
              </aside>
              <div class="pacom-splitter" role="separator" tabindex="0" aria-orientation="vertical" aria-label="调整左右栏宽度" data-role="splitter"></div>
              <main class="pacom-right-pane">
                ${N()}
              </main>
            </section>`:ue()}
      </div>
    `,be()}function be(){e.querySelector('[data-role="scope-select"]')?.addEventListener("change",r=>{f(le(r.currentTarget.value))}),e.querySelectorAll("[data-nav-scope]").forEach(r=>{r.addEventListener("click",()=>{r.dataset.navScope&&f(le(r.dataset.navScope))})}),e.querySelectorAll("[data-tab]").forEach(r=>{r.addEventListener("click",()=>{W=r.dataset.tab,ce()})}),e.querySelectorAll("[data-mobile-pane-btn]").forEach(r=>{r.addEventListener("click",()=>{L=r.dataset.mobilePaneBtn,ce()})}),e.querySelector('[data-role="search"]')?.addEventListener("input",r=>{R=r.currentTarget.value,pe()}),e.querySelector('[data-role="category"]')?.addEventListener("change",r=>{M=r.currentTarget.value,ce()}),e.querySelectorAll("[data-filter-zone]").forEach(r=>{r.addEventListener("click",y=>{y.stopPropagation(),H=r.dataset.filterZone??"all",ce()})}),e.querySelectorAll("[data-select-device]").forEach(r=>{r.addEventListener("click",y=>{y.target.tagName!=="INPUT"&&(O=r.dataset.selectDevice??null,D=!0,L="canvas",ce())})}),e.querySelectorAll("[data-check-device]").forEach(r=>{r.addEventListener("change",()=>{const y=r.dataset.checkDevice;y&&(r.checked?c.add(y):c.delete(y),ce())})}),e.querySelectorAll("[data-pin-device]").forEach(r=>{r.addEventListener("click",y=>{y.stopPropagation(),O=r.dataset.pinDevice??null,D=!0,ce()})}),e.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{D=!1,ce()}),e.querySelectorAll("[data-drawer-tab]").forEach(r=>{r.addEventListener("click",()=>{Q=r.dataset.drawerTab??"control",Z="",ce()})}),e.querySelectorAll("[data-drawer-doc]").forEach(r=>{r.addEventListener("click",()=>{Z=`已调阅「${r.dataset.drawerDoc??""}」（完整工程文档库见「系统部署 → 楼层与功能区」）。`,ce()})}),e.querySelectorAll("[data-briefing-period]").forEach(r=>{r.addEventListener("click",()=>{q=r.dataset.briefingPeriod??"today",ce()})}),e.querySelectorAll("[data-go-alarm-id]").forEach(r=>{r.addEventListener("click",()=>{const y=r.dataset.goAlarmId??"";window.location.hash=y?`#alarms?alarm=${encodeURIComponent(y)}`:"#alarms"})}),e.querySelectorAll("[data-go-wo-id]").forEach(r=>{r.addEventListener("click",()=>{const y=r.dataset.goWoId??"";window.location.hash=y?`#alarms?wo=${encodeURIComponent(y)}`:"#alarms"})}),e.querySelector("[data-release-override]")?.addEventListener("click",r=>{const y=r.currentTarget.dataset.releaseOverride;y&&(K.delete(y),ce())}),e.querySelectorAll("[data-zone-power]").forEach(r=>{r.addEventListener("click",y=>{y.stopPropagation();const E=r.dataset.zonePower,ae=r.dataset.zoneVal==="true";if(!E)return;const _=v.filter(X=>X.logicalZoneId===E&&X.category==="lighting").map(X=>X.id),F=v.filter(X=>X.logicalZoneId===E&&X.category==="hvac").map(X=>X.id);_.length?V(_,"lighting.power",ae):F.length&&V(F,"hvac.power",ae)})}),e.querySelectorAll("[data-locate-device]").forEach(r=>{r.addEventListener("click",()=>{const y=r.dataset.locateDevice;y&&(O=y,D=!0,L="canvas",ce())})}),e.querySelectorAll("[data-go-alarms]").forEach(r=>{r.addEventListener("click",()=>{window.location.hash="#alarms"})}),e.querySelectorAll("[data-go-analysis]").forEach(r=>{r.addEventListener("click",()=>{const y=r.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(y)}`})}),e.querySelectorAll("[data-go-timeseries]").forEach(r=>{r.addEventListener("click",()=>{const y=r.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(y)}`})}),e.querySelectorAll("[data-toggle-briefing]").forEach(r=>{r.addEventListener("click",()=>{A=!A,ce()})}),e.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const r=v.filter(X=>X.connectivity==="online").length,y=C.filter(X=>X.status==="active").length,E=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${r}/${v.length}（离线 ${v.length-r} 台）`,`待处理告警：${y} 条`,`人工覆盖中：${K.size} 台`].join(`
`),ae=new Blob([E],{type:"text/plain;charset=utf-8;"}),_=URL.createObjectURL(ae),F=document.createElement("a");F.href=_,F.download="pacom-daily-briefing.txt",F.click(),URL.revokeObjectURL(_)}),e.querySelectorAll("[data-ctrl-cmd]").forEach(r=>{r.addEventListener("click",()=>{if(!O||!r.dataset.ctrlCmd)return;const y=r.dataset.ctrlVal??"",E=y==="true"?!0:y==="false"?!1:Number(y);V([O],r.dataset.ctrlCmd,E)})}),e.querySelector("[data-ctrl-slider]")?.addEventListener("change",r=>{const y=r.currentTarget;!O||!y.dataset.ctrlSlider||V([O],y.dataset.ctrlSlider,Number(y.value))}),e.querySelectorAll("[data-batch-cmd]").forEach(r=>{r.addEventListener("click",()=>{const y=Array.from(c),E=r.dataset.batchVal??"",ae=E==="true"?!0:E==="false"?!1:E;V(y,r.dataset.batchCmd,ae)})}),e.querySelectorAll("[data-ack-alarm]").forEach(r=>{r.addEventListener("click",async()=>{!r.dataset.ackAlarm||w.level!=="floor"||!I||(await t.acknowledgeAlarm(r.dataset.ackAlarm,"首页快速确认"),C=await t.listAlarms(w.floorId),ce())})}),e.querySelectorAll("[data-canvas-layer]").forEach(r=>{r.addEventListener("click",()=>{const y=r.dataset.canvasLayer;y&&(ee=y,ce())})}),e.querySelectorAll("[data-zoom]").forEach(r=>{r.addEventListener("click",()=>{const y=r.dataset.zoom;y==="in"?S=Math.min(2.6,Number((S+.2).toFixed(2))):y==="out"?S=Math.max(.6,Number((S-.2).toFixed(2))):(S=1,b=0,h=0),k()})});const m=e.querySelector('[data-role="canvas-stage"]');if(m&&!Y){let r=!1,y=0,E=0,ae=0,_=0;m.addEventListener("pointerdown",X=>{X.target?.closest("button, input, select, .pacom-drawer")||(r=!0,y=X.clientX,E=X.clientY,ae=b,_=h,m.classList.add("is-panning"),m.setPointerCapture?.(X.pointerId))}),m.addEventListener("pointermove",X=>{r&&(b=ae+(X.clientX-y),h=_+(X.clientY-E),k())});const F=()=>{r&&(r=!1,m.classList.remove("is-panning"))};m.addEventListener("pointerup",F),m.addEventListener("pointercancel",F),m.addEventListener("wheel",X=>{X.preventDefault();const se=X.deltaY<0?.12:-.12;S=Math.max(.6,Math.min(2.6,Number((S+se).toFixed(2)))),k()},{passive:!1}),m.addEventListener("dblclick",X=>{X.target?.closest("button")||(S=1,b=0,h=0,k())})}const j=e.querySelector('[data-role="splitter"]');j?.addEventListener("pointerdown",r=>{const y=r.clientX,E=T;j.classList.add("is-dragging");const ae=F=>{T=Math.max(320,Math.min(640,E+(F.clientX-y)));const X=e.querySelector(".pacom-left-pane");X&&X.style.setProperty("--pacom-sidebar-width",`${T}px`)},_=()=>{j.classList.remove("is-dragging"),localStorage.setItem(qe,String(Math.round(T))),window.removeEventListener("pointermove",ae),window.removeEventListener("pointerup",_)};window.addEventListener("pointermove",ae),window.addEventListener("pointerup",_)}),j?.addEventListener("keydown",r=>{if(r.key==="ArrowLeft")r.preventDefault(),T=Math.max(320,T-16);else if(r.key==="ArrowRight")r.preventDefault(),T=Math.min(640,T+16);else if(r.key==="Home")r.preventDefault(),T=320;else if(r.key==="End")r.preventDefault(),T=640;else return;localStorage.setItem(qe,String(Math.round(T)));const y=e.querySelector(".pacom-left-pane");y&&y.style.setProperty("--pacom-sidebar-width",`${T}px`)})}await f(w,!0)}const Lt=new Set(["lighting","hvac","alarm_rules"]),Ve={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},Ce=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function At(e){const t=new Set;for(const l of e.actions)l.command.startsWith("lighting")?t.add("照明"):l.command.startsWith("hvac")?t.add("暖通"):t.add("综合");return Array.from(t)}function Ct(e,t,l){const a=l?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
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
  `}async function jt(e,t,l){let[a,n,i]=await Promise.all([t.listScenes(d.floorId),t.getRuntimeSettings(d.projectId),t.getFloorDevices(d.floorId).catch(()=>[])]),I="manual",x="balanced",w="all",W=null,L="",R=!1,M=!1,H=!1,G="all",U=null,P="",O="",D=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const Q=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],Z=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],A=[{deviceId:i[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],q=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${n.calendar.workdayStart} – ${n.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${n.calendar.nightGuardStart} – 次日 ${n.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],ee=t.subscribeFloorEvents(d.floorId,async c=>{c.type==="control.receipt.updated"&&W?.batchId===c.batchId&&(W=await t.getControlBatch(c.batchId),K())});function K(){const c=L.trim().toLowerCase(),v=c?a.filter(o=>`${o.name} ${o.description}`.toLowerCase().includes(c)):a,C=n.rules.filter(o=>Lt.has(o.category)),g=w==="all"?C:w==="cbm"?[]:C.filter(o=>o.category===w),z=w==="all"||w==="cbm",Y=G==="issues"?Q.filter(o=>o.status!=="verified"):Q,S=Ce.find(o=>o.id===x)??Ce[1],b=l.scope.canControlDevices,h=l.scope.canEditDeployment;e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">智能策略</h1>
              <div class="pacom-tabs" role="tablist" aria-label="智能策略分类">
                <button class="pacom-tab" role="tab" aria-selected="${I==="manual"}" data-scene-tab="manual">快捷场景（${a.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${I==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
                <button class="pacom-tab" role="tab" aria-selected="${I==="rules"}" data-scene-tab="rules">条件联动（${C.length+Z.length}）</button>
              </div>
            </div>

            <div class="pacom-header-meta">
              <button type="button" class="pacom-badge ${D.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${D.length>0?`人工覆盖中：${D.length} 台 ${ne("chevron-down",12)}`:`全部自动托管 ${ne("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${H?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${Q.length}）</button>
              ${I==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${R?"收起表单":"+ 新建场景"}</button>`:I==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
        </header>

        ${M?`
            <div class="lov-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${D.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${ne("x",16)}</button>
              </div>
              ${D.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':D.map(o=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${o.name}</div>
                            <div class="pacom-row-sub">${o.reason}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${o.id}" ${b?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${D.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${b?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${H?`
            <aside class="lov-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${ne("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${G==="all"}" data-log-filter="all">全部（${Q.length}）</button>
                  <button class="pacom-tab" aria-selected="${G==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${Y.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${Y.map(o=>`
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
          ${P?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${P}</span></div>`:""}
          ${O?`<div class="pacom-alert-banner">${O}</div>`:""}

          ${I==="manual"?`
              ${W?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="lov-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${W.batchId}</span>
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
                            ${W.receipts.map(o=>`
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

              ${R?`
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
                        ${A.map((o,s)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" data-draft-dev="${s}" aria-label="目标设备">
                                ${i.map(f=>`<option value="${f.id}" ${f.id===o.deviceId?"selected":""}>${f.name}</option>`).join("")}
                              </select>
                              <select class="pacom-select" data-draft-cmd="${s}" aria-label="执行指令">
                                <option value="lighting.dimming" ${o.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${o.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${o.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" data-draft-val="${s}" value="${o.targetValue}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${s}" ${A.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="lov-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit">保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="lov-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${L}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${v.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${v.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="lov-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':v.map(o=>{const s=At(o),f=o.actions.slice(0,3).map(B=>{const de=i.find(pe=>pe.id===B.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??B.deviceId,V=B.command==="lighting.dimming"?`亮度 ${B.targetValue}%`:B.command==="hvac.setpoint"?`设温 ${B.targetValue}°C`:B.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${de} → ${V}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${o.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${s.map(B=>`<span class="pacom-badge pacom-badge--accent">${B}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${o.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${o.description}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${f}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${o.lastExecutedAt?o.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${o.id}" ${b?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:I==="schedule_oss"?`
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
                    <span class="lov-kpi-delta">当前人工覆盖挂起：${D.length} 台</span>
                  </div>
                </div>

                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="lov-mode-grid">
                    ${Ce.map(o=>`
                      <button type="button" class="lov-mode-card" aria-pressed="${x===o.id}" data-oss-mode="${o.id}" ${b?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${o.title}</strong>
                          <span class="pacom-badge ${x===o.id?"pacom-badge--online":"pacom-badge--neutral"}">${x===o.id?"当前生效":o.badge}</span>
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
                          ${q.map(o=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${o.name}</span>
                                    ${o.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${o.windowLabel}</div>
                                </td>
                                <td>${Ct(o.startHour,o.endHour,o.enabled)}</td>
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
                                      ${b?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(o=>{const s=o==="all"?"全部":Ve[o]??o,f=o==="all"?C.length+Z.length:o==="cbm"?Z.length:C.filter(B=>B.category===o).length;return`
                            <button type="button" class="lov-count-pill" aria-pressed="${w===o}" data-rule-cat="${o}">
                              <span>${s}</span><span class="lov-count-num">${f}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="lov-settings-card">
                    ${g.map(o=>{const s=U===o.id;return`
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
                                  ${h?"":"disabled"}
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
                    ${z?Z.map(o=>{const s=Math.min(100,Math.round(o.runtimeHours/o.thresholdHours*100));return`
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
                                    <button type="button" class="lov-switch" role="switch" aria-checked="${o.enabled}" data-toggle-cbm="${o.id}" aria-label="切换 ${o.name}" ${h?"":"disabled"}>
                                      <span class="lov-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,e.querySelectorAll("[data-scene-tab]").forEach(o=>{o.addEventListener("click",()=>{I=o.dataset.sceneTab??"manual",P="",K()})}),e.querySelectorAll("[data-toggle-overrides]").forEach(o=>{o.addEventListener("click",()=>{M=!M,K()})}),e.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{D=[],P="已释放全部人工覆盖设备，自动节能策略已恢复托管。",K()}),e.querySelectorAll("[data-release-one]").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.releaseOne;D=D.filter(f=>f.id!==s),P="已恢复该设备的自动策略托管。",K()})}),e.querySelectorAll("[data-toggle-cmdlog]").forEach(o=>{o.addEventListener("click",()=>{H=!H,K()})}),e.querySelectorAll("[data-log-filter]").forEach(o=>{o.addEventListener("click",()=>{G=o.dataset.logFilter??"all",K()})}),e.querySelector("[data-close-batch]")?.addEventListener("click",()=>{W=null,K()}),e.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),e.querySelectorAll("[data-oss-mode]").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.ossMode;if(!s)return;x=s;const f=Ce.find(B=>B.id===s);P=`已切换至「${f?.title??s}」模式（明日预测启动 ${f?.predictedStart??""}）。`,K()})}),e.querySelectorAll("[data-toggle-schedule]").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.toggleSchedule,f=q.find(B=>B.id===s);f&&(f.enabled=!f.enabled,P=`排程「${f.name}」已${f.enabled?"恢复启用":"临时暂停"}。`,K())})}),e.querySelectorAll("[data-rule-cat]").forEach(o=>{o.addEventListener("click",()=>{w=o.dataset.ruleCat??"all",K()})}),e.querySelectorAll("[data-expand-rule]").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.expandRule??null;U=U===s?null:s,K()})}),e.querySelectorAll("[data-toggle-cbm]").forEach(o=>{o.addEventListener("click",()=>{const s=Z.find(f=>f.id===o.dataset.toggleCbm);s&&(s.enabled=!s.enabled,P=`工时维保规则「${s.name}」已${s.enabled?"启用":"停用"}。`,K())})}),e.querySelectorAll("[data-toggle-strategy-rule]").forEach(o=>{o.addEventListener("click",async()=>{O="";try{await t.toggleRuntimeRule(o.dataset.toggleStrategyRule,o.dataset.ruleNext==="true",Number(o.dataset.ruleVer)),n=await t.getRuntimeSettings(d.projectId),P="条件联动规则状态与版本回执已更新。",K()}catch(s){O=s instanceof Error?s.message:String(s),K()}})}),e.querySelectorAll("[data-toggle-create]").forEach(o=>{o.addEventListener("click",()=>{R=!R,K()})}),e.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{A.push({deviceId:i[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),K()}),e.querySelectorAll("[data-del-draft-action]").forEach(o=>{o.addEventListener("click",()=>{const s=Number(o.dataset.delDraftAction);A.length>1&&(A.splice(s,1),K())})}),e.querySelectorAll("[data-draft-dev]").forEach(o=>{o.addEventListener("change",()=>{const s=A[Number(o.dataset.draftDev)];s&&(s.deviceId=o.value)})}),e.querySelectorAll("[data-draft-cmd]").forEach(o=>{o.addEventListener("change",()=>{const s=A[Number(o.dataset.draftCmd)];s&&(s.command=o.value)})}),e.querySelectorAll("[data-draft-val]").forEach(o=>{o.addEventListener("change",()=>{const s=A[Number(o.dataset.draftVal)];s&&(s.targetValue=o.value)})}),e.querySelector("[data-scene-search]")?.addEventListener("input",o=>{const s=o.currentTarget,f=s.selectionStart??s.value.length;L=s.value,K();const B=e.querySelector("[data-scene-search]");B&&(B.focus(),B.setSelectionRange(f,f))}),e.querySelectorAll("[data-exec-scene]").forEach(o=>{o.addEventListener("click",async()=>{O="";const s=a.find(f=>f.id===o.dataset.execScene);try{W=await t.executeScene(o.dataset.execScene),a=await t.listScenes(d.floorId),Q.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:s?.name??"E7F 场景",action:`${W.receipts.length} 台设备联动下发`,status:"verified"}),K()}catch(f){O=f instanceof Error?f.message:String(f),K()}})}),e.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async o=>{o.preventDefault();const s=new FormData(o.currentTarget);try{await t.createScene({projectId:d.projectId,floorId:d.floorId,name:String(s.get("name")??""),description:String(s.get("description")??""),actions:A.map(f=>({deviceId:f.deviceId,command:f.command,targetValue:f.targetValue==="true"?!0:f.targetValue==="false"?!1:Number(f.targetValue)||50}))}),a=await t.listScenes(d.floorId),R=!1,P=`快捷场景已保存（共绑定 ${A.length} 条联动动作）。`,K()}catch(f){O=f instanceof Error?f.message:String(f),K()}})}K(),window.addEventListener("hashchange",()=>ee(),{once:!0})}function Oe(e,t){return e.length===0?'<div class="lov-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':e.map(l=>`
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
      </div>`).join("")}async function Ft(e,t,l){let a="calendar",n=await t.getRuntimeSettings(d.projectId),i=n.calendar.workdayStart,I=n.calendar.workdayEnd,x=n.calendar.nightGuardStart,w=n.calendar.nightGuardEnd,W=!0,L=[];const R=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let M="flat";const H={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},G={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},U={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},P={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},O=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let D="",Q="";function Z(){const A=l.scope.canEditDeployment,q=n.rules.filter(c=>c.category==="weather_area"),ee=n.rules.filter(c=>c.category==="metering_carbon"),K=n.rules.filter(c=>c.category==="templates");e.innerHTML=`
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
            ${D?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${D}</span></div>`:""}
            ${Q?`<div class="pacom-alert-banner">${Q}</div>`:""}

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
                        <input class="pacom-input" style="width:116px;" type="time" data-cal-start value="${i}" aria-label="工作日上班时间" ${A?"":"disabled"} />
                        <span class="pacom-row-sub">至</span>
                        <input class="pacom-input" style="width:116px;" type="time" data-cal-end value="${I}" aria-label="工作日下班时间" ${A?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">夜间值守巡检窗口</span>
                        <span class="lov-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:116px;" type="time" data-night-start value="${x}" aria-label="夜间值守开始" ${A?"":"disabled"} />
                        <span class="pacom-row-sub">至次日</span>
                        <input class="pacom-input" style="width:116px;" type="time" data-night-end value="${w}" aria-label="夜间值守结束" ${A?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">自动跳过中国法定节假日</span>
                        <span class="lov-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                      </div>
                      <div class="lov-setting-control">
                        <span class="pacom-row-sub">${W?"已开启":"已关闭"}</span>
                        <button type="button" class="lov-switch" role="switch" aria-checked="${W}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${A?"":"disabled"}>
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
                    <span class="pacom-row-sub">共 ${R.length} 条</span>
                  </div>
                  <div class="lov-settings-card">
                    ${R.map(c=>`
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title"><span>${c.date}</span><span class="pacom-badge pacom-badge--accent">${c.mode}</span></span>
                            <span class="lov-setting-desc">${c.label}</span>
                          </div>
                          <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${c.id}" ${A?"":"disabled"}>移除</button>
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

                ${L.length>0?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">受影响的定时与夜间规则预览</h2>
                        <span class="pacom-row-sub">共 ${L.length} 条</span>
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
                              ${L.map(c=>`
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
                          <select class="pacom-select" data-energy-field="weatherSource" aria-label="室外气象数据源" ${A?"":"disabled"}>
                            <option value="guanzhou_station" ${H.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                            <option value="campus_sensor" ${H.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                          </select>
                        </div>
                      </div>
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">E 栋计费与能效面积（m²）</span>
                          <span class="lov-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                        </div>
                        <div class="lov-setting-control">
                          <input class="pacom-input" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${H.billingArea}" aria-label="计费面积" ${A?"":"disabled"} />
                        </div>
                      </div>
                      ${Oe(q,A)}
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
                              <input class="pacom-input" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${H.tariffYuan}" aria-label="综合电价" ${A?"":"disabled"} />
                            </div>
                          </div>`:`
                          <div class="lov-setting-row">
                            <div class="lov-setting-meta">
                              <span class="lov-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                              <span class="lov-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                            </div>
                            <div class="lov-setting-control" style="gap:6px;">
                              <span class="pacom-row-sub">峰</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${H.tariffPeak}" ${A?"":"disabled"} />
                              <span class="pacom-row-sub">平</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${H.tariffFlat}" ${A?"":"disabled"} />
                              <span class="pacom-row-sub">谷</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${H.tariffValley}" ${A?"":"disabled"} />
                            </div>
                          </div>`}
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">区域电网碳排放因子</span>
                          <span class="lov-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                        </div>
                        <div class="lov-setting-control">
                          <select class="pacom-select" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${A?"":"disabled"}>
                            <option value="0.5271" ${H.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                            <option value="0.5703" ${H.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                          </select>
                        </div>
                      </div>
                      ${Oe(ee,A)}
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
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="minTemp" value="${G.minTemp}" aria-label="最低设定温度" ${A?"":"disabled"} />
                            <span class="pacom-row-sub">至</span>
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="maxTemp" value="${G.maxTemp}" aria-label="最高设定温度" ${A?"":"disabled"} />
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
                              <option value="2h" ${G.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                              <option value="4h" ${G.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                              <option value="eod" ${G.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                              <option value="permanent" ${G.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                            </select>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">控制指令回读超时阈值（秒）</span>
                            <span class="lov-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                          </div>
                          <div class="lov-setting-control">
                            <input class="pacom-input" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${G.readbackTimeoutSec}" aria-label="回读超时阈值" ${A?"":"disabled"} />
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
                        ${Oe(K,A)}
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
                            <input class="pacom-input" style="width:72px;" type="number" data-auto-wo="delayMin" value="${U.delayMin}" ${A?"":"disabled"} />
                            <span class="pacom-row-sub">分钟</span>
                            <button type="button" class="lov-switch" role="switch" aria-checked="${U.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${A?"":"disabled"}>
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
                              <option value="暖通运维组" ${U.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                              <option value="强电照明组" ${U.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                              <option value="园区物业值班组" ${U.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                            </select>
                            <span class="pacom-row-sub">防重</span>
                            <button type="button" class="lov-switch" role="switch" aria-checked="${U.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${A?"":"disabled"}>
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
                            <input class="pacom-input" style="width:116px;" type="time" data-digest-time value="${P.dailyDigestTime}" aria-label="每日简报发送时间" />
                            <button type="button" class="lov-switch" role="switch" aria-checked="${P.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报">
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
                            <button type="button" class="lov-switch" role="switch" aria-checked="${P.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰">
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
                              ${O.map(c=>`
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
    `,e.querySelectorAll("[data-stab]").forEach(c=>{c.addEventListener("click",()=>{a=c.dataset.stab??"calendar",D="",Q="",Z()})}),e.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{W=!W,D=`法定节假日自动跳过已${W?"开启":"关闭"}。`,Z()}),e.querySelector("[data-night-start]")?.addEventListener("change",c=>{x=c.currentTarget.value}),e.querySelector("[data-night-end]")?.addEventListener("change",c=>{w=c.currentTarget.value}),e.querySelector("[data-add-sd-form]")?.addEventListener("submit",c=>{c.preventDefault();const v=new FormData(c.currentTarget);R.push({id:`sd-${Date.now()}`,date:String(v.get("date")??""),label:String(v.get("label")??""),mode:String(v.get("mode")??"保持工作日工况")}),D="已添加特殊例外日期，当日自动覆盖默认节假日排程。",Z()}),e.querySelectorAll("[data-del-sd]").forEach(c=>{c.addEventListener("click",()=>{const v=R.findIndex(C=>C.id===c.dataset.delSd);v>=0&&R.splice(v,1),Z()})}),e.querySelectorAll("[data-tariff-mode]").forEach(c=>{c.addEventListener("click",()=>{M=c.dataset.tariffMode??"flat",Z()})}),e.querySelectorAll("[data-energy-field]").forEach(c=>{c.addEventListener("change",()=>{const v=c.dataset.energyField;v&&(H[v]=c.value)})}),e.querySelector("[data-save-energy]")?.addEventListener("click",()=>{D=M==="flat"?`能碳与气象口径已保存（面积 ${H.billingArea} m² · 综合电价 ¥${H.tariffYuan}/kWh · 因子 ${H.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${H.tariffPeak} / 平 ¥${H.tariffFlat} / 谷 ¥${H.tariffValley}）。`,Z()}),e.querySelectorAll("[data-guard-field]").forEach(c=>{c.addEventListener("change",()=>{const v=c.dataset.guardField;v&&(G[v]=c.value)})}),e.querySelector("[data-save-guard]")?.addEventListener("click",()=>{D=`控制安全边界已保存（温区 ${G.minTemp}–${G.maxTemp}°C · 超时 ${G.readbackTimeoutSec}s）。`,Z()}),e.querySelectorAll("[data-auto-wo]").forEach(c=>{c.addEventListener("change",()=>{const v=c.dataset.autoWo;v&&(U[v]=c.value),D="自动转工单配置已更新。",Z()})}),e.querySelectorAll("[data-toggle-autowo]").forEach(c=>{c.addEventListener("click",()=>{const v=c.dataset.toggleAutowo;v&&(U[v]=!U[v],D="自动转工单保护策略已更新。",Z())})}),e.querySelector("[data-digest-time]")?.addEventListener("change",c=>{P.dailyDigestTime=c.currentTarget.value,D=`每日晨间简报发送时刻已更新为 ${P.dailyDigestTime}。`,Z()}),e.querySelectorAll("[data-notify-key]").forEach(c=>{c.addEventListener("click",()=>{const v=c.dataset.notifyKey;v&&(P[v]=!P[v],D="通知策略偏好已更新。",Z())})}),e.querySelectorAll("[data-toggle-nr]").forEach(c=>{c.addEventListener("click",()=>{const v=O.find(C=>C.id===c.dataset.toggleNr);v&&(v.enabled=!v.enabled,D=`工作组「${v.groupName}」的通知分流规则已${v.enabled?"启用":"停用"}。`,Z())})}),e.querySelector("[data-cal-start]")?.addEventListener("change",c=>{i=c.currentTarget.value}),e.querySelector("[data-cal-end]")?.addEventListener("change",c=>{I=c.currentTarget.value}),e.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{Q="",L=await t.previewCalendarImpact(d.projectId,i,I),Z()}),e.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{Q="";try{const c=await t.saveWorkCalendar(d.projectId,i,I,n.calendar.version);n={...n,calendar:{...c,nightGuardStart:x,nightGuardEnd:w}},D=`运行日历已保存至 v${c.version}（工作日 ${c.workdayStart}–${c.workdayEnd} · 夜间值守 ${x}–${w}）`,L=[],Z()}catch(c){Q=c instanceof Error?c.message:String(c),Z()}}),e.querySelectorAll("[data-toggle-rule]").forEach(c=>{c.addEventListener("click",async()=>{Q="";try{await t.toggleRuntimeRule(c.dataset.toggleRule,c.dataset.ruleNext==="true",Number(c.dataset.ruleVer)),n=await t.getRuntimeSettings(d.projectId),D="策略状态与版本回执已更新。",Z()}catch(v){Q=v instanceof Error?v.message:String(v),Z()}})})}Z()}const Ue="pacom.web.sidebar.collapsed",Mt=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,ze=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"运行设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],Ne={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"运行设置",deployment:"系统部署",account:"机构与账户"},We=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function Re(){const e=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return e in Ne?e:"home"}function re(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function Tt(e,t,l,a){e.classList.remove("bare-login");let n=l,i=Re(),I=localStorage.getItem(Ue)==="1",x=!1,w=!1,W="",L=!1,R=0,M={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};const H=t.mode==="demo"&&typeof t.switchDemoRole=="function";async function G(){try{const[S,b,h,T,o]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(d.floorId).catch(()=>[]),t.listAlarms(d.floorId).catch(()=>[]),t.listWorkOrders(d.floorId).catch(()=>[]),t.listScenes(d.floorId).catch(()=>[])]);M={devices:b,zones:S.zones,alarms:h,workOrders:T,scenes:o},R=h.filter(s=>s.status==="active").length,q()}catch{}}function U(){return ze.map(S=>`
        ${S.id==="settings"?'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${S.id}" aria-current="${i===S.id?"page":"false"}" title="${S.label}">
          ${ne(S.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${S.label}</span>
          ${S.id==="alarms"&&R>0?`<span class="pacom-nav-count" title="待处理告警 ${R} 条">${R}</span>`:""}
        </button>`).join("")}function P(){const S=W.trim().toLowerCase(),b=S?ze.filter(V=>V.label.toLowerCase().includes(S)).slice(0,4):ze,h=S?M.devices.filter(V=>`${V.name} ${V.id} ${V.category}`.toLowerCase().includes(S)).slice(0,5):M.devices.slice(0,3),T=S?M.zones.filter(V=>V.name.toLowerCase().includes(S)).slice(0,3):[],o=S?M.alarms.filter(V=>`${V.title} ${V.message} ${V.id}`.toLowerCase().includes(S)).slice(0,4):M.alarms.filter(V=>V.status==="active").slice(0,2),s=S?M.workOrders.filter(V=>`${V.title} ${V.id}`.toLowerCase().includes(S)).slice(0,3):[],f=S?M.scenes.filter(V=>`${V.name} ${V.description}`.toLowerCase().includes(S)).slice(0,3):[],B=S?We.filter(V=>`${V.title} ${V.category}`.toLowerCase().includes(S)).slice(0,4):We.slice(0,2),de=[];return h.length&&de.push(`<div class="pacom-search-group">${S?"设备（空间总览）":"常用设备直达"}</div>`+h.map(V=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(V.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${re(V.name)}</span><span class="pacom-badge ${V.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${V.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),T.length&&de.push('<div class="pacom-search-group">功能区</div>'+T.map(V=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(V.id)}"><span>${re(V.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),o.length&&de.push(`<div class="pacom-search-group">${S?"告警":"待处理告警"}</div>`+o.map(V=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(V.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${re(V.title)}</span><span class="pacom-badge pacom-badge--warning">${V.status==="active"?"待处理":"已确认"}</span></button>`).join("")),s.length&&de.push('<div class="pacom-search-group">运维工单</div>'+s.map(V=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(V.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${re(V.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),f.length&&de.push('<div class="pacom-search-group">智能策略</div>'+f.map(V=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${re(V.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),B.length&&de.push('<div class="pacom-search-group">图纸与工程文档</div>'+B.map(V=>`<button type="button" class="pacom-search-hit" data-search-hash="${V.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${re(V.title)}</span><span class="pacom-badge pacom-badge--neutral">${re(V.category)}</span></button>`).join("")),b.length&&de.push('<div class="pacom-search-group">工作区</div>'+b.map(V=>`<button type="button" class="pacom-search-hit" data-search-hash="#${V.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${ne(V.icon,14)}${re(V.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),de.length?de.join(""):`<div class="pacom-nav-empty">未找到与「${re(W)}」匹配的设备、区域、告警、工单或图纸</div>`}function O(S){S.querySelectorAll("[data-search-hash]").forEach(b=>{b.addEventListener("click",()=>{const h=b.dataset.searchHash||"#home";L=!1,W="",D(),x=!1,window.location.hash===h?(i=Re(),v(!0)):window.location.hash=h})})}function D(){if(e.querySelector('[data-role="cmd-scrim"]')?.remove(),!L)return;const S=document.createElement("div");S.className="pacom-cmd-scrim",S.dataset.role="cmd-scrim",S.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${ne("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${re(W)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${P()}
        </div>
      </div>
    `,e.appendChild(S),S.addEventListener("click",T=>{T.target===S&&(L=!1,D())});const b=S.querySelector('[data-role="cmd-input"]'),h=S.querySelector('[data-role="cmd-body"]');h&&O(h),b?.focus(),b?.addEventListener("input",T=>{W=T.currentTarget.value,h&&(h.innerHTML=P(),O(h))})}function Q(){if(!w)return"";const S=n.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${I?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${re(n.roleLabel)}${H?" · 演示":""}</small>
          </span>
          ${ne("check",16,"pacom-pop-check")}
        </button>

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${ne("settings",16)}</span>
          <span class="pacom-pop-text">机构设置</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${re(S)}</span>
          <span class="pacom-pop-text">
            <b>${re(n.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${H?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">演示角色切换（RBAC 权限预览）</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(me).map(b=>{const h=me[b],T=b===n.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${T}" data-pop-role="${b}">
                      <span class="pacom-pop-text">
                        <b>${re(h.roleLabel)}</b>
                        <small>${re(h.displayName)}</small>
                      </span>
                      ${T?ne("check",16,"pacom-pop-check"):""}
                    </button>`}).join("")}
            </div>`:""}

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${ne("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function Z(S){switch(document.title=`${Ne[i]} · PACOM Station`,i){case"home":await Et(S,t,n);return;case"analysis":await mt(S,t);return;case"alarms":await st(S,t,n);return;case"scenes":await jt(S,t,n);return;case"settings":await Ft(S,t,n);return;case"deployment":await wt(S,t,n);return;case"account":await Qe(S,t,n,b=>{n=b,v(!0)},A);return}}async function A(){w=!1,x=!1,L=!1,Y();try{await t.logout()}finally{window.location.hash="#login",a()}}function q(){const S=e.querySelector('[data-role="nav-list"]');S&&(S.innerHTML=U(),K())}function ee(){e.querySelector('[data-role="org-popover"]')?.remove();const S=e.querySelector('[data-role="org-menu-btn"]');if(S&&S.setAttribute("aria-expanded",String(w)),!w)return;const b=document.createElement("div");b.innerHTML=Q().trim();const h=b.firstElementChild;h&&(e.appendChild(h),c())}function K(){e.querySelectorAll("[data-route]").forEach(S=>{S.addEventListener("click",()=>{const b=S.dataset.route;b===i&&!x||(i=b,x=!1,w=!1,window.location.hash=`#${i}`,v(!0))})})}function c(){e.querySelectorAll('[data-pop-act="go-account"]').forEach(S=>{S.addEventListener("click",()=>{w=!1,x=!1,i="account",window.location.hash="#account",v(!0)})}),e.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{A()}),e.querySelectorAll("[data-pop-role]").forEach(S=>{S.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const b=S.dataset.popRole;w=!1,x=!1,n=await t.switchDemoRole(b),await v(!0)})})}async function v(S){const b=e.querySelector('[data-role="main-stage"]');if(!S&&b){const T=e.querySelector(".pacom-nav-rail");T&&(T.classList.toggle("is-collapsed",I),T.classList.toggle("is-mobile-open",x));const o=e.querySelector('[data-role="mobile-scrim"]');o&&o.classList.toggle("is-open",x),ee();return}e.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${ne("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${Ne[i]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${re(n.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${x?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${I?"is-collapsed":""} ${x?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${Mt}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${I?"展开侧栏":"收起侧栏"}" aria-label="${I?"展开侧栏":"收起侧栏"}">
              ${ne("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${ne("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${U()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${i==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${w}" title="广州国家实验室 · ${re(n.displayName)}">
              <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>
              <span class="pacom-org-name">广州国家实验室</span>
              ${ne("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,e.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{I=!I,w=!1,localStorage.setItem(Ue,I?"1":"0");const T=e.querySelector(".pacom-nav-rail"),o=e.querySelector('[data-role="toggle-sidebar"]');T&&T.classList.toggle("is-collapsed",I),o&&(o.title=I?"展开侧栏":"收起侧栏",o.setAttribute("aria-label",o.title),o.innerHTML=ne("panel-left",16)),ee()}),e.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{w=!1,ee(),L=!0,D()}),e.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{x=!x,v(!1)}),e.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{x=!1,w=!1,v(!1)}),e.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",T=>{T.stopPropagation(),w=!w,ee()}),K(),ee(),D();const h=e.querySelector('[data-role="main-stage"]');h&&await Z(h)}const C=S=>{const b=S.target;w&&!b?.closest('[data-role="org-popover"]')&&!b?.closest('[data-role="org-menu-btn"]')&&(w=!1,ee())},g=S=>{if((S.metaKey||S.ctrlKey)&&S.key.toLowerCase()==="k"){S.preventDefault(),w=!1,ee(),L=!L,D();return}S.key==="Escape"&&(L?(L=!1,D()):w?(w=!1,ee()):x&&(x=!1,v(!1)))},z=()=>{i=Re(),w=!1,x=!1,L=!1,v(!0),G()};function Y(){document.removeEventListener("click",C),document.removeEventListener("keydown",g),window.removeEventListener("hashchange",z)}document.addEventListener("click",C),document.addEventListener("keydown",g),window.addEventListener("hashchange",z),await v(!0),G()}const Dt=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,qt='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',Ot='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',ke=ne("x",16),He={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},zt={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function Rt(e){const t=e.replace(/\D/g,"");return t.length===11?`${t.slice(0,3)} •••• ${t.slice(7)}`:e}function ve(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Ze(e,t,l){e.classList.add("bare-login"),document.title="登录 · PACOM Station";let a=!1,n=!1,i="",I="",x="",w="",W=!1,L={},R="",M=!1,H="",G=0,U=null,P=null,O="privacy",D="",Q="",Z="";const A=t.mode==="demo"&&typeof t.switchDemoRole=="function";function q(){U!==null&&(window.clearInterval(U),U=null),e.classList.remove("bare-login")}function ee(){G=60,U!==null&&window.clearInterval(U),U=window.setInterval(()=>{G-=1,G<=0&&(G=0,U!==null&&(window.clearInterval(U),U=null));const C=e.querySelector('[data-act="send-sms"]');C&&(C.disabled=G>0,C.textContent=G>0?`${G} 秒后重发`:H?"重新获取":"获取验证码")},1e3)}function K(){if(!P)return"";if(P==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${ke}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${ve(Q)}" />
                  </div>
                </div>
                ${Z?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${ve(Z)}</p>`:""}
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
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${ke}</button>
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
      `;if(P==="legal"){const C=He[O],g=["privacy","terms","service"].map(z=>`<button type="button" role="tab" aria-selected="${O===z}" class="au-legal-tab ${O===z?"is-active":""}" data-act="switch-legal" data-tab="${z}">${He[z].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${ke}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${g}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${C.items.map(z=>`<li>${ve(z)}</li>`).join("")}
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
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${ke}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${D||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:P==="demoRoles"&&A?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择演示角色</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${ke}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(me).map(C=>{const g=me[C];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${C}">
                        <div>
                          <b>${ve(g.roleLabel)} · ${ve(g.displayName)}</b>
                          <small>${ve(zt[C])}</small>
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
      `:""}function c(){const C=a?`
        <div class="au-field ${L.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ve(x)}" aria-invalid="${L.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${G>0?"disabled":""}>
              ${G>0?`${G} 秒后重发`:H?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${ve(L.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${H?`验证码已发送至 ${ve(Rt(H))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${L.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ve(i)}" aria-invalid="${L.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${ve(L.id??"")}</p>
        </div>
      `,g=a?`
        <div class="au-field ${L.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ve(w)}" aria-invalid="${L.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${ve(L.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${L.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${n?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ve(I)}" aria-invalid="${L.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${n?"隐藏密码":"显示密码"}">
              ${n?Ot:qt}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${ve(L.pwd??"")}</p>
        </div>
      `;e.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${Dt}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${M?"disabled":""}>
                  ${C}
                  ${g}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${R?"":"hidden"}>${ve(R)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${W?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${M?"disabled":""}>
                    ${M?"正在登录…":"登录"}
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
      ${K()}
    `,v()}function v(){const C=e.querySelector("#au-id"),g=e.querySelector("#au-pwd"),z=e.querySelector("#au-sphone"),Y=e.querySelector("#au-scode"),S=e.querySelector('input[name="keep"]');C?.addEventListener("input",()=>{if(i=C.value,L.id||R){delete L.id,R="",C.closest(".au-field")?.classList.remove("bad");const b=e.querySelector("#au-id-err");b&&(b.textContent="");const h=e.querySelector("#au-login-ferr");h&&(h.hidden=!0)}}),g?.addEventListener("input",()=>{if(I=g.value,L.pwd||R){delete L.pwd,R="",g.closest(".au-field")?.classList.remove("bad");const b=e.querySelector("#au-pwd-err");b&&(b.textContent="");const h=e.querySelector("#au-login-ferr");h&&(h.hidden=!0)}}),z?.addEventListener("input",()=>{if(x=z.value,L.sphone||R){delete L.sphone,R="",z.closest(".au-field")?.classList.remove("bad");const b=e.querySelector("#au-sphone-err");b&&(b.textContent="");const h=e.querySelector("#au-login-ferr");h&&(h.hidden=!0)}}),Y?.addEventListener("input",()=>{if(w=Y.value.replace(/\D/g,"").slice(0,6),Y.value=w,L.scode||R){delete L.scode,R="",Y.closest(".au-field")?.classList.remove("bad");const b=e.querySelector("#au-scode-err");b&&(b.textContent="");const h=e.querySelector("#au-login-ferr");h&&(h.hidden=!0)}}),S?.addEventListener("change",()=>{W=S.checked}),e.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{n=!n,c(),e.querySelector("#au-pwd")?.focus()}),e.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{a=!a,L={},R="",c(),e.querySelector(a?"#au-sphone":"#au-id")?.focus()}),e.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const b=x.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(b)){L={sphone:"请输入有效的手机号码"},c(),e.querySelector("#au-sphone")?.focus();return}L={},H=b,ee(),c(),e.querySelector("#au-scode")?.focus()}),e.querySelector('form[data-form="login"]')?.addEventListener("submit",async b=>{if(b.preventDefault(),!M){if(L={},R="",a?(x.trim()||(L.sphone="请输入手机号码"),/^\d{6}$/.test(w.trim())||(L.scode="请输入 6 位验证码")):(i.trim()||(L.id="请输入电子邮箱或手机号码"),I||(L.pwd="请输入密码")),Object.keys(L).length>0){c();const h=Object.keys(L)[0];e.querySelector(`#au-${h}`)?.focus();return}M=!0,c();try{const h=await t.login({account:(a?x:i).trim(),password:a?w.trim():I});q(),l(h)}catch(h){M=!1,R=h instanceof Error?h.message:"账户或密码不正确",c()}}}),e.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{Q=i.trim(),Z="",P="reset",c(),e.querySelector("#au-rs-id")?.focus()}),e.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{P="register",c()}),e.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{P="legal",c()}),e.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{D="",P="contact",c()}),e.querySelectorAll('[data-act="open-demo-roles"]').forEach(b=>{b.addEventListener("click",()=>{P="demoRoles",c()})}),e.querySelectorAll('[data-act="close-modal"]').forEach(b=>{b.addEventListener("click",()=>{P=null,c()})}),e.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",b=>{b.target===b.currentTarget&&(P=null,c())}),e.querySelectorAll('[data-act="switch-legal"]').forEach(b=>{b.addEventListener("click",()=>{const h=b.dataset.tab;h&&(O=h,c())})}),e.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),D="已复制"}catch{D="support@pacom.cn"}c()}),e.querySelector("#au-reset-form")?.addEventListener("submit",b=>{b.preventDefault(),Q=e.querySelector("#au-rs-id")?.value.trim()??"",Q?A?Z="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":Z="如账户存在，验证码已发送。":Z="请输入电子邮箱或手机号码",c()}),e.querySelectorAll('[data-act="pick-demo-role"]').forEach(b=>{b.addEventListener("click",async()=>{const h=b.dataset.roleId;if(!h||!t.switchDemoRole)return;const T=await t.switchDemoRole(h);q(),l(T)})})}c()}async function Nt(){const e=document.getElementById("app");if(e)try{const t=Ke(),l=await t.getSession(),a=async n=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await Tt(e,t,n,()=>{Ze(e,t,i=>{a(i)})})};if(!l||window.location.hash==="#login"){Ze(e,t,n=>{a(n)});return}await a(l)}catch(t){e.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(t)}</div></div>`}}Nt();
//# sourceMappingURL=index-BJUB3uy5.js.map
