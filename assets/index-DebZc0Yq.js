(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const b of l.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&t(b)}).observe(document,{childList:!0,subtree:!0});function o(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(s){if(s.ep)return;s.ep=!0;const l=o(s);fetch(s.href,l)}})();const i={projectId:"project-3989b2e6-da39-4723-aff1-f1618e396cc5",project1Id:"project-6fb7b56d-2ac3-4301-97c2-9c0a18cc5d58",buildingId:"building-455b8ac0-d092-47f8-a293-ea0b74765773",buildingFId:"building-a5c34dec-5fa3-455a-a49b-3c7c68288277",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-7",lockedFloor8Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-8",lockedFloor6Id:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-6"},N={org_admin:{userId:"demo-org-admin",displayName:"林致远（机构管理员）",role:"org_admin",roleLabel:"机构管理员",authMode:"demo",scope:{allowedProjectIds:[i.projectId,i.project1Id],allowedBuildingIds:[i.buildingId,i.buildingFId],allowedFloorIds:[i.lockedFloor8Id,i.floorId,i.lockedFloor6Id],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩（项目管理员）",role:"project_admin",roleLabel:"项目管理员",authMode:"demo",scope:{allowedProjectIds:[i.projectId],allowedBuildingIds:[i.buildingId,i.buildingFId],allowedFloorIds:[i.lockedFloor8Id,i.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!0}},facility_operator:{userId:"demo-operator-e7f",displayName:"周宁（设施运维员）",role:"facility_operator",roleLabel:"设施运维员",authMode:"demo",scope:{allowedProjectIds:[i.projectId],allowedBuildingIds:[i.buildingId],allowedFloorIds:[i.floorId],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!0}},commissioning_engineer:{userId:"demo-commissioning-e7f",displayName:"黄工（调试工程师）",role:"commissioning_engineer",roleLabel:"调试工程师",authMode:"demo",scope:{allowedProjectIds:[i.projectId],allowedBuildingIds:[i.buildingId],allowedFloorIds:[i.floorId],canControlDevices:!0,canEditDeployment:!0,canManageAlarms:!1}},member:{userId:"demo-member-e7f",displayName:"沈嘉（普通成员）",role:"member",roleLabel:"普通成员",authMode:"demo",scope:{allowedProjectIds:[i.projectId],allowedBuildingIds:[i.buildingId],allowedFloorIds:[i.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],canControlDevices:!0,canEditDeployment:!1,canManageAlarms:!1}}},X="pacom.web.demo.role";class ce{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;constructor(){const e=sessionStorage.getItem(X);e&&N[e]&&(this.activeSession=structuredClone(N[e]));const o=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:i.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:o,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:o,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:i.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:o,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:i.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:o,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:i.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:o,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:o,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:o,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02（离线测试）",category:"hvac",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:i.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:o,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:i.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:o,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:o,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:o,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:o},{id:"conn-e7f-dali",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:o},{id:"conn-e7f-modbus",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:i.projectId,floorId:i.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:i.projectId,floorId:i.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:i.projectId,floorId:i.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:i.projectId,floorId:i.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组（含离线 VAV-02 对照验证）",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:i.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:i.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:o,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:i.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:o,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:i.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:i.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh · 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:i.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:o,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:i.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(N).map((t,s)=>({userId:t.userId,displayName:t.displayName,email:`${t.role.replaceAll("_",".")}@pacom.local`,role:t.role,roleLabel:t.roleLabel,scopeSummary:t.scope.allowedZoneIds?.length?`E栋 7F（${t.scope.allowedZoneIds.length} 个我的区域）`:`${t.scope.allowedProjectIds.length} 项目 / ${t.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:s===0?o:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁（设施运维员）",role:"facility_operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"黄工（调试工程师）",role:"commissioning_engineer",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉（普通成员）",role:"member",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}record(e,o,t,s,l){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:o,endpoint:t,request:l,response:s}),this.traces.length>40&&this.traces.pop()}pushAudit(e,o,t,s){const l=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:l?.displayName??"anonymous",role:l?.role??"member",action:e,target:o,result:t,detail:s})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.activeSession}async getSession(){return this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){if(!e.account.trim()||!e.password.trim())throw new Error("400 BAD_REQUEST: 请输入账号和密码");const o=e.account.includes("admin")?"org_admin":e.account.includes("eng")?"commissioning_engineer":e.account.includes("member")?"member":"facility_operator";return this.activeSession=structuredClone(N[o]),sessionStorage.setItem(X,o),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{account:e.account}),this.pushAudit("auth.login",this.activeSession.userId,"success"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(X),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}async switchDemoRole(e){return this.activeSession=structuredClone(N[e]),sessionStorage.setItem(X,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}async getSpatialTree(){const e=this.requireSession(),o=[{id:i.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"},{id:i.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",imageUrl:"./media/gzlab.jpg"}],t=[{id:i.buildingId,projectId:i.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.png"},{id:i.buildingFId,projectId:i.projectId,name:"F栋",aboveFloors:12,belowFloors:2,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.png"}],s={projects:o.filter(l=>e.scope.allowedProjectIds.includes(l.id)),buildings:t.filter(l=>e.scope.allowedBuildingIds.includes(l.id)),floors:[{id:i.lockedFloor8Id,buildingId:i.buildingId,kind:"above",level:8,name:"8F",plan:null},{id:i.floorId,buildingId:i.buildingId,kind:"above",level:7,name:"7F",areaSqm:1383.1,plan:{floorId:i.floorId,imageUrl:"./media/7F.webp",planVersion:1,updatedAt:"2026-11-22T00:00:00Z"}},{id:i.lockedFloor6Id,buildingId:i.buildingId,kind:"above",level:6,name:"6F",plan:null}],zones:[{id:"zone-e7f-lab-east",floorId:i.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:i.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:i.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:i.floorId,name:"核心走廊与弱电井",category:"corridor"}]};return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:s.projects.length,buildings:s.buildings.length,floors:s.floors.length}),s}async getFloorDevices(e){const o=this.requireSession();if(!o.scope.allowedFloorIds.includes(e)){const s={code:"FORBIDDEN",status:403,message:`当前角色「${o.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,s),this.pushAudit("floor.read",e,"denied",s.message),new Error(`403 FORBIDDEN: ${s.message}`)}if(e!==i.floorId)return[];let t=structuredClone(this.devices);return o.scope.allowedZoneIds?.length&&(t=t.filter(s=>s.logicalZoneId&&o.scope.allowedZoneIds.includes(s.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:t.length}),t}async dispatchControlBatch(e){const o=this.requireSession();if(!o.scope.canControlDevices||!o.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权下发控制指令`);const t=`batch-e7f-${Date.now().toString(36)}`,s={batchId:t,floorId:e.floorId,createdBy:o.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(l=>({deviceId:l.deviceId,command:l.command,targetValue:l.targetValue,status:"queued"}))};return this.batches.set(t,s),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",s,e),this.pushAudit("control.dispatch",t,"success",`下发 ${e.targets.length} 台设备`),s.receipts.forEach((l,b)=>{const h=this.devices.find(r=>r.id===l.deviceId);setTimeout(()=>{l.status="dispatched",l.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:t,deviceId:l.deviceId,status:"dispatched",at:l.dispatchedAt})},280+b*120),setTimeout(()=>{const r=new Date().toISOString();!h||h.connectivity==="offline"?(l.status="timeout",l.errorCode="GATEWAY_READBACK_TIMEOUT",l.errorMessage="设备离线，网关未收到回读确认",l.verifiedAt=r):(l.status="verified_success",l.observedValue=l.targetValue,l.verifiedAt=r,this.applyObservedTelemetry(h,l.command,l.targetValue,r)),this.emit({type:"control.receipt.updated",batchId:t,deviceId:l.deviceId,status:l.status,observedValue:l.observedValue,at:r})},900+b*220)}),structuredClone(s)}applyObservedTelemetry(e,o,t,s){o==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:t,collectedAt:s,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(t)>0,collectedAt:s,stale:!1})):(o==="lighting.power"||o==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:t,collectedAt:s,stale:!1}:o==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:t,collectedAt:s,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:s,values:{[o]:t}})}async getControlBatch(e){this.requireSession();const o=this.batches.get(e);if(!o)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(o)}async listAlarms(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==i.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,o){const t=this.requireSession();if(!t.scope.canManageAlarms){const l=`角色「${t.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",l),new Error(`403 FORBIDDEN: ${l}`)}const s=this.alarms.find(l=>l.id===e);if(!s)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return s.status="acknowledged",s.acknowledgedAt=new Date().toISOString(),s.acknowledgedBy=t.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,s,{note:o}),this.pushAudit("alarm.acknowledge",e,"success",o),this.emit({type:"alarm.changed",floorId:s.floorId,alarmId:e,status:"acknowledged",at:s.acknowledgedAt}),structuredClone(s)}async listWorkOrders(e){return!this.requireSession().scope.allowedFloorIds.includes(e)||e!==i.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const o=this.requireSession();if(!o.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权创建工单`);const t=new Date().toISOString(),s={id:`wo-e7f-${Date.now().toString(36)}`,projectId:i.projectId,buildingId:i.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:t,updatedAt:t};if(this.workOrders.unshift(s),e.alarmId){const l=this.alarms.find(b=>b.id===e.alarmId);l&&(l.workOrderId=s.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",s,e),this.pushAudit("work_order.create",s.id,"success",s.title),structuredClone(s)}async updateWorkOrderStatus(e,o){const t=this.requireSession();if(!t.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权流转工单`);const s=this.workOrders.find(l=>l.id===e);if(!s)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return s.status=o,s.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,s,{status:o}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${o}`),structuredClone(s)}async updateDevicePlanPoint(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权编辑图纸标点`);const t=this.devices.find(s=>s.id===e.deviceId);if(!t)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(t.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${t.version}，请刷新后重试`);return t.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},t.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,t,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${t.planPoint.x}, ${t.planPoint.y})`),structuredClone(t)}async updateDeviceHardwareBinding(e){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权修改硬件绑定`);const t=this.devices.find(l=>l.id===e.deviceId);if(!t)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(t.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${t.version}）`);const s=new Date().toISOString();return t.physicalInstalled=e.physicalInstalled,t.physicalVerifiedAt=e.physicalInstalled?s:null,t.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:s,boundBy:o.displayName},t.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,t,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(t)}async listConnections(e){return this.requireSession(),structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,o){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权冻结交付批次`);const s=this.devices.filter(b=>b.physicalInstalled&&b.hardwareBinding).length,l={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:i.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:s,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:t.displayName,note:o||"例行交付基线冻结"};return this.deliveryBatches.unshift(l),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,l,{note:o}),this.pushAudit("delivery.freeze",l.id,"success",`${s}/${this.devices.length} 已现场核验`),structuredClone(l)}async getAnalysisReport(e,o,t){this.requireSession();const s=o==="today"?1:o==="7d"?7:30,b={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*s)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*s).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(f=>f.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*s).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*s).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*s).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],h=o==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],r={category:e,range:o,scopeId:t,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:b.kpis,unit:b.unit,series:b.base.map((f,m)=>({label:h[m],value:Math.round(f*(e==="energy"||e==="carbon"?s/2+.5:1)),baseline:Math.round(f*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:b.base[3],unit:b.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:b.base[4],unit:b.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:b.base[1],unit:b.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${o}&scopeId=${t}`,{kpis:r.kpis.length}),r}async listScenes(e){return this.requireSession(),structuredClone(this.scenes)}async createScene(e){if(!this.requireSession().scope.canControlDevices)throw new Error("403 FORBIDDEN: 无权创建场景");const t={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(t),this.record("REST","createScene","POST /api/v1/scenes",t,e),this.pushAudit("scene.create",t.id,"success",t.name),structuredClone(t)}async executeScene(e){const o=this.scenes.find(s=>s.id===e);if(!o)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const t=await this.dispatchControlBatch({floorId:o.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:o.actions,reason:`触发场景：${o.name}`});return o.lastExecutedAt=new Date().toISOString(),o.lastBatchId=t.batchId,t}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:i.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,o,t){this.requireSession();const s=t>=this.calendar.nightGuardStart?`下班时间 ${t} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,l=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${o} - ${t}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${o} (-30m) ~ ${t} (+30m)`,conflictWarning:s},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:s}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",l,{workdayStart:o,workdayEnd:t}),l}async saveWorkCalendar(e,o,t,s){const l=this.requireSession();if(!l.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权修改运行日历`);if(this.calendar.version!==s)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(o>=t)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:o,workdayEnd:t,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:o,workdayEnd:t,expectedVersion:s}),this.pushAudit("settings.calendar",i.projectId,"success",`${o}-${t}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,o,t){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权启停运行规则`);const l=this.rules.find(b=>b.id===e);if(!l)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(l.version!==t)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${l.version}）`);return l.enabled=o,l.version+=1,l.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,l,{enabled:o,expectedVersion:t}),this.pushAudit("settings.rule_toggle",e,"success",o?"启用":"停用"),structuredClone(l)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,o){const t=this.requireSession();if(t.role!=="org_admin"&&t.role!=="project_admin")throw new Error("403 FORBIDDEN: 仅管理员可邀请成员");const s=N[o],l={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:o,roleLabel:s.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(l),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",l,{email:e,role:o}),this.pushAudit("org.invite",e,"success",s.roleLabel),structuredClone(l)}async listAuditLogs(){return this.requireSession(),structuredClone(this.auditLogs)}subscribeFloorEvents(e,o){return e!==i.floorId?()=>{}:(this.listeners.add(o),()=>{this.listeners.delete(o)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${i.floorId}`,e),this.listeners.forEach(o=>o(e))}}function ge(){if("demo".toLowerCase()==="live")throw new Error("VITE_DATA_MODE=live 时必须配置 VITE_API_BASE_URL 与 VITE_WS_BASE_URL");return new ce}async function be(a,e,o,t,s){let l="profile",b=await e.listOrgMembers(),h=await e.listAuditLogs(),r="";async function f(){[b,h]=await Promise.all([e.listOrgMembers(),e.listAuditLogs()]),m()}function m(){const I=e.mode==="demo"&&typeof e.switchDemoRole=="function";a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">账户与机构设置</h1>
            <button class="pacom-btn" data-role="logout-btn">退出登录</button>
          </div>
          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist">
              <button class="pacom-tab" role="tab" aria-selected="${l==="profile"}" data-atab="profile">我的账户与权限</button>
              <button class="pacom-tab" role="tab" aria-selected="${l==="members"}" data-atab="members">机构成员（${b.length}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${l==="audit"}" data-atab="audit">审计日志（${h.length}）</button>
            </div>
          </div>
        </header>

        ${r?`<div class="pacom-alert-banner">${r}</div>`:""}

        <div class="pacom-content-page" style="padding:0;">
          ${l==="profile"?`
              <section class="pacom-card">
                <h2 class="pacom-drawer-title">当前会话（服务端下发 RBAC 契约）</h2>
                <pre class="pacom-code">${JSON.stringify(o,null,2)}</pre>
              </section>
              ${I?`
                  <section class="pacom-card">
                    <h2 class="pacom-drawer-title">多角色权限预览切换（仅 Demo 模式可用）</h2>
                    <div class="pacom-role-grid">
                      ${Object.keys(N).map(d=>{const k=N[d];return`
                            <button class="pacom-role-card ${d===o.role?"is-active":""}" data-switch-role="${d}">
                              <strong>${k.roleLabel}</strong>
                              <span class="pacom-row-sub">${k.displayName}</span>
                              <span class="pacom-row-sub">授权楼层 ${k.scope.allowedFloorIds.length} 层 · 部署编辑：${k.scope.canEditDeployment?"是":"否"}</span>
                            </button>`}).join("")}
                    </div>
                  </section>`:""}`:l==="members"?`
                <section class="pacom-card">
                  <h2 class="pacom-drawer-title">邀请新成员</h2>
                  <form data-role="invite-form" style="display:grid; grid-template-columns:1fr 180px auto; gap:8px;">
                    <input class="pacom-input" name="email" type="email" placeholder="colleague@pacom.local" required />
                    <select class="pacom-select" name="role">
                      ${Object.keys(N).map(d=>`<option value="${d}">${N[d].roleLabel}</option>`).join("")}
                    </select>
                    <button class="pacom-btn pacom-btn--primary" type="submit">发送邀请</button>
                  </form>
                </section>
                <section class="pacom-card">
                  <h2 class="pacom-drawer-title">成员与资源范围列表</h2>
                  ${b.map(d=>`
                      <div class="pacom-receipt-item">
                        <div>
                          <strong>${d.displayName}</strong> <span class="pacom-row-sub">${d.email}</span>
                          <div class="pacom-row-sub">${d.roleLabel} · ${d.scopeSummary}</div>
                        </div>
                        <span class="pacom-badge ${d.status==="active"?"pacom-badge--online":"pacom-badge--accent"}">${d.status}</span>
                      </div>`).join("")}
                </section>`:`
                <section class="pacom-card">
                  <h2 class="pacom-drawer-title">操作与权限拦截审计日志</h2>
                  ${h.map(d=>`
                      <div class="pacom-receipt-item">
                        <div>
                          <strong>${d.action}</strong> → <code>${d.target}</code>
                          <div class="pacom-row-sub">${d.actor} · ${d.at.slice(0,19).replace("T"," ")} · ${d.detail??""}</div>
                        </div>
                        <span class="pacom-badge ${d.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">${d.result}</span>
                      </div>`).join("")}
                </section>`}
        </div>
      </div>
    `,a.querySelectorAll("[data-atab]").forEach(d=>{d.addEventListener("click",()=>{l=d.dataset.atab,r="",m()})}),a.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",s()}),a.querySelectorAll("[data-switch-role]").forEach(d=>{d.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const k=await e.switchDemoRole(d.dataset.switchRole);t(k)})}),a.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async d=>{d.preventDefault(),r="";const k=new FormData(d.currentTarget);try{await e.inviteOrgMember(String(k.get("email")??""),String(k.get("role"))),await f()}catch(S){r=S instanceof Error?S.message:String(S),m()}})}m()}async function fe(a,e,o){let t=[],s=[],l="all",b="";async function h(){[t,s]=await Promise.all([e.listAlarms(i.floorId),e.listWorkOrders(i.floorId)]),r()}function r(){const f=l==="all"?t:t.filter(m=>m.status===l);a.innerHTML=`
      <div class="pacom-content-page">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h1 class="pacom-title">告警工单</h1>
          <div style="display:flex; gap:8px; align-items:center;">
            <select class="pacom-select" data-alarm-filter>
              <option value="all" ${l==="all"?"selected":""}>全部告警状态</option>
              <option value="active" ${l==="active"?"selected":""}>待确认</option>
              <option value="acknowledged" ${l==="acknowledged"?"selected":""}>已确认</option>
            </select>
            <span class="pacom-badge ${o.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
              ${o.scope.canManageAlarms?"可确认、转单与流转":"只读权限"}
            </span>
          </div>
        </div>

        ${b?`<div class="pacom-alert-banner">${b}</div>`:""}

        <section class="pacom-card">
          <h2 class="pacom-drawer-title">E7F 实时告警队列（${f.length}）</h2>
          ${f.map(m=>`
              <div class="pacom-receipt-item">
                <div>
                  <strong>${m.title}</strong> <span class="pacom-badge pacom-badge--neutral">${m.severity}</span>
                  <div class="pacom-row-sub">${m.message} · 设备：${m.deviceId}</div>
                </div>
                <div style="display:flex; gap:6px; align-items:center;">
                  ${m.status==="active"?`<button class="pacom-btn" data-ack="${m.id}">确认告警</button>`:'<span class="pacom-badge pacom-badge--online">已确认</span>'}
                  ${m.workOrderId?`<span class="pacom-badge pacom-badge--accent">已关联 ${m.workOrderId}</span>`:`<button class="pacom-btn pacom-btn--primary" data-to-wo="${m.id}">转工单</button>`}
                </div>
              </div>`).join("")}
        </section>

        <section class="pacom-card">
          <h2 class="pacom-drawer-title">运维工单生命周期（${s.length}）</h2>
          ${s.map(m=>`
              <div class="pacom-receipt-item">
                <div>
                  <strong>${m.title}</strong> <span class="pacom-row-sub">(${m.id})</span>
                  <div class="pacom-row-sub">${m.description}</div>
                </div>
                <select class="pacom-select" data-wo-status="${m.id}">
                  ${["open","assigned","in_progress","resolved","closed"].map(I=>`<option value="${I}" ${m.status===I?"selected":""}>${I}</option>`).join("")}
                </select>
              </div>`).join("")}
        </section>
      </div>
    `,a.querySelector("[data-alarm-filter]")?.addEventListener("change",m=>{l=m.currentTarget.value,r()}),a.querySelectorAll("[data-ack]").forEach(m=>{m.addEventListener("click",async()=>{b="";try{await e.acknowledgeAlarm(m.dataset.ack,"告警工作区确认"),await h()}catch(I){b=I instanceof Error?I.message:String(I),r()}})}),a.querySelectorAll("[data-to-wo]").forEach(m=>{m.addEventListener("click",async()=>{b="";const I=t.find(d=>d.id===m.dataset.toWo);if(I)try{await e.createWorkOrder({floorId:I.floorId,deviceId:I.deviceId,alarmId:I.id,title:`处置告警：${I.title}`,description:I.message}),await h()}catch(d){b=d instanceof Error?d.message:String(d),r()}})}),a.querySelectorAll("[data-wo-status]").forEach(m=>{m.addEventListener("change",async()=>{b="";try{await e.updateWorkOrderStatus(m.dataset.woStatus,m.value),await h()}catch(I){b=I instanceof Error?I.message:String(I),await h()}})})}await h()}const he=[{id:"energy",label:"能源"},{id:"environment",label:"环境"},{id:"occupancy",label:"占用"},{id:"health",label:"设备健康"},{id:"carbon",label:"碳排放"}];function ye(a){const e=Math.max(...a.series.map(b=>Math.max(b.value,b.baseline??0)),1),o=46,t=22;return`
    <svg viewBox="0 0 ${a.series.length*(o+t)+40} 190" style="width:100%; height:200px; display:block;" role="img" aria-label="${a.category} 趋势图">
      ${a.series.map((b,h)=>{const r=24+h*(o+t),f=Math.max(8,Math.round(b.value/e*130)),m=152-f;return`
            <rect x="${r}" y="${m}" width="${o}" height="${f}" rx="6" fill="var(--pacom-accent)" opacity="0.82" />
            <text x="${r+o/2}" y="${m-6}" text-anchor="middle" font-size="11" fill="var(--pacom-text-primary)">${b.value}</text>
            <text x="${r+o/2}" y="172" text-anchor="middle" font-size="11" fill="var(--pacom-text-secondary)">${b.label}</text>
          `}).join("")}
    </svg>
  `}async function we(a,e,o){let t="energy",s="7d",l=!1,b=null;async function h(){b=await e.getAnalysisReport(t,s,i.floorId),r()}function r(){b&&(a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">数据分析</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">${b.scopeLabel}</span>
              <button class="pacom-btn" data-toggle-canvas="1">${l?"收起楼层画布":"按需展开空间画布"}</button>
            </div>
          </div>
          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist">
              ${he.map(f=>`<button class="pacom-tab" role="tab" aria-selected="${t===f.id}" data-cat="${f.id}">${f.label}</button>`).join("")}
            </div>
            <div class="pacom-tabs">
              ${["today","7d","30d"].map(f=>`<button class="pacom-tab" aria-selected="${s===f}" data-range="${f}">${f==="today"?"今日":f==="7d"?"近 7 天":"近 30 天"}</button>`).join("")}
            </div>
          </div>
        </header>

        <section class="pacom-split" style="gap:12px;">
          <div style="flex:1; min-width:0; overflow-y:auto; display:flex; flex-direction:column; gap:12px;">
            <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px;">
              ${b.kpis.map(f=>`
                  <div class="pacom-card" style="padding:16px; gap:4px;">
                    <span class="pacom-row-sub">${f.label}</span>
                    <div style="font-size:22px; font-weight:600;">${f.value} <span style="font-size:12px; font-weight:400; color:var(--pacom-text-secondary);">${f.unit??""}</span></div>
                    <span class="pacom-badge pacom-badge--neutral" style="width:fit-content;">${f.delta??"-"}</span>
                  </div>`).join("")}
            </div>

            <section class="pacom-card">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <h2 class="pacom-drawer-title">趋势统计（单位：${b.unit}）</h2>
                <span class="pacom-row-sub">更新时间：${b.updatedAt.slice(0,19).replace("T"," ")}</span>
              </div>
              ${ye(b)}
            </section>

            <section class="pacom-card">
              <h2 class="pacom-drawer-title">功能区明细对比</h2>
              ${b.zoneBreakdown.map(f=>`
                  <div class="pacom-receipt-item">
                    <span><strong>${f.zoneName}</strong>（${f.zoneId}）</span>
                    <span class="pacom-badge ${f.status==="warning"?"pacom-badge--warning":"pacom-badge--online"}">${f.value} ${f.unit}</span>
                  </div>`).join("")}
            </section>
          </div>

          ${l?`
              <aside class="pacom-right-pane" style="max-width:44%;">
                <div class="pacom-canvas-stage" style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:16px; gap:8px;">
                  <span class="pacom-badge pacom-badge--accent">E7F 分析共用画布（与首页状态隔离）</span>
                  <img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 分析楼层预览" />
                </div>
              </aside>`:""}
        </section>
      </div>
    `,a.querySelectorAll("[data-cat]").forEach(f=>{f.addEventListener("click",()=>{t=f.dataset.cat,h()})}),a.querySelectorAll("[data-range]").forEach(f=>{f.addEventListener("click",()=>{s=f.dataset.range,h()})}),a.querySelector("[data-toggle-canvas]")?.addEventListener("click",()=>{l=!l,r()}))}await h()}async function $e(a,e,o){let t="floorplan",s=await e.getSpatialTree(),l=[],b=[],h=[],r=null,f=!1,m="",I="";async function d(){I="";const[S,O,u,j]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(i.floorId).catch(()=>[]),e.listConnections(i.projectId),e.listDeliveryBatches(i.floorId)]);s=S,l=O,b=u,h=j,l.some(L=>L.id===r)||(r=l[0]?.id??null),k()}function k(){const S=l.find(u=>u.id===r)??null,O=o.scope.canEditDeployment;a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">系统部署</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge ${O?"pacom-badge--online":"pacom-badge--warning"}">
                ${O?"可编辑部署与硬件绑定":"只读权限（写入将被服务端 403 拦截）"}
              </span>
            </div>
          </div>
          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist">
              <button class="pacom-tab" role="tab" aria-selected="${t==="floorplan"}" data-dtab="floorplan">图纸标点与四态绑定</button>
              <button class="pacom-tab" role="tab" aria-selected="${t==="topology"}" data-dtab="topology">项目空间拓扑</button>
              <button class="pacom-tab" role="tab" aria-selected="${t==="connections"}" data-dtab="connections">系统接入（${b.length}）</button>
              <button class="pacom-tab" role="tab" aria-selected="${t==="delivery"}" data-dtab="delivery">交付冻结（${h.length}）</button>
            </div>
          </div>
        </header>

        ${m?`<div class="pacom-badge pacom-badge--online" style="height:auto; padding:8px 12px;">${m}</div>`:""}
        ${I?`<div class="pacom-alert-banner">${I}</div>`:""}

        ${t==="floorplan"?`
            <section class="pacom-split">
              <aside class="pacom-left-pane" style="--pacom-sidebar-width:380px;">
                <div class="pacom-pane-toolbar">
                  <div style="font-weight:500;">E7F 设备与四态配置（${l.length}）</div>
                  <div style="font-size:12px; color:var(--pacom-text-secondary);">
                    原则：图上放点仅更新 <code>planPoint</code>，绝不自动改写物理安装态或硬件端口绑定。
                  </div>
                </div>
                <div class="pacom-list">
                  ${l.map(u=>`
                      <div class="pacom-row ${u.id===r?"is-selected":""}" data-pick-dev="${u.id}">
                        <div style="min-width:0;">
                          <div class="pacom-row-title">${u.name}</div>
                          <div class="pacom-row-sub">v${u.version} · ${u.hardwareBinding?.protocol.toUpperCase()??"未绑定"} · ${u.physicalInstalled?"现场已确认":"待物理复核"}</div>
                        </div>
                        <span class="pacom-badge ${u.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">
                          ${u.planPoint?`${Math.round(u.planPoint.x*100)}%,${Math.round(u.planPoint.y*100)}%`:"未标点"}
                        </span>
                      </div>`).join("")}
                </div>
                ${S?`
                    <form data-role="binding-form" style="padding:12px 16px; border-top:var(--hw) solid var(--pacom-border-subtle); display:flex; flex-direction:column; gap:8px;">
                      <div style="font-weight:500; font-size:13px;">显式硬件绑定与现场复核（${S.id}）</div>
                      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                        <select class="pacom-select" name="protocol">
                          ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(u=>`<option value="${u}" ${S.hardwareBinding?.protocol===u?"selected":""}>${u.toUpperCase()}</option>`).join("")}
                        </select>
                        <input class="pacom-input" name="networkAddress" placeholder="网络地址/主题" value="${S.hardwareBinding?.networkAddress??""}" />
                      </div>
                      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                        <input class="pacom-input" name="portOrChannel" placeholder="端口/回路" value="${S.hardwareBinding?.portOrChannel??""}" />
                        <label style="display:flex; align-items:center; gap:6px; font-size:12px;">
                          <input type="checkbox" name="physicalInstalled" ${S.physicalInstalled?"checked":""} />
                          现场物理安装已确认
                        </label>
                      </div>
                      <div style="display:flex; gap:8px;">
                        <button class="pacom-btn" type="button" data-toggle-place="1">${f?"取消点图更新坐标":"点击图纸更新坐标"}</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit">保存硬件绑定（v${S.version}）</button>
                      </div>
                    </form>`:""}
              </aside>
              <div class="pacom-splitter"></div>
              <main class="pacom-right-pane">
                <div class="pacom-canvas-stage" data-role="deploy-stage" style="cursor:${f?"crosshair":"default"};">
                  <div class="pacom-canvas-viewport">
                    <div class="pacom-plan-wrap" data-role="deploy-plan">
                      <img class="pacom-plan-img" src="./media/7F.webp" alt="E7F 部署平面图" />
                      ${l.filter(u=>u.planPoint).map(u=>`
                          <button class="pacom-pin ${u.id===r?"is-selected":""} ${u.connectivity==="offline"?"pacom-pin--offline":""}"
                            style="left:${(u.planPoint.x*100).toFixed(2)}%; top:${(u.planPoint.y*100).toFixed(2)}%;"
                            data-pick-dev="${u.id}">
                            <span>${u.name.slice(0,7)}</span>
                          </button>`).join("")}
                    </div>
                  </div>
                  ${f&&S?`<div style="position:absolute; top:16px; left:16px; z-index:8;" class="pacom-badge pacom-badge--accent">标点模式：点击图纸任意位置更新「${S.name}」的 2D 坐标（不改动硬件绑定）</div>`:""}
                </div>
              </main>
            </section>`:t==="topology"?`
              <div class="pacom-content-page" style="padding:0;">
                <section class="pacom-card">
                  <h2 class="pacom-drawer-title">项目 → 楼宇 → 楼层归属拓扑</h2>
                  <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:12px;">
                    ${s.projects.map(u=>{const j=s.buildings.filter(L=>L.projectId===u.id);return`
                          <div class="pacom-control-box" style="background:#fff;">
                            <img src="${u.imageUrl??"./media/gzlab.jpg"}" alt="${u.name}" style="width:100%; height:110px; object-fit:cover; border-radius:8px;" />
                            <strong>${u.name}</strong>
                            <span class="pacom-row-sub">${u.city??""} ${u.address??""} · ${j.length} 栋授权楼宇</span>
                            <div style="display:flex; flex-direction:column; gap:6px; margin-top:4px;">
                              ${j.map(L=>`
                                  <div class="pacom-receipt-item">
                                    <span>├─ <strong>${L.name}</strong>（地上 ${L.aboveFloors}F / ${L.areaSqm??"-"} m²）</span>
                                    <span class="pacom-badge pacom-badge--neutral">${L.id===i.buildingId?"含 E7F":"对照"}</span>
                                  </div>`).join("")}
                            </div>
                          </div>`}).join("")}
                  </div>
                </section>
              </div>`:t==="connections"?`
                <div class="pacom-content-page" style="padding:0;">
                  <section class="pacom-card">
                    <h2 class="pacom-drawer-title">系统接入通道（采集点与计算点独立计数）</h2>
                    ${b.map(u=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <strong>${u.name}</strong>
                            <div class="pacom-row-sub">${u.protocol.toUpperCase()} · ${u.endpoint} · 采集点 ${u.collectedPoints} / 计算点 ${u.calculatedPoints}</div>
                          </div>
                          <span class="pacom-badge ${u.status==="connected"?"pacom-badge--online":"pacom-badge--warning"}">${u.status}</span>
                        </div>`).join("")}
                  </section>
                </div>`:`
                <div class="pacom-content-page" style="padding:0;">
                  <section class="pacom-card">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:12px;">
                      <h2 class="pacom-drawer-title">E7F 交付冻结批次</h2>
                      <button class="pacom-btn pacom-btn--primary" data-freeze-batch="1">新建交付冻结快照</button>
                    </div>
                    ${h.map(u=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <strong>${u.versionTag}</strong>（${u.id}）
                            <div class="pacom-row-sub">已现场核验 ${u.verifiedCount} / ${u.deviceCount} 台 · 冻结人：${u.frozenBy} · ${u.note??""}</div>
                          </div>
                          <span class="pacom-badge pacom-badge--accent">${u.status}</span>
                        </div>`).join("")}
                  </section>
                </div>`}
      </div>
    `,a.querySelectorAll("[data-dtab]").forEach(u=>{u.addEventListener("click",()=>{t=u.dataset.dtab,m="",I="",k()})}),a.querySelectorAll("[data-pick-dev]").forEach(u=>{u.addEventListener("click",()=>{r=u.dataset.pickDev??null,k()})}),a.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{f=!f,k()}),a.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async u=>{if(!f||!S)return;const j=u.currentTarget.getBoundingClientRect(),L=Math.max(.02,Math.min(.98,(u.clientX-j.left)/j.width)),M=Math.max(.02,Math.min(.98,(u.clientY-j.top)/j.height));try{await e.updateDevicePlanPoint({deviceId:S.id,floorId:i.floorId,planVersion:S.planPoint?.planVersion??1,x:L,y:M,expectedVersion:S.version}),f=!1,m=`已更新「${S.name}」图上坐标（硬件绑定与物理安装态保持不变）`,await d()}catch(q){I=q instanceof Error?q.message:String(q),k()}}),a.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async u=>{if(u.preventDefault(),!S)return;const j=new FormData(u.currentTarget);try{await e.updateDeviceHardwareBinding({deviceId:S.id,gatewayId:S.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(j.get("protocol")),networkAddress:String(j.get("networkAddress")??""),portOrChannel:String(j.get("portOrChannel")??""),physicalInstalled:j.get("physicalInstalled")==="on",expectedVersion:S.version}),m=`已保存「${S.name}」的硬件绑定与物理安装状态`,await d()}catch(L){I=L instanceof Error?L.message:String(L),k()}}),a.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const u=await e.freezeDeliveryBatch(i.floorId,"前端系统部署发起冻结");m=`已生成冻结批次 ${u.versionTag}（核验 ${u.verifiedCount}/${u.deviceCount}）`,await d()}catch(u){I=u instanceof Error?u.message:String(u),k()}})}await d()}const J="pacom.web.e7f.leftWidth",Ie={gateway:"网关",lighting:"照明",hvac:"暖通空调",sensor:"环境传感",meter:"计量表"},Se={queued:{text:"已排队",badge:"pacom-badge--neutral"},dispatched:{text:"已下发网关",badge:"pacom-badge--accent"},verified_success:{text:"回读已确认",badge:"pacom-badge--online"},timeout:{text:"回读超时",badge:"pacom-badge--critical"},rejected:{text:"设备拒绝",badge:"pacom-badge--warning"},failed:{text:"执行失败",badge:"pacom-badge--critical"}},Ee={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:42,top:42,width:14,height:22}};function g(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function ae(a){return a.level==="all-projects"?"all":a.level==="project"?`project:${a.projectId}`:a.level==="building"?`building:${a.projectId}:${a.buildingId}`:`floor:${a.projectId}:${a.buildingId}:${a.floorId}`}async function xe(a,e,o){const t=await e.getSpatialTree(),s=e.mode==="demo",l=o.scope.canControlDevices,b=o.scope.canManageAlarms,h=o.scope.allowedZoneIds?.length?o.scope.allowedZoneIds:null;let r={level:"floor",projectId:i.projectId,buildingId:i.buildingId,floorId:i.floorId},f="devices",m="canvas",I="",d="all",k="all",S=null,O=!1;const u=new Set;let j=[],L=[],M=[],q=null,B=null,P=1,Z=0,E=0,w=Number(localStorage.getItem(J)||400);(!Number.isFinite(w)||w<320||w>680)&&(w=400);let F=null;function C(){return t.zones.filter(c=>!(r.level==="floor"&&c.floorId!==r.floorId||h&&!h.includes(c.id)))}async function T(c){r=c,B=null,k="all",u.clear(),P=1,Z=0,E=0,F&&(F(),F=null);const $=r.level==="floor"?r.floorId:i.floorId;if(r.level==="floor")try{const[n,y,p]=await Promise.all([e.getFloorDevices(r.floorId),e.listAlarms(r.floorId),e.listWorkOrders(r.floorId)]);j=n,L=y,M=p,j.some(v=>v.id===S)||(S=j[1]?.id??j[0]?.id??null,O=!1),F=e.subscribeFloorEvents(r.floorId,async v=>{v.type==="control.receipt.updated"&&q?.batchId===v.batchId&&(q=await e.getControlBatch(v.batchId)),(v.type==="telemetry.updated"||v.type==="device.connectivity")&&r.level==="floor"&&(j=await e.getFloorDevices(r.floorId)),v.type==="alarm.changed"&&r.level==="floor"&&(L=await e.listAlarms(r.floorId)),A()})}catch(n){j=[],L=[],M=[],S=null,O=!1,B=n instanceof Error?n.message:String(n)}else{O=!1;const[n,y,p]=await Promise.all([e.getFloorDevices($).catch(()=>[]),e.listAlarms($).catch(()=>[]),e.listWorkOrders($).catch(()=>[])]);j=n,L=y,M=p}W()}function z(c){return c?t.zones.find($=>$.id===c)?.name??c:"未分配逻辑区"}function U(){const c=I.trim().toLowerCase();return j.filter($=>k!=="all"&&$.logicalZoneId!==k||d!=="all"&&$.category!==d?!1:c?$.name.toLowerCase().includes(c)||$.id.toLowerCase().includes(c)||z($.logicalZoneId).toLowerCase().includes(c):!0)}async function G(c,$,n){!c.length||r.level!=="floor"||!l||(q=await e.dispatchControlBatch({floorId:r.floorId,idempotencyKey:`idem-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,targets:c.map(y=>({deviceId:y,command:$,targetValue:n}))}),A())}function A(){const c=document.activeElement,$=c?.dataset?.role,n=c&&"selectionStart"in c?c.selectionStart:null,y=c&&"selectionEnd"in c?c.selectionEnd:null,p=a.querySelector(".pacom-list")?.scrollTop??0;W();const v=a.querySelector(".pacom-list");if(v&&(v.scrollTop=p),$==="search"){const x=a.querySelector('[data-role="search"]');x&&(x.focus(),n!==null&&y!==null&&x.setSelectionRange(n,y))}}function D(){const c=a.querySelector('[data-role="canvas-viewport"]');c&&(c.style.transform=`translate(${Z}px, ${E}px) scale(${P})`);const $=a.querySelector('[data-role="canvas-hint"]');$&&($.textContent=`缩放 ${Math.round(P*100)}% · 滚轮缩放 · 拖动平移 · 双击复位`)}function Q(){const c=r,$=[{label:"全部项目",scopeVal:"all",active:c.level==="all-projects"}];if(c.level!=="all-projects"){const n=t.projects.find(y=>y.id===c.projectId);$.push({label:n?.name??"项目",scopeVal:`project:${c.projectId}`,active:c.level==="project"})}if(c.level==="building"||c.level==="floor"){const n=t.buildings.find(y=>y.id===c.buildingId);$.push({label:n?.name??"楼宇",scopeVal:`building:${c.projectId}:${c.buildingId}`,active:c.level==="building"})}if(c.level==="floor"){const n=t.floors.find(y=>y.id===c.floorId);$.push({label:n?.name??"楼层",scopeVal:ae(c),active:!0})}return`
      <nav class="pacom-crumbs" aria-label="空间层级路径">
        ${$.map((n,y)=>n.active?`<span class="pacom-crumb-current">${g(n.label)}</span>`:`<button type="button" class="pacom-crumb-btn" data-nav-scope="${g(n.scopeVal)}">${g(n.label)}</button>${y<$.length-1?'<span aria-hidden="true">/</span>':""}`).join("")}
      </nav>
    `}function de(){const c=ae(r),$=t.projects.map(p=>`<option value="project:${g(p.id)}" ${c===`project:${p.id}`?"selected":""}>项目 · ${g(p.name)}</option>`).join(""),n=t.buildings.map(p=>{const v=`building:${p.projectId}:${p.id}`;return`<option value="${g(v)}" ${c===v?"selected":""}>楼宇 · 广实2号园 / ${g(p.name)}</option>`}).join(""),y=t.floors.map(p=>{const v=o.scope.allowedFloorIds.includes(p.id),x=`floor:${i.projectId}:${p.buildingId}:${p.id}`;return`<option value="${g(x)}" ${c===x?"selected":""}>楼层 · 广实2号园 / E栋 / ${g(p.name)}${v?"":"（未授权）"}</option>`}).join("");return`
      <option value="all" ${c==="all"?"selected":""}>全部项目（${t.projects.length} 个授权园区）</option>
      <optgroup label="项目级">${$}</optgroup>
      <optgroup label="楼宇级">${n}</optgroup>
      <optgroup label="楼层级">${y}</optgroup>
    `}function pe(){if(r.level==="all-projects"){const n=j.filter(p=>p.connectivity==="online").length,y=L.filter(p=>p.status==="active").length;return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">授权项目总览（${t.projects.length}）</div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; font-size:12px;">
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">楼宇</span><strong>${t.buildings.length} 栋</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">设备在线</span><strong>${n}/${j.length}</strong></div>
            <div class="pacom-control-box" style="padding:8px;"><span class="pacom-row-sub">活跃告警</span><strong style="color:var(--pacom-status-warning);">${y} 条</strong></div>
          </div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${t.projects.map(p=>{const v=t.buildings.filter(x=>x.projectId===p.id).length;return`
                <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="project:${g(p.id)}">
                  <img src="${g(p.imageUrl??"./media/gzlab.jpg")}" alt="${g(p.name)}" style="width:100%; height:112px; object-fit:cover; border-radius:8px;" />
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${g(p.name)}</strong>
                    <span class="pacom-badge pacom-badge--accent">${v} 栋楼宇</span>
                  </div>
                  <div class="pacom-row-sub">${g(p.city??"")} · ${g(p.address??"")}</div>
                </article>`}).join("")}
        </div>
      `}const c=r;if(c.level==="project"){const n=t.projects.find(p=>p.id===c.projectId),y=t.buildings.filter(p=>p.projectId===c.projectId);return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${g(n?.name??"项目")} · 楼宇清单（${y.length}）</div>
          <div class="pacom-row-sub">${g(n?.city??"")} ${g(n?.address??"")}</div>
        </div>
        <div class="pacom-list" style="gap:10px; padding:12px;">
          ${y.map(p=>`
              <article class="pacom-control-box" style="background:#fff; cursor:pointer;" data-nav-scope="building:${g(p.projectId)}:${g(p.id)}">
                <img src="${g(p.imageUrl??"./media/building-e.png")}" alt="${g(p.name)}" style="width:100%; height:116px; object-fit:cover; border-radius:8px;" />
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <strong>${g(p.name)}</strong>
                  <span class="pacom-badge ${p.id===i.buildingId?"pacom-badge--online":"pacom-badge--neutral"}">${p.id===i.buildingId?"含 E7F 试点":"暂无交付楼层"}</span>
                </div>
                <div class="pacom-row-sub">地上 ${p.aboveFloors} 层 · 地下 ${p.belowFloors} 层 · 面积 ${p.areaSqm??"-"} m²</div>
              </article>`).join("")}
        </div>
      `}if(c.level==="building"){const n=t.buildings.find(v=>v.id===c.buildingId),y=t.floors.filter(v=>v.buildingId===c.buildingId),p=M.filter(v=>v.status!=="closed"&&v.status!=="resolved");return`
        <div class="pacom-pane-toolbar">
          <div style="font-weight:500;">${g(n?.name??"楼宇")} 概况与待办</div>
          <div class="pacom-row-sub">地上 ${n?.aboveFloors??0} 层 · 面积 ${n?.areaSqm??"-"} m² · 未结工单 ${p.length} 项</div>
        </div>
        <div class="pacom-list" style="gap:8px; padding:12px;">
          <div class="pacom-control-box">
            <strong style="font-size:13px;">楼宇待办与未结工单（${p.length}）</strong>
            ${p.length?p.map(v=>`<div class="pacom-row-sub">• ${g(v.title)}（${g(v.status)}）</div>`).join(""):'<div class="pacom-row-sub">当前楼宇无未结工单</div>'}
          </div>
          <div style="font-weight:500; font-size:13px; margin-top:4px;">选择楼层进入 2D 平面控制</div>
          ${y.length?y.map(v=>{const x=o.scope.allowedFloorIds.includes(v.id);return`
                      <div class="pacom-row" data-nav-scope="floor:${g(c.projectId)}:${g(c.buildingId)}:${g(v.id)}">
                        <div>
                          <div class="pacom-row-title">${g(n?.name??"")} ${g(v.name)}</div>
                          <div class="pacom-row-sub">${v.plan?"已上传 2D 图纸":"暂未上传图纸"}</div>
                        </div>
                        <span class="pacom-badge ${x?"pacom-badge--online":"pacom-badge--warning"}">${x?"进入楼层":"无访问权限"}</span>
                      </div>`}).join(""):'<div class="pacom-row-sub">该楼宇暂未配置试点楼层。</div>'}
        </div>
      `}if(f==="devices"){const n=U(),y=C(),p=Array.from(u);return`
        <div class="pacom-pane-toolbar">
          ${h?`<div class="pacom-info-banner">我的区域视图：仅显示当前账号获授权的 ${h.length} 个功能区及设备。</div>`:""}
          <div class="pacom-search-row">
            <input class="pacom-input" data-role="search" placeholder="搜索设备名 / ID / 区域…" value="${g(I)}" aria-label="搜索楼层设备" />
            <select class="pacom-select" data-role="category" aria-label="按设备类型筛选">
              <option value="all" ${d==="all"?"selected":""}>全部类型</option>
              <option value="lighting" ${d==="lighting"?"selected":""}>照明</option>
              <option value="hvac" ${d==="hvac"?"selected":""}>暖通空调</option>
              <option value="sensor" ${d==="sensor"?"selected":""}>环境传感</option>
              <option value="gateway" ${d==="gateway"?"selected":""}>网关</option>
            </select>
          </div>
          ${y.length>0&&!B?`<div class="pacom-zone-pills" role="group" aria-label="按功能区筛选">
                  <button type="button" class="pacom-zone-pill ${k==="all"?"is-active":""}" data-filter-zone="all">全部区域</button>
                  ${y.map(v=>`<button type="button" class="pacom-zone-pill ${k===v.id?"is-active":""}" data-filter-zone="${g(v.id)}">${g(v.name.replace(/^7F\s*/,""))}</button>`).join("")}
                </div>`:""}
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; color:var(--pacom-text-secondary);">
            <span>当前可见 ${n.length} 台设备</span>
            <span>${l?`已勾选 ${p.length} 台`:"只读模式"}</span>
          </div>
        </div>
        <div class="pacom-list">
          ${B?`<div class="pacom-alert-banner">${g(B)}</div>`:n.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">没有匹配的设备</div>':n.map(v=>{const x=v.id===S&&O,V=u.has(v.id),_=v.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline",Y=v.category==="lighting"?`亮度 ${v.telemetry.dimming?.value??"--"}%`:v.category==="hvac"?`设定 ${v.telemetry.setpoint?.value??"--"}°C`:v.category==="sensor"?`${v.telemetry.temp?.value??"--"}°C · CO₂ ${v.telemetry.co2?.value??"--"}`:v.hardwareBinding?.networkAddress??"未绑定";return`
                        <div class="pacom-row ${x?"is-selected":""}" data-select-device="${g(v.id)}">
                          <div class="pacom-row-main">
                            ${l?`<input type="checkbox" data-check-device="${g(v.id)}" ${V?"checked":""} style="margin-top:3px;" aria-label="勾选 ${g(v.name)}" />`:""}
                            <div style="min-width:0;">
                              <div class="pacom-row-title">${g(v.name)}</div>
                              <div class="pacom-row-sub">${g(z(v.logicalZoneId))} · ${g(Ie[v.category])}</div>
                            </div>
                          </div>
                          <span class="pacom-badge ${v.connectivity==="online"?"pacom-badge--online":"pacom-badge--neutral"}">
                            <span class="pacom-dot ${_}"></span>${g(Y)}
                          </span>
                        </div>`}).join("")}
        </div>
        ${l&&p.length>0?`
            <div class="pacom-batch-bar">
              <span style="font-size:12px;">显式批量目标：<strong>${p.length} 台</strong></span>
              <div style="display:flex; gap:6px;">
                <button type="button" class="pacom-btn" data-batch-cmd="lighting.power" data-batch-val="true">批量开启</button>
                <button type="button" class="pacom-btn pacom-btn--primary" data-batch-cmd="lighting.power" data-batch-val="false">批量关闭</button>
              </div>
            </div>`:""}
      `}return f==="alarms"?`
        <div class="pacom-pane-toolbar"><div style="font-weight:500;">当前楼层告警（${L.length}）</div></div>
        <div class="pacom-list">
          ${L.length===0?'<div class="pacom-row-sub" style="padding:24px; text-align:center;">当前楼层无告警记录</div>':L.map(n=>`
                    <div class="pacom-control-box" style="margin-bottom:6px;">
                      <div style="display:flex; justify-content:space-between; align-items:center;">
                        <strong style="font-size:13px;">${g(n.title)}</strong>
                        <span class="pacom-badge ${n.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">${n.status==="active"?"待确认":"已确认"}</span>
                      </div>
                      <div style="font-size:12px; color:var(--pacom-text-secondary);">${g(n.message)}</div>
                      ${n.status==="active"?`<div><button type="button" class="pacom-btn" data-ack-alarm="${g(n.id)}" ${b?"":'disabled title="当前角色无告警处理权限"'}>确认告警</button></div>`:""}
                    </div>`).join("")}
        </div>
      `:`
      <div class="pacom-pane-toolbar">
        <div style="font-weight:500;">联调契约监视器（仅演示模式可见）</div>
      </div>
      <div class="pacom-list">
        ${(e instanceof ce?e.traces:[]).slice(0,12).map(n=>`
            <div class="pacom-control-box" style="margin-bottom:6px;">
              <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
                <span class="pacom-badge ${n.channel==="WS"?"pacom-badge--accent":"pacom-badge--neutral"}">${n.channel}</span>
                <code style="font-size:11px; flex:1; overflow:hidden; text-overflow:ellipsis;">${g(n.endpoint)}</code>
              </div>
              <pre class="pacom-code">${g(JSON.stringify(n.request?{request:n.request,response:n.response}:n.response,null,2))}</pre>
            </div>`).join("")}
      </div>
    `}function ue(){const c=r;if(c.level==="all-projects"||c.level==="project"){const p=c.level==="project"?t.projects.find(x=>x.id===c.projectId):t.projects[0],v=t.buildings.filter(x=>!p||x.projectId===p.id);return`
        <div class="pacom-canvas-stage" style="display:flex; align-items:center; justify-content:center; padding:24px; cursor:default;">
          <div style="position:relative; width:min(760px, 94%); border-radius:16px; overflow:hidden; box-shadow:0 12px 32px rgba(15,23,42,0.14); background:#fff;">
            <img src="${g(p?.imageUrl??"./media/gzlab.jpg")}" alt="园区俯瞰" style="width:100%; height:440px; object-fit:cover; display:block;" />
            ${c.level==="all-projects"?t.projects.map((x,V)=>`
                      <button type="button" class="pacom-pin is-selected" style="left:${V===0?48:26}%; top:${V===0?52:34}%;" data-nav-scope="project:${g(x.id)}">
                        <span>${g(x.name)}</span>
                      </button>`).join(""):v.map((x,V)=>`
                      <button type="button" class="pacom-pin is-selected" style="left:${V===0?56:38}%; top:${V===0?44:62}%;" data-nav-scope="building:${g(x.projectId)}:${g(x.id)}">
                        <span>${g(x.name)}（点击查看整栋）</span>
                      </button>`).join("")}
          </div>
        </div>
      `}if(c.level==="building"){const p=t.buildings.find(x=>x.id===c.buildingId),v=t.floors.filter(x=>x.buildingId===c.buildingId);return`
        ${v.length?`
            <nav class="pacom-floor-rail" aria-label="整栋楼层选择轨道">
              <button type="button" class="pacom-floor-btn is-active" title="整栋视图">栋</button>
              ${v.map(x=>`<button type="button" class="pacom-floor-btn ${o.scope.allowedFloorIds.includes(x.id)?"":"is-locked"}" data-nav-scope="floor:${g(c.projectId)}:${g(c.buildingId)}:${g(x.id)}" title="${g(x.name)}">${g(x.name.replace("F",""))}</button>`).join("")}
            </nav>`:""}
        <div class="pacom-canvas-tools" aria-label="画布工具">
          <button type="button" class="pacom-tool-btn" data-zoom="reset" title="复位视图" aria-label="复位视图">⟲</button>
          <div class="pacom-tool-divider" aria-hidden="true"></div>
          <button type="button" class="pacom-tool-btn" data-zoom="in" title="放大" aria-label="放大">＋</button>
          <button type="button" class="pacom-tool-btn" data-zoom="out" title="缩小" aria-label="缩小">－</button>
        </div>
        <div class="pacom-canvas-stage" data-role="canvas-stage">
          <div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${Z}px, ${E}px) scale(${P});">
            <img class="pacom-plan-img" src="${g(p?.imageUrl??"./media/building-e.png")}" alt="${g(p?.name??"楼宇")} 整栋实景图" />
          </div>
        </div>
        <div class="pacom-canvas-hint" data-role="canvas-hint">缩放 ${Math.round(P*100)}% · 滚轮缩放 · 拖动平移 · 双击复位</div>
      `}const $=t.floors.find(p=>p.id===c.floorId),n=t.floors.filter(p=>p.buildingId===c.buildingId),y=C();return`
      <nav class="pacom-floor-rail" aria-label="楼层选择轨道">
        <button type="button" class="pacom-floor-btn" data-nav-scope="building:${g(c.projectId)}:${g(c.buildingId)}" title="返回整栋楼宇">栋</button>
        ${n.map(p=>{const v=o.scope.allowedFloorIds.includes(p.id);return`<button type="button" class="pacom-floor-btn ${p.id===c.floorId?"is-active":""} ${v?"":"is-locked"}"
              data-nav-scope="floor:${g(c.projectId)}:${g(c.buildingId)}:${g(p.id)}" title="${g(p.name)}${v?"":"（无权限）"}">
              ${g(p.name.replace("F",""))}
            </button>`}).join("")}
      </nav>

      <div class="pacom-canvas-tools" aria-label="画布工具">
        <button type="button" class="pacom-tool-btn" data-zoom="reset" title="复位视图" aria-label="复位视图">⟲</button>
        <div class="pacom-tool-divider" aria-hidden="true"></div>
        <button type="button" class="pacom-tool-btn" data-zoom="in" title="放大" aria-label="放大">＋</button>
        <button type="button" class="pacom-tool-btn" data-zoom="out" title="缩小" aria-label="缩小">－</button>
      </div>

      <div class="pacom-canvas-stage" data-role="canvas-stage">
        ${B?`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                <div class="pacom-alert-banner">${g(B)}（已严格保留当前楼层上下文，不静默跳转到其他楼层）</div>
              </div>`:`<div class="pacom-canvas-viewport" data-role="canvas-viewport" style="transform: translate(${Z}px, ${E}px) scale(${P});">
                <div class="pacom-plan-wrap">
                  <img class="pacom-plan-img" src="${g($?.plan?.imageUrl??"./media/7F.webp")}" alt="E栋 ${g($?.name??"7F")} 平面图" />
                  ${y.map(p=>{const v=Ee[p.id];if(!v)return"";const x=k===p.id;return`
                        <button type="button" class="pacom-zone-hotspot ${x?"is-active":""}"
                          style="left:${v.left}%; top:${v.top}%; width:${v.width}%; height:${v.height}%;"
                          data-filter-zone="${g(x?"all":p.id)}"
                          title="${g(p.name)}（点击筛选该功能区设备）">
                          <span class="pacom-zone-tag">${g(p.name.replace(/^7F\s*/,""))}</span>
                        </button>`}).join("")}
                  ${j.filter(p=>p.planPoint).map(p=>{const v=k!=="all"&&p.logicalZoneId!==k;return`
                        <button type="button" class="pacom-pin ${p.id===S&&O?"is-selected":""} ${p.connectivity==="offline"?"pacom-pin--offline":""} ${v?"pacom-pin--dimmed":""}"
                          style="left:${(p.planPoint.x*100).toFixed(2)}%; top:${(p.planPoint.y*100).toFixed(2)}%;"
                          data-pin-device="${g(p.id)}" title="${g(p.name)}">
                          <span class="pacom-dot ${p.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                          <span>${g(p.name.slice(0,8))}</span>
                        </button>`}).join("")}
                </div>
              </div>`}
      </div>

      ${B?"":`<div class="pacom-canvas-hint" data-role="canvas-hint">缩放 ${Math.round(P*100)}% · 滚轮缩放 · 拖动平移 · 双击复位</div>`}
      ${me()}
    `}function me(){if(r.level!=="floor"||!O)return"";const c=j.find(v=>v.id===S);if(!c)return"";const $=c.category==="lighting",n=c.category==="hvac",y=Number(c.telemetry.dimming?.value??50),p=Number(c.telemetry.setpoint?.value??24);return`
      <aside class="pacom-drawer" aria-label="设备详情与控制">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${g(c.name)}</h2>
            <div class="pacom-row-sub">${g(c.id)} · v${c.version}</div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="pacom-badge ${c.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">
              ${c.connectivity==="online"?"在线":"离线"}
            </span>
            <button type="button" class="pacom-drawer-close" data-role="close-drawer" aria-label="关闭设备详情" title="关闭（Esc）">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>
            </button>
          </div>
        </div>

        <div class="pacom-kv-grid">
          <span class="pacom-kv-label">逻辑区域</span><span>${g(z(c.logicalZoneId))}</span>
          <span class="pacom-kv-label">图上点位</span><span>${c.planPoint?`x=${c.planPoint.x.toFixed(2)}, y=${c.planPoint.y.toFixed(2)} (图 v${c.planPoint.planVersion})`:"未标点"}</span>
          <span class="pacom-kv-label">物理安装</span><span>${c.physicalInstalled?"现场已确认":"待现场复核"}</span>
          <span class="pacom-kv-label">硬件绑定</span><span>${c.hardwareBinding?`${c.hardwareBinding.protocol.toUpperCase()} · ${c.hardwareBinding.networkAddress}`:"未绑定"}</span>
        </div>

        ${$||n?`
            <div class="pacom-control-box">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:500; font-size:13px;">实时控制（网关逐设备回读）</span>
                ${l?"":'<span class="pacom-badge pacom-badge--neutral">只读</span>'}
              </div>
              ${c.connectivity==="offline"?'<div class="pacom-row-sub" style="color:var(--pacom-status-warning);">当前设备离线，下发后将返回网关回读超时回执。</div>':""}
              ${$?`
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="true" ${l?"":"disabled"}>开灯</button>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="lighting.power" data-ctrl-val="false" ${l?"":"disabled"}>关灯</button>
                  </div>
                  <label style="font-size:12px; display:flex; flex-direction:column; gap:4px;">
                    亮度目标：<strong>${y}%</strong>
                    <input type="range" min="0" max="100" step="10" value="${y}" data-ctrl-slider="lighting.dimming" ${l?"":"disabled"} />
                  </label>`:`
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="true" ${l?"":"disabled"}>开机</button>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.power" data-ctrl-val="false" ${l?"":"disabled"}>关机</button>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span style="font-size:12px;">设定温度：</span>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${p-.5}" ${l?"":"disabled"}>-0.5°C</button>
                    <strong>${p.toFixed(1)}°C</strong>
                    <button type="button" class="pacom-btn" data-ctrl-cmd="hvac.setpoint" data-ctrl-val="${p+.5}" ${l?"":"disabled"}>+0.5°C</button>
                  </div>`}
            </div>`:""}

        ${q?`
            <div class="pacom-control-box">
              <div style="font-size:12px; font-weight:500;">最近批次：<code>${g(q.batchId)}</code></div>
              <div class="pacom-receipt-list">
                ${q.receipts.map(v=>{const x=Se[v.status]??{text:v.status,badge:"pacom-badge--neutral"};return`
                      <div class="pacom-receipt-item">
                        <div>
                          <div><strong>${g(v.deviceId)}</strong> · ${g(v.command)} → ${g(v.targetValue)}</div>
                          ${v.errorMessage?`<div style="color:var(--pacom-status-critical);">${g(v.errorMessage)}</div>`:""}
                        </div>
                        <span class="pacom-badge ${x.badge}">${x.text}</span>
                      </div>`}).join("")}
              </div>
            </div>`:""}
      </aside>
    `}function te(c){if(c==="all")return{level:"all-projects"};const $=c.split(":");return $[0]==="project"&&$[1]?{level:"project",projectId:$[1]}:$[0]==="building"&&$[1]&&$[2]?{level:"building",projectId:$[1],buildingId:$[2]}:$[0]==="floor"&&$[1]&&$[2]&&$[3]?{level:"floor",projectId:$[1],buildingId:$[2],floorId:$[3]}:{level:"all-projects"}}function W(){const c=L.filter($=>$.status==="active").length;a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
              <h1 class="pacom-title">首页</h1>
              ${Q()}
            </div>
            <div class="pacom-header-meta">
              ${s?'<span class="pacom-badge pacom-badge--neutral"><span class="pacom-dot pacom-dot--offline"></span>演示数据</span>':'<span class="pacom-badge pacom-badge--online"><span class="pacom-dot pacom-dot--online"></span>实时连接</span>'}
              <span class="pacom-badge pacom-badge--neutral">${g(o.roleLabel)}</span>
            </div>
          </div>

          <div class="pacom-header-toolbar">
            <div class="pacom-toolbar-left">
              <div class="pacom-scope-pill" title="项目 / 楼宇 / 楼层三级范围选择器">
                <select data-role="scope-select" aria-label="选择查看范围">
                  ${de()}
                </select>
                <span class="pacom-scope-chevron">▾</span>
              </div>

              ${r.level==="floor"?`
                  <div class="pacom-tabs" role="tablist">
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${f==="devices"}" data-tab="devices">设备与控制</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${f==="alarms"}" data-tab="alarms">
                      告警 ${c>0?`<span class="pacom-badge pacom-badge--warning">${c}</span>`:""}
                    </button>
                    ${s?`<button type="button" class="pacom-tab" role="tab" aria-selected="${f==="handoff"}" data-tab="handoff">联调契约</button>`:""}
                  </div>`:""}
            </div>

            <div class="pacom-tabs pacom-mobile-view-switch" role="group" aria-label="窄屏视图切换">
              <button type="button" class="pacom-tab" aria-selected="${m==="list"}" data-mobile-pane-btn="list">列表</button>
              <button type="button" class="pacom-tab" aria-selected="${m==="canvas"}" data-mobile-pane-btn="canvas">平面图</button>
            </div>
          </div>
        </header>

        <section class="pacom-split" data-mobile-pane="${m}">
          <aside class="pacom-left-pane" style="--pacom-sidebar-width:${w}px;">
            ${pe()}
          </aside>
          <div class="pacom-splitter" role="separator" tabindex="0" aria-orientation="vertical" aria-label="调整左右栏宽度" data-role="splitter"></div>
          <main class="pacom-right-pane">
            ${ue()}
          </main>
        </section>
      </div>
    `,ve()}function ve(){a.querySelector('[data-role="scope-select"]')?.addEventListener("change",n=>{T(te(n.currentTarget.value))}),a.querySelectorAll("[data-nav-scope]").forEach(n=>{n.addEventListener("click",()=>{n.dataset.navScope&&T(te(n.dataset.navScope))})}),a.querySelectorAll("[data-tab]").forEach(n=>{n.addEventListener("click",()=>{f=n.dataset.tab,W()})}),a.querySelectorAll("[data-mobile-pane-btn]").forEach(n=>{n.addEventListener("click",()=>{m=n.dataset.mobilePaneBtn,W()})}),a.querySelector('[data-role="search"]')?.addEventListener("input",n=>{I=n.currentTarget.value,A()}),a.querySelector('[data-role="category"]')?.addEventListener("change",n=>{d=n.currentTarget.value,W()}),a.querySelectorAll("[data-filter-zone]").forEach(n=>{n.addEventListener("click",y=>{y.stopPropagation(),k=n.dataset.filterZone??"all",W()})}),a.querySelectorAll("[data-select-device]").forEach(n=>{n.addEventListener("click",y=>{y.target.tagName!=="INPUT"&&(S=n.dataset.selectDevice??null,O=!0,m="canvas",W())})}),a.querySelectorAll("[data-check-device]").forEach(n=>{n.addEventListener("change",()=>{const y=n.dataset.checkDevice;y&&(n.checked?u.add(y):u.delete(y),W())})}),a.querySelectorAll("[data-pin-device]").forEach(n=>{n.addEventListener("click",y=>{y.stopPropagation(),S=n.dataset.pinDevice??null,O=!0,W()})}),a.querySelector('[data-role="close-drawer"]')?.addEventListener("click",()=>{O=!1,W()}),a.querySelectorAll("[data-ctrl-cmd]").forEach(n=>{n.addEventListener("click",()=>{if(!S||!n.dataset.ctrlCmd)return;const y=n.dataset.ctrlVal??"",p=y==="true"?!0:y==="false"?!1:Number(y);G([S],n.dataset.ctrlCmd,p)})}),a.querySelector("[data-ctrl-slider]")?.addEventListener("change",n=>{const y=n.currentTarget;!S||!y.dataset.ctrlSlider||G([S],y.dataset.ctrlSlider,Number(y.value))}),a.querySelectorAll("[data-batch-cmd]").forEach(n=>{n.addEventListener("click",()=>{const y=Array.from(u),p=n.dataset.batchVal??"",v=p==="true"?!0:p==="false"?!1:p;G(y,n.dataset.batchCmd,v)})}),a.querySelectorAll("[data-ack-alarm]").forEach(n=>{n.addEventListener("click",async()=>{!n.dataset.ackAlarm||r.level!=="floor"||!b||(await e.acknowledgeAlarm(n.dataset.ackAlarm,"首页快速确认"),L=await e.listAlarms(r.floorId),W())})}),a.querySelectorAll("[data-zoom]").forEach(n=>{n.addEventListener("click",()=>{const y=n.dataset.zoom;y==="in"?P=Math.min(2.6,Number((P+.2).toFixed(2))):y==="out"?P=Math.max(.6,Number((P-.2).toFixed(2))):(P=1,Z=0,E=0),D()})});const c=a.querySelector('[data-role="canvas-stage"]');if(c&&!B){let n=!1,y=0,p=0,v=0,x=0;c.addEventListener("pointerdown",_=>{_.target?.closest("button, input, select, .pacom-drawer")||(n=!0,y=_.clientX,p=_.clientY,v=Z,x=E,c.classList.add("is-panning"),c.setPointerCapture?.(_.pointerId))}),c.addEventListener("pointermove",_=>{n&&(Z=v+(_.clientX-y),E=x+(_.clientY-p),D())});const V=()=>{n&&(n=!1,c.classList.remove("is-panning"))};c.addEventListener("pointerup",V),c.addEventListener("pointercancel",V),c.addEventListener("wheel",_=>{_.preventDefault();const Y=_.deltaY<0?.12:-.12;P=Math.max(.6,Math.min(2.6,Number((P+Y).toFixed(2)))),D()},{passive:!1}),c.addEventListener("dblclick",_=>{_.target?.closest("button")||(P=1,Z=0,E=0,D())})}const $=a.querySelector('[data-role="splitter"]');$?.addEventListener("pointerdown",n=>{const y=n.clientX,p=w;$.classList.add("is-dragging");const v=V=>{w=Math.max(320,Math.min(640,p+(V.clientX-y)));const _=a.querySelector(".pacom-left-pane");_&&_.style.setProperty("--pacom-sidebar-width",`${w}px`)},x=()=>{$.classList.remove("is-dragging"),localStorage.setItem(J,String(Math.round(w))),window.removeEventListener("pointermove",v),window.removeEventListener("pointerup",x)};window.addEventListener("pointermove",v),window.addEventListener("pointerup",x)}),$?.addEventListener("keydown",n=>{if(n.key==="ArrowLeft")n.preventDefault(),w=Math.max(320,w-16);else if(n.key==="ArrowRight")n.preventDefault(),w=Math.min(640,w+16);else if(n.key==="Home")n.preventDefault(),w=320;else if(n.key==="End")n.preventDefault(),w=640;else return;localStorage.setItem(J,String(Math.round(w)));const y=a.querySelector(".pacom-left-pane");y&&y.style.setProperty("--pacom-sidebar-width",`${w}px`)})}await T(r)}async function ke(a,e,o){let t=await e.listScenes(i.floorId),s=null,l="";const b=e.subscribeFloorEvents(i.floorId,async r=>{r.type==="control.receipt.updated"&&s?.batchId===r.batchId&&(s=await e.getControlBatch(r.batchId),h())});function h(){a.innerHTML=`
      <div class="pacom-content-page">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h1 class="pacom-title">场景</h1>
          <span class="pacom-badge ${o.scope.canControlDevices?"pacom-badge--online":"pacom-badge--warning"}">
            ${o.scope.canControlDevices?"可触发并核验逐设备回执":"只读"}
          </span>
        </div>

        ${l?`<div class="pacom-alert-banner">${l}</div>`:""}

        <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:12px;">
          ${t.map(r=>`
              <section class="pacom-card">
                <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                  <strong style="font-size:15px;">${r.name}</strong>
                  <span class="pacom-badge pacom-badge--neutral">${r.actions.length} 个动作</span>
                </div>
                <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary);">${r.description}</p>
                <div class="pacom-row-sub">计划：${r.scheduleSummary??"手动"} · 最近执行：${r.lastExecutedAt?r.lastExecutedAt.slice(0,19).replace("T"," "):"尚未执行"}</div>
                <div style="display:flex; justify-content:flex-end;">
                  <button class="pacom-btn pacom-btn--primary" data-exec-scene="${r.id}">手动执行场景</button>
                </div>
              </section>`).join("")}
        </div>

        ${s?`
            <section class="pacom-card">
              <h2 class="pacom-drawer-title">场景执行逐设备回读回执（批次 ${s.batchId}）</h2>
              <div class="pacom-receipt-list">
                ${s.receipts.map(r=>`
                    <div class="pacom-receipt-item">
                      <div>
                        <strong>${r.deviceId}</strong> · ${r.command} → ${String(r.targetValue)}
                        ${r.errorMessage?`<div style="color:var(--pacom-status-critical);">${r.errorMessage}</div>`:""}
                      </div>
                      <span class="pacom-badge ${r.status==="verified_success"?"pacom-badge--online":r.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${r.status}</span>
                    </div>`).join("")}
              </div>
            </section>`:""}

        <section class="pacom-card">
          <h2 class="pacom-drawer-title">新建自定义场景</h2>
          <form data-role="new-scene-form" style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px;">
            <input class="pacom-input" name="name" placeholder="场景名称（如：实验区午休调光）" required />
            <input class="pacom-input" name="description" placeholder="动作说明" required />
            <button class="pacom-btn pacom-btn--primary" type="submit">保存场景</button>
          </form>
        </section>
      </div>
    `,a.querySelectorAll("[data-exec-scene]").forEach(r=>{r.addEventListener("click",async()=>{l="";try{s=await e.executeScene(r.dataset.execScene),t=await e.listScenes(i.floorId),h()}catch(f){l=f instanceof Error?f.message:String(f),h()}})}),a.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async r=>{r.preventDefault();const f=new FormData(r.currentTarget);try{await e.createScene({projectId:i.projectId,floorId:i.floorId,name:String(f.get("name")??""),description:String(f.get("description")??""),actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:50}]}),t=await e.listScenes(i.floorId),h()}catch(m){l=m instanceof Error?m.message:String(m),h()}})}h(),window.addEventListener("hashchange",()=>b(),{once:!0})}const oe=[{id:"calendar",label:"运行日历"},{id:"weather_area",label:"气象与面积"},{id:"lighting",label:"照明策略"},{id:"hvac",label:"暖通策略"},{id:"metering_carbon",label:"计量与碳排"},{id:"alarm_rules",label:"告警规则"},{id:"templates",label:"参数模板"}];async function Ae(a,e,o){let t="calendar",s=await e.getRuntimeSettings(i.projectId),l=s.calendar.workdayStart,b=s.calendar.workdayEnd,h=[],r="",f="";function m(){const I=s.rules.filter(d=>d.category===t);a.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <h1 class="pacom-title">运行设置</h1>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">项目范围：广实2号园</span>
              <span class="pacom-badge ${o.scope.canEditDeployment?"pacom-badge--online":"pacom-badge--warning"}">
                ${o.scope.canEditDeployment?"可修改并下发配置":"当前角色只读"}
              </span>
            </div>
          </div>
          <div class="pacom-header-toolbar">
            <div class="pacom-tabs" role="tablist">
              ${oe.map(d=>`<button class="pacom-tab" role="tab" aria-selected="${t===d.id}" data-scat="${d.id}">${d.label}</button>`).join("")}
            </div>
          </div>
        </header>

        ${r?`<div class="pacom-badge pacom-badge--online" style="height:auto; padding:8px 12px;">${r}</div>`:""}
        ${f?`<div class="pacom-alert-banner">${f}</div>`:""}

        <div class="pacom-content-page" style="padding:0;">
          ${t==="calendar"?`
              <section class="pacom-card">
                <h2 class="pacom-drawer-title">项目工作时间日历（版本 v${s.calendar.version}）</h2>
                <div style="display:flex; align-items:flex-end; gap:12px; flex-wrap:wrap;">
                  <label class="pacom-field">
                    <span>上班时间</span>
                    <input class="pacom-input" type="time" data-cal-start value="${l}" />
                  </label>
                  <label class="pacom-field">
                    <span>下班时间</span>
                    <input class="pacom-input" type="time" data-cal-end value="${b}" />
                  </label>
                  <button class="pacom-btn" data-preview-impact="1">保存前预览受影响规则</button>
                  <button class="pacom-btn pacom-btn--primary" data-save-cal="1">保存并校验版本</button>
                </div>
                <div class="pacom-row-sub">夜间巡检窗口：${s.calendar.nightGuardStart} – ${s.calendar.nightGuardEnd}（若下班时间晚于 21:30 将自动提示交叠冲突）</div>

                ${h.length>0?`
                    <div style="margin-top:8px; display:flex; flex-direction:column; gap:6px;">
                      <strong style="font-size:13px;">受影响的定时与夜间规则预览（${h.length} 条）</strong>
                      ${h.map(d=>`
                          <div class="pacom-receipt-item">
                            <div>
                              <strong>${d.ruleName}</strong>
                              <div class="pacom-row-sub">原窗口：${d.beforeWindow} → 新窗口：${d.afterWindow}</div>
                              ${d.conflictWarning?`<div style="color:var(--pacom-status-critical);">${d.conflictWarning}</div>`:""}
                            </div>
                            <span class="pacom-badge ${d.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">${d.conflictWarning?"交叠警告":"自动跟随"}</span>
                          </div>`).join("")}
                    </div>`:""}
              </section>`:`
              <section class="pacom-card">
                <h2 class="pacom-drawer-title">${oe.find(d=>d.id===t)?.label}（${I.length}）</h2>
                ${I.map(d=>`
                    <div class="pacom-receipt-item">
                      <div>
                        <strong>${d.name}</strong> <span class="pacom-row-sub">v${d.version} · ${d.scopeLabel}</span>
                        <div class="pacom-row-sub">${d.summary} · 回执：${d.receiptSummary??"-"}</div>
                      </div>
                      <button class="pacom-btn ${d.enabled?"pacom-btn--primary":""}" data-toggle-rule="${d.id}" data-rule-ver="${d.version}" data-rule-next="${!d.enabled}">
                        ${d.enabled?"已启用（点击停用）":"已停用（点击启用）"}
                      </button>
                    </div>`).join("")}
              </section>`}
        </div>
      </div>
    `,a.querySelectorAll("[data-scat]").forEach(d=>{d.addEventListener("click",()=>{t=d.dataset.scat,r="",f="",m()})}),a.querySelector("[data-cal-start]")?.addEventListener("change",d=>{l=d.currentTarget.value}),a.querySelector("[data-cal-end]")?.addEventListener("change",d=>{b=d.currentTarget.value}),a.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{f="",h=await e.previewCalendarImpact(i.projectId,l,b),m()}),a.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{f="";try{const d=await e.saveWorkCalendar(i.projectId,l,b,s.calendar.version);s={...s,calendar:d},r=`运行日历已保存至 v${d.version}（${d.workdayStart} - ${d.workdayEnd}）`,h=[],m()}catch(d){f=d instanceof Error?d.message:String(d),m()}}),a.querySelectorAll("[data-toggle-rule]").forEach(d=>{d.addEventListener("click",async()=>{f="";try{await e.toggleRuntimeRule(d.dataset.toggleRule,d.dataset.ruleNext==="true",Number(d.dataset.ruleVer)),s=await e.getRuntimeSettings(i.projectId),r="规则状态与版本回执已更新",m()}catch(k){f=k instanceof Error?k.message:String(k),m()}})})}m()}const se="pacom.web.sidebar.collapsed",je=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,le=[{id:"home",label:"首页",iconSvg:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/>'},{id:"analysis",label:"数据分析",iconSvg:'<path d="M4 19h16"/><path d="M7 16v-5"/><path d="M12 16V7"/><path d="M17 16v-8"/>'},{id:"alarms",label:"告警工单",iconSvg:'<path d="M12 4 3 19h18L12 4Z"/><path d="M12 10v4"/><path d="M12 17h.01"/>'},{id:"scenes",label:"场景",iconSvg:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3"/>'},{id:"settings",label:"运行设置",iconSvg:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2.5"/><circle cx="15" cy="17" r="2.5"/>'},{id:"deployment",label:"系统部署",iconSvg:'<rect x="3" y="4" width="7" height="6" rx="1.5"/><rect x="14" y="4" width="7" height="6" rx="1.5"/><rect x="8.5" y="14" width="7" height="6" rx="1.5"/><path d="M6.5 10v2h11v-2M12 12v2"/>'}],ee={home:"首页",analysis:"数据分析",alarms:"告警工单",scenes:"场景",settings:"运行设置",deployment:"系统部署",account:"机构与账户"};function ie(){const a=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return a in ee?a:"home"}function H(a){return a.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function Le(a,e,o,t){a.classList.remove("bare-login");let s=o,l=ie(),b=localStorage.getItem(se)==="1",h=!1,r=!1,f="";const m=e.mode==="demo"&&typeof e.switchDemoRole=="function";function I(){const E=f.trim(),w=E?le.filter(F=>F.label.includes(E)):le;return w.length?w.map(F=>`
        <button type="button" class="pacom-nav-item" data-route="${F.id}" aria-current="${l===F.id?"page":"false"}" title="${F.label}">
          <svg class="pacom-nav-icon" viewBox="0 0 24 24" aria-hidden="true">${F.iconSvg}</svg>
          <span class="pacom-nav-label">${F.label}</span>
        </button>`).join(""):'<div class="pacom-nav-empty">没有匹配的工作区</div>'}function d(){if(!r)return"";const E=s.displayName.slice(0,1)||"U";return`
      <div class="pacom-org-popover ${b?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab.jpg" alt="" /></span>
          <span class="pacom-pop-text">
            <b>广州国家实验室</b>
            <small>${H(s.roleLabel)}${m?" · 演示":""}</small>
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
          <span class="pacom-pop-avatar" aria-hidden="true">${H(E)}</span>
          <span class="pacom-pop-text">
            <b>${H(s.displayName)}</b>
            <small>我的账户与权限范围</small>
          </span>
        </button>

        ${m?`
            <hr class="pacom-pop-hr" />
            <div class="pacom-pop-section-label">演示角色切换（RBAC 权限预览）</div>
            <div class="pacom-pop-role-list">
              ${Object.keys(N).map(w=>{const F=N[w],C=w===s.role;return`
                    <button type="button" class="pacom-pop-item" role="menuitemradio" aria-checked="${C}" data-pop-role="${w}">
                      <span class="pacom-pop-text">
                        <b>${H(F.roleLabel)}</b>
                        <small>${H(F.displayName)}</small>
                      </span>
                      ${C?'<svg class="pacom-pop-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>':""}
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
    `}async function k(E){switch(document.title=`${ee[l]} · PACOM Station`,l){case"home":await xe(E,e,s);return;case"analysis":await we(E,e);return;case"alarms":await fe(E,e,s);return;case"scenes":await ke(E,e,s);return;case"settings":await Ae(E,e,s);return;case"deployment":await $e(E,e,s);return;case"account":await be(E,e,s,w=>{s=w,M(!0)},S);return}}async function S(){r=!1,h=!1,Z();try{await e.logout()}finally{window.location.hash="#login",t()}}function O(){const E=a.querySelector('[data-role="nav-list"]');E&&(E.innerHTML=I(),j())}function u(){a.querySelector('[data-role="org-popover"]')?.remove();const E=a.querySelector('[data-role="org-menu-btn"]');if(E&&E.setAttribute("aria-expanded",String(r)),!r)return;const w=document.createElement("div");w.innerHTML=d().trim();const F=w.firstElementChild;F&&(a.appendChild(F),L())}function j(){a.querySelectorAll("[data-route]").forEach(E=>{E.addEventListener("click",()=>{const w=E.dataset.route;w===l&&!h||(l=w,h=!1,r=!1,window.location.hash=`#${l}`,M(!0))})})}function L(){a.querySelectorAll('[data-pop-act="go-account"]').forEach(E=>{E.addEventListener("click",()=>{r=!1,h=!1,l="account",window.location.hash="#account",M(!0)})}),a.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{S()}),a.querySelectorAll("[data-pop-role]").forEach(E=>{E.addEventListener("click",async()=>{if(!e.switchDemoRole)return;const w=E.dataset.popRole;r=!1,h=!1,s=await e.switchDemoRole(w),await M(!0)})})}async function M(E){const w=a.querySelector('[data-role="main-stage"]');if(!E&&w){const C=a.querySelector(".pacom-nav-rail");C&&(C.classList.toggle("is-collapsed",b),C.classList.toggle("is-mobile-open",h));const T=a.querySelector('[data-role="mobile-scrim"]');T&&T.classList.toggle("is-open",h),u();return}a.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
          <h1 class="pacom-mobile-title">${ee[l]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${H(s.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${h?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${b?"is-collapsed":""} ${h?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${je}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${b?"展开侧栏":"收起侧栏"}" aria-label="${b?"展开侧栏":"收起侧栏"}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                ${b?'<path d="m9 6 6 6-6 6"/>':'<path d="m15 6-6 6 6 6"/>'}
              </svg>
            </button>
          </div>

          <div class="pacom-nav-search-wrap">
            <svg class="pacom-nav-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>
            </svg>
            <input class="pacom-nav-search" data-role="nav-search" type="search" placeholder="搜索工作区…" value="${H(f)}" aria-label="搜索工作区" />
          </div>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${I()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${l==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${r}" title="广州国家实验室 · ${H(s.displayName)}">
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
    `,a.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{b=!b,r=!1,localStorage.setItem(se,b?"1":"0");const C=a.querySelector(".pacom-nav-rail"),T=a.querySelector('[data-role="toggle-sidebar"]');C&&C.classList.toggle("is-collapsed",b),T&&(T.title=b?"展开侧栏":"收起侧栏",T.setAttribute("aria-label",T.title),T.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${b?'<path d="m9 6 6 6-6 6"/>':'<path d="m15 6-6 6 6 6"/>'}</svg>`),u()}),a.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{h=!h,M(!1)}),a.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{h=!1,r=!1,M(!1)}),a.querySelector('[data-role="nav-search"]')?.addEventListener("input",C=>{f=C.currentTarget.value,O()}),a.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",C=>{C.stopPropagation(),r=!r,u()}),j(),u();const F=a.querySelector('[data-role="main-stage"]');F&&await k(F)}const q=E=>{if(!r)return;const w=E.target;w?.closest('[data-role="org-popover"]')||w?.closest('[data-role="org-menu-btn"]')||(r=!1,u())},B=E=>{E.key==="Escape"&&(r?(r=!1,u()):h&&(h=!1,M(!1)))},P=()=>{const E=ie();E!==l&&(l=E,r=!1,h=!1,M(!0))};function Z(){document.removeEventListener("click",q),document.removeEventListener("keydown",B),window.removeEventListener("hashchange",P)}document.addEventListener("click",q),document.addEventListener("keydown",B),window.addEventListener("hashchange",P),await M(!0)}const Ce=`<svg class="logo" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 50">
  <defs><style>.st0{fill:#202a44;}</style></defs>
  <path class="st0" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon class="st0" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon class="st0" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path class="st0" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path class="st0" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,De='<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(0 -1.5)"><path d="M2 8a10.6 10.6 0 0 0 20 0"/><path d="m4 15 1.7-2"/><path d="m20 15-1.7-2"/><path d="m9 18 .7-3.2"/><path d="m15 18-.7-3.2"/></g></svg>',Oe='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',K='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>',ne={privacy:{title:"隐私政策",items:["个人信息处理者：广州天环智能技术有限公司。","我们处理账户信息（姓名、电子邮箱及已绑定的手机号码）、机构成员关系和操作记录，用于身份验证、授权、审计和服务通知。","登录时记录设备类型、浏览器和 IP 地址所在城市，用于“登录与安全”的登录设备列表、新设备登录验证和发现异常登录。","楼宇运行数据归属于所在机构；占用数据默认只到功能区级，不识别个人。","数据存储于中国境内。要求解释处理规则或行使其他权利，请发邮件至个人信息保护联系邮箱 support@pacom.cn，我们在 15 个工作日内答复。"]},terms:{title:"使用条款",items:["PACOM Station 按机构订阅提供，许可范围以双方确认的合同与订阅约定为准。","机构管理员负责成员授权；控制、密钥和交付操作以服务端权限校验和审计记录为准。","设备控制、场景和联动由楼内边缘网关执行，平台显示实际回执，不代替现场安全措施。","本条款适用中华人民共和国法律，争议由 PACOM 所在地人民法院管辖。"]},service:{title:"服务协议",items:["本协议适用于机构订阅 PACOM Station：订阅的设备数量、有效期和金额以订单和电子合同为准，付款到账当天起生效。","订阅不自动续费。到期后暂停平台远程功能，现场设备按最后下发的配置继续运行。","运行数据归属于机构，平台按机构的数据保存期限保存；机构管理员可导出数据或删除机构。"]}},Fe={org_admin:"管理成员与订阅，交付确认与密钥更新",project_admin:"管理项目范围、人员授权与运行策略",facility_operator:"控制设备、执行场景，处理告警与工单",commissioning_engineer:"配置空间、设备、网络与现场调试交付",member:"控制授权功能区的灯光与空调，报修"};function Te(a){const e=a.replace(/\D/g,"");return e.length===11?`${e.slice(0,3)} •••• ${e.slice(7)}`:a}function R(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function re(a,e,o){a.classList.add("bare-login"),document.title="登录 · PACOM Station";let t=!1,s=!1,l="",b="",h="",r="",f=!1,m={},I="",d=!1,k="",S=0,O=null,u=null,j="privacy",L="",M="",q="";const B=e.mode==="demo"&&typeof e.switchDemoRole=="function";function P(){O!==null&&(window.clearInterval(O),O=null),a.classList.remove("bare-login")}function Z(){S=60,O!==null&&window.clearInterval(O),O=window.setInterval(()=>{S-=1,S<=0&&(S=0,O!==null&&(window.clearInterval(O),O=null));const C=a.querySelector('[data-act="send-sms"]');C&&(C.disabled=S>0,C.textContent=S>0?`${S} 秒后重发`:k?"重新获取":"获取验证码")},1e3)}function E(){if(!u)return"";if(u==="reset")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${K}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码并登录。</p>
              <form id="au-reset-form" novalidate>
                <div class="au-field">
                  <div class="au-lab"><label for="au-rs-id">电子邮箱或手机号码</label></div>
                  <div class="au-ctl">
                    <input id="au-rs-id" name="rs_id" class="au-in" type="text" autocomplete="username" value="${R(M)}" />
                  </div>
                </div>
                ${q?`<p class="au-hint" style="margin-top:8px; color:#202a44;">${R(q)}</p>`:""}
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary">发送验证码</button>
            </div>
          </section>
        </div>
      `;if(u==="register")return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">注册个人账户</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${K}</button>
            </div>
            <div class="db">
              <p class="au-dlead">PACOM Station 按机构开通使用。注册后可凭所在机构的 9 位邀请码申请加入，或直接创建新机构。</p>
              <p class="au-dlead" style="margin-bottom:0;">
                ${B?"当前为离线演示环境，您可直接通过登录页的「演示角色快速体验」切换 5 类内置角色进入 E7F 工作区。":"正式接入账户服务后，将在此开放自助注册与机构邀请码加入流程。"}
              </p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
              ${B?'<button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="open-demo-roles">选择演示角色</button>':""}
            </div>
          </section>
        </div>
      `;if(u==="legal"){const C=ne[j],T=["privacy","terms","service"].map(z=>`<button type="button" role="tab" aria-selected="${j===z}" class="au-legal-tab ${j===z?"is-active":""}" data-act="switch-legal" data-tab="${z}">${ne[z].title}</button>`).join("");return`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">隐私和法律</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${K}</button>
            </div>
            <div class="db">
              <div class="au-legal-tabs" role="tablist">
                ${T}
              </div>
              <p style="margin:0 0 12px; color:#636363; font-size:12px;">2026 年 9 月 1 日起生效</p>
              <ul class="au-legal-list">
                ${C.items.map(z=>`<li>${R(z)}</li>`).join("")}
              </ul>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `}return u==="contact"?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">联系我们</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${K}</button>
            </div>
            <div class="db">
              <p class="au-dlead">如需账号协助、机构开通或技术支持，请通过以下邮箱联系 PACOM 支持团队。</p>
              <div class="au-support-row">
                <a href="mailto:support@pacom.cn">support@pacom.cn</a>
                <button type="button" class="au-dlg-btn au-dlg-btn--ghost" style="height:28px; padding:0 10px; font-size:12px;" data-act="copy-support">
                  ${L||"复制邮箱"}
                </button>
              </div>
              <p style="margin:0; color:#636363; font-size:12px;">广州天环智能技术有限公司</p>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">关闭</button>
            </div>
          </section>
        </div>
      `:u==="demoRoles"&&B?`
        <div class="au-account-scrim" data-role="modal-scrim">
          <section class="au-account-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title">
            <div class="dh">
              <h2 id="au-dlg-title">选择演示角色</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${K}</button>
            </div>
            <div class="db">
              <p class="au-dlead">离线演示模式内置 5 类 RBAC 权限角色，点击任一角色直接进入 E7F 工作区预览。</p>
              <div class="au-choice-list">
                ${Object.keys(N).map(C=>{const T=N[C];return`
                      <button type="button" class="au-choice-card" data-act="pick-demo-role" data-role-id="${C}">
                        <div>
                          <b>${R(T.roleLabel)} · ${R(T.displayName)}</b>
                          <small>${R(Fe[C])}</small>
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
      `:""}function w(){const C=t?`
        <div class="au-field ${m.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${R(h)}" aria-invalid="${m.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${S>0?"disabled":""}>
              ${S>0?`${S} 秒后重发`:k?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${R(m.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${k?`验证码已发送至 ${R(Te(k))}`:""}</p>
        </div>
      `:`
        <div class="au-field ${m.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${R(l)}" aria-invalid="${m.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${R(m.id??"")}</p>
        </div>
      `,T=t?`
        <div class="au-field ${m.scode?"bad":""}" data-f="scode">
          <div class="au-lab"><label for="au-scode">短信验证码</label></div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${R(r)}" aria-invalid="${m.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${R(m.scode??"")}</p>
        </div>
      `:`
        <div class="au-field au-field-right-after ${m.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab"><label for="au-pwd">密码</label></div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${s?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${R(b)}" aria-invalid="${m.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${s?"隐藏密码":"显示密码"}">
              ${s?Oe:De}
            </button>
          </div>
          <div class="au-field-right">
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${R(m.pwd??"")}</p>
        </div>
      `;a.innerHTML=`
      <div class="au au-split au-auth-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${Ce}</div>
              <h1 class="au-h1">登录</h1>
              <form class="au-compact-form" data-form="login" novalidate>
                <fieldset ${d?"disabled":""}>
                  ${C}
                  ${T}
                  <p class="au-ferr" id="au-login-ferr" role="alert" ${I?"":"hidden"}>${R(I)}</p>
                  <label class="au-check au-keep-login" data-f="keep">
                    <input type="checkbox" name="keep" ${f?"checked":""} />
                    <span>30 天内保持登录</span>
                  </label>
                  <button type="submit" class="au-primary au-compact-primary" ${d?"disabled":""}>
                    ${d?"正在登录…":"登录"}
                  </button>
                </fieldset>
              </form>
              <div class="au-login-actions">
                <button type="button" class="au-textbtn" data-act="toggle-sms">
                  <span>${t?"使用密码登录":"使用短信验证码登录"}</span>
                </button>
                <div class="au-login-divider" aria-hidden="true"></div>
                <p class="au-noacct">
                  没有账户？<button type="button" class="au-inline" data-act="open-register">注册</button>
                </p>
                ${B?`<div class="au-demo-bar">
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
      ${E()}
    `,F()}function F(){const C=a.querySelector("#au-id"),T=a.querySelector("#au-pwd"),z=a.querySelector("#au-sphone"),U=a.querySelector("#au-scode"),G=a.querySelector('input[name="keep"]');C?.addEventListener("input",()=>{if(l=C.value,m.id||I){delete m.id,I="",C.closest(".au-field")?.classList.remove("bad");const A=a.querySelector("#au-id-err");A&&(A.textContent="");const D=a.querySelector("#au-login-ferr");D&&(D.hidden=!0)}}),T?.addEventListener("input",()=>{if(b=T.value,m.pwd||I){delete m.pwd,I="",T.closest(".au-field")?.classList.remove("bad");const A=a.querySelector("#au-pwd-err");A&&(A.textContent="");const D=a.querySelector("#au-login-ferr");D&&(D.hidden=!0)}}),z?.addEventListener("input",()=>{if(h=z.value,m.sphone||I){delete m.sphone,I="",z.closest(".au-field")?.classList.remove("bad");const A=a.querySelector("#au-sphone-err");A&&(A.textContent="");const D=a.querySelector("#au-login-ferr");D&&(D.hidden=!0)}}),U?.addEventListener("input",()=>{if(r=U.value.replace(/\D/g,"").slice(0,6),U.value=r,m.scode||I){delete m.scode,I="",U.closest(".au-field")?.classList.remove("bad");const A=a.querySelector("#au-scode-err");A&&(A.textContent="");const D=a.querySelector("#au-login-ferr");D&&(D.hidden=!0)}}),G?.addEventListener("change",()=>{f=G.checked}),a.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",()=>{s=!s,w(),a.querySelector("#au-pwd")?.focus()}),a.querySelector('[data-act="toggle-sms"]')?.addEventListener("click",()=>{t=!t,m={},I="",w(),a.querySelector(t?"#au-sphone":"#au-id")?.focus()}),a.querySelector('[data-act="send-sms"]')?.addEventListener("click",()=>{const A=h.trim();if(!/^(\+?\d[\d\s-]{6,18})$/.test(A)){m={sphone:"请输入有效的手机号码"},w(),a.querySelector("#au-sphone")?.focus();return}m={},k=A,Z(),w(),a.querySelector("#au-scode")?.focus()}),a.querySelector('form[data-form="login"]')?.addEventListener("submit",async A=>{if(A.preventDefault(),!d){if(m={},I="",t?(h.trim()||(m.sphone="请输入手机号码"),/^\d{6}$/.test(r.trim())||(m.scode="请输入 6 位验证码")):(l.trim()||(m.id="请输入电子邮箱或手机号码"),b||(m.pwd="请输入密码")),Object.keys(m).length>0){w();const D=Object.keys(m)[0];a.querySelector(`#au-${D}`)?.focus();return}d=!0,w();try{const D=await e.login({account:(t?h:l).trim(),password:t?r.trim():b});P(),o(D)}catch(D){d=!1,I=D instanceof Error?D.message:"账户或密码不正确",w()}}}),a.querySelector('[data-act="open-reset"]')?.addEventListener("click",()=>{M=l.trim(),q="",u="reset",w(),a.querySelector("#au-rs-id")?.focus()}),a.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{u="register",w()}),a.querySelector('[data-act="open-legal"]')?.addEventListener("click",()=>{u="legal",w()}),a.querySelector('[data-act="open-contact"]')?.addEventListener("click",()=>{L="",u="contact",w()}),a.querySelectorAll('[data-act="open-demo-roles"]').forEach(A=>{A.addEventListener("click",()=>{u="demoRoles",w()})}),a.querySelectorAll('[data-act="close-modal"]').forEach(A=>{A.addEventListener("click",()=>{u=null,w()})}),a.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",A=>{A.target===A.currentTarget&&(u=null,w())}),a.querySelectorAll('[data-act="switch-legal"]').forEach(A=>{A.addEventListener("click",()=>{const D=A.dataset.tab;D&&(j=D,w())})}),a.querySelector('[data-act="copy-support"]')?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("support@pacom.cn"),L="已复制"}catch{L="support@pacom.cn"}w()}),a.querySelector("#au-reset-form")?.addEventListener("submit",A=>{A.preventDefault(),M=a.querySelector("#au-rs-id")?.value.trim()??"",M?B?q="演示环境未连接邮件/短信通道，请直接点击登录页「演示模式 · 5 角色免密体验」进入系统。":q="如账户存在，验证码已发送。":q="请输入电子邮箱或手机号码",w()}),a.querySelectorAll('[data-act="pick-demo-role"]').forEach(A=>{A.addEventListener("click",async()=>{const D=A.dataset.roleId;if(!D||!e.switchDemoRole)return;const Q=await e.switchDemoRole(D);P(),o(Q)})})}w()}async function Me(){const a=document.getElementById("app");if(a)try{const e=ge(),o=await e.getSession(),t=async s=>{(!window.location.hash||window.location.hash==="#login")&&(window.location.hash="#home"),await Le(a,e,s,()=>{re(a,e,l=>{t(l)})})};if(!o||window.location.hash==="#login"){re(a,e,s=>{t(s)});return}await t(o)}catch(e){a.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">初始化失败：${String(e)}</div></div>`}}Me();
//# sourceMappingURL=index-DebZc0Yq.js.map
