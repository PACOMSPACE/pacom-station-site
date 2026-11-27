import{E as S,r as Ae,a as Wa,e as d,b as Ga,g as Za,s as ga,m as Vt,c as Ht,d as Dt,P as Ft,I as Ua,A as na,f as zt,n as Ve,h as Rt,i as Wt,j as ia,t as Mt,k as Nt,v as Va,l as oa,o as la,p as dt,q as sa,u as Pt,C as Ha,w as $a,x as pt,y as mt,z as Gt,B as at,D as vt,L as gt,F as Ta,G as ea,H as ft,J as Oa,K as bt,M as ht,O as Zt,N as Kt}from"./auth-shared-tRwBMRge.js";import{R as Ze,g as wa,a as yt}from"./contracts-Z0w12vLk.js";function Jt(){const t="2026-11-25T09:00:00Z",e=[];for(let m=1;m<=22;m+=1){const y=m===7?S.floorId:m===8?S.lockedFloor8Id:m===6?S.lockedFloor6Id:`structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-${m}`,O=String(m).padStart(2,"0");e.push({id:y,buildingId:S.buildingId,kind:"above",level:m,name:`${m}F`,areaSqm:m===7?1383.1:m===1?2680:m<=4?1920:1480,plan:{floorId:y,imageUrl:`./media/floors/e/${O}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}})}const s="structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-roof-1";e.push({id:s,buildingId:S.buildingId,kind:"roof",level:99,name:"RF",areaSqm:1260,plan:{floorId:s,imageUrl:"./media/floors/e/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}});const c=[];for(let m=1;m<=12;m+=1){const y=`structure-f-above-${m}`,O=String(m).padStart(2,"0");c.push({id:y,buildingId:S.buildingFId,kind:"above",level:m,name:`${m}F`,areaSqm:m===1?2450:m<=3?2100:1580,plan:{floorId:y,imageUrl:`./media/floors/f/${O}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}})}const l="structure-f-roof-1";return c.push({id:l,buildingId:S.buildingFId,kind:"roof",level:99,name:"RF",areaSqm:960,plan:{floorId:l,imageUrl:"./media/floors/f/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}}),{projects:[{id:S.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",location:{lat:23.0652,lng:113.3824,crs:"GCJ02",confirmed:!0,confirmedAt:t},imageUrl:"./media/gzlab.jpg"},{id:S.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",location:{lat:23.0681,lng:113.3792,crs:"GCJ02",confirmed:!0,confirmedAt:t},imageUrl:"./media/gzlab.jpg"}],buildings:[{id:S.buildingId,projectId:S.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.webp"},{id:S.buildingFId,projectId:S.projectId,name:"F栋",aboveFloors:12,belowFloors:0,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.webp"}],floors:[...e,...c],zones:[{id:"zone-e1f-lobby",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 首层大堂与庭院入口",category:"corridor"},{id:"zone-e1f-power",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 配电房与后勤区",category:"utility"},{id:"zone-e7f-lab-east",floorId:S.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:S.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:S.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:S.floorId,name:"核心走廊与弱电井",category:"corridor"},{id:"zone-erf-hvac",floorId:s,name:"RF 屋面空调主机与稳压泵区",category:"utility"},{id:"zone-f1f-lobby",floorId:"structure-f-above-1",name:"1F 南入口大堂与弧形展示翼",category:"corridor"},{id:"zone-f8f-office",floorId:"structure-f-above-8",name:"8F 会议与行政办公区",category:"office"},{id:"zone-f11f-sports",floorId:"structure-f-above-11",name:"11F 体育活动与茶歇区",category:"outdoor"},{id:"zone-f12f-lounge",floorId:"structure-f-above-12",name:"12F 休息区、母婴室与桌球室",category:"office"},{id:"zone-frf-plant",floorId:l,name:"RF 屋面设备基础与机房区",category:"utility"}]}}const Bt=Jt(),$t=Bt.floors.map(t=>t.id),Je={org_admin:{userId:"demo-org-admin",displayName:"林致远",email:"lin.zhiyuan@pacom.cn",phone:"13800138001",role:"org_admin",roleLabel:Ze.org_admin,authMode:"demo",scope:{allowedProjectIds:[S.projectId,S.project1Id],allowedBuildingIds:[S.buildingId,S.buildingFId],allowedFloorIds:[...$t],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩",email:"chen.mingxuan@pacom.cn",phone:"13800138002",role:"project_admin",roleLabel:Ze.project_admin,authMode:"demo",scope:{allowedProjectIds:[S.projectId],allowedBuildingIds:[S.buildingId,S.buildingFId],allowedFloorIds:[...$t],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},operator:{userId:"demo-operator-e7f",displayName:"周宁",email:"zhou.ning@pacom.cn",phone:"13800138003",role:"operator",roleLabel:Ze.operator,authMode:"demo",scope:{allowedProjectIds:[S.projectId],allowedBuildingIds:[S.buildingId],allowedFloorIds:[S.floorId],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}},space_user:{userId:"demo-space-user-e7f",displayName:"沈嘉",email:"shen.jia@pacom.cn",phone:"13800138004",role:"space_user",roleLabel:Ze.space_user,authMode:"demo",scope:{allowedProjectIds:[S.projectId],allowedBuildingIds:[S.buildingId],allowedFloorIds:[S.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],visibleModules:["home","account"],canControlDevices:!0,canManageAlarms:!1,canEditScenes:!1,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}}},ha="pacom.web.demo.role",wt="pacom.web.demo.spatial.v5",St="pacom.web.demo.orgs.v1",xt="pacom.web.demo.activeOrg.v1",Ye="org-gzlab";class Yt{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;inviteMissTimestamps=[];inviteLockedUntil=0;sentCodeTargets=new Set;joinReceipts=new Map;joinWithdrawTokens=new Map;joinAccountByRequestId=new Map;pendingApprovalAccounts=new Set;orgs;activeOrgId;spatial;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;overrides;constructor(){this.orgs=this.loadOrgs();const e=typeof localStorage<"u"?localStorage.getItem(xt):null,s=this.orgs.find(m=>m.id===e)??this.orgs[0];this.activeOrgId=s.id,this.spatial=s.spatial,this.overrides=[],this.syncAdminScopesFromSpatial();const c=typeof sessionStorage<"u"?sessionStorage.getItem(ha):null;c&&Je[c]&&(this.activeSession=structuredClone(Je[c]),this.applyOverridesToSession());const l=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:S.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:l,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:l,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:S.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:l,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:l,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:S.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:l,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:l,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:S.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:l,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:l,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:l,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:l,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02",category:"hvac",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:S.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:l,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:S.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:l,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:l,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:l,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:l,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:l,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:l},{id:"conn-e7f-dali",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:l},{id:"conn-e7f-modbus",projectId:S.projectId,buildingId:S.buildingId,floorId:S.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:S.projectId,floorId:S.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:S.projectId,floorId:S.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:S.projectId,floorId:S.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:S.projectId,floorId:S.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:S.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:S.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:l,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:S.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:l,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:S.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:l,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:S.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh ｜ 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:l,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:S.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:l,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:S.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:l,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(Je).map((m,y)=>({userId:m.userId,displayName:m.displayName,email:`${m.role.replaceAll("_",".")}@gzlab.ac.cn`,role:m.role,roleLabel:m.roleLabel,scopeSummary:m.scope.allowedZoneIds?.length?`E栋 7F（${m.scope.allowedZoneIds.length} 个授权功能区）`:`${m.scope.allowedProjectIds.length} 项目 / ${m.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:y===0?l:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁",role:"operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"陈明轩",role:"project_admin",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉",role:"space_user",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}reconcileOverrides(){const e=Date.now();for(const s of this.overrides)s.status==="active"&&new Date(s.expiresAt).getTime()<=e&&(s.status="expired")}applyOverridesToSession(){if(this.reconcileOverrides(),!this.activeSession)return;const e=Je[this.activeSession.role].scope,s=this.overrides.filter(c=>c.targetUserId===this.activeSession.userId&&c.status==="active");this.activeSession.scope.activeOverrides=structuredClone(s),this.activeSession.scope.canEditDeployment=e.canEditDeployment||s.some(c=>c.module==="deployment"),this.activeSession.scope.canEditSettings=e.canEditSettings||s.some(c=>c.module==="settings")}record(e,s,c,l,m){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:s,endpoint:c,request:m,response:l}),this.traces.length>40&&this.traces.pop()}pushAudit(e,s,c,l){const m=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:m?.displayName??"anonymous",role:m?.role??"space_user",action:e,target:s,result:c,detail:l})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.applyOverridesToSession(),this.activeSession}async getSession(){return this.applyOverridesToSession(),this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){const s=e.method??"password",c=e.account.trim(),l=this.normalizeContactKey(c);if(!c)throw new Error("400 BAD_REQUEST: 请输入电子邮箱或手机号码");if(s==="sms"){const L=(e.smsCode??e.password??"").trim();if(!/^\d{6}$/.test(L))throw new Error("验证码不正确或已过期");const N=`login:${l}`;if(!this.sentCodeTargets.has(N))throw new Error("请先获取短信验证码");this.sentCodeTargets.delete(N)}else if(!(e.password??"").trim())throw new Error("400 BAD_REQUEST: 请输入账户和密码");if(this.pendingApprovalAccounts.has(l))throw new Error("你的加入申请正在等待机构管理员审批，批准后即可登录。");const m=Object.values(Je).find(L=>{const N=!!L.email&&this.normalizeContactKey(L.email)===l,W=!!L.phone&&this.normalizeContactKey(L.phone)===l;return N||W}),y=c.toLowerCase(),O=m?m.role:y.includes("org")||y.includes("admin")?"org_admin":y.includes("proj")?"project_admin":y.includes("space")||y.includes("member")?"space_user":"operator";return this.activeSession=structuredClone(Je[O]),this.applyOverridesToSession(),sessionStorage.setItem(ha,O),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{method:s,account:c,rememberMe:!!e.rememberMe}),this.pushAudit("auth.login",this.activeSession.userId,"success",s==="sms"?"短信验证码登录":"密码登录"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(ha),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}maskTarget(e){const s=e.trim();if(s.includes("@")){const[l,m]=s.split("@");return l&&m?`${l[0]}•••@${m}`:"••••"}const c=s.replace(/\D/g,"");return c.length===11?`${c.slice(0,3)} •••• ${c.slice(7)}`:c.length>=6?`${c.slice(0,3)} •••• ${c.slice(-4)}`:"••••"}async sendVerificationCode(e){const s=e.target.trim(),c=s.includes("@")?"email":"sms";this.sentCodeTargets.add(`${e.purpose}:${this.normalizeContactKey(s)}`);const l={maskedTarget:this.maskTarget(s),channel:c,cooldownSeconds:60};return this.record("REST","sendVerificationCode","POST /api/v1/auth/verification-codes",l,{purpose:e.purpose,channel:c}),l}async confirmPasswordReset(e){const s=e.account.trim(),c=this.normalizeContactKey(s);if(!s)throw new Error("请输入电子邮箱或手机号码");if(!/^\d{6}$/.test(e.verificationCode.trim()))throw new Error("验证码不正确或已过期");const l=`reset:${c}`;if(!this.sentCodeTargets.has(l))throw new Error("请先获取验证码");if(!e.newPassword||e.newPassword.length<8)throw new Error("密码至少需要 8 个字符");this.sentCodeTargets.delete(l),this.record("REST","confirmPasswordReset","POST /api/v1/auth/password-reset/confirm",{ok:!0},{account:this.maskTarget(s)}),this.pushAudit("auth.password_reset",this.maskTarget(s),"success")}async resolveInviteCode(e){const s=Date.now();if(this.inviteLockedUntil>s)return{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const c=e.replace(/\D/g,""),m={482916305:this.orgs[0]?.name??"广州国家实验室",618204917:"天环智慧园区"}[c];if(!m){if(this.inviteMissTimestamps=this.inviteMissTimestamps.filter(L=>s-L<36e5),this.inviteMissTimestamps.push(s),this.inviteMissTimestamps.length>=10)return this.inviteLockedUntil=s+36e5,this.inviteMissTimestamps=[],{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const O={valid:!1,message:"邀请码不正确或已失效，请向机构管理员确认。"};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",O,{code:c}),O}const y={valid:!0,organizationName:m};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",y,{code:c}),y}async registerAndJoin(e){const s=await this.resolveInviteCode(e.inviteCode);if(!s.valid||!s.organizationName)throw new Error(s.message??"邀请码不正确或已失效，请向机构管理员确认。");if(!/^\d{6}$/.test(e.verificationCode.trim()))throw new Error("验证码不正确或已过期");const c=this.normalizeContactKey(e.account),l=`register_join:${c}`;if(!this.sentCodeTargets.has(l))throw new Error("请先获取验证码");const m=e.account.includes("@")?"email":"phone";if(this.isContactOccupied(m,e.account))throw new Error("该账户已注册，请直接登录或联系机构管理员发送定向邀请。");if(this.pendingApprovalAccounts.has(c))throw new Error("该账户已提交加入申请，正在等待机构管理员审批。");this.sentCodeTargets.delete(l);const y=`JR-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,O=`wt-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`,L={requestId:y,organizationName:s.organizationName,maskedAccount:this.maskTarget(e.account),status:"pending_approval",submittedAt:new Date().toISOString(),withdrawToken:O};return this.joinReceipts.set(y,L),this.joinWithdrawTokens.set(y,O),this.joinAccountByRequestId.set(y,c),this.pendingApprovalAccounts.add(c),this.record("REST","registerAndJoin","POST /api/v1/auth/register-join",L,{organizationName:s.organizationName,displayName:e.displayName}),L}async withdrawJoinApplication(e,s){const c=this.joinWithdrawTokens.get(e);if(c&&s!==c)throw new Error("撤回凭证无效或已失效，请刷新后重试。");this.joinReceipts.delete(e),this.joinWithdrawTokens.delete(e);const l=this.joinAccountByRequestId.get(e);l&&(this.pendingApprovalAccounts.delete(l),this.joinAccountByRequestId.delete(e)),this.record("REST","withdrawJoinApplication",`DELETE /api/v1/org/join-requests/${e}`,{ok:!0})}async submitOrgApplication(e){if(!/^\d{6}$/.test(e.smsCode.trim()))throw new Error("验证码不正确或已过期");const s=`org_apply:${this.normalizeContactKey(e.phone)}`;if(!this.sentCodeTargets.has(s))throw new Error("请先获取短信验证码");this.sentCodeTargets.delete(s);const c=e.province===e.city?e.province:`${e.province} ${e.city}`,l={applicationId:`APP-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,organizationName:e.organizationName.trim(),region:c,maskedEmail:this.maskTarget(e.email),status:"pending_review",submittedAt:new Date().toISOString()};return this.record("REST","submitOrgApplication","POST /api/v1/org/applications",l,{organizationName:l.organizationName,region:c}),l}async getInvitationPreview(e){const s=e.trim(),c=this.orgs[0]?.name??"广州国家实验室",l=new Date(Date.now()+7*864e5).toISOString().slice(0,10);return s==="expired"?{token:s,kind:"member",organizationName:c,inviterName:"林致远",role:"operator",roleLabel:Ze.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!1,requiredSecondaryChannel:null,expiresAt:"2026-11-20",status:"expired"}:s==="revoked"?{token:s,kind:"member",organizationName:c,inviterName:"林致远",role:"operator",roleLabel:Ze.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!1,requiredSecondaryChannel:null,expiresAt:l,status:"revoked"}:s==="accepted"?{token:s,kind:"member",organizationName:c,inviterName:"林致远",role:"operator",roleLabel:Ze.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!0,requiredSecondaryChannel:null,expiresAt:l,status:"accepted"}:s.startsWith("owner")?{token:s,kind:"owner",organizationName:"广州天环智能科技有限公司",role:"org_admin",roleLabel:Ze.org_admin,targetChannel:"email",targetValue:"chen@company.com",prefillName:"陈志远",accountExists:!1,requiredSecondaryChannel:null,verifiedSecondaryMasked:"139 •••• 9000",expiresAt:l,status:"pending"}:s==="admin-email"?{token:s,kind:"member",organizationName:c,inviterName:"林致远",role:"org_admin",roleLabel:Ze.org_admin,targetChannel:"email",targetValue:"zhao.admin@pacom.cn",prefillName:"赵启明",accountExists:!1,requiredSecondaryChannel:wa("member","org_admin","email"),expiresAt:l,status:"pending"}:s==="admin-phone"?{token:s,kind:"member",organizationName:c,inviterName:"林致远",role:"org_admin",roleLabel:Ze.org_admin,targetChannel:"phone",targetValue:"13900139088",prefillName:"赵启明",accountExists:!1,requiredSecondaryChannel:wa("member","org_admin","phone"),expiresAt:l,status:"pending"}:s==="project-admin-email"?{token:s,kind:"member",organizationName:c,inviterName:"林致远",role:"project_admin",roleLabel:Ze.project_admin,targetChannel:"email",targetValue:"wu.proj@pacom.cn",prefillName:"吴承志",accountExists:!1,requiredSecondaryChannel:wa("member","project_admin","email"),expiresAt:l,status:"pending"}:s==="project-admin-phone"?{token:s,kind:"member",organizationName:c,inviterName:"林致远",role:"project_admin",roleLabel:Ze.project_admin,targetChannel:"phone",targetValue:"13700137066",prefillName:"吴承志",accountExists:!1,requiredSecondaryChannel:wa("member","project_admin","phone"),expiresAt:l,status:"pending"}:s==="existing-demo"?{token:s,kind:"member",organizationName:"天环智慧园区",inviterName:"林致远",role:"operator",roleLabel:Ze.operator,targetChannel:"email",targetValue:"zhou.ning@pacom.cn",prefillName:"周宁",accountExists:!0,requiredSecondaryChannel:null,expiresAt:l,status:"pending"}:{token:s||"member-demo",kind:"member",organizationName:c,inviterName:"林致远",role:"operator",roleLabel:Ze.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",prefillName:"林明远",accountExists:!1,requiredSecondaryChannel:null,expiresAt:l,status:"pending"}}normalizeContactKey(e){return e.trim().toLowerCase().replace(/[\s\-()]/g,"")}isContactOccupied(e,s){const c=this.normalizeContactKey(s);return Object.values(Je).some(l=>{const m=e==="email"?l.email:l.phone;return!!m&&this.normalizeContactKey(m)===c})}async acceptInvitation(e){const s=await this.getInvitationPreview(e.token);if(s.status!=="pending")throw new Error("邀请已过期或已失效，请联系邀请人重新发送。");const c=s.kind==="owner"?"org_admin":s.role??"operator",l=this.activeSession;if(!!l&&(s.targetChannel==="email"&&!!l?.email&&this.normalizeContactKey(l.email)===this.normalizeContactKey(s.targetValue)||s.targetChannel==="phone"&&!!l?.phone&&this.normalizeContactKey(l.phone)===this.normalizeContactKey(s.targetValue))&&l){const N=structuredClone(l);return this.activeSession=N,this.applyOverridesToSession(),sessionStorage.setItem(ha,N.role),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${e.token}/accept`,N),this.pushAudit("auth.invite.accept",N.userId,"success","已有账户确认加入"),structuredClone(N)}if(s.accountExists)throw new Error("该账户已注册，请使用原账户登录后再接受邀请。");const y=s.requiredSecondaryChannel!==void 0?s.requiredSecondaryChannel:wa(s.kind,s.role,s.targetChannel);let O="";if(y){const N=(e.secondaryContact??"").trim(),W=(e.secondaryVerificationCode??"").trim();if(!N)throw new Error(y==="phone"?"请补充并验证手机号码":"请补充并验证电子邮箱");if(!/^\d{6}$/.test(W))throw new Error("验证码不正确或已过期");const oe=`bind:${this.normalizeContactKey(N)}`;if(!this.sentCodeTargets.has(oe))throw new Error("请先获取验证码");if(this.isContactOccupied(y,N))throw new Error(y==="phone"?"该手机号码已绑定其他账户，请更换后重试；如原账户为你本人所有，请使用原账户登录或联系管理员重新邀请。":"该电子邮箱已绑定其他账户，请更换后重试；如原账户为你本人所有，请使用原账户登录或联系管理员重新邀请。");this.sentCodeTargets.delete(oe),O=N}const L=structuredClone(Je[c]);return e.displayName?.trim()&&(L.displayName=e.displayName.trim()),s.targetChannel==="email"?(L.email=s.targetValue,L.phone=O||(s.kind==="owner"?"13900139000":void 0)):(L.phone=s.targetValue,L.email=O||void 0),this.activeSession=L,this.applyOverridesToSession(),sessionStorage.setItem(ha,c),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${e.token}/accept`,L),this.pushAudit("auth.invite.accept",L.userId,"success"),structuredClone(L)}async switchDemoRole(e){return this.activeSession=structuredClone(Je[e]),this.applyOverridesToSession(),sessionStorage.setItem(ha,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}loadLegacySpatial(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(wt);if(e){const s=JSON.parse(e);if(Array.isArray(s?.projects)&&Array.isArray(s?.buildings)&&Array.isArray(s?.floors)&&Array.isArray(s?.zones))return s}}}catch{}return structuredClone(Bt)}loadOrgs(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(St);if(e){const s=JSON.parse(e);if(Array.isArray(s)&&s.length>0&&s.every(c=>c?.id&&c?.name&&Array.isArray(c?.spatial?.projects)))return s}}}catch{}return[{id:Ye,name:"广州国家实验室",spatial:this.loadLegacySpatial()}]}persistSpatial(){const e=this.orgs.find(s=>s.id===this.activeOrgId);e&&(e.spatial=this.spatial),this.syncAdminScopesFromSpatial();try{typeof localStorage<"u"&&(localStorage.setItem(St,JSON.stringify(this.orgs)),localStorage.setItem(xt,this.activeOrgId),this.activeOrgId===Ye&&localStorage.setItem(wt,JSON.stringify(this.spatial)))}catch{}}async listOrganizations(){return this.orgs.map(e=>({id:e.id,name:e.name,projectCount:e.spatial.projects.length}))}getActiveOrganizationId(){return this.activeOrgId}async switchOrganization(e){const s=this.orgs.find(c=>c.id===e);if(!s)throw new Error(`404 NOT_FOUND: 机构 ${e} 不存在`);this.activeOrgId=s.id,this.spatial=s.spatial,this.persistSpatial()}async createOrganization(e){if(this.requireSession().role!=="org_admin")throw new Error("403 FORBIDDEN: 仅机构管理员可新建机构");const c=e.trim()||"新建机构",l={id:`org-${Date.now().toString(36)}`,name:c,spatial:{projects:[],buildings:[],floors:[],zones:[]}};return this.orgs.push(l),this.activeOrgId=l.id,this.spatial=l.spatial,this.persistSpatial(),this.pushAudit("org.create",l.id,"success",c),{id:l.id,name:l.name,projectCount:0}}syncAdminScopesFromSpatial(){const e=this.spatial.projects.map(l=>l.id),s=this.spatial.buildings.map(l=>l.id),c=this.spatial.floors.map(l=>l.id);this.activeOrgId===Ye&&(Je.org_admin.scope.allowedProjectIds=[...e],Je.org_admin.scope.allowedBuildingIds=[...s],Je.org_admin.scope.allowedFloorIds=[...c],Je.project_admin.scope.allowedBuildingIds=[...s],Je.project_admin.scope.allowedFloorIds=[...c]),this.activeSession&&((this.activeOrgId!==Ye||this.activeSession.role==="org_admin")&&(this.activeSession.scope.allowedProjectIds=[...e]),(this.activeOrgId!==Ye||this.activeSession.role==="org_admin"||this.activeSession.role==="project_admin")&&(this.activeSession.scope.allowedBuildingIds=[...s],this.activeSession.scope.allowedFloorIds=[...c]))}async getSpatialTree(){const e=this.requireSession();if(this.activeOrgId!==Ye){const N=structuredClone(this.spatial);return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:N.projects.length,buildings:N.buildings.length,floors:N.floors.length}),N}const s=this.spatial.projects.filter(N=>e.scope.allowedProjectIds.includes(N.id)),c=this.spatial.buildings.filter(N=>e.scope.allowedBuildingIds.includes(N.id)),l=new Set(c.map(N=>N.id)),m=this.spatial.floors.filter(N=>l.has(N.buildingId)),y=new Set(m.map(N=>N.id)),O=this.spatial.zones.filter(N=>y.has(N.floorId)),L=structuredClone({projects:s,buildings:c,floors:m,zones:O});return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:L.projects.length,buildings:L.buildings.length,floors:L.floors.length}),L}async createProject(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建项目`);const c={id:`project-${Date.now().toString(36)}`,name:e.name.trim()||"新建项目",city:e.city?.trim()||"广州市",address:e.address?.trim()||"",timezone:"Asia/Shanghai",location:e.location,imageUrl:e.imageUrl??"./media/gzlab.jpg"};return this.spatial.projects.push(c),s.scope.allowedProjectIds.includes(c.id)||s.scope.allowedProjectIds.push(c.id),this.persistSpatial(),this.record("REST","createProject","POST /api/v1/projects",c,e),this.pushAudit("project.create",c.id,"success",c.name),structuredClone(c)}async updateProject(e,s){const c=this.requireSession();if(!c.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${c.roleLabel}」无权修改项目配置`);const l=this.spatial.projects.find(m=>m.id===e);if(!l)throw new Error(`404 NOT_FOUND: 项目 ${e} 不存在`);return s.name!==void 0&&(l.name=s.name.trim()||l.name),s.city!==void 0&&(l.city=s.city.trim()),s.address!==void 0&&(l.address=s.address.trim()),s.location!==void 0&&(l.location=s.location),s.imageUrl!==void 0&&(l.imageUrl=s.imageUrl),this.persistSpatial(),this.record("REST","updateProject",`PATCH /api/v1/projects/${e}`,l,s),this.pushAudit("project.update",e,"success",l.name),structuredClone(l)}async deleteProject(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除项目`);if(e===S.projectId)throw new Error("400 BAD_REQUEST: 当前项目包含运行中设备，请先清理后再删除");const c=new Set(this.spatial.buildings.filter(m=>m.projectId===e).map(m=>m.id)),l=new Set(this.spatial.floors.filter(m=>c.has(m.buildingId)).map(m=>m.id));this.spatial.projects=this.spatial.projects.filter(m=>m.id!==e),this.spatial.buildings=this.spatial.buildings.filter(m=>m.projectId!==e),this.spatial.floors=this.spatial.floors.filter(m=>!c.has(m.buildingId)),this.spatial.zones=this.spatial.zones.filter(m=>!l.has(m.floorId)),this.persistSpatial(),this.record("REST","deleteProject",`DELETE /api/v1/projects/${e}`,{ok:!0}),this.pushAudit("project.delete",e,"success")}async upsertBuilding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护楼宇`);let c=e.id?this.spatial.buildings.find(l=>l.id===e.id):void 0;return c?(c.name=e.name.trim()||c.name,c.aboveFloors=Math.max(0,e.aboveFloors),c.belowFloors=Math.max(0,e.belowFloors),c.hasRoof=e.hasRoof,e.areaSqm!==void 0&&(c.areaSqm=e.areaSqm),e.imageUrl!==void 0&&(c.imageUrl=e.imageUrl)):(c={id:`building-${Date.now().toString(36)}`,projectId:e.projectId,name:e.name.trim()||"新建楼宇",aboveFloors:Math.max(1,e.aboveFloors),belowFloors:Math.max(0,e.belowFloors),hasRoof:e.hasRoof,areaSqm:e.areaSqm??null,imageUrl:e.imageUrl??"./media/building-e.webp"},this.spatial.buildings.push(c)),this.persistSpatial(),this.record("REST","upsertBuilding","PUT /api/v1/buildings",c,e),this.pushAudit("building.upsert",c.id,"success",c.name),structuredClone(c)}async deleteBuilding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除楼宇`);if(e===S.buildingId)throw new Error("400 BAD_REQUEST: 当前楼宇包含运行中设备，请先解绑后再删除");const c=new Set(this.spatial.floors.filter(l=>l.buildingId===e).map(l=>l.id));this.spatial.buildings=this.spatial.buildings.filter(l=>l.id!==e),this.spatial.floors=this.spatial.floors.filter(l=>l.buildingId!==e),this.spatial.zones=this.spatial.zones.filter(l=>!c.has(l.floorId)),this.persistSpatial(),this.record("REST","deleteBuilding",`DELETE /api/v1/buildings/${e}`,{ok:!0}),this.pushAudit("building.delete",e,"success")}async upsertFloor(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护楼层`);const c=new Date().toISOString();let l=e.id?this.spatial.floors.find(m=>m.id===e.id):void 0;if(l)l.name=e.name.trim()||l.name,l.kind=e.kind,l.level=e.level,e.areaSqm!==void 0&&(l.areaSqm=e.areaSqm),e.planImageUrl!==void 0&&(l.plan=e.planImageUrl?{floorId:l.id,imageUrl:e.planImageUrl,planVersion:(l.plan?.planVersion??0)+1,updatedAt:c}:null);else{const m=`floor-${e.buildingId.slice(-6)}-${e.kind}-${Math.abs(e.level)}-${Date.now().toString(36).slice(-3)}`;l={id:m,buildingId:e.buildingId,kind:e.kind,level:e.level,name:e.name.trim()||`${e.level}F`,areaSqm:e.areaSqm??null,plan:e.planImageUrl?{floorId:m,imageUrl:e.planImageUrl,planVersion:1,updatedAt:c}:null},this.spatial.floors.push(l),this.activeSession&&!this.activeSession.scope.allowedFloorIds.includes(l.id)&&this.activeSession.scope.allowedFloorIds.push(l.id)}return this.persistSpatial(),this.record("REST","upsertFloor","PUT /api/v1/floors",{id:l.id,name:l.name,hasPlan:!!l.plan}),this.pushAudit("floor.upsert",l.id,"success",l.name),structuredClone(l)}async deleteFloor(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除楼层`);if(e===S.floorId)throw new Error("400 BAD_REQUEST: 当前楼层已绑定运行设备，请先解绑后再删除");this.spatial.floors=this.spatial.floors.filter(c=>c.id!==e),this.spatial.zones=this.spatial.zones.filter(c=>c.floorId!==e),this.persistSpatial(),this.record("REST","deleteFloor",`DELETE /api/v1/floors/${e}`,{ok:!0}),this.pushAudit("floor.delete",e,"success")}async upsertZone(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权维护功能区`);let c=e.id?this.spatial.zones.find(l=>l.id===e.id):void 0;return c?(c.name=e.name.trim()||c.name,c.category=e.category):(c={id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,floorId:e.floorId,name:e.name.trim(),category:e.category},this.spatial.zones.push(c)),this.persistSpatial(),this.record("REST","upsertZone","PUT /api/v1/zones",c),this.pushAudit("zone.upsert",c.id,"success",c.name),structuredClone(c)}async deleteZone(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权删除功能区`);this.spatial.zones=this.spatial.zones.filter(c=>c.id!==e),this.persistSpatial(),this.record("REST","deleteZone",`DELETE /api/v1/zones/${e}`,{ok:!0}),this.pushAudit("zone.delete",e,"success")}async copyZonesToFloors(e,s){const c=this.requireSession();if(!c.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${c.roleLabel}」无权复制功能区`);const l=this.spatial.floors.find(O=>O.id===e),m=this.spatial.zones.filter(O=>O.floorId===e);if(!l||m.length===0)return 0;let y=0;for(const O of s){if(O===e)continue;const L=this.spatial.floors.find(W=>W.id===O);if(!L)continue;const N=new Set(this.spatial.zones.filter(W=>W.floorId===O).map(W=>W.name));for(const W of m){const oe=W.name.replace(new RegExp(`^${l.name}\\s*`,"i"),""),B=`${L.name} ${oe}`.trim();N.has(B)||(this.spatial.zones.push({id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,floorId:O,name:B,category:W.category}),N.add(B),y+=1)}}return y>0&&this.persistSpatial(),this.record("REST","copyZonesToFloors","POST /api/v1/zones/copy",{sourceFloorId:e,targetCount:s.length,added:y}),y}async getFloorDevices(e){const s=this.requireSession();if(this.activeOrgId!==Ye)return[];if(!s.scope.allowedFloorIds.includes(e)){const l={code:"FORBIDDEN",status:403,message:`当前角色「${s.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,l),this.pushAudit("floor.read",e,"denied",l.message),new Error(`403 FORBIDDEN: ${l.message}`)}if(e!==S.floorId)return[];let c=structuredClone(this.devices);return s.scope.allowedZoneIds?.length&&(c=c.filter(l=>l.logicalZoneId&&s.scope.allowedZoneIds.includes(l.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:c.length}),c}async dispatchControlBatch(e){const s=this.requireSession();if(!s.scope.canControlDevices||!s.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权下发控制指令`);const c=`batch-e7f-${Date.now().toString(36)}`,l={batchId:c,floorId:e.floorId,createdBy:s.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(m=>({deviceId:m.deviceId,command:m.command,targetValue:m.targetValue,status:"queued"}))};return this.batches.set(c,l),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",l,e),this.pushAudit("control.dispatch",c,"success",`下发 ${e.targets.length} 台设备`),l.receipts.forEach((m,y)=>{const O=this.devices.find(L=>L.id===m.deviceId);setTimeout(()=>{m.status="dispatched",m.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:c,deviceId:m.deviceId,status:"dispatched",at:m.dispatchedAt})},280+y*120),setTimeout(()=>{const L=new Date().toISOString();!O||O.connectivity==="offline"?(m.status="timeout",m.errorCode="GATEWAY_READBACK_TIMEOUT",m.errorMessage="设备离线，网关未收到回读确认",m.verifiedAt=L):(m.status="verified_success",m.observedValue=m.targetValue,m.verifiedAt=L,this.applyObservedTelemetry(O,m.command,m.targetValue,L)),this.emit({type:"control.receipt.updated",batchId:c,deviceId:m.deviceId,status:m.status,observedValue:m.observedValue,at:L})},900+y*220)}),structuredClone(l)}applyObservedTelemetry(e,s,c,l){s==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:c,collectedAt:l,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(c)>0,collectedAt:l,stale:!1})):(s==="lighting.power"||s==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:c,collectedAt:l,stale:!1}:s==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:c,collectedAt:l,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:l,values:{[s]:c}})}async getControlBatch(e){this.requireSession();const s=this.batches.get(e);if(!s)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(s)}async listAlarms(e){const s=this.requireSession();return this.activeOrgId!==Ye?[]:!s.scope.allowedFloorIds.includes(e)||e!==S.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,s){const c=this.requireSession();if(!c.scope.canManageAlarms){const m=`角色「${c.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",m),new Error(`403 FORBIDDEN: ${m}`)}const l=this.alarms.find(m=>m.id===e);if(!l)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return l.status="acknowledged",l.acknowledgedAt=new Date().toISOString(),l.acknowledgedBy=c.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,l,{note:s}),this.pushAudit("alarm.acknowledge",e,"success",s),this.emit({type:"alarm.changed",floorId:l.floorId,alarmId:e,status:"acknowledged",at:l.acknowledgedAt}),structuredClone(l)}async listWorkOrders(e){const s=this.requireSession();return this.activeOrgId!==Ye?[]:!s.scope.allowedFloorIds.includes(e)||e!==S.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建工单`);const c=new Date().toISOString(),l={id:`wo-e7f-${Date.now().toString(36)}`,projectId:S.projectId,buildingId:S.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:c,updatedAt:c};if(this.workOrders.unshift(l),e.alarmId){const m=this.alarms.find(y=>y.id===e.alarmId);m&&(m.workOrderId=l.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",l,e),this.pushAudit("work_order.create",l.id,"success",l.title),structuredClone(l)}async updateWorkOrderStatus(e,s){const c=this.requireSession();if(!c.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${c.roleLabel}」无权流转工单`);const l=this.workOrders.find(m=>m.id===e);if(!l)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return l.status=s,l.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,l,{status:s}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${s}`),structuredClone(l)}async updateDevicePlanPoint(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权编辑图纸标点`);const c=this.devices.find(l=>l.id===e.deviceId);if(!c)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(c.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${c.version}，请刷新后重试`);return c.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},c.version+=1,this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,c,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${c.planPoint.x}, ${c.planPoint.y})`),structuredClone(c)}async updateDeviceHardwareBinding(e){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改硬件绑定`);const c=this.devices.find(m=>m.id===e.deviceId);if(!c)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(c.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${c.version}）`);const l=new Date().toISOString();return c.physicalInstalled=e.physicalInstalled,c.physicalVerifiedAt=e.physicalInstalled?l:null,c.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:l,boundBy:s.displayName},c.version+=1,this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,c,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(c)}async listConnections(e){return this.requireSession(),this.activeOrgId!==Ye?[]:structuredClone(this.connections)}async listDeliveryBatches(e){return this.requireSession(),this.activeOrgId!==Ye?[]:structuredClone(this.deliveryBatches)}async freezeDeliveryBatch(e,s){const c=this.requireSession();if(!c.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${c.roleLabel}」无权冻结交付批次`);const l=this.devices.filter(y=>y.physicalInstalled&&y.hardwareBinding).length,m={id:`dlv-e7f-${Date.now().toString(36)}`,projectId:S.projectId,floorId:e,versionTag:`E7F-v1.${this.deliveryBatches.length}`,deviceCount:this.devices.length,verifiedCount:l,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:c.displayName,note:s||"例行交付基线冻结"};return this.deliveryBatches.unshift(m),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,m,{note:s}),this.pushAudit("delivery.freeze",m.id,"success",`${l}/${this.devices.length} 已现场核验`),structuredClone(m)}async getAnalysisReport(e,s,c){this.requireSession();const l=s==="today"?1:s==="7d"?7:30,y={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*l)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*l).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(N=>N.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*l).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*l).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*l).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],O=s==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],L={category:e,range:s,scopeId:c,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:y.kpis,unit:y.unit,series:y.base.map((N,W)=>({label:O[W],value:Math.round(N*(e==="energy"||e==="carbon"?l/2+.5:1)),baseline:Math.round(N*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:y.base[3],unit:y.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:y.base[4],unit:y.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:y.base[1],unit:y.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${s}&scopeId=${c}`,{kpis:L.kpis.length}),L}async listScenes(e){return this.requireSession(),this.activeOrgId!==Ye?[]:structuredClone(this.scenes)}async createScene(e){const s=this.requireSession();if(!s.scope.canEditScenes)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权创建场景`);const c={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(c),this.record("REST","createScene","POST /api/v1/scenes",c,e),this.pushAudit("scene.create",c.id,"success",c.name),structuredClone(c)}async executeScene(e){const s=this.scenes.find(l=>l.id===e);if(!s)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const c=await this.dispatchControlBatch({floorId:s.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:s.actions,reason:`触发场景：${s.name}`});return s.lastExecutedAt=new Date().toISOString(),s.lastBatchId=c.batchId,c}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:S.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,s,c){this.requireSession();const l=c>=this.calendar.nightGuardStart?`下班时间 ${c} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,m=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${s} - ${c}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${s} (-30m) ~ ${c} (+30m)`,conflictWarning:l},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:l}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",m,{workdayStart:s,workdayEnd:c}),m}async saveWorkCalendar(e,s,c,l){const m=this.requireSession();if(!m.scope.canEditSettings)throw this.pushAudit("settings.calendar",S.projectId,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${m.roleLabel}」无权修改应用设置`);if(this.calendar.version!==l)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(s>=c)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:s,workdayEnd:c,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:s,workdayEnd:c,expectedVersion:l}),this.pushAudit("settings.calendar",S.projectId,"success",`${s}-${c}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,s,c){const l=this.requireSession();if(!l.scope.canEditSettings)throw this.pushAudit("settings.rule_toggle",e,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权启停应用设置规则`);const m=this.rules.find(y=>y.id===e);if(!m)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(m.version!==c)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${m.version}）`);return m.enabled=s,m.version+=1,m.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,m,{enabled:s,expectedVersion:c}),this.pushAudit("settings.rule_toggle",e,"success",s?"启用":"停用"),structuredClone(m)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,s){if(!this.requireSession().scope.canManageMembers)throw this.pushAudit("org.invite",e,"denied","仅管理员可邀请成员"),new Error("403 FORBIDDEN: 仅管理员可邀请成员");const l=Je[s],m={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:s,roleLabel:l.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(m),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",m,{email:e,role:s}),this.pushAudit("org.invite",e,"success",l.roleLabel),structuredClone(m)}async listAuditLogs(){if(!this.requireSession().scope.canViewAuditLogs)throw this.pushAudit("audit.read","org.audit_logs","denied","仅授权管理员可只读查阅审计日志"),new Error("403 FORBIDDEN: 仅授权管理员可查阅审计日志");return structuredClone(this.auditLogs)}async listOverrides(){const e=this.requireSession();return this.reconcileOverrides(),e.scope.canGrantOverride?structuredClone(this.overrides):structuredClone(this.overrides.filter(s=>s.targetUserId===e.userId))}async grantOverride(e){const s=this.requireSession();if(!s.scope.canGrantOverride)throw this.pushAudit("override.grant",e.targetUserId,"denied","仅机构/项目管理员可审批临时提权"),new Error("403 FORBIDDEN: 仅管理员可授予限时提权");const c=e.reason.trim();if(!c)throw new Error("400 BAD_REQUEST: 必须填写提权事由");if(![2,8,24].includes(e.durationHours))throw new Error("400 BAD_REQUEST: 提权有效期必须为 2h / 8h / 24h");const l=this.members.find(O=>O.userId===e.targetUserId);if(!l)throw new Error(`404 NOT_FOUND: 目标成员 ${e.targetUserId} 不存在`);if(l.role!=="operator")throw new Error("400 BAD_REQUEST: 仅支持为运营人员授予临时提权");const m=Date.now(),y={id:`ovr-${m.toString(36)}`,targetUserId:l.userId,targetUserName:l.displayName,module:e.module,durationHours:e.durationHours,grantedAt:new Date(m).toISOString(),expiresAt:new Date(m+e.durationHours*36e5).toISOString(),approvedBy:s.displayName,reason:c,status:"active",revokedAt:null,revokedBy:null};return this.overrides.unshift(y),this.applyOverridesToSession(),this.record("REST","grantOverride","POST /api/v1/org/overrides",y,e),this.pushAudit("override.grant",`${l.displayName} ｜ ${e.module==="deployment"?"系统部署":"应用设置"}`,"success",`${e.durationHours}h ｜ ${c}`),structuredClone(y)}async revokeOverride(e){const s=this.requireSession();if(!s.scope.canGrantOverride)throw this.pushAudit("override.revoke",e,"denied","仅管理员可收回临时提权"),new Error("403 FORBIDDEN: 仅管理员可收回限时提权");const c=this.overrides.find(l=>l.id===e);if(!c)throw new Error(`404 NOT_FOUND: 提权记录 ${e} 不存在`);return c.status="revoked",c.revokedAt=new Date().toISOString(),c.revokedBy=s.displayName,this.applyOverridesToSession(),this.record("REST","revokeOverride",`POST /api/v1/org/overrides/${e}/revoke`,c),this.pushAudit("override.revoke",`${c.targetUserName} ｜ ${c.module==="deployment"?"系统部署":"应用设置"}`,"success","管理员提前收回"),structuredClone(c)}subscribeFloorEvents(e,s){return e!==S.floorId?()=>{}:(this.listeners.add(s),()=>{this.listeners.delete(s)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${S.floorId}`,e),this.listeners.forEach(s=>s(e))}}const tt=["org_admin","project_admin","operator","space_user"],Qt=[{module:"空间总览与设备控制",org_admin:{text:"机构全范围读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"授权范围读写",tone:"online"},space_user:{text:"授权空间可控",tone:"online"}},{module:"数据分析与报表导出",org_admin:{text:"查看与导出",tone:"online"},project_admin:{text:"查看与导出",tone:"online"},operator:{text:"查看与导出",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"告警中心与运维工单",org_admin:{text:"处置与派单",tone:"online"},project_admin:{text:"处置与派单",tone:"online"},operator:{text:"处置与派单",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"智能策略与快捷场景",org_admin:{text:"编排与执行",tone:"online"},project_admin:{text:"编排与执行",tone:"online"},operator:{text:"执行与编排",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"应用设置（日历/能耗/保护）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 ｜ 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"系统部署（项目/设备/拓扑）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 ｜ 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"成员管理与限时提权审批",org_admin:{text:"机构级管理与审批",tone:"accent"},project_admin:{text:"项目内管理与审批",tone:"accent"},operator:{text:"仅查看本人提权",tone:"neutral"},space_user:{text:"不可见",tone:"neutral"}},{module:"安全与操作审计日志（SR 6.1）",org_admin:{text:"只读查阅（防篡改）",tone:"accent"},project_admin:{text:"只读查阅（防篡改）",tone:"accent"},operator:{text:"无权访问",tone:"neutral"},space_user:{text:"无权访问",tone:"neutral"}}];function Ie(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function st(t){return t?t.slice(0,16).replace("T"," "):"—"}function Da(t){return t==="deployment"?"系统部署":"应用设置"}async function Xt(t,e,s,c,l){const m=s.scope.canManageMembers,y=s.scope.canGrantOverride,O=s.scope.canViewAuditLogs,L=y||s.role==="operator",N=s.role!=="space_user";let W="profile",oe=N?await e.listOrgMembers().catch(()=>[]):[],B=L?await e.listOverrides().catch(()=>[]):[],V=O?await e.listAuditLogs().catch(()=>[]):[],ue="",X="all",K="all",_="all",de=!1,F=!1,ve=s.displayName,be=s.role==="org_admin"?"机构负责人":s.role==="project_admin"?"项目负责人":s.role==="operator"?"运行值守工程师":"园区空间用户",H="138-0013-8072",ge="",ie="";const $e={profile:{label:"个人资料",icon:"user",subtitle:"管理个人联系信息、查看当前角色与空间授权范围，以及本人正在生效的临时提权。"},members:{label:"成员管理",icon:"users",subtitle:"严格落实唯一账号与独立认证（SR 1.1），按 4 级角色与空间范围维护机构成员。"},roles:{label:"角色权限",icon:"shield-check",subtitle:"遵循 IEC 62443-3-3 与等保 2.0 最小权限原则，写权限与读权限严格隔离。"},overrides:{label:"限时提权",icon:"key-round",subtitle:"按 IEC 62443-3-3 SR 2.1 RE 3 为运营人员授予限时修改权，必须记录审批人与事由，到期自动收回。"},audit:{label:"审计日志",icon:"file-text",subtitle:"按 SR 6.1 仅授权管理员只读访问，防篡改记录所有登录、控制、配置变更与越权拦截事件。"}};async function se(){const[C,v,$,z]=await Promise.all([e.getSession(),N?e.listOrgMembers().catch(()=>[]):Promise.resolve([]),L?e.listOverrides().catch(()=>[]):Promise.resolve([]),O?e.listAuditLogs().catch(()=>[]):Promise.resolve([])]);oe=v,B=$,V=z,C&&(s=C,c(C)),G()}function D(){const C=["profile"];return N&&C.push("members","roles"),L&&C.push("overrides"),O&&C.push("audit"),`
      <aside class="pacom-unified-rail" aria-label="机构与账户菜单">
        <div class="pacom-unified-group">
          ${C.map(v=>{const $=$e[v],z=v==="overrides"?B.filter(u=>u.status==="active").length:0;return`
                <button type="button" class="pacom-unified-item" aria-current="${W===v}" data-anav="${v}">
                  ${Ae($.icon,16)}
                  <span>${$.label}</span>
                  ${z>0?`<span class="pacom-badge pacom-badge--accent" style="margin-left:auto;">${z}</span>`:""}
                </button>`}).join("")}
        </div>
      </aside>
    `}function P(){return W==="members"&&m?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-invite="1">+ 邀请成员</button>':W==="overrides"&&y?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-grant="1">+ 授予限时提权</button>':W==="audit"?'<span class="pacom-badge pacom-badge--neutral">只读防篡改 ｜ SR 6.1</span>':""}function ae(){const C=s.scope.activeOverrides.filter($=>$.status==="active"),v=s.scope.allowedZoneIds?.length?`授权 ${s.scope.allowedFloorIds.length} 个楼层 ｜ ${s.scope.allowedZoneIds.length} 个指定功能区`:`授权 ${s.scope.allowedProjectIds.length} 个项目 ｜ ${s.scope.allowedBuildingIds.length} 栋楼宇 ｜ ${s.scope.allowedFloorIds.length} 个楼层`;return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">个人资料与联系方式</h2>
          <span class="pacom-badge pacom-badge--accent">${Ie(s.roleLabel)}</span>
        </div>
        <form class="pacom-settings-card" data-role="profile-form">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">唯一身份与职务</span>
              <span class="pacom-setting-desc">账号编号：${Ie(s.userId)}（独立实名账号，禁止共用）</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <input class="pacom-input" style="width:140px;" name="displayName" value="${Ie(ve)}" aria-label="显示姓名" required />
              <input class="pacom-input" style="width:170px;" name="jobTitle" value="${Ie(be)}" aria-label="岗位职务" />
            </div>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">告警接收手机号</span>
              <span class="pacom-setting-desc">用于接收重要告警短信与审批通知</span>
            </div>
            <div class="pacom-setting-control">
              <input class="pacom-input" style="width:170px;" name="phone" value="${Ie(H)}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
              <button type="submit" class="pacom-btn pacom-btn--primary">保存资料</button>
            </div>
          </div>
        </form>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">当前权限与空间范围</h2>
          <span class="pacom-row-sub">${Ie(v)}</span>
        </div>
        <div class="pacom-settings-card">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">角色职责</span>
              <span class="pacom-setting-desc">${Ie(yt[s.role])}</span>
            </div>
            <span class="pacom-badge pacom-badge--online">${Ie(s.roleLabel)}</span>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">当前写权限状态</span>
              <span class="pacom-setting-desc">写权限独立授予，绝不隐含在只读访问中</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <span class="pacom-badge ${s.scope.canControlDevices?"pacom-badge--online":"pacom-badge--neutral"}">设备控制：${s.scope.canControlDevices?"允许":"无"}</span>
              ${s.role==="space_user"?'<span class="pacom-badge pacom-badge--neutral">配置与管理模块：不可见</span>':`<span class="pacom-badge ${s.scope.canEditSettings?"pacom-badge--online":"pacom-badge--warning"}">应用设置：${s.scope.canEditSettings?"可改":"只读"}</span>
                     <span class="pacom-badge ${s.scope.canEditDeployment?"pacom-badge--online":"pacom-badge--warning"}">系统部署：${s.scope.canEditDeployment?"可改":"只读"}</span>`}
            </div>
          </div>
          ${C.length>0?C.map($=>`
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">生效中的限时提权：${Ie(Da($.module))}（${$.durationHours}h）</span>
                        <span class="pacom-setting-desc">审批人：${Ie($.approvedBy)} ｜ 到期时间：${Ie(st($.expiresAt))} ｜ 事由：${Ie($.reason)}</span>
                      </div>
                      <span class="pacom-badge pacom-badge--accent">生效中</span>
                    </div>`).join(""):""}
        </div>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">会话安全</h2>
        </div>
        <div class="pacom-settings-card">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">退出当前账号</span>
              <span class="pacom-setting-desc">退出后清除当前登录会话并返回登录页</span>
            </div>
            <div class="pacom-setting-control">
              <button type="button" class="pacom-btn pacom-btn--danger" data-role="logout-btn">退出登录</button>
            </div>
          </div>
        </div>
      </section>
    `}function le(){const C=ue.trim().toLowerCase(),v=oe.filter($=>X!=="all"&&$.role!==X?!1:C?`${$.displayName} ${$.email} ${$.roleLabel} ${$.scopeSummary}`.toLowerCase().includes(C):!0);return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="memberSearch" style="width:240px;" data-member-search placeholder="搜索成员姓名或授权范围…" value="${Ie(ue)}" aria-label="搜索机构成员" />
          <select class="pacom-select" name="memberRoleFilter" data-role-filter aria-label="按角色筛选">
            <option value="all" ${X==="all"?"selected":""}>全部角色（${oe.length}）</option>
            ${tt.map($=>`<option value="${$}" ${X===$?"selected":""}>${Ie(Ze[$])}</option>`).join("")}
          </select>
        </div>
        <span class="pacom-row-sub">显示 ${v.length} / ${oe.length} 人</span>
      </div>

      <div class="pacom-table-card">
        <div class="pacom-table-wrap">
          <table class="pacom-table">
            <thead>
              <tr>
                <th>成员</th>
                <th>角色</th>
                <th>空间授权范围</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              ${v.length===0?'<tr><td colspan="4"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配成员</strong><span>可调整搜索关键词或角色筛选。</span></div></td></tr>':v.map($=>`
                        <tr>
                          <td>
                            <div style="display:flex; align-items:center; gap:10px;">
                              <span class="pacom-pop-avatar">${Ie($.displayName.slice(0,1))}</span>
                              <div>
                                <div style="font-weight:450;">${Ie($.displayName)}</div>
                                ${m?`<div class="pacom-row-sub">${Ie($.email)}</div>`:""}
                              </div>
                            </div>
                          </td>
                          <td><span class="pacom-badge ${$.role==="org_admin"||$.role==="project_admin"?"pacom-badge--accent":"pacom-badge--neutral"}">${Ie($.roleLabel)}</span></td>
                          <td><span class="pacom-row-sub">${Ie($.scopeSummary)}</span></td>
                          <td>
                            <span class="pacom-badge ${$.status==="active"?"pacom-badge--online":"pacom-badge--neutral"}">
                              ${$.status==="active"?"正常":$.status==="invited"?"邀请中":"已停用"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function pe(){return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">四级标准角色说明</h2>
          <span class="pacom-row-sub">IEC 62443-3-3 SR 2.1 RE 2 ｜ 最小权限与职责分离</span>
        </div>
        <div class="pacom-settings-card">
          ${tt.map(C=>{const v=oe.filter($=>$.role===C).length;return`
              <div class="pacom-setting-row">
                <div class="pacom-setting-meta">
                  <span class="pacom-setting-title">${Ie(Ze[C])}</span>
                  <span class="pacom-setting-desc">${Ie(yt[C])}</span>
                </div>
                <span class="pacom-badge pacom-badge--neutral">${v} 人</span>
              </div>`}).join("")}
        </div>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">模块可见性与操作权限矩阵</h2>
          <span class="pacom-row-sub">写权限必须显式授予，绝不隐含在只读权限中</span>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead>
                <tr>
                  <th>功能模块</th>
                  <th>机构管理员</th>
                  <th>项目管理员</th>
                  <th>运营人员</th>
                  <th>空间用户</th>
                </tr>
              </thead>
              <tbody>
                ${Qt.map(C=>`
                  <tr>
                    <td><strong style="font-weight:450;">${Ie(C.module)}</strong></td>
                    <td><span class="pacom-badge pacom-badge--${C.org_admin.tone}">${Ie(C.org_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${C.project_admin.tone}">${Ie(C.project_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${C.operator.tone}">${Ie(C.operator.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${C.space_user.tone}">${Ie(C.space_user.text)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function _e(){return`
      <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="限时提权统计">
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">当前生效提权</span>
          <div class="pacom-kpi-value">${B.filter(v=>v.status==="active").length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">到期自动收回，无需人工盯守</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">可选有效期窗口</span>
          <div class="pacom-kpi-value">2 / 8 / 24<span class="pacom-kpi-unit">小时</span></div>
          <span class="pacom-kpi-delta">严格遵循 IEC 62443-3-3 SR 2.1 RE 3</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">累计审批记录</span>
          <div class="pacom-kpi-value">${B.length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">每条审批与收回同步写入审计日志</span>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">限时提权审批记录</h2>
          <span class="pacom-row-sub">${y?"可为运营人员开启「系统部署」或「应用设置」限时修改权":"展示管理员为你授予的临时提权记录"}</span>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead>
                <tr>
                  <th>运营人员</th>
                  <th>提权模块</th>
                  <th>有效期与到期时间</th>
                  <th>审批人与事由</th>
                  <th>状态</th>
                  ${y?'<th style="text-align:right;">操作</th>':""}
                </tr>
              </thead>
              <tbody>
                ${B.length===0?`<tr><td colspan="${y?6:5}"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>暂无限时提权记录</strong><span>${y?"点击右上角「+ 授予限时提权」为运营人员按需开启限时修改权。":"当前无需临时提权，「应用设置」与「系统部署」保持默认只读。"}</span></div></td></tr>`:B.map(v=>`
                          <tr>
                            <td><strong style="font-weight:450;">${Ie(v.targetUserName)}</strong></td>
                            <td><span class="pacom-badge pacom-badge--accent">${Ie(Da(v.module))}</span></td>
                            <td>
                              <div>${v.durationHours} 小时</div>
                              <div class="pacom-row-sub">至 ${Ie(st(v.expiresAt))}</div>
                            </td>
                            <td>
                              <div>${Ie(v.approvedBy)}</div>
                              <div class="pacom-row-sub">${Ie(v.reason)}</div>
                            </td>
                            <td>
                              <span class="pacom-badge ${v.status==="active"?"pacom-badge--online":v.status==="revoked"?"pacom-badge--warning":"pacom-badge--neutral"}">
                                ${v.status==="active"?"生效中":v.status==="revoked"?"已收回":"已到期"}
                              </span>
                            </td>
                            ${y?`<td style="text-align:right;">
                                    ${v.status==="active"?`<button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-revoke-override="${Ie(v.id)}">提前收回</button>`:`<span class="pacom-row-sub">${v.revokedBy?`${Ie(v.revokedBy)} 收回`:"已结束"}</span>`}
                                  </td>`:""}
                          </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function je(){const C=V.filter(v=>{if(K==="success"&&v.result!=="success"||K==="denied"&&v.result==="success")return!1;if(_!=="all"){const $=`${v.action} ${v.target}`.toLowerCase();if(_==="control"&&!$.includes("control")&&!$.includes("scene")||_==="alarm"&&!$.includes("alarm")&&!$.includes("work")||_==="deploy"&&!$.includes("deploy")&&!$.includes("plan")&&!$.includes("hardware")&&!$.includes("project")&&!$.includes("building")&&!$.includes("floor")&&!$.includes("zone")||_==="settings"&&!$.includes("settings")||_==="override"&&!$.includes("override"))return!1}return!0});return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <select class="pacom-select" name="auditActionCat" data-audit-cat aria-label="按行为类别筛选">
            <option value="all" ${_==="all"?"selected":""}>全部操作类别</option>
            <option value="override" ${_==="override"?"selected":""}>限时提权审批</option>
            <option value="control" ${_==="control"?"selected":""}>设备控制与场景</option>
            <option value="alarm" ${_==="alarm"?"selected":""}>告警与工单处置</option>
            <option value="deploy" ${_==="deploy"?"selected":""}>系统部署与空间</option>
            <option value="settings" ${_==="settings"?"selected":""}>应用设置变更</option>
          </select>
          <div class="pacom-tabs" role="tablist" aria-label="按执行结果筛选">
            <button type="button" class="pacom-tab" role="tab" aria-selected="${K==="all"}" data-audit-filter="all">全部（${V.length}）</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${K==="success"}" data-audit-filter="success">成功</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${K==="denied"}" data-audit-filter="denied">已拦截</button>
          </div>
        </div>
        <span class="pacom-row-sub">共 ${C.length} 条只读记录</span>
      </div>

      <div class="pacom-table-card">
        <div class="pacom-table-wrap">
          <table class="pacom-table">
            <thead>
              <tr>
                <th>操作行为</th>
                <th>目标对象</th>
                <th>操作人与角色</th>
                <th>时间</th>
                <th style="text-align:right;">结果</th>
              </tr>
            </thead>
            <tbody>
              ${C.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配审计记录</strong><span>可放宽筛选条件查看全部日志。</span></div></td></tr>':C.map(v=>`
                        <tr>
                          <td>
                            <div style="font-weight:450;">${Ie(v.action)}</div>
                            ${v.detail?`<div class="pacom-row-sub">${Ie(v.detail)}</div>`:""}
                          </td>
                          <td><code style="font-size:12px;">${Ie(v.target)}</code></td>
                          <td>
                            <div>${Ie(v.actor)}</div>
                            <div class="pacom-row-sub">${Ie(Ze[v.role]??v.role)}</div>
                          </td>
                          <td><span class="pacom-row-sub">${Ie(st(v.at))}</span></td>
                          <td style="text-align:right;">
                            <span class="pacom-badge ${v.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                              ${v.result==="success"?"成功":"已拦截"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function E(){const C=[];if(de&&m){const v=s.role==="org_admin"?tt:["project_admin","operator","space_user"];C.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="邀请成员">
          <form class="dep-modal-card" data-role="invite-form" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">邀请新成员</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">成员电子邮箱（唯一登录账号）</span>
                <input class="pacom-input" name="email" type="email" placeholder="colleague@gzlab.ac.cn" required />
              </label>
              <label class="dep-field">
                <span class="dep-field-label">分配角色</span>
                <select class="pacom-select" name="role">
                  ${v.map($=>`<option value="${$}">${Ie(Ze[$])}</option>`).join("")}
                </select>
              </label>
              <span class="pacom-row-sub">成员接受邀请后将按所选角色与空间范围自动生效，禁止多人共用账号。</span>
            </div>
            <div class="dep-modal-foot">
              <span></span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">发送邀请</button>
              </div>
            </div>
          </form>
        </div>`)}if(F&&y){const v=oe.filter($=>$.role==="operator");C.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="授予限时提权">
          <form class="dep-modal-card" data-role="grant-override-form" style="width:min(480px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">授予运营人员限时提权（SR 2.1 RE 3）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">目标运营人员</span>
                <select class="pacom-select" name="targetUserId" required>
                  ${v.length===0?'<option value="">暂无运营人员</option>':v.map($=>`<option value="${Ie($.userId)}">${Ie($.displayName)}（${Ie($.email)}）</option>`).join("")}
                </select>
              </label>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">提权模块</span>
                  <select class="pacom-select" name="module">
                    <option value="deployment">系统部署（修改权限）</option>
                    <option value="settings">应用设置（修改权限）</option>
                  </select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">有效期（到期自动收回）</span>
                  <select class="pacom-select" name="durationHours">
                    <option value="2">2 小时</option>
                    <option value="8" selected>8 小时</option>
                    <option value="24">24 小时</option>
                  </select>
                </label>
              </div>
              <label class="dep-field">
                <span class="dep-field-label">审批事由（必填，写入审计日志）</span>
                <input class="pacom-input" name="reason" placeholder="例如：E栋 7F 新装照明回路调试与设备标记" required />
              </label>
            </div>
            <div class="dep-modal-foot">
              <span class="pacom-row-sub">审批人：${Ie(s.displayName)}</span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${v.length===0?"disabled":""}>确认授权</button>
              </div>
            </div>
          </form>
        </div>`)}return C.join("")}function G(){const C=$e[W],v=P();t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">机构与账户</h1>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">${Ie(s.roleLabel)}</span>
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${D()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head ${v?"pacom-unified-head--split":""}">
                <div class="pacom-unified-head-copy">
                  <h2 class="pacom-unified-title">${C.label}</h2>
                  <p class="pacom-unified-subtitle">${C.subtitle}</p>
                </div>
                ${v?`<div class="pacom-unified-head-actions">${v}</div>`:""}
              </div>
              ${ge?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${Ie(ge)}</span></div>`:""}
              ${ie?`<div class="pacom-alert-banner">${Ie(ie)}</div>`:""}
              ${W==="profile"?ae():W==="members"?le():W==="roles"?pe():W==="overrides"?_e():je()}
            </div>
          </div>
        </div>
      </div>
      ${E()}
    `,Le()}function Le(){t.querySelectorAll("[data-anav]").forEach(v=>{v.addEventListener("click",()=>{W=v.dataset.anav??"profile",ge="",ie="",G()})}),t.querySelector('[data-role="profile-form"]')?.addEventListener("submit",v=>{v.preventDefault();const $=new FormData(v.currentTarget);ve=String($.get("displayName")??"").trim()||s.displayName,be=String($.get("jobTitle")??"").trim()||be,H=String($.get("phone")??"").trim()||H,ge=`已保存个人资料：${ve}（${be}）｜ ${H}`,G()}),t.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",l()}),t.querySelector("[data-open-invite]")?.addEventListener("click",()=>{de=!0,F=!1,G()}),t.querySelector("[data-open-grant]")?.addEventListener("click",()=>{F=!0,de=!1,G()}),t.querySelectorAll("[data-close-modals]").forEach(v=>{v.addEventListener("click",()=>{de=!1,F=!1,G()})}),t.querySelectorAll("[data-modal-scrim]").forEach(v=>{v.addEventListener("click",$=>{$.target===v&&(de=!1,F=!1,G())})}),t.querySelector("[data-member-search]")?.addEventListener("input",v=>{const $=v.currentTarget,z=$.selectionStart??$.value.length;ue=$.value,G();const u=t.querySelector("[data-member-search]");u&&(u.focus(),u.setSelectionRange(z,z))}),t.querySelector("[data-role-filter]")?.addEventListener("change",v=>{X=v.currentTarget.value,G()}),t.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async v=>{v.preventDefault(),ie="";const $=new FormData(v.currentTarget);try{const z=await e.inviteOrgMember(String($.get("email")??""),String($.get("role")));de=!1,ge=`已向 ${z.email} 发送「${z.roleLabel}」邀请。`,await se()}catch(z){ie=z instanceof Error?z.message:String(z),G()}}),t.querySelector('[data-role="grant-override-form"]')?.addEventListener("submit",async v=>{v.preventDefault(),ie="";const $=new FormData(v.currentTarget);try{const z=await e.grantOverride({targetUserId:String($.get("targetUserId")??""),module:String($.get("module")??"deployment"),durationHours:Number($.get("durationHours")??8),reason:String($.get("reason")??"")});F=!1,ge=`已为「${z.targetUserName}」开启「${Da(z.module)}」${z.durationHours} 小时限时修改权，到期自动收回。`,await se()}catch(z){ie=z instanceof Error?z.message:String(z),G()}}),t.querySelectorAll("[data-revoke-override]").forEach(v=>{v.addEventListener("click",async()=>{const $=v.dataset.revokeOverride;if($){ie="";try{const z=await e.revokeOverride($);ge=`已提前收回「${z.targetUserName}」的「${Da(z.module)}」限时修改权。`,await se()}catch(z){ie=z instanceof Error?z.message:String(z),G()}}})}),t.querySelectorAll("[data-audit-filter]").forEach(v=>{v.addEventListener("click",()=>{K=v.dataset.auditFilter??"all",G()})}),t.querySelector("[data-audit-cat]")?.addEventListener("change",v=>{_=v.currentTarget.value??"all",G()})}G()}const ua={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},es={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},as={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function ts(t){const e=`${t.title} ${t.message}`.toLowerCase();return e.includes("离线")||e.includes("modbus")||e.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":e.includes("co₂")||e.includes("co2")||e.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function ss(t){return t.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:t.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function nt(t){const e=`${t.title} ${t.message}`.toLowerCase();return e.includes("离线")||e.includes("vav")||t.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:e.includes("co₂")||e.includes("co2")||t.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function ns(t,e,s){const c=new URLSearchParams(window.location.hash.split("?")[1]??""),l=c.get("alarm"),m=c.get("wo"),y=s.scope.canManageAlarms;let O=await e.getSpatialTree(),L=Za(),N=!1,W="",oe=[],B=[],V=[],ue=m?"workorders":"alarms",X="all",K="all",_="all",de="impact",F=!1,ve="",be=l,H=m,ge=null,ie=null,$e="resolved";const se=new Set,D=new Map,P=new Map,ae=new Map,le=new Map;let pe="",_e="";function je(v){const $=le.get(v.id);if($)return $;const z=v.id.match(/(\d+)$/),u=`WO-2026-${z?z[1]:v.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,j={estCost:"¥ 450",actualCost:v.status==="closed"?"¥ 380":"--",cmmsNo:u,assigneeGroup:"暖通运维组",tasks:[{id:`${v.id}-t1`,label:"核查设备供电与现场指示灯状态",done:v.status!=="open"},{id:`${v.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:v.status==="resolved"||v.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:v.createdAt?v.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${u}）`}]};return le.set(v.id,j),j}async function E(){[oe,B,V]=await Promise.all([e.listAlarms(S.floorId),e.listWorkOrders(S.floorId),e.getFloorDevices(S.floorId).catch(()=>[])]),B.forEach(v=>je(v)),C()}function G(v){if(!v)return{name:"楼层通用",zone:"E7F",dev:null};const $=V.find(z=>z.id===v)??null;return $?{name:$.name,zone:($.logicalZoneId?as[$.logicalZoneId]:void 0)??"E7F",dev:$}:{name:v,zone:"E7F",dev:null}}function Le(v){const $=G(v.deviceId).dev;$&&$.connectivity==="offline"?ae.set(v.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${$.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):ae.set(v.id,{verdict:"pass",summary:`自检通过（PASS）：「${$?.name??v.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),be=v.id,C()}function C(){const v=oe.filter(h=>h.status==="active"&&!D.has(h.id)),$=B.filter(h=>!je(h).cancelled&&(h.status==="open"||h.status==="assigned"||h.status==="in_progress")),z=oe.filter(h=>h.status!=="active").length+P.size,u=0,j=D.size,Y=ve.trim().toLowerCase(),Ee=oe.filter(h=>{const b=D.has(h.id);if(X==="snoozed"){if(!b)return!1}else if(X==="active"){if(h.status!=="active"||b)return!1}else if(X==="acknowledged"){if(h.status!=="acknowledged")return!1}else if(b)return!1;if(_!=="all"&&h.severity!==_)return!1;if(!Y)return!0;const Z=G(h.deviceId);return`${h.title} ${h.message} ${Z.name} ${Z.zone} ${h.deviceId}`.toLowerCase().includes(Y)}),Pe=new Map;for(const h of Ee){const b=`${h.title} ${h.message}`.toLowerCase(),Z=b.includes("离线")||b.includes("modbus")||b.includes("通信"),ne=F?Z?"root-gateway-modbus":h.deviceId:h.id,we=Z?"根因：E7F 主控网关通信链路":`根因：${G(h.deviceId).name}`,Re=Pe.get(ne)??{rootLabel:we,items:[]};Re.items.push(h),Pe.set(ne,Re)}const Be=Array.from(Pe.values());de==="impact"&&Be.sort((h,b)=>nt(b.items[0]).costYuan-nt(h.items[0]).costYuan);const Ce=B.filter(h=>{const b=je(h);if(K==="cancelled"){if(!b.cancelled)return!1}else if(b.cancelled||K==="open"&&(h.status==="resolved"||h.status==="closed")||K==="resolved"&&h.status!=="resolved"||K==="closed"&&h.status!=="closed")return!1;if(!Y)return!0;const Z=G(h.deviceId);return`${h.title} ${h.description} ${h.id} ${b.cmmsNo} ${Z.name}`.toLowerCase().includes(Y)});t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${Wa({tree:O,session:s,scope:L,activeAlarmCount:v.length,isOpen:N,searchKeyword:W})}
            </div>

            <div class="pacom-header-meta">
              ${ue==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${F}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="pacom-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${s.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${s.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="pacom-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${Ae("refresh-cw",14)}</button>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="告警中心视图">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${ue==="alarms"}" data-main-tab="alarms">实时告警（${oe.length-j}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${ue==="workorders"}" data-main-tab="workorders">运维工单（${B.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ue==="alarms"&&X==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${v.length}<span class="pacom-kpi-unit">条 ｜ 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ue==="workorders"&&K==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${$.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${ue==="alarms"&&X==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">已闭环生效</span>
              <div class="pacom-kpi-value">${z}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="pacom-kpi-cell">
              <span class="pacom-kpi-label">关单复发待查</span>
              <div class="pacom-kpi-value" style="color:var(--pacom-status-online);">${u}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${pe?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${d(pe)}</span></div>`:""}
          ${_e?`<div class="pacom-alert-banner">${d(_e)}</div>`:""}

          ${ue==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${d(ve)}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${_==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${_==="critical"?"selected":""}>严重</option>
                      <option value="major" ${_==="major"?"selected":""}>重要</option>
                      <option value="minor" ${_==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${de==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${de==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${X==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${X==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${X==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${X==="snoozed"}" data-status-pill="snoozed">已忽略（${j}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${se.size>0&&s.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${se.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${Be.length} 项</span>
                  </div>
                </div>
                ${Be.length===0?'<div class="pacom-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${Be.map(h=>{const b=h.items[0],Z=es[b.severity]??{label:b.severity,cls:"pacom-badge--neutral"},ne=G(b.deviceId),we=ss(b),Re=nt(b),He=be===b.id,Te=D.get(b.id),Fe=!!Te,Ge=se.has(b.id),ce=ae.get(b.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${d(b.id)}" data-check-alarm="${d(b.id)}" ${Ge?"checked":""} ${!y||b.status!=="active"||Fe?"disabled":""} aria-label="选择 ${d(b.title)}" />
                                  </td>
                                  <td><span class="pacom-badge ${Z.cls}">${d(Z.label)}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${d(b.title)}</span>
                                      ${F?`<span class="pacom-badge pacom-badge--accent">${d(h.rootLabel)}${h.items.length>1?` ｜ 影响 ${h.items.length} 项`:""}</span>`:""}
                                      ${ce?`<span class="pacom-badge ${ce.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${d(ce.verdict.toUpperCase())}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${d(b.message)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${d(ne.name)}</div>
                                    <div class="pacom-row-sub">${d(ne.zone)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${d(Re.costLabel)}</div>
                                    <div class="pacom-row-sub">${d(Re.comfortLabel)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${d(we.duration)}</div>
                                    <div class="pacom-row-sub" style="color:${we.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${d(we.trend)}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${Fe?"pacom-badge--neutral":b.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${Fe?`忽略 ${d(Te?.duration)}`:b.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${Fe?`<button class="pacom-btn" data-unsnooze="${d(b.id)}" ${y?"":"disabled"}>恢复监控</button>`:`
                                            ${b.status==="active"?`<button class="pacom-btn" data-mark-actioned="${d(b.id)}" ${y?"":"disabled"}>标记已处置</button>`:""}
                                            ${b.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${d(b.id)}" ${y?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${d(b.id)}">${He?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${He?`
                                    <tr class="pacom-table-detail-row">
                                      <td colspan="8">
                                        <div class="pacom-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${d(ts(b))}
                                            </div>
                                            ${Te?`<div class="pacom-info-banner">忽略周期：${d(Te.duration)} ｜ 原因备注：${d(Te.reason)}</div>`:""}
                                            ${ce?`
                                                <div class="pacom-banner ${ce.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${d(ce.summary)}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${ce.steps.map(he=>`<span>${d(he)}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${d(b.id)}</code> ｜ 设备编号 <code>${d(b.deviceId)}</code> ｜ 关联工单 ${d(b.workOrderId??"无")}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${d(b.id)}">单机自检（FTT）</button>
                                              ${!Fe&&b.status==="active"?`<button class="pacom-btn" data-open-snooze="${d(b.id)}" ${y?"":"disabled"}>限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${d(b.deviceId)}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${d(b.deviceId)}">定位设备 →</button>
                                            </div>
                                            ${ge===b.id?`
                                                <form data-snooze-form="${d(b.id)}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
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
                                                    <button class="pacom-btn pacom-btn--primary" type="submit" style="height:28px;" ${y?"":"disabled"}>确认忽略</button>
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
              ${(()=>{const h=H?B.find(b=>b.id===H)??null:null;if(h){const b=G(h.deviceId),Z=je(h),ne=!!(!y||Z.cancelled||h.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${d(h.id)}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${d(h.title)}</h2>
                        <span class="pacom-badge pacom-badge--accent">${d(Z.cmmsNo)}</span>
                        ${Z.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${d(h.id)}" data-wo-status="${d(h.id)}" aria-label="更新工单状态" ${ne?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(we=>`<option value="${we}" ${h.status===we?"selected":""}>${ua[we]}</option>`).join("")}
                          <option value="cancelled" ${Z.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${ie===h.id?`
                        <form data-close-wo-form="${d(h.id)}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${ua[$e]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${d(Z.cause??"")}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${d(Z.solution??"")}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${d(Z.actualCost==="--"?"":Z.actualCost)}" />
                          </div>
                          <div style="display:flex; justify-content:flex-end; gap:8px;">
                            <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                            <button class="pacom-btn pacom-btn--primary" type="submit" ${y?"":"disabled"}>保存并更新状态</button>
                          </div>
                        </form>`:""}
                    <div class="pacom-wo-workbench">
                      <div style="display:flex; flex-direction:column; gap:14px;">
                        <div class="pacom-card" style="gap:10px;">
                          <strong style="font-size:14px; font-weight:500;">工单描述与现场检查任务清单</strong>
                          <div class="pacom-row-sub">${d(h.description)}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${Z.tasks.map(we=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${d(we.id)}" data-wo-task="${d(h.id)}" data-task-id="${d(we.id)}" ${we.done?"checked":""} ${ne?"disabled":""} />
                                    <span>${d(we.label)}</span>
                                  </span>
                                  ${we.unit?`<span class="pacom-row-sub">实测：${d(we.reading??"--")} ${d(we.unit)}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${Z.history.map(we=>`<span>• <span class="pacom-row-sub">${d(we.at)}</span> — ${d(we.text)}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${d(h.id)}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${d(Z.cmmsNo)}</code> ｜ 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${d(b.name)}（${d(b.zone)}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${d(Z.assigneeGroup)}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${d(Z.estCost)} / 实际 ${d(Z.actualCost)}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${d(Z.cause??"待完单填写")}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${d(Z.solution??"待完单填写")}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${d(h.deviceId??"")}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${d(h.deviceId??"")}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="pacom-table-card">
                  <div class="pacom-table-toolbar">
                    <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${d(ve)}" aria-label="搜索工单" />
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
                  ${Ce.length===0?'<div class="pacom-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${Ce.map(b=>{const Z=G(b.deviceId),ne=je(b),we=!!(!y||ne.cancelled||b.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${d(b.title)}</span>
                                        ${ne.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${d(b.description)} ｜ <code>${d(b.id)}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${d(Z.name)}</div>
                                      <div class="pacom-row-sub">${d(Z.zone)}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${d(ne.cmmsNo)}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${d(ne.assigneeGroup)} ｜ 预估 ${d(ne.estCost)}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${d(b.id)}" data-wo-status="${d(b.id)}" aria-label="更新工单状态" ${we?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(Re=>`<option value="${Re}" ${b.status===Re?"selected":""}>${ua[Re]}</option>`).join("")}
                                          <option value="cancelled" ${ne.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${d(b.id)}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${ie===b.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${d(b.id)}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${ua[$e]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${d(ne.cause??"")}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${d(ne.solution??"")}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${d(ne.actualCost==="--"?"":ne.actualCost)}" />
                                            </div>
                                            <div style="display:flex; justify-content:flex-end; gap:8px;">
                                              <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                                              <button class="pacom-btn pacom-btn--primary" type="submit" ${y?"":"disabled"}>保存并更新状态</button>
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
    `,Ga(t,{onToggle:()=>{N=!N,C(),N&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:h=>{W=h,C();const b=t.querySelector("[data-global-space-search]");b&&(b.focus(),b.setSelectionRange(h.length,h.length))},onPick:h=>{L=h,N=!1,C()}}),t.querySelectorAll("[data-main-tab]").forEach(h=>{h.addEventListener("click",()=>{ue=h.dataset.mainTab??"alarms",pe="",C()})}),t.querySelectorAll("[data-kpi-filter]").forEach(h=>{h.addEventListener("click",()=>{const b=h.dataset.kpiFilter;pe="",b==="workorders"?(ue="workorders",K=K==="open"?"all":"open"):(b==="active"||b==="acknowledged")&&(ue="alarms",X=X===b?"all":b),C()})}),t.querySelectorAll("[data-status-pill]").forEach(h=>{h.addEventListener("click",()=>{X=h.dataset.statusPill??"all",C()})}),t.querySelectorAll("[data-wo-pill]").forEach(h=>{h.addEventListener("click",()=>{K=h.dataset.woPill??"all",C()})}),t.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{pe="",E()}),t.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{F=!F,C()}),t.querySelector("[data-severity-filter]")?.addEventListener("change",h=>{_=h.currentTarget.value,C()}),t.querySelector("[data-alarm-sort]")?.addEventListener("change",h=>{de=h.currentTarget.value??"impact",C()}),t.querySelector("[data-alarm-search]")?.addEventListener("input",h=>{const b=h.currentTarget,Z=b.selectionStart??b.value.length;ve=b.value,C();const ne=t.querySelector("[data-alarm-search]");ne&&(ne.focus(),ne.setSelectionRange(Z,Z))}),t.querySelectorAll("[data-check-alarm]").forEach(h=>{h.addEventListener("change",()=>{if(!y)return;const b=h.dataset.checkAlarm;b&&(h.checked?se.add(b):se.delete(b),C())})}),t.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{if(!y)return;_e="";const h=Array.from(se);try{for(const b of h)await e.acknowledgeAlarm(b,"告警中心批量确认"),P.set(b,"批量确认处置");se.clear(),pe=`已批量确认 ${h.length} 条告警，未来 24 小时持续校验无复发。`,await E()}catch(b){_e=b instanceof Error?b.message:String(b),C()}}),t.querySelectorAll("[data-expand-alarm]").forEach(h=>{h.addEventListener("click",()=>{const b=h.dataset.expandAlarm??null;be=be===b?null:b,ge=null,C()})}),t.querySelectorAll("[data-expand-wo]").forEach(h=>{h.addEventListener("click",()=>{const b=h.dataset.expandWo??null;H=H===b?null:b,C()})}),t.querySelectorAll("[data-run-ftt]").forEach(h=>{h.addEventListener("click",()=>{const b=oe.find(Z=>Z.id===h.dataset.runFtt);b&&Le(b)})}),t.querySelectorAll("[data-open-snooze]").forEach(h=>{h.addEventListener("click",()=>{y&&(ge=h.dataset.openSnooze??null,C())})}),t.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{ge=null,C()}),t.querySelectorAll("[data-snooze-form]").forEach(h=>{h.addEventListener("submit",b=>{if(b.preventDefault(),!y)return;const Z=h.dataset.snoozeForm;if(!Z)return;const ne=new FormData(h),we=String(ne.get("duration")??"24h"),Re=String(ne.get("reason")??"").trim()||"现场核查中";D.set(Z,{duration:we,reason:Re}),se.delete(Z),ge=null,pe=`已限时忽略该告警（${we} ｜ ${Re}），可在「已忽略」页签中随时恢复。`,C()})}),t.querySelectorAll("[data-unsnooze]").forEach(h=>{h.addEventListener("click",()=>{if(!y)return;const b=h.dataset.unsnooze;b&&(D.delete(b),pe="已恢复该告警的实时监控。",C())})}),t.querySelectorAll("[data-go-ts]").forEach(h=>{h.addEventListener("click",()=>{const b=h.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(b)}`})}),t.querySelectorAll("[data-locate-home]").forEach(h=>{h.addEventListener("click",()=>{const b=h.dataset.locateHome??"";window.location.hash=b?`#home?device=${encodeURIComponent(b)}`:"#home"})}),t.querySelectorAll("[data-mark-actioned]").forEach(h=>{h.addEventListener("click",async()=>{if(!y)return;_e="";const b=h.dataset.markActioned;try{await e.acknowledgeAlarm(b,"现场自处理完成（Mark Actioned）"),P.set(b,"现场自处理完成"),se.delete(b),pe="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await E()}catch(Z){_e=Z instanceof Error?Z.message:String(Z),C()}})}),t.querySelectorAll("[data-to-wo]").forEach(h=>{h.addEventListener("click",async()=>{if(!y)return;_e="";const b=oe.find(Z=>Z.id===h.dataset.toWo);if(b)try{await e.createWorkOrder({floorId:b.floorId,deviceId:b.deviceId,alarmId:b.id,title:`处置告警：${b.title}`,description:b.message}),pe=`已将「${b.title}」转为运维工单并同步 CMMS。`,await E()}catch(Z){_e=Z instanceof Error?Z.message:String(Z),C()}})}),t.querySelectorAll("[data-wo-status]").forEach(h=>{h.addEventListener("change",async()=>{if(!y)return;const b=h.dataset.woStatus,Z=h.value;if(_e="",Z==="cancelled"){const ne=B.find(we=>we.id===b);if(ne){const we=je(ne);we.cancelled=!0,we.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),pe="工单已移入「已取消」分类并锁定编辑。",C()}return}if(Z==="resolved"||Z==="closed"){ie=b,$e=Z,C();return}try{await e.updateWorkOrderStatus(b,Z);const ne=B.find(we=>we.id===b);ne&&je(ne).history.unshift({at:"刚刚",text:`状态变更为「${ua[Z]}」`}),pe="工单状态已更新并写入审计日志。",await E()}catch(ne){_e=ne instanceof Error?ne.message:String(ne),await E()}})}),t.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{ie=null,C()}),t.querySelectorAll("[data-close-wo-form]").forEach(h=>{h.addEventListener("submit",async b=>{if(b.preventDefault(),!y)return;const Z=h.dataset.closeWoForm,ne=new FormData(h),we=String(ne.get("cause")??"").trim(),Re=String(ne.get("solution")??"").trim(),He=String(ne.get("actualCost")??"").trim();try{await e.updateWorkOrderStatus(Z,$e);const Te=B.find(Fe=>Fe.id===Z);if(Te){const Fe=je(Te);Fe.cause=we,Fe.solution=Re,He&&(Fe.actualCost=He),Fe.history.unshift({at:"刚刚",text:`流转至「${ua[$e]}」｜ 根因：${we}`})}ie=null,H=Z,pe=`工单已更新为「${ua[$e]}」，根因与方案已沉淀归档。`,await E()}catch(Te){_e=Te instanceof Error?Te.message:String(Te),C()}})}),t.querySelectorAll("[data-wo-task]").forEach(h=>{h.addEventListener("change",()=>{if(!y)return;const b=B.find(we=>we.id===h.dataset.woTask);if(!b)return;const ne=je(b).tasks.find(we=>we.id===h.dataset.taskId);ne&&(ne.done=h.checked),C()})})}await E()}const os={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},is={frozen:"已冻结",draft:"草稿",delivered:"已交付"},ot={lab:"实验区",office:"办公区",meeting:"会议室",corridor:"走廊/公区",utility:"机房/后勤",outdoor:"露台/活动区"},it=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"每层建议 2–3 个 Proxy，空旷 20–30m 或拐角可按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 避免广播干扰；自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度 0–10 级调光；自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造；支持通断控制"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay 保障吞吐"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"1 层 1 网标准配置，承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙/拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关接入，无需加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485/通讯管理机接入，记录厂家编码与表号"}],kt=[{id:"doc-hvac-7f",floorId:S.floorId,name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F ｜ 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",floorId:S.floorId,name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F ｜ 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",floorId:S.floorId,name:"E7F_协议点位与蓝牙Mesh映射表.xlsx",category:"点位清单",boundScope:"E栋 7F ｜ 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",floorId:S.floorId,name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 ｜ FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}],ls={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}},Et=[{key:"lab_std",label:"标准实验层",items:[{suffix:"东侧实验区",category:"lab"},{suffix:"西侧实验区",category:"lab"},{suffix:"核心走廊与管井",category:"corridor"}]},{key:"office_std",label:"标准办公层",items:[{suffix:"开放办公区",category:"office"},{suffix:"会议室",category:"meeting"},{suffix:"公共走廊与茶水区",category:"corridor"}]},{key:"lobby_1f",label:"首层大堂",items:[{suffix:"入口大堂与展厅",category:"corridor"},{suffix:"配电与后勤机房",category:"utility"}]},{key:"roof_plant",label:"屋面设备层",items:[{suffix:"空调主机区",category:"utility"},{suffix:"水泵与排风设备区",category:"utility"}]}];function g(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Fa(t){const e=t.trim().toUpperCase();if(e==="RF"||e==="R"||e==="ROOF"||e.includes("屋面")||e.includes("屋顶")||e.includes("天面"))return 999;const s=e.match(/(-?\d+)/);if(!s)return 0;const c=Number(s[1]);return e.startsWith("B")||e.includes("地下")||e.includes("负")?-Math.abs(c):c}const It={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,十一:11,十二:12,十三:13,十四:14,十五:15,十六:16,十七:17,十八:18,十九:19,二十:20,二十一:21,二十二:22,二十三:23,二十四:24,二十五:25};function ma(t){const e=t.trim(),s=e.toUpperCase();if(/(?:^|[-_\s/])(RF|ROOF)(?:[-_.\s]|$)/.test(s)||/屋面|屋顶|天面/.test(e))return"RF";const c=s.match(/(?:^|[-_\s/])B0*(\d+)(?:F)?(?:[-_.\s]|$)/);if(c)return`B${Number(c[1])}`;const l=e.match(/(?:地下|负)(0*\d+|[一二三四五六七八九十]+)(?:层|楼)?/);if(l){const O=/^\d+$/.test(l[1])?Number(l[1]):It[l[1]];if(O)return`B${O}`}if(/首层|一层/.test(e))return"1F";const m=e.match(/(0*\d+|[一二三四五六七八九十]+)(?:层|楼)/);if(m){const O=/^\d+$/.test(m[1])?Number(m[1]):It[m[1]];if(O)return`${O}F`}const y=s.match(/(?:^|[-_\s/])0*(\d+)F(?:[-_.\s]|$)/);return y?`${Number(y[1])}F`:null}function za(t){return new Promise((e,s)=>{const c=new FileReader;c.onload=()=>typeof c.result=="string"?e(c.result):s(new Error("无法读取图片内容")),c.onerror=()=>s(new Error(`读取文件「${t.name}」失败`)),c.readAsDataURL(t)})}function rs(t){return t.category==="gateway"?t.name.includes("蓝牙")?"蓝牙适配器":"主控网关":t.category==="lighting"?t.name.includes("702")?"702 照明":t.name.slice(0,6):t.category==="hvac"?t.name.includes("VAV")?"VAV-02":t.name.includes("FCU")?"FCU-01":t.name.slice(0,6):t.category==="sensor"?"环境传感":t.name.slice(0,6)}function cs(t,e){const s=t.status!=="connected",c=e.filter(l=>l.hardwareBinding?.protocol===t.protocol);return c.length>0?c.map(l=>{const m=l.connectivity==="offline"||s;return{pointName:l.category==="hvac"?"送风温度 / 阀门开度":l.category==="lighting"?"回路开关 / 亮度反馈":l.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:l.name,value:m?"无上报":l.category==="hvac"?"23.4°C ｜ 62%":l.category==="lighting"?"开启 ｜ 80%":l.category==="sensor"?"23.2°C ｜ 640 ppm":"负载 24% ｜ 18ms",interval:"60s",lastSeen:m?"46 分钟前":"12 秒前",quality:m?l.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${t.protocol.toUpperCase()} 采集通道汇总点`,deviceName:t.name,value:s?"采样延迟":"正常上报",interval:"60s",lastSeen:s?"38 分钟前":"9 秒前",quality:s?"delayed":"online"}]}async function ds(t,e,s){const c=new URLSearchParams(window.location.hash.split("?")[1]??""),l=c.get("sec");let m=l==="floors"||l==="projects"?"project_config":l==="floorplan"||l==="devices"||l==="inventory"?"devices":l==="network"||l==="network_topo"?"network_topo":l==="connections"?"connections":"overview",y=l==="inventory"?"list":"marking",O="binding",L="",N="all",W=Za(),oe=!1,B="",V="device",ue="all",X="",K=!1,_=!1,de="mesh",F=1,ve=0,be=0,H=await e.getSpatialTree(),ge=[],ie=[],$e=[];const se={...ls},D=[];let P=W.level==="all-projects"?H.projects[0]?.id??S.projectId:W.projectId,ae=W.level==="building"||W.level==="floor"?W.buildingId:H.buildings.find(w=>w.projectId===P)?.id??H.buildings[0]?.id??S.buildingId,le=W.level==="floor"?W.floorId:H.floors.find(w=>w.buildingId===ae&&w.id===S.floorId)?.id??H.floors.find(w=>w.buildingId===ae)?.id??S.floorId,pe=l==="floors"?le:null,_e="all",je="zones",E=c.get("new")==="project",G=!1,Le=!1,C=null,v=!1,$=!1,z=!1,u=!1,j=!1,Y=null,Ee=new Set,Pe=null,Be=!1,Ce=[];const ee=[];let h=null,b=null,Z=!1,ne=!1,we=null,Re=null,He=3,Te=!1,Fe=[],Ge=null,ce="",he="";const p=new Map([["dev-e7f-gw-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-01",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-lt-02",{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"}],["dev-e7f-env-01",{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}]]),k=[{id:"lm-1",deviceId:"dev-e7f-lt-01",channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],re=[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:S.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:S.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:S.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:S.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],xe=new Map;function ke(){E=!1,G=!1,Le=!1,C=null,v=!1,$=!1,z=!1,u=!1,j=!1,Y=null}function Ne(){return!!(E||G||Le||C||v||$||z||u||j||Y)}const Me=w=>{if(!document.body.contains(t)){document.removeEventListener("keydown",Me);return}w.key==="Escape"&&(Pe?(Pe=null,q()):Ne()?(ke(),q()):_&&(_=!1,ne=!1,q()))};document.addEventListener("keydown",Me);function Oe(){return H.floors}function fe(w){return[...H.floors.filter(x=>x.buildingId===w)].sort((x,T)=>Fa(T.name)-Fa(x.name))}function De(){return H.zones}function ze(w){return[...w===S.floorId?ge:[],...D.filter(T=>T.floorId===w)]}function Ue(w){return w?De().find(x=>x.id===w)?.name.replace(/^7F\s*/,"")??w:"未分配功能区"}function Sa(w){const x=H.buildings.find(A=>A.id===w);if(!x)return;P=x.projectId,ae=x.id;const T=fe(x.id);T.some(A=>A.id===le)||(le=T.find(A=>A.id===S.floorId)?.id??T[0]?.id??""),pe&&!T.some(A=>A.id===pe)&&(pe=null),W=ga(le?{level:"floor",projectId:x.projectId,buildingId:x.id,floorId:le}:{level:"building",projectId:x.projectId,buildingId:x.id}),b=null,_=!1,ne=!1,F=1,ve=0,be=0}function ra(w){le=w;const x=Oe().find(T=>T.id===w);if(x){ae=x.buildingId;const T=H.buildings.find(A=>A.id===x.buildingId);T&&(P=T.projectId),W=ga({level:"floor",projectId:P,buildingId:x.buildingId,floorId:x.id})}b=null,_=!1,ne=!1,F=1,ve=0,be=0}async function Se(){he="";const[w,x,T,A]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(S.floorId).catch(()=>[]),e.listConnections(P),e.listDeliveryBatches(S.floorId)]);if(H=w,ge=x,ie=T,$e=A,H.projects.length===0)P="",ae="",le="",pe=null;else{H.projects.some(n=>n.id===P)||(P=H.projects[0].id);const a=H.buildings.filter(n=>n.projectId===P);a.some(n=>n.id===ae)||(ae=a[0]?.id??"");const o=ae?fe(ae):[];o.some(n=>n.id===le)||(le=o.find(n=>n.id===S.floorId)?.id??o[0]?.id??""),pe&&!o.some(n=>n.id===pe)&&(pe=null)}const R=ze(le);b&&!R.some(a=>a.id===b)&&(b=null,_=!1),Z=R.find(a=>a.id===b)?.physicalInstalled??!1,q()}function qe(){const w=t.querySelector('[data-role="dep-viewport"]');w&&(w.style.transform=`translate(${ve}px, ${be}px) scale(${F})`);const x=t.querySelector('[data-role="dep-zoom-label"]');x&&(x.textContent=`${Math.round(F*100)}%`)}function Xe(w){he="",w.connectivity==="offline"?he=`单机回读自检未通过（FAIL）：「${w.name}」当前离线，请核查网关链路或中继覆盖。`:ce=`单机回读自检通过（PASS）：「${w.name}」指令下发与状态回读一致，已安全复位。`,q()}function ca(){he="";const w=ze(le),x=w.filter(r=>r.connectivity==="offline"),T=w.length-x.length,A=new Date;Ge={ranAt:`${String(A.getHours()).padStart(2,"0")}:${String(A.getMinutes()).padStart(2,"0")}:${String(A.getSeconds()).padStart(2,"0")}`,total:w.length,passed:T,failed:x.length,failedNames:x.map(r=>r.name)},x.length>0?he=`全层批量自检完成：${T}/${w.length} 台通过，${x.length} 台异常（${x.map(r=>r.name).join("、")}）。`:ce=`全层批量自检全部通过（${T}/${w.length}），设备已自动安全复位。`,q()}function xa(){const w=ze(le),x=[],T=w.filter(o=>o.connectivity==="offline"),A=w.filter(o=>!o.planPoint),R=w.filter(o=>p.get(o.id)?.proxy).length,r=w.filter(o=>p.get(o.id)?.relay).length,a=w.length?r/w.length:0;T.length>0?T.forEach(o=>x.push({level:"fail",title:`节点不可达：${o.name}`,detail:"建议检查供电、通信端子，若属无线节点可在遮挡拐角处增设中继节点。",deviceId:o.id})):x.push({level:"ok",title:"全网节点可达性正常",detail:`${w.length} 台设备均正常响应心跳。`}),R<1?x.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，方便现场 App 接入网络。"}):x.push({level:"ok",title:`代理节点配置合理（${R} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),a>.25&&w.length>=4&&x.push({level:"warn",title:`中继比例偏高（${Math.round(a*100)}%）`,detail:"建议中继节点控制在总设备数 10% 左右，避免广播风暴。"}),A.length>0&&x.push({level:"warn",title:`尚有 ${A.length} 台未完成设备标记`,detail:"请在「设备管理 → 设备标记」中补齐平面坐标以便施工定位。"}),Fe=x,ce=`已完成蓝牙 Mesh 网络体检（检测 ${w.length} 台节点，发现 ${x.filter(o=>o.level!=="ok").length} 项关注）。`,q()}function Ka(){const w=ze(le),x=[["设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...w.map(r=>[r.name,r.category,Ue(r.logicalZoneId),r.planPoint?`${Math.round(r.planPoint.x*100)}%/${Math.round(r.planPoint.y*100)}%`:"未标记",r.hardwareBinding?`${r.hardwareBinding.protocol} ${r.hardwareBinding.networkAddress}`:"未绑定",r.physicalInstalled?"已复核":"待复核",r.connectivity==="online"?"在线":"离线"].join(","))],T=new Blob([`\uFEFF${x.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),A=URL.createObjectURL(T),R=document.createElement("a");R.href=A,R.download="pacom-device-list.csv",R.click(),URL.revokeObjectURL(A)}function fa(w){const x=new Set(fe(w.id).map(A=>ma(A.name)??A.name.toUpperCase())),T=[];for(let A=1;A<=w.aboveFloors;A+=1){const R=`${A}F`;x.has(R)||T.push({kind:"above",level:A,name:R})}for(let A=1;A<=w.belowFloors;A+=1){const R=`B${A}`;x.has(R)||T.push({kind:"below",level:-A,name:R})}return w.hasRoof&&!x.has("RF")&&T.push({kind:"roof",level:99,name:"RF"}),T}async function ba(w){const x=H.buildings.find(A=>A.id===w);if(!x)return 0;const T=fa(x);for(const A of T)await e.upsertFloor?.({buildingId:x.id,kind:A.kind,level:A.level,name:A.name});return T.length}const ka={overview:{title:"部署总览",subtitle:"按 5 步工程流水线跟踪整栋底图、设备标记、入网与边缘同步进度。",granularity:"building"},project_config:{title:"项目配置",subtitle:"在同一视图内贯通管理项目、园区楼宇、楼层平面底图、功能区与竣工图纸。",granularity:"project"},devices:{title:"设备管理",subtitle:"围绕当前楼层完成设备标记、设备列表核查、参数下发、自检与设备分组。",granularity:"floor"},network_topo:{title:"网络拓扑",subtitle:"执行蓝牙 Mesh 网络体检、云边协同同步，并查看自动生成的通信与业务拓扑。",granularity:"floor"},connections:{title:"系统接入",subtitle:"管理边缘网关与暖通、电表、环境等异构子系统通道及传感器采集质量。",granularity:"project"}};function Qe(w,x="layers"){return`
      <div class="dep-empty-card">
        <div class="dep-empty-icon">${Ae(x,20)}</div>
        <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
        <span class="pacom-row-sub" style="max-width:440px;">按「创建项目 → 添加楼宇与楼层 → 上传平面底图」完成建档后，即可开展设备标记、网络同步与交付验收。</span>
        <div class="dep-empty-steps">
          <span>1. 创建项目</span>
          <span>→</span>
          <span>2. 添加楼宇与楼层</span>
          <span>→</span>
          <span>3. 上传平面图</span>
        </div>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${w?"":"disabled"}>+ 创建第一个项目</button>
      </div>`}function da(){const w=(x,T,A,R=!1)=>`
      <button type="button" class="pacom-unified-item" aria-current="${m===x}" data-dep-nav="${x}">
        ${Ae(T,16)}
        <span>${A}</span>
        ${R?'<span class="dep-rail-dot" title="有变更待同步至边缘网关"></span>':""}
      </button>`;return`
      <aside class="pacom-unified-rail" aria-label="系统部署菜单">
        <div class="pacom-unified-group">
          ${w("overview","layout-dashboard","部署总览")}
          ${w("project_config","layers","项目配置")}
          ${w("devices","map-pin","设备管理")}
          ${w("network_topo","waypoints","网络拓扑",Te)}
          ${w("connections","plug","系统接入")}
        </div>
      </aside>
    `}function Aa(w){return H.projects.length===0?`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${w?"":"disabled"}>+ 新建项目</button>`:m==="overview"?`
        <button type="button" class="pacom-btn" data-export-inv="1">导出清单</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-freeze-batch="1" ${w?"":"disabled"}>+ 交付冻结</button>
      `:m==="project_config"?`<button type="button" class="pacom-btn" data-open-new-proj="1" ${w?"":"disabled"}>+ 新建项目</button>`:m==="devices"?`${`
        <div class="pacom-tabs" role="tablist" aria-label="设备管理视图切换">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${y==="marking"}" data-dev-subtab="marking">设备标记</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${y==="list"}" data-dev-subtab="list">设备列表</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${y==="groups"}" data-dev-subtab="groups">设备分组</button>
        </div>`}${y==="marking"?'<button type="button" class="pacom-btn" data-export-inv="1">导出标记表</button>':y==="list"?'<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ftt="1">一键全层自检 (FTT)</button>':`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-group="1" ${w?"":"disabled"}>+ 新建分组</button>`}`:m==="network_topo"?`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">一键网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${w?"":"disabled"}>${Te?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `:`
      <button type="button" class="pacom-btn" data-edge-restart="service" ${w?"":"disabled"}>重启边缘服务</button>
      <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-conn="1" ${w?"":"disabled"}>+ 新增接入通道</button>
    `}function Ja(w){if(H.projects.length===0)return Qe(w,"layout-dashboard");const x=ae?fe(ae):[],T=x.filter(n=>!!n.plan).length,A=x.flatMap(n=>ze(n.id)),R=A.filter(n=>!!n.planPoint).length,r=A.filter(n=>n.connectivity==="online").length,a=A.filter(n=>n.physicalInstalled).length,o=x.filter(n=>ze(n.id).length>0&&!Te).length;return`
      <div class="pacom-kpi-strip pacom-kpi-strip--5" role="region" aria-label="整栋 5 步部署流水线">
        <button type="button" class="pacom-kpi-cell" data-dep-nav="project_config" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${x.length>0&&T===x.length?"pacom-dot--online":"pacom-dot--warning"}"></span>1. 项目与底图</span>
          <div class="pacom-kpi-value">${T}<span class="pacom-kpi-unit">/ ${x.length} 层</span></div>
          <span class="pacom-kpi-delta">${x.length>0&&T===x.length?"全部底图就绪":`尚缺 ${Math.max(0,x.length-T)} 层底图 →`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="devices" data-dev-subtab-jump="marking" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${A.length>0&&R===A.length?"pacom-dot--online":"pacom-dot--warning"}"></span>2. 设备标记</span>
          <div class="pacom-kpi-value">${R}<span class="pacom-kpi-unit">/ ${A.length} 台</span></div>
          <span class="pacom-kpi-delta">含 ${k.length} 处回路灯点</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${A.length>0&&r===A.length?"pacom-dot--online":"pacom-dot--warning"}"></span>3. 入网在线</span>
          <div class="pacom-kpi-value">${r}<span class="pacom-kpi-unit">/ ${A.length} 台</span></div>
          <span class="pacom-kpi-delta">${A.length-r>0?`${A.length-r} 台离线 →`:"全量在线"}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="network_topo" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${Te?"pacom-dot--warning":"pacom-dot--online"}"></span>4. 边缘同步</span>
          <div class="pacom-kpi-value">${o}<span class="pacom-kpi-unit">/ ${x.length} 层</span></div>
          <span class="pacom-kpi-delta">${Te?"有变更待下发 →":`基线 v${He}`}</span>
        </button>
        <button type="button" class="pacom-kpi-cell" data-dep-nav="devices" data-dev-subtab-jump="list" style="border:0; background:transparent; text-align:left; cursor:pointer;">
          <span class="pacom-kpi-label"><span class="pacom-dot ${A.length>0&&a===A.length?"pacom-dot--online":"pacom-dot--warning"}"></span>5. 复核自检</span>
          <div class="pacom-kpi-value">${a}<span class="pacom-kpi-unit">/ ${A.length} 台</span></div>
          <span class="pacom-kpi-delta">${A.length>0&&a===A.length?"可交付冻结":`待复核 ${A.length-a} 台 →`}</span>
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
                  <th>2. 设备标记</th>
                  <th>3. 在线入网</th>
                  <th>4. 边缘同步</th>
                  <th>5. 物理复核</th>
                  <th style="text-align:right;">交付状态</th>
                </tr>
              </thead>
              <tbody>
                ${x.length===0?'<tr><td colspan="7"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前楼宇暂无楼层</strong><span>请先在「项目配置」中生成楼层并上传底图。</span></div></td></tr>':x.map(n=>{const i=ze(n.id),I=De().filter(J=>J.floorId===n.id),f=i.filter(J=>!!J.planPoint).length,U=i.filter(J=>J.connectivity==="online").length,me=i.filter(J=>J.physicalInstalled).length,te=!!n.plan,Q=te&&i.length>0&&f===i.length&&me===i.length&&U===i.length&&!Te;return`
                            <tr>
                              <td><strong>${g(n.name)}</strong><div class="pacom-row-sub">${n.areaSqm?`${n.areaSqm} m²`:"待补面积"}</div></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-matrix-expand="1" data-matrix-floor="${g(n.id)}"><span class="pacom-dot ${te?"pacom-dot--online":"pacom-dot--offline"}"></span><span>${te?`已传图 ｜ ${I.length} 区`:"待传底图"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="marking" data-matrix-floor="${g(n.id)}"><span class="pacom-dot ${i.length>0&&f===i.length?"pacom-dot--online":i.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${i.length>0?`${f}/${i.length}`:"未标记"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${g(n.id)}"><span class="pacom-dot ${i.length>0&&U===i.length?"pacom-dot--online":i.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${i.length>0?`${U}/${i.length}`:"—"}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="network_topo" data-matrix-floor="${g(n.id)}"><span class="pacom-dot ${i.length===0?"pacom-dot--offline":Te?"pacom-dot--warning":"pacom-dot--online"}"></span><span>${i.length===0?"—":Te?"待同步":`v${He}`}</span></button></td>
                              <td><button type="button" class="dep-matrix-btn" data-matrix-nav="devices" data-matrix-sub="list" data-matrix-floor="${g(n.id)}"><span class="pacom-dot ${i.length>0&&me===i.length?"pacom-dot--online":i.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span><span>${i.length>0?`${me}/${i.length}`:"—"}</span></button></td>
                              <td style="text-align:right;"><span class="pacom-badge ${Q?"pacom-badge--online":i.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">${Q?"可验收交付":i.length>0?"实施中":"待配置"}</span></td>
                            </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      ${Ge?`<div class="pacom-banner ${Ge.failed===0?"pacom-banner--ok":"pacom-banner--critical"}">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">最近批量自检（FTT） ｜ ${Ge.ranAt}</span>
                <span class="pacom-banner-sub">通过 ${Ge.passed}/${Ge.total} 台${Ge.failedNames.length?` ｜ 异常：${Ge.failedNames.join("、")}`:" ｜ 全部安全复位"}</span>
              </div>
            </div>`:""}

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">交付冻结基线记录</h2>
          <span class="pacom-row-sub">共 ${$e.length} 条冻结快照</span>
        </div>
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead><tr><th>版本标签</th><th>现场核验进度</th><th>冻结人与备注</th><th>状态</th></tr></thead>
              <tbody>
                ${$e.map(n=>`
                    <tr>
                      <td><div style="font-weight:450;">${g(n.versionTag)}</div><div class="pacom-row-sub"><code>${g(n.id)}</code></div></td>
                      <td><strong>${n.verifiedCount}</strong> / ${n.deviceCount} 台</td>
                      <td><div>${g(n.frozenBy)}</div><div class="pacom-row-sub">${g(n.note??"-")}</div></td>
                      <td><span class="pacom-badge pacom-badge--accent">${is[n.status]??n.status}</span></td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function ja(w){if(H.projects.length===0)return Qe(w,"layers");const x=H.projects.find(f=>f.id===P)??H.projects[0],T=H.buildings.filter(f=>f.projectId===x.id),A=T.reduce((f,U)=>f+fe(U.id).length,0),R=T.find(f=>f.id===ae)??T[0]??null,r=R?fe(R.id):[],a=r.filter(f=>!f.plan).length,o=r.filter(f=>De().filter(U=>U.floorId===f.id).length===0).length,n=r.filter(f=>_e==="missing_plan"?!f.plan:_e==="missing_zone"?De().filter(U=>U.floorId===f.id).length===0:!0),i=R?fa(R):[],I=x.location?`${x.location.lng.toFixed(4)}, ${x.location.lat.toFixed(4)}`:"未设置坐标";return`
      <div class="dep-project-strip">
        <div class="dep-project-strip-main">
          <div class="dep-project-cover">
            <img src="${g(x.imageUrl??"./media/gzlab.jpg")}" alt="${g(x.name)}" />
          </div>
          <div style="min-width:0; display:flex; flex-direction:column; gap:3px;">
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
              <strong style="font-size:16px; font-weight:500; color:var(--pacom-text-primary);">${g(x.name)}</strong>
              <span class="pacom-badge pacom-badge--neutral">${T.length} 栋楼宇</span>
              <span class="pacom-badge pacom-badge--neutral">${A} 个楼层</span>
            </div>
            <span class="pacom-row-sub">${g(x.city||"未填城市")}${x.address?` ｜ ${g(x.address)}`:""} ｜ 坐标 ${g(I)}</span>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-edit-proj="1" ${w?"":"disabled"}>编辑项目</button>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <div>
            <h2 class="pacom-section-title">园区楼宇（${T.length} 栋）</h2>
            <span class="pacom-row-sub">点击楼宇卡片切换下方楼层列表，点「编辑参数」修改外观与层数</span>
          </div>
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-bld="1" ${w?"":"disabled"}>+ 新建楼宇</button>
        </div>
        ${T.length===0?`
            <div class="dep-empty-card">
              <div class="dep-empty-icon">${Ae("building-2",20)}</div>
              <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${g(x.name)} 暂无楼宇</strong>
              <span class="pacom-row-sub">添加楼宇并设置层数结构后，系统将自动生成对应楼层供上传平面图。</span>
              <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-bld="1" ${w?"":"disabled"}>+ 添加第一栋楼宇</button>
            </div>`:`
            <div class="dep-building-grid">
              ${T.map(f=>{const U=fe(f.id),me=U.filter(ye=>!!ye.plan).length,te=U.length>0?Math.round(me/U.length*100):0,Q=fa(f),J=R?.id===f.id,M=U.length===0?"pacom-badge--neutral":me===U.length?"pacom-badge--online":"pacom-badge--warning";return`
                    <article class="dep-building-card ${J?"is-active":""}" data-select-building="${g(f.id)}">
                      <div class="dep-building-stage">
                        <img src="${g(f.imageUrl??"./media/building-e.webp")}" alt="${g(f.name)}" />
                      </div>
                      <div class="dep-building-body">
                        <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                          <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${g(f.name)}</strong>
                          <span class="pacom-badge ${M}">${U.length===0?"未建层":`${me}/${U.length} 底图`}</span>
                        </div>
                        <div class="pacom-row-sub">地上 ${f.aboveFloors} 层${f.belowFloors>0?` ｜ 地下 ${f.belowFloors} 层`:""}${f.hasRoof?" ｜ RF":""}${f.areaSqm?` ｜ ${f.areaSqm} m²`:""}</div>
                        <div class="pacom-progress-track">
                          <div class="pacom-progress-fill" style="width:${te}%; background:${te===100?"var(--pacom-status-online)":"var(--pacom-accent-solid)"};"></div>
                        </div>
                        ${Q.length>0?`<div style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:12px; color:var(--pacom-text-secondary);">
                                 <span>尚缺 ${Q.length} 个楼层</span>
                                 <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="height:22px; padding:0 6px; font-size:12px;" data-fill-missing-floors="${g(f.id)}" ${w?"":"disabled"}>一键补齐</button>
                               </div>`:""}
                      </div>
                      <div class="dep-building-foot">
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-building="${g(f.id)}" ${w?"":"disabled"}>编辑参数</button>
                        <span class="pacom-row-sub" style="font-size:12px; color:${J?"var(--pacom-accent-fg)":"var(--pacom-text-secondary)"};">${J?"当前查看中":"点击切换楼层"}</span>
                      </div>
                    </article>`}).join("")}
              <button type="button" class="dep-building-add-card" data-open-new-bld="1" ${w?"":"disabled"}>
                ${Ae("plus",20)}
                <span style="font-size:13px;">新建楼宇</span>
              </button>
            </div>`}
      </section>

      ${R?`
          <section class="pacom-section">
            <div class="pacom-section-head">
              <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                <h2 class="pacom-section-title">${g(R.name)} 楼层与底图（${r.length}）</h2>
                <div class="pacom-count-pills">
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${_e==="all"}" data-floor-list-filter="all">全部 <span class="pacom-count-num">${r.length}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${_e==="missing_plan"}" data-floor-list-filter="missing_plan">缺底图 <span class="pacom-count-num">${a}</span></button>
                  <button type="button" class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px;" aria-pressed="${_e==="missing_zone"}" data-floor-list-filter="missing_zone">缺功能区 <span class="pacom-count-num">${o}</span></button>
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                ${i.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${g(R.id)}" ${w?"":"disabled"}>一键补齐 ${i.length} 层</button>`:""}
                <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-floor="1" ${w?"":"disabled"}>+ 新增楼层</button>
                <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-open-batch-modal="1" ${w?"":"disabled"}>批量导入底图</button>
              </div>
            </div>

            ${r.length===0?`
                <div class="dep-empty-card">
                  <div class="dep-empty-icon">${Ae("layers",20)}</div>
                  <strong style="font-size:15px; font-weight:500; color:var(--pacom-text-primary);">${g(R.name)} 暂无楼层</strong>
                  <span class="pacom-row-sub">可按楼宇结构一键生成全部楼层，或手动新增单个楼层。</span>
                  <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
                    <button type="button" class="pacom-btn pacom-btn--primary" data-fill-missing-floors="${g(R.id)}" ${w?"":"disabled"}>一键生成全部楼层</button>
                    <button type="button" class="pacom-btn" data-open-new-floor="1" ${w?"":"disabled"}>+ 手动新增楼层</button>
                  </div>
                </div>`:`
                <div class="pacom-table-card">
                  <div class="pacom-table-wrap">
                    <table class="pacom-table">
                      <thead>
                        <tr>
                          <th>楼层</th>
                          <th>面积</th>
                          <th>2D 平面底图</th>
                          <th>功能区</th>
                          <th>工程资料</th>
                          <th style="text-align:right;">操作</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${n.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>当前筛选无匹配楼层</strong><span>可切换回「全部」查看整栋楼层。</span></div></td></tr>':n.map(f=>{const U=De().filter(M=>M.floorId===f.id),me=[...kt,...ee].filter(M=>M.floorId===f.id),te=ze(f.id),Q=pe===f.id,J=r.filter(M=>M.id!==f.id);return`
                                    <tr>
                                      <td>
                                        <div style="display:inline-flex; align-items:center; gap:7px;">
                                          <span class="pacom-dot ${f.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                          <strong>${g(f.name)}</strong>
                                        </div>
                                      </td>
                                      <td><span class="pacom-row-sub">${f.areaSqm?`${f.areaSqm} m²`:"—"}</span></td>
                                      <td>
                                        <div style="display:inline-flex; align-items:center; gap:8px;">
                                          ${f.plan?`<button type="button" class="dep-floor-thumb" data-open-lightbox="1" data-lb-title="${g(R.name)} ${g(f.name)} 平面底图" data-lb-src="${g(f.plan.imageUrl)}" title="查看大图"><img src="${g(f.plan.imageUrl)}" alt="${g(f.name)}" /></button>
                                                 <span class="pacom-badge pacom-badge--online">已就绪</span>`:'<span class="pacom-badge pacom-badge--warning">待上传</span>'}
                                          <label class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="cursor:pointer; height:24px; padding:0 6px; font-size:12px;">
                                            <span>${f.plan?"替换":"上传"}</span>
                                            <input type="file" name="floorPlan_${g(f.id)}" accept="image/*" data-upload-floor="${g(f.id)}" style="display:none;" ${w?"":"disabled"} />
                                          </label>
                                        </div>
                                      </td>
                                      <td>
                                        ${U.length>0?`<span>${U.length} 区</span> <span class="pacom-row-sub" style="margin-left:4px;">${g(U.slice(0,2).map(M=>M.name.replace(/^7F\s*/,"")).join("、"))}${U.length>2?"…":""}</span>`:'<span class="pacom-row-sub">未划分</span>'}
                                      </td>
                                      <td><span class="pacom-row-sub">${me.length} 份</span></td>
                                      <td>
                                        <div style="display:flex; justify-content:flex-end; gap:6px;">
                                          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-expand-floor="${g(f.id)}">${Q?"收起配置":"展开配置"}</button>
                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-jump-floor-marking="${g(f.id)}">设备标记 →</button>
                                        </div>
                                      </td>
                                    </tr>
                                    ${Q?`
                                        <tr class="pacom-table-detail-row">
                                          <td colspan="6">
                                            <div class="dep-floor-expand-grid">
                                              <div class="dep-floor-expand-col">
                                                <div class="dep-plan-preview-box" style="min-height:260px;" data-single-floor-drop="${g(f.id)}">
                                                  <div class="dep-plan-toolbar">
                                                    ${f.plan?`<button type="button" class="dep-plan-tool-btn" data-open-lightbox="1" data-lb-title="${g(R.name)} ${g(f.name)} 平面底图" data-lb-src="${g(f.plan.imageUrl)}">查看大图</button>`:""}
                                                    <label class="dep-plan-tool-btn" style="cursor:pointer;">
                                                      <span>${f.plan?"替换底图":"上传底图"}</span>
                                                      <input type="file" name="floorPlanDrop_${g(f.id)}" accept="image/*" data-upload-floor="${g(f.id)}" style="display:none;" ${w?"":"disabled"} />
                                                    </label>
                                                    ${f.plan?`<button type="button" class="dep-plan-tool-btn" style="color:var(--pacom-status-critical);" data-clear-floor-plan="${g(f.id)}" ${w?"":"disabled"}>清空</button>`:""}
                                                  </div>
                                                  ${f.plan?`<img src="${g(f.plan.imageUrl)}" alt="${g(f.name)} 平面图" style="width:100%; max-height:290px; object-fit:contain; display:block;" />`:`<div style="display:flex; flex-direction:column; align-items:center; gap:6px; padding:24px; text-align:center;">
                                                           <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-primary);">拖拽 ${g(f.name)} 2D 平面图到此处</strong>
                                                           <span class="pacom-row-sub">支持透明 WebP / PNG / JPG</span>
                                                         </div>`}
                                                </div>
                                              </div>

                                              <div class="dep-floor-expand-col">
                                                <div class="pacom-settings-card" style="padding:10px 16px;">
                                                  <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                                                    <form data-save-floor="${g(f.id)}" style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                                                      <input class="pacom-input" name="fName" value="${g(f.name)}" aria-label="楼层名称" style="width:76px; height:32px; flex:none;" required ${w?"":"disabled"} />
                                                      <input class="pacom-input" name="fArea" type="number" step="0.1" value="${g(f.areaSqm??"")}" placeholder="面积 m²" aria-label="建筑面积" style="width:110px; height:32px; flex:none;" ${w?"":"disabled"} />
                                                      <button type="submit" class="pacom-btn" ${w?"":"disabled"}>保存</button>
                                                    </form>
                                                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-delete-floor="${g(f.id)}" ${!w||te.length>0?`disabled title="${te.length>0?`已关联 ${te.length} 台设备，请先解绑后再删除`:"当前角色只读"}"`:""}>删除楼层</button>
                                                  </div>
                                                </div>

                                                <div class="pacom-settings-card" style="padding:4px 16px;">
                                                  <div class="pacom-setting-row" style="padding:10px 0; justify-content:space-between; gap:8px;">
                                                    <div class="pacom-tabs" role="tablist" aria-label="楼层附属配置">
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${je==="zones"}" data-floor-detail-tab="zones">功能区（${U.length}）</button>
                                                      <button type="button" class="pacom-tab" role="tab" aria-selected="${je==="docs"}" data-floor-detail-tab="docs">竣工图纸与手册（${me.length}）</button>
                                                    </div>
                                                    ${je==="zones"?U.length>0&&J.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-open-copy-zones="${g(f.id)}" ${w?"":"disabled"}>复用至其他层…</button>`:"":`<label class="pacom-btn pacom-btn--sm" style="cursor:pointer;"><span>+ 关联文件</span><input type="file" name="attachDoc_${g(f.id)}" accept=".pdf,.xlsx,.xls,.dwg,.png,.jpg,.webp" data-attach-doc="${g(f.id)}" style="display:none;" ${w?"":"disabled"} /></label>`}
                                                  </div>
                                                  ${je==="zones"?`
                                                        ${U.length===0?`
                                                            <div class="pacom-setting-row" style="padding:10px 0; flex-direction:column; align-items:flex-start; gap:8px;">
                                                              <span class="pacom-row-sub">暂未划分功能区，可一键套用常用模板：</span>
                                                              <div style="display:flex; flex-wrap:wrap; gap:6px;">
                                                                ${Et.map(M=>`<button type="button" class="pacom-btn pacom-btn--sm" data-apply-zone-tpl="${g(M.key)}" data-tpl-floor="${g(f.id)}" ${w?"":"disabled"}>+ ${g(M.label)}</button>`).join("")}
                                                              </div>
                                                            </div>`:U.map(M=>h===M.id?`
                                                                      <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-save-edit-zone="${g(M.id)}" data-zone-floor="${g(f.id)}">
                                                                        <input class="pacom-input" name="zName" value="${g(M.name)}" style="width:180px; height:30px; flex:none;" required />
                                                                        <select class="pacom-select" name="zCat" style="width:110px; height:30px;">
                                                                          ${Object.keys(ot).map(ye=>`<option value="${ye}" ${M.category===ye?"selected":""}>${ot[ye]}</option>`).join("")}
                                                                        </select>
                                                                        <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">保存</button>
                                                                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-edit-zone="1">取消</button>
                                                                      </form>`:`
                                                                      <div class="pacom-setting-row" style="padding:9px 0;">
                                                                        <div class="pacom-setting-meta" style="min-width:140px;">
                                                                          <span class="pacom-setting-title">${g(M.name)} <span class="pacom-badge pacom-badge--neutral">${g(ot[M.category]??M.category)}</span></span>
                                                                        </div>
                                                                        <div class="pacom-setting-control">
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-zone="${g(M.id)}" ${w?"":"disabled"}>编辑</button>
                                                                          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-del-zone="${g(M.id)}" ${w?"":"disabled"}>删除</button>
                                                                        </div>
                                                                      </div>`).join("")}
                                                        <form class="pacom-setting-row" style="padding:10px 0; gap:6px; justify-content:flex-start;" data-add-zone="${g(f.id)}">
                                                          <input class="pacom-input" name="zoneName" placeholder="新功能区名称（如：${g(f.name)} 东侧实验区）" style="width:210px; height:32px; flex:none;" required ${w?"":"disabled"} />
                                                          <select class="pacom-select" name="zoneCat" style="width:112px; height:32px;" ${w?"":"disabled"}>
                                                            <option value="lab">实验区</option>
                                                            <option value="office">办公区</option>
                                                            <option value="meeting">会议室</option>
                                                            <option value="corridor">走廊/公区</option>
                                                            <option value="utility">机房/后勤</option>
                                                            <option value="outdoor">露台/活动区</option>
                                                          </select>
                                                          <button type="submit" class="pacom-btn" ${w?"":"disabled"}>+ 添加</button>
                                                        </form>`:me.length===0?'<div class="pacom-setting-row" style="padding:12px 0;"><span class="pacom-row-sub">暂无关联图纸或设备手册，可点击右上角「+ 关联文件」挂载。</span></div>':me.map(M=>`
                                                              <div class="pacom-setting-row" style="padding:9px 0;">
                                                                <div class="pacom-setting-meta" style="min-width:140px;">
                                                                  <span class="pacom-setting-title">${g(M.name)}</span>
                                                                  <span class="pacom-row-sub">${g(M.category)} ｜ ${g(M.size)} ｜ ${g(M.updatedAt)}</span>
                                                                </div>
                                                                <div class="pacom-setting-control">
                                                                  <button type="button" class="pacom-btn pacom-btn--sm" data-preview-doc="${g(M.id)}">查阅</button>
                                                                </div>
                                                              </div>`).join("")}
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>`:""}`}).join("")}
                      </tbody>
                    </table>
                  </div>
                </div>`}
          </section>`:""}
    `}function La(w){if(!_||m!=="devices"||y==="groups")return"";const T=ze(le).find(a=>a.id===b)??null;if(!T)return"";const A=p.get(T.id)??{proxy:!1,relay:!1,meshUuid:`mesh-${le.slice(-4)}`},R=k.filter(a=>a.deviceId===T.id),r=xe.get(T.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450};return`
      <aside class="pacom-drawer" style="width:376px;" aria-label="设备配置抽屉">
        <div class="pacom-drawer-head">
          <div style="min-width:0;">
            <h2 class="pacom-drawer-title">${g(T.name)}</h2>
            <div class="pacom-row-sub">${g(Ue(T.logicalZoneId))} ｜ v${T.version}</div>
          </div>
          <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${Ae("x",16)}</button>
        </div>

        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-place="1" ${w?"":"disabled"}>${ne?"点击图纸定位中…":"点图更新坐标"}</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${g(T.id)}">Ping 闪灯 5s</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-test="1">单机自检</button>
        </div>

        <div class="pacom-tabs" role="tablist" aria-label="设备配置分页" style="align-self:flex-start;">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${O==="binding"}" data-drawer-tab="binding">绑定与安装</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${O==="params"}" data-drawer-tab="params">自治参数</button>
        </div>

        ${O==="binding"?`
            ${T.category==="lighting"?`
                <div class="pacom-control-box" style="gap:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:450;">回路可视化灯点（${R.length}）</span>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${g(T.id)}" ${w?"":"disabled"}>+ 添加灯点</button>
                  </div>
                  ${R.map(a=>`
                      <div class="pacom-receipt-item" style="padding:6px 8px; font-size:13px;">
                        <span><strong>${g(a.channel)}</strong> ｜ ${g(a.label)}</span>
                        <button type="button" class="pacom-btn pacom-btn--ghost" style="height:24px; padding:0 6px; font-size:12px;" data-del-light-marker="${g(a.id)}" ${w?"":"disabled"}>删除</button>
                      </div>`).join("")}
                </div>`:""}

            ${T.category!=="hvac"&&T.category!=="meter"?`
                <div class="pacom-control-box" style="gap:6px;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px; font-weight:450;">蓝牙 Mesh 节点角色</span>
                    <code style="font-size:12px;">${g(A.meshUuid)}</code>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <span>Proxy 代理（建议每层 2–3 个）</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${A.proxy}" data-toggle-mesh-role="proxy" data-mesh-dev="${g(T.id)}" ${w?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <span>Relay 中继（建议 ≤10%，面板默认关）</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${A.relay}" data-toggle-mesh-role="relay" data-mesh-dev="${g(T.id)}" ${w?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                  </div>
                </div>`:""}

            <form data-role="binding-form" class="pacom-control-box" style="gap:10px;">
              <span style="font-size:14px; font-weight:450;">硬件绑定与物理安装复核</span>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">通信协议</span>
                  <select class="pacom-select" name="protocol" aria-label="通信协议">
                    ${["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"].map(a=>`<option value="${a}" ${T.hardwareBinding?.protocol===a?"selected":""}>${a.toUpperCase()}</option>`).join("")}
                  </select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">网络地址 / 主题</span>
                  <input class="pacom-input" name="networkAddress" placeholder="地址或主题" value="${g(T.hardwareBinding?.networkAddress??"")}" />
                </label>
              </div>
              <div style="display:flex; align-items:flex-end; justify-content:space-between; gap:10px;">
                <label class="dep-field" style="flex:1;">
                  <span class="dep-field-label">端口 / 回路</span>
                  <input class="pacom-input" name="portOrChannel" placeholder="端口或回路" value="${g(T.hardwareBinding?.portOrChannel??"")}" />
                </label>
                <span style="display:inline-flex; align-items:center; gap:6px; font-size:13px; height:32px; flex-shrink:0;">
                  <span>物理已复核</span>
                  <button type="button" class="pacom-switch" role="switch" aria-checked="${Z}" data-toggle-phys="1" ${w?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
                </span>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${w?"":"disabled"}>保存绑定与复核（v${T.version}）</button>
            </form>`:`
            <form data-save-dev-params="${g(T.id)}" class="pacom-control-box" style="gap:10px;">
              <div>
                <div style="font-size:14px; font-weight:450;">人感与光感自治参数</div>
                <div class="pacom-row-sub">自动关灯延时、恢复自动延时与光照度门限</div>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">自动关灯延时 (分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${r.offDelayMin}" ${w?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">恢复自动延时 (分)</span><input class="pacom-input" name="restoreMin" type="number" value="${r.restoreMin}" ${w?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">开灯光感门限 (lx)</span><input class="pacom-input" name="luxOn" type="number" value="${r.luxOn}" ${w?"":"disabled"} /></label>
                <label class="dep-field"><span class="dep-field-label">关灯光感门限 (lx)</span><input class="pacom-input" name="luxOff" type="number" value="${r.luxOff}" ${w?"":"disabled"} /></label>
              </div>
              <button class="pacom-btn pacom-btn--primary" type="submit" ${w?"":"disabled"}>下发设备参数</button>
            </form>`}
      </aside>
    `}function Ya(w){if(H.projects.length===0)return`
        <main class="pacom-spatial-stage" style="flex:1; min-width:0; display:flex; align-items:center; justify-content:center; padding:24px;">
          <div style="max-width:480px; width:100%;">${Qe(w,"map-pin")}</div>
        </main>`;const x=ae?fe(ae):[],T=x.find(n=>n.id===le)??x[0],A=ze(le),R=De().filter(n=>n.floorId===le),r=_?A.find(n=>n.id===b)??null:null,a=X.trim().toLowerCase(),o=A.filter(n=>!(ue==="unverified"&&n.physicalInstalled||ue==="unplaced"&&n.planPoint||a&&!`${n.name} ${Ue(n.logicalZoneId)}`.toLowerCase().includes(a)));return`
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(420px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${Ae("search",16)}
            <input class="pacom-hud-input" name="canvasSearch" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${g(X)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill ${K?"is-active":""}" data-toggle-hud-pool="1">设备池 ${A.length}</button>
            <button type="button" class="pacom-hud-pill" data-open-new-dev="1" ${w?"":"disabled"}>+ 新增设备</button>
          </div>

          ${K?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:14px; font-weight:450;">${g(T?.name??"7F")} 设备池（${o.length}）</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${Ae("x",16)}</button>
                </div>
                <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                  <div class="pacom-count-pills">
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${ue==="all"}" data-dev-filter="all">全部 <span class="pacom-count-num">${A.length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${ue==="unverified"}" data-dev-filter="unverified">待复核 <span class="pacom-count-num">${A.filter(n=>!n.physicalInstalled).length}</span></button>
                    <button type="button" class="pacom-count-pill" style="height:26px; padding:0 8px; font-size:12px;" aria-pressed="${ue==="unplaced"}" data-dev-filter="unplaced">未标记 <span class="pacom-count-num">${A.filter(n=>!n.planPoint).length}</span></button>
                  </div>
                </div>
                <div class="pacom-list" style="padding:6px;">
                  ${o.length===0?'<div class="pacom-row-sub" style="padding:18px; text-align:center;">无匹配设备</div>':o.map(n=>`
                            <div class="pacom-row ${n.id===b&&_?"is-selected":""}" data-pick-dev="${g(n.id)}" style="padding:8px;">
                              <div style="min-width:0;">
                                <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${g(n.name)}</div>
                                <div class="pacom-row-sub">${g(Ue(n.logicalZoneId))} ｜ ${n.physicalInstalled?"已复核":"待复核"}</div>
                              </div>
                              <span class="pacom-badge ${n.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${n.planPoint?"已标记":"未标记"}</span>
                            </div>`).join("")}
                </div>
              </div>`:""}
        </div>

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${ne?"crosshair":"grab"};">
          ${T?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${ve}px, ${be}px) scale(${F});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${g(T.plan.imageUrl)}" alt="${g(T.name)} 平面图" />
                  ${V==="zone"?R.map(n=>{const i=se[n.id];return i?`<div class="pacom-zone-hotspot is-active" style="left:${i.left}%; top:${i.top}%; width:${i.width}%; height:${i.height}%;"><span class="pacom-zone-tag">${g(n.name.replace(/^7F\s*/,""))}</span></div>`:""}).join(""):""}
                  ${A.filter(n=>n.planPoint).map(n=>`
                      <button type="button" class="pacom-pin ${n.id===b&&_?"is-selected":""} ${n.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(n.planPoint.x*100).toFixed(2)}%; top:${(n.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${g(n.id)}" title="${g(n.name)}">
                        <span class="pacom-dot ${n.connectivity==="online"?"pacom-dot--online":"pacom-dot--offline"}"></span>
                        <span>${g(rs(n))}</span>
                      </button>`).join("")}
                  ${V==="light_marker"||r?.category==="lighting"?k.filter(n=>A.some(i=>i.id===n.deviceId)).map(n=>`
                            <span class="dep-light-dot" style="left:${(n.x*100).toFixed(1)}%; top:${(n.y*100).toFixed(1)}%;" title="${g(n.label)}（${g(n.channel)}）">
                              ${Ae("sparkles",12)}<span>${g(n.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-jump-floor-config="${g(le)}">前往「项目配置」上传平面底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${x.map(n=>`
              <button type="button" class="pacom-elev-item ${n.id===le?"is-active":""}" data-scrubber-floor="${g(n.id)}" title="${g(n.name)}${n.plan?" ｜ 已传底图":" ｜ 待传底图"}">
                ${n.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${g(n.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标记画笔与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${V==="device"}" data-brush="device">设备标记</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${V==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${V==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${Ae("minus",16)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(F*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${Ae("plus",16)}</button>
        </div>
      </main>
    `}function Qa(w){if(H.projects.length===0)return Qe(w,"list");const x=ze(le),T=L.trim().toLowerCase(),A=x.filter(r=>!(N==="online"&&r.connectivity!=="online"||N==="offline"&&r.connectivity!=="offline"||N==="unverified"&&r.physicalInstalled||T&&!`${r.name} ${Ue(r.logicalZoneId)} ${r.hardwareBinding?.protocol??""}`.toLowerCase().includes(T))),R=x.filter(r=>r.connectivity==="online").length;return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="deviceListSearch" style="width:220px;" data-list-search placeholder="搜索设备名称或功能区…" value="${g(L)}" aria-label="搜索设备列表" />
          <select class="pacom-select" name="deviceListFilter" data-list-filter aria-label="按设备状态筛选">
            <option value="all" ${N==="all"?"selected":""}>全部状态（${x.length}）</option>
            <option value="online" ${N==="online"?"selected":""}>仅看在线（${R}）</option>
            <option value="offline" ${N==="offline"?"selected":""}>仅看离线（${x.length-R}）</option>
            <option value="unverified" ${N==="unverified"?"selected":""}>待物理复核（${x.filter(r=>!r.physicalInstalled).length}）</option>
          </select>
          <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${Ae("refresh-cw",16)}</button>
        </div>
        <div class="pacom-log-filters">
          <button type="button" class="pacom-btn pacom-btn--sm" data-open-new-dev="1" ${w?"":"disabled"}>+ 新增设备</button>
          <button type="button" class="pacom-btn pacom-btn--sm" data-export-inv="1">导出 CSV</button>
        </div>
      </div>

      <div class="pacom-table-card">
        <div class="pacom-table-wrap">
          <table class="pacom-table">
            <thead><tr><th>设备与功能区</th><th>1. 图上标记</th><th>2. 网络绑定</th><th>3. 物理复核</th><th>4. 在线态</th><th style="text-align:right;">操作</th></tr></thead>
            <tbody>
              ${A.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配设备</strong><span>可调整搜索词、切换筛选，或点击「+ 新增设备」。</span></div></td></tr>':A.map(r=>`
                        <tr style="cursor:pointer;" data-open-dev-drawer="${g(r.id)}">
                          <td><div style="font-weight:450;">${g(r.name)}</div><div class="pacom-row-sub">${g(Ue(r.logicalZoneId))} ｜ v${r.version}</div></td>
                          <td><span class="pacom-badge ${r.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${r.planPoint?`${Math.round(r.planPoint.x*100)}%,${Math.round(r.planPoint.y*100)}%`:"未标记"}</span></td>
                          <td><span class="pacom-badge ${r.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${r.hardwareBinding?r.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                          <td><span class="pacom-badge ${r.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${r.physicalInstalled?"已复核":"待复核"}</span></td>
                          <td><span class="pacom-badge ${r.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${r.connectivity==="online"?"在线":"离线"}</span></td>
                          <td>
                            <div style="display:flex; justify-content:flex-end; gap:6px;">
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${g(r.id)}">Ping</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-open-dev-params="${g(r.id)}">配置</button>
                              <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-dev="${g(r.id)}">自检</button>
                            </div>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
        <div class="pacom-table-footer">
          <span>显示 ${A.length} / ${x.length} 台设备 ｜ ${R} 在线 ｜ ${x.length-R} 离线</span>
          <button type="button" class="pacom-btn pacom-btn--sm" data-dev-subtab="marking">切换至设备标记 →</button>
        </div>
      </div>
    `}function Ca(w){if(H.projects.length===0)return Qe(w,"folder-kanban");const x=re.filter(R=>R.floorId===le||le===S.floorId&&R.floorId===S.floorId),T=x.filter(R=>R.track==="mesh_auto"),A=x.filter(R=>R.track==="cloud_biz");return`
      <div class="pacom-grid-2">
        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">端侧蓝牙 Mesh 自治组（${T.length}）</h2>
            <span class="pacom-badge pacom-badge--accent">自动纳入蓝牙适配器防漏报</span>
          </div>
          <div class="pacom-settings-card">
            ${T.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无端侧自治分组，点击右上角「+ 新建分组」创建。</span></div>':T.map(R=>`
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">${g(R.name)} <span class="pacom-badge pacom-badge--neutral">${g(R.groupType)}</span></span>
                          <span class="pacom-setting-desc">成员 ${R.deviceIds.length} 台 ｜ 断网仍可端侧自治联动</span>
                        </div>
                        <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${g(R.id)}">组控测试</button></div>
                      </div>`).join("")}
          </div>
        </section>

        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">云端业务分组（${A.length}）</h2>
            <span class="pacom-row-sub">空调 / 标牌 / 部门组，无需蓝牙配网</span>
          </div>
          <div class="pacom-settings-card">
            ${A.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无云端业务分组，点击右上角「+ 新建分组」创建。</span></div>':A.map(R=>`
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">${g(R.name)} <span class="pacom-badge pacom-badge--neutral">${g(R.groupType)}</span></span>
                          <span class="pacom-setting-desc">成员 ${R.deviceIds.length} 台 ｜ 供首页批控与标牌复用</span>
                        </div>
                        <div class="pacom-setting-control"><button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${g(R.id)}">组控测试</button></div>
                      </div>`).join("")}
          </div>
        </section>
      </div>
    `}function pa(w){if(H.projects.length===0)return Qe(w,"waypoints");const x=ze(le),T=De().filter(i=>i.floorId===le),A=x.filter(i=>i.category!=="hvac"&&i.category!=="meter"),R=A.filter(i=>p.get(i.id)?.proxy).length,r=A.filter(i=>p.get(i.id)?.relay).length,a=x.filter(i=>i.category==="gateway"),o=x.filter(i=>p.get(i.id)?.relay||p.get(i.id)?.proxy),n=x.filter(i=>i.category!=="gateway");return`
      <div class="pacom-card" style="gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
            <strong style="font-size:14px; font-weight:450;">本层蓝牙 Mesh 网络</strong>
            <span class="pacom-badge ${Te?"pacom-badge--warning":"pacom-badge--online"}">${Te?"有变更待同步":"协同锁空闲 ｜ 已同步"}</span>
            <span class="pacom-row-sub">Mesh 节点 ${A.length} 台 ｜ Proxy ${R} 个 ｜ Relay ${r} 个 ｜ 边缘基线 v${He}</span>
          </div>
        </div>
        ${Fe.length>0?`<div style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                ${Fe.map(i=>`
                    <div class="pacom-receipt-item" style="padding:8px 10px;">
                      <div><strong>${g(i.title)}</strong> <span class="pacom-row-sub">｜ ${g(i.detail)}</span></div>
                      <span class="pacom-badge ${i.level==="ok"?"pacom-badge--online":i.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${i.level==="ok"?"通过":i.level==="warn"?"建议优化":"异常"}</span>
                    </div>`).join("")}
              </div>`:""}
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">自动生成设备拓扑（点击节点直达设备标记）</h2>
          <div class="pacom-tabs">
            <button type="button" class="pacom-tab" aria-selected="${de==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
            <button type="button" class="pacom-tab" aria-selected="${de==="business"}" data-topo-mode="business">业务联动与供能流向</button>
          </div>
        </div>
        ${de==="mesh"?`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器</strong>
                ${a.length===0?'<div class="pacom-row-sub">本层暂未配置网关节点。</div>':a.map(i=>`
                          <button type="button" class="dep-topo-node ${i.connectivity==="offline"?"is-issue":""}" data-topo-jump="${g(i.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${g(i.name)}</strong><span class="pacom-badge pacom-badge--online">网桥中心</span></div>
                            <span class="pacom-row-sub">${g(i.hardwareBinding?.networkAddress??"-")} ｜ 云边同步通道</span>
                          </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（Proxy / Relay）</strong>
                ${o.length===0?'<div class="pacom-row-sub">暂未启用中继或代理节点，可在「设备管理」抽屉中为传感器开启。</div>':o.map(i=>{const I=p.get(i.id);return`
                            <button type="button" class="dep-topo-node ${i.connectivity==="offline"?"is-issue":""}" data-topo-jump="${g(i.id)}">
                              <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${g(i.name)}</strong><span class="pacom-badge pacom-badge--accent">${I?.proxy?"Proxy":""}${I?.proxy&&I?.relay?" + ":""}${I?.relay?"Relay":""}</span></div>
                              <span class="pacom-row-sub">${g(Ue(i.logicalZoneId))}</span>
                            </button>`}).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 末端节点（异常自动标红）</strong>
                ${n.length===0?'<div class="pacom-row-sub">本层暂无末端设备。</div>':n.map(i=>`
                          <button type="button" class="dep-topo-node ${i.connectivity==="offline"?"is-issue":""}" data-topo-jump="${g(i.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${g(i.name)}</strong><span class="pacom-badge ${i.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${i.connectivity==="online"?"在线":"离线"}</span></div>
                            <span class="pacom-row-sub">${g(Ue(i.logicalZoneId))} ｜ ${g(i.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                          </button>`).join("")}
              </div>
            </div>`:`
            <div class="dep-topo-grid">
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">上游源头 / 传感触发</strong>
                ${x.filter(i=>i.category==="sensor"||i.category==="gateway").map(i=>`
                    <button type="button" class="dep-topo-node" data-topo-jump="${g(i.id)}">
                      <strong>${g(i.name)}</strong>
                      <span class="pacom-row-sub">${i.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">受控末端（照明 / 暖通）</strong>
                ${x.filter(i=>i.category==="lighting"||i.category==="hvac").map(i=>`
                    <button type="button" class="dep-topo-node ${i.connectivity==="offline"?"is-issue":""}" data-topo-jump="${g(i.id)}">
                      <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${g(i.name)}</strong><span class="pacom-badge ${i.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${i.connectivity==="online"?"正常":"离线"}</span></div>
                      <span class="pacom-row-sub">服务：${g(Ue(i.logicalZoneId))}</span>
                    </button>`).join("")}
              </div>
              <div class="dep-topo-col">
                <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">服务功能区（影响面）</strong>
                ${T.map(i=>{const I=x.filter(U=>U.logicalZoneId===i.id),f=I.some(U=>U.connectivity==="offline");return`
                      <div class="dep-topo-node ${f?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center;"><strong>${g(i.name.replace(/^7F\s*/,""))}</strong><span class="pacom-badge ${f?"pacom-badge--warning":"pacom-badge--online"}">${I.length} 台设备</span></div>
                        <span class="pacom-row-sub">${f?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                      </div>`}).join("")}
              </div>
            </div>`}
      </section>
    `}function Xa(w){if(H.projects.length===0)return Qe(w,"plug");const x=ie.reduce((r,a)=>r+a.collectedPoints,0),T=ie.reduce((r,a)=>r+a.calculatedPoints,0),A=ie.filter(r=>r.status==="connected").length,R=ie.filter(r=>r.status!=="connected");return`
      <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">已连通网关通道</span><div class="pacom-kpi-value">${A}<span class="pacom-kpi-unit">/ ${ie.length}</span></div><span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">数据采集健康度</span><div class="pacom-kpi-value">${ie.length?Math.round(A/ie.length*100):100}<span class="pacom-kpi-unit">%</span></div><span class="pacom-kpi-delta">区分网关断流与末端真故障</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">原始采集点</span><div class="pacom-kpi-value">${x}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">协议直采实时遥测</span></div>
        <div class="pacom-kpi-cell"><span class="pacom-kpi-label">衍生计算点</span><div class="pacom-kpi-value">${T}<span class="pacom-kpi-unit">点</span></div><span class="pacom-kpi-delta">能耗与聚合虚拟点位</span></div>
      </div>

      ${R.length>0?`<div class="pacom-banner pacom-banner--critical">
              <div class="pacom-banner-text">
                <span class="pacom-banner-title">检测到 ${R.length} 条采集通道通信降级（${R.map(r=>r.name).join("、")}）</span>
                <span class="pacom-banner-sub">建议优先核查局域网 UDP/TCP 端口冲突、RS485 终端电阻与从站地址。</span>
              </div>
            </div>`:""}

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
                ${ie.map(r=>{const a=os[r.status]??{label:r.status,cls:"pacom-badge--neutral"},o=r.status==="connected"?98:r.status==="degraded"?62:0,n=o>=75?"var(--pacom-status-online)":o>=50?"var(--pacom-status-warning)":"var(--pacom-status-critical)",i=Re===r.id,I=i?cs(r,ge):[];return`
                      <tr>
                        <td><strong>${g(r.name)}</strong></td>
                        <td><span class="pacom-badge pacom-badge--neutral">${r.protocol.toUpperCase()}</span></td>
                        <td><code style="font-size:12px;">${g(r.endpoint)}</code></td>
                        <td>采集 ${r.collectedPoints} / 计算 ${r.calculatedPoints}</td>
                        <td style="min-width:130px;">
                          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span class="pacom-badge ${a.cls}">${a.label}</span>
                            <span class="pacom-row-sub">${o}%</span>
                          </div>
                          <div class="pacom-progress-track"><div class="pacom-progress-fill" style="width:${o}%; background:${n};"></div></div>
                        </td>
                        <td>
                          <div style="display:flex; justify-content:flex-end; gap:6px;">
                            <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${g(r.id)}">${i?"收起点位":"点位质量"}</button>
                            <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${g(r.id)}">测通</button>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-endpoint="${g(r.id)}" data-endpoint-val="${g(r.endpoint)}">${we===r.id?"已复制":"复制"}</button>
                          </div>
                        </td>
                      </tr>
                      ${i?`
                          <tr class="pacom-table-detail-row">
                            <td colspan="6">
                              <div style="display:flex; flex-direction:column; gap:6px;">
                                <div style="display:flex; justify-content:space-between; font-size:13px;">
                                  <strong>传感器 / 子设备采集质量明细（${g(r.name)}）</strong>
                                  <span class="pacom-row-sub">在线正常 ｜ 延迟 &gt;30m ｜ 断流 &gt;3×间隔</span>
                                </div>
                                ${I.map(f=>`
                                    <div class="pacom-receipt-item">
                                      <span><strong>${g(f.deviceName)}</strong> ｜ ${g(f.pointName)}</span>
                                      <span style="display:inline-flex; align-items:center; gap:8px;">
                                        <span class="pacom-row-sub">当前 ${g(f.value)} ｜ ${g(f.lastSeen)}</span>
                                        <span class="pacom-badge ${f.quality==="online"?"pacom-badge--online":f.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                          ${f.quality==="online"?"在线正常":f.quality==="delayed"?"延迟 >30m":"断流"}
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
    `}function et(w){const x=[],T=H.projects.find(r=>r.id===P)??H.projects[0]??null,A=H.buildings.find(r=>r.id===ae)??(T?H.buildings.find(r=>r.projectId===T.id):null)??null;if(E&&x.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建项目">
          <form class="dep-modal-card" data-create-project="1">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建项目</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" placeholder="如：广实3号园" required /></label>
                <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="广州市" /></label>
                <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" placeholder="街道与门牌号" /></label>
                <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" placeholder="113.3824" /></label>
                <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" placeholder="23.0652" /></label>
              </div>
            </div>
            <div class="dep-modal-foot">
              <span></span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建项目</button>
              </div>
            </div>
          </form>
        </div>`),G&&T){const a=H.buildings.filter(o=>o.projectId===T.id).reduce((o,n)=>o+fe(n.id).reduce((i,I)=>i+ze(I.id).length,0),0);x.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑项目">
          <form class="dep-modal-card" data-save-project="${g(T.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑项目：${g(T.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                <img src="${g(T.imageUrl??"./media/gzlab.jpg")}" alt="${g(T.name)}" style="width:84px; height:54px; object-fit:cover; border-radius:6px; border:var(--hw) solid var(--pacom-border-subtle);" />
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:450;">项目封面图</div>
                  <div class="pacom-row-sub">用于空间总览的园区俯瞰展示</div>
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>更换封面</span>
                  <input type="file" name="projCoverUpload" accept="image/*" data-upload-proj="${g(T.id)}" style="display:none;" ${w?"":"disabled"} />
                </label>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" value="${g(T.name)}" required /></label>
                <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="${g(T.city??"")}" /></label>
                <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" value="${g(T.address??"")}" /></label>
                <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" value="${g(T.location?.lng??"")}" /></label>
                <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" value="${g(T.location?.lat??"")}" /></label>
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-proj="${g(T.id)}" ${!w||a>0?`disabled title="${a>0?`包含 ${a} 台运行中设备，请先解绑后再删除`:"只读"}"`:""}>删除项目</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${w?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}Le&&T&&x.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建楼宇">
          <form class="dep-modal-card" data-create-bld="${g(T.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建楼宇（${g(T.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" placeholder="如：G栋" required /></label>
                <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" placeholder="选填" /></label>
                <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="12" /></label>
                <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="0" /></label>
              </div>
              <div style="display:flex; align-items:center; gap:18px; flex-wrap:wrap; font-size:13px;">
                <label style="display:inline-flex; align-items:center; gap:6px;"><input type="checkbox" name="bRoof" checked />含屋面层 (RF)</label>
                <label style="display:inline-flex; align-items:center; gap:6px;"><input type="checkbox" name="bAutoFloors" checked />创建后自动生成全部楼层</label>
              </div>
            </div>
            <div class="dep-modal-foot">
              <span></span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建楼宇</button>
              </div>
            </div>
          </form>
        </div>`);const R=C?H.buildings.find(r=>r.id===C)??null:null;if(R){const r=fe(R.id),a=r.reduce((n,i)=>n+ze(i.id).length,0),o=fa(R);x.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑楼宇">
          <form class="dep-modal-card" data-save-building="${g(R.id)}">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">编辑楼宇：${g(R.name)}</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle);">
                <img src="${g(R.imageUrl??"./media/building-e.webp")}" alt="${g(R.name)}" style="width:72px; height:54px; object-fit:contain; border-radius:6px; background:#fff; border:var(--hw) solid var(--pacom-border-subtle);" />
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:450;">楼宇外观 / 白模图</div>
                  <div class="pacom-row-sub">支持透明 PNG / WebP / JPG</div>
                </div>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer;">
                  <span>替换图片</span>
                  <input type="file" name="bldImgUpload" accept="image/*" data-upload-bld="${g(R.id)}" style="display:none;" ${w?"":"disabled"} />
                </label>
              </div>
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" value="${g(R.name)}" required /></label>
                <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" value="${g(R.areaSqm??"")}" placeholder="选填" /></label>
                <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${R.aboveFloors}" /></label>
                <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${R.belowFloors}" /></label>
              </div>
              <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
                <label style="display:inline-flex; align-items:center; gap:6px; font-size:13px;"><input type="checkbox" name="bRoof" ${R.hasRoof?"checked":""} />含屋面层 (RF)</label>
                ${o.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${g(R.id)}">一键补齐缺失 ${o.length} 层</button>`:`<span class="pacom-row-sub">已配置 ${r.length} 个楼层</span>`}
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-delete-building="${g(R.id)}" ${!w||a>0?`disabled title="${a>0?"包含运行中设备，请先解绑后再删除":"只读"}"`:""}>删除楼宇</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${w?"":"disabled"}>保存更改</button>
              </div>
            </div>
          </form>
        </div>`)}if(v&&A&&x.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增楼层">
          <form class="dep-modal-card" data-create-floor="${g(A.id)}" style="width:min(420px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增楼层（${g(A.name)}）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div class="dep-param-grid">
                <label class="dep-field"><span class="dep-field-label">楼层名称</span><input class="pacom-input" name="fName" placeholder="如：23F / B1 / RF" required /></label>
                <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="fArea" type="number" step="0.1" placeholder="选填" /></label>
              </div>
            </div>
            <div class="dep-modal-foot">
              <span></span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">确认新增</button>
              </div>
            </div>
          </form>
        </div>`),$&&A){const r=fe(A.id),a=Ce.filter(o=>!!o.matchedFloorId).length;x.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="批量导入平面底图">
          <div class="dep-modal-card dep-modal-card--wide">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">批量导入 ${g(A.name)} 平面底图</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div class="dep-upload-drop" data-batch-dropzone="${g(A.id)}" style="padding:20px; flex-direction:column; align-items:center; text-align:center; gap:8px; ${Be?"border-color:var(--pacom-accent-solid); background:var(--pacom-accent-soft);":""}">
                <strong style="font-size:14px; font-weight:450;">拖拽多张平面图到此区域，或点击选择文件</strong>
                <span class="pacom-row-sub">自动识别 01F、首层、屋面、RF、B1 等中英文文件名，支持手动调整对应楼层</span>
                <label class="pacom-btn pacom-btn--sm" style="cursor:pointer; margin-top:4px;">
                  <span>选择多张图片</span>
                  <input type="file" name="batchFloorPlans" accept="image/*" multiple data-batch-upload-floors="${g(A.id)}" style="display:none;" ${w?"":"disabled"} />
                </label>
              </div>
              ${Ce.length>0?`<div style="display:flex; flex-direction:column; gap:8px;">
                      <div class="pacom-row-sub">已选 ${Ce.length} 张图片，已匹配 ${a} 层：</div>
                      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:6px; max-height:220px; overflow-y:auto;">
                        ${Ce.map(o=>`
                            <div class="pacom-receipt-item" style="padding:6px 8px; font-size:12px; gap:8px;">
                              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;" title="${g(o.file.name)}">${g(o.file.name)}</span>
                              <select class="pacom-select" name="overrideFloor_${g(o.id)}" style="height:26px; font-size:12px; width:92px; padding:0 6px;" data-batch-override-floor="${g(o.id)}" aria-label="指定目标楼层">
                                <option value="">未分配</option>
                                ${r.map(n=>`<option value="${g(n.id)}" ${o.matchedFloorId===n.id?"selected":""}>${g(n.name)}</option>`).join("")}
                              </select>
                            </div>`).join("")}
                      </div>
                    </div>`:""}
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-cancel-batch-upload="1" ${Ce.length===0?"disabled":""}>清空已选</button>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">关闭</button>
                <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-batch-upload="1" ${a===0?"disabled":""}>确认导入（${a} 层）</button>
              </div>
            </div>
          </div>
        </div>`)}if(Y&&A){const r=Oe().find(o=>o.id===Y),a=fe(A.id).filter(o=>o.id!==Y);r&&a.length>0&&x.push(`
          <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="复用功能区至其他楼层">
            <div class="dep-modal-card">
              <div class="dep-modal-head">
                <strong style="font-size:15px; font-weight:500;">复用 ${g(r.name)} 功能区至其他楼层</strong>
                <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
              </div>
              <div class="dep-modal-body">
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                  <span class="pacom-row-sub">勾选目标楼层（已选 ${Ee.size} 层）</span>
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="empty">空白地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="above">全部地上层</button>
                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="clear">清空</button>
                  </div>
                </div>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">
                  ${a.map(o=>{const n=Ee.has(o.id),i=De().filter(I=>I.floorId===o.id).length;return`
                        <label class="pacom-count-pill" style="height:28px; padding:0 10px; font-size:12px; cursor:pointer;" aria-pressed="${n}">
                          <input type="checkbox" name="copyFloor_${g(o.id)}" data-copy-target-floor="${g(o.id)}" ${n?"checked":""} style="margin:0;" />
                          <span>${g(o.name)}${i>0?` (${i}区)`:""}</span>
                        </label>`}).join("")}
                </div>
              </div>
              <div class="dep-modal-foot">
                <span></span>
                <div style="display:flex; gap:8px;">
                  <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                  <button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-confirm-copy-zones="${g(r.id)}" ${Ee.size===0?"disabled":""}>确认复制（${Ee.size} 层）</button>
                </div>
              </div>
            </div>
          </div>`)}if(z){const r=De().filter(a=>a.floorId===le);x.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增设备">
          <form class="dep-modal-card" data-create-dev="1" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增设备</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">设备名称</span>
                <input class="pacom-input" name="devName" placeholder="如：703 会议室三控面板" required />
              </label>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">设备类型</span>
                  <select class="pacom-select" name="devPreset">${it.map(a=>`<option value="${a.key}">${a.label}</option>`).join("")}</select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">所属功能区</span>
                  <select class="pacom-select" name="devZone">
                    <option value="">暂不分配</option>
                    ${r.map(a=>`<option value="${g(a.id)}">${g(a.name)}</option>`).join("")}
                  </select>
                </label>
              </div>
              <span class="pacom-row-sub">创建后将自动按设备类型预设蓝牙 Mesh 角色与默认位置，并标记待同步边缘。</span>
            </div>
            <div class="dep-modal-foot">
              <span></span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">确认新增</button>
              </div>
            </div>
          </form>
        </div>`)}return u&&x.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建分组">
          <form class="dep-modal-card" data-create-group="1" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新建设备分组</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">分组名称</span>
                <input class="pacom-input" name="gName" placeholder="如：7F 西侧办公区联动组" required />
              </label>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">运行模式</span>
                  <select class="pacom-select" name="gTrack">
                    <option value="mesh_auto">端侧 Mesh 自治组（含蓝牙适配器）</option>
                    <option value="cloud_biz">云端业务分组（零蓝牙依赖）</option>
                  </select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">分组类别</span>
                  <select class="pacom-select" name="gType">
                    <option value="灯光联动组（传感-面板）">灯光联动组</option>
                    <option value="调光器群控组">调光器群控组</option>
                    <option value="空调业务组">空调业务组</option>
                    <option value="行政 / 标牌管控组">标牌 / 部门组</option>
                  </select>
                </label>
              </div>
            </div>
            <div class="dep-modal-foot">
              <span></span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建分组</button>
              </div>
            </div>
          </form>
        </div>`),j&&x.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增接入通道">
          <form class="dep-modal-card" data-create-conn="1" style="width:min(480px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">新增子系统接入通道</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${Ae("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">通道名称</span>
                <input class="pacom-input" name="cName" placeholder="如：E栋 8F 中央空调网关" required />
              </label>
              <div class="dep-param-grid">
                <label class="dep-field">
                  <span class="dep-field-label">协议类型</span>
                  <select class="pacom-select" name="cProto">
                    <option value="bacnet_ip">空调 / BACnet IP</option>
                    <option value="modbus_tcp">电表 / Modbus TCP</option>
                    <option value="modbus_rtu">RS485 / Modbus RTU</option>
                    <option value="dali">照明 / DALI-2</option>
                    <option value="mqtt">空气质量 / MQTT</option>
                  </select>
                </label>
                <label class="dep-field">
                  <span class="dep-field-label">网关端点</span>
                  <input class="pacom-input" name="cEndpoint" placeholder="如：10.7.8.20:47808" required />
                </label>
              </div>
              <span class="pacom-row-sub">提交时将自动检测局域网端口冲突并执行连通校验。</span>
            </div>
            <div class="dep-modal-foot">
              <span></span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">校验并接入</button>
              </div>
            </div>
          </form>
        </div>`),x.join("")}function q(){const w=s.scope.canEditDeployment,x=s.scope.activeOverrides.find(o=>o.module==="deployment"&&o.status==="active"),T=x?`<div class="pacom-banner pacom-banner--ok">
          <div class="pacom-banner-text">
            <span class="pacom-banner-title">临时提权生效中（系统部署 ｜ ${x.durationHours}h）</span>
            <span class="pacom-banner-sub">审批人：${g(x.approvedBy)} ｜ 到期自动收回：${g(x.expiresAt.slice(0,16).replace("T"," "))} ｜ 事由：${g(x.reason)}</span>
          </div>
        </div>`:"",A=m==="devices"&&y==="marking",R=ka[m],r=m==="devices"?y==="marking"?"设备标记":y==="list"?"设备列表":"设备分组":R.title,a=m==="devices"?y==="marking"?"在 2D 平面底图上完成设备坐标标记、回路灯点布置与硬件绑定。":y==="list"?"核查本层四态设备清单，点击任意行配置硬件绑定、人感/光感参数或执行自检。":"管理端侧蓝牙 Mesh 自治联动组与云端业务分组。":R.subtitle;t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${Wa({tree:H,session:s,scope:W,maxGranularity:R.granularity,isOpen:oe,searchKeyword:B})}
            </div>
            <div class="pacom-header-meta">
              ${w?x?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${da()}
          ${A?`<div class="pacom-unified-main--canvas">
                  <div class="dep-canvas-topbar">
                    <div class="pacom-unified-head-copy">
                      <h2 class="pacom-unified-title">${r}</h2>
                      <p class="pacom-unified-subtitle">${a}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${Aa(w)}
                    </div>
                  </div>
                  ${T}
                  ${ce?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${g(ce)}</span></div>`:""}
                  ${he?`<div class="pacom-alert-banner">${g(he)}</div>`:""}
                  ${Ya(w)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner">
                  <div class="pacom-unified-head pacom-unified-head--split">
                    <div class="pacom-unified-head-copy">
                      <h2 class="pacom-unified-title">${r}</h2>
                      <p class="pacom-unified-subtitle">${a}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${Aa(w)}
                    </div>
                  </div>
                  ${T}
                  ${ce?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${g(ce)}</span></div>`:""}
                  ${he?`<div class="pacom-alert-banner">${g(he)}</div>`:""}
                  ${m==="overview"?Ja(w):m==="project_config"?ja(w):m==="devices"?y==="list"?Qa(w):Ca(w):m==="network_topo"?pa(w):Xa(w)}
                </div>
              </div>`}
          ${La(w)}
        </div>
      </div>
      ${et(w)}
      ${Pe?`
          <div class="dep-lightbox-scrim" data-lightbox-scrim="1" role="dialog" aria-modal="true" aria-label="${g(Pe.title)}">
            <div class="dep-lightbox-card">
              <div class="dep-lightbox-head">
                <strong style="font-size:14px; font-weight:500;">${g(Pe.title)}</strong>
                <button type="button" class="pacom-drawer-close" data-close-lightbox="1" aria-label="关闭预览">${Ae("x",16)}</button>
              </div>
              <div class="dep-lightbox-body">
                <img src="${g(Pe.imageUrl)}" alt="${g(Pe.title)}" />
              </div>
            </div>
          </div>`:""}
    `,qa()}function qa(){Ga(t,{onToggle:()=>{oe=!oe,q(),oe&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:a=>{B=a,q();const o=t.querySelector("[data-global-space-search]");o&&(o.focus(),o.setSelectionRange(a.length,a.length))},onPick:a=>{if(W=a,oe=!1,a.level==="project"){P=a.projectId;const o=H.buildings.find(n=>n.projectId===a.projectId);o?Sa(o.id):(ae="",le="",pe=null)}else a.level==="building"?Sa(a.buildingId):a.level==="floor"&&ra(a.floorId);q()}}),t.querySelectorAll("[data-dep-nav]").forEach(a=>{a.addEventListener("click",()=>{m=a.dataset.depNav??"overview",a.dataset.devSubtabJump&&(y=a.dataset.devSubtabJump),_=!1,ne=!1,ce="",he="",q()})}),t.querySelectorAll("[data-dev-subtab]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.devSubtab??"marking";y=o,o==="groups"&&(_=!1,ne=!1),ce="",he="",q()})}),t.querySelectorAll("[data-drawer-tab]").forEach(a=>{a.addEventListener("click",()=>{O=a.dataset.drawerTab??"binding",q()})}),t.querySelector("[data-list-search]")?.addEventListener("input",a=>{L=a.currentTarget.value,q();const o=t.querySelector("[data-list-search]");o&&(o.focus(),o.setSelectionRange(L.length,L.length))}),t.querySelector("[data-list-filter]")?.addEventListener("change",a=>{N=a.currentTarget.value??"all",q()}),t.querySelectorAll("[data-refresh-dep]").forEach(a=>{a.addEventListener("click",()=>{Se()})}),t.querySelectorAll("[data-matrix-nav]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.matrixFloor;o&&ra(o),m=a.dataset.matrixNav??"devices",a.dataset.matrixSub&&(y=a.dataset.matrixSub),a.dataset.matrixExpand==="1"&&o&&(pe=o),q()})}),t.querySelectorAll("[data-scrubber-floor]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.scrubberFloor;o&&(ra(o),q())})}),t.querySelectorAll("[data-close-modals]").forEach(a=>{a.addEventListener("click",()=>{ke(),q()})}),t.querySelectorAll("[data-modal-scrim]").forEach(a=>{a.addEventListener("click",o=>{o.target===a&&(ke(),q())})}),t.querySelectorAll("[data-open-new-proj]").forEach(a=>{a.addEventListener("click",()=>{ke(),E=!0,q()})}),t.querySelector("[data-open-edit-proj]")?.addEventListener("click",()=>{ke(),G=!0,q()}),t.querySelectorAll("[data-open-new-bld]").forEach(a=>{a.addEventListener("click",()=>{ke(),Le=!0,q()})}),t.querySelector("[data-open-new-floor]")?.addEventListener("click",()=>{ke(),v=!0,q()}),t.querySelector("[data-open-batch-modal]")?.addEventListener("click",()=>{ke(),$=!0,q()}),t.querySelectorAll("[data-open-new-dev]").forEach(a=>{a.addEventListener("click",()=>{ke(),z=!0,q()})}),t.querySelector("[data-open-new-group]")?.addEventListener("click",()=>{ke(),u=!0,q()}),t.querySelector("[data-open-new-conn]")?.addEventListener("click",()=>{ke(),j=!0,q()}),t.querySelectorAll("[data-select-building]").forEach(a=>{a.addEventListener("click",o=>{if(o.target?.closest("button, label, input"))return;const n=a.dataset.selectBuilding;n&&n!==ae&&(Sa(n),_e="all",pe=null,q())})}),t.querySelectorAll("[data-edit-building]").forEach(a=>{a.addEventListener("click",o=>{o.stopPropagation(),ke(),C=a.dataset.editBuilding??null,q()})}),t.querySelectorAll("[data-toggle-expand-floor]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.toggleExpandFloor??null;pe=pe===o?null:o,pe&&ra(pe),h=null,q()})}),t.querySelectorAll("[data-jump-floor-marking]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.jumpFloorMarking;o&&ra(o),m="devices",y="marking",q()})}),t.querySelector("[data-jump-floor-config]")?.addEventListener("click",a=>{const o=a.currentTarget.dataset.jumpFloorConfig;m="project_config",o&&(pe=o),q()}),t.querySelectorAll("[data-floor-detail-tab]").forEach(a=>{a.addEventListener("click",()=>{je=a.dataset.floorDetailTab??"zones",q()})}),t.querySelectorAll("[data-floor-list-filter]").forEach(a=>{a.addEventListener("click",()=>{_e=a.dataset.floorListFilter??"all",q()})}),t.querySelector("[data-create-project]")?.addEventListener("submit",async a=>{a.preventDefault();const o=new FormData(a.currentTarget),n=String(o.get("pName")??"").trim(),i=String(o.get("pCity")??"").trim(),I=String(o.get("pAddr")??"").trim(),f=String(o.get("pLng")??"").trim(),U=String(o.get("pLat")??"").trim();if(!n)return;let me;if(f||U){const te=Number(f),Q=Number(U);if(!Number.isFinite(te)||!Number.isFinite(Q)||te<-180||te>180||Q<-90||Q>90){he="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",q();return}me={lng:te,lat:Q,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{const te=await e.createProject?.({name:n,city:i,address:I,location:me});ke(),m="project_config",te&&(P=te.id,ae="",le="",pe=null,W=ga({level:"project",projectId:te.id})),ce=`已创建项目「${n}」，下一步可添加园区楼宇。`,await Se()}catch(te){he=te instanceof Error?te.message:String(te),q()}}),t.querySelector("[data-save-project]")?.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget,n=o.dataset.saveProject??P,i=new FormData(o),I=String(i.get("pName")??"").trim(),f=String(i.get("pCity")??"").trim(),U=String(i.get("pAddr")??"").trim(),me=String(i.get("pLng")??"").trim(),te=String(i.get("pLat")??"").trim();let Q;if(me||te){const J=Number(me),M=Number(te);if(!Number.isFinite(J)||!Number.isFinite(M)||J<-180||J>180||M<-90||M>90){he="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",q();return}Q={lng:J,lat:M,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{await e.updateProject?.(n,{name:I,city:f,address:U,location:Q}),ke(),ce=`已保存项目「${I||"当前项目"}」信息。`,await Se()}catch(J){he=J instanceof Error?J.message:String(J),q()}}),t.querySelector("[data-upload-proj]")?.addEventListener("change",async a=>{const o=a.currentTarget,n=o.dataset.uploadProj,i=o.files?.[0];if(!(!n||!i))try{const I=await za(i);await e.updateProject?.(n,{imageUrl:I}),ce=`已更新项目封面图（${i.name}）。`,await Se()}catch(I){he=I instanceof Error?I.message:String(I),q()}}),t.querySelector("[data-delete-proj]")?.addEventListener("click",async a=>{const o=a.currentTarget.dataset.deleteProj,n=H.projects.find(i=>i.id===o);if(!(!o||!n)&&window.confirm(`确认删除项目「${n.name}」及其下全部楼宇和楼层？此操作不可撤销。`))try{await e.deleteProject?.(o),ke(),ce=`已删除项目「${n.name}」。`,await Se()}catch(i){he=i instanceof Error?i.message:String(i),q()}}),t.querySelector("[data-create-bld]")?.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget,n=o.dataset.createBld??P,i=new FormData(o),I=String(i.get("bName")??"").trim(),f=String(i.get("bArea")??"").trim(),U=Math.max(1,Number(i.get("bAbove")??12)),me=Math.max(0,Number(i.get("bBelow")??0)),te=!!i.get("bRoof"),Q=!!i.get("bAutoFloors");if(I)try{const J=await e.upsertBuilding?.({projectId:n,name:I,aboveFloors:U,belowFloors:me,hasRoof:te,areaSqm:f?Number(f):null});ke();let M=0;if(J&&(ae=J.id,Q)){for(let ye=1;ye<=U;ye+=1)await e.upsertFloor?.({buildingId:J.id,kind:"above",level:ye,name:`${ye}F`}),M+=1;for(let ye=1;ye<=me;ye+=1)await e.upsertFloor?.({buildingId:J.id,kind:"below",level:-ye,name:`B${ye}`}),M+=1;te&&(await e.upsertFloor?.({buildingId:J.id,kind:"roof",level:99,name:"RF"}),M+=1)}ce=Q?`已创建楼宇「${I}」并自动生成 ${M} 个楼层。`:`已创建楼宇「${I}」。`,await Se()}catch(J){he=J instanceof Error?J.message:String(J),q()}}),t.querySelector("[data-save-building]")?.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget,n=o.dataset.saveBuilding,i=H.buildings.find(J=>J.id===n);if(!i)return;const I=new FormData(o),f=String(I.get("bName")??"").trim()||i.name,U=String(I.get("bArea")??"").trim(),me=Math.max(1,Number(I.get("bAbove")??i.aboveFloors)),te=Math.max(0,Number(I.get("bBelow")??i.belowFloors)),Q=!!I.get("bRoof");try{await e.upsertBuilding?.({id:n,projectId:i.projectId,name:f,aboveFloors:me,belowFloors:te,hasRoof:Q,areaSqm:U?Number(U):null}),ke(),ce=`已保存楼宇「${f}」参数。`,await Se()}catch(J){he=J instanceof Error?J.message:String(J),q()}}),t.querySelector("[data-delete-building]")?.addEventListener("click",async a=>{const o=a.currentTarget.dataset.deleteBuilding,n=H.buildings.find(i=>i.id===o);if(!(!o||!n)&&window.confirm(`确认删除楼宇「${n.name}」及其下全部楼层与功能区？`))try{await e.deleteBuilding?.(o),ke(),ce=`已删除楼宇「${n.name}」。`,await Se()}catch(i){he=i instanceof Error?i.message:String(i),q()}}),t.querySelector("[data-upload-bld]")?.addEventListener("change",async a=>{const o=a.currentTarget,n=o.dataset.uploadBld,i=o.files?.[0],I=H.buildings.find(f=>f.id===n);if(!(!n||!i||!I))try{const f=await za(i);await e.upsertBuilding?.({id:I.id,projectId:I.projectId,name:I.name,aboveFloors:I.aboveFloors,belowFloors:I.belowFloors,hasRoof:I.hasRoof,areaSqm:I.areaSqm,imageUrl:f}),ce=`已更新「${I.name}」外观图（${i.name}）。`,await Se()}catch(f){he=f instanceof Error?f.message:String(f),q()}}),t.querySelectorAll("[data-fill-missing-floors]").forEach(a=>{a.addEventListener("click",async o=>{o.stopPropagation();const n=a.dataset.fillMissingFloors;if(n)try{const i=await ba(n);ce=i>0?`已自动补齐 ${i} 个楼层。`:"当前楼宇楼层已完整。",await Se()}catch(i){he=i instanceof Error?i.message:String(i),q()}})}),t.querySelector("[data-create-floor]")?.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget,n=o.dataset.createFloor,i=new FormData(o),I=String(i.get("fName")??"").trim().toUpperCase(),f=String(i.get("fArea")??"").trim();if(!I)return;const U=ma(I)??I;if(fe(n).some(M=>(ma(M.name)??M.name.toUpperCase())===U)){he=`楼层「${I}」已存在，请使用其他名称。`,q();return}const te=Fa(I),Q=te>=999?"roof":te<0?"below":"above",J=te>=999?99:te||1;try{const M=await e.upsertFloor?.({buildingId:n,kind:Q,level:J,name:I,areaSqm:f?Number(f):null});ke(),M&&(le=M.id,pe=M.id),ce=`已新增楼层「${I}」。`,await Se()}catch(M){he=M instanceof Error?M.message:String(M),q()}}),t.querySelector("[data-save-floor]")?.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget,n=o.dataset.saveFloor,i=Oe().find(ye=>ye.id===n);if(!i)return;const I=new FormData(o),f=String(I.get("fName")??"").trim()||i.name,U=String(I.get("fArea")??"").trim(),me=ma(f)??f.toUpperCase();if(fe(i.buildingId).some(ye=>ye.id!==i.id&&(ma(ye.name)??ye.name.toUpperCase())===me)){he=`楼层「${f}」已存在，请避免重复命名。`,q();return}const Q=Fa(f),J=Q>=999?"roof":Q<0?"below":"above",M=Q>=999?99:Q||i.level;try{await e.upsertFloor?.({id:i.id,buildingId:i.buildingId,kind:J,level:M,name:f,areaSqm:U?Number(U):null}),ce=`已保存楼层「${f}」。`,await Se()}catch(ye){he=ye instanceof Error?ye.message:String(ye),q()}}),t.querySelector("[data-delete-floor]")?.addEventListener("click",async a=>{const o=a.currentTarget.dataset.deleteFloor,n=Oe().find(i=>i.id===o);if(!(!o||!n)){if(ze(o).length>0){he=`楼层「${n.name}」已关联设备，请先解绑后再删除。`,q();return}if(window.confirm(`确认删除楼层「${n.name}」及其功能区？`))try{await e.deleteFloor?.(o),pe=null,ce=`已删除楼层「${n.name}」。`,await Se()}catch(i){he=i instanceof Error?i.message:String(i),q()}}});async function w(a,o){const n=Oe().find(i=>i.id===a);if(n)try{const i=await za(o);await e.upsertFloor?.({id:n.id,buildingId:n.buildingId,kind:n.kind,level:n.level,name:n.name,areaSqm:n.areaSqm,planImageUrl:i}),ce=`已更新「${n.name}」平面底图（${o.name}）。`,await Se()}catch(i){he=i instanceof Error?i.message:String(i),q()}}t.querySelectorAll("[data-upload-floor]").forEach(a=>{a.addEventListener("change",()=>{const o=a.dataset.uploadFloor,n=a.files?.[0];o&&n&&w(o,n)})});const x=t.querySelector("[data-single-floor-drop]");x&&s.scope.canEditDeployment&&(x.addEventListener("dragover",a=>{a.preventDefault(),x.style.borderColor="var(--pacom-accent-solid)"}),x.addEventListener("dragleave",()=>{x.style.borderColor=""}),x.addEventListener("drop",a=>{a.preventDefault(),x.style.borderColor="";const o=x.dataset.singleFloorDrop,n=Array.from(a.dataTransfer?.files??[]).find(i=>i.type.startsWith("image/"));o&&n&&w(o,n)})),t.querySelector("[data-clear-floor-plan]")?.addEventListener("click",async a=>{const o=a.currentTarget.dataset.clearFloorPlan,n=Oe().find(i=>i.id===o);if(!(!o||!n)&&window.confirm(`确认清空「${n.name}」的平面底图？`))try{await e.upsertFloor?.({id:n.id,buildingId:n.buildingId,kind:n.kind,level:n.level,name:n.name,areaSqm:n.areaSqm,planImageUrl:null}),ce=`已清空「${n.name}」平面底图。`,await Se()}catch(i){he=i instanceof Error?i.message:String(i),q()}}),t.querySelectorAll("[data-open-lightbox]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.lbTitle??"平面底图预览",n=a.dataset.lbSrc??"";n&&(Pe={title:o,imageUrl:n},q())})}),t.querySelector("[data-close-lightbox]")?.addEventListener("click",()=>{Pe=null,q()}),t.querySelector("[data-lightbox-scrim]")?.addEventListener("click",a=>{a.target===a.currentTarget&&(Pe=null,q())});function T(a,o){if(!a||o.length===0)return;const n=fe(a),i=new Map;n.forEach(I=>{const f=ma(I.name)??I.name.toUpperCase();i.set(f,I)}),Ce=o.map((I,f)=>{const U=ma(I.name),me=U?i.get(U):void 0;return{id:`bu-${Date.now().toString(36)}-${f}`,file:I,matchedFloorId:me?.id??null}}),$=!0,q()}t.querySelector("[data-batch-upload-floors]")?.addEventListener("change",a=>{const o=a.currentTarget;T(o.dataset.batchUploadFloors??"",Array.from(o.files??[]))});const A=t.querySelector("[data-batch-dropzone]");A&&s.scope.canEditDeployment&&(A.addEventListener("dragover",a=>{a.preventDefault(),Be||(Be=!0,A.style.borderColor="var(--pacom-accent-solid)",A.style.background="var(--pacom-accent-soft)")}),A.addEventListener("dragleave",()=>{Be=!1,A.style.borderColor="",A.style.background=""}),A.addEventListener("drop",a=>{a.preventDefault(),Be=!1;const o=Array.from(a.dataTransfer?.files??[]).filter(n=>n.type.startsWith("image/"));T(A.dataset.batchDropzone??"",o)})),t.querySelectorAll("[data-batch-override-floor]").forEach(a=>{a.addEventListener("change",()=>{const o=Ce.find(n=>n.id===a.dataset.batchOverrideFloor);o&&(o.matchedFloorId=a.value||null,q())})}),t.querySelector("[data-cancel-batch-upload]")?.addEventListener("click",()=>{Ce=[],q()}),t.querySelector("[data-confirm-batch-upload]")?.addEventListener("click",async()=>{const a=Ce.filter(n=>n.matchedFloorId),o=Ce.length-a.length;if(a.length!==0)try{for(const n of a){const i=Oe().find(f=>f.id===n.matchedFloorId);if(!i)continue;const I=await za(n.file);await e.upsertFloor?.({id:i.id,buildingId:i.buildingId,kind:i.kind,level:i.level,name:i.name,areaSqm:i.areaSqm,planImageUrl:I})}Ce=[],ke(),ce=`已批量导入 ${a.length} 个楼层平面底图${o>0?`（跳过 ${o} 张未分配文件）`:""}。`,await Se()}catch(n){he=n instanceof Error?n.message:String(n),q()}}),t.querySelectorAll("[data-apply-zone-tpl]").forEach(a=>{a.addEventListener("click",async()=>{const o=Et.find(i=>i.key===a.dataset.applyZoneTpl),n=Oe().find(i=>i.id===a.dataset.tplFloor);if(!(!o||!n))try{for(const i of o.items){const I=await e.upsertZone?.({floorId:n.id,name:`${n.name} ${i.suffix}`,category:i.category});I&&(se[I.id]={left:20,top:20,width:24,height:24})}ce=`已按「${o.label}」模板为 ${n.name} 创建 ${o.items.length} 个功能区。`,await Se()}catch(i){he=i instanceof Error?i.message:String(i),q()}})}),t.querySelector("[data-attach-doc]")?.addEventListener("change",a=>{const o=a.currentTarget,n=o.dataset.attachDoc,i=o.files?.[0],I=Oe().find(U=>U.id===n);if(!n||!i||!I)return;const f=i.size>=1024*1024?`${(i.size/(1024*1024)).toFixed(1)} MB`:`${Math.max(1,Math.round(i.size/1024))} KB`;ee.unshift({id:`doc-custom-${Date.now().toString(36)}`,floorId:n,name:i.name,category:i.name.toLowerCase().endsWith(".xlsx")||i.name.toLowerCase().endsWith(".xls")?"点位清单":"竣工图纸",boundScope:`${I.name} ｜ 工程资料`,updatedAt:new Date().toISOString().slice(0,10),size:f}),ce=`已为 ${I.name} 关联文档「${i.name}」。`,q()}),t.querySelector("[data-add-zone]")?.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget.dataset.addZone,n=new FormData(a.currentTarget),i=String(n.get("zoneName")??"").trim(),I=String(n.get("zoneCat")??"office");if(i)try{const f=await e.upsertZone?.({floorId:o,name:i,category:I});f&&(se[f.id]={left:20,top:20,width:24,height:24}),ce=`已添加功能区「${i}」。`,await Se()}catch(f){he=f instanceof Error?f.message:String(f),q()}}),t.querySelectorAll("[data-edit-zone]").forEach(a=>{a.addEventListener("click",()=>{h=a.dataset.editZone??null,q()})}),t.querySelector("[data-cancel-edit-zone]")?.addEventListener("click",()=>{h=null,q()}),t.querySelector("[data-save-edit-zone]")?.addEventListener("submit",async a=>{a.preventDefault();const o=a.currentTarget,n=new FormData(o),i=String(n.get("zName")??"").trim(),I=String(n.get("zCat")??"office");if(i)try{await e.upsertZone?.({id:o.dataset.saveEditZone,floorId:o.dataset.zoneFloor,name:i,category:I}),h=null,ce=`已更新功能区「${i}」。`,await Se()}catch(f){he=f instanceof Error?f.message:String(f),q()}}),t.querySelectorAll("[data-del-zone]").forEach(a=>{a.addEventListener("click",async()=>{const o=a.dataset.delZone,n=De().find(i=>i.id===o);if(!(!o||!n)&&window.confirm(`确认删除功能区「${n.name}」？`))try{await e.deleteZone?.(o),h===o&&(h=null),ce=`已删除功能区「${n.name}」。`,await Se()}catch(i){he=i instanceof Error?i.message:String(i),q()}})}),t.querySelectorAll("[data-open-copy-zones]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.openCopyZones??null;ke(),Y=o,Ee=new Set(fe(ae).filter(n=>n.id!==o&&n.kind==="above"&&De().filter(i=>i.floorId===n.id).length===0).map(n=>n.id)),q()})}),t.querySelectorAll("[data-copy-preset]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.copyPreset,n=fe(ae).filter(i=>i.id!==Y);o==="empty"?Ee=new Set(n.filter(i=>i.kind==="above"&&De().filter(I=>I.floorId===i.id).length===0).map(i=>i.id)):o==="above"?Ee=new Set(n.filter(i=>i.kind==="above").map(i=>i.id)):Ee.clear(),q()})}),t.querySelectorAll("[data-copy-target-floor]").forEach(a=>{a.addEventListener("change",()=>{const o=a.dataset.copyTargetFloor;o&&(a.checked?Ee.add(o):Ee.delete(o),q())})}),t.querySelector("[data-confirm-copy-zones]")?.addEventListener("click",async a=>{const o=a.currentTarget.dataset.confirmCopyZones,n=Array.from(Ee);if(!(!o||n.length===0))try{const i=await e.copyZonesToFloors?.(o,n)??0;ke(),Ee.clear(),ce=`已将当前层功能区复用至 ${n.length} 个目标楼层（共新增 ${i} 个功能区）。`,await Se()}catch(i){he=i instanceof Error?i.message:String(i),q()}});const R=t.querySelector("[data-dep-canvas-search]");R?.addEventListener("focus",()=>{K||(K=!0,q(),t.querySelector("[data-dep-canvas-search]")?.focus())}),R?.addEventListener("input",a=>{X=a.currentTarget.value,K=!0,q();const o=t.querySelector("[data-dep-canvas-search]");o&&(o.focus(),o.setSelectionRange(X.length,X.length))}),t.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{K=!K,q()}),t.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{K=!1,q()}),t.querySelectorAll("[data-brush]").forEach(a=>{a.addEventListener("click",()=>{V=a.dataset.brush??"device",q()})}),t.querySelectorAll("[data-dep-zoom]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.depZoom;o==="in"?F=Math.min(2.6,Number((F+.2).toFixed(2))):o==="out"?F=Math.max(.6,Number((F-.2).toFixed(2))):(F=1,ve=0,be=0),qe()})});const r=t.querySelector('[data-role="dep-stage"]');if(r&&!ne){let a=!1,o=0,n=0,i=0,I=0;r.addEventListener("pointerdown",U=>{U.target?.closest("button, input, select, .pacom-drawer, .pacom-hud-search-wrap")||(a=!0,o=U.clientX,n=U.clientY,i=ve,I=be,r.classList.add("is-panning"),r.setPointerCapture?.(U.pointerId))}),r.addEventListener("pointermove",U=>{a&&(ve=i+(U.clientX-o),be=I+(U.clientY-n),qe())});const f=()=>{a&&(a=!1,r.classList.remove("is-panning"))};r.addEventListener("pointerup",f),r.addEventListener("pointercancel",f),r.addEventListener("wheel",U=>{U.preventDefault();const me=U.deltaY<0?.12:-.12;F=Math.max(.6,Math.min(2.6,Number((F+me).toFixed(2)))),qe()},{passive:!1}),r.addEventListener("dblclick",U=>{U.target?.closest("button")||(F=1,ve=0,be=0,qe())})}t.querySelectorAll("[data-dev-filter]").forEach(a=>{a.addEventListener("click",()=>{ue=a.dataset.devFilter??"all",q()})}),t.querySelector("[data-create-dev]")?.addEventListener("submit",a=>{a.preventDefault();const o=new FormData(a.currentTarget),n=String(o.get("devName")??"").trim(),i=String(o.get("devPreset")??"sensor"),I=String(o.get("devZone")??"")||null,f=it.find(me=>me.key===i)??it[0],U=`dev-custom-${Date.now().toString(36)}`;D.push({id:U,name:n,category:f.category,projectId:P||S.projectId,buildingId:ae,floorId:le,logicalZoneId:I,planPoint:{floorId:le,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}}),p.set(U,{proxy:f.defaultProxy,relay:f.defaultRelay,meshUuid:`mesh-${le.slice(-4)}`}),f.category==="lighting"&&k.push({id:`lm-${Date.now().toString(36)}`,deviceId:U,channel:"回路 1",label:`${n.slice(0,6)}主灯`,x:.52,y:.45}),ke(),b=U,_=!0,O="binding",Te=!0,ce=`已新增「${n}」（${f.hint}），已生成默认标记并提示待同步边缘。`,q()}),t.querySelectorAll("[data-pick-dev]").forEach(a=>{a.addEventListener("click",o=>{o.stopPropagation(),b=a.dataset.pickDev??null,_=!0,O="binding",Z=ze(le).find(i=>i.id===b)?.physicalInstalled??!1,q()})}),t.querySelectorAll("[data-open-dev-drawer]").forEach(a=>{a.addEventListener("click",o=>{if(o.target?.closest("button"))return;b=a.dataset.openDevDrawer??null,_=!0,O="binding",Z=ze(le).find(i=>i.id===b)?.physicalInstalled??!1,q()})}),t.querySelectorAll("[data-open-dev-params]").forEach(a=>{a.addEventListener("click",o=>{o.stopPropagation(),b=a.dataset.openDevParams??null,_=!0,O="params",Z=ze(le).find(i=>i.id===b)?.physicalInstalled??!1,q()})}),t.querySelector("[data-close-sel]")?.addEventListener("click",()=>{_=!1,ne=!1,q()}),t.querySelector("[data-toggle-place]")?.addEventListener("click",()=>{y!=="marking"?(y="marking",ne=!0):ne=!ne,q()}),t.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{Z=!Z,q()}),t.querySelectorAll("[data-ping-dev]").forEach(a=>{a.addEventListener("click",o=>{o.stopPropagation();const n=ze(le).find(i=>i.id===a.dataset.pingDev);n&&(ce=`已向「${n.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,q())})}),t.querySelector("[data-add-light-marker]")?.addEventListener("click",a=>{const o=a.currentTarget.dataset.addLightMarker,n=k.filter(i=>i.deviceId===o).length+1;k.push({id:`lm-${Date.now().toString(36)}`,deviceId:o,channel:`回路 ${n}`,label:`照明点位 ${n}`,x:Math.min(.86,.35+n*.1),y:.42}),V="light_marker",ce=`已新增「回路 ${n}」可视化灯点。`,q()}),t.querySelectorAll("[data-del-light-marker]").forEach(a=>{a.addEventListener("click",()=>{const o=k.findIndex(n=>n.id===a.dataset.delLightMarker);o>=0&&k.splice(o,1),q()})}),t.querySelectorAll("[data-toggle-mesh-role]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.meshDev,n=a.dataset.toggleMeshRole,i=p.get(o)??{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"};i[n]=!i[n],p.set(o,i),Te=!0,ce=`已更新节点 ${n.toUpperCase()} 状态，可在「网络拓扑」中一键同步至边缘网关。`,q()})}),t.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async a=>{const o=ze(le).find(f=>f.id===b);if(!ne||!o)return;const n=a.currentTarget.getBoundingClientRect(),i=Math.max(.02,Math.min(.98,(a.clientX-n.left)/n.width)),I=Math.max(.02,Math.min(.98,(a.clientY-n.top)/n.height));if(D.some(f=>f.id===o.id)){o.planPoint={floorId:le,planVersion:1,x:Number(i.toFixed(4)),y:Number(I.toFixed(4))},ne=!1,ce=`已更新「${o.name}」图上坐标。`,q();return}try{await e.updateDevicePlanPoint({deviceId:o.id,floorId:S.floorId,planVersion:o.planPoint?.planVersion??1,x:i,y:I,expectedVersion:o.version}),ne=!1,ce=`已更新「${o.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await Se()}catch(f){he=f instanceof Error?f.message:String(f),q()}}),t.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async a=>{a.preventDefault();const o=ze(le).find(i=>i.id===b);if(!o)return;const n=new FormData(a.currentTarget);if(D.some(i=>i.id===o.id)){o.physicalInstalled=Z,o.hardwareBinding={gatewayId:"dev-e7f-gw-01",protocol:String(n.get("protocol")),networkAddress:String(n.get("networkAddress")??""),portOrChannel:String(n.get("portOrChannel")??""),boundAt:new Date().toISOString(),boundBy:s.displayName},o.version+=1,Te=!0,ce=`已保存「${o.name}」的硬件绑定与物理复核状态。`,q();return}try{await e.updateDeviceHardwareBinding({deviceId:o.id,gatewayId:o.hardwareBinding?.gatewayId??"dev-e7f-gw-01",protocol:String(n.get("protocol")),networkAddress:String(n.get("networkAddress")??""),portOrChannel:String(n.get("portOrChannel")??""),physicalInstalled:Z,expectedVersion:o.version}),Te=!0,ce=`已保存「${o.name}」的硬件绑定与物理安装复核状态。`,await Se()}catch(i){he=i instanceof Error?i.message:String(i),q()}}),t.querySelector("[data-save-dev-params]")?.addEventListener("submit",a=>{a.preventDefault();const o=a.currentTarget.dataset.saveDevParams,n=new FormData(a.currentTarget);xe.set(o,{offDelayMin:Number(n.get("offDelayMin")??15),restoreMin:Number(n.get("restoreMin")??30),luxOn:Number(n.get("luxOn")??280),luxOff:Number(n.get("luxOff")??450)}),Te=!0,ce="设备自治延时与光感门限参数已下发并同步至配置基线。",q()}),t.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const a=ze(le).find(o=>o.id===b);a&&Xe(a)}),t.querySelectorAll("[data-ftt-dev]").forEach(a=>{a.addEventListener("click",o=>{o.stopPropagation();const n=ze(le).find(i=>i.id===a.dataset.fttDev);n&&Xe(n)})}),t.querySelectorAll("[data-batch-ftt]").forEach(a=>{a.addEventListener("click",()=>ca())}),t.querySelectorAll("[data-export-inv]").forEach(a=>{a.addEventListener("click",()=>Ka())}),t.querySelector("[data-create-group]")?.addEventListener("submit",a=>{a.preventDefault();const o=new FormData(a.currentTarget),n=String(o.get("gName")??"").trim(),i=o.get("gTrack")??"mesh_auto",I=String(o.get("gType")??"灯光联动组");n&&(re.unshift({id:`grp-${Date.now().toString(36)}`,track:i,groupType:I,name:n,floorId:le,includesAdapter:i==="mesh_auto",deviceIds:i==="mesh_auto"?["dev-e7f-gw-01"]:[]}),ke(),i==="mesh_auto"&&(Te=!0),ce=`已新建${i==="mesh_auto"?"端侧蓝牙 Mesh 自治组（已自动纳入蓝牙适配器）":"云端业务分组"}「${n}」。`,q())}),t.querySelectorAll("[data-test-group]").forEach(a=>{a.addEventListener("click",()=>{const o=re.find(n=>n.id===a.dataset.testGroup);o&&(ce=`已向分组「${o.name}」发送群组试控指令，${o.deviceIds.length} 台成员回读正常。`,q())})}),t.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>xa()),t.querySelector("[data-sync-edge]")?.addEventListener("click",()=>{He+=1,Te=!1,ce=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${He}）。`,q()}),t.querySelectorAll("[data-topo-mode]").forEach(a=>{a.addEventListener("click",()=>{de=a.dataset.topoMode??"mesh",q()})}),t.querySelectorAll("[data-topo-jump]").forEach(a=>{a.addEventListener("click",()=>{b=a.dataset.topoJump??null,_=!0,O="binding",m="devices",y="marking",q()})}),t.querySelector("[data-create-conn]")?.addEventListener("submit",a=>{a.preventDefault();const o=new FormData(a.currentTarget),n=String(o.get("cName")??"").trim(),i=String(o.get("cProto")??"bacnet_ip"),I=String(o.get("cEndpoint")??"").trim();if(ie.some(f=>f.endpoint===I)){he=`端口冲突警告：局域网端点「${I}」已被其他通道占用，请更换端口后重试。`,q();return}ie.unshift({id:`conn-${Date.now().toString(36)}`,projectId:P||S.projectId,buildingId:ae,floorId:le,name:n,protocol:i,endpoint:I,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()}),ke(),he="",ce=`已接入「${n}」（${I}），连通测试通过（18 ms）。`,q()}),t.querySelector("[data-edge-restart]")?.addEventListener("click",()=>{ce="已下发「重启边缘服务」指令，边缘网关服务将在 5 秒内平滑重连。",q()}),t.querySelectorAll("[data-expand-conn]").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.expandConn??null;Re=Re===o?null:o,q()})}),t.querySelectorAll("[data-ping-conn]").forEach(a=>{a.addEventListener("click",()=>{const o=ie.find(n=>n.id===a.dataset.pingConn);o&&(he="",o.status==="connected"?ce=`连通测试通过：「${o.name}」（${o.endpoint}）响应正常，延迟 18 ms。`:he=`连通测试异常：「${o.name}」（${o.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,q())})}),t.querySelectorAll("[data-copy-endpoint]").forEach(a=>{a.addEventListener("click",async()=>{const o=a.dataset.endpointVal??"",n=a.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(o),we=n,q(),window.setTimeout(()=>{we=null,q()},1600)}catch{}})}),t.querySelectorAll("[data-preview-doc]").forEach(a=>{a.addEventListener("click",()=>{const o=[...kt,...ee].find(n=>n.id===a.dataset.previewDoc);o&&(ce=`已调阅工程附件「${o.name}」（关联范围：${o.boundScope}，更新于 ${o.updatedAt}）。`,q())})}),t.querySelector("[data-freeze-batch]")?.addEventListener("click",async()=>{try{const a=await e.freezeDeliveryBatch(S.floorId,"部署总览验收发起交付冻结");ce=`已生成交付冻结快照 ${a.versionTag}（核验 ${a.verifiedCount}/${a.deviceCount}）。`,await Se()}catch(a){he=a instanceof Error?a.message:String(a),q()}})}await Se()}const ps=new Set(["lighting","hvac","alarm_rules"]),_t={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},Ra=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function us(t){const e=new Set;for(const s of t.actions)s.command.startsWith("lighting")?e.add("照明"):s.command.startsWith("hvac")?e.add("暖通"):e.add("综合");return Array.from(e)}function ms(t,e,s){const c=s?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
    <div style="width:150px; display:flex; flex-direction:column; gap:3px;">
      <div style="position:relative; height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
        ${t<e?`<div style="position:absolute; left:${t/24*100}%; width:${(e-t)/24*100}%; top:0; bottom:0; border-radius:999px; background:${c};"></div>`:`
        <div style="position:absolute; left:${t/24*100}%; width:${(24-t)/24*100}%; top:0; bottom:0; border-radius:999px; background:${c};"></div>
        <div style="position:absolute; left:0; width:${e/24*100}%; top:0; bottom:0; border-radius:999px; background:${c};"></div>`}
      </div>
      <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--pacom-text-muted);">
        <span>00</span><span>12</span><span>24</span>
      </div>
    </div>
  `}async function vs(t,e,s){let c=Za(),l=!1,m="",[y,O,L,N]=await Promise.all([e.getSpatialTree(),e.listScenes(S.floorId),e.getRuntimeSettings(S.projectId),e.getFloorDevices(S.floorId).catch(()=>[])]),W="manual",oe="balanced",B="all",V=null,ue="",X=!1,K=!1,_=!1,de="all",F=null,ve="",be="",H=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const ge=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],ie=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],$e=[{deviceId:N[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],se=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 ｜ ${L.calendar.workdayStart} – ${L.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 ｜ 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 ｜ ${L.calendar.nightGuardStart} – 次日 ${L.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],D=e.subscribeFloorEvents(S.floorId,async ae=>{ae.type==="control.receipt.updated"&&V?.batchId===ae.batchId&&(V=await e.getControlBatch(ae.batchId),P())});function P(){const ae=ue.trim().toLowerCase(),le=ae?O.filter(u=>`${u.name} ${u.description}`.toLowerCase().includes(ae)):O,pe=L.rules.filter(u=>ps.has(u.category)),_e=B==="all"?pe:B==="cbm"?[]:pe.filter(u=>u.category===B),je=B==="all"||B==="cbm",E=de==="issues"?ge.filter(u=>u.status!=="verified"):ge,G=Ra.find(u=>u.id===oe)??Ra[1],Le=s.scope.canControlDevices,C=s.scope.canEditScenes,v=s.scope.canEditSettings,$=s.scope.activeOverrides.find(u=>u.module==="settings"&&u.status==="active");t.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${Wa({tree:y,session:s,scope:c,isOpen:l,searchKeyword:m})}
            </div>

            <div class="pacom-header-meta">
              ${W==="rules"?v?$?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>':""}
              <button type="button" class="pacom-badge ${H.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${H.length>0?`人工覆盖中：${H.length} 台 ${Ae("chevron-down",12)}`:`全部自动托管 ${Ae("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${_?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${ge.length}）</button>
              ${W==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1" ${C?"":"disabled"}>${X?"收起表单":"+ 新建场景"}</button>`:W==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${W==="manual"}" data-scene-tab="manual">快捷场景（${O.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${W==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${W==="rules"}" data-scene-tab="rules">条件联动（${pe.length+ie.length}）</button>
          </nav>
        </header>

        ${K?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${H.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${Ae("x",16)}</button>
              </div>
              ${H.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':H.map(u=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${d(u.name)}</div>
                            <div class="pacom-row-sub">${d(u.reason)}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${d(u.id)}" ${Le?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${H.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${Le?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${_?`
            <aside class="pacom-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${Ae("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${de==="all"}" data-log-filter="all">全部（${ge.length}）</button>
                  <button class="pacom-tab" aria-selected="${de==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${E.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${E.map(u=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${d(u.device)}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${d(u.source)}</span>
                        </div>
                        <span class="pacom-row-sub">${d(u.action)} ｜ ${d(u.at)}</span>
                      </div>
                      <span class="pacom-badge ${u.status==="verified"?"pacom-badge--online":u.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${u.status==="verified"?"回读确认":u.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${ve?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${d(ve)}</span></div>`:""}
          ${be?`<div class="pacom-alert-banner">${d(be)}</div>`:""}

          ${W==="manual"?`
              ${V?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${d(V.batchId)}</span>
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
                            ${V.receipts.map(u=>`
                                <tr>
                                  <td><code style="font-size:12px;">${d(u.deviceId)}</code></td>
                                  <td>${d(u.command)}</td>
                                  <td>${d(String(u.targetValue))}${u.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${d(u.errorMessage)}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${u.status==="verified_success"?"pacom-badge--online":u.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${d(u.status)}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${X?`
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
                          <span class="pacom-setting-title">联动动作列表（${$e.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${$e.map((u,j)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" name="draftDevice-${j}" data-draft-dev="${j}" aria-label="目标设备">
                                ${N.map(Y=>`<option value="${d(Y.id)}" ${Y.id===u.deviceId?"selected":""}>${d(Y.name)}</option>`).join("")}
                              </select>
                              <select class="pacom-select" name="draftCommand-${j}" data-draft-cmd="${j}" aria-label="执行指令">
                                <option value="lighting.dimming" ${u.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${u.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${u.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" name="draftTargetValue-${j}" data-draft-val="${j}" value="${d(u.targetValue)}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${j}" ${$e.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit" ${C?"":"disabled"}>保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="pacom-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${d(ue)}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${le.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${le.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':le.map(u=>{const j=us(u),Y=u.actions.slice(0,3).map(Ee=>{const Pe=N.find(Ce=>Ce.id===Ee.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??Ee.deviceId,Be=Ee.command==="lighting.dimming"?`亮度 ${Ee.targetValue}%`:Ee.command==="hvac.setpoint"?`设温 ${Ee.targetValue}°C`:Ee.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${d(Pe)} → ${d(Be)}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${d(u.name)}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${j.map(Ee=>`<span class="pacom-badge pacom-badge--accent">${d(Ee)}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${u.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${d(u.description)}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${Y}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${d(u.lastExecutedAt?u.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行")}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${d(u.id)}" ${Le?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:W==="schedule_oss"?`
                <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">当前优化启停模式</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${G.title}</div>
                    <span class="pacom-kpi-delta">${G.estSaving}</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">明日预测预启动时刻</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${G.predictedStart}</div>
                    <span class="pacom-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">本周累计节省运行工时</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${G.savedHours}</div>
                    <span class="pacom-kpi-delta">当前人工覆盖挂起：${H.length} 台</span>
                  </div>
                </div>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="pacom-mode-grid">
                    ${Ra.map(u=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${oe===u.id}" data-oss-mode="${u.id}" ${Le?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${u.title}</strong>
                          <span class="pacom-badge ${oe===u.id?"pacom-badge--online":"pacom-badge--neutral"}">${oe===u.id?"当前生效":u.badge}</span>
                        </div>
                        <span class="pacom-setting-desc">${u.desc}</span>
                        <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${u.estSaving}</span>
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
                          ${se.map(u=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${d(u.name)}</span>
                                    ${u.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${d(u.windowLabel)}</div>
                                </td>
                                <td>${ms(u.startHour,u.endHour,u.enabled)}</td>
                                <td><span class="pacom-row-sub">${d(u.scope)}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${u.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="pacom-switch"
                                      role="switch"
                                      aria-checked="${u.enabled}"
                                      aria-label="切换排程 ${d(u.name)}"
                                      data-toggle-schedule="${d(u.id)}"
                                      ${Le?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(u=>{const j=u==="all"?"全部":_t[u]??u,Y=u==="all"?pe.length+ie.length:u==="cbm"?ie.length:pe.filter(Ee=>Ee.category===u).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${B===u}" data-rule-cat="${u}">
                              <span>${j}</span><span class="pacom-count-num">${Y}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${_e.map(u=>{const j=F===u.id;return`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${d(_t[u.category]??u.category)}</span>
                                  <span>${d(u.name)}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${u.version}</span>
                                </span>
                                <span class="pacom-setting-desc">${d(u.summary)} ｜ 范围：${d(u.scopeLabel)} ｜ 回执：${d(u.receiptSummary??"已同步")}</span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${d(u.id)}">${j?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${u.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="pacom-switch"
                                  role="switch"
                                  aria-checked="${u.enabled?"true":"false"}"
                                  aria-label="切换 ${d(u.name)}"
                                  data-toggle-strategy-rule="${d(u.id)}"
                                  data-rule-ver="${u.version}"
                                  data-rule-next="${!u.enabled}"
                                  ${v?"":"disabled"}
                                >
                                  <span class="pacom-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${j?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${u.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":u.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${d(u.scopeLabel)} ｜ 当前版本：v${u.version} ｜ 最近同步：${d(u.receiptSummary??"已同步")}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${je?ie.map(u=>{const j=Math.min(100,Math.round(u.runtimeHours/u.thresholdHours*100));return`
                                <div class="pacom-setting-row">
                                  <div class="pacom-setting-meta" style="gap:6px;">
                                    <span class="pacom-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${d(u.name)}</span>
                                      <span class="pacom-badge ${j>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${u.runtimeHours} / ${u.thresholdHours} h（${j}%）</span>
                                    </span>
                                    <div class="pacom-progress-track" style="max-width:340px;">
                                      <div class="pacom-progress-fill" style="width:${j}%; background:${j>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="pacom-setting-desc">绑定设备：${d(u.equipment)} ｜ 上次重置：${d(u.lastReset)}</span>
                                  </div>
                                  <div class="pacom-setting-control">
                                    <span class="pacom-row-sub">${u.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="pacom-switch" role="switch" aria-checked="${u.enabled}" data-toggle-cbm="${d(u.id)}" aria-label="切换 ${d(u.name)}" ${v?"":"disabled"}>
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,Ga(t,{onToggle:()=>{l=!l,P(),l&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:u=>{m=u,P();const j=t.querySelector("[data-global-space-search]");j&&(j.focus(),j.setSelectionRange(u.length,u.length))},onPick:u=>{c=u,l=!1,P()}}),t.querySelectorAll("[data-scene-tab]").forEach(u=>{u.addEventListener("click",()=>{W=u.dataset.sceneTab??"manual",ve="",P()})}),t.querySelectorAll("[data-toggle-overrides]").forEach(u=>{u.addEventListener("click",()=>{K=!K,P()})}),t.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{Le&&(H=[],ve="已释放全部人工覆盖设备，自动节能策略已恢复托管。",P())}),t.querySelectorAll("[data-release-one]").forEach(u=>{u.addEventListener("click",()=>{if(!Le)return;const j=u.dataset.releaseOne;H=H.filter(Y=>Y.id!==j),ve="已恢复该设备的自动策略托管。",P()})}),t.querySelectorAll("[data-toggle-cmdlog]").forEach(u=>{u.addEventListener("click",()=>{_=!_,P()})}),t.querySelectorAll("[data-log-filter]").forEach(u=>{u.addEventListener("click",()=>{de=u.dataset.logFilter??"all",P()})}),t.querySelector("[data-close-batch]")?.addEventListener("click",()=>{V=null,P()}),t.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),t.querySelectorAll("[data-oss-mode]").forEach(u=>{u.addEventListener("click",()=>{if(!Le)return;const j=u.dataset.ossMode;if(!j)return;oe=j;const Y=Ra.find(Ee=>Ee.id===j);ve=`已切换至「${Y?.title??j}」模式（明日预测启动 ${Y?.predictedStart??""}）。`,P()})}),t.querySelectorAll("[data-toggle-schedule]").forEach(u=>{u.addEventListener("click",()=>{if(!Le)return;const j=u.dataset.toggleSchedule,Y=se.find(Ee=>Ee.id===j);Y&&(Y.enabled=!Y.enabled,ve=`排程「${Y.name}」已${Y.enabled?"恢复启用":"临时暂停"}。`,P())})}),t.querySelectorAll("[data-rule-cat]").forEach(u=>{u.addEventListener("click",()=>{B=u.dataset.ruleCat??"all",P()})}),t.querySelectorAll("[data-expand-rule]").forEach(u=>{u.addEventListener("click",()=>{const j=u.dataset.expandRule??null;F=F===j?null:j,P()})}),t.querySelectorAll("[data-toggle-cbm]").forEach(u=>{u.addEventListener("click",()=>{if(!v)return;const j=ie.find(Y=>Y.id===u.dataset.toggleCbm);j&&(j.enabled=!j.enabled,ve=`工时维保规则「${j.name}」已${j.enabled?"启用":"停用"}。`,P())})}),t.querySelectorAll("[data-toggle-strategy-rule]").forEach(u=>{u.addEventListener("click",async()=>{if(v){be="";try{await e.toggleRuntimeRule(u.dataset.toggleStrategyRule,u.dataset.ruleNext==="true",Number(u.dataset.ruleVer)),L=await e.getRuntimeSettings(S.projectId),ve="条件联动规则状态与版本回执已更新。",P()}catch(j){be=j instanceof Error?j.message:String(j),P()}}})}),t.querySelectorAll("[data-toggle-create]").forEach(u=>{u.addEventListener("click",()=>{!C&&!X||(X=!X,P())})}),t.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{C&&($e.push({deviceId:N[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),P())}),t.querySelectorAll("[data-del-draft-action]").forEach(u=>{u.addEventListener("click",()=>{if(!C)return;const j=Number(u.dataset.delDraftAction);$e.length>1&&($e.splice(j,1),P())})}),t.querySelectorAll("[data-draft-dev]").forEach(u=>{u.addEventListener("change",()=>{if(!C)return;const j=$e[Number(u.dataset.draftDev)];j&&(j.deviceId=u.value)})}),t.querySelectorAll("[data-draft-cmd]").forEach(u=>{u.addEventListener("change",()=>{if(!C)return;const j=$e[Number(u.dataset.draftCmd)];j&&(j.command=u.value)})}),t.querySelectorAll("[data-draft-val]").forEach(u=>{u.addEventListener("change",()=>{if(!C)return;const j=$e[Number(u.dataset.draftVal)];j&&(j.targetValue=u.value)})}),t.querySelector("[data-scene-search]")?.addEventListener("input",u=>{const j=u.currentTarget,Y=j.selectionStart??j.value.length;ue=j.value,P();const Ee=t.querySelector("[data-scene-search]");Ee&&(Ee.focus(),Ee.setSelectionRange(Y,Y))}),t.querySelectorAll("[data-exec-scene]").forEach(u=>{u.addEventListener("click",async()=>{if(!Le)return;be="";const j=O.find(Y=>Y.id===u.dataset.execScene);try{V=await e.executeScene(u.dataset.execScene),O=await e.listScenes(S.floorId),ge.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:j?.name??"E7F 场景",action:`${V.receipts.length} 台设备联动下发`,status:"verified"}),P()}catch(Y){be=Y instanceof Error?Y.message:String(Y),P()}})}),t.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async u=>{if(u.preventDefault(),!C)return;const j=new FormData(u.currentTarget);try{await e.createScene({projectId:S.projectId,floorId:S.floorId,name:String(j.get("name")??""),description:String(j.get("description")??""),actions:$e.map(Y=>({deviceId:Y.deviceId,command:Y.command,targetValue:Y.targetValue==="true"?!0:Y.targetValue==="false"?!1:Number(Y.targetValue)||50}))}),O=await e.listScenes(S.floorId),X=!1,ve=`快捷场景已保存（共绑定 ${$e.length} 条联动动作）。`,P()}catch(Y){be=Y instanceof Error?Y.message:String(Y),P()}})}P(),window.addEventListener("hashchange",()=>D(),{once:!0})}const At={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function lt(t,e){return t.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':t.map(s=>`
      <div class="pacom-setting-row">
        <div class="pacom-setting-meta">
          <span class="pacom-setting-title">
            <span>${d(s.name)}</span>
            <span class="pacom-badge pacom-badge--neutral">v${s.version}</span>
            <span class="pacom-badge pacom-badge--accent">${d(s.scopeLabel)}</span>
          </span>
          <span class="pacom-setting-desc">${d(s.summary)} ｜ 回执：${d(s.receiptSummary??"已同步")}</span>
        </div>
        <div class="pacom-setting-control">
          <span class="pacom-row-sub">${s.enabled?"已启用":"已停用"}</span>
          <button
            type="button"
            class="pacom-switch"
            role="switch"
            aria-checked="${s.enabled?"true":"false"}"
            aria-label="切换 ${d(s.name)}"
            data-toggle-rule="${d(s.id)}"
            data-rule-ver="${s.version}"
            data-rule-next="${!s.enabled}"
            ${e?"":"disabled"}
          >
            <span class="pacom-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function gs(t,e,s){let c="calendar",l=Za(),m=!1,y="";const[O,L]=await Promise.all([e.getSpatialTree(),e.getRuntimeSettings(S.projectId)]);let N=L,W=N.calendar.workdayStart,oe=N.calendar.workdayEnd,B=N.calendar.nightGuardStart,V=N.calendar.nightGuardEnd,ue=!0,X=[];const K=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let _="flat";const de={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},F={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},ve={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},be={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},H=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let ge="",ie="";function $e(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(P=>{const ae=At[P];return`
                <button type="button" class="pacom-unified-item" aria-current="${c===P}" data-stab="${P}">
                  ${Ae(ae.icon,16)}
                  <span>${ae.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function se(){const D=s.scope.canEditSettings,P=s.scope.activeOverrides.find(E=>E.module==="settings"&&E.status==="active"),ae=O.projects[0]?.name??"当前项目",le=N.rules.filter(E=>E.category==="weather_area"),pe=N.rules.filter(E=>E.category==="metering_carbon"),_e=N.rules.filter(E=>E.category==="templates"),je=At[c];t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${Wa({tree:O,session:s,scope:l,maxGranularity:"project",isOpen:m,searchKeyword:y})}
            </div>
            <div class="pacom-header-meta">
              ${D?P?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${$e()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head">
                <h2 class="pacom-unified-title">${je.label}</h2>
                <p class="pacom-unified-subtitle">${je.subtitle}</p>
              </div>
              ${P?`<div class="pacom-banner pacom-banner--ok">
                      <div class="pacom-banner-text">
                        <span class="pacom-banner-title">临时提权生效中（应用设置 ｜ ${P.durationHours}h）</span>
                        <span class="pacom-banner-sub">审批人：${d(P.approvedBy)} ｜ 到期自动收回：${d(P.expiresAt.slice(0,16).replace("T"," "))} ｜ 事由：${d(P.reason)}</span>
                      </div>
                    </div>`:""}
              ${ge?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${d(ge)}</span></div>`:""}
              ${ie?`<div class="pacom-alert-banner">${d(ie)}</div>`:""}

              ${c==="calendar"?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">工作时间与夜间值守基准</h2>
                      <span class="pacom-badge pacom-badge--neutral">版本 v${N.calendar.version}</span>
                    </div>
                    <div class="pacom-settings-card">
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">工作日上班 / 下班时间</span>
                          <span class="pacom-setting-desc">驱动「智能策略 → 排程与节能」早间预冷及公区照明启停；晚于 21:30 将自动提示交叠冲突</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calWorkdayStart" style="width:116px;" type="time" data-cal-start value="${d(W)}" aria-label="工作日上班时间" ${D?"":"disabled"} />
                          <span class="pacom-row-sub">至</span>
                          <input class="pacom-input" name="calWorkdayEnd" style="width:116px;" type="time" data-cal-end value="${d(oe)}" aria-label="工作日下班时间" ${D?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calNightGuardStart" style="width:116px;" type="time" data-night-start value="${d(B)}" aria-label="夜间值守开始" ${D?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" name="calNightGuardEnd" style="width:116px;" type="time" data-night-end value="${d(V)}" aria-label="夜间值守结束" ${D?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">自动跳过中国法定节假日</span>
                          <span class="pacom-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                        </div>
                        <div class="pacom-setting-control">
                          <span class="pacom-row-sub">${ue?"已开启":"已关闭"}</span>
                          <button type="button" class="pacom-switch" role="switch" aria-checked="${ue}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${D?"":"disabled"}>
                            <span class="pacom-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                        <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${D?"":"disabled"}>保存并校验版本</button>
                      </div>
                    </div>
                  </section>

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">特殊例外日期（加班 / 接待覆盖默认日历）</h2>
                      <span class="pacom-row-sub">共 ${K.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${K.map(E=>`
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title"><span>${d(E.date)}</span><span class="pacom-badge pacom-badge--accent">${d(E.mode)}</span></span>
                              <span class="pacom-setting-desc">${d(E.label)}</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${d(E.id)}" ${D?"":"disabled"}>移除</button>
                          </div>`).join("")}
                      <form data-add-sd-form class="pacom-setting-row" style="display:grid; grid-template-columns:145px 1fr 148px auto; gap:8px; align-items:center;">
                        <input class="pacom-input" name="date" type="date" required ${D?"":"disabled"} />
                        <input class="pacom-input" name="label" placeholder="说明（如：重要接待日 / 实验加班）" required ${D?"":"disabled"} />
                        <select class="pacom-select" name="mode" ${D?"":"disabled"}>
                          <option value="保持工作日工况">保持工作日工况</option>
                          <option value="全天节能值守">全天节能值守</option>
                        </select>
                        <button class="pacom-btn" type="submit" ${D?"":"disabled"}>+ 添加例外</button>
                      </form>
                    </div>
                  </section>

                  ${X.length>0?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">受影响的定时与夜间规则预览</h2>
                          <span class="pacom-row-sub">共 ${X.length} 条</span>
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
                                ${X.map(E=>`
                                    <tr>
                                      <td>
                                        <div style="font-weight:450;">${d(E.ruleName)}</div>
                                        ${E.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${d(E.conflictWarning)}</div>`:""}
                                      </td>
                                      <td>${d(E.beforeWindow)}</td>
                                      <td><strong>${d(E.afterWindow)}</strong></td>
                                      <td>
                                        <span class="pacom-badge ${E.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                          ${E.conflictWarning?"交叠警告":"自动跟随"}
                                        </span>
                                      </td>
                                    </tr>`).join("")}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </section>`:""}`:c==="energy_weather"?`
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
                            <select class="pacom-select" name="energyWeatherSource" data-energy-field="weatherSource" aria-label="室外气象数据源" ${D?"":"disabled"}>
                              <option value="guanzhou_station" ${de.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                              <option value="campus_sensor" ${de.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                            </select>
                          </div>
                        </div>
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">${d(ae)}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" name="energyBillingArea" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${d(de.billingArea)}" aria-label="计费面积" ${D?"":"disabled"} />
                          </div>
                        </div>
                        ${lt(le,D)}
                      </div>
                    </section>

                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">电价与碳排口径</h2>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${_==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                          <button class="pacom-tab" aria-selected="${_==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                        </div>
                      </div>
                      <div class="pacom-settings-card">
                        ${_==="flat"?`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">综合电价参考（元 / kWh）</span>
                                <span class="pacom-setting-desc">用于数据分析中的月度节能金额估算</span>
                              </div>
                              <div class="pacom-setting-control">
                                <input class="pacom-input" name="energyTariffYuan" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${d(de.tariffYuan)}" aria-label="综合电价" ${D?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 ｜ 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" name="energyTariffPeak" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${d(de.tariffPeak)}" aria-label="峰段电价" ${D?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" name="energyTariffFlat" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${d(de.tariffFlat)}" aria-label="平段电价" ${D?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" name="energyTariffValley" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${d(de.tariffValley)}" aria-label="谷段电价" ${D?"":"disabled"} />
                              </div>
                            </div>`}
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">区域电网碳排放因子</span>
                            <span class="pacom-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" name="energyCarbonFactor" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${D?"":"disabled"}>
                              <option value="0.5271" ${de.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                              <option value="0.5703" ${de.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                            </select>
                          </div>
                        </div>
                        ${lt(pe,D)}
                        <div class="pacom-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${D?"":"disabled"}>保存口径参数</button>
                        </div>
                      </div>
                    </section>`:c==="guardrails"?`
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
                              <input class="pacom-input" name="guardMinTemp" style="width:72px;" type="number" data-guard-field="minTemp" value="${d(F.minTemp)}" aria-label="最低设定温度" ${D?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" name="guardMaxTemp" style="width:72px;" type="number" data-guard-field="maxTemp" value="${d(F.maxTemp)}" aria-label="最高设定温度" ${D?"":"disabled"} />
                              <span class="pacom-row-sub">°C</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">人工覆盖自动释放时长</span>
                              <span class="pacom-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                            </div>
                            <div class="pacom-setting-control">
                              <select class="pacom-select" name="guardOverrideAutoRelease" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${D?"":"disabled"}>
                                <option value="2h" ${F.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                                <option value="4h" ${F.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                                <option value="eod" ${F.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                                <option value="permanent" ${F.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                              </select>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">控制指令回读超时阈值（秒）</span>
                              <span class="pacom-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" name="guardReadbackTimeoutSec" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${d(F.readbackTimeoutSec)}" aria-label="回读超时阈值" ${D?"":"disabled"} />
                              <span class="pacom-row-sub">秒</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row" style="justify-content:flex-end;">
                            <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${D?"":"disabled"}>保存控制参数</button>
                          </div>
                        </div>
                      </section>

                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">标准设备参数模板</h2>
                          <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                        </div>
                        <div class="pacom-settings-card">
                          ${lt(_e,D)}
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
                              <input class="pacom-input" name="dailyDigestTime" style="width:116px;" type="time" data-digest-time value="${d(be.dailyDigestTime)}" aria-label="每日简报发送时间" ${D?"":"disabled"} />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${be.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报" ${D?"":"disabled"}>
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
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${be.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰" ${D?"":"disabled"}>
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
                              <input class="pacom-input" name="autoWoDelayMin" style="width:72px;" type="number" data-auto-wo="delayMin" value="${d(ve.delayMin)}" aria-label="自动派单延迟分钟数" ${D?"":"disabled"} />
                              <span class="pacom-row-sub">分钟</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${ve.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${D?"":"disabled"}>
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
                              <select class="pacom-select" name="autoWoDefaultGroup" data-auto-wo="defaultGroup" aria-label="默认处理组" ${D?"":"disabled"}>
                                <option value="暖通运维组" ${ve.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                                <option value="强电照明组" ${ve.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                                <option value="园区物业值班组" ${ve.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                              </select>
                              <span class="pacom-row-sub">防重</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${ve.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${D?"":"disabled"}>
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
                                ${H.map(E=>`
                                    <tr>
                                      <td><strong>${d(E.groupName)}</strong></td>
                                      <td>${d(E.scope)}</td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${d(E.severity)}</span></td>
                                      <td><span class="pacom-badge pacom-badge--accent">${d(E.channels)}</span></td>
                                      <td style="text-align:right;">
                                        <button type="button" class="pacom-switch" role="switch" aria-checked="${E.enabled}" data-toggle-nr="${d(E.id)}" aria-label="切换 ${d(E.groupName)} 通知规则" ${D?"":"disabled"}>
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
    `,Ga(t,{onToggle:()=>{m=!m,se(),m&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:E=>{y=E,se();const G=t.querySelector("[data-global-space-search]");G&&(G.focus(),G.setSelectionRange(E.length,E.length))},onPick:E=>{l=E,m=!1,se()}}),t.querySelectorAll("[data-stab]").forEach(E=>{E.addEventListener("click",()=>{c=E.dataset.stab??"calendar",ge="",ie="",se()})}),t.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{D&&(ue=!ue,ge=`法定节假日自动跳过已${ue?"开启":"关闭"}。`,se())}),t.querySelector("[data-night-start]")?.addEventListener("change",E=>{D&&(B=E.currentTarget.value)}),t.querySelector("[data-night-end]")?.addEventListener("change",E=>{D&&(V=E.currentTarget.value)}),t.querySelector("[data-add-sd-form]")?.addEventListener("submit",E=>{if(E.preventDefault(),!D)return;const G=new FormData(E.currentTarget);K.push({id:`sd-${Date.now()}`,date:String(G.get("date")??""),label:String(G.get("label")??""),mode:String(G.get("mode")??"保持工作日工况")}),ge="已添加特殊例外日期，当日自动覆盖默认节假日排程。",se()}),t.querySelectorAll("[data-del-sd]").forEach(E=>{E.addEventListener("click",()=>{if(!D)return;const G=K.findIndex(Le=>Le.id===E.dataset.delSd);G>=0&&K.splice(G,1),se()})}),t.querySelectorAll("[data-tariff-mode]").forEach(E=>{E.addEventListener("click",()=>{_=E.dataset.tariffMode??"flat",se()})}),t.querySelectorAll("[data-energy-field]").forEach(E=>{E.addEventListener("change",()=>{if(!D)return;const G=E.dataset.energyField;G&&(de[G]=E.value)})}),t.querySelector("[data-save-energy]")?.addEventListener("click",()=>{D&&(ge=_==="flat"?`能耗计费与气象口径已保存（面积 ${de.billingArea} m² ｜ 综合电价 ¥${de.tariffYuan}/kWh ｜ 因子 ${de.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${de.tariffPeak} / 平 ¥${de.tariffFlat} / 谷 ¥${de.tariffValley}）。`,se())}),t.querySelectorAll("[data-guard-field]").forEach(E=>{E.addEventListener("change",()=>{if(!D)return;const G=E.dataset.guardField;G&&(F[G]=E.value)})}),t.querySelector("[data-save-guard]")?.addEventListener("click",()=>{D&&(ge=`控制保护参数已保存（温区 ${F.minTemp}–${F.maxTemp}°C ｜ 超时 ${F.readbackTimeoutSec}s）。`,se())}),t.querySelectorAll("[data-auto-wo]").forEach(E=>{E.addEventListener("change",()=>{if(!D)return;const G=E.dataset.autoWo;G&&(ve[G]=E.value),ge="超时自动派单配置已更新。",se()})}),t.querySelectorAll("[data-toggle-autowo]").forEach(E=>{E.addEventListener("click",()=>{if(!D)return;const G=E.dataset.toggleAutowo;G&&(ve[G]=!ve[G],ge="自动派单保护策略已更新。",se())})}),t.querySelector("[data-digest-time]")?.addEventListener("change",E=>{D&&(be.dailyDigestTime=E.currentTarget.value,ge=`每日晨间简报发送时刻已更新为 ${be.dailyDigestTime}。`,se())}),t.querySelectorAll("[data-notify-key]").forEach(E=>{E.addEventListener("click",()=>{if(!D)return;const G=E.dataset.notifyKey;G&&(be[G]=!be[G],ge="消息通知偏好已更新。",se())})}),t.querySelectorAll("[data-toggle-nr]").forEach(E=>{E.addEventListener("click",()=>{if(!D)return;const G=H.find(Le=>Le.id===E.dataset.toggleNr);G&&(G.enabled=!G.enabled,ge=`工作组「${G.groupName}」的分流推送规则已${G.enabled?"启用":"停用"}。`,se())})}),t.querySelector("[data-cal-start]")?.addEventListener("change",E=>{D&&(W=E.currentTarget.value)}),t.querySelector("[data-cal-end]")?.addEventListener("change",E=>{D&&(oe=E.currentTarget.value)}),t.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{ie="";try{X=await e.previewCalendarImpact(S.projectId,W,oe),se()}catch(E){ie=E instanceof Error?E.message:String(E),se()}}),t.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{if(D){ie="";try{const E=await e.saveWorkCalendar(S.projectId,W,oe,N.calendar.version);N={...N,calendar:{...E,nightGuardStart:B,nightGuardEnd:V}},ge=`工作时间配置已保存至 v${E.version}（工作日 ${E.workdayStart}–${E.workdayEnd} ｜ 夜间值守 ${B}–${V}）`,X=[],se()}catch(E){ie=E instanceof Error?E.message:String(E),se()}}}),t.querySelectorAll("[data-toggle-rule]").forEach(E=>{E.addEventListener("click",async()=>{if(D){ie="";try{await e.toggleRuntimeRule(E.dataset.toggleRule,E.dataset.ruleNext==="true",Number(E.dataset.ruleVer)),N=await e.getRuntimeSettings(S.projectId),ge="策略状态与版本回执已更新。",se()}catch(G){ie=G instanceof Error?G.message:String(G),se()}}})})}se()}const jt="pacom.web.sidebar.collapsed",fs=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Lt=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],ut={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},Ct=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function rt(){const t=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return t in ut?t:"home"}function We(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}const Ea=new WeakMap;function bs(t){Ea.get(t)?.()}async function hs(t,e,s,c){Ea.get(t)?.(),t.classList.remove("bare-login");let l=s,m=rt(),y=localStorage.getItem(jt)==="1",O=!1,L=!1,N=!1,W=await e.listOrganizations?.()??[{id:"org-gzlab",name:"广州国家实验室",projectCount:2}],oe=e.getActiveOrganizationId?.()??W[0]?.id??"org-gzlab",B="",V=!1,ue=0,X={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};function K(v){return l.scope.visibleModules.includes(v)}K(m)||(m="home",window.location.hash="#home");function _(){return W.find(v=>v.id===oe)??W[0]??{id:"org-gzlab",name:"广州国家实验室",projectCount:0}}function de(v){if(v.id==="org-gzlab")return'<span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>';const $=v.name.slice(0,1)||"机";return`<span class="pacom-pop-avatar" style="width:24px; height:24px; font-size:12px; border-radius:6px;" aria-hidden="true">${We($)}</span>`}async function F(){e.listOrganizations&&(W=await e.listOrganizations(),oe=e.getActiveOrganizationId?.()??W[0]?.id??"org-gzlab")}async function ve(){try{await F();const[v,$,z,u,j]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(S.floorId).catch(()=>[]),e.listAlarms(S.floorId).catch(()=>[]),e.listWorkOrders(S.floorId).catch(()=>[]),e.listScenes(S.floorId).catch(()=>[])]);X={devices:$,zones:v.zones,alarms:z,workOrders:u,scenes:j},ue=z.filter(Y=>Y.status==="active").length,P()}catch{}}function be(){const v=Lt.filter(z=>K(z.id));let $=!1;return v.map(z=>`
        ${(z.id==="settings"||z.id==="deployment")&&!$?($=!0,'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>'):""}
        <button type="button" class="pacom-nav-item" data-route="${z.id}" aria-current="${m===z.id?"page":"false"}" title="${z.label}">
          ${Ae(z.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${z.label}</span>
          ${z.id==="alarms"&&ue>0?`<span class="pacom-nav-count" title="待处理告警 ${ue} 条">${ue}</span>`:""}
        </button>`).join("")}function H(){const v=B.trim().toLowerCase(),$=Lt.filter(ee=>K(ee.id)),z=v?$.filter(ee=>ee.label.toLowerCase().includes(v)).slice(0,4):$,u=v?X.devices.filter(ee=>`${ee.name} ${ee.id} ${ee.category}`.toLowerCase().includes(v)).slice(0,5):X.devices.slice(0,3),j=v?X.zones.filter(ee=>ee.name.toLowerCase().includes(v)).slice(0,3):[],Y=K("alarms")?v?X.alarms.filter(ee=>`${ee.title} ${ee.message} ${ee.id}`.toLowerCase().includes(v)).slice(0,4):X.alarms.filter(ee=>ee.status==="active").slice(0,2):[],Ee=K("alarms")?v?X.workOrders.filter(ee=>`${ee.title} ${ee.id}`.toLowerCase().includes(v)).slice(0,3):[]:[],Pe=K("scenes")?v?X.scenes.filter(ee=>`${ee.name} ${ee.description}`.toLowerCase().includes(v)).slice(0,3):[]:[],Be=K("deployment")?v?Ct.filter(ee=>`${ee.title} ${ee.category}`.toLowerCase().includes(v)).slice(0,4):Ct.slice(0,2):[],Ce=[];return u.length&&Ce.push(`<div class="pacom-search-group">${v?"设备（空间总览）":"常用设备直达"}</div>`+u.map(ee=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(ee.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${We(ee.name)}</span><span class="pacom-badge ${ee.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${ee.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),j.length&&Ce.push('<div class="pacom-search-group">功能区</div>'+j.map(ee=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(ee.id)}"><span>${We(ee.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),Y.length&&Ce.push(`<div class="pacom-search-group">${v?"告警":"待处理告警"}</div>`+Y.map(ee=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(ee.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${We(ee.title)}</span><span class="pacom-badge pacom-badge--warning">${ee.status==="active"?"待处理":"已确认"}</span></button>`).join("")),Ee.length&&Ce.push('<div class="pacom-search-group">运维工单</div>'+Ee.map(ee=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(ee.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${We(ee.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),Pe.length&&Ce.push('<div class="pacom-search-group">智能策略</div>'+Pe.map(ee=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${We(ee.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),Be.length&&Ce.push('<div class="pacom-search-group">图纸与工程文档</div>'+Be.map(ee=>`<button type="button" class="pacom-search-hit" data-search-hash="${ee.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${We(ee.title)}</span><span class="pacom-badge pacom-badge--neutral">${We(ee.category)}</span></button>`).join("")),z.length&&Ce.push('<div class="pacom-search-group">工作区</div>'+z.map(ee=>`<button type="button" class="pacom-search-hit" data-search-hash="#${ee.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${Ae(ee.icon,14)}${We(ee.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),Ce.length?Ce.join(""):`<div class="pacom-nav-empty">未找到与「${We(B)}」匹配的设备、区域、告警、工单或图纸</div>`}function ge(v){v.querySelectorAll("[data-search-hash]").forEach($=>{$.addEventListener("click",()=>{const z=$.dataset.searchHash||"#home";V=!1,B="",ie(),O=!1,window.location.hash===z?(m=rt(),je(!0)):window.location.hash=z})})}function ie(){if(t.querySelector('[data-role="cmd-scrim"]')?.remove(),!V)return;const v=document.createElement("div");v.className="pacom-cmd-scrim",v.dataset.role="cmd-scrim",v.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${Ae("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${We(B)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${H()}
        </div>
      </div>
    `,t.appendChild(v),v.addEventListener("click",u=>{u.target===v&&(V=!1,ie())});const $=v.querySelector('[data-role="cmd-input"]'),z=v.querySelector('[data-role="cmd-body"]');z&&ge(z),$?.focus(),$?.addEventListener("input",u=>{B=u.currentTarget.value,z&&(z.innerHTML=H(),ge(z))})}function $e(){if(!L)return"";const v=l.displayName.slice(0,1)||"U",$=!!(e.createOrganization&&l.role==="org_admin");return`
      <div class="pacom-org-popover ${y?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <div class="pacom-pop-section-label">切换机构</div>
        ${W.map(z=>{const u=z.id===oe;return`
              <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitemradio" aria-checked="${u}" data-pop-org="${We(z.id)}">
                ${de(z)}
                <span class="pacom-pop-text">
                  <b>${We(z.name)}</b>
                  <small>${z.projectCount>0?`${z.projectCount} 个项目`:"暂无项目"}</small>
                </span>
                ${u?Ae("check",16,"pacom-pop-check"):""}
              </button>`}).join("")}
        ${$?N?`
                <form data-create-org-form="1" style="padding:6px 8px; display:flex; gap:6px; align-items:center;">
                  <input class="pacom-input" name="orgName" placeholder="输入机构名称" style="height:30px; font-size:13px; flex:1; min-width:0;" required />
                  <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建</button>
                </form>`:`
                <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="toggle-new-org">
                  <span class="pacom-pop-icon" aria-hidden="true">${Ae("plus",16)}</span>
                  <span class="pacom-pop-text">新建机构</span>
                </button>`:""}

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${Ae("settings",16)}</span>
          <span class="pacom-pop-text">机构与权限</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${We(v)}</span>
          <span class="pacom-pop-text">
            <b>${We(l.displayName)}</b>
            <small>${We(l.roleLabel)}</small>
          </span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${Ae("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function se(v){switch(K(m)||(m="home",window.location.hash="#home"),document.title=`${ut[m]} ｜ PACOM Station`,m){case"home":await Ht(v,e,l);return;case"analysis":await Vt(v,e,l);return;case"alarms":await ns(v,e,l);return;case"scenes":await vs(v,e,l);return;case"settings":await gs(v,e,l);return;case"deployment":await ds(v,e,l);return;case"account":await Xt(v,e,l,$=>{l=$,P(),ae()},D);return}}async function D(){L=!1,O=!1,V=!1,C();try{await e.logout()}finally{window.location.hash="#login",c()}}function P(){const v=t.querySelector('[data-role="nav-list"]');v&&(v.innerHTML=be(),le())}function ae(){t.querySelector('[data-role="org-popover"]')?.remove();const v=t.querySelector('[data-role="org-menu-btn"]');if(v&&v.setAttribute("aria-expanded",String(L)),!L)return;const $=document.createElement("div");$.innerHTML=$e().trim();const z=$.firstElementChild;z&&(t.appendChild(z),_e())}function le(){t.querySelectorAll("[data-route]").forEach(v=>{v.addEventListener("click",()=>{const $=v.dataset.route;$===m&&!O||(m=$,O=!1,L=!1,window.location.hash=`#${m}`,je(!0))})})}async function pe(v){if(!e.switchOrganization)return;await e.switchOrganization(v),await F();const $=await e.getSpatialTree(),z=$.projects[0],u=z?$.buildings.find(Y=>Y.projectId===z.id):void 0,j=u?$.floors.find(Y=>Y.buildingId===u.id&&Y.id===S.floorId)??$.floors.find(Y=>Y.buildingId===u.id):void 0;z&&u&&j?ga({level:"floor",projectId:z.id,buildingId:u.id,floorId:j.id}):z&&u?ga({level:"building",projectId:z.id,buildingId:u.id}):z?ga({level:"project",projectId:z.id}):ga({level:"all-projects"}),L=!1,N=!1,O=!1,await je(!0),ve()}function _e(){t.querySelectorAll("[data-pop-org]").forEach(v=>{v.addEventListener("click",()=>{const $=v.dataset.popOrg;if($){if($===oe){L=!1,ae();return}pe($)}})}),t.querySelector('[data-pop-act="toggle-new-org"]')?.addEventListener("click",v=>{v.stopPropagation(),N=!N,ae(),N&&t.querySelector('[data-create-org-form] input[name="orgName"]')?.focus()}),t.querySelector("[data-create-org-form]")?.addEventListener("submit",async v=>{if(v.preventDefault(),!e.createOrganization)return;const $=new FormData(v.currentTarget),z=String($.get("orgName")??"").trim();if(!z)return;const u=await e.createOrganization(z);await pe(u.id)}),t.querySelectorAll('[data-pop-act="go-account"]').forEach(v=>{v.addEventListener("click",()=>{L=!1,N=!1,O=!1,m="account",window.location.hash="#account",je(!0)})}),t.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{D()})}async function je(v){const $=t.querySelector('[data-role="main-stage"]');if(!v&&$){const u=t.querySelector(".pacom-nav-rail");u&&(u.classList.toggle("is-collapsed",y),u.classList.toggle("is-mobile-open",O));const j=t.querySelector('[data-role="mobile-scrim"]');j&&j.classList.toggle("is-open",O),ae();return}t.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${Ae("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${ut[m]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${We(l.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${O?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${y?"is-collapsed":""} ${O?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${fs}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${y?"展开侧栏":"收起侧栏"}" aria-label="${y?"展开侧栏":"收起侧栏"}">
              ${Ae("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${Ae("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${be()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${m==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${L}" title="${We(_().name)} ｜ ${We(l.displayName)}">
              ${de(_())}
              <span class="pacom-org-name">${We(_().name)}</span>
              ${Ae("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,t.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{y=!y,L=!1,localStorage.setItem(jt,y?"1":"0");const u=t.querySelector(".pacom-nav-rail"),j=t.querySelector('[data-role="toggle-sidebar"]');u&&u.classList.toggle("is-collapsed",y),j&&(j.title=y?"展开侧栏":"收起侧栏",j.setAttribute("aria-label",j.title),j.innerHTML=Ae("panel-left",16)),ae()}),t.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{L=!1,ae(),V=!0,ie()}),t.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{O=!O,je(!1)}),t.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{O=!1,L=!1,je(!1)}),t.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",u=>{u.stopPropagation(),L=!L,ae()}),le(),ae(),ie();const z=t.querySelector('[data-role="main-stage"]');z&&await se(z)}const E=v=>{const $=v.target;L&&!$?.closest('[data-role="org-popover"]')&&!$?.closest('[data-role="org-menu-btn"]')&&(L=!1,ae())},G=v=>{if((v.metaKey||v.ctrlKey)&&v.key.toLowerCase()==="k"){v.preventDefault(),L=!1,ae(),V=!V,ie();return}v.key==="Escape"&&(V?(V=!1,ie()):L?(L=!1,ae()):O&&(O=!1,je(!1)))},Le=()=>{m=rt(),L=!1,O=!1,V=!1,je(!0),ve()};function C(){document.removeEventListener("click",E),document.removeEventListener("keydown",G),window.removeEventListener("hashchange",Le),Ea.get(t)===C&&Ea.delete(t)}Ea.set(t,C),document.addEventListener("click",E),document.addEventListener("keydown",G),window.addEventListener("hashchange",Le),await je(!0),ve()}const aa=["password","sms"];function ct(t){const e=Wt(t);return e==="cn"||e==="phone"}const Ia=new WeakMap;function qt(t){Ia.get(t)?.()}function ys(t,e,s,c){Ia.get(t)?.(),t.classList.add("bare-login"),document.title="登录 ｜ PACOM Station";let l=!1,m=!1,y=(c?.prefillAccount??"").trim(),O="",L=ct(y)?y:"",N="",W=!1,oe=(c?.notice??"").trim(),B={},V="",ue=!1,X="",K=0,_=null,de=0,F=null,ve=1,be="",H="",ge="",ie="",$e=!1,se=!1,D={},P="",ae=0,le=null,pe=0,_e=null,je=null,E=null,G=null,Le=!1;const C=Dt();function v(p){if(p.key==="Escape"){if(C.isOpen()){p.preventDefault(),C.close(!0);return}F&&(p.preventDefault(),Re())}}function $(p){const k=t.querySelector('[data-role="mode-seg"]'),re=k?.querySelector(".au-mode-indicator"),xe=k?.querySelector('.au-mode-tab[aria-selected="true"]');!re||!xe||(re.style.transition=p?"":"none",re.style.transform=`translateX(${xe.offsetLeft}px)`,re.style.width=`${xe.offsetWidth}px`,p||(re.offsetWidth,re.style.transition=""))}function z(){$(!1)}function u(){K=0,_!==null&&(window.clearInterval(_),_=null)}function j(){ae=0,le!==null&&(window.clearInterval(le),le=null)}function Y(){je?.(),je=null,E?.(),E=null}function Ee(){Le=!0,G?.(),G=null,Y(),C.destroy(),u(),j(),document.removeEventListener("keydown",v),window.removeEventListener("resize",z),t.classList.remove("bare-login"),Ia.get(t)===Ee&&Ia.delete(t)}document.addEventListener("keydown",v),window.addEventListener("resize",z),Ia.set(t,Ee);function Pe(p=60){u(),K=p,_=window.setInterval(()=>{K-=1,K<=0&&u();const k=t.querySelector('[data-act="send-sms"]');k&&(k.disabled=K>0,k.textContent=K>0?`${K} 秒后重发`:X?"重新获取":"获取验证码")},1e3)}function Be(p=60){j(),ae=p,le=window.setInterval(()=>{ae-=1,ae<=0&&j();const k=t.querySelector('[data-act="reset-resend"]');k&&(k.disabled=ae>0||se,k.textContent=ae>0?`${ae} 秒后重发`:"重新获取")},1e3)}function Ce(p){oe=p.trim();const k=t.querySelector('[data-role="login-notice"]');if(!oe){k?.remove();return}if(k){const xe=k.querySelector("span");xe&&(xe.textContent=oe);return}const re=t.querySelector(".au-h1");re&&re.insertAdjacentHTML("afterend",`<div class="au-notice-soft au-login-notice" data-role="login-notice" role="status">${Ua}<span>${d(oe)}</span></div>`)}function ee(){const p=t.querySelector("#au-login-ferr");if(p)if(V){p.hidden=!1;const k=p.querySelector('[data-role="ferr-text"]');k&&(k.textContent=V)}else p.hidden=!0}function h(p){const k=t.querySelector(`.au-field[data-f="${p}"]`),re=t.querySelector(`#au-${p}`),xe=t.querySelector(`#au-${p}-err`),ke=B[p]??"";k?.classList.toggle("bad",!!ke),re?.setAttribute("aria-invalid",ke?"true":"false"),xe&&(xe.textContent=ke)}function b(p,k){const re=p.querySelector(`.au-field[data-f="${k}"]`),xe=p.querySelector(`#au-${k}`),ke=p.querySelector(`#au-${k}-err`),Ne=D[k]??"";re?.classList.toggle("bad",!!Ne),xe?.setAttribute("aria-invalid",Ne?"true":"false"),ke&&(ke.textContent=Ne)}function Z(p){const k=p.querySelector("#au-rs-ferr");if(k)if(P){k.hidden=!1;const re=k.querySelector('[data-role="rs-ferr-text"]');re&&(re.textContent=P)}else k.hidden=!0}function ne(){const p=t.querySelector('form[data-form="login"] fieldset'),k=t.querySelector('form[data-form="login"] button[type="submit"]');p&&(p.disabled=ue),k&&(k.disabled=ue,k.innerHTML=ue?'<span class="au-spinner" aria-hidden="true"></span><span>正在登录…</span>':"<span>登录</span>")}function we(p,k){C.close(!1),_e=k??(document.activeElement instanceof HTMLElement?document.activeElement:null),F=p,Fe(),p==="reset"?t.querySelector(ve===1?"#au-rs_id":"#au-rs_code")?.focus():t.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function Re(p=!0){if(!F)return;C.close(!1),F=null,pe+=1,se=!1,j(),Y(),Fe();const k=_e;_e=null,p&&k&&document.contains(k)&&k.focus({preventScroll:!0})}function He(p){const k=p?"au-account-scrim is-no-anim":"au-account-scrim";if(ve===1){const xe=be.trim().length>0&&!se;return`
        <div class="${k}" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ha}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码。</p>
              <form id="au-reset-form" novalidate>
                <fieldset ${se?"disabled":""}>
                  <div class="au-field ${D.rs_id?"bad":""}" data-f="rs_id">
                    <div class="au-lab"><label for="au-rs_id">电子邮箱或手机号码</label></div>
                    <div class="au-ctl">
                      <input id="au-rs_id" name="rs_id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(be)}" aria-invalid="${D.rs_id?"true":"false"}" />
                    </div>
                    <p class="au-err" id="au-rs_id-err" aria-live="polite">${d(D.rs_id??"")}</p>
                  </div>
                  <div class="au-ferr" id="au-rs-ferr" role="alert" ${P?"":"hidden"}>
                    ${na}
                    <span data-role="rs-ferr-text">${d(P)}</span>
                  </div>
                </fieldset>
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary" data-role="reset-submit" ${xe?"":"disabled"}>
                ${se?'<span class="au-spinner" aria-hidden="true"></span><span>发送中…</span>':"<span>发送验证码</span>"}
              </button>
            </div>
          </section>
        </div>
      `}return`
      <div class="${k}" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">重置密码</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ha}</button>
          </div>
          <div class="db">
            <div class="au-notice-soft au-reset-step-notice" role="status" aria-live="polite">
              <span class="au-notice-main">${Ua}<span>如该账户已注册，验证码已发送至 ${d(H)}</span></span>
              <button type="button" class="au-notice-action" data-act="reset-back-step1" ${se?"disabled":""}>更换账户</button>
            </div>
            <form id="au-reset-confirm-form" novalidate>
              <fieldset ${se?"disabled":""}>
                <div class="au-field ${D.rs_code?"bad":""}" data-f="rs_code">
                  <div class="au-lab">
                    <label for="au-rs_code">验证码</label>
                    <span>
                      <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-rs-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-rs-novcode-pop"><span>收不到验证码？</span></button>
                      <span id="au-rs-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
                        <span class="ws-info-text">请确认邮箱或手机号码无误，并检查垃圾邮件或短信拦截记录；如仍未收到，请联系机构管理员或发送邮件至 support@pacom.cn。</span>
                      </span>
                    </span>
                  </div>
                  <div class="au-ctl">
                    <input id="au-rs_code" name="rs_code" class="au-in has-code-btn" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(ge)}" aria-invalid="${D.rs_code?"true":"false"}" />
                    <button type="button" class="au-suffix au-getcode" data-act="reset-resend" ${ae>0||se?"disabled":""}>
                      ${ae>0?`${ae} 秒后重发`:"重新获取"}
                    </button>
                  </div>
                  <p class="au-err" id="au-rs_code-err" aria-live="polite">${d(D.rs_code??"")}</p>
                </div>

                <div class="au-field ${D.rs_pwd?"bad":""}" data-f="rs_pwd">
                  <div class="au-lab">
                    <span class="au-lab-group">
                      <label for="au-rs_pwd">设置新密码</label>
                      ${$a("au-rs-pwd-info","设置新密码说明",pt)}
                    </span>
                  </div>
                  <div class="au-ctl">
                    <input id="au-rs_pwd" name="rs_pwd" class="au-in has-suffix" type="${$e?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(ie)}" aria-invalid="${D.rs_pwd?"true":"false"}" />
                    <button type="button" class="au-suffix au-eye" data-act="reset-toggle-eye" aria-controls="au-rs_pwd" aria-label="${$e?"隐藏密码":"显示密码"}">
                      ${$e?la:ia}
                    </button>
                  </div>
                  <p class="au-err" id="au-rs_pwd-err" aria-live="polite">${d(D.rs_pwd??"")}</p>
                </div>

                <div class="au-ferr" id="au-rs-ferr" role="alert" ${P?"":"hidden"}>
                  ${na}
                  <span data-role="rs-ferr-text">${d(P)}</span>
                </div>
              </fieldset>
            </form>
          </div>
          <div class="df">
            <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
            <button type="submit" form="au-reset-confirm-form" class="au-dlg-btn au-dlg-btn--primary" data-role="reset-confirm" ${se?"disabled":""}>
              ${se?'<span class="au-spinner" aria-hidden="true"></span><span>正在重置…</span>':"<span>确认重置</span>"}
            </button>
          </div>
        </section>
      </div>
    `}function Te(p){return F?F==="reset"?He(p):F==="contact"?Pt():"":""}function Fe(){const p=t.querySelector('[data-role="modal-host"]');if(!p)return;const k=p.childElementCount>0;if(Y(),C.close(!1),p.innerHTML=Te(k),!F)return;C.bind(p),je=Mt(p.querySelector(".au-account-dlg")),E=Nt(p),p.querySelectorAll('[data-act="close-modal"]').forEach(Me=>{Me.addEventListener("click",()=>Re())}),p.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",Me=>{Me.target===Me.currentTarget&&Re()});const re=p.querySelector("#au-rs_id"),xe=p.querySelector('[data-role="reset-submit"]');re?.addEventListener("input",()=>{be=re.value,xe&&(xe.disabled=be.trim().length===0||se),(D.rs_id||P)&&(delete D.rs_id,P="",b(p,"rs_id"),Z(p))}),p.querySelector("#au-reset-form")?.addEventListener("submit",async Me=>{if(Me.preventDefault(),se)return;D={},P="";const Oe=Ve(re?.value??be);be=Oe;const fe=Va(Oe);if(fe){D.rs_id=fe,b(p,"rs_id"),re?.focus({preventScroll:!0});return}const De=++pe;se=!0,Fe();try{const ze=await e.sendVerificationCode({target:Oe,purpose:"reset"});if(Le||F!=="reset"||De!==pe)return;se=!1,H=ze.maskedTarget||oa(Oe),ge="",ie="",D={},P="",ve=2,Be(ze.cooldownSeconds||60),Fe(),t.querySelector("#au-rs_code")?.focus({preventScroll:!0})}catch(ze){if(Le||F!=="reset"||De!==pe)return;se=!1,P=ze instanceof Error?ze.message:"暂时无法发送验证码，请稍后再试。",Fe(),t.querySelector("#au-rs_id")?.focus({preventScroll:!0})}}),p.querySelector('[data-act="reset-back-step1"]')?.addEventListener("click",()=>{se||(pe+=1,j(),ve=1,ge="",ie="",D={},P="",Fe(),t.querySelector("#au-rs_id")?.focus({preventScroll:!0}))});const ke=p.querySelector("#au-rs_code"),Ne=p.querySelector("#au-rs_pwd");ke?.addEventListener("input",()=>{ge=ke.value.replace(/\D/g,"").slice(0,6),ke.value=ge,(D.rs_code||P)&&(delete D.rs_code,P="",b(p,"rs_code"),Z(p))}),Ne?.addEventListener("input",()=>{ie=Ne.value,(D.rs_pwd||P)&&(delete D.rs_pwd,P="",b(p,"rs_pwd"),Z(p))}),p.querySelector('[data-act="reset-toggle-eye"]')?.addEventListener("click",Me=>{$e=!$e;const Oe=Me.currentTarget;if(Ne){const fe=Ne.selectionStart,De=Ne.selectionEnd;Ne.type=$e?"text":"password",Ne.focus({preventScroll:!0}),fe!==null&&De!==null&&Ne.setSelectionRange(fe,De)}Oe.setAttribute("aria-label",$e?"隐藏密码":"显示密码"),Oe.innerHTML=$e?la:ia}),p.querySelector('[data-act="reset-resend"]')?.addEventListener("click",async()=>{if(ae>0||se)return;const Me=Ve(be),Oe=++pe,fe=p.querySelector('[data-act="reset-resend"]');fe&&(fe.disabled=!0,fe.textContent="发送中…"),P="",Z(p);try{const De=await e.sendVerificationCode({target:Me,purpose:"reset"});if(Le||F!=="reset"||ve!==2||Oe!==pe)return;H=De.maskedTarget||oa(Me),Be(De.cooldownSeconds||60),fe&&(fe.disabled=!0,fe.textContent=`${ae} 秒后重发`),ke?.focus({preventScroll:!0})}catch(De){if(Le||F!=="reset"||ve!==2||Oe!==pe)return;fe&&(fe.disabled=!1,fe.textContent="重新获取"),P=De instanceof Error?De.message:"暂时无法发送验证码，请稍后再试。",Z(p)}}),p.querySelector("#au-reset-confirm-form")?.addEventListener("submit",async Me=>{if(Me.preventDefault(),se)return;D={},P="",/^\d{6}$/.test(ge.trim())||(D.rs_code="请输入 6 位验证码");const Oe=dt(ie);if(Oe&&(D.rs_pwd=Oe),b(p,"rs_code"),b(p,"rs_pwd"),Z(p),Object.keys(D).length>0){const De=Object.keys(D)[0];p.querySelector(`#au-${De}`)?.focus({preventScroll:!0});return}const fe=Ve(be);se=!0,Fe();try{if(await e.confirmPasswordReset({account:fe,verificationCode:ge.trim(),newPassword:ie}),Le)return;Re(!1),y=fe,O="",ct(fe)&&(L=fe),V="",B={},l?ce("password",!1):(Ge(),ee()),Ce("密码已重置，请使用新密码登录"),t.querySelector("#au-pwd")?.focus({preventScroll:!0})}catch(De){if(Le||F!=="reset")return;se=!1,P=De instanceof Error?De.message:"验证码不正确或已过期，请检查后重试。",Fe(),t.querySelector("#au-rs_code")?.focus({preventScroll:!0})}})}function Ge(){C.close(!1);const p=`
      <span data-role="login-novcode-wrap" ${X?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-login-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-login-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-login-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `,k=l?`
        <div class="au-field ${B.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(L)}" aria-invalid="${B.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${K>0?"disabled":""}>
              ${K>0?`${K} 秒后重发`:X?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${d(B.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${X?`验证码已发送至 ${d(X)}`:""}</p>
        </div>
      `:`
        <div class="au-field ${B.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(y)}" aria-invalid="${B.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${d(B.id??"")}</p>
        </div>
      `,re=l?`
        <div class="au-field ${B.scode?"bad":""}" data-f="scode">
          <div class="au-lab">
            <label for="au-scode">短信验证码</label>
            ${p}
          </div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(N)}" aria-invalid="${B.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${d(B.scode??"")}</p>
        </div>
      `:`
        <div class="au-field ${B.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab">
            <label for="au-pwd">密码</label>
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${m?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(O)}" aria-invalid="${B.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${m?"隐藏密码":"显示密码"}">
              ${m?la:ia}
            </button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${d(B.pwd??"")}</p>
        </div>
      `,xe=t.querySelector('[data-role="fields-host"]');xe&&(xe.innerHTML=`${k}${re}`,he(xe))}function ce(p,k=!1){const re=p==="sms";l===re||ue||(re&&!L.trim()&&ct(y)?L=y.trim():!re&&!y.trim()&&L.trim()&&(y=L.trim()),l=re,B={},V="",t.querySelectorAll('[data-act="switch-mode"]').forEach(xe=>{const ke=xe.dataset.mode===p;xe.setAttribute("aria-selected",String(ke)),xe.tabIndex=ke?0:-1,ke&&k&&xe.focus({preventScroll:!0})}),$(!0),Ge(),ee(),k||(l?X?t.querySelector("#au-scode")?.focus({preventScroll:!0}):L.trim()?t.querySelector('[data-act="send-sms"]')?.focus({preventScroll:!0}):t.querySelector("#au-sphone")?.focus({preventScroll:!0}):t.querySelector(y.trim()?"#au-pwd":"#au-id")?.focus({preventScroll:!0})))}function he(p){C.bind(p);const k=p.querySelector("#au-id"),re=p.querySelector("#au-pwd"),xe=p.querySelector("#au-sphone"),ke=p.querySelector("#au-scode");k?.addEventListener("input",()=>{y=k.value,(B.id||V)&&(delete B.id,V="",h("id"),ee())}),re?.addEventListener("input",()=>{O=re.value,(B.pwd||V)&&(delete B.pwd,V="",h("pwd"),ee())}),xe?.addEventListener("input",()=>{if(L=xe.value,de+=1,X||K>0){X="",u();const Ne=p.querySelector("#au-sphone-hint");Ne&&(Ne.textContent="");const Me=p.querySelector('[data-role="login-novcode-wrap"]');Me&&(Me.hidden=!0),C.close(!1);const Oe=p.querySelector('[data-act="send-sms"]');Oe&&(Oe.disabled=!1,Oe.textContent="获取验证码")}(B.sphone||V)&&(delete B.sphone,V="",h("sphone"),ee())}),ke?.addEventListener("input",()=>{N=ke.value.replace(/\D/g,"").slice(0,6),ke.value=N,(B.scode||V)&&(delete B.scode,V="",h("scode"),ee())}),p.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",Ne=>{m=!m;const Me=Ne.currentTarget,Oe=p.querySelector("#au-pwd");if(Oe){const fe=Oe.selectionStart,De=Oe.selectionEnd;Oe.type=m?"text":"password",Oe.focus({preventScroll:!0}),fe!==null&&De!==null&&Oe.setSelectionRange(fe,De)}Me.setAttribute("aria-label",m?"隐藏密码":"显示密码"),Me.innerHTML=m?la:ia}),p.querySelector('[data-act="send-sms"]')?.addEventListener("click",async()=>{const Ne=sa(L);if(Ne){B={...B,sphone:Ne},h("sphone"),p.querySelector("#au-sphone")?.focus({preventScroll:!0});return}delete B.sphone,h("sphone");const Me=Ve(L),Oe=++de,fe=p.querySelector('[data-act="send-sms"]');fe&&(fe.disabled=!0,fe.textContent="发送中…");try{const De=await e.sendVerificationCode({target:Me,purpose:"login"});if(Le||Oe!==de||Ve(L)!==Me)return;X=De.maskedTarget||oa(Me);const ze=p.querySelector("#au-sphone-hint");ze&&(ze.textContent=`验证码已发送至 ${X}`);const Ue=p.querySelector('[data-role="login-novcode-wrap"]');Ue&&(Ue.hidden=!1),Pe(De.cooldownSeconds||60),fe&&(fe.disabled=!0,fe.textContent=`${K} 秒后重发`),p.querySelector("#au-scode")?.focus({preventScroll:!0})}catch(De){if(Le||Oe!==de||Ve(L)!==Me)return;fe&&(fe.disabled=!1,fe.textContent=X?"重新获取":"获取验证码"),V=De instanceof Error?De.message:"暂时无法发送验证码，请稍后再试。",ee()}}),p.querySelector('[data-act="open-reset"]')?.addEventListener("click",Ne=>{ve=1,be=(l?L:y).trim(),H="",ge="",ie="",$e=!1,se=!1,D={},P="",j(),we("reset",Ne.currentTarget)})}t.innerHTML=`
    <div class="au au-split">
      <section class="au-left">
        <div class="au-center">
          <main class="au-group">
            <div class="au-logo">${Ft}</div>
            <h1 class="au-h1">登录</h1>
            ${oe?`<div class="au-notice-soft au-login-notice" data-role="login-notice" role="status">${Ua}<span>${d(oe)}</span></div>`:""}
            <div class="au-mode-seg" role="tablist" aria-label="登录方式" data-role="mode-seg">
              <span class="au-mode-indicator" aria-hidden="true"></span>
              <button type="button" role="tab" aria-selected="true" tabindex="0" class="au-mode-tab" data-act="switch-mode" data-mode="password">密码登录</button>
              <button type="button" role="tab" aria-selected="false" tabindex="-1" class="au-mode-tab" data-act="switch-mode" data-mode="sms">短信登录</button>
            </div>
            <form data-form="login" novalidate>
              <fieldset>
                <div data-role="fields-host"></div>
                <div class="au-ferr" id="au-login-ferr" role="alert" hidden>
                  ${na}
                  <span data-role="ferr-text"></span>
                </div>
                <label class="au-check au-keep-login" data-f="keep">
                  <input type="checkbox" name="keep" />
                  <span>30 天内保持登录</span>
                </label>
                <button type="submit" class="au-primary">
                  <span>登录</span>
                </button>
              </fieldset>
            </form>
            <div class="au-login-actions">
              <div class="au-login-divider" aria-hidden="true"></div>
              <p class="au-noacct">
                没有账户？<button type="button" class="au-inline" data-act="open-register">注册</button>
              </p>
            </div>
          </main>
        </div>
        ${zt()}
      </section>
      <aside class="au-art" aria-hidden="true">
        <div class="au-art-frame">
          <img src="./media/auth-hero.jpg" alt="" />
        </div>
      </aside>
    </div>
    <div data-role="modal-host"></div>
  `,t.querySelector('input[name="keep"]')?.addEventListener("change",p=>{W=p.currentTarget.checked}),t.querySelector('form[data-form="login"]')?.addEventListener("submit",async p=>{if(p.preventDefault(),!ue){if(B={},V="",l){const k=sa(L);k&&(B.sphone=k),/^\d{6}$/.test(N.trim())||(B.scode="请输入 6 位验证码"),h("sphone"),h("scode")}else y.trim()||(B.id="请输入电子邮箱或手机号码"),O||(B.pwd="请输入密码"),h("id"),h("pwd");if(ee(),Object.keys(B).length>0){const k=Object.keys(B)[0];t.querySelector(`#au-${k}`)?.focus({preventScroll:!0});return}ue=!0,ne();try{const k=await e.login({method:l?"sms":"password",account:Ve(l?L:y),...l?{smsCode:N.trim()}:{password:O},rememberMe:W});if(Le)return;Ee(),s(k)}catch(k){if(Le)return;ue=!1,V=k instanceof Error?k.message:l?"验证码不正确或已过期":"账户或密码不正确",ne(),ee()}}}),t.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{c?.onOpenRegister?(Ee(),c.onOpenRegister()):window.location.hash="#register"}),t.querySelectorAll('[data-act="switch-mode"]').forEach(p=>{p.addEventListener("click",()=>{const k=p.dataset.mode;k&&ce(k,!1)}),p.addEventListener("keydown",k=>{const re=l?"sms":"password",xe=aa.indexOf(re);k.key==="ArrowRight"?(k.preventDefault(),ce(aa[(xe+1)%aa.length],!0)):k.key==="ArrowLeft"?(k.preventDefault(),ce(aa[(xe-1+aa.length)%aa.length],!0)):k.key==="Home"?(k.preventDefault(),ce(aa[0],!0)):k.key==="End"&&(k.preventDefault(),ce(aa[aa.length-1],!0))})}),t.querySelector('[data-act="open-contact"]')?.addEventListener("click",p=>{we("contact",p.currentTarget)}),Ge(),$(!1),G=Rt(t),y.trim()&&t.querySelector("#au-pwd")?.focus({preventScroll:!0}),document.fonts?.ready.then(()=>{Le||$(!1)})}const ta=["join","apply"],va=1e3,ya=50,Ma=60,Tt=110,_a=new WeakMap;function Ot(t){_a.get(t)?.()}function $s(t,e,s){_a.get(t)?.(),t.classList.add("bare-login");let c=!1,l=s.initialMode??"join",m=null,y=null,O=null,L=null,N=null,W=s.initialJoinReceipt??null,oe=s.initialApplyReceipt??null,B="",V=!1,ue=null;const X=(s.inviteToken??"").trim(),K=!!(s.isInviteRoute||X),_=s.currentSession??null;let de=!!(K&&X),F=null,ve="",be="",H="",ge="",ie="",$e=0,se=null,D=0,P="",ae=!1,le=!1,pe=mt(s.prefillCode??""),_e="",je=!1,E=0,G="",Le="",C="",v="",$="",z=!1,u=!1,j="",Y=0,Ee=null,Pe=0,Be="",Ce="",ee="",h="",b="",Z="",ne="",we="",Re="",He=!1,Te="",Fe=0,Ge=null,ce=0,he=null,p={},k="",re=!1;const xe=Dt();function ke(r){if(r.key==="Escape"){if(xe.isOpen()){r.preventDefault(),xe.close(!0);return}m&&(r.preventDefault(),xa())}}function Ne(r){const a=t.querySelector('[data-role="reg-seg"]'),o=a?.querySelector(".au-mode-indicator"),n=a?.querySelector('.au-mode-tab[aria-selected="true"]');!o||!n||(o.style.transition=r?"":"none",o.style.transform=`translateX(${n.offsetLeft}px)`,o.style.width=`${n.offsetWidth}px`,r||(o.offsetWidth,o.style.transition=""))}function Me(){Ne(!1)}function Oe(){Y=0,Ee!==null&&(window.clearInterval(Ee),Ee=null)}function fe(){Fe=0,Ge!==null&&(window.clearInterval(Ge),Ge=null)}function De(){$e=0,se!==null&&(window.clearInterval(se),se=null)}function ze(){L?.(),L=null,N?.(),N=null}function Ue(){c=!0,ue?.(),ue=null,ze(),xe.destroy(),Oe(),fe(),De(),he!==null&&(window.clearTimeout(he),he=null),document.removeEventListener("keydown",ke),window.removeEventListener("resize",Me),t.classList.remove("bare-login"),_a.get(t)===Ue&&_a.delete(t)}document.addEventListener("keydown",ke),window.addEventListener("resize",Me),_a.set(t,Ue);function Sa(r){Oe(),Y=r,Ee=window.setInterval(()=>{Y-=1,Y<=0&&Oe();const a=t.querySelector('[data-act="jn-send-code"]');a&&(a.disabled=Y>0,a.textContent=Y>0?`${Y} 秒后重发`:j?"重新获取":"获取验证码")},1e3)}function ra(r){fe(),Fe=r,Ge=window.setInterval(()=>{Fe-=1,Fe<=0&&fe();const a=t.querySelector('[data-act="ap-send-code"]');a&&(a.disabled=Fe>0,a.textContent=Fe>0?`${Fe} 秒后重发`:Te?"重新获取":"获取验证码")},1e3)}function Se(){const r=t.querySelector("#au-reg-ferr");if(r)if(k){r.hidden=!1;const a=r.querySelector('[data-role="ferr-text"]');a&&(a.textContent=k)}else r.hidden=!0}function qe(r){const a=t.querySelector(`.au-field[data-f="${r}"]`),o=t.querySelector(`#au-${r}`),n=t.querySelector(`#au-${r}-err`),i=p[r]??"";a?.classList.toggle("bad",!!i),o?.setAttribute("aria-invalid",i?"true":"false"),n&&(n.textContent=i)}function Xe(r,a){const o=t.querySelector("form[data-reg-form] fieldset"),n=t.querySelector('form[data-reg-form] button[type="submit"]');o&&(o.disabled=re),n&&(n.disabled=re,n.innerHTML=re?`<span class="au-spinner" aria-hidden="true"></span><span>${d(r)}</span>`:`<span>${d(a)}</span>`)}function ca(r,a){xe.close(!1),y=a??(document.activeElement instanceof HTMLElement?document.activeElement:null),m=r,ba(),t.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function xa(){if(!m)return;m=null,O=null,ze(),ba();const r=y;y=null,r&&document.contains(r)&&r.focus({preventScroll:!0})}function Ka(){return`
      <div class="au-account-scrim" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="alertdialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">请阅读并同意</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ha}</button>
          </div>
          <div class="db">
            <p class="au-dlead" style="margin-bottom:0;">
              发送验证码前，请先阅读并同意 PACOM
              <a class="au-consent-link" href="${Oa}" target="_blank" rel="noopener noreferrer">隐私政策</a>和<a class="au-consent-link" href="${Oa}" target="_blank" rel="noopener noreferrer">使用条款</a>。
            </p>
          </div>
          <div class="df">
            <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
            <button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="consent-confirm">同意并发送</button>
          </div>
        </section>
      </div>
    `}function fa(){return`
      <div class="au-account-scrim" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="alertdialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">撤回加入申请</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Ha}</button>
          </div>
          <div class="db">
            <p class="au-dlead" style="margin-bottom:0;">撤回后本次申请将作废，你可以修改信息后重新提交。</p>
          </div>
          <div class="df">
            <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
            <button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="withdraw-confirm">确认撤回</button>
          </div>
        </section>
      </div>
    `}function ba(){const r=t.querySelector('[data-role="modal-host"]');if(r){if(ze(),!m){r.innerHTML="";return}r.innerHTML=m==="contact"?Pt():m==="withdraw_confirm"?fa():Ka(),L=Mt(r.querySelector(".au-account-dlg")),N=Nt(r),r.querySelectorAll('[data-act="close-modal"]').forEach(a=>{a.addEventListener("click",()=>xa())}),r.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",a=>{a.target===a.currentTarget&&xa()}),r.querySelector('[data-act="consent-confirm"]')?.addEventListener("click",()=>{const a=O;O=null,m=null,ze(),ba(),a?.()}),r.querySelector('[data-act="withdraw-confirm"]')?.addEventListener("click",async()=>{if(!(!W||!e.withdrawJoinApplication||V)){m=null,ze(),ba(),V=!0,k="",R();try{if(await e.withdrawJoinApplication(W.requestId,W.withdrawToken),c)return;V=!1,W=null,v="",j="",Pe+=1,Oe(),B="申请已撤回，修改信息并重新验证后即可再次提交。",R()}catch(a){if(c)return;V=!1,k=a instanceof Error?a.message:"暂时无法撤回申请，请稍后再试。",R()}}})}}function ka(r,a,o,n){return`
      <div class="au-field au-consent-field ${p[n]?"bad":""}" data-f="${n}">
        <div class="au-check au-consent-row">
          <input id="${r}" type="checkbox" name="${a}" ${o?"checked":""} aria-invalid="${p[n]?"true":"false"}" />
          <span class="au-consent-text">
            <label class="au-consent-label" for="${r}">我已阅读并同意 PACOM </label><a class="au-consent-link" href="${Oa}" target="_blank" rel="noopener noreferrer">隐私政策</a><label class="au-consent-label" for="${r}">和</label><a class="au-consent-link" href="${Oa}" target="_blank" rel="noopener noreferrer">使用条款</a>
          </span>
        </div>
        <p class="au-err" id="au-${n}-err" aria-live="polite">${d(p[n]??"")}</p>
      </div>
    `}async function Qe(r){const a=r.replace(/\D/g,"");if(a.length!==9){_e="",je=!1,da();return}const o=++E;je=!0,_e="",da();try{const n=await e.resolveInviteCode(a);if(c||o!==E)return;je=!1,n.valid&&n.organizationName?(_e=n.organizationName,delete p.jn_code):(_e="",p.jn_code=n.message??"邀请码不正确或已失效，请向机构管理员确认。"),qe("jn_code"),da()}catch(n){if(c||o!==E)return;je=!1,_e="",p.jn_code=n instanceof Error?n.message:"暂时无法核验邀请码，请稍后再试。",qe("jn_code"),da()}}function da(){const r=t.querySelector('[data-role="jn-code-match"]'),a=t.querySelector('[data-role="jn-nocode-wrap"]');r&&(_e?(r.hidden=!1,r.innerHTML=`${ft}<span>目标机构：${d(_e)}</span>`):(r.hidden=!0,r.innerHTML="")),a&&(a.hidden=!!_e)}function Aa(){const r=`
      <span data-role="jn-nocode-wrap" ${_e?"hidden":""}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-nocode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-nocode-pop"><span>没有邀请码？</span></button>
        <span id="au-jn-nocode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="没有邀请码说明" hidden>
          <span class="ws-info-text">请向所在机构的管理员获取 9 位邀请码；如需为新企业开通，请切换上方「申请开通机构」。</span>
        </span>
      </span>
    `,a=`
      <span data-role="jn-novcode-wrap" ${j?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-jn-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认邮箱或手机号码无误，检查垃圾邮件或短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">填写机构 9 位邀请码，管理员批准后即可访问。</p>
      ${B?`<div class="au-notice-soft au-form-notice" data-role="jn-form-notice" role="status">${Ua}<span>${d(B)}</span></div>`:""}
      <form class="au-reg-form" data-reg-form="join" novalidate>
        <fieldset ${re?"disabled":""}>
          <div class="au-field ${p.jn_code?"bad":""}" data-f="jn_code">
            <div class="au-lab">
              <label for="au-jn_code">机构邀请码</label>
              ${r}
            </div>
            <div class="au-ctl">
              <input id="au-jn_code" name="jn_code" class="au-in" type="text" inputmode="numeric" autocomplete="off" maxlength="11" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(pe)}" aria-invalid="${p.jn_code?"true":"false"}" />
            </div>
            <div class="au-code-match" data-role="jn-code-match" role="status" aria-live="polite" ${_e?"":"hidden"}>
              ${_e?`${ft}<span>目标机构：${d(_e)}</span>`:""}
            </div>
            <p class="au-err" id="au-jn_code-err" aria-live="polite">${d(p.jn_code??"")}</p>
          </div>

          <div class="au-field ${p.jn_name?"bad":""}" data-f="jn_name">
            <div class="au-lab"><label for="au-jn_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-jn_name" name="jn_name" class="au-in" type="text" autocomplete="name" value="${d(G)}" aria-invalid="${p.jn_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_name-err" aria-live="polite">${d(p.jn_name??"")}</p>
          </div>

          <div class="au-field ${p.jn_dept?"bad":""}" data-f="jn_dept">
            <div class="au-lab"><label for="au-jn_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-jn_dept" name="jn_dept" class="au-in" type="text" autocomplete="organization-title" value="${d(Le)}" aria-invalid="${p.jn_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_dept-err" aria-live="polite">${d(p.jn_dept??"")}</p>
          </div>

          <div class="au-field ${p.jn_account?"bad":""}" data-f="jn_account">
            <div class="au-lab"><label for="au-jn_account">电子邮箱或手机号码</label></div>
            <div class="au-ctl">
              <input id="au-jn_account" name="jn_account" class="au-in has-code-btn" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(C)}" aria-invalid="${p.jn_account?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="jn-send-code" ${Y>0?"disabled":""}>
                ${Y>0?`${Y} 秒后重发`:j?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-jn_account-err" aria-live="polite">${d(p.jn_account??"")}</p>
            <p class="au-hint" id="au-jn_account-hint" role="status" aria-live="polite">${j?`验证码已发送至 ${d(j)}`:""}</p>
          </div>

          <div class="au-field ${p.jn_vcode?"bad":""}" data-f="jn_vcode">
            <div class="au-lab">
              <label for="au-jn_vcode">验证码</label>
              ${a}
            </div>
            <div class="au-ctl">
              <input id="au-jn_vcode" name="jn_vcode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(v)}" aria-invalid="${p.jn_vcode?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_vcode-err" aria-live="polite">${d(p.jn_vcode??"")}</p>
          </div>

          <div class="au-field ${p.jn_pwd?"bad":""}" data-f="jn_pwd">
            <div class="au-lab">
              <span class="au-lab-group">
                <label for="au-jn_pwd">设置密码</label>
                ${$a("au-jn-pwd-info","设置密码说明",pt)}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-jn_pwd" name="jn_pwd" class="au-in has-suffix" type="${z?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d($)}" aria-invalid="${p.jn_pwd?"true":"false"}" />
              <button type="button" class="au-suffix au-eye" data-act="jn-toggle-eye" aria-controls="au-jn_pwd" aria-label="${z?"隐藏密码":"显示密码"}">
                ${z?la:ia}
              </button>
            </div>
            <p class="au-err" id="au-jn_pwd-err" aria-live="polite">${d(p.jn_pwd??"")}</p>
          </div>

          ${ka("au-jn_consent","jn_consent",u,"jn_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${k?"":"hidden"}>
            ${na}
            <span data-role="ferr-text">${d(k)}</span>
          </div>

          <button type="submit" class="au-primary" ${re?"disabled":""}>
            ${re?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>注册并申请加入</span>"}
          </button>
        </fieldset>
      </form>
    `}function Ja(){const r=bt(Ce),a=ea(Re),o=a>=va*.8?`${a} / ${va}`:"",n=`
      <span data-role="ap-novcode-wrap" ${Te?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-ap-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-ap-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-ap-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">提交企业信息，经 PACOM 审核通过后开通机构。</p>
      <form class="au-reg-form" data-reg-form="apply" novalidate>
        <fieldset ${re?"disabled":""}>
          <div class="au-field ${p.ap_org?"bad":""}" data-f="ap_org">
            <div class="au-lab">
              <span class="au-lab-group">
                <label for="au-ap_org">机构名称</label>
                ${$a("au-ap-org-info","机构名称说明",["请填写营业执照等登记证书上的完整名称。"])}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-ap_org" name="ap_org" class="au-in" type="text" autocomplete="organization" value="${d(Be)}" aria-invalid="${p.ap_org?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_org-err" aria-live="polite">${d(p.ap_org??"")}</p>
          </div>

          <div class="au-field ${p.ap_region?"bad":""}" data-f="ap_region">
            <div class="au-lab"><label for="au-ap_prov">所在地区</label></div>
            <div class="au-row-eq">
              <div class="au-select-wrap">
                <select id="au-ap_prov" name="ap_prov" class="au-select ${Ce?"":"is-placeholder"}" aria-label="省份" aria-invalid="${p.ap_region?"true":"false"}">
                  <option value="" ${Ce?"":"selected"}>省份</option>
                  ${Zt.map(([i])=>`<option value="${d(i)}" ${Ce===i?"selected":""}>${d(i)}</option>`).join("")}
                </select>
                ${ht}
              </div>
              <div class="au-select-wrap">
                <select id="au-ap_city" name="ap_city" class="au-select ${ee?"":"is-placeholder"}" aria-label="城市" ${Ce?"":"disabled"} aria-invalid="${p.ap_region?"true":"false"}">
                  <option value="" ${ee?"":"selected"}>城市</option>
                  ${r.map(i=>`<option value="${d(i)}" ${ee===i?"selected":""}>${d(i)}</option>`).join("")}
                </select>
                ${ht}
              </div>
            </div>
            <p class="au-err" id="au-ap_region-err" aria-live="polite">${d(p.ap_region??"")}</p>
          </div>

          <div class="au-field ${p.ap_name?"bad":""}" data-f="ap_name">
            <div class="au-lab"><label for="au-ap_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-ap_name" name="ap_name" class="au-in" type="text" autocomplete="name" value="${d(h)}" aria-invalid="${p.ap_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_name-err" aria-live="polite">${d(p.ap_name??"")}</p>
          </div>

          <div class="au-field ${p.ap_dept?"bad":""}" data-f="ap_dept">
            <div class="au-lab"><label for="au-ap_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-ap_dept" name="ap_dept" class="au-in" type="text" autocomplete="organization-title" value="${d(b)}" aria-invalid="${p.ap_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_dept-err" aria-live="polite">${d(p.ap_dept??"")}</p>
          </div>

          <div class="au-field ${p.ap_email?"bad":""}" data-f="ap_email">
            <div class="au-lab">
              <span class="au-lab-group">
                <label for="au-ap_email">电子邮箱</label>
                ${$a("au-ap-email-info","电子邮箱说明",["审核结果与机构开通链接将发送至此邮箱，请填写常用工作邮箱。"])}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-ap_email" name="ap_email" class="au-in" type="email" inputmode="email" autocomplete="email" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(Z)}" aria-invalid="${p.ap_email?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_email-err" aria-live="polite">${d(p.ap_email??"")}</p>
          </div>

          <div class="au-field ${p.ap_phone?"bad":""}" data-f="ap_phone">
            <div class="au-lab"><label for="au-ap_phone">手机号码</label></div>
            <div class="au-ctl">
              <input id="au-ap_phone" name="ap_phone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(ne)}" aria-invalid="${p.ap_phone?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="ap-send-code" ${Fe>0?"disabled":""}>
                ${Fe>0?`${Fe} 秒后重发`:Te?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-ap_phone-err" aria-live="polite">${d(p.ap_phone??"")}</p>
            <p class="au-hint" id="au-ap_phone-hint" role="status" aria-live="polite">${Te?`验证码已发送至 ${d(Te)}`:""}</p>
          </div>

          <div class="au-field ${p.ap_sms?"bad":""}" data-f="ap_sms">
            <div class="au-lab">
              <label for="au-ap_sms">短信验证码</label>
              ${n}
            </div>
            <div class="au-ctl">
              <input id="au-ap_sms" name="ap_sms" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(we)}" aria-invalid="${p.ap_sms?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_sms-err" aria-live="polite">${d(p.ap_sms??"")}</p>
          </div>

          <div class="au-field ${p.ap_overview?"bad":""}" data-f="ap_overview">
            <div class="au-lab"><label for="au-ap_overview">项目概况<span class="fld-opt">选填</span></label></div>
            <div class="ws-textarea-shell au-note-shell">
              <textarea id="au-ap_overview" name="ap_overview" class="au-in au-ta au-ta-std" rows="3" aria-invalid="${p.ap_overview?"true":"false"}">${d(Re)}</textarea>
              <button type="button" class="ws-resize" data-space-resize="au-ap_overview" aria-label="调整项目概况输入框高度；按上下方向键调整"></button>
            </div>
            <p class="au-err" id="au-ap_overview-err" aria-live="polite">${d(p.ap_overview??"")}</p>
            <p class="au-hint au-char-count" id="au-ap_overview-count" ${o?"":"hidden"}>${d(o)}</p>
          </div>

          ${ka("au-ap_consent","ap_consent",He,"ap_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${k?"":"hidden"}>
            ${na}
            <span data-role="ferr-text">${d(k)}</span>
          </div>

          <button type="submit" class="au-primary" ${re?"disabled":""}>
            ${re?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>提交开通申请</span>"}
          </button>
        </fieldset>
      </form>
    `}async function ja(){const r=Va(C);if(r){p.jn_account=r,qe("jn_account"),t.querySelector("#au-jn_account")?.focus({preventScroll:!0});return}delete p.jn_account,qe("jn_account");const a=Ve(C),o=++Pe,n=t.querySelector('[data-act="jn-send-code"]');n&&(n.disabled=!0,n.textContent="发送中…");try{const i=await e.sendVerificationCode({target:a,purpose:"register_join",consentAcceptedAt:new Date().toISOString()});if(c||o!==Pe||Ve(C)!==a)return;j=i.maskedTarget||oa(a);const I=t.querySelector("#au-jn_account-hint");I&&(I.textContent=`验证码已发送至 ${j}`);const f=t.querySelector('[data-role="jn-novcode-wrap"]');f&&(f.hidden=!1),Sa(i.cooldownSeconds||60),n&&(n.disabled=!0,n.textContent=`${Y} 秒后重发`),t.querySelector("#au-jn_vcode")?.focus({preventScroll:!0})}catch(i){if(c||o!==Pe||Ve(C)!==a)return;n&&(n.disabled=!1,n.textContent=j?"重新获取":"获取验证码"),k=i instanceof Error?i.message:"暂时无法发送验证码，请稍后再试。",Se()}}async function La(){const r=sa(ne);if(r){p.ap_phone=r,qe("ap_phone"),t.querySelector("#au-ap_phone")?.focus({preventScroll:!0});return}delete p.ap_phone,qe("ap_phone");const a=Ve(ne),o=++ce,n=t.querySelector('[data-act="ap-send-code"]');n&&(n.disabled=!0,n.textContent="发送中…");try{const i=await e.sendVerificationCode({target:a,purpose:"org_apply",consentAcceptedAt:new Date().toISOString()});if(c||o!==ce||Ve(ne)!==a)return;Te=i.maskedTarget||oa(a);const I=t.querySelector("#au-ap_phone-hint");I&&(I.textContent=`验证码已发送至 ${Te}`);const f=t.querySelector('[data-role="ap-novcode-wrap"]');f&&(f.hidden=!1),ra(i.cooldownSeconds||60),n&&(n.disabled=!0,n.textContent=`${Fe} 秒后重发`),t.querySelector("#au-ap_sms")?.focus({preventScroll:!0})}catch(i){if(c||o!==ce||Ve(ne)!==a)return;n&&(n.disabled=!1,n.textContent=Te?"重新获取":"获取验证码"),k=i instanceof Error?i.message:"暂时无法发送验证码，请稍后再试。",Se()}}function Ya(r){xe.bind(r);const a=r.querySelector("#au-jn_code"),o=r.querySelector("#au-jn_name"),n=r.querySelector("#au-jn_dept"),i=r.querySelector("#au-jn_account"),I=r.querySelector("#au-jn_vcode"),f=r.querySelector("#au-jn_pwd"),U=r.querySelector("#au-jn_consent");a?.addEventListener("input",()=>{pe=mt(a.value),a.value=pe,(p.jn_code||k)&&(delete p.jn_code,k="",qe("jn_code"),Se()),Qe(pe)}),o?.addEventListener("input",()=>{G=o.value,(p.jn_name||k)&&(delete p.jn_name,k="",qe("jn_name"),Se())}),n?.addEventListener("input",()=>{Le=n.value,p.jn_dept&&(delete p.jn_dept,qe("jn_dept"))}),i?.addEventListener("input",()=>{if(C=i.value,Pe+=1,j||Y>0){j="",Oe();const me=r.querySelector("#au-jn_account-hint");me&&(me.textContent="");const te=r.querySelector('[data-role="jn-novcode-wrap"]');te&&(te.hidden=!0),xe.close(!1);const Q=r.querySelector('[data-act="jn-send-code"]');Q&&(Q.disabled=!1,Q.textContent="获取验证码")}(p.jn_account||k)&&(delete p.jn_account,k="",qe("jn_account"),Se())}),I?.addEventListener("input",()=>{v=I.value.replace(/\D/g,"").slice(0,6),I.value=v,(p.jn_vcode||k)&&(delete p.jn_vcode,k="",qe("jn_vcode"),Se())}),f?.addEventListener("input",()=>{$=f.value,(p.jn_pwd||k)&&(delete p.jn_pwd,k="",qe("jn_pwd"),Se())}),U?.addEventListener("change",()=>{u=U.checked,u&&p.jn_consent&&(delete p.jn_consent,qe("jn_consent"))}),r.querySelector('[data-act="jn-toggle-eye"]')?.addEventListener("click",me=>{z=!z;const te=me.currentTarget;if(f){const Q=f.selectionStart,J=f.selectionEnd;f.type=z?"text":"password",f.focus({preventScroll:!0}),Q!==null&&J!==null&&f.setSelectionRange(Q,J)}te.setAttribute("aria-label",z?"隐藏密码":"显示密码"),te.innerHTML=z?la:ia}),r.querySelector('[data-act="jn-send-code"]')?.addEventListener("click",me=>{const te=Va(C);if(te){p.jn_account=te,qe("jn_account"),i?.focus({preventScroll:!0});return}if(!u){O=()=>{u=!0,U&&(U.checked=!0),delete p.jn_consent,qe("jn_consent"),ja()},ca("consent_ask",me.currentTarget);return}ja()}),r.querySelector('form[data-reg-form="join"]')?.addEventListener("submit",async me=>{if(me.preventDefault(),re)return;p={},k="",B&&(B="",r.querySelector('[data-role="jn-form-notice"]')?.remove());const te=pe.replace(/\D/g,"");if(te.length!==9)p.jn_code="请输入 9 位机构邀请码";else if(!_e){const M=++E;je=!0;try{const ye=await e.resolveInviteCode(te);if(c||M!==E)return;je=!1,ye.valid&&ye.organizationName?(_e=ye.organizationName,da()):p.jn_code=ye.message??"邀请码不正确或已失效，请向机构管理员确认。"}catch(ye){if(c||M!==E)return;je=!1,p.jn_code=ye instanceof Error?ye.message:"暂时无法核验邀请码，请稍后再试。"}}G.trim()?ea(G.trim())>ya&&(p.jn_name=`姓名不超过 ${ya} 个字`):p.jn_name="请输入姓名",ea(Le.trim())>Ma&&(p.jn_dept=`部门 / 职务不超过 ${Ma} 个字`);const Q=Va(C);Q&&(p.jn_account=Q),/^\d{6}$/.test(v.trim())||(p.jn_vcode="请输入 6 位验证码");const J=dt($);J&&(p.jn_pwd=J),u||(p.jn_consent="请阅读并同意隐私政策和使用条款");for(const M of["jn_code","jn_name","jn_dept","jn_account","jn_vcode","jn_pwd","jn_consent"])qe(M);if(Se(),Object.keys(p).length>0){const M=Object.keys(p)[0];r.querySelector(`#au-${M}`)?.focus({preventScroll:!0});return}re=!0,Xe("正在提交…","注册并申请加入");try{if(W=await e.registerAndJoin({inviteCode:te,displayName:G.trim(),departmentTitle:Le.trim()||void 0,account:Ve(C),verificationCode:v.trim(),password:$,consentAcceptedAt:new Date().toISOString()}),c)return;re=!1,R()}catch(M){if(c)return;re=!1,k=M instanceof Error?M.message:"暂时无法提交申请，请稍后再试。",Xe("正在提交…","注册并申请加入"),Se()}})}function Qa(r){xe.bind(r),Kt(r);const a=r.querySelector("#au-ap_org"),o=r.querySelector("#au-ap_prov"),n=r.querySelector("#au-ap_city"),i=r.querySelector("#au-ap_name"),I=r.querySelector("#au-ap_dept"),f=r.querySelector("#au-ap_email"),U=r.querySelector("#au-ap_phone"),me=r.querySelector("#au-ap_sms"),te=r.querySelector("#au-ap_overview"),Q=r.querySelector("#au-ap_overview-count"),J=r.querySelector("#au-ap_consent");a?.addEventListener("input",()=>{Be=a.value,(p.ap_org||k)&&(delete p.ap_org,k="",qe("ap_org"),Se())}),o?.addEventListener("change",()=>{Ce=o.value,o.classList.toggle("is-placeholder",!Ce);const M=bt(Ce);ee=M.length===1?M[0]:"",n&&(n.disabled=!Ce,n.innerHTML=`<option value="" ${ee?"":"selected"}>城市</option>`+M.map(ye=>`<option value="${d(ye)}" ${ee===ye?"selected":""}>${d(ye)}</option>`).join(""),n.classList.toggle("is-placeholder",!ee)),Ce&&ee&&p.ap_region&&(delete p.ap_region,qe("ap_region"))}),n?.addEventListener("change",()=>{ee=n.value,n.classList.toggle("is-placeholder",!ee),Ce&&ee&&p.ap_region&&(delete p.ap_region,qe("ap_region"))}),i?.addEventListener("input",()=>{h=i.value,(p.ap_name||k)&&(delete p.ap_name,k="",qe("ap_name"),Se())}),I?.addEventListener("input",()=>{b=I.value,p.ap_dept&&(delete p.ap_dept,qe("ap_dept"))}),f?.addEventListener("input",()=>{Z=f.value,(p.ap_email||k)&&(delete p.ap_email,k="",qe("ap_email"),Se())}),U?.addEventListener("input",()=>{if(ne=U.value,ce+=1,Te||Fe>0){Te="",fe();const M=r.querySelector("#au-ap_phone-hint");M&&(M.textContent="");const ye=r.querySelector('[data-role="ap-novcode-wrap"]');ye&&(ye.hidden=!0),xe.close(!1);const Ke=r.querySelector('[data-act="ap-send-code"]');Ke&&(Ke.disabled=!1,Ke.textContent="获取验证码")}(p.ap_phone||k)&&(delete p.ap_phone,k="",qe("ap_phone"),Se())}),me?.addEventListener("input",()=>{we=me.value.replace(/\D/g,"").slice(0,6),me.value=we,(p.ap_sms||k)&&(delete p.ap_sms,k="",qe("ap_sms"),Se())}),te?.addEventListener("input",()=>{Re=te.value;const M=ea(Re);Q&&(M>=va*.8?(Q.textContent=`${M} / ${va}`,Q.hidden=!1):Q.hidden=!0),p.ap_overview&&M<=va&&(delete p.ap_overview,qe("ap_overview"))}),J?.addEventListener("change",()=>{He=J.checked,He&&p.ap_consent&&(delete p.ap_consent,qe("ap_consent"))}),r.querySelector('[data-act="ap-send-code"]')?.addEventListener("click",M=>{const ye=sa(ne);if(ye){p.ap_phone=ye,qe("ap_phone"),U?.focus({preventScroll:!0});return}if(!He){O=()=>{He=!0,J&&(J.checked=!0),delete p.ap_consent,qe("ap_consent"),La()},ca("consent_ask",M.currentTarget);return}La()}),r.querySelector('form[data-reg-form="apply"]')?.addEventListener("submit",async M=>{if(M.preventDefault(),re)return;p={},k="",Be.trim()?ea(Be.trim())>Tt&&(p.ap_org=`机构名称不超过 ${Tt} 个字`):p.ap_org="请输入机构名称",(!Ce||!ee)&&(p.ap_region="请选择所在地区"),h.trim()?ea(h.trim())>ya&&(p.ap_name=`姓名不超过 ${ya} 个字`):p.ap_name="请输入姓名",ea(b.trim())>Ma&&(p.ap_dept=`部门 / 职务不超过 ${Ma} 个字`),Ta(Z)||(p.ap_email="请输入有效的电子邮箱");const ye=sa(ne);ye&&(p.ap_phone=ye),/^\d{6}$/.test(we.trim())||(p.ap_sms="请输入 6 位短信验证码"),ea(Re)>va&&(p.ap_overview=`项目概况不超过 ${va} 个字`),He||(p.ap_consent="请阅读并同意隐私政策和使用条款");for(const Ke of["ap_org","ap_region","ap_name","ap_dept","ap_email","ap_phone","ap_sms","ap_overview","ap_consent"])qe(Ke);if(Se(),Object.keys(p).length>0){const Ke=Object.keys(p)[0],Ut=Ke==="ap_region"?Ce?"au-ap_city":"au-ap_prov":`au-${Ke}`;r.querySelector(`#${Ut}`)?.focus({preventScroll:!0});return}re=!0,Xe("正在提交…","提交开通申请");try{if(oe=await e.submitOrgApplication({organizationName:Be.trim(),province:Ce,city:ee,contactName:h.trim(),departmentTitle:b.trim()||void 0,email:Ve(Z),phone:Ve(ne),smsCode:we.trim(),projectOverview:Re.trim()||void 0,consentAcceptedAt:new Date().toISOString()}),c)return;re=!1,R()}catch(Ke){if(c)return;re=!1,k=Ke instanceof Error?Ke.message:"暂时无法提交开通申请，请稍后再试。",Xe("正在提交…","提交开通申请"),Se()}})}function Ca(){xe.close(!1);const r=t.querySelector('[data-role="reg-body-host"]');r&&(l==="join"?(r.innerHTML=Aa(),Ya(r)):(r.innerHTML=Ja(),Qa(r)))}function pa(r,a=!1){l===r||re||(l=r,p={},k="",B="",t.querySelectorAll('[data-act="switch-reg-tab"]').forEach(o=>{const n=o.dataset.tab===r;o.setAttribute("aria-selected",String(n)),o.tabIndex=n?0:-1,n&&a&&o.focus({preventScroll:!0})}),Ne(!0),Ca(),t.querySelector(".au-left")?.scrollTo({top:0}))}function Xa(){if(oe)return{title:"开通申请已提交 ｜ PACOM Station",bodyHtml:`
          <h1 class="au-h1">开通申请已提交</h1>
          <p class="au-lead">预计 1–2 个工作日完成审核，审核通过后将发送开通链接至你的邮箱。</p>
          <div class="au-summary-card">
            <div class="au-summary-row">
              <span class="au-summary-k">申请单号</span>
              <span class="au-summary-v au-summary-v-copy is-tabular">
                <span>${d(oe.applicationId)}</span>
                <button type="button" class="au-summary-copy-btn" data-act="copy-receipt" data-copy-val="${d(oe.applicationId)}" aria-label="复制申请单号" title="复制申请单号">${at}</button>
              </span>
            </div>
            <div class="au-summary-row"><span class="au-summary-k">申请机构</span><span class="au-summary-v">${d(oe.organizationName)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">通知邮箱</span><span class="au-summary-v is-tabular">${d(oe.maskedEmail)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">当前状态</span><span class="au-status-pill au-status-pill--pending">待审核</span></div>
          </div>
          <button type="button" class="au-secondary" data-act="back-login"><span>返回登录</span></button>
        `};const r=W;return{title:"加入申请已提交 ｜ PACOM Station",bodyHtml:`
        <h1 class="au-h1">加入申请已提交</h1>
        <p class="au-lead">已提交至<b>${d(r.organizationName)}</b>，管理员批准后将发送登录通知。</p>
        <div class="au-summary-card">
          <div class="au-summary-row">
            <span class="au-summary-k">申请单号</span>
            <span class="au-summary-v au-summary-v-copy is-tabular">
              <span>${d(r.requestId)}</span>
              <button type="button" class="au-summary-copy-btn" data-act="copy-receipt" data-copy-val="${d(r.requestId)}" aria-label="复制申请单号" title="复制申请单号">${at}</button>
            </span>
          </div>
          <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${d(r.organizationName)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">登录账户</span><span class="au-summary-v is-tabular">${d(r.maskedAccount)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">当前状态</span><span class="au-status-pill au-status-pill--pending">待管理员审批</span></div>
        </div>
        <div class="au-ferr" id="au-reg-ferr" role="alert" ${k?"":"hidden"}>
          ${na}
          <span data-role="ferr-text">${d(k)}</span>
        </div>
        <button type="button" class="au-secondary" data-act="back-login"><span>返回登录</span></button>
        ${e.withdrawJoinApplication?`
          <div class="au-quiet-action">
            <button type="button" class="au-quiet-btn" data-act="ask-withdraw" ${V?"disabled":""}>${V?"正在撤回…":"撤回申请"}</button>
          </div>`:""}
      `}}function et(r){De(),$e=r,se=window.setInterval(()=>{$e-=1,$e<=0&&De();const a=t.querySelector('[data-act="iv-send-sec"]');a&&(a.disabled=$e>0,a.textContent=$e>0?`${$e} 秒后重发`:ie?"重新获取":"获取验证码")},1e3)}function q(r){return r.requiredSecondaryChannel!==void 0?r.requiredSecondaryChannel:wa(r.kind,r.role,r.targetChannel)}function qa(r){return Ve(r).toLowerCase().replace(/[\s\-()]/g,"")}function w(r,a){if(!r)return!1;const o=qa(a.targetValue);if(!o)return!1;const n=a.targetChannel==="email"?r.email:r.phone;return!!n&&qa(n)===o}async function x(r){const a=r==="phone"?sa(H):Ta(H)?"":"请输入有效的电子邮箱";if(a){p.iv_sec=a,qe("iv_sec"),t.querySelector("#au-iv_sec")?.focus({preventScroll:!0});return}delete p.iv_sec,qe("iv_sec");const o=Ve(H),n=++D,i=t.querySelector('[data-act="iv-send-sec"]');i&&(i.disabled=!0,i.textContent="发送中…");try{const I=await e.sendVerificationCode({target:o,purpose:"bind",consentAcceptedAt:new Date().toISOString()});if(c||n!==D||Ve(H)!==o)return;ie=I.maskedTarget||oa(o);const f=t.querySelector("#au-iv_sec-hint");f&&(f.textContent=`验证码已发送至 ${ie}`);const U=t.querySelector('[data-role="iv-novcode-wrap"]');U&&(U.hidden=!1),et(I.cooldownSeconds||60),i&&(i.disabled=!0,i.textContent=`${$e} 秒后重发`),t.querySelector("#au-iv_seccode")?.focus({preventScroll:!0})}catch(I){if(c||n!==D||Ve(H)!==o)return;i&&(i.disabled=!1,i.textContent=ie?"重新获取":"获取验证码"),k=I instanceof Error?I.message:"暂时无法发送验证码，请稍后再试。",Se()}}function T(){if(de)return{title:"核验链接 ｜ PACOM Station",bodyHtml:`
          <div class="au-loading-state" role="status" aria-live="polite">
            <span class="au-spinner au-spinner--muted" aria-hidden="true"></span>
            <span>正在核验链接…</span>
          </div>
        `};if(F&&F.status==="accepted"){const Q=F.kind==="owner",J=Q?"机构已完成开通":"邀请已被接受",M=_?`该${Q?"开通":"邀请"}链接已完成激活，你可以直接进入工作区访问<b>${d(F.organizationName)}</b>。`:`该${Q?"开通":"邀请"}链接已完成激活，你可以直接登录访问<b>${d(F.organizationName)}</b>。`;return{title:`${J} ｜ PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${J}</h1>
          <p class="au-lead">${M}</p>
          <button type="button" class="au-secondary" data-act="${_?"iv-back-ws":"back-login"}"><span>${_?"进入工作区":"前往登录"}</span></button>
        `}}if(ve||!F||F.status!=="pending"){const Q=F?.kind==="owner",J=F?.organizationName?d(F.organizationName):"",M=F?.inviterName?d(F.inviterName):"机构管理员";let ye="邀请链接已失效",Ke="此链接无效或已过期，请联系邀请人或机构管理员重新发送。";return ve?Ke=d(ve):F?.status==="expired"?(ye=Q?"开通链接已过期":"邀请链接已过期",Ke=Q?`开通${J?`<b>${J}</b>的`:""}链接已过期，请联系支持团队重新发送。`:`加入${J?`<b>${J}</b>的`:""}邀请链接已过期，请联系${M}重新发送。`):F?.status==="revoked"&&(ye=Q?"开通链接已撤销":"邀请已撤销",Ke=Q?`开通${J?`<b>${J}</b>的`:""}链接已被撤销，请联系支持团队重新发送。`:`加入${J?`<b>${J}</b>的`:""}邀请已被撤销，如需加入请联系${M}重新发送。`),{title:`${ye} ｜ PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${ye}</h1>
          <p class="au-lead">${Ke}</p>
          <button type="button" class="au-secondary" data-act="${_?"iv-back-ws":"back-login"}"><span>${_?"返回工作区":"返回登录"}</span></button>
        `}}const r=F,a=r.kind==="owner",o=a?"开通机构":"加入机构",n=r.targetChannel==="phone"?"受邀手机号码":"受邀电子邮箱",i=r.targetChannel==="phone"?vt(r.targetValue):r.targetValue;if(_){if(w(_,r)){const ye=a?`<b>${d(r.organizationName)}</b>已审核通过，确认后即以机构管理员身份完成开通。<span class="au-lead-meta">有效期至 ${d(r.expiresAt)}</span>`:`${d(r.inviterName||"机构管理员")}邀请你以${d(r.roleLabel||"成员")}身份加入<b>${d(r.organizationName)}</b>。<span class="au-lead-meta">有效期至 ${d(r.expiresAt)}</span>`;return{title:`${o} ｜ PACOM Station`,bodyHtml:`
            <h1 class="au-h1">${o}</h1>
            <p class="au-lead">${ye}</p>
            <div class="au-summary-card">
              <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${d(r.organizationName)}</span></div>
              <div class="au-summary-row"><span class="au-summary-k">授予角色</span><span class="au-summary-v">${d(r.roleLabel||(a?"机构管理员":"成员"))}</span></div>
              <div class="au-summary-row"><span class="au-summary-k">当前账户</span><span class="au-summary-v is-tabular">${d(_.displayName)} ｜ ${d(i)}</span></div>
            </div>
            <div class="au-ferr" id="au-reg-ferr" role="alert" ${k?"":"hidden"}>
              ${na}
              <span data-role="ferr-text">${d(k)}</span>
            </div>
            <button type="button" class="au-primary" data-act="iv-confirm-join" ${re?"disabled":""}>
              ${re?'<span class="au-spinner" aria-hidden="true"></span><span>正在处理…</span>':`<span>${a?"确认开通":"确认加入"}</span>`}
            </button>
            <div class="au-quiet-action">
              <button type="button" class="au-quiet-btn" data-act="iv-back-ws">返回工作区</button>
            </div>
          `}}const Q=oa(r.targetValue),J=_.email||(_.phone?vt(_.phone):"");return{title:"请切换至受邀账户 ｜ PACOM Station",bodyHtml:`
          <h1 class="au-h1">请切换至受邀账户</h1>
          <p class="au-lead">${a?`该开通链接面向 <b>${d(Q)}</b> 开通${d(r.organizationName)}，与当前登录账户不一致。`:`该邀请面向 <b>${d(Q)}</b> 加入${d(r.organizationName)}，与当前登录账户不一致。`}</p>
          <div class="au-summary-card">
            <div class="au-summary-row"><span class="au-summary-k">当前账户</span><span class="au-summary-v is-tabular">${d(_.displayName)}${J?` ｜ ${d(J)}`:""}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">受邀账户</span><span class="au-summary-v is-tabular">${d(Q)}</span></div>
          </div>
          <button type="button" class="au-primary" data-act="iv-switch-account"><span>切换账户登录</span></button>
          <div class="au-quiet-action">
            <button type="button" class="au-quiet-btn" data-act="iv-back-ws">返回工作区</button>
          </div>
        `}}if(r.accountExists){const Q=a?`<b>${d(r.organizationName)}</b>已审核通过，请先登录已有账户完成开通。<span class="au-lead-meta">有效期至 ${d(r.expiresAt)}</span>`:`${d(r.inviterName||"机构管理员")}邀请你以${d(r.roleLabel||"成员")}身份加入<b>${d(r.organizationName)}</b>，请先登录已有账户完成确认。<span class="au-lead-meta">有效期至 ${d(r.expiresAt)}</span>`;return{title:`${o} ｜ PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${o}</h1>
          <p class="au-lead">${Q}</p>
          <div class="au-summary-card">
            <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${d(r.organizationName)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">授予角色</span><span class="au-summary-v">${d(r.roleLabel||(a?"机构管理员":"成员"))}</span></div>
            <div class="au-summary-row">
              <span class="au-summary-k">受邀账户</span>
              <span class="au-summary-v au-summary-v-copy is-tabular">
                <span>${d(i)}</span>
                <span class="au-status-pill au-status-pill--neutral">已注册</span>
              </span>
            </div>
          </div>
          <button type="button" class="au-primary" data-act="iv-go-login"><span>${a?"登录并开通":"登录并加入"}</span></button>
        `}}const I=a?`<b>${d(r.organizationName)}</b>已审核通过，设置密码后即以机构管理员身份开通。<span class="au-lead-meta">有效期至 ${d(r.expiresAt)}</span>`:`${d(r.inviterName||"机构管理员")}邀请你以${d(r.roleLabel||"成员")}身份加入<b>${d(r.organizationName)}</b>。<span class="au-lead-meta">有效期至 ${d(r.expiresAt)}</span>`,f=a?"完成开通":"注册并加入",U=q(r),me=a?`
        <div class="au-field">
          <div class="au-lab">
            <span class="au-lab-t">管理员账户</span>
            <span class="au-lab-status">${gt}<span>已核验</span></span>
          </div>
          <div class="au-verified-card">
            <div class="au-verified-row">
              <span class="au-verified-k">${r.targetChannel==="phone"?"手机号码":"电子邮箱"}</span>
              <span class="au-verified-v">${d(i)}</span>
            </div>
            ${r.verifiedSecondaryMasked?`
              <div class="au-verified-row">
                <span class="au-verified-k">${r.targetChannel==="phone"?"电子邮箱":"手机号码"}</span>
                <span class="au-verified-v">${d(r.verifiedSecondaryMasked)}</span>
              </div>`:""}
          </div>
        </div>`:`
        <div class="au-field">
          <div class="au-lab">
            <span class="au-lab-t">${n}</span>
            <span class="au-lab-status">${gt}<span>已核验</span></span>
          </div>
          <div class="au-locked-card">
            <span class="au-locked-val">${d(i)}</span>
          </div>
        </div>`,te=U?(()=>{const Q=U==="phone",J=Q?"手机号码":"电子邮箱",M=Q?"用于新设备登录、敏感操作与重置密码时的身份验证。":"机构管理员须绑定电子邮箱，用于接收订单、续费与安全通知。",ye=Q?"短信验证码":"邮件验证码",Ke=Q?"请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。":"请确认电子邮箱无误并检查垃圾邮件箱；如仍未收到，可点击页脚「联系我们」获取协助。";return`
            <div class="au-field ${p.iv_sec?"bad":""}" data-f="iv_sec">
              <div class="au-lab">
                <span class="au-lab-group">
                  <label for="au-iv_sec">${J}</label>
                  ${$a("au-iv-sec-info",`${J}说明`,[M])}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_sec" name="iv_sec" class="au-in has-code-btn" type="${Q?"tel":"email"}" inputmode="${Q?"tel":"email"}" autocomplete="${Q?"tel":"email"}" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(H)}" aria-invalid="${p.iv_sec?"true":"false"}" />
                <button type="button" class="au-suffix au-getcode" data-act="iv-send-sec" ${$e>0?"disabled":""}>
                  ${$e>0?`${$e} 秒后重发`:ie?"重新获取":"获取验证码"}
                </button>
              </div>
              <p class="au-err" id="au-iv_sec-err" aria-live="polite">${d(p.iv_sec??"")}</p>
              <p class="au-hint" id="au-iv_sec-hint" role="status" aria-live="polite">${ie?`验证码已发送至 ${d(ie)}`:""}</p>
            </div>

            <div class="au-field ${p.iv_seccode?"bad":""}" data-f="iv_seccode">
              <div class="au-lab">
                <label for="au-iv_seccode">${ye}</label>
                <span data-role="iv-novcode-wrap" ${ie?"":"hidden"}>
                  <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-iv-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-iv-novcode-pop"><span>收不到验证码？</span></button>
                  <span id="au-iv-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
                    <span class="ws-info-text">${Ke}</span>
                  </span>
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_seccode" name="iv_seccode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(ge)}" aria-invalid="${p.iv_seccode?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_seccode-err" aria-live="polite">${d(p.iv_seccode??"")}</p>
            </div>
          `})():"";return{title:`${o} ｜ PACOM Station`,bodyHtml:`
        <h1 class="au-h1">${o}</h1>
        <p class="au-lead">${I}</p>
        <form class="au-reg-form" data-reg-form="invite" novalidate>
          <fieldset ${re?"disabled":""}>
            ${me}

            <div class="au-field ${p.iv_name?"bad":""}" data-f="iv_name">
              <div class="au-lab"><label for="au-iv_name">姓名</label></div>
              <div class="au-ctl">
                <input id="au-iv_name" name="iv_name" class="au-in" type="text" autocomplete="name" value="${d(be)}" aria-invalid="${p.iv_name?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_name-err" aria-live="polite">${d(p.iv_name??"")}</p>
            </div>

            ${te}

            <div class="au-field ${p.iv_pwd?"bad":""}" data-f="iv_pwd">
              <div class="au-lab">
                <span class="au-lab-group">
                  <label for="au-iv_pwd">设置密码</label>
                  ${$a("au-iv-pwd-info","设置密码说明",pt)}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_pwd" name="iv_pwd" class="au-in has-suffix" type="${ae?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${d(P)}" aria-invalid="${p.iv_pwd?"true":"false"}" />
                <button type="button" class="au-suffix au-eye" data-act="iv-toggle-eye" aria-controls="au-iv_pwd" aria-label="${ae?"隐藏密码":"显示密码"}">
                  ${ae?la:ia}
                </button>
              </div>
              <p class="au-err" id="au-iv_pwd-err" aria-live="polite">${d(p.iv_pwd??"")}</p>
            </div>

            ${ka("au-iv_consent","iv_consent",le,"iv_consent")}

            <div class="au-ferr" id="au-reg-ferr" role="alert" ${k?"":"hidden"}>
              ${na}
              <span data-role="ferr-text">${d(k)}</span>
            </div>

            <button type="submit" class="au-primary" ${re?"disabled":""}>
              ${re?`<span class="au-spinner" aria-hidden="true"></span><span>${a?"正在开通…":"正在提交…"}</span>`:`<span>${f}</span>`}
            </button>
          </fieldset>
        </form>
      `}}function A(){xe.bind(t),t.querySelector('[data-act="iv-back-ws"]')?.addEventListener("click",()=>{Ue(),s.onBackToWorkspace?s.onBackToWorkspace():s.onBackToLogin()}),t.querySelector('[data-act="iv-go-login"]')?.addEventListener("click",()=>{if(!F)return;const te=`#invite?token=${encodeURIComponent(F.token)}`,Q=F.kind==="owner"?`登录后即可开通${F.organizationName}`:`登录后即可加入${F.organizationName}`;Ue(),s.onGoLoginForInvite?s.onGoLoginForInvite(F.targetValue,Q,te):s.onBackToLogin()}),t.querySelector('[data-act="iv-switch-account"]')?.addEventListener("click",()=>{if(!F)return;const te=`#invite?token=${encodeURIComponent(F.token)}`,J=`请使用 ${oa(F.targetValue)} 登录以${F.kind==="owner"?"开通机构":"接受邀请"}`;Ue(),s.onSwitchAccountForInvite?s.onSwitchAccountForInvite(te,J):s.onBackToLogin()}),t.querySelector('[data-act="iv-confirm-join"]')?.addEventListener("click",async()=>{if(!(re||!F)){re=!0,k="",R();try{const te=await e.acceptInvitation({token:F.token});if(c)return;Ue(),s.onAuthenticated(te)}catch(te){if(c)return;re=!1,k=te instanceof Error?te.message:"暂时无法确认加入，请稍后再试。",R()}}});const r=t.querySelector('form[data-reg-form="invite"]');if(!r||!F)return;const a=t.querySelector("#au-iv_name"),o=t.querySelector("#au-iv_sec"),n=t.querySelector("#au-iv_seccode"),i=t.querySelector("#au-iv_pwd"),I=t.querySelector("#au-iv_consent"),f=F.kind==="owner",U=f?"完成开通":"注册并加入",me=q(F);a?.addEventListener("input",()=>{be=a.value,(p.iv_name||k)&&(delete p.iv_name,k="",qe("iv_name"),Se())}),o?.addEventListener("input",()=>{if(H=o.value,D+=1,ie||$e>0){ie="",De();const te=t.querySelector("#au-iv_sec-hint");te&&(te.textContent="");const Q=t.querySelector('[data-role="iv-novcode-wrap"]');Q&&(Q.hidden=!0),xe.close(!1);const J=t.querySelector('[data-act="iv-send-sec"]');J&&(J.disabled=!1,J.textContent="获取验证码")}(p.iv_sec||k)&&(delete p.iv_sec,k="",qe("iv_sec"),Se())}),n?.addEventListener("input",()=>{ge=n.value.replace(/\D/g,"").slice(0,6),n.value=ge,(p.iv_seccode||k)&&(delete p.iv_seccode,k="",qe("iv_seccode"),Se())}),i?.addEventListener("input",()=>{P=i.value,(p.iv_pwd||k)&&(delete p.iv_pwd,k="",qe("iv_pwd"),Se())}),I?.addEventListener("change",()=>{le=I.checked,le&&p.iv_consent&&(delete p.iv_consent,qe("iv_consent"))}),t.querySelector('[data-act="iv-send-sec"]')?.addEventListener("click",te=>{if(!me)return;const Q=me==="phone"?sa(H):Ta(H)?"":"请输入有效的电子邮箱";if(Q){p.iv_sec=Q,qe("iv_sec"),o?.focus({preventScroll:!0});return}if(!le){O=()=>{le=!0,I&&(I.checked=!0),delete p.iv_consent,qe("iv_consent"),x(me)},ca("consent_ask",te.currentTarget);return}x(me)}),t.querySelector('[data-act="iv-toggle-eye"]')?.addEventListener("click",te=>{ae=!ae;const Q=te.currentTarget;if(i){const J=i.selectionStart,M=i.selectionEnd;i.type=ae?"text":"password",i.focus({preventScroll:!0}),J!==null&&M!==null&&i.setSelectionRange(J,M)}Q.setAttribute("aria-label",ae?"隐藏密码":"显示密码"),Q.innerHTML=ae?la:ia}),r.addEventListener("submit",async te=>{if(te.preventDefault(),re||!F)return;if(p={},k="",be.trim()?ea(be.trim())>ya&&(p.iv_name=`姓名不超过 ${ya} 个字`):p.iv_name="请输入姓名",me){const M=me==="phone"?sa(H):Ta(H)?"":"请输入有效的电子邮箱";M&&(p.iv_sec=M),/^\d{6}$/.test(ge.trim())||(p.iv_seccode=me==="phone"?"请输入 6 位短信验证码":"请输入 6 位邮件验证码")}const Q=dt(P);Q&&(p.iv_pwd=Q),le||(p.iv_consent="请阅读并同意隐私政策和使用条款");const J=me?["iv_name","iv_sec","iv_seccode","iv_pwd","iv_consent"]:["iv_name","iv_pwd","iv_consent"];for(const M of J)qe(M);if(Se(),Object.keys(p).length>0){const M=Object.keys(p)[0];t.querySelector(`#au-${M}`)?.focus({preventScroll:!0});return}re=!0,Xe(f?"正在开通…":"正在提交…",U);try{const M=await e.acceptInvitation({token:F.token,displayName:be.trim(),password:P,consentAcceptedAt:new Date().toISOString(),...me?{secondaryContact:Ve(H),secondaryVerificationCode:ge.trim()}:{}});if(c)return;Ue(),s.onAuthenticated(M)}catch(M){if(c)return;re=!1,k=M instanceof Error?M.message:"暂时无法完成激活，请稍后再试。",Xe(f?"正在开通…":"正在提交…",U),Se()}})}function R(){ue?.(),ue=null,xe.close(!1);let r="";if(W||oe){const a=Xa();document.title=a.title,r=a.bodyHtml}else if(K){const a=T();document.title=a.title,r=a.bodyHtml}else document.title="注册 ｜ PACOM Station",r=`
        <h1 class="au-h1">注册</h1>
        <div class="au-mode-seg" role="tablist" aria-label="注册方式" data-role="reg-seg">
          <span class="au-mode-indicator" aria-hidden="true"></span>
          <button type="button" role="tab" aria-selected="${l==="join"}" tabindex="${l==="join"?"0":"-1"}" class="au-mode-tab" data-act="switch-reg-tab" data-tab="join">加入已有机构</button>
          <button type="button" role="tab" aria-selected="${l==="apply"}" tabindex="${l==="apply"?"0":"-1"}" class="au-mode-tab" data-act="switch-reg-tab" data-tab="apply">申请开通机构</button>
        </div>
        <div data-role="reg-body-host"></div>
        <div class="au-login-actions">
          <div class="au-login-divider" aria-hidden="true"></div>
          <p class="au-noacct">
            已有账户？<button type="button" class="au-inline" data-act="back-login">登录</button>
          </p>
        </div>
      `;t.innerHTML=`
      <div class="au au-split au-reg-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${Ft}</div>
              ${r}
            </main>
          </div>
          ${zt()}
        </section>
        <aside class="au-art" aria-hidden="true">
          <div class="au-art-frame">
            <img src="./media/auth-hero.jpg" alt="" />
          </div>
        </aside>
      </div>
      <div data-role="modal-host"></div>
    `,t.querySelectorAll('[data-act="back-login"]').forEach(a=>{a.addEventListener("click",()=>{Ue(),s.onBackToLogin()})}),t.querySelectorAll('[data-act="open-contact"]').forEach(a=>{a.addEventListener("click",o=>{ca("contact",o.currentTarget)})}),t.querySelector('[data-act="ask-withdraw"]')?.addEventListener("click",a=>{!W||!e.withdrawJoinApplication||V||ca("withdraw_confirm",a.currentTarget)}),t.querySelectorAll('[data-act="copy-receipt"]').forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.copyVal??"";o&&(navigator.clipboard?.writeText&&navigator.clipboard.writeText(o).catch(()=>{}),a.classList.add("is-copied"),a.setAttribute("aria-label","已复制申请单号"),a.innerHTML=Gt,he!==null&&window.clearTimeout(he),he=window.setTimeout(()=>{he=null,a.classList.remove("is-copied"),a.setAttribute("aria-label","复制申请单号"),a.innerHTML=at},1800))})}),!W&&!oe&&!K?(t.querySelectorAll('[data-act="switch-reg-tab"]').forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.tab;o&&pa(o,!1)}),a.addEventListener("keydown",o=>{const n=ta.indexOf(l);o.key==="ArrowRight"?(o.preventDefault(),pa(ta[(n+1)%ta.length],!0)):o.key==="ArrowLeft"?(o.preventDefault(),pa(ta[(n-1+ta.length)%ta.length],!0)):o.key==="Home"?(o.preventDefault(),pa(ta[0],!0)):o.key==="End"&&(o.preventDefault(),pa(ta[ta.length-1],!0))})}),Ca(),Ne(!1),document.fonts?.ready.then(()=>{c||Ne(!1)})):K&&!de&&A(),ue=Rt(t)}R(),K&&X&&!W&&!oe?(async()=>{try{const r=await e.getInvitationPreview(X);if(c)return;if(F=r,be=r.prefillName??"",de=!1,R(),!_&&r.status==="pending"&&!r.accountExists){const a=q(r),o=be.trim()?a?"#au-iv_sec":"#au-iv_pwd":"#au-iv_name";t.querySelector(o)?.focus({preventScroll:!0})}}catch(r){if(c)return;de=!1,ve=r instanceof Error?r.message:"暂时无法读取邀请信息，请稍后再试。",R()}})():!K&&!W&&!oe&&pe.replace(/\D/g,"").length===9&&(Qe(pe),t.querySelector("#au-jn_name")?.focus({preventScroll:!0}))}function Na(t){const e=t.replace(/^#\/?/,"").split("?")[0]??"";return e==="login"||e==="register"||e==="join"||e==="apply"||e==="invite"}function Pa(t){const e=t.replace(/^#\/?/,""),[s="",c=""]=e.split("?"),l=new URLSearchParams(c);if(s==="invite")return{kind:"invite",inviteToken:(l.get("token")??"").trim()};if(s==="register"||s==="join"||s==="apply"){const m=l.get("tab");return{kind:"register",initialMode:s==="apply"||m==="apply"?"apply":"join",prefillCode:l.get("code")??void 0}}return{kind:"login"}}const ws=["org_admin","project_admin","operator","space_user"],Ba=[{key:"login",label:"登录",group:"auth",hash:"#login",sessionRole:null},{key:"reg-join",label:"加入已有机构",group:"auth",hash:"#register",sessionRole:null},{key:"status-join",label:"加入申请已提交",group:"auth",hash:"#register",sessionRole:null,joinReceipt:{requestId:"JR-20261127-8421",organizationName:"广州国家实验室",maskedAccount:"138 •••• 8000",status:"pending_approval",submittedAt:"2026-11-27T09:30:00Z",withdrawToken:"demo-preset-wt-8421"}},{key:"reg-apply",label:"申请开通机构",group:"auth",hash:"#apply",sessionRole:null},{key:"status-apply",label:"开通申请已提交",group:"auth",hash:"#apply",sessionRole:null,applyReceipt:{applicationId:"APP-20261127-3902",organizationName:"广州天环智能科技有限公司",region:"广东省 广州市",maskedEmail:"c•••@company.com",status:"pending_review",submittedAt:"2026-11-27T09:35:00Z"}},{key:"inv-member",label:"成员邀请 ｜ 新账户",group:"invite",hash:"#invite?token=member-demo",sessionRole:null},{key:"inv-admin-email",label:"机构管理员邀请 ｜ 补绑手机",group:"invite",hash:"#invite?token=admin-email",sessionRole:null},{key:"inv-admin-phone",label:"机构管理员邀请 ｜ 补绑邮箱",group:"invite",hash:"#invite?token=admin-phone",sessionRole:null},{key:"inv-proj-email",label:"项目管理员邀请 ｜ 补绑手机",group:"invite",hash:"#invite?token=project-admin-email",sessionRole:null},{key:"inv-owner",label:"机构审核通过 ｜ 开通机构",group:"invite",hash:"#invite?token=owner-demo",sessionRole:null},{key:"inv-existing",label:"已有账户受邀 ｜ 引导登录",group:"invite",hash:"#invite?token=existing-demo",sessionRole:null},{key:"inv-signed-match",label:"已登录 ｜ 确认加入",group:"invite",hash:"#invite?token=existing-demo",sessionRole:"operator"},{key:"inv-signed-mismatch",label:"已登录 ｜ 切换受邀账户",group:"invite",hash:"#invite?token=member-demo",sessionRole:"org_admin"},{key:"inv-expired",label:"邀请链接已过期",group:"terminal",hash:"#invite?token=expired",sessionRole:null},{key:"inv-revoked",label:"邀请已撤销",group:"terminal",hash:"#invite?token=revoked",sessionRole:null},{key:"inv-accepted",label:"邀请已被接受",group:"terminal",hash:"#invite?token=accepted",sessionRole:null},{key:"inv-invalid",label:"邀请链接已失效",group:"terminal",hash:"#invite",sessionRole:null}];async function Ss(t){const e=new Yt;let s=await e.getSession(),c="login",l="",m="",y="",O=!1;document.querySelector("[data-demo-fab-root]")?.remove();const L=document.createElement("div");L.className="pacom-demo-fab-wrap",L.dataset.demoFabRoot="1",document.body.appendChild(L);function N(V,ue){const X=V.trim();if(X==="#login")return"login";if(X==="#apply"||X==="#register?tab=apply")return"reg-apply";if(X.startsWith("#register")||X.startsWith("#join"))return"reg-join";if(X.startsWith("#invite")){const _=Pa(X).inviteToken??"";return _?_==="expired"?"inv-expired":_==="revoked"?"inv-revoked":_==="accepted"?"inv-accepted":_.startsWith("owner")?"inv-owner":_==="admin-email"?"inv-admin-email":_==="admin-phone"?"inv-admin-phone":_==="project-admin-email"?"inv-proj-email":_==="existing-demo"?ue?"inv-signed-match":"inv-existing":ue?"inv-signed-mismatch":"inv-member":"inv-invalid"}return""}function W(){const V=Ba.filter(_=>_.group==="auth"),ue=Ba.filter(_=>_.group==="invite"),X=Ba.filter(_=>_.group==="terminal"),K=_=>{const de=c!=="app"&&m===_.key;return`
        <button type="button" class="pacom-demo-role-btn" aria-pressed="${de}" data-demo-preset="${_.key}">
          <span>${_.label}</span>
          ${de?Ae("check",14):"<span>→</span>"}
        </button>`};L.innerHTML=`
      ${O?`
          <div class="pacom-demo-fab-panel" role="dialog" aria-label="演示视角切换">
            <div class="pacom-demo-fab-head">
              <span class="pacom-demo-fab-title">演示视角</span>
              <span class="pacom-badge pacom-badge--neutral">模拟数据</span>
            </div>
            <span class="pacom-demo-fab-sub">测试邀请码 482 916 305 ｜ 验证码任意 6 位数字</span>
            <div class="pacom-demo-fab-roles">
              <span class="pacom-demo-fab-sec-title">工作区角色</span>
              ${ws.map(_=>`
                  <button type="button" class="pacom-demo-role-btn" aria-pressed="${c==="app"&&s?.role===_}" data-demo-pick="${_}">
                    <span>${Ze[_]}</span>
                    ${c==="app"&&s?.role===_?Ae("check",14):""}
                  </button>`).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">登录与注册</span>
              ${V.map(K).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">邀请与开通激活</span>
              ${ue.map(K).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">链接异常与终态</span>
              ${X.map(K).join("")}
            </div>
            <div class="pacom-demo-fab-foot">
              <a class="pacom-demo-link" href="./index.html">
                <span>进入生产入口（index.html）</span>
                <span>→</span>
              </a>
            </div>
          </div>`:""}
      <button type="button" class="pacom-demo-fab-pill" aria-expanded="${O}" data-demo-fab-toggle="1" title="切换演示视角">
        <span class="pacom-demo-fab-dot" aria-hidden="true"></span>
        <span>演示</span>
      </button>
    `,L.querySelector("[data-demo-fab-toggle]")?.addEventListener("click",_=>{_.stopPropagation(),O=!O,W()}),L.querySelectorAll("[data-demo-pick]").forEach(_=>{_.addEventListener("click",async()=>{const de=_.dataset.demoPick;de&&(O=!1,s=await e.switchDemoRole(de),await B(s))})}),L.querySelectorAll("[data-demo-preset]").forEach(_=>{_.addEventListener("click",async()=>{const de=_.dataset.demoPreset,F=Ba.find(ve=>ve.key===de);F&&(O=!1,y="",F.sessionRole&&(s=await e.switchDemoRole(F.sessionRole)),await oe(F.hash,F.sessionRole===null,{presetKey:F.key,initialJoinReceipt:F.joinReceipt??null,initialApplyReceipt:F.applyReceipt??null}))})})}document.addEventListener("click",V=>{O&&(V.target?.closest("[data-demo-fab-root]")||(O=!1,W()))}),document.addEventListener("keydown",V=>{V.key==="Escape"&&O&&(O=!1,W())});async function oe(V,ue,X){bs(t),qt(t),Ot(t),ue&&s&&(await e.logout(),s=null);const K=Pa(V);if(c=K.kind,l=V,m=X?.presetKey??N(V,!!s),window.location.hash!==V&&(window.location.hash=V),W(),K.kind==="register"||K.kind==="invite"){$s(t,e,{initialMode:K.initialMode,prefillCode:K.prefillCode,isInviteRoute:K.kind==="invite",inviteToken:K.inviteToken,currentSession:K.kind==="invite"?s:null,initialJoinReceipt:X?.initialJoinReceipt??null,initialApplyReceipt:X?.initialApplyReceipt??null,onBackToLogin:()=>{y="",oe("#login",!1)},onGoLoginForInvite:(_,de,F)=>{y=F,oe("#login",!1,{prefillAccount:_,notice:de})},onSwitchAccountForInvite:(_,de)=>{y=_,oe("#login",!0,{notice:de})},onBackToWorkspace:()=>{s?B(s):oe("#login",!1)},onAuthenticated:_=>{y="",B(_)}});return}ys(t,e,_=>{if(s=_,y){const de=y;y="",oe(de,!1);return}B(_)},{prefillAccount:X?.prefillAccount,notice:X?.notice,onOpenRegister:()=>{y="",oe("#register",!1)}})}async function B(V){qt(t),Ot(t),s=V,c="app",l="",m="",W(),(!window.location.hash||Na(window.location.hash))&&(window.location.hash="#home"),await hs(t,e,V,()=>{y="",oe("#login",!0)})}if(window.addEventListener("hashchange",()=>{if(Na(window.location.hash)){if(window.location.hash===l)return;const V=Pa(window.location.hash);(c!==V.kind||window.location.hash!==l)&&oe(window.location.hash,c==="app"&&V.kind!=="invite")}}),!s||Na(window.location.hash)){const V=Na(window.location.hash)?window.location.hash:"#login",ue=Pa(V);await oe(V,!!(s&&ue.kind!=="invite"));return}await B(s)}async function xs(){const t=document.getElementById("app");if(t)try{await Ss(t)}catch(e){t.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">演示环境初始化失败：${String(e)}</div></div>`}}xs();
