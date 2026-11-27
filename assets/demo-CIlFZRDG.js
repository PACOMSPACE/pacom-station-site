import{E as R,r as re,a as Ua,e as n,b as Va,g as Ha,s as qt,m as cs,c as ds,d as zn,P as Nn,I as Ra,A as zt,f as Un,n as dt,h as Vn,i as ps,j as Ut,t as Hn,k as Wn,v as Pa,l as Nt,o as Vt,p as tn,q as Pt,u as Gn,C as za,w as va,x as an,y as vn,z as us,B as Za,D as fn,L as gn,F as La,G as Ft,H as bn,J as Fa,K as hn,M as yn,O as ms,N as vs}from"./auth-shared-C-uhIfm6.js";import{R as ft,g as fa,a as $n}from"./contracts-Z0w12vLk.js";function fs(){const e="2026-11-25T09:00:00Z",t=[];for(let i=1;i<=22;i+=1){const p=i===7?R.floorId:i===8?R.lockedFloor8Id:i===6?R.lockedFloor6Id:`structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-${i}`,$=String(i).padStart(2,"0");t.push({id:p,buildingId:R.buildingId,kind:"above",level:i,name:`${i}F`,areaSqm:i===7?1383.1:i===1?2680:i<=4?1920:1480,plan:{floorId:p,imageUrl:`./media/floors/e/${$}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}})}const a="structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-roof-1";t.push({id:a,buildingId:R.buildingId,kind:"roof",level:99,name:"RF",areaSqm:1260,plan:{floorId:a,imageUrl:"./media/floors/e/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}});const s=[];for(let i=1;i<=12;i+=1){const p=`structure-f-above-${i}`,$=String(i).padStart(2,"0");s.push({id:p,buildingId:R.buildingFId,kind:"above",level:i,name:`${i}F`,areaSqm:i===1?2450:i<=3?2100:1580,plan:{floorId:p,imageUrl:`./media/floors/f/${$}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}})}const o="structure-f-roof-1";return s.push({id:o,buildingId:R.buildingFId,kind:"roof",level:99,name:"RF",areaSqm:960,plan:{floorId:o,imageUrl:"./media/floors/f/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}}),{projects:[{id:R.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",location:{lat:23.0652,lng:113.3824,crs:"GCJ02",confirmed:!0,confirmedAt:e},imageUrl:"./media/gzlab.jpg"},{id:R.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",location:{lat:23.0681,lng:113.3792,crs:"GCJ02",confirmed:!0,confirmedAt:e},imageUrl:"./media/gzlab.jpg"}],buildings:[{id:R.buildingId,projectId:R.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.webp"},{id:R.buildingFId,projectId:R.projectId,name:"F栋",aboveFloors:12,belowFloors:0,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.webp"}],floors:[...t,...s],zones:[{id:"zone-e1f-lobby",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 首层大堂与庭院入口",category:"corridor"},{id:"zone-e1f-power",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 配电房与后勤区",category:"utility"},{id:"zone-e7f-lab-east",floorId:R.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:R.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:R.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:R.floorId,name:"核心走廊与弱电井",category:"corridor"},{id:"zone-erf-hvac",floorId:a,name:"RF 屋面空调主机与稳压泵区",category:"utility"},{id:"zone-f1f-lobby",floorId:"structure-f-above-1",name:"1F 南入口大堂与弧形展示翼",category:"corridor"},{id:"zone-f8f-office",floorId:"structure-f-above-8",name:"8F 会议与行政办公区",category:"office"},{id:"zone-f11f-sports",floorId:"structure-f-above-11",name:"11F 体育活动与茶歇区",category:"outdoor"},{id:"zone-f12f-lounge",floorId:"structure-f-above-12",name:"12F 休息区、母婴室与桌球室",category:"office"},{id:"zone-frf-plant",floorId:o,name:"RF 屋面设备基础与机房区",category:"utility"}]}}const Zn=fs(),wn=Zn.floors.map(e=>e.id),$t={org_admin:{userId:"demo-org-admin",displayName:"林致远",email:"lin.zhiyuan@pacom.cn",phone:"13800138001",role:"org_admin",roleLabel:ft.org_admin,authMode:"demo",scope:{allowedProjectIds:[R.projectId,R.project1Id],allowedBuildingIds:[R.buildingId,R.buildingFId],allowedFloorIds:[...wn],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩",email:"chen.mingxuan@pacom.cn",phone:"13800138002",role:"project_admin",roleLabel:ft.project_admin,authMode:"demo",scope:{allowedProjectIds:[R.projectId],allowedBuildingIds:[R.buildingId,R.buildingFId],allowedFloorIds:[...wn],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},operator:{userId:"demo-operator-e7f",displayName:"周宁",email:"zhou.ning@pacom.cn",phone:"13800138003",role:"operator",roleLabel:ft.operator,authMode:"demo",scope:{allowedProjectIds:[R.projectId],allowedBuildingIds:[R.buildingId],allowedFloorIds:[R.floorId],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}},space_user:{userId:"demo-space-user-e7f",displayName:"沈嘉",email:"shen.jia@pacom.cn",phone:"13800138004",role:"space_user",roleLabel:ft.space_user,authMode:"demo",scope:{allowedProjectIds:[R.projectId],allowedBuildingIds:[R.buildingId],allowedFloorIds:[R.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],visibleModules:["home","account"],canControlDevices:!0,canManageAlarms:!1,canEditScenes:!1,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}}},pa="pacom.web.demo.role",Sn="pacom.web.demo.spatial.v5",En="pacom.web.demo.orgs.v1",xn="pacom.web.demo.activeOrg.v1",In="pacom.web.demo.deployExt.v1",nt="org-gzlab";function kn(e){return`mesh-${e.replace(/[^a-z0-9]/gi,"").slice(-4).toLowerCase()||"01"}`}function An(){return{extraDevices:[],planChangeAlerts:{},floorFttRecords:{},configRevisionByFloor:{[R.floorId]:1},layoutRevisionByFloor:{[R.floorId]:1},deliverySnapshotMeta:{},deferredFloorIds:[],lightMarkers:[{id:"lm-1",deviceId:"dev-e7f-lt-01",floorId:R.floorId,channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",floorId:R.floorId,channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",floorId:R.floorId,channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],meshRoles:{"dev-e7f-gw-01":{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"},"dev-e7f-lt-01":{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"},"dev-e7f-lt-02":{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"},"dev-e7f-env-01":{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}},edgeSyncByFloor:{[R.floorId]:{version:3,dirty:!1,lastSyncedAt:"2026-11-25T09:00:00Z"}},deviceParams:{},groups:[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:R.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:R.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:R.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:R.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],docs:[{id:"doc-hvac-7f",floorId:R.floorId,name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F ｜ 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",floorId:R.floorId,name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F ｜ 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",floorId:R.floorId,name:"E7F_协议点位与蓝牙Mesh映射表.xlsx",category:"点位清单",boundScope:"E栋 7F ｜ 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",floorId:R.floorId,name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 ｜ FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}]}}class gs{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;inviteMissTimestamps=[];inviteLockedUntil=0;sentCodeTargets=new Set;joinReceipts=new Map;joinWithdrawTokens=new Map;joinAccountByRequestId=new Map;pendingApprovalAccounts=new Set;orgs;activeOrgId;spatial;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;overrides;deployExt;constructor(){this.orgs=this.loadOrgs();const t=typeof localStorage<"u"?localStorage.getItem(xn):null,a=this.orgs.find(i=>i.id===t)??this.orgs[0];this.activeOrgId=a.id,this.spatial=a.spatial,this.overrides=[],this.syncAdminScopesFromSpatial();const s=typeof sessionStorage<"u"?sessionStorage.getItem(pa):null;s&&$t[s]&&(this.activeSession=structuredClone($t[s]),this.applyOverridesToSession());const o=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:R.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:o,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:o,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:R.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:o,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:R.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:o,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:R.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:o,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:o,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:o,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02",category:"hvac",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:R.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:o,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:R.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:o,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:o,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:o,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:o},{id:"conn-e7f-dali",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:o},{id:"conn-e7f-modbus",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deployExt=this.loadDeployExtensions(),this.deployExt.seedDevicesOverride&&this.activeOrgId===nt&&(this.devices=structuredClone(this.deployExt.seedDevicesOverride)),this.deployExt.connectionsOverride&&(this.connections=structuredClone(this.deployExt.connectionsOverride)),this.deliveryBatches=this.deployExt.deliveryBatchesOverride?structuredClone(this.deployExt.deliveryBatchesOverride):[{id:"dlv-e7f-20261120",projectId:R.projectId,floorId:R.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:R.projectId,floorId:R.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:R.projectId,floorId:R.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:R.projectId,floorId:R.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:R.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:R.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:o,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:R.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:o,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:R.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:R.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh ｜ 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:R.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:o,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:R.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values($t).map((i,p)=>({userId:i.userId,displayName:i.displayName,email:`${i.role.replaceAll("_",".")}@gzlab.ac.cn`,role:i.role,roleLabel:i.roleLabel,scopeSummary:i.scope.allowedZoneIds?.length?`E栋 7F（${i.scope.allowedZoneIds.length} 个授权功能区）`:`${i.scope.allowedProjectIds.length} 项目 / ${i.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:p===0?o:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁",role:"operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"陈明轩",role:"project_admin",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉",role:"space_user",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}reconcileOverrides(){const t=Date.now();for(const a of this.overrides)a.status==="active"&&new Date(a.expiresAt).getTime()<=t&&(a.status="expired")}applyOverridesToSession(){if(this.reconcileOverrides(),!this.activeSession)return;const t=$t[this.activeSession.role].scope,a=this.overrides.filter(s=>s.targetUserId===this.activeSession.userId&&s.status==="active");this.activeSession.scope.activeOverrides=structuredClone(a),this.activeSession.scope.canEditDeployment=t.canEditDeployment||a.some(s=>s.module==="deployment"),this.activeSession.scope.canEditSettings=t.canEditSettings||a.some(s=>s.module==="settings")}record(t,a,s,o,i){this.traces.unshift({at:new Date().toISOString(),channel:t,operation:a,endpoint:s,request:i,response:o}),this.traces.length>40&&this.traces.pop()}pushAudit(t,a,s,o){const i=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:i?.displayName??"anonymous",role:i?.role??"space_user",action:t,target:a,result:s,detail:o})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.applyOverridesToSession(),this.activeSession}async getSession(){return this.applyOverridesToSession(),this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(t){const a=t.method??"password",s=t.account.trim(),o=this.normalizeContactKey(s);if(!s)throw new Error("400 BAD_REQUEST: 请输入电子邮箱或手机号码");if(a==="sms"){const u=(t.smsCode??t.password??"").trim();if(!/^\d{6}$/.test(u))throw new Error("验证码不正确或已过期");const f=`login:${o}`;if(!this.sentCodeTargets.has(f))throw new Error("请先获取短信验证码");this.sentCodeTargets.delete(f)}else if(!(t.password??"").trim())throw new Error("400 BAD_REQUEST: 请输入账户和密码");if(this.pendingApprovalAccounts.has(o))throw new Error("你的加入申请正在等待机构管理员审批，批准后即可登录。");const i=Object.values($t).find(u=>{const f=!!u.email&&this.normalizeContactKey(u.email)===o,h=!!u.phone&&this.normalizeContactKey(u.phone)===o;return f||h}),p=s.toLowerCase(),$=i?i.role:p.includes("org")||p.includes("admin")?"org_admin":p.includes("proj")?"project_admin":p.includes("space")||p.includes("member")?"space_user":"operator";return this.activeSession=structuredClone($t[$]),this.applyOverridesToSession(),sessionStorage.setItem(pa,$),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{method:a,account:s,rememberMe:!!t.rememberMe}),this.pushAudit("auth.login",this.activeSession.userId,"success",a==="sms"?"短信验证码登录":"密码登录"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(pa),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}maskTarget(t){const a=t.trim();if(a.includes("@")){const[o,i]=a.split("@");return o&&i?`${o[0]}•••@${i}`:"••••"}const s=a.replace(/\D/g,"");return s.length===11?`${s.slice(0,3)} •••• ${s.slice(7)}`:s.length>=6?`${s.slice(0,3)} •••• ${s.slice(-4)}`:"••••"}async sendVerificationCode(t){const a=t.target.trim(),s=a.includes("@")?"email":"sms";this.sentCodeTargets.add(`${t.purpose}:${this.normalizeContactKey(a)}`);const o={maskedTarget:this.maskTarget(a),channel:s,cooldownSeconds:60};return this.record("REST","sendVerificationCode","POST /api/v1/auth/verification-codes",o,{purpose:t.purpose,channel:s}),o}async confirmPasswordReset(t){const a=t.account.trim(),s=this.normalizeContactKey(a);if(!a)throw new Error("请输入电子邮箱或手机号码");if(!/^\d{6}$/.test(t.verificationCode.trim()))throw new Error("验证码不正确或已过期");const o=`reset:${s}`;if(!this.sentCodeTargets.has(o))throw new Error("请先获取验证码");if(!t.newPassword||t.newPassword.length<8)throw new Error("密码至少需要 8 个字符");this.sentCodeTargets.delete(o),this.record("REST","confirmPasswordReset","POST /api/v1/auth/password-reset/confirm",{ok:!0},{account:this.maskTarget(a)}),this.pushAudit("auth.password_reset",this.maskTarget(a),"success")}async resolveInviteCode(t){const a=Date.now();if(this.inviteLockedUntil>a)return{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const s=t.replace(/\D/g,""),i={482916305:this.orgs[0]?.name??"广州国家实验室",618204917:"天环智慧园区"}[s];if(!i){if(this.inviteMissTimestamps=this.inviteMissTimestamps.filter(u=>a-u<36e5),this.inviteMissTimestamps.push(a),this.inviteMissTimestamps.length>=10)return this.inviteLockedUntil=a+36e5,this.inviteMissTimestamps=[],{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const $={valid:!1,message:"邀请码不正确或已失效，请向机构管理员确认。"};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",$,{code:s}),$}const p={valid:!0,organizationName:i};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",p,{code:s}),p}async registerAndJoin(t){const a=await this.resolveInviteCode(t.inviteCode);if(!a.valid||!a.organizationName)throw new Error(a.message??"邀请码不正确或已失效，请向机构管理员确认。");if(!/^\d{6}$/.test(t.verificationCode.trim()))throw new Error("验证码不正确或已过期");const s=this.normalizeContactKey(t.account),o=`register_join:${s}`;if(!this.sentCodeTargets.has(o))throw new Error("请先获取验证码");const i=t.account.includes("@")?"email":"phone";if(this.isContactOccupied(i,t.account))throw new Error("该账户已注册，请直接登录或联系机构管理员发送定向邀请。");if(this.pendingApprovalAccounts.has(s))throw new Error("该账户已提交加入申请，正在等待机构管理员审批。");this.sentCodeTargets.delete(o);const p=`JR-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,$=`wt-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`,u={requestId:p,organizationName:a.organizationName,maskedAccount:this.maskTarget(t.account),status:"pending_approval",submittedAt:new Date().toISOString(),withdrawToken:$};return this.joinReceipts.set(p,u),this.joinWithdrawTokens.set(p,$),this.joinAccountByRequestId.set(p,s),this.pendingApprovalAccounts.add(s),this.record("REST","registerAndJoin","POST /api/v1/auth/register-join",u,{organizationName:a.organizationName,displayName:t.displayName}),u}async withdrawJoinApplication(t,a){const s=this.joinWithdrawTokens.get(t);if(s&&a!==s)throw new Error("撤回凭证无效或已失效，请刷新后重试。");this.joinReceipts.delete(t),this.joinWithdrawTokens.delete(t);const o=this.joinAccountByRequestId.get(t);o&&(this.pendingApprovalAccounts.delete(o),this.joinAccountByRequestId.delete(t)),this.record("REST","withdrawJoinApplication",`DELETE /api/v1/org/join-requests/${t}`,{ok:!0})}async submitOrgApplication(t){if(!/^\d{6}$/.test(t.smsCode.trim()))throw new Error("验证码不正确或已过期");const a=`org_apply:${this.normalizeContactKey(t.phone)}`;if(!this.sentCodeTargets.has(a))throw new Error("请先获取短信验证码");this.sentCodeTargets.delete(a);const s=t.province===t.city?t.province:`${t.province} ${t.city}`,o={applicationId:`APP-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,organizationName:t.organizationName.trim(),region:s,maskedEmail:this.maskTarget(t.email),status:"pending_review",submittedAt:new Date().toISOString()};return this.record("REST","submitOrgApplication","POST /api/v1/org/applications",o,{organizationName:o.organizationName,region:s}),o}async getInvitationPreview(t){const a=t.trim(),s=this.orgs[0]?.name??"广州国家实验室",o=new Date(Date.now()+7*864e5).toISOString().slice(0,10);return a==="expired"?{token:a,kind:"member",organizationName:s,inviterName:"林致远",role:"operator",roleLabel:ft.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!1,requiredSecondaryChannel:null,expiresAt:"2026-11-20",status:"expired"}:a==="revoked"?{token:a,kind:"member",organizationName:s,inviterName:"林致远",role:"operator",roleLabel:ft.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!1,requiredSecondaryChannel:null,expiresAt:o,status:"revoked"}:a==="accepted"?{token:a,kind:"member",organizationName:s,inviterName:"林致远",role:"operator",roleLabel:ft.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!0,requiredSecondaryChannel:null,expiresAt:o,status:"accepted"}:a.startsWith("owner")?{token:a,kind:"owner",organizationName:"广州天环智能科技有限公司",role:"org_admin",roleLabel:ft.org_admin,targetChannel:"email",targetValue:"chen@company.com",prefillName:"陈志远",accountExists:!1,requiredSecondaryChannel:null,verifiedSecondaryMasked:"139 •••• 9000",expiresAt:o,status:"pending"}:a==="admin-email"?{token:a,kind:"member",organizationName:s,inviterName:"林致远",role:"org_admin",roleLabel:ft.org_admin,targetChannel:"email",targetValue:"zhao.admin@pacom.cn",prefillName:"赵启明",accountExists:!1,requiredSecondaryChannel:fa("member","org_admin","email"),expiresAt:o,status:"pending"}:a==="admin-phone"?{token:a,kind:"member",organizationName:s,inviterName:"林致远",role:"org_admin",roleLabel:ft.org_admin,targetChannel:"phone",targetValue:"13900139088",prefillName:"赵启明",accountExists:!1,requiredSecondaryChannel:fa("member","org_admin","phone"),expiresAt:o,status:"pending"}:a==="project-admin-email"?{token:a,kind:"member",organizationName:s,inviterName:"林致远",role:"project_admin",roleLabel:ft.project_admin,targetChannel:"email",targetValue:"wu.proj@pacom.cn",prefillName:"吴承志",accountExists:!1,requiredSecondaryChannel:fa("member","project_admin","email"),expiresAt:o,status:"pending"}:a==="project-admin-phone"?{token:a,kind:"member",organizationName:s,inviterName:"林致远",role:"project_admin",roleLabel:ft.project_admin,targetChannel:"phone",targetValue:"13700137066",prefillName:"吴承志",accountExists:!1,requiredSecondaryChannel:fa("member","project_admin","phone"),expiresAt:o,status:"pending"}:a==="existing-demo"?{token:a,kind:"member",organizationName:"天环智慧园区",inviterName:"林致远",role:"operator",roleLabel:ft.operator,targetChannel:"email",targetValue:"zhou.ning@pacom.cn",prefillName:"周宁",accountExists:!0,requiredSecondaryChannel:null,expiresAt:o,status:"pending"}:{token:a||"member-demo",kind:"member",organizationName:s,inviterName:"林致远",role:"operator",roleLabel:ft.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",prefillName:"林明远",accountExists:!1,requiredSecondaryChannel:null,expiresAt:o,status:"pending"}}normalizeContactKey(t){return t.trim().toLowerCase().replace(/[\s\-()]/g,"")}isContactOccupied(t,a){const s=this.normalizeContactKey(a);return Object.values($t).some(o=>{const i=t==="email"?o.email:o.phone;return!!i&&this.normalizeContactKey(i)===s})}async acceptInvitation(t){const a=await this.getInvitationPreview(t.token);if(a.status!=="pending")throw new Error("邀请已过期或已失效，请联系邀请人重新发送。");const s=a.kind==="owner"?"org_admin":a.role??"operator",o=this.activeSession;if(!!o&&(a.targetChannel==="email"&&!!o?.email&&this.normalizeContactKey(o.email)===this.normalizeContactKey(a.targetValue)||a.targetChannel==="phone"&&!!o?.phone&&this.normalizeContactKey(o.phone)===this.normalizeContactKey(a.targetValue))&&o){const f=structuredClone(o);return this.activeSession=f,this.applyOverridesToSession(),sessionStorage.setItem(pa,f.role),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${t.token}/accept`,f),this.pushAudit("auth.invite.accept",f.userId,"success","已有账户确认加入"),structuredClone(f)}if(a.accountExists)throw new Error("该账户已注册，请使用原账户登录后再接受邀请。");const p=a.requiredSecondaryChannel!==void 0?a.requiredSecondaryChannel:fa(a.kind,a.role,a.targetChannel);let $="";if(p){const f=(t.secondaryContact??"").trim(),h=(t.secondaryVerificationCode??"").trim();if(!f)throw new Error(p==="phone"?"请补充并验证手机号码":"请补充并验证电子邮箱");if(!/^\d{6}$/.test(h))throw new Error("验证码不正确或已过期");const w=`bind:${this.normalizeContactKey(f)}`;if(!this.sentCodeTargets.has(w))throw new Error("请先获取验证码");if(this.isContactOccupied(p,f))throw new Error(p==="phone"?"该手机号码已绑定其他账户，请更换后重试；如原账户为你本人所有，请使用原账户登录或联系管理员重新邀请。":"该电子邮箱已绑定其他账户，请更换后重试；如原账户为你本人所有，请使用原账户登录或联系管理员重新邀请。");this.sentCodeTargets.delete(w),$=f}const u=structuredClone($t[s]);return t.displayName?.trim()&&(u.displayName=t.displayName.trim()),a.targetChannel==="email"?(u.email=a.targetValue,u.phone=$||(a.kind==="owner"?"13900139000":void 0)):(u.phone=a.targetValue,u.email=$||void 0),this.activeSession=u,this.applyOverridesToSession(),sessionStorage.setItem(pa,s),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${t.token}/accept`,u),this.pushAudit("auth.invite.accept",u.userId,"success"),structuredClone(u)}async switchDemoRole(t){return this.activeSession=structuredClone($t[t]),this.applyOverridesToSession(),sessionStorage.setItem(pa,t),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${t}`,this.activeSession),structuredClone(this.activeSession)}loadLegacySpatial(){try{if(typeof localStorage<"u"){const t=localStorage.getItem(Sn);if(t){const a=JSON.parse(t);if(Array.isArray(a?.projects)&&Array.isArray(a?.buildings)&&Array.isArray(a?.floors)&&Array.isArray(a?.zones))return a}}}catch{}return structuredClone(Zn)}loadOrgs(){try{if(typeof localStorage<"u"){const t=localStorage.getItem(En);if(t){const a=JSON.parse(t);if(Array.isArray(a)&&a.length>0&&a.every(s=>s?.id&&s?.name&&Array.isArray(s?.spatial?.projects)))return a}}}catch{}return[{id:nt,name:"广州国家实验室",spatial:this.loadLegacySpatial()}]}persistSpatial(){const t=this.orgs.find(a=>a.id===this.activeOrgId);t&&(t.spatial=this.spatial),this.syncAdminScopesFromSpatial();try{typeof localStorage<"u"&&(localStorage.setItem(En,JSON.stringify(this.orgs)),localStorage.setItem(xn,this.activeOrgId),this.activeOrgId===nt&&localStorage.setItem(Sn,JSON.stringify(this.spatial)))}catch{}}async listOrganizations(){return this.orgs.map(t=>({id:t.id,name:t.name,projectCount:t.spatial.projects.length}))}getActiveOrganizationId(){return this.activeOrgId}loadDeployExtensions(){try{if(typeof localStorage<"u"){const t=localStorage.getItem(`${In}.${this.activeOrgId}`);if(t){const a=JSON.parse(t),s=this.activeOrgId===nt?An():{extraDevices:[],lightMarkers:[],meshRoles:{},edgeSyncByFloor:{},deviceParams:{},groups:[],docs:[],planChangeAlerts:{},floorFttRecords:{},configRevisionByFloor:{},layoutRevisionByFloor:{},deliverySnapshotMeta:{},deferredFloorIds:[]};return{extraDevices:Array.isArray(a.extraDevices)?a.extraDevices:s.extraDevices,seedDevicesOverride:Array.isArray(a.seedDevicesOverride)?a.seedDevicesOverride:void 0,lightMarkers:Array.isArray(a.lightMarkers)?a.lightMarkers:s.lightMarkers,meshRoles:a.meshRoles&&typeof a.meshRoles=="object"?a.meshRoles:s.meshRoles,edgeSyncByFloor:a.edgeSyncByFloor&&typeof a.edgeSyncByFloor=="object"?a.edgeSyncByFloor:s.edgeSyncByFloor,deviceParams:a.deviceParams&&typeof a.deviceParams=="object"?a.deviceParams:s.deviceParams,groups:Array.isArray(a.groups)?a.groups:s.groups,docs:Array.isArray(a.docs)?a.docs:s.docs,connectionsOverride:Array.isArray(a.connectionsOverride)?a.connectionsOverride:void 0,deliveryBatchesOverride:Array.isArray(a.deliveryBatchesOverride)?a.deliveryBatchesOverride:void 0,planChangeAlerts:a.planChangeAlerts&&typeof a.planChangeAlerts=="object"?a.planChangeAlerts:s.planChangeAlerts,floorFttRecords:a.floorFttRecords&&typeof a.floorFttRecords=="object"?a.floorFttRecords:s.floorFttRecords,configRevisionByFloor:a.configRevisionByFloor&&typeof a.configRevisionByFloor=="object"?a.configRevisionByFloor:s.configRevisionByFloor,layoutRevisionByFloor:a.layoutRevisionByFloor&&typeof a.layoutRevisionByFloor=="object"?a.layoutRevisionByFloor:s.layoutRevisionByFloor,deliverySnapshotMeta:a.deliverySnapshotMeta&&typeof a.deliverySnapshotMeta=="object"?a.deliverySnapshotMeta:s.deliverySnapshotMeta,deferredFloorIds:Array.isArray(a.deferredFloorIds)?a.deferredFloorIds:s.deferredFloorIds}}}}catch{}return this.activeOrgId===nt?An():{extraDevices:[],lightMarkers:[],meshRoles:{},edgeSyncByFloor:{},deviceParams:{},groups:[],docs:[],planChangeAlerts:{},floorFttRecords:{},configRevisionByFloor:{},layoutRevisionByFloor:{},deliverySnapshotMeta:{},deferredFloorIds:[]}}persistDeployExtensions(){try{typeof localStorage<"u"&&localStorage.setItem(`${In}.${this.activeOrgId}`,JSON.stringify(this.deployExt))}catch{}}findAllDevices(){return[...this.activeOrgId===nt?this.devices:[],...this.deployExt.extraDevices]}markEdgeSyncDirty(t){const a=this.deployExt.edgeSyncByFloor[t]??{version:1,dirty:!1,lastSyncedAt:null};this.deployExt.edgeSyncByFloor[t]={...a,dirty:!0}}getFloorElectricalSignature(t){const a=this.deployExt.configRevisionByFloor[t]??1,s=this.spatial.floors.find(o=>o.id===t)?.plan?.planVersion??0;return`cfg-${a}-plan-${s}`}getFloorConfigSignature(t){const a=this.deployExt.configRevisionByFloor[t]??1,s=this.deployExt.layoutRevisionByFloor[t]??1,o=this.spatial.floors.find(i=>i.id===t)?.plan?.planVersion??0;return`cfg-${a}-lay-${s}-plan-${o}`}invalidateFloorVerification(t,a=!0){this.deployExt.configRevisionByFloor[t]=(this.deployExt.configRevisionByFloor[t]??1)+1,delete this.deployExt.floorFttRecords[t],a&&this.markEdgeSyncDirty(t)}summarizeDeviceParams(t){const a=this.deployExt.deviceParams[t.id];return a?t.category==="hvac"?`制冷≥${a.coolMinC??22}°C / 制热≤${a.heatMaxC??26}°C / 节能${a.unoccupiedDelayMin??20}分`:t.category==="gateway"?`心跳${a.heartbeatSec??30}s / 断网自治${a.offlineHoldMin??120}分`:t.category==="meter"?`轮询${a.pollSec??15}s / CT×${a.ctRatio??1}`:`关灯${a.offDelayMin}分 / 恢复${a.restoreMin}分 / ${a.luxOn}–${a.luxOff}lx`:"默认出厂参数"}buildSnapshotMetaForFloor(t,a){const s=this.spatial.floors.find(f=>f.id===a),o=this.findAllDevices().filter(f=>f.floorId===a),i=new Map(o.map(f=>[f.id,f.name])),p=new Map(this.spatial.zones.map(f=>[f.id,f.name])),$=this.deployExt.edgeSyncByFloor[a]??{version:1},u=this.deployExt.floorFttRecords[a]??null;return{batchId:t,floorId:a,floorName:s?.name??a,planVersion:s?.plan?.planVersion??0,edgeSyncVersion:$.version,configSignature:this.getFloorConfigSignature(a),fttPassedAt:u?.passedAt??null,snapshotSource:"recorded",devices:o.map(f=>({id:f.id,name:f.name,category:f.category,zoneLabel:f.logicalZoneId?p.get(f.logicalZoneId)??"未分配功能区":"未分配功能区",placed:!!f.planPoint,planX:f.planPoint?.x,planY:f.planPoint?.y,bound:!!f.hardwareBinding,gatewayName:f.hardwareBinding?.gatewayId?i.get(f.hardwareBinding.gatewayId)??f.hardwareBinding.gatewayId:void 0,protocol:f.hardwareBinding?.protocol,address:f.hardwareBinding?.networkAddress,portOrChannel:f.hardwareBinding?.portOrChannel,paramsSummary:this.summarizeDeviceParams(f),physicalInstalled:f.physicalInstalled,connectivity:f.connectivity}))}}async switchOrganization(t){const a=this.orgs.find(s=>s.id===t);if(!a)throw new Error(`404 NOT_FOUND: 机构 ${t} 不存在`);this.activeOrgId=a.id,this.spatial=a.spatial,this.deployExt=this.loadDeployExtensions(),this.deliveryBatches=this.deployExt.deliveryBatchesOverride?structuredClone(this.deployExt.deliveryBatchesOverride):this.activeOrgId===nt?[{id:"dlv-e7f-20261120",projectId:R.projectId,floorId:R.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}]:[],this.persistSpatial()}async createOrganization(t){if(this.requireSession().role!=="org_admin")throw new Error("403 FORBIDDEN: 仅机构管理员可新建机构");const s=t.trim()||"新建机构",o={id:`org-${Date.now().toString(36)}`,name:s,spatial:{projects:[],buildings:[],floors:[],zones:[]}};return this.orgs.push(o),this.activeOrgId=o.id,this.spatial=o.spatial,this.deployExt=this.loadDeployExtensions(),this.deliveryBatches=[],this.persistSpatial(),this.pushAudit("org.create",o.id,"success",s),{id:o.id,name:o.name,projectCount:0}}syncAdminScopesFromSpatial(){const t=this.spatial.projects.map(o=>o.id),a=this.spatial.buildings.map(o=>o.id),s=this.spatial.floors.map(o=>o.id);this.activeOrgId===nt&&($t.org_admin.scope.allowedProjectIds=[...t],$t.org_admin.scope.allowedBuildingIds=[...a],$t.org_admin.scope.allowedFloorIds=[...s],$t.project_admin.scope.allowedProjectIds=[...t],$t.project_admin.scope.allowedBuildingIds=[...a],$t.project_admin.scope.allowedFloorIds=[...s]),this.activeSession&&(this.activeOrgId!==nt||this.activeSession.role==="org_admin"||this.activeSession.role==="project_admin"||this.activeSession.scope.canEditDeployment)&&(this.activeSession.scope.allowedProjectIds=[...t],this.activeSession.scope.allowedBuildingIds=[...a],this.activeSession.scope.allowedFloorIds=[...s])}async getSpatialTree(){const t=this.requireSession();if(this.activeOrgId!==nt){const f=structuredClone(this.spatial);return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:f.projects.length,buildings:f.buildings.length,floors:f.floors.length}),f}const a=this.spatial.projects.filter(f=>t.scope.allowedProjectIds.includes(f.id)),s=this.spatial.buildings.filter(f=>t.scope.allowedBuildingIds.includes(f.id)),o=new Set(s.map(f=>f.id)),i=this.spatial.floors.filter(f=>o.has(f.buildingId)),p=new Set(i.map(f=>f.id)),$=this.spatial.zones.filter(f=>p.has(f.floorId)),u=structuredClone({projects:a,buildings:s,floors:i,zones:$});return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:u.projects.length,buildings:u.buildings.length,floors:u.floors.length}),u}async createProject(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权创建项目`);const s={id:`project-${Date.now().toString(36)}`,name:t.name.trim()||"新建项目",city:t.city?.trim()||"广州市",address:t.address?.trim()||"",timezone:"Asia/Shanghai",location:t.location,imageUrl:t.imageUrl??"./media/gzlab.jpg"};return this.spatial.projects.push(s),a.scope.allowedProjectIds.includes(s.id)||a.scope.allowedProjectIds.push(s.id),this.persistSpatial(),this.record("REST","createProject","POST /api/v1/projects",s,t),this.pushAudit("project.create",s.id,"success",s.name),structuredClone(s)}async updateProject(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改项目配置`);const o=this.spatial.projects.find(i=>i.id===t);if(!o)throw new Error(`404 NOT_FOUND: 项目 ${t} 不存在`);return a.name!==void 0&&(o.name=a.name.trim()||o.name),a.city!==void 0&&(o.city=a.city.trim()),a.address!==void 0&&(o.address=a.address.trim()),a.location!==void 0&&(o.location=a.location),a.imageUrl!==void 0&&(o.imageUrl=a.imageUrl),this.persistSpatial(),this.record("REST","updateProject",`PATCH /api/v1/projects/${t}`,o,a),this.pushAudit("project.update",t,"success",o.name),structuredClone(o)}async deleteProject(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除项目`);if(t===R.projectId)throw new Error("400 BAD_REQUEST: 当前项目包含运行中设备，请先清理后再删除");const s=new Set(this.spatial.buildings.filter(i=>i.projectId===t).map(i=>i.id)),o=new Set(this.spatial.floors.filter(i=>s.has(i.buildingId)).map(i=>i.id));this.spatial.projects=this.spatial.projects.filter(i=>i.id!==t),this.spatial.buildings=this.spatial.buildings.filter(i=>i.projectId!==t),this.spatial.floors=this.spatial.floors.filter(i=>!s.has(i.buildingId)),this.spatial.zones=this.spatial.zones.filter(i=>!o.has(i.floorId)),this.persistSpatial(),this.record("REST","deleteProject",`DELETE /api/v1/projects/${t}`,{ok:!0}),this.pushAudit("project.delete",t,"success")}async upsertBuilding(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护楼宇`);let s=t.id?this.spatial.buildings.find(o=>o.id===t.id):void 0;return s?(s.name=t.name.trim()||s.name,s.aboveFloors=Math.max(0,t.aboveFloors),s.belowFloors=Math.max(0,t.belowFloors),s.hasRoof=t.hasRoof,t.areaSqm!==void 0&&(s.areaSqm=t.areaSqm),t.imageUrl!==void 0&&(s.imageUrl=t.imageUrl)):(s={id:`building-${Date.now().toString(36)}`,projectId:t.projectId,name:t.name.trim()||"新建楼宇",aboveFloors:Math.max(1,t.aboveFloors),belowFloors:Math.max(0,t.belowFloors),hasRoof:t.hasRoof,areaSqm:t.areaSqm??null,imageUrl:t.imageUrl??"./media/building-e.webp"},this.spatial.buildings.push(s)),this.persistSpatial(),this.record("REST","upsertBuilding","PUT /api/v1/buildings",s,t),this.pushAudit("building.upsert",s.id,"success",s.name),structuredClone(s)}async deleteBuilding(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除楼宇`);if(t===R.buildingId)throw new Error("400 BAD_REQUEST: 当前楼宇包含运行中设备，请先解绑后再删除");const s=new Set(this.spatial.floors.filter(o=>o.buildingId===t).map(o=>o.id));this.spatial.buildings=this.spatial.buildings.filter(o=>o.id!==t),this.spatial.floors=this.spatial.floors.filter(o=>o.buildingId!==t),this.spatial.zones=this.spatial.zones.filter(o=>!s.has(o.floorId)),this.persistSpatial(),this.record("REST","deleteBuilding",`DELETE /api/v1/buildings/${t}`,{ok:!0}),this.pushAudit("building.delete",t,"success")}async upsertFloor(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护楼层`);const s=new Date().toISOString();let o=t.id?this.spatial.floors.find(i=>i.id===t.id):void 0;if(o){if(o.name=t.name.trim()||o.name,o.kind=t.kind,o.level=t.level,t.areaSqm!==void 0&&(o.areaSqm=t.areaSqm),t.planImageUrl!==void 0){const i=!!o.plan?.imageUrl,p=o.plan?.planVersion??0,$=!!(t.planImageUrl&&i&&t.planImageUrl!==o.plan?.imageUrl),u=this.findAllDevices().some(f=>f.floorId===o.id);o.plan=t.planImageUrl?{floorId:o.id,imageUrl:t.planImageUrl,planVersion:p+1,updatedAt:s}:null,$&&u?(this.deployExt.planChangeAlerts[o.id]={floorId:o.id,planChangedAt:s,previousVersion:p,currentVersion:p+1},this.invalidateFloorVerification(o.id,!1),this.persistDeployExtensions()):t.planImageUrl||(delete this.deployExt.planChangeAlerts[o.id],this.invalidateFloorVerification(o.id,!1),this.persistDeployExtensions())}}else{const i=`floor-${t.buildingId.slice(-6)}-${t.kind}-${Math.abs(t.level)}-${Date.now().toString(36).slice(-3)}`;o={id:i,buildingId:t.buildingId,kind:t.kind,level:t.level,name:t.name.trim()||`${t.level}F`,areaSqm:t.areaSqm??null,plan:t.planImageUrl?{floorId:i,imageUrl:t.planImageUrl,planVersion:1,updatedAt:s}:null},this.spatial.floors.push(o),this.activeSession&&!this.activeSession.scope.allowedFloorIds.includes(o.id)&&this.activeSession.scope.allowedFloorIds.push(o.id)}return this.persistSpatial(),this.record("REST","upsertFloor","PUT /api/v1/floors",{id:o.id,name:o.name,hasPlan:!!o.plan}),this.pushAudit("floor.upsert",o.id,"success",o.name),structuredClone(o)}async deleteFloor(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除楼层`);const s=this.findAllDevices().filter(o=>o.floorId===t).length;if(s>0)throw new Error(`400 BAD_REQUEST: 当前楼层已关联 ${s} 台设备，请先清理或解绑后再删除`);this.spatial.floors=this.spatial.floors.filter(o=>o.id!==t),this.spatial.zones=this.spatial.zones.filter(o=>o.floorId!==t),delete this.deployExt.planChangeAlerts[t],delete this.deployExt.floorFttRecords[t],this.persistSpatial(),this.persistDeployExtensions(),this.record("REST","deleteFloor",`DELETE /api/v1/floors/${t}`,{ok:!0}),this.pushAudit("floor.delete",t,"success")}async upsertZone(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护功能区`);let s=t.id?this.spatial.zones.find(o=>o.id===t.id):void 0;return s?(s.name=t.name.trim()||s.name,s.category=t.category):(s={id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,floorId:t.floorId,name:t.name.trim(),category:t.category},this.spatial.zones.push(s)),this.persistSpatial(),this.record("REST","upsertZone","PUT /api/v1/zones",s),this.pushAudit("zone.upsert",s.id,"success",s.name),structuredClone(s)}async deleteZone(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除功能区`);this.spatial.zones=this.spatial.zones.filter(s=>s.id!==t),this.persistSpatial(),this.record("REST","deleteZone",`DELETE /api/v1/zones/${t}`,{ok:!0}),this.pushAudit("zone.delete",t,"success")}async copyZonesToFloors(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权复制功能区`);const o=this.spatial.floors.find($=>$.id===t),i=this.spatial.zones.filter($=>$.floorId===t);if(!o||i.length===0)return 0;let p=0;for(const $ of a){if($===t)continue;const u=this.spatial.floors.find(h=>h.id===$);if(!u)continue;const f=new Set(this.spatial.zones.filter(h=>h.floorId===$).map(h=>h.name));for(const h of i){const w=h.name.replace(new RegExp(`^${o.name}\\s*`,"i"),""),D=`${u.name} ${w}`.trim();f.has(D)||(this.spatial.zones.push({id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,floorId:$,name:D,category:h.category}),f.add(D),p+=1)}}return p>0&&this.persistSpatial(),this.record("REST","copyZonesToFloors","POST /api/v1/zones/copy",{sourceFloorId:t,targetCount:a.length,added:p}),p}async getFloorDevices(t){const a=this.requireSession();if(!t)return[];if(this.activeOrgId===nt&&!a.scope.allowedFloorIds.includes(t)){const o={code:"FORBIDDEN",status:403,message:`当前角色「${a.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,o),this.pushAudit("floor.read",t,"denied",o.message),new Error(`403 FORBIDDEN: ${o.message}`)}let s=structuredClone(this.findAllDevices().filter(o=>o.floorId===t));return a.scope.allowedZoneIds?.length&&(s=s.filter(o=>o.logicalZoneId&&a.scope.allowedZoneIds.includes(o.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,{count:s.length}),s}async dispatchControlBatch(t){const a=this.requireSession();if(!a.scope.canControlDevices||!a.scope.allowedFloorIds.includes(t.floorId))throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权下发控制指令`);const s=`batch-e7f-${Date.now().toString(36)}`,o={batchId:s,floorId:t.floorId,createdBy:a.userId,createdAt:new Date().toISOString(),receipts:t.targets.map(i=>({deviceId:i.deviceId,command:i.command,targetValue:i.targetValue,status:"queued"}))};return this.batches.set(s,o),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",o,t),this.pushAudit("control.dispatch",s,"success",`下发 ${t.targets.length} 台设备`),o.receipts.forEach((i,p)=>{const $=this.devices.find(u=>u.id===i.deviceId);setTimeout(()=>{i.status="dispatched",i.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:s,deviceId:i.deviceId,status:"dispatched",at:i.dispatchedAt})},280+p*120),setTimeout(()=>{const u=new Date().toISOString();!$||$.connectivity==="offline"?(i.status="timeout",i.errorCode="GATEWAY_READBACK_TIMEOUT",i.errorMessage="设备离线，网关未收到回读确认",i.verifiedAt=u):(i.status="verified_success",i.observedValue=i.targetValue,i.verifiedAt=u,this.applyObservedTelemetry($,i.command,i.targetValue,u)),this.emit({type:"control.receipt.updated",batchId:s,deviceId:i.deviceId,status:i.status,observedValue:i.observedValue,at:u})},900+p*220)}),structuredClone(o)}applyObservedTelemetry(t,a,s,o){a==="lighting.dimming"&&t.telemetry.dimming?(t.telemetry.dimming={...t.telemetry.dimming,value:s,collectedAt:o,stale:!1},t.telemetry.power&&(t.telemetry.power={...t.telemetry.power,value:Number(s)>0,collectedAt:o,stale:!1})):(a==="lighting.power"||a==="hvac.power")&&t.telemetry.power?t.telemetry.power={...t.telemetry.power,value:s,collectedAt:o,stale:!1}:a==="hvac.setpoint"&&t.telemetry.setpoint&&(t.telemetry.setpoint={...t.telemetry.setpoint,value:s,collectedAt:o,stale:!1}),this.emit({type:"telemetry.updated",floorId:t.floorId,deviceId:t.id,collectedAt:o,values:{[a]:s}})}async getControlBatch(t){this.requireSession();const a=this.batches.get(t);if(!a)throw new Error(`404 NOT_FOUND: 批次 ${t} 不存在`);return structuredClone(a)}async listAlarms(t){const a=this.requireSession();return this.activeOrgId!==nt?[]:!a.scope.allowedFloorIds.includes(t)||t!==R.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(t,a){const s=this.requireSession();if(!s.scope.canManageAlarms){const i=`角色「${s.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",t,"denied",i),new Error(`403 FORBIDDEN: ${i}`)}const o=this.alarms.find(i=>i.id===t);if(!o)throw new Error(`404 NOT_FOUND: 告警 ${t} 不存在`);return o.status="acknowledged",o.acknowledgedAt=new Date().toISOString(),o.acknowledgedBy=s.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${t}/acknowledge`,o,{note:a}),this.pushAudit("alarm.acknowledge",t,"success",a),this.emit({type:"alarm.changed",floorId:o.floorId,alarmId:t,status:"acknowledged",at:o.acknowledgedAt}),structuredClone(o)}async listWorkOrders(t){const a=this.requireSession();return this.activeOrgId!==nt?[]:!a.scope.allowedFloorIds.includes(t)||t!==R.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(t){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权创建工单`);const s=new Date().toISOString(),o={id:`wo-e7f-${Date.now().toString(36)}`,projectId:R.projectId,buildingId:R.buildingId,floorId:t.floorId,deviceId:t.deviceId??null,alarmId:t.alarmId??null,title:t.title,description:t.description,status:"open",assigneeId:null,createdAt:s,updatedAt:s};if(this.workOrders.unshift(o),t.alarmId){const i=this.alarms.find(p=>p.id===t.alarmId);i&&(i.workOrderId=o.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",o,t),this.pushAudit("work_order.create",o.id,"success",o.title),structuredClone(o)}async updateWorkOrderStatus(t,a){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权流转工单`);const o=this.workOrders.find(i=>i.id===t);if(!o)throw new Error(`404 NOT_FOUND: 工单 ${t} 不存在`);return o.status=a,o.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${t}`,o,{status:a}),this.pushAudit("work_order.update",t,"success",`状态更新为 ${a}`),structuredClone(o)}async updateDevicePlanPoint(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw this.pushAudit("device.plan_point",t.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权编辑图纸标记`);const s=this.activeOrgId===nt?this.devices.find(p=>p.id===t.deviceId):void 0,o=s?void 0:this.deployExt.extraDevices.find(p=>p.id===t.deviceId),i=s??o;if(!i)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(i.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${i.version}，请刷新后重试`);return i.planPoint={floorId:t.floorId,planVersion:t.planVersion,x:Number(t.x.toFixed(4)),y:Number(t.y.toFixed(4))},i.version+=1,s&&this.activeOrgId===nt&&(this.deployExt.seedDevicesOverride=structuredClone(this.devices)),this.deployExt.layoutRevisionByFloor[i.floorId]=(this.deployExt.layoutRevisionByFloor[i.floorId]??1)+1,this.persistDeployExtensions(),this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${t.deviceId}/plan-point`,i,t),this.pushAudit("device.plan_point",t.deviceId,"success",`坐标更新 (${i.planPoint.x}, ${i.planPoint.y})`),structuredClone(i)}async updateDeviceHardwareBinding(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权修改硬件绑定`);const s=this.activeOrgId===nt?this.devices.find($=>$.id===t.deviceId):void 0,o=s?void 0:this.deployExt.extraDevices.find($=>$.id===t.deviceId),i=s??o;if(!i)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(i.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${i.version}）`);const p=new Date().toISOString();return i.physicalInstalled=t.physicalInstalled,i.physicalVerifiedAt=t.physicalInstalled?p:null,i.hardwareBinding={gatewayId:t.gatewayId,protocol:t.protocol,networkAddress:t.networkAddress,portOrChannel:t.portOrChannel,boundAt:p,boundBy:a.displayName},i.connectivity==="unknown"&&(i.connectivity="online"),i.version+=1,s&&this.activeOrgId===nt&&(this.deployExt.seedDevicesOverride=structuredClone(this.devices)),this.invalidateFloorVerification(i.floorId,!0),this.persistDeployExtensions(),this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${t.deviceId}/hardware-binding`,i,t),this.pushAudit("device.hardware_binding",t.deviceId,"success",`${t.protocol} ${t.networkAddress}`),structuredClone(i)}async listConnections(t){this.requireSession();const a=this.deployExt.connectionsOverride??(this.activeOrgId===nt?this.connections:[]);return structuredClone(t?a.filter(s=>s.projectId===t):a)}async listDeliveryBatches(t){return this.requireSession(),this.activeOrgId!==nt?structuredClone(this.deliveryBatches.filter(a=>a.floorId===t)):structuredClone(t?this.deliveryBatches.filter(a=>a.floorId===t):this.deliveryBatches)}async freezeDeliveryBatch(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权冻结交付批次`);const o=this.spatial.floors.find(X=>X.id===t),i=o?this.spatial.buildings.find(X=>X.id===o.buildingId):void 0,p=this.findAllDevices().filter(X=>X.floorId===t);if(p.length===0)throw new Error("400 BAD_REQUEST: 本层尚无已登记设备，无法生成正式交付冻结快照。");const $=p.filter(X=>X.physicalInstalled&&X.hardwareBinding).length,u=p.filter(X=>!!X.planPoint).length,f=p.filter(X=>X.connectivity==="online").length,h=this.deployExt.planChangeAlerts[t],w=this.deployExt.edgeSyncByFloor[t]??{dirty:!1},D=this.getFloorConfigSignature(t),F=this.getFloorElectricalSignature(t),k=this.deployExt.floorFttRecords[t],m=k&&!w.dirty&&(!k.electricalSignature||k.electricalSignature===F)?k:null,d=[];if(o?.plan||d.push("缺少平面底图"),u<p.length&&d.push(`尚有 ${p.length-u} 台设备未标记`),$<p.length&&d.push(`尚有 ${p.length-$} 台设备未完成硬件绑定与物理复核`),f<p.length&&d.push(`尚有 ${p.length-f} 台设备未在线入网`),w.dirty&&d.push("存在待同步边缘配置"),h&&d.push("更换底图后尚未复核点位"),m||d.push("配置变更或同步后尚未重新通过全层自检（FTT）"),d.length>0)throw new Error(`400 BAD_REQUEST: 尚未满足正式冻结门槛（${d.join("；")}），可先保存为「阶段留档」。`);const b=this.deliveryBatches.find(X=>{if(X.floorId!==t||X.status==="draft")return!1;const ce=this.deployExt.deliverySnapshotMeta[X.id];return ce&&ce.snapshotSource!=="legacy_missing"&&ce.configSignature===D});if(b)throw new Error(`400 BAD_REQUEST: 当前配置与图纸点位基线已正式冻结为「${b.versionTag}」，无新增变更无需重复冻结；如需移交请对既有基线执行「去签收」。`);const B=`${i?.name??"FL"}-${o?.name??t.slice(-4)}`.replace(/\s+/g,""),O=this.deliveryBatches.filter(X=>X.floorId===t).map(X=>{const ce=X.versionTag.match(/-v1\.(\d+)$/);return ce?Number(ce[1]):-1}).filter(X=>X>=0),Q=O.length>0?Math.max(...O)+1:0,J={id:`dlv-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,projectId:i?.projectId??this.spatial.projects[0]?.id??R.projectId,floorId:t,versionTag:`${B}-v1.${Q}`,deviceCount:p.length,verifiedCount:$,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:s.displayName,note:a||"全层自检通过，正式交付冻结"};return this.deliveryBatches.unshift(J),this.deployExt.deliverySnapshotMeta[J.id]=this.buildSnapshotMetaForFloor(J.id,t),this.deployExt.deliveryBatchesOverride=structuredClone(this.deliveryBatches),this.persistDeployExtensions(),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${t}/deliveries/freeze`,J,{note:a}),this.pushAudit("delivery.freeze",J.id,"success",`${$}/${p.length} 正式冻结`),structuredClone(J)}async saveDeliveryStageSnapshot(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权生成阶段留档`);const o=this.spatial.floors.find(w=>w.id===t),i=o?this.spatial.buildings.find(w=>w.id===o.buildingId):void 0,p=this.findAllDevices().filter(w=>w.floorId===t);if(p.length===0)throw new Error("400 BAD_REQUEST: 本层尚无已登记设备，请先添加并配置设备后再留档。");const $=p.filter(w=>w.physicalInstalled&&w.hardwareBinding).length,u=`${i?.name??"FL"}-${o?.name??t.slice(-4)}`.replace(/\s+/g,""),f=this.deliveryBatches.filter(w=>w.floorId===t&&w.status==="draft").length+1,h={id:`stg-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,projectId:i?.projectId??this.spatial.projects[0]?.id??R.projectId,floorId:t,versionTag:`${u}-stage-${f}`,deviceCount:p.length,verifiedCount:$,status:"draft",frozenAt:new Date().toISOString(),frozenBy:s.displayName,note:a||"阶段性施工留档（待补齐剩余门控项后正式冻结）"};return this.deliveryBatches.unshift(h),this.deployExt.deliverySnapshotMeta[h.id]=this.buildSnapshotMetaForFloor(h.id,t),this.deployExt.deliveryBatchesOverride=structuredClone(this.deliveryBatches),this.persistDeployExtensions(),this.pushAudit("delivery.stage_snapshot",h.id,"success",`${$}/${p.length} 阶段留档`),structuredClone(h)}async signOffDeliveryBatch(t,a,s){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权执行交付签收`);const i=this.deliveryBatches.find(F=>F.id===t);if(!i)throw new Error(`404 NOT_FOUND: 交付记录 ${t} 不存在`);if(i.status!=="frozen")throw new Error(i.status==="delivered"?"400 BAD_REQUEST: 该基线已完成签收交付。":"400 BAD_REQUEST: 阶段留档（草稿）不可直接签收，请先满足门控并生成正式冻结基线。");const p=a.trim();if(!p)throw new Error("400 BAD_REQUEST: 请填写接收方签收人姓名与部门后再确认签收。");const $=this.deployExt.deliverySnapshotMeta[i.id],u=this.getFloorConfigSignature(i.floorId);if(this.deliveryBatches.some(F=>F.floorId===i.floorId&&F.id!==i.id&&F.status!=="draft"&&F.frozenAt>i.frozenAt)||!!this.deployExt.planChangeAlerts[i.floorId]||!!this.deployExt.edgeSyncByFloor[i.floorId]?.dirty||!!($&&$.snapshotSource!=="legacy_missing"&&$.configSignature!==u))throw new Error("400 BAD_REQUEST: 该冻结基线已过期（现场配置、图纸或点位已发生变更），禁止签收旧版本，请完成新版核验与冻结后再签收。");const w=new Date().toISOString();i.status="delivered";const D=$??{batchId:i.id,floorId:i.floorId,floorName:this.spatial.floors.find(F=>F.id===i.floorId)?.name??i.floorId,planVersion:this.spatial.floors.find(F=>F.id===i.floorId)?.plan?.planVersion??0,edgeSyncVersion:this.deployExt.edgeSyncByFloor[i.floorId]?.version??1,configSignature:u,fttPassedAt:null,snapshotSource:"legacy_missing",devices:[]};return D.signedOffBy=p,D.signedOffAt=w,D.signOffNote=s?.trim()||"现场验收通过，正式签收移交运维",this.deployExt.deliverySnapshotMeta[i.id]=D,this.deployExt.deliveryBatchesOverride=structuredClone(this.deliveryBatches),this.persistDeployExtensions(),this.pushAudit("delivery.sign_off",i.id,"success",`签收人：${p}`),structuredClone(i)}async rejectDeliveryBatch(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权退回整改`);const o=this.deliveryBatches.find(u=>u.id===t);if(!o)throw new Error(`404 NOT_FOUND: 交付记录 ${t} 不存在`);if(o.status!=="frozen")throw new Error("400 BAD_REQUEST: 仅处于「已冻结（待签收）」状态的基线支持退回整改。");const i=a.trim();if(!i)throw new Error("400 BAD_REQUEST: 请填写退回整改原因后再提交。");const p=new Date().toISOString();o.status="draft",o.note=`退回整改：${i}`;const $=this.deployExt.deliverySnapshotMeta[o.id];return $&&($.rejectedBy=s.displayName,$.rejectedAt=p,$.rejectReason=i),this.deployExt.deliveryBatchesOverride=structuredClone(this.deliveryBatches),this.persistDeployExtensions(),this.pushAudit("delivery.reject",o.id,"success",i),structuredClone(o)}async getDeliverySnapshotMeta(t){this.requireSession();const a=this.deployExt.deliverySnapshotMeta[t];if(a)return structuredClone(a);const s=this.deliveryBatches.find(i=>i.id===t);if(!s)return null;const o=this.spatial.floors.find(i=>i.id===s.floorId);return{batchId:s.id,floorId:s.floorId,floorName:o?.name??s.floorId,planVersion:o?.plan?.planVersion??0,edgeSyncVersion:this.deployExt.edgeSyncByFloor[s.floorId]?.version??1,configSignature:"legacy-seed",fttPassedAt:null,snapshotSource:"legacy_missing",devices:[]}}async listDeliverySnapshotMeta(t){this.requireSession();const a=new Set(this.spatial.floors.filter(o=>o.buildingId===t).map(o=>o.id)),s={};for(const o of this.deliveryBatches){if(!a.has(o.floorId))continue;const i=await this.getDeliverySnapshotMeta(o.id);i&&(s[o.id]=i)}return s}async getFloorCurrentSignature(t){return this.requireSession(),this.getFloorConfigSignature(t)}async listDeferredFloorIds(t){this.requireSession();const a=new Set(this.spatial.floors.filter(s=>s.buildingId===t).map(s=>s.id));return this.deployExt.deferredFloorIds.filter(s=>a.has(s))}async toggleFloorDeferred(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权调整本期验收范围`);const o=new Set(this.deployExt.deferredFloorIds);a?o.add(t):o.delete(t),this.deployExt.deferredFloorIds=Array.from(o),this.persistDeployExtensions();const i=this.spatial.floors.find(p=>p.id===t);return i?this.listDeferredFloorIds(i.buildingId):this.deployExt.deferredFloorIds}async createDeploymentDevice(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权新增设备`);const s=`dev-custom-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,o={id:s,name:t.name.trim(),category:t.category,projectId:t.projectId,buildingId:t.buildingId,floorId:t.floorId,logicalZoneId:t.logicalZoneId,planPoint:null,physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"unknown",version:1,telemetry:{}};return this.deployExt.extraDevices.push(o),t.category!=="hvac"&&t.category!=="meter"&&(this.deployExt.meshRoles[s]={proxy:!!t.defaultProxy,relay:!!t.defaultRelay,meshUuid:kn(t.floorId)}),this.deployExt.deferredFloorIds=this.deployExt.deferredFloorIds.filter(i=>i!==t.floorId),this.invalidateFloorVerification(t.floorId,!0),this.persistDeployExtensions(),this.pushAudit("device.create",s,"success",o.name),structuredClone(o)}async updateDeploymentDevice(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改设备信息`);const o=this.activeOrgId===nt?this.devices.find($=>$.id===t):void 0,i=o?void 0:this.deployExt.extraDevices.find($=>$.id===t),p=o??i;if(!p)throw new Error(`404 NOT_FOUND: 设备 ${t} 不存在`);return a.name!==void 0&&a.name.trim()&&(p.name=a.name.trim()),a.logicalZoneId!==void 0&&(p.logicalZoneId=a.logicalZoneId),p.version+=1,o&&this.activeOrgId===nt&&(this.deployExt.seedDevicesOverride=structuredClone(this.devices)),this.invalidateFloorVerification(p.floorId,!0),this.persistDeployExtensions(),this.pushAudit("device.update",t,"success",p.name),structuredClone(p)}async deleteDeploymentDevice(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除设备`);const s=this.findAllDevices().find(o=>o.id===t);if(!s)throw new Error(`404 NOT_FOUND: 设备 ${t} 不存在`);this.devices=this.devices.filter(o=>o.id!==t),this.deployExt.extraDevices=this.deployExt.extraDevices.filter(o=>o.id!==t),this.activeOrgId===nt&&(this.deployExt.seedDevicesOverride=structuredClone(this.devices)),this.deployExt.lightMarkers=this.deployExt.lightMarkers.filter(o=>o.deviceId!==t),this.deployExt.groups=this.deployExt.groups.map(o=>({...o,deviceIds:o.deviceIds.filter(i=>i!==t)})),delete this.deployExt.meshRoles[t],delete this.deployExt.deviceParams[t],this.invalidateFloorVerification(s.floorId,!0),this.persistDeployExtensions(),this.pushAudit("device.delete",t,"success",s.name)}async listLightMarkers(t){return this.requireSession(),structuredClone(this.deployExt.lightMarkers.filter(a=>a.floorId===t))}async addLightMarker(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权编辑回路灯点`);const s={...t,id:`lm-${Date.now().toString(36)}`};return this.deployExt.lightMarkers.push(s),this.persistDeployExtensions(),structuredClone(s)}async deleteLightMarker(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除回路灯点`);this.deployExt.lightMarkers=this.deployExt.lightMarkers.filter(s=>s.id!==t),this.persistDeployExtensions()}async listMeshRoles(t){this.requireSession();const a=new Set(this.findAllDevices().filter(o=>o.floorId===t).map(o=>o.id)),s={};for(const[o,i]of Object.entries(this.deployExt.meshRoles))a.has(o)&&(s[o]={...i});return s}async updateMeshRole(t,a,s){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权修改蓝牙 Mesh 节点角色`);const p={...this.deployExt.meshRoles[t]??{proxy:!1,relay:!1,meshUuid:kn(a)},...s};return this.deployExt.meshRoles[t]=p,this.invalidateFloorVerification(a,!0),this.persistDeployExtensions(),{...p}}async getEdgeSyncState(t){return this.requireSession(),{...this.deployExt.edgeSyncByFloor[t]??{version:1,dirty:!1,lastSyncedAt:null}}}async syncEdgeGateway(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权执行边缘同步`);if(!this.findAllDevices().filter($=>$.floorId===t).some($=>$.category==="gateway"&&$.connectivity==="online"&&!!$.hardwareBinding))throw new Error("400 BAD_REQUEST: 本层尚无已绑定且在线的边缘网关 / 蓝牙适配器，请先完成网关硬件绑定后再执行同步。");const i=this.deployExt.edgeSyncByFloor[t]??{version:1,dirty:!1};if(!i.dirty){const $={version:i.version,dirty:!1,lastSyncedAt:new Date().toISOString()};return this.deployExt.edgeSyncByFloor[t]=$,this.persistDeployExtensions(),this.pushAudit("edge.sync_verify",t,"success",`边缘基线 v${$.version} 无变更校验通过`),{...$}}const p={version:i.version+1,dirty:!1,lastSyncedAt:new Date().toISOString()};return this.deployExt.edgeSyncByFloor[t]=p,delete this.deployExt.floorFttRecords[t],this.persistDeployExtensions(),this.pushAudit("edge.sync",t,"success",`边缘基线同步至 v${p.version}`),{...p}}async getDeviceParams(t){return this.requireSession(),{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450,coolMinC:22,heatMaxC:26,unoccupiedDelayMin:20,minCycleMin:5,heartbeatSec:30,offlineHoldMin:120,cacheFlushSec:60,pollSec:15,ctRatio:1,demandWindowMin:15,...this.deployExt.deviceParams[t]??{}}}async saveDeviceParams(t,a,s){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权下发设备参数`);return this.deployExt.deviceParams[t]={...s},this.invalidateFloorVerification(a,!0),this.persistDeployExtensions(),{...s}}async listDeviceGroups(t){return this.requireSession(),structuredClone(this.deployExt.groups.filter(a=>a.floorId===t))}async upsertDeviceGroup(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护设备分组`);const s=t.id?this.deployExt.groups.find(i=>i.id===t.id):void 0;let o;return s?(s.name=t.name.trim()||s.name,s.track=t.track,s.groupType=t.groupType,s.includesAdapter=t.includesAdapter,s.deviceIds=[...t.deviceIds],o=s):(o={...t,id:`grp-${Date.now().toString(36)}`,name:t.name.trim(),deviceIds:[...t.deviceIds]},this.deployExt.groups.unshift(o)),o.track==="mesh_auto"&&this.invalidateFloorVerification(o.floorId,!0),this.persistDeployExtensions(),this.pushAudit("device_group.upsert",o.id,"success",o.name),structuredClone(o)}async deleteDeviceGroup(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除设备分组`);const s=this.deployExt.groups.find(o=>o.id===t);this.deployExt.groups=this.deployExt.groups.filter(o=>o.id!==t),s?.track==="mesh_auto"&&this.invalidateFloorVerification(s.floorId,!0),this.persistDeployExtensions(),this.pushAudit("device_group.delete",t,"success")}async listFloorDocs(t){return this.requireSession(),structuredClone(this.deployExt.docs.filter(a=>a.floorId===t))}async attachFloorDoc(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权关联工程资料`);const s={...t,id:`doc-${Date.now().toString(36)}`};return this.deployExt.docs.unshift(s),this.persistDeployExtensions(),structuredClone(s)}async updateFloorDocCategory(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改工程资料分类`);const o=this.deployExt.docs.find(i=>i.id===t);if(!o)throw new Error(`404 NOT_FOUND: 工程资料 ${t} 不存在`);return o.category=a.trim()||o.category,this.persistDeployExtensions(),structuredClone(o)}async deleteFloorDoc(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除工程资料`);this.deployExt.docs=this.deployExt.docs.filter(s=>s.id!==t),this.persistDeployExtensions()}async upsertConnection(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护系统接入通道`);const s=this.deployExt.connectionsOverride?[...this.deployExt.connectionsOverride]:this.activeOrgId===nt?structuredClone(this.connections):[],o=t.endpoint.trim(),i=s.find(w=>w.endpoint===o&&w.id!==t.id&&w.projectId===t.projectId);if(i)throw new Error(`端口冲突警告：局域网端点「${o}」已被通道「${i.name}」占用，请更换端口后重试。`);const p=this.findAllDevices().filter(w=>w.projectId===t.projectId&&(!t.buildingId||w.buildingId===t.buildingId)&&(!t.floorId||w.floorId===t.floorId)&&w.hardwareBinding?.protocol===t.protocol),$=p.length*4,u=p.length>0?Math.max(1,p.length):0;let f;const h=t.id?s.find(w=>w.id===t.id):void 0;if(h){const w=h.endpoint!==o;h.name=t.name.trim()||h.name,h.protocol=t.protocol,h.endpoint=o,h.buildingId=t.buildingId,h.floorId=t.floorId??"",w&&h.status!=="connected"&&(h.status="connected"),h.collectedPoints===0&&$>0&&(h.collectedPoints=$,h.calculatedPoints=u),h.lastHeartbeatAt=new Date().toISOString(),f=h}else f={id:`conn-${Date.now().toString(36)}`,projectId:t.projectId,buildingId:t.buildingId,floorId:t.floorId??"",name:t.name.trim(),protocol:t.protocol,endpoint:o,status:"connected",collectedPoints:$,calculatedPoints:u,lastHeartbeatAt:new Date().toISOString()},s.unshift(f);return this.deployExt.connectionsOverride=s,this.connections=structuredClone(s),this.persistDeployExtensions(),this.pushAudit("connection.upsert",f.id,"success",`${f.name} (${f.endpoint})`),structuredClone(f)}async deleteConnection(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除系统接入通道`);const o=(this.deployExt.connectionsOverride?[...this.deployExt.connectionsOverride]:this.activeOrgId===nt?structuredClone(this.connections):[]).filter(i=>i.id!==t);this.deployExt.connectionsOverride=o,this.connections=structuredClone(o),this.persistDeployExtensions(),this.pushAudit("connection.delete",t,"success")}async restartEdgeService(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权重启边缘服务`);this.pushAudit("edge.restart",t,"success","已下发重启边缘服务指令")}async listPlanChangeAlerts(t){this.requireSession();const a=new Set(this.spatial.floors.filter(o=>o.buildingId===t).map(o=>o.id)),s={};for(const[o,i]of Object.entries(this.deployExt.planChangeAlerts))a.has(o)&&(s[o]={...i});return s}async clearPlanChangeAlert(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权确认换图复核`);delete this.deployExt.planChangeAlerts[t],this.persistDeployExtensions()}async getFloorFttRecord(t){this.requireSession();const a=this.deployExt.floorFttRecords[t];if(!a)return null;const s=this.deployExt.edgeSyncByFloor[t]??{dirty:!1},o=this.getFloorElectricalSignature(t);return s.dirty||this.deployExt.planChangeAlerts[t]||a.electricalSignature&&a.electricalSignature!==o?null:{...a}}async recordFloorFttPass(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权登记全层自检凭证`);const o=this.deployExt.edgeSyncByFloor[t]??{version:1},i={floorId:t,passedAt:new Date().toISOString(),deviceCount:a,edgeSyncVersion:o.version,configSignature:this.getFloorConfigSignature(t),electricalSignature:this.getFloorElectricalSignature(t),mode:"demo_sim"};return this.deployExt.floorFttRecords[t]=i,this.persistDeployExtensions(),{...i}}async getAnalysisReport(t,a,s){this.requireSession();const o=a==="today"?1:a==="7d"?7:30,p={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*o)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*o).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(f=>f.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*o).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*o).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*o).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[t],$=a==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],u={category:t,range:a,scopeId:s,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:p.kpis,unit:p.unit,series:p.base.map((f,h)=>({label:$[h],value:Math.round(f*(t==="energy"||t==="carbon"?o/2+.5:1)),baseline:Math.round(f*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:p.base[3],unit:p.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:p.base[4],unit:p.unit,status:t==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:p.base[1],unit:p.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${t}?range=${a}&scopeId=${s}`,{kpis:u.kpis.length}),u}async listScenes(t){return this.requireSession(),this.activeOrgId!==nt?[]:structuredClone(this.scenes)}async createScene(t){const a=this.requireSession();if(!a.scope.canEditScenes)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权创建场景`);const s={id:`scn-e7f-${Date.now().toString(36)}`,projectId:t.projectId,floorId:t.floorId,name:t.name,description:t.description,enabled:!0,scheduleSummary:"手动触发",actions:t.actions,lastExecutedAt:null};return this.scenes.unshift(s),this.record("REST","createScene","POST /api/v1/scenes",s,t),this.pushAudit("scene.create",s.id,"success",s.name),structuredClone(s)}async executeScene(t){const a=this.scenes.find(o=>o.id===t);if(!a)throw new Error(`404 NOT_FOUND: 场景 ${t} 不存在`);const s=await this.dispatchControlBatch({floorId:a.floorId,idempotencyKey:`scene-${t}-${Date.now()}`,targets:a.actions,reason:`触发场景：${a.name}`});return a.lastExecutedAt=new Date().toISOString(),a.lastBatchId=s.batchId,s}async getRuntimeSettings(t){return this.requireSession(),structuredClone({projectId:R.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(t,a,s){this.requireSession();const o=s>=this.calendar.nightGuardStart?`下班时间 ${s} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,i=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${a} - ${s}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${a} (-30m) ~ ${s} (+30m)`,conflictWarning:o},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:o}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",i,{workdayStart:a,workdayEnd:s}),i}async saveWorkCalendar(t,a,s,o){const i=this.requireSession();if(!i.scope.canEditSettings)throw this.pushAudit("settings.calendar",R.projectId,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权修改应用设置`);if(this.calendar.version!==o)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(a>=s)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:a,workdayEnd:s,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:a,workdayEnd:s,expectedVersion:o}),this.pushAudit("settings.calendar",R.projectId,"success",`${a}-${s}`),structuredClone(this.calendar)}async toggleRuntimeRule(t,a,s){const o=this.requireSession();if(!o.scope.canEditSettings)throw this.pushAudit("settings.rule_toggle",t,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权启停应用设置规则`);const i=this.rules.find(p=>p.id===t);if(!i)throw new Error(`404 NOT_FOUND: 规则 ${t} 不存在`);if(i.version!==s)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${i.version}）`);return i.enabled=a,i.version+=1,i.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${t}`,i,{enabled:a,expectedVersion:s}),this.pushAudit("settings.rule_toggle",t,"success",a?"启用":"停用"),structuredClone(i)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(t,a){if(!this.requireSession().scope.canManageMembers)throw this.pushAudit("org.invite",t,"denied","仅管理员可邀请成员"),new Error("403 FORBIDDEN: 仅管理员可邀请成员");const o=$t[a],i={userId:`inv-${Date.now().toString(36)}`,displayName:t.split("@")[0]||t,email:t,role:a,roleLabel:o.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(i),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",i,{email:t,role:a}),this.pushAudit("org.invite",t,"success",o.roleLabel),structuredClone(i)}async listAuditLogs(){if(!this.requireSession().scope.canViewAuditLogs)throw this.pushAudit("audit.read","org.audit_logs","denied","仅授权管理员可只读查阅审计日志"),new Error("403 FORBIDDEN: 仅授权管理员可查阅审计日志");return structuredClone(this.auditLogs)}async listOverrides(){const t=this.requireSession();return this.reconcileOverrides(),t.scope.canGrantOverride?structuredClone(this.overrides):structuredClone(this.overrides.filter(a=>a.targetUserId===t.userId))}async grantOverride(t){const a=this.requireSession();if(!a.scope.canGrantOverride)throw this.pushAudit("override.grant",t.targetUserId,"denied","仅机构/项目管理员可审批临时提权"),new Error("403 FORBIDDEN: 仅管理员可授予限时提权");const s=t.reason.trim();if(!s)throw new Error("400 BAD_REQUEST: 必须填写提权事由");if(![2,8,24].includes(t.durationHours))throw new Error("400 BAD_REQUEST: 提权有效期必须为 2h / 8h / 24h");const o=this.members.find($=>$.userId===t.targetUserId);if(!o)throw new Error(`404 NOT_FOUND: 目标成员 ${t.targetUserId} 不存在`);if(o.role!=="operator")throw new Error("400 BAD_REQUEST: 仅支持为运营人员授予临时提权");const i=Date.now(),p={id:`ovr-${i.toString(36)}`,targetUserId:o.userId,targetUserName:o.displayName,module:t.module,durationHours:t.durationHours,grantedAt:new Date(i).toISOString(),expiresAt:new Date(i+t.durationHours*36e5).toISOString(),approvedBy:a.displayName,reason:s,status:"active",revokedAt:null,revokedBy:null};return this.overrides.unshift(p),this.applyOverridesToSession(),this.record("REST","grantOverride","POST /api/v1/org/overrides",p,t),this.pushAudit("override.grant",`${o.displayName} ｜ ${t.module==="deployment"?"系统部署":"应用设置"}`,"success",`${t.durationHours}h ｜ ${s}`),structuredClone(p)}async revokeOverride(t){const a=this.requireSession();if(!a.scope.canGrantOverride)throw this.pushAudit("override.revoke",t,"denied","仅管理员可收回临时提权"),new Error("403 FORBIDDEN: 仅管理员可收回限时提权");const s=this.overrides.find(o=>o.id===t);if(!s)throw new Error(`404 NOT_FOUND: 提权记录 ${t} 不存在`);return s.status="revoked",s.revokedAt=new Date().toISOString(),s.revokedBy=a.displayName,this.applyOverridesToSession(),this.record("REST","revokeOverride",`POST /api/v1/org/overrides/${t}/revoke`,s),this.pushAudit("override.revoke",`${s.targetUserName} ｜ ${s.module==="deployment"?"系统部署":"应用设置"}`,"success","管理员提前收回"),structuredClone(s)}subscribeFloorEvents(t,a){return t!==R.floorId?()=>{}:(this.listeners.add(a),()=>{this.listeners.delete(a)})}emit(t){this.record("WS",t.type,`WS /ws/v1/stream?floorId=${R.floorId}`,t),this.listeners.forEach(a=>a(t))}}const Ka=["org_admin","project_admin","operator","space_user"],bs=[{module:"空间总览与设备控制",org_admin:{text:"机构全范围读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"授权范围读写",tone:"online"},space_user:{text:"授权空间可控",tone:"online"}},{module:"数据分析与报表导出",org_admin:{text:"查看与导出",tone:"online"},project_admin:{text:"查看与导出",tone:"online"},operator:{text:"查看与导出",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"告警中心与运维工单",org_admin:{text:"处置与派单",tone:"online"},project_admin:{text:"处置与派单",tone:"online"},operator:{text:"处置与派单",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"智能策略与快捷场景",org_admin:{text:"编排与执行",tone:"online"},project_admin:{text:"编排与执行",tone:"online"},operator:{text:"执行与编排",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"应用设置（日历/能耗/保护）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 ｜ 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"系统部署（项目/设备/拓扑）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 ｜ 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"成员管理与限时提权审批",org_admin:{text:"机构级管理与审批",tone:"accent"},project_admin:{text:"项目内管理与审批",tone:"accent"},operator:{text:"仅查看本人提权",tone:"neutral"},space_user:{text:"不可见",tone:"neutral"}},{module:"安全与操作审计日志（SR 6.1）",org_admin:{text:"只读查阅（防篡改）",tone:"accent"},project_admin:{text:"只读查阅（防篡改）",tone:"accent"},operator:{text:"无权访问",tone:"neutral"},space_user:{text:"无权访问",tone:"neutral"}}];function _e(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Ya(e){return e?e.slice(0,16).replace("T"," "):"—"}function ja(e){return e==="deployment"?"系统部署":"应用设置"}async function hs(e,t,a,s,o){const i=a.scope.canManageMembers,p=a.scope.canGrantOverride,$=a.scope.canViewAuditLogs,u=p||a.role==="operator",f=a.role!=="space_user";let h="profile",w=f?await t.listOrgMembers().catch(()=>[]):[],D=u?await t.listOverrides().catch(()=>[]):[],F=$?await t.listAuditLogs().catch(()=>[]):[],k="",m="all",d="all",b="all",B=!1,O=!1,Q=a.displayName,J=a.role==="org_admin"?"机构负责人":a.role==="project_admin"?"项目负责人":a.role==="operator"?"运行值守工程师":"园区空间用户",X="138-0013-8072",ce="",ee="";const me={profile:{label:"个人资料",icon:"user",subtitle:"管理个人联系信息、查看当前角色与空间授权范围，以及本人正在生效的临时提权。"},members:{label:"成员管理",icon:"users",subtitle:"严格落实唯一账号与独立认证（SR 1.1），按 4 级角色与空间范围维护机构成员。"},roles:{label:"角色权限",icon:"shield-check",subtitle:"遵循 IEC 62443-3-3 与等保 2.0 最小权限原则，写权限与读权限严格隔离。"},overrides:{label:"限时提权",icon:"key-round",subtitle:"按 IEC 62443-3-3 SR 2.1 RE 3 为运营人员授予限时修改权，必须记录审批人与事由，到期自动收回。"},audit:{label:"审计日志",icon:"file-text",subtitle:"按 SR 6.1 仅授权管理员只读访问，防篡改记录所有登录、控制、配置变更与越权拦截事件。"}};async function K(){const[V,S,q,P]=await Promise.all([t.getSession(),f?t.listOrgMembers().catch(()=>[]):Promise.resolve([]),u?t.listOverrides().catch(()=>[]):Promise.resolve([]),$?t.listAuditLogs().catch(()=>[]):Promise.resolve([])]);w=S,D=q,F=P,V&&(a=V,s(V)),Y()}function A(){const V=["profile"];return f&&V.push("members","roles"),u&&V.push("overrides"),$&&V.push("audit"),`
      <aside class="pacom-unified-rail" aria-label="机构与账户菜单">
        <div class="pacom-unified-group">
          ${V.map(S=>{const q=me[S],P=S==="overrides"?D.filter(g=>g.status==="active").length:0;return`
                <button type="button" class="pacom-unified-item" aria-current="${h===S}" data-anav="${S}">
                  ${re(q.icon,16)}
                  <span>${q.label}</span>
                  ${P>0?`<span class="pacom-badge pacom-badge--accent" style="margin-left:auto;">${P}</span>`:""}
                </button>`}).join("")}
        </div>
      </aside>
    `}function W(){return h==="members"&&i?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-invite="1">+ 邀请成员</button>':h==="overrides"&&p?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-grant="1">+ 授予限时提权</button>':h==="audit"?'<span class="pacom-badge pacom-badge--neutral">只读防篡改 ｜ SR 6.1</span>':""}function ue(){const V=a.scope.activeOverrides.filter(q=>q.status==="active"),S=a.scope.allowedZoneIds?.length?`授权 ${a.scope.allowedFloorIds.length} 个楼层 ｜ ${a.scope.allowedZoneIds.length} 个指定功能区`:`授权 ${a.scope.allowedProjectIds.length} 个项目 ｜ ${a.scope.allowedBuildingIds.length} 栋楼宇 ｜ ${a.scope.allowedFloorIds.length} 个楼层`;return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">个人资料与联系方式</h2>
          <span class="pacom-badge pacom-badge--accent">${_e(a.roleLabel)}</span>
        </div>
        <form class="pacom-settings-card" data-role="profile-form">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">唯一身份与职务</span>
              <span class="pacom-setting-desc">账号编号：${_e(a.userId)}（独立实名账号，禁止共用）</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <input class="pacom-input" style="width:140px;" name="displayName" value="${_e(Q)}" aria-label="显示姓名" required />
              <input class="pacom-input" style="width:170px;" name="jobTitle" value="${_e(J)}" aria-label="岗位职务" />
            </div>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">告警接收手机号</span>
              <span class="pacom-setting-desc">用于接收重要告警短信与审批通知</span>
            </div>
            <div class="pacom-setting-control">
              <input class="pacom-input" style="width:170px;" name="phone" value="${_e(X)}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
              <button type="submit" class="pacom-btn pacom-btn--primary">保存资料</button>
            </div>
          </div>
        </form>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">当前权限与空间范围</h2>
          <span class="pacom-row-sub">${_e(S)}</span>
        </div>
        <div class="pacom-settings-card">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">角色职责</span>
              <span class="pacom-setting-desc">${_e($n[a.role])}</span>
            </div>
            <span class="pacom-badge pacom-badge--online">${_e(a.roleLabel)}</span>
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
          ${V.length>0?V.map(q=>`
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">生效中的限时提权：${_e(ja(q.module))}（${q.durationHours}h）</span>
                        <span class="pacom-setting-desc">审批人：${_e(q.approvedBy)} ｜ 到期时间：${_e(Ya(q.expiresAt))} ｜ 事由：${_e(q.reason)}</span>
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
    `}function ve(){const V=k.trim().toLowerCase(),S=w.filter(q=>m!=="all"&&q.role!==m?!1:V?`${q.displayName} ${q.email} ${q.roleLabel} ${q.scopeSummary}`.toLowerCase().includes(V):!0);return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="memberSearch" style="width:240px;" data-member-search placeholder="搜索成员姓名或授权范围…" value="${_e(k)}" aria-label="搜索机构成员" />
          <select class="pacom-select" name="memberRoleFilter" data-role-filter aria-label="按角色筛选">
            <option value="all" ${m==="all"?"selected":""}>全部角色（${w.length}）</option>
            ${Ka.map(q=>`<option value="${q}" ${m===q?"selected":""}>${_e(ft[q])}</option>`).join("")}
          </select>
        </div>
        <span class="pacom-row-sub">显示 ${S.length} / ${w.length} 人</span>
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
              ${S.length===0?'<tr><td colspan="4"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配成员</strong><span>可调整搜索关键词或角色筛选。</span></div></td></tr>':S.map(q=>`
                        <tr>
                          <td>
                            <div style="display:flex; align-items:center; gap:10px;">
                              <span class="pacom-pop-avatar">${_e(q.displayName.slice(0,1))}</span>
                              <div>
                                <div style="font-weight:450;">${_e(q.displayName)}</div>
                                ${i?`<div class="pacom-row-sub">${_e(q.email)}</div>`:""}
                              </div>
                            </div>
                          </td>
                          <td><span class="pacom-badge ${q.role==="org_admin"||q.role==="project_admin"?"pacom-badge--accent":"pacom-badge--neutral"}">${_e(q.roleLabel)}</span></td>
                          <td><span class="pacom-row-sub">${_e(q.scopeSummary)}</span></td>
                          <td>
                            <span class="pacom-badge ${q.status==="active"?"pacom-badge--online":"pacom-badge--neutral"}">
                              ${q.status==="active"?"正常":q.status==="invited"?"邀请中":"已停用"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function we(){return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">四级标准角色说明</h2>
          <span class="pacom-row-sub">IEC 62443-3-3 SR 2.1 RE 2 ｜ 最小权限与职责分离</span>
        </div>
        <div class="pacom-settings-card">
          ${Ka.map(V=>{const S=w.filter(q=>q.role===V).length;return`
              <div class="pacom-setting-row">
                <div class="pacom-setting-meta">
                  <span class="pacom-setting-title">${_e(ft[V])}</span>
                  <span class="pacom-setting-desc">${_e($n[V])}</span>
                </div>
                <span class="pacom-badge pacom-badge--neutral">${S} 人</span>
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
                ${bs.map(V=>`
                  <tr>
                    <td><strong style="font-weight:450;">${_e(V.module)}</strong></td>
                    <td><span class="pacom-badge pacom-badge--${V.org_admin.tone}">${_e(V.org_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${V.project_admin.tone}">${_e(V.project_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${V.operator.tone}">${_e(V.operator.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${V.space_user.tone}">${_e(V.space_user.text)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function Ce(){return`
      <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="限时提权统计">
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">当前生效提权</span>
          <div class="pacom-kpi-value">${D.filter(S=>S.status==="active").length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">到期自动收回，无需人工盯守</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">可选有效期窗口</span>
          <div class="pacom-kpi-value">2 / 8 / 24<span class="pacom-kpi-unit">小时</span></div>
          <span class="pacom-kpi-delta">严格遵循 IEC 62443-3-3 SR 2.1 RE 3</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">累计审批记录</span>
          <div class="pacom-kpi-value">${D.length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">每条审批与收回同步写入审计日志</span>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">限时提权审批记录</h2>
          <span class="pacom-row-sub">${p?"可为运营人员开启「系统部署」或「应用设置」限时修改权":"展示管理员为你授予的临时提权记录"}</span>
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
                  ${p?'<th style="text-align:right;">操作</th>':""}
                </tr>
              </thead>
              <tbody>
                ${D.length===0?`<tr><td colspan="${p?6:5}"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>暂无限时提权记录</strong><span>${p?"点击右上角「+ 授予限时提权」为运营人员按需开启限时修改权。":"当前无需临时提权，「应用设置」与「系统部署」保持默认只读。"}</span></div></td></tr>`:D.map(S=>`
                          <tr>
                            <td><strong style="font-weight:450;">${_e(S.targetUserName)}</strong></td>
                            <td><span class="pacom-badge pacom-badge--accent">${_e(ja(S.module))}</span></td>
                            <td>
                              <div>${S.durationHours} 小时</div>
                              <div class="pacom-row-sub">至 ${_e(Ya(S.expiresAt))}</div>
                            </td>
                            <td>
                              <div>${_e(S.approvedBy)}</div>
                              <div class="pacom-row-sub">${_e(S.reason)}</div>
                            </td>
                            <td>
                              <span class="pacom-badge ${S.status==="active"?"pacom-badge--online":S.status==="revoked"?"pacom-badge--warning":"pacom-badge--neutral"}">
                                ${S.status==="active"?"生效中":S.status==="revoked"?"已收回":"已到期"}
                              </span>
                            </td>
                            ${p?`<td style="text-align:right;">
                                    ${S.status==="active"?`<button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-revoke-override="${_e(S.id)}">提前收回</button>`:`<span class="pacom-row-sub">${S.revokedBy?`${_e(S.revokedBy)} 收回`:"已结束"}</span>`}
                                  </td>`:""}
                          </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function xe(){const V=F.filter(S=>{if(d==="success"&&S.result!=="success"||d==="denied"&&S.result==="success")return!1;if(b!=="all"){const q=`${S.action} ${S.target}`.toLowerCase();if(b==="control"&&!q.includes("control")&&!q.includes("scene")||b==="alarm"&&!q.includes("alarm")&&!q.includes("work")||b==="deploy"&&!q.includes("deploy")&&!q.includes("plan")&&!q.includes("hardware")&&!q.includes("project")&&!q.includes("building")&&!q.includes("floor")&&!q.includes("zone")||b==="settings"&&!q.includes("settings")||b==="override"&&!q.includes("override"))return!1}return!0});return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <select class="pacom-select" name="auditActionCat" data-audit-cat aria-label="按行为类别筛选">
            <option value="all" ${b==="all"?"selected":""}>全部操作类别</option>
            <option value="override" ${b==="override"?"selected":""}>限时提权审批</option>
            <option value="control" ${b==="control"?"selected":""}>设备控制与场景</option>
            <option value="alarm" ${b==="alarm"?"selected":""}>告警与工单处置</option>
            <option value="deploy" ${b==="deploy"?"selected":""}>系统部署与空间</option>
            <option value="settings" ${b==="settings"?"selected":""}>应用设置变更</option>
          </select>
          <div class="pacom-tabs" role="tablist" aria-label="按执行结果筛选">
            <button type="button" class="pacom-tab" role="tab" aria-selected="${d==="all"}" data-audit-filter="all">全部（${F.length}）</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${d==="success"}" data-audit-filter="success">成功</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${d==="denied"}" data-audit-filter="denied">已拦截</button>
          </div>
        </div>
        <span class="pacom-row-sub">共 ${V.length} 条只读记录</span>
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
              ${V.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配审计记录</strong><span>可放宽筛选条件查看全部日志。</span></div></td></tr>':V.map(S=>`
                        <tr>
                          <td>
                            <div style="font-weight:450;">${_e(S.action)}</div>
                            ${S.detail?`<div class="pacom-row-sub">${_e(S.detail)}</div>`:""}
                          </td>
                          <td><code style="font-size:12px;">${_e(S.target)}</code></td>
                          <td>
                            <div>${_e(S.actor)}</div>
                            <div class="pacom-row-sub">${_e(ft[S.role]??S.role)}</div>
                          </td>
                          <td><span class="pacom-row-sub">${_e(Ya(S.at))}</span></td>
                          <td style="text-align:right;">
                            <span class="pacom-badge ${S.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                              ${S.result==="success"?"成功":"已拦截"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function z(){const V=[];if(B&&i){const S=a.role==="org_admin"?Ka:["project_admin","operator","space_user"];V.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="邀请成员">
          <form class="dep-modal-card" data-role="invite-form" style="width:min(460px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">邀请新成员</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">成员电子邮箱（唯一登录账号）</span>
                <input class="pacom-input" name="email" type="email" placeholder="colleague@gzlab.ac.cn" required />
              </label>
              <label class="dep-field">
                <span class="dep-field-label">分配角色</span>
                <select class="pacom-select" name="role">
                  ${S.map(q=>`<option value="${q}">${_e(ft[q])}</option>`).join("")}
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
        </div>`)}if(O&&p){const S=w.filter(q=>q.role==="operator");V.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="授予限时提权">
          <form class="dep-modal-card" data-role="grant-override-form" style="width:min(480px, 92vw);">
            <div class="dep-modal-head">
              <strong style="font-size:15px; font-weight:500;">授予运营人员限时提权（SR 2.1 RE 3）</strong>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <label class="dep-field">
                <span class="dep-field-label">目标运营人员</span>
                <select class="pacom-select" name="targetUserId" required>
                  ${S.length===0?'<option value="">暂无运营人员</option>':S.map(q=>`<option value="${_e(q.userId)}">${_e(q.displayName)}（${_e(q.email)}）</option>`).join("")}
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
              <span class="pacom-row-sub">审批人：${_e(a.displayName)}</span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${S.length===0?"disabled":""}>确认授权</button>
              </div>
            </div>
          </form>
        </div>`)}return V.join("")}function Y(){const V=me[h],S=W();e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">机构与账户</h1>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">${_e(a.roleLabel)}</span>
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${A()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head ${S?"pacom-unified-head--split":""}">
                <div class="pacom-unified-head-copy">
                  <h2 class="pacom-unified-title">${V.label}</h2>
                  <p class="pacom-unified-subtitle">${V.subtitle}</p>
                </div>
                ${S?`<div class="pacom-unified-head-actions">${S}</div>`:""}
              </div>
              ${ce?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${_e(ce)}</span></div>`:""}
              ${ee?`<div class="pacom-alert-banner">${_e(ee)}</div>`:""}
              ${h==="profile"?ue():h==="members"?ve():h==="roles"?we():h==="overrides"?Ce():xe()}
            </div>
          </div>
        </div>
      </div>
      ${z()}
    `,Le()}function Le(){e.querySelectorAll("[data-anav]").forEach(S=>{S.addEventListener("click",()=>{h=S.dataset.anav??"profile",ce="",ee="",Y()})}),e.querySelector('[data-role="profile-form"]')?.addEventListener("submit",S=>{S.preventDefault();const q=new FormData(S.currentTarget);Q=String(q.get("displayName")??"").trim()||a.displayName,J=String(q.get("jobTitle")??"").trim()||J,X=String(q.get("phone")??"").trim()||X,ce=`已保存个人资料：${Q}（${J}）｜ ${X}`,Y()}),e.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await t.logout(),window.location.hash="#login",o()}),e.querySelector("[data-open-invite]")?.addEventListener("click",()=>{B=!0,O=!1,Y()}),e.querySelector("[data-open-grant]")?.addEventListener("click",()=>{O=!0,B=!1,Y()}),e.querySelectorAll("[data-close-modals]").forEach(S=>{S.addEventListener("click",()=>{B=!1,O=!1,Y()})}),e.querySelectorAll("[data-modal-scrim]").forEach(S=>{S.addEventListener("click",q=>{q.target===S&&(B=!1,O=!1,Y())})}),e.querySelector("[data-member-search]")?.addEventListener("input",S=>{const q=S.currentTarget,P=q.selectionStart??q.value.length;k=q.value,Y();const g=e.querySelector("[data-member-search]");g&&(g.focus(),g.setSelectionRange(P,P))}),e.querySelector("[data-role-filter]")?.addEventListener("change",S=>{m=S.currentTarget.value,Y()}),e.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async S=>{S.preventDefault(),ee="";const q=new FormData(S.currentTarget);try{const P=await t.inviteOrgMember(String(q.get("email")??""),String(q.get("role")));B=!1,ce=`已向 ${P.email} 发送「${P.roleLabel}」邀请。`,await K()}catch(P){ee=P instanceof Error?P.message:String(P),Y()}}),e.querySelector('[data-role="grant-override-form"]')?.addEventListener("submit",async S=>{S.preventDefault(),ee="";const q=new FormData(S.currentTarget);try{const P=await t.grantOverride({targetUserId:String(q.get("targetUserId")??""),module:String(q.get("module")??"deployment"),durationHours:Number(q.get("durationHours")??8),reason:String(q.get("reason")??"")});O=!1,ce=`已为「${P.targetUserName}」开启「${ja(P.module)}」${P.durationHours} 小时限时修改权，到期自动收回。`,await K()}catch(P){ee=P instanceof Error?P.message:String(P),Y()}}),e.querySelectorAll("[data-revoke-override]").forEach(S=>{S.addEventListener("click",async()=>{const q=S.dataset.revokeOverride;if(q){ee="";try{const P=await t.revokeOverride(q);ce=`已提前收回「${P.targetUserName}」的「${ja(P.module)}」限时修改权。`,await K()}catch(P){ee=P instanceof Error?P.message:String(P),Y()}}})}),e.querySelectorAll("[data-audit-filter]").forEach(S=>{S.addEventListener("click",()=>{d=S.dataset.auditFilter??"all",Y()})}),e.querySelector("[data-audit-cat]")?.addEventListener("change",S=>{b=S.currentTarget.value??"all",Y()})}Y()}const ta={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},ys={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},$s={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function ws(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("modbus")||t.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":t.includes("co₂")||t.includes("co2")||t.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function Ss(e){return e.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:e.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function Ja(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("vav")||e.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:t.includes("co₂")||t.includes("co2")||e.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function Es(e,t,a){const s=new URLSearchParams(window.location.hash.split("?")[1]??""),o=s.get("alarm"),i=s.get("wo"),p=a.scope.canManageAlarms;let $=await t.getSpatialTree(),u=Ha(),f=!1,h="",w=[],D=[],F=[],k=i?"workorders":"alarms",m="all",d="all",b="all",B="impact",O=!1,Q="",J=o,X=i,ce=null,ee=null,me="resolved";const K=new Set,A=new Map,W=new Map,ue=new Map,ve=new Map;let we="",Ce="";function xe(S){const q=ve.get(S.id);if(q)return q;const P=S.id.match(/(\d+)$/),g=`WO-2026-${P?P[1]:S.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,L={estCost:"¥ 450",actualCost:S.status==="closed"?"¥ 380":"--",cmmsNo:g,assigneeGroup:"暖通运维组",tasks:[{id:`${S.id}-t1`,label:"核查设备供电与现场指示灯状态",done:S.status!=="open"},{id:`${S.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:S.status==="resolved"||S.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:S.createdAt?S.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${g}）`}]};return ve.set(S.id,L),L}async function z(){[w,D,F]=await Promise.all([t.listAlarms(R.floorId),t.listWorkOrders(R.floorId),t.getFloorDevices(R.floorId).catch(()=>[])]),D.forEach(S=>xe(S)),V()}function Y(S){if(!S)return{name:"楼层通用",zone:"E7F",dev:null};const q=F.find(P=>P.id===S)??null;return q?{name:q.name,zone:(q.logicalZoneId?$s[q.logicalZoneId]:void 0)??"E7F",dev:q}:{name:S,zone:"E7F",dev:null}}function Le(S){const q=Y(S.deviceId).dev;q&&q.connectivity==="offline"?ue.set(S.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${q.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):ue.set(S.id,{verdict:"pass",summary:`自检通过（PASS）：「${q?.name??S.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),J=S.id,V()}function V(){const S=w.filter(j=>j.status==="active"&&!A.has(j.id)),q=D.filter(j=>!xe(j).cancelled&&(j.status==="open"||j.status==="assigned"||j.status==="in_progress")),P=w.filter(j=>j.status!=="active").length+W.size,g=0,L=A.size,ne=Q.trim().toLowerCase(),Oe=w.filter(j=>{const M=A.has(j.id);if(m==="snoozed"){if(!M)return!1}else if(m==="active"){if(j.status!=="active"||M)return!1}else if(m==="acknowledged"){if(j.status!=="acknowledged")return!1}else if(M)return!1;if(b!=="all"&&j.severity!==b)return!1;if(!ne)return!0;const ae=Y(j.deviceId);return`${j.title} ${j.message} ${ae.name} ${ae.zone} ${j.deviceId}`.toLowerCase().includes(ne)}),Ke=new Map;for(const j of Oe){const M=`${j.title} ${j.message}`.toLowerCase(),ae=M.includes("离线")||M.includes("modbus")||M.includes("通信"),be=O?ae?"root-gateway-modbus":j.deviceId:j.id,ye=ae?"根因：E7F 主控网关通信链路":`根因：${Y(j.deviceId).name}`,Qe=Ke.get(be)??{rootLabel:ye,items:[]};Qe.items.push(j),Ke.set(be,Qe)}const st=Array.from(Ke.values());B==="impact"&&st.sort((j,M)=>Ja(M.items[0]).costYuan-Ja(j.items[0]).costYuan);const Ue=D.filter(j=>{const M=xe(j);if(d==="cancelled"){if(!M.cancelled)return!1}else if(M.cancelled||d==="open"&&(j.status==="resolved"||j.status==="closed")||d==="resolved"&&j.status!=="resolved"||d==="closed"&&j.status!=="closed")return!1;if(!ne)return!0;const ae=Y(j.deviceId);return`${j.title} ${j.description} ${j.id} ${M.cmmsNo} ${ae.name}`.toLowerCase().includes(ne)});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${Ua({tree:$,session:a,scope:u,activeAlarmCount:S.length,isOpen:f,searchKeyword:h})}
            </div>

            <div class="pacom-header-meta">
              ${k==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${O}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="pacom-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${a.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${a.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="pacom-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${re("refresh-cw",14)}</button>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="告警中心视图">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${k==="alarms"}" data-main-tab="alarms">实时告警（${w.length-L}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${k==="workorders"}" data-main-tab="workorders">运维工单（${D.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${k==="alarms"&&m==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${S.length}<span class="pacom-kpi-unit">条 ｜ 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${k==="workorders"&&d==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${q.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${k==="alarms"&&m==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">已闭环生效</span>
              <div class="pacom-kpi-value">${P}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="pacom-kpi-cell">
              <span class="pacom-kpi-label">关单复发待查</span>
              <div class="pacom-kpi-value" style="color:var(--pacom-status-online);">${g}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${we?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${n(we)}</span></div>`:""}
          ${Ce?`<div class="pacom-alert-banner">${n(Ce)}</div>`:""}

          ${k==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${n(Q)}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${b==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${b==="critical"?"selected":""}>严重</option>
                      <option value="major" ${b==="major"?"selected":""}>重要</option>
                      <option value="minor" ${b==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${B==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${B==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${m==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${m==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${m==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${m==="snoozed"}" data-status-pill="snoozed">已忽略（${L}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${K.size>0&&a.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${K.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${st.length} 项</span>
                  </div>
                </div>
                ${st.length===0?'<div class="pacom-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${st.map(j=>{const M=j.items[0],ae=ys[M.severity]??{label:M.severity,cls:"pacom-badge--neutral"},be=Y(M.deviceId),ye=Ss(M),Qe=Ja(M),rt=J===M.id,Fe=A.get(M.id),je=!!Fe,Te=K.has(M.id),Be=ue.get(M.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${n(M.id)}" data-check-alarm="${n(M.id)}" ${Te?"checked":""} ${!p||M.status!=="active"||je?"disabled":""} aria-label="选择 ${n(M.title)}" />
                                  </td>
                                  <td><span class="pacom-badge ${ae.cls}">${n(ae.label)}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${n(M.title)}</span>
                                      ${O?`<span class="pacom-badge pacom-badge--accent">${n(j.rootLabel)}${j.items.length>1?` ｜ 影响 ${j.items.length} 项`:""}</span>`:""}
                                      ${Be?`<span class="pacom-badge ${Be.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${n(Be.verdict.toUpperCase())}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${n(M.message)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${n(be.name)}</div>
                                    <div class="pacom-row-sub">${n(be.zone)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${n(Qe.costLabel)}</div>
                                    <div class="pacom-row-sub">${n(Qe.comfortLabel)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${n(ye.duration)}</div>
                                    <div class="pacom-row-sub" style="color:${ye.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${n(ye.trend)}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${je?"pacom-badge--neutral":M.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${je?`忽略 ${n(Fe?.duration)}`:M.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${je?`<button class="pacom-btn" data-unsnooze="${n(M.id)}" ${p?"":"disabled"}>恢复监控</button>`:`
                                            ${M.status==="active"?`<button class="pacom-btn" data-mark-actioned="${n(M.id)}" ${p?"":"disabled"}>标记已处置</button>`:""}
                                            ${M.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${n(M.id)}" ${p?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${n(M.id)}">${rt?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${rt?`
                                    <tr class="pacom-table-detail-row">
                                      <td colspan="8">
                                        <div class="pacom-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${n(ws(M))}
                                            </div>
                                            ${Fe?`<div class="pacom-info-banner">忽略周期：${n(Fe.duration)} ｜ 原因备注：${n(Fe.reason)}</div>`:""}
                                            ${Be?`
                                                <div class="pacom-banner ${Be.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${n(Be.summary)}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${Be.steps.map(ot=>`<span>${n(ot)}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${n(M.id)}</code> ｜ 设备编号 <code>${n(M.deviceId)}</code> ｜ 关联工单 ${n(M.workOrderId??"无")}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${n(M.id)}">单机自检（FTT）</button>
                                              ${!je&&M.status==="active"?`<button class="pacom-btn" data-open-snooze="${n(M.id)}" ${p?"":"disabled"}>限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${n(M.deviceId)}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${n(M.deviceId)}">定位设备 →</button>
                                            </div>
                                            ${ce===M.id?`
                                                <form data-snooze-form="${n(M.id)}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
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
                                                    <button class="pacom-btn pacom-btn--primary" type="submit" style="height:28px;" ${p?"":"disabled"}>确认忽略</button>
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
              ${(()=>{const j=X?D.find(M=>M.id===X)??null:null;if(j){const M=Y(j.deviceId),ae=xe(j),be=!!(!p||ae.cancelled||j.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${n(j.id)}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${n(j.title)}</h2>
                        <span class="pacom-badge pacom-badge--accent">${n(ae.cmmsNo)}</span>
                        ${ae.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${n(j.id)}" data-wo-status="${n(j.id)}" aria-label="更新工单状态" ${be?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(ye=>`<option value="${ye}" ${j.status===ye?"selected":""}>${ta[ye]}</option>`).join("")}
                          <option value="cancelled" ${ae.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${ee===j.id?`
                        <form data-close-wo-form="${n(j.id)}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${ta[me]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${n(ae.cause??"")}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${n(ae.solution??"")}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${n(ae.actualCost==="--"?"":ae.actualCost)}" />
                          </div>
                          <div style="display:flex; justify-content:flex-end; gap:8px;">
                            <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                            <button class="pacom-btn pacom-btn--primary" type="submit" ${p?"":"disabled"}>保存并更新状态</button>
                          </div>
                        </form>`:""}
                    <div class="pacom-wo-workbench">
                      <div style="display:flex; flex-direction:column; gap:14px;">
                        <div class="pacom-card" style="gap:10px;">
                          <strong style="font-size:14px; font-weight:500;">工单描述与现场检查任务清单</strong>
                          <div class="pacom-row-sub">${n(j.description)}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${ae.tasks.map(ye=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${n(ye.id)}" data-wo-task="${n(j.id)}" data-task-id="${n(ye.id)}" ${ye.done?"checked":""} ${be?"disabled":""} />
                                    <span>${n(ye.label)}</span>
                                  </span>
                                  ${ye.unit?`<span class="pacom-row-sub">实测：${n(ye.reading??"--")} ${n(ye.unit)}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${ae.history.map(ye=>`<span>• <span class="pacom-row-sub">${n(ye.at)}</span> — ${n(ye.text)}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${n(j.id)}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${n(ae.cmmsNo)}</code> ｜ 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${n(M.name)}（${n(M.zone)}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${n(ae.assigneeGroup)}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${n(ae.estCost)} / 实际 ${n(ae.actualCost)}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${n(ae.cause??"待完单填写")}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${n(ae.solution??"待完单填写")}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${n(j.deviceId??"")}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${n(j.deviceId??"")}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="pacom-table-card">
                  <div class="pacom-table-toolbar">
                    <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${n(Q)}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${d==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${d==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${d==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${d==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${d==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${Ue.length} 条工单</span>
                  </div>
                  ${Ue.length===0?'<div class="pacom-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${Ue.map(M=>{const ae=Y(M.deviceId),be=xe(M),ye=!!(!p||be.cancelled||M.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${n(M.title)}</span>
                                        ${be.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${n(M.description)} ｜ <code>${n(M.id)}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${n(ae.name)}</div>
                                      <div class="pacom-row-sub">${n(ae.zone)}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${n(be.cmmsNo)}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${n(be.assigneeGroup)} ｜ 预估 ${n(be.estCost)}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${n(M.id)}" data-wo-status="${n(M.id)}" aria-label="更新工单状态" ${ye?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(Qe=>`<option value="${Qe}" ${M.status===Qe?"selected":""}>${ta[Qe]}</option>`).join("")}
                                          <option value="cancelled" ${be.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${n(M.id)}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${ee===M.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${n(M.id)}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${ta[me]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${n(be.cause??"")}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${n(be.solution??"")}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${n(be.actualCost==="--"?"":be.actualCost)}" />
                                            </div>
                                            <div style="display:flex; justify-content:flex-end; gap:8px;">
                                              <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                                              <button class="pacom-btn pacom-btn--primary" type="submit" ${p?"":"disabled"}>保存并更新状态</button>
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
    `,Va(e,{onToggle:()=>{f=!f,V(),f&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:j=>{h=j,V();const M=e.querySelector("[data-global-space-search]");M&&(M.focus(),M.setSelectionRange(j.length,j.length))},onPick:j=>{u=j,f=!1,V()}}),e.querySelectorAll("[data-main-tab]").forEach(j=>{j.addEventListener("click",()=>{k=j.dataset.mainTab??"alarms",we="",V()})}),e.querySelectorAll("[data-kpi-filter]").forEach(j=>{j.addEventListener("click",()=>{const M=j.dataset.kpiFilter;we="",M==="workorders"?(k="workorders",d=d==="open"?"all":"open"):(M==="active"||M==="acknowledged")&&(k="alarms",m=m===M?"all":M),V()})}),e.querySelectorAll("[data-status-pill]").forEach(j=>{j.addEventListener("click",()=>{m=j.dataset.statusPill??"all",V()})}),e.querySelectorAll("[data-wo-pill]").forEach(j=>{j.addEventListener("click",()=>{d=j.dataset.woPill??"all",V()})}),e.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{we="",z()}),e.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{O=!O,V()}),e.querySelector("[data-severity-filter]")?.addEventListener("change",j=>{b=j.currentTarget.value,V()}),e.querySelector("[data-alarm-sort]")?.addEventListener("change",j=>{B=j.currentTarget.value??"impact",V()}),e.querySelector("[data-alarm-search]")?.addEventListener("input",j=>{const M=j.currentTarget,ae=M.selectionStart??M.value.length;Q=M.value,V();const be=e.querySelector("[data-alarm-search]");be&&(be.focus(),be.setSelectionRange(ae,ae))}),e.querySelectorAll("[data-check-alarm]").forEach(j=>{j.addEventListener("change",()=>{if(!p)return;const M=j.dataset.checkAlarm;M&&(j.checked?K.add(M):K.delete(M),V())})}),e.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{if(!p)return;Ce="";const j=Array.from(K);try{for(const M of j)await t.acknowledgeAlarm(M,"告警中心批量确认"),W.set(M,"批量确认处置");K.clear(),we=`已批量确认 ${j.length} 条告警，未来 24 小时持续校验无复发。`,await z()}catch(M){Ce=M instanceof Error?M.message:String(M),V()}}),e.querySelectorAll("[data-expand-alarm]").forEach(j=>{j.addEventListener("click",()=>{const M=j.dataset.expandAlarm??null;J=J===M?null:M,ce=null,V()})}),e.querySelectorAll("[data-expand-wo]").forEach(j=>{j.addEventListener("click",()=>{const M=j.dataset.expandWo??null;X=X===M?null:M,V()})}),e.querySelectorAll("[data-run-ftt]").forEach(j=>{j.addEventListener("click",()=>{const M=w.find(ae=>ae.id===j.dataset.runFtt);M&&Le(M)})}),e.querySelectorAll("[data-open-snooze]").forEach(j=>{j.addEventListener("click",()=>{p&&(ce=j.dataset.openSnooze??null,V())})}),e.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{ce=null,V()}),e.querySelectorAll("[data-snooze-form]").forEach(j=>{j.addEventListener("submit",M=>{if(M.preventDefault(),!p)return;const ae=j.dataset.snoozeForm;if(!ae)return;const be=new FormData(j),ye=String(be.get("duration")??"24h"),Qe=String(be.get("reason")??"").trim()||"现场核查中";A.set(ae,{duration:ye,reason:Qe}),K.delete(ae),ce=null,we=`已限时忽略该告警（${ye} ｜ ${Qe}），可在「已忽略」页签中随时恢复。`,V()})}),e.querySelectorAll("[data-unsnooze]").forEach(j=>{j.addEventListener("click",()=>{if(!p)return;const M=j.dataset.unsnooze;M&&(A.delete(M),we="已恢复该告警的实时监控。",V())})}),e.querySelectorAll("[data-go-ts]").forEach(j=>{j.addEventListener("click",()=>{const M=j.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(M)}`})}),e.querySelectorAll("[data-locate-home]").forEach(j=>{j.addEventListener("click",()=>{const M=j.dataset.locateHome??"";window.location.hash=M?`#home?device=${encodeURIComponent(M)}`:"#home"})}),e.querySelectorAll("[data-mark-actioned]").forEach(j=>{j.addEventListener("click",async()=>{if(!p)return;Ce="";const M=j.dataset.markActioned;try{await t.acknowledgeAlarm(M,"现场自处理完成（Mark Actioned）"),W.set(M,"现场自处理完成"),K.delete(M),we="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await z()}catch(ae){Ce=ae instanceof Error?ae.message:String(ae),V()}})}),e.querySelectorAll("[data-to-wo]").forEach(j=>{j.addEventListener("click",async()=>{if(!p)return;Ce="";const M=w.find(ae=>ae.id===j.dataset.toWo);if(M)try{await t.createWorkOrder({floorId:M.floorId,deviceId:M.deviceId,alarmId:M.id,title:`处置告警：${M.title}`,description:M.message}),we=`已将「${M.title}」转为运维工单并同步 CMMS。`,await z()}catch(ae){Ce=ae instanceof Error?ae.message:String(ae),V()}})}),e.querySelectorAll("[data-wo-status]").forEach(j=>{j.addEventListener("change",async()=>{if(!p)return;const M=j.dataset.woStatus,ae=j.value;if(Ce="",ae==="cancelled"){const be=D.find(ye=>ye.id===M);if(be){const ye=xe(be);ye.cancelled=!0,ye.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),we="工单已移入「已取消」分类并锁定编辑。",V()}return}if(ae==="resolved"||ae==="closed"){ee=M,me=ae,V();return}try{await t.updateWorkOrderStatus(M,ae);const be=D.find(ye=>ye.id===M);be&&xe(be).history.unshift({at:"刚刚",text:`状态变更为「${ta[ae]}」`}),we="工单状态已更新并写入审计日志。",await z()}catch(be){Ce=be instanceof Error?be.message:String(be),await z()}})}),e.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{ee=null,V()}),e.querySelectorAll("[data-close-wo-form]").forEach(j=>{j.addEventListener("submit",async M=>{if(M.preventDefault(),!p)return;const ae=j.dataset.closeWoForm,be=new FormData(j),ye=String(be.get("cause")??"").trim(),Qe=String(be.get("solution")??"").trim(),rt=String(be.get("actualCost")??"").trim();try{await t.updateWorkOrderStatus(ae,me);const Fe=D.find(je=>je.id===ae);if(Fe){const je=xe(Fe);je.cause=ye,je.solution=Qe,rt&&(je.actualCost=rt),je.history.unshift({at:"刚刚",text:`流转至「${ta[me]}」｜ 根因：${ye}`})}ee=null,X=ae,we=`工单已更新为「${ta[me]}」，根因与方案已沉淀归档。`,await z()}catch(Fe){Ce=Fe instanceof Error?Fe.message:String(Fe),V()}})}),e.querySelectorAll("[data-wo-task]").forEach(j=>{j.addEventListener("change",()=>{if(!p)return;const M=D.find(ye=>ye.id===j.dataset.woTask);if(!M)return;const be=xe(M).tasks.find(ye=>ye.id===j.dataset.taskId);be&&(be.done=j.checked),V()})})}await z()}function xs(e){return{spatial:!!(e.createProject&&e.upsertBuilding&&e.upsertFloor&&e.upsertZone),createDevice:!!e.createDeploymentDevice,manageDevice:!!(e.updateDeploymentDevice&&e.deleteDeploymentDevice),lightMarkers:!!(e.addLightMarker&&e.deleteLightMarker),meshRoles:!!e.updateMeshRole,edgeSync:!!e.syncEdgeGateway,deviceParams:!!e.saveDeviceParams,deviceGroups:!!(e.upsertDeviceGroup&&e.deleteDeviceGroup),floorDocs:!!e.attachFloorDoc,manageDocs:!!(e.deleteFloorDoc&&e.updateFloorDocCategory),manageConnections:!!(e.upsertConnection&&e.deleteConnection),restartEdge:!!e.restartEdgeService,stageSnapshot:!!e.saveDeliveryStageSnapshot,signOffDelivery:!!e.signOffDeliveryBatch,rejectDelivery:!!e.rejectDeliveryBatch,deferredFloors:!!e.toggleFloorDeferred}}function ht(e){return(e instanceof Error?e.message:String(e)).replace(/^\s*(?:400|401|403|404|409|500)\s+[A-Z_]+:\s*/i,"").trim()}const Is={project_config:{title:"项目配置",subtitle:"管理项目档案、楼宇结构、楼层 2D 平面底图、功能区划分与工程资料。",granularity:"project"},device_marking:{title:"设备标记",subtitle:"在纯白 2D 平面底图上完成设备点位标记、回路灯点布置与硬件绑定。",granularity:"floor"},device_list:{title:"设备列表",subtitle:"核查本层四态设备清单，配置硬件绑定、自治参数或执行单机与全层自检。",granularity:"floor"},device_groups:{title:"设备分组",subtitle:"维护端侧蓝牙 Mesh 自治联动组与云端业务分组，支持成员编排与群组试控。",granularity:"floor"},device_network:{title:"设备网络",subtitle:"查看无线蓝牙 Mesh 通信树与业务供能流向，执行网络体检与边缘网关同步。",granularity:"floor"},connections:{title:"系统接入",subtitle:"管理边缘网关与暖通、电表、照明等异构子系统接入通道与采集质量。",granularity:"project"},acceptance:{title:"交付验收",subtitle:"按 5 步部署门控核验各楼层就绪状态，执行全层自检并冻结交付基线快照。",granularity:"building"}},Dn={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},Kn={frozen:"已冻结",draft:"草稿",delivered:"已交付"},ka={gateway:"网关 / 适配器",lighting:"照明回路",hvac:"暖通空调",sensor:"环境传感",meter:"智能电表"},wa={lab:"实验区",office:"办公区",meeting:"会议室",corridor:"走廊 / 公区",utility:"机房 / 后勤",outdoor:"露台 / 活动区"},nn=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"建议每层启用 2–3 个 Proxy，空旷 20–30m 按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 防止广播干扰，自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度调光，自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙 / 拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关有线接入，不加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485 / 通讯管理机有线接入"}],ks={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}},Yn=[{key:"lab_std",label:"标准实验层",items:[{suffix:"东侧实验区",category:"lab"},{suffix:"西侧实验区",category:"lab"},{suffix:"核心走廊与管井",category:"corridor"}]},{key:"office_std",label:"标准办公层",items:[{suffix:"开放办公区",category:"office"},{suffix:"会议室",category:"meeting"},{suffix:"公共走廊与茶水区",category:"corridor"}]},{key:"lobby_1f",label:"首层大堂",items:[{suffix:"入口大堂与展厅",category:"corridor"},{suffix:"配电与后勤机房",category:"utility"}]},{key:"roof_plant",label:"屋面设备层",items:[{suffix:"空调主机区",category:"utility"},{suffix:"水泵与排风设备区",category:"utility"}]}],sn=["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"],As=new Set(["bacnet_ip","modbus_tcp","modbus_rtu","knx"]);function Wt(e){return!(e.category==="hvac"||e.category==="meter"||e.category!=="gateway"&&e.hardwareBinding&&As.has(e.hardwareBinding.protocol))}function Jn(e){return`mesh-${e.replace(/[^a-z0-9]/gi,"").slice(-4).toLowerCase()||"01"}`}function Ht(e,t){return e==="online"?{label:"在线",cls:"pacom-badge--online",dot:"pacom-dot--online"}:e==="degraded"?{label:"信号降级",cls:"pacom-badge--warning",dot:"pacom-dot--warning"}:e==="unknown"||!t?{label:"待入网",cls:"pacom-badge--neutral",dot:"pacom-dot--offline"}:{label:"离线",cls:"pacom-badge--critical",dot:"pacom-dot--critical"}}function Ma(e){const t=e.trim().toUpperCase();if(t==="RF"||t==="R"||t==="ROOF"||t.includes("屋面")||t.includes("屋顶")||t.includes("天面"))return 999;const a=t.match(/(-?\d+)/);if(!a)return 0;const s=Number(a[1]);return t.startsWith("B")||t.includes("地下")||t.includes("负")?-Math.abs(s):s}const _n={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,十一:11,十二:12,十三:13,十四:14,十五:15,十六:16,十七:17,十八:18,十九:19,二十:20,二十一:21,二十二:22,二十三:23,二十四:24,二十五:25},on={mesh_auto:["灯光联动组（传感-面板）","调光器群控组"],cloud_biz:["空调业务组","行政 / 标牌管控组","跨区综合管控组"]},Ds=["竣工图纸","回路图纸","点位清单","设备手册","调试记录","其他资料"];function _s(e){const t=e.toLowerCase();return t.endsWith(".xlsx")||t.endsWith(".xls")||t.endsWith(".csv")?"点位清单":t.endsWith(".doc")||t.endsWith(".docx")?"设备手册":t.endsWith(".dwg")||t.endsWith(".dxf")||t.endsWith(".png")||t.endsWith(".jpg")||t.endsWith(".jpeg")||t.endsWith(".webp")?"竣工图纸":t.endsWith(".pdf")?t.includes("手册")||t.includes("维保")?"设备手册":t.includes("回路")?"回路图纸":"竣工图纸":"其他资料"}function ln(e,t,a=""){if(a){const k=/东/.test(a),m=/西/.test(a),d=/北/.test(a),b=/南/.test(a);if(/走廊|核心|大厅|大堂|中庭|茶水|公区/.test(a))return{left:40,top:30,width:20,height:38};if(m&&d)return{left:10,top:18,width:30,height:28};if(m&&b)return{left:10,top:52,width:30,height:28};if(k&&d)return{left:60,top:18,width:30,height:28};if(k&&b)return{left:60,top:52,width:30,height:28};if(m)return{left:10,top:22,width:28,height:52};if(k)return{left:62,top:22,width:28,height:52};if(d)return{left:26,top:16,width:48,height:24};if(b)return{left:26,top:60,width:48,height:24}}const s=t<=2?Math.max(1,t):t<=4?2:3,o=Math.max(1,Math.ceil(t/s)),i=e%s,p=Math.floor(e/s),$=12,u=20,f=4,h=100-$*2-f*(s-1),w=100-u*2-f*(o-1),D=Math.max(18,Math.round(h/s)),F=Math.max(20,Math.round(w/o));return{left:Math.min(78,Math.round($+i*(D+f))),top:Math.min(74,Math.round(u+p*(F+f))),width:D,height:F}}function Rt(e){const a=e.trim().replace(/\.[a-z0-9]{1,6}$/i,""),s=a.toUpperCase();if(/(?:^|[^A-Z0-9])(RF|ROOF)(?:[^A-Z0-9]|$)/.test(s)||/屋面|屋顶|天面/.test(a))return"RF";const o=s.match(/(?:^|[^A-Z0-9])B0*(\d+)F?(?:[^A-Z0-9]|$)/);if(o)return`B${Number(o[1])}`;const i=a.match(/(?:地下|负)(0*\d+|[一二三四五六七八九十]+)(?:层|楼)?/);if(i){const f=/^\d+$/.test(i[1])?Number(i[1]):_n[i[1]];if(f)return`B${f}`}if(/首层|一层/.test(a))return"1F";const p=s.match(/(?:^|[^A-Z0-9])0*(\d+)F(?:[^A-Z0-9]|$)/);if(p)return`${Number(p[1])}F`;const $=s.match(/(?:^|[^A-Z0-9])F0*(\d+)(?:[^A-Z0-9]|$)/);if($)return`${Number($[1])}F`;const u=a.match(/(0*\d+|[一二三四五六七八九十]+)(?:层|楼)/);if(u){const f=/^\d+$/.test(u[1])?Number(u[1]):_n[u[1]];if(f)return`${f}F`}return null}function Qn(e){return new Promise((t,a)=>{const s=new FileReader;s.onload=()=>typeof s.result=="string"?t(s.result):a(new Error("无法读取图片内容")),s.onerror=()=>a(new Error(`读取文件「${e.name}」失败`)),s.readAsDataURL(e)})}async function ua(e,t=1600,a=.82){const s=await Qn(e);return!e.type.startsWith("image/")||e.size<140*1024||typeof document>"u"?s:new Promise(o=>{const i=new Image;i.onload=()=>{try{const p=Math.min(1,t/Math.max(i.naturalWidth||1,i.naturalHeight||1)),$=Math.max(1,Math.round(i.naturalWidth*p)),u=Math.max(1,Math.round(i.naturalHeight*p)),f=document.createElement("canvas");f.width=$,f.height=u;const h=f.getContext("2d");if(!h){o(s);return}h.drawImage(i,0,0,$,u);const w=f.toDataURL("image/webp",a);o(w.length>0&&w.length<s.length?w:s)}catch{o(s)}},i.onerror=()=>o(s),i.src=s})}function Cn(e){const t=e.name.match(/\b((?:FCU|VAV|AHU|PAU|GW|AP|SW|DM)-\d+)\b/i);if(t?.[1])return t[1].toUpperCase();const a=e.name.replace(/^[A-Z]?\d+F\s*|[A-Z]?RF\s*|[A-Z]?B\d+\s*/i,"").trim()||e.name.trim();return a.length>9?`${a.slice(0,8)}…`:a}function Xn(e,t){if(t.status!=="frozen")return!1;if(e.buildingDeliveries.some(i=>i.floorId===t.floorId&&i.id!==t.id&&i.status!=="draft"&&i.frozenAt>t.frozenAt)||e.planChangeAlerts[t.floorId]||e.edgeSyncByFloor[t.floorId]?.dirty)return!0;const s=e.deliverySnapshotMetaMap[t.id],o=e.floorCurrentSignatures[t.floorId];return!!(s&&s.snapshotSource!=="legacy_missing"&&o&&s.configSignature!==o)}function Cs(e,t){const a=e.floorCurrentSignatures[t];if(!a||e.planChangeAlerts[t]||e.edgeSyncByFloor[t]?.dirty)return null;for(const s of e.buildingDeliveries){if(s.floorId!==t||s.status==="draft")continue;const o=e.deliverySnapshotMetaMap[s.id];if(o&&o.snapshotSource!=="legacy_missing"&&o.configSignature===a)return{batch:s,status:s.status==="delivered"?"delivered":"frozen"}}return null}function Na(e,t){const a=e.tree.floors.find(k=>k.id===t),s=e.buildingDevicesByFloor.get(t)??(t===e.activeFloorId?e.floorDevices:[]),o=s.length===0&&e.deferredFloorIds.has(t),i=!!a?.plan,p=s.filter(k=>!!k.planPoint).length,$=s.filter(k=>k.physicalInstalled&&!!k.hardwareBinding).length,u=s.filter(k=>k.connectivity==="online").length,h=!!(e.edgeSyncByFloor[t]??(t===e.activeFloorId?e.edgeSync:void 0))?.dirty,w=e.planChangeAlerts[t]??null,D=!h&&!w?e.floorFttRecords[t]??null:null,F=[];return o||(i||F.push("待上传平面底图"),s.length===0&&F.push("本层尚无登记设备"),s.length>0&&p<s.length&&F.push(`未标记 ${s.length-p} 台`),s.length>0&&$<s.length&&F.push(`待绑定或复核 ${s.length-$} 台`),s.length>0&&u<s.length&&F.push(`待入网或离线 ${s.length-u} 台`),h&&F.push("待同步边缘配置"),w&&F.push("换图后待核对点位"),s.length>0&&!D&&F.push("尚未通过全层自检（FTT）")),{hasPlan:i,deviceCount:s.length,placedCount:p,boundVerifiedCount:$,onlineCount:u,syncDirty:h,planAlert:w,fttRecord:D,deferred:o,blockers:F,readyForFormalFreeze:!o&&s.length>0&&F.length===0}}function Ln(e,t){const a=e.status!=="connected",s=t.filter(o=>o.hardwareBinding?.protocol===e.protocol);return s.length>0?s.map(o=>{const i=o.connectivity==="offline"||a;return{pointName:o.category==="hvac"?"送风温度 / 阀门开度":o.category==="lighting"?"回路开关 / 亮度反馈":o.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:o.name,value:i?"无上报":o.category==="hvac"?"23.4°C ｜ 62%":o.category==="lighting"?"开启 ｜ 80%":o.category==="sensor"?"23.2°C ｜ 640 ppm":"负载 24% ｜ 18ms",interval:"60s",lastSeen:i?"46 分钟前":"12 秒前",quality:i?o.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${e.protocol.toUpperCase()} 采集通道汇总点`,deviceName:e.name,value:a?"采样延迟":"正常上报",interval:"60s",lastSeen:a?"38 分钟前":"9 秒前",quality:a?"delayed":"online"}]}function Wa(e,t){const a=new Set(t.map(o=>Rt(o.name)??o.name.toUpperCase())),s=[];for(let o=1;o<=e.aboveFloors;o+=1){const i=`${o}F`;a.has(i)||s.push({kind:"above",level:o,name:i})}for(let o=1;o<=e.belowFloors;o+=1){const i=`B${o}`;a.has(i)||s.push({kind:"below",level:-o,name:i})}return e.hasRoof&&!a.has("RF")&&s.push({kind:"roof",level:99,name:"RF"}),s}function At(e,t){return`<button type="button" class="dep-info-btn" data-dep-info="${n(t)}" aria-label="${n(e)}" aria-expanded="false">${re("info",14)}</button>`}function na(e,t,a="layers"){const s=!e||!t,o=e?t?"":"待后端空间建档接口对接":"当前角色为只读权限";return`
    <div class="dep-empty-card">
      <div class="dep-empty-icon">${re(a,20)}</div>
      <strong style="font-size:16px; line-height:24px; font-weight:500; color:var(--pacom-text-primary);">尚未创建任何项目</strong>
      <span class="pacom-row-sub" style="max-width:460px;">按「创建项目 → 添加楼宇与楼层 → 上传 2D 平面底图」完成空间建档后，即可开展设备标记、组网同步与交付验收。</span>
      <div class="dep-empty-steps">
        <span>1. 创建项目</span>
        <span>→</span>
        <span>2. 添加楼宇与楼层</span>
        <span>→</span>
        <span>3. 上传平面底图</span>
      </div>
      <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${s?`disabled title="${n(o)}"`:""}>+ 创建第一个项目</button>
    </div>`}function Ls(e,t,a){return e?t?"":`disabled title="${n(a)}"`:'disabled title="当前角色为只读权限"'}function Fs(e){const{tree:t,canEdit:a,caps:s,connections:o}=e;if(t.projects.length===0)return na(a,s.spatial,"plug");const i=Ls(a,s.manageConnections,"待后端系统接入写入接口对接"),p=o.reduce((m,d)=>m+d.collectedPoints,0),$=o.reduce((m,d)=>m+d.calculatedPoints,0),u=o.filter(m=>m.status==="connected").length,f=o.filter(m=>m.status!=="connected"),h=e.connSearch.trim().toLowerCase(),w=o.filter(m=>!(e.connStatusFilter!=="all"&&m.status!==e.connStatusFilter||h&&!`${m.name} ${m.protocol} ${m.endpoint}`.toLowerCase().includes(h))),D=Array.from(e.buildingDevicesByFloor.values()).flat(),F=D.length>0?D:e.floorDevices,k=e.connViewMode==="topology"?w.find(m=>m.id===e.selectedTopoConnId)??w[0]??null:null;return`
    <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">已连通通道</span>
        <div class="pacom-kpi-value">${u}<span class="pacom-kpi-unit">/ ${o.length}</span></div>
        <span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">通道连通率 ${At("通道连通率口径","按「已连通通道数 / 当前项目总接入通道数」计算，独立于单点位采集质量；点击行内「点位质量」可查看逐点读数与延迟。")}</span>
        <div class="pacom-kpi-value">${o.length?`${Math.round(u/o.length*100)}<span class="pacom-kpi-unit">%</span>`:"—"}</div>
        <span class="pacom-kpi-delta">${o.length?`分母：${o.length} 条已建通道`:"尚未配置接入通道"}</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">原始采集点 ${At("原始采集点说明","直接通过 BACnet / Modbus / DALI / MQTT 等协议从现场网关或子系统读取的实时遥测点位数量。")}</span>
        <div class="pacom-kpi-value">${p}<span class="pacom-kpi-unit">点</span></div>
        <span class="pacom-kpi-delta">协议直采实时遥测</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">衍生计算点 ${At("衍生计算点说明","基于原始采集点聚合计算生成的虚拟指标（如分区平均温度、能耗累计、碳排换算），与原始点位独立计数。")}</span>
        <div class="pacom-kpi-value">${$}<span class="pacom-kpi-unit">点</span></div>
        <span class="pacom-kpi-delta">能耗与聚合虚拟点位</span>
      </div>
    </div>

    ${f.length>0?`<div class="pacom-banner pacom-banner--critical">
            <div class="pacom-banner-text">
              <span class="pacom-banner-title">检测到 ${f.length} 条采集通道通信降级（${n(f.map(m=>m.name).join("、"))}）</span>
              <span class="pacom-banner-sub">建议优先核查局域网 UDP/TCP 端口冲突、RS485 终端电阻与从站地址。</span>
            </div>
          </div>`:""}

    <div class="pacom-log-toolbar">
      <div class="pacom-log-filters">
        <div class="pacom-tabs" role="tablist" aria-label="系统接入视图切换">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${e.connViewMode==="list"}" data-conn-view="list">连接清单</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${e.connViewMode==="topology"}" data-conn-view="topology">接入拓扑</button>
        </div>
        <input class="pacom-input" name="connSearch" style="width:220px;" data-conn-search placeholder="搜索通道名称、协议或端点…" value="${n(e.connSearch)}" aria-label="搜索系统接入通道" />
        <select class="pacom-select" name="connStatusFilter" data-conn-status-filter aria-label="按连通状态筛选">
          <option value="all" ${e.connStatusFilter==="all"?"selected":""}>全部状态（${o.length}）</option>
          <option value="connected" ${e.connStatusFilter==="connected"?"selected":""}>已连通（${u}）</option>
          <option value="degraded" ${e.connStatusFilter==="degraded"?"selected":""}>通信降级（${o.filter(m=>m.status==="degraded").length}）</option>
          <option value="disconnected" ${e.connStatusFilter==="disconnected"?"selected":""}>已断开（${o.filter(m=>m.status==="disconnected").length}）</option>
        </select>
      </div>
      <span class="pacom-row-sub">显示 ${w.length} / ${o.length} 条通道</span>
    </div>

    ${e.connViewMode==="list"?`
        <div class="pacom-table-card" style="overflow:visible;">
          <div class="pacom-table-wrap dep-conn-table-wrap">
            <table class="pacom-table dep-conn-table">
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
                ${w.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:36px 16px;"><strong>暂无匹配接入通道</strong><span>可调整筛选条件或点击右上角「+ 新增接入通道」。</span></div></td></tr>':w.map(m=>{const d=Dn[m.status]??{label:m.status,cls:"pacom-badge--neutral"},b=e.expandedConnId===m.id,B=e.connMenuOpenId===m.id,O=b?Ln(m,F):[],Q=m.buildingId?t.buildings.find(ee=>ee.id===m.buildingId)?.name:"",J=m.floorId?t.floors.find(ee=>ee.id===m.floorId)?.name:"",X=Q?J?`${Q} ${J}`:`${Q} 整栋`:"全项目通用",ce=m.collectedPoints+m.calculatedPoints;return`
                            <tr>
                              <td>
                                <strong>${n(m.name)}</strong>
                                <div class="pacom-row-sub">${n(X)}</div>
                              </td>
                              <td><span class="pacom-badge pacom-badge--neutral">${m.protocol.toUpperCase()}</span></td>
                              <td><code style="font-size:12px; white-space:nowrap;">${n(m.endpoint)}</code></td>
                              <td style="white-space:nowrap; font-variant-numeric:tabular-nums;">${ce===0?'<span class="pacom-row-sub">待映射</span>':`${m.collectedPoints} 采 ｜ ${m.calculatedPoints} 算`}</td>
                              <td style="white-space:nowrap;">
                                <span class="pacom-badge ${d.cls}">${d.label}</span>
                              </td>
                              <td>
                                <div style="display:flex; justify-content:flex-end; align-items:center; gap:6px; white-space:nowrap;">
                                  <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${n(m.id)}">${b?"收起":"点位"}</button>
                                  <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${n(m.id)}">测通</button>
                                  <div class="dep-row-menu-wrap">
                                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="padding:0 7px;" data-toggle-conn-row-menu="${n(m.id)}" aria-label="更多通道操作" aria-expanded="${B}">
                                      ${re("more-horizontal",14)}
                                    </button>
                                    ${B?`
                                        <div class="dep-row-menu" role="menu">
                                          <button type="button" class="dep-row-menu-item" role="menuitem" data-copy-endpoint="${n(m.id)}" data-endpoint-val="${n(m.endpoint)}">${e.copiedEndpointId===m.id?"已复制端点":"复制端点"}</button>
                                          <button type="button" class="dep-row-menu-item" role="menuitem" data-edit-conn="${n(m.id)}" ${i}>编辑通道</button>
                                          <button type="button" class="dep-row-menu-item dep-row-menu-item--danger" role="menuitem" data-del-conn="${n(m.id)}" ${i}>删除通道</button>
                                        </div>`:""}
                                  </div>
                                </div>
                              </td>
                            </tr>
                            ${b?`
                                <tr class="pacom-table-detail-row">
                                  <td colspan="6">
                                    <div style="display:flex; flex-direction:column; gap:8px;">
                                      <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                                        <strong style="font-size:14px; font-weight:450;">传感器 / 子设备采集质量明细（${n(m.name)}）</strong>
                                        <span class="pacom-row-sub">${e.isDemoMode?"演示模拟采集态 ｜ ":""}在线正常 ｜ 延迟 &gt;30m ｜ 断流 &gt;3×间隔</span>
                                      </div>
                                      ${O.map(ee=>{const me=F.find(K=>K.name===ee.deviceName);return`
                                            <div class="pacom-receipt-item">
                                              <span><strong>${n(ee.deviceName)}</strong> ｜ ${n(ee.pointName)}</span>
                                              <span style="display:inline-flex; align-items:center; gap:8px;">
                                                <span class="pacom-row-sub">当前 ${n(ee.value)} ｜ ${n(ee.lastSeen)}</span>
                                                <span class="pacom-badge ${ee.quality==="online"?"pacom-badge--online":ee.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                                  ${ee.quality==="online"?"在线正常":ee.quality==="delayed"?"延迟 >30m":"断流"}
                                                </span>
                                                ${me?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-conn-jump-dev="${n(me.id)}" data-conn-jump-floor="${n(me.floorId)}">定位设备 →</button>`:""}
                                              </span>
                                            </div>`}).join("")}
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
            ${F.filter(m=>m.category==="gateway").length===0?'<div class="pacom-row-sub">当前范围暂未登记边缘网关。</div>':F.filter(m=>m.category==="gateway").map(m=>{const d=Ht(m.connectivity,!!m.hardwareBinding);return`
                        <button type="button" class="dep-topo-node ${m.connectivity==="offline"?"is-issue":""}" data-conn-jump-dev="${n(m.id)}" data-conn-jump-floor="${n(m.floorId)}">
                          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                            <strong>${n(m.name)}</strong>
                            <span class="pacom-badge ${d.cls}">${d.label}</span>
                          </div>
                          <span class="pacom-row-sub">${n(m.hardwareBinding?.networkAddress??"未绑定地址")}</span>
                        </button>`}).join("")}
          </div>
          <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${re("chevron-right",12)}</span></div>
          <div class="dep-topo-col">
            <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 协议接入通道（${w.length}）</strong>
            ${w.length===0?'<div class="pacom-row-sub">暂无匹配接入通道。</div>':w.map(m=>{const d=Dn[m.status]??{label:m.status,cls:"pacom-badge--neutral"},b=k?.id===m.id;return`
                        <button type="button" class="dep-topo-node ${m.status!=="connected"?"is-issue":""}" style="${b?"box-shadow:0 0 0 1.5px var(--pacom-text-primary);":""}" data-select-topo-conn="${n(m.id)}">
                          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                            <strong>${n(m.name)}</strong>
                            <span class="pacom-badge ${d.cls}">${d.label}</span>
                          </div>
                          <span class="pacom-row-sub">${m.protocol.toUpperCase()} ｜ ${n(m.endpoint)}</span>
                        </button>`}).join("")}
          </div>
          <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${re("chevron-right",12)}</span></div>
          <div class="dep-topo-col">
            <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 点位采集汇总</strong>
            ${w.length===0?'<div class="pacom-row-sub">无已映射点位。</div>':w.map(m=>`
                      <button type="button" class="dep-topo-node ${m.status!=="connected"?"is-issue":""}" style="${k?.id===m.id?"box-shadow:0 0 0 1.5px var(--pacom-text-primary);":""}" data-select-topo-conn="${n(m.id)}">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong>${n(m.name)}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${m.collectedPoints+m.calculatedPoints} 点</span>
                        </div>
                        <span class="pacom-row-sub">原始采集 ${m.collectedPoints} 点 ｜ 衍生计算 ${m.calculatedPoints} 点</span>
                      </button>`).join("")}
          </div>
        </div>
        ${k?(()=>{const m=Ln(k,F),d=k.buildingId?t.buildings.find(O=>O.id===k.buildingId)?.name:"",b=k.floorId?t.floors.find(O=>O.id===k.floorId)?.name:"",B=d?b?`${d} ${b}`:`${d} 整栋`:"全项目通用";return`
                  <div class="pacom-card" style="padding:16px 20px; gap:12px;">
                    <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                      <div>
                        <strong style="font-size:15px; font-weight:500;">通道明细：${n(k.name)}</strong>
                        <div class="pacom-row-sub">${k.protocol.toUpperCase()} ｜ ${n(k.endpoint)} ｜ 服务范围：${n(B)}</div>
                      </div>
                      <div style="display:inline-flex; gap:8px;">
                        <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${n(k.id)}">连通测通</button>
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-conn="${n(k.id)}" ${i}>编辑通道</button>
                      </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:6px;">
                      ${m.map(O=>{const Q=F.find(J=>J.name===O.deviceName);return`
                            <div class="pacom-receipt-item">
                              <span><strong>${n(O.deviceName)}</strong> ｜ ${n(O.pointName)}</span>
                              <span style="display:inline-flex; align-items:center; gap:8px;">
                                <span class="pacom-row-sub">${n(O.value)} ｜ ${n(O.lastSeen)}</span>
                                <span class="pacom-badge ${O.quality==="online"?"pacom-badge--online":O.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                  ${O.quality==="online"?"正常":O.quality==="delayed"?"延迟":"断流"}
                                </span>
                                ${Q?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-conn-jump-dev="${n(Q.id)}" data-conn-jump-floor="${n(Q.floorId)}">定位设备 →</button>`:""}
                              </span>
                            </div>`}).join("")}
                    </div>
                  </div>`})():""}`}
  `}function js(e){const{tree:t,canEdit:a,caps:s}=e;if(t.projects.length===0)return na(a,s.spatial,"clipboard-check");const o=t.buildings.find(A=>A.id===e.activeBuildingId)??null,i=e.activeBuildingId?e.sortedBuildingFloors(e.activeBuildingId):[],p=new Map(i.map(A=>[A.id,Na(e,A.id)])),$=i.filter(A=>!p.get(A.id)?.deferred),u=i.length-$.length,f=$.filter(A=>!!A.plan).length,h=$.flatMap(A=>e.buildingDevicesByFloor.get(A.id)??[]),w=h.filter(A=>!!A.planPoint).length,D=h.filter(A=>A.connectivity==="online").length,F=h.filter(A=>A.connectivity==="unknown"||!A.hardwareBinding&&A.connectivity!=="offline").length,k=Math.max(0,h.length-D-F),m=h.filter(A=>A.physicalInstalled&&!!A.hardwareBinding).length,d=$.filter(A=>(e.buildingDevicesByFloor.get(A.id)?.length??0)>0),b=d.filter(A=>!e.edgeSyncByFloor[A.id]?.dirty).length,B=d.length-b,O=$.filter(A=>!!e.planChangeAlerts[A.id]).length,Q=d.filter(A=>!!p.get(A.id)?.fttRecord).length,J=$.filter(A=>!p.get(A.id)?.readyForFormalFreeze),X=e.acceptanceFilter==="active"&&d.length===0?"all":e.acceptanceFilter,ce=X==="active"?d:X==="pending"?J:i,ee=[{num:1,label:"项目与底图",nav:"project_config",val:`${f}`,unit:`/ ${$.length} 层`,done:$.length>0&&f===$.length,warn:!1,sub:$.length===0?"本期暂无纳入楼层":f===$.length?u>0?`全部就绪（另 ${u} 层暂缓）`:"本期底图全部就绪":`尚缺 ${$.length-f} 层底图 →`},{num:2,label:"设备标记",nav:"device_marking",val:`${w}`,unit:`/ ${h.length} 台`,done:h.length>0&&w===h.length&&O===0,warn:O>0,sub:O>0?`${O} 层换图待核对 →`:h.length===0?"待登记设备 →":h.length-w>0?`未标记 ${h.length-w} 台 →`:"坐标全部核对就绪"},{num:3,label:"入网在线",nav:"device_network",val:`${D}`,unit:`/ ${h.length} 台`,done:h.length>0&&D===h.length,warn:k>0,sub:h.length===0?"待登记设备 →":k>0?`${k} 台离线${F>0?` ｜ ${F} 待入网`:""} →`:F>0?`${F} 台待绑定入网 →`:"全量在线可达"},{num:4,label:"边缘同步",nav:"device_network",val:`${b}`,unit:`/ ${d.length} 层`,done:d.length>0&&B===0,warn:B>0,sub:d.length===0?"待部署实施层 →":B>0?`${B} 层待同步 →`:`已同步 ｜ v${e.edgeSync.version}`},{num:5,label:"复核自检",nav:"device_list",val:`${m}`,unit:`/ ${h.length} 台`,done:h.length>0&&m===h.length&&Q===d.length,warn:!1,sub:h.length===0?"待登记设备 →":m<h.length?`待复核 ${h.length-m} 台 →`:Q<d.length?`已复核 ｜ 待自检 ${d.length-Q} 层`:"全部复核并通过自检"}],me=ee.findIndex(A=>!A.done),K=e.batchFttResult&&e.batchFttResult.buildingId===e.activeBuildingId&&!e.planChangeAlerts[e.batchFttResult.floorId]&&!e.edgeSyncByFloor[e.batchFttResult.floorId]?.dirty&&(e.batchFttResult.failed>0||e.floorFttRecords[e.batchFttResult.floorId])?e.batchFttResult:null;return`
    <div class="dep-pipeline-bar" role="region" aria-label="整栋 5 步部署门控推进条">
      ${ee.map((A,W)=>{const ue=W===me;return`
            <button type="button" class="${["dep-pipeline-step",A.done?"is-done":"",A.warn?"is-warn":"",ue?"is-focus":""].filter(Boolean).join(" ")}" data-dep-nav="${A.nav}">
              <div class="dep-pipeline-step-head">
                <span class="dep-pipeline-num">${A.done?re("check",12):A.num}</span>
                <span>${A.label}</span>
              </div>
              <div class="dep-pipeline-val">${A.val}<span class="pacom-kpi-unit">${A.unit}</span></div>
              <span class="dep-pipeline-sub">${A.sub}</span>
            </button>`}).join("")}
    </div>

    ${K?`<div class="pacom-banner ${K.failed===0?"pacom-banner--ok":"pacom-banner--critical"}">
            <div class="pacom-banner-text">
              <span class="pacom-banner-title">最近全层自检（${e.isDemoMode?"演示模拟回读":"FTT"} ｜ ${n(K.floorName)} ｜ ${K.ranAt}）</span>
              <span class="pacom-banner-sub">通过 ${K.passed}/${K.total} 台${K.failedNames.length?` ｜ 异常：${n(K.failedNames.join("、"))}`:e.isDemoMode?" ｜ 演示环境验证通过，允许正式冻结":" ｜ 已完成状态回读与安全复位"}</span>
            </div>
            <button type="button" class="pacom-drawer-close" data-dismiss-ftt="1" aria-label="关闭自检提示">${re("x",14)}</button>
          </div>`:""}

    <section class="pacom-section">
      <div class="pacom-section-head">
        <div>
          <h2 class="pacom-section-title">楼层 × 工序交付门控矩阵</h2>
          <span class="pacom-row-sub">点击单元格直达该层修复；零设备预留层可标记「本期不纳入」以准确统计验收进度</span>
        </div>
        ${h.length>0||e.showEmptyBuildingMatrix?`
            <div class="pacom-tabs" role="tablist" aria-label="验收楼层筛选">
              <button type="button" class="pacom-tab" role="tab" aria-selected="${X==="active"}" data-acc-filter="active">实施中 ${d.length}</button>
              <button type="button" class="pacom-tab" role="tab" aria-selected="${X==="pending"}" data-acc-filter="pending">待补缺项 ${J.length}</button>
              <button type="button" class="pacom-tab" role="tab" aria-selected="${X==="all"}" data-acc-filter="all">全部楼层 ${i.length}</button>
            </div>`:""}
      </div>

      ${h.length===0&&!e.showEmptyBuildingMatrix?`
          <div class="dep-empty-card">
            <div class="dep-empty-icon">${re("map-pin",20)}</div>
            <strong style="font-size:16px; line-height:24px; font-weight:500; color:var(--pacom-text-primary);">${n(o?.name??"当前楼宇")} 尚未开始设备部署</strong>
            <span class="pacom-row-sub">本栋已建 ${i.length} 层（${f}/${$.length} 层底图已就绪），当前暂无已登记设备。请先前往「设备标记」登记并布置本栋设备，完成后即可回此页执行自检与正式冻结。</span>
            <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
              <button type="button" class="pacom-btn pacom-btn--primary" data-dep-nav="device_marking">前往设备标记 →</button>
              <button type="button" class="pacom-btn" data-toggle-empty-matrix="1">展开全部 ${i.length} 层底图清单</button>
            </div>
          </div>`:`
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
                  ${ce.length===0?'<tr><td colspan="7"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>当前筛选无楼层</strong><span>可切换至「全部楼层」查看整栋状态，或在「项目配置」中建档。</span></div></td></tr>':ce.map(A=>{const W=e.buildingDevicesByFloor.get(A.id)??[],ue=t.zones.filter(V=>V.floorId===A.id),ve=p.get(A.id),we=W.some(V=>V.connectivity!=="online"&&!Wt(V)),Ce=we?"device_list":"device_network",xe=Cs(e,A.id),z=e.buildingDeliveries.find(V=>V.floorId===A.id&&V.status!=="draft"),Y=ve.deferred?"本期不纳入":xe?.status==="delivered"?"已交付":xe?.status==="frozen"?"待签收":ve.readyForFormalFreeze?"可正式冻结":ve.planAlert?"换图待核对":W.length>0?!ve.fttRecord&&!ve.syncDirty&&ve.placedCount===W.length&&ve.boundVerifiedCount===W.length&&ve.onlineCount===W.length?"待执行自检":"实施中":"待配置",Le=ve.deferred?"pacom-badge--neutral":xe?.status==="delivered"||ve.readyForFormalFreeze?"pacom-badge--online":xe?.status==="frozen"?"pacom-badge--accent":W.length>0?"pacom-badge--warning":"pacom-badge--neutral";return`
                              <tr style="${ve.deferred?"opacity:0.65;":""}">
                                <td>
                                  <strong>${n(A.name)}</strong>
                                  <div class="pacom-row-sub">${A.areaSqm?`${A.areaSqm} m²`:"待补面积"}${z?` ｜ ${n(z.versionTag)}`:""}</div>
                                </td>
                                <td>
                                  <button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-matrix-floor="${n(A.id)}">
                                    <span class="pacom-dot ${ve.planAlert?"pacom-dot--warning":ve.hasPlan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                    <span>${ve.planAlert?"换图待核对":ve.hasPlan?`已传图 ｜ ${ue.length} 区`:"待传底图"}</span>
                                  </button>
                                </td>
                                <td>
                                  <button type="button" class="dep-matrix-btn" data-matrix-nav="device_marking" data-matrix-floor="${n(A.id)}">
                                    <span class="pacom-dot ${W.length>0&&ve.placedCount===W.length&&!ve.planAlert?"pacom-dot--online":W.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span>
                                    <span>${W.length>0?`${ve.placedCount}/${W.length}`:"未标记"}</span>
                                  </button>
                                </td>
                                <td>
                                  <button type="button" class="dep-matrix-btn" data-matrix-nav="${Ce}" data-matrix-floor="${n(A.id)}" ${we?'data-matrix-offline="1"':""}>
                                    <span class="pacom-dot ${W.length>0&&ve.onlineCount===W.length?"pacom-dot--online":W.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span>
                                    <span>${W.length>0?`${ve.onlineCount}/${W.length}`:"—"}</span>
                                  </button>
                                </td>
                                <td>
                                  <button type="button" class="dep-matrix-btn" data-matrix-nav="device_list" data-matrix-floor="${n(A.id)}">
                                    <span class="pacom-dot ${W.length>0&&ve.boundVerifiedCount===W.length?"pacom-dot--online":W.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span>
                                    <span>${W.length>0?`${ve.boundVerifiedCount}/${W.length}`:"—"}</span>
                                  </button>
                                </td>
                                <td>
                                  <span class="pacom-badge ${Le}" title="${n(ve.blockers.join("；"))}">${Y}</span>
                                </td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; gap:6px; white-space:nowrap;">
                                    ${W.length===0&&s.deferredFloors?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-toggle-defer-floor="${n(A.id)}" data-defer-next="${ve.deferred?"0":"1"}" ${a?"":'disabled title="当前角色为只读权限"'}>${ve.deferred?"恢复纳入":"暂缓本期"}</button>`:""}
                                    ${W.length>0?`
                                        <button type="button" class="pacom-btn pacom-btn--sm" data-floor-ftt="${n(A.id)}" ${a?"":'disabled title="当前角色为只读权限"'}>自检</button>
                                        ${xe?.status==="delivered"?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-open-snapshot="${n(xe.batch.id)}">查看交付</button>`:xe?.status==="frozen"?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-open-snapshot="${n(xe.batch.id)}" ${a?"":'disabled title="当前角色为只读权限"'}>去签收</button>`:`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-open-freeze-floor="${n(A.id)}" ${a?"":'disabled title="当前角色为只读权限"'}>${ve.readyForFormalFreeze?"冻结":"留档"}</button>`}`:""}
                                  </div>
                                </td>
                              </tr>`}).join("")}
                </tbody>
              </table>
            </div>
            ${h.length===0?`<div class="pacom-table-footer" style="display:flex; justify-content:space-between; align-items:center;">
                     <span>本栋暂无设备；可对预留层标记「暂缓本期」或直接前往设备标记</span>
                     <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-toggle-empty-matrix="1">收起空楼层清单</button>
                   </div>`:""}
          </div>`}
    </section>

    <section class="pacom-section">
      <div class="pacom-section-head">
        <h2 class="pacom-section-title" style="display:inline-flex; align-items:center; gap:6px;">
          <span>整栋交付冻结与签收记录</span>
          ${At("冻结、留档与签收说明","存在待补项时仅可保存「阶段留档」；满足全部 5 步门控并通过最新自检后可生成「已冻结」正式基线；正式基线可查看逐设备不可变快照并由接收方执行「签收交付（已交付）」。")}
        </h2>
        <span class="pacom-row-sub">本栋共 ${e.buildingDeliveries.length} 条记录</span>
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
                <th>状态</th>
                <th style="text-align:right;">追溯与签收</th>
              </tr>
            </thead>
            <tbody>
              ${e.buildingDeliveries.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>本栋暂无交付冻结或阶段留档记录</strong><span>完成设备复核与自检后，点击右上角「交付冻结」生成基线快照。</span></div></td></tr>':e.buildingDeliveries.map(A=>{const W=t.floors.find(Ce=>Ce.id===A.floorId)?.name??A.floorId,ue=Xn(e,A),ve=ue?"已过期":A.status==="draft"?"阶段留档":A.status==="frozen"?"待签收":Kn[A.status]??A.status,we=ue?"pacom-badge--neutral":A.status==="delivered"?"pacom-badge--online":A.status==="draft"?"pacom-badge--warning":"pacom-badge--accent";return`
                          <tr style="${ue?"opacity:0.72;":""}">
                            <td>
                              <div style="font-weight:450;">${n(A.versionTag)}</div>
                              <div class="pacom-row-sub"><code>${n(A.id)}</code></div>
                            </td>
                            <td>${n(W)}</td>
                            <td><strong>${A.verifiedCount}</strong> / ${A.deviceCount} 台</td>
                            <td>
                              <div>${n(A.frozenBy)}</div>
                              <div class="pacom-row-sub">${n(A.note??"—")}</div>
                            </td>
                            <td><span class="pacom-badge ${we}" ${ue?'title="现场配置、图纸或点位已变更，该历史基线已由新版替代"':""}>${ve}</span></td>
                            <td>
                              <div style="display:flex; justify-content:flex-end; gap:6px; white-space:nowrap;">
                                ${A.status==="frozen"&&!ue&&s.signOffDelivery&&a?`<button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-open-snapshot="${n(A.id)}">去签收</button>`:`<button type="button" class="pacom-btn pacom-btn--sm" data-open-snapshot="${n(A.id)}">${A.status==="delivered"?"查看交付":"查看快照"}</button>`}
                              </div>
                            </td>
                          </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `}function xt(e){return e?`<div class="dep-modal-error" role="alert">${n(e)}</div>`:""}function Ms(e){const{tree:t,canEdit:a,caps:s}=e,o=[],i=t.projects.find(u=>u.id===e.activeProjectId)??t.projects[0]??null,p=t.buildings.find(u=>u.id===e.activeBuildingId)??(i?t.buildings.find(u=>u.projectId===i.id):null)??null;if(e.showNewProjectModal){const u=e.projFormDraft;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建项目">
        <form class="dep-modal-card" data-create-project="1">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">新建项目</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${xt(e.modalError)}
            <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:12px; background:var(--pacom-surface-primary); box-shadow:inset 0 0 0 var(--hw) var(--pacom-border-subtle);">
              <img src="${n(e.newProjCoverDataUrl??"./media/gzlab.jpg")}" alt="项目封面预览" style="width:76px; height:48px; object-fit:cover; border-radius:8px;" />
              <div style="flex:1; min-width:0;">
                <div style="font-size:14px; font-weight:450;">项目封面图（选填）</div>
                <div class="pacom-row-sub">支持 JPG / PNG / WebP，未上传将使用默认封面</div>
              </div>
              <label class="pacom-btn pacom-btn--sm" style="cursor:${!a||!s.spatial?"not-allowed":"pointer"}; opacity:${!a||!s.spatial?"0.45":"1"};">
                <span>${e.newProjCoverDataUrl?"更换":"上传"}</span>
                <input type="file" name="newProjCover" accept="image/*" data-stage-new-proj-cover="1" style="display:none;" ${!a||!s.spatial?"disabled":""} />
              </label>
            </div>
            <div class="dep-param-grid">
              <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" placeholder="如：广实3号园" value="${n(u?.name??"")}" required /></label>
              <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="${n(u?.city??"广州市")}" /></label>
              <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" placeholder="街道与门牌号" value="${n(u?.address??"")}" /></label>
              <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" placeholder="如：113.3824" value="${n(u?.lng??"")}" /></label>
              <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" placeholder="如：23.0652" value="${n(u?.lat??"")}" /></label>
            </div>
            <span class="pacom-row-sub">经纬度可同时留空稍后补齐，或成对填写合法坐标。</span>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!s.spatial?"disabled":""}>创建项目</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.showEditProjectModal&&i){const u=e.projFormDraft,h=t.buildings.filter(w=>w.projectId===i.id).reduce((w,D)=>w+e.sortedBuildingFloors(D.id).reduce((F,k)=>F+(e.buildingDevicesByFloor.get(k.id)?.length??0),0),0);o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑项目">
        <form class="dep-modal-card" data-save-project="${n(i.id)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">编辑项目：${n(i.name)}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${xt(e.modalError)}
            <div style="display:flex; align-items:center; gap:14px; padding:12px; border-radius:12px; background:var(--pacom-surface-primary); box-shadow:inset 0 0 0 var(--hw) var(--pacom-border-subtle);">
              <img src="${n(i.imageUrl??"./media/gzlab.jpg")}" alt="${n(i.name)}" style="width:84px; height:54px; object-fit:cover; border-radius:8px;" />
              <div style="flex:1; min-width:0;">
                <div style="font-size:14px; font-weight:450;">项目封面图</div>
                <div class="pacom-row-sub">用于空间总览的园区俯瞰展示</div>
              </div>
              <label class="pacom-btn" style="cursor:${!a||!s.spatial?"not-allowed":"pointer"}; opacity:${!a||!s.spatial?"0.45":"1"};">
                <span>更换封面</span>
                <input type="file" name="projCoverUpload" accept="image/*" data-upload-proj="${n(i.id)}" style="display:none;" ${!a||!s.spatial?"disabled":""} />
              </label>
            </div>
            <div class="dep-param-grid">
              <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" value="${n(u?.name??i.name)}" required ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="${n(u?.city??i.city??"")}" ${a?"":"disabled"} /></label>
              <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" value="${n(u?.address??i.address??"")}" ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" value="${n(u?u.lng:i.location?.lng??"")}" ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" value="${n(u?u.lat:i.location?.lat??"")}" ${a?"":"disabled"} /></label>
            </div>
          </div>
          <div class="dep-modal-foot">
            <button type="button" class="pacom-btn pacom-btn--danger" data-delete-proj="${n(i.id)}" ${!a||!s.spatial||h>0?`disabled title="${h>0?`包含 ${h} 台运行中设备，请先解绑后再删除`:"当前角色只读"}"`:""}>删除项目</button>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!s.spatial?"disabled":""}>保存更改</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.showNewBuildingModal&&i){const u=e.bldFormDraft;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建楼宇">
        <form class="dep-modal-card" data-create-bld="${n(i.id)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">新建楼宇（${n(i.name)}）</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${xt(e.modalError)}
            <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:12px; background:var(--pacom-surface-primary); box-shadow:inset 0 0 0 var(--hw) var(--pacom-border-subtle);">
              <img src="${n(e.newBldImageDataUrl??"./media/building-e.webp")}" alt="楼宇外观预览" style="width:68px; height:48px; object-fit:contain; border-radius:8px; background:#ffffff;" />
              <div style="flex:1; min-width:0;">
                <div style="font-size:14px; font-weight:450;">楼宇外观 / 白模图（选填）</div>
                <div class="pacom-row-sub">支持透明 PNG / WebP / JPG</div>
              </div>
              <label class="pacom-btn pacom-btn--sm" style="cursor:${!a||!s.spatial?"not-allowed":"pointer"}; opacity:${!a||!s.spatial?"0.45":"1"};">
                <span>${e.newBldImageDataUrl?"更换":"上传"}</span>
                <input type="file" name="newBldImg" accept="image/*" data-stage-new-bld-img="1" style="display:none;" ${!a||!s.spatial?"disabled":""} />
              </label>
            </div>
            <div class="dep-param-grid">
              <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" placeholder="如：G栋" value="${n(u?.name??"")}" required /></label>
              <label class="dep-field"><span class="dep-field-label">总建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" placeholder="选填" value="${n(u?.area??"")}" /></label>
              <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${n(u?.above??"12")}" /></label>
              <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${n(u?.below??"0")}" /></label>
              <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">标准层面积 (m²，选填)</span><input class="pacom-input" name="bStdFloorArea" type="number" step="0.1" placeholder="填写后自动回填至所有自动生成的楼层" value="${n(u?.stdFloorArea??"")}" /></label>
            </div>
            <div style="display:flex; align-items:center; gap:20px; flex-wrap:wrap; font-size:14px;">
              <label style="display:inline-flex; align-items:center; gap:8px; cursor:pointer;"><input type="checkbox" name="bRoof" ${u?u.hasRoof?"checked":"":"checked"} />含屋面层 (RF)</label>
              <label style="display:inline-flex; align-items:center; gap:8px; cursor:pointer;"><input type="checkbox" name="bAutoFloors" ${u?u.autoFloors?"checked":"":"checked"} />自动生成全部楼层并进入导图</label>
            </div>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!s.spatial?"disabled":""}>创建楼宇</button>
            </div>
          </div>
        </form>
      </div>`)}const $=e.editingBuildingId?t.buildings.find(u=>u.id===e.editingBuildingId)??null:null;if($){const u=e.sortedBuildingFloors($.id),f=u.reduce((w,D)=>w+(e.buildingDevicesByFloor.get(D.id)?.length??0),0),h=Wa($,u);o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑楼宇">
        <form class="dep-modal-card" data-save-building="${n($.id)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">编辑楼宇：${n($.name)}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${xt(e.modalError)}
            <div style="display:flex; align-items:center; gap:14px; padding:12px; border-radius:12px; background:var(--pacom-surface-primary); box-shadow:inset 0 0 0 var(--hw) var(--pacom-border-subtle);">
              <img src="${n($.imageUrl??"./media/building-e.webp")}" alt="${n($.name)}" style="width:72px; height:54px; object-fit:contain; border-radius:8px; background:#ffffff;" />
              <div style="flex:1; min-width:0;">
                <div style="font-size:14px; font-weight:450;">楼宇外观 / 白模图</div>
                <div class="pacom-row-sub">支持透明 PNG / WebP / JPG</div>
              </div>
              <label class="pacom-btn" style="cursor:${!a||!s.spatial?"not-allowed":"pointer"}; opacity:${!a||!s.spatial?"0.45":"1"};">
                <span>替换图片</span>
                <input type="file" name="bldImgUpload" accept="image/*" data-upload-bld="${n($.id)}" style="display:none;" ${!a||!s.spatial?"disabled":""} />
              </label>
            </div>
            <div class="dep-param-grid">
              <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" value="${n($.name)}" required ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">总建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" value="${n($.areaSqm??"")}" placeholder="选填" ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">规划地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${$.aboveFloors}" ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">规划地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${$.belowFloors}" ${a?"":"disabled"} /></label>
            </div>
            <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
              <label style="display:inline-flex; align-items:center; gap:8px; font-size:14px; cursor:pointer;"><input type="checkbox" name="bRoof" ${$.hasRoof?"checked":""} ${a?"":"disabled"} />含屋面层 (RF)</label>
              ${h.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${n($.id)}" ${!a||!s.spatial?"disabled":""}>一键补齐缺失 ${h.length} 层</button>`:`<span class="pacom-row-sub">已建 ${u.length} 个楼层</span>`}
            </div>
          </div>
          <div class="dep-modal-foot">
            <button type="button" class="pacom-btn pacom-btn--danger" data-delete-building="${n($.id)}" ${!a||!s.spatial||f>0?`disabled title="${f>0?"包含运行中设备，请先解绑后再删除":"当前角色只读"}"`:""}>删除楼宇</button>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!s.spatial?"disabled":""}>保存更改</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.showNewFloorModal&&p){const u=e.floorFormDraft;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增楼层">
        <form class="dep-modal-card dep-modal-card--sm" data-create-floor="${n(p.id)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">新增楼层（${n(p.name)}）</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${xt(e.modalError)}
            <div class="dep-param-grid">
              <label class="dep-field"><span class="dep-field-label">楼层名称</span><input class="pacom-input" name="fName" placeholder="如：23F / B1 / RF" value="${n(u?.name??"")}" required /></label>
              <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="fArea" type="number" step="0.1" placeholder="选填" value="${n(u?.area??"")}" /></label>
            </div>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!s.spatial?"disabled":""}>确认新增</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.showBatchModal&&p){const u=e.sortedBuildingFloors(p.id),f=new Map;e.pendingBatchUploads.forEach(k=>{k.matchedFloorId&&f.set(k.matchedFloorId,(f.get(k.matchedFloorId)??0)+1)});const h=new Set(Array.from(f.entries()).filter(([,k])=>k>1).map(([k])=>k)),w=f.size,D=h.size>0,F=Array.from(f.keys()).filter(k=>!!u.find(m=>m.id===k)?.plan).length;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="批量导入平面底图">
        <div class="dep-modal-card dep-modal-card--wide">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">批量导入 ${n(p.name)} 平面底图</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${xt(e.modalError)}
            <div class="dep-upload-drop" data-batch-dropzone="${n(p.id)}" style="padding:22px; flex-direction:column; align-items:center; text-align:center; gap:8px; ${e.batchDropActive?"border-color:var(--pacom-accent-solid); background:var(--pacom-accent-soft);":""}">
              <strong style="font-size:14px; font-weight:450;">拖拽多张平面图到此区域，或点击选择文件</strong>
              <span class="pacom-row-sub">自动识别 01F、02F平面、首层、屋面、RF、地下室B1 等中英文文件名，支持手动调整目标楼层</span>
              <label class="pacom-btn" style="cursor:${!a||!s.spatial?"not-allowed":"pointer"}; margin-top:4px; opacity:${!a||!s.spatial?"0.45":"1"};">
                <span>选择多张图片</span>
                <input type="file" name="batchFloorPlans" accept="image/*" multiple data-batch-upload-floors="${n(p.id)}" style="display:none;" ${!a||!s.spatial?"disabled":""} />
              </label>
            </div>
            ${D?`<div class="pacom-banner pacom-banner--critical" style="padding:10px 14px;">
                     <div class="pacom-banner-text">
                       <span class="pacom-banner-title">检测到 ${h.size} 个目标楼层被多张文件重复匹配</span>
                       <span class="pacom-banner-sub">每个楼层仅允许导入 1 张底图，请将重复项改为「未分配」或指定其他楼层后再导入。</span>
                     </div>
                   </div>`:F>0?`<div class="pacom-banner" style="padding:10px 14px;">
                       <div class="pacom-banner-text">
                         <span class="pacom-banner-title">其中 ${F} 个目标楼层已有底图，导入后将升级底图版本</span>
                         <span class="pacom-banner-sub">已关联设备的楼层将保留硬件绑定并标记「换图待核对」。</span>
                       </div>
                     </div>`:""}
            ${e.pendingBatchUploads.length>0?`<div style="display:flex; flex-direction:column; gap:8px;">
                    <div class="pacom-row-sub">已选 ${e.pendingBatchUploads.length} 张图片，匹配 ${w} 个唯一楼层：</div>
                    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(300px, 1fr)); gap:8px; max-height:240px; overflow-y:auto;">
                      ${e.pendingBatchUploads.map(k=>{const m=!!(k.matchedFloorId&&h.has(k.matchedFloorId)),d=k.matchedFloorId?!!u.find(b=>b.id===k.matchedFloorId)?.plan:!1;return`
                          <div class="pacom-receipt-item" style="padding:8px 10px; gap:8px; ${m?"box-shadow:inset 0 0 0 1px var(--pacom-status-critical);":""}">
                            <div style="min-width:0; flex:1;">
                              <div style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:14px;" title="${n(k.file.name)}">${n(k.file.name)}</div>
                              ${m?'<span class="pacom-row-sub" style="color:var(--pacom-status-critical);">目标层重复，请改选或设为未分配</span>':d?'<span class="pacom-row-sub">将覆盖已有底图</span>':""}
                            </div>
                            <select class="pacom-select" name="overrideFloor_${n(k.id)}" style="width:104px; flex:none;" data-batch-override-floor="${n(k.id)}" aria-label="指定目标楼层">
                              <option value="">未分配</option>
                              ${u.map(b=>`<option value="${n(b.id)}" ${k.matchedFloorId===b.id?"selected":""}>${n(b.name)}</option>`).join("")}
                            </select>
                          </div>`}).join("")}
                    </div>
                  </div>`:""}
          </div>
          <div class="dep-modal-foot">
            <button type="button" class="pacom-btn pacom-btn--ghost" data-cancel-batch-upload="1" ${e.pendingBatchUploads.length===0?"disabled":""}>清空已选</button>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="button" class="pacom-btn pacom-btn--primary" data-confirm-batch-upload="1" ${w===0||D||!a||!s.spatial?"disabled":""}>确认导入（${w} 层）</button>
            </div>
          </div>
        </div>
      </div>`)}if(e.copyZoneSourceFloorId&&p){const u=t.floors.find(h=>h.id===e.copyZoneSourceFloorId),f=e.sortedBuildingFloors(p.id).filter(h=>h.id!==e.copyZoneSourceFloorId);u&&f.length>0&&o.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="复用功能区至其他楼层">
          <div class="dep-modal-card">
            <div class="dep-modal-head">
              <h3 class="dep-modal-title">复用 ${n(u.name)} 功能区至其他楼层</h3>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              ${xt(e.modalError)}
              <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                <span class="pacom-row-sub">勾选目标楼层（已选 ${e.copyTargetFloorIds.size} 层）</span>
                <div style="display:flex; gap:6px;">
                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="empty">空白地上层</button>
                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="above">全部地上层</button>
                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="clear">清空</button>
                </div>
              </div>
              <div style="display:flex; flex-wrap:wrap; gap:8px;">
                ${f.map(h=>{const w=e.copyTargetFloorIds.has(h.id),D=t.zones.filter(F=>F.floorId===h.id).length;return`
                      <label class="pacom-btn pacom-btn--sm" style="cursor:pointer; ${w?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}">
                        <input type="checkbox" name="copyFloor_${n(h.id)}" data-copy-target-floor="${n(h.id)}" ${w?"checked":""} style="margin:0;" />
                        <span>${n(h.name)}${D>0?` (${D}区)`:""}</span>
                      </label>`}).join("")}
              </div>
            </div>
            <div class="dep-modal-foot">
              <span></span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
                <button type="button" class="pacom-btn pacom-btn--primary" data-confirm-copy-zones="${n(u.id)}" ${e.copyTargetFloorIds.size===0||!a||!s.spatial?"disabled":""}>确认复制（${e.copyTargetFloorIds.size} 层）</button>
              </div>
            </div>
          </div>
        </div>`)}if(e.showNewDevModal){const u=t.zones.filter(f=>f.floorId===e.activeFloorId);o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增设备">
        <form class="dep-modal-card" data-create-dev="1">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">新增设备</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${xt(e.modalError)}
            <label class="dep-field">
              <span class="dep-field-label">设备名称</span>
              <input class="pacom-input" name="devName" placeholder="如：703 会议室三控面板" required />
            </label>
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">设备类型</span>
                <select class="pacom-select" name="devPreset">${nn.map(f=>`<option value="${f.key}">${f.label}</option>`).join("")}</select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">所属功能区</span>
                <select class="pacom-select" name="devZone">
                  <option value="">暂不分配</option>
                  ${u.map(f=>`<option value="${n(f.id)}">${n(f.name)}</option>`).join("")}
                </select>
              </label>
            </div>
            <span class="pacom-row-sub">新增设备初始为「待入网 ｜ 未标记」状态，创建后将引导点图落点并完成硬件绑定。</span>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!s.createDevice?"disabled":""}>确认新增</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.groupModal){const u=e.groupModal.mode==="edit"&&e.groupModal.groupId?e.groups.find(b=>b.id===e.groupModal.groupId)??null:null,f=e.groupModal.track,h=on[f],w=h.includes(e.groupModal.draftType)?e.groupModal.draftType:h[0],D=new Set(e.groupModal.draftMemberIds),F=f==="mesh_auto"?e.floorDevices.filter(b=>b.category==="gateway"):[],k=new Set(F.map(b=>b.id));f==="mesh_auto"&&k.forEach(b=>D.add(b));const m=f==="mesh_auto"?e.floorDevices.filter(b=>Wt(b)&&b.category!=="gateway"):e.floorDevices,d=f==="mesh_auto"&&w.includes("灯")&&!m.some(b=>b.category==="lighting"&&D.has(b.id));o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="${u?"编辑设备分组":"新建设备分组"}">
        <form class="dep-modal-card" data-save-group="${n(u?.id??"")}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">${u?"编辑设备分组":"新建设备分组"}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${xt(e.modalError)}
            <label class="dep-field">
              <span class="dep-field-label">分组名称</span>
              <input class="pacom-input" name="gName" data-group-draft-name="1" placeholder="如：7F 西侧办公区联动组" value="${n(e.groupModal.draftName)}" required />
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
                  ${h.map(b=>`<option value="${b}" ${w===b?"selected":""}>${b}</option>`).join("")}
                </select>
              </label>
            </div>
            ${f==="mesh_auto"?`<div class="pacom-receipt-item" style="padding:8px 12px;">
                     <span style="font-size:13px;">
                       <strong>基础设施网关</strong>
                       <span class="pacom-row-sub"> ｜ ${F.length>0?n(F.map(b=>b.name).join("、")):"本层暂未登记边缘网关"}</span>
                     </span>
                     <span class="pacom-badge pacom-badge--accent">自动同步</span>
                     ${F.map(b=>`<input type="hidden" name="gMemberIds" value="${n(b.id)}" />`).join("")}
                   </div>`:""}
            ${d?`<div class="pacom-banner" style="padding:9px 12px;">
                     <div class="pacom-banner-text">
                       <span class="pacom-banner-title" style="font-size:13px;">当前未勾选照明执行设备（驱动器 / 开关面板）</span>
                       <span class="pacom-banner-sub">灯光联动组至少需勾选 1 台照明执行端才可创建；可点击下方「一键勾选本层照明与传感」。</span>
                     </div>
                   </div>`:""}
            <div class="dep-field">
              <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                <span class="dep-field-label">
                  <span>选择末端成员（可选 ${m.length} 台）</span>
                  ${At("分组成员规则","端侧蓝牙 Mesh 自治组会自动将边缘网关纳入同步基础设施，此处只需勾选末端传感与执行设备；云端业务分组可自由混选本层所有设备。")}
                </span>
                ${f==="mesh_auto"&&m.some(b=>b.category==="lighting"||b.category==="sensor")?'<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-group-select-ls="1">一键勾选本层照明与传感</button>':""}
              </div>
              <div class="dep-check-list">
                ${m.length===0?'<div class="pacom-row-sub" style="padding:12px; text-align:center;">本层暂无可选末端设备，请先在「设备标记」或「设备列表」中新增设备。</div>':m.map(b=>{const B=D.has(b.id);return`
                            <label class="dep-check-item">
                              <span style="display:inline-flex; align-items:center; gap:8px; min-width:0;">
                                <input type="checkbox" name="gMemberIds" data-group-draft-member="1" value="${n(b.id)}" ${B?"checked":""} />
                                <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${n(b.name)}</span>
                              </span>
                              <span class="pacom-badge pacom-badge--neutral">${ka[b.category]}</span>
                            </label>`}).join("")}
              </div>
            </div>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!s.deviceGroups?"disabled":""}>${u?"保存分组":"创建分组"}</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.connModal){const u=e.connModal.mode==="edit"&&e.connModal.connectionId?e.connections.find(d=>d.id===e.connModal.connectionId)??null:null,f=e.connFormDraft,h=i?t.buildings.filter(d=>d.projectId===i.id):[],w=e.connModal.fromProjectLevel!==!1,D=f?f.buildingId:u?u.buildingId:w?"":e.activeBuildingId??"",F=D?e.sortedBuildingFloors(D):[],k=f?f.floorId:u?u.floorId:w?"":e.activeFloorId??"",m=f?.protocol??u?.protocol??"bacnet_ip";o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="${u?"编辑接入通道":"新增接入通道"}">
        <form class="dep-modal-card" data-save-conn="${n(u?.id??"")}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">${u?"编辑接入通道":"新增子系统接入通道"}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${xt(e.modalError)}
            <label class="dep-field">
              <span class="dep-field-label">通道名称</span>
              <input class="pacom-input" name="cName" placeholder="如：E栋 8F 中央空调网关" value="${n(f?.name??u?.name??"")}" required />
            </label>
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">服务楼宇</span>
                <select class="pacom-select" name="cBuilding" data-conn-bld-select="1">
                  <option value="">全项目通用</option>
                  ${h.map(d=>`<option value="${n(d.id)}" ${D===d.id?"selected":""}>${n(d.name)}</option>`).join("")}
                </select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">服务楼层</span>
                <select class="pacom-select" name="cFloor" ${D?"":"disabled"}>
                  <option value="">${D?"整栋 / 不限楼层":"全项目不限楼层"}</option>
                  ${F.map(d=>`<option value="${n(d.id)}" ${k===d.id?"selected":""}>${n(d.name)}</option>`).join("")}
                </select>
              </label>
            </div>
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">协议类型</span>
                <select class="pacom-select" name="cProto">
                  ${[["bacnet_ip","空调 / BACnet IP"],["modbus_tcp","电表 / Modbus TCP"],["modbus_rtu","RS485 / Modbus RTU"],["dali","照明 / DALI-2"],["mqtt","空气质量 / MQTT"],["knx","楼宇总线 / KNX"]].map(([d,b])=>`<option value="${d}" ${m===d?"selected":""}>${b}</option>`).join("")}
                </select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">网关端点</span>
                <input class="pacom-input" name="cEndpoint" placeholder="如：10.7.8.20:47808" value="${n(f?.endpoint??u?.endpoint??"")}" required />
              </label>
            </div>
            <span class="pacom-row-sub">提交时将自动检测同项目局域网端点冲突并按已绑定同协议设备统计采集点位。</span>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!s.manageConnections?"disabled":""}>${u?"保存通道":"校验并接入"}</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.showFreezeModal){const u=p?e.sortedBuildingFloors(p.id):[],f=u.some(k=>k.id===e.freezeTargetFloorId)?e.freezeTargetFloorId:u.find(k=>(e.buildingDevicesByFloor.get(k.id)?.length??0)>0)?.id??u[0]?.id??e.activeFloorId,h=t.floors.find(k=>k.id===f),w=f?Na(e,f):null,D=!w||w.deviceCount===0,F=!!w?.readyForFormalFreeze;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="交付冻结与阶段留档">
        <form class="dep-modal-card" data-confirm-freeze="${n(f)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">
              <span>${F?"正式交付冻结":"交付冻结与阶段留档"}</span>
              ${At("正式冻结与阶段留档区别","仅当底图、点位标记、绑定复核、在线入网、边缘同步及最新全层自检（FTT）全部通过时，才允许生成「正式冻结」基线；参数或配置变更后必须重新同步并重测；存在待补项时仅支持保存「阶段留档（草稿）」。")}
            </h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${xt(e.modalError)}
            <label class="dep-field">
              <span class="dep-field-label">目标楼层（${n(p?.name??"当前楼宇")}）</span>
              <select class="pacom-select" name="freezeFloorId" data-freeze-floor-select="1">
                ${u.map(k=>{const m=e.buildingDevicesByFloor.get(k.id)?.length??0,d=Na(e,k.id),b=d.deferred?"本期不纳入":m===0?"无设备":d.readyForFormalFreeze?`${m} 台 ｜ 可正式冻结`:`${m} 台 ｜ 待补项`;return`<option value="${n(k.id)}" ${k.id===f?"selected":""}>${n(k.name)}（${b}）</option>`}).join("")}
              </select>
            </label>
            ${D?`<div class="pacom-banner pacom-banner--critical" style="padding:12px 14px;">
                     <div class="pacom-banner-text">
                       <span class="pacom-banner-title">本层尚无已登记设备（0 / 0）</span>
                       <span class="pacom-banner-sub">禁止为空楼层生成阶段留档或正式冻结快照，请先在「设备标记」添加并配置设备。</span>
                     </div>
                   </div>`:F?`<div class="pacom-banner pacom-banner--ok" style="padding:12px 14px;">
                       <div class="pacom-banner-text">
                         <span class="pacom-banner-title">${n(h?.name??"")} 已满足全部正式交付冻结门槛</span>
                         <span class="pacom-banner-sub">${w.deviceCount} 台设备均已完成底图标记、硬件绑定与物理复核、在线入网、最新边缘同步及全层自检。</span>
                       </div>
                     </div>`:`<div class="pacom-banner pacom-banner--critical" style="padding:12px 14px;">
                       <div class="pacom-banner-text">
                         <span class="pacom-banner-title">尚未满足正式冻结门槛（不可正式冻结）</span>
                         <span class="pacom-banner-sub">阻止项：${n(w.blockers.join(" ｜ "))}。可先保存为「阶段留档」记录当前施工进度。</span>
                       </div>
                     </div>`}
            <label class="dep-field">
              <span class="dep-field-label">基线 / 留档备注</span>
              <input class="pacom-input" name="freezeNote" placeholder="如：首期调试验收基线冻结" value="${F?"全层自检通过，正式交付冻结":"阶段性施工留档（待补齐剩余门控项后正式冻结）"}" ${D?"disabled":""} />
            </label>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              ${!D&&!F&&s.stageSnapshot?`<button type="button" class="pacom-btn pacom-btn--primary" data-submit-stage-snapshot="${n(f)}" ${a?"":"disabled"}>保存阶段留档</button>`:""}
              <button type="submit" class="pacom-btn ${F?"pacom-btn--primary":""}" ${!a||!F?'disabled title="需满足全部交付门控与最新自检后才可正式冻结"':""}>正式交付冻结</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.snapshotDetailModal){const{batch:u,meta:f}=e.snapshotDetailModal,h=Xn(e,u),w=f.snapshotSource==="legacy_missing",D=h?"已过期":u.status==="draft"?"阶段留档":u.status==="frozen"?"待签收":Kn[u.status]??u.status,F=h?"pacom-badge--neutral":u.status==="delivered"?"pacom-badge--online":u.status==="draft"?"pacom-badge--warning":"pacom-badge--accent";o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="交付基线快照与签收">
        <div class="dep-modal-card dep-modal-card--wide">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">
              <span>${n(u.versionTag)}</span>
              <span class="pacom-badge ${F}">${D}</span>
            </h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${xt(e.modalError)}
            <div class="dep-snapshot-grid">
              <div class="dep-snapshot-kv"><span>所属楼层</span><strong>${n(f.floorName)}</strong></div>
              <div class="dep-snapshot-kv"><span>底图版本</span><strong>${f.planVersion>0?`v${f.planVersion}`:"无底图"}</strong></div>
              <div class="dep-snapshot-kv"><span>边缘基线</span><strong>v${f.edgeSyncVersion}</strong></div>
              <div class="dep-snapshot-kv"><span>核验设备</span><strong>${u.verifiedCount} / ${u.deviceCount} 台</strong></div>
            </div>
            <div class="pacom-row-sub">
              冻结人：${n(u.frozenBy)} ｜ 时间：${n(u.frozenAt.replace("T"," ").slice(0,19))}${f.fttPassedAt?` ｜ 自检凭证：${n(f.fttPassedAt.replace("T"," ").slice(0,19))}`:""}
            </div>
            ${w?`<div class="pacom-banner" style="padding:10px 14px;">
                     <div class="pacom-banner-text">
                       <span class="pacom-banner-title">历史种子基线（原始逐设备快照缺失）</span>
                       <span class="pacom-banner-sub">该记录创建于版本化快照升级前，为保证审计严谨不以当前实时设备冒充历史状态；新冻结批次均完整保存逐设备坐标、绑定与参数快照。</span>
                     </div>
                   </div>`:`
                  <div class="pacom-table-card" style="max-height:220px; overflow-y:auto;">
                    <div class="pacom-table-wrap">
                      <table class="pacom-table">
                        <thead>
                          <tr>
                            <th>设备与功能区</th>
                            <th>坐标</th>
                            <th>上游网关与绑定</th>
                            <th>自治参数</th>
                            <th>复核与连通</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${f.devices.length===0?'<tr><td colspan="5" style="text-align:center; padding:16px;" class="pacom-row-sub">无设备快照明细</td></tr>':f.devices.map(k=>{const m=Ht(k.connectivity,k.bound),d=k.placed&&k.planX!==void 0&&k.planY!==void 0?`${Math.round(k.planX*100)}% / ${Math.round(k.planY*100)}%`:k.placed?"已标记":"未标记";return`
                                      <tr>
                                        <td>
                                          <strong>${n(k.name)}</strong>
                                          <div class="pacom-row-sub">${n(k.zoneLabel)}</div>
                                        </td>
                                        <td style="white-space:nowrap;"><span class="pacom-row-sub">${d}</span></td>
                                        <td>
                                          <div style="font-size:13px;">${k.bound?`${n((k.protocol??"").toUpperCase())} ${n(k.address??"")}`:"未绑定"}</div>
                                          <div class="pacom-row-sub">${n(k.gatewayName??"—")}${k.portOrChannel?` ｜ ${n(k.portOrChannel)}`:""}</div>
                                        </td>
                                        <td><span class="pacom-row-sub">${n(k.paramsSummary??"默认参数")}</span></td>
                                        <td style="white-space:nowrap;">
                                          <span class="pacom-badge ${k.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${k.physicalInstalled?"已复核":"待复核"}</span>
                                          <span class="pacom-badge ${m.cls}" style="margin-left:4px;">${m.label}</span>
                                        </td>
                                      </tr>`}).join("")}
                        </tbody>
                      </table>
                    </div>
                  </div>`}
            ${u.status==="delivered"?`<div class="pacom-banner pacom-banner--ok" style="padding:12px 14px;">
                     <div class="pacom-banner-text">
                       <span class="pacom-banner-title">已完成正式签收交付（签收人：${n(f.signedOffBy??u.frozenBy)}）</span>
                       <span class="pacom-banner-sub">${f.signedOffAt?`签收时间：${n(f.signedOffAt.replace("T"," ").slice(0,19))} ｜ `:""}${n(f.signOffNote??"验收通过，正式移交运维")}</span>
                     </div>
                   </div>`:h?`<div class="pacom-banner" style="padding:12px 14px;">
                       <div class="pacom-banner-text">
                         <span class="pacom-banner-title">该冻结基线已过期，禁止签收旧版本</span>
                         <span class="pacom-banner-sub">现场设备配置、图纸或点位已发生后续变更；请完成最新版本的核验与正式冻结后再执行签收。本历史快照仍可供查阅与导出。</span>
                       </div>
                     </div>`:u.status==="frozen"&&s.signOffDelivery?`<form data-sign-off-delivery="${n(u.id)}" style="display:flex; flex-direction:column; gap:10px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-primary); box-shadow:inset 0 0 0 var(--hw) var(--pacom-border-subtle);">
                         <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
                           <strong style="font-size:14px; font-weight:500;">接收方签收确认（待签收 → 正式交付）</strong>
                           <span class="pacom-row-sub">${e.isDemoMode?"演示环境代录接收方信息；生产端将校验独立接收角色账号":"记录接收方账号与验收意见"}</span>
                         </div>
                         <div class="dep-param-grid">
                           <label class="dep-field">
                             <span class="dep-field-label">接收方签收人（必填）</span>
                             <input class="pacom-input" name="signRecipient" placeholder="请填写接收方姓名与部门，如：陈主任（设施运维）" value="" required ${a?"":"disabled"} />
                           </label>
                           <label class="dep-field">
                             <span class="dep-field-label">签收意见</span>
                             <input class="pacom-input" name="signNote" placeholder="如：现场抽检与图纸核对一致，同意移交" value="现场核对与功能自检一致，同意正式签收移交" ${a?"":"disabled"} />
                           </label>
                         </div>
                         <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
                           ${s.rejectDelivery?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-reject-delivery="${n(u.id)}" ${a?"":'disabled title="当前角色为只读权限"'}>退回整改（转为留档）</button>`:"<span></span>"}
                           <button type="submit" class="pacom-btn pacom-btn--primary" ${a?"":'disabled title="当前角色为只读权限"'}>确认签收交付</button>
                         </div>
                       </form>`:`<span class="pacom-row-sub">${f.rejectReason?`已退回整改（${n(f.rejectReason)}）；`:""}阶段留档仅用于施工过程记录，需满足全部门控并正式冻结后才可签收交付。</span>`}
          </div>
          <div class="dep-modal-foot">
            <button type="button" class="pacom-btn" data-export-snapshot="${n(u.id)}">导出单批快照 CSV</button>
            <button type="button" class="pacom-btn" data-close-modals="1">关闭</button>
          </div>
        </div>
      </div>`)}if(e.planSwapReviewFloorId){const u=t.floors.find(F=>F.id===e.planSwapReviewFloorId),f=e.planChangeAlerts[e.planSwapReviewFloorId],w=(e.buildingDevicesByFloor.get(e.planSwapReviewFloorId)??e.floorDevices).filter(F=>!!F.planPoint),D=e.lightMarkers.filter(F=>F.floorId===e.planSwapReviewFloorId);u&&f&&o.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="换图影响核对清单">
          <div class="dep-modal-card">
            <div class="dep-modal-head">
              <h3 class="dep-modal-title">换图影响核对（${n(u.name)} ｜ v${f.previousVersion} → v${f.currentVersion}）</h3>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div class="pacom-banner" style="padding:10px 12px;">
                <div class="pacom-banner-text">
                  <span class="pacom-banner-title">已保留全部硬件绑定与物理安装复核，需核对图纸落点是否偏移</span>
                  <span class="pacom-banner-sub">如有位移可直接在画布上拖拽设备点位微调；确认无误后仍须重新执行全层自检（FTT）方可冻结新版本。</span>
                </div>
              </div>
              <div class="pacom-row-sub">受影响已标记设备 ${w.length} 台 ｜ 关联回路灯点 ${D.length} 个</div>
              <div class="dep-check-list" style="max-height:200px;">
                ${w.length===0?'<div class="pacom-row-sub" style="padding:12px; text-align:center;">本层暂无已标记坐标的设备。</div>':w.map(F=>`
                          <div class="dep-check-item">
                            <span><strong>${n(F.name)}</strong></span>
                            <span class="pacom-row-sub">${Math.round(F.planPoint.x*100)}%, ${Math.round(F.planPoint.y*100)}%</span>
                          </div>`).join("")}
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn" data-close-modals="1">返回画布拖拽微调</button>
              <button type="button" class="pacom-btn pacom-btn--primary" data-clear-plan-alert="${n(u.id)}" ${a?"":'disabled title="当前角色为只读权限"'}>确认点位核对无误</button>
            </div>
          </div>
        </div>`)}if(e.confirmDialog){const u=e.confirmDialog;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="${n(u.title)}">
        <div class="dep-modal-card dep-modal-card--sm">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">${n(u.title)}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            <p style="margin:0; font-size:14px; line-height:22px; color:var(--pacom-text-body);">${n(u.body)}</p>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="button" class="pacom-btn ${u.danger?"pacom-btn--danger":"pacom-btn--primary"}" data-confirm-dialog-ok="1">${n(u.confirmLabel)}</button>
            </div>
          </div>
        </div>
      </div>`)}return e.lightboxPlan&&o.push(`
      <div class="dep-lightbox-scrim" data-lightbox-scrim="1" role="dialog" aria-modal="true" aria-label="${n(e.lightboxPlan.title)}">
        <div class="dep-lightbox-card">
          <div class="dep-lightbox-head">
            <strong style="font-size:16px; font-weight:500;">${n(e.lightboxPlan.title)}</strong>
            <button type="button" class="pacom-drawer-close" data-close-lightbox="1" aria-label="关闭预览">${re("x",16)}</button>
          </div>
          <div class="dep-lightbox-body">
            <img src="${n(e.lightboxPlan.imageUrl)}" alt="${n(e.lightboxPlan.title)}" />
          </div>
        </div>
      </div>`),o.join("")}function qs(){let e=null,t=null;function a(){e&&(e.setAttribute("aria-expanded","false"),e=null),t&&(t.remove(),t=null)}function s(u,f){const h=u.getBoundingClientRect(),w=f.getBoundingClientRect(),D=16,F=8;let k=h.left+h.width/2-w.width/2;k=Math.max(D,Math.min(window.innerWidth-w.width-D,k));let m=h.bottom+F;m+w.height+D>window.innerHeight&&(m=h.top-w.height-F),m=Math.max(D,Math.min(window.innerHeight-w.height-D,m)),f.style.left=`${Math.round(k)}px`,f.style.top=`${Math.round(m)}px`}function o(u){const f=u.dataset.depInfo?.trim();if(!f)return;if(e===u){a();return}a(),e=u,u.setAttribute("aria-expanded","true");const h=document.createElement("div");h.className="pacom-info-popover",h.setAttribute("role","tooltip"),h.textContent=f,document.body.appendChild(h),t=h,s(u,h)}const i=u=>{const f=u.target;t&&(t.contains(f)||e?.contains(f))||a()},p=u=>{u.key==="Escape"&&t&&a()},$=()=>{e&&t&&(document.body.contains(e)?s(e,t):a())};return document.addEventListener("click",i),document.addEventListener("keydown",p),window.addEventListener("resize",$),window.addEventListener("scroll",$,!0),{bind(u){e&&!document.body.contains(e)&&a(),u.querySelectorAll("[data-dep-info]").forEach(f=>{f.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation(),o(f)})})},close:a,destroy(){a(),document.removeEventListener("click",i),document.removeEventListener("keydown",p),window.removeEventListener("resize",$),window.removeEventListener("scroll",$,!0)}}}function ga(e,t,a){return e?t?"":`disabled title="${n(a)}"`:'disabled title="当前角色为只读权限"'}function es(e,t=!1){if(!e.drawerOpen||e.activeNav!=="device_marking"&&e.activeNav!=="device_list")return"";const a=e.floorDevices.find(d=>d.id===e.selectedId)??null;if(!a)return"";const{canEdit:s,caps:o}=e,i=e.meshRoles[a.id]??{proxy:!1,relay:!1,meshUuid:Jn(e.activeFloorId)},p=e.lightMarkers.filter(d=>d.deviceId===a.id),$=e.deviceParams.get(a.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450,coolMinC:22,heatMaxC:26,unoccupiedDelayMin:20,minCycleMin:5,heartbeatSec:30,offlineHoldMin:120,cacheFlushSec:60,pollSec:15,ctRatio:1,demandWindowMin:15},u=Ht(a.connectivity,!!a.hardwareBinding),f=ga(s,o.lightMarkers,"待后端回路灯点接口对接"),h=ga(s,o.meshRoles,"待后端蓝牙 Mesh 接口对接"),w=ga(s,o.deviceParams,"待后端自治参数下发接口对接"),D=ga(s,o.manageDevice,"待后端设备管理接口对接"),F=e.tree.zones.filter(d=>d.floorId===e.activeFloorId),k=e.floorDevices.filter(d=>d.category==="gateway"),m=e.bindingDraft&&e.bindingDraft.deviceId===a.id?e.bindingDraft:{deviceId:a.id,gatewayId:a.hardwareBinding?.gatewayId??(a.category==="gateway"?a.id:k[0]?.id??""),protocol:a.hardwareBinding?.protocol??sn[0],networkAddress:a.hardwareBinding?.networkAddress??"",portOrChannel:a.hardwareBinding?.portOrChannel??"",physicalInstalled:a.physicalInstalled};return`
    <aside class="dep-docked-drawer ${t?"dep-docked-drawer--sticky":""}" aria-label="设备配置抽屉">
      <div class="pacom-drawer-head">
        <div style="min-width:0; flex:1;">
          <h3 class="pacom-drawer-title">${n(a.name)}</h3>
          <div class="pacom-row-sub" style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; margin-top:2px;">
            <span>${n(e.getZoneLabel(a.logicalZoneId))} ｜ ${n(ka[a.category])} ｜ v${a.version}</span>
            <span class="pacom-badge ${u.cls}">${u.label}</span>
          </div>
        </div>
        <div style="display:inline-flex; align-items:center; gap:4px; flex-shrink:0;">
          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-toggle-edit-dev-meta="1" ${D}>${e.editingDeviceMeta?"收起":"编辑"}</button>
          <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${re("x",16)}</button>
        </div>
      </div>

      ${e.editingDeviceMeta?`
          <form data-save-dev-meta="${n(a.id)}" class="dep-drawer-section" style="padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); box-shadow:inset 0 0 0 var(--hw) var(--pacom-border-subtle);">
            <label class="dep-field">
              <span class="dep-field-label">设备名称</span>
              <input class="pacom-input" name="editDevName" value="${n(a.name)}" required ${D} />
            </label>
            <label class="dep-field">
              <span class="dep-field-label">所属功能区</span>
              <select class="pacom-select" name="editDevZone" ${D}>
                <option value="">暂不分配</option>
                ${F.map(d=>`<option value="${n(d.id)}" ${a.logicalZoneId===d.id?"selected":""}>${n(d.name)}</option>`).join("")}
              </select>
            </label>
            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-del-dev="${n(a.id)}" ${D}>删除设备</button>
              <div style="display:inline-flex; gap:6px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-edit-dev-meta="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${D}>保存</button>
              </div>
            </div>
          </form>`:""}

      <div style="display:flex; gap:6px; flex-wrap:wrap;">
        <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-place="1" ${s?"":'disabled title="当前角色为只读权限"'}>${e.placingMode?"点击图纸落点中…":a.planPoint?"点图更新坐标":"点图标记坐标"}</button>
        <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${n(a.id)}">Ping 闪灯</button>
        <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-test="1" ${s?"":'disabled title="当前角色为只读权限"'}>单机自检</button>
      </div>

      <div class="pacom-tabs" role="tablist" aria-label="设备配置分页" style="align-self:flex-start;">
        <button type="button" class="pacom-tab" role="tab" aria-selected="${e.drawerTab==="binding"}" data-drawer-tab="binding">绑定与安装</button>
        <button type="button" class="pacom-tab" role="tab" aria-selected="${e.drawerTab==="params"}" data-drawer-tab="params">自治参数</button>
      </div>

      ${e.drawerTab==="binding"?`
          ${a.category==="lighting"?`
              <div class="dep-drawer-section">
                <div class="dep-drawer-section-head">
                  <span class="dep-drawer-section-title">回路可视化灯点（${p.length}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${n(a.id)}" ${f}>+ 添加灯点</button>
                </div>
                ${p.length===0?'<span class="pacom-row-sub">可切至画布「回路灯点」直接点图落点，或点右上角添加</span>':p.map(d=>`
                          <div class="pacom-receipt-item" style="padding:8px 10px;">
                            <span style="font-size:14px;"><strong>${n(d.channel)}</strong> ｜ ${n(d.label)}</span>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-del-light-marker="${n(d.id)}" ${f}>删除</button>
                          </div>`).join("")}
              </div>`:""}

          ${Wt(a)?`
              <div class="dep-drawer-section">
                <div class="dep-drawer-section-head">
                  <span class="dep-drawer-section-title">
                    <span>蓝牙 Mesh 节点角色</span>
                    ${At("蓝牙 Mesh 角色说明","Proxy 代理建议每层启用 2–3 个供现场移动端接入；Relay 中继建议控制在总节点 10% 以内，面板默认关闭以避免广播风暴。")}
                  </span>
                  <code style="font-size:12px; color:var(--pacom-text-secondary);">${n(i.meshUuid)}</code>
                </div>
                <div class="dep-drawer-switch-row">
                  <span>Proxy 代理</span>
                  <button type="button" class="pacom-switch" role="switch" aria-checked="${i.proxy}" aria-label="切换 Proxy 代理" data-toggle-mesh-role="proxy" data-mesh-dev="${n(a.id)}" ${h}><span class="pacom-switch-thumb"></span></button>
                </div>
                <div class="dep-drawer-switch-row">
                  <span>Relay 中继</span>
                  <button type="button" class="pacom-switch" role="switch" aria-checked="${i.relay}" aria-label="切换 Relay 中继" data-toggle-mesh-role="relay" data-mesh-dev="${n(a.id)}" ${h}><span class="pacom-switch-thumb"></span></button>
                </div>
              </div>`:""}

          <form data-role="binding-form" class="dep-drawer-section">
            <span class="dep-drawer-section-title">硬件绑定与物理安装复核</span>
            ${a.category!=="gateway"?`
                <label class="dep-field">
                  <span class="dep-field-label">所属上游网关</span>
                  <select class="pacom-select" name="gatewayId" data-binding-field="gatewayId" ${s?"":"disabled"}>
                    ${k.length===0?'<option value="">本层暂未登记网关（请先添加边缘网关）</option>':`<option value="">请选择上游网关</option>${k.map(d=>`<option value="${n(d.id)}" ${m.gatewayId===d.id?"selected":""}>${n(d.name)}${d.connectivity==="offline"?"（离线）":""}</option>`).join("")}`}
                  </select>
                </label>`:`<input type="hidden" name="gatewayId" value="${n(a.id)}" />`}
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">通信协议</span>
                <select class="pacom-select" name="protocol" data-binding-field="protocol" ${s?"":"disabled"}>
                  ${sn.map(d=>`<option value="${d}" ${m.protocol===d?"selected":""}>${d.toUpperCase()}</option>`).join("")}
                </select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">网络地址 / 主题</span>
                <input class="pacom-input" name="networkAddress" data-binding-field="networkAddress" placeholder="地址或主题" value="${n(m.networkAddress)}" ${s?"":"disabled"} />
              </label>
            </div>
            <label class="dep-field">
              <span class="dep-field-label">端口 / 回路</span>
              <input class="pacom-input" name="portOrChannel" data-binding-field="portOrChannel" placeholder="端口或回路" value="${n(m.portOrChannel)}" ${s?"":"disabled"} />
            </label>
            <div class="dep-drawer-switch-row">
              <span>现场物理安装已复核</span>
              <button type="button" class="pacom-switch" role="switch" aria-checked="${m.physicalInstalled}" aria-label="切换现场物理安装复核状态" data-toggle-phys="1" ${s?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
            </div>
            <button class="pacom-btn pacom-btn--primary" type="submit" ${s?"":'disabled title="当前角色为只读权限"'}>保存绑定与复核（v${a.version}）</button>
          </form>`:`
          <form data-save-dev-params="${n(a.id)}" data-dev-cat="${n(a.category)}" class="dep-drawer-section">
            ${a.category==="hvac"?`
                <div>
                  <div class="dep-drawer-section-title">暖通温控与保护参数</div>
                  <div class="pacom-row-sub">设定温度安全边界与无人节能回退，保存后需重同步并复检</div>
                </div>
                <div class="dep-param-grid">
                  <label class="dep-field"><span class="dep-field-label">制冷下限 (°C)</span><input class="pacom-input" name="coolMinC" type="number" step="0.5" min="16" max="30" value="${$.coolMinC??22}" ${w} /></label>
                  <label class="dep-field"><span class="dep-field-label">制热上限 (°C)</span><input class="pacom-input" name="heatMaxC" type="number" step="0.5" min="16" max="32" value="${$.heatMaxC??26}" ${w} /></label>
                  <label class="dep-field"><span class="dep-field-label">无人节能延时 (分)</span><input class="pacom-input" name="unoccupiedDelayMin" type="number" min="1" max="240" value="${$.unoccupiedDelayMin??20}" ${w} /></label>
                  <label class="dep-field"><span class="dep-field-label">防频繁启停 (分)</span><input class="pacom-input" name="minCycleMin" type="number" min="1" max="30" value="${$.minCycleMin??5}" ${w} /></label>
                </div>`:a.category==="gateway"?`
                  <div>
                    <div class="dep-drawer-section-title">网关离线自治与心跳策略</div>
                    <div class="pacom-row-sub">断网时维持本地联动与边缘缓存上报，保存后需重同步并复检</div>
                  </div>
                  <div class="dep-param-grid">
                    <label class="dep-field"><span class="dep-field-label">心跳周期 (秒)</span><input class="pacom-input" name="heartbeatSec" type="number" min="5" max="300" value="${$.heartbeatSec??30}" ${w} /></label>
                    <label class="dep-field"><span class="dep-field-label">断网自治保持 (分)</span><input class="pacom-input" name="offlineHoldMin" type="number" min="5" max="1440" value="${$.offlineHoldMin??120}" ${w} /></label>
                    <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">边缘缓存刷新间隔 (秒)</span><input class="pacom-input" name="cacheFlushSec" type="number" min="10" max="600" value="${$.cacheFlushSec??60}" ${w} /></label>
                  </div>`:a.category==="meter"?`
                    <div>
                      <div class="dep-drawer-section-title">智能电表计量采集参数</div>
                      <div class="pacom-row-sub">配置轮询周期、互感器变比倍率与需量统计滑窗</div>
                    </div>
                    <div class="dep-param-grid">
                      <label class="dep-field"><span class="dep-field-label">采集轮询周期 (秒)</span><input class="pacom-input" name="pollSec" type="number" min="5" max="300" value="${$.pollSec??15}" ${w} /></label>
                      <label class="dep-field"><span class="dep-field-label">CT 变比倍率</span><input class="pacom-input" name="ctRatio" type="number" min="1" max="1000" value="${$.ctRatio??1}" ${w} /></label>
                      <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">需量滑窗周期 (分)</span><input class="pacom-input" name="demandWindowMin" type="number" min="5" max="60" value="${$.demandWindowMin??15}" ${w} /></label>
                    </div>`:`
                    <div>
                      <div class="dep-drawer-section-title">人感与光感自治参数</div>
                      <div class="pacom-row-sub">保存后需在「设备网络」重新同步边缘并复执行自检</div>
                    </div>
                    <div class="dep-param-grid">
                      <label class="dep-field"><span class="dep-field-label">自动关灯延时 (分)</span><input class="pacom-input" name="offDelayMin" type="number" min="1" max="180" value="${$.offDelayMin}" ${w} /></label>
                      <label class="dep-field"><span class="dep-field-label">恢复自动延时 (分)</span><input class="pacom-input" name="restoreMin" type="number" min="1" max="180" value="${$.restoreMin}" ${w} /></label>
                      <label class="dep-field"><span class="dep-field-label">开灯光感门限 (lx)</span><input class="pacom-input" name="luxOn" type="number" min="10" max="2000" value="${$.luxOn}" ${w} /></label>
                      <label class="dep-field"><span class="dep-field-label">关灯光感门限 (lx)</span><input class="pacom-input" name="luxOff" type="number" min="10" max="2000" value="${$.luxOff}" ${w} /></label>
                    </div>`}
            <button class="pacom-btn pacom-btn--primary" type="submit" ${w}>保存设备参数</button>
          </form>`}
    </aside>
  `}function Os(e){const{tree:t,canEdit:a,caps:s}=e;if(t.projects.length===0)return`
      <div class="dep-work-row--canvas">
        <main class="pacom-spatial-stage" style="flex:1; min-width:0; display:flex; align-items:center; justify-content:center; padding:24px;">
          <div style="max-width:480px; width:100%;">${na(a,s.spatial,"map-pin")}</div>
        </main>
      </div>`;const o=e.activeBuildingId?e.sortedBuildingFloors(e.activeBuildingId):[],i=o.find(b=>b.id===e.activeFloorId)??o[0],p=e.floorDevices,$=t.zones.filter(b=>b.floorId===e.activeFloorId),u=e.drawerOpen?p.find(b=>b.id===e.selectedId)??null:null,f=e.canvasSearch.trim().toLowerCase(),h=p.filter(b=>!(e.deviceFilter==="unverified"&&b.physicalInstalled||e.deviceFilter==="unplaced"&&b.planPoint||f&&!`${b.name} ${e.getZoneLabel(b.logicalZoneId)}`.toLowerCase().includes(f))),w=p.filter(b=>!b.planPoint).length,D=e.planChangeAlerts[e.activeFloorId]??null,F=p.find(b=>b.category==="lighting")??null,k=e.canvasBrush==="light_marker"&&u?.category==="lighting"&&a&&s.lightMarkers,m=!!i?.plan,d=ga(a,s.spatial,"待后端空间建档接口对接");return`
    <div class="dep-work-row--canvas">
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        ${m?`
            <div class="pacom-hud-search-wrap" style="width:min(380px, calc(100% - 28px));">
              <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
                ${re("search",16)}
                <input class="pacom-hud-input" name="canvasSearch" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${n(e.canvasSearch)}" aria-label="搜索本层设备" />
                <button type="button" class="pacom-hud-pill" style="${e.hudPoolOpen?"background:var(--pacom-selected-layer); color:var(--pacom-text-primary);":""}" data-toggle-hud-pool="1">设备池 ${p.length}${w>0?` ｜ 未标记 ${w}`:""}</button>
              </div>

              ${e.hudPoolOpen?`
                  <div class="pacom-hud-sheet">
                    <div class="pacom-hud-sheet-head">
                      <strong style="font-size:14px; font-weight:500;">${n(i?.name??"当前楼层")} 设备池（${h.length}）</strong>
                      <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${re("x",16)}</button>
                    </div>
                    <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                      <div class="pacom-tabs" role="tablist" aria-label="设备池筛选">
                        <button type="button" class="pacom-tab" role="tab" aria-selected="${e.deviceFilter==="all"}" data-dev-filter="all">全部 ${p.length}</button>
                        <button type="button" class="pacom-tab" role="tab" aria-selected="${e.deviceFilter==="unverified"}" data-dev-filter="unverified">待复核 ${p.filter(b=>!b.physicalInstalled).length}</button>
                        <button type="button" class="pacom-tab" role="tab" aria-selected="${e.deviceFilter==="unplaced"}" data-dev-filter="unplaced">未标记 ${p.filter(b=>!b.planPoint).length}</button>
                      </div>
                    </div>
                    <div class="pacom-list" style="padding:6px;">
                      ${h.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">本层暂无匹配设备</div>':h.map(b=>`
                                <div class="pacom-row ${b.id===e.selectedId&&e.drawerOpen?"is-selected":""}" data-pick-dev="${n(b.id)}" style="padding:8px 10px;">
                                  <div style="min-width:0;">
                                    <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${n(b.name)}</div>
                                    <div class="pacom-row-sub">${n(e.getZoneLabel(b.logicalZoneId))} ｜ ${b.physicalInstalled?"已复核":"待复核"}</div>
                                  </div>
                                  <span class="pacom-badge ${b.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${b.planPoint?"已标记":"未标记"}</span>
                                </div>`).join("")}
                    </div>
                  </div>`:""}
            </div>`:""}

        ${e.canvasNotice?`<div class="dep-canvas-toast" role="status">
                 <span class="pacom-dot pacom-dot--online"></span>
                 <span>${n(e.canvasNotice)}</span>
                 <button type="button" class="pacom-drawer-close" style="width:22px; height:22px;" data-dismiss-canvas-notice="1" aria-label="关闭提示">${re("x",12)}</button>
               </div>`:""}

        ${e.placingMode&&u?`<div class="dep-canvas-mode-pill" role="status">
                 <span>正在定位「${n(u.name)}」，请点击平面图落点</span>
                 <button type="button" class="dep-canvas-mode-cancel" data-toggle-place="1">取消</button>
               </div>`:k?`<div class="dep-canvas-mode-pill" role="status">
                   <span>回路灯点模式：点击平面图为「${n(u.name)}」布置灯点</span>
                   <button type="button" class="dep-canvas-mode-cancel" data-brush="device">退出</button>
                 </div>`:e.canvasBrush==="light_marker"?`<div class="dep-canvas-mode-pill" role="status">
                     <span>回路灯点模式：请先选择一台照明回路设备</span>
                     ${F?`<button type="button" class="dep-canvas-mode-cancel" data-pick-dev="${n(F.id)}">选中 ${n(Cn(F))}</button>`:""}
                   </div>`:D?`<div class="dep-canvas-mode-pill" role="status">
                       <span>底图已更新至 v${D.currentVersion}，请核对本层 ${p.filter(b=>b.planPoint).length} 个点位</span>
                       <button type="button" class="dep-canvas-mode-cancel" data-open-plan-swap-review="${n(e.activeFloorId)}">核对受影响点位</button>
                     </div>`:i?.plan&&p.length===0?`<div class="dep-canvas-empty-hint" role="status">
                         <span>本层底图已就绪，点击右上角「+ 新增设备」即可开始标记</span>
                       </div>`:""}

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${e.placingMode||k?"crosshair":"grab"};">
          ${i?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${e.panX}px, ${e.panY}px) scale(${e.zoom});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${n(i.plan.imageUrl)}" alt="${n(i.name)} 平面底图" />
                  ${e.canvasBrush==="zone"?$.map((b,B)=>{const O=e.zoneBoxes[b.id]??ln(B,$.length,b.name);return`<div class="pacom-zone-hotspot is-active" style="left:${O.left}%; top:${O.top}%; width:${O.width}%; height:${O.height}%;"><span class="pacom-zone-tag">${n(b.name.replace(new RegExp(`^${i.name}\\s*`,"i"),""))}<span class="dep-zone-draft-tag">示意</span></span></div>`}).join(""):""}
                  ${p.filter(b=>b.planPoint).map(b=>{const B=a&&e.canvasBrush==="device"&&!e.placingMode,O=b.connectivity==="offline"?"pacom-dot--critical":b.connectivity==="unknown"||!b.hardwareBinding?"pacom-dot--offline":b.physicalInstalled?"pacom-dot--online":"pacom-dot--warning";return`
                        <button type="button" class="pacom-pin ${b.id===e.selectedId&&e.drawerOpen?"is-selected":""} ${b.connectivity==="offline"?"pacom-pin--offline":""} ${B?"is-draggable":""}"
                          style="left:${(b.planPoint.x*100).toFixed(2)}%; top:${(b.planPoint.y*100).toFixed(2)}%;"
                          data-pick-dev="${n(b.id)}" ${B?`data-drag-pin="${n(b.id)}"`:""}
                          title="${n(b.name)}${b.physicalInstalled?" ｜ 已复核":" ｜ 待复核"}${B?"（可直接拖拽调整坐标）":""}">
                          <span class="pacom-dot ${O}"></span>
                          <span>${n(Cn(b))}</span>
                        </button>`}).join("")}
                  ${e.canvasBrush==="light_marker"?e.lightMarkers.filter(b=>p.some(B=>B.id===b.deviceId)).map(b=>`
                            <span class="dep-light-dot" style="left:${(b.x*100).toFixed(1)}%; top:${(b.y*100).toFixed(1)}%;" title="${n(b.label)}（${n(b.channel)}）">
                              ${re("sparkles",12)}<span>${n(b.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                  <div class="dep-empty-card" data-single-floor-drop="${n(e.activeFloorId)}" style="max-width:440px; width:100%;">
                    <div class="dep-empty-icon">${re("upload",20)}</div>
                    <strong style="font-size:16px; line-height:24px; font-weight:500; color:var(--pacom-text-primary);">${n(i?.name??"当前楼层")} 暂未上传 2D 平面底图</strong>
                    <span class="pacom-row-sub">${a&&s.spatial?"可直接将平面底图拖拽至此，或点击下方按钮原地上传，上传后立即在此标记设备。":"当前角色为只读权限，请联系项目管理员先为本层上传平面底图。"}</span>
                    ${a&&s.spatial?`<div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
                             <label class="pacom-btn pacom-btn--primary" style="cursor:pointer;">
                               <span>上传 ${n(i?.name??"本层")} 平面底图</span>
                               <input type="file" name="markingNoPlanUpload_${n(e.activeFloorId)}" accept="image/*" data-upload-floor="${n(e.activeFloorId)}" style="display:none;" ${d} />
                             </label>
                             <button type="button" class="pacom-btn" data-jump-floor-config="${n(e.activeFloorId)}">前往项目配置</button>
                           </div>`:""}
                  </div>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${o.map(b=>`
              <button type="button" class="pacom-elev-item ${b.id===e.activeFloorId?"is-active":""}" data-scrubber-floor="${n(b.id)}" title="${n(b.name)}${b.plan?" ｜ 已传底图":" ｜ 待传底图"}">
                ${b.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${n(b.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        ${m?`
            <div class="pacom-canvas-dock" role="toolbar" aria-label="标记图层与缩放">
              <button type="button" class="pacom-dock-btn" aria-pressed="${e.canvasBrush==="device"}" data-brush="device">设备标记</button>
              <button type="button" class="pacom-dock-btn" aria-pressed="${e.canvasBrush==="light_marker"}" data-brush="light_marker">回路灯点</button>
              <button type="button" class="pacom-dock-btn" aria-pressed="${e.canvasBrush==="zone"}" data-brush="zone">功能区</button>
              <span class="pacom-dock-sep" aria-hidden="true"></span>
              <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${re("minus",16)}</button>
              <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(e.zoom*100)}%</button>
              <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${re("plus",16)}</button>
            </div>`:""}
      </main>
      ${es(e,!1)}
    </div>
  `}function Ts(e){if(e.tree.projects.length===0)return na(e.canEdit,e.caps.spatial,"list");const t=e.floorDevices,a=e.listSearch.trim().toLowerCase(),s=t.filter(i=>!(e.listStatusFilter==="online"&&i.connectivity!=="online"||e.listStatusFilter==="offline"&&i.connectivity!=="offline"||e.listStatusFilter==="unverified"&&i.physicalInstalled||e.listCategoryFilter!=="all"&&i.category!==e.listCategoryFilter||a&&!`${i.name} ${e.getZoneLabel(i.logicalZoneId)} ${i.hardwareBinding?.protocol??""}`.toLowerCase().includes(a))),o=t.filter(i=>i.connectivity==="online").length;return`
    <div class="dep-work-row--list ${e.drawerOpen?"is-drawer-open":""}">
      <div class="dep-work-main">
        <div class="pacom-log-toolbar">
          <div class="pacom-log-filters">
            <input class="pacom-input" name="deviceListSearch" style="width:220px;" data-list-search placeholder="搜索设备名称或功能区…" value="${n(e.listSearch)}" aria-label="搜索设备列表" />
            <select class="pacom-select" name="deviceListFilter" data-list-filter aria-label="按设备状态筛选">
              <option value="all" ${e.listStatusFilter==="all"?"selected":""}>全部状态（${t.length}）</option>
              <option value="online" ${e.listStatusFilter==="online"?"selected":""}>仅看在线（${o}）</option>
              <option value="offline" ${e.listStatusFilter==="offline"?"selected":""}>仅看离线（${t.length-o}）</option>
              <option value="unverified" ${e.listStatusFilter==="unverified"?"selected":""}>待物理复核（${t.filter(i=>!i.physicalInstalled).length}）</option>
            </select>
            <select class="pacom-select" name="deviceCategoryFilter" data-list-cat-filter aria-label="按设备类别筛选">
              <option value="all" ${e.listCategoryFilter==="all"?"selected":""}>全部类别</option>
              ${Object.keys(ka).map(i=>`<option value="${i}" ${e.listCategoryFilter===i?"selected":""}>${ka[i]}</option>`).join("")}
            </select>
            <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${re("refresh-cw",16)}</button>
          </div>
          <span class="pacom-row-sub">共 ${s.length} 台 ｜ ${o} 在线</span>
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
                ${s.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:36px 16px;"><strong>暂无匹配设备</strong><span>可调整筛选词、切换楼层，或点击右上角「+ 新增设备」。</span></div></td></tr>':s.map(i=>`
                          <tr style="cursor:pointer; ${i.id===e.selectedId&&e.drawerOpen?"background:var(--pacom-selected-layer);":""}" data-open-dev-drawer="${n(i.id)}">
                            <td>
                              <div style="font-weight:450;">${n(i.name)}</div>
                              <div class="pacom-row-sub">${n(e.getZoneLabel(i.logicalZoneId))} ｜ ${n(ka[i.category])} ｜ v${i.version}</div>
                              <div class="dep-compact-meta">
                                <span class="pacom-badge ${i.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${i.hardwareBinding?i.hardwareBinding.protocol.toUpperCase():"未绑定"}</span>
                                <span class="pacom-badge ${i.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${i.physicalInstalled?"已复核":"待复核"}</span>
                                ${i.planPoint?"":'<span class="pacom-badge pacom-badge--warning">未标记</span>'}
                              </div>
                            </td>
                            <td class="dep-col-secondary"><span class="pacom-badge ${i.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${i.planPoint?`${Math.round(i.planPoint.x*100)}%, ${Math.round(i.planPoint.y*100)}%`:"未标记"}</span></td>
                            <td class="dep-col-secondary"><span class="pacom-badge ${i.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${i.hardwareBinding?i.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                            <td class="dep-col-secondary"><span class="pacom-badge ${i.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${i.physicalInstalled?"已复核":"待复核"}</span></td>
                            <td>${(()=>{const p=Ht(i.connectivity,!!i.hardwareBinding);return`<span class="pacom-badge ${p.cls}">${p.label}</span>`})()}</td>
                            <td class="dep-col-secondary">
                              <div style="display:flex; justify-content:flex-end; gap:6px;">
                                ${i.hardwareBinding&&!i.physicalInstalled&&e.canEdit?`<button type="button" class="pacom-btn pacom-btn--sm" data-quick-verify-dev="${n(i.id)}">一键复核</button>`:""}
                                <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${n(i.id)}">Ping</button>
                                <button type="button" class="pacom-btn pacom-btn--sm" data-open-dev-params="${n(i.id)}">配置</button>
                                <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-dev="${n(i.id)}" ${e.canEdit?"":'disabled title="当前角色为只读权限"'}>自检</button>
                              </div>
                            </td>
                          </tr>`).join("")}
              </tbody>
            </table>
          </div>
          <div class="pacom-table-footer">
            <span>显示 ${s.length} / ${t.length} 台设备 ｜ ${o} 在线 ｜ ${t.length-o} 离线</span>
          </div>
        </div>
      </div>
      ${es(e,!0)}
    </div>
  `}function Bs(e){if(e.tree.projects.length===0)return na(e.canEdit,e.caps.spatial,"folder-kanban");const t=ga(e.canEdit,e.caps.deviceGroups,"待后端设备分组接口对接"),a=e.groups.filter($=>$.track==="mesh_auto"),s=e.groups.filter($=>$.track==="cloud_biz"),o=new Map(e.floorDevices.map($=>[$.id,$])),i=$=>{const u=$.map(f=>o.get(f)?.name??f).slice(0,3);return u.length===0?"暂未编排成员设备":`${u.join("、")}${$.length>3?` 等 ${$.length} 台`:""}`},p=$=>{const u=$.deviceIds.map(h=>o.get(h)).filter(Boolean),f=$.track==="mesh_auto"&&$.groupType.includes("灯")&&!u.some(h=>h?.category==="lighting");return`
    <div class="pacom-setting-row">
      <div class="pacom-setting-meta">
        <span class="pacom-setting-title" style="flex-wrap:wrap; row-gap:4px;">
          <span>${n($.name)}</span>
          <span class="pacom-badge pacom-badge--neutral" style="white-space:nowrap;">${n($.groupType)}</span>
          ${f?'<span class="pacom-badge pacom-badge--warning" style="white-space:nowrap;">缺照明执行端</span>':""}
        </span>
        <span class="pacom-setting-desc">成员 ${$.deviceIds.length} 台 ｜ ${n(i($.deviceIds))}</span>
      </div>
      <div class="pacom-setting-control">
        <button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${n($.id)}">组控测试</button>
        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-group="${n($.id)}" ${t}>编辑</button>
        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-del-group="${n($.id)}" ${t}>删除</button>
      </div>
    </div>`};return`
    <div class="pacom-grid-2">
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title" style="display:inline-flex; align-items:center; gap:6px;">
            <span>端侧蓝牙 Mesh 自治组（${a.length}）</span>
            ${At("端侧蓝牙 Mesh 自治组说明","用于照明与人感/光感本地自治联动，断网仍可端侧执行；系统会自动纳入本层蓝牙适配器或边缘网关以防状态漏报。")}
          </h2>
        </div>
        <div class="pacom-settings-card">
          ${a.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无端侧自治分组，点击右上角「+ 新建分组」创建。</span></div>':a.map(p).join("")}
        </div>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title" style="display:inline-flex; align-items:center; gap:6px;">
            <span>云端业务分组（${s.length}）</span>
            ${At("云端业务分组说明","适用于空调、标牌或行政部门批控场景，无需依赖蓝牙 Mesh 配网，可供空间总览与智能策略复用。")}
          </h2>
        </div>
        <div class="pacom-settings-card">
          ${s.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无云端业务分组，点击右上角「+ 新建分组」创建。</span></div>':s.map(p).join("")}
        </div>
      </section>
    </div>
  `}function Rs(e){if(e.tree.projects.length===0)return na(e.canEdit,e.caps.spatial,"waypoints");const t=e.floorDevices,a=e.tree.zones.filter(d=>d.floorId===e.activeFloorId),s=t.filter(Wt),o=t.filter(d=>!Wt(d)),i=s.filter(d=>d.category==="gateway"),p=new Set(i.map(d=>d.id)),$=s.filter(d=>!p.has(d.id)&&!!(e.meshRoles[d.id]?.proxy||e.meshRoles[d.id]?.relay)),u=new Set($.map(d=>d.id)),f=s.filter(d=>!p.has(d.id)&&!u.has(d.id)),h=s.filter(d=>e.meshRoles[d.id]?.proxy).length,w=s.filter(d=>e.meshRoles[d.id]?.relay).length,D=s.filter(d=>d.connectivity==="online").length,F=s.filter(d=>d.connectivity==="offline").length,k=s.filter(d=>d.connectivity==="unknown"||!d.hardwareBinding&&d.connectivity!=="offline").length,m=o.filter(d=>d.connectivity==="offline").length;return`
    <div class="pacom-kpi-strip" role="region" aria-label="本层无线网络概览">
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">蓝牙 Mesh 节点</span>
        <div class="pacom-kpi-value">${s.length}<span class="pacom-kpi-unit">台</span></div>
        <span class="pacom-kpi-delta">不含 ${o.length} 台有线异构末端</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">Proxy ｜ Relay ${At("代理与中继建议配比","每层建议开启 2–3 个 Proxy 供现场 App 接入；Relay 中继建议控制在总节点 10% 以内，减少广播风暴。")}</span>
        <div class="pacom-kpi-value">${h}<span class="pacom-kpi-unit">｜ ${w} 个</span></div>
        <span class="pacom-kpi-delta">代理与中继骨架</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">无线在线 ｜ 异常</span>
        <div class="pacom-kpi-value">${D}<span class="pacom-kpi-unit">/ ${s.length} 台</span></div>
        <span class="pacom-kpi-delta">${s.length===0?"本层暂无无线节点":F>0?`${F} 台离线${k>0?` ｜ ${k} 台待入网`:""}`:k>0?`${k} 台待绑定入网`:m>0?`无线全部在线 ｜ 另有 ${m} 台有线离线`:"无线链路全部在线可达"}</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">云边同步状态</span>
        <div class="pacom-kpi-value">v${e.edgeSync.version}</div>
        <span class="pacom-kpi-delta">${e.edgeSync.dirty?"有配置变更待下发":"协同锁空闲 ｜ 已同步"}</span>
      </div>
    </div>

    ${e.meshFindings.length>0?`
        <section class="pacom-section">
          <div class="pacom-section-head">
            <h2 class="pacom-section-title">无线网络体检结果</h2>
            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-clear-mesh-findings="1">清除结果</button>
          </div>
          <div class="pacom-card" style="gap:8px; padding:14px 16px;">
            ${e.meshFindings.map(d=>`
                <div class="pacom-receipt-item">
                  <div>
                    <strong>${n(d.title)}</strong>
                    <span class="pacom-row-sub"> ｜ ${n(d.detail)}</span>
                  </div>
                  <div style="display:inline-flex; align-items:center; gap:8px;">
                    ${d.deviceId?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-topo-jump="${n(d.deviceId)}">定位</button>`:""}
                    <span class="pacom-badge ${d.level==="ok"?"pacom-badge--online":d.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${d.level==="ok"?"通过":d.level==="warn"?"建议优化":"异常"}</span>
                  </div>
                </div>`).join("")}
          </div>
        </section>`:""}

    <section class="pacom-section">
      <div class="pacom-section-head">
        <h2 class="pacom-section-title">设备关系拓扑（点击节点直达设备标记）</h2>
        <div class="pacom-tabs" role="tablist" aria-label="拓扑视角切换">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${e.topoMode==="mesh"}" data-topo-mode="mesh">蓝牙 Mesh 通信树</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${e.topoMode==="business"}" data-topo-mode="business">业务联动与供能流向</button>
        </div>
      </div>
      ${e.topoMode==="mesh"?`
          <div class="dep-topo-flow">
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器（${i.length}）</strong>
              ${i.length===0?'<div class="pacom-row-sub">本层暂未配置网关或蓝牙适配器。</div>':i.map(d=>{const b=Ht(d.connectivity,!!d.hardwareBinding);return`
                          <button type="button" class="dep-topo-node ${d.connectivity==="offline"?"is-issue":""}" data-topo-jump="${n(d.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                              <strong>${n(d.name)}</strong>
                              <span class="pacom-badge ${b.cls}">${b.label}</span>
                            </div>
                            <span class="pacom-row-sub">${n(d.hardwareBinding?.networkAddress??"未绑定地址")} ｜ ${d.hardwareBinding?"网桥中心":"待配置网桥"}</span>
                          </button>`}).join("")}
            </div>
            <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${re("chevron-right",12)}</span></div>
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（${$.length}）</strong>
              ${$.length===0?'<div class="pacom-row-sub">暂未启用 Proxy / Relay 骨架节点，可在「设备标记」抽屉开启。</div>':$.map(d=>{const b=e.meshRoles[d.id],B=Ht(d.connectivity,!!d.hardwareBinding);return`
                          <button type="button" class="dep-topo-node ${d.connectivity==="offline"?"is-issue":""}" data-topo-jump="${n(d.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                              <strong>${n(d.name)}</strong>
                              <span class="pacom-badge pacom-badge--accent">${b?.proxy?"Proxy":""}${b?.proxy&&b?.relay?" + ":""}${b?.relay?"Relay":""}</span>
                            </div>
                            <span class="pacom-row-sub">${n(e.getZoneLabel(d.logicalZoneId))} ｜ ${B.label}</span>
                          </button>`}).join("")}
            </div>
            <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${re("chevron-right",12)}</span></div>
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 普通无线末端（${f.length}）</strong>
              ${f.length===0?'<div class="pacom-row-sub">本层暂无普通 Mesh 末端节点。</div>':f.map(d=>{const b=Ht(d.connectivity,!!d.hardwareBinding),B=d.hardwareBinding?.protocol==="dali"?"Mesh 桥接 DALI":d.hardwareBinding?.protocol.toUpperCase()??"未绑定";return`
                          <button type="button" class="dep-topo-node ${d.connectivity==="offline"?"is-issue":""}" data-topo-jump="${n(d.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                              <strong>${n(d.name)}</strong>
                              <span class="pacom-badge ${b.cls}">${b.label}</span>
                            </div>
                            <span class="pacom-row-sub">${n(e.getZoneLabel(d.logicalZoneId))} ｜ ${n(B)}</span>
                          </button>`}).join("")}
            </div>
          </div>
          ${o.length>0?`<div class="pacom-banner" style="padding:12px 16px;">
                   <div class="pacom-banner-text">
                     <span class="pacom-banner-title">本层另有 ${o.length} 台有线异构设备（${n(o.map(d=>`${d.name}（${d.hardwareBinding?.protocol.toUpperCase()??"有线"}）`).join("、"))}）</span>
                     <span class="pacom-banner-sub">空调与电表经有线协议通道直采，不加入蓝牙 Mesh 无线网；请前往「系统接入」核查其总线健康度。</span>
                   </div>
                   <button type="button" class="pacom-btn pacom-btn--sm" data-dep-nav="connections">前往系统接入 →</button>
                 </div>`:""}`:`
          <div class="dep-topo-flow">
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 上游传感与总线源</strong>
              ${t.filter(d=>d.category==="sensor"||d.category==="gateway").length===0?'<div class="pacom-row-sub">本层暂无传感或网关节点。</div>':t.filter(d=>d.category==="sensor"||d.category==="gateway").map(d=>`
                        <button type="button" class="dep-topo-node" data-topo-jump="${n(d.id)}">
                          <strong>${n(d.name)}</strong>
                          <span class="pacom-row-sub">${d.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                        </button>`).join("")}
            </div>
            <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${re("chevron-right",12)}</span></div>
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 受控末端（照明 / 暖通）</strong>
              ${t.filter(d=>d.category==="lighting"||d.category==="hvac").length===0?'<div class="pacom-row-sub">本层暂无受控照明或暖通末端。</div>':t.filter(d=>d.category==="lighting"||d.category==="hvac").map(d=>{const b=Ht(d.connectivity,!!d.hardwareBinding);return`
                          <button type="button" class="dep-topo-node ${d.connectivity==="offline"?"is-issue":""}" data-topo-jump="${n(d.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                              <strong>${n(d.name)}</strong>
                              <span class="pacom-badge ${b.cls}">${b.label}</span>
                            </div>
                            <span class="pacom-row-sub">服务：${n(e.getZoneLabel(d.logicalZoneId))}</span>
                          </button>`}).join("")}
            </div>
            <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${re("chevron-right",12)}</span></div>
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 服务功能区（影响面）</strong>
              ${a.length===0?'<div class="pacom-row-sub">本层暂未划分功能区。</div>':a.map(d=>{const b=t.filter(O=>O.logicalZoneId===d.id),B=b.some(O=>O.connectivity==="offline");return`
                          <div class="dep-topo-node ${B?"is-issue":""}" style="cursor:default;">
                            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                              <strong>${n(d.name)}</strong>
                              <span class="pacom-badge ${b.length===0?"pacom-badge--neutral":B?"pacom-badge--warning":"pacom-badge--online"}">${b.length} 台设备</span>
                            </div>
                            <span class="pacom-row-sub">${b.length===0?"暂无关联设备":B?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                          </div>`}).join("")}
            </div>
          </div>`}
    </section>
  `}function ba(e,t,a){return e?t?"":`disabled title="${n(a)}"`:'disabled title="当前角色为只读权限"'}function Ps(e){const{tree:t,canEdit:a,caps:s}=e;if(t.projects.length===0)return na(a,s.spatial,"layers");const o=t.projects.find(p=>p.id===e.activeProjectId)??t.projects[0],i=t.buildings.filter(p=>p.projectId===o.id);if(e.projectDrill==="building"||e.projectDrill==="floor"){const p=i.find($=>$.id===e.activeBuildingId)??i[0]??null;if(!p)return Fn(e,o,i);if(e.projectDrill==="floor"){const $=e.sortedBuildingFloors(p.id),u=$.find(f=>f.id===e.activeFloorId)??$[0]??null;if(u)return Ns(e,p,$,u)}return zs(e,i,p)}return Fn(e,o,i)}function Fn(e,t,a){const{canEdit:s,caps:o}=e,i=ba(s,o.spatial,"待后端空间建档接口对接"),p=a.flatMap(h=>e.sortedBuildingFloors(h.id)),$=p.filter(h=>!!h.plan).length,u=p.length>0?Math.round($/p.length*100):0,f=t.location?`${t.location.lng.toFixed(4)}, ${t.location.lat.toFixed(4)}`:"未设置坐标";return`
    <div class="dep-project-strip">
      <div class="dep-project-strip-main">
        <div class="dep-project-cover">
          <img src="${n(t.imageUrl??"./media/gzlab.jpg")}" alt="${n(t.name)}" />
        </div>
        <div style="min-width:0; display:flex; flex-direction:column; gap:4px;">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <strong style="font-size:16px; line-height:24px; font-weight:500; color:var(--pacom-text-primary);">${n(t.name)}</strong>
            <span class="pacom-badge pacom-badge--neutral">${a.length} 栋楼宇</span>
            <span class="pacom-badge pacom-badge--neutral">${p.length} 个楼层</span>
          </div>
          <span class="pacom-row-sub">${n(t.city||"未填城市")}${t.address?` ｜ ${n(t.address)}`:""} ｜ 坐标 ${n(f)}</span>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:16px; flex-shrink:0; flex-wrap:wrap;">
        <div class="dep-proj-progress" aria-label="整体底图就绪度">
          <div class="dep-proj-progress-head">
            <span>底图就绪度</span>
            <strong>${$}/${p.length}（${u}%）</strong>
          </div>
          <div class="dep-proj-progress-track">
            <div class="dep-proj-progress-fill ${p.length>0&&$===p.length?"is-complete":""}" style="width:${u}%;"></div>
          </div>
        </div>
        <button type="button" class="pacom-btn" data-open-edit-proj="1" ${i}>编辑项目</button>
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
            <div class="dep-empty-icon">${re("building-2",20)}</div>
            <strong style="font-size:16px; line-height:24px; font-weight:500; color:var(--pacom-text-primary);">${n(t.name)} 暂无楼宇</strong>
            <span class="pacom-row-sub">添加楼宇并设置层数结构后，系统将自动生成对应楼层并直达楼层底图工作台。</span>
            <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-bld="1" ${i}>+ 添加第一栋楼宇</button>
          </div>`:`
          <div class="dep-building-grid">
            ${a.map(h=>{const w=e.sortedBuildingFloors(h.id),D=w.filter(J=>!!J.plan).length,F=Wa(h,w),k=h.aboveFloors+h.belowFloors+(h.hasRoof?1:0),m=w.flatMap(J=>e.buildingDevicesByFloor.get(J.id)??[]),d=m.filter(J=>J.connectivity==="offline").length,b=new Set(w.map(J=>J.id)),B=new Set(e.buildingDeliveries.filter(J=>b.has(J.floorId)&&J.status!=="draft").map(J=>J.floorId)).size,O=w.length===0?"pacom-badge--neutral":D===w.length?"pacom-badge--online":"pacom-badge--warning",Q=w.length!==k?`规划地上 ${h.aboveFloors} 层${h.belowFloors>0?` ｜ 地下 ${h.belowFloors} 层`:""}${h.hasRoof?" ｜ RF":""} ｜ 已建 ${w.length} 层`:`地上 ${h.aboveFloors} 层${h.belowFloors>0?` ｜ 地下 ${h.belowFloors} 层`:""}${h.hasRoof?" ｜ RF":""}${h.areaSqm?` ｜ ${h.areaSqm} m²`:""}`;return`
                  <article class="dep-building-card" data-drill-building="${n(h.id)}" tabindex="0" role="button" aria-label="进入 ${n(h.name)} 楼层配置">
                    <div class="dep-building-stage">
                      <img src="${n(h.imageUrl??"./media/building-e.webp")}" alt="${n(h.name)}" />
                      <span class="pacom-badge ${O} dep-building-stage-badge">${w.length===0?"未建层":`${D}/${w.length} 底图`}</span>
                    </div>
                    <div class="dep-building-body">
                      <div class="dep-building-head">
                        <span class="dep-building-name">
                          <span>${n(h.name)}</span>
                          <span class="dep-building-arrow" aria-hidden="true">${re("chevron-right",14)}</span>
                        </span>
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-building="${n(h.id)}" ${i}>编辑</button>
                      </div>
                      <div class="pacom-row-sub">${n(Q)}</div>
                      <div class="dep-building-summary">
                        ${m.length>0?`<span>${m.length} 台设备</span><span>｜</span><span>${B}/${w.length} 层已冻结</span>${d>0?`<span>｜</span><span style="color:var(--pacom-status-critical);">${d} 台离线</span>`:""}`:`<span style="color:var(--pacom-text-muted);">${D===w.length&&w.length>0?"底图已齐，待登记设备":"待完善底图与部署"}</span>`}
                      </div>
                      ${F.length>0?`<div class="dep-building-missing">
                               <span>尚缺 ${F.length} 个规划楼层</span>
                               <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-fill-missing-floors="${n(h.id)}" ${i}>补齐楼层</button>
                             </div>`:""}
                    </div>
                  </article>`}).join("")}
          </div>`}
    </section>
  `}function zs(e,t,a){const{canEdit:s,caps:o}=e,i=ba(s,o.spatial,"待后端空间建档接口对接"),p=e.sortedBuildingFloors(a.id),$=p.filter(b=>!b.plan),u=$.length,f=u===1?$[0]:null,h=p.filter(b=>e.tree.zones.filter(B=>B.floorId===b.id).length===0).length,w=Wa(a,p),D=p.filter(b=>!b.areaSqm),F=D.filter(b=>b.kind==="above"?!0:b.kind==="below"?e.batchAreaIncludeBelow:b.kind==="roof"?e.batchAreaIncludeRoof:!1),k=Math.max(1,p.filter(b=>b.kind==="above"||e.batchAreaIncludeBelow&&b.kind==="below"||e.batchAreaIncludeRoof&&b.kind==="roof").length),m=e.floorListSearch.trim().toLowerCase(),d=p.filter(b=>{if(e.floorListFilter==="missing_plan"&&b.plan||e.floorListFilter==="missing_zone"&&e.tree.zones.filter(B=>B.floorId===b.id).length>0)return!1;if(m){const B=e.tree.zones.filter(O=>O.floorId===b.id).map(O=>O.name).join(" ");if(!`${b.name} ${B}`.toLowerCase().includes(m))return!1}return!0});return`
    <div class="dep-drill-bar">
      <div class="dep-drill-left">
        <button type="button" class="dep-back-btn" data-proj-drill="overview">
          ${re("arrow-left",16)}
          <span>项目配置</span>
        </button>
        <span class="dep-drill-sep" aria-hidden="true">/</span>
        ${t.length>1?`<select class="pacom-select" name="drillBuildingSelect" data-switch-drill-building aria-label="切换当前楼宇" style="width:auto; min-width:112px;">
                 ${t.map(b=>`<option value="${n(b.id)}" ${b.id===a.id?"selected":""}>${n(b.name)}</option>`).join("")}
               </select>`:`<h2 class="pacom-unified-title">${n(a.name)}</h2>`}
        <span class="pacom-row-sub">规划地上 ${a.aboveFloors} 层${a.belowFloors>0?` ｜ 地下 ${a.belowFloors} 层`:""}${a.hasRoof?" ｜ RF":""} ｜ 已建 ${p.length} 层</span>
      </div>
      <div class="pacom-unified-head-actions">
        <div class="dep-row-menu-wrap dep-l2-more-wrap">
          <button type="button" class="pacom-square-icon-btn" data-toggle-l2-more="1" aria-haspopup="menu" aria-expanded="${e.l2MoreOpen}" aria-label="更多楼宇操作" title="更多楼宇操作">
            ${re("more-horizontal",16)}
          </button>
          ${e.l2MoreOpen?`<div class="dep-row-menu" role="menu" style="min-width:148px;">
                   <button type="button" class="dep-row-menu-item" role="menuitem" data-edit-building="${n(a.id)}" ${i}>楼宇参数</button>
                   ${D.length>0?`<button type="button" class="dep-row-menu-item" role="menuitem" data-batch-fill-area="${n(a.id)}" ${i}>批量填面积</button>`:""}
                   ${w.length>0?`<button type="button" class="dep-row-menu-item" role="menuitem" data-fill-missing-floors="${n(a.id)}" ${i}>补齐缺失 ${w.length} 层</button>`:""}
                 </div>`:""}
        </div>
        <button type="button" class="pacom-btn" data-open-new-floor="1" ${i}>+ 新增楼层</button>
        ${f?`<label class="pacom-btn pacom-btn--primary" style="cursor:${!s||!o.spatial?"not-allowed":"pointer"}; opacity:${!s||!o.spatial?"0.45":"1"};">
                 <span>上传 ${n(f.name)} 底图</span>
                 <input type="file" name="singleMissingPlan_${n(f.id)}" accept="image/*" data-upload-floor="${n(f.id)}" style="display:none;" ${i} />
               </label>`:`<button type="button" class="pacom-btn pacom-btn--primary" data-open-batch-modal="1" ${i}>批量导入底图</button>`}
      </div>
    </div>

    ${p.length===0?`
        <div class="dep-empty-card">
          <div class="dep-empty-icon">${re("layers",20)}</div>
          <strong style="font-size:16px; line-height:24px; font-weight:500; color:var(--pacom-text-primary);">${n(a.name)} 暂无楼层</strong>
          <span class="pacom-row-sub">可按楼宇结构一键生成全部楼层，或手动新增单个楼层。</span>
          <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
            <button type="button" class="pacom-btn pacom-btn--primary" data-fill-missing-floors="${n(a.id)}" ${i}>一键生成全部楼层</button>
            <button type="button" class="pacom-btn" data-open-new-floor="1" ${i}>+ 新增楼层</button>
          </div>
        </div>`:`
        <div class="pacom-log-toolbar">
          <div class="pacom-log-filters">
            <div class="pacom-tabs" role="tablist" aria-label="楼层筛选">
              <button type="button" class="pacom-tab" role="tab" aria-selected="${e.floorListFilter==="all"}" data-floor-list-filter="all">全部 ${p.length}</button>
              <button type="button" class="pacom-tab" role="tab" aria-selected="${e.floorListFilter==="missing_plan"}" data-floor-list-filter="missing_plan">缺底图 ${u}</button>
              <button type="button" class="pacom-tab" role="tab" aria-selected="${e.floorListFilter==="missing_zone"}" data-floor-list-filter="missing_zone">缺功能区 ${h}</button>
            </div>
            <input class="pacom-input" name="floorListSearch" style="width:220px;" data-floor-list-search placeholder="搜索楼层或功能区…" value="${n(e.floorListSearch)}" aria-label="搜索楼层或功能区" />
          </div>
          <span class="pacom-row-sub">点击任意楼层进入单层底图与功能区精配</span>
        </div>

        ${e.batchAreaOpen?`<form data-apply-batch-area="${n(a.id)}" class="pacom-card" style="padding:14px 16px; gap:10px;">
                 <div style="display:flex; align-items:flex-end; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                   <div style="display:flex; align-items:flex-end; gap:14px; flex-wrap:wrap;">
                     <label class="dep-field" style="width:190px;">
                       <span class="dep-field-label">标准层面积 (m²)</span>
                       <input class="pacom-input" name="batchStdArea" type="number" step="0.1" min="1" placeholder="如：1200" value="${a.areaSqm?Math.round(a.areaSqm/k):""}" required ${i} />
                     </label>
                     <div style="display:flex; align-items:center; gap:14px; padding-bottom:6px; font-size:13px; color:var(--pacom-text-secondary); flex-wrap:wrap;">
                       <label style="display:inline-flex; align-items:center; gap:6px; cursor:pointer;"><input type="checkbox" name="incBelow" data-batch-area-opt="below" ${e.batchAreaIncludeBelow?"checked":""} />包含地下层</label>
                       <label style="display:inline-flex; align-items:center; gap:6px; cursor:pointer;"><input type="checkbox" name="incRoof" data-batch-area-opt="roof" ${e.batchAreaIncludeRoof?"checked":""} />包含屋面层 (RF)</label>
                     </div>
                   </div>
                   <div style="display:inline-flex; gap:8px;">
                     <button type="button" class="pacom-btn pacom-btn--sm" data-close-batch-area="1">取消</button>
                     <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${F.length===0||!s||!o.spatial?"disabled":""}>应用至 ${F.length} 个空缺层</button>
                   </div>
                 </div>
                 <span class="pacom-row-sub">默认仅回填地上标准层（不覆盖已填楼层，自动排除 RF 屋面与地下室；可按需勾选扩展）。</span>
               </form>`:""}

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
                ${d.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>当前筛选无匹配楼层</strong><span>可切换回「全部」查看整栋楼层。</span></div></td></tr>':d.map(b=>{const B=e.tree.zones.filter(O=>O.floorId===b.id);return`
                            <tr style="cursor:pointer;" data-drill-floor="${n(b.id)}">
                              <td>
                                <div style="display:inline-flex; align-items:center; gap:8px;">
                                  <span class="pacom-dot ${b.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                  <strong>${n(b.name)}</strong>
                                </div>
                              </td>
                              <td><span class="pacom-row-sub">${b.areaSqm?`${b.areaSqm} m²`:"—"}</span></td>
                              <td>
                                <div style="display:inline-flex; align-items:center; gap:8px;">
                                  ${b.plan?`<button type="button" class="dep-floor-thumb" data-open-lightbox="1" data-lb-title="${n(a.name)} ${n(b.name)} 平面底图" data-lb-src="${n(b.plan.imageUrl)}" title="查看大图"><img src="${n(b.plan.imageUrl)}" alt="${n(b.name)}" /></button>
                                         <span class="pacom-badge ${e.planChangeAlerts[b.id]?"pacom-badge--warning":"pacom-badge--online"}">${e.planChangeAlerts[b.id]?"换图待核对":"已就绪"}</span>`:'<span class="pacom-badge pacom-badge--warning">待上传</span>'}
                                  <label class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-stop-row="1" style="cursor:${!s||!o.spatial?"not-allowed":"pointer"}; opacity:${!s||!o.spatial?"0.45":"1"};">
                                    <span>${b.plan?"替换":"上传"}</span>
                                    <input type="file" name="floorPlan_${n(b.id)}" accept="image/*" data-upload-floor="${n(b.id)}" style="display:none;" ${i} />
                                  </label>
                                </div>
                              </td>
                              <td>
                                ${B.length>0?`<span>${B.length} 区</span> <span class="pacom-row-sub" style="margin-left:4px;">${n(B.slice(0,2).map(O=>O.name.replace(new RegExp(`^${b.name}\\s*`,"i"),"")).join("、"))}${B.length>2?"…":""}</span>`:'<span class="pacom-row-sub">未划分</span>'}
                              </td>
                              <td>
                                <div style="display:flex; justify-content:flex-end; gap:6px;">
                                  <button type="button" class="pacom-btn pacom-btn--sm" data-drill-floor-btn="${n(b.id)}">配置</button>
                                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-jump-floor-marking="${n(b.id)}">设备标记 →</button>
                                </div>
                              </td>
                            </tr>`}).join("")}
              </tbody>
            </table>
          </div>
          <div class="pacom-table-footer">
            <span>显示 ${d.length} / ${p.length} 层 ｜ 已传底图 ${p.length-u} 层</span>
          </div>
        </div>`}
  `}function Ns(e,t,a,s){const{canEdit:o,caps:i}=e,p=ba(o,i.spatial,"待后端空间建档接口对接"),$=ba(o,i.floorDocs,"待后端工程资料接口对接"),u=a.findIndex(m=>m.id===s.id),f=u>0?a[u-1]:null,h=u>=0&&u<a.length-1?a[u+1]:null,w=e.tree.zones.filter(m=>m.floorId===s.id),D=e.floorDocs.filter(m=>m.floorId===s.id),F=e.floorDevices,k=a.filter(m=>m.id!==s.id);return`
    <div class="dep-drill-bar">
      <div class="dep-drill-left">
        <button type="button" class="dep-back-btn" data-proj-drill="building">
          ${re("arrow-left",16)}
          <span>${n(t.name)}</span>
        </button>
        <span class="dep-drill-sep" aria-hidden="true">/</span>
        <div class="dep-floor-pager" role="group" aria-label="连续切换楼层">
          <button type="button" class="dep-floor-pager-btn" data-drill-floor-btn="${n(f?.id??"")}" ${f?`title="上一层（${n(f.name)}）"`:"disabled"} aria-label="上一层">
            ${re("chevron-left",14)}
          </button>
          <select class="pacom-select" name="drillFloorSelect" data-switch-drill-floor aria-label="切换当前楼层" style="width:auto; min-width:92px;">
            ${a.map(m=>`<option value="${n(m.id)}" ${m.id===s.id?"selected":""}>${n(m.name)}${m.plan?"":"（缺图）"}</option>`).join("")}
          </select>
          <button type="button" class="dep-floor-pager-btn" data-drill-floor-btn="${n(h?.id??"")}" ${h?`title="下一层（${n(h.name)}）"`:"disabled"} aria-label="下一层">
            ${re("chevron-right",14)}
          </button>
        </div>
        <span class="pacom-badge ${e.planChangeAlerts[s.id]?"pacom-badge--warning":s.plan?"pacom-badge--online":"pacom-badge--warning"}">${e.planChangeAlerts[s.id]?"换图待核对":s.plan?"底图已就绪":"待传底图"}</span>
      </div>
      <div class="pacom-unified-head-actions">
        <button type="button" class="pacom-btn" data-jump-floor-marking="${n(s.id)}">前往设备标记 →</button>
      </div>
    </div>

    <div class="dep-plan-preview-box" data-single-floor-drop="${n(s.id)}">
      <div class="dep-plan-toolbar">
        ${s.plan?`<button type="button" class="dep-plan-tool-btn" data-open-lightbox="1" data-lb-title="${n(t.name)} ${n(s.name)} 平面底图" data-lb-src="${n(s.plan.imageUrl)}">查看大图</button>`:""}
        <label class="dep-plan-tool-btn" style="cursor:${!o||!i.spatial?"not-allowed":"pointer"}; opacity:${!o||!i.spatial?"0.45":"1"};">
          <span>${s.plan?"替换底图":"上传底图"}</span>
          <input type="file" name="floorPlanDrop_${n(s.id)}" accept="image/*" data-upload-floor="${n(s.id)}" style="display:none;" ${p} />
        </label>
        ${s.plan?`<button type="button" class="dep-plan-tool-btn" style="color:var(--pacom-status-critical);" data-clear-floor-plan="${n(s.id)}" ${p}>清空</button>`:""}
      </div>
      ${s.plan?`<img src="${n(s.plan.imageUrl)}" alt="${n(s.name)} 平面底图" style="width:100%; max-height:360px; object-fit:contain; display:block;" />`:`<div class="dep-plan-empty-drop">
               <div class="dep-empty-icon">${re("upload",20)}</div>
               <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-primary);">拖拽 ${n(s.name)} 2D 平面图到此处上传</strong>
               <span class="pacom-row-sub">支持透明 WebP / PNG / JPG，上传后可直接前往设备标记</span>
               <label class="pacom-btn pacom-btn--primary" style="cursor:${!o||!i.spatial?"not-allowed":"pointer"}; opacity:${!o||!i.spatial?"0.45":"1"};">
                 <span>选择平面图文件</span>
                 <input type="file" name="floorPlanEmpty_${n(s.id)}" accept="image/*" data-upload-floor="${n(s.id)}" style="display:none;" ${p} />
               </label>
             </div>`}
    </div>

    <section class="pacom-section">
      <div class="pacom-section-head">
        <h2 class="pacom-section-title">楼层属性与空间划分</h2>
        <span class="pacom-row-sub">已关联 ${F.length} 台设备 ｜ ${w.length} 个功能区</span>
      </div>
      <div class="pacom-settings-card">
        <div class="pacom-setting-row">
          <form data-save-floor="${n(s.id)}" style="display:flex; align-items:flex-end; gap:12px; flex-wrap:wrap; flex:1;">
            <label class="dep-field" style="width:120px;">
              <span class="dep-field-label">楼层名称</span>
              <input class="pacom-input" name="fName" value="${n(s.name)}" required ${p} />
            </label>
            <label class="dep-field" style="width:150px;">
              <span class="dep-field-label">建筑面积 (m²)</span>
              <input class="pacom-input" name="fArea" type="number" step="0.1" value="${n(s.areaSqm??"")}" placeholder="选填" ${p} />
            </label>
            <button type="submit" class="pacom-btn" ${p}>保存属性</button>
          </form>
          <button type="button" class="pacom-btn pacom-btn--danger" data-delete-floor="${n(s.id)}" ${!o||!i.spatial||F.length>0?`disabled title="${F.length>0?`已关联 ${F.length} 台设备，请先解绑后再删除`:o?"待后端空间建档接口对接":"当前角色为只读权限"}"`:""}>删除楼层</button>
        </div>

        <div class="pacom-setting-row" style="justify-content:space-between; gap:12px;">
          <div style="display:flex; align-items:center; gap:8px;">
            <div class="pacom-tabs" role="tablist" aria-label="楼层附属配置">
              <button type="button" class="pacom-tab" role="tab" aria-selected="${e.floorDetailTab==="zones"}" data-floor-detail-tab="zones">功能区（${w.length}）</button>
              <button type="button" class="pacom-tab" role="tab" aria-selected="${e.floorDetailTab==="docs"}" data-floor-detail-tab="docs">工程资料（${D.length}）</button>
            </div>
            ${At("功能区与工程资料说明","功能区用于按办公区、实验区、会议室等逻辑范围归类设备与策略；标准层划分后可一键复用至其他楼层。")}
          </div>
          ${e.floorDetailTab==="zones"?w.length>0&&k.length>0?`<button type="button" class="pacom-btn" data-open-copy-zones="${n(s.id)}" ${p}>复用至其他层…</button>`:"":`<label class="pacom-btn" style="cursor:${!o||!i.floorDocs?"not-allowed":"pointer"}; opacity:${!o||!i.floorDocs?"0.45":"1"};">
                   <span>+ 关联文件</span>
                   <input type="file" name="attachDoc_${n(s.id)}" accept=".pdf,.xlsx,.xls,.csv,.doc,.docx,.dwg,.png,.jpg,.jpeg,.webp,.txt" data-attach-doc="${n(s.id)}" style="display:none;" ${$} />
                 </label>`}
        </div>

        ${e.floorDetailTab==="zones"?`
              ${w.length===0?`
                  <div class="pacom-setting-row" style="flex-direction:column; align-items:flex-start; gap:10px;">
                    <span class="pacom-row-sub">本层暂未划分功能区，可一键套用常用标准模板：</span>
                    <div style="display:flex; flex-wrap:wrap; gap:8px;">
                      ${Yn.map(m=>`<button type="button" class="pacom-btn pacom-btn--sm" data-apply-zone-tpl="${n(m.key)}" data-tpl-floor="${n(s.id)}" ${p}>+ ${n(m.label)}</button>`).join("")}
                    </div>
                  </div>`:w.map(m=>e.editingZoneId===m.id?`
                            <form class="pacom-setting-row" style="gap:10px; justify-content:flex-start; align-items:flex-end;" data-save-edit-zone="${n(m.id)}" data-zone-floor="${n(s.id)}">
                              <label class="dep-field" style="width:220px;">
                                <span class="dep-field-label">功能区名称</span>
                                <input class="pacom-input" name="zName" value="${n(m.name)}" required ${p} />
                              </label>
                              <label class="dep-field" style="width:140px;">
                                <span class="dep-field-label">空间类型</span>
                                <select class="pacom-select" name="zCat" ${p}>
                                  ${Object.keys(wa).map(d=>`<option value="${d}" ${m.category===d?"selected":""}>${wa[d]}</option>`).join("")}
                                </select>
                              </label>
                              <button type="submit" class="pacom-btn pacom-btn--primary" ${p}>保存</button>
                              <button type="button" class="pacom-btn" data-cancel-edit-zone="1">取消</button>
                            </form>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">${n(m.name)} <span class="pacom-badge pacom-badge--neutral">${n(wa[m.category]??m.category)}</span></span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-zone="${n(m.id)}" ${p}>编辑</button>
                                <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-del-zone="${n(m.id)}" ${p}>删除</button>
                              </div>
                            </div>`).join("")}
              <form class="pacom-setting-row" style="gap:10px; justify-content:flex-start; align-items:flex-end;" data-add-zone="${n(s.id)}">
                <label class="dep-field" style="width:240px;">
                  <span class="dep-field-label">新增功能区</span>
                  <input class="pacom-input" name="zoneName" placeholder="如：${n(s.name)} 东侧实验区" required ${p} />
                </label>
                <label class="dep-field" style="width:140px;">
                  <span class="dep-field-label">空间类型</span>
                  <select class="pacom-select" name="zoneCat" ${p}>
                    ${Object.keys(wa).map(m=>`<option value="${m}">${wa[m]}</option>`).join("")}
                  </select>
                </label>
                <button type="submit" class="pacom-btn" ${p}>+ 添加功能区</button>
              </form>`:D.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无关联竣工图纸或设备手册，可点击右上角「+ 关联文件」挂载。</span></div>':D.map(m=>`
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">${n(m.name)}</span>
                        <span class="pacom-row-sub">${n(m.boundScope)} ｜ ${n(m.size)} ｜ ${n(m.updatedAt)}</span>
                      </div>
                      <div class="pacom-setting-control">
                        <select class="pacom-select" name="docCat_${n(m.id)}" data-doc-category="${n(m.id)}" aria-label="资料分类" style="width:108px;" ${ba(o,i.manageDocs,"待后端资料分类接口对接")}>
                          ${Ds.map(d=>`<option value="${d}" ${m.category===d?"selected":""}>${d}</option>`).join("")}
                        </select>
                        <button type="button" class="pacom-btn pacom-btn--sm" data-preview-doc="${n(m.id)}">${m.fileUrl?"打开":"查阅"}</button>
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-del-doc="${n(m.id)}" ${ba(o,i.manageDocs,"待后端工程资料删除接口对接")}>删除</button>
                      </div>
                    </div>`).join("")}
      </div>
    </section>
  `}function Bt(e,t,a){return e?t?"":`disabled title="${n(a)}"`:'disabled title="当前角色为只读权限"'}const ts="pacom.web.deployState.v1";function Us(){try{if(typeof sessionStorage<"u"){const e=sessionStorage.getItem(ts);if(e)return JSON.parse(e)}}catch{}return{}}async function Vs(e,t,a){let s=a;const o=xs(t),i=qs(),p=Us(),$=new URLSearchParams(window.location.hash.split("?")[1]??""),u=$.get("sec"),f=$.get("floor");let h=u?u==="floorplan"||u==="devices"?"device_marking":u==="inventory"?"device_list":u==="groups"?"device_groups":u==="network"||u==="network_topo"?"device_network":u==="connections"?"connections":u==="overview"||u==="acceptance"?"acceptance":"project_config":p.activeNav??"project_config",w=u==="floors"?"floor":!u&&p.projectDrill?p.projectDrill:"overview",D=Ha(),F=!1,k="",m=await t.getSpatialTree(),d=[];const b=new Map;let B=[],O={},Q={version:1,dirty:!1,lastSyncedAt:null},J={};const X=new Map;let ce=[],ee=[],me=[],K=[],A={},W={},ue={},ve={},we=new Set;const Ce={...ks},xe=new Map;let z=!1;const Y=D.level!=="all-projects"?D.projectId:"",Le=D.level==="building"||D.level==="floor"?D.buildingId:"",V=D.level==="floor"?D.floorId:"",S=f?m.floors.find(_=>_.id===f):null,q=S?m.buildings.find(_=>_.id===S.buildingId):null;let P=q?.projectId??(Y&&m.projects.some(_=>_.id===Y)?Y:p.activeProjectId&&m.projects.some(_=>_.id===p.activeProjectId)?p.activeProjectId:m.projects[0]?.id??""),g=q?.id??(Le&&m.buildings.some(_=>_.id===Le&&_.projectId===P)?Le:p.activeBuildingId&&m.buildings.some(_=>_.id===p.activeBuildingId&&_.projectId===P)?p.activeBuildingId:m.buildings.find(_=>_.projectId===P)?.id??""),L=S?.id??(V&&m.floors.some(_=>_.id===V&&_.buildingId===g)?V:p.activeFloorId&&m.floors.some(_=>_.id===p.activeFloorId&&_.buildingId===g)?p.activeFloorId:""),ne="all",Oe="",Ke=!1,st=!1,Ue=!1,se=!1,j="zones",M=null,ae="device",be="",ye="",Qe="all",rt=!1,Fe=!1,je="binding",Te=null,Be=null,ot=!1,v=!1,T=1,de=0,Se=0,et="",Ye="all",Je="all",Ve="mesh",qe=[],He="list",mt="",wt="all",ha=null,Aa=null,ze=null,Me=null,pt=!1,Ot="active",Gt=!1,gt=null,Ze="",bt=null,Tt=$.get("new")==="project",Zt=null,Dt=null,sa=!1,oa=!1,ia=null,Kt=null,la=null,ra=!1,ca=null,It=!1,Yt=!1,_t=[],Ct=null,Et=new Set,da=!1,it=null,Jt=null,ya=null,yt=!1,I="",N=null,te=null,G=null,fe=null,ie="",ke="",tt=null;function Ae(_){ke="",tt=null,h==="device_marking"?(ye=_,ie=""):(ie=_,ye="")}function pe(_,U=null){ie="",ye="",ke=ht(_),tt=U}function $e(){try{typeof sessionStorage<"u"&&sessionStorage.setItem(ts,JSON.stringify({activeNav:h,projectDrill:w,activeProjectId:P,activeBuildingId:g,activeFloorId:L}))}catch{}}function Ie(_){if(!_){Be=null;return}const U=d.filter(Z=>Z.category==="gateway");Be={deviceId:_.id,gatewayId:_.hardwareBinding?.gatewayId??(_.category==="gateway"?_.id:U[0]?.id??""),protocol:_.hardwareBinding?.protocol??sn[0],networkAddress:_.hardwareBinding?.networkAddress??"",portOrChannel:_.hardwareBinding?.portOrChannel??"",physicalInstalled:_.physicalInstalled}}function ge(_){return[...m.floors.filter(U=>U.buildingId===_)].sort((U,Z)=>Ma(Z.name)-Ma(U.name))}function We(_){if(!_)return"未分配功能区";const U=m.zones.find(oe=>oe.id===_);if(!U)return _;const Z=m.floors.find(oe=>oe.id===U.floorId);return Z?U.name.replace(new RegExp(`^${Z.name}\\s*`,"i"),""):U.name}function le(){Ze="",Tt=!1,Zt=null,Dt=null,sa=!1,oa=!1,ia=null,Kt=null,la=null,ra=!1,ca=null,It=!1,Ct=null,da=!1,it=null,Jt=null,ya=null,yt=!1,N=null,te=null,G=null}function Da(){return!!(Tt||sa||oa||la||ra||It||Ct||da||it||Jt||yt||N||te||G)}function Qt(){if(!P){D=qt({level:"all-projects"});return}g&&L?D=qt({level:"floor",projectId:P,buildingId:g,floorId:L}):g?D=qt({level:"building",projectId:P,buildingId:g}):D=qt({level:"project",projectId:P})}function $a(_){const U=ge(_);if(U.length===0)return"";const Z=U.find(Ee=>(b.get(Ee.id)?.length??0)>0);if(Z)return Z.id;const oe=U.find(Ee=>Rt(Ee.name)==="1F");if(oe)return oe.id;const he=U.filter(Ee=>Ee.kind==="above").sort((Ee,Re)=>Ee.level-Re.level);return he.length>0?he[0].id:U[0].id}function Xt(_){const U=m.floors.find(he=>he.id===_);if(!U)return;L&&L!==U.id&&(Te?xe.set(L,{selectedId:Te,drawerOpen:Fe,drawerTab:je}):xe.delete(L)),L=U.id,g=U.buildingId;const Z=m.buildings.find(he=>he.id===U.buildingId);Z&&(P=Z.projectId),Qt();const oe=xe.get(U.id);oe?(Te=oe.selectedId,Fe=oe.drawerOpen,je=oe.drawerTab):(Te=null,Fe=!1),v=!1,M=null,T=1,de=0,Se=0}async function Ge(){if(!L){d=[],B=[],O={},Q={version:1,dirty:!1,lastSyncedAt:null},ce=[],ee=[];return}const[_,U,Z,oe,he,Ee,Re,at]=await Promise.all([t.getFloorDevices(L).catch(()=>[]),t.listLightMarkers?t.listLightMarkers(L).catch(()=>[]):Promise.resolve([]),t.listMeshRoles?t.listMeshRoles(L).catch(()=>({})):Promise.resolve({}),t.getEdgeSyncState?t.getEdgeSyncState(L).catch(()=>({version:1,dirty:!1,lastSyncedAt:null})):Promise.resolve({version:1,dirty:!1,lastSyncedAt:null}),t.listDeviceGroups?t.listDeviceGroups(L).catch(()=>[]):Promise.resolve([]),t.listFloorDocs?t.listFloorDocs(L).catch(()=>[]):Promise.resolve([]),t.getFloorFttRecord?t.getFloorFttRecord(L).catch(()=>null):Promise.resolve(null),t.getFloorCurrentSignature?t.getFloorCurrentSignature(L).catch(()=>""):Promise.resolve("")]);d=_,b.set(L,_),B=U,O=Z,Q=oe,J[L]=oe,ce=he,ee=Ee,at&&(W[L]=at),Re?ve[L]=Re:delete ve[L],t.getDeviceParams&&await Promise.all(_.map(async r=>{const c=await t.getDeviceParams(r.id).catch(()=>null);c&&X.set(r.id,c)})),Te&&!d.some(r=>r.id===Te)&&(Te=null,Fe=!1,ot=!1,Be=null);const l=d.find(r=>r.id===Te);(!Be||Be.deviceId!==l?.id)&&Ie(l)}async function St(){if(b.clear(),J={},ve={},ue={},we=new Set,K=[],A={},W={},!g)return;const _=ge(g);if(t.listPlanChangeAlerts&&(ue=await t.listPlanChangeAlerts(g).catch(()=>({}))),t.listDeferredFloorIds){const oe=await t.listDeferredFloorIds(g).catch(()=>[]);we=new Set(oe)}t.listDeliverySnapshotMeta&&(A=await t.listDeliverySnapshotMeta(g).catch(()=>({})));const U=[];await Promise.all(_.map(async oe=>{if(!(s.scope.allowedFloorIds.includes(oe.id)||s.scope.canEditDeployment)){b.set(oe.id,[]);return}const[Ee,Re,at,l,r]=await Promise.all([t.getFloorDevices(oe.id).catch(()=>[]),t.getEdgeSyncState?t.getEdgeSyncState(oe.id).catch(()=>({version:1,dirty:!1,lastSyncedAt:null})):Promise.resolve({version:1,dirty:!1,lastSyncedAt:null}),t.getFloorFttRecord?t.getFloorFttRecord(oe.id).catch(()=>null):Promise.resolve(null),t.listDeliveryBatches(oe.id).catch(()=>[]),t.getFloorCurrentSignature?t.getFloorCurrentSignature(oe.id).catch(()=>""):Promise.resolve("")]);b.set(oe.id,Ee),J[oe.id]=Re,at&&(ve[oe.id]=at),r&&(W[oe.id]=r),U.push(l)}));const Z=new Set;K=U.flat().filter(oe=>Z.has(oe.id)?!1:(Z.add(oe.id),!0)).sort((oe,he)=>he.frozenAt.localeCompare(oe.frozenAt))}async function ct(){ke="",tt=null;const _=await t.getSession().catch(()=>null);_&&(s=_),m=await t.getSpatialTree();let U=!1;if(m.projects.length===0)P="",g="",L="",w="overview";else{m.projects.some(he=>he.id===P)||(P=m.projects[0].id,w="overview");const Z=m.buildings.filter(he=>he.projectId===P);Z.some(he=>he.id===g)||(g=Z[0]?.id??"",w!=="overview"&&(w="overview"),U=!0),(g?ge(g):[]).some(he=>he.id===L)||(U=!0,w==="floor"&&(w=g?"building":"overview"))}me=P?await t.listConnections(P).catch(()=>[]):[],await St(),g&&(U||!L)&&(L=$a(g)),Qt(),await Ge(),E()}const cn=_=>{if(!document.body.contains(e)){document.removeEventListener("keydown",cn),document.removeEventListener("click",Ga),i.destroy();return}if(_.key==="Escape"){fe?(fe=null,E()):Da()?(le(),E()):pt||ze||Ke?(pt=!1,ze=null,Ke=!1,E()):F?(F=!1,E()):v?(v=!1,E()):Fe&&(Fe=!1,E());return}if(_.key==="Tab"&&Da()){const U=e.querySelector(".dep-modal-card");if(!U)return;const Z=Array.from(U.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])')).filter(Ee=>Ee.offsetParent!==null);if(Z.length===0)return;const oe=Z[0],he=Z[Z.length-1];_.shiftKey&&document.activeElement===oe?(_.preventDefault(),he.focus()):!_.shiftKey&&document.activeElement===he&&(_.preventDefault(),oe.focus())}},Ga=_=>{if(!document.body.contains(e)){document.removeEventListener("click",Ga);return}const U=_.target;pt&&!U?.closest(".dep-more-wrap")&&(pt=!1,E()),ze&&!U?.closest(".dep-row-menu-wrap")&&(ze=null,E()),Ke&&!U?.closest(".dep-l2-more-wrap")&&(Ke=!1,E()),F&&!U?.closest('[data-role="global-space-wrap"]')&&(F=!1,E())};document.addEventListener("keydown",cn),document.addEventListener("click",Ga);function _a(){const _=e.querySelector('[data-role="dep-viewport"]');_&&(_.style.transform=`translate(${de}px, ${Se}px) scale(${T})`);const U=e.querySelector('[data-role="dep-zoom-label"]');U&&(U.textContent=`${Math.round(T*100)}%`)}function dn(_){if(!s.scope.canEditDeployment){pe("当前角色为只读权限，无法执行设备自检。"),E();return}const U=t.mode==="demo";_.hardwareBinding?_.connectivity!=="online"?pe(`单机自检未通过（FAIL）：「${_.name}」当前${_.connectivity==="unknown"?"待入网":"离线"}，请核查网关链路或现场供电。`):Ae(U?`演示单机回读自检通过（PASS）：「${_.name}」模拟状态校验一致。`:`单机回读自检通过（PASS）：「${_.name}」指令下发与状态回读一致，已安全复位。`):pe(`单机自检未通过（FAIL）：「${_.name}」尚未完成硬件绑定（当前待入网），请先填写协议、地址与上游网关后再执行自检。`),E()}async function pn(_){if(!s.scope.canEditDeployment){pe("当前角色为只读权限，无法执行全层自检。"),E();return}ke="",tt=null;const U=t.mode==="demo",Z=m.floors.find(l=>l.id===_)?.name??"当前楼层",oe=b.get(_)??(_===L?d:[]);if(oe.length===0){pe(`${Z} 尚无登记设备，无法执行全层自检。`),E();return}if(J[_]?.dirty){pe(`${Z} 存在未下发的配置变更，请先前往「设备网络」同步至边缘网关后再执行全层自检。`,{label:"前往同步 →",nav:"device_network"}),E();return}if(ue[_]){pe(`${Z} 更换底图后尚未确认点位核对，请先在「设备标记」核对并确认点位后再执行全层自检。`,{label:"前往核对点位 →",nav:"device_marking"}),E();return}const he=oe.filter(l=>l.connectivity!=="online"||!l.hardwareBinding),Ee=oe.length-he.length,Re=new Date,at=`${String(Re.getHours()).padStart(2,"0")}:${String(Re.getMinutes()).padStart(2,"0")}:${String(Re.getSeconds()).padStart(2,"0")}`;if(gt={buildingId:g,floorId:_,ranAt:at,floorName:Z,total:oe.length,passed:Ee,failed:he.length,failedNames:he.map(l=>`${l.name}${l.hardwareBinding?l.connectivity==="unknown"?"（待入网）":"（离线）":"（未绑定/待入网）"}`)},he.length>0)pe(`${Z} 全层批量自检完成：${Ee}/${oe.length} 台通过，${he.length} 台异常（${gt.failedNames.join("、")}）。`);else{if(t.recordFloorFttPass){const l=await t.recordFloorFttPass(_,oe.length).catch(()=>null);l&&(ve[_]=l)}Ae(U?`${Z} 演示全层自检通过（${Ee}/${oe.length}），已签发当前配置基线自检凭证。`:`${Z} 全层批量自检全部通过（${Ee}/${oe.length}），设备已自动安全复位。`)}E()}function as(){const _=d.filter(Wt),U=[],Z=_.filter(c=>c.connectivity==="offline"),oe=_.filter(c=>c.connectivity==="unknown"||!c.hardwareBinding&&c.connectivity!=="offline"),he=_.filter(c=>c.connectivity==="online"),Ee=_.filter(c=>!c.planPoint),Re=_.filter(c=>O[c.id]?.proxy).length,at=_.filter(c=>O[c.id]?.relay).length,l=_.length?at/_.length:0;_.length===0?U.push({level:"warn",title:"本层暂无蓝牙 Mesh 无线节点",detail:"可在「设备标记」中新增网关、传感器或照明面板。"}):(Z.length>0&&Z.forEach(c=>U.push({level:"fail",title:`无线节点不可达：${c.name}`,detail:"建议核查供电及网关距离，必要时在遮挡拐角处增设中继器。",deviceId:c.id})),oe.length>0&&U.push({level:"warn",title:`尚有 ${oe.length} 台无线节点待绑定入网`,detail:`${oe.map(c=>c.name).join("、")} 尚未完成硬件绑定，无法参与组网同步与心跳探测。`,deviceId:oe[0]?.id}),Z.length===0&&oe.length===0&&he.length>0&&U.push({level:"ok",title:"蓝牙 Mesh 节点全部在线可达",detail:`${he.length} 台已绑定无线节点均正常响应心跳。`})),_.length>0&&Re<1?U.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，便于移动端就近入网。"}):Re>0&&U.push({level:"ok",title:`代理节点配置合理（${Re} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),l>.25&&_.length>=4&&U.push({level:"warn",title:`中继比例偏高（${Math.round(l*100)}%）`,detail:"建议将 Relay 中继控制在总节点 10% 左右，避免广播风暴。"}),Ee.length>0&&U.push({level:"warn",title:`尚有 ${Ee.length} 台无线节点未完成设备标记`,detail:"请前往「设备标记」补齐平面坐标以便现场施工定位。"}),qe=U;const r=U.filter(c=>c.level!=="ok").length;Ae(`已完成无线蓝牙 Mesh 网络体检（检测 ${_.length} 台节点，在线 ${he.length} 台，待处理 ${r} 项）。`),E()}function ns(){const _=Ee=>`"${String(Ee).replaceAll('"','""')}"`;if(h==="acceptance"){const Ee=mn(),Re=m.buildings.find(C=>C.id===g),at=g?ge(g):[],l=[`[楼层部署门控汇总 - ${Re?.name??"当前楼宇"}]`,["楼层","底图状态","设备标记","绑定与物理复核","在线入网","边缘同步","自检FTT","交付状态","阻止项"].join(","),...at.map(C=>{const x=Na(Ee,C.id);return[C.name,x.planAlert?"换图待核对":x.hasPlan?`已就绪(v${C.plan?.planVersion??1})`:"待传底图",`${x.placedCount}/${x.deviceCount}`,`${x.boundVerifiedCount}/${x.deviceCount}`,`${x.onlineCount}/${x.deviceCount}`,x.deferred?"本期不纳入":x.deviceCount===0?"未部署":x.syncDirty?"待同步":"已同步",x.deferred?"不适用":x.deviceCount===0?"未部署":x.fttRecord?"已通过":"未自检",x.deferred?"本期不纳入":x.readyForFormalFreeze?"可正式冻结":x.deviceCount>0?"实施中":"待配置",x.blockers.join(" / ")||"无"].map(_).join(",")}),"","[整栋设备部署明细]",["楼层","设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...at.flatMap(C=>(b.get(C.id)??[]).map(x=>[C.name,x.name,x.category,We(x.logicalZoneId),x.planPoint?`${Math.round(x.planPoint.x*100)}%/${Math.round(x.planPoint.y*100)}%`:"未标记",x.hardwareBinding?`${x.hardwareBinding.protocol} ${x.hardwareBinding.networkAddress}`:"未绑定",x.physicalInstalled?"已复核":"待复核",x.connectivity==="online"?"在线":x.connectivity==="unknown"?"待入网":"离线"].map(_).join(","))),"","[交付冻结与阶段留档记录]",["版本标签","所属楼层","核验进度","状态","记录人","时间","备注"].join(","),...K.map(C=>[C.versionTag,m.floors.find(x=>x.id===C.floorId)?.name??C.floorId,`${C.verifiedCount}/${C.deviceCount}`,C.status==="draft"?"阶段留档":C.status==="delivered"?"已交付":"已冻结",C.frozenBy,C.frozenAt,C.note??""].map(_).join(","))],r=new Blob([`\uFEFF${l.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(r),y=document.createElement("a");y.href=c,y.download=`pacom-deployment-checklist-${Re?.name??"building"}.csv`,y.click(),URL.revokeObjectURL(c);return}const U=[["楼层","设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...d.map(Ee=>[m.floors.find(Re=>Re.id===Ee.floorId)?.name??Ee.floorId,Ee.name,Ee.category,We(Ee.logicalZoneId),Ee.planPoint?`${Math.round(Ee.planPoint.x*100)}%/${Math.round(Ee.planPoint.y*100)}%`:"未标记",Ee.hardwareBinding?`${Ee.hardwareBinding.protocol} ${Ee.hardwareBinding.networkAddress}`:"未绑定",Ee.physicalInstalled?"已复核":"待复核",Ee.connectivity==="online"?"在线":Ee.connectivity==="unknown"?"待入网":"离线"].map(_).join(","))],Z=new Blob([`\uFEFF${U.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),oe=URL.createObjectURL(Z),he=document.createElement("a");he.href=oe,he.download="pacom-device-list.csv",he.click(),URL.revokeObjectURL(oe)}async function ss(_){const U=m.buildings.find(oe=>oe.id===_);if(!U||!t.upsertFloor)return 0;const Z=Wa(U,ge(U.id));for(const oe of Z)await t.upsertFloor({buildingId:U.id,kind:oe.kind,level:oe.level,name:oe.name});return Z.length}function os(_,U){const Z=l=>`"${String(l).replaceAll('"','""')}"`,oe=_.status==="draft"?"阶段留档":_.status==="delivered"?"已交付":"已冻结",he=[`[PACOM Station 单批交付快照 - ${_.versionTag}]`,["版本标签","状态","所属楼层","底图版本","边缘基线","核验进度","冻结人","冻结时间","签收人","签收时间","备注"].join(","),[_.versionTag,oe,U.floorName,U.planVersion>0?`v${U.planVersion}`:"无底图",`v${U.edgeSyncVersion}`,`${_.verifiedCount}/${_.deviceCount}`,_.frozenBy,_.frozenAt,U.signedOffBy??"—",U.signedOffAt??"—",U.signOffNote??_.note??""].map(Z).join(","),"","[逐设备核验快照]",...U.snapshotSource==="legacy_missing"?[Z("说明：历史种子基线不含冻结时刻的原始逐设备明细，不以当前实时设备冒充。")]:[["设备名称","类别","功能区","图上坐标","上游网关","硬件绑定协议与地址","端口/回路","自治参数摘要","物理复核","连通状态"].join(","),...U.devices.map(l=>[l.name,l.category,l.zoneLabel,l.placed&&l.planX!==void 0&&l.planY!==void 0?`${Math.round(l.planX*100)}%/${Math.round(l.planY*100)}%`:l.placed?"已标记":"未标记",l.gatewayName??"—",l.bound?`${(l.protocol??"").toUpperCase()} ${l.address??""}`:"未绑定",l.portOrChannel??"—",l.paramsSummary??"默认参数",l.physicalInstalled?"已复核":"待复核",l.connectivity==="online"?"在线":l.connectivity==="unknown"?"待入网":"离线"].map(Z).join(","))]],Ee=new Blob([`\uFEFF${he.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),Re=URL.createObjectURL(Ee),at=document.createElement("a");at.href=Re,at.download=`pacom-snapshot-${_.versionTag}.csv`,at.click(),URL.revokeObjectURL(Re)}function is(){const _=me.some(Z=>Z.status!=="connected"),U=(Z,oe,he,Ee,Re)=>`
      <button type="button" class="pacom-unified-item" aria-current="${h===Z}" data-dep-nav="${Z}">
        ${re(oe,16)}
        <span>${he}</span>
        ${Ee?`<span class="dep-nav-meta"><span class="dep-nav-pip dep-nav-pip--${Ee}" title="${n(Re??"")}" aria-hidden="true"></span></span>`:""}
      </button>`;return`
      <aside class="pacom-unified-rail" aria-label="系统部署菜单">
        <div class="pacom-unified-group">
          <div class="pacom-unified-group-title">空间建档</div>
          ${U("project_config","layers","项目配置")}
        </div>
        <div class="pacom-unified-group">
          <div class="pacom-unified-group-title">设备部署</div>
          ${U("device_marking","map-pin","设备标记")}
          ${U("device_list","list","设备列表")}
          ${U("device_groups","folder-kanban","设备分组")}
          ${U("device_network","waypoints","设备网络",Q.dirty?"warn":void 0,"当前层有未同步至边缘网关的配置变更")}
        </div>
        <div class="pacom-unified-group">
          <div class="pacom-unified-group-title">接入与验收</div>
          ${U("connections","plug","系统接入",_?"crit":void 0,"当前项目存在通信降级或断开通道")}
          ${U("acceptance","clipboard-check","交付验收")}
        </div>
      </aside>
    `}function un(_){if(m.projects.length===0)return`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${Bt(_,o.spatial,"待后端空间建档接口对接")}>+ 新建项目</button>`;if(h==="project_config"){if(w!=="overview")return"";const oe=Bt(_,o.spatial,"待后端空间建档接口对接"),he=m.buildings.some(Ee=>Ee.projectId===P);return`
        <button type="button" class="pacom-btn" data-open-new-proj="1" ${oe}>+ 新建项目</button>
        ${he?`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-bld="1" ${oe}>+ 新建楼宇</button>`:""}
      `}if(h==="device_marking")return`
        <button type="button" class="pacom-btn" data-export-inv="1">导出标记表</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-dev="1" ${Bt(_,o.createDevice,"待后端设备建档接口对接")}>+ 新增设备</button>
      `;if(h==="device_list")return`
        <button type="button" class="pacom-btn" data-export-inv="1">导出 CSV</button>
        <button type="button" class="pacom-btn" data-batch-ftt="1" ${!_||d.length===0?`disabled title="${_?"本层暂无设备":"当前角色为只读权限"}"`:""}>全层自检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-dev="1" ${Bt(_,o.createDevice,"待后端设备建档接口对接")}>+ 新增设备</button>
      `;if(h==="device_groups")return`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-group="1" ${Bt(_,o.deviceGroups,"待后端设备分组接口对接")}>+ 新建分组</button>`;if(h==="device_network")return`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${Bt(_,o.edgeSync,"待后端边缘同步接口对接")}>${Q.dirty?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `;if(h==="connections"){const oe=Bt(_,o.restartEdge,"待后端边缘维护接口对接");return`
        <div class="dep-more-wrap">
          <button type="button" class="pacom-square-icon-btn" data-toggle-conn-more="1" aria-haspopup="menu" aria-expanded="${pt}" aria-label="更多操作" title="更多操作">${re("more-horizontal",16)}</button>
          ${pt?`<div class="dep-more-menu" role="menu">
                   <button type="button" class="dep-more-item dep-more-item--danger" role="menuitem" data-req-restart-edge="1" ${oe}>
                     ${re("rotate-ccw",14)}
                     <span>重启边缘服务</span>
                   </button>
                 </div>`:""}
        </div>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-conn="1" ${Bt(_,o.manageConnections,"待后端系统接入写入接口对接")}>+ 新增接入通道</button>
      `}const Z=(g?ge(g):[]).reduce((oe,he)=>oe+(b.get(he.id)?.length??0),0);return`
      <button type="button" class="pacom-btn" data-export-inv="1">导出部署清单</button>
      <button type="button" class="pacom-btn pacom-btn--primary" data-open-freeze-modal="1" ${!_||Z===0?`disabled title="${_?"本栋尚无已登记设备，请先前往设备标记":"当前角色为只读权限"}"`:""}>交付冻结</button>
    `}function mn(){return{session:s,canEdit:s.scope.canEditDeployment,isDemoMode:t.mode==="demo",caps:o,tree:m,activeNav:h,projectDrill:w,activeProjectId:P,activeBuildingId:g,activeFloorId:L,floorDevices:d,buildingDevicesByFloor:b,lightMarkers:B,meshRoles:O,edgeSync:Q,edgeSyncByFloor:J,deviceParams:X,groups:ce,floorDocs:ee,connections:me,buildingDeliveries:K,deliverySnapshotMetaMap:A,floorCurrentSignatures:W,planChangeAlerts:ue,floorFttRecords:ve,deferredFloorIds:we,zoneBoxes:Ce,floorListFilter:ne,floorListSearch:Oe,l2MoreOpen:Ke,batchAreaOpen:st,batchAreaIncludeBelow:Ue,batchAreaIncludeRoof:se,floorDetailTab:j,editingZoneId:M,canvasBrush:ae,canvasSearch:be,canvasNotice:ye,deviceFilter:Qe,hudPoolOpen:rt,drawerOpen:Fe,drawerTab:je,selectedId:Te,bindingDraft:Be,editingDeviceMeta:ot,placingMode:v,zoom:T,panX:de,panY:Se,listSearch:et,listStatusFilter:Ye,listCategoryFilter:Je,topoMode:Ve,meshFindings:qe,connViewMode:He,connSearch:mt,connStatusFilter:wt,expandedConnId:ha,selectedTopoConnId:Aa,connMenuOpenId:ze,copiedEndpointId:Me,connMoreOpen:pt,acceptanceFilter:Ot,showEmptyBuildingMatrix:Gt,batchFttResult:gt,modalError:Ze,returnTrail:bt,showNewProjectModal:Tt,projFormDraft:Zt,newProjCoverDataUrl:Dt,showEditProjectModal:sa,showNewBuildingModal:oa,bldFormDraft:ia,newBldImageDataUrl:Kt,editingBuildingId:la,showNewFloorModal:ra,floorFormDraft:ca,showBatchModal:It,batchDropActive:Yt,pendingBatchUploads:_t,copyZoneSourceFloorId:Ct,copyTargetFloorIds:Et,showNewDevModal:da,groupModal:it,connModal:Jt,connFormDraft:ya,showFreezeModal:yt,freezeTargetFloorId:I,snapshotDetailModal:N,planSwapReviewFloorId:te,confirmDialog:G,lightboxPlan:fe,sortedBuildingFloors:ge,getZoneLabel:We}}function E(){$e(),i.close();const _=mn(),{canEdit:U}=_,Z=s.scope.activeOverrides.find(r=>r.module==="deployment"&&r.status==="active"),oe=Z?`<div class="pacom-banner pacom-banner--ok">
          <div class="pacom-banner-text">
            <span class="pacom-banner-title">临时提权生效中（系统部署 ｜ ${Z.durationHours}h）</span>
            <span class="pacom-banner-sub">审批人：${n(Z.approvedBy)} ｜ 到期自动收回：${n(Z.expiresAt.slice(0,16).replace("T"," "))} ｜ 事由：${n(Z.reason)}</span>
          </div>
        </div>`:"",he=Is[h],Ee=h==="device_marking",Re=h==="project_config"&&w!=="overview",at=!Ee&&h!=="device_list",l=ke?`<div class="pacom-alert-banner" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
           <span>${n(ke)}</span>
           ${tt?`<button type="button" class="pacom-btn pacom-btn--sm" data-dep-nav="${tt.nav}">${n(tt.label)}</button>`:""}
         </div>`:"";e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${Ua({tree:m,session:s,scope:D,maxGranularity:he.granularity,isOpen:F,searchKeyword:k})}
            </div>
            <div class="pacom-header-meta">
              ${U?Z?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${is()}
          ${Ee?`<div class="pacom-unified-main--canvas">
                  <div class="dep-canvas-topbar">
                    <div class="pacom-unified-head-copy">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <h2 class="pacom-unified-title">${he.title}</h2>
                        ${bt?`<button type="button" class="dep-return-pill" data-return-trail="1">${re("arrow-left",14)}<span>返回${n(bt.label)}</span></button>`:""}
                      </div>
                      <p class="pacom-unified-subtitle">${he.subtitle}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${un(U)}
                    </div>
                  </div>
                  ${oe}
                  ${l}
                  ${Os(_)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner ${at?"pacom-unified-inner--reading":""}">
                  ${Re?"":`<div class="pacom-unified-head pacom-unified-head--split">
                          <div class="pacom-unified-head-copy">
                            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                              <h2 class="pacom-unified-title">${he.title}</h2>
                              ${bt&&h==="device_list"?`<button type="button" class="dep-return-pill" data-return-trail="1">${re("arrow-left",14)}<span>返回${n(bt.label)}</span></button>`:""}
                            </div>
                            <p class="pacom-unified-subtitle">${he.subtitle}</p>
                          </div>
                          <div class="pacom-unified-head-actions">
                            ${un(U)}
                          </div>
                        </div>`}
                  ${oe}
                  ${ie?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${n(ie)}</span></div>`:""}
                  ${l}
                  ${h==="project_config"?Ps(_):h==="device_list"?Ts(_):h==="device_groups"?Bs(_):h==="device_network"?Rs(_):h==="connections"?Fs(_):js(_)}
                </div>
              </div>`}
        </div>
      </div>
      ${Ms(_)}
    `,rs(),i.bind(e)}async function ls(_){try{if(_.kind==="delete_project"){const U=m.projects.find(Z=>Z.id===_.projectId);await t.deleteProject?.(_.projectId),le(),w="overview",ie=`已删除项目「${U?.name??_.projectId}」。`,await ct()}else if(_.kind==="delete_building"){const U=m.buildings.find(Z=>Z.id===_.buildingId);await t.deleteBuilding?.(_.buildingId),le(),w="overview",ie=`已删除楼宇「${U?.name??_.buildingId}」。`,await ct()}else if(_.kind==="delete_floor"){const U=m.floors.find(Z=>Z.id===_.floorId);await t.deleteFloor?.(_.floorId),le(),w="building",ie=`已删除楼层「${U?.name??_.floorId}」。`,await ct()}else if(_.kind==="clear_floor_plan"){const U=m.floors.find(Z=>Z.id===_.floorId);U&&await t.upsertFloor?.({id:U.id,buildingId:U.buildingId,kind:U.kind,level:U.level,name:U.name,areaSqm:U.areaSqm,planImageUrl:null}),le(),ie=`已清空「${U?.name??""}」平面底图。`,await ct()}else if(_.kind==="delete_zone"){const U=m.zones.find(Z=>Z.id===_.zoneId);await t.deleteZone?.(_.zoneId),M===_.zoneId&&(M=null),le(),ie=`已删除功能区「${U?.name??""}」。`,await ct()}else if(_.kind==="delete_doc"){const U=ee.find(Z=>Z.id===_.docId);await t.deleteFloorDoc?.(_.docId),le(),ie=`已移除工程资料「${U?.name??""}」。`,await Ge(),E()}else if(_.kind==="delete_device"){const U=d.find(Z=>Z.id===_.deviceId);await t.deleteDeploymentDevice?.(_.deviceId),Te===_.deviceId&&(Te=null,Fe=!1,ot=!1,Be=null),le(),ie=`已删除设备「${U?.name??""}」（关联分组与灯点已同步清理）。`,await St(),await Ge(),E()}else if(_.kind==="delete_group"){const U=ce.find(Z=>Z.id===_.groupId);await t.deleteDeviceGroup?.(_.groupId),le(),ie=`已删除设备分组「${U?.name??""}」。`,await Ge(),E()}else if(_.kind==="delete_connection"){const U=me.find(Z=>Z.id===_.connectionId);await t.deleteConnection?.(_.connectionId),le(),ie=`已删除接入通道「${U?.name??""}」。`,me=P?await t.listConnections(P).catch(()=>[]):[],E()}else _.kind==="restart_edge"&&(await t.restartEdgeService?.(_.projectId),le(),ie="已下发「重启边缘服务」指令，边缘网关将在 5 秒内平滑重连。",E())}catch(U){le(),pe(U),E()}}function rs(){Va(e,{onToggle:()=>{F=!F,E(),F&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:l=>{k=l,E();const r=e.querySelector("[data-global-space-search]");r&&(r.focus(),r.setSelectionRange(l.length,l.length))},onPick:async l=>{if(D=l,F=!1,ie="",ke="",l.level==="project"){const r=l.projectId!==P;P=l.projectId,h==="project_config"&&r&&(w="overview"),g=m.buildings.find(y=>y.projectId===l.projectId)?.id??"",L="",me=await t.listConnections(P).catch(()=>[]),await St(),g&&(L=$a(g)),Qt(),await Ge()}else if(l.level==="building"){const r=m.buildings.find(c=>c.id===l.buildingId);r&&(P=r.projectId,g=r.id,Te=null,Fe=!1,v=!1,await St(),L=$a(r.id),Qt(),await Ge())}else if(l.level==="floor"){const r=m.floors.find(c=>c.id===l.floorId)?.buildingId!==g;Xt(l.floorId),r&&await St(),await Ge()}E()}}),e.querySelectorAll("[data-dep-nav]").forEach(l=>{l.addEventListener("click",async()=>{const r=l.dataset.depNav??"project_config";h=r,r==="project_config"&&(w="overview"),Fe=!1,v=!1,pt=!1,ze=null,Ke=!1,bt=null,ie="",ye="",ke="",tt=null,r==="acceptance"&&await St(),Qt(),await Ge(),E()})}),e.querySelector("[data-return-trail]")?.addEventListener("click",async()=>{if(!bt)return;const l=bt.nav;bt=null,h=l,ie="",ye="",ke="",l==="acceptance"&&await St(),await Ge(),E()}),e.querySelector("[data-dismiss-canvas-notice]")?.addEventListener("click",()=>{ye="",E()}),e.querySelector("[data-toggle-l2-more]")?.addEventListener("click",l=>{l.stopPropagation(),Ke=!Ke,E()}),e.querySelector("[data-batch-fill-area]")?.addEventListener("click",()=>{Ke=!1,st=!st,E()}),e.querySelectorAll("[data-batch-area-opt]").forEach(l=>{l.addEventListener("change",()=>{l.dataset.batchAreaOpt==="below"&&(Ue=l.checked),l.dataset.batchAreaOpt==="roof"&&(se=l.checked),E()})}),e.querySelector("[data-close-batch-area]")?.addEventListener("click",()=>{st=!1,E()}),e.querySelector("[data-apply-batch-area]")?.addEventListener("submit",async l=>{l.preventDefault();const r=l.currentTarget,c=r.dataset.applyBatchArea,y=Number(new FormData(r).get("batchStdArea")??0);if(!Number.isFinite(y)||y<=0)return;const C=ge(c).filter(x=>x.areaSqm?!1:x.kind==="above"?!0:x.kind==="below"?Ue:x.kind==="roof"?se:!1);if(C.length===0){pe("当前勾选范围内没有空缺面积的楼层。"),E();return}try{for(const x of C)await t.upsertFloor?.({id:x.id,buildingId:x.buildingId,kind:x.kind,level:x.level,name:x.name,areaSqm:y});st=!1,Ae(`已为 ${C.length} 个楼层（${C.map(x=>x.name).slice(0,4).join("、")}${C.length>4?" 等":""}）批量填入面积 ${y} m²。`),await ct()}catch(x){pe(x),E()}}),e.querySelectorAll("[data-drill-building]").forEach(l=>{const r=async()=>{const c=l.dataset.drillBuilding;if(!c)return;const y=m.buildings.find(C=>C.id===c);y&&(P=y.projectId,g=y.id,L="",Te=null,Fe=!1,v=!1,Ke=!1,ne="all",Oe="",w="building",await St(),L=$a(y.id),Qt(),await Ge(),E())};l.addEventListener("click",c=>{c.target?.closest("button, label, input")||r()}),l.addEventListener("keydown",c=>{(c.key==="Enter"||c.key===" ")&&c.target===l&&(c.preventDefault(),r())})}),e.querySelectorAll("[data-proj-drill]").forEach(l=>{l.addEventListener("click",()=>{w=l.dataset.projDrill??"overview",M=null,Ke=!1,ie="",ke="",tt=null,E()})}),e.querySelector("[data-switch-drill-building]")?.addEventListener("change",async l=>{const r=l.currentTarget.value,c=m.buildings.find(y=>y.id===r);!r||!c||(P=c.projectId,g=c.id,L="",Te=null,Fe=!1,v=!1,Ke=!1,ne="all",Oe="",await St(),L=$a(c.id),Qt(),await Ge(),E())});const _=async l=>{l&&(Xt(l),w="floor",await Ge(),E())};e.querySelectorAll("[data-drill-floor]").forEach(l=>{l.addEventListener("click",r=>{if(r.target?.closest("button, label, input, [data-stop-row]"))return;const c=l.dataset.drillFloor;c&&_(c)})}),e.querySelectorAll("[data-drill-floor-btn]").forEach(l=>{l.addEventListener("click",r=>{r.stopPropagation();const c=l.dataset.drillFloorBtn;c&&_(c)})}),e.querySelector("[data-switch-drill-floor]")?.addEventListener("change",l=>{const r=l.currentTarget.value;r&&_(r)}),e.querySelectorAll("[data-floor-list-filter]").forEach(l=>{l.addEventListener("click",()=>{ne=l.dataset.floorListFilter??"all",E()})}),e.querySelector("[data-floor-list-search]")?.addEventListener("input",l=>{Oe=l.currentTarget.value,E();const r=e.querySelector("[data-floor-list-search]");r&&(r.focus(),r.setSelectionRange(Oe.length,Oe.length))}),e.querySelectorAll("[data-floor-detail-tab]").forEach(l=>{l.addEventListener("click",()=>{j=l.dataset.floorDetailTab??"zones",E()})}),e.querySelectorAll("[data-jump-floor-marking]").forEach(l=>{l.addEventListener("click",async r=>{r.stopPropagation();const c=l.dataset.jumpFloorMarking;c&&Xt(c),h="device_marking",await Ge(),E()})}),e.querySelector("[data-jump-floor-config]")?.addEventListener("click",async l=>{const r=l.currentTarget.dataset.jumpFloorConfig;r&&Xt(r),h="project_config",w=r?"floor":"overview",await Ge(),E()}),e.querySelectorAll("[data-close-modals]").forEach(l=>{l.addEventListener("click",()=>{le(),E()})}),e.querySelectorAll("[data-modal-scrim]").forEach(l=>{l.addEventListener("click",r=>{r.target===l&&(le(),E())})}),e.querySelector("[data-confirm-dialog-ok]")?.addEventListener("click",()=>{G&&ls(G.action)}),e.querySelectorAll("[data-open-new-proj]").forEach(l=>{l.addEventListener("click",()=>{le(),Tt=!0,E()})}),e.querySelector("[data-open-edit-proj]")?.addEventListener("click",()=>{le(),sa=!0,E()}),e.querySelectorAll("[data-open-new-bld]").forEach(l=>{l.addEventListener("click",()=>{le(),oa=!0,E()})}),e.querySelectorAll("[data-edit-building]").forEach(l=>{l.addEventListener("click",r=>{r.stopPropagation(),Ke=!1,le(),la=l.dataset.editBuilding??null,E()})}),e.querySelector("[data-open-new-floor]")?.addEventListener("click",()=>{le(),ra=!0,E()}),e.querySelector("[data-open-batch-modal]")?.addEventListener("click",()=>{le(),It=!0,E()}),e.querySelectorAll("[data-open-new-dev]").forEach(l=>{l.addEventListener("click",()=>{le(),da=!0,E()})}),e.querySelector("[data-open-new-group]")?.addEventListener("click",()=>{le(),it={mode:"create",track:"mesh_auto",draftName:"",draftType:on.mesh_auto[0],draftMemberIds:[]},E()}),e.querySelectorAll("[data-edit-group]").forEach(l=>{l.addEventListener("click",()=>{const r=ce.find(c=>c.id===l.dataset.editGroup);r&&(le(),it={mode:"edit",groupId:r.id,track:r.track,draftName:r.name,draftType:r.groupType,draftMemberIds:[...r.deviceIds]},E())})}),e.querySelector("[data-group-draft-name]")?.addEventListener("input",l=>{it&&(it.draftName=l.currentTarget.value)}),e.querySelector("[data-group-draft-type]")?.addEventListener("change",l=>{it&&(it.draftType=l.currentTarget.value)}),e.querySelectorAll("[data-group-draft-member]").forEach(l=>{l.addEventListener("change",()=>{if(!it)return;const r=new Set(it.draftMemberIds);l.checked?r.add(l.value):r.delete(l.value),it.draftMemberIds=Array.from(r),Ze="",E()})}),e.querySelector("[data-group-modal-track]")?.addEventListener("change",l=>{if(!it)return;const r=l.currentTarget.value??"mesh_auto",c=on[r],y=c.includes(it.draftType)?it.draftType:c[0],C=new Set((r==="mesh_auto"?d.filter(Wt):d).map(x=>x.id));it={...it,track:r,draftType:y,draftMemberIds:it.draftMemberIds.filter(x=>C.has(x))},E()}),e.querySelector("[data-open-new-conn]")?.addEventListener("click",()=>{le(),pt=!1,ze=null,Jt={mode:"create",fromProjectLevel:!0},E()}),e.querySelectorAll("[data-edit-conn]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.editConn;r&&(le(),ze=null,Jt={mode:"edit",connectionId:r},E())})}),e.querySelector("[data-open-freeze-modal]")?.addEventListener("click",()=>{le();const l=g?ge(g):[];I=l.find(c=>(b.get(c.id)?.length??0)>0)?.id??L??l[0]?.id??"",yt=!0,E()}),e.querySelectorAll("[data-open-freeze-floor]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.openFreezeFloor??"";le(),I=r||L,yt=!0,E()})}),e.querySelector("[data-freeze-floor-select]")?.addEventListener("change",l=>{I=l.currentTarget.value,E()}),e.querySelector("[data-stage-new-proj-cover]")?.addEventListener("change",async l=>{const r=l.currentTarget.files?.[0];if(r)try{Dt=await ua(r,1400,.82),E()}catch(c){Ze=ht(c),E()}}),e.querySelector("[data-stage-new-bld-img]")?.addEventListener("change",async l=>{const r=l.currentTarget.files?.[0];if(r)try{Kt=await ua(r,1200,.84),E()}catch(c){Ze=ht(c),E()}}),e.querySelector("[data-create-project]")?.addEventListener("submit",async l=>{l.preventDefault();const r=new FormData(l.currentTarget),c=String(r.get("pName")??"").trim(),y=String(r.get("pCity")??"").trim(),C=String(r.get("pAddr")??"").trim(),x=String(r.get("pLng")??"").trim(),H=String(r.get("pLat")??"").trim();if(Zt={name:c,city:y,address:C,lng:x,lat:H},!c)return;let De;if(!!x!=!!H){Ze="经度和纬度需同时填写或同时留空，不可仅填写单边坐标。",E(),e.querySelector('[data-create-project] input[name="pLat"]')?.focus();return}if(x&&H){const Pe=Number(x),Ne=Number(H);if(!Number.isFinite(Pe)||!Number.isFinite(Ne)||Pe<-180||Pe>180||Ne<-90||Ne>90){Ze="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",E(),e.querySelector('[data-create-project] input[name="pLng"]')?.focus();return}De={lng:Pe,lat:Ne,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{const Pe=await t.createProject?.({name:c,city:y,address:C,location:De,imageUrl:Dt??void 0});le(),h="project_config",w="overview",Pe&&(P=Pe.id,g="",L="",D=qt({level:"project",projectId:Pe.id})),ie=`已创建项目「${c}」，下一步可添加园区楼宇。`,await ct()}catch(Pe){Ze=ht(Pe),E()}}),e.querySelector("[data-save-project]")?.addEventListener("submit",async l=>{l.preventDefault();const r=l.currentTarget,c=r.dataset.saveProject??P,y=new FormData(r),C=String(y.get("pName")??"").trim(),x=String(y.get("pCity")??"").trim(),H=String(y.get("pAddr")??"").trim(),De=String(y.get("pLng")??"").trim(),Pe=String(y.get("pLat")??"").trim();Zt={name:C,city:x,address:H,lng:De,lat:Pe};let Ne;if(!!De!=!!Pe){Ze="经度和纬度需同时填写或同时留空，不可仅填写单边坐标。",E(),e.querySelector('[data-save-project] input[name="pLat"]')?.focus();return}if(De&&Pe){const lt=Number(De),Xe=Number(Pe);if(!Number.isFinite(lt)||!Number.isFinite(Xe)||lt<-180||lt>180||Xe<-90||Xe>90){Ze="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",E(),e.querySelector('[data-save-project] input[name="pLng"]')?.focus();return}Ne={lng:lt,lat:Xe,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{await t.updateProject?.(c,{name:C,city:x,address:H,location:Ne}),le(),ie=`已保存项目「${C||"当前项目"}」信息。`,await ct()}catch(lt){Ze=ht(lt),E()}}),e.querySelector("[data-upload-proj]")?.addEventListener("change",async l=>{const r=l.currentTarget,c=r.dataset.uploadProj,y=r.files?.[0];if(!(!c||!y))try{const C=await ua(y,1400,.82);await t.updateProject?.(c,{imageUrl:C}),ie=`已更新项目封面图（${y.name}）。`,await ct()}catch(C){Ze=ht(C),E()}}),e.querySelector("[data-delete-proj]")?.addEventListener("click",l=>{const r=l.currentTarget.dataset.deleteProj,c=m.projects.find(y=>y.id===r);!r||!c||(le(),G={title:`删除项目「${c.name}」`,body:"将同时移除该项目下的全部楼宇、楼层与功能区配置，此操作不可撤销。确认继续吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_project",projectId:r}},E())}),e.querySelector("[data-create-bld]")?.addEventListener("submit",async l=>{l.preventDefault();const r=l.currentTarget,c=r.dataset.createBld??P,y=new FormData(r),C=String(y.get("bName")??"").trim(),x=String(y.get("bArea")??"").trim(),H=String(y.get("bStdFloorArea")??"").trim(),De=String(y.get("bAbove")??"12"),Pe=String(y.get("bBelow")??"0"),Ne=Math.max(1,Number(De)),lt=Math.max(0,Number(Pe)),Xe=!!y.get("bRoof"),vt=!!y.get("bAutoFloors");if(ia={name:C,area:x,stdFloorArea:H,above:De,below:Pe,hasRoof:Xe,autoFloors:vt},!C)return;const kt=H&&Number(H)>0?Number(H):null;try{const ea=await t.upsertBuilding?.({projectId:c,name:C,aboveFloors:Ne,belowFloors:lt,hasRoof:Xe,areaSqm:x?Number(x):null,imageUrl:Kt??void 0});le();let Ca=0;if(ea&&(g=ea.id,L="",vt)){for(let Lt=1;Lt<=Ne;Lt+=1)await t.upsertFloor?.({buildingId:ea.id,kind:"above",level:Lt,name:`${Lt}F`,areaSqm:kt}),Ca+=1;for(let Lt=1;Lt<=lt;Lt+=1)await t.upsertFloor?.({buildingId:ea.id,kind:"below",level:-Lt,name:`B${Lt}`,areaSqm:kt}),Ca+=1;Xe&&(await t.upsertFloor?.({buildingId:ea.id,kind:"roof",level:99,name:"RF"}),Ca+=1),w="building"}ie=vt?`已创建楼宇「${C}」并自动生成 ${Ca} 个楼层${kt?`（已预填标准层 ${kt} m²）`:""}，现可直接批量导入平面底图。`:`已创建楼宇「${C}」。`,await ct()}catch(ea){Ze=ht(ea),E()}}),e.querySelector("[data-save-building]")?.addEventListener("submit",async l=>{l.preventDefault();const r=l.currentTarget,c=r.dataset.saveBuilding,y=m.buildings.find(lt=>lt.id===c);if(!y)return;const C=new FormData(r),x=String(C.get("bName")??"").trim()||y.name,H=String(C.get("bArea")??"").trim(),De=Math.max(1,Number(C.get("bAbove")??y.aboveFloors)),Pe=Math.max(0,Number(C.get("bBelow")??y.belowFloors)),Ne=!!C.get("bRoof");try{await t.upsertBuilding?.({id:c,projectId:y.projectId,name:x,aboveFloors:De,belowFloors:Pe,hasRoof:Ne,areaSqm:H?Number(H):null}),le(),ie=`已保存楼宇「${x}」参数。`,await ct()}catch(lt){pe(lt),E()}}),e.querySelector("[data-delete-building]")?.addEventListener("click",l=>{const r=l.currentTarget.dataset.deleteBuilding,c=m.buildings.find(y=>y.id===r);!r||!c||(le(),G={title:`删除楼宇「${c.name}」`,body:"将同步删除该楼宇下的全部楼层底图与功能区配置，此操作不可撤销。确认继续吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_building",buildingId:r}},E())}),e.querySelector("[data-upload-bld]")?.addEventListener("change",async l=>{const r=l.currentTarget,c=r.dataset.uploadBld,y=r.files?.[0],C=m.buildings.find(x=>x.id===c);if(!(!c||!y||!C))try{const x=await ua(y,1200,.84);await t.upsertBuilding?.({id:C.id,projectId:C.projectId,name:C.name,aboveFloors:C.aboveFloors,belowFloors:C.belowFloors,hasRoof:C.hasRoof,areaSqm:C.areaSqm,imageUrl:x}),ie=`已更新「${C.name}」外观图（${y.name}）。`,await ct()}catch(x){Ze=ht(x),E()}}),e.querySelectorAll("[data-fill-missing-floors]").forEach(l=>{l.addEventListener("click",async r=>{r.stopPropagation(),Ke=!1;const c=l.dataset.fillMissingFloors;if(c)try{const y=await ss(c);Ae(y>0?`已自动补齐 ${y} 个楼层。`:"当前楼宇楼层已完整。"),await ct()}catch(y){pe(y),E()}})}),e.querySelector("[data-create-floor]")?.addEventListener("submit",async l=>{l.preventDefault();const r=l.currentTarget,c=r.dataset.createFloor,y=new FormData(r),C=String(y.get("fName")??"").trim().toUpperCase(),x=String(y.get("fArea")??"").trim();if(ca={name:C,area:x},!C)return;const H=Rt(C)??C;if(ge(c).some(Xe=>(Rt(Xe.name)??Xe.name.toUpperCase())===H)){Ze=`楼层「${C}」已存在，请使用其他名称。`,E(),e.querySelector('[data-create-floor] input[name="fName"]')?.focus();return}const Pe=Ma(C),Ne=Pe>=999?"roof":Pe<0?"below":"above",lt=Pe>=999?99:Pe||1;try{const Xe=await t.upsertFloor?.({buildingId:c,kind:Ne,level:lt,name:C,areaSqm:x?Number(x):null});le(),Xe&&(L=Xe.id),ie=`已新增楼层「${C}」，可继续添加楼层或点击行内「配置」进入单层底图工作台。`,await ct()}catch(Xe){Ze=ht(Xe),E()}}),e.querySelector("[data-save-floor]")?.addEventListener("submit",async l=>{l.preventDefault();const r=l.currentTarget,c=r.dataset.saveFloor,y=m.floors.find(vt=>vt.id===c);if(!y)return;const C=new FormData(r),x=String(C.get("fName")??"").trim()||y.name,H=String(C.get("fArea")??"").trim(),De=Rt(x)??x.toUpperCase();if(ge(y.buildingId).some(vt=>vt.id!==y.id&&(Rt(vt.name)??vt.name.toUpperCase())===De)){ke=`楼层「${x}」已存在，请避免重复命名。`,E();return}const Ne=Ma(x),lt=Ne>=999?"roof":Ne<0?"below":"above",Xe=Ne>=999?99:Ne||y.level;try{await t.upsertFloor?.({id:y.id,buildingId:y.buildingId,kind:lt,level:Xe,name:x,areaSqm:H?Number(H):null}),ie=`已保存楼层「${x}」属性。`,await ct()}catch(vt){pe(vt),E()}}),e.querySelector("[data-delete-floor]")?.addEventListener("click",l=>{const r=l.currentTarget.dataset.deleteFloor,c=m.floors.find(y=>y.id===r);!r||!c||(le(),G={title:`删除楼层「${c.name}」`,body:"将同时移除本层的平面底图与功能区划分，此操作不可撤销。确认继续吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_floor",floorId:r}},E())});async function U(l,r){const c=m.floors.find(y=>y.id===l);if(c)try{const y=await ua(r,1800,.84);await t.upsertFloor?.({id:c.id,buildingId:c.buildingId,kind:c.kind,level:c.level,name:c.name,areaSqm:c.areaSqm,planImageUrl:y}),gt?.floorId===c.id&&(gt=null),Ae(`已更新「${c.name}」平面底图（${r.name}）。`),await ct()}catch(y){pe(y),E()}}e.querySelectorAll("[data-upload-floor]").forEach(l=>{l.addEventListener("change",()=>{const r=l.dataset.uploadFloor,c=l.files?.[0];r&&c&&U(r,c)})});const Z=e.querySelector("[data-single-floor-drop]");Z&&s.scope.canEditDeployment&&o.spatial&&(Z.addEventListener("dragover",l=>{l.preventDefault(),Z.classList.add("is-drop-active")}),Z.addEventListener("dragleave",()=>{Z.classList.remove("is-drop-active")}),Z.addEventListener("drop",l=>{l.preventDefault(),Z.classList.remove("is-drop-active");const r=Z.dataset.singleFloorDrop,c=Array.from(l.dataTransfer?.files??[]).find(y=>y.type.startsWith("image/"));r&&c&&U(r,c)})),e.querySelector("[data-clear-floor-plan]")?.addEventListener("click",l=>{const r=l.currentTarget.dataset.clearFloorPlan,c=m.floors.find(y=>y.id===r);!r||!c||(le(),G={title:`清空「${c.name}」平面底图`,body:"清空后本层将回到无图状态（不会删除已绑定的设备物理安装记录）。确认清空吗？",confirmLabel:"确认清空",danger:!0,action:{kind:"clear_floor_plan",floorId:r}},E())}),e.querySelectorAll("[data-open-lightbox]").forEach(l=>{l.addEventListener("click",r=>{r.stopPropagation();const c=l.dataset.lbTitle??"平面底图预览",y=l.dataset.lbSrc??"";y&&(fe={title:c,imageUrl:y},E())})}),e.querySelector("[data-close-lightbox]")?.addEventListener("click",()=>{fe=null,E()}),e.querySelector("[data-lightbox-scrim]")?.addEventListener("click",l=>{l.target===l.currentTarget&&(fe=null,E())});function oe(l,r){if(!l||r.length===0)return;const c=ge(l),y=new Map;c.forEach(C=>y.set(Rt(C.name)??C.name.toUpperCase(),C)),_t=r.map((C,x)=>{const H=Rt(C.name),De=H?y.get(H):void 0;return{id:`bu-${Date.now().toString(36)}-${x}`,file:C,matchedFloorId:De?.id??null}}),It=!0,E()}e.querySelector("[data-batch-upload-floors]")?.addEventListener("change",l=>{const r=l.currentTarget;oe(r.dataset.batchUploadFloors??"",Array.from(r.files??[]))});const he=e.querySelector("[data-batch-dropzone]");he&&s.scope.canEditDeployment&&o.spatial&&(he.addEventListener("dragover",l=>{l.preventDefault(),Yt||(Yt=!0,he.style.borderColor="var(--pacom-accent-solid)",he.style.background="var(--pacom-accent-soft)")}),he.addEventListener("dragleave",()=>{Yt=!1,he.style.borderColor="",he.style.background=""}),he.addEventListener("drop",l=>{l.preventDefault(),Yt=!1;const r=Array.from(l.dataTransfer?.files??[]).filter(c=>c.type.startsWith("image/"));oe(he.dataset.batchDropzone??"",r)})),e.querySelectorAll("[data-batch-override-floor]").forEach(l=>{l.addEventListener("change",()=>{const r=_t.find(c=>c.id===l.dataset.batchOverrideFloor);r&&(r.matchedFloorId=l.value||null,E())})}),e.querySelector("[data-cancel-batch-upload]")?.addEventListener("click",()=>{_t=[],E()}),e.querySelector("[data-confirm-batch-upload]")?.addEventListener("click",async()=>{const l=_t.filter(y=>y.matchedFloorId),r=_t.length-l.length;if(l.length===0)return;const c=new Set;for(const y of l){if(c.has(y.matchedFloorId)){Ze="存在多张图片指向同一目标楼层，请调整目标楼层后再导入。",E();return}c.add(y.matchedFloorId)}try{let y=0;for(const C of l){const x=m.floors.find(De=>De.id===C.matchedFloorId);if(!x)continue;const H=await ua(C.file,1800,.84);await t.upsertFloor?.({id:x.id,buildingId:x.buildingId,kind:x.kind,level:x.level,name:x.name,areaSqm:x.areaSqm,planImageUrl:H}),gt?.floorId===x.id&&(gt=null),y+=1}_t=[],le(),ie=`已批量导入 ${y} 个唯一楼层平面底图${r>0?`（跳过 ${r} 张未分配文件）`:""}。`,await ct()}catch(y){Ze=ht(y),E()}}),e.querySelectorAll("[data-apply-zone-tpl]").forEach(l=>{l.addEventListener("click",async()=>{const r=Yn.find(y=>y.key===l.dataset.applyZoneTpl),c=m.floors.find(y=>y.id===l.dataset.tplFloor);if(!(!r||!c))try{const y=m.zones.filter(x=>x.floorId===c.id).length,C=y+r.items.length;for(let x=0;x<r.items.length;x+=1){const H=r.items[x],De=await t.upsertZone?.({floorId:c.id,name:`${c.name} ${H.suffix}`,category:H.category});De&&(Ce[De.id]=ln(y+x,C,De.name))}ie=`已按「${r.label}」模板为 ${c.name} 创建 ${r.items.length} 个功能区。`,await ct()}catch(y){pe(y),E()}})}),e.querySelector("[data-attach-doc]")?.addEventListener("change",async l=>{const r=l.currentTarget,c=r.dataset.attachDoc,y=r.files?.[0],C=m.floors.find(H=>H.id===c);if(!c||!y||!C||!t.attachFloorDoc)return;const x=y.size>=1024*1024?`${(y.size/(1024*1024)).toFixed(1)} MB`:`${Math.max(1,Math.round(y.size/1024))} KB`;try{const H=y.size<=4194304?await Qn(y).catch(()=>{}):void 0;await t.attachFloorDoc({floorId:c,name:y.name,category:_s(y.name),boundScope:`${C.name} ｜ 工程资料`,updatedAt:new Date().toISOString().slice(0,10),size:x,fileUrl:H,mimeType:y.type||void 0}),ie=`已为 ${C.name} 关联文档「${y.name}」。`,await Ge(),E()}catch(H){pe(H),E()}}),e.querySelectorAll("[data-doc-category]").forEach(l=>{l.addEventListener("change",async()=>{const r=l.dataset.docCategory;if(!(!r||!t.updateFloorDocCategory))try{await t.updateFloorDocCategory(r,l.value),ie=`已更新资料分类为「${l.value}」。`,await Ge(),E()}catch(c){pe(c),E()}})}),e.querySelectorAll("[data-del-doc]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.delDoc,c=ee.find(y=>y.id===r);!r||!c||(le(),G={title:`移除工程资料「${c.name}」`,body:"移除后将不再在此楼层的工程资料列表中显示，确认移除吗？",confirmLabel:"确认移除",danger:!0,action:{kind:"delete_doc",docId:r}},E())})}),e.querySelectorAll("[data-preview-doc]").forEach(l=>{l.addEventListener("click",()=>{const r=ee.find(c=>c.id===l.dataset.previewDoc);if(r){if(r.fileUrl&&(r.mimeType?.startsWith("image/")||/\.(png|jpe?g|webp|gif)$/i.test(r.name))){fe={title:r.name,imageUrl:r.fileUrl},E();return}if(r.fileUrl){const c=document.createElement("a");c.href=r.fileUrl,c.download=r.name,c.target="_blank",c.rel="noopener noreferrer",c.click(),ie=`已打开 / 下载工程附件「${r.name}」。`,E();return}ie=`「${r.name}」（${r.category} ｜ ${r.size} ｜ 更新于 ${r.updatedAt}）为演示示例目录项，上传本地文件后可直接预览或下载。`,E()}})}),e.querySelector("[data-add-zone]")?.addEventListener("submit",async l=>{l.preventDefault();const r=l.currentTarget.dataset.addZone,c=new FormData(l.currentTarget),y=String(c.get("zoneName")??"").trim(),C=String(c.get("zoneCat")??"office");if(y)try{const x=m.zones.filter(De=>De.floorId===r).length,H=await t.upsertZone?.({floorId:r,name:y,category:C});H&&(Ce[H.id]=ln(x,x+1,H.name)),ie=`已添加功能区「${y}」。`,await ct()}catch(x){pe(x),E()}}),e.querySelectorAll("[data-edit-zone]").forEach(l=>{l.addEventListener("click",()=>{M=l.dataset.editZone??null,E()})}),e.querySelector("[data-cancel-edit-zone]")?.addEventListener("click",()=>{M=null,E()}),e.querySelector("[data-save-edit-zone]")?.addEventListener("submit",async l=>{l.preventDefault();const r=l.currentTarget,c=new FormData(r),y=String(c.get("zName")??"").trim(),C=String(c.get("zCat")??"office");if(y)try{await t.upsertZone?.({id:r.dataset.saveEditZone,floorId:r.dataset.zoneFloor,name:y,category:C}),M=null,ie=`已更新功能区「${y}」。`,await ct()}catch(x){pe(x),E()}}),e.querySelectorAll("[data-del-zone]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.delZone,c=m.zones.find(y=>y.id===r);!r||!c||(le(),G={title:`删除功能区「${c.name}」`,body:"删除后该功能区将从本层移除，原归属设备的逻辑分区将置为未分配。确认删除吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_zone",zoneId:r}},E())})}),e.querySelectorAll("[data-open-copy-zones]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.openCopyZones??null;le(),Ct=r,Et=new Set,E()})}),e.querySelectorAll("[data-copy-preset]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.copyPreset,c=ge(g).filter(y=>y.id!==Ct);r==="empty"?Et=new Set(c.filter(y=>y.kind==="above"&&m.zones.filter(C=>C.floorId===y.id).length===0).map(y=>y.id)):r==="above"?Et=new Set(c.filter(y=>y.kind==="above").map(y=>y.id)):Et.clear(),E()})}),e.querySelectorAll("[data-copy-target-floor]").forEach(l=>{l.addEventListener("change",()=>{const r=l.dataset.copyTargetFloor;r&&(l.checked?Et.add(r):Et.delete(r),E())})}),e.querySelector("[data-confirm-copy-zones]")?.addEventListener("click",async l=>{const r=l.currentTarget.dataset.confirmCopyZones,c=Array.from(Et);if(!(!r||c.length===0))try{const y=await t.copyZonesToFloors?.(r,c)??0;le(),Et.clear(),ie=`已将当前层功能区复用至 ${c.length} 个目标楼层（共新增 ${y} 个功能区）。`,await ct()}catch(y){pe(y),E()}}),e.querySelectorAll("[data-scrubber-floor]").forEach(l=>{l.addEventListener("click",async()=>{const r=l.dataset.scrubberFloor;r&&(Xt(r),await Ge(),E())})});const Ee=e.querySelector("[data-dep-canvas-search]");Ee?.addEventListener("focus",()=>{rt||(rt=!0,E(),e.querySelector("[data-dep-canvas-search]")?.focus())}),Ee?.addEventListener("input",l=>{be=l.currentTarget.value,rt=!0,E();const r=e.querySelector("[data-dep-canvas-search]");r&&(r.focus(),r.setSelectionRange(be.length,be.length))}),e.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{rt=!rt,E()}),e.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{rt=!1,E()}),e.querySelectorAll("[data-dev-filter]").forEach(l=>{l.addEventListener("click",()=>{Qe=l.dataset.devFilter??"all",E()})}),e.querySelectorAll("[data-brush]").forEach(l=>{l.addEventListener("click",()=>{ae=l.dataset.brush??"device",E()})}),e.querySelectorAll("[data-dep-zoom]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.depZoom;r==="in"?T=Math.min(2.6,Number((T+.2).toFixed(2))):r==="out"?T=Math.max(.6,Number((T-.2).toFixed(2))):(T=1,de=0,Se=0),_a()})});const Re=e.querySelector('[data-role="dep-stage"]'),at=e.querySelector('[data-role="deploy-plan"] .pacom-plan-img');if(Re&&at){const l=()=>{const r=at.naturalWidth,c=at.naturalHeight;if(!r||!c)return;const y=Re.clientWidth-140,C=Re.clientHeight-160;if(y>320&&C>220&&r<640){const x=Math.min(y/r,C/c,2.2);x>1.05&&(at.style.width=`${Math.round(r*x)}px`,at.style.height="auto")}};at.complete?l():at.addEventListener("load",l,{once:!0})}if(Re&&!v){let l=!1,r=0,c=0,y=0,C=0;Re.addEventListener("pointerdown",H=>{H.target?.closest("button, input, select, .pacom-hud-search-wrap, .dep-canvas-mode-pill, .dep-canvas-toast")||(l=!0,r=H.clientX,c=H.clientY,y=de,C=Se,Re.classList.add("is-panning"),Re.setPointerCapture?.(H.pointerId))}),Re.addEventListener("pointermove",H=>{l&&(de=y+(H.clientX-r),Se=C+(H.clientY-c),_a())});const x=()=>{l&&(l=!1,Re.classList.remove("is-panning"))};Re.addEventListener("pointerup",x),Re.addEventListener("pointercancel",x),Re.addEventListener("wheel",H=>{H.preventDefault();const De=H.deltaY<0?.12:-.12;T=Math.max(.6,Math.min(2.6,Number((T+De).toFixed(2)))),_a()},{passive:!1}),Re.addEventListener("dblclick",H=>{H.target?.closest("button")||(T=1,de=0,Se=0,_a())})}e.querySelectorAll("[data-drag-pin]").forEach(l=>{l.addEventListener("pointerdown",r=>{if(r.button!==0||v||ae!=="device"||!s.scope.canEditDeployment)return;const c=e.querySelector('[data-role="deploy-plan"]');if(!c)return;const y=l.dataset.dragPin,C=r.clientX,x=r.clientY;let H=!1,De=.5,Pe=.5;const Ne=Xe=>{const vt=Math.hypot(Xe.clientX-C,Xe.clientY-x);if(!H&&vt<5)return;H=!0,l.classList.add("is-dragging");const kt=c.getBoundingClientRect();De=Math.max(.02,Math.min(.98,(Xe.clientX-kt.left)/kt.width)),Pe=Math.max(.02,Math.min(.98,(Xe.clientY-kt.top)/kt.height)),l.style.left=`${(De*100).toFixed(2)}%`,l.style.top=`${(Pe*100).toFixed(2)}%`},lt=async()=>{if(window.removeEventListener("pointermove",Ne),window.removeEventListener("pointerup",lt),window.removeEventListener("pointercancel",lt),l.classList.remove("is-dragging"),!H)return;z=!0,window.setTimeout(()=>{z=!1},120);const Xe=d.find(vt=>vt.id===y);if(Xe)try{const vt=m.floors.find(kt=>kt.id===L)?.plan?.planVersion??1;await t.updateDevicePlanPoint({deviceId:Xe.id,floorId:L,planVersion:vt,x:De,y:Pe,expectedVersion:Xe.version}),Ae(`已拖拽微调「${Xe.name}」坐标（硬件绑定与物理复核保持不变）。`),await Ge(),E()}catch(vt){pe(vt),E()}};window.addEventListener("pointermove",Ne),window.addEventListener("pointerup",lt),window.addEventListener("pointercancel",lt)})}),e.querySelector("[data-list-search]")?.addEventListener("input",l=>{et=l.currentTarget.value,E();const r=e.querySelector("[data-list-search]");r&&(r.focus(),r.setSelectionRange(et.length,et.length))}),e.querySelector("[data-list-filter]")?.addEventListener("change",l=>{Ye=l.currentTarget.value??"all",E()}),e.querySelector("[data-list-cat-filter]")?.addEventListener("change",l=>{Je=l.currentTarget.value??"all",E()}),e.querySelectorAll("[data-refresh-dep]").forEach(l=>{l.addEventListener("click",()=>void ct())}),e.querySelector("[data-create-dev]")?.addEventListener("submit",async l=>{if(l.preventDefault(),!t.createDeploymentDevice)return;const r=new FormData(l.currentTarget),c=String(r.get("devName")??"").trim(),y=String(r.get("devPreset")??"sensor"),C=String(r.get("devZone")??"")||null,x=nn.find(H=>H.key===y)??nn[0];if(!(!c||!L))try{const H=await t.createDeploymentDevice({projectId:P,buildingId:g,floorId:L,logicalZoneId:C,name:c,category:x.category,defaultProxy:x.defaultProxy,defaultRelay:x.defaultRelay});le(),Te=H.id,Fe=!0,je="binding",ot=!1;const De=!!m.floors.find(Pe=>Pe.id===L)?.plan;v=h==="device_marking"&&De,!De&&h==="device_marking"&&(rt=!0),Ae(v?`已新增「${c}」（待入网 ｜ 未标记），请点击平面图落点。`:`已新增「${c}」（待入网 ｜ 未标记，${x.hint}）。`),await Ge(),Ie(d.find(Pe=>Pe.id===H.id)),E()}catch(H){Ze=ht(H),E()}}),e.querySelectorAll("[data-pick-dev]").forEach(l=>{l.addEventListener("click",r=>{if(r.stopPropagation(),z)return;Te=l.dataset.pickDev??null,Fe=!0,je="binding",ot=!1;const c=d.find(y=>y.id===Te);Ie(c),E()})}),e.querySelectorAll("[data-open-dev-drawer]").forEach(l=>{l.addEventListener("click",r=>{if(r.target?.closest("button"))return;Te=l.dataset.openDevDrawer??null,Fe=!0,je="binding",ot=!1;const c=d.find(y=>y.id===Te);Ie(c),E()})}),e.querySelectorAll("[data-open-dev-params]").forEach(l=>{l.addEventListener("click",r=>{r.stopPropagation(),Te=l.dataset.openDevParams??null,Fe=!0,je="params",ot=!1;const c=d.find(y=>y.id===Te);Ie(c),E()})}),e.querySelectorAll("[data-quick-verify-dev]").forEach(l=>{l.addEventListener("click",async r=>{r.stopPropagation();const c=d.find(y=>y.id===l.dataset.quickVerifyDev);if(!(!c||!c.hardwareBinding))try{await t.updateDeviceHardwareBinding({deviceId:c.id,gatewayId:c.hardwareBinding.gatewayId,protocol:c.hardwareBinding.protocol,networkAddress:c.hardwareBinding.networkAddress,portOrChannel:c.hardwareBinding.portOrChannel,physicalInstalled:!0,expectedVersion:c.version}),ie=`已完成「${c.name}」现场物理安装一键复核。`,await Ge(),Te===c.id&&Ie(d.find(y=>y.id===c.id)),E()}catch(y){pe(y),E()}})}),e.querySelectorAll("[data-toggle-edit-dev-meta]").forEach(l=>{l.addEventListener("click",()=>{ot=!ot,E()})}),e.querySelector("[data-save-dev-meta]")?.addEventListener("submit",async l=>{if(l.preventDefault(),!t.updateDeploymentDevice)return;const r=l.currentTarget,c=r.dataset.saveDevMeta,y=new FormData(r),C=String(y.get("editDevName")??"").trim(),x=String(y.get("editDevZone")??"")||null;if(C)try{await t.updateDeploymentDevice(c,{name:C,logicalZoneId:x}),ot=!1,ie=`已更新设备基础信息「${C}」。`,await Ge(),E()}catch(H){pe(H),E()}}),e.querySelector("[data-del-dev]")?.addEventListener("click",l=>{const r=l.currentTarget.dataset.delDev,c=d.find(y=>y.id===r);!r||!c||(le(),G={title:`删除设备「${c.name}」`,body:"将同步移除该设备的平面坐标、硬件绑定、关联灯点及分组成员引用，此操作不可撤销。确认删除吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_device",deviceId:r}},E())}),e.querySelector("[data-open-plan-swap-review]")?.addEventListener("click",l=>{const r=l.currentTarget.dataset.openPlanSwapReview??L;le(),te=r,E()}),e.querySelector("[data-clear-plan-alert]")?.addEventListener("click",async l=>{const r=l.currentTarget.dataset.clearPlanAlert;if(!(!r||!t.clearPlanChangeAlert))try{await t.clearPlanChangeAlert(r),delete ue[r],le(),Ae("已确认换图后的设备点位无误，请前往「交付验收」重新执行全层自检后方可冻结新版本。"),E()}catch(c){pe(c),E()}}),e.querySelectorAll("[data-drawer-tab]").forEach(l=>{l.addEventListener("click",()=>{je=l.dataset.drawerTab??"binding",E()})}),e.querySelector("[data-close-sel]")?.addEventListener("click",()=>{Fe=!1,v=!1,ot=!1,E()}),e.querySelectorAll("[data-toggle-place]").forEach(l=>{l.addEventListener("click",()=>{h!=="device_marking"?(h="device_marking",v=!0):v=!v,E()})}),e.querySelectorAll("[data-binding-field]").forEach(l=>{const r=()=>{const c=d.find(C=>C.id===Te);if(!c||((!Be||Be.deviceId!==c.id)&&Ie(c),!Be))return;const y=l.dataset.bindingField;y==="protocol"?Be.protocol=l.value:y==="gatewayId"?Be.gatewayId=l.value:y==="networkAddress"?Be.networkAddress=l.value:y==="portOrChannel"&&(Be.portOrChannel=l.value)};l.addEventListener("input",r),l.addEventListener("change",r)}),e.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{const l=d.find(r=>r.id===Te);l&&((!Be||Be.deviceId!==l.id)&&Ie(l),Be&&(Be.physicalInstalled=!Be.physicalInstalled),E())}),e.querySelectorAll("[data-ping-dev]").forEach(l=>{l.addEventListener("click",r=>{r.stopPropagation();const c=d.find(y=>y.id===l.dataset.pingDev);c&&(Ae(`已向「${c.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`),E())})}),e.querySelector("[data-add-light-marker]")?.addEventListener("click",async l=>{if(!t.addLightMarker)return;const r=l.currentTarget.dataset.addLightMarker,c=B.filter(y=>y.deviceId===r).length+1;try{await t.addLightMarker({deviceId:r,floorId:L,channel:`回路 ${c}`,label:`照明点位 ${c}`,x:Math.min(.86,.35+c*.1),y:.42}),ae="light_marker",Ae(`已新增「回路 ${c}」可视化灯点。`),await Ge(),E()}catch(y){pe(y),E()}}),e.querySelectorAll("[data-del-light-marker]").forEach(l=>{l.addEventListener("click",async()=>{if(!t.deleteLightMarker)return;const r=l.dataset.delLightMarker;if(r)try{await t.deleteLightMarker(r),await Ge(),E()}catch(c){pe(c),E()}})}),e.querySelectorAll("[data-toggle-mesh-role]").forEach(l=>{l.addEventListener("click",async()=>{if(!t.updateMeshRole)return;const r=l.dataset.meshDev,c=l.dataset.toggleMeshRole,y=O[r]??{proxy:!1,relay:!1,meshUuid:Jn(L)};try{await t.updateMeshRole(r,L,{[c]:!y[c]}),gt?.floorId===L&&(gt=null),Ae(`已更新节点 ${c.toUpperCase()} 状态，请前往「设备网络」重新同步边缘。`),await Ge(),E()}catch(C){pe(C),E()}})}),e.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async l=>{if(z)return;const r=d.find(x=>x.id===Te),c=l.currentTarget.getBoundingClientRect(),y=Math.max(.02,Math.min(.98,(l.clientX-c.left)/c.width)),C=Math.max(.02,Math.min(.98,(l.clientY-c.top)/c.height));if(v&&r){try{const x=m.floors.find(H=>H.id===L)?.plan?.planVersion??1;await t.updateDevicePlanPoint({deviceId:r.id,floorId:L,planVersion:x,x:y,y:C,expectedVersion:r.version}),v=!1,Ae(`已更新「${r.name}」图上坐标（硬件绑定与物理复核保持不变）。`),await Ge(),E()}catch(x){pe(x),E()}return}if(ae==="light_marker"&&r?.category==="lighting"&&s.scope.canEditDeployment&&t.addLightMarker){const x=B.filter(H=>H.deviceId===r.id).length+1;try{await t.addLightMarker({deviceId:r.id,floorId:L,channel:`回路 ${x}`,label:`灯点 ${x}`,x:Number(y.toFixed(4)),y:Number(C.toFixed(4))}),Ae(`已为「${r.name}」布置「回路 ${x}」可视化灯点。`),await Ge(),E()}catch(H){pe(H),E()}}}),e.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async l=>{l.preventDefault();const r=d.find(H=>H.id===Te);if(!r)return;const c=new FormData(l.currentTarget),y=String(c.get("gatewayId")??"").trim(),C=String(c.get("networkAddress")??"").trim(),x=String(c.get("portOrChannel")??"").trim();if(r.category!=="gateway"&&!y){ke="请先为本层登记并选择所属上游网关，再保存硬件绑定。",E();return}if(!C){ke="请填写设备网络地址或通信主题后再保存硬件绑定。",E();return}try{await t.updateDeviceHardwareBinding({deviceId:r.id,gatewayId:r.category==="gateway"?r.id:y,protocol:String(c.get("protocol")),networkAddress:C,portOrChannel:x,physicalInstalled:Be?.deviceId===r.id?Be.physicalInstalled:r.physicalInstalled,expectedVersion:r.version}),ke="",gt?.floorId===L&&(gt=null),Ae(`已保存「${r.name}」硬件绑定与物理复核状态。`),await Ge(),Ie(d.find(H=>H.id===r.id)),E()}catch(H){pe(H),E()}}),e.querySelector("[data-save-dev-params]")?.addEventListener("submit",async l=>{if(l.preventDefault(),!t.saveDeviceParams)return;const r=l.currentTarget,c=r.dataset.saveDevParams,y=r.dataset.devCat??"sensor",C=new FormData(r),x=X.get(c)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450,coolMinC:22,heatMaxC:26,unoccupiedDelayMin:20,minCycleMin:5,heartbeatSec:30,offlineHoldMin:120,cacheFlushSec:60,pollSec:15,ctRatio:1,demandWindowMin:15},H={...x};y==="hvac"?(H.coolMinC=Number(C.get("coolMinC")??x.coolMinC??22),H.heatMaxC=Number(C.get("heatMaxC")??x.heatMaxC??26),H.unoccupiedDelayMin=Number(C.get("unoccupiedDelayMin")??x.unoccupiedDelayMin??20),H.minCycleMin=Number(C.get("minCycleMin")??x.minCycleMin??5)):y==="gateway"?(H.heartbeatSec=Number(C.get("heartbeatSec")??x.heartbeatSec??30),H.offlineHoldMin=Number(C.get("offlineHoldMin")??x.offlineHoldMin??120),H.cacheFlushSec=Number(C.get("cacheFlushSec")??x.cacheFlushSec??60)):y==="meter"?(H.pollSec=Number(C.get("pollSec")??x.pollSec??15),H.ctRatio=Number(C.get("ctRatio")??x.ctRatio??1),H.demandWindowMin=Number(C.get("demandWindowMin")??x.demandWindowMin??15)):(H.offDelayMin=Number(C.get("offDelayMin")??x.offDelayMin),H.restoreMin=Number(C.get("restoreMin")??x.restoreMin),H.luxOn=Number(C.get("luxOn")??x.luxOn),H.luxOff=Number(C.get("luxOff")??x.luxOff));try{await t.saveDeviceParams(c,L,H),gt?.floorId===L&&(gt=null),Ae("已保存设备自治参数；原自检凭证已自动失效，请前往「设备网络」重新同步并复检后方可冻结。"),await Ge(),E()}catch(De){pe(De),E()}}),e.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const l=d.find(r=>r.id===Te);l&&dn(l)}),e.querySelectorAll("[data-ftt-dev]").forEach(l=>{l.addEventListener("click",r=>{r.stopPropagation();const c=d.find(y=>y.id===l.dataset.fttDev);c&&dn(c)})}),e.querySelectorAll("[data-batch-ftt]").forEach(l=>{l.addEventListener("click",()=>void pn(L))}),e.querySelectorAll("[data-floor-ftt]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.floorFtt;r&&pn(r)})}),e.querySelector("[data-dismiss-ftt]")?.addEventListener("click",()=>{gt=null,E()}),e.querySelectorAll("[data-export-inv]").forEach(l=>{l.addEventListener("click",()=>ns())}),e.querySelector("[data-group-select-ls]")?.addEventListener("click",()=>{if(!it)return;const l=d.filter(c=>Wt(c)&&(c.category==="lighting"||c.category==="sensor")).map(c=>c.id),r=new Set([...it.draftMemberIds,...l]);it.draftMemberIds=Array.from(r),Ze="",E()}),e.querySelector("[data-save-group]")?.addEventListener("submit",async l=>{if(l.preventDefault(),!t.upsertDeviceGroup)return;const r=l.currentTarget,c=r.dataset.saveGroup||void 0,y=new FormData(r),C=String(y.get("gName")??"").trim(),x=y.get("gTrack")??"mesh_auto",H=String(y.get("gType")??"灯光联动组"),De=Array.from(new Set(y.getAll("gMemberIds").map(Ne=>String(Ne)).filter(Boolean)));if(!C)return;const Pe=De.map(Ne=>d.find(lt=>lt.id===Ne)).filter(Ne=>!!(Ne&&Ne.category!=="gateway"));if(x==="mesh_auto"&&H.includes("灯")&&!Pe.some(Ne=>Ne.category==="lighting")){Ze="端侧灯光联动组至少需勾选 1 台照明执行设备（驱动器 / 开关面板），不可创建仅含网关或传感器的空壳组；可点击上方「一键勾选本层照明与传感」。",E();return}if(Pe.length===0){Ze="请至少选择 1 台受控末端或传感器设备，不可创建空壳分组。",E();return}try{await t.upsertDeviceGroup({id:c,track:x,groupType:H,name:C,floorId:L,includesAdapter:x==="mesh_auto",deviceIds:De}),le(),Ae(`${c?"已更新":"已新建"}${x==="mesh_auto"?"端侧蓝牙 Mesh 自治组":"云端业务分组"}「${C}」（${De.length} 台成员）。`),await Ge(),E()}catch(Ne){Ze=ht(Ne),E()}}),e.querySelectorAll("[data-del-group]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.delGroup,c=ce.find(y=>y.id===r);!r||!c||(le(),G={title:`删除设备分组「${c.name}」`,body:"删除分组不会移除成员设备，但会解除该群组的批量联动配置。确认删除吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_group",groupId:r}},E())})}),e.querySelectorAll("[data-test-group]").forEach(l=>{l.addEventListener("click",()=>{const r=ce.find(x=>x.id===l.dataset.testGroup);if(!r)return;const c=r.deviceIds.map(x=>d.find(H=>H.id===x)).filter(x=>!!x),y=c.filter(x=>x.category!=="gateway"),C=r.track==="mesh_auto"&&r.groupType.includes("灯")&&!c.some(x=>x.category==="lighting");if(y.length===0)ke=`分组「${r.name}」暂未包含受控末端设备（仅含基础设施网关或为空），请先编辑添加成员后再执行试控。`,ie="";else if(C)ke=`灯光联动组「${r.name}」尚未包含任何照明执行端（驱动器 / 开关面板），请先编辑添加照明设备后再试控。`,ie="";else{const x=y.filter(H=>H.connectivity!=="online");x.length>0?(ke=`分组「${r.name}」试控异常：${x.map(H=>`${H.name}（${H.connectivity==="unknown"?"待入网":"离线"}）`).join("、")}。`,ie=""):(ke="",ie=t.mode==="demo"?`演示群组试控通过：「${r.name}」共 ${y.length} 台末端校验在线可达。`:`已向分组「${r.name}」发送群组试控指令，${y.length} 台受控终端回读正常。`)}E()})}),e.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>as()),e.querySelector("[data-clear-mesh-findings]")?.addEventListener("click",()=>{qe=[],E()}),e.querySelector("[data-sync-edge]")?.addEventListener("click",async()=>{if(!t.syncEdgeGateway||!L){pe("当前未选中可同步的楼层或后端同步接口未就绪。"),E();return}const l=Q.version,r=Q.dirty;try{const c=await t.syncEdgeGateway(L);Q=c,J[L]=c,!r&&c.version===l?Ae(`本层已是最新边缘基线 v${c.version}（无新增配置变更），已重新校验网关连通。`):(delete ve[L],gt?.floorId===L&&(gt=null),Ae(`已将本层配置下发至边缘网关（基线 v${c.version}）；请前往「交付验收」执行新版本全层自检后方可冻结。`)),E()}catch(c){pe(c,{label:"前往设备标记绑定网关 →",nav:"device_marking"}),E()}}),e.querySelectorAll("[data-topo-mode]").forEach(l=>{l.addEventListener("click",()=>{Ve=l.dataset.topoMode??"mesh",E()})}),e.querySelectorAll("[data-topo-jump]").forEach(l=>{l.addEventListener("click",()=>{Te=l.dataset.topoJump??null,Fe=!0,je="binding",ot=!1,bt={nav:"device_network",label:"设备网络"},h="device_marking";const r=d.find(c=>c.id===Te);Ie(r),E()})}),e.querySelector("[data-toggle-conn-more]")?.addEventListener("click",l=>{l.stopPropagation(),pt=!pt,ze=null,E()}),e.querySelectorAll("[data-toggle-conn-row-menu]").forEach(l=>{l.addEventListener("click",r=>{r.stopPropagation();const c=l.dataset.toggleConnRowMenu??null;ze=ze===c?null:c,pt=!1,E()})}),e.querySelectorAll("[data-select-topo-conn]").forEach(l=>{l.addEventListener("click",()=>{Aa=l.dataset.selectTopoConn??null,E()})}),e.querySelectorAll("[data-conn-jump-dev]").forEach(l=>{l.addEventListener("click",async()=>{const r=l.dataset.connJumpDev??null,c=l.dataset.connJumpFloor??"";c&&Xt(c),Te=r,Fe=!0,je="binding",bt={nav:"connections",label:"系统接入"},h="device_list",await Ge(),Ie(d.find(y=>y.id===r)),E()})}),e.querySelector("[data-req-restart-edge]")?.addEventListener("click",()=>{pt=!1,le(),G={title:"确认重启边缘服务",body:"重启将导致当前项目边缘网关通信短暂中断约 5 秒，正在进行的实时采集将自动重连。确认执行重启吗？",confirmLabel:"确认重启",danger:!0,action:{kind:"restart_edge",projectId:P}},E()}),e.querySelectorAll("[data-conn-view]").forEach(l=>{l.addEventListener("click",()=>{He=l.dataset.connView??"list",E()})}),e.querySelector("[data-conn-search]")?.addEventListener("input",l=>{mt=l.currentTarget.value,E();const r=e.querySelector("[data-conn-search]");r&&(r.focus(),r.setSelectionRange(mt.length,mt.length))}),e.querySelector("[data-conn-status-filter]")?.addEventListener("change",l=>{wt=l.currentTarget.value??"all",E()}),e.querySelector("[data-conn-bld-select]")?.addEventListener("change",l=>{const r=l.currentTarget.value,c=e.querySelector('[data-save-conn] select[name="cFloor"]');if(!c)return;if(!r){c.disabled=!0,c.innerHTML='<option value="">全项目不限楼层</option>';return}c.disabled=!1;const y=ge(r);c.innerHTML=`<option value="">整栋 / 不限楼层</option>${y.map(C=>`<option value="${n(C.id)}">${n(C.name)}</option>`).join("")}`}),e.querySelector("[data-save-conn]")?.addEventListener("submit",async l=>{if(l.preventDefault(),!t.upsertConnection)return;const r=l.currentTarget,c=r.dataset.saveConn||void 0,y=new FormData(r),C=String(y.get("cName")??"").trim(),x=String(y.get("cProto")??"bacnet_ip"),H=String(y.get("cEndpoint")??"").trim(),De=String(y.get("cBuilding")??"").trim(),Pe=String(y.get("cFloor")??"").trim();if(ya={name:C,buildingId:De,floorId:Pe,protocol:x,endpoint:H},!(!C||!H))try{const Ne=await t.upsertConnection({id:c,projectId:P,buildingId:De,floorId:Pe,name:C,protocol:x,endpoint:H});le(),ke="",ie=c?`已更新接入通道「${C}」（${H}）。`:`已接入「${C}」（${H}），当前关联 ${Ne.collectedPoints} 原始采集点。`,me=await t.listConnections(P).catch(()=>[]),E()}catch(Ne){Ze=ht(Ne),E(),e.querySelector('[data-save-conn] input[name="cEndpoint"]')?.focus()}}),e.querySelectorAll("[data-del-conn]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.delConn,c=me.find(y=>y.id===r);!r||!c||(le(),ze=null,G={title:`删除接入通道「${c.name}」`,body:`删除后将停止对端点 ${c.endpoint} 的数据采集与控制下发，此操作不可撤销。确认删除吗？`,confirmLabel:"确认删除",danger:!0,action:{kind:"delete_connection",connectionId:r}},E())})}),e.querySelectorAll("[data-expand-conn]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.expandConn??null;ha=ha===r?null:r,E()})}),e.querySelectorAll("[data-ping-conn]").forEach(l=>{l.addEventListener("click",()=>{const r=me.find(c=>c.id===l.dataset.pingConn);if(r){if(ke="",r.status==="connected"){const y=11+Array.from(`${r.id}${r.endpoint}`).reduce((C,x)=>C+x.charCodeAt(0),0)%23;ie=t.mode==="demo"?`演示连通探针通过：「${r.name}」（${r.endpoint}）模拟往返 ${y} ms。`:`连通测试通过：「${r.name}」（${r.endpoint}）响应正常，延迟 ${y} ms。`}else ke=`连通测试异常：「${r.name}」（${r.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`;E()}})}),e.querySelectorAll("[data-copy-endpoint]").forEach(l=>{l.addEventListener("click",async()=>{const r=l.dataset.endpointVal??"",c=l.dataset.copyEndpoint??null;ze=null;try{await navigator.clipboard.writeText(r),Me=c,ie=`已复制接入端点：${r}`,E(),window.setTimeout(()=>{Me=null,E()},1600)}catch{}})}),e.querySelectorAll("[data-acc-filter]").forEach(l=>{l.addEventListener("click",()=>{Ot=l.dataset.accFilter??"active",E()})}),e.querySelectorAll("[data-toggle-empty-matrix]").forEach(l=>{l.addEventListener("click",()=>{Gt=!Gt,E()})}),e.querySelectorAll("[data-toggle-defer-floor]").forEach(l=>{l.addEventListener("click",async()=>{const r=l.dataset.toggleDeferFloor,c=l.dataset.deferNext==="1";if(!(!r||!t.toggleFloorDeferred))try{const y=await t.toggleFloorDeferred(r,c);we=new Set(y);const C=m.floors.find(x=>x.id===r)?.name??r;ie=c?`已将「${C}」标为本期不纳入（预留），不再计入缺项与同步分母。`:`已将「${C}」恢复纳入本期交付范围。`,E()}catch(y){pe(y),E()}})}),e.querySelectorAll("[data-open-snapshot]").forEach(l=>{l.addEventListener("click",async()=>{const r=l.dataset.openSnapshot,c=K.find(C=>C.id===r);if(!r||!c)return;le();const y=t.getDeliverySnapshotMeta?await t.getDeliverySnapshotMeta(r).catch(()=>null):null;if(y)N={batch:c,meta:y};else{const C=m.floors.find(x=>x.id===c.floorId)?.name??c.floorId;N={batch:c,meta:{batchId:c.id,floorId:c.floorId,floorName:C,planVersion:m.floors.find(x=>x.id===c.floorId)?.plan?.planVersion??0,edgeSyncVersion:J[c.floorId]?.version??1,configSignature:"live",fttPassedAt:ve[c.floorId]?.passedAt??null,devices:[]}}}E()})}),e.querySelector("[data-sign-off-delivery]")?.addEventListener("submit",async l=>{if(l.preventDefault(),!t.signOffDeliveryBatch)return;const r=l.currentTarget,c=r.dataset.signOffDelivery,y=new FormData(r),C=String(y.get("signRecipient")??"").trim(),x=String(y.get("signNote")??"").trim();if(!C){Ze="请填写接收方签收人姓名与部门后再确认签收。",E();return}try{const H=await t.signOffDeliveryBatch(c,C,x);await St();const De=t.getDeliverySnapshotMeta?await t.getDeliverySnapshotMeta(c).catch(()=>null):null;De&&(N={batch:H,meta:De}),Ze="",Ae(`交付基线 ${H.versionTag} 已由「${C}」正式签收交付（状态：已交付）。`),E()}catch(H){Ze=ht(H),E()}}),e.querySelector("[data-reject-delivery]")?.addEventListener("click",async l=>{if(!t.rejectDeliveryBatch)return;const r=l.currentTarget.dataset.rejectDelivery,c=e.querySelector("[data-sign-off-delivery]"),y=c?String(new FormData(c).get("signNote")??"").trim():"",C=y&&y!=="现场核对与功能自检一致，同意正式签收移交"?y:"验收复核需现场整改后重新冻结提交";try{const x=await t.rejectDeliveryBatch(r,C);await St(),le(),Ae(`基线 ${x.versionTag} 已退回整改并转为阶段留档（原因：${C}）。`),E()}catch(x){Ze=ht(x),E()}}),e.querySelector("[data-export-snapshot]")?.addEventListener("click",()=>{N&&os(N.batch,N.meta)}),e.querySelectorAll("[data-matrix-nav]").forEach(l=>{l.addEventListener("click",async()=>{const r=l.dataset.matrixFloor,c=l.dataset.matrixNav??"device_marking",y=l.dataset.matrixOffline==="1";r&&Xt(r),bt={nav:"acceptance",label:"交付验收"},h=c,c==="project_config"&&(w=r?"floor":"overview"),c==="device_list"&&y&&(Ye="offline"),await Ge(),E()})}),e.querySelector("[data-submit-stage-snapshot]")?.addEventListener("click",async l=>{if(!t.saveDeliveryStageSnapshot)return;const r=l.currentTarget.dataset.submitStageSnapshot||I;if(!r)return;const c=e.querySelector("[data-confirm-freeze]"),y=c?String(new FormData(c).get("freezeNote")??"").trim():"";try{const C=await t.saveDeliveryStageSnapshot(r,y||"阶段性施工留档");le(),ke="",ie=`已保存阶段留档 ${C.versionTag}（已核验 ${C.verifiedCount}/${C.deviceCount} 台，状态：阶段留档）。`,await St(),await Ge(),E()}catch(C){Ze=ht(C),E()}}),e.querySelector("[data-confirm-freeze]")?.addEventListener("submit",async l=>{l.preventDefault();const r=l.currentTarget,c=r.dataset.confirmFreeze||I||L;if(!c)return;const y=new FormData(r),C=String(y.get("freezeNote")??"").trim();try{const x=await t.freezeDeliveryBatch(c,C||"全层自检通过，正式交付冻结");le(),Ae(`已生成正式交付冻结基线 ${x.versionTag}（核验 ${x.verifiedCount}/${x.deviceCount}），可在下方记录中执行「去签收」。`),await St(),await Ge(),E()}catch(x){Ze=ht(x),E()}})}await ct()}const Hs=new Set(["lighting","hvac","alarm_rules"]),jn={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},qa=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function Ws(e){const t=new Set;for(const a of e.actions)a.command.startsWith("lighting")?t.add("照明"):a.command.startsWith("hvac")?t.add("暖通"):t.add("综合");return Array.from(t)}function Gs(e,t,a){const s=a?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
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
  `}async function Zs(e,t,a){let s=Ha(),o=!1,i="",[p,$,u,f]=await Promise.all([t.getSpatialTree(),t.listScenes(R.floorId),t.getRuntimeSettings(R.projectId),t.getFloorDevices(R.floorId).catch(()=>[])]),h="manual",w="balanced",D="all",F=null,k="",m=!1,d=!1,b=!1,B="all",O=null,Q="",J="",X=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const ce=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],ee=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],me=[{deviceId:f[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],K=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 ｜ ${u.calendar.workdayStart} – ${u.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 ｜ 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 ｜ ${u.calendar.nightGuardStart} – 次日 ${u.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],A=t.subscribeFloorEvents(R.floorId,async ue=>{ue.type==="control.receipt.updated"&&F?.batchId===ue.batchId&&(F=await t.getControlBatch(ue.batchId),W())});function W(){const ue=k.trim().toLowerCase(),ve=ue?$.filter(g=>`${g.name} ${g.description}`.toLowerCase().includes(ue)):$,we=u.rules.filter(g=>Hs.has(g.category)),Ce=D==="all"?we:D==="cbm"?[]:we.filter(g=>g.category===D),xe=D==="all"||D==="cbm",z=B==="issues"?ce.filter(g=>g.status!=="verified"):ce,Y=qa.find(g=>g.id===w)??qa[1],Le=a.scope.canControlDevices,V=a.scope.canEditScenes,S=a.scope.canEditSettings,q=a.scope.activeOverrides.find(g=>g.module==="settings"&&g.status==="active");e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${Ua({tree:p,session:a,scope:s,isOpen:o,searchKeyword:i})}
            </div>

            <div class="pacom-header-meta">
              ${h==="rules"?S?q?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>':""}
              <button type="button" class="pacom-badge ${X.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${X.length>0?`人工覆盖中：${X.length} 台 ${re("chevron-down",12)}`:`全部自动托管 ${re("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${b?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${ce.length}）</button>
              ${h==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1" ${V?"":"disabled"}>${m?"收起表单":"+ 新建场景"}</button>`:h==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${h==="manual"}" data-scene-tab="manual">快捷场景（${$.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${h==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${h==="rules"}" data-scene-tab="rules">条件联动（${we.length+ee.length}）</button>
          </nav>
        </header>

        ${d?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${X.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${re("x",16)}</button>
              </div>
              ${X.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':X.map(g=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${n(g.name)}</div>
                            <div class="pacom-row-sub">${n(g.reason)}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${n(g.id)}" ${Le?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${X.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${Le?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${b?`
            <aside class="pacom-drawer-side" role="dialog" aria-label="策略指令执行流水">
              <div style="padding:14px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div>
                  <strong style="font-size:15px; font-weight:500;">策略执行日志（Viewing Commands）</strong>
                  <div class="pacom-row-sub">自动排程、联动与场景下发的实时回读流水</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-cmdlog="1" aria-label="关闭执行日志">${re("x",16)}</button>
              </div>
              <div style="padding:10px 18px; border-bottom:var(--hw) solid var(--pacom-border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <div class="pacom-tabs">
                  <button class="pacom-tab" aria-selected="${B==="all"}" data-log-filter="all">全部（${ce.length}）</button>
                  <button class="pacom-tab" aria-selected="${B==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${z.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${z.map(g=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${n(g.device)}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${n(g.source)}</span>
                        </div>
                        <span class="pacom-row-sub">${n(g.action)} ｜ ${n(g.at)}</span>
                      </div>
                      <span class="pacom-badge ${g.status==="verified"?"pacom-badge--online":g.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${g.status==="verified"?"回读确认":g.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${Q?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${n(Q)}</span></div>`:""}
          ${J?`<div class="pacom-alert-banner">${n(J)}</div>`:""}

          ${h==="manual"?`
              ${F?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${n(F.batchId)}</span>
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
                            ${F.receipts.map(g=>`
                                <tr>
                                  <td><code style="font-size:12px;">${n(g.deviceId)}</code></td>
                                  <td>${n(g.command)}</td>
                                  <td>${n(String(g.targetValue))}${g.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${n(g.errorMessage)}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${g.status==="verified_success"?"pacom-badge--online":g.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${n(g.status)}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${m?`
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
                          <span class="pacom-setting-title">联动动作列表（${me.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${me.map((g,L)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" name="draftDevice-${L}" data-draft-dev="${L}" aria-label="目标设备">
                                ${f.map(ne=>`<option value="${n(ne.id)}" ${ne.id===g.deviceId?"selected":""}>${n(ne.name)}</option>`).join("")}
                              </select>
                              <select class="pacom-select" name="draftCommand-${L}" data-draft-cmd="${L}" aria-label="执行指令">
                                <option value="lighting.dimming" ${g.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${g.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${g.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" name="draftTargetValue-${L}" data-draft-val="${L}" value="${n(g.targetValue)}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${L}" ${me.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit" ${V?"":"disabled"}>保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="pacom-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${n(k)}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${ve.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${ve.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':ve.map(g=>{const L=Ws(g),ne=g.actions.slice(0,3).map(Oe=>{const Ke=f.find(Ue=>Ue.id===Oe.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??Oe.deviceId,st=Oe.command==="lighting.dimming"?`亮度 ${Oe.targetValue}%`:Oe.command==="hvac.setpoint"?`设温 ${Oe.targetValue}°C`:Oe.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${n(Ke)} → ${n(st)}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${n(g.name)}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${L.map(Oe=>`<span class="pacom-badge pacom-badge--accent">${n(Oe)}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${g.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${n(g.description)}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${ne}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${n(g.lastExecutedAt?g.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行")}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${n(g.id)}" ${Le?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:h==="schedule_oss"?`
                <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">当前优化启停模式</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${Y.title}</div>
                    <span class="pacom-kpi-delta">${Y.estSaving}</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">明日预测预启动时刻</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${Y.predictedStart}</div>
                    <span class="pacom-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">本周累计节省运行工时</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${Y.savedHours}</div>
                    <span class="pacom-kpi-delta">当前人工覆盖挂起：${X.length} 台</span>
                  </div>
                </div>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="pacom-mode-grid">
                    ${qa.map(g=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${w===g.id}" data-oss-mode="${g.id}" ${Le?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${g.title}</strong>
                          <span class="pacom-badge ${w===g.id?"pacom-badge--online":"pacom-badge--neutral"}">${w===g.id?"当前生效":g.badge}</span>
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
                          ${K.map(g=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${n(g.name)}</span>
                                    ${g.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${n(g.windowLabel)}</div>
                                </td>
                                <td>${Gs(g.startHour,g.endHour,g.enabled)}</td>
                                <td><span class="pacom-row-sub">${n(g.scope)}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${g.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="pacom-switch"
                                      role="switch"
                                      aria-checked="${g.enabled}"
                                      aria-label="切换排程 ${n(g.name)}"
                                      data-toggle-schedule="${n(g.id)}"
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(g=>{const L=g==="all"?"全部":jn[g]??g,ne=g==="all"?we.length+ee.length:g==="cbm"?ee.length:we.filter(Oe=>Oe.category===g).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${D===g}" data-rule-cat="${g}">
                              <span>${L}</span><span class="pacom-count-num">${ne}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${Ce.map(g=>{const L=O===g.id;return`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${n(jn[g.category]??g.category)}</span>
                                  <span>${n(g.name)}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${g.version}</span>
                                </span>
                                <span class="pacom-setting-desc">${n(g.summary)} ｜ 范围：${n(g.scopeLabel)} ｜ 回执：${n(g.receiptSummary??"已同步")}</span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${n(g.id)}">${L?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${g.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="pacom-switch"
                                  role="switch"
                                  aria-checked="${g.enabled?"true":"false"}"
                                  aria-label="切换 ${n(g.name)}"
                                  data-toggle-strategy-rule="${n(g.id)}"
                                  data-rule-ver="${g.version}"
                                  data-rule-next="${!g.enabled}"
                                  ${S?"":"disabled"}
                                >
                                  <span class="pacom-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${L?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${g.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":g.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${n(g.scopeLabel)} ｜ 当前版本：v${g.version} ｜ 最近同步：${n(g.receiptSummary??"已同步")}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${xe?ee.map(g=>{const L=Math.min(100,Math.round(g.runtimeHours/g.thresholdHours*100));return`
                                <div class="pacom-setting-row">
                                  <div class="pacom-setting-meta" style="gap:6px;">
                                    <span class="pacom-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${n(g.name)}</span>
                                      <span class="pacom-badge ${L>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${g.runtimeHours} / ${g.thresholdHours} h（${L}%）</span>
                                    </span>
                                    <div class="pacom-progress-track" style="max-width:340px;">
                                      <div class="pacom-progress-fill" style="width:${L}%; background:${L>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="pacom-setting-desc">绑定设备：${n(g.equipment)} ｜ 上次重置：${n(g.lastReset)}</span>
                                  </div>
                                  <div class="pacom-setting-control">
                                    <span class="pacom-row-sub">${g.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="pacom-switch" role="switch" aria-checked="${g.enabled}" data-toggle-cbm="${n(g.id)}" aria-label="切换 ${n(g.name)}" ${S?"":"disabled"}>
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,Va(e,{onToggle:()=>{o=!o,W(),o&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:g=>{i=g,W();const L=e.querySelector("[data-global-space-search]");L&&(L.focus(),L.setSelectionRange(g.length,g.length))},onPick:g=>{s=g,o=!1,W()}}),e.querySelectorAll("[data-scene-tab]").forEach(g=>{g.addEventListener("click",()=>{h=g.dataset.sceneTab??"manual",Q="",W()})}),e.querySelectorAll("[data-toggle-overrides]").forEach(g=>{g.addEventListener("click",()=>{d=!d,W()})}),e.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{Le&&(X=[],Q="已释放全部人工覆盖设备，自动节能策略已恢复托管。",W())}),e.querySelectorAll("[data-release-one]").forEach(g=>{g.addEventListener("click",()=>{if(!Le)return;const L=g.dataset.releaseOne;X=X.filter(ne=>ne.id!==L),Q="已恢复该设备的自动策略托管。",W()})}),e.querySelectorAll("[data-toggle-cmdlog]").forEach(g=>{g.addEventListener("click",()=>{b=!b,W()})}),e.querySelectorAll("[data-log-filter]").forEach(g=>{g.addEventListener("click",()=>{B=g.dataset.logFilter??"all",W()})}),e.querySelector("[data-close-batch]")?.addEventListener("click",()=>{F=null,W()}),e.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),e.querySelectorAll("[data-oss-mode]").forEach(g=>{g.addEventListener("click",()=>{if(!Le)return;const L=g.dataset.ossMode;if(!L)return;w=L;const ne=qa.find(Oe=>Oe.id===L);Q=`已切换至「${ne?.title??L}」模式（明日预测启动 ${ne?.predictedStart??""}）。`,W()})}),e.querySelectorAll("[data-toggle-schedule]").forEach(g=>{g.addEventListener("click",()=>{if(!Le)return;const L=g.dataset.toggleSchedule,ne=K.find(Oe=>Oe.id===L);ne&&(ne.enabled=!ne.enabled,Q=`排程「${ne.name}」已${ne.enabled?"恢复启用":"临时暂停"}。`,W())})}),e.querySelectorAll("[data-rule-cat]").forEach(g=>{g.addEventListener("click",()=>{D=g.dataset.ruleCat??"all",W()})}),e.querySelectorAll("[data-expand-rule]").forEach(g=>{g.addEventListener("click",()=>{const L=g.dataset.expandRule??null;O=O===L?null:L,W()})}),e.querySelectorAll("[data-toggle-cbm]").forEach(g=>{g.addEventListener("click",()=>{if(!S)return;const L=ee.find(ne=>ne.id===g.dataset.toggleCbm);L&&(L.enabled=!L.enabled,Q=`工时维保规则「${L.name}」已${L.enabled?"启用":"停用"}。`,W())})}),e.querySelectorAll("[data-toggle-strategy-rule]").forEach(g=>{g.addEventListener("click",async()=>{if(S){J="";try{await t.toggleRuntimeRule(g.dataset.toggleStrategyRule,g.dataset.ruleNext==="true",Number(g.dataset.ruleVer)),u=await t.getRuntimeSettings(R.projectId),Q="条件联动规则状态与版本回执已更新。",W()}catch(L){J=L instanceof Error?L.message:String(L),W()}}})}),e.querySelectorAll("[data-toggle-create]").forEach(g=>{g.addEventListener("click",()=>{!V&&!m||(m=!m,W())})}),e.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{V&&(me.push({deviceId:f[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),W())}),e.querySelectorAll("[data-del-draft-action]").forEach(g=>{g.addEventListener("click",()=>{if(!V)return;const L=Number(g.dataset.delDraftAction);me.length>1&&(me.splice(L,1),W())})}),e.querySelectorAll("[data-draft-dev]").forEach(g=>{g.addEventListener("change",()=>{if(!V)return;const L=me[Number(g.dataset.draftDev)];L&&(L.deviceId=g.value)})}),e.querySelectorAll("[data-draft-cmd]").forEach(g=>{g.addEventListener("change",()=>{if(!V)return;const L=me[Number(g.dataset.draftCmd)];L&&(L.command=g.value)})}),e.querySelectorAll("[data-draft-val]").forEach(g=>{g.addEventListener("change",()=>{if(!V)return;const L=me[Number(g.dataset.draftVal)];L&&(L.targetValue=g.value)})}),e.querySelector("[data-scene-search]")?.addEventListener("input",g=>{const L=g.currentTarget,ne=L.selectionStart??L.value.length;k=L.value,W();const Oe=e.querySelector("[data-scene-search]");Oe&&(Oe.focus(),Oe.setSelectionRange(ne,ne))}),e.querySelectorAll("[data-exec-scene]").forEach(g=>{g.addEventListener("click",async()=>{if(!Le)return;J="";const L=$.find(ne=>ne.id===g.dataset.execScene);try{F=await t.executeScene(g.dataset.execScene),$=await t.listScenes(R.floorId),ce.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:L?.name??"E7F 场景",action:`${F.receipts.length} 台设备联动下发`,status:"verified"}),W()}catch(ne){J=ne instanceof Error?ne.message:String(ne),W()}})}),e.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async g=>{if(g.preventDefault(),!V)return;const L=new FormData(g.currentTarget);try{await t.createScene({projectId:R.projectId,floorId:R.floorId,name:String(L.get("name")??""),description:String(L.get("description")??""),actions:me.map(ne=>({deviceId:ne.deviceId,command:ne.command,targetValue:ne.targetValue==="true"?!0:ne.targetValue==="false"?!1:Number(ne.targetValue)||50}))}),$=await t.listScenes(R.floorId),m=!1,Q=`快捷场景已保存（共绑定 ${me.length} 条联动动作）。`,W()}catch(ne){J=ne instanceof Error?ne.message:String(ne),W()}})}W(),window.addEventListener("hashchange",()=>A(),{once:!0})}const Mn={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function Qa(e,t){return e.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':e.map(a=>`
      <div class="pacom-setting-row">
        <div class="pacom-setting-meta">
          <span class="pacom-setting-title">
            <span>${n(a.name)}</span>
            <span class="pacom-badge pacom-badge--neutral">v${a.version}</span>
            <span class="pacom-badge pacom-badge--accent">${n(a.scopeLabel)}</span>
          </span>
          <span class="pacom-setting-desc">${n(a.summary)} ｜ 回执：${n(a.receiptSummary??"已同步")}</span>
        </div>
        <div class="pacom-setting-control">
          <span class="pacom-row-sub">${a.enabled?"已启用":"已停用"}</span>
          <button
            type="button"
            class="pacom-switch"
            role="switch"
            aria-checked="${a.enabled?"true":"false"}"
            aria-label="切换 ${n(a.name)}"
            data-toggle-rule="${n(a.id)}"
            data-rule-ver="${a.version}"
            data-rule-next="${!a.enabled}"
            ${t?"":"disabled"}
          >
            <span class="pacom-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function Ks(e,t,a){let s="calendar",o=Ha(),i=!1,p="";const[$,u]=await Promise.all([t.getSpatialTree(),t.getRuntimeSettings(R.projectId)]);let f=u,h=f.calendar.workdayStart,w=f.calendar.workdayEnd,D=f.calendar.nightGuardStart,F=f.calendar.nightGuardEnd,k=!0,m=[];const d=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let b="flat";const B={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},O={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},Q={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},J={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},X=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let ce="",ee="";function me(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(W=>{const ue=Mn[W];return`
                <button type="button" class="pacom-unified-item" aria-current="${s===W}" data-stab="${W}">
                  ${re(ue.icon,16)}
                  <span>${ue.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function K(){const A=a.scope.canEditSettings,W=a.scope.activeOverrides.find(z=>z.module==="settings"&&z.status==="active"),ue=$.projects[0]?.name??"当前项目",ve=f.rules.filter(z=>z.category==="weather_area"),we=f.rules.filter(z=>z.category==="metering_carbon"),Ce=f.rules.filter(z=>z.category==="templates"),xe=Mn[s];e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${Ua({tree:$,session:a,scope:o,maxGranularity:"project",isOpen:i,searchKeyword:p})}
            </div>
            <div class="pacom-header-meta">
              ${A?W?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${me()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head">
                <h2 class="pacom-unified-title">${xe.label}</h2>
                <p class="pacom-unified-subtitle">${xe.subtitle}</p>
              </div>
              ${W?`<div class="pacom-banner pacom-banner--ok">
                      <div class="pacom-banner-text">
                        <span class="pacom-banner-title">临时提权生效中（应用设置 ｜ ${W.durationHours}h）</span>
                        <span class="pacom-banner-sub">审批人：${n(W.approvedBy)} ｜ 到期自动收回：${n(W.expiresAt.slice(0,16).replace("T"," "))} ｜ 事由：${n(W.reason)}</span>
                      </div>
                    </div>`:""}
              ${ce?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${n(ce)}</span></div>`:""}
              ${ee?`<div class="pacom-alert-banner">${n(ee)}</div>`:""}

              ${s==="calendar"?`
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
                          <input class="pacom-input" name="calWorkdayStart" style="width:116px;" type="time" data-cal-start value="${n(h)}" aria-label="工作日上班时间" ${A?"":"disabled"} />
                          <span class="pacom-row-sub">至</span>
                          <input class="pacom-input" name="calWorkdayEnd" style="width:116px;" type="time" data-cal-end value="${n(w)}" aria-label="工作日下班时间" ${A?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calNightGuardStart" style="width:116px;" type="time" data-night-start value="${n(D)}" aria-label="夜间值守开始" ${A?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" name="calNightGuardEnd" style="width:116px;" type="time" data-night-end value="${n(F)}" aria-label="夜间值守结束" ${A?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">自动跳过中国法定节假日</span>
                          <span class="pacom-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                        </div>
                        <div class="pacom-setting-control">
                          <span class="pacom-row-sub">${k?"已开启":"已关闭"}</span>
                          <button type="button" class="pacom-switch" role="switch" aria-checked="${k}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${A?"":"disabled"}>
                            <span class="pacom-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                        <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${A?"":"disabled"}>保存并校验版本</button>
                      </div>
                    </div>
                  </section>

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">特殊例外日期（加班 / 接待覆盖默认日历）</h2>
                      <span class="pacom-row-sub">共 ${d.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${d.map(z=>`
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title"><span>${n(z.date)}</span><span class="pacom-badge pacom-badge--accent">${n(z.mode)}</span></span>
                              <span class="pacom-setting-desc">${n(z.label)}</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${n(z.id)}" ${A?"":"disabled"}>移除</button>
                          </div>`).join("")}
                      <form data-add-sd-form class="pacom-setting-row" style="display:grid; grid-template-columns:145px 1fr 148px auto; gap:8px; align-items:center;">
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

                  ${m.length>0?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">受影响的定时与夜间规则预览</h2>
                          <span class="pacom-row-sub">共 ${m.length} 条</span>
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
                                ${m.map(z=>`
                                    <tr>
                                      <td>
                                        <div style="font-weight:450;">${n(z.ruleName)}</div>
                                        ${z.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${n(z.conflictWarning)}</div>`:""}
                                      </td>
                                      <td>${n(z.beforeWindow)}</td>
                                      <td><strong>${n(z.afterWindow)}</strong></td>
                                      <td>
                                        <span class="pacom-badge ${z.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                          ${z.conflictWarning?"交叠警告":"自动跟随"}
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
                            <select class="pacom-select" name="energyWeatherSource" data-energy-field="weatherSource" aria-label="室外气象数据源" ${A?"":"disabled"}>
                              <option value="guanzhou_station" ${B.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                              <option value="campus_sensor" ${B.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                            </select>
                          </div>
                        </div>
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">${n(ue)}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" name="energyBillingArea" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${n(B.billingArea)}" aria-label="计费面积" ${A?"":"disabled"} />
                          </div>
                        </div>
                        ${Qa(ve,A)}
                      </div>
                    </section>

                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">电价与碳排口径</h2>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${b==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                          <button class="pacom-tab" aria-selected="${b==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                        </div>
                      </div>
                      <div class="pacom-settings-card">
                        ${b==="flat"?`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">综合电价参考（元 / kWh）</span>
                                <span class="pacom-setting-desc">用于数据分析中的月度节能金额估算</span>
                              </div>
                              <div class="pacom-setting-control">
                                <input class="pacom-input" name="energyTariffYuan" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${n(B.tariffYuan)}" aria-label="综合电价" ${A?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 ｜ 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" name="energyTariffPeak" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${n(B.tariffPeak)}" aria-label="峰段电价" ${A?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" name="energyTariffFlat" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${n(B.tariffFlat)}" aria-label="平段电价" ${A?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" name="energyTariffValley" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${n(B.tariffValley)}" aria-label="谷段电价" ${A?"":"disabled"} />
                              </div>
                            </div>`}
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">区域电网碳排放因子</span>
                            <span class="pacom-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" name="energyCarbonFactor" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${A?"":"disabled"}>
                              <option value="0.5271" ${B.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                              <option value="0.5703" ${B.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                            </select>
                          </div>
                        </div>
                        ${Qa(we,A)}
                        <div class="pacom-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${A?"":"disabled"}>保存口径参数</button>
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
                              <input class="pacom-input" name="guardMinTemp" style="width:72px;" type="number" data-guard-field="minTemp" value="${n(O.minTemp)}" aria-label="最低设定温度" ${A?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" name="guardMaxTemp" style="width:72px;" type="number" data-guard-field="maxTemp" value="${n(O.maxTemp)}" aria-label="最高设定温度" ${A?"":"disabled"} />
                              <span class="pacom-row-sub">°C</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">人工覆盖自动释放时长</span>
                              <span class="pacom-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                            </div>
                            <div class="pacom-setting-control">
                              <select class="pacom-select" name="guardOverrideAutoRelease" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${A?"":"disabled"}>
                                <option value="2h" ${O.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                                <option value="4h" ${O.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                                <option value="eod" ${O.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                                <option value="permanent" ${O.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                              </select>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">控制指令回读超时阈值（秒）</span>
                              <span class="pacom-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" name="guardReadbackTimeoutSec" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${n(O.readbackTimeoutSec)}" aria-label="回读超时阈值" ${A?"":"disabled"} />
                              <span class="pacom-row-sub">秒</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row" style="justify-content:flex-end;">
                            <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${A?"":"disabled"}>保存控制参数</button>
                          </div>
                        </div>
                      </section>

                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">标准设备参数模板</h2>
                          <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                        </div>
                        <div class="pacom-settings-card">
                          ${Qa(Ce,A)}
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
                              <input class="pacom-input" name="dailyDigestTime" style="width:116px;" type="time" data-digest-time value="${n(J.dailyDigestTime)}" aria-label="每日简报发送时间" ${A?"":"disabled"} />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${J.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报" ${A?"":"disabled"}>
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
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${J.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰" ${A?"":"disabled"}>
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
                              <input class="pacom-input" name="autoWoDelayMin" style="width:72px;" type="number" data-auto-wo="delayMin" value="${n(Q.delayMin)}" aria-label="自动派单延迟分钟数" ${A?"":"disabled"} />
                              <span class="pacom-row-sub">分钟</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${Q.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${A?"":"disabled"}>
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
                              <select class="pacom-select" name="autoWoDefaultGroup" data-auto-wo="defaultGroup" aria-label="默认处理组" ${A?"":"disabled"}>
                                <option value="暖通运维组" ${Q.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                                <option value="强电照明组" ${Q.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                                <option value="园区物业值班组" ${Q.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                              </select>
                              <span class="pacom-row-sub">防重</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${Q.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${A?"":"disabled"}>
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
                                ${X.map(z=>`
                                    <tr>
                                      <td><strong>${n(z.groupName)}</strong></td>
                                      <td>${n(z.scope)}</td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${n(z.severity)}</span></td>
                                      <td><span class="pacom-badge pacom-badge--accent">${n(z.channels)}</span></td>
                                      <td style="text-align:right;">
                                        <button type="button" class="pacom-switch" role="switch" aria-checked="${z.enabled}" data-toggle-nr="${n(z.id)}" aria-label="切换 ${n(z.groupName)} 通知规则" ${A?"":"disabled"}>
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
    `,Va(e,{onToggle:()=>{i=!i,K(),i&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:z=>{p=z,K();const Y=e.querySelector("[data-global-space-search]");Y&&(Y.focus(),Y.setSelectionRange(z.length,z.length))},onPick:z=>{o=z,i=!1,K()}}),e.querySelectorAll("[data-stab]").forEach(z=>{z.addEventListener("click",()=>{s=z.dataset.stab??"calendar",ce="",ee="",K()})}),e.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{A&&(k=!k,ce=`法定节假日自动跳过已${k?"开启":"关闭"}。`,K())}),e.querySelector("[data-night-start]")?.addEventListener("change",z=>{A&&(D=z.currentTarget.value)}),e.querySelector("[data-night-end]")?.addEventListener("change",z=>{A&&(F=z.currentTarget.value)}),e.querySelector("[data-add-sd-form]")?.addEventListener("submit",z=>{if(z.preventDefault(),!A)return;const Y=new FormData(z.currentTarget);d.push({id:`sd-${Date.now()}`,date:String(Y.get("date")??""),label:String(Y.get("label")??""),mode:String(Y.get("mode")??"保持工作日工况")}),ce="已添加特殊例外日期，当日自动覆盖默认节假日排程。",K()}),e.querySelectorAll("[data-del-sd]").forEach(z=>{z.addEventListener("click",()=>{if(!A)return;const Y=d.findIndex(Le=>Le.id===z.dataset.delSd);Y>=0&&d.splice(Y,1),K()})}),e.querySelectorAll("[data-tariff-mode]").forEach(z=>{z.addEventListener("click",()=>{b=z.dataset.tariffMode??"flat",K()})}),e.querySelectorAll("[data-energy-field]").forEach(z=>{z.addEventListener("change",()=>{if(!A)return;const Y=z.dataset.energyField;Y&&(B[Y]=z.value)})}),e.querySelector("[data-save-energy]")?.addEventListener("click",()=>{A&&(ce=b==="flat"?`能耗计费与气象口径已保存（面积 ${B.billingArea} m² ｜ 综合电价 ¥${B.tariffYuan}/kWh ｜ 因子 ${B.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${B.tariffPeak} / 平 ¥${B.tariffFlat} / 谷 ¥${B.tariffValley}）。`,K())}),e.querySelectorAll("[data-guard-field]").forEach(z=>{z.addEventListener("change",()=>{if(!A)return;const Y=z.dataset.guardField;Y&&(O[Y]=z.value)})}),e.querySelector("[data-save-guard]")?.addEventListener("click",()=>{A&&(ce=`控制保护参数已保存（温区 ${O.minTemp}–${O.maxTemp}°C ｜ 超时 ${O.readbackTimeoutSec}s）。`,K())}),e.querySelectorAll("[data-auto-wo]").forEach(z=>{z.addEventListener("change",()=>{if(!A)return;const Y=z.dataset.autoWo;Y&&(Q[Y]=z.value),ce="超时自动派单配置已更新。",K()})}),e.querySelectorAll("[data-toggle-autowo]").forEach(z=>{z.addEventListener("click",()=>{if(!A)return;const Y=z.dataset.toggleAutowo;Y&&(Q[Y]=!Q[Y],ce="自动派单保护策略已更新。",K())})}),e.querySelector("[data-digest-time]")?.addEventListener("change",z=>{A&&(J.dailyDigestTime=z.currentTarget.value,ce=`每日晨间简报发送时刻已更新为 ${J.dailyDigestTime}。`,K())}),e.querySelectorAll("[data-notify-key]").forEach(z=>{z.addEventListener("click",()=>{if(!A)return;const Y=z.dataset.notifyKey;Y&&(J[Y]=!J[Y],ce="消息通知偏好已更新。",K())})}),e.querySelectorAll("[data-toggle-nr]").forEach(z=>{z.addEventListener("click",()=>{if(!A)return;const Y=X.find(Le=>Le.id===z.dataset.toggleNr);Y&&(Y.enabled=!Y.enabled,ce=`工作组「${Y.groupName}」的分流推送规则已${Y.enabled?"启用":"停用"}。`,K())})}),e.querySelector("[data-cal-start]")?.addEventListener("change",z=>{A&&(h=z.currentTarget.value)}),e.querySelector("[data-cal-end]")?.addEventListener("change",z=>{A&&(w=z.currentTarget.value)}),e.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{ee="";try{m=await t.previewCalendarImpact(R.projectId,h,w),K()}catch(z){ee=z instanceof Error?z.message:String(z),K()}}),e.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{if(A){ee="";try{const z=await t.saveWorkCalendar(R.projectId,h,w,f.calendar.version);f={...f,calendar:{...z,nightGuardStart:D,nightGuardEnd:F}},ce=`工作时间配置已保存至 v${z.version}（工作日 ${z.workdayStart}–${z.workdayEnd} ｜ 夜间值守 ${D}–${F}）`,m=[],K()}catch(z){ee=z instanceof Error?z.message:String(z),K()}}}),e.querySelectorAll("[data-toggle-rule]").forEach(z=>{z.addEventListener("click",async()=>{if(A){ee="";try{await t.toggleRuntimeRule(z.dataset.toggleRule,z.dataset.ruleNext==="true",Number(z.dataset.ruleVer)),f=await t.getRuntimeSettings(R.projectId),ce="策略状态与版本回执已更新。",K()}catch(Y){ee=Y instanceof Error?Y.message:String(Y),K()}}})})}K()}const qn="pacom.web.sidebar.collapsed",Ys=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,On=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],rn={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},Tn=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function Xa(){const e=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return e in rn?e:"home"}function ut(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}const Ea=new WeakMap;function Js(e){Ea.get(e)?.()}async function Qs(e,t,a,s){Ea.get(e)?.(),e.classList.remove("bare-login");let o=a,i=Xa(),p=localStorage.getItem(qn)==="1",$=!1,u=!1,f=!1,h=await t.listOrganizations?.()??[{id:"org-gzlab",name:"广州国家实验室",projectCount:2}],w=t.getActiveOrganizationId?.()??h[0]?.id??"org-gzlab",D="",F=!1,k=0,m={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};function d(S){return o.scope.visibleModules.includes(S)}d(i)||(i="home",window.location.hash="#home");function b(){return h.find(S=>S.id===w)??h[0]??{id:"org-gzlab",name:"广州国家实验室",projectCount:0}}function B(S){if(S.id==="org-gzlab")return'<span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>';const q=S.name.slice(0,1)||"机";return`<span class="pacom-pop-avatar" style="width:24px; height:24px; font-size:12px; border-radius:6px;" aria-hidden="true">${ut(q)}</span>`}async function O(){t.listOrganizations&&(h=await t.listOrganizations(),w=t.getActiveOrganizationId?.()??h[0]?.id??"org-gzlab")}async function Q(){try{await O();const[S,q,P,g,L]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(R.floorId).catch(()=>[]),t.listAlarms(R.floorId).catch(()=>[]),t.listWorkOrders(R.floorId).catch(()=>[]),t.listScenes(R.floorId).catch(()=>[])]);m={devices:q,zones:S.zones,alarms:P,workOrders:g,scenes:L},k=P.filter(ne=>ne.status==="active").length,W()}catch{}}function J(){const S=On.filter(P=>d(P.id));let q=!1;return S.map(P=>`
        ${(P.id==="settings"||P.id==="deployment")&&!q?(q=!0,'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>'):""}
        <button type="button" class="pacom-nav-item" data-route="${P.id}" aria-current="${i===P.id?"page":"false"}" title="${P.label}">
          ${re(P.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${P.label}</span>
          ${P.id==="alarms"&&k>0?`<span class="pacom-nav-count" title="待处理告警 ${k} 条">${k}</span>`:""}
        </button>`).join("")}function X(){const S=D.trim().toLowerCase(),q=On.filter(se=>d(se.id)),P=S?q.filter(se=>se.label.toLowerCase().includes(S)).slice(0,4):q,g=S?m.devices.filter(se=>`${se.name} ${se.id} ${se.category}`.toLowerCase().includes(S)).slice(0,5):m.devices.slice(0,3),L=S?m.zones.filter(se=>se.name.toLowerCase().includes(S)).slice(0,3):[],ne=d("alarms")?S?m.alarms.filter(se=>`${se.title} ${se.message} ${se.id}`.toLowerCase().includes(S)).slice(0,4):m.alarms.filter(se=>se.status==="active").slice(0,2):[],Oe=d("alarms")?S?m.workOrders.filter(se=>`${se.title} ${se.id}`.toLowerCase().includes(S)).slice(0,3):[]:[],Ke=d("scenes")?S?m.scenes.filter(se=>`${se.name} ${se.description}`.toLowerCase().includes(S)).slice(0,3):[]:[],st=d("deployment")?S?Tn.filter(se=>`${se.title} ${se.category}`.toLowerCase().includes(S)).slice(0,4):Tn.slice(0,2):[],Ue=[];return g.length&&Ue.push(`<div class="pacom-search-group">${S?"设备（空间总览）":"常用设备直达"}</div>`+g.map(se=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(se.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${ut(se.name)}</span><span class="pacom-badge ${se.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${se.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),L.length&&Ue.push('<div class="pacom-search-group">功能区</div>'+L.map(se=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(se.id)}"><span>${ut(se.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),ne.length&&Ue.push(`<div class="pacom-search-group">${S?"告警":"待处理告警"}</div>`+ne.map(se=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(se.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${ut(se.title)}</span><span class="pacom-badge pacom-badge--warning">${se.status==="active"?"待处理":"已确认"}</span></button>`).join("")),Oe.length&&Ue.push('<div class="pacom-search-group">运维工单</div>'+Oe.map(se=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(se.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${ut(se.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),Ke.length&&Ue.push('<div class="pacom-search-group">智能策略</div>'+Ke.map(se=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${ut(se.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),st.length&&Ue.push('<div class="pacom-search-group">图纸与工程文档</div>'+st.map(se=>`<button type="button" class="pacom-search-hit" data-search-hash="${se.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${ut(se.title)}</span><span class="pacom-badge pacom-badge--neutral">${ut(se.category)}</span></button>`).join("")),P.length&&Ue.push('<div class="pacom-search-group">工作区</div>'+P.map(se=>`<button type="button" class="pacom-search-hit" data-search-hash="#${se.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${re(se.icon,14)}${ut(se.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),Ue.length?Ue.join(""):`<div class="pacom-nav-empty">未找到与「${ut(D)}」匹配的设备、区域、告警、工单或图纸</div>`}function ce(S){S.querySelectorAll("[data-search-hash]").forEach(q=>{q.addEventListener("click",()=>{const P=q.dataset.searchHash||"#home";F=!1,D="",ee(),$=!1,window.location.hash===P?(i=Xa(),xe(!0)):window.location.hash=P})})}function ee(){if(e.querySelector('[data-role="cmd-scrim"]')?.remove(),!F)return;const S=document.createElement("div");S.className="pacom-cmd-scrim",S.dataset.role="cmd-scrim",S.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${re("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${ut(D)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${X()}
        </div>
      </div>
    `,e.appendChild(S),S.addEventListener("click",g=>{g.target===S&&(F=!1,ee())});const q=S.querySelector('[data-role="cmd-input"]'),P=S.querySelector('[data-role="cmd-body"]');P&&ce(P),q?.focus(),q?.addEventListener("input",g=>{D=g.currentTarget.value,P&&(P.innerHTML=X(),ce(P))})}function me(){if(!u)return"";const S=o.displayName.slice(0,1)||"U",q=!!(t.createOrganization&&o.role==="org_admin");return`
      <div class="pacom-org-popover ${p?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <div class="pacom-pop-section-label">切换机构</div>
        ${h.map(P=>{const g=P.id===w;return`
              <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitemradio" aria-checked="${g}" data-pop-org="${ut(P.id)}">
                ${B(P)}
                <span class="pacom-pop-text">
                  <b>${ut(P.name)}</b>
                  <small>${P.projectCount>0?`${P.projectCount} 个项目`:"暂无项目"}</small>
                </span>
                ${g?re("check",16,"pacom-pop-check"):""}
              </button>`}).join("")}
        ${q?f?`
                <form data-create-org-form="1" style="padding:6px 8px; display:flex; gap:6px; align-items:center;">
                  <input class="pacom-input" name="orgName" placeholder="输入机构名称" style="height:30px; font-size:13px; flex:1; min-width:0;" required />
                  <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm">创建</button>
                </form>`:`
                <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="toggle-new-org">
                  <span class="pacom-pop-icon" aria-hidden="true">${re("plus",16)}</span>
                  <span class="pacom-pop-text">新建机构</span>
                </button>`:""}

        <button type="button" class="pacom-pop-item" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-icon" aria-hidden="true">${re("settings",16)}</span>
          <span class="pacom-pop-text">机构与权限</span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitem" data-pop-act="go-account">
          <span class="pacom-pop-avatar" aria-hidden="true">${ut(S)}</span>
          <span class="pacom-pop-text">
            <b>${ut(o.displayName)}</b>
            <small>${ut(o.roleLabel)}</small>
          </span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${re("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function K(S){switch(d(i)||(i="home",window.location.hash="#home"),document.title=`${rn[i]} ｜ PACOM Station`,i){case"home":await ds(S,t,o);return;case"analysis":await cs(S,t,o);return;case"alarms":await Es(S,t,o);return;case"scenes":await Zs(S,t,o);return;case"settings":await Ks(S,t,o);return;case"deployment":await Vs(S,t,o);return;case"account":await hs(S,t,o,q=>{o=q,W(),ue()},A);return}}async function A(){u=!1,$=!1,F=!1,V();try{await t.logout()}finally{window.location.hash="#login",s()}}function W(){const S=e.querySelector('[data-role="nav-list"]');S&&(S.innerHTML=J(),ve())}function ue(){e.querySelector('[data-role="org-popover"]')?.remove();const S=e.querySelector('[data-role="org-menu-btn"]');if(S&&S.setAttribute("aria-expanded",String(u)),!u)return;const q=document.createElement("div");q.innerHTML=me().trim();const P=q.firstElementChild;P&&(e.appendChild(P),Ce())}function ve(){e.querySelectorAll("[data-route]").forEach(S=>{S.addEventListener("click",()=>{const q=S.dataset.route;q===i&&!$||(i=q,$=!1,u=!1,window.location.hash=`#${i}`,xe(!0))})})}async function we(S){if(!t.switchOrganization)return;await t.switchOrganization(S),await O();const q=await t.getSpatialTree(),P=q.projects[0],g=P?q.buildings.find(ne=>ne.projectId===P.id):void 0,L=g?q.floors.find(ne=>ne.buildingId===g.id&&ne.id===R.floorId)??q.floors.find(ne=>ne.buildingId===g.id):void 0;P&&g&&L?qt({level:"floor",projectId:P.id,buildingId:g.id,floorId:L.id}):P&&g?qt({level:"building",projectId:P.id,buildingId:g.id}):P?qt({level:"project",projectId:P.id}):qt({level:"all-projects"}),u=!1,f=!1,$=!1,await xe(!0),Q()}function Ce(){e.querySelectorAll("[data-pop-org]").forEach(S=>{S.addEventListener("click",()=>{const q=S.dataset.popOrg;if(q){if(q===w){u=!1,ue();return}we(q)}})}),e.querySelector('[data-pop-act="toggle-new-org"]')?.addEventListener("click",S=>{S.stopPropagation(),f=!f,ue(),f&&e.querySelector('[data-create-org-form] input[name="orgName"]')?.focus()}),e.querySelector("[data-create-org-form]")?.addEventListener("submit",async S=>{if(S.preventDefault(),!t.createOrganization)return;const q=new FormData(S.currentTarget),P=String(q.get("orgName")??"").trim();if(!P)return;const g=await t.createOrganization(P);await we(g.id)}),e.querySelectorAll('[data-pop-act="go-account"]').forEach(S=>{S.addEventListener("click",()=>{u=!1,f=!1,$=!1,i="account",window.location.hash="#account",xe(!0)})}),e.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{A()})}async function xe(S){const q=e.querySelector('[data-role="main-stage"]');if(!S&&q){const g=e.querySelector(".pacom-nav-rail");g&&(g.classList.toggle("is-collapsed",p),g.classList.toggle("is-mobile-open",$));const L=e.querySelector('[data-role="mobile-scrim"]');L&&L.classList.toggle("is-open",$),ue();return}e.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${re("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${rn[i]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${ut(o.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${$?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${p?"is-collapsed":""} ${$?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${Ys}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${p?"展开侧栏":"收起侧栏"}" aria-label="${p?"展开侧栏":"收起侧栏"}">
              ${re("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${re("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${J()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${i==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${u}" title="${ut(b().name)} ｜ ${ut(o.displayName)}">
              ${B(b())}
              <span class="pacom-org-name">${ut(b().name)}</span>
              ${re("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,e.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{p=!p,u=!1,localStorage.setItem(qn,p?"1":"0");const g=e.querySelector(".pacom-nav-rail"),L=e.querySelector('[data-role="toggle-sidebar"]');g&&g.classList.toggle("is-collapsed",p),L&&(L.title=p?"展开侧栏":"收起侧栏",L.setAttribute("aria-label",L.title),L.innerHTML=re("panel-left",16)),ue()}),e.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{u=!1,ue(),F=!0,ee()}),e.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{$=!$,xe(!1)}),e.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{$=!1,u=!1,xe(!1)}),e.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",g=>{g.stopPropagation(),u=!u,ue()}),ve(),ue(),ee();const P=e.querySelector('[data-role="main-stage"]');P&&await K(P)}const z=S=>{const q=S.target;u&&!q?.closest('[data-role="org-popover"]')&&!q?.closest('[data-role="org-menu-btn"]')&&(u=!1,ue())},Y=S=>{if((S.metaKey||S.ctrlKey)&&S.key.toLowerCase()==="k"){S.preventDefault(),u=!1,ue(),F=!F,ee();return}S.key==="Escape"&&(F?(F=!1,ee()):u?(u=!1,ue()):$&&($=!1,xe(!1)))},Le=()=>{i=Xa(),u=!1,$=!1,F=!1,xe(!0),Q()};function V(){document.removeEventListener("click",z),document.removeEventListener("keydown",Y),window.removeEventListener("hashchange",Le),Ea.get(e)===V&&Ea.delete(e)}Ea.set(e,V),document.addEventListener("click",z),document.addEventListener("keydown",Y),window.addEventListener("hashchange",Le),await xe(!0),Q()}const jt=["password","sms"];function en(e){const t=ps(e);return t==="cn"||t==="phone"}const xa=new WeakMap;function Bn(e){xa.get(e)?.()}function Xs(e,t,a,s){xa.get(e)?.(),e.classList.add("bare-login"),document.title="登录 ｜ PACOM Station";let o=!1,i=!1,p=(s?.prefillAccount??"").trim(),$="",u=en(p)?p:"",f="",h=!1,w=(s?.notice??"").trim(),D={},F="",k=!1,m="",d=0,b=null,B=0,O=null,Q=1,J="",X="",ce="",ee="",me=!1,K=!1,A={},W="",ue=0,ve=null,we=0,Ce=null,xe=null,z=null,Y=null,Le=!1;const V=zn();function S(v){if(v.key==="Escape"){if(V.isOpen()){v.preventDefault(),V.close(!0);return}O&&(v.preventDefault(),Qe())}}function q(v){const T=e.querySelector('[data-role="mode-seg"]'),de=T?.querySelector(".au-mode-indicator"),Se=T?.querySelector('.au-mode-tab[aria-selected="true"]');!de||!Se||(de.style.transition=v?"":"none",de.style.transform=`translateX(${Se.offsetLeft}px)`,de.style.width=`${Se.offsetWidth}px`,v||(de.offsetWidth,de.style.transition=""))}function P(){q(!1)}function g(){d=0,b!==null&&(window.clearInterval(b),b=null)}function L(){ue=0,ve!==null&&(window.clearInterval(ve),ve=null)}function ne(){xe?.(),xe=null,z?.(),z=null}function Oe(){Le=!0,Y?.(),Y=null,ne(),V.destroy(),g(),L(),document.removeEventListener("keydown",S),window.removeEventListener("resize",P),e.classList.remove("bare-login"),xa.get(e)===Oe&&xa.delete(e)}document.addEventListener("keydown",S),window.addEventListener("resize",P),xa.set(e,Oe);function Ke(v=60){g(),d=v,b=window.setInterval(()=>{d-=1,d<=0&&g();const T=e.querySelector('[data-act="send-sms"]');T&&(T.disabled=d>0,T.textContent=d>0?`${d} 秒后重发`:m?"重新获取":"获取验证码")},1e3)}function st(v=60){L(),ue=v,ve=window.setInterval(()=>{ue-=1,ue<=0&&L();const T=e.querySelector('[data-act="reset-resend"]');T&&(T.disabled=ue>0||K,T.textContent=ue>0?`${ue} 秒后重发`:"重新获取")},1e3)}function Ue(v){w=v.trim();const T=e.querySelector('[data-role="login-notice"]');if(!w){T?.remove();return}if(T){const Se=T.querySelector("span");Se&&(Se.textContent=w);return}const de=e.querySelector(".au-h1");de&&de.insertAdjacentHTML("afterend",`<div class="au-notice-soft au-login-notice" data-role="login-notice" role="status">${Ra}<span>${n(w)}</span></div>`)}function se(){const v=e.querySelector("#au-login-ferr");if(v)if(F){v.hidden=!1;const T=v.querySelector('[data-role="ferr-text"]');T&&(T.textContent=F)}else v.hidden=!0}function j(v){const T=e.querySelector(`.au-field[data-f="${v}"]`),de=e.querySelector(`#au-${v}`),Se=e.querySelector(`#au-${v}-err`),et=D[v]??"";T?.classList.toggle("bad",!!et),de?.setAttribute("aria-invalid",et?"true":"false"),Se&&(Se.textContent=et)}function M(v,T){const de=v.querySelector(`.au-field[data-f="${T}"]`),Se=v.querySelector(`#au-${T}`),et=v.querySelector(`#au-${T}-err`),Ye=A[T]??"";de?.classList.toggle("bad",!!Ye),Se?.setAttribute("aria-invalid",Ye?"true":"false"),et&&(et.textContent=Ye)}function ae(v){const T=v.querySelector("#au-rs-ferr");if(T)if(W){T.hidden=!1;const de=T.querySelector('[data-role="rs-ferr-text"]');de&&(de.textContent=W)}else T.hidden=!0}function be(){const v=e.querySelector('form[data-form="login"] fieldset'),T=e.querySelector('form[data-form="login"] button[type="submit"]');v&&(v.disabled=k),T&&(T.disabled=k,T.innerHTML=k?'<span class="au-spinner" aria-hidden="true"></span><span>正在登录…</span>':"<span>登录</span>")}function ye(v,T){V.close(!1),Ce=T??(document.activeElement instanceof HTMLElement?document.activeElement:null),O=v,je(),v==="reset"?e.querySelector(Q===1?"#au-rs_id":"#au-rs_code")?.focus():e.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function Qe(v=!0){if(!O)return;V.close(!1),O=null,we+=1,K=!1,L(),ne(),je();const T=Ce;Ce=null,v&&T&&document.contains(T)&&T.focus({preventScroll:!0})}function rt(v){const T=v?"au-account-scrim is-no-anim":"au-account-scrim";if(Q===1){const Se=J.trim().length>0&&!K;return`
        <div class="${T}" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${za}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码。</p>
              <form id="au-reset-form" novalidate>
                <fieldset ${K?"disabled":""}>
                  <div class="au-field ${A.rs_id?"bad":""}" data-f="rs_id">
                    <div class="au-lab"><label for="au-rs_id">电子邮箱或手机号码</label></div>
                    <div class="au-ctl">
                      <input id="au-rs_id" name="rs_id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(J)}" aria-invalid="${A.rs_id?"true":"false"}" />
                    </div>
                    <p class="au-err" id="au-rs_id-err" aria-live="polite">${n(A.rs_id??"")}</p>
                  </div>
                  <div class="au-ferr" id="au-rs-ferr" role="alert" ${W?"":"hidden"}>
                    ${zt}
                    <span data-role="rs-ferr-text">${n(W)}</span>
                  </div>
                </fieldset>
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary" data-role="reset-submit" ${Se?"":"disabled"}>
                ${K?'<span class="au-spinner" aria-hidden="true"></span><span>发送中…</span>':"<span>发送验证码</span>"}
              </button>
            </div>
          </section>
        </div>
      `}return`
      <div class="${T}" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">重置密码</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${za}</button>
          </div>
          <div class="db">
            <div class="au-notice-soft au-reset-step-notice" role="status" aria-live="polite">
              <span class="au-notice-main">${Ra}<span>如该账户已注册，验证码已发送至 ${n(X)}</span></span>
              <button type="button" class="au-notice-action" data-act="reset-back-step1" ${K?"disabled":""}>更换账户</button>
            </div>
            <form id="au-reset-confirm-form" novalidate>
              <fieldset ${K?"disabled":""}>
                <div class="au-field ${A.rs_code?"bad":""}" data-f="rs_code">
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
                    <input id="au-rs_code" name="rs_code" class="au-in has-code-btn" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(ce)}" aria-invalid="${A.rs_code?"true":"false"}" />
                    <button type="button" class="au-suffix au-getcode" data-act="reset-resend" ${ue>0||K?"disabled":""}>
                      ${ue>0?`${ue} 秒后重发`:"重新获取"}
                    </button>
                  </div>
                  <p class="au-err" id="au-rs_code-err" aria-live="polite">${n(A.rs_code??"")}</p>
                </div>

                <div class="au-field ${A.rs_pwd?"bad":""}" data-f="rs_pwd">
                  <div class="au-lab">
                    <span class="au-lab-group">
                      <label for="au-rs_pwd">设置新密码</label>
                      ${va("au-rs-pwd-info","设置新密码说明",an)}
                    </span>
                  </div>
                  <div class="au-ctl">
                    <input id="au-rs_pwd" name="rs_pwd" class="au-in has-suffix" type="${me?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(ee)}" aria-invalid="${A.rs_pwd?"true":"false"}" />
                    <button type="button" class="au-suffix au-eye" data-act="reset-toggle-eye" aria-controls="au-rs_pwd" aria-label="${me?"隐藏密码":"显示密码"}">
                      ${me?Vt:Ut}
                    </button>
                  </div>
                  <p class="au-err" id="au-rs_pwd-err" aria-live="polite">${n(A.rs_pwd??"")}</p>
                </div>

                <div class="au-ferr" id="au-rs-ferr" role="alert" ${W?"":"hidden"}>
                  ${zt}
                  <span data-role="rs-ferr-text">${n(W)}</span>
                </div>
              </fieldset>
            </form>
          </div>
          <div class="df">
            <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
            <button type="submit" form="au-reset-confirm-form" class="au-dlg-btn au-dlg-btn--primary" data-role="reset-confirm" ${K?"disabled":""}>
              ${K?'<span class="au-spinner" aria-hidden="true"></span><span>正在重置…</span>':"<span>确认重置</span>"}
            </button>
          </div>
        </section>
      </div>
    `}function Fe(v){return O?O==="reset"?rt(v):O==="contact"?Gn():"":""}function je(){const v=e.querySelector('[data-role="modal-host"]');if(!v)return;const T=v.childElementCount>0;if(ne(),V.close(!1),v.innerHTML=Fe(T),!O)return;V.bind(v),xe=Hn(v.querySelector(".au-account-dlg")),z=Wn(v),v.querySelectorAll('[data-act="close-modal"]').forEach(Je=>{Je.addEventListener("click",()=>Qe())}),v.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",Je=>{Je.target===Je.currentTarget&&Qe()});const de=v.querySelector("#au-rs_id"),Se=v.querySelector('[data-role="reset-submit"]');de?.addEventListener("input",()=>{J=de.value,Se&&(Se.disabled=J.trim().length===0||K),(A.rs_id||W)&&(delete A.rs_id,W="",M(v,"rs_id"),ae(v))}),v.querySelector("#au-reset-form")?.addEventListener("submit",async Je=>{if(Je.preventDefault(),K)return;A={},W="";const Ve=dt(de?.value??J);J=Ve;const qe=Pa(Ve);if(qe){A.rs_id=qe,M(v,"rs_id"),de?.focus({preventScroll:!0});return}const He=++we;K=!0,je();try{const mt=await t.sendVerificationCode({target:Ve,purpose:"reset"});if(Le||O!=="reset"||He!==we)return;K=!1,X=mt.maskedTarget||Nt(Ve),ce="",ee="",A={},W="",Q=2,st(mt.cooldownSeconds||60),je(),e.querySelector("#au-rs_code")?.focus({preventScroll:!0})}catch(mt){if(Le||O!=="reset"||He!==we)return;K=!1,W=mt instanceof Error?mt.message:"暂时无法发送验证码，请稍后再试。",je(),e.querySelector("#au-rs_id")?.focus({preventScroll:!0})}}),v.querySelector('[data-act="reset-back-step1"]')?.addEventListener("click",()=>{K||(we+=1,L(),Q=1,ce="",ee="",A={},W="",je(),e.querySelector("#au-rs_id")?.focus({preventScroll:!0}))});const et=v.querySelector("#au-rs_code"),Ye=v.querySelector("#au-rs_pwd");et?.addEventListener("input",()=>{ce=et.value.replace(/\D/g,"").slice(0,6),et.value=ce,(A.rs_code||W)&&(delete A.rs_code,W="",M(v,"rs_code"),ae(v))}),Ye?.addEventListener("input",()=>{ee=Ye.value,(A.rs_pwd||W)&&(delete A.rs_pwd,W="",M(v,"rs_pwd"),ae(v))}),v.querySelector('[data-act="reset-toggle-eye"]')?.addEventListener("click",Je=>{me=!me;const Ve=Je.currentTarget;if(Ye){const qe=Ye.selectionStart,He=Ye.selectionEnd;Ye.type=me?"text":"password",Ye.focus({preventScroll:!0}),qe!==null&&He!==null&&Ye.setSelectionRange(qe,He)}Ve.setAttribute("aria-label",me?"隐藏密码":"显示密码"),Ve.innerHTML=me?Vt:Ut}),v.querySelector('[data-act="reset-resend"]')?.addEventListener("click",async()=>{if(ue>0||K)return;const Je=dt(J),Ve=++we,qe=v.querySelector('[data-act="reset-resend"]');qe&&(qe.disabled=!0,qe.textContent="发送中…"),W="",ae(v);try{const He=await t.sendVerificationCode({target:Je,purpose:"reset"});if(Le||O!=="reset"||Q!==2||Ve!==we)return;X=He.maskedTarget||Nt(Je),st(He.cooldownSeconds||60),qe&&(qe.disabled=!0,qe.textContent=`${ue} 秒后重发`),et?.focus({preventScroll:!0})}catch(He){if(Le||O!=="reset"||Q!==2||Ve!==we)return;qe&&(qe.disabled=!1,qe.textContent="重新获取"),W=He instanceof Error?He.message:"暂时无法发送验证码，请稍后再试。",ae(v)}}),v.querySelector("#au-reset-confirm-form")?.addEventListener("submit",async Je=>{if(Je.preventDefault(),K)return;A={},W="",/^\d{6}$/.test(ce.trim())||(A.rs_code="请输入 6 位验证码");const Ve=tn(ee);if(Ve&&(A.rs_pwd=Ve),M(v,"rs_code"),M(v,"rs_pwd"),ae(v),Object.keys(A).length>0){const He=Object.keys(A)[0];v.querySelector(`#au-${He}`)?.focus({preventScroll:!0});return}const qe=dt(J);K=!0,je();try{if(await t.confirmPasswordReset({account:qe,verificationCode:ce.trim(),newPassword:ee}),Le)return;Qe(!1),p=qe,$="",en(qe)&&(u=qe),F="",D={},o?Be("password",!1):(Te(),se()),Ue("密码已重置，请使用新密码登录"),e.querySelector("#au-pwd")?.focus({preventScroll:!0})}catch(He){if(Le||O!=="reset")return;K=!1,W=He instanceof Error?He.message:"验证码不正确或已过期，请检查后重试。",je(),e.querySelector("#au-rs_code")?.focus({preventScroll:!0})}})}function Te(){V.close(!1);const v=`
      <span data-role="login-novcode-wrap" ${m?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-login-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-login-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-login-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `,T=o?`
        <div class="au-field ${D.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(u)}" aria-invalid="${D.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${d>0?"disabled":""}>
              ${d>0?`${d} 秒后重发`:m?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${n(D.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${m?`验证码已发送至 ${n(m)}`:""}</p>
        </div>
      `:`
        <div class="au-field ${D.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(p)}" aria-invalid="${D.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${n(D.id??"")}</p>
        </div>
      `,de=o?`
        <div class="au-field ${D.scode?"bad":""}" data-f="scode">
          <div class="au-lab">
            <label for="au-scode">短信验证码</label>
            ${v}
          </div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(f)}" aria-invalid="${D.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${n(D.scode??"")}</p>
        </div>
      `:`
        <div class="au-field ${D.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab">
            <label for="au-pwd">密码</label>
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${i?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n($)}" aria-invalid="${D.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${i?"隐藏密码":"显示密码"}">
              ${i?Vt:Ut}
            </button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${n(D.pwd??"")}</p>
        </div>
      `,Se=e.querySelector('[data-role="fields-host"]');Se&&(Se.innerHTML=`${T}${de}`,ot(Se))}function Be(v,T=!1){const de=v==="sms";o===de||k||(de&&!u.trim()&&en(p)?u=p.trim():!de&&!p.trim()&&u.trim()&&(p=u.trim()),o=de,D={},F="",e.querySelectorAll('[data-act="switch-mode"]').forEach(Se=>{const et=Se.dataset.mode===v;Se.setAttribute("aria-selected",String(et)),Se.tabIndex=et?0:-1,et&&T&&Se.focus({preventScroll:!0})}),q(!0),Te(),se(),T||(o?m?e.querySelector("#au-scode")?.focus({preventScroll:!0}):u.trim()?e.querySelector('[data-act="send-sms"]')?.focus({preventScroll:!0}):e.querySelector("#au-sphone")?.focus({preventScroll:!0}):e.querySelector(p.trim()?"#au-pwd":"#au-id")?.focus({preventScroll:!0})))}function ot(v){V.bind(v);const T=v.querySelector("#au-id"),de=v.querySelector("#au-pwd"),Se=v.querySelector("#au-sphone"),et=v.querySelector("#au-scode");T?.addEventListener("input",()=>{p=T.value,(D.id||F)&&(delete D.id,F="",j("id"),se())}),de?.addEventListener("input",()=>{$=de.value,(D.pwd||F)&&(delete D.pwd,F="",j("pwd"),se())}),Se?.addEventListener("input",()=>{if(u=Se.value,B+=1,m||d>0){m="",g();const Ye=v.querySelector("#au-sphone-hint");Ye&&(Ye.textContent="");const Je=v.querySelector('[data-role="login-novcode-wrap"]');Je&&(Je.hidden=!0),V.close(!1);const Ve=v.querySelector('[data-act="send-sms"]');Ve&&(Ve.disabled=!1,Ve.textContent="获取验证码")}(D.sphone||F)&&(delete D.sphone,F="",j("sphone"),se())}),et?.addEventListener("input",()=>{f=et.value.replace(/\D/g,"").slice(0,6),et.value=f,(D.scode||F)&&(delete D.scode,F="",j("scode"),se())}),v.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",Ye=>{i=!i;const Je=Ye.currentTarget,Ve=v.querySelector("#au-pwd");if(Ve){const qe=Ve.selectionStart,He=Ve.selectionEnd;Ve.type=i?"text":"password",Ve.focus({preventScroll:!0}),qe!==null&&He!==null&&Ve.setSelectionRange(qe,He)}Je.setAttribute("aria-label",i?"隐藏密码":"显示密码"),Je.innerHTML=i?Vt:Ut}),v.querySelector('[data-act="send-sms"]')?.addEventListener("click",async()=>{const Ye=Pt(u);if(Ye){D={...D,sphone:Ye},j("sphone"),v.querySelector("#au-sphone")?.focus({preventScroll:!0});return}delete D.sphone,j("sphone");const Je=dt(u),Ve=++B,qe=v.querySelector('[data-act="send-sms"]');qe&&(qe.disabled=!0,qe.textContent="发送中…");try{const He=await t.sendVerificationCode({target:Je,purpose:"login"});if(Le||Ve!==B||dt(u)!==Je)return;m=He.maskedTarget||Nt(Je);const mt=v.querySelector("#au-sphone-hint");mt&&(mt.textContent=`验证码已发送至 ${m}`);const wt=v.querySelector('[data-role="login-novcode-wrap"]');wt&&(wt.hidden=!1),Ke(He.cooldownSeconds||60),qe&&(qe.disabled=!0,qe.textContent=`${d} 秒后重发`),v.querySelector("#au-scode")?.focus({preventScroll:!0})}catch(He){if(Le||Ve!==B||dt(u)!==Je)return;qe&&(qe.disabled=!1,qe.textContent=m?"重新获取":"获取验证码"),F=He instanceof Error?He.message:"暂时无法发送验证码，请稍后再试。",se()}}),v.querySelector('[data-act="open-reset"]')?.addEventListener("click",Ye=>{Q=1,J=(o?u:p).trim(),X="",ce="",ee="",me=!1,K=!1,A={},W="",L(),ye("reset",Ye.currentTarget)})}e.innerHTML=`
    <div class="au au-split">
      <section class="au-left">
        <div class="au-center">
          <main class="au-group">
            <div class="au-logo">${Nn}</div>
            <h1 class="au-h1">登录</h1>
            ${w?`<div class="au-notice-soft au-login-notice" data-role="login-notice" role="status">${Ra}<span>${n(w)}</span></div>`:""}
            <div class="au-mode-seg" role="tablist" aria-label="登录方式" data-role="mode-seg">
              <span class="au-mode-indicator" aria-hidden="true"></span>
              <button type="button" role="tab" aria-selected="true" tabindex="0" class="au-mode-tab" data-act="switch-mode" data-mode="password">密码登录</button>
              <button type="button" role="tab" aria-selected="false" tabindex="-1" class="au-mode-tab" data-act="switch-mode" data-mode="sms">短信登录</button>
            </div>
            <form data-form="login" novalidate>
              <fieldset>
                <div data-role="fields-host"></div>
                <div class="au-ferr" id="au-login-ferr" role="alert" hidden>
                  ${zt}
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
        ${Un()}
      </section>
      <aside class="au-art" aria-hidden="true">
        <div class="au-art-frame">
          <img src="./media/auth-hero.jpg" alt="" />
        </div>
      </aside>
    </div>
    <div data-role="modal-host"></div>
  `,e.querySelector('input[name="keep"]')?.addEventListener("change",v=>{h=v.currentTarget.checked}),e.querySelector('form[data-form="login"]')?.addEventListener("submit",async v=>{if(v.preventDefault(),!k){if(D={},F="",o){const T=Pt(u);T&&(D.sphone=T),/^\d{6}$/.test(f.trim())||(D.scode="请输入 6 位验证码"),j("sphone"),j("scode")}else p.trim()||(D.id="请输入电子邮箱或手机号码"),$||(D.pwd="请输入密码"),j("id"),j("pwd");if(se(),Object.keys(D).length>0){const T=Object.keys(D)[0];e.querySelector(`#au-${T}`)?.focus({preventScroll:!0});return}k=!0,be();try{const T=await t.login({method:o?"sms":"password",account:dt(o?u:p),...o?{smsCode:f.trim()}:{password:$},rememberMe:h});if(Le)return;Oe(),a(T)}catch(T){if(Le)return;k=!1,F=T instanceof Error?T.message:o?"验证码不正确或已过期":"账户或密码不正确",be(),se()}}}),e.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{s?.onOpenRegister?(Oe(),s.onOpenRegister()):window.location.hash="#register"}),e.querySelectorAll('[data-act="switch-mode"]').forEach(v=>{v.addEventListener("click",()=>{const T=v.dataset.mode;T&&Be(T,!1)}),v.addEventListener("keydown",T=>{const de=o?"sms":"password",Se=jt.indexOf(de);T.key==="ArrowRight"?(T.preventDefault(),Be(jt[(Se+1)%jt.length],!0)):T.key==="ArrowLeft"?(T.preventDefault(),Be(jt[(Se-1+jt.length)%jt.length],!0)):T.key==="Home"?(T.preventDefault(),Be(jt[0],!0)):T.key==="End"&&(T.preventDefault(),Be(jt[jt.length-1],!0))})}),e.querySelector('[data-act="open-contact"]')?.addEventListener("click",v=>{ye("contact",v.currentTarget)}),Te(),q(!1),Y=Vn(e),p.trim()&&e.querySelector("#au-pwd")?.focus({preventScroll:!0}),document.fonts?.ready.then(()=>{Le||q(!1)})}const Mt=["join","apply"],aa=1e3,ma=50,Oa=60,Rn=110,Ia=new WeakMap;function Pn(e){Ia.get(e)?.()}function eo(e,t,a){Ia.get(e)?.(),e.classList.add("bare-login");let s=!1,o=a.initialMode??"join",i=null,p=null,$=null,u=null,f=null,h=a.initialJoinReceipt??null,w=a.initialApplyReceipt??null,D="",F=!1,k=null;const m=(a.inviteToken??"").trim(),d=!!(a.isInviteRoute||m),b=a.currentSession??null;let B=!!(d&&m),O=null,Q="",J="",X="",ce="",ee="",me=0,K=null,A=0,W="",ue=!1,ve=!1,we=vn(a.prefillCode??""),Ce="",xe=!1,z=0,Y="",Le="",V="",S="",q="",P=!1,g=!1,L="",ne=0,Oe=null,Ke=0,st="",Ue="",se="",j="",M="",ae="",be="",ye="",Qe="",rt=!1,Fe="",je=0,Te=null,Be=0,ot=null,v={},T="",de=!1;const Se=zn();function et(I){if(I.key==="Escape"){if(Se.isOpen()){I.preventDefault(),Se.close(!0);return}i&&(I.preventDefault(),Gt())}}function Ye(I){const N=e.querySelector('[data-role="reg-seg"]'),te=N?.querySelector(".au-mode-indicator"),G=N?.querySelector('.au-mode-tab[aria-selected="true"]');!te||!G||(te.style.transition=I?"":"none",te.style.transform=`translateX(${G.offsetLeft}px)`,te.style.width=`${G.offsetWidth}px`,I||(te.offsetWidth,te.style.transition=""))}function Je(){Ye(!1)}function Ve(){ne=0,Oe!==null&&(window.clearInterval(Oe),Oe=null)}function qe(){je=0,Te!==null&&(window.clearInterval(Te),Te=null)}function He(){me=0,K!==null&&(window.clearInterval(K),K=null)}function mt(){u?.(),u=null,f?.(),f=null}function wt(){s=!0,k?.(),k=null,mt(),Se.destroy(),Ve(),qe(),He(),ot!==null&&(window.clearTimeout(ot),ot=null),document.removeEventListener("keydown",et),window.removeEventListener("resize",Je),e.classList.remove("bare-login"),Ia.get(e)===wt&&Ia.delete(e)}document.addEventListener("keydown",et),window.addEventListener("resize",Je),Ia.set(e,wt);function ha(I){Ve(),ne=I,Oe=window.setInterval(()=>{ne-=1,ne<=0&&Ve();const N=e.querySelector('[data-act="jn-send-code"]');N&&(N.disabled=ne>0,N.textContent=ne>0?`${ne} 秒后重发`:L?"重新获取":"获取验证码")},1e3)}function Aa(I){qe(),je=I,Te=window.setInterval(()=>{je-=1,je<=0&&qe();const N=e.querySelector('[data-act="ap-send-code"]');N&&(N.disabled=je>0,N.textContent=je>0?`${je} 秒后重发`:Fe?"重新获取":"获取验证码")},1e3)}function ze(){const I=e.querySelector("#au-reg-ferr");if(I)if(T){I.hidden=!1;const N=I.querySelector('[data-role="ferr-text"]');N&&(N.textContent=T)}else I.hidden=!0}function Me(I){const N=e.querySelector(`.au-field[data-f="${I}"]`),te=e.querySelector(`#au-${I}`),G=e.querySelector(`#au-${I}-err`),fe=v[I]??"";N?.classList.toggle("bad",!!fe),te?.setAttribute("aria-invalid",fe?"true":"false"),G&&(G.textContent=fe)}function pt(I,N){const te=e.querySelector("form[data-reg-form] fieldset"),G=e.querySelector('form[data-reg-form] button[type="submit"]');te&&(te.disabled=de),G&&(G.disabled=de,G.innerHTML=de?`<span class="au-spinner" aria-hidden="true"></span><span>${n(I)}</span>`:`<span>${n(N)}</span>`)}function Ot(I,N){Se.close(!1),p=N??(document.activeElement instanceof HTMLElement?document.activeElement:null),i=I,bt(),e.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function Gt(){if(!i)return;i=null,$=null,mt(),bt();const I=p;p=null,I&&document.contains(I)&&I.focus({preventScroll:!0})}function gt(){return`
      <div class="au-account-scrim" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="alertdialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">请阅读并同意</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${za}</button>
          </div>
          <div class="db">
            <p class="au-dlead" style="margin-bottom:0;">
              发送验证码前，请先阅读并同意 PACOM
              <a class="au-consent-link" href="${Fa}" target="_blank" rel="noopener noreferrer">隐私政策</a>和<a class="au-consent-link" href="${Fa}" target="_blank" rel="noopener noreferrer">使用条款</a>。
            </p>
          </div>
          <div class="df">
            <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
            <button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="consent-confirm">同意并发送</button>
          </div>
        </section>
      </div>
    `}function Ze(){return`
      <div class="au-account-scrim" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="alertdialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">撤回加入申请</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${za}</button>
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
    `}function bt(){const I=e.querySelector('[data-role="modal-host"]');if(I){if(mt(),!i){I.innerHTML="";return}I.innerHTML=i==="contact"?Gn():i==="withdraw_confirm"?Ze():gt(),u=Hn(I.querySelector(".au-account-dlg")),f=Wn(I),I.querySelectorAll('[data-act="close-modal"]').forEach(N=>{N.addEventListener("click",()=>Gt())}),I.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",N=>{N.target===N.currentTarget&&Gt()}),I.querySelector('[data-act="consent-confirm"]')?.addEventListener("click",()=>{const N=$;$=null,i=null,mt(),bt(),N?.()}),I.querySelector('[data-act="withdraw-confirm"]')?.addEventListener("click",async()=>{if(!(!h||!t.withdrawJoinApplication||F)){i=null,mt(),bt(),F=!0,T="",yt();try{if(await t.withdrawJoinApplication(h.requestId,h.withdrawToken),s)return;F=!1,h=null,S="",L="",Ke+=1,Ve(),D="申请已撤回，修改信息并重新验证后即可再次提交。",yt()}catch(N){if(s)return;F=!1,T=N instanceof Error?N.message:"暂时无法撤回申请，请稍后再试。",yt()}}})}}function Tt(I,N,te,G){return`
      <div class="au-field au-consent-field ${v[G]?"bad":""}" data-f="${G}">
        <div class="au-check au-consent-row">
          <input id="${I}" type="checkbox" name="${N}" ${te?"checked":""} aria-invalid="${v[G]?"true":"false"}" />
          <span class="au-consent-text">
            <label class="au-consent-label" for="${I}">我已阅读并同意 PACOM </label><a class="au-consent-link" href="${Fa}" target="_blank" rel="noopener noreferrer">隐私政策</a><label class="au-consent-label" for="${I}">和</label><a class="au-consent-link" href="${Fa}" target="_blank" rel="noopener noreferrer">使用条款</a>
          </span>
        </div>
        <p class="au-err" id="au-${G}-err" aria-live="polite">${n(v[G]??"")}</p>
      </div>
    `}async function Zt(I){const N=I.replace(/\D/g,"");if(N.length!==9){Ce="",xe=!1,Dt();return}const te=++z;xe=!0,Ce="",Dt();try{const G=await t.resolveInviteCode(N);if(s||te!==z)return;xe=!1,G.valid&&G.organizationName?(Ce=G.organizationName,delete v.jn_code):(Ce="",v.jn_code=G.message??"邀请码不正确或已失效，请向机构管理员确认。"),Me("jn_code"),Dt()}catch(G){if(s||te!==z)return;xe=!1,Ce="",v.jn_code=G instanceof Error?G.message:"暂时无法核验邀请码，请稍后再试。",Me("jn_code"),Dt()}}function Dt(){const I=e.querySelector('[data-role="jn-code-match"]'),N=e.querySelector('[data-role="jn-nocode-wrap"]');I&&(Ce?(I.hidden=!1,I.innerHTML=`${bn}<span>目标机构：${n(Ce)}</span>`):(I.hidden=!0,I.innerHTML="")),N&&(N.hidden=!!Ce)}function sa(){const I=`
      <span data-role="jn-nocode-wrap" ${Ce?"hidden":""}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-nocode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-nocode-pop"><span>没有邀请码？</span></button>
        <span id="au-jn-nocode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="没有邀请码说明" hidden>
          <span class="ws-info-text">请向所在机构的管理员获取 9 位邀请码；如需为新企业开通，请切换上方「申请开通机构」。</span>
        </span>
      </span>
    `,N=`
      <span data-role="jn-novcode-wrap" ${L?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-jn-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认邮箱或手机号码无误，检查垃圾邮件或短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">填写机构 9 位邀请码，管理员批准后即可访问。</p>
      ${D?`<div class="au-notice-soft au-form-notice" data-role="jn-form-notice" role="status">${Ra}<span>${n(D)}</span></div>`:""}
      <form class="au-reg-form" data-reg-form="join" novalidate>
        <fieldset ${de?"disabled":""}>
          <div class="au-field ${v.jn_code?"bad":""}" data-f="jn_code">
            <div class="au-lab">
              <label for="au-jn_code">机构邀请码</label>
              ${I}
            </div>
            <div class="au-ctl">
              <input id="au-jn_code" name="jn_code" class="au-in" type="text" inputmode="numeric" autocomplete="off" maxlength="11" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(we)}" aria-invalid="${v.jn_code?"true":"false"}" />
            </div>
            <div class="au-code-match" data-role="jn-code-match" role="status" aria-live="polite" ${Ce?"":"hidden"}>
              ${Ce?`${bn}<span>目标机构：${n(Ce)}</span>`:""}
            </div>
            <p class="au-err" id="au-jn_code-err" aria-live="polite">${n(v.jn_code??"")}</p>
          </div>

          <div class="au-field ${v.jn_name?"bad":""}" data-f="jn_name">
            <div class="au-lab"><label for="au-jn_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-jn_name" name="jn_name" class="au-in" type="text" autocomplete="name" value="${n(Y)}" aria-invalid="${v.jn_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_name-err" aria-live="polite">${n(v.jn_name??"")}</p>
          </div>

          <div class="au-field ${v.jn_dept?"bad":""}" data-f="jn_dept">
            <div class="au-lab"><label for="au-jn_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-jn_dept" name="jn_dept" class="au-in" type="text" autocomplete="organization-title" value="${n(Le)}" aria-invalid="${v.jn_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_dept-err" aria-live="polite">${n(v.jn_dept??"")}</p>
          </div>

          <div class="au-field ${v.jn_account?"bad":""}" data-f="jn_account">
            <div class="au-lab"><label for="au-jn_account">电子邮箱或手机号码</label></div>
            <div class="au-ctl">
              <input id="au-jn_account" name="jn_account" class="au-in has-code-btn" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(V)}" aria-invalid="${v.jn_account?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="jn-send-code" ${ne>0?"disabled":""}>
                ${ne>0?`${ne} 秒后重发`:L?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-jn_account-err" aria-live="polite">${n(v.jn_account??"")}</p>
            <p class="au-hint" id="au-jn_account-hint" role="status" aria-live="polite">${L?`验证码已发送至 ${n(L)}`:""}</p>
          </div>

          <div class="au-field ${v.jn_vcode?"bad":""}" data-f="jn_vcode">
            <div class="au-lab">
              <label for="au-jn_vcode">验证码</label>
              ${N}
            </div>
            <div class="au-ctl">
              <input id="au-jn_vcode" name="jn_vcode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(S)}" aria-invalid="${v.jn_vcode?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_vcode-err" aria-live="polite">${n(v.jn_vcode??"")}</p>
          </div>

          <div class="au-field ${v.jn_pwd?"bad":""}" data-f="jn_pwd">
            <div class="au-lab">
              <span class="au-lab-group">
                <label for="au-jn_pwd">设置密码</label>
                ${va("au-jn-pwd-info","设置密码说明",an)}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-jn_pwd" name="jn_pwd" class="au-in has-suffix" type="${P?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(q)}" aria-invalid="${v.jn_pwd?"true":"false"}" />
              <button type="button" class="au-suffix au-eye" data-act="jn-toggle-eye" aria-controls="au-jn_pwd" aria-label="${P?"隐藏密码":"显示密码"}">
                ${P?Vt:Ut}
              </button>
            </div>
            <p class="au-err" id="au-jn_pwd-err" aria-live="polite">${n(v.jn_pwd??"")}</p>
          </div>

          ${Tt("au-jn_consent","jn_consent",g,"jn_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${T?"":"hidden"}>
            ${zt}
            <span data-role="ferr-text">${n(T)}</span>
          </div>

          <button type="submit" class="au-primary" ${de?"disabled":""}>
            ${de?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>注册并申请加入</span>"}
          </button>
        </fieldset>
      </form>
    `}function oa(){const I=hn(Ue),N=Ft(Qe),te=N>=aa*.8?`${N} / ${aa}`:"",G=`
      <span data-role="ap-novcode-wrap" ${Fe?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-ap-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-ap-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-ap-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">提交企业信息，经 PACOM 审核通过后开通机构。</p>
      <form class="au-reg-form" data-reg-form="apply" novalidate>
        <fieldset ${de?"disabled":""}>
          <div class="au-field ${v.ap_org?"bad":""}" data-f="ap_org">
            <div class="au-lab">
              <span class="au-lab-group">
                <label for="au-ap_org">机构名称</label>
                ${va("au-ap-org-info","机构名称说明",["请填写营业执照等登记证书上的完整名称。"])}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-ap_org" name="ap_org" class="au-in" type="text" autocomplete="organization" value="${n(st)}" aria-invalid="${v.ap_org?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_org-err" aria-live="polite">${n(v.ap_org??"")}</p>
          </div>

          <div class="au-field ${v.ap_region?"bad":""}" data-f="ap_region">
            <div class="au-lab"><label for="au-ap_prov">所在地区</label></div>
            <div class="au-row-eq">
              <div class="au-select-wrap">
                <select id="au-ap_prov" name="ap_prov" class="au-select ${Ue?"":"is-placeholder"}" aria-label="省份" aria-invalid="${v.ap_region?"true":"false"}">
                  <option value="" ${Ue?"":"selected"}>省份</option>
                  ${ms.map(([fe])=>`<option value="${n(fe)}" ${Ue===fe?"selected":""}>${n(fe)}</option>`).join("")}
                </select>
                ${yn}
              </div>
              <div class="au-select-wrap">
                <select id="au-ap_city" name="ap_city" class="au-select ${se?"":"is-placeholder"}" aria-label="城市" ${Ue?"":"disabled"} aria-invalid="${v.ap_region?"true":"false"}">
                  <option value="" ${se?"":"selected"}>城市</option>
                  ${I.map(fe=>`<option value="${n(fe)}" ${se===fe?"selected":""}>${n(fe)}</option>`).join("")}
                </select>
                ${yn}
              </div>
            </div>
            <p class="au-err" id="au-ap_region-err" aria-live="polite">${n(v.ap_region??"")}</p>
          </div>

          <div class="au-field ${v.ap_name?"bad":""}" data-f="ap_name">
            <div class="au-lab"><label for="au-ap_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-ap_name" name="ap_name" class="au-in" type="text" autocomplete="name" value="${n(j)}" aria-invalid="${v.ap_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_name-err" aria-live="polite">${n(v.ap_name??"")}</p>
          </div>

          <div class="au-field ${v.ap_dept?"bad":""}" data-f="ap_dept">
            <div class="au-lab"><label for="au-ap_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-ap_dept" name="ap_dept" class="au-in" type="text" autocomplete="organization-title" value="${n(M)}" aria-invalid="${v.ap_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_dept-err" aria-live="polite">${n(v.ap_dept??"")}</p>
          </div>

          <div class="au-field ${v.ap_email?"bad":""}" data-f="ap_email">
            <div class="au-lab">
              <span class="au-lab-group">
                <label for="au-ap_email">电子邮箱</label>
                ${va("au-ap-email-info","电子邮箱说明",["审核结果与机构开通链接将发送至此邮箱，请填写常用工作邮箱。"])}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-ap_email" name="ap_email" class="au-in" type="email" inputmode="email" autocomplete="email" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(ae)}" aria-invalid="${v.ap_email?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_email-err" aria-live="polite">${n(v.ap_email??"")}</p>
          </div>

          <div class="au-field ${v.ap_phone?"bad":""}" data-f="ap_phone">
            <div class="au-lab"><label for="au-ap_phone">手机号码</label></div>
            <div class="au-ctl">
              <input id="au-ap_phone" name="ap_phone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(be)}" aria-invalid="${v.ap_phone?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="ap-send-code" ${je>0?"disabled":""}>
                ${je>0?`${je} 秒后重发`:Fe?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-ap_phone-err" aria-live="polite">${n(v.ap_phone??"")}</p>
            <p class="au-hint" id="au-ap_phone-hint" role="status" aria-live="polite">${Fe?`验证码已发送至 ${n(Fe)}`:""}</p>
          </div>

          <div class="au-field ${v.ap_sms?"bad":""}" data-f="ap_sms">
            <div class="au-lab">
              <label for="au-ap_sms">短信验证码</label>
              ${G}
            </div>
            <div class="au-ctl">
              <input id="au-ap_sms" name="ap_sms" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(ye)}" aria-invalid="${v.ap_sms?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_sms-err" aria-live="polite">${n(v.ap_sms??"")}</p>
          </div>

          <div class="au-field ${v.ap_overview?"bad":""}" data-f="ap_overview">
            <div class="au-lab"><label for="au-ap_overview">项目概况<span class="fld-opt">选填</span></label></div>
            <div class="ws-textarea-shell au-note-shell">
              <textarea id="au-ap_overview" name="ap_overview" class="au-in au-ta au-ta-std" rows="3" aria-invalid="${v.ap_overview?"true":"false"}">${n(Qe)}</textarea>
              <button type="button" class="ws-resize" data-space-resize="au-ap_overview" aria-label="调整项目概况输入框高度；按上下方向键调整"></button>
            </div>
            <p class="au-err" id="au-ap_overview-err" aria-live="polite">${n(v.ap_overview??"")}</p>
            <p class="au-hint au-char-count" id="au-ap_overview-count" ${te?"":"hidden"}>${n(te)}</p>
          </div>

          ${Tt("au-ap_consent","ap_consent",rt,"ap_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${T?"":"hidden"}>
            ${zt}
            <span data-role="ferr-text">${n(T)}</span>
          </div>

          <button type="submit" class="au-primary" ${de?"disabled":""}>
            ${de?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>提交开通申请</span>"}
          </button>
        </fieldset>
      </form>
    `}async function ia(){const I=Pa(V);if(I){v.jn_account=I,Me("jn_account"),e.querySelector("#au-jn_account")?.focus({preventScroll:!0});return}delete v.jn_account,Me("jn_account");const N=dt(V),te=++Ke,G=e.querySelector('[data-act="jn-send-code"]');G&&(G.disabled=!0,G.textContent="发送中…");try{const fe=await t.sendVerificationCode({target:N,purpose:"register_join",consentAcceptedAt:new Date().toISOString()});if(s||te!==Ke||dt(V)!==N)return;L=fe.maskedTarget||Nt(N);const ie=e.querySelector("#au-jn_account-hint");ie&&(ie.textContent=`验证码已发送至 ${L}`);const ke=e.querySelector('[data-role="jn-novcode-wrap"]');ke&&(ke.hidden=!1),ha(fe.cooldownSeconds||60),G&&(G.disabled=!0,G.textContent=`${ne} 秒后重发`),e.querySelector("#au-jn_vcode")?.focus({preventScroll:!0})}catch(fe){if(s||te!==Ke||dt(V)!==N)return;G&&(G.disabled=!1,G.textContent=L?"重新获取":"获取验证码"),T=fe instanceof Error?fe.message:"暂时无法发送验证码，请稍后再试。",ze()}}async function Kt(){const I=Pt(be);if(I){v.ap_phone=I,Me("ap_phone"),e.querySelector("#au-ap_phone")?.focus({preventScroll:!0});return}delete v.ap_phone,Me("ap_phone");const N=dt(be),te=++Be,G=e.querySelector('[data-act="ap-send-code"]');G&&(G.disabled=!0,G.textContent="发送中…");try{const fe=await t.sendVerificationCode({target:N,purpose:"org_apply",consentAcceptedAt:new Date().toISOString()});if(s||te!==Be||dt(be)!==N)return;Fe=fe.maskedTarget||Nt(N);const ie=e.querySelector("#au-ap_phone-hint");ie&&(ie.textContent=`验证码已发送至 ${Fe}`);const ke=e.querySelector('[data-role="ap-novcode-wrap"]');ke&&(ke.hidden=!1),Aa(fe.cooldownSeconds||60),G&&(G.disabled=!0,G.textContent=`${je} 秒后重发`),e.querySelector("#au-ap_sms")?.focus({preventScroll:!0})}catch(fe){if(s||te!==Be||dt(be)!==N)return;G&&(G.disabled=!1,G.textContent=Fe?"重新获取":"获取验证码"),T=fe instanceof Error?fe.message:"暂时无法发送验证码，请稍后再试。",ze()}}function la(I){Se.bind(I);const N=I.querySelector("#au-jn_code"),te=I.querySelector("#au-jn_name"),G=I.querySelector("#au-jn_dept"),fe=I.querySelector("#au-jn_account"),ie=I.querySelector("#au-jn_vcode"),ke=I.querySelector("#au-jn_pwd"),tt=I.querySelector("#au-jn_consent");N?.addEventListener("input",()=>{we=vn(N.value),N.value=we,(v.jn_code||T)&&(delete v.jn_code,T="",Me("jn_code"),ze()),Zt(we)}),te?.addEventListener("input",()=>{Y=te.value,(v.jn_name||T)&&(delete v.jn_name,T="",Me("jn_name"),ze())}),G?.addEventListener("input",()=>{Le=G.value,v.jn_dept&&(delete v.jn_dept,Me("jn_dept"))}),fe?.addEventListener("input",()=>{if(V=fe.value,Ke+=1,L||ne>0){L="",Ve();const Ae=I.querySelector("#au-jn_account-hint");Ae&&(Ae.textContent="");const pe=I.querySelector('[data-role="jn-novcode-wrap"]');pe&&(pe.hidden=!0),Se.close(!1);const $e=I.querySelector('[data-act="jn-send-code"]');$e&&($e.disabled=!1,$e.textContent="获取验证码")}(v.jn_account||T)&&(delete v.jn_account,T="",Me("jn_account"),ze())}),ie?.addEventListener("input",()=>{S=ie.value.replace(/\D/g,"").slice(0,6),ie.value=S,(v.jn_vcode||T)&&(delete v.jn_vcode,T="",Me("jn_vcode"),ze())}),ke?.addEventListener("input",()=>{q=ke.value,(v.jn_pwd||T)&&(delete v.jn_pwd,T="",Me("jn_pwd"),ze())}),tt?.addEventListener("change",()=>{g=tt.checked,g&&v.jn_consent&&(delete v.jn_consent,Me("jn_consent"))}),I.querySelector('[data-act="jn-toggle-eye"]')?.addEventListener("click",Ae=>{P=!P;const pe=Ae.currentTarget;if(ke){const $e=ke.selectionStart,Ie=ke.selectionEnd;ke.type=P?"text":"password",ke.focus({preventScroll:!0}),$e!==null&&Ie!==null&&ke.setSelectionRange($e,Ie)}pe.setAttribute("aria-label",P?"隐藏密码":"显示密码"),pe.innerHTML=P?Vt:Ut}),I.querySelector('[data-act="jn-send-code"]')?.addEventListener("click",Ae=>{const pe=Pa(V);if(pe){v.jn_account=pe,Me("jn_account"),fe?.focus({preventScroll:!0});return}if(!g){$=()=>{g=!0,tt&&(tt.checked=!0),delete v.jn_consent,Me("jn_consent"),ia()},Ot("consent_ask",Ae.currentTarget);return}ia()}),I.querySelector('form[data-reg-form="join"]')?.addEventListener("submit",async Ae=>{if(Ae.preventDefault(),de)return;v={},T="",D&&(D="",I.querySelector('[data-role="jn-form-notice"]')?.remove());const pe=we.replace(/\D/g,"");if(pe.length!==9)v.jn_code="请输入 9 位机构邀请码";else if(!Ce){const ge=++z;xe=!0;try{const We=await t.resolveInviteCode(pe);if(s||ge!==z)return;xe=!1,We.valid&&We.organizationName?(Ce=We.organizationName,Dt()):v.jn_code=We.message??"邀请码不正确或已失效，请向机构管理员确认。"}catch(We){if(s||ge!==z)return;xe=!1,v.jn_code=We instanceof Error?We.message:"暂时无法核验邀请码，请稍后再试。"}}Y.trim()?Ft(Y.trim())>ma&&(v.jn_name=`姓名不超过 ${ma} 个字`):v.jn_name="请输入姓名",Ft(Le.trim())>Oa&&(v.jn_dept=`部门 / 职务不超过 ${Oa} 个字`);const $e=Pa(V);$e&&(v.jn_account=$e),/^\d{6}$/.test(S.trim())||(v.jn_vcode="请输入 6 位验证码");const Ie=tn(q);Ie&&(v.jn_pwd=Ie),g||(v.jn_consent="请阅读并同意隐私政策和使用条款");for(const ge of["jn_code","jn_name","jn_dept","jn_account","jn_vcode","jn_pwd","jn_consent"])Me(ge);if(ze(),Object.keys(v).length>0){const ge=Object.keys(v)[0];I.querySelector(`#au-${ge}`)?.focus({preventScroll:!0});return}de=!0,pt("正在提交…","注册并申请加入");try{if(h=await t.registerAndJoin({inviteCode:pe,displayName:Y.trim(),departmentTitle:Le.trim()||void 0,account:dt(V),verificationCode:S.trim(),password:q,consentAcceptedAt:new Date().toISOString()}),s)return;de=!1,yt()}catch(ge){if(s)return;de=!1,T=ge instanceof Error?ge.message:"暂时无法提交申请，请稍后再试。",pt("正在提交…","注册并申请加入"),ze()}})}function ra(I){Se.bind(I),vs(I);const N=I.querySelector("#au-ap_org"),te=I.querySelector("#au-ap_prov"),G=I.querySelector("#au-ap_city"),fe=I.querySelector("#au-ap_name"),ie=I.querySelector("#au-ap_dept"),ke=I.querySelector("#au-ap_email"),tt=I.querySelector("#au-ap_phone"),Ae=I.querySelector("#au-ap_sms"),pe=I.querySelector("#au-ap_overview"),$e=I.querySelector("#au-ap_overview-count"),Ie=I.querySelector("#au-ap_consent");N?.addEventListener("input",()=>{st=N.value,(v.ap_org||T)&&(delete v.ap_org,T="",Me("ap_org"),ze())}),te?.addEventListener("change",()=>{Ue=te.value,te.classList.toggle("is-placeholder",!Ue);const ge=hn(Ue);se=ge.length===1?ge[0]:"",G&&(G.disabled=!Ue,G.innerHTML=`<option value="" ${se?"":"selected"}>城市</option>`+ge.map(We=>`<option value="${n(We)}" ${se===We?"selected":""}>${n(We)}</option>`).join(""),G.classList.toggle("is-placeholder",!se)),Ue&&se&&v.ap_region&&(delete v.ap_region,Me("ap_region"))}),G?.addEventListener("change",()=>{se=G.value,G.classList.toggle("is-placeholder",!se),Ue&&se&&v.ap_region&&(delete v.ap_region,Me("ap_region"))}),fe?.addEventListener("input",()=>{j=fe.value,(v.ap_name||T)&&(delete v.ap_name,T="",Me("ap_name"),ze())}),ie?.addEventListener("input",()=>{M=ie.value,v.ap_dept&&(delete v.ap_dept,Me("ap_dept"))}),ke?.addEventListener("input",()=>{ae=ke.value,(v.ap_email||T)&&(delete v.ap_email,T="",Me("ap_email"),ze())}),tt?.addEventListener("input",()=>{if(be=tt.value,Be+=1,Fe||je>0){Fe="",qe();const ge=I.querySelector("#au-ap_phone-hint");ge&&(ge.textContent="");const We=I.querySelector('[data-role="ap-novcode-wrap"]');We&&(We.hidden=!0),Se.close(!1);const le=I.querySelector('[data-act="ap-send-code"]');le&&(le.disabled=!1,le.textContent="获取验证码")}(v.ap_phone||T)&&(delete v.ap_phone,T="",Me("ap_phone"),ze())}),Ae?.addEventListener("input",()=>{ye=Ae.value.replace(/\D/g,"").slice(0,6),Ae.value=ye,(v.ap_sms||T)&&(delete v.ap_sms,T="",Me("ap_sms"),ze())}),pe?.addEventListener("input",()=>{Qe=pe.value;const ge=Ft(Qe);$e&&(ge>=aa*.8?($e.textContent=`${ge} / ${aa}`,$e.hidden=!1):$e.hidden=!0),v.ap_overview&&ge<=aa&&(delete v.ap_overview,Me("ap_overview"))}),Ie?.addEventListener("change",()=>{rt=Ie.checked,rt&&v.ap_consent&&(delete v.ap_consent,Me("ap_consent"))}),I.querySelector('[data-act="ap-send-code"]')?.addEventListener("click",ge=>{const We=Pt(be);if(We){v.ap_phone=We,Me("ap_phone"),tt?.focus({preventScroll:!0});return}if(!rt){$=()=>{rt=!0,Ie&&(Ie.checked=!0),delete v.ap_consent,Me("ap_consent"),Kt()},Ot("consent_ask",ge.currentTarget);return}Kt()}),I.querySelector('form[data-reg-form="apply"]')?.addEventListener("submit",async ge=>{if(ge.preventDefault(),de)return;v={},T="",st.trim()?Ft(st.trim())>Rn&&(v.ap_org=`机构名称不超过 ${Rn} 个字`):v.ap_org="请输入机构名称",(!Ue||!se)&&(v.ap_region="请选择所在地区"),j.trim()?Ft(j.trim())>ma&&(v.ap_name=`姓名不超过 ${ma} 个字`):v.ap_name="请输入姓名",Ft(M.trim())>Oa&&(v.ap_dept=`部门 / 职务不超过 ${Oa} 个字`),La(ae)||(v.ap_email="请输入有效的电子邮箱");const We=Pt(be);We&&(v.ap_phone=We),/^\d{6}$/.test(ye.trim())||(v.ap_sms="请输入 6 位短信验证码"),Ft(Qe)>aa&&(v.ap_overview=`项目概况不超过 ${aa} 个字`),rt||(v.ap_consent="请阅读并同意隐私政策和使用条款");for(const le of["ap_org","ap_region","ap_name","ap_dept","ap_email","ap_phone","ap_sms","ap_overview","ap_consent"])Me(le);if(ze(),Object.keys(v).length>0){const le=Object.keys(v)[0],Da=le==="ap_region"?Ue?"au-ap_city":"au-ap_prov":`au-${le}`;I.querySelector(`#${Da}`)?.focus({preventScroll:!0});return}de=!0,pt("正在提交…","提交开通申请");try{if(w=await t.submitOrgApplication({organizationName:st.trim(),province:Ue,city:se,contactName:j.trim(),departmentTitle:M.trim()||void 0,email:dt(ae),phone:dt(be),smsCode:ye.trim(),projectOverview:Qe.trim()||void 0,consentAcceptedAt:new Date().toISOString()}),s)return;de=!1,yt()}catch(le){if(s)return;de=!1,T=le instanceof Error?le.message:"暂时无法提交开通申请，请稍后再试。",pt("正在提交…","提交开通申请"),ze()}})}function ca(){Se.close(!1);const I=e.querySelector('[data-role="reg-body-host"]');I&&(o==="join"?(I.innerHTML=sa(),la(I)):(I.innerHTML=oa(),ra(I)))}function It(I,N=!1){o===I||de||(o=I,v={},T="",D="",e.querySelectorAll('[data-act="switch-reg-tab"]').forEach(te=>{const G=te.dataset.tab===I;te.setAttribute("aria-selected",String(G)),te.tabIndex=G?0:-1,G&&N&&te.focus({preventScroll:!0})}),Ye(!0),ca(),e.querySelector(".au-left")?.scrollTo({top:0}))}function Yt(){if(w)return{title:"开通申请已提交 ｜ PACOM Station",bodyHtml:`
          <h1 class="au-h1">开通申请已提交</h1>
          <p class="au-lead">预计 1–2 个工作日完成审核，审核通过后将发送开通链接至你的邮箱。</p>
          <div class="au-summary-card">
            <div class="au-summary-row">
              <span class="au-summary-k">申请单号</span>
              <span class="au-summary-v au-summary-v-copy is-tabular">
                <span>${n(w.applicationId)}</span>
                <button type="button" class="au-summary-copy-btn" data-act="copy-receipt" data-copy-val="${n(w.applicationId)}" aria-label="复制申请单号" title="复制申请单号">${Za}</button>
              </span>
            </div>
            <div class="au-summary-row"><span class="au-summary-k">申请机构</span><span class="au-summary-v">${n(w.organizationName)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">通知邮箱</span><span class="au-summary-v is-tabular">${n(w.maskedEmail)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">当前状态</span><span class="au-status-pill au-status-pill--pending">待审核</span></div>
          </div>
          <button type="button" class="au-secondary" data-act="back-login"><span>返回登录</span></button>
        `};const I=h;return{title:"加入申请已提交 ｜ PACOM Station",bodyHtml:`
        <h1 class="au-h1">加入申请已提交</h1>
        <p class="au-lead">已提交至<b>${n(I.organizationName)}</b>，管理员批准后将发送登录通知。</p>
        <div class="au-summary-card">
          <div class="au-summary-row">
            <span class="au-summary-k">申请单号</span>
            <span class="au-summary-v au-summary-v-copy is-tabular">
              <span>${n(I.requestId)}</span>
              <button type="button" class="au-summary-copy-btn" data-act="copy-receipt" data-copy-val="${n(I.requestId)}" aria-label="复制申请单号" title="复制申请单号">${Za}</button>
            </span>
          </div>
          <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${n(I.organizationName)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">登录账户</span><span class="au-summary-v is-tabular">${n(I.maskedAccount)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">当前状态</span><span class="au-status-pill au-status-pill--pending">待管理员审批</span></div>
        </div>
        <div class="au-ferr" id="au-reg-ferr" role="alert" ${T?"":"hidden"}>
          ${zt}
          <span data-role="ferr-text">${n(T)}</span>
        </div>
        <button type="button" class="au-secondary" data-act="back-login"><span>返回登录</span></button>
        ${t.withdrawJoinApplication?`
          <div class="au-quiet-action">
            <button type="button" class="au-quiet-btn" data-act="ask-withdraw" ${F?"disabled":""}>${F?"正在撤回…":"撤回申请"}</button>
          </div>`:""}
      `}}function _t(I){He(),me=I,K=window.setInterval(()=>{me-=1,me<=0&&He();const N=e.querySelector('[data-act="iv-send-sec"]');N&&(N.disabled=me>0,N.textContent=me>0?`${me} 秒后重发`:ee?"重新获取":"获取验证码")},1e3)}function Ct(I){return I.requiredSecondaryChannel!==void 0?I.requiredSecondaryChannel:fa(I.kind,I.role,I.targetChannel)}function Et(I){return dt(I).toLowerCase().replace(/[\s\-()]/g,"")}function da(I,N){if(!I)return!1;const te=Et(N.targetValue);if(!te)return!1;const G=N.targetChannel==="email"?I.email:I.phone;return!!G&&Et(G)===te}async function it(I){const N=I==="phone"?Pt(X):La(X)?"":"请输入有效的电子邮箱";if(N){v.iv_sec=N,Me("iv_sec"),e.querySelector("#au-iv_sec")?.focus({preventScroll:!0});return}delete v.iv_sec,Me("iv_sec");const te=dt(X),G=++A,fe=e.querySelector('[data-act="iv-send-sec"]');fe&&(fe.disabled=!0,fe.textContent="发送中…");try{const ie=await t.sendVerificationCode({target:te,purpose:"bind",consentAcceptedAt:new Date().toISOString()});if(s||G!==A||dt(X)!==te)return;ee=ie.maskedTarget||Nt(te);const ke=e.querySelector("#au-iv_sec-hint");ke&&(ke.textContent=`验证码已发送至 ${ee}`);const tt=e.querySelector('[data-role="iv-novcode-wrap"]');tt&&(tt.hidden=!1),_t(ie.cooldownSeconds||60),fe&&(fe.disabled=!0,fe.textContent=`${me} 秒后重发`),e.querySelector("#au-iv_seccode")?.focus({preventScroll:!0})}catch(ie){if(s||G!==A||dt(X)!==te)return;fe&&(fe.disabled=!1,fe.textContent=ee?"重新获取":"获取验证码"),T=ie instanceof Error?ie.message:"暂时无法发送验证码，请稍后再试。",ze()}}function Jt(){if(B)return{title:"核验链接 ｜ PACOM Station",bodyHtml:`
          <div class="au-loading-state" role="status" aria-live="polite">
            <span class="au-spinner au-spinner--muted" aria-hidden="true"></span>
            <span>正在核验链接…</span>
          </div>
        `};if(O&&O.status==="accepted"){const $e=O.kind==="owner",Ie=$e?"机构已完成开通":"邀请已被接受",ge=b?`该${$e?"开通":"邀请"}链接已完成激活，你可以直接进入工作区访问<b>${n(O.organizationName)}</b>。`:`该${$e?"开通":"邀请"}链接已完成激活，你可以直接登录访问<b>${n(O.organizationName)}</b>。`;return{title:`${Ie} ｜ PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${Ie}</h1>
          <p class="au-lead">${ge}</p>
          <button type="button" class="au-secondary" data-act="${b?"iv-back-ws":"back-login"}"><span>${b?"进入工作区":"前往登录"}</span></button>
        `}}if(Q||!O||O.status!=="pending"){const $e=O?.kind==="owner",Ie=O?.organizationName?n(O.organizationName):"",ge=O?.inviterName?n(O.inviterName):"机构管理员";let We="邀请链接已失效",le="此链接无效或已过期，请联系邀请人或机构管理员重新发送。";return Q?le=n(Q):O?.status==="expired"?(We=$e?"开通链接已过期":"邀请链接已过期",le=$e?`开通${Ie?`<b>${Ie}</b>的`:""}链接已过期，请联系支持团队重新发送。`:`加入${Ie?`<b>${Ie}</b>的`:""}邀请链接已过期，请联系${ge}重新发送。`):O?.status==="revoked"&&(We=$e?"开通链接已撤销":"邀请已撤销",le=$e?`开通${Ie?`<b>${Ie}</b>的`:""}链接已被撤销，请联系支持团队重新发送。`:`加入${Ie?`<b>${Ie}</b>的`:""}邀请已被撤销，如需加入请联系${ge}重新发送。`),{title:`${We} ｜ PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${We}</h1>
          <p class="au-lead">${le}</p>
          <button type="button" class="au-secondary" data-act="${b?"iv-back-ws":"back-login"}"><span>${b?"返回工作区":"返回登录"}</span></button>
        `}}const I=O,N=I.kind==="owner",te=N?"开通机构":"加入机构",G=I.targetChannel==="phone"?"受邀手机号码":"受邀电子邮箱",fe=I.targetChannel==="phone"?fn(I.targetValue):I.targetValue;if(b){if(da(b,I)){const We=N?`<b>${n(I.organizationName)}</b>已审核通过，确认后即以机构管理员身份完成开通。<span class="au-lead-meta">有效期至 ${n(I.expiresAt)}</span>`:`${n(I.inviterName||"机构管理员")}邀请你以${n(I.roleLabel||"成员")}身份加入<b>${n(I.organizationName)}</b>。<span class="au-lead-meta">有效期至 ${n(I.expiresAt)}</span>`;return{title:`${te} ｜ PACOM Station`,bodyHtml:`
            <h1 class="au-h1">${te}</h1>
            <p class="au-lead">${We}</p>
            <div class="au-summary-card">
              <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${n(I.organizationName)}</span></div>
              <div class="au-summary-row"><span class="au-summary-k">授予角色</span><span class="au-summary-v">${n(I.roleLabel||(N?"机构管理员":"成员"))}</span></div>
              <div class="au-summary-row"><span class="au-summary-k">当前账户</span><span class="au-summary-v is-tabular">${n(b.displayName)} ｜ ${n(fe)}</span></div>
            </div>
            <div class="au-ferr" id="au-reg-ferr" role="alert" ${T?"":"hidden"}>
              ${zt}
              <span data-role="ferr-text">${n(T)}</span>
            </div>
            <button type="button" class="au-primary" data-act="iv-confirm-join" ${de?"disabled":""}>
              ${de?'<span class="au-spinner" aria-hidden="true"></span><span>正在处理…</span>':`<span>${N?"确认开通":"确认加入"}</span>`}
            </button>
            <div class="au-quiet-action">
              <button type="button" class="au-quiet-btn" data-act="iv-back-ws">返回工作区</button>
            </div>
          `}}const $e=Nt(I.targetValue),Ie=b.email||(b.phone?fn(b.phone):"");return{title:"请切换至受邀账户 ｜ PACOM Station",bodyHtml:`
          <h1 class="au-h1">请切换至受邀账户</h1>
          <p class="au-lead">${N?`该开通链接面向 <b>${n($e)}</b> 开通${n(I.organizationName)}，与当前登录账户不一致。`:`该邀请面向 <b>${n($e)}</b> 加入${n(I.organizationName)}，与当前登录账户不一致。`}</p>
          <div class="au-summary-card">
            <div class="au-summary-row"><span class="au-summary-k">当前账户</span><span class="au-summary-v is-tabular">${n(b.displayName)}${Ie?` ｜ ${n(Ie)}`:""}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">受邀账户</span><span class="au-summary-v is-tabular">${n($e)}</span></div>
          </div>
          <button type="button" class="au-primary" data-act="iv-switch-account"><span>切换账户登录</span></button>
          <div class="au-quiet-action">
            <button type="button" class="au-quiet-btn" data-act="iv-back-ws">返回工作区</button>
          </div>
        `}}if(I.accountExists){const $e=N?`<b>${n(I.organizationName)}</b>已审核通过，请先登录已有账户完成开通。<span class="au-lead-meta">有效期至 ${n(I.expiresAt)}</span>`:`${n(I.inviterName||"机构管理员")}邀请你以${n(I.roleLabel||"成员")}身份加入<b>${n(I.organizationName)}</b>，请先登录已有账户完成确认。<span class="au-lead-meta">有效期至 ${n(I.expiresAt)}</span>`;return{title:`${te} ｜ PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${te}</h1>
          <p class="au-lead">${$e}</p>
          <div class="au-summary-card">
            <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${n(I.organizationName)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">授予角色</span><span class="au-summary-v">${n(I.roleLabel||(N?"机构管理员":"成员"))}</span></div>
            <div class="au-summary-row">
              <span class="au-summary-k">受邀账户</span>
              <span class="au-summary-v au-summary-v-copy is-tabular">
                <span>${n(fe)}</span>
                <span class="au-status-pill au-status-pill--neutral">已注册</span>
              </span>
            </div>
          </div>
          <button type="button" class="au-primary" data-act="iv-go-login"><span>${N?"登录并开通":"登录并加入"}</span></button>
        `}}const ie=N?`<b>${n(I.organizationName)}</b>已审核通过，设置密码后即以机构管理员身份开通。<span class="au-lead-meta">有效期至 ${n(I.expiresAt)}</span>`:`${n(I.inviterName||"机构管理员")}邀请你以${n(I.roleLabel||"成员")}身份加入<b>${n(I.organizationName)}</b>。<span class="au-lead-meta">有效期至 ${n(I.expiresAt)}</span>`,ke=N?"完成开通":"注册并加入",tt=Ct(I),Ae=N?`
        <div class="au-field">
          <div class="au-lab">
            <span class="au-lab-t">管理员账户</span>
            <span class="au-lab-status">${gn}<span>已核验</span></span>
          </div>
          <div class="au-verified-card">
            <div class="au-verified-row">
              <span class="au-verified-k">${I.targetChannel==="phone"?"手机号码":"电子邮箱"}</span>
              <span class="au-verified-v">${n(fe)}</span>
            </div>
            ${I.verifiedSecondaryMasked?`
              <div class="au-verified-row">
                <span class="au-verified-k">${I.targetChannel==="phone"?"电子邮箱":"手机号码"}</span>
                <span class="au-verified-v">${n(I.verifiedSecondaryMasked)}</span>
              </div>`:""}
          </div>
        </div>`:`
        <div class="au-field">
          <div class="au-lab">
            <span class="au-lab-t">${G}</span>
            <span class="au-lab-status">${gn}<span>已核验</span></span>
          </div>
          <div class="au-locked-card">
            <span class="au-locked-val">${n(fe)}</span>
          </div>
        </div>`,pe=tt?(()=>{const $e=tt==="phone",Ie=$e?"手机号码":"电子邮箱",ge=$e?"用于新设备登录、敏感操作与重置密码时的身份验证。":"机构管理员须绑定电子邮箱，用于接收订单、续费与安全通知。",We=$e?"短信验证码":"邮件验证码",le=$e?"请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。":"请确认电子邮箱无误并检查垃圾邮件箱；如仍未收到，可点击页脚「联系我们」获取协助。";return`
            <div class="au-field ${v.iv_sec?"bad":""}" data-f="iv_sec">
              <div class="au-lab">
                <span class="au-lab-group">
                  <label for="au-iv_sec">${Ie}</label>
                  ${va("au-iv-sec-info",`${Ie}说明`,[ge])}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_sec" name="iv_sec" class="au-in has-code-btn" type="${$e?"tel":"email"}" inputmode="${$e?"tel":"email"}" autocomplete="${$e?"tel":"email"}" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(X)}" aria-invalid="${v.iv_sec?"true":"false"}" />
                <button type="button" class="au-suffix au-getcode" data-act="iv-send-sec" ${me>0?"disabled":""}>
                  ${me>0?`${me} 秒后重发`:ee?"重新获取":"获取验证码"}
                </button>
              </div>
              <p class="au-err" id="au-iv_sec-err" aria-live="polite">${n(v.iv_sec??"")}</p>
              <p class="au-hint" id="au-iv_sec-hint" role="status" aria-live="polite">${ee?`验证码已发送至 ${n(ee)}`:""}</p>
            </div>

            <div class="au-field ${v.iv_seccode?"bad":""}" data-f="iv_seccode">
              <div class="au-lab">
                <label for="au-iv_seccode">${We}</label>
                <span data-role="iv-novcode-wrap" ${ee?"":"hidden"}>
                  <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-iv-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-iv-novcode-pop"><span>收不到验证码？</span></button>
                  <span id="au-iv-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
                    <span class="ws-info-text">${le}</span>
                  </span>
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_seccode" name="iv_seccode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(ce)}" aria-invalid="${v.iv_seccode?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_seccode-err" aria-live="polite">${n(v.iv_seccode??"")}</p>
            </div>
          `})():"";return{title:`${te} ｜ PACOM Station`,bodyHtml:`
        <h1 class="au-h1">${te}</h1>
        <p class="au-lead">${ie}</p>
        <form class="au-reg-form" data-reg-form="invite" novalidate>
          <fieldset ${de?"disabled":""}>
            ${Ae}

            <div class="au-field ${v.iv_name?"bad":""}" data-f="iv_name">
              <div class="au-lab"><label for="au-iv_name">姓名</label></div>
              <div class="au-ctl">
                <input id="au-iv_name" name="iv_name" class="au-in" type="text" autocomplete="name" value="${n(J)}" aria-invalid="${v.iv_name?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_name-err" aria-live="polite">${n(v.iv_name??"")}</p>
            </div>

            ${pe}

            <div class="au-field ${v.iv_pwd?"bad":""}" data-f="iv_pwd">
              <div class="au-lab">
                <span class="au-lab-group">
                  <label for="au-iv_pwd">设置密码</label>
                  ${va("au-iv-pwd-info","设置密码说明",an)}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_pwd" name="iv_pwd" class="au-in has-suffix" type="${ue?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(W)}" aria-invalid="${v.iv_pwd?"true":"false"}" />
                <button type="button" class="au-suffix au-eye" data-act="iv-toggle-eye" aria-controls="au-iv_pwd" aria-label="${ue?"隐藏密码":"显示密码"}">
                  ${ue?Vt:Ut}
                </button>
              </div>
              <p class="au-err" id="au-iv_pwd-err" aria-live="polite">${n(v.iv_pwd??"")}</p>
            </div>

            ${Tt("au-iv_consent","iv_consent",ve,"iv_consent")}

            <div class="au-ferr" id="au-reg-ferr" role="alert" ${T?"":"hidden"}>
              ${zt}
              <span data-role="ferr-text">${n(T)}</span>
            </div>

            <button type="submit" class="au-primary" ${de?"disabled":""}>
              ${de?`<span class="au-spinner" aria-hidden="true"></span><span>${N?"正在开通…":"正在提交…"}</span>`:`<span>${ke}</span>`}
            </button>
          </fieldset>
        </form>
      `}}function ya(){Se.bind(e),e.querySelector('[data-act="iv-back-ws"]')?.addEventListener("click",()=>{wt(),a.onBackToWorkspace?a.onBackToWorkspace():a.onBackToLogin()}),e.querySelector('[data-act="iv-go-login"]')?.addEventListener("click",()=>{if(!O)return;const pe=`#invite?token=${encodeURIComponent(O.token)}`,$e=O.kind==="owner"?`登录后即可开通${O.organizationName}`:`登录后即可加入${O.organizationName}`;wt(),a.onGoLoginForInvite?a.onGoLoginForInvite(O.targetValue,$e,pe):a.onBackToLogin()}),e.querySelector('[data-act="iv-switch-account"]')?.addEventListener("click",()=>{if(!O)return;const pe=`#invite?token=${encodeURIComponent(O.token)}`,Ie=`请使用 ${Nt(O.targetValue)} 登录以${O.kind==="owner"?"开通机构":"接受邀请"}`;wt(),a.onSwitchAccountForInvite?a.onSwitchAccountForInvite(pe,Ie):a.onBackToLogin()}),e.querySelector('[data-act="iv-confirm-join"]')?.addEventListener("click",async()=>{if(!(de||!O)){de=!0,T="",yt();try{const pe=await t.acceptInvitation({token:O.token});if(s)return;wt(),a.onAuthenticated(pe)}catch(pe){if(s)return;de=!1,T=pe instanceof Error?pe.message:"暂时无法确认加入，请稍后再试。",yt()}}});const I=e.querySelector('form[data-reg-form="invite"]');if(!I||!O)return;const N=e.querySelector("#au-iv_name"),te=e.querySelector("#au-iv_sec"),G=e.querySelector("#au-iv_seccode"),fe=e.querySelector("#au-iv_pwd"),ie=e.querySelector("#au-iv_consent"),ke=O.kind==="owner",tt=ke?"完成开通":"注册并加入",Ae=Ct(O);N?.addEventListener("input",()=>{J=N.value,(v.iv_name||T)&&(delete v.iv_name,T="",Me("iv_name"),ze())}),te?.addEventListener("input",()=>{if(X=te.value,A+=1,ee||me>0){ee="",He();const pe=e.querySelector("#au-iv_sec-hint");pe&&(pe.textContent="");const $e=e.querySelector('[data-role="iv-novcode-wrap"]');$e&&($e.hidden=!0),Se.close(!1);const Ie=e.querySelector('[data-act="iv-send-sec"]');Ie&&(Ie.disabled=!1,Ie.textContent="获取验证码")}(v.iv_sec||T)&&(delete v.iv_sec,T="",Me("iv_sec"),ze())}),G?.addEventListener("input",()=>{ce=G.value.replace(/\D/g,"").slice(0,6),G.value=ce,(v.iv_seccode||T)&&(delete v.iv_seccode,T="",Me("iv_seccode"),ze())}),fe?.addEventListener("input",()=>{W=fe.value,(v.iv_pwd||T)&&(delete v.iv_pwd,T="",Me("iv_pwd"),ze())}),ie?.addEventListener("change",()=>{ve=ie.checked,ve&&v.iv_consent&&(delete v.iv_consent,Me("iv_consent"))}),e.querySelector('[data-act="iv-send-sec"]')?.addEventListener("click",pe=>{if(!Ae)return;const $e=Ae==="phone"?Pt(X):La(X)?"":"请输入有效的电子邮箱";if($e){v.iv_sec=$e,Me("iv_sec"),te?.focus({preventScroll:!0});return}if(!ve){$=()=>{ve=!0,ie&&(ie.checked=!0),delete v.iv_consent,Me("iv_consent"),it(Ae)},Ot("consent_ask",pe.currentTarget);return}it(Ae)}),e.querySelector('[data-act="iv-toggle-eye"]')?.addEventListener("click",pe=>{ue=!ue;const $e=pe.currentTarget;if(fe){const Ie=fe.selectionStart,ge=fe.selectionEnd;fe.type=ue?"text":"password",fe.focus({preventScroll:!0}),Ie!==null&&ge!==null&&fe.setSelectionRange(Ie,ge)}$e.setAttribute("aria-label",ue?"隐藏密码":"显示密码"),$e.innerHTML=ue?Vt:Ut}),I.addEventListener("submit",async pe=>{if(pe.preventDefault(),de||!O)return;if(v={},T="",J.trim()?Ft(J.trim())>ma&&(v.iv_name=`姓名不超过 ${ma} 个字`):v.iv_name="请输入姓名",Ae){const ge=Ae==="phone"?Pt(X):La(X)?"":"请输入有效的电子邮箱";ge&&(v.iv_sec=ge),/^\d{6}$/.test(ce.trim())||(v.iv_seccode=Ae==="phone"?"请输入 6 位短信验证码":"请输入 6 位邮件验证码")}const $e=tn(W);$e&&(v.iv_pwd=$e),ve||(v.iv_consent="请阅读并同意隐私政策和使用条款");const Ie=Ae?["iv_name","iv_sec","iv_seccode","iv_pwd","iv_consent"]:["iv_name","iv_pwd","iv_consent"];for(const ge of Ie)Me(ge);if(ze(),Object.keys(v).length>0){const ge=Object.keys(v)[0];e.querySelector(`#au-${ge}`)?.focus({preventScroll:!0});return}de=!0,pt(ke?"正在开通…":"正在提交…",tt);try{const ge=await t.acceptInvitation({token:O.token,displayName:J.trim(),password:W,consentAcceptedAt:new Date().toISOString(),...Ae?{secondaryContact:dt(X),secondaryVerificationCode:ce.trim()}:{}});if(s)return;wt(),a.onAuthenticated(ge)}catch(ge){if(s)return;de=!1,T=ge instanceof Error?ge.message:"暂时无法完成激活，请稍后再试。",pt(ke?"正在开通…":"正在提交…",tt),ze()}})}function yt(){k?.(),k=null,Se.close(!1);let I="";if(h||w){const N=Yt();document.title=N.title,I=N.bodyHtml}else if(d){const N=Jt();document.title=N.title,I=N.bodyHtml}else document.title="注册 ｜ PACOM Station",I=`
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
      `;e.innerHTML=`
      <div class="au au-split au-reg-shell">
        <section class="au-left">
          <div class="au-center">
            <main class="au-group">
              <div class="au-logo">${Nn}</div>
              ${I}
            </main>
          </div>
          ${Un()}
        </section>
        <aside class="au-art" aria-hidden="true">
          <div class="au-art-frame">
            <img src="./media/auth-hero.jpg" alt="" />
          </div>
        </aside>
      </div>
      <div data-role="modal-host"></div>
    `,e.querySelectorAll('[data-act="back-login"]').forEach(N=>{N.addEventListener("click",()=>{wt(),a.onBackToLogin()})}),e.querySelectorAll('[data-act="open-contact"]').forEach(N=>{N.addEventListener("click",te=>{Ot("contact",te.currentTarget)})}),e.querySelector('[data-act="ask-withdraw"]')?.addEventListener("click",N=>{!h||!t.withdrawJoinApplication||F||Ot("withdraw_confirm",N.currentTarget)}),e.querySelectorAll('[data-act="copy-receipt"]').forEach(N=>{N.addEventListener("click",()=>{const te=N.dataset.copyVal??"";te&&(navigator.clipboard?.writeText&&navigator.clipboard.writeText(te).catch(()=>{}),N.classList.add("is-copied"),N.setAttribute("aria-label","已复制申请单号"),N.innerHTML=us,ot!==null&&window.clearTimeout(ot),ot=window.setTimeout(()=>{ot=null,N.classList.remove("is-copied"),N.setAttribute("aria-label","复制申请单号"),N.innerHTML=Za},1800))})}),!h&&!w&&!d?(e.querySelectorAll('[data-act="switch-reg-tab"]').forEach(N=>{N.addEventListener("click",()=>{const te=N.dataset.tab;te&&It(te,!1)}),N.addEventListener("keydown",te=>{const G=Mt.indexOf(o);te.key==="ArrowRight"?(te.preventDefault(),It(Mt[(G+1)%Mt.length],!0)):te.key==="ArrowLeft"?(te.preventDefault(),It(Mt[(G-1+Mt.length)%Mt.length],!0)):te.key==="Home"?(te.preventDefault(),It(Mt[0],!0)):te.key==="End"&&(te.preventDefault(),It(Mt[Mt.length-1],!0))})}),ca(),Ye(!1),document.fonts?.ready.then(()=>{s||Ye(!1)})):d&&!B&&ya(),k=Vn(e)}yt(),d&&m&&!h&&!w?(async()=>{try{const I=await t.getInvitationPreview(m);if(s)return;if(O=I,J=I.prefillName??"",B=!1,yt(),!b&&I.status==="pending"&&!I.accountExists){const N=Ct(I),te=J.trim()?N?"#au-iv_sec":"#au-iv_pwd":"#au-iv_name";e.querySelector(te)?.focus({preventScroll:!0})}}catch(I){if(s)return;B=!1,Q=I instanceof Error?I.message:"暂时无法读取邀请信息，请稍后再试。",yt()}})():!d&&!h&&!w&&we.replace(/\D/g,"").length===9&&(Zt(we),e.querySelector("#au-jn_name")?.focus({preventScroll:!0}))}function Sa(e){const t=e.replace(/^#\/?/,"").split("?")[0]??"";return t==="login"||t==="register"||t==="join"||t==="apply"||t==="invite"}function Ta(e){const t=e.replace(/^#\/?/,""),[a="",s=""]=t.split("?"),o=new URLSearchParams(s);if(a==="invite")return{kind:"invite",inviteToken:(o.get("token")??"").trim()};if(a==="register"||a==="join"||a==="apply"){const i=o.get("tab");return{kind:"register",initialMode:a==="apply"||i==="apply"?"apply":"join",prefillCode:o.get("code")??void 0}}return{kind:"login"}}const to=["org_admin","project_admin","operator","space_user"],Ba=[{key:"login",label:"登录",group:"auth",hash:"#login",sessionRole:null},{key:"reg-join",label:"加入已有机构",group:"auth",hash:"#register",sessionRole:null},{key:"status-join",label:"加入申请已提交",group:"auth",hash:"#register",sessionRole:null,joinReceipt:{requestId:"JR-20261127-8421",organizationName:"广州国家实验室",maskedAccount:"138 •••• 8000",status:"pending_approval",submittedAt:"2026-11-27T09:30:00Z",withdrawToken:"demo-preset-wt-8421"}},{key:"reg-apply",label:"申请开通机构",group:"auth",hash:"#apply",sessionRole:null},{key:"status-apply",label:"开通申请已提交",group:"auth",hash:"#apply",sessionRole:null,applyReceipt:{applicationId:"APP-20261127-3902",organizationName:"广州天环智能科技有限公司",region:"广东省 广州市",maskedEmail:"c•••@company.com",status:"pending_review",submittedAt:"2026-11-27T09:35:00Z"}},{key:"inv-member",label:"成员邀请 ｜ 新账户",group:"invite",hash:"#invite?token=member-demo",sessionRole:null},{key:"inv-admin-email",label:"机构管理员邀请 ｜ 补绑手机",group:"invite",hash:"#invite?token=admin-email",sessionRole:null},{key:"inv-admin-phone",label:"机构管理员邀请 ｜ 补绑邮箱",group:"invite",hash:"#invite?token=admin-phone",sessionRole:null},{key:"inv-proj-email",label:"项目管理员邀请 ｜ 补绑手机",group:"invite",hash:"#invite?token=project-admin-email",sessionRole:null},{key:"inv-owner",label:"机构审核通过 ｜ 开通机构",group:"invite",hash:"#invite?token=owner-demo",sessionRole:null},{key:"inv-existing",label:"已有账户受邀 ｜ 引导登录",group:"invite",hash:"#invite?token=existing-demo",sessionRole:null},{key:"inv-signed-match",label:"已登录 ｜ 确认加入",group:"invite",hash:"#invite?token=existing-demo",sessionRole:"operator"},{key:"inv-signed-mismatch",label:"已登录 ｜ 切换受邀账户",group:"invite",hash:"#invite?token=member-demo",sessionRole:"org_admin"},{key:"inv-expired",label:"邀请链接已过期",group:"terminal",hash:"#invite?token=expired",sessionRole:null},{key:"inv-revoked",label:"邀请已撤销",group:"terminal",hash:"#invite?token=revoked",sessionRole:null},{key:"inv-accepted",label:"邀请已被接受",group:"terminal",hash:"#invite?token=accepted",sessionRole:null},{key:"inv-invalid",label:"邀请链接已失效",group:"terminal",hash:"#invite",sessionRole:null}];async function ao(e){const t=new gs;let a=await t.getSession(),s="login",o="",i="",p="",$=window.location.hash&&!Sa(window.location.hash)?window.location.hash:"",u=!1;document.querySelector("[data-demo-fab-root]")?.remove();const f=document.createElement("div");f.className="pacom-demo-fab-wrap",f.dataset.demoFabRoot="1",document.body.appendChild(f);function h(k,m){const d=k.trim();if(d==="#login")return"login";if(d==="#apply"||d==="#register?tab=apply")return"reg-apply";if(d.startsWith("#register")||d.startsWith("#join"))return"reg-join";if(d.startsWith("#invite")){const B=Ta(d).inviteToken??"";return B?B==="expired"?"inv-expired":B==="revoked"?"inv-revoked":B==="accepted"?"inv-accepted":B.startsWith("owner")?"inv-owner":B==="admin-email"?"inv-admin-email":B==="admin-phone"?"inv-admin-phone":B==="project-admin-email"?"inv-proj-email":B==="existing-demo"?m?"inv-signed-match":"inv-existing":m?"inv-signed-mismatch":"inv-member":"inv-invalid"}return""}function w(){const k=Ba.filter(B=>B.group==="auth"),m=Ba.filter(B=>B.group==="invite"),d=Ba.filter(B=>B.group==="terminal"),b=B=>{const O=s!=="app"&&i===B.key;return`
        <button type="button" class="pacom-demo-role-btn" aria-pressed="${O}" data-demo-preset="${B.key}">
          <span>${B.label}</span>
          ${O?re("check",14):"<span>→</span>"}
        </button>`};f.innerHTML=`
      ${u?`
          <div class="pacom-demo-fab-panel" role="dialog" aria-label="演示视角切换">
            <div class="pacom-demo-fab-head">
              <span class="pacom-demo-fab-title">演示视角</span>
              <span class="pacom-badge pacom-badge--neutral">模拟数据</span>
            </div>
            <span class="pacom-demo-fab-sub">测试邀请码 482 916 305 ｜ 验证码任意 6 位数字</span>
            <div class="pacom-demo-fab-roles">
              <span class="pacom-demo-fab-sec-title">工作区角色</span>
              ${to.map(B=>`
                  <button type="button" class="pacom-demo-role-btn" aria-pressed="${s==="app"&&a?.role===B}" data-demo-pick="${B}">
                    <span>${ft[B]}</span>
                    ${s==="app"&&a?.role===B?re("check",14):""}
                  </button>`).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">登录与注册</span>
              ${k.map(b).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">邀请与开通激活</span>
              ${m.map(b).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">链接异常与终态</span>
              ${d.map(b).join("")}
            </div>
            <div class="pacom-demo-fab-foot">
              <a class="pacom-demo-link" href="./index.html">
                <span>进入生产入口（index.html）</span>
                <span>→</span>
              </a>
            </div>
          </div>`:""}
      <button type="button" class="pacom-demo-fab-pill" aria-expanded="${u}" data-demo-fab-toggle="1" title="切换演示视角">
        <span class="pacom-demo-fab-dot" aria-hidden="true"></span>
        <span>演示</span>
      </button>
    `,f.querySelector("[data-demo-fab-toggle]")?.addEventListener("click",B=>{B.stopPropagation(),u=!u,w()}),f.querySelectorAll("[data-demo-pick]").forEach(B=>{B.addEventListener("click",async()=>{const O=B.dataset.demoPick;O&&(u=!1,a=await t.switchDemoRole(O),await F(a))})}),f.querySelectorAll("[data-demo-preset]").forEach(B=>{B.addEventListener("click",async()=>{const O=B.dataset.demoPreset,Q=Ba.find(J=>J.key===O);Q&&(u=!1,p="",Q.sessionRole&&(a=await t.switchDemoRole(Q.sessionRole)),await D(Q.hash,Q.sessionRole===null,{presetKey:Q.key,initialJoinReceipt:Q.joinReceipt??null,initialApplyReceipt:Q.applyReceipt??null}))})})}document.addEventListener("click",k=>{u&&(k.target?.closest("[data-demo-fab-root]")||(u=!1,w()))}),document.addEventListener("keydown",k=>{k.key==="Escape"&&u&&(u=!1,w())});async function D(k,m,d){Js(e),Bn(e),Pn(e),m&&a&&(await t.logout(),a=null);const b=Ta(k);if(s=b.kind,o=k,i=d?.presetKey??h(k,!!a),window.location.hash!==k&&(window.location.hash=k),w(),b.kind==="register"||b.kind==="invite"){eo(e,t,{initialMode:b.initialMode,prefillCode:b.prefillCode,isInviteRoute:b.kind==="invite",inviteToken:b.inviteToken,currentSession:b.kind==="invite"?a:null,initialJoinReceipt:d?.initialJoinReceipt??null,initialApplyReceipt:d?.initialApplyReceipt??null,onBackToLogin:()=>{p="",D("#login",!1)},onGoLoginForInvite:(B,O,Q)=>{p=Q,D("#login",!1,{prefillAccount:B,notice:O})},onSwitchAccountForInvite:(B,O)=>{p=B,D("#login",!0,{notice:O})},onBackToWorkspace:()=>{a?F(a):D("#login",!1)},onAuthenticated:B=>{p="",F(B)}});return}Xs(e,t,B=>{if(a=B,p){const O=p;p="",D(O,!1);return}F(B)},{prefillAccount:d?.prefillAccount,notice:d?.notice,onOpenRegister:()=>{p="",D("#register",!1)}})}async function F(k){Bn(e),Pn(e),a=k,s="app",o="",i="",w(),(!window.location.hash||Sa(window.location.hash))&&(window.location.hash=$||"#home"),$="",await Qs(e,t,k,()=>{p="",$="",D("#login",!0)})}if(window.addEventListener("hashchange",()=>{if(Sa(window.location.hash)){if(window.location.hash===o)return;const k=Ta(window.location.hash);(s!==k.kind||window.location.hash!==o)&&D(window.location.hash,s==="app"&&k.kind!=="invite")}}),!a||Sa(window.location.hash)){const k=Sa(window.location.hash)?window.location.hash:"#login",m=Ta(k);await D(k,!!(a&&m.kind!=="invite"));return}await F(a)}async function no(){const e=document.getElementById("app");if(e)try{await ao(e)}catch(t){e.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">演示环境初始化失败：${String(t)}</div></div>`}}no();
