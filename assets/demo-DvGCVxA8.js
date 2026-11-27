import{E as F,r as ce,a as Ea,e as s,b as ka,g as Ia,s as jt,m as Es,c as ks,d as us,P as ms,I as ya,A as qt,f as vs,n as st,h as gs,i as Is,j as Ot,t as fs,k as bs,v as $a,l as Tt,o as Rt,p as qa,q as Ft,u as hs,C as wa,w as Jt,x as Ta,y as Pa,z as xs,B as Aa,D as Na,L as Ua,F as pa,G as _t,H as Va,J as ua,K as Ha,M as Ga,O as As,N as _s}from"./auth-shared-hbIroHm4.js";import{R as dt,g as Qt,a as Wa}from"./contracts-Z0w12vLk.js";function Ls(){const t="2026-11-25T09:00:00Z",e=[];for(let l=1;l<=22;l+=1){const c=l===7?F.floorId:l===8?F.lockedFloor8Id:l===6?F.lockedFloor6Id:`structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-${l}`,E=String(l).padStart(2,"0");e.push({id:c,buildingId:F.buildingId,kind:"above",level:l,name:`${l}F`,areaSqm:l===7?1383.1:l===1?2680:l<=4?1920:1480,plan:{floorId:c,imageUrl:`./media/floors/e/${E}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}})}const a="structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-roof-1";e.push({id:a,buildingId:F.buildingId,kind:"roof",level:99,name:"RF",areaSqm:1260,plan:{floorId:a,imageUrl:"./media/floors/e/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}});const n=[];for(let l=1;l<=12;l+=1){const c=`structure-f-above-${l}`,E=String(l).padStart(2,"0");n.push({id:c,buildingId:F.buildingFId,kind:"above",level:l,name:`${l}F`,areaSqm:l===1?2450:l<=3?2100:1580,plan:{floorId:c,imageUrl:`./media/floors/f/${E}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}})}const o="structure-f-roof-1";return n.push({id:o,buildingId:F.buildingFId,kind:"roof",level:99,name:"RF",areaSqm:960,plan:{floorId:o,imageUrl:"./media/floors/f/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:t}}),{projects:[{id:F.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",location:{lat:23.0652,lng:113.3824,crs:"GCJ02",confirmed:!0,confirmedAt:t},imageUrl:"./media/gzlab.jpg"},{id:F.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",location:{lat:23.0681,lng:113.3792,crs:"GCJ02",confirmed:!0,confirmedAt:t},imageUrl:"./media/gzlab.jpg"}],buildings:[{id:F.buildingId,projectId:F.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.webp"},{id:F.buildingFId,projectId:F.projectId,name:"F栋",aboveFloors:12,belowFloors:0,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.webp"}],floors:[...e,...n],zones:[{id:"zone-e1f-lobby",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 首层大堂与庭院入口",category:"corridor"},{id:"zone-e1f-power",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 配电房与后勤区",category:"utility"},{id:"zone-e7f-lab-east",floorId:F.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:F.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:F.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:F.floorId,name:"核心走廊与弱电井",category:"corridor"},{id:"zone-erf-hvac",floorId:a,name:"RF 屋面空调主机与稳压泵区",category:"utility"},{id:"zone-f1f-lobby",floorId:"structure-f-above-1",name:"1F 南入口大堂与弧形展示翼",category:"corridor"},{id:"zone-f8f-office",floorId:"structure-f-above-8",name:"8F 会议与行政办公区",category:"office"},{id:"zone-f11f-sports",floorId:"structure-f-above-11",name:"11F 体育活动与茶歇区",category:"outdoor"},{id:"zone-f12f-lounge",floorId:"structure-f-above-12",name:"12F 休息区、母婴室与桌球室",category:"office"},{id:"zone-frf-plant",floorId:o,name:"RF 屋面设备基础与机房区",category:"utility"}]}}const ys=Ls(),Za=ys.floors.map(t=>t.id),mt={org_admin:{userId:"demo-org-admin",displayName:"林致远",email:"lin.zhiyuan@pacom.cn",phone:"13800138001",role:"org_admin",roleLabel:dt.org_admin,authMode:"demo",scope:{allowedProjectIds:[F.projectId,F.project1Id],allowedBuildingIds:[F.buildingId,F.buildingFId],allowedFloorIds:[...Za],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩",email:"chen.mingxuan@pacom.cn",phone:"13800138002",role:"project_admin",roleLabel:dt.project_admin,authMode:"demo",scope:{allowedProjectIds:[F.projectId],allowedBuildingIds:[F.buildingId,F.buildingFId],allowedFloorIds:[...Za],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},operator:{userId:"demo-operator-e7f",displayName:"周宁",email:"zhou.ning@pacom.cn",phone:"13800138003",role:"operator",roleLabel:dt.operator,authMode:"demo",scope:{allowedProjectIds:[F.projectId],allowedBuildingIds:[F.buildingId],allowedFloorIds:[F.floorId],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}},space_user:{userId:"demo-space-user-e7f",displayName:"沈嘉",email:"shen.jia@pacom.cn",phone:"13800138004",role:"space_user",roleLabel:dt.space_user,authMode:"demo",scope:{allowedProjectIds:[F.projectId],allowedBuildingIds:[F.buildingId],allowedFloorIds:[F.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],visibleModules:["home","account"],canControlDevices:!0,canManageAlarms:!1,canEditScenes:!1,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}}},Kt="pacom.web.demo.role",Ka="pacom.web.demo.spatial.v5",Ya="pacom.web.demo.orgs.v1",Ja="pacom.web.demo.activeOrg.v1",Qa="pacom.web.demo.deployExt.v1",Qe="org-gzlab";function Xa(){return{extraDevices:[],planChangeAlerts:{},floorFttRecords:{},lightMarkers:[{id:"lm-1",deviceId:"dev-e7f-lt-01",floorId:F.floorId,channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",floorId:F.floorId,channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",floorId:F.floorId,channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],meshRoles:{"dev-e7f-gw-01":{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"},"dev-e7f-lt-01":{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"},"dev-e7f-lt-02":{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"},"dev-e7f-env-01":{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}},edgeSyncByFloor:{[F.floorId]:{version:3,dirty:!1,lastSyncedAt:"2026-11-25T09:00:00Z"}},deviceParams:{},groups:[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:F.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:F.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:F.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:F.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],docs:[{id:"doc-hvac-7f",floorId:F.floorId,name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F ｜ 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",floorId:F.floorId,name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F ｜ 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",floorId:F.floorId,name:"E7F_协议点位与蓝牙Mesh映射表.xlsx",category:"点位清单",boundScope:"E栋 7F ｜ 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",floorId:F.floorId,name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 ｜ FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}]}}class Ds{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;inviteMissTimestamps=[];inviteLockedUntil=0;sentCodeTargets=new Set;joinReceipts=new Map;joinWithdrawTokens=new Map;joinAccountByRequestId=new Map;pendingApprovalAccounts=new Set;orgs;activeOrgId;spatial;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;overrides;deployExt;constructor(){this.orgs=this.loadOrgs();const e=typeof localStorage<"u"?localStorage.getItem(Ja):null,a=this.orgs.find(l=>l.id===e)??this.orgs[0];this.activeOrgId=a.id,this.spatial=a.spatial,this.overrides=[],this.syncAdminScopesFromSpatial();const n=typeof sessionStorage<"u"?sessionStorage.getItem(Kt):null;n&&mt[n]&&(this.activeSession=structuredClone(mt[n]),this.applyOverridesToSession());const o=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:F.projectId,buildingId:F.buildingId,floorId:F.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:F.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:o,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:o,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:F.projectId,buildingId:F.buildingId,floorId:F.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:F.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:o,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:F.projectId,buildingId:F.buildingId,floorId:F.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:F.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:o,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:F.projectId,buildingId:F.buildingId,floorId:F.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:F.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:o,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:o,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:o,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02",category:"hvac",projectId:F.projectId,buildingId:F.buildingId,floorId:F.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:F.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:o,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:F.projectId,buildingId:F.buildingId,floorId:F.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:F.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:o,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:o,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:o,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:F.projectId,buildingId:F.buildingId,floorId:F.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:F.projectId,buildingId:F.buildingId,floorId:F.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:F.projectId,buildingId:F.buildingId,floorId:F.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:F.projectId,buildingId:F.buildingId,floorId:F.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:o},{id:"conn-e7f-dali",projectId:F.projectId,buildingId:F.buildingId,floorId:F.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:o},{id:"conn-e7f-modbus",projectId:F.projectId,buildingId:F.buildingId,floorId:F.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deployExt=this.loadDeployExtensions(),this.deployExt.seedDevicesOverride&&this.activeOrgId===Qe&&(this.devices=structuredClone(this.deployExt.seedDevicesOverride)),this.deployExt.connectionsOverride&&(this.connections=structuredClone(this.deployExt.connectionsOverride)),this.deliveryBatches=this.deployExt.deliveryBatchesOverride?structuredClone(this.deployExt.deliveryBatchesOverride):[{id:"dlv-e7f-20261120",projectId:F.projectId,floorId:F.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:F.projectId,floorId:F.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:F.projectId,floorId:F.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:F.projectId,floorId:F.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:F.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:F.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:o,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:F.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:o,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:F.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:F.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh ｜ 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:F.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:o,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:F.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(mt).map((l,c)=>({userId:l.userId,displayName:l.displayName,email:`${l.role.replaceAll("_",".")}@gzlab.ac.cn`,role:l.role,roleLabel:l.roleLabel,scopeSummary:l.scope.allowedZoneIds?.length?`E栋 7F（${l.scope.allowedZoneIds.length} 个授权功能区）`:`${l.scope.allowedProjectIds.length} 项目 / ${l.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:c===0?o:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁",role:"operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"陈明轩",role:"project_admin",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉",role:"space_user",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}reconcileOverrides(){const e=Date.now();for(const a of this.overrides)a.status==="active"&&new Date(a.expiresAt).getTime()<=e&&(a.status="expired")}applyOverridesToSession(){if(this.reconcileOverrides(),!this.activeSession)return;const e=mt[this.activeSession.role].scope,a=this.overrides.filter(n=>n.targetUserId===this.activeSession.userId&&n.status==="active");this.activeSession.scope.activeOverrides=structuredClone(a),this.activeSession.scope.canEditDeployment=e.canEditDeployment||a.some(n=>n.module==="deployment"),this.activeSession.scope.canEditSettings=e.canEditSettings||a.some(n=>n.module==="settings")}record(e,a,n,o,l){this.traces.unshift({at:new Date().toISOString(),channel:e,operation:a,endpoint:n,request:l,response:o}),this.traces.length>40&&this.traces.pop()}pushAudit(e,a,n,o){const l=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:l?.displayName??"anonymous",role:l?.role??"space_user",action:e,target:a,result:n,detail:o})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.applyOverridesToSession(),this.activeSession}async getSession(){return this.applyOverridesToSession(),this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(e){const a=e.method??"password",n=e.account.trim(),o=this.normalizeContactKey(n);if(!n)throw new Error("400 BAD_REQUEST: 请输入电子邮箱或手机号码");if(a==="sms"){const v=(e.smsCode??e.password??"").trim();if(!/^\d{6}$/.test(v))throw new Error("验证码不正确或已过期");const f=`login:${o}`;if(!this.sentCodeTargets.has(f))throw new Error("请先获取短信验证码");this.sentCodeTargets.delete(f)}else if(!(e.password??"").trim())throw new Error("400 BAD_REQUEST: 请输入账户和密码");if(this.pendingApprovalAccounts.has(o))throw new Error("你的加入申请正在等待机构管理员审批，批准后即可登录。");const l=Object.values(mt).find(v=>{const f=!!v.email&&this.normalizeContactKey(v.email)===o,y=!!v.phone&&this.normalizeContactKey(v.phone)===o;return f||y}),c=n.toLowerCase(),E=l?l.role:c.includes("org")||c.includes("admin")?"org_admin":c.includes("proj")?"project_admin":c.includes("space")||c.includes("member")?"space_user":"operator";return this.activeSession=structuredClone(mt[E]),this.applyOverridesToSession(),sessionStorage.setItem(Kt,E),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{method:a,account:n,rememberMe:!!e.rememberMe}),this.pushAudit("auth.login",this.activeSession.userId,"success",a==="sms"?"短信验证码登录":"密码登录"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(Kt),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}maskTarget(e){const a=e.trim();if(a.includes("@")){const[o,l]=a.split("@");return o&&l?`${o[0]}•••@${l}`:"••••"}const n=a.replace(/\D/g,"");return n.length===11?`${n.slice(0,3)} •••• ${n.slice(7)}`:n.length>=6?`${n.slice(0,3)} •••• ${n.slice(-4)}`:"••••"}async sendVerificationCode(e){const a=e.target.trim(),n=a.includes("@")?"email":"sms";this.sentCodeTargets.add(`${e.purpose}:${this.normalizeContactKey(a)}`);const o={maskedTarget:this.maskTarget(a),channel:n,cooldownSeconds:60};return this.record("REST","sendVerificationCode","POST /api/v1/auth/verification-codes",o,{purpose:e.purpose,channel:n}),o}async confirmPasswordReset(e){const a=e.account.trim(),n=this.normalizeContactKey(a);if(!a)throw new Error("请输入电子邮箱或手机号码");if(!/^\d{6}$/.test(e.verificationCode.trim()))throw new Error("验证码不正确或已过期");const o=`reset:${n}`;if(!this.sentCodeTargets.has(o))throw new Error("请先获取验证码");if(!e.newPassword||e.newPassword.length<8)throw new Error("密码至少需要 8 个字符");this.sentCodeTargets.delete(o),this.record("REST","confirmPasswordReset","POST /api/v1/auth/password-reset/confirm",{ok:!0},{account:this.maskTarget(a)}),this.pushAudit("auth.password_reset",this.maskTarget(a),"success")}async resolveInviteCode(e){const a=Date.now();if(this.inviteLockedUntil>a)return{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const n=e.replace(/\D/g,""),l={482916305:this.orgs[0]?.name??"广州国家实验室",618204917:"天环智慧园区"}[n];if(!l){if(this.inviteMissTimestamps=this.inviteMissTimestamps.filter(v=>a-v<36e5),this.inviteMissTimestamps.push(a),this.inviteMissTimestamps.length>=10)return this.inviteLockedUntil=a+36e5,this.inviteMissTimestamps=[],{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const E={valid:!1,message:"邀请码不正确或已失效，请向机构管理员确认。"};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",E,{code:n}),E}const c={valid:!0,organizationName:l};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",c,{code:n}),c}async registerAndJoin(e){const a=await this.resolveInviteCode(e.inviteCode);if(!a.valid||!a.organizationName)throw new Error(a.message??"邀请码不正确或已失效，请向机构管理员确认。");if(!/^\d{6}$/.test(e.verificationCode.trim()))throw new Error("验证码不正确或已过期");const n=this.normalizeContactKey(e.account),o=`register_join:${n}`;if(!this.sentCodeTargets.has(o))throw new Error("请先获取验证码");const l=e.account.includes("@")?"email":"phone";if(this.isContactOccupied(l,e.account))throw new Error("该账户已注册，请直接登录或联系机构管理员发送定向邀请。");if(this.pendingApprovalAccounts.has(n))throw new Error("该账户已提交加入申请，正在等待机构管理员审批。");this.sentCodeTargets.delete(o);const c=`JR-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,E=`wt-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`,v={requestId:c,organizationName:a.organizationName,maskedAccount:this.maskTarget(e.account),status:"pending_approval",submittedAt:new Date().toISOString(),withdrawToken:E};return this.joinReceipts.set(c,v),this.joinWithdrawTokens.set(c,E),this.joinAccountByRequestId.set(c,n),this.pendingApprovalAccounts.add(n),this.record("REST","registerAndJoin","POST /api/v1/auth/register-join",v,{organizationName:a.organizationName,displayName:e.displayName}),v}async withdrawJoinApplication(e,a){const n=this.joinWithdrawTokens.get(e);if(n&&a!==n)throw new Error("撤回凭证无效或已失效，请刷新后重试。");this.joinReceipts.delete(e),this.joinWithdrawTokens.delete(e);const o=this.joinAccountByRequestId.get(e);o&&(this.pendingApprovalAccounts.delete(o),this.joinAccountByRequestId.delete(e)),this.record("REST","withdrawJoinApplication",`DELETE /api/v1/org/join-requests/${e}`,{ok:!0})}async submitOrgApplication(e){if(!/^\d{6}$/.test(e.smsCode.trim()))throw new Error("验证码不正确或已过期");const a=`org_apply:${this.normalizeContactKey(e.phone)}`;if(!this.sentCodeTargets.has(a))throw new Error("请先获取短信验证码");this.sentCodeTargets.delete(a);const n=e.province===e.city?e.province:`${e.province} ${e.city}`,o={applicationId:`APP-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,organizationName:e.organizationName.trim(),region:n,maskedEmail:this.maskTarget(e.email),status:"pending_review",submittedAt:new Date().toISOString()};return this.record("REST","submitOrgApplication","POST /api/v1/org/applications",o,{organizationName:o.organizationName,region:n}),o}async getInvitationPreview(e){const a=e.trim(),n=this.orgs[0]?.name??"广州国家实验室",o=new Date(Date.now()+7*864e5).toISOString().slice(0,10);return a==="expired"?{token:a,kind:"member",organizationName:n,inviterName:"林致远",role:"operator",roleLabel:dt.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!1,requiredSecondaryChannel:null,expiresAt:"2026-11-20",status:"expired"}:a==="revoked"?{token:a,kind:"member",organizationName:n,inviterName:"林致远",role:"operator",roleLabel:dt.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!1,requiredSecondaryChannel:null,expiresAt:o,status:"revoked"}:a==="accepted"?{token:a,kind:"member",organizationName:n,inviterName:"林致远",role:"operator",roleLabel:dt.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!0,requiredSecondaryChannel:null,expiresAt:o,status:"accepted"}:a.startsWith("owner")?{token:a,kind:"owner",organizationName:"广州天环智能科技有限公司",role:"org_admin",roleLabel:dt.org_admin,targetChannel:"email",targetValue:"chen@company.com",prefillName:"陈志远",accountExists:!1,requiredSecondaryChannel:null,verifiedSecondaryMasked:"139 •••• 9000",expiresAt:o,status:"pending"}:a==="admin-email"?{token:a,kind:"member",organizationName:n,inviterName:"林致远",role:"org_admin",roleLabel:dt.org_admin,targetChannel:"email",targetValue:"zhao.admin@pacom.cn",prefillName:"赵启明",accountExists:!1,requiredSecondaryChannel:Qt("member","org_admin","email"),expiresAt:o,status:"pending"}:a==="admin-phone"?{token:a,kind:"member",organizationName:n,inviterName:"林致远",role:"org_admin",roleLabel:dt.org_admin,targetChannel:"phone",targetValue:"13900139088",prefillName:"赵启明",accountExists:!1,requiredSecondaryChannel:Qt("member","org_admin","phone"),expiresAt:o,status:"pending"}:a==="project-admin-email"?{token:a,kind:"member",organizationName:n,inviterName:"林致远",role:"project_admin",roleLabel:dt.project_admin,targetChannel:"email",targetValue:"wu.proj@pacom.cn",prefillName:"吴承志",accountExists:!1,requiredSecondaryChannel:Qt("member","project_admin","email"),expiresAt:o,status:"pending"}:a==="project-admin-phone"?{token:a,kind:"member",organizationName:n,inviterName:"林致远",role:"project_admin",roleLabel:dt.project_admin,targetChannel:"phone",targetValue:"13700137066",prefillName:"吴承志",accountExists:!1,requiredSecondaryChannel:Qt("member","project_admin","phone"),expiresAt:o,status:"pending"}:a==="existing-demo"?{token:a,kind:"member",organizationName:"天环智慧园区",inviterName:"林致远",role:"operator",roleLabel:dt.operator,targetChannel:"email",targetValue:"zhou.ning@pacom.cn",prefillName:"周宁",accountExists:!0,requiredSecondaryChannel:null,expiresAt:o,status:"pending"}:{token:a||"member-demo",kind:"member",organizationName:n,inviterName:"林致远",role:"operator",roleLabel:dt.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",prefillName:"林明远",accountExists:!1,requiredSecondaryChannel:null,expiresAt:o,status:"pending"}}normalizeContactKey(e){return e.trim().toLowerCase().replace(/[\s\-()]/g,"")}isContactOccupied(e,a){const n=this.normalizeContactKey(a);return Object.values(mt).some(o=>{const l=e==="email"?o.email:o.phone;return!!l&&this.normalizeContactKey(l)===n})}async acceptInvitation(e){const a=await this.getInvitationPreview(e.token);if(a.status!=="pending")throw new Error("邀请已过期或已失效，请联系邀请人重新发送。");const n=a.kind==="owner"?"org_admin":a.role??"operator",o=this.activeSession;if(!!o&&(a.targetChannel==="email"&&!!o?.email&&this.normalizeContactKey(o.email)===this.normalizeContactKey(a.targetValue)||a.targetChannel==="phone"&&!!o?.phone&&this.normalizeContactKey(o.phone)===this.normalizeContactKey(a.targetValue))&&o){const f=structuredClone(o);return this.activeSession=f,this.applyOverridesToSession(),sessionStorage.setItem(Kt,f.role),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${e.token}/accept`,f),this.pushAudit("auth.invite.accept",f.userId,"success","已有账户确认加入"),structuredClone(f)}if(a.accountExists)throw new Error("该账户已注册，请使用原账户登录后再接受邀请。");const c=a.requiredSecondaryChannel!==void 0?a.requiredSecondaryChannel:Qt(a.kind,a.role,a.targetChannel);let E="";if(c){const f=(e.secondaryContact??"").trim(),y=(e.secondaryVerificationCode??"").trim();if(!f)throw new Error(c==="phone"?"请补充并验证手机号码":"请补充并验证电子邮箱");if(!/^\d{6}$/.test(y))throw new Error("验证码不正确或已过期");const I=`bind:${this.normalizeContactKey(f)}`;if(!this.sentCodeTargets.has(I))throw new Error("请先获取验证码");if(this.isContactOccupied(c,f))throw new Error(c==="phone"?"该手机号码已绑定其他账户，请更换后重试；如原账户为你本人所有，请使用原账户登录或联系管理员重新邀请。":"该电子邮箱已绑定其他账户，请更换后重试；如原账户为你本人所有，请使用原账户登录或联系管理员重新邀请。");this.sentCodeTargets.delete(I),E=f}const v=structuredClone(mt[n]);return e.displayName?.trim()&&(v.displayName=e.displayName.trim()),a.targetChannel==="email"?(v.email=a.targetValue,v.phone=E||(a.kind==="owner"?"13900139000":void 0)):(v.phone=a.targetValue,v.email=E||void 0),this.activeSession=v,this.applyOverridesToSession(),sessionStorage.setItem(Kt,n),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${e.token}/accept`,v),this.pushAudit("auth.invite.accept",v.userId,"success"),structuredClone(v)}async switchDemoRole(e){return this.activeSession=structuredClone(mt[e]),this.applyOverridesToSession(),sessionStorage.setItem(Kt,e),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${e}`,this.activeSession),structuredClone(this.activeSession)}loadLegacySpatial(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(Ka);if(e){const a=JSON.parse(e);if(Array.isArray(a?.projects)&&Array.isArray(a?.buildings)&&Array.isArray(a?.floors)&&Array.isArray(a?.zones))return a}}}catch{}return structuredClone(ys)}loadOrgs(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(Ya);if(e){const a=JSON.parse(e);if(Array.isArray(a)&&a.length>0&&a.every(n=>n?.id&&n?.name&&Array.isArray(n?.spatial?.projects)))return a}}}catch{}return[{id:Qe,name:"广州国家实验室",spatial:this.loadLegacySpatial()}]}persistSpatial(){const e=this.orgs.find(a=>a.id===this.activeOrgId);e&&(e.spatial=this.spatial),this.syncAdminScopesFromSpatial();try{typeof localStorage<"u"&&(localStorage.setItem(Ya,JSON.stringify(this.orgs)),localStorage.setItem(Ja,this.activeOrgId),this.activeOrgId===Qe&&localStorage.setItem(Ka,JSON.stringify(this.spatial)))}catch{}}async listOrganizations(){return this.orgs.map(e=>({id:e.id,name:e.name,projectCount:e.spatial.projects.length}))}getActiveOrganizationId(){return this.activeOrgId}loadDeployExtensions(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(`${Qa}.${this.activeOrgId}`);if(e){const a=JSON.parse(e),n=this.activeOrgId===Qe?Xa():{extraDevices:[],lightMarkers:[],meshRoles:{},edgeSyncByFloor:{},deviceParams:{},groups:[],docs:[],planChangeAlerts:{},floorFttRecords:{}};return{extraDevices:Array.isArray(a.extraDevices)?a.extraDevices:n.extraDevices,seedDevicesOverride:Array.isArray(a.seedDevicesOverride)?a.seedDevicesOverride:void 0,lightMarkers:Array.isArray(a.lightMarkers)?a.lightMarkers:n.lightMarkers,meshRoles:a.meshRoles&&typeof a.meshRoles=="object"?a.meshRoles:n.meshRoles,edgeSyncByFloor:a.edgeSyncByFloor&&typeof a.edgeSyncByFloor=="object"?a.edgeSyncByFloor:n.edgeSyncByFloor,deviceParams:a.deviceParams&&typeof a.deviceParams=="object"?a.deviceParams:n.deviceParams,groups:Array.isArray(a.groups)?a.groups:n.groups,docs:Array.isArray(a.docs)?a.docs:n.docs,connectionsOverride:Array.isArray(a.connectionsOverride)?a.connectionsOverride:void 0,deliveryBatchesOverride:Array.isArray(a.deliveryBatchesOverride)?a.deliveryBatchesOverride:void 0,planChangeAlerts:a.planChangeAlerts&&typeof a.planChangeAlerts=="object"?a.planChangeAlerts:n.planChangeAlerts,floorFttRecords:a.floorFttRecords&&typeof a.floorFttRecords=="object"?a.floorFttRecords:n.floorFttRecords}}}}catch{}return this.activeOrgId===Qe?Xa():{extraDevices:[],lightMarkers:[],meshRoles:{},edgeSyncByFloor:{},deviceParams:{},groups:[],docs:[],planChangeAlerts:{},floorFttRecords:{}}}persistDeployExtensions(){try{typeof localStorage<"u"&&localStorage.setItem(`${Qa}.${this.activeOrgId}`,JSON.stringify(this.deployExt))}catch{}}findAllDevices(){return[...this.activeOrgId===Qe?this.devices:[],...this.deployExt.extraDevices]}markEdgeSyncDirty(e){const a=this.deployExt.edgeSyncByFloor[e]??{version:1,dirty:!1,lastSyncedAt:null};this.deployExt.edgeSyncByFloor[e]={...a,dirty:!0}}async switchOrganization(e){const a=this.orgs.find(n=>n.id===e);if(!a)throw new Error(`404 NOT_FOUND: 机构 ${e} 不存在`);this.activeOrgId=a.id,this.spatial=a.spatial,this.deployExt=this.loadDeployExtensions(),this.deliveryBatches=this.deployExt.deliveryBatchesOverride?structuredClone(this.deployExt.deliveryBatchesOverride):this.activeOrgId===Qe?[{id:"dlv-e7f-20261120",projectId:F.projectId,floorId:F.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}]:[],this.persistSpatial()}async createOrganization(e){if(this.requireSession().role!=="org_admin")throw new Error("403 FORBIDDEN: 仅机构管理员可新建机构");const n=e.trim()||"新建机构",o={id:`org-${Date.now().toString(36)}`,name:n,spatial:{projects:[],buildings:[],floors:[],zones:[]}};return this.orgs.push(o),this.activeOrgId=o.id,this.spatial=o.spatial,this.deployExt=this.loadDeployExtensions(),this.deliveryBatches=[],this.persistSpatial(),this.pushAudit("org.create",o.id,"success",n),{id:o.id,name:o.name,projectCount:0}}syncAdminScopesFromSpatial(){const e=this.spatial.projects.map(o=>o.id),a=this.spatial.buildings.map(o=>o.id),n=this.spatial.floors.map(o=>o.id);this.activeOrgId===Qe&&(mt.org_admin.scope.allowedProjectIds=[...e],mt.org_admin.scope.allowedBuildingIds=[...a],mt.org_admin.scope.allowedFloorIds=[...n],mt.project_admin.scope.allowedProjectIds=[...e],mt.project_admin.scope.allowedBuildingIds=[...a],mt.project_admin.scope.allowedFloorIds=[...n]),this.activeSession&&(this.activeOrgId!==Qe||this.activeSession.role==="org_admin"||this.activeSession.role==="project_admin"||this.activeSession.scope.canEditDeployment)&&(this.activeSession.scope.allowedProjectIds=[...e],this.activeSession.scope.allowedBuildingIds=[...a],this.activeSession.scope.allowedFloorIds=[...n])}async getSpatialTree(){const e=this.requireSession();if(this.activeOrgId!==Qe){const f=structuredClone(this.spatial);return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:f.projects.length,buildings:f.buildings.length,floors:f.floors.length}),f}const a=this.spatial.projects.filter(f=>e.scope.allowedProjectIds.includes(f.id)),n=this.spatial.buildings.filter(f=>e.scope.allowedBuildingIds.includes(f.id)),o=new Set(n.map(f=>f.id)),l=this.spatial.floors.filter(f=>o.has(f.buildingId)),c=new Set(l.map(f=>f.id)),E=this.spatial.zones.filter(f=>c.has(f.floorId)),v=structuredClone({projects:a,buildings:n,floors:l,zones:E});return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:v.projects.length,buildings:v.buildings.length,floors:v.floors.length}),v}async createProject(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权创建项目`);const n={id:`project-${Date.now().toString(36)}`,name:e.name.trim()||"新建项目",city:e.city?.trim()||"广州市",address:e.address?.trim()||"",timezone:"Asia/Shanghai",location:e.location,imageUrl:e.imageUrl??"./media/gzlab.jpg"};return this.spatial.projects.push(n),a.scope.allowedProjectIds.includes(n.id)||a.scope.allowedProjectIds.push(n.id),this.persistSpatial(),this.record("REST","createProject","POST /api/v1/projects",n,e),this.pushAudit("project.create",n.id,"success",n.name),structuredClone(n)}async updateProject(e,a){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权修改项目配置`);const o=this.spatial.projects.find(l=>l.id===e);if(!o)throw new Error(`404 NOT_FOUND: 项目 ${e} 不存在`);return a.name!==void 0&&(o.name=a.name.trim()||o.name),a.city!==void 0&&(o.city=a.city.trim()),a.address!==void 0&&(o.address=a.address.trim()),a.location!==void 0&&(o.location=a.location),a.imageUrl!==void 0&&(o.imageUrl=a.imageUrl),this.persistSpatial(),this.record("REST","updateProject",`PATCH /api/v1/projects/${e}`,o,a),this.pushAudit("project.update",e,"success",o.name),structuredClone(o)}async deleteProject(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除项目`);if(e===F.projectId)throw new Error("400 BAD_REQUEST: 当前项目包含运行中设备，请先清理后再删除");const n=new Set(this.spatial.buildings.filter(l=>l.projectId===e).map(l=>l.id)),o=new Set(this.spatial.floors.filter(l=>n.has(l.buildingId)).map(l=>l.id));this.spatial.projects=this.spatial.projects.filter(l=>l.id!==e),this.spatial.buildings=this.spatial.buildings.filter(l=>l.projectId!==e),this.spatial.floors=this.spatial.floors.filter(l=>!n.has(l.buildingId)),this.spatial.zones=this.spatial.zones.filter(l=>!o.has(l.floorId)),this.persistSpatial(),this.record("REST","deleteProject",`DELETE /api/v1/projects/${e}`,{ok:!0}),this.pushAudit("project.delete",e,"success")}async upsertBuilding(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护楼宇`);let n=e.id?this.spatial.buildings.find(o=>o.id===e.id):void 0;return n?(n.name=e.name.trim()||n.name,n.aboveFloors=Math.max(0,e.aboveFloors),n.belowFloors=Math.max(0,e.belowFloors),n.hasRoof=e.hasRoof,e.areaSqm!==void 0&&(n.areaSqm=e.areaSqm),e.imageUrl!==void 0&&(n.imageUrl=e.imageUrl)):(n={id:`building-${Date.now().toString(36)}`,projectId:e.projectId,name:e.name.trim()||"新建楼宇",aboveFloors:Math.max(1,e.aboveFloors),belowFloors:Math.max(0,e.belowFloors),hasRoof:e.hasRoof,areaSqm:e.areaSqm??null,imageUrl:e.imageUrl??"./media/building-e.webp"},this.spatial.buildings.push(n)),this.persistSpatial(),this.record("REST","upsertBuilding","PUT /api/v1/buildings",n,e),this.pushAudit("building.upsert",n.id,"success",n.name),structuredClone(n)}async deleteBuilding(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除楼宇`);if(e===F.buildingId)throw new Error("400 BAD_REQUEST: 当前楼宇包含运行中设备，请先解绑后再删除");const n=new Set(this.spatial.floors.filter(o=>o.buildingId===e).map(o=>o.id));this.spatial.buildings=this.spatial.buildings.filter(o=>o.id!==e),this.spatial.floors=this.spatial.floors.filter(o=>o.buildingId!==e),this.spatial.zones=this.spatial.zones.filter(o=>!n.has(o.floorId)),this.persistSpatial(),this.record("REST","deleteBuilding",`DELETE /api/v1/buildings/${e}`,{ok:!0}),this.pushAudit("building.delete",e,"success")}async upsertFloor(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护楼层`);const n=new Date().toISOString();let o=e.id?this.spatial.floors.find(l=>l.id===e.id):void 0;if(o){if(o.name=e.name.trim()||o.name,o.kind=e.kind,o.level=e.level,e.areaSqm!==void 0&&(o.areaSqm=e.areaSqm),e.planImageUrl!==void 0){const l=!!o.plan?.imageUrl,c=o.plan?.planVersion??0,E=!!(e.planImageUrl&&l&&e.planImageUrl!==o.plan?.imageUrl),v=this.findAllDevices().some(f=>f.floorId===o.id);o.plan=e.planImageUrl?{floorId:o.id,imageUrl:e.planImageUrl,planVersion:c+1,updatedAt:n}:null,E&&v?(this.deployExt.planChangeAlerts[o.id]={floorId:o.id,planChangedAt:n,previousVersion:c,currentVersion:c+1},delete this.deployExt.floorFttRecords[o.id],this.persistDeployExtensions()):e.planImageUrl||(delete this.deployExt.planChangeAlerts[o.id],delete this.deployExt.floorFttRecords[o.id],this.persistDeployExtensions())}}else{const l=`floor-${e.buildingId.slice(-6)}-${e.kind}-${Math.abs(e.level)}-${Date.now().toString(36).slice(-3)}`;o={id:l,buildingId:e.buildingId,kind:e.kind,level:e.level,name:e.name.trim()||`${e.level}F`,areaSqm:e.areaSqm??null,plan:e.planImageUrl?{floorId:l,imageUrl:e.planImageUrl,planVersion:1,updatedAt:n}:null},this.spatial.floors.push(o),this.activeSession&&!this.activeSession.scope.allowedFloorIds.includes(o.id)&&this.activeSession.scope.allowedFloorIds.push(o.id)}return this.persistSpatial(),this.record("REST","upsertFloor","PUT /api/v1/floors",{id:o.id,name:o.name,hasPlan:!!o.plan}),this.pushAudit("floor.upsert",o.id,"success",o.name),structuredClone(o)}async deleteFloor(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除楼层`);const n=this.findAllDevices().filter(o=>o.floorId===e).length;if(n>0)throw new Error(`400 BAD_REQUEST: 当前楼层已关联 ${n} 台设备，请先清理或解绑后再删除`);this.spatial.floors=this.spatial.floors.filter(o=>o.id!==e),this.spatial.zones=this.spatial.zones.filter(o=>o.floorId!==e),delete this.deployExt.planChangeAlerts[e],delete this.deployExt.floorFttRecords[e],this.persistSpatial(),this.persistDeployExtensions(),this.record("REST","deleteFloor",`DELETE /api/v1/floors/${e}`,{ok:!0}),this.pushAudit("floor.delete",e,"success")}async upsertZone(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护功能区`);let n=e.id?this.spatial.zones.find(o=>o.id===e.id):void 0;return n?(n.name=e.name.trim()||n.name,n.category=e.category):(n={id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,floorId:e.floorId,name:e.name.trim(),category:e.category},this.spatial.zones.push(n)),this.persistSpatial(),this.record("REST","upsertZone","PUT /api/v1/zones",n),this.pushAudit("zone.upsert",n.id,"success",n.name),structuredClone(n)}async deleteZone(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除功能区`);this.spatial.zones=this.spatial.zones.filter(n=>n.id!==e),this.persistSpatial(),this.record("REST","deleteZone",`DELETE /api/v1/zones/${e}`,{ok:!0}),this.pushAudit("zone.delete",e,"success")}async copyZonesToFloors(e,a){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权复制功能区`);const o=this.spatial.floors.find(E=>E.id===e),l=this.spatial.zones.filter(E=>E.floorId===e);if(!o||l.length===0)return 0;let c=0;for(const E of a){if(E===e)continue;const v=this.spatial.floors.find(y=>y.id===E);if(!v)continue;const f=new Set(this.spatial.zones.filter(y=>y.floorId===E).map(y=>y.name));for(const y of l){const I=y.name.replace(new RegExp(`^${o.name}\\s*`,"i"),""),S=`${v.name} ${I}`.trim();f.has(S)||(this.spatial.zones.push({id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,floorId:E,name:S,category:y.category}),f.add(S),c+=1)}}return c>0&&this.persistSpatial(),this.record("REST","copyZonesToFloors","POST /api/v1/zones/copy",{sourceFloorId:e,targetCount:a.length,added:c}),c}async getFloorDevices(e){const a=this.requireSession();if(!e)return[];if(this.activeOrgId===Qe&&!a.scope.allowedFloorIds.includes(e)){const o={code:"FORBIDDEN",status:403,message:`当前角色「${a.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,o),this.pushAudit("floor.read",e,"denied",o.message),new Error(`403 FORBIDDEN: ${o.message}`)}let n=structuredClone(this.findAllDevices().filter(o=>o.floorId===e));return a.scope.allowedZoneIds?.length&&(n=n.filter(o=>o.logicalZoneId&&a.scope.allowedZoneIds.includes(o.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${e}/devices`,{count:n.length}),n}async dispatchControlBatch(e){const a=this.requireSession();if(!a.scope.canControlDevices||!a.scope.allowedFloorIds.includes(e.floorId))throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权下发控制指令`);const n=`batch-e7f-${Date.now().toString(36)}`,o={batchId:n,floorId:e.floorId,createdBy:a.userId,createdAt:new Date().toISOString(),receipts:e.targets.map(l=>({deviceId:l.deviceId,command:l.command,targetValue:l.targetValue,status:"queued"}))};return this.batches.set(n,o),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",o,e),this.pushAudit("control.dispatch",n,"success",`下发 ${e.targets.length} 台设备`),o.receipts.forEach((l,c)=>{const E=this.devices.find(v=>v.id===l.deviceId);setTimeout(()=>{l.status="dispatched",l.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:n,deviceId:l.deviceId,status:"dispatched",at:l.dispatchedAt})},280+c*120),setTimeout(()=>{const v=new Date().toISOString();!E||E.connectivity==="offline"?(l.status="timeout",l.errorCode="GATEWAY_READBACK_TIMEOUT",l.errorMessage="设备离线，网关未收到回读确认",l.verifiedAt=v):(l.status="verified_success",l.observedValue=l.targetValue,l.verifiedAt=v,this.applyObservedTelemetry(E,l.command,l.targetValue,v)),this.emit({type:"control.receipt.updated",batchId:n,deviceId:l.deviceId,status:l.status,observedValue:l.observedValue,at:v})},900+c*220)}),structuredClone(o)}applyObservedTelemetry(e,a,n,o){a==="lighting.dimming"&&e.telemetry.dimming?(e.telemetry.dimming={...e.telemetry.dimming,value:n,collectedAt:o,stale:!1},e.telemetry.power&&(e.telemetry.power={...e.telemetry.power,value:Number(n)>0,collectedAt:o,stale:!1})):(a==="lighting.power"||a==="hvac.power")&&e.telemetry.power?e.telemetry.power={...e.telemetry.power,value:n,collectedAt:o,stale:!1}:a==="hvac.setpoint"&&e.telemetry.setpoint&&(e.telemetry.setpoint={...e.telemetry.setpoint,value:n,collectedAt:o,stale:!1}),this.emit({type:"telemetry.updated",floorId:e.floorId,deviceId:e.id,collectedAt:o,values:{[a]:n}})}async getControlBatch(e){this.requireSession();const a=this.batches.get(e);if(!a)throw new Error(`404 NOT_FOUND: 批次 ${e} 不存在`);return structuredClone(a)}async listAlarms(e){const a=this.requireSession();return this.activeOrgId!==Qe?[]:!a.scope.allowedFloorIds.includes(e)||e!==F.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(e,a){const n=this.requireSession();if(!n.scope.canManageAlarms){const l=`角色「${n.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",e,"denied",l),new Error(`403 FORBIDDEN: ${l}`)}const o=this.alarms.find(l=>l.id===e);if(!o)throw new Error(`404 NOT_FOUND: 告警 ${e} 不存在`);return o.status="acknowledged",o.acknowledgedAt=new Date().toISOString(),o.acknowledgedBy=n.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${e}/acknowledge`,o,{note:a}),this.pushAudit("alarm.acknowledge",e,"success",a),this.emit({type:"alarm.changed",floorId:o.floorId,alarmId:e,status:"acknowledged",at:o.acknowledgedAt}),structuredClone(o)}async listWorkOrders(e){const a=this.requireSession();return this.activeOrgId!==Qe?[]:!a.scope.allowedFloorIds.includes(e)||e!==F.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(e){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权创建工单`);const n=new Date().toISOString(),o={id:`wo-e7f-${Date.now().toString(36)}`,projectId:F.projectId,buildingId:F.buildingId,floorId:e.floorId,deviceId:e.deviceId??null,alarmId:e.alarmId??null,title:e.title,description:e.description,status:"open",assigneeId:null,createdAt:n,updatedAt:n};if(this.workOrders.unshift(o),e.alarmId){const l=this.alarms.find(c=>c.id===e.alarmId);l&&(l.workOrderId=o.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",o,e),this.pushAudit("work_order.create",o.id,"success",o.title),structuredClone(o)}async updateWorkOrderStatus(e,a){const n=this.requireSession();if(!n.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权流转工单`);const o=this.workOrders.find(l=>l.id===e);if(!o)throw new Error(`404 NOT_FOUND: 工单 ${e} 不存在`);return o.status=a,o.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${e}`,o,{status:a}),this.pushAudit("work_order.update",e,"success",`状态更新为 ${a}`),structuredClone(o)}async updateDevicePlanPoint(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw this.pushAudit("device.plan_point",e.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权编辑图纸标记`);const n=this.activeOrgId===Qe?this.devices.find(c=>c.id===e.deviceId):void 0,o=n?void 0:this.deployExt.extraDevices.find(c=>c.id===e.deviceId),l=n??o;if(!l)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(l.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${l.version}，请刷新后重试`);return l.planPoint={floorId:e.floorId,planVersion:e.planVersion,x:Number(e.x.toFixed(4)),y:Number(e.y.toFixed(4))},l.version+=1,n&&this.activeOrgId===Qe&&(this.deployExt.seedDevicesOverride=structuredClone(this.devices)),this.persistDeployExtensions(),this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${e.deviceId}/plan-point`,l,e),this.pushAudit("device.plan_point",e.deviceId,"success",`坐标更新 (${l.planPoint.x}, ${l.planPoint.y})`),structuredClone(l)}async updateDeviceHardwareBinding(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权修改硬件绑定`);const n=this.activeOrgId===Qe?this.devices.find(E=>E.id===e.deviceId):void 0,o=n?void 0:this.deployExt.extraDevices.find(E=>E.id===e.deviceId),l=n??o;if(!l)throw new Error(`404 NOT_FOUND: 设备 ${e.deviceId} 不存在`);if(l.version!==e.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${l.version}）`);const c=new Date().toISOString();return l.physicalInstalled=e.physicalInstalled,l.physicalVerifiedAt=e.physicalInstalled?c:null,l.hardwareBinding={gatewayId:e.gatewayId,protocol:e.protocol,networkAddress:e.networkAddress,portOrChannel:e.portOrChannel,boundAt:c,boundBy:a.displayName},l.version+=1,n&&this.activeOrgId===Qe&&(this.deployExt.seedDevicesOverride=structuredClone(this.devices)),delete this.deployExt.floorFttRecords[l.floorId],this.markEdgeSyncDirty(l.floorId),this.persistDeployExtensions(),this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${e.deviceId}/hardware-binding`,l,e),this.pushAudit("device.hardware_binding",e.deviceId,"success",`${e.protocol} ${e.networkAddress}`),structuredClone(l)}async listConnections(e){this.requireSession();const a=this.deployExt.connectionsOverride??(this.activeOrgId===Qe?this.connections:[]);return structuredClone(e?a.filter(n=>n.projectId===e):a)}async listDeliveryBatches(e){return this.requireSession(),this.activeOrgId!==Qe?structuredClone(this.deliveryBatches.filter(a=>a.floorId===e)):structuredClone(e?this.deliveryBatches.filter(a=>a.floorId===e):this.deliveryBatches)}async freezeDeliveryBatch(e,a){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权冻结交付批次`);const o=this.spatial.floors.find(A=>A.id===e),l=o?this.spatial.buildings.find(A=>A.id===o.buildingId):void 0,c=this.findAllDevices().filter(A=>A.floorId===e);if(c.length===0)throw new Error("400 BAD_REQUEST: 本层尚无已登记设备，无法生成正式交付冻结快照。");const E=c.filter(A=>A.physicalInstalled&&A.hardwareBinding).length,v=c.filter(A=>!!A.planPoint).length,f=c.filter(A=>A.connectivity==="online").length,y=this.deployExt.planChangeAlerts[e],I=this.deployExt.floorFttRecords[e],S=this.deployExt.edgeSyncByFloor[e],_=[];if(o?.plan||_.push("缺少平面底图"),v<c.length&&_.push(`尚有 ${c.length-v} 台设备未标记`),E<c.length&&_.push(`尚有 ${c.length-E} 台设备未完成硬件绑定与物理复核`),f<c.length&&_.push(`尚有 ${c.length-f} 台设备离线`),S?.dirty&&_.push("存在待同步边缘配置"),y&&_.push("更换底图后尚未复核点位"),I||_.push("尚未通过全层回读自检（FTT）"),_.length>0)throw new Error(`400 BAD_REQUEST: 尚未满足正式冻结门槛（${_.join("；")}），可先保存为「阶段留档」。`);const p=`${l?.name??"FL"}-${o?.name??e.slice(-4)}`.replace(/\s+/g,""),d=this.deliveryBatches.filter(A=>A.floorId===e&&A.status==="frozen").length,C={id:`dlv-${Date.now().toString(36)}`,projectId:l?.projectId??this.spatial.projects[0]?.id??F.projectId,floorId:e,versionTag:`${p}-v1.${d}`,deviceCount:c.length,verifiedCount:E,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:n.displayName,note:a||"全层自检通过，正式交付冻结"};return this.deliveryBatches.unshift(C),this.deployExt.deliveryBatchesOverride=structuredClone(this.deliveryBatches),this.persistDeployExtensions(),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${e}/deliveries/freeze`,C,{note:a}),this.pushAudit("delivery.freeze",C.id,"success",`${E}/${c.length} 正式冻结`),structuredClone(C)}async saveDeliveryStageSnapshot(e,a){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权生成阶段留档`);const o=this.spatial.floors.find(I=>I.id===e),l=o?this.spatial.buildings.find(I=>I.id===o.buildingId):void 0,c=this.findAllDevices().filter(I=>I.floorId===e);if(c.length===0)throw new Error("400 BAD_REQUEST: 本层尚无已登记设备，请先添加并配置设备后再留档。");const E=c.filter(I=>I.physicalInstalled&&I.hardwareBinding).length,v=`${l?.name??"FL"}-${o?.name??e.slice(-4)}`.replace(/\s+/g,""),f=this.deliveryBatches.filter(I=>I.floorId===e&&I.status==="draft").length+1,y={id:`stg-${Date.now().toString(36)}`,projectId:l?.projectId??this.spatial.projects[0]?.id??F.projectId,floorId:e,versionTag:`${v}-stage-${f}`,deviceCount:c.length,verifiedCount:E,status:"draft",frozenAt:new Date().toISOString(),frozenBy:n.displayName,note:a||"阶段性施工留档（待补齐剩余门控项后正式冻结）"};return this.deliveryBatches.unshift(y),this.deployExt.deliveryBatchesOverride=structuredClone(this.deliveryBatches),this.persistDeployExtensions(),this.pushAudit("delivery.stage_snapshot",y.id,"success",`${E}/${c.length} 阶段留档`),structuredClone(y)}async createDeploymentDevice(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权新增设备`);const n=`dev-custom-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,o={id:n,name:e.name.trim(),category:e.category,projectId:e.projectId,buildingId:e.buildingId,floorId:e.floorId,logicalZoneId:e.logicalZoneId,planPoint:null,physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}};return this.deployExt.extraDevices.push(o),e.category!=="hvac"&&e.category!=="meter"&&(this.deployExt.meshRoles[n]={proxy:!!e.defaultProxy,relay:!!e.defaultRelay,meshUuid:`mesh-${e.floorId.slice(-4)}`}),delete this.deployExt.floorFttRecords[e.floorId],this.markEdgeSyncDirty(e.floorId),this.persistDeployExtensions(),this.pushAudit("device.create",n,"success",o.name),structuredClone(o)}async updateDeploymentDevice(e,a){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权修改设备信息`);const o=this.activeOrgId===Qe?this.devices.find(E=>E.id===e):void 0,l=o?void 0:this.deployExt.extraDevices.find(E=>E.id===e),c=o??l;if(!c)throw new Error(`404 NOT_FOUND: 设备 ${e} 不存在`);return a.name!==void 0&&a.name.trim()&&(c.name=a.name.trim()),a.logicalZoneId!==void 0&&(c.logicalZoneId=a.logicalZoneId),c.version+=1,o&&this.activeOrgId===Qe&&(this.deployExt.seedDevicesOverride=structuredClone(this.devices)),this.markEdgeSyncDirty(c.floorId),this.persistDeployExtensions(),this.pushAudit("device.update",e,"success",c.name),structuredClone(c)}async deleteDeploymentDevice(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除设备`);const n=this.findAllDevices().find(o=>o.id===e);if(!n)throw new Error(`404 NOT_FOUND: 设备 ${e} 不存在`);this.devices=this.devices.filter(o=>o.id!==e),this.deployExt.extraDevices=this.deployExt.extraDevices.filter(o=>o.id!==e),this.activeOrgId===Qe&&(this.deployExt.seedDevicesOverride=structuredClone(this.devices)),this.deployExt.lightMarkers=this.deployExt.lightMarkers.filter(o=>o.deviceId!==e),this.deployExt.groups=this.deployExt.groups.map(o=>({...o,deviceIds:o.deviceIds.filter(l=>l!==e)})),delete this.deployExt.meshRoles[e],delete this.deployExt.deviceParams[e],delete this.deployExt.floorFttRecords[n.floorId],this.markEdgeSyncDirty(n.floorId),this.persistDeployExtensions(),this.pushAudit("device.delete",e,"success",n.name)}async listLightMarkers(e){return this.requireSession(),structuredClone(this.deployExt.lightMarkers.filter(a=>a.floorId===e))}async addLightMarker(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权编辑回路灯点`);const n={...e,id:`lm-${Date.now().toString(36)}`};return this.deployExt.lightMarkers.push(n),this.persistDeployExtensions(),structuredClone(n)}async deleteLightMarker(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除回路灯点`);this.deployExt.lightMarkers=this.deployExt.lightMarkers.filter(n=>n.id!==e),this.persistDeployExtensions()}async listMeshRoles(e){this.requireSession();const a=new Set(this.findAllDevices().filter(o=>o.floorId===e).map(o=>o.id)),n={};for(const[o,l]of Object.entries(this.deployExt.meshRoles))a.has(o)&&(n[o]={...l});return n}async updateMeshRole(e,a,n){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权修改蓝牙 Mesh 节点角色`);const c={...this.deployExt.meshRoles[e]??{proxy:!1,relay:!1,meshUuid:`mesh-${a.slice(-4)}`},...n};return this.deployExt.meshRoles[e]=c,this.markEdgeSyncDirty(a),this.persistDeployExtensions(),{...c}}async getEdgeSyncState(e){return this.requireSession(),{...this.deployExt.edgeSyncByFloor[e]??{version:1,dirty:!1,lastSyncedAt:null}}}async syncEdgeGateway(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权执行边缘同步`);if(!this.findAllDevices().filter(E=>E.floorId===e).some(E=>E.category==="gateway"&&E.connectivity==="online"&&!!E.hardwareBinding))throw new Error("400 BAD_REQUEST: 本层尚无已绑定且在线的边缘网关 / 蓝牙适配器，请先完成网关硬件绑定后再执行同步。");const c={version:(this.deployExt.edgeSyncByFloor[e]??{version:1}).version+1,dirty:!1,lastSyncedAt:new Date().toISOString()};return this.deployExt.edgeSyncByFloor[e]=c,this.persistDeployExtensions(),this.pushAudit("edge.sync",e,"success",`边缘基线同步至 v${c.version}`),{...c}}async getDeviceParams(e){return this.requireSession(),{...this.deployExt.deviceParams[e]??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450}}}async saveDeviceParams(e,a,n){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权下发设备参数`);return this.deployExt.deviceParams[e]={...n},this.markEdgeSyncDirty(a),this.persistDeployExtensions(),{...n}}async listDeviceGroups(e){return this.requireSession(),structuredClone(this.deployExt.groups.filter(a=>a.floorId===e))}async upsertDeviceGroup(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护设备分组`);const n=e.id?this.deployExt.groups.find(l=>l.id===e.id):void 0;let o;return n?(n.name=e.name.trim()||n.name,n.track=e.track,n.groupType=e.groupType,n.includesAdapter=e.includesAdapter,n.deviceIds=[...e.deviceIds],o=n):(o={...e,id:`grp-${Date.now().toString(36)}`,name:e.name.trim(),deviceIds:[...e.deviceIds]},this.deployExt.groups.unshift(o)),o.track==="mesh_auto"&&this.markEdgeSyncDirty(o.floorId),this.persistDeployExtensions(),this.pushAudit("device_group.upsert",o.id,"success",o.name),structuredClone(o)}async deleteDeviceGroup(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除设备分组`);const n=this.deployExt.groups.find(o=>o.id===e);this.deployExt.groups=this.deployExt.groups.filter(o=>o.id!==e),n?.track==="mesh_auto"&&this.markEdgeSyncDirty(n.floorId),this.persistDeployExtensions(),this.pushAudit("device_group.delete",e,"success")}async listFloorDocs(e){return this.requireSession(),structuredClone(this.deployExt.docs.filter(a=>a.floorId===e))}async attachFloorDoc(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权关联工程资料`);const n={...e,id:`doc-${Date.now().toString(36)}`};return this.deployExt.docs.unshift(n),this.persistDeployExtensions(),structuredClone(n)}async updateFloorDocCategory(e,a){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权修改工程资料分类`);const o=this.deployExt.docs.find(l=>l.id===e);if(!o)throw new Error(`404 NOT_FOUND: 工程资料 ${e} 不存在`);return o.category=a.trim()||o.category,this.persistDeployExtensions(),structuredClone(o)}async deleteFloorDoc(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除工程资料`);this.deployExt.docs=this.deployExt.docs.filter(n=>n.id!==e),this.persistDeployExtensions()}async upsertConnection(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护系统接入通道`);const n=this.deployExt.connectionsOverride?[...this.deployExt.connectionsOverride]:this.activeOrgId===Qe?structuredClone(this.connections):[],o=e.endpoint.trim(),l=n.find(I=>I.endpoint===o&&I.id!==e.id&&I.projectId===e.projectId);if(l)throw new Error(`端口冲突警告：局域网端点「${o}」已被通道「${l.name}」占用，请更换端口后重试。`);const c=this.findAllDevices().filter(I=>I.projectId===e.projectId&&(!e.buildingId||I.buildingId===e.buildingId)&&(!e.floorId||I.floorId===e.floorId)&&I.hardwareBinding?.protocol===e.protocol),E=c.length*4,v=c.length>0?Math.max(1,c.length):0;let f;const y=e.id?n.find(I=>I.id===e.id):void 0;if(y){const I=y.endpoint!==o;y.name=e.name.trim()||y.name,y.protocol=e.protocol,y.endpoint=o,y.buildingId=e.buildingId,y.floorId=e.floorId??"",I&&y.status!=="connected"&&(y.status="connected"),y.collectedPoints===0&&E>0&&(y.collectedPoints=E,y.calculatedPoints=v),y.lastHeartbeatAt=new Date().toISOString(),f=y}else f={id:`conn-${Date.now().toString(36)}`,projectId:e.projectId,buildingId:e.buildingId,floorId:e.floorId??"",name:e.name.trim(),protocol:e.protocol,endpoint:o,status:"connected",collectedPoints:E,calculatedPoints:v,lastHeartbeatAt:new Date().toISOString()},n.unshift(f);return this.deployExt.connectionsOverride=n,this.connections=structuredClone(n),this.persistDeployExtensions(),this.pushAudit("connection.upsert",f.id,"success",`${f.name} (${f.endpoint})`),structuredClone(f)}async deleteConnection(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除系统接入通道`);const o=(this.deployExt.connectionsOverride?[...this.deployExt.connectionsOverride]:this.activeOrgId===Qe?structuredClone(this.connections):[]).filter(l=>l.id!==e);this.deployExt.connectionsOverride=o,this.connections=structuredClone(o),this.persistDeployExtensions(),this.pushAudit("connection.delete",e,"success")}async restartEdgeService(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权重启边缘服务`);this.pushAudit("edge.restart",e,"success","已下发重启边缘服务指令")}async listPlanChangeAlerts(e){this.requireSession();const a=new Set(this.spatial.floors.filter(o=>o.buildingId===e).map(o=>o.id)),n={};for(const[o,l]of Object.entries(this.deployExt.planChangeAlerts))a.has(o)&&(n[o]={...l});return n}async clearPlanChangeAlert(e){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权确认换图复核`);delete this.deployExt.planChangeAlerts[e],this.persistDeployExtensions()}async getFloorFttRecord(e){this.requireSession();const a=this.deployExt.floorFttRecords[e];return a?{...a}:null}async recordFloorFttPass(e,a){this.requireSession();const n={floorId:e,passedAt:new Date().toISOString(),deviceCount:a};return this.deployExt.floorFttRecords[e]=n,this.persistDeployExtensions(),{...n}}async getAnalysisReport(e,a,n){this.requireSession();const o=a==="today"?1:a==="7d"?7:30,c={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*o)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*o).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(f=>f.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*o).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*o).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*o).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[e],E=a==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],v={category:e,range:a,scopeId:n,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:c.kpis,unit:c.unit,series:c.base.map((f,y)=>({label:E[y],value:Math.round(f*(e==="energy"||e==="carbon"?o/2+.5:1)),baseline:Math.round(f*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:c.base[3],unit:c.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:c.base[4],unit:c.unit,status:e==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:c.base[1],unit:c.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${e}?range=${a}&scopeId=${n}`,{kpis:v.kpis.length}),v}async listScenes(e){return this.requireSession(),this.activeOrgId!==Qe?[]:structuredClone(this.scenes)}async createScene(e){const a=this.requireSession();if(!a.scope.canEditScenes)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权创建场景`);const n={id:`scn-e7f-${Date.now().toString(36)}`,projectId:e.projectId,floorId:e.floorId,name:e.name,description:e.description,enabled:!0,scheduleSummary:"手动触发",actions:e.actions,lastExecutedAt:null};return this.scenes.unshift(n),this.record("REST","createScene","POST /api/v1/scenes",n,e),this.pushAudit("scene.create",n.id,"success",n.name),structuredClone(n)}async executeScene(e){const a=this.scenes.find(o=>o.id===e);if(!a)throw new Error(`404 NOT_FOUND: 场景 ${e} 不存在`);const n=await this.dispatchControlBatch({floorId:a.floorId,idempotencyKey:`scene-${e}-${Date.now()}`,targets:a.actions,reason:`触发场景：${a.name}`});return a.lastExecutedAt=new Date().toISOString(),a.lastBatchId=n.batchId,n}async getRuntimeSettings(e){return this.requireSession(),structuredClone({projectId:F.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(e,a,n){this.requireSession();const o=n>=this.calendar.nightGuardStart?`下班时间 ${n} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,l=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${a} - ${n}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${a} (-30m) ~ ${n} (+30m)`,conflictWarning:o},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:o}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",l,{workdayStart:a,workdayEnd:n}),l}async saveWorkCalendar(e,a,n,o){const l=this.requireSession();if(!l.scope.canEditSettings)throw this.pushAudit("settings.calendar",F.projectId,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权修改应用设置`);if(this.calendar.version!==o)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(a>=n)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:a,workdayEnd:n,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:a,workdayEnd:n,expectedVersion:o}),this.pushAudit("settings.calendar",F.projectId,"success",`${a}-${n}`),structuredClone(this.calendar)}async toggleRuntimeRule(e,a,n){const o=this.requireSession();if(!o.scope.canEditSettings)throw this.pushAudit("settings.rule_toggle",e,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权启停应用设置规则`);const l=this.rules.find(c=>c.id===e);if(!l)throw new Error(`404 NOT_FOUND: 规则 ${e} 不存在`);if(l.version!==n)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${l.version}）`);return l.enabled=a,l.version+=1,l.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${e}`,l,{enabled:a,expectedVersion:n}),this.pushAudit("settings.rule_toggle",e,"success",a?"启用":"停用"),structuredClone(l)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(e,a){if(!this.requireSession().scope.canManageMembers)throw this.pushAudit("org.invite",e,"denied","仅管理员可邀请成员"),new Error("403 FORBIDDEN: 仅管理员可邀请成员");const o=mt[a],l={userId:`inv-${Date.now().toString(36)}`,displayName:e.split("@")[0]||e,email:e,role:a,roleLabel:o.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(l),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",l,{email:e,role:a}),this.pushAudit("org.invite",e,"success",o.roleLabel),structuredClone(l)}async listAuditLogs(){if(!this.requireSession().scope.canViewAuditLogs)throw this.pushAudit("audit.read","org.audit_logs","denied","仅授权管理员可只读查阅审计日志"),new Error("403 FORBIDDEN: 仅授权管理员可查阅审计日志");return structuredClone(this.auditLogs)}async listOverrides(){const e=this.requireSession();return this.reconcileOverrides(),e.scope.canGrantOverride?structuredClone(this.overrides):structuredClone(this.overrides.filter(a=>a.targetUserId===e.userId))}async grantOverride(e){const a=this.requireSession();if(!a.scope.canGrantOverride)throw this.pushAudit("override.grant",e.targetUserId,"denied","仅机构/项目管理员可审批临时提权"),new Error("403 FORBIDDEN: 仅管理员可授予限时提权");const n=e.reason.trim();if(!n)throw new Error("400 BAD_REQUEST: 必须填写提权事由");if(![2,8,24].includes(e.durationHours))throw new Error("400 BAD_REQUEST: 提权有效期必须为 2h / 8h / 24h");const o=this.members.find(E=>E.userId===e.targetUserId);if(!o)throw new Error(`404 NOT_FOUND: 目标成员 ${e.targetUserId} 不存在`);if(o.role!=="operator")throw new Error("400 BAD_REQUEST: 仅支持为运营人员授予临时提权");const l=Date.now(),c={id:`ovr-${l.toString(36)}`,targetUserId:o.userId,targetUserName:o.displayName,module:e.module,durationHours:e.durationHours,grantedAt:new Date(l).toISOString(),expiresAt:new Date(l+e.durationHours*36e5).toISOString(),approvedBy:a.displayName,reason:n,status:"active",revokedAt:null,revokedBy:null};return this.overrides.unshift(c),this.applyOverridesToSession(),this.record("REST","grantOverride","POST /api/v1/org/overrides",c,e),this.pushAudit("override.grant",`${o.displayName} ｜ ${e.module==="deployment"?"系统部署":"应用设置"}`,"success",`${e.durationHours}h ｜ ${n}`),structuredClone(c)}async revokeOverride(e){const a=this.requireSession();if(!a.scope.canGrantOverride)throw this.pushAudit("override.revoke",e,"denied","仅管理员可收回临时提权"),new Error("403 FORBIDDEN: 仅管理员可收回限时提权");const n=this.overrides.find(o=>o.id===e);if(!n)throw new Error(`404 NOT_FOUND: 提权记录 ${e} 不存在`);return n.status="revoked",n.revokedAt=new Date().toISOString(),n.revokedBy=a.displayName,this.applyOverridesToSession(),this.record("REST","revokeOverride",`POST /api/v1/org/overrides/${e}/revoke`,n),this.pushAudit("override.revoke",`${n.targetUserName} ｜ ${n.module==="deployment"?"系统部署":"应用设置"}`,"success","管理员提前收回"),structuredClone(n)}subscribeFloorEvents(e,a){return e!==F.floorId?()=>{}:(this.listeners.add(a),()=>{this.listeners.delete(a)})}emit(e){this.record("WS",e.type,`WS /ws/v1/stream?floorId=${F.floorId}`,e),this.listeners.forEach(a=>a(e))}}const _a=["org_admin","project_admin","operator","space_user"],js=[{module:"空间总览与设备控制",org_admin:{text:"机构全范围读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"授权范围读写",tone:"online"},space_user:{text:"授权空间可控",tone:"online"}},{module:"数据分析与报表导出",org_admin:{text:"查看与导出",tone:"online"},project_admin:{text:"查看与导出",tone:"online"},operator:{text:"查看与导出",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"告警中心与运维工单",org_admin:{text:"处置与派单",tone:"online"},project_admin:{text:"处置与派单",tone:"online"},operator:{text:"处置与派单",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"智能策略与快捷场景",org_admin:{text:"编排与执行",tone:"online"},project_admin:{text:"编排与执行",tone:"online"},operator:{text:"执行与编排",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"应用设置（日历/能耗/保护）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 ｜ 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"系统部署（项目/设备/拓扑）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 ｜ 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"成员管理与限时提权审批",org_admin:{text:"机构级管理与审批",tone:"accent"},project_admin:{text:"项目内管理与审批",tone:"accent"},operator:{text:"仅查看本人提权",tone:"neutral"},space_user:{text:"不可见",tone:"neutral"}},{module:"安全与操作审计日志（SR 6.1）",org_admin:{text:"只读查阅（防篡改）",tone:"accent"},project_admin:{text:"只读查阅（防篡改）",tone:"accent"},operator:{text:"无权访问",tone:"neutral"},space_user:{text:"无权访问",tone:"neutral"}}];function we(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function La(t){return t?t.slice(0,16).replace("T"," "):"—"}function ma(t){return t==="deployment"?"系统部署":"应用设置"}async function Cs(t,e,a,n,o){const l=a.scope.canManageMembers,c=a.scope.canGrantOverride,E=a.scope.canViewAuditLogs,v=c||a.role==="operator",f=a.role!=="space_user";let y="profile",I=f?await e.listOrgMembers().catch(()=>[]):[],S=v?await e.listOverrides().catch(()=>[]):[],_=E?await e.listAuditLogs().catch(()=>[]):[],p="",d="all",C="all",A="all",B=!1,V=!1,K=a.displayName,pe=a.role==="org_admin"?"机构负责人":a.role==="project_admin"?"项目负责人":a.role==="operator"?"运行值守工程师":"园区空间用户",re="138-0013-8072",de="",ie="";const ve={profile:{label:"个人资料",icon:"user",subtitle:"管理个人联系信息、查看当前角色与空间授权范围，以及本人正在生效的临时提权。"},members:{label:"成员管理",icon:"users",subtitle:"严格落实唯一账号与独立认证（SR 1.1），按 4 级角色与空间范围维护机构成员。"},roles:{label:"角色权限",icon:"shield-check",subtitle:"遵循 IEC 62443-3-3 与等保 2.0 最小权限原则，写权限与读权限严格隔离。"},overrides:{label:"限时提权",icon:"key-round",subtitle:"按 IEC 62443-3-3 SR 2.1 RE 3 为运营人员授予限时修改权，必须记录审批人与事由，到期自动收回。"},audit:{label:"审计日志",icon:"file-text",subtitle:"按 SR 6.1 仅授权管理员只读访问，防篡改记录所有登录、控制、配置变更与越权拦截事件。"}};async function te(){const[j,h,D,G]=await Promise.all([e.getSession(),f?e.listOrgMembers().catch(()=>[]):Promise.resolve([]),v?e.listOverrides().catch(()=>[]):Promise.resolve([]),E?e.listAuditLogs().catch(()=>[]):Promise.resolve([])]);I=h,S=D,_=G,j&&(a=j,n(j)),U()}function H(){const j=["profile"];return f&&j.push("members","roles"),v&&j.push("overrides"),E&&j.push("audit"),`
      <aside class="pacom-unified-rail" aria-label="机构与账户菜单">
        <div class="pacom-unified-group">
          ${j.map(h=>{const D=ve[h],G=h==="overrides"?S.filter(g=>g.status==="active").length:0;return`
                <button type="button" class="pacom-unified-item" aria-current="${y===h}" data-anav="${h}">
                  ${ce(D.icon,16)}
                  <span>${D.label}</span>
                  ${G>0?`<span class="pacom-badge pacom-badge--accent" style="margin-left:auto;">${G}</span>`:""}
                </button>`}).join("")}
        </div>
      </aside>
    `}function J(){return y==="members"&&l?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-invite="1">+ 邀请成员</button>':y==="overrides"&&c?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-grant="1">+ 授予限时提权</button>':y==="audit"?'<span class="pacom-badge pacom-badge--neutral">只读防篡改 ｜ SR 6.1</span>':""}function be(){const j=a.scope.activeOverrides.filter(D=>D.status==="active"),h=a.scope.allowedZoneIds?.length?`授权 ${a.scope.allowedFloorIds.length} 个楼层 ｜ ${a.scope.allowedZoneIds.length} 个指定功能区`:`授权 ${a.scope.allowedProjectIds.length} 个项目 ｜ ${a.scope.allowedBuildingIds.length} 栋楼宇 ｜ ${a.scope.allowedFloorIds.length} 个楼层`;return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">个人资料与联系方式</h2>
          <span class="pacom-badge pacom-badge--accent">${we(a.roleLabel)}</span>
        </div>
        <form class="pacom-settings-card" data-role="profile-form">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">唯一身份与职务</span>
              <span class="pacom-setting-desc">账号编号：${we(a.userId)}（独立实名账号，禁止共用）</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <input class="pacom-input" style="width:140px;" name="displayName" value="${we(K)}" aria-label="显示姓名" required />
              <input class="pacom-input" style="width:170px;" name="jobTitle" value="${we(pe)}" aria-label="岗位职务" />
            </div>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">告警接收手机号</span>
              <span class="pacom-setting-desc">用于接收重要告警短信与审批通知</span>
            </div>
            <div class="pacom-setting-control">
              <input class="pacom-input" style="width:170px;" name="phone" value="${we(re)}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
              <button type="submit" class="pacom-btn pacom-btn--primary">保存资料</button>
            </div>
          </div>
        </form>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">当前权限与空间范围</h2>
          <span class="pacom-row-sub">${we(h)}</span>
        </div>
        <div class="pacom-settings-card">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">角色职责</span>
              <span class="pacom-setting-desc">${we(Wa[a.role])}</span>
            </div>
            <span class="pacom-badge pacom-badge--online">${we(a.roleLabel)}</span>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">当前写权限状态</span>
              <span class="pacom-setting-desc">写权限独立授予，绝不隐含在只读访问中</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <span class="pacom-badge ${a.scope.canControlDevices?"pacom-badge--online":"pacom-badge--neutral"}">设备控制：${a.scope.canControlDevices?"允许":"无"}</span>
              ${a.role==="space_user"?'<span class="pacom-badge pacom-badge--neutral">配置与管理模块：不可见</span>':`<span class="pacom-badge ${a.scope.canEditSettings?"pacom-badge--online":"pacom-badge--warning"}">应用设置：${a.scope.canEditSettings?"可改":"只读"}</span>
                     <span class="pacom-badge ${a.scope.canEditDeployment?"pacom-badge--online":"pacom-badge--warning"}">系统部署：${a.scope.canEditDeployment?"可改":"只读"}</span>`}
            </div>
          </div>
          ${j.length>0?j.map(D=>`
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">生效中的限时提权：${we(ma(D.module))}（${D.durationHours}h）</span>
                        <span class="pacom-setting-desc">审批人：${we(D.approvedBy)} ｜ 到期时间：${we(La(D.expiresAt))} ｜ 事由：${we(D.reason)}</span>
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
    `}function Ne(){const j=p.trim().toLowerCase(),h=I.filter(D=>d!=="all"&&D.role!==d?!1:j?`${D.displayName} ${D.email} ${D.roleLabel} ${D.scopeSummary}`.toLowerCase().includes(j):!0);return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="memberSearch" style="width:240px;" data-member-search placeholder="搜索成员姓名或授权范围…" value="${we(p)}" aria-label="搜索机构成员" />
          <select class="pacom-select" name="memberRoleFilter" data-role-filter aria-label="按角色筛选">
            <option value="all" ${d==="all"?"selected":""}>全部角色（${I.length}）</option>
            ${_a.map(D=>`<option value="${D}" ${d===D?"selected":""}>${we(dt[D])}</option>`).join("")}
          </select>
        </div>
        <span class="pacom-row-sub">显示 ${h.length} / ${I.length} 人</span>
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
              ${h.length===0?'<tr><td colspan="4"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配成员</strong><span>可调整搜索关键词或角色筛选。</span></div></td></tr>':h.map(D=>`
                        <tr>
                          <td>
                            <div style="display:flex; align-items:center; gap:10px;">
                              <span class="pacom-pop-avatar">${we(D.displayName.slice(0,1))}</span>
                              <div>
                                <div style="font-weight:450;">${we(D.displayName)}</div>
                                ${l?`<div class="pacom-row-sub">${we(D.email)}</div>`:""}
                              </div>
                            </div>
                          </td>
                          <td><span class="pacom-badge ${D.role==="org_admin"||D.role==="project_admin"?"pacom-badge--accent":"pacom-badge--neutral"}">${we(D.roleLabel)}</span></td>
                          <td><span class="pacom-row-sub">${we(D.scopeSummary)}</span></td>
                          <td>
                            <span class="pacom-badge ${D.status==="active"?"pacom-badge--online":"pacom-badge--neutral"}">
                              ${D.status==="active"?"正常":D.status==="invited"?"邀请中":"已停用"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function $e(){return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">四级标准角色说明</h2>
          <span class="pacom-row-sub">IEC 62443-3-3 SR 2.1 RE 2 ｜ 最小权限与职责分离</span>
        </div>
        <div class="pacom-settings-card">
          ${_a.map(j=>{const h=I.filter(D=>D.role===j).length;return`
              <div class="pacom-setting-row">
                <div class="pacom-setting-meta">
                  <span class="pacom-setting-title">${we(dt[j])}</span>
                  <span class="pacom-setting-desc">${we(Wa[j])}</span>
                </div>
                <span class="pacom-badge pacom-badge--neutral">${h} 人</span>
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
                ${js.map(j=>`
                  <tr>
                    <td><strong style="font-weight:450;">${we(j.module)}</strong></td>
                    <td><span class="pacom-badge pacom-badge--${j.org_admin.tone}">${we(j.org_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${j.project_admin.tone}">${we(j.project_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${j.operator.tone}">${we(j.operator.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${j.space_user.tone}">${we(j.space_user.text)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function ke(){return`
      <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="限时提权统计">
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">当前生效提权</span>
          <div class="pacom-kpi-value">${S.filter(h=>h.status==="active").length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">到期自动收回，无需人工盯守</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">可选有效期窗口</span>
          <div class="pacom-kpi-value">2 / 8 / 24<span class="pacom-kpi-unit">小时</span></div>
          <span class="pacom-kpi-delta">严格遵循 IEC 62443-3-3 SR 2.1 RE 3</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">累计审批记录</span>
          <div class="pacom-kpi-value">${S.length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">每条审批与收回同步写入审计日志</span>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">限时提权审批记录</h2>
          <span class="pacom-row-sub">${c?"可为运营人员开启「系统部署」或「应用设置」限时修改权":"展示管理员为你授予的临时提权记录"}</span>
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
                  ${c?'<th style="text-align:right;">操作</th>':""}
                </tr>
              </thead>
              <tbody>
                ${S.length===0?`<tr><td colspan="${c?6:5}"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>暂无限时提权记录</strong><span>${c?"点击右上角「+ 授予限时提权」为运营人员按需开启限时修改权。":"当前无需临时提权，「应用设置」与「系统部署」保持默认只读。"}</span></div></td></tr>`:S.map(h=>`
                          <tr>
                            <td><strong style="font-weight:450;">${we(h.targetUserName)}</strong></td>
                            <td><span class="pacom-badge pacom-badge--accent">${we(ma(h.module))}</span></td>
                            <td>
                              <div>${h.durationHours} 小时</div>
                              <div class="pacom-row-sub">至 ${we(La(h.expiresAt))}</div>
                            </td>
                            <td>
                              <div>${we(h.approvedBy)}</div>
                              <div class="pacom-row-sub">${we(h.reason)}</div>
                            </td>
                            <td>
                              <span class="pacom-badge ${h.status==="active"?"pacom-badge--online":h.status==="revoked"?"pacom-badge--warning":"pacom-badge--neutral"}">
                                ${h.status==="active"?"生效中":h.status==="revoked"?"已收回":"已到期"}
                              </span>
                            </td>
                            ${c?`<td style="text-align:right;">
                                    ${h.status==="active"?`<button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-revoke-override="${we(h.id)}">提前收回</button>`:`<span class="pacom-row-sub">${h.revokedBy?`${we(h.revokedBy)} 收回`:"已结束"}</span>`}
                                  </td>`:""}
                          </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function Ie(){const j=_.filter(h=>{if(C==="success"&&h.result!=="success"||C==="denied"&&h.result==="success")return!1;if(A!=="all"){const D=`${h.action} ${h.target}`.toLowerCase();if(A==="control"&&!D.includes("control")&&!D.includes("scene")||A==="alarm"&&!D.includes("alarm")&&!D.includes("work")||A==="deploy"&&!D.includes("deploy")&&!D.includes("plan")&&!D.includes("hardware")&&!D.includes("project")&&!D.includes("building")&&!D.includes("floor")&&!D.includes("zone")||A==="settings"&&!D.includes("settings")||A==="override"&&!D.includes("override"))return!1}return!0});return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <select class="pacom-select" name="auditActionCat" data-audit-cat aria-label="按行为类别筛选">
            <option value="all" ${A==="all"?"selected":""}>全部操作类别</option>
            <option value="override" ${A==="override"?"selected":""}>限时提权审批</option>
            <option value="control" ${A==="control"?"selected":""}>设备控制与场景</option>
            <option value="alarm" ${A==="alarm"?"selected":""}>告警与工单处置</option>
            <option value="deploy" ${A==="deploy"?"selected":""}>系统部署与空间</option>
            <option value="settings" ${A==="settings"?"selected":""}>应用设置变更</option>
          </select>
          <div class="pacom-tabs" role="tablist" aria-label="按执行结果筛选">
            <button type="button" class="pacom-tab" role="tab" aria-selected="${C==="all"}" data-audit-filter="all">全部（${_.length}）</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${C==="success"}" data-audit-filter="success">成功</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${C==="denied"}" data-audit-filter="denied">已拦截</button>
          </div>
        </div>
        <span class="pacom-row-sub">共 ${j.length} 条只读记录</span>
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
              ${j.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配审计记录</strong><span>可放宽筛选条件查看全部日志。</span></div></td></tr>':j.map(h=>`
                        <tr>
                          <td>
                            <div style="font-weight:450;">${we(h.action)}</div>
                            ${h.detail?`<div class="pacom-row-sub">${we(h.detail)}</div>`:""}
                          </td>
                          <td><code style="font-size:12px;">${we(h.target)}</code></td>
                          <td>
                            <div>${we(h.actor)}</div>
                            <div class="pacom-row-sub">${we(dt[h.role]??h.role)}</div>
                          </td>
                          <td><span class="pacom-row-sub">${we(La(h.at))}</span></td>
                          <td style="text-align:right;">
                            <span class="pacom-badge ${h.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                              ${h.result==="success"?"成功":"已拦截"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function O(){const j=[];if(B&&l){const h=a.role==="org_admin"?_a:["project_admin","operator","space_user"];j.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="邀请成员">
          <form class="dep-modal-card" data-role="invite-form" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">邀请新成员</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">成员电子邮箱（唯一登录账号）</span>
                <input class="pacom-input" name="email" type="email" placeholder="colleague@gzlab.ac.cn" required />
              </label>
              <label class="dep-field">
                <span class="dep-field-label">分配角色</span>
                <select class="pacom-select" name="role">
                  ${h.map(D=>`<option value="${D}">${we(dt[D])}</option>`).join("")}
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
        </div>`)}if(V&&c){const h=I.filter(D=>D.role==="operator");j.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="授予限时提权">
          <form class="dep-modal-card" data-role="grant-override-form" style="width:min(480px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">授予运营人员限时提权（SR 2.1 RE 3）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">目标运营人员</span>
                <select class="pacom-select" name="targetUserId" required>
                  ${h.length===0?'<option value="">暂无运营人员</option>':h.map(D=>`<option value="${we(D.userId)}">${we(D.displayName)}（${we(D.email)}）</option>`).join("")}
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
              <span class="pacom-row-sub">审批人：${we(a.displayName)}</span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${h.length===0?"disabled":""}>确认授权</button>
              </div>
            </div>
          </form>
        </div>`)}return j.join("")}function U(){const j=ve[y],h=J();t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">机构与账户</h1>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">${we(a.roleLabel)}</span>
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${H()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head ${h?"pacom-unified-head--split":""}">
                <div class="pacom-unified-head-copy">
                  <h2 class="pacom-unified-title">${j.label}</h2>
                  <p class="pacom-unified-subtitle">${j.subtitle}</p>
                </div>
                ${h?`<div class="pacom-unified-head-actions">${h}</div>`:""}
              </div>
              ${de?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${we(de)}</span></div>`:""}
              ${ie?`<div class="pacom-alert-banner">${we(ie)}</div>`:""}
              ${y==="profile"?be():y==="members"?Ne():y==="roles"?$e():y==="overrides"?ke():Ie()}
            </div>
          </div>
        </div>
      </div>
      ${O()}
    `,ae()}function ae(){t.querySelectorAll("[data-anav]").forEach(h=>{h.addEventListener("click",()=>{y=h.dataset.anav??"profile",de="",ie="",U()})}),t.querySelector('[data-role="profile-form"]')?.addEventListener("submit",h=>{h.preventDefault();const D=new FormData(h.currentTarget);K=String(D.get("displayName")??"").trim()||a.displayName,pe=String(D.get("jobTitle")??"").trim()||pe,re=String(D.get("phone")??"").trim()||re,de=`已保存个人资料：${K}（${pe}）｜ ${re}`,U()}),t.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await e.logout(),window.location.hash="#login",o()}),t.querySelector("[data-open-invite]")?.addEventListener("click",()=>{B=!0,V=!1,U()}),t.querySelector("[data-open-grant]")?.addEventListener("click",()=>{V=!0,B=!1,U()}),t.querySelectorAll("[data-close-modals]").forEach(h=>{h.addEventListener("click",()=>{B=!1,V=!1,U()})}),t.querySelectorAll("[data-modal-scrim]").forEach(h=>{h.addEventListener("click",D=>{D.target===h&&(B=!1,V=!1,U())})}),t.querySelector("[data-member-search]")?.addEventListener("input",h=>{const D=h.currentTarget,G=D.selectionStart??D.value.length;p=D.value,U();const g=t.querySelector("[data-member-search]");g&&(g.focus(),g.setSelectionRange(G,G))}),t.querySelector("[data-role-filter]")?.addEventListener("change",h=>{d=h.currentTarget.value,U()}),t.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async h=>{h.preventDefault(),ie="";const D=new FormData(h.currentTarget);try{const G=await e.inviteOrgMember(String(D.get("email")??""),String(D.get("role")));B=!1,de=`已向 ${G.email} 发送「${G.roleLabel}」邀请。`,await te()}catch(G){ie=G instanceof Error?G.message:String(G),U()}}),t.querySelector('[data-role="grant-override-form"]')?.addEventListener("submit",async h=>{h.preventDefault(),ie="";const D=new FormData(h.currentTarget);try{const G=await e.grantOverride({targetUserId:String(D.get("targetUserId")??""),module:String(D.get("module")??"deployment"),durationHours:Number(D.get("durationHours")??8),reason:String(D.get("reason")??"")});V=!1,de=`已为「${G.targetUserName}」开启「${ma(G.module)}」${G.durationHours} 小时限时修改权，到期自动收回。`,await te()}catch(G){ie=G instanceof Error?G.message:String(G),U()}}),t.querySelectorAll("[data-revoke-override]").forEach(h=>{h.addEventListener("click",async()=>{const D=h.dataset.revokeOverride;if(D){ie="";try{const G=await e.revokeOverride(D);de=`已提前收回「${G.targetUserName}」的「${ma(G.module)}」限时修改权。`,await te()}catch(G){ie=G instanceof Error?G.message:String(G),U()}}})}),t.querySelectorAll("[data-audit-filter]").forEach(h=>{h.addEventListener("click",()=>{C=h.dataset.auditFilter??"all",U()})}),t.querySelector("[data-audit-cat]")?.addEventListener("change",h=>{A=h.currentTarget.value??"all",U()})}U()}const Bt={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},Fs={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},qs={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function Ts(t){const e=`${t.title} ${t.message}`.toLowerCase();return e.includes("离线")||e.includes("modbus")||e.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":e.includes("co₂")||e.includes("co2")||e.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function Os(t){return t.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:t.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function Da(t){const e=`${t.title} ${t.message}`.toLowerCase();return e.includes("离线")||e.includes("vav")||t.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:e.includes("co₂")||e.includes("co2")||t.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function Rs(t,e,a){const n=new URLSearchParams(window.location.hash.split("?")[1]??""),o=n.get("alarm"),l=n.get("wo"),c=a.scope.canManageAlarms;let E=await e.getSpatialTree(),v=Ia(),f=!1,y="",I=[],S=[],_=[],p=l?"workorders":"alarms",d="all",C="all",A="all",B="impact",V=!1,K="",pe=o,re=l,de=null,ie=null,ve="resolved";const te=new Set,H=new Map,J=new Map,be=new Map,Ne=new Map;let $e="",ke="";function Ie(h){const D=Ne.get(h.id);if(D)return D;const G=h.id.match(/(\d+)$/),g=`WO-2026-${G?G[1]:h.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,P={estCost:"¥ 450",actualCost:h.status==="closed"?"¥ 380":"--",cmmsNo:g,assigneeGroup:"暖通运维组",tasks:[{id:`${h.id}-t1`,label:"核查设备供电与现场指示灯状态",done:h.status!=="open"},{id:`${h.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:h.status==="resolved"||h.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:h.createdAt?h.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${g}）`}]};return Ne.set(h.id,P),P}async function O(){[I,S,_]=await Promise.all([e.listAlarms(F.floorId),e.listWorkOrders(F.floorId),e.getFloorDevices(F.floorId).catch(()=>[])]),S.forEach(h=>Ie(h)),j()}function U(h){if(!h)return{name:"楼层通用",zone:"E7F",dev:null};const D=_.find(G=>G.id===h)??null;return D?{name:D.name,zone:(D.logicalZoneId?qs[D.logicalZoneId]:void 0)??"E7F",dev:D}:{name:h,zone:"E7F",dev:null}}function ae(h){const D=U(h.deviceId).dev;D&&D.connectivity==="offline"?be.set(h.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${D.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):be.set(h.id,{verdict:"pass",summary:`自检通过（PASS）：「${D?.name??h.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),pe=h.id,j()}function j(){const h=I.filter(x=>x.status==="active"&&!H.has(x.id)),D=S.filter(x=>!Ie(x).cancelled&&(x.status==="open"||x.status==="assigned"||x.status==="in_progress")),G=I.filter(x=>x.status!=="active").length+J.size,g=0,P=H.size,Q=K.trim().toLowerCase(),je=I.filter(x=>{const L=H.has(x.id);if(d==="snoozed"){if(!L)return!1}else if(d==="active"){if(x.status!=="active"||L)return!1}else if(d==="acknowledged"){if(x.status!=="acknowledged")return!1}else if(L)return!1;if(A!=="all"&&x.severity!==A)return!1;if(!Q)return!0;const Y=U(x.deviceId);return`${x.title} ${x.message} ${Y.name} ${Y.zone} ${x.deviceId}`.toLowerCase().includes(Q)}),Ye=new Map;for(const x of je){const L=`${x.title} ${x.message}`.toLowerCase(),Y=L.includes("离线")||L.includes("modbus")||L.includes("通信"),oe=V?Y?"root-gateway-modbus":x.deviceId:x.id,ge=Y?"根因：E7F 主控网关通信链路":`根因：${U(x.deviceId).name}`,Fe=Ye.get(oe)??{rootLabel:ge,items:[]};Fe.items.push(x),Ye.set(oe,Fe)}const Me=Array.from(Ye.values());B==="impact"&&Me.sort((x,L)=>Da(L.items[0]).costYuan-Da(x.items[0]).costYuan);const Ae=S.filter(x=>{const L=Ie(x);if(C==="cancelled"){if(!L.cancelled)return!1}else if(L.cancelled||C==="open"&&(x.status==="resolved"||x.status==="closed")||C==="resolved"&&x.status!=="resolved"||C==="closed"&&x.status!=="closed")return!1;if(!Q)return!0;const Y=U(x.deviceId);return`${x.title} ${x.description} ${x.id} ${L.cmmsNo} ${Y.name}`.toLowerCase().includes(Q)});t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${Ea({tree:E,session:a,scope:v,activeAlarmCount:h.length,isOpen:f,searchKeyword:y})}
            </div>

            <div class="pacom-header-meta">
              ${p==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${V}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="pacom-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${a.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${a.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="pacom-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${ce("refresh-cw",14)}</button>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="告警中心视图">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${p==="alarms"}" data-main-tab="alarms">实时告警（${I.length-P}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${p==="workorders"}" data-main-tab="workorders">运维工单（${S.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${p==="alarms"&&d==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${h.length}<span class="pacom-kpi-unit">条 ｜ 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${p==="workorders"&&C==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${D.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${p==="alarms"&&d==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">已闭环生效</span>
              <div class="pacom-kpi-value">${G}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="pacom-kpi-cell">
              <span class="pacom-kpi-label">关单复发待查</span>
              <div class="pacom-kpi-value" style="color:var(--pacom-status-online);">${g}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${$e?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${s($e)}</span></div>`:""}
          ${ke?`<div class="pacom-alert-banner">${s(ke)}</div>`:""}

          ${p==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${s(K)}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${A==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${A==="critical"?"selected":""}>严重</option>
                      <option value="major" ${A==="major"?"selected":""}>重要</option>
                      <option value="minor" ${A==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${B==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${B==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${d==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${d==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${d==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${d==="snoozed"}" data-status-pill="snoozed">已忽略（${P}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${te.size>0&&a.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${te.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${Me.length} 项</span>
                  </div>
                </div>
                ${Me.length===0?'<div class="pacom-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${Me.map(x=>{const L=x.items[0],Y=Fs[L.severity]??{label:L.severity,cls:"pacom-badge--neutral"},oe=U(L.deviceId),ge=Os(L),Fe=Da(L),lt=pe===L.id,Ue=H.get(L.id),Ce=!!Ue,bt=te.has(L.id),et=be.get(L.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${s(L.id)}" data-check-alarm="${s(L.id)}" ${bt?"checked":""} ${!c||L.status!=="active"||Ce?"disabled":""} aria-label="选择 ${s(L.title)}" />
                                  </td>
                                  <td><span class="pacom-badge ${Y.cls}">${s(Y.label)}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${s(L.title)}</span>
                                      ${V?`<span class="pacom-badge pacom-badge--accent">${s(x.rootLabel)}${x.items.length>1?` ｜ 影响 ${x.items.length} 项`:""}</span>`:""}
                                      ${et?`<span class="pacom-badge ${et.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${s(et.verdict.toUpperCase())}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${s(L.message)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${s(oe.name)}</div>
                                    <div class="pacom-row-sub">${s(oe.zone)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${s(Fe.costLabel)}</div>
                                    <div class="pacom-row-sub">${s(Fe.comfortLabel)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${s(ge.duration)}</div>
                                    <div class="pacom-row-sub" style="color:${ge.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${s(ge.trend)}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${Ce?"pacom-badge--neutral":L.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${Ce?`忽略 ${s(Ue?.duration)}`:L.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${Ce?`<button class="pacom-btn" data-unsnooze="${s(L.id)}" ${c?"":"disabled"}>恢复监控</button>`:`
                                            ${L.status==="active"?`<button class="pacom-btn" data-mark-actioned="${s(L.id)}" ${c?"":"disabled"}>标记已处置</button>`:""}
                                            ${L.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${s(L.id)}" ${c?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${s(L.id)}">${lt?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${lt?`
                                    <tr class="pacom-table-detail-row">
                                      <td colspan="8">
                                        <div class="pacom-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${s(Ts(L))}
                                            </div>
                                            ${Ue?`<div class="pacom-info-banner">忽略周期：${s(Ue.duration)} ｜ 原因备注：${s(Ue.reason)}</div>`:""}
                                            ${et?`
                                                <div class="pacom-banner ${et.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${s(et.summary)}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${et.steps.map(vt=>`<span>${s(vt)}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${s(L.id)}</code> ｜ 设备编号 <code>${s(L.deviceId)}</code> ｜ 关联工单 ${s(L.workOrderId??"无")}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${s(L.id)}">单机自检（FTT）</button>
                                              ${!Ce&&L.status==="active"?`<button class="pacom-btn" data-open-snooze="${s(L.id)}" ${c?"":"disabled"}>限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${s(L.deviceId)}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${s(L.deviceId)}">定位设备 →</button>
                                            </div>
                                            ${de===L.id?`
                                                <form data-snooze-form="${s(L.id)}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
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
                                                    <button class="pacom-btn pacom-btn--primary" type="submit" style="height:28px;" ${c?"":"disabled"}>确认忽略</button>
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
              ${(()=>{const x=re?S.find(L=>L.id===re)??null:null;if(x){const L=U(x.deviceId),Y=Ie(x),oe=!!(!c||Y.cancelled||x.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${s(x.id)}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${s(x.title)}</h2>
                        <span class="pacom-badge pacom-badge--accent">${s(Y.cmmsNo)}</span>
                        ${Y.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${s(x.id)}" data-wo-status="${s(x.id)}" aria-label="更新工单状态" ${oe?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(ge=>`<option value="${ge}" ${x.status===ge?"selected":""}>${Bt[ge]}</option>`).join("")}
                          <option value="cancelled" ${Y.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${ie===x.id?`
                        <form data-close-wo-form="${s(x.id)}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${Bt[ve]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${s(Y.cause??"")}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${s(Y.solution??"")}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${s(Y.actualCost==="--"?"":Y.actualCost)}" />
                          </div>
                          <div style="display:flex; justify-content:flex-end; gap:8px;">
                            <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                            <button class="pacom-btn pacom-btn--primary" type="submit" ${c?"":"disabled"}>保存并更新状态</button>
                          </div>
                        </form>`:""}
                    <div class="pacom-wo-workbench">
                      <div style="display:flex; flex-direction:column; gap:14px;">
                        <div class="pacom-card" style="gap:10px;">
                          <strong style="font-size:14px; font-weight:500;">工单描述与现场检查任务清单</strong>
                          <div class="pacom-row-sub">${s(x.description)}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${Y.tasks.map(ge=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${s(ge.id)}" data-wo-task="${s(x.id)}" data-task-id="${s(ge.id)}" ${ge.done?"checked":""} ${oe?"disabled":""} />
                                    <span>${s(ge.label)}</span>
                                  </span>
                                  ${ge.unit?`<span class="pacom-row-sub">实测：${s(ge.reading??"--")} ${s(ge.unit)}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${Y.history.map(ge=>`<span>• <span class="pacom-row-sub">${s(ge.at)}</span> — ${s(ge.text)}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${s(x.id)}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${s(Y.cmmsNo)}</code> ｜ 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${s(L.name)}（${s(L.zone)}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${s(Y.assigneeGroup)}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${s(Y.estCost)} / 实际 ${s(Y.actualCost)}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${s(Y.cause??"待完单填写")}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${s(Y.solution??"待完单填写")}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${s(x.deviceId??"")}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${s(x.deviceId??"")}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="pacom-table-card">
                  <div class="pacom-table-toolbar">
                    <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${s(K)}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${C==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${C==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${C==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${C==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${C==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${Ae.length} 条工单</span>
                  </div>
                  ${Ae.length===0?'<div class="pacom-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${Ae.map(L=>{const Y=U(L.deviceId),oe=Ie(L),ge=!!(!c||oe.cancelled||L.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${s(L.title)}</span>
                                        ${oe.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${s(L.description)} ｜ <code>${s(L.id)}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${s(Y.name)}</div>
                                      <div class="pacom-row-sub">${s(Y.zone)}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${s(oe.cmmsNo)}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${s(oe.assigneeGroup)} ｜ 预估 ${s(oe.estCost)}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${s(L.id)}" data-wo-status="${s(L.id)}" aria-label="更新工单状态" ${ge?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(Fe=>`<option value="${Fe}" ${L.status===Fe?"selected":""}>${Bt[Fe]}</option>`).join("")}
                                          <option value="cancelled" ${oe.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${s(L.id)}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${ie===L.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${s(L.id)}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${Bt[ve]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${s(oe.cause??"")}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${s(oe.solution??"")}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${s(oe.actualCost==="--"?"":oe.actualCost)}" />
                                            </div>
                                            <div style="display:flex; justify-content:flex-end; gap:8px;">
                                              <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                                              <button class="pacom-btn pacom-btn--primary" type="submit" ${c?"":"disabled"}>保存并更新状态</button>
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
    `,ka(t,{onToggle:()=>{f=!f,j(),f&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:x=>{y=x,j();const L=t.querySelector("[data-global-space-search]");L&&(L.focus(),L.setSelectionRange(x.length,x.length))},onPick:x=>{v=x,f=!1,j()}}),t.querySelectorAll("[data-main-tab]").forEach(x=>{x.addEventListener("click",()=>{p=x.dataset.mainTab??"alarms",$e="",j()})}),t.querySelectorAll("[data-kpi-filter]").forEach(x=>{x.addEventListener("click",()=>{const L=x.dataset.kpiFilter;$e="",L==="workorders"?(p="workorders",C=C==="open"?"all":"open"):(L==="active"||L==="acknowledged")&&(p="alarms",d=d===L?"all":L),j()})}),t.querySelectorAll("[data-status-pill]").forEach(x=>{x.addEventListener("click",()=>{d=x.dataset.statusPill??"all",j()})}),t.querySelectorAll("[data-wo-pill]").forEach(x=>{x.addEventListener("click",()=>{C=x.dataset.woPill??"all",j()})}),t.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{$e="",O()}),t.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{V=!V,j()}),t.querySelector("[data-severity-filter]")?.addEventListener("change",x=>{A=x.currentTarget.value,j()}),t.querySelector("[data-alarm-sort]")?.addEventListener("change",x=>{B=x.currentTarget.value??"impact",j()}),t.querySelector("[data-alarm-search]")?.addEventListener("input",x=>{const L=x.currentTarget,Y=L.selectionStart??L.value.length;K=L.value,j();const oe=t.querySelector("[data-alarm-search]");oe&&(oe.focus(),oe.setSelectionRange(Y,Y))}),t.querySelectorAll("[data-check-alarm]").forEach(x=>{x.addEventListener("change",()=>{if(!c)return;const L=x.dataset.checkAlarm;L&&(x.checked?te.add(L):te.delete(L),j())})}),t.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{if(!c)return;ke="";const x=Array.from(te);try{for(const L of x)await e.acknowledgeAlarm(L,"告警中心批量确认"),J.set(L,"批量确认处置");te.clear(),$e=`已批量确认 ${x.length} 条告警，未来 24 小时持续校验无复发。`,await O()}catch(L){ke=L instanceof Error?L.message:String(L),j()}}),t.querySelectorAll("[data-expand-alarm]").forEach(x=>{x.addEventListener("click",()=>{const L=x.dataset.expandAlarm??null;pe=pe===L?null:L,de=null,j()})}),t.querySelectorAll("[data-expand-wo]").forEach(x=>{x.addEventListener("click",()=>{const L=x.dataset.expandWo??null;re=re===L?null:L,j()})}),t.querySelectorAll("[data-run-ftt]").forEach(x=>{x.addEventListener("click",()=>{const L=I.find(Y=>Y.id===x.dataset.runFtt);L&&ae(L)})}),t.querySelectorAll("[data-open-snooze]").forEach(x=>{x.addEventListener("click",()=>{c&&(de=x.dataset.openSnooze??null,j())})}),t.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{de=null,j()}),t.querySelectorAll("[data-snooze-form]").forEach(x=>{x.addEventListener("submit",L=>{if(L.preventDefault(),!c)return;const Y=x.dataset.snoozeForm;if(!Y)return;const oe=new FormData(x),ge=String(oe.get("duration")??"24h"),Fe=String(oe.get("reason")??"").trim()||"现场核查中";H.set(Y,{duration:ge,reason:Fe}),te.delete(Y),de=null,$e=`已限时忽略该告警（${ge} ｜ ${Fe}），可在「已忽略」页签中随时恢复。`,j()})}),t.querySelectorAll("[data-unsnooze]").forEach(x=>{x.addEventListener("click",()=>{if(!c)return;const L=x.dataset.unsnooze;L&&(H.delete(L),$e="已恢复该告警的实时监控。",j())})}),t.querySelectorAll("[data-go-ts]").forEach(x=>{x.addEventListener("click",()=>{const L=x.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(L)}`})}),t.querySelectorAll("[data-locate-home]").forEach(x=>{x.addEventListener("click",()=>{const L=x.dataset.locateHome??"";window.location.hash=L?`#home?device=${encodeURIComponent(L)}`:"#home"})}),t.querySelectorAll("[data-mark-actioned]").forEach(x=>{x.addEventListener("click",async()=>{if(!c)return;ke="";const L=x.dataset.markActioned;try{await e.acknowledgeAlarm(L,"现场自处理完成（Mark Actioned）"),J.set(L,"现场自处理完成"),te.delete(L),$e="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await O()}catch(Y){ke=Y instanceof Error?Y.message:String(Y),j()}})}),t.querySelectorAll("[data-to-wo]").forEach(x=>{x.addEventListener("click",async()=>{if(!c)return;ke="";const L=I.find(Y=>Y.id===x.dataset.toWo);if(L)try{await e.createWorkOrder({floorId:L.floorId,deviceId:L.deviceId,alarmId:L.id,title:`处置告警：${L.title}`,description:L.message}),$e=`已将「${L.title}」转为运维工单并同步 CMMS。`,await O()}catch(Y){ke=Y instanceof Error?Y.message:String(Y),j()}})}),t.querySelectorAll("[data-wo-status]").forEach(x=>{x.addEventListener("change",async()=>{if(!c)return;const L=x.dataset.woStatus,Y=x.value;if(ke="",Y==="cancelled"){const oe=S.find(ge=>ge.id===L);if(oe){const ge=Ie(oe);ge.cancelled=!0,ge.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),$e="工单已移入「已取消」分类并锁定编辑。",j()}return}if(Y==="resolved"||Y==="closed"){ie=L,ve=Y,j();return}try{await e.updateWorkOrderStatus(L,Y);const oe=S.find(ge=>ge.id===L);oe&&Ie(oe).history.unshift({at:"刚刚",text:`状态变更为「${Bt[Y]}」`}),$e="工单状态已更新并写入审计日志。",await O()}catch(oe){ke=oe instanceof Error?oe.message:String(oe),await O()}})}),t.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{ie=null,j()}),t.querySelectorAll("[data-close-wo-form]").forEach(x=>{x.addEventListener("submit",async L=>{if(L.preventDefault(),!c)return;const Y=x.dataset.closeWoForm,oe=new FormData(x),ge=String(oe.get("cause")??"").trim(),Fe=String(oe.get("solution")??"").trim(),lt=String(oe.get("actualCost")??"").trim();try{await e.updateWorkOrderStatus(Y,ve);const Ue=S.find(Ce=>Ce.id===Y);if(Ue){const Ce=Ie(Ue);Ce.cause=ge,Ce.solution=Fe,lt&&(Ce.actualCost=lt),Ce.history.unshift({at:"刚刚",text:`流转至「${Bt[ve]}」｜ 根因：${ge}`})}ie=null,re=Y,$e=`工单已更新为「${Bt[ve]}」，根因与方案已沉淀归档。`,await O()}catch(Ue){ke=Ue instanceof Error?Ue.message:String(Ue),j()}})}),t.querySelectorAll("[data-wo-task]").forEach(x=>{x.addEventListener("change",()=>{if(!c)return;const L=S.find(ge=>ge.id===x.dataset.woTask);if(!L)return;const oe=Ie(L).tasks.find(ge=>ge.id===x.dataset.taskId);oe&&(oe.done=x.checked),j()})})}await O()}function Ms(t){return{spatial:!!(t.createProject&&t.upsertBuilding&&t.upsertFloor&&t.upsertZone),createDevice:!!t.createDeploymentDevice,manageDevice:!!(t.updateDeploymentDevice&&t.deleteDeploymentDevice),lightMarkers:!!(t.addLightMarker&&t.deleteLightMarker),meshRoles:!!t.updateMeshRole,edgeSync:!!t.syncEdgeGateway,deviceParams:!!t.saveDeviceParams,deviceGroups:!!(t.upsertDeviceGroup&&t.deleteDeviceGroup),floorDocs:!!t.attachFloorDoc,manageDocs:!!(t.deleteFloorDoc&&t.updateFloorDocCategory),manageConnections:!!(t.upsertConnection&&t.deleteConnection),restartEdge:!!t.restartEdgeService,stageSnapshot:!!t.saveDeliveryStageSnapshot}}const Bs={project_config:{title:"项目配置",subtitle:"管理项目档案、楼宇结构、楼层 2D 平面底图、功能区划分与工程资料。",granularity:"project"},device_marking:{title:"设备标记",subtitle:"在纯白 2D 平面底图上完成设备点位标记、回路灯点布置与硬件绑定。",granularity:"floor"},device_list:{title:"设备列表",subtitle:"核查本层四态设备清单，配置硬件绑定、自治参数或执行单机与全层自检。",granularity:"floor"},device_groups:{title:"设备分组",subtitle:"维护端侧蓝牙 Mesh 自治联动组与云端业务分组，支持成员编排与群组试控。",granularity:"floor"},device_network:{title:"设备网络",subtitle:"查看无线蓝牙 Mesh 通信树与业务供能流向，执行网络体检与边缘网关同步。",granularity:"floor"},connections:{title:"系统接入",subtitle:"管理边缘网关与暖通、电表、照明等异构子系统接入通道与采集质量。",granularity:"project"},acceptance:{title:"交付验收",subtitle:"按 5 步部署门控核验各楼层就绪状态，执行全层自检并冻结交付基线快照。",granularity:"building"}},es={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},zs={frozen:"已冻结",draft:"草稿",delivered:"已交付"},la={gateway:"网关 / 适配器",lighting:"照明回路",hvac:"暖通空调",sensor:"环境传感",meter:"智能电表"},ta={lab:"实验区",office:"办公区",meeting:"会议室",corridor:"走廊 / 公区",utility:"机房 / 后勤",outdoor:"露台 / 活动区"},Oa=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"建议每层启用 2–3 个 Proxy，空旷 20–30m 按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 防止广播干扰，自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度调光，自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙 / 拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关有线接入，不加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485 / 通讯管理机有线接入"}],Ps={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}},$s=[{key:"lab_std",label:"标准实验层",items:[{suffix:"东侧实验区",category:"lab"},{suffix:"西侧实验区",category:"lab"},{suffix:"核心走廊与管井",category:"corridor"}]},{key:"office_std",label:"标准办公层",items:[{suffix:"开放办公区",category:"office"},{suffix:"会议室",category:"meeting"},{suffix:"公共走廊与茶水区",category:"corridor"}]},{key:"lobby_1f",label:"首层大堂",items:[{suffix:"入口大堂与展厅",category:"corridor"},{suffix:"配电与后勤机房",category:"utility"}]},{key:"roof_plant",label:"屋面设备层",items:[{suffix:"空调主机区",category:"utility"},{suffix:"水泵与排风设备区",category:"utility"}]}],Ra=["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"];function Ut(t){return t.category!=="hvac"&&t.category!=="meter"}function va(t){const e=t.trim().toUpperCase();if(e==="RF"||e==="R"||e==="ROOF"||e.includes("屋面")||e.includes("屋顶")||e.includes("天面"))return 999;const a=e.match(/(-?\d+)/);if(!a)return 0;const n=Number(a[1]);return e.startsWith("B")||e.includes("地下")||e.includes("负")?-Math.abs(n):n}const ts={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,十一:11,十二:12,十三:13,十四:14,十五:15,十六:16,十七:17,十八:18,十九:19,二十:20,二十一:21,二十二:22,二十三:23,二十四:24,二十五:25},Ma={mesh_auto:["灯光联动组（传感-面板）","调光器群控组"],cloud_biz:["空调业务组","行政 / 标牌管控组","跨区综合管控组"]},Ns=["竣工图纸","回路图纸","点位清单","设备手册","调试记录","其他资料"];function Us(t){const e=t.toLowerCase();return e.endsWith(".xlsx")||e.endsWith(".xls")||e.endsWith(".csv")?"点位清单":e.endsWith(".doc")||e.endsWith(".docx")?"设备手册":e.endsWith(".dwg")||e.endsWith(".dxf")||e.endsWith(".png")||e.endsWith(".jpg")||e.endsWith(".jpeg")||e.endsWith(".webp")?"竣工图纸":e.endsWith(".pdf")?e.includes("手册")||e.includes("维保")?"设备手册":e.includes("回路")?"回路图纸":"竣工图纸":"其他资料"}function Ba(t,e){const a=e<=2?Math.max(1,e):e<=4?2:3,n=Math.max(1,Math.ceil(e/a)),o=t%a,l=Math.floor(t/a),c=12,E=18,v=4,f=100-c*2-v*(a-1),y=100-E*2-v*(n-1),I=Math.max(18,Math.round(f/a)),S=Math.max(20,Math.round(y/n));return{left:Math.min(80,Math.round(c+o*(I+v))),top:Math.min(76,Math.round(E+l*(S+v))),width:I,height:S}}function Nt(t){const a=t.trim().replace(/\.[a-z0-9]{1,6}$/i,""),n=a.toUpperCase();if(/(?:^|[^A-Z0-9])(RF|ROOF)(?:[^A-Z0-9]|$)/.test(n)||/屋面|屋顶|天面/.test(a))return"RF";const o=n.match(/(?:^|[^A-Z0-9])B0*(\d+)F?(?:[^A-Z0-9]|$)/);if(o)return`B${Number(o[1])}`;const l=a.match(/(?:地下|负)(0*\d+|[一二三四五六七八九十]+)(?:层|楼)?/);if(l){const f=/^\d+$/.test(l[1])?Number(l[1]):ts[l[1]];if(f)return`B${f}`}if(/首层|一层/.test(a))return"1F";const c=n.match(/(?:^|[^A-Z0-9])0*(\d+)F(?:[^A-Z0-9]|$)/);if(c)return`${Number(c[1])}F`;const E=n.match(/(?:^|[^A-Z0-9])F0*(\d+)(?:[^A-Z0-9]|$)/);if(E)return`${Number(E[1])}F`;const v=a.match(/(0*\d+|[一二三四五六七八九十]+)(?:层|楼)/);if(v){const f=/^\d+$/.test(v[1])?Number(v[1]):ts[v[1]];if(f)return`${f}F`}return null}function zt(t){return new Promise((e,a)=>{const n=new FileReader;n.onload=()=>typeof n.result=="string"?e(n.result):a(new Error("无法读取图片内容")),n.onerror=()=>a(new Error(`读取文件「${t.name}」失败`)),n.readAsDataURL(t)})}function as(t){const e=t.name.match(/\b((?:FCU|VAV|AHU|PAU|GW|AP|SW|DM)-\d+)\b/i);if(e?.[1])return e[1].toUpperCase();const a=t.name.replace(/^[A-Z]?\d+F\s*|[A-Z]?RF\s*|[A-Z]?B\d+\s*/i,"").trim()||t.name.trim();return a.length>9?`${a.slice(0,8)}…`:a}function Sa(t,e){const a=t.tree.floors.find(_=>_.id===e),n=t.buildingDevicesByFloor.get(e)??(e===t.activeFloorId?t.floorDevices:[]),o=!!a?.plan,l=n.filter(_=>!!_.planPoint).length,c=n.filter(_=>_.physicalInstalled&&!!_.hardwareBinding).length,E=n.filter(_=>_.connectivity==="online").length,f=!!(t.edgeSyncByFloor[e]??(e===t.activeFloorId?t.edgeSync:void 0))?.dirty,y=t.planChangeAlerts[e]??null,I=t.floorFttRecords[e]??null,S=[];return o||S.push("待上传平面底图"),n.length===0&&S.push("本层尚无登记设备"),n.length>0&&l<n.length&&S.push(`未标记 ${n.length-l} 台`),n.length>0&&c<n.length&&S.push(`待绑定或复核 ${n.length-c} 台`),n.length>0&&E<n.length&&S.push(`离线 ${n.length-E} 台`),f&&S.push("待同步边缘配置"),y&&S.push("换图后待核对点位"),n.length>0&&!I&&S.push("尚未通过全层自检（FTT）"),{hasPlan:o,deviceCount:n.length,placedCount:l,boundVerifiedCount:c,onlineCount:E,syncDirty:f,planAlert:y,fttRecord:I,blockers:S,readyForFormalFreeze:n.length>0&&S.length===0}}function Vs(t,e){const a=t.status!=="connected",n=e.filter(o=>o.hardwareBinding?.protocol===t.protocol);return n.length>0?n.map(o=>{const l=o.connectivity==="offline"||a;return{pointName:o.category==="hvac"?"送风温度 / 阀门开度":o.category==="lighting"?"回路开关 / 亮度反馈":o.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:o.name,value:l?"无上报":o.category==="hvac"?"23.4°C ｜ 62%":o.category==="lighting"?"开启 ｜ 80%":o.category==="sensor"?"23.2°C ｜ 640 ppm":"负载 24% ｜ 18ms",interval:"60s",lastSeen:l?"46 分钟前":"12 秒前",quality:l?o.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${t.protocol.toUpperCase()} 采集通道汇总点`,deviceName:t.name,value:a?"采样延迟":"正常上报",interval:"60s",lastSeen:a?"38 分钟前":"9 秒前",quality:a?"delayed":"online"}]}function xa(t,e){const a=new Set(e.map(o=>Nt(o.name)??o.name.toUpperCase())),n=[];for(let o=1;o<=t.aboveFloors;o+=1){const l=`${o}F`;a.has(l)||n.push({kind:"above",level:o,name:l})}for(let o=1;o<=t.belowFloors;o+=1){const l=`B${o}`;a.has(l)||n.push({kind:"below",level:-o,name:l})}return t.hasRoof&&!a.has("RF")&&n.push({kind:"roof",level:99,name:"RF"}),n}function Et(t,e){return`<button type="button" class="dep-info-btn" data-dep-info="${s(e)}" aria-label="${s(t)}" aria-expanded="false">${ce("info",14)}</button>`}function Vt(t,e,a="layers"){const n=!t||!e,o=t?e?"":"待后端空间建档接口对接":"当前角色为只读权限";return`
    <div class="dep-empty-card">
      <div class="dep-empty-icon">${ce(a,20)}</div>
      <strong style="font-size:16px; line-height:24px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
      <span class="pacom-row-sub" style="max-width:460px;">按「创建项目 → 添加楼宇与楼层 → 上传 2D 平面底图」完成空间建档后，即可开展设备标记、组网同步与交付验收。</span>
      <div class="dep-empty-steps">
        <span>1. 创建项目</span>
        <span>→</span>
        <span>2. 添加楼宇与楼层</span>
        <span>→</span>
        <span>3. 上传平面底图</span>
      </div>
      <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${n?`disabled title="${s(o)}"`:""}>+ 创建第一个项目</button>
    </div>`}function Hs(t,e,a){return t?e?"":`disabled title="${s(a)}"`:'disabled title="当前角色为只读权限"'}function Gs(t){const{tree:e,canEdit:a,caps:n,connections:o}=t;if(e.projects.length===0)return Vt(a,n.spatial,"plug");const l=Hs(a,n.manageConnections,"待后端系统接入写入接口对接"),c=o.reduce((p,d)=>p+d.collectedPoints,0),E=o.reduce((p,d)=>p+d.calculatedPoints,0),v=o.filter(p=>p.status==="connected").length,f=o.filter(p=>p.status!=="connected"),y=t.connSearch.trim().toLowerCase(),I=o.filter(p=>!(t.connStatusFilter!=="all"&&p.status!==t.connStatusFilter||y&&!`${p.name} ${p.protocol} ${p.endpoint}`.toLowerCase().includes(y))),S=Array.from(t.buildingDevicesByFloor.values()).flat(),_=S.length>0?S:t.floorDevices;return`
    <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">已连通通道</span>
        <div class="pacom-kpi-value">${v}<span class="pacom-kpi-unit">/ ${o.length}</span></div>
        <span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">采集健康度</span>
        <div class="pacom-kpi-value">${o.length?`${Math.round(v/o.length*100)}<span class="pacom-kpi-unit">%</span>`:"—"}</div>
        <span class="pacom-kpi-delta">${o.length?"区分网关断流与末端真故障":"尚未配置接入通道"}</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">原始采集点 ${Et("原始采集点说明","直接通过 BACnet / Modbus / DALI / MQTT 等协议从现场网关或子系统读取的实时遥测点位数量。")}</span>
        <div class="pacom-kpi-value">${c}<span class="pacom-kpi-unit">点</span></div>
        <span class="pacom-kpi-delta">协议直采实时遥测</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">衍生计算点 ${Et("衍生计算点说明","基于原始采集点聚合计算生成的虚拟指标（如分区平均温度、能耗累计、碳排换算），与原始点位独立计数。")}</span>
        <div class="pacom-kpi-value">${E}<span class="pacom-kpi-unit">点</span></div>
        <span class="pacom-kpi-delta">能耗与聚合虚拟点位</span>
      </div>
    </div>

    ${f.length>0?`<div class="pacom-banner pacom-banner--critical">
            <div class="pacom-banner-text">
              <span class="pacom-banner-title">检测到 ${f.length} 条采集通道通信降级（${s(f.map(p=>p.name).join("、"))}）</span>
              <span class="pacom-banner-sub">建议优先核查局域网 UDP/TCP 端口冲突、RS485 终端电阻与从站地址。</span>
            </div>
          </div>`:""}

    <div class="pacom-log-toolbar">
      <div class="pacom-log-filters">
        <div class="pacom-tabs" role="tablist" aria-label="系统接入视图切换">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${t.connViewMode==="list"}" data-conn-view="list">连接清单</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${t.connViewMode==="topology"}" data-conn-view="topology">接入拓扑</button>
        </div>
        <input class="pacom-input" name="connSearch" style="width:220px;" data-conn-search placeholder="搜索通道名称、协议或端点…" value="${s(t.connSearch)}" aria-label="搜索系统接入通道" />
        <select class="pacom-select" name="connStatusFilter" data-conn-status-filter aria-label="按连通状态筛选">
          <option value="all" ${t.connStatusFilter==="all"?"selected":""}>全部状态（${o.length}）</option>
          <option value="connected" ${t.connStatusFilter==="connected"?"selected":""}>已连通（${v}）</option>
          <option value="degraded" ${t.connStatusFilter==="degraded"?"selected":""}>通信降级（${o.filter(p=>p.status==="degraded").length}）</option>
          <option value="disconnected" ${t.connStatusFilter==="disconnected"?"selected":""}>已断开（${o.filter(p=>p.status==="disconnected").length}）</option>
        </select>
      </div>
      <span class="pacom-row-sub">显示 ${I.length} / ${o.length} 条通道</span>
    </div>

    ${t.connViewMode==="list"?`
        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead>
                <tr>
                  <th>通道名称</th>
                  <th>协议</th>
                  <th>接入端点</th>
                  <th>点位规模</th>
                  <th>健康状态</th>
                  <th style="text-align:right;">操作</th>
                </tr>
              </thead>
              <tbody>
                ${I.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:36px 16px;"><strong>暂无匹配接入通道</strong><span>可调整筛选条件或点击右上角「+ 新增接入通道」。</span></div></td></tr>':I.map(p=>{const d=es[p.status]??{label:p.status,cls:"pacom-badge--neutral"},C=p.status==="connected"?98:p.status==="degraded"?62:0,A=t.expandedConnId===p.id,B=A?Vs(p,_):[],V=p.buildingId?e.buildings.find(re=>re.id===p.buildingId)?.name:"",K=p.floorId?e.floors.find(re=>re.id===p.floorId)?.name:"",pe=V?K?`${V} ${K}`:`${V} 整栋`:"全项目";return`
                            <tr>
                              <td>
                                <strong>${s(p.name)}</strong>
                                <div class="pacom-row-sub">${s(pe)}</div>
                              </td>
                              <td><span class="pacom-badge pacom-badge--neutral">${p.protocol.toUpperCase()}</span></td>
                              <td><code style="font-size:12px;">${s(p.endpoint)}</code></td>
                              <td>${p.collectedPoints===0&&p.calculatedPoints===0?'<span class="pacom-row-sub">待映射点位</span>':`采集 ${p.collectedPoints} ｜ 计算 ${p.calculatedPoints}`}</td>
                              <td>
                                <div style="display:inline-flex; align-items:center; gap:8px;">
                                  <span class="pacom-badge ${d.cls}">${d.label}</span>
                                  <span class="pacom-row-sub" style="font-variant-numeric:tabular-nums;">${C}%</span>
                                </div>
                              </td>
                              <td>
                                <div style="display:flex; justify-content:flex-end; gap:6px;">
                                  <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${s(p.id)}">${A?"收起点位":"点位质量"}</button>
                                  <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${s(p.id)}">测通</button>
                                  <button type="button" class="pacom-btn pacom-btn--sm" data-copy-endpoint="${s(p.id)}" data-endpoint-val="${s(p.endpoint)}">${t.copiedEndpointId===p.id?"已复制":"复制"}</button>
                                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-conn="${s(p.id)}" ${l}>编辑</button>
                                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-del-conn="${s(p.id)}" ${l}>删除</button>
                                </div>
                              </td>
                            </tr>
                            ${A?`
                                <tr class="pacom-table-detail-row">
                                  <td colspan="6">
                                    <div style="display:flex; flex-direction:column; gap:8px;">
                                      <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                                        <strong style="font-size:14px; font-weight:450;">传感器 / 子设备采集质量明细（${s(p.name)}）</strong>
                                        <span class="pacom-row-sub">在线正常 ｜ 延迟 &gt;30m ｜ 断流 &gt;3×间隔</span>
                                      </div>
                                      ${B.map(re=>`
                                          <div class="pacom-receipt-item">
                                            <span><strong>${s(re.deviceName)}</strong> ｜ ${s(re.pointName)}</span>
                                            <span style="display:inline-flex; align-items:center; gap:8px;">
                                              <span class="pacom-row-sub">当前 ${s(re.value)} ｜ ${s(re.lastSeen)}</span>
                                              <span class="pacom-badge ${re.quality==="online"?"pacom-badge--online":re.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                                ${re.quality==="online"?"在线正常":re.quality==="delayed"?"延迟 >30m":"断流"}
                                              </span>
                                            </span>
                                          </div>`).join("")}
                                    </div>
                                  </td>
                                </tr>`:""}`}).join("")}
              </tbody>
            </table>
          </div>
        </div>`:`
        <div class="dep-topo-flow">
          <div class="dep-topo-col">
            <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 边缘采集网关</strong>
            ${_.filter(p=>p.category==="gateway").length===0?'<div class="pacom-row-sub">当前范围暂未登记边缘网关。</div>':_.filter(p=>p.category==="gateway").map(p=>`
                      <div class="dep-topo-node" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong>${s(p.name)}</strong>
                          <span class="pacom-badge ${p.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${p.connectivity==="online"?"在线":"离线"}</span>
                        </div>
                        <span class="pacom-row-sub">${s(p.hardwareBinding?.networkAddress??"局域网直连")}</span>
                      </div>`).join("")}
          </div>
          <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${ce("chevron-right",12)}</span></div>
          <div class="dep-topo-col">
            <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 协议接入通道（${I.length}）</strong>
            ${I.length===0?'<div class="pacom-row-sub">暂无匹配接入通道。</div>':I.map(p=>{const d=es[p.status]??{label:p.status,cls:"pacom-badge--neutral"};return`
                        <button type="button" class="dep-topo-node ${p.status!=="connected"?"is-issue":""}" data-ping-conn="${s(p.id)}">
                          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                            <strong>${s(p.name)}</strong>
                            <span class="pacom-badge ${d.cls}">${d.label}</span>
                          </div>
                          <span class="pacom-row-sub">${p.protocol.toUpperCase()} ｜ ${s(p.endpoint)}</span>
                        </button>`}).join("")}
          </div>
          <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${ce("chevron-right",12)}</span></div>
          <div class="dep-topo-col">
            <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 点位采集汇总</strong>
            ${I.length===0?'<div class="pacom-row-sub">无已映射点位。</div>':I.map(p=>`
                      <div class="dep-topo-node ${p.status!=="connected"?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong>${s(p.name)}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${p.collectedPoints+p.calculatedPoints} 点</span>
                        </div>
                        <span class="pacom-row-sub">原始采集 ${p.collectedPoints} 点 ｜ 衍生计算 ${p.calculatedPoints} 点</span>
                      </div>`).join("")}
          </div>
        </div>`}
  `}function Ws(t){const{tree:e,canEdit:a,caps:n}=t;if(e.projects.length===0)return Vt(a,n.spatial,"clipboard-check");const o=t.activeBuildingId?t.sortedBuildingFloors(t.activeBuildingId):[],l=o.filter(A=>!!A.plan).length,c=o.flatMap(A=>t.buildingDevicesByFloor.get(A.id)??[]),E=c.filter(A=>!!A.planPoint).length,v=c.filter(A=>A.connectivity==="online").length,f=c.filter(A=>A.physicalInstalled&&!!A.hardwareBinding).length,y=o.filter(A=>(t.buildingDevicesByFloor.get(A.id)?.length??0)>0),I=y.filter(A=>!t.edgeSyncByFloor[A.id]?.dirty).length,S=y.length-I,_=new Map(o.map(A=>[A.id,Sa(t,A.id)])),p=o.filter(A=>!_.get(A.id)?.readyForFormalFreeze),d=t.acceptanceFilter==="active"&&y.length===0?"all":t.acceptanceFilter,C=d==="active"?y:d==="pending"?p:o;return`
    <div class="pacom-kpi-strip pacom-kpi-strip--5" role="region" aria-label="整栋 5 步部署门控">
      <button type="button" class="pacom-kpi-cell" data-dep-nav="project_config" style="border:0; background:transparent; text-align:left; cursor:pointer;">
        <span class="pacom-kpi-label"><span class="pacom-dot ${o.length>0&&l===o.length?"pacom-dot--online":"pacom-dot--warning"}"></span>1. 项目与底图</span>
        <div class="pacom-kpi-value">${l}<span class="pacom-kpi-unit">/ ${o.length} 层</span></div>
        <span class="pacom-kpi-delta">${o.length>0&&l===o.length?"全部底图就绪":`尚缺 ${Math.max(0,o.length-l)} 层底图 →`}</span>
      </button>
      <button type="button" class="pacom-kpi-cell" data-dep-nav="device_marking" style="border:0; background:transparent; text-align:left; cursor:pointer;">
        <span class="pacom-kpi-label"><span class="pacom-dot ${c.length>0&&E===c.length?"pacom-dot--online":"pacom-dot--warning"}"></span>2. 设备标记</span>
        <div class="pacom-kpi-value">${E}<span class="pacom-kpi-unit">/ ${c.length} 台</span></div>
        <span class="pacom-kpi-delta">${c.length===0?"待登记设备 →":c.length-E>0?`未标记 ${c.length-E} 台 →`:"坐标已全部标记"}</span>
      </button>
      <button type="button" class="pacom-kpi-cell" data-dep-nav="device_network" style="border:0; background:transparent; text-align:left; cursor:pointer;">
        <span class="pacom-kpi-label"><span class="pacom-dot ${c.length>0&&v===c.length?"pacom-dot--online":"pacom-dot--warning"}"></span>3. 入网在线</span>
        <div class="pacom-kpi-value">${v}<span class="pacom-kpi-unit">/ ${c.length} 台</span></div>
        <span class="pacom-kpi-delta">${c.length===0?"待登记设备 →":c.length-v>0?`${c.length-v} 台离线 →`:"全量在线"}</span>
      </button>
      <button type="button" class="pacom-kpi-cell" data-dep-nav="device_network" style="border:0; background:transparent; text-align:left; cursor:pointer;">
        <span class="pacom-kpi-label"><span class="pacom-dot ${S===0&&y.length>0?"pacom-dot--online":"pacom-dot--warning"}"></span>4. 边缘同步</span>
        <div class="pacom-kpi-value">${I}<span class="pacom-kpi-unit">/ ${y.length} 层</span></div>
        <span class="pacom-kpi-delta">${y.length===0?"待部署实施层 →":S>0?`${S} 层待同步 →`:`已同步 ｜ v${t.edgeSync.version}`}</span>
      </button>
      <button type="button" class="pacom-kpi-cell" data-dep-nav="device_list" style="border:0; background:transparent; text-align:left; cursor:pointer;">
        <span class="pacom-kpi-label"><span class="pacom-dot ${c.length>0&&f===c.length?"pacom-dot--online":"pacom-dot--warning"}"></span>5. 复核自检</span>
        <div class="pacom-kpi-value">${f}<span class="pacom-kpi-unit">/ ${c.length} 台</span></div>
        <span class="pacom-kpi-delta">${c.length===0?"待登记设备 →":f===c.length?"全部已绑定复核":`待复核 ${c.length-f} 台 →`}</span>
      </button>
    </div>

    ${t.batchFttResult&&t.batchFttResult.buildingId===t.activeBuildingId?`<div class="pacom-banner ${t.batchFttResult.failed===0?"pacom-banner--ok":"pacom-banner--critical"}">
            <div class="pacom-banner-text">
              <span class="pacom-banner-title">最近全层自检（FTT ｜ ${s(t.batchFttResult.floorName)} ｜ ${t.batchFttResult.ranAt}）</span>
              <span class="pacom-banner-sub">通过 ${t.batchFttResult.passed}/${t.batchFttResult.total} 台${t.batchFttResult.failedNames.length?` ｜ 异常：${s(t.batchFttResult.failedNames.join("、"))}`:" ｜ 全部安全复位"}</span>
            </div>
            <button type="button" class="pacom-drawer-close" data-dismiss-ftt="1" aria-label="关闭自检提示">${ce("x",14)}</button>
          </div>`:""}

    <section class="pacom-section">
      <div class="pacom-section-head">
        <div>
          <h2 class="pacom-section-title">楼层 × 工序交付门控矩阵</h2>
          <span class="pacom-row-sub">点击任意单元格直达该层修复；默认聚焦实施中楼层</span>
        </div>
        <div class="pacom-tabs" role="tablist" aria-label="验收楼层筛选">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${d==="active"}" data-acc-filter="active">实施中 ${y.length}</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${d==="pending"}" data-acc-filter="pending">待补缺项 ${p.length}</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${d==="all"}" data-acc-filter="all">全部楼层 ${o.length}</button>
        </div>
      </div>

      <div class="pacom-table-card">
        <div class="pacom-table-wrap">
          <table class="pacom-table">
            <thead>
              <tr>
                <th>楼层</th>
                <th>底图与功能区</th>
                <th>设备标记</th>
                <th>在线入网</th>
                <th>物理复核</th>
                <th>交付状态</th>
                <th style="text-align:right;">验收操作</th>
              </tr>
            </thead>
            <tbody>
              ${C.length===0?'<tr><td colspan="7"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>当前筛选无楼层</strong><span>可切换至「全部楼层」查看整栋状态，或在「项目配置」中建档。</span></div></td></tr>':C.map(A=>{const B=t.buildingDevicesByFloor.get(A.id)??[],V=e.zones.filter(ie=>ie.floorId===A.id),K=_.get(A.id),pe=B.some(ie=>ie.connectivity==="offline"&&!Ut(ie)),re=pe?"device_list":"device_network",de=K.readyForFormalFreeze?"可正式冻结":K.planAlert?"换图待核对":B.length>0?!K.fttRecord&&K.placedCount===B.length&&K.boundVerifiedCount===B.length&&K.onlineCount===B.length?"待执行自检":"实施中":"待配置";return`
                          <tr>
                            <td>
                              <strong>${s(A.name)}</strong>
                              <div class="pacom-row-sub">${A.areaSqm?`${A.areaSqm} m²`:"待补面积"}</div>
                            </td>
                            <td>
                              <button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-matrix-floor="${s(A.id)}">
                                <span class="pacom-dot ${K.planAlert?"pacom-dot--warning":K.hasPlan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                <span>${K.planAlert?"换图待核对":K.hasPlan?`已传图 ｜ ${V.length} 区`:"待传底图"}</span>
                              </button>
                            </td>
                            <td>
                              <button type="button" class="dep-matrix-btn" data-matrix-nav="device_marking" data-matrix-floor="${s(A.id)}">
                                <span class="pacom-dot ${B.length>0&&K.placedCount===B.length&&!K.planAlert?"pacom-dot--online":B.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span>
                                <span>${B.length>0?`${K.placedCount}/${B.length}`:"未标记"}</span>
                              </button>
                            </td>
                            <td>
                              <button type="button" class="dep-matrix-btn" data-matrix-nav="${re}" data-matrix-floor="${s(A.id)}" ${pe?'data-matrix-offline="1"':""}>
                                <span class="pacom-dot ${B.length>0&&K.onlineCount===B.length?"pacom-dot--online":B.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span>
                                <span>${B.length>0?`${K.onlineCount}/${B.length}`:"—"}</span>
                              </button>
                            </td>
                            <td>
                              <button type="button" class="dep-matrix-btn" data-matrix-nav="device_list" data-matrix-floor="${s(A.id)}">
                                <span class="pacom-dot ${B.length>0&&K.boundVerifiedCount===B.length?"pacom-dot--online":B.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span>
                                <span>${B.length>0?`${K.boundVerifiedCount}/${B.length}`:"—"}</span>
                              </button>
                            </td>
                            <td>
                              <span class="pacom-badge ${K.readyForFormalFreeze?"pacom-badge--online":B.length>0?"pacom-badge--warning":"pacom-badge--neutral"}" title="${s(K.blockers.join("；"))}">${de}</span>
                            </td>
                            <td>
                              <div style="display:flex; justify-content:flex-end; gap:6px;">
                                <button type="button" class="pacom-btn pacom-btn--sm" data-floor-ftt="${s(A.id)}" ${B.length===0?"disabled":""}>自检</button>
                                <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-open-freeze-floor="${s(A.id)}" ${!a||B.length===0?`disabled title="${a?"本层尚无设备":"当前角色为只读权限"}"`:""}>${K.readyForFormalFreeze?"冻结":"留档"}</button>
                              </div>
                            </td>
                          </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="pacom-section">
      <div class="pacom-section-head">
        <h2 class="pacom-section-title" style="display:inline-flex; align-items:center; gap:6px;">
          <span>整栋交付冻结与留档记录</span>
          ${Et("冻结与阶段留档说明","满足全部 5 步门控且通过全层自检后可生成「已冻结」正式基线；存在待补项时仅可生成「阶段留档（草稿）」用于过程记录。")}
        </h2>
        <span class="pacom-row-sub">本栋共 ${t.buildingDeliveries.length} 条记录</span>
      </div>
      <div class="pacom-table-card">
        <div class="pacom-table-wrap">
          <table class="pacom-table">
            <thead>
              <tr>
                <th>版本标签</th>
                <th>所属楼层</th>
                <th>现场核验进度</th>
                <th>记录人与备注</th>
                <th style="text-align:right;">状态</th>
              </tr>
            </thead>
            <tbody>
              ${t.buildingDeliveries.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>本栋暂无交付冻结或阶段留档记录</strong><span>完成设备复核与自检后，点击右上角「交付冻结」生成基线快照。</span></div></td></tr>':t.buildingDeliveries.map(A=>{const B=e.floors.find(pe=>pe.id===A.floorId)?.name??A.floorId,V=A.status==="draft"?"阶段留档":zs[A.status]??A.status,K=A.status==="draft"?"pacom-badge--warning":"pacom-badge--accent";return`
                          <tr>
                            <td>
                              <div style="font-weight:450;">${s(A.versionTag)}</div>
                              <div class="pacom-row-sub"><code>${s(A.id)}</code></div>
                            </td>
                            <td>${s(B)}</td>
                            <td><strong>${A.verifiedCount}</strong> / ${A.deviceCount} 台</td>
                            <td>
                              <div>${s(A.frozenBy)}</div>
                              <div class="pacom-row-sub">${s(A.note??"—")}</div>
                            </td>
                            <td style="text-align:right;"><span class="pacom-badge ${K}">${V}</span></td>
                          </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `}function Zs(t){const{tree:e,canEdit:a,caps:n}=t,o=[],l=e.projects.find(v=>v.id===t.activeProjectId)??e.projects[0]??null,c=e.buildings.find(v=>v.id===t.activeBuildingId)??(l?e.buildings.find(v=>v.projectId===l.id):null)??null;if(t.showNewProjectModal&&o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建项目">
        <form class="dep-modal-card" data-create-project="1">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">新建项目</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:12px; background:var(--pacom-surface-primary); box-shadow:inset 0 0 0 var(--hw) var(--pacom-border-subtle);">
              <img src="${s(t.newProjCoverDataUrl??"./media/gzlab.jpg")}" alt="项目封面预览" style="width:76px; height:48px; object-fit:cover; border-radius:8px;" />
              <div style="flex:1; min-width:0;">
                <div style="font-size:14px; font-weight:450;">项目封面图（选填）</div>
                <div class="pacom-row-sub">支持 JPG / PNG / WebP，未上传将使用默认封面</div>
              </div>
              <label class="pacom-btn pacom-btn--sm" style="cursor:${!a||!n.spatial?"not-allowed":"pointer"}; opacity:${!a||!n.spatial?"0.45":"1"};">
                <span>${t.newProjCoverDataUrl?"更换":"上传"}</span>
                <input type="file" name="newProjCover" accept="image/*" data-stage-new-proj-cover="1" style="display:none;" ${!a||!n.spatial?"disabled":""} />
              </label>
            </div>
            <div class="dep-param-grid">
              <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" placeholder="如：广实3号园" required /></label>
              <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="广州市" /></label>
              <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" placeholder="街道与门牌号" /></label>
              <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" placeholder="如：113.3824" /></label>
              <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" placeholder="如：23.0652" /></label>
            </div>
            <span class="pacom-row-sub">经纬度可同时留空稍后补齐，或成对填写合法坐标。</span>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!n.spatial?"disabled":""}>创建项目</button>
            </div>
          </div>
        </form>
      </div>`),t.showEditProjectModal&&l){const f=e.buildings.filter(y=>y.projectId===l.id).reduce((y,I)=>y+t.sortedBuildingFloors(I.id).reduce((S,_)=>S+(t.buildingDevicesByFloor.get(_.id)?.length??0),0),0);o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑项目">
        <form class="dep-modal-card" data-save-project="${s(l.id)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">编辑项目：${s(l.name)}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            <div style="display:flex; align-items:center; gap:14px; padding:12px; border-radius:12px; background:var(--pacom-surface-primary); box-shadow:inset 0 0 0 var(--hw) var(--pacom-border-subtle);">
              <img src="${s(l.imageUrl??"./media/gzlab.jpg")}" alt="${s(l.name)}" style="width:84px; height:54px; object-fit:cover; border-radius:8px;" />
              <div style="flex:1; min-width:0;">
                <div style="font-size:14px; font-weight:450;">项目封面图</div>
                <div class="pacom-row-sub">用于空间总览的园区俯瞰展示</div>
              </div>
              <label class="pacom-btn" style="cursor:${!a||!n.spatial?"not-allowed":"pointer"}; opacity:${!a||!n.spatial?"0.45":"1"};">
                <span>更换封面</span>
                <input type="file" name="projCoverUpload" accept="image/*" data-upload-proj="${s(l.id)}" style="display:none;" ${!a||!n.spatial?"disabled":""} />
              </label>
            </div>
            <div class="dep-param-grid">
              <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" value="${s(l.name)}" required ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="${s(l.city??"")}" ${a?"":"disabled"} /></label>
              <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" value="${s(l.address??"")}" ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" value="${s(l.location?.lng??"")}" ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" value="${s(l.location?.lat??"")}" ${a?"":"disabled"} /></label>
            </div>
          </div>
          <div class="dep-modal-foot">
            <button type="button" class="pacom-btn pacom-btn--danger" data-delete-proj="${s(l.id)}" ${!a||!n.spatial||f>0?`disabled title="${f>0?`包含 ${f} 台运行中设备，请先解绑后再删除`:"当前角色只读"}"`:""}>删除项目</button>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!n.spatial?"disabled":""}>保存更改</button>
            </div>
          </div>
        </form>
      </div>`)}t.showNewBuildingModal&&l&&o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建楼宇">
        <form class="dep-modal-card" data-create-bld="${s(l.id)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">新建楼宇（${s(l.name)}）</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:12px; background:var(--pacom-surface-primary); box-shadow:inset 0 0 0 var(--hw) var(--pacom-border-subtle);">
              <img src="${s(t.newBldImageDataUrl??"./media/building-e.webp")}" alt="楼宇外观预览" style="width:68px; height:48px; object-fit:contain; border-radius:8px; background:#ffffff;" />
              <div style="flex:1; min-width:0;">
                <div style="font-size:14px; font-weight:450;">楼宇外观 / 白模图（选填）</div>
                <div class="pacom-row-sub">支持透明 PNG / WebP / JPG</div>
              </div>
              <label class="pacom-btn pacom-btn--sm" style="cursor:${!a||!n.spatial?"not-allowed":"pointer"}; opacity:${!a||!n.spatial?"0.45":"1"};">
                <span>${t.newBldImageDataUrl?"更换":"上传"}</span>
                <input type="file" name="newBldImg" accept="image/*" data-stage-new-bld-img="1" style="display:none;" ${!a||!n.spatial?"disabled":""} />
              </label>
            </div>
            <div class="dep-param-grid">
              <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" placeholder="如：G栋" required /></label>
              <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" placeholder="选填" /></label>
              <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="12" /></label>
              <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="0" /></label>
            </div>
            <div style="display:flex; align-items:center; gap:20px; flex-wrap:wrap; font-size:14px;">
              <label style="display:inline-flex; align-items:center; gap:8px; cursor:pointer;"><input type="checkbox" name="bRoof" checked />含屋面层 (RF)</label>
              <label style="display:inline-flex; align-items:center; gap:8px; cursor:pointer;"><input type="checkbox" name="bAutoFloors" checked />自动生成全部楼层并进入导图</label>
            </div>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!n.spatial?"disabled":""}>创建楼宇</button>
            </div>
          </div>
        </form>
      </div>`);const E=t.editingBuildingId?e.buildings.find(v=>v.id===t.editingBuildingId)??null:null;if(E){const v=t.sortedBuildingFloors(E.id),f=v.reduce((I,S)=>I+(t.buildingDevicesByFloor.get(S.id)?.length??0),0),y=xa(E,v);o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑楼宇">
        <form class="dep-modal-card" data-save-building="${s(E.id)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">编辑楼宇：${s(E.name)}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            <div style="display:flex; align-items:center; gap:14px; padding:12px; border-radius:12px; background:var(--pacom-surface-primary); box-shadow:inset 0 0 0 var(--hw) var(--pacom-border-subtle);">
              <img src="${s(E.imageUrl??"./media/building-e.webp")}" alt="${s(E.name)}" style="width:72px; height:54px; object-fit:contain; border-radius:8px; background:#ffffff;" />
              <div style="flex:1; min-width:0;">
                <div style="font-size:14px; font-weight:450;">楼宇外观 / 白模图</div>
                <div class="pacom-row-sub">支持透明 PNG / WebP / JPG</div>
              </div>
              <label class="pacom-btn" style="cursor:${!a||!n.spatial?"not-allowed":"pointer"}; opacity:${!a||!n.spatial?"0.45":"1"};">
                <span>替换图片</span>
                <input type="file" name="bldImgUpload" accept="image/*" data-upload-bld="${s(E.id)}" style="display:none;" ${!a||!n.spatial?"disabled":""} />
              </label>
            </div>
            <div class="dep-param-grid">
              <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" value="${s(E.name)}" required ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" value="${s(E.areaSqm??"")}" placeholder="选填" ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${E.aboveFloors}" ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${E.belowFloors}" ${a?"":"disabled"} /></label>
            </div>
            <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
              <label style="display:inline-flex; align-items:center; gap:8px; font-size:14px; cursor:pointer;"><input type="checkbox" name="bRoof" ${E.hasRoof?"checked":""} ${a?"":"disabled"} />含屋面层 (RF)</label>
              ${y.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${s(E.id)}" ${!a||!n.spatial?"disabled":""}>一键补齐缺失 ${y.length} 层</button>`:`<span class="pacom-row-sub">已登记 ${v.length} 个楼层</span>`}
            </div>
          </div>
          <div class="dep-modal-foot">
            <button type="button" class="pacom-btn pacom-btn--danger" data-delete-building="${s(E.id)}" ${!a||!n.spatial||f>0?`disabled title="${f>0?"包含运行中设备，请先解绑后再删除":"当前角色只读"}"`:""}>删除楼宇</button>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!n.spatial?"disabled":""}>保存更改</button>
            </div>
          </div>
        </form>
      </div>`)}if(t.showNewFloorModal&&c&&o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增楼层">
        <form class="dep-modal-card dep-modal-card--sm" data-create-floor="${s(c.id)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">新增楼层（${s(c.name)}）</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
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
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!n.spatial?"disabled":""}>确认新增</button>
            </div>
          </div>
        </form>
      </div>`),t.showBatchModal&&c){const v=t.sortedBuildingFloors(c.id),f=new Map;t.pendingBatchUploads.forEach(p=>{p.matchedFloorId&&f.set(p.matchedFloorId,(f.get(p.matchedFloorId)??0)+1)});const y=new Set(Array.from(f.entries()).filter(([,p])=>p>1).map(([p])=>p)),I=f.size,S=y.size>0,_=Array.from(f.keys()).filter(p=>!!v.find(d=>d.id===p)?.plan).length;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="批量导入平面底图">
        <div class="dep-modal-card dep-modal-card--wide">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">批量导入 ${s(c.name)} 平面底图</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            <div class="dep-upload-drop" data-batch-dropzone="${s(c.id)}" style="padding:22px; flex-direction:column; align-items:center; text-align:center; gap:8px; ${t.batchDropActive?"border-color:var(--pacom-accent-solid); background:var(--pacom-accent-soft);":""}">
              <strong style="font-size:14px; font-weight:450;">拖拽多张平面图到此区域，或点击选择文件</strong>
              <span class="pacom-row-sub">自动识别 01F、02F平面、首层、屋面、RF、地下室B1 等中英文文件名，支持手动调整目标楼层</span>
              <label class="pacom-btn" style="cursor:${!a||!n.spatial?"not-allowed":"pointer"}; margin-top:4px; opacity:${!a||!n.spatial?"0.45":"1"};">
                <span>选择多张图片</span>
                <input type="file" name="batchFloorPlans" accept="image/*" multiple data-batch-upload-floors="${s(c.id)}" style="display:none;" ${!a||!n.spatial?"disabled":""} />
              </label>
            </div>
            ${S?`<div class="pacom-banner pacom-banner--critical" style="padding:10px 14px;">
                     <div class="pacom-banner-text">
                       <span class="pacom-banner-title">检测到 ${y.size} 个目标楼层被多张文件重复匹配</span>
                       <span class="pacom-banner-sub">每个楼层仅允许导入 1 张底图，请将重复项改为「未分配」或指定其他楼层后再导入。</span>
                     </div>
                   </div>`:_>0?`<div class="pacom-banner" style="padding:10px 14px;">
                       <div class="pacom-banner-text">
                         <span class="pacom-banner-title">其中 ${_} 个目标楼层已有底图，导入后将升级底图版本</span>
                         <span class="pacom-banner-sub">已关联设备的楼层将保留硬件绑定并标记「换图待核对」。</span>
                       </div>
                     </div>`:""}
            ${t.pendingBatchUploads.length>0?`<div style="display:flex; flex-direction:column; gap:8px;">
                    <div class="pacom-row-sub">已选 ${t.pendingBatchUploads.length} 张图片，匹配 ${I} 个唯一楼层：</div>
                    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(300px, 1fr)); gap:8px; max-height:240px; overflow-y:auto;">
                      ${t.pendingBatchUploads.map(p=>{const d=!!(p.matchedFloorId&&y.has(p.matchedFloorId)),C=p.matchedFloorId?!!v.find(A=>A.id===p.matchedFloorId)?.plan:!1;return`
                          <div class="pacom-receipt-item" style="padding:8px 10px; gap:8px; ${d?"box-shadow:inset 0 0 0 1px var(--pacom-status-critical);":""}">
                            <div style="min-width:0; flex:1;">
                              <div style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:14px;" title="${s(p.file.name)}">${s(p.file.name)}</div>
                              ${d?'<span class="pacom-row-sub" style="color:var(--pacom-status-critical);">目标层重复，请改选或设为未分配</span>':C?'<span class="pacom-row-sub">将覆盖已有底图</span>':""}
                            </div>
                            <select class="pacom-select" name="overrideFloor_${s(p.id)}" style="width:104px; flex:none;" data-batch-override-floor="${s(p.id)}" aria-label="指定目标楼层">
                              <option value="">未分配</option>
                              ${v.map(A=>`<option value="${s(A.id)}" ${p.matchedFloorId===A.id?"selected":""}>${s(A.name)}</option>`).join("")}
                            </select>
                          </div>`}).join("")}
                    </div>
                  </div>`:""}
          </div>
          <div class="dep-modal-foot">
            <button type="button" class="pacom-btn pacom-btn--ghost" data-cancel-batch-upload="1" ${t.pendingBatchUploads.length===0?"disabled":""}>清空已选</button>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="button" class="pacom-btn pacom-btn--primary" data-confirm-batch-upload="1" ${I===0||S||!a||!n.spatial?"disabled":""}>确认导入（${I} 层）</button>
            </div>
          </div>
        </div>
      </div>`)}if(t.copyZoneSourceFloorId&&c){const v=e.floors.find(y=>y.id===t.copyZoneSourceFloorId),f=t.sortedBuildingFloors(c.id).filter(y=>y.id!==t.copyZoneSourceFloorId);v&&f.length>0&&o.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="复用功能区至其他楼层">
          <div class="dep-modal-card">
            <div class="dep-modal-head">
              <h3 class="dep-modal-title">复用 ${s(v.name)} 功能区至其他楼层</h3>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                <span class="pacom-row-sub">勾选目标楼层（已选 ${t.copyTargetFloorIds.size} 层）</span>
                <div style="display:flex; gap:6px;">
                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="empty">空白地上层</button>
                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="above">全部地上层</button>
                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="clear">清空</button>
                </div>
              </div>
              <div style="display:flex; flex-wrap:wrap; gap:8px;">
                ${f.map(y=>{const I=t.copyTargetFloorIds.has(y.id),S=e.zones.filter(_=>_.floorId===y.id).length;return`
                      <label class="pacom-btn pacom-btn--sm" style="cursor:pointer; ${I?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}">
                        <input type="checkbox" name="copyFloor_${s(y.id)}" data-copy-target-floor="${s(y.id)}" ${I?"checked":""} style="margin:0;" />
                        <span>${s(y.name)}${S>0?` (${S}区)`:""}</span>
                      </label>`}).join("")}
              </div>
            </div>
            <div class="dep-modal-foot">
              <span></span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
                <button type="button" class="pacom-btn pacom-btn--primary" data-confirm-copy-zones="${s(v.id)}" ${t.copyTargetFloorIds.size===0||!a||!n.spatial?"disabled":""}>确认复制（${t.copyTargetFloorIds.size} 层）</button>
              </div>
            </div>
          </div>
        </div>`)}if(t.showNewDevModal){const v=e.zones.filter(f=>f.floorId===t.activeFloorId);o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增设备">
        <form class="dep-modal-card" data-create-dev="1">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">新增设备</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            <label class="dep-field">
              <span class="dep-field-label">设备名称</span>
              <input class="pacom-input" name="devName" placeholder="如：703 会议室三控面板" required />
            </label>
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">设备类型</span>
                <select class="pacom-select" name="devPreset">${Oa.map(f=>`<option value="${f.key}">${f.label}</option>`).join("")}</select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">所属功能区</span>
                <select class="pacom-select" name="devZone">
                  <option value="">暂不分配</option>
                  ${v.map(f=>`<option value="${s(f.id)}">${s(f.name)}</option>`).join("")}
                </select>
              </label>
            </div>
            <span class="pacom-row-sub">新增设备初始为「未标记」状态，创建后将引导在平面图点选实际安装坐标，并同步标记本层待同步边缘。</span>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!n.createDevice?"disabled":""}>确认新增</button>
            </div>
          </div>
        </form>
      </div>`)}if(t.groupModal){const v=t.groupModal.mode==="edit"&&t.groupModal.groupId?t.groups.find(d=>d.id===t.groupModal.groupId)??null:null,f=t.groupModal.track,y=Ma[f],I=y.includes(t.groupModal.draftType)?t.groupModal.draftType:y[0],S=new Set(t.groupModal.draftMemberIds),_=new Set(t.floorDevices.filter(d=>d.category==="gateway").map(d=>d.id));f==="mesh_auto"&&_.forEach(d=>S.add(d));const p=f==="mesh_auto"?t.floorDevices.filter(Ut):t.floorDevices;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="${v?"编辑设备分组":"新建设备分组"}">
        <form class="dep-modal-card" data-save-group="${s(v?.id??"")}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">${v?"编辑设备分组":"新建设备分组"}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            <label class="dep-field">
              <span class="dep-field-label">分组名称</span>
              <input class="pacom-input" name="gName" data-group-draft-name="1" placeholder="如：7F 西侧办公区联动组" value="${s(t.groupModal.draftName)}" required />
            </label>
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">运行模式</span>
                <select class="pacom-select" name="gTrack" data-group-modal-track="1">
                  <option value="mesh_auto" ${f==="mesh_auto"?"selected":""}>端侧 Mesh 自治组</option>
                  <option value="cloud_biz" ${f==="cloud_biz"?"selected":""}>云端业务分组</option>
                </select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">分组类别</span>
                <select class="pacom-select" name="gType" data-group-draft-type="1">
                  ${y.map(d=>`<option value="${d}" ${I===d?"selected":""}>${d}</option>`).join("")}
                </select>
              </label>
            </div>
            <div class="dep-field">
              <span class="dep-field-label">
                <span>编排分组成员（本层可选 ${p.length} 台）</span>
                ${Et("分组成员规则","端侧蓝牙 Mesh 自治组会自动锁定纳入本层网关 / 蓝牙适配器，避免离线回读漏报；云端业务分组可自由混选本层所有设备。")}
              </span>
              <div class="dep-check-list">
                ${p.length===0?'<div class="pacom-row-sub" style="padding:12px; text-align:center;">本层暂无可选设备，请先在「设备标记」或「设备列表」中新增设备。</div>':p.map(d=>{const C=f==="mesh_auto"&&_.has(d.id),A=S.has(d.id);return`
                            <label class="dep-check-item">
                              <span style="display:inline-flex; align-items:center; gap:8px; min-width:0;">
                                <input type="checkbox" name="gMemberIds" data-group-draft-member="1" value="${s(d.id)}" ${A?"checked":""} ${C?"disabled":""} />
                                ${C?`<input type="hidden" name="gMemberIds" value="${s(d.id)}" />`:""}
                                <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${s(d.name)}</span>
                              </span>
                              <span class="pacom-badge ${C?"pacom-badge--accent":"pacom-badge--neutral"}">${C?"自动纳入":la[d.category]}</span>
                            </label>`}).join("")}
              </div>
            </div>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!n.deviceGroups?"disabled":""}>${v?"保存分组":"创建分组"}</button>
            </div>
          </div>
        </form>
      </div>`)}if(t.connModal){const v=t.connModal.mode==="edit"&&t.connModal.connectionId?t.connections.find(_=>_.id===t.connModal.connectionId)??null:null,f=l?e.buildings.filter(_=>_.projectId===l.id):[],y=v?.buildingId??t.activeBuildingId??"",I=y?t.sortedBuildingFloors(y):[],S=v?v.floorId:t.activeFloorId??"";o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="${v?"编辑接入通道":"新增接入通道"}">
        <form class="dep-modal-card" data-save-conn="${s(v?.id??"")}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">${v?"编辑接入通道":"新增子系统接入通道"}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            <label class="dep-field">
              <span class="dep-field-label">通道名称</span>
              <input class="pacom-input" name="cName" placeholder="如：E栋 8F 中央空调网关" value="${s(v?.name??"")}" required />
            </label>
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">所属楼宇</span>
                <select class="pacom-select" name="cBuilding" data-conn-bld-select="1">
                  <option value="">全项目通用</option>
                  ${f.map(_=>`<option value="${s(_.id)}" ${y===_.id?"selected":""}>${s(_.name)}</option>`).join("")}
                </select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">服务楼层</span>
                <select class="pacom-select" name="cFloor">
                  <option value="">整栋 / 不限楼层</option>
                  ${I.map(_=>`<option value="${s(_.id)}" ${S===_.id?"selected":""}>${s(_.name)}</option>`).join("")}
                </select>
              </label>
            </div>
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">协议类型</span>
                <select class="pacom-select" name="cProto">
                  ${[["bacnet_ip","空调 / BACnet IP"],["modbus_tcp","电表 / Modbus TCP"],["modbus_rtu","RS485 / Modbus RTU"],["dali","照明 / DALI-2"],["mqtt","空气质量 / MQTT"],["knx","楼宇总线 / KNX"]].map(([_,p])=>`<option value="${_}" ${v?.protocol===_?"selected":""}>${p}</option>`).join("")}
                </select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">网关端点</span>
                <input class="pacom-input" name="cEndpoint" placeholder="如：10.7.8.20:47808" value="${s(v?.endpoint??"")}" required />
              </label>
            </div>
            <span class="pacom-row-sub">提交时将自动检测同项目局域网端点冲突并按已绑定同协议设备统计采集点位。</span>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!n.manageConnections?"disabled":""}>${v?"保存通道":"校验并接入"}</button>
            </div>
          </div>
        </form>
      </div>`)}if(t.showFreezeModal){const v=c?t.sortedBuildingFloors(c.id):[],f=v.some(p=>p.id===t.freezeTargetFloorId)?t.freezeTargetFloorId:v.find(p=>(t.buildingDevicesByFloor.get(p.id)?.length??0)>0)?.id??v[0]?.id??t.activeFloorId,y=e.floors.find(p=>p.id===f),I=f?Sa(t,f):null,S=!I||I.deviceCount===0,_=!!I?.readyForFormalFreeze;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="交付冻结与阶段留档">
        <form class="dep-modal-card" data-confirm-freeze="${s(f)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">
              <span>${_?"正式交付冻结":"交付冻结与阶段留档"}</span>
              ${Et("正式冻结与阶段留档区别","仅当底图、点位标记、绑定复核、在线、边缘同步及全层自检（FTT）全部通过时，才允许生成「正式冻结」基线；存在待补项时仅支持保存「阶段留档（草稿）」。")}
            </h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            <label class="dep-field">
              <span class="dep-field-label">目标楼层（${s(c?.name??"当前楼宇")}）</span>
              <select class="pacom-select" name="freezeFloorId" data-freeze-floor-select="1">
                ${v.map(p=>{const d=t.buildingDevicesByFloor.get(p.id)?.length??0,C=Sa(t,p.id),A=d===0?"无设备":C.readyForFormalFreeze?`${d} 台 ｜ 可正式冻结`:`${d} 台 ｜ 待补项`;return`<option value="${s(p.id)}" ${p.id===f?"selected":""}>${s(p.name)}（${A}）</option>`}).join("")}
              </select>
            </label>
            ${S?`<div class="pacom-banner pacom-banner--critical" style="padding:12px 14px;">
                     <div class="pacom-banner-text">
                       <span class="pacom-banner-title">本层尚无已登记设备（0 / 0）</span>
                       <span class="pacom-banner-sub">禁止为空楼层生成阶段留档或正式冻结快照，请先在「设备标记」添加并配置设备。</span>
                     </div>
                   </div>`:_?`<div class="pacom-banner pacom-banner--ok" style="padding:12px 14px;">
                       <div class="pacom-banner-text">
                         <span class="pacom-banner-title">${s(y?.name??"")} 已满足全部正式交付冻结门槛</span>
                         <span class="pacom-banner-sub">${I.deviceCount} 台设备均已完成底图标记、硬件绑定与物理复核、在线连通、边缘同步及全层回读自检。</span>
                       </div>
                     </div>`:`<div class="pacom-banner pacom-banner--critical" style="padding:12px 14px;">
                       <div class="pacom-banner-text">
                         <span class="pacom-banner-title">尚未满足正式冻结门槛（不可正式冻结）</span>
                         <span class="pacom-banner-sub">阻止项：${s(I.blockers.join(" ｜ "))}。可先保存为「阶段留档」记录当前施工进度。</span>
                       </div>
                     </div>`}
            <label class="dep-field">
              <span class="dep-field-label">基线 / 留档备注</span>
              <input class="pacom-input" name="freezeNote" placeholder="如：首期调试验收基线冻结" value="${_?"全层自检通过，正式交付冻结":"阶段性施工留档（待补齐剩余门控项后正式冻结）"}" ${S?"disabled":""} />
            </label>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              ${!S&&!_&&n.stageSnapshot?`<button type="button" class="pacom-btn pacom-btn--primary" data-submit-stage-snapshot="${s(f)}" ${a?"":"disabled"}>保存阶段留档</button>`:""}
              <button type="submit" class="pacom-btn ${_?"pacom-btn--primary":""}" ${!a||!_?'disabled title="需满足全部交付门控与自检后才可正式冻结"':""}>正式交付冻结</button>
            </div>
          </div>
        </form>
      </div>`)}if(t.confirmDialog){const v=t.confirmDialog;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="${s(v.title)}">
        <div class="dep-modal-card dep-modal-card--sm">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">${s(v.title)}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            <p style="margin:0; font-size:14px; line-height:22px; color:var(--pacom-text-body);">${s(v.body)}</p>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="button" class="pacom-btn ${v.danger?"pacom-btn--danger":"pacom-btn--primary"}" data-confirm-dialog-ok="1">${s(v.confirmLabel)}</button>
            </div>
          </div>
        </div>
      </div>`)}return t.lightboxPlan&&o.push(`
      <div class="dep-lightbox-scrim" data-lightbox-scrim="1" role="dialog" aria-modal="true" aria-label="${s(t.lightboxPlan.title)}">
        <div class="dep-lightbox-card">
          <div class="dep-lightbox-head">
            <strong style="font-size:16px; font-weight:500;">${s(t.lightboxPlan.title)}</strong>
            <button type="button" class="pacom-drawer-close" data-close-lightbox="1" aria-label="关闭预览">${ce("x",16)}</button>
          </div>
          <div class="dep-lightbox-body">
            <img src="${s(t.lightboxPlan.imageUrl)}" alt="${s(t.lightboxPlan.title)}" />
          </div>
        </div>
      </div>`),o.join("")}function Ks(){let t=null,e=null;function a(){t&&(t.setAttribute("aria-expanded","false"),t=null),e&&(e.remove(),e=null)}function n(v,f){const y=v.getBoundingClientRect(),I=f.getBoundingClientRect(),S=16,_=8;let p=y.left+y.width/2-I.width/2;p=Math.max(S,Math.min(window.innerWidth-I.width-S,p));let d=y.bottom+_;d+I.height+S>window.innerHeight&&(d=y.top-I.height-_),d=Math.max(S,Math.min(window.innerHeight-I.height-S,d)),f.style.left=`${Math.round(p)}px`,f.style.top=`${Math.round(d)}px`}function o(v){const f=v.dataset.depInfo?.trim();if(!f)return;if(t===v){a();return}a(),t=v,v.setAttribute("aria-expanded","true");const y=document.createElement("div");y.className="pacom-info-popover",y.setAttribute("role","tooltip"),y.textContent=f,document.body.appendChild(y),e=y,n(v,y)}const l=v=>{const f=v.target;e&&(e.contains(f)||t?.contains(f))||a()},c=v=>{v.key==="Escape"&&e&&a()},E=()=>{t&&e&&(document.body.contains(t)?n(t,e):a())};return document.addEventListener("click",l),document.addEventListener("keydown",c),window.addEventListener("resize",E),window.addEventListener("scroll",E,!0),{bind(v){t&&!document.body.contains(t)&&a(),v.querySelectorAll("[data-dep-info]").forEach(f=>{f.addEventListener("click",y=>{y.preventDefault(),y.stopPropagation(),o(f)})})},close:a,destroy(){a(),document.removeEventListener("click",l),document.removeEventListener("keydown",c),window.removeEventListener("resize",E),window.removeEventListener("scroll",E,!0)}}}function sa(t,e,a){return t?e?"":`disabled title="${s(a)}"`:'disabled title="当前角色为只读权限"'}function ws(t,e=!1){if(!t.drawerOpen||t.activeNav!=="device_marking"&&t.activeNav!=="device_list")return"";const a=t.floorDevices.find(d=>d.id===t.selectedId)??null;if(!a)return"";const{canEdit:n,caps:o}=t,l=t.meshRoles[a.id]??{proxy:!1,relay:!1,meshUuid:`mesh-${t.activeFloorId.slice(-4)}`},c=t.lightMarkers.filter(d=>d.deviceId===a.id),E=t.deviceParams.get(a.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450},v=sa(n,o.lightMarkers,"待后端回路灯点接口对接"),f=sa(n,o.meshRoles,"待后端蓝牙 Mesh 接口对接"),y=sa(n,o.deviceParams,"待后端自治参数下发接口对接"),I=sa(n,o.manageDevice,"待后端设备管理接口对接"),S=t.tree.zones.filter(d=>d.floorId===t.activeFloorId),_=t.floorDevices.filter(d=>d.category==="gateway"),p=t.bindingDraft&&t.bindingDraft.deviceId===a.id?t.bindingDraft:{deviceId:a.id,gatewayId:a.hardwareBinding?.gatewayId??(a.category==="gateway"?a.id:_[0]?.id??""),protocol:a.hardwareBinding?.protocol??Ra[0],networkAddress:a.hardwareBinding?.networkAddress??"",portOrChannel:a.hardwareBinding?.portOrChannel??"",physicalInstalled:a.physicalInstalled};return`
    <aside class="dep-docked-drawer ${e?"dep-docked-drawer--sticky":""}" aria-label="设备配置抽屉">
      <div class="pacom-drawer-head">
        <div style="min-width:0; flex:1;">
          <h3 class="pacom-drawer-title">${s(a.name)}</h3>
          <div class="pacom-row-sub">${s(t.getZoneLabel(a.logicalZoneId))} ｜ ${s(la[a.category])} ｜ v${a.version}</div>
        </div>
        <div style="display:inline-flex; align-items:center; gap:4px; flex-shrink:0;">
          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-toggle-edit-dev-meta="1" ${I}>${t.editingDeviceMeta?"收起":"编辑"}</button>
          <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${ce("x",16)}</button>
        </div>
      </div>

      ${t.editingDeviceMeta?`
          <form data-save-dev-meta="${s(a.id)}" class="dep-drawer-section" style="padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); box-shadow:inset 0 0 0 var(--hw) var(--pacom-border-subtle);">
            <label class="dep-field">
              <span class="dep-field-label">设备名称</span>
              <input class="pacom-input" name="editDevName" value="${s(a.name)}" required ${I} />
            </label>
            <label class="dep-field">
              <span class="dep-field-label">所属功能区</span>
              <select class="pacom-select" name="editDevZone" ${I}>
                <option value="">暂不分配</option>
                ${S.map(d=>`<option value="${s(d.id)}" ${a.logicalZoneId===d.id?"selected":""}>${s(d.name)}</option>`).join("")}
              </select>
            </label>
            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-del-dev="${s(a.id)}" ${I}>删除设备</button>
              <div style="display:inline-flex; gap:6px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-edit-dev-meta="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${I}>保存</button>
              </div>
            </div>
          </form>`:""}

      <div style="display:flex; gap:6px; flex-wrap:wrap;">
        <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-place="1" ${n?"":'disabled title="当前角色为只读权限"'}>${t.placingMode?"点击图纸落点中…":a.planPoint?"点图更新坐标":"点图标记坐标"}</button>
        <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${s(a.id)}">Ping 闪灯</button>
        <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-test="1">单机自检</button>
      </div>

      <div class="pacom-tabs" role="tablist" aria-label="设备配置分页" style="align-self:flex-start;">
        <button type="button" class="pacom-tab" role="tab" aria-selected="${t.drawerTab==="binding"}" data-drawer-tab="binding">绑定与安装</button>
        <button type="button" class="pacom-tab" role="tab" aria-selected="${t.drawerTab==="params"}" data-drawer-tab="params">自治参数</button>
      </div>

      ${t.drawerTab==="binding"?`
          ${a.category==="lighting"?`
              <div class="dep-drawer-section">
                <div class="dep-drawer-section-head">
                  <span class="dep-drawer-section-title">回路可视化灯点（${c.length}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${s(a.id)}" ${v}>+ 添加灯点</button>
                </div>
                ${c.length===0?'<span class="pacom-row-sub">可切至画布「回路灯点」直接点图落点，或点右上角添加</span>':c.map(d=>`
                          <div class="pacom-receipt-item" style="padding:8px 10px;">
                            <span style="font-size:14px;"><strong>${s(d.channel)}</strong> ｜ ${s(d.label)}</span>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-del-light-marker="${s(d.id)}" ${v}>删除</button>
                          </div>`).join("")}
              </div>`:""}

          ${Ut(a)?`
              <div class="dep-drawer-section">
                <div class="dep-drawer-section-head">
                  <span class="dep-drawer-section-title">
                    <span>蓝牙 Mesh 节点角色</span>
                    ${Et("蓝牙 Mesh 角色说明","Proxy 代理建议每层启用 2–3 个供现场移动端接入；Relay 中继建议控制在总节点 10% 以内，面板默认关闭以避免广播风暴。")}
                  </span>
                  <code style="font-size:12px; color:var(--pacom-text-secondary);">${s(l.meshUuid)}</code>
                </div>
                <div class="dep-drawer-switch-row">
                  <span>Proxy 代理</span>
                  <button type="button" class="pacom-switch" role="switch" aria-checked="${l.proxy}" aria-label="切换 Proxy 代理" data-toggle-mesh-role="proxy" data-mesh-dev="${s(a.id)}" ${f}><span class="pacom-switch-thumb"></span></button>
                </div>
                <div class="dep-drawer-switch-row">
                  <span>Relay 中继</span>
                  <button type="button" class="pacom-switch" role="switch" aria-checked="${l.relay}" aria-label="切换 Relay 中继" data-toggle-mesh-role="relay" data-mesh-dev="${s(a.id)}" ${f}><span class="pacom-switch-thumb"></span></button>
                </div>
              </div>`:""}

          <form data-role="binding-form" class="dep-drawer-section">
            <span class="dep-drawer-section-title">硬件绑定与物理安装复核</span>
            ${a.category!=="gateway"?`
                <label class="dep-field">
                  <span class="dep-field-label">所属上游网关</span>
                  <select class="pacom-select" name="gatewayId" data-binding-field="gatewayId" ${n?"":"disabled"}>
                    ${_.length===0?'<option value="">本层暂未登记网关（请先添加边缘网关）</option>':`<option value="">请选择上游网关</option>${_.map(d=>`<option value="${s(d.id)}" ${p.gatewayId===d.id?"selected":""}>${s(d.name)}${d.connectivity==="offline"?"（离线）":""}</option>`).join("")}`}
                  </select>
                </label>`:`<input type="hidden" name="gatewayId" value="${s(a.id)}" />`}
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">通信协议</span>
                <select class="pacom-select" name="protocol" data-binding-field="protocol" ${n?"":"disabled"}>
                  ${Ra.map(d=>`<option value="${d}" ${p.protocol===d?"selected":""}>${d.toUpperCase()}</option>`).join("")}
                </select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">网络地址 / 主题</span>
                <input class="pacom-input" name="networkAddress" data-binding-field="networkAddress" placeholder="地址或主题" value="${s(p.networkAddress)}" ${n?"":"disabled"} />
              </label>
            </div>
            <label class="dep-field">
              <span class="dep-field-label">端口 / 回路</span>
              <input class="pacom-input" name="portOrChannel" data-binding-field="portOrChannel" placeholder="端口或回路" value="${s(p.portOrChannel)}" ${n?"":"disabled"} />
            </label>
            <div class="dep-drawer-switch-row">
              <span>现场物理安装已复核</span>
              <button type="button" class="pacom-switch" role="switch" aria-checked="${p.physicalInstalled}" aria-label="切换现场物理安装复核状态" data-toggle-phys="1" ${n?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
            </div>
            <button class="pacom-btn pacom-btn--primary" type="submit" ${n?"":'disabled title="当前角色为只读权限"'}>保存绑定与复核（v${a.version}）</button>
          </form>`:`
          <form data-save-dev-params="${s(a.id)}" class="dep-drawer-section">
            <div>
              <div class="dep-drawer-section-title">人感与光感自治参数</div>
              <div class="pacom-row-sub">保存后将在「设备网络」统一下发至边缘网关</div>
            </div>
            <div class="dep-param-grid">
              <label class="dep-field"><span class="dep-field-label">自动关灯延时 (分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${E.offDelayMin}" ${y} /></label>
              <label class="dep-field"><span class="dep-field-label">恢复自动延时 (分)</span><input class="pacom-input" name="restoreMin" type="number" value="${E.restoreMin}" ${y} /></label>
              <label class="dep-field"><span class="dep-field-label">开灯光感门限 (lx)</span><input class="pacom-input" name="luxOn" type="number" value="${E.luxOn}" ${y} /></label>
              <label class="dep-field"><span class="dep-field-label">关灯光感门限 (lx)</span><input class="pacom-input" name="luxOff" type="number" value="${E.luxOff}" ${y} /></label>
            </div>
            <button class="pacom-btn pacom-btn--primary" type="submit" ${y}>保存设备参数</button>
          </form>`}
    </aside>
  `}function Ys(t){const{tree:e,canEdit:a,caps:n}=t;if(e.projects.length===0)return`
      <div class="dep-work-row--canvas">
        <main class="pacom-spatial-stage" style="flex:1; min-width:0; display:flex; align-items:center; justify-content:center; padding:24px;">
          <div style="max-width:480px; width:100%;">${Vt(a,n.spatial,"map-pin")}</div>
        </main>
      </div>`;const o=t.activeBuildingId?t.sortedBuildingFloors(t.activeBuildingId):[],l=o.find(d=>d.id===t.activeFloorId)??o[0],c=t.floorDevices,E=e.zones.filter(d=>d.floorId===t.activeFloorId),v=t.drawerOpen?c.find(d=>d.id===t.selectedId)??null:null,f=t.canvasSearch.trim().toLowerCase(),y=c.filter(d=>!(t.deviceFilter==="unverified"&&d.physicalInstalled||t.deviceFilter==="unplaced"&&d.planPoint||f&&!`${d.name} ${t.getZoneLabel(d.logicalZoneId)}`.toLowerCase().includes(f))),I=c.filter(d=>!d.planPoint).length,S=t.planChangeAlerts[t.activeFloorId]??null,_=c.find(d=>d.category==="lighting")??null,p=t.canvasBrush==="light_marker"&&v?.category==="lighting"&&a&&n.lightMarkers;return`
    <div class="dep-work-row--canvas">
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(380px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${ce("search",16)}
            <input class="pacom-hud-input" name="canvasSearch" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${s(t.canvasSearch)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill" style="${t.hudPoolOpen?"background:var(--pacom-selected-layer); color:var(--pacom-text-primary);":""}" data-toggle-hud-pool="1">设备池 ${c.length}${I>0?` ｜ 未标记 ${I}`:""}</button>
          </div>

          ${t.hudPoolOpen?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:14px; font-weight:500;">${s(l?.name??"当前楼层")} 设备池（${y.length}）</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${ce("x",16)}</button>
                </div>
                <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                  <div class="pacom-tabs" role="tablist" aria-label="设备池筛选">
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${t.deviceFilter==="all"}" data-dev-filter="all">全部 ${c.length}</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${t.deviceFilter==="unverified"}" data-dev-filter="unverified">待复核 ${c.filter(d=>!d.physicalInstalled).length}</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${t.deviceFilter==="unplaced"}" data-dev-filter="unplaced">未标记 ${c.filter(d=>!d.planPoint).length}</button>
                  </div>
                </div>
                <div class="pacom-list" style="padding:6px;">
                  ${y.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">本层暂无匹配设备</div>':y.map(d=>`
                            <div class="pacom-row ${d.id===t.selectedId&&t.drawerOpen?"is-selected":""}" data-pick-dev="${s(d.id)}" style="padding:8px 10px;">
                              <div style="min-width:0;">
                                <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${s(d.name)}</div>
                                <div class="pacom-row-sub">${s(t.getZoneLabel(d.logicalZoneId))} ｜ ${d.physicalInstalled?"已复核":"待复核"}</div>
                              </div>
                              <span class="pacom-badge ${d.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${d.planPoint?"已标记":"未标记"}</span>
                            </div>`).join("")}
                </div>
              </div>`:""}
        </div>

        ${t.placingMode&&v?`<div class="dep-canvas-mode-pill" role="status">
                 <span>正在定位「${s(v.name)}」，请点击平面图落点</span>
                 <button type="button" class="dep-canvas-mode-cancel" data-toggle-place="1">取消</button>
               </div>`:p?`<div class="dep-canvas-mode-pill" role="status">
                   <span>回路灯点模式：点击平面图为「${s(v.name)}」布置灯点</span>
                   <button type="button" class="dep-canvas-mode-cancel" data-brush="device">退出</button>
                 </div>`:t.canvasBrush==="light_marker"?`<div class="dep-canvas-mode-pill" role="status">
                     <span>回路灯点模式：请先选择一台照明回路设备</span>
                     ${_?`<button type="button" class="dep-canvas-mode-cancel" data-pick-dev="${s(_.id)}">选中 ${s(as(_))}</button>`:""}
                   </div>`:S?`<div class="dep-canvas-mode-pill" role="status">
                       <span>底图已更新至 v${S.currentVersion}，请核对本层设备坐标</span>
                       ${a?`<button type="button" class="dep-canvas-mode-cancel" data-clear-plan-alert="${s(t.activeFloorId)}">确认无误</button>`:""}
                     </div>`:""}

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${t.placingMode||p?"crosshair":"grab"};">
          ${l?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${t.panX}px, ${t.panY}px) scale(${t.zoom});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${s(l.plan.imageUrl)}" alt="${s(l.name)} 平面底图" />
                  ${t.canvasBrush==="zone"?E.map((d,C)=>{const A=t.zoneBoxes[d.id]??Ba(C,E.length);return`<div class="pacom-zone-hotspot is-active" style="left:${A.left}%; top:${A.top}%; width:${A.width}%; height:${A.height}%;"><span class="pacom-zone-tag">${s(d.name.replace(new RegExp(`^${l.name}\\s*`,"i"),""))}</span></div>`}).join(""):""}
                  ${c.filter(d=>d.planPoint).map(d=>`
                      <button type="button" class="pacom-pin ${d.id===t.selectedId&&t.drawerOpen?"is-selected":""} ${d.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(d.planPoint.x*100).toFixed(2)}%; top:${(d.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${s(d.id)}" title="${s(d.name)}${d.physicalInstalled?" ｜ 已复核":" ｜ 待复核"}">
                        <span class="pacom-dot ${d.connectivity==="online"?d.physicalInstalled?"pacom-dot--online":"pacom-dot--warning":"pacom-dot--critical"}"></span>
                        <span>${s(as(d))}</span>
                      </button>`).join("")}
                  ${t.canvasBrush==="light_marker"||v?.category==="lighting"?t.lightMarkers.filter(d=>c.some(C=>C.id===d.deviceId)).map(d=>`
                            <span class="dep-light-dot" style="left:${(d.x*100).toFixed(1)}%; top:${(d.y*100).toFixed(1)}%;" title="${s(d.label)}（${s(d.channel)}）">
                              ${ce("sparkles",12)}<span>${s(d.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; padding:24px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-jump-floor-config="${s(t.activeFloorId)}">前往「项目配置」上传平面底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${o.map(d=>`
              <button type="button" class="pacom-elev-item ${d.id===t.activeFloorId?"is-active":""}" data-scrubber-floor="${s(d.id)}" title="${s(d.name)}${d.plan?" ｜ 已传底图":" ｜ 待传底图"}">
                ${d.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${s(d.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标记图层与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${t.canvasBrush==="device"}" data-brush="device">设备标记</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${t.canvasBrush==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${t.canvasBrush==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${ce("minus",16)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(t.zoom*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${ce("plus",16)}</button>
        </div>
      </main>
      ${ws(t,!1)}
    </div>
  `}function Js(t){if(t.tree.projects.length===0)return Vt(t.canEdit,t.caps.spatial,"list");const e=t.floorDevices,a=t.listSearch.trim().toLowerCase(),n=e.filter(l=>!(t.listStatusFilter==="online"&&l.connectivity!=="online"||t.listStatusFilter==="offline"&&l.connectivity!=="offline"||t.listStatusFilter==="unverified"&&l.physicalInstalled||t.listCategoryFilter!=="all"&&l.category!==t.listCategoryFilter||a&&!`${l.name} ${t.getZoneLabel(l.logicalZoneId)} ${l.hardwareBinding?.protocol??""}`.toLowerCase().includes(a))),o=e.filter(l=>l.connectivity==="online").length;return`
    <div class="dep-work-row--list ${t.drawerOpen?"is-drawer-open":""}">
      <div class="dep-work-main">
        <div class="pacom-log-toolbar">
          <div class="pacom-log-filters">
            <input class="pacom-input" name="deviceListSearch" style="width:220px;" data-list-search placeholder="搜索设备名称或功能区…" value="${s(t.listSearch)}" aria-label="搜索设备列表" />
            <select class="pacom-select" name="deviceListFilter" data-list-filter aria-label="按设备状态筛选">
              <option value="all" ${t.listStatusFilter==="all"?"selected":""}>全部状态（${e.length}）</option>
              <option value="online" ${t.listStatusFilter==="online"?"selected":""}>仅看在线（${o}）</option>
              <option value="offline" ${t.listStatusFilter==="offline"?"selected":""}>仅看离线（${e.length-o}）</option>
              <option value="unverified" ${t.listStatusFilter==="unverified"?"selected":""}>待物理复核（${e.filter(l=>!l.physicalInstalled).length}）</option>
            </select>
            <select class="pacom-select" name="deviceCategoryFilter" data-list-cat-filter aria-label="按设备类别筛选">
              <option value="all" ${t.listCategoryFilter==="all"?"selected":""}>全部类别</option>
              ${Object.keys(la).map(l=>`<option value="${l}" ${t.listCategoryFilter===l?"selected":""}>${la[l]}</option>`).join("")}
            </select>
            <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${ce("refresh-cw",16)}</button>
          </div>
          <span class="pacom-row-sub">共 ${n.length} 台 ｜ ${o} 在线</span>
        </div>

        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table dep-device-table">
              <thead>
                <tr>
                  <th>设备与功能区</th>
                  <th class="dep-col-secondary">图上坐标</th>
                  <th class="dep-col-secondary">协议与绑定</th>
                  <th class="dep-col-secondary">物理复核</th>
                  <th>状态</th>
                  <th class="dep-col-secondary" style="text-align:right;">操作</th>
                </tr>
              </thead>
              <tbody>
                ${n.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:36px 16px;"><strong>暂无匹配设备</strong><span>可调整筛选词、切换楼层，或点击右上角「+ 新增设备」。</span></div></td></tr>':n.map(l=>`
                          <tr style="cursor:pointer; ${l.id===t.selectedId&&t.drawerOpen?"background:var(--pacom-selected-layer);":""}" data-open-dev-drawer="${s(l.id)}">
                            <td>
                              <div style="font-weight:450;">${s(l.name)}</div>
                              <div class="pacom-row-sub">${s(t.getZoneLabel(l.logicalZoneId))} ｜ ${s(la[l.category])} ｜ v${l.version}</div>
                              <div class="dep-compact-meta">
                                <span class="pacom-badge ${l.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${l.hardwareBinding?l.hardwareBinding.protocol.toUpperCase():"未绑定"}</span>
                                <span class="pacom-badge ${l.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${l.physicalInstalled?"已复核":"待复核"}</span>
                                ${l.planPoint?"":'<span class="pacom-badge pacom-badge--warning">未标记</span>'}
                              </div>
                            </td>
                            <td class="dep-col-secondary"><span class="pacom-badge ${l.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${l.planPoint?`${Math.round(l.planPoint.x*100)}%, ${Math.round(l.planPoint.y*100)}%`:"未标记"}</span></td>
                            <td class="dep-col-secondary"><span class="pacom-badge ${l.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${l.hardwareBinding?l.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                            <td class="dep-col-secondary"><span class="pacom-badge ${l.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${l.physicalInstalled?"已复核":"待复核"}</span></td>
                            <td><span class="pacom-badge ${l.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${l.connectivity==="online"?"在线":"离线"}</span></td>
                            <td class="dep-col-secondary">
                              <div style="display:flex; justify-content:flex-end; gap:6px;">
                                ${l.hardwareBinding&&!l.physicalInstalled&&t.canEdit?`<button type="button" class="pacom-btn pacom-btn--sm" data-quick-verify-dev="${s(l.id)}">一键复核</button>`:""}
                                <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${s(l.id)}">Ping</button>
                                <button type="button" class="pacom-btn pacom-btn--sm" data-open-dev-params="${s(l.id)}">配置</button>
                                <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-dev="${s(l.id)}">自检</button>
                              </div>
                            </td>
                          </tr>`).join("")}
              </tbody>
            </table>
          </div>
          <div class="pacom-table-footer">
            <span>显示 ${n.length} / ${e.length} 台设备 ｜ ${o} 在线 ｜ ${e.length-o} 离线</span>
          </div>
        </div>
      </div>
      ${ws(t,!0)}
    </div>
  `}function Qs(t){if(t.tree.projects.length===0)return Vt(t.canEdit,t.caps.spatial,"folder-kanban");const e=sa(t.canEdit,t.caps.deviceGroups,"待后端设备分组接口对接"),a=t.groups.filter(E=>E.track==="mesh_auto"),n=t.groups.filter(E=>E.track==="cloud_biz"),o=new Map(t.floorDevices.map(E=>[E.id,E.name])),l=E=>{const v=E.map(f=>o.get(f)??f).slice(0,3);return v.length===0?"暂未编排成员设备":`${v.join("、")}${E.length>3?` 等 ${E.length} 台`:""}`},c=E=>`
    <div class="pacom-setting-row">
      <div class="pacom-setting-meta">
        <span class="pacom-setting-title" style="flex-wrap:wrap; row-gap:4px;">
          <span>${s(E.name)}</span>
          <span class="pacom-badge pacom-badge--neutral" style="white-space:nowrap;">${s(E.groupType)}</span>
        </span>
        <span class="pacom-setting-desc">成员 ${E.deviceIds.length} 台 ｜ ${s(l(E.deviceIds))}</span>
      </div>
      <div class="pacom-setting-control">
        <button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${s(E.id)}">组控测试</button>
        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-group="${s(E.id)}" ${e}>编辑</button>
        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-del-group="${s(E.id)}" ${e}>删除</button>
      </div>
    </div>`;return`
    <div class="pacom-grid-2">
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title" style="display:inline-flex; align-items:center; gap:6px;">
            <span>端侧蓝牙 Mesh 自治组（${a.length}）</span>
            ${Et("端侧蓝牙 Mesh 自治组说明","用于照明与人感/光感本地自治联动，断网仍可端侧执行；系统会自动纳入本层蓝牙适配器或边缘网关以防状态漏报。")}
          </h2>
        </div>
        <div class="pacom-settings-card">
          ${a.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无端侧自治分组，点击右上角「+ 新建分组」创建。</span></div>':a.map(c).join("")}
        </div>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title" style="display:inline-flex; align-items:center; gap:6px;">
            <span>云端业务分组（${n.length}）</span>
            ${Et("云端业务分组说明","适用于空调、标牌或行政部门批控场景，无需依赖蓝牙 Mesh 配网，可供空间总览与智能策略复用。")}
          </h2>
        </div>
        <div class="pacom-settings-card">
          ${n.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无云端业务分组，点击右上角「+ 新建分组」创建。</span></div>':n.map(c).join("")}
        </div>
      </section>
    </div>
  `}function Xs(t){if(t.tree.projects.length===0)return Vt(t.canEdit,t.caps.spatial,"waypoints");const e=t.floorDevices,a=t.tree.zones.filter(p=>p.floorId===t.activeFloorId),n=e.filter(Ut),o=e.filter(p=>!Ut(p)),l=n.filter(p=>p.category==="gateway"),c=new Set(l.map(p=>p.id)),E=n.filter(p=>!c.has(p.id)&&!!(t.meshRoles[p.id]?.proxy||t.meshRoles[p.id]?.relay)),v=new Set(E.map(p=>p.id)),f=n.filter(p=>!c.has(p.id)&&!v.has(p.id)),y=n.filter(p=>t.meshRoles[p.id]?.proxy).length,I=n.filter(p=>t.meshRoles[p.id]?.relay).length,S=n.filter(p=>p.connectivity==="offline").length,_=o.filter(p=>p.connectivity==="offline").length;return`
    <div class="pacom-kpi-strip" role="region" aria-label="本层无线网络概览">
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">蓝牙 Mesh 节点</span>
        <div class="pacom-kpi-value">${n.length}<span class="pacom-kpi-unit">台</span></div>
        <span class="pacom-kpi-delta">不含 ${o.length} 台有线异构末端</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">Proxy ｜ Relay ${Et("代理与中继建议配比","每层建议开启 2–3 个 Proxy 供现场 App 接入；Relay 中继建议控制在总节点 10% 以内，减少广播风暴。")}</span>
        <div class="pacom-kpi-value">${y}<span class="pacom-kpi-unit">｜ ${I} 个</span></div>
        <span class="pacom-kpi-delta">代理与中继骨架</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">Mesh 离线节点</span>
        <div class="pacom-kpi-value">${S}<span class="pacom-kpi-unit">台</span></div>
        <span class="pacom-kpi-delta">${S>0?"建议检查供电或增设中继":_>0?`另有 ${_} 台有线设备离线`:"无线链路全部可达"}</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">云边同步状态</span>
        <div class="pacom-kpi-value">v${t.edgeSync.version}</div>
        <span class="pacom-kpi-delta">${t.edgeSync.dirty?"有配置变更待下发":"协同锁空闲 ｜ 已同步"}</span>
      </div>
    </div>

    ${t.meshFindings.length>0?`
        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">无线网络体检结果</h2>
            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-clear-mesh-findings="1">清除结果</button>
          </div>
          <div class="pacom-card" style="gap:8px; padding:14px 16px;">
            ${t.meshFindings.map(p=>`
                <div class="pacom-receipt-item">
                  <div>
                    <strong>${s(p.title)}</strong>
                    <span class="pacom-row-sub"> ｜ ${s(p.detail)}</span>
                  </div>
                  <div style="display:inline-flex; align-items:center; gap:8px;">
                    ${p.deviceId?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-topo-jump="${s(p.deviceId)}">定位</button>`:""}
                    <span class="pacom-badge ${p.level==="ok"?"pacom-badge--online":p.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${p.level==="ok"?"通过":p.level==="warn"?"建议优化":"异常"}</span>
                  </div>
                </div>`).join("")}
          </div>
        </section>`:""}

    <section class="pacom-section">
      <div class="pacom-section-head">
        <h2 class="pacom-section-title">设备关系拓扑（点击节点直达设备标记）</h2>
        <div class="pacom-tabs" role="tablist" aria-label="拓扑视角切换">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${t.topoMode==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${t.topoMode==="business"}" data-topo-mode="business">业务联动与供能流向</button>
        </div>
      </div>
      ${t.topoMode==="mesh"?`
          <div class="dep-topo-flow">
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器（${l.length}）</strong>
              ${l.length===0?'<div class="pacom-row-sub">本层暂未配置网关或蓝牙适配器。</div>':l.map(p=>`
                        <button type="button" class="dep-topo-node ${p.connectivity==="offline"?"is-issue":""}" data-topo-jump="${s(p.id)}">
                          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                            <strong>${s(p.name)}</strong>
                            <span class="pacom-badge pacom-badge--online">网桥中心</span>
                          </div>
                          <span class="pacom-row-sub">${s(p.hardwareBinding?.networkAddress??"未绑定地址")} ｜ 云边同步通道</span>
                        </button>`).join("")}
            </div>
            <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${ce("chevron-right",12)}</span></div>
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（${E.length}）</strong>
              ${E.length===0?'<div class="pacom-row-sub">暂未启用 Proxy / Relay 骨架节点，可在「设备标记」抽屉开启。</div>':E.map(p=>{const d=t.meshRoles[p.id];return`
                          <button type="button" class="dep-topo-node ${p.connectivity==="offline"?"is-issue":""}" data-topo-jump="${s(p.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                              <strong>${s(p.name)}</strong>
                              <span class="pacom-badge pacom-badge--accent">${d?.proxy?"Proxy":""}${d?.proxy&&d?.relay?" + ":""}${d?.relay?"Relay":""}</span>
                            </div>
                            <span class="pacom-row-sub">${s(t.getZoneLabel(p.logicalZoneId))} ｜ ${p.connectivity==="online"?"在线":"离线"}</span>
                          </button>`}).join("")}
            </div>
            <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${ce("chevron-right",12)}</span></div>
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 普通无线末端（${f.length}）</strong>
              ${f.length===0?'<div class="pacom-row-sub">本层暂无普通 Mesh 末端节点。</div>':f.map(p=>`
                        <button type="button" class="dep-topo-node ${p.connectivity==="offline"?"is-issue":""}" data-topo-jump="${s(p.id)}">
                          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                            <strong>${s(p.name)}</strong>
                            <span class="pacom-badge ${p.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${p.connectivity==="online"?"在线":"离线"}</span>
                          </div>
                          <span class="pacom-row-sub">${s(t.getZoneLabel(p.logicalZoneId))} ｜ ${s(p.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                        </button>`).join("")}
            </div>
          </div>
          ${o.length>0?`<div class="pacom-banner" style="padding:12px 16px;">
                   <div class="pacom-banner-text">
                     <span class="pacom-banner-title">本层另有 ${o.length} 台有线异构设备（${s(o.map(p=>`${p.name}（${p.hardwareBinding?.protocol.toUpperCase()??"有线"}）`).join("、"))}）</span>
                     <span class="pacom-banner-sub">空调与电表经有线协议通道直采，不加入蓝牙 Mesh 无线网；请前往「系统接入」核查其总线健康度。</span>
                   </div>
                   <button type="button" class="pacom-btn pacom-btn--sm" data-dep-nav="connections">前往系统接入 →</button>
                 </div>`:""}`:`
          <div class="dep-topo-flow">
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 上游传感与总线源</strong>
              ${e.filter(p=>p.category==="sensor"||p.category==="gateway").length===0?'<div class="pacom-row-sub">本层暂无传感或网关节点。</div>':e.filter(p=>p.category==="sensor"||p.category==="gateway").map(p=>`
                        <button type="button" class="dep-topo-node" data-topo-jump="${s(p.id)}">
                          <strong>${s(p.name)}</strong>
                          <span class="pacom-row-sub">${p.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                        </button>`).join("")}
            </div>
            <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${ce("chevron-right",12)}</span></div>
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 受控末端（照明 / 暖通）</strong>
              ${e.filter(p=>p.category==="lighting"||p.category==="hvac").length===0?'<div class="pacom-row-sub">本层暂无受控照明或暖通末端。</div>':e.filter(p=>p.category==="lighting"||p.category==="hvac").map(p=>`
                        <button type="button" class="dep-topo-node ${p.connectivity==="offline"?"is-issue":""}" data-topo-jump="${s(p.id)}">
                          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                            <strong>${s(p.name)}</strong>
                            <span class="pacom-badge ${p.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${p.connectivity==="online"?"正常":"离线"}</span>
                          </div>
                          <span class="pacom-row-sub">服务：${s(t.getZoneLabel(p.logicalZoneId))}</span>
                        </button>`).join("")}
            </div>
            <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${ce("chevron-right",12)}</span></div>
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 服务功能区（影响面）</strong>
              ${a.length===0?'<div class="pacom-row-sub">本层暂未划分功能区。</div>':a.map(p=>{const d=e.filter(A=>A.logicalZoneId===p.id),C=d.some(A=>A.connectivity==="offline");return`
                          <div class="dep-topo-node ${C?"is-issue":""}" style="cursor:default;">
                            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                              <strong>${s(p.name)}</strong>
                              <span class="pacom-badge ${d.length===0?"pacom-badge--neutral":C?"pacom-badge--warning":"pacom-badge--online"}">${d.length} 台设备</span>
                            </div>
                            <span class="pacom-row-sub">${d.length===0?"暂无关联设备":C?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                          </div>`}).join("")}
            </div>
          </div>`}
    </section>
  `}function Xt(t,e,a){return t?e?"":`disabled title="${s(a)}"`:'disabled title="当前角色为只读权限"'}function en(t){const{tree:e,canEdit:a,caps:n}=t;if(e.projects.length===0)return Vt(a,n.spatial,"layers");const o=e.projects.find(c=>c.id===t.activeProjectId)??e.projects[0],l=e.buildings.filter(c=>c.projectId===o.id);if(t.projectDrill==="building"||t.projectDrill==="floor"){const c=l.find(E=>E.id===t.activeBuildingId)??l[0]??null;if(!c)return ss(t,o,l);if(t.projectDrill==="floor"){const E=t.sortedBuildingFloors(c.id),v=E.find(f=>f.id===t.activeFloorId)??E[0]??null;if(v)return an(t,c,E,v)}return tn(t,l,c)}return ss(t,o,l)}function ss(t,e,a){const{canEdit:n,caps:o}=t,l=Xt(n,o.spatial,"待后端空间建档接口对接"),c=a.flatMap(f=>t.sortedBuildingFloors(f.id)),E=c.filter(f=>!!f.plan).length,v=e.location?`${e.location.lng.toFixed(4)}, ${e.location.lat.toFixed(4)}`:"未设置坐标";return`
    <div class="dep-project-strip">
      <div class="dep-project-strip-main">
        <div class="dep-project-cover">
          <img src="${s(e.imageUrl??"./media/gzlab.jpg")}" alt="${s(e.name)}" />
        </div>
        <div style="min-width:0; display:flex; flex-direction:column; gap:4px;">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <strong style="font-size:16px; line-height:24px; font-weight:500; color:var(--pacom-text-primary);">${s(e.name)}</strong>
            <span class="pacom-badge pacom-badge--neutral">${a.length} 栋楼宇</span>
            <span class="pacom-badge pacom-badge--neutral">${c.length} 个楼层</span>
            <span class="pacom-badge ${c.length>0&&E===c.length?"pacom-badge--online":"pacom-badge--warning"}">${E}/${c.length} 底图就绪</span>
          </div>
          <span class="pacom-row-sub">${s(e.city||"未填城市")}${e.address?` ｜ ${s(e.address)}`:""} ｜ 坐标 ${s(v)}</span>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">
        <button type="button" class="pacom-btn" data-open-edit-proj="1" ${l}>编辑项目</button>
      </div>
    </div>

    <section class="pacom-section">
      <div class="pacom-section-head">
        <div>
          <h2 class="pacom-section-title">园区楼宇（${a.length} 栋）</h2>
          <span class="pacom-row-sub">点击楼宇卡片进入该栋楼层清单与平面底图配置</span>
        </div>
      </div>
      ${a.length===0?`
          <div class="dep-empty-card">
            <div class="dep-empty-icon">${ce("building-2",20)}</div>
            <strong style="font-size:16px; line-height:24px; font-weight:500; color:var(--pacom-text-primary);">${s(e.name)} 暂无楼宇</strong>
            <span class="pacom-row-sub">添加楼宇并设置层数结构后，系统将自动生成对应楼层并直达楼层底图工作台。</span>
            <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-bld="1" ${l}>+ 添加第一栋楼宇</button>
          </div>`:`
          <div class="dep-building-grid">
            ${a.map(f=>{const y=t.sortedBuildingFloors(f.id),I=y.filter(p=>!!p.plan).length,S=xa(f,y),_=y.length===0?"pacom-badge--neutral":I===y.length?"pacom-badge--online":"pacom-badge--warning";return`
                  <article class="dep-building-card" data-drill-building="${s(f.id)}" tabindex="0" role="button" aria-label="进入 ${s(f.name)} 楼层配置">
                    <div class="dep-building-stage">
                      <img src="${s(f.imageUrl??"./media/building-e.webp")}" alt="${s(f.name)}" />
                      <span class="pacom-badge ${_} dep-building-stage-badge">${y.length===0?"未建层":`${I}/${y.length} 底图`}</span>
                    </div>
                    <div class="dep-building-body">
                      <div class="dep-building-head">
                        <span class="dep-building-name">
                          <span>${s(f.name)}</span>
                          <span class="dep-building-arrow" aria-hidden="true">${ce("chevron-right",14)}</span>
                        </span>
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-building="${s(f.id)}" ${l}>编辑</button>
                      </div>
                      <div class="pacom-row-sub">地上 ${f.aboveFloors} 层${f.belowFloors>0?` ｜ 地下 ${f.belowFloors} 层`:""}${f.hasRoof?" ｜ RF":""}${f.areaSqm?` ｜ ${f.areaSqm} m²`:""}</div>
                      ${S.length>0?`<div class="dep-building-missing">
                               <span>尚缺 ${S.length} 个登记楼层</span>
                               <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-fill-missing-floors="${s(f.id)}" ${l}>补齐楼层</button>
                             </div>`:""}
                    </div>
                  </article>`}).join("")}
          </div>`}
    </section>
  `}function tn(t,e,a){const{canEdit:n,caps:o}=t,l=Xt(n,o.spatial,"待后端空间建档接口对接"),c=t.sortedBuildingFloors(a.id),E=c.filter(S=>!S.plan).length,v=c.filter(S=>t.tree.zones.filter(_=>_.floorId===S.id).length===0).length,f=xa(a,c),y=t.floorListSearch.trim().toLowerCase(),I=c.filter(S=>{if(t.floorListFilter==="missing_plan"&&S.plan||t.floorListFilter==="missing_zone"&&t.tree.zones.filter(_=>_.floorId===S.id).length>0)return!1;if(y){const _=t.tree.zones.filter(p=>p.floorId===S.id).map(p=>p.name).join(" ");if(!`${S.name} ${_}`.toLowerCase().includes(y))return!1}return!0});return`
    <div class="dep-drill-bar">
      <div class="dep-drill-left">
        <button type="button" class="dep-back-btn" data-proj-drill="overview">
          ${ce("arrow-left",16)}
          <span>项目配置</span>
        </button>
        <span class="dep-drill-sep" aria-hidden="true">/</span>
        ${e.length>1?`<select class="pacom-select" name="drillBuildingSelect" data-switch-drill-building aria-label="切换当前楼宇" style="width:auto; min-width:112px;">
                 ${e.map(S=>`<option value="${s(S.id)}" ${S.id===a.id?"selected":""}>${s(S.name)}</option>`).join("")}
               </select>`:`<h2 class="pacom-unified-title">${s(a.name)}</h2>`}
        <span class="pacom-row-sub">地上 ${a.aboveFloors} 层${a.belowFloors>0?` ｜ 地下 ${a.belowFloors} 层`:""}${a.hasRoof?" ｜ RF":""} ｜ 共 ${c.length} 层</span>
      </div>
      <div class="pacom-unified-head-actions">
        <button type="button" class="pacom-btn" data-edit-building="${s(a.id)}" ${l}>楼宇参数</button>
        ${f.length>0?`<button type="button" class="pacom-btn" data-fill-missing-floors="${s(a.id)}" ${l}>补齐 ${f.length} 层</button>`:""}
        <button type="button" class="pacom-btn" data-open-new-floor="1" ${l}>+ 新增楼层</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-batch-modal="1" ${l}>批量导入底图</button>
      </div>
    </div>

    ${c.length===0?`
        <div class="dep-empty-card">
          <div class="dep-empty-icon">${ce("layers",20)}</div>
          <strong style="font-size:16px; line-height:24px; font-weight:500; color:var(--pacom-text-primary);">${s(a.name)} 暂无楼层</strong>
          <span class="pacom-row-sub">可按楼宇结构一键生成全部楼层，或手动新增单个楼层。</span>
          <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
            <button type="button" class="pacom-btn pacom-btn--primary" data-fill-missing-floors="${s(a.id)}" ${l}>一键生成全部楼层</button>
            <button type="button" class="pacom-btn" data-open-new-floor="1" ${l}>+ 新增楼层</button>
          </div>
        </div>`:`
        <div class="pacom-log-toolbar">
          <div class="pacom-log-filters">
            <div class="pacom-tabs" role="tablist" aria-label="楼层筛选">
              <button type="button" class="pacom-tab" role="tab" aria-selected="${t.floorListFilter==="all"}" data-floor-list-filter="all">全部 ${c.length}</button>
              <button type="button" class="pacom-tab" role="tab" aria-selected="${t.floorListFilter==="missing_plan"}" data-floor-list-filter="missing_plan">缺底图 ${E}</button>
              <button type="button" class="pacom-tab" role="tab" aria-selected="${t.floorListFilter==="missing_zone"}" data-floor-list-filter="missing_zone">缺功能区 ${v}</button>
            </div>
            <input class="pacom-input" name="floorListSearch" style="width:220px;" data-floor-list-search placeholder="搜索楼层或功能区…" value="${s(t.floorListSearch)}" aria-label="搜索楼层或功能区" />
          </div>
          <span class="pacom-row-sub">点击任意楼层进入单层底图与功能区精配</span>
        </div>

        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead>
                <tr>
                  <th>楼层</th>
                  <th>建筑面积</th>
                  <th>2D 平面底图</th>
                  <th>功能区</th>
                  <th style="text-align:right;">操作</th>
                </tr>
              </thead>
              <tbody>
                ${I.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>当前筛选无匹配楼层</strong><span>可切换回「全部」查看整栋楼层。</span></div></td></tr>':I.map(S=>{const _=t.tree.zones.filter(p=>p.floorId===S.id);return`
                            <tr style="cursor:pointer;" data-drill-floor="${s(S.id)}">
                              <td>
                                <div style="display:inline-flex; align-items:center; gap:8px;">
                                  <span class="pacom-dot ${S.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                  <strong>${s(S.name)}</strong>
                                </div>
                              </td>
                              <td><span class="pacom-row-sub">${S.areaSqm?`${S.areaSqm} m²`:"—"}</span></td>
                              <td>
                                <div style="display:inline-flex; align-items:center; gap:8px;">
                                  ${S.plan?`<button type="button" class="dep-floor-thumb" data-open-lightbox="1" data-lb-title="${s(a.name)} ${s(S.name)} 平面底图" data-lb-src="${s(S.plan.imageUrl)}" title="查看大图"><img src="${s(S.plan.imageUrl)}" alt="${s(S.name)}" /></button>
                                         <span class="pacom-badge ${t.planChangeAlerts[S.id]?"pacom-badge--warning":"pacom-badge--online"}">${t.planChangeAlerts[S.id]?"换图待核对":"已就绪"}</span>`:'<span class="pacom-badge pacom-badge--warning">待上传</span>'}
                                  <label class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-stop-row="1" style="cursor:${!n||!o.spatial?"not-allowed":"pointer"}; opacity:${!n||!o.spatial?"0.45":"1"};">
                                    <span>${S.plan?"替换":"上传"}</span>
                                    <input type="file" name="floorPlan_${s(S.id)}" accept="image/*" data-upload-floor="${s(S.id)}" style="display:none;" ${l} />
                                  </label>
                                </div>
                              </td>
                              <td>
                                ${_.length>0?`<span>${_.length} 区</span> <span class="pacom-row-sub" style="margin-left:4px;">${s(_.slice(0,2).map(p=>p.name.replace(new RegExp(`^${S.name}\\s*`,"i"),"")).join("、"))}${_.length>2?"…":""}</span>`:'<span class="pacom-row-sub">未划分</span>'}
                              </td>
                              <td>
                                <div style="display:flex; justify-content:flex-end; gap:6px;">
                                  <button type="button" class="pacom-btn pacom-btn--sm" data-drill-floor-btn="${s(S.id)}">配置</button>
                                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-jump-floor-marking="${s(S.id)}">设备标记 →</button>
                                </div>
                              </td>
                            </tr>`}).join("")}
              </tbody>
            </table>
          </div>
          <div class="pacom-table-footer">
            <span>显示 ${I.length} / ${c.length} 层 ｜ 已传底图 ${c.length-E} 层</span>
          </div>
        </div>`}
  `}function an(t,e,a,n){const{canEdit:o,caps:l}=t,c=Xt(o,l.spatial,"待后端空间建档接口对接"),E=Xt(o,l.floorDocs,"待后端工程资料接口对接"),v=a.findIndex(d=>d.id===n.id),f=v>0?a[v-1]:null,y=v>=0&&v<a.length-1?a[v+1]:null,I=t.tree.zones.filter(d=>d.floorId===n.id),S=t.floorDocs.filter(d=>d.floorId===n.id),_=t.floorDevices,p=a.filter(d=>d.id!==n.id);return`
    <div class="dep-drill-bar">
      <div class="dep-drill-left">
        <button type="button" class="dep-back-btn" data-proj-drill="building">
          ${ce("arrow-left",16)}
          <span>${s(e.name)}</span>
        </button>
        <span class="dep-drill-sep" aria-hidden="true">/</span>
        <div class="dep-floor-pager" role="group" aria-label="连续切换楼层">
          <button type="button" class="dep-floor-pager-btn" data-drill-floor-btn="${s(f?.id??"")}" ${f?`title="上一层（${s(f.name)}）"`:"disabled"} aria-label="上一层">
            ${ce("chevron-left",14)}
          </button>
          <select class="pacom-select" name="drillFloorSelect" data-switch-drill-floor aria-label="切换当前楼层" style="width:auto; min-width:92px;">
            ${a.map(d=>`<option value="${s(d.id)}" ${d.id===n.id?"selected":""}>${s(d.name)}${d.plan?"":"（缺图）"}</option>`).join("")}
          </select>
          <button type="button" class="dep-floor-pager-btn" data-drill-floor-btn="${s(y?.id??"")}" ${y?`title="下一层（${s(y.name)}）"`:"disabled"} aria-label="下一层">
            ${ce("chevron-right",14)}
          </button>
        </div>
        <span class="pacom-badge ${t.planChangeAlerts[n.id]?"pacom-badge--warning":n.plan?"pacom-badge--online":"pacom-badge--warning"}">${t.planChangeAlerts[n.id]?"换图待核对":n.plan?"底图已就绪":"待传底图"}</span>
      </div>
      <div class="pacom-unified-head-actions">
        <button type="button" class="pacom-btn" data-jump-floor-marking="${s(n.id)}">前往设备标记 →</button>
      </div>
    </div>

    <div class="dep-plan-preview-box" data-single-floor-drop="${s(n.id)}">
      <div class="dep-plan-toolbar">
        ${n.plan?`<button type="button" class="dep-plan-tool-btn" data-open-lightbox="1" data-lb-title="${s(e.name)} ${s(n.name)} 平面底图" data-lb-src="${s(n.plan.imageUrl)}">查看大图</button>`:""}
        <label class="dep-plan-tool-btn" style="cursor:${!o||!l.spatial?"not-allowed":"pointer"}; opacity:${!o||!l.spatial?"0.45":"1"};">
          <span>${n.plan?"替换底图":"上传底图"}</span>
          <input type="file" name="floorPlanDrop_${s(n.id)}" accept="image/*" data-upload-floor="${s(n.id)}" style="display:none;" ${c} />
        </label>
        ${n.plan?`<button type="button" class="dep-plan-tool-btn" style="color:var(--pacom-status-critical);" data-clear-floor-plan="${s(n.id)}" ${c}>清空</button>`:""}
      </div>
      ${n.plan?`<img src="${s(n.plan.imageUrl)}" alt="${s(n.name)} 平面底图" style="width:100%; max-height:360px; object-fit:contain; display:block;" />`:`<div class="dep-plan-empty-drop">
               <div class="dep-empty-icon">${ce("upload",20)}</div>
               <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-primary);">拖拽 ${s(n.name)} 2D 平面图到此处上传</strong>
               <span class="pacom-row-sub">支持透明 WebP / PNG / JPG，上传后可直接前往设备标记</span>
               <label class="pacom-btn pacom-btn--primary" style="cursor:${!o||!l.spatial?"not-allowed":"pointer"}; opacity:${!o||!l.spatial?"0.45":"1"};">
                 <span>选择平面图文件</span>
                 <input type="file" name="floorPlanEmpty_${s(n.id)}" accept="image/*" data-upload-floor="${s(n.id)}" style="display:none;" ${c} />
               </label>
             </div>`}
    </div>

    <section class="pacom-section">
      <div class="pacom-section-head">
        <h2 class="pacom-section-title">楼层属性与空间划分</h2>
        <span class="pacom-row-sub">已关联 ${_.length} 台设备 ｜ ${I.length} 个功能区</span>
      </div>
      <div class="pacom-settings-card">
        <div class="pacom-setting-row">
          <form data-save-floor="${s(n.id)}" style="display:flex; align-items:flex-end; gap:12px; flex-wrap:wrap; flex:1;">
            <label class="dep-field" style="width:120px;">
              <span class="dep-field-label">楼层名称</span>
              <input class="pacom-input" name="fName" value="${s(n.name)}" required ${c} />
            </label>
            <label class="dep-field" style="width:150px;">
              <span class="dep-field-label">建筑面积 (m²)</span>
              <input class="pacom-input" name="fArea" type="number" step="0.1" value="${s(n.areaSqm??"")}" placeholder="选填" ${c} />
            </label>
            <button type="submit" class="pacom-btn" ${c}>保存属性</button>
          </form>
          <button type="button" class="pacom-btn pacom-btn--danger" data-delete-floor="${s(n.id)}" ${!o||!l.spatial||_.length>0?`disabled title="${_.length>0?`已关联 ${_.length} 台设备，请先解绑后再删除`:o?"待后端空间建档接口对接":"当前角色为只读权限"}"`:""}>删除楼层</button>
        </div>

        <div class="pacom-setting-row" style="justify-content:space-between; gap:12px;">
          <div style="display:flex; align-items:center; gap:8px;">
            <div class="pacom-tabs" role="tablist" aria-label="楼层附属配置">
              <button type="button" class="pacom-tab" role="tab" aria-selected="${t.floorDetailTab==="zones"}" data-floor-detail-tab="zones">功能区（${I.length}）</button>
              <button type="button" class="pacom-tab" role="tab" aria-selected="${t.floorDetailTab==="docs"}" data-floor-detail-tab="docs">工程资料（${S.length}）</button>
            </div>
            ${Et("功能区与工程资料说明","功能区用于按办公区、实验区、会议室等逻辑范围归类设备与策略；标准层划分后可一键复用至其他楼层。")}
          </div>
          ${t.floorDetailTab==="zones"?I.length>0&&p.length>0?`<button type="button" class="pacom-btn" data-open-copy-zones="${s(n.id)}" ${c}>复用至其他层…</button>`:"":`<label class="pacom-btn" style="cursor:${!o||!l.floorDocs?"not-allowed":"pointer"}; opacity:${!o||!l.floorDocs?"0.45":"1"};">
                   <span>+ 关联文件</span>
                   <input type="file" name="attachDoc_${s(n.id)}" accept=".pdf,.xlsx,.xls,.csv,.doc,.docx,.dwg,.png,.jpg,.jpeg,.webp,.txt" data-attach-doc="${s(n.id)}" style="display:none;" ${E} />
                 </label>`}
        </div>

        ${t.floorDetailTab==="zones"?`
              ${I.length===0?`
                  <div class="pacom-setting-row" style="flex-direction:column; align-items:flex-start; gap:10px;">
                    <span class="pacom-row-sub">本层暂未划分功能区，可一键套用常用标准模板：</span>
                    <div style="display:flex; flex-wrap:wrap; gap:8px;">
                      ${$s.map(d=>`<button type="button" class="pacom-btn pacom-btn--sm" data-apply-zone-tpl="${s(d.key)}" data-tpl-floor="${s(n.id)}" ${c}>+ ${s(d.label)}</button>`).join("")}
                    </div>
                  </div>`:I.map(d=>t.editingZoneId===d.id?`
                            <form class="pacom-setting-row" style="gap:10px; justify-content:flex-start; align-items:flex-end;" data-save-edit-zone="${s(d.id)}" data-zone-floor="${s(n.id)}">
                              <label class="dep-field" style="width:220px;">
                                <span class="dep-field-label">功能区名称</span>
                                <input class="pacom-input" name="zName" value="${s(d.name)}" required ${c} />
                              </label>
                              <label class="dep-field" style="width:140px;">
                                <span class="dep-field-label">空间类型</span>
                                <select class="pacom-select" name="zCat" ${c}>
                                  ${Object.keys(ta).map(C=>`<option value="${C}" ${d.category===C?"selected":""}>${ta[C]}</option>`).join("")}
                                </select>
                              </label>
                              <button type="submit" class="pacom-btn pacom-btn--primary" ${c}>保存</button>
                              <button type="button" class="pacom-btn" data-cancel-edit-zone="1">取消</button>
                            </form>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">${s(d.name)} <span class="pacom-badge pacom-badge--neutral">${s(ta[d.category]??d.category)}</span></span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-zone="${s(d.id)}" ${c}>编辑</button>
                                <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-del-zone="${s(d.id)}" ${c}>删除</button>
                              </div>
                            </div>`).join("")}
              <form class="pacom-setting-row" style="gap:10px; justify-content:flex-start; align-items:flex-end;" data-add-zone="${s(n.id)}">
                <label class="dep-field" style="width:240px;">
                  <span class="dep-field-label">新增功能区</span>
                  <input class="pacom-input" name="zoneName" placeholder="如：${s(n.name)} 东侧实验区" required ${c} />
                </label>
                <label class="dep-field" style="width:140px;">
                  <span class="dep-field-label">空间类型</span>
                  <select class="pacom-select" name="zoneCat" ${c}>
                    ${Object.keys(ta).map(d=>`<option value="${d}">${ta[d]}</option>`).join("")}
                  </select>
                </label>
                <button type="submit" class="pacom-btn" ${c}>+ 添加功能区</button>
              </form>`:S.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无关联竣工图纸或设备手册，可点击右上角「+ 关联文件」挂载。</span></div>':S.map(d=>`
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">${s(d.name)}</span>
                        <span class="pacom-row-sub">${s(d.boundScope)} ｜ ${s(d.size)} ｜ ${s(d.updatedAt)}</span>
                      </div>
                      <div class="pacom-setting-control">
                        <select class="pacom-select" name="docCat_${s(d.id)}" data-doc-category="${s(d.id)}" aria-label="资料分类" style="width:108px;" ${Xt(o,l.manageDocs,"待后端资料分类接口对接")}>
                          ${Ns.map(C=>`<option value="${C}" ${d.category===C?"selected":""}>${C}</option>`).join("")}
                        </select>
                        <button type="button" class="pacom-btn pacom-btn--sm" data-preview-doc="${s(d.id)}">${d.fileUrl?"打开":"查阅"}</button>
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-del-doc="${s(d.id)}" ${Xt(o,l.manageDocs,"待后端工程资料删除接口对接")}>删除</button>
                      </div>
                    </div>`).join("")}
      </div>
    </section>
  `}function Ct(t,e,a){return t?e?"":`disabled title="${s(a)}"`:'disabled title="当前角色为只读权限"'}const Ss="pacom.web.deployState.v1";function sn(){try{if(typeof sessionStorage<"u"){const t=sessionStorage.getItem(Ss);if(t)return JSON.parse(t)}}catch{}return{}}async function nn(t,e,a){let n=a;const o=Ms(e),l=Ks(),c=sn(),E=new URLSearchParams(window.location.hash.split("?")[1]??""),v=E.get("sec"),f=E.get("floor");let y=v?v==="floorplan"||v==="devices"?"device_marking":v==="inventory"?"device_list":v==="groups"?"device_groups":v==="network"||v==="network_topo"?"device_network":v==="connections"?"connections":v==="overview"||v==="acceptance"?"acceptance":"project_config":c.activeNav??"project_config",I=v==="floors"?"floor":!v&&c.projectDrill?c.projectDrill:"overview",S=Ia(),_=!1,p="",d=await e.getSpatialTree(),C=[];const A=new Map;let B=[],V={},K={version:1,dirty:!1,lastSyncedAt:null},pe={};const re=new Map;let de=[],ie=[],ve=[],te=[],H={},J={};const be={...Ps},Ne=S.level!=="all-projects"?S.projectId:"",$e=S.level==="building"||S.level==="floor"?S.buildingId:"",ke=S.level==="floor"?S.floorId:"",Ie=f?d.floors.find(w=>w.id===f):null,O=Ie?d.buildings.find(w=>w.id===Ie.buildingId):null;let U=O?.projectId??(Ne&&d.projects.some(w=>w.id===Ne)?Ne:c.activeProjectId&&d.projects.some(w=>w.id===c.activeProjectId)?c.activeProjectId:d.projects[0]?.id??""),ae=O?.id??($e&&d.buildings.some(w=>w.id===$e&&w.projectId===U)?$e:c.activeBuildingId&&d.buildings.some(w=>w.id===c.activeBuildingId&&w.projectId===U)?c.activeBuildingId:d.buildings.find(w=>w.projectId===U)?.id??""),j=Ie?.id??(ke&&d.floors.some(w=>w.id===ke&&w.buildingId===ae)?ke:c.activeFloorId&&d.floors.some(w=>w.id===c.activeFloorId&&w.buildingId===ae)?c.activeFloorId:ut(ae)[0]?.id??""),h="all",D="",G="zones",g=null,P="device",Q="",je="all",Ye=!1,Me=!1,Ae="binding",W=null,x=null,L=!1,Y=!1,oe=1,ge=0,Fe=0,lt="",Ue="all",Ce="all",bt="mesh",et=[],vt="list",u="",T="all",le=null,ye=null,qe=!1,Pe="active",Be=null,De=E.get("new")==="project",Ee=null,Te=!1,rt=!1,pt=null,Ht=null,Gt=!1,Ve=!1,Se=!1,gt=[],wt=null,ht=new Set,Wt=!1,nt=null,St=null,kt=!1,It="",tt=null,xt=null,ue="",se="";function ra(){try{typeof sessionStorage<"u"&&sessionStorage.setItem(Ss,JSON.stringify({activeNav:y,projectDrill:I,activeProjectId:U,activeBuildingId:ae,activeFloorId:j}))}catch{}}function $t(w){if(!w){x=null;return}const q=C.filter(Z=>Z.category==="gateway");x={deviceId:w.id,gatewayId:w.hardwareBinding?.gatewayId??(w.category==="gateway"?w.id:q[0]?.id??""),protocol:w.hardwareBinding?.protocol??Ra[0],networkAddress:w.hardwareBinding?.networkAddress??"",portOrChannel:w.hardwareBinding?.portOrChannel??"",physicalInstalled:w.physicalInstalled}}function ut(w){return[...d.floors.filter(q=>q.buildingId===w)].sort((q,Z)=>va(Z.name)-va(q.name))}function Zt(w){if(!w)return"未分配功能区";const q=d.zones.find(ne=>ne.id===w);if(!q)return w;const Z=d.floors.find(ne=>ne.id===q.floorId);return Z?q.name.replace(new RegExp(`^${Z.name}\\s*`,"i"),""):q.name}function me(){De=!1,Ee=null,Te=!1,rt=!1,pt=null,Ht=null,Gt=!1,Ve=!1,wt=null,Wt=!1,nt=null,St=null,kt=!1,tt=null}function ca(){return!!(De||Te||rt||Ht||Gt||Ve||wt||Wt||nt||St||kt||tt)}function ea(){if(!U){S=jt({level:"all-projects"});return}ae&&j?S=jt({level:"floor",projectId:U,buildingId:ae,floorId:j}):ae?S=jt({level:"building",projectId:U,buildingId:ae}):S=jt({level:"project",projectId:U})}function Mt(w){const q=d.buildings.find(ne=>ne.id===w);if(!q)return;U=q.projectId,ae=q.id;const Z=ut(q.id);Z.some(ne=>ne.id===j)||(j=Z.find(_e=>(A.get(_e.id)?.length??0)>0)?.id??Z[0]?.id??""),ea(),W=null,Me=!1,Y=!1,oe=1,ge=0,Fe=0}function At(w){const q=d.floors.find(ne=>ne.id===w);if(!q)return;j=q.id,ae=q.buildingId;const Z=d.buildings.find(ne=>ne.id===q.buildingId);Z&&(U=Z.projectId),ea(),W=null,Me=!1,Y=!1,g=null,oe=1,ge=0,Fe=0}async function ze(){if(!j){C=[],B=[],V={},K={version:1,dirty:!1,lastSyncedAt:null},de=[],ie=[];return}const[w,q,Z,ne,_e,Oe,Ke]=await Promise.all([e.getFloorDevices(j).catch(()=>[]),e.listLightMarkers?e.listLightMarkers(j).catch(()=>[]):Promise.resolve([]),e.listMeshRoles?e.listMeshRoles(j).catch(()=>({})):Promise.resolve({}),e.getEdgeSyncState?e.getEdgeSyncState(j).catch(()=>({version:1,dirty:!1,lastSyncedAt:null})):Promise.resolve({version:1,dirty:!1,lastSyncedAt:null}),e.listDeviceGroups?e.listDeviceGroups(j).catch(()=>[]):Promise.resolve([]),e.listFloorDocs?e.listFloorDocs(j).catch(()=>[]):Promise.resolve([]),e.getFloorFttRecord?e.getFloorFttRecord(j).catch(()=>null):Promise.resolve(null)]);C=w,A.set(j,w),B=q,V=Z,K=ne,pe[j]=ne,de=_e,ie=Oe,Ke?J[j]=Ke:delete J[j],e.getDeviceParams&&await Promise.all(w.map(async r=>{const m=await e.getDeviceParams(r.id).catch(()=>null);m&&re.set(r.id,m)})),W&&!C.some(r=>r.id===W)&&(W=null,Me=!1,L=!1,x=null);const i=C.find(r=>r.id===W);(!x||x.deviceId!==i?.id)&&$t(i)}async function yt(){if(A.clear(),pe={},J={},H={},te=[],!ae)return;const w=ut(ae);e.listPlanChangeAlerts&&(H=await e.listPlanChangeAlerts(ae).catch(()=>({})));const q=[];await Promise.all(w.map(async ne=>{if(!(n.scope.allowedFloorIds.includes(ne.id)||n.scope.canEditDeployment)){A.set(ne.id,[]);return}const[Oe,Ke,i,r]=await Promise.all([e.getFloorDevices(ne.id).catch(()=>[]),e.getEdgeSyncState?e.getEdgeSyncState(ne.id).catch(()=>({version:1,dirty:!1,lastSyncedAt:null})):Promise.resolve({version:1,dirty:!1,lastSyncedAt:null}),e.getFloorFttRecord?e.getFloorFttRecord(ne.id).catch(()=>null):Promise.resolve(null),e.listDeliveryBatches(ne.id).catch(()=>[])]);A.set(ne.id,Oe),pe[ne.id]=Ke,i&&(J[ne.id]=i),q.push(r)}));const Z=new Set;te=q.flat().filter(ne=>Z.has(ne.id)?!1:(Z.add(ne.id),!0)).sort((ne,_e)=>_e.frozenAt.localeCompare(ne.frozenAt))}async function Xe(){se="";const w=await e.getSession().catch(()=>null);if(w&&(n=w),d=await e.getSpatialTree(),d.projects.length===0)U="",ae="",j="",I="overview";else{d.projects.some(ne=>ne.id===U)||(U=d.projects[0].id,I="overview");const q=d.buildings.filter(ne=>ne.projectId===U);q.some(ne=>ne.id===ae)||(ae=q[0]?.id??"",I!=="overview"&&(I="overview"));const Z=ae?ut(ae):[];Z.some(ne=>ne.id===j)||(j=Z[0]?.id??"",I==="floor"&&(I=ae?"building":"overview"))}ea(),ve=U?await e.listConnections(U).catch(()=>[]):[],await yt(),await ze(),$()}const da=w=>{if(!document.body.contains(t)){document.removeEventListener("keydown",da),document.removeEventListener("click",ft),l.destroy();return}if(w.key==="Escape"){xt?(xt=null,$()):ca()?(me(),$()):qe?(qe=!1,$()):_?(_=!1,$()):Y?(Y=!1,$()):Me&&(Me=!1,$());return}if(w.key==="Tab"&&ca()){const q=t.querySelector(".dep-modal-card");if(!q)return;const Z=Array.from(q.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])')).filter(Oe=>Oe.offsetParent!==null);if(Z.length===0)return;const ne=Z[0],_e=Z[Z.length-1];w.shiftKey&&document.activeElement===ne?(w.preventDefault(),_e.focus()):!w.shiftKey&&document.activeElement===_e&&(w.preventDefault(),ne.focus())}},ft=w=>{if(!document.body.contains(t)){document.removeEventListener("click",ft);return}const q=w.target;qe&&!q?.closest(".dep-more-wrap")&&(qe=!1,$()),_&&!q?.closest('[data-role="global-space-wrap"]')&&(_=!1,$())};document.addEventListener("keydown",da),document.addEventListener("click",ft);function k(){const w=t.querySelector('[data-role="dep-viewport"]');w&&(w.style.transform=`translate(${ge}px, ${Fe}px) scale(${oe})`);const q=t.querySelector('[data-role="dep-zoom-label"]');q&&(q.textContent=`${Math.round(oe*100)}%`)}function z(w){se="",w.hardwareBinding?w.connectivity==="offline"?se=`单机回读自检未通过（FAIL）：「${w.name}」当前离线，请核查网关链路或现场供电。`:ue=`单机回读自检通过（PASS）：「${w.name}」指令下发与状态回读一致，已安全复位。`:se=`单机回读自检未通过（FAIL）：「${w.name}」尚未完成硬件绑定，请先填写协议、地址与上游网关后再执行自检。`,$()}async function X(w){se="";const q=d.floors.find(i=>i.id===w)?.name??"当前楼层",Z=A.get(w)??(w===j?C:[]);if(Z.length===0){se=`${q} 尚无登记设备，无法执行全层自检。`,$();return}const ne=Z.filter(i=>i.connectivity==="offline"||!i.hardwareBinding),_e=Z.length-ne.length,Oe=new Date,Ke=`${String(Oe.getHours()).padStart(2,"0")}:${String(Oe.getMinutes()).padStart(2,"0")}:${String(Oe.getSeconds()).padStart(2,"0")}`;if(Be={buildingId:ae,ranAt:Ke,floorName:q,total:Z.length,passed:_e,failed:ne.length,failedNames:ne.map(i=>`${i.name}${i.hardwareBinding?"（离线）":"（未绑定）"}`)},ne.length>0)se=`${q} 全层批量自检完成：${_e}/${Z.length} 台通过，${ne.length} 台异常（${Be.failedNames.join("、")}）。`;else{if(e.recordFloorFttPass){const i=await e.recordFloorFttPass(w,Z.length).catch(()=>null);i&&(J[w]=i)}ue=`${q} 全层批量自检全部通过（${_e}/${Z.length}），设备已自动安全复位。`}$()}function ee(){const w=C.filter(Ut),q=[],Z=w.filter(i=>i.connectivity==="offline"),ne=w.filter(i=>!i.planPoint),_e=w.filter(i=>V[i.id]?.proxy).length,Oe=w.filter(i=>V[i.id]?.relay).length,Ke=w.length?Oe/w.length:0;w.length===0?q.push({level:"warn",title:"本层暂无蓝牙 Mesh 无线节点",detail:"可在「设备标记」中新增网关、传感器或照明面板。"}):Z.length>0?Z.forEach(i=>q.push({level:"fail",title:`无线节点不可达：${i.name}`,detail:"建议核查供电及网关距离，必要时在遮挡拐角处增设中继器。",deviceId:i.id})):q.push({level:"ok",title:"蓝牙 Mesh 节点全部可达",detail:`${w.length} 台无线节点均正常响应心跳。`}),w.length>0&&_e<1?q.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，便于移动端就近入网。"}):_e>0&&q.push({level:"ok",title:`代理节点配置合理（${_e} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),Ke>.25&&w.length>=4&&q.push({level:"warn",title:`中继比例偏高（${Math.round(Ke*100)}%）`,detail:"建议将 Relay 中继控制在总节点 10% 左右，避免广播风暴。"}),ne.length>0&&q.push({level:"warn",title:`尚有 ${ne.length} 台无线节点未完成设备标记`,detail:"请前往「设备标记」补齐平面坐标以便现场施工定位。"}),et=q,ue=`已完成无线蓝牙 Mesh 网络体检（检测 ${w.length} 台节点，发现 ${q.filter(i=>i.level!=="ok").length} 项关注）。`,$()}function fe(){const w=Oe=>`"${String(Oe).replaceAll('"','""')}"`;if(y==="acceptance"){const Oe=Ze(),Ke=d.buildings.find(R=>R.id===ae),i=ae?ut(ae):[],r=[`[楼层部署门控汇总 - ${Ke?.name??"当前楼宇"}]`,["楼层","底图状态","设备标记","绑定与物理复核","在线入网","边缘同步","自检FTT","交付状态","阻止项"].join(","),...i.map(R=>{const N=Sa(Oe,R.id);return[R.name,N.planAlert?"换图待核对":N.hasPlan?`已就绪(v${R.plan?.planVersion??1})`:"待传底图",`${N.placedCount}/${N.deviceCount}`,`${N.boundVerifiedCount}/${N.deviceCount}`,`${N.onlineCount}/${N.deviceCount}`,N.syncDirty?"待同步":"已同步",N.fttRecord?"已通过":"未自检",N.readyForFormalFreeze?"可正式冻结":N.deviceCount>0?"实施中":"待配置",N.blockers.join(" / ")||"无"].map(w).join(",")}),"","[整栋设备部署明细]",["楼层","设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...i.flatMap(R=>(A.get(R.id)??[]).map(N=>[R.name,N.name,N.category,Zt(N.logicalZoneId),N.planPoint?`${Math.round(N.planPoint.x*100)}%/${Math.round(N.planPoint.y*100)}%`:"未标记",N.hardwareBinding?`${N.hardwareBinding.protocol} ${N.hardwareBinding.networkAddress}`:"未绑定",N.physicalInstalled?"已复核":"待复核",N.connectivity==="online"?"在线":"离线"].map(w).join(","))),"","[交付冻结与阶段留档记录]",["版本标签","所属楼层","核验进度","状态","记录人","时间","备注"].join(","),...te.map(R=>[R.versionTag,d.floors.find(N=>N.id===R.floorId)?.name??R.floorId,`${R.verifiedCount}/${R.deviceCount}`,R.status==="draft"?"阶段留档":"已冻结",R.frozenBy,R.frozenAt,R.note??""].map(w).join(","))],m=new Blob([`\uFEFF${r.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),b=URL.createObjectURL(m),M=document.createElement("a");M.href=b,M.download=`pacom-deployment-checklist-${Ke?.name??"building"}.csv`,M.click(),URL.revokeObjectURL(b);return}const q=[["楼层","设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...C.map(Oe=>[d.floors.find(Ke=>Ke.id===Oe.floorId)?.name??Oe.floorId,Oe.name,Oe.category,Zt(Oe.logicalZoneId),Oe.planPoint?`${Math.round(Oe.planPoint.x*100)}%/${Math.round(Oe.planPoint.y*100)}%`:"未标记",Oe.hardwareBinding?`${Oe.hardwareBinding.protocol} ${Oe.hardwareBinding.networkAddress}`:"未绑定",Oe.physicalInstalled?"已复核":"待复核",Oe.connectivity==="online"?"在线":"离线"].map(w).join(","))],Z=new Blob([`\uFEFF${q.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),ne=URL.createObjectURL(Z),_e=document.createElement("a");_e.href=ne,_e.download="pacom-device-list.csv",_e.click(),URL.revokeObjectURL(ne)}async function We(w){const q=d.buildings.find(ne=>ne.id===w);if(!q||!e.upsertFloor)return 0;const Z=xa(q,ut(q.id));for(const ne of Z)await e.upsertFloor({buildingId:q.id,kind:ne.kind,level:ne.level,name:ne.name});return Z.length}function He(){const w=(q,Z,ne,_e=!1)=>`
      <button type="button" class="pacom-unified-item" aria-current="${y===q}" data-dep-nav="${q}">
        ${ce(Z,16)}
        <span>${ne}</span>
        ${_e?'<span class="dep-rail-dot" title="有配置变更待同步至边缘网关"></span>':""}
      </button>`;return`
      <aside class="pacom-unified-rail" aria-label="系统部署菜单">
        <div class="pacom-unified-group">
          <div class="pacom-unified-group-title">空间建档</div>
          ${w("project_config","layers","项目配置")}
        </div>
        <div class="pacom-unified-group">
          <div class="pacom-unified-group-title">设备部署</div>
          ${w("device_marking","map-pin","设备标记")}
          ${w("device_list","list","设备列表")}
          ${w("device_groups","folder-kanban","设备分组")}
          ${w("device_network","waypoints","设备网络",K.dirty)}
        </div>
        <div class="pacom-unified-group">
          <div class="pacom-unified-group-title">接入与验收</div>
          ${w("connections","plug","系统接入")}
          ${w("acceptance","clipboard-check","交付验收")}
        </div>
      </aside>
    `}function ot(w){if(d.projects.length===0)return`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${Ct(w,o.spatial,"待后端空间建档接口对接")}>+ 新建项目</button>`;if(y==="project_config"){if(I!=="overview")return"";const q=Ct(w,o.spatial,"待后端空间建档接口对接"),Z=d.buildings.some(ne=>ne.projectId===U);return`
        <button type="button" class="pacom-btn" data-open-new-proj="1" ${q}>+ 新建项目</button>
        ${Z?`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-bld="1" ${q}>+ 新建楼宇</button>`:""}
      `}if(y==="device_marking")return`
        <button type="button" class="pacom-btn" data-export-inv="1">导出标记表</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-dev="1" ${Ct(w,o.createDevice,"待后端设备建档接口对接")}>+ 新增设备</button>
      `;if(y==="device_list")return`
        <button type="button" class="pacom-btn" data-export-inv="1">导出 CSV</button>
        <button type="button" class="pacom-btn" data-batch-ftt="1" ${C.length===0?"disabled":""}>全层自检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-dev="1" ${Ct(w,o.createDevice,"待后端设备建档接口对接")}>+ 新增设备</button>
      `;if(y==="device_groups")return`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-group="1" ${Ct(w,o.deviceGroups,"待后端设备分组接口对接")}>+ 新建分组</button>`;if(y==="device_network")return`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${Ct(w,o.edgeSync,"待后端边缘同步接口对接")}>${K.dirty?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `;if(y==="connections"){const q=Ct(w,o.restartEdge,"待后端边缘维护接口对接");return`
        <div class="dep-more-wrap">
          <button type="button" class="pacom-square-icon-btn" data-toggle-conn-more="1" aria-haspopup="menu" aria-expanded="${qe}" aria-label="更多操作" title="更多操作">${ce("more-horizontal",16)}</button>
          ${qe?`<div class="dep-more-menu" role="menu">
                   <button type="button" class="dep-more-item dep-more-item--danger" role="menuitem" data-req-restart-edge="1" ${q}>
                     ${ce("rotate-ccw",14)}
                     <span>重启边缘服务</span>
                   </button>
                 </div>`:""}
        </div>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-conn="1" ${Ct(w,o.manageConnections,"待后端系统接入写入接口对接")}>+ 新增接入通道</button>
      `}return`
      <button type="button" class="pacom-btn" data-export-inv="1">导出部署清单</button>
      <button type="button" class="pacom-btn pacom-btn--primary" data-open-freeze-modal="1" ${w?"":'disabled title="当前角色为只读权限"'}>交付冻结</button>
    `}function Ze(){return{session:n,canEdit:n.scope.canEditDeployment,caps:o,tree:d,activeNav:y,projectDrill:I,activeProjectId:U,activeBuildingId:ae,activeFloorId:j,floorDevices:C,buildingDevicesByFloor:A,lightMarkers:B,meshRoles:V,edgeSync:K,edgeSyncByFloor:pe,deviceParams:re,groups:de,floorDocs:ie,connections:ve,buildingDeliveries:te,planChangeAlerts:H,floorFttRecords:J,zoneBoxes:be,floorListFilter:h,floorListSearch:D,floorDetailTab:G,editingZoneId:g,canvasBrush:P,canvasSearch:Q,deviceFilter:je,hudPoolOpen:Ye,drawerOpen:Me,drawerTab:Ae,selectedId:W,bindingDraft:x,editingDeviceMeta:L,placingMode:Y,zoom:oe,panX:ge,panY:Fe,listSearch:lt,listStatusFilter:Ue,listCategoryFilter:Ce,topoMode:bt,meshFindings:et,connViewMode:vt,connSearch:u,connStatusFilter:T,expandedConnId:le,copiedEndpointId:ye,connMoreOpen:qe,acceptanceFilter:Pe,batchFttResult:Be,showNewProjectModal:De,newProjCoverDataUrl:Ee,showEditProjectModal:Te,showNewBuildingModal:rt,newBldImageDataUrl:pt,editingBuildingId:Ht,showNewFloorModal:Gt,showBatchModal:Ve,batchDropActive:Se,pendingBatchUploads:gt,copyZoneSourceFloorId:wt,copyTargetFloorIds:ht,showNewDevModal:Wt,groupModal:nt,connModal:St,showFreezeModal:kt,freezeTargetFloorId:It,confirmDialog:tt,lightboxPlan:xt,sortedBuildingFloors:ut,getZoneLabel:Zt}}function $(){ra(),l.close();const w=Ze(),{canEdit:q}=w,Z=n.scope.activeOverrides.find(r=>r.module==="deployment"&&r.status==="active"),ne=Z?`<div class="pacom-banner pacom-banner--ok">
          <div class="pacom-banner-text">
            <span class="pacom-banner-title">临时提权生效中（系统部署 ｜ ${Z.durationHours}h）</span>
            <span class="pacom-banner-sub">审批人：${s(Z.approvedBy)} ｜ 到期自动收回：${s(Z.expiresAt.slice(0,16).replace("T"," "))} ｜ 事由：${s(Z.reason)}</span>
          </div>
        </div>`:"",_e=Bs[y],Oe=y==="device_marking",Ke=y==="project_config"&&I!=="overview",i=!Oe&&y!=="device_list";t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${Ea({tree:d,session:n,scope:S,maxGranularity:_e.granularity,isOpen:_,searchKeyword:p})}
            </div>
            <div class="pacom-header-meta">
              ${q?Z?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${He()}
          ${Oe?`<div class="pacom-unified-main--canvas">
                  <div class="dep-canvas-topbar">
                    <div class="pacom-unified-head-copy">
                      <h2 class="pacom-unified-title">${_e.title}</h2>
                      <p class="pacom-unified-subtitle">${_e.subtitle}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${ot(q)}
                    </div>
                  </div>
                  ${ne}
                  ${ue?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${s(ue)}</span></div>`:""}
                  ${se?`<div class="pacom-alert-banner">${s(se)}</div>`:""}
                  ${Ys(w)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner ${i?"pacom-unified-inner--reading":""}">
                  ${Ke?"":`<div class="pacom-unified-head pacom-unified-head--split">
                          <div class="pacom-unified-head-copy">
                            <h2 class="pacom-unified-title">${_e.title}</h2>
                            <p class="pacom-unified-subtitle">${_e.subtitle}</p>
                          </div>
                          <div class="pacom-unified-head-actions">
                            ${ot(q)}
                          </div>
                        </div>`}
                  ${ne}
                  ${ue?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${s(ue)}</span></div>`:""}
                  ${se?`<div class="pacom-alert-banner">${s(se)}</div>`:""}
                  ${y==="project_config"?en(w):y==="device_list"?Js(w):y==="device_groups"?Qs(w):y==="device_network"?Xs(w):y==="connections"?Gs(w):Ws(w)}
                </div>
              </div>`}
        </div>
      </div>
      ${Zs(w)}
    `,xe(),l.bind(t)}async function he(w){try{if(w.kind==="delete_project"){const q=d.projects.find(Z=>Z.id===w.projectId);await e.deleteProject?.(w.projectId),me(),I="overview",ue=`已删除项目「${q?.name??w.projectId}」。`,await Xe()}else if(w.kind==="delete_building"){const q=d.buildings.find(Z=>Z.id===w.buildingId);await e.deleteBuilding?.(w.buildingId),me(),I="overview",ue=`已删除楼宇「${q?.name??w.buildingId}」。`,await Xe()}else if(w.kind==="delete_floor"){const q=d.floors.find(Z=>Z.id===w.floorId);await e.deleteFloor?.(w.floorId),me(),I="building",ue=`已删除楼层「${q?.name??w.floorId}」。`,await Xe()}else if(w.kind==="clear_floor_plan"){const q=d.floors.find(Z=>Z.id===w.floorId);q&&await e.upsertFloor?.({id:q.id,buildingId:q.buildingId,kind:q.kind,level:q.level,name:q.name,areaSqm:q.areaSqm,planImageUrl:null}),me(),ue=`已清空「${q?.name??""}」平面底图。`,await Xe()}else if(w.kind==="delete_zone"){const q=d.zones.find(Z=>Z.id===w.zoneId);await e.deleteZone?.(w.zoneId),g===w.zoneId&&(g=null),me(),ue=`已删除功能区「${q?.name??""}」。`,await Xe()}else if(w.kind==="delete_doc"){const q=ie.find(Z=>Z.id===w.docId);await e.deleteFloorDoc?.(w.docId),me(),ue=`已移除工程资料「${q?.name??""}」。`,await ze(),$()}else if(w.kind==="delete_device"){const q=C.find(Z=>Z.id===w.deviceId);await e.deleteDeploymentDevice?.(w.deviceId),W===w.deviceId&&(W=null,Me=!1,L=!1,x=null),me(),ue=`已删除设备「${q?.name??""}」（关联分组与灯点已同步清理）。`,await yt(),await ze(),$()}else if(w.kind==="delete_group"){const q=de.find(Z=>Z.id===w.groupId);await e.deleteDeviceGroup?.(w.groupId),me(),ue=`已删除设备分组「${q?.name??""}」。`,await ze(),$()}else if(w.kind==="delete_connection"){const q=ve.find(Z=>Z.id===w.connectionId);await e.deleteConnection?.(w.connectionId),me(),ue=`已删除接入通道「${q?.name??""}」。`,ve=U?await e.listConnections(U).catch(()=>[]):[],$()}else w.kind==="restart_edge"&&(await e.restartEdgeService?.(w.projectId),me(),ue="已下发「重启边缘服务」指令，边缘网关将在 5 秒内平滑重连。",$())}catch(q){me(),se=q instanceof Error?q.message:String(q),$()}}function xe(){ka(t,{onToggle:()=>{_=!_,$(),_&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:i=>{p=i,$();const r=t.querySelector("[data-global-space-search]");r&&(r.focus(),r.setSelectionRange(i.length,i.length))},onPick:async i=>{if(S=i,_=!1,ue="",se="",i.level==="project"){const r=i.projectId!==U;U=i.projectId,y==="project_config"&&r&&(I="overview");const m=d.buildings.find(b=>b.projectId===i.projectId);m?(ae=m.id,j=ut(m.id)[0]?.id??""):(ae="",j=""),ve=await e.listConnections(U).catch(()=>[]),await yt(),await ze()}else if(i.level==="building")Mt(i.buildingId),await yt(),await ze();else if(i.level==="floor"){const r=d.floors.find(m=>m.id===i.floorId)?.buildingId!==ae;At(i.floorId),r&&await yt(),await ze()}$()}}),t.querySelectorAll("[data-dep-nav]").forEach(i=>{i.addEventListener("click",async()=>{const r=i.dataset.depNav??"project_config";y=r,r==="project_config"&&(I="overview"),Me=!1,Y=!1,qe=!1,ue="",se="",r==="acceptance"&&await yt(),await ze(),$()})}),t.querySelectorAll("[data-drill-building]").forEach(i=>{const r=async()=>{const m=i.dataset.drillBuilding;m&&(Mt(m),h="all",D="",I="building",await yt(),await ze(),$())};i.addEventListener("click",m=>{m.target?.closest("button, label, input")||r()}),i.addEventListener("keydown",m=>{(m.key==="Enter"||m.key===" ")&&m.target===i&&(m.preventDefault(),r())})}),t.querySelectorAll("[data-proj-drill]").forEach(i=>{i.addEventListener("click",()=>{I=i.dataset.projDrill??"overview",g=null,ue="",se="",$()})}),t.querySelector("[data-switch-drill-building]")?.addEventListener("change",async i=>{const r=i.currentTarget.value;r&&(Mt(r),h="all",D="",await yt(),await ze(),$())});const w=async i=>{i&&(At(i),I="floor",await ze(),$())};t.querySelectorAll("[data-drill-floor]").forEach(i=>{i.addEventListener("click",r=>{if(r.target?.closest("button, label, input, [data-stop-row]"))return;const m=i.dataset.drillFloor;m&&w(m)})}),t.querySelectorAll("[data-drill-floor-btn]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const m=i.dataset.drillFloorBtn;m&&w(m)})}),t.querySelector("[data-switch-drill-floor]")?.addEventListener("change",i=>{const r=i.currentTarget.value;r&&w(r)}),t.querySelectorAll("[data-floor-list-filter]").forEach(i=>{i.addEventListener("click",()=>{h=i.dataset.floorListFilter??"all",$()})}),t.querySelector("[data-floor-list-search]")?.addEventListener("input",i=>{D=i.currentTarget.value,$();const r=t.querySelector("[data-floor-list-search]");r&&(r.focus(),r.setSelectionRange(D.length,D.length))}),t.querySelectorAll("[data-floor-detail-tab]").forEach(i=>{i.addEventListener("click",()=>{G=i.dataset.floorDetailTab??"zones",$()})}),t.querySelectorAll("[data-jump-floor-marking]").forEach(i=>{i.addEventListener("click",async r=>{r.stopPropagation();const m=i.dataset.jumpFloorMarking;m&&At(m),y="device_marking",await ze(),$()})}),t.querySelector("[data-jump-floor-config]")?.addEventListener("click",async i=>{const r=i.currentTarget.dataset.jumpFloorConfig;r&&At(r),y="project_config",I=r?"floor":"overview",await ze(),$()}),t.querySelectorAll("[data-close-modals]").forEach(i=>{i.addEventListener("click",()=>{me(),$()})}),t.querySelectorAll("[data-modal-scrim]").forEach(i=>{i.addEventListener("click",r=>{r.target===i&&(me(),$())})}),t.querySelector("[data-confirm-dialog-ok]")?.addEventListener("click",()=>{tt&&he(tt.action)}),t.querySelectorAll("[data-open-new-proj]").forEach(i=>{i.addEventListener("click",()=>{me(),De=!0,$()})}),t.querySelector("[data-open-edit-proj]")?.addEventListener("click",()=>{me(),Te=!0,$()}),t.querySelectorAll("[data-open-new-bld]").forEach(i=>{i.addEventListener("click",()=>{me(),rt=!0,$()})}),t.querySelectorAll("[data-edit-building]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation(),me(),Ht=i.dataset.editBuilding??null,$()})}),t.querySelector("[data-open-new-floor]")?.addEventListener("click",()=>{me(),Gt=!0,$()}),t.querySelector("[data-open-batch-modal]")?.addEventListener("click",()=>{me(),Ve=!0,$()}),t.querySelectorAll("[data-open-new-dev]").forEach(i=>{i.addEventListener("click",()=>{me(),Wt=!0,$()})}),t.querySelector("[data-open-new-group]")?.addEventListener("click",()=>{me(),nt={mode:"create",track:"mesh_auto",draftName:"",draftType:Ma.mesh_auto[0],draftMemberIds:[]},$()}),t.querySelectorAll("[data-edit-group]").forEach(i=>{i.addEventListener("click",()=>{const r=de.find(m=>m.id===i.dataset.editGroup);r&&(me(),nt={mode:"edit",groupId:r.id,track:r.track,draftName:r.name,draftType:r.groupType,draftMemberIds:[...r.deviceIds]},$())})}),t.querySelector("[data-group-draft-name]")?.addEventListener("input",i=>{nt&&(nt.draftName=i.currentTarget.value)}),t.querySelector("[data-group-draft-type]")?.addEventListener("change",i=>{nt&&(nt.draftType=i.currentTarget.value)}),t.querySelectorAll("[data-group-draft-member]").forEach(i=>{i.addEventListener("change",()=>{if(!nt)return;const r=new Set(nt.draftMemberIds);i.checked?r.add(i.value):r.delete(i.value),nt.draftMemberIds=Array.from(r)})}),t.querySelector("[data-group-modal-track]")?.addEventListener("change",i=>{if(!nt)return;const r=i.currentTarget.value??"mesh_auto",m=Ma[r],b=m.includes(nt.draftType)?nt.draftType:m[0],M=new Set((r==="mesh_auto"?C.filter(Ut):C).map(R=>R.id));nt={...nt,track:r,draftType:b,draftMemberIds:nt.draftMemberIds.filter(R=>M.has(R))},$()}),t.querySelector("[data-open-new-conn]")?.addEventListener("click",()=>{me(),qe=!1,St={mode:"create"},$()}),t.querySelectorAll("[data-edit-conn]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.editConn;r&&(me(),St={mode:"edit",connectionId:r},$())})}),t.querySelector("[data-open-freeze-modal]")?.addEventListener("click",()=>{me();const i=ae?ut(ae):[];It=i.find(m=>(A.get(m.id)?.length??0)>0)?.id??j??i[0]?.id??"",kt=!0,$()}),t.querySelectorAll("[data-open-freeze-floor]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.openFreezeFloor??"";me(),It=r||j,kt=!0,$()})}),t.querySelector("[data-freeze-floor-select]")?.addEventListener("change",i=>{It=i.currentTarget.value,$()}),t.querySelector("[data-stage-new-proj-cover]")?.addEventListener("change",async i=>{const r=i.currentTarget.files?.[0];if(r)try{Ee=await zt(r),$()}catch(m){se=m instanceof Error?m.message:String(m),$()}}),t.querySelector("[data-stage-new-bld-img]")?.addEventListener("change",async i=>{const r=i.currentTarget.files?.[0];if(r)try{pt=await zt(r),$()}catch(m){se=m instanceof Error?m.message:String(m),$()}}),t.querySelector("[data-create-project]")?.addEventListener("submit",async i=>{i.preventDefault();const r=new FormData(i.currentTarget),m=String(r.get("pName")??"").trim(),b=String(r.get("pCity")??"").trim(),M=String(r.get("pAddr")??"").trim(),R=String(r.get("pLng")??"").trim(),N=String(r.get("pLat")??"").trim();if(!m)return;let Re;if(!!R!=!!N){se="经度和纬度需同时填写或同时留空，不可仅填写单边坐标。",$();return}if(R&&N){const Le=Number(R),Je=Number(N);if(!Number.isFinite(Le)||!Number.isFinite(Je)||Le<-180||Le>180||Je<-90||Je>90){se="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",$();return}Re={lng:Le,lat:Je,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{const Le=await e.createProject?.({name:m,city:b,address:M,location:Re,imageUrl:Ee??void 0});me(),y="project_config",I="overview",Le&&(U=Le.id,ae="",j="",S=jt({level:"project",projectId:Le.id})),ue=`已创建项目「${m}」，下一步可添加园区楼宇。`,await Xe()}catch(Le){se=Le instanceof Error?Le.message:String(Le),$()}}),t.querySelector("[data-save-project]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget,m=r.dataset.saveProject??U,b=new FormData(r),M=String(b.get("pName")??"").trim(),R=String(b.get("pCity")??"").trim(),N=String(b.get("pAddr")??"").trim(),Re=String(b.get("pLng")??"").trim(),Le=String(b.get("pLat")??"").trim();let Je;if(!!Re!=!!Le){se="经度和纬度需同时填写或同时留空，不可仅填写单边坐标。",$();return}if(Re&&Le){const Ge=Number(Re),at=Number(Le);if(!Number.isFinite(Ge)||!Number.isFinite(at)||Ge<-180||Ge>180||at<-90||at>90){se="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",$();return}Je={lng:Ge,lat:at,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{await e.updateProject?.(m,{name:M,city:R,address:N,location:Je}),me(),ue=`已保存项目「${M||"当前项目"}」信息。`,await Xe()}catch(Ge){se=Ge instanceof Error?Ge.message:String(Ge),$()}}),t.querySelector("[data-upload-proj]")?.addEventListener("change",async i=>{const r=i.currentTarget,m=r.dataset.uploadProj,b=r.files?.[0];if(!(!m||!b))try{const M=await zt(b);await e.updateProject?.(m,{imageUrl:M}),ue=`已更新项目封面图（${b.name}）。`,await Xe()}catch(M){se=M instanceof Error?M.message:String(M),$()}}),t.querySelector("[data-delete-proj]")?.addEventListener("click",i=>{const r=i.currentTarget.dataset.deleteProj,m=d.projects.find(b=>b.id===r);!r||!m||(me(),tt={title:`删除项目「${m.name}」`,body:"将同时移除该项目下的全部楼宇、楼层与功能区配置，此操作不可撤销。确认继续吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_project",projectId:r}},$())}),t.querySelector("[data-create-bld]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget,m=r.dataset.createBld??U,b=new FormData(r),M=String(b.get("bName")??"").trim(),R=String(b.get("bArea")??"").trim(),N=Math.max(1,Number(b.get("bAbove")??12)),Re=Math.max(0,Number(b.get("bBelow")??0)),Le=!!b.get("bRoof"),Je=!!b.get("bAutoFloors");if(M)try{const Ge=await e.upsertBuilding?.({projectId:m,name:M,aboveFloors:N,belowFloors:Re,hasRoof:Le,areaSqm:R?Number(R):null,imageUrl:pt??void 0});me();let at=0;if(Ge&&(ae=Ge.id,Je)){for(let ct=1;ct<=N;ct+=1)await e.upsertFloor?.({buildingId:Ge.id,kind:"above",level:ct,name:`${ct}F`}),at+=1;for(let ct=1;ct<=Re;ct+=1)await e.upsertFloor?.({buildingId:Ge.id,kind:"below",level:-ct,name:`B${ct}`}),at+=1;Le&&(await e.upsertFloor?.({buildingId:Ge.id,kind:"roof",level:99,name:"RF"}),at+=1),I="building"}ue=Je?`已创建楼宇「${M}」并自动生成 ${at} 个楼层，现可直接批量导入平面底图。`:`已创建楼宇「${M}」。`,await Xe()}catch(Ge){se=Ge instanceof Error?Ge.message:String(Ge),$()}}),t.querySelector("[data-save-building]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget,m=r.dataset.saveBuilding,b=d.buildings.find(Ge=>Ge.id===m);if(!b)return;const M=new FormData(r),R=String(M.get("bName")??"").trim()||b.name,N=String(M.get("bArea")??"").trim(),Re=Math.max(1,Number(M.get("bAbove")??b.aboveFloors)),Le=Math.max(0,Number(M.get("bBelow")??b.belowFloors)),Je=!!M.get("bRoof");try{await e.upsertBuilding?.({id:m,projectId:b.projectId,name:R,aboveFloors:Re,belowFloors:Le,hasRoof:Je,areaSqm:N?Number(N):null}),me(),ue=`已保存楼宇「${R}」参数。`,await Xe()}catch(Ge){se=Ge instanceof Error?Ge.message:String(Ge),$()}}),t.querySelector("[data-delete-building]")?.addEventListener("click",i=>{const r=i.currentTarget.dataset.deleteBuilding,m=d.buildings.find(b=>b.id===r);!r||!m||(me(),tt={title:`删除楼宇「${m.name}」`,body:"将同步删除该楼宇下的全部楼层底图与功能区配置，此操作不可撤销。确认继续吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_building",buildingId:r}},$())}),t.querySelector("[data-upload-bld]")?.addEventListener("change",async i=>{const r=i.currentTarget,m=r.dataset.uploadBld,b=r.files?.[0],M=d.buildings.find(R=>R.id===m);if(!(!m||!b||!M))try{const R=await zt(b);await e.upsertBuilding?.({id:M.id,projectId:M.projectId,name:M.name,aboveFloors:M.aboveFloors,belowFloors:M.belowFloors,hasRoof:M.hasRoof,areaSqm:M.areaSqm,imageUrl:R}),ue=`已更新「${M.name}」外观图（${b.name}）。`,await Xe()}catch(R){se=R instanceof Error?R.message:String(R),$()}}),t.querySelectorAll("[data-fill-missing-floors]").forEach(i=>{i.addEventListener("click",async r=>{r.stopPropagation();const m=i.dataset.fillMissingFloors;if(m)try{const b=await We(m);ue=b>0?`已自动补齐 ${b} 个楼层。`:"当前楼宇楼层已完整。",await Xe()}catch(b){se=b instanceof Error?b.message:String(b),$()}})}),t.querySelector("[data-create-floor]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget,m=r.dataset.createFloor,b=new FormData(r),M=String(b.get("fName")??"").trim().toUpperCase(),R=String(b.get("fArea")??"").trim();if(!M)return;const N=Nt(M)??M;if(ut(m).some(at=>(Nt(at.name)??at.name.toUpperCase())===N)){se=`楼层「${M}」已存在，请使用其他名称。`,$();return}const Le=va(M),Je=Le>=999?"roof":Le<0?"below":"above",Ge=Le>=999?99:Le||1;try{const at=await e.upsertFloor?.({buildingId:m,kind:Je,level:Ge,name:M,areaSqm:R?Number(R):null});me(),at&&(j=at.id),ue=`已新增楼层「${M}」，可继续添加楼层或点击行内「配置」进入单层底图工作台。`,await Xe()}catch(at){se=at instanceof Error?at.message:String(at),$()}}),t.querySelector("[data-save-floor]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget,m=r.dataset.saveFloor,b=d.floors.find(ct=>ct.id===m);if(!b)return;const M=new FormData(r),R=String(M.get("fName")??"").trim()||b.name,N=String(M.get("fArea")??"").trim(),Re=Nt(R)??R.toUpperCase();if(ut(b.buildingId).some(ct=>ct.id!==b.id&&(Nt(ct.name)??ct.name.toUpperCase())===Re)){se=`楼层「${R}」已存在，请避免重复命名。`,$();return}const Je=va(R),Ge=Je>=999?"roof":Je<0?"below":"above",at=Je>=999?99:Je||b.level;try{await e.upsertFloor?.({id:b.id,buildingId:b.buildingId,kind:Ge,level:at,name:R,areaSqm:N?Number(N):null}),ue=`已保存楼层「${R}」属性。`,await Xe()}catch(ct){se=ct instanceof Error?ct.message:String(ct),$()}}),t.querySelector("[data-delete-floor]")?.addEventListener("click",i=>{const r=i.currentTarget.dataset.deleteFloor,m=d.floors.find(b=>b.id===r);!r||!m||(me(),tt={title:`删除楼层「${m.name}」`,body:"将同时移除本层的平面底图与功能区划分，此操作不可撤销。确认继续吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_floor",floorId:r}},$())});async function q(i,r){const m=d.floors.find(b=>b.id===i);if(m)try{const b=await zt(r);await e.upsertFloor?.({id:m.id,buildingId:m.buildingId,kind:m.kind,level:m.level,name:m.name,areaSqm:m.areaSqm,planImageUrl:b}),ue=`已更新「${m.name}」平面底图（${r.name}）。`,await Xe()}catch(b){se=b instanceof Error?b.message:String(b),$()}}t.querySelectorAll("[data-upload-floor]").forEach(i=>{i.addEventListener("change",()=>{const r=i.dataset.uploadFloor,m=i.files?.[0];r&&m&&q(r,m)})});const Z=t.querySelector("[data-single-floor-drop]");Z&&n.scope.canEditDeployment&&o.spatial&&(Z.addEventListener("dragover",i=>{i.preventDefault(),Z.classList.add("is-drop-active")}),Z.addEventListener("dragleave",()=>{Z.classList.remove("is-drop-active")}),Z.addEventListener("drop",i=>{i.preventDefault(),Z.classList.remove("is-drop-active");const r=Z.dataset.singleFloorDrop,m=Array.from(i.dataTransfer?.files??[]).find(b=>b.type.startsWith("image/"));r&&m&&q(r,m)})),t.querySelector("[data-clear-floor-plan]")?.addEventListener("click",i=>{const r=i.currentTarget.dataset.clearFloorPlan,m=d.floors.find(b=>b.id===r);!r||!m||(me(),tt={title:`清空「${m.name}」平面底图`,body:"清空后本层将回到无图状态（不会删除已绑定的设备物理安装记录）。确认清空吗？",confirmLabel:"确认清空",danger:!0,action:{kind:"clear_floor_plan",floorId:r}},$())}),t.querySelectorAll("[data-open-lightbox]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const m=i.dataset.lbTitle??"平面底图预览",b=i.dataset.lbSrc??"";b&&(xt={title:m,imageUrl:b},$())})}),t.querySelector("[data-close-lightbox]")?.addEventListener("click",()=>{xt=null,$()}),t.querySelector("[data-lightbox-scrim]")?.addEventListener("click",i=>{i.target===i.currentTarget&&(xt=null,$())});function ne(i,r){if(!i||r.length===0)return;const m=ut(i),b=new Map;m.forEach(M=>b.set(Nt(M.name)??M.name.toUpperCase(),M)),gt=r.map((M,R)=>{const N=Nt(M.name),Re=N?b.get(N):void 0;return{id:`bu-${Date.now().toString(36)}-${R}`,file:M,matchedFloorId:Re?.id??null}}),Ve=!0,$()}t.querySelector("[data-batch-upload-floors]")?.addEventListener("change",i=>{const r=i.currentTarget;ne(r.dataset.batchUploadFloors??"",Array.from(r.files??[]))});const _e=t.querySelector("[data-batch-dropzone]");_e&&n.scope.canEditDeployment&&o.spatial&&(_e.addEventListener("dragover",i=>{i.preventDefault(),Se||(Se=!0,_e.style.borderColor="var(--pacom-accent-solid)",_e.style.background="var(--pacom-accent-soft)")}),_e.addEventListener("dragleave",()=>{Se=!1,_e.style.borderColor="",_e.style.background=""}),_e.addEventListener("drop",i=>{i.preventDefault(),Se=!1;const r=Array.from(i.dataTransfer?.files??[]).filter(m=>m.type.startsWith("image/"));ne(_e.dataset.batchDropzone??"",r)})),t.querySelectorAll("[data-batch-override-floor]").forEach(i=>{i.addEventListener("change",()=>{const r=gt.find(m=>m.id===i.dataset.batchOverrideFloor);r&&(r.matchedFloorId=i.value||null,$())})}),t.querySelector("[data-cancel-batch-upload]")?.addEventListener("click",()=>{gt=[],$()}),t.querySelector("[data-confirm-batch-upload]")?.addEventListener("click",async()=>{const i=gt.filter(b=>b.matchedFloorId),r=gt.length-i.length;if(i.length===0)return;const m=new Set;for(const b of i){if(m.has(b.matchedFloorId)){se="存在多张图片指向同一目标楼层，请调整目标楼层后再导入。",$();return}m.add(b.matchedFloorId)}try{let b=0;for(const M of i){const R=d.floors.find(Re=>Re.id===M.matchedFloorId);if(!R)continue;const N=await zt(M.file);await e.upsertFloor?.({id:R.id,buildingId:R.buildingId,kind:R.kind,level:R.level,name:R.name,areaSqm:R.areaSqm,planImageUrl:N}),b+=1}gt=[],me(),ue=`已批量导入 ${b} 个唯一楼层平面底图${r>0?`（跳过 ${r} 张未分配文件）`:""}。`,await Xe()}catch(b){se=b instanceof Error?b.message:String(b),$()}}),t.querySelectorAll("[data-apply-zone-tpl]").forEach(i=>{i.addEventListener("click",async()=>{const r=$s.find(b=>b.key===i.dataset.applyZoneTpl),m=d.floors.find(b=>b.id===i.dataset.tplFloor);if(!(!r||!m))try{const b=d.zones.filter(R=>R.floorId===m.id).length,M=b+r.items.length;for(let R=0;R<r.items.length;R+=1){const N=r.items[R],Re=await e.upsertZone?.({floorId:m.id,name:`${m.name} ${N.suffix}`,category:N.category});Re&&(be[Re.id]=Ba(b+R,M))}ue=`已按「${r.label}」模板为 ${m.name} 创建 ${r.items.length} 个功能区。`,await Xe()}catch(b){se=b instanceof Error?b.message:String(b),$()}})}),t.querySelector("[data-attach-doc]")?.addEventListener("change",async i=>{const r=i.currentTarget,m=r.dataset.attachDoc,b=r.files?.[0],M=d.floors.find(N=>N.id===m);if(!m||!b||!M||!e.attachFloorDoc)return;const R=b.size>=1024*1024?`${(b.size/(1024*1024)).toFixed(1)} MB`:`${Math.max(1,Math.round(b.size/1024))} KB`;try{const N=b.size<=4194304?await zt(b).catch(()=>{}):void 0;await e.attachFloorDoc({floorId:m,name:b.name,category:Us(b.name),boundScope:`${M.name} ｜ 工程资料`,updatedAt:new Date().toISOString().slice(0,10),size:R,fileUrl:N,mimeType:b.type||void 0}),ue=`已为 ${M.name} 关联文档「${b.name}」。`,await ze(),$()}catch(N){se=N instanceof Error?N.message:String(N),$()}}),t.querySelectorAll("[data-doc-category]").forEach(i=>{i.addEventListener("change",async()=>{const r=i.dataset.docCategory;if(!(!r||!e.updateFloorDocCategory))try{await e.updateFloorDocCategory(r,i.value),ue=`已更新资料分类为「${i.value}」。`,await ze(),$()}catch(m){se=m instanceof Error?m.message:String(m),$()}})}),t.querySelectorAll("[data-del-doc]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.delDoc,m=ie.find(b=>b.id===r);!r||!m||(me(),tt={title:`移除工程资料「${m.name}」`,body:"移除后将不再在此楼层的工程资料列表中显示，确认移除吗？",confirmLabel:"确认移除",danger:!0,action:{kind:"delete_doc",docId:r}},$())})}),t.querySelectorAll("[data-preview-doc]").forEach(i=>{i.addEventListener("click",()=>{const r=ie.find(m=>m.id===i.dataset.previewDoc);if(r){if(r.fileUrl&&(r.mimeType?.startsWith("image/")||/\.(png|jpe?g|webp|gif)$/i.test(r.name))){xt={title:r.name,imageUrl:r.fileUrl},$();return}if(r.fileUrl){const m=document.createElement("a");m.href=r.fileUrl,m.download=r.name,m.target="_blank",m.rel="noopener noreferrer",m.click(),ue=`已打开 / 下载工程附件「${r.name}」。`,$();return}ue=`「${r.name}」（${r.category} ｜ ${r.size} ｜ 更新于 ${r.updatedAt}）为演示示例目录项，上传本地文件后可直接预览或下载。`,$()}})}),t.querySelector("[data-add-zone]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget.dataset.addZone,m=new FormData(i.currentTarget),b=String(m.get("zoneName")??"").trim(),M=String(m.get("zoneCat")??"office");if(b)try{const R=d.zones.filter(Re=>Re.floorId===r).length,N=await e.upsertZone?.({floorId:r,name:b,category:M});N&&(be[N.id]=Ba(R,R+1)),ue=`已添加功能区「${b}」。`,await Xe()}catch(R){se=R instanceof Error?R.message:String(R),$()}}),t.querySelectorAll("[data-edit-zone]").forEach(i=>{i.addEventListener("click",()=>{g=i.dataset.editZone??null,$()})}),t.querySelector("[data-cancel-edit-zone]")?.addEventListener("click",()=>{g=null,$()}),t.querySelector("[data-save-edit-zone]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget,m=new FormData(r),b=String(m.get("zName")??"").trim(),M=String(m.get("zCat")??"office");if(b)try{await e.upsertZone?.({id:r.dataset.saveEditZone,floorId:r.dataset.zoneFloor,name:b,category:M}),g=null,ue=`已更新功能区「${b}」。`,await Xe()}catch(R){se=R instanceof Error?R.message:String(R),$()}}),t.querySelectorAll("[data-del-zone]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.delZone,m=d.zones.find(b=>b.id===r);!r||!m||(me(),tt={title:`删除功能区「${m.name}」`,body:"删除后该功能区将从本层移除，原归属设备的逻辑分区将置为未分配。确认删除吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_zone",zoneId:r}},$())})}),t.querySelectorAll("[data-open-copy-zones]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.openCopyZones??null;me(),wt=r,ht=new Set,$()})}),t.querySelectorAll("[data-copy-preset]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.copyPreset,m=ut(ae).filter(b=>b.id!==wt);r==="empty"?ht=new Set(m.filter(b=>b.kind==="above"&&d.zones.filter(M=>M.floorId===b.id).length===0).map(b=>b.id)):r==="above"?ht=new Set(m.filter(b=>b.kind==="above").map(b=>b.id)):ht.clear(),$()})}),t.querySelectorAll("[data-copy-target-floor]").forEach(i=>{i.addEventListener("change",()=>{const r=i.dataset.copyTargetFloor;r&&(i.checked?ht.add(r):ht.delete(r),$())})}),t.querySelector("[data-confirm-copy-zones]")?.addEventListener("click",async i=>{const r=i.currentTarget.dataset.confirmCopyZones,m=Array.from(ht);if(!(!r||m.length===0))try{const b=await e.copyZonesToFloors?.(r,m)??0;me(),ht.clear(),ue=`已将当前层功能区复用至 ${m.length} 个目标楼层（共新增 ${b} 个功能区）。`,await Xe()}catch(b){se=b instanceof Error?b.message:String(b),$()}}),t.querySelectorAll("[data-scrubber-floor]").forEach(i=>{i.addEventListener("click",async()=>{const r=i.dataset.scrubberFloor;r&&(At(r),await ze(),$())})});const Oe=t.querySelector("[data-dep-canvas-search]");Oe?.addEventListener("focus",()=>{Ye||(Ye=!0,$(),t.querySelector("[data-dep-canvas-search]")?.focus())}),Oe?.addEventListener("input",i=>{Q=i.currentTarget.value,Ye=!0,$();const r=t.querySelector("[data-dep-canvas-search]");r&&(r.focus(),r.setSelectionRange(Q.length,Q.length))}),t.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{Ye=!Ye,$()}),t.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{Ye=!1,$()}),t.querySelectorAll("[data-dev-filter]").forEach(i=>{i.addEventListener("click",()=>{je=i.dataset.devFilter??"all",$()})}),t.querySelectorAll("[data-brush]").forEach(i=>{i.addEventListener("click",()=>{P=i.dataset.brush??"device",$()})}),t.querySelectorAll("[data-dep-zoom]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.depZoom;r==="in"?oe=Math.min(2.6,Number((oe+.2).toFixed(2))):r==="out"?oe=Math.max(.6,Number((oe-.2).toFixed(2))):(oe=1,ge=0,Fe=0),k()})});const Ke=t.querySelector('[data-role="dep-stage"]');if(Ke&&!Y){let i=!1,r=0,m=0,b=0,M=0;Ke.addEventListener("pointerdown",N=>{N.target?.closest("button, input, select, .pacom-hud-search-wrap, .dep-canvas-mode-pill")||(i=!0,r=N.clientX,m=N.clientY,b=ge,M=Fe,Ke.classList.add("is-panning"),Ke.setPointerCapture?.(N.pointerId))}),Ke.addEventListener("pointermove",N=>{i&&(ge=b+(N.clientX-r),Fe=M+(N.clientY-m),k())});const R=()=>{i&&(i=!1,Ke.classList.remove("is-panning"))};Ke.addEventListener("pointerup",R),Ke.addEventListener("pointercancel",R),Ke.addEventListener("wheel",N=>{N.preventDefault();const Re=N.deltaY<0?.12:-.12;oe=Math.max(.6,Math.min(2.6,Number((oe+Re).toFixed(2)))),k()},{passive:!1}),Ke.addEventListener("dblclick",N=>{N.target?.closest("button")||(oe=1,ge=0,Fe=0,k())})}t.querySelector("[data-list-search]")?.addEventListener("input",i=>{lt=i.currentTarget.value,$();const r=t.querySelector("[data-list-search]");r&&(r.focus(),r.setSelectionRange(lt.length,lt.length))}),t.querySelector("[data-list-filter]")?.addEventListener("change",i=>{Ue=i.currentTarget.value??"all",$()}),t.querySelector("[data-list-cat-filter]")?.addEventListener("change",i=>{Ce=i.currentTarget.value??"all",$()}),t.querySelectorAll("[data-refresh-dep]").forEach(i=>{i.addEventListener("click",()=>void Xe())}),t.querySelector("[data-create-dev]")?.addEventListener("submit",async i=>{if(i.preventDefault(),!e.createDeploymentDevice)return;const r=new FormData(i.currentTarget),m=String(r.get("devName")??"").trim(),b=String(r.get("devPreset")??"sensor"),M=String(r.get("devZone")??"")||null,R=Oa.find(N=>N.key===b)??Oa[0];if(!(!m||!j))try{const N=await e.createDeploymentDevice({projectId:U,buildingId:ae,floorId:j,logicalZoneId:M,name:m,category:R.category,defaultProxy:R.defaultProxy,defaultRelay:R.defaultRelay});me(),W=N.id,Me=!0,Ae="binding",L=!1;const Re=!!d.floors.find(Le=>Le.id===j)?.plan;Y=y==="device_marking"&&Re,!Re&&y==="device_marking"&&(Ye=!0),ue=Y?`已新增「${m}」（未标记），请直接在平面图点击安装位置落点。`:`已新增「${m}」（未标记，${R.hint}）。`,await ze(),$t(C.find(Le=>Le.id===N.id)),$()}catch(N){se=N instanceof Error?N.message:String(N),$()}}),t.querySelectorAll("[data-pick-dev]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation(),W=i.dataset.pickDev??null,Me=!0,Ae="binding",L=!1;const m=C.find(b=>b.id===W);$t(m),$()})}),t.querySelectorAll("[data-open-dev-drawer]").forEach(i=>{i.addEventListener("click",r=>{if(r.target?.closest("button"))return;W=i.dataset.openDevDrawer??null,Me=!0,Ae="binding",L=!1;const m=C.find(b=>b.id===W);$t(m),$()})}),t.querySelectorAll("[data-open-dev-params]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation(),W=i.dataset.openDevParams??null,Me=!0,Ae="params",L=!1;const m=C.find(b=>b.id===W);$t(m),$()})}),t.querySelectorAll("[data-quick-verify-dev]").forEach(i=>{i.addEventListener("click",async r=>{r.stopPropagation();const m=C.find(b=>b.id===i.dataset.quickVerifyDev);if(!(!m||!m.hardwareBinding))try{await e.updateDeviceHardwareBinding({deviceId:m.id,gatewayId:m.hardwareBinding.gatewayId,protocol:m.hardwareBinding.protocol,networkAddress:m.hardwareBinding.networkAddress,portOrChannel:m.hardwareBinding.portOrChannel,physicalInstalled:!0,expectedVersion:m.version}),ue=`已完成「${m.name}」现场物理安装一键复核。`,await ze(),W===m.id&&$t(C.find(b=>b.id===m.id)),$()}catch(b){se=b instanceof Error?b.message:String(b),$()}})}),t.querySelectorAll("[data-toggle-edit-dev-meta]").forEach(i=>{i.addEventListener("click",()=>{L=!L,$()})}),t.querySelector("[data-save-dev-meta]")?.addEventListener("submit",async i=>{if(i.preventDefault(),!e.updateDeploymentDevice)return;const r=i.currentTarget,m=r.dataset.saveDevMeta,b=new FormData(r),M=String(b.get("editDevName")??"").trim(),R=String(b.get("editDevZone")??"")||null;if(M)try{await e.updateDeploymentDevice(m,{name:M,logicalZoneId:R}),L=!1,ue=`已更新设备基础信息「${M}」。`,await ze(),$()}catch(N){se=N instanceof Error?N.message:String(N),$()}}),t.querySelector("[data-del-dev]")?.addEventListener("click",i=>{const r=i.currentTarget.dataset.delDev,m=C.find(b=>b.id===r);!r||!m||(me(),tt={title:`删除设备「${m.name}」`,body:"将同步移除该设备的平面坐标、硬件绑定、关联灯点及分组成员引用，此操作不可撤销。确认删除吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_device",deviceId:r}},$())}),t.querySelector("[data-clear-plan-alert]")?.addEventListener("click",async i=>{const r=i.currentTarget.dataset.clearPlanAlert;if(!(!r||!e.clearPlanChangeAlert))try{await e.clearPlanChangeAlert(r),delete H[r],ue="已确认本层换图后的设备点位核对无误。",$()}catch(m){se=m instanceof Error?m.message:String(m),$()}}),t.querySelectorAll("[data-drawer-tab]").forEach(i=>{i.addEventListener("click",()=>{Ae=i.dataset.drawerTab??"binding",$()})}),t.querySelector("[data-close-sel]")?.addEventListener("click",()=>{Me=!1,Y=!1,L=!1,$()}),t.querySelectorAll("[data-toggle-place]").forEach(i=>{i.addEventListener("click",()=>{y!=="device_marking"?(y="device_marking",Y=!0):Y=!Y,$()})}),t.querySelectorAll("[data-binding-field]").forEach(i=>{const r=()=>{const m=C.find(M=>M.id===W);if(!m||((!x||x.deviceId!==m.id)&&$t(m),!x))return;const b=i.dataset.bindingField;b==="protocol"?x.protocol=i.value:b==="gatewayId"?x.gatewayId=i.value:b==="networkAddress"?x.networkAddress=i.value:b==="portOrChannel"&&(x.portOrChannel=i.value)};i.addEventListener("input",r),i.addEventListener("change",r)}),t.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{const i=C.find(r=>r.id===W);i&&((!x||x.deviceId!==i.id)&&$t(i),x&&(x.physicalInstalled=!x.physicalInstalled),$())}),t.querySelectorAll("[data-ping-dev]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const m=C.find(b=>b.id===i.dataset.pingDev);m&&(ue=`已向「${m.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,$())})}),t.querySelector("[data-add-light-marker]")?.addEventListener("click",async i=>{if(!e.addLightMarker)return;const r=i.currentTarget.dataset.addLightMarker,m=B.filter(b=>b.deviceId===r).length+1;try{await e.addLightMarker({deviceId:r,floorId:j,channel:`回路 ${m}`,label:`照明点位 ${m}`,x:Math.min(.86,.35+m*.1),y:.42}),P="light_marker",ue=`已新增「回路 ${m}」可视化灯点。`,await ze(),$()}catch(b){se=b instanceof Error?b.message:String(b),$()}}),t.querySelectorAll("[data-del-light-marker]").forEach(i=>{i.addEventListener("click",async()=>{if(!e.deleteLightMarker)return;const r=i.dataset.delLightMarker;if(r)try{await e.deleteLightMarker(r),await ze(),$()}catch(m){se=m instanceof Error?m.message:String(m),$()}})}),t.querySelectorAll("[data-toggle-mesh-role]").forEach(i=>{i.addEventListener("click",async()=>{if(!e.updateMeshRole)return;const r=i.dataset.meshDev,m=i.dataset.toggleMeshRole,b=V[r]??{proxy:!1,relay:!1,meshUuid:`mesh-${j.slice(-4)}`};try{await e.updateMeshRole(r,j,{[m]:!b[m]}),ue=`已更新节点 ${m.toUpperCase()} 状态，可在「设备网络」中同步至边缘网关。`,await ze(),$()}catch(M){se=M instanceof Error?M.message:String(M),$()}})}),t.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async i=>{const r=C.find(R=>R.id===W),m=i.currentTarget.getBoundingClientRect(),b=Math.max(.02,Math.min(.98,(i.clientX-m.left)/m.width)),M=Math.max(.02,Math.min(.98,(i.clientY-m.top)/m.height));if(Y&&r){try{const R=d.floors.find(N=>N.id===j)?.plan?.planVersion??1;await e.updateDevicePlanPoint({deviceId:r.id,floorId:j,planVersion:R,x:b,y:M,expectedVersion:r.version}),Y=!1,ue=`已更新「${r.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await ze(),$()}catch(R){se=R instanceof Error?R.message:String(R),$()}return}if(P==="light_marker"&&r?.category==="lighting"&&n.scope.canEditDeployment&&e.addLightMarker){const R=B.filter(N=>N.deviceId===r.id).length+1;try{await e.addLightMarker({deviceId:r.id,floorId:j,channel:`回路 ${R}`,label:`灯点 ${R}`,x:Number(b.toFixed(4)),y:Number(M.toFixed(4))}),ue=`已为「${r.name}」点图布置「回路 ${R}」可视化灯点。`,await ze(),$()}catch(N){se=N instanceof Error?N.message:String(N),$()}}}),t.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async i=>{i.preventDefault();const r=C.find(N=>N.id===W);if(!r)return;const m=new FormData(i.currentTarget),b=String(m.get("gatewayId")??"").trim(),M=String(m.get("networkAddress")??"").trim(),R=String(m.get("portOrChannel")??"").trim();if(r.category!=="gateway"&&!b){se="请先为本层登记并选择所属上游网关，再保存硬件绑定。",$();return}if(!M){se="请填写设备网络地址或通信主题后再保存硬件绑定。",$();return}try{await e.updateDeviceHardwareBinding({deviceId:r.id,gatewayId:r.category==="gateway"?r.id:b,protocol:String(m.get("protocol")),networkAddress:M,portOrChannel:R,physicalInstalled:x?.deviceId===r.id?x.physicalInstalled:r.physicalInstalled,expectedVersion:r.version}),se="",ue=`已保存「${r.name}」的硬件绑定与物理安装复核状态。`,await ze(),$t(C.find(N=>N.id===r.id)),$()}catch(N){se=N instanceof Error?N.message:String(N),$()}}),t.querySelector("[data-save-dev-params]")?.addEventListener("submit",async i=>{if(i.preventDefault(),!e.saveDeviceParams)return;const r=i.currentTarget.dataset.saveDevParams,m=new FormData(i.currentTarget);try{await e.saveDeviceParams(r,j,{offDelayMin:Number(m.get("offDelayMin")??15),restoreMin:Number(m.get("restoreMin")??30),luxOn:Number(m.get("luxOn")??280),luxOff:Number(m.get("luxOff")??450)}),ue="已保存设备自治参数配置，请前往「设备网络」执行同步至边缘网关后生效。",await ze(),$()}catch(b){se=b instanceof Error?b.message:String(b),$()}}),t.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const i=C.find(r=>r.id===W);i&&z(i)}),t.querySelectorAll("[data-ftt-dev]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const m=C.find(b=>b.id===i.dataset.fttDev);m&&z(m)})}),t.querySelectorAll("[data-batch-ftt]").forEach(i=>{i.addEventListener("click",()=>void X(j))}),t.querySelectorAll("[data-floor-ftt]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.floorFtt;r&&X(r)})}),t.querySelector("[data-dismiss-ftt]")?.addEventListener("click",()=>{Be=null,$()}),t.querySelectorAll("[data-export-inv]").forEach(i=>{i.addEventListener("click",()=>fe())}),t.querySelector("[data-save-group]")?.addEventListener("submit",async i=>{if(i.preventDefault(),!e.upsertDeviceGroup)return;const r=i.currentTarget,m=r.dataset.saveGroup||void 0,b=new FormData(r),M=String(b.get("gName")??"").trim(),R=b.get("gTrack")??"mesh_auto",N=String(b.get("gType")??"灯光联动组"),Re=Array.from(new Set(b.getAll("gMemberIds").map(Le=>String(Le)).filter(Boolean)));if(M)try{await e.upsertDeviceGroup({id:m,track:R,groupType:N,name:M,floorId:j,includesAdapter:R==="mesh_auto",deviceIds:Re}),me(),ue=`${m?"已更新":"已新建"}${R==="mesh_auto"?"端侧蓝牙 Mesh 自治组":"云端业务分组"}「${M}」（${Re.length} 台成员）。`,await ze(),$()}catch(Le){se=Le instanceof Error?Le.message:String(Le),$()}}),t.querySelectorAll("[data-del-group]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.delGroup,m=de.find(b=>b.id===r);!r||!m||(me(),tt={title:`删除设备分组「${m.name}」`,body:"删除分组不会移除成员设备，但会解除该群组的批量联动配置。确认删除吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_group",groupId:r}},$())})}),t.querySelectorAll("[data-test-group]").forEach(i=>{i.addEventListener("click",()=>{const r=de.find(M=>M.id===i.dataset.testGroup);if(!r)return;const b=r.deviceIds.map(M=>C.find(R=>R.id===M)).filter(M=>!!M).filter(M=>M.category!=="gateway");if(b.length===0)se=`分组「${r.name}」暂未包含受控末端设备（仅含网关或为空），请先编辑添加成员后再执行试控。`,ue="";else{const M=b.filter(R=>R.connectivity==="offline");M.length>0?(se=`分组「${r.name}」试控部分异常：${M.map(R=>R.name).join("、")} 当前离线。`,ue=""):(se="",ue=`已向分组「${r.name}」发送群组试控指令，${b.length} 台受控终端回读正常。`)}$()})}),t.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>ee()),t.querySelector("[data-clear-mesh-findings]")?.addEventListener("click",()=>{et=[],$()}),t.querySelector("[data-sync-edge]")?.addEventListener("click",async()=>{if(!(!e.syncEdgeGateway||!j))try{const i=await e.syncEdgeGateway(j);K=i,pe[j]=i,se="",ue=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${i.version}）。`,$()}catch(i){se=i instanceof Error?i.message:String(i),$()}}),t.querySelectorAll("[data-topo-mode]").forEach(i=>{i.addEventListener("click",()=>{bt=i.dataset.topoMode??"mesh",$()})}),t.querySelectorAll("[data-topo-jump]").forEach(i=>{i.addEventListener("click",()=>{W=i.dataset.topoJump??null,Me=!0,Ae="binding",L=!1,y="device_marking";const r=C.find(m=>m.id===W);$t(r),$()})}),t.querySelector("[data-toggle-conn-more]")?.addEventListener("click",i=>{i.stopPropagation(),qe=!qe,$()}),t.querySelector("[data-req-restart-edge]")?.addEventListener("click",()=>{qe=!1,me(),tt={title:"确认重启边缘服务",body:"重启将导致当前项目边缘网关通信短暂中断约 5 秒，正在进行的实时采集将自动重连。确认执行重启吗？",confirmLabel:"确认重启",danger:!0,action:{kind:"restart_edge",projectId:U}},$()}),t.querySelectorAll("[data-conn-view]").forEach(i=>{i.addEventListener("click",()=>{vt=i.dataset.connView??"list",$()})}),t.querySelector("[data-conn-search]")?.addEventListener("input",i=>{u=i.currentTarget.value,$();const r=t.querySelector("[data-conn-search]");r&&(r.focus(),r.setSelectionRange(u.length,u.length))}),t.querySelector("[data-conn-status-filter]")?.addEventListener("change",i=>{T=i.currentTarget.value??"all",$()}),t.querySelector("[data-conn-bld-select]")?.addEventListener("change",i=>{const r=i.currentTarget.value,m=t.querySelector('[data-save-conn] select[name="cFloor"]');if(!m)return;const b=r?ut(r):[];m.innerHTML=`<option value="">整栋 / 不限楼层</option>${b.map(M=>`<option value="${s(M.id)}">${s(M.name)}</option>`).join("")}`}),t.querySelector("[data-save-conn]")?.addEventListener("submit",async i=>{if(i.preventDefault(),!e.upsertConnection)return;const r=i.currentTarget,m=r.dataset.saveConn||void 0,b=new FormData(r),M=String(b.get("cName")??"").trim(),R=String(b.get("cProto")??"bacnet_ip"),N=String(b.get("cEndpoint")??"").trim(),Re=String(b.get("cBuilding")??"").trim(),Le=String(b.get("cFloor")??"").trim();if(!(!M||!N))try{const Je=await e.upsertConnection({id:m,projectId:U,buildingId:Re,floorId:Le,name:M,protocol:R,endpoint:N});me(),se="",ue=m?`已更新接入通道「${M}」（${N}）。`:`已接入「${M}」（${N}），当前关联 ${Je.collectedPoints} 原始采集点。`,ve=await e.listConnections(U).catch(()=>[]),$()}catch(Je){se=Je instanceof Error?Je.message:String(Je),$()}}),t.querySelectorAll("[data-del-conn]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.delConn,m=ve.find(b=>b.id===r);!r||!m||(me(),tt={title:`删除接入通道「${m.name}」`,body:`删除后将停止对端点 ${m.endpoint} 的数据采集与控制下发，此操作不可撤销。确认删除吗？`,confirmLabel:"确认删除",danger:!0,action:{kind:"delete_connection",connectionId:r}},$())})}),t.querySelectorAll("[data-expand-conn]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.expandConn??null;le=le===r?null:r,$()})}),t.querySelectorAll("[data-ping-conn]").forEach(i=>{i.addEventListener("click",()=>{const r=ve.find(m=>m.id===i.dataset.pingConn);r&&(se="",r.status==="connected"?ue=`连通测试通过：「${r.name}」（${r.endpoint}）响应正常，延迟 18 ms。`:se=`连通测试异常：「${r.name}」（${r.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,$())})}),t.querySelectorAll("[data-copy-endpoint]").forEach(i=>{i.addEventListener("click",async()=>{const r=i.dataset.endpointVal??"",m=i.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(r),ye=m,$(),window.setTimeout(()=>{ye=null,$()},1600)}catch{}})}),t.querySelectorAll("[data-acc-filter]").forEach(i=>{i.addEventListener("click",()=>{Pe=i.dataset.accFilter??"active",$()})}),t.querySelectorAll("[data-matrix-nav]").forEach(i=>{i.addEventListener("click",async()=>{const r=i.dataset.matrixFloor,m=i.dataset.matrixNav??"device_marking",b=i.dataset.matrixOffline==="1";r&&At(r),y=m,m==="project_config"&&(I=r?"floor":"overview"),m==="device_list"&&b&&(Ue="offline"),await ze(),$()})}),t.querySelector("[data-submit-stage-snapshot]")?.addEventListener("click",async i=>{if(!e.saveDeliveryStageSnapshot)return;const r=i.currentTarget.dataset.submitStageSnapshot||It;if(!r)return;const m=t.querySelector("[data-confirm-freeze]"),b=m?String(new FormData(m).get("freezeNote")??"").trim():"";try{const M=await e.saveDeliveryStageSnapshot(r,b||"阶段性施工留档");me(),se="",ue=`已保存阶段留档 ${M.versionTag}（已核验 ${M.verifiedCount}/${M.deviceCount} 台，状态：阶段留档）。`,await yt(),await ze(),$()}catch(M){me(),se=M instanceof Error?M.message:String(M),$()}}),t.querySelector("[data-confirm-freeze]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget,m=r.dataset.confirmFreeze||It||j;if(!m)return;const b=new FormData(r),M=String(b.get("freezeNote")??"").trim();try{const R=await e.freezeDeliveryBatch(m,M||"全层自检通过，正式交付冻结");me(),se="",ue=`已生成正式交付冻结基线 ${R.versionTag}（核验 ${R.verifiedCount}/${R.deviceCount}）。`,await yt(),await ze(),$()}catch(R){me(),se=R instanceof Error?R.message:String(R),$()}})}await Xe()}const on=new Set(["lighting","hvac","alarm_rules"]),ns={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},ga=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function ln(t){const e=new Set;for(const a of t.actions)a.command.startsWith("lighting")?e.add("照明"):a.command.startsWith("hvac")?e.add("暖通"):e.add("综合");return Array.from(e)}function rn(t,e,a){const n=a?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
    <div style="width:150px; display:flex; flex-direction:column; gap:3px;">
      <div style="position:relative; height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
        ${t<e?`<div style="position:absolute; left:${t/24*100}%; width:${(e-t)/24*100}%; top:0; bottom:0; border-radius:999px; background:${n};"></div>`:`
        <div style="position:absolute; left:${t/24*100}%; width:${(24-t)/24*100}%; top:0; bottom:0; border-radius:999px; background:${n};"></div>
        <div style="position:absolute; left:0; width:${e/24*100}%; top:0; bottom:0; border-radius:999px; background:${n};"></div>`}
      </div>
      <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--pacom-text-muted);">
        <span>00</span><span>12</span><span>24</span>
      </div>
    </div>
  `}async function cn(t,e,a){let n=Ia(),o=!1,l="",[c,E,v,f]=await Promise.all([e.getSpatialTree(),e.listScenes(F.floorId),e.getRuntimeSettings(F.projectId),e.getFloorDevices(F.floorId).catch(()=>[])]),y="manual",I="balanced",S="all",_=null,p="",d=!1,C=!1,A=!1,B="all",V=null,K="",pe="",re=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const de=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],ie=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],ve=[{deviceId:f[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],te=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 ｜ ${v.calendar.workdayStart} – ${v.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 ｜ 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 ｜ ${v.calendar.nightGuardStart} – 次日 ${v.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],H=e.subscribeFloorEvents(F.floorId,async be=>{be.type==="control.receipt.updated"&&_?.batchId===be.batchId&&(_=await e.getControlBatch(be.batchId),J())});function J(){const be=p.trim().toLowerCase(),Ne=be?E.filter(g=>`${g.name} ${g.description}`.toLowerCase().includes(be)):E,$e=v.rules.filter(g=>on.has(g.category)),ke=S==="all"?$e:S==="cbm"?[]:$e.filter(g=>g.category===S),Ie=S==="all"||S==="cbm",O=B==="issues"?de.filter(g=>g.status!=="verified"):de,U=ga.find(g=>g.id===I)??ga[1],ae=a.scope.canControlDevices,j=a.scope.canEditScenes,h=a.scope.canEditSettings,D=a.scope.activeOverrides.find(g=>g.module==="settings"&&g.status==="active");t.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${Ea({tree:c,session:a,scope:n,isOpen:o,searchKeyword:l})}
            </div>

            <div class="pacom-header-meta">
              ${y==="rules"?h?D?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>':""}
              <button type="button" class="pacom-badge ${re.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${re.length>0?`人工覆盖中：${re.length} 台 ${ce("chevron-down",12)}`:`全部自动托管 ${ce("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${A?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${de.length}）</button>
              ${y==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1" ${j?"":"disabled"}>${d?"收起表单":"+ 新建场景"}</button>`:y==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${y==="manual"}" data-scene-tab="manual">快捷场景（${E.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${y==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${y==="rules"}" data-scene-tab="rules">条件联动（${$e.length+ie.length}）</button>
          </nav>
        </header>

        ${C?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${re.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${ce("x",16)}</button>
              </div>
              ${re.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':re.map(g=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${s(g.name)}</div>
                            <div class="pacom-row-sub">${s(g.reason)}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${s(g.id)}" ${ae?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${re.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${ae?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${A?`
            <aside class="pacom-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${ce("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${B==="all"}" data-log-filter="all">全部（${de.length}）</button>
                  <button class="pacom-tab" aria-selected="${B==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${O.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${O.map(g=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${s(g.device)}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${s(g.source)}</span>
                        </div>
                        <span class="pacom-row-sub">${s(g.action)} ｜ ${s(g.at)}</span>
                      </div>
                      <span class="pacom-badge ${g.status==="verified"?"pacom-badge--online":g.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${g.status==="verified"?"回读确认":g.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${K?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${s(K)}</span></div>`:""}
          ${pe?`<div class="pacom-alert-banner">${s(pe)}</div>`:""}

          ${y==="manual"?`
              ${_?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${s(_.batchId)}</span>
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
                            ${_.receipts.map(g=>`
                                <tr>
                                  <td><code style="font-size:12px;">${s(g.deviceId)}</code></td>
                                  <td>${s(g.command)}</td>
                                  <td>${s(String(g.targetValue))}${g.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${s(g.errorMessage)}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${g.status==="verified_success"?"pacom-badge--online":g.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${s(g.status)}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${d?`
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
                          <span class="pacom-setting-title">联动动作列表（${ve.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${ve.map((g,P)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" name="draftDevice-${P}" data-draft-dev="${P}" aria-label="目标设备">
                                ${f.map(Q=>`<option value="${s(Q.id)}" ${Q.id===g.deviceId?"selected":""}>${s(Q.name)}</option>`).join("")}
                              </select>
                              <select class="pacom-select" name="draftCommand-${P}" data-draft-cmd="${P}" aria-label="执行指令">
                                <option value="lighting.dimming" ${g.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${g.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${g.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" name="draftTargetValue-${P}" data-draft-val="${P}" value="${s(g.targetValue)}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${P}" ${ve.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit" ${j?"":"disabled"}>保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="pacom-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${s(p)}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${Ne.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${Ne.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':Ne.map(g=>{const P=ln(g),Q=g.actions.slice(0,3).map(je=>{const Ye=f.find(Ae=>Ae.id===je.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??je.deviceId,Me=je.command==="lighting.dimming"?`亮度 ${je.targetValue}%`:je.command==="hvac.setpoint"?`设温 ${je.targetValue}°C`:je.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${s(Ye)} → ${s(Me)}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${s(g.name)}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${P.map(je=>`<span class="pacom-badge pacom-badge--accent">${s(je)}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${g.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${s(g.description)}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${Q}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${s(g.lastExecutedAt?g.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行")}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${s(g.id)}" ${ae?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:y==="schedule_oss"?`
                <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">当前优化启停模式</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${U.title}</div>
                    <span class="pacom-kpi-delta">${U.estSaving}</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">明日预测预启动时刻</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${U.predictedStart}</div>
                    <span class="pacom-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">本周累计节省运行工时</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${U.savedHours}</div>
                    <span class="pacom-kpi-delta">当前人工覆盖挂起：${re.length} 台</span>
                  </div>
                </div>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="pacom-mode-grid">
                    ${ga.map(g=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${I===g.id}" data-oss-mode="${g.id}" ${ae?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${g.title}</strong>
                          <span class="pacom-badge ${I===g.id?"pacom-badge--online":"pacom-badge--neutral"}">${I===g.id?"当前生效":g.badge}</span>
                        </div>
                        <span class="pacom-setting-desc">${g.desc}</span>
                        <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${g.estSaving}</span>
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
                          ${te.map(g=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${s(g.name)}</span>
                                    ${g.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${s(g.windowLabel)}</div>
                                </td>
                                <td>${rn(g.startHour,g.endHour,g.enabled)}</td>
                                <td><span class="pacom-row-sub">${s(g.scope)}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${g.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="pacom-switch"
                                      role="switch"
                                      aria-checked="${g.enabled}"
                                      aria-label="切换排程 ${s(g.name)}"
                                      data-toggle-schedule="${s(g.id)}"
                                      ${ae?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(g=>{const P=g==="all"?"全部":ns[g]??g,Q=g==="all"?$e.length+ie.length:g==="cbm"?ie.length:$e.filter(je=>je.category===g).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${S===g}" data-rule-cat="${g}">
                              <span>${P}</span><span class="pacom-count-num">${Q}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${ke.map(g=>{const P=V===g.id;return`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${s(ns[g.category]??g.category)}</span>
                                  <span>${s(g.name)}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${g.version}</span>
                                </span>
                                <span class="pacom-setting-desc">${s(g.summary)} ｜ 范围：${s(g.scopeLabel)} ｜ 回执：${s(g.receiptSummary??"已同步")}</span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${s(g.id)}">${P?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${g.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="pacom-switch"
                                  role="switch"
                                  aria-checked="${g.enabled?"true":"false"}"
                                  aria-label="切换 ${s(g.name)}"
                                  data-toggle-strategy-rule="${s(g.id)}"
                                  data-rule-ver="${g.version}"
                                  data-rule-next="${!g.enabled}"
                                  ${h?"":"disabled"}
                                >
                                  <span class="pacom-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${P?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${g.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":g.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${s(g.scopeLabel)} ｜ 当前版本：v${g.version} ｜ 最近同步：${s(g.receiptSummary??"已同步")}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${Ie?ie.map(g=>{const P=Math.min(100,Math.round(g.runtimeHours/g.thresholdHours*100));return`
                                <div class="pacom-setting-row">
                                  <div class="pacom-setting-meta" style="gap:6px;">
                                    <span class="pacom-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${s(g.name)}</span>
                                      <span class="pacom-badge ${P>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${g.runtimeHours} / ${g.thresholdHours} h（${P}%）</span>
                                    </span>
                                    <div class="pacom-progress-track" style="max-width:340px;">
                                      <div class="pacom-progress-fill" style="width:${P}%; background:${P>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="pacom-setting-desc">绑定设备：${s(g.equipment)} ｜ 上次重置：${s(g.lastReset)}</span>
                                  </div>
                                  <div class="pacom-setting-control">
                                    <span class="pacom-row-sub">${g.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="pacom-switch" role="switch" aria-checked="${g.enabled}" data-toggle-cbm="${s(g.id)}" aria-label="切换 ${s(g.name)}" ${h?"":"disabled"}>
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,ka(t,{onToggle:()=>{o=!o,J(),o&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:g=>{l=g,J();const P=t.querySelector("[data-global-space-search]");P&&(P.focus(),P.setSelectionRange(g.length,g.length))},onPick:g=>{n=g,o=!1,J()}}),t.querySelectorAll("[data-scene-tab]").forEach(g=>{g.addEventListener("click",()=>{y=g.dataset.sceneTab??"manual",K="",J()})}),t.querySelectorAll("[data-toggle-overrides]").forEach(g=>{g.addEventListener("click",()=>{C=!C,J()})}),t.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{ae&&(re=[],K="已释放全部人工覆盖设备，自动节能策略已恢复托管。",J())}),t.querySelectorAll("[data-release-one]").forEach(g=>{g.addEventListener("click",()=>{if(!ae)return;const P=g.dataset.releaseOne;re=re.filter(Q=>Q.id!==P),K="已恢复该设备的自动策略托管。",J()})}),t.querySelectorAll("[data-toggle-cmdlog]").forEach(g=>{g.addEventListener("click",()=>{A=!A,J()})}),t.querySelectorAll("[data-log-filter]").forEach(g=>{g.addEventListener("click",()=>{B=g.dataset.logFilter??"all",J()})}),t.querySelector("[data-close-batch]")?.addEventListener("click",()=>{_=null,J()}),t.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),t.querySelectorAll("[data-oss-mode]").forEach(g=>{g.addEventListener("click",()=>{if(!ae)return;const P=g.dataset.ossMode;if(!P)return;I=P;const Q=ga.find(je=>je.id===P);K=`已切换至「${Q?.title??P}」模式（明日预测启动 ${Q?.predictedStart??""}）。`,J()})}),t.querySelectorAll("[data-toggle-schedule]").forEach(g=>{g.addEventListener("click",()=>{if(!ae)return;const P=g.dataset.toggleSchedule,Q=te.find(je=>je.id===P);Q&&(Q.enabled=!Q.enabled,K=`排程「${Q.name}」已${Q.enabled?"恢复启用":"临时暂停"}。`,J())})}),t.querySelectorAll("[data-rule-cat]").forEach(g=>{g.addEventListener("click",()=>{S=g.dataset.ruleCat??"all",J()})}),t.querySelectorAll("[data-expand-rule]").forEach(g=>{g.addEventListener("click",()=>{const P=g.dataset.expandRule??null;V=V===P?null:P,J()})}),t.querySelectorAll("[data-toggle-cbm]").forEach(g=>{g.addEventListener("click",()=>{if(!h)return;const P=ie.find(Q=>Q.id===g.dataset.toggleCbm);P&&(P.enabled=!P.enabled,K=`工时维保规则「${P.name}」已${P.enabled?"启用":"停用"}。`,J())})}),t.querySelectorAll("[data-toggle-strategy-rule]").forEach(g=>{g.addEventListener("click",async()=>{if(h){pe="";try{await e.toggleRuntimeRule(g.dataset.toggleStrategyRule,g.dataset.ruleNext==="true",Number(g.dataset.ruleVer)),v=await e.getRuntimeSettings(F.projectId),K="条件联动规则状态与版本回执已更新。",J()}catch(P){pe=P instanceof Error?P.message:String(P),J()}}})}),t.querySelectorAll("[data-toggle-create]").forEach(g=>{g.addEventListener("click",()=>{!j&&!d||(d=!d,J())})}),t.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{j&&(ve.push({deviceId:f[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),J())}),t.querySelectorAll("[data-del-draft-action]").forEach(g=>{g.addEventListener("click",()=>{if(!j)return;const P=Number(g.dataset.delDraftAction);ve.length>1&&(ve.splice(P,1),J())})}),t.querySelectorAll("[data-draft-dev]").forEach(g=>{g.addEventListener("change",()=>{if(!j)return;const P=ve[Number(g.dataset.draftDev)];P&&(P.deviceId=g.value)})}),t.querySelectorAll("[data-draft-cmd]").forEach(g=>{g.addEventListener("change",()=>{if(!j)return;const P=ve[Number(g.dataset.draftCmd)];P&&(P.command=g.value)})}),t.querySelectorAll("[data-draft-val]").forEach(g=>{g.addEventListener("change",()=>{if(!j)return;const P=ve[Number(g.dataset.draftVal)];P&&(P.targetValue=g.value)})}),t.querySelector("[data-scene-search]")?.addEventListener("input",g=>{const P=g.currentTarget,Q=P.selectionStart??P.value.length;p=P.value,J();const je=t.querySelector("[data-scene-search]");je&&(je.focus(),je.setSelectionRange(Q,Q))}),t.querySelectorAll("[data-exec-scene]").forEach(g=>{g.addEventListener("click",async()=>{if(!ae)return;pe="";const P=E.find(Q=>Q.id===g.dataset.execScene);try{_=await e.executeScene(g.dataset.execScene),E=await e.listScenes(F.floorId),de.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:P?.name??"E7F 场景",action:`${_.receipts.length} 台设备联动下发`,status:"verified"}),J()}catch(Q){pe=Q instanceof Error?Q.message:String(Q),J()}})}),t.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async g=>{if(g.preventDefault(),!j)return;const P=new FormData(g.currentTarget);try{await e.createScene({projectId:F.projectId,floorId:F.floorId,name:String(P.get("name")??""),description:String(P.get("description")??""),actions:ve.map(Q=>({deviceId:Q.deviceId,command:Q.command,targetValue:Q.targetValue==="true"?!0:Q.targetValue==="false"?!1:Number(Q.targetValue)||50}))}),E=await e.listScenes(F.floorId),d=!1,K=`快捷场景已保存（共绑定 ${ve.length} 条联动动作）。`,J()}catch(Q){pe=Q instanceof Error?Q.message:String(Q),J()}})}J(),window.addEventListener("hashchange",()=>H(),{once:!0})}const os={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function ja(t,e){return t.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':t.map(a=>`
      <div class="pacom-setting-row">
        <div class="pacom-setting-meta">
          <span class="pacom-setting-title">
            <span>${s(a.name)}</span>
            <span class="pacom-badge pacom-badge--neutral">v${a.version}</span>
            <span class="pacom-badge pacom-badge--accent">${s(a.scopeLabel)}</span>
          </span>
          <span class="pacom-setting-desc">${s(a.summary)} ｜ 回执：${s(a.receiptSummary??"已同步")}</span>
        </div>
        <div class="pacom-setting-control">
          <span class="pacom-row-sub">${a.enabled?"已启用":"已停用"}</span>
          <button
            type="button"
            class="pacom-switch"
            role="switch"
            aria-checked="${a.enabled?"true":"false"}"
            aria-label="切换 ${s(a.name)}"
            data-toggle-rule="${s(a.id)}"
            data-rule-ver="${a.version}"
            data-rule-next="${!a.enabled}"
            ${e?"":"disabled"}
          >
            <span class="pacom-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function dn(t,e,a){let n="calendar",o=Ia(),l=!1,c="";const[E,v]=await Promise.all([e.getSpatialTree(),e.getRuntimeSettings(F.projectId)]);let f=v,y=f.calendar.workdayStart,I=f.calendar.workdayEnd,S=f.calendar.nightGuardStart,_=f.calendar.nightGuardEnd,p=!0,d=[];const C=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let A="flat";const B={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},V={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},K={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},pe={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},re=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let de="",ie="";function ve(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(J=>{const be=os[J];return`
                <button type="button" class="pacom-unified-item" aria-current="${n===J}" data-stab="${J}">
                  ${ce(be.icon,16)}
                  <span>${be.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function te(){const H=a.scope.canEditSettings,J=a.scope.activeOverrides.find(O=>O.module==="settings"&&O.status==="active"),be=E.projects[0]?.name??"当前项目",Ne=f.rules.filter(O=>O.category==="weather_area"),$e=f.rules.filter(O=>O.category==="metering_carbon"),ke=f.rules.filter(O=>O.category==="templates"),Ie=os[n];t.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${Ea({tree:E,session:a,scope:o,maxGranularity:"project",isOpen:l,searchKeyword:c})}
            </div>
            <div class="pacom-header-meta">
              ${H?J?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${ve()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head">
                <h2 class="pacom-unified-title">${Ie.label}</h2>
                <p class="pacom-unified-subtitle">${Ie.subtitle}</p>
              </div>
              ${J?`<div class="pacom-banner pacom-banner--ok">
                      <div class="pacom-banner-text">
                        <span class="pacom-banner-title">临时提权生效中（应用设置 ｜ ${J.durationHours}h）</span>
                        <span class="pacom-banner-sub">审批人：${s(J.approvedBy)} ｜ 到期自动收回：${s(J.expiresAt.slice(0,16).replace("T"," "))} ｜ 事由：${s(J.reason)}</span>
                      </div>
                    </div>`:""}
              ${de?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${s(de)}</span></div>`:""}
              ${ie?`<div class="pacom-alert-banner">${s(ie)}</div>`:""}

              ${n==="calendar"?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">工作时间与夜间值守基准</h2>
                      <span class="pacom-badge pacom-badge--neutral">版本 v${f.calendar.version}</span>
                    </div>
                    <div class="pacom-settings-card">
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">工作日上班 / 下班时间</span>
                          <span class="pacom-setting-desc">驱动「智能策略 → 排程与节能」早间预冷及公区照明启停；晚于 21:30 将自动提示交叠冲突</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calWorkdayStart" style="width:116px;" type="time" data-cal-start value="${s(y)}" aria-label="工作日上班时间" ${H?"":"disabled"} />
                          <span class="pacom-row-sub">至</span>
                          <input class="pacom-input" name="calWorkdayEnd" style="width:116px;" type="time" data-cal-end value="${s(I)}" aria-label="工作日下班时间" ${H?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calNightGuardStart" style="width:116px;" type="time" data-night-start value="${s(S)}" aria-label="夜间值守开始" ${H?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" name="calNightGuardEnd" style="width:116px;" type="time" data-night-end value="${s(_)}" aria-label="夜间值守结束" ${H?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">自动跳过中国法定节假日</span>
                          <span class="pacom-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                        </div>
                        <div class="pacom-setting-control">
                          <span class="pacom-row-sub">${p?"已开启":"已关闭"}</span>
                          <button type="button" class="pacom-switch" role="switch" aria-checked="${p}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${H?"":"disabled"}>
                            <span class="pacom-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                        <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${H?"":"disabled"}>保存并校验版本</button>
                      </div>
                    </div>
                  </section>

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">特殊例外日期（加班 / 接待覆盖默认日历）</h2>
                      <span class="pacom-row-sub">共 ${C.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${C.map(O=>`
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title"><span>${s(O.date)}</span><span class="pacom-badge pacom-badge--accent">${s(O.mode)}</span></span>
                              <span class="pacom-setting-desc">${s(O.label)}</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${s(O.id)}" ${H?"":"disabled"}>移除</button>
                          </div>`).join("")}
                      <form data-add-sd-form class="pacom-setting-row" style="display:grid; grid-template-columns:145px 1fr 148px auto; gap:8px; align-items:center;">
                        <input class="pacom-input" name="date" type="date" required ${H?"":"disabled"} />
                        <input class="pacom-input" name="label" placeholder="说明（如：重要接待日 / 实验加班）" required ${H?"":"disabled"} />
                        <select class="pacom-select" name="mode" ${H?"":"disabled"}>
                          <option value="保持工作日工况">保持工作日工况</option>
                          <option value="全天节能值守">全天节能值守</option>
                        </select>
                        <button class="pacom-btn" type="submit" ${H?"":"disabled"}>+ 添加例外</button>
                      </form>
                    </div>
                  </section>

                  ${d.length>0?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">受影响的定时与夜间规则预览</h2>
                          <span class="pacom-row-sub">共 ${d.length} 条</span>
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
                                ${d.map(O=>`
                                    <tr>
                                      <td>
                                        <div style="font-weight:450;">${s(O.ruleName)}</div>
                                        ${O.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${s(O.conflictWarning)}</div>`:""}
                                      </td>
                                      <td>${s(O.beforeWindow)}</td>
                                      <td><strong>${s(O.afterWindow)}</strong></td>
                                      <td>
                                        <span class="pacom-badge ${O.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                          ${O.conflictWarning?"交叠警告":"自动跟随"}
                                        </span>
                                      </td>
                                    </tr>`).join("")}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </section>`:""}`:n==="energy_weather"?`
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
                            <select class="pacom-select" name="energyWeatherSource" data-energy-field="weatherSource" aria-label="室外气象数据源" ${H?"":"disabled"}>
                              <option value="guanzhou_station" ${B.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                              <option value="campus_sensor" ${B.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                            </select>
                          </div>
                        </div>
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">${s(be)}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" name="energyBillingArea" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${s(B.billingArea)}" aria-label="计费面积" ${H?"":"disabled"} />
                          </div>
                        </div>
                        ${ja(Ne,H)}
                      </div>
                    </section>

                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">电价与碳排口径</h2>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${A==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                          <button class="pacom-tab" aria-selected="${A==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                        </div>
                      </div>
                      <div class="pacom-settings-card">
                        ${A==="flat"?`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">综合电价参考（元 / kWh）</span>
                                <span class="pacom-setting-desc">用于数据分析中的月度节能金额估算</span>
                              </div>
                              <div class="pacom-setting-control">
                                <input class="pacom-input" name="energyTariffYuan" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${s(B.tariffYuan)}" aria-label="综合电价" ${H?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 ｜ 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" name="energyTariffPeak" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${s(B.tariffPeak)}" aria-label="峰段电价" ${H?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" name="energyTariffFlat" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${s(B.tariffFlat)}" aria-label="平段电价" ${H?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" name="energyTariffValley" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${s(B.tariffValley)}" aria-label="谷段电价" ${H?"":"disabled"} />
                              </div>
                            </div>`}
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">区域电网碳排放因子</span>
                            <span class="pacom-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" name="energyCarbonFactor" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${H?"":"disabled"}>
                              <option value="0.5271" ${B.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                              <option value="0.5703" ${B.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                            </select>
                          </div>
                        </div>
                        ${ja($e,H)}
                        <div class="pacom-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${H?"":"disabled"}>保存口径参数</button>
                        </div>
                      </div>
                    </section>`:n==="guardrails"?`
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
                              <input class="pacom-input" name="guardMinTemp" style="width:72px;" type="number" data-guard-field="minTemp" value="${s(V.minTemp)}" aria-label="最低设定温度" ${H?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" name="guardMaxTemp" style="width:72px;" type="number" data-guard-field="maxTemp" value="${s(V.maxTemp)}" aria-label="最高设定温度" ${H?"":"disabled"} />
                              <span class="pacom-row-sub">°C</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">人工覆盖自动释放时长</span>
                              <span class="pacom-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                            </div>
                            <div class="pacom-setting-control">
                              <select class="pacom-select" name="guardOverrideAutoRelease" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${H?"":"disabled"}>
                                <option value="2h" ${V.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                                <option value="4h" ${V.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                                <option value="eod" ${V.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                                <option value="permanent" ${V.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                              </select>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">控制指令回读超时阈值（秒）</span>
                              <span class="pacom-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" name="guardReadbackTimeoutSec" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${s(V.readbackTimeoutSec)}" aria-label="回读超时阈值" ${H?"":"disabled"} />
                              <span class="pacom-row-sub">秒</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row" style="justify-content:flex-end;">
                            <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${H?"":"disabled"}>保存控制参数</button>
                          </div>
                        </div>
                      </section>

                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">标准设备参数模板</h2>
                          <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                        </div>
                        <div class="pacom-settings-card">
                          ${ja(ke,H)}
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
                              <input class="pacom-input" name="dailyDigestTime" style="width:116px;" type="time" data-digest-time value="${s(pe.dailyDigestTime)}" aria-label="每日简报发送时间" ${H?"":"disabled"} />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${pe.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报" ${H?"":"disabled"}>
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
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${pe.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰" ${H?"":"disabled"}>
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
                              <input class="pacom-input" name="autoWoDelayMin" style="width:72px;" type="number" data-auto-wo="delayMin" value="${s(K.delayMin)}" aria-label="自动派单延迟分钟数" ${H?"":"disabled"} />
                              <span class="pacom-row-sub">分钟</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${K.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${H?"":"disabled"}>
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
                              <select class="pacom-select" name="autoWoDefaultGroup" data-auto-wo="defaultGroup" aria-label="默认处理组" ${H?"":"disabled"}>
                                <option value="暖通运维组" ${K.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                                <option value="强电照明组" ${K.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                                <option value="园区物业值班组" ${K.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                              </select>
                              <span class="pacom-row-sub">防重</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${K.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${H?"":"disabled"}>
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
                                ${re.map(O=>`
                                    <tr>
                                      <td><strong>${s(O.groupName)}</strong></td>
                                      <td>${s(O.scope)}</td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${s(O.severity)}</span></td>
                                      <td><span class="pacom-badge pacom-badge--accent">${s(O.channels)}</span></td>
                                      <td style="text-align:right;">
                                        <button type="button" class="pacom-switch" role="switch" aria-checked="${O.enabled}" data-toggle-nr="${s(O.id)}" aria-label="切换 ${s(O.groupName)} 通知规则" ${H?"":"disabled"}>
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
    `,ka(t,{onToggle:()=>{l=!l,te(),l&&t.querySelector("[data-global-space-search]")?.focus()},onSearch:O=>{c=O,te();const U=t.querySelector("[data-global-space-search]");U&&(U.focus(),U.setSelectionRange(O.length,O.length))},onPick:O=>{o=O,l=!1,te()}}),t.querySelectorAll("[data-stab]").forEach(O=>{O.addEventListener("click",()=>{n=O.dataset.stab??"calendar",de="",ie="",te()})}),t.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{H&&(p=!p,de=`法定节假日自动跳过已${p?"开启":"关闭"}。`,te())}),t.querySelector("[data-night-start]")?.addEventListener("change",O=>{H&&(S=O.currentTarget.value)}),t.querySelector("[data-night-end]")?.addEventListener("change",O=>{H&&(_=O.currentTarget.value)}),t.querySelector("[data-add-sd-form]")?.addEventListener("submit",O=>{if(O.preventDefault(),!H)return;const U=new FormData(O.currentTarget);C.push({id:`sd-${Date.now()}`,date:String(U.get("date")??""),label:String(U.get("label")??""),mode:String(U.get("mode")??"保持工作日工况")}),de="已添加特殊例外日期，当日自动覆盖默认节假日排程。",te()}),t.querySelectorAll("[data-del-sd]").forEach(O=>{O.addEventListener("click",()=>{if(!H)return;const U=C.findIndex(ae=>ae.id===O.dataset.delSd);U>=0&&C.splice(U,1),te()})}),t.querySelectorAll("[data-tariff-mode]").forEach(O=>{O.addEventListener("click",()=>{A=O.dataset.tariffMode??"flat",te()})}),t.querySelectorAll("[data-energy-field]").forEach(O=>{O.addEventListener("change",()=>{if(!H)return;const U=O.dataset.energyField;U&&(B[U]=O.value)})}),t.querySelector("[data-save-energy]")?.addEventListener("click",()=>{H&&(de=A==="flat"?`能耗计费与气象口径已保存（面积 ${B.billingArea} m² ｜ 综合电价 ¥${B.tariffYuan}/kWh ｜ 因子 ${B.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${B.tariffPeak} / 平 ¥${B.tariffFlat} / 谷 ¥${B.tariffValley}）。`,te())}),t.querySelectorAll("[data-guard-field]").forEach(O=>{O.addEventListener("change",()=>{if(!H)return;const U=O.dataset.guardField;U&&(V[U]=O.value)})}),t.querySelector("[data-save-guard]")?.addEventListener("click",()=>{H&&(de=`控制保护参数已保存（温区 ${V.minTemp}–${V.maxTemp}°C ｜ 超时 ${V.readbackTimeoutSec}s）。`,te())}),t.querySelectorAll("[data-auto-wo]").forEach(O=>{O.addEventListener("change",()=>{if(!H)return;const U=O.dataset.autoWo;U&&(K[U]=O.value),de="超时自动派单配置已更新。",te()})}),t.querySelectorAll("[data-toggle-autowo]").forEach(O=>{O.addEventListener("click",()=>{if(!H)return;const U=O.dataset.toggleAutowo;U&&(K[U]=!K[U],de="自动派单保护策略已更新。",te())})}),t.querySelector("[data-digest-time]")?.addEventListener("change",O=>{H&&(pe.dailyDigestTime=O.currentTarget.value,de=`每日晨间简报发送时刻已更新为 ${pe.dailyDigestTime}。`,te())}),t.querySelectorAll("[data-notify-key]").forEach(O=>{O.addEventListener("click",()=>{if(!H)return;const U=O.dataset.notifyKey;U&&(pe[U]=!pe[U],de="消息通知偏好已更新。",te())})}),t.querySelectorAll("[data-toggle-nr]").forEach(O=>{O.addEventListener("click",()=>{if(!H)return;const U=re.find(ae=>ae.id===O.dataset.toggleNr);U&&(U.enabled=!U.enabled,de=`工作组「${U.groupName}」的分流推送规则已${U.enabled?"启用":"停用"}。`,te())})}),t.querySelector("[data-cal-start]")?.addEventListener("change",O=>{H&&(y=O.currentTarget.value)}),t.querySelector("[data-cal-end]")?.addEventListener("change",O=>{H&&(I=O.currentTarget.value)}),t.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{ie="";try{d=await e.previewCalendarImpact(F.projectId,y,I),te()}catch(O){ie=O instanceof Error?O.message:String(O),te()}}),t.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{if(H){ie="";try{const O=await e.saveWorkCalendar(F.projectId,y,I,f.calendar.version);f={...f,calendar:{...O,nightGuardStart:S,nightGuardEnd:_}},de=`工作时间配置已保存至 v${O.version}（工作日 ${O.workdayStart}–${O.workdayEnd} ｜ 夜间值守 ${S}–${_}）`,d=[],te()}catch(O){ie=O instanceof Error?O.message:String(O),te()}}}),t.querySelectorAll("[data-toggle-rule]").forEach(O=>{O.addEventListener("click",async()=>{if(H){ie="";try{await e.toggleRuntimeRule(O.dataset.toggleRule,O.dataset.ruleNext==="true",Number(O.dataset.ruleVer)),f=await e.getRuntimeSettings(F.projectId),de="策略状态与版本回执已更新。",te()}catch(U){ie=U instanceof Error?U.message:String(U),te()}}})})}te()}const is="pacom.web.sidebar.collapsed",pn=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,ls=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],za={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},rs=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function Ca(){const t=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return t in za?t:"home"}function it(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}const na=new WeakMap;function un(t){na.get(t)?.()}async function mn(t,e,a,n){na.get(t)?.(),t.classList.remove("bare-login");let o=a,l=Ca(),c=localStorage.getItem(is)==="1",E=!1,v=!1,f=!1,y=await e.listOrganizations?.()??[{id:"org-gzlab",name:"广州国家实验室",projectCount:2}],I=e.getActiveOrganizationId?.()??y[0]?.id??"org-gzlab",S="",_=!1,p=0,d={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};function C(h){return o.scope.visibleModules.includes(h)}C(l)||(l="home",window.location.hash="#home");function A(){return y.find(h=>h.id===I)??y[0]??{id:"org-gzlab",name:"广州国家实验室",projectCount:0}}function B(h){if(h.id==="org-gzlab")return'<span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>';const D=h.name.slice(0,1)||"机";return`<span class="pacom-pop-avatar" style="width:24px; height:24px; font-size:12px; border-radius:6px;" aria-hidden="true">${it(D)}</span>`}async function V(){e.listOrganizations&&(y=await e.listOrganizations(),I=e.getActiveOrganizationId?.()??y[0]?.id??"org-gzlab")}async function K(){try{await V();const[h,D,G,g,P]=await Promise.all([e.getSpatialTree(),e.getFloorDevices(F.floorId).catch(()=>[]),e.listAlarms(F.floorId).catch(()=>[]),e.listWorkOrders(F.floorId).catch(()=>[]),e.listScenes(F.floorId).catch(()=>[])]);d={devices:D,zones:h.zones,alarms:G,workOrders:g,scenes:P},p=G.filter(Q=>Q.status==="active").length,J()}catch{}}function pe(){const h=ls.filter(G=>C(G.id));let D=!1;return h.map(G=>`
        ${(G.id==="settings"||G.id==="deployment")&&!D?(D=!0,'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>'):""}
        <button type="button" class="pacom-nav-item" data-route="${G.id}" aria-current="${l===G.id?"page":"false"}" title="${G.label}">
          ${ce(G.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${G.label}</span>
          ${G.id==="alarms"&&p>0?`<span class="pacom-nav-count" title="待处理告警 ${p} 条">${p}</span>`:""}
        </button>`).join("")}function re(){const h=S.trim().toLowerCase(),D=ls.filter(W=>C(W.id)),G=h?D.filter(W=>W.label.toLowerCase().includes(h)).slice(0,4):D,g=h?d.devices.filter(W=>`${W.name} ${W.id} ${W.category}`.toLowerCase().includes(h)).slice(0,5):d.devices.slice(0,3),P=h?d.zones.filter(W=>W.name.toLowerCase().includes(h)).slice(0,3):[],Q=C("alarms")?h?d.alarms.filter(W=>`${W.title} ${W.message} ${W.id}`.toLowerCase().includes(h)).slice(0,4):d.alarms.filter(W=>W.status==="active").slice(0,2):[],je=C("alarms")?h?d.workOrders.filter(W=>`${W.title} ${W.id}`.toLowerCase().includes(h)).slice(0,3):[]:[],Ye=C("scenes")?h?d.scenes.filter(W=>`${W.name} ${W.description}`.toLowerCase().includes(h)).slice(0,3):[]:[],Me=C("deployment")?h?rs.filter(W=>`${W.title} ${W.category}`.toLowerCase().includes(h)).slice(0,4):rs.slice(0,2):[],Ae=[];return g.length&&Ae.push(`<div class="pacom-search-group">${h?"设备（空间总览）":"常用设备直达"}</div>`+g.map(W=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(W.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${it(W.name)}</span><span class="pacom-badge ${W.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${W.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),P.length&&Ae.push('<div class="pacom-search-group">功能区</div>'+P.map(W=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(W.id)}"><span>${it(W.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),Q.length&&Ae.push(`<div class="pacom-search-group">${h?"告警":"待处理告警"}</div>`+Q.map(W=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(W.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${it(W.title)}</span><span class="pacom-badge pacom-badge--warning">${W.status==="active"?"待处理":"已确认"}</span></button>`).join("")),je.length&&Ae.push('<div class="pacom-search-group">运维工单</div>'+je.map(W=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(W.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${it(W.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),Ye.length&&Ae.push('<div class="pacom-search-group">智能策略</div>'+Ye.map(W=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${it(W.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),Me.length&&Ae.push('<div class="pacom-search-group">图纸与工程文档</div>'+Me.map(W=>`<button type="button" class="pacom-search-hit" data-search-hash="${W.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${it(W.title)}</span><span class="pacom-badge pacom-badge--neutral">${it(W.category)}</span></button>`).join("")),G.length&&Ae.push('<div class="pacom-search-group">工作区</div>'+G.map(W=>`<button type="button" class="pacom-search-hit" data-search-hash="#${W.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${ce(W.icon,14)}${it(W.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),Ae.length?Ae.join(""):`<div class="pacom-nav-empty">未找到与「${it(S)}」匹配的设备、区域、告警、工单或图纸</div>`}function de(h){h.querySelectorAll("[data-search-hash]").forEach(D=>{D.addEventListener("click",()=>{const G=D.dataset.searchHash||"#home";_=!1,S="",ie(),E=!1,window.location.hash===G?(l=Ca(),Ie(!0)):window.location.hash=G})})}function ie(){if(t.querySelector('[data-role="cmd-scrim"]')?.remove(),!_)return;const h=document.createElement("div");h.className="pacom-cmd-scrim",h.dataset.role="cmd-scrim",h.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${ce("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${it(S)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${re()}
        </div>
      </div>
    `,t.appendChild(h),h.addEventListener("click",g=>{g.target===h&&(_=!1,ie())});const D=h.querySelector('[data-role="cmd-input"]'),G=h.querySelector('[data-role="cmd-body"]');G&&de(G),D?.focus(),D?.addEventListener("input",g=>{S=g.currentTarget.value,G&&(G.innerHTML=re(),de(G))})}function ve(){if(!v)return"";const h=o.displayName.slice(0,1)||"U",D=!!(e.createOrganization&&o.role==="org_admin");return`
      <div class="pacom-org-popover ${c?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <div class="pacom-pop-section-label">切换机构</div>
        ${y.map(G=>{const g=G.id===I;return`
              <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitemradio" aria-checked="${g}" data-pop-org="${it(G.id)}">
                ${B(G)}
                <span class="pacom-pop-text">
                  <b>${it(G.name)}</b>
                  <small>${G.projectCount>0?`${G.projectCount} 个项目`:"暂无项目"}</small>
                </span>
                ${g?ce("check",16,"pacom-pop-check"):""}
              </button>`}).join("")}
        ${D?f?`
                <form data-create-org-form="1" style="padding:6px 8px; display:flex; gap:6px; align-items:center;">
                  <input class="pacom-input" name="orgName" placeholder="输入机构名称" style="height:30px; font-size:13px; flex:1; min-width:0;" required />
                  <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建</button>
                </form>`:`
                <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="toggle-new-org">
                  <span class="pacom-pop-icon" aria-hidden="true">${ce("plus",16)}</span>
                  <span class="pacom-pop-text">新建机构</span>
                </button>`:""}

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${ce("settings",16)}</span>
          <span class="pacom-pop-text">机构与权限</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${it(h)}</span>
          <span class="pacom-pop-text">
            <b>${it(o.displayName)}</b>
            <small>${it(o.roleLabel)}</small>
          </span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${ce("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function te(h){switch(C(l)||(l="home",window.location.hash="#home"),document.title=`${za[l]} ｜ PACOM Station`,l){case"home":await ks(h,e,o);return;case"analysis":await Es(h,e,o);return;case"alarms":await Rs(h,e,o);return;case"scenes":await cn(h,e,o);return;case"settings":await dn(h,e,o);return;case"deployment":await nn(h,e,o);return;case"account":await Cs(h,e,o,D=>{o=D,J(),be()},H);return}}async function H(){v=!1,E=!1,_=!1,j();try{await e.logout()}finally{window.location.hash="#login",n()}}function J(){const h=t.querySelector('[data-role="nav-list"]');h&&(h.innerHTML=pe(),Ne())}function be(){t.querySelector('[data-role="org-popover"]')?.remove();const h=t.querySelector('[data-role="org-menu-btn"]');if(h&&h.setAttribute("aria-expanded",String(v)),!v)return;const D=document.createElement("div");D.innerHTML=ve().trim();const G=D.firstElementChild;G&&(t.appendChild(G),ke())}function Ne(){t.querySelectorAll("[data-route]").forEach(h=>{h.addEventListener("click",()=>{const D=h.dataset.route;D===l&&!E||(l=D,E=!1,v=!1,window.location.hash=`#${l}`,Ie(!0))})})}async function $e(h){if(!e.switchOrganization)return;await e.switchOrganization(h),await V();const D=await e.getSpatialTree(),G=D.projects[0],g=G?D.buildings.find(Q=>Q.projectId===G.id):void 0,P=g?D.floors.find(Q=>Q.buildingId===g.id&&Q.id===F.floorId)??D.floors.find(Q=>Q.buildingId===g.id):void 0;G&&g&&P?jt({level:"floor",projectId:G.id,buildingId:g.id,floorId:P.id}):G&&g?jt({level:"building",projectId:G.id,buildingId:g.id}):G?jt({level:"project",projectId:G.id}):jt({level:"all-projects"}),v=!1,f=!1,E=!1,await Ie(!0),K()}function ke(){t.querySelectorAll("[data-pop-org]").forEach(h=>{h.addEventListener("click",()=>{const D=h.dataset.popOrg;if(D){if(D===I){v=!1,be();return}$e(D)}})}),t.querySelector('[data-pop-act="toggle-new-org"]')?.addEventListener("click",h=>{h.stopPropagation(),f=!f,be(),f&&t.querySelector('[data-create-org-form] input[name="orgName"]')?.focus()}),t.querySelector("[data-create-org-form]")?.addEventListener("submit",async h=>{if(h.preventDefault(),!e.createOrganization)return;const D=new FormData(h.currentTarget),G=String(D.get("orgName")??"").trim();if(!G)return;const g=await e.createOrganization(G);await $e(g.id)}),t.querySelectorAll('[data-pop-act="go-account"]').forEach(h=>{h.addEventListener("click",()=>{v=!1,f=!1,E=!1,l="account",window.location.hash="#account",Ie(!0)})}),t.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{H()})}async function Ie(h){const D=t.querySelector('[data-role="main-stage"]');if(!h&&D){const g=t.querySelector(".pacom-nav-rail");g&&(g.classList.toggle("is-collapsed",c),g.classList.toggle("is-mobile-open",E));const P=t.querySelector('[data-role="mobile-scrim"]');P&&P.classList.toggle("is-open",E),be();return}t.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${ce("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${za[l]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${it(o.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${E?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${c?"is-collapsed":""} ${E?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${pn}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${c?"展开侧栏":"收起侧栏"}" aria-label="${c?"展开侧栏":"收起侧栏"}">
              ${ce("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${ce("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${pe()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${l==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${v}" title="${it(A().name)} ｜ ${it(o.displayName)}">
              ${B(A())}
              <span class="pacom-org-name">${it(A().name)}</span>
              ${ce("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,t.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{c=!c,v=!1,localStorage.setItem(is,c?"1":"0");const g=t.querySelector(".pacom-nav-rail"),P=t.querySelector('[data-role="toggle-sidebar"]');g&&g.classList.toggle("is-collapsed",c),P&&(P.title=c?"展开侧栏":"收起侧栏",P.setAttribute("aria-label",P.title),P.innerHTML=ce("panel-left",16)),be()}),t.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{v=!1,be(),_=!0,ie()}),t.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{E=!E,Ie(!1)}),t.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{E=!1,v=!1,Ie(!1)}),t.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",g=>{g.stopPropagation(),v=!v,be()}),Ne(),be(),ie();const G=t.querySelector('[data-role="main-stage"]');G&&await te(G)}const O=h=>{const D=h.target;v&&!D?.closest('[data-role="org-popover"]')&&!D?.closest('[data-role="org-menu-btn"]')&&(v=!1,be())},U=h=>{if((h.metaKey||h.ctrlKey)&&h.key.toLowerCase()==="k"){h.preventDefault(),v=!1,be(),_=!_,ie();return}h.key==="Escape"&&(_?(_=!1,ie()):v?(v=!1,be()):E&&(E=!1,Ie(!1)))},ae=()=>{l=Ca(),v=!1,E=!1,_=!1,Ie(!0),K()};function j(){document.removeEventListener("click",O),document.removeEventListener("keydown",U),window.removeEventListener("hashchange",ae),na.get(t)===j&&na.delete(t)}na.set(t,j),document.addEventListener("click",O),document.addEventListener("keydown",U),window.addEventListener("hashchange",ae),await Ie(!0),K()}const Lt=["password","sms"];function Fa(t){const e=Is(t);return e==="cn"||e==="phone"}const oa=new WeakMap;function cs(t){oa.get(t)?.()}function vn(t,e,a,n){oa.get(t)?.(),t.classList.add("bare-login"),document.title="登录 ｜ PACOM Station";let o=!1,l=!1,c=(n?.prefillAccount??"").trim(),E="",v=Fa(c)?c:"",f="",y=!1,I=(n?.notice??"").trim(),S={},_="",p=!1,d="",C=0,A=null,B=0,V=null,K=1,pe="",re="",de="",ie="",ve=!1,te=!1,H={},J="",be=0,Ne=null,$e=0,ke=null,Ie=null,O=null,U=null,ae=!1;const j=us();function h(u){if(u.key==="Escape"){if(j.isOpen()){u.preventDefault(),j.close(!0);return}V&&(u.preventDefault(),Fe())}}function D(u){const T=t.querySelector('[data-role="mode-seg"]'),le=T?.querySelector(".au-mode-indicator"),ye=T?.querySelector('.au-mode-tab[aria-selected="true"]');!le||!ye||(le.style.transition=u?"":"none",le.style.transform=`translateX(${ye.offsetLeft}px)`,le.style.width=`${ye.offsetWidth}px`,u||(le.offsetWidth,le.style.transition=""))}function G(){D(!1)}function g(){C=0,A!==null&&(window.clearInterval(A),A=null)}function P(){be=0,Ne!==null&&(window.clearInterval(Ne),Ne=null)}function Q(){Ie?.(),Ie=null,O?.(),O=null}function je(){ae=!0,U?.(),U=null,Q(),j.destroy(),g(),P(),document.removeEventListener("keydown",h),window.removeEventListener("resize",G),t.classList.remove("bare-login"),oa.get(t)===je&&oa.delete(t)}document.addEventListener("keydown",h),window.addEventListener("resize",G),oa.set(t,je);function Ye(u=60){g(),C=u,A=window.setInterval(()=>{C-=1,C<=0&&g();const T=t.querySelector('[data-act="send-sms"]');T&&(T.disabled=C>0,T.textContent=C>0?`${C} 秒后重发`:d?"重新获取":"获取验证码")},1e3)}function Me(u=60){P(),be=u,Ne=window.setInterval(()=>{be-=1,be<=0&&P();const T=t.querySelector('[data-act="reset-resend"]');T&&(T.disabled=be>0||te,T.textContent=be>0?`${be} 秒后重发`:"重新获取")},1e3)}function Ae(u){I=u.trim();const T=t.querySelector('[data-role="login-notice"]');if(!I){T?.remove();return}if(T){const ye=T.querySelector("span");ye&&(ye.textContent=I);return}const le=t.querySelector(".au-h1");le&&le.insertAdjacentHTML("afterend",`<div class="au-notice-soft au-login-notice" data-role="login-notice" role="status">${ya}<span>${s(I)}</span></div>`)}function W(){const u=t.querySelector("#au-login-ferr");if(u)if(_){u.hidden=!1;const T=u.querySelector('[data-role="ferr-text"]');T&&(T.textContent=_)}else u.hidden=!0}function x(u){const T=t.querySelector(`.au-field[data-f="${u}"]`),le=t.querySelector(`#au-${u}`),ye=t.querySelector(`#au-${u}-err`),qe=S[u]??"";T?.classList.toggle("bad",!!qe),le?.setAttribute("aria-invalid",qe?"true":"false"),ye&&(ye.textContent=qe)}function L(u,T){const le=u.querySelector(`.au-field[data-f="${T}"]`),ye=u.querySelector(`#au-${T}`),qe=u.querySelector(`#au-${T}-err`),Pe=H[T]??"";le?.classList.toggle("bad",!!Pe),ye?.setAttribute("aria-invalid",Pe?"true":"false"),qe&&(qe.textContent=Pe)}function Y(u){const T=u.querySelector("#au-rs-ferr");if(T)if(J){T.hidden=!1;const le=T.querySelector('[data-role="rs-ferr-text"]');le&&(le.textContent=J)}else T.hidden=!0}function oe(){const u=t.querySelector('form[data-form="login"] fieldset'),T=t.querySelector('form[data-form="login"] button[type="submit"]');u&&(u.disabled=p),T&&(T.disabled=p,T.innerHTML=p?'<span class="au-spinner" aria-hidden="true"></span><span>正在登录…</span>':"<span>登录</span>")}function ge(u,T){j.close(!1),ke=T??(document.activeElement instanceof HTMLElement?document.activeElement:null),V=u,Ce(),u==="reset"?t.querySelector(K===1?"#au-rs_id":"#au-rs_code")?.focus():t.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function Fe(u=!0){if(!V)return;j.close(!1),V=null,$e+=1,te=!1,P(),Q(),Ce();const T=ke;ke=null,u&&T&&document.contains(T)&&T.focus({preventScroll:!0})}function lt(u){const T=u?"au-account-scrim is-no-anim":"au-account-scrim";if(K===1){const ye=pe.trim().length>0&&!te;return`
        <div class="${T}" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${wa}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码。</p>
              <form id="au-reset-form" novalidate>
                <fieldset ${te?"disabled":""}>
                  <div class="au-field ${H.rs_id?"bad":""}" data-f="rs_id">
                    <div class="au-lab"><label for="au-rs_id">电子邮箱或手机号码</label></div>
                    <div class="au-ctl">
                      <input id="au-rs_id" name="rs_id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(pe)}" aria-invalid="${H.rs_id?"true":"false"}" />
                    </div>
                    <p class="au-err" id="au-rs_id-err" aria-live="polite">${s(H.rs_id??"")}</p>
                  </div>
                  <div class="au-ferr" id="au-rs-ferr" role="alert" ${J?"":"hidden"}>
                    ${qt}
                    <span data-role="rs-ferr-text">${s(J)}</span>
                  </div>
                </fieldset>
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary" data-role="reset-submit" ${ye?"":"disabled"}>
                ${te?'<span class="au-spinner" aria-hidden="true"></span><span>发送中…</span>':"<span>发送验证码</span>"}
              </button>
            </div>
          </section>
        </div>
      `}return`
      <div class="${T}" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">重置密码</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${wa}</button>
          </div>
          <div class="db">
            <div class="au-notice-soft au-reset-step-notice" role="status" aria-live="polite">
              <span class="au-notice-main">${ya}<span>如该账户已注册，验证码已发送至 ${s(re)}</span></span>
              <button type="button" class="au-notice-action" data-act="reset-back-step1" ${te?"disabled":""}>更换账户</button>
            </div>
            <form id="au-reset-confirm-form" novalidate>
              <fieldset ${te?"disabled":""}>
                <div class="au-field ${H.rs_code?"bad":""}" data-f="rs_code">
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
                    <input id="au-rs_code" name="rs_code" class="au-in has-code-btn" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(de)}" aria-invalid="${H.rs_code?"true":"false"}" />
                    <button type="button" class="au-suffix au-getcode" data-act="reset-resend" ${be>0||te?"disabled":""}>
                      ${be>0?`${be} 秒后重发`:"重新获取"}
                    </button>
                  </div>
                  <p class="au-err" id="au-rs_code-err" aria-live="polite">${s(H.rs_code??"")}</p>
                </div>

                <div class="au-field ${H.rs_pwd?"bad":""}" data-f="rs_pwd">
                  <div class="au-lab">
                    <span class="au-lab-group">
                      <label for="au-rs_pwd">设置新密码</label>
                      ${Jt("au-rs-pwd-info","设置新密码说明",Ta)}
                    </span>
                  </div>
                  <div class="au-ctl">
                    <input id="au-rs_pwd" name="rs_pwd" class="au-in has-suffix" type="${ve?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(ie)}" aria-invalid="${H.rs_pwd?"true":"false"}" />
                    <button type="button" class="au-suffix au-eye" data-act="reset-toggle-eye" aria-controls="au-rs_pwd" aria-label="${ve?"隐藏密码":"显示密码"}">
                      ${ve?Rt:Ot}
                    </button>
                  </div>
                  <p class="au-err" id="au-rs_pwd-err" aria-live="polite">${s(H.rs_pwd??"")}</p>
                </div>

                <div class="au-ferr" id="au-rs-ferr" role="alert" ${J?"":"hidden"}>
                  ${qt}
                  <span data-role="rs-ferr-text">${s(J)}</span>
                </div>
              </fieldset>
            </form>
          </div>
          <div class="df">
            <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
            <button type="submit" form="au-reset-confirm-form" class="au-dlg-btn au-dlg-btn--primary" data-role="reset-confirm" ${te?"disabled":""}>
              ${te?'<span class="au-spinner" aria-hidden="true"></span><span>正在重置…</span>':"<span>确认重置</span>"}
            </button>
          </div>
        </section>
      </div>
    `}function Ue(u){return V?V==="reset"?lt(u):V==="contact"?hs():"":""}function Ce(){const u=t.querySelector('[data-role="modal-host"]');if(!u)return;const T=u.childElementCount>0;if(Q(),j.close(!1),u.innerHTML=Ue(T),!V)return;j.bind(u),Ie=fs(u.querySelector(".au-account-dlg")),O=bs(u),u.querySelectorAll('[data-act="close-modal"]').forEach(Be=>{Be.addEventListener("click",()=>Fe())}),u.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",Be=>{Be.target===Be.currentTarget&&Fe()});const le=u.querySelector("#au-rs_id"),ye=u.querySelector('[data-role="reset-submit"]');le?.addEventListener("input",()=>{pe=le.value,ye&&(ye.disabled=pe.trim().length===0||te),(H.rs_id||J)&&(delete H.rs_id,J="",L(u,"rs_id"),Y(u))}),u.querySelector("#au-reset-form")?.addEventListener("submit",async Be=>{if(Be.preventDefault(),te)return;H={},J="";const De=st(le?.value??pe);pe=De;const Ee=$a(De);if(Ee){H.rs_id=Ee,L(u,"rs_id"),le?.focus({preventScroll:!0});return}const Te=++$e;te=!0,Ce();try{const rt=await e.sendVerificationCode({target:De,purpose:"reset"});if(ae||V!=="reset"||Te!==$e)return;te=!1,re=rt.maskedTarget||Tt(De),de="",ie="",H={},J="",K=2,Me(rt.cooldownSeconds||60),Ce(),t.querySelector("#au-rs_code")?.focus({preventScroll:!0})}catch(rt){if(ae||V!=="reset"||Te!==$e)return;te=!1,J=rt instanceof Error?rt.message:"暂时无法发送验证码，请稍后再试。",Ce(),t.querySelector("#au-rs_id")?.focus({preventScroll:!0})}}),u.querySelector('[data-act="reset-back-step1"]')?.addEventListener("click",()=>{te||($e+=1,P(),K=1,de="",ie="",H={},J="",Ce(),t.querySelector("#au-rs_id")?.focus({preventScroll:!0}))});const qe=u.querySelector("#au-rs_code"),Pe=u.querySelector("#au-rs_pwd");qe?.addEventListener("input",()=>{de=qe.value.replace(/\D/g,"").slice(0,6),qe.value=de,(H.rs_code||J)&&(delete H.rs_code,J="",L(u,"rs_code"),Y(u))}),Pe?.addEventListener("input",()=>{ie=Pe.value,(H.rs_pwd||J)&&(delete H.rs_pwd,J="",L(u,"rs_pwd"),Y(u))}),u.querySelector('[data-act="reset-toggle-eye"]')?.addEventListener("click",Be=>{ve=!ve;const De=Be.currentTarget;if(Pe){const Ee=Pe.selectionStart,Te=Pe.selectionEnd;Pe.type=ve?"text":"password",Pe.focus({preventScroll:!0}),Ee!==null&&Te!==null&&Pe.setSelectionRange(Ee,Te)}De.setAttribute("aria-label",ve?"隐藏密码":"显示密码"),De.innerHTML=ve?Rt:Ot}),u.querySelector('[data-act="reset-resend"]')?.addEventListener("click",async()=>{if(be>0||te)return;const Be=st(pe),De=++$e,Ee=u.querySelector('[data-act="reset-resend"]');Ee&&(Ee.disabled=!0,Ee.textContent="发送中…"),J="",Y(u);try{const Te=await e.sendVerificationCode({target:Be,purpose:"reset"});if(ae||V!=="reset"||K!==2||De!==$e)return;re=Te.maskedTarget||Tt(Be),Me(Te.cooldownSeconds||60),Ee&&(Ee.disabled=!0,Ee.textContent=`${be} 秒后重发`),qe?.focus({preventScroll:!0})}catch(Te){if(ae||V!=="reset"||K!==2||De!==$e)return;Ee&&(Ee.disabled=!1,Ee.textContent="重新获取"),J=Te instanceof Error?Te.message:"暂时无法发送验证码，请稍后再试。",Y(u)}}),u.querySelector("#au-reset-confirm-form")?.addEventListener("submit",async Be=>{if(Be.preventDefault(),te)return;H={},J="",/^\d{6}$/.test(de.trim())||(H.rs_code="请输入 6 位验证码");const De=qa(ie);if(De&&(H.rs_pwd=De),L(u,"rs_code"),L(u,"rs_pwd"),Y(u),Object.keys(H).length>0){const Te=Object.keys(H)[0];u.querySelector(`#au-${Te}`)?.focus({preventScroll:!0});return}const Ee=st(pe);te=!0,Ce();try{if(await e.confirmPasswordReset({account:Ee,verificationCode:de.trim(),newPassword:ie}),ae)return;Fe(!1),c=Ee,E="",Fa(Ee)&&(v=Ee),_="",S={},o?et("password",!1):(bt(),W()),Ae("密码已重置，请使用新密码登录"),t.querySelector("#au-pwd")?.focus({preventScroll:!0})}catch(Te){if(ae||V!=="reset")return;te=!1,J=Te instanceof Error?Te.message:"验证码不正确或已过期，请检查后重试。",Ce(),t.querySelector("#au-rs_code")?.focus({preventScroll:!0})}})}function bt(){j.close(!1);const u=`
      <span data-role="login-novcode-wrap" ${d?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-login-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-login-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-login-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `,T=o?`
        <div class="au-field ${S.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(v)}" aria-invalid="${S.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${C>0?"disabled":""}>
              ${C>0?`${C} 秒后重发`:d?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${s(S.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${d?`验证码已发送至 ${s(d)}`:""}</p>
        </div>
      `:`
        <div class="au-field ${S.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(c)}" aria-invalid="${S.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${s(S.id??"")}</p>
        </div>
      `,le=o?`
        <div class="au-field ${S.scode?"bad":""}" data-f="scode">
          <div class="au-lab">
            <label for="au-scode">短信验证码</label>
            ${u}
          </div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(f)}" aria-invalid="${S.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${s(S.scode??"")}</p>
        </div>
      `:`
        <div class="au-field ${S.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab">
            <label for="au-pwd">密码</label>
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${l?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(E)}" aria-invalid="${S.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${l?"隐藏密码":"显示密码"}">
              ${l?Rt:Ot}
            </button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${s(S.pwd??"")}</p>
        </div>
      `,ye=t.querySelector('[data-role="fields-host"]');ye&&(ye.innerHTML=`${T}${le}`,vt(ye))}function et(u,T=!1){const le=u==="sms";o===le||p||(le&&!v.trim()&&Fa(c)?v=c.trim():!le&&!c.trim()&&v.trim()&&(c=v.trim()),o=le,S={},_="",t.querySelectorAll('[data-act="switch-mode"]').forEach(ye=>{const qe=ye.dataset.mode===u;ye.setAttribute("aria-selected",String(qe)),ye.tabIndex=qe?0:-1,qe&&T&&ye.focus({preventScroll:!0})}),D(!0),bt(),W(),T||(o?d?t.querySelector("#au-scode")?.focus({preventScroll:!0}):v.trim()?t.querySelector('[data-act="send-sms"]')?.focus({preventScroll:!0}):t.querySelector("#au-sphone")?.focus({preventScroll:!0}):t.querySelector(c.trim()?"#au-pwd":"#au-id")?.focus({preventScroll:!0})))}function vt(u){j.bind(u);const T=u.querySelector("#au-id"),le=u.querySelector("#au-pwd"),ye=u.querySelector("#au-sphone"),qe=u.querySelector("#au-scode");T?.addEventListener("input",()=>{c=T.value,(S.id||_)&&(delete S.id,_="",x("id"),W())}),le?.addEventListener("input",()=>{E=le.value,(S.pwd||_)&&(delete S.pwd,_="",x("pwd"),W())}),ye?.addEventListener("input",()=>{if(v=ye.value,B+=1,d||C>0){d="",g();const Pe=u.querySelector("#au-sphone-hint");Pe&&(Pe.textContent="");const Be=u.querySelector('[data-role="login-novcode-wrap"]');Be&&(Be.hidden=!0),j.close(!1);const De=u.querySelector('[data-act="send-sms"]');De&&(De.disabled=!1,De.textContent="获取验证码")}(S.sphone||_)&&(delete S.sphone,_="",x("sphone"),W())}),qe?.addEventListener("input",()=>{f=qe.value.replace(/\D/g,"").slice(0,6),qe.value=f,(S.scode||_)&&(delete S.scode,_="",x("scode"),W())}),u.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",Pe=>{l=!l;const Be=Pe.currentTarget,De=u.querySelector("#au-pwd");if(De){const Ee=De.selectionStart,Te=De.selectionEnd;De.type=l?"text":"password",De.focus({preventScroll:!0}),Ee!==null&&Te!==null&&De.setSelectionRange(Ee,Te)}Be.setAttribute("aria-label",l?"隐藏密码":"显示密码"),Be.innerHTML=l?Rt:Ot}),u.querySelector('[data-act="send-sms"]')?.addEventListener("click",async()=>{const Pe=Ft(v);if(Pe){S={...S,sphone:Pe},x("sphone"),u.querySelector("#au-sphone")?.focus({preventScroll:!0});return}delete S.sphone,x("sphone");const Be=st(v),De=++B,Ee=u.querySelector('[data-act="send-sms"]');Ee&&(Ee.disabled=!0,Ee.textContent="发送中…");try{const Te=await e.sendVerificationCode({target:Be,purpose:"login"});if(ae||De!==B||st(v)!==Be)return;d=Te.maskedTarget||Tt(Be);const rt=u.querySelector("#au-sphone-hint");rt&&(rt.textContent=`验证码已发送至 ${d}`);const pt=u.querySelector('[data-role="login-novcode-wrap"]');pt&&(pt.hidden=!1),Ye(Te.cooldownSeconds||60),Ee&&(Ee.disabled=!0,Ee.textContent=`${C} 秒后重发`),u.querySelector("#au-scode")?.focus({preventScroll:!0})}catch(Te){if(ae||De!==B||st(v)!==Be)return;Ee&&(Ee.disabled=!1,Ee.textContent=d?"重新获取":"获取验证码"),_=Te instanceof Error?Te.message:"暂时无法发送验证码，请稍后再试。",W()}}),u.querySelector('[data-act="open-reset"]')?.addEventListener("click",Pe=>{K=1,pe=(o?v:c).trim(),re="",de="",ie="",ve=!1,te=!1,H={},J="",P(),ge("reset",Pe.currentTarget)})}t.innerHTML=`
    <div class="au au-split">
      <section class="au-left">
        <div class="au-center">
          <main class="au-group">
            <div class="au-logo">${ms}</div>
            <h1 class="au-h1">登录</h1>
            ${I?`<div class="au-notice-soft au-login-notice" data-role="login-notice" role="status">${ya}<span>${s(I)}</span></div>`:""}
            <div class="au-mode-seg" role="tablist" aria-label="登录方式" data-role="mode-seg">
              <span class="au-mode-indicator" aria-hidden="true"></span>
              <button type="button" role="tab" aria-selected="true" tabindex="0" class="au-mode-tab" data-act="switch-mode" data-mode="password">密码登录</button>
              <button type="button" role="tab" aria-selected="false" tabindex="-1" class="au-mode-tab" data-act="switch-mode" data-mode="sms">短信登录</button>
            </div>
            <form data-form="login" novalidate>
              <fieldset>
                <div data-role="fields-host"></div>
                <div class="au-ferr" id="au-login-ferr" role="alert" hidden>
                  ${qt}
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
        ${vs()}
      </section>
      <aside class="au-art" aria-hidden="true">
        <div class="au-art-frame">
          <img src="./media/auth-hero.jpg" alt="" />
        </div>
      </aside>
    </div>
    <div data-role="modal-host"></div>
  `,t.querySelector('input[name="keep"]')?.addEventListener("change",u=>{y=u.currentTarget.checked}),t.querySelector('form[data-form="login"]')?.addEventListener("submit",async u=>{if(u.preventDefault(),!p){if(S={},_="",o){const T=Ft(v);T&&(S.sphone=T),/^\d{6}$/.test(f.trim())||(S.scode="请输入 6 位验证码"),x("sphone"),x("scode")}else c.trim()||(S.id="请输入电子邮箱或手机号码"),E||(S.pwd="请输入密码"),x("id"),x("pwd");if(W(),Object.keys(S).length>0){const T=Object.keys(S)[0];t.querySelector(`#au-${T}`)?.focus({preventScroll:!0});return}p=!0,oe();try{const T=await e.login({method:o?"sms":"password",account:st(o?v:c),...o?{smsCode:f.trim()}:{password:E},rememberMe:y});if(ae)return;je(),a(T)}catch(T){if(ae)return;p=!1,_=T instanceof Error?T.message:o?"验证码不正确或已过期":"账户或密码不正确",oe(),W()}}}),t.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{n?.onOpenRegister?(je(),n.onOpenRegister()):window.location.hash="#register"}),t.querySelectorAll('[data-act="switch-mode"]').forEach(u=>{u.addEventListener("click",()=>{const T=u.dataset.mode;T&&et(T,!1)}),u.addEventListener("keydown",T=>{const le=o?"sms":"password",ye=Lt.indexOf(le);T.key==="ArrowRight"?(T.preventDefault(),et(Lt[(ye+1)%Lt.length],!0)):T.key==="ArrowLeft"?(T.preventDefault(),et(Lt[(ye-1+Lt.length)%Lt.length],!0)):T.key==="Home"?(T.preventDefault(),et(Lt[0],!0)):T.key==="End"&&(T.preventDefault(),et(Lt[Lt.length-1],!0))})}),t.querySelector('[data-act="open-contact"]')?.addEventListener("click",u=>{ge("contact",u.currentTarget)}),bt(),D(!1),U=gs(t),c.trim()&&t.querySelector("#au-pwd")?.focus({preventScroll:!0}),document.fonts?.ready.then(()=>{ae||D(!1)})}const Dt=["join","apply"],Pt=1e3,Yt=50,fa=60,ds=110,ia=new WeakMap;function ps(t){ia.get(t)?.()}function gn(t,e,a){ia.get(t)?.(),t.classList.add("bare-login");let n=!1,o=a.initialMode??"join",l=null,c=null,E=null,v=null,f=null,y=a.initialJoinReceipt??null,I=a.initialApplyReceipt??null,S="",_=!1,p=null;const d=(a.inviteToken??"").trim(),C=!!(a.isInviteRoute||d),A=a.currentSession??null;let B=!!(C&&d),V=null,K="",pe="",re="",de="",ie="",ve=0,te=null,H=0,J="",be=!1,Ne=!1,$e=Pa(a.prefillCode??""),ke="",Ie=!1,O=0,U="",ae="",j="",h="",D="",G=!1,g=!1,P="",Q=0,je=null,Ye=0,Me="",Ae="",W="",x="",L="",Y="",oe="",ge="",Fe="",lt=!1,Ue="",Ce=0,bt=null,et=0,vt=null,u={},T="",le=!1;const ye=us();function qe(k){if(k.key==="Escape"){if(ye.isOpen()){k.preventDefault(),ye.close(!0);return}l&&(k.preventDefault(),ht())}}function Pe(k){const z=t.querySelector('[data-role="reg-seg"]'),X=z?.querySelector(".au-mode-indicator"),ee=z?.querySelector('.au-mode-tab[aria-selected="true"]');!X||!ee||(X.style.transition=k?"":"none",X.style.transform=`translateX(${ee.offsetLeft}px)`,X.style.width=`${ee.offsetWidth}px`,k||(X.offsetWidth,X.style.transition=""))}function Be(){Pe(!1)}function De(){Q=0,je!==null&&(window.clearInterval(je),je=null)}function Ee(){Ce=0,bt!==null&&(window.clearInterval(bt),bt=null)}function Te(){ve=0,te!==null&&(window.clearInterval(te),te=null)}function rt(){v?.(),v=null,f?.(),f=null}function pt(){n=!0,p?.(),p=null,rt(),ye.destroy(),De(),Ee(),Te(),vt!==null&&(window.clearTimeout(vt),vt=null),document.removeEventListener("keydown",qe),window.removeEventListener("resize",Be),t.classList.remove("bare-login"),ia.get(t)===pt&&ia.delete(t)}document.addEventListener("keydown",qe),window.addEventListener("resize",Be),ia.set(t,pt);function Ht(k){De(),Q=k,je=window.setInterval(()=>{Q-=1,Q<=0&&De();const z=t.querySelector('[data-act="jn-send-code"]');z&&(z.disabled=Q>0,z.textContent=Q>0?`${Q} 秒后重发`:P?"重新获取":"获取验证码")},1e3)}function Gt(k){Ee(),Ce=k,bt=window.setInterval(()=>{Ce-=1,Ce<=0&&Ee();const z=t.querySelector('[data-act="ap-send-code"]');z&&(z.disabled=Ce>0,z.textContent=Ce>0?`${Ce} 秒后重发`:Ue?"重新获取":"获取验证码")},1e3)}function Ve(){const k=t.querySelector("#au-reg-ferr");if(k)if(T){k.hidden=!1;const z=k.querySelector('[data-role="ferr-text"]');z&&(z.textContent=T)}else k.hidden=!0}function Se(k){const z=t.querySelector(`.au-field[data-f="${k}"]`),X=t.querySelector(`#au-${k}`),ee=t.querySelector(`#au-${k}-err`),fe=u[k]??"";z?.classList.toggle("bad",!!fe),X?.setAttribute("aria-invalid",fe?"true":"false"),ee&&(ee.textContent=fe)}function gt(k,z){const X=t.querySelector("form[data-reg-form] fieldset"),ee=t.querySelector('form[data-reg-form] button[type="submit"]');X&&(X.disabled=le),ee&&(ee.disabled=le,ee.innerHTML=le?`<span class="au-spinner" aria-hidden="true"></span><span>${s(k)}</span>`:`<span>${s(z)}</span>`)}function wt(k,z){ye.close(!1),c=z??(document.activeElement instanceof HTMLElement?document.activeElement:null),l=k,St(),t.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function ht(){if(!l)return;l=null,E=null,rt(),St();const k=c;c=null,k&&document.contains(k)&&k.focus({preventScroll:!0})}function Wt(){return`
      <div class="au-account-scrim" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="alertdialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">请阅读并同意</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${wa}</button>
          </div>
          <div class="db">
            <p class="au-dlead" style="margin-bottom:0;">
              发送验证码前，请先阅读并同意 PACOM
              <a class="au-consent-link" href="${ua}" target="_blank" rel="noopener noreferrer">隐私政策</a>和<a class="au-consent-link" href="${ua}" target="_blank" rel="noopener noreferrer">使用条款</a>。
            </p>
          </div>
          <div class="df">
            <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
            <button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="consent-confirm">同意并发送</button>
          </div>
        </section>
      </div>
    `}function nt(){return`
      <div class="au-account-scrim" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="alertdialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">撤回加入申请</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${wa}</button>
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
    `}function St(){const k=t.querySelector('[data-role="modal-host"]');if(k){if(rt(),!l){k.innerHTML="";return}k.innerHTML=l==="contact"?hs():l==="withdraw_confirm"?nt():Wt(),v=fs(k.querySelector(".au-account-dlg")),f=bs(k),k.querySelectorAll('[data-act="close-modal"]').forEach(z=>{z.addEventListener("click",()=>ht())}),k.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",z=>{z.target===z.currentTarget&&ht()}),k.querySelector('[data-act="consent-confirm"]')?.addEventListener("click",()=>{const z=E;E=null,l=null,rt(),St(),z?.()}),k.querySelector('[data-act="withdraw-confirm"]')?.addEventListener("click",async()=>{if(!(!y||!e.withdrawJoinApplication||_)){l=null,rt(),St(),_=!0,T="",ft();try{if(await e.withdrawJoinApplication(y.requestId,y.withdrawToken),n)return;_=!1,y=null,h="",P="",Ye+=1,De(),S="申请已撤回，修改信息并重新验证后即可再次提交。",ft()}catch(z){if(n)return;_=!1,T=z instanceof Error?z.message:"暂时无法撤回申请，请稍后再试。",ft()}}})}}function kt(k,z,X,ee){return`
      <div class="au-field au-consent-field ${u[ee]?"bad":""}" data-f="${ee}">
        <div class="au-check au-consent-row">
          <input id="${k}" type="checkbox" name="${z}" ${X?"checked":""} aria-invalid="${u[ee]?"true":"false"}" />
          <span class="au-consent-text">
            <label class="au-consent-label" for="${k}">我已阅读并同意 PACOM </label><a class="au-consent-link" href="${ua}" target="_blank" rel="noopener noreferrer">隐私政策</a><label class="au-consent-label" for="${k}">和</label><a class="au-consent-link" href="${ua}" target="_blank" rel="noopener noreferrer">使用条款</a>
          </span>
        </div>
        <p class="au-err" id="au-${ee}-err" aria-live="polite">${s(u[ee]??"")}</p>
      </div>
    `}async function It(k){const z=k.replace(/\D/g,"");if(z.length!==9){ke="",Ie=!1,tt();return}const X=++O;Ie=!0,ke="",tt();try{const ee=await e.resolveInviteCode(z);if(n||X!==O)return;Ie=!1,ee.valid&&ee.organizationName?(ke=ee.organizationName,delete u.jn_code):(ke="",u.jn_code=ee.message??"邀请码不正确或已失效，请向机构管理员确认。"),Se("jn_code"),tt()}catch(ee){if(n||X!==O)return;Ie=!1,ke="",u.jn_code=ee instanceof Error?ee.message:"暂时无法核验邀请码，请稍后再试。",Se("jn_code"),tt()}}function tt(){const k=t.querySelector('[data-role="jn-code-match"]'),z=t.querySelector('[data-role="jn-nocode-wrap"]');k&&(ke?(k.hidden=!1,k.innerHTML=`${Va}<span>目标机构：${s(ke)}</span>`):(k.hidden=!0,k.innerHTML="")),z&&(z.hidden=!!ke)}function xt(){const k=`
      <span data-role="jn-nocode-wrap" ${ke?"hidden":""}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-nocode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-nocode-pop"><span>没有邀请码？</span></button>
        <span id="au-jn-nocode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="没有邀请码说明" hidden>
          <span class="ws-info-text">请向所在机构的管理员获取 9 位邀请码；如需为新企业开通，请切换上方「申请开通机构」。</span>
        </span>
      </span>
    `,z=`
      <span data-role="jn-novcode-wrap" ${P?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-jn-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认邮箱或手机号码无误，检查垃圾邮件或短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">填写机构 9 位邀请码，管理员批准后即可访问。</p>
      ${S?`<div class="au-notice-soft au-form-notice" data-role="jn-form-notice" role="status">${ya}<span>${s(S)}</span></div>`:""}
      <form class="au-reg-form" data-reg-form="join" novalidate>
        <fieldset ${le?"disabled":""}>
          <div class="au-field ${u.jn_code?"bad":""}" data-f="jn_code">
            <div class="au-lab">
              <label for="au-jn_code">机构邀请码</label>
              ${k}
            </div>
            <div class="au-ctl">
              <input id="au-jn_code" name="jn_code" class="au-in" type="text" inputmode="numeric" autocomplete="off" maxlength="11" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s($e)}" aria-invalid="${u.jn_code?"true":"false"}" />
            </div>
            <div class="au-code-match" data-role="jn-code-match" role="status" aria-live="polite" ${ke?"":"hidden"}>
              ${ke?`${Va}<span>目标机构：${s(ke)}</span>`:""}
            </div>
            <p class="au-err" id="au-jn_code-err" aria-live="polite">${s(u.jn_code??"")}</p>
          </div>

          <div class="au-field ${u.jn_name?"bad":""}" data-f="jn_name">
            <div class="au-lab"><label for="au-jn_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-jn_name" name="jn_name" class="au-in" type="text" autocomplete="name" value="${s(U)}" aria-invalid="${u.jn_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_name-err" aria-live="polite">${s(u.jn_name??"")}</p>
          </div>

          <div class="au-field ${u.jn_dept?"bad":""}" data-f="jn_dept">
            <div class="au-lab"><label for="au-jn_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-jn_dept" name="jn_dept" class="au-in" type="text" autocomplete="organization-title" value="${s(ae)}" aria-invalid="${u.jn_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_dept-err" aria-live="polite">${s(u.jn_dept??"")}</p>
          </div>

          <div class="au-field ${u.jn_account?"bad":""}" data-f="jn_account">
            <div class="au-lab"><label for="au-jn_account">电子邮箱或手机号码</label></div>
            <div class="au-ctl">
              <input id="au-jn_account" name="jn_account" class="au-in has-code-btn" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(j)}" aria-invalid="${u.jn_account?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="jn-send-code" ${Q>0?"disabled":""}>
                ${Q>0?`${Q} 秒后重发`:P?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-jn_account-err" aria-live="polite">${s(u.jn_account??"")}</p>
            <p class="au-hint" id="au-jn_account-hint" role="status" aria-live="polite">${P?`验证码已发送至 ${s(P)}`:""}</p>
          </div>

          <div class="au-field ${u.jn_vcode?"bad":""}" data-f="jn_vcode">
            <div class="au-lab">
              <label for="au-jn_vcode">验证码</label>
              ${z}
            </div>
            <div class="au-ctl">
              <input id="au-jn_vcode" name="jn_vcode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(h)}" aria-invalid="${u.jn_vcode?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_vcode-err" aria-live="polite">${s(u.jn_vcode??"")}</p>
          </div>

          <div class="au-field ${u.jn_pwd?"bad":""}" data-f="jn_pwd">
            <div class="au-lab">
              <span class="au-lab-group">
                <label for="au-jn_pwd">设置密码</label>
                ${Jt("au-jn-pwd-info","设置密码说明",Ta)}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-jn_pwd" name="jn_pwd" class="au-in has-suffix" type="${G?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(D)}" aria-invalid="${u.jn_pwd?"true":"false"}" />
              <button type="button" class="au-suffix au-eye" data-act="jn-toggle-eye" aria-controls="au-jn_pwd" aria-label="${G?"隐藏密码":"显示密码"}">
                ${G?Rt:Ot}
              </button>
            </div>
            <p class="au-err" id="au-jn_pwd-err" aria-live="polite">${s(u.jn_pwd??"")}</p>
          </div>

          ${kt("au-jn_consent","jn_consent",g,"jn_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${T?"":"hidden"}>
            ${qt}
            <span data-role="ferr-text">${s(T)}</span>
          </div>

          <button type="submit" class="au-primary" ${le?"disabled":""}>
            ${le?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>注册并申请加入</span>"}
          </button>
        </fieldset>
      </form>
    `}function ue(){const k=Ha(Ae),z=_t(Fe),X=z>=Pt*.8?`${z} / ${Pt}`:"",ee=`
      <span data-role="ap-novcode-wrap" ${Ue?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-ap-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-ap-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-ap-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">提交企业信息，经 PACOM 审核通过后开通机构。</p>
      <form class="au-reg-form" data-reg-form="apply" novalidate>
        <fieldset ${le?"disabled":""}>
          <div class="au-field ${u.ap_org?"bad":""}" data-f="ap_org">
            <div class="au-lab">
              <span class="au-lab-group">
                <label for="au-ap_org">机构名称</label>
                ${Jt("au-ap-org-info","机构名称说明",["请填写营业执照等登记证书上的完整名称。"])}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-ap_org" name="ap_org" class="au-in" type="text" autocomplete="organization" value="${s(Me)}" aria-invalid="${u.ap_org?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_org-err" aria-live="polite">${s(u.ap_org??"")}</p>
          </div>

          <div class="au-field ${u.ap_region?"bad":""}" data-f="ap_region">
            <div class="au-lab"><label for="au-ap_prov">所在地区</label></div>
            <div class="au-row-eq">
              <div class="au-select-wrap">
                <select id="au-ap_prov" name="ap_prov" class="au-select ${Ae?"":"is-placeholder"}" aria-label="省份" aria-invalid="${u.ap_region?"true":"false"}">
                  <option value="" ${Ae?"":"selected"}>省份</option>
                  ${As.map(([fe])=>`<option value="${s(fe)}" ${Ae===fe?"selected":""}>${s(fe)}</option>`).join("")}
                </select>
                ${Ga}
              </div>
              <div class="au-select-wrap">
                <select id="au-ap_city" name="ap_city" class="au-select ${W?"":"is-placeholder"}" aria-label="城市" ${Ae?"":"disabled"} aria-invalid="${u.ap_region?"true":"false"}">
                  <option value="" ${W?"":"selected"}>城市</option>
                  ${k.map(fe=>`<option value="${s(fe)}" ${W===fe?"selected":""}>${s(fe)}</option>`).join("")}
                </select>
                ${Ga}
              </div>
            </div>
            <p class="au-err" id="au-ap_region-err" aria-live="polite">${s(u.ap_region??"")}</p>
          </div>

          <div class="au-field ${u.ap_name?"bad":""}" data-f="ap_name">
            <div class="au-lab"><label for="au-ap_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-ap_name" name="ap_name" class="au-in" type="text" autocomplete="name" value="${s(x)}" aria-invalid="${u.ap_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_name-err" aria-live="polite">${s(u.ap_name??"")}</p>
          </div>

          <div class="au-field ${u.ap_dept?"bad":""}" data-f="ap_dept">
            <div class="au-lab"><label for="au-ap_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-ap_dept" name="ap_dept" class="au-in" type="text" autocomplete="organization-title" value="${s(L)}" aria-invalid="${u.ap_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_dept-err" aria-live="polite">${s(u.ap_dept??"")}</p>
          </div>

          <div class="au-field ${u.ap_email?"bad":""}" data-f="ap_email">
            <div class="au-lab">
              <span class="au-lab-group">
                <label for="au-ap_email">电子邮箱</label>
                ${Jt("au-ap-email-info","电子邮箱说明",["审核结果与机构开通链接将发送至此邮箱，请填写常用工作邮箱。"])}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-ap_email" name="ap_email" class="au-in" type="email" inputmode="email" autocomplete="email" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(Y)}" aria-invalid="${u.ap_email?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_email-err" aria-live="polite">${s(u.ap_email??"")}</p>
          </div>

          <div class="au-field ${u.ap_phone?"bad":""}" data-f="ap_phone">
            <div class="au-lab"><label for="au-ap_phone">手机号码</label></div>
            <div class="au-ctl">
              <input id="au-ap_phone" name="ap_phone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(oe)}" aria-invalid="${u.ap_phone?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="ap-send-code" ${Ce>0?"disabled":""}>
                ${Ce>0?`${Ce} 秒后重发`:Ue?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-ap_phone-err" aria-live="polite">${s(u.ap_phone??"")}</p>
            <p class="au-hint" id="au-ap_phone-hint" role="status" aria-live="polite">${Ue?`验证码已发送至 ${s(Ue)}`:""}</p>
          </div>

          <div class="au-field ${u.ap_sms?"bad":""}" data-f="ap_sms">
            <div class="au-lab">
              <label for="au-ap_sms">短信验证码</label>
              ${ee}
            </div>
            <div class="au-ctl">
              <input id="au-ap_sms" name="ap_sms" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(ge)}" aria-invalid="${u.ap_sms?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_sms-err" aria-live="polite">${s(u.ap_sms??"")}</p>
          </div>

          <div class="au-field ${u.ap_overview?"bad":""}" data-f="ap_overview">
            <div class="au-lab"><label for="au-ap_overview">项目概况<span class="fld-opt">选填</span></label></div>
            <div class="ws-textarea-shell au-note-shell">
              <textarea id="au-ap_overview" name="ap_overview" class="au-in au-ta au-ta-std" rows="3" aria-invalid="${u.ap_overview?"true":"false"}">${s(Fe)}</textarea>
              <button type="button" class="ws-resize" data-space-resize="au-ap_overview" aria-label="调整项目概况输入框高度；按上下方向键调整"></button>
            </div>
            <p class="au-err" id="au-ap_overview-err" aria-live="polite">${s(u.ap_overview??"")}</p>
            <p class="au-hint au-char-count" id="au-ap_overview-count" ${X?"":"hidden"}>${s(X)}</p>
          </div>

          ${kt("au-ap_consent","ap_consent",lt,"ap_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${T?"":"hidden"}>
            ${qt}
            <span data-role="ferr-text">${s(T)}</span>
          </div>

          <button type="submit" class="au-primary" ${le?"disabled":""}>
            ${le?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>提交开通申请</span>"}
          </button>
        </fieldset>
      </form>
    `}async function se(){const k=$a(j);if(k){u.jn_account=k,Se("jn_account"),t.querySelector("#au-jn_account")?.focus({preventScroll:!0});return}delete u.jn_account,Se("jn_account");const z=st(j),X=++Ye,ee=t.querySelector('[data-act="jn-send-code"]');ee&&(ee.disabled=!0,ee.textContent="发送中…");try{const fe=await e.sendVerificationCode({target:z,purpose:"register_join",consentAcceptedAt:new Date().toISOString()});if(n||X!==Ye||st(j)!==z)return;P=fe.maskedTarget||Tt(z);const We=t.querySelector("#au-jn_account-hint");We&&(We.textContent=`验证码已发送至 ${P}`);const He=t.querySelector('[data-role="jn-novcode-wrap"]');He&&(He.hidden=!1),Ht(fe.cooldownSeconds||60),ee&&(ee.disabled=!0,ee.textContent=`${Q} 秒后重发`),t.querySelector("#au-jn_vcode")?.focus({preventScroll:!0})}catch(fe){if(n||X!==Ye||st(j)!==z)return;ee&&(ee.disabled=!1,ee.textContent=P?"重新获取":"获取验证码"),T=fe instanceof Error?fe.message:"暂时无法发送验证码，请稍后再试。",Ve()}}async function ra(){const k=Ft(oe);if(k){u.ap_phone=k,Se("ap_phone"),t.querySelector("#au-ap_phone")?.focus({preventScroll:!0});return}delete u.ap_phone,Se("ap_phone");const z=st(oe),X=++et,ee=t.querySelector('[data-act="ap-send-code"]');ee&&(ee.disabled=!0,ee.textContent="发送中…");try{const fe=await e.sendVerificationCode({target:z,purpose:"org_apply",consentAcceptedAt:new Date().toISOString()});if(n||X!==et||st(oe)!==z)return;Ue=fe.maskedTarget||Tt(z);const We=t.querySelector("#au-ap_phone-hint");We&&(We.textContent=`验证码已发送至 ${Ue}`);const He=t.querySelector('[data-role="ap-novcode-wrap"]');He&&(He.hidden=!1),Gt(fe.cooldownSeconds||60),ee&&(ee.disabled=!0,ee.textContent=`${Ce} 秒后重发`),t.querySelector("#au-ap_sms")?.focus({preventScroll:!0})}catch(fe){if(n||X!==et||st(oe)!==z)return;ee&&(ee.disabled=!1,ee.textContent=Ue?"重新获取":"获取验证码"),T=fe instanceof Error?fe.message:"暂时无法发送验证码，请稍后再试。",Ve()}}function $t(k){ye.bind(k);const z=k.querySelector("#au-jn_code"),X=k.querySelector("#au-jn_name"),ee=k.querySelector("#au-jn_dept"),fe=k.querySelector("#au-jn_account"),We=k.querySelector("#au-jn_vcode"),He=k.querySelector("#au-jn_pwd"),ot=k.querySelector("#au-jn_consent");z?.addEventListener("input",()=>{$e=Pa(z.value),z.value=$e,(u.jn_code||T)&&(delete u.jn_code,T="",Se("jn_code"),Ve()),It($e)}),X?.addEventListener("input",()=>{U=X.value,(u.jn_name||T)&&(delete u.jn_name,T="",Se("jn_name"),Ve())}),ee?.addEventListener("input",()=>{ae=ee.value,u.jn_dept&&(delete u.jn_dept,Se("jn_dept"))}),fe?.addEventListener("input",()=>{if(j=fe.value,Ye+=1,P||Q>0){P="",De();const Ze=k.querySelector("#au-jn_account-hint");Ze&&(Ze.textContent="");const $=k.querySelector('[data-role="jn-novcode-wrap"]');$&&($.hidden=!0),ye.close(!1);const he=k.querySelector('[data-act="jn-send-code"]');he&&(he.disabled=!1,he.textContent="获取验证码")}(u.jn_account||T)&&(delete u.jn_account,T="",Se("jn_account"),Ve())}),We?.addEventListener("input",()=>{h=We.value.replace(/\D/g,"").slice(0,6),We.value=h,(u.jn_vcode||T)&&(delete u.jn_vcode,T="",Se("jn_vcode"),Ve())}),He?.addEventListener("input",()=>{D=He.value,(u.jn_pwd||T)&&(delete u.jn_pwd,T="",Se("jn_pwd"),Ve())}),ot?.addEventListener("change",()=>{g=ot.checked,g&&u.jn_consent&&(delete u.jn_consent,Se("jn_consent"))}),k.querySelector('[data-act="jn-toggle-eye"]')?.addEventListener("click",Ze=>{G=!G;const $=Ze.currentTarget;if(He){const he=He.selectionStart,xe=He.selectionEnd;He.type=G?"text":"password",He.focus({preventScroll:!0}),he!==null&&xe!==null&&He.setSelectionRange(he,xe)}$.setAttribute("aria-label",G?"隐藏密码":"显示密码"),$.innerHTML=G?Rt:Ot}),k.querySelector('[data-act="jn-send-code"]')?.addEventListener("click",Ze=>{const $=$a(j);if($){u.jn_account=$,Se("jn_account"),fe?.focus({preventScroll:!0});return}if(!g){E=()=>{g=!0,ot&&(ot.checked=!0),delete u.jn_consent,Se("jn_consent"),se()},wt("consent_ask",Ze.currentTarget);return}se()}),k.querySelector('form[data-reg-form="join"]')?.addEventListener("submit",async Ze=>{if(Ze.preventDefault(),le)return;u={},T="",S&&(S="",k.querySelector('[data-role="jn-form-notice"]')?.remove());const $=$e.replace(/\D/g,"");if($.length!==9)u.jn_code="请输入 9 位机构邀请码";else if(!ke){const w=++O;Ie=!0;try{const q=await e.resolveInviteCode($);if(n||w!==O)return;Ie=!1,q.valid&&q.organizationName?(ke=q.organizationName,tt()):u.jn_code=q.message??"邀请码不正确或已失效，请向机构管理员确认。"}catch(q){if(n||w!==O)return;Ie=!1,u.jn_code=q instanceof Error?q.message:"暂时无法核验邀请码，请稍后再试。"}}U.trim()?_t(U.trim())>Yt&&(u.jn_name=`姓名不超过 ${Yt} 个字`):u.jn_name="请输入姓名",_t(ae.trim())>fa&&(u.jn_dept=`部门 / 职务不超过 ${fa} 个字`);const he=$a(j);he&&(u.jn_account=he),/^\d{6}$/.test(h.trim())||(u.jn_vcode="请输入 6 位验证码");const xe=qa(D);xe&&(u.jn_pwd=xe),g||(u.jn_consent="请阅读并同意隐私政策和使用条款");for(const w of["jn_code","jn_name","jn_dept","jn_account","jn_vcode","jn_pwd","jn_consent"])Se(w);if(Ve(),Object.keys(u).length>0){const w=Object.keys(u)[0];k.querySelector(`#au-${w}`)?.focus({preventScroll:!0});return}le=!0,gt("正在提交…","注册并申请加入");try{if(y=await e.registerAndJoin({inviteCode:$,displayName:U.trim(),departmentTitle:ae.trim()||void 0,account:st(j),verificationCode:h.trim(),password:D,consentAcceptedAt:new Date().toISOString()}),n)return;le=!1,ft()}catch(w){if(n)return;le=!1,T=w instanceof Error?w.message:"暂时无法提交申请，请稍后再试。",gt("正在提交…","注册并申请加入"),Ve()}})}function ut(k){ye.bind(k),_s(k);const z=k.querySelector("#au-ap_org"),X=k.querySelector("#au-ap_prov"),ee=k.querySelector("#au-ap_city"),fe=k.querySelector("#au-ap_name"),We=k.querySelector("#au-ap_dept"),He=k.querySelector("#au-ap_email"),ot=k.querySelector("#au-ap_phone"),Ze=k.querySelector("#au-ap_sms"),$=k.querySelector("#au-ap_overview"),he=k.querySelector("#au-ap_overview-count"),xe=k.querySelector("#au-ap_consent");z?.addEventListener("input",()=>{Me=z.value,(u.ap_org||T)&&(delete u.ap_org,T="",Se("ap_org"),Ve())}),X?.addEventListener("change",()=>{Ae=X.value,X.classList.toggle("is-placeholder",!Ae);const w=Ha(Ae);W=w.length===1?w[0]:"",ee&&(ee.disabled=!Ae,ee.innerHTML=`<option value="" ${W?"":"selected"}>城市</option>`+w.map(q=>`<option value="${s(q)}" ${W===q?"selected":""}>${s(q)}</option>`).join(""),ee.classList.toggle("is-placeholder",!W)),Ae&&W&&u.ap_region&&(delete u.ap_region,Se("ap_region"))}),ee?.addEventListener("change",()=>{W=ee.value,ee.classList.toggle("is-placeholder",!W),Ae&&W&&u.ap_region&&(delete u.ap_region,Se("ap_region"))}),fe?.addEventListener("input",()=>{x=fe.value,(u.ap_name||T)&&(delete u.ap_name,T="",Se("ap_name"),Ve())}),We?.addEventListener("input",()=>{L=We.value,u.ap_dept&&(delete u.ap_dept,Se("ap_dept"))}),He?.addEventListener("input",()=>{Y=He.value,(u.ap_email||T)&&(delete u.ap_email,T="",Se("ap_email"),Ve())}),ot?.addEventListener("input",()=>{if(oe=ot.value,et+=1,Ue||Ce>0){Ue="",Ee();const w=k.querySelector("#au-ap_phone-hint");w&&(w.textContent="");const q=k.querySelector('[data-role="ap-novcode-wrap"]');q&&(q.hidden=!0),ye.close(!1);const Z=k.querySelector('[data-act="ap-send-code"]');Z&&(Z.disabled=!1,Z.textContent="获取验证码")}(u.ap_phone||T)&&(delete u.ap_phone,T="",Se("ap_phone"),Ve())}),Ze?.addEventListener("input",()=>{ge=Ze.value.replace(/\D/g,"").slice(0,6),Ze.value=ge,(u.ap_sms||T)&&(delete u.ap_sms,T="",Se("ap_sms"),Ve())}),$?.addEventListener("input",()=>{Fe=$.value;const w=_t(Fe);he&&(w>=Pt*.8?(he.textContent=`${w} / ${Pt}`,he.hidden=!1):he.hidden=!0),u.ap_overview&&w<=Pt&&(delete u.ap_overview,Se("ap_overview"))}),xe?.addEventListener("change",()=>{lt=xe.checked,lt&&u.ap_consent&&(delete u.ap_consent,Se("ap_consent"))}),k.querySelector('[data-act="ap-send-code"]')?.addEventListener("click",w=>{const q=Ft(oe);if(q){u.ap_phone=q,Se("ap_phone"),ot?.focus({preventScroll:!0});return}if(!lt){E=()=>{lt=!0,xe&&(xe.checked=!0),delete u.ap_consent,Se("ap_consent"),ra()},wt("consent_ask",w.currentTarget);return}ra()}),k.querySelector('form[data-reg-form="apply"]')?.addEventListener("submit",async w=>{if(w.preventDefault(),le)return;u={},T="",Me.trim()?_t(Me.trim())>ds&&(u.ap_org=`机构名称不超过 ${ds} 个字`):u.ap_org="请输入机构名称",(!Ae||!W)&&(u.ap_region="请选择所在地区"),x.trim()?_t(x.trim())>Yt&&(u.ap_name=`姓名不超过 ${Yt} 个字`):u.ap_name="请输入姓名",_t(L.trim())>fa&&(u.ap_dept=`部门 / 职务不超过 ${fa} 个字`),pa(Y)||(u.ap_email="请输入有效的电子邮箱");const q=Ft(oe);q&&(u.ap_phone=q),/^\d{6}$/.test(ge.trim())||(u.ap_sms="请输入 6 位短信验证码"),_t(Fe)>Pt&&(u.ap_overview=`项目概况不超过 ${Pt} 个字`),lt||(u.ap_consent="请阅读并同意隐私政策和使用条款");for(const Z of["ap_org","ap_region","ap_name","ap_dept","ap_email","ap_phone","ap_sms","ap_overview","ap_consent"])Se(Z);if(Ve(),Object.keys(u).length>0){const Z=Object.keys(u)[0],ne=Z==="ap_region"?Ae?"au-ap_city":"au-ap_prov":`au-${Z}`;k.querySelector(`#${ne}`)?.focus({preventScroll:!0});return}le=!0,gt("正在提交…","提交开通申请");try{if(I=await e.submitOrgApplication({organizationName:Me.trim(),province:Ae,city:W,contactName:x.trim(),departmentTitle:L.trim()||void 0,email:st(Y),phone:st(oe),smsCode:ge.trim(),projectOverview:Fe.trim()||void 0,consentAcceptedAt:new Date().toISOString()}),n)return;le=!1,ft()}catch(Z){if(n)return;le=!1,T=Z instanceof Error?Z.message:"暂时无法提交开通申请，请稍后再试。",gt("正在提交…","提交开通申请"),Ve()}})}function Zt(){ye.close(!1);const k=t.querySelector('[data-role="reg-body-host"]');k&&(o==="join"?(k.innerHTML=xt(),$t(k)):(k.innerHTML=ue(),ut(k)))}function me(k,z=!1){o===k||le||(o=k,u={},T="",S="",t.querySelectorAll('[data-act="switch-reg-tab"]').forEach(X=>{const ee=X.dataset.tab===k;X.setAttribute("aria-selected",String(ee)),X.tabIndex=ee?0:-1,ee&&z&&X.focus({preventScroll:!0})}),Pe(!0),Zt(),t.querySelector(".au-left")?.scrollTo({top:0}))}function ca(){if(I)return{title:"开通申请已提交 ｜ PACOM Station",bodyHtml:`
          <h1 class="au-h1">开通申请已提交</h1>
          <p class="au-lead">预计 1–2 个工作日完成审核，审核通过后将发送开通链接至你的邮箱。</p>
          <div class="au-summary-card">
            <div class="au-summary-row">
              <span class="au-summary-k">申请单号</span>
              <span class="au-summary-v au-summary-v-copy is-tabular">
                <span>${s(I.applicationId)}</span>
                <button type="button" class="au-summary-copy-btn" data-act="copy-receipt" data-copy-val="${s(I.applicationId)}" aria-label="复制申请单号" title="复制申请单号">${Aa}</button>
              </span>
            </div>
            <div class="au-summary-row"><span class="au-summary-k">申请机构</span><span class="au-summary-v">${s(I.organizationName)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">通知邮箱</span><span class="au-summary-v is-tabular">${s(I.maskedEmail)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">当前状态</span><span class="au-status-pill au-status-pill--pending">待审核</span></div>
          </div>
          <button type="button" class="au-secondary" data-act="back-login"><span>返回登录</span></button>
        `};const k=y;return{title:"加入申请已提交 ｜ PACOM Station",bodyHtml:`
        <h1 class="au-h1">加入申请已提交</h1>
        <p class="au-lead">已提交至<b>${s(k.organizationName)}</b>，管理员批准后将发送登录通知。</p>
        <div class="au-summary-card">
          <div class="au-summary-row">
            <span class="au-summary-k">申请单号</span>
            <span class="au-summary-v au-summary-v-copy is-tabular">
              <span>${s(k.requestId)}</span>
              <button type="button" class="au-summary-copy-btn" data-act="copy-receipt" data-copy-val="${s(k.requestId)}" aria-label="复制申请单号" title="复制申请单号">${Aa}</button>
            </span>
          </div>
          <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${s(k.organizationName)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">登录账户</span><span class="au-summary-v is-tabular">${s(k.maskedAccount)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">当前状态</span><span class="au-status-pill au-status-pill--pending">待管理员审批</span></div>
        </div>
        <div class="au-ferr" id="au-reg-ferr" role="alert" ${T?"":"hidden"}>
          ${qt}
          <span data-role="ferr-text">${s(T)}</span>
        </div>
        <button type="button" class="au-secondary" data-act="back-login"><span>返回登录</span></button>
        ${e.withdrawJoinApplication?`
          <div class="au-quiet-action">
            <button type="button" class="au-quiet-btn" data-act="ask-withdraw" ${_?"disabled":""}>${_?"正在撤回…":"撤回申请"}</button>
          </div>`:""}
      `}}function ea(k){Te(),ve=k,te=window.setInterval(()=>{ve-=1,ve<=0&&Te();const z=t.querySelector('[data-act="iv-send-sec"]');z&&(z.disabled=ve>0,z.textContent=ve>0?`${ve} 秒后重发`:ie?"重新获取":"获取验证码")},1e3)}function Mt(k){return k.requiredSecondaryChannel!==void 0?k.requiredSecondaryChannel:Qt(k.kind,k.role,k.targetChannel)}function At(k){return st(k).toLowerCase().replace(/[\s\-()]/g,"")}function ze(k,z){if(!k)return!1;const X=At(z.targetValue);if(!X)return!1;const ee=z.targetChannel==="email"?k.email:k.phone;return!!ee&&At(ee)===X}async function yt(k){const z=k==="phone"?Ft(re):pa(re)?"":"请输入有效的电子邮箱";if(z){u.iv_sec=z,Se("iv_sec"),t.querySelector("#au-iv_sec")?.focus({preventScroll:!0});return}delete u.iv_sec,Se("iv_sec");const X=st(re),ee=++H,fe=t.querySelector('[data-act="iv-send-sec"]');fe&&(fe.disabled=!0,fe.textContent="发送中…");try{const We=await e.sendVerificationCode({target:X,purpose:"bind",consentAcceptedAt:new Date().toISOString()});if(n||ee!==H||st(re)!==X)return;ie=We.maskedTarget||Tt(X);const He=t.querySelector("#au-iv_sec-hint");He&&(He.textContent=`验证码已发送至 ${ie}`);const ot=t.querySelector('[data-role="iv-novcode-wrap"]');ot&&(ot.hidden=!1),ea(We.cooldownSeconds||60),fe&&(fe.disabled=!0,fe.textContent=`${ve} 秒后重发`),t.querySelector("#au-iv_seccode")?.focus({preventScroll:!0})}catch(We){if(n||ee!==H||st(re)!==X)return;fe&&(fe.disabled=!1,fe.textContent=ie?"重新获取":"获取验证码"),T=We instanceof Error?We.message:"暂时无法发送验证码，请稍后再试。",Ve()}}function Xe(){if(B)return{title:"核验链接 ｜ PACOM Station",bodyHtml:`
          <div class="au-loading-state" role="status" aria-live="polite">
            <span class="au-spinner au-spinner--muted" aria-hidden="true"></span>
            <span>正在核验链接…</span>
          </div>
        `};if(V&&V.status==="accepted"){const he=V.kind==="owner",xe=he?"机构已完成开通":"邀请已被接受",w=A?`该${he?"开通":"邀请"}链接已完成激活，你可以直接进入工作区访问<b>${s(V.organizationName)}</b>。`:`该${he?"开通":"邀请"}链接已完成激活，你可以直接登录访问<b>${s(V.organizationName)}</b>。`;return{title:`${xe} ｜ PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${xe}</h1>
          <p class="au-lead">${w}</p>
          <button type="button" class="au-secondary" data-act="${A?"iv-back-ws":"back-login"}"><span>${A?"进入工作区":"前往登录"}</span></button>
        `}}if(K||!V||V.status!=="pending"){const he=V?.kind==="owner",xe=V?.organizationName?s(V.organizationName):"",w=V?.inviterName?s(V.inviterName):"机构管理员";let q="邀请链接已失效",Z="此链接无效或已过期，请联系邀请人或机构管理员重新发送。";return K?Z=s(K):V?.status==="expired"?(q=he?"开通链接已过期":"邀请链接已过期",Z=he?`开通${xe?`<b>${xe}</b>的`:""}链接已过期，请联系支持团队重新发送。`:`加入${xe?`<b>${xe}</b>的`:""}邀请链接已过期，请联系${w}重新发送。`):V?.status==="revoked"&&(q=he?"开通链接已撤销":"邀请已撤销",Z=he?`开通${xe?`<b>${xe}</b>的`:""}链接已被撤销，请联系支持团队重新发送。`:`加入${xe?`<b>${xe}</b>的`:""}邀请已被撤销，如需加入请联系${w}重新发送。`),{title:`${q} ｜ PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${q}</h1>
          <p class="au-lead">${Z}</p>
          <button type="button" class="au-secondary" data-act="${A?"iv-back-ws":"back-login"}"><span>${A?"返回工作区":"返回登录"}</span></button>
        `}}const k=V,z=k.kind==="owner",X=z?"开通机构":"加入机构",ee=k.targetChannel==="phone"?"受邀手机号码":"受邀电子邮箱",fe=k.targetChannel==="phone"?Na(k.targetValue):k.targetValue;if(A){if(ze(A,k)){const q=z?`<b>${s(k.organizationName)}</b>已审核通过，确认后即以机构管理员身份完成开通。<span class="au-lead-meta">有效期至 ${s(k.expiresAt)}</span>`:`${s(k.inviterName||"机构管理员")}邀请你以${s(k.roleLabel||"成员")}身份加入<b>${s(k.organizationName)}</b>。<span class="au-lead-meta">有效期至 ${s(k.expiresAt)}</span>`;return{title:`${X} ｜ PACOM Station`,bodyHtml:`
            <h1 class="au-h1">${X}</h1>
            <p class="au-lead">${q}</p>
            <div class="au-summary-card">
              <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${s(k.organizationName)}</span></div>
              <div class="au-summary-row"><span class="au-summary-k">授予角色</span><span class="au-summary-v">${s(k.roleLabel||(z?"机构管理员":"成员"))}</span></div>
              <div class="au-summary-row"><span class="au-summary-k">当前账户</span><span class="au-summary-v is-tabular">${s(A.displayName)} ｜ ${s(fe)}</span></div>
            </div>
            <div class="au-ferr" id="au-reg-ferr" role="alert" ${T?"":"hidden"}>
              ${qt}
              <span data-role="ferr-text">${s(T)}</span>
            </div>
            <button type="button" class="au-primary" data-act="iv-confirm-join" ${le?"disabled":""}>
              ${le?'<span class="au-spinner" aria-hidden="true"></span><span>正在处理…</span>':`<span>${z?"确认开通":"确认加入"}</span>`}
            </button>
            <div class="au-quiet-action">
              <button type="button" class="au-quiet-btn" data-act="iv-back-ws">返回工作区</button>
            </div>
          `}}const he=Tt(k.targetValue),xe=A.email||(A.phone?Na(A.phone):"");return{title:"请切换至受邀账户 ｜ PACOM Station",bodyHtml:`
          <h1 class="au-h1">请切换至受邀账户</h1>
          <p class="au-lead">${z?`该开通链接面向 <b>${s(he)}</b> 开通${s(k.organizationName)}，与当前登录账户不一致。`:`该邀请面向 <b>${s(he)}</b> 加入${s(k.organizationName)}，与当前登录账户不一致。`}</p>
          <div class="au-summary-card">
            <div class="au-summary-row"><span class="au-summary-k">当前账户</span><span class="au-summary-v is-tabular">${s(A.displayName)}${xe?` ｜ ${s(xe)}`:""}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">受邀账户</span><span class="au-summary-v is-tabular">${s(he)}</span></div>
          </div>
          <button type="button" class="au-primary" data-act="iv-switch-account"><span>切换账户登录</span></button>
          <div class="au-quiet-action">
            <button type="button" class="au-quiet-btn" data-act="iv-back-ws">返回工作区</button>
          </div>
        `}}if(k.accountExists){const he=z?`<b>${s(k.organizationName)}</b>已审核通过，请先登录已有账户完成开通。<span class="au-lead-meta">有效期至 ${s(k.expiresAt)}</span>`:`${s(k.inviterName||"机构管理员")}邀请你以${s(k.roleLabel||"成员")}身份加入<b>${s(k.organizationName)}</b>，请先登录已有账户完成确认。<span class="au-lead-meta">有效期至 ${s(k.expiresAt)}</span>`;return{title:`${X} ｜ PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${X}</h1>
          <p class="au-lead">${he}</p>
          <div class="au-summary-card">
            <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${s(k.organizationName)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">授予角色</span><span class="au-summary-v">${s(k.roleLabel||(z?"机构管理员":"成员"))}</span></div>
            <div class="au-summary-row">
              <span class="au-summary-k">受邀账户</span>
              <span class="au-summary-v au-summary-v-copy is-tabular">
                <span>${s(fe)}</span>
                <span class="au-status-pill au-status-pill--neutral">已注册</span>
              </span>
            </div>
          </div>
          <button type="button" class="au-primary" data-act="iv-go-login"><span>${z?"登录并开通":"登录并加入"}</span></button>
        `}}const We=z?`<b>${s(k.organizationName)}</b>已审核通过，设置密码后即以机构管理员身份开通。<span class="au-lead-meta">有效期至 ${s(k.expiresAt)}</span>`:`${s(k.inviterName||"机构管理员")}邀请你以${s(k.roleLabel||"成员")}身份加入<b>${s(k.organizationName)}</b>。<span class="au-lead-meta">有效期至 ${s(k.expiresAt)}</span>`,He=z?"完成开通":"注册并加入",ot=Mt(k),Ze=z?`
        <div class="au-field">
          <div class="au-lab">
            <span class="au-lab-t">管理员账户</span>
            <span class="au-lab-status">${Ua}<span>已核验</span></span>
          </div>
          <div class="au-verified-card">
            <div class="au-verified-row">
              <span class="au-verified-k">${k.targetChannel==="phone"?"手机号码":"电子邮箱"}</span>
              <span class="au-verified-v">${s(fe)}</span>
            </div>
            ${k.verifiedSecondaryMasked?`
              <div class="au-verified-row">
                <span class="au-verified-k">${k.targetChannel==="phone"?"电子邮箱":"手机号码"}</span>
                <span class="au-verified-v">${s(k.verifiedSecondaryMasked)}</span>
              </div>`:""}
          </div>
        </div>`:`
        <div class="au-field">
          <div class="au-lab">
            <span class="au-lab-t">${ee}</span>
            <span class="au-lab-status">${Ua}<span>已核验</span></span>
          </div>
          <div class="au-locked-card">
            <span class="au-locked-val">${s(fe)}</span>
          </div>
        </div>`,$=ot?(()=>{const he=ot==="phone",xe=he?"手机号码":"电子邮箱",w=he?"用于新设备登录、敏感操作与重置密码时的身份验证。":"机构管理员须绑定电子邮箱，用于接收订单、续费与安全通知。",q=he?"短信验证码":"邮件验证码",Z=he?"请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。":"请确认电子邮箱无误并检查垃圾邮件箱；如仍未收到，可点击页脚「联系我们」获取协助。";return`
            <div class="au-field ${u.iv_sec?"bad":""}" data-f="iv_sec">
              <div class="au-lab">
                <span class="au-lab-group">
                  <label for="au-iv_sec">${xe}</label>
                  ${Jt("au-iv-sec-info",`${xe}说明`,[w])}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_sec" name="iv_sec" class="au-in has-code-btn" type="${he?"tel":"email"}" inputmode="${he?"tel":"email"}" autocomplete="${he?"tel":"email"}" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(re)}" aria-invalid="${u.iv_sec?"true":"false"}" />
                <button type="button" class="au-suffix au-getcode" data-act="iv-send-sec" ${ve>0?"disabled":""}>
                  ${ve>0?`${ve} 秒后重发`:ie?"重新获取":"获取验证码"}
                </button>
              </div>
              <p class="au-err" id="au-iv_sec-err" aria-live="polite">${s(u.iv_sec??"")}</p>
              <p class="au-hint" id="au-iv_sec-hint" role="status" aria-live="polite">${ie?`验证码已发送至 ${s(ie)}`:""}</p>
            </div>

            <div class="au-field ${u.iv_seccode?"bad":""}" data-f="iv_seccode">
              <div class="au-lab">
                <label for="au-iv_seccode">${q}</label>
                <span data-role="iv-novcode-wrap" ${ie?"":"hidden"}>
                  <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-iv-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-iv-novcode-pop"><span>收不到验证码？</span></button>
                  <span id="au-iv-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
                    <span class="ws-info-text">${Z}</span>
                  </span>
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_seccode" name="iv_seccode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(de)}" aria-invalid="${u.iv_seccode?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_seccode-err" aria-live="polite">${s(u.iv_seccode??"")}</p>
            </div>
          `})():"";return{title:`${X} ｜ PACOM Station`,bodyHtml:`
        <h1 class="au-h1">${X}</h1>
        <p class="au-lead">${We}</p>
        <form class="au-reg-form" data-reg-form="invite" novalidate>
          <fieldset ${le?"disabled":""}>
            ${Ze}

            <div class="au-field ${u.iv_name?"bad":""}" data-f="iv_name">
              <div class="au-lab"><label for="au-iv_name">姓名</label></div>
              <div class="au-ctl">
                <input id="au-iv_name" name="iv_name" class="au-in" type="text" autocomplete="name" value="${s(pe)}" aria-invalid="${u.iv_name?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_name-err" aria-live="polite">${s(u.iv_name??"")}</p>
            </div>

            ${$}

            <div class="au-field ${u.iv_pwd?"bad":""}" data-f="iv_pwd">
              <div class="au-lab">
                <span class="au-lab-group">
                  <label for="au-iv_pwd">设置密码</label>
                  ${Jt("au-iv-pwd-info","设置密码说明",Ta)}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_pwd" name="iv_pwd" class="au-in has-suffix" type="${be?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(J)}" aria-invalid="${u.iv_pwd?"true":"false"}" />
                <button type="button" class="au-suffix au-eye" data-act="iv-toggle-eye" aria-controls="au-iv_pwd" aria-label="${be?"隐藏密码":"显示密码"}">
                  ${be?Rt:Ot}
                </button>
              </div>
              <p class="au-err" id="au-iv_pwd-err" aria-live="polite">${s(u.iv_pwd??"")}</p>
            </div>

            ${kt("au-iv_consent","iv_consent",Ne,"iv_consent")}

            <div class="au-ferr" id="au-reg-ferr" role="alert" ${T?"":"hidden"}>
              ${qt}
              <span data-role="ferr-text">${s(T)}</span>
            </div>

            <button type="submit" class="au-primary" ${le?"disabled":""}>
              ${le?`<span class="au-spinner" aria-hidden="true"></span><span>${z?"正在开通…":"正在提交…"}</span>`:`<span>${He}</span>`}
            </button>
          </fieldset>
        </form>
      `}}function da(){ye.bind(t),t.querySelector('[data-act="iv-back-ws"]')?.addEventListener("click",()=>{pt(),a.onBackToWorkspace?a.onBackToWorkspace():a.onBackToLogin()}),t.querySelector('[data-act="iv-go-login"]')?.addEventListener("click",()=>{if(!V)return;const $=`#invite?token=${encodeURIComponent(V.token)}`,he=V.kind==="owner"?`登录后即可开通${V.organizationName}`:`登录后即可加入${V.organizationName}`;pt(),a.onGoLoginForInvite?a.onGoLoginForInvite(V.targetValue,he,$):a.onBackToLogin()}),t.querySelector('[data-act="iv-switch-account"]')?.addEventListener("click",()=>{if(!V)return;const $=`#invite?token=${encodeURIComponent(V.token)}`,xe=`请使用 ${Tt(V.targetValue)} 登录以${V.kind==="owner"?"开通机构":"接受邀请"}`;pt(),a.onSwitchAccountForInvite?a.onSwitchAccountForInvite($,xe):a.onBackToLogin()}),t.querySelector('[data-act="iv-confirm-join"]')?.addEventListener("click",async()=>{if(!(le||!V)){le=!0,T="",ft();try{const $=await e.acceptInvitation({token:V.token});if(n)return;pt(),a.onAuthenticated($)}catch($){if(n)return;le=!1,T=$ instanceof Error?$.message:"暂时无法确认加入，请稍后再试。",ft()}}});const k=t.querySelector('form[data-reg-form="invite"]');if(!k||!V)return;const z=t.querySelector("#au-iv_name"),X=t.querySelector("#au-iv_sec"),ee=t.querySelector("#au-iv_seccode"),fe=t.querySelector("#au-iv_pwd"),We=t.querySelector("#au-iv_consent"),He=V.kind==="owner",ot=He?"完成开通":"注册并加入",Ze=Mt(V);z?.addEventListener("input",()=>{pe=z.value,(u.iv_name||T)&&(delete u.iv_name,T="",Se("iv_name"),Ve())}),X?.addEventListener("input",()=>{if(re=X.value,H+=1,ie||ve>0){ie="",Te();const $=t.querySelector("#au-iv_sec-hint");$&&($.textContent="");const he=t.querySelector('[data-role="iv-novcode-wrap"]');he&&(he.hidden=!0),ye.close(!1);const xe=t.querySelector('[data-act="iv-send-sec"]');xe&&(xe.disabled=!1,xe.textContent="获取验证码")}(u.iv_sec||T)&&(delete u.iv_sec,T="",Se("iv_sec"),Ve())}),ee?.addEventListener("input",()=>{de=ee.value.replace(/\D/g,"").slice(0,6),ee.value=de,(u.iv_seccode||T)&&(delete u.iv_seccode,T="",Se("iv_seccode"),Ve())}),fe?.addEventListener("input",()=>{J=fe.value,(u.iv_pwd||T)&&(delete u.iv_pwd,T="",Se("iv_pwd"),Ve())}),We?.addEventListener("change",()=>{Ne=We.checked,Ne&&u.iv_consent&&(delete u.iv_consent,Se("iv_consent"))}),t.querySelector('[data-act="iv-send-sec"]')?.addEventListener("click",$=>{if(!Ze)return;const he=Ze==="phone"?Ft(re):pa(re)?"":"请输入有效的电子邮箱";if(he){u.iv_sec=he,Se("iv_sec"),X?.focus({preventScroll:!0});return}if(!Ne){E=()=>{Ne=!0,We&&(We.checked=!0),delete u.iv_consent,Se("iv_consent"),yt(Ze)},wt("consent_ask",$.currentTarget);return}yt(Ze)}),t.querySelector('[data-act="iv-toggle-eye"]')?.addEventListener("click",$=>{be=!be;const he=$.currentTarget;if(fe){const xe=fe.selectionStart,w=fe.selectionEnd;fe.type=be?"text":"password",fe.focus({preventScroll:!0}),xe!==null&&w!==null&&fe.setSelectionRange(xe,w)}he.setAttribute("aria-label",be?"隐藏密码":"显示密码"),he.innerHTML=be?Rt:Ot}),k.addEventListener("submit",async $=>{if($.preventDefault(),le||!V)return;if(u={},T="",pe.trim()?_t(pe.trim())>Yt&&(u.iv_name=`姓名不超过 ${Yt} 个字`):u.iv_name="请输入姓名",Ze){const w=Ze==="phone"?Ft(re):pa(re)?"":"请输入有效的电子邮箱";w&&(u.iv_sec=w),/^\d{6}$/.test(de.trim())||(u.iv_seccode=Ze==="phone"?"请输入 6 位短信验证码":"请输入 6 位邮件验证码")}const he=qa(J);he&&(u.iv_pwd=he),Ne||(u.iv_consent="请阅读并同意隐私政策和使用条款");const xe=Ze?["iv_name","iv_sec","iv_seccode","iv_pwd","iv_consent"]:["iv_name","iv_pwd","iv_consent"];for(const w of xe)Se(w);if(Ve(),Object.keys(u).length>0){const w=Object.keys(u)[0];t.querySelector(`#au-${w}`)?.focus({preventScroll:!0});return}le=!0,gt(He?"正在开通…":"正在提交…",ot);try{const w=await e.acceptInvitation({token:V.token,displayName:pe.trim(),password:J,consentAcceptedAt:new Date().toISOString(),...Ze?{secondaryContact:st(re),secondaryVerificationCode:de.trim()}:{}});if(n)return;pt(),a.onAuthenticated(w)}catch(w){if(n)return;le=!1,T=w instanceof Error?w.message:"暂时无法完成激活，请稍后再试。",gt(He?"正在开通…":"正在提交…",ot),Ve()}})}function ft(){p?.(),p=null,ye.close(!1);let k="";if(y||I){const z=ca();document.title=z.title,k=z.bodyHtml}else if(C){const z=Xe();document.title=z.title,k=z.bodyHtml}else document.title="注册 ｜ PACOM Station",k=`
        <h1 class="au-h1">注册</h1>
        <div class="au-mode-seg" role="tablist" aria-label="注册方式" data-role="reg-seg">
          <span class="au-mode-indicator" aria-hidden="true"></span>
          <button type="button" role="tab" aria-selected="${o==="join"}" tabindex="${o==="join"?"0":"-1"}" class="au-mode-tab" data-act="switch-reg-tab" data-tab="join">加入已有机构</button>
          <button type="button" role="tab" aria-selected="${o==="apply"}" tabindex="${o==="apply"?"0":"-1"}" class="au-mode-tab" data-act="switch-reg-tab" data-tab="apply">申请开通机构</button>
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
              <div class="au-logo">${ms}</div>
              ${k}
            </main>
          </div>
          ${vs()}
        </section>
        <aside class="au-art" aria-hidden="true">
          <div class="au-art-frame">
            <img src="./media/auth-hero.jpg" alt="" />
          </div>
        </aside>
      </div>
      <div data-role="modal-host"></div>
    `,t.querySelectorAll('[data-act="back-login"]').forEach(z=>{z.addEventListener("click",()=>{pt(),a.onBackToLogin()})}),t.querySelectorAll('[data-act="open-contact"]').forEach(z=>{z.addEventListener("click",X=>{wt("contact",X.currentTarget)})}),t.querySelector('[data-act="ask-withdraw"]')?.addEventListener("click",z=>{!y||!e.withdrawJoinApplication||_||wt("withdraw_confirm",z.currentTarget)}),t.querySelectorAll('[data-act="copy-receipt"]').forEach(z=>{z.addEventListener("click",()=>{const X=z.dataset.copyVal??"";X&&(navigator.clipboard?.writeText&&navigator.clipboard.writeText(X).catch(()=>{}),z.classList.add("is-copied"),z.setAttribute("aria-label","已复制申请单号"),z.innerHTML=xs,vt!==null&&window.clearTimeout(vt),vt=window.setTimeout(()=>{vt=null,z.classList.remove("is-copied"),z.setAttribute("aria-label","复制申请单号"),z.innerHTML=Aa},1800))})}),!y&&!I&&!C?(t.querySelectorAll('[data-act="switch-reg-tab"]').forEach(z=>{z.addEventListener("click",()=>{const X=z.dataset.tab;X&&me(X,!1)}),z.addEventListener("keydown",X=>{const ee=Dt.indexOf(o);X.key==="ArrowRight"?(X.preventDefault(),me(Dt[(ee+1)%Dt.length],!0)):X.key==="ArrowLeft"?(X.preventDefault(),me(Dt[(ee-1+Dt.length)%Dt.length],!0)):X.key==="Home"?(X.preventDefault(),me(Dt[0],!0)):X.key==="End"&&(X.preventDefault(),me(Dt[Dt.length-1],!0))})}),Zt(),Pe(!1),document.fonts?.ready.then(()=>{n||Pe(!1)})):C&&!B&&da(),p=gs(t)}ft(),C&&d&&!y&&!I?(async()=>{try{const k=await e.getInvitationPreview(d);if(n)return;if(V=k,pe=k.prefillName??"",B=!1,ft(),!A&&k.status==="pending"&&!k.accountExists){const z=Mt(k),X=pe.trim()?z?"#au-iv_sec":"#au-iv_pwd":"#au-iv_name";t.querySelector(X)?.focus({preventScroll:!0})}}catch(k){if(n)return;B=!1,K=k instanceof Error?k.message:"暂时无法读取邀请信息，请稍后再试。",ft()}})():!C&&!y&&!I&&$e.replace(/\D/g,"").length===9&&(It($e),t.querySelector("#au-jn_name")?.focus({preventScroll:!0}))}function aa(t){const e=t.replace(/^#\/?/,"").split("?")[0]??"";return e==="login"||e==="register"||e==="join"||e==="apply"||e==="invite"}function ba(t){const e=t.replace(/^#\/?/,""),[a="",n=""]=e.split("?"),o=new URLSearchParams(n);if(a==="invite")return{kind:"invite",inviteToken:(o.get("token")??"").trim()};if(a==="register"||a==="join"||a==="apply"){const l=o.get("tab");return{kind:"register",initialMode:a==="apply"||l==="apply"?"apply":"join",prefillCode:o.get("code")??void 0}}return{kind:"login"}}const fn=["org_admin","project_admin","operator","space_user"],ha=[{key:"login",label:"登录",group:"auth",hash:"#login",sessionRole:null},{key:"reg-join",label:"加入已有机构",group:"auth",hash:"#register",sessionRole:null},{key:"status-join",label:"加入申请已提交",group:"auth",hash:"#register",sessionRole:null,joinReceipt:{requestId:"JR-20261127-8421",organizationName:"广州国家实验室",maskedAccount:"138 •••• 8000",status:"pending_approval",submittedAt:"2026-11-27T09:30:00Z",withdrawToken:"demo-preset-wt-8421"}},{key:"reg-apply",label:"申请开通机构",group:"auth",hash:"#apply",sessionRole:null},{key:"status-apply",label:"开通申请已提交",group:"auth",hash:"#apply",sessionRole:null,applyReceipt:{applicationId:"APP-20261127-3902",organizationName:"广州天环智能科技有限公司",region:"广东省 广州市",maskedEmail:"c•••@company.com",status:"pending_review",submittedAt:"2026-11-27T09:35:00Z"}},{key:"inv-member",label:"成员邀请 ｜ 新账户",group:"invite",hash:"#invite?token=member-demo",sessionRole:null},{key:"inv-admin-email",label:"机构管理员邀请 ｜ 补绑手机",group:"invite",hash:"#invite?token=admin-email",sessionRole:null},{key:"inv-admin-phone",label:"机构管理员邀请 ｜ 补绑邮箱",group:"invite",hash:"#invite?token=admin-phone",sessionRole:null},{key:"inv-proj-email",label:"项目管理员邀请 ｜ 补绑手机",group:"invite",hash:"#invite?token=project-admin-email",sessionRole:null},{key:"inv-owner",label:"机构审核通过 ｜ 开通机构",group:"invite",hash:"#invite?token=owner-demo",sessionRole:null},{key:"inv-existing",label:"已有账户受邀 ｜ 引导登录",group:"invite",hash:"#invite?token=existing-demo",sessionRole:null},{key:"inv-signed-match",label:"已登录 ｜ 确认加入",group:"invite",hash:"#invite?token=existing-demo",sessionRole:"operator"},{key:"inv-signed-mismatch",label:"已登录 ｜ 切换受邀账户",group:"invite",hash:"#invite?token=member-demo",sessionRole:"org_admin"},{key:"inv-expired",label:"邀请链接已过期",group:"terminal",hash:"#invite?token=expired",sessionRole:null},{key:"inv-revoked",label:"邀请已撤销",group:"terminal",hash:"#invite?token=revoked",sessionRole:null},{key:"inv-accepted",label:"邀请已被接受",group:"terminal",hash:"#invite?token=accepted",sessionRole:null},{key:"inv-invalid",label:"邀请链接已失效",group:"terminal",hash:"#invite",sessionRole:null}];async function bn(t){const e=new Ds;let a=await e.getSession(),n="login",o="",l="",c="",E=window.location.hash&&!aa(window.location.hash)?window.location.hash:"",v=!1;document.querySelector("[data-demo-fab-root]")?.remove();const f=document.createElement("div");f.className="pacom-demo-fab-wrap",f.dataset.demoFabRoot="1",document.body.appendChild(f);function y(p,d){const C=p.trim();if(C==="#login")return"login";if(C==="#apply"||C==="#register?tab=apply")return"reg-apply";if(C.startsWith("#register")||C.startsWith("#join"))return"reg-join";if(C.startsWith("#invite")){const B=ba(C).inviteToken??"";return B?B==="expired"?"inv-expired":B==="revoked"?"inv-revoked":B==="accepted"?"inv-accepted":B.startsWith("owner")?"inv-owner":B==="admin-email"?"inv-admin-email":B==="admin-phone"?"inv-admin-phone":B==="project-admin-email"?"inv-proj-email":B==="existing-demo"?d?"inv-signed-match":"inv-existing":d?"inv-signed-mismatch":"inv-member":"inv-invalid"}return""}function I(){const p=ha.filter(B=>B.group==="auth"),d=ha.filter(B=>B.group==="invite"),C=ha.filter(B=>B.group==="terminal"),A=B=>{const V=n!=="app"&&l===B.key;return`
        <button type="button" class="pacom-demo-role-btn" aria-pressed="${V}" data-demo-preset="${B.key}">
          <span>${B.label}</span>
          ${V?ce("check",14):"<span>→</span>"}
        </button>`};f.innerHTML=`
      ${v?`
          <div class="pacom-demo-fab-panel" role="dialog" aria-label="演示视角切换">
            <div class="pacom-demo-fab-head">
              <span class="pacom-demo-fab-title">演示视角</span>
              <span class="pacom-badge pacom-badge--neutral">模拟数据</span>
            </div>
            <span class="pacom-demo-fab-sub">测试邀请码 482 916 305 ｜ 验证码任意 6 位数字</span>
            <div class="pacom-demo-fab-roles">
              <span class="pacom-demo-fab-sec-title">工作区角色</span>
              ${fn.map(B=>`
                  <button type="button" class="pacom-demo-role-btn" aria-pressed="${n==="app"&&a?.role===B}" data-demo-pick="${B}">
                    <span>${dt[B]}</span>
                    ${n==="app"&&a?.role===B?ce("check",14):""}
                  </button>`).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">登录与注册</span>
              ${p.map(A).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">邀请与开通激活</span>
              ${d.map(A).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">链接异常与终态</span>
              ${C.map(A).join("")}
            </div>
            <div class="pacom-demo-fab-foot">
              <a class="pacom-demo-link" href="./index.html">
                <span>进入生产入口（index.html）</span>
                <span>→</span>
              </a>
            </div>
          </div>`:""}
      <button type="button" class="pacom-demo-fab-pill" aria-expanded="${v}" data-demo-fab-toggle="1" title="切换演示视角">
        <span class="pacom-demo-fab-dot" aria-hidden="true"></span>
        <span>演示</span>
      </button>
    `,f.querySelector("[data-demo-fab-toggle]")?.addEventListener("click",B=>{B.stopPropagation(),v=!v,I()}),f.querySelectorAll("[data-demo-pick]").forEach(B=>{B.addEventListener("click",async()=>{const V=B.dataset.demoPick;V&&(v=!1,a=await e.switchDemoRole(V),await _(a))})}),f.querySelectorAll("[data-demo-preset]").forEach(B=>{B.addEventListener("click",async()=>{const V=B.dataset.demoPreset,K=ha.find(pe=>pe.key===V);K&&(v=!1,c="",K.sessionRole&&(a=await e.switchDemoRole(K.sessionRole)),await S(K.hash,K.sessionRole===null,{presetKey:K.key,initialJoinReceipt:K.joinReceipt??null,initialApplyReceipt:K.applyReceipt??null}))})})}document.addEventListener("click",p=>{v&&(p.target?.closest("[data-demo-fab-root]")||(v=!1,I()))}),document.addEventListener("keydown",p=>{p.key==="Escape"&&v&&(v=!1,I())});async function S(p,d,C){un(t),cs(t),ps(t),d&&a&&(await e.logout(),a=null);const A=ba(p);if(n=A.kind,o=p,l=C?.presetKey??y(p,!!a),window.location.hash!==p&&(window.location.hash=p),I(),A.kind==="register"||A.kind==="invite"){gn(t,e,{initialMode:A.initialMode,prefillCode:A.prefillCode,isInviteRoute:A.kind==="invite",inviteToken:A.inviteToken,currentSession:A.kind==="invite"?a:null,initialJoinReceipt:C?.initialJoinReceipt??null,initialApplyReceipt:C?.initialApplyReceipt??null,onBackToLogin:()=>{c="",S("#login",!1)},onGoLoginForInvite:(B,V,K)=>{c=K,S("#login",!1,{prefillAccount:B,notice:V})},onSwitchAccountForInvite:(B,V)=>{c=B,S("#login",!0,{notice:V})},onBackToWorkspace:()=>{a?_(a):S("#login",!1)},onAuthenticated:B=>{c="",_(B)}});return}vn(t,e,B=>{if(a=B,c){const V=c;c="",S(V,!1);return}_(B)},{prefillAccount:C?.prefillAccount,notice:C?.notice,onOpenRegister:()=>{c="",S("#register",!1)}})}async function _(p){cs(t),ps(t),a=p,n="app",o="",l="",I(),(!window.location.hash||aa(window.location.hash))&&(window.location.hash=E||"#home"),E="",await mn(t,e,p,()=>{c="",E="",S("#login",!0)})}if(window.addEventListener("hashchange",()=>{if(aa(window.location.hash)){if(window.location.hash===o)return;const p=ba(window.location.hash);(n!==p.kind||window.location.hash!==o)&&S(window.location.hash,n==="app"&&p.kind!=="invite")}}),!a||aa(window.location.hash)){const p=aa(window.location.hash)?window.location.hash:"#login",d=ba(p);await S(p,!!(a&&d.kind!=="invite"));return}await _(a)}async function hn(){const t=document.getElementById("app");if(t)try{await bn(t)}catch(e){t.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">演示环境初始化失败：${String(e)}</div></div>`}}hn();
