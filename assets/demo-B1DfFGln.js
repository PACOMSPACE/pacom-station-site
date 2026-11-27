import{E as R,r as ce,a as Za,e as n,b as Ga,g as Ka,s as qt,m as ms,c as vs,d as Wn,P as Zn,I as Na,A as Ut,f as Gn,n as pt,h as Kn,i as fs,j as Ht,t as Yn,k as Jn,v as Ua,l as Vt,o as Wt,p as ln,q as Nt,u as Qn,C as Va,w as ba,x as rn,y as yn,z as gs,B as Xa,D as $n,L as wn,F as Ma,G as Mt,H as Sn,J as Oa,K as En,M as xn,O as bs,N as hs}from"./auth-shared-C-uhIfm6.js";import{R as ft,g as ha,a as In}from"./contracts-Z0w12vLk.js";function ys(){const e="2026-11-25T09:00:00Z",t=[];for(let i=1;i<=22;i+=1){const c=i===7?R.floorId:i===8?R.lockedFloor8Id:i===6?R.lockedFloor6Id:`structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-${i}`,y=String(i).padStart(2,"0");t.push({id:c,buildingId:R.buildingId,kind:"above",level:i,name:`${i}F`,areaSqm:i===7?1383.1:i===1?2680:i<=4?1920:1480,plan:{floorId:c,imageUrl:`./media/floors/e/${y}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}})}const a="structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-roof-1";t.push({id:a,buildingId:R.buildingId,kind:"roof",level:99,name:"RF",areaSqm:1260,plan:{floorId:a,imageUrl:"./media/floors/e/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}});const s=[];for(let i=1;i<=12;i+=1){const c=`structure-f-above-${i}`,y=String(i).padStart(2,"0");s.push({id:c,buildingId:R.buildingFId,kind:"above",level:i,name:`${i}F`,areaSqm:i===1?2450:i<=3?2100:1580,plan:{floorId:c,imageUrl:`./media/floors/f/${y}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}})}const o="structure-f-roof-1";return s.push({id:o,buildingId:R.buildingFId,kind:"roof",level:99,name:"RF",areaSqm:960,plan:{floorId:o,imageUrl:"./media/floors/f/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}}),{projects:[{id:R.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",location:{lat:23.0652,lng:113.3824,crs:"GCJ02",confirmed:!0,confirmedAt:e},imageUrl:"./media/gzlab.jpg"},{id:R.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",location:{lat:23.0681,lng:113.3792,crs:"GCJ02",confirmed:!0,confirmedAt:e},imageUrl:"./media/gzlab.jpg"}],buildings:[{id:R.buildingId,projectId:R.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.webp"},{id:R.buildingFId,projectId:R.projectId,name:"F栋",aboveFloors:12,belowFloors:0,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.webp"}],floors:[...t,...s],zones:[{id:"zone-e1f-lobby",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 首层大堂与庭院入口",category:"corridor"},{id:"zone-e1f-power",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 配电房与后勤区",category:"utility"},{id:"zone-e7f-lab-east",floorId:R.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:R.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:R.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:R.floorId,name:"核心走廊与弱电井",category:"corridor"},{id:"zone-erf-hvac",floorId:a,name:"RF 屋面空调主机与稳压泵区",category:"utility"},{id:"zone-f1f-lobby",floorId:"structure-f-above-1",name:"1F 南入口大堂与弧形展示翼",category:"corridor"},{id:"zone-f8f-office",floorId:"structure-f-above-8",name:"8F 会议与行政办公区",category:"office"},{id:"zone-f11f-sports",floorId:"structure-f-above-11",name:"11F 体育活动与茶歇区",category:"outdoor"},{id:"zone-f12f-lounge",floorId:"structure-f-above-12",name:"12F 休息区、母婴室与桌球室",category:"office"},{id:"zone-frf-plant",floorId:o,name:"RF 屋面设备基础与机房区",category:"utility"}]}}const Xn=ys(),kn=Xn.floors.map(e=>e.id),St={org_admin:{userId:"demo-org-admin",displayName:"林致远",email:"lin.zhiyuan@pacom.cn",phone:"13800138001",role:"org_admin",roleLabel:ft.org_admin,authMode:"demo",scope:{allowedProjectIds:[R.projectId,R.project1Id],allowedBuildingIds:[R.buildingId,R.buildingFId],allowedFloorIds:[...kn],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩",email:"chen.mingxuan@pacom.cn",phone:"13800138002",role:"project_admin",roleLabel:ft.project_admin,authMode:"demo",scope:{allowedProjectIds:[R.projectId],allowedBuildingIds:[R.buildingId,R.buildingFId],allowedFloorIds:[...kn],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},operator:{userId:"demo-operator-e7f",displayName:"周宁",email:"zhou.ning@pacom.cn",phone:"13800138003",role:"operator",roleLabel:ft.operator,authMode:"demo",scope:{allowedProjectIds:[R.projectId],allowedBuildingIds:[R.buildingId],allowedFloorIds:[R.floorId],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}},space_user:{userId:"demo-space-user-e7f",displayName:"沈嘉",email:"shen.jia@pacom.cn",phone:"13800138004",role:"space_user",roleLabel:ft.space_user,authMode:"demo",scope:{allowedProjectIds:[R.projectId],allowedBuildingIds:[R.buildingId],allowedFloorIds:[R.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],visibleModules:["home","account"],canControlDevices:!0,canManageAlarms:!1,canEditScenes:!1,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}}},va="pacom.web.demo.role",An="pacom.web.demo.spatial.v5",Dn="pacom.web.demo.orgs.v1",Cn="pacom.web.demo.activeOrg.v1",Ln="pacom.web.demo.deployExt.v1",tt="org-gzlab";function _n(e){return`mesh-${e.replace(/[^a-z0-9]/gi,"").slice(-4).toLowerCase()||"01"}`}function Fn(){return{extraDevices:[],planChangeAlerts:{},floorFttRecords:{},configRevisionByFloor:{[R.floorId]:1},layoutRevisionByFloor:{[R.floorId]:1},deliverySnapshotMeta:{},deferredFloorIds:[],lightMarkers:[{id:"lm-1",deviceId:"dev-e7f-lt-01",floorId:R.floorId,channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",floorId:R.floorId,channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",floorId:R.floorId,channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],meshRoles:{"dev-e7f-gw-01":{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"},"dev-e7f-lt-01":{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"},"dev-e7f-lt-02":{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"},"dev-e7f-env-01":{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}},edgeSyncByFloor:{[R.floorId]:{version:3,dirty:!1,lastSyncedAt:"2026-11-25T09:00:00Z"}},deviceParams:{},groups:[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:R.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:R.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:R.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:R.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],docs:[{id:"doc-hvac-7f",floorId:R.floorId,name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F ｜ 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",floorId:R.floorId,name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F ｜ 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",floorId:R.floorId,name:"E7F_协议点位与蓝牙Mesh映射表.xlsx",category:"点位清单",boundScope:"E栋 7F ｜ 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",floorId:R.floorId,name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 ｜ FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}]}}class $s{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;inviteMissTimestamps=[];inviteLockedUntil=0;sentCodeTargets=new Set;joinReceipts=new Map;joinWithdrawTokens=new Map;joinAccountByRequestId=new Map;pendingApprovalAccounts=new Set;orgs;activeOrgId;spatial;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;overrides;deployExt;constructor(){this.orgs=this.loadOrgs();const t=typeof localStorage<"u"?localStorage.getItem(Cn):null,a=this.orgs.find(i=>i.id===t)??this.orgs[0];this.activeOrgId=a.id,this.spatial=a.spatial,this.overrides=[],this.syncAdminScopesFromSpatial();const s=typeof sessionStorage<"u"?sessionStorage.getItem(va):null;s&&St[s]&&(this.activeSession=structuredClone(St[s]),this.applyOverridesToSession());const o=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:R.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:o,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:o,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:R.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:o,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:R.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:o,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:R.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:o,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:o,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:o,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02",category:"hvac",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:R.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:o,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:R.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:o,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:o,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:o,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:o},{id:"conn-e7f-dali",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:o},{id:"conn-e7f-modbus",projectId:R.projectId,buildingId:R.buildingId,floorId:R.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deployExt=this.loadDeployExtensions(),this.deployExt.seedDevicesOverride&&this.activeOrgId===tt&&(this.devices=structuredClone(this.deployExt.seedDevicesOverride)),this.deployExt.connectionsOverride&&(this.connections=structuredClone(this.deployExt.connectionsOverride)),this.deliveryBatches=this.deployExt.deliveryBatchesOverride?structuredClone(this.deployExt.deliveryBatchesOverride):[{id:"dlv-e7f-20261120",projectId:R.projectId,floorId:R.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:R.projectId,floorId:R.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:R.projectId,floorId:R.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:R.projectId,floorId:R.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:R.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:R.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:o,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:R.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:o,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:R.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:R.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh ｜ 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:R.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:o,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:R.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(St).map((i,c)=>({userId:i.userId,displayName:i.displayName,email:`${i.role.replaceAll("_",".")}@gzlab.ac.cn`,role:i.role,roleLabel:i.roleLabel,scopeSummary:i.scope.allowedZoneIds?.length?`E栋 7F（${i.scope.allowedZoneIds.length} 个授权功能区）`:`${i.scope.allowedProjectIds.length} 项目 / ${i.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:c===0?o:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁",role:"operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"陈明轩",role:"project_admin",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉",role:"space_user",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}reconcileOverrides(){const t=Date.now();for(const a of this.overrides)a.status==="active"&&new Date(a.expiresAt).getTime()<=t&&(a.status="expired")}applyOverridesToSession(){if(this.reconcileOverrides(),!this.activeSession)return;const t=St[this.activeSession.role].scope,a=this.overrides.filter(s=>s.targetUserId===this.activeSession.userId&&s.status==="active");this.activeSession.scope.activeOverrides=structuredClone(a),this.activeSession.scope.canEditDeployment=t.canEditDeployment||a.some(s=>s.module==="deployment"),this.activeSession.scope.canEditSettings=t.canEditSettings||a.some(s=>s.module==="settings")}record(t,a,s,o,i){this.traces.unshift({at:new Date().toISOString(),channel:t,operation:a,endpoint:s,request:i,response:o}),this.traces.length>40&&this.traces.pop()}pushAudit(t,a,s,o){const i=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:i?.displayName??"anonymous",role:i?.role??"space_user",action:t,target:a,result:s,detail:o})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.applyOverridesToSession(),this.activeSession}async getSession(){return this.applyOverridesToSession(),this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(t){const a=t.method??"password",s=t.account.trim(),o=this.normalizeContactKey(s);if(!s)throw new Error("400 BAD_REQUEST: 请输入电子邮箱或手机号码");if(a==="sms"){const p=(t.smsCode??t.password??"").trim();if(!/^\d{6}$/.test(p))throw new Error("验证码不正确或已过期");const v=`login:${o}`;if(!this.sentCodeTargets.has(v))throw new Error("请先获取短信验证码");this.sentCodeTargets.delete(v)}else if(!(t.password??"").trim())throw new Error("400 BAD_REQUEST: 请输入账户和密码");if(this.pendingApprovalAccounts.has(o))throw new Error("你的加入申请正在等待机构管理员审批，批准后即可登录。");const i=Object.values(St).find(p=>{const v=!!p.email&&this.normalizeContactKey(p.email)===o,h=!!p.phone&&this.normalizeContactKey(p.phone)===o;return v||h}),c=s.toLowerCase(),y=i?i.role:c.includes("org")||c.includes("admin")?"org_admin":c.includes("proj")?"project_admin":c.includes("space")||c.includes("member")?"space_user":"operator";return this.activeSession=structuredClone(St[y]),this.applyOverridesToSession(),sessionStorage.setItem(va,y),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{method:a,account:s,rememberMe:!!t.rememberMe}),this.pushAudit("auth.login",this.activeSession.userId,"success",a==="sms"?"短信验证码登录":"密码登录"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(va),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}maskTarget(t){const a=t.trim();if(a.includes("@")){const[o,i]=a.split("@");return o&&i?`${o[0]}•••@${i}`:"••••"}const s=a.replace(/\D/g,"");return s.length===11?`${s.slice(0,3)} •••• ${s.slice(7)}`:s.length>=6?`${s.slice(0,3)} •••• ${s.slice(-4)}`:"••••"}async sendVerificationCode(t){const a=t.target.trim(),s=a.includes("@")?"email":"sms";this.sentCodeTargets.add(`${t.purpose}:${this.normalizeContactKey(a)}`);const o={maskedTarget:this.maskTarget(a),channel:s,cooldownSeconds:60};return this.record("REST","sendVerificationCode","POST /api/v1/auth/verification-codes",o,{purpose:t.purpose,channel:s}),o}async confirmPasswordReset(t){const a=t.account.trim(),s=this.normalizeContactKey(a);if(!a)throw new Error("请输入电子邮箱或手机号码");if(!/^\d{6}$/.test(t.verificationCode.trim()))throw new Error("验证码不正确或已过期");const o=`reset:${s}`;if(!this.sentCodeTargets.has(o))throw new Error("请先获取验证码");if(!t.newPassword||t.newPassword.length<8)throw new Error("密码至少需要 8 个字符");this.sentCodeTargets.delete(o),this.record("REST","confirmPasswordReset","POST /api/v1/auth/password-reset/confirm",{ok:!0},{account:this.maskTarget(a)}),this.pushAudit("auth.password_reset",this.maskTarget(a),"success")}async resolveInviteCode(t){const a=Date.now();if(this.inviteLockedUntil>a)return{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const s=t.replace(/\D/g,""),i={482916305:this.orgs[0]?.name??"广州国家实验室",618204917:"天环智慧园区"}[s];if(!i){if(this.inviteMissTimestamps=this.inviteMissTimestamps.filter(p=>a-p<36e5),this.inviteMissTimestamps.push(a),this.inviteMissTimestamps.length>=10)return this.inviteLockedUntil=a+36e5,this.inviteMissTimestamps=[],{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const y={valid:!1,message:"邀请码不正确或已失效，请向机构管理员确认。"};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",y,{code:s}),y}const c={valid:!0,organizationName:i};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",c,{code:s}),c}async registerAndJoin(t){const a=await this.resolveInviteCode(t.inviteCode);if(!a.valid||!a.organizationName)throw new Error(a.message??"邀请码不正确或已失效，请向机构管理员确认。");if(!/^\d{6}$/.test(t.verificationCode.trim()))throw new Error("验证码不正确或已过期");const s=this.normalizeContactKey(t.account),o=`register_join:${s}`;if(!this.sentCodeTargets.has(o))throw new Error("请先获取验证码");const i=t.account.includes("@")?"email":"phone";if(this.isContactOccupied(i,t.account))throw new Error("该账户已注册，请直接登录或联系机构管理员发送定向邀请。");if(this.pendingApprovalAccounts.has(s))throw new Error("该账户已提交加入申请，正在等待机构管理员审批。");this.sentCodeTargets.delete(o);const c=`JR-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,y=`wt-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`,p={requestId:c,organizationName:a.organizationName,maskedAccount:this.maskTarget(t.account),status:"pending_approval",submittedAt:new Date().toISOString(),withdrawToken:y};return this.joinReceipts.set(c,p),this.joinWithdrawTokens.set(c,y),this.joinAccountByRequestId.set(c,s),this.pendingApprovalAccounts.add(s),this.record("REST","registerAndJoin","POST /api/v1/auth/register-join",p,{organizationName:a.organizationName,displayName:t.displayName}),p}async withdrawJoinApplication(t,a){const s=this.joinWithdrawTokens.get(t);if(s&&a!==s)throw new Error("撤回凭证无效或已失效，请刷新后重试。");this.joinReceipts.delete(t),this.joinWithdrawTokens.delete(t);const o=this.joinAccountByRequestId.get(t);o&&(this.pendingApprovalAccounts.delete(o),this.joinAccountByRequestId.delete(t)),this.record("REST","withdrawJoinApplication",`DELETE /api/v1/org/join-requests/${t}`,{ok:!0})}async submitOrgApplication(t){if(!/^\d{6}$/.test(t.smsCode.trim()))throw new Error("验证码不正确或已过期");const a=`org_apply:${this.normalizeContactKey(t.phone)}`;if(!this.sentCodeTargets.has(a))throw new Error("请先获取短信验证码");this.sentCodeTargets.delete(a);const s=t.province===t.city?t.province:`${t.province} ${t.city}`,o={applicationId:`APP-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,organizationName:t.organizationName.trim(),region:s,maskedEmail:this.maskTarget(t.email),status:"pending_review",submittedAt:new Date().toISOString()};return this.record("REST","submitOrgApplication","POST /api/v1/org/applications",o,{organizationName:o.organizationName,region:s}),o}async getInvitationPreview(t){const a=t.trim(),s=this.orgs[0]?.name??"广州国家实验室",o=new Date(Date.now()+7*864e5).toISOString().slice(0,10);return a==="expired"?{token:a,kind:"member",organizationName:s,inviterName:"林致远",role:"operator",roleLabel:ft.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!1,requiredSecondaryChannel:null,expiresAt:"2026-11-20",status:"expired"}:a==="revoked"?{token:a,kind:"member",organizationName:s,inviterName:"林致远",role:"operator",roleLabel:ft.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!1,requiredSecondaryChannel:null,expiresAt:o,status:"revoked"}:a==="accepted"?{token:a,kind:"member",organizationName:s,inviterName:"林致远",role:"operator",roleLabel:ft.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!0,requiredSecondaryChannel:null,expiresAt:o,status:"accepted"}:a.startsWith("owner")?{token:a,kind:"owner",organizationName:"广州天环智能科技有限公司",role:"org_admin",roleLabel:ft.org_admin,targetChannel:"email",targetValue:"chen@company.com",prefillName:"陈志远",accountExists:!1,requiredSecondaryChannel:null,verifiedSecondaryMasked:"139 •••• 9000",expiresAt:o,status:"pending"}:a==="admin-email"?{token:a,kind:"member",organizationName:s,inviterName:"林致远",role:"org_admin",roleLabel:ft.org_admin,targetChannel:"email",targetValue:"zhao.admin@pacom.cn",prefillName:"赵启明",accountExists:!1,requiredSecondaryChannel:ha("member","org_admin","email"),expiresAt:o,status:"pending"}:a==="admin-phone"?{token:a,kind:"member",organizationName:s,inviterName:"林致远",role:"org_admin",roleLabel:ft.org_admin,targetChannel:"phone",targetValue:"13900139088",prefillName:"赵启明",accountExists:!1,requiredSecondaryChannel:ha("member","org_admin","phone"),expiresAt:o,status:"pending"}:a==="project-admin-email"?{token:a,kind:"member",organizationName:s,inviterName:"林致远",role:"project_admin",roleLabel:ft.project_admin,targetChannel:"email",targetValue:"wu.proj@pacom.cn",prefillName:"吴承志",accountExists:!1,requiredSecondaryChannel:ha("member","project_admin","email"),expiresAt:o,status:"pending"}:a==="project-admin-phone"?{token:a,kind:"member",organizationName:s,inviterName:"林致远",role:"project_admin",roleLabel:ft.project_admin,targetChannel:"phone",targetValue:"13700137066",prefillName:"吴承志",accountExists:!1,requiredSecondaryChannel:ha("member","project_admin","phone"),expiresAt:o,status:"pending"}:a==="existing-demo"?{token:a,kind:"member",organizationName:"天环智慧园区",inviterName:"林致远",role:"operator",roleLabel:ft.operator,targetChannel:"email",targetValue:"zhou.ning@pacom.cn",prefillName:"周宁",accountExists:!0,requiredSecondaryChannel:null,expiresAt:o,status:"pending"}:{token:a||"member-demo",kind:"member",organizationName:s,inviterName:"林致远",role:"operator",roleLabel:ft.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",prefillName:"林明远",accountExists:!1,requiredSecondaryChannel:null,expiresAt:o,status:"pending"}}normalizeContactKey(t){return t.trim().toLowerCase().replace(/[\s\-()]/g,"")}isContactOccupied(t,a){const s=this.normalizeContactKey(a);return Object.values(St).some(o=>{const i=t==="email"?o.email:o.phone;return!!i&&this.normalizeContactKey(i)===s})}async acceptInvitation(t){const a=await this.getInvitationPreview(t.token);if(a.status!=="pending")throw new Error("邀请已过期或已失效，请联系邀请人重新发送。");const s=a.kind==="owner"?"org_admin":a.role??"operator",o=this.activeSession;if(!!o&&(a.targetChannel==="email"&&!!o?.email&&this.normalizeContactKey(o.email)===this.normalizeContactKey(a.targetValue)||a.targetChannel==="phone"&&!!o?.phone&&this.normalizeContactKey(o.phone)===this.normalizeContactKey(a.targetValue))&&o){const v=structuredClone(o);return this.activeSession=v,this.applyOverridesToSession(),sessionStorage.setItem(va,v.role),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${t.token}/accept`,v),this.pushAudit("auth.invite.accept",v.userId,"success","已有账户确认加入"),structuredClone(v)}if(a.accountExists)throw new Error("该账户已注册，请使用原账户登录后再接受邀请。");const c=a.requiredSecondaryChannel!==void 0?a.requiredSecondaryChannel:ha(a.kind,a.role,a.targetChannel);let y="";if(c){const v=(t.secondaryContact??"").trim(),h=(t.secondaryVerificationCode??"").trim();if(!v)throw new Error(c==="phone"?"请补充并验证手机号码":"请补充并验证电子邮箱");if(!/^\d{6}$/.test(h))throw new Error("验证码不正确或已过期");const w=`bind:${this.normalizeContactKey(v)}`;if(!this.sentCodeTargets.has(w))throw new Error("请先获取验证码");if(this.isContactOccupied(c,v))throw new Error(c==="phone"?"该手机号码已绑定其他账户，请更换后重试；如原账户为你本人所有，请使用原账户登录或联系管理员重新邀请。":"该电子邮箱已绑定其他账户，请更换后重试；如原账户为你本人所有，请使用原账户登录或联系管理员重新邀请。");this.sentCodeTargets.delete(w),y=v}const p=structuredClone(St[s]);return t.displayName?.trim()&&(p.displayName=t.displayName.trim()),a.targetChannel==="email"?(p.email=a.targetValue,p.phone=y||(a.kind==="owner"?"13900139000":void 0)):(p.phone=a.targetValue,p.email=y||void 0),this.activeSession=p,this.applyOverridesToSession(),sessionStorage.setItem(va,s),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${t.token}/accept`,p),this.pushAudit("auth.invite.accept",p.userId,"success"),structuredClone(p)}async switchDemoRole(t){return this.activeSession=structuredClone(St[t]),this.applyOverridesToSession(),sessionStorage.setItem(va,t),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${t}`,this.activeSession),structuredClone(this.activeSession)}loadLegacySpatial(){try{if(typeof localStorage<"u"){const t=localStorage.getItem(An);if(t){const a=JSON.parse(t);if(Array.isArray(a?.projects)&&Array.isArray(a?.buildings)&&Array.isArray(a?.floors)&&Array.isArray(a?.zones))return a}}}catch{}return structuredClone(Xn)}loadOrgs(){try{if(typeof localStorage<"u"){const t=localStorage.getItem(Dn);if(t){const a=JSON.parse(t);if(Array.isArray(a)&&a.length>0&&a.every(s=>s?.id&&s?.name&&Array.isArray(s?.spatial?.projects)))return a}}}catch{}return[{id:tt,name:"广州国家实验室",spatial:this.loadLegacySpatial()}]}persistSpatial(){const t=this.orgs.find(a=>a.id===this.activeOrgId);t&&(t.spatial=this.spatial),this.syncAdminScopesFromSpatial();try{typeof localStorage<"u"&&(localStorage.setItem(Dn,JSON.stringify(this.orgs)),localStorage.setItem(Cn,this.activeOrgId),this.activeOrgId===tt&&localStorage.setItem(An,JSON.stringify(this.spatial)))}catch{}}async listOrganizations(){return this.orgs.map(t=>({id:t.id,name:t.name,projectCount:t.spatial.projects.length}))}getActiveOrganizationId(){return this.activeOrgId}loadDeployExtensions(){try{if(typeof localStorage<"u"){const t=localStorage.getItem(`${Ln}.${this.activeOrgId}`);if(t){const a=JSON.parse(t),s=this.activeOrgId===tt?Fn():{extraDevices:[],lightMarkers:[],meshRoles:{},edgeSyncByFloor:{},deviceParams:{},groups:[],docs:[],planChangeAlerts:{},floorFttRecords:{},configRevisionByFloor:{},layoutRevisionByFloor:{},deliverySnapshotMeta:{},deferredFloorIds:[]};return{extraDevices:Array.isArray(a.extraDevices)?a.extraDevices:s.extraDevices,seedDevicesOverride:Array.isArray(a.seedDevicesOverride)?a.seedDevicesOverride:void 0,lightMarkers:Array.isArray(a.lightMarkers)?a.lightMarkers:s.lightMarkers,meshRoles:a.meshRoles&&typeof a.meshRoles=="object"?a.meshRoles:s.meshRoles,edgeSyncByFloor:a.edgeSyncByFloor&&typeof a.edgeSyncByFloor=="object"?a.edgeSyncByFloor:s.edgeSyncByFloor,deviceParams:a.deviceParams&&typeof a.deviceParams=="object"?a.deviceParams:s.deviceParams,groups:Array.isArray(a.groups)?a.groups:s.groups,docs:Array.isArray(a.docs)?a.docs:s.docs,connectionsOverride:Array.isArray(a.connectionsOverride)?a.connectionsOverride:void 0,deliveryBatchesOverride:Array.isArray(a.deliveryBatchesOverride)?a.deliveryBatchesOverride:void 0,planChangeAlerts:a.planChangeAlerts&&typeof a.planChangeAlerts=="object"?a.planChangeAlerts:s.planChangeAlerts,floorFttRecords:a.floorFttRecords&&typeof a.floorFttRecords=="object"?a.floorFttRecords:s.floorFttRecords,configRevisionByFloor:a.configRevisionByFloor&&typeof a.configRevisionByFloor=="object"?a.configRevisionByFloor:s.configRevisionByFloor,layoutRevisionByFloor:a.layoutRevisionByFloor&&typeof a.layoutRevisionByFloor=="object"?a.layoutRevisionByFloor:s.layoutRevisionByFloor,deliverySnapshotMeta:a.deliverySnapshotMeta&&typeof a.deliverySnapshotMeta=="object"?a.deliverySnapshotMeta:s.deliverySnapshotMeta,deferredFloorIds:Array.isArray(a.deferredFloorIds)?a.deferredFloorIds:s.deferredFloorIds}}}}catch{}return this.activeOrgId===tt?Fn():{extraDevices:[],lightMarkers:[],meshRoles:{},edgeSyncByFloor:{},deviceParams:{},groups:[],docs:[],planChangeAlerts:{},floorFttRecords:{},configRevisionByFloor:{},layoutRevisionByFloor:{},deliverySnapshotMeta:{},deferredFloorIds:[]}}persistDeployExtensions(){try{typeof localStorage<"u"&&localStorage.setItem(`${Ln}.${this.activeOrgId}`,JSON.stringify(this.deployExt))}catch{}}findAllDevices(){return[...this.activeOrgId===tt?this.devices:[],...this.deployExt.extraDevices]}markEdgeSyncDirty(t){const a=this.deployExt.edgeSyncByFloor[t]??{version:1,dirty:!1,lastSyncedAt:null};this.deployExt.edgeSyncByFloor[t]={...a,dirty:!0}}getFloorElectricalSignature(t){const a=this.deployExt.configRevisionByFloor[t]??1,s=this.spatial.floors.find(o=>o.id===t)?.plan?.planVersion??0;return`cfg-${a}-plan-${s}`}getFloorConfigSignature(t){const a=this.deployExt.configRevisionByFloor[t]??1,s=this.deployExt.layoutRevisionByFloor[t]??1,o=this.spatial.floors.find(i=>i.id===t)?.plan?.planVersion??0;return`cfg-${a}-lay-${s}-plan-${o}`}invalidateFloorVerification(t,a=!0){this.deployExt.configRevisionByFloor[t]=(this.deployExt.configRevisionByFloor[t]??1)+1,delete this.deployExt.floorFttRecords[t],a&&this.markEdgeSyncDirty(t)}summarizeDeviceParams(t){const a=this.deployExt.deviceParams[t.id];return a?t.category==="hvac"?`制冷≥${a.coolMinC??22}°C / 制热≤${a.heatMaxC??26}°C / 节能${a.unoccupiedDelayMin??20}分`:t.category==="gateway"?`心跳${a.heartbeatSec??30}s / 断网自治${a.offlineHoldMin??120}分`:t.category==="meter"?`轮询${a.pollSec??15}s / CT×${a.ctRatio??1}`:`关灯${a.offDelayMin}分 / 恢复${a.restoreMin}分 / ${a.luxOn}–${a.luxOff}lx`:"默认出厂参数"}buildSnapshotMetaForFloor(t,a){const s=this.spatial.floors.find(v=>v.id===a),o=this.findAllDevices().filter(v=>v.floorId===a),i=new Map(o.map(v=>[v.id,v.name])),c=new Map(this.spatial.zones.map(v=>[v.id,v.name])),y=this.deployExt.edgeSyncByFloor[a]??{version:1},p=this.deployExt.floorFttRecords[a]??null;return{batchId:t,floorId:a,floorName:s?.name??a,planVersion:s?.plan?.planVersion??0,edgeSyncVersion:y.version,configSignature:this.getFloorConfigSignature(a),fttPassedAt:p?.passedAt??null,snapshotSource:"recorded",devices:o.map(v=>({id:v.id,name:v.name,category:v.category,zoneId:v.logicalZoneId,zoneLabel:v.logicalZoneId?c.get(v.logicalZoneId)??"未分配功能区":"未分配功能区",placed:!!v.planPoint,planX:v.planPoint?.x,planY:v.planPoint?.y,bound:!!v.hardwareBinding,gatewayName:v.hardwareBinding?.gatewayId?i.get(v.hardwareBinding.gatewayId)??v.hardwareBinding.gatewayId:void 0,protocol:v.hardwareBinding?.protocol,address:v.hardwareBinding?.networkAddress,portOrChannel:v.hardwareBinding?.portOrChannel,paramsSummary:this.summarizeDeviceParams(v),physicalInstalled:v.physicalInstalled,connectivity:v.connectivity}))}}async switchOrganization(t){const a=this.orgs.find(s=>s.id===t);if(!a)throw new Error(`404 NOT_FOUND: 机构 ${t} 不存在`);this.activeOrgId=a.id,this.spatial=a.spatial,this.deployExt=this.loadDeployExtensions(),this.deliveryBatches=this.deployExt.deliveryBatchesOverride?structuredClone(this.deployExt.deliveryBatchesOverride):this.activeOrgId===tt?[{id:"dlv-e7f-20261120",projectId:R.projectId,floorId:R.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}]:[],this.persistSpatial()}async createOrganization(t){if(this.requireSession().role!=="org_admin")throw new Error("403 FORBIDDEN: 仅机构管理员可新建机构");const s=t.trim()||"新建机构",o={id:`org-${Date.now().toString(36)}`,name:s,spatial:{projects:[],buildings:[],floors:[],zones:[]}};return this.orgs.push(o),this.activeOrgId=o.id,this.spatial=o.spatial,this.deployExt=this.loadDeployExtensions(),this.deliveryBatches=[],this.persistSpatial(),this.pushAudit("org.create",o.id,"success",s),{id:o.id,name:o.name,projectCount:0}}syncAdminScopesFromSpatial(){const t=this.spatial.projects.map(o=>o.id),a=this.spatial.buildings.map(o=>o.id),s=this.spatial.floors.map(o=>o.id);this.activeOrgId===tt&&(St.org_admin.scope.allowedProjectIds=[...t],St.org_admin.scope.allowedBuildingIds=[...a],St.org_admin.scope.allowedFloorIds=[...s],St.project_admin.scope.allowedProjectIds=[...t],St.project_admin.scope.allowedBuildingIds=[...a],St.project_admin.scope.allowedFloorIds=[...s]),this.activeSession&&(this.activeOrgId!==tt||this.activeSession.role==="org_admin"||this.activeSession.role==="project_admin"||this.activeSession.scope.canEditDeployment)&&(this.activeSession.scope.allowedProjectIds=[...t],this.activeSession.scope.allowedBuildingIds=[...a],this.activeSession.scope.allowedFloorIds=[...s])}async getSpatialTree(){const t=this.requireSession();if(this.activeOrgId!==tt){const v=structuredClone(this.spatial);return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:v.projects.length,buildings:v.buildings.length,floors:v.floors.length}),v}const a=this.spatial.projects.filter(v=>t.scope.allowedProjectIds.includes(v.id)),s=this.spatial.buildings.filter(v=>t.scope.allowedBuildingIds.includes(v.id)),o=new Set(s.map(v=>v.id)),i=this.spatial.floors.filter(v=>o.has(v.buildingId)),c=new Set(i.map(v=>v.id)),y=this.spatial.zones.filter(v=>c.has(v.floorId)),p=structuredClone({projects:a,buildings:s,floors:i,zones:y});return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:p.projects.length,buildings:p.buildings.length,floors:p.floors.length}),p}async createProject(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权创建项目`);const s={id:`project-${Date.now().toString(36)}`,name:t.name.trim()||"新建项目",city:t.city?.trim()||"广州市",address:t.address?.trim()||"",timezone:"Asia/Shanghai",location:t.location,imageUrl:t.imageUrl??"./media/gzlab.jpg"};return this.spatial.projects.push(s),a.scope.allowedProjectIds.includes(s.id)||a.scope.allowedProjectIds.push(s.id),this.persistSpatial(),this.record("REST","createProject","POST /api/v1/projects",s,t),this.pushAudit("project.create",s.id,"success",s.name),structuredClone(s)}async updateProject(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改项目配置`);const o=this.spatial.projects.find(i=>i.id===t);if(!o)throw new Error(`404 NOT_FOUND: 项目 ${t} 不存在`);return a.name!==void 0&&(o.name=a.name.trim()||o.name),a.city!==void 0&&(o.city=a.city.trim()),a.address!==void 0&&(o.address=a.address.trim()),a.location!==void 0&&(o.location=a.location),a.imageUrl!==void 0&&(o.imageUrl=a.imageUrl),this.persistSpatial(),this.record("REST","updateProject",`PATCH /api/v1/projects/${t}`,o,a),this.pushAudit("project.update",t,"success",o.name),structuredClone(o)}async deleteProject(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除项目`);if(t===R.projectId)throw new Error("400 BAD_REQUEST: 当前项目包含运行中设备，请先清理后再删除");const s=new Set(this.spatial.buildings.filter(i=>i.projectId===t).map(i=>i.id)),o=new Set(this.spatial.floors.filter(i=>s.has(i.buildingId)).map(i=>i.id));this.spatial.projects=this.spatial.projects.filter(i=>i.id!==t),this.spatial.buildings=this.spatial.buildings.filter(i=>i.projectId!==t),this.spatial.floors=this.spatial.floors.filter(i=>!s.has(i.buildingId)),this.spatial.zones=this.spatial.zones.filter(i=>!o.has(i.floorId)),this.persistSpatial(),this.record("REST","deleteProject",`DELETE /api/v1/projects/${t}`,{ok:!0}),this.pushAudit("project.delete",t,"success")}async upsertBuilding(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护楼宇`);let s=t.id?this.spatial.buildings.find(o=>o.id===t.id):void 0;return s?(s.name=t.name.trim()||s.name,s.aboveFloors=Math.max(0,t.aboveFloors),s.belowFloors=Math.max(0,t.belowFloors),s.hasRoof=t.hasRoof,t.areaSqm!==void 0&&(s.areaSqm=t.areaSqm),t.imageUrl!==void 0&&(s.imageUrl=t.imageUrl)):(s={id:`building-${Date.now().toString(36)}`,projectId:t.projectId,name:t.name.trim()||"新建楼宇",aboveFloors:Math.max(1,t.aboveFloors),belowFloors:Math.max(0,t.belowFloors),hasRoof:t.hasRoof,areaSqm:t.areaSqm??null,imageUrl:t.imageUrl??"./media/building-e.webp"},this.spatial.buildings.push(s)),this.persistSpatial(),this.record("REST","upsertBuilding","PUT /api/v1/buildings",s,t),this.pushAudit("building.upsert",s.id,"success",s.name),structuredClone(s)}async deleteBuilding(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除楼宇`);if(t===R.buildingId)throw new Error("400 BAD_REQUEST: 当前楼宇包含运行中设备，请先解绑后再删除");const s=new Set(this.spatial.floors.filter(o=>o.buildingId===t).map(o=>o.id));this.spatial.buildings=this.spatial.buildings.filter(o=>o.id!==t),this.spatial.floors=this.spatial.floors.filter(o=>o.buildingId!==t),this.spatial.zones=this.spatial.zones.filter(o=>!s.has(o.floorId)),this.persistSpatial(),this.record("REST","deleteBuilding",`DELETE /api/v1/buildings/${t}`,{ok:!0}),this.pushAudit("building.delete",t,"success")}async upsertFloor(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护楼层`);const s=new Date().toISOString();let o=t.id?this.spatial.floors.find(i=>i.id===t.id):void 0;if(o){if(o.name=t.name.trim()||o.name,o.kind=t.kind,o.level=t.level,t.areaSqm!==void 0&&(o.areaSqm=t.areaSqm),t.planImageUrl!==void 0){const i=!!o.plan?.imageUrl,c=o.plan?.planVersion??0,y=!!(t.planImageUrl&&i&&t.planImageUrl!==o.plan?.imageUrl),p=this.findAllDevices().some(v=>v.floorId===o.id);o.plan=t.planImageUrl?{floorId:o.id,imageUrl:t.planImageUrl,planVersion:c+1,updatedAt:s}:null,y&&p?(this.deployExt.planChangeAlerts[o.id]={floorId:o.id,planChangedAt:s,previousVersion:c,currentVersion:c+1},this.invalidateFloorVerification(o.id,!1),this.persistDeployExtensions()):t.planImageUrl||(delete this.deployExt.planChangeAlerts[o.id],this.invalidateFloorVerification(o.id,!1),this.persistDeployExtensions())}}else{const i=`floor-${t.buildingId.slice(-6)}-${t.kind}-${Math.abs(t.level)}-${Date.now().toString(36).slice(-3)}`;o={id:i,buildingId:t.buildingId,kind:t.kind,level:t.level,name:t.name.trim()||`${t.level}F`,areaSqm:t.areaSqm??null,plan:t.planImageUrl?{floorId:i,imageUrl:t.planImageUrl,planVersion:1,updatedAt:s}:null},this.spatial.floors.push(o),this.activeSession&&!this.activeSession.scope.allowedFloorIds.includes(o.id)&&this.activeSession.scope.allowedFloorIds.push(o.id)}return this.persistSpatial(),this.record("REST","upsertFloor","PUT /api/v1/floors",{id:o.id,name:o.name,hasPlan:!!o.plan}),this.pushAudit("floor.upsert",o.id,"success",o.name),structuredClone(o)}async deleteFloor(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除楼层`);const s=this.findAllDevices().filter(o=>o.floorId===t).length;if(s>0)throw new Error(`400 BAD_REQUEST: 当前楼层已关联 ${s} 台设备，请先清理或解绑后再删除`);this.spatial.floors=this.spatial.floors.filter(o=>o.id!==t),this.spatial.zones=this.spatial.zones.filter(o=>o.floorId!==t),delete this.deployExt.planChangeAlerts[t],delete this.deployExt.floorFttRecords[t],this.persistSpatial(),this.persistDeployExtensions(),this.record("REST","deleteFloor",`DELETE /api/v1/floors/${t}`,{ok:!0}),this.pushAudit("floor.delete",t,"success")}async upsertZone(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护功能区`);let s=t.id?this.spatial.zones.find(o=>o.id===t.id):void 0;return s?(s.name=t.name.trim()||s.name,s.category=t.category):(s={id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,floorId:t.floorId,name:t.name.trim(),category:t.category},this.spatial.zones.push(s)),this.deployExt.layoutRevisionByFloor[s.floorId]=(this.deployExt.layoutRevisionByFloor[s.floorId]??1)+1,this.persistSpatial(),this.persistDeployExtensions(),this.record("REST","upsertZone","PUT /api/v1/zones",s),this.pushAudit("zone.upsert",s.id,"success",s.name),structuredClone(s)}async deleteZone(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除功能区`);const s=this.spatial.zones.find(i=>i.id===t);this.spatial.zones=this.spatial.zones.filter(i=>i.id!==t);let o=!1;this.devices.forEach(i=>{i.logicalZoneId===t&&(i.logicalZoneId=null,o=!0)}),this.deployExt.extraDevices.forEach(i=>{i.logicalZoneId===t&&(i.logicalZoneId=null)}),o&&this.activeOrgId===tt&&(this.deployExt.seedDevicesOverride=structuredClone(this.devices)),s&&(this.deployExt.layoutRevisionByFloor[s.floorId]=(this.deployExt.layoutRevisionByFloor[s.floorId]??1)+1),this.persistSpatial(),this.persistDeployExtensions(),this.record("REST","deleteZone",`DELETE /api/v1/zones/${t}`,{ok:!0}),this.pushAudit("zone.delete",t,"success")}async copyZonesToFloors(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权复制功能区`);const o=this.spatial.floors.find(y=>y.id===t),i=this.spatial.zones.filter(y=>y.floorId===t);if(!o||i.length===0)return 0;let c=0;for(const y of a){if(y===t)continue;const p=this.spatial.floors.find(h=>h.id===y);if(!p)continue;const v=new Set(this.spatial.zones.filter(h=>h.floorId===y).map(h=>h.name));for(const h of i){const w=h.name.replace(new RegExp(`^${o.name}\\s*`,"i"),""),x=`${p.name} ${w}`.trim();v.has(x)||(this.spatial.zones.push({id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,floorId:y,name:x,category:h.category}),v.add(x),c+=1)}}return c>0&&this.persistSpatial(),this.record("REST","copyZonesToFloors","POST /api/v1/zones/copy",{sourceFloorId:t,targetCount:a.length,added:c}),c}async getFloorDevices(t){const a=this.requireSession();if(!t)return[];if(this.activeOrgId===tt&&!a.scope.allowedFloorIds.includes(t)){const o={code:"FORBIDDEN",status:403,message:`当前角色「${a.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,o),this.pushAudit("floor.read",t,"denied",o.message),new Error(`403 FORBIDDEN: ${o.message}`)}let s=structuredClone(this.findAllDevices().filter(o=>o.floorId===t));return a.scope.allowedZoneIds?.length&&(s=s.filter(o=>o.logicalZoneId&&a.scope.allowedZoneIds.includes(o.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,{count:s.length}),s}async dispatchControlBatch(t){const a=this.requireSession();if(!a.scope.canControlDevices||!a.scope.allowedFloorIds.includes(t.floorId))throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权下发控制指令`);const s=`batch-e7f-${Date.now().toString(36)}`,o={batchId:s,floorId:t.floorId,createdBy:a.userId,createdAt:new Date().toISOString(),receipts:t.targets.map(i=>({deviceId:i.deviceId,command:i.command,targetValue:i.targetValue,status:"queued"}))};return this.batches.set(s,o),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",o,t),this.pushAudit("control.dispatch",s,"success",`下发 ${t.targets.length} 台设备`),o.receipts.forEach((i,c)=>{const y=this.devices.find(p=>p.id===i.deviceId);setTimeout(()=>{i.status="dispatched",i.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:s,deviceId:i.deviceId,status:"dispatched",at:i.dispatchedAt})},280+c*120),setTimeout(()=>{const p=new Date().toISOString();!y||y.connectivity==="offline"?(i.status="timeout",i.errorCode="GATEWAY_READBACK_TIMEOUT",i.errorMessage="设备离线，网关未收到回读确认",i.verifiedAt=p):(i.status="verified_success",i.observedValue=i.targetValue,i.verifiedAt=p,this.applyObservedTelemetry(y,i.command,i.targetValue,p)),this.emit({type:"control.receipt.updated",batchId:s,deviceId:i.deviceId,status:i.status,observedValue:i.observedValue,at:p})},900+c*220)}),structuredClone(o)}applyObservedTelemetry(t,a,s,o){a==="lighting.dimming"&&t.telemetry.dimming?(t.telemetry.dimming={...t.telemetry.dimming,value:s,collectedAt:o,stale:!1},t.telemetry.power&&(t.telemetry.power={...t.telemetry.power,value:Number(s)>0,collectedAt:o,stale:!1})):(a==="lighting.power"||a==="hvac.power")&&t.telemetry.power?t.telemetry.power={...t.telemetry.power,value:s,collectedAt:o,stale:!1}:a==="hvac.setpoint"&&t.telemetry.setpoint&&(t.telemetry.setpoint={...t.telemetry.setpoint,value:s,collectedAt:o,stale:!1}),this.emit({type:"telemetry.updated",floorId:t.floorId,deviceId:t.id,collectedAt:o,values:{[a]:s}})}async getControlBatch(t){this.requireSession();const a=this.batches.get(t);if(!a)throw new Error(`404 NOT_FOUND: 批次 ${t} 不存在`);return structuredClone(a)}async listAlarms(t){const a=this.requireSession();return this.activeOrgId!==tt?[]:!a.scope.allowedFloorIds.includes(t)||t!==R.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(t,a){const s=this.requireSession();if(!s.scope.canManageAlarms){const i=`角色「${s.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",t,"denied",i),new Error(`403 FORBIDDEN: ${i}`)}const o=this.alarms.find(i=>i.id===t);if(!o)throw new Error(`404 NOT_FOUND: 告警 ${t} 不存在`);return o.status="acknowledged",o.acknowledgedAt=new Date().toISOString(),o.acknowledgedBy=s.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${t}/acknowledge`,o,{note:a}),this.pushAudit("alarm.acknowledge",t,"success",a),this.emit({type:"alarm.changed",floorId:o.floorId,alarmId:t,status:"acknowledged",at:o.acknowledgedAt}),structuredClone(o)}async listWorkOrders(t){const a=this.requireSession();return this.activeOrgId!==tt?[]:!a.scope.allowedFloorIds.includes(t)||t!==R.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(t){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权创建工单`);const s=new Date().toISOString(),o={id:`wo-e7f-${Date.now().toString(36)}`,projectId:R.projectId,buildingId:R.buildingId,floorId:t.floorId,deviceId:t.deviceId??null,alarmId:t.alarmId??null,title:t.title,description:t.description,status:"open",assigneeId:null,createdAt:s,updatedAt:s};if(this.workOrders.unshift(o),t.alarmId){const i=this.alarms.find(c=>c.id===t.alarmId);i&&(i.workOrderId=o.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",o,t),this.pushAudit("work_order.create",o.id,"success",o.title),structuredClone(o)}async updateWorkOrderStatus(t,a){const s=this.requireSession();if(!s.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权流转工单`);const o=this.workOrders.find(i=>i.id===t);if(!o)throw new Error(`404 NOT_FOUND: 工单 ${t} 不存在`);return o.status=a,o.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${t}`,o,{status:a}),this.pushAudit("work_order.update",t,"success",`状态更新为 ${a}`),structuredClone(o)}async updateDevicePlanPoint(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw this.pushAudit("device.plan_point",t.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权编辑图纸标记`);const s=this.activeOrgId===tt?this.devices.find(p=>p.id===t.deviceId):void 0,o=s?void 0:this.deployExt.extraDevices.find(p=>p.id===t.deviceId),i=s??o;if(!i)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(i.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${i.version}，请刷新后重试`);const c=Number(t.x.toFixed(4)),y=Number(t.y.toFixed(4));return i.planPoint&&i.planPoint.floorId===t.floorId&&i.planPoint.planVersion===t.planVersion&&Math.abs(i.planPoint.x-c)<1e-4&&Math.abs(i.planPoint.y-y)<1e-4||(i.planPoint={floorId:t.floorId,planVersion:t.planVersion,x:c,y},i.version+=1,s&&this.activeOrgId===tt&&(this.deployExt.seedDevicesOverride=structuredClone(this.devices)),this.deployExt.layoutRevisionByFloor[i.floorId]=(this.deployExt.layoutRevisionByFloor[i.floorId]??1)+1,this.persistDeployExtensions(),this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${t.deviceId}/plan-point`,i,t),this.pushAudit("device.plan_point",t.deviceId,"success",`坐标更新 (${i.planPoint.x}, ${i.planPoint.y})`)),structuredClone(i)}async updateDeviceHardwareBinding(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权修改硬件绑定`);const s=this.activeOrgId===tt?this.devices.find(y=>y.id===t.deviceId):void 0,o=s?void 0:this.deployExt.extraDevices.find(y=>y.id===t.deviceId),i=s??o;if(!i)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(i.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${i.version}）`);const c=new Date().toISOString();return i.physicalInstalled=t.physicalInstalled,i.physicalVerifiedAt=t.physicalInstalled?c:null,i.hardwareBinding={gatewayId:t.gatewayId,protocol:t.protocol,networkAddress:t.networkAddress,portOrChannel:t.portOrChannel,boundAt:c,boundBy:a.displayName},i.connectivity==="unknown"&&(i.connectivity="online"),i.version+=1,s&&this.activeOrgId===tt&&(this.deployExt.seedDevicesOverride=structuredClone(this.devices)),this.invalidateFloorVerification(i.floorId,!0),this.persistDeployExtensions(),this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${t.deviceId}/hardware-binding`,i,t),this.pushAudit("device.hardware_binding",t.deviceId,"success",`${t.protocol} ${t.networkAddress}`),structuredClone(i)}async listConnections(t){this.requireSession();const a=this.deployExt.connectionsOverride??(this.activeOrgId===tt?this.connections:[]);return structuredClone(t?a.filter(s=>s.projectId===t):a)}async listDeliveryBatches(t){const a=this.requireSession(),s=new Set(a.scope.allowedFloorIds),o=this.activeOrgId===tt;if(t&&o&&!s.has(t))return[];const i=t?this.deliveryBatches.filter(c=>c.floorId===t):o?this.deliveryBatches.filter(c=>s.has(c.floorId)):this.deliveryBatches;return structuredClone(i)}async freezeDeliveryBatch(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权冻结交付批次`);const o=this.spatial.floors.find(ae=>ae.id===t),i=o?this.spatial.buildings.find(ae=>ae.id===o.buildingId):void 0,c=this.findAllDevices().filter(ae=>ae.floorId===t);if(c.length===0)throw new Error("400 BAD_REQUEST: 本层尚无已登记设备，无法生成正式交付冻结快照。");const y=c.filter(ae=>ae.physicalInstalled&&ae.hardwareBinding).length,p=c.filter(ae=>!!ae.planPoint).length,v=c.filter(ae=>ae.connectivity==="online").length,h=this.deployExt.planChangeAlerts[t],w=this.deployExt.edgeSyncByFloor[t]??{dirty:!1},x=this.getFloorConfigSignature(t),L=this.getFloorElectricalSignature(t),_=this.deployExt.floorFttRecords[t],m=_&&!w.dirty&&(!_.electricalSignature||_.electricalSignature===L)?_:null,u=[];if(o?.plan||u.push("缺少平面底图"),p<c.length&&u.push(`尚有 ${c.length-p} 台设备未标记`),y<c.length&&u.push(`尚有 ${c.length-y} 台设备未完成硬件绑定与物理复核`),v<c.length&&u.push(`尚有 ${c.length-v} 台设备未在线入网`),w.dirty&&u.push("存在待同步边缘配置"),h&&u.push("更换底图后尚未复核点位"),m||u.push("配置变更或同步后尚未重新通过全层自检（FTT）"),u.length>0)throw new Error(`400 BAD_REQUEST: 尚未满足正式冻结门槛（${u.join("；")}），可先保存为「阶段留档」。`);const f=this.deliveryBatches.find(ae=>{if(ae.floorId!==t||ae.status==="draft")return!1;const de=this.deployExt.deliverySnapshotMeta[ae.id];return de&&de.snapshotSource!=="legacy_missing"&&de.configSignature===x});if(f)throw f.status==="delivered"?new Error(`400 BAD_REQUEST: 当前配置与图纸点位基线已完成签收交付（${f.versionTag}），无新增变更无需重复冻结，可在下方记录中「查看交付」。`):new Error(`400 BAD_REQUEST: 当前配置与图纸点位基线已正式冻结为「${f.versionTag}」，无新增变更无需重复冻结；如需移交请对既有基线执行「去签收」。`);const T=`${i?.name??"FL"}-${o?.name??t.slice(-4)}`.replace(/\s+/g,""),O=this.deliveryBatches.filter(ae=>ae.floorId===t).map(ae=>{const de=ae.versionTag.match(/-v1\.(\d+)$/);return de?Number(de[1]):-1}).filter(ae=>ae>=0),G=O.length>0?Math.max(...O)+1:0,Y={id:`dlv-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,projectId:i?.projectId??this.spatial.projects[0]?.id??R.projectId,floorId:t,versionTag:`${T}-v1.${G}`,deviceCount:c.length,verifiedCount:y,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:s.displayName,note:a||"全层自检通过，正式交付冻结"};return this.deliveryBatches.unshift(Y),this.deployExt.deliverySnapshotMeta[Y.id]=this.buildSnapshotMetaForFloor(Y.id,t),this.deployExt.deliveryBatchesOverride=structuredClone(this.deliveryBatches),this.persistDeployExtensions(),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${t}/deliveries/freeze`,Y,{note:a}),this.pushAudit("delivery.freeze",Y.id,"success",`${y}/${c.length} 正式冻结`),structuredClone(Y)}async saveDeliveryStageSnapshot(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权生成阶段留档`);const o=this.spatial.floors.find(w=>w.id===t),i=o?this.spatial.buildings.find(w=>w.id===o.buildingId):void 0,c=this.findAllDevices().filter(w=>w.floorId===t);if(c.length===0)throw new Error("400 BAD_REQUEST: 本层尚无已登记设备，请先添加并配置设备后再留档。");const y=c.filter(w=>w.physicalInstalled&&w.hardwareBinding).length,p=`${i?.name??"FL"}-${o?.name??t.slice(-4)}`.replace(/\s+/g,""),v=this.deliveryBatches.filter(w=>w.floorId===t&&w.status==="draft").length+1,h={id:`stg-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,projectId:i?.projectId??this.spatial.projects[0]?.id??R.projectId,floorId:t,versionTag:`${p}-stage-${v}`,deviceCount:c.length,verifiedCount:y,status:"draft",frozenAt:new Date().toISOString(),frozenBy:s.displayName,note:a||"阶段性施工留档（待补齐剩余门控项后正式冻结）"};return this.deliveryBatches.unshift(h),this.deployExt.deliverySnapshotMeta[h.id]=this.buildSnapshotMetaForFloor(h.id,t),this.deployExt.deliveryBatchesOverride=structuredClone(this.deliveryBatches),this.persistDeployExtensions(),this.pushAudit("delivery.stage_snapshot",h.id,"success",`${y}/${c.length} 阶段留档`),structuredClone(h)}async signOffDeliveryBatch(t,a,s){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权执行交付签收`);const i=this.deliveryBatches.find(L=>L.id===t);if(!i)throw new Error(`404 NOT_FOUND: 交付记录 ${t} 不存在`);if(i.status!=="frozen")throw new Error(i.status==="delivered"?"400 BAD_REQUEST: 该基线已完成签收交付。":"400 BAD_REQUEST: 阶段留档（草稿）不可直接签收，请先满足门控并生成正式冻结基线。");const c=a.trim();if(!c)throw new Error("400 BAD_REQUEST: 请填写接收方签收人姓名与部门后再确认签收。");const y=this.deployExt.deliverySnapshotMeta[i.id];if(!y||y.snapshotSource==="legacy_missing"||y.devices.length===0)throw new Error("400 BAD_REQUEST: 该历史基线缺失冻结时刻的原始逐设备证据，禁止直接签收；请完成现场复核与全层自检后重新冻结新版再签收。");if(i.verifiedCount<i.deviceCount)throw new Error(`400 BAD_REQUEST: 该基线核验不完整（${i.verifiedCount}/${i.deviceCount}），禁止正式签收交付；请补齐剩余设备核验后重新冻结。`);const p=this.getFloorConfigSignature(i.floorId);if(this.deliveryBatches.some(L=>L.floorId===i.floorId&&L.id!==i.id&&L.status!=="draft"&&L.frozenAt>i.frozenAt)||!!this.deployExt.planChangeAlerts[i.floorId]||!!this.deployExt.edgeSyncByFloor[i.floorId]?.dirty||y.configSignature!==p)throw new Error("400 BAD_REQUEST: 该冻结基线已过期（现场配置、图纸或点位已发生变更），禁止签收旧版本，请完成新版核验与冻结后再签收。");const w=new Date().toISOString();i.status="delivered";const x=y;return x.signedOffBy=c,x.signedOffAt=w,x.signOffNote=s?.trim()||"现场验收通过，正式签收移交运维",this.deployExt.deliverySnapshotMeta[i.id]=x,this.deployExt.deliveryBatchesOverride=structuredClone(this.deliveryBatches),this.persistDeployExtensions(),this.pushAudit("delivery.sign_off",i.id,"success",`签收人：${c}`),structuredClone(i)}async rejectDeliveryBatch(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权退回整改`);const o=this.deliveryBatches.find(p=>p.id===t);if(!o)throw new Error(`404 NOT_FOUND: 交付记录 ${t} 不存在`);if(o.status!=="frozen")throw new Error("400 BAD_REQUEST: 仅处于「已冻结（待签收）」状态的基线支持退回整改。");const i=this.deployExt.deliverySnapshotMeta[o.id];if(!i||i.snapshotSource==="legacy_missing")throw new Error("400 BAD_REQUEST: 历史缺证基线仅支持只读查阅，请重新核验后冻结新版。");const c=a.trim();if(!c)throw new Error("400 BAD_REQUEST: 请填写具体退回整改原因后再提交。");const y=new Date().toISOString();return o.status="draft",o.note=`退回整改：${c}`,i.rejectedBy=s.displayName,i.rejectedAt=y,i.rejectReason=c,this.deployExt.deliveryBatchesOverride=structuredClone(this.deliveryBatches),this.persistDeployExtensions(),this.pushAudit("delivery.reject",o.id,"success",c),structuredClone(o)}async getDeliverySnapshotMeta(t){const a=this.requireSession(),s=this.deliveryBatches.find(y=>y.id===t);if(!s||this.activeOrgId===tt&&!a.scope.allowedFloorIds.includes(s.floorId))return null;const o=y=>{const p=a.scope.allowedZoneIds;if(!p||p.length===0)return y;const v=new Set(this.spatial.zones.filter(h=>p.includes(h.id)).map(h=>h.name));return{...y,devices:y.devices.filter(h=>h.zoneId?p.includes(h.zoneId):v.has(h.zoneLabel))}},i=this.deployExt.deliverySnapshotMeta[t];if(i)return o(structuredClone(i));const c=this.spatial.floors.find(y=>y.id===s.floorId);return{batchId:s.id,floorId:s.floorId,floorName:c?.name??s.floorId,planVersion:c?.plan?.planVersion??0,edgeSyncVersion:this.deployExt.edgeSyncByFloor[s.floorId]?.version??1,configSignature:"legacy-seed",fttPassedAt:null,snapshotSource:"legacy_missing",devices:[]}}async listDeliverySnapshotMeta(t){const a=this.requireSession(),s=new Set(a.scope.allowedFloorIds),o=this.activeOrgId===tt,i=new Set(this.spatial.floors.filter(y=>y.buildingId===t&&(!o||s.has(y.id))).map(y=>y.id)),c={};for(const y of this.deliveryBatches){if(!i.has(y.floorId))continue;const p=await this.getDeliverySnapshotMeta(y.id);p&&(c[y.id]=p)}return c}async getFloorCurrentSignature(t){return this.requireSession(),this.getFloorConfigSignature(t)}async listDeferredFloorIds(t){this.requireSession();const a=new Set(this.spatial.floors.filter(s=>s.buildingId===t).map(s=>s.id));return this.deployExt.deferredFloorIds.filter(s=>a.has(s))}async toggleFloorDeferred(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权调整本期验收范围`);const o=new Set(this.deployExt.deferredFloorIds);a?o.add(t):o.delete(t),this.deployExt.deferredFloorIds=Array.from(o),this.persistDeployExtensions();const i=this.spatial.floors.find(c=>c.id===t);return i?this.listDeferredFloorIds(i.buildingId):this.deployExt.deferredFloorIds}async createDeploymentDevice(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权新增设备`);const s=`dev-custom-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,o={id:s,name:t.name.trim(),category:t.category,projectId:t.projectId,buildingId:t.buildingId,floorId:t.floorId,logicalZoneId:t.logicalZoneId,planPoint:null,physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"unknown",version:1,telemetry:{}};return this.deployExt.extraDevices.push(o),t.category!=="hvac"&&t.category!=="meter"&&(this.deployExt.meshRoles[s]={proxy:!!t.defaultProxy,relay:!!t.defaultRelay,meshUuid:_n(t.floorId)}),this.invalidateFloorVerification(t.floorId,!0),this.persistDeployExtensions(),this.pushAudit("device.create",s,"success",o.name),structuredClone(o)}async updateDeploymentDevice(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改设备信息`);const o=this.activeOrgId===tt?this.devices.find(y=>y.id===t):void 0,i=o?void 0:this.deployExt.extraDevices.find(y=>y.id===t),c=o??i;if(!c)throw new Error(`404 NOT_FOUND: 设备 ${t} 不存在`);return a.name!==void 0&&a.name.trim()&&(c.name=a.name.trim()),a.logicalZoneId!==void 0&&(c.logicalZoneId=a.logicalZoneId),c.version+=1,o&&this.activeOrgId===tt&&(this.deployExt.seedDevicesOverride=structuredClone(this.devices)),this.invalidateFloorVerification(c.floorId,!0),this.persistDeployExtensions(),this.pushAudit("device.update",t,"success",c.name),structuredClone(c)}async deleteDeploymentDevice(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除设备`);const s=this.findAllDevices().find(o=>o.id===t);if(!s)throw new Error(`404 NOT_FOUND: 设备 ${t} 不存在`);this.devices=this.devices.filter(o=>o.id!==t),this.deployExt.extraDevices=this.deployExt.extraDevices.filter(o=>o.id!==t),this.activeOrgId===tt&&(this.deployExt.seedDevicesOverride=structuredClone(this.devices)),this.deployExt.lightMarkers=this.deployExt.lightMarkers.filter(o=>o.deviceId!==t),this.deployExt.groups=this.deployExt.groups.map(o=>({...o,deviceIds:o.deviceIds.filter(i=>i!==t)})),delete this.deployExt.meshRoles[t],delete this.deployExt.deviceParams[t],this.invalidateFloorVerification(s.floorId,!0),this.persistDeployExtensions(),this.pushAudit("device.delete",t,"success",s.name)}async listLightMarkers(t){return this.requireSession(),structuredClone(this.deployExt.lightMarkers.filter(a=>a.floorId===t))}async addLightMarker(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权编辑回路灯点`);const s={...t,id:`lm-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`};return this.deployExt.lightMarkers.push(s),this.deployExt.layoutRevisionByFloor[t.floorId]=(this.deployExt.layoutRevisionByFloor[t.floorId]??1)+1,this.persistDeployExtensions(),structuredClone(s)}async deleteLightMarker(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除回路灯点`);const s=this.deployExt.lightMarkers.find(o=>o.id===t);this.deployExt.lightMarkers=this.deployExt.lightMarkers.filter(o=>o.id!==t),s&&(this.deployExt.layoutRevisionByFloor[s.floorId]=(this.deployExt.layoutRevisionByFloor[s.floorId]??1)+1),this.persistDeployExtensions()}async listMeshRoles(t){this.requireSession();const a=new Set(this.findAllDevices().filter(o=>o.floorId===t).map(o=>o.id)),s={};for(const[o,i]of Object.entries(this.deployExt.meshRoles))a.has(o)&&(s[o]={...i});return s}async updateMeshRole(t,a,s){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权修改蓝牙 Mesh 节点角色`);const c={...this.deployExt.meshRoles[t]??{proxy:!1,relay:!1,meshUuid:_n(a)},...s};return this.deployExt.meshRoles[t]=c,this.invalidateFloorVerification(a,!0),this.persistDeployExtensions(),{...c}}async getEdgeSyncState(t){return this.requireSession(),{...this.deployExt.edgeSyncByFloor[t]??{version:1,dirty:!1,lastSyncedAt:null}}}async syncEdgeGateway(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权执行边缘同步`);if(!this.findAllDevices().filter(y=>y.floorId===t).some(y=>y.category==="gateway"&&y.connectivity==="online"&&!!y.hardwareBinding))throw new Error("400 BAD_REQUEST: 本层尚无已绑定且在线的边缘网关 / 蓝牙适配器，请先完成网关硬件绑定后再执行同步。");const i=this.deployExt.edgeSyncByFloor[t]??{version:1,dirty:!1};if(!i.dirty){const y={version:i.version,dirty:!1,lastSyncedAt:new Date().toISOString()};return this.deployExt.edgeSyncByFloor[t]=y,this.persistDeployExtensions(),this.pushAudit("edge.sync_verify",t,"success",`边缘基线 v${y.version} 无变更校验通过`),{...y}}const c={version:i.version+1,dirty:!1,lastSyncedAt:new Date().toISOString()};return this.deployExt.edgeSyncByFloor[t]=c,delete this.deployExt.floorFttRecords[t],this.persistDeployExtensions(),this.pushAudit("edge.sync",t,"success",`边缘基线同步至 v${c.version}`),{...c}}async getDeviceParams(t){return this.requireSession(),{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450,coolMinC:22,heatMaxC:26,unoccupiedDelayMin:20,minCycleMin:5,heartbeatSec:30,offlineHoldMin:120,cacheFlushSec:60,pollSec:15,ctRatio:1,demandWindowMin:15,...this.deployExt.deviceParams[t]??{}}}async saveDeviceParams(t,a,s){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权下发设备参数`);return this.deployExt.deviceParams[t]={...s},this.invalidateFloorVerification(a,!0),this.persistDeployExtensions(),{...s}}async listDeviceGroups(t){return this.requireSession(),structuredClone(this.deployExt.groups.filter(a=>a.floorId===t))}async upsertDeviceGroup(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护设备分组`);const s=t.id?this.deployExt.groups.find(i=>i.id===t.id):void 0;let o;return s?(s.name=t.name.trim()||s.name,s.track=t.track,s.groupType=t.groupType,s.includesAdapter=t.includesAdapter,s.deviceIds=[...t.deviceIds],o=s):(o={...t,id:`grp-${Date.now().toString(36)}`,name:t.name.trim(),deviceIds:[...t.deviceIds]},this.deployExt.groups.unshift(o)),o.track==="mesh_auto"&&this.invalidateFloorVerification(o.floorId,!0),this.persistDeployExtensions(),this.pushAudit("device_group.upsert",o.id,"success",o.name),structuredClone(o)}async deleteDeviceGroup(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除设备分组`);const s=this.deployExt.groups.find(o=>o.id===t);this.deployExt.groups=this.deployExt.groups.filter(o=>o.id!==t),s?.track==="mesh_auto"&&this.invalidateFloorVerification(s.floorId,!0),this.persistDeployExtensions(),this.pushAudit("device_group.delete",t,"success")}async listFloorDocs(t){return this.requireSession(),structuredClone(this.deployExt.docs.filter(a=>a.floorId===t))}async attachFloorDoc(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权关联工程资料`);const s={...t,id:`doc-${Date.now().toString(36)}`};return this.deployExt.docs.unshift(s),this.persistDeployExtensions(),structuredClone(s)}async updateFloorDocCategory(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权修改工程资料分类`);const o=this.deployExt.docs.find(i=>i.id===t);if(!o)throw new Error(`404 NOT_FOUND: 工程资料 ${t} 不存在`);return o.category=a.trim()||o.category,this.persistDeployExtensions(),structuredClone(o)}async deleteFloorDoc(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除工程资料`);this.deployExt.docs=this.deployExt.docs.filter(s=>s.id!==t),this.persistDeployExtensions()}async upsertConnection(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护系统接入通道`);const s=this.deployExt.connectionsOverride?[...this.deployExt.connectionsOverride]:this.activeOrgId===tt?structuredClone(this.connections):[],o=t.endpoint.trim(),i=s.find(w=>w.endpoint===o&&w.id!==t.id&&w.projectId===t.projectId);if(i)throw new Error(`端口冲突警告：局域网端点「${o}」已被通道「${i.name}」占用，请更换端口后重试。`);const c=this.findAllDevices().filter(w=>w.projectId===t.projectId&&(!t.buildingId||w.buildingId===t.buildingId)&&(!t.floorId||w.floorId===t.floorId)&&w.hardwareBinding?.protocol===t.protocol),y=c.length*4,p=c.length>0?Math.max(1,c.length):0;let v;const h=t.id?s.find(w=>w.id===t.id):void 0;if(h){const w=h.endpoint!==o;h.name=t.name.trim()||h.name,h.protocol=t.protocol,h.endpoint=o,h.buildingId=t.buildingId,h.floorId=t.floorId??"",w&&h.status!=="connected"&&(h.status="connected"),h.collectedPoints===0&&y>0&&(h.collectedPoints=y,h.calculatedPoints=p),h.lastHeartbeatAt=new Date().toISOString(),v=h}else v={id:`conn-${Date.now().toString(36)}`,projectId:t.projectId,buildingId:t.buildingId,floorId:t.floorId??"",name:t.name.trim(),protocol:t.protocol,endpoint:o,status:"connected",collectedPoints:y,calculatedPoints:p,lastHeartbeatAt:new Date().toISOString()},s.unshift(v);return this.deployExt.connectionsOverride=s,this.connections=structuredClone(s),this.persistDeployExtensions(),this.pushAudit("connection.upsert",v.id,"success",`${v.name} (${v.endpoint})`),structuredClone(v)}async deleteConnection(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除系统接入通道`);const o=(this.deployExt.connectionsOverride?[...this.deployExt.connectionsOverride]:this.activeOrgId===tt?structuredClone(this.connections):[]).filter(i=>i.id!==t);this.deployExt.connectionsOverride=o,this.connections=structuredClone(o),this.persistDeployExtensions(),this.pushAudit("connection.delete",t,"success")}async restartEdgeService(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权重启边缘服务`);this.pushAudit("edge.restart",t,"success","已下发重启边缘服务指令")}async listPlanChangeAlerts(t){this.requireSession();const a=new Set(this.spatial.floors.filter(o=>o.buildingId===t).map(o=>o.id)),s={};for(const[o,i]of Object.entries(this.deployExt.planChangeAlerts))a.has(o)&&(s[o]={...i});return s}async clearPlanChangeAlert(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权确认换图复核`);delete this.deployExt.planChangeAlerts[t],this.persistDeployExtensions()}async getFloorFttRecord(t){this.requireSession();const a=this.deployExt.floorFttRecords[t];if(!a)return null;const s=this.deployExt.edgeSyncByFloor[t]??{dirty:!1},o=this.getFloorElectricalSignature(t);return s.dirty||this.deployExt.planChangeAlerts[t]||a.electricalSignature&&a.electricalSignature!==o?null:{...a}}async recordFloorFttPass(t,a){const s=this.requireSession();if(!s.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${s.roleLabel}」无权登记全层自检凭证`);const o=this.deployExt.edgeSyncByFloor[t]??{version:1},i={floorId:t,passedAt:new Date().toISOString(),deviceCount:a,edgeSyncVersion:o.version,configSignature:this.getFloorConfigSignature(t),electricalSignature:this.getFloorElectricalSignature(t),mode:"demo_sim"};return this.deployExt.floorFttRecords[t]=i,this.persistDeployExtensions(),{...i}}async getAnalysisReport(t,a,s){this.requireSession();const o=a==="today"?1:a==="7d"?7:30,c={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*o)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*o).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(v=>v.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*o).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*o).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*o).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[t],y=a==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],p={category:t,range:a,scopeId:s,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:c.kpis,unit:c.unit,series:c.base.map((v,h)=>({label:y[h],value:Math.round(v*(t==="energy"||t==="carbon"?o/2+.5:1)),baseline:Math.round(v*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:c.base[3],unit:c.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:c.base[4],unit:c.unit,status:t==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:c.base[1],unit:c.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${t}?range=${a}&scopeId=${s}`,{kpis:p.kpis.length}),p}async listScenes(t){return this.requireSession(),this.activeOrgId!==tt?[]:structuredClone(this.scenes)}async createScene(t){const a=this.requireSession();if(!a.scope.canEditScenes)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权创建场景`);const s={id:`scn-e7f-${Date.now().toString(36)}`,projectId:t.projectId,floorId:t.floorId,name:t.name,description:t.description,enabled:!0,scheduleSummary:"手动触发",actions:t.actions,lastExecutedAt:null};return this.scenes.unshift(s),this.record("REST","createScene","POST /api/v1/scenes",s,t),this.pushAudit("scene.create",s.id,"success",s.name),structuredClone(s)}async executeScene(t){const a=this.scenes.find(o=>o.id===t);if(!a)throw new Error(`404 NOT_FOUND: 场景 ${t} 不存在`);const s=await this.dispatchControlBatch({floorId:a.floorId,idempotencyKey:`scene-${t}-${Date.now()}`,targets:a.actions,reason:`触发场景：${a.name}`});return a.lastExecutedAt=new Date().toISOString(),a.lastBatchId=s.batchId,s}async getRuntimeSettings(t){return this.requireSession(),structuredClone({projectId:R.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(t,a,s){this.requireSession();const o=s>=this.calendar.nightGuardStart?`下班时间 ${s} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,i=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${a} - ${s}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${a} (-30m) ~ ${s} (+30m)`,conflictWarning:o},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:o}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",i,{workdayStart:a,workdayEnd:s}),i}async saveWorkCalendar(t,a,s,o){const i=this.requireSession();if(!i.scope.canEditSettings)throw this.pushAudit("settings.calendar",R.projectId,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${i.roleLabel}」无权修改应用设置`);if(this.calendar.version!==o)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(a>=s)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:a,workdayEnd:s,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:a,workdayEnd:s,expectedVersion:o}),this.pushAudit("settings.calendar",R.projectId,"success",`${a}-${s}`),structuredClone(this.calendar)}async toggleRuntimeRule(t,a,s){const o=this.requireSession();if(!o.scope.canEditSettings)throw this.pushAudit("settings.rule_toggle",t,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权启停应用设置规则`);const i=this.rules.find(c=>c.id===t);if(!i)throw new Error(`404 NOT_FOUND: 规则 ${t} 不存在`);if(i.version!==s)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${i.version}）`);return i.enabled=a,i.version+=1,i.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${t}`,i,{enabled:a,expectedVersion:s}),this.pushAudit("settings.rule_toggle",t,"success",a?"启用":"停用"),structuredClone(i)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(t,a){if(!this.requireSession().scope.canManageMembers)throw this.pushAudit("org.invite",t,"denied","仅管理员可邀请成员"),new Error("403 FORBIDDEN: 仅管理员可邀请成员");const o=St[a],i={userId:`inv-${Date.now().toString(36)}`,displayName:t.split("@")[0]||t,email:t,role:a,roleLabel:o.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(i),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",i,{email:t,role:a}),this.pushAudit("org.invite",t,"success",o.roleLabel),structuredClone(i)}async listAuditLogs(){if(!this.requireSession().scope.canViewAuditLogs)throw this.pushAudit("audit.read","org.audit_logs","denied","仅授权管理员可只读查阅审计日志"),new Error("403 FORBIDDEN: 仅授权管理员可查阅审计日志");return structuredClone(this.auditLogs)}async listOverrides(){const t=this.requireSession();return this.reconcileOverrides(),t.scope.canGrantOverride?structuredClone(this.overrides):structuredClone(this.overrides.filter(a=>a.targetUserId===t.userId))}async grantOverride(t){const a=this.requireSession();if(!a.scope.canGrantOverride)throw this.pushAudit("override.grant",t.targetUserId,"denied","仅机构/项目管理员可审批临时提权"),new Error("403 FORBIDDEN: 仅管理员可授予限时提权");const s=t.reason.trim();if(!s)throw new Error("400 BAD_REQUEST: 必须填写提权事由");if(![2,8,24].includes(t.durationHours))throw new Error("400 BAD_REQUEST: 提权有效期必须为 2h / 8h / 24h");const o=this.members.find(y=>y.userId===t.targetUserId);if(!o)throw new Error(`404 NOT_FOUND: 目标成员 ${t.targetUserId} 不存在`);if(o.role!=="operator")throw new Error("400 BAD_REQUEST: 仅支持为运营人员授予临时提权");const i=Date.now(),c={id:`ovr-${i.toString(36)}`,targetUserId:o.userId,targetUserName:o.displayName,module:t.module,durationHours:t.durationHours,grantedAt:new Date(i).toISOString(),expiresAt:new Date(i+t.durationHours*36e5).toISOString(),approvedBy:a.displayName,reason:s,status:"active",revokedAt:null,revokedBy:null};return this.overrides.unshift(c),this.applyOverridesToSession(),this.record("REST","grantOverride","POST /api/v1/org/overrides",c,t),this.pushAudit("override.grant",`${o.displayName} ｜ ${t.module==="deployment"?"系统部署":"应用设置"}`,"success",`${t.durationHours}h ｜ ${s}`),structuredClone(c)}async revokeOverride(t){const a=this.requireSession();if(!a.scope.canGrantOverride)throw this.pushAudit("override.revoke",t,"denied","仅管理员可收回临时提权"),new Error("403 FORBIDDEN: 仅管理员可收回限时提权");const s=this.overrides.find(o=>o.id===t);if(!s)throw new Error(`404 NOT_FOUND: 提权记录 ${t} 不存在`);return s.status="revoked",s.revokedAt=new Date().toISOString(),s.revokedBy=a.displayName,this.applyOverridesToSession(),this.record("REST","revokeOverride",`POST /api/v1/org/overrides/${t}/revoke`,s),this.pushAudit("override.revoke",`${s.targetUserName} ｜ ${s.module==="deployment"?"系统部署":"应用设置"}`,"success","管理员提前收回"),structuredClone(s)}subscribeFloorEvents(t,a){return t!==R.floorId?()=>{}:(this.listeners.add(a),()=>{this.listeners.delete(a)})}emit(t){this.record("WS",t.type,`WS /ws/v1/stream?floorId=${R.floorId}`,t),this.listeners.forEach(a=>a(t))}}const en=["org_admin","project_admin","operator","space_user"],ws=[{module:"空间总览与设备控制",org_admin:{text:"机构全范围读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"授权范围读写",tone:"online"},space_user:{text:"授权空间可控",tone:"online"}},{module:"数据分析与报表导出",org_admin:{text:"查看与导出",tone:"online"},project_admin:{text:"查看与导出",tone:"online"},operator:{text:"查看与导出",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"告警中心与运维工单",org_admin:{text:"处置与派单",tone:"online"},project_admin:{text:"处置与派单",tone:"online"},operator:{text:"处置与派单",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"智能策略与快捷场景",org_admin:{text:"编排与执行",tone:"online"},project_admin:{text:"编排与执行",tone:"online"},operator:{text:"执行与编排",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"应用设置（日历/能耗/保护）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 ｜ 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"系统部署（项目/设备/拓扑）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 ｜ 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"成员管理与限时提权审批",org_admin:{text:"机构级管理与审批",tone:"accent"},project_admin:{text:"项目内管理与审批",tone:"accent"},operator:{text:"仅查看本人提权",tone:"neutral"},space_user:{text:"不可见",tone:"neutral"}},{module:"安全与操作审计日志（SR 6.1）",org_admin:{text:"只读查阅（防篡改）",tone:"accent"},project_admin:{text:"只读查阅（防篡改）",tone:"accent"},operator:{text:"无权访问",tone:"neutral"},space_user:{text:"无权访问",tone:"neutral"}}];function Ce(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function tn(e){return e?e.slice(0,16).replace("T"," "):"—"}function Ta(e){return e==="deployment"?"系统部署":"应用设置"}async function Ss(e,t,a,s,o){const i=a.scope.canManageMembers,c=a.scope.canGrantOverride,y=a.scope.canViewAuditLogs,p=c||a.role==="operator",v=a.role!=="space_user";let h="profile",w=v?await t.listOrgMembers().catch(()=>[]):[],x=p?await t.listOverrides().catch(()=>[]):[],L=y?await t.listAuditLogs().catch(()=>[]):[],_="",m="all",u="all",f="all",T=!1,O=!1,G=a.displayName,Y=a.role==="org_admin"?"机构负责人":a.role==="project_admin"?"项目负责人":a.role==="operator"?"运行值守工程师":"园区空间用户",ae="138-0013-8072",de="",te="";const ue={profile:{label:"个人资料",icon:"user",subtitle:"管理个人联系信息、查看当前角色与空间授权范围，以及本人正在生效的临时提权。"},members:{label:"成员管理",icon:"users",subtitle:"严格落实唯一账号与独立认证（SR 1.1），按 4 级角色与空间范围维护机构成员。"},roles:{label:"角色权限",icon:"shield-check",subtitle:"遵循 IEC 62443-3-3 与等保 2.0 最小权限原则，写权限与读权限严格隔离。"},overrides:{label:"限时提权",icon:"key-round",subtitle:"按 IEC 62443-3-3 SR 2.1 RE 3 为运营人员授予限时修改权，必须记录审批人与事由，到期自动收回。"},audit:{label:"审计日志",icon:"file-text",subtitle:"按 SR 6.1 仅授权管理员只读访问，防篡改记录所有登录、控制、配置变更与越权拦截事件。"}};async function J(){const[W,S,F,P]=await Promise.all([t.getSession(),v?t.listOrgMembers().catch(()=>[]):Promise.resolve([]),p?t.listOverrides().catch(()=>[]):Promise.resolve([]),y?t.listAuditLogs().catch(()=>[]):Promise.resolve([])]);w=S,x=F,L=P,W&&(a=W,s(W)),Z()}function H(){const W=["profile"];return v&&W.push("members","roles"),p&&W.push("overrides"),y&&W.push("audit"),`
      <aside class="pacom-unified-rail" aria-label="机构与账户菜单">
        <div class="pacom-unified-group">
          ${W.map(S=>{const F=ue[S],P=S==="overrides"?x.filter(b=>b.status==="active").length:0;return`
                <button type="button" class="pacom-unified-item" aria-current="${h===S}" data-anav="${S}">
                  ${ce(F.icon,16)}
                  <span>${F.label}</span>
                  ${P>0?`<span class="pacom-badge pacom-badge--accent" style="margin-left:auto;">${P}</span>`:""}
                </button>`}).join("")}
        </div>
      </aside>
    `}function Q(){return h==="members"&&i?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-invite="1">+ 邀请成员</button>':h==="overrides"&&c?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-grant="1">+ 授予限时提权</button>':h==="audit"?'<span class="pacom-badge pacom-badge--neutral">只读防篡改 ｜ SR 6.1</span>':""}function ge(){const W=a.scope.activeOverrides.filter(F=>F.status==="active"),S=a.scope.allowedZoneIds?.length?`授权 ${a.scope.allowedFloorIds.length} 个楼层 ｜ ${a.scope.allowedZoneIds.length} 个指定功能区`:`授权 ${a.scope.allowedProjectIds.length} 个项目 ｜ ${a.scope.allowedBuildingIds.length} 栋楼宇 ｜ ${a.scope.allowedFloorIds.length} 个楼层`;return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">个人资料与联系方式</h2>
          <span class="pacom-badge pacom-badge--accent">${Ce(a.roleLabel)}</span>
        </div>
        <form class="pacom-settings-card" data-role="profile-form">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">唯一身份与职务</span>
              <span class="pacom-setting-desc">账号编号：${Ce(a.userId)}（独立实名账号，禁止共用）</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <input class="pacom-input" style="width:140px;" name="displayName" value="${Ce(G)}" aria-label="显示姓名" required />
              <input class="pacom-input" style="width:170px;" name="jobTitle" value="${Ce(Y)}" aria-label="岗位职务" />
            </div>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">告警接收手机号</span>
              <span class="pacom-setting-desc">用于接收重要告警短信与审批通知</span>
            </div>
            <div class="pacom-setting-control">
              <input class="pacom-input" style="width:170px;" name="phone" value="${Ce(ae)}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
              <button type="submit" class="pacom-btn pacom-btn--primary">保存资料</button>
            </div>
          </div>
        </form>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">当前权限与空间范围</h2>
          <span class="pacom-row-sub">${Ce(S)}</span>
        </div>
        <div class="pacom-settings-card">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">角色职责</span>
              <span class="pacom-setting-desc">${Ce(In[a.role])}</span>
            </div>
            <span class="pacom-badge pacom-badge--online">${Ce(a.roleLabel)}</span>
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
          ${W.length>0?W.map(F=>`
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">生效中的限时提权：${Ce(Ta(F.module))}（${F.durationHours}h）</span>
                        <span class="pacom-setting-desc">审批人：${Ce(F.approvedBy)} ｜ 到期时间：${Ce(tn(F.expiresAt))} ｜ 事由：${Ce(F.reason)}</span>
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
    `}function Ue(){const W=_.trim().toLowerCase(),S=w.filter(F=>m!=="all"&&F.role!==m?!1:W?`${F.displayName} ${F.email} ${F.roleLabel} ${F.scopeSummary}`.toLowerCase().includes(W):!0);return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="memberSearch" style="width:240px;" data-member-search placeholder="搜索成员姓名或授权范围…" value="${Ce(_)}" aria-label="搜索机构成员" />
          <select class="pacom-select" name="memberRoleFilter" data-role-filter aria-label="按角色筛选">
            <option value="all" ${m==="all"?"selected":""}>全部角色（${w.length}）</option>
            ${en.map(F=>`<option value="${F}" ${m===F?"selected":""}>${Ce(ft[F])}</option>`).join("")}
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
              ${S.length===0?'<tr><td colspan="4"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配成员</strong><span>可调整搜索关键词或角色筛选。</span></div></td></tr>':S.map(F=>`
                        <tr>
                          <td>
                            <div style="display:flex; align-items:center; gap:10px;">
                              <span class="pacom-pop-avatar">${Ce(F.displayName.slice(0,1))}</span>
                              <div>
                                <div style="font-weight:450;">${Ce(F.displayName)}</div>
                                ${i?`<div class="pacom-row-sub">${Ce(F.email)}</div>`:""}
                              </div>
                            </div>
                          </td>
                          <td><span class="pacom-badge ${F.role==="org_admin"||F.role==="project_admin"?"pacom-badge--accent":"pacom-badge--neutral"}">${Ce(F.roleLabel)}</span></td>
                          <td><span class="pacom-row-sub">${Ce(F.scopeSummary)}</span></td>
                          <td>
                            <span class="pacom-badge ${F.status==="active"?"pacom-badge--online":"pacom-badge--neutral"}">
                              ${F.status==="active"?"正常":F.status==="invited"?"邀请中":"已停用"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function ye(){return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">四级标准角色说明</h2>
          <span class="pacom-row-sub">IEC 62443-3-3 SR 2.1 RE 2 ｜ 最小权限与职责分离</span>
        </div>
        <div class="pacom-settings-card">
          ${en.map(W=>{const S=w.filter(F=>F.role===W).length;return`
              <div class="pacom-setting-row">
                <div class="pacom-setting-meta">
                  <span class="pacom-setting-title">${Ce(ft[W])}</span>
                  <span class="pacom-setting-desc">${Ce(In[W])}</span>
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
                ${ws.map(W=>`
                  <tr>
                    <td><strong style="font-weight:450;">${Ce(W.module)}</strong></td>
                    <td><span class="pacom-badge pacom-badge--${W.org_admin.tone}">${Ce(W.org_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${W.project_admin.tone}">${Ce(W.project_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${W.operator.tone}">${Ce(W.operator.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${W.space_user.tone}">${Ce(W.space_user.text)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function z(){return`
      <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="限时提权统计">
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">当前生效提权</span>
          <div class="pacom-kpi-value">${x.filter(S=>S.status==="active").length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">到期自动收回，无需人工盯守</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">可选有效期窗口</span>
          <div class="pacom-kpi-value">2 / 8 / 24<span class="pacom-kpi-unit">小时</span></div>
          <span class="pacom-kpi-delta">严格遵循 IEC 62443-3-3 SR 2.1 RE 3</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">累计审批记录</span>
          <div class="pacom-kpi-value">${x.length}<span class="pacom-kpi-unit">条</span></div>
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
                ${x.length===0?`<tr><td colspan="${c?6:5}"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>暂无限时提权记录</strong><span>${c?"点击右上角「+ 授予限时提权」为运营人员按需开启限时修改权。":"当前无需临时提权，「应用设置」与「系统部署」保持默认只读。"}</span></div></td></tr>`:x.map(S=>`
                          <tr>
                            <td><strong style="font-weight:450;">${Ce(S.targetUserName)}</strong></td>
                            <td><span class="pacom-badge pacom-badge--accent">${Ce(Ta(S.module))}</span></td>
                            <td>
                              <div>${S.durationHours} 小时</div>
                              <div class="pacom-row-sub">至 ${Ce(tn(S.expiresAt))}</div>
                            </td>
                            <td>
                              <div>${Ce(S.approvedBy)}</div>
                              <div class="pacom-row-sub">${Ce(S.reason)}</div>
                            </td>
                            <td>
                              <span class="pacom-badge ${S.status==="active"?"pacom-badge--online":S.status==="revoked"?"pacom-badge--warning":"pacom-badge--neutral"}">
                                ${S.status==="active"?"生效中":S.status==="revoked"?"已收回":"已到期"}
                              </span>
                            </td>
                            ${c?`<td style="text-align:right;">
                                    ${S.status==="active"?`<button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-revoke-override="${Ce(S.id)}">提前收回</button>`:`<span class="pacom-row-sub">${S.revokedBy?`${Ce(S.revokedBy)} 收回`:"已结束"}</span>`}
                                  </td>`:""}
                          </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function ve(){const W=L.filter(S=>{if(u==="success"&&S.result!=="success"||u==="denied"&&S.result==="success")return!1;if(f!=="all"){const F=`${S.action} ${S.target}`.toLowerCase();if(f==="control"&&!F.includes("control")&&!F.includes("scene")||f==="alarm"&&!F.includes("alarm")&&!F.includes("work")||f==="deploy"&&!F.includes("deploy")&&!F.includes("plan")&&!F.includes("hardware")&&!F.includes("project")&&!F.includes("building")&&!F.includes("floor")&&!F.includes("zone")||f==="settings"&&!F.includes("settings")||f==="override"&&!F.includes("override"))return!1}return!0});return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <select class="pacom-select" name="auditActionCat" data-audit-cat aria-label="按行为类别筛选">
            <option value="all" ${f==="all"?"selected":""}>全部操作类别</option>
            <option value="override" ${f==="override"?"selected":""}>限时提权审批</option>
            <option value="control" ${f==="control"?"selected":""}>设备控制与场景</option>
            <option value="alarm" ${f==="alarm"?"selected":""}>告警与工单处置</option>
            <option value="deploy" ${f==="deploy"?"selected":""}>系统部署与空间</option>
            <option value="settings" ${f==="settings"?"selected":""}>应用设置变更</option>
          </select>
          <div class="pacom-tabs" role="tablist" aria-label="按执行结果筛选">
            <button type="button" class="pacom-tab" role="tab" aria-selected="${u==="all"}" data-audit-filter="all">全部（${L.length}）</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${u==="success"}" data-audit-filter="success">成功</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${u==="denied"}" data-audit-filter="denied">已拦截</button>
          </div>
        </div>
        <span class="pacom-row-sub">共 ${W.length} 条只读记录</span>
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
              ${W.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配审计记录</strong><span>可放宽筛选条件查看全部日志。</span></div></td></tr>':W.map(S=>`
                        <tr>
                          <td>
                            <div style="font-weight:450;">${Ce(S.action)}</div>
                            ${S.detail?`<div class="pacom-row-sub">${Ce(S.detail)}</div>`:""}
                          </td>
                          <td><code style="font-size:12px;">${Ce(S.target)}</code></td>
                          <td>
                            <div>${Ce(S.actor)}</div>
                            <div class="pacom-row-sub">${Ce(ft[S.role]??S.role)}</div>
                          </td>
                          <td><span class="pacom-row-sub">${Ce(tn(S.at))}</span></td>
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
    `}function B(){const W=[];if(T&&i){const S=a.role==="org_admin"?en:["project_admin","operator","space_user"];W.push(`
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
                  ${S.map(F=>`<option value="${F}">${Ce(ft[F])}</option>`).join("")}
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
        </div>`)}if(O&&c){const S=w.filter(F=>F.role==="operator");W.push(`
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
                  ${S.length===0?'<option value="">暂无运营人员</option>':S.map(F=>`<option value="${Ce(F.userId)}">${Ce(F.displayName)}（${Ce(F.email)}）</option>`).join("")}
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
              <span class="pacom-row-sub">审批人：${Ce(a.displayName)}</span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${S.length===0?"disabled":""}>确认授权</button>
              </div>
            </div>
          </form>
        </div>`)}return W.join("")}function Z(){const W=ue[h],S=Q();e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">机构与账户</h1>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">${Ce(a.roleLabel)}</span>
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${H()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head ${S?"pacom-unified-head--split":""}">
                <div class="pacom-unified-head-copy">
                  <h2 class="pacom-unified-title">${W.label}</h2>
                  <p class="pacom-unified-subtitle">${W.subtitle}</p>
                </div>
                ${S?`<div class="pacom-unified-head-actions">${S}</div>`:""}
              </div>
              ${de?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${Ce(de)}</span></div>`:""}
              ${te?`<div class="pacom-alert-banner">${Ce(te)}</div>`:""}
              ${h==="profile"?ge():h==="members"?Ue():h==="roles"?ye():h==="overrides"?z():ve()}
            </div>
          </div>
        </div>
      </div>
      ${B()}
    `,ke()}function ke(){e.querySelectorAll("[data-anav]").forEach(S=>{S.addEventListener("click",()=>{h=S.dataset.anav??"profile",de="",te="",Z()})}),e.querySelector('[data-role="profile-form"]')?.addEventListener("submit",S=>{S.preventDefault();const F=new FormData(S.currentTarget);G=String(F.get("displayName")??"").trim()||a.displayName,Y=String(F.get("jobTitle")??"").trim()||Y,ae=String(F.get("phone")??"").trim()||ae,de=`已保存个人资料：${G}（${Y}）｜ ${ae}`,Z()}),e.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await t.logout(),window.location.hash="#login",o()}),e.querySelector("[data-open-invite]")?.addEventListener("click",()=>{T=!0,O=!1,Z()}),e.querySelector("[data-open-grant]")?.addEventListener("click",()=>{O=!0,T=!1,Z()}),e.querySelectorAll("[data-close-modals]").forEach(S=>{S.addEventListener("click",()=>{T=!1,O=!1,Z()})}),e.querySelectorAll("[data-modal-scrim]").forEach(S=>{S.addEventListener("click",F=>{F.target===S&&(T=!1,O=!1,Z())})}),e.querySelector("[data-member-search]")?.addEventListener("input",S=>{const F=S.currentTarget,P=F.selectionStart??F.value.length;_=F.value,Z();const b=e.querySelector("[data-member-search]");b&&(b.focus(),b.setSelectionRange(P,P))}),e.querySelector("[data-role-filter]")?.addEventListener("change",S=>{m=S.currentTarget.value,Z()}),e.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async S=>{S.preventDefault(),te="";const F=new FormData(S.currentTarget);try{const P=await t.inviteOrgMember(String(F.get("email")??""),String(F.get("role")));T=!1,de=`已向 ${P.email} 发送「${P.roleLabel}」邀请。`,await J()}catch(P){te=P instanceof Error?P.message:String(P),Z()}}),e.querySelector('[data-role="grant-override-form"]')?.addEventListener("submit",async S=>{S.preventDefault(),te="";const F=new FormData(S.currentTarget);try{const P=await t.grantOverride({targetUserId:String(F.get("targetUserId")??""),module:String(F.get("module")??"deployment"),durationHours:Number(F.get("durationHours")??8),reason:String(F.get("reason")??"")});O=!1,de=`已为「${P.targetUserName}」开启「${Ta(P.module)}」${P.durationHours} 小时限时修改权，到期自动收回。`,await J()}catch(P){te=P instanceof Error?P.message:String(P),Z()}}),e.querySelectorAll("[data-revoke-override]").forEach(S=>{S.addEventListener("click",async()=>{const F=S.dataset.revokeOverride;if(F){te="";try{const P=await t.revokeOverride(F);de=`已提前收回「${P.targetUserName}」的「${Ta(P.module)}」限时修改权。`,await J()}catch(P){te=P instanceof Error?P.message:String(P),Z()}}})}),e.querySelectorAll("[data-audit-filter]").forEach(S=>{S.addEventListener("click",()=>{u=S.dataset.auditFilter??"all",Z()})}),e.querySelector("[data-audit-cat]")?.addEventListener("change",S=>{f=S.currentTarget.value??"all",Z()})}Z()}const na={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},Es={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},xs={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function Is(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("modbus")||t.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":t.includes("co₂")||t.includes("co2")||t.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function ks(e){return e.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:e.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function an(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("vav")||e.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:t.includes("co₂")||t.includes("co2")||e.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function As(e,t,a){const s=new URLSearchParams(window.location.hash.split("?")[1]??""),o=s.get("alarm"),i=s.get("wo"),c=a.scope.canManageAlarms;let y=await t.getSpatialTree(),p=Ka(),v=!1,h="",w=[],x=[],L=[],_=i?"workorders":"alarms",m="all",u="all",f="all",T="impact",O=!1,G="",Y=o,ae=i,de=null,te=null,ue="resolved";const J=new Set,H=new Map,Q=new Map,ge=new Map,Ue=new Map;let ye="",z="";function ve(S){const F=Ue.get(S.id);if(F)return F;const P=S.id.match(/(\d+)$/),b=`WO-2026-${P?P[1]:S.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,C={estCost:"¥ 450",actualCost:S.status==="closed"?"¥ 380":"--",cmmsNo:b,assigneeGroup:"暖通运维组",tasks:[{id:`${S.id}-t1`,label:"核查设备供电与现场指示灯状态",done:S.status!=="open"},{id:`${S.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:S.status==="resolved"||S.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:S.createdAt?S.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${b}）`}]};return Ue.set(S.id,C),C}async function B(){[w,x,L]=await Promise.all([t.listAlarms(R.floorId),t.listWorkOrders(R.floorId),t.getFloorDevices(R.floorId).catch(()=>[])]),x.forEach(S=>ve(S)),W()}function Z(S){if(!S)return{name:"楼层通用",zone:"E7F",dev:null};const F=L.find(P=>P.id===S)??null;return F?{name:F.name,zone:(F.logicalZoneId?xs[F.logicalZoneId]:void 0)??"E7F",dev:F}:{name:S,zone:"E7F",dev:null}}function ke(S){const F=Z(S.deviceId).dev;F&&F.connectivity==="offline"?ge.set(S.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${F.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):ge.set(S.id,{verdict:"pass",summary:`自检通过（PASS）：「${F?.name??S.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),Y=S.id,W()}function W(){const S=w.filter(j=>j.status==="active"&&!H.has(j.id)),F=x.filter(j=>!ve(j).cancelled&&(j.status==="open"||j.status==="assigned"||j.status==="in_progress")),P=w.filter(j=>j.status!=="active").length+Q.size,b=0,C=H.size,ne=G.trim().toLowerCase(),xe=w.filter(j=>{const M=H.has(j.id);if(m==="snoozed"){if(!M)return!1}else if(m==="active"){if(j.status!=="active"||M)return!1}else if(m==="acknowledged"){if(j.status!=="acknowledged")return!1}else if(M)return!1;if(f!=="all"&&j.severity!==f)return!1;if(!ne)return!0;const oe=Z(j.deviceId);return`${j.title} ${j.message} ${oe.name} ${oe.zone} ${j.deviceId}`.toLowerCase().includes(ne)}),Je=new Map;for(const j of xe){const M=`${j.title} ${j.message}`.toLowerCase(),oe=M.includes("离线")||M.includes("modbus")||M.includes("通信"),fe=O?oe?"root-gateway-modbus":j.deviceId:j.id,$e=oe?"根因：E7F 主控网关通信链路":`根因：${Z(j.deviceId).name}`,et=Je.get(fe)??{rootLabel:$e,items:[]};et.items.push(j),Je.set(fe,et)}const st=Array.from(Je.values());T==="impact"&&st.sort((j,M)=>an(M.items[0]).costYuan-an(j.items[0]).costYuan);const Ve=x.filter(j=>{const M=ve(j);if(u==="cancelled"){if(!M.cancelled)return!1}else if(M.cancelled||u==="open"&&(j.status==="resolved"||j.status==="closed")||u==="resolved"&&j.status!=="resolved"||u==="closed"&&j.status!=="closed")return!1;if(!ne)return!0;const oe=Z(j.deviceId);return`${j.title} ${j.description} ${j.id} ${M.cmmsNo} ${oe.name}`.toLowerCase().includes(ne)});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${Za({tree:y,session:a,scope:p,activeAlarmCount:S.length,isOpen:v,searchKeyword:h})}
            </div>

            <div class="pacom-header-meta">
              ${_==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${O}" data-toggle-group="1" aria-label="按拓扑根因归并">
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
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${_==="alarms"}" data-main-tab="alarms">实时告警（${w.length-C}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${_==="workorders"}" data-main-tab="workorders">运维工单（${x.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${_==="alarms"&&m==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${S.length}<span class="pacom-kpi-unit">条 ｜ 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${_==="workorders"&&u==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${F.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${_==="alarms"&&m==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">已闭环生效</span>
              <div class="pacom-kpi-value">${P}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="pacom-kpi-cell">
              <span class="pacom-kpi-label">关单复发待查</span>
              <div class="pacom-kpi-value" style="color:var(--pacom-status-online);">${b}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${ye?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${n(ye)}</span></div>`:""}
          ${z?`<div class="pacom-alert-banner">${n(z)}</div>`:""}

          ${_==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${n(G)}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${f==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${f==="critical"?"selected":""}>严重</option>
                      <option value="major" ${f==="major"?"selected":""}>重要</option>
                      <option value="minor" ${f==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${T==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${T==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${m==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${m==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${m==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${m==="snoozed"}" data-status-pill="snoozed">已忽略（${C}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${J.size>0&&a.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${J.size}）</button>`:""}
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
                          ${st.map(j=>{const M=j.items[0],oe=Es[M.severity]??{label:M.severity,cls:"pacom-badge--neutral"},fe=Z(M.deviceId),$e=ks(M),et=an(M),rt=Y===M.id,Le=H.get(M.id),_e=!!Le,Te=J.has(M.id),qe=ge.get(M.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${n(M.id)}" data-check-alarm="${n(M.id)}" ${Te?"checked":""} ${!c||M.status!=="active"||_e?"disabled":""} aria-label="选择 ${n(M.title)}" />
                                  </td>
                                  <td><span class="pacom-badge ${oe.cls}">${n(oe.label)}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${n(M.title)}</span>
                                      ${O?`<span class="pacom-badge pacom-badge--accent">${n(j.rootLabel)}${j.items.length>1?` ｜ 影响 ${j.items.length} 项`:""}</span>`:""}
                                      ${qe?`<span class="pacom-badge ${qe.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${n(qe.verdict.toUpperCase())}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${n(M.message)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${n(fe.name)}</div>
                                    <div class="pacom-row-sub">${n(fe.zone)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${n(et.costLabel)}</div>
                                    <div class="pacom-row-sub">${n(et.comfortLabel)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${n($e.duration)}</div>
                                    <div class="pacom-row-sub" style="color:${$e.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${n($e.trend)}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${_e?"pacom-badge--neutral":M.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${_e?`忽略 ${n(Le?.duration)}`:M.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${_e?`<button class="pacom-btn" data-unsnooze="${n(M.id)}" ${c?"":"disabled"}>恢复监控</button>`:`
                                            ${M.status==="active"?`<button class="pacom-btn" data-mark-actioned="${n(M.id)}" ${c?"":"disabled"}>标记已处置</button>`:""}
                                            ${M.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${n(M.id)}" ${c?"":"disabled"}>转工单</button>`}
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
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${n(Is(M))}
                                            </div>
                                            ${Le?`<div class="pacom-info-banner">忽略周期：${n(Le.duration)} ｜ 原因备注：${n(Le.reason)}</div>`:""}
                                            ${qe?`
                                                <div class="pacom-banner ${qe.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${n(qe.summary)}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${qe.steps.map(ot=>`<span>${n(ot)}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${n(M.id)}</code> ｜ 设备编号 <code>${n(M.deviceId)}</code> ｜ 关联工单 ${n(M.workOrderId??"无")}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${n(M.id)}">单机自检（FTT）</button>
                                              ${!_e&&M.status==="active"?`<button class="pacom-btn" data-open-snooze="${n(M.id)}" ${c?"":"disabled"}>限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${n(M.deviceId)}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${n(M.deviceId)}">定位设备 →</button>
                                            </div>
                                            ${de===M.id?`
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
              ${(()=>{const j=ae?x.find(M=>M.id===ae)??null:null;if(j){const M=Z(j.deviceId),oe=ve(j),fe=!!(!c||oe.cancelled||j.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${n(j.id)}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${n(j.title)}</h2>
                        <span class="pacom-badge pacom-badge--accent">${n(oe.cmmsNo)}</span>
                        ${oe.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${n(j.id)}" data-wo-status="${n(j.id)}" aria-label="更新工单状态" ${fe?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map($e=>`<option value="${$e}" ${j.status===$e?"selected":""}>${na[$e]}</option>`).join("")}
                          <option value="cancelled" ${oe.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${te===j.id?`
                        <form data-close-wo-form="${n(j.id)}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${na[ue]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${n(oe.cause??"")}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${n(oe.solution??"")}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${n(oe.actualCost==="--"?"":oe.actualCost)}" />
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
                          <div class="pacom-row-sub">${n(j.description)}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${oe.tasks.map($e=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${n($e.id)}" data-wo-task="${n(j.id)}" data-task-id="${n($e.id)}" ${$e.done?"checked":""} ${fe?"disabled":""} />
                                    <span>${n($e.label)}</span>
                                  </span>
                                  ${$e.unit?`<span class="pacom-row-sub">实测：${n($e.reading??"--")} ${n($e.unit)}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${oe.history.map($e=>`<span>• <span class="pacom-row-sub">${n($e.at)}</span> — ${n($e.text)}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${n(j.id)}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${n(oe.cmmsNo)}</code> ｜ 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${n(M.name)}（${n(M.zone)}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${n(oe.assigneeGroup)}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${n(oe.estCost)} / 实际 ${n(oe.actualCost)}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${n(oe.cause??"待完单填写")}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${n(oe.solution??"待完单填写")}</span>
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
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${n(G)}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${u==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${u==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${u==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${u==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${u==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${Ve.length} 条工单</span>
                  </div>
                  ${Ve.length===0?'<div class="pacom-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${Ve.map(M=>{const oe=Z(M.deviceId),fe=ve(M),$e=!!(!c||fe.cancelled||M.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${n(M.title)}</span>
                                        ${fe.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${n(M.description)} ｜ <code>${n(M.id)}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${n(oe.name)}</div>
                                      <div class="pacom-row-sub">${n(oe.zone)}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${n(fe.cmmsNo)}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${n(fe.assigneeGroup)} ｜ 预估 ${n(fe.estCost)}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${n(M.id)}" data-wo-status="${n(M.id)}" aria-label="更新工单状态" ${$e?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(et=>`<option value="${et}" ${M.status===et?"selected":""}>${na[et]}</option>`).join("")}
                                          <option value="cancelled" ${fe.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${n(M.id)}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${te===M.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${n(M.id)}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${na[ue]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${n(fe.cause??"")}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${n(fe.solution??"")}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${n(fe.actualCost==="--"?"":fe.actualCost)}" />
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
    `,Ga(e,{onToggle:()=>{v=!v,W(),v&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:j=>{h=j,W();const M=e.querySelector("[data-global-space-search]");M&&(M.focus(),M.setSelectionRange(j.length,j.length))},onPick:j=>{p=j,v=!1,W()}}),e.querySelectorAll("[data-main-tab]").forEach(j=>{j.addEventListener("click",()=>{_=j.dataset.mainTab??"alarms",ye="",W()})}),e.querySelectorAll("[data-kpi-filter]").forEach(j=>{j.addEventListener("click",()=>{const M=j.dataset.kpiFilter;ye="",M==="workorders"?(_="workorders",u=u==="open"?"all":"open"):(M==="active"||M==="acknowledged")&&(_="alarms",m=m===M?"all":M),W()})}),e.querySelectorAll("[data-status-pill]").forEach(j=>{j.addEventListener("click",()=>{m=j.dataset.statusPill??"all",W()})}),e.querySelectorAll("[data-wo-pill]").forEach(j=>{j.addEventListener("click",()=>{u=j.dataset.woPill??"all",W()})}),e.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{ye="",B()}),e.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{O=!O,W()}),e.querySelector("[data-severity-filter]")?.addEventListener("change",j=>{f=j.currentTarget.value,W()}),e.querySelector("[data-alarm-sort]")?.addEventListener("change",j=>{T=j.currentTarget.value??"impact",W()}),e.querySelector("[data-alarm-search]")?.addEventListener("input",j=>{const M=j.currentTarget,oe=M.selectionStart??M.value.length;G=M.value,W();const fe=e.querySelector("[data-alarm-search]");fe&&(fe.focus(),fe.setSelectionRange(oe,oe))}),e.querySelectorAll("[data-check-alarm]").forEach(j=>{j.addEventListener("change",()=>{if(!c)return;const M=j.dataset.checkAlarm;M&&(j.checked?J.add(M):J.delete(M),W())})}),e.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{if(!c)return;z="";const j=Array.from(J);try{for(const M of j)await t.acknowledgeAlarm(M,"告警中心批量确认"),Q.set(M,"批量确认处置");J.clear(),ye=`已批量确认 ${j.length} 条告警，未来 24 小时持续校验无复发。`,await B()}catch(M){z=M instanceof Error?M.message:String(M),W()}}),e.querySelectorAll("[data-expand-alarm]").forEach(j=>{j.addEventListener("click",()=>{const M=j.dataset.expandAlarm??null;Y=Y===M?null:M,de=null,W()})}),e.querySelectorAll("[data-expand-wo]").forEach(j=>{j.addEventListener("click",()=>{const M=j.dataset.expandWo??null;ae=ae===M?null:M,W()})}),e.querySelectorAll("[data-run-ftt]").forEach(j=>{j.addEventListener("click",()=>{const M=w.find(oe=>oe.id===j.dataset.runFtt);M&&ke(M)})}),e.querySelectorAll("[data-open-snooze]").forEach(j=>{j.addEventListener("click",()=>{c&&(de=j.dataset.openSnooze??null,W())})}),e.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{de=null,W()}),e.querySelectorAll("[data-snooze-form]").forEach(j=>{j.addEventListener("submit",M=>{if(M.preventDefault(),!c)return;const oe=j.dataset.snoozeForm;if(!oe)return;const fe=new FormData(j),$e=String(fe.get("duration")??"24h"),et=String(fe.get("reason")??"").trim()||"现场核查中";H.set(oe,{duration:$e,reason:et}),J.delete(oe),de=null,ye=`已限时忽略该告警（${$e} ｜ ${et}），可在「已忽略」页签中随时恢复。`,W()})}),e.querySelectorAll("[data-unsnooze]").forEach(j=>{j.addEventListener("click",()=>{if(!c)return;const M=j.dataset.unsnooze;M&&(H.delete(M),ye="已恢复该告警的实时监控。",W())})}),e.querySelectorAll("[data-go-ts]").forEach(j=>{j.addEventListener("click",()=>{const M=j.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(M)}`})}),e.querySelectorAll("[data-locate-home]").forEach(j=>{j.addEventListener("click",()=>{const M=j.dataset.locateHome??"";window.location.hash=M?`#home?device=${encodeURIComponent(M)}`:"#home"})}),e.querySelectorAll("[data-mark-actioned]").forEach(j=>{j.addEventListener("click",async()=>{if(!c)return;z="";const M=j.dataset.markActioned;try{await t.acknowledgeAlarm(M,"现场自处理完成（Mark Actioned）"),Q.set(M,"现场自处理完成"),J.delete(M),ye="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await B()}catch(oe){z=oe instanceof Error?oe.message:String(oe),W()}})}),e.querySelectorAll("[data-to-wo]").forEach(j=>{j.addEventListener("click",async()=>{if(!c)return;z="";const M=w.find(oe=>oe.id===j.dataset.toWo);if(M)try{await t.createWorkOrder({floorId:M.floorId,deviceId:M.deviceId,alarmId:M.id,title:`处置告警：${M.title}`,description:M.message}),ye=`已将「${M.title}」转为运维工单并同步 CMMS。`,await B()}catch(oe){z=oe instanceof Error?oe.message:String(oe),W()}})}),e.querySelectorAll("[data-wo-status]").forEach(j=>{j.addEventListener("change",async()=>{if(!c)return;const M=j.dataset.woStatus,oe=j.value;if(z="",oe==="cancelled"){const fe=x.find($e=>$e.id===M);if(fe){const $e=ve(fe);$e.cancelled=!0,$e.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),ye="工单已移入「已取消」分类并锁定编辑。",W()}return}if(oe==="resolved"||oe==="closed"){te=M,ue=oe,W();return}try{await t.updateWorkOrderStatus(M,oe);const fe=x.find($e=>$e.id===M);fe&&ve(fe).history.unshift({at:"刚刚",text:`状态变更为「${na[oe]}」`}),ye="工单状态已更新并写入审计日志。",await B()}catch(fe){z=fe instanceof Error?fe.message:String(fe),await B()}})}),e.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{te=null,W()}),e.querySelectorAll("[data-close-wo-form]").forEach(j=>{j.addEventListener("submit",async M=>{if(M.preventDefault(),!c)return;const oe=j.dataset.closeWoForm,fe=new FormData(j),$e=String(fe.get("cause")??"").trim(),et=String(fe.get("solution")??"").trim(),rt=String(fe.get("actualCost")??"").trim();try{await t.updateWorkOrderStatus(oe,ue);const Le=x.find(_e=>_e.id===oe);if(Le){const _e=ve(Le);_e.cause=$e,_e.solution=et,rt&&(_e.actualCost=rt),_e.history.unshift({at:"刚刚",text:`流转至「${na[ue]}」｜ 根因：${$e}`})}te=null,ae=oe,ye=`工单已更新为「${na[ue]}」，根因与方案已沉淀归档。`,await B()}catch(Le){z=Le instanceof Error?Le.message:String(Le),W()}})}),e.querySelectorAll("[data-wo-task]").forEach(j=>{j.addEventListener("change",()=>{if(!c)return;const M=x.find($e=>$e.id===j.dataset.woTask);if(!M)return;const fe=ve(M).tasks.find($e=>$e.id===j.dataset.taskId);fe&&(fe.done=j.checked),W()})})}await B()}function Ds(e){return{spatial:!!(e.createProject&&e.upsertBuilding&&e.upsertFloor&&e.upsertZone),createDevice:!!e.createDeploymentDevice,manageDevice:!!(e.updateDeploymentDevice&&e.deleteDeploymentDevice),lightMarkers:!!(e.addLightMarker&&e.deleteLightMarker),meshRoles:!!e.updateMeshRole,edgeSync:!!e.syncEdgeGateway,deviceParams:!!e.saveDeviceParams,deviceGroups:!!(e.upsertDeviceGroup&&e.deleteDeviceGroup),floorDocs:!!e.attachFloorDoc,manageDocs:!!(e.deleteFloorDoc&&e.updateFloorDocCategory),manageConnections:!!(e.upsertConnection&&e.deleteConnection),restartEdge:!!e.restartEdgeService,stageSnapshot:!!e.saveDeliveryStageSnapshot,signOffDelivery:!!e.signOffDeliveryBatch,rejectDelivery:!!e.rejectDeliveryBatch,deferredFloors:!!e.toggleFloorDeferred}}function $t(e){return(e instanceof Error?e.message:String(e)).replace(/^\s*(?:400|401|403|404|409|500)\s+[A-Z_]+:\s*/i,"").trim()}const Cs={project_config:{title:"项目配置",subtitle:"管理项目档案、楼宇结构、楼层 2D 平面底图、功能区划分与工程资料。",granularity:"project"},device_marking:{title:"设备标记",subtitle:"在纯白 2D 平面底图上完成设备点位标记、回路灯点布置与硬件绑定。",granularity:"floor"},device_list:{title:"设备列表",subtitle:"核查本层四态设备清单，配置硬件绑定、自治参数或执行单机与全层自检。",granularity:"floor"},device_groups:{title:"设备分组",subtitle:"维护端侧蓝牙 Mesh 自治联动组与云端业务分组，支持成员编排与群组试控。",granularity:"floor"},device_network:{title:"设备网络",subtitle:"查看无线蓝牙 Mesh 通信树与业务供能流向，执行网络体检与边缘网关同步。",granularity:"floor"},connections:{title:"系统接入",subtitle:"管理边缘网关与暖通、电表、照明等异构子系统接入通道与采集质量。",granularity:"project"},acceptance:{title:"交付验收",subtitle:"按 5 步部署门控核验各楼层就绪状态，执行全层自检并冻结交付基线快照。",granularity:"building"}},jn={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},La={gateway:"网关 / 适配器",lighting:"照明回路",hvac:"暖通空调",sensor:"环境传感",meter:"智能电表"},Ia={lab:"实验区",office:"办公区",meeting:"会议室",corridor:"走廊 / 公区",utility:"机房 / 后勤",outdoor:"露台 / 活动区"},cn=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"建议每层启用 2–3 个 Proxy，空旷 20–30m 按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 防止广播干扰，自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度调光，自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙 / 拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关有线接入，不加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485 / 通讯管理机有线接入"}],Ls={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}},es=[{key:"lab_std",label:"标准实验层",items:[{suffix:"东侧实验区",category:"lab"},{suffix:"西侧实验区",category:"lab"},{suffix:"核心走廊与管井",category:"corridor"}]},{key:"office_std",label:"标准办公层",items:[{suffix:"开放办公区",category:"office"},{suffix:"会议室",category:"meeting"},{suffix:"公共走廊与茶水区",category:"corridor"}]},{key:"lobby_1f",label:"首层大堂",items:[{suffix:"入口大堂与展厅",category:"corridor"},{suffix:"配电与后勤机房",category:"utility"}]},{key:"roof_plant",label:"屋面设备层",items:[{suffix:"空调主机区",category:"utility"},{suffix:"水泵与排风设备区",category:"utility"}]}],dn=["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"],_s=new Set(["bacnet_ip","modbus_tcp","modbus_rtu","knx"]);function Gt(e){return!(e.category==="hvac"||e.category==="meter"||e.category!=="gateway"&&e.hardwareBinding&&_s.has(e.hardwareBinding.protocol))}function ts(e){return`mesh-${e.replace(/[^a-z0-9]/gi,"").slice(-4).toLowerCase()||"01"}`}function Zt(e,t){return e==="online"?{label:"在线",cls:"pacom-badge--online",dot:"pacom-dot--online"}:e==="degraded"?{label:"信号降级",cls:"pacom-badge--warning",dot:"pacom-dot--warning"}:e==="unknown"||!t?{label:"待入网",cls:"pacom-badge--neutral",dot:"pacom-dot--offline"}:{label:"离线",cls:"pacom-badge--critical",dot:"pacom-dot--critical"}}function qa(e){const t=e.trim().toUpperCase();if(t==="RF"||t==="R"||t==="ROOF"||t.includes("屋面")||t.includes("屋顶")||t.includes("天面"))return 999;const a=t.match(/(-?\d+)/);if(!a)return 0;const s=Number(a[1]);return t.startsWith("B")||t.includes("地下")||t.includes("负")?-Math.abs(s):s}const Mn={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,十一:11,十二:12,十三:13,十四:14,十五:15,十六:16,十七:17,十八:18,十九:19,二十:20,二十一:21,二十二:22,二十三:23,二十四:24,二十五:25},pn={mesh_auto:["灯光联动组（传感-面板）","调光器群控组"],cloud_biz:["空调业务组","行政 / 标牌管控组","跨区综合管控组"]},Fs=["竣工图纸","回路图纸","点位清单","设备手册","调试记录","其他资料"];function js(e){const t=e.toLowerCase();return t.endsWith(".xlsx")||t.endsWith(".xls")||t.endsWith(".csv")?"点位清单":t.endsWith(".doc")||t.endsWith(".docx")?"设备手册":t.endsWith(".dwg")||t.endsWith(".dxf")||t.endsWith(".png")||t.endsWith(".jpg")||t.endsWith(".jpeg")||t.endsWith(".webp")?"竣工图纸":t.endsWith(".pdf")?t.includes("手册")||t.includes("维保")?"设备手册":t.includes("回路")?"回路图纸":"竣工图纸":"其他资料"}function un(e,t,a=""){if(a){const _=/东/.test(a),m=/西/.test(a),u=/北/.test(a),f=/南/.test(a);if(/走廊|核心|大厅|大堂|中庭|茶水|公区/.test(a))return{left:40,top:30,width:20,height:38};if(m&&u)return{left:10,top:18,width:30,height:28};if(m&&f)return{left:10,top:52,width:30,height:28};if(_&&u)return{left:60,top:18,width:30,height:28};if(_&&f)return{left:60,top:52,width:30,height:28};if(m)return{left:10,top:22,width:28,height:52};if(_)return{left:62,top:22,width:28,height:52};if(u)return{left:26,top:16,width:48,height:24};if(f)return{left:26,top:60,width:48,height:24}}const s=t<=2?Math.max(1,t):t<=4?2:3,o=Math.max(1,Math.ceil(t/s)),i=e%s,c=Math.floor(e/s),y=12,p=20,v=4,h=100-y*2-v*(s-1),w=100-p*2-v*(o-1),x=Math.max(18,Math.round(h/s)),L=Math.max(20,Math.round(w/o));return{left:Math.min(78,Math.round(y+i*(x+v))),top:Math.min(74,Math.round(p+c*(L+v))),width:x,height:L}}function zt(e){const a=e.trim().replace(/\.[a-z0-9]{1,6}$/i,""),s=a.toUpperCase();if(/(?:^|[^A-Z0-9])(RF|ROOF)(?:[^A-Z0-9]|$)/.test(s)||/屋面|屋顶|天面/.test(a))return"RF";const o=s.match(/(?:^|[^A-Z0-9])B0*(\d+)F?(?:[^A-Z0-9]|$)/);if(o)return`B${Number(o[1])}`;const i=a.match(/(?:地下|负)(0*\d+|[一二三四五六七八九十]+)(?:层|楼)?/);if(i){const v=/^\d+$/.test(i[1])?Number(i[1]):Mn[i[1]];if(v)return`B${v}`}if(/首层|一层/.test(a))return"1F";const c=s.match(/(?:^|[^A-Z0-9])0*(\d+)F(?:[^A-Z0-9]|$)/);if(c)return`${Number(c[1])}F`;const y=s.match(/(?:^|[^A-Z0-9])F0*(\d+)(?:[^A-Z0-9]|$)/);if(y)return`${Number(y[1])}F`;const p=a.match(/(0*\d+|[一二三四五六七八九十]+)(?:层|楼)/);if(p){const v=/^\d+$/.test(p[1])?Number(p[1]):Mn[p[1]];if(v)return`${v}F`}return null}function as(e){return new Promise((t,a)=>{const s=new FileReader;s.onload=()=>typeof s.result=="string"?t(s.result):a(new Error("无法读取图片内容")),s.onerror=()=>a(new Error(`读取文件「${e.name}」失败`)),s.readAsDataURL(e)})}async function fa(e,t=1600,a=.82){const s=await as(e);return!e.type.startsWith("image/")||e.size<140*1024||typeof document>"u"?s:new Promise(o=>{const i=new Image;i.onload=()=>{try{const c=Math.min(1,t/Math.max(i.naturalWidth||1,i.naturalHeight||1)),y=Math.max(1,Math.round(i.naturalWidth*c)),p=Math.max(1,Math.round(i.naturalHeight*c)),v=document.createElement("canvas");v.width=y,v.height=p;const h=v.getContext("2d");if(!h){o(s);return}h.drawImage(i,0,0,y,p);const w=v.toDataURL("image/webp",a);o(w.length>0&&w.length<s.length?w:s)}catch{o(s)}},i.onerror=()=>o(s),i.src=s})}function On(e){const t=e.name.match(/\b((?:FCU|VAV|AHU|PAU|GW|AP|SW|DM)-\d+)\b/i);if(t?.[1])return t[1].toUpperCase();const a=e.name.replace(/^[A-Z]?\d+F\s*|[A-Z]?RF\s*|[A-Z]?B\d+\s*/i,"").trim()||e.name.trim();return a.length>9?`${a.slice(0,8)}…`:a}function Ms(e,t){return e.status!=="frozen"?!1:e.verifiedCount<e.deviceCount||!t?!0:t.snapshotSource==="legacy_missing"||t.devices.length===0}function Os(e,t){if(t.status!=="frozen")return!1;if(e.buildingDeliveries.some(i=>i.floorId===t.floorId&&i.id!==t.id&&i.status!=="draft"&&i.frozenAt>t.frozenAt)||e.planChangeAlerts[t.floorId]||e.edgeSyncByFloor[t.floorId]?.dirty)return!0;const s=e.deliverySnapshotMetaMap[t.id],o=e.floorCurrentSignatures[t.floorId];return!!(s&&s.snapshotSource!=="legacy_missing"&&o&&s.configSignature!==o)}function Ha(e,t){const a=e.floorCurrentSignatures[t];if(!a||e.planChangeAlerts[t]||e.edgeSyncByFloor[t]?.dirty)return null;for(const s of e.buildingDeliveries){if(s.floorId!==t||s.status==="draft")continue;const o=e.deliverySnapshotMetaMap[s.id];if(o&&o.snapshotSource!=="legacy_missing"&&o.devices.length>0&&o.configSignature===a&&(s.status==="delivered"||s.verifiedCount>=s.deviceCount))return{batch:s,status:s.status==="delivered"?"delivered":"frozen"}}return null}function Wa(e,t,a){const s=a??e.deliverySnapshotMetaMap[t.id]??null,o=Os(e,t),i=!o&&Ms(t,s),c=t.status==="draft"&&!!(s?.rejectedAt||s?.rejectReason),y=Ha(e,t.floorId),p=y?.batch.versionTag??"—";return t.status==="delivered"?{actionLabel:"已交付",badgeLabel:"已交付",badgeCls:"pacom-badge--online",validityLabel:y?.batch.id===t.id?"当前有效（已签收交付）":"历史已交付（后续已有新变更）",superseded:!1,missingEvidence:!1,isRejected:!1,canSignOff:!1,latestEffectiveVersion:p}:t.status==="draft"?{actionLabel:c?"已退回整改":"阶段留档",badgeLabel:c?"已退回":"阶段留档",badgeCls:c?"pacom-badge--critical":"pacom-badge--warning",validityLabel:c?"已退回整改（不可签收）":"施工过程留档（不可签收）",superseded:!1,missingEvidence:!1,isRejected:c,canSignOff:!1,latestEffectiveVersion:p}:o?{actionLabel:"已冻结",badgeLabel:"已过期",badgeCls:"pacom-badge--neutral",validityLabel:"已过期（现场已变更或被新版替代）",superseded:!0,missingEvidence:!1,isRejected:!1,canSignOff:!1,latestEffectiveVersion:p}:i?{actionLabel:"已冻结",badgeLabel:"缺证据",badgeCls:"pacom-badge--warning",validityLabel:"缺原始证据或核验不完整（仅限查阅）",superseded:!1,missingEvidence:!0,isRejected:!1,canSignOff:!1,latestEffectiveVersion:p}:{actionLabel:"已冻结",badgeLabel:"待签收",badgeCls:"pacom-badge--accent",validityLabel:"当前有效（待接收方签收）",superseded:!1,missingEvidence:!1,isRejected:!1,canSignOff:!0,latestEffectiveVersion:p}}function ns(e,t,a){const s=a??_a(e,t),o=e.buildingDevicesByFloor.get(t)??(t===e.activeFloorId?e.floorDevices:[]),i=s.deferred?null:Ha(e,t),c=s.deferred?"本期不纳入":i?.status==="delivered"?"已交付":i?.status==="frozen"?"待签收":s.readyForFormalFreeze?"可正式冻结":s.planAlert?"换图待核对":o.length>0?!s.fttRecord&&!s.syncDirty&&s.placedCount===o.length&&s.boundVerifiedCount===o.length&&s.onlineCount===o.length?"待执行自检":"实施中":"待配置",y=s.deferred?"pacom-badge--neutral":i?.status==="delivered"||s.readyForFormalFreeze?"pacom-badge--online":i?.status==="frozen"?"pacom-badge--accent":o.length>0?"pacom-badge--warning":"pacom-badge--neutral";return{label:c,cls:y,currentVersionTag:i?.batch.versionTag??"",curDelivery:i}}function _a(e,t){const a=e.tree.floors.find(_=>_.id===t),s=e.buildingDevicesByFloor.get(t)??(t===e.activeFloorId?e.floorDevices:[]),o=e.deferredFloorIds.has(t),i=!!a?.plan,c=s.filter(_=>!!_.planPoint).length,y=s.filter(_=>_.physicalInstalled&&!!_.hardwareBinding).length,p=s.filter(_=>_.connectivity==="online").length,h=!!(e.edgeSyncByFloor[t]??(t===e.activeFloorId?e.edgeSync:void 0))?.dirty,w=e.planChangeAlerts[t]??null,x=!h&&!w?e.floorFttRecords[t]??null:null,L=[];return o||(i||L.push("待上传平面底图"),s.length===0&&L.push("本层尚无登记设备"),s.length>0&&c<s.length&&L.push(`未标记 ${s.length-c} 台`),s.length>0&&y<s.length&&L.push(`待绑定或复核 ${s.length-y} 台`),s.length>0&&p<s.length&&L.push(`待入网或离线 ${s.length-p} 台`),h&&L.push("待同步边缘配置"),w&&L.push("换图后待核对点位"),s.length>0&&!x&&L.push("尚未通过全层自检（FTT）")),{hasPlan:i,deviceCount:s.length,placedCount:c,boundVerifiedCount:y,onlineCount:p,syncDirty:h,planAlert:w,fttRecord:x,deferred:o,blockers:L,readyForFormalFreeze:!o&&s.length>0&&L.length===0}}function Tn(e,t){const a=e.status!=="connected",s=t.filter(o=>o.hardwareBinding?.protocol===e.protocol);return s.length>0?s.map(o=>{const i=o.connectivity==="offline"||a;return{pointName:o.category==="hvac"?"送风温度 / 阀门开度":o.category==="lighting"?"回路开关 / 亮度反馈":o.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:o.name,value:i?"无上报":o.category==="hvac"?"23.4°C ｜ 62%":o.category==="lighting"?"开启 ｜ 80%":o.category==="sensor"?"23.2°C ｜ 640 ppm":"负载 24% ｜ 18ms",interval:"60s",lastSeen:i?"46 分钟前":"12 秒前",quality:i?o.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${e.protocol.toUpperCase()} 采集通道汇总点`,deviceName:e.name,value:a?"采样延迟":"正常上报",interval:"60s",lastSeen:a?"38 分钟前":"9 秒前",quality:a?"delayed":"online"}]}function Ya(e,t){const a=new Set(t.map(o=>zt(o.name)??o.name.toUpperCase())),s=[];for(let o=1;o<=e.aboveFloors;o+=1){const i=`${o}F`;a.has(i)||s.push({kind:"above",level:o,name:i})}for(let o=1;o<=e.belowFloors;o+=1){const i=`B${o}`;a.has(i)||s.push({kind:"below",level:-o,name:i})}return e.hasRoof&&!a.has("RF")&&s.push({kind:"roof",level:99,name:"RF"}),s}function Ct(e,t){return`<button type="button" class="dep-info-btn" data-dep-info="${n(t)}" aria-label="${n(e)}" aria-expanded="false">${ce("info",14)}</button>`}function oa(e,t,a="layers"){const s=!e||!t,o=e?t?"":"待后端空间建档接口对接":"当前角色为只读权限";return`
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
      <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${s?`disabled title="${n(o)}"`:""}>+ 创建第一个项目</button>
    </div>`}function Ts(e,t,a){return e?t?"":`disabled title="${n(a)}"`:'disabled title="当前角色为只读权限"'}function qs(e){const{tree:t,canEdit:a,caps:s,connections:o}=e;if(t.projects.length===0)return oa(a,s.spatial,"plug");const i=Ts(a,s.manageConnections,"待后端系统接入写入接口对接"),c=o.reduce((m,u)=>m+u.collectedPoints,0),y=o.reduce((m,u)=>m+u.calculatedPoints,0),p=o.filter(m=>m.status==="connected").length,v=o.filter(m=>m.status!=="connected"),h=e.connSearch.trim().toLowerCase(),w=o.filter(m=>!(e.connStatusFilter!=="all"&&m.status!==e.connStatusFilter||h&&!`${m.name} ${m.protocol} ${m.endpoint}`.toLowerCase().includes(h))),x=Array.from(e.buildingDevicesByFloor.values()).flat(),L=x.length>0?x:e.floorDevices,_=e.connViewMode==="topology"?w.find(m=>m.id===e.selectedTopoConnId)??w[0]??null:null;return`
    <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">已连通通道</span>
        <div class="pacom-kpi-value">${p}<span class="pacom-kpi-unit">/ ${o.length}</span></div>
        <span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">通道连通率 ${Ct("通道连通率口径","按「已连通通道数 / 当前项目总接入通道数」计算，独立于单点位采集质量；点击行内「点位质量」可查看逐点读数与延迟。")}</span>
        <div class="pacom-kpi-value">${o.length?`${Math.round(p/o.length*100)}<span class="pacom-kpi-unit">%</span>`:"—"}</div>
        <span class="pacom-kpi-delta">${o.length?`分母：${o.length} 条已建通道`:"尚未配置接入通道"}</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">原始采集点 ${Ct("原始采集点说明","直接通过 BACnet / Modbus / DALI / MQTT 等协议从现场网关或子系统读取的实时遥测点位数量。")}</span>
        <div class="pacom-kpi-value">${c}<span class="pacom-kpi-unit">点</span></div>
        <span class="pacom-kpi-delta">协议直采实时遥测</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">衍生计算点 ${Ct("衍生计算点说明","基于原始采集点聚合计算生成的虚拟指标（如分区平均温度、能耗累计、碳排换算），与原始点位独立计数。")}</span>
        <div class="pacom-kpi-value">${y}<span class="pacom-kpi-unit">点</span></div>
        <span class="pacom-kpi-delta">能耗与聚合虚拟点位</span>
      </div>
    </div>

    ${v.length>0?`<div class="pacom-banner pacom-banner--critical">
            <div class="pacom-banner-text">
              <span class="pacom-banner-title">检测到 ${v.length} 条采集通道通信降级（${n(v.map(m=>m.name).join("、"))}）</span>
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
          <option value="connected" ${e.connStatusFilter==="connected"?"selected":""}>已连通（${p}）</option>
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
                ${w.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:36px 16px;"><strong>暂无匹配接入通道</strong><span>可调整筛选条件或点击右上角「+ 新增接入通道」。</span></div></td></tr>':w.map(m=>{const u=jn[m.status]??{label:m.status,cls:"pacom-badge--neutral"},f=e.expandedConnId===m.id,T=e.connMenuOpenId===m.id,O=f?Tn(m,L):[],G=m.buildingId?t.buildings.find(te=>te.id===m.buildingId)?.name:"",Y=m.floorId?t.floors.find(te=>te.id===m.floorId)?.name:"",ae=G?Y?`${G} ${Y}`:`${G} 整栋`:"全项目通用",de=m.collectedPoints+m.calculatedPoints;return`
                            <tr>
                              <td>
                                <strong>${n(m.name)}</strong>
                                <div class="pacom-row-sub">${n(ae)}</div>
                              </td>
                              <td><span class="pacom-badge pacom-badge--neutral">${m.protocol.toUpperCase()}</span></td>
                              <td><code style="font-size:12px; white-space:nowrap;">${n(m.endpoint)}</code></td>
                              <td style="white-space:nowrap; font-variant-numeric:tabular-nums;">${de===0?'<span class="pacom-row-sub">待映射</span>':`${m.collectedPoints} 采 ｜ ${m.calculatedPoints} 算`}</td>
                              <td style="white-space:nowrap;">
                                <span class="pacom-badge ${u.cls}">${u.label}</span>
                              </td>
                              <td>
                                <div style="display:flex; justify-content:flex-end; align-items:center; gap:6px; white-space:nowrap;">
                                  <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${n(m.id)}">${f?"收起":"点位"}</button>
                                  <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${n(m.id)}">测通</button>
                                  <div class="dep-row-menu-wrap">
                                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="padding:0 7px;" data-toggle-conn-row-menu="${n(m.id)}" aria-label="更多通道操作" aria-expanded="${T}">
                                      ${ce("more-horizontal",14)}
                                    </button>
                                    ${T?`
                                        <div class="dep-row-menu" role="menu">
                                          <button type="button" class="dep-row-menu-item" role="menuitem" data-copy-endpoint="${n(m.id)}" data-endpoint-val="${n(m.endpoint)}">${e.copiedEndpointId===m.id?"已复制端点":"复制端点"}</button>
                                          <button type="button" class="dep-row-menu-item" role="menuitem" data-edit-conn="${n(m.id)}" ${i}>编辑通道</button>
                                          <button type="button" class="dep-row-menu-item dep-row-menu-item--danger" role="menuitem" data-del-conn="${n(m.id)}" ${i}>删除通道</button>
                                        </div>`:""}
                                  </div>
                                </div>
                              </td>
                            </tr>
                            ${f?`
                                <tr class="pacom-table-detail-row">
                                  <td colspan="6">
                                    <div style="display:flex; flex-direction:column; gap:8px;">
                                      <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                                        <strong style="font-size:14px; font-weight:450;">传感器 / 子设备采集质量明细（${n(m.name)}）</strong>
                                        <span class="pacom-row-sub">${e.isDemoMode?"演示模拟采集态 ｜ ":""}在线正常 ｜ 延迟 &gt;30m ｜ 断流 &gt;3×间隔</span>
                                      </div>
                                      ${O.map(te=>{const ue=L.find(J=>J.name===te.deviceName);return`
                                            <div class="pacom-receipt-item">
                                              <span><strong>${n(te.deviceName)}</strong> ｜ ${n(te.pointName)}</span>
                                              <span style="display:inline-flex; align-items:center; gap:8px;">
                                                <span class="pacom-row-sub">当前 ${n(te.value)} ｜ ${n(te.lastSeen)}</span>
                                                <span class="pacom-badge ${te.quality==="online"?"pacom-badge--online":te.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                                  ${te.quality==="online"?"在线正常":te.quality==="delayed"?"延迟 >30m":"断流"}
                                                </span>
                                                ${ue?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-conn-jump-dev="${n(ue.id)}" data-conn-jump-floor="${n(ue.floorId)}">定位设备 →</button>`:""}
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
            ${L.filter(m=>m.category==="gateway").length===0?'<div class="pacom-row-sub">当前范围暂未登记边缘网关。</div>':L.filter(m=>m.category==="gateway").map(m=>{const u=Zt(m.connectivity,!!m.hardwareBinding);return`
                        <button type="button" class="dep-topo-node ${m.connectivity==="offline"?"is-issue":""}" data-conn-jump-dev="${n(m.id)}" data-conn-jump-floor="${n(m.floorId)}">
                          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                            <strong>${n(m.name)}</strong>
                            <span class="pacom-badge ${u.cls}">${u.label}</span>
                          </div>
                          <span class="pacom-row-sub">${n(m.hardwareBinding?.networkAddress??"未绑定地址")}</span>
                        </button>`}).join("")}
          </div>
          <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${ce("chevron-right",12)}</span></div>
          <div class="dep-topo-col">
            <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 协议接入通道（${w.length}）</strong>
            ${w.length===0?'<div class="pacom-row-sub">暂无匹配接入通道。</div>':w.map(m=>{const u=jn[m.status]??{label:m.status,cls:"pacom-badge--neutral"},f=_?.id===m.id;return`
                        <button type="button" class="dep-topo-node ${m.status!=="connected"?"is-issue":""}" style="${f?"box-shadow:0 0 0 1.5px var(--pacom-text-primary);":""}" data-select-topo-conn="${n(m.id)}">
                          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                            <strong>${n(m.name)}</strong>
                            <span class="pacom-badge ${u.cls}">${u.label}</span>
                          </div>
                          <span class="pacom-row-sub">${m.protocol.toUpperCase()} ｜ ${n(m.endpoint)}</span>
                        </button>`}).join("")}
          </div>
          <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${ce("chevron-right",12)}</span></div>
          <div class="dep-topo-col">
            <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 点位采集汇总</strong>
            ${w.length===0?'<div class="pacom-row-sub">无已映射点位。</div>':w.map(m=>`
                      <button type="button" class="dep-topo-node ${m.status!=="connected"?"is-issue":""}" style="${_?.id===m.id?"box-shadow:0 0 0 1.5px var(--pacom-text-primary);":""}" data-select-topo-conn="${n(m.id)}">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong>${n(m.name)}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${m.collectedPoints+m.calculatedPoints} 点</span>
                        </div>
                        <span class="pacom-row-sub">原始采集 ${m.collectedPoints} 点 ｜ 衍生计算 ${m.calculatedPoints} 点</span>
                      </button>`).join("")}
          </div>
        </div>
        ${_?(()=>{const m=Tn(_,L),u=_.buildingId?t.buildings.find(O=>O.id===_.buildingId)?.name:"",f=_.floorId?t.floors.find(O=>O.id===_.floorId)?.name:"",T=u?f?`${u} ${f}`:`${u} 整栋`:"全项目通用";return`
                  <div class="pacom-card" style="padding:16px 20px; gap:12px;">
                    <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                      <div>
                        <strong style="font-size:15px; font-weight:500;">通道明细：${n(_.name)}</strong>
                        <div class="pacom-row-sub">${_.protocol.toUpperCase()} ｜ ${n(_.endpoint)} ｜ 服务范围：${n(T)}</div>
                      </div>
                      <div style="display:inline-flex; gap:8px;">
                        <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${n(_.id)}">连通测通</button>
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-conn="${n(_.id)}" ${i}>编辑通道</button>
                      </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:6px;">
                      ${m.map(O=>{const G=L.find(Y=>Y.name===O.deviceName);return`
                            <div class="pacom-receipt-item">
                              <span><strong>${n(O.deviceName)}</strong> ｜ ${n(O.pointName)}</span>
                              <span style="display:inline-flex; align-items:center; gap:8px;">
                                <span class="pacom-row-sub">${n(O.value)} ｜ ${n(O.lastSeen)}</span>
                                <span class="pacom-badge ${O.quality==="online"?"pacom-badge--online":O.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                  ${O.quality==="online"?"正常":O.quality==="delayed"?"延迟":"断流"}
                                </span>
                                ${G?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-conn-jump-dev="${n(G.id)}" data-conn-jump-floor="${n(G.floorId)}">定位设备 →</button>`:""}
                              </span>
                            </div>`}).join("")}
                    </div>
                  </div>`})():""}`}
  `}function Bs(e){const{tree:t,canEdit:a,caps:s}=e;if(t.projects.length===0)return oa(a,s.spatial,"clipboard-check");const o=t.buildings.find(z=>z.id===e.activeBuildingId)??null,i=e.activeBuildingId?e.sortedBuildingFloors(e.activeBuildingId):[],c=new Map(i.map(z=>[z.id,_a(e,z.id)])),y=i.filter(z=>!c.get(z.id)?.deferred),p=i.length-y.length,v=y.filter(z=>!!z.plan).length,h=y.flatMap(z=>e.buildingDevicesByFloor.get(z.id)??[]),w=h.filter(z=>!!z.planPoint).length,x=h.filter(z=>z.connectivity==="online").length,L=h.filter(z=>z.connectivity==="unknown"||!z.hardwareBinding&&z.connectivity!=="offline").length,_=Math.max(0,h.length-x-L),m=h.filter(z=>z.physicalInstalled&&!!z.hardwareBinding).length,u=y.filter(z=>(e.buildingDevicesByFloor.get(z.id)?.length??0)>0),f=u.filter(z=>!e.edgeSyncByFloor[z.id]?.dirty).length,T=u.length-f,O=y.filter(z=>!!e.planChangeAlerts[z.id]).length,G=u.filter(z=>!!c.get(z.id)?.fttRecord).length,Y=y.filter(z=>!c.get(z.id)?.readyForFormalFreeze),ae=new Map(i.map(z=>[z.id,ns(e,z.id,c.get(z.id))])),de=y.filter(z=>ae.get(z.id)?.curDelivery?.status==="delivered").length,te=y.filter(z=>ae.get(z.id)?.curDelivery?.status==="frozen").length,ue=y.filter(z=>c.get(z.id)?.readyForFormalFreeze&&!ae.get(z.id)?.curDelivery).length,J=[];ue>0&&J.push(`待冻结 ${ue} 层`),te>0&&J.push(`待签收 ${te} 层`),de>0&&J.push(`已交付 ${de} 层`);const H=e.acceptanceFilter==="active"&&u.length===0?"all":e.acceptanceFilter,Q=H==="active"?u:H==="pending"?Y:i,ge=[{num:1,label:"项目与底图",nav:"project_config",val:`${v}`,unit:`/ ${y.length} 层`,done:y.length>0&&v===y.length,warn:!1,sub:y.length===0?"本期暂无纳入楼层":v===y.length?p>0?`全部就绪（另 ${p} 层暂缓）`:"本期底图全部就绪":`尚缺 ${y.length-v} 层底图 →`},{num:2,label:"设备标记",nav:"device_marking",val:`${w}`,unit:`/ ${h.length} 台`,done:h.length>0&&w===h.length&&O===0,warn:O>0,sub:O>0?`${O} 层换图待核对 →`:h.length===0?"待登记设备 →":h.length-w>0?`未标记 ${h.length-w} 台 →`:"坐标全部核对就绪"},{num:3,label:"入网在线",nav:"device_network",val:`${x}`,unit:`/ ${h.length} 台`,done:h.length>0&&x===h.length,warn:_>0,sub:h.length===0?"待登记设备 →":_>0?`${_} 台离线${L>0?` ｜ ${L} 待入网`:""} →`:L>0?`${L} 台待绑定入网 →`:"全量在线可达"},{num:4,label:"边缘同步",nav:"device_network",val:`${f}`,unit:`/ ${u.length} 层`,done:u.length>0&&T===0,warn:T>0,sub:u.length===0?"待部署实施层 →":T>0?`${T} 层待同步 →`:`已同步 ｜ v${e.edgeSync.version}`},{num:5,label:"复核自检",nav:"device_list",val:`${m}`,unit:`/ ${h.length} 台`,done:h.length>0&&m===h.length&&G===u.length,warn:!1,sub:h.length===0?"待登记设备 →":m<h.length?`待复核 ${h.length-m} 台 →`:G<u.length?`已复核 ｜ 待自检 ${u.length-G} 层`:"全部复核并通过自检"}],Ue=ge.findIndex(z=>!z.done),ye=e.batchFttResult&&e.batchFttResult.buildingId===e.activeBuildingId&&!e.planChangeAlerts[e.batchFttResult.floorId]&&!e.edgeSyncByFloor[e.batchFttResult.floorId]?.dirty&&(e.batchFttResult.failed>0||e.floorFttRecords[e.batchFttResult.floorId])?e.batchFttResult:null;return`
    <div class="dep-pipeline-bar" role="region" aria-label="整栋 5 步部署门控推进条">
      ${ge.map((z,ve)=>{const B=ve===Ue;return`
            <button type="button" class="${["dep-pipeline-step",z.done?"is-done":"",z.warn?"is-warn":"",B?"is-focus":""].filter(Boolean).join(" ")}" data-dep-nav="${z.nav}">
              <div class="dep-pipeline-step-head">
                <span class="dep-pipeline-num">${z.done?ce("check",12):z.num}</span>
                <span>${z.label}</span>
              </div>
              <div class="dep-pipeline-val">${z.val}<span class="pacom-kpi-unit">${z.unit}</span></div>
              <span class="dep-pipeline-sub">${z.sub}</span>
            </button>`}).join("")}
    </div>

    ${ye?`<div class="pacom-banner ${ye.failed===0?"pacom-banner--ok":"pacom-banner--critical"}">
            <div class="pacom-banner-text">
              <span class="pacom-banner-title">最近全层自检（${e.isDemoMode?"演示模拟回读":"FTT"} ｜ ${n(ye.floorName)} ｜ ${ye.ranAt}）</span>
              <span class="pacom-banner-sub">通过 ${ye.passed}/${ye.total} 台${ye.failedNames.length?` ｜ 异常：${n(ye.failedNames.join("、"))}`:e.isDemoMode?" ｜ 演示环境验证通过，允许正式冻结":" ｜ 已完成状态回读与安全复位"}</span>
            </div>
            <button type="button" class="pacom-drawer-close" data-dismiss-ftt="1" aria-label="关闭自检提示">${ce("x",14)}</button>
          </div>`:""}

    <section class="pacom-section">
      <div class="pacom-section-head">
        <div>
          <h2 class="pacom-section-title">楼层 × 工序交付门控矩阵</h2>
          <span class="pacom-row-sub">${J.length>0?`当前验收进展：${J.join(" ｜ ")} ｜ `:""}点击单元格直达该层修复；暂不纳入本期的楼层可显式标为「暂缓本期」</span>
        </div>
        ${h.length>0||e.showEmptyBuildingMatrix?`
            <div class="pacom-tabs" role="tablist" aria-label="验收楼层筛选">
              <button type="button" class="pacom-tab" role="tab" aria-selected="${H==="active"}" data-acc-filter="active">实施中 ${u.length}</button>
              <button type="button" class="pacom-tab" role="tab" aria-selected="${H==="pending"}" data-acc-filter="pending">待补缺项 ${Y.length}</button>
              <button type="button" class="pacom-tab" role="tab" aria-selected="${H==="all"}" data-acc-filter="all">全部楼层 ${i.length}</button>
            </div>`:""}
      </div>

      ${h.length===0&&!e.showEmptyBuildingMatrix?`
          <div class="dep-empty-card">
            <div class="dep-empty-icon">${ce("map-pin",20)}</div>
            <strong style="font-size:16px; line-height:24px; font-weight:500; color:var(--pacom-text-primary);">${n(o?.name??"当前楼宇")} 尚未开始设备部署</strong>
            <span class="pacom-row-sub">本栋已建 ${i.length} 层（${v}/${y.length} 层底图已就绪），当前暂无已登记设备。请先前往「设备标记」登记并布置本栋设备，完成后即可回此页执行自检与正式冻结。</span>
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
                  ${Q.length===0?'<tr><td colspan="7"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>当前筛选无楼层</strong><span>可切换至「全部楼层」查看整栋状态，或在「项目配置」中建档。</span></div></td></tr>':Q.map(z=>{const ve=e.buildingDevicesByFloor.get(z.id)??[],B=t.zones.filter(xe=>xe.floorId===z.id),Z=c.get(z.id),ke=ve.some(xe=>xe.connectivity!=="online"&&!Gt(xe)),W=ke?"device_list":"device_network",S=ae.get(z.id),F=S.curDelivery,P=e.buildingDeliveries.find(xe=>xe.floorId===z.id&&xe.status!=="draft"),b=S.label,C=S.cls,ne=s.deferredFloors&&!F;return`
                              <tr style="${Z.deferred?"opacity:0.65;":""}">
                                <td>
                                  <strong>${n(z.name)}</strong>
                                  <div class="pacom-row-sub">${z.areaSqm?`${z.areaSqm} m²`:"待补面积"}${S.currentVersionTag?` ｜ ${n(S.currentVersionTag)}`:P?` ｜ 历史 ${n(P.versionTag)}`:""}</div>
                                </td>
                                <td>
                                  <button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-matrix-floor="${n(z.id)}">
                                    <span class="pacom-dot ${Z.planAlert?"pacom-dot--warning":Z.hasPlan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                    <span>${Z.planAlert?"换图待核对":Z.hasPlan?`已传图 ｜ ${B.length} 区`:"待传底图"}</span>
                                  </button>
                                </td>
                                <td>
                                  <button type="button" class="dep-matrix-btn" data-matrix-nav="device_marking" data-matrix-floor="${n(z.id)}">
                                    <span class="pacom-dot ${ve.length>0&&Z.placedCount===ve.length&&!Z.planAlert?"pacom-dot--online":ve.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span>
                                    <span>${ve.length>0?`${Z.placedCount}/${ve.length}`:"未标记"}</span>
                                  </button>
                                </td>
                                <td>
                                  <button type="button" class="dep-matrix-btn" data-matrix-nav="${W}" data-matrix-floor="${n(z.id)}" ${ke?'data-matrix-offline="1"':""}>
                                    <span class="pacom-dot ${ve.length>0&&Z.onlineCount===ve.length?"pacom-dot--online":ve.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span>
                                    <span>${ve.length>0?`${Z.onlineCount}/${ve.length}`:"—"}</span>
                                  </button>
                                </td>
                                <td>
                                  <button type="button" class="dep-matrix-btn" data-matrix-nav="device_list" data-matrix-floor="${n(z.id)}">
                                    <span class="pacom-dot ${ve.length>0&&Z.boundVerifiedCount===ve.length?"pacom-dot--online":ve.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span>
                                    <span>${ve.length>0?`${Z.boundVerifiedCount}/${ve.length}`:"—"}</span>
                                  </button>
                                </td>
                                <td>
                                  <span class="pacom-badge ${C}" title="${n(Z.blockers.join("；"))}">${b}</span>
                                </td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; gap:6px; white-space:nowrap;">
                                    ${ne?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-toggle-defer-floor="${n(z.id)}" data-defer-next="${Z.deferred?"0":"1"}" ${a?"":'disabled title="当前角色为只读权限"'}>${Z.deferred?"恢复纳入":"暂缓本期"}</button>`:""}
                                    ${!Z.deferred&&ve.length>0?`
                                        <button type="button" class="pacom-btn pacom-btn--sm" data-floor-ftt="${n(z.id)}" ${a?"":'disabled title="当前角色为只读权限"'}>自检</button>
                                        ${F?.status==="delivered"?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-open-snapshot="${n(F.batch.id)}">查看交付</button>`:F?.status==="frozen"?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-open-snapshot="${n(F.batch.id)}">${a?"去签收":"查看快照"}</button>`:`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-open-freeze-floor="${n(z.id)}" ${a?"":'disabled title="当前角色为只读权限"'}>${Z.readyForFormalFreeze?"冻结":"留档"}</button>`}`:""}
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
          ${Ct("冻结、留档与签收说明","存在待补项时仅可保存「阶段留档」；满足全部 5 步门控并通过最新自检后可生成「已冻结」正式基线；正式基线可查看逐设备不可变快照并由接收方执行「签收交付（已交付）」。")}
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
              ${e.buildingDeliveries.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>本栋暂无交付冻结或阶段留档记录</strong><span>完成设备复核与自检后，点击右上角「交付冻结」生成基线快照。</span></div></td></tr>':e.buildingDeliveries.map(z=>{const ve=t.floors.find(ke=>ke.id===z.floorId)?.name??z.floorId,B=Wa(e,z),Z=e.deliverySnapshotMetaMap[z.id];return`
                          <tr style="${B.superseded?"opacity:0.72;":""}">
                            <td>
                              <div style="font-weight:450;">${n(z.versionTag)}</div>
                              <div class="pacom-row-sub"><code>${n(z.id)}</code></div>
                            </td>
                            <td>${n(ve)}</td>
                            <td><strong>${z.verifiedCount}</strong> / ${z.deviceCount} 台</td>
                            <td>
                              <div>${n(z.frozenBy)}${B.isRejected&&Z?.rejectedBy?` → ${n(Z.rejectedBy)}退回`:""}</div>
                              <div class="pacom-row-sub">${n(z.note??"—")}</div>
                            </td>
                            <td><span class="pacom-badge ${B.badgeCls}" title="${n(B.validityLabel)}">${B.badgeLabel}</span></td>
                            <td>
                              <div style="display:flex; justify-content:flex-end; gap:6px; white-space:nowrap;">
                                ${B.canSignOff&&s.signOffDelivery&&a?`<button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-open-snapshot="${n(z.id)}">去签收</button>`:`<button type="button" class="pacom-btn pacom-btn--sm" data-open-snapshot="${n(z.id)}">${z.status==="delivered"?"查看交付":"查看快照"}</button>`}
                              </div>
                            </td>
                          </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `}function At(e){return e?`<div class="dep-modal-error" role="alert">${n(e)}</div>`:""}function Rs(e){const{tree:t,canEdit:a,caps:s}=e,o=[],i=t.projects.find(p=>p.id===e.activeProjectId)??t.projects[0]??null,c=t.buildings.find(p=>p.id===e.activeBuildingId)??(i?t.buildings.find(p=>p.projectId===i.id):null)??null;if(e.showNewProjectModal){const p=e.projFormDraft;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建项目">
        <form class="dep-modal-card" data-create-project="1">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">新建项目</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${At(e.modalError)}
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
              <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" placeholder="如：广实3号园" value="${n(p?.name??"")}" required /></label>
              <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="${n(p?.city??"广州市")}" /></label>
              <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" placeholder="街道与门牌号" value="${n(p?.address??"")}" /></label>
              <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" placeholder="如：113.3824" value="${n(p?.lng??"")}" /></label>
              <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" placeholder="如：23.0652" value="${n(p?.lat??"")}" /></label>
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
      </div>`)}if(e.showEditProjectModal&&i){const p=e.projFormDraft,h=t.buildings.filter(w=>w.projectId===i.id).reduce((w,x)=>w+e.sortedBuildingFloors(x.id).reduce((L,_)=>L+(e.buildingDevicesByFloor.get(_.id)?.length??0),0),0);o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑项目">
        <form class="dep-modal-card" data-save-project="${n(i.id)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">编辑项目：${n(i.name)}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${At(e.modalError)}
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
              <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" value="${n(p?.name??i.name)}" required ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="${n(p?.city??i.city??"")}" ${a?"":"disabled"} /></label>
              <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" value="${n(p?.address??i.address??"")}" ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" value="${n(p?p.lng:i.location?.lng??"")}" ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" value="${n(p?p.lat:i.location?.lat??"")}" ${a?"":"disabled"} /></label>
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
      </div>`)}if(e.showNewBuildingModal&&i){const p=e.bldFormDraft;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建楼宇">
        <form class="dep-modal-card" data-create-bld="${n(i.id)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">新建楼宇（${n(i.name)}）</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${At(e.modalError)}
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
              <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" placeholder="如：G栋" value="${n(p?.name??"")}" required /></label>
              <label class="dep-field"><span class="dep-field-label">总建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" placeholder="选填" value="${n(p?.area??"")}" /></label>
              <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${n(p?.above??"12")}" /></label>
              <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${n(p?.below??"0")}" /></label>
              <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">标准层面积 (m²，选填)</span><input class="pacom-input" name="bStdFloorArea" type="number" step="0.1" placeholder="填写后自动回填至所有自动生成的楼层" value="${n(p?.stdFloorArea??"")}" /></label>
            </div>
            <div style="display:flex; align-items:center; gap:20px; flex-wrap:wrap; font-size:14px;">
              <label style="display:inline-flex; align-items:center; gap:8px; cursor:pointer;"><input type="checkbox" name="bRoof" ${p?p.hasRoof?"checked":"":"checked"} />含屋面层 (RF)</label>
              <label style="display:inline-flex; align-items:center; gap:8px; cursor:pointer;"><input type="checkbox" name="bAutoFloors" ${p?p.autoFloors?"checked":"":"checked"} />自动生成全部楼层并进入导图</label>
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
      </div>`)}const y=e.editingBuildingId?t.buildings.find(p=>p.id===e.editingBuildingId)??null:null;if(y){const p=e.sortedBuildingFloors(y.id),v=p.reduce((w,x)=>w+(e.buildingDevicesByFloor.get(x.id)?.length??0),0),h=Ya(y,p);o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑楼宇">
        <form class="dep-modal-card" data-save-building="${n(y.id)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">编辑楼宇：${n(y.name)}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${At(e.modalError)}
            <div style="display:flex; align-items:center; gap:14px; padding:12px; border-radius:12px; background:var(--pacom-surface-primary); box-shadow:inset 0 0 0 var(--hw) var(--pacom-border-subtle);">
              <img src="${n(y.imageUrl??"./media/building-e.webp")}" alt="${n(y.name)}" style="width:72px; height:54px; object-fit:contain; border-radius:8px; background:#ffffff;" />
              <div style="flex:1; min-width:0;">
                <div style="font-size:14px; font-weight:450;">楼宇外观 / 白模图</div>
                <div class="pacom-row-sub">支持透明 PNG / WebP / JPG</div>
              </div>
              <label class="pacom-btn" style="cursor:${!a||!s.spatial?"not-allowed":"pointer"}; opacity:${!a||!s.spatial?"0.45":"1"};">
                <span>替换图片</span>
                <input type="file" name="bldImgUpload" accept="image/*" data-upload-bld="${n(y.id)}" style="display:none;" ${!a||!s.spatial?"disabled":""} />
              </label>
            </div>
            <div class="dep-param-grid">
              <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" value="${n(y.name)}" required ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">总建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" value="${n(y.areaSqm??"")}" placeholder="选填" ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">规划地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${y.aboveFloors}" ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">规划地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${y.belowFloors}" ${a?"":"disabled"} /></label>
            </div>
            <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
              <label style="display:inline-flex; align-items:center; gap:8px; font-size:14px; cursor:pointer;"><input type="checkbox" name="bRoof" ${y.hasRoof?"checked":""} ${a?"":"disabled"} />含屋面层 (RF)</label>
              ${h.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${n(y.id)}" ${!a||!s.spatial?"disabled":""}>一键补齐缺失 ${h.length} 层</button>`:`<span class="pacom-row-sub">已建 ${p.length} 个楼层</span>`}
            </div>
          </div>
          <div class="dep-modal-foot">
            <button type="button" class="pacom-btn pacom-btn--danger" data-delete-building="${n(y.id)}" ${!a||!s.spatial||v>0?`disabled title="${v>0?"包含运行中设备，请先解绑后再删除":"当前角色只读"}"`:""}>删除楼宇</button>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!s.spatial?"disabled":""}>保存更改</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.showNewFloorModal&&c){const p=e.floorFormDraft;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增楼层">
        <form class="dep-modal-card dep-modal-card--sm" data-create-floor="${n(c.id)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">新增楼层（${n(c.name)}）</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${At(e.modalError)}
            <div class="dep-param-grid">
              <label class="dep-field"><span class="dep-field-label">楼层名称</span><input class="pacom-input" name="fName" placeholder="如：23F / B1 / RF" value="${n(p?.name??"")}" required /></label>
              <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="fArea" type="number" step="0.1" placeholder="选填" value="${n(p?.area??"")}" /></label>
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
      </div>`)}if(e.showBatchModal&&c){const p=e.sortedBuildingFloors(c.id),v=new Map;e.pendingBatchUploads.forEach(_=>{_.matchedFloorId&&v.set(_.matchedFloorId,(v.get(_.matchedFloorId)??0)+1)});const h=new Set(Array.from(v.entries()).filter(([,_])=>_>1).map(([_])=>_)),w=v.size,x=h.size>0,L=Array.from(v.keys()).filter(_=>!!p.find(m=>m.id===_)?.plan).length;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="批量导入平面底图">
        <div class="dep-modal-card dep-modal-card--wide">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">批量导入 ${n(c.name)} 平面底图</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${At(e.modalError)}
            <div class="dep-upload-drop" data-batch-dropzone="${n(c.id)}" style="padding:22px; flex-direction:column; align-items:center; text-align:center; gap:8px; ${e.batchDropActive?"border-color:var(--pacom-accent-solid); background:var(--pacom-accent-soft);":""}">
              <strong style="font-size:14px; font-weight:450;">拖拽多张平面图到此区域，或点击选择文件</strong>
              <span class="pacom-row-sub">自动识别 01F、02F平面、首层、屋面、RF、地下室B1 等中英文文件名，支持手动调整目标楼层</span>
              <label class="pacom-btn" style="cursor:${!a||!s.spatial?"not-allowed":"pointer"}; margin-top:4px; opacity:${!a||!s.spatial?"0.45":"1"};">
                <span>选择多张图片</span>
                <input type="file" name="batchFloorPlans" accept="image/*" multiple data-batch-upload-floors="${n(c.id)}" style="display:none;" ${!a||!s.spatial?"disabled":""} />
              </label>
            </div>
            ${x?`<div class="pacom-banner pacom-banner--critical" style="padding:10px 14px;">
                     <div class="pacom-banner-text">
                       <span class="pacom-banner-title">检测到 ${h.size} 个目标楼层被多张文件重复匹配</span>
                       <span class="pacom-banner-sub">每个楼层仅允许导入 1 张底图，请将重复项改为「未分配」或指定其他楼层后再导入。</span>
                     </div>
                   </div>`:L>0?`<div class="pacom-banner" style="padding:10px 14px;">
                       <div class="pacom-banner-text">
                         <span class="pacom-banner-title">其中 ${L} 个目标楼层已有底图，导入后将升级底图版本</span>
                         <span class="pacom-banner-sub">已关联设备的楼层将保留硬件绑定并标记「换图待核对」。</span>
                       </div>
                     </div>`:""}
            ${e.pendingBatchUploads.length>0?`<div style="display:flex; flex-direction:column; gap:8px;">
                    <div class="pacom-row-sub">已选 ${e.pendingBatchUploads.length} 张图片，匹配 ${w} 个唯一楼层：</div>
                    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(300px, 1fr)); gap:8px; max-height:240px; overflow-y:auto;">
                      ${e.pendingBatchUploads.map(_=>{const m=!!(_.matchedFloorId&&h.has(_.matchedFloorId)),u=_.matchedFloorId?!!p.find(f=>f.id===_.matchedFloorId)?.plan:!1;return`
                          <div class="pacom-receipt-item" style="padding:8px 10px; gap:8px; ${m?"box-shadow:inset 0 0 0 1px var(--pacom-status-critical);":""}">
                            <div style="min-width:0; flex:1;">
                              <div style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:14px;" title="${n(_.file.name)}">${n(_.file.name)}</div>
                              ${m?'<span class="pacom-row-sub" style="color:var(--pacom-status-critical);">目标层重复，请改选或设为未分配</span>':u?'<span class="pacom-row-sub">将覆盖已有底图</span>':""}
                            </div>
                            <select class="pacom-select" name="overrideFloor_${n(_.id)}" style="width:104px; flex:none;" data-batch-override-floor="${n(_.id)}" aria-label="指定目标楼层">
                              <option value="">未分配</option>
                              ${p.map(f=>`<option value="${n(f.id)}" ${_.matchedFloorId===f.id?"selected":""}>${n(f.name)}</option>`).join("")}
                            </select>
                          </div>`}).join("")}
                    </div>
                  </div>`:""}
          </div>
          <div class="dep-modal-foot">
            <button type="button" class="pacom-btn pacom-btn--ghost" data-cancel-batch-upload="1" ${e.pendingBatchUploads.length===0?"disabled":""}>清空已选</button>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="button" class="pacom-btn pacom-btn--primary" data-confirm-batch-upload="1" ${w===0||x||!a||!s.spatial?"disabled":""}>确认导入（${w} 层）</button>
            </div>
          </div>
        </div>
      </div>`)}if(e.copyZoneSourceFloorId&&c){const p=t.floors.find(h=>h.id===e.copyZoneSourceFloorId),v=e.sortedBuildingFloors(c.id).filter(h=>h.id!==e.copyZoneSourceFloorId);p&&v.length>0&&o.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="复用功能区至其他楼层">
          <div class="dep-modal-card">
            <div class="dep-modal-head">
              <h3 class="dep-modal-title">复用 ${n(p.name)} 功能区至其他楼层</h3>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              ${At(e.modalError)}
              <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                <span class="pacom-row-sub">勾选目标楼层（已选 ${e.copyTargetFloorIds.size} 层）</span>
                <div style="display:flex; gap:6px;">
                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="empty">空白地上层</button>
                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="above">全部地上层</button>
                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="clear">清空</button>
                </div>
              </div>
              <div style="display:flex; flex-wrap:wrap; gap:8px;">
                ${v.map(h=>{const w=e.copyTargetFloorIds.has(h.id),x=t.zones.filter(L=>L.floorId===h.id).length;return`
                      <label class="pacom-btn pacom-btn--sm" style="cursor:pointer; ${w?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}">
                        <input type="checkbox" name="copyFloor_${n(h.id)}" data-copy-target-floor="${n(h.id)}" ${w?"checked":""} style="margin:0;" />
                        <span>${n(h.name)}${x>0?` (${x}区)`:""}</span>
                      </label>`}).join("")}
              </div>
            </div>
            <div class="dep-modal-foot">
              <span></span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
                <button type="button" class="pacom-btn pacom-btn--primary" data-confirm-copy-zones="${n(p.id)}" ${e.copyTargetFloorIds.size===0||!a||!s.spatial?"disabled":""}>确认复制（${e.copyTargetFloorIds.size} 层）</button>
              </div>
            </div>
          </div>
        </div>`)}if(e.showNewDevModal){const p=t.zones.filter(v=>v.floorId===e.activeFloorId);o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增设备">
        <form class="dep-modal-card" data-create-dev="1">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">新增设备</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${At(e.modalError)}
            <label class="dep-field">
              <span class="dep-field-label">设备名称</span>
              <input class="pacom-input" name="devName" placeholder="如：703 会议室三控面板" required />
            </label>
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">设备类型</span>
                <select class="pacom-select" name="devPreset">${cn.map(v=>`<option value="${v.key}">${v.label}</option>`).join("")}</select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">所属功能区</span>
                <select class="pacom-select" name="devZone">
                  <option value="">暂不分配</option>
                  ${p.map(v=>`<option value="${n(v.id)}">${n(v.name)}</option>`).join("")}
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
      </div>`)}if(e.groupModal){const p=e.groupModal.mode==="edit"&&e.groupModal.groupId?e.groups.find(f=>f.id===e.groupModal.groupId)??null:null,v=e.groupModal.track,h=pn[v],w=h.includes(e.groupModal.draftType)?e.groupModal.draftType:h[0],x=new Set(e.groupModal.draftMemberIds),L=v==="mesh_auto"?e.floorDevices.filter(f=>f.category==="gateway"):[],_=new Set(L.map(f=>f.id));v==="mesh_auto"&&_.forEach(f=>x.add(f));const m=v==="mesh_auto"?e.floorDevices.filter(f=>Gt(f)&&f.category!=="gateway"):e.floorDevices,u=v==="mesh_auto"&&w.includes("灯")&&!m.some(f=>f.category==="lighting"&&x.has(f.id));o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="${p?"编辑设备分组":"新建设备分组"}">
        <form class="dep-modal-card" data-save-group="${n(p?.id??"")}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">${p?"编辑设备分组":"新建设备分组"}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${At(e.modalError)}
            <label class="dep-field">
              <span class="dep-field-label">分组名称</span>
              <input class="pacom-input" name="gName" data-group-draft-name="1" placeholder="如：7F 西侧办公区联动组" value="${n(e.groupModal.draftName)}" required />
            </label>
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">运行模式</span>
                <select class="pacom-select" name="gTrack" data-group-modal-track="1">
                  <option value="mesh_auto" ${v==="mesh_auto"?"selected":""}>端侧 Mesh 自治组</option>
                  <option value="cloud_biz" ${v==="cloud_biz"?"selected":""}>云端业务分组</option>
                </select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">分组类别</span>
                <select class="pacom-select" name="gType" data-group-draft-type="1">
                  ${h.map(f=>`<option value="${f}" ${w===f?"selected":""}>${f}</option>`).join("")}
                </select>
              </label>
            </div>
            ${v==="mesh_auto"?`<div class="pacom-receipt-item" style="padding:8px 12px;">
                     <span style="font-size:13px;">
                       <strong>基础设施网关</strong>
                       <span class="pacom-row-sub"> ｜ ${L.length>0?n(L.map(f=>f.name).join("、")):"本层暂未登记边缘网关"}</span>
                     </span>
                     <span class="pacom-badge pacom-badge--accent">自动同步</span>
                     ${L.map(f=>`<input type="hidden" name="gMemberIds" value="${n(f.id)}" />`).join("")}
                   </div>`:""}
            ${u?`<div class="pacom-banner" style="padding:9px 12px;">
                     <div class="pacom-banner-text">
                       <span class="pacom-banner-title" style="font-size:13px;">当前未勾选照明执行设备（驱动器 / 开关面板）</span>
                       <span class="pacom-banner-sub">灯光联动组至少需勾选 1 台照明执行端才可创建；可点击下方「一键勾选本层照明与传感」。</span>
                     </div>
                   </div>`:""}
            <div class="dep-field">
              <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                <span class="dep-field-label">
                  <span>选择末端成员（可选 ${m.length} 台）</span>
                  ${Ct("分组成员规则","端侧蓝牙 Mesh 自治组会自动将边缘网关纳入同步基础设施，此处只需勾选末端传感与执行设备；云端业务分组可自由混选本层所有设备。")}
                </span>
                ${v==="mesh_auto"&&m.some(f=>f.category==="lighting"||f.category==="sensor")?'<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-group-select-ls="1">一键勾选本层照明与传感</button>':""}
              </div>
              <div class="dep-check-list">
                ${m.length===0?'<div class="pacom-row-sub" style="padding:12px; text-align:center;">本层暂无可选末端设备，请先在「设备标记」或「设备列表」中新增设备。</div>':m.map(f=>{const T=x.has(f.id);return`
                            <label class="dep-check-item">
                              <span style="display:inline-flex; align-items:center; gap:8px; min-width:0;">
                                <input type="checkbox" name="gMemberIds" data-group-draft-member="1" value="${n(f.id)}" ${T?"checked":""} />
                                <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${n(f.name)}</span>
                              </span>
                              <span class="pacom-badge pacom-badge--neutral">${La[f.category]}</span>
                            </label>`}).join("")}
              </div>
            </div>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!s.deviceGroups?"disabled":""}>${p?"保存分组":"创建分组"}</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.connModal){const p=e.connModal.mode==="edit"&&e.connModal.connectionId?e.connections.find(u=>u.id===e.connModal.connectionId)??null:null,v=e.connFormDraft,h=i?t.buildings.filter(u=>u.projectId===i.id):[],w=e.connModal.fromProjectLevel!==!1,x=v?v.buildingId:p?p.buildingId:w?"":e.activeBuildingId??"",L=x?e.sortedBuildingFloors(x):[],_=v?v.floorId:p?p.floorId:w?"":e.activeFloorId??"",m=v?.protocol??p?.protocol??"bacnet_ip";o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="${p?"编辑接入通道":"新增接入通道"}">
        <form class="dep-modal-card" data-save-conn="${n(p?.id??"")}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">${p?"编辑接入通道":"新增子系统接入通道"}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${At(e.modalError)}
            <label class="dep-field">
              <span class="dep-field-label">通道名称</span>
              <input class="pacom-input" name="cName" placeholder="如：E栋 8F 中央空调网关" value="${n(v?.name??p?.name??"")}" required />
            </label>
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">服务楼宇</span>
                <select class="pacom-select" name="cBuilding" data-conn-bld-select="1">
                  <option value="">全项目通用</option>
                  ${h.map(u=>`<option value="${n(u.id)}" ${x===u.id?"selected":""}>${n(u.name)}</option>`).join("")}
                </select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">服务楼层</span>
                <select class="pacom-select" name="cFloor" ${x?"":"disabled"}>
                  <option value="">${x?"整栋 / 不限楼层":"全项目不限楼层"}</option>
                  ${L.map(u=>`<option value="${n(u.id)}" ${_===u.id?"selected":""}>${n(u.name)}</option>`).join("")}
                </select>
              </label>
            </div>
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">协议类型</span>
                <select class="pacom-select" name="cProto">
                  ${[["bacnet_ip","空调 / BACnet IP"],["modbus_tcp","电表 / Modbus TCP"],["modbus_rtu","RS485 / Modbus RTU"],["dali","照明 / DALI-2"],["mqtt","空气质量 / MQTT"],["knx","楼宇总线 / KNX"]].map(([u,f])=>`<option value="${u}" ${m===u?"selected":""}>${f}</option>`).join("")}
                </select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">网关端点</span>
                <input class="pacom-input" name="cEndpoint" placeholder="如：10.7.8.20:47808" value="${n(v?.endpoint??p?.endpoint??"")}" required />
              </label>
            </div>
            <span class="pacom-row-sub">提交时将自动检测同项目局域网端点冲突并按已绑定同协议设备统计采集点位。</span>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!s.manageConnections?"disabled":""}>${p?"保存通道":"校验并接入"}</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.showFreezeModal){const p=c?e.sortedBuildingFloors(c.id):[],v=p.some(f=>f.id===e.freezeTargetFloorId)?e.freezeTargetFloorId:p.find(f=>(e.buildingDevicesByFloor.get(f.id)?.length??0)>0)?.id??p[0]?.id??e.activeFloorId,h=t.floors.find(f=>f.id===v),w=v?_a(e,v):null,x=v&&!w?.deferred?Ha(e,v):null,L=!w||w.deviceCount===0,_=!!w?.deferred,m=!!x,u=!!w?.readyForFormalFreeze&&!m;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="交付冻结与阶段留档">
        <form class="dep-modal-card" data-confirm-freeze="${n(v)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">
              <span>${u?"正式交付冻结":"交付冻结与阶段留档"}</span>
              ${Ct("正式冻结与阶段留档区别","仅当底图、点位标记、绑定复核、在线入网、边缘同步及最新全层自检（FTT）全部通过时，才允许生成「正式冻结」基线；参数或配置变更后必须重新同步并重测；存在待补项时仅支持保存「阶段留档（草稿）」。")}
            </h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${At(e.modalError)}
            <label class="dep-field">
              <span class="dep-field-label">目标楼层（${n(c?.name??"当前楼宇")}）</span>
              <select class="pacom-select" name="freezeFloorId" data-freeze-floor-select="1">
                ${p.map(f=>{const T=e.buildingDevicesByFloor.get(f.id)?.length??0,O=_a(e,f.id),G=O.deferred?null:Ha(e,f.id),Y=O.deferred?"本期不纳入":G?.status==="delivered"?`${T} 台 ｜ 已交付 ${G.batch.versionTag}`:G?.status==="frozen"?`${T} 台 ｜ 待签收 ${G.batch.versionTag}`:T===0?"无设备":O.readyForFormalFreeze?`${T} 台 ｜ 可正式冻结`:`${T} 台 ｜ 待补项`;return`<option value="${n(f.id)}" ${f.id===v?"selected":""}>${n(f.name)}（${Y}）</option>`}).join("")}
              </select>
            </label>
            ${_?`<div class="pacom-banner" style="padding:12px 14px;">
                     <div class="pacom-banner-text">
                       <span class="pacom-banner-title">${n(h?.name??"")} 当前标为「本期不纳入」</span>
                       <span class="pacom-banner-sub">暂缓楼层不参与本期交付冻结；如需纳入验收，请先在门控矩阵点击「恢复纳入」。</span>
                     </div>
                   </div>`:L?`<div class="pacom-banner pacom-banner--critical" style="padding:12px 14px;">
                       <div class="pacom-banner-text">
                         <span class="pacom-banner-title">本层尚无已登记设备（0 / 0）</span>
                         <span class="pacom-banner-sub">禁止为空楼层生成阶段留档或正式冻结快照，请先在「设备标记」添加并配置设备。</span>
                       </div>
                     </div>`:m&&x?`<div class="pacom-banner pacom-banner--ok" style="padding:12px 14px;">
                         <div class="pacom-banner-text">
                           <span class="pacom-banner-title">${x.status==="delivered"?`当前基线已完成签收交付（${n(x.batch.versionTag)}）`:`当前基线已正式冻结待签收（${n(x.batch.versionTag)}）`}</span>
                           <span class="pacom-banner-sub">${x.status==="delivered"?"当前配置与图纸点位无新增变更，无需重复冻结；可直接点击下方「查看交付」追溯签收凭证。":"当前配置与图纸点位无新增变更，无需重复冻结；可直接点击下方「去签收」完成接收方签收。"}</span>
                         </div>
                       </div>`:u?`<div class="pacom-banner pacom-banner--ok" style="padding:12px 14px;">
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
            ${L||_||m?"":`<label class="dep-field">
                     <span class="dep-field-label">基线 / 留档备注</span>
                     <input class="pacom-input" name="freezeNote" placeholder="如：首期调试验收基线冻结" value="${u?"全层自检通过，正式交付冻结":"阶段性施工留档（待补齐剩余门控项后正式冻结）"}" />
                   </label>`}
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              ${m&&x?`<button type="button" class="pacom-btn pacom-btn--primary" data-open-snapshot="${n(x.batch.id)}">${x.status==="delivered"?"查看交付":a?"去签收":"查看快照"}</button>`:`
                    ${!L&&!_&&!u&&s.stageSnapshot?`<button type="button" class="pacom-btn pacom-btn--primary" data-submit-stage-snapshot="${n(v)}" ${a?"":"disabled"}>保存阶段留档</button>`:""}
                    <button type="submit" class="pacom-btn ${u?"pacom-btn--primary":""}" ${!a||!u?'disabled title="需满足全部交付门控与最新自检后才可正式冻结"':""}>正式交付冻结</button>`}
            </div>
          </div>
        </form>
      </div>`)}if(e.snapshotDetailModal){const{batch:p,meta:v}=e.snapshotDetailModal,h=Wa(e,p,v),w=v.snapshotSource==="legacy_missing";o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="交付基线快照与签收">
        <div class="dep-modal-card dep-modal-card--wide">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">
              <span>${n(p.versionTag)}</span>
              <span class="pacom-badge ${h.badgeCls}">${h.badgeLabel}</span>
            </h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${At(e.modalError)}
            <div class="dep-snapshot-grid">
              <div class="dep-snapshot-kv"><span>所属楼层</span><strong>${n(v.floorName)}</strong></div>
              <div class="dep-snapshot-kv"><span>底图版本</span><strong>${v.planVersion>0?`v${v.planVersion}`:"无底图"}</strong></div>
              <div class="dep-snapshot-kv"><span>边缘基线</span><strong>v${v.edgeSyncVersion}</strong></div>
              <div class="dep-snapshot-kv"><span>核验设备</span><strong>${p.verifiedCount} / ${p.deviceCount} 台</strong></div>
            </div>
            <div class="pacom-row-sub">
              冻结人：${n(p.frozenBy)} ｜ 时间：${n(p.frozenAt.replace("T"," ").slice(0,19))}${v.fttPassedAt?` ｜ 自检凭证：${n(v.fttPassedAt.replace("T"," ").slice(0,19))}`:""}
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
                          ${v.devices.length===0?'<tr><td colspan="5" style="text-align:center; padding:16px;" class="pacom-row-sub">无设备快照明细</td></tr>':v.devices.map(x=>{const L=Zt(x.connectivity,x.bound),_=x.placed&&x.planX!==void 0&&x.planY!==void 0?`${Math.round(x.planX*100)}% / ${Math.round(x.planY*100)}%`:x.placed?"已标记":"未标记";return`
                                      <tr>
                                        <td>
                                          <strong>${n(x.name)}</strong>
                                          <div class="pacom-row-sub">${n(x.zoneLabel)}</div>
                                        </td>
                                        <td style="white-space:nowrap;"><span class="pacom-row-sub">${_}</span></td>
                                        <td>
                                          <div style="font-size:13px;">${x.bound?`${n((x.protocol??"").toUpperCase())} ${n(x.address??"")}`:"未绑定"}</div>
                                          <div class="pacom-row-sub">${n(x.gatewayName??"—")}${x.portOrChannel?` ｜ ${n(x.portOrChannel)}`:""}</div>
                                        </td>
                                        <td><span class="pacom-row-sub">${n(x.paramsSummary??"默认参数")}</span></td>
                                        <td style="white-space:nowrap;">
                                          <span class="pacom-badge ${x.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${x.physicalInstalled?"已复核":"待复核"}</span>
                                          <span class="pacom-badge ${L.cls}" style="margin-left:4px;">${L.label}</span>
                                        </td>
                                      </tr>`}).join("")}
                        </tbody>
                      </table>
                    </div>
                  </div>`}
            ${p.status==="delivered"?`<div class="pacom-banner pacom-banner--ok" style="padding:12px 14px;">
                     <div class="pacom-banner-text">
                       <span class="pacom-banner-title">已完成正式签收交付（签收人：${n(v.signedOffBy??p.frozenBy)}）</span>
                       <span class="pacom-banner-sub">${v.signedOffAt?`签收时间：${n(v.signedOffAt.replace("T"," ").slice(0,19))} ｜ `:""}${n(v.signOffNote??"验收通过，正式移交运维")}</span>
                     </div>
                   </div>`:h.superseded?`<div class="pacom-banner" style="padding:12px 14px;">
                       <div class="pacom-banner-text">
                         <span class="pacom-banner-title">该冻结基线已过期，禁止签收旧版本</span>
                         <span class="pacom-banner-sub">现场设备配置、图纸、功能区、回路灯点或设备坐标已发生后续变更；请完成最新版本的核验与正式冻结后再执行签收。本历史快照仍可供查阅与导出。</span>
                       </div>
                     </div>`:h.missingEvidence?w?`<div class="pacom-row-sub">当前记录核验进度 ${p.verifiedCount}/${p.deviceCount} 且缺少冻结时刻完整逐设备证据，禁止直接签收或退回；请补齐现场核验与全层自检后重新冻结新版。</div>`:`<div class="pacom-banner" style="padding:12px 14px;">
                           <div class="pacom-banner-text">
                             <span class="pacom-banner-title">缺少原始逐设备证据或核验不完整，禁止直接签收</span>
                             <span class="pacom-banner-sub">当前记录核验进度 ${p.verifiedCount}/${p.deviceCount}，仅支持只读查阅与导出；请完成现场复核与全层自检后重新冻结新版。</span>
                           </div>
                         </div>`:h.canSignOff&&s.signOffDelivery?`<div style="display:flex; flex-direction:column; gap:10px;">
                           <form data-sign-off-delivery="${n(p.id)}" style="display:flex; flex-direction:column; gap:10px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-primary); box-shadow:inset 0 0 0 var(--hw) var(--pacom-border-subtle);">
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
                               ${s.rejectDelivery&&a?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-open-reject-form="1">${e.snapshotRejectOpen?"收起退回整改":"退回整改…"}</button>`:"<span></span>"}
                               <button type="submit" class="pacom-btn pacom-btn--primary" ${a?"":'disabled title="当前角色为只读权限"'}>确认签收交付</button>
                             </div>
                           </form>
                           ${e.snapshotRejectOpen&&s.rejectDelivery&&a?`<form data-confirm-reject-delivery="${n(p.id)}" style="display:flex; flex-direction:column; gap:10px; padding:12px 14px; border-radius:12px; background:var(--pacom-status-critical-soft); box-shadow:inset 0 0 0 var(--hw) rgba(217, 45, 32, 0.25);">
                                    <strong style="font-size:13px; font-weight:500; color:var(--pacom-status-critical);">退回整改确认（将作废当前待签基线并记录退回事件）</strong>
                                    <label class="dep-field">
                                      <span class="dep-field-label">具体退回原因（必填）</span>
                                      <input class="pacom-input" name="rejectReason" data-reject-reason-input="1" placeholder="请明确说明需整改项，如：702 会议室驱动器接线标识缺失" value="${n(e.snapshotRejectReason)}" required />
                                    </label>
                                    <div style="display:flex; justify-content:flex-end; gap:8px;">
                                      <button type="button" class="pacom-btn pacom-btn--sm" data-cancel-reject-form="1">取消</button>
                                      <button type="submit" class="pacom-btn pacom-btn--danger pacom-btn--sm">确认退回整改</button>
                                    </div>
                                  </form>`:""}
                         </div>`:h.isRejected?`<div class="pacom-banner pacom-banner--critical" style="padding:12px 14px;">
                             <div class="pacom-banner-text">
                               <span class="pacom-banner-title">已退回整改${v.rejectedBy?`（退回人：${n(v.rejectedBy)}）`:""}</span>
                               <span class="pacom-banner-sub">${v.rejectedAt?`时间：${n(v.rejectedAt.replace("T"," ").slice(0,19))} ｜ `:""}原因：${n(v.rejectReason??p.note??"需现场整改后重新冻结")}</span>
                             </div>
                           </div>`:'<span class="pacom-row-sub">阶段留档仅用于施工过程记录，需满足全部门控并正式冻结后才可签收交付。</span>'}
          </div>
          <div class="dep-modal-foot">
            <button type="button" class="pacom-btn" data-export-snapshot="${n(p.id)}">导出单批快照 CSV</button>
            <button type="button" class="pacom-btn" data-close-modals="1">关闭</button>
          </div>
        </div>
      </div>`)}if(e.planSwapReviewFloorId){const p=t.floors.find(L=>L.id===e.planSwapReviewFloorId),v=e.planChangeAlerts[e.planSwapReviewFloorId],w=(e.buildingDevicesByFloor.get(e.planSwapReviewFloorId)??e.floorDevices).filter(L=>!!L.planPoint),x=e.lightMarkers.filter(L=>L.floorId===e.planSwapReviewFloorId);p&&v&&o.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="换图影响核对清单">
          <div class="dep-modal-card">
            <div class="dep-modal-head">
              <h3 class="dep-modal-title">换图影响核对（${n(p.name)} ｜ v${v.previousVersion} → v${v.currentVersion}）</h3>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div class="pacom-banner" style="padding:10px 12px;">
                <div class="pacom-banner-text">
                  <span class="pacom-banner-title">已保留全部硬件绑定与物理安装复核，需核对图纸落点是否偏移</span>
                  <span class="pacom-banner-sub">如有位移可直接在画布上拖拽设备点位微调；确认无误后仍须重新执行全层自检（FTT）方可冻结新版本。</span>
                </div>
              </div>
              <div class="pacom-row-sub">受影响已标记设备 ${w.length} 台 ｜ 关联回路灯点 ${x.length} 个</div>
              <div class="dep-check-list" style="max-height:200px;">
                ${w.length===0?'<div class="pacom-row-sub" style="padding:12px; text-align:center;">本层暂无已标记坐标的设备。</div>':w.map(L=>`
                          <div class="dep-check-item">
                            <span><strong>${n(L.name)}</strong></span>
                            <span class="pacom-row-sub">${Math.round(L.planPoint.x*100)}%, ${Math.round(L.planPoint.y*100)}%</span>
                          </div>`).join("")}
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn" data-close-modals="1">返回画布拖拽微调</button>
              <button type="button" class="pacom-btn pacom-btn--primary" data-clear-plan-alert="${n(p.id)}" ${a?"":'disabled title="当前角色为只读权限"'}>确认点位核对无误</button>
            </div>
          </div>
        </div>`)}if(e.confirmDialog){const p=e.confirmDialog;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="${n(p.title)}">
        <div class="dep-modal-card dep-modal-card--sm">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">${n(p.title)}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${ce("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            <p style="margin:0; font-size:14px; line-height:22px; color:var(--pacom-text-body);">${n(p.body)}</p>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="button" class="pacom-btn ${p.danger?"pacom-btn--danger":"pacom-btn--primary"}" data-confirm-dialog-ok="1">${n(p.confirmLabel)}</button>
            </div>
          </div>
        </div>
      </div>`)}return e.lightboxPlan&&o.push(`
      <div class="dep-lightbox-scrim" data-lightbox-scrim="1" role="dialog" aria-modal="true" aria-label="${n(e.lightboxPlan.title)}">
        <div class="dep-lightbox-card">
          <div class="dep-lightbox-head">
            <strong style="font-size:16px; font-weight:500;">${n(e.lightboxPlan.title)}</strong>
            <button type="button" class="pacom-drawer-close" data-close-lightbox="1" aria-label="关闭预览">${ce("x",16)}</button>
          </div>
          <div class="dep-lightbox-body">
            <img src="${n(e.lightboxPlan.imageUrl)}" alt="${n(e.lightboxPlan.title)}" />
          </div>
        </div>
      </div>`),o.join("")}function Ps(){let e=null,t=null;function a(){e&&(e.setAttribute("aria-expanded","false"),e=null),t&&(t.remove(),t=null)}function s(p,v){const h=p.getBoundingClientRect(),w=v.getBoundingClientRect(),x=16,L=8;let _=h.left+h.width/2-w.width/2;_=Math.max(x,Math.min(window.innerWidth-w.width-x,_));let m=h.bottom+L;m+w.height+x>window.innerHeight&&(m=h.top-w.height-L),m=Math.max(x,Math.min(window.innerHeight-w.height-x,m)),v.style.left=`${Math.round(_)}px`,v.style.top=`${Math.round(m)}px`}function o(p){const v=p.dataset.depInfo?.trim();if(!v)return;if(e===p){a();return}a(),e=p,p.setAttribute("aria-expanded","true");const h=document.createElement("div");h.className="pacom-info-popover",h.setAttribute("role","tooltip"),h.textContent=v,document.body.appendChild(h),t=h,s(p,h)}const i=p=>{const v=p.target;t&&(t.contains(v)||e?.contains(v))||a()},c=p=>{p.key==="Escape"&&t&&a()},y=()=>{e&&t&&(document.body.contains(e)?s(e,t):a())};return document.addEventListener("click",i),document.addEventListener("keydown",c),window.addEventListener("resize",y),window.addEventListener("scroll",y,!0),{bind(p){e&&!document.body.contains(e)&&a(),p.querySelectorAll("[data-dep-info]").forEach(v=>{v.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation(),o(v)})})},close:a,destroy(){a(),document.removeEventListener("click",i),document.removeEventListener("keydown",c),window.removeEventListener("resize",y),window.removeEventListener("scroll",y,!0)}}}function ya(e,t,a){return e?t?"":`disabled title="${n(a)}"`:'disabled title="当前角色为只读权限"'}function ss(e,t=!1){if(!e.drawerOpen||e.activeNav!=="device_marking"&&e.activeNav!=="device_list")return"";const a=e.floorDevices.find(u=>u.id===e.selectedId)??null;if(!a)return"";const{canEdit:s,caps:o}=e,i=e.meshRoles[a.id]??{proxy:!1,relay:!1,meshUuid:ts(e.activeFloorId)},c=e.lightMarkers.filter(u=>u.deviceId===a.id),y=e.deviceParams.get(a.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450,coolMinC:22,heatMaxC:26,unoccupiedDelayMin:20,minCycleMin:5,heartbeatSec:30,offlineHoldMin:120,cacheFlushSec:60,pollSec:15,ctRatio:1,demandWindowMin:15},p=Zt(a.connectivity,!!a.hardwareBinding),v=ya(s,o.lightMarkers,"待后端回路灯点接口对接"),h=ya(s,o.meshRoles,"待后端蓝牙 Mesh 接口对接"),w=ya(s,o.deviceParams,"待后端自治参数下发接口对接"),x=ya(s,o.manageDevice,"待后端设备管理接口对接"),L=e.tree.zones.filter(u=>u.floorId===e.activeFloorId),_=e.floorDevices.filter(u=>u.category==="gateway"),m=e.bindingDraft&&e.bindingDraft.deviceId===a.id?e.bindingDraft:{deviceId:a.id,gatewayId:a.hardwareBinding?.gatewayId??(a.category==="gateway"?a.id:_[0]?.id??""),protocol:a.hardwareBinding?.protocol??dn[0],networkAddress:a.hardwareBinding?.networkAddress??"",portOrChannel:a.hardwareBinding?.portOrChannel??"",physicalInstalled:a.physicalInstalled};return`
    <aside class="dep-docked-drawer ${t?"dep-docked-drawer--sticky":""}" aria-label="设备配置抽屉">
      <div class="pacom-drawer-head">
        <div style="min-width:0; flex:1;">
          <h3 class="pacom-drawer-title">${n(a.name)}</h3>
          <div class="pacom-row-sub" style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; margin-top:2px;">
            <span>${n(e.getZoneLabel(a.logicalZoneId))} ｜ ${n(La[a.category])} ｜ v${a.version}</span>
            <span class="pacom-badge ${p.cls}">${p.label}</span>
          </div>
        </div>
        <div style="display:inline-flex; align-items:center; gap:4px; flex-shrink:0;">
          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-toggle-edit-dev-meta="1" ${x}>${e.editingDeviceMeta?"收起":"编辑"}</button>
          <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${ce("x",16)}</button>
        </div>
      </div>

      ${e.editingDeviceMeta?`
          <form data-save-dev-meta="${n(a.id)}" class="dep-drawer-section" style="padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); box-shadow:inset 0 0 0 var(--hw) var(--pacom-border-subtle);">
            <label class="dep-field">
              <span class="dep-field-label">设备名称</span>
              <input class="pacom-input" name="editDevName" value="${n(a.name)}" required ${x} />
            </label>
            <label class="dep-field">
              <span class="dep-field-label">所属功能区</span>
              <select class="pacom-select" name="editDevZone" ${x}>
                <option value="">暂不分配</option>
                ${L.map(u=>`<option value="${n(u.id)}" ${a.logicalZoneId===u.id?"selected":""}>${n(u.name)}</option>`).join("")}
              </select>
            </label>
            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-del-dev="${n(a.id)}" ${x}>删除设备</button>
              <div style="display:inline-flex; gap:6px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-edit-dev-meta="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${x}>保存</button>
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
                  <span class="dep-drawer-section-title">回路可视化灯点（${c.length}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${n(a.id)}" ${v}>+ 添加灯点</button>
                </div>
                ${c.length===0?'<span class="pacom-row-sub">可切至画布「回路灯点」直接点图落点，或点右上角添加</span>':c.map(u=>`
                          <div class="pacom-receipt-item" style="padding:8px 10px;">
                            <span style="font-size:14px;"><strong>${n(u.channel)}</strong> ｜ ${n(u.label)}</span>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-del-light-marker="${n(u.id)}" ${v}>删除</button>
                          </div>`).join("")}
              </div>`:""}

          ${Gt(a)?`
              <div class="dep-drawer-section">
                <div class="dep-drawer-section-head">
                  <span class="dep-drawer-section-title">
                    <span>蓝牙 Mesh 节点角色</span>
                    ${Ct("蓝牙 Mesh 角色说明","Proxy 代理建议每层启用 2–3 个供现场移动端接入；Relay 中继建议控制在总节点 10% 以内，面板默认关闭以避免广播风暴。")}
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
                    ${_.length===0?'<option value="">本层暂未登记网关（请先添加边缘网关）</option>':`<option value="">请选择上游网关</option>${_.map(u=>`<option value="${n(u.id)}" ${m.gatewayId===u.id?"selected":""}>${n(u.name)}${u.connectivity==="offline"?"（离线）":""}</option>`).join("")}`}
                  </select>
                </label>`:`<input type="hidden" name="gatewayId" value="${n(a.id)}" />`}
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">通信协议</span>
                <select class="pacom-select" name="protocol" data-binding-field="protocol" ${s?"":"disabled"}>
                  ${dn.map(u=>`<option value="${u}" ${m.protocol===u?"selected":""}>${u.toUpperCase()}</option>`).join("")}
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
                  <label class="dep-field"><span class="dep-field-label">制冷下限 (°C)</span><input class="pacom-input" name="coolMinC" type="number" step="0.5" min="16" max="30" value="${y.coolMinC??22}" ${w} /></label>
                  <label class="dep-field"><span class="dep-field-label">制热上限 (°C)</span><input class="pacom-input" name="heatMaxC" type="number" step="0.5" min="16" max="32" value="${y.heatMaxC??26}" ${w} /></label>
                  <label class="dep-field"><span class="dep-field-label">无人节能延时 (分)</span><input class="pacom-input" name="unoccupiedDelayMin" type="number" min="1" max="240" value="${y.unoccupiedDelayMin??20}" ${w} /></label>
                  <label class="dep-field"><span class="dep-field-label">防频繁启停 (分)</span><input class="pacom-input" name="minCycleMin" type="number" min="1" max="30" value="${y.minCycleMin??5}" ${w} /></label>
                </div>`:a.category==="gateway"?`
                  <div>
                    <div class="dep-drawer-section-title">网关离线自治与心跳策略</div>
                    <div class="pacom-row-sub">断网时维持本地联动与边缘缓存上报，保存后需重同步并复检</div>
                  </div>
                  <div class="dep-param-grid">
                    <label class="dep-field"><span class="dep-field-label">心跳周期 (秒)</span><input class="pacom-input" name="heartbeatSec" type="number" min="5" max="300" value="${y.heartbeatSec??30}" ${w} /></label>
                    <label class="dep-field"><span class="dep-field-label">断网自治保持 (分)</span><input class="pacom-input" name="offlineHoldMin" type="number" min="5" max="1440" value="${y.offlineHoldMin??120}" ${w} /></label>
                    <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">边缘缓存刷新间隔 (秒)</span><input class="pacom-input" name="cacheFlushSec" type="number" min="10" max="600" value="${y.cacheFlushSec??60}" ${w} /></label>
                  </div>`:a.category==="meter"?`
                    <div>
                      <div class="dep-drawer-section-title">智能电表计量采集参数</div>
                      <div class="pacom-row-sub">配置轮询周期、互感器变比倍率与需量统计滑窗</div>
                    </div>
                    <div class="dep-param-grid">
                      <label class="dep-field"><span class="dep-field-label">采集轮询周期 (秒)</span><input class="pacom-input" name="pollSec" type="number" min="5" max="300" value="${y.pollSec??15}" ${w} /></label>
                      <label class="dep-field"><span class="dep-field-label">CT 变比倍率</span><input class="pacom-input" name="ctRatio" type="number" min="1" max="1000" value="${y.ctRatio??1}" ${w} /></label>
                      <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">需量滑窗周期 (分)</span><input class="pacom-input" name="demandWindowMin" type="number" min="5" max="60" value="${y.demandWindowMin??15}" ${w} /></label>
                    </div>`:`
                    <div>
                      <div class="dep-drawer-section-title">人感与光感自治参数</div>
                      <div class="pacom-row-sub">保存后需在「设备网络」重新同步边缘并复执行自检</div>
                    </div>
                    <div class="dep-param-grid">
                      <label class="dep-field"><span class="dep-field-label">自动关灯延时 (分)</span><input class="pacom-input" name="offDelayMin" type="number" min="1" max="180" value="${y.offDelayMin}" ${w} /></label>
                      <label class="dep-field"><span class="dep-field-label">恢复自动延时 (分)</span><input class="pacom-input" name="restoreMin" type="number" min="1" max="180" value="${y.restoreMin}" ${w} /></label>
                      <label class="dep-field"><span class="dep-field-label">开灯光感门限 (lx)</span><input class="pacom-input" name="luxOn" type="number" min="10" max="2000" value="${y.luxOn}" ${w} /></label>
                      <label class="dep-field"><span class="dep-field-label">关灯光感门限 (lx)</span><input class="pacom-input" name="luxOff" type="number" min="10" max="2000" value="${y.luxOff}" ${w} /></label>
                    </div>`}
            <button class="pacom-btn pacom-btn--primary" type="submit" ${w}>保存设备参数</button>
          </form>`}
    </aside>
  `}function zs(e){const{tree:t,canEdit:a,caps:s}=e;if(t.projects.length===0)return`
      <div class="dep-work-row--canvas">
        <main class="pacom-spatial-stage" style="flex:1; min-width:0; display:flex; align-items:center; justify-content:center; padding:24px;">
          <div style="max-width:480px; width:100%;">${oa(a,s.spatial,"map-pin")}</div>
        </main>
      </div>`;const o=e.activeBuildingId?e.sortedBuildingFloors(e.activeBuildingId):[],i=o.find(f=>f.id===e.activeFloorId)??o[0],c=e.floorDevices,y=t.zones.filter(f=>f.floorId===e.activeFloorId),p=e.drawerOpen?c.find(f=>f.id===e.selectedId)??null:null,v=e.canvasSearch.trim().toLowerCase(),h=c.filter(f=>!(e.deviceFilter==="unverified"&&f.physicalInstalled||e.deviceFilter==="unplaced"&&f.planPoint||v&&!`${f.name} ${e.getZoneLabel(f.logicalZoneId)}`.toLowerCase().includes(v))),w=c.filter(f=>!f.planPoint).length,x=e.planChangeAlerts[e.activeFloorId]??null,L=c.find(f=>f.category==="lighting")??null,_=e.canvasBrush==="light_marker"&&p?.category==="lighting"&&a&&s.lightMarkers,m=!!i?.plan,u=ya(a,s.spatial,"待后端空间建档接口对接");return`
    <div class="dep-work-row--canvas">
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        ${m?`
            <div class="pacom-hud-search-wrap" style="width:min(380px, calc(100% - 28px));">
              <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
                ${ce("search",16)}
                <input class="pacom-hud-input" name="canvasSearch" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${n(e.canvasSearch)}" aria-label="搜索本层设备" />
                <button type="button" class="pacom-hud-pill" style="${e.hudPoolOpen?"background:var(--pacom-selected-layer); color:var(--pacom-text-primary);":""}" data-toggle-hud-pool="1">设备池 ${c.length}${w>0?` ｜ 未标记 ${w}`:""}</button>
              </div>

              ${e.hudPoolOpen?`
                  <div class="pacom-hud-sheet">
                    <div class="pacom-hud-sheet-head">
                      <strong style="font-size:14px; font-weight:500;">${n(i?.name??"当前楼层")} 设备池（${h.length}）</strong>
                      <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${ce("x",16)}</button>
                    </div>
                    <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                      <div class="pacom-tabs" role="tablist" aria-label="设备池筛选">
                        <button type="button" class="pacom-tab" role="tab" aria-selected="${e.deviceFilter==="all"}" data-dev-filter="all">全部 ${c.length}</button>
                        <button type="button" class="pacom-tab" role="tab" aria-selected="${e.deviceFilter==="unverified"}" data-dev-filter="unverified">待复核 ${c.filter(f=>!f.physicalInstalled).length}</button>
                        <button type="button" class="pacom-tab" role="tab" aria-selected="${e.deviceFilter==="unplaced"}" data-dev-filter="unplaced">未标记 ${c.filter(f=>!f.planPoint).length}</button>
                      </div>
                    </div>
                    <div class="pacom-list" style="padding:6px;">
                      ${h.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">本层暂无匹配设备</div>':h.map(f=>`
                                <div class="pacom-row ${f.id===e.selectedId&&e.drawerOpen?"is-selected":""}" data-pick-dev="${n(f.id)}" style="padding:8px 10px;">
                                  <div style="min-width:0;">
                                    <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${n(f.name)}</div>
                                    <div class="pacom-row-sub">${n(e.getZoneLabel(f.logicalZoneId))} ｜ ${f.physicalInstalled?"已复核":"待复核"}</div>
                                  </div>
                                  <span class="pacom-badge ${f.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${f.planPoint?"已标记":"未标记"}</span>
                                </div>`).join("")}
                    </div>
                  </div>`:""}
            </div>`:""}

        ${e.canvasNotice?`<div class="dep-canvas-toast" role="status">
                 <span class="pacom-dot pacom-dot--online"></span>
                 <span>${n(e.canvasNotice)}</span>
                 <button type="button" class="pacom-drawer-close" style="width:22px; height:22px;" data-dismiss-canvas-notice="1" aria-label="关闭提示">${ce("x",12)}</button>
               </div>`:""}

        ${e.placingMode&&p?`<div class="dep-canvas-mode-pill" role="status">
                 <span>正在定位「${n(p.name)}」，请点击平面图落点</span>
                 <button type="button" class="dep-canvas-mode-cancel" data-toggle-place="1">取消</button>
               </div>`:_?`<div class="dep-canvas-mode-pill" role="status">
                   <span>回路灯点模式：点击平面图为「${n(p.name)}」布置灯点</span>
                   <button type="button" class="dep-canvas-mode-cancel" data-brush="device">退出</button>
                 </div>`:e.canvasBrush==="light_marker"?`<div class="dep-canvas-mode-pill" role="status">
                     <span>回路灯点模式：请先选择一台照明回路设备</span>
                     ${L?`<button type="button" class="dep-canvas-mode-cancel" data-pick-dev="${n(L.id)}">选中 ${n(On(L))}</button>`:""}
                   </div>`:x?`<div class="dep-canvas-mode-pill" role="status">
                       <span>底图已更新至 v${x.currentVersion}，请核对本层 ${c.filter(f=>f.planPoint).length} 个点位</span>
                       <button type="button" class="dep-canvas-mode-cancel" data-open-plan-swap-review="${n(e.activeFloorId)}">核对受影响点位</button>
                     </div>`:i?.plan&&c.length===0?`<div class="dep-canvas-empty-hint" role="status">
                         <span>本层底图已就绪，点击右上角「+ 新增设备」即可开始标记</span>
                       </div>`:""}

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${e.placingMode||_?"crosshair":"grab"};">
          ${i?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${e.panX}px, ${e.panY}px) scale(${e.zoom});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${n(i.plan.imageUrl)}" alt="${n(i.name)} 平面底图" />
                  ${e.canvasBrush==="zone"?y.map((f,T)=>{const O=e.zoneBoxes[f.id]??un(T,y.length,f.name);return`<div class="pacom-zone-hotspot is-active" style="left:${O.left}%; top:${O.top}%; width:${O.width}%; height:${O.height}%;"><span class="pacom-zone-tag">${n(f.name.replace(new RegExp(`^${i.name}\\s*`,"i"),""))}<span class="dep-zone-draft-tag">示意</span></span></div>`}).join(""):""}
                  ${c.filter(f=>f.planPoint).map(f=>{const T=a&&e.canvasBrush==="device"&&!e.placingMode,O=f.connectivity==="offline"?"pacom-dot--critical":f.connectivity==="unknown"||!f.hardwareBinding?"pacom-dot--offline":f.physicalInstalled?"pacom-dot--online":"pacom-dot--warning";return`
                        <button type="button" class="pacom-pin ${f.id===e.selectedId&&e.drawerOpen?"is-selected":""} ${f.connectivity==="offline"?"pacom-pin--offline":""} ${T?"is-draggable":""}"
                          style="left:${(f.planPoint.x*100).toFixed(2)}%; top:${(f.planPoint.y*100).toFixed(2)}%;"
                          data-pick-dev="${n(f.id)}" ${T?`data-drag-pin="${n(f.id)}"`:""}
                          title="${n(f.name)}${f.physicalInstalled?" ｜ 已复核":" ｜ 待复核"}${T?"（可直接拖拽调整坐标）":""}">
                          <span class="pacom-dot ${O}"></span>
                          <span>${n(On(f))}</span>
                        </button>`}).join("")}
                  ${e.canvasBrush==="light_marker"?e.lightMarkers.filter(f=>c.some(T=>T.id===f.deviceId)).map(f=>`
                            <span class="dep-light-dot" style="left:${(f.x*100).toFixed(1)}%; top:${(f.y*100).toFixed(1)}%;" title="${n(f.label)}（${n(f.channel)}）">
                              ${ce("sparkles",12)}<span>${n(f.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; align-items:center; justify-content:center; padding:24px;">
                  <div class="dep-empty-card" data-single-floor-drop="${n(e.activeFloorId)}" style="max-width:440px; width:100%;">
                    <div class="dep-empty-icon">${ce("upload",20)}</div>
                    <strong style="font-size:16px; line-height:24px; font-weight:500; color:var(--pacom-text-primary);">${n(i?.name??"当前楼层")} 暂未上传 2D 平面底图</strong>
                    <span class="pacom-row-sub">${a&&s.spatial?"可直接将平面底图拖拽至此，或点击下方按钮原地上传，上传后立即在此标记设备。":"当前角色为只读权限，请联系项目管理员先为本层上传平面底图。"}</span>
                    ${a&&s.spatial?`<div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
                             <label class="pacom-btn pacom-btn--primary" style="cursor:pointer;">
                               <span>上传 ${n(i?.name??"本层")} 平面底图</span>
                               <input type="file" name="markingNoPlanUpload_${n(e.activeFloorId)}" accept="image/*" data-upload-floor="${n(e.activeFloorId)}" style="display:none;" ${u} />
                             </label>
                             <button type="button" class="pacom-btn" data-jump-floor-config="${n(e.activeFloorId)}">前往项目配置</button>
                           </div>`:""}
                  </div>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${o.map(f=>`
              <button type="button" class="pacom-elev-item ${f.id===e.activeFloorId?"is-active":""}" data-scrubber-floor="${n(f.id)}" title="${n(f.name)}${f.plan?" ｜ 已传底图":" ｜ 待传底图"}">
                ${f.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${n(f.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        ${m?`
            <div class="pacom-canvas-dock" role="toolbar" aria-label="标记图层与缩放">
              <button type="button" class="pacom-dock-btn" aria-pressed="${e.canvasBrush==="device"}" data-brush="device">设备标记</button>
              <button type="button" class="pacom-dock-btn" aria-pressed="${e.canvasBrush==="light_marker"}" data-brush="light_marker">回路灯点</button>
              <button type="button" class="pacom-dock-btn" aria-pressed="${e.canvasBrush==="zone"}" data-brush="zone">功能区</button>
              <span class="pacom-dock-sep" aria-hidden="true"></span>
              <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${ce("minus",16)}</button>
              <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(e.zoom*100)}%</button>
              <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${ce("plus",16)}</button>
            </div>`:""}
      </main>
      ${ss(e,!1)}
    </div>
  `}function Ns(e){if(e.tree.projects.length===0)return oa(e.canEdit,e.caps.spatial,"list");const t=e.floorDevices,a=e.listSearch.trim().toLowerCase(),s=t.filter(i=>!(e.listStatusFilter==="online"&&i.connectivity!=="online"||e.listStatusFilter==="offline"&&i.connectivity!=="offline"||e.listStatusFilter==="unverified"&&i.physicalInstalled||e.listCategoryFilter!=="all"&&i.category!==e.listCategoryFilter||a&&!`${i.name} ${e.getZoneLabel(i.logicalZoneId)} ${i.hardwareBinding?.protocol??""}`.toLowerCase().includes(a))),o=t.filter(i=>i.connectivity==="online").length;return`
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
              ${Object.keys(La).map(i=>`<option value="${i}" ${e.listCategoryFilter===i?"selected":""}>${La[i]}</option>`).join("")}
            </select>
            <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${ce("refresh-cw",16)}</button>
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
                              <div class="pacom-row-sub">${n(e.getZoneLabel(i.logicalZoneId))} ｜ ${n(La[i.category])} ｜ v${i.version}</div>
                              <div class="dep-compact-meta">
                                <span class="pacom-badge ${i.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${i.hardwareBinding?i.hardwareBinding.protocol.toUpperCase():"未绑定"}</span>
                                <span class="pacom-badge ${i.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${i.physicalInstalled?"已复核":"待复核"}</span>
                                ${i.planPoint?"":'<span class="pacom-badge pacom-badge--warning">未标记</span>'}
                              </div>
                            </td>
                            <td class="dep-col-secondary"><span class="pacom-badge ${i.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${i.planPoint?`${Math.round(i.planPoint.x*100)}%, ${Math.round(i.planPoint.y*100)}%`:"未标记"}</span></td>
                            <td class="dep-col-secondary"><span class="pacom-badge ${i.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${i.hardwareBinding?i.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                            <td class="dep-col-secondary"><span class="pacom-badge ${i.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${i.physicalInstalled?"已复核":"待复核"}</span></td>
                            <td>${(()=>{const c=Zt(i.connectivity,!!i.hardwareBinding);return`<span class="pacom-badge ${c.cls}">${c.label}</span>`})()}</td>
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
      ${ss(e,!0)}
    </div>
  `}function Us(e){if(e.tree.projects.length===0)return oa(e.canEdit,e.caps.spatial,"folder-kanban");const t=ya(e.canEdit,e.caps.deviceGroups,"待后端设备分组接口对接"),a=e.groups.filter(y=>y.track==="mesh_auto"),s=e.groups.filter(y=>y.track==="cloud_biz"),o=new Map(e.floorDevices.map(y=>[y.id,y])),i=y=>{const p=y.map(v=>o.get(v)?.name??v).slice(0,3);return p.length===0?"暂未编排成员设备":`${p.join("、")}${y.length>3?` 等 ${y.length} 台`:""}`},c=y=>{const p=y.deviceIds.map(h=>o.get(h)).filter(Boolean),v=y.track==="mesh_auto"&&y.groupType.includes("灯")&&!p.some(h=>h?.category==="lighting");return`
    <div class="pacom-setting-row">
      <div class="pacom-setting-meta">
        <span class="pacom-setting-title" style="flex-wrap:wrap; row-gap:4px;">
          <span>${n(y.name)}</span>
          <span class="pacom-badge pacom-badge--neutral" style="white-space:nowrap;">${n(y.groupType)}</span>
          ${v?'<span class="pacom-badge pacom-badge--warning" style="white-space:nowrap;">缺照明执行端</span>':""}
        </span>
        <span class="pacom-setting-desc">成员 ${y.deviceIds.length} 台 ｜ ${n(i(y.deviceIds))}</span>
      </div>
      <div class="pacom-setting-control">
        <button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${n(y.id)}">组控测试</button>
        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-group="${n(y.id)}" ${t}>编辑</button>
        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-del-group="${n(y.id)}" ${t}>删除</button>
      </div>
    </div>`};return`
    <div class="pacom-grid-2">
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title" style="display:inline-flex; align-items:center; gap:6px;">
            <span>端侧蓝牙 Mesh 自治组（${a.length}）</span>
            ${Ct("端侧蓝牙 Mesh 自治组说明","用于照明与人感/光感本地自治联动，断网仍可端侧执行；系统会自动纳入本层蓝牙适配器或边缘网关以防状态漏报。")}
          </h2>
        </div>
        <div class="pacom-settings-card">
          ${a.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无端侧自治分组，点击右上角「+ 新建分组」创建。</span></div>':a.map(c).join("")}
        </div>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title" style="display:inline-flex; align-items:center; gap:6px;">
            <span>云端业务分组（${s.length}）</span>
            ${Ct("云端业务分组说明","适用于空调、标牌或行政部门批控场景，无需依赖蓝牙 Mesh 配网，可供空间总览与智能策略复用。")}
          </h2>
        </div>
        <div class="pacom-settings-card">
          ${s.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无云端业务分组，点击右上角「+ 新建分组」创建。</span></div>':s.map(c).join("")}
        </div>
      </section>
    </div>
  `}function Vs(e){if(e.tree.projects.length===0)return oa(e.canEdit,e.caps.spatial,"waypoints");const t=e.floorDevices,a=e.tree.zones.filter(u=>u.floorId===e.activeFloorId),s=t.filter(Gt),o=t.filter(u=>!Gt(u)),i=s.filter(u=>u.category==="gateway"),c=new Set(i.map(u=>u.id)),y=s.filter(u=>!c.has(u.id)&&!!(e.meshRoles[u.id]?.proxy||e.meshRoles[u.id]?.relay)),p=new Set(y.map(u=>u.id)),v=s.filter(u=>!c.has(u.id)&&!p.has(u.id)),h=s.filter(u=>e.meshRoles[u.id]?.proxy).length,w=s.filter(u=>e.meshRoles[u.id]?.relay).length,x=s.filter(u=>u.connectivity==="online").length,L=s.filter(u=>u.connectivity==="offline").length,_=s.filter(u=>u.connectivity==="unknown"||!u.hardwareBinding&&u.connectivity!=="offline").length,m=o.filter(u=>u.connectivity==="offline").length;return`
    <div class="pacom-kpi-strip" role="region" aria-label="本层无线网络概览">
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">蓝牙 Mesh 节点</span>
        <div class="pacom-kpi-value">${s.length}<span class="pacom-kpi-unit">台</span></div>
        <span class="pacom-kpi-delta">不含 ${o.length} 台有线异构末端</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">Proxy ｜ Relay ${Ct("代理与中继建议配比","每层建议开启 2–3 个 Proxy 供现场 App 接入；Relay 中继建议控制在总节点 10% 以内，减少广播风暴。")}</span>
        <div class="pacom-kpi-value">${h}<span class="pacom-kpi-unit">｜ ${w} 个</span></div>
        <span class="pacom-kpi-delta">代理与中继骨架</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">无线在线 ｜ 异常</span>
        <div class="pacom-kpi-value">${x}<span class="pacom-kpi-unit">/ ${s.length} 台</span></div>
        <span class="pacom-kpi-delta">${s.length===0?"本层暂无无线节点":L>0?`${L} 台离线${_>0?` ｜ ${_} 台待入网`:""}`:_>0?`${_} 台待绑定入网`:m>0?`无线全部在线 ｜ 另有 ${m} 台有线离线`:"无线链路全部在线可达"}</span>
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
            ${e.meshFindings.map(u=>`
                <div class="pacom-receipt-item">
                  <div>
                    <strong>${n(u.title)}</strong>
                    <span class="pacom-row-sub"> ｜ ${n(u.detail)}</span>
                  </div>
                  <div style="display:inline-flex; align-items:center; gap:8px;">
                    ${u.deviceId?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-topo-jump="${n(u.deviceId)}">定位</button>`:""}
                    <span class="pacom-badge ${u.level==="ok"?"pacom-badge--online":u.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${u.level==="ok"?"通过":u.level==="warn"?"建议优化":"异常"}</span>
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
              ${i.length===0?'<div class="pacom-row-sub">本层暂未配置网关或蓝牙适配器。</div>':i.map(u=>{const f=Zt(u.connectivity,!!u.hardwareBinding);return`
                          <button type="button" class="dep-topo-node ${u.connectivity==="offline"?"is-issue":""}" data-topo-jump="${n(u.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                              <strong>${n(u.name)}</strong>
                              <span class="pacom-badge ${f.cls}">${f.label}</span>
                            </div>
                            <span class="pacom-row-sub">${n(u.hardwareBinding?.networkAddress??"未绑定地址")} ｜ ${u.hardwareBinding?"网桥中心":"待配置网桥"}</span>
                          </button>`}).join("")}
            </div>
            <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${ce("chevron-right",12)}</span></div>
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（${y.length}）</strong>
              ${y.length===0?'<div class="pacom-row-sub">暂未启用 Proxy / Relay 骨架节点，可在「设备标记」抽屉开启。</div>':y.map(u=>{const f=e.meshRoles[u.id],T=Zt(u.connectivity,!!u.hardwareBinding);return`
                          <button type="button" class="dep-topo-node ${u.connectivity==="offline"?"is-issue":""}" data-topo-jump="${n(u.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                              <strong>${n(u.name)}</strong>
                              <span class="pacom-badge pacom-badge--accent">${f?.proxy?"Proxy":""}${f?.proxy&&f?.relay?" + ":""}${f?.relay?"Relay":""}</span>
                            </div>
                            <span class="pacom-row-sub">${n(e.getZoneLabel(u.logicalZoneId))} ｜ ${T.label}</span>
                          </button>`}).join("")}
            </div>
            <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${ce("chevron-right",12)}</span></div>
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 普通无线末端（${v.length}）</strong>
              ${v.length===0?'<div class="pacom-row-sub">本层暂无普通 Mesh 末端节点。</div>':v.map(u=>{const f=Zt(u.connectivity,!!u.hardwareBinding),T=u.hardwareBinding?.protocol==="dali"?"Mesh 桥接 DALI":u.hardwareBinding?.protocol.toUpperCase()??"未绑定";return`
                          <button type="button" class="dep-topo-node ${u.connectivity==="offline"?"is-issue":""}" data-topo-jump="${n(u.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                              <strong>${n(u.name)}</strong>
                              <span class="pacom-badge ${f.cls}">${f.label}</span>
                            </div>
                            <span class="pacom-row-sub">${n(e.getZoneLabel(u.logicalZoneId))} ｜ ${n(T)}</span>
                          </button>`}).join("")}
            </div>
          </div>
          ${o.length>0?`<div class="pacom-banner" style="padding:12px 16px;">
                   <div class="pacom-banner-text">
                     <span class="pacom-banner-title">本层另有 ${o.length} 台有线异构设备（${n(o.map(u=>`${u.name}（${u.hardwareBinding?.protocol.toUpperCase()??"有线"}）`).join("、"))}）</span>
                     <span class="pacom-banner-sub">空调与电表经有线协议通道直采，不加入蓝牙 Mesh 无线网；请前往「系统接入」核查其总线健康度。</span>
                   </div>
                   <button type="button" class="pacom-btn pacom-btn--sm" data-dep-nav="connections">前往系统接入 →</button>
                 </div>`:""}`:`
          <div class="dep-topo-flow">
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 上游传感与总线源</strong>
              ${t.filter(u=>u.category==="sensor"||u.category==="gateway").length===0?'<div class="pacom-row-sub">本层暂无传感或网关节点。</div>':t.filter(u=>u.category==="sensor"||u.category==="gateway").map(u=>`
                        <button type="button" class="dep-topo-node" data-topo-jump="${n(u.id)}">
                          <strong>${n(u.name)}</strong>
                          <span class="pacom-row-sub">${u.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                        </button>`).join("")}
            </div>
            <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${ce("chevron-right",12)}</span></div>
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 受控末端（照明 / 暖通）</strong>
              ${t.filter(u=>u.category==="lighting"||u.category==="hvac").length===0?'<div class="pacom-row-sub">本层暂无受控照明或暖通末端。</div>':t.filter(u=>u.category==="lighting"||u.category==="hvac").map(u=>{const f=Zt(u.connectivity,!!u.hardwareBinding);return`
                          <button type="button" class="dep-topo-node ${u.connectivity==="offline"?"is-issue":""}" data-topo-jump="${n(u.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                              <strong>${n(u.name)}</strong>
                              <span class="pacom-badge ${f.cls}">${f.label}</span>
                            </div>
                            <span class="pacom-row-sub">服务：${n(e.getZoneLabel(u.logicalZoneId))}</span>
                          </button>`}).join("")}
            </div>
            <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${ce("chevron-right",12)}</span></div>
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 服务功能区（影响面）</strong>
              ${a.length===0?'<div class="pacom-row-sub">本层暂未划分功能区。</div>':a.map(u=>{const f=t.filter(O=>O.logicalZoneId===u.id),T=f.some(O=>O.connectivity==="offline");return`
                          <div class="dep-topo-node ${T?"is-issue":""}" style="cursor:default;">
                            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                              <strong>${n(u.name)}</strong>
                              <span class="pacom-badge ${f.length===0?"pacom-badge--neutral":T?"pacom-badge--warning":"pacom-badge--online"}">${f.length} 台设备</span>
                            </div>
                            <span class="pacom-row-sub">${f.length===0?"暂无关联设备":T?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                          </div>`}).join("")}
            </div>
          </div>`}
    </section>
  `}function $a(e,t,a){return e?t?"":`disabled title="${n(a)}"`:'disabled title="当前角色为只读权限"'}function Hs(e){const{tree:t,canEdit:a,caps:s}=e;if(t.projects.length===0)return oa(a,s.spatial,"layers");const o=t.projects.find(c=>c.id===e.activeProjectId)??t.projects[0],i=t.buildings.filter(c=>c.projectId===o.id);if(e.projectDrill==="building"||e.projectDrill==="floor"){const c=i.find(y=>y.id===e.activeBuildingId)??i[0]??null;if(!c)return qn(e,o,i);if(e.projectDrill==="floor"){const y=e.sortedBuildingFloors(c.id),p=y.find(v=>v.id===e.activeFloorId)??y[0]??null;if(p)return Zs(e,c,y,p)}return Ws(e,i,c)}return qn(e,o,i)}function qn(e,t,a){const{canEdit:s,caps:o}=e,i=$a(s,o.spatial,"待后端空间建档接口对接"),c=a.flatMap(h=>e.sortedBuildingFloors(h.id)),y=c.filter(h=>!!h.plan).length,p=c.length>0?Math.round(y/c.length*100):0,v=t.location?`${t.location.lng.toFixed(4)}, ${t.location.lat.toFixed(4)}`:"未设置坐标";return`
    <div class="dep-project-strip">
      <div class="dep-project-strip-main">
        <div class="dep-project-cover">
          <img src="${n(t.imageUrl??"./media/gzlab.jpg")}" alt="${n(t.name)}" />
        </div>
        <div style="min-width:0; display:flex; flex-direction:column; gap:4px;">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <strong style="font-size:16px; line-height:24px; font-weight:500; color:var(--pacom-text-primary);">${n(t.name)}</strong>
            <span class="pacom-badge pacom-badge--neutral">${a.length} 栋楼宇</span>
            <span class="pacom-badge pacom-badge--neutral">${c.length} 个楼层</span>
          </div>
          <span class="pacom-row-sub">${n(t.city||"未填城市")}${t.address?` ｜ ${n(t.address)}`:""} ｜ 坐标 ${n(v)}</span>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:16px; flex-shrink:0; flex-wrap:wrap;">
        <div class="dep-proj-progress" aria-label="整体底图就绪度">
          <div class="dep-proj-progress-head">
            <span>底图就绪度</span>
            <strong>${y}/${c.length}（${p}%）</strong>
          </div>
          <div class="dep-proj-progress-track">
            <div class="dep-proj-progress-fill ${c.length>0&&y===c.length?"is-complete":""}" style="width:${p}%;"></div>
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
            <div class="dep-empty-icon">${ce("building-2",20)}</div>
            <strong style="font-size:16px; line-height:24px; font-weight:500; color:var(--pacom-text-primary);">${n(t.name)} 暂无楼宇</strong>
            <span class="pacom-row-sub">添加楼宇并设置层数结构后，系统将自动生成对应楼层并直达楼层底图工作台。</span>
            <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-bld="1" ${i}>+ 添加第一栋楼宇</button>
          </div>`:`
          <div class="dep-building-grid">
            ${a.map(h=>{const w=e.sortedBuildingFloors(h.id),x=w.filter(Y=>!!Y.plan).length,L=Ya(h,w),_=h.aboveFloors+h.belowFloors+(h.hasRoof?1:0),m=w.flatMap(Y=>e.buildingDevicesByFloor.get(Y.id)??[]),u=m.filter(Y=>Y.connectivity==="offline").length,f=new Set(w.map(Y=>Y.id)),T=new Set(e.buildingDeliveries.filter(Y=>f.has(Y.floorId)&&Y.status!=="draft").map(Y=>Y.floorId)).size,O=w.length===0?"pacom-badge--neutral":x===w.length?"pacom-badge--online":"pacom-badge--warning",G=w.length!==_?`规划地上 ${h.aboveFloors} 层${h.belowFloors>0?` ｜ 地下 ${h.belowFloors} 层`:""}${h.hasRoof?" ｜ RF":""} ｜ 已建 ${w.length} 层`:`地上 ${h.aboveFloors} 层${h.belowFloors>0?` ｜ 地下 ${h.belowFloors} 层`:""}${h.hasRoof?" ｜ RF":""}${h.areaSqm?` ｜ ${h.areaSqm} m²`:""}`;return`
                  <article class="dep-building-card" data-drill-building="${n(h.id)}" tabindex="0" role="button" aria-label="进入 ${n(h.name)} 楼层配置">
                    <div class="dep-building-stage">
                      <img src="${n(h.imageUrl??"./media/building-e.webp")}" alt="${n(h.name)}" />
                      <span class="pacom-badge ${O} dep-building-stage-badge">${w.length===0?"未建层":`${x}/${w.length} 底图`}</span>
                    </div>
                    <div class="dep-building-body">
                      <div class="dep-building-head">
                        <span class="dep-building-name">
                          <span>${n(h.name)}</span>
                          <span class="dep-building-arrow" aria-hidden="true">${ce("chevron-right",14)}</span>
                        </span>
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-building="${n(h.id)}" ${i}>编辑</button>
                      </div>
                      <div class="pacom-row-sub">${n(G)}</div>
                      <div class="dep-building-summary">
                        ${m.length>0?`<span>${m.length} 台设备</span><span>｜</span><span>${T}/${w.length} 层已冻结</span>${u>0?`<span>｜</span><span style="color:var(--pacom-status-critical);">${u} 台离线</span>`:""}`:`<span style="color:var(--pacom-text-muted);">${x===w.length&&w.length>0?"底图已齐，待登记设备":"待完善底图与部署"}</span>`}
                      </div>
                      ${L.length>0?`<div class="dep-building-missing">
                               <span>尚缺 ${L.length} 个规划楼层</span>
                               <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-fill-missing-floors="${n(h.id)}" ${i}>补齐楼层</button>
                             </div>`:""}
                    </div>
                  </article>`}).join("")}
          </div>`}
    </section>
  `}function Ws(e,t,a){const{canEdit:s,caps:o}=e,i=$a(s,o.spatial,"待后端空间建档接口对接"),c=e.sortedBuildingFloors(a.id),y=c.filter(f=>!f.plan),p=y.length,v=p===1?y[0]:null,h=c.filter(f=>e.tree.zones.filter(T=>T.floorId===f.id).length===0).length,w=Ya(a,c),x=c.filter(f=>!f.areaSqm),L=x.filter(f=>f.kind==="above"?!0:f.kind==="below"?e.batchAreaIncludeBelow:f.kind==="roof"?e.batchAreaIncludeRoof:!1),_=Math.max(1,c.filter(f=>f.kind==="above"||e.batchAreaIncludeBelow&&f.kind==="below"||e.batchAreaIncludeRoof&&f.kind==="roof").length),m=e.floorListSearch.trim().toLowerCase(),u=c.filter(f=>{if(e.floorListFilter==="missing_plan"&&f.plan||e.floorListFilter==="missing_zone"&&e.tree.zones.filter(T=>T.floorId===f.id).length>0)return!1;if(m){const T=e.tree.zones.filter(O=>O.floorId===f.id).map(O=>O.name).join(" ");if(!`${f.name} ${T}`.toLowerCase().includes(m))return!1}return!0});return`
    <div class="dep-drill-bar">
      <div class="dep-drill-left">
        <button type="button" class="dep-back-btn" data-proj-drill="overview">
          ${ce("arrow-left",16)}
          <span>项目配置</span>
        </button>
        <span class="dep-drill-sep" aria-hidden="true">/</span>
        ${t.length>1?`<select class="pacom-select" name="drillBuildingSelect" data-switch-drill-building aria-label="切换当前楼宇" style="width:auto; min-width:112px;">
                 ${t.map(f=>`<option value="${n(f.id)}" ${f.id===a.id?"selected":""}>${n(f.name)}</option>`).join("")}
               </select>`:`<h2 class="pacom-unified-title">${n(a.name)}</h2>`}
        <span class="pacom-row-sub">规划地上 ${a.aboveFloors} 层${a.belowFloors>0?` ｜ 地下 ${a.belowFloors} 层`:""}${a.hasRoof?" ｜ RF":""} ｜ 已建 ${c.length} 层</span>
      </div>
      <div class="pacom-unified-head-actions">
        <div class="dep-row-menu-wrap dep-l2-more-wrap">
          <button type="button" class="pacom-square-icon-btn" data-toggle-l2-more="1" aria-haspopup="menu" aria-expanded="${e.l2MoreOpen}" aria-label="更多楼宇操作" title="更多楼宇操作">
            ${ce("more-horizontal",16)}
          </button>
          ${e.l2MoreOpen?`<div class="dep-row-menu" role="menu" style="min-width:148px;">
                   <button type="button" class="dep-row-menu-item" role="menuitem" data-edit-building="${n(a.id)}" ${i}>楼宇参数</button>
                   ${x.length>0?`<button type="button" class="dep-row-menu-item" role="menuitem" data-batch-fill-area="${n(a.id)}" ${i}>批量填面积</button>`:""}
                   ${w.length>0?`<button type="button" class="dep-row-menu-item" role="menuitem" data-fill-missing-floors="${n(a.id)}" ${i}>补齐缺失 ${w.length} 层</button>`:""}
                 </div>`:""}
        </div>
        <button type="button" class="pacom-btn" data-open-new-floor="1" ${i}>+ 新增楼层</button>
        ${v?`<label class="pacom-btn pacom-btn--primary" style="cursor:${!s||!o.spatial?"not-allowed":"pointer"}; opacity:${!s||!o.spatial?"0.45":"1"};">
                 <span>上传 ${n(v.name)} 底图</span>
                 <input type="file" name="singleMissingPlan_${n(v.id)}" accept="image/*" data-upload-floor="${n(v.id)}" style="display:none;" ${i} />
               </label>`:`<button type="button" class="pacom-btn pacom-btn--primary" data-open-batch-modal="1" ${i}>批量导入底图</button>`}
      </div>
    </div>

    ${c.length===0?`
        <div class="dep-empty-card">
          <div class="dep-empty-icon">${ce("layers",20)}</div>
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
              <button type="button" class="pacom-tab" role="tab" aria-selected="${e.floorListFilter==="all"}" data-floor-list-filter="all">全部 ${c.length}</button>
              <button type="button" class="pacom-tab" role="tab" aria-selected="${e.floorListFilter==="missing_plan"}" data-floor-list-filter="missing_plan">缺底图 ${p}</button>
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
                       <input class="pacom-input" name="batchStdArea" type="number" step="0.1" min="1" placeholder="如：1200" value="${a.areaSqm?Math.round(a.areaSqm/_):""}" required ${i} />
                     </label>
                     <div style="display:flex; align-items:center; gap:14px; padding-bottom:6px; font-size:13px; color:var(--pacom-text-secondary); flex-wrap:wrap;">
                       <label style="display:inline-flex; align-items:center; gap:6px; cursor:pointer;"><input type="checkbox" name="incBelow" data-batch-area-opt="below" ${e.batchAreaIncludeBelow?"checked":""} />包含地下层</label>
                       <label style="display:inline-flex; align-items:center; gap:6px; cursor:pointer;"><input type="checkbox" name="incRoof" data-batch-area-opt="roof" ${e.batchAreaIncludeRoof?"checked":""} />包含屋面层 (RF)</label>
                     </div>
                   </div>
                   <div style="display:inline-flex; gap:8px;">
                     <button type="button" class="pacom-btn pacom-btn--sm" data-close-batch-area="1">取消</button>
                     <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${L.length===0||!s||!o.spatial?"disabled":""}>应用至 ${L.length} 个空缺层</button>
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
                ${u.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>当前筛选无匹配楼层</strong><span>可切换回「全部」查看整栋楼层。</span></div></td></tr>':u.map(f=>{const T=e.tree.zones.filter(O=>O.floorId===f.id);return`
                            <tr style="cursor:pointer;" data-drill-floor="${n(f.id)}">
                              <td>
                                <div style="display:inline-flex; align-items:center; gap:8px;">
                                  <span class="pacom-dot ${f.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                  <strong>${n(f.name)}</strong>
                                </div>
                              </td>
                              <td><span class="pacom-row-sub">${f.areaSqm?`${f.areaSqm} m²`:"—"}</span></td>
                              <td>
                                <div style="display:inline-flex; align-items:center; gap:8px;">
                                  ${f.plan?`<button type="button" class="dep-floor-thumb" data-open-lightbox="1" data-lb-title="${n(a.name)} ${n(f.name)} 平面底图" data-lb-src="${n(f.plan.imageUrl)}" title="查看大图"><img src="${n(f.plan.imageUrl)}" alt="${n(f.name)}" /></button>
                                         <span class="pacom-badge ${e.planChangeAlerts[f.id]?"pacom-badge--warning":"pacom-badge--online"}">${e.planChangeAlerts[f.id]?"换图待核对":"已就绪"}</span>`:'<span class="pacom-badge pacom-badge--warning">待上传</span>'}
                                  <label class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-stop-row="1" style="cursor:${!s||!o.spatial?"not-allowed":"pointer"}; opacity:${!s||!o.spatial?"0.45":"1"};">
                                    <span>${f.plan?"替换":"上传"}</span>
                                    <input type="file" name="floorPlan_${n(f.id)}" accept="image/*" data-upload-floor="${n(f.id)}" style="display:none;" ${i} />
                                  </label>
                                </div>
                              </td>
                              <td>
                                ${T.length>0?`<span>${T.length} 区</span> <span class="pacom-row-sub" style="margin-left:4px;">${n(T.slice(0,2).map(O=>O.name.replace(new RegExp(`^${f.name}\\s*`,"i"),"")).join("、"))}${T.length>2?"…":""}</span>`:'<span class="pacom-row-sub">未划分</span>'}
                              </td>
                              <td>
                                <div style="display:flex; justify-content:flex-end; gap:6px;">
                                  <button type="button" class="pacom-btn pacom-btn--sm" data-drill-floor-btn="${n(f.id)}">配置</button>
                                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-jump-floor-marking="${n(f.id)}">设备标记 →</button>
                                </div>
                              </td>
                            </tr>`}).join("")}
              </tbody>
            </table>
          </div>
          <div class="pacom-table-footer">
            <span>显示 ${u.length} / ${c.length} 层 ｜ 已传底图 ${c.length-p} 层</span>
          </div>
        </div>`}
  `}function Zs(e,t,a,s){const{canEdit:o,caps:i}=e,c=$a(o,i.spatial,"待后端空间建档接口对接"),y=$a(o,i.floorDocs,"待后端工程资料接口对接"),p=a.findIndex(m=>m.id===s.id),v=p>0?a[p-1]:null,h=p>=0&&p<a.length-1?a[p+1]:null,w=e.tree.zones.filter(m=>m.floorId===s.id),x=e.floorDocs.filter(m=>m.floorId===s.id),L=e.floorDevices,_=a.filter(m=>m.id!==s.id);return`
    <div class="dep-drill-bar">
      <div class="dep-drill-left">
        <button type="button" class="dep-back-btn" data-proj-drill="building">
          ${ce("arrow-left",16)}
          <span>${n(t.name)}</span>
        </button>
        <span class="dep-drill-sep" aria-hidden="true">/</span>
        <div class="dep-floor-pager" role="group" aria-label="连续切换楼层">
          <button type="button" class="dep-floor-pager-btn" data-drill-floor-btn="${n(v?.id??"")}" ${v?`title="上一层（${n(v.name)}）"`:"disabled"} aria-label="上一层">
            ${ce("chevron-left",14)}
          </button>
          <select class="pacom-select" name="drillFloorSelect" data-switch-drill-floor aria-label="切换当前楼层" style="width:auto; min-width:92px;">
            ${a.map(m=>`<option value="${n(m.id)}" ${m.id===s.id?"selected":""}>${n(m.name)}${m.plan?"":"（缺图）"}</option>`).join("")}
          </select>
          <button type="button" class="dep-floor-pager-btn" data-drill-floor-btn="${n(h?.id??"")}" ${h?`title="下一层（${n(h.name)}）"`:"disabled"} aria-label="下一层">
            ${ce("chevron-right",14)}
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
          <input type="file" name="floorPlanDrop_${n(s.id)}" accept="image/*" data-upload-floor="${n(s.id)}" style="display:none;" ${c} />
        </label>
        ${s.plan?`<button type="button" class="dep-plan-tool-btn" style="color:var(--pacom-status-critical);" data-clear-floor-plan="${n(s.id)}" ${c}>清空</button>`:""}
      </div>
      ${s.plan?`<img src="${n(s.plan.imageUrl)}" alt="${n(s.name)} 平面底图" style="width:100%; max-height:360px; object-fit:contain; display:block;" />`:`<div class="dep-plan-empty-drop">
               <div class="dep-empty-icon">${ce("upload",20)}</div>
               <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-primary);">拖拽 ${n(s.name)} 2D 平面图到此处上传</strong>
               <span class="pacom-row-sub">支持透明 WebP / PNG / JPG，上传后可直接前往设备标记</span>
               <label class="pacom-btn pacom-btn--primary" style="cursor:${!o||!i.spatial?"not-allowed":"pointer"}; opacity:${!o||!i.spatial?"0.45":"1"};">
                 <span>选择平面图文件</span>
                 <input type="file" name="floorPlanEmpty_${n(s.id)}" accept="image/*" data-upload-floor="${n(s.id)}" style="display:none;" ${c} />
               </label>
             </div>`}
    </div>

    <section class="pacom-section">
      <div class="pacom-section-head">
        <h2 class="pacom-section-title">楼层属性与空间划分</h2>
        <span class="pacom-row-sub">已关联 ${L.length} 台设备 ｜ ${w.length} 个功能区</span>
      </div>
      <div class="pacom-settings-card">
        <div class="pacom-setting-row">
          <form data-save-floor="${n(s.id)}" style="display:flex; align-items:flex-end; gap:12px; flex-wrap:wrap; flex:1;">
            <label class="dep-field" style="width:120px;">
              <span class="dep-field-label">楼层名称</span>
              <input class="pacom-input" name="fName" value="${n(s.name)}" required ${c} />
            </label>
            <label class="dep-field" style="width:150px;">
              <span class="dep-field-label">建筑面积 (m²)</span>
              <input class="pacom-input" name="fArea" type="number" step="0.1" value="${n(s.areaSqm??"")}" placeholder="选填" ${c} />
            </label>
            <button type="submit" class="pacom-btn" ${c}>保存属性</button>
          </form>
          <button type="button" class="pacom-btn pacom-btn--danger" data-delete-floor="${n(s.id)}" ${!o||!i.spatial||L.length>0?`disabled title="${L.length>0?`已关联 ${L.length} 台设备，请先解绑后再删除`:o?"待后端空间建档接口对接":"当前角色为只读权限"}"`:""}>删除楼层</button>
        </div>

        <div class="pacom-setting-row" style="justify-content:space-between; gap:12px;">
          <div style="display:flex; align-items:center; gap:8px;">
            <div class="pacom-tabs" role="tablist" aria-label="楼层附属配置">
              <button type="button" class="pacom-tab" role="tab" aria-selected="${e.floorDetailTab==="zones"}" data-floor-detail-tab="zones">功能区（${w.length}）</button>
              <button type="button" class="pacom-tab" role="tab" aria-selected="${e.floorDetailTab==="docs"}" data-floor-detail-tab="docs">工程资料（${x.length}）</button>
            </div>
            ${Ct("功能区与工程资料说明","功能区用于按办公区、实验区、会议室等逻辑范围归类设备与策略；标准层划分后可一键复用至其他楼层。")}
          </div>
          ${e.floorDetailTab==="zones"?w.length>0&&_.length>0?`<button type="button" class="pacom-btn" data-open-copy-zones="${n(s.id)}" ${c}>复用至其他层…</button>`:"":`<label class="pacom-btn" style="cursor:${!o||!i.floorDocs?"not-allowed":"pointer"}; opacity:${!o||!i.floorDocs?"0.45":"1"};">
                   <span>+ 关联文件</span>
                   <input type="file" name="attachDoc_${n(s.id)}" accept=".pdf,.xlsx,.xls,.csv,.doc,.docx,.dwg,.png,.jpg,.jpeg,.webp,.txt" data-attach-doc="${n(s.id)}" style="display:none;" ${y} />
                 </label>`}
        </div>

        ${e.floorDetailTab==="zones"?`
              ${w.length===0?`
                  <div class="pacom-setting-row" style="flex-direction:column; align-items:flex-start; gap:10px;">
                    <span class="pacom-row-sub">本层暂未划分功能区，可一键套用常用标准模板：</span>
                    <div style="display:flex; flex-wrap:wrap; gap:8px;">
                      ${es.map(m=>`<button type="button" class="pacom-btn pacom-btn--sm" data-apply-zone-tpl="${n(m.key)}" data-tpl-floor="${n(s.id)}" ${c}>+ ${n(m.label)}</button>`).join("")}
                    </div>
                  </div>`:w.map(m=>e.editingZoneId===m.id?`
                            <form class="pacom-setting-row" style="gap:10px; justify-content:flex-start; align-items:flex-end;" data-save-edit-zone="${n(m.id)}" data-zone-floor="${n(s.id)}">
                              <label class="dep-field" style="width:220px;">
                                <span class="dep-field-label">功能区名称</span>
                                <input class="pacom-input" name="zName" value="${n(m.name)}" required ${c} />
                              </label>
                              <label class="dep-field" style="width:140px;">
                                <span class="dep-field-label">空间类型</span>
                                <select class="pacom-select" name="zCat" ${c}>
                                  ${Object.keys(Ia).map(u=>`<option value="${u}" ${m.category===u?"selected":""}>${Ia[u]}</option>`).join("")}
                                </select>
                              </label>
                              <button type="submit" class="pacom-btn pacom-btn--primary" ${c}>保存</button>
                              <button type="button" class="pacom-btn" data-cancel-edit-zone="1">取消</button>
                            </form>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">${n(m.name)} <span class="pacom-badge pacom-badge--neutral">${n(Ia[m.category]??m.category)}</span></span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-zone="${n(m.id)}" ${c}>编辑</button>
                                <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-del-zone="${n(m.id)}" ${c}>删除</button>
                              </div>
                            </div>`).join("")}
              <form class="pacom-setting-row" style="gap:10px; justify-content:flex-start; align-items:flex-end;" data-add-zone="${n(s.id)}">
                <label class="dep-field" style="width:240px;">
                  <span class="dep-field-label">新增功能区</span>
                  <input class="pacom-input" name="zoneName" placeholder="如：${n(s.name)} 东侧实验区" required ${c} />
                </label>
                <label class="dep-field" style="width:140px;">
                  <span class="dep-field-label">空间类型</span>
                  <select class="pacom-select" name="zoneCat" ${c}>
                    ${Object.keys(Ia).map(m=>`<option value="${m}">${Ia[m]}</option>`).join("")}
                  </select>
                </label>
                <button type="submit" class="pacom-btn" ${c}>+ 添加功能区</button>
              </form>`:x.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无关联竣工图纸或设备手册，可点击右上角「+ 关联文件」挂载。</span></div>':x.map(m=>`
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">${n(m.name)}</span>
                        <span class="pacom-row-sub">${n(m.boundScope)} ｜ ${n(m.size)} ｜ ${n(m.updatedAt)}</span>
                      </div>
                      <div class="pacom-setting-control">
                        <select class="pacom-select" name="docCat_${n(m.id)}" data-doc-category="${n(m.id)}" aria-label="资料分类" style="width:108px;" ${$a(o,i.manageDocs,"待后端资料分类接口对接")}>
                          ${Fs.map(u=>`<option value="${u}" ${m.category===u?"selected":""}>${u}</option>`).join("")}
                        </select>
                        <button type="button" class="pacom-btn pacom-btn--sm" data-preview-doc="${n(m.id)}">${m.fileUrl?"打开":"查阅"}</button>
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-del-doc="${n(m.id)}" ${$a(o,i.manageDocs,"待后端工程资料删除接口对接")}>删除</button>
                      </div>
                    </div>`).join("")}
      </div>
    </section>
  `}function Pt(e,t,a){return e?t?"":`disabled title="${n(a)}"`:'disabled title="当前角色为只读权限"'}const os="pacom.web.deployState.v1";function Gs(){try{if(typeof sessionStorage<"u"){const e=sessionStorage.getItem(os);if(e)return JSON.parse(e)}}catch{}return{}}async function Ks(e,t,a){let s=a;const o=Ds(t),i=Ps(),c=Gs(),y=new URLSearchParams(window.location.hash.split("?")[1]??""),p=y.get("sec"),v=y.get("floor");let h=p?p==="floorplan"||p==="devices"?"device_marking":p==="inventory"?"device_list":p==="groups"?"device_groups":p==="network"||p==="network_topo"?"device_network":p==="connections"?"connections":p==="overview"||p==="acceptance"?"acceptance":"project_config":c.activeNav??"project_config",w=p==="floors"?"floor":!p&&c.projectDrill?c.projectDrill:"overview",x=Ka(),L=!1,_="",m=await t.getSpatialTree(),u=[];const f=new Map;let T=[],O={},G={version:1,dirty:!1,lastSyncedAt:null},Y={};const ae=new Map;let de=[],te=[],ue=[],J=[],H={},Q={},ge={},Ue={},ye=new Set;const z={...Ls},ve=new Map;let B=!1;const Z=x.level!=="all-projects"?x.projectId:"",ke=x.level==="building"||x.level==="floor"?x.buildingId:"",W=x.level==="floor"?x.floorId:"",S=v?m.floors.find(D=>D.id===v):null,F=S?m.buildings.find(D=>D.id===S.buildingId):null;let P=F?.projectId??(Z&&m.projects.some(D=>D.id===Z)?Z:c.activeProjectId&&m.projects.some(D=>D.id===c.activeProjectId)?c.activeProjectId:m.projects[0]?.id??""),b=F?.id??(ke&&m.buildings.some(D=>D.id===ke&&D.projectId===P)?ke:c.activeBuildingId&&m.buildings.some(D=>D.id===c.activeBuildingId&&D.projectId===P)?c.activeBuildingId:m.buildings.find(D=>D.projectId===P)?.id??""),C=S?.id??(W&&m.floors.some(D=>D.id===W&&D.buildingId===b)?W:c.activeFloorId&&m.floors.some(D=>D.id===c.activeFloorId&&D.buildingId===b)?c.activeFloorId:""),ne="all",xe="",Je=!1,st=!1,Ve=!1,ie=!1,j="zones",M=null,oe="device",fe="",$e="",et="all",rt=!1,Le=!1,_e="binding",Te=null,qe=null,ot=!1,g=!1,q=1,pe=0,Ee=0,at="",Qe="all",Xe="all",He="mesh",Me=[],Ge="list",vt="",Et="all",wa=null,Fa=null,Ne=null,je=null,ut=!1,Bt="active",Kt=!1,gt=null,We="",bt=null,Rt=y.get("new")==="project",Yt=null,Lt=null,ia=!1,la=!1,ra=null,Jt=null,ca=null,da=!1,pa=null,Dt=!1,Qt=!1,Ft=[],jt=null,kt=new Set,ua=!1,it=null,Xt=null,Sa=null,wt=!1,k="",N=null,X=!1,ee="",he=null,Be=null,Ze=null,me="",Ae="",Fe=null;function le(D){Ae="",Fe=null,h==="device_marking"?($e=D,me=""):(me=D,$e="")}function re(D,U=null){me="",$e="",Ae=$t(D),Fe=U}function Ie(){try{typeof sessionStorage<"u"&&sessionStorage.setItem(os,JSON.stringify({activeNav:h,projectDrill:w,activeProjectId:P,activeBuildingId:b,activeFloorId:C}))}catch{}}function Re(D){if(!D){qe=null;return}const U=u.filter(K=>K.category==="gateway");qe={deviceId:D.id,gatewayId:D.hardwareBinding?.gatewayId??(D.category==="gateway"?D.id:U[0]?.id??""),protocol:D.hardwareBinding?.protocol??dn[0],networkAddress:D.hardwareBinding?.networkAddress??"",portOrChannel:D.hardwareBinding?.portOrChannel??"",physicalInstalled:D.physicalInstalled}}function Ke(D){return[...m.floors.filter(U=>U.buildingId===D)].sort((U,K)=>qa(K.name)-qa(U.name))}function Ea(D){if(!D)return"未分配功能区";const U=m.zones.find(se=>se.id===D);if(!U)return D;const K=m.floors.find(se=>se.id===U.floorId);return K?U.name.replace(new RegExp(`^${K.name}\\s*`,"i"),""):U.name}function Se(){We="",Rt=!1,Yt=null,Lt=null,ia=!1,la=!1,ra=null,Jt=null,ca=null,da=!1,pa=null,Dt=!1,jt=null,ua=!1,it=null,Xt=null,Sa=null,wt=!1,N=null,X=!1,ee="",he=null,Be=null}function vn(){return!!(Rt||ia||la||ca||da||Dt||jt||ua||it||Xt||wt||N||he||Be)}function ea(){if(!P){x=qt({level:"all-projects"});return}b&&C?x=qt({level:"floor",projectId:P,buildingId:b,floorId:C}):b?x=qt({level:"building",projectId:P,buildingId:b}):x=qt({level:"project",projectId:P})}function xa(D){const U=Ke(D);if(U.length===0)return"";const K=U.find(we=>(f.get(we.id)?.length??0)>0);if(K)return K.id;const se=U.find(we=>zt(we.name)==="1F");if(se)return se.id;const be=U.filter(we=>we.kind==="above").sort((we,Pe)=>we.level-Pe.level);return be.length>0?be[0].id:U[0].id}function ta(D){const U=m.floors.find(be=>be.id===D);if(!U)return;C&&C!==U.id&&(Te?ve.set(C,{selectedId:Te,drawerOpen:Le,drawerTab:_e}):ve.delete(C)),C=U.id,b=U.buildingId;const K=m.buildings.find(be=>be.id===U.buildingId);K&&(P=K.projectId),ea();const se=ve.get(U.id);se?(Te=se.selectedId,Le=se.drawerOpen,_e=se.drawerTab):(Te=null,Le=!1),g=!1,M=null,q=1,pe=0,Ee=0}async function Ye(){if(!C){u=[],T=[],O={},G={version:1,dirty:!1,lastSyncedAt:null},de=[],te=[];return}const[D,U,K,se,be,we,Pe,nt]=await Promise.all([t.getFloorDevices(C).catch(()=>[]),t.listLightMarkers?t.listLightMarkers(C).catch(()=>[]):Promise.resolve([]),t.listMeshRoles?t.listMeshRoles(C).catch(()=>({})):Promise.resolve({}),t.getEdgeSyncState?t.getEdgeSyncState(C).catch(()=>({version:1,dirty:!1,lastSyncedAt:null})):Promise.resolve({version:1,dirty:!1,lastSyncedAt:null}),t.listDeviceGroups?t.listDeviceGroups(C).catch(()=>[]):Promise.resolve([]),t.listFloorDocs?t.listFloorDocs(C).catch(()=>[]):Promise.resolve([]),t.getFloorFttRecord?t.getFloorFttRecord(C).catch(()=>null):Promise.resolve(null),t.getFloorCurrentSignature?t.getFloorCurrentSignature(C).catch(()=>""):Promise.resolve("")]);u=D,f.set(C,D),T=U,O=K,G=se,Y[C]=se,de=be,te=we,nt&&(Q[C]=nt),Pe?Ue[C]=Pe:delete Ue[C],t.getDeviceParams&&await Promise.all(D.map(async r=>{const d=await t.getDeviceParams(r.id).catch(()=>null);d&&ae.set(r.id,d)})),Te&&!u.some(r=>r.id===Te)&&(Te=null,Le=!1,ot=!1,qe=null);const l=u.find(r=>r.id===Te);(!qe||qe.deviceId!==l?.id)&&Re(l)}async function It(){if(f.clear(),Y={},Ue={},ge={},ye=new Set,J=[],H={},Q={},!b)return;const D=Ke(b);if(t.listPlanChangeAlerts&&(ge=await t.listPlanChangeAlerts(b).catch(()=>({}))),t.listDeferredFloorIds){const se=await t.listDeferredFloorIds(b).catch(()=>[]);ye=new Set(se)}t.listDeliverySnapshotMeta&&(H=await t.listDeliverySnapshotMeta(b).catch(()=>({})));const U=[];await Promise.all(D.map(async se=>{if(!(s.scope.allowedFloorIds.includes(se.id)||s.scope.canEditDeployment)){f.set(se.id,[]);return}const[we,Pe,nt,l,r]=await Promise.all([t.getFloorDevices(se.id).catch(()=>[]),t.getEdgeSyncState?t.getEdgeSyncState(se.id).catch(()=>({version:1,dirty:!1,lastSyncedAt:null})):Promise.resolve({version:1,dirty:!1,lastSyncedAt:null}),t.getFloorFttRecord?t.getFloorFttRecord(se.id).catch(()=>null):Promise.resolve(null),t.listDeliveryBatches(se.id).catch(()=>[]),t.getFloorCurrentSignature?t.getFloorCurrentSignature(se.id).catch(()=>""):Promise.resolve("")]);f.set(se.id,we),Y[se.id]=Pe,nt&&(Ue[se.id]=nt),r&&(Q[se.id]=r),U.push(l)}));const K=new Set;J=U.flat().filter(se=>K.has(se.id)?!1:(K.add(se.id),!0)).sort((se,be)=>be.frozenAt.localeCompare(se.frozenAt))}async function ct(){Ae="",Fe=null;const D=await t.getSession().catch(()=>null);D&&(s=D),m=await t.getSpatialTree();let U=!1;if(m.projects.length===0)P="",b="",C="",w="overview";else{m.projects.some(be=>be.id===P)||(P=m.projects[0].id,w="overview");const K=m.buildings.filter(be=>be.projectId===P);K.some(be=>be.id===b)||(b=K[0]?.id??"",w!=="overview"&&(w="overview"),U=!0),(b?Ke(b):[]).some(be=>be.id===C)||(U=!0,w==="floor"&&(w=b?"building":"overview"))}ue=P?await t.listConnections(P).catch(()=>[]):[],await It(),b&&(U||!C)&&(C=xa(b)),ea(),await Ye(),E()}const fn=D=>{if(!document.body.contains(e)){document.removeEventListener("keydown",fn),document.removeEventListener("click",Ja),i.destroy();return}if(D.key==="Escape"){Ze?(Ze=null,E()):vn()?(Se(),E()):ut||Ne||Je?(ut=!1,Ne=null,Je=!1,E()):L?(L=!1,E()):g?(g=!1,E()):Le&&(Le=!1,E());return}if(D.key==="Tab"&&vn()){const U=e.querySelector(".dep-modal-card");if(!U)return;const K=Array.from(U.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])')).filter(we=>we.offsetParent!==null);if(K.length===0)return;const se=K[0],be=K[K.length-1];D.shiftKey&&document.activeElement===se?(D.preventDefault(),be.focus()):!D.shiftKey&&document.activeElement===be&&(D.preventDefault(),se.focus())}},Ja=D=>{if(!document.body.contains(e)){document.removeEventListener("click",Ja);return}const U=D.target;ut&&!U?.closest(".dep-more-wrap")&&(ut=!1,E()),Ne&&!U?.closest(".dep-row-menu-wrap")&&(Ne=null,E()),Je&&!U?.closest(".dep-l2-more-wrap")&&(Je=!1,E()),L&&!U?.closest('[data-role="global-space-wrap"]')&&(L=!1,E())};document.addEventListener("keydown",fn),document.addEventListener("click",Ja);function ja(){const D=e.querySelector('[data-role="dep-viewport"]');D&&(D.style.transform=`translate(${pe}px, ${Ee}px) scale(${q})`);const U=e.querySelector('[data-role="dep-zoom-label"]');U&&(U.textContent=`${Math.round(q*100)}%`)}function gn(D){if(!s.scope.canEditDeployment){re("当前角色为只读权限，无法执行设备自检。"),E();return}const U=t.mode==="demo";D.hardwareBinding?D.connectivity!=="online"?re(`单机自检未通过（FAIL）：「${D.name}」当前${D.connectivity==="unknown"?"待入网":"离线"}，请核查网关链路或现场供电。`):le(U?`演示单机回读自检通过（PASS）：「${D.name}」模拟状态校验一致。`:`单机回读自检通过（PASS）：「${D.name}」指令下发与状态回读一致，已安全复位。`):re(`单机自检未通过（FAIL）：「${D.name}」尚未完成硬件绑定（当前待入网），请先填写协议、地址与上游网关后再执行自检。`),E()}async function bn(D){if(!s.scope.canEditDeployment){re("当前角色为只读权限，无法执行全层自检。"),E();return}Ae="",Fe=null;const U=t.mode==="demo",K=m.floors.find(l=>l.id===D)?.name??"当前楼层",se=f.get(D)??(D===C?u:[]);if(se.length===0){re(`${K} 尚无登记设备，无法执行全层自检。`),E();return}if(Y[D]?.dirty){re(`${K} 存在未下发的配置变更，请先前往「设备网络」同步至边缘网关后再执行全层自检。`,{label:"前往同步 →",nav:"device_network"}),E();return}if(ge[D]){re(`${K} 更换底图后尚未确认点位核对，请先在「设备标记」核对并确认点位后再执行全层自检。`,{label:"前往核对点位 →",nav:"device_marking"}),E();return}const be=se.filter(l=>l.connectivity!=="online"||!l.hardwareBinding),we=se.length-be.length,Pe=new Date,nt=`${String(Pe.getHours()).padStart(2,"0")}:${String(Pe.getMinutes()).padStart(2,"0")}:${String(Pe.getSeconds()).padStart(2,"0")}`;if(gt={buildingId:b,floorId:D,ranAt:nt,floorName:K,total:se.length,passed:we,failed:be.length,failedNames:be.map(l=>`${l.name}${l.hardwareBinding?l.connectivity==="unknown"?"（待入网）":"（离线）":"（未绑定/待入网）"}`)},be.length>0)re(`${K} 全层批量自检完成：${we}/${se.length} 台通过，${be.length} 台异常（${gt.failedNames.join("、")}）。`);else{if(t.recordFloorFttPass){const l=await t.recordFloorFttPass(D,se.length).catch(()=>null);l&&(Ue[D]=l)}le(U?`${K} 演示全层自检通过（${we}/${se.length}），已签发当前配置基线自检凭证。`:`${K} 全层批量自检全部通过（${we}/${se.length}），设备已自动安全复位。`)}E()}function is(){const D=u.filter(Gt),U=[],K=D.filter(d=>d.connectivity==="offline"),se=D.filter(d=>d.connectivity==="unknown"||!d.hardwareBinding&&d.connectivity!=="offline"),be=D.filter(d=>d.connectivity==="online"),we=D.filter(d=>!d.planPoint),Pe=D.filter(d=>O[d.id]?.proxy).length,nt=D.filter(d=>O[d.id]?.relay).length,l=D.length?nt/D.length:0;D.length===0?U.push({level:"warn",title:"本层暂无蓝牙 Mesh 无线节点",detail:"可在「设备标记」中新增网关、传感器或照明面板。"}):(K.length>0&&K.forEach(d=>U.push({level:"fail",title:`无线节点不可达：${d.name}`,detail:"建议核查供电及网关距离，必要时在遮挡拐角处增设中继器。",deviceId:d.id})),se.length>0&&U.push({level:"warn",title:`尚有 ${se.length} 台无线节点待绑定入网`,detail:`${se.map(d=>d.name).join("、")} 尚未完成硬件绑定，无法参与组网同步与心跳探测。`,deviceId:se[0]?.id}),K.length===0&&se.length===0&&be.length>0&&U.push({level:"ok",title:"蓝牙 Mesh 节点全部在线可达",detail:`${be.length} 台已绑定无线节点均正常响应心跳。`})),D.length>0&&Pe<1?U.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，便于移动端就近入网。"}):Pe>0&&U.push({level:"ok",title:`代理节点配置合理（${Pe} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),l>.25&&D.length>=4&&U.push({level:"warn",title:`中继比例偏高（${Math.round(l*100)}%）`,detail:"建议将 Relay 中继控制在总节点 10% 左右，避免广播风暴。"}),we.length>0&&U.push({level:"warn",title:`尚有 ${we.length} 台无线节点未完成设备标记`,detail:"请前往「设备标记」补齐平面坐标以便现场施工定位。"}),Me=U;const r=U.filter(d=>d.level!=="ok").length;le(`已完成无线蓝牙 Mesh 网络体检（检测 ${D.length} 台节点，在线 ${be.length} 台，待处理 ${r} 项）。`),E()}function ls(){const D=we=>`"${String(we).replaceAll('"','""')}"`;if(h==="acceptance"){const we=Qa(),Pe=m.buildings.find(A=>A.id===b),nt=b?Ke(b):[],l=[`[楼层部署门控汇总 - ${Pe?.name??"当前楼宇"}]`,["楼层","本期范围","底图状态","设备标记","绑定与物理复核","在线入网","边缘同步","自检FTT","当前交付状态","当前有效版本","阻止项"].join(","),...nt.map(A=>{const I=_a(we,A.id),V=ns(we,A.id,I);return[A.name,I.deferred?"本期不纳入（暂缓）":"纳入本期",I.planAlert?"换图待核对":I.hasPlan?`已就绪(v${A.plan?.planVersion??1})`:"待传底图",`${I.placedCount}/${I.deviceCount}`,`${I.boundVerifiedCount}/${I.deviceCount}`,`${I.onlineCount}/${I.deviceCount}`,I.deferred?"本期不纳入":I.deviceCount===0?"未部署":I.syncDirty?"待同步":"已同步",I.deferred?"不适用":I.deviceCount===0?"未部署":I.fttRecord?"已通过":"未自检",V.label,V.currentVersionTag||"—",I.blockers.join(" / ")||"无"].map(D).join(",")}),"","[整栋设备部署明细]",["楼层","设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...nt.flatMap(A=>(f.get(A.id)??[]).map(I=>[A.name,I.name,I.category,Ea(I.logicalZoneId),I.planPoint?`${Math.round(I.planPoint.x*100)}%/${Math.round(I.planPoint.y*100)}%`:"未标记",I.hardwareBinding?`${I.hardwareBinding.protocol} ${I.hardwareBinding.networkAddress}`:"未绑定",I.physicalInstalled?"已复核":"待复核",I.connectivity==="online"?"在线":I.connectivity==="unknown"?"待入网":"离线"].map(D).join(","))),"","[交付冻结与阶段留档记录]",["版本标签","所属楼层","核验进度","原始动作状态","当前有效性","所属楼层当前有效版本","记录人","签收/退回人","时间","备注"].join(","),...J.map(A=>{const I=Wa(we,A),V=H[A.id],De=V?.signedOffBy?`签收:${V.signedOffBy}`:V?.rejectedBy?`退回:${V.rejectedBy}`:"—";return[A.versionTag,m.floors.find(Oe=>Oe.id===A.floorId)?.name??A.floorId,`${A.verifiedCount}/${A.deviceCount}`,I.actionLabel,I.validityLabel,I.latestEffectiveVersion,A.frozenBy,De,A.frozenAt,A.note??""].map(D).join(",")})],r=new Blob([`\uFEFF${l.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),d=URL.createObjectURL(r),$=document.createElement("a");$.href=d,$.download=`pacom-deployment-checklist-${Pe?.name??"building"}.csv`,$.click(),URL.revokeObjectURL(d);return}const U=[["楼层","设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...u.map(we=>[m.floors.find(Pe=>Pe.id===we.floorId)?.name??we.floorId,we.name,we.category,Ea(we.logicalZoneId),we.planPoint?`${Math.round(we.planPoint.x*100)}%/${Math.round(we.planPoint.y*100)}%`:"未标记",we.hardwareBinding?`${we.hardwareBinding.protocol} ${we.hardwareBinding.networkAddress}`:"未绑定",we.physicalInstalled?"已复核":"待复核",we.connectivity==="online"?"在线":we.connectivity==="unknown"?"待入网":"离线"].map(D).join(","))],K=new Blob([`\uFEFF${U.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),se=URL.createObjectURL(K),be=document.createElement("a");be.href=se,be.download="pacom-device-list.csv",be.click(),URL.revokeObjectURL(se)}async function rs(D){const U=m.buildings.find(se=>se.id===D);if(!U||!t.upsertFloor)return 0;const K=Ya(U,Ke(U.id));for(const se of K)await t.upsertFloor({buildingId:U.id,kind:se.kind,level:se.level,name:se.name});return K.length}function cs(D,U){const K=l=>`"${String(l).replaceAll('"','""')}"`,se=Wa(Qa(),D,U),be=[`[PACOM Station 单批交付快照 - ${D.versionTag}]`,["版本标签","原始动作状态","当前有效性","所属楼层当前有效版本","所属楼层","底图版本","边缘基线","核验进度","冻结人","冻结时间","签收人","签收时间","退回人","退回原因","备注"].join(","),[D.versionTag,se.actionLabel,se.validityLabel,se.latestEffectiveVersion,U.floorName,U.planVersion>0?`v${U.planVersion}`:"无底图",`v${U.edgeSyncVersion}`,`${D.verifiedCount}/${D.deviceCount}`,D.frozenBy,D.frozenAt,U.signedOffBy??"—",U.signedOffAt??"—",U.rejectedBy??"—",U.rejectReason??"—",U.signOffNote??D.note??""].map(K).join(","),"","[逐设备核验快照]",...U.snapshotSource==="legacy_missing"?[K("说明：历史种子基线不含冻结时刻的原始逐设备明细，不以当前实时设备冒充。")]:[["设备名称","类别","功能区","图上坐标","上游网关","硬件绑定协议与地址","端口/回路","自治参数摘要","物理复核","连通状态"].join(","),...U.devices.map(l=>[l.name,l.category,l.zoneLabel,l.placed&&l.planX!==void 0&&l.planY!==void 0?`${Math.round(l.planX*100)}%/${Math.round(l.planY*100)}%`:l.placed?"已标记":"未标记",l.gatewayName??"—",l.bound?`${(l.protocol??"").toUpperCase()} ${l.address??""}`:"未绑定",l.portOrChannel??"—",l.paramsSummary??"默认参数",l.physicalInstalled?"已复核":"待复核",l.connectivity==="online"?"在线":l.connectivity==="unknown"?"待入网":"离线"].map(K).join(","))]],we=new Blob([`\uFEFF${be.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),Pe=URL.createObjectURL(we),nt=document.createElement("a");nt.href=Pe,nt.download=`pacom-snapshot-${D.versionTag}.csv`,nt.click(),URL.revokeObjectURL(Pe)}function ds(){const D=ue.some(K=>K.status!=="connected"),U=(K,se,be,we,Pe)=>`
      <button type="button" class="pacom-unified-item" aria-current="${h===K}" data-dep-nav="${K}">
        ${ce(se,16)}
        <span>${be}</span>
        ${we?`<span class="dep-nav-meta"><span class="dep-nav-pip dep-nav-pip--${we}" title="${n(Pe??"")}" aria-hidden="true"></span></span>`:""}
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
          ${U("device_network","waypoints","设备网络",G.dirty?"warn":void 0,"当前层有未同步至边缘网关的配置变更")}
        </div>
        <div class="pacom-unified-group">
          <div class="pacom-unified-group-title">接入与验收</div>
          ${U("connections","plug","系统接入",D?"crit":void 0,"当前项目存在通信降级或断开通道")}
          ${U("acceptance","clipboard-check","交付验收")}
        </div>
      </aside>
    `}function hn(D){if(m.projects.length===0)return`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${Pt(D,o.spatial,"待后端空间建档接口对接")}>+ 新建项目</button>`;if(h==="project_config"){if(w!=="overview")return"";const se=Pt(D,o.spatial,"待后端空间建档接口对接"),be=m.buildings.some(we=>we.projectId===P);return`
        <button type="button" class="pacom-btn" data-open-new-proj="1" ${se}>+ 新建项目</button>
        ${be?`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-bld="1" ${se}>+ 新建楼宇</button>`:""}
      `}if(h==="device_marking")return`
        <button type="button" class="pacom-btn" data-export-inv="1">导出标记表</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-dev="1" ${Pt(D,o.createDevice,"待后端设备建档接口对接")}>+ 新增设备</button>
      `;if(h==="device_list")return`
        <button type="button" class="pacom-btn" data-export-inv="1">导出 CSV</button>
        <button type="button" class="pacom-btn" data-batch-ftt="1" ${!D||u.length===0?`disabled title="${D?"本层暂无设备":"当前角色为只读权限"}"`:""}>全层自检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-dev="1" ${Pt(D,o.createDevice,"待后端设备建档接口对接")}>+ 新增设备</button>
      `;if(h==="device_groups")return`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-group="1" ${Pt(D,o.deviceGroups,"待后端设备分组接口对接")}>+ 新建分组</button>`;if(h==="device_network")return`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${Pt(D,o.edgeSync,"待后端边缘同步接口对接")}>${G.dirty?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `;if(h==="connections"){const se=Pt(D,o.restartEdge,"待后端边缘维护接口对接");return`
        <div class="dep-more-wrap">
          <button type="button" class="pacom-square-icon-btn" data-toggle-conn-more="1" aria-haspopup="menu" aria-expanded="${ut}" aria-label="更多操作" title="更多操作">${ce("more-horizontal",16)}</button>
          ${ut?`<div class="dep-more-menu" role="menu">
                   <button type="button" class="dep-more-item dep-more-item--danger" role="menuitem" data-req-restart-edge="1" ${se}>
                     ${ce("rotate-ccw",14)}
                     <span>重启边缘服务</span>
                   </button>
                 </div>`:""}
        </div>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-conn="1" ${Pt(D,o.manageConnections,"待后端系统接入写入接口对接")}>+ 新增接入通道</button>
      `}const K=(b?Ke(b):[]).reduce((se,be)=>se+(f.get(be.id)?.length??0),0);return`
      <button type="button" class="pacom-btn" data-export-inv="1">导出部署清单</button>
      <button type="button" class="pacom-btn pacom-btn--primary" data-open-freeze-modal="1" ${!D||K===0?`disabled title="${D?"本栋尚无已登记设备，请先前往设备标记":"当前角色为只读权限"}"`:""}>交付冻结</button>
    `}function Qa(){return{session:s,canEdit:s.scope.canEditDeployment,isDemoMode:t.mode==="demo",caps:o,tree:m,activeNav:h,projectDrill:w,activeProjectId:P,activeBuildingId:b,activeFloorId:C,floorDevices:u,buildingDevicesByFloor:f,lightMarkers:T,meshRoles:O,edgeSync:G,edgeSyncByFloor:Y,deviceParams:ae,groups:de,floorDocs:te,connections:ue,buildingDeliveries:J,deliverySnapshotMetaMap:H,floorCurrentSignatures:Q,planChangeAlerts:ge,floorFttRecords:Ue,deferredFloorIds:ye,zoneBoxes:z,floorListFilter:ne,floorListSearch:xe,l2MoreOpen:Je,batchAreaOpen:st,batchAreaIncludeBelow:Ve,batchAreaIncludeRoof:ie,floorDetailTab:j,editingZoneId:M,canvasBrush:oe,canvasSearch:fe,canvasNotice:$e,deviceFilter:et,hudPoolOpen:rt,drawerOpen:Le,drawerTab:_e,selectedId:Te,bindingDraft:qe,editingDeviceMeta:ot,placingMode:g,zoom:q,panX:pe,panY:Ee,listSearch:at,listStatusFilter:Qe,listCategoryFilter:Xe,topoMode:He,meshFindings:Me,connViewMode:Ge,connSearch:vt,connStatusFilter:Et,expandedConnId:wa,selectedTopoConnId:Fa,connMenuOpenId:Ne,copiedEndpointId:je,connMoreOpen:ut,acceptanceFilter:Bt,showEmptyBuildingMatrix:Kt,batchFttResult:gt,modalError:We,returnTrail:bt,showNewProjectModal:Rt,projFormDraft:Yt,newProjCoverDataUrl:Lt,showEditProjectModal:ia,showNewBuildingModal:la,bldFormDraft:ra,newBldImageDataUrl:Jt,editingBuildingId:ca,showNewFloorModal:da,floorFormDraft:pa,showBatchModal:Dt,batchDropActive:Qt,pendingBatchUploads:Ft,copyZoneSourceFloorId:jt,copyTargetFloorIds:kt,showNewDevModal:ua,groupModal:it,connModal:Xt,connFormDraft:Sa,showFreezeModal:wt,freezeTargetFloorId:k,snapshotDetailModal:N,snapshotRejectOpen:X,snapshotRejectReason:ee,planSwapReviewFloorId:he,confirmDialog:Be,lightboxPlan:Ze,sortedBuildingFloors:Ke,getZoneLabel:Ea}}function E(){Ie(),i.close();const D=Qa(),{canEdit:U}=D,K=s.scope.activeOverrides.find(r=>r.module==="deployment"&&r.status==="active"),se=K?`<div class="pacom-banner pacom-banner--ok">
          <div class="pacom-banner-text">
            <span class="pacom-banner-title">临时提权生效中（系统部署 ｜ ${K.durationHours}h）</span>
            <span class="pacom-banner-sub">审批人：${n(K.approvedBy)} ｜ 到期自动收回：${n(K.expiresAt.slice(0,16).replace("T"," "))} ｜ 事由：${n(K.reason)}</span>
          </div>
        </div>`:"",be=Cs[h],we=h==="device_marking",Pe=h==="project_config"&&w!=="overview",nt=!we&&h!=="device_list",l=Ae?`<div class="pacom-alert-banner" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
           <span>${n(Ae)}</span>
           ${Fe?`<button type="button" class="pacom-btn pacom-btn--sm" data-dep-nav="${Fe.nav}">${n(Fe.label)}</button>`:""}
         </div>`:"";e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${Za({tree:m,session:s,scope:x,maxGranularity:be.granularity,isOpen:L,searchKeyword:_})}
            </div>
            <div class="pacom-header-meta">
              ${U?K?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${ds()}
          ${we?`<div class="pacom-unified-main--canvas">
                  <div class="dep-canvas-topbar">
                    <div class="pacom-unified-head-copy">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <h2 class="pacom-unified-title">${be.title}</h2>
                        ${bt?`<button type="button" class="dep-return-pill" data-return-trail="1">${ce("arrow-left",14)}<span>返回${n(bt.label)}</span></button>`:""}
                      </div>
                      <p class="pacom-unified-subtitle">${be.subtitle}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${hn(U)}
                    </div>
                  </div>
                  ${se}
                  ${l}
                  ${zs(D)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner ${nt?"pacom-unified-inner--reading":""}">
                  ${Pe?"":`<div class="pacom-unified-head pacom-unified-head--split">
                          <div class="pacom-unified-head-copy">
                            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                              <h2 class="pacom-unified-title">${be.title}</h2>
                              ${bt&&h==="device_list"?`<button type="button" class="dep-return-pill" data-return-trail="1">${ce("arrow-left",14)}<span>返回${n(bt.label)}</span></button>`:""}
                            </div>
                            <p class="pacom-unified-subtitle">${be.subtitle}</p>
                          </div>
                          <div class="pacom-unified-head-actions">
                            ${hn(U)}
                          </div>
                        </div>`}
                  ${se}
                  ${me?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${n(me)}</span></div>`:""}
                  ${l}
                  ${h==="project_config"?Hs(D):h==="device_list"?Ns(D):h==="device_groups"?Us(D):h==="device_network"?Vs(D):h==="connections"?qs(D):Bs(D)}
                </div>
              </div>`}
        </div>
      </div>
      ${Rs(D)}
    `,us(),i.bind(e)}async function ps(D){try{if(D.kind==="delete_project"){const U=m.projects.find(K=>K.id===D.projectId);await t.deleteProject?.(D.projectId),Se(),w="overview",me=`已删除项目「${U?.name??D.projectId}」。`,await ct()}else if(D.kind==="delete_building"){const U=m.buildings.find(K=>K.id===D.buildingId);await t.deleteBuilding?.(D.buildingId),Se(),w="overview",me=`已删除楼宇「${U?.name??D.buildingId}」。`,await ct()}else if(D.kind==="delete_floor"){const U=m.floors.find(K=>K.id===D.floorId);await t.deleteFloor?.(D.floorId),Se(),w="building",me=`已删除楼层「${U?.name??D.floorId}」。`,await ct()}else if(D.kind==="clear_floor_plan"){const U=m.floors.find(K=>K.id===D.floorId);U&&await t.upsertFloor?.({id:U.id,buildingId:U.buildingId,kind:U.kind,level:U.level,name:U.name,areaSqm:U.areaSqm,planImageUrl:null}),Se(),me=`已清空「${U?.name??""}」平面底图。`,await ct()}else if(D.kind==="delete_zone"){const U=m.zones.find(K=>K.id===D.zoneId);await t.deleteZone?.(D.zoneId),M===D.zoneId&&(M=null),Se(),me=`已删除功能区「${U?.name??""}」。`,await ct()}else if(D.kind==="delete_doc"){const U=te.find(K=>K.id===D.docId);await t.deleteFloorDoc?.(D.docId),Se(),me=`已移除工程资料「${U?.name??""}」。`,await Ye(),E()}else if(D.kind==="delete_device"){const U=u.find(K=>K.id===D.deviceId);await t.deleteDeploymentDevice?.(D.deviceId),Te===D.deviceId&&(Te=null,Le=!1,ot=!1,qe=null),Se(),me=`已删除设备「${U?.name??""}」（关联分组与灯点已同步清理）。`,await It(),await Ye(),E()}else if(D.kind==="delete_group"){const U=de.find(K=>K.id===D.groupId);await t.deleteDeviceGroup?.(D.groupId),Se(),me=`已删除设备分组「${U?.name??""}」。`,await Ye(),E()}else if(D.kind==="delete_connection"){const U=ue.find(K=>K.id===D.connectionId);await t.deleteConnection?.(D.connectionId),Se(),me=`已删除接入通道「${U?.name??""}」。`,ue=P?await t.listConnections(P).catch(()=>[]):[],E()}else D.kind==="restart_edge"&&(await t.restartEdgeService?.(D.projectId),Se(),me="已下发「重启边缘服务」指令，边缘网关将在 5 秒内平滑重连。",E())}catch(U){Se(),re(U),E()}}function us(){Ga(e,{onToggle:()=>{L=!L,E(),L&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:l=>{_=l,E();const r=e.querySelector("[data-global-space-search]");r&&(r.focus(),r.setSelectionRange(l.length,l.length))},onPick:async l=>{if(x=l,L=!1,me="",Ae="",l.level==="project"){const r=l.projectId!==P;P=l.projectId,h==="project_config"&&r&&(w="overview"),b=m.buildings.find($=>$.projectId===l.projectId)?.id??"",C="",ue=await t.listConnections(P).catch(()=>[]),await It(),b&&(C=xa(b)),ea(),await Ye()}else if(l.level==="building"){const r=m.buildings.find(d=>d.id===l.buildingId);r&&(P=r.projectId,b=r.id,Te=null,Le=!1,g=!1,await It(),C=xa(r.id),ea(),await Ye())}else if(l.level==="floor"){const r=m.floors.find(d=>d.id===l.floorId)?.buildingId!==b;ta(l.floorId),r&&await It(),await Ye()}E()}}),e.querySelectorAll("[data-dep-nav]").forEach(l=>{l.addEventListener("click",async()=>{const r=l.dataset.depNav??"project_config";h=r,r==="project_config"&&(w="overview"),Le=!1,g=!1,ut=!1,Ne=null,Je=!1,bt=null,me="",$e="",Ae="",Fe=null,r==="acceptance"&&await It(),ea(),await Ye(),E()})}),e.querySelector("[data-return-trail]")?.addEventListener("click",async()=>{if(!bt)return;const l=bt.nav;bt=null,h=l,me="",$e="",Ae="",l==="acceptance"&&await It(),await Ye(),E()}),e.querySelector("[data-dismiss-canvas-notice]")?.addEventListener("click",()=>{$e="",E()}),e.querySelector("[data-toggle-l2-more]")?.addEventListener("click",l=>{l.stopPropagation(),Je=!Je,E()}),e.querySelector("[data-batch-fill-area]")?.addEventListener("click",()=>{Je=!1,st=!st,E()}),e.querySelectorAll("[data-batch-area-opt]").forEach(l=>{l.addEventListener("change",()=>{l.dataset.batchAreaOpt==="below"&&(Ve=l.checked),l.dataset.batchAreaOpt==="roof"&&(ie=l.checked),E()})}),e.querySelector("[data-close-batch-area]")?.addEventListener("click",()=>{st=!1,E()}),e.querySelector("[data-apply-batch-area]")?.addEventListener("submit",async l=>{l.preventDefault();const r=l.currentTarget,d=r.dataset.applyBatchArea,$=Number(new FormData(r).get("batchStdArea")??0);if(!Number.isFinite($)||$<=0)return;const A=Ke(d).filter(I=>I.areaSqm?!1:I.kind==="above"?!0:I.kind==="below"?Ve:I.kind==="roof"?ie:!1);if(A.length===0){re("当前勾选范围内没有空缺面积的楼层。"),E();return}try{for(const I of A)await t.upsertFloor?.({id:I.id,buildingId:I.buildingId,kind:I.kind,level:I.level,name:I.name,areaSqm:$});st=!1,le(`已为 ${A.length} 个楼层（${A.map(I=>I.name).slice(0,4).join("、")}${A.length>4?" 等":""}）批量填入面积 ${$} m²。`),await ct()}catch(I){re(I),E()}}),e.querySelectorAll("[data-drill-building]").forEach(l=>{const r=async()=>{const d=l.dataset.drillBuilding;if(!d)return;const $=m.buildings.find(A=>A.id===d);$&&(P=$.projectId,b=$.id,C="",Te=null,Le=!1,g=!1,Je=!1,ne="all",xe="",w="building",await It(),C=xa($.id),ea(),await Ye(),E())};l.addEventListener("click",d=>{d.target?.closest("button, label, input")||r()}),l.addEventListener("keydown",d=>{(d.key==="Enter"||d.key===" ")&&d.target===l&&(d.preventDefault(),r())})}),e.querySelectorAll("[data-proj-drill]").forEach(l=>{l.addEventListener("click",()=>{w=l.dataset.projDrill??"overview",M=null,Je=!1,me="",Ae="",Fe=null,E()})}),e.querySelector("[data-switch-drill-building]")?.addEventListener("change",async l=>{const r=l.currentTarget.value,d=m.buildings.find($=>$.id===r);!r||!d||(P=d.projectId,b=d.id,C="",Te=null,Le=!1,g=!1,Je=!1,ne="all",xe="",await It(),C=xa(d.id),ea(),await Ye(),E())});const D=async l=>{l&&(ta(l),w="floor",await Ye(),E())};e.querySelectorAll("[data-drill-floor]").forEach(l=>{l.addEventListener("click",r=>{if(r.target?.closest("button, label, input, [data-stop-row]"))return;const d=l.dataset.drillFloor;d&&D(d)})}),e.querySelectorAll("[data-drill-floor-btn]").forEach(l=>{l.addEventListener("click",r=>{r.stopPropagation();const d=l.dataset.drillFloorBtn;d&&D(d)})}),e.querySelector("[data-switch-drill-floor]")?.addEventListener("change",l=>{const r=l.currentTarget.value;r&&D(r)}),e.querySelectorAll("[data-floor-list-filter]").forEach(l=>{l.addEventListener("click",()=>{ne=l.dataset.floorListFilter??"all",E()})}),e.querySelector("[data-floor-list-search]")?.addEventListener("input",l=>{xe=l.currentTarget.value,E();const r=e.querySelector("[data-floor-list-search]");r&&(r.focus(),r.setSelectionRange(xe.length,xe.length))}),e.querySelectorAll("[data-floor-detail-tab]").forEach(l=>{l.addEventListener("click",()=>{j=l.dataset.floorDetailTab??"zones",E()})}),e.querySelectorAll("[data-jump-floor-marking]").forEach(l=>{l.addEventListener("click",async r=>{r.stopPropagation();const d=l.dataset.jumpFloorMarking;d&&ta(d),h="device_marking",await Ye(),E()})}),e.querySelector("[data-jump-floor-config]")?.addEventListener("click",async l=>{const r=l.currentTarget.dataset.jumpFloorConfig;r&&ta(r),h="project_config",w=r?"floor":"overview",await Ye(),E()}),e.querySelectorAll("[data-close-modals]").forEach(l=>{l.addEventListener("click",()=>{Se(),E()})}),e.querySelectorAll("[data-modal-scrim]").forEach(l=>{l.addEventListener("click",r=>{r.target===l&&(Se(),E())})}),e.querySelector("[data-confirm-dialog-ok]")?.addEventListener("click",()=>{Be&&ps(Be.action)}),e.querySelectorAll("[data-open-new-proj]").forEach(l=>{l.addEventListener("click",()=>{Se(),Rt=!0,E()})}),e.querySelector("[data-open-edit-proj]")?.addEventListener("click",()=>{Se(),ia=!0,E()}),e.querySelectorAll("[data-open-new-bld]").forEach(l=>{l.addEventListener("click",()=>{Se(),la=!0,E()})}),e.querySelectorAll("[data-edit-building]").forEach(l=>{l.addEventListener("click",r=>{r.stopPropagation(),Je=!1,Se(),ca=l.dataset.editBuilding??null,E()})}),e.querySelector("[data-open-new-floor]")?.addEventListener("click",()=>{Se(),da=!0,E()}),e.querySelector("[data-open-batch-modal]")?.addEventListener("click",()=>{Se(),Dt=!0,E()}),e.querySelectorAll("[data-open-new-dev]").forEach(l=>{l.addEventListener("click",()=>{Se(),ua=!0,E()})}),e.querySelector("[data-open-new-group]")?.addEventListener("click",()=>{Se(),it={mode:"create",track:"mesh_auto",draftName:"",draftType:pn.mesh_auto[0],draftMemberIds:[]},E()}),e.querySelectorAll("[data-edit-group]").forEach(l=>{l.addEventListener("click",()=>{const r=de.find(d=>d.id===l.dataset.editGroup);r&&(Se(),it={mode:"edit",groupId:r.id,track:r.track,draftName:r.name,draftType:r.groupType,draftMemberIds:[...r.deviceIds]},E())})}),e.querySelector("[data-group-draft-name]")?.addEventListener("input",l=>{it&&(it.draftName=l.currentTarget.value)}),e.querySelector("[data-group-draft-type]")?.addEventListener("change",l=>{it&&(it.draftType=l.currentTarget.value)}),e.querySelectorAll("[data-group-draft-member]").forEach(l=>{l.addEventListener("change",()=>{if(!it)return;const r=new Set(it.draftMemberIds);l.checked?r.add(l.value):r.delete(l.value),it.draftMemberIds=Array.from(r),We="",E()})}),e.querySelector("[data-group-modal-track]")?.addEventListener("change",l=>{if(!it)return;const r=l.currentTarget.value??"mesh_auto",d=pn[r],$=d.includes(it.draftType)?it.draftType:d[0],A=new Set((r==="mesh_auto"?u.filter(Gt):u).map(I=>I.id));it={...it,track:r,draftType:$,draftMemberIds:it.draftMemberIds.filter(I=>A.has(I))},E()}),e.querySelector("[data-open-new-conn]")?.addEventListener("click",()=>{Se(),ut=!1,Ne=null,Xt={mode:"create",fromProjectLevel:!0},E()}),e.querySelectorAll("[data-edit-conn]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.editConn;r&&(Se(),Ne=null,Xt={mode:"edit",connectionId:r},E())})}),e.querySelector("[data-open-freeze-modal]")?.addEventListener("click",()=>{Se();const l=b?Ke(b):[];k=l.find(d=>(f.get(d.id)?.length??0)>0)?.id??C??l[0]?.id??"",wt=!0,E()}),e.querySelectorAll("[data-open-freeze-floor]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.openFreezeFloor??"";Se(),k=r||C,wt=!0,E()})}),e.querySelector("[data-freeze-floor-select]")?.addEventListener("change",l=>{k=l.currentTarget.value,E()}),e.querySelector("[data-stage-new-proj-cover]")?.addEventListener("change",async l=>{const r=l.currentTarget.files?.[0];if(r)try{Lt=await fa(r,1400,.82),E()}catch(d){We=$t(d),E()}}),e.querySelector("[data-stage-new-bld-img]")?.addEventListener("change",async l=>{const r=l.currentTarget.files?.[0];if(r)try{Jt=await fa(r,1200,.84),E()}catch(d){We=$t(d),E()}}),e.querySelector("[data-create-project]")?.addEventListener("submit",async l=>{l.preventDefault();const r=new FormData(l.currentTarget),d=String(r.get("pName")??"").trim(),$=String(r.get("pCity")??"").trim(),A=String(r.get("pAddr")??"").trim(),I=String(r.get("pLng")??"").trim(),V=String(r.get("pLat")??"").trim();if(Yt={name:d,city:$,address:A,lng:I,lat:V},!d)return;let De;if(!!I!=!!V){We="经度和纬度需同时填写或同时留空，不可仅填写单边坐标。",E(),e.querySelector('[data-create-project] input[name="pLat"]')?.focus();return}if(I&&V){const Oe=Number(I),ze=Number(V);if(!Number.isFinite(Oe)||!Number.isFinite(ze)||Oe<-180||Oe>180||ze<-90||ze>90){We="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",E(),e.querySelector('[data-create-project] input[name="pLng"]')?.focus();return}De={lng:Oe,lat:ze,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{const Oe=await t.createProject?.({name:d,city:$,address:A,location:De,imageUrl:Lt??void 0});Se(),h="project_config",w="overview",Oe&&(P=Oe.id,b="",C="",x=qt({level:"project",projectId:Oe.id})),me=`已创建项目「${d}」，下一步可添加园区楼宇。`,await ct()}catch(Oe){We=$t(Oe),E()}}),e.querySelector("[data-save-project]")?.addEventListener("submit",async l=>{l.preventDefault();const r=l.currentTarget,d=r.dataset.saveProject??P,$=new FormData(r),A=String($.get("pName")??"").trim(),I=String($.get("pCity")??"").trim(),V=String($.get("pAddr")??"").trim(),De=String($.get("pLng")??"").trim(),Oe=String($.get("pLat")??"").trim();Yt={name:A,city:I,address:V,lng:De,lat:Oe};let ze;if(!!De!=!!Oe){We="经度和纬度需同时填写或同时留空，不可仅填写单边坐标。",E(),e.querySelector('[data-save-project] input[name="pLat"]')?.focus();return}if(De&&Oe){const lt=Number(De),dt=Number(Oe);if(!Number.isFinite(lt)||!Number.isFinite(dt)||lt<-180||lt>180||dt<-90||dt>90){We="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",E(),e.querySelector('[data-save-project] input[name="pLng"]')?.focus();return}ze={lng:lt,lat:dt,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{await t.updateProject?.(d,{name:A,city:I,address:V,location:ze}),Se(),me=`已保存项目「${A||"当前项目"}」信息。`,await ct()}catch(lt){We=$t(lt),E()}}),e.querySelector("[data-upload-proj]")?.addEventListener("change",async l=>{const r=l.currentTarget,d=r.dataset.uploadProj,$=r.files?.[0];if(!(!d||!$))try{const A=await fa($,1400,.82);await t.updateProject?.(d,{imageUrl:A}),me=`已更新项目封面图（${$.name}）。`,await ct()}catch(A){We=$t(A),E()}}),e.querySelector("[data-delete-proj]")?.addEventListener("click",l=>{const r=l.currentTarget.dataset.deleteProj,d=m.projects.find($=>$.id===r);!r||!d||(Se(),Be={title:`删除项目「${d.name}」`,body:"将同时移除该项目下的全部楼宇、楼层与功能区配置，此操作不可撤销。确认继续吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_project",projectId:r}},E())}),e.querySelector("[data-create-bld]")?.addEventListener("submit",async l=>{l.preventDefault();const r=l.currentTarget,d=r.dataset.createBld??P,$=new FormData(r),A=String($.get("bName")??"").trim(),I=String($.get("bArea")??"").trim(),V=String($.get("bStdFloorArea")??"").trim(),De=String($.get("bAbove")??"12"),Oe=String($.get("bBelow")??"0"),ze=Math.max(1,Number(De)),lt=Math.max(0,Number(Oe)),dt=!!$.get("bRoof"),xt=!!$.get("bAutoFloors");if(ra={name:A,area:I,stdFloorArea:V,above:De,below:Oe,hasRoof:dt,autoFloors:xt},!A)return;const aa=V&&Number(V)>0?Number(V):null;try{const _t=await t.upsertBuilding?.({projectId:d,name:A,aboveFloors:ze,belowFloors:lt,hasRoof:dt,areaSqm:I?Number(I):null,imageUrl:Jt??void 0});Se();let ht=0;if(_t&&(b=_t.id,C="",xt)){for(let yt=1;yt<=ze;yt+=1)await t.upsertFloor?.({buildingId:_t.id,kind:"above",level:yt,name:`${yt}F`,areaSqm:aa}),ht+=1;for(let yt=1;yt<=lt;yt+=1)await t.upsertFloor?.({buildingId:_t.id,kind:"below",level:-yt,name:`B${yt}`,areaSqm:aa}),ht+=1;dt&&(await t.upsertFloor?.({buildingId:_t.id,kind:"roof",level:99,name:"RF"}),ht+=1),w="building"}me=xt?`已创建楼宇「${A}」并自动生成 ${ht} 个楼层${aa?`（已预填标准层 ${aa} m²）`:""}，现可直接批量导入平面底图。`:`已创建楼宇「${A}」。`,await ct()}catch(_t){We=$t(_t),E()}}),e.querySelector("[data-save-building]")?.addEventListener("submit",async l=>{l.preventDefault();const r=l.currentTarget,d=r.dataset.saveBuilding,$=m.buildings.find(lt=>lt.id===d);if(!$)return;const A=new FormData(r),I=String(A.get("bName")??"").trim()||$.name,V=String(A.get("bArea")??"").trim(),De=Math.max(1,Number(A.get("bAbove")??$.aboveFloors)),Oe=Math.max(0,Number(A.get("bBelow")??$.belowFloors)),ze=!!A.get("bRoof");try{await t.upsertBuilding?.({id:d,projectId:$.projectId,name:I,aboveFloors:De,belowFloors:Oe,hasRoof:ze,areaSqm:V?Number(V):null}),Se(),me=`已保存楼宇「${I}」参数。`,await ct()}catch(lt){re(lt),E()}}),e.querySelector("[data-delete-building]")?.addEventListener("click",l=>{const r=l.currentTarget.dataset.deleteBuilding,d=m.buildings.find($=>$.id===r);!r||!d||(Se(),Be={title:`删除楼宇「${d.name}」`,body:"将同步删除该楼宇下的全部楼层底图与功能区配置，此操作不可撤销。确认继续吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_building",buildingId:r}},E())}),e.querySelector("[data-upload-bld]")?.addEventListener("change",async l=>{const r=l.currentTarget,d=r.dataset.uploadBld,$=r.files?.[0],A=m.buildings.find(I=>I.id===d);if(!(!d||!$||!A))try{const I=await fa($,1200,.84);await t.upsertBuilding?.({id:A.id,projectId:A.projectId,name:A.name,aboveFloors:A.aboveFloors,belowFloors:A.belowFloors,hasRoof:A.hasRoof,areaSqm:A.areaSqm,imageUrl:I}),me=`已更新「${A.name}」外观图（${$.name}）。`,await ct()}catch(I){We=$t(I),E()}}),e.querySelectorAll("[data-fill-missing-floors]").forEach(l=>{l.addEventListener("click",async r=>{r.stopPropagation(),Je=!1;const d=l.dataset.fillMissingFloors;if(d)try{const $=await rs(d);le($>0?`已自动补齐 ${$} 个楼层。`:"当前楼宇楼层已完整。"),await ct()}catch($){re($),E()}})}),e.querySelector("[data-create-floor]")?.addEventListener("submit",async l=>{l.preventDefault();const r=l.currentTarget,d=r.dataset.createFloor,$=new FormData(r),A=String($.get("fName")??"").trim().toUpperCase(),I=String($.get("fArea")??"").trim();if(pa={name:A,area:I},!A)return;const V=zt(A)??A;if(Ke(d).some(dt=>(zt(dt.name)??dt.name.toUpperCase())===V)){We=`楼层「${A}」已存在，请使用其他名称。`,E(),e.querySelector('[data-create-floor] input[name="fName"]')?.focus();return}const Oe=qa(A),ze=Oe>=999?"roof":Oe<0?"below":"above",lt=Oe>=999?99:Oe||1;try{const dt=await t.upsertFloor?.({buildingId:d,kind:ze,level:lt,name:A,areaSqm:I?Number(I):null});Se(),dt&&(C=dt.id),me=`已新增楼层「${A}」，可继续添加楼层或点击行内「配置」进入单层底图工作台。`,await ct()}catch(dt){We=$t(dt),E()}}),e.querySelector("[data-save-floor]")?.addEventListener("submit",async l=>{l.preventDefault();const r=l.currentTarget,d=r.dataset.saveFloor,$=m.floors.find(xt=>xt.id===d);if(!$)return;const A=new FormData(r),I=String(A.get("fName")??"").trim()||$.name,V=String(A.get("fArea")??"").trim(),De=zt(I)??I.toUpperCase();if(Ke($.buildingId).some(xt=>xt.id!==$.id&&(zt(xt.name)??xt.name.toUpperCase())===De)){Ae=`楼层「${I}」已存在，请避免重复命名。`,E();return}const ze=qa(I),lt=ze>=999?"roof":ze<0?"below":"above",dt=ze>=999?99:ze||$.level;try{await t.upsertFloor?.({id:$.id,buildingId:$.buildingId,kind:lt,level:dt,name:I,areaSqm:V?Number(V):null}),me=`已保存楼层「${I}」属性。`,await ct()}catch(xt){re(xt),E()}}),e.querySelector("[data-delete-floor]")?.addEventListener("click",l=>{const r=l.currentTarget.dataset.deleteFloor,d=m.floors.find($=>$.id===r);!r||!d||(Se(),Be={title:`删除楼层「${d.name}」`,body:"将同时移除本层的平面底图与功能区划分，此操作不可撤销。确认继续吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_floor",floorId:r}},E())});async function U(l,r){const d=m.floors.find($=>$.id===l);if(d)try{const $=await fa(r,1800,.84);await t.upsertFloor?.({id:d.id,buildingId:d.buildingId,kind:d.kind,level:d.level,name:d.name,areaSqm:d.areaSqm,planImageUrl:$}),gt?.floorId===d.id&&(gt=null),le(`已更新「${d.name}」平面底图（${r.name}）。`),await ct()}catch($){re($),E()}}e.querySelectorAll("[data-upload-floor]").forEach(l=>{l.addEventListener("change",()=>{const r=l.dataset.uploadFloor,d=l.files?.[0];r&&d&&U(r,d)})});const K=e.querySelector("[data-single-floor-drop]");K&&s.scope.canEditDeployment&&o.spatial&&(K.addEventListener("dragover",l=>{l.preventDefault(),K.classList.add("is-drop-active")}),K.addEventListener("dragleave",()=>{K.classList.remove("is-drop-active")}),K.addEventListener("drop",l=>{l.preventDefault(),K.classList.remove("is-drop-active");const r=K.dataset.singleFloorDrop,d=Array.from(l.dataTransfer?.files??[]).find($=>$.type.startsWith("image/"));r&&d&&U(r,d)})),e.querySelector("[data-clear-floor-plan]")?.addEventListener("click",l=>{const r=l.currentTarget.dataset.clearFloorPlan,d=m.floors.find($=>$.id===r);!r||!d||(Se(),Be={title:`清空「${d.name}」平面底图`,body:"清空后本层将回到无图状态（不会删除已绑定的设备物理安装记录）。确认清空吗？",confirmLabel:"确认清空",danger:!0,action:{kind:"clear_floor_plan",floorId:r}},E())}),e.querySelectorAll("[data-open-lightbox]").forEach(l=>{l.addEventListener("click",r=>{r.stopPropagation();const d=l.dataset.lbTitle??"平面底图预览",$=l.dataset.lbSrc??"";$&&(Ze={title:d,imageUrl:$},E())})}),e.querySelector("[data-close-lightbox]")?.addEventListener("click",()=>{Ze=null,E()}),e.querySelector("[data-lightbox-scrim]")?.addEventListener("click",l=>{l.target===l.currentTarget&&(Ze=null,E())});function se(l,r){if(!l||r.length===0)return;const d=Ke(l),$=new Map;d.forEach(A=>$.set(zt(A.name)??A.name.toUpperCase(),A)),Ft=r.map((A,I)=>{const V=zt(A.name),De=V?$.get(V):void 0;return{id:`bu-${Date.now().toString(36)}-${I}`,file:A,matchedFloorId:De?.id??null}}),Dt=!0,E()}e.querySelector("[data-batch-upload-floors]")?.addEventListener("change",l=>{const r=l.currentTarget;se(r.dataset.batchUploadFloors??"",Array.from(r.files??[]))});const be=e.querySelector("[data-batch-dropzone]");be&&s.scope.canEditDeployment&&o.spatial&&(be.addEventListener("dragover",l=>{l.preventDefault(),Qt||(Qt=!0,be.style.borderColor="var(--pacom-accent-solid)",be.style.background="var(--pacom-accent-soft)")}),be.addEventListener("dragleave",()=>{Qt=!1,be.style.borderColor="",be.style.background=""}),be.addEventListener("drop",l=>{l.preventDefault(),Qt=!1;const r=Array.from(l.dataTransfer?.files??[]).filter(d=>d.type.startsWith("image/"));se(be.dataset.batchDropzone??"",r)})),e.querySelectorAll("[data-batch-override-floor]").forEach(l=>{l.addEventListener("change",()=>{const r=Ft.find(d=>d.id===l.dataset.batchOverrideFloor);r&&(r.matchedFloorId=l.value||null,E())})}),e.querySelector("[data-cancel-batch-upload]")?.addEventListener("click",()=>{Ft=[],E()}),e.querySelector("[data-confirm-batch-upload]")?.addEventListener("click",async()=>{const l=Ft.filter($=>$.matchedFloorId),r=Ft.length-l.length;if(l.length===0)return;const d=new Set;for(const $ of l){if(d.has($.matchedFloorId)){We="存在多张图片指向同一目标楼层，请调整目标楼层后再导入。",E();return}d.add($.matchedFloorId)}try{let $=0;for(const A of l){const I=m.floors.find(De=>De.id===A.matchedFloorId);if(!I)continue;const V=await fa(A.file,1800,.84);await t.upsertFloor?.({id:I.id,buildingId:I.buildingId,kind:I.kind,level:I.level,name:I.name,areaSqm:I.areaSqm,planImageUrl:V}),gt?.floorId===I.id&&(gt=null),$+=1}Ft=[],Se(),me=`已批量导入 ${$} 个唯一楼层平面底图${r>0?`（跳过 ${r} 张未分配文件）`:""}。`,await ct()}catch($){We=$t($),E()}}),e.querySelectorAll("[data-apply-zone-tpl]").forEach(l=>{l.addEventListener("click",async()=>{const r=es.find($=>$.key===l.dataset.applyZoneTpl),d=m.floors.find($=>$.id===l.dataset.tplFloor);if(!(!r||!d))try{const $=m.zones.filter(I=>I.floorId===d.id).length,A=$+r.items.length;for(let I=0;I<r.items.length;I+=1){const V=r.items[I],De=await t.upsertZone?.({floorId:d.id,name:`${d.name} ${V.suffix}`,category:V.category});De&&(z[De.id]=un($+I,A,De.name))}me=`已按「${r.label}」模板为 ${d.name} 创建 ${r.items.length} 个功能区。`,await ct()}catch($){re($),E()}})}),e.querySelector("[data-attach-doc]")?.addEventListener("change",async l=>{const r=l.currentTarget,d=r.dataset.attachDoc,$=r.files?.[0],A=m.floors.find(V=>V.id===d);if(!d||!$||!A||!t.attachFloorDoc)return;const I=$.size>=1024*1024?`${($.size/(1024*1024)).toFixed(1)} MB`:`${Math.max(1,Math.round($.size/1024))} KB`;try{const V=$.size<=4194304?await as($).catch(()=>{}):void 0;await t.attachFloorDoc({floorId:d,name:$.name,category:js($.name),boundScope:`${A.name} ｜ 工程资料`,updatedAt:new Date().toISOString().slice(0,10),size:I,fileUrl:V,mimeType:$.type||void 0}),me=`已为 ${A.name} 关联文档「${$.name}」。`,await Ye(),E()}catch(V){re(V),E()}}),e.querySelectorAll("[data-doc-category]").forEach(l=>{l.addEventListener("change",async()=>{const r=l.dataset.docCategory;if(!(!r||!t.updateFloorDocCategory))try{await t.updateFloorDocCategory(r,l.value),me=`已更新资料分类为「${l.value}」。`,await Ye(),E()}catch(d){re(d),E()}})}),e.querySelectorAll("[data-del-doc]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.delDoc,d=te.find($=>$.id===r);!r||!d||(Se(),Be={title:`移除工程资料「${d.name}」`,body:"移除后将不再在此楼层的工程资料列表中显示，确认移除吗？",confirmLabel:"确认移除",danger:!0,action:{kind:"delete_doc",docId:r}},E())})}),e.querySelectorAll("[data-preview-doc]").forEach(l=>{l.addEventListener("click",()=>{const r=te.find(d=>d.id===l.dataset.previewDoc);if(r){if(r.fileUrl&&(r.mimeType?.startsWith("image/")||/\.(png|jpe?g|webp|gif)$/i.test(r.name))){Ze={title:r.name,imageUrl:r.fileUrl},E();return}if(r.fileUrl){const d=document.createElement("a");d.href=r.fileUrl,d.download=r.name,d.target="_blank",d.rel="noopener noreferrer",d.click(),me=`已打开 / 下载工程附件「${r.name}」。`,E();return}me=`「${r.name}」（${r.category} ｜ ${r.size} ｜ 更新于 ${r.updatedAt}）为演示示例目录项，上传本地文件后可直接预览或下载。`,E()}})}),e.querySelector("[data-add-zone]")?.addEventListener("submit",async l=>{l.preventDefault();const r=l.currentTarget.dataset.addZone,d=new FormData(l.currentTarget),$=String(d.get("zoneName")??"").trim(),A=String(d.get("zoneCat")??"office");if($)try{const I=m.zones.filter(De=>De.floorId===r).length,V=await t.upsertZone?.({floorId:r,name:$,category:A});V&&(z[V.id]=un(I,I+1,V.name)),me=`已添加功能区「${$}」。`,await ct()}catch(I){re(I),E()}}),e.querySelectorAll("[data-edit-zone]").forEach(l=>{l.addEventListener("click",()=>{M=l.dataset.editZone??null,E()})}),e.querySelector("[data-cancel-edit-zone]")?.addEventListener("click",()=>{M=null,E()}),e.querySelector("[data-save-edit-zone]")?.addEventListener("submit",async l=>{l.preventDefault();const r=l.currentTarget,d=new FormData(r),$=String(d.get("zName")??"").trim(),A=String(d.get("zCat")??"office");if($)try{await t.upsertZone?.({id:r.dataset.saveEditZone,floorId:r.dataset.zoneFloor,name:$,category:A}),M=null,me=`已更新功能区「${$}」。`,await ct()}catch(I){re(I),E()}}),e.querySelectorAll("[data-del-zone]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.delZone,d=m.zones.find($=>$.id===r);!r||!d||(Se(),Be={title:`删除功能区「${d.name}」`,body:"删除后该功能区将从本层移除，原归属设备的逻辑分区将置为未分配。确认删除吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_zone",zoneId:r}},E())})}),e.querySelectorAll("[data-open-copy-zones]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.openCopyZones??null;Se(),jt=r,kt=new Set,E()})}),e.querySelectorAll("[data-copy-preset]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.copyPreset,d=Ke(b).filter($=>$.id!==jt);r==="empty"?kt=new Set(d.filter($=>$.kind==="above"&&m.zones.filter(A=>A.floorId===$.id).length===0).map($=>$.id)):r==="above"?kt=new Set(d.filter($=>$.kind==="above").map($=>$.id)):kt.clear(),E()})}),e.querySelectorAll("[data-copy-target-floor]").forEach(l=>{l.addEventListener("change",()=>{const r=l.dataset.copyTargetFloor;r&&(l.checked?kt.add(r):kt.delete(r),E())})}),e.querySelector("[data-confirm-copy-zones]")?.addEventListener("click",async l=>{const r=l.currentTarget.dataset.confirmCopyZones,d=Array.from(kt);if(!(!r||d.length===0))try{const $=await t.copyZonesToFloors?.(r,d)??0;Se(),kt.clear(),me=`已将当前层功能区复用至 ${d.length} 个目标楼层（共新增 ${$} 个功能区）。`,await ct()}catch($){re($),E()}}),e.querySelectorAll("[data-scrubber-floor]").forEach(l=>{l.addEventListener("click",async()=>{const r=l.dataset.scrubberFloor;r&&(ta(r),await Ye(),E())})});const we=e.querySelector("[data-dep-canvas-search]");we?.addEventListener("focus",()=>{rt||(rt=!0,E(),e.querySelector("[data-dep-canvas-search]")?.focus())}),we?.addEventListener("input",l=>{fe=l.currentTarget.value,rt=!0,E();const r=e.querySelector("[data-dep-canvas-search]");r&&(r.focus(),r.setSelectionRange(fe.length,fe.length))}),e.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{rt=!rt,E()}),e.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{rt=!1,E()}),e.querySelectorAll("[data-dev-filter]").forEach(l=>{l.addEventListener("click",()=>{et=l.dataset.devFilter??"all",E()})}),e.querySelectorAll("[data-brush]").forEach(l=>{l.addEventListener("click",()=>{oe=l.dataset.brush??"device",E()})}),e.querySelectorAll("[data-dep-zoom]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.depZoom;r==="in"?q=Math.min(2.6,Number((q+.2).toFixed(2))):r==="out"?q=Math.max(.6,Number((q-.2).toFixed(2))):(q=1,pe=0,Ee=0),ja()})});const Pe=e.querySelector('[data-role="dep-stage"]'),nt=e.querySelector('[data-role="deploy-plan"] .pacom-plan-img');if(Pe&&nt){const l=()=>{const r=nt.naturalWidth,d=nt.naturalHeight;if(!r||!d)return;const $=Pe.clientWidth-140,A=Pe.clientHeight-160;if($>320&&A>220&&r<640){const I=Math.min($/r,A/d,2.2);I>1.05&&(nt.style.width=`${Math.round(r*I)}px`,nt.style.height="auto")}};nt.complete?l():nt.addEventListener("load",l,{once:!0})}if(Pe&&!g){let l=!1,r=0,d=0,$=0,A=0;Pe.addEventListener("pointerdown",V=>{V.target?.closest("button, input, select, .pacom-hud-search-wrap, .dep-canvas-mode-pill, .dep-canvas-toast")||(l=!0,r=V.clientX,d=V.clientY,$=pe,A=Ee,Pe.classList.add("is-panning"),Pe.setPointerCapture?.(V.pointerId))}),Pe.addEventListener("pointermove",V=>{l&&(pe=$+(V.clientX-r),Ee=A+(V.clientY-d),ja())});const I=()=>{l&&(l=!1,Pe.classList.remove("is-panning"))};Pe.addEventListener("pointerup",I),Pe.addEventListener("pointercancel",I),Pe.addEventListener("wheel",V=>{V.preventDefault();const De=V.deltaY<0?.12:-.12;q=Math.max(.6,Math.min(2.6,Number((q+De).toFixed(2)))),ja()},{passive:!1}),Pe.addEventListener("dblclick",V=>{V.target?.closest("button")||(q=1,pe=0,Ee=0,ja())})}e.querySelectorAll("[data-drag-pin]").forEach(l=>{l.addEventListener("pointerdown",r=>{if(r.button!==0||g||oe!=="device"||!s.scope.canEditDeployment)return;const d=e.querySelector('[data-role="deploy-plan"]');if(!d)return;const $=l.dataset.dragPin,A=l.style.left,I=l.style.top,V=r.clientX,De=r.clientY;let Oe=!1,ze=.5,lt=.5;const dt=ht=>{const yt=Math.hypot(ht.clientX-V,ht.clientY-De);if(!Oe&&yt<5)return;Oe=!0,l.classList.add("is-dragging");const ma=d.getBoundingClientRect();ze=Math.max(.02,Math.min(.98,(ht.clientX-ma.left)/ma.width)),lt=Math.max(.02,Math.min(.98,(ht.clientY-ma.top)/ma.height)),l.style.left=`${(ze*100).toFixed(2)}%`,l.style.top=`${(lt*100).toFixed(2)}%`},xt=()=>{window.removeEventListener("pointermove",dt),window.removeEventListener("pointerup",_t),window.removeEventListener("pointercancel",aa),l.classList.remove("is-dragging")},aa=()=>{xt(),l.style.left=A,l.style.top=I},_t=async()=>{if(xt(),!Oe)return;B=!0,window.setTimeout(()=>{B=!1},120);const ht=u.find(yt=>yt.id===$);if(ht){if(ht.planPoint&&Math.abs(ht.planPoint.x-ze)<.001&&Math.abs(ht.planPoint.y-lt)<.001){l.style.left=A,l.style.top=I;return}try{const yt=m.floors.find(ma=>ma.id===C)?.plan?.planVersion??1;await t.updateDevicePlanPoint({deviceId:ht.id,floorId:C,planVersion:yt,x:ze,y:lt,expectedVersion:ht.version}),le(`已拖拽微调「${ht.name}」坐标（硬件绑定与物理复核保持不变）。`),await Ye(),E()}catch(yt){l.style.left=A,l.style.top=I,re(yt),E()}}};window.addEventListener("pointermove",dt),window.addEventListener("pointerup",_t),window.addEventListener("pointercancel",aa)})}),e.querySelector("[data-list-search]")?.addEventListener("input",l=>{at=l.currentTarget.value,E();const r=e.querySelector("[data-list-search]");r&&(r.focus(),r.setSelectionRange(at.length,at.length))}),e.querySelector("[data-list-filter]")?.addEventListener("change",l=>{Qe=l.currentTarget.value??"all",E()}),e.querySelector("[data-list-cat-filter]")?.addEventListener("change",l=>{Xe=l.currentTarget.value??"all",E()}),e.querySelectorAll("[data-refresh-dep]").forEach(l=>{l.addEventListener("click",()=>void ct())}),e.querySelector("[data-create-dev]")?.addEventListener("submit",async l=>{if(l.preventDefault(),!t.createDeploymentDevice)return;const r=new FormData(l.currentTarget),d=String(r.get("devName")??"").trim(),$=String(r.get("devPreset")??"sensor"),A=String(r.get("devZone")??"")||null,I=cn.find(V=>V.key===$)??cn[0];if(!(!d||!C))try{const V=await t.createDeploymentDevice({projectId:P,buildingId:b,floorId:C,logicalZoneId:A,name:d,category:I.category,defaultProxy:I.defaultProxy,defaultRelay:I.defaultRelay});Se(),Te=V.id,Le=!0,_e="binding",ot=!1;const De=!!m.floors.find(Oe=>Oe.id===C)?.plan;g=h==="device_marking"&&De,!De&&h==="device_marking"&&(rt=!0),le(g?`已新增「${d}」（待入网 ｜ 未标记），请点击平面图落点。`:`已新增「${d}」（待入网 ｜ 未标记，${I.hint}）。`),await Ye(),Re(u.find(Oe=>Oe.id===V.id)),E()}catch(V){We=$t(V),E()}}),e.querySelectorAll("[data-pick-dev]").forEach(l=>{l.addEventListener("click",r=>{if(r.stopPropagation(),B)return;Te=l.dataset.pickDev??null,Le=!0,_e="binding",ot=!1;const d=u.find($=>$.id===Te);Re(d),E()})}),e.querySelectorAll("[data-open-dev-drawer]").forEach(l=>{l.addEventListener("click",r=>{if(r.target?.closest("button"))return;Te=l.dataset.openDevDrawer??null,Le=!0,_e="binding",ot=!1;const d=u.find($=>$.id===Te);Re(d),E()})}),e.querySelectorAll("[data-open-dev-params]").forEach(l=>{l.addEventListener("click",r=>{r.stopPropagation(),Te=l.dataset.openDevParams??null,Le=!0,_e="params",ot=!1;const d=u.find($=>$.id===Te);Re(d),E()})}),e.querySelectorAll("[data-quick-verify-dev]").forEach(l=>{l.addEventListener("click",async r=>{r.stopPropagation();const d=u.find($=>$.id===l.dataset.quickVerifyDev);if(!(!d||!d.hardwareBinding))try{await t.updateDeviceHardwareBinding({deviceId:d.id,gatewayId:d.hardwareBinding.gatewayId,protocol:d.hardwareBinding.protocol,networkAddress:d.hardwareBinding.networkAddress,portOrChannel:d.hardwareBinding.portOrChannel,physicalInstalled:!0,expectedVersion:d.version}),me=`已完成「${d.name}」现场物理安装一键复核。`,await Ye(),Te===d.id&&Re(u.find($=>$.id===d.id)),E()}catch($){re($),E()}})}),e.querySelectorAll("[data-toggle-edit-dev-meta]").forEach(l=>{l.addEventListener("click",()=>{ot=!ot,E()})}),e.querySelector("[data-save-dev-meta]")?.addEventListener("submit",async l=>{if(l.preventDefault(),!t.updateDeploymentDevice)return;const r=l.currentTarget,d=r.dataset.saveDevMeta,$=new FormData(r),A=String($.get("editDevName")??"").trim(),I=String($.get("editDevZone")??"")||null;if(A)try{await t.updateDeploymentDevice(d,{name:A,logicalZoneId:I}),ot=!1,me=`已更新设备基础信息「${A}」。`,await Ye(),E()}catch(V){re(V),E()}}),e.querySelector("[data-del-dev]")?.addEventListener("click",l=>{const r=l.currentTarget.dataset.delDev,d=u.find($=>$.id===r);!r||!d||(Se(),Be={title:`删除设备「${d.name}」`,body:"将同步移除该设备的平面坐标、硬件绑定、关联灯点及分组成员引用，此操作不可撤销。确认删除吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_device",deviceId:r}},E())}),e.querySelector("[data-open-plan-swap-review]")?.addEventListener("click",l=>{const r=l.currentTarget.dataset.openPlanSwapReview??C;Se(),he=r,E()}),e.querySelector("[data-clear-plan-alert]")?.addEventListener("click",async l=>{const r=l.currentTarget.dataset.clearPlanAlert;if(!(!r||!t.clearPlanChangeAlert))try{await t.clearPlanChangeAlert(r),delete ge[r],Se(),le("已确认换图后的设备点位无误，请前往「交付验收」重新执行全层自检后方可冻结新版本。"),E()}catch(d){re(d),E()}}),e.querySelectorAll("[data-drawer-tab]").forEach(l=>{l.addEventListener("click",()=>{_e=l.dataset.drawerTab??"binding",E()})}),e.querySelector("[data-close-sel]")?.addEventListener("click",()=>{Le=!1,g=!1,ot=!1,E()}),e.querySelectorAll("[data-toggle-place]").forEach(l=>{l.addEventListener("click",()=>{h!=="device_marking"?(h="device_marking",g=!0):g=!g,E()})}),e.querySelectorAll("[data-binding-field]").forEach(l=>{const r=()=>{const d=u.find(A=>A.id===Te);if(!d||((!qe||qe.deviceId!==d.id)&&Re(d),!qe))return;const $=l.dataset.bindingField;$==="protocol"?qe.protocol=l.value:$==="gatewayId"?qe.gatewayId=l.value:$==="networkAddress"?qe.networkAddress=l.value:$==="portOrChannel"&&(qe.portOrChannel=l.value)};l.addEventListener("input",r),l.addEventListener("change",r)}),e.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{const l=u.find(r=>r.id===Te);l&&((!qe||qe.deviceId!==l.id)&&Re(l),qe&&(qe.physicalInstalled=!qe.physicalInstalled),E())}),e.querySelectorAll("[data-ping-dev]").forEach(l=>{l.addEventListener("click",r=>{r.stopPropagation();const d=u.find($=>$.id===l.dataset.pingDev);d&&(le(`已向「${d.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`),E())})}),e.querySelector("[data-add-light-marker]")?.addEventListener("click",async l=>{if(!t.addLightMarker)return;const r=l.currentTarget.dataset.addLightMarker,d=T.filter($=>$.deviceId===r).length+1;try{await t.addLightMarker({deviceId:r,floorId:C,channel:`回路 ${d}`,label:`照明点位 ${d}`,x:Math.min(.86,.35+d*.1),y:.42}),oe="light_marker",le(`已新增「回路 ${d}」可视化灯点。`),await Ye(),E()}catch($){re($),E()}}),e.querySelectorAll("[data-del-light-marker]").forEach(l=>{l.addEventListener("click",async()=>{if(!t.deleteLightMarker)return;const r=l.dataset.delLightMarker;if(r)try{await t.deleteLightMarker(r),await Ye(),E()}catch(d){re(d),E()}})}),e.querySelectorAll("[data-toggle-mesh-role]").forEach(l=>{l.addEventListener("click",async()=>{if(!t.updateMeshRole)return;const r=l.dataset.meshDev,d=l.dataset.toggleMeshRole,$=O[r]??{proxy:!1,relay:!1,meshUuid:ts(C)};try{await t.updateMeshRole(r,C,{[d]:!$[d]}),gt?.floorId===C&&(gt=null),le(`已更新节点 ${d.toUpperCase()} 状态，请前往「设备网络」重新同步边缘。`),await Ye(),E()}catch(A){re(A),E()}})}),e.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async l=>{if(B)return;const r=u.find(I=>I.id===Te),d=l.currentTarget.getBoundingClientRect(),$=Math.max(.02,Math.min(.98,(l.clientX-d.left)/d.width)),A=Math.max(.02,Math.min(.98,(l.clientY-d.top)/d.height));if(g&&r){try{const I=m.floors.find(V=>V.id===C)?.plan?.planVersion??1;await t.updateDevicePlanPoint({deviceId:r.id,floorId:C,planVersion:I,x:$,y:A,expectedVersion:r.version}),g=!1,le(`已更新「${r.name}」图上坐标（硬件绑定与物理复核保持不变）。`),await Ye(),E()}catch(I){re(I),E()}return}if(oe==="light_marker"&&r?.category==="lighting"&&s.scope.canEditDeployment&&t.addLightMarker){const I=T.filter(V=>V.deviceId===r.id).length+1;try{await t.addLightMarker({deviceId:r.id,floorId:C,channel:`回路 ${I}`,label:`灯点 ${I}`,x:Number($.toFixed(4)),y:Number(A.toFixed(4))}),le(`已为「${r.name}」布置「回路 ${I}」可视化灯点。`),await Ye(),E()}catch(V){re(V),E()}}}),e.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async l=>{l.preventDefault();const r=u.find(V=>V.id===Te);if(!r)return;const d=new FormData(l.currentTarget),$=String(d.get("gatewayId")??"").trim(),A=String(d.get("networkAddress")??"").trim(),I=String(d.get("portOrChannel")??"").trim();if(r.category!=="gateway"&&!$){Ae="请先为本层登记并选择所属上游网关，再保存硬件绑定。",E();return}if(!A){Ae="请填写设备网络地址或通信主题后再保存硬件绑定。",E();return}try{await t.updateDeviceHardwareBinding({deviceId:r.id,gatewayId:r.category==="gateway"?r.id:$,protocol:String(d.get("protocol")),networkAddress:A,portOrChannel:I,physicalInstalled:qe?.deviceId===r.id?qe.physicalInstalled:r.physicalInstalled,expectedVersion:r.version}),Ae="",gt?.floorId===C&&(gt=null),le(`已保存「${r.name}」硬件绑定与物理复核状态。`),await Ye(),Re(u.find(V=>V.id===r.id)),E()}catch(V){re(V),E()}}),e.querySelector("[data-save-dev-params]")?.addEventListener("submit",async l=>{if(l.preventDefault(),!t.saveDeviceParams)return;const r=l.currentTarget,d=r.dataset.saveDevParams,$=r.dataset.devCat??"sensor",A=new FormData(r),I=ae.get(d)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450,coolMinC:22,heatMaxC:26,unoccupiedDelayMin:20,minCycleMin:5,heartbeatSec:30,offlineHoldMin:120,cacheFlushSec:60,pollSec:15,ctRatio:1,demandWindowMin:15},V={...I};$==="hvac"?(V.coolMinC=Number(A.get("coolMinC")??I.coolMinC??22),V.heatMaxC=Number(A.get("heatMaxC")??I.heatMaxC??26),V.unoccupiedDelayMin=Number(A.get("unoccupiedDelayMin")??I.unoccupiedDelayMin??20),V.minCycleMin=Number(A.get("minCycleMin")??I.minCycleMin??5)):$==="gateway"?(V.heartbeatSec=Number(A.get("heartbeatSec")??I.heartbeatSec??30),V.offlineHoldMin=Number(A.get("offlineHoldMin")??I.offlineHoldMin??120),V.cacheFlushSec=Number(A.get("cacheFlushSec")??I.cacheFlushSec??60)):$==="meter"?(V.pollSec=Number(A.get("pollSec")??I.pollSec??15),V.ctRatio=Number(A.get("ctRatio")??I.ctRatio??1),V.demandWindowMin=Number(A.get("demandWindowMin")??I.demandWindowMin??15)):(V.offDelayMin=Number(A.get("offDelayMin")??I.offDelayMin),V.restoreMin=Number(A.get("restoreMin")??I.restoreMin),V.luxOn=Number(A.get("luxOn")??I.luxOn),V.luxOff=Number(A.get("luxOff")??I.luxOff));try{await t.saveDeviceParams(d,C,V),gt?.floorId===C&&(gt=null),le("已保存设备自治参数；原自检凭证已自动失效，请前往「设备网络」重新同步并复检后方可冻结。"),await Ye(),E()}catch(De){re(De),E()}}),e.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const l=u.find(r=>r.id===Te);l&&gn(l)}),e.querySelectorAll("[data-ftt-dev]").forEach(l=>{l.addEventListener("click",r=>{r.stopPropagation();const d=u.find($=>$.id===l.dataset.fttDev);d&&gn(d)})}),e.querySelectorAll("[data-batch-ftt]").forEach(l=>{l.addEventListener("click",()=>void bn(C))}),e.querySelectorAll("[data-floor-ftt]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.floorFtt;r&&bn(r)})}),e.querySelector("[data-dismiss-ftt]")?.addEventListener("click",()=>{gt=null,E()}),e.querySelectorAll("[data-export-inv]").forEach(l=>{l.addEventListener("click",()=>ls())}),e.querySelector("[data-group-select-ls]")?.addEventListener("click",()=>{if(!it)return;const l=u.filter(d=>Gt(d)&&(d.category==="lighting"||d.category==="sensor")).map(d=>d.id),r=new Set([...it.draftMemberIds,...l]);it.draftMemberIds=Array.from(r),We="",E()}),e.querySelector("[data-save-group]")?.addEventListener("submit",async l=>{if(l.preventDefault(),!t.upsertDeviceGroup)return;const r=l.currentTarget,d=r.dataset.saveGroup||void 0,$=new FormData(r),A=String($.get("gName")??"").trim(),I=$.get("gTrack")??"mesh_auto",V=String($.get("gType")??"灯光联动组"),De=Array.from(new Set($.getAll("gMemberIds").map(ze=>String(ze)).filter(Boolean)));if(!A)return;const Oe=De.map(ze=>u.find(lt=>lt.id===ze)).filter(ze=>!!(ze&&ze.category!=="gateway"));if(I==="mesh_auto"&&V.includes("灯")&&!Oe.some(ze=>ze.category==="lighting")){We="端侧灯光联动组至少需勾选 1 台照明执行设备（驱动器 / 开关面板），不可创建仅含网关或传感器的空壳组；可点击上方「一键勾选本层照明与传感」。",E();return}if(Oe.length===0){We="请至少选择 1 台受控末端或传感器设备，不可创建空壳分组。",E();return}try{await t.upsertDeviceGroup({id:d,track:I,groupType:V,name:A,floorId:C,includesAdapter:I==="mesh_auto",deviceIds:De}),Se(),le(`${d?"已更新":"已新建"}${I==="mesh_auto"?"端侧蓝牙 Mesh 自治组":"云端业务分组"}「${A}」（${De.length} 台成员）。`),await Ye(),E()}catch(ze){We=$t(ze),E()}}),e.querySelectorAll("[data-del-group]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.delGroup,d=de.find($=>$.id===r);!r||!d||(Se(),Be={title:`删除设备分组「${d.name}」`,body:"删除分组不会移除成员设备，但会解除该群组的批量联动配置。确认删除吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_group",groupId:r}},E())})}),e.querySelectorAll("[data-test-group]").forEach(l=>{l.addEventListener("click",()=>{const r=de.find(I=>I.id===l.dataset.testGroup);if(!r)return;const d=r.deviceIds.map(I=>u.find(V=>V.id===I)).filter(I=>!!I),$=d.filter(I=>I.category!=="gateway"),A=r.track==="mesh_auto"&&r.groupType.includes("灯")&&!d.some(I=>I.category==="lighting");if($.length===0)Ae=`分组「${r.name}」暂未包含受控末端设备（仅含基础设施网关或为空），请先编辑添加成员后再执行试控。`,me="";else if(A)Ae=`灯光联动组「${r.name}」尚未包含任何照明执行端（驱动器 / 开关面板），请先编辑添加照明设备后再试控。`,me="";else{const I=$.filter(V=>V.connectivity!=="online");I.length>0?(Ae=`分组「${r.name}」试控异常：${I.map(V=>`${V.name}（${V.connectivity==="unknown"?"待入网":"离线"}）`).join("、")}。`,me=""):(Ae="",me=t.mode==="demo"?`演示群组试控通过：「${r.name}」共 ${$.length} 台末端校验在线可达。`:`已向分组「${r.name}」发送群组试控指令，${$.length} 台受控终端回读正常。`)}E()})}),e.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>is()),e.querySelector("[data-clear-mesh-findings]")?.addEventListener("click",()=>{Me=[],E()}),e.querySelector("[data-sync-edge]")?.addEventListener("click",async()=>{if(!t.syncEdgeGateway||!C){re("当前未选中可同步的楼层或后端同步接口未就绪。"),E();return}const l=G.version,r=G.dirty;try{const d=await t.syncEdgeGateway(C);G=d,Y[C]=d,!r&&d.version===l?le(`本层已是最新边缘基线 v${d.version}（无新增配置变更），已重新校验网关连通。`):(delete Ue[C],gt?.floorId===C&&(gt=null),le(`已将本层配置下发至边缘网关（基线 v${d.version}）；请前往「交付验收」执行新版本全层自检后方可冻结。`)),E()}catch(d){re(d,{label:"前往设备标记绑定网关 →",nav:"device_marking"}),E()}}),e.querySelectorAll("[data-topo-mode]").forEach(l=>{l.addEventListener("click",()=>{He=l.dataset.topoMode??"mesh",E()})}),e.querySelectorAll("[data-topo-jump]").forEach(l=>{l.addEventListener("click",()=>{Te=l.dataset.topoJump??null,Le=!0,_e="binding",ot=!1,bt={nav:"device_network",label:"设备网络"},h="device_marking";const r=u.find(d=>d.id===Te);Re(r),E()})}),e.querySelector("[data-toggle-conn-more]")?.addEventListener("click",l=>{l.stopPropagation(),ut=!ut,Ne=null,E()}),e.querySelectorAll("[data-toggle-conn-row-menu]").forEach(l=>{l.addEventListener("click",r=>{r.stopPropagation();const d=l.dataset.toggleConnRowMenu??null;Ne=Ne===d?null:d,ut=!1,E()})}),e.querySelectorAll("[data-select-topo-conn]").forEach(l=>{l.addEventListener("click",()=>{Fa=l.dataset.selectTopoConn??null,E()})}),e.querySelectorAll("[data-conn-jump-dev]").forEach(l=>{l.addEventListener("click",async()=>{const r=l.dataset.connJumpDev??null,d=l.dataset.connJumpFloor??"";d&&ta(d),Te=r,Le=!0,_e="binding",bt={nav:"connections",label:"系统接入"},h="device_list",await Ye(),Re(u.find($=>$.id===r)),E()})}),e.querySelector("[data-req-restart-edge]")?.addEventListener("click",()=>{ut=!1,Se(),Be={title:"确认重启边缘服务",body:"重启将导致当前项目边缘网关通信短暂中断约 5 秒，正在进行的实时采集将自动重连。确认执行重启吗？",confirmLabel:"确认重启",danger:!0,action:{kind:"restart_edge",projectId:P}},E()}),e.querySelectorAll("[data-conn-view]").forEach(l=>{l.addEventListener("click",()=>{Ge=l.dataset.connView??"list",E()})}),e.querySelector("[data-conn-search]")?.addEventListener("input",l=>{vt=l.currentTarget.value,E();const r=e.querySelector("[data-conn-search]");r&&(r.focus(),r.setSelectionRange(vt.length,vt.length))}),e.querySelector("[data-conn-status-filter]")?.addEventListener("change",l=>{Et=l.currentTarget.value??"all",E()}),e.querySelector("[data-conn-bld-select]")?.addEventListener("change",l=>{const r=l.currentTarget.value,d=e.querySelector('[data-save-conn] select[name="cFloor"]');if(!d)return;if(!r){d.disabled=!0,d.innerHTML='<option value="">全项目不限楼层</option>';return}d.disabled=!1;const $=Ke(r);d.innerHTML=`<option value="">整栋 / 不限楼层</option>${$.map(A=>`<option value="${n(A.id)}">${n(A.name)}</option>`).join("")}`}),e.querySelector("[data-save-conn]")?.addEventListener("submit",async l=>{if(l.preventDefault(),!t.upsertConnection)return;const r=l.currentTarget,d=r.dataset.saveConn||void 0,$=new FormData(r),A=String($.get("cName")??"").trim(),I=String($.get("cProto")??"bacnet_ip"),V=String($.get("cEndpoint")??"").trim(),De=String($.get("cBuilding")??"").trim(),Oe=String($.get("cFloor")??"").trim();if(Sa={name:A,buildingId:De,floorId:Oe,protocol:I,endpoint:V},!(!A||!V))try{const ze=await t.upsertConnection({id:d,projectId:P,buildingId:De,floorId:Oe,name:A,protocol:I,endpoint:V});Se(),Ae="",me=d?`已更新接入通道「${A}」（${V}）。`:`已接入「${A}」（${V}），当前关联 ${ze.collectedPoints} 原始采集点。`,ue=await t.listConnections(P).catch(()=>[]),E()}catch(ze){We=$t(ze),E(),e.querySelector('[data-save-conn] input[name="cEndpoint"]')?.focus()}}),e.querySelectorAll("[data-del-conn]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.delConn,d=ue.find($=>$.id===r);!r||!d||(Se(),Ne=null,Be={title:`删除接入通道「${d.name}」`,body:`删除后将停止对端点 ${d.endpoint} 的数据采集与控制下发，此操作不可撤销。确认删除吗？`,confirmLabel:"确认删除",danger:!0,action:{kind:"delete_connection",connectionId:r}},E())})}),e.querySelectorAll("[data-expand-conn]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.expandConn??null;wa=wa===r?null:r,E()})}),e.querySelectorAll("[data-ping-conn]").forEach(l=>{l.addEventListener("click",()=>{const r=ue.find(d=>d.id===l.dataset.pingConn);if(r){if(Ae="",r.status==="connected"){const $=11+Array.from(`${r.id}${r.endpoint}`).reduce((A,I)=>A+I.charCodeAt(0),0)%23;me=t.mode==="demo"?`演示连通探针通过：「${r.name}」（${r.endpoint}）模拟往返 ${$} ms。`:`连通测试通过：「${r.name}」（${r.endpoint}）响应正常，延迟 ${$} ms。`}else Ae=`连通测试异常：「${r.name}」（${r.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`;E()}})}),e.querySelectorAll("[data-copy-endpoint]").forEach(l=>{l.addEventListener("click",async()=>{const r=l.dataset.endpointVal??"",d=l.dataset.copyEndpoint??null;Ne=null;try{await navigator.clipboard.writeText(r),je=d,me=`已复制接入端点：${r}`,E(),window.setTimeout(()=>{je=null,E()},1600)}catch{}})}),e.querySelectorAll("[data-acc-filter]").forEach(l=>{l.addEventListener("click",()=>{Bt=l.dataset.accFilter??"active",E()})}),e.querySelectorAll("[data-toggle-empty-matrix]").forEach(l=>{l.addEventListener("click",()=>{Kt=!Kt,E()})}),e.querySelectorAll("[data-toggle-defer-floor]").forEach(l=>{l.addEventListener("click",async()=>{const r=l.dataset.toggleDeferFloor,d=l.dataset.deferNext==="1";if(!(!r||!t.toggleFloorDeferred))try{const $=await t.toggleFloorDeferred(r,d);ye=new Set($);const A=m.floors.find(I=>I.id===r)?.name??r;me=d?`已将「${A}」标为本期不纳入（预留），不再计入缺项与同步分母。`:`已将「${A}」恢复纳入本期交付范围。`,E()}catch($){re($),E()}})}),e.querySelectorAll("[data-open-snapshot]").forEach(l=>{l.addEventListener("click",async()=>{const r=l.dataset.openSnapshot,d=J.find(A=>A.id===r);if(!r||!d)return;Se();const $=t.getDeliverySnapshotMeta?await t.getDeliverySnapshotMeta(r).catch(()=>null):null;if($)N={batch:d,meta:$};else{const A=m.floors.find(I=>I.id===d.floorId)?.name??d.floorId;N={batch:d,meta:{batchId:d.id,floorId:d.floorId,floorName:A,planVersion:m.floors.find(I=>I.id===d.floorId)?.plan?.planVersion??0,edgeSyncVersion:Y[d.floorId]?.version??1,configSignature:"live",fttPassedAt:Ue[d.floorId]?.passedAt??null,devices:[]}}}E()})}),e.querySelector("[data-sign-off-delivery]")?.addEventListener("submit",async l=>{if(l.preventDefault(),!t.signOffDeliveryBatch)return;const r=l.currentTarget,d=r.dataset.signOffDelivery,$=new FormData(r),A=String($.get("signRecipient")??"").trim(),I=String($.get("signNote")??"").trim();if(!A){We="请填写接收方签收人姓名与部门后再确认签收。",E();return}try{const V=await t.signOffDeliveryBatch(d,A,I);await It();const De=t.getDeliverySnapshotMeta?await t.getDeliverySnapshotMeta(d).catch(()=>null):null;De&&(N={batch:V,meta:De}),We="",le(`交付基线 ${V.versionTag} 已由「${A}」正式签收交付（状态：已交付）。`),E()}catch(V){We=$t(V),E()}}),e.querySelector("[data-open-reject-form]")?.addEventListener("click",()=>{X=!X,We="",E(),X&&e.querySelector("[data-reject-reason-input]")?.focus()}),e.querySelector("[data-cancel-reject-form]")?.addEventListener("click",()=>{X=!1,ee="",We="",E()}),e.querySelector("[data-reject-reason-input]")?.addEventListener("input",l=>{ee=l.currentTarget.value}),e.querySelector("[data-confirm-reject-delivery]")?.addEventListener("submit",async l=>{if(l.preventDefault(),!t.rejectDeliveryBatch)return;const r=l.currentTarget,d=r.dataset.confirmRejectDelivery,$=String(new FormData(r).get("rejectReason")??"").trim();if(ee=$,!$){We="请填写具体退回整改原因后再确认退回。",E(),e.querySelector("[data-reject-reason-input]")?.focus();return}try{const A=await t.rejectDeliveryBatch(d,$);await It(),Se(),le(`基线 ${A.versionTag} 已退回整改（原因：${$}）。`),E()}catch(A){We=$t(A),E()}}),e.querySelector("[data-export-snapshot]")?.addEventListener("click",()=>{N&&cs(N.batch,N.meta)}),e.querySelectorAll("[data-matrix-nav]").forEach(l=>{l.addEventListener("click",async()=>{const r=l.dataset.matrixFloor,d=l.dataset.matrixNav??"device_marking",$=l.dataset.matrixOffline==="1";r&&ta(r),bt={nav:"acceptance",label:"交付验收"},h=d,d==="project_config"&&(w=r?"floor":"overview"),d==="device_list"&&$&&(Qe="offline"),await Ye(),E()})}),e.querySelector("[data-submit-stage-snapshot]")?.addEventListener("click",async l=>{if(!t.saveDeliveryStageSnapshot)return;const r=l.currentTarget.dataset.submitStageSnapshot||k;if(!r)return;const d=e.querySelector("[data-confirm-freeze]"),$=d?String(new FormData(d).get("freezeNote")??"").trim():"";try{const A=await t.saveDeliveryStageSnapshot(r,$||"阶段性施工留档");Se(),Ae="",me=`已保存阶段留档 ${A.versionTag}（已核验 ${A.verifiedCount}/${A.deviceCount} 台，状态：阶段留档）。`,await It(),await Ye(),E()}catch(A){We=$t(A),E()}}),e.querySelector("[data-confirm-freeze]")?.addEventListener("submit",async l=>{l.preventDefault();const r=l.currentTarget,d=r.dataset.confirmFreeze||k||C;if(!d)return;const $=new FormData(r),A=String($.get("freezeNote")??"").trim();try{const I=await t.freezeDeliveryBatch(d,A||"全层自检通过，正式交付冻结");Se(),le(`已生成正式交付冻结基线 ${I.versionTag}（核验 ${I.verifiedCount}/${I.deviceCount}），可在下方记录中执行「去签收」。`),await It(),await Ye(),E()}catch(I){We=$t(I),E()}})}await ct()}const Ys=new Set(["lighting","hvac","alarm_rules"]),Bn={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},Ba=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function Js(e){const t=new Set;for(const a of e.actions)a.command.startsWith("lighting")?t.add("照明"):a.command.startsWith("hvac")?t.add("暖通"):t.add("综合");return Array.from(t)}function Qs(e,t,a){const s=a?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
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
  `}async function Xs(e,t,a){let s=Ka(),o=!1,i="",[c,y,p,v]=await Promise.all([t.getSpatialTree(),t.listScenes(R.floorId),t.getRuntimeSettings(R.projectId),t.getFloorDevices(R.floorId).catch(()=>[])]),h="manual",w="balanced",x="all",L=null,_="",m=!1,u=!1,f=!1,T="all",O=null,G="",Y="",ae=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const de=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],te=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],ue=[{deviceId:v[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],J=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 ｜ ${p.calendar.workdayStart} – ${p.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 ｜ 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 ｜ ${p.calendar.nightGuardStart} – 次日 ${p.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],H=t.subscribeFloorEvents(R.floorId,async ge=>{ge.type==="control.receipt.updated"&&L?.batchId===ge.batchId&&(L=await t.getControlBatch(ge.batchId),Q())});function Q(){const ge=_.trim().toLowerCase(),Ue=ge?y.filter(b=>`${b.name} ${b.description}`.toLowerCase().includes(ge)):y,ye=p.rules.filter(b=>Ys.has(b.category)),z=x==="all"?ye:x==="cbm"?[]:ye.filter(b=>b.category===x),ve=x==="all"||x==="cbm",B=T==="issues"?de.filter(b=>b.status!=="verified"):de,Z=Ba.find(b=>b.id===w)??Ba[1],ke=a.scope.canControlDevices,W=a.scope.canEditScenes,S=a.scope.canEditSettings,F=a.scope.activeOverrides.find(b=>b.module==="settings"&&b.status==="active");e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${Za({tree:c,session:a,scope:s,isOpen:o,searchKeyword:i})}
            </div>

            <div class="pacom-header-meta">
              ${h==="rules"?S?F?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>':""}
              <button type="button" class="pacom-badge ${ae.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${ae.length>0?`人工覆盖中：${ae.length} 台 ${ce("chevron-down",12)}`:`全部自动托管 ${ce("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${f?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${de.length}）</button>
              ${h==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1" ${W?"":"disabled"}>${m?"收起表单":"+ 新建场景"}</button>`:h==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${h==="manual"}" data-scene-tab="manual">快捷场景（${y.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${h==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${h==="rules"}" data-scene-tab="rules">条件联动（${ye.length+te.length}）</button>
          </nav>
        </header>

        ${u?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${ae.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${ce("x",16)}</button>
              </div>
              ${ae.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':ae.map(b=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${n(b.name)}</div>
                            <div class="pacom-row-sub">${n(b.reason)}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${n(b.id)}" ${ke?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${ae.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${ke?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${f?`
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
                  <button class="pacom-tab" aria-selected="${T==="all"}" data-log-filter="all">全部（${de.length}）</button>
                  <button class="pacom-tab" aria-selected="${T==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${B.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${B.map(b=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${n(b.device)}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${n(b.source)}</span>
                        </div>
                        <span class="pacom-row-sub">${n(b.action)} ｜ ${n(b.at)}</span>
                      </div>
                      <span class="pacom-badge ${b.status==="verified"?"pacom-badge--online":b.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${b.status==="verified"?"回读确认":b.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${G?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${n(G)}</span></div>`:""}
          ${Y?`<div class="pacom-alert-banner">${n(Y)}</div>`:""}

          ${h==="manual"?`
              ${L?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${n(L.batchId)}</span>
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
                            ${L.receipts.map(b=>`
                                <tr>
                                  <td><code style="font-size:12px;">${n(b.deviceId)}</code></td>
                                  <td>${n(b.command)}</td>
                                  <td>${n(String(b.targetValue))}${b.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${n(b.errorMessage)}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${b.status==="verified_success"?"pacom-badge--online":b.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${n(b.status)}</span>
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
                          <span class="pacom-setting-title">联动动作列表（${ue.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${ue.map((b,C)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" name="draftDevice-${C}" data-draft-dev="${C}" aria-label="目标设备">
                                ${v.map(ne=>`<option value="${n(ne.id)}" ${ne.id===b.deviceId?"selected":""}>${n(ne.name)}</option>`).join("")}
                              </select>
                              <select class="pacom-select" name="draftCommand-${C}" data-draft-cmd="${C}" aria-label="执行指令">
                                <option value="lighting.dimming" ${b.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${b.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${b.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" name="draftTargetValue-${C}" data-draft-val="${C}" value="${n(b.targetValue)}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${C}" ${ue.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit" ${W?"":"disabled"}>保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="pacom-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${n(_)}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${Ue.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${Ue.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':Ue.map(b=>{const C=Js(b),ne=b.actions.slice(0,3).map(xe=>{const Je=v.find(Ve=>Ve.id===xe.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??xe.deviceId,st=xe.command==="lighting.dimming"?`亮度 ${xe.targetValue}%`:xe.command==="hvac.setpoint"?`设温 ${xe.targetValue}°C`:xe.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${n(Je)} → ${n(st)}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${n(b.name)}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${C.map(xe=>`<span class="pacom-badge pacom-badge--accent">${n(xe)}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${b.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${n(b.description)}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${ne}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${n(b.lastExecutedAt?b.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行")}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${n(b.id)}" ${ke?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:h==="schedule_oss"?`
                <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">当前优化启停模式</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${Z.title}</div>
                    <span class="pacom-kpi-delta">${Z.estSaving}</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">明日预测预启动时刻</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${Z.predictedStart}</div>
                    <span class="pacom-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">本周累计节省运行工时</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${Z.savedHours}</div>
                    <span class="pacom-kpi-delta">当前人工覆盖挂起：${ae.length} 台</span>
                  </div>
                </div>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="pacom-mode-grid">
                    ${Ba.map(b=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${w===b.id}" data-oss-mode="${b.id}" ${ke?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${b.title}</strong>
                          <span class="pacom-badge ${w===b.id?"pacom-badge--online":"pacom-badge--neutral"}">${w===b.id?"当前生效":b.badge}</span>
                        </div>
                        <span class="pacom-setting-desc">${b.desc}</span>
                        <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${b.estSaving}</span>
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
                          ${J.map(b=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${n(b.name)}</span>
                                    ${b.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${n(b.windowLabel)}</div>
                                </td>
                                <td>${Qs(b.startHour,b.endHour,b.enabled)}</td>
                                <td><span class="pacom-row-sub">${n(b.scope)}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${b.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="pacom-switch"
                                      role="switch"
                                      aria-checked="${b.enabled}"
                                      aria-label="切换排程 ${n(b.name)}"
                                      data-toggle-schedule="${n(b.id)}"
                                      ${ke?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(b=>{const C=b==="all"?"全部":Bn[b]??b,ne=b==="all"?ye.length+te.length:b==="cbm"?te.length:ye.filter(xe=>xe.category===b).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${x===b}" data-rule-cat="${b}">
                              <span>${C}</span><span class="pacom-count-num">${ne}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${z.map(b=>{const C=O===b.id;return`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${n(Bn[b.category]??b.category)}</span>
                                  <span>${n(b.name)}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${b.version}</span>
                                </span>
                                <span class="pacom-setting-desc">${n(b.summary)} ｜ 范围：${n(b.scopeLabel)} ｜ 回执：${n(b.receiptSummary??"已同步")}</span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${n(b.id)}">${C?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${b.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="pacom-switch"
                                  role="switch"
                                  aria-checked="${b.enabled?"true":"false"}"
                                  aria-label="切换 ${n(b.name)}"
                                  data-toggle-strategy-rule="${n(b.id)}"
                                  data-rule-ver="${b.version}"
                                  data-rule-next="${!b.enabled}"
                                  ${S?"":"disabled"}
                                >
                                  <span class="pacom-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${C?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${b.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":b.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${n(b.scopeLabel)} ｜ 当前版本：v${b.version} ｜ 最近同步：${n(b.receiptSummary??"已同步")}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${ve?te.map(b=>{const C=Math.min(100,Math.round(b.runtimeHours/b.thresholdHours*100));return`
                                <div class="pacom-setting-row">
                                  <div class="pacom-setting-meta" style="gap:6px;">
                                    <span class="pacom-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${n(b.name)}</span>
                                      <span class="pacom-badge ${C>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${b.runtimeHours} / ${b.thresholdHours} h（${C}%）</span>
                                    </span>
                                    <div class="pacom-progress-track" style="max-width:340px;">
                                      <div class="pacom-progress-fill" style="width:${C}%; background:${C>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="pacom-setting-desc">绑定设备：${n(b.equipment)} ｜ 上次重置：${n(b.lastReset)}</span>
                                  </div>
                                  <div class="pacom-setting-control">
                                    <span class="pacom-row-sub">${b.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="pacom-switch" role="switch" aria-checked="${b.enabled}" data-toggle-cbm="${n(b.id)}" aria-label="切换 ${n(b.name)}" ${S?"":"disabled"}>
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,Ga(e,{onToggle:()=>{o=!o,Q(),o&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:b=>{i=b,Q();const C=e.querySelector("[data-global-space-search]");C&&(C.focus(),C.setSelectionRange(b.length,b.length))},onPick:b=>{s=b,o=!1,Q()}}),e.querySelectorAll("[data-scene-tab]").forEach(b=>{b.addEventListener("click",()=>{h=b.dataset.sceneTab??"manual",G="",Q()})}),e.querySelectorAll("[data-toggle-overrides]").forEach(b=>{b.addEventListener("click",()=>{u=!u,Q()})}),e.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{ke&&(ae=[],G="已释放全部人工覆盖设备，自动节能策略已恢复托管。",Q())}),e.querySelectorAll("[data-release-one]").forEach(b=>{b.addEventListener("click",()=>{if(!ke)return;const C=b.dataset.releaseOne;ae=ae.filter(ne=>ne.id!==C),G="已恢复该设备的自动策略托管。",Q()})}),e.querySelectorAll("[data-toggle-cmdlog]").forEach(b=>{b.addEventListener("click",()=>{f=!f,Q()})}),e.querySelectorAll("[data-log-filter]").forEach(b=>{b.addEventListener("click",()=>{T=b.dataset.logFilter??"all",Q()})}),e.querySelector("[data-close-batch]")?.addEventListener("click",()=>{L=null,Q()}),e.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),e.querySelectorAll("[data-oss-mode]").forEach(b=>{b.addEventListener("click",()=>{if(!ke)return;const C=b.dataset.ossMode;if(!C)return;w=C;const ne=Ba.find(xe=>xe.id===C);G=`已切换至「${ne?.title??C}」模式（明日预测启动 ${ne?.predictedStart??""}）。`,Q()})}),e.querySelectorAll("[data-toggle-schedule]").forEach(b=>{b.addEventListener("click",()=>{if(!ke)return;const C=b.dataset.toggleSchedule,ne=J.find(xe=>xe.id===C);ne&&(ne.enabled=!ne.enabled,G=`排程「${ne.name}」已${ne.enabled?"恢复启用":"临时暂停"}。`,Q())})}),e.querySelectorAll("[data-rule-cat]").forEach(b=>{b.addEventListener("click",()=>{x=b.dataset.ruleCat??"all",Q()})}),e.querySelectorAll("[data-expand-rule]").forEach(b=>{b.addEventListener("click",()=>{const C=b.dataset.expandRule??null;O=O===C?null:C,Q()})}),e.querySelectorAll("[data-toggle-cbm]").forEach(b=>{b.addEventListener("click",()=>{if(!S)return;const C=te.find(ne=>ne.id===b.dataset.toggleCbm);C&&(C.enabled=!C.enabled,G=`工时维保规则「${C.name}」已${C.enabled?"启用":"停用"}。`,Q())})}),e.querySelectorAll("[data-toggle-strategy-rule]").forEach(b=>{b.addEventListener("click",async()=>{if(S){Y="";try{await t.toggleRuntimeRule(b.dataset.toggleStrategyRule,b.dataset.ruleNext==="true",Number(b.dataset.ruleVer)),p=await t.getRuntimeSettings(R.projectId),G="条件联动规则状态与版本回执已更新。",Q()}catch(C){Y=C instanceof Error?C.message:String(C),Q()}}})}),e.querySelectorAll("[data-toggle-create]").forEach(b=>{b.addEventListener("click",()=>{!W&&!m||(m=!m,Q())})}),e.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{W&&(ue.push({deviceId:v[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),Q())}),e.querySelectorAll("[data-del-draft-action]").forEach(b=>{b.addEventListener("click",()=>{if(!W)return;const C=Number(b.dataset.delDraftAction);ue.length>1&&(ue.splice(C,1),Q())})}),e.querySelectorAll("[data-draft-dev]").forEach(b=>{b.addEventListener("change",()=>{if(!W)return;const C=ue[Number(b.dataset.draftDev)];C&&(C.deviceId=b.value)})}),e.querySelectorAll("[data-draft-cmd]").forEach(b=>{b.addEventListener("change",()=>{if(!W)return;const C=ue[Number(b.dataset.draftCmd)];C&&(C.command=b.value)})}),e.querySelectorAll("[data-draft-val]").forEach(b=>{b.addEventListener("change",()=>{if(!W)return;const C=ue[Number(b.dataset.draftVal)];C&&(C.targetValue=b.value)})}),e.querySelector("[data-scene-search]")?.addEventListener("input",b=>{const C=b.currentTarget,ne=C.selectionStart??C.value.length;_=C.value,Q();const xe=e.querySelector("[data-scene-search]");xe&&(xe.focus(),xe.setSelectionRange(ne,ne))}),e.querySelectorAll("[data-exec-scene]").forEach(b=>{b.addEventListener("click",async()=>{if(!ke)return;Y="";const C=y.find(ne=>ne.id===b.dataset.execScene);try{L=await t.executeScene(b.dataset.execScene),y=await t.listScenes(R.floorId),de.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:C?.name??"E7F 场景",action:`${L.receipts.length} 台设备联动下发`,status:"verified"}),Q()}catch(ne){Y=ne instanceof Error?ne.message:String(ne),Q()}})}),e.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async b=>{if(b.preventDefault(),!W)return;const C=new FormData(b.currentTarget);try{await t.createScene({projectId:R.projectId,floorId:R.floorId,name:String(C.get("name")??""),description:String(C.get("description")??""),actions:ue.map(ne=>({deviceId:ne.deviceId,command:ne.command,targetValue:ne.targetValue==="true"?!0:ne.targetValue==="false"?!1:Number(ne.targetValue)||50}))}),y=await t.listScenes(R.floorId),m=!1,G=`快捷场景已保存（共绑定 ${ue.length} 条联动动作）。`,Q()}catch(ne){Y=ne instanceof Error?ne.message:String(ne),Q()}})}Q(),window.addEventListener("hashchange",()=>H(),{once:!0})}const Rn={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function nn(e,t){return e.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':e.map(a=>`
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
      </div>`).join("")}async function eo(e,t,a){let s="calendar",o=Ka(),i=!1,c="";const[y,p]=await Promise.all([t.getSpatialTree(),t.getRuntimeSettings(R.projectId)]);let v=p,h=v.calendar.workdayStart,w=v.calendar.workdayEnd,x=v.calendar.nightGuardStart,L=v.calendar.nightGuardEnd,_=!0,m=[];const u=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let f="flat";const T={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},O={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},G={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},Y={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},ae=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let de="",te="";function ue(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(Q=>{const ge=Rn[Q];return`
                <button type="button" class="pacom-unified-item" aria-current="${s===Q}" data-stab="${Q}">
                  ${ce(ge.icon,16)}
                  <span>${ge.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function J(){const H=a.scope.canEditSettings,Q=a.scope.activeOverrides.find(B=>B.module==="settings"&&B.status==="active"),ge=y.projects[0]?.name??"当前项目",Ue=v.rules.filter(B=>B.category==="weather_area"),ye=v.rules.filter(B=>B.category==="metering_carbon"),z=v.rules.filter(B=>B.category==="templates"),ve=Rn[s];e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${Za({tree:y,session:a,scope:o,maxGranularity:"project",isOpen:i,searchKeyword:c})}
            </div>
            <div class="pacom-header-meta">
              ${H?Q?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${ue()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head">
                <h2 class="pacom-unified-title">${ve.label}</h2>
                <p class="pacom-unified-subtitle">${ve.subtitle}</p>
              </div>
              ${Q?`<div class="pacom-banner pacom-banner--ok">
                      <div class="pacom-banner-text">
                        <span class="pacom-banner-title">临时提权生效中（应用设置 ｜ ${Q.durationHours}h）</span>
                        <span class="pacom-banner-sub">审批人：${n(Q.approvedBy)} ｜ 到期自动收回：${n(Q.expiresAt.slice(0,16).replace("T"," "))} ｜ 事由：${n(Q.reason)}</span>
                      </div>
                    </div>`:""}
              ${de?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${n(de)}</span></div>`:""}
              ${te?`<div class="pacom-alert-banner">${n(te)}</div>`:""}

              ${s==="calendar"?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">工作时间与夜间值守基准</h2>
                      <span class="pacom-badge pacom-badge--neutral">版本 v${v.calendar.version}</span>
                    </div>
                    <div class="pacom-settings-card">
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">工作日上班 / 下班时间</span>
                          <span class="pacom-setting-desc">驱动「智能策略 → 排程与节能」早间预冷及公区照明启停；晚于 21:30 将自动提示交叠冲突</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calWorkdayStart" style="width:116px;" type="time" data-cal-start value="${n(h)}" aria-label="工作日上班时间" ${H?"":"disabled"} />
                          <span class="pacom-row-sub">至</span>
                          <input class="pacom-input" name="calWorkdayEnd" style="width:116px;" type="time" data-cal-end value="${n(w)}" aria-label="工作日下班时间" ${H?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calNightGuardStart" style="width:116px;" type="time" data-night-start value="${n(x)}" aria-label="夜间值守开始" ${H?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" name="calNightGuardEnd" style="width:116px;" type="time" data-night-end value="${n(L)}" aria-label="夜间值守结束" ${H?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">自动跳过中国法定节假日</span>
                          <span class="pacom-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                        </div>
                        <div class="pacom-setting-control">
                          <span class="pacom-row-sub">${_?"已开启":"已关闭"}</span>
                          <button type="button" class="pacom-switch" role="switch" aria-checked="${_}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${H?"":"disabled"}>
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
                      <span class="pacom-row-sub">共 ${u.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${u.map(B=>`
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title"><span>${n(B.date)}</span><span class="pacom-badge pacom-badge--accent">${n(B.mode)}</span></span>
                              <span class="pacom-setting-desc">${n(B.label)}</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${n(B.id)}" ${H?"":"disabled"}>移除</button>
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
                                ${m.map(B=>`
                                    <tr>
                                      <td>
                                        <div style="font-weight:450;">${n(B.ruleName)}</div>
                                        ${B.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${n(B.conflictWarning)}</div>`:""}
                                      </td>
                                      <td>${n(B.beforeWindow)}</td>
                                      <td><strong>${n(B.afterWindow)}</strong></td>
                                      <td>
                                        <span class="pacom-badge ${B.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                          ${B.conflictWarning?"交叠警告":"自动跟随"}
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
                            <select class="pacom-select" name="energyWeatherSource" data-energy-field="weatherSource" aria-label="室外气象数据源" ${H?"":"disabled"}>
                              <option value="guanzhou_station" ${T.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                              <option value="campus_sensor" ${T.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                            </select>
                          </div>
                        </div>
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">${n(ge)}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" name="energyBillingArea" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${n(T.billingArea)}" aria-label="计费面积" ${H?"":"disabled"} />
                          </div>
                        </div>
                        ${nn(Ue,H)}
                      </div>
                    </section>

                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">电价与碳排口径</h2>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${f==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                          <button class="pacom-tab" aria-selected="${f==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                        </div>
                      </div>
                      <div class="pacom-settings-card">
                        ${f==="flat"?`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">综合电价参考（元 / kWh）</span>
                                <span class="pacom-setting-desc">用于数据分析中的月度节能金额估算</span>
                              </div>
                              <div class="pacom-setting-control">
                                <input class="pacom-input" name="energyTariffYuan" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${n(T.tariffYuan)}" aria-label="综合电价" ${H?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 ｜ 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" name="energyTariffPeak" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${n(T.tariffPeak)}" aria-label="峰段电价" ${H?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" name="energyTariffFlat" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${n(T.tariffFlat)}" aria-label="平段电价" ${H?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" name="energyTariffValley" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${n(T.tariffValley)}" aria-label="谷段电价" ${H?"":"disabled"} />
                              </div>
                            </div>`}
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">区域电网碳排放因子</span>
                            <span class="pacom-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" name="energyCarbonFactor" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${H?"":"disabled"}>
                              <option value="0.5271" ${T.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                              <option value="0.5703" ${T.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                            </select>
                          </div>
                        </div>
                        ${nn(ye,H)}
                        <div class="pacom-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${H?"":"disabled"}>保存口径参数</button>
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
                              <input class="pacom-input" name="guardMinTemp" style="width:72px;" type="number" data-guard-field="minTemp" value="${n(O.minTemp)}" aria-label="最低设定温度" ${H?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" name="guardMaxTemp" style="width:72px;" type="number" data-guard-field="maxTemp" value="${n(O.maxTemp)}" aria-label="最高设定温度" ${H?"":"disabled"} />
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
                              <input class="pacom-input" name="guardReadbackTimeoutSec" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${n(O.readbackTimeoutSec)}" aria-label="回读超时阈值" ${H?"":"disabled"} />
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
                          ${nn(z,H)}
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
                              <input class="pacom-input" name="dailyDigestTime" style="width:116px;" type="time" data-digest-time value="${n(Y.dailyDigestTime)}" aria-label="每日简报发送时间" ${H?"":"disabled"} />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${Y.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报" ${H?"":"disabled"}>
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
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${Y.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰" ${H?"":"disabled"}>
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
                              <input class="pacom-input" name="autoWoDelayMin" style="width:72px;" type="number" data-auto-wo="delayMin" value="${n(G.delayMin)}" aria-label="自动派单延迟分钟数" ${H?"":"disabled"} />
                              <span class="pacom-row-sub">分钟</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${G.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${H?"":"disabled"}>
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
                                <option value="暖通运维组" ${G.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                                <option value="强电照明组" ${G.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                                <option value="园区物业值班组" ${G.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                              </select>
                              <span class="pacom-row-sub">防重</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${G.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${H?"":"disabled"}>
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
                                ${ae.map(B=>`
                                    <tr>
                                      <td><strong>${n(B.groupName)}</strong></td>
                                      <td>${n(B.scope)}</td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${n(B.severity)}</span></td>
                                      <td><span class="pacom-badge pacom-badge--accent">${n(B.channels)}</span></td>
                                      <td style="text-align:right;">
                                        <button type="button" class="pacom-switch" role="switch" aria-checked="${B.enabled}" data-toggle-nr="${n(B.id)}" aria-label="切换 ${n(B.groupName)} 通知规则" ${H?"":"disabled"}>
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
    `,Ga(e,{onToggle:()=>{i=!i,J(),i&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:B=>{c=B,J();const Z=e.querySelector("[data-global-space-search]");Z&&(Z.focus(),Z.setSelectionRange(B.length,B.length))},onPick:B=>{o=B,i=!1,J()}}),e.querySelectorAll("[data-stab]").forEach(B=>{B.addEventListener("click",()=>{s=B.dataset.stab??"calendar",de="",te="",J()})}),e.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{H&&(_=!_,de=`法定节假日自动跳过已${_?"开启":"关闭"}。`,J())}),e.querySelector("[data-night-start]")?.addEventListener("change",B=>{H&&(x=B.currentTarget.value)}),e.querySelector("[data-night-end]")?.addEventListener("change",B=>{H&&(L=B.currentTarget.value)}),e.querySelector("[data-add-sd-form]")?.addEventListener("submit",B=>{if(B.preventDefault(),!H)return;const Z=new FormData(B.currentTarget);u.push({id:`sd-${Date.now()}`,date:String(Z.get("date")??""),label:String(Z.get("label")??""),mode:String(Z.get("mode")??"保持工作日工况")}),de="已添加特殊例外日期，当日自动覆盖默认节假日排程。",J()}),e.querySelectorAll("[data-del-sd]").forEach(B=>{B.addEventListener("click",()=>{if(!H)return;const Z=u.findIndex(ke=>ke.id===B.dataset.delSd);Z>=0&&u.splice(Z,1),J()})}),e.querySelectorAll("[data-tariff-mode]").forEach(B=>{B.addEventListener("click",()=>{f=B.dataset.tariffMode??"flat",J()})}),e.querySelectorAll("[data-energy-field]").forEach(B=>{B.addEventListener("change",()=>{if(!H)return;const Z=B.dataset.energyField;Z&&(T[Z]=B.value)})}),e.querySelector("[data-save-energy]")?.addEventListener("click",()=>{H&&(de=f==="flat"?`能耗计费与气象口径已保存（面积 ${T.billingArea} m² ｜ 综合电价 ¥${T.tariffYuan}/kWh ｜ 因子 ${T.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${T.tariffPeak} / 平 ¥${T.tariffFlat} / 谷 ¥${T.tariffValley}）。`,J())}),e.querySelectorAll("[data-guard-field]").forEach(B=>{B.addEventListener("change",()=>{if(!H)return;const Z=B.dataset.guardField;Z&&(O[Z]=B.value)})}),e.querySelector("[data-save-guard]")?.addEventListener("click",()=>{H&&(de=`控制保护参数已保存（温区 ${O.minTemp}–${O.maxTemp}°C ｜ 超时 ${O.readbackTimeoutSec}s）。`,J())}),e.querySelectorAll("[data-auto-wo]").forEach(B=>{B.addEventListener("change",()=>{if(!H)return;const Z=B.dataset.autoWo;Z&&(G[Z]=B.value),de="超时自动派单配置已更新。",J()})}),e.querySelectorAll("[data-toggle-autowo]").forEach(B=>{B.addEventListener("click",()=>{if(!H)return;const Z=B.dataset.toggleAutowo;Z&&(G[Z]=!G[Z],de="自动派单保护策略已更新。",J())})}),e.querySelector("[data-digest-time]")?.addEventListener("change",B=>{H&&(Y.dailyDigestTime=B.currentTarget.value,de=`每日晨间简报发送时刻已更新为 ${Y.dailyDigestTime}。`,J())}),e.querySelectorAll("[data-notify-key]").forEach(B=>{B.addEventListener("click",()=>{if(!H)return;const Z=B.dataset.notifyKey;Z&&(Y[Z]=!Y[Z],de="消息通知偏好已更新。",J())})}),e.querySelectorAll("[data-toggle-nr]").forEach(B=>{B.addEventListener("click",()=>{if(!H)return;const Z=ae.find(ke=>ke.id===B.dataset.toggleNr);Z&&(Z.enabled=!Z.enabled,de=`工作组「${Z.groupName}」的分流推送规则已${Z.enabled?"启用":"停用"}。`,J())})}),e.querySelector("[data-cal-start]")?.addEventListener("change",B=>{H&&(h=B.currentTarget.value)}),e.querySelector("[data-cal-end]")?.addEventListener("change",B=>{H&&(w=B.currentTarget.value)}),e.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{te="";try{m=await t.previewCalendarImpact(R.projectId,h,w),J()}catch(B){te=B instanceof Error?B.message:String(B),J()}}),e.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{if(H){te="";try{const B=await t.saveWorkCalendar(R.projectId,h,w,v.calendar.version);v={...v,calendar:{...B,nightGuardStart:x,nightGuardEnd:L}},de=`工作时间配置已保存至 v${B.version}（工作日 ${B.workdayStart}–${B.workdayEnd} ｜ 夜间值守 ${x}–${L}）`,m=[],J()}catch(B){te=B instanceof Error?B.message:String(B),J()}}}),e.querySelectorAll("[data-toggle-rule]").forEach(B=>{B.addEventListener("click",async()=>{if(H){te="";try{await t.toggleRuntimeRule(B.dataset.toggleRule,B.dataset.ruleNext==="true",Number(B.dataset.ruleVer)),v=await t.getRuntimeSettings(R.projectId),de="策略状态与版本回执已更新。",J()}catch(Z){te=Z instanceof Error?Z.message:String(Z),J()}}})})}J()}const Pn="pacom.web.sidebar.collapsed",to=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,zn=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],mn={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},Nn=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function sn(){const e=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return e in mn?e:"home"}function mt(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}const Aa=new WeakMap;function ao(e){Aa.get(e)?.()}async function no(e,t,a,s){Aa.get(e)?.(),e.classList.remove("bare-login");let o=a,i=sn(),c=localStorage.getItem(Pn)==="1",y=!1,p=!1,v=!1,h=await t.listOrganizations?.()??[{id:"org-gzlab",name:"广州国家实验室",projectCount:2}],w=t.getActiveOrganizationId?.()??h[0]?.id??"org-gzlab",x="",L=!1,_=0,m={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};function u(S){return o.scope.visibleModules.includes(S)}u(i)||(i="home",window.location.hash="#home");function f(){return h.find(S=>S.id===w)??h[0]??{id:"org-gzlab",name:"广州国家实验室",projectCount:0}}function T(S){if(S.id==="org-gzlab")return'<span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>';const F=S.name.slice(0,1)||"机";return`<span class="pacom-pop-avatar" style="width:24px; height:24px; font-size:12px; border-radius:6px;" aria-hidden="true">${mt(F)}</span>`}async function O(){t.listOrganizations&&(h=await t.listOrganizations(),w=t.getActiveOrganizationId?.()??h[0]?.id??"org-gzlab")}async function G(){try{await O();const[S,F,P,b,C]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(R.floorId).catch(()=>[]),t.listAlarms(R.floorId).catch(()=>[]),t.listWorkOrders(R.floorId).catch(()=>[]),t.listScenes(R.floorId).catch(()=>[])]);m={devices:F,zones:S.zones,alarms:P,workOrders:b,scenes:C},_=P.filter(ne=>ne.status==="active").length,Q()}catch{}}function Y(){const S=zn.filter(P=>u(P.id));let F=!1;return S.map(P=>`
        ${(P.id==="settings"||P.id==="deployment")&&!F?(F=!0,'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>'):""}
        <button type="button" class="pacom-nav-item" data-route="${P.id}" aria-current="${i===P.id?"page":"false"}" title="${P.label}">
          ${ce(P.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${P.label}</span>
          ${P.id==="alarms"&&_>0?`<span class="pacom-nav-count" title="待处理告警 ${_} 条">${_}</span>`:""}
        </button>`).join("")}function ae(){const S=x.trim().toLowerCase(),F=zn.filter(ie=>u(ie.id)),P=S?F.filter(ie=>ie.label.toLowerCase().includes(S)).slice(0,4):F,b=S?m.devices.filter(ie=>`${ie.name} ${ie.id} ${ie.category}`.toLowerCase().includes(S)).slice(0,5):m.devices.slice(0,3),C=S?m.zones.filter(ie=>ie.name.toLowerCase().includes(S)).slice(0,3):[],ne=u("alarms")?S?m.alarms.filter(ie=>`${ie.title} ${ie.message} ${ie.id}`.toLowerCase().includes(S)).slice(0,4):m.alarms.filter(ie=>ie.status==="active").slice(0,2):[],xe=u("alarms")?S?m.workOrders.filter(ie=>`${ie.title} ${ie.id}`.toLowerCase().includes(S)).slice(0,3):[]:[],Je=u("scenes")?S?m.scenes.filter(ie=>`${ie.name} ${ie.description}`.toLowerCase().includes(S)).slice(0,3):[]:[],st=u("deployment")?S?Nn.filter(ie=>`${ie.title} ${ie.category}`.toLowerCase().includes(S)).slice(0,4):Nn.slice(0,2):[],Ve=[];return b.length&&Ve.push(`<div class="pacom-search-group">${S?"设备（空间总览）":"常用设备直达"}</div>`+b.map(ie=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(ie.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${mt(ie.name)}</span><span class="pacom-badge ${ie.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${ie.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),C.length&&Ve.push('<div class="pacom-search-group">功能区</div>'+C.map(ie=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(ie.id)}"><span>${mt(ie.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),ne.length&&Ve.push(`<div class="pacom-search-group">${S?"告警":"待处理告警"}</div>`+ne.map(ie=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(ie.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${mt(ie.title)}</span><span class="pacom-badge pacom-badge--warning">${ie.status==="active"?"待处理":"已确认"}</span></button>`).join("")),xe.length&&Ve.push('<div class="pacom-search-group">运维工单</div>'+xe.map(ie=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(ie.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${mt(ie.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),Je.length&&Ve.push('<div class="pacom-search-group">智能策略</div>'+Je.map(ie=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${mt(ie.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),st.length&&Ve.push('<div class="pacom-search-group">图纸与工程文档</div>'+st.map(ie=>`<button type="button" class="pacom-search-hit" data-search-hash="${ie.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${mt(ie.title)}</span><span class="pacom-badge pacom-badge--neutral">${mt(ie.category)}</span></button>`).join("")),P.length&&Ve.push('<div class="pacom-search-group">工作区</div>'+P.map(ie=>`<button type="button" class="pacom-search-hit" data-search-hash="#${ie.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${ce(ie.icon,14)}${mt(ie.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),Ve.length?Ve.join(""):`<div class="pacom-nav-empty">未找到与「${mt(x)}」匹配的设备、区域、告警、工单或图纸</div>`}function de(S){S.querySelectorAll("[data-search-hash]").forEach(F=>{F.addEventListener("click",()=>{const P=F.dataset.searchHash||"#home";L=!1,x="",te(),y=!1,window.location.hash===P?(i=sn(),ve(!0)):window.location.hash=P})})}function te(){if(e.querySelector('[data-role="cmd-scrim"]')?.remove(),!L)return;const S=document.createElement("div");S.className="pacom-cmd-scrim",S.dataset.role="cmd-scrim",S.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${ce("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${mt(x)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${ae()}
        </div>
      </div>
    `,e.appendChild(S),S.addEventListener("click",b=>{b.target===S&&(L=!1,te())});const F=S.querySelector('[data-role="cmd-input"]'),P=S.querySelector('[data-role="cmd-body"]');P&&de(P),F?.focus(),F?.addEventListener("input",b=>{x=b.currentTarget.value,P&&(P.innerHTML=ae(),de(P))})}function ue(){if(!p)return"";const S=o.displayName.slice(0,1)||"U",F=!!(t.createOrganization&&o.role==="org_admin");return`
      <div class="pacom-org-popover ${c?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <div class="pacom-pop-section-label">切换机构</div>
        ${h.map(P=>{const b=P.id===w;return`
              <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitemradio" aria-checked="${b}" data-pop-org="${mt(P.id)}">
                ${T(P)}
                <span class="pacom-pop-text">
                  <b>${mt(P.name)}</b>
                  <small>${P.projectCount>0?`${P.projectCount} 个项目`:"暂无项目"}</small>
                </span>
                ${b?ce("check",16,"pacom-pop-check"):""}
              </button>`}).join("")}
        ${F?v?`
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
          <span class="pacom-pop-avatar" aria-hidden="true">${mt(S)}</span>
          <span class="pacom-pop-text">
            <b>${mt(o.displayName)}</b>
            <small>${mt(o.roleLabel)}</small>
          </span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${ce("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function J(S){switch(u(i)||(i="home",window.location.hash="#home"),document.title=`${mn[i]} ｜ PACOM Station`,i){case"home":await vs(S,t,o);return;case"analysis":await ms(S,t,o);return;case"alarms":await As(S,t,o);return;case"scenes":await Xs(S,t,o);return;case"settings":await eo(S,t,o);return;case"deployment":await Ks(S,t,o);return;case"account":await Ss(S,t,o,F=>{o=F,Q(),ge()},H);return}}async function H(){p=!1,y=!1,L=!1,W();try{await t.logout()}finally{window.location.hash="#login",s()}}function Q(){const S=e.querySelector('[data-role="nav-list"]');S&&(S.innerHTML=Y(),Ue())}function ge(){e.querySelector('[data-role="org-popover"]')?.remove();const S=e.querySelector('[data-role="org-menu-btn"]');if(S&&S.setAttribute("aria-expanded",String(p)),!p)return;const F=document.createElement("div");F.innerHTML=ue().trim();const P=F.firstElementChild;P&&(e.appendChild(P),z())}function Ue(){e.querySelectorAll("[data-route]").forEach(S=>{S.addEventListener("click",()=>{const F=S.dataset.route;F===i&&!y||(i=F,y=!1,p=!1,window.location.hash=`#${i}`,ve(!0))})})}async function ye(S){if(!t.switchOrganization)return;await t.switchOrganization(S),await O();const F=await t.getSpatialTree(),P=F.projects[0],b=P?F.buildings.find(ne=>ne.projectId===P.id):void 0,C=b?F.floors.find(ne=>ne.buildingId===b.id&&ne.id===R.floorId)??F.floors.find(ne=>ne.buildingId===b.id):void 0;P&&b&&C?qt({level:"floor",projectId:P.id,buildingId:b.id,floorId:C.id}):P&&b?qt({level:"building",projectId:P.id,buildingId:b.id}):P?qt({level:"project",projectId:P.id}):qt({level:"all-projects"}),p=!1,v=!1,y=!1,await ve(!0),G()}function z(){e.querySelectorAll("[data-pop-org]").forEach(S=>{S.addEventListener("click",()=>{const F=S.dataset.popOrg;if(F){if(F===w){p=!1,ge();return}ye(F)}})}),e.querySelector('[data-pop-act="toggle-new-org"]')?.addEventListener("click",S=>{S.stopPropagation(),v=!v,ge(),v&&e.querySelector('[data-create-org-form] input[name="orgName"]')?.focus()}),e.querySelector("[data-create-org-form]")?.addEventListener("submit",async S=>{if(S.preventDefault(),!t.createOrganization)return;const F=new FormData(S.currentTarget),P=String(F.get("orgName")??"").trim();if(!P)return;const b=await t.createOrganization(P);await ye(b.id)}),e.querySelectorAll('[data-pop-act="go-account"]').forEach(S=>{S.addEventListener("click",()=>{p=!1,v=!1,y=!1,i="account",window.location.hash="#account",ve(!0)})}),e.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{H()})}async function ve(S){const F=e.querySelector('[data-role="main-stage"]');if(!S&&F){const b=e.querySelector(".pacom-nav-rail");b&&(b.classList.toggle("is-collapsed",c),b.classList.toggle("is-mobile-open",y));const C=e.querySelector('[data-role="mobile-scrim"]');C&&C.classList.toggle("is-open",y),ge();return}e.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${ce("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${mn[i]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${mt(o.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${y?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${c?"is-collapsed":""} ${y?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${to}</div>
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
            ${Y()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${i==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${p}" title="${mt(f().name)} ｜ ${mt(o.displayName)}">
              ${T(f())}
              <span class="pacom-org-name">${mt(f().name)}</span>
              ${ce("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,e.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{c=!c,p=!1,localStorage.setItem(Pn,c?"1":"0");const b=e.querySelector(".pacom-nav-rail"),C=e.querySelector('[data-role="toggle-sidebar"]');b&&b.classList.toggle("is-collapsed",c),C&&(C.title=c?"展开侧栏":"收起侧栏",C.setAttribute("aria-label",C.title),C.innerHTML=ce("panel-left",16)),ge()}),e.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{p=!1,ge(),L=!0,te()}),e.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{y=!y,ve(!1)}),e.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{y=!1,p=!1,ve(!1)}),e.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",b=>{b.stopPropagation(),p=!p,ge()}),Ue(),ge(),te();const P=e.querySelector('[data-role="main-stage"]');P&&await J(P)}const B=S=>{const F=S.target;p&&!F?.closest('[data-role="org-popover"]')&&!F?.closest('[data-role="org-menu-btn"]')&&(p=!1,ge())},Z=S=>{if((S.metaKey||S.ctrlKey)&&S.key.toLowerCase()==="k"){S.preventDefault(),p=!1,ge(),L=!L,te();return}S.key==="Escape"&&(L?(L=!1,te()):p?(p=!1,ge()):y&&(y=!1,ve(!1)))},ke=()=>{i=sn(),p=!1,y=!1,L=!1,ve(!0),G()};function W(){document.removeEventListener("click",B),document.removeEventListener("keydown",Z),window.removeEventListener("hashchange",ke),Aa.get(e)===W&&Aa.delete(e)}Aa.set(e,W),document.addEventListener("click",B),document.addEventListener("keydown",Z),window.addEventListener("hashchange",ke),await ve(!0),G()}const Ot=["password","sms"];function on(e){const t=fs(e);return t==="cn"||t==="phone"}const Da=new WeakMap;function Un(e){Da.get(e)?.()}function so(e,t,a,s){Da.get(e)?.(),e.classList.add("bare-login"),document.title="登录 ｜ PACOM Station";let o=!1,i=!1,c=(s?.prefillAccount??"").trim(),y="",p=on(c)?c:"",v="",h=!1,w=(s?.notice??"").trim(),x={},L="",_=!1,m="",u=0,f=null,T=0,O=null,G=1,Y="",ae="",de="",te="",ue=!1,J=!1,H={},Q="",ge=0,Ue=null,ye=0,z=null,ve=null,B=null,Z=null,ke=!1;const W=Wn();function S(g){if(g.key==="Escape"){if(W.isOpen()){g.preventDefault(),W.close(!0);return}O&&(g.preventDefault(),et())}}function F(g){const q=e.querySelector('[data-role="mode-seg"]'),pe=q?.querySelector(".au-mode-indicator"),Ee=q?.querySelector('.au-mode-tab[aria-selected="true"]');!pe||!Ee||(pe.style.transition=g?"":"none",pe.style.transform=`translateX(${Ee.offsetLeft}px)`,pe.style.width=`${Ee.offsetWidth}px`,g||(pe.offsetWidth,pe.style.transition=""))}function P(){F(!1)}function b(){u=0,f!==null&&(window.clearInterval(f),f=null)}function C(){ge=0,Ue!==null&&(window.clearInterval(Ue),Ue=null)}function ne(){ve?.(),ve=null,B?.(),B=null}function xe(){ke=!0,Z?.(),Z=null,ne(),W.destroy(),b(),C(),document.removeEventListener("keydown",S),window.removeEventListener("resize",P),e.classList.remove("bare-login"),Da.get(e)===xe&&Da.delete(e)}document.addEventListener("keydown",S),window.addEventListener("resize",P),Da.set(e,xe);function Je(g=60){b(),u=g,f=window.setInterval(()=>{u-=1,u<=0&&b();const q=e.querySelector('[data-act="send-sms"]');q&&(q.disabled=u>0,q.textContent=u>0?`${u} 秒后重发`:m?"重新获取":"获取验证码")},1e3)}function st(g=60){C(),ge=g,Ue=window.setInterval(()=>{ge-=1,ge<=0&&C();const q=e.querySelector('[data-act="reset-resend"]');q&&(q.disabled=ge>0||J,q.textContent=ge>0?`${ge} 秒后重发`:"重新获取")},1e3)}function Ve(g){w=g.trim();const q=e.querySelector('[data-role="login-notice"]');if(!w){q?.remove();return}if(q){const Ee=q.querySelector("span");Ee&&(Ee.textContent=w);return}const pe=e.querySelector(".au-h1");pe&&pe.insertAdjacentHTML("afterend",`<div class="au-notice-soft au-login-notice" data-role="login-notice" role="status">${Na}<span>${n(w)}</span></div>`)}function ie(){const g=e.querySelector("#au-login-ferr");if(g)if(L){g.hidden=!1;const q=g.querySelector('[data-role="ferr-text"]');q&&(q.textContent=L)}else g.hidden=!0}function j(g){const q=e.querySelector(`.au-field[data-f="${g}"]`),pe=e.querySelector(`#au-${g}`),Ee=e.querySelector(`#au-${g}-err`),at=x[g]??"";q?.classList.toggle("bad",!!at),pe?.setAttribute("aria-invalid",at?"true":"false"),Ee&&(Ee.textContent=at)}function M(g,q){const pe=g.querySelector(`.au-field[data-f="${q}"]`),Ee=g.querySelector(`#au-${q}`),at=g.querySelector(`#au-${q}-err`),Qe=H[q]??"";pe?.classList.toggle("bad",!!Qe),Ee?.setAttribute("aria-invalid",Qe?"true":"false"),at&&(at.textContent=Qe)}function oe(g){const q=g.querySelector("#au-rs-ferr");if(q)if(Q){q.hidden=!1;const pe=q.querySelector('[data-role="rs-ferr-text"]');pe&&(pe.textContent=Q)}else q.hidden=!0}function fe(){const g=e.querySelector('form[data-form="login"] fieldset'),q=e.querySelector('form[data-form="login"] button[type="submit"]');g&&(g.disabled=_),q&&(q.disabled=_,q.innerHTML=_?'<span class="au-spinner" aria-hidden="true"></span><span>正在登录…</span>':"<span>登录</span>")}function $e(g,q){W.close(!1),z=q??(document.activeElement instanceof HTMLElement?document.activeElement:null),O=g,_e(),g==="reset"?e.querySelector(G===1?"#au-rs_id":"#au-rs_code")?.focus():e.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function et(g=!0){if(!O)return;W.close(!1),O=null,ye+=1,J=!1,C(),ne(),_e();const q=z;z=null,g&&q&&document.contains(q)&&q.focus({preventScroll:!0})}function rt(g){const q=g?"au-account-scrim is-no-anim":"au-account-scrim";if(G===1){const Ee=Y.trim().length>0&&!J;return`
        <div class="${q}" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Va}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码。</p>
              <form id="au-reset-form" novalidate>
                <fieldset ${J?"disabled":""}>
                  <div class="au-field ${H.rs_id?"bad":""}" data-f="rs_id">
                    <div class="au-lab"><label for="au-rs_id">电子邮箱或手机号码</label></div>
                    <div class="au-ctl">
                      <input id="au-rs_id" name="rs_id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(Y)}" aria-invalid="${H.rs_id?"true":"false"}" />
                    </div>
                    <p class="au-err" id="au-rs_id-err" aria-live="polite">${n(H.rs_id??"")}</p>
                  </div>
                  <div class="au-ferr" id="au-rs-ferr" role="alert" ${Q?"":"hidden"}>
                    ${Ut}
                    <span data-role="rs-ferr-text">${n(Q)}</span>
                  </div>
                </fieldset>
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary" data-role="reset-submit" ${Ee?"":"disabled"}>
                ${J?'<span class="au-spinner" aria-hidden="true"></span><span>发送中…</span>':"<span>发送验证码</span>"}
              </button>
            </div>
          </section>
        </div>
      `}return`
      <div class="${q}" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">重置密码</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Va}</button>
          </div>
          <div class="db">
            <div class="au-notice-soft au-reset-step-notice" role="status" aria-live="polite">
              <span class="au-notice-main">${Na}<span>如该账户已注册，验证码已发送至 ${n(ae)}</span></span>
              <button type="button" class="au-notice-action" data-act="reset-back-step1" ${J?"disabled":""}>更换账户</button>
            </div>
            <form id="au-reset-confirm-form" novalidate>
              <fieldset ${J?"disabled":""}>
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
                    <input id="au-rs_code" name="rs_code" class="au-in has-code-btn" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(de)}" aria-invalid="${H.rs_code?"true":"false"}" />
                    <button type="button" class="au-suffix au-getcode" data-act="reset-resend" ${ge>0||J?"disabled":""}>
                      ${ge>0?`${ge} 秒后重发`:"重新获取"}
                    </button>
                  </div>
                  <p class="au-err" id="au-rs_code-err" aria-live="polite">${n(H.rs_code??"")}</p>
                </div>

                <div class="au-field ${H.rs_pwd?"bad":""}" data-f="rs_pwd">
                  <div class="au-lab">
                    <span class="au-lab-group">
                      <label for="au-rs_pwd">设置新密码</label>
                      ${ba("au-rs-pwd-info","设置新密码说明",rn)}
                    </span>
                  </div>
                  <div class="au-ctl">
                    <input id="au-rs_pwd" name="rs_pwd" class="au-in has-suffix" type="${ue?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(te)}" aria-invalid="${H.rs_pwd?"true":"false"}" />
                    <button type="button" class="au-suffix au-eye" data-act="reset-toggle-eye" aria-controls="au-rs_pwd" aria-label="${ue?"隐藏密码":"显示密码"}">
                      ${ue?Wt:Ht}
                    </button>
                  </div>
                  <p class="au-err" id="au-rs_pwd-err" aria-live="polite">${n(H.rs_pwd??"")}</p>
                </div>

                <div class="au-ferr" id="au-rs-ferr" role="alert" ${Q?"":"hidden"}>
                  ${Ut}
                  <span data-role="rs-ferr-text">${n(Q)}</span>
                </div>
              </fieldset>
            </form>
          </div>
          <div class="df">
            <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
            <button type="submit" form="au-reset-confirm-form" class="au-dlg-btn au-dlg-btn--primary" data-role="reset-confirm" ${J?"disabled":""}>
              ${J?'<span class="au-spinner" aria-hidden="true"></span><span>正在重置…</span>':"<span>确认重置</span>"}
            </button>
          </div>
        </section>
      </div>
    `}function Le(g){return O?O==="reset"?rt(g):O==="contact"?Qn():"":""}function _e(){const g=e.querySelector('[data-role="modal-host"]');if(!g)return;const q=g.childElementCount>0;if(ne(),W.close(!1),g.innerHTML=Le(q),!O)return;W.bind(g),ve=Yn(g.querySelector(".au-account-dlg")),B=Jn(g),g.querySelectorAll('[data-act="close-modal"]').forEach(Xe=>{Xe.addEventListener("click",()=>et())}),g.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",Xe=>{Xe.target===Xe.currentTarget&&et()});const pe=g.querySelector("#au-rs_id"),Ee=g.querySelector('[data-role="reset-submit"]');pe?.addEventListener("input",()=>{Y=pe.value,Ee&&(Ee.disabled=Y.trim().length===0||J),(H.rs_id||Q)&&(delete H.rs_id,Q="",M(g,"rs_id"),oe(g))}),g.querySelector("#au-reset-form")?.addEventListener("submit",async Xe=>{if(Xe.preventDefault(),J)return;H={},Q="";const He=pt(pe?.value??Y);Y=He;const Me=Ua(He);if(Me){H.rs_id=Me,M(g,"rs_id"),pe?.focus({preventScroll:!0});return}const Ge=++ye;J=!0,_e();try{const vt=await t.sendVerificationCode({target:He,purpose:"reset"});if(ke||O!=="reset"||Ge!==ye)return;J=!1,ae=vt.maskedTarget||Vt(He),de="",te="",H={},Q="",G=2,st(vt.cooldownSeconds||60),_e(),e.querySelector("#au-rs_code")?.focus({preventScroll:!0})}catch(vt){if(ke||O!=="reset"||Ge!==ye)return;J=!1,Q=vt instanceof Error?vt.message:"暂时无法发送验证码，请稍后再试。",_e(),e.querySelector("#au-rs_id")?.focus({preventScroll:!0})}}),g.querySelector('[data-act="reset-back-step1"]')?.addEventListener("click",()=>{J||(ye+=1,C(),G=1,de="",te="",H={},Q="",_e(),e.querySelector("#au-rs_id")?.focus({preventScroll:!0}))});const at=g.querySelector("#au-rs_code"),Qe=g.querySelector("#au-rs_pwd");at?.addEventListener("input",()=>{de=at.value.replace(/\D/g,"").slice(0,6),at.value=de,(H.rs_code||Q)&&(delete H.rs_code,Q="",M(g,"rs_code"),oe(g))}),Qe?.addEventListener("input",()=>{te=Qe.value,(H.rs_pwd||Q)&&(delete H.rs_pwd,Q="",M(g,"rs_pwd"),oe(g))}),g.querySelector('[data-act="reset-toggle-eye"]')?.addEventListener("click",Xe=>{ue=!ue;const He=Xe.currentTarget;if(Qe){const Me=Qe.selectionStart,Ge=Qe.selectionEnd;Qe.type=ue?"text":"password",Qe.focus({preventScroll:!0}),Me!==null&&Ge!==null&&Qe.setSelectionRange(Me,Ge)}He.setAttribute("aria-label",ue?"隐藏密码":"显示密码"),He.innerHTML=ue?Wt:Ht}),g.querySelector('[data-act="reset-resend"]')?.addEventListener("click",async()=>{if(ge>0||J)return;const Xe=pt(Y),He=++ye,Me=g.querySelector('[data-act="reset-resend"]');Me&&(Me.disabled=!0,Me.textContent="发送中…"),Q="",oe(g);try{const Ge=await t.sendVerificationCode({target:Xe,purpose:"reset"});if(ke||O!=="reset"||G!==2||He!==ye)return;ae=Ge.maskedTarget||Vt(Xe),st(Ge.cooldownSeconds||60),Me&&(Me.disabled=!0,Me.textContent=`${ge} 秒后重发`),at?.focus({preventScroll:!0})}catch(Ge){if(ke||O!=="reset"||G!==2||He!==ye)return;Me&&(Me.disabled=!1,Me.textContent="重新获取"),Q=Ge instanceof Error?Ge.message:"暂时无法发送验证码，请稍后再试。",oe(g)}}),g.querySelector("#au-reset-confirm-form")?.addEventListener("submit",async Xe=>{if(Xe.preventDefault(),J)return;H={},Q="",/^\d{6}$/.test(de.trim())||(H.rs_code="请输入 6 位验证码");const He=ln(te);if(He&&(H.rs_pwd=He),M(g,"rs_code"),M(g,"rs_pwd"),oe(g),Object.keys(H).length>0){const Ge=Object.keys(H)[0];g.querySelector(`#au-${Ge}`)?.focus({preventScroll:!0});return}const Me=pt(Y);J=!0,_e();try{if(await t.confirmPasswordReset({account:Me,verificationCode:de.trim(),newPassword:te}),ke)return;et(!1),c=Me,y="",on(Me)&&(p=Me),L="",x={},o?qe("password",!1):(Te(),ie()),Ve("密码已重置，请使用新密码登录"),e.querySelector("#au-pwd")?.focus({preventScroll:!0})}catch(Ge){if(ke||O!=="reset")return;J=!1,Q=Ge instanceof Error?Ge.message:"验证码不正确或已过期，请检查后重试。",_e(),e.querySelector("#au-rs_code")?.focus({preventScroll:!0})}})}function Te(){W.close(!1);const g=`
      <span data-role="login-novcode-wrap" ${m?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-login-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-login-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-login-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `,q=o?`
        <div class="au-field ${x.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(p)}" aria-invalid="${x.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${u>0?"disabled":""}>
              ${u>0?`${u} 秒后重发`:m?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${n(x.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${m?`验证码已发送至 ${n(m)}`:""}</p>
        </div>
      `:`
        <div class="au-field ${x.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(c)}" aria-invalid="${x.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${n(x.id??"")}</p>
        </div>
      `,pe=o?`
        <div class="au-field ${x.scode?"bad":""}" data-f="scode">
          <div class="au-lab">
            <label for="au-scode">短信验证码</label>
            ${g}
          </div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(v)}" aria-invalid="${x.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${n(x.scode??"")}</p>
        </div>
      `:`
        <div class="au-field ${x.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab">
            <label for="au-pwd">密码</label>
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${i?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(y)}" aria-invalid="${x.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${i?"隐藏密码":"显示密码"}">
              ${i?Wt:Ht}
            </button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${n(x.pwd??"")}</p>
        </div>
      `,Ee=e.querySelector('[data-role="fields-host"]');Ee&&(Ee.innerHTML=`${q}${pe}`,ot(Ee))}function qe(g,q=!1){const pe=g==="sms";o===pe||_||(pe&&!p.trim()&&on(c)?p=c.trim():!pe&&!c.trim()&&p.trim()&&(c=p.trim()),o=pe,x={},L="",e.querySelectorAll('[data-act="switch-mode"]').forEach(Ee=>{const at=Ee.dataset.mode===g;Ee.setAttribute("aria-selected",String(at)),Ee.tabIndex=at?0:-1,at&&q&&Ee.focus({preventScroll:!0})}),F(!0),Te(),ie(),q||(o?m?e.querySelector("#au-scode")?.focus({preventScroll:!0}):p.trim()?e.querySelector('[data-act="send-sms"]')?.focus({preventScroll:!0}):e.querySelector("#au-sphone")?.focus({preventScroll:!0}):e.querySelector(c.trim()?"#au-pwd":"#au-id")?.focus({preventScroll:!0})))}function ot(g){W.bind(g);const q=g.querySelector("#au-id"),pe=g.querySelector("#au-pwd"),Ee=g.querySelector("#au-sphone"),at=g.querySelector("#au-scode");q?.addEventListener("input",()=>{c=q.value,(x.id||L)&&(delete x.id,L="",j("id"),ie())}),pe?.addEventListener("input",()=>{y=pe.value,(x.pwd||L)&&(delete x.pwd,L="",j("pwd"),ie())}),Ee?.addEventListener("input",()=>{if(p=Ee.value,T+=1,m||u>0){m="",b();const Qe=g.querySelector("#au-sphone-hint");Qe&&(Qe.textContent="");const Xe=g.querySelector('[data-role="login-novcode-wrap"]');Xe&&(Xe.hidden=!0),W.close(!1);const He=g.querySelector('[data-act="send-sms"]');He&&(He.disabled=!1,He.textContent="获取验证码")}(x.sphone||L)&&(delete x.sphone,L="",j("sphone"),ie())}),at?.addEventListener("input",()=>{v=at.value.replace(/\D/g,"").slice(0,6),at.value=v,(x.scode||L)&&(delete x.scode,L="",j("scode"),ie())}),g.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",Qe=>{i=!i;const Xe=Qe.currentTarget,He=g.querySelector("#au-pwd");if(He){const Me=He.selectionStart,Ge=He.selectionEnd;He.type=i?"text":"password",He.focus({preventScroll:!0}),Me!==null&&Ge!==null&&He.setSelectionRange(Me,Ge)}Xe.setAttribute("aria-label",i?"隐藏密码":"显示密码"),Xe.innerHTML=i?Wt:Ht}),g.querySelector('[data-act="send-sms"]')?.addEventListener("click",async()=>{const Qe=Nt(p);if(Qe){x={...x,sphone:Qe},j("sphone"),g.querySelector("#au-sphone")?.focus({preventScroll:!0});return}delete x.sphone,j("sphone");const Xe=pt(p),He=++T,Me=g.querySelector('[data-act="send-sms"]');Me&&(Me.disabled=!0,Me.textContent="发送中…");try{const Ge=await t.sendVerificationCode({target:Xe,purpose:"login"});if(ke||He!==T||pt(p)!==Xe)return;m=Ge.maskedTarget||Vt(Xe);const vt=g.querySelector("#au-sphone-hint");vt&&(vt.textContent=`验证码已发送至 ${m}`);const Et=g.querySelector('[data-role="login-novcode-wrap"]');Et&&(Et.hidden=!1),Je(Ge.cooldownSeconds||60),Me&&(Me.disabled=!0,Me.textContent=`${u} 秒后重发`),g.querySelector("#au-scode")?.focus({preventScroll:!0})}catch(Ge){if(ke||He!==T||pt(p)!==Xe)return;Me&&(Me.disabled=!1,Me.textContent=m?"重新获取":"获取验证码"),L=Ge instanceof Error?Ge.message:"暂时无法发送验证码，请稍后再试。",ie()}}),g.querySelector('[data-act="open-reset"]')?.addEventListener("click",Qe=>{G=1,Y=(o?p:c).trim(),ae="",de="",te="",ue=!1,J=!1,H={},Q="",C(),$e("reset",Qe.currentTarget)})}e.innerHTML=`
    <div class="au au-split">
      <section class="au-left">
        <div class="au-center">
          <main class="au-group">
            <div class="au-logo">${Zn}</div>
            <h1 class="au-h1">登录</h1>
            ${w?`<div class="au-notice-soft au-login-notice" data-role="login-notice" role="status">${Na}<span>${n(w)}</span></div>`:""}
            <div class="au-mode-seg" role="tablist" aria-label="登录方式" data-role="mode-seg">
              <span class="au-mode-indicator" aria-hidden="true"></span>
              <button type="button" role="tab" aria-selected="true" tabindex="0" class="au-mode-tab" data-act="switch-mode" data-mode="password">密码登录</button>
              <button type="button" role="tab" aria-selected="false" tabindex="-1" class="au-mode-tab" data-act="switch-mode" data-mode="sms">短信登录</button>
            </div>
            <form data-form="login" novalidate>
              <fieldset>
                <div data-role="fields-host"></div>
                <div class="au-ferr" id="au-login-ferr" role="alert" hidden>
                  ${Ut}
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
        ${Gn()}
      </section>
      <aside class="au-art" aria-hidden="true">
        <div class="au-art-frame">
          <img src="./media/auth-hero.jpg" alt="" />
        </div>
      </aside>
    </div>
    <div data-role="modal-host"></div>
  `,e.querySelector('input[name="keep"]')?.addEventListener("change",g=>{h=g.currentTarget.checked}),e.querySelector('form[data-form="login"]')?.addEventListener("submit",async g=>{if(g.preventDefault(),!_){if(x={},L="",o){const q=Nt(p);q&&(x.sphone=q),/^\d{6}$/.test(v.trim())||(x.scode="请输入 6 位验证码"),j("sphone"),j("scode")}else c.trim()||(x.id="请输入电子邮箱或手机号码"),y||(x.pwd="请输入密码"),j("id"),j("pwd");if(ie(),Object.keys(x).length>0){const q=Object.keys(x)[0];e.querySelector(`#au-${q}`)?.focus({preventScroll:!0});return}_=!0,fe();try{const q=await t.login({method:o?"sms":"password",account:pt(o?p:c),...o?{smsCode:v.trim()}:{password:y},rememberMe:h});if(ke)return;xe(),a(q)}catch(q){if(ke)return;_=!1,L=q instanceof Error?q.message:o?"验证码不正确或已过期":"账户或密码不正确",fe(),ie()}}}),e.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{s?.onOpenRegister?(xe(),s.onOpenRegister()):window.location.hash="#register"}),e.querySelectorAll('[data-act="switch-mode"]').forEach(g=>{g.addEventListener("click",()=>{const q=g.dataset.mode;q&&qe(q,!1)}),g.addEventListener("keydown",q=>{const pe=o?"sms":"password",Ee=Ot.indexOf(pe);q.key==="ArrowRight"?(q.preventDefault(),qe(Ot[(Ee+1)%Ot.length],!0)):q.key==="ArrowLeft"?(q.preventDefault(),qe(Ot[(Ee-1+Ot.length)%Ot.length],!0)):q.key==="Home"?(q.preventDefault(),qe(Ot[0],!0)):q.key==="End"&&(q.preventDefault(),qe(Ot[Ot.length-1],!0))})}),e.querySelector('[data-act="open-contact"]')?.addEventListener("click",g=>{$e("contact",g.currentTarget)}),Te(),F(!1),Z=Kn(e),c.trim()&&e.querySelector("#au-pwd")?.focus({preventScroll:!0}),document.fonts?.ready.then(()=>{ke||F(!1)})}const Tt=["join","apply"],sa=1e3,ga=50,Ra=60,Vn=110,Ca=new WeakMap;function Hn(e){Ca.get(e)?.()}function oo(e,t,a){Ca.get(e)?.(),e.classList.add("bare-login");let s=!1,o=a.initialMode??"join",i=null,c=null,y=null,p=null,v=null,h=a.initialJoinReceipt??null,w=a.initialApplyReceipt??null,x="",L=!1,_=null;const m=(a.inviteToken??"").trim(),u=!!(a.isInviteRoute||m),f=a.currentSession??null;let T=!!(u&&m),O=null,G="",Y="",ae="",de="",te="",ue=0,J=null,H=0,Q="",ge=!1,Ue=!1,ye=yn(a.prefillCode??""),z="",ve=!1,B=0,Z="",ke="",W="",S="",F="",P=!1,b=!1,C="",ne=0,xe=null,Je=0,st="",Ve="",ie="",j="",M="",oe="",fe="",$e="",et="",rt=!1,Le="",_e=0,Te=null,qe=0,ot=null,g={},q="",pe=!1;const Ee=Wn();function at(k){if(k.key==="Escape"){if(Ee.isOpen()){k.preventDefault(),Ee.close(!0);return}i&&(k.preventDefault(),Kt())}}function Qe(k){const N=e.querySelector('[data-role="reg-seg"]'),X=N?.querySelector(".au-mode-indicator"),ee=N?.querySelector('.au-mode-tab[aria-selected="true"]');!X||!ee||(X.style.transition=k?"":"none",X.style.transform=`translateX(${ee.offsetLeft}px)`,X.style.width=`${ee.offsetWidth}px`,k||(X.offsetWidth,X.style.transition=""))}function Xe(){Qe(!1)}function He(){ne=0,xe!==null&&(window.clearInterval(xe),xe=null)}function Me(){_e=0,Te!==null&&(window.clearInterval(Te),Te=null)}function Ge(){ue=0,J!==null&&(window.clearInterval(J),J=null)}function vt(){p?.(),p=null,v?.(),v=null}function Et(){s=!0,_?.(),_=null,vt(),Ee.destroy(),He(),Me(),Ge(),ot!==null&&(window.clearTimeout(ot),ot=null),document.removeEventListener("keydown",at),window.removeEventListener("resize",Xe),e.classList.remove("bare-login"),Ca.get(e)===Et&&Ca.delete(e)}document.addEventListener("keydown",at),window.addEventListener("resize",Xe),Ca.set(e,Et);function wa(k){He(),ne=k,xe=window.setInterval(()=>{ne-=1,ne<=0&&He();const N=e.querySelector('[data-act="jn-send-code"]');N&&(N.disabled=ne>0,N.textContent=ne>0?`${ne} 秒后重发`:C?"重新获取":"获取验证码")},1e3)}function Fa(k){Me(),_e=k,Te=window.setInterval(()=>{_e-=1,_e<=0&&Me();const N=e.querySelector('[data-act="ap-send-code"]');N&&(N.disabled=_e>0,N.textContent=_e>0?`${_e} 秒后重发`:Le?"重新获取":"获取验证码")},1e3)}function Ne(){const k=e.querySelector("#au-reg-ferr");if(k)if(q){k.hidden=!1;const N=k.querySelector('[data-role="ferr-text"]');N&&(N.textContent=q)}else k.hidden=!0}function je(k){const N=e.querySelector(`.au-field[data-f="${k}"]`),X=e.querySelector(`#au-${k}`),ee=e.querySelector(`#au-${k}-err`),he=g[k]??"";N?.classList.toggle("bad",!!he),X?.setAttribute("aria-invalid",he?"true":"false"),ee&&(ee.textContent=he)}function ut(k,N){const X=e.querySelector("form[data-reg-form] fieldset"),ee=e.querySelector('form[data-reg-form] button[type="submit"]');X&&(X.disabled=pe),ee&&(ee.disabled=pe,ee.innerHTML=pe?`<span class="au-spinner" aria-hidden="true"></span><span>${n(k)}</span>`:`<span>${n(N)}</span>`)}function Bt(k,N){Ee.close(!1),c=N??(document.activeElement instanceof HTMLElement?document.activeElement:null),i=k,bt(),e.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function Kt(){if(!i)return;i=null,y=null,vt(),bt();const k=c;c=null,k&&document.contains(k)&&k.focus({preventScroll:!0})}function gt(){return`
      <div class="au-account-scrim" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="alertdialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">请阅读并同意</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Va}</button>
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
    `}function We(){return`
      <div class="au-account-scrim" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="alertdialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">撤回加入申请</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${Va}</button>
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
    `}function bt(){const k=e.querySelector('[data-role="modal-host"]');if(k){if(vt(),!i){k.innerHTML="";return}k.innerHTML=i==="contact"?Qn():i==="withdraw_confirm"?We():gt(),p=Yn(k.querySelector(".au-account-dlg")),v=Jn(k),k.querySelectorAll('[data-act="close-modal"]').forEach(N=>{N.addEventListener("click",()=>Kt())}),k.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",N=>{N.target===N.currentTarget&&Kt()}),k.querySelector('[data-act="consent-confirm"]')?.addEventListener("click",()=>{const N=y;y=null,i=null,vt(),bt(),N?.()}),k.querySelector('[data-act="withdraw-confirm"]')?.addEventListener("click",async()=>{if(!(!h||!t.withdrawJoinApplication||L)){i=null,vt(),bt(),L=!0,q="",wt();try{if(await t.withdrawJoinApplication(h.requestId,h.withdrawToken),s)return;L=!1,h=null,S="",C="",Je+=1,He(),x="申请已撤回，修改信息并重新验证后即可再次提交。",wt()}catch(N){if(s)return;L=!1,q=N instanceof Error?N.message:"暂时无法撤回申请，请稍后再试。",wt()}}})}}function Rt(k,N,X,ee){return`
      <div class="au-field au-consent-field ${g[ee]?"bad":""}" data-f="${ee}">
        <div class="au-check au-consent-row">
          <input id="${k}" type="checkbox" name="${N}" ${X?"checked":""} aria-invalid="${g[ee]?"true":"false"}" />
          <span class="au-consent-text">
            <label class="au-consent-label" for="${k}">我已阅读并同意 PACOM </label><a class="au-consent-link" href="${Oa}" target="_blank" rel="noopener noreferrer">隐私政策</a><label class="au-consent-label" for="${k}">和</label><a class="au-consent-link" href="${Oa}" target="_blank" rel="noopener noreferrer">使用条款</a>
          </span>
        </div>
        <p class="au-err" id="au-${ee}-err" aria-live="polite">${n(g[ee]??"")}</p>
      </div>
    `}async function Yt(k){const N=k.replace(/\D/g,"");if(N.length!==9){z="",ve=!1,Lt();return}const X=++B;ve=!0,z="",Lt();try{const ee=await t.resolveInviteCode(N);if(s||X!==B)return;ve=!1,ee.valid&&ee.organizationName?(z=ee.organizationName,delete g.jn_code):(z="",g.jn_code=ee.message??"邀请码不正确或已失效，请向机构管理员确认。"),je("jn_code"),Lt()}catch(ee){if(s||X!==B)return;ve=!1,z="",g.jn_code=ee instanceof Error?ee.message:"暂时无法核验邀请码，请稍后再试。",je("jn_code"),Lt()}}function Lt(){const k=e.querySelector('[data-role="jn-code-match"]'),N=e.querySelector('[data-role="jn-nocode-wrap"]');k&&(z?(k.hidden=!1,k.innerHTML=`${Sn}<span>目标机构：${n(z)}</span>`):(k.hidden=!0,k.innerHTML="")),N&&(N.hidden=!!z)}function ia(){const k=`
      <span data-role="jn-nocode-wrap" ${z?"hidden":""}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-nocode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-nocode-pop"><span>没有邀请码？</span></button>
        <span id="au-jn-nocode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="没有邀请码说明" hidden>
          <span class="ws-info-text">请向所在机构的管理员获取 9 位邀请码；如需为新企业开通，请切换上方「申请开通机构」。</span>
        </span>
      </span>
    `,N=`
      <span data-role="jn-novcode-wrap" ${C?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-jn-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认邮箱或手机号码无误，检查垃圾邮件或短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">填写机构 9 位邀请码，管理员批准后即可访问。</p>
      ${x?`<div class="au-notice-soft au-form-notice" data-role="jn-form-notice" role="status">${Na}<span>${n(x)}</span></div>`:""}
      <form class="au-reg-form" data-reg-form="join" novalidate>
        <fieldset ${pe?"disabled":""}>
          <div class="au-field ${g.jn_code?"bad":""}" data-f="jn_code">
            <div class="au-lab">
              <label for="au-jn_code">机构邀请码</label>
              ${k}
            </div>
            <div class="au-ctl">
              <input id="au-jn_code" name="jn_code" class="au-in" type="text" inputmode="numeric" autocomplete="off" maxlength="11" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(ye)}" aria-invalid="${g.jn_code?"true":"false"}" />
            </div>
            <div class="au-code-match" data-role="jn-code-match" role="status" aria-live="polite" ${z?"":"hidden"}>
              ${z?`${Sn}<span>目标机构：${n(z)}</span>`:""}
            </div>
            <p class="au-err" id="au-jn_code-err" aria-live="polite">${n(g.jn_code??"")}</p>
          </div>

          <div class="au-field ${g.jn_name?"bad":""}" data-f="jn_name">
            <div class="au-lab"><label for="au-jn_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-jn_name" name="jn_name" class="au-in" type="text" autocomplete="name" value="${n(Z)}" aria-invalid="${g.jn_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_name-err" aria-live="polite">${n(g.jn_name??"")}</p>
          </div>

          <div class="au-field ${g.jn_dept?"bad":""}" data-f="jn_dept">
            <div class="au-lab"><label for="au-jn_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-jn_dept" name="jn_dept" class="au-in" type="text" autocomplete="organization-title" value="${n(ke)}" aria-invalid="${g.jn_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_dept-err" aria-live="polite">${n(g.jn_dept??"")}</p>
          </div>

          <div class="au-field ${g.jn_account?"bad":""}" data-f="jn_account">
            <div class="au-lab"><label for="au-jn_account">电子邮箱或手机号码</label></div>
            <div class="au-ctl">
              <input id="au-jn_account" name="jn_account" class="au-in has-code-btn" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(W)}" aria-invalid="${g.jn_account?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="jn-send-code" ${ne>0?"disabled":""}>
                ${ne>0?`${ne} 秒后重发`:C?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-jn_account-err" aria-live="polite">${n(g.jn_account??"")}</p>
            <p class="au-hint" id="au-jn_account-hint" role="status" aria-live="polite">${C?`验证码已发送至 ${n(C)}`:""}</p>
          </div>

          <div class="au-field ${g.jn_vcode?"bad":""}" data-f="jn_vcode">
            <div class="au-lab">
              <label for="au-jn_vcode">验证码</label>
              ${N}
            </div>
            <div class="au-ctl">
              <input id="au-jn_vcode" name="jn_vcode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(S)}" aria-invalid="${g.jn_vcode?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_vcode-err" aria-live="polite">${n(g.jn_vcode??"")}</p>
          </div>

          <div class="au-field ${g.jn_pwd?"bad":""}" data-f="jn_pwd">
            <div class="au-lab">
              <span class="au-lab-group">
                <label for="au-jn_pwd">设置密码</label>
                ${ba("au-jn-pwd-info","设置密码说明",rn)}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-jn_pwd" name="jn_pwd" class="au-in has-suffix" type="${P?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(F)}" aria-invalid="${g.jn_pwd?"true":"false"}" />
              <button type="button" class="au-suffix au-eye" data-act="jn-toggle-eye" aria-controls="au-jn_pwd" aria-label="${P?"隐藏密码":"显示密码"}">
                ${P?Wt:Ht}
              </button>
            </div>
            <p class="au-err" id="au-jn_pwd-err" aria-live="polite">${n(g.jn_pwd??"")}</p>
          </div>

          ${Rt("au-jn_consent","jn_consent",b,"jn_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${q?"":"hidden"}>
            ${Ut}
            <span data-role="ferr-text">${n(q)}</span>
          </div>

          <button type="submit" class="au-primary" ${pe?"disabled":""}>
            ${pe?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>注册并申请加入</span>"}
          </button>
        </fieldset>
      </form>
    `}function la(){const k=En(Ve),N=Mt(et),X=N>=sa*.8?`${N} / ${sa}`:"",ee=`
      <span data-role="ap-novcode-wrap" ${Le?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-ap-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-ap-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-ap-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">提交企业信息，经 PACOM 审核通过后开通机构。</p>
      <form class="au-reg-form" data-reg-form="apply" novalidate>
        <fieldset ${pe?"disabled":""}>
          <div class="au-field ${g.ap_org?"bad":""}" data-f="ap_org">
            <div class="au-lab">
              <span class="au-lab-group">
                <label for="au-ap_org">机构名称</label>
                ${ba("au-ap-org-info","机构名称说明",["请填写营业执照等登记证书上的完整名称。"])}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-ap_org" name="ap_org" class="au-in" type="text" autocomplete="organization" value="${n(st)}" aria-invalid="${g.ap_org?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_org-err" aria-live="polite">${n(g.ap_org??"")}</p>
          </div>

          <div class="au-field ${g.ap_region?"bad":""}" data-f="ap_region">
            <div class="au-lab"><label for="au-ap_prov">所在地区</label></div>
            <div class="au-row-eq">
              <div class="au-select-wrap">
                <select id="au-ap_prov" name="ap_prov" class="au-select ${Ve?"":"is-placeholder"}" aria-label="省份" aria-invalid="${g.ap_region?"true":"false"}">
                  <option value="" ${Ve?"":"selected"}>省份</option>
                  ${bs.map(([he])=>`<option value="${n(he)}" ${Ve===he?"selected":""}>${n(he)}</option>`).join("")}
                </select>
                ${xn}
              </div>
              <div class="au-select-wrap">
                <select id="au-ap_city" name="ap_city" class="au-select ${ie?"":"is-placeholder"}" aria-label="城市" ${Ve?"":"disabled"} aria-invalid="${g.ap_region?"true":"false"}">
                  <option value="" ${ie?"":"selected"}>城市</option>
                  ${k.map(he=>`<option value="${n(he)}" ${ie===he?"selected":""}>${n(he)}</option>`).join("")}
                </select>
                ${xn}
              </div>
            </div>
            <p class="au-err" id="au-ap_region-err" aria-live="polite">${n(g.ap_region??"")}</p>
          </div>

          <div class="au-field ${g.ap_name?"bad":""}" data-f="ap_name">
            <div class="au-lab"><label for="au-ap_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-ap_name" name="ap_name" class="au-in" type="text" autocomplete="name" value="${n(j)}" aria-invalid="${g.ap_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_name-err" aria-live="polite">${n(g.ap_name??"")}</p>
          </div>

          <div class="au-field ${g.ap_dept?"bad":""}" data-f="ap_dept">
            <div class="au-lab"><label for="au-ap_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-ap_dept" name="ap_dept" class="au-in" type="text" autocomplete="organization-title" value="${n(M)}" aria-invalid="${g.ap_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_dept-err" aria-live="polite">${n(g.ap_dept??"")}</p>
          </div>

          <div class="au-field ${g.ap_email?"bad":""}" data-f="ap_email">
            <div class="au-lab">
              <span class="au-lab-group">
                <label for="au-ap_email">电子邮箱</label>
                ${ba("au-ap-email-info","电子邮箱说明",["审核结果与机构开通链接将发送至此邮箱，请填写常用工作邮箱。"])}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-ap_email" name="ap_email" class="au-in" type="email" inputmode="email" autocomplete="email" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(oe)}" aria-invalid="${g.ap_email?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_email-err" aria-live="polite">${n(g.ap_email??"")}</p>
          </div>

          <div class="au-field ${g.ap_phone?"bad":""}" data-f="ap_phone">
            <div class="au-lab"><label for="au-ap_phone">手机号码</label></div>
            <div class="au-ctl">
              <input id="au-ap_phone" name="ap_phone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(fe)}" aria-invalid="${g.ap_phone?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="ap-send-code" ${_e>0?"disabled":""}>
                ${_e>0?`${_e} 秒后重发`:Le?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-ap_phone-err" aria-live="polite">${n(g.ap_phone??"")}</p>
            <p class="au-hint" id="au-ap_phone-hint" role="status" aria-live="polite">${Le?`验证码已发送至 ${n(Le)}`:""}</p>
          </div>

          <div class="au-field ${g.ap_sms?"bad":""}" data-f="ap_sms">
            <div class="au-lab">
              <label for="au-ap_sms">短信验证码</label>
              ${ee}
            </div>
            <div class="au-ctl">
              <input id="au-ap_sms" name="ap_sms" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n($e)}" aria-invalid="${g.ap_sms?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_sms-err" aria-live="polite">${n(g.ap_sms??"")}</p>
          </div>

          <div class="au-field ${g.ap_overview?"bad":""}" data-f="ap_overview">
            <div class="au-lab"><label for="au-ap_overview">项目概况<span class="fld-opt">选填</span></label></div>
            <div class="ws-textarea-shell au-note-shell">
              <textarea id="au-ap_overview" name="ap_overview" class="au-in au-ta au-ta-std" rows="3" aria-invalid="${g.ap_overview?"true":"false"}">${n(et)}</textarea>
              <button type="button" class="ws-resize" data-space-resize="au-ap_overview" aria-label="调整项目概况输入框高度；按上下方向键调整"></button>
            </div>
            <p class="au-err" id="au-ap_overview-err" aria-live="polite">${n(g.ap_overview??"")}</p>
            <p class="au-hint au-char-count" id="au-ap_overview-count" ${X?"":"hidden"}>${n(X)}</p>
          </div>

          ${Rt("au-ap_consent","ap_consent",rt,"ap_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${q?"":"hidden"}>
            ${Ut}
            <span data-role="ferr-text">${n(q)}</span>
          </div>

          <button type="submit" class="au-primary" ${pe?"disabled":""}>
            ${pe?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>提交开通申请</span>"}
          </button>
        </fieldset>
      </form>
    `}async function ra(){const k=Ua(W);if(k){g.jn_account=k,je("jn_account"),e.querySelector("#au-jn_account")?.focus({preventScroll:!0});return}delete g.jn_account,je("jn_account");const N=pt(W),X=++Je,ee=e.querySelector('[data-act="jn-send-code"]');ee&&(ee.disabled=!0,ee.textContent="发送中…");try{const he=await t.sendVerificationCode({target:N,purpose:"register_join",consentAcceptedAt:new Date().toISOString()});if(s||X!==Je||pt(W)!==N)return;C=he.maskedTarget||Vt(N);const Be=e.querySelector("#au-jn_account-hint");Be&&(Be.textContent=`验证码已发送至 ${C}`);const Ze=e.querySelector('[data-role="jn-novcode-wrap"]');Ze&&(Ze.hidden=!1),wa(he.cooldownSeconds||60),ee&&(ee.disabled=!0,ee.textContent=`${ne} 秒后重发`),e.querySelector("#au-jn_vcode")?.focus({preventScroll:!0})}catch(he){if(s||X!==Je||pt(W)!==N)return;ee&&(ee.disabled=!1,ee.textContent=C?"重新获取":"获取验证码"),q=he instanceof Error?he.message:"暂时无法发送验证码，请稍后再试。",Ne()}}async function Jt(){const k=Nt(fe);if(k){g.ap_phone=k,je("ap_phone"),e.querySelector("#au-ap_phone")?.focus({preventScroll:!0});return}delete g.ap_phone,je("ap_phone");const N=pt(fe),X=++qe,ee=e.querySelector('[data-act="ap-send-code"]');ee&&(ee.disabled=!0,ee.textContent="发送中…");try{const he=await t.sendVerificationCode({target:N,purpose:"org_apply",consentAcceptedAt:new Date().toISOString()});if(s||X!==qe||pt(fe)!==N)return;Le=he.maskedTarget||Vt(N);const Be=e.querySelector("#au-ap_phone-hint");Be&&(Be.textContent=`验证码已发送至 ${Le}`);const Ze=e.querySelector('[data-role="ap-novcode-wrap"]');Ze&&(Ze.hidden=!1),Fa(he.cooldownSeconds||60),ee&&(ee.disabled=!0,ee.textContent=`${_e} 秒后重发`),e.querySelector("#au-ap_sms")?.focus({preventScroll:!0})}catch(he){if(s||X!==qe||pt(fe)!==N)return;ee&&(ee.disabled=!1,ee.textContent=Le?"重新获取":"获取验证码"),q=he instanceof Error?he.message:"暂时无法发送验证码，请稍后再试。",Ne()}}function ca(k){Ee.bind(k);const N=k.querySelector("#au-jn_code"),X=k.querySelector("#au-jn_name"),ee=k.querySelector("#au-jn_dept"),he=k.querySelector("#au-jn_account"),Be=k.querySelector("#au-jn_vcode"),Ze=k.querySelector("#au-jn_pwd"),me=k.querySelector("#au-jn_consent");N?.addEventListener("input",()=>{ye=yn(N.value),N.value=ye,(g.jn_code||q)&&(delete g.jn_code,q="",je("jn_code"),Ne()),Yt(ye)}),X?.addEventListener("input",()=>{Z=X.value,(g.jn_name||q)&&(delete g.jn_name,q="",je("jn_name"),Ne())}),ee?.addEventListener("input",()=>{ke=ee.value,g.jn_dept&&(delete g.jn_dept,je("jn_dept"))}),he?.addEventListener("input",()=>{if(W=he.value,Je+=1,C||ne>0){C="",He();const Ae=k.querySelector("#au-jn_account-hint");Ae&&(Ae.textContent="");const Fe=k.querySelector('[data-role="jn-novcode-wrap"]');Fe&&(Fe.hidden=!0),Ee.close(!1);const le=k.querySelector('[data-act="jn-send-code"]');le&&(le.disabled=!1,le.textContent="获取验证码")}(g.jn_account||q)&&(delete g.jn_account,q="",je("jn_account"),Ne())}),Be?.addEventListener("input",()=>{S=Be.value.replace(/\D/g,"").slice(0,6),Be.value=S,(g.jn_vcode||q)&&(delete g.jn_vcode,q="",je("jn_vcode"),Ne())}),Ze?.addEventListener("input",()=>{F=Ze.value,(g.jn_pwd||q)&&(delete g.jn_pwd,q="",je("jn_pwd"),Ne())}),me?.addEventListener("change",()=>{b=me.checked,b&&g.jn_consent&&(delete g.jn_consent,je("jn_consent"))}),k.querySelector('[data-act="jn-toggle-eye"]')?.addEventListener("click",Ae=>{P=!P;const Fe=Ae.currentTarget;if(Ze){const le=Ze.selectionStart,re=Ze.selectionEnd;Ze.type=P?"text":"password",Ze.focus({preventScroll:!0}),le!==null&&re!==null&&Ze.setSelectionRange(le,re)}Fe.setAttribute("aria-label",P?"隐藏密码":"显示密码"),Fe.innerHTML=P?Wt:Ht}),k.querySelector('[data-act="jn-send-code"]')?.addEventListener("click",Ae=>{const Fe=Ua(W);if(Fe){g.jn_account=Fe,je("jn_account"),he?.focus({preventScroll:!0});return}if(!b){y=()=>{b=!0,me&&(me.checked=!0),delete g.jn_consent,je("jn_consent"),ra()},Bt("consent_ask",Ae.currentTarget);return}ra()}),k.querySelector('form[data-reg-form="join"]')?.addEventListener("submit",async Ae=>{if(Ae.preventDefault(),pe)return;g={},q="",x&&(x="",k.querySelector('[data-role="jn-form-notice"]')?.remove());const Fe=ye.replace(/\D/g,"");if(Fe.length!==9)g.jn_code="请输入 9 位机构邀请码";else if(!z){const Ie=++B;ve=!0;try{const Re=await t.resolveInviteCode(Fe);if(s||Ie!==B)return;ve=!1,Re.valid&&Re.organizationName?(z=Re.organizationName,Lt()):g.jn_code=Re.message??"邀请码不正确或已失效，请向机构管理员确认。"}catch(Re){if(s||Ie!==B)return;ve=!1,g.jn_code=Re instanceof Error?Re.message:"暂时无法核验邀请码，请稍后再试。"}}Z.trim()?Mt(Z.trim())>ga&&(g.jn_name=`姓名不超过 ${ga} 个字`):g.jn_name="请输入姓名",Mt(ke.trim())>Ra&&(g.jn_dept=`部门 / 职务不超过 ${Ra} 个字`);const le=Ua(W);le&&(g.jn_account=le),/^\d{6}$/.test(S.trim())||(g.jn_vcode="请输入 6 位验证码");const re=ln(F);re&&(g.jn_pwd=re),b||(g.jn_consent="请阅读并同意隐私政策和使用条款");for(const Ie of["jn_code","jn_name","jn_dept","jn_account","jn_vcode","jn_pwd","jn_consent"])je(Ie);if(Ne(),Object.keys(g).length>0){const Ie=Object.keys(g)[0];k.querySelector(`#au-${Ie}`)?.focus({preventScroll:!0});return}pe=!0,ut("正在提交…","注册并申请加入");try{if(h=await t.registerAndJoin({inviteCode:Fe,displayName:Z.trim(),departmentTitle:ke.trim()||void 0,account:pt(W),verificationCode:S.trim(),password:F,consentAcceptedAt:new Date().toISOString()}),s)return;pe=!1,wt()}catch(Ie){if(s)return;pe=!1,q=Ie instanceof Error?Ie.message:"暂时无法提交申请，请稍后再试。",ut("正在提交…","注册并申请加入"),Ne()}})}function da(k){Ee.bind(k),hs(k);const N=k.querySelector("#au-ap_org"),X=k.querySelector("#au-ap_prov"),ee=k.querySelector("#au-ap_city"),he=k.querySelector("#au-ap_name"),Be=k.querySelector("#au-ap_dept"),Ze=k.querySelector("#au-ap_email"),me=k.querySelector("#au-ap_phone"),Ae=k.querySelector("#au-ap_sms"),Fe=k.querySelector("#au-ap_overview"),le=k.querySelector("#au-ap_overview-count"),re=k.querySelector("#au-ap_consent");N?.addEventListener("input",()=>{st=N.value,(g.ap_org||q)&&(delete g.ap_org,q="",je("ap_org"),Ne())}),X?.addEventListener("change",()=>{Ve=X.value,X.classList.toggle("is-placeholder",!Ve);const Ie=En(Ve);ie=Ie.length===1?Ie[0]:"",ee&&(ee.disabled=!Ve,ee.innerHTML=`<option value="" ${ie?"":"selected"}>城市</option>`+Ie.map(Re=>`<option value="${n(Re)}" ${ie===Re?"selected":""}>${n(Re)}</option>`).join(""),ee.classList.toggle("is-placeholder",!ie)),Ve&&ie&&g.ap_region&&(delete g.ap_region,je("ap_region"))}),ee?.addEventListener("change",()=>{ie=ee.value,ee.classList.toggle("is-placeholder",!ie),Ve&&ie&&g.ap_region&&(delete g.ap_region,je("ap_region"))}),he?.addEventListener("input",()=>{j=he.value,(g.ap_name||q)&&(delete g.ap_name,q="",je("ap_name"),Ne())}),Be?.addEventListener("input",()=>{M=Be.value,g.ap_dept&&(delete g.ap_dept,je("ap_dept"))}),Ze?.addEventListener("input",()=>{oe=Ze.value,(g.ap_email||q)&&(delete g.ap_email,q="",je("ap_email"),Ne())}),me?.addEventListener("input",()=>{if(fe=me.value,qe+=1,Le||_e>0){Le="",Me();const Ie=k.querySelector("#au-ap_phone-hint");Ie&&(Ie.textContent="");const Re=k.querySelector('[data-role="ap-novcode-wrap"]');Re&&(Re.hidden=!0),Ee.close(!1);const Ke=k.querySelector('[data-act="ap-send-code"]');Ke&&(Ke.disabled=!1,Ke.textContent="获取验证码")}(g.ap_phone||q)&&(delete g.ap_phone,q="",je("ap_phone"),Ne())}),Ae?.addEventListener("input",()=>{$e=Ae.value.replace(/\D/g,"").slice(0,6),Ae.value=$e,(g.ap_sms||q)&&(delete g.ap_sms,q="",je("ap_sms"),Ne())}),Fe?.addEventListener("input",()=>{et=Fe.value;const Ie=Mt(et);le&&(Ie>=sa*.8?(le.textContent=`${Ie} / ${sa}`,le.hidden=!1):le.hidden=!0),g.ap_overview&&Ie<=sa&&(delete g.ap_overview,je("ap_overview"))}),re?.addEventListener("change",()=>{rt=re.checked,rt&&g.ap_consent&&(delete g.ap_consent,je("ap_consent"))}),k.querySelector('[data-act="ap-send-code"]')?.addEventListener("click",Ie=>{const Re=Nt(fe);if(Re){g.ap_phone=Re,je("ap_phone"),me?.focus({preventScroll:!0});return}if(!rt){y=()=>{rt=!0,re&&(re.checked=!0),delete g.ap_consent,je("ap_consent"),Jt()},Bt("consent_ask",Ie.currentTarget);return}Jt()}),k.querySelector('form[data-reg-form="apply"]')?.addEventListener("submit",async Ie=>{if(Ie.preventDefault(),pe)return;g={},q="",st.trim()?Mt(st.trim())>Vn&&(g.ap_org=`机构名称不超过 ${Vn} 个字`):g.ap_org="请输入机构名称",(!Ve||!ie)&&(g.ap_region="请选择所在地区"),j.trim()?Mt(j.trim())>ga&&(g.ap_name=`姓名不超过 ${ga} 个字`):g.ap_name="请输入姓名",Mt(M.trim())>Ra&&(g.ap_dept=`部门 / 职务不超过 ${Ra} 个字`),Ma(oe)||(g.ap_email="请输入有效的电子邮箱");const Re=Nt(fe);Re&&(g.ap_phone=Re),/^\d{6}$/.test($e.trim())||(g.ap_sms="请输入 6 位短信验证码"),Mt(et)>sa&&(g.ap_overview=`项目概况不超过 ${sa} 个字`),rt||(g.ap_consent="请阅读并同意隐私政策和使用条款");for(const Ke of["ap_org","ap_region","ap_name","ap_dept","ap_email","ap_phone","ap_sms","ap_overview","ap_consent"])je(Ke);if(Ne(),Object.keys(g).length>0){const Ke=Object.keys(g)[0],Ea=Ke==="ap_region"?Ve?"au-ap_city":"au-ap_prov":`au-${Ke}`;k.querySelector(`#${Ea}`)?.focus({preventScroll:!0});return}pe=!0,ut("正在提交…","提交开通申请");try{if(w=await t.submitOrgApplication({organizationName:st.trim(),province:Ve,city:ie,contactName:j.trim(),departmentTitle:M.trim()||void 0,email:pt(oe),phone:pt(fe),smsCode:$e.trim(),projectOverview:et.trim()||void 0,consentAcceptedAt:new Date().toISOString()}),s)return;pe=!1,wt()}catch(Ke){if(s)return;pe=!1,q=Ke instanceof Error?Ke.message:"暂时无法提交开通申请，请稍后再试。",ut("正在提交…","提交开通申请"),Ne()}})}function pa(){Ee.close(!1);const k=e.querySelector('[data-role="reg-body-host"]');k&&(o==="join"?(k.innerHTML=ia(),ca(k)):(k.innerHTML=la(),da(k)))}function Dt(k,N=!1){o===k||pe||(o=k,g={},q="",x="",e.querySelectorAll('[data-act="switch-reg-tab"]').forEach(X=>{const ee=X.dataset.tab===k;X.setAttribute("aria-selected",String(ee)),X.tabIndex=ee?0:-1,ee&&N&&X.focus({preventScroll:!0})}),Qe(!0),pa(),e.querySelector(".au-left")?.scrollTo({top:0}))}function Qt(){if(w)return{title:"开通申请已提交 ｜ PACOM Station",bodyHtml:`
          <h1 class="au-h1">开通申请已提交</h1>
          <p class="au-lead">预计 1–2 个工作日完成审核，审核通过后将发送开通链接至你的邮箱。</p>
          <div class="au-summary-card">
            <div class="au-summary-row">
              <span class="au-summary-k">申请单号</span>
              <span class="au-summary-v au-summary-v-copy is-tabular">
                <span>${n(w.applicationId)}</span>
                <button type="button" class="au-summary-copy-btn" data-act="copy-receipt" data-copy-val="${n(w.applicationId)}" aria-label="复制申请单号" title="复制申请单号">${Xa}</button>
              </span>
            </div>
            <div class="au-summary-row"><span class="au-summary-k">申请机构</span><span class="au-summary-v">${n(w.organizationName)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">通知邮箱</span><span class="au-summary-v is-tabular">${n(w.maskedEmail)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">当前状态</span><span class="au-status-pill au-status-pill--pending">待审核</span></div>
          </div>
          <button type="button" class="au-secondary" data-act="back-login"><span>返回登录</span></button>
        `};const k=h;return{title:"加入申请已提交 ｜ PACOM Station",bodyHtml:`
        <h1 class="au-h1">加入申请已提交</h1>
        <p class="au-lead">已提交至<b>${n(k.organizationName)}</b>，管理员批准后将发送登录通知。</p>
        <div class="au-summary-card">
          <div class="au-summary-row">
            <span class="au-summary-k">申请单号</span>
            <span class="au-summary-v au-summary-v-copy is-tabular">
              <span>${n(k.requestId)}</span>
              <button type="button" class="au-summary-copy-btn" data-act="copy-receipt" data-copy-val="${n(k.requestId)}" aria-label="复制申请单号" title="复制申请单号">${Xa}</button>
            </span>
          </div>
          <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${n(k.organizationName)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">登录账户</span><span class="au-summary-v is-tabular">${n(k.maskedAccount)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">当前状态</span><span class="au-status-pill au-status-pill--pending">待管理员审批</span></div>
        </div>
        <div class="au-ferr" id="au-reg-ferr" role="alert" ${q?"":"hidden"}>
          ${Ut}
          <span data-role="ferr-text">${n(q)}</span>
        </div>
        <button type="button" class="au-secondary" data-act="back-login"><span>返回登录</span></button>
        ${t.withdrawJoinApplication?`
          <div class="au-quiet-action">
            <button type="button" class="au-quiet-btn" data-act="ask-withdraw" ${L?"disabled":""}>${L?"正在撤回…":"撤回申请"}</button>
          </div>`:""}
      `}}function Ft(k){Ge(),ue=k,J=window.setInterval(()=>{ue-=1,ue<=0&&Ge();const N=e.querySelector('[data-act="iv-send-sec"]');N&&(N.disabled=ue>0,N.textContent=ue>0?`${ue} 秒后重发`:te?"重新获取":"获取验证码")},1e3)}function jt(k){return k.requiredSecondaryChannel!==void 0?k.requiredSecondaryChannel:ha(k.kind,k.role,k.targetChannel)}function kt(k){return pt(k).toLowerCase().replace(/[\s\-()]/g,"")}function ua(k,N){if(!k)return!1;const X=kt(N.targetValue);if(!X)return!1;const ee=N.targetChannel==="email"?k.email:k.phone;return!!ee&&kt(ee)===X}async function it(k){const N=k==="phone"?Nt(ae):Ma(ae)?"":"请输入有效的电子邮箱";if(N){g.iv_sec=N,je("iv_sec"),e.querySelector("#au-iv_sec")?.focus({preventScroll:!0});return}delete g.iv_sec,je("iv_sec");const X=pt(ae),ee=++H,he=e.querySelector('[data-act="iv-send-sec"]');he&&(he.disabled=!0,he.textContent="发送中…");try{const Be=await t.sendVerificationCode({target:X,purpose:"bind",consentAcceptedAt:new Date().toISOString()});if(s||ee!==H||pt(ae)!==X)return;te=Be.maskedTarget||Vt(X);const Ze=e.querySelector("#au-iv_sec-hint");Ze&&(Ze.textContent=`验证码已发送至 ${te}`);const me=e.querySelector('[data-role="iv-novcode-wrap"]');me&&(me.hidden=!1),Ft(Be.cooldownSeconds||60),he&&(he.disabled=!0,he.textContent=`${ue} 秒后重发`),e.querySelector("#au-iv_seccode")?.focus({preventScroll:!0})}catch(Be){if(s||ee!==H||pt(ae)!==X)return;he&&(he.disabled=!1,he.textContent=te?"重新获取":"获取验证码"),q=Be instanceof Error?Be.message:"暂时无法发送验证码，请稍后再试。",Ne()}}function Xt(){if(T)return{title:"核验链接 ｜ PACOM Station",bodyHtml:`
          <div class="au-loading-state" role="status" aria-live="polite">
            <span class="au-spinner au-spinner--muted" aria-hidden="true"></span>
            <span>正在核验链接…</span>
          </div>
        `};if(O&&O.status==="accepted"){const le=O.kind==="owner",re=le?"机构已完成开通":"邀请已被接受",Ie=f?`该${le?"开通":"邀请"}链接已完成激活，你可以直接进入工作区访问<b>${n(O.organizationName)}</b>。`:`该${le?"开通":"邀请"}链接已完成激活，你可以直接登录访问<b>${n(O.organizationName)}</b>。`;return{title:`${re} ｜ PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${re}</h1>
          <p class="au-lead">${Ie}</p>
          <button type="button" class="au-secondary" data-act="${f?"iv-back-ws":"back-login"}"><span>${f?"进入工作区":"前往登录"}</span></button>
        `}}if(G||!O||O.status!=="pending"){const le=O?.kind==="owner",re=O?.organizationName?n(O.organizationName):"",Ie=O?.inviterName?n(O.inviterName):"机构管理员";let Re="邀请链接已失效",Ke="此链接无效或已过期，请联系邀请人或机构管理员重新发送。";return G?Ke=n(G):O?.status==="expired"?(Re=le?"开通链接已过期":"邀请链接已过期",Ke=le?`开通${re?`<b>${re}</b>的`:""}链接已过期，请联系支持团队重新发送。`:`加入${re?`<b>${re}</b>的`:""}邀请链接已过期，请联系${Ie}重新发送。`):O?.status==="revoked"&&(Re=le?"开通链接已撤销":"邀请已撤销",Ke=le?`开通${re?`<b>${re}</b>的`:""}链接已被撤销，请联系支持团队重新发送。`:`加入${re?`<b>${re}</b>的`:""}邀请已被撤销，如需加入请联系${Ie}重新发送。`),{title:`${Re} ｜ PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${Re}</h1>
          <p class="au-lead">${Ke}</p>
          <button type="button" class="au-secondary" data-act="${f?"iv-back-ws":"back-login"}"><span>${f?"返回工作区":"返回登录"}</span></button>
        `}}const k=O,N=k.kind==="owner",X=N?"开通机构":"加入机构",ee=k.targetChannel==="phone"?"受邀手机号码":"受邀电子邮箱",he=k.targetChannel==="phone"?$n(k.targetValue):k.targetValue;if(f){if(ua(f,k)){const Re=N?`<b>${n(k.organizationName)}</b>已审核通过，确认后即以机构管理员身份完成开通。<span class="au-lead-meta">有效期至 ${n(k.expiresAt)}</span>`:`${n(k.inviterName||"机构管理员")}邀请你以${n(k.roleLabel||"成员")}身份加入<b>${n(k.organizationName)}</b>。<span class="au-lead-meta">有效期至 ${n(k.expiresAt)}</span>`;return{title:`${X} ｜ PACOM Station`,bodyHtml:`
            <h1 class="au-h1">${X}</h1>
            <p class="au-lead">${Re}</p>
            <div class="au-summary-card">
              <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${n(k.organizationName)}</span></div>
              <div class="au-summary-row"><span class="au-summary-k">授予角色</span><span class="au-summary-v">${n(k.roleLabel||(N?"机构管理员":"成员"))}</span></div>
              <div class="au-summary-row"><span class="au-summary-k">当前账户</span><span class="au-summary-v is-tabular">${n(f.displayName)} ｜ ${n(he)}</span></div>
            </div>
            <div class="au-ferr" id="au-reg-ferr" role="alert" ${q?"":"hidden"}>
              ${Ut}
              <span data-role="ferr-text">${n(q)}</span>
            </div>
            <button type="button" class="au-primary" data-act="iv-confirm-join" ${pe?"disabled":""}>
              ${pe?'<span class="au-spinner" aria-hidden="true"></span><span>正在处理…</span>':`<span>${N?"确认开通":"确认加入"}</span>`}
            </button>
            <div class="au-quiet-action">
              <button type="button" class="au-quiet-btn" data-act="iv-back-ws">返回工作区</button>
            </div>
          `}}const le=Vt(k.targetValue),re=f.email||(f.phone?$n(f.phone):"");return{title:"请切换至受邀账户 ｜ PACOM Station",bodyHtml:`
          <h1 class="au-h1">请切换至受邀账户</h1>
          <p class="au-lead">${N?`该开通链接面向 <b>${n(le)}</b> 开通${n(k.organizationName)}，与当前登录账户不一致。`:`该邀请面向 <b>${n(le)}</b> 加入${n(k.organizationName)}，与当前登录账户不一致。`}</p>
          <div class="au-summary-card">
            <div class="au-summary-row"><span class="au-summary-k">当前账户</span><span class="au-summary-v is-tabular">${n(f.displayName)}${re?` ｜ ${n(re)}`:""}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">受邀账户</span><span class="au-summary-v is-tabular">${n(le)}</span></div>
          </div>
          <button type="button" class="au-primary" data-act="iv-switch-account"><span>切换账户登录</span></button>
          <div class="au-quiet-action">
            <button type="button" class="au-quiet-btn" data-act="iv-back-ws">返回工作区</button>
          </div>
        `}}if(k.accountExists){const le=N?`<b>${n(k.organizationName)}</b>已审核通过，请先登录已有账户完成开通。<span class="au-lead-meta">有效期至 ${n(k.expiresAt)}</span>`:`${n(k.inviterName||"机构管理员")}邀请你以${n(k.roleLabel||"成员")}身份加入<b>${n(k.organizationName)}</b>，请先登录已有账户完成确认。<span class="au-lead-meta">有效期至 ${n(k.expiresAt)}</span>`;return{title:`${X} ｜ PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${X}</h1>
          <p class="au-lead">${le}</p>
          <div class="au-summary-card">
            <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${n(k.organizationName)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">授予角色</span><span class="au-summary-v">${n(k.roleLabel||(N?"机构管理员":"成员"))}</span></div>
            <div class="au-summary-row">
              <span class="au-summary-k">受邀账户</span>
              <span class="au-summary-v au-summary-v-copy is-tabular">
                <span>${n(he)}</span>
                <span class="au-status-pill au-status-pill--neutral">已注册</span>
              </span>
            </div>
          </div>
          <button type="button" class="au-primary" data-act="iv-go-login"><span>${N?"登录并开通":"登录并加入"}</span></button>
        `}}const Be=N?`<b>${n(k.organizationName)}</b>已审核通过，设置密码后即以机构管理员身份开通。<span class="au-lead-meta">有效期至 ${n(k.expiresAt)}</span>`:`${n(k.inviterName||"机构管理员")}邀请你以${n(k.roleLabel||"成员")}身份加入<b>${n(k.organizationName)}</b>。<span class="au-lead-meta">有效期至 ${n(k.expiresAt)}</span>`,Ze=N?"完成开通":"注册并加入",me=jt(k),Ae=N?`
        <div class="au-field">
          <div class="au-lab">
            <span class="au-lab-t">管理员账户</span>
            <span class="au-lab-status">${wn}<span>已核验</span></span>
          </div>
          <div class="au-verified-card">
            <div class="au-verified-row">
              <span class="au-verified-k">${k.targetChannel==="phone"?"手机号码":"电子邮箱"}</span>
              <span class="au-verified-v">${n(he)}</span>
            </div>
            ${k.verifiedSecondaryMasked?`
              <div class="au-verified-row">
                <span class="au-verified-k">${k.targetChannel==="phone"?"电子邮箱":"手机号码"}</span>
                <span class="au-verified-v">${n(k.verifiedSecondaryMasked)}</span>
              </div>`:""}
          </div>
        </div>`:`
        <div class="au-field">
          <div class="au-lab">
            <span class="au-lab-t">${ee}</span>
            <span class="au-lab-status">${wn}<span>已核验</span></span>
          </div>
          <div class="au-locked-card">
            <span class="au-locked-val">${n(he)}</span>
          </div>
        </div>`,Fe=me?(()=>{const le=me==="phone",re=le?"手机号码":"电子邮箱",Ie=le?"用于新设备登录、敏感操作与重置密码时的身份验证。":"机构管理员须绑定电子邮箱，用于接收订单、续费与安全通知。",Re=le?"短信验证码":"邮件验证码",Ke=le?"请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。":"请确认电子邮箱无误并检查垃圾邮件箱；如仍未收到，可点击页脚「联系我们」获取协助。";return`
            <div class="au-field ${g.iv_sec?"bad":""}" data-f="iv_sec">
              <div class="au-lab">
                <span class="au-lab-group">
                  <label for="au-iv_sec">${re}</label>
                  ${ba("au-iv-sec-info",`${re}说明`,[Ie])}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_sec" name="iv_sec" class="au-in has-code-btn" type="${le?"tel":"email"}" inputmode="${le?"tel":"email"}" autocomplete="${le?"tel":"email"}" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(ae)}" aria-invalid="${g.iv_sec?"true":"false"}" />
                <button type="button" class="au-suffix au-getcode" data-act="iv-send-sec" ${ue>0?"disabled":""}>
                  ${ue>0?`${ue} 秒后重发`:te?"重新获取":"获取验证码"}
                </button>
              </div>
              <p class="au-err" id="au-iv_sec-err" aria-live="polite">${n(g.iv_sec??"")}</p>
              <p class="au-hint" id="au-iv_sec-hint" role="status" aria-live="polite">${te?`验证码已发送至 ${n(te)}`:""}</p>
            </div>

            <div class="au-field ${g.iv_seccode?"bad":""}" data-f="iv_seccode">
              <div class="au-lab">
                <label for="au-iv_seccode">${Re}</label>
                <span data-role="iv-novcode-wrap" ${te?"":"hidden"}>
                  <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-iv-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-iv-novcode-pop"><span>收不到验证码？</span></button>
                  <span id="au-iv-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
                    <span class="ws-info-text">${Ke}</span>
                  </span>
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_seccode" name="iv_seccode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(de)}" aria-invalid="${g.iv_seccode?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_seccode-err" aria-live="polite">${n(g.iv_seccode??"")}</p>
            </div>
          `})():"";return{title:`${X} ｜ PACOM Station`,bodyHtml:`
        <h1 class="au-h1">${X}</h1>
        <p class="au-lead">${Be}</p>
        <form class="au-reg-form" data-reg-form="invite" novalidate>
          <fieldset ${pe?"disabled":""}>
            ${Ae}

            <div class="au-field ${g.iv_name?"bad":""}" data-f="iv_name">
              <div class="au-lab"><label for="au-iv_name">姓名</label></div>
              <div class="au-ctl">
                <input id="au-iv_name" name="iv_name" class="au-in" type="text" autocomplete="name" value="${n(Y)}" aria-invalid="${g.iv_name?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_name-err" aria-live="polite">${n(g.iv_name??"")}</p>
            </div>

            ${Fe}

            <div class="au-field ${g.iv_pwd?"bad":""}" data-f="iv_pwd">
              <div class="au-lab">
                <span class="au-lab-group">
                  <label for="au-iv_pwd">设置密码</label>
                  ${ba("au-iv-pwd-info","设置密码说明",rn)}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_pwd" name="iv_pwd" class="au-in has-suffix" type="${ge?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${n(Q)}" aria-invalid="${g.iv_pwd?"true":"false"}" />
                <button type="button" class="au-suffix au-eye" data-act="iv-toggle-eye" aria-controls="au-iv_pwd" aria-label="${ge?"隐藏密码":"显示密码"}">
                  ${ge?Wt:Ht}
                </button>
              </div>
              <p class="au-err" id="au-iv_pwd-err" aria-live="polite">${n(g.iv_pwd??"")}</p>
            </div>

            ${Rt("au-iv_consent","iv_consent",Ue,"iv_consent")}

            <div class="au-ferr" id="au-reg-ferr" role="alert" ${q?"":"hidden"}>
              ${Ut}
              <span data-role="ferr-text">${n(q)}</span>
            </div>

            <button type="submit" class="au-primary" ${pe?"disabled":""}>
              ${pe?`<span class="au-spinner" aria-hidden="true"></span><span>${N?"正在开通…":"正在提交…"}</span>`:`<span>${Ze}</span>`}
            </button>
          </fieldset>
        </form>
      `}}function Sa(){Ee.bind(e),e.querySelector('[data-act="iv-back-ws"]')?.addEventListener("click",()=>{Et(),a.onBackToWorkspace?a.onBackToWorkspace():a.onBackToLogin()}),e.querySelector('[data-act="iv-go-login"]')?.addEventListener("click",()=>{if(!O)return;const Fe=`#invite?token=${encodeURIComponent(O.token)}`,le=O.kind==="owner"?`登录后即可开通${O.organizationName}`:`登录后即可加入${O.organizationName}`;Et(),a.onGoLoginForInvite?a.onGoLoginForInvite(O.targetValue,le,Fe):a.onBackToLogin()}),e.querySelector('[data-act="iv-switch-account"]')?.addEventListener("click",()=>{if(!O)return;const Fe=`#invite?token=${encodeURIComponent(O.token)}`,re=`请使用 ${Vt(O.targetValue)} 登录以${O.kind==="owner"?"开通机构":"接受邀请"}`;Et(),a.onSwitchAccountForInvite?a.onSwitchAccountForInvite(Fe,re):a.onBackToLogin()}),e.querySelector('[data-act="iv-confirm-join"]')?.addEventListener("click",async()=>{if(!(pe||!O)){pe=!0,q="",wt();try{const Fe=await t.acceptInvitation({token:O.token});if(s)return;Et(),a.onAuthenticated(Fe)}catch(Fe){if(s)return;pe=!1,q=Fe instanceof Error?Fe.message:"暂时无法确认加入，请稍后再试。",wt()}}});const k=e.querySelector('form[data-reg-form="invite"]');if(!k||!O)return;const N=e.querySelector("#au-iv_name"),X=e.querySelector("#au-iv_sec"),ee=e.querySelector("#au-iv_seccode"),he=e.querySelector("#au-iv_pwd"),Be=e.querySelector("#au-iv_consent"),Ze=O.kind==="owner",me=Ze?"完成开通":"注册并加入",Ae=jt(O);N?.addEventListener("input",()=>{Y=N.value,(g.iv_name||q)&&(delete g.iv_name,q="",je("iv_name"),Ne())}),X?.addEventListener("input",()=>{if(ae=X.value,H+=1,te||ue>0){te="",Ge();const Fe=e.querySelector("#au-iv_sec-hint");Fe&&(Fe.textContent="");const le=e.querySelector('[data-role="iv-novcode-wrap"]');le&&(le.hidden=!0),Ee.close(!1);const re=e.querySelector('[data-act="iv-send-sec"]');re&&(re.disabled=!1,re.textContent="获取验证码")}(g.iv_sec||q)&&(delete g.iv_sec,q="",je("iv_sec"),Ne())}),ee?.addEventListener("input",()=>{de=ee.value.replace(/\D/g,"").slice(0,6),ee.value=de,(g.iv_seccode||q)&&(delete g.iv_seccode,q="",je("iv_seccode"),Ne())}),he?.addEventListener("input",()=>{Q=he.value,(g.iv_pwd||q)&&(delete g.iv_pwd,q="",je("iv_pwd"),Ne())}),Be?.addEventListener("change",()=>{Ue=Be.checked,Ue&&g.iv_consent&&(delete g.iv_consent,je("iv_consent"))}),e.querySelector('[data-act="iv-send-sec"]')?.addEventListener("click",Fe=>{if(!Ae)return;const le=Ae==="phone"?Nt(ae):Ma(ae)?"":"请输入有效的电子邮箱";if(le){g.iv_sec=le,je("iv_sec"),X?.focus({preventScroll:!0});return}if(!Ue){y=()=>{Ue=!0,Be&&(Be.checked=!0),delete g.iv_consent,je("iv_consent"),it(Ae)},Bt("consent_ask",Fe.currentTarget);return}it(Ae)}),e.querySelector('[data-act="iv-toggle-eye"]')?.addEventListener("click",Fe=>{ge=!ge;const le=Fe.currentTarget;if(he){const re=he.selectionStart,Ie=he.selectionEnd;he.type=ge?"text":"password",he.focus({preventScroll:!0}),re!==null&&Ie!==null&&he.setSelectionRange(re,Ie)}le.setAttribute("aria-label",ge?"隐藏密码":"显示密码"),le.innerHTML=ge?Wt:Ht}),k.addEventListener("submit",async Fe=>{if(Fe.preventDefault(),pe||!O)return;if(g={},q="",Y.trim()?Mt(Y.trim())>ga&&(g.iv_name=`姓名不超过 ${ga} 个字`):g.iv_name="请输入姓名",Ae){const Ie=Ae==="phone"?Nt(ae):Ma(ae)?"":"请输入有效的电子邮箱";Ie&&(g.iv_sec=Ie),/^\d{6}$/.test(de.trim())||(g.iv_seccode=Ae==="phone"?"请输入 6 位短信验证码":"请输入 6 位邮件验证码")}const le=ln(Q);le&&(g.iv_pwd=le),Ue||(g.iv_consent="请阅读并同意隐私政策和使用条款");const re=Ae?["iv_name","iv_sec","iv_seccode","iv_pwd","iv_consent"]:["iv_name","iv_pwd","iv_consent"];for(const Ie of re)je(Ie);if(Ne(),Object.keys(g).length>0){const Ie=Object.keys(g)[0];e.querySelector(`#au-${Ie}`)?.focus({preventScroll:!0});return}pe=!0,ut(Ze?"正在开通…":"正在提交…",me);try{const Ie=await t.acceptInvitation({token:O.token,displayName:Y.trim(),password:Q,consentAcceptedAt:new Date().toISOString(),...Ae?{secondaryContact:pt(ae),secondaryVerificationCode:de.trim()}:{}});if(s)return;Et(),a.onAuthenticated(Ie)}catch(Ie){if(s)return;pe=!1,q=Ie instanceof Error?Ie.message:"暂时无法完成激活，请稍后再试。",ut(Ze?"正在开通…":"正在提交…",me),Ne()}})}function wt(){_?.(),_=null,Ee.close(!1);let k="";if(h||w){const N=Qt();document.title=N.title,k=N.bodyHtml}else if(u){const N=Xt();document.title=N.title,k=N.bodyHtml}else document.title="注册 ｜ PACOM Station",k=`
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
              <div class="au-logo">${Zn}</div>
              ${k}
            </main>
          </div>
          ${Gn()}
        </section>
        <aside class="au-art" aria-hidden="true">
          <div class="au-art-frame">
            <img src="./media/auth-hero.jpg" alt="" />
          </div>
        </aside>
      </div>
      <div data-role="modal-host"></div>
    `,e.querySelectorAll('[data-act="back-login"]').forEach(N=>{N.addEventListener("click",()=>{Et(),a.onBackToLogin()})}),e.querySelectorAll('[data-act="open-contact"]').forEach(N=>{N.addEventListener("click",X=>{Bt("contact",X.currentTarget)})}),e.querySelector('[data-act="ask-withdraw"]')?.addEventListener("click",N=>{!h||!t.withdrawJoinApplication||L||Bt("withdraw_confirm",N.currentTarget)}),e.querySelectorAll('[data-act="copy-receipt"]').forEach(N=>{N.addEventListener("click",()=>{const X=N.dataset.copyVal??"";X&&(navigator.clipboard?.writeText&&navigator.clipboard.writeText(X).catch(()=>{}),N.classList.add("is-copied"),N.setAttribute("aria-label","已复制申请单号"),N.innerHTML=gs,ot!==null&&window.clearTimeout(ot),ot=window.setTimeout(()=>{ot=null,N.classList.remove("is-copied"),N.setAttribute("aria-label","复制申请单号"),N.innerHTML=Xa},1800))})}),!h&&!w&&!u?(e.querySelectorAll('[data-act="switch-reg-tab"]').forEach(N=>{N.addEventListener("click",()=>{const X=N.dataset.tab;X&&Dt(X,!1)}),N.addEventListener("keydown",X=>{const ee=Tt.indexOf(o);X.key==="ArrowRight"?(X.preventDefault(),Dt(Tt[(ee+1)%Tt.length],!0)):X.key==="ArrowLeft"?(X.preventDefault(),Dt(Tt[(ee-1+Tt.length)%Tt.length],!0)):X.key==="Home"?(X.preventDefault(),Dt(Tt[0],!0)):X.key==="End"&&(X.preventDefault(),Dt(Tt[Tt.length-1],!0))})}),pa(),Qe(!1),document.fonts?.ready.then(()=>{s||Qe(!1)})):u&&!T&&Sa(),_=Kn(e)}wt(),u&&m&&!h&&!w?(async()=>{try{const k=await t.getInvitationPreview(m);if(s)return;if(O=k,Y=k.prefillName??"",T=!1,wt(),!f&&k.status==="pending"&&!k.accountExists){const N=jt(k),X=Y.trim()?N?"#au-iv_sec":"#au-iv_pwd":"#au-iv_name";e.querySelector(X)?.focus({preventScroll:!0})}}catch(k){if(s)return;T=!1,G=k instanceof Error?k.message:"暂时无法读取邀请信息，请稍后再试。",wt()}})():!u&&!h&&!w&&ye.replace(/\D/g,"").length===9&&(Yt(ye),e.querySelector("#au-jn_name")?.focus({preventScroll:!0}))}function ka(e){const t=e.replace(/^#\/?/,"").split("?")[0]??"";return t==="login"||t==="register"||t==="join"||t==="apply"||t==="invite"}function Pa(e){const t=e.replace(/^#\/?/,""),[a="",s=""]=t.split("?"),o=new URLSearchParams(s);if(a==="invite")return{kind:"invite",inviteToken:(o.get("token")??"").trim()};if(a==="register"||a==="join"||a==="apply"){const i=o.get("tab");return{kind:"register",initialMode:a==="apply"||i==="apply"?"apply":"join",prefillCode:o.get("code")??void 0}}return{kind:"login"}}const io=["org_admin","project_admin","operator","space_user"],za=[{key:"login",label:"登录",group:"auth",hash:"#login",sessionRole:null},{key:"reg-join",label:"加入已有机构",group:"auth",hash:"#register",sessionRole:null},{key:"status-join",label:"加入申请已提交",group:"auth",hash:"#register",sessionRole:null,joinReceipt:{requestId:"JR-20261127-8421",organizationName:"广州国家实验室",maskedAccount:"138 •••• 8000",status:"pending_approval",submittedAt:"2026-11-27T09:30:00Z",withdrawToken:"demo-preset-wt-8421"}},{key:"reg-apply",label:"申请开通机构",group:"auth",hash:"#apply",sessionRole:null},{key:"status-apply",label:"开通申请已提交",group:"auth",hash:"#apply",sessionRole:null,applyReceipt:{applicationId:"APP-20261127-3902",organizationName:"广州天环智能科技有限公司",region:"广东省 广州市",maskedEmail:"c•••@company.com",status:"pending_review",submittedAt:"2026-11-27T09:35:00Z"}},{key:"inv-member",label:"成员邀请 ｜ 新账户",group:"invite",hash:"#invite?token=member-demo",sessionRole:null},{key:"inv-admin-email",label:"机构管理员邀请 ｜ 补绑手机",group:"invite",hash:"#invite?token=admin-email",sessionRole:null},{key:"inv-admin-phone",label:"机构管理员邀请 ｜ 补绑邮箱",group:"invite",hash:"#invite?token=admin-phone",sessionRole:null},{key:"inv-proj-email",label:"项目管理员邀请 ｜ 补绑手机",group:"invite",hash:"#invite?token=project-admin-email",sessionRole:null},{key:"inv-owner",label:"机构审核通过 ｜ 开通机构",group:"invite",hash:"#invite?token=owner-demo",sessionRole:null},{key:"inv-existing",label:"已有账户受邀 ｜ 引导登录",group:"invite",hash:"#invite?token=existing-demo",sessionRole:null},{key:"inv-signed-match",label:"已登录 ｜ 确认加入",group:"invite",hash:"#invite?token=existing-demo",sessionRole:"operator"},{key:"inv-signed-mismatch",label:"已登录 ｜ 切换受邀账户",group:"invite",hash:"#invite?token=member-demo",sessionRole:"org_admin"},{key:"inv-expired",label:"邀请链接已过期",group:"terminal",hash:"#invite?token=expired",sessionRole:null},{key:"inv-revoked",label:"邀请已撤销",group:"terminal",hash:"#invite?token=revoked",sessionRole:null},{key:"inv-accepted",label:"邀请已被接受",group:"terminal",hash:"#invite?token=accepted",sessionRole:null},{key:"inv-invalid",label:"邀请链接已失效",group:"terminal",hash:"#invite",sessionRole:null}];async function lo(e){const t=new $s;let a=await t.getSession(),s="login",o="",i="",c="",y=window.location.hash&&!ka(window.location.hash)?window.location.hash:"",p=!1;document.querySelector("[data-demo-fab-root]")?.remove();const v=document.createElement("div");v.className="pacom-demo-fab-wrap",v.dataset.demoFabRoot="1",document.body.appendChild(v);function h(_,m){const u=_.trim();if(u==="#login")return"login";if(u==="#apply"||u==="#register?tab=apply")return"reg-apply";if(u.startsWith("#register")||u.startsWith("#join"))return"reg-join";if(u.startsWith("#invite")){const T=Pa(u).inviteToken??"";return T?T==="expired"?"inv-expired":T==="revoked"?"inv-revoked":T==="accepted"?"inv-accepted":T.startsWith("owner")?"inv-owner":T==="admin-email"?"inv-admin-email":T==="admin-phone"?"inv-admin-phone":T==="project-admin-email"?"inv-proj-email":T==="existing-demo"?m?"inv-signed-match":"inv-existing":m?"inv-signed-mismatch":"inv-member":"inv-invalid"}return""}function w(){const _=za.filter(T=>T.group==="auth"),m=za.filter(T=>T.group==="invite"),u=za.filter(T=>T.group==="terminal"),f=T=>{const O=s!=="app"&&i===T.key;return`
        <button type="button" class="pacom-demo-role-btn" aria-pressed="${O}" data-demo-preset="${T.key}">
          <span>${T.label}</span>
          ${O?ce("check",14):"<span>→</span>"}
        </button>`};v.innerHTML=`
      ${p?`
          <div class="pacom-demo-fab-panel" role="dialog" aria-label="演示视角切换">
            <div class="pacom-demo-fab-head">
              <span class="pacom-demo-fab-title">演示视角</span>
              <span class="pacom-badge pacom-badge--neutral">模拟数据</span>
            </div>
            <span class="pacom-demo-fab-sub">测试邀请码 482 916 305 ｜ 验证码任意 6 位数字</span>
            <div class="pacom-demo-fab-roles">
              <span class="pacom-demo-fab-sec-title">工作区角色</span>
              ${io.map(T=>`
                  <button type="button" class="pacom-demo-role-btn" aria-pressed="${s==="app"&&a?.role===T}" data-demo-pick="${T}">
                    <span>${ft[T]}</span>
                    ${s==="app"&&a?.role===T?ce("check",14):""}
                  </button>`).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">登录与注册</span>
              ${_.map(f).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">邀请与开通激活</span>
              ${m.map(f).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">链接异常与终态</span>
              ${u.map(f).join("")}
            </div>
            <div class="pacom-demo-fab-foot">
              <a class="pacom-demo-link" href="./index.html">
                <span>进入生产入口（index.html）</span>
                <span>→</span>
              </a>
            </div>
          </div>`:""}
      <button type="button" class="pacom-demo-fab-pill" aria-expanded="${p}" data-demo-fab-toggle="1" title="切换演示视角">
        <span class="pacom-demo-fab-dot" aria-hidden="true"></span>
        <span>演示</span>
      </button>
    `,v.querySelector("[data-demo-fab-toggle]")?.addEventListener("click",T=>{T.stopPropagation(),p=!p,w()}),v.querySelectorAll("[data-demo-pick]").forEach(T=>{T.addEventListener("click",async()=>{const O=T.dataset.demoPick;O&&(p=!1,a=await t.switchDemoRole(O),await L(a))})}),v.querySelectorAll("[data-demo-preset]").forEach(T=>{T.addEventListener("click",async()=>{const O=T.dataset.demoPreset,G=za.find(Y=>Y.key===O);G&&(p=!1,c="",G.sessionRole&&(a=await t.switchDemoRole(G.sessionRole)),await x(G.hash,G.sessionRole===null,{presetKey:G.key,initialJoinReceipt:G.joinReceipt??null,initialApplyReceipt:G.applyReceipt??null}))})})}document.addEventListener("click",_=>{p&&(_.target?.closest("[data-demo-fab-root]")||(p=!1,w()))}),document.addEventListener("keydown",_=>{_.key==="Escape"&&p&&(p=!1,w())});async function x(_,m,u){ao(e),Un(e),Hn(e),m&&a&&(await t.logout(),a=null);const f=Pa(_);if(s=f.kind,o=_,i=u?.presetKey??h(_,!!a),window.location.hash!==_&&(window.location.hash=_),w(),f.kind==="register"||f.kind==="invite"){oo(e,t,{initialMode:f.initialMode,prefillCode:f.prefillCode,isInviteRoute:f.kind==="invite",inviteToken:f.inviteToken,currentSession:f.kind==="invite"?a:null,initialJoinReceipt:u?.initialJoinReceipt??null,initialApplyReceipt:u?.initialApplyReceipt??null,onBackToLogin:()=>{c="",x("#login",!1)},onGoLoginForInvite:(T,O,G)=>{c=G,x("#login",!1,{prefillAccount:T,notice:O})},onSwitchAccountForInvite:(T,O)=>{c=T,x("#login",!0,{notice:O})},onBackToWorkspace:()=>{a?L(a):x("#login",!1)},onAuthenticated:T=>{c="",L(T)}});return}so(e,t,T=>{if(a=T,c){const O=c;c="",x(O,!1);return}L(T)},{prefillAccount:u?.prefillAccount,notice:u?.notice,onOpenRegister:()=>{c="",x("#register",!1)}})}async function L(_){Un(e),Hn(e),a=_,s="app",o="",i="",w(),(!window.location.hash||ka(window.location.hash))&&(window.location.hash=y||"#home"),y="",await no(e,t,_,()=>{c="",y="",x("#login",!0)})}if(window.addEventListener("hashchange",()=>{if(ka(window.location.hash)){if(window.location.hash===o)return;const _=Pa(window.location.hash);(s!==_.kind||window.location.hash!==o)&&x(window.location.hash,s==="app"&&_.kind!=="invite")}}),!a||ka(window.location.hash)){const _=ka(window.location.hash)?window.location.hash:"#login",m=Pa(_);await x(_,!!(a&&m.kind!=="invite"));return}await L(a)}async function ro(){const e=document.getElementById("app");if(e)try{await lo(e)}catch(t){e.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">演示环境初始化失败：${String(t)}</div></div>`}}ro();
