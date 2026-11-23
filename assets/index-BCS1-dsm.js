(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const S of i.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&s(S)}).observe(document,{childList:!0,subtree:!0});function l(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=l(n);fetch(n.href,i)}})();const d={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},me={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[d.projectId,d.project1Id],allowedBuildingIds:[d.buildingId,d.buildingFId],allowedFloorIds:[d.lockedFloor8Id,d.floorId,d.lockedFloor6Id],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[d.projectId],allowedBuildingIds:[d.buildingId,d.buildingFId],allowedFloorIds:[d.lockedFloor8Id,d.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[d.projectId],allowedBuildingIds:[d.buildingId],allowedFloorIds:[d.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[d.projectId],allowedBuildingIds:[d.buildingId],allowedFloorIds:[d.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[d.projectId],allowedBuildingIds:[d.buildingId],allowedFloorIds:[d.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},Ee="pacom.web.demo.role";class Ze{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){const t=sessionStorage.getItem(Ee);t&&me[t]&&(this.activeSession=structuredClone(me[t]));const l=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:d.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:l,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:l,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:d.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:l,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:l,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:d.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:l,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:l,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:d.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:l,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:l,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:l,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:l,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:d.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:l,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:d.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:l,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:l,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:l,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:l},{id:"conn-e7f-dali",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:l},{id:"conn-e7f-modbus",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:d.projectId,floorId:d.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:d.projectId,floorId:d.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:d.projectId,floorId:d.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:d.projectId,floorId:d.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:d.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:d.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:l,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:d.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:l,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:d.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:l,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:d.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:l,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:d.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:l,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:d.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:l,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(me).map((s,n)=>({userId:s.userId,displayName:s.displayName,email:`${s.role.replaceAll("_",".")}@pacom.local`,role:s.role,roleLabel:s.roleLabel,scopeSummary:s.scope.allowedZoneIds?.length?`E栋 7F（${s.scope.allowedZoneIds.length} 个我的区域）`:`${s.scope.allowedProjectIds.length} 项目 / ${s.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:n===0?l:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(t,l,s,n,i){this.traces.unshift({at:new Date().toISOString(),channel:t,operation:l,endpoint:s,request:i,response:n}),this.traces.length>40&&this.traces.pop()}pushAudit(t,l,s,n){const i=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:i?.displayName??"anonymous",role:i?.role??"member",action:t,target:l,result:s,detail:n})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(t){if(!t.account.trim()||!t.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const l=t.account.includes("admin")?"org_admin":t.account.includes("eng")?"commissioning_engineer":t.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(me[l]),sessionStorage.setItem(Ee,l),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:t.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(Ee),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(t){return this.activeSession=structuredClone(me[t]),sessionStorage.setItem(Ee,t),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${t}`,this.activeSession),structuredClone(this.activeSession)}async getSpatialTree(){const t=this.requireSession(),l=[{id:d.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"},{id:d.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"}],s=[{id:d.buildingId,projectId:d.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.png"},{id:d.buildingFId,projectId:d.projectId,name:"F栋",aboveFloors:12,belowFloors:2,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.png"}],n={projects:l.filter(i=>t.scope.allowedProjectIds.includes(i.id)),buildings:s.filter(i=>t.scope.allowedBuildingIds.includes(i.id)),floors:[{id:d.lockedFloor8Id,buildingId:d.buildingId,kind:"above",level:8,name:"8F",plan:null},{id:d.floorId,buildingId:d.buildingId,kind:"above",level:7,name:"7F",areaSqm:1383.1,plan:{floorId:d.floorId,imageUrl:"./media/7F.webp",planVersion:1,updatedAt:"2026-11-22T00:00:00Z"}},{id:d.lockedFloor6Id,buildingId:d.buildingId,kind:"above",level:6,name:"6F",plan:null}],zones:[{id:"zone-e7f-lab-east",floorId:d.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:d.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:d.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:d.floorId,name:"核心走廊与弱电井",category:"corridor"}]};return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:n.projects.length,buildings:n.buildings.length,floors:n.floors.length}),n}async getFloorDevices(t){const l=this.requireSession();if(!l.scope.allowedFloorIds.includes(t)){const n={code:"FORBIDDEN",status:403,message:`当前角色「${l.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,n),this.pushAudit("floor.read",t,"denied",n.message),new Error(`403 FORBIDDEN: ${n.message}`)}if(t!==d.floorId)return[];let s=structuredClone(this.devices);return l.scope.allowedZoneIds?.length&&(s=s.filter(n=>n.logicalZoneId&&l.scope.allowedZoneIds.includes(n.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,{count:s.length}),s}async dispatchControlBatch(t){const l=this.requireSession();if(!l.scope.canControlDevices||!l.scope.allowedFloorIds.includes(t.floorId))throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权下发控制指令`);const s=`batch-e7f-${Date.now().toString(36)}`,n={batchId:s,floorId:t.floorId,createdBy:l.userId,createdAt:new Date().toISOString(),receipts:t.targets.map(i=>({deviceId:i.deviceId,command:i.command,targetValue:i.targetValue,status:"queued"}))};return this.batches.set(s,n),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",n,t),this.pushAudit("control.dispatch",s,"success",`下发 ${t.targets.length} 台设备`),n.receipts.forEach((i,S)=>{const x=this.devices.find(w=>w.id===i.deviceId);setTimeout(()=>{i.status="dispatched",i.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:s,deviceId:i.deviceId,status:"dispatched",at:i.dispatchedAt})},280+S*120),setTimeout(()=>{const w=new Date().toISOString();!x||x.connectivity==="offline"?(i.status="timeout",i.errorCode="GATEWAY_READBACK_TIMEOUT",i.errorMessage="设备离线，网关未收到回读确认",i.verifiedAt=w):(i.status="verified_success",i.observedValue=i.targetValue,i.verifiedAt=w,this.applyObservedTelemetry(x,i.command,i.targetValue,w)),this.emit({type:"control.receipt.updated",batchId:s,deviceId:i.deviceId,status:i.status,observedValue:i.observedValue,at:w})},900+S*220)}),structuredClone(n)}applyObservedTelemetry(t,l,s,n){l==="lighting.dimming"&&t.telemetry.dimming?(t.telemetry.dimming={...t.telemetry.dimming,value:s,collectedAt:n,stale:!1},t.telemetry.power&&(t.telemetry.power={...t.telemetry.power,value:Number(s)>0,collectedAt:n,stale:!1})):(l==="lighting.power"||l==="hvac.power")&&t.telemetry.power?t.telemetry.power={...t.telemetry.power,value:s,collectedAt:n,stale:!1}:l==="hvac.setpoint"&&t.telemetry.setpoint&&(t.telemetry.setpoint={...t.telemetry.setpoint,value:s,collectedAt:n,stale:!1}),this.emit({type:"telemetry.updated",floorId:t.floorId,deviceId:t.id,collectedAt:n,values:{[l]:s}})}async getControlBatch(t){this.requireSession();const l=this.batches.get(t);if(!l)throw new Error(`404 NOT_FOUND: 批次 ${t} 不存在`);return structuredClone(l)}async listAlarms(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==d.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(t,l){const s=this.requireSession();if(!s.scope.canManageAlarms){const i=`角色「${s.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",t,"denied",i),new Error(`403 FORBIDDEN: ${i}`)}const n=this.alarms.find(i=>i.id===t);if(!n)throw new Error(`404 NOT_FOUND: 告警 ${t} 不存在`);return n.status="acknowledged",n.acknowledgedAt=new Date().toISOString(),n.acknowledgedBy=s.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${t}/acknowledge`,n,{note:l}),this.pushAudit("alarm.acknowledge",t,"success",l),this.emit({type:"alarm.changed",floorId:n.floorId,alarmId:t,status:"acknowledged",at:n.acknowledgedAt}),structuredClone(n)}async listWorkOrders(t){return!this.requireSession().scope.allowedFloorIds.includes(t)||t!==d.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(t){const l=this.requireSession();if(!l.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权创建工单`);const s=new Date().toISOString(),n={id:`wo-e7f-${Date.now().toString(36)}`,projectId:d.projectId,buildingId:d.buildingId,floorId:t.floorId,deviceId:t.deviceId??null,alarmId:t.alarmId??null,title:t.title,description:t.description,status:"open",assigneeId:null,createdAt:s,updatedAt:s};if(this.workOrders.unshift(n),t.alarmId){const i=this.alarms.find(S=>S.id===t.alarmId);i&&(i.workOrderId=n.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",n,t),this.pushAudit("work_order.create",n.id,"success",n.title),structuredClone(n)}async updateWorkOrderStatus(t,l){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权流转工单`);const n=this.workOrders.find(i=>i.id===t);if(!n)throw new Error(`404 NOT_FOUND: 工单 ${t} 不存在`);return n.status=l,n.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${t}`,n,{status:l}),this.pushAudit("work_order.update",t,"success",`状态更新为 ${l}`),structuredClone(n)}async updateDevicePlanPoint(t){const l=this.requireSession();if(!l.scope.canEditDeployment)throw this.pushAudit("device.plan_point",t.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权编辑图纸标点`);const s=this.devices.find(n=>n.id===t.deviceId);if(!s)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(s.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${s.version}，请刷新后重试`);return s.planPoint={floorId:t.floorId,planVersion:t.planVersion,x:Number(t.x.toFixed(4)),y:Number(t.y.toFixed(4))},s.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${t.deviceId}/plan-point`,s,t),this.pushAudit("device.plan_point",t.deviceId,"success",`坐标更新 (${s.planPoint.x}, ${s.planPoint.y})`),structuredClone(s)}async updateDeviceHardwareBinding(t){const l=this.requireSession();if(!l.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权修改硬件绑定`);const s=this.devices.find(i=>i.id===t.deviceId);if(!s)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(s.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${s.version}）`);const n=new Date().toISOString();return s.physicalInstalled=t.physicalInstalled,s.physicalVerifiedAt=t.physicalInstalled?n:null,s.hardwareBinding={gatewayId:t.gatewayId,protocol:t.protocol,networkAddress:t.networkAddress,portOrChannel:t.portOrChannel,boundAt:n,boundBy:l.displayName},s.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${t.deviceId}/hardware-binding`,s,t),this.pushAudit("device.hardware_binding",t.deviceId,"success",`${t.protocol} ${t.networkAddress}`),structuredClone(s)}async listConnections(t){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(t){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(t,l){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权冻结交付批次`);const n=this.devices.filter(S=>S.physicalInstalled&&S.hardwareBinding).length,i={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:d.projectId,floorId:t,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:n,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:s.displayName,note:l||"例行交付基线冻结"};return this.deliveryBatches.unshift(i),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${t}/deliveries/freeze`,i,{note:l}),this.pushAudit("delivery.freeze",i.id,"success",`${n}/${this.devices.length} 已现场核验`),structuredClone(i)}async getAnalysisReport(t,l,s){this.requireSession();const n=l==="today"?1:l==="7d"?7:30,S={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*n)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*n).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(N=>N.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*n).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*n).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*n).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[t],x=l==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],w={category:t,range:l,scopeId:s,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:S.kpis,unit:S.unit,series:S.base.map((N,C)=>({label:x[C],value:Math.round(N*(t==="energy"||t==="carbon"?n/2+.5:1)),baseline:Math.round(N*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:S.base[3],unit:S.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:S.base[4],unit:S.unit,status:t==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:S.base[1],unit:S.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${t}?range=${l}&scopeId=${s}`,{kpis:w.kpis.length}),w}async listScenes(t){return this.requireSession(),structuredClone(this.scenes)}async createScene(t){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const s={id:`scn-e7f-${Date.now().toString(36)}`,projectId:t.projectId,floorId:t.floorId,name:t.name,description:t.description,enabled:!0,scheduleSummary:"手动触发",actions:t.actions,lastExecutedAt:null};return this.scenes.unshift(s),this.record("REST","createScene","POST /api/v1/scenes",s,t),this.pushAudit("scene.create",s.id,"success",s.name),structuredClone(s)}async executeScene(t){const l=this.scenes.find(n=>n.id===t);if(!l)throw new Error(`404 NOT_FOUND: 场景 ${t} 不存在`);const s=await this.dispatchControlBatch({floorId:l.floorId,idempotencyKey:`scene-${t}-${Date.now()}`,targets:l.actions,reason:`触发场景：${l.name}`});return l.lastExecutedAt=new Date().toISOString(),l.lastBatchId=s.batchId,s}async getRuntimeSettings(t){return this.requireSession(),structuredClone({projectId:d.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(t,l,s){this.requireSession();const n=s>=this.calendar.nightGuardStart?`下班时间 ${s} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,i=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${l} - ${s}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${l} (-30m) ~ ${s} (+30m)`,conflictWarning:n},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:n}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",i,{workdayStart:l,workdayEnd:s}),i}async saveWorkCalendar(t,l,s,n){const i=this.requireSession();if(!i.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权修改运行日历`);if(this.calendar.version!==n)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(l>=s)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:l,workdayEnd:s,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:l,workdayEnd:s,expectedVersion:n}),this.pushAudit("settings.calendar",d.projectId,"success",`${l}-${s}`),structuredClone(this.calendar)}async toggleRuntimeRule(t,l,s){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权启停运行规则`);const i=this.rules.find(S=>S.id===t);if(!i)throw new Error(`404 NOT_FOUND: 规则 ${t} 不存在`);if(i.version!==s)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${i.version}）`);return i.enabled=l,i.version+=1,i.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${t}`,i,{enabled:l,expectedVersion:s}),this.pushAudit("settings.rule_toggle",t,"success",l?"启用":"停用"),structuredClone(i)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(t,l){const s=this.requireSession();if(s.role!=="org_admin"&&s.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const n=me[l],i={userId:`inv-${Date.now().toString(36)}`,displayName:t.split("@")[0]||t,email:t,role:l,roleLabel:n.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(i),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",i,{email:t,role:l}),this.pushAudit("org.invite",t,"success",n.roleLabel),structuredClone(i)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(t,l){return t!==d.floorId?()=>{}:(this.listeners.add(l),()=>{this.listeners.delete(l)})}emit(t){this.record("WS",t.type,`WS /ws/v1/stream?floorId=${d.floorId}`,t),this.listeners.forEach(l=>l(t))}}function Ge(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new Ze}const Ye={"building-2":'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',"settings-2":'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',"chevrons-up-down":'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',minus:'<path d="M5 12h14"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',check:'<path d="M20 6 9 17l-5-5"/>',menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',settings:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>'};function Ke(e){return e>=20?"1.5":e>=16?"1.75":e>=14?"2":"2.25"}function ie(e,t=16,l=""){const s=Ke(t);return`<svg${l?` class="${l}"`:""} width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${s}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;">${Ye[e]}</svg>`}const Fe=[{id:"wg-hvac",name:"暖通运维组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋 5F–7F（HVAC、FCU 与 VAV 系统）",memberCount:3,membersSummary:"陈值班、林工、周工",notifyChannel:"站内 + 短信"},{id:"wg-elec",name:"强电照明组",defaultRoleLabel:"运行值班员",locationScope:"广实2号园 / E栋全楼照明与配电回路",memberCount:2,membersSummary:"黄工、刘工",notifyChannel:"站内 + 邮件"},{id:"wg-property",name:"园区物业值班组",defaultRoleLabel:"只读访客 / 值班巡检",locationScope:"广实2号园 / 全园区公共空间与值班台",memberCount:4,membersSummary:"张班长、王巡检、赵巡检、吴值守",notifyChannel:"站内 + 每日晨报"}];async function Xe(e,t,l,s,n){let i="profile",S="directory",x=await t.listOrgMembers(),w=await t.listAuditLogs(),N="",C="all",z="all",q="all",V=!1,H=!1,W=!1,_=l.displayName,R=l.role==="org_admin"||l.role==="project_admin"?"设施运维总监":l.role==="commissioning_engineer"?"楼宇自控部署工程师":l.role==="facility_operator"?"暖通运行值班工程师":"园区巡检成员",P="138-0013-8072",K="",Z="";async function A(){[x,w]=await Promise.all([t.listOrgMembers(),t.listAuditLogs()]),D()}function D(){const te=t.mode==="demo"&&typeof t.switchDemoRole=="function",G=N.trim().toLowerCase(),c=x.filter(b=>C!=="all"&&b.role!==C?!1:G?`${b.displayName} ${b.email} ${b.roleLabel} ${b.scopeSummary}`.toLowerCase().includes(G):!0),g=w.filter(b=>{if(z==="success"&&b.result!=="success"||z==="denied"&&b.result==="success")return!1;if(q!=="all"){const T=`${b.action} ${b.target}`.toLowerCase();if(q==="control"&&!T.includes("control")&&!T.includes("scene")&&!T.includes("控制")||q==="alarm"&&!T.includes("alarm")&&!T.includes("work")&&!T.includes("告警")||q==="deploy"&&!T.includes("deploy")&&!T.includes("plan")&&!T.includes("hardware")&&!T.includes("部署"))return!1}return!0});e.innerHTML=`
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
            ${K?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${K}</span></div>`:""}
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
                        <input class="pacom-input" style="width:150px;" name="displayName" value="${_}" aria-label="显示姓名" required />
                        <input class="pacom-input" style="width:180px;" name="jobTitle" value="${R}" aria-label="岗位职务" />
                      </div>
                    </div>
                    <div class="lov-setting-row">
                      <div class="lov-setting-meta">
                        <span class="lov-setting-title">告警接收手机号（SMS）</span>
                        <span class="lov-setting-desc">用于接收 P1 严重告警短信推送与工单升级提醒</span>
                      </div>
                      <div class="lov-setting-control">
                        <input class="pacom-input" style="width:180px;" name="phone" value="${P}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
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

                ${te?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">多角色权限预览切换</h2>
                        <span class="pacom-badge pacom-badge--neutral">仅 Demo 预览可用</span>
                      </div>
                      <div class="pacom-role-grid">
                        ${Object.keys(me).map(b=>{const T=me[b];return`
                              <button class="pacom-role-card ${b===l.role?"is-active":""}" data-switch-role="${b}">
                                <strong style="font-weight:500;">${T.roleLabel}</strong>
                                <span class="pacom-row-sub">${T.displayName}</span>
                                <span class="pacom-row-sub">授权楼层 ${T.scope.allowedFloorIds.length} 层 · 部署编辑：${T.scope.canEditDeployment?"是":"否"}</span>
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
                      <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:4px;">展开查看 ${ie("chevron-down",12)}</span>
                    </summary>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                      <span class="pacom-row-sub">服务端下发的当前会话权限对象（供前后端核对）</span>
                      <button class="pacom-btn" data-copy-session="1">${W?"已复制":"复制 JSON"}</button>
                    </div>
                    <pre class="pacom-code">${JSON.stringify(l,null,2)}</pre>
                  </details>
                </section>`:i==="members"?`
                  ${V?`
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
                                ${Object.keys(me).map(b=>`<option value="${b}">${me[b].roleLabel}</option>`).join("")}
                              </select>
                              <button class="pacom-btn pacom-btn--primary" type="submit">发送邀请</button>
                            </div>
                          </div>
                        </form>
                      </section>`:""}

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                        <h2 class="lov-section-title">${S==="directory"?"机构成员目录":"工作组与空间授权（Groups & Scope）"}</h2>
                        <div class="pacom-tabs" role="tablist" aria-label="成员与工作组切换">
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${S==="directory"}" data-msub="directory">成员目录（${x.length}）</button>
                          <button type="button" class="pacom-tab" role="tab" aria-selected="${S==="groups"}" data-msub="groups">工作组（${Fe.length}）</button>
                        </div>
                      </div>
                      <span class="pacom-row-sub">${S==="directory"?`当前显示 ${c.length} 人`:"按空间边界与值班组统一分派告警与工单"}</span>
                    </div>
                    ${S==="directory"?`
                        <div class="lov-table-card">
                          <div class="lov-table-toolbar">
                            <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                              <input class="pacom-input" name="memberSearch" style="max-width:260px;" data-member-search placeholder="搜索姓名、邮箱或授权范围…" value="${N}" />
                              <select class="pacom-select" name="memberRoleFilter" data-role-filter>
                                <option value="all" ${C==="all"?"selected":""}>全部角色</option>
                                ${Object.keys(me).map(b=>`<option value="${b}" ${C===b?"selected":""}>${me[b].roleLabel}</option>`).join("")}
                              </select>
                            </div>
                            <button class="pacom-btn pacom-btn--primary" data-toggle-invite="1">
                              ${V?"收起邀请":"+ 邀请成员"}
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
                                ${c.map(b=>`
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
                        </div>`:`
                        ${H?`
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
                            <button type="button" class="pacom-btn pacom-btn--primary" data-toggle-new-group="1">${H?"收起表单":"+ 新建工作组"}</button>
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
                                ${Fe.map(b=>`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500;">${b.name}</div>
                                      <div class="pacom-row-sub">${b.membersSummary}</div>
                                    </td>
                                    <td><span class="pacom-badge pacom-badge--neutral">${b.defaultRoleLabel}</span></td>
                                    <td><span class="pacom-row-sub">${b.locationScope}</span></td>
                                    <td><strong>${b.memberCount}</strong> 人</td>
                                    <td><span class="pacom-badge pacom-badge--accent">${b.notifyChannel}</span></td>
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
                          <option value="all" ${q==="all"?"selected":""}>全部操作类型</option>
                          <option value="control" ${q==="control"?"selected":""}>设备控制与场景</option>
                          <option value="alarm" ${q==="alarm"?"selected":""}>告警与工单处置</option>
                          <option value="deploy" ${q==="deploy"?"selected":""}>系统部署与点位</option>
                        </select>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${z==="all"}" data-audit-filter="all">全部（${w.length}）</button>
                          <button class="pacom-tab" aria-selected="${z==="success"}" data-audit-filter="success">成功</button>
                          <button class="pacom-tab" aria-selected="${z==="denied"}" data-audit-filter="denied">已拦截</button>
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
                            ${g.map(b=>`
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
    `,e.querySelectorAll("[data-atab]").forEach(b=>{b.addEventListener("click",()=>{i=b.dataset.atab,K="",Z="",D()})}),e.querySelectorAll("[data-msub]").forEach(b=>{b.addEventListener("click",()=>{S=b.dataset.msub??"directory",D()})}),e.querySelector("[data-toggle-new-group]")?.addEventListener("click",()=>{H=!H,D()}),e.querySelector('[data-role="new-group-form"]')?.addEventListener("submit",b=>{b.preventDefault();const T=new FormData(b.currentTarget),Y=String(T.get("wgName")??"").trim(),ae=String(T.get("wgRole")??"运行值班员"),E=String(T.get("wgScope")??"").trim();!Y||!E||(Fe.push({id:`wg-${Date.now()}`,name:Y,defaultRoleLabel:ae,locationScope:E,memberCount:1,membersSummary:l.displayName,notifyChannel:"站内 + 邮件"}),H=!1,K=`已创建工作组「${Y}」（授权空间：${E}）。`,D())}),e.querySelector('[data-role="profile-form"]')?.addEventListener("submit",b=>{b.preventDefault();const T=new FormData(b.currentTarget);_=String(T.get("displayName")??"").trim()||l.displayName,R=String(T.get("jobTitle")??"").trim()||R,P=String(T.get("phone")??"").trim()||P,K=`已更新个人资料：${_}（${R}）· 告警短信接收号 ${P}。`,D()}),e.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await t.logout(),window.location.hash="#login",n()}),e.querySelector("[data-copy-session]")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(l,null,2)),W=!0,D(),window.setTimeout(()=>{W=!1,D()},1600)}catch{}}),e.querySelectorAll("[data-switch-role]").forEach(b=>{b.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const T=await t.switchDemoRole(b.dataset.switchRole);s(T)})}),e.querySelector("[data-toggle-invite]")?.addEventListener("click",()=>{V=!V,D()}),e.querySelector("[data-member-search]")?.addEventListener("input",b=>{const T=b.currentTarget,Y=T.selectionStart??T.value.length;N=T.value,D();const ae=e.querySelector("[data-member-search]");ae&&(ae.focus(),ae.setSelectionRange(Y,Y))}),e.querySelector("[data-role-filter]")?.addEventListener("change",b=>{C=b.currentTarget.value,D()}),e.querySelectorAll("[data-audit-filter]").forEach(b=>{b.addEventListener("click",()=>{z=b.dataset.auditFilter??"all",D()})}),e.querySelector("[data-audit-cat]")?.addEventListener("change",b=>{q=b.currentTarget.value??"all",D()}),e.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async b=>{b.preventDefault(),Z="";const T=new FormData(b.currentTarget);try{await t.inviteOrgMember(String(T.get("email")??""),String(T.get("role"))),V=!1,await A()}catch(Y){Z=Y instanceof Error?Y.message:String(Y),D()}})}D()}const xe={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},Qe={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},Je={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function et(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("modbus")||t.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":t.includes("co₂")||t.includes("co2")||t.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function tt(e){return e.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:e.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function Me(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("vav")||e.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:t.includes("co₂")||t.includes("co2")||e.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function at(e,t,l){const s=new URLSearchParams(window.location.hash.split("?")[1]??""),n=s.get("alarm"),i=s.get("wo");let S=[],x=[],w=[],N=i?"workorders":"alarms",C="all",z="all",q="all",V="impact",H=!1,W="",_=n,R=i,P=null,K=null,Z="resolved";const A=new Set,D=new Map,te=new Map,G=new Map,c=new Map;let g="",L="";function b(I){const h=c.get(I.id);if(h)return h;const o=I.id.match(/(\d+)$/),a=`WO-2026-${o?o[1]:I.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,p={estCost:"¥ 450",actualCost:I.status==="closed"?"¥ 380":"--",cmmsNo:a,assigneeGroup:"暖通运维组",tasks:[{id:`${I.id}-t1`,label:"核查设备供电与现场指示灯状态",done:I.status!=="open"},{id:`${I.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:I.status==="resolved"||I.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:I.createdAt?I.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${a}）`}]};return c.set(I.id,p),p}async function T(){[S,x,w]=await Promise.all([t.listAlarms(d.floorId),t.listWorkOrders(d.floorId),t.getFloorDevices(d.floorId).catch(()=>[])]),x.forEach(I=>b(I)),E()}function Y(I){if(!I)return{name:"楼层通用",zone:"E7F",dev:null};const h=w.find(o=>o.id===I)??null;return h?{name:h.name,zone:(h.logicalZoneId?Je[h.logicalZoneId]:void 0)??"E7F",dev:h}:{name:I,zone:"E7F",dev:null}}function ae(I){const h=Y(I.deviceId).dev;h&&h.connectivity==="offline"?G.set(I.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${h.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):G.set(I.id,{verdict:"pass",summary:`自检通过（PASS）：「${h?.name??I.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),_=I.id,E()}function E(){const I=S.filter(u=>u.status==="active"&&!D.has(u.id)),h=x.filter(u=>!b(u).cancelled&&(u.status==="open"||u.status==="assigned"||u.status==="in_progress")),o=S.filter(u=>u.status!=="active").length+te.size,a=0,p=D.size,j=W.trim().toLowerCase(),oe=S.filter(u=>{const v=D.has(u.id);if(C==="snoozed"){if(!v)return!1}else if(C==="active"){if(u.status!=="active"||v)return!1}else if(C==="acknowledged"){if(u.status!=="acknowledged")return!1}else if(v)return!1;if(q!=="all"&&u.severity!==q)return!1;if(!j)return!0;const B=Y(u.deviceId);return`${u.title} ${u.message} ${B.name} ${B.zone} ${u.deviceId}`.toLowerCase().includes(j)}),ce=new Map;for(const u of oe){const v=`${u.title} ${u.message}`.toLowerCase(),B=v.includes("离线")||v.includes("modbus")||v.includes("通信"),J=H?B?"root-gateway-modbus":u.deviceId:u.id,le=B?"根因：E7F 主控网关通信链路":`根因：${Y(u.deviceId).name}`,ue=ce.get(J)??{rootLabel:le,items:[]};ue.items.push(u),ce.set(J,ue)}const re=Array.from(ce.values());V==="impact"&&re.sort((u,v)=>Me(v.items[0]).costYuan-Me(u.items[0]).costYuan);const f=x.filter(u=>{const v=b(u);if(z==="cancelled"){if(!v.cancelled)return!1}else if(v.cancelled||z==="open"&&(u.status==="resolved"||u.status==="closed")||z==="resolved"&&u.status!=="resolved"||z==="closed"&&u.status!=="closed")return!1;if(!j)return!0;const B=Y(u.deviceId);return`${u.title} ${u.description} ${u.id} ${v.cmmsNo} ${B.name}`.toLowerCase().includes(j)});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">告警中心</h1>
              <div class="pacom-tabs" role="tablist" aria-label="告警中心视图">
                <button class="pacom-tab" role="tab" aria-selected="${N==="alarms"}" data-main-tab="alarms">
                  实时告警（${S.length-p}）
                </button>
                <button class="pacom-tab" role="tab" aria-selected="${N==="workorders"}" data-main-tab="workorders">
                  运维工单（${x.length}）
                </button>
              </div>
            </div>

            <div class="pacom-header-meta">
              ${N==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="lov-switch" role="switch" aria-checked="${H}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="lov-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${l.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${l.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="lov-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${ie("refresh-cw",14)}</button>
            </div>
          </div>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="lov-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="lov-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${N==="alarms"&&C==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">待处理告警</span>
              <div class="lov-kpi-value">${I.length}<span class="lov-kpi-unit">条 · 预估 ¥1,420/月</span></div>
              <span class="lov-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${N==="workorders"&&z==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">处理中工单</span>
              <div class="lov-kpi-value">${h.length}<span class="lov-kpi-unit">单</span></div>
              <span class="lov-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${N==="alarms"&&C==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="lov-kpi-label">已闭环生效</span>
              <div class="lov-kpi-value">${o}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="lov-kpi-cell">
              <span class="lov-kpi-label">关单复发待查</span>
              <div class="lov-kpi-value" style="color:var(--pacom-status-online);">${a}<span class="lov-kpi-unit">项</span></div>
              <span class="lov-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${g?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${g}</span></div>`:""}
          ${L?`<div class="pacom-alert-banner">${L}</div>`:""}

          ${N==="alarms"?`
              <section class="lov-table-card">
                <div class="lov-table-toolbar">
                  <div class="lov-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${W}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${q==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${q==="critical"?"selected":""}>严重</option>
                      <option value="major" ${q==="major"?"selected":""}>重要</option>
                      <option value="minor" ${q==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${V==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${V==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${C==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${C==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${C==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${C==="snoozed"}" data-status-pill="snoozed">已忽略（${p}）</button>
                    </div>
                  </div>
                  <div class="lov-table-toolbar-group">
                    ${A.size>0&&l.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${A.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${re.length} 项</span>
                  </div>
                </div>
                ${re.length===0?'<div class="lov-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${re.map(u=>{const v=u.items[0],B=Qe[v.severity]??{label:v.severity,cls:"pacom-badge--neutral"},J=Y(v.deviceId),le=tt(v),ue=Me(v),$e=_===v.id,de=D.get(v.id),be=!!de,m=A.has(v.id),F=G.get(v.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${v.id}" data-check-alarm="${v.id}" ${m?"checked":""} ${v.status!=="active"||be?"disabled":""} aria-label="选择 ${v.title}" />
                                  </td>
                                  <td><span class="pacom-badge ${B.cls}">${B.label}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${v.title}</span>
                                      ${H?`<span class="pacom-badge pacom-badge--accent">${u.rootLabel}${u.items.length>1?` · 影响 ${u.items.length} 项`:""}</span>`:""}
                                      ${F?`<span class="pacom-badge ${F.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${F.verdict.toUpperCase()}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${v.message}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${J.name}</div>
                                    <div class="pacom-row-sub">${J.zone}</div>
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
                                    <span class="pacom-badge ${be?"pacom-badge--neutral":v.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${be?`忽略 ${de?.duration}`:v.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${be?`<button class="pacom-btn" data-unsnooze="${v.id}">恢复监控</button>`:`
                                            ${v.status==="active"?`<button class="pacom-btn" data-mark-actioned="${v.id}" ${l.scope.canManageAlarms?"":"disabled"}>标记已处置</button>`:""}
                                            ${v.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${v.id}" ${l.scope.canManageAlarms?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${v.id}">${$e?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${$e?`
                                    <tr class="lov-table-detail-row">
                                      <td colspan="8">
                                        <div class="lov-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${et(v)}
                                            </div>
                                            ${de?`<div class="pacom-info-banner">忽略周期：${de.duration} · 原因备注：${de.reason}</div>`:""}
                                            ${F?`
                                                <div class="lov-banner ${F.verdict==="pass"?"lov-banner--ok":"lov-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="lov-banner-title">${F.summary}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${F.steps.map(r=>`<span>${r}</span>`).join("")}
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
                                            ${P===v.id?`
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
              ${(()=>{const u=R?x.find(v=>v.id===R)??null:null;if(u){const v=Y(u.deviceId),B=b(u),J=!!(B.cancelled||u.status==="closed");return`
                  <section class="lov-section" data-role="wo-workbench">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${u.id}">← 返回运维工单列表</button>
                        <h2 class="lov-section-title">${u.title}</h2>
                        <span class="pacom-badge pacom-badge--accent">${B.cmmsNo}</span>
                        ${B.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${u.id}" data-wo-status="${u.id}" aria-label="更新工单状态" ${J?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(le=>`<option value="${le}" ${u.status===le?"selected":""}>${xe[le]}</option>`).join("")}
                          <option value="cancelled" ${B.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${K===u.id?`
                        <form data-close-wo-form="${u.id}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${xe[Z]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${B.cause??""}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${B.solution??""}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${B.actualCost==="--"?"":B.actualCost}" />
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
                          <div class="pacom-row-sub">${u.description}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${B.tasks.map(le=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${le.id}" data-wo-task="${u.id}" data-task-id="${le.id}" ${le.done?"checked":""} ${J?"disabled":""} />
                                    <span>${le.label}</span>
                                  </span>
                                  ${le.unit?`<span class="pacom-row-sub">实测：${le.reading??"--"} ${le.unit}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${B.history.map(le=>`<span>• <span class="pacom-row-sub">${le.at}</span> — ${le.text}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${u.id}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${B.cmmsNo}</code> · 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${v.name}（${v.zone}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${B.assigneeGroup}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${B.estCost} / 实际 ${B.actualCost}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${B.cause??"待完单填写"}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${B.solution??"待完单填写"}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${u.deviceId}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${u.deviceId}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="lov-table-card">
                  <div class="lov-table-toolbar">
                    <div class="lov-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${W}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${z==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${z==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${z==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${z==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${z==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${f.length} 条工单</span>
                  </div>
                  ${f.length===0?'<div class="lov-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${f.map(v=>{const B=Y(v.deviceId),J=b(v),le=!!(J.cancelled||v.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${v.title}</span>
                                        ${J.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${v.description} · <code>${v.id}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${B.name}</div>
                                      <div class="pacom-row-sub">${B.zone}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${J.cmmsNo}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${J.assigneeGroup} · 预估 ${J.estCost}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${v.id}" data-wo-status="${v.id}" aria-label="更新工单状态" ${le?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(ue=>`<option value="${ue}" ${v.status===ue?"selected":""}>${xe[ue]}</option>`).join("")}
                                          <option value="cancelled" ${J.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${v.id}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${K===v.id?`
                                      <tr class="lov-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${v.id}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${xe[Z]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${J.cause??""}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${J.solution??""}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${J.actualCost==="--"?"":J.actualCost}" />
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
    `,e.querySelectorAll("[data-main-tab]").forEach(u=>{u.addEventListener("click",()=>{N=u.dataset.mainTab??"alarms",g="",E()})}),e.querySelectorAll("[data-kpi-filter]").forEach(u=>{u.addEventListener("click",()=>{const v=u.dataset.kpiFilter;g="",v==="workorders"?(N="workorders",z=z==="open"?"all":"open"):(v==="active"||v==="acknowledged")&&(N="alarms",C=C===v?"all":v),E()})}),e.querySelectorAll("[data-status-pill]").forEach(u=>{u.addEventListener("click",()=>{C=u.dataset.statusPill??"all",E()})}),e.querySelectorAll("[data-wo-pill]").forEach(u=>{u.addEventListener("click",()=>{z=u.dataset.woPill??"all",E()})}),e.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{g="",T()}),e.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{H=!H,E()}),e.querySelector("[data-severity-filter]")?.addEventListener("change",u=>{q=u.currentTarget.value,E()}),e.querySelector("[data-alarm-sort]")?.addEventListener("change",u=>{V=u.currentTarget.value??"impact",E()}),e.querySelector("[data-alarm-search]")?.addEventListener("input",u=>{const v=u.currentTarget,B=v.selectionStart??v.value.length;W=v.value,E();const J=e.querySelector("[data-alarm-search]");J&&(J.focus(),J.setSelectionRange(B,B))}),e.querySelectorAll("[data-check-alarm]").forEach(u=>{u.addEventListener("change",()=>{const v=u.dataset.checkAlarm;v&&(u.checked?A.add(v):A.delete(v),E())})}),e.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{L="";const u=Array.from(A);try{for(const v of u)await t.acknowledgeAlarm(v,"告警中心批量确认"),te.set(v,"批量确认处置");A.clear(),g=`已批量确认 ${u.length} 条告警，未来 24 小时持续校验无复发。`,await T()}catch(v){L=v instanceof Error?v.message:String(v),E()}}),e.querySelectorAll("[data-expand-alarm]").forEach(u=>{u.addEventListener("click",()=>{const v=u.dataset.expandAlarm??null;_=_===v?null:v,P=null,E()})}),e.querySelectorAll("[data-expand-wo]").forEach(u=>{u.addEventListener("click",()=>{const v=u.dataset.expandWo??null;R=R===v?null:v,E()})}),e.querySelectorAll("[data-run-ftt]").forEach(u=>{u.addEventListener("click",()=>{const v=S.find(B=>B.id===u.dataset.runFtt);v&&ae(v)})}),e.querySelectorAll("[data-open-snooze]").forEach(u=>{u.addEventListener("click",()=>{P=u.dataset.openSnooze??null,E()})}),e.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{P=null,E()}),e.querySelectorAll("[data-snooze-form]").forEach(u=>{u.addEventListener("submit",v=>{v.preventDefault();const B=u.dataset.snoozeForm;if(!B)return;const J=new FormData(u),le=String(J.get("duration")??"24h"),ue=String(J.get("reason")??"").trim()||"现场核查中";D.set(B,{duration:le,reason:ue}),A.delete(B),P=null,g=`已限时忽略该告警（${le} · ${ue}），可在「已忽略」页签中随时恢复。`,E()})}),e.querySelectorAll("[data-unsnooze]").forEach(u=>{u.addEventListener("click",()=>{const v=u.dataset.unsnooze;v&&(D.delete(v),g="已恢复该告警的实时监控。",E())})}),e.querySelectorAll("[data-go-ts]").forEach(u=>{u.addEventListener("click",()=>{const v=u.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(v)}`})}),e.querySelectorAll("[data-locate-home]").forEach(u=>{u.addEventListener("click",()=>{const v=u.dataset.locateHome??"";window.location.hash=v?`#home?device=${encodeURIComponent(v)}`:"#home"})}),e.querySelectorAll("[data-mark-actioned]").forEach(u=>{u.addEventListener("click",async()=>{L="";const v=u.dataset.markActioned;try{await t.acknowledgeAlarm(v,"现场自处理完成（Mark Actioned）"),te.set(v,"现场自处理完成"),A.delete(v),g="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await T()}catch(B){L=B instanceof Error?B.message:String(B),E()}})}),e.querySelectorAll("[data-to-wo]").forEach(u=>{u.addEventListener("click",async()=>{L="";const v=S.find(B=>B.id===u.dataset.toWo);if(v)try{await t.createWorkOrder({floorId:v.floorId,deviceId:v.deviceId,alarmId:v.id,title:`处置告警：${v.title}`,description:v.message}),g=`已将「${v.title}」转为运维工单并同步 CMMS。`,await T()}catch(B){L=B instanceof Error?B.message:String(B),E()}})}),e.querySelectorAll("[data-wo-status]").forEach(u=>{u.addEventListener("change",async()=>{const v=u.dataset.woStatus,B=u.value;if(L="",B==="cancelled"){const J=x.find(le=>le.id===v);if(J){const le=b(J);le.cancelled=!0,le.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),g="工单已移入「已取消」分类并锁定编辑。",E()}return}if(B==="resolved"||B==="closed"){K=v,Z=B,E();return}try{await t.updateWorkOrderStatus(v,B);const J=x.find(le=>le.id===v);J&&b(J).history.unshift({at:"刚刚",text:`状态变更为「${xe[B]}」`}),g="工单状态已更新并写入审计日志。",await T()}catch(J){L=J instanceof Error?J.message:String(J),await T()}})}),e.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{K=null,E()}),e.querySelectorAll("[data-close-wo-form]").forEach(u=>{u.addEventListener("submit",async v=>{v.preventDefault();const B=u.dataset.closeWoForm,J=new FormData(u),le=String(J.get("cause")??"").trim(),ue=String(J.get("solution")??"").trim(),$e=String(J.get("actualCost")??"").trim();try{await t.updateWorkOrderStatus(B,Z);const de=x.find(be=>be.id===B);if(de){const be=b(de);be.cause=le,be.solution=ue,$e&&(be.actualCost=$e),be.history.unshift({at:"刚刚",text:`流转至「${xe[Z]}」· 根因：${le}`})}K=null,R=B,g=`工单已更新为「${xe[Z]}」，根因与方案已沉淀归档。`,await T()}catch(de){L=de instanceof Error?de.message:String(de),E()}})}),e.querySelectorAll("[data-wo-task]").forEach(u=>{u.addEventListener("change",()=>{const v=x.find(le=>le.id===u.dataset.woTask);if(!v)return;const J=b(v).tasks.find(le=>le.id===u.dataset.taskId);J&&(J.done=u.checked),E()})})}await T()}const Ne=ie("chevron-down",12),Le=[{id:"energy",label:"能源",desc:"分项能耗、峰谷负荷与节能基线对比"},{id:"environment",label:"环境",desc:"ASHRAE 舒适带、室内温湿度与 CO₂ 空气质量"},{id:"occupancy",label:"占用",desc:"工位与会议室空间利用率分析"},{id:"health",label:"设备健康",desc:"在线率、通信延迟与数采断流分布"},{id:"carbon",label:"碳排放",desc:"等效碳排强度与节能减碳基线"}],Te=[{id:d.floorId,label:"广实2号园 / E栋 / 7F",factor:1},{id:d.buildingId,label:"广实2号园 / E栋（整栋）",factor:8.4},{id:d.projectId,label:"广实2号园（全园区）",factor:18.2}],st={energy:{title:"分项能耗构成与节能估算",summary:"已实现月度节省约 ¥ 1,420（潜在可再挖潜 ¥ 680），主要来自非占用时段暖通降载。",items:[{name:"暖通空调系统",pct:54.2,detail:"1,206 kWh",color:"var(--pacom-accent-solid)"},{name:"智能照明回路",pct:28.6,detail:"637 kWh",color:"var(--pacom-brand)"},{name:"实验仪器与插座",pct:12.4,detail:"276 kWh",color:"var(--pacom-status-online)"},{name:"网关与公共设施",pct:4.8,detail:"107 kWh",color:"var(--pacom-text-muted)"}]},environment:{title:"ASHRAE 舒适带与室内空气质量",summary:"全天温湿度综合达标率 96.2%，室内空间 CO₂ 全程低于 650 ppm。",items:[{name:"温度舒适区间（22–25°C）",pct:96.2,detail:"均温 23.4°C",color:"var(--pacom-status-online)"},{name:"相对湿度达标（40–60%）",pct:94.5,detail:"均湿 51%",color:"var(--pacom-accent-solid)"},{name:"室内 CO₂ 优良（<600 ppm）",pct:98.1,detail:"峰值 540 ppm",color:"var(--pacom-brand)"}]},occupancy:{title:"空间类型利用率分布",summary:"工作日 09:30–17:30 为使用高峰，午间与晚间具备进一步节能空间。",items:[{name:"东侧实验区",pct:74,detail:"高频使用",color:"var(--pacom-accent-solid)"},{name:"702 会议室",pct:62,detail:"日均 4.8 小时",color:"var(--pacom-brand)"},{name:"西侧办公区",pct:52,detail:"弹性工位",color:"var(--pacom-status-online)"}]},health:{title:"子系统在线与通信健康度",summary:"边缘网关与照明/传感链路运行稳定，1 台 VAV 离线待复核。",items:[{name:"照明与调光回路",pct:100,detail:"全部在线",color:"var(--pacom-status-online)"},{name:"环境传感网络",pct:100,detail:"延迟 18 ms",color:"var(--pacom-accent-solid)"},{name:"暖通末端控制",pct:50,detail:"1 台离线",color:"var(--pacom-status-warning)"}]},carbon:{title:"碳排放来源拆解",summary:"按华南电网排放因子折算，本周期较基线减少碳排约 86 kgCO₂e。",items:[{name:"暖通制冷碳排",pct:54.2,detail:"634 kgCO₂e",color:"var(--pacom-accent-solid)"},{name:"照明用电碳排",pct:28.6,detail:"335 kgCO₂e",color:"var(--pacom-brand)"},{name:"设备与基础负荷",pct:17.2,detail:"201 kgCO₂e",color:"var(--pacom-text-muted)"}]}},lt=[{name:"14:00–16:00 峰值时段（主空调主机 + FCU）",pct:88,detail:"峰值 42.6 kW",color:"var(--pacom-status-warning)"},{name:"10:00–12:00 上午高峰（实验区全负荷）",pct:76,detail:"36.8 kW",color:"var(--pacom-accent-solid)"},{name:"19:00–21:00 晚间值守（基础照明与通风）",pct:29,detail:"14.2 kW",color:"var(--pacom-status-online)"}],ye=["#0088cc","#2e9461","#d97706","#6d4aff","#c2410c","#202a44"];function qe(e,t=""){const l=(e??"").trim().toLowerCase();return!(!l||l.includes("%")||l.includes("°c")||l.includes("ppm")||l.includes("ms")||l.includes("m²")||l.includes("/m2")||l.includes("db")||l.includes("lx")||t.includes("率")||t.includes("均")||t.includes("强度")||t.includes("延迟"))}function Ae(e,t){const l=e*t;return Math.abs(l)>=10?Math.round(l):Math.round(l*10)/10}function ot(e,t){const l=Number(String(e).replaceAll(",","")),s=t??"";return Number.isFinite(l)?s==="kWh"&&Math.abs(l)>=1e4?{value:(l/1e3).toFixed(1),unit:"MWh",title:`精确值：${l.toLocaleString("en-US")} kWh`}:{value:Number.isInteger(l)?l.toLocaleString("en-US"):l.toLocaleString("en-US",{maximumFractionDigits:1}),unit:s,title:`${l.toLocaleString("en-US")} ${s}`.trim()}:{value:e,unit:s,title:`${e} ${s}`.trim()}}function nt(e,t){if(t===1)return e;const l=qe(e.unit);return{...e,kpis:e.kpis.map(s=>{const n=Number(String(s.value).replaceAll(",",""));return!Number.isFinite(n)||!qe(s.unit,s.label)?s:{...s,value:String(Ae(n,t))}}),series:l?e.series.map(s=>({...s,value:Ae(s.value,t),...typeof s.baseline=="number"?{baseline:Ae(s.baseline,t)}:{}})):e.series,zoneBreakdown:e.zoneBreakdown.map(s=>qe(s.unit)?{...s,value:Ae(s.value,t)}:s)}}function it(e,t){const l=Math.max(...e.series.map(q=>Math.max(q.value,q.baseline??0)),1),s=46,n=34,i=36,S=Math.max(e.series.length*(s+n)+i*2,620),x=228,w=184,N=132,C=[0,.25,.5,.75,1].map(q=>{const V=Math.round(w-q*N);return`<line x1="${i-8}" y1="${V}" x2="${S-18}" y2="${V}" stroke="oklch(85.12% 0 107 / 0.55)" stroke-dasharray="${q===0?"0":"3 3"}" />`}).join(""),z=e.series.map((q,V)=>{const H=i+V*(s+n),W=Math.max(8,Math.round(q.value/l*N)),_=w-W,R=typeof q.baseline=="number"&&q.value>q.baseline*1.08,P=R?`<rect x="${H-8}" y="34" width="${s+16}" height="${w-34}" rx="8" fill="oklch(58.53% 0.2203 26.56 / 0.09)" />`:"",K=typeof q.baseline=="number"?`<line x1="${H-5}" y1="${Math.round(w-q.baseline/l*N)}" x2="${H+s+5}" y2="${Math.round(w-q.baseline/l*N)}" stroke="var(--pacom-brand)" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6" />`:"",Z=t&&(R||V===1)?`<g><title>${R?"事件：告警触发 / 负荷超基线":"事件：执行节能排程下发"}</title><circle cx="${H+s/2}" cy="18" r="7" fill="${R?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" /><text x="${H+s/2}" y="21" text-anchor="middle" font-size="8.5" font-weight="600" fill="#fff">${R?"!":"S"}</text></g>`:"",A=q.value>=1e4?`${(q.value/1e3).toFixed(1)}k`:q.value.toLocaleString("en-US");return`
        ${P}
        ${K}
        ${Z}
        <g>
          <title>${q.label}：实测 ${q.value.toLocaleString("en-US")} ${e.unit}${q.baseline!==void 0?` / 基线 ${q.baseline.toLocaleString("en-US")} ${e.unit}`:""}</title>
          <rect x="${H}" y="${_}" width="${s}" height="${W}" rx="7" fill="${R?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.88" />
        </g>
        <text x="${H+s/2}" y="${_-8}" text-anchor="middle" font-size="11" font-weight="500" fill="var(--pacom-text-primary)">${A}</text>
        <text x="${H+s/2}" y="${w+22}" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${q.label}</text>
      `}).join("");return`
    <svg viewBox="0 0 ${S} ${x}" style="width:100%; height:232px; display:block;" role="img" aria-label="${e.category} 趋势图">
      ${C}
      ${z}
    </svg>
  `}function ct(e,t){const l=e.connectivity==="offline";if(e.category==="hvac"){const s=Number(e.telemetry.setpoint?.value??24);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:l?[23.8,24,24.1,null,null,null,null,null]:[s+.8,s+.6,s+.3,s,s-.2,s+.1,s+.2,s],offline:l,colorIdx:t},{id:`${e.id}:setpoint`,deviceId:e.id,deviceName:e.name,pointKey:"setpoint",label:"设定温度",unit:"°C",points:l?[24,24,24,null,null,null,null,null]:[s,s,s,s,s,s,s,s],offline:l,colorIdx:t+1},{id:`${e.id}:valve`,deviceId:e.id,deviceName:e.name,pointKey:"valve",label:"冷阀开度",unit:"%",points:l?[42,46,51,null,null,null,null,null]:[20,24,38,62,74,68,52,30],offline:l,colorIdx:t+2}]}if(e.category==="lighting"){const s=Number(e.telemetry.dimming?.value??60);return[{id:`${e.id}:dimming`,deviceId:e.id,deviceName:e.name,pointKey:"dimming",label:"回路亮度",unit:"%",points:[0,0,Math.round(s*.8),s,s,Math.round(s*.6),s,Math.round(s*.9)],offline:l,colorIdx:t},{id:`${e.id}:power`,deviceId:e.id,deviceName:e.name,pointKey:"power",label:"实时功率",unit:"W",points:[12,12,220,285,290,175,280,245],offline:l,colorIdx:t+1}]}if(e.category==="sensor"){const s=Number(e.telemetry.temp?.value??23.4);return[{id:`${e.id}:temp`,deviceId:e.id,deviceName:e.name,pointKey:"temp",label:"室内温度",unit:"°C",points:[s-.5,s-.3,s,s+.3,s+.5,s+.2,s+.1,s],offline:l,colorIdx:t},{id:`${e.id}:co2`,deviceId:e.id,deviceName:e.name,pointKey:"co2",label:"CO₂ 浓度",unit:"ppm",points:[410,415,440,520,580,540,495,430],offline:l,colorIdx:t+1},{id:`${e.id}:humidity`,deviceId:e.id,deviceName:e.name,pointKey:"humidity",label:"相对湿度",unit:"%RH",points:[49,50,51,52,53,51,50,49],offline:l,colorIdx:t+2}]}return[{id:`${e.id}:latency`,deviceId:e.id,deviceName:e.name,pointKey:"latency",label:"心跳延迟",unit:"ms",points:[16,18,17,19,18,17,18,18],offline:l,colorIdx:t}]}function dt(e){const t=e.points.filter(x=>typeof x=="number");if(!t.length)return{min:"-",avg:"-",max:"-",curr:"离线"};const l=Math.min(...t),s=Math.max(...t),n=t.reduce((x,w)=>x+w,0)/t.length,i=e.points[e.points.length-1],S=x=>Math.abs(x)<100&&!Number.isInteger(x)?x.toFixed(1):Math.round(x).toString();return{min:S(l),avg:n.toFixed(Math.abs(n)<100?1:0),max:S(s),curr:typeof i=="number"?S(i):"离线"}}function rt(e,t,l){const s=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"];if(!e.length)return'<div class="lov-empty-state"><strong>尚未勾选设备测点</strong><span>请在左侧展开设备并勾选 1 个或多个测点以开始多点时序对比。</span></div>';const n=(S,x)=>{const _=[];for(const c of S)for(const g of c.points)typeof g=="number"&&_.push(g);const R=_.length?Math.min(..._)*.92:0,P=_.length?Math.max(..._)*1.08:100,K=Math.max(P-R,1),Z=[0,.5,1].map(c=>{const g=Math.round(26+106*(1-c)),L=(R+K*c).toFixed(K<15?1:0);return`
          <line x1="44" y1="${g}" x2="662" y2="${g}" stroke="oklch(85.12% 0 107 / 0.5)" stroke-dasharray="${c===0?"0":"3 3"}" />
          <text x="38" y="${g+3}" text-anchor="end" font-size="10" fill="var(--pacom-text-secondary)">${L}</text>
        `}).join(""),A=s.map((c,g)=>`<text x="${44+g/(s.length-1)*618}" y="152" text-anchor="middle" font-size="10" fill="var(--pacom-text-secondary)">${c}</text>`).join(""),D=S.map((c,g)=>{const L=ye[(c.colorIdx+g)%ye.length],b=c.points,T=[];let Y=44,ae=26+106/2,E=!1;b.forEach((h,o)=>{const a=44+o/(b.length-1)*618;if(typeof h=="number"){const p=26+106*(1-(h-R)/K);T.push(`${a.toFixed(1)},${p.toFixed(1)}`),Y=a,ae=p}else E=!0});const I=l?b.map((h,o)=>{if(typeof h!="number")return null;const a=44+o/(b.length-1)*618,j=26+106*(1-(h*.96-R)/K);return`${a.toFixed(1)},${j.toFixed(1)}`}).filter(Boolean).join(" "):"";return`
          ${I?`<polyline fill="none" stroke="${L}" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.42" points="${I}" />`:""}
          ${T.length?`<polyline fill="none" stroke="${L}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${T.join(" ")}" />`:""}
          ${E?`<line x1="${Y.toFixed(1)}" y1="${ae.toFixed(1)}" x2="662" y2="${ae.toFixed(1)}" stroke="var(--pacom-status-offline)" stroke-width="1.6" stroke-dasharray="4 4" /><text x="658" y="${ae-6}" text-anchor="end" font-size="10" fill="var(--pacom-status-warning)">No Data（断流离线）</text>`:""}
        `}).join(""),te=`
      <g><title>09:00 自动执行早间预冷排程</title><circle cx="${44+3/7*618}" cy="12" r="6" fill="var(--pacom-accent-solid)" /><text x="${44+3/7*618}" y="14.8" text-anchor="middle" font-size="7.5" font-weight="600" fill="#fff">S</text></g>
      <g><title>15:00 VAV-02 通信离线告警</title><circle cx="${44+5/7*618}" cy="12" r="6" fill="var(--pacom-status-warning)" /><text x="${44+5/7*618}" y="15" text-anchor="middle" font-size="8" fill="#fff">!</text></g>
    `,G=S.map((c,g)=>{const L=ye[(c.colorIdx+g)%ye.length],b=dt(c);return`
          <tr>
            <td><span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:7px; height:7px; border-radius:50%; background:${L};"></span>${c.deviceName} · ${c.label}</span></td>
            <td><strong>${b.curr}</strong> <span class="pacom-row-sub">${c.unit}</span></td>
            <td>${b.min} <span class="pacom-row-sub">${c.unit}</span></td>
            <td>${b.avg} <span class="pacom-row-sub">${c.unit}</span></td>
            <td>${b.max} <span class="pacom-row-sub">${c.unit}</span></td>
          </tr>`}).join("");return`
      <div class="pacom-card" style="padding:14px 16px; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="font-size:13px; font-weight:500;">${x}</strong>
          <div style="display:flex; gap:10px; flex-wrap:wrap; font-size:12px;">
            ${S.map((c,g)=>`<span style="display:inline-flex; align-items:center; gap:5px;"><span style="width:8px; height:8px; border-radius:50%; background:${ye[(c.colorIdx+g)%ye.length]};"></span>${c.deviceName}·${c.label}</span>`).join("")}
          </div>
        </div>
        <svg viewBox="0 0 680 158" style="width:100%; height:158px; display:block;">
          ${Z}
          ${A}
          ${te}
          ${D}
        </svg>
        <div class="lov-table-wrap" style="border-top:var(--hw) solid var(--pacom-border-subtle); padding-top:6px;">
          <table class="lov-table" style="font-size:12px;">
            <thead><tr><th>测点</th><th>当前值</th><th>最小值 (Min)</th><th>平均值 (Avg)</th><th>最大值 (Max)</th></tr></thead>
            <tbody>${G}</tbody>
          </table>
        </div>
      </div>
    `};if(t==="shared")return n(e,"单图叠合对比（Shared）");const i=new Map;for(const S of e){const x=i.get(S.unit)??[];x.push(S),i.set(S.unit,x)}return Array.from(i.entries()).map(([S,x])=>n(x,`按单位分组泳道（${S}）`)).join("")}function pt(e){const t=[["时段",`数值 (${e.unit})`,`基线 (${e.unit})`].join(","),...e.series.map(i=>[i.label,String(i.value),i.baseline!==void 0?String(i.baseline):""].join(","))],l=new Blob([`\uFEFF${t.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),s=URL.createObjectURL(l),n=document.createElement("a");n.href=s,n.download=`pacom-${e.category}-${e.range}.csv`,n.click(),URL.revokeObjectURL(s)}function ut(e){const t=["00:00","03:00","06:00","09:00","12:00","15:00","18:00","21:00"],l=["时间",...e.map(x=>`${x.deviceName}·${x.label}(${x.unit})`)].join(","),s=t.map((x,w)=>[x,...e.map(N=>String(N.points[w]??"No Data"))].join(",")),n=new Blob([`\uFEFF${[l,...s].join(`
`)}`],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),S=document.createElement("a");S.href=i,S.download="pacom-timeseries-export.csv",S.click(),URL.revokeObjectURL(i)}async function vt(e,t,l){const s=new URLSearchParams(window.location.hash.split("?")[1]??""),n=s.get("tab"),i=s.get("cat"),S=s.get("device"),x=s.get("points"),w=s.get("mode"),N=s.get("interval");let C=n==="timeseries"?"timeseries":i&&Le.some(I=>I.id===i)?i:"energy",z="7d",q="2026-11-16",V="2026-11-23",H=d.floorId,W="chart",_=!0,R="breakdown",P=!1,K=null,Z=await t.getFloorDevices(d.floorId).catch(()=>[]);const A=new Map,D=[];Z.forEach((I,h)=>{const o=ct(I,h);A.set(I.id,o),D.push(...o)});let te=w==="shared"||w==="grouped"?w:"grouped",G=N==="15m"||N==="1h"||N==="1d"?N:"1h",c=!1;const g=[];if(x?x.split(",").forEach(I=>{D.some(h=>h.id===I)&&g.push(I)}):S&&A.has(S)&&(A.get(S)??[]).slice(0,2).forEach(I=>g.push(I.id)),!g.length){const I=Z.find(a=>a.category==="hvac"),h=Z.find(a=>a.category==="sensor"),o=Z.find(a=>a.category==="lighting");I&&(A.get(I.id)??[]).slice(0,2).forEach(a=>g.push(a.id)),h&&(A.get(h.id)??[]).slice(0,1).forEach(a=>g.push(a.id)),o&&(A.get(o.id)??[]).slice(0,1).forEach(a=>g.push(a.id)),g.length||D.slice(0,3).forEach(a=>g.push(a.id))}const L=new Set(g),b=new Set(Z.filter((I,h)=>h<2||(A.get(I.id)??[]).some(o=>L.has(o.id))).map(I=>I.id)),T=[{id:"fav-hvac",name:"E7F 空调温控与 CO₂ 联动对照",pointIds:D.filter(I=>I.pointKey==="temp"||I.pointKey==="setpoint"||I.pointKey==="co2").slice(0,4).map(I=>I.id),mode:"grouped",interval:"1h"},{id:"fav-light",name:"照明回路亮度与功率对比",pointIds:D.filter(I=>I.pointKey==="dimming"||I.pointKey==="power").slice(0,4).map(I=>I.id),mode:"grouped",interval:"15m"}];let Y="";async function ae(){const I=C==="timeseries"?"energy":C,h=z==="custom"?"30d":z;K=await t.getAnalysisReport(I,h,d.floorId),E()}function E(){if(!K)return;const I=C==="timeseries",h=C==="timeseries"?"energy":C,o=Le.find(f=>f.id===h)??Le[0],a=Te.find(f=>f.id===H)??Te[0],p=nt(K,a.factor),j=p.zoneBreakdown.filter(f=>f.status==="warning"),oe=st[h],ce=Math.max(...p.zoneBreakdown.map(f=>f.value),1),re=D.filter(f=>L.has(f.id));e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:10px; min-width:0;">
              <h1 class="pacom-title" style="flex-shrink:0;">数据分析</h1>
              <div class="pacom-tabs" role="tablist" aria-label="分析维度">
                ${Le.map(f=>`<button class="pacom-tab" role="tab" aria-selected="${C===f.id}" data-cat="${f.id}">${f.label}</button>`).join("")}
                <button class="pacom-tab" role="tab" aria-selected="${C==="timeseries"}" data-cat="timeseries">多点时序</button>
              </div>
            </div>
            <div class="pacom-header-meta" style="flex-wrap:nowrap; flex-shrink:0;">
              <div class="pacom-scope-pill" style="width:210px;" title="切换统计空间范围">
                <select name="analysisScope" data-scope-select aria-label="选择统计空间范围">
                  ${Te.map(f=>`<option value="${f.id}" ${f.id===H?"selected":""}>${f.label}</option>`).join("")}
                </select>
                <span class="pacom-scope-chevron">${Ne}</span>
              </div>
              <select class="pacom-select" name="analysisRange" data-range-select aria-label="选择时间范围" style="height:32px; width:108px;">
                <option value="today" ${z==="today"?"selected":""}>今日</option>
                <option value="7d" ${z==="7d"?"selected":""}>近 7 天</option>
                <option value="30d" ${z==="30d"?"selected":""}>近 30 天</option>
                <option value="custom" ${z==="custom"?"selected":""}>自定义范围</option>
              </select>
              <button class="pacom-btn" data-export-csv="1">导出 CSV</button>
              ${I?"":`<button class="pacom-btn ${P?"pacom-btn--primary":""}" data-toggle-canvas="1">${P?"关闭对照":"空间对照"}</button>`}
            </div>
          </div>
          ${z==="custom"?`
              <div class="pacom-header-toolbar" style="justify-content:flex-end;">
                <div style="display:inline-flex; align-items:center; gap:8px; font-size:12px;">
                  <span class="pacom-row-sub">自定义统计区间（最长支持 371 天）：</span>
                  <input class="pacom-input" name="customStart" type="date" style="width:136px; height:28px;" value="${q}" data-custom-start />
                  <span class="pacom-row-sub">至</span>
                  <input class="pacom-input" name="customEnd" type="date" style="width:136px; height:28px;" value="${V}" data-custom-end />
                </div>
              </div>`:""}
        </header>

        ${I?`
            <div class="lov-subnav-layout" style="padding:2px 4px 4px;">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:296px; min-width:272px;">
                <div class="pacom-pane-toolbar">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500;">设备 → 测点树</span>
                    <span class="pacom-row-sub">已选 ${re.length} 个测点</span>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    <span class="pacom-row-sub">常用收藏视图</span>
                    ${T.map(f=>`<button type="button" class="pacom-btn" style="height:28px; justify-content:flex-start; font-size:12px;" data-load-fav="${f.id}">${ie("star",14)}<span style="overflow:hidden;text-overflow:ellipsis;">${f.name}</span></button>`).join("")}
                    <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; font-size:12px;" data-save-fav="1">+ 保存当前为收藏</button>
                  </div>
                </div>
                <div class="pacom-list">
                  ${Z.map(f=>{const O=A.get(f.id)??[],u=b.has(f.id),v=O.filter(B=>L.has(B.id)).length;return`
                        <div style="display:flex; flex-direction:column; gap:2px;">
                          <button type="button" class="pacom-row" data-ts-expand="${f.id}" style="cursor:pointer; justify-content:space-between;" title="${f.name}">
                            <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
                              <span style="display:inline-flex; transition:transform 140ms ease; transform:rotate(${u?"0deg":"-90deg"}); opacity:0.65;">${Ne}</span>
                              <div style="min-width:0; flex:1; text-align:left;">
                                <div class="pacom-row-title" style="font-size:13px;">${f.name}</div>
                                <div class="pacom-row-sub">${O.length} 个测点 · ${f.connectivity==="online"?"在线":"离线"}</div>
                              </div>
                            </div>
                            ${v>0?`<span class="pacom-badge pacom-badge--accent">${v}</span>`:""}
                          </button>
                          ${u?`<div style="display:flex; flex-direction:column; gap:2px; padding-left:20px; padding-bottom:4px;">
                                  ${O.map(B=>{const J=L.has(B.id),le=ye[B.colorIdx%ye.length];return`
                                        <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:5px 8px; border-radius:var(--pacom-radius-sm); cursor:pointer; font-size:12px; background:${J?"var(--pacom-surface-recessed)":"transparent"};">
                                          <span style="display:inline-flex; align-items:center; gap:6px;">
                                            <input type="checkbox" name="tsPoint-${B.id}" data-ts-point="${B.id}" ${J?"checked":""} />
                                            <span style="width:7px; height:7px; border-radius:50%; background:${le};"></span>
                                            <span style="color:var(--pacom-text-primary);">${B.label}</span>
                                          </span>
                                          <span class="pacom-row-sub">${B.unit}</span>
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
                    <span class="pacom-row-sub" style="display:inline-flex; align-items:center; gap:6px;">${ie("clock",12)} 排程(S) · ${ie("triangle-alert",12)} 告警(!) · 虚线为断流/上周同期</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>对比上周同期</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${c}" data-ts-compare="1" aria-label="叠加对比上周同期曲线">
                        <span class="lov-switch-thumb"></span>
                      </button>
                    </label>
                    <select class="pacom-select" name="tsInterval" data-ts-interval aria-label="采样粒度" style="height:28px; font-size:12px;">
                      <option value="15m" ${G==="15m"?"selected":""}>15 分钟</option>
                      <option value="1h" ${G==="1h"?"selected":""}>1 小时</option>
                      <option value="1d" ${G==="1d"?"selected":""}>1 天</option>
                    </select>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${te==="grouped"}" data-ts-mode="grouped">按单位分组</button>
                      <button class="pacom-tab" aria-selected="${te==="shared"}" data-ts-mode="shared">单图叠合</button>
                    </div>
                    <button type="button" class="pacom-btn" style="height:28px; font-size:12px;" data-ts-share="1">复制分享链接</button>
                  </div>
                </div>
                ${rt(re,te,c)}
              </div>
            </div>`:`
            <div class="pacom-content-page" style="padding:6px 4px 28px;">
              <div class="lov-kpi-strip" role="region" aria-label="核心统计指标">
                ${p.kpis.map(f=>{const O=ot(f.value,f.unit);return`
                      <div class="lov-kpi-cell" title="${O.title}">
                        <span class="lov-kpi-label">${f.label}</span>
                        <div class="lov-kpi-value">
                          <span>${O.value}</span>
                          ${O.unit?`<span class="lov-kpi-unit">${O.unit}</span>`:""}
                        </div>
                        <span class="lov-kpi-delta">${f.delta??"与基线持平"}</span>
                      </div>`}).join("")}
              </div>

              <section class="lov-section">
                <div class="lov-section-head">
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <h2 class="lov-section-title">${o?.label??"趋势"}趋势（${p.unit}）</h2>
                    <span class="pacom-badge pacom-badge--online">数据完整度 99.4%</span>
                    <span class="pacom-row-sub">口径：${a.label} · 更新于 ${p.updatedAt.slice(5,16).replace("T"," ")}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label style="display:inline-flex; align-items:center; gap:6px; font-size:12px; color:var(--pacom-text-secondary); cursor:pointer;">
                      <span>叠加事件标记</span>
                      <button type="button" class="lov-switch" role="switch" aria-checked="${_}" data-toggle-events="1" aria-label="叠加告警与指令事件标记">
                        <span class="lov-switch-thumb"></span>
                      </button>
                    </label>
                    <div class="pacom-tabs">
                      <button class="pacom-tab" aria-selected="${W==="chart"}" data-chart-mode="chart">趋势图</button>
                      <button class="pacom-tab" aria-selected="${W==="table"}" data-chart-mode="table">明细原表</button>
                    </div>
                  </div>
                </div>

                <div class="pacom-card" style="gap:10px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                    <span class="pacom-row-sub">
                      ${j.length>0?`关注：${j.map(f=>f.zoneName).join("、")} 指标偏高，建议前往智能策略优化启停时段。`:`${o?.desc??"空间运行洞察"} · ${oe.summary}`}
                    </span>
                    <button class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-strategy="1">去智能策略优化 →</button>
                  </div>
                  ${W==="chart"?it(p,_):`
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
                            ${p.series.map(f=>{const O=typeof f.baseline=="number"&&f.value>f.baseline*1.08;return`
                                  <tr>
                                    <td><strong>${f.label}</strong></td>
                                    <td>${f.value.toLocaleString("en-US")}</td>
                                    <td>${f.baseline!==void 0?f.baseline.toLocaleString("en-US"):"-"}</td>
                                    <td><span class="pacom-badge ${O?"pacom-badge--warning":"pacom-badge--online"}">${O?"超基线":"正常"}</span></td>
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
                          ${p.zoneBreakdown.map(f=>{const O=Math.max(8,Math.round(f.value/ce*100));return`
                                <tr>
                                  <td style="font-weight:500;">${f.zoneName.replace(/^7F\s*/,"")}</td>
                                  <td style="width:140px;">
                                    <div style="height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                      <div style="width:${O}%; height:100%; border-radius:999px; background:${f.status==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"};"></div>
                                    </div>
                                  </td>
                                  <td><strong>${f.value.toLocaleString("en-US")}</strong> <span class="pacom-row-sub">${f.unit}</span></td>
                                  <td>
                                    <span class="pacom-badge ${f.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${f.status==="warning"?"偏高关注":"正常"}
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
                    <h2 class="lov-section-title">${P?"E7F 空间对照预览":h==="energy"&&R==="load"?"峰谷负荷分布（Load Profile）":oe.title}</h2>
                    ${!P&&h==="energy"?`
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${R==="breakdown"}" data-energy-right="breakdown">分项构成</button>
                          <button class="pacom-tab" aria-selected="${R==="load"}" data-energy-right="load">峰谷负荷</button>
                        </div>`:`<span class="pacom-row-sub">${P?"与空间总览状态独立":"当前周期结构占比"}</span>`}
                  </div>
                  <div class="pacom-card" style="flex:1; justify-content:center; gap:14px;">
                    ${P?'<img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 分析楼层预览" style="max-height:240px; margin:0 auto;" />':`
                        ${h==="environment"?`
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
                        ${(h==="energy"&&R==="load"?lt:oe.items).map(f=>`
                            <div style="display:flex; flex-direction:column; gap:6px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                                <span style="font-weight:500; color:var(--pacom-text-primary);">${f.name}</span>
                                <span class="pacom-row-sub">${f.detail} · <strong style="color:var(--pacom-text-primary);">${f.pct}%</strong></span>
                              </div>
                              <div style="height:7px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
                                <div style="width:${Math.min(100,f.pct)}%; height:100%; border-radius:999px; background:${f.color};"></div>
                              </div>
                            </div>`).join("")}`}
                  </div>
                </section>
              </div>
            </div>`}
      </div>
    `,e.querySelectorAll("[data-cat]").forEach(f=>{f.addEventListener("click",()=>{C=f.dataset.cat??"energy",Y="",C==="timeseries"?E():ae()})}),e.querySelector("[data-scope-select]")?.addEventListener("change",f=>{H=f.currentTarget.value,E()}),e.querySelector("[data-range-select]")?.addEventListener("change",f=>{z=f.currentTarget.value??"7d",ae()}),e.querySelector("[data-custom-start]")?.addEventListener("change",f=>{q=f.currentTarget.value}),e.querySelector("[data-custom-end]")?.addEventListener("change",f=>{V=f.currentTarget.value}),e.querySelectorAll("[data-chart-mode]").forEach(f=>{f.addEventListener("click",()=>{W=f.dataset.chartMode??"chart",E()})}),e.querySelector("[data-toggle-events]")?.addEventListener("click",()=>{_=!_,E()}),e.querySelectorAll("[data-energy-right]").forEach(f=>{f.addEventListener("click",()=>{R=f.dataset.energyRight??"breakdown",E()})}),e.querySelector("[data-export-csv]")?.addEventListener("click",()=>{I?ut(re):pt(p)}),e.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{P=!P,E()}),e.querySelector("[data-go-strategy]")?.addEventListener("click",()=>{window.location.hash="#scenes"}),e.querySelectorAll("[data-ts-expand]").forEach(f=>{f.addEventListener("click",()=>{const O=f.dataset.tsExpand;O&&(b.has(O)?b.delete(O):b.add(O),E())})}),e.querySelectorAll("[data-ts-point]").forEach(f=>{f.addEventListener("change",()=>{const O=f.dataset.tsPoint;O&&(f.checked?L.add(O):L.delete(O),Y="",E())})}),e.querySelectorAll("[data-ts-mode]").forEach(f=>{f.addEventListener("click",()=>{te=f.dataset.tsMode??"grouped",E()})}),e.querySelector("[data-ts-interval]")?.addEventListener("change",f=>{G=f.currentTarget.value??"1h",E()}),e.querySelector("[data-ts-compare]")?.addEventListener("click",()=>{c=!c,E()}),e.querySelector("[data-ts-share]")?.addEventListener("click",()=>{const O=`#analysis?tab=timeseries&points=${encodeURIComponent(Array.from(L).join(","))}&mode=${te}&interval=${G}`,u=`${window.location.origin}${window.location.pathname}${O}`;navigator.clipboard?.writeText&&navigator.clipboard.writeText(u).catch(()=>{}),window.history.replaceState(null,"",O),Y=`已复制分享链接（含 ${L.size} 个测点、${te==="grouped"?"按单位分组":"单图叠合"}、${G} 粒度）。`,E()}),e.querySelectorAll("[data-load-fav]").forEach(f=>{f.addEventListener("click",()=>{const O=T.find(u=>u.id===f.dataset.loadFav);O&&(L.clear(),O.pointIds.forEach(u=>{L.add(u);const v=u.split(":")[0];v&&b.add(v)}),te=O.mode,G=O.interval,Y=`已加载收藏视图「${O.name}」。`,E())})}),e.querySelector("[data-save-fav]")?.addEventListener("click",()=>{if(L.size===0)return;const f=`自定义对比 #${T.length+1}（${L.size} 测点）`;T.push({id:`fav-${Date.now()}`,name:f,pointIds:Array.from(L),mode:te,interval:G}),Y=`已保存当前时序配置为「${f}」。`,E()})}await ae()}const mt=[{group:"一、项目配置",items:[{id:"projects",label:"项目与楼宇"},{id:"floors",label:"楼层与功能区"}]},{group:"二、系统接入",items:[{id:"connections",label:"网关与数据健康"}]},{group:"三、设备部署",items:[{id:"floorplan",label:"图纸标点与绑定"},{id:"inventory",label:"设备四态台账"}]},{group:"四、交付验收",items:[{id:"delivery",label:"进度与交付冻结"}]}],gt={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},bt={frozen:"已冻结",draft:"草稿",delivered:"已交付"},ht={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"},De=[{id:"doc-hvac-7f",name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F · FCU-01 / VAV-02",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",name:"E7F_强电照明与DALI回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F · 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-bacnet-map",name:"E7F_BACnet_Modbus_点位映射表.xlsx",category:"点位台账",boundScope:"E栋 7F · 主控网关 GW-01",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",name:"FCU-01_风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 · FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}];function ft(e,t){const l=e.status!=="connected",s=t.filter(n=>n.hardwareBinding?.protocol===e.protocol);return s.length>0?s.flatMap(n=>{const i=n.connectivity==="offline"||l;return[{pointName:n.category==="hvac"?"送风温度 / 阀门开度":n.category==="lighting"?"回路开关 / 调光反馈":n.category==="sensor"?"温湿度 / CO₂ 遥测":"网关心跳 / 负载",deviceName:n.name,value:i?"No Data":n.category==="hvac"?"23.4°C · 62%":n.category==="lighting"?"ON · 80%":n.category==="sensor"?"24.1°C · 510 ppm":"CPU 18% · 18ms",interval:"60s",lastSeen:i?"46 分钟前":"12 秒前",quality:i?n.connectivity==="offline"?"offline":"delayed":"online"}]}):[{pointName:`${e.protocol.toUpperCase()} 主干遥测汇总点`,deviceName:e.name,value:l?"采样延迟":"正常上报",interval:"60s",lastSeen:l?"38 分钟前":"9 秒前",quality:l?"delayed":"online"}]}function yt(e){return e.category==="gateway"?"主控网关":e.category==="lighting"?e.name.includes("702")?"702 照明":"主照明":e.category==="hvac"?e.name.includes("VAV")?"VAV-02":"FCU-01":e.category==="sensor"?"环境传感":e.name.slice(0,6)}async function $t(e,t,l){const s=new URLSearchParams(window.location.hash.split("?")[1]??"").get("sec");let n=s&&["projects","floors","connections","floorplan","inventory","delivery"].includes(s)?s:"floorplan",i="all",S=await t.getSpatialTree(),x=[],w=[],N=[],C=null,z=!1,q=!1,V=null,H=null,W=null,_="",R="";async function P(){R="";const[D,te,G,c]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(d.floorId).catch(()=>[]),t.listConnections(d.projectId),t.listDeliveryBatches(d.floorId)]);S=D,x=te,w=G,N=c,x.some(L=>L.id===C)||(C=x[0]?.id??null),z=x.find(L=>L.id===C)?.physicalInstalled??!1,A()}function K(D){R="",D.connectivity==="offline"?R=`单机回读自检未通过（FAIL）：「${D.name}」当前离线，请先在「网关与数据健康」核查 ${D.hardwareBinding?.networkAddress??"-"} 链路状态。`:_=`单机回读自检通过（PASS）：「${D.name}」指令下发 → 状态回读一致 → 已安全自动恢复原工况。`,A()}function Z(){R="";const D=x.filter(b=>b.connectivity==="offline"),te=x.length-D.length,G=new Date,c=String(G.getHours()).padStart(2,"0"),g=String(G.getMinutes()).padStart(2,"0"),L=String(G.getSeconds()).padStart(2,"0");W={ranAt:`${c}:${g}:${L}`,total:x.length,passed:te,failed:D.length,failedNames:D.map(b=>b.name)},D.length>0?R=`全层批量自检（FTT）完成：${te}/${x.length} 台通过，${D.length} 台失败（${D.map(b=>b.name).join("、")}），其余设备已安全复位。`:_=`全层批量自检（FTT）全部通过：${te}/${x.length} 台设备指令下发、状态回读一致并已安全复位。`,A()}function A(){const D=x.find(a=>a.id===C)??null,te=l.scope.canEditDeployment,G=w.reduce((a,p)=>a+p.collectedPoints,0),c=w.reduce((a,p)=>a+p.calculatedPoints,0),g=w.filter(a=>a.status==="connected").length,L=w.filter(a=>a.status!=="connected"),b=x.filter(a=>!!a.planPoint).length,T=x.filter(a=>a.physicalInstalled).length,Y=x.length-T,ae=x.length-b,E=x.filter(a=>i==="unverified"?!a.physicalInstalled:i==="unplaced"?!a.planPoint:!0),I=S.buildings.find(a=>a.id===d.buildingId),h=S.floors.filter(a=>a.buildingId===d.buildingId),o=S.zones.filter(a=>a.floorId===d.floorId);e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">系统部署</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">当前试点：广实2号园 / E栋 7F</span>
              <span class="pacom-badge ${te?"pacom-badge--online":"pacom-badge--warning"}">
                ${te?"可编辑部署与硬件绑定":"只读权限（写入将被服务端 403 拦截）"}
              </span>
            </div>
          </div>
        </header>

        ${_?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${_}</span></div>`:""}
        ${R?`<div class="pacom-alert-banner">${R}</div>`:""}

        <div class="lov-subnav-layout">
          <nav class="lov-subnav-rail lov-subnav-rail--compact" style="width:172px;" aria-label="工程部署阶段导轨">
            ${mt.map(a=>`
              <div class="lov-subnav-group">
                <div class="lov-subnav-group-title">${a.group}</div>
                ${a.items.map(p=>`
                    <button type="button" class="lov-subnav-item" aria-current="${n===p.id?"true":"false"}" data-dsec="${p.id}">
                      <span>${p.label}</span>
                      ${p.id==="connections"&&L.length>0?`<span class="pacom-badge pacom-badge--warning">${L.length}</span>`:""}
                      ${p.id==="floorplan"&&Y>0?`<span class="pacom-badge pacom-badge--neutral">${Y}</span>`:""}
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
                          <span>未标点</span><span class="lov-count-num">${ae}</span>
                        </button>
                      </div>
                    </div>
                    <div class="pacom-list">
                      ${E.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">该筛选条件下无设备</div>':E.map(a=>`
                                <div class="pacom-row ${a.id===C?"is-selected":""}" data-pick-dev="${a.id}">
                                  <div style="min-width:0;">
                                    <div class="pacom-row-title">${a.name}</div>
                                    <div class="pacom-row-sub">v${a.version} · ${a.hardwareBinding?.protocol.toUpperCase()??"未绑定"} · ${a.physicalInstalled?"物理已复核":"待物理复核"}</div>
                                  </div>
                                  <span class="pacom-badge ${a.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">
                                    ${a.planPoint?`${Math.round(a.planPoint.x*100)}%,${Math.round(a.planPoint.y*100)}%`:"未标点"}
                                  </span>
                                </div>`).join("")}
                    </div>
                    ${D?`
                        <form data-role="binding-form" style="padding:14px 16px; border-top:var(--hw) solid var(--pacom-border-subtle); background:var(--pacom-surface-primary); display:flex; flex-direction:column; gap:10px;">
                          <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-weight:500; font-size:13px;">显式硬件绑定与现场复核</span>
                            <span class="pacom-badge pacom-badge--neutral">${D.id}</span>
                          </div>
                          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                            <select class="pacom-select" name="protocol" aria-label="通信协议">
                              ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(a=>`<option value="${a}" ${D.hardwareBinding?.protocol===a?"selected":""}>${a.toUpperCase()}</option>`).join("")}
                            </select>
                            <input class="pacom-input" name="networkAddress" placeholder="网络地址/主题" value="${D.hardwareBinding?.networkAddress??""}" aria-label="网络地址" />
                          </div>
                          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                            <input class="pacom-input" name="portOrChannel" placeholder="端口/回路" value="${D.hardwareBinding?.portOrChannel??""}" aria-label="端口或回路" />
                            <div style="display:inline-flex; align-items:center; gap:6px; flex-shrink:0;">
                              <span class="pacom-row-sub">物理已复核</span>
                              <button type="button" class="lov-switch" role="switch" aria-checked="${z}" data-toggle-phys="1" aria-label="现场物理安装已复核" ${te?"":"disabled"}>
                                <span class="lov-switch-thumb"></span>
                              </button>
                            </div>
                          </div>
                          <div style="display:flex; gap:6px; flex-wrap:wrap;">
                            <button class="pacom-btn" type="button" data-toggle-place="1">${q?"取消标点":"点图更新坐标"}</button>
                            <button class="pacom-btn" type="button" data-ftt-test="1" title="验证指令下发、回读并自动复位">单机自检</button>
                            <button class="pacom-btn pacom-btn--primary" type="submit" style="flex:1;" ${te?"":"disabled"}>保存绑定（v${D.version}）</button>
                          </div>
                        </form>`:""}
                  </aside>
                  <div class="pacom-splitter"></div>
                  <main class="pacom-right-pane">
                    <div class="pacom-canvas-stage" data-role="deploy-stage" style="cursor:${q?"crosshair":"default"};">
                      <div class="pacom-canvas-viewport">
                        <div class="pacom-plan-wrap" data-role="deploy-plan">
                          <img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 部署平面图" />
                          ${x.filter(a=>a.planPoint).map(a=>`
                              <button type="button" class="pacom-pin ${a.id===C?"is-selected":""} ${a.connectivity==="offline"?"pacom-pin--offline":""}"
                                style="left:${(a.planPoint.x*100).toFixed(2)}%; top:${(a.planPoint.y*100).toFixed(2)}%;"
                                data-pick-dev="${a.id}" title="${a.name}">
                                <span class="pacom-dot ${a.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                <span>${yt(a)}</span>
                              </button>`).join("")}
                        </div>
                      </div>
                      ${q&&D?`<div style="position:absolute; top:16px; left:16px; z-index:8;" class="pacom-badge pacom-badge--accent">标点模式：点击图纸任意位置更新「${D.name}」的 2D 坐标（不改动硬件绑定）</div>`:""}
                    </div>
                  </main>
                </section>`:n==="projects"?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">项目与楼宇归属配置</h2>
                      <span class="pacom-row-sub">共 ${S.projects.length} 个授权项目 · ${S.buildings.length} 栋楼宇</span>
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                      ${S.projects.map(a=>{const p=S.buildings.filter(j=>j.projectId===a.id);return`
                            <div class="pacom-card" style="padding:16px; gap:10px;">
                              <img src="${a.imageUrl??"./media/gzlab.jpg"}" alt="${a.name}" style="width:100%; height:132px; object-fit:cover; border-radius:10px;" />
                              <div>
                                <strong style="font-size:15px; font-weight:500;">${a.name}</strong>
                                <div class="pacom-row-sub">${a.city??""} ${a.address??""} · ${p.length} 栋楼宇</div>
                              </div>
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                ${p.map(j=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${j.name}</strong> · 地上 ${j.aboveFloors}F / ${j.areaSqm??"-"} m²</span>
                                      <span class="pacom-badge ${j.id===d.buildingId?"pacom-badge--accent":"pacom-badge--neutral"}">${j.id===d.buildingId?"含 E7F 试点":"对照楼宇"}</span>
                                    </div>`).join("")}
                              </div>
                            </div>`}).join("")}
                    </div>
                  </section>`:n==="floors"?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">${I?.name??"E栋"} 楼层与 2D 图纸清单</h2>
                        <span class="pacom-row-sub">共登记 ${h.length} 个楼层</span>
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
                              ${h.map(a=>{const p=a.id===d.floorId,j=l.scope.allowedFloorIds.includes(a.id);return`
                                    <tr>
                                      <td><strong>${I?.name??""} ${a.name}</strong></td>
                                      <td><span class="pacom-badge ${a.plan?"pacom-badge--online":"pacom-badge--neutral"}">${a.plan?"已上传 2D 图纸":"待上传图纸"}</span></td>
                                      <td>${p?`${x.length} 台设备 · ${o.length} 个功能区`:"-"}</td>
                                      <td><span class="pacom-badge ${j?"pacom-badge--accent":"pacom-badge--warning"}">${j?"已授权":"未授权"}</span></td>
                                      <td style="text-align:right;">
                                        ${p?'<button type="button" class="pacom-btn" data-dsec="floorplan">去标点与绑定 →</button>':'<span class="pacom-row-sub">暂未入网</span>'}
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
                              ${o.map(a=>{const p=x.filter(oe=>oe.logicalZoneId===a.id),j=p.filter(oe=>oe.physicalInstalled).length;return`
                                    <tr>
                                      <td><strong>${a.name.replace(/^7F\s*/,"")}</strong></td>
                                      <td>${p.length} 台</td>
                                      <td><span class="pacom-badge ${j===p.length?"pacom-badge--online":"pacom-badge--warning"}">${j} / ${p.length} 已复核</span></td>
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
                              ${De.map(a=>`
                                <tr>
                                  <td>
                                    <div style="font-weight:500;">${a.name}</div>
                                    <div class="pacom-row-sub">${a.size}</div>
                                  </td>
                                  <td><span class="pacom-badge pacom-badge--neutral">${a.category}</span></td>
                                  <td><span class="pacom-row-sub">${a.boundScope}</span></td>
                                  <td><span class="pacom-row-sub">${a.updatedAt}</span></td>
                                  <td style="text-align:right;">
                                    <button type="button" class="pacom-btn" data-preview-doc="${a.id}">查阅附件</button>
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
                          <div class="lov-kpi-value">${g}<span class="lov-kpi-unit">/ ${w.length}</span></div>
                          <span class="lov-kpi-delta">边缘网关在线监控</span>
                        </div>
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">数据采集健康度</span>
                          <div class="lov-kpi-value">${w.length>0?Math.round(g/w.length*100):100}<span class="lov-kpi-unit">%</span></div>
                          <span class="lov-kpi-delta">区分设备真故障与断流</span>
                        </div>
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">原始采集点</span>
                          <div class="lov-kpi-value">${G}<span class="lov-kpi-unit">点</span></div>
                          <span class="lov-kpi-delta">协议直采实时遥测</span>
                        </div>
                        <div class="lov-kpi-cell">
                          <span class="lov-kpi-label">衍生计算点</span>
                          <div class="lov-kpi-value">${c}<span class="lov-kpi-unit">点</span></div>
                          <span class="lov-kpi-delta">能碳与聚合虚拟点位</span>
                        </div>
                      </div>

                      ${L.length>0?`
                          <div class="lov-banner lov-banner--critical">
                            <div class="lov-banner-text">
                              <span class="lov-banner-title">检测到 ${L.length} 条采集通道通信降级（${L.map(a=>a.name).join("、")}）</span>
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
                                ${w.map(a=>{const p=gt[a.status]??{label:a.status,cls:"pacom-badge--neutral"},j=a.status==="connected"?98:a.status==="degraded"?62:0,oe=j>=75?"var(--pacom-status-online)":j>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",ce=H===a.id,re=ce?ft(a,x):[];return`
                                      <tr>
                                        <td><strong>${a.name}</strong></td>
                                        <td><span class="pacom-badge pacom-badge--neutral">${a.protocol.toUpperCase()}</span></td>
                                        <td><code style="font-size:12px;">${a.endpoint}</code></td>
                                        <td>采集 ${a.collectedPoints} / 计算 ${a.calculatedPoints}</td>
                                        <td style="min-width:130px;">
                                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                                            <span class="pacom-badge ${p.cls}">${p.label}</span>
                                            <span class="pacom-row-sub">${j}%</span>
                                          </div>
                                          <div class="lov-progress-track"><div class="lov-progress-fill" style="width:${j}%; background:${oe};"></div></div>
                                        </td>
                                        <td>
                                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                                            <button type="button" class="pacom-btn" data-expand-conn="${a.id}">${ce?"收起点位":"点位质量"}</button>
                                            <button type="button" class="pacom-btn" data-ping-conn="${a.id}">测试连通</button>
                                            <button type="button" class="pacom-btn pacom-btn--ghost" data-copy-endpoint="${a.id}" data-endpoint-val="${a.endpoint}">
                                              ${V===a.id?"已复制":"复制端点"}
                                            </button>
                                          </div>
                                        </td>
                                      </tr>
                                      ${ce?`
                                          <tr>
                                            <td colspan="6" style="background:var(--pacom-surface-secondary); padding:12px 16px;">
                                              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                                                <span style="font-size:12px; font-weight:500;">传感器级点位数据质量明细（${a.name}）</span>
                                                <span class="pacom-row-sub">在线正常 · 延迟 &gt;30 分钟（Delayed） · 断流 &gt;3×采集间隔（Offline）</span>
                                              </div>
                                              <div style="display:flex; flex-direction:column; gap:6px;">
                                                ${re.map(f=>`
                                                    <div class="pacom-receipt-item" style="background:var(--pacom-surface-primary);">
                                                      <span><strong>${f.deviceName}</strong> · ${f.pointName}</span>
                                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                                        <span class="pacom-row-sub">当前：${f.value} · 间隔 ${f.interval} · 上次上报 ${f.lastSeen}</span>
                                                        <span class="pacom-badge ${f.quality==="online"?"pacom-badge--online":f.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                                          ${f.quality==="online"?"在线正常":f.quality==="delayed"?"延迟 >30m":"断流 >3×间隔"}
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
                        ${W?`
                            <div class="lov-banner ${W.failed===0?"lov-banner--ok":"lov-banner--critical"}">
                              <div class="lov-banner-text">
                                <span class="lov-banner-title">批量功能自检（FTT）摘要 · ${W.ranAt}</span>
                                <span class="lov-banner-sub">共检测 ${W.total} 台：通过 ${W.passed} 台，异常 ${W.failed} 台${W.failedNames.length>0?`（${W.failedNames.join("、")}）`:"，全部设备已自动复位"}</span>
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
                                  ${x.map(a=>{const p=(a.logicalZoneId?ht[a.logicalZoneId]:void 0)??"E7F";return`
                                        <tr>
                                          <td>
                                            <div style="font-weight:500;">${a.name}</div>
                                            <div class="pacom-row-sub">${p} · v${a.version}</div>
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
                          <button type="button" class="lov-kpi-cell ${ae===0?"lov-gate-ok":"lov-gate-warn"}" data-dsec="floorplan" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">1. 图纸标点就绪</span>
                            <div class="lov-kpi-value">${b}<span class="lov-kpi-unit">/ ${x.length}</span></div>
                            <span class="lov-kpi-delta" style="display:inline-flex; align-items:center; gap:4px;">${ae===0?`${ie("check",12)} 全部设备已完成标点`:`尚差 ${ae} 台未标点 →`}</span>
                          </button>
                          <button type="button" class="lov-kpi-cell ${Y===0?"lov-gate-ok":"lov-gate-warn"}" data-dsec="inventory" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">2. 物理安装复核</span>
                            <div class="lov-kpi-value">${T}<span class="lov-kpi-unit">/ ${x.length}</span></div>
                            <span class="lov-kpi-delta" style="display:inline-flex; align-items:center; gap:4px; ${Y>0?"color:var(--pacom-status-warning);":""}">${Y===0?`${ie("check",12)} 现场复核全绿`:`待复核 ${Y} 台，点击查看 →`}</span>
                          </button>
                          <button type="button" class="lov-kpi-cell ${L.length===0?"lov-gate-ok":"lov-gate-warn"}" data-dsec="connections" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">3. 网关通道连通</span>
                            <div class="lov-kpi-value">${g}<span class="lov-kpi-unit">/ ${w.length}</span></div>
                            <span class="lov-kpi-delta" style="display:inline-flex; align-items:center; gap:4px; ${L.length>0?"color:var(--pacom-status-warning);":""}">${L.length===0?`${ie("check",12)} 全部通道健康`:`${L.length} 条通道降级，点击排查 →`}</span>
                          </button>
                          <button type="button" class="lov-kpi-cell ${W&&W.failed===0?"lov-gate-ok":"lov-gate-warn"}" data-batch-ftt="1" style="border:0; background:transparent; text-align:left; cursor:pointer;">
                            <span class="lov-kpi-label">4. 批量功能自检（FTT）</span>
                            <div class="lov-kpi-value">${W?W.passed:x.filter(a=>a.connectivity==="online").length}<span class="lov-kpi-unit">/ ${x.length}</span></div>
                            <span class="lov-kpi-delta" style="display:inline-flex; align-items:center; gap:4px; ${W&&W.failed>0?"color:var(--pacom-status-warning);":""}">${W?W.failed===0?`${ie("check",12)} 已于 ${W.ranAt} 全绿通过`:`${W.failed} 台未通过，点击复检 →`:"点击发起全层批量自检 →"}</span>
                          </button>
                        </div>

                        <section class="lov-section">
                          <div class="lov-section-head">
                            <div>
                              <h2 class="lov-section-title">E7F 交付冻结批次</h2>
                              ${Y>0||L.length>0?`<span class="pacom-row-sub">当前尚有 ${Y} 台待复核与 ${L.length} 条降级链路，仍可生成阶段快照</span>`:""}
                            </div>
                            <div style="display:flex; gap:8px; flex-wrap:wrap;">
                              <button type="button" class="pacom-btn" data-batch-ftt="1">一键全层批量自检（FTT）</button>
                              <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${te?"":"disabled"}>+ 新建交付冻结快照</button>
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
                                  ${N.map(a=>`
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
                                        <td><span class="pacom-badge pacom-badge--accent">${bt[a.status]??a.status}</span></td>
                                      </tr>`).join("")}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </section>`}
          </div>
        </div>
      </div>
    `,e.querySelectorAll("[data-dsec]").forEach(a=>{a.addEventListener("click",()=>{const p=a.dataset.dsec;p&&(n=p,_="",R="",A())})}),e.querySelectorAll("[data-dev-filter]").forEach(a=>{a.addEventListener("click",()=>{i=a.dataset.devFilter??"all",A()})}),e.querySelectorAll("[data-pick-dev]").forEach(a=>{a.addEventListener("click",()=>{C=a.dataset.pickDev??null,z=x.find(j=>j.id===C)?.physicalInstalled??!1,A()})}),e.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{z=!z,A()}),e.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{q=!q,A()}),e.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{D&&K(D)}),e.querySelectorAll("[data-ftt-dev]").forEach(a=>{a.addEventListener("click",()=>{const p=x.find(j=>j.id===a.dataset.fttDev);p&&K(p)})}),e.querySelectorAll("[data-batch-ftt]").forEach(a=>{a.addEventListener("click",()=>{Z()})}),e.querySelectorAll("[data-expand-conn]").forEach(a=>{a.addEventListener("click",()=>{const p=a.dataset.expandConn??null;H=H===p?null:p,A()})}),e.querySelectorAll("[data-preview-doc]").forEach(a=>{a.addEventListener("click",()=>{const p=De.find(j=>j.id===a.dataset.previewDoc);p&&(R="",_=`已调阅工程附件「${p.name}」（关联范围：${p.boundScope}，更新于 ${p.updatedAt}）。`,A())})}),e.querySelectorAll("[data-ping-conn]").forEach(a=>{a.addEventListener("click",()=>{const p=w.find(j=>j.id===a.dataset.pingConn);p&&(R="",p.status==="connected"?_=`连通性测试通过：「${p.name}」（${p.endpoint}）响应正常，延迟 18 ms。`:R=`连通性测试异常：「${p.name}」（${p.endpoint}）超时无应答，建议排查边缘网关端口与 RS485 链路。`,A())})}),e.querySelectorAll("[data-copy-endpoint]").forEach(a=>{a.addEventListener("click",async()=>{const p=a.dataset.endpointVal??"",j=a.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(p),V=j,A(),window.setTimeout(()=>{V=null,A()},1600)}catch{}})}),e.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async a=>{if(!q||!D)return;const p=a.currentTarget.getBoundingClientRect(),j=Math.max(.02,Math.min(.98,(a.clientX-p.left)/p.width)),oe=Math.max(.02,Math.min(.98,(a.clientY-p.top)/p.height));try{await t.updateDevicePlanPoint({deviceId:D.id,floorId:d.floorId,planVersion:D.planPoint?.planVersion??1,x:j,y:oe,expectedVersion:D.version}),q=!1,_=`已更新「${D.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await P()}catch(ce){R=ce instanceof Error?ce.message:String(ce),A()}}),e.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async a=>{if(a.preventDefault(),!D)return;const p=new FormData(a.currentTarget);try{await t.updateDeviceHardwareBinding({deviceId:D.id,gatewayId:D.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(p.get("protocol")),networkAddress:String(p.get("networkAddress")??""),portOrChannel:String(p.get("portOrChannel")??""),physicalInstalled:z,expectedVersion:D.version}),_=`已保存「${D.name}」的硬件绑定与物理安装复核状态。`,await P()}catch(j){R=j instanceof Error?j.message:String(j),A()}}),e.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const a=await t.freezeDeliveryBatch(d.floorId,"系统部署交付验收发起冻结");_=`已生成冻结批次 ${a.versionTag}（核验 ${a.verifiedCount}/${a.deviceCount}）。`,await P()}catch(a){R=a instanceof Error?a.message:String(a),A()}})}await P()}function Pe(e){if(e.connectivity==="offline")return`${e.name.includes("VAV")?"VAV-02":e.name.slice(0,6)} 离线`;if(e.category==="lighting"){const t=e.name.includes("702")?"702 照明":"主照明",l=Number(e.telemetry.dimming?.value??0);return l>0?`${t} ${l}%`:`${t} 关`}return e.category==="hvac"?`${e.name.includes("VAV")?"VAV-02":"FCU-01"} ${e.telemetry.setpoint?.value??24}°C`:e.category==="sensor"?`环境 ${e.telemetry.temp?.value??"23.4"}°C`:e.category==="gateway"?"主控网关":e.name.slice(0,6)}const Oe="pacom.web.e7f.leftWidth",Be={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},wt={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},xt=ie("chevron-down",12),St={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}};function $(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function kt(e){return e.level==="all-projects"?"all":e.level==="project"?`project:${e.projectId}`:e.level==="building"?`building:${e.projectId}:${e.buildingId}`:`floor:${e.projectId}:${e.buildingId}:${e.floorId}`}async function It(e,t,l){const s=await t.getSpatialTree(),n=t.mode==="demo",i=l.scope.canControlDevices,S=l.scope.canManageAlarms,x=l.scope.allowedZoneIds?.length?l.scope.allowedZoneIds:null;let w={level:"floor",projectId:d.projectId,buildingId:d.buildingId,floorId:d.floorId},N="devices",C="canvas",z="",q="all",V="all";const H=new URLSearchParams(window.location.hash.split("?")[1]??""),W=H.get("device"),_=H.get("zone");let R=W,P=!!W,K="control",Z="",A=!1,D="today",te="devices";const G=new Set,c=new Set;let g=[],L=[],b=[],T=null,Y=null,ae=1,E=0,I=0,h=Number(localStorage.getItem(Oe)||400);(!Number.isFinite(h)||h<320||h>680)&&(h=400);let o=null;function a(){return s.zones.filter(m=>!(w.level==="floor"&&m.floorId!==w.floorId||x&&!x.includes(m.id)))}async function p(m,F=!1){w=m,Y=null,V=F&&_?_:"all",A=!1,c.clear(),ae=1,E=0,I=0,o&&(o(),o=null);const r=w.level==="floor"?w.floorId:d.floorId;if(w.level==="floor")try{const[y,k,ee]=await Promise.all([t.getFloorDevices(w.floorId),t.listAlarms(w.floorId),t.listWorkOrders(w.floorId)]);g=y,L=k,b=ee,g.some(U=>U.id===R)?F&&W&&(P=!0):(R=g[1]?.id??g[0]?.id??null,P=!1),o=t.subscribeFloorEvents(w.floorId,async U=>{U.type==="control.receipt.updated"&&T?.batchId===U.batchId&&(T=await t.getControlBatch(U.batchId)),(U.type==="telemetry.updated"||U.type==="device.connectivity")&&w.level==="floor"&&(g=await t.getFloorDevices(w.floorId)),U.type==="alarm.changed"&&w.level==="floor"&&(L=await t.listAlarms(w.floorId)),re()})}catch(y){g=[],L=[],b=[],R=null,P=!1,Y=y instanceof Error?y.message:String(y)}else{P=!1;const[y,k,ee]=await Promise.all([t.getFloorDevices(r).catch(()=>[]),t.listAlarms(r).catch(()=>[]),t.listWorkOrders(r).catch(()=>[])]);g=y,L=k,b=ee}de()}function j(m){return m?s.zones.find(F=>F.id===m)?.name??m:"未分配逻辑区"}function oe(){const m=z.trim().toLowerCase();return g.filter(F=>V!=="all"&&F.logicalZoneId!==V||q!=="all"&&F.category!==q?!1:m?F.name.toLowerCase().includes(m)||F.id.toLowerCase().includes(m)||j(F.logicalZoneId).toLowerCase().includes(m):!0)}async function ce(m,F,r){!m.length||w.level!=="floor"||!i||(m.forEach(y=>G.add(y)),T=await t.dispatchControlBatch({floorId:w.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:m.map(y=>({deviceId:y,command:F,targetValue:r}))}),re())}function re(){const m=document.activeElement,F=m?.dataset?.role,r=m&&"selectionStart"in m?m.selectionStart:null,y=m&&"selectionEnd"in m?m.selectionEnd:null,k=e.querySelector(".pacom-list")?.scrollTop??0;de();const ee=e.querySelector(".pacom-list");if(ee&&(ee.scrollTop=k),F==="search"){const U=e.querySelector('[data-role="search"]');U&&(U.focus(),r!==null&&y!==null&&U.setSelectionRange(r,y))}}function f(){const m=e.querySelector('[data-role="canvas-viewport"]');m&&(m.style.transform=`translate(${E}px, ${I}px) scale(${ae})`);const F=e.querySelector('[data-role="canvas-hint"]');F&&(F.textContent=`缩放 ${Math.round(ae*100)}% · 滚轮缩放 · 拖动平移 · 双击复位`)}function O(){return w.level==="floor"?`building:${w.projectId}:${w.buildingId}`:w.level==="building"?`project:${w.projectId}`:w.level==="project"?"all":null}function u(){const m=kt(w),F=s.projects.map(k=>`<option value="project:${$(k.id)}" ${m===`project:${k.id}`?"selected":""}>项目 · ${$(k.name)}</option>`).join(""),r=s.buildings.map(k=>{const ee=`building:${k.projectId}:${k.id}`;return`<option value="${$(ee)}" ${m===ee?"selected":""}>楼宇 · 广实2号园 / ${$(k.name)}</option>`}).join(""),y=s.floors.map(k=>{const ee=l.scope.allowedFloorIds.includes(k.id),U=`floor:${d.projectId}:${k.buildingId}:${k.id}`;return`<option value="${$(U)}" ${m===U?"selected":""}>楼层 · 广实2号园 / E栋 / ${$(k.name)}${ee?"":"（未授权）"}</option>`}).join("");return`
      <option value="all" ${m==="all"?"selected":""}>全部项目（${s.projects.length} 个授权园区）</option>
      <optgroup label="项目级">${F}</optgroup>
      <optgroup label="楼宇级">${r}</optgroup>
      <optgroup label="楼层级">${y}</optgroup>
    `}function v(){if(w.level==="all-projects"){const F=g.filter(y=>y.connectivity==="online").length,r=L.filter(y=>y.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">授权项目总览（${s.projects.length}）</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">楼宇</span><strong>${s.buildings.length} 栋</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线</span><strong>${F}/${g.length}</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:var(--pacom-status-warning);">${r} 条</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${s.projects.map(y=>{const k=s.buildings.filter(ee=>ee.projectId===y.id).length;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="project:${$(y.id)}">
                  <img src="${$(y.imageUrl??"./media/gzlab.jpg")}" alt="${$(y.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${$(y.name)}</strong>
                    <span class="pacom-badge pacom-badge--accent">${k} 栋楼宇</span>
                  </div>
                  <div class="pacom-row-sub">${$(y.city??"")} · ${$(y.address??"")}</div>
                </article>`}).join("")}
        </div>
      `}const m=w;if(m.level==="project"){const F=s.projects.find(U=>U.id===m.projectId),r=s.buildings.filter(U=>U.projectId===m.projectId),y=g.filter(U=>U.connectivity==="online").length,k=g.length?Math.round(y/g.length*100):100,ee=L.filter(U=>U.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${$(F?.name??"园区")} · 楼宇绩效（${r.length}）</div>
          <div class="pacom-row-sub">${$(F?.city??"")} ${$(F?.address??"")}</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">在线率</span><strong>${k}%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:${ee>0?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${ee} 条</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>1,248 kWh</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${r.map(U=>{const M=U.id===d.buildingId;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="building:${$(U.projectId)}:${$(U.id)}">
                  <img src="${$(U.imageUrl??"./media/building-e.png")}" alt="${$(U.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${$(U.name)}</strong>
                    <span class="pacom-badge ${M?"pacom-badge--online":"pacom-badge--neutral"}">${M?`在线 ${k}% · 告警 ${ee}`:"运行平稳"}</span>
                  </div>
                  <div class="pacom-row-sub">地上 ${U.aboveFloors} 层 · 面积 ${U.areaSqm??"-"} m² · 舒适度达标 96%</div>
                </article>`}).join("")}
        </div>
      `}if(m.level==="building"){const F=s.buildings.find(M=>M.id===m.buildingId),r=s.floors.filter(M=>M.buildingId===m.buildingId),y=b.filter(M=>M.status!=="closed"&&M.status!=="resolved"),k=g.filter(M=>M.connectivity==="online").length,ee=g.length?Math.round(k/g.length*100):100,U=L.filter(M=>M.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${$(F?.name??"楼宇")} 运行概况</div>
          <div class="pacom-row-sub">地上 ${F?.aboveFloors??0} 层 · 面积 ${F?.areaSqm??"-"} m²</div>
          <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线率</span><strong>${ee}%（${k}/${g.length}）</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">舒适度达标</span><strong>96.2%</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">今日能耗</span><strong>418 kWh</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">告警 / 工单</span><strong style="color:var(--pacom-status-warning);">${U} 告警 · ${y.length} 工单</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:8px; padding:12px;">
          <div style="font-weight:500; font-size:13px;">楼层列表（点击进入 2D 平面控制）</div>
          ${r.length?r.map(M=>{const X=l.scope.allowedFloorIds.includes(M.id),se=M.id===d.floorId;return`
                      <div class="pacom-row" data-nav-scope="floor:${$(m.projectId)}:${$(m.buildingId)}:${$(M.id)}">
                        <div>
                          <div class="pacom-row-title">${$(F?.name??"")} ${$(M.name)}</div>
                          <div class="pacom-row-sub">${M.plan?"2D 平面图就绪":"暂未上传图纸"}${se&&U>0?` · ${U} 条待处理告警`:""}</div>
                        </div>
                        <span class="pacom-badge ${X?"pacom-badge--online":"pacom-badge--warning"}">${X?"进入楼层":"无权限"}</span>
                      </div>`}).join(""):'<div class="pacom-row-sub">该楼宇暂未配置试点楼层。</div>'}
        </div>
      `}if(N==="devices"){const F=oe(),r=a(),y=Array.from(c);return`
        <div class="pacom-pane-toolbar">
          ${x?`<div class="pacom-info-banner">我的区域视图：仅显示当前账号获授权的 ${x.length} 个功能区及设备。</div>`:""}
          <div class="pacom-search-row">
            <input class="pacom-input" name="deviceSearch" data-role="search" placeholder="搜索设备名 / ID / 区域…" value="${$(z)}" aria-label="搜索楼层设备" />
            <select class="pacom-select" name="deviceCategory" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${q==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${q==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${q==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${q==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${q==="gateway"?"selected":""}>网关</option>
            </select>
          </div>
          ${r.length>0&&!Y?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${V==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${r.map(k=>`<button type="button" class="pacom-zone-pill ${V===k.id?"is-active":""}" data-filter-zone="${$(k.id)}">${$(k.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; color:var(--pacom-text-secondary);">
            <span>当前可见 ${F.length} 台设备</span>
            <span>${i?`已勾选 ${y.length} 台`:"只读模式"}</span>
          </div>
        </div>
        <div class="pacom-list">
          ${Y?`<div class="pacom-alert-banner">${$(Y)}</div>`:F.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">没有匹配的设备</div>':F.map(k=>{const ee=k.id===R&&P,U=c.has(k.id),M=k.connectivity==="offline",X=M?"pacom-dot--critical":"pacom-dot--online",se=M?"离线 · 无遥测":k.category==="lighting"?`亮度 ${k.telemetry.dimming?.value??"--"}%`:k.category==="hvac"?`设定 ${k.telemetry.setpoint?.value??"--"}°C`:k.category==="sensor"?`${k.telemetry.temp?.value??"--"}°C · CO₂ ${k.telemetry.co2?.value??"--"}`:k.hardwareBinding?.networkAddress??"未绑定";return`
                        <div class="pacom-row ${ee?"is-selected":""}" data-select-device="${$(k.id)}">
                          <div class="pacom-row-main">
                            ${i?`<input type="checkbox" name="devCheck-${$(k.id)}" data-check-device="${$(k.id)}" ${U?"checked":""} style="margin-top:3px;" aria-label="勾选 ${$(k.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title">${$(k.name)}</div>
                              <div class="pacom-row-sub">${$(j(k.logicalZoneId))} · ${$(Be[k.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${M?"pacom-badge--critical":"pacom-badge--online"}">
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
      `}if(N==="zones"){const F=a(),r={"zone-e7f-lab-east":{temp:"23.2°C",occ:"有人 74%"},"zone-e7f-office-west":{temp:"24.1°C",occ:"有人 52%"},"zone-e7f-meeting-702":{temp:"22.8°C",occ:"会议中"},"zone-e7f-corridor":{temp:"23.9°C",occ:"通行区"}};return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">E7F 功能区快控（${F.length}）</div>
          <div class="pacom-row-sub">点击卡片同步高亮右侧平面图热区，支持按区域一键批量控制。</div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${F.map(y=>{const k=g.filter(se=>se.logicalZoneId===y.id),ee=k.filter(se=>se.connectivity==="online").length,U=k.filter(se=>se.category==="lighting"||se.category==="hvac").length,M=V===y.id,X=r[y.id]??{temp:"23.4°C",occ:"正常"};return`
                <div class="pacom-control-box" style="background:${M?"var(--pacom-surface-card)":"#fff"}; cursor:pointer; ${M?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}" data-filter-zone="${$(M?"all":y.id)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <strong style="font-size:14px; font-weight:500;">${$(y.name.replace(/^7F\s*/,""))}</strong>
                    <span class="pacom-badge pacom-badge--online">在线 ${ee}/${k.length}</span>
                  </div>
                  <div class="pacom-row-sub">实时温度 ${X.temp} · 占用 ${X.occ}</div>
                  ${U>0?`
                      <div style="display:flex; gap:6px; margin-top:2px;">
                        <button type="button" class="pacom-btn" data-zone-power="${$(y.id)}" data-zone-val="true" ${i?"":"disabled"}>区域全开</button>
                        <button type="button" class="pacom-btn pacom-btn--primary" data-zone-power="${$(y.id)}" data-zone-val="false" ${i?"":"disabled"}>区域全关</button>
                      </div>`:'<div class="pacom-row-sub">该区域为弱电/网关基础区</div>'}
                </div>`}).join("")}
        </div>
      `}return`
      <div class="pacom-pane-toolbar">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-weight:500;">本层告警快览（${L.length}）</span>
          <button type="button" class="pacom-btn pacom-btn--ghost" style="height:26px; padding:0 8px; font-size:12px;" data-go-alarms="1">前往告警中心 →</button>
        </div>
      </div>
      <div class="pacom-list" style="gap:8px; padding:12px;">
        ${L.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">当前楼层无活跃告警</div>':L.map(F=>`
                  <div class="pacom-control-box" style="background:#fff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                      <strong style="font-size:13px;">${$(F.title)}</strong>
                      <span class="pacom-badge ${F.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${F.status==="active"?"待处理":"已确认"}</span>
                    </div>
                    <div class="pacom-row-sub">${$(F.message)}</div>
                    <div style="display:flex; gap:6px; flex-wrap:wrap;">
                      <button type="button" class="pacom-btn" data-locate-device="${$(F.deviceId)}">定位设备</button>
                      ${F.status==="active"?`<button type="button" class="pacom-btn pacom-btn--primary" data-ack-alarm="${$(F.id)}" ${S?"":'disabled title="当前角色无告警处理权限"'}>快速确认</button>`:""}
                    </div>
                  </div>`).join("")}
      </div>
    `}function B(){const m=w,F=g.filter(M=>M.connectivity==="online").length,r=g.length?Math.round(F/g.length*100):100,y=L.filter(M=>M.status==="active").length;if(m.level==="all-projects"||m.level==="project"){const M=m.level==="project"?s.projects.find(se=>se.id===m.projectId):s.projects[0],X=s.buildings.filter(se=>!M||se.projectId===M.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:24px; cursor:default;">
          <div style="position:relative; width:min(760px, 94%); border-radius:16px; overflow:hidden; box-shadow:0 12px 32px rgba(15,23,42,0.14); background:#fff;">
            <img src="${$(M?.imageUrl??"./media/gzlab.jpg")}" alt="园区俯瞰" style="width:100%; height:440px; object-fit:cover; display:block;" />
            ${m.level==="all-projects"?s.projects.map((se,Q)=>`
                      <button type="button" class="pacom-pin is-selected" style="left:${Q===0?48:26}%; top:${Q===0?52:34}%;" data-nav-scope="project:${$(se.id)}">
                        <span class="pacom-dot pacom-dot--online"></span>
                        <span>${$(se.name)}</span>
                      </button>`).join(""):X.map((se,Q)=>{const ge=se.id===d.buildingId;return`
                        <button type="button" class="pacom-pin ${ge?"is-selected":""}" style="left:${Q===0?56:38}%; top:${Q===0?44:62}%;" data-nav-scope="building:${$(se.projectId)}:${$(se.id)}">
                          <span class="pacom-dot ${ge&&y>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                          <span>${$(se.name)} · ${ge?`在线 ${r}% · 告警 ${y}`:"运行平稳"}</span>
                        </button>`}).join("")}
          </div>
        </div>
      `}if(m.level==="building"){const M=s.buildings.find(Q=>Q.id===m.buildingId),X=s.floors.filter(Q=>Q.buildingId===m.buildingId),se=X.find(Q=>Q.id===d.floorId)??X[0];return`
        ${X.length?`
            <nav class="pacom-floor-rail" aria-label="整栋楼层选择轨道">
              <button type="button" class="pacom-floor-btn is-active" title="整栋视图">栋</button>
              ${X.map(Q=>{const ge=l.scope.allowedFloorIds.includes(Q.id),fe=Q.id===d.floorId&&y>0;return`<button type="button" class="pacom-floor-btn ${ge?"":"is-locked"}" data-nav-scope="floor:${$(m.projectId)}:${$(m.buildingId)}:${$(Q.id)}" title="${$(Q.name)}${fe?`（${y} 条待处理告警）`:""}">${$(Q.name.replace("F",""))}${fe?'<span class="pacom-floor-alert-dot"></span>':""}</button>`}).join("")}
            </nav>`:""}
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:24px; cursor:default;">
          <img class="pacom-plan-img" src="${$(M?.imageUrl??"./media/building-e.png")}" alt="${$(M?.name??"楼宇")} 整栋实景图" style="max-height:72vh;" />
        </div>
        ${se?`<div style="position:absolute; right:16px; bottom:16px; z-index:6;">
                <button type="button" class="pacom-btn pacom-btn--primary" data-nav-scope="floor:${$(m.projectId)}:${$(m.buildingId)}:${$(se.id)}">进入 ${$(M?.name??"")} ${$(se.name)} 2D 控图 →</button>
              </div>`:""}
      `}const k=s.floors.find(M=>M.id===m.floorId),ee=s.floors.filter(M=>M.buildingId===m.buildingId),U=a();return`
      <nav class="pacom-floor-rail" aria-label="楼层选择轨道">
        <button type="button" class="pacom-floor-btn" data-nav-scope="building:${$(m.projectId)}:${$(m.buildingId)}" title="返回整栋楼宇">栋</button>
        ${ee.map(M=>{const X=l.scope.allowedFloorIds.includes(M.id),se=M.id===d.floorId&&y>0;return`<button type="button" class="pacom-floor-btn ${M.id===m.floorId?"is-active":""} ${X?"":"is-locked"}"
              data-nav-scope="floor:${$(m.projectId)}:${$(m.buildingId)}:${$(M.id)}" title="${$(M.name)}${X?se?` · ${y} 条告警`:"":"（无权限）"}">
              ${$(M.name.replace("F",""))}
              ${se?'<span class="pacom-floor-alert-dot"></span>':""}
            </button>`}).join("")}
      </nav>

      <div class="pacom-canvas-tools" aria-label="画布工具">
        <button type="button" class="pacom-tool-btn" data-zoom="reset" title="复位视图" aria-label="复位视图">${ie("rotate-ccw",16)}</button>
        <div class="pacom-tool-divider" aria-hidden="true"></div>
        <button type="button" class="pacom-tool-btn" data-zoom="in" title="放大" aria-label="放大">${ie("plus",16)}</button>
        <button type="button" class="pacom-tool-btn" data-zoom="out" title="缩小" aria-label="缩小">${ie("minus",16)}</button>
      </div>

      ${Y?"":`
        <div class="lov-layer-bar" role="group" aria-label="平面图图层切换">
          <button type="button" class="lov-layer-btn" aria-pressed="${te==="devices"}" data-canvas-layer="devices">设备点位</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${te==="temp"}" data-canvas-layer="temp">温度热区</button>
          <button type="button" class="lov-layer-btn" aria-pressed="${te==="occupancy"}" data-canvas-layer="occupancy">占用状态</button>
        </div>`}

      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${Y?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${$(Y)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${E}px, ${I}px) scale(${ae});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${$(k?.plan?.imageUrl??"./media/7F.webp")}" alt="E栋 ${$(k?.name??"7F")} 平面图" />
                  ${U.map((M,X)=>{const se=St[M.id];if(!se)return"";const Q=V===M.id,ge=["23.2°C","24.6°C","22.8°C","23.9°C"],fe=["有人 74%","会议中","有人 52%","空闲"],Se=te==="temp"?` · ${ge[X%ge.length]}`:te==="occupancy"?` · ${fe[X%fe.length]}`:"",ne=te==="temp"?"background:rgba(245,158,11,0.16); border-color:rgba(217,119,6,0.45);":te==="occupancy"?"background:rgba(46,148,97,0.14); border-color:rgba(46,148,97,0.42);":"";return`
                        <button type="button" class="pacom-zone-hotspot ${Q?"is-active":""}"
                          style="left:${se.left}%; top:${se.top}%; width:${se.width}%; height:${se.height}%; ${Q?"":ne}"
                          data-filter-zone="${$(Q?"all":M.id)}"
                          title="${$(M.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${$(M.name.replace(/^7F\s*/,""))}${Se}</span>
                        </button>`}).join("")}
                  ${g.filter(M=>M.planPoint).map(M=>{const X=L.some(Se=>Se.deviceId===M.id&&Se.status==="active"),se=N==="alarms",Q=V!=="all"&&M.logicalZoneId!==V||se&&!X,ge=se&&X?"background:var(--pacom-status-critical);":"",fe=M.category==="gateway"?Math.min(92,M.planPoint.y*100+5.5):M.planPoint.y*100;return`
                        <button type="button" class="pacom-pin ${M.id===R&&P?"is-selected":""} ${M.connectivity==="offline"?"pacom-pin--offline":""} ${Q?"pacom-pin--dimmed":""}"
                          style="left:${(M.planPoint.x*100).toFixed(2)}%; top:${fe.toFixed(2)}%; ${ge}"
                          data-pin-device="${$(M.id)}" title="${$(M.name)}">
                          <span class="pacom-dot ${X?"pacom-dot--critical":M.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${$(Pe(M))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>

      ${Y?"":`<div class="pacom-canvas-hint" data-role="canvas-hint">缩放 ${Math.round(ae*100)}% · 滚轮缩放 · 拖动平移 · 双击复位</div>`}
      ${J()}
    `}function J(){if(w.level!=="floor"||!P)return"";const m=g.find(Q=>Q.id===R);if(!m)return"";const F=m.category==="lighting",r=m.category==="hvac",y=Number(m.telemetry.dimming?.value??50),k=Number(m.telemetry.setpoint?.value??24),ee=G.has(m.id),U=L.filter(Q=>Q.deviceId===m.id&&Q.status==="active"),M=b.filter(Q=>Q.deviceId===m.id&&Q.status!=="closed"),X=r?[{name:"E7F_暖通空调与末端竣工图_v2.3.pdf",tag:"竣工图纸"},{name:"FCU-01_风机盘管维保与排障手册.pdf",tag:"维保手册"}]:F?[{name:"E7F_强电照明与DALI回路拓扑.pdf",tag:"回路图纸"}]:[{name:"E7F_BACnet_Modbus_点位映射表.xlsx",tag:"点位台账"}],se=F?[{label:"当前开关",value:y>0?"开启":"关闭"},{label:"当前亮度",value:`${y}%`},{label:"实时功率",value:y>0?`${Math.round(y*1.4)} W`:"0 W"},{label:"运行模式",value:ee?"人工覆盖":"自动策略"}]:r?[{label:"室内温度",value:`${m.telemetry.temp?.value??"23.8"}°C`},{label:"设定温度",value:`${k.toFixed(1)}°C`},{label:"运行工况",value:m.connectivity==="online"?"制冷运行":"通信离线"},{label:"控制模式",value:ee?"人工覆盖":"自动策略"}]:m.category==="sensor"?[{label:"实时温度",value:`${m.telemetry.temp?.value??"23.4"}°C`},{label:"相对湿度",value:`${m.telemetry.humidity?.value??"52"}%`},{label:"CO₂ 浓度",value:`${m.telemetry.co2?.value??"485"} ppm`},{label:"采集状态",value:m.connectivity==="online"?"正常上报":"断流异常"}]:[{label:"通信状态",value:m.connectivity==="online"?"已连通":"离线"},{label:"通信协议",value:m.hardwareBinding?.protocol.toUpperCase()??"BACNET"},{label:"网络地址",value:m.hardwareBinding?.networkAddress??"-"},{label:"心跳延迟",value:m.connectivity==="online"?"18 ms":"--"}];return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${$(m.name)}</h2>
            <div class="pacom-row-sub">${$(j(m.logicalZoneId))} · ${$(Be[m.category])}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${m.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${m.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              ${ie("x",16)}
            </button>
          </div>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备档案分页" style="width:100%; justify-content:space-between;">
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${K==="control"}" data-drawer-tab="control">控制与工况</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${K==="trend"}" data-drawer-tab="trend">趋势与告警${U.length>0?` (${U.length})`:""}</button>
          <button type="button" class="pacom-tab" style="flex:1; justify-content:center; font-size:12px;" role="tab" aria-selected="${K==="profile"}" data-drawer-tab="profile">档案与图纸</button>
        </div>

        ${K==="control"?`
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
              ${se.map(Q=>`
                  <div class="pacom-control-box" style="padding:8px 10px; gap:2px;">
                    <span class="pacom-row-sub">${Q.label}</span>
                    <strong style="font-size:13px; font-weight:500;">${$(Q.value)}</strong>
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
                    <text x="247" y="25" text-anchor="middle" font-size="10" fill="var(--pacom-text-primary)">送风 ${k.toFixed(1)}°C</text>
                  </svg>
                </div>`:""}

            ${F||r?`
                <div class="pacom-control-box">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                    ${ee&&i?`<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 8px; font-size:12px;" data-release-override="${$(m.id)}">恢复自动策略</button>`:i?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
                  </div>
                  ${m.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
                  ${F?`
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
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${k-.5}" ${i?"":"disabled"}>-0.5°C</button>
                        <strong>${k.toFixed(1)}°C</strong>
                        <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${k+.5}" ${i?"":"disabled"}>+0.5°C</button>
                      </div>`}
                </div>`:""}

            ${T?`
                <div class="pacom-control-box">
                  <div style="font-size:12px; font-weight:500;">最近批次：<code>${$(T.batchId)}</code></div>
                  <div class="pacom-receipt-list">
                    ${T.receipts.map(Q=>{const ge=wt[Q.status]??{text:Q.status,badge:"pacom-badge--neutral"};return`
                          <div class="pacom-receipt-item">
                            <div>
                              <div><strong>${$(Q.deviceId)}</strong> · ${$(Q.command)} → ${$(Q.targetValue)}</div>
                              ${Q.errorMessage?`<div style="color:var(--pacom-status-critical);">${$(Q.errorMessage)}</div>`:""}
                            </div>
                            <span class="pacom-badge ${ge.badge}">${ge.text}</span>
                          </div>`}).join("")}
                  </div>
                </div>`:""}`:K==="trend"?`
              <div class="pacom-control-box" style="padding:10px 12px; gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="pacom-row-sub">近 24 小时趋势（${F?"亮度 %":r?"温度 °C":m.category==="sensor"?"室内温度 °C":"链路延迟 ms"}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-timeseries="${$(m.id)}">查看完整时序 →</button>
                </div>
                <svg viewBox="0 0 280 48" style="width:100%; height:48px; display:block;">
                  <line x1="0" y1="24" x2="280" y2="24" stroke="oklch(82% 0 107)" stroke-dasharray="3 3" />
                  <polyline fill="none" stroke="${m.connectivity==="online"?"var(--pacom-accent-solid)":"var(--pacom-status-offline)"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${F?"0,38 40,38 80,16 120,12 160,14 200,20 240,14 280,16":r?"0,28 40,30 80,25 120,20 160,18 200,22 240,24 280,20":"0,24 40,25 80,23 120,21 160,20 200,22 240,21 280,22"}" />
                </svg>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:12px; font-weight:500;">本机活跃告警与未结工单</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost" style="height:22px; padding:0 6px; font-size:12px;" data-go-alarms="1">告警中心 →</button>
                </div>
                ${U.length===0&&M.length===0?'<div class="pacom-row-sub">当前设备运行平稳，无未处理告警或工单。</div>':`${U.map(Q=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${$(Q.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${$(Q.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去诊断 →</span>
                          </button>`).join("")}${M.map(Q=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-wo-id="${$(Q.id)}">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${$(Q.title)}</span>
                            <span class="pacom-badge pacom-badge--accent">查看工单 →</span>
                          </button>`).join("")}`}
              </div>`:`
              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">上下游拓扑关系（Twin Relationships）</span>
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; font-size:12px;">
                  <span class="pacom-badge pacom-badge--neutral">E7F 主控网关-01</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--accent">${$(Pe(m))}</span>
                  <span class="pacom-row-sub">→</span>
                  <span class="pacom-badge pacom-badge--online">${$(j(m.logicalZoneId).replace(/^7F\s*/,""))}</span>
                </div>
              </div>

              <div class="pacom-control-box" style="gap:6px;">
                <span style="font-size:12px; font-weight:500;">关联竣工图纸与设备手册</span>
                ${Z?`<div class="pacom-info-banner">${$(Z)}</div>`:""}
                ${X.map(Q=>`
                    <div class="pacom-receipt-item">
                      <span style="font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${$(Q.name)}">${$(Q.name)}</span>
                      <button type="button" class="pacom-btn" style="height:24px; padding:0 8px; font-size:11px;" data-drawer-doc="${$(Q.name)}">查阅</button>
                    </div>`).join("")}
              </div>

              <details class="lov-tech-details" open>
                <summary><span>技术标识与硬件绑定</span>${ie("chevron-down",12)}</summary>
                <div class="pacom-kv-grid">
                  <span class="pacom-kv-label">设备编号</span><span><code>${$(m.id)}</code> · v${m.version}</span>
                  <span class="pacom-kv-label">图上点位</span><span>${m.planPoint?`x=${m.planPoint.x.toFixed(2)}, y=${m.planPoint.y.toFixed(2)} (图 v${m.planPoint.planVersion})`:"未标点"}</span>
                  <span class="pacom-kv-label">物理安装</span><span>${m.physicalInstalled?"现场已确认":"待现场复核"}</span>
                  <span class="pacom-kv-label">硬件绑定</span><span>${m.hardwareBinding?`${m.hardwareBinding.protocol.toUpperCase()} · ${m.hardwareBinding.networkAddress}`:"未绑定"}</span>
                </div>
              </details>`}
      </aside>
    `}function le(m){if(m==="all")return{level:"all-projects"};const F=m.split(":");return F[0]==="project"&&F[1]?{level:"project",projectId:F[1]}:F[0]==="building"&&F[1]&&F[2]?{level:"building",projectId:F[1],buildingId:F[2]}:F[0]==="floor"&&F[1]&&F[2]&&F[3]?{level:"floor",projectId:F[1],buildingId:F[2],floorId:F[3]}:{level:"all-projects"}}function ue(){const m=g.filter(ne=>ne.connectivity==="online").length,F=g.length?Math.round(m/g.length*100):100,r=L.filter(ne=>ne.status==="active").length,y=b.filter(ne=>ne.status!=="closed"&&ne.status!=="resolved").length,k=w,ee=k.level==="building",U=k.level==="project"?s.projects.find(ne=>ne.id===k.projectId):s.projects[0],M=k.level==="building"?s.buildings.find(ne=>ne.id===k.buildingId):null,X=k.level==="building"?M?.name??"E栋":k.level==="project"?U?.name??"广实2号园":`全部授权项目（${s.projects.length}）`,se=k.level==="building"?`地上 ${M?.aboveFloors??0} 层 · 建筑面积 ${M?.areaSqm??"-"} m²`:`${U?.city??"广州"} ${U?.address??""} · 共 ${s.buildings.length} 栋楼宇`,Q=ee?"418 kWh":"1,248 kWh",ge=Math.round(96.2*.45+93.6*.35+F*.2),fe=L.filter(ne=>ne.status==="active").slice(0,2),Se=k.level==="building"?s.floors.filter(ne=>ne.buildingId===k.buildingId).map(ne=>{const he=ne.id===d.floorId,Ie=l.scope.allowedFloorIds.includes(ne.id),we=!!ne.plan&&Ie;return`
              <div class="pacom-row" ${we?`data-nav-scope="floor:${$(k.projectId)}:${$(k.buildingId)}:${$(ne.id)}"`:'style="opacity:0.72; cursor:default;"'}>
                <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                  <span class="pacom-dot ${he&&r>0?"pacom-dot--warning":we?"pacom-dot--online":"pacom-dot--offline"}"></span>
                  <div>
                    <div class="pacom-row-title">${$(M?.name??"")} ${$(ne.name)}</div>
                    <div class="pacom-row-sub">${ne.plan?"2D 平面控图就绪":"暂未上传平面图纸"}${he&&r>0?` · ${r} 条待处理告警`:""}</div>
                  </div>
                </div>
                <span class="pacom-badge ${we?"pacom-badge--online":"pacom-badge--neutral"}">${we?"进入平面图 →":Ie?"待部署":"未授权"}</span>
              </div>`}).join(""):s.buildings.filter(ne=>k.level!=="project"||ne.projectId===k.projectId).map(ne=>{const he=ne.id===d.buildingId;return`
              <div class="pacom-row" data-nav-scope="building:${$(ne.projectId)}:${$(ne.id)}">
                <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                  <span class="pacom-dot ${he&&r>0?"pacom-dot--warning":"pacom-dot--online"}"></span>
                  <div>
                    <div class="pacom-row-title">${$(ne.name)}</div>
                    <div class="pacom-row-sub">地上 ${ne.aboveFloors} 层 · ${ne.areaSqm??"-"} m² · 舒适度 96.2%</div>
                  </div>
                </div>
                <span class="pacom-badge ${he?"pacom-badge--accent":"pacom-badge--neutral"}">${he?`在线 ${F}% · 告警 ${r}`:"运行平稳"}</span>
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
                <div class="lov-kpi-value">${Q}</div>
                <svg viewBox="0 0 100 24" style="width:96px; height:22px; flex-shrink:0;"><polyline fill="none" stroke="var(--pacom-accent-solid)" stroke-width="1.8" stroke-linecap="round" points="2,8 20,10 38,13 56,11 74,16 98,18" /></svg>
              </div>
              <span class="lov-kpi-delta">较基线 -6.4% · 节能良好</span>
            </button>
            <button type="button" class="lov-kpi-cell" data-go-analysis="health" style="border:0; background:transparent; text-align:left; cursor:pointer;">
              <span class="lov-kpi-label">设备在线率</span>
              <div style="display:flex; align-items:flex-end; justify-content:space-between; gap:8px;">
                <div class="lov-kpi-value">${F}<span class="lov-kpi-unit">%（${m}/${g.length}）</span></div>
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
                      ${fe.map(ne=>`
                          <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarms="1">
                            <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${$(ne.title)}</span>
                            <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                          </button>`).join("")}
                    </div>`:""}
              <div>
                <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--pacom-text-secondary); margin-bottom:4px;">
                  <span>近 7 天每日告警触发</span><span>今日 ${r} 条</span>
                </div>
                <svg viewBox="0 0 210 56" style="width:100%; height:56px; display:block;">
                  ${[2,1,3,2,1,2,Math.max(1,r)].map((ne,he)=>{const Ie=["一","二","三","四","五","六","今"],we=ne*9;return`<rect x="${he*30+6}" y="${38-we}" width="18" height="${we}" rx="4" fill="${he===6?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}" opacity="0.82" /><text x="${he*30+15}" y="52" text-anchor="middle" font-size="9" fill="var(--pacom-text-secondary)">${Ie[he]}</text>`}).join("")}
                </svg>
              </div>
            </div>

            <div class="pacom-card" style="padding:16px 18px; gap:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <strong style="font-size:14px; font-weight:500;">${ee?"楼层健康与告警导览":"楼宇健康与告警导览"}</strong>
                <span class="pacom-row-sub">点击已部署项下钻</span>
              </div>
              <div style="display:flex; flex-direction:column; gap:4px;">
                ${Se}
              </div>
            </div>
          </div>
        </div>

        <main class="pacom-right-pane">
          ${B()}
        </main>
      </section>
    `}function $e(m,F,r){if(!A)return"";const y=Math.max(0,g.length-m),k=D==="week",ee=L.filter(U=>U.status==="active").slice(0,2);return`
      <div class="lov-briefing-pop" style="width:430px;" role="dialog" aria-label="运行简报" data-role="briefing-pop">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <div>
            <strong style="font-size:14px; font-weight:500;">E7F ${k?"本周运行汇总简报":"今日值班晨报"}</strong>
            <div class="pacom-row-sub">广州 26°C 多云 · 湿度 64% · 舒适度达标 96.2%</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <div class="pacom-tabs">
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${!k}" data-briefing-period="today">今日值班</button>
              <button type="button" class="pacom-tab" style="height:24px; padding:0 8px; font-size:12px;" aria-selected="${k}" data-briefing-period="week">本周汇总</button>
            </div>
            <button type="button" class="pacom-drawer-close" data-toggle-briefing="1" aria-label="关闭简报">${ie("x",16)}</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px;">
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">${k?"本周累计节能":"昨日能耗偏差"}</span><strong style="color:var(--pacom-status-online);">${k?"-7.1%（省 ¥342）":"-6.4%（省 ¥48）"}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">均温 / 在线率</span><strong>${$(r)}°C · ${m}/${g.length}</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">待处理告警 / 离线</span><strong style="color:var(--pacom-status-warning);">${F} 告警 · ${y} 离线</strong></div>
          <div class="pacom-control-box" style="padding:8px 10px; gap:2px;"><span class="pacom-row-sub">人工覆盖 / 未结工单</span><strong>${Math.max(1,G.size)} 覆盖 · ${b.filter(U=>U.status!=="closed").length} 工单</strong></div>
        </div>
        ${ee.length>0?`<div style="display:flex; flex-direction:column; gap:5px;">
                <span class="pacom-row-sub">优先关注事项（点击直达）</span>
                ${ee.map(U=>`
                    <button type="button" class="pacom-receipt-item" style="border:0; width:100%; text-align:left; cursor:pointer;" data-go-alarm-id="${$(U.id)}">
                      <span style="font-size:12px; font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${$(U.title)}</span>
                      <span class="pacom-badge pacom-badge--warning">去处置 →</span>
                    </button>`).join("")}
              </div>`:""}
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <button type="button" class="pacom-btn" data-export-briefing="1">导出简报 (.txt)</button>
          <button type="button" class="pacom-btn pacom-btn--primary" data-go-alarms="1">进入告警中心 →</button>
        </div>
      </div>
    `}function de(){const m=L.filter(k=>k.status==="active").length,F=g.filter(k=>k.connectivity==="online").length,r=O(),y=g.find(k=>k.category==="sensor")?.telemetry.temp?.value??"23.4";e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:10px; min-width:0; flex:1;">
              <h1 class="pacom-title" style="flex-shrink:0;">空间总览</h1>
              ${r?`<button type="button" class="lov-icon-btn" data-nav-scope="${$(r)}" title="返回上一空间层级" aria-label="返回上一空间层级">${ie("arrow-left",14)}</button>`:""}
              <div class="pacom-scope-pill" style="width:min(268px, 32vw); flex-shrink:1;" title="项目 / 楼宇 / 楼层空间范围切换">
                <select name="homeScope" data-role="scope-select" aria-label="选择查看范围">
                  ${u()}
                </select>
                <span class="pacom-scope-chevron">${xt}</span>
              </div>
              ${w.level==="floor"?`
                  <div class="pacom-tabs" role="tablist" style="flex-shrink:0;">
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${N==="devices"}" data-tab="devices">设备</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${N==="zones"}" data-tab="zones">区域</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${N==="alarms"}" data-tab="alarms">
                      告警 ${m>0?`<span class="pacom-badge pacom-badge--warning">${m}</span>`:""}
                    </button>
                  </div>`:""}
            </div>

            <div class="pacom-header-meta" style="flex-shrink:0;">
              ${Y?n?'<span class="pacom-badge pacom-badge--neutral"><span class="pacom-dot pacom-dot--offline"></span>演示模式</span>':'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>':`<button type="button" class="pacom-badge pacom-badge--online" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-briefing="1" title="点击查看今日运行简报">在线 ${F}/${g.length} · ${$(y)}°C · 简报 ${ie("chevron-down",12)}</button>`}
              <div class="pacom-tabs pacom-mobile-view-switch" role="group" aria-label="窄屏视图切换">
                <button type="button" class="pacom-tab" aria-selected="${C==="list"}" data-mobile-pane-btn="list">列表</button>
                <button type="button" class="pacom-tab" aria-selected="${C==="canvas"}" data-mobile-pane-btn="canvas">平面图</button>
              </div>
            </div>
          </div>
        </header>

        ${$e(F,m,y)}

        ${w.level==="floor"?`
            <section class="pacom-split" data-mobile-pane="${C}">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:${h}px;">
                ${v()}
              </aside>
              <div class="pacom-splitter" role="separator" tabindex="0" aria-orientation="vertical" aria-label="调整左右栏宽度" data-role="splitter"></div>
              <main class="pacom-right-pane">
                ${B()}
              </main>
            </section>`:ue()}
      </div>
    `,be()}function be(){e.querySelector('[data-role="scope-select"]')?.addEventListener("change",r=>{p(le(r.currentTarget.value))}),e.querySelectorAll("[data-nav-scope]").forEach(r=>{r.addEventListener("click",()=>{r.dataset.navScope&&p(le(r.dataset.navScope))})}),e.querySelectorAll("[data-tab]").forEach(r=>{r.addEventListener("click",()=>{N=r.dataset.tab,de()})}),e.querySelectorAll("[data-mobile-pane-btn]").forEach(r=>{r.addEventListener("click",()=>{C=r.dataset.mobilePaneBtn,de()})}),e.querySelector('[data-role="search"]')?.addEventListener("input",r=>{z=r.currentTarget.value,re()}),e.querySelector('[data-role="category"]')?.addEventListener("change",r=>{q=r.currentTarget.value,de()}),e.querySelectorAll("[data-filter-zone]").forEach(r=>{r.addEventListener("click",y=>{y.stopPropagation(),V=r.dataset.filterZone??"all",de()})}),e.querySelectorAll("[data-select-device]").forEach(r=>{r.addEventListener("click",y=>{y.target.tagName!=="INPUT"&&(R=r.dataset.selectDevice??null,P=!0,C="canvas",de())})}),e.querySelectorAll("[data-check-device]").forEach(r=>{r.addEventListener("change",()=>{const y=r.dataset.checkDevice;y&&(r.checked?c.add(y):c.delete(y),de())})}),e.querySelectorAll("[data-pin-device]").forEach(r=>{r.addEventListener("click",y=>{y.stopPropagation(),R=r.dataset.pinDevice??null,P=!0,de()})}),e.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{P=!1,de()}),e.querySelectorAll("[data-drawer-tab]").forEach(r=>{r.addEventListener("click",()=>{K=r.dataset.drawerTab??"control",Z="",de()})}),e.querySelectorAll("[data-drawer-doc]").forEach(r=>{r.addEventListener("click",()=>{Z=`已调阅「${r.dataset.drawerDoc??""}」（完整工程文档库见「系统部署 → 楼层与功能区」）。`,de()})}),e.querySelectorAll("[data-briefing-period]").forEach(r=>{r.addEventListener("click",()=>{D=r.dataset.briefingPeriod??"today",de()})}),e.querySelectorAll("[data-go-alarm-id]").forEach(r=>{r.addEventListener("click",()=>{const y=r.dataset.goAlarmId??"";window.location.hash=y?`#alarms?alarm=${encodeURIComponent(y)}`:"#alarms"})}),e.querySelectorAll("[data-go-wo-id]").forEach(r=>{r.addEventListener("click",()=>{const y=r.dataset.goWoId??"";window.location.hash=y?`#alarms?wo=${encodeURIComponent(y)}`:"#alarms"})}),e.querySelector("[data-release-override]")?.addEventListener("click",r=>{const y=r.currentTarget.dataset.releaseOverride;y&&(G.delete(y),de())}),e.querySelectorAll("[data-zone-power]").forEach(r=>{r.addEventListener("click",y=>{y.stopPropagation();const k=r.dataset.zonePower,ee=r.dataset.zoneVal==="true";if(!k)return;const U=g.filter(X=>X.logicalZoneId===k&&X.category==="lighting").map(X=>X.id),M=g.filter(X=>X.logicalZoneId===k&&X.category==="hvac").map(X=>X.id);U.length?ce(U,"lighting.power",ee):M.length&&ce(M,"hvac.power",ee)})}),e.querySelectorAll("[data-locate-device]").forEach(r=>{r.addEventListener("click",()=>{const y=r.dataset.locateDevice;y&&(R=y,P=!0,C="canvas",de())})}),e.querySelectorAll("[data-go-alarms]").forEach(r=>{r.addEventListener("click",()=>{window.location.hash="#alarms"})}),e.querySelectorAll("[data-go-analysis]").forEach(r=>{r.addEventListener("click",()=>{const y=r.dataset.goAnalysis||"energy";window.location.hash=`#analysis?cat=${encodeURIComponent(y)}`})}),e.querySelectorAll("[data-go-timeseries]").forEach(r=>{r.addEventListener("click",()=>{const y=r.dataset.goTimeseries||"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(y)}`})}),e.querySelectorAll("[data-toggle-briefing]").forEach(r=>{r.addEventListener("click",()=>{A=!A,de()})}),e.querySelector("[data-export-briefing]")?.addEventListener("click",()=>{const r=g.filter(X=>X.connectivity==="online").length,y=L.filter(X=>X.status==="active").length,k=["PACOM Station 今日运行简报（广实2号园 E栋 7F）",`生成时间：${new Date().toLocaleString("zh-CN")}`,"室外气象：26°C 多云 · 湿度 64%","昨日能耗偏差：-6.4%（预计节省 ¥48）",`设备在线：${r}/${g.length}（离线 ${g.length-r} 台）`,`待处理告警：${y} 条`,`人工覆盖中：${G.size} 台`].join(`
`),ee=new Blob([k],{type:"text/plain;charset=utf-8;"}),U=URL.createObjectURL(ee),M=document.createElement("a");M.href=U,M.download="pacom-daily-briefing.txt",M.click(),URL.revokeObjectURL(U)}),e.querySelectorAll("[data-ctrl-cmd]").forEach(r=>{r.addEventListener("click",()=>{if(!R||!r.dataset.ctrlCmd)return;const y=r.dataset.ctrlVal??"",k=y==="true"?!0:y==="false"?!1:Number(y);ce([R],r.dataset.ctrlCmd,k)})}),e.querySelector("[data-ctrl-slider]")?.addEventListener("change",r=>{const y=r.currentTarget;!R||!y.dataset.ctrlSlider||ce([R],y.dataset.ctrlSlider,Number(y.value))}),e.querySelectorAll("[data-batch-cmd]").forEach(r=>{r.addEventListener("click",()=>{const y=Array.from(c),k=r.dataset.batchVal??"",ee=k==="true"?!0:k==="false"?!1:k;ce(y,r.dataset.batchCmd,ee)})}),e.querySelectorAll("[data-ack-alarm]").forEach(r=>{r.addEventListener("click",async()=>{!r.dataset.ackAlarm||w.level!=="floor"||!S||(await t.acknowledgeAlarm(r.dataset.ackAlarm,"首页快速确认"),L=await t.listAlarms(w.floorId),de())})}),e.querySelectorAll("[data-canvas-layer]").forEach(r=>{r.addEventListener("click",()=>{const y=r.dataset.canvasLayer;y&&(te=y,de())})}),e.querySelectorAll("[data-zoom]").forEach(r=>{r.addEventListener("click",()=>{const y=r.dataset.zoom;y==="in"?ae=Math.min(2.6,Number((ae+.2).toFixed(2))):y==="out"?ae=Math.max(.6,Number((ae-.2).toFixed(2))):(ae=1,E=0,I=0),f()})});const m=e.querySelector('[data-role="canvas-stage"]');if(m&&!Y){let r=!1,y=0,k=0,ee=0,U=0;m.addEventListener("pointerdown",X=>{X.target?.closest("button, input, select, .pacom-drawer")||(r=!0,y=X.clientX,k=X.clientY,ee=E,U=I,m.classList.add("is-panning"),m.setPointerCapture?.(X.pointerId))}),m.addEventListener("pointermove",X=>{r&&(E=ee+(X.clientX-y),I=U+(X.clientY-k),f())});const M=()=>{r&&(r=!1,m.classList.remove("is-panning"))};m.addEventListener("pointerup",M),m.addEventListener("pointercancel",M),m.addEventListener("wheel",X=>{X.preventDefault();const se=X.deltaY<0?.12:-.12;ae=Math.max(.6,Math.min(2.6,Number((ae+se).toFixed(2)))),f()},{passive:!1}),m.addEventListener("dblclick",X=>{X.target?.closest("button")||(ae=1,E=0,I=0,f())})}const F=e.querySelector('[data-role="splitter"]');F?.addEventListener("pointerdown",r=>{const y=r.clientX,k=h;F.classList.add("is-dragging");const ee=M=>{h=Math.max(320,Math.min(640,k+(M.clientX-y)));const X=e.querySelector(".pacom-left-pane");X&&X.style.setProperty("--pacom-sidebar-width",`${h}px`)},U=()=>{F.classList.remove("is-dragging"),localStorage.setItem(Oe,String(Math.round(h))),window.removeEventListener("pointermove",ee),window.removeEventListener("pointerup",U)};window.addEventListener("pointermove",ee),window.addEventListener("pointerup",U)}),F?.addEventListener("keydown",r=>{if(r.key==="ArrowLeft")r.preventDefault(),h=Math.max(320,h-16);else if(r.key==="ArrowRight")r.preventDefault(),h=Math.min(640,h+16);else if(r.key==="Home")r.preventDefault(),h=320;else if(r.key==="End")r.preventDefault(),h=640;else return;localStorage.setItem(Oe,String(Math.round(h)));const y=e.querySelector(".pacom-left-pane");y&&y.style.setProperty("--pacom-sidebar-width",`${h}px`)})}await p(w,!0)}const Et=new Set(["lighting","hvac","alarm_rules"]),_e={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},je=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function Lt(e){const t=new Set;for(const l of e.actions)l.command.startsWith("lighting")?t.add("照明"):l.command.startsWith("hvac")?t.add("暖通"):t.add("综合");return Array.from(t)}function At(e,t,l){const s=l?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
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
  `}async function jt(e,t,l){let[s,n,i]=await Promise.all([t.listScenes(d.floorId),t.getRuntimeSettings(d.projectId),t.getFloorDevices(d.floorId).catch(()=>[])]),S="manual",x="balanced",w="all",N=null,C="",z=!1,q=!1,V=!1,H="all",W=null,_="",R="",P=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const K=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],Z=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],A=[{deviceId:i[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],D=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 · ${n.calendar.workdayStart} – ${n.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 · 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 · ${n.calendar.nightGuardStart} – 次日 ${n.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],te=t.subscribeFloorEvents(d.floorId,async c=>{c.type==="control.receipt.updated"&&N?.batchId===c.batchId&&(N=await t.getControlBatch(c.batchId),G())});function G(){const c=C.trim().toLowerCase(),g=c?s.filter(o=>`${o.name} ${o.description}`.toLowerCase().includes(c)):s,L=n.rules.filter(o=>Et.has(o.category)),b=w==="all"?L:w==="cbm"?[]:L.filter(o=>o.category===w),T=w==="all"||w==="cbm",Y=H==="issues"?K.filter(o=>o.status!=="verified"):K,ae=je.find(o=>o.id===x)??je[1],E=l.scope.canControlDevices,I=l.scope.canEditDeployment;e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">智能策略</h1>
              <div class="pacom-tabs" role="tablist" aria-label="智能策略分类">
                <button class="pacom-tab" role="tab" aria-selected="${S==="manual"}" data-scene-tab="manual">快捷场景（${s.length}）</button>
                <button class="pacom-tab" role="tab" aria-selected="${S==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
                <button class="pacom-tab" role="tab" aria-selected="${S==="rules"}" data-scene-tab="rules">条件联动（${L.length+Z.length}）</button>
              </div>
            </div>

            <div class="pacom-header-meta">
              <button type="button" class="pacom-badge ${P.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${P.length>0?`人工覆盖中：${P.length} 台 ${ie("chevron-down",12)}`:`全部自动托管 ${ie("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${V?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${K.length}）</button>
              ${S==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1">${z?"收起表单":"+ 新建场景"}</button>`:S==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
        </header>

        ${q?`
            <div class="lov-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${P.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${ie("x",16)}</button>
              </div>
              ${P.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':P.map(o=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${o.name}</div>
                            <div class="pacom-row-sub">${o.reason}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${o.id}" ${E?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${P.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${E?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${V?`
            <aside class="lov-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${ie("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${H==="all"}" data-log-filter="all">全部（${K.length}）</button>
                  <button class="pacom-tab" aria-selected="${H==="issues"}" data-log-filter="issues">异常与被覆盖</button>
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
          ${_?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${_}</span></div>`:""}
          ${R?`<div class="pacom-alert-banner">${R}</div>`:""}

          ${S==="manual"?`
              ${N?`
                  <section class="lov-section">
                    <div class="lov-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="lov-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${N.batchId}</span>
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
                            ${N.receipts.map(o=>`
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

              ${z?`
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
                        ${A.map((o,a)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" data-draft-dev="${a}" aria-label="目标设备">
                                ${i.map(p=>`<option value="${p.id}" ${p.id===o.deviceId?"selected":""}>${p.name}</option>`).join("")}
                              </select>
                              <select class="pacom-select" data-draft-cmd="${a}" aria-label="执行指令">
                                <option value="lighting.dimming" ${o.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${o.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${o.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" data-draft-val="${a}" value="${o.targetValue}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${a}" ${A.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="lov-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit">保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="lov-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${C}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${g.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${g.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="lov-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':g.map(o=>{const a=Lt(o),p=o.actions.slice(0,3).map(j=>{const oe=i.find(re=>re.id===j.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??j.deviceId,ce=j.command==="lighting.dimming"?`亮度 ${j.targetValue}%`:j.command==="hvac.setpoint"?`设温 ${j.targetValue}°C`:j.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${oe} → ${ce}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${o.name}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${a.map(j=>`<span class="pacom-badge pacom-badge--accent">${j}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${o.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${o.description}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${p}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${o.lastExecutedAt?o.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行"}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${o.id}" ${E?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:S==="schedule_oss"?`
                <div class="lov-kpi-strip lov-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">当前优化启停模式</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${ae.title}</div>
                    <span class="lov-kpi-delta">${ae.estSaving}</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">明日预测预启动时刻</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${ae.predictedStart}</div>
                    <span class="lov-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="lov-kpi-cell">
                    <span class="lov-kpi-label">本周累计节省运行工时</span>
                    <div class="lov-kpi-value" style="font-size:18px;">${ae.savedHours}</div>
                    <span class="lov-kpi-delta">当前人工覆盖挂起：${P.length} 台</span>
                  </div>
                </div>

                <section class="lov-section">
                  <div class="lov-section-head">
                    <h2 class="lov-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="lov-mode-grid">
                    ${je.map(o=>`
                      <button type="button" class="lov-mode-card" aria-pressed="${x===o.id}" data-oss-mode="${o.id}" ${E?"":"disabled"}>
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
                          ${D.map(o=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${o.name}</span>
                                    ${o.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${o.windowLabel}</div>
                                </td>
                                <td>${At(o.startHour,o.endHour,o.enabled)}</td>
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
                                      ${E?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(o=>{const a=o==="all"?"全部":_e[o]??o,p=o==="all"?L.length+Z.length:o==="cbm"?Z.length:L.filter(j=>j.category===o).length;return`
                            <button type="button" class="lov-count-pill" aria-pressed="${w===o}" data-rule-cat="${o}">
                              <span>${a}</span><span class="lov-count-num">${p}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="lov-settings-card">
                    ${b.map(o=>{const a=W===o.id;return`
                          <div class="lov-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="lov-setting-meta">
                                <span class="lov-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${_e[o.category]??o.category}</span>
                                  <span>${o.name}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${o.version}</span>
                                </span>
                                <span class="lov-setting-desc">${o.summary} · 范围：${o.scopeLabel} · 回执：${o.receiptSummary??"已同步"}</span>
                              </div>
                              <div class="lov-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${o.id}">${a?"收起逻辑":"查看逻辑"}</button>
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
                                  ${I?"":"disabled"}
                                >
                                  <span class="lov-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${a?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${o.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":o.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${o.scopeLabel} · 当前版本：v${o.version} · 最近同步：${o.receiptSummary??"已同步"}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${T?Z.map(o=>{const a=Math.min(100,Math.round(o.runtimeHours/o.thresholdHours*100));return`
                                <div class="lov-setting-row">
                                  <div class="lov-setting-meta" style="gap:6px;">
                                    <span class="lov-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${o.name}</span>
                                      <span class="pacom-badge ${a>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${o.runtimeHours} / ${o.thresholdHours} h（${a}%）</span>
                                    </span>
                                    <div class="lov-progress-track" style="max-width:340px;">
                                      <div class="lov-progress-fill" style="width:${a}%; background:${a>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="lov-setting-desc">绑定设备：${o.equipment} · 上次重置：${o.lastReset}</span>
                                  </div>
                                  <div class="lov-setting-control">
                                    <span class="pacom-row-sub">${o.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="lov-switch" role="switch" aria-checked="${o.enabled}" data-toggle-cbm="${o.id}" aria-label="切换 ${o.name}" ${I?"":"disabled"}>
                                      <span class="lov-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,e.querySelectorAll("[data-scene-tab]").forEach(o=>{o.addEventListener("click",()=>{S=o.dataset.sceneTab??"manual",_="",G()})}),e.querySelectorAll("[data-toggle-overrides]").forEach(o=>{o.addEventListener("click",()=>{q=!q,G()})}),e.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{P=[],_="已释放全部人工覆盖设备，自动节能策略已恢复托管。",G()}),e.querySelectorAll("[data-release-one]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.releaseOne;P=P.filter(p=>p.id!==a),_="已恢复该设备的自动策略托管。",G()})}),e.querySelectorAll("[data-toggle-cmdlog]").forEach(o=>{o.addEventListener("click",()=>{V=!V,G()})}),e.querySelectorAll("[data-log-filter]").forEach(o=>{o.addEventListener("click",()=>{H=o.dataset.logFilter??"all",G()})}),e.querySelector("[data-close-batch]")?.addEventListener("click",()=>{N=null,G()}),e.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),e.querySelectorAll("[data-oss-mode]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.ossMode;if(!a)return;x=a;const p=je.find(j=>j.id===a);_=`已切换至「${p?.title??a}」模式（明日预测启动 ${p?.predictedStart??""}）。`,G()})}),e.querySelectorAll("[data-toggle-schedule]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.toggleSchedule,p=D.find(j=>j.id===a);p&&(p.enabled=!p.enabled,_=`排程「${p.name}」已${p.enabled?"恢复启用":"临时暂停"}。`,G())})}),e.querySelectorAll("[data-rule-cat]").forEach(o=>{o.addEventListener("click",()=>{w=o.dataset.ruleCat??"all",G()})}),e.querySelectorAll("[data-expand-rule]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.expandRule??null;W=W===a?null:a,G()})}),e.querySelectorAll("[data-toggle-cbm]").forEach(o=>{o.addEventListener("click",()=>{const a=Z.find(p=>p.id===o.dataset.toggleCbm);a&&(a.enabled=!a.enabled,_=`工时维保规则「${a.name}」已${a.enabled?"启用":"停用"}。`,G())})}),e.querySelectorAll("[data-toggle-strategy-rule]").forEach(o=>{o.addEventListener("click",async()=>{R="";try{await t.toggleRuntimeRule(o.dataset.toggleStrategyRule,o.dataset.ruleNext==="true",Number(o.dataset.ruleVer)),n=await t.getRuntimeSettings(d.projectId),_="条件联动规则状态与版本回执已更新。",G()}catch(a){R=a instanceof Error?a.message:String(a),G()}})}),e.querySelectorAll("[data-toggle-create]").forEach(o=>{o.addEventListener("click",()=>{z=!z,G()})}),e.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{A.push({deviceId:i[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),G()}),e.querySelectorAll("[data-del-draft-action]").forEach(o=>{o.addEventListener("click",()=>{const a=Number(o.dataset.delDraftAction);A.length>1&&(A.splice(a,1),G())})}),e.querySelectorAll("[data-draft-dev]").forEach(o=>{o.addEventListener("change",()=>{const a=A[Number(o.dataset.draftDev)];a&&(a.deviceId=o.value)})}),e.querySelectorAll("[data-draft-cmd]").forEach(o=>{o.addEventListener("change",()=>{const a=A[Number(o.dataset.draftCmd)];a&&(a.command=o.value)})}),e.querySelectorAll("[data-draft-val]").forEach(o=>{o.addEventListener("change",()=>{const a=A[Number(o.dataset.draftVal)];a&&(a.targetValue=o.value)})}),e.querySelector("[data-scene-search]")?.addEventListener("input",o=>{const a=o.currentTarget,p=a.selectionStart??a.value.length;C=a.value,G();const j=e.querySelector("[data-scene-search]");j&&(j.focus(),j.setSelectionRange(p,p))}),e.querySelectorAll("[data-exec-scene]").forEach(o=>{o.addEventListener("click",async()=>{R="";const a=s.find(p=>p.id===o.dataset.execScene);try{N=await t.executeScene(o.dataset.execScene),s=await t.listScenes(d.floorId),K.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:a?.name??"E7F 场景",action:`${N.receipts.length} 台设备联动下发`,status:"verified"}),G()}catch(p){R=p instanceof Error?p.message:String(p),G()}})}),e.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async o=>{o.preventDefault();const a=new FormData(o.currentTarget);try{await t.createScene({projectId:d.projectId,floorId:d.floorId,name:String(a.get("name")??""),description:String(a.get("description")??""),actions:A.map(p=>({deviceId:p.deviceId,command:p.command,targetValue:p.targetValue==="true"?!0:p.targetValue==="false"?!1:Number(p.targetValue)||50}))}),s=await t.listScenes(d.floorId),z=!1,_=`快捷场景已保存（共绑定 ${A.length} 条联动动作）。`,G()}catch(p){R=p instanceof Error?p.message:String(p),G()}})}G(),window.addEventListener("hashchange",()=>te(),{once:!0})}function ze(e,t){return e.length===0?'<div class="lov-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':e.map(l=>`
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
      </div>`).join("")}async function Ct(e,t,l){let s="calendar",n=await t.getRuntimeSettings(d.projectId),i=n.calendar.workdayStart,S=n.calendar.workdayEnd,x=n.calendar.nightGuardStart,w=n.calendar.nightGuardEnd,N=!0,C=[];const z=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let q="flat";const V={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},H={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},W={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},_={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},R=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let P="",K="";function Z(){const A=l.scope.canEditDeployment,D=n.rules.filter(c=>c.category==="weather_area"),te=n.rules.filter(c=>c.category==="metering_carbon"),G=n.rules.filter(c=>c.category==="templates");e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
              <h1 class="pacom-title">运行设置</h1>
              <div class="pacom-tabs" role="tablist" aria-label="运行设置分类">
                <button class="pacom-tab" role="tab" aria-selected="${s==="calendar"}" data-stab="calendar">运行日历</button>
                <button class="pacom-tab" role="tab" aria-selected="${s==="energy_weather"}" data-stab="energy_weather">能碳与气象</button>
                <button class="pacom-tab" role="tab" aria-selected="${s==="guardrails"}" data-stab="guardrails">控制与安全</button>
                <button class="pacom-tab" role="tab" aria-selected="${s==="notifications"}" data-stab="notifications">通知与工单规则</button>
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
            ${P?`<div class="lov-banner lov-banner--ok"><span class="lov-banner-title">${P}</span></div>`:""}
            ${K?`<div class="pacom-alert-banner">${K}</div>`:""}

            ${s==="calendar"?`
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
                        <input class="pacom-input" style="width:116px;" type="time" data-cal-end value="${S}" aria-label="工作日下班时间" ${A?"":"disabled"} />
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
                        <span class="pacom-row-sub">${N?"已开启":"已关闭"}</span>
                        <button type="button" class="lov-switch" role="switch" aria-checked="${N}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${A?"":"disabled"}>
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
                    ${z.map(c=>`
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

                ${C.length>0?`
                    <section class="lov-section">
                      <div class="lov-section-head">
                        <h2 class="lov-section-title">受影响的定时与夜间规则预览</h2>
                        <span class="pacom-row-sub">共 ${C.length} 条</span>
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
                              ${C.map(c=>`
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
                            <option value="guanzhou_station" ${V.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                            <option value="campus_sensor" ${V.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                          </select>
                        </div>
                      </div>
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">E 栋计费与能效面积（m²）</span>
                          <span class="lov-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                        </div>
                        <div class="lov-setting-control">
                          <input class="pacom-input" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${V.billingArea}" aria-label="计费面积" ${A?"":"disabled"} />
                        </div>
                      </div>
                      ${ze(D,A)}
                    </div>
                  </section>

                  <section class="lov-section">
                    <div class="lov-section-head">
                      <h2 class="lov-section-title">电价与碳排口径</h2>
                      <div class="pacom-tabs">
                        <button class="pacom-tab" aria-selected="${q==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                        <button class="pacom-tab" aria-selected="${q==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                      </div>
                    </div>
                    <div class="lov-settings-card">
                      ${q==="flat"?`
                          <div class="lov-setting-row">
                            <div class="lov-setting-meta">
                              <span class="lov-setting-title">综合电价参考（元 / kWh）</span>
                              <span class="lov-setting-desc">用于数据分析中的月度节能金额估算</span>
                            </div>
                            <div class="lov-setting-control">
                              <input class="pacom-input" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${V.tariffYuan}" aria-label="综合电价" ${A?"":"disabled"} />
                            </div>
                          </div>`:`
                          <div class="lov-setting-row">
                            <div class="lov-setting-meta">
                              <span class="lov-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                              <span class="lov-setting-desc">峰段 10:00–12:00 / 14:00–19:00 · 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                            </div>
                            <div class="lov-setting-control" style="gap:6px;">
                              <span class="pacom-row-sub">峰</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${V.tariffPeak}" ${A?"":"disabled"} />
                              <span class="pacom-row-sub">平</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${V.tariffFlat}" ${A?"":"disabled"} />
                              <span class="pacom-row-sub">谷</span><input class="pacom-input" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${V.tariffValley}" ${A?"":"disabled"} />
                            </div>
                          </div>`}
                      <div class="lov-setting-row">
                        <div class="lov-setting-meta">
                          <span class="lov-setting-title">区域电网碳排放因子</span>
                          <span class="lov-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                        </div>
                        <div class="lov-setting-control">
                          <select class="pacom-select" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${A?"":"disabled"}>
                            <option value="0.5271" ${V.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                            <option value="0.5703" ${V.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                          </select>
                        </div>
                      </div>
                      ${ze(te,A)}
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
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="minTemp" value="${H.minTemp}" aria-label="最低设定温度" ${A?"":"disabled"} />
                            <span class="pacom-row-sub">至</span>
                            <input class="pacom-input" style="width:72px;" type="number" data-guard-field="maxTemp" value="${H.maxTemp}" aria-label="最高设定温度" ${A?"":"disabled"} />
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
                              <option value="2h" ${H.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                              <option value="4h" ${H.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                              <option value="eod" ${H.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                              <option value="permanent" ${H.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                            </select>
                          </div>
                        </div>
                        <div class="lov-setting-row">
                          <div class="lov-setting-meta">
                            <span class="lov-setting-title">控制指令回读超时阈值（秒）</span>
                            <span class="lov-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                          </div>
                          <div class="lov-setting-control">
                            <input class="pacom-input" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${H.readbackTimeoutSec}" aria-label="回读超时阈值" ${A?"":"disabled"} />
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
                        ${ze(G,A)}
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
                            <input class="pacom-input" style="width:72px;" type="number" data-auto-wo="delayMin" value="${W.delayMin}" ${A?"":"disabled"} />
                            <span class="pacom-row-sub">分钟</span>
                            <button type="button" class="lov-switch" role="switch" aria-checked="${W.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${A?"":"disabled"}>
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
                              <option value="暖通运维组" ${W.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                              <option value="强电照明组" ${W.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                              <option value="园区物业值班组" ${W.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                            </select>
                            <span class="pacom-row-sub">防重</span>
                            <button type="button" class="lov-switch" role="switch" aria-checked="${W.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${A?"":"disabled"}>
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
    `,e.querySelectorAll("[data-stab]").forEach(c=>{c.addEventListener("click",()=>{s=c.dataset.stab??"calendar",P="",K="",Z()})}),e.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{N=!N,P=`法定节假日自动跳过已${N?"开启":"关闭"}。`,Z()}),e.querySelector("[data-night-start]")?.addEventListener("change",c=>{x=c.currentTarget.value}),e.querySelector("[data-night-end]")?.addEventListener("change",c=>{w=c.currentTarget.value}),e.querySelector("[data-add-sd-form]")?.addEventListener("submit",c=>{c.preventDefault();const g=new FormData(c.currentTarget);z.push({id:`sd-${Date.now()}`,date:String(g.get("date")??""),label:String(g.get("label")??""),mode:String(g.get("mode")??"保持工作日工况")}),P="已添加特殊例外日期，当日自动覆盖默认节假日排程。",Z()}),e.querySelectorAll("[data-del-sd]").forEach(c=>{c.addEventListener("click",()=>{const g=z.findIndex(L=>L.id===c.dataset.delSd);g>=0&&z.splice(g,1),Z()})}),e.querySelectorAll("[data-tariff-mode]").forEach(c=>{c.addEventListener("click",()=>{q=c.dataset.tariffMode??"flat",Z()})}),e.querySelectorAll("[data-energy-field]").forEach(c=>{c.addEventListener("change",()=>{const g=c.dataset.energyField;g&&(V[g]=c.value)})}),e.querySelector("[data-save-energy]")?.addEventListener("click",()=>{P=q==="flat"?`能碳与气象口径已保存（面积 ${V.billingArea} m² · 综合电价 ¥${V.tariffYuan}/kWh · 因子 ${V.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${V.tariffPeak} / 平 ¥${V.tariffFlat} / 谷 ¥${V.tariffValley}）。`,Z()}),e.querySelectorAll("[data-guard-field]").forEach(c=>{c.addEventListener("change",()=>{const g=c.dataset.guardField;g&&(H[g]=c.value)})}),e.querySelector("[data-save-guard]")?.addEventListener("click",()=>{P=`控制安全边界已保存（温区 ${H.minTemp}–${H.maxTemp}°C · 超时 ${H.readbackTimeoutSec}s）。`,Z()}),e.querySelectorAll("[data-auto-wo]").forEach(c=>{c.addEventListener("change",()=>{const g=c.dataset.autoWo;g&&(W[g]=c.value),P="自动转工单配置已更新。",Z()})}),e.querySelectorAll("[data-toggle-autowo]").forEach(c=>{c.addEventListener("click",()=>{const g=c.dataset.toggleAutowo;g&&(W[g]=!W[g],P="自动转工单保护策略已更新。",Z())})}),e.querySelector("[data-digest-time]")?.addEventListener("change",c=>{_.dailyDigestTime=c.currentTarget.value,P=`每日晨间简报发送时刻已更新为 ${_.dailyDigestTime}。`,Z()}),e.querySelectorAll("[data-notify-key]").forEach(c=>{c.addEventListener("click",()=>{const g=c.dataset.notifyKey;g&&(_[g]=!_[g],P="通知策略偏好已更新。",Z())})}),e.querySelectorAll("[data-toggle-nr]").forEach(c=>{c.addEventListener("click",()=>{const g=R.find(L=>L.id===c.dataset.toggleNr);g&&(g.enabled=!g.enabled,P=`工作组「${g.groupName}」的通知分流规则已${g.enabled?"启用":"停用"}。`,Z())})}),e.querySelector("[data-cal-start]")?.addEventListener("change",c=>{i=c.currentTarget.value}),e.querySelector("[data-cal-end]")?.addEventListener("change",c=>{S=c.currentTarget.value}),e.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{K="",C=await t.previewCalendarImpact(d.projectId,i,S),Z()}),e.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{K="";try{const c=await t.saveWorkCalendar(d.projectId,i,S,n.calendar.version);n={...n,calendar:{...c,nightGuardStart:x,nightGuardEnd:w}},P=`运行日历已保存至 v${c.version}（工作日 ${c.workdayStart}–${c.workdayEnd} · 夜间值守 ${x}–${w}）`,C=[],Z()}catch(c){K=c instanceof Error?c.message:String(c),Z()}}),e.querySelectorAll("[data-toggle-rule]").forEach(c=>{c.addEventListener("click",async()=>{K="";try{await t.toggleRuntimeRule(c.dataset.toggleRule,c.dataset.ruleNext==="true",Number(c.dataset.ruleVer)),n=await t.getRuntimeSettings(d.projectId),P="策略状态与版本回执已更新。",Z()}catch(g){K=g instanceof Error?g.message:String(g),Z()}})})}Z()}const Ve="pacom.web.sidebar.collapsed",Ft=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Ue=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"运行设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],Re={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"运行设置",deployment:"系统部署",account:"机构与账户"},Mt=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function Ce(){const e=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return e in Re?e:"home"}function pe(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function Tt(e,t,l,s){e.classList.remove("bare-login");let n=l,i=Ce(),S=localStorage.getItem(Ve)==="1",x=!1,w=!1,N=!1,C="",z=!1,q=0;const V=[{id:"n-1",title:"VAV-02 通信离线告警待处理",detail:"7F 东侧实验区 · 影响估算 ¥ 840/月",time:"12 分钟前",hash:"#alarms",level:"warning",read:!1},{id:"n-2",title:"工单 WO-2026-101 已分派给工程组",detail:"VAV-02 执行器现场排查 · 截止今日 18:00",time:"28 分钟前",hash:"#alarms?wo=WO-2026-101",level:"info",read:!1},{id:"n-3",title:"策略「工作日上午模式」自动执行完成",detail:"照明与暖通 6 台设备全部回执成功",time:"08:30",hash:"#scenes",level:"ok",read:!0},{id:"n-4",title:"E7F 本周运行与节能简报已生成",detail:"综合节能 -12.4%，建议查看 702 会议室负荷",time:"昨日 18:00",hash:"#analysis",level:"info",read:!0}];let H={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};const W=t.mode==="demo"&&typeof t.switchDemoRole=="function";async function _(){try{const[h,o,a,p,j]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(d.floorId).catch(()=>[]),t.listAlarms(d.floorId).catch(()=>[]),t.listWorkOrders(d.floorId).catch(()=>[]),t.listScenes(d.floorId).catch(()=>[])]);H={devices:o,zones:h.zones,alarms:a,workOrders:p,scenes:j},q=a.filter(oe=>oe.status==="active").length,G()}catch{}}function R(){return Ue.map(h=>`
        ${h.id==="settings"?'<div class="pacom-nav-divider" role="separator"></div>':""}
        <button type="button" class="pacom-nav-item" data-route="${h.id}" aria-current="${i===h.id?"page":"false"}" title="${h.label}">
          ${ie(h.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${h.label}</span>
          ${h.id==="alarms"&&q>0?`<span class="pacom-nav-count" title="待处理告警 ${q} 条">${q}</span>`:""}
        </button>`).join("")}function P(){const h=C.trim().toLowerCase();if(!z||!h)return"";const o=Ue.filter(O=>O.label.toLowerCase().includes(h)).slice(0,4),a=H.devices.filter(O=>`${O.name} ${O.id} ${O.category}`.toLowerCase().includes(h)).slice(0,4),p=H.zones.filter(O=>O.name.toLowerCase().includes(h)).slice(0,3),j=H.alarms.filter(O=>`${O.title} ${O.message} ${O.id}`.toLowerCase().includes(h)).slice(0,3),oe=H.workOrders.filter(O=>`${O.title} ${O.id}`.toLowerCase().includes(h)).slice(0,3),ce=H.scenes.filter(O=>`${O.name} ${O.description}`.toLowerCase().includes(h)).slice(0,3),re=Mt.filter(O=>`${O.title} ${O.category}`.toLowerCase().includes(h)).slice(0,4),f=[];return a.length&&f.push('<div class="pacom-search-group">设备（空间总览）</div>'+a.map(O=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(O.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${pe(O.name)}</span><span class="pacom-badge ${O.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${O.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),p.length&&f.push('<div class="pacom-search-group">功能区</div>'+p.map(O=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(O.id)}"><span>${pe(O.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),j.length&&f.push('<div class="pacom-search-group">告警</div>'+j.map(O=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(O.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${pe(O.title)}</span><span class="pacom-badge pacom-badge--warning">${O.status==="active"?"待处理":"已确认"}</span></button>`).join("")),oe.length&&f.push('<div class="pacom-search-group">运维工单</div>'+oe.map(O=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(O.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${pe(O.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),ce.length&&f.push('<div class="pacom-search-group">智能策略</div>'+ce.map(O=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${pe(O.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),re.length&&f.push('<div class="pacom-search-group">图纸与工程文档</div>'+re.map(O=>`<button type="button" class="pacom-search-hit" data-search-hash="${O.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${pe(O.title)}</span><span class="pacom-badge pacom-badge--neutral">${pe(O.category)}</span></button>`).join("")),o.length&&f.push('<div class="pacom-search-group">工作区</div>'+o.map(O=>`<button type="button" class="pacom-search-hit" data-search-hash="#${O.id}"><span>${pe(O.label)}</span><span class="pacom-badge pacom-badge--neutral">菜单</span></button>`).join("")),f.length?`<div class="pacom-search-popover" data-role="search-popover">${f.join("")}</div>`:`<div class="pacom-search-popover" data-role="search-popover"><div class="pacom-nav-empty">未找到与「${pe(C)}」匹配的设备、区域、告警、工单或图纸</div></div>`}function K(){e.querySelector('[data-role="search-popover"]')?.remove();const h=e.querySelector(".pacom-nav-search-wrap");if(!h)return;const o=P();if(!o)return;const a=document.createElement("div");a.innerHTML=o.trim();const p=a.firstElementChild;p&&(h.appendChild(p),p.querySelectorAll("[data-search-hash]").forEach(j=>{j.addEventListener("click",()=>{const oe=j.dataset.searchHash||"#home";z=!1,C="";const ce=e.querySelector('[data-role="nav-search"]');ce&&(ce.value=""),K(),x=!1,window.location.hash===oe?(i=Ce(),T(!0)):window.location.hash=oe})}))}function Z(){if(!w)return"";const h=n.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${S?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab.jpg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${pe(n.roleLabel)}${W?" · 演示":""}</small>
          </span>
          ${ie("check",16,"pacom-pop-check")}
        </button>

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${ie("settings",16)}</span>
          <span class="pacom-pop-text">机构设置</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${pe(h)}</span>
          <span class="pacom-pop-text">
            <b>${pe(n.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${W?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">演示角色切换（RBAC 权限预览）</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(me).map(o=>{const a=me[o],p=o===n.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${p}" data-pop-role="${o}">
                      <span class="pacom-pop-text">
                        <b>${pe(a.roleLabel)}</b>
                        <small>${pe(a.displayName)}</small>
                      </span>
                      ${p?ie("check",16,"pacom-pop-check"):""}
                    </button>`}).join("")}
            </div>`:""}

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${ie("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}function A(){if(!N)return"";const h=V.filter(o=>!o.read).length;return`
      <div class="pacom-org-popover ${S?"is-collapsed-anchor":""}" role="dialog" aria-label="站内通知收件箱" data-role="notif-popover" style="width:316px; padding:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; padding:2px 6px 8px; border-bottom:var(--hw) solid var(--pacom-border-subtle);">
          <span style="font-size:13px; font-weight:500; color:var(--pacom-text-primary);">站内通知${h>0?`（${h} 条未读）`:""}</span>
          ${h>0?'<button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 6px; font-size:12px;" data-notif-read-all="1">全部已读</button>':'<span class="pacom-row-sub">已全部阅读</span>'}
        </div>
        <div style="display:flex; flex-direction:column; gap:2px; margin-top:6px; max-height:300px; overflow-y:auto;">
          ${V.map(o=>`
              <button type="button" class="pacom-pop-item pacom-pop-item--tall" data-notif-id="${o.id}" style="align-items:flex-start; gap:8px; ${o.read?"opacity:0.74;":""}">
                <span style="width:7px; height:7px; border-radius:50%; margin-top:6px; flex-shrink:0; background:${o.read?"transparent":o.level==="warning"?"var(--pacom-status-warning)":"var(--pacom-accent-solid)"}; border:${o.read?"1px solid var(--pacom-border)":"none"};"></span>
                <span class="pacom-pop-text" style="flex:1; min-width:0;">
                  <b style="font-weight:500; font-size:12.5px;">${pe(o.title)}</b>
                  <small style="white-space:normal; line-height:1.4;">${pe(o.detail)} · ${pe(o.time)}</small>
                </span>
              </button>`).join("")}
        </div>
      </div>
    `}async function D(h){switch(document.title=`${Re[i]} · PACOM Station`,i){case"home":await It(h,t,n);return;case"analysis":await vt(h,t);return;case"alarms":await at(h,t,n);return;case"scenes":await jt(h,t,n);return;case"settings":await Ct(h,t,n);return;case"deployment":await $t(h,t,n);return;case"account":await Xe(h,t,n,o=>{n=o,T(!0)},te);return}}async function te(){w=!1,x=!1,I();try{await t.logout()}finally{window.location.hash="#login",s()}}function G(){const h=e.querySelector('[data-role="nav-list"]');h&&(h.innerHTML=R(),L())}function c(){e.querySelector('[data-role="org-popover"]')?.remove();const h=e.querySelector('[data-role="org-menu-btn"]');if(h&&h.setAttribute("aria-expanded",String(w)),!w)return;const o=document.createElement("div");o.innerHTML=Z().trim();const a=o.firstElementChild;a&&(e.appendChild(a),b())}function g(){e.querySelector('[data-role="notif-popover"]')?.remove();const h=V.filter(oe=>!oe.read).length,o=e.querySelector('[data-role="notif-dot"]');o&&(o.style.display=h>0?"block":"none");const a=e.querySelector('[data-role="notif-btn"]');if(a&&a.setAttribute("aria-expanded",String(N)),!N)return;const p=document.createElement("div");p.innerHTML=A().trim();const j=p.firstElementChild;j&&(e.appendChild(j),j.querySelector("[data-notif-read-all]")?.addEventListener("click",()=>{V.forEach(oe=>{oe.read=!0}),g()}),j.querySelectorAll("[data-notif-id]").forEach(oe=>{oe.addEventListener("click",()=>{const ce=V.find(re=>re.id===oe.dataset.notifId);ce&&(ce.read=!0),N=!1,g(),ce&&(window.location.hash===ce.hash?(i=Ce(),T(!0)):window.location.hash=ce.hash)})}))}function L(){e.querySelectorAll("[data-route]").forEach(h=>{h.addEventListener("click",()=>{const o=h.dataset.route;o===i&&!x||(i=o,x=!1,w=!1,window.location.hash=`#${i}`,T(!0))})})}function b(){e.querySelectorAll('[data-pop-act="go-account"]').forEach(h=>{h.addEventListener("click",()=>{w=!1,x=!1,i="account",window.location.hash="#account",T(!0)})}),e.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{te()}),e.querySelectorAll("[data-pop-role]").forEach(h=>{h.addEventListener("click",async()=>{if(!t.switchDemoRole)return;const o=h.dataset.popRole;w=!1,x=!1,n=await t.switchDemoRole(o),await T(!0)})})}async function T(h){const o=e.querySelector('[data-role="main-stage"]');if(!h&&o){const j=e.querySelector(".pacom-nav-rail");j&&(j.classList.toggle("is-collapsed",S),j.classList.toggle("is-mobile-open",x));const oe=e.querySelector('[data-role="mobile-scrim"]');oe&&oe.classList.toggle("is-open",x),c();return}e.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${ie("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${Re[i]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${pe(n.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${x?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${S?"is-collapsed":""} ${x?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${Ft}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${S?"展开侧栏":"收起侧栏"}" aria-label="${S?"展开侧栏":"收起侧栏"}">
              ${ie(S?"chevron-right":"chevron-left",16)}
            </button>
          </div>

          <div class="pacom-nav-search-wrap">
            ${ie("search",14,"pacom-nav-search-icon")}
            <input class="pacom-nav-search" name="navSearch" data-role="nav-search" type="search" placeholder="搜索设备、空间、告警、图纸…" value="${pe(C)}" aria-label="全局搜索设备、空间、告警、工单或图纸" autocomplete="off" />
          </div>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${R()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${i==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${w}" title="广州国家实验室 · ${pe(n.displayName)}">
              <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab.jpg" alt="" /></span>
              <span class="pacom-org-name">广州国家实验室</span>
              ${ie("chevrons-up-down",16,"pacom-org-arrows")}
            </button>
            <button type="button" class="pacom-collapse-btn" data-role="notif-btn" aria-haspopup="dialog" aria-expanded="${N}" title="站内通知收件箱" aria-label="站内通知收件箱" style="position:relative; width:34px; height:34px; flex-shrink:0;">
              ${ie("bell",16)}
              <span data-role="notif-dot" style="display:${V.some(j=>!j.read)?"block":"none"}; position:absolute; top:6px; right:6px; width:7px; height:7px; border-radius:50%; background:var(--pacom-status-warning); border:1.5px solid var(--pacom-surface-canvas);"></span>
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,e.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{S=!S,w=!1,localStorage.setItem(Ve,S?"1":"0");const j=e.querySelector(".pacom-nav-rail"),oe=e.querySelector('[data-role="toggle-sidebar"]');j&&j.classList.toggle("is-collapsed",S),oe&&(oe.title=S?"展开侧栏":"收起侧栏",oe.setAttribute("aria-label",oe.title),oe.innerHTML=ie(S?"chevron-right":"chevron-left",16)),c()}),e.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{x=!x,T(!1)}),e.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{x=!1,w=!1,T(!1)});const a=e.querySelector('[data-role="nav-search"]');a?.addEventListener("focus",()=>{z=!0,K()}),a?.addEventListener("input",j=>{C=j.currentTarget.value,z=!0,K()}),e.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",j=>{j.stopPropagation(),N=!1,g(),w=!w,c()}),e.querySelector('[data-role="notif-btn"]')?.addEventListener("click",j=>{j.stopPropagation(),w=!1,c(),N=!N,g()}),L(),c(),g(),K();const p=e.querySelector('[data-role="main-stage"]');p&&await D(p)}const Y=h=>{const o=h.target;z&&!o?.closest(".pacom-nav-search-wrap")&&(z=!1,K()),N&&!o?.closest('[data-role="notif-popover"]')&&!o?.closest('[data-role="notif-btn"]')&&(N=!1,g()),w&&!o?.closest('[data-role="org-popover"]')&&!o?.closest('[data-role="org-menu-btn"]')&&(w=!1,c())},ae=h=>{h.key==="Escape"&&(z?(z=!1,K()):N?(N=!1,g()):w?(w=!1,c()):x&&(x=!1,T(!1)))},E=()=>{i=Ce(),w=!1,x=!1,T(!0),_()};function I(){document.removeEventListener("click",Y),document.removeEventListener("keydown",ae),window.removeEventListener("hashchange",E)}document.addEventListener("click",Y),document.addEventListener("keydown",ae),window.addEventListener("hashchange",E),await T(!0),_()}const qt=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Dt='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',Ot='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',ke=ie("x",16),We={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},zt={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function Rt(e){const t=e.replace(/\D/g,"");return t.length===11?`${t.slice(0,3)} •••• ${t.slice(7)}`:e}function ve(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function He(e,t,l){e.classList.add("bare-login"),document.title="登录 · PACOM Station";let s=!1,n=!1,i="",S="",x="",w="",N=!1,C={},z="",q=!1,V="",H=0,W=null,_=null,R="privacy",P="",K="",Z="";const A=t.mode==="demo"&&typeof t.switchDemoRole=="function";function D(){W!==null&&(window.clearInterval(W),W=null),e.classList.remove("bare-login")}function te(){H=60,W!==null&&window.clearInterval(W),W=window.setInterval(()=>{H-=1,H<=0&&(H=0,W!==null&&(window.clearInterval(W),W=null));const L=e.querySelector('[data-act="send-sms"]');L&&(L.disabled=H>0,L.textContent=H>0?`${H} 秒后重发`:V?"重新获取":"获取验证码")},1e3)}function G(){if(!_)return"";if(_==="reset")return`
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
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${ve(K)}" />
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
      `;if(_==="register")return`
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
      `;if(_==="legal"){const L=We[R],b=["privacy","terms","service"].map(T=>`<button type="button" role="tab" aria-selected="${R===T}" class="au-legal-tab ${R===T?"is-active":""}" data-act="switch-legal" data-tab="${T}">${We[T].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${ke}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${b}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${L.items.map(T=>`<li>${ve(T)}</li>`).join("")}
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
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${ke}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${P||"复制邮箱"}
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
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${ke}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(me).map(L=>{const b=me[L];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${L}">
                        <div>
                          <b>${ve(b.roleLabel)} · ${ve(b.displayName)}</b>
                          <small>${ve(zt[L])}</small>
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
      `:""}function c(){const L=s?`
        <div class="au-field ${C.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ve(x)}" aria-invalid="${C.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${H>0?"disabled":""}>
              ${H>0?`${H} 秒后重发`:V?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${ve(C.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${V?`验证码已发送至 ${ve(Rt(V))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${C.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ve(i)}" aria-invalid="${C.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${ve(C.id??"")}</p>
        </div>
      `,b=s?`
        <div class="au-field ${C.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ve(w)}" aria-invalid="${C.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${ve(C.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${C.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${n?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${ve(S)}" aria-invalid="${C.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${n?"隐藏密码":"显示密码"}">
              ${n?Ot:Dt}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${ve(C.pwd??"")}</p>
        </div>
      `;e.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${qt}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${q?"disabled":""}>
                  ${L}
                  ${b}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${z?"":"hidden"}>${ve(z)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${N?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${q?"disabled":""}>
                    ${q?"正在登录…":"登录"}
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
      ${G()}
    `,g()}function g(){const L=e.querySelector("#au-id"),b=e.querySelector("#au-pwd"),T=e.querySelector("#au-sphone"),Y=e.querySelector("#au-scode"),ae=e.querySelector('input[name="keep"]');L?.addEventListener("input",()=>{if(i=L.value,C.id||z){delete C.id,z="",L.closest(".au-field")?.classList.remove("bad");const E=e.querySelector("#au-id-err");E&&(E.textContent="");const I=e.querySelector("#au-login-ferr");I&&(I.hidden=!0)}}),b?.addEventListener("input",()=>{if(S=b.value,C.pwd||z){delete C.pwd,z="",b.closest(".au-field")?.classList.remove("bad");const E=e.querySelector("#au-pwd-err");E&&(E.textContent="");const I=e.querySelector("#au-login-ferr");I&&(I.hidden=!0)}}),T?.addEventListener("input",()=>{if(x=T.value,C.sphone||z){delete C.sphone,z="",T.closest(".au-field")?.classList.remove("bad");const E=e.querySelector("#au-sphone-err");E&&(E.textContent="");const I=e.querySelector("#au-login-ferr");I&&(I.hidden=!0)}}),Y?.addEventListener("input",()=>{if(w=Y.value.replace(/\D/g,"").slice(0,6),Y.value=w,C.scode||z){delete C.scode,z="",Y.closest(".au-field")?.classList.remove("bad");const E=e.querySelector("#au-scode-err");E&&(E.textContent="");const I=e.querySelector("#au-login-ferr");I&&(I.hidden=!0)}}),ae?.addEventListener("change",()=>{N=ae.checked}),e.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{n=!n,c(),e.querySelector("#au-pwd")?.focus()}),e.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{s=!s,C={},z="",c(),e.querySelector(s?"#au-sphone":"#au-id")?.focus()}),e.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const E=x.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(E)){C={sphone:"请输入有效的手机号码"},c(),e.querySelector("#au-sphone")?.focus();return}C={},V=E,te(),c(),e.querySelector("#au-scode")?.focus()}),e.querySelector('form[data-form="login"]')?.addEventListener("submit",async E=>{if(E.preventDefault(),!q){if(C={},z="",s?(x.trim()||(C.sphone="请输入手机号码"),/^\d{6}$/.test(w.trim())||(C.scode="请输入 6 位验证码")):(i.trim()||(C.id="请输入电子邮箱或手机号码"),S||(C.pwd="请输入密码")),Object.keys(C).length>0){c();const I=Object.keys(C)[0];e.querySelector(`#au-${I}`)?.focus();return}q=!0,c();try{const I=await t.login({account:(s?x:i).trim(),password:s?w.trim():S});D(),l(I)}catch(I){q=!1,z=I instanceof Error?I.message:"账户或密码不正确",c()}}}),e.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{K=i.trim(),Z="",_="reset",c(),e.querySelector("#au-rs-id")?.focus()}),e.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{_="register",c()}),e.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{_="legal",c()}),e.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{P="",_="contact",c()}),e.querySelectorAll('[data-act="open-demo-roles"]').forEach(E=>{E.addEventListener("click",()=>{_="demoRoles",c()})}),e.querySelectorAll('[data-act="close-modal"]').forEach(E=>{E.addEventListener("click",()=>{_=null,c()})}),e.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",E=>{E.target===E.currentTarget&&(_=null,c())}),e.querySelectorAll('[data-act="switch-legal"]').forEach(E=>{E.addEventListener("click",()=>{const I=E.dataset.tab;I&&(R=I,c())})}),e.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),P="已复制"}catch{P="support@pacom.cn"}c()}),e.querySelector("#au-reset-form")?.addEventListener("submit",E=>{E.preventDefault(),K=e.querySelector("#au-rs-id")?.value.trim()??"",K?A?Z="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":Z="如账户存在，验证码已发送。":Z="请输入电子邮箱或手机号码",c()}),e.querySelectorAll('[data-act="pick-demo-role"]').forEach(E=>{E.addEventListener("click",async()=>{const I=E.dataset.roleId;if(!I||!t.switchDemoRole)return;const h=await t.switchDemoRole(I);D(),l(h)})})}c()}async function Nt(){const e=document.getElementById("app");if(e)try{const t=Ge(),l=await t.getSession(),s=async n=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await Tt(e,t,n,()=>{He(e,t,i=>{s(i)})})};if(!l||window.location.hash==="#login"){He(e,t,n=>{s(n)});return}await s(l)}catch(t){e.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(t)}</div></div>`}}Nt();
//# sourceMappingURL=index-BCS1-dsm.js.map
