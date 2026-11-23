(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const $ of n.addedNodes)$.tagName==="LINK"&&$.rel==="modulepreload"&&a($)}).observe(document,{childList:!0,subtree:!0});function s(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerPolicy&&(n.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?n.credentials="include":l.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(l){if(l.ep)return;l.ep=!0;const n=s(l);fetch(l.href,n)}})();const c={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},U={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[c.projectId,c.project1Id],allowedBuildingIds:[c.buildingId,c.buildingFId],allowedFloorIds:[c.lockedFloor8Id,c.floorId,c.lockedFloor6Id],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[c.projectId],allowedBuildingIds:[c.buildingId,c.buildingFId],allowedFloorIds:[c.lockedFloor8Id,c.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[c.projectId],allowedBuildingIds:[c.buildingId],allowedFloorIds:[c.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[c.projectId],allowedBuildingIds:[c.buildingId],allowedFloorIds:[c.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[c.projectId],allowedBuildingIds:[c.buildingId],allowedFloorIds:[c.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},se="pacom.web.demo.role";class ke{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){const e=sessionStorage.getItem(se);e&&U[e]&&(this.activeSession=structuredClone(U[e]));const s=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:c.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:s,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:c.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:c.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:s,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:c.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:s,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:s,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:s,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:s,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:c.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:s,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:c.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:s,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:s,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:s,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:s,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:s,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:s},{id:"conn-e7f-dali",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:s},{id:"conn-e7f-modbus",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:c.projectId,floorId:c.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:c.projectId,floorId:c.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:c.projectId,floorId:c.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:c.projectId,floorId:c.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:c.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:c.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:c.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:s,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:c.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:c.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:c.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:s,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:c.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:s,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(U).map((a,l)=>({userId:a.userId,displayName:a.displayName,email:`${a.role.replaceAll("_",".")}@pacom.local`,role:a.role,roleLabel:a.roleLabel,scopeSummary:a.scope.allowedZoneIds?.length?`E栋 7F（${a.scope.allowedZoneIds.length} 个我的区域）`:`${a.scope.allowedProjectIds.length} 项目 / ${a.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:l===0?s:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(e,s,a,l,n){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:s,endpoint:a,request:n,response:l}),this.traces.length>40&&this.traces.pop()}pushAudit(e,s,a,l){const n=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:n?.displayName??"anonymous",role:n?.role??"member",action:e,target:s,result:a,detail:l})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){if(!e.account.trim()||!e.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const s=e.account.includes("admin")?"org_admin":e.account.includes("eng")?"commissioning_engineer":e.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(U[s]),sessionStorage.setItem(se,s),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:e.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(se),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(e){return this.activeSession=structuredClone(U[e]),sessionStorage.setItem(se,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}async getSpatialTree(){const e=this.requireSession(),s=[{id:c.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"},{id:c.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"}],a=[{id:c.buildingId,projectId:c.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.png"},{id:c.buildingFId,projectId:c.projectId,name:"F栋",aboveFloors:12,belowFloors:2,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.png"}],l={projects:s.filter(n=>e.scope.allowedProjectIds.includes(n.id)),buildings:a.filter(n=>e.scope.allowedBuildingIds.includes(n.id)),floors:[{id:c.lockedFloor8Id,buildingId:c.buildingId,kind:"above",level:8,name:"8F",plan:null},{id:c.floorId,buildingId:c.buildingId,kind:"above",level:7,name:"7F",areaSqm:1383.1,plan:{floorId:c.floorId,imageUrl:"./media/7F.webp",planVersion:1,updatedAt:"2026-11-22T00:00:00Z"}},{id:c.lockedFloor6Id,buildingId:c.buildingId,kind:"above",level:6,name:"6F",plan:null}],zones:[{id:"zone-e7f-lab-east",floorId:c.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:c.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:c.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:c.floorId,name:"核心走廊与弱电井",category:"corridor"}]};return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:l.projects.length,buildings:l.buildings.length,floors:l.floors.length}),l}async getFloorDevices(e){const s=this.requireSession();if(!s.scope.allowedFloorIds.includes(e)){const l={code:"FORBIDDEN",status:403,message:`当前角色「${s.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,l),this.pushAudit("floor.read",e,"denied",l.message),new Error(`403 FORBIDDEN: ${l.message}`)}if(e!==c.floorId)return[];let a=structuredClone(this.devices);return s.scope.allowedZoneIds?.length&&(a=a.filter(l=>l.logicalZoneId&&s.scope.allowedZoneIds.includes(l.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:a.length}),a}async dispatchControlBatch(e){const s=this.requireSession();if(!s.scope.canControlDevices||!s.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权下发控制指令`);const a=`batch-e7f-${Date.now().toString(36)}`,l={batchId:a,floorId:e.floorId,createdBy:s.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(n=>({deviceId:n.deviceId,command:n.command,targetValue:n.targetValue,status:"queued"}))};return this.batches.set(a,l),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",l,e),this.pushAudit("control.dispatch",a,"success",`下发 ${e.targets.length} 台设备`),l.receipts.forEach((n,$)=>{const x=this.devices.find(p=>p.id===n.deviceId);setTimeout(()=>{n.status="dispatched",n.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:a,deviceId:n.deviceId,status:"dispatched",at:n.dispatchedAt})},280+$*120),setTimeout(()=>{const p=new Date().toISOString();!x||x.connectivity==="offline"?(n.status="timeout",n.errorCode="GATEWAY_READBACK_TIMEOUT",n.errorMessage="设备离线，网关未收到回读确认",n.verifiedAt=p):(n.status="verified_success",n.observedValue=n.targetValue,n.verifiedAt=p,this.applyObservedTelemetry(x,n.command,n.targetValue,p)),this.emit({type:"control.receipt.updated",batchId:a,deviceId:n.deviceId,status:n.status,observedValue:n.observedValue,at:p})},900+$*220)}),structuredClone(l)}applyObservedTelemetry(e,s,a,l){s==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:a,collectedAt:l,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(a)>0,collectedAt:l,stale:!1})):(s==="lighting.power"||s==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:a,collectedAt:l,stale:!1}:s==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:a,collectedAt:l,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:l,values:{[s]:a}})}async getControlBatch(e){this.requireSession();const s=this.batches.get(e);if(!s)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(s)}async listAlarms(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==c.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,s){const a=this.requireSession();if(!a.scope.canManageAlarms){const n=`角色「${a.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",n),new Error(`403 FORBIDDEN: ${n}`)}const l=this.alarms.find(n=>n.id===e);if(!l)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return l.status="acknowledged",l.acknowledgedAt=new Date().toISOString(),l.acknowledgedBy=a.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,l,{note:s}),this.pushAudit("alarm.acknowledge",e,"success",s),this.emit({type:"alarm.changed",floorId:l.floorId,alarmId:e,status:"acknowledged",at:l.acknowledgedAt}),structuredClone(l)}async listWorkOrders(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==c.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建工单`);const a=new Date().toISOString(),l={id:`wo-e7f-${Date.now().toString(36)}`,projectId:c.projectId,buildingId:c.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:a,updatedAt:a};if(this.workOrders.unshift(l),e.alarmId){const n=this.alarms.find($=>$.id===e.alarmId);n&&(n.workOrderId=l.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",l,e),this.pushAudit("work_order.create",l.id,"success",l.title),structuredClone(l)}async updateWorkOrderStatus(e,s){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权流转工单`);const l=this.workOrders.find(n=>n.id===e);if(!l)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return l.status=s,l.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,l,{status:s}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${s}`),structuredClone(l)}async updateDevicePlanPoint(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权编辑图纸标点`);const a=this.devices.find(l=>l.id===e.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(a.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${a.version}，请刷新后重试`);return a.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},a.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,a,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${a.planPoint.x}, ${a.planPoint.y})`),structuredClone(a)}async updateDeviceHardwareBinding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改硬件绑定`);const a=this.devices.find(n=>n.id===e.deviceId);if(!a)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(a.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${a.version}）`);const l=new Date().toISOString();return a.physicalInstalled=e.physicalInstalled,a.physicalVerifiedAt=e.physicalInstalled?l:null,a.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:l,boundBy:s.displayName},a.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,a,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(a)}async listConnections(e){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,s){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权冻结交付批次`);const l=this.devices.filter($=>$.physicalInstalled&&$.hardwareBinding).length,n={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:c.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:l,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:a.displayName,note:s||"例行交付基线冻结"};return this.deliveryBatches.unshift(n),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,n,{note:s}),this.pushAudit("delivery.freeze",n.id,"success",`${l}/${this.devices.length} 已现场核验`),structuredClone(n)}async getAnalysisReport(e,s,a){this.requireSession();const l=s==="today"?1:s==="7d"?7:30,$={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*l)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*l).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(C=>C.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*l).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*l).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*l).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],x=s==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],p={category:e,range:s,scopeId:a,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:$.kpis,unit:$.unit,series:$.base.map((C,S)=>({label:x[S],value:Math.round(C*(e==="energy"||e==="carbon"?l/2+.5:1)),baseline:Math.round(C*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:$.base[3],unit:$.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:$.base[4],unit:$.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:$.base[1],unit:$.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${s}&scopeId=${a}`,{kpis:p.kpis.length}),p}async listScenes(e){return this.requireSession(),structuredClone(this.scenes)}async createScene(e){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const a={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(a),this.record("REST","createScene","POST /api/v1/scenes",a,e),this.pushAudit("scene.create",a.id,"success",a.name),structuredClone(a)}async executeScene(e){const s=this.scenes.find(l=>l.id===e);if(!s)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const a=await this.dispatchControlBatch({floorId:s.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:s.actions,reason:`触发场景：${s.name}`});return s.lastExecutedAt=new Date().toISOString(),s.lastBatchId=a.batchId,a}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:c.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,s,a){this.requireSession();const l=a>=this.calendar.nightGuardStart?`下班时间 ${a} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,n=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${s} - ${a}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${s} (-30m) ~ ${a} (+30m)`,conflictWarning:l},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:l}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",n,{workdayStart:s,workdayEnd:a}),n}async saveWorkCalendar(e,s,a,l){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权修改运行日历`);if(this.calendar.version!==l)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(s>=a)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:s,workdayEnd:a,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:s,workdayEnd:a,expectedVersion:l}),this.pushAudit("settings.calendar",c.projectId,"success",`${s}-${a}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,s,a){const l=this.requireSession();if(!l.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权启停运行规则`);const n=this.rules.find($=>$.id===e);if(!n)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(n.version!==a)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${n.version}）`);return n.enabled=s,n.version+=1,n.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,n,{enabled:s,expectedVersion:a}),this.pushAudit("settings.rule_toggle",e,"success",s?"启用":"停用"),structuredClone(n)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,s){const a=this.requireSession();if(a.role!=="org_admin"&&a.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const l=U[s],n={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:s,roleLabel:l.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(n),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",n,{email:e,role:s}),this.pushAudit("org.invite",e,"success",l.roleLabel),structuredClone(n)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(e,s){return e!==c.floorId?()=>{}:(this.listeners.add(s),()=>{this.listeners.delete(s)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${c.floorId}`,e),this.listeners.forEach(s=>s(e))}}function Ee(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new ke}async function Ae(t,e,s,a,l){let n="profile",$=await e.listOrgMembers(),x=await e.listAuditLogs(),p="",C="all",S="all",k="all",O=!1,D=!1,A="";async function d(){[$,x]=await Promise.all([e.listOrgMembers(),e.listAuditLogs()]),i()}function i(){const B=e.mode==="demo"&&typeof e.switchDemoRole=="function",R=p.trim().toLowerCase(),j=$.filter(b=>C!=="all"&&b.role!==C?!1:R?`${b.displayName} ${b.email} ${b.roleLabel} ${b.scopeSummary}`.toLowerCase().includes(R):!0),r=x.filter(b=>{if(S==="success"&&b.result!=="success"||S==="denied"&&b.result==="success")return!1;if(k!=="all"){const M=`${b.action} ${b.target}`.toLowerCase();if(k==="control"&&!M.includes("control")&&!M.includes("scene")&&!M.includes("控制")||k==="alarm"&&!M.includes("alarm")&&!M.includes("work")&&!M.includes("告警")||k==="deploy"&&!M.includes("deploy")&&!M.includes("plan")&&!M.includes("hardware")&&!M.includes("部署"))return!1}return!0});t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">机构与账户设置</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">广州国家实验室</span>
              <span class="pacom-badge pacom-badge--accent">${s.roleLabel}</span>
            </div>
          </div>
        </header>

        ${A?`<div class="pacom-alert-banner">${A}</div>`:""}

        <div class="lov-subnav-layout">
          <nav class="lov-subnav-rail" aria-label="机构与账户分组">
            <div class="lov-subnav-group">
              <div class="lov-subnav-group-title">工作空间</div>
              <button class="lov-subnav-item" aria-current="${n==="profile"?"true":"false"}" data-atab="profile">
                <span>我的账户与权限</span>
              </button>
              <button class="lov-subnav-item" aria-current="${n==="members"?"true":"false"}" data-atab="members">
                <span>成员与角色</span>
                <span class="pacom-badge pacom-badge--neutral">${$.length}</span>
              </button>
            </div>
            <div class="lov-subnav-group">
              <div class="lov-subnav-group-title">安全与审计</div>
              <button class="lov-subnav-item" aria-current="${n==="audit"?"true":"false"}" data-atab="audit">
                <span>操作审计日志</span>
                <span class="pacom-badge pacom-badge--neutral">${x.length}</span>
              </button>
            </div>
          </nav>

          <div class="lov-subnav-main">
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

                ${B?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">多角色权限预览切换</h2>
                        <span class="pacom-badge pacom-badge--neutral">仅 Demo 预览可用</span>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(U).map(b=>{const M=U[b];return`
                              <button class="pacom-role-card ${b===s.role?"is-active":""}" data-switch-role="${b}">
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
                      <button class="pacom-btn" data-copy-session="1">${D?"已复制":"复制 JSON"}</button>
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
                  ${O?`
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
                                ${Object.keys(U).map(b=>`<option value="${b}">${U[b].roleLabel}</option>`).join("")}
                              </select>
                              <button class="pacom-btn pacom-btn--primary" type="submit">发送邀请</button>
                            </div>
                          </div>
                        </form>
                      </section>`:""}

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">机构成员目录</h2>
                      <span class="pacom-row-sub">共 ${j.length} 人</span>
                    </div>
                    <div class="lov-table-card">
                      <div class="lov-table-toolbar">
                        <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                          <input class="pacom-input" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${p}" />
                          <select class="pacom-select" data-role-filter>
                            <option value="all" ${C==="all"?"selected":""}>全部角色</option>
                            ${Object.keys(U).map(b=>`<option value="${b}" ${C===b?"selected":""}>${U[b].roleLabel}</option>`).join("")}
                          </select>
                        </div>
                        <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                          ${O?"收起邀请":"+ 邀请成员"}
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
                            ${j.map(b=>`
                                <tr>
                                  <td>
                                    <div style="display:flex; align-items:center; gap:10px;">
                                      <span class="pacom-pop-avatar">${b.displayName.slice(0,1)}</span>
                                      <div>
                                        <div style="font-weight:500;">${b.displayName}</div>
                                        <div class="pacom-row-sub">${b.email}</div>
                                      </div>
                                    </div>
                                  </td>
                                  <td><span class="pacom-badge pacom-badge--neutral">${b.roleLabel}</span></td>
                                  <td><span class="pacom-row-sub">${b.scopeSummary}</span></td>
                                  <td>
                                    <span class="pacom-badge ${b.status==="active"?"pacom-badge--online":"pacom-badge--accent"}">
                                      ${b.status==="active"?"正常":b.status}
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
                          <button class="pacom-tab" aria-selected="${S==="all"}" data-audit-filter="all">全部（${x.length}）</button>
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
                            ${r.map(b=>`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${b.action}</div>
                                    ${b.detail?`<div class="pacom-row-sub">${b.detail}</div>`:""}
                                  </td>
                                  <td><code style="font-size:12px;">${b.target}</code></td>
                                  <td>${b.actor}</td>
                                  <td><span class="pacom-row-sub">${b.at.slice(0,19).replace("T"," ")}</span></td>
                                  <td>
                                    <span class="pacom-badge ${b.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                                      ${b.result==="success"?"成功":b.result}
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
    `,t.querySelectorAll("[data-atab]").forEach(b=>{b.addEventListener("click",()=>{n=b.dataset.atab,A="",i()})}),t.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",l()}),t.querySelector("[data-copy-session]")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(s,null,2)),D=!0,i(),window.setTimeout(()=>{D=!1,i()},1600)}catch{}}),t.querySelectorAll("[data-switch-role]").forEach(b=>{b.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const M=await e.switchDemoRole(b.dataset.switchRole);a(M)})}),t.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{O=!O,i()}),t.querySelector("[data-member-search]")?.addEventListener("input",b=>{const M=b.currentTarget,o=M.selectionStart??M.value.length;p=M.value,i();const w=t.querySelector("[data-member-search]");w&&(w.focus(),w.setSelectionRange(o,o))}),t.querySelector("[data-role-filter]")?.addEventListener("change",b=>{C=b.currentTarget.value,i()}),t.querySelectorAll("[data-audit-filter]").forEach(b=>{b.addEventListener("click",()=>{S=b.dataset.auditFilter??"all",i()})}),t.querySelector("[data-audit-cat]")?.addEventListener("change",b=>{k=b.currentTarget.value??"all",i()}),t.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async b=>{b.preventDefault(),A="";const M=new FormData(b.currentTarget);try{await e.inviteOrgMember(String(M.get("email")??""),String(M.get("role"))),O=!1,await d()}catch(o){A=o instanceof Error?o.message:String(o),i()}})}i()}const Le={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},je={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},Ce={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function Oe(t){const e=`${t.title} ${t.message}`.toLowerCase();return e.includes("离线")||e.includes("modbus")||e.includes("心跳")?"建议先在「系统部署 → 系统接入」核查边缘网关与 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":e.includes("co₂")||e.includes("co2")||e.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」查看实时遥测与设备工况，确认后可标记已处置或一键转工单。"}async function De(t,e,s){let a=[],l=[],n=[],$="alarms",x="all",p="all",C=!1,S=!1,k="",O=null;const D=new Set,A=new Set,d=new Set;let i="",B="";async function R(){[a,l,n]=await Promise.all([e.listAlarms(c.floorId),e.listWorkOrders(c.floorId),e.getFloorDevices(c.floorId).catch(()=>[])]),r()}function j(z){if(!z)return{name:"楼层通用",zone:"E7F"};const b=n.find(M=>M.id===z);return b?{name:b.name,zone:(b.logicalZoneId?Ce[b.logicalZoneId]:void 0)??"E7F"}:{name:z,zone:"E7F"}}function r(){const z=a.filter(v=>v.status==="active"&&!A.has(v.id)),b=l.filter(v=>v.status==="open"||v.status==="assigned"||v.status==="in_progress"),M=a.filter(v=>v.status!=="active").length+d.size,o=A.size,w=k.trim().toLowerCase(),T=a.filter(v=>{const u=A.has(v.id);if(x==="snoozed"){if(!u)return!1}else if(x==="active"){if(v.status!=="active"||u)return!1}else if(x==="acknowledged"){if(v.status!=="acknowledged")return!1}else if(u)return!1;if(p!=="all"&&v.severity!==p)return!1;if(!w)return!0;const N=j(v.deviceId);return`${v.title} ${v.message} ${N.name} ${N.zone} ${v.deviceId}`.toLowerCase().includes(w)}),L=new Map;for(const v of T){const u=S?v.deviceId:v.id,N=L.get(u)??[];N.push(v),L.set(u,N)}const V=Array.from(L.values()),Z=l.filter(v=>{if(C&&(v.status==="resolved"||v.status==="closed"))return!1;if(!w)return!0;const u=j(v.deviceId);return`${v.title} ${v.description} ${v.id} ${u.name}`.toLowerCase().includes(w)}),Y=x==="active"?"仅看待处理":x==="acknowledged"?"仅看已确认":x==="snoozed"?"仅看已忽略 24h":"";t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">告警中心</h1>
              <div class="pacom-tabs" role="tablist" aria-label="告警中心视图">
                <button class="pacom-tab" role="tab" aria-selected="${$==="alarms"}" data-main-tab="alarms">
                  实时告警（${a.length-o}）
                </button>
                <button class="pacom-tab" role="tab" aria-selected="${$==="workorders"}" data-main-tab="workorders">
                  运维工单（${l.length}）
                </button>
              </div>
            </div>

            <div class="pacom-header-meta">
              ${$==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="lov-switch" role="switch" aria-checked="${S}" data-toggle-group="1" aria-label="按设备根因归并">
                      <span class="lov-switch-thumb"></span>
                    </button>
                  </label>`:`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>仅看未结工单</span>
                    <button type="button" class="lov-switch" role="switch" aria-checked="${C}" data-toggle-open-wo="1" aria-label="仅看未结工单">
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

        <div class="pacom-content-page" style="padding:4px 0 24px;">
          <div class="lov-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="lov-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${$==="alarms"&&x==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">待处理告警</span>
              <div class="lov-kpi-value">${z.length}<span class="lov-kpi-unit">条</span></div>
              <span class="lov-kpi-delta">点击快速筛选待处理</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${$==="workorders"&&C?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">处理中工单</span>
              <div class="lov-kpi-value">${b.length}<span class="lov-kpi-unit">单</span></div>
              <span class="lov-kpi-delta">点击聚焦未结工单</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${$==="alarms"&&x==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">已确认 / 闭环</span>
              <div class="lov-kpi-value">${M}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">24h 无复发即计入有效</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="snoozed"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${$==="alarms"&&x==="snoozed"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">已忽略 24h</span>
              <div class="lov-kpi-value">${o}<span class="lov-kpi-unit">条</span></div>
              <span class="lov-kpi-delta">到期自动恢复监控</span>
            </button>
          </div>

          ${i?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${i}</span></div>`:""}
          ${B?`<div class="pacom-alert-banner">${B}</div>`:""}

          ${$==="alarms"?`
              <section class="lov-table-card">
                <div class="lov-table-toolbar">
                  <div class="lov-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" style="max-width:260px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${k}" aria-label="搜索告警" />
                    <select class="pacom-select" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${p==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${p==="critical"?"selected":""}>严重</option>
                      <option value="major" ${p==="major"?"selected":""}>重要</option>
                      <option value="minor" ${p==="minor"?"selected":""}>一般</option>
                    </select>
                    ${Y?`<button type="button" class="pacom-btn pacom-btn--ghost" data-clear-kpi="1">${Y} ×</button>`:""}
                  </div>
                  <div class="lov-table-toolbar-group">
                    ${D.size>0&&s.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${D.size}）</button>`:""}
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
                          ${V.map(v=>{const u=v[0],N=je[u.severity]??{label:u.severity,cls:"pacom-badge--neutral"},K=j(u.deviceId),ae=O===u.id,ee=A.has(u.id),oe=D.has(u.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" data-check-alarm="${u.id}" ${oe?"checked":""} ${u.status!=="active"||ee?"disabled":""} aria-label="选择 ${u.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${N.cls}">${N.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                      <span>${u.title}</span>
                                      ${v.length>1?`<span class="pacom-badge pacom-badge--accent">归并 ${v.length} 条</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${u.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${K.name}</div>
                                    <div class="pacom-row-sub">${K.zone}</div>
                                  </td>
                                  <td><span class="pacom-row-sub">${u.triggeredAt?u.triggeredAt.slice(5,16).replace("T"," "):"-"}</span></td>
                                  <td>
                                    <span class="pacom-badge ${ee?"pacom-badge--neutral":u.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${ee?"已忽略 24h":u.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${ee?`<button class="pacom-btn" data-unsnooze="${u.id}">恢复监控</button>`:`
                                            ${u.status==="active"?`<button class="pacom-btn" data-mark-actioned="${u.id}" ${s.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${u.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${u.id}" ${s.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${u.id}">${ae?"收起":"详情"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${ae?`
                                    <tr class="lov-table-detail-row">
                                      <td colspan="7">
                                        <div style="display:flex; flex-direction:column; gap:10px;">
                                          <div style="font-size:13px; color:var(--pacom-text-body);">
                                            <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${Oe(u)}
                                          </div>
                                          <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                                            <div class="pacom-row-sub">
                                              告警编号 <code>${u.id}</code> · 设备编号 <code>${u.deviceId}</code> · 关联工单 ${u.workOrderId??"无"}
                                            </div>
                                            <div style="display:flex; gap:8px; align-items:center;">
                                              ${!ee&&u.status==="active"?`<button class="pacom-btn" data-snooze="${u.id}">忽略 24h</button>`:""}
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
                          ${Z.map(v=>{const u=j(v.deviceId);return`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${v.title}</div>
                                    <div class="pacom-row-sub">${v.description} · <code>${v.id}</code></div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${u.name}</div>
                                    <div class="pacom-row-sub">${u.zone}</div>
                                  </td>
                                  <td><span class="pacom-row-sub">${v.createdAt?v.createdAt.slice(5,16).replace("T"," "):"-"}</span></td>
                                  <td style="text-align:right;">
                                    <select class="pacom-select" data-wo-status="${v.id}" aria-label="更新工单状态">
                                      ${["open","assigned","in_progress","resolved","closed"].map(N=>`<option value="${N}" ${v.status===N?"selected":""}>${Le[N]}</option>`).join("")}
                                    </select>
                                  </td>
                                </tr>`}).join("")}
                        </tbody>
                      </table>
                    </div>`}
              </section>`}
        </div>
      </div>
    `,t.querySelectorAll("[data-main-tab]").forEach(v=>{v.addEventListener("click",()=>{$=v.dataset.mainTab??"alarms",i="",r()})}),t.querySelectorAll("[data-kpi-filter]").forEach(v=>{v.addEventListener("click",()=>{const u=v.dataset.kpiFilter;i="",u==="workorders"?($="workorders",C=!C):(u==="active"||u==="acknowledged"||u==="snoozed")&&($="alarms",x=x===u?"all":u),r()})}),t.querySelector("[data-clear-kpi]")?.addEventListener("click",()=>{x="all",r()}),t.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{i="",R()}),t.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{S=!S,r()}),t.querySelector("[data-toggle-open-wo]")?.addEventListener("click",()=>{C=!C,r()}),t.querySelector("[data-severity-filter]")?.addEventListener("change",v=>{p=v.currentTarget.value,r()}),t.querySelector("[data-alarm-search]")?.addEventListener("input",v=>{const u=v.currentTarget,N=u.selectionStart??u.value.length;k=u.value,r();const K=t.querySelector("[data-alarm-search]");K&&(K.focus(),K.setSelectionRange(N,N))}),t.querySelectorAll("[data-check-alarm]").forEach(v=>{v.addEventListener("change",()=>{const u=v.dataset.checkAlarm;u&&(v.checked?D.add(u):D.delete(u),r())})}),t.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{B="";const v=Array.from(D);try{for(const u of v)await e.acknowledgeAlarm(u,"告警中心批量确认"),d.add(u);D.clear(),i=`已批量确认 ${v.length} 条告警，未来 24 小时持续校验无复发。`,await R()}catch(u){B=u instanceof Error?u.message:String(u),r()}}),t.querySelectorAll("[data-expand-alarm]").forEach(v=>{v.addEventListener("click",()=>{const u=v.dataset.expandAlarm??null;O=O===u?null:u,r()})}),t.querySelectorAll("[data-locate-home]").forEach(v=>{v.addEventListener("click",()=>{window.location.hash="#home"})}),t.querySelectorAll("[data-snooze]").forEach(v=>{v.addEventListener("click",()=>{const u=v.dataset.snooze;u&&(A.add(u),D.delete(u),i="已将该告警限时忽略 24 小时，可在上方「已忽略 24h」磁贴中随时恢复。",r())})}),t.querySelectorAll("[data-unsnooze]").forEach(v=>{v.addEventListener("click",()=>{const u=v.dataset.unsnooze;u&&(A.delete(u),i="已恢复该告警的实时监控。",r())})}),t.querySelectorAll("[data-mark-actioned]").forEach(v=>{v.addEventListener("click",async()=>{B="";const u=v.dataset.markActioned;try{await e.acknowledgeAlarm(u,"现场自处理完成（Mark Actioned）"),d.add(u),D.delete(u),i="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await R()}catch(N){B=N instanceof Error?N.message:String(N),r()}})}),t.querySelectorAll("[data-to-wo]").forEach(v=>{v.addEventListener("click",async()=>{B="";const u=a.find(N=>N.id===v.dataset.toWo);if(u)try{await e.createWorkOrder({floorId:u.floorId,deviceId:u.deviceId,alarmId:u.id,title:`处置告警：${u.title}`,description:u.message}),i=`已将「${u.title}」转为运维工单。`,await R()}catch(N){B=N instanceof Error?N.message:String(N),r()}})}),t.querySelectorAll("[data-wo-status]").forEach(v=>{v.addEventListener("change",async()=>{B="";try{await e.updateWorkOrderStatus(v.dataset.woStatus,v.value),i="工单状态已更新并写入审计日志。",await R()}catch(u){B=u instanceof Error?u.message:String(u),await R()}})})}await R()}const ne=[{id:"energy",label:"能源",desc:"分项能耗与峰谷负荷趋势"},{id:"environment",label:"环境",desc:"温湿度、CO₂ 与洁净室舒适度"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与异常分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能基线对比"}],ie=[{id:c.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:c.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:c.projectId,label:"广实2号园（全园区）",factor:18.2}],Fe={energy:{title:"分项能耗构成与节能估算",summary:"较目标基线节省约 ¥ 1,420 / 月，主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"舒适度达标构成",summary:"全天温湿度综合达标率 96.2%，CO₂ 浓度全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"CO₂ 优良时段（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}};function Te(t){const e=Math.max(...t.series.map(k=>Math.max(k.value,k.baseline??0)),1),s=46,a=34,l=36,n=Math.max(t.series.length*(s+a)+l*2,620),$=220,x=178,p=138,C=[0,.25,.5,.75,1].map(k=>{const O=Math.round(x-k*p);return`<line x1="${l-8}" y1="${O}" x2="${n-18}" y2="${O}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${k===0?"0":"3 3"}" />`}).join(""),S=t.series.map((k,O)=>{const D=l+O*(s+a),A=Math.max(8,Math.round(k.value/e*p)),d=x-A,i=typeof k.baseline=="number"&&k.value>k.baseline*1.08,B=i?`<rect x="${D-8}" y="28" width="${s+16}" height="${x-28}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",R=typeof k.baseline=="number"?`<line x1="${D-5}" y1="${Math.round(x-k.baseline/e*p)}" x2="${D+s+5}" y2="${Math.round(x-k.baseline/e*p)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"";return`
        ${B}
        ${R}
        <rect x="${D}" y="${d}" width="${s}" height="${A}" rx="7" fill="${i?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        <text x="${D+s/2}" y="${d-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${k.value}</text>
        <text x="${D+s/2}" y="${x+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${k.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${n} ${$}" style="width:100%; height:228px; display:block;" role="img" aria-label="${t.category} 趋势图">
      ${C}
      ${S}
    </svg>
  `}function Me(t){const e=[["时段",`数值 (${t.unit})`,`基线 (${t.unit})`].join(","),...t.series.map(n=>[n.label,String(n.value),n.baseline!==void 0?String(n.baseline):""].join(","))],s=new Blob([`\uFEFF${e.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(s),l=document.createElement("a");l.href=a,l.download=`pacom-${t.category}-${t.range}.csv`,l.click(),URL.revokeObjectURL(a)}async function qe(t,e,s){let a="energy",l="7d",n=c.floorId,$="chart",x=!1,p=null;async function C(){p=await e.getAnalysisReport(a,l,c.floorId),S()}function S(){if(!p)return;const k=ne.find(i=>i.id===a)??ne[0],O=ie.find(i=>i.id===n)??ie[0],D=p.zoneBreakdown.filter(i=>i.status==="warning"),A=Fe[a],d=Math.max(...p.zoneBreakdown.map(i=>i.value),1);t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
              <h1 class="pacom-title">数据分析</h1>
              <div class="pacom-scope-pill" style="width:260px;" title="切换统计空间范围">
                <select data-scope-select aria-label="选择统计空间范围">
                  ${ie.map(i=>`<option value="${i.id}" ${i.id===n?"selected":""}>${i.label}</option>`).join("")}
                </select>
                <span class="pacom-scope-chevron">▾</span>
              </div>
            </div>
            <div class="pacom-header-meta">
              <div class="pacom-tabs" role="group" aria-label="时间范围">
                <button class="pacom-tab" aria-selected="${l==="today"}" data-range="today">今日</button>
                <button class="pacom-tab" aria-selected="${l==="7d"}" data-range="7d">近 7 天</button>
                <button class="pacom-tab" aria-selected="${l==="30d"}" data-range="30d">近 30 天</button>
              </div>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              <button class="pacom-btn ${x?"pacom-btn--primary":""}" data-toggle-canvas="1">${x?"关闭空间对照":"空间对照"}</button>
            </div>
          </div>

          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist" aria-label="分析维度">
              ${ne.map(i=>`<button class="pacom-tab" role="tab" aria-selected="${a===i.id}" data-cat="${i.id}">${i.label}</button>`).join("")}
            </div>
            <span class="pacom-row-sub">口径：${O.label} · 更新于 ${p.updatedAt.slice(5,16).replace("T"," ")}</span>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:4px 0 28px;">
          <div class="lov-kpi-strip" role="region" aria-label="核心统计指标">
            ${p.kpis.map(i=>`
                <div class="lov-kpi-cell">
                  <span class="lov-kpi-label">${i.label}</span>
                  <div class="lov-kpi-value">
                    <span>${i.value}</span>
                    ${i.unit?`<span class="lov-kpi-unit">${i.unit}</span>`:""}
                  </div>
                  <span class="lov-kpi-delta">${i.delta??"与基线持平"}</span>
                </div>`).join("")}
          </div>

          <section class="lov-section">
            <div class="lov-section-head">
              <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                <h2 class="lov-section-title">${k?.label??"趋势"}趋势（${p.unit}）</h2>
                <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
              </div>
              <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                <span class="pacom-row-sub">虚线为目标基线 · 浅红阴影为超基线异常段</span>
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${$==="chart"}" data-chart-mode="chart">趋势图</button>
                  <button class="pacom-tab" aria-selected="${$==="table"}" data-chart-mode="table">明细原表</button>
                </div>
              </div>
            </div>

            <div class="pacom-card" style="gap:16px;">
              ${$==="chart"?Te(p):`
                  <div class="lov-table-wrap">
                    <table class="lov-table">
                      <thead>
                        <tr>
                          <th>统计时段</th>
                          <th>实测值（${p.unit}）</th>
                          <th>基线参考</th>
                          <th>状态</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${p.series.map(i=>{const B=typeof i.baseline=="number"&&i.value>i.baseline*1.08;return`
                              <tr>
                                <td><strong>${i.label}</strong></td>
                                <td>${i.value}</td>
                                <td>${i.baseline??"-"}</td>
                                <td><span class="pacom-badge ${B?"pacom-badge--warning":"pacom-badge--online"}">${B?"超基线":"正常"}</span></td>
                              </tr>`}).join("")}
                      </tbody>
                    </table>
                  </div>`}
              <div class="lov-banner">
                <div class="lov-banner-text">
                  <span class="lov-banner-title">${k?.desc??"空间运行洞察"}</span>
                  <span class="lov-banner-sub">
                    ${D.length>0?`当前有 ${D.length} 个功能区指标偏高（${D.map(i=>i.zoneName).join("、")}），建议前往智能策略优化启停时段。`:A.summary}
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
                <span class="pacom-row-sub">${p.zoneBreakdown.length} 个功能区</span>
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
                      ${p.zoneBreakdown.map(i=>{const B=Math.max(8,Math.round(i.value/d*100));return`
                            <tr>
                              <td style="font-weight:500;">${i.zoneName.replace(/^7F\s*/,"")}</td>
                              <td style="width:140px;">
                                <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                  <div style="width:${B}%; height:100%; border-radius:999px; background:${i.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                </div>
                              </td>
                              <td><strong>${i.value}</strong> <span class="pacom-row-sub">${i.unit}</span></td>
                              <td>
                                <span class="pacom-badge ${i.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                  ${i.status==="warning"?"偏高关注":"正常"}
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
                <h2 class="lov-section-title">${x?"E7F 空间对照预览":A.title}</h2>
                <span class="pacom-row-sub">${x?"与空间总览状态独立":"当前周期结构占比"}</span>
              </div>
              <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                ${x?'<img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':A.items.map(i=>`
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                              <span style="font-weight:500; color:var(--pacom-text-primary);">${i.name}</span>
                              <span class="pacom-row-sub">${i.detail} · <strong style="color:var(--pacom-text-primary);">${i.pct}%</strong></span>
                            </div>
                            <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                              <div style="width:${Math.min(100,i.pct)}%; height:100%; border-radius:999px; background:${i.color};"></div>
                            </div>
                          </div>`).join("")}
              </div>
            </section>
          </div>
        </div>
      </div>
    `,t.querySelectorAll("[data-cat]").forEach(i=>{i.addEventListener("click",()=>{a=i.dataset.cat,C()})}),t.querySelector("[data-scope-select]")?.addEventListener("change",i=>{n=i.currentTarget.value,S()}),t.querySelectorAll("[data-range]").forEach(i=>{i.addEventListener("click",()=>{l=i.dataset.range??"7d",C()})}),t.querySelectorAll("[data-chart-mode]").forEach(i=>{i.addEventListener("click",()=>{$=i.dataset.chartMode??"chart",S()})}),t.querySelector("[data-export-csv]")?.addEventListener("click",()=>{p&&Me(p)}),t.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{x=!x,S()}),t.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"})}await C()}async function ze(t,e,s){let a="floorplan",l=await e.getSpatialTree(),n=[],$=[],x=[],p=null,C=!1,S=null,k="",O="";async function D(){O="";const[d,i,B,R]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(c.floorId).catch(()=>[]),e.listConnections(c.projectId),e.listDeliveryBatches(c.floorId)]);l=d,n=i,$=B,x=R,n.some(j=>j.id===p)||(p=n[0]?.id??null),A()}function A(){const d=n.find(r=>r.id===p)??null,i=s.scope.canEditDeployment,B=$.reduce((r,z)=>r+z.collectedPoints,0),R=$.reduce((r,z)=>r+z.calculatedPoints,0),j=$.filter(r=>r.status==="connected").length;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">系统部署</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge ${i?"pacom-badge--online":"pacom-badge--warning"}">
                ${i?"可编辑部署与硬件绑定":"只读权限（写入将被服务端 403 拦截）"}
              </span>
            </div>
          </div>
          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist">
              <button class="pacom-tab" role="tab" aria-selected="${a==="floorplan"}" data-dtab="floorplan">图纸标点与四态绑定</button>
              <button class="pacom-tab" role="tab" aria-selected="${a==="topology"}" data-dtab="topology">项目空间拓扑</button>
              <button class="pacom-tab" role="tab" aria-selected="${a==="connections"}" data-dtab="connections">系统接入（${$.length}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${a==="delivery"}" data-dtab="delivery">交付冻结（${x.length}）</button>
            </div>
          </div>
        </header>

        ${k?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${k}</span></div>`:""}
        ${O?`<div class="pacom-alert-banner">${O}</div>`:""}

        ${a==="floorplan"?`
            <section class="pacom-split">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:380px;">
                <div class="pacom-pane-toolbar">
                  <div style="font-weight:500;">E7F 设备与四态配置（${n.length}）</div>
                  <div class="pacom-row-sub">
                    图上放点仅更新 <code>planPoint</code>，绝不自动改写物理安装态或硬件端口绑定。
                  </div>
                </div>
                <div class="pacom-list">
                  ${n.map(r=>`
                      <div class="pacom-row ${r.id===p?"is-selected":""}" data-pick-dev="${r.id}">
                        <div style="min-width:0;">
                          <div class="pacom-row-title">${r.name}</div>
                          <div class="pacom-row-sub">v${r.version} · ${r.hardwareBinding?.protocol.toUpperCase()??"未绑定"} · ${r.physicalInstalled?"现场已确认":"待物理复核"}</div>
                        </div>
                        <span class="pacom-badge ${r.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">
                          ${r.planPoint?`${Math.round(r.planPoint.x*100)}%,${Math.round(r.planPoint.y*100)}%`:"未标点"}
                        </span>
                      </div>`).join("")}
                </div>
                ${d?`
                    <form data-role="binding-form" style="padding:14px 16px; border-top:var(--hw) solid var(--pacom-border-subtle); background:var(--pacom-surface-primary); display:flex; flex-direction:column; gap:10px;">
                      <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-weight:500; font-size:13px;">显式硬件绑定与现场复核</span>
                        <span class="pacom-badge pacom-badge--neutral">${d.id}</span>
                      </div>
                      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                        <select class="pacom-select" name="protocol">
                          ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(r=>`<option value="${r}" ${d.hardwareBinding?.protocol===r?"selected":""}>${r.toUpperCase()}</option>`).join("")}
                        </select>
                        <input class="pacom-input" name="networkAddress" placeholder="网络地址/主题" value="${d.hardwareBinding?.networkAddress??""}" />
                      </div>
                      <div style="display:grid; grid-template-columns:1fr auto; gap:8px; align-items:center;">
                        <input class="pacom-input" name="portOrChannel" placeholder="端口/回路" value="${d.hardwareBinding?.portOrChannel??""}" />
                        <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; cursor:pointer;">
                          <input type="checkbox" name="physicalInstalled" ${d.physicalInstalled?"checked":""} />
                          现场物理已复核
                        </label>
                      </div>
                      <div style="display:flex; gap:8px; flex-wrap:wrap;">
                        <button class="pacom-btn" type="button" data-toggle-place="1">${C?"取消点图更新":"点图更新坐标"}</button>
                        <button class="pacom-btn" type="button" data-ftt-test="1" title="远程验证指令下发、状态回读并自动恢复工况">单机回读自检</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit" style="flex:1;">保存硬件绑定（v${d.version}）</button>
                      </div>
                    </form>`:""}
              </aside>
              <div class="pacom-splitter"></div>
              <main class="pacom-right-pane">
                <div class="pacom-canvas-stage" data-role="deploy-stage" style="cursor:${C?"crosshair":"default"};">
                  <div class="pacom-canvas-viewport">
                    <div class="pacom-plan-wrap" data-role="deploy-plan">
                      <img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 部署平面图" />
                      ${n.filter(r=>r.planPoint).map(r=>`
                          <button class="pacom-pin ${r.id===p?"is-selected":""} ${r.connectivity==="offline"?"pacom-pin--offline":""}"
                            style="left:${(r.planPoint.x*100).toFixed(2)}%; top:${(r.planPoint.y*100).toFixed(2)}%;"
                            data-pick-dev="${r.id}">
                            <span>${r.name.slice(0,7)}</span>
                          </button>`).join("")}
                    </div>
                  </div>
                  ${C&&d?`<div style="position:absolute; top:16px; left:16px; z-index:8;" class="pacom-badge pacom-badge--accent">标点模式：点击图纸任意位置更新「${d.name}」的 2D 坐标（不改动硬件绑定）</div>`:""}
                </div>
              </main>
            </section>`:a==="topology"?`
              <div class="pacom-content-page" style="padding:4px 0 24px;">
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">项目 → 楼宇 → 楼层归属拓扑</h2>
                    <span class="pacom-row-sub">共 ${l.projects.length} 个项目 · ${l.buildings.length} 栋楼宇</span>
                  </div>
                  <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:14px;">
                    ${l.projects.map(r=>{const z=l.buildings.filter(b=>b.projectId===r.id);return`
                          <div class="pacom-card" style="padding:16px; gap:10px;">
                            <img src="${r.imageUrl??"./media/gzlab.jpg"}" alt="${r.name}" style="width:100%; height:128px; object-fit:cover; border-radius:10px;" />
                            <div>
                              <strong style="font-size:15px; font-weight:500;">${r.name}</strong>
                              <div class="pacom-row-sub">${r.city??""} ${r.address??""} · ${z.length} 栋授权楼宇</div>
                            </div>
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              ${z.map(b=>`
                                  <div class="pacom-receipt-item">
                                    <span><strong>${b.name}</strong> · 地上 ${b.aboveFloors}F / ${b.areaSqm??"-"} m²</span>
                                    <span class="pacom-badge ${b.id===c.buildingId?"pacom-badge--accent":"pacom-badge--neutral"}">${b.id===c.buildingId?"含 E7F":"对照"}</span>
                                  </div>`).join("")}
                            </div>
                          </div>`}).join("")}
                  </div>
                </section>
              </div>`:a==="connections"?`
                <div class="pacom-content-page" style="padding:4px 0 24px;">
                  <div class="lov-kpi-strip">
                    <div class="lov-kpi-cell">
                      <span class="lov-kpi-label">已连通通道</span>
                      <div class="lov-kpi-value">${j}<span class="lov-kpi-unit">/ ${$.length}</span></div>
                      <span class="lov-kpi-delta">边缘网关在线监控</span>
                    </div>
                    <div class="lov-kpi-cell">
                      <span class="lov-kpi-label">数据采集健康度</span>
                      <div class="lov-kpi-value">${$.length>0?Math.round(j/$.length*100):100}<span class="lov-kpi-unit">%</span></div>
                      <span class="lov-kpi-delta">区分设备真故障与断流</span>
                    </div>
                    <div class="lov-kpi-cell">
                      <span class="lov-kpi-label">原始采集点</span>
                      <div class="lov-kpi-value">${B}<span class="lov-kpi-unit">点</span></div>
                      <span class="lov-kpi-delta">协议直采实时遥测</span>
                    </div>
                    <div class="lov-kpi-cell">
                      <span class="lov-kpi-label">衍生计算点</span>
                      <div class="lov-kpi-value">${R}<span class="lov-kpi-unit">点</span></div>
                      <span class="lov-kpi-delta">能碳与聚合虚拟点位</span>
                    </div>
                  </div>

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">边缘网关与协议接入清单</h2>
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
                              <th>连通状态</th>
                              <th style="text-align:right;">操作</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${$.map(r=>`
                                <tr>
                                  <td><strong>${r.name}</strong></td>
                                  <td><span class="pacom-badge pacom-badge--neutral">${r.protocol.toUpperCase()}</span></td>
                                  <td><code style="font-size:12px;">${r.endpoint}</code></td>
                                  <td>采集 ${r.collectedPoints} / 计算 ${r.calculatedPoints}</td>
                                  <td>
                                    <span class="pacom-badge ${r.status==="connected"?"pacom-badge--online":"pacom-badge--warning"}">
                                      ${r.status==="connected"?"已连通":r.status}
                                    </span>
                                  </td>
                                  <td style="text-align:right;">
                                    <button class="pacom-btn pacom-btn--ghost" data-copy-endpoint="${r.id}" data-endpoint-val="${r.endpoint}">
                                      ${S===r.id?"已复制":"复制端点"}
                                    </button>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </div>`:`
                <div class="pacom-content-page" style="padding:4px 0 24px;">
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">E7F 交付冻结批次</h2>
                      <button class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${i?"":"disabled"}>+ 新建交付冻结快照</button>
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
                            ${x.map(r=>`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${r.versionTag}</div>
                                    <div class="pacom-row-sub"><code>${r.id}</code></div>
                                  </td>
                                  <td><strong>${r.verifiedCount}</strong> / ${r.deviceCount} 台设备</td>
                                  <td>
                                    <div>${r.frozenBy}</div>
                                    <div class="pacom-row-sub">${r.note??"-"}</div>
                                  </td>
                                  <td><span class="pacom-badge pacom-badge--accent">${r.status}</span></td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </div>`}
      </div>
    `,t.querySelectorAll("[data-dtab]").forEach(r=>{r.addEventListener("click",()=>{a=r.dataset.dtab,k="",O="",A()})}),t.querySelectorAll("[data-pick-dev]").forEach(r=>{r.addEventListener("click",()=>{p=r.dataset.pickDev??null,A()})}),t.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{C=!C,A()}),t.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{d&&(O="",d.connectivity==="offline"?O=`单机回读自检未通过：「${d.name}」当前离线，请先检查网关 ${d.hardwareBinding?.networkAddress??"-"} 通信状态。`:k=`单机回读自检通过（PASS）：「${d.name}」指令下发 → 状态回读一致 → 已安全自动恢复原工况。`,A())}),t.querySelectorAll("[data-copy-endpoint]").forEach(r=>{r.addEventListener("click",async()=>{const z=r.dataset.endpointVal??"",b=r.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(z),S=b,A(),window.setTimeout(()=>{S=null,A()},1600)}catch{}})}),t.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async r=>{if(!C||!d)return;const z=r.currentTarget.getBoundingClientRect(),b=Math.max(.02,Math.min(.98,(r.clientX-z.left)/z.width)),M=Math.max(.02,Math.min(.98,(r.clientY-z.top)/z.height));try{await e.updateDevicePlanPoint({deviceId:d.id,floorId:c.floorId,planVersion:d.planPoint?.planVersion??1,x:b,y:M,expectedVersion:d.version}),C=!1,k=`已更新「${d.name}」图上坐标（硬件绑定与物理安装态保持不变）`,await D()}catch(o){O=o instanceof Error?o.message:String(o),A()}}),t.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async r=>{if(r.preventDefault(),!d)return;const z=new FormData(r.currentTarget);try{await e.updateDeviceHardwareBinding({deviceId:d.id,gatewayId:d.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(z.get("protocol")),networkAddress:String(z.get("networkAddress")??""),portOrChannel:String(z.get("portOrChannel")??""),physicalInstalled:z.get("physicalInstalled")==="on",expectedVersion:d.version}),k=`已保存「${d.name}」的硬件绑定与物理安装状态`,await D()}catch(b){O=b instanceof Error?b.message:String(b),A()}}),t.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const r=await e.freezeDeliveryBatch(c.floorId,"前端系统部署发起冻结");k=`已生成冻结批次 ${r.versionTag}（核验 ${r.verifiedCount}/${r.deviceCount}）`,await D()}catch(r){O=r instanceof Error?r.message:String(r),A()}})}await D()}function Pe(t){if(t.connectivity==="offline")return`${t.name.includes("VAV")?"VAV-02":t.name.slice(0,6)} 离线`;if(t.category==="lighting"){const e=t.name.includes("702")?"702 照明":"主照明",s=Number(t.telemetry.dimming?.value??0);return s>0?`${e} ${s}%`:`${e} 关`}return t.category==="hvac"?`${t.name.includes("VAV")?"VAV-02":"FCU-01"} ${t.telemetry.setpoint?.value??24}°C`:t.category==="sensor"?`环境 ${t.telemetry.temp?.value??"23.4"}°C`:t.category==="gateway"?"主控网关":t.name.slice(0,6)}const ce="pacom.web.e7f.leftWidth",ue={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},Be={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},Re={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:42,top:42,width:14,height:22}};function f(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function _e(t){return t.level==="all-projects"?"all":t.level==="project"?`project:${t.projectId}`:t.level==="building"?`building:${t.projectId}:${t.buildingId}`:`floor:${t.projectId}:${t.buildingId}:${t.floorId}`}async function Ne(t,e,s){const a=await e.getSpatialTree(),l=e.mode==="demo",n=s.scope.canControlDevices,$=s.scope.canManageAlarms,x=s.scope.allowedZoneIds?.length?s.scope.allowedZoneIds:null;let p={level:"floor",projectId:c.projectId,buildingId:c.buildingId,floorId:c.floorId},C="devices",S="canvas",k="",O="all",D="all",A=null,d=!1,i="devices";const B=new Set,R=new Set;let j=[],r=[],z=[],b=null,M=null,o=1,w=0,T=0,L=Number(localStorage.getItem(ce)||400);(!Number.isFinite(L)||L<320||L>680)&&(L=400);let V=null;function Z(){return a.zones.filter(m=>!(p.level==="floor"&&m.floorId!==p.floorId||x&&!x.includes(m.id)))}async function Y(m){p=m,M=null,D="all",R.clear(),o=1,w=0,T=0,V&&(V(),V=null);const E=p.level==="floor"?p.floorId:c.floorId;if(p.level==="floor")try{const[g,h,I]=await Promise.all([e.getFloorDevices(p.floorId),e.listAlarms(p.floorId),e.listWorkOrders(p.floorId)]);j=g,r=h,z=I,j.some(q=>q.id===A)||(A=j[1]?.id??j[0]?.id??null,d=!1),V=e.subscribeFloorEvents(p.floorId,async q=>{q.type==="control.receipt.updated"&&b?.batchId===q.batchId&&(b=await e.getControlBatch(q.batchId)),(q.type==="telemetry.updated"||q.type==="device.connectivity")&&p.level==="floor"&&(j=await e.getFloorDevices(p.floorId)),q.type==="alarm.changed"&&p.level==="floor"&&(r=await e.listAlarms(p.floorId)),N()})}catch(g){j=[],r=[],z=[],A=null,d=!1,M=g instanceof Error?g.message:String(g)}else{d=!1;const[g,h,I]=await Promise.all([e.getFloorDevices(E).catch(()=>[]),e.listAlarms(E).catch(()=>[]),e.listWorkOrders(E).catch(()=>[])]);j=g,r=h,z=I}G()}function J(m){return m?a.zones.find(E=>E.id===m)?.name??m:"未分配逻辑区"}function v(){const m=k.trim().toLowerCase();return j.filter(E=>D!=="all"&&E.logicalZoneId!==D||O!=="all"&&E.category!==O?!1:m?E.name.toLowerCase().includes(m)||E.id.toLowerCase().includes(m)||J(E.logicalZoneId).toLowerCase().includes(m):!0)}async function u(m,E,g){!m.length||p.level!=="floor"||!n||(m.forEach(h=>B.add(h)),b=await e.dispatchControlBatch({floorId:p.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:m.map(h=>({deviceId:h,command:E,targetValue:g}))}),N())}function N(){const m=document.activeElement,E=m?.dataset?.role,g=m&&"selectionStart"in m?m.selectionStart:null,h=m&&"selectionEnd"in m?m.selectionEnd:null,I=t.querySelector(".pacom-list")?.scrollTop??0;G();const q=t.querySelector(".pacom-list");if(q&&(q.scrollTop=I),E==="search"){const P=t.querySelector('[data-role="search"]');P&&(P.focus(),g!==null&&h!==null&&P.setSelectionRange(g,h))}}function K(){const m=t.querySelector('[data-role="canvas-viewport"]');m&&(m.style.transform=`translate(${w}px, ${T}px) scale(${o})`);const E=t.querySelector('[data-role="canvas-hint"]');E&&(E.textContent=`缩放 ${Math.round(o*100)}% · 滚轮缩放 · 拖动平移 · 双击复位`)}function ae(){return p.level==="floor"?`building:${p.projectId}:${p.buildingId}`:p.level==="building"?`project:${p.projectId}`:p.level==="project"?"all":null}function ee(){const m=_e(p),E=a.projects.map(I=>`<option value="project:${f(I.id)}" ${m===`project:${I.id}`?"selected":""}>项目 · ${f(I.name)}</option>`).join(""),g=a.buildings.map(I=>{const q=`building:${I.projectId}:${I.id}`;return`<option value="${f(q)}" ${m===q?"selected":""}>楼宇 · 广实2号园 / ${f(I.name)}</option>`}).join(""),h=a.floors.map(I=>{const q=s.scope.allowedFloorIds.includes(I.id),P=`floor:${c.projectId}:${I.buildingId}:${I.id}`;return`<option value="${f(P)}" ${m===P?"selected":""}>楼层 · 广实2号园 / E栋 / ${f(I.name)}${q?"":"（未授权）"}</option>`}).join("");return`
      <option value="all" ${m==="all"?"selected":""}>全部项目（${a.projects.length} 个授权园区）</option>
      <optgroup label="项目级">${E}</optgroup>
      <optgroup label="楼宇级">${g}</optgroup>
      <optgroup label="楼层级">${h}</optgroup>
    `}function oe(){if(p.level==="all-projects"){const E=j.filter(h=>h.connectivity==="online").length,g=r.filter(h=>h.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">授权项目总览（${a.projects.length}）</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">楼宇</span><strong>${a.buildings.length} 栋</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线</span><strong>${E}/${j.length}</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:var(--pacom-status-warning);">${g} 条</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${a.projects.map(h=>{const I=a.buildings.filter(q=>q.projectId===h.id).length;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="project:${f(h.id)}">
                  <img src="${f(h.imageUrl??"./media/gzlab.jpg")}" alt="${f(h.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${f(h.name)}</strong>
                    <span class="pacom-badge pacom-badge--accent">${I} 栋楼宇</span>
                  </div>
                  <div class="pacom-row-sub">${f(h.city??"")} · ${f(h.address??"")}</div>
                </article>`}).join("")}
        </div>
      `}const m=p;if(m.level==="project"){const E=a.projects.find(P=>P.id===m.projectId),g=a.buildings.filter(P=>P.projectId===m.projectId),h=j.filter(P=>P.connectivity==="online").length,I=j.length?Math.round(h/j.length*100):100,q=r.filter(P=>P.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${f(E?.name??"园区")} · 楼宇绩效（${g.length}）</div>
          <div class="pacom-row-sub">${f(E?.city??"")} ${f(E?.address??"")}</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">在线率</span><strong>${I}%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:${q>0?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${q} 条</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>1,248 kWh</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${g.map(P=>{const y=P.id===c.buildingId;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="building:${f(P.projectId)}:${f(P.id)}">
                  <img src="${f(P.imageUrl??"./media/building-e.png")}" alt="${f(P.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${f(P.name)}</strong>
                    <span class="pacom-badge ${y?"pacom-badge--online":"pacom-badge--neutral"}">${y?`在线 ${I}% · 告警 ${q}`:"运行平稳"}</span>
                  </div>
                  <div class="pacom-row-sub">地上 ${P.aboveFloors} 层 · 面积 ${P.areaSqm??"-"} m² · 舒适度达标 96%</div>
                </article>`}).join("")}
        </div>
      `}if(m.level==="building"){const E=a.buildings.find(y=>y.id===m.buildingId),g=a.floors.filter(y=>y.buildingId===m.buildingId),h=z.filter(y=>y.status!=="closed"&&y.status!=="resolved"),I=j.filter(y=>y.connectivity==="online").length,q=j.length?Math.round(I/j.length*100):100,P=r.filter(y=>y.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${f(E?.name??"楼宇")} 运行概况</div>
          <div class="pacom-row-sub">地上 ${E?.aboveFloors??0} 层 · 面积 ${E?.areaSqm??"-"} m²</div>
          <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线率</span><strong>${q}%（${I}/${j.length}）</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">舒适度达标</span><strong>96.2%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>418 kWh</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">告警 / 工单</span><strong style="color:var(--pacom-status-warning);">${P} 告警 · ${h.length} 工单</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:8px; padding:12px;">
          <div style="font-weight:500; font-size:13px;">楼层列表（点击进入 2D 平面控制）</div>
          ${g.length?g.map(y=>{const F=s.scope.allowedFloorIds.includes(y.id),_=y.id===c.floorId;return`
                      <div class="pacom-row" data-nav-scope="floor:${f(m.projectId)}:${f(m.buildingId)}:${f(y.id)}">
                        <div>
                          <div class="pacom-row-title">${f(E?.name??"")} ${f(y.name)}</div>
                          <div class="pacom-row-sub">${y.plan?"2D 平面图就绪":"暂未上传图纸"}${_&&P>0?` · ${P} 条待处理告警`:""}</div>
                        </div>
                        <span class="pacom-badge ${F?"pacom-badge--online":"pacom-badge--warning"}">${F?"进入楼层":"无权限"}</span>
                      </div>`}).join(""):'<div class="pacom-row-sub">该楼宇暂未配置试点楼层。</div>'}
        </div>
      `}if(C==="devices"){const E=v(),g=Z(),h=Array.from(R);return`
        <div class="pacom-pane-toolbar">
          ${x?`<div class="pacom-info-banner">我的区域视图：仅显示当前账号获授权的 ${x.length} 个功能区及设备。</div>`:""}
          <div class="pacom-search-row">
            <input class="pacom-input" data-role="search" placeholder="搜索设备名 / ID / 区域…" value="${f(k)}" aria-label="搜索楼层设备" />
            <select class="pacom-select" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${O==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${O==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${O==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${O==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${O==="gateway"?"selected":""}>网关</option>
            </select>
          </div>
          ${g.length>0&&!M?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${D==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${g.map(I=>`<button type="button" class="pacom-zone-pill ${D===I.id?"is-active":""}" data-filter-zone="${f(I.id)}">${f(I.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; color:var(--pacom-text-secondary);">
            <span>当前可见 ${E.length} 台设备</span>
            <span>${n?`已勾选 ${h.length} 台`:"只读模式"}</span>
          </div>
        </div>
        <div class="pacom-list">
          ${M?`<div class="pacom-alert-banner">${f(M)}</div>`:E.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">没有匹配的设备</div>':E.map(I=>{const q=I.id===A&&d,P=R.has(I.id),y=I.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline",F=I.category==="lighting"?`亮度 ${I.telemetry.dimming?.value??"--"}%`:I.category==="hvac"?`设定 ${I.telemetry.setpoint?.value??"--"}°C`:I.category==="sensor"?`${I.telemetry.temp?.value??"--"}°C · CO₂ ${I.telemetry.co2?.value??"--"}`:I.hardwareBinding?.networkAddress??"未绑定";return`
                        <div class="pacom-row ${q?"is-selected":""}" data-select-device="${f(I.id)}">
                          <div class="pacom-row-main">
                            ${n?`<input type="checkbox" data-check-device="${f(I.id)}" ${P?"checked":""} style="margin-top:3px;" aria-label="勾选 ${f(I.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title">${f(I.name)}</div>
                              <div class="pacom-row-sub">${f(J(I.logicalZoneId))} · ${f(ue[I.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${I.connectivity==="online"?"pacom-badge--online":"pacom-badge--neutral"}">
                            <span class="pacom-dot ${y}"></span>${f(F)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${n&&h.length>0?`
            <div class="pacom-batch-bar">
              <span style="font-size:12px;">显式批量目标：<strong>${h.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}if(C==="zones"){const E=Z(),g={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">E7F 功能区快控（${E.length}）</div>
          <div class="pacom-row-sub">点击卡片同步高亮右侧平面图热区，支持按区域一键批量控制。</div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${E.map(h=>{const I=j.filter(_=>_.logicalZoneId===h.id),q=I.filter(_=>_.connectivity==="online").length,P=I.filter(_=>_.category==="lighting"||_.category==="hvac").length,y=D===h.id,F=g[h.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${y?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${y?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${f(y?"all":h.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:14px; font-weight:500;">${f(h.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${q}/${I.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时温度 ${F.temp} · 占用 ${F.occ}</div>
                  ${P>0?`
                      <div style="display:flex; gap:6px; margin-top:2px;">
                        <button type="button" class="pacom-btn" data-zone-power="${f(h.id)}" data-zone-val="true" ${n?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" data-zone-power="${f(h.id)}" data-zone-val="false" ${n?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">该区域为弱电/网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-pane-toolbar">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-weight:500;">本层告警快览（${r.length}）</span>
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-alarms="1">前往告警中心 →</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:12px;">
        ${r.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">当前楼层无活跃告警</div>':r.map(E=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${f(E.title)}</strong>
                      <span class="pacom-badge ${E.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${E.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${f(E.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" data-locate-device="${f(E.deviceId)}">定位设备</button>
                      ${E.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" data-ack-alarm="${f(E.id)}" ${$?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function $e(){const m=p,E=j.filter(y=>y.connectivity==="online").length,g=j.length?Math.round(E/j.length*100):100,h=r.filter(y=>y.status==="active").length;if(m.level==="all-projects"||m.level==="project"){const y=m.level==="project"?a.projects.find(_=>_.id===m.projectId):a.projects[0],F=a.buildings.filter(_=>!y||_.projectId===y.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:24px; cursor:default;">
          <div style="position:relative; width:min(760px, 94%); border-radius:16px; overflow:hidden; box-shadow:0 12px 32px rgba(15,23,42,0.14); background:#fff;">
            <img src="${f(y?.imageUrl??"./media/gzlab.jpg")}" alt="园区俯瞰" style="width:100%; height:440px; object-fit:cover; display:block;" />
            ${m.level==="all-projects"?a.projects.map((_,W)=>`
                      <button type="button" class="pacom-pin is-selected" style="left:${W===0?48:26}%; top:${W===0?52:34}%;" data-nav-scope="project:${f(_.id)}">
                        <span class="pacom-dot pacom-dot--online"></span>
                        <span>${f(_.name)}</span>
                      </button>`).join(""):F.map((_,W)=>{const X=_.id===c.buildingId;return`
                        <button type="button" class="pacom-pin ${X?"is-selected":""}" style="left:${W===0?56:38}%; top:${W===0?44:62}%;" data-nav-scope="building:${f(_.projectId)}:${f(_.id)}">
                          <span class="pacom-dot ${X&&h>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                          <span>${f(_.name)} · ${X?`在线 ${g}% · 告警 ${h}`:"运行平稳"}</span>
                        </button>`}).join("")}
          </div>
        </div>
      `}if(m.level==="building"){const y=a.buildings.find(W=>W.id===m.buildingId),F=a.floors.filter(W=>W.buildingId===m.buildingId),_=F.find(W=>W.id===c.floorId)??F[0];return`
        ${F.length?`
            <nav class="pacom-floor-rail" aria-label="整栋楼层选择轨道">
              <button type="button" class="pacom-floor-btn is-active" title="整栋视图">栋</button>
              ${F.map(W=>`<button type="button" class="pacom-floor-btn ${s.scope.allowedFloorIds.includes(W.id)?"":"is-locked"}" data-nav-scope="floor:${f(m.projectId)}:${f(m.buildingId)}:${f(W.id)}" title="${f(W.name)}">${f(W.name.replace("F",""))}</button>`).join("")}
            </nav>`:""}
        <div class="pacom-canvas-tools" aria-label="画布工具">
          <button type="button" class="pacom-tool-btn" data-zoom="reset" title="复位视图" aria-label="复位视图">⟲</button>
          <div class="pacom-tool-divider" aria-hidden="true"></div>
          <button type="button" class="pacom-tool-btn" data-zoom="in" title="放大" aria-label="放大">＋</button>
          <button type="button" class="pacom-tool-btn" data-zoom="out" title="缩小" aria-label="缩小">－</button>
        </div>
        <div class="pacom-canvas-stage" data-role="canvas-stage">
          <div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${w}px, ${T}px) scale(${o});">
            <img class="pacom-plan-img" src="${f(y?.imageUrl??"./media/building-e.png")}" alt="${f(y?.name??"楼宇")} 整栋实景图" />
          </div>
        </div>
        <div class="pacom-canvas-hint" style="pointer-events:auto; display:flex; align-items:center; gap:10px;">
          <span>${f(y?.name??"楼宇")} · 在线 ${g}% · 舒适度 96.2%</span>
          ${_?`<button type="button" class="pacom-btn pacom-btn--primary" style="height:24px; padding:0 10px; font-size:12px;" data-nav-scope="floor:${f(m.projectId)}:${f(m.buildingId)}:${f(_.id)}">进入 ${f(_.name)} 平面图 →</button>`:""}
        </div>
      `}const I=a.floors.find(y=>y.id===m.floorId),q=a.floors.filter(y=>y.buildingId===m.buildingId),P=Z();return`
      <nav class="pacom-floor-rail" aria-label="楼层选择轨道">
        <button type="button" class="pacom-floor-btn" data-nav-scope="building:${f(m.projectId)}:${f(m.buildingId)}" title="返回整栋楼宇">栋</button>
        ${q.map(y=>{const F=s.scope.allowedFloorIds.includes(y.id);return`<button type="button" class="pacom-floor-btn ${y.id===m.floorId?"is-active":""} ${F?"":"is-locked"}"
              data-nav-scope="floor:${f(m.projectId)}:${f(m.buildingId)}:${f(y.id)}" title="${f(y.name)}${F?"":"（无权限）"}">
              ${f(y.name.replace("F",""))}
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
          <button type="button" class="lov-layer-btn" aria-pressed="${i==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${i==="temp"}" data-canvas-layer="temp">温度热区</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${i==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${i==="alarms"}" data-canvas-layer="alarms">告警叠加${r.filter(y=>y.status==="active").length>0?` (${r.filter(y=>y.status==="active").length})`:""}</button>
        </div>`}

      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${M?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${f(M)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${w}px, ${T}px) scale(${o});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${f(I?.plan?.imageUrl??"./media/7F.webp")}" alt="E栋 ${f(I?.name??"7F")} 平面图" />
                  ${P.map((y,F)=>{const _=Re[y.id];if(!_)return"";const W=D===y.id,X=["23.2°C","24.6°C","22.8°C","23.9°C"],pe=["有人 74%","会议中","有人 52%","空闲"],xe=i==="temp"?` · ${X[F%X.length]}`:i==="occupancy"?` · ${pe[F%pe.length]}`:"",Se=i==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":i==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${W?"is-active":""}"
                          style="left:${_.left}%; top:${_.top}%; width:${_.width}%; height:${_.height}%; ${W?"":Se}"
                          data-filter-zone="${f(W?"all":y.id)}"
                          title="${f(y.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${f(y.name.replace(/^7F\s*/,""))}${xe}</span>
                        </button>`}).join("")}
                  ${j.filter(y=>y.planPoint).map(y=>{const F=r.some(X=>X.deviceId===y.id&&X.status==="active"),_=D!=="all"&&y.logicalZoneId!==D||i==="alarms"&&!F,W=i==="alarms"&&F?"background:var(--pacom-status-critical);":"";return`
                        <button type="button" class="pacom-pin ${y.id===A&&d?"is-selected":""} ${y.connectivity==="offline"?"pacom-pin--offline":""} ${_?"pacom-pin--dimmed":""}"
                          style="left:${(y.planPoint.x*100).toFixed(2)}%; top:${(y.planPoint.y*100).toFixed(2)}%; ${W}"
                          data-pin-device="${f(y.id)}" title="${f(y.name)}">
                          <span class="pacom-dot ${F?"pacom-dot--critical":y.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${f(Pe(y))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>

      ${M?"":`<div class="pacom-canvas-hint" data-role="canvas-hint">缩放 ${Math.round(o*100)}% · 滚轮缩放 · 拖动平移 · 双击复位</div>`}
      ${we()}
    `}function we(){if(p.level!=="floor"||!d)return"";const m=j.find(y=>y.id===A);if(!m)return"";const E=m.category==="lighting",g=m.category==="hvac",h=Number(m.telemetry.dimming?.value??50),I=Number(m.telemetry.setpoint?.value??24),q=B.has(m.id),P=E?[{label:"当前开关",value:h>0?"开启":"关闭"},{label:"当前亮度",value:`${h}%`},{label:"实时功率",value:h>0?`${Math.round(h*1.4)} W`:"0 W"},{label:"运行模式",value:q?"人工覆盖":"自动策略"}]:g?[{label:"室内温度",value:`${m.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${I.toFixed(1)}°C`},{label:"运行工况",value:m.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:q?"人工覆盖":"自动策略"}]:m.category==="sensor"?[{label:"实时温度",value:`${m.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${m.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${m.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:m.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:m.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:m.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:m.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:m.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${f(m.name)}</h2>
            <div class="pacom-row-sub">${f(J(m.logicalZoneId))} · ${f(ue[m.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${q?"pacom-badge--warning":"pacom-badge--neutral"}">
              ${q?"人工覆盖":"自动策略"}
            </span>
            <span class="pacom-badge ${m.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${m.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>
            </button>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          ${P.map(y=>`
              <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                <span class="pacom-row-sub">${y.label}</span>
                <strong style="font-size:13px; font-weight:500;">${f(y.value)}</strong>
              </div>`).join("")}
        </div>

        ${E||g?`
            <div class="pacom-control-box">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                ${q&&n?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${f(m.id)}">恢复自动策略</button>`:n?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
              </div>
              ${m.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
              ${E?`
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${n?"":"disabled"}>开灯</button>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${n?"":"disabled"}>关灯</button>
                  </div>
                  <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                    亮度目标：<strong>${h}%</strong>
                    <input type="range" min="0" max="100" step="10" value="${h}" data-ctrl-slider="lighting.dimming" ${n?"":"disabled"} />
                  </label>`:`
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${n?"":"disabled"}>开机</button>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${n?"":"disabled"}>关机</button>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span style="font-size:12px;">设定温度：</span>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${I-.5}" ${n?"":"disabled"}>-0.5°C</button>
                    <strong>${I.toFixed(1)}°C</strong>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${I+.5}" ${n?"":"disabled"}>+0.5°C</button>
                  </div>`}
            </div>`:""}

        ${b?`
            <div class="pacom-control-box">
              <div style="font-size:12px; font-weight:500;">最近批次：<code>${f(b.batchId)}</code></div>
              <div class="pacom-receipt-list">
                ${b.receipts.map(y=>{const F=Be[y.status]??{text:y.status,badge:"pacom-badge--neutral"};return`
                      <div class="pacom-receipt-item">
                        <div>
                          <div><strong>${f(y.deviceId)}</strong> · ${f(y.command)} → ${f(y.targetValue)}</div>
                          ${y.errorMessage?`<div style="color:var(--pacom-status-critical);">${f(y.errorMessage)}</div>`:""}
                        </div>
                        <span class="pacom-badge ${F.badge}">${F.text}</span>
                      </div>`}).join("")}
              </div>
            </div>`:""}

        <details class="lov-tech-details">
          <summary><span>技术标识与硬件绑定</span><span>▾</span></summary>
          <div class="pacom-kv-grid">
            <span class="pacom-kv-label">设备编号</span><span><code>${f(m.id)}</code> · v${m.version}</span>
            <span class="pacom-kv-label">图上点位</span><span>${m.planPoint?`x=${m.planPoint.x.toFixed(2)}, y=${m.planPoint.y.toFixed(2)} (图 v${m.planPoint.planVersion})`:"未标点"}</span>
            <span class="pacom-kv-label">物理安装</span><span>${m.physicalInstalled?"现场已确认":"待现场复核"}</span>
            <span class="pacom-kv-label">硬件绑定</span><span>${m.hardwareBinding?`${m.hardwareBinding.protocol.toUpperCase()} · ${m.hardwareBinding.networkAddress}`:"未绑定"}</span>
          </div>
        </details>
      </aside>
    `}function de(m){if(m==="all")return{level:"all-projects"};const E=m.split(":");return E[0]==="project"&&E[1]?{level:"project",projectId:E[1]}:E[0]==="building"&&E[1]&&E[2]?{level:"building",projectId:E[1],buildingId:E[2]}:E[0]==="floor"&&E[1]&&E[2]&&E[3]?{level:"floor",projectId:E[1],buildingId:E[2],floorId:E[3]}:{level:"all-projects"}}function G(){const m=r.filter(I=>I.status==="active").length,E=j.filter(I=>I.connectivity==="online").length,g=ae(),h=j.find(I=>I.category==="sensor")?.telemetry.temp?.value??"23.4";t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">空间总览</h1>
            <div class="pacom-header-meta">
              ${p.level==="floor"&&!M?`<span class="pacom-badge pacom-badge--online">在线 ${E}/${j.length} · 均温 ${f(h)}°C</span>`:l?'<span class="pacom-badge pacom-badge--neutral"><span class="pacom-dot pacom-dot--offline"></span>演示模式</span>':'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>'}
              <span class="pacom-badge pacom-badge--neutral">${f(s.roleLabel)}</span>
            </div>
          </div>

          <div class="pacom-header-toolbar">
            <div class="pacom-toolbar-left">
              ${g?`<button type="button" class="lov-icon-btn" data-nav-scope="${f(g)}" title="返回上一空间层级" aria-label="返回上一空间层级">←</button>`:""}
              <div class="pacom-scope-pill" title="项目 / 楼宇 / 楼层空间范围切换">
                <select data-role="scope-select" aria-label="选择查看范围">
                  ${ee()}
                </select>
                <span class="pacom-scope-chevron">▾</span>
              </div>

              ${p.level==="floor"?`
                  <div class="pacom-tabs" role="tablist">
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${C==="devices"}" data-tab="devices">设备</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${C==="zones"}" data-tab="zones">区域</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${C==="alarms"}" data-tab="alarms">
                      告警 ${m>0?`<span class="pacom-badge pacom-badge--warning">${m}</span>`:""}
                    </button>
                  </div>`:""}
            </div>

            <div class="pacom-tabs pacom-mobile-view-switch" role="group" aria-label="窄屏视图切换">
              <button type="button" class="pacom-tab" aria-selected="${S==="list"}" data-mobile-pane-btn="list">列表</button>
              <button type="button" class="pacom-tab" aria-selected="${S==="canvas"}" data-mobile-pane-btn="canvas">平面图</button>
            </div>
          </div>
        </header>

        <section class="pacom-split" data-mobile-pane="${S}">
          <aside class="pacom-left-pane" style="--pacom-sidebar-width:${L}px;">
            ${oe()}
          </aside>
          <div class="pacom-splitter" role="separator" tabindex="0" aria-orientation="vertical" aria-label="调整左右栏宽度" data-role="splitter"></div>
          <main class="pacom-right-pane">
            ${$e()}
          </main>
        </section>
      </div>
    `,Ie()}function Ie(){t.querySelector('[data-role="scope-select"]')?.addEventListener("change",g=>{Y(de(g.currentTarget.value))}),t.querySelectorAll("[data-nav-scope]").forEach(g=>{g.addEventListener("click",()=>{g.dataset.navScope&&Y(de(g.dataset.navScope))})}),t.querySelectorAll("[data-tab]").forEach(g=>{g.addEventListener("click",()=>{C=g.dataset.tab,G()})}),t.querySelectorAll("[data-mobile-pane-btn]").forEach(g=>{g.addEventListener("click",()=>{S=g.dataset.mobilePaneBtn,G()})}),t.querySelector('[data-role="search"]')?.addEventListener("input",g=>{k=g.currentTarget.value,N()}),t.querySelector('[data-role="category"]')?.addEventListener("change",g=>{O=g.currentTarget.value,G()}),t.querySelectorAll("[data-filter-zone]").forEach(g=>{g.addEventListener("click",h=>{h.stopPropagation(),D=g.dataset.filterZone??"all",G()})}),t.querySelectorAll("[data-select-device]").forEach(g=>{g.addEventListener("click",h=>{h.target.tagName!=="INPUT"&&(A=g.dataset.selectDevice??null,d=!0,S="canvas",G())})}),t.querySelectorAll("[data-check-device]").forEach(g=>{g.addEventListener("change",()=>{const h=g.dataset.checkDevice;h&&(g.checked?R.add(h):R.delete(h),G())})}),t.querySelectorAll("[data-pin-device]").forEach(g=>{g.addEventListener("click",h=>{h.stopPropagation(),A=g.dataset.pinDevice??null,d=!0,G()})}),t.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{d=!1,G()}),t.querySelector("[data-release-override]")?.addEventListener("click",g=>{const h=g.currentTarget.dataset.releaseOverride;h&&(B.delete(h),G())}),t.querySelectorAll("[data-zone-power]").forEach(g=>{g.addEventListener("click",h=>{h.stopPropagation();const I=g.dataset.zonePower,q=g.dataset.zoneVal==="true";if(!I)return;const P=j.filter(F=>F.logicalZoneId===I&&F.category==="lighting").map(F=>F.id),y=j.filter(F=>F.logicalZoneId===I&&F.category==="hvac").map(F=>F.id);P.length?u(P,"lighting.power",q):y.length&&u(y,"hvac.power",q)})}),t.querySelectorAll("[data-locate-device]").forEach(g=>{g.addEventListener("click",()=>{const h=g.dataset.locateDevice;h&&(A=h,d=!0,S="canvas",G())})}),t.querySelector("[data-go-alarms]")?.addEventListener("click",()=>{window.location.hash="#alarms"}),t.querySelectorAll("[data-ctrl-cmd]").forEach(g=>{g.addEventListener("click",()=>{if(!A||!g.dataset.ctrlCmd)return;const h=g.dataset.ctrlVal??"",I=h==="true"?!0:h==="false"?!1:Number(h);u([A],g.dataset.ctrlCmd,I)})}),t.querySelector("[data-ctrl-slider]")?.addEventListener("change",g=>{const h=g.currentTarget;!A||!h.dataset.ctrlSlider||u([A],h.dataset.ctrlSlider,Number(h.value))}),t.querySelectorAll("[data-batch-cmd]").forEach(g=>{g.addEventListener("click",()=>{const h=Array.from(R),I=g.dataset.batchVal??"",q=I==="true"?!0:I==="false"?!1:I;u(h,g.dataset.batchCmd,q)})}),t.querySelectorAll("[data-ack-alarm]").forEach(g=>{g.addEventListener("click",async()=>{!g.dataset.ackAlarm||p.level!=="floor"||!$||(await e.acknowledgeAlarm(g.dataset.ackAlarm,"首页快速确认"),r=await e.listAlarms(p.floorId),G())})}),t.querySelectorAll("[data-canvas-layer]").forEach(g=>{g.addEventListener("click",()=>{const h=g.dataset.canvasLayer;h&&(i=h,G())})}),t.querySelectorAll("[data-zoom]").forEach(g=>{g.addEventListener("click",()=>{const h=g.dataset.zoom;h==="in"?o=Math.min(2.6,Number((o+.2).toFixed(2))):h==="out"?o=Math.max(.6,Number((o-.2).toFixed(2))):(o=1,w=0,T=0),K()})});const m=t.querySelector('[data-role="canvas-stage"]');if(m&&!M){let g=!1,h=0,I=0,q=0,P=0;m.addEventListener("pointerdown",F=>{F.target?.closest("button, input, select, .pacom-drawer")||(g=!0,h=F.clientX,I=F.clientY,q=w,P=T,m.classList.add("is-panning"),m.setPointerCapture?.(F.pointerId))}),m.addEventListener("pointermove",F=>{g&&(w=q+(F.clientX-h),T=P+(F.clientY-I),K())});const y=()=>{g&&(g=!1,m.classList.remove("is-panning"))};m.addEventListener("pointerup",y),m.addEventListener("pointercancel",y),m.addEventListener("wheel",F=>{F.preventDefault();const _=F.deltaY<0?.12:-.12;o=Math.max(.6,Math.min(2.6,Number((o+_).toFixed(2)))),K()},{passive:!1}),m.addEventListener("dblclick",F=>{F.target?.closest("button")||(o=1,w=0,T=0,K())})}const E=t.querySelector('[data-role="splitter"]');E?.addEventListener("pointerdown",g=>{const h=g.clientX,I=L;E.classList.add("is-dragging");const q=y=>{L=Math.max(320,Math.min(640,I+(y.clientX-h)));const F=t.querySelector(".pacom-left-pane");F&&F.style.setProperty("--pacom-sidebar-width",`${L}px`)},P=()=>{E.classList.remove("is-dragging"),localStorage.setItem(ce,String(Math.round(L))),window.removeEventListener("pointermove",q),window.removeEventListener("pointerup",P)};window.addEventListener("pointermove",q),window.addEventListener("pointerup",P)}),E?.addEventListener("keydown",g=>{if(g.key==="ArrowLeft")g.preventDefault(),L=Math.max(320,L-16);else if(g.key==="ArrowRight")g.preventDefault(),L=Math.min(640,L+16);else if(g.key==="Home")g.preventDefault(),L=320;else if(g.key==="End")g.preventDefault(),L=640;else return;localStorage.setItem(ce,String(Math.round(L)));const h=t.querySelector(".pacom-left-pane");h&&h.style.setProperty("--pacom-sidebar-width",`${L}px`)})}await Y(p)}const Ve=new Set(["lighting","hvac","alarm_rules"]),ve={lighting:"照明",hvac:"暖通",alarm_rules:"告警"},le=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function We(t){const e=new Set;for(const s of t.actions)s.command.startsWith("lighting")?e.add("照明"):s.command.startsWith("hvac")?e.add("暖通"):e.add("综合");return Array.from(e)}function Ze(t,e,s){const a=s?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
    <div style="width:150px; display:flex; flex-direction:column; gap:3px;">
      <div style="position:relative; height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
        ${t<e?`<div style="position:absolute; left:${t/24*100}%; width:${(e-t)/24*100}%; top:0; bottom:0; border-radius:999px; background:${a};"></div>`:`
        <div style="position:absolute; left:${t/24*100}%; width:${(24-t)/24*100}%; top:0; bottom:0; border-radius:999px; background:${a};"></div>
        <div style="position:absolute; left:0; width:${e/24*100}%; top:0; bottom:0; border-radius:999px; background:${a};"></div>`}
      </div>
      <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--pacom-text-muted);">
        <span>00</span><span>12</span><span>24</span>
      </div>
    </div>
  `}async function He(t,e,s){let[a,l]=await Promise.all([e.listScenes(c.floorId),e.getRuntimeSettings(c.projectId)]),n="manual",$="balanced",x="all",p=null,C="",S=!1,k="",O="";const D=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${l.calendar.workdayStart} – ${l.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${l.calendar.nightGuardStart} – 次日 ${l.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],A=e.subscribeFloorEvents(c.floorId,async i=>{i.type==="control.receipt.updated"&&p?.batchId===i.batchId&&(p=await e.getControlBatch(i.batchId),d())});function d(){const i=C.trim().toLowerCase(),B=i?a.filter(o=>`${o.name} ${o.description}`.toLowerCase().includes(i)):a,R=l.rules.filter(o=>Ve.has(o.category)),j=x==="all"?R:R.filter(o=>o.category===x),r=le.find(o=>o.id===$)??le[1],z=s.scope.canControlDevices,b=s.scope.canEditDeployment;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">智能策略</h1>
              <div class="pacom-tabs" role="tablist" aria-label="智能策略分类">
                <button class="pacom-tab" role="tab" aria-selected="${n==="manual"}" data-scene-tab="manual">快捷场景（${a.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${n==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
                <button class="pacom-tab" role="tab" aria-selected="${n==="rules"}" data-scene-tab="rules">条件联动（${R.length}）</button>
              </div>
            </div>

            <div class="pacom-header-meta">
              <span class="pacom-badge ${z?"pacom-badge--online":"pacom-badge--warning"}">
                ${z?"可执行并核验回执":"只读权限"}
              </span>
              ${n==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${S?"收起新建表单":"+ 新建场景"}</button>`:""}
            </div>
          </div>

          <div class="pacom-header-toolbar">
            <span class="pacom-row-sub">安全执行优先级：人工覆盖 &gt; 快捷场景 &gt; 条件联动 &gt; 排程与节能（现场手动操作始终优先）</span>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:4px 0 28px;">
          ${k?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${k}</span></div>`:""}
          ${O?`<div class="pacom-alert-banner">${O}</div>`:""}

          ${n==="manual"?`
              ${p?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="lov-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${p.batchId}</span>
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
                            ${p.receipts.map(o=>`
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
                <input class="pacom-input" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${C}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${B.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${B.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="lov-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':B.map(o=>{const w=We(o);return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${o.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${w.map(T=>`<span class="pacom-badge pacom-badge--accent">${T}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${o.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${o.description}</p>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${o.lastExecutedAt?o.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${o.id}" ${z?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:n==="schedule_oss"?`
                <div class="lov-kpi-strip" role="region" aria-label="优化启停运行状态">
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">当前优化启停模式</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${r.title}</div>
                    <span class="lov-kpi-delta">${r.estSaving}</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">明日预测预启动时刻</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${r.predictedStart}</div>
                    <span class="lov-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">本周累计节省运行工时</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${r.savedHours}</div>
                    <span class="lov-kpi-delta">异常通信时自动回退本地默认工况</span>
                  </div>
                </div>

                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="lov-mode-grid">
                    ${le.map(o=>`
                      <button type="button" class="lov-mode-card" aria-pressed="${$===o.id}" data-oss-mode="${o.id}" ${z?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${o.title}</strong>
                          <span class="pacom-badge ${$===o.id?"pacom-badge--online":"pacom-badge--neutral"}">${$===o.id?"当前生效":o.badge}</span>
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
                          ${D.map(o=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${o.name}</span>
                                    ${o.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${o.windowLabel}</div>
                                </td>
                                <td>${Ze(o.startHour,o.endHour,o.enabled)}</td>
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
                                      ${z?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules"].map(o=>{const w=o==="all"?"全部":ve[o]??o,T=o==="all"?R.length:R.filter(L=>L.category===o).length;return`
                            <button type="button" class="lov-count-pill" aria-pressed="${x===o}" data-rule-cat="${o}">
                              <span>${w}</span><span class="lov-count-num">${T}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="lov-settings-card">
                    ${j.length===0?'<div class="lov-empty-state"><strong>该分类下暂无条件联动规则</strong><span>可切换上方分类胶囊查看全部规则。</span></div>':j.map(o=>`
                              <div class="lov-setting-row">
                                <div class="lov-setting-meta">
                                  <span class="lov-setting-title">
                                    <span class="pacom-badge pacom-badge--accent">${ve[o.category]??o.category}</span>
                                    <span>${o.name}</span>
                                    <span class="pacom-badge pacom-badge--neutral">v${o.version}</span>
                                  </span>
                                  <span class="lov-setting-desc">${o.summary} · 范围：${o.scopeLabel} · 回执：${o.receiptSummary??"已同步"}</span>
                                </div>
                                <div class="lov-setting-control">
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
                                    ${b?"":"disabled"}
                                  >
                                    <span class="lov-switch-thumb"></span>
                                  </button>
                                </div>
                              </div>`).join("")}
                  </div>
                </section>`}
        </div>
      </div>
    `,t.querySelectorAll("[data-scene-tab]").forEach(o=>{o.addEventListener("click",()=>{n=o.dataset.sceneTab??"manual",k="",d()})}),t.querySelector("[data-close-batch]")?.addEventListener("click",()=>{p=null,d()}),t.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),t.querySelectorAll("[data-oss-mode]").forEach(o=>{o.addEventListener("click",()=>{const w=o.dataset.ossMode;if(!w)return;$=w;const T=le.find(L=>L.id===w);k=`已切换至「${T?.title??w}」模式（明日预测启动 ${T?.predictedStart??""}）。`,d()})}),t.querySelectorAll("[data-toggle-schedule]").forEach(o=>{o.addEventListener("click",()=>{const w=o.dataset.toggleSchedule,T=D.find(L=>L.id===w);T&&(T.enabled=!T.enabled,k=`排程「${T.name}」已${T.enabled?"恢复启用":"临时暂停"}。`,d())})}),t.querySelectorAll("[data-rule-cat]").forEach(o=>{o.addEventListener("click",()=>{x=o.dataset.ruleCat??"all",d()})}),t.querySelectorAll("[data-toggle-strategy-rule]").forEach(o=>{o.addEventListener("click",async()=>{O="";try{await e.toggleRuntimeRule(o.dataset.toggleStrategyRule,o.dataset.ruleNext==="true",Number(o.dataset.ruleVer)),l=await e.getRuntimeSettings(c.projectId),k="条件联动规则状态与版本回执已更新。",d()}catch(w){O=w instanceof Error?w.message:String(w),d()}})}),t.querySelectorAll("[data-toggle-create]").forEach(o=>{o.addEventListener("click",()=>{S=!S,d()})}),t.querySelector("[data-scene-search]")?.addEventListener("input",o=>{const w=o.currentTarget,T=w.selectionStart??w.value.length;C=w.value,d();const L=t.querySelector("[data-scene-search]");L&&(L.focus(),L.setSelectionRange(T,T))}),t.querySelectorAll("[data-exec-scene]").forEach(o=>{o.addEventListener("click",async()=>{O="";try{p=await e.executeScene(o.dataset.execScene),a=await e.listScenes(c.floorId),d()}catch(w){O=w instanceof Error?w.message:String(w),d()}})}),t.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async o=>{o.preventDefault();const w=new FormData(o.currentTarget);try{await e.createScene({projectId:c.projectId,floorId:c.floorId,name:String(w.get("name")??""),description:String(w.get("description")??""),actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:50}]}),a=await e.listScenes(c.floorId),S=!1,k="快捷场景已保存。",d()}catch(T){O=T instanceof Error?T.message:String(T),d()}})}d(),window.addEventListener("hashchange",()=>A(),{once:!0})}const ye=[{group:"项目基准",items:[{id:"calendar",label:"运行日历"},{id:"weather_area",label:"气象与面积"},{id:"metering_carbon",label:"计量与碳排"}]},{group:"通知与模板",items:[{id:"notifications",label:"告警通知订阅"},{id:"templates",label:"参数模板"}]}],Ue=ye.flatMap(t=>t.items);async function Ge(t,e,s){let a="calendar",l=await e.getRuntimeSettings(c.projectId),n=l.calendar.workdayStart,$=l.calendar.workdayEnd,x=[];const p={criticalSms:!0,inAppBanner:!0,dailyDigest:!1};let C="",S="";function k(){const O=l.rules.filter(d=>d.category===a),D=Ue.find(d=>d.id===a)?.label??"运行设置",A=s.scope.canEditDeployment;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">运行设置</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">项目范围：广实2号园</span>
              <span class="pacom-badge ${A?"pacom-badge--online":"pacom-badge--warning"}">
                ${A?"可修改并下发配置":"当前角色只读"}
              </span>
            </div>
          </div>
        </header>

        ${C?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${C}</span></div>`:""}
        ${S?`<div class="pacom-alert-banner">${S}</div>`:""}

        <div class="lov-subnav-layout">
          <nav class="lov-subnav-rail" aria-label="运行设置分组">
            ${ye.map(d=>`
              <div class="lov-subnav-group">
                <div class="lov-subnav-group-title">${d.group}</div>
                ${d.items.map(i=>{const B=i.id==="calendar"?"":String(l.rules.filter(R=>R.category===i.id).length);return`
                      <button class="lov-subnav-item" aria-current="${a===i.id?"true":"false"}" data-scat="${i.id}">
                        <span>${i.label}</span>
                        ${B?`<span class="pacom-badge pacom-badge--neutral">${B}</span>`:""}
                      </button>`}).join("")}
              </div>`).join("")}
          </nav>

          <div class="lov-subnav-main">
            ${a==="calendar"?`
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">项目工作时间日历</h2>
                    <span class="pacom-badge pacom-badge--neutral">版本 v${l.calendar.version}</span>
                  </div>
                  <div class="lov-settings-card">
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">工作日上班时间</span>
                        <span class="lov-setting-desc">用于自动触发早间预冷/预热及公共区域照明启动</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:140px;" type="time" data-cal-start value="${n}" ${A?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">工作日下班时间</span>
                        <span class="lov-setting-desc">夜间巡检窗口为 ${l.calendar.nightGuardStart} – ${l.calendar.nightGuardEnd}；若晚于 21:30 将自动提示交叠冲突</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:140px;" type="time" data-cal-end value="${$}" ${A?"":"disabled"} />
                      </div>
                    </div>
                    <div class="lov-setting-row" style="justify-content:flex-end;">
                      <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                      <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${A?"":"disabled"}>保存并校验版本</button>
                    </div>
                  </div>
                </section>

                ${x.length>0?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">受影响的定时与夜间规则预览</h2>
                        <span class="pacom-row-sub">共 ${x.length} 条</span>
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
                              ${x.map(d=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${d.ruleName}</div>
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
                    </section>`:""}`:a==="notifications"?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">告警与运行简报通知订阅</h2>
                      <span class="pacom-row-sub">按通道订阅本楼层关键动态</span>
                    </div>
                    <div class="lov-settings-card">
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">严重告警短信与移动推送</span>
                          <span class="lov-setting-desc">触发严重级别告警或边缘网关断流超过 5 分钟时立即推送值班人</span>
                        </div>
                        <div class="lov-setting-control">
                          <button type="button" class="lov-switch" role="switch" aria-checked="${p.criticalSms}" data-notify-key="criticalSms" aria-label="严重告警短信推送">
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
                          <button type="button" class="lov-switch" role="switch" aria-checked="${p.inAppBanner}" data-notify-key="inAppBanner" aria-label="站内实时横幅提醒">
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
                          <button type="button" class="lov-switch" role="switch" aria-checked="${p.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报">
                            <span class="lov-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>`:`
                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">${D}</h2>
                    <span class="pacom-row-sub">共 ${O.length} 条策略</span>
                  </div>
                  <div class="lov-settings-card">
                    ${O.length===0?'<div class="lov-empty-state"><strong>暂无配置项</strong><span>该分类下尚未定义运行策略规则。</span></div>':O.map(d=>`
                              <div class="lov-setting-row">
                                <div class="lov-setting-meta">
                                  <span class="lov-setting-title">
                                    <span>${d.name}</span>
                                    <span class="pacom-badge pacom-badge--neutral">v${d.version}</span>
                                    <span class="pacom-badge pacom-badge--accent">${d.scopeLabel}</span>
                                  </span>
                                  <span class="lov-setting-desc">${d.summary} · 回执：${d.receiptSummary??"已同步"}</span>
                                </div>
                                <div class="lov-setting-control">
                                  <span class="pacom-row-sub">${d.enabled?"已启用":"已停用"}</span>
                                  <button
                                    type="button"
                                    class="lov-switch"
                                    role="switch"
                                    aria-checked="${d.enabled?"true":"false"}"
                                    aria-label="切换 ${d.name}"
                                    data-toggle-rule="${d.id}"
                                    data-rule-ver="${d.version}"
                                    data-rule-next="${!d.enabled}"
                                    ${A?"":"disabled"}
                                  >
                                    <span class="lov-switch-thumb"></span>
                                  </button>
                                </div>
                              </div>`).join("")}
                  </div>
                </section>`}
          </div>
        </div>
      </div>
    `,t.querySelectorAll("[data-scat]").forEach(d=>{d.addEventListener("click",()=>{a=d.dataset.scat,C="",S="",k()})}),t.querySelectorAll("[data-notify-key]").forEach(d=>{d.addEventListener("click",()=>{const i=d.dataset.notifyKey;i&&(p[i]=!p[i],C="通知订阅偏好已更新。",k())})}),t.querySelector("[data-cal-start]")?.addEventListener("change",d=>{n=d.currentTarget.value}),t.querySelector("[data-cal-end]")?.addEventListener("change",d=>{$=d.currentTarget.value}),t.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{S="",x=await e.previewCalendarImpact(c.projectId,n,$),k()}),t.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{S="";try{const d=await e.saveWorkCalendar(c.projectId,n,$,l.calendar.version);l={...l,calendar:d},C=`运行日历已保存至 v${d.version}（${d.workdayStart} - ${d.workdayEnd}）`,x=[],k()}catch(d){S=d instanceof Error?d.message:String(d),k()}}),t.querySelectorAll("[data-toggle-rule]").forEach(d=>{d.addEventListener("click",async()=>{S="";try{await e.toggleRuntimeRule(d.dataset.toggleRule,d.dataset.ruleNext==="true",Number(d.dataset.ruleVer)),l=await e.getRuntimeSettings(c.projectId),C="策略状态与版本回执已更新",k()}catch(i){S=i instanceof Error?i.message:String(i),k()}})})}k()}const me="pacom.web.sidebar.collapsed",Ye=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,ge=[{id:"home",label:"空间总览",iconSvg:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/>'},{id:"analysis",label:"数据分析",iconSvg:'<path d="M4 19h16"/><path d="M7 16v-5"/><path d="M12 16V7"/><path d="M17 16v-8"/>'},{id:"alarms",label:"告警中心",iconSvg:'<path d="M12 4 3 19h18L12 4Z"/><path d="M12 10v4"/><path d="M12 17h.01"/>'},{id:"scenes",label:"智能策略",iconSvg:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3"/>'},{id:"settings",label:"运行设置",iconSvg:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2.5"/><circle cx="15" cy="17" r="2.5"/>'},{id:"deployment",label:"系统部署",iconSvg:'<rect x="3" y="4" width="7" height="6" rx="1.5"/><rect x="14" y="4" width="7" height="6" rx="1.5"/><rect x="8.5" y="14" width="7" height="6" rx="1.5"/><path d="M6.5 10v2h11v-2M12 12v2"/>'}],re={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"运行设置",deployment:"系统部署",account:"机构与账户"};function be(){const t=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return t in re?t:"home"}function Q(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function Ke(t,e,s,a){t.classList.remove("bare-login");let l=s,n=be(),$=localStorage.getItem(me)==="1",x=!1,p=!1,C="";const S=e.mode==="demo"&&typeof e.switchDemoRole=="function";function k(){const o=C.trim(),w=o?ge.filter(T=>T.label.includes(o)):ge;return w.length?w.map(T=>`
        ${!o&&T.id==="settings"?'<div class="pacom-nav-divider" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${T.id}" aria-current="${n===T.id?"page":"false"}" title="${T.label}">
          <svg class="pacom-nav-icon" viewBox="0 0 24 24" aria-hidden="true">${T.iconSvg}</svg>
          <span class="pacom-nav-label">${T.label}</span>
        </button>`).join(""):'<div class="pacom-nav-empty">没有匹配的工作区</div>'}function O(){if(!p)return"";const o=l.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${$?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab.jpg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${Q(l.roleLabel)}${S?" · 演示":""}</small>
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
          <span class="pacom-pop-avatar" aria-hidden="true">${Q(o)}</span>
          <span class="pacom-pop-text">
            <b>${Q(l.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${S?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">演示角色切换（RBAC 权限预览）</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(U).map(w=>{const T=U[w],L=w===l.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${L}" data-pop-role="${w}">
                      <span class="pacom-pop-text">
                        <b>${Q(T.roleLabel)}</b>
                        <small>${Q(T.displayName)}</small>
                      </span>
                      ${L?'<svg class="pacom-pop-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>':""}
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
    `}async function D(o){switch(document.title=`${re[n]} · PACOM Station`,n){case"home":await Ne(o,e,l);return;case"analysis":await qe(o,e);return;case"alarms":await De(o,e,l);return;case"scenes":await He(o,e,l);return;case"settings":await Ge(o,e,l);return;case"deployment":await ze(o,e,l);return;case"account":await Ae(o,e,l,w=>{l=w,j(!0)},A);return}}async function A(){p=!1,x=!1,M();try{await e.logout()}finally{window.location.hash="#login",a()}}function d(){const o=t.querySelector('[data-role="nav-list"]');o&&(o.innerHTML=k(),B())}function i(){t.querySelector('[data-role="org-popover"]')?.remove();const o=t.querySelector('[data-role="org-menu-btn"]');if(o&&o.setAttribute("aria-expanded",String(p)),!p)return;const w=document.createElement("div");w.innerHTML=O().trim();const T=w.firstElementChild;T&&(t.appendChild(T),R())}function B(){t.querySelectorAll("[data-route]").forEach(o=>{o.addEventListener("click",()=>{const w=o.dataset.route;w===n&&!x||(n=w,x=!1,p=!1,window.location.hash=`#${n}`,j(!0))})})}function R(){t.querySelectorAll('[data-pop-act="go-account"]').forEach(o=>{o.addEventListener("click",()=>{p=!1,x=!1,n="account",window.location.hash="#account",j(!0)})}),t.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{A()}),t.querySelectorAll("[data-pop-role]").forEach(o=>{o.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const w=o.dataset.popRole;p=!1,x=!1,l=await e.switchDemoRole(w),await j(!0)})})}async function j(o){const w=t.querySelector('[data-role="main-stage"]');if(!o&&w){const L=t.querySelector(".pacom-nav-rail");L&&(L.classList.toggle("is-collapsed",$),L.classList.toggle("is-mobile-open",x));const V=t.querySelector('[data-role="mobile-scrim"]');V&&V.classList.toggle("is-open",x),i();return}t.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
          <h1 class="pacom-mobile-title">${re[n]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${Q(l.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${x?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${$?"is-collapsed":""} ${x?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${Ye}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${$?"展开侧栏":"收起侧栏"}" aria-label="${$?"展开侧栏":"收起侧栏"}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                ${$?'<path d="m9 6 6 6-6 6"/>':'<path d="m15 6-6 6 6 6"/>'}
              </svg>
            </button>
          </div>

          <div class="pacom-nav-search-wrap">
            <svg class="pacom-nav-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>
            </svg>
            <input class="pacom-nav-search" data-role="nav-search" type="search" placeholder="搜索工作区…" value="${Q(C)}" aria-label="搜索工作区" />
          </div>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${k()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${n==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${p}" title="广州国家实验室 · ${Q(l.displayName)}">
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
    `,t.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{$=!$,p=!1,localStorage.setItem(me,$?"1":"0");const L=t.querySelector(".pacom-nav-rail"),V=t.querySelector('[data-role="toggle-sidebar"]');L&&L.classList.toggle("is-collapsed",$),V&&(V.title=$?"展开侧栏":"收起侧栏",V.setAttribute("aria-label",V.title),V.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${$?'<path d="m9 6 6 6-6 6"/>':'<path d="m15 6-6 6 6 6"/>'}</svg>`),i()}),t.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{x=!x,j(!1)}),t.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{x=!1,p=!1,j(!1)}),t.querySelector('[data-role="nav-search"]')?.addEventListener("input",L=>{C=L.currentTarget.value,d()}),t.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",L=>{L.stopPropagation(),p=!p,i()}),B(),i();const T=t.querySelector('[data-role="main-stage"]');T&&await D(T)}const r=o=>{if(!p)return;const w=o.target;w?.closest('[data-role="org-popover"]')||w?.closest('[data-role="org-menu-btn"]')||(p=!1,i())},z=o=>{o.key==="Escape"&&(p?(p=!1,i()):x&&(x=!1,j(!1)))},b=()=>{const o=be();o!==n&&(n=o,p=!1,x=!1,j(!0))};function M(){document.removeEventListener("click",r),document.removeEventListener("keydown",z),window.removeEventListener("hashchange",b)}document.addEventListener("click",r),document.addEventListener("keydown",z),window.addEventListener("hashchange",b),await j(!0)}const Xe=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Qe='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',Je='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',te='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>',he={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},et={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function tt(t){const e=t.replace(/\D/g,"");return e.length===11?`${e.slice(0,3)} •••• ${e.slice(7)}`:t}function H(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function fe(t,e,s){t.classList.add("bare-login"),document.title="登录 · PACOM Station";let a=!1,l=!1,n="",$="",x="",p="",C=!1,S={},k="",O=!1,D="",A=0,d=null,i=null,B="privacy",R="",j="",r="";const z=e.mode==="demo"&&typeof e.switchDemoRole=="function";function b(){d!==null&&(window.clearInterval(d),d=null),t.classList.remove("bare-login")}function M(){A=60,d!==null&&window.clearInterval(d),d=window.setInterval(()=>{A-=1,A<=0&&(A=0,d!==null&&(window.clearInterval(d),d=null));const L=t.querySelector('[data-act="send-sms"]');L&&(L.disabled=A>0,L.textContent=A>0?`${A} 秒后重发`:D?"重新获取":"获取验证码")},1e3)}function o(){if(!i)return"";if(i==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${te}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${H(j)}" />
                  </div>
                </div>
                ${r?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${H(r)}</p>`:""}
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary">发送验证码</button>
            </div>
          </section>
        </div>
      `;if(i==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${te}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                ${z?"当前为离线演示环境，您可直接通过登录页的「演示角色快速体验」切换 5 类内置角色进入 E7F 工作区。":"正式接入账户服务后，将在此开放自助注册与机构邀请码加入流程。"}
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
              ${z?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">选择演示角色</button>':""}
            </div>
          </section>
        </div>
      `;if(i==="legal"){const L=he[B],V=["privacy","terms","service"].map(Z=>`<button type="button" role="tab" aria-selected="${B===Z}" class="au-legal-tab ${B===Z?"is-active":""}" data-act="switch-legal" data-tab="${Z}">${he[Z].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${te}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${V}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${L.items.map(Z=>`<li>${H(Z)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return i==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${te}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${R||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:i==="demoRoles"&&z?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择演示角色</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${te}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(U).map(L=>{const V=U[L];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${L}">
                        <div>
                          <b>${H(V.roleLabel)} · ${H(V.displayName)}</b>
                          <small>${H(et[L])}</small>
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
      `:""}function w(){const L=a?`
        <div class="au-field ${S.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${H(x)}" aria-invalid="${S.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${A>0?"disabled":""}>
              ${A>0?`${A} 秒后重发`:D?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${H(S.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${D?`验证码已发送至 ${H(tt(D))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${S.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${H(n)}" aria-invalid="${S.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${H(S.id??"")}</p>
        </div>
      `,V=a?`
        <div class="au-field ${S.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${H(p)}" aria-invalid="${S.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${H(S.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${S.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${l?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${H($)}" aria-invalid="${S.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${l?"隐藏密码":"显示密码"}">
              ${l?Je:Qe}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${H(S.pwd??"")}</p>
        </div>
      `;t.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${Xe}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${O?"disabled":""}>
                  ${L}
                  ${V}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${k?"":"hidden"}>${H(k)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${C?"checked":""} />
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
                ${z?`<div class="au-demo-bar">
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
      ${o()}
    `,T()}function T(){const L=t.querySelector("#au-id"),V=t.querySelector("#au-pwd"),Z=t.querySelector("#au-sphone"),Y=t.querySelector("#au-scode"),J=t.querySelector('input[name="keep"]');L?.addEventListener("input",()=>{if(n=L.value,S.id||k){delete S.id,k="",L.closest(".au-field")?.classList.remove("bad");const v=t.querySelector("#au-id-err");v&&(v.textContent="");const u=t.querySelector("#au-login-ferr");u&&(u.hidden=!0)}}),V?.addEventListener("input",()=>{if($=V.value,S.pwd||k){delete S.pwd,k="",V.closest(".au-field")?.classList.remove("bad");const v=t.querySelector("#au-pwd-err");v&&(v.textContent="");const u=t.querySelector("#au-login-ferr");u&&(u.hidden=!0)}}),Z?.addEventListener("input",()=>{if(x=Z.value,S.sphone||k){delete S.sphone,k="",Z.closest(".au-field")?.classList.remove("bad");const v=t.querySelector("#au-sphone-err");v&&(v.textContent="");const u=t.querySelector("#au-login-ferr");u&&(u.hidden=!0)}}),Y?.addEventListener("input",()=>{if(p=Y.value.replace(/\D/g,"").slice(0,6),Y.value=p,S.scode||k){delete S.scode,k="",Y.closest(".au-field")?.classList.remove("bad");const v=t.querySelector("#au-scode-err");v&&(v.textContent="");const u=t.querySelector("#au-login-ferr");u&&(u.hidden=!0)}}),J?.addEventListener("change",()=>{C=J.checked}),t.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{l=!l,w(),t.querySelector("#au-pwd")?.focus()}),t.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{a=!a,S={},k="",w(),t.querySelector(a?"#au-sphone":"#au-id")?.focus()}),t.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const v=x.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(v)){S={sphone:"请输入有效的手机号码"},w(),t.querySelector("#au-sphone")?.focus();return}S={},D=v,M(),w(),t.querySelector("#au-scode")?.focus()}),t.querySelector('form[data-form="login"]')?.addEventListener("submit",async v=>{if(v.preventDefault(),!O){if(S={},k="",a?(x.trim()||(S.sphone="请输入手机号码"),/^\d{6}$/.test(p.trim())||(S.scode="请输入 6 位验证码")):(n.trim()||(S.id="请输入电子邮箱或手机号码"),$||(S.pwd="请输入密码")),Object.keys(S).length>0){w();const u=Object.keys(S)[0];t.querySelector(`#au-${u}`)?.focus();return}O=!0,w();try{const u=await e.login({account:(a?x:n).trim(),password:a?p.trim():$});b(),s(u)}catch(u){O=!1,k=u instanceof Error?u.message:"账户或密码不正确",w()}}}),t.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{j=n.trim(),r="",i="reset",w(),t.querySelector("#au-rs-id")?.focus()}),t.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{i="register",w()}),t.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{i="legal",w()}),t.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{R="",i="contact",w()}),t.querySelectorAll('[data-act="open-demo-roles"]').forEach(v=>{v.addEventListener("click",()=>{i="demoRoles",w()})}),t.querySelectorAll('[data-act="close-modal"]').forEach(v=>{v.addEventListener("click",()=>{i=null,w()})}),t.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",v=>{v.target===v.currentTarget&&(i=null,w())}),t.querySelectorAll('[data-act="switch-legal"]').forEach(v=>{v.addEventListener("click",()=>{const u=v.dataset.tab;u&&(B=u,w())})}),t.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),R="已复制"}catch{R="support@pacom.cn"}w()}),t.querySelector("#au-reset-form")?.addEventListener("submit",v=>{v.preventDefault(),j=t.querySelector("#au-rs-id")?.value.trim()??"",j?z?r="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":r="如账户存在，验证码已发送。":r="请输入电子邮箱或手机号码",w()}),t.querySelectorAll('[data-act="pick-demo-role"]').forEach(v=>{v.addEventListener("click",async()=>{const u=v.dataset.roleId;if(!u||!e.switchDemoRole)return;const N=await e.switchDemoRole(u);b(),s(N)})})}w()}async function at(){const t=document.getElementById("app");if(t)try{const e=Ee(),s=await e.getSession(),a=async l=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await Ke(t,e,l,()=>{fe(t,e,n=>{a(n)})})};if(!s||window.location.hash==="#login"){fe(t,e,l=>{a(l)});return}await a(s)}catch(e){t.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(e)}</div></div>`}}at();
//# sourceMappingURL=index-BLvjcc4s.js.map
