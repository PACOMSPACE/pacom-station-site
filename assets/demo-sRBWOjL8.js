import{E as T,r as re,a as Oa,e as s,b as Ta,g as Ra,s as Ft,m as Xs,c as en,d as Fs,P as js,I as ja,A as Pt,f as Ms,n as it,h as qs,i as tn,j as Nt,t as Os,k as Ts,v as Ma,l as zt,o as Ut,p as Za,q as Bt,u as Rs,C as qa,w as la,x as Ka,y as os,z as an,B as za,D as is,L as ls,F as Ia,G as _t,H as rs,J as ka,K as cs,M as ds,O as sn,N as nn}from"./auth-shared-C-uhIfm6.js";import{R as pt,g as ra,a as ps}from"./contracts-Z0w12vLk.js";function on(){const e="2026-11-25T09:00:00Z",t=[];for(let l=1;l<=22;l+=1){const p=l===7?T.floorId:l===8?T.lockedFloor8Id:l===6?T.lockedFloor6Id:`structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-${l}`,w=String(l).padStart(2,"0");t.push({id:p,buildingId:T.buildingId,kind:"above",level:l,name:`${l}F`,areaSqm:l===7?1383.1:l===1?2680:l<=4?1920:1480,plan:{floorId:p,imageUrl:`./media/floors/e/${w}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}})}const a="structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-roof-1";t.push({id:a,buildingId:T.buildingId,kind:"roof",level:99,name:"RF",areaSqm:1260,plan:{floorId:a,imageUrl:"./media/floors/e/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}});const n=[];for(let l=1;l<=12;l+=1){const p=`structure-f-above-${l}`,w=String(l).padStart(2,"0");n.push({id:p,buildingId:T.buildingFId,kind:"above",level:l,name:`${l}F`,areaSqm:l===1?2450:l<=3?2100:1580,plan:{floorId:p,imageUrl:`./media/floors/f/${w}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}})}const o="structure-f-roof-1";return n.push({id:o,buildingId:T.buildingFId,kind:"roof",level:99,name:"RF",areaSqm:960,plan:{floorId:o,imageUrl:"./media/floors/f/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}}),{projects:[{id:T.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",location:{lat:23.0652,lng:113.3824,crs:"GCJ02",confirmed:!0,confirmedAt:e},imageUrl:"./media/gzlab.jpg"},{id:T.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",location:{lat:23.0681,lng:113.3792,crs:"GCJ02",confirmed:!0,confirmedAt:e},imageUrl:"./media/gzlab.jpg"}],buildings:[{id:T.buildingId,projectId:T.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.webp"},{id:T.buildingFId,projectId:T.projectId,name:"F栋",aboveFloors:12,belowFloors:0,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.webp"}],floors:[...t,...n],zones:[{id:"zone-e1f-lobby",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 首层大堂与庭院入口",category:"corridor"},{id:"zone-e1f-power",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 配电房与后勤区",category:"utility"},{id:"zone-e7f-lab-east",floorId:T.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:T.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:T.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:T.floorId,name:"核心走廊与弱电井",category:"corridor"},{id:"zone-erf-hvac",floorId:a,name:"RF 屋面空调主机与稳压泵区",category:"utility"},{id:"zone-f1f-lobby",floorId:"structure-f-above-1",name:"1F 南入口大堂与弧形展示翼",category:"corridor"},{id:"zone-f8f-office",floorId:"structure-f-above-8",name:"8F 会议与行政办公区",category:"office"},{id:"zone-f11f-sports",floorId:"structure-f-above-11",name:"11F 体育活动与茶歇区",category:"outdoor"},{id:"zone-f12f-lounge",floorId:"structure-f-above-12",name:"12F 休息区、母婴室与桌球室",category:"office"},{id:"zone-frf-plant",floorId:o,name:"RF 屋面设备基础与机房区",category:"utility"}]}}const Bs=on(),us=Bs.floors.map(e=>e.id),gt={org_admin:{userId:"demo-org-admin",displayName:"林致远",email:"lin.zhiyuan@pacom.cn",phone:"13800138001",role:"org_admin",roleLabel:pt.org_admin,authMode:"demo",scope:{allowedProjectIds:[T.projectId,T.project1Id],allowedBuildingIds:[T.buildingId,T.buildingFId],allowedFloorIds:[...us],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩",email:"chen.mingxuan@pacom.cn",phone:"13800138002",role:"project_admin",roleLabel:pt.project_admin,authMode:"demo",scope:{allowedProjectIds:[T.projectId],allowedBuildingIds:[T.buildingId,T.buildingFId],allowedFloorIds:[...us],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},operator:{userId:"demo-operator-e7f",displayName:"周宁",email:"zhou.ning@pacom.cn",phone:"13800138003",role:"operator",roleLabel:pt.operator,authMode:"demo",scope:{allowedProjectIds:[T.projectId],allowedBuildingIds:[T.buildingId],allowedFloorIds:[T.floorId],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}},space_user:{userId:"demo-space-user-e7f",displayName:"沈嘉",email:"shen.jia@pacom.cn",phone:"13800138004",role:"space_user",roleLabel:pt.space_user,authMode:"demo",scope:{allowedProjectIds:[T.projectId],allowedBuildingIds:[T.buildingId],allowedFloorIds:[T.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],visibleModules:["home","account"],canControlDevices:!0,canManageAlarms:!1,canEditScenes:!1,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}}},na="pacom.web.demo.role",ms="pacom.web.demo.spatial.v5",vs="pacom.web.demo.orgs.v1",fs="pacom.web.demo.activeOrg.v1",gs="pacom.web.demo.deployExt.v1",nt="org-gzlab";function bs(e){return`mesh-${e.replace(/[^a-z0-9]/gi,"").slice(-4).toLowerCase()||"01"}`}function hs(){return{extraDevices:[],planChangeAlerts:{},floorFttRecords:{},configRevisionByFloor:{[T.floorId]:1},deliverySnapshotMeta:{},deferredFloorIds:[],lightMarkers:[{id:"lm-1",deviceId:"dev-e7f-lt-01",floorId:T.floorId,channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",floorId:T.floorId,channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",floorId:T.floorId,channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],meshRoles:{"dev-e7f-gw-01":{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"},"dev-e7f-lt-01":{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"},"dev-e7f-lt-02":{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"},"dev-e7f-env-01":{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}},edgeSyncByFloor:{[T.floorId]:{version:3,dirty:!1,lastSyncedAt:"2026-11-25T09:00:00Z"}},deviceParams:{},groups:[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:T.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:T.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:T.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:T.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],docs:[{id:"doc-hvac-7f",floorId:T.floorId,name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F ｜ 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",floorId:T.floorId,name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F ｜ 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",floorId:T.floorId,name:"E7F_协议点位与蓝牙Mesh映射表.xlsx",category:"点位清单",boundScope:"E栋 7F ｜ 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",floorId:T.floorId,name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 ｜ FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}]}}class ln{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;inviteMissTimestamps=[];inviteLockedUntil=0;sentCodeTargets=new Set;joinReceipts=new Map;joinWithdrawTokens=new Map;joinAccountByRequestId=new Map;pendingApprovalAccounts=new Set;orgs;activeOrgId;spatial;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;overrides;deployExt;constructor(){this.orgs=this.loadOrgs();const t=typeof localStorage<"u"?localStorage.getItem(fs):null,a=this.orgs.find(l=>l.id===t)??this.orgs[0];this.activeOrgId=a.id,this.spatial=a.spatial,this.overrides=[],this.syncAdminScopesFromSpatial();const n=typeof sessionStorage<"u"?sessionStorage.getItem(na):null;n&&gt[n]&&(this.activeSession=structuredClone(gt[n]),this.applyOverridesToSession());const o=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:T.projectId,buildingId:T.buildingId,floorId:T.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:T.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:o,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:o,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:T.projectId,buildingId:T.buildingId,floorId:T.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:T.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:o,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:T.projectId,buildingId:T.buildingId,floorId:T.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:T.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:o,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:T.projectId,buildingId:T.buildingId,floorId:T.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:T.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:o,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:o,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:o,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02",category:"hvac",projectId:T.projectId,buildingId:T.buildingId,floorId:T.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:T.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:o,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:T.projectId,buildingId:T.buildingId,floorId:T.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:T.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:o,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:o,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:o,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:T.projectId,buildingId:T.buildingId,floorId:T.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:T.projectId,buildingId:T.buildingId,floorId:T.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:T.projectId,buildingId:T.buildingId,floorId:T.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:T.projectId,buildingId:T.buildingId,floorId:T.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:o},{id:"conn-e7f-dali",projectId:T.projectId,buildingId:T.buildingId,floorId:T.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:o},{id:"conn-e7f-modbus",projectId:T.projectId,buildingId:T.buildingId,floorId:T.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deployExt=this.loadDeployExtensions(),this.deployExt.seedDevicesOverride&&this.activeOrgId===nt&&(this.devices=structuredClone(this.deployExt.seedDevicesOverride)),this.deployExt.connectionsOverride&&(this.connections=structuredClone(this.deployExt.connectionsOverride)),this.deliveryBatches=this.deployExt.deliveryBatchesOverride?structuredClone(this.deployExt.deliveryBatchesOverride):[{id:"dlv-e7f-20261120",projectId:T.projectId,floorId:T.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:T.projectId,floorId:T.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:T.projectId,floorId:T.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:T.projectId,floorId:T.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:T.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:T.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:o,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:T.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:o,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:T.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:T.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh ｜ 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:T.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:o,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:T.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(gt).map((l,p)=>({userId:l.userId,displayName:l.displayName,email:`${l.role.replaceAll("_",".")}@gzlab.ac.cn`,role:l.role,roleLabel:l.roleLabel,scopeSummary:l.scope.allowedZoneIds?.length?`E栋 7F（${l.scope.allowedZoneIds.length} 个授权功能区）`:`${l.scope.allowedProjectIds.length} 项目 / ${l.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:p===0?o:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁",role:"operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"陈明轩",role:"project_admin",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉",role:"space_user",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}reconcileOverrides(){const t=Date.now();for(const a of this.overrides)a.status==="active"&&new Date(a.expiresAt).getTime()<=t&&(a.status="expired")}applyOverridesToSession(){if(this.reconcileOverrides(),!this.activeSession)return;const t=gt[this.activeSession.role].scope,a=this.overrides.filter(n=>n.targetUserId===this.activeSession.userId&&n.status==="active");this.activeSession.scope.activeOverrides=structuredClone(a),this.activeSession.scope.canEditDeployment=t.canEditDeployment||a.some(n=>n.module==="deployment"),this.activeSession.scope.canEditSettings=t.canEditSettings||a.some(n=>n.module==="settings")}record(t,a,n,o,l){this.traces.unshift({at:new Date().toISOString(),channel:t,operation:a,endpoint:n,request:l,response:o}),this.traces.length>40&&this.traces.pop()}pushAudit(t,a,n,o){const l=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:l?.displayName??"anonymous",role:l?.role??"space_user",action:t,target:a,result:n,detail:o})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.applyOverridesToSession(),this.activeSession}async getSession(){return this.applyOverridesToSession(),this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(t){const a=t.method??"password",n=t.account.trim(),o=this.normalizeContactKey(n);if(!n)throw new Error("400 BAD_REQUEST: 请输入电子邮箱或手机号码");if(a==="sms"){const d=(t.smsCode??t.password??"").trim();if(!/^\d{6}$/.test(d))throw new Error("验证码不正确或已过期");const h=`login:${o}`;if(!this.sentCodeTargets.has(h))throw new Error("请先获取短信验证码");this.sentCodeTargets.delete(h)}else if(!(t.password??"").trim())throw new Error("400 BAD_REQUEST: 请输入账户和密码");if(this.pendingApprovalAccounts.has(o))throw new Error("你的加入申请正在等待机构管理员审批，批准后即可登录。");const l=Object.values(gt).find(d=>{const h=!!d.email&&this.normalizeContactKey(d.email)===o,v=!!d.phone&&this.normalizeContactKey(d.phone)===o;return h||v}),p=n.toLowerCase(),w=l?l.role:p.includes("org")||p.includes("admin")?"org_admin":p.includes("proj")?"project_admin":p.includes("space")||p.includes("member")?"space_user":"operator";return this.activeSession=structuredClone(gt[w]),this.applyOverridesToSession(),sessionStorage.setItem(na,w),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{method:a,account:n,rememberMe:!!t.rememberMe}),this.pushAudit("auth.login",this.activeSession.userId,"success",a==="sms"?"短信验证码登录":"密码登录"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(na),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}maskTarget(t){const a=t.trim();if(a.includes("@")){const[o,l]=a.split("@");return o&&l?`${o[0]}•••@${l}`:"••••"}const n=a.replace(/\D/g,"");return n.length===11?`${n.slice(0,3)} •••• ${n.slice(7)}`:n.length>=6?`${n.slice(0,3)} •••• ${n.slice(-4)}`:"••••"}async sendVerificationCode(t){const a=t.target.trim(),n=a.includes("@")?"email":"sms";this.sentCodeTargets.add(`${t.purpose}:${this.normalizeContactKey(a)}`);const o={maskedTarget:this.maskTarget(a),channel:n,cooldownSeconds:60};return this.record("REST","sendVerificationCode","POST /api/v1/auth/verification-codes",o,{purpose:t.purpose,channel:n}),o}async confirmPasswordReset(t){const a=t.account.trim(),n=this.normalizeContactKey(a);if(!a)throw new Error("请输入电子邮箱或手机号码");if(!/^\d{6}$/.test(t.verificationCode.trim()))throw new Error("验证码不正确或已过期");const o=`reset:${n}`;if(!this.sentCodeTargets.has(o))throw new Error("请先获取验证码");if(!t.newPassword||t.newPassword.length<8)throw new Error("密码至少需要 8 个字符");this.sentCodeTargets.delete(o),this.record("REST","confirmPasswordReset","POST /api/v1/auth/password-reset/confirm",{ok:!0},{account:this.maskTarget(a)}),this.pushAudit("auth.password_reset",this.maskTarget(a),"success")}async resolveInviteCode(t){const a=Date.now();if(this.inviteLockedUntil>a)return{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const n=t.replace(/\D/g,""),l={482916305:this.orgs[0]?.name??"广州国家实验室",618204917:"天环智慧园区"}[n];if(!l){if(this.inviteMissTimestamps=this.inviteMissTimestamps.filter(d=>a-d<36e5),this.inviteMissTimestamps.push(a),this.inviteMissTimestamps.length>=10)return this.inviteLockedUntil=a+36e5,this.inviteMissTimestamps=[],{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const w={valid:!1,message:"邀请码不正确或已失效，请向机构管理员确认。"};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",w,{code:n}),w}const p={valid:!0,organizationName:l};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",p,{code:n}),p}async registerAndJoin(t){const a=await this.resolveInviteCode(t.inviteCode);if(!a.valid||!a.organizationName)throw new Error(a.message??"邀请码不正确或已失效，请向机构管理员确认。");if(!/^\d{6}$/.test(t.verificationCode.trim()))throw new Error("验证码不正确或已过期");const n=this.normalizeContactKey(t.account),o=`register_join:${n}`;if(!this.sentCodeTargets.has(o))throw new Error("请先获取验证码");const l=t.account.includes("@")?"email":"phone";if(this.isContactOccupied(l,t.account))throw new Error("该账户已注册，请直接登录或联系机构管理员发送定向邀请。");if(this.pendingApprovalAccounts.has(n))throw new Error("该账户已提交加入申请，正在等待机构管理员审批。");this.sentCodeTargets.delete(o);const p=`JR-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,w=`wt-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`,d={requestId:p,organizationName:a.organizationName,maskedAccount:this.maskTarget(t.account),status:"pending_approval",submittedAt:new Date().toISOString(),withdrawToken:w};return this.joinReceipts.set(p,d),this.joinWithdrawTokens.set(p,w),this.joinAccountByRequestId.set(p,n),this.pendingApprovalAccounts.add(n),this.record("REST","registerAndJoin","POST /api/v1/auth/register-join",d,{organizationName:a.organizationName,displayName:t.displayName}),d}async withdrawJoinApplication(t,a){const n=this.joinWithdrawTokens.get(t);if(n&&a!==n)throw new Error("撤回凭证无效或已失效，请刷新后重试。");this.joinReceipts.delete(t),this.joinWithdrawTokens.delete(t);const o=this.joinAccountByRequestId.get(t);o&&(this.pendingApprovalAccounts.delete(o),this.joinAccountByRequestId.delete(t)),this.record("REST","withdrawJoinApplication",`DELETE /api/v1/org/join-requests/${t}`,{ok:!0})}async submitOrgApplication(t){if(!/^\d{6}$/.test(t.smsCode.trim()))throw new Error("验证码不正确或已过期");const a=`org_apply:${this.normalizeContactKey(t.phone)}`;if(!this.sentCodeTargets.has(a))throw new Error("请先获取短信验证码");this.sentCodeTargets.delete(a);const n=t.province===t.city?t.province:`${t.province} ${t.city}`,o={applicationId:`APP-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,organizationName:t.organizationName.trim(),region:n,maskedEmail:this.maskTarget(t.email),status:"pending_review",submittedAt:new Date().toISOString()};return this.record("REST","submitOrgApplication","POST /api/v1/org/applications",o,{organizationName:o.organizationName,region:n}),o}async getInvitationPreview(t){const a=t.trim(),n=this.orgs[0]?.name??"广州国家实验室",o=new Date(Date.now()+7*864e5).toISOString().slice(0,10);return a==="expired"?{token:a,kind:"member",organizationName:n,inviterName:"林致远",role:"operator",roleLabel:pt.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!1,requiredSecondaryChannel:null,expiresAt:"2026-11-20",status:"expired"}:a==="revoked"?{token:a,kind:"member",organizationName:n,inviterName:"林致远",role:"operator",roleLabel:pt.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!1,requiredSecondaryChannel:null,expiresAt:o,status:"revoked"}:a==="accepted"?{token:a,kind:"member",organizationName:n,inviterName:"林致远",role:"operator",roleLabel:pt.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!0,requiredSecondaryChannel:null,expiresAt:o,status:"accepted"}:a.startsWith("owner")?{token:a,kind:"owner",organizationName:"广州天环智能科技有限公司",role:"org_admin",roleLabel:pt.org_admin,targetChannel:"email",targetValue:"chen@company.com",prefillName:"陈志远",accountExists:!1,requiredSecondaryChannel:null,verifiedSecondaryMasked:"139 •••• 9000",expiresAt:o,status:"pending"}:a==="admin-email"?{token:a,kind:"member",organizationName:n,inviterName:"林致远",role:"org_admin",roleLabel:pt.org_admin,targetChannel:"email",targetValue:"zhao.admin@pacom.cn",prefillName:"赵启明",accountExists:!1,requiredSecondaryChannel:ra("member","org_admin","email"),expiresAt:o,status:"pending"}:a==="admin-phone"?{token:a,kind:"member",organizationName:n,inviterName:"林致远",role:"org_admin",roleLabel:pt.org_admin,targetChannel:"phone",targetValue:"13900139088",prefillName:"赵启明",accountExists:!1,requiredSecondaryChannel:ra("member","org_admin","phone"),expiresAt:o,status:"pending"}:a==="project-admin-email"?{token:a,kind:"member",organizationName:n,inviterName:"林致远",role:"project_admin",roleLabel:pt.project_admin,targetChannel:"email",targetValue:"wu.proj@pacom.cn",prefillName:"吴承志",accountExists:!1,requiredSecondaryChannel:ra("member","project_admin","email"),expiresAt:o,status:"pending"}:a==="project-admin-phone"?{token:a,kind:"member",organizationName:n,inviterName:"林致远",role:"project_admin",roleLabel:pt.project_admin,targetChannel:"phone",targetValue:"13700137066",prefillName:"吴承志",accountExists:!1,requiredSecondaryChannel:ra("member","project_admin","phone"),expiresAt:o,status:"pending"}:a==="existing-demo"?{token:a,kind:"member",organizationName:"天环智慧园区",inviterName:"林致远",role:"operator",roleLabel:pt.operator,targetChannel:"email",targetValue:"zhou.ning@pacom.cn",prefillName:"周宁",accountExists:!0,requiredSecondaryChannel:null,expiresAt:o,status:"pending"}:{token:a||"member-demo",kind:"member",organizationName:n,inviterName:"林致远",role:"operator",roleLabel:pt.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",prefillName:"林明远",accountExists:!1,requiredSecondaryChannel:null,expiresAt:o,status:"pending"}}normalizeContactKey(t){return t.trim().toLowerCase().replace(/[\s\-()]/g,"")}isContactOccupied(t,a){const n=this.normalizeContactKey(a);return Object.values(gt).some(o=>{const l=t==="email"?o.email:o.phone;return!!l&&this.normalizeContactKey(l)===n})}async acceptInvitation(t){const a=await this.getInvitationPreview(t.token);if(a.status!=="pending")throw new Error("邀请已过期或已失效，请联系邀请人重新发送。");const n=a.kind==="owner"?"org_admin":a.role??"operator",o=this.activeSession;if(!!o&&(a.targetChannel==="email"&&!!o?.email&&this.normalizeContactKey(o.email)===this.normalizeContactKey(a.targetValue)||a.targetChannel==="phone"&&!!o?.phone&&this.normalizeContactKey(o.phone)===this.normalizeContactKey(a.targetValue))&&o){const h=structuredClone(o);return this.activeSession=h,this.applyOverridesToSession(),sessionStorage.setItem(na,h.role),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${t.token}/accept`,h),this.pushAudit("auth.invite.accept",h.userId,"success","已有账户确认加入"),structuredClone(h)}if(a.accountExists)throw new Error("该账户已注册，请使用原账户登录后再接受邀请。");const p=a.requiredSecondaryChannel!==void 0?a.requiredSecondaryChannel:ra(a.kind,a.role,a.targetChannel);let w="";if(p){const h=(t.secondaryContact??"").trim(),v=(t.secondaryVerificationCode??"").trim();if(!h)throw new Error(p==="phone"?"请补充并验证手机号码":"请补充并验证电子邮箱");if(!/^\d{6}$/.test(v))throw new Error("验证码不正确或已过期");const x=`bind:${this.normalizeContactKey(h)}`;if(!this.sentCodeTargets.has(x))throw new Error("请先获取验证码");if(this.isContactOccupied(p,h))throw new Error(p==="phone"?"该手机号码已绑定其他账户，请更换后重试；如原账户为你本人所有，请使用原账户登录或联系管理员重新邀请。":"该电子邮箱已绑定其他账户，请更换后重试；如原账户为你本人所有，请使用原账户登录或联系管理员重新邀请。");this.sentCodeTargets.delete(x),w=h}const d=structuredClone(gt[n]);return t.displayName?.trim()&&(d.displayName=t.displayName.trim()),a.targetChannel==="email"?(d.email=a.targetValue,d.phone=w||(a.kind==="owner"?"13900139000":void 0)):(d.phone=a.targetValue,d.email=w||void 0),this.activeSession=d,this.applyOverridesToSession(),sessionStorage.setItem(na,n),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${t.token}/accept`,d),this.pushAudit("auth.invite.accept",d.userId,"success"),structuredClone(d)}async switchDemoRole(t){return this.activeSession=structuredClone(gt[t]),this.applyOverridesToSession(),sessionStorage.setItem(na,t),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${t}`,this.activeSession),structuredClone(this.activeSession)}loadLegacySpatial(){try{if(typeof localStorage<"u"){const t=localStorage.getItem(ms);if(t){const a=JSON.parse(t);if(Array.isArray(a?.projects)&&Array.isArray(a?.buildings)&&Array.isArray(a?.floors)&&Array.isArray(a?.zones))return a}}}catch{}return structuredClone(Bs)}loadOrgs(){try{if(typeof localStorage<"u"){const t=localStorage.getItem(vs);if(t){const a=JSON.parse(t);if(Array.isArray(a)&&a.length>0&&a.every(n=>n?.id&&n?.name&&Array.isArray(n?.spatial?.projects)))return a}}}catch{}return[{id:nt,name:"广州国家实验室",spatial:this.loadLegacySpatial()}]}persistSpatial(){const t=this.orgs.find(a=>a.id===this.activeOrgId);t&&(t.spatial=this.spatial),this.syncAdminScopesFromSpatial();try{typeof localStorage<"u"&&(localStorage.setItem(vs,JSON.stringify(this.orgs)),localStorage.setItem(fs,this.activeOrgId),this.activeOrgId===nt&&localStorage.setItem(ms,JSON.stringify(this.spatial)))}catch{}}async listOrganizations(){return this.orgs.map(t=>({id:t.id,name:t.name,projectCount:t.spatial.projects.length}))}getActiveOrganizationId(){return this.activeOrgId}loadDeployExtensions(){try{if(typeof localStorage<"u"){const t=localStorage.getItem(`${gs}.${this.activeOrgId}`);if(t){const a=JSON.parse(t),n=this.activeOrgId===nt?hs():{extraDevices:[],lightMarkers:[],meshRoles:{},edgeSyncByFloor:{},deviceParams:{},groups:[],docs:[],planChangeAlerts:{},floorFttRecords:{},configRevisionByFloor:{},deliverySnapshotMeta:{},deferredFloorIds:[]};return{extraDevices:Array.isArray(a.extraDevices)?a.extraDevices:n.extraDevices,seedDevicesOverride:Array.isArray(a.seedDevicesOverride)?a.seedDevicesOverride:void 0,lightMarkers:Array.isArray(a.lightMarkers)?a.lightMarkers:n.lightMarkers,meshRoles:a.meshRoles&&typeof a.meshRoles=="object"?a.meshRoles:n.meshRoles,edgeSyncByFloor:a.edgeSyncByFloor&&typeof a.edgeSyncByFloor=="object"?a.edgeSyncByFloor:n.edgeSyncByFloor,deviceParams:a.deviceParams&&typeof a.deviceParams=="object"?a.deviceParams:n.deviceParams,groups:Array.isArray(a.groups)?a.groups:n.groups,docs:Array.isArray(a.docs)?a.docs:n.docs,connectionsOverride:Array.isArray(a.connectionsOverride)?a.connectionsOverride:void 0,deliveryBatchesOverride:Array.isArray(a.deliveryBatchesOverride)?a.deliveryBatchesOverride:void 0,planChangeAlerts:a.planChangeAlerts&&typeof a.planChangeAlerts=="object"?a.planChangeAlerts:n.planChangeAlerts,floorFttRecords:a.floorFttRecords&&typeof a.floorFttRecords=="object"?a.floorFttRecords:n.floorFttRecords,configRevisionByFloor:a.configRevisionByFloor&&typeof a.configRevisionByFloor=="object"?a.configRevisionByFloor:n.configRevisionByFloor,deliverySnapshotMeta:a.deliverySnapshotMeta&&typeof a.deliverySnapshotMeta=="object"?a.deliverySnapshotMeta:n.deliverySnapshotMeta,deferredFloorIds:Array.isArray(a.deferredFloorIds)?a.deferredFloorIds:n.deferredFloorIds}}}}catch{}return this.activeOrgId===nt?hs():{extraDevices:[],lightMarkers:[],meshRoles:{},edgeSyncByFloor:{},deviceParams:{},groups:[],docs:[],planChangeAlerts:{},floorFttRecords:{},configRevisionByFloor:{},deliverySnapshotMeta:{},deferredFloorIds:[]}}persistDeployExtensions(){try{typeof localStorage<"u"&&localStorage.setItem(`${gs}.${this.activeOrgId}`,JSON.stringify(this.deployExt))}catch{}}findAllDevices(){return[...this.activeOrgId===nt?this.devices:[],...this.deployExt.extraDevices]}markEdgeSyncDirty(t){const a=this.deployExt.edgeSyncByFloor[t]??{version:1,dirty:!1,lastSyncedAt:null};this.deployExt.edgeSyncByFloor[t]={...a,dirty:!0}}getFloorConfigSignature(t){const a=this.deployExt.configRevisionByFloor[t]??1,n=this.deployExt.edgeSyncByFloor[t]?.version??1;return`rev-${a}-sync-${n}`}invalidateFloorVerification(t,a=!0){this.deployExt.configRevisionByFloor[t]=(this.deployExt.configRevisionByFloor[t]??1)+1,delete this.deployExt.floorFttRecords[t],a&&this.markEdgeSyncDirty(t)}buildSnapshotMetaForFloor(t,a){const n=this.spatial.floors.find(d=>d.id===a),o=this.findAllDevices().filter(d=>d.floorId===a),l=new Map(this.spatial.zones.map(d=>[d.id,d.name])),p=this.deployExt.edgeSyncByFloor[a]??{version:1},w=this.deployExt.floorFttRecords[a]??null;return{batchId:t,floorId:a,floorName:n?.name??a,planVersion:n?.plan?.planVersion??0,edgeSyncVersion:p.version,configSignature:this.getFloorConfigSignature(a),fttPassedAt:w?.passedAt??null,devices:o.map(d=>({id:d.id,name:d.name,category:d.category,zoneLabel:d.logicalZoneId?l.get(d.logicalZoneId)??"未分配功能区":"未分配功能区",placed:!!d.planPoint,bound:!!d.hardwareBinding,protocol:d.hardwareBinding?.protocol,address:d.hardwareBinding?.networkAddress,physicalInstalled:d.physicalInstalled,connectivity:d.connectivity}))}}async switchOrganization(t){const a=this.orgs.find(n=>n.id===t);if(!a)throw new Error(`404 NOT_FOUND: 机构 ${t} 不存在`);this.activeOrgId=a.id,this.spatial=a.spatial,this.deployExt=this.loadDeployExtensions(),this.deliveryBatches=this.deployExt.deliveryBatchesOverride?structuredClone(this.deployExt.deliveryBatchesOverride):this.activeOrgId===nt?[{id:"dlv-e7f-20261120",projectId:T.projectId,floorId:T.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}]:[],this.persistSpatial()}async createOrganization(t){if(this.requireSession().role!=="org_admin")throw new Error("403 FORBIDDEN: 仅机构管理员可新建机构");const n=t.trim()||"新建机构",o={id:`org-${Date.now().toString(36)}`,name:n,spatial:{projects:[],buildings:[],floors:[],zones:[]}};return this.orgs.push(o),this.activeOrgId=o.id,this.spatial=o.spatial,this.deployExt=this.loadDeployExtensions(),this.deliveryBatches=[],this.persistSpatial(),this.pushAudit("org.create",o.id,"success",n),{id:o.id,name:o.name,projectCount:0}}syncAdminScopesFromSpatial(){const t=this.spatial.projects.map(o=>o.id),a=this.spatial.buildings.map(o=>o.id),n=this.spatial.floors.map(o=>o.id);this.activeOrgId===nt&&(gt.org_admin.scope.allowedProjectIds=[...t],gt.org_admin.scope.allowedBuildingIds=[...a],gt.org_admin.scope.allowedFloorIds=[...n],gt.project_admin.scope.allowedProjectIds=[...t],gt.project_admin.scope.allowedBuildingIds=[...a],gt.project_admin.scope.allowedFloorIds=[...n]),this.activeSession&&(this.activeOrgId!==nt||this.activeSession.role==="org_admin"||this.activeSession.role==="project_admin"||this.activeSession.scope.canEditDeployment)&&(this.activeSession.scope.allowedProjectIds=[...t],this.activeSession.scope.allowedBuildingIds=[...a],this.activeSession.scope.allowedFloorIds=[...n])}async getSpatialTree(){const t=this.requireSession();if(this.activeOrgId!==nt){const h=structuredClone(this.spatial);return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:h.projects.length,buildings:h.buildings.length,floors:h.floors.length}),h}const a=this.spatial.projects.filter(h=>t.scope.allowedProjectIds.includes(h.id)),n=this.spatial.buildings.filter(h=>t.scope.allowedBuildingIds.includes(h.id)),o=new Set(n.map(h=>h.id)),l=this.spatial.floors.filter(h=>o.has(h.buildingId)),p=new Set(l.map(h=>h.id)),w=this.spatial.zones.filter(h=>p.has(h.floorId)),d=structuredClone({projects:a,buildings:n,floors:l,zones:w});return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:d.projects.length,buildings:d.buildings.length,floors:d.floors.length}),d}async createProject(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权创建项目`);const n={id:`project-${Date.now().toString(36)}`,name:t.name.trim()||"新建项目",city:t.city?.trim()||"广州市",address:t.address?.trim()||"",timezone:"Asia/Shanghai",location:t.location,imageUrl:t.imageUrl??"./media/gzlab.jpg"};return this.spatial.projects.push(n),a.scope.allowedProjectIds.includes(n.id)||a.scope.allowedProjectIds.push(n.id),this.persistSpatial(),this.record("REST","createProject","POST /api/v1/projects",n,t),this.pushAudit("project.create",n.id,"success",n.name),structuredClone(n)}async updateProject(t,a){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权修改项目配置`);const o=this.spatial.projects.find(l=>l.id===t);if(!o)throw new Error(`404 NOT_FOUND: 项目 ${t} 不存在`);return a.name!==void 0&&(o.name=a.name.trim()||o.name),a.city!==void 0&&(o.city=a.city.trim()),a.address!==void 0&&(o.address=a.address.trim()),a.location!==void 0&&(o.location=a.location),a.imageUrl!==void 0&&(o.imageUrl=a.imageUrl),this.persistSpatial(),this.record("REST","updateProject",`PATCH /api/v1/projects/${t}`,o,a),this.pushAudit("project.update",t,"success",o.name),structuredClone(o)}async deleteProject(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除项目`);if(t===T.projectId)throw new Error("400 BAD_REQUEST: 当前项目包含运行中设备，请先清理后再删除");const n=new Set(this.spatial.buildings.filter(l=>l.projectId===t).map(l=>l.id)),o=new Set(this.spatial.floors.filter(l=>n.has(l.buildingId)).map(l=>l.id));this.spatial.projects=this.spatial.projects.filter(l=>l.id!==t),this.spatial.buildings=this.spatial.buildings.filter(l=>l.projectId!==t),this.spatial.floors=this.spatial.floors.filter(l=>!n.has(l.buildingId)),this.spatial.zones=this.spatial.zones.filter(l=>!o.has(l.floorId)),this.persistSpatial(),this.record("REST","deleteProject",`DELETE /api/v1/projects/${t}`,{ok:!0}),this.pushAudit("project.delete",t,"success")}async upsertBuilding(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护楼宇`);let n=t.id?this.spatial.buildings.find(o=>o.id===t.id):void 0;return n?(n.name=t.name.trim()||n.name,n.aboveFloors=Math.max(0,t.aboveFloors),n.belowFloors=Math.max(0,t.belowFloors),n.hasRoof=t.hasRoof,t.areaSqm!==void 0&&(n.areaSqm=t.areaSqm),t.imageUrl!==void 0&&(n.imageUrl=t.imageUrl)):(n={id:`building-${Date.now().toString(36)}`,projectId:t.projectId,name:t.name.trim()||"新建楼宇",aboveFloors:Math.max(1,t.aboveFloors),belowFloors:Math.max(0,t.belowFloors),hasRoof:t.hasRoof,areaSqm:t.areaSqm??null,imageUrl:t.imageUrl??"./media/building-e.webp"},this.spatial.buildings.push(n)),this.persistSpatial(),this.record("REST","upsertBuilding","PUT /api/v1/buildings",n,t),this.pushAudit("building.upsert",n.id,"success",n.name),structuredClone(n)}async deleteBuilding(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除楼宇`);if(t===T.buildingId)throw new Error("400 BAD_REQUEST: 当前楼宇包含运行中设备，请先解绑后再删除");const n=new Set(this.spatial.floors.filter(o=>o.buildingId===t).map(o=>o.id));this.spatial.buildings=this.spatial.buildings.filter(o=>o.id!==t),this.spatial.floors=this.spatial.floors.filter(o=>o.buildingId!==t),this.spatial.zones=this.spatial.zones.filter(o=>!n.has(o.floorId)),this.persistSpatial(),this.record("REST","deleteBuilding",`DELETE /api/v1/buildings/${t}`,{ok:!0}),this.pushAudit("building.delete",t,"success")}async upsertFloor(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护楼层`);const n=new Date().toISOString();let o=t.id?this.spatial.floors.find(l=>l.id===t.id):void 0;if(o){if(o.name=t.name.trim()||o.name,o.kind=t.kind,o.level=t.level,t.areaSqm!==void 0&&(o.areaSqm=t.areaSqm),t.planImageUrl!==void 0){const l=!!o.plan?.imageUrl,p=o.plan?.planVersion??0,w=!!(t.planImageUrl&&l&&t.planImageUrl!==o.plan?.imageUrl),d=this.findAllDevices().some(h=>h.floorId===o.id);o.plan=t.planImageUrl?{floorId:o.id,imageUrl:t.planImageUrl,planVersion:p+1,updatedAt:n}:null,w&&d?(this.deployExt.planChangeAlerts[o.id]={floorId:o.id,planChangedAt:n,previousVersion:p,currentVersion:p+1},this.invalidateFloorVerification(o.id,!1),this.persistDeployExtensions()):t.planImageUrl||(delete this.deployExt.planChangeAlerts[o.id],this.invalidateFloorVerification(o.id,!1),this.persistDeployExtensions())}}else{const l=`floor-${t.buildingId.slice(-6)}-${t.kind}-${Math.abs(t.level)}-${Date.now().toString(36).slice(-3)}`;o={id:l,buildingId:t.buildingId,kind:t.kind,level:t.level,name:t.name.trim()||`${t.level}F`,areaSqm:t.areaSqm??null,plan:t.planImageUrl?{floorId:l,imageUrl:t.planImageUrl,planVersion:1,updatedAt:n}:null},this.spatial.floors.push(o),this.activeSession&&!this.activeSession.scope.allowedFloorIds.includes(o.id)&&this.activeSession.scope.allowedFloorIds.push(o.id)}return this.persistSpatial(),this.record("REST","upsertFloor","PUT /api/v1/floors",{id:o.id,name:o.name,hasPlan:!!o.plan}),this.pushAudit("floor.upsert",o.id,"success",o.name),structuredClone(o)}async deleteFloor(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除楼层`);const n=this.findAllDevices().filter(o=>o.floorId===t).length;if(n>0)throw new Error(`400 BAD_REQUEST: 当前楼层已关联 ${n} 台设备，请先清理或解绑后再删除`);this.spatial.floors=this.spatial.floors.filter(o=>o.id!==t),this.spatial.zones=this.spatial.zones.filter(o=>o.floorId!==t),delete this.deployExt.planChangeAlerts[t],delete this.deployExt.floorFttRecords[t],this.persistSpatial(),this.persistDeployExtensions(),this.record("REST","deleteFloor",`DELETE /api/v1/floors/${t}`,{ok:!0}),this.pushAudit("floor.delete",t,"success")}async upsertZone(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护功能区`);let n=t.id?this.spatial.zones.find(o=>o.id===t.id):void 0;return n?(n.name=t.name.trim()||n.name,n.category=t.category):(n={id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,floorId:t.floorId,name:t.name.trim(),category:t.category},this.spatial.zones.push(n)),this.persistSpatial(),this.record("REST","upsertZone","PUT /api/v1/zones",n),this.pushAudit("zone.upsert",n.id,"success",n.name),structuredClone(n)}async deleteZone(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除功能区`);this.spatial.zones=this.spatial.zones.filter(n=>n.id!==t),this.persistSpatial(),this.record("REST","deleteZone",`DELETE /api/v1/zones/${t}`,{ok:!0}),this.pushAudit("zone.delete",t,"success")}async copyZonesToFloors(t,a){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权复制功能区`);const o=this.spatial.floors.find(w=>w.id===t),l=this.spatial.zones.filter(w=>w.floorId===t);if(!o||l.length===0)return 0;let p=0;for(const w of a){if(w===t)continue;const d=this.spatial.floors.find(v=>v.id===w);if(!d)continue;const h=new Set(this.spatial.zones.filter(v=>v.floorId===w).map(v=>v.name));for(const v of l){const x=v.name.replace(new RegExp(`^${o.name}\\s*`,"i"),""),E=`${d.name} ${x}`.trim();h.has(E)||(this.spatial.zones.push({id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,floorId:w,name:E,category:v.category}),h.add(E),p+=1)}}return p>0&&this.persistSpatial(),this.record("REST","copyZonesToFloors","POST /api/v1/zones/copy",{sourceFloorId:t,targetCount:a.length,added:p}),p}async getFloorDevices(t){const a=this.requireSession();if(!t)return[];if(this.activeOrgId===nt&&!a.scope.allowedFloorIds.includes(t)){const o={code:"FORBIDDEN",status:403,message:`当前角色「${a.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,o),this.pushAudit("floor.read",t,"denied",o.message),new Error(`403 FORBIDDEN: ${o.message}`)}let n=structuredClone(this.findAllDevices().filter(o=>o.floorId===t));return a.scope.allowedZoneIds?.length&&(n=n.filter(o=>o.logicalZoneId&&a.scope.allowedZoneIds.includes(o.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${t}/devices`,{count:n.length}),n}async dispatchControlBatch(t){const a=this.requireSession();if(!a.scope.canControlDevices||!a.scope.allowedFloorIds.includes(t.floorId))throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权下发控制指令`);const n=`batch-e7f-${Date.now().toString(36)}`,o={batchId:n,floorId:t.floorId,createdBy:a.userId,createdAt:new Date().toISOString(),receipts:t.targets.map(l=>({deviceId:l.deviceId,command:l.command,targetValue:l.targetValue,status:"queued"}))};return this.batches.set(n,o),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",o,t),this.pushAudit("control.dispatch",n,"success",`下发 ${t.targets.length} 台设备`),o.receipts.forEach((l,p)=>{const w=this.devices.find(d=>d.id===l.deviceId);setTimeout(()=>{l.status="dispatched",l.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:n,deviceId:l.deviceId,status:"dispatched",at:l.dispatchedAt})},280+p*120),setTimeout(()=>{const d=new Date().toISOString();!w||w.connectivity==="offline"?(l.status="timeout",l.errorCode="GATEWAY_READBACK_TIMEOUT",l.errorMessage="设备离线，网关未收到回读确认",l.verifiedAt=d):(l.status="verified_success",l.observedValue=l.targetValue,l.verifiedAt=d,this.applyObservedTelemetry(w,l.command,l.targetValue,d)),this.emit({type:"control.receipt.updated",batchId:n,deviceId:l.deviceId,status:l.status,observedValue:l.observedValue,at:d})},900+p*220)}),structuredClone(o)}applyObservedTelemetry(t,a,n,o){a==="lighting.dimming"&&t.telemetry.dimming?(t.telemetry.dimming={...t.telemetry.dimming,value:n,collectedAt:o,stale:!1},t.telemetry.power&&(t.telemetry.power={...t.telemetry.power,value:Number(n)>0,collectedAt:o,stale:!1})):(a==="lighting.power"||a==="hvac.power")&&t.telemetry.power?t.telemetry.power={...t.telemetry.power,value:n,collectedAt:o,stale:!1}:a==="hvac.setpoint"&&t.telemetry.setpoint&&(t.telemetry.setpoint={...t.telemetry.setpoint,value:n,collectedAt:o,stale:!1}),this.emit({type:"telemetry.updated",floorId:t.floorId,deviceId:t.id,collectedAt:o,values:{[a]:n}})}async getControlBatch(t){this.requireSession();const a=this.batches.get(t);if(!a)throw new Error(`404 NOT_FOUND: 批次 ${t} 不存在`);return structuredClone(a)}async listAlarms(t){const a=this.requireSession();return this.activeOrgId!==nt?[]:!a.scope.allowedFloorIds.includes(t)||t!==T.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(t,a){const n=this.requireSession();if(!n.scope.canManageAlarms){const l=`角色「${n.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",t,"denied",l),new Error(`403 FORBIDDEN: ${l}`)}const o=this.alarms.find(l=>l.id===t);if(!o)throw new Error(`404 NOT_FOUND: 告警 ${t} 不存在`);return o.status="acknowledged",o.acknowledgedAt=new Date().toISOString(),o.acknowledgedBy=n.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${t}/acknowledge`,o,{note:a}),this.pushAudit("alarm.acknowledge",t,"success",a),this.emit({type:"alarm.changed",floorId:o.floorId,alarmId:t,status:"acknowledged",at:o.acknowledgedAt}),structuredClone(o)}async listWorkOrders(t){const a=this.requireSession();return this.activeOrgId!==nt?[]:!a.scope.allowedFloorIds.includes(t)||t!==T.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(t){const a=this.requireSession();if(!a.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权创建工单`);const n=new Date().toISOString(),o={id:`wo-e7f-${Date.now().toString(36)}`,projectId:T.projectId,buildingId:T.buildingId,floorId:t.floorId,deviceId:t.deviceId??null,alarmId:t.alarmId??null,title:t.title,description:t.description,status:"open",assigneeId:null,createdAt:n,updatedAt:n};if(this.workOrders.unshift(o),t.alarmId){const l=this.alarms.find(p=>p.id===t.alarmId);l&&(l.workOrderId=o.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",o,t),this.pushAudit("work_order.create",o.id,"success",o.title),structuredClone(o)}async updateWorkOrderStatus(t,a){const n=this.requireSession();if(!n.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权流转工单`);const o=this.workOrders.find(l=>l.id===t);if(!o)throw new Error(`404 NOT_FOUND: 工单 ${t} 不存在`);return o.status=a,o.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${t}`,o,{status:a}),this.pushAudit("work_order.update",t,"success",`状态更新为 ${a}`),structuredClone(o)}async updateDevicePlanPoint(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw this.pushAudit("device.plan_point",t.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权编辑图纸标记`);const n=this.activeOrgId===nt?this.devices.find(p=>p.id===t.deviceId):void 0,o=n?void 0:this.deployExt.extraDevices.find(p=>p.id===t.deviceId),l=n??o;if(!l)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(l.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${l.version}，请刷新后重试`);return l.planPoint={floorId:t.floorId,planVersion:t.planVersion,x:Number(t.x.toFixed(4)),y:Number(t.y.toFixed(4))},l.version+=1,n&&this.activeOrgId===nt&&(this.deployExt.seedDevicesOverride=structuredClone(this.devices)),this.persistDeployExtensions(),this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${t.deviceId}/plan-point`,l,t),this.pushAudit("device.plan_point",t.deviceId,"success",`坐标更新 (${l.planPoint.x}, ${l.planPoint.y})`),structuredClone(l)}async updateDeviceHardwareBinding(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权修改硬件绑定`);const n=this.activeOrgId===nt?this.devices.find(w=>w.id===t.deviceId):void 0,o=n?void 0:this.deployExt.extraDevices.find(w=>w.id===t.deviceId),l=n??o;if(!l)throw new Error(`404 NOT_FOUND: 设备 ${t.deviceId} 不存在`);if(l.version!==t.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${l.version}）`);const p=new Date().toISOString();return l.physicalInstalled=t.physicalInstalled,l.physicalVerifiedAt=t.physicalInstalled?p:null,l.hardwareBinding={gatewayId:t.gatewayId,protocol:t.protocol,networkAddress:t.networkAddress,portOrChannel:t.portOrChannel,boundAt:p,boundBy:a.displayName},l.connectivity==="unknown"&&(l.connectivity="online"),l.version+=1,n&&this.activeOrgId===nt&&(this.deployExt.seedDevicesOverride=structuredClone(this.devices)),this.invalidateFloorVerification(l.floorId,!0),this.persistDeployExtensions(),this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${t.deviceId}/hardware-binding`,l,t),this.pushAudit("device.hardware_binding",t.deviceId,"success",`${t.protocol} ${t.networkAddress}`),structuredClone(l)}async listConnections(t){this.requireSession();const a=this.deployExt.connectionsOverride??(this.activeOrgId===nt?this.connections:[]);return structuredClone(t?a.filter(n=>n.projectId===t):a)}async listDeliveryBatches(t){return this.requireSession(),this.activeOrgId!==nt?structuredClone(this.deliveryBatches.filter(a=>a.floorId===t)):structuredClone(t?this.deliveryBatches.filter(a=>a.floorId===t):this.deliveryBatches)}async freezeDeliveryBatch(t,a){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权冻结交付批次`);const o=this.spatial.floors.find(G=>G.id===t),l=o?this.spatial.buildings.find(G=>G.id===o.buildingId):void 0,p=this.findAllDevices().filter(G=>G.floorId===t);if(p.length===0)throw new Error("400 BAD_REQUEST: 本层尚无已登记设备，无法生成正式交付冻结快照。");const w=p.filter(G=>G.physicalInstalled&&G.hardwareBinding).length,d=p.filter(G=>!!G.planPoint).length,h=p.filter(G=>G.connectivity==="online").length,v=this.deployExt.planChangeAlerts[t],x=this.deployExt.edgeSyncByFloor[t]??{version:1,dirty:!1},E=this.getFloorConfigSignature(t),F=this.deployExt.floorFttRecords[t],g=F&&(!F.configSignature||F.configSignature===E)&&(F.edgeSyncVersion===void 0||F.edgeSyncVersion===x.version)?F:null,c=[];if(o?.plan||c.push("缺少平面底图"),d<p.length&&c.push(`尚有 ${p.length-d} 台设备未标记`),w<p.length&&c.push(`尚有 ${p.length-w} 台设备未完成硬件绑定与物理复核`),h<p.length&&c.push(`尚有 ${p.length-h} 台设备未在线入网`),x.dirty&&c.push("存在待同步边缘配置"),v&&c.push("更换底图后尚未复核点位"),g||c.push("配置变更或同步后尚未重新通过全层自检（FTT）"),c.length>0)throw new Error(`400 BAD_REQUEST: 尚未满足正式冻结门槛（${c.join("；")}），可先保存为「阶段留档」。`);const S=this.deliveryBatches.find(G=>{if(G.floorId!==t||G.status==="draft")return!1;const se=this.deployExt.deliverySnapshotMeta[G.id];return se&&se.configSignature===E});if(S)throw new Error(`400 BAD_REQUEST: 当前配置基线已正式冻结为「${S.versionTag}」，无新增配置变更无需重复冻结；如需完成移交请对既有基线执行「签收交付」。`);const O=`${l?.name??"FL"}-${o?.name??t.slice(-4)}`.replace(/\s+/g,""),V=this.deliveryBatches.filter(G=>G.floorId===t&&G.status!=="draft").length,B={id:`dlv-${Date.now().toString(36)}`,projectId:l?.projectId??this.spatial.projects[0]?.id??T.projectId,floorId:t,versionTag:`${O}-v1.${V}`,deviceCount:p.length,verifiedCount:w,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:n.displayName,note:a||"全层自检通过，正式交付冻结"};return this.deliveryBatches.unshift(B),this.deployExt.deliverySnapshotMeta[B.id]=this.buildSnapshotMetaForFloor(B.id,t),this.deployExt.deliveryBatchesOverride=structuredClone(this.deliveryBatches),this.persistDeployExtensions(),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${t}/deliveries/freeze`,B,{note:a}),this.pushAudit("delivery.freeze",B.id,"success",`${w}/${p.length} 正式冻结`),structuredClone(B)}async saveDeliveryStageSnapshot(t,a){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权生成阶段留档`);const o=this.spatial.floors.find(x=>x.id===t),l=o?this.spatial.buildings.find(x=>x.id===o.buildingId):void 0,p=this.findAllDevices().filter(x=>x.floorId===t);if(p.length===0)throw new Error("400 BAD_REQUEST: 本层尚无已登记设备，请先添加并配置设备后再留档。");const w=p.filter(x=>x.physicalInstalled&&x.hardwareBinding).length,d=`${l?.name??"FL"}-${o?.name??t.slice(-4)}`.replace(/\s+/g,""),h=this.deliveryBatches.filter(x=>x.floorId===t&&x.status==="draft").length+1,v={id:`stg-${Date.now().toString(36)}`,projectId:l?.projectId??this.spatial.projects[0]?.id??T.projectId,floorId:t,versionTag:`${d}-stage-${h}`,deviceCount:p.length,verifiedCount:w,status:"draft",frozenAt:new Date().toISOString(),frozenBy:n.displayName,note:a||"阶段性施工留档（待补齐剩余门控项后正式冻结）"};return this.deliveryBatches.unshift(v),this.deployExt.deliverySnapshotMeta[v.id]=this.buildSnapshotMetaForFloor(v.id,t),this.deployExt.deliveryBatchesOverride=structuredClone(this.deliveryBatches),this.persistDeployExtensions(),this.pushAudit("delivery.stage_snapshot",v.id,"success",`${w}/${p.length} 阶段留档`),structuredClone(v)}async signOffDeliveryBatch(t,a,n){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权执行交付签收`);const l=this.deliveryBatches.find(h=>h.id===t);if(!l)throw new Error(`404 NOT_FOUND: 交付记录 ${t} 不存在`);if(l.status!=="frozen")throw new Error(l.status==="delivered"?"400 BAD_REQUEST: 该基线已完成签收交付。":"400 BAD_REQUEST: 阶段留档（草稿）不可直接签收，请先满足门控并生成正式冻结基线。");const p=a.trim()||o.displayName,w=new Date().toISOString();l.status="delivered";const d=this.deployExt.deliverySnapshotMeta[l.id]??this.buildSnapshotMetaForFloor(l.id,l.floorId);return d.signedOffBy=p,d.signedOffAt=w,d.signOffNote=n?.trim()||"现场验收通过，正式签收移交运维",this.deployExt.deliverySnapshotMeta[l.id]=d,this.deployExt.deliveryBatchesOverride=structuredClone(this.deliveryBatches),this.persistDeployExtensions(),this.pushAudit("delivery.sign_off",l.id,"success",`签收人：${p}`),structuredClone(l)}async getDeliverySnapshotMeta(t){this.requireSession();const a=this.deployExt.deliverySnapshotMeta[t];if(a)return structuredClone(a);const n=this.deliveryBatches.find(o=>o.id===t);return n?structuredClone(this.buildSnapshotMetaForFloor(n.id,n.floorId)):null}async listDeferredFloorIds(t){this.requireSession();const a=new Set(this.spatial.floors.filter(n=>n.buildingId===t).map(n=>n.id));return this.deployExt.deferredFloorIds.filter(n=>a.has(n))}async toggleFloorDeferred(t,a){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权调整本期验收范围`);const o=new Set(this.deployExt.deferredFloorIds);a?o.add(t):o.delete(t),this.deployExt.deferredFloorIds=Array.from(o),this.persistDeployExtensions();const l=this.spatial.floors.find(p=>p.id===t);return l?this.listDeferredFloorIds(l.buildingId):this.deployExt.deferredFloorIds}async createDeploymentDevice(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权新增设备`);const n=`dev-custom-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,o={id:n,name:t.name.trim(),category:t.category,projectId:t.projectId,buildingId:t.buildingId,floorId:t.floorId,logicalZoneId:t.logicalZoneId,planPoint:null,physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"unknown",version:1,telemetry:{}};return this.deployExt.extraDevices.push(o),t.category!=="hvac"&&t.category!=="meter"&&(this.deployExt.meshRoles[n]={proxy:!!t.defaultProxy,relay:!!t.defaultRelay,meshUuid:bs(t.floorId)}),this.deployExt.deferredFloorIds=this.deployExt.deferredFloorIds.filter(l=>l!==t.floorId),this.invalidateFloorVerification(t.floorId,!0),this.persistDeployExtensions(),this.pushAudit("device.create",n,"success",o.name),structuredClone(o)}async updateDeploymentDevice(t,a){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权修改设备信息`);const o=this.activeOrgId===nt?this.devices.find(w=>w.id===t):void 0,l=o?void 0:this.deployExt.extraDevices.find(w=>w.id===t),p=o??l;if(!p)throw new Error(`404 NOT_FOUND: 设备 ${t} 不存在`);return a.name!==void 0&&a.name.trim()&&(p.name=a.name.trim()),a.logicalZoneId!==void 0&&(p.logicalZoneId=a.logicalZoneId),p.version+=1,o&&this.activeOrgId===nt&&(this.deployExt.seedDevicesOverride=structuredClone(this.devices)),this.invalidateFloorVerification(p.floorId,!0),this.persistDeployExtensions(),this.pushAudit("device.update",t,"success",p.name),structuredClone(p)}async deleteDeploymentDevice(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除设备`);const n=this.findAllDevices().find(o=>o.id===t);if(!n)throw new Error(`404 NOT_FOUND: 设备 ${t} 不存在`);this.devices=this.devices.filter(o=>o.id!==t),this.deployExt.extraDevices=this.deployExt.extraDevices.filter(o=>o.id!==t),this.activeOrgId===nt&&(this.deployExt.seedDevicesOverride=structuredClone(this.devices)),this.deployExt.lightMarkers=this.deployExt.lightMarkers.filter(o=>o.deviceId!==t),this.deployExt.groups=this.deployExt.groups.map(o=>({...o,deviceIds:o.deviceIds.filter(l=>l!==t)})),delete this.deployExt.meshRoles[t],delete this.deployExt.deviceParams[t],this.invalidateFloorVerification(n.floorId,!0),this.persistDeployExtensions(),this.pushAudit("device.delete",t,"success",n.name)}async listLightMarkers(t){return this.requireSession(),structuredClone(this.deployExt.lightMarkers.filter(a=>a.floorId===t))}async addLightMarker(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权编辑回路灯点`);const n={...t,id:`lm-${Date.now().toString(36)}`};return this.deployExt.lightMarkers.push(n),this.persistDeployExtensions(),structuredClone(n)}async deleteLightMarker(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除回路灯点`);this.deployExt.lightMarkers=this.deployExt.lightMarkers.filter(n=>n.id!==t),this.persistDeployExtensions()}async listMeshRoles(t){this.requireSession();const a=new Set(this.findAllDevices().filter(o=>o.floorId===t).map(o=>o.id)),n={};for(const[o,l]of Object.entries(this.deployExt.meshRoles))a.has(o)&&(n[o]={...l});return n}async updateMeshRole(t,a,n){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权修改蓝牙 Mesh 节点角色`);const p={...this.deployExt.meshRoles[t]??{proxy:!1,relay:!1,meshUuid:bs(a)},...n};return this.deployExt.meshRoles[t]=p,this.invalidateFloorVerification(a,!0),this.persistDeployExtensions(),{...p}}async getEdgeSyncState(t){return this.requireSession(),{...this.deployExt.edgeSyncByFloor[t]??{version:1,dirty:!1,lastSyncedAt:null}}}async syncEdgeGateway(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权执行边缘同步`);if(!this.findAllDevices().filter(w=>w.floorId===t).some(w=>w.category==="gateway"&&w.connectivity==="online"&&!!w.hardwareBinding))throw new Error("400 BAD_REQUEST: 本层尚无已绑定且在线的边缘网关 / 蓝牙适配器，请先完成网关硬件绑定后再执行同步。");const p={version:(this.deployExt.edgeSyncByFloor[t]??{version:1}).version+1,dirty:!1,lastSyncedAt:new Date().toISOString()};return this.deployExt.edgeSyncByFloor[t]=p,delete this.deployExt.floorFttRecords[t],this.persistDeployExtensions(),this.pushAudit("edge.sync",t,"success",`边缘基线同步至 v${p.version}`),{...p}}async getDeviceParams(t){return this.requireSession(),{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450,coolMinC:22,heatMaxC:26,unoccupiedDelayMin:20,minCycleMin:5,heartbeatSec:30,offlineHoldMin:120,cacheFlushSec:60,pollSec:15,ctRatio:1,demandWindowMin:15,...this.deployExt.deviceParams[t]??{}}}async saveDeviceParams(t,a,n){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权下发设备参数`);return this.deployExt.deviceParams[t]={...n},this.invalidateFloorVerification(a,!0),this.persistDeployExtensions(),{...n}}async listDeviceGroups(t){return this.requireSession(),structuredClone(this.deployExt.groups.filter(a=>a.floorId===t))}async upsertDeviceGroup(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护设备分组`);const n=t.id?this.deployExt.groups.find(l=>l.id===t.id):void 0;let o;return n?(n.name=t.name.trim()||n.name,n.track=t.track,n.groupType=t.groupType,n.includesAdapter=t.includesAdapter,n.deviceIds=[...t.deviceIds],o=n):(o={...t,id:`grp-${Date.now().toString(36)}`,name:t.name.trim(),deviceIds:[...t.deviceIds]},this.deployExt.groups.unshift(o)),o.track==="mesh_auto"&&this.invalidateFloorVerification(o.floorId,!0),this.persistDeployExtensions(),this.pushAudit("device_group.upsert",o.id,"success",o.name),structuredClone(o)}async deleteDeviceGroup(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除设备分组`);const n=this.deployExt.groups.find(o=>o.id===t);this.deployExt.groups=this.deployExt.groups.filter(o=>o.id!==t),n?.track==="mesh_auto"&&this.invalidateFloorVerification(n.floorId,!0),this.persistDeployExtensions(),this.pushAudit("device_group.delete",t,"success")}async listFloorDocs(t){return this.requireSession(),structuredClone(this.deployExt.docs.filter(a=>a.floorId===t))}async attachFloorDoc(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权关联工程资料`);const n={...t,id:`doc-${Date.now().toString(36)}`};return this.deployExt.docs.unshift(n),this.persistDeployExtensions(),structuredClone(n)}async updateFloorDocCategory(t,a){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权修改工程资料分类`);const o=this.deployExt.docs.find(l=>l.id===t);if(!o)throw new Error(`404 NOT_FOUND: 工程资料 ${t} 不存在`);return o.category=a.trim()||o.category,this.persistDeployExtensions(),structuredClone(o)}async deleteFloorDoc(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除工程资料`);this.deployExt.docs=this.deployExt.docs.filter(n=>n.id!==t),this.persistDeployExtensions()}async upsertConnection(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权维护系统接入通道`);const n=this.deployExt.connectionsOverride?[...this.deployExt.connectionsOverride]:this.activeOrgId===nt?structuredClone(this.connections):[],o=t.endpoint.trim(),l=n.find(x=>x.endpoint===o&&x.id!==t.id&&x.projectId===t.projectId);if(l)throw new Error(`端口冲突警告：局域网端点「${o}」已被通道「${l.name}」占用，请更换端口后重试。`);const p=this.findAllDevices().filter(x=>x.projectId===t.projectId&&(!t.buildingId||x.buildingId===t.buildingId)&&(!t.floorId||x.floorId===t.floorId)&&x.hardwareBinding?.protocol===t.protocol),w=p.length*4,d=p.length>0?Math.max(1,p.length):0;let h;const v=t.id?n.find(x=>x.id===t.id):void 0;if(v){const x=v.endpoint!==o;v.name=t.name.trim()||v.name,v.protocol=t.protocol,v.endpoint=o,v.buildingId=t.buildingId,v.floorId=t.floorId??"",x&&v.status!=="connected"&&(v.status="connected"),v.collectedPoints===0&&w>0&&(v.collectedPoints=w,v.calculatedPoints=d),v.lastHeartbeatAt=new Date().toISOString(),h=v}else h={id:`conn-${Date.now().toString(36)}`,projectId:t.projectId,buildingId:t.buildingId,floorId:t.floorId??"",name:t.name.trim(),protocol:t.protocol,endpoint:o,status:"connected",collectedPoints:w,calculatedPoints:d,lastHeartbeatAt:new Date().toISOString()},n.unshift(h);return this.deployExt.connectionsOverride=n,this.connections=structuredClone(n),this.persistDeployExtensions(),this.pushAudit("connection.upsert",h.id,"success",`${h.name} (${h.endpoint})`),structuredClone(h)}async deleteConnection(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权删除系统接入通道`);const o=(this.deployExt.connectionsOverride?[...this.deployExt.connectionsOverride]:this.activeOrgId===nt?structuredClone(this.connections):[]).filter(l=>l.id!==t);this.deployExt.connectionsOverride=o,this.connections=structuredClone(o),this.persistDeployExtensions(),this.pushAudit("connection.delete",t,"success")}async restartEdgeService(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权重启边缘服务`);this.pushAudit("edge.restart",t,"success","已下发重启边缘服务指令")}async listPlanChangeAlerts(t){this.requireSession();const a=new Set(this.spatial.floors.filter(o=>o.buildingId===t).map(o=>o.id)),n={};for(const[o,l]of Object.entries(this.deployExt.planChangeAlerts))a.has(o)&&(n[o]={...l});return n}async clearPlanChangeAlert(t){const a=this.requireSession();if(!a.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权确认换图复核`);delete this.deployExt.planChangeAlerts[t],this.persistDeployExtensions()}async getFloorFttRecord(t){this.requireSession();const a=this.deployExt.floorFttRecords[t];if(!a)return null;const n=this.deployExt.edgeSyncByFloor[t]??{version:1,dirty:!1},o=this.getFloorConfigSignature(t);return n.dirty||a.configSignature&&a.configSignature!==o||a.edgeSyncVersion!==void 0&&a.edgeSyncVersion!==n.version?null:{...a}}async recordFloorFttPass(t,a){this.requireSession();const n=this.deployExt.edgeSyncByFloor[t]??{version:1},o={floorId:t,passedAt:new Date().toISOString(),deviceCount:a,edgeSyncVersion:n.version,configSignature:this.getFloorConfigSignature(t),mode:"demo_sim"};return this.deployExt.floorFttRecords[t]=o,this.persistDeployExtensions(),{...o}}async getAnalysisReport(t,a,n){this.requireSession();const o=a==="today"?1:a==="7d"?7:30,p={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*o)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*o).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter(h=>h.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*o).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*o).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*o).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[t],w=a==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],d={category:t,range:a,scopeId:n,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:p.kpis,unit:p.unit,series:p.base.map((h,v)=>({label:w[v],value:Math.round(h*(t==="energy"||t==="carbon"?o/2+.5:1)),baseline:Math.round(h*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:p.base[3],unit:p.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:p.base[4],unit:p.unit,status:t==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:p.base[1],unit:p.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${t}?range=${a}&scopeId=${n}`,{kpis:d.kpis.length}),d}async listScenes(t){return this.requireSession(),this.activeOrgId!==nt?[]:structuredClone(this.scenes)}async createScene(t){const a=this.requireSession();if(!a.scope.canEditScenes)throw new Error(`403 FORBIDDEN: 角色「${a.roleLabel}」无权创建场景`);const n={id:`scn-e7f-${Date.now().toString(36)}`,projectId:t.projectId,floorId:t.floorId,name:t.name,description:t.description,enabled:!0,scheduleSummary:"手动触发",actions:t.actions,lastExecutedAt:null};return this.scenes.unshift(n),this.record("REST","createScene","POST /api/v1/scenes",n,t),this.pushAudit("scene.create",n.id,"success",n.name),structuredClone(n)}async executeScene(t){const a=this.scenes.find(o=>o.id===t);if(!a)throw new Error(`404 NOT_FOUND: 场景 ${t} 不存在`);const n=await this.dispatchControlBatch({floorId:a.floorId,idempotencyKey:`scene-${t}-${Date.now()}`,targets:a.actions,reason:`触发场景：${a.name}`});return a.lastExecutedAt=new Date().toISOString(),a.lastBatchId=n.batchId,n}async getRuntimeSettings(t){return this.requireSession(),structuredClone({projectId:T.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(t,a,n){this.requireSession();const o=n>=this.calendar.nightGuardStart?`下班时间 ${n} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,l=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${a} - ${n}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${a} (-30m) ~ ${n} (+30m)`,conflictWarning:o},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:o}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",l,{workdayStart:a,workdayEnd:n}),l}async saveWorkCalendar(t,a,n,o){const l=this.requireSession();if(!l.scope.canEditSettings)throw this.pushAudit("settings.calendar",T.projectId,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权修改应用设置`);if(this.calendar.version!==o)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(a>=n)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:a,workdayEnd:n,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:a,workdayEnd:n,expectedVersion:o}),this.pushAudit("settings.calendar",T.projectId,"success",`${a}-${n}`),structuredClone(this.calendar)}async toggleRuntimeRule(t,a,n){const o=this.requireSession();if(!o.scope.canEditSettings)throw this.pushAudit("settings.rule_toggle",t,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权启停应用设置规则`);const l=this.rules.find(p=>p.id===t);if(!l)throw new Error(`404 NOT_FOUND: 规则 ${t} 不存在`);if(l.version!==n)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${l.version}）`);return l.enabled=a,l.version+=1,l.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${t}`,l,{enabled:a,expectedVersion:n}),this.pushAudit("settings.rule_toggle",t,"success",a?"启用":"停用"),structuredClone(l)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(t,a){if(!this.requireSession().scope.canManageMembers)throw this.pushAudit("org.invite",t,"denied","仅管理员可邀请成员"),new Error("403 FORBIDDEN: 仅管理员可邀请成员");const o=gt[a],l={userId:`inv-${Date.now().toString(36)}`,displayName:t.split("@")[0]||t,email:t,role:a,roleLabel:o.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(l),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",l,{email:t,role:a}),this.pushAudit("org.invite",t,"success",o.roleLabel),structuredClone(l)}async listAuditLogs(){if(!this.requireSession().scope.canViewAuditLogs)throw this.pushAudit("audit.read","org.audit_logs","denied","仅授权管理员可只读查阅审计日志"),new Error("403 FORBIDDEN: 仅授权管理员可查阅审计日志");return structuredClone(this.auditLogs)}async listOverrides(){const t=this.requireSession();return this.reconcileOverrides(),t.scope.canGrantOverride?structuredClone(this.overrides):structuredClone(this.overrides.filter(a=>a.targetUserId===t.userId))}async grantOverride(t){const a=this.requireSession();if(!a.scope.canGrantOverride)throw this.pushAudit("override.grant",t.targetUserId,"denied","仅机构/项目管理员可审批临时提权"),new Error("403 FORBIDDEN: 仅管理员可授予限时提权");const n=t.reason.trim();if(!n)throw new Error("400 BAD_REQUEST: 必须填写提权事由");if(![2,8,24].includes(t.durationHours))throw new Error("400 BAD_REQUEST: 提权有效期必须为 2h / 8h / 24h");const o=this.members.find(w=>w.userId===t.targetUserId);if(!o)throw new Error(`404 NOT_FOUND: 目标成员 ${t.targetUserId} 不存在`);if(o.role!=="operator")throw new Error("400 BAD_REQUEST: 仅支持为运营人员授予临时提权");const l=Date.now(),p={id:`ovr-${l.toString(36)}`,targetUserId:o.userId,targetUserName:o.displayName,module:t.module,durationHours:t.durationHours,grantedAt:new Date(l).toISOString(),expiresAt:new Date(l+t.durationHours*36e5).toISOString(),approvedBy:a.displayName,reason:n,status:"active",revokedAt:null,revokedBy:null};return this.overrides.unshift(p),this.applyOverridesToSession(),this.record("REST","grantOverride","POST /api/v1/org/overrides",p,t),this.pushAudit("override.grant",`${o.displayName} ｜ ${t.module==="deployment"?"系统部署":"应用设置"}`,"success",`${t.durationHours}h ｜ ${n}`),structuredClone(p)}async revokeOverride(t){const a=this.requireSession();if(!a.scope.canGrantOverride)throw this.pushAudit("override.revoke",t,"denied","仅管理员可收回临时提权"),new Error("403 FORBIDDEN: 仅管理员可收回限时提权");const n=this.overrides.find(o=>o.id===t);if(!n)throw new Error(`404 NOT_FOUND: 提权记录 ${t} 不存在`);return n.status="revoked",n.revokedAt=new Date().toISOString(),n.revokedBy=a.displayName,this.applyOverridesToSession(),this.record("REST","revokeOverride",`POST /api/v1/org/overrides/${t}/revoke`,n),this.pushAudit("override.revoke",`${n.targetUserName} ｜ ${n.module==="deployment"?"系统部署":"应用设置"}`,"success","管理员提前收回"),structuredClone(n)}subscribeFloorEvents(t,a){return t!==T.floorId?()=>{}:(this.listeners.add(a),()=>{this.listeners.delete(a)})}emit(t){this.record("WS",t.type,`WS /ws/v1/stream?floorId=${T.floorId}`,t),this.listeners.forEach(a=>a(t))}}const Na=["org_admin","project_admin","operator","space_user"],rn=[{module:"空间总览与设备控制",org_admin:{text:"机构全范围读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"授权范围读写",tone:"online"},space_user:{text:"授权空间可控",tone:"online"}},{module:"数据分析与报表导出",org_admin:{text:"查看与导出",tone:"online"},project_admin:{text:"查看与导出",tone:"online"},operator:{text:"查看与导出",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"告警中心与运维工单",org_admin:{text:"处置与派单",tone:"online"},project_admin:{text:"处置与派单",tone:"online"},operator:{text:"处置与派单",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"智能策略与快捷场景",org_admin:{text:"编排与执行",tone:"online"},project_admin:{text:"编排与执行",tone:"online"},operator:{text:"执行与编排",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"应用设置（日历/能耗/保护）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 ｜ 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"系统部署（项目/设备/拓扑）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 ｜ 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"成员管理与限时提权审批",org_admin:{text:"机构级管理与审批",tone:"accent"},project_admin:{text:"项目内管理与审批",tone:"accent"},operator:{text:"仅查看本人提权",tone:"neutral"},space_user:{text:"不可见",tone:"neutral"}},{module:"安全与操作审计日志（SR 6.1）",org_admin:{text:"只读查阅（防篡改）",tone:"accent"},project_admin:{text:"只读查阅（防篡改）",tone:"accent"},operator:{text:"无权访问",tone:"neutral"},space_user:{text:"无权访问",tone:"neutral"}}];function De(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Ua(e){return e?e.slice(0,16).replace("T"," "):"—"}function Aa(e){return e==="deployment"?"系统部署":"应用设置"}async function cn(e,t,a,n,o){const l=a.scope.canManageMembers,p=a.scope.canGrantOverride,w=a.scope.canViewAuditLogs,d=p||a.role==="operator",h=a.role!=="space_user";let v="profile",x=h?await t.listOrgMembers().catch(()=>[]):[],E=d?await t.listOverrides().catch(()=>[]):[],F=w?await t.listAuditLogs().catch(()=>[]):[],g="",c="all",S="all",O="all",V=!1,B=!1,G=a.displayName,se=a.role==="org_admin"?"机构负责人":a.role==="project_admin"?"项目负责人":a.role==="operator"?"运行值守工程师":"园区空间用户",he="138-0013-8072",de="",ee="";const ce={profile:{label:"个人资料",icon:"user",subtitle:"管理个人联系信息、查看当前角色与空间授权范围，以及本人正在生效的临时提权。"},members:{label:"成员管理",icon:"users",subtitle:"严格落实唯一账号与独立认证（SR 1.1），按 4 级角色与空间范围维护机构成员。"},roles:{label:"角色权限",icon:"shield-check",subtitle:"遵循 IEC 62443-3-3 与等保 2.0 最小权限原则，写权限与读权限严格隔离。"},overrides:{label:"限时提权",icon:"key-round",subtitle:"按 IEC 62443-3-3 SR 2.1 RE 3 为运营人员授予限时修改权，必须记录审批人与事由，到期自动收回。"},audit:{label:"审计日志",icon:"file-text",subtitle:"按 SR 6.1 仅授权管理员只读访问，防篡改记录所有登录、控制、配置变更与越权拦截事件。"}};async function Y(){const[W,b,A,j]=await Promise.all([t.getSession(),h?t.listOrgMembers().catch(()=>[]):Promise.resolve([]),d?t.listOverrides().catch(()=>[]):Promise.resolve([]),w?t.listAuditLogs().catch(()=>[]):Promise.resolve([])]);x=b,E=A,F=j,W&&(a=W,n(W)),J()}function D(){const W=["profile"];return h&&W.push("members","roles"),d&&W.push("overrides"),w&&W.push("audit"),`
      <aside class="pacom-unified-rail" aria-label="机构与账户菜单">
        <div class="pacom-unified-group">
          ${W.map(b=>{const A=ce[b],j=b==="overrides"?E.filter($=>$.status==="active").length:0;return`
                <button type="button" class="pacom-unified-item" aria-current="${v===b}" data-anav="${b}">
                  ${re(A.icon,16)}
                  <span>${A.label}</span>
                  ${j>0?`<span class="pacom-badge pacom-badge--accent" style="margin-left:auto;">${j}</span>`:""}
                </button>`}).join("")}
        </div>
      </aside>
    `}function H(){return v==="members"&&l?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-invite="1">+ 邀请成员</button>':v==="overrides"&&p?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-grant="1">+ 授予限时提权</button>':v==="audit"?'<span class="pacom-badge pacom-badge--neutral">只读防篡改 ｜ SR 6.1</span>':""}function fe(){const W=a.scope.activeOverrides.filter(A=>A.status==="active"),b=a.scope.allowedZoneIds?.length?`授权 ${a.scope.allowedFloorIds.length} 个楼层 ｜ ${a.scope.allowedZoneIds.length} 个指定功能区`:`授权 ${a.scope.allowedProjectIds.length} 个项目 ｜ ${a.scope.allowedBuildingIds.length} 栋楼宇 ｜ ${a.scope.allowedFloorIds.length} 个楼层`;return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">个人资料与联系方式</h2>
          <span class="pacom-badge pacom-badge--accent">${De(a.roleLabel)}</span>
        </div>
        <form class="pacom-settings-card" data-role="profile-form">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">唯一身份与职务</span>
              <span class="pacom-setting-desc">账号编号：${De(a.userId)}（独立实名账号，禁止共用）</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <input class="pacom-input" style="width:140px;" name="displayName" value="${De(G)}" aria-label="显示姓名" required />
              <input class="pacom-input" style="width:170px;" name="jobTitle" value="${De(se)}" aria-label="岗位职务" />
            </div>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">告警接收手机号</span>
              <span class="pacom-setting-desc">用于接收重要告警短信与审批通知</span>
            </div>
            <div class="pacom-setting-control">
              <input class="pacom-input" style="width:170px;" name="phone" value="${De(he)}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
              <button type="submit" class="pacom-btn pacom-btn--primary">保存资料</button>
            </div>
          </div>
        </form>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">当前权限与空间范围</h2>
          <span class="pacom-row-sub">${De(b)}</span>
        </div>
        <div class="pacom-settings-card">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">角色职责</span>
              <span class="pacom-setting-desc">${De(ps[a.role])}</span>
            </div>
            <span class="pacom-badge pacom-badge--online">${De(a.roleLabel)}</span>
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
          ${W.length>0?W.map(A=>`
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">生效中的限时提权：${De(Aa(A.module))}（${A.durationHours}h）</span>
                        <span class="pacom-setting-desc">审批人：${De(A.approvedBy)} ｜ 到期时间：${De(Ua(A.expiresAt))} ｜ 事由：${De(A.reason)}</span>
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
    `}function be(){const W=g.trim().toLowerCase(),b=x.filter(A=>c!=="all"&&A.role!==c?!1:W?`${A.displayName} ${A.email} ${A.roleLabel} ${A.scopeSummary}`.toLowerCase().includes(W):!0);return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="memberSearch" style="width:240px;" data-member-search placeholder="搜索成员姓名或授权范围…" value="${De(g)}" aria-label="搜索机构成员" />
          <select class="pacom-select" name="memberRoleFilter" data-role-filter aria-label="按角色筛选">
            <option value="all" ${c==="all"?"selected":""}>全部角色（${x.length}）</option>
            ${Na.map(A=>`<option value="${A}" ${c===A?"selected":""}>${De(pt[A])}</option>`).join("")}
          </select>
        </div>
        <span class="pacom-row-sub">显示 ${b.length} / ${x.length} 人</span>
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
              ${b.length===0?'<tr><td colspan="4"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配成员</strong><span>可调整搜索关键词或角色筛选。</span></div></td></tr>':b.map(A=>`
                        <tr>
                          <td>
                            <div style="display:flex; align-items:center; gap:10px;">
                              <span class="pacom-pop-avatar">${De(A.displayName.slice(0,1))}</span>
                              <div>
                                <div style="font-weight:450;">${De(A.displayName)}</div>
                                ${l?`<div class="pacom-row-sub">${De(A.email)}</div>`:""}
                              </div>
                            </div>
                          </td>
                          <td><span class="pacom-badge ${A.role==="org_admin"||A.role==="project_admin"?"pacom-badge--accent":"pacom-badge--neutral"}">${De(A.roleLabel)}</span></td>
                          <td><span class="pacom-row-sub">${De(A.scopeSummary)}</span></td>
                          <td>
                            <span class="pacom-badge ${A.status==="active"?"pacom-badge--online":"pacom-badge--neutral"}">
                              ${A.status==="active"?"正常":A.status==="invited"?"邀请中":"已停用"}
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
          ${Na.map(W=>{const b=x.filter(A=>A.role===W).length;return`
              <div class="pacom-setting-row">
                <div class="pacom-setting-meta">
                  <span class="pacom-setting-title">${De(pt[W])}</span>
                  <span class="pacom-setting-desc">${De(ps[W])}</span>
                </div>
                <span class="pacom-badge pacom-badge--neutral">${b} 人</span>
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
                ${rn.map(W=>`
                  <tr>
                    <td><strong style="font-weight:450;">${De(W.module)}</strong></td>
                    <td><span class="pacom-badge pacom-badge--${W.org_admin.tone}">${De(W.org_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${W.project_admin.tone}">${De(W.project_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${W.operator.tone}">${De(W.operator.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${W.space_user.tone}">${De(W.space_user.text)}</span></td>
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
          <div class="pacom-kpi-value">${E.filter(b=>b.status==="active").length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">到期自动收回，无需人工盯守</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">可选有效期窗口</span>
          <div class="pacom-kpi-value">2 / 8 / 24<span class="pacom-kpi-unit">小时</span></div>
          <span class="pacom-kpi-delta">严格遵循 IEC 62443-3-3 SR 2.1 RE 3</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">累计审批记录</span>
          <div class="pacom-kpi-value">${E.length}<span class="pacom-kpi-unit">条</span></div>
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
                ${E.length===0?`<tr><td colspan="${p?6:5}"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>暂无限时提权记录</strong><span>${p?"点击右上角「+ 授予限时提权」为运营人员按需开启限时修改权。":"当前无需临时提权，「应用设置」与「系统部署」保持默认只读。"}</span></div></td></tr>`:E.map(b=>`
                          <tr>
                            <td><strong style="font-weight:450;">${De(b.targetUserName)}</strong></td>
                            <td><span class="pacom-badge pacom-badge--accent">${De(Aa(b.module))}</span></td>
                            <td>
                              <div>${b.durationHours} 小时</div>
                              <div class="pacom-row-sub">至 ${De(Ua(b.expiresAt))}</div>
                            </td>
                            <td>
                              <div>${De(b.approvedBy)}</div>
                              <div class="pacom-row-sub">${De(b.reason)}</div>
                            </td>
                            <td>
                              <span class="pacom-badge ${b.status==="active"?"pacom-badge--online":b.status==="revoked"?"pacom-badge--warning":"pacom-badge--neutral"}">
                                ${b.status==="active"?"生效中":b.status==="revoked"?"已收回":"已到期"}
                              </span>
                            </td>
                            ${p?`<td style="text-align:right;">
                                    ${b.status==="active"?`<button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-revoke-override="${De(b.id)}">提前收回</button>`:`<span class="pacom-row-sub">${b.revokedBy?`${De(b.revokedBy)} 收回`:"已结束"}</span>`}
                                  </td>`:""}
                          </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function Le(){const W=F.filter(b=>{if(S==="success"&&b.result!=="success"||S==="denied"&&b.result==="success")return!1;if(O!=="all"){const A=`${b.action} ${b.target}`.toLowerCase();if(O==="control"&&!A.includes("control")&&!A.includes("scene")||O==="alarm"&&!A.includes("alarm")&&!A.includes("work")||O==="deploy"&&!A.includes("deploy")&&!A.includes("plan")&&!A.includes("hardware")&&!A.includes("project")&&!A.includes("building")&&!A.includes("floor")&&!A.includes("zone")||O==="settings"&&!A.includes("settings")||O==="override"&&!A.includes("override"))return!1}return!0});return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <select class="pacom-select" name="auditActionCat" data-audit-cat aria-label="按行为类别筛选">
            <option value="all" ${O==="all"?"selected":""}>全部操作类别</option>
            <option value="override" ${O==="override"?"selected":""}>限时提权审批</option>
            <option value="control" ${O==="control"?"selected":""}>设备控制与场景</option>
            <option value="alarm" ${O==="alarm"?"selected":""}>告警与工单处置</option>
            <option value="deploy" ${O==="deploy"?"selected":""}>系统部署与空间</option>
            <option value="settings" ${O==="settings"?"selected":""}>应用设置变更</option>
          </select>
          <div class="pacom-tabs" role="tablist" aria-label="按执行结果筛选">
            <button type="button" class="pacom-tab" role="tab" aria-selected="${S==="all"}" data-audit-filter="all">全部（${F.length}）</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${S==="success"}" data-audit-filter="success">成功</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${S==="denied"}" data-audit-filter="denied">已拦截</button>
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
              ${W.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配审计记录</strong><span>可放宽筛选条件查看全部日志。</span></div></td></tr>':W.map(b=>`
                        <tr>
                          <td>
                            <div style="font-weight:450;">${De(b.action)}</div>
                            ${b.detail?`<div class="pacom-row-sub">${De(b.detail)}</div>`:""}
                          </td>
                          <td><code style="font-size:12px;">${De(b.target)}</code></td>
                          <td>
                            <div>${De(b.actor)}</div>
                            <div class="pacom-row-sub">${De(pt[b.role]??b.role)}</div>
                          </td>
                          <td><span class="pacom-row-sub">${De(Ua(b.at))}</span></td>
                          <td style="text-align:right;">
                            <span class="pacom-badge ${b.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                              ${b.result==="success"?"成功":"已拦截"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function P(){const W=[];if(V&&l){const b=a.role==="org_admin"?Na:["project_admin","operator","space_user"];W.push(`
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
                  ${b.map(A=>`<option value="${A}">${De(pt[A])}</option>`).join("")}
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
        </div>`)}if(B&&p){const b=x.filter(A=>A.role==="operator");W.push(`
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
                  ${b.length===0?'<option value="">暂无运营人员</option>':b.map(A=>`<option value="${De(A.userId)}">${De(A.displayName)}（${De(A.email)}）</option>`).join("")}
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
              <span class="pacom-row-sub">审批人：${De(a.displayName)}</span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${b.length===0?"disabled":""}>确认授权</button>
              </div>
            </div>
          </form>
        </div>`)}return W.join("")}function J(){const W=ce[v],b=H();e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">机构与账户</h1>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">${De(a.roleLabel)}</span>
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${D()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head ${b?"pacom-unified-head--split":""}">
                <div class="pacom-unified-head-copy">
                  <h2 class="pacom-unified-title">${W.label}</h2>
                  <p class="pacom-unified-subtitle">${W.subtitle}</p>
                </div>
                ${b?`<div class="pacom-unified-head-actions">${b}</div>`:""}
              </div>
              ${de?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${De(de)}</span></div>`:""}
              ${ee?`<div class="pacom-alert-banner">${De(ee)}</div>`:""}
              ${v==="profile"?fe():v==="members"?be():v==="roles"?we():v==="overrides"?_e():Le()}
            </div>
          </div>
        </div>
      </div>
      ${P()}
    `,Se()}function Se(){e.querySelectorAll("[data-anav]").forEach(b=>{b.addEventListener("click",()=>{v=b.dataset.anav??"profile",de="",ee="",J()})}),e.querySelector('[data-role="profile-form"]')?.addEventListener("submit",b=>{b.preventDefault();const A=new FormData(b.currentTarget);G=String(A.get("displayName")??"").trim()||a.displayName,se=String(A.get("jobTitle")??"").trim()||se,he=String(A.get("phone")??"").trim()||he,de=`已保存个人资料：${G}（${se}）｜ ${he}`,J()}),e.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await t.logout(),window.location.hash="#login",o()}),e.querySelector("[data-open-invite]")?.addEventListener("click",()=>{V=!0,B=!1,J()}),e.querySelector("[data-open-grant]")?.addEventListener("click",()=>{B=!0,V=!1,J()}),e.querySelectorAll("[data-close-modals]").forEach(b=>{b.addEventListener("click",()=>{V=!1,B=!1,J()})}),e.querySelectorAll("[data-modal-scrim]").forEach(b=>{b.addEventListener("click",A=>{A.target===b&&(V=!1,B=!1,J())})}),e.querySelector("[data-member-search]")?.addEventListener("input",b=>{const A=b.currentTarget,j=A.selectionStart??A.value.length;g=A.value,J();const $=e.querySelector("[data-member-search]");$&&($.focus(),$.setSelectionRange(j,j))}),e.querySelector("[data-role-filter]")?.addEventListener("change",b=>{c=b.currentTarget.value,J()}),e.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async b=>{b.preventDefault(),ee="";const A=new FormData(b.currentTarget);try{const j=await t.inviteOrgMember(String(A.get("email")??""),String(A.get("role")));V=!1,de=`已向 ${j.email} 发送「${j.roleLabel}」邀请。`,await Y()}catch(j){ee=j instanceof Error?j.message:String(j),J()}}),e.querySelector('[data-role="grant-override-form"]')?.addEventListener("submit",async b=>{b.preventDefault(),ee="";const A=new FormData(b.currentTarget);try{const j=await t.grantOverride({targetUserId:String(A.get("targetUserId")??""),module:String(A.get("module")??"deployment"),durationHours:Number(A.get("durationHours")??8),reason:String(A.get("reason")??"")});B=!1,de=`已为「${j.targetUserName}」开启「${Aa(j.module)}」${j.durationHours} 小时限时修改权，到期自动收回。`,await Y()}catch(j){ee=j instanceof Error?j.message:String(j),J()}}),e.querySelectorAll("[data-revoke-override]").forEach(b=>{b.addEventListener("click",async()=>{const A=b.dataset.revokeOverride;if(A){ee="";try{const j=await t.revokeOverride(A);de=`已提前收回「${j.targetUserName}」的「${Aa(j.module)}」限时修改权。`,await Y()}catch(j){ee=j instanceof Error?j.message:String(j),J()}}})}),e.querySelectorAll("[data-audit-filter]").forEach(b=>{b.addEventListener("click",()=>{S=b.dataset.auditFilter??"all",J()})}),e.querySelector("[data-audit-cat]")?.addEventListener("change",b=>{O=b.currentTarget.value??"all",J()})}J()}const Yt={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},dn={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},pn={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function un(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("modbus")||t.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":t.includes("co₂")||t.includes("co2")||t.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function mn(e){return e.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:e.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function Va(e){const t=`${e.title} ${e.message}`.toLowerCase();return t.includes("离线")||t.includes("vav")||e.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:t.includes("co₂")||t.includes("co2")||e.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function vn(e,t,a){const n=new URLSearchParams(window.location.hash.split("?")[1]??""),o=n.get("alarm"),l=n.get("wo"),p=a.scope.canManageAlarms;let w=await t.getSpatialTree(),d=Ra(),h=!1,v="",x=[],E=[],F=[],g=l?"workorders":"alarms",c="all",S="all",O="all",V="impact",B=!1,G="",se=o,he=l,de=null,ee=null,ce="resolved";const Y=new Set,D=new Map,H=new Map,fe=new Map,be=new Map;let we="",_e="";function Le(b){const A=be.get(b.id);if(A)return A;const j=b.id.match(/(\d+)$/),$=`WO-2026-${j?j[1]:b.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,N={estCost:"¥ 450",actualCost:b.status==="closed"?"¥ 380":"--",cmmsNo:$,assigneeGroup:"暖通运维组",tasks:[{id:`${b.id}-t1`,label:"核查设备供电与现场指示灯状态",done:b.status!=="open"},{id:`${b.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:b.status==="resolved"||b.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:b.createdAt?b.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${$}）`}]};return be.set(b.id,N),N}async function P(){[x,E,F]=await Promise.all([t.listAlarms(T.floorId),t.listWorkOrders(T.floorId),t.getFloorDevices(T.floorId).catch(()=>[])]),E.forEach(b=>Le(b)),W()}function J(b){if(!b)return{name:"楼层通用",zone:"E7F",dev:null};const A=F.find(j=>j.id===b)??null;return A?{name:A.name,zone:(A.logicalZoneId?pn[A.logicalZoneId]:void 0)??"E7F",dev:A}:{name:b,zone:"E7F",dev:null}}function Se(b){const A=J(b.deviceId).dev;A&&A.connectivity==="offline"?fe.set(b.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${A.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):fe.set(b.id,{verdict:"pass",summary:`自检通过（PASS）：「${A?.name??b.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),se=b.id,W()}function W(){const b=x.filter(M=>M.status==="active"&&!D.has(M.id)),A=E.filter(M=>!Le(M).cancelled&&(M.status==="open"||M.status==="assigned"||M.status==="in_progress")),j=x.filter(M=>M.status!=="active").length+H.size,$=0,N=D.size,ne=G.trim().toLowerCase(),ze=x.filter(M=>{const q=D.has(M.id);if(c==="snoozed"){if(!q)return!1}else if(c==="active"){if(M.status!=="active"||q)return!1}else if(c==="acknowledged"){if(M.status!=="acknowledged")return!1}else if(q)return!1;if(O!=="all"&&M.severity!==O)return!1;if(!ne)return!0;const Z=J(M.deviceId);return`${M.title} ${M.message} ${Z.name} ${Z.zone} ${M.deviceId}`.toLowerCase().includes(ne)}),tt=new Map;for(const M of ze){const q=`${M.title} ${M.message}`.toLowerCase(),Z=q.includes("离线")||q.includes("modbus")||q.includes("通信"),pe=B?Z?"root-gateway-modbus":M.deviceId:M.id,ie=Z?"根因：E7F 主控网关通信链路":`根因：${J(M.deviceId).name}`,Ie=tt.get(pe)??{rootLabel:ie,items:[]};Ie.items.push(M),tt.set(pe,Ie)}const ot=Array.from(tt.values());V==="impact"&&ot.sort((M,q)=>Va(q.items[0]).costYuan-Va(M.items[0]).costYuan);const Ne=E.filter(M=>{const q=Le(M);if(S==="cancelled"){if(!q.cancelled)return!1}else if(q.cancelled||S==="open"&&(M.status==="resolved"||M.status==="closed")||S==="resolved"&&M.status!=="resolved"||S==="closed"&&M.status!=="closed")return!1;if(!ne)return!0;const Z=J(M.deviceId);return`${M.title} ${M.description} ${M.id} ${q.cmmsNo} ${Z.name}`.toLowerCase().includes(ne)});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${Oa({tree:w,session:a,scope:d,activeAlarmCount:b.length,isOpen:h,searchKeyword:v})}
            </div>

            <div class="pacom-header-meta">
              ${g==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${B}" data-toggle-group="1" aria-label="按拓扑根因归并">
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
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${g==="alarms"}" data-main-tab="alarms">实时告警（${x.length-N}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${g==="workorders"}" data-main-tab="workorders">运维工单（${E.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${g==="alarms"&&c==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${b.length}<span class="pacom-kpi-unit">条 ｜ 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${g==="workorders"&&S==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${A.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${g==="alarms"&&c==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">已闭环生效</span>
              <div class="pacom-kpi-value">${j}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="pacom-kpi-cell">
              <span class="pacom-kpi-label">关单复发待查</span>
              <div class="pacom-kpi-value" style="color:var(--pacom-status-online);">${$}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${we?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${s(we)}</span></div>`:""}
          ${_e?`<div class="pacom-alert-banner">${s(_e)}</div>`:""}

          ${g==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${s(G)}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${O==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${O==="critical"?"selected":""}>严重</option>
                      <option value="major" ${O==="major"?"selected":""}>重要</option>
                      <option value="minor" ${O==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${V==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${V==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${c==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${c==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${c==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${c==="snoozed"}" data-status-pill="snoozed">已忽略（${N}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${Y.size>0&&a.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${Y.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${ot.length} 项</span>
                  </div>
                </div>
                ${ot.length===0?'<div class="pacom-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${ot.map(M=>{const q=M.items[0],Z=dn[q.severity]??{label:q.severity,cls:"pacom-badge--neutral"},pe=J(q.deviceId),ie=mn(q),Ie=Va(q),Qe=se===q.id,je=D.get(q.id),ke=!!je,ct=Y.has(q.id),Je=fe.get(q.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${s(q.id)}" data-check-alarm="${s(q.id)}" ${ct?"checked":""} ${!p||q.status!=="active"||ke?"disabled":""} aria-label="选择 ${s(q.title)}" />
                                  </td>
                                  <td><span class="pacom-badge ${Z.cls}">${s(Z.label)}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${s(q.title)}</span>
                                      ${B?`<span class="pacom-badge pacom-badge--accent">${s(M.rootLabel)}${M.items.length>1?` ｜ 影响 ${M.items.length} 项`:""}</span>`:""}
                                      ${Je?`<span class="pacom-badge ${Je.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${s(Je.verdict.toUpperCase())}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${s(q.message)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${s(pe.name)}</div>
                                    <div class="pacom-row-sub">${s(pe.zone)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500; color:var(--pacom-status-warning);">${s(Ie.costLabel)}</div>
                                    <div class="pacom-row-sub">${s(Ie.comfortLabel)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${s(ie.duration)}</div>
                                    <div class="pacom-row-sub" style="color:${ie.worsening?"var(--pacom-status-warning)":"var(--pacom-status-online)"};">${s(ie.trend)}</div>
                                  </td>
                                  <td>
                                    <span class="pacom-badge ${ke?"pacom-badge--neutral":q.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${ke?`忽略 ${s(je?.duration)}`:q.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${ke?`<button class="pacom-btn" data-unsnooze="${s(q.id)}" ${p?"":"disabled"}>恢复监控</button>`:`
                                            ${q.status==="active"?`<button class="pacom-btn" data-mark-actioned="${s(q.id)}" ${p?"":"disabled"}>标记已处置</button>`:""}
                                            ${q.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${s(q.id)}" ${p?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${s(q.id)}">${Qe?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${Qe?`
                                    <tr class="pacom-table-detail-row">
                                      <td colspan="8">
                                        <div class="pacom-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${s(un(q))}
                                            </div>
                                            ${je?`<div class="pacom-info-banner">忽略周期：${s(je.duration)} ｜ 原因备注：${s(je.reason)}</div>`:""}
                                            ${Je?`
                                                <div class="pacom-banner ${Je.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${s(Je.summary)}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${Je.steps.map(ft=>`<span>${s(ft)}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${s(q.id)}</code> ｜ 设备编号 <code>${s(q.deviceId)}</code> ｜ 关联工单 ${s(q.workOrderId??"无")}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${s(q.id)}">单机自检（FTT）</button>
                                              ${!ke&&q.status==="active"?`<button class="pacom-btn" data-open-snooze="${s(q.id)}" ${p?"":"disabled"}>限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${s(q.deviceId)}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${s(q.deviceId)}">定位设备 →</button>
                                            </div>
                                            ${de===q.id?`
                                                <form data-snooze-form="${s(q.id)}" style="display:flex; flex-direction:column; gap:6px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
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
              ${(()=>{const M=he?E.find(q=>q.id===he)??null:null;if(M){const q=J(M.deviceId),Z=Le(M),pe=!!(!p||Z.cancelled||M.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${s(M.id)}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${s(M.title)}</h2>
                        <span class="pacom-badge pacom-badge--accent">${s(Z.cmmsNo)}</span>
                        ${Z.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${s(M.id)}" data-wo-status="${s(M.id)}" aria-label="更新工单状态" ${pe?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(ie=>`<option value="${ie}" ${M.status===ie?"selected":""}>${Yt[ie]}</option>`).join("")}
                          <option value="cancelled" ${Z.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${ee===M.id?`
                        <form data-close-wo-form="${s(M.id)}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${Yt[ce]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${s(Z.cause??"")}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${s(Z.solution??"")}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${s(Z.actualCost==="--"?"":Z.actualCost)}" />
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
                          <div class="pacom-row-sub">${s(M.description)}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${Z.tasks.map(ie=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${s(ie.id)}" data-wo-task="${s(M.id)}" data-task-id="${s(ie.id)}" ${ie.done?"checked":""} ${pe?"disabled":""} />
                                    <span>${s(ie.label)}</span>
                                  </span>
                                  ${ie.unit?`<span class="pacom-row-sub">实测：${s(ie.reading??"--")} ${s(ie.unit)}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${Z.history.map(ie=>`<span>• <span class="pacom-row-sub">${s(ie.at)}</span> — ${s(ie.text)}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${s(M.id)}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${s(Z.cmmsNo)}</code> ｜ 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${s(q.name)}（${s(q.zone)}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${s(Z.assigneeGroup)}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${s(Z.estCost)} / 实际 ${s(Z.actualCost)}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${s(Z.cause??"待完单填写")}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${s(Z.solution??"待完单填写")}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${s(M.deviceId??"")}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${s(M.deviceId??"")}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="pacom-table-card">
                  <div class="pacom-table-toolbar">
                    <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${s(G)}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${S==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${S==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${S==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${S==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${S==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${Ne.length} 条工单</span>
                  </div>
                  ${Ne.length===0?'<div class="pacom-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${Ne.map(q=>{const Z=J(q.deviceId),pe=Le(q),ie=!!(!p||pe.cancelled||q.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${s(q.title)}</span>
                                        ${pe.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${s(q.description)} ｜ <code>${s(q.id)}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${s(Z.name)}</div>
                                      <div class="pacom-row-sub">${s(Z.zone)}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${s(pe.cmmsNo)}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${s(pe.assigneeGroup)} ｜ 预估 ${s(pe.estCost)}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${s(q.id)}" data-wo-status="${s(q.id)}" aria-label="更新工单状态" ${ie?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(Ie=>`<option value="${Ie}" ${q.status===Ie?"selected":""}>${Yt[Ie]}</option>`).join("")}
                                          <option value="cancelled" ${pe.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${s(q.id)}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${ee===q.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${s(q.id)}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${Yt[ce]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${s(pe.cause??"")}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${s(pe.solution??"")}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${s(pe.actualCost==="--"?"":pe.actualCost)}" />
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
    `,Ta(e,{onToggle:()=>{h=!h,W(),h&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:M=>{v=M,W();const q=e.querySelector("[data-global-space-search]");q&&(q.focus(),q.setSelectionRange(M.length,M.length))},onPick:M=>{d=M,h=!1,W()}}),e.querySelectorAll("[data-main-tab]").forEach(M=>{M.addEventListener("click",()=>{g=M.dataset.mainTab??"alarms",we="",W()})}),e.querySelectorAll("[data-kpi-filter]").forEach(M=>{M.addEventListener("click",()=>{const q=M.dataset.kpiFilter;we="",q==="workorders"?(g="workorders",S=S==="open"?"all":"open"):(q==="active"||q==="acknowledged")&&(g="alarms",c=c===q?"all":q),W()})}),e.querySelectorAll("[data-status-pill]").forEach(M=>{M.addEventListener("click",()=>{c=M.dataset.statusPill??"all",W()})}),e.querySelectorAll("[data-wo-pill]").forEach(M=>{M.addEventListener("click",()=>{S=M.dataset.woPill??"all",W()})}),e.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{we="",P()}),e.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{B=!B,W()}),e.querySelector("[data-severity-filter]")?.addEventListener("change",M=>{O=M.currentTarget.value,W()}),e.querySelector("[data-alarm-sort]")?.addEventListener("change",M=>{V=M.currentTarget.value??"impact",W()}),e.querySelector("[data-alarm-search]")?.addEventListener("input",M=>{const q=M.currentTarget,Z=q.selectionStart??q.value.length;G=q.value,W();const pe=e.querySelector("[data-alarm-search]");pe&&(pe.focus(),pe.setSelectionRange(Z,Z))}),e.querySelectorAll("[data-check-alarm]").forEach(M=>{M.addEventListener("change",()=>{if(!p)return;const q=M.dataset.checkAlarm;q&&(M.checked?Y.add(q):Y.delete(q),W())})}),e.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{if(!p)return;_e="";const M=Array.from(Y);try{for(const q of M)await t.acknowledgeAlarm(q,"告警中心批量确认"),H.set(q,"批量确认处置");Y.clear(),we=`已批量确认 ${M.length} 条告警，未来 24 小时持续校验无复发。`,await P()}catch(q){_e=q instanceof Error?q.message:String(q),W()}}),e.querySelectorAll("[data-expand-alarm]").forEach(M=>{M.addEventListener("click",()=>{const q=M.dataset.expandAlarm??null;se=se===q?null:q,de=null,W()})}),e.querySelectorAll("[data-expand-wo]").forEach(M=>{M.addEventListener("click",()=>{const q=M.dataset.expandWo??null;he=he===q?null:q,W()})}),e.querySelectorAll("[data-run-ftt]").forEach(M=>{M.addEventListener("click",()=>{const q=x.find(Z=>Z.id===M.dataset.runFtt);q&&Se(q)})}),e.querySelectorAll("[data-open-snooze]").forEach(M=>{M.addEventListener("click",()=>{p&&(de=M.dataset.openSnooze??null,W())})}),e.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{de=null,W()}),e.querySelectorAll("[data-snooze-form]").forEach(M=>{M.addEventListener("submit",q=>{if(q.preventDefault(),!p)return;const Z=M.dataset.snoozeForm;if(!Z)return;const pe=new FormData(M),ie=String(pe.get("duration")??"24h"),Ie=String(pe.get("reason")??"").trim()||"现场核查中";D.set(Z,{duration:ie,reason:Ie}),Y.delete(Z),de=null,we=`已限时忽略该告警（${ie} ｜ ${Ie}），可在「已忽略」页签中随时恢复。`,W()})}),e.querySelectorAll("[data-unsnooze]").forEach(M=>{M.addEventListener("click",()=>{if(!p)return;const q=M.dataset.unsnooze;q&&(D.delete(q),we="已恢复该告警的实时监控。",W())})}),e.querySelectorAll("[data-go-ts]").forEach(M=>{M.addEventListener("click",()=>{const q=M.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(q)}`})}),e.querySelectorAll("[data-locate-home]").forEach(M=>{M.addEventListener("click",()=>{const q=M.dataset.locateHome??"";window.location.hash=q?`#home?device=${encodeURIComponent(q)}`:"#home"})}),e.querySelectorAll("[data-mark-actioned]").forEach(M=>{M.addEventListener("click",async()=>{if(!p)return;_e="";const q=M.dataset.markActioned;try{await t.acknowledgeAlarm(q,"现场自处理完成（Mark Actioned）"),H.set(q,"现场自处理完成"),Y.delete(q),we="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await P()}catch(Z){_e=Z instanceof Error?Z.message:String(Z),W()}})}),e.querySelectorAll("[data-to-wo]").forEach(M=>{M.addEventListener("click",async()=>{if(!p)return;_e="";const q=x.find(Z=>Z.id===M.dataset.toWo);if(q)try{await t.createWorkOrder({floorId:q.floorId,deviceId:q.deviceId,alarmId:q.id,title:`处置告警：${q.title}`,description:q.message}),we=`已将「${q.title}」转为运维工单并同步 CMMS。`,await P()}catch(Z){_e=Z instanceof Error?Z.message:String(Z),W()}})}),e.querySelectorAll("[data-wo-status]").forEach(M=>{M.addEventListener("change",async()=>{if(!p)return;const q=M.dataset.woStatus,Z=M.value;if(_e="",Z==="cancelled"){const pe=E.find(ie=>ie.id===q);if(pe){const ie=Le(pe);ie.cancelled=!0,ie.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),we="工单已移入「已取消」分类并锁定编辑。",W()}return}if(Z==="resolved"||Z==="closed"){ee=q,ce=Z,W();return}try{await t.updateWorkOrderStatus(q,Z);const pe=E.find(ie=>ie.id===q);pe&&Le(pe).history.unshift({at:"刚刚",text:`状态变更为「${Yt[Z]}」`}),we="工单状态已更新并写入审计日志。",await P()}catch(pe){_e=pe instanceof Error?pe.message:String(pe),await P()}})}),e.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{ee=null,W()}),e.querySelectorAll("[data-close-wo-form]").forEach(M=>{M.addEventListener("submit",async q=>{if(q.preventDefault(),!p)return;const Z=M.dataset.closeWoForm,pe=new FormData(M),ie=String(pe.get("cause")??"").trim(),Ie=String(pe.get("solution")??"").trim(),Qe=String(pe.get("actualCost")??"").trim();try{await t.updateWorkOrderStatus(Z,ce);const je=E.find(ke=>ke.id===Z);if(je){const ke=Le(je);ke.cause=ie,ke.solution=Ie,Qe&&(ke.actualCost=Qe),ke.history.unshift({at:"刚刚",text:`流转至「${Yt[ce]}」｜ 根因：${ie}`})}ee=null,he=Z,we=`工单已更新为「${Yt[ce]}」，根因与方案已沉淀归档。`,await P()}catch(je){_e=je instanceof Error?je.message:String(je),W()}})}),e.querySelectorAll("[data-wo-task]").forEach(M=>{M.addEventListener("change",()=>{if(!p)return;const q=E.find(ie=>ie.id===M.dataset.woTask);if(!q)return;const pe=Le(q).tasks.find(ie=>ie.id===M.dataset.taskId);pe&&(pe.done=M.checked),W()})})}await P()}function fn(e){return{spatial:!!(e.createProject&&e.upsertBuilding&&e.upsertFloor&&e.upsertZone),createDevice:!!e.createDeploymentDevice,manageDevice:!!(e.updateDeploymentDevice&&e.deleteDeploymentDevice),lightMarkers:!!(e.addLightMarker&&e.deleteLightMarker),meshRoles:!!e.updateMeshRole,edgeSync:!!e.syncEdgeGateway,deviceParams:!!e.saveDeviceParams,deviceGroups:!!(e.upsertDeviceGroup&&e.deleteDeviceGroup),floorDocs:!!e.attachFloorDoc,manageDocs:!!(e.deleteFloorDoc&&e.updateFloorDocCategory),manageConnections:!!(e.upsertConnection&&e.deleteConnection),restartEdge:!!e.restartEdgeService,stageSnapshot:!!e.saveDeliveryStageSnapshot,signOffDelivery:!!e.signOffDeliveryBatch,deferredFloors:!!e.toggleFloorDeferred}}const gn={project_config:{title:"项目配置",subtitle:"管理项目档案、楼宇结构、楼层 2D 平面底图、功能区划分与工程资料。",granularity:"project"},device_marking:{title:"设备标记",subtitle:"在纯白 2D 平面底图上完成设备点位标记、回路灯点布置与硬件绑定。",granularity:"floor"},device_list:{title:"设备列表",subtitle:"核查本层四态设备清单，配置硬件绑定、自治参数或执行单机与全层自检。",granularity:"floor"},device_groups:{title:"设备分组",subtitle:"维护端侧蓝牙 Mesh 自治联动组与云端业务分组，支持成员编排与群组试控。",granularity:"floor"},device_network:{title:"设备网络",subtitle:"查看无线蓝牙 Mesh 通信树与业务供能流向，执行网络体检与边缘网关同步。",granularity:"floor"},connections:{title:"系统接入",subtitle:"管理边缘网关与暖通、电表、照明等异构子系统接入通道与采集质量。",granularity:"project"},acceptance:{title:"交付验收",subtitle:"按 5 步部署门控核验各楼层就绪状态，执行全层自检并冻结交付基线快照。",granularity:"building"}},ys={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},Ps={frozen:"已冻结",draft:"草稿",delivered:"已交付"},ha={gateway:"网关 / 适配器",lighting:"照明回路",hvac:"暖通空调",sensor:"环境传感",meter:"智能电表"},ua={lab:"实验区",office:"办公区",meeting:"会议室",corridor:"走廊 / 公区",utility:"机房 / 后勤",outdoor:"露台 / 活动区"},Ya=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"建议每层启用 2–3 个 Proxy，空旷 20–30m 按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 防止广播干扰，自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度调光，自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙 / 拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关有线接入，不加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485 / 通讯管理机有线接入"}],bn={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}},zs=[{key:"lab_std",label:"标准实验层",items:[{suffix:"东侧实验区",category:"lab"},{suffix:"西侧实验区",category:"lab"},{suffix:"核心走廊与管井",category:"corridor"}]},{key:"office_std",label:"标准办公层",items:[{suffix:"开放办公区",category:"office"},{suffix:"会议室",category:"meeting"},{suffix:"公共走廊与茶水区",category:"corridor"}]},{key:"lobby_1f",label:"首层大堂",items:[{suffix:"入口大堂与展厅",category:"corridor"},{suffix:"配电与后勤机房",category:"utility"}]},{key:"roof_plant",label:"屋面设备层",items:[{suffix:"空调主机区",category:"utility"},{suffix:"水泵与排风设备区",category:"utility"}]}],Ja=["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"],hn=new Set(["bacnet_ip","modbus_tcp","modbus_rtu","knx"]);function Vt(e){return!(e.category==="hvac"||e.category==="meter"||e.category!=="gateway"&&e.hardwareBinding&&hn.has(e.hardwareBinding.protocol))}function Ns(e){return`mesh-${e.replace(/[^a-z0-9]/gi,"").slice(-4).toLowerCase()||"01"}`}function $a(e,t){return e==="online"?{label:"在线",cls:"pacom-badge--online",dot:"pacom-dot--online"}:e==="degraded"?{label:"信号降级",cls:"pacom-badge--warning",dot:"pacom-dot--warning"}:e==="unknown"||!t?{label:"待入网",cls:"pacom-badge--neutral",dot:"pacom-dot--offline"}:{label:"离线",cls:"pacom-badge--critical",dot:"pacom-dot--critical"}}function Da(e){const t=e.trim().toUpperCase();if(t==="RF"||t==="R"||t==="ROOF"||t.includes("屋面")||t.includes("屋顶")||t.includes("天面"))return 999;const a=t.match(/(-?\d+)/);if(!a)return 0;const n=Number(a[1]);return t.startsWith("B")||t.includes("地下")||t.includes("负")?-Math.abs(n):n}const $s={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,十一:11,十二:12,十三:13,十四:14,十五:15,十六:16,十七:17,十八:18,十九:19,二十:20,二十一:21,二十二:22,二十三:23,二十四:24,二十五:25},Qa={mesh_auto:["灯光联动组（传感-面板）","调光器群控组"],cloud_biz:["空调业务组","行政 / 标牌管控组","跨区综合管控组"]},yn=["竣工图纸","回路图纸","点位清单","设备手册","调试记录","其他资料"];function $n(e){const t=e.toLowerCase();return t.endsWith(".xlsx")||t.endsWith(".xls")||t.endsWith(".csv")?"点位清单":t.endsWith(".doc")||t.endsWith(".docx")?"设备手册":t.endsWith(".dwg")||t.endsWith(".dxf")||t.endsWith(".png")||t.endsWith(".jpg")||t.endsWith(".jpeg")||t.endsWith(".webp")?"竣工图纸":t.endsWith(".pdf")?t.includes("手册")||t.includes("维保")?"设备手册":t.includes("回路")?"回路图纸":"竣工图纸":"其他资料"}function Xa(e,t,a=""){if(a){const g=/东/.test(a),c=/西/.test(a),S=/北/.test(a),O=/南/.test(a);if(/走廊|核心|大厅|大堂|中庭|茶水|公区/.test(a))return{left:40,top:30,width:20,height:38};if(c&&S)return{left:10,top:18,width:30,height:28};if(c&&O)return{left:10,top:52,width:30,height:28};if(g&&S)return{left:60,top:18,width:30,height:28};if(g&&O)return{left:60,top:52,width:30,height:28};if(c)return{left:10,top:22,width:28,height:52};if(g)return{left:62,top:22,width:28,height:52};if(S)return{left:26,top:16,width:48,height:24};if(O)return{left:26,top:60,width:48,height:24}}const n=t<=2?Math.max(1,t):t<=4?2:3,o=Math.max(1,Math.ceil(t/n)),l=e%n,p=Math.floor(e/n),w=12,d=20,h=4,v=100-w*2-h*(n-1),x=100-d*2-h*(o-1),E=Math.max(18,Math.round(v/n)),F=Math.max(20,Math.round(x/o));return{left:Math.min(78,Math.round(w+l*(E+h))),top:Math.min(74,Math.round(d+p*(F+h))),width:E,height:F}}function Qt(e){const a=e.trim().replace(/\.[a-z0-9]{1,6}$/i,""),n=a.toUpperCase();if(/(?:^|[^A-Z0-9])(RF|ROOF)(?:[^A-Z0-9]|$)/.test(n)||/屋面|屋顶|天面/.test(a))return"RF";const o=n.match(/(?:^|[^A-Z0-9])B0*(\d+)F?(?:[^A-Z0-9]|$)/);if(o)return`B${Number(o[1])}`;const l=a.match(/(?:地下|负)(0*\d+|[一二三四五六七八九十]+)(?:层|楼)?/);if(l){const h=/^\d+$/.test(l[1])?Number(l[1]):$s[l[1]];if(h)return`B${h}`}if(/首层|一层/.test(a))return"1F";const p=n.match(/(?:^|[^A-Z0-9])0*(\d+)F(?:[^A-Z0-9]|$)/);if(p)return`${Number(p[1])}F`;const w=n.match(/(?:^|[^A-Z0-9])F0*(\d+)(?:[^A-Z0-9]|$)/);if(w)return`${Number(w[1])}F`;const d=a.match(/(0*\d+|[一二三四五六七八九十]+)(?:层|楼)/);if(d){const h=/^\d+$/.test(d[1])?Number(d[1]):$s[d[1]];if(h)return`${h}F`}return null}function Us(e){return new Promise((t,a)=>{const n=new FileReader;n.onload=()=>typeof n.result=="string"?t(n.result):a(new Error("无法读取图片内容")),n.onerror=()=>a(new Error(`读取文件「${e.name}」失败`)),n.readAsDataURL(e)})}async function oa(e,t=1600,a=.82){const n=await Us(e);return!e.type.startsWith("image/")||e.size<140*1024||typeof document>"u"?n:new Promise(o=>{const l=new Image;l.onload=()=>{try{const p=Math.min(1,t/Math.max(l.naturalWidth||1,l.naturalHeight||1)),w=Math.max(1,Math.round(l.naturalWidth*p)),d=Math.max(1,Math.round(l.naturalHeight*p)),h=document.createElement("canvas");h.width=w,h.height=d;const v=h.getContext("2d");if(!v){o(n);return}v.drawImage(l,0,0,w,d);const x=h.toDataURL("image/webp",a);o(x.length>0&&x.length<n.length?x:n)}catch{o(n)}},l.onerror=()=>o(n),l.src=n})}function ws(e){const t=e.name.match(/\b((?:FCU|VAV|AHU|PAU|GW|AP|SW|DM)-\d+)\b/i);if(t?.[1])return t[1].toUpperCase();const a=e.name.replace(/^[A-Z]?\d+F\s*|[A-Z]?RF\s*|[A-Z]?B\d+\s*/i,"").trim()||e.name.trim();return a.length>9?`${a.slice(0,8)}…`:a}function ya(e,t){const a=e.tree.floors.find(g=>g.id===t),n=e.buildingDevicesByFloor.get(t)??(t===e.activeFloorId?e.floorDevices:[]),o=n.length===0&&e.deferredFloorIds.has(t),l=!!a?.plan,p=n.filter(g=>!!g.planPoint).length,w=n.filter(g=>g.physicalInstalled&&!!g.hardwareBinding).length,d=n.filter(g=>g.connectivity==="online").length,v=!!(e.edgeSyncByFloor[t]??(t===e.activeFloorId?e.edgeSync:void 0))?.dirty,x=e.planChangeAlerts[t]??null,E=!v&&!x?e.floorFttRecords[t]??null:null,F=[];return o||(l||F.push("待上传平面底图"),n.length===0&&F.push("本层尚无登记设备"),n.length>0&&p<n.length&&F.push(`未标记 ${n.length-p} 台`),n.length>0&&w<n.length&&F.push(`待绑定或复核 ${n.length-w} 台`),n.length>0&&d<n.length&&F.push(`待入网或离线 ${n.length-d} 台`),v&&F.push("待同步边缘配置"),x&&F.push("换图后待核对点位"),n.length>0&&!E&&F.push("尚未通过全层自检（FTT）")),{hasPlan:l,deviceCount:n.length,placedCount:p,boundVerifiedCount:w,onlineCount:d,syncDirty:v,planAlert:x,fttRecord:E,deferred:o,blockers:F,readyForFormalFreeze:!o&&n.length>0&&F.length===0}}function Ss(e,t){const a=e.status!=="connected",n=t.filter(o=>o.hardwareBinding?.protocol===e.protocol);return n.length>0?n.map(o=>{const l=o.connectivity==="offline"||a;return{pointName:o.category==="hvac"?"送风温度 / 阀门开度":o.category==="lighting"?"回路开关 / 亮度反馈":o.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:o.name,value:l?"无上报":o.category==="hvac"?"23.4°C ｜ 62%":o.category==="lighting"?"开启 ｜ 80%":o.category==="sensor"?"23.2°C ｜ 640 ppm":"负载 24% ｜ 18ms",interval:"60s",lastSeen:l?"46 分钟前":"12 秒前",quality:l?o.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${e.protocol.toUpperCase()} 采集通道汇总点`,deviceName:e.name,value:a?"采样延迟":"正常上报",interval:"60s",lastSeen:a?"38 分钟前":"9 秒前",quality:a?"delayed":"online"}]}function Ba(e,t){const a=new Set(t.map(o=>Qt(o.name)??o.name.toUpperCase())),n=[];for(let o=1;o<=e.aboveFloors;o+=1){const l=`${o}F`;a.has(l)||n.push({kind:"above",level:o,name:l})}for(let o=1;o<=e.belowFloors;o+=1){const l=`B${o}`;a.has(l)||n.push({kind:"below",level:-o,name:l})}return e.hasRoof&&!a.has("RF")&&n.push({kind:"roof",level:99,name:"RF"}),n}function wt(e,t){return`<button type="button" class="dep-info-btn" data-dep-info="${s(t)}" aria-label="${s(e)}" aria-expanded="false">${re("info",14)}</button>`}function Xt(e,t,a="layers"){const n=!e||!t,o=e?t?"":"待后端空间建档接口对接":"当前角色为只读权限";return`
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
      <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${n?`disabled title="${s(o)}"`:""}>+ 创建第一个项目</button>
    </div>`}function wn(e,t,a){return e?t?"":`disabled title="${s(a)}"`:'disabled title="当前角色为只读权限"'}function Sn(e){const{tree:t,canEdit:a,caps:n,connections:o}=e;if(t.projects.length===0)return Xt(a,n.spatial,"plug");const l=wn(a,n.manageConnections,"待后端系统接入写入接口对接"),p=o.reduce((c,S)=>c+S.collectedPoints,0),w=o.reduce((c,S)=>c+S.calculatedPoints,0),d=o.filter(c=>c.status==="connected").length,h=o.filter(c=>c.status!=="connected"),v=e.connSearch.trim().toLowerCase(),x=o.filter(c=>!(e.connStatusFilter!=="all"&&c.status!==e.connStatusFilter||v&&!`${c.name} ${c.protocol} ${c.endpoint}`.toLowerCase().includes(v))),E=Array.from(e.buildingDevicesByFloor.values()).flat(),F=E.length>0?E:e.floorDevices,g=e.connViewMode==="topology"?x.find(c=>c.id===e.selectedTopoConnId)??x[0]??null:null;return`
    <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">已连通通道</span>
        <div class="pacom-kpi-value">${d}<span class="pacom-kpi-unit">/ ${o.length}</span></div>
        <span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">通道连通率 ${wt("通道连通率口径","按「已连通通道数 / 当前项目总接入通道数」计算，独立于单点位采集质量；点击行内「点位质量」可查看逐点读数与延迟。")}</span>
        <div class="pacom-kpi-value">${o.length?`${Math.round(d/o.length*100)}<span class="pacom-kpi-unit">%</span>`:"—"}</div>
        <span class="pacom-kpi-delta">${o.length?`分母：${o.length} 条已建通道`:"尚未配置接入通道"}</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">原始采集点 ${wt("原始采集点说明","直接通过 BACnet / Modbus / DALI / MQTT 等协议从现场网关或子系统读取的实时遥测点位数量。")}</span>
        <div class="pacom-kpi-value">${p}<span class="pacom-kpi-unit">点</span></div>
        <span class="pacom-kpi-delta">协议直采实时遥测</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">衍生计算点 ${wt("衍生计算点说明","基于原始采集点聚合计算生成的虚拟指标（如分区平均温度、能耗累计、碳排换算），与原始点位独立计数。")}</span>
        <div class="pacom-kpi-value">${w}<span class="pacom-kpi-unit">点</span></div>
        <span class="pacom-kpi-delta">能耗与聚合虚拟点位</span>
      </div>
    </div>

    ${h.length>0?`<div class="pacom-banner pacom-banner--critical">
            <div class="pacom-banner-text">
              <span class="pacom-banner-title">检测到 ${h.length} 条采集通道通信降级（${s(h.map(c=>c.name).join("、"))}）</span>
              <span class="pacom-banner-sub">建议优先核查局域网 UDP/TCP 端口冲突、RS485 终端电阻与从站地址。</span>
            </div>
          </div>`:""}

    <div class="pacom-log-toolbar">
      <div class="pacom-log-filters">
        <div class="pacom-tabs" role="tablist" aria-label="系统接入视图切换">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${e.connViewMode==="list"}" data-conn-view="list">连接清单</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${e.connViewMode==="topology"}" data-conn-view="topology">接入拓扑</button>
        </div>
        <input class="pacom-input" name="connSearch" style="width:220px;" data-conn-search placeholder="搜索通道名称、协议或端点…" value="${s(e.connSearch)}" aria-label="搜索系统接入通道" />
        <select class="pacom-select" name="connStatusFilter" data-conn-status-filter aria-label="按连通状态筛选">
          <option value="all" ${e.connStatusFilter==="all"?"selected":""}>全部状态（${o.length}）</option>
          <option value="connected" ${e.connStatusFilter==="connected"?"selected":""}>已连通（${d}）</option>
          <option value="degraded" ${e.connStatusFilter==="degraded"?"selected":""}>通信降级（${o.filter(c=>c.status==="degraded").length}）</option>
          <option value="disconnected" ${e.connStatusFilter==="disconnected"?"selected":""}>已断开（${o.filter(c=>c.status==="disconnected").length}）</option>
        </select>
      </div>
      <span class="pacom-row-sub">显示 ${x.length} / ${o.length} 条通道</span>
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
                ${x.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:36px 16px;"><strong>暂无匹配接入通道</strong><span>可调整筛选条件或点击右上角「+ 新增接入通道」。</span></div></td></tr>':x.map(c=>{const S=ys[c.status]??{label:c.status,cls:"pacom-badge--neutral"},O=e.expandedConnId===c.id,V=e.connMenuOpenId===c.id,B=O?Ss(c,F):[],G=c.buildingId?t.buildings.find(ee=>ee.id===c.buildingId)?.name:"",se=c.floorId?t.floors.find(ee=>ee.id===c.floorId)?.name:"",he=G?se?`${G} ${se}`:`${G} 整栋`:"全项目通用",de=c.collectedPoints+c.calculatedPoints;return`
                            <tr>
                              <td>
                                <strong>${s(c.name)}</strong>
                                <div class="pacom-row-sub">${s(he)}</div>
                              </td>
                              <td><span class="pacom-badge pacom-badge--neutral">${c.protocol.toUpperCase()}</span></td>
                              <td><code style="font-size:12px; white-space:nowrap;">${s(c.endpoint)}</code></td>
                              <td style="white-space:nowrap; font-variant-numeric:tabular-nums;">${de===0?'<span class="pacom-row-sub">待映射</span>':`${c.collectedPoints} 采 ｜ ${c.calculatedPoints} 算`}</td>
                              <td style="white-space:nowrap;">
                                <span class="pacom-badge ${S.cls}">${S.label}</span>
                              </td>
                              <td>
                                <div style="display:flex; justify-content:flex-end; align-items:center; gap:6px; white-space:nowrap;">
                                  <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${s(c.id)}">${O?"收起":"点位"}</button>
                                  <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${s(c.id)}">测通</button>
                                  <div class="dep-row-menu-wrap">
                                    <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="padding:0 7px;" data-toggle-conn-row-menu="${s(c.id)}" aria-label="更多通道操作" aria-expanded="${V}">
                                      ${re("more-horizontal",14)}
                                    </button>
                                    ${V?`
                                        <div class="dep-row-menu" role="menu">
                                          <button type="button" class="dep-row-menu-item" role="menuitem" data-copy-endpoint="${s(c.id)}" data-endpoint-val="${s(c.endpoint)}">${e.copiedEndpointId===c.id?"已复制端点":"复制端点"}</button>
                                          <button type="button" class="dep-row-menu-item" role="menuitem" data-edit-conn="${s(c.id)}" ${l}>编辑通道</button>
                                          <button type="button" class="dep-row-menu-item dep-row-menu-item--danger" role="menuitem" data-del-conn="${s(c.id)}" ${l}>删除通道</button>
                                        </div>`:""}
                                  </div>
                                </div>
                              </td>
                            </tr>
                            ${O?`
                                <tr class="pacom-table-detail-row">
                                  <td colspan="6">
                                    <div style="display:flex; flex-direction:column; gap:8px;">
                                      <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                                        <strong style="font-size:14px; font-weight:450;">传感器 / 子设备采集质量明细（${s(c.name)}）</strong>
                                        <span class="pacom-row-sub">${e.isDemoMode?"演示模拟采集态 ｜ ":""}在线正常 ｜ 延迟 &gt;30m ｜ 断流 &gt;3×间隔</span>
                                      </div>
                                      ${B.map(ee=>{const ce=F.find(Y=>Y.name===ee.deviceName);return`
                                            <div class="pacom-receipt-item">
                                              <span><strong>${s(ee.deviceName)}</strong> ｜ ${s(ee.pointName)}</span>
                                              <span style="display:inline-flex; align-items:center; gap:8px;">
                                                <span class="pacom-row-sub">当前 ${s(ee.value)} ｜ ${s(ee.lastSeen)}</span>
                                                <span class="pacom-badge ${ee.quality==="online"?"pacom-badge--online":ee.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                                  ${ee.quality==="online"?"在线正常":ee.quality==="delayed"?"延迟 >30m":"断流"}
                                                </span>
                                                ${ce?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-conn-jump-dev="${s(ce.id)}" data-conn-jump-floor="${s(ce.floorId)}">定位设备 →</button>`:""}
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
            ${F.filter(c=>c.category==="gateway").length===0?'<div class="pacom-row-sub">当前范围暂未登记边缘网关。</div>':F.filter(c=>c.category==="gateway").map(c=>{const S=$a(c.connectivity,!!c.hardwareBinding);return`
                        <button type="button" class="dep-topo-node ${c.connectivity==="offline"?"is-issue":""}" data-conn-jump-dev="${s(c.id)}" data-conn-jump-floor="${s(c.floorId)}">
                          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                            <strong>${s(c.name)}</strong>
                            <span class="pacom-badge ${S.cls}">${S.label}</span>
                          </div>
                          <span class="pacom-row-sub">${s(c.hardwareBinding?.networkAddress??"未绑定地址")}</span>
                        </button>`}).join("")}
          </div>
          <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${re("chevron-right",12)}</span></div>
          <div class="dep-topo-col">
            <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 协议接入通道（${x.length}）</strong>
            ${x.length===0?'<div class="pacom-row-sub">暂无匹配接入通道。</div>':x.map(c=>{const S=ys[c.status]??{label:c.status,cls:"pacom-badge--neutral"},O=g?.id===c.id;return`
                        <button type="button" class="dep-topo-node ${c.status!=="connected"?"is-issue":""}" style="${O?"box-shadow:0 0 0 1.5px var(--pacom-text-primary);":""}" data-select-topo-conn="${s(c.id)}">
                          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                            <strong>${s(c.name)}</strong>
                            <span class="pacom-badge ${S.cls}">${S.label}</span>
                          </div>
                          <span class="pacom-row-sub">${c.protocol.toUpperCase()} ｜ ${s(c.endpoint)}</span>
                        </button>`}).join("")}
          </div>
          <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${re("chevron-right",12)}</span></div>
          <div class="dep-topo-col">
            <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 点位采集汇总</strong>
            ${x.length===0?'<div class="pacom-row-sub">无已映射点位。</div>':x.map(c=>`
                      <button type="button" class="dep-topo-node ${c.status!=="connected"?"is-issue":""}" style="${g?.id===c.id?"box-shadow:0 0 0 1.5px var(--pacom-text-primary);":""}" data-select-topo-conn="${s(c.id)}">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong>${s(c.name)}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${c.collectedPoints+c.calculatedPoints} 点</span>
                        </div>
                        <span class="pacom-row-sub">原始采集 ${c.collectedPoints} 点 ｜ 衍生计算 ${c.calculatedPoints} 点</span>
                      </button>`).join("")}
          </div>
        </div>
        ${g?(()=>{const c=Ss(g,F),S=g.buildingId?t.buildings.find(B=>B.id===g.buildingId)?.name:"",O=g.floorId?t.floors.find(B=>B.id===g.floorId)?.name:"",V=S?O?`${S} ${O}`:`${S} 整栋`:"全项目通用";return`
                  <div class="pacom-card" style="padding:16px 20px; gap:12px;">
                    <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                      <div>
                        <strong style="font-size:15px; font-weight:500;">通道明细：${s(g.name)}</strong>
                        <div class="pacom-row-sub">${g.protocol.toUpperCase()} ｜ ${s(g.endpoint)} ｜ 服务范围：${s(V)}</div>
                      </div>
                      <div style="display:inline-flex; gap:8px;">
                        <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${s(g.id)}">连通测通</button>
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-conn="${s(g.id)}" ${l}>编辑通道</button>
                      </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:6px;">
                      ${c.map(B=>{const G=F.find(se=>se.name===B.deviceName);return`
                            <div class="pacom-receipt-item">
                              <span><strong>${s(B.deviceName)}</strong> ｜ ${s(B.pointName)}</span>
                              <span style="display:inline-flex; align-items:center; gap:8px;">
                                <span class="pacom-row-sub">${s(B.value)} ｜ ${s(B.lastSeen)}</span>
                                <span class="pacom-badge ${B.quality==="online"?"pacom-badge--online":B.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                  ${B.quality==="online"?"正常":B.quality==="delayed"?"延迟":"断流"}
                                </span>
                                ${G?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-conn-jump-dev="${s(G.id)}" data-conn-jump-floor="${s(G.floorId)}">定位设备 →</button>`:""}
                              </span>
                            </div>`}).join("")}
                    </div>
                  </div>`})():""}`}
  `}function En(e){const{tree:t,canEdit:a,caps:n}=e;if(t.projects.length===0)return Xt(a,n.spatial,"clipboard-check");const o=t.buildings.find(D=>D.id===e.activeBuildingId)??null,l=e.activeBuildingId?e.sortedBuildingFloors(e.activeBuildingId):[],p=new Map(l.map(D=>[D.id,ya(e,D.id)])),w=l.filter(D=>!p.get(D.id)?.deferred),d=l.length-w.length,h=w.filter(D=>!!D.plan).length,v=w.flatMap(D=>e.buildingDevicesByFloor.get(D.id)??[]),x=v.filter(D=>!!D.planPoint).length,E=v.filter(D=>D.connectivity==="online").length,F=v.filter(D=>D.connectivity==="unknown"||!D.hardwareBinding&&D.connectivity!=="offline").length,g=Math.max(0,v.length-E-F),c=v.filter(D=>D.physicalInstalled&&!!D.hardwareBinding).length,S=w.filter(D=>(e.buildingDevicesByFloor.get(D.id)?.length??0)>0),O=S.filter(D=>!e.edgeSyncByFloor[D.id]?.dirty).length,V=S.length-O,B=w.filter(D=>!!e.planChangeAlerts[D.id]).length,G=S.filter(D=>!!p.get(D.id)?.fttRecord).length,se=w.filter(D=>!p.get(D.id)?.readyForFormalFreeze),he=e.acceptanceFilter==="active"&&S.length===0?"all":e.acceptanceFilter,de=he==="active"?S:he==="pending"?se:l,ee=[{num:1,label:"项目与底图",nav:"project_config",val:`${h}`,unit:`/ ${w.length} 层`,done:w.length>0&&h===w.length,warn:!1,sub:w.length===0?"本期暂无纳入楼层":h===w.length?d>0?`全部就绪（另 ${d} 层暂缓）`:"本期底图全部就绪":`尚缺 ${w.length-h} 层底图 →`},{num:2,label:"设备标记",nav:"device_marking",val:`${x}`,unit:`/ ${v.length} 台`,done:v.length>0&&x===v.length&&B===0,warn:B>0,sub:B>0?`${B} 层换图待核对 →`:v.length===0?"待登记设备 →":v.length-x>0?`未标记 ${v.length-x} 台 →`:"坐标全部核对就绪"},{num:3,label:"入网在线",nav:"device_network",val:`${E}`,unit:`/ ${v.length} 台`,done:v.length>0&&E===v.length,warn:g>0,sub:v.length===0?"待登记设备 →":g>0?`${g} 台离线${F>0?` ｜ ${F} 待入网`:""} →`:F>0?`${F} 台待绑定入网 →`:"全量在线可达"},{num:4,label:"边缘同步",nav:"device_network",val:`${O}`,unit:`/ ${S.length} 层`,done:S.length>0&&V===0,warn:V>0,sub:S.length===0?"待部署实施层 →":V>0?`${V} 层待同步 →`:`已同步 ｜ v${e.edgeSync.version}`},{num:5,label:"复核自检",nav:"device_list",val:`${c}`,unit:`/ ${v.length} 台`,done:v.length>0&&c===v.length&&G===S.length,warn:!1,sub:v.length===0?"待登记设备 →":c<v.length?`待复核 ${v.length-c} 台 →`:G<S.length?`已复核 ｜ 待自检 ${S.length-G} 层`:"全部复核并通过自检"}],ce=ee.findIndex(D=>!D.done),Y=e.batchFttResult&&e.batchFttResult.buildingId===e.activeBuildingId&&!e.planChangeAlerts[e.batchFttResult.floorId]&&!e.edgeSyncByFloor[e.batchFttResult.floorId]?.dirty&&(e.batchFttResult.failed>0||e.floorFttRecords[e.batchFttResult.floorId])?e.batchFttResult:null;return`
    <div class="dep-pipeline-bar" role="region" aria-label="整栋 5 步部署门控推进条">
      ${ee.map((D,H)=>{const fe=H===ce;return`
            <button type="button" class="${["dep-pipeline-step",D.done?"is-done":"",D.warn?"is-warn":"",fe?"is-focus":""].filter(Boolean).join(" ")}" data-dep-nav="${D.nav}">
              <div class="dep-pipeline-step-head">
                <span class="dep-pipeline-num">${D.done?re("check",12):D.num}</span>
                <span>${D.label}</span>
              </div>
              <div class="dep-pipeline-val">${D.val}<span class="pacom-kpi-unit">${D.unit}</span></div>
              <span class="dep-pipeline-sub">${D.sub}</span>
            </button>`}).join("")}
    </div>

    ${Y?`<div class="pacom-banner ${Y.failed===0?"pacom-banner--ok":"pacom-banner--critical"}">
            <div class="pacom-banner-text">
              <span class="pacom-banner-title">最近全层自检（${e.isDemoMode?"演示模拟回读":"FTT"} ｜ ${s(Y.floorName)} ｜ ${Y.ranAt}）</span>
              <span class="pacom-banner-sub">通过 ${Y.passed}/${Y.total} 台${Y.failedNames.length?` ｜ 异常：${s(Y.failedNames.join("、"))}`:e.isDemoMode?" ｜ 演示环境验证通过，允许正式冻结":" ｜ 已完成状态回读与安全复位"}</span>
            </div>
            <button type="button" class="pacom-drawer-close" data-dismiss-ftt="1" aria-label="关闭自检提示">${re("x",14)}</button>
          </div>`:""}

    <section class="pacom-section">
      <div class="pacom-section-head">
        <div>
          <h2 class="pacom-section-title">楼层 × 工序交付门控矩阵</h2>
          <span class="pacom-row-sub">点击单元格直达该层修复；零设备预留层可标记「本期不纳入」以准确统计验收进度</span>
        </div>
        ${v.length>0||e.showEmptyBuildingMatrix?`
            <div class="pacom-tabs" role="tablist" aria-label="验收楼层筛选">
              <button type="button" class="pacom-tab" role="tab" aria-selected="${he==="active"}" data-acc-filter="active">实施中 ${S.length}</button>
              <button type="button" class="pacom-tab" role="tab" aria-selected="${he==="pending"}" data-acc-filter="pending">待补缺项 ${se.length}</button>
              <button type="button" class="pacom-tab" role="tab" aria-selected="${he==="all"}" data-acc-filter="all">全部楼层 ${l.length}</button>
            </div>`:""}
      </div>

      ${v.length===0&&!e.showEmptyBuildingMatrix?`
          <div class="dep-empty-card">
            <div class="dep-empty-icon">${re("map-pin",20)}</div>
            <strong style="font-size:16px; line-height:24px; font-weight:500; color:var(--pacom-text-primary);">${s(o?.name??"当前楼宇")} 尚未开始设备部署</strong>
            <span class="pacom-row-sub">本栋已建 ${l.length} 层（${h}/${w.length} 层底图已就绪），当前暂无已登记设备。请先前往「设备标记」登记并布置本栋设备，完成后即可回此页执行自检与正式冻结。</span>
            <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
              <button type="button" class="pacom-btn pacom-btn--primary" data-dep-nav="device_marking">前往设备标记 →</button>
              <button type="button" class="pacom-btn" data-toggle-empty-matrix="1">展开全部 ${l.length} 层底图清单</button>
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
                  ${de.length===0?'<tr><td colspan="7"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>当前筛选无楼层</strong><span>可切换至「全部楼层」查看整栋状态，或在「项目配置」中建档。</span></div></td></tr>':de.map(D=>{const H=e.buildingDevicesByFloor.get(D.id)??[],fe=t.zones.filter(Se=>Se.floorId===D.id),be=p.get(D.id),we=H.some(Se=>Se.connectivity!=="online"&&!Vt(Se)),_e=we?"device_list":"device_network",Le=e.buildingDeliveries.find(Se=>Se.floorId===D.id&&Se.status!=="draft"),P=be.deferred?"本期不纳入":be.readyForFormalFreeze?"可正式冻结":be.planAlert?"换图待核对":H.length>0?!be.fttRecord&&!be.syncDirty&&be.placedCount===H.length&&be.boundVerifiedCount===H.length&&be.onlineCount===H.length?"待执行自检":"实施中":"待配置",J=be.deferred?"pacom-badge--neutral":be.readyForFormalFreeze?"pacom-badge--online":H.length>0?"pacom-badge--warning":"pacom-badge--neutral";return`
                              <tr style="${be.deferred?"opacity:0.65;":""}">
                                <td>
                                  <strong>${s(D.name)}</strong>
                                  <div class="pacom-row-sub">${D.areaSqm?`${D.areaSqm} m²`:"待补面积"}${Le?` ｜ ${s(Le.versionTag)}`:""}</div>
                                </td>
                                <td>
                                  <button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-matrix-floor="${s(D.id)}">
                                    <span class="pacom-dot ${be.planAlert?"pacom-dot--warning":be.hasPlan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                    <span>${be.planAlert?"换图待核对":be.hasPlan?`已传图 ｜ ${fe.length} 区`:"待传底图"}</span>
                                  </button>
                                </td>
                                <td>
                                  <button type="button" class="dep-matrix-btn" data-matrix-nav="device_marking" data-matrix-floor="${s(D.id)}">
                                    <span class="pacom-dot ${H.length>0&&be.placedCount===H.length&&!be.planAlert?"pacom-dot--online":H.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span>
                                    <span>${H.length>0?`${be.placedCount}/${H.length}`:"未标记"}</span>
                                  </button>
                                </td>
                                <td>
                                  <button type="button" class="dep-matrix-btn" data-matrix-nav="${_e}" data-matrix-floor="${s(D.id)}" ${we?'data-matrix-offline="1"':""}>
                                    <span class="pacom-dot ${H.length>0&&be.onlineCount===H.length?"pacom-dot--online":H.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span>
                                    <span>${H.length>0?`${be.onlineCount}/${H.length}`:"—"}</span>
                                  </button>
                                </td>
                                <td>
                                  <button type="button" class="dep-matrix-btn" data-matrix-nav="device_list" data-matrix-floor="${s(D.id)}">
                                    <span class="pacom-dot ${H.length>0&&be.boundVerifiedCount===H.length?"pacom-dot--online":H.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span>
                                    <span>${H.length>0?`${be.boundVerifiedCount}/${H.length}`:"—"}</span>
                                  </button>
                                </td>
                                <td>
                                  <span class="pacom-badge ${J}" title="${s(be.blockers.join("；"))}">${P}</span>
                                </td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; gap:6px; white-space:nowrap;">
                                    ${H.length===0&&n.deferredFloors?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-toggle-defer-floor="${s(D.id)}" data-defer-next="${be.deferred?"0":"1"}" ${a?"":'disabled title="当前角色为只读权限"'}>${be.deferred?"恢复纳入":"暂缓本期"}</button>`:""}
                                    ${H.length>0?`
                                        <button type="button" class="pacom-btn pacom-btn--sm" data-floor-ftt="${s(D.id)}">自检</button>
                                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-open-freeze-floor="${s(D.id)}" ${a?"":'disabled title="当前角色为只读权限"'}>${be.readyForFormalFreeze?"冻结":"留档"}</button>`:""}
                                  </div>
                                </td>
                              </tr>`}).join("")}
                </tbody>
              </table>
            </div>
            ${v.length===0?`<div class="pacom-table-footer" style="display:flex; justify-content:space-between; align-items:center;">
                     <span>本栋暂无设备；可对预留层标记「暂缓本期」或直接前往设备标记</span>
                     <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-toggle-empty-matrix="1">收起空楼层清单</button>
                   </div>`:""}
          </div>`}
    </section>

    <section class="pacom-section">
      <div class="pacom-section-head">
        <h2 class="pacom-section-title" style="display:inline-flex; align-items:center; gap:6px;">
          <span>整栋交付冻结与签收记录</span>
          ${wt("冻结、留档与签收说明","存在待补项时仅可保存「阶段留档」；满足全部 5 步门控并通过最新自检后可生成「已冻结」正式基线；正式基线可查看逐设备不可变快照并由接收方执行「签收交付（已交付）」。")}
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
              ${e.buildingDeliveries.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>本栋暂无交付冻结或阶段留档记录</strong><span>完成设备复核与自检后，点击右上角「交付冻结」生成基线快照。</span></div></td></tr>':e.buildingDeliveries.map(D=>{const H=t.floors.find(we=>we.id===D.floorId)?.name??D.floorId,fe=D.status==="draft"?"阶段留档":Ps[D.status]??D.status,be=D.status==="delivered"?"pacom-badge--online":D.status==="draft"?"pacom-badge--warning":"pacom-badge--accent";return`
                          <tr>
                            <td>
                              <div style="font-weight:450;">${s(D.versionTag)}</div>
                              <div class="pacom-row-sub"><code>${s(D.id)}</code></div>
                            </td>
                            <td>${s(H)}</td>
                            <td><strong>${D.verifiedCount}</strong> / ${D.deviceCount} 台</td>
                            <td>
                              <div>${s(D.frozenBy)}</div>
                              <div class="pacom-row-sub">${s(D.note??"—")}</div>
                            </td>
                            <td><span class="pacom-badge ${be}">${fe}</span></td>
                            <td>
                              <div style="display:flex; justify-content:flex-end; gap:6px; white-space:nowrap;">
                                <button type="button" class="pacom-btn pacom-btn--sm" data-open-snapshot="${s(D.id)}">查看快照</button>
                                ${D.status==="frozen"&&n.signOffDelivery?`<button type="button" class="pacom-btn pacom-btn--primary pacom-btn--sm" data-open-snapshot="${s(D.id)}" ${a?"":'disabled title="当前角色为只读权限"'}>签收交付</button>`:""}
                              </div>
                            </td>
                          </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `}function yt(e){return e?`<div class="dep-modal-error" role="alert">${s(e)}</div>`:""}function xn(e){const{tree:t,canEdit:a,caps:n}=e,o=[],l=t.projects.find(d=>d.id===e.activeProjectId)??t.projects[0]??null,p=t.buildings.find(d=>d.id===e.activeBuildingId)??(l?t.buildings.find(d=>d.projectId===l.id):null)??null;if(e.showNewProjectModal){const d=e.projFormDraft;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建项目">
        <form class="dep-modal-card" data-create-project="1">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">新建项目</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${yt(e.modalError)}
            <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:12px; background:var(--pacom-surface-primary); box-shadow:inset 0 0 0 var(--hw) var(--pacom-border-subtle);">
              <img src="${s(e.newProjCoverDataUrl??"./media/gzlab.jpg")}" alt="项目封面预览" style="width:76px; height:48px; object-fit:cover; border-radius:8px;" />
              <div style="flex:1; min-width:0;">
                <div style="font-size:14px; font-weight:450;">项目封面图（选填）</div>
                <div class="pacom-row-sub">支持 JPG / PNG / WebP，未上传将使用默认封面</div>
              </div>
              <label class="pacom-btn pacom-btn--sm" style="cursor:${!a||!n.spatial?"not-allowed":"pointer"}; opacity:${!a||!n.spatial?"0.45":"1"};">
                <span>${e.newProjCoverDataUrl?"更换":"上传"}</span>
                <input type="file" name="newProjCover" accept="image/*" data-stage-new-proj-cover="1" style="display:none;" ${!a||!n.spatial?"disabled":""} />
              </label>
            </div>
            <div class="dep-param-grid">
              <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" placeholder="如：广实3号园" value="${s(d?.name??"")}" required /></label>
              <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="${s(d?.city??"广州市")}" /></label>
              <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" placeholder="街道与门牌号" value="${s(d?.address??"")}" /></label>
              <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" placeholder="如：113.3824" value="${s(d?.lng??"")}" /></label>
              <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" placeholder="如：23.0652" value="${s(d?.lat??"")}" /></label>
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
      </div>`)}if(e.showEditProjectModal&&l){const d=e.projFormDraft,v=t.buildings.filter(x=>x.projectId===l.id).reduce((x,E)=>x+e.sortedBuildingFloors(E.id).reduce((F,g)=>F+(e.buildingDevicesByFloor.get(g.id)?.length??0),0),0);o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑项目">
        <form class="dep-modal-card" data-save-project="${s(l.id)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">编辑项目：${s(l.name)}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${yt(e.modalError)}
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
              <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" value="${s(d?.name??l.name)}" required ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="${s(d?.city??l.city??"")}" ${a?"":"disabled"} /></label>
              <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" value="${s(d?.address??l.address??"")}" ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" value="${s(d?d.lng:l.location?.lng??"")}" ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" value="${s(d?d.lat:l.location?.lat??"")}" ${a?"":"disabled"} /></label>
            </div>
          </div>
          <div class="dep-modal-foot">
            <button type="button" class="pacom-btn pacom-btn--danger" data-delete-proj="${s(l.id)}" ${!a||!n.spatial||v>0?`disabled title="${v>0?`包含 ${v} 台运行中设备，请先解绑后再删除`:"当前角色只读"}"`:""}>删除项目</button>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!n.spatial?"disabled":""}>保存更改</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.showNewBuildingModal&&l){const d=e.bldFormDraft;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建楼宇">
        <form class="dep-modal-card" data-create-bld="${s(l.id)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">新建楼宇（${s(l.name)}）</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${yt(e.modalError)}
            <div style="display:flex; align-items:center; gap:14px; padding:10px 12px; border-radius:12px; background:var(--pacom-surface-primary); box-shadow:inset 0 0 0 var(--hw) var(--pacom-border-subtle);">
              <img src="${s(e.newBldImageDataUrl??"./media/building-e.webp")}" alt="楼宇外观预览" style="width:68px; height:48px; object-fit:contain; border-radius:8px; background:#ffffff;" />
              <div style="flex:1; min-width:0;">
                <div style="font-size:14px; font-weight:450;">楼宇外观 / 白模图（选填）</div>
                <div class="pacom-row-sub">支持透明 PNG / WebP / JPG</div>
              </div>
              <label class="pacom-btn pacom-btn--sm" style="cursor:${!a||!n.spatial?"not-allowed":"pointer"}; opacity:${!a||!n.spatial?"0.45":"1"};">
                <span>${e.newBldImageDataUrl?"更换":"上传"}</span>
                <input type="file" name="newBldImg" accept="image/*" data-stage-new-bld-img="1" style="display:none;" ${!a||!n.spatial?"disabled":""} />
              </label>
            </div>
            <div class="dep-param-grid">
              <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" placeholder="如：G栋" value="${s(d?.name??"")}" required /></label>
              <label class="dep-field"><span class="dep-field-label">总建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" placeholder="选填" value="${s(d?.area??"")}" /></label>
              <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${s(d?.above??"12")}" /></label>
              <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${s(d?.below??"0")}" /></label>
              <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">标准层面积 (m²，选填)</span><input class="pacom-input" name="bStdFloorArea" type="number" step="0.1" placeholder="填写后自动回填至所有自动生成的楼层" value="${s(d?.stdFloorArea??"")}" /></label>
            </div>
            <div style="display:flex; align-items:center; gap:20px; flex-wrap:wrap; font-size:14px;">
              <label style="display:inline-flex; align-items:center; gap:8px; cursor:pointer;"><input type="checkbox" name="bRoof" ${d?d.hasRoof?"checked":"":"checked"} />含屋面层 (RF)</label>
              <label style="display:inline-flex; align-items:center; gap:8px; cursor:pointer;"><input type="checkbox" name="bAutoFloors" ${d?d.autoFloors?"checked":"":"checked"} />自动生成全部楼层并进入导图</label>
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
      </div>`)}const w=e.editingBuildingId?t.buildings.find(d=>d.id===e.editingBuildingId)??null:null;if(w){const d=e.sortedBuildingFloors(w.id),h=d.reduce((x,E)=>x+(e.buildingDevicesByFloor.get(E.id)?.length??0),0),v=Ba(w,d);o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑楼宇">
        <form class="dep-modal-card" data-save-building="${s(w.id)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">编辑楼宇：${s(w.name)}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${yt(e.modalError)}
            <div style="display:flex; align-items:center; gap:14px; padding:12px; border-radius:12px; background:var(--pacom-surface-primary); box-shadow:inset 0 0 0 var(--hw) var(--pacom-border-subtle);">
              <img src="${s(w.imageUrl??"./media/building-e.webp")}" alt="${s(w.name)}" style="width:72px; height:54px; object-fit:contain; border-radius:8px; background:#ffffff;" />
              <div style="flex:1; min-width:0;">
                <div style="font-size:14px; font-weight:450;">楼宇外观 / 白模图</div>
                <div class="pacom-row-sub">支持透明 PNG / WebP / JPG</div>
              </div>
              <label class="pacom-btn" style="cursor:${!a||!n.spatial?"not-allowed":"pointer"}; opacity:${!a||!n.spatial?"0.45":"1"};">
                <span>替换图片</span>
                <input type="file" name="bldImgUpload" accept="image/*" data-upload-bld="${s(w.id)}" style="display:none;" ${!a||!n.spatial?"disabled":""} />
              </label>
            </div>
            <div class="dep-param-grid">
              <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" value="${s(w.name)}" required ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">总建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" value="${s(w.areaSqm??"")}" placeholder="选填" ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">规划地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${w.aboveFloors}" ${a?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">规划地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${w.belowFloors}" ${a?"":"disabled"} /></label>
            </div>
            <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
              <label style="display:inline-flex; align-items:center; gap:8px; font-size:14px; cursor:pointer;"><input type="checkbox" name="bRoof" ${w.hasRoof?"checked":""} ${a?"":"disabled"} />含屋面层 (RF)</label>
              ${v.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${s(w.id)}" ${!a||!n.spatial?"disabled":""}>一键补齐缺失 ${v.length} 层</button>`:`<span class="pacom-row-sub">已建 ${d.length} 个楼层</span>`}
            </div>
          </div>
          <div class="dep-modal-foot">
            <button type="button" class="pacom-btn pacom-btn--danger" data-delete-building="${s(w.id)}" ${!a||!n.spatial||h>0?`disabled title="${h>0?"包含运行中设备，请先解绑后再删除":"当前角色只读"}"`:""}>删除楼宇</button>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!n.spatial?"disabled":""}>保存更改</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.showNewFloorModal&&p){const d=e.floorFormDraft;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增楼层">
        <form class="dep-modal-card dep-modal-card--sm" data-create-floor="${s(p.id)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">新增楼层（${s(p.name)}）</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${yt(e.modalError)}
            <div class="dep-param-grid">
              <label class="dep-field"><span class="dep-field-label">楼层名称</span><input class="pacom-input" name="fName" placeholder="如：23F / B1 / RF" value="${s(d?.name??"")}" required /></label>
              <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="fArea" type="number" step="0.1" placeholder="选填" value="${s(d?.area??"")}" /></label>
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
      </div>`)}if(e.showBatchModal&&p){const d=e.sortedBuildingFloors(p.id),h=new Map;e.pendingBatchUploads.forEach(g=>{g.matchedFloorId&&h.set(g.matchedFloorId,(h.get(g.matchedFloorId)??0)+1)});const v=new Set(Array.from(h.entries()).filter(([,g])=>g>1).map(([g])=>g)),x=h.size,E=v.size>0,F=Array.from(h.keys()).filter(g=>!!d.find(c=>c.id===g)?.plan).length;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="批量导入平面底图">
        <div class="dep-modal-card dep-modal-card--wide">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">批量导入 ${s(p.name)} 平面底图</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${yt(e.modalError)}
            <div class="dep-upload-drop" data-batch-dropzone="${s(p.id)}" style="padding:22px; flex-direction:column; align-items:center; text-align:center; gap:8px; ${e.batchDropActive?"border-color:var(--pacom-accent-solid); background:var(--pacom-accent-soft);":""}">
              <strong style="font-size:14px; font-weight:450;">拖拽多张平面图到此区域，或点击选择文件</strong>
              <span class="pacom-row-sub">自动识别 01F、02F平面、首层、屋面、RF、地下室B1 等中英文文件名，支持手动调整目标楼层</span>
              <label class="pacom-btn" style="cursor:${!a||!n.spatial?"not-allowed":"pointer"}; margin-top:4px; opacity:${!a||!n.spatial?"0.45":"1"};">
                <span>选择多张图片</span>
                <input type="file" name="batchFloorPlans" accept="image/*" multiple data-batch-upload-floors="${s(p.id)}" style="display:none;" ${!a||!n.spatial?"disabled":""} />
              </label>
            </div>
            ${E?`<div class="pacom-banner pacom-banner--critical" style="padding:10px 14px;">
                     <div class="pacom-banner-text">
                       <span class="pacom-banner-title">检测到 ${v.size} 个目标楼层被多张文件重复匹配</span>
                       <span class="pacom-banner-sub">每个楼层仅允许导入 1 张底图，请将重复项改为「未分配」或指定其他楼层后再导入。</span>
                     </div>
                   </div>`:F>0?`<div class="pacom-banner" style="padding:10px 14px;">
                       <div class="pacom-banner-text">
                         <span class="pacom-banner-title">其中 ${F} 个目标楼层已有底图，导入后将升级底图版本</span>
                         <span class="pacom-banner-sub">已关联设备的楼层将保留硬件绑定并标记「换图待核对」。</span>
                       </div>
                     </div>`:""}
            ${e.pendingBatchUploads.length>0?`<div style="display:flex; flex-direction:column; gap:8px;">
                    <div class="pacom-row-sub">已选 ${e.pendingBatchUploads.length} 张图片，匹配 ${x} 个唯一楼层：</div>
                    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(300px, 1fr)); gap:8px; max-height:240px; overflow-y:auto;">
                      ${e.pendingBatchUploads.map(g=>{const c=!!(g.matchedFloorId&&v.has(g.matchedFloorId)),S=g.matchedFloorId?!!d.find(O=>O.id===g.matchedFloorId)?.plan:!1;return`
                          <div class="pacom-receipt-item" style="padding:8px 10px; gap:8px; ${c?"box-shadow:inset 0 0 0 1px var(--pacom-status-critical);":""}">
                            <div style="min-width:0; flex:1;">
                              <div style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:14px;" title="${s(g.file.name)}">${s(g.file.name)}</div>
                              ${c?'<span class="pacom-row-sub" style="color:var(--pacom-status-critical);">目标层重复，请改选或设为未分配</span>':S?'<span class="pacom-row-sub">将覆盖已有底图</span>':""}
                            </div>
                            <select class="pacom-select" name="overrideFloor_${s(g.id)}" style="width:104px; flex:none;" data-batch-override-floor="${s(g.id)}" aria-label="指定目标楼层">
                              <option value="">未分配</option>
                              ${d.map(O=>`<option value="${s(O.id)}" ${g.matchedFloorId===O.id?"selected":""}>${s(O.name)}</option>`).join("")}
                            </select>
                          </div>`}).join("")}
                    </div>
                  </div>`:""}
          </div>
          <div class="dep-modal-foot">
            <button type="button" class="pacom-btn pacom-btn--ghost" data-cancel-batch-upload="1" ${e.pendingBatchUploads.length===0?"disabled":""}>清空已选</button>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="button" class="pacom-btn pacom-btn--primary" data-confirm-batch-upload="1" ${x===0||E||!a||!n.spatial?"disabled":""}>确认导入（${x} 层）</button>
            </div>
          </div>
        </div>
      </div>`)}if(e.copyZoneSourceFloorId&&p){const d=t.floors.find(v=>v.id===e.copyZoneSourceFloorId),h=e.sortedBuildingFloors(p.id).filter(v=>v.id!==e.copyZoneSourceFloorId);d&&h.length>0&&o.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="复用功能区至其他楼层">
          <div class="dep-modal-card">
            <div class="dep-modal-head">
              <h3 class="dep-modal-title">复用 ${s(d.name)} 功能区至其他楼层</h3>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              ${yt(e.modalError)}
              <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                <span class="pacom-row-sub">勾选目标楼层（已选 ${e.copyTargetFloorIds.size} 层）</span>
                <div style="display:flex; gap:6px;">
                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="empty">空白地上层</button>
                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="above">全部地上层</button>
                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="clear">清空</button>
                </div>
              </div>
              <div style="display:flex; flex-wrap:wrap; gap:8px;">
                ${h.map(v=>{const x=e.copyTargetFloorIds.has(v.id),E=t.zones.filter(F=>F.floorId===v.id).length;return`
                      <label class="pacom-btn pacom-btn--sm" style="cursor:pointer; ${x?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}">
                        <input type="checkbox" name="copyFloor_${s(v.id)}" data-copy-target-floor="${s(v.id)}" ${x?"checked":""} style="margin:0;" />
                        <span>${s(v.name)}${E>0?` (${E}区)`:""}</span>
                      </label>`}).join("")}
              </div>
            </div>
            <div class="dep-modal-foot">
              <span></span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
                <button type="button" class="pacom-btn pacom-btn--primary" data-confirm-copy-zones="${s(d.id)}" ${e.copyTargetFloorIds.size===0||!a||!n.spatial?"disabled":""}>确认复制（${e.copyTargetFloorIds.size} 层）</button>
              </div>
            </div>
          </div>
        </div>`)}if(e.showNewDevModal){const d=t.zones.filter(h=>h.floorId===e.activeFloorId);o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增设备">
        <form class="dep-modal-card" data-create-dev="1">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">新增设备</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${yt(e.modalError)}
            <label class="dep-field">
              <span class="dep-field-label">设备名称</span>
              <input class="pacom-input" name="devName" placeholder="如：703 会议室三控面板" required />
            </label>
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">设备类型</span>
                <select class="pacom-select" name="devPreset">${Ya.map(h=>`<option value="${h.key}">${h.label}</option>`).join("")}</select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">所属功能区</span>
                <select class="pacom-select" name="devZone">
                  <option value="">暂不分配</option>
                  ${d.map(h=>`<option value="${s(h.id)}">${s(h.name)}</option>`).join("")}
                </select>
              </label>
            </div>
            <span class="pacom-row-sub">新增设备初始为「待入网 ｜ 未标记」状态，创建后将引导点图落点并完成硬件绑定。</span>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!n.createDevice?"disabled":""}>确认新增</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.groupModal){const d=e.groupModal.mode==="edit"&&e.groupModal.groupId?e.groups.find(O=>O.id===e.groupModal.groupId)??null:null,h=e.groupModal.track,v=Qa[h],x=v.includes(e.groupModal.draftType)?e.groupModal.draftType:v[0],E=new Set(e.groupModal.draftMemberIds),F=h==="mesh_auto"?e.floorDevices.filter(O=>O.category==="gateway"):[],g=new Set(F.map(O=>O.id));h==="mesh_auto"&&g.forEach(O=>E.add(O));const c=h==="mesh_auto"?e.floorDevices.filter(O=>Vt(O)&&O.category!=="gateway"):e.floorDevices,S=h==="mesh_auto"&&x.includes("灯")&&!c.some(O=>O.category==="lighting"&&E.has(O.id));o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="${d?"编辑设备分组":"新建设备分组"}">
        <form class="dep-modal-card" data-save-group="${s(d?.id??"")}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">${d?"编辑设备分组":"新建设备分组"}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${yt(e.modalError)}
            <label class="dep-field">
              <span class="dep-field-label">分组名称</span>
              <input class="pacom-input" name="gName" data-group-draft-name="1" placeholder="如：7F 西侧办公区联动组" value="${s(e.groupModal.draftName)}" required />
            </label>
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">运行模式</span>
                <select class="pacom-select" name="gTrack" data-group-modal-track="1">
                  <option value="mesh_auto" ${h==="mesh_auto"?"selected":""}>端侧 Mesh 自治组</option>
                  <option value="cloud_biz" ${h==="cloud_biz"?"selected":""}>云端业务分组</option>
                </select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">分组类别</span>
                <select class="pacom-select" name="gType" data-group-draft-type="1">
                  ${v.map(O=>`<option value="${O}" ${x===O?"selected":""}>${O}</option>`).join("")}
                </select>
              </label>
            </div>
            ${h==="mesh_auto"?`<div class="pacom-receipt-item" style="padding:8px 12px;">
                     <span style="font-size:13px;">
                       <strong>基础设施网关</strong>
                       <span class="pacom-row-sub"> ｜ ${F.length>0?s(F.map(O=>O.name).join("、")):"本层暂未登记边缘网关"}</span>
                     </span>
                     <span class="pacom-badge pacom-badge--accent">自动同步</span>
                     ${F.map(O=>`<input type="hidden" name="gMemberIds" value="${s(O.id)}" />`).join("")}
                   </div>`:""}
            ${S?`<div class="pacom-banner" style="padding:9px 12px;">
                     <div class="pacom-banner-text">
                       <span class="pacom-banner-title" style="font-size:13px;">当前未勾选照明执行设备（驱动器 / 开关面板）</span>
                       <span class="pacom-banner-sub">灯光联动组需至少包含 1 台照明执行端才可完成端侧试控，缺少执行端将仅作为草稿保存。</span>
                     </div>
                   </div>`:""}
            <div class="dep-field">
              <span class="dep-field-label">
                <span>选择末端成员（可选 ${c.length} 台）</span>
                ${wt("分组成员规则","端侧蓝牙 Mesh 自治组会自动将边缘网关纳入同步基础设施，此处只需勾选末端传感与执行设备；云端业务分组可自由混选本层所有设备。")}
              </span>
              <div class="dep-check-list">
                ${c.length===0?'<div class="pacom-row-sub" style="padding:12px; text-align:center;">本层暂无可选末端设备，请先在「设备标记」或「设备列表」中新增设备。</div>':c.map(O=>{const V=E.has(O.id);return`
                            <label class="dep-check-item">
                              <span style="display:inline-flex; align-items:center; gap:8px; min-width:0;">
                                <input type="checkbox" name="gMemberIds" data-group-draft-member="1" value="${s(O.id)}" ${V?"checked":""} />
                                <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${s(O.name)}</span>
                              </span>
                              <span class="pacom-badge pacom-badge--neutral">${ha[O.category]}</span>
                            </label>`}).join("")}
              </div>
            </div>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!n.deviceGroups?"disabled":""}>${d?"保存分组":"创建分组"}</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.connModal){const d=e.connModal.mode==="edit"&&e.connModal.connectionId?e.connections.find(S=>S.id===e.connModal.connectionId)??null:null,h=e.connFormDraft,v=l?t.buildings.filter(S=>S.projectId===l.id):[],x=e.connModal.fromProjectLevel!==!1,E=h?h.buildingId:d?d.buildingId:x?"":e.activeBuildingId??"",F=E?e.sortedBuildingFloors(E):[],g=h?h.floorId:d?d.floorId:x?"":e.activeFloorId??"",c=h?.protocol??d?.protocol??"bacnet_ip";o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="${d?"编辑接入通道":"新增接入通道"}">
        <form class="dep-modal-card" data-save-conn="${s(d?.id??"")}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">${d?"编辑接入通道":"新增子系统接入通道"}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${yt(e.modalError)}
            <label class="dep-field">
              <span class="dep-field-label">通道名称</span>
              <input class="pacom-input" name="cName" placeholder="如：E栋 8F 中央空调网关" value="${s(h?.name??d?.name??"")}" required />
            </label>
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">服务楼宇</span>
                <select class="pacom-select" name="cBuilding" data-conn-bld-select="1">
                  <option value="">全项目通用</option>
                  ${v.map(S=>`<option value="${s(S.id)}" ${E===S.id?"selected":""}>${s(S.name)}</option>`).join("")}
                </select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">服务楼层</span>
                <select class="pacom-select" name="cFloor">
                  <option value="">整栋 / 不限楼层</option>
                  ${F.map(S=>`<option value="${s(S.id)}" ${g===S.id?"selected":""}>${s(S.name)}</option>`).join("")}
                </select>
              </label>
            </div>
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">协议类型</span>
                <select class="pacom-select" name="cProto">
                  ${[["bacnet_ip","空调 / BACnet IP"],["modbus_tcp","电表 / Modbus TCP"],["modbus_rtu","RS485 / Modbus RTU"],["dali","照明 / DALI-2"],["mqtt","空气质量 / MQTT"],["knx","楼宇总线 / KNX"]].map(([S,O])=>`<option value="${S}" ${c===S?"selected":""}>${O}</option>`).join("")}
                </select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">网关端点</span>
                <input class="pacom-input" name="cEndpoint" placeholder="如：10.7.8.20:47808" value="${s(h?.endpoint??d?.endpoint??"")}" required />
              </label>
            </div>
            <span class="pacom-row-sub">提交时将自动检测同项目局域网端点冲突并按已绑定同协议设备统计采集点位。</span>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!a||!n.manageConnections?"disabled":""}>${d?"保存通道":"校验并接入"}</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.showFreezeModal){const d=p?e.sortedBuildingFloors(p.id):[],h=d.some(g=>g.id===e.freezeTargetFloorId)?e.freezeTargetFloorId:d.find(g=>(e.buildingDevicesByFloor.get(g.id)?.length??0)>0)?.id??d[0]?.id??e.activeFloorId,v=t.floors.find(g=>g.id===h),x=h?ya(e,h):null,E=!x||x.deviceCount===0,F=!!x?.readyForFormalFreeze;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="交付冻结与阶段留档">
        <form class="dep-modal-card" data-confirm-freeze="${s(h)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">
              <span>${F?"正式交付冻结":"交付冻结与阶段留档"}</span>
              ${wt("正式冻结与阶段留档区别","仅当底图、点位标记、绑定复核、在线入网、边缘同步及最新全层自检（FTT）全部通过时，才允许生成「正式冻结」基线；参数或配置变更后必须重新同步并重测；存在待补项时仅支持保存「阶段留档（草稿）」。")}
            </h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${yt(e.modalError)}
            <label class="dep-field">
              <span class="dep-field-label">目标楼层（${s(p?.name??"当前楼宇")}）</span>
              <select class="pacom-select" name="freezeFloorId" data-freeze-floor-select="1">
                ${d.map(g=>{const c=e.buildingDevicesByFloor.get(g.id)?.length??0,S=ya(e,g.id),O=S.deferred?"本期不纳入":c===0?"无设备":S.readyForFormalFreeze?`${c} 台 ｜ 可正式冻结`:`${c} 台 ｜ 待补项`;return`<option value="${s(g.id)}" ${g.id===h?"selected":""}>${s(g.name)}（${O}）</option>`}).join("")}
              </select>
            </label>
            ${E?`<div class="pacom-banner pacom-banner--critical" style="padding:12px 14px;">
                     <div class="pacom-banner-text">
                       <span class="pacom-banner-title">本层尚无已登记设备（0 / 0）</span>
                       <span class="pacom-banner-sub">禁止为空楼层生成阶段留档或正式冻结快照，请先在「设备标记」添加并配置设备。</span>
                     </div>
                   </div>`:F?`<div class="pacom-banner pacom-banner--ok" style="padding:12px 14px;">
                       <div class="pacom-banner-text">
                         <span class="pacom-banner-title">${s(v?.name??"")} 已满足全部正式交付冻结门槛</span>
                         <span class="pacom-banner-sub">${x.deviceCount} 台设备均已完成底图标记、硬件绑定与物理复核、在线入网、最新边缘同步及全层自检。</span>
                       </div>
                     </div>`:`<div class="pacom-banner pacom-banner--critical" style="padding:12px 14px;">
                       <div class="pacom-banner-text">
                         <span class="pacom-banner-title">尚未满足正式冻结门槛（不可正式冻结）</span>
                         <span class="pacom-banner-sub">阻止项：${s(x.blockers.join(" ｜ "))}。可先保存为「阶段留档」记录当前施工进度。</span>
                       </div>
                     </div>`}
            <label class="dep-field">
              <span class="dep-field-label">基线 / 留档备注</span>
              <input class="pacom-input" name="freezeNote" placeholder="如：首期调试验收基线冻结" value="${F?"全层自检通过，正式交付冻结":"阶段性施工留档（待补齐剩余门控项后正式冻结）"}" ${E?"disabled":""} />
            </label>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              ${!E&&!F&&n.stageSnapshot?`<button type="button" class="pacom-btn pacom-btn--primary" data-submit-stage-snapshot="${s(h)}" ${a?"":"disabled"}>保存阶段留档</button>`:""}
              <button type="submit" class="pacom-btn ${F?"pacom-btn--primary":""}" ${!a||!F?'disabled title="需满足全部交付门控与最新自检后才可正式冻结"':""}>正式交付冻结</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.snapshotDetailModal){const{batch:d,meta:h}=e.snapshotDetailModal,v=d.status==="draft"?"阶段留档":Ps[d.status]??d.status,x=d.status==="delivered"?"pacom-badge--online":d.status==="draft"?"pacom-badge--warning":"pacom-badge--accent";o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="交付基线快照与签收">
        <div class="dep-modal-card dep-modal-card--wide">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">
              <span>${s(d.versionTag)}</span>
              <span class="pacom-badge ${x}">${v}</span>
            </h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            ${yt(e.modalError)}
            <div class="dep-snapshot-grid">
              <div class="dep-snapshot-kv"><span>所属楼层</span><strong>${s(h.floorName)}</strong></div>
              <div class="dep-snapshot-kv"><span>底图版本</span><strong>${h.planVersion>0?`v${h.planVersion}`:"无底图"}</strong></div>
              <div class="dep-snapshot-kv"><span>边缘基线</span><strong>v${h.edgeSyncVersion}</strong></div>
              <div class="dep-snapshot-kv"><span>核验设备</span><strong>${d.verifiedCount} / ${d.deviceCount} 台</strong></div>
            </div>
            <div class="pacom-row-sub">
              冻结人：${s(d.frozenBy)} ｜ 时间：${s(d.frozenAt.replace("T"," ").slice(0,19))}${h.fttPassedAt?` ｜ 自检凭证：${s(h.fttPassedAt.replace("T"," ").slice(0,19))}`:""}
            </div>
            <div class="pacom-table-card" style="max-height:220px; overflow-y:auto;">
              <div class="pacom-table-wrap">
                <table class="pacom-table">
                  <thead>
                    <tr>
                      <th>设备名称</th>
                      <th>功能区</th>
                      <th>硬件绑定</th>
                      <th>物理复核</th>
                      <th>连通态</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${h.devices.length===0?'<tr><td colspan="5" style="text-align:center; padding:16px;" class="pacom-row-sub">无设备快照明细</td></tr>':h.devices.map(E=>{const F=$a(E.connectivity,E.bound);return`
                                <tr>
                                  <td><strong>${s(E.name)}</strong></td>
                                  <td><span class="pacom-row-sub">${s(E.zoneLabel)}</span></td>
                                  <td><span class="pacom-row-sub">${E.bound?`${s((E.protocol??"").toUpperCase())} ${s(E.address??"")}`:"未绑定"}</span></td>
                                  <td><span class="pacom-badge ${E.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${E.physicalInstalled?"已复核":"待复核"}</span></td>
                                  <td><span class="pacom-badge ${F.cls}">${F.label}</span></td>
                                </tr>`}).join("")}
                  </tbody>
                </table>
              </div>
            </div>
            ${d.status==="delivered"?`<div class="pacom-banner pacom-banner--ok" style="padding:12px 14px;">
                     <div class="pacom-banner-text">
                       <span class="pacom-banner-title">已完成正式签收交付（签收人：${s(h.signedOffBy??d.frozenBy)}）</span>
                       <span class="pacom-banner-sub">${h.signedOffAt?`签收时间：${s(h.signedOffAt.replace("T"," ").slice(0,19))} ｜ `:""}${s(h.signOffNote??"验收通过，正式移交运维")}</span>
                     </div>
                   </div>`:d.status==="frozen"&&n.signOffDelivery?`<form data-sign-off-delivery="${s(d.id)}" style="display:flex; flex-direction:column; gap:10px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-primary); box-shadow:inset 0 0 0 var(--hw) var(--pacom-border-subtle);">
                       <strong style="font-size:14px; font-weight:500;">接收方签收确认（冻结基线 → 正式交付）</strong>
                       <div class="dep-param-grid">
                         <label class="dep-field">
                           <span class="dep-field-label">接收方签收人</span>
                           <input class="pacom-input" name="signRecipient" placeholder="如：王主任（园区运维负责人）" value="${s(e.session.displayName)}" required ${a?"":"disabled"} />
                         </label>
                         <label class="dep-field">
                           <span class="dep-field-label">签收意见</span>
                           <input class="pacom-input" name="signNote" placeholder="如：现场抽检与图纸核对一致，同意移交" value="现场核对与功能自检一致，同意正式签收移交" ${a?"":"disabled"} />
                         </label>
                       </div>
                       <div style="display:flex; justify-content:flex-end;">
                         <button type="submit" class="pacom-btn pacom-btn--primary" ${a?"":'disabled title="当前角色为只读权限"'}>确认签收交付</button>
                       </div>
                     </form>`:'<span class="pacom-row-sub">阶段留档仅用于施工过程记录；需先满足全部门控并正式冻结后才可签收交付。</span>'}
          </div>
          <div class="dep-modal-foot">
            <button type="button" class="pacom-btn" data-export-snapshot="${s(d.id)}">导出单批快照 CSV</button>
            <button type="button" class="pacom-btn" data-close-modals="1">关闭</button>
          </div>
        </div>
      </div>`)}if(e.planSwapReviewFloorId){const d=t.floors.find(F=>F.id===e.planSwapReviewFloorId),h=e.planChangeAlerts[e.planSwapReviewFloorId],x=(e.buildingDevicesByFloor.get(e.planSwapReviewFloorId)??e.floorDevices).filter(F=>!!F.planPoint),E=e.lightMarkers.filter(F=>F.floorId===e.planSwapReviewFloorId);d&&h&&o.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="换图影响核对清单">
          <div class="dep-modal-card">
            <div class="dep-modal-head">
              <h3 class="dep-modal-title">换图影响核对（${s(d.name)} ｜ v${h.previousVersion} → v${h.currentVersion}）</h3>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div class="pacom-banner" style="padding:10px 12px;">
                <div class="pacom-banner-text">
                  <span class="pacom-banner-title">已保留全部硬件绑定与物理安装复核，需核对图纸落点是否偏移</span>
                  <span class="pacom-banner-sub">如有位移可直接在画布上拖拽设备点位微调；确认无误后仍须重新执行全层自检（FTT）方可冻结新版本。</span>
                </div>
              </div>
              <div class="pacom-row-sub">受影响已标记设备 ${x.length} 台 ｜ 关联回路灯点 ${E.length} 个</div>
              <div class="dep-check-list" style="max-height:200px;">
                ${x.length===0?'<div class="pacom-row-sub" style="padding:12px; text-align:center;">本层暂无已标记坐标的设备。</div>':x.map(F=>`
                          <div class="dep-check-item">
                            <span><strong>${s(F.name)}</strong></span>
                            <span class="pacom-row-sub">${Math.round(F.planPoint.x*100)}%, ${Math.round(F.planPoint.y*100)}%</span>
                          </div>`).join("")}
              </div>
            </div>
            <div class="dep-modal-foot">
              <button type="button" class="pacom-btn" data-close-modals="1">返回画布拖拽微调</button>
              <button type="button" class="pacom-btn pacom-btn--primary" data-clear-plan-alert="${s(d.id)}" ${a?"":'disabled title="当前角色为只读权限"'}>确认点位核对无误</button>
            </div>
          </div>
        </div>`)}if(e.confirmDialog){const d=e.confirmDialog;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="${s(d.title)}">
        <div class="dep-modal-card dep-modal-card--sm">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">${s(d.title)}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            <p style="margin:0; font-size:14px; line-height:22px; color:var(--pacom-text-body);">${s(d.body)}</p>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="button" class="pacom-btn ${d.danger?"pacom-btn--danger":"pacom-btn--primary"}" data-confirm-dialog-ok="1">${s(d.confirmLabel)}</button>
            </div>
          </div>
        </div>
      </div>`)}return e.lightboxPlan&&o.push(`
      <div class="dep-lightbox-scrim" data-lightbox-scrim="1" role="dialog" aria-modal="true" aria-label="${s(e.lightboxPlan.title)}">
        <div class="dep-lightbox-card">
          <div class="dep-lightbox-head">
            <strong style="font-size:16px; font-weight:500;">${s(e.lightboxPlan.title)}</strong>
            <button type="button" class="pacom-drawer-close" data-close-lightbox="1" aria-label="关闭预览">${re("x",16)}</button>
          </div>
          <div class="dep-lightbox-body">
            <img src="${s(e.lightboxPlan.imageUrl)}" alt="${s(e.lightboxPlan.title)}" />
          </div>
        </div>
      </div>`),o.join("")}function In(){let e=null,t=null;function a(){e&&(e.setAttribute("aria-expanded","false"),e=null),t&&(t.remove(),t=null)}function n(d,h){const v=d.getBoundingClientRect(),x=h.getBoundingClientRect(),E=16,F=8;let g=v.left+v.width/2-x.width/2;g=Math.max(E,Math.min(window.innerWidth-x.width-E,g));let c=v.bottom+F;c+x.height+E>window.innerHeight&&(c=v.top-x.height-F),c=Math.max(E,Math.min(window.innerHeight-x.height-E,c)),h.style.left=`${Math.round(g)}px`,h.style.top=`${Math.round(c)}px`}function o(d){const h=d.dataset.depInfo?.trim();if(!h)return;if(e===d){a();return}a(),e=d,d.setAttribute("aria-expanded","true");const v=document.createElement("div");v.className="pacom-info-popover",v.setAttribute("role","tooltip"),v.textContent=h,document.body.appendChild(v),t=v,n(d,v)}const l=d=>{const h=d.target;t&&(t.contains(h)||e?.contains(h))||a()},p=d=>{d.key==="Escape"&&t&&a()},w=()=>{e&&t&&(document.body.contains(e)?n(e,t):a())};return document.addEventListener("click",l),document.addEventListener("keydown",p),window.addEventListener("resize",w),window.addEventListener("scroll",w,!0),{bind(d){e&&!document.body.contains(e)&&a(),d.querySelectorAll("[data-dep-info]").forEach(h=>{h.addEventListener("click",v=>{v.preventDefault(),v.stopPropagation(),o(h)})})},close:a,destroy(){a(),document.removeEventListener("click",l),document.removeEventListener("keydown",p),window.removeEventListener("resize",w),window.removeEventListener("scroll",w,!0)}}}function va(e,t,a){return e?t?"":`disabled title="${s(a)}"`:'disabled title="当前角色为只读权限"'}function Vs(e,t=!1){if(!e.drawerOpen||e.activeNav!=="device_marking"&&e.activeNav!=="device_list")return"";const a=e.floorDevices.find(S=>S.id===e.selectedId)??null;if(!a)return"";const{canEdit:n,caps:o}=e,l=e.meshRoles[a.id]??{proxy:!1,relay:!1,meshUuid:Ns(e.activeFloorId)},p=e.lightMarkers.filter(S=>S.deviceId===a.id),w=e.deviceParams.get(a.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450,coolMinC:22,heatMaxC:26,unoccupiedDelayMin:20,minCycleMin:5,heartbeatSec:30,offlineHoldMin:120,cacheFlushSec:60,pollSec:15,ctRatio:1,demandWindowMin:15},d=$a(a.connectivity,!!a.hardwareBinding),h=va(n,o.lightMarkers,"待后端回路灯点接口对接"),v=va(n,o.meshRoles,"待后端蓝牙 Mesh 接口对接"),x=va(n,o.deviceParams,"待后端自治参数下发接口对接"),E=va(n,o.manageDevice,"待后端设备管理接口对接"),F=e.tree.zones.filter(S=>S.floorId===e.activeFloorId),g=e.floorDevices.filter(S=>S.category==="gateway"),c=e.bindingDraft&&e.bindingDraft.deviceId===a.id?e.bindingDraft:{deviceId:a.id,gatewayId:a.hardwareBinding?.gatewayId??(a.category==="gateway"?a.id:g[0]?.id??""),protocol:a.hardwareBinding?.protocol??Ja[0],networkAddress:a.hardwareBinding?.networkAddress??"",portOrChannel:a.hardwareBinding?.portOrChannel??"",physicalInstalled:a.physicalInstalled};return`
    <aside class="dep-docked-drawer ${t?"dep-docked-drawer--sticky":""}" aria-label="设备配置抽屉">
      <div class="pacom-drawer-head">
        <div style="min-width:0; flex:1;">
          <h3 class="pacom-drawer-title">${s(a.name)}</h3>
          <div class="pacom-row-sub" style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; margin-top:2px;">
            <span>${s(e.getZoneLabel(a.logicalZoneId))} ｜ ${s(ha[a.category])} ｜ v${a.version}</span>
            <span class="pacom-badge ${d.cls}">${d.label}</span>
          </div>
        </div>
        <div style="display:inline-flex; align-items:center; gap:4px; flex-shrink:0;">
          <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-toggle-edit-dev-meta="1" ${E}>${e.editingDeviceMeta?"收起":"编辑"}</button>
          <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${re("x",16)}</button>
        </div>
      </div>

      ${e.editingDeviceMeta?`
          <form data-save-dev-meta="${s(a.id)}" class="dep-drawer-section" style="padding:10px 12px; border-radius:10px; background:var(--pacom-surface-primary); box-shadow:inset 0 0 0 var(--hw) var(--pacom-border-subtle);">
            <label class="dep-field">
              <span class="dep-field-label">设备名称</span>
              <input class="pacom-input" name="editDevName" value="${s(a.name)}" required ${E} />
            </label>
            <label class="dep-field">
              <span class="dep-field-label">所属功能区</span>
              <select class="pacom-select" name="editDevZone" ${E}>
                <option value="">暂不分配</option>
                ${F.map(S=>`<option value="${s(S.id)}" ${a.logicalZoneId===S.id?"selected":""}>${s(S.name)}</option>`).join("")}
              </select>
            </label>
            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
              <button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-del-dev="${s(a.id)}" ${E}>删除设备</button>
              <div style="display:inline-flex; gap:6px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-edit-dev-meta="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${E}>保存</button>
              </div>
            </div>
          </form>`:""}

      <div style="display:flex; gap:6px; flex-wrap:wrap;">
        <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-place="1" ${n?"":'disabled title="当前角色为只读权限"'}>${e.placingMode?"点击图纸落点中…":a.planPoint?"点图更新坐标":"点图标记坐标"}</button>
        <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${s(a.id)}">Ping 闪灯</button>
        <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-test="1">单机自检</button>
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
                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${s(a.id)}" ${h}>+ 添加灯点</button>
                </div>
                ${p.length===0?'<span class="pacom-row-sub">可切至画布「回路灯点」直接点图落点，或点右上角添加</span>':p.map(S=>`
                          <div class="pacom-receipt-item" style="padding:8px 10px;">
                            <span style="font-size:14px;"><strong>${s(S.channel)}</strong> ｜ ${s(S.label)}</span>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-del-light-marker="${s(S.id)}" ${h}>删除</button>
                          </div>`).join("")}
              </div>`:""}

          ${Vt(a)?`
              <div class="dep-drawer-section">
                <div class="dep-drawer-section-head">
                  <span class="dep-drawer-section-title">
                    <span>蓝牙 Mesh 节点角色</span>
                    ${wt("蓝牙 Mesh 角色说明","Proxy 代理建议每层启用 2–3 个供现场移动端接入；Relay 中继建议控制在总节点 10% 以内，面板默认关闭以避免广播风暴。")}
                  </span>
                  <code style="font-size:12px; color:var(--pacom-text-secondary);">${s(l.meshUuid)}</code>
                </div>
                <div class="dep-drawer-switch-row">
                  <span>Proxy 代理</span>
                  <button type="button" class="pacom-switch" role="switch" aria-checked="${l.proxy}" aria-label="切换 Proxy 代理" data-toggle-mesh-role="proxy" data-mesh-dev="${s(a.id)}" ${v}><span class="pacom-switch-thumb"></span></button>
                </div>
                <div class="dep-drawer-switch-row">
                  <span>Relay 中继</span>
                  <button type="button" class="pacom-switch" role="switch" aria-checked="${l.relay}" aria-label="切换 Relay 中继" data-toggle-mesh-role="relay" data-mesh-dev="${s(a.id)}" ${v}><span class="pacom-switch-thumb"></span></button>
                </div>
              </div>`:""}

          <form data-role="binding-form" class="dep-drawer-section">
            <span class="dep-drawer-section-title">硬件绑定与物理安装复核</span>
            ${a.category!=="gateway"?`
                <label class="dep-field">
                  <span class="dep-field-label">所属上游网关</span>
                  <select class="pacom-select" name="gatewayId" data-binding-field="gatewayId" ${n?"":"disabled"}>
                    ${g.length===0?'<option value="">本层暂未登记网关（请先添加边缘网关）</option>':`<option value="">请选择上游网关</option>${g.map(S=>`<option value="${s(S.id)}" ${c.gatewayId===S.id?"selected":""}>${s(S.name)}${S.connectivity==="offline"?"（离线）":""}</option>`).join("")}`}
                  </select>
                </label>`:`<input type="hidden" name="gatewayId" value="${s(a.id)}" />`}
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">通信协议</span>
                <select class="pacom-select" name="protocol" data-binding-field="protocol" ${n?"":"disabled"}>
                  ${Ja.map(S=>`<option value="${S}" ${c.protocol===S?"selected":""}>${S.toUpperCase()}</option>`).join("")}
                </select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">网络地址 / 主题</span>
                <input class="pacom-input" name="networkAddress" data-binding-field="networkAddress" placeholder="地址或主题" value="${s(c.networkAddress)}" ${n?"":"disabled"} />
              </label>
            </div>
            <label class="dep-field">
              <span class="dep-field-label">端口 / 回路</span>
              <input class="pacom-input" name="portOrChannel" data-binding-field="portOrChannel" placeholder="端口或回路" value="${s(c.portOrChannel)}" ${n?"":"disabled"} />
            </label>
            <div class="dep-drawer-switch-row">
              <span>现场物理安装已复核</span>
              <button type="button" class="pacom-switch" role="switch" aria-checked="${c.physicalInstalled}" aria-label="切换现场物理安装复核状态" data-toggle-phys="1" ${n?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
            </div>
            <button class="pacom-btn pacom-btn--primary" type="submit" ${n?"":'disabled title="当前角色为只读权限"'}>保存绑定与复核（v${a.version}）</button>
          </form>`:`
          <form data-save-dev-params="${s(a.id)}" data-dev-cat="${s(a.category)}" class="dep-drawer-section">
            ${a.category==="hvac"?`
                <div>
                  <div class="dep-drawer-section-title">暖通温控与保护参数</div>
                  <div class="pacom-row-sub">设定温度安全边界与无人节能回退，保存后需重同步并复检</div>
                </div>
                <div class="dep-param-grid">
                  <label class="dep-field"><span class="dep-field-label">制冷下限 (°C)</span><input class="pacom-input" name="coolMinC" type="number" step="0.5" min="16" max="30" value="${w.coolMinC??22}" ${x} /></label>
                  <label class="dep-field"><span class="dep-field-label">制热上限 (°C)</span><input class="pacom-input" name="heatMaxC" type="number" step="0.5" min="16" max="32" value="${w.heatMaxC??26}" ${x} /></label>
                  <label class="dep-field"><span class="dep-field-label">无人节能延时 (分)</span><input class="pacom-input" name="unoccupiedDelayMin" type="number" min="1" max="240" value="${w.unoccupiedDelayMin??20}" ${x} /></label>
                  <label class="dep-field"><span class="dep-field-label">防频繁启停 (分)</span><input class="pacom-input" name="minCycleMin" type="number" min="1" max="30" value="${w.minCycleMin??5}" ${x} /></label>
                </div>`:a.category==="gateway"?`
                  <div>
                    <div class="dep-drawer-section-title">网关离线自治与心跳策略</div>
                    <div class="pacom-row-sub">断网时维持本地联动与边缘缓存上报，保存后需重同步并复检</div>
                  </div>
                  <div class="dep-param-grid">
                    <label class="dep-field"><span class="dep-field-label">心跳周期 (秒)</span><input class="pacom-input" name="heartbeatSec" type="number" min="5" max="300" value="${w.heartbeatSec??30}" ${x} /></label>
                    <label class="dep-field"><span class="dep-field-label">断网自治保持 (分)</span><input class="pacom-input" name="offlineHoldMin" type="number" min="5" max="1440" value="${w.offlineHoldMin??120}" ${x} /></label>
                    <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">边缘缓存刷新间隔 (秒)</span><input class="pacom-input" name="cacheFlushSec" type="number" min="10" max="600" value="${w.cacheFlushSec??60}" ${x} /></label>
                  </div>`:a.category==="meter"?`
                    <div>
                      <div class="dep-drawer-section-title">智能电表计量采集参数</div>
                      <div class="pacom-row-sub">配置轮询周期、互感器变比倍率与需量统计滑窗</div>
                    </div>
                    <div class="dep-param-grid">
                      <label class="dep-field"><span class="dep-field-label">采集轮询周期 (秒)</span><input class="pacom-input" name="pollSec" type="number" min="5" max="300" value="${w.pollSec??15}" ${x} /></label>
                      <label class="dep-field"><span class="dep-field-label">CT 变比倍率</span><input class="pacom-input" name="ctRatio" type="number" min="1" max="1000" value="${w.ctRatio??1}" ${x} /></label>
                      <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">需量滑窗周期 (分)</span><input class="pacom-input" name="demandWindowMin" type="number" min="5" max="60" value="${w.demandWindowMin??15}" ${x} /></label>
                    </div>`:`
                    <div>
                      <div class="dep-drawer-section-title">人感与光感自治参数</div>
                      <div class="pacom-row-sub">保存后需在「设备网络」重新同步边缘并复执行自检</div>
                    </div>
                    <div class="dep-param-grid">
                      <label class="dep-field"><span class="dep-field-label">自动关灯延时 (分)</span><input class="pacom-input" name="offDelayMin" type="number" min="1" max="180" value="${w.offDelayMin}" ${x} /></label>
                      <label class="dep-field"><span class="dep-field-label">恢复自动延时 (分)</span><input class="pacom-input" name="restoreMin" type="number" min="1" max="180" value="${w.restoreMin}" ${x} /></label>
                      <label class="dep-field"><span class="dep-field-label">开灯光感门限 (lx)</span><input class="pacom-input" name="luxOn" type="number" min="10" max="2000" value="${w.luxOn}" ${x} /></label>
                      <label class="dep-field"><span class="dep-field-label">关灯光感门限 (lx)</span><input class="pacom-input" name="luxOff" type="number" min="10" max="2000" value="${w.luxOff}" ${x} /></label>
                    </div>`}
            <button class="pacom-btn pacom-btn--primary" type="submit" ${x}>保存设备参数</button>
          </form>`}
    </aside>
  `}function kn(e){const{tree:t,canEdit:a,caps:n}=e;if(t.projects.length===0)return`
      <div class="dep-work-row--canvas">
        <main class="pacom-spatial-stage" style="flex:1; min-width:0; display:flex; align-items:center; justify-content:center; padding:24px;">
          <div style="max-width:480px; width:100%;">${Xt(a,n.spatial,"map-pin")}</div>
        </main>
      </div>`;const o=e.activeBuildingId?e.sortedBuildingFloors(e.activeBuildingId):[],l=o.find(c=>c.id===e.activeFloorId)??o[0],p=e.floorDevices,w=t.zones.filter(c=>c.floorId===e.activeFloorId),d=e.drawerOpen?p.find(c=>c.id===e.selectedId)??null:null,h=e.canvasSearch.trim().toLowerCase(),v=p.filter(c=>!(e.deviceFilter==="unverified"&&c.physicalInstalled||e.deviceFilter==="unplaced"&&c.planPoint||h&&!`${c.name} ${e.getZoneLabel(c.logicalZoneId)}`.toLowerCase().includes(h))),x=p.filter(c=>!c.planPoint).length,E=e.planChangeAlerts[e.activeFloorId]??null,F=p.find(c=>c.category==="lighting")??null,g=e.canvasBrush==="light_marker"&&d?.category==="lighting"&&a&&n.lightMarkers;return`
    <div class="dep-work-row--canvas">
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(380px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${re("search",16)}
            <input class="pacom-hud-input" name="canvasSearch" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${s(e.canvasSearch)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill" style="${e.hudPoolOpen?"background:var(--pacom-selected-layer); color:var(--pacom-text-primary);":""}" data-toggle-hud-pool="1">设备池 ${p.length}${x>0?` ｜ 未标记 ${x}`:""}</button>
          </div>

          ${e.hudPoolOpen?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:14px; font-weight:500;">${s(l?.name??"当前楼层")} 设备池（${v.length}）</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${re("x",16)}</button>
                </div>
                <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                  <div class="pacom-tabs" role="tablist" aria-label="设备池筛选">
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${e.deviceFilter==="all"}" data-dev-filter="all">全部 ${p.length}</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${e.deviceFilter==="unverified"}" data-dev-filter="unverified">待复核 ${p.filter(c=>!c.physicalInstalled).length}</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${e.deviceFilter==="unplaced"}" data-dev-filter="unplaced">未标记 ${p.filter(c=>!c.planPoint).length}</button>
                  </div>
                </div>
                <div class="pacom-list" style="padding:6px;">
                  ${v.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">本层暂无匹配设备</div>':v.map(c=>`
                            <div class="pacom-row ${c.id===e.selectedId&&e.drawerOpen?"is-selected":""}" data-pick-dev="${s(c.id)}" style="padding:8px 10px;">
                              <div style="min-width:0;">
                                <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${s(c.name)}</div>
                                <div class="pacom-row-sub">${s(e.getZoneLabel(c.logicalZoneId))} ｜ ${c.physicalInstalled?"已复核":"待复核"}</div>
                              </div>
                              <span class="pacom-badge ${c.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${c.planPoint?"已标记":"未标记"}</span>
                            </div>`).join("")}
                </div>
              </div>`:""}
        </div>

        ${e.canvasNotice?`<div class="dep-canvas-toast" role="status">
                 <span class="pacom-dot pacom-dot--online"></span>
                 <span>${s(e.canvasNotice)}</span>
                 <button type="button" class="pacom-drawer-close" style="width:22px; height:22px;" data-dismiss-canvas-notice="1" aria-label="关闭提示">${re("x",12)}</button>
               </div>`:""}

        ${e.placingMode&&d?`<div class="dep-canvas-mode-pill" role="status">
                 <span>正在定位「${s(d.name)}」，请点击平面图落点</span>
                 <button type="button" class="dep-canvas-mode-cancel" data-toggle-place="1">取消</button>
               </div>`:g?`<div class="dep-canvas-mode-pill" role="status">
                   <span>回路灯点模式：点击平面图为「${s(d.name)}」布置灯点</span>
                   <button type="button" class="dep-canvas-mode-cancel" data-brush="device">退出</button>
                 </div>`:e.canvasBrush==="light_marker"?`<div class="dep-canvas-mode-pill" role="status">
                     <span>回路灯点模式：请先选择一台照明回路设备</span>
                     ${F?`<button type="button" class="dep-canvas-mode-cancel" data-pick-dev="${s(F.id)}">选中 ${s(ws(F))}</button>`:""}
                   </div>`:E?`<div class="dep-canvas-mode-pill" role="status">
                       <span>底图已更新至 v${E.currentVersion}，请核对本层 ${p.filter(c=>c.planPoint).length} 个点位</span>
                       <button type="button" class="dep-canvas-mode-cancel" data-open-plan-swap-review="${s(e.activeFloorId)}">核对受影响点位</button>
                     </div>`:l?.plan&&p.length===0?`<div class="dep-canvas-empty-hint" role="status">
                         <span>本层底图已就绪，点击右上角「+ 新增设备」即可开始标记</span>
                       </div>`:""}

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${e.placingMode||g?"crosshair":"grab"};">
          ${l?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${e.panX}px, ${e.panY}px) scale(${e.zoom});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${s(l.plan.imageUrl)}" alt="${s(l.name)} 平面底图" />
                  ${e.canvasBrush==="zone"?w.map((c,S)=>{const O=e.zoneBoxes[c.id]??Xa(S,w.length,c.name);return`<div class="pacom-zone-hotspot is-active" style="left:${O.left}%; top:${O.top}%; width:${O.width}%; height:${O.height}%;"><span class="pacom-zone-tag">${s(c.name.replace(new RegExp(`^${l.name}\\s*`,"i"),""))}<span class="dep-zone-draft-tag">示意</span></span></div>`}).join(""):""}
                  ${p.filter(c=>c.planPoint).map(c=>{const S=a&&e.canvasBrush==="device"&&!e.placingMode,O=c.connectivity==="offline"?"pacom-dot--critical":c.connectivity==="unknown"||!c.hardwareBinding?"pacom-dot--offline":c.physicalInstalled?"pacom-dot--online":"pacom-dot--warning";return`
                        <button type="button" class="pacom-pin ${c.id===e.selectedId&&e.drawerOpen?"is-selected":""} ${c.connectivity==="offline"?"pacom-pin--offline":""} ${S?"is-draggable":""}"
                          style="left:${(c.planPoint.x*100).toFixed(2)}%; top:${(c.planPoint.y*100).toFixed(2)}%;"
                          data-pick-dev="${s(c.id)}" ${S?`data-drag-pin="${s(c.id)}"`:""}
                          title="${s(c.name)}${c.physicalInstalled?" ｜ 已复核":" ｜ 待复核"}${S?"（可直接拖拽调整坐标）":""}">
                          <span class="pacom-dot ${O}"></span>
                          <span>${s(ws(c))}</span>
                        </button>`}).join("")}
                  ${e.canvasBrush==="light_marker"?e.lightMarkers.filter(c=>p.some(S=>S.id===c.deviceId)).map(c=>`
                            <span class="dep-light-dot" style="left:${(c.x*100).toFixed(1)}%; top:${(c.y*100).toFixed(1)}%;" title="${s(c.label)}（${s(c.channel)}）">
                              ${re("sparkles",12)}<span>${s(c.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; padding:24px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-jump-floor-config="${s(e.activeFloorId)}">前往「项目配置」上传平面底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${o.map(c=>`
              <button type="button" class="pacom-elev-item ${c.id===e.activeFloorId?"is-active":""}" data-scrubber-floor="${s(c.id)}" title="${s(c.name)}${c.plan?" ｜ 已传底图":" ｜ 待传底图"}">
                ${c.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${s(c.name)}</span>
                <span class="pacom-elev-tick"></span>
              </button>`).join("")}
        </nav>

        <div class="pacom-canvas-dock" role="toolbar" aria-label="标记图层与缩放">
          <button type="button" class="pacom-dock-btn" aria-pressed="${e.canvasBrush==="device"}" data-brush="device">设备标记</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${e.canvasBrush==="light_marker"}" data-brush="light_marker">回路灯点</button>
          <button type="button" class="pacom-dock-btn" aria-pressed="${e.canvasBrush==="zone"}" data-brush="zone">功能区</button>
          <span class="pacom-dock-sep" aria-hidden="true"></span>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="out" aria-label="缩小">${re("minus",16)}</button>
          <button type="button" class="pacom-dock-btn" style="padding:0 8px; font-variant-numeric:tabular-nums;" data-dep-zoom="reset" data-role="dep-zoom-label">${Math.round(e.zoom*100)}%</button>
          <button type="button" class="pacom-dock-icon" data-dep-zoom="in" aria-label="放大">${re("plus",16)}</button>
        </div>
      </main>
      ${Vs(e,!1)}
    </div>
  `}function An(e){if(e.tree.projects.length===0)return Xt(e.canEdit,e.caps.spatial,"list");const t=e.floorDevices,a=e.listSearch.trim().toLowerCase(),n=t.filter(l=>!(e.listStatusFilter==="online"&&l.connectivity!=="online"||e.listStatusFilter==="offline"&&l.connectivity!=="offline"||e.listStatusFilter==="unverified"&&l.physicalInstalled||e.listCategoryFilter!=="all"&&l.category!==e.listCategoryFilter||a&&!`${l.name} ${e.getZoneLabel(l.logicalZoneId)} ${l.hardwareBinding?.protocol??""}`.toLowerCase().includes(a))),o=t.filter(l=>l.connectivity==="online").length;return`
    <div class="dep-work-row--list ${e.drawerOpen?"is-drawer-open":""}">
      <div class="dep-work-main">
        <div class="pacom-log-toolbar">
          <div class="pacom-log-filters">
            <input class="pacom-input" name="deviceListSearch" style="width:220px;" data-list-search placeholder="搜索设备名称或功能区…" value="${s(e.listSearch)}" aria-label="搜索设备列表" />
            <select class="pacom-select" name="deviceListFilter" data-list-filter aria-label="按设备状态筛选">
              <option value="all" ${e.listStatusFilter==="all"?"selected":""}>全部状态（${t.length}）</option>
              <option value="online" ${e.listStatusFilter==="online"?"selected":""}>仅看在线（${o}）</option>
              <option value="offline" ${e.listStatusFilter==="offline"?"selected":""}>仅看离线（${t.length-o}）</option>
              <option value="unverified" ${e.listStatusFilter==="unverified"?"selected":""}>待物理复核（${t.filter(l=>!l.physicalInstalled).length}）</option>
            </select>
            <select class="pacom-select" name="deviceCategoryFilter" data-list-cat-filter aria-label="按设备类别筛选">
              <option value="all" ${e.listCategoryFilter==="all"?"selected":""}>全部类别</option>
              ${Object.keys(ha).map(l=>`<option value="${l}" ${e.listCategoryFilter===l?"selected":""}>${ha[l]}</option>`).join("")}
            </select>
            <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${re("refresh-cw",16)}</button>
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
                          <tr style="cursor:pointer; ${l.id===e.selectedId&&e.drawerOpen?"background:var(--pacom-selected-layer);":""}" data-open-dev-drawer="${s(l.id)}">
                            <td>
                              <div style="font-weight:450;">${s(l.name)}</div>
                              <div class="pacom-row-sub">${s(e.getZoneLabel(l.logicalZoneId))} ｜ ${s(ha[l.category])} ｜ v${l.version}</div>
                              <div class="dep-compact-meta">
                                <span class="pacom-badge ${l.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${l.hardwareBinding?l.hardwareBinding.protocol.toUpperCase():"未绑定"}</span>
                                <span class="pacom-badge ${l.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${l.physicalInstalled?"已复核":"待复核"}</span>
                                ${l.planPoint?"":'<span class="pacom-badge pacom-badge--warning">未标记</span>'}
                              </div>
                            </td>
                            <td class="dep-col-secondary"><span class="pacom-badge ${l.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${l.planPoint?`${Math.round(l.planPoint.x*100)}%, ${Math.round(l.planPoint.y*100)}%`:"未标记"}</span></td>
                            <td class="dep-col-secondary"><span class="pacom-badge ${l.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${l.hardwareBinding?l.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                            <td class="dep-col-secondary"><span class="pacom-badge ${l.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${l.physicalInstalled?"已复核":"待复核"}</span></td>
                            <td>${(()=>{const p=$a(l.connectivity,!!l.hardwareBinding);return`<span class="pacom-badge ${p.cls}">${p.label}</span>`})()}</td>
                            <td class="dep-col-secondary">
                              <div style="display:flex; justify-content:flex-end; gap:6px;">
                                ${l.hardwareBinding&&!l.physicalInstalled&&e.canEdit?`<button type="button" class="pacom-btn pacom-btn--sm" data-quick-verify-dev="${s(l.id)}">一键复核</button>`:""}
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
            <span>显示 ${n.length} / ${t.length} 台设备 ｜ ${o} 在线 ｜ ${t.length-o} 离线</span>
          </div>
        </div>
      </div>
      ${Vs(e,!0)}
    </div>
  `}function Dn(e){if(e.tree.projects.length===0)return Xt(e.canEdit,e.caps.spatial,"folder-kanban");const t=va(e.canEdit,e.caps.deviceGroups,"待后端设备分组接口对接"),a=e.groups.filter(w=>w.track==="mesh_auto"),n=e.groups.filter(w=>w.track==="cloud_biz"),o=new Map(e.floorDevices.map(w=>[w.id,w])),l=w=>{const d=w.map(h=>o.get(h)?.name??h).slice(0,3);return d.length===0?"暂未编排成员设备":`${d.join("、")}${w.length>3?` 等 ${w.length} 台`:""}`},p=w=>{const d=w.deviceIds.map(v=>o.get(v)).filter(Boolean),h=w.track==="mesh_auto"&&w.groupType.includes("灯")&&!d.some(v=>v?.category==="lighting");return`
    <div class="pacom-setting-row">
      <div class="pacom-setting-meta">
        <span class="pacom-setting-title" style="flex-wrap:wrap; row-gap:4px;">
          <span>${s(w.name)}</span>
          <span class="pacom-badge pacom-badge--neutral" style="white-space:nowrap;">${s(w.groupType)}</span>
          ${h?'<span class="pacom-badge pacom-badge--warning" style="white-space:nowrap;">缺照明执行端</span>':""}
        </span>
        <span class="pacom-setting-desc">成员 ${w.deviceIds.length} 台 ｜ ${s(l(w.deviceIds))}</span>
      </div>
      <div class="pacom-setting-control">
        <button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${s(w.id)}">组控测试</button>
        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-group="${s(w.id)}" ${t}>编辑</button>
        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-del-group="${s(w.id)}" ${t}>删除</button>
      </div>
    </div>`};return`
    <div class="pacom-grid-2">
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title" style="display:inline-flex; align-items:center; gap:6px;">
            <span>端侧蓝牙 Mesh 自治组（${a.length}）</span>
            ${wt("端侧蓝牙 Mesh 自治组说明","用于照明与人感/光感本地自治联动，断网仍可端侧执行；系统会自动纳入本层蓝牙适配器或边缘网关以防状态漏报。")}
          </h2>
        </div>
        <div class="pacom-settings-card">
          ${a.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无端侧自治分组，点击右上角「+ 新建分组」创建。</span></div>':a.map(p).join("")}
        </div>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title" style="display:inline-flex; align-items:center; gap:6px;">
            <span>云端业务分组（${n.length}）</span>
            ${wt("云端业务分组说明","适用于空调、标牌或行政部门批控场景，无需依赖蓝牙 Mesh 配网，可供空间总览与智能策略复用。")}
          </h2>
        </div>
        <div class="pacom-settings-card">
          ${n.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无云端业务分组，点击右上角「+ 新建分组」创建。</span></div>':n.map(p).join("")}
        </div>
      </section>
    </div>
  `}function _n(e){if(e.tree.projects.length===0)return Xt(e.canEdit,e.caps.spatial,"waypoints");const t=e.floorDevices,a=e.tree.zones.filter(g=>g.floorId===e.activeFloorId),n=t.filter(Vt),o=t.filter(g=>!Vt(g)),l=n.filter(g=>g.category==="gateway"),p=new Set(l.map(g=>g.id)),w=n.filter(g=>!p.has(g.id)&&!!(e.meshRoles[g.id]?.proxy||e.meshRoles[g.id]?.relay)),d=new Set(w.map(g=>g.id)),h=n.filter(g=>!p.has(g.id)&&!d.has(g.id)),v=n.filter(g=>e.meshRoles[g.id]?.proxy).length,x=n.filter(g=>e.meshRoles[g.id]?.relay).length,E=n.filter(g=>g.connectivity==="offline").length,F=o.filter(g=>g.connectivity==="offline").length;return`
    <div class="pacom-kpi-strip" role="region" aria-label="本层无线网络概览">
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">蓝牙 Mesh 节点</span>
        <div class="pacom-kpi-value">${n.length}<span class="pacom-kpi-unit">台</span></div>
        <span class="pacom-kpi-delta">不含 ${o.length} 台有线异构末端</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">Proxy ｜ Relay ${wt("代理与中继建议配比","每层建议开启 2–3 个 Proxy 供现场 App 接入；Relay 中继建议控制在总节点 10% 以内，减少广播风暴。")}</span>
        <div class="pacom-kpi-value">${v}<span class="pacom-kpi-unit">｜ ${x} 个</span></div>
        <span class="pacom-kpi-delta">代理与中继骨架</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">Mesh 离线节点</span>
        <div class="pacom-kpi-value">${E}<span class="pacom-kpi-unit">台</span></div>
        <span class="pacom-kpi-delta">${E>0?"建议检查供电或增设中继":F>0?`另有 ${F} 台有线设备离线`:"无线链路全部可达"}</span>
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
            ${e.meshFindings.map(g=>`
                <div class="pacom-receipt-item">
                  <div>
                    <strong>${s(g.title)}</strong>
                    <span class="pacom-row-sub"> ｜ ${s(g.detail)}</span>
                  </div>
                  <div style="display:inline-flex; align-items:center; gap:8px;">
                    ${g.deviceId?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-topo-jump="${s(g.deviceId)}">定位</button>`:""}
                    <span class="pacom-badge ${g.level==="ok"?"pacom-badge--online":g.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${g.level==="ok"?"通过":g.level==="warn"?"建议优化":"异常"}</span>
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
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 边缘网关 / 蓝牙适配器（${l.length}）</strong>
              ${l.length===0?'<div class="pacom-row-sub">本层暂未配置网关或蓝牙适配器。</div>':l.map(g=>`
                        <button type="button" class="dep-topo-node ${g.connectivity==="offline"?"is-issue":""}" data-topo-jump="${s(g.id)}">
                          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                            <strong>${s(g.name)}</strong>
                            <span class="pacom-badge pacom-badge--online">网桥中心</span>
                          </div>
                          <span class="pacom-row-sub">${s(g.hardwareBinding?.networkAddress??"未绑定地址")} ｜ 云边同步通道</span>
                        </button>`).join("")}
            </div>
            <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${re("chevron-right",12)}</span></div>
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（${w.length}）</strong>
              ${w.length===0?'<div class="pacom-row-sub">暂未启用 Proxy / Relay 骨架节点，可在「设备标记」抽屉开启。</div>':w.map(g=>{const c=e.meshRoles[g.id];return`
                          <button type="button" class="dep-topo-node ${g.connectivity==="offline"?"is-issue":""}" data-topo-jump="${s(g.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                              <strong>${s(g.name)}</strong>
                              <span class="pacom-badge pacom-badge--accent">${c?.proxy?"Proxy":""}${c?.proxy&&c?.relay?" + ":""}${c?.relay?"Relay":""}</span>
                            </div>
                            <span class="pacom-row-sub">${s(e.getZoneLabel(g.logicalZoneId))} ｜ ${g.connectivity==="online"?"在线":"离线"}</span>
                          </button>`}).join("")}
            </div>
            <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${re("chevron-right",12)}</span></div>
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 普通无线末端（${h.length}）</strong>
              ${h.length===0?'<div class="pacom-row-sub">本层暂无普通 Mesh 末端节点。</div>':h.map(g=>{const c=$a(g.connectivity,!!g.hardwareBinding),S=g.hardwareBinding?.protocol==="dali"?"Mesh 桥接 DALI":g.hardwareBinding?.protocol.toUpperCase()??"未绑定";return`
                          <button type="button" class="dep-topo-node ${g.connectivity==="offline"?"is-issue":""}" data-topo-jump="${s(g.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                              <strong>${s(g.name)}</strong>
                              <span class="pacom-badge ${c.cls}">${c.label}</span>
                            </div>
                            <span class="pacom-row-sub">${s(e.getZoneLabel(g.logicalZoneId))} ｜ ${s(S)}</span>
                          </button>`}).join("")}
            </div>
          </div>
          ${o.length>0?`<div class="pacom-banner" style="padding:12px 16px;">
                   <div class="pacom-banner-text">
                     <span class="pacom-banner-title">本层另有 ${o.length} 台有线异构设备（${s(o.map(g=>`${g.name}（${g.hardwareBinding?.protocol.toUpperCase()??"有线"}）`).join("、"))}）</span>
                     <span class="pacom-banner-sub">空调与电表经有线协议通道直采，不加入蓝牙 Mesh 无线网；请前往「系统接入」核查其总线健康度。</span>
                   </div>
                   <button type="button" class="pacom-btn pacom-btn--sm" data-dep-nav="connections">前往系统接入 →</button>
                 </div>`:""}`:`
          <div class="dep-topo-flow">
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 上游传感与总线源</strong>
              ${t.filter(g=>g.category==="sensor"||g.category==="gateway").length===0?'<div class="pacom-row-sub">本层暂无传感或网关节点。</div>':t.filter(g=>g.category==="sensor"||g.category==="gateway").map(g=>`
                        <button type="button" class="dep-topo-node" data-topo-jump="${s(g.id)}">
                          <strong>${s(g.name)}</strong>
                          <span class="pacom-row-sub">${g.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                        </button>`).join("")}
            </div>
            <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${re("chevron-right",12)}</span></div>
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 受控末端（照明 / 暖通）</strong>
              ${t.filter(g=>g.category==="lighting"||g.category==="hvac").length===0?'<div class="pacom-row-sub">本层暂无受控照明或暖通末端。</div>':t.filter(g=>g.category==="lighting"||g.category==="hvac").map(g=>`
                        <button type="button" class="dep-topo-node ${g.connectivity==="offline"?"is-issue":""}" data-topo-jump="${s(g.id)}">
                          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                            <strong>${s(g.name)}</strong>
                            <span class="pacom-badge ${g.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${g.connectivity==="online"?"正常":"离线"}</span>
                          </div>
                          <span class="pacom-row-sub">服务：${s(e.getZoneLabel(g.logicalZoneId))}</span>
                        </button>`).join("")}
            </div>
            <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${re("chevron-right",12)}</span></div>
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 服务功能区（影响面）</strong>
              ${a.length===0?'<div class="pacom-row-sub">本层暂未划分功能区。</div>':a.map(g=>{const c=t.filter(O=>O.logicalZoneId===g.id),S=c.some(O=>O.connectivity==="offline");return`
                          <div class="dep-topo-node ${S?"is-issue":""}" style="cursor:default;">
                            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                              <strong>${s(g.name)}</strong>
                              <span class="pacom-badge ${c.length===0?"pacom-badge--neutral":S?"pacom-badge--warning":"pacom-badge--online"}">${c.length} 台设备</span>
                            </div>
                            <span class="pacom-row-sub">${c.length===0?"暂无关联设备":S?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                          </div>`}).join("")}
            </div>
          </div>`}
    </section>
  `}function ca(e,t,a){return e?t?"":`disabled title="${s(a)}"`:'disabled title="当前角色为只读权限"'}function Ln(e){const{tree:t,canEdit:a,caps:n}=e;if(t.projects.length===0)return Xt(a,n.spatial,"layers");const o=t.projects.find(p=>p.id===e.activeProjectId)??t.projects[0],l=t.buildings.filter(p=>p.projectId===o.id);if(e.projectDrill==="building"||e.projectDrill==="floor"){const p=l.find(w=>w.id===e.activeBuildingId)??l[0]??null;if(!p)return Es(e,o,l);if(e.projectDrill==="floor"){const w=e.sortedBuildingFloors(p.id),d=w.find(h=>h.id===e.activeFloorId)??w[0]??null;if(d)return Fn(e,p,w,d)}return Cn(e,l,p)}return Es(e,o,l)}function Es(e,t,a){const{canEdit:n,caps:o}=e,l=ca(n,o.spatial,"待后端空间建档接口对接"),p=a.flatMap(v=>e.sortedBuildingFloors(v.id)),w=p.filter(v=>!!v.plan).length,d=p.length>0?Math.round(w/p.length*100):0,h=t.location?`${t.location.lng.toFixed(4)}, ${t.location.lat.toFixed(4)}`:"未设置坐标";return`
    <div class="dep-project-strip">
      <div class="dep-project-strip-main">
        <div class="dep-project-cover">
          <img src="${s(t.imageUrl??"./media/gzlab.jpg")}" alt="${s(t.name)}" />
        </div>
        <div style="min-width:0; display:flex; flex-direction:column; gap:4px;">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <strong style="font-size:16px; line-height:24px; font-weight:500; color:var(--pacom-text-primary);">${s(t.name)}</strong>
            <span class="pacom-badge pacom-badge--neutral">${a.length} 栋楼宇</span>
            <span class="pacom-badge pacom-badge--neutral">${p.length} 个楼层</span>
          </div>
          <span class="pacom-row-sub">${s(t.city||"未填城市")}${t.address?` ｜ ${s(t.address)}`:""} ｜ 坐标 ${s(h)}</span>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:16px; flex-shrink:0; flex-wrap:wrap;">
        <div class="dep-proj-progress" aria-label="整体底图就绪度">
          <div class="dep-proj-progress-head">
            <span>底图就绪度</span>
            <strong>${w}/${p.length}（${d}%）</strong>
          </div>
          <div class="dep-proj-progress-track">
            <div class="dep-proj-progress-fill ${p.length>0&&w===p.length?"is-complete":""}" style="width:${d}%;"></div>
          </div>
        </div>
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
            <div class="dep-empty-icon">${re("building-2",20)}</div>
            <strong style="font-size:16px; line-height:24px; font-weight:500; color:var(--pacom-text-primary);">${s(t.name)} 暂无楼宇</strong>
            <span class="pacom-row-sub">添加楼宇并设置层数结构后，系统将自动生成对应楼层并直达楼层底图工作台。</span>
            <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-bld="1" ${l}>+ 添加第一栋楼宇</button>
          </div>`:`
          <div class="dep-building-grid">
            ${a.map(v=>{const x=e.sortedBuildingFloors(v.id),E=x.filter(se=>!!se.plan).length,F=Ba(v,x),g=v.aboveFloors+v.belowFloors+(v.hasRoof?1:0),c=x.flatMap(se=>e.buildingDevicesByFloor.get(se.id)??[]),S=c.filter(se=>se.connectivity==="offline").length,O=new Set(x.map(se=>se.id)),V=new Set(e.buildingDeliveries.filter(se=>O.has(se.floorId)&&se.status!=="draft").map(se=>se.floorId)).size,B=x.length===0?"pacom-badge--neutral":E===x.length?"pacom-badge--online":"pacom-badge--warning",G=x.length!==g?`规划地上 ${v.aboveFloors} 层${v.belowFloors>0?` ｜ 地下 ${v.belowFloors} 层`:""}${v.hasRoof?" ｜ RF":""} ｜ 已建 ${x.length} 层`:`地上 ${v.aboveFloors} 层${v.belowFloors>0?` ｜ 地下 ${v.belowFloors} 层`:""}${v.hasRoof?" ｜ RF":""}${v.areaSqm?` ｜ ${v.areaSqm} m²`:""}`;return`
                  <article class="dep-building-card" data-drill-building="${s(v.id)}" tabindex="0" role="button" aria-label="进入 ${s(v.name)} 楼层配置">
                    <div class="dep-building-stage">
                      <img src="${s(v.imageUrl??"./media/building-e.webp")}" alt="${s(v.name)}" />
                      <span class="pacom-badge ${B} dep-building-stage-badge">${x.length===0?"未建层":`${E}/${x.length} 底图`}</span>
                    </div>
                    <div class="dep-building-body">
                      <div class="dep-building-head">
                        <span class="dep-building-name">
                          <span>${s(v.name)}</span>
                          <span class="dep-building-arrow" aria-hidden="true">${re("chevron-right",14)}</span>
                        </span>
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-building="${s(v.id)}" ${l}>编辑</button>
                      </div>
                      <div class="pacom-row-sub">${s(G)}</div>
                      <div class="dep-building-summary">
                        ${c.length>0?`<span>${c.length} 台设备</span><span>｜</span><span>${V}/${x.length} 层已冻结</span>${S>0?`<span>｜</span><span style="color:var(--pacom-status-critical);">${S} 台离线</span>`:""}`:`<span style="color:var(--pacom-text-muted);">${E===x.length&&x.length>0?"底图已齐，待登记设备":"待完善底图与部署"}</span>`}
                      </div>
                      ${F.length>0?`<div class="dep-building-missing">
                               <span>尚缺 ${F.length} 个规划楼层</span>
                               <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-fill-missing-floors="${s(v.id)}" ${l}>补齐楼层</button>
                             </div>`:""}
                    </div>
                  </article>`}).join("")}
          </div>`}
    </section>
  `}function Cn(e,t,a){const{canEdit:n,caps:o}=e,l=ca(n,o.spatial,"待后端空间建档接口对接"),p=e.sortedBuildingFloors(a.id),w=p.filter(E=>!E.plan).length,d=p.filter(E=>e.tree.zones.filter(F=>F.floorId===E.id).length===0).length,h=Ba(a,p),v=e.floorListSearch.trim().toLowerCase(),x=p.filter(E=>{if(e.floorListFilter==="missing_plan"&&E.plan||e.floorListFilter==="missing_zone"&&e.tree.zones.filter(F=>F.floorId===E.id).length>0)return!1;if(v){const F=e.tree.zones.filter(g=>g.floorId===E.id).map(g=>g.name).join(" ");if(!`${E.name} ${F}`.toLowerCase().includes(v))return!1}return!0});return`
    <div class="dep-drill-bar">
      <div class="dep-drill-left">
        <button type="button" class="dep-back-btn" data-proj-drill="overview">
          ${re("arrow-left",16)}
          <span>项目配置</span>
        </button>
        <span class="dep-drill-sep" aria-hidden="true">/</span>
        ${t.length>1?`<select class="pacom-select" name="drillBuildingSelect" data-switch-drill-building aria-label="切换当前楼宇" style="width:auto; min-width:112px;">
                 ${t.map(E=>`<option value="${s(E.id)}" ${E.id===a.id?"selected":""}>${s(E.name)}</option>`).join("")}
               </select>`:`<h2 class="pacom-unified-title">${s(a.name)}</h2>`}
        <span class="pacom-row-sub">规划地上 ${a.aboveFloors} 层${a.belowFloors>0?` ｜ 地下 ${a.belowFloors} 层`:""}${a.hasRoof?" ｜ RF":""} ｜ 已建 ${p.length} 层</span>
      </div>
      <div class="pacom-unified-head-actions">
        <button type="button" class="pacom-btn" data-edit-building="${s(a.id)}" ${l}>楼宇参数</button>
        ${p.some(E=>!E.areaSqm)?`<button type="button" class="pacom-btn" data-batch-fill-area="${s(a.id)}" ${l}>批量填面积</button>`:""}
        ${h.length>0?`<button type="button" class="pacom-btn" data-fill-missing-floors="${s(a.id)}" ${l}>补齐 ${h.length} 层</button>`:""}
        <button type="button" class="pacom-btn" data-open-new-floor="1" ${l}>+ 新增楼层</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-batch-modal="1" ${l}>批量导入底图</button>
      </div>
    </div>

    ${p.length===0?`
        <div class="dep-empty-card">
          <div class="dep-empty-icon">${re("layers",20)}</div>
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
              <button type="button" class="pacom-tab" role="tab" aria-selected="${e.floorListFilter==="all"}" data-floor-list-filter="all">全部 ${p.length}</button>
              <button type="button" class="pacom-tab" role="tab" aria-selected="${e.floorListFilter==="missing_plan"}" data-floor-list-filter="missing_plan">缺底图 ${w}</button>
              <button type="button" class="pacom-tab" role="tab" aria-selected="${e.floorListFilter==="missing_zone"}" data-floor-list-filter="missing_zone">缺功能区 ${d}</button>
            </div>
            <input class="pacom-input" name="floorListSearch" style="width:220px;" data-floor-list-search placeholder="搜索楼层或功能区…" value="${s(e.floorListSearch)}" aria-label="搜索楼层或功能区" />
          </div>
          <span class="pacom-row-sub">点击任意楼层进入单层底图与功能区精配</span>
        </div>

        ${e.batchAreaOpen?`<form data-apply-batch-area="${s(a.id)}" class="pacom-card" style="padding:12px 16px; flex-direction:row; align-items:flex-end; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                 <div style="display:flex; align-items:flex-end; gap:10px; flex-wrap:wrap;">
                   <label class="dep-field" style="width:200px;">
                     <span class="dep-field-label">标准层面积 (m²)</span>
                     <input class="pacom-input" name="batchStdArea" type="number" step="0.1" min="1" placeholder="如：1200" value="${a.areaSqm?Math.round(a.areaSqm/Math.max(1,p.length)):""}" required ${l} />
                   </label>
                   <span class="pacom-row-sub" style="padding-bottom:6px;">将批量回填至本栋 ${p.filter(E=>!E.areaSqm).length} 个未设面积的楼层（不覆盖已填楼层）</span>
                 </div>
                 <div style="display:inline-flex; gap:8px;">
                   <button type="button" class="pacom-btn pacom-btn--sm" data-close-batch-area="1">取消</button>
                   <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${l}>应用至空缺楼层</button>
                 </div>
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
                ${x.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>当前筛选无匹配楼层</strong><span>可切换回「全部」查看整栋楼层。</span></div></td></tr>':x.map(E=>{const F=e.tree.zones.filter(g=>g.floorId===E.id);return`
                            <tr style="cursor:pointer;" data-drill-floor="${s(E.id)}">
                              <td>
                                <div style="display:inline-flex; align-items:center; gap:8px;">
                                  <span class="pacom-dot ${E.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                  <strong>${s(E.name)}</strong>
                                </div>
                              </td>
                              <td><span class="pacom-row-sub">${E.areaSqm?`${E.areaSqm} m²`:"—"}</span></td>
                              <td>
                                <div style="display:inline-flex; align-items:center; gap:8px;">
                                  ${E.plan?`<button type="button" class="dep-floor-thumb" data-open-lightbox="1" data-lb-title="${s(a.name)} ${s(E.name)} 平面底图" data-lb-src="${s(E.plan.imageUrl)}" title="查看大图"><img src="${s(E.plan.imageUrl)}" alt="${s(E.name)}" /></button>
                                         <span class="pacom-badge ${e.planChangeAlerts[E.id]?"pacom-badge--warning":"pacom-badge--online"}">${e.planChangeAlerts[E.id]?"换图待核对":"已就绪"}</span>`:'<span class="pacom-badge pacom-badge--warning">待上传</span>'}
                                  <label class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-stop-row="1" style="cursor:${!n||!o.spatial?"not-allowed":"pointer"}; opacity:${!n||!o.spatial?"0.45":"1"};">
                                    <span>${E.plan?"替换":"上传"}</span>
                                    <input type="file" name="floorPlan_${s(E.id)}" accept="image/*" data-upload-floor="${s(E.id)}" style="display:none;" ${l} />
                                  </label>
                                </div>
                              </td>
                              <td>
                                ${F.length>0?`<span>${F.length} 区</span> <span class="pacom-row-sub" style="margin-left:4px;">${s(F.slice(0,2).map(g=>g.name.replace(new RegExp(`^${E.name}\\s*`,"i"),"")).join("、"))}${F.length>2?"…":""}</span>`:'<span class="pacom-row-sub">未划分</span>'}
                              </td>
                              <td>
                                <div style="display:flex; justify-content:flex-end; gap:6px;">
                                  <button type="button" class="pacom-btn pacom-btn--sm" data-drill-floor-btn="${s(E.id)}">配置</button>
                                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-jump-floor-marking="${s(E.id)}">设备标记 →</button>
                                </div>
                              </td>
                            </tr>`}).join("")}
              </tbody>
            </table>
          </div>
          <div class="pacom-table-footer">
            <span>显示 ${x.length} / ${p.length} 层 ｜ 已传底图 ${p.length-w} 层</span>
          </div>
        </div>`}
  `}function Fn(e,t,a,n){const{canEdit:o,caps:l}=e,p=ca(o,l.spatial,"待后端空间建档接口对接"),w=ca(o,l.floorDocs,"待后端工程资料接口对接"),d=a.findIndex(c=>c.id===n.id),h=d>0?a[d-1]:null,v=d>=0&&d<a.length-1?a[d+1]:null,x=e.tree.zones.filter(c=>c.floorId===n.id),E=e.floorDocs.filter(c=>c.floorId===n.id),F=e.floorDevices,g=a.filter(c=>c.id!==n.id);return`
    <div class="dep-drill-bar">
      <div class="dep-drill-left">
        <button type="button" class="dep-back-btn" data-proj-drill="building">
          ${re("arrow-left",16)}
          <span>${s(t.name)}</span>
        </button>
        <span class="dep-drill-sep" aria-hidden="true">/</span>
        <div class="dep-floor-pager" role="group" aria-label="连续切换楼层">
          <button type="button" class="dep-floor-pager-btn" data-drill-floor-btn="${s(h?.id??"")}" ${h?`title="上一层（${s(h.name)}）"`:"disabled"} aria-label="上一层">
            ${re("chevron-left",14)}
          </button>
          <select class="pacom-select" name="drillFloorSelect" data-switch-drill-floor aria-label="切换当前楼层" style="width:auto; min-width:92px;">
            ${a.map(c=>`<option value="${s(c.id)}" ${c.id===n.id?"selected":""}>${s(c.name)}${c.plan?"":"（缺图）"}</option>`).join("")}
          </select>
          <button type="button" class="dep-floor-pager-btn" data-drill-floor-btn="${s(v?.id??"")}" ${v?`title="下一层（${s(v.name)}）"`:"disabled"} aria-label="下一层">
            ${re("chevron-right",14)}
          </button>
        </div>
        <span class="pacom-badge ${e.planChangeAlerts[n.id]?"pacom-badge--warning":n.plan?"pacom-badge--online":"pacom-badge--warning"}">${e.planChangeAlerts[n.id]?"换图待核对":n.plan?"底图已就绪":"待传底图"}</span>
      </div>
      <div class="pacom-unified-head-actions">
        <button type="button" class="pacom-btn" data-jump-floor-marking="${s(n.id)}">前往设备标记 →</button>
      </div>
    </div>

    <div class="dep-plan-preview-box" data-single-floor-drop="${s(n.id)}">
      <div class="dep-plan-toolbar">
        ${n.plan?`<button type="button" class="dep-plan-tool-btn" data-open-lightbox="1" data-lb-title="${s(t.name)} ${s(n.name)} 平面底图" data-lb-src="${s(n.plan.imageUrl)}">查看大图</button>`:""}
        <label class="dep-plan-tool-btn" style="cursor:${!o||!l.spatial?"not-allowed":"pointer"}; opacity:${!o||!l.spatial?"0.45":"1"};">
          <span>${n.plan?"替换底图":"上传底图"}</span>
          <input type="file" name="floorPlanDrop_${s(n.id)}" accept="image/*" data-upload-floor="${s(n.id)}" style="display:none;" ${p} />
        </label>
        ${n.plan?`<button type="button" class="dep-plan-tool-btn" style="color:var(--pacom-status-critical);" data-clear-floor-plan="${s(n.id)}" ${p}>清空</button>`:""}
      </div>
      ${n.plan?`<img src="${s(n.plan.imageUrl)}" alt="${s(n.name)} 平面底图" style="width:100%; max-height:360px; object-fit:contain; display:block;" />`:`<div class="dep-plan-empty-drop">
               <div class="dep-empty-icon">${re("upload",20)}</div>
               <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-primary);">拖拽 ${s(n.name)} 2D 平面图到此处上传</strong>
               <span class="pacom-row-sub">支持透明 WebP / PNG / JPG，上传后可直接前往设备标记</span>
               <label class="pacom-btn pacom-btn--primary" style="cursor:${!o||!l.spatial?"not-allowed":"pointer"}; opacity:${!o||!l.spatial?"0.45":"1"};">
                 <span>选择平面图文件</span>
                 <input type="file" name="floorPlanEmpty_${s(n.id)}" accept="image/*" data-upload-floor="${s(n.id)}" style="display:none;" ${p} />
               </label>
             </div>`}
    </div>

    <section class="pacom-section">
      <div class="pacom-section-head">
        <h2 class="pacom-section-title">楼层属性与空间划分</h2>
        <span class="pacom-row-sub">已关联 ${F.length} 台设备 ｜ ${x.length} 个功能区</span>
      </div>
      <div class="pacom-settings-card">
        <div class="pacom-setting-row">
          <form data-save-floor="${s(n.id)}" style="display:flex; align-items:flex-end; gap:12px; flex-wrap:wrap; flex:1;">
            <label class="dep-field" style="width:120px;">
              <span class="dep-field-label">楼层名称</span>
              <input class="pacom-input" name="fName" value="${s(n.name)}" required ${p} />
            </label>
            <label class="dep-field" style="width:150px;">
              <span class="dep-field-label">建筑面积 (m²)</span>
              <input class="pacom-input" name="fArea" type="number" step="0.1" value="${s(n.areaSqm??"")}" placeholder="选填" ${p} />
            </label>
            <button type="submit" class="pacom-btn" ${p}>保存属性</button>
          </form>
          <button type="button" class="pacom-btn pacom-btn--danger" data-delete-floor="${s(n.id)}" ${!o||!l.spatial||F.length>0?`disabled title="${F.length>0?`已关联 ${F.length} 台设备，请先解绑后再删除`:o?"待后端空间建档接口对接":"当前角色为只读权限"}"`:""}>删除楼层</button>
        </div>

        <div class="pacom-setting-row" style="justify-content:space-between; gap:12px;">
          <div style="display:flex; align-items:center; gap:8px;">
            <div class="pacom-tabs" role="tablist" aria-label="楼层附属配置">
              <button type="button" class="pacom-tab" role="tab" aria-selected="${e.floorDetailTab==="zones"}" data-floor-detail-tab="zones">功能区（${x.length}）</button>
              <button type="button" class="pacom-tab" role="tab" aria-selected="${e.floorDetailTab==="docs"}" data-floor-detail-tab="docs">工程资料（${E.length}）</button>
            </div>
            ${wt("功能区与工程资料说明","功能区用于按办公区、实验区、会议室等逻辑范围归类设备与策略；标准层划分后可一键复用至其他楼层。")}
          </div>
          ${e.floorDetailTab==="zones"?x.length>0&&g.length>0?`<button type="button" class="pacom-btn" data-open-copy-zones="${s(n.id)}" ${p}>复用至其他层…</button>`:"":`<label class="pacom-btn" style="cursor:${!o||!l.floorDocs?"not-allowed":"pointer"}; opacity:${!o||!l.floorDocs?"0.45":"1"};">
                   <span>+ 关联文件</span>
                   <input type="file" name="attachDoc_${s(n.id)}" accept=".pdf,.xlsx,.xls,.csv,.doc,.docx,.dwg,.png,.jpg,.jpeg,.webp,.txt" data-attach-doc="${s(n.id)}" style="display:none;" ${w} />
                 </label>`}
        </div>

        ${e.floorDetailTab==="zones"?`
              ${x.length===0?`
                  <div class="pacom-setting-row" style="flex-direction:column; align-items:flex-start; gap:10px;">
                    <span class="pacom-row-sub">本层暂未划分功能区，可一键套用常用标准模板：</span>
                    <div style="display:flex; flex-wrap:wrap; gap:8px;">
                      ${zs.map(c=>`<button type="button" class="pacom-btn pacom-btn--sm" data-apply-zone-tpl="${s(c.key)}" data-tpl-floor="${s(n.id)}" ${p}>+ ${s(c.label)}</button>`).join("")}
                    </div>
                  </div>`:x.map(c=>e.editingZoneId===c.id?`
                            <form class="pacom-setting-row" style="gap:10px; justify-content:flex-start; align-items:flex-end;" data-save-edit-zone="${s(c.id)}" data-zone-floor="${s(n.id)}">
                              <label class="dep-field" style="width:220px;">
                                <span class="dep-field-label">功能区名称</span>
                                <input class="pacom-input" name="zName" value="${s(c.name)}" required ${p} />
                              </label>
                              <label class="dep-field" style="width:140px;">
                                <span class="dep-field-label">空间类型</span>
                                <select class="pacom-select" name="zCat" ${p}>
                                  ${Object.keys(ua).map(S=>`<option value="${S}" ${c.category===S?"selected":""}>${ua[S]}</option>`).join("")}
                                </select>
                              </label>
                              <button type="submit" class="pacom-btn pacom-btn--primary" ${p}>保存</button>
                              <button type="button" class="pacom-btn" data-cancel-edit-zone="1">取消</button>
                            </form>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">${s(c.name)} <span class="pacom-badge pacom-badge--neutral">${s(ua[c.category]??c.category)}</span></span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-zone="${s(c.id)}" ${p}>编辑</button>
                                <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-del-zone="${s(c.id)}" ${p}>删除</button>
                              </div>
                            </div>`).join("")}
              <form class="pacom-setting-row" style="gap:10px; justify-content:flex-start; align-items:flex-end;" data-add-zone="${s(n.id)}">
                <label class="dep-field" style="width:240px;">
                  <span class="dep-field-label">新增功能区</span>
                  <input class="pacom-input" name="zoneName" placeholder="如：${s(n.name)} 东侧实验区" required ${p} />
                </label>
                <label class="dep-field" style="width:140px;">
                  <span class="dep-field-label">空间类型</span>
                  <select class="pacom-select" name="zoneCat" ${p}>
                    ${Object.keys(ua).map(c=>`<option value="${c}">${ua[c]}</option>`).join("")}
                  </select>
                </label>
                <button type="submit" class="pacom-btn" ${p}>+ 添加功能区</button>
              </form>`:E.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无关联竣工图纸或设备手册，可点击右上角「+ 关联文件」挂载。</span></div>':E.map(c=>`
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">${s(c.name)}</span>
                        <span class="pacom-row-sub">${s(c.boundScope)} ｜ ${s(c.size)} ｜ ${s(c.updatedAt)}</span>
                      </div>
                      <div class="pacom-setting-control">
                        <select class="pacom-select" name="docCat_${s(c.id)}" data-doc-category="${s(c.id)}" aria-label="资料分类" style="width:108px;" ${ca(o,l.manageDocs,"待后端资料分类接口对接")}>
                          ${yn.map(S=>`<option value="${S}" ${c.category===S?"selected":""}>${S}</option>`).join("")}
                        </select>
                        <button type="button" class="pacom-btn pacom-btn--sm" data-preview-doc="${s(c.id)}">${c.fileUrl?"打开":"查阅"}</button>
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-del-doc="${s(c.id)}" ${ca(o,l.manageDocs,"待后端工程资料删除接口对接")}>删除</button>
                      </div>
                    </div>`).join("")}
      </div>
    </section>
  `}function Rt(e,t,a){return e?t?"":`disabled title="${s(a)}"`:'disabled title="当前角色为只读权限"'}const Hs="pacom.web.deployState.v1";function jn(){try{if(typeof sessionStorage<"u"){const e=sessionStorage.getItem(Hs);if(e)return JSON.parse(e)}}catch{}return{}}async function Mn(e,t,a){let n=a;const o=fn(t),l=In(),p=jn(),w=new URLSearchParams(window.location.hash.split("?")[1]??""),d=w.get("sec"),h=w.get("floor");let v=d?d==="floorplan"||d==="devices"?"device_marking":d==="inventory"?"device_list":d==="groups"?"device_groups":d==="network"||d==="network_topo"?"device_network":d==="connections"?"connections":d==="overview"||d==="acceptance"?"acceptance":"project_config":p.activeNav??"project_config",x=d==="floors"?"floor":!d&&p.projectDrill?p.projectDrill:"overview",E=Ra(),F=!1,g="",c=await t.getSpatialTree(),S=[];const O=new Map;let V=[],B={},G={version:1,dirty:!1,lastSyncedAt:null},se={};const he=new Map;let de=[],ee=[],ce=[],Y=[],D={},H={},fe=new Set;const be={...bn},we=new Map;let _e=!1;const Le=E.level!=="all-projects"?E.projectId:"",P=E.level==="building"||E.level==="floor"?E.buildingId:"",J=E.level==="floor"?E.floorId:"",Se=h?c.floors.find(_=>_.id===h):null,W=Se?c.buildings.find(_=>_.id===Se.buildingId):null;let b=W?.projectId??(Le&&c.projects.some(_=>_.id===Le)?Le:p.activeProjectId&&c.projects.some(_=>_.id===p.activeProjectId)?p.activeProjectId:c.projects[0]?.id??""),A=W?.id??(P&&c.buildings.some(_=>_.id===P&&_.projectId===b)?P:p.activeBuildingId&&c.buildings.some(_=>_.id===p.activeBuildingId&&_.projectId===b)?p.activeBuildingId:c.buildings.find(_=>_.projectId===b)?.id??""),j=Se?.id??(J&&c.floors.some(_=>_.id===J&&_.buildingId===A)?J:p.activeFloorId&&c.floors.some(_=>_.id===p.activeFloorId&&_.buildingId===A)?p.activeFloorId:Fe(A)[0]?.id??""),$="all",N="",ne=!1,ze="zones",tt=null,ot="device",Ne="",te="",M="all",q=!1,Z=!1,pe="binding",ie=null,Ie=null,Qe=!1,je=!1,ke=1,ct=0,Je=0,ft="",m="all",R="all",ue="mesh",xe=[],at="list",We="",Ke="all",Ue=null,Te=null,Ce=null,ut=null,st=!1,wa="active",da=!1,Re=null,ge="",dt=null,St=w.get("new")==="project",jt=null,ea=null,ta=!1,It=!1,Ht=null,Wt=null,Et=null,aa=!1,pa=null,Mt=!1,qt=!1,kt=[],Gt=null,bt=new Set,xt=!1,lt=null,Zt=null,Kt=null,Ot=!1,Tt="",ht=null,sa=null,vt=null,mt=null,y="",C="";function K(_){v==="device_marking"?(te=_,y=""):(y=_,te="")}function oe(){try{typeof sessionStorage<"u"&&sessionStorage.setItem(Hs,JSON.stringify({activeNav:v,projectDrill:x,activeProjectId:b,activeBuildingId:A,activeFloorId:j}))}catch{}}function ve(_){if(!_){Ie=null;return}const U=S.filter(Q=>Q.category==="gateway");Ie={deviceId:_.id,gatewayId:_.hardwareBinding?.gatewayId??(_.category==="gateway"?_.id:U[0]?.id??""),protocol:_.hardwareBinding?.protocol??Ja[0],networkAddress:_.hardwareBinding?.networkAddress??"",portOrChannel:_.hardwareBinding?.portOrChannel??"",physicalInstalled:_.physicalInstalled}}function Fe(_){return[...c.floors.filter(U=>U.buildingId===_)].sort((U,Q)=>Da(Q.name)-Da(U.name))}function Ye(_){if(!_)return"未分配功能区";const U=c.zones.find(X=>X.id===_);if(!U)return _;const Q=c.floors.find(X=>X.id===U.floorId);return Q?U.name.replace(new RegExp(`^${Q.name}\\s*`,"i"),""):U.name}function le(){ge="",St=!1,jt=null,ea=null,ta=!1,It=!1,Ht=null,Wt=null,Et=null,aa=!1,pa=null,Mt=!1,Gt=null,xt=!1,lt=null,Zt=null,Kt=null,Ot=!1,ht=null,sa=null,vt=null}function Xe(){return!!(St||ta||It||Et||aa||Mt||Gt||xt||lt||Zt||Ot||ht||sa||vt)}function Be(){if(!b){E=Ft({level:"all-projects"});return}A&&j?E=Ft({level:"floor",projectId:b,buildingId:A,floorId:j}):A?E=Ft({level:"building",projectId:b,buildingId:A}):E=Ft({level:"project",projectId:b})}function ye(_){const U=c.buildings.find(X=>X.id===_);if(!U)return;b=U.projectId,A=U.id;const Q=Fe(U.id);Q.some(X=>X.id===j)||(j=Q.find($e=>(O.get($e.id)?.length??0)>0)?.id??Q[0]?.id??""),Be(),ie=null,Z=!1,je=!1,ke=1,ct=0,Je=0}function Ae(_){const U=c.floors.find($e=>$e.id===_);if(!U)return;j&&j!==U.id&&(ie?we.set(j,{selectedId:ie,drawerOpen:Z,drawerTab:pe}):we.delete(j)),j=U.id,A=U.buildingId;const Q=c.buildings.find($e=>$e.id===U.buildingId);Q&&(b=Q.projectId),Be();const X=we.get(U.id);X?(ie=X.selectedId,Z=X.drawerOpen,pe=X.drawerTab):(ie=null,Z=!1),je=!1,tt=null,ke=1,ct=0,Je=0}async function ae(){if(!j){S=[],V=[],B={},G={version:1,dirty:!1,lastSyncedAt:null},de=[],ee=[];return}const[_,U,Q,X,$e,Oe,Ve]=await Promise.all([t.getFloorDevices(j).catch(()=>[]),t.listLightMarkers?t.listLightMarkers(j).catch(()=>[]):Promise.resolve([]),t.listMeshRoles?t.listMeshRoles(j).catch(()=>({})):Promise.resolve({}),t.getEdgeSyncState?t.getEdgeSyncState(j).catch(()=>({version:1,dirty:!1,lastSyncedAt:null})):Promise.resolve({version:1,dirty:!1,lastSyncedAt:null}),t.listDeviceGroups?t.listDeviceGroups(j).catch(()=>[]):Promise.resolve([]),t.listFloorDocs?t.listFloorDocs(j).catch(()=>[]):Promise.resolve([]),t.getFloorFttRecord?t.getFloorFttRecord(j).catch(()=>null):Promise.resolve(null)]);S=_,O.set(j,_),V=U,B=Q,G=X,se[j]=X,de=$e,ee=Oe,Ve?H[j]=Ve:delete H[j],t.getDeviceParams&&await Promise.all(_.map(async i=>{const r=await t.getDeviceParams(i.id).catch(()=>null);r&&he.set(i.id,r)})),ie&&!S.some(i=>i.id===ie)&&(ie=null,Z=!1,Qe=!1,Ie=null);const Pe=S.find(i=>i.id===ie);(!Ie||Ie.deviceId!==Pe?.id)&&ve(Pe)}async function Me(){if(O.clear(),se={},H={},D={},fe=new Set,Y=[],!A)return;const _=Fe(A);if(t.listPlanChangeAlerts&&(D=await t.listPlanChangeAlerts(A).catch(()=>({}))),t.listDeferredFloorIds){const X=await t.listDeferredFloorIds(A).catch(()=>[]);fe=new Set(X)}const U=[];await Promise.all(_.map(async X=>{if(!(n.scope.allowedFloorIds.includes(X.id)||n.scope.canEditDeployment)){O.set(X.id,[]);return}const[Oe,Ve,Pe,i]=await Promise.all([t.getFloorDevices(X.id).catch(()=>[]),t.getEdgeSyncState?t.getEdgeSyncState(X.id).catch(()=>({version:1,dirty:!1,lastSyncedAt:null})):Promise.resolve({version:1,dirty:!1,lastSyncedAt:null}),t.getFloorFttRecord?t.getFloorFttRecord(X.id).catch(()=>null):Promise.resolve(null),t.listDeliveryBatches(X.id).catch(()=>[])]);O.set(X.id,Oe),se[X.id]=Ve,Pe&&(H[X.id]=Pe),U.push(i)}));const Q=new Set;Y=U.flat().filter(X=>Q.has(X.id)?!1:(Q.add(X.id),!0)).sort((X,$e)=>$e.frozenAt.localeCompare(X.frozenAt))}async function qe(){C="";const _=await t.getSession().catch(()=>null);if(_&&(n=_),c=await t.getSpatialTree(),c.projects.length===0)b="",A="",j="",x="overview";else{c.projects.some(X=>X.id===b)||(b=c.projects[0].id,x="overview");const U=c.buildings.filter(X=>X.projectId===b);U.some(X=>X.id===A)||(A=U[0]?.id??"",x!=="overview"&&(x="overview"));const Q=A?Fe(A):[];Q.some(X=>X.id===j)||(j=Q[0]?.id??"",x==="floor"&&(x=A?"building":"overview"))}Be(),ce=b?await t.listConnections(b).catch(()=>[]):[],await Me(),await ae(),k()}const Sa=_=>{if(!document.body.contains(e)){document.removeEventListener("keydown",Sa),document.removeEventListener("click",Pa),l.destroy();return}if(_.key==="Escape"){mt?(mt=null,k()):Xe()?(le(),k()):st||Ce?(st=!1,Ce=null,k()):F?(F=!1,k()):je?(je=!1,k()):Z&&(Z=!1,k());return}if(_.key==="Tab"&&Xe()){const U=e.querySelector(".dep-modal-card");if(!U)return;const Q=Array.from(U.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])')).filter(Oe=>Oe.offsetParent!==null);if(Q.length===0)return;const X=Q[0],$e=Q[Q.length-1];_.shiftKey&&document.activeElement===X?(_.preventDefault(),$e.focus()):!_.shiftKey&&document.activeElement===$e&&(_.preventDefault(),X.focus())}},Pa=_=>{if(!document.body.contains(e)){document.removeEventListener("click",Pa);return}const U=_.target;st&&!U?.closest(".dep-more-wrap")&&(st=!1,k()),Ce&&!U?.closest(".dep-row-menu-wrap")&&(Ce=null,k()),F&&!U?.closest('[data-role="global-space-wrap"]')&&(F=!1,k())};document.addEventListener("keydown",Sa),document.addEventListener("click",Pa);function Ea(){const _=e.querySelector('[data-role="dep-viewport"]');_&&(_.style.transform=`translate(${ct}px, ${Je}px) scale(${ke})`);const U=e.querySelector('[data-role="dep-zoom-label"]');U&&(U.textContent=`${Math.round(ke*100)}%`)}function ts(_){C="";const U=t.mode==="demo";_.hardwareBinding?_.connectivity!=="online"?C=`单机自检未通过（FAIL）：「${_.name}」当前${_.connectivity==="unknown"?"待入网":"离线"}，请核查网关链路或现场供电。`:K(U?`演示单机回读自检通过（PASS）：「${_.name}」模拟状态校验一致。`:`单机回读自检通过（PASS）：「${_.name}」指令下发与状态回读一致，已安全复位。`):C=`单机自检未通过（FAIL）：「${_.name}」尚未完成硬件绑定（当前待入网），请先填写协议、地址与上游网关后再执行自检。`,k()}async function as(_){C="";const U=t.mode==="demo",Q=c.floors.find(i=>i.id===_)?.name??"当前楼层",X=O.get(_)??(_===j?S:[]);if(X.length===0){C=`${Q} 尚无登记设备，无法执行全层自检。`,k();return}if(se[_]?.dirty){C=`${Q} 存在未下发的配置变更，请先前往「设备网络」同步至边缘网关后再执行全层自检。`,k();return}if(D[_]){C=`${Q} 更换底图后尚未确认点位核对，请先在「设备标记」核对并确认点位后再执行全层自检。`,k();return}const $e=X.filter(i=>i.connectivity!=="online"||!i.hardwareBinding),Oe=X.length-$e.length,Ve=new Date,Pe=`${String(Ve.getHours()).padStart(2,"0")}:${String(Ve.getMinutes()).padStart(2,"0")}:${String(Ve.getSeconds()).padStart(2,"0")}`;if(Re={buildingId:A,floorId:_,ranAt:Pe,floorName:Q,total:X.length,passed:Oe,failed:$e.length,failedNames:$e.map(i=>`${i.name}${i.hardwareBinding?i.connectivity==="unknown"?"（待入网）":"（离线）":"（未绑定/待入网）"}`)},$e.length>0)C=`${Q} 全层批量自检完成：${Oe}/${X.length} 台通过，${$e.length} 台异常（${Re.failedNames.join("、")}）。`;else{if(t.recordFloorFttPass){const i=await t.recordFloorFttPass(_,X.length).catch(()=>null);i&&(H[_]=i)}y=U?`${Q} 演示全层自检通过（${Oe}/${X.length}），已签发当前配置基线自检凭证。`:`${Q} 全层批量自检全部通过（${Oe}/${X.length}），设备已自动安全复位。`}k()}function Ws(){const _=S.filter(Vt),U=[],Q=_.filter(Pe=>Pe.connectivity==="offline"),X=_.filter(Pe=>!Pe.planPoint),$e=_.filter(Pe=>B[Pe.id]?.proxy).length,Oe=_.filter(Pe=>B[Pe.id]?.relay).length,Ve=_.length?Oe/_.length:0;_.length===0?U.push({level:"warn",title:"本层暂无蓝牙 Mesh 无线节点",detail:"可在「设备标记」中新增网关、传感器或照明面板。"}):Q.length>0?Q.forEach(Pe=>U.push({level:"fail",title:`无线节点不可达：${Pe.name}`,detail:"建议核查供电及网关距离，必要时在遮挡拐角处增设中继器。",deviceId:Pe.id})):U.push({level:"ok",title:"蓝牙 Mesh 节点全部可达",detail:`${_.length} 台无线节点均正常响应心跳。`}),_.length>0&&$e<1?U.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，便于移动端就近入网。"}):$e>0&&U.push({level:"ok",title:`代理节点配置合理（${$e} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),Ve>.25&&_.length>=4&&U.push({level:"warn",title:`中继比例偏高（${Math.round(Ve*100)}%）`,detail:"建议将 Relay 中继控制在总节点 10% 左右，避免广播风暴。"}),X.length>0&&U.push({level:"warn",title:`尚有 ${X.length} 台无线节点未完成设备标记`,detail:"请前往「设备标记」补齐平面坐标以便现场施工定位。"}),xe=U,y=`已完成无线蓝牙 Mesh 网络体检（检测 ${_.length} 台节点，发现 ${U.filter(Pe=>Pe.level!=="ok").length} 项关注）。`,k()}function Gs(){const _=Oe=>`"${String(Oe).replaceAll('"','""')}"`;if(v==="acceptance"){const Oe=ns(),Ve=c.buildings.find(L=>L.id===A),Pe=A?Fe(A):[],i=[`[楼层部署门控汇总 - ${Ve?.name??"当前楼宇"}]`,["楼层","底图状态","设备标记","绑定与物理复核","在线入网","边缘同步","自检FTT","交付状态","阻止项"].join(","),...Pe.map(L=>{const I=ya(Oe,L.id);return[L.name,I.planAlert?"换图待核对":I.hasPlan?`已就绪(v${L.plan?.planVersion??1})`:"待传底图",`${I.placedCount}/${I.deviceCount}`,`${I.boundVerifiedCount}/${I.deviceCount}`,`${I.onlineCount}/${I.deviceCount}`,I.deferred?"本期不纳入":I.deviceCount===0?"未部署":I.syncDirty?"待同步":"已同步",I.deferred?"不适用":I.deviceCount===0?"未部署":I.fttRecord?"已通过":"未自检",I.deferred?"本期不纳入":I.readyForFormalFreeze?"可正式冻结":I.deviceCount>0?"实施中":"待配置",I.blockers.join(" / ")||"无"].map(_).join(",")}),"","[整栋设备部署明细]",["楼层","设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...Pe.flatMap(L=>(O.get(L.id)??[]).map(I=>[L.name,I.name,I.category,Ye(I.logicalZoneId),I.planPoint?`${Math.round(I.planPoint.x*100)}%/${Math.round(I.planPoint.y*100)}%`:"未标记",I.hardwareBinding?`${I.hardwareBinding.protocol} ${I.hardwareBinding.networkAddress}`:"未绑定",I.physicalInstalled?"已复核":"待复核",I.connectivity==="online"?"在线":"离线"].map(_).join(","))),"","[交付冻结与阶段留档记录]",["版本标签","所属楼层","核验进度","状态","记录人","时间","备注"].join(","),...Y.map(L=>[L.versionTag,c.floors.find(I=>I.id===L.floorId)?.name??L.floorId,`${L.verifiedCount}/${L.deviceCount}`,L.status==="draft"?"阶段留档":L.status==="delivered"?"已交付":"已冻结",L.frozenBy,L.frozenAt,L.note??""].map(_).join(","))],r=new Blob([`\uFEFF${i.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),u=URL.createObjectURL(r),f=document.createElement("a");f.href=u,f.download=`pacom-deployment-checklist-${Ve?.name??"building"}.csv`,f.click(),URL.revokeObjectURL(u);return}const U=[["楼层","设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...S.map(Oe=>[c.floors.find(Ve=>Ve.id===Oe.floorId)?.name??Oe.floorId,Oe.name,Oe.category,Ye(Oe.logicalZoneId),Oe.planPoint?`${Math.round(Oe.planPoint.x*100)}%/${Math.round(Oe.planPoint.y*100)}%`:"未标记",Oe.hardwareBinding?`${Oe.hardwareBinding.protocol} ${Oe.hardwareBinding.networkAddress}`:"未绑定",Oe.physicalInstalled?"已复核":"待复核",Oe.connectivity==="online"?"在线":"离线"].map(_).join(","))],Q=new Blob([`\uFEFF${U.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),X=URL.createObjectURL(Q),$e=document.createElement("a");$e.href=X,$e.download="pacom-device-list.csv",$e.click(),URL.revokeObjectURL(X)}async function Zs(_){const U=c.buildings.find(X=>X.id===_);if(!U||!t.upsertFloor)return 0;const Q=Ba(U,Fe(U.id));for(const X of Q)await t.upsertFloor({buildingId:U.id,kind:X.kind,level:X.level,name:X.name});return Q.length}function Ks(_,U){const Q=i=>`"${String(i).replaceAll('"','""')}"`,X=_.status==="draft"?"阶段留档":_.status==="delivered"?"已交付":"已冻结",$e=[`[PACOM Station 单批交付快照 - ${_.versionTag}]`,["版本标签","状态","所属楼层","底图版本","边缘基线","核验进度","冻结人","冻结时间","签收人","签收时间","备注"].join(","),[_.versionTag,X,U.floorName,U.planVersion>0?`v${U.planVersion}`:"无底图",`v${U.edgeSyncVersion}`,`${_.verifiedCount}/${_.deviceCount}`,_.frozenBy,_.frozenAt,U.signedOffBy??"—",U.signedOffAt??"—",U.signOffNote??_.note??""].map(Q).join(","),"","[逐设备核验快照]",["设备名称","类别","功能区","已标记","硬件绑定","物理复核","连通状态"].join(","),...U.devices.map(i=>[i.name,i.category,i.zoneLabel,i.placed?"已标记":"未标记",i.bound?`${(i.protocol??"").toUpperCase()} ${i.address??""}`:"未绑定",i.physicalInstalled?"已复核":"待复核",i.connectivity==="online"?"在线":i.connectivity==="unknown"?"待入网":"离线"].map(Q).join(","))],Oe=new Blob([`\uFEFF${$e.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),Ve=URL.createObjectURL(Oe),Pe=document.createElement("a");Pe.href=Ve,Pe.download=`pacom-snapshot-${_.versionTag}.csv`,Pe.click(),URL.revokeObjectURL(Ve)}function Ys(_){const U=A?Fe(A):[],Q=U.filter(me=>!!me.plan).length,X=S.filter(me=>!me.planPoint).length,$e=S.filter(me=>!me.physicalInstalled).length,Oe=S.filter(me=>Vt(me)&&me.connectivity==="offline").length,Ve=ce.filter(me=>me.status==="connected").length,Pe=ce.some(me=>me.status!=="connected"),i=U.filter(me=>!fe.has(me.id)||(O.get(me.id)?.length??0)>0),r=i.filter(me=>ya(_,me.id).readyForFormalFreeze||Y.some(Ze=>Ze.floorId===me.id&&Ze.status==="delivered")).length,u=(me,Ge,Ze,He="",et)=>`
      <button type="button" class="pacom-unified-item" aria-current="${v===me}" data-dep-nav="${me}">
        ${re(Ge,16)}
        <span>${Ze}</span>
        ${He||et?`<span class="dep-nav-meta">
                 ${He?`<span>${s(He)}</span>`:""}
                 ${et?`<span class="dep-nav-pip dep-nav-pip--${et}" aria-hidden="true"></span>`:""}
               </span>`:""}
      </button>`,f=U.length===0?void 0:Q===U.length?"ok":"warn",L=D[j]||X>0?"warn":S.length>0?"ok":void 0,I=Oe>0?"crit":G.dirty?"warn":S.length>0?"ok":void 0,z=ce.length===0?void 0:Pe?"crit":"ok",Ee=i.length===0?void 0:r===i.length?"ok":void 0;return`
      <aside class="pacom-unified-rail" aria-label="系统部署菜单">
        <div class="pacom-unified-group">
          <div class="pacom-unified-group-title">空间建档</div>
          ${u("project_config","layers","项目配置",U.length>0?`${Q}/${U.length}`:"",f)}
        </div>
        <div class="pacom-unified-group">
          <div class="pacom-unified-group-title">设备部署</div>
          ${u("device_marking","map-pin","设备标记",S.length>0?`${S.length}`:"",L)}
          ${u("device_list","list","设备列表",$e>0?`待复核 ${$e}`:"",$e>0?"warn":void 0)}
          ${u("device_groups","folder-kanban","设备分组",de.length>0?`${de.length}`:"")}
          ${u("device_network","waypoints","设备网络",G.dirty?"待同步":"",I)}
        </div>
        <div class="pacom-unified-group">
          <div class="pacom-unified-group-title">接入与验收</div>
          ${u("connections","plug","系统接入",ce.length>0?`${Ve}/${ce.length}`:"",z)}
          ${u("acceptance","clipboard-check","交付验收",i.length>0?`${r}/${i.length}`:"",Ee)}
        </div>
      </aside>
    `}function ss(_){if(c.projects.length===0)return`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${Rt(_,o.spatial,"待后端空间建档接口对接")}>+ 新建项目</button>`;if(v==="project_config"){if(x!=="overview")return"";const X=Rt(_,o.spatial,"待后端空间建档接口对接"),$e=c.buildings.some(Oe=>Oe.projectId===b);return`
        <button type="button" class="pacom-btn" data-open-new-proj="1" ${X}>+ 新建项目</button>
        ${$e?`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-bld="1" ${X}>+ 新建楼宇</button>`:""}
      `}if(v==="device_marking")return`
        <button type="button" class="pacom-btn" data-export-inv="1">导出标记表</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-dev="1" ${Rt(_,o.createDevice,"待后端设备建档接口对接")}>+ 新增设备</button>
      `;if(v==="device_list")return`
        <button type="button" class="pacom-btn" data-export-inv="1">导出 CSV</button>
        <button type="button" class="pacom-btn" data-batch-ftt="1" ${S.length===0?"disabled":""}>全层自检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-dev="1" ${Rt(_,o.createDevice,"待后端设备建档接口对接")}>+ 新增设备</button>
      `;if(v==="device_groups")return`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-group="1" ${Rt(_,o.deviceGroups,"待后端设备分组接口对接")}>+ 新建分组</button>`;if(v==="device_network")return`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${Rt(_,o.edgeSync,"待后端边缘同步接口对接")}>${G.dirty?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `;if(v==="connections"){const X=Rt(_,o.restartEdge,"待后端边缘维护接口对接");return`
        <div class="dep-more-wrap">
          <button type="button" class="pacom-square-icon-btn" data-toggle-conn-more="1" aria-haspopup="menu" aria-expanded="${st}" aria-label="更多操作" title="更多操作">${re("more-horizontal",16)}</button>
          ${st?`<div class="dep-more-menu" role="menu">
                   <button type="button" class="dep-more-item dep-more-item--danger" role="menuitem" data-req-restart-edge="1" ${X}>
                     ${re("rotate-ccw",14)}
                     <span>重启边缘服务</span>
                   </button>
                 </div>`:""}
        </div>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-conn="1" ${Rt(_,o.manageConnections,"待后端系统接入写入接口对接")}>+ 新增接入通道</button>
      `}const Q=(A?Fe(A):[]).reduce((X,$e)=>X+(O.get($e.id)?.length??0),0);return`
      <button type="button" class="pacom-btn" data-export-inv="1">导出部署清单</button>
      <button type="button" class="pacom-btn pacom-btn--primary" data-open-freeze-modal="1" ${!_||Q===0?`disabled title="${_?"本栋尚无已登记设备，请先前往设备标记":"当前角色为只读权限"}"`:""}>交付冻结</button>
    `}function ns(){return{session:n,canEdit:n.scope.canEditDeployment,isDemoMode:t.mode==="demo",caps:o,tree:c,activeNav:v,projectDrill:x,activeProjectId:b,activeBuildingId:A,activeFloorId:j,floorDevices:S,buildingDevicesByFloor:O,lightMarkers:V,meshRoles:B,edgeSync:G,edgeSyncByFloor:se,deviceParams:he,groups:de,floorDocs:ee,connections:ce,buildingDeliveries:Y,planChangeAlerts:D,floorFttRecords:H,deferredFloorIds:fe,zoneBoxes:be,floorListFilter:$,floorListSearch:N,batchAreaOpen:ne,floorDetailTab:ze,editingZoneId:tt,canvasBrush:ot,canvasSearch:Ne,canvasNotice:te,deviceFilter:M,hudPoolOpen:q,drawerOpen:Z,drawerTab:pe,selectedId:ie,bindingDraft:Ie,editingDeviceMeta:Qe,placingMode:je,zoom:ke,panX:ct,panY:Je,listSearch:ft,listStatusFilter:m,listCategoryFilter:R,topoMode:ue,meshFindings:xe,connViewMode:at,connSearch:We,connStatusFilter:Ke,expandedConnId:Ue,selectedTopoConnId:Te,connMenuOpenId:Ce,copiedEndpointId:ut,connMoreOpen:st,acceptanceFilter:wa,showEmptyBuildingMatrix:da,batchFttResult:Re,modalError:ge,returnTrail:dt,showNewProjectModal:St,projFormDraft:jt,newProjCoverDataUrl:ea,showEditProjectModal:ta,showNewBuildingModal:It,bldFormDraft:Ht,newBldImageDataUrl:Wt,editingBuildingId:Et,showNewFloorModal:aa,floorFormDraft:pa,showBatchModal:Mt,batchDropActive:qt,pendingBatchUploads:kt,copyZoneSourceFloorId:Gt,copyTargetFloorIds:bt,showNewDevModal:xt,groupModal:lt,connModal:Zt,connFormDraft:Kt,showFreezeModal:Ot,freezeTargetFloorId:Tt,snapshotDetailModal:ht,planSwapReviewFloorId:sa,confirmDialog:vt,lightboxPlan:mt,sortedBuildingFloors:Fe,getZoneLabel:Ye}}function k(){oe(),l.close();const _=ns(),{canEdit:U}=_,Q=n.scope.activeOverrides.find(i=>i.module==="deployment"&&i.status==="active"),X=Q?`<div class="pacom-banner pacom-banner--ok">
          <div class="pacom-banner-text">
            <span class="pacom-banner-title">临时提权生效中（系统部署 ｜ ${Q.durationHours}h）</span>
            <span class="pacom-banner-sub">审批人：${s(Q.approvedBy)} ｜ 到期自动收回：${s(Q.expiresAt.slice(0,16).replace("T"," "))} ｜ 事由：${s(Q.reason)}</span>
          </div>
        </div>`:"",$e=gn[v],Oe=v==="device_marking",Ve=v==="project_config"&&x!=="overview",Pe=!Oe&&v!=="device_list";e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${Oa({tree:c,session:n,scope:E,maxGranularity:$e.granularity,isOpen:F,searchKeyword:g})}
            </div>
            <div class="pacom-header-meta">
              ${U?Q?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${Ys(_)}
          ${Oe?`<div class="pacom-unified-main--canvas">
                  <div class="dep-canvas-topbar">
                    <div class="pacom-unified-head-copy">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <h2 class="pacom-unified-title">${$e.title}</h2>
                        ${dt?`<button type="button" class="dep-return-pill" data-return-trail="1">${re("arrow-left",14)}<span>返回${s(dt.label)}</span></button>`:""}
                      </div>
                      <p class="pacom-unified-subtitle">${$e.subtitle}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${ss(U)}
                    </div>
                  </div>
                  ${X}
                  ${C?`<div class="pacom-alert-banner">${s(C)}</div>`:""}
                  ${kn(_)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner ${Pe?"pacom-unified-inner--reading":""}">
                  ${Ve?"":`<div class="pacom-unified-head pacom-unified-head--split">
                          <div class="pacom-unified-head-copy">
                            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                              <h2 class="pacom-unified-title">${$e.title}</h2>
                              ${dt&&v==="device_list"?`<button type="button" class="dep-return-pill" data-return-trail="1">${re("arrow-left",14)}<span>返回${s(dt.label)}</span></button>`:""}
                            </div>
                            <p class="pacom-unified-subtitle">${$e.subtitle}</p>
                          </div>
                          <div class="pacom-unified-head-actions">
                            ${ss(U)}
                          </div>
                        </div>`}
                  ${X}
                  ${y?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${s(y)}</span></div>`:""}
                  ${C?`<div class="pacom-alert-banner">${s(C)}</div>`:""}
                  ${v==="project_config"?Ln(_):v==="device_list"?An(_):v==="device_groups"?Dn(_):v==="device_network"?_n(_):v==="connections"?Sn(_):En(_)}
                </div>
              </div>`}
        </div>
      </div>
      ${xn(_)}
    `,Qs(),l.bind(e)}async function Js(_){try{if(_.kind==="delete_project"){const U=c.projects.find(Q=>Q.id===_.projectId);await t.deleteProject?.(_.projectId),le(),x="overview",y=`已删除项目「${U?.name??_.projectId}」。`,await qe()}else if(_.kind==="delete_building"){const U=c.buildings.find(Q=>Q.id===_.buildingId);await t.deleteBuilding?.(_.buildingId),le(),x="overview",y=`已删除楼宇「${U?.name??_.buildingId}」。`,await qe()}else if(_.kind==="delete_floor"){const U=c.floors.find(Q=>Q.id===_.floorId);await t.deleteFloor?.(_.floorId),le(),x="building",y=`已删除楼层「${U?.name??_.floorId}」。`,await qe()}else if(_.kind==="clear_floor_plan"){const U=c.floors.find(Q=>Q.id===_.floorId);U&&await t.upsertFloor?.({id:U.id,buildingId:U.buildingId,kind:U.kind,level:U.level,name:U.name,areaSqm:U.areaSqm,planImageUrl:null}),le(),y=`已清空「${U?.name??""}」平面底图。`,await qe()}else if(_.kind==="delete_zone"){const U=c.zones.find(Q=>Q.id===_.zoneId);await t.deleteZone?.(_.zoneId),tt===_.zoneId&&(tt=null),le(),y=`已删除功能区「${U?.name??""}」。`,await qe()}else if(_.kind==="delete_doc"){const U=ee.find(Q=>Q.id===_.docId);await t.deleteFloorDoc?.(_.docId),le(),y=`已移除工程资料「${U?.name??""}」。`,await ae(),k()}else if(_.kind==="delete_device"){const U=S.find(Q=>Q.id===_.deviceId);await t.deleteDeploymentDevice?.(_.deviceId),ie===_.deviceId&&(ie=null,Z=!1,Qe=!1,Ie=null),le(),y=`已删除设备「${U?.name??""}」（关联分组与灯点已同步清理）。`,await Me(),await ae(),k()}else if(_.kind==="delete_group"){const U=de.find(Q=>Q.id===_.groupId);await t.deleteDeviceGroup?.(_.groupId),le(),y=`已删除设备分组「${U?.name??""}」。`,await ae(),k()}else if(_.kind==="delete_connection"){const U=ce.find(Q=>Q.id===_.connectionId);await t.deleteConnection?.(_.connectionId),le(),y=`已删除接入通道「${U?.name??""}」。`,ce=b?await t.listConnections(b).catch(()=>[]):[],k()}else _.kind==="restart_edge"&&(await t.restartEdgeService?.(_.projectId),le(),y="已下发「重启边缘服务」指令，边缘网关将在 5 秒内平滑重连。",k())}catch(U){le(),C=U instanceof Error?U.message:String(U),k()}}function Qs(){Ta(e,{onToggle:()=>{F=!F,k(),F&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:i=>{g=i,k();const r=e.querySelector("[data-global-space-search]");r&&(r.focus(),r.setSelectionRange(i.length,i.length))},onPick:async i=>{if(E=i,F=!1,y="",C="",i.level==="project"){const r=i.projectId!==b;b=i.projectId,v==="project_config"&&r&&(x="overview");const u=c.buildings.find(f=>f.projectId===i.projectId);u?(A=u.id,j=Fe(u.id)[0]?.id??""):(A="",j=""),ce=await t.listConnections(b).catch(()=>[]),await Me(),await ae()}else if(i.level==="building")ye(i.buildingId),await Me(),await ae();else if(i.level==="floor"){const r=c.floors.find(u=>u.id===i.floorId)?.buildingId!==A;Ae(i.floorId),r&&await Me(),await ae()}k()}}),e.querySelectorAll("[data-dep-nav]").forEach(i=>{i.addEventListener("click",async()=>{const r=i.dataset.depNav??"project_config";v=r,r==="project_config"&&(x="overview"),Z=!1,je=!1,st=!1,Ce=null,dt=null,y="",te="",C="",r==="acceptance"&&await Me(),Be(),await ae(),k()})}),e.querySelector("[data-return-trail]")?.addEventListener("click",async()=>{if(!dt)return;const i=dt.nav;dt=null,v=i,y="",te="",C="",i==="acceptance"&&await Me(),await ae(),k()}),e.querySelector("[data-dismiss-canvas-notice]")?.addEventListener("click",()=>{te="",k()}),e.querySelector("[data-batch-fill-area]")?.addEventListener("click",()=>{ne=!ne,k()}),e.querySelector("[data-close-batch-area]")?.addEventListener("click",()=>{ne=!1,k()}),e.querySelector("[data-apply-batch-area]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget,u=r.dataset.applyBatchArea,f=Number(new FormData(r).get("batchStdArea")??0);if(!Number.isFinite(f)||f<=0)return;const L=Fe(u).filter(I=>!I.areaSqm);try{for(const I of L)await t.upsertFloor?.({id:I.id,buildingId:I.buildingId,kind:I.kind,level:I.level,name:I.name,areaSqm:f});ne=!1,y=`已为 ${L.length} 个空缺楼层批量填入标准层面积 ${f} m²。`,await qe()}catch(I){C=I instanceof Error?I.message:String(I),k()}}),e.querySelectorAll("[data-drill-building]").forEach(i=>{const r=async()=>{const u=i.dataset.drillBuilding;u&&(ye(u),$="all",N="",x="building",await Me(),await ae(),k())};i.addEventListener("click",u=>{u.target?.closest("button, label, input")||r()}),i.addEventListener("keydown",u=>{(u.key==="Enter"||u.key===" ")&&u.target===i&&(u.preventDefault(),r())})}),e.querySelectorAll("[data-proj-drill]").forEach(i=>{i.addEventListener("click",()=>{x=i.dataset.projDrill??"overview",tt=null,y="",C="",k()})}),e.querySelector("[data-switch-drill-building]")?.addEventListener("change",async i=>{const r=i.currentTarget.value;r&&(ye(r),$="all",N="",await Me(),await ae(),k())});const _=async i=>{i&&(Ae(i),x="floor",await ae(),k())};e.querySelectorAll("[data-drill-floor]").forEach(i=>{i.addEventListener("click",r=>{if(r.target?.closest("button, label, input, [data-stop-row]"))return;const u=i.dataset.drillFloor;u&&_(u)})}),e.querySelectorAll("[data-drill-floor-btn]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const u=i.dataset.drillFloorBtn;u&&_(u)})}),e.querySelector("[data-switch-drill-floor]")?.addEventListener("change",i=>{const r=i.currentTarget.value;r&&_(r)}),e.querySelectorAll("[data-floor-list-filter]").forEach(i=>{i.addEventListener("click",()=>{$=i.dataset.floorListFilter??"all",k()})}),e.querySelector("[data-floor-list-search]")?.addEventListener("input",i=>{N=i.currentTarget.value,k();const r=e.querySelector("[data-floor-list-search]");r&&(r.focus(),r.setSelectionRange(N.length,N.length))}),e.querySelectorAll("[data-floor-detail-tab]").forEach(i=>{i.addEventListener("click",()=>{ze=i.dataset.floorDetailTab??"zones",k()})}),e.querySelectorAll("[data-jump-floor-marking]").forEach(i=>{i.addEventListener("click",async r=>{r.stopPropagation();const u=i.dataset.jumpFloorMarking;u&&Ae(u),v="device_marking",await ae(),k()})}),e.querySelector("[data-jump-floor-config]")?.addEventListener("click",async i=>{const r=i.currentTarget.dataset.jumpFloorConfig;r&&Ae(r),v="project_config",x=r?"floor":"overview",await ae(),k()}),e.querySelectorAll("[data-close-modals]").forEach(i=>{i.addEventListener("click",()=>{le(),k()})}),e.querySelectorAll("[data-modal-scrim]").forEach(i=>{i.addEventListener("click",r=>{r.target===i&&(le(),k())})}),e.querySelector("[data-confirm-dialog-ok]")?.addEventListener("click",()=>{vt&&Js(vt.action)}),e.querySelectorAll("[data-open-new-proj]").forEach(i=>{i.addEventListener("click",()=>{le(),St=!0,k()})}),e.querySelector("[data-open-edit-proj]")?.addEventListener("click",()=>{le(),ta=!0,k()}),e.querySelectorAll("[data-open-new-bld]").forEach(i=>{i.addEventListener("click",()=>{le(),It=!0,k()})}),e.querySelectorAll("[data-edit-building]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation(),le(),Et=i.dataset.editBuilding??null,k()})}),e.querySelector("[data-open-new-floor]")?.addEventListener("click",()=>{le(),aa=!0,k()}),e.querySelector("[data-open-batch-modal]")?.addEventListener("click",()=>{le(),Mt=!0,k()}),e.querySelectorAll("[data-open-new-dev]").forEach(i=>{i.addEventListener("click",()=>{le(),xt=!0,k()})}),e.querySelector("[data-open-new-group]")?.addEventListener("click",()=>{le(),lt={mode:"create",track:"mesh_auto",draftName:"",draftType:Qa.mesh_auto[0],draftMemberIds:[]},k()}),e.querySelectorAll("[data-edit-group]").forEach(i=>{i.addEventListener("click",()=>{const r=de.find(u=>u.id===i.dataset.editGroup);r&&(le(),lt={mode:"edit",groupId:r.id,track:r.track,draftName:r.name,draftType:r.groupType,draftMemberIds:[...r.deviceIds]},k())})}),e.querySelector("[data-group-draft-name]")?.addEventListener("input",i=>{lt&&(lt.draftName=i.currentTarget.value)}),e.querySelector("[data-group-draft-type]")?.addEventListener("change",i=>{lt&&(lt.draftType=i.currentTarget.value)}),e.querySelectorAll("[data-group-draft-member]").forEach(i=>{i.addEventListener("change",()=>{if(!lt)return;const r=new Set(lt.draftMemberIds);i.checked?r.add(i.value):r.delete(i.value),lt.draftMemberIds=Array.from(r)})}),e.querySelector("[data-group-modal-track]")?.addEventListener("change",i=>{if(!lt)return;const r=i.currentTarget.value??"mesh_auto",u=Qa[r],f=u.includes(lt.draftType)?lt.draftType:u[0],L=new Set((r==="mesh_auto"?S.filter(Vt):S).map(I=>I.id));lt={...lt,track:r,draftType:f,draftMemberIds:lt.draftMemberIds.filter(I=>L.has(I))},k()}),e.querySelector("[data-open-new-conn]")?.addEventListener("click",()=>{le(),st=!1,Ce=null,Zt={mode:"create",fromProjectLevel:!0},k()}),e.querySelectorAll("[data-edit-conn]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.editConn;r&&(le(),Ce=null,Zt={mode:"edit",connectionId:r},k())})}),e.querySelector("[data-open-freeze-modal]")?.addEventListener("click",()=>{le();const i=A?Fe(A):[];Tt=i.find(u=>(O.get(u.id)?.length??0)>0)?.id??j??i[0]?.id??"",Ot=!0,k()}),e.querySelectorAll("[data-open-freeze-floor]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.openFreezeFloor??"";le(),Tt=r||j,Ot=!0,k()})}),e.querySelector("[data-freeze-floor-select]")?.addEventListener("change",i=>{Tt=i.currentTarget.value,k()}),e.querySelector("[data-stage-new-proj-cover]")?.addEventListener("change",async i=>{const r=i.currentTarget.files?.[0];if(r)try{ea=await oa(r,1400,.82),k()}catch(u){ge=u instanceof Error?u.message:String(u),k()}}),e.querySelector("[data-stage-new-bld-img]")?.addEventListener("change",async i=>{const r=i.currentTarget.files?.[0];if(r)try{Wt=await oa(r,1200,.84),k()}catch(u){ge=u instanceof Error?u.message:String(u),k()}}),e.querySelector("[data-create-project]")?.addEventListener("submit",async i=>{i.preventDefault();const r=new FormData(i.currentTarget),u=String(r.get("pName")??"").trim(),f=String(r.get("pCity")??"").trim(),L=String(r.get("pAddr")??"").trim(),I=String(r.get("pLng")??"").trim(),z=String(r.get("pLat")??"").trim();if(jt={name:u,city:f,address:L,lng:I,lat:z},!u)return;let Ee;if(!!I!=!!z){ge="经度和纬度需同时填写或同时留空，不可仅填写单边坐标。",k(),e.querySelector('[data-create-project] input[name="pLat"]')?.focus();return}if(I&&z){const me=Number(I),Ge=Number(z);if(!Number.isFinite(me)||!Number.isFinite(Ge)||me<-180||me>180||Ge<-90||Ge>90){ge="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",k(),e.querySelector('[data-create-project] input[name="pLng"]')?.focus();return}Ee={lng:me,lat:Ge,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{const me=await t.createProject?.({name:u,city:f,address:L,location:Ee,imageUrl:ea??void 0});le(),v="project_config",x="overview",me&&(b=me.id,A="",j="",E=Ft({level:"project",projectId:me.id})),y=`已创建项目「${u}」，下一步可添加园区楼宇。`,await qe()}catch(me){ge=me instanceof Error?me.message:String(me),k()}}),e.querySelector("[data-save-project]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget,u=r.dataset.saveProject??b,f=new FormData(r),L=String(f.get("pName")??"").trim(),I=String(f.get("pCity")??"").trim(),z=String(f.get("pAddr")??"").trim(),Ee=String(f.get("pLng")??"").trim(),me=String(f.get("pLat")??"").trim();jt={name:L,city:I,address:z,lng:Ee,lat:me};let Ge;if(!!Ee!=!!me){ge="经度和纬度需同时填写或同时留空，不可仅填写单边坐标。",k(),e.querySelector('[data-save-project] input[name="pLat"]')?.focus();return}if(Ee&&me){const Ze=Number(Ee),He=Number(me);if(!Number.isFinite(Ze)||!Number.isFinite(He)||Ze<-180||Ze>180||He<-90||He>90){ge="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",k(),e.querySelector('[data-save-project] input[name="pLng"]')?.focus();return}Ge={lng:Ze,lat:He,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{await t.updateProject?.(u,{name:L,city:I,address:z,location:Ge}),le(),y=`已保存项目「${L||"当前项目"}」信息。`,await qe()}catch(Ze){ge=Ze instanceof Error?Ze.message:String(Ze),k()}}),e.querySelector("[data-upload-proj]")?.addEventListener("change",async i=>{const r=i.currentTarget,u=r.dataset.uploadProj,f=r.files?.[0];if(!(!u||!f))try{const L=await oa(f,1400,.82);await t.updateProject?.(u,{imageUrl:L}),y=`已更新项目封面图（${f.name}）。`,await qe()}catch(L){ge=L instanceof Error?L.message:String(L),k()}}),e.querySelector("[data-delete-proj]")?.addEventListener("click",i=>{const r=i.currentTarget.dataset.deleteProj,u=c.projects.find(f=>f.id===r);!r||!u||(le(),vt={title:`删除项目「${u.name}」`,body:"将同时移除该项目下的全部楼宇、楼层与功能区配置，此操作不可撤销。确认继续吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_project",projectId:r}},k())}),e.querySelector("[data-create-bld]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget,u=r.dataset.createBld??b,f=new FormData(r),L=String(f.get("bName")??"").trim(),I=String(f.get("bArea")??"").trim(),z=String(f.get("bStdFloorArea")??"").trim(),Ee=String(f.get("bAbove")??"12"),me=String(f.get("bBelow")??"0"),Ge=Math.max(1,Number(Ee)),Ze=Math.max(0,Number(me)),He=!!f.get("bRoof"),et=!!f.get("bAutoFloors");if(Ht={name:L,area:I,stdFloorArea:z,above:Ee,below:me,hasRoof:He,autoFloors:et},!L)return;const $t=z&&Number(z)>0?Number(z):null;try{const At=await t.upsertBuilding?.({projectId:u,name:L,aboveFloors:Ge,belowFloors:Ze,hasRoof:He,areaSqm:I?Number(I):null,imageUrl:Wt??void 0});le();let xa=0;if(At&&(A=At.id,et)){for(let Dt=1;Dt<=Ge;Dt+=1)await t.upsertFloor?.({buildingId:At.id,kind:"above",level:Dt,name:`${Dt}F`,areaSqm:$t}),xa+=1;for(let Dt=1;Dt<=Ze;Dt+=1)await t.upsertFloor?.({buildingId:At.id,kind:"below",level:-Dt,name:`B${Dt}`,areaSqm:$t}),xa+=1;He&&(await t.upsertFloor?.({buildingId:At.id,kind:"roof",level:99,name:"RF"}),xa+=1),x="building"}y=et?`已创建楼宇「${L}」并自动生成 ${xa} 个楼层${$t?`（已预填标准层 ${$t} m²）`:""}，现可直接批量导入平面底图。`:`已创建楼宇「${L}」。`,await qe()}catch(At){ge=At instanceof Error?At.message:String(At),k()}}),e.querySelector("[data-save-building]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget,u=r.dataset.saveBuilding,f=c.buildings.find(Ze=>Ze.id===u);if(!f)return;const L=new FormData(r),I=String(L.get("bName")??"").trim()||f.name,z=String(L.get("bArea")??"").trim(),Ee=Math.max(1,Number(L.get("bAbove")??f.aboveFloors)),me=Math.max(0,Number(L.get("bBelow")??f.belowFloors)),Ge=!!L.get("bRoof");try{await t.upsertBuilding?.({id:u,projectId:f.projectId,name:I,aboveFloors:Ee,belowFloors:me,hasRoof:Ge,areaSqm:z?Number(z):null}),le(),y=`已保存楼宇「${I}」参数。`,await qe()}catch(Ze){C=Ze instanceof Error?Ze.message:String(Ze),k()}}),e.querySelector("[data-delete-building]")?.addEventListener("click",i=>{const r=i.currentTarget.dataset.deleteBuilding,u=c.buildings.find(f=>f.id===r);!r||!u||(le(),vt={title:`删除楼宇「${u.name}」`,body:"将同步删除该楼宇下的全部楼层底图与功能区配置，此操作不可撤销。确认继续吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_building",buildingId:r}},k())}),e.querySelector("[data-upload-bld]")?.addEventListener("change",async i=>{const r=i.currentTarget,u=r.dataset.uploadBld,f=r.files?.[0],L=c.buildings.find(I=>I.id===u);if(!(!u||!f||!L))try{const I=await oa(f,1200,.84);await t.upsertBuilding?.({id:L.id,projectId:L.projectId,name:L.name,aboveFloors:L.aboveFloors,belowFloors:L.belowFloors,hasRoof:L.hasRoof,areaSqm:L.areaSqm,imageUrl:I}),y=`已更新「${L.name}」外观图（${f.name}）。`,await qe()}catch(I){ge=I instanceof Error?I.message:String(I),k()}}),e.querySelectorAll("[data-fill-missing-floors]").forEach(i=>{i.addEventListener("click",async r=>{r.stopPropagation();const u=i.dataset.fillMissingFloors;if(u)try{const f=await Zs(u);y=f>0?`已自动补齐 ${f} 个楼层。`:"当前楼宇楼层已完整。",await qe()}catch(f){C=f instanceof Error?f.message:String(f),k()}})}),e.querySelector("[data-create-floor]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget,u=r.dataset.createFloor,f=new FormData(r),L=String(f.get("fName")??"").trim().toUpperCase(),I=String(f.get("fArea")??"").trim();if(pa={name:L,area:I},!L)return;const z=Qt(L)??L;if(Fe(u).some(He=>(Qt(He.name)??He.name.toUpperCase())===z)){ge=`楼层「${L}」已存在，请使用其他名称。`,k(),e.querySelector('[data-create-floor] input[name="fName"]')?.focus();return}const me=Da(L),Ge=me>=999?"roof":me<0?"below":"above",Ze=me>=999?99:me||1;try{const He=await t.upsertFloor?.({buildingId:u,kind:Ge,level:Ze,name:L,areaSqm:I?Number(I):null});le(),He&&(j=He.id),y=`已新增楼层「${L}」，可继续添加楼层或点击行内「配置」进入单层底图工作台。`,await qe()}catch(He){ge=He instanceof Error?He.message:String(He),k()}}),e.querySelector("[data-save-floor]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget,u=r.dataset.saveFloor,f=c.floors.find(et=>et.id===u);if(!f)return;const L=new FormData(r),I=String(L.get("fName")??"").trim()||f.name,z=String(L.get("fArea")??"").trim(),Ee=Qt(I)??I.toUpperCase();if(Fe(f.buildingId).some(et=>et.id!==f.id&&(Qt(et.name)??et.name.toUpperCase())===Ee)){C=`楼层「${I}」已存在，请避免重复命名。`,k();return}const Ge=Da(I),Ze=Ge>=999?"roof":Ge<0?"below":"above",He=Ge>=999?99:Ge||f.level;try{await t.upsertFloor?.({id:f.id,buildingId:f.buildingId,kind:Ze,level:He,name:I,areaSqm:z?Number(z):null}),y=`已保存楼层「${I}」属性。`,await qe()}catch(et){C=et instanceof Error?et.message:String(et),k()}}),e.querySelector("[data-delete-floor]")?.addEventListener("click",i=>{const r=i.currentTarget.dataset.deleteFloor,u=c.floors.find(f=>f.id===r);!r||!u||(le(),vt={title:`删除楼层「${u.name}」`,body:"将同时移除本层的平面底图与功能区划分，此操作不可撤销。确认继续吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_floor",floorId:r}},k())});async function U(i,r){const u=c.floors.find(f=>f.id===i);if(u)try{const f=await oa(r,1800,.84);await t.upsertFloor?.({id:u.id,buildingId:u.buildingId,kind:u.kind,level:u.level,name:u.name,areaSqm:u.areaSqm,planImageUrl:f}),Re?.floorId===u.id&&(Re=null),y=`已更新「${u.name}」平面底图（${r.name}）。`,await qe()}catch(f){C=f instanceof Error?f.message:String(f),k()}}e.querySelectorAll("[data-upload-floor]").forEach(i=>{i.addEventListener("change",()=>{const r=i.dataset.uploadFloor,u=i.files?.[0];r&&u&&U(r,u)})});const Q=e.querySelector("[data-single-floor-drop]");Q&&n.scope.canEditDeployment&&o.spatial&&(Q.addEventListener("dragover",i=>{i.preventDefault(),Q.classList.add("is-drop-active")}),Q.addEventListener("dragleave",()=>{Q.classList.remove("is-drop-active")}),Q.addEventListener("drop",i=>{i.preventDefault(),Q.classList.remove("is-drop-active");const r=Q.dataset.singleFloorDrop,u=Array.from(i.dataTransfer?.files??[]).find(f=>f.type.startsWith("image/"));r&&u&&U(r,u)})),e.querySelector("[data-clear-floor-plan]")?.addEventListener("click",i=>{const r=i.currentTarget.dataset.clearFloorPlan,u=c.floors.find(f=>f.id===r);!r||!u||(le(),vt={title:`清空「${u.name}」平面底图`,body:"清空后本层将回到无图状态（不会删除已绑定的设备物理安装记录）。确认清空吗？",confirmLabel:"确认清空",danger:!0,action:{kind:"clear_floor_plan",floorId:r}},k())}),e.querySelectorAll("[data-open-lightbox]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const u=i.dataset.lbTitle??"平面底图预览",f=i.dataset.lbSrc??"";f&&(mt={title:u,imageUrl:f},k())})}),e.querySelector("[data-close-lightbox]")?.addEventListener("click",()=>{mt=null,k()}),e.querySelector("[data-lightbox-scrim]")?.addEventListener("click",i=>{i.target===i.currentTarget&&(mt=null,k())});function X(i,r){if(!i||r.length===0)return;const u=Fe(i),f=new Map;u.forEach(L=>f.set(Qt(L.name)??L.name.toUpperCase(),L)),kt=r.map((L,I)=>{const z=Qt(L.name),Ee=z?f.get(z):void 0;return{id:`bu-${Date.now().toString(36)}-${I}`,file:L,matchedFloorId:Ee?.id??null}}),Mt=!0,k()}e.querySelector("[data-batch-upload-floors]")?.addEventListener("change",i=>{const r=i.currentTarget;X(r.dataset.batchUploadFloors??"",Array.from(r.files??[]))});const $e=e.querySelector("[data-batch-dropzone]");$e&&n.scope.canEditDeployment&&o.spatial&&($e.addEventListener("dragover",i=>{i.preventDefault(),qt||(qt=!0,$e.style.borderColor="var(--pacom-accent-solid)",$e.style.background="var(--pacom-accent-soft)")}),$e.addEventListener("dragleave",()=>{qt=!1,$e.style.borderColor="",$e.style.background=""}),$e.addEventListener("drop",i=>{i.preventDefault(),qt=!1;const r=Array.from(i.dataTransfer?.files??[]).filter(u=>u.type.startsWith("image/"));X($e.dataset.batchDropzone??"",r)})),e.querySelectorAll("[data-batch-override-floor]").forEach(i=>{i.addEventListener("change",()=>{const r=kt.find(u=>u.id===i.dataset.batchOverrideFloor);r&&(r.matchedFloorId=i.value||null,k())})}),e.querySelector("[data-cancel-batch-upload]")?.addEventListener("click",()=>{kt=[],k()}),e.querySelector("[data-confirm-batch-upload]")?.addEventListener("click",async()=>{const i=kt.filter(f=>f.matchedFloorId),r=kt.length-i.length;if(i.length===0)return;const u=new Set;for(const f of i){if(u.has(f.matchedFloorId)){ge="存在多张图片指向同一目标楼层，请调整目标楼层后再导入。",k();return}u.add(f.matchedFloorId)}try{let f=0;for(const L of i){const I=c.floors.find(Ee=>Ee.id===L.matchedFloorId);if(!I)continue;const z=await oa(L.file,1800,.84);await t.upsertFloor?.({id:I.id,buildingId:I.buildingId,kind:I.kind,level:I.level,name:I.name,areaSqm:I.areaSqm,planImageUrl:z}),Re?.floorId===I.id&&(Re=null),f+=1}kt=[],le(),y=`已批量导入 ${f} 个唯一楼层平面底图${r>0?`（跳过 ${r} 张未分配文件）`:""}。`,await qe()}catch(f){ge=f instanceof Error?f.message:String(f),k()}}),e.querySelectorAll("[data-apply-zone-tpl]").forEach(i=>{i.addEventListener("click",async()=>{const r=zs.find(f=>f.key===i.dataset.applyZoneTpl),u=c.floors.find(f=>f.id===i.dataset.tplFloor);if(!(!r||!u))try{const f=c.zones.filter(I=>I.floorId===u.id).length,L=f+r.items.length;for(let I=0;I<r.items.length;I+=1){const z=r.items[I],Ee=await t.upsertZone?.({floorId:u.id,name:`${u.name} ${z.suffix}`,category:z.category});Ee&&(be[Ee.id]=Xa(f+I,L,Ee.name))}y=`已按「${r.label}」模板为 ${u.name} 创建 ${r.items.length} 个功能区。`,await qe()}catch(f){C=f instanceof Error?f.message:String(f),k()}})}),e.querySelector("[data-attach-doc]")?.addEventListener("change",async i=>{const r=i.currentTarget,u=r.dataset.attachDoc,f=r.files?.[0],L=c.floors.find(z=>z.id===u);if(!u||!f||!L||!t.attachFloorDoc)return;const I=f.size>=1024*1024?`${(f.size/(1024*1024)).toFixed(1)} MB`:`${Math.max(1,Math.round(f.size/1024))} KB`;try{const z=f.size<=4194304?await Us(f).catch(()=>{}):void 0;await t.attachFloorDoc({floorId:u,name:f.name,category:$n(f.name),boundScope:`${L.name} ｜ 工程资料`,updatedAt:new Date().toISOString().slice(0,10),size:I,fileUrl:z,mimeType:f.type||void 0}),y=`已为 ${L.name} 关联文档「${f.name}」。`,await ae(),k()}catch(z){C=z instanceof Error?z.message:String(z),k()}}),e.querySelectorAll("[data-doc-category]").forEach(i=>{i.addEventListener("change",async()=>{const r=i.dataset.docCategory;if(!(!r||!t.updateFloorDocCategory))try{await t.updateFloorDocCategory(r,i.value),y=`已更新资料分类为「${i.value}」。`,await ae(),k()}catch(u){C=u instanceof Error?u.message:String(u),k()}})}),e.querySelectorAll("[data-del-doc]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.delDoc,u=ee.find(f=>f.id===r);!r||!u||(le(),vt={title:`移除工程资料「${u.name}」`,body:"移除后将不再在此楼层的工程资料列表中显示，确认移除吗？",confirmLabel:"确认移除",danger:!0,action:{kind:"delete_doc",docId:r}},k())})}),e.querySelectorAll("[data-preview-doc]").forEach(i=>{i.addEventListener("click",()=>{const r=ee.find(u=>u.id===i.dataset.previewDoc);if(r){if(r.fileUrl&&(r.mimeType?.startsWith("image/")||/\.(png|jpe?g|webp|gif)$/i.test(r.name))){mt={title:r.name,imageUrl:r.fileUrl},k();return}if(r.fileUrl){const u=document.createElement("a");u.href=r.fileUrl,u.download=r.name,u.target="_blank",u.rel="noopener noreferrer",u.click(),y=`已打开 / 下载工程附件「${r.name}」。`,k();return}y=`「${r.name}」（${r.category} ｜ ${r.size} ｜ 更新于 ${r.updatedAt}）为演示示例目录项，上传本地文件后可直接预览或下载。`,k()}})}),e.querySelector("[data-add-zone]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget.dataset.addZone,u=new FormData(i.currentTarget),f=String(u.get("zoneName")??"").trim(),L=String(u.get("zoneCat")??"office");if(f)try{const I=c.zones.filter(Ee=>Ee.floorId===r).length,z=await t.upsertZone?.({floorId:r,name:f,category:L});z&&(be[z.id]=Xa(I,I+1,z.name)),y=`已添加功能区「${f}」。`,await qe()}catch(I){C=I instanceof Error?I.message:String(I),k()}}),e.querySelectorAll("[data-edit-zone]").forEach(i=>{i.addEventListener("click",()=>{tt=i.dataset.editZone??null,k()})}),e.querySelector("[data-cancel-edit-zone]")?.addEventListener("click",()=>{tt=null,k()}),e.querySelector("[data-save-edit-zone]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget,u=new FormData(r),f=String(u.get("zName")??"").trim(),L=String(u.get("zCat")??"office");if(f)try{await t.upsertZone?.({id:r.dataset.saveEditZone,floorId:r.dataset.zoneFloor,name:f,category:L}),tt=null,y=`已更新功能区「${f}」。`,await qe()}catch(I){C=I instanceof Error?I.message:String(I),k()}}),e.querySelectorAll("[data-del-zone]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.delZone,u=c.zones.find(f=>f.id===r);!r||!u||(le(),vt={title:`删除功能区「${u.name}」`,body:"删除后该功能区将从本层移除，原归属设备的逻辑分区将置为未分配。确认删除吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_zone",zoneId:r}},k())})}),e.querySelectorAll("[data-open-copy-zones]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.openCopyZones??null;le(),Gt=r,bt=new Set,k()})}),e.querySelectorAll("[data-copy-preset]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.copyPreset,u=Fe(A).filter(f=>f.id!==Gt);r==="empty"?bt=new Set(u.filter(f=>f.kind==="above"&&c.zones.filter(L=>L.floorId===f.id).length===0).map(f=>f.id)):r==="above"?bt=new Set(u.filter(f=>f.kind==="above").map(f=>f.id)):bt.clear(),k()})}),e.querySelectorAll("[data-copy-target-floor]").forEach(i=>{i.addEventListener("change",()=>{const r=i.dataset.copyTargetFloor;r&&(i.checked?bt.add(r):bt.delete(r),k())})}),e.querySelector("[data-confirm-copy-zones]")?.addEventListener("click",async i=>{const r=i.currentTarget.dataset.confirmCopyZones,u=Array.from(bt);if(!(!r||u.length===0))try{const f=await t.copyZonesToFloors?.(r,u)??0;le(),bt.clear(),y=`已将当前层功能区复用至 ${u.length} 个目标楼层（共新增 ${f} 个功能区）。`,await qe()}catch(f){C=f instanceof Error?f.message:String(f),k()}}),e.querySelectorAll("[data-scrubber-floor]").forEach(i=>{i.addEventListener("click",async()=>{const r=i.dataset.scrubberFloor;r&&(Ae(r),await ae(),k())})});const Oe=e.querySelector("[data-dep-canvas-search]");Oe?.addEventListener("focus",()=>{q||(q=!0,k(),e.querySelector("[data-dep-canvas-search]")?.focus())}),Oe?.addEventListener("input",i=>{Ne=i.currentTarget.value,q=!0,k();const r=e.querySelector("[data-dep-canvas-search]");r&&(r.focus(),r.setSelectionRange(Ne.length,Ne.length))}),e.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{q=!q,k()}),e.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{q=!1,k()}),e.querySelectorAll("[data-dev-filter]").forEach(i=>{i.addEventListener("click",()=>{M=i.dataset.devFilter??"all",k()})}),e.querySelectorAll("[data-brush]").forEach(i=>{i.addEventListener("click",()=>{ot=i.dataset.brush??"device",k()})}),e.querySelectorAll("[data-dep-zoom]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.depZoom;r==="in"?ke=Math.min(2.6,Number((ke+.2).toFixed(2))):r==="out"?ke=Math.max(.6,Number((ke-.2).toFixed(2))):(ke=1,ct=0,Je=0),Ea()})});const Ve=e.querySelector('[data-role="dep-stage"]'),Pe=e.querySelector('[data-role="deploy-plan"] .pacom-plan-img');if(Ve&&Pe){const i=()=>{const r=Pe.naturalWidth,u=Pe.naturalHeight;if(!r||!u)return;const f=Ve.clientWidth-140,L=Ve.clientHeight-160;if(f>320&&L>220&&r<640){const I=Math.min(f/r,L/u,2.2);I>1.05&&(Pe.style.width=`${Math.round(r*I)}px`,Pe.style.height="auto")}};Pe.complete?i():Pe.addEventListener("load",i,{once:!0})}if(Ve&&!je){let i=!1,r=0,u=0,f=0,L=0;Ve.addEventListener("pointerdown",z=>{z.target?.closest("button, input, select, .pacom-hud-search-wrap, .dep-canvas-mode-pill, .dep-canvas-toast")||(i=!0,r=z.clientX,u=z.clientY,f=ct,L=Je,Ve.classList.add("is-panning"),Ve.setPointerCapture?.(z.pointerId))}),Ve.addEventListener("pointermove",z=>{i&&(ct=f+(z.clientX-r),Je=L+(z.clientY-u),Ea())});const I=()=>{i&&(i=!1,Ve.classList.remove("is-panning"))};Ve.addEventListener("pointerup",I),Ve.addEventListener("pointercancel",I),Ve.addEventListener("wheel",z=>{z.preventDefault();const Ee=z.deltaY<0?.12:-.12;ke=Math.max(.6,Math.min(2.6,Number((ke+Ee).toFixed(2)))),Ea()},{passive:!1}),Ve.addEventListener("dblclick",z=>{z.target?.closest("button")||(ke=1,ct=0,Je=0,Ea())})}e.querySelectorAll("[data-drag-pin]").forEach(i=>{i.addEventListener("pointerdown",r=>{if(r.button!==0||je||ot!=="device"||!n.scope.canEditDeployment)return;const u=e.querySelector('[data-role="deploy-plan"]');if(!u)return;const f=i.dataset.dragPin,L=r.clientX,I=r.clientY;let z=!1,Ee=.5,me=.5;const Ge=He=>{const et=Math.hypot(He.clientX-L,He.clientY-I);if(!z&&et<5)return;z=!0,i.classList.add("is-dragging");const $t=u.getBoundingClientRect();Ee=Math.max(.02,Math.min(.98,(He.clientX-$t.left)/$t.width)),me=Math.max(.02,Math.min(.98,(He.clientY-$t.top)/$t.height)),i.style.left=`${(Ee*100).toFixed(2)}%`,i.style.top=`${(me*100).toFixed(2)}%`},Ze=async()=>{if(window.removeEventListener("pointermove",Ge),window.removeEventListener("pointerup",Ze),window.removeEventListener("pointercancel",Ze),i.classList.remove("is-dragging"),!z)return;_e=!0,window.setTimeout(()=>{_e=!1},120);const He=S.find(et=>et.id===f);if(He)try{const et=c.floors.find($t=>$t.id===j)?.plan?.planVersion??1;await t.updateDevicePlanPoint({deviceId:He.id,floorId:j,planVersion:et,x:Ee,y:me,expectedVersion:He.version}),K(`已拖拽微调「${He.name}」坐标（硬件绑定与物理复核保持不变）。`),await ae(),k()}catch(et){C=et instanceof Error?et.message:String(et),k()}};window.addEventListener("pointermove",Ge),window.addEventListener("pointerup",Ze),window.addEventListener("pointercancel",Ze)})}),e.querySelector("[data-list-search]")?.addEventListener("input",i=>{ft=i.currentTarget.value,k();const r=e.querySelector("[data-list-search]");r&&(r.focus(),r.setSelectionRange(ft.length,ft.length))}),e.querySelector("[data-list-filter]")?.addEventListener("change",i=>{m=i.currentTarget.value??"all",k()}),e.querySelector("[data-list-cat-filter]")?.addEventListener("change",i=>{R=i.currentTarget.value??"all",k()}),e.querySelectorAll("[data-refresh-dep]").forEach(i=>{i.addEventListener("click",()=>void qe())}),e.querySelector("[data-create-dev]")?.addEventListener("submit",async i=>{if(i.preventDefault(),!t.createDeploymentDevice)return;const r=new FormData(i.currentTarget),u=String(r.get("devName")??"").trim(),f=String(r.get("devPreset")??"sensor"),L=String(r.get("devZone")??"")||null,I=Ya.find(z=>z.key===f)??Ya[0];if(!(!u||!j))try{const z=await t.createDeploymentDevice({projectId:b,buildingId:A,floorId:j,logicalZoneId:L,name:u,category:I.category,defaultProxy:I.defaultProxy,defaultRelay:I.defaultRelay});le(),ie=z.id,Z=!0,pe="binding",Qe=!1;const Ee=!!c.floors.find(me=>me.id===j)?.plan;je=v==="device_marking"&&Ee,!Ee&&v==="device_marking"&&(q=!0),K(je?`已新增「${u}」（待入网 ｜ 未标记），请点击平面图落点。`:`已新增「${u}」（待入网 ｜ 未标记，${I.hint}）。`),await ae(),ve(S.find(me=>me.id===z.id)),k()}catch(z){ge=z instanceof Error?z.message:String(z),k()}}),e.querySelectorAll("[data-pick-dev]").forEach(i=>{i.addEventListener("click",r=>{if(r.stopPropagation(),_e)return;ie=i.dataset.pickDev??null,Z=!0,pe="binding",Qe=!1;const u=S.find(f=>f.id===ie);ve(u),k()})}),e.querySelectorAll("[data-open-dev-drawer]").forEach(i=>{i.addEventListener("click",r=>{if(r.target?.closest("button"))return;ie=i.dataset.openDevDrawer??null,Z=!0,pe="binding",Qe=!1;const u=S.find(f=>f.id===ie);ve(u),k()})}),e.querySelectorAll("[data-open-dev-params]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation(),ie=i.dataset.openDevParams??null,Z=!0,pe="params",Qe=!1;const u=S.find(f=>f.id===ie);ve(u),k()})}),e.querySelectorAll("[data-quick-verify-dev]").forEach(i=>{i.addEventListener("click",async r=>{r.stopPropagation();const u=S.find(f=>f.id===i.dataset.quickVerifyDev);if(!(!u||!u.hardwareBinding))try{await t.updateDeviceHardwareBinding({deviceId:u.id,gatewayId:u.hardwareBinding.gatewayId,protocol:u.hardwareBinding.protocol,networkAddress:u.hardwareBinding.networkAddress,portOrChannel:u.hardwareBinding.portOrChannel,physicalInstalled:!0,expectedVersion:u.version}),y=`已完成「${u.name}」现场物理安装一键复核。`,await ae(),ie===u.id&&ve(S.find(f=>f.id===u.id)),k()}catch(f){C=f instanceof Error?f.message:String(f),k()}})}),e.querySelectorAll("[data-toggle-edit-dev-meta]").forEach(i=>{i.addEventListener("click",()=>{Qe=!Qe,k()})}),e.querySelector("[data-save-dev-meta]")?.addEventListener("submit",async i=>{if(i.preventDefault(),!t.updateDeploymentDevice)return;const r=i.currentTarget,u=r.dataset.saveDevMeta,f=new FormData(r),L=String(f.get("editDevName")??"").trim(),I=String(f.get("editDevZone")??"")||null;if(L)try{await t.updateDeploymentDevice(u,{name:L,logicalZoneId:I}),Qe=!1,y=`已更新设备基础信息「${L}」。`,await ae(),k()}catch(z){C=z instanceof Error?z.message:String(z),k()}}),e.querySelector("[data-del-dev]")?.addEventListener("click",i=>{const r=i.currentTarget.dataset.delDev,u=S.find(f=>f.id===r);!r||!u||(le(),vt={title:`删除设备「${u.name}」`,body:"将同步移除该设备的平面坐标、硬件绑定、关联灯点及分组成员引用，此操作不可撤销。确认删除吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_device",deviceId:r}},k())}),e.querySelector("[data-open-plan-swap-review]")?.addEventListener("click",i=>{const r=i.currentTarget.dataset.openPlanSwapReview??j;le(),sa=r,k()}),e.querySelector("[data-clear-plan-alert]")?.addEventListener("click",async i=>{const r=i.currentTarget.dataset.clearPlanAlert;if(!(!r||!t.clearPlanChangeAlert))try{await t.clearPlanChangeAlert(r),delete D[r],le(),K("已确认换图后的设备点位无误，请前往「交付验收」重新执行全层自检后方可冻结新版本。"),k()}catch(u){C=u instanceof Error?u.message:String(u),k()}}),e.querySelectorAll("[data-drawer-tab]").forEach(i=>{i.addEventListener("click",()=>{pe=i.dataset.drawerTab??"binding",k()})}),e.querySelector("[data-close-sel]")?.addEventListener("click",()=>{Z=!1,je=!1,Qe=!1,k()}),e.querySelectorAll("[data-toggle-place]").forEach(i=>{i.addEventListener("click",()=>{v!=="device_marking"?(v="device_marking",je=!0):je=!je,k()})}),e.querySelectorAll("[data-binding-field]").forEach(i=>{const r=()=>{const u=S.find(L=>L.id===ie);if(!u||((!Ie||Ie.deviceId!==u.id)&&ve(u),!Ie))return;const f=i.dataset.bindingField;f==="protocol"?Ie.protocol=i.value:f==="gatewayId"?Ie.gatewayId=i.value:f==="networkAddress"?Ie.networkAddress=i.value:f==="portOrChannel"&&(Ie.portOrChannel=i.value)};i.addEventListener("input",r),i.addEventListener("change",r)}),e.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{const i=S.find(r=>r.id===ie);i&&((!Ie||Ie.deviceId!==i.id)&&ve(i),Ie&&(Ie.physicalInstalled=!Ie.physicalInstalled),k())}),e.querySelectorAll("[data-ping-dev]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const u=S.find(f=>f.id===i.dataset.pingDev);u&&(K(`已向「${u.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`),k())})}),e.querySelector("[data-add-light-marker]")?.addEventListener("click",async i=>{if(!t.addLightMarker)return;const r=i.currentTarget.dataset.addLightMarker,u=V.filter(f=>f.deviceId===r).length+1;try{await t.addLightMarker({deviceId:r,floorId:j,channel:`回路 ${u}`,label:`照明点位 ${u}`,x:Math.min(.86,.35+u*.1),y:.42}),ot="light_marker",K(`已新增「回路 ${u}」可视化灯点。`),await ae(),k()}catch(f){C=f instanceof Error?f.message:String(f),k()}}),e.querySelectorAll("[data-del-light-marker]").forEach(i=>{i.addEventListener("click",async()=>{if(!t.deleteLightMarker)return;const r=i.dataset.delLightMarker;if(r)try{await t.deleteLightMarker(r),await ae(),k()}catch(u){C=u instanceof Error?u.message:String(u),k()}})}),e.querySelectorAll("[data-toggle-mesh-role]").forEach(i=>{i.addEventListener("click",async()=>{if(!t.updateMeshRole)return;const r=i.dataset.meshDev,u=i.dataset.toggleMeshRole,f=B[r]??{proxy:!1,relay:!1,meshUuid:Ns(j)};try{await t.updateMeshRole(r,j,{[u]:!f[u]}),Re?.floorId===j&&(Re=null),K(`已更新节点 ${u.toUpperCase()} 状态，请前往「设备网络」重新同步边缘。`),await ae(),k()}catch(L){C=L instanceof Error?L.message:String(L),k()}})}),e.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async i=>{if(_e)return;const r=S.find(I=>I.id===ie),u=i.currentTarget.getBoundingClientRect(),f=Math.max(.02,Math.min(.98,(i.clientX-u.left)/u.width)),L=Math.max(.02,Math.min(.98,(i.clientY-u.top)/u.height));if(je&&r){try{const I=c.floors.find(z=>z.id===j)?.plan?.planVersion??1;await t.updateDevicePlanPoint({deviceId:r.id,floorId:j,planVersion:I,x:f,y:L,expectedVersion:r.version}),je=!1,K(`已更新「${r.name}」图上坐标（硬件绑定与物理复核保持不变）。`),await ae(),k()}catch(I){C=I instanceof Error?I.message:String(I),k()}return}if(ot==="light_marker"&&r?.category==="lighting"&&n.scope.canEditDeployment&&t.addLightMarker){const I=V.filter(z=>z.deviceId===r.id).length+1;try{await t.addLightMarker({deviceId:r.id,floorId:j,channel:`回路 ${I}`,label:`灯点 ${I}`,x:Number(f.toFixed(4)),y:Number(L.toFixed(4))}),K(`已为「${r.name}」布置「回路 ${I}」可视化灯点。`),await ae(),k()}catch(z){C=z instanceof Error?z.message:String(z),k()}}}),e.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async i=>{i.preventDefault();const r=S.find(z=>z.id===ie);if(!r)return;const u=new FormData(i.currentTarget),f=String(u.get("gatewayId")??"").trim(),L=String(u.get("networkAddress")??"").trim(),I=String(u.get("portOrChannel")??"").trim();if(r.category!=="gateway"&&!f){C="请先为本层登记并选择所属上游网关，再保存硬件绑定。",k();return}if(!L){C="请填写设备网络地址或通信主题后再保存硬件绑定。",k();return}try{await t.updateDeviceHardwareBinding({deviceId:r.id,gatewayId:r.category==="gateway"?r.id:f,protocol:String(u.get("protocol")),networkAddress:L,portOrChannel:I,physicalInstalled:Ie?.deviceId===r.id?Ie.physicalInstalled:r.physicalInstalled,expectedVersion:r.version}),C="",Re?.floorId===j&&(Re=null),K(`已保存「${r.name}」硬件绑定与物理复核状态。`),await ae(),ve(S.find(z=>z.id===r.id)),k()}catch(z){C=z instanceof Error?z.message:String(z),k()}}),e.querySelector("[data-save-dev-params]")?.addEventListener("submit",async i=>{if(i.preventDefault(),!t.saveDeviceParams)return;const r=i.currentTarget,u=r.dataset.saveDevParams,f=r.dataset.devCat??"sensor",L=new FormData(r),I=he.get(u)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450,coolMinC:22,heatMaxC:26,unoccupiedDelayMin:20,minCycleMin:5,heartbeatSec:30,offlineHoldMin:120,cacheFlushSec:60,pollSec:15,ctRatio:1,demandWindowMin:15},z={...I};f==="hvac"?(z.coolMinC=Number(L.get("coolMinC")??I.coolMinC??22),z.heatMaxC=Number(L.get("heatMaxC")??I.heatMaxC??26),z.unoccupiedDelayMin=Number(L.get("unoccupiedDelayMin")??I.unoccupiedDelayMin??20),z.minCycleMin=Number(L.get("minCycleMin")??I.minCycleMin??5)):f==="gateway"?(z.heartbeatSec=Number(L.get("heartbeatSec")??I.heartbeatSec??30),z.offlineHoldMin=Number(L.get("offlineHoldMin")??I.offlineHoldMin??120),z.cacheFlushSec=Number(L.get("cacheFlushSec")??I.cacheFlushSec??60)):f==="meter"?(z.pollSec=Number(L.get("pollSec")??I.pollSec??15),z.ctRatio=Number(L.get("ctRatio")??I.ctRatio??1),z.demandWindowMin=Number(L.get("demandWindowMin")??I.demandWindowMin??15)):(z.offDelayMin=Number(L.get("offDelayMin")??I.offDelayMin),z.restoreMin=Number(L.get("restoreMin")??I.restoreMin),z.luxOn=Number(L.get("luxOn")??I.luxOn),z.luxOff=Number(L.get("luxOff")??I.luxOff));try{await t.saveDeviceParams(u,j,z),Re?.floorId===j&&(Re=null),K("已保存设备自治参数；原自检凭证已自动失效，请前往「设备网络」重新同步并复检后方可冻结。"),await ae(),k()}catch(Ee){C=Ee instanceof Error?Ee.message:String(Ee),k()}}),e.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const i=S.find(r=>r.id===ie);i&&ts(i)}),e.querySelectorAll("[data-ftt-dev]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const u=S.find(f=>f.id===i.dataset.fttDev);u&&ts(u)})}),e.querySelectorAll("[data-batch-ftt]").forEach(i=>{i.addEventListener("click",()=>void as(j))}),e.querySelectorAll("[data-floor-ftt]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.floorFtt;r&&as(r)})}),e.querySelector("[data-dismiss-ftt]")?.addEventListener("click",()=>{Re=null,k()}),e.querySelectorAll("[data-export-inv]").forEach(i=>{i.addEventListener("click",()=>Gs())}),e.querySelector("[data-save-group]")?.addEventListener("submit",async i=>{if(i.preventDefault(),!t.upsertDeviceGroup)return;const r=i.currentTarget,u=r.dataset.saveGroup||void 0,f=new FormData(r),L=String(f.get("gName")??"").trim(),I=f.get("gTrack")??"mesh_auto",z=String(f.get("gType")??"灯光联动组"),Ee=Array.from(new Set(f.getAll("gMemberIds").map(me=>String(me)).filter(Boolean)));if(L)try{await t.upsertDeviceGroup({id:u,track:I,groupType:z,name:L,floorId:j,includesAdapter:I==="mesh_auto",deviceIds:Ee}),le(),y=`${u?"已更新":"已新建"}${I==="mesh_auto"?"端侧蓝牙 Mesh 自治组":"云端业务分组"}「${L}」（${Ee.length} 台成员）。`,await ae(),k()}catch(me){C=me instanceof Error?me.message:String(me),k()}}),e.querySelectorAll("[data-del-group]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.delGroup,u=de.find(f=>f.id===r);!r||!u||(le(),vt={title:`删除设备分组「${u.name}」`,body:"删除分组不会移除成员设备，但会解除该群组的批量联动配置。确认删除吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_group",groupId:r}},k())})}),e.querySelectorAll("[data-test-group]").forEach(i=>{i.addEventListener("click",()=>{const r=de.find(I=>I.id===i.dataset.testGroup);if(!r)return;const u=r.deviceIds.map(I=>S.find(z=>z.id===I)).filter(I=>!!I),f=u.filter(I=>I.category!=="gateway"),L=r.track==="mesh_auto"&&r.groupType.includes("灯")&&!u.some(I=>I.category==="lighting");if(f.length===0)C=`分组「${r.name}」暂未包含受控末端设备（仅含基础设施网关或为空），请先编辑添加成员后再执行试控。`,y="";else if(L)C=`灯光联动组「${r.name}」尚未包含任何照明执行端（驱动器 / 开关面板），请先编辑添加照明设备后再试控。`,y="";else{const I=f.filter(z=>z.connectivity!=="online");I.length>0?(C=`分组「${r.name}」试控异常：${I.map(z=>`${z.name}（${z.connectivity==="unknown"?"待入网":"离线"}）`).join("、")}。`,y=""):(C="",y=t.mode==="demo"?`演示群组试控通过：「${r.name}」共 ${f.length} 台末端校验在线可达。`:`已向分组「${r.name}」发送群组试控指令，${f.length} 台受控终端回读正常。`)}k()})}),e.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>Ws()),e.querySelector("[data-clear-mesh-findings]")?.addEventListener("click",()=>{xe=[],k()}),e.querySelector("[data-sync-edge]")?.addEventListener("click",async()=>{if(!(!t.syncEdgeGateway||!j))try{const i=await t.syncEdgeGateway(j);G=i,se[j]=i,delete H[j],Re?.floorId===j&&(Re=null),C="",y=`已将本层配置下发至边缘网关（基线 v${i.version}）；请前往「交付验收」执行新版本全层自检后方可冻结。`,k()}catch(i){C=i instanceof Error?i.message:String(i),k()}}),e.querySelectorAll("[data-topo-mode]").forEach(i=>{i.addEventListener("click",()=>{ue=i.dataset.topoMode??"mesh",k()})}),e.querySelectorAll("[data-topo-jump]").forEach(i=>{i.addEventListener("click",()=>{ie=i.dataset.topoJump??null,Z=!0,pe="binding",Qe=!1,dt={nav:"device_network",label:"设备网络"},v="device_marking";const r=S.find(u=>u.id===ie);ve(r),k()})}),e.querySelector("[data-toggle-conn-more]")?.addEventListener("click",i=>{i.stopPropagation(),st=!st,Ce=null,k()}),e.querySelectorAll("[data-toggle-conn-row-menu]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const u=i.dataset.toggleConnRowMenu??null;Ce=Ce===u?null:u,st=!1,k()})}),e.querySelectorAll("[data-select-topo-conn]").forEach(i=>{i.addEventListener("click",()=>{Te=i.dataset.selectTopoConn??null,k()})}),e.querySelectorAll("[data-conn-jump-dev]").forEach(i=>{i.addEventListener("click",async()=>{const r=i.dataset.connJumpDev??null,u=i.dataset.connJumpFloor??"";u&&Ae(u),ie=r,Z=!0,pe="binding",dt={nav:"connections",label:"系统接入"},v="device_list",await ae(),ve(S.find(f=>f.id===r)),k()})}),e.querySelector("[data-req-restart-edge]")?.addEventListener("click",()=>{st=!1,le(),vt={title:"确认重启边缘服务",body:"重启将导致当前项目边缘网关通信短暂中断约 5 秒，正在进行的实时采集将自动重连。确认执行重启吗？",confirmLabel:"确认重启",danger:!0,action:{kind:"restart_edge",projectId:b}},k()}),e.querySelectorAll("[data-conn-view]").forEach(i=>{i.addEventListener("click",()=>{at=i.dataset.connView??"list",k()})}),e.querySelector("[data-conn-search]")?.addEventListener("input",i=>{We=i.currentTarget.value,k();const r=e.querySelector("[data-conn-search]");r&&(r.focus(),r.setSelectionRange(We.length,We.length))}),e.querySelector("[data-conn-status-filter]")?.addEventListener("change",i=>{Ke=i.currentTarget.value??"all",k()}),e.querySelector("[data-conn-bld-select]")?.addEventListener("change",i=>{const r=i.currentTarget.value,u=e.querySelector('[data-save-conn] select[name="cFloor"]');if(!u)return;const f=r?Fe(r):[];u.innerHTML=`<option value="">整栋 / 不限楼层</option>${f.map(L=>`<option value="${s(L.id)}">${s(L.name)}</option>`).join("")}`}),e.querySelector("[data-save-conn]")?.addEventListener("submit",async i=>{if(i.preventDefault(),!t.upsertConnection)return;const r=i.currentTarget,u=r.dataset.saveConn||void 0,f=new FormData(r),L=String(f.get("cName")??"").trim(),I=String(f.get("cProto")??"bacnet_ip"),z=String(f.get("cEndpoint")??"").trim(),Ee=String(f.get("cBuilding")??"").trim(),me=String(f.get("cFloor")??"").trim();if(Kt={name:L,buildingId:Ee,floorId:me,protocol:I,endpoint:z},!(!L||!z))try{const Ge=await t.upsertConnection({id:u,projectId:b,buildingId:Ee,floorId:me,name:L,protocol:I,endpoint:z});le(),C="",y=u?`已更新接入通道「${L}」（${z}）。`:`已接入「${L}」（${z}），当前关联 ${Ge.collectedPoints} 原始采集点。`,ce=await t.listConnections(b).catch(()=>[]),k()}catch(Ge){ge=Ge instanceof Error?Ge.message:String(Ge),k(),e.querySelector('[data-save-conn] input[name="cEndpoint"]')?.focus()}}),e.querySelectorAll("[data-del-conn]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.delConn,u=ce.find(f=>f.id===r);!r||!u||(le(),Ce=null,vt={title:`删除接入通道「${u.name}」`,body:`删除后将停止对端点 ${u.endpoint} 的数据采集与控制下发，此操作不可撤销。确认删除吗？`,confirmLabel:"确认删除",danger:!0,action:{kind:"delete_connection",connectionId:r}},k())})}),e.querySelectorAll("[data-expand-conn]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.expandConn??null;Ue=Ue===r?null:r,k()})}),e.querySelectorAll("[data-ping-conn]").forEach(i=>{i.addEventListener("click",()=>{const r=ce.find(u=>u.id===i.dataset.pingConn);if(r){if(C="",r.status==="connected"){const f=11+Array.from(`${r.id}${r.endpoint}`).reduce((L,I)=>L+I.charCodeAt(0),0)%23;y=t.mode==="demo"?`演示连通探针通过：「${r.name}」（${r.endpoint}）模拟往返 ${f} ms。`:`连通测试通过：「${r.name}」（${r.endpoint}）响应正常，延迟 ${f} ms。`}else C=`连通测试异常：「${r.name}」（${r.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`;k()}})}),e.querySelectorAll("[data-copy-endpoint]").forEach(i=>{i.addEventListener("click",async()=>{const r=i.dataset.endpointVal??"",u=i.dataset.copyEndpoint??null;Ce=null;try{await navigator.clipboard.writeText(r),ut=u,y=`已复制接入端点：${r}`,k(),window.setTimeout(()=>{ut=null,k()},1600)}catch{}})}),e.querySelectorAll("[data-acc-filter]").forEach(i=>{i.addEventListener("click",()=>{wa=i.dataset.accFilter??"active",k()})}),e.querySelectorAll("[data-toggle-empty-matrix]").forEach(i=>{i.addEventListener("click",()=>{da=!da,k()})}),e.querySelectorAll("[data-toggle-defer-floor]").forEach(i=>{i.addEventListener("click",async()=>{const r=i.dataset.toggleDeferFloor,u=i.dataset.deferNext==="1";if(!(!r||!t.toggleFloorDeferred))try{const f=await t.toggleFloorDeferred(r,u);fe=new Set(f);const L=c.floors.find(I=>I.id===r)?.name??r;y=u?`已将「${L}」标为本期不纳入（预留），不再计入缺项与同步分母。`:`已将「${L}」恢复纳入本期交付范围。`,k()}catch(f){C=f instanceof Error?f.message:String(f),k()}})}),e.querySelectorAll("[data-open-snapshot]").forEach(i=>{i.addEventListener("click",async()=>{const r=i.dataset.openSnapshot,u=Y.find(L=>L.id===r);if(!r||!u)return;le();const f=t.getDeliverySnapshotMeta?await t.getDeliverySnapshotMeta(r).catch(()=>null):null;if(f)ht={batch:u,meta:f};else{const L=c.floors.find(I=>I.id===u.floorId)?.name??u.floorId;ht={batch:u,meta:{batchId:u.id,floorId:u.floorId,floorName:L,planVersion:c.floors.find(I=>I.id===u.floorId)?.plan?.planVersion??0,edgeSyncVersion:se[u.floorId]?.version??1,configSignature:"live",fttPassedAt:H[u.floorId]?.passedAt??null,devices:[]}}}k()})}),e.querySelector("[data-sign-off-delivery]")?.addEventListener("submit",async i=>{if(i.preventDefault(),!t.signOffDeliveryBatch)return;const r=i.currentTarget,u=r.dataset.signOffDelivery,f=new FormData(r),L=String(f.get("signRecipient")??"").trim(),I=String(f.get("signNote")??"").trim();if(L)try{const z=await t.signOffDeliveryBatch(u,L,I);await Me();const Ee=t.getDeliverySnapshotMeta?await t.getDeliverySnapshotMeta(u).catch(()=>null):null;Ee&&(ht={batch:z,meta:Ee}),ge="",y=`交付基线 ${z.versionTag} 已由「${L}」正式签收交付（状态：已交付）。`,k()}catch(z){ge=z instanceof Error?z.message:String(z),k()}}),e.querySelector("[data-export-snapshot]")?.addEventListener("click",()=>{ht&&Ks(ht.batch,ht.meta)}),e.querySelectorAll("[data-matrix-nav]").forEach(i=>{i.addEventListener("click",async()=>{const r=i.dataset.matrixFloor,u=i.dataset.matrixNav??"device_marking",f=i.dataset.matrixOffline==="1";r&&Ae(r),dt={nav:"acceptance",label:"交付验收"},v=u,u==="project_config"&&(x=r?"floor":"overview"),u==="device_list"&&f&&(m="offline"),await ae(),k()})}),e.querySelector("[data-submit-stage-snapshot]")?.addEventListener("click",async i=>{if(!t.saveDeliveryStageSnapshot)return;const r=i.currentTarget.dataset.submitStageSnapshot||Tt;if(!r)return;const u=e.querySelector("[data-confirm-freeze]"),f=u?String(new FormData(u).get("freezeNote")??"").trim():"";try{const L=await t.saveDeliveryStageSnapshot(r,f||"阶段性施工留档");le(),C="",y=`已保存阶段留档 ${L.versionTag}（已核验 ${L.verifiedCount}/${L.deviceCount} 台，状态：阶段留档）。`,await Me(),await ae(),k()}catch(L){ge=L instanceof Error?L.message:String(L),k()}}),e.querySelector("[data-confirm-freeze]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget,u=r.dataset.confirmFreeze||Tt||j;if(!u)return;const f=new FormData(r),L=String(f.get("freezeNote")??"").trim();try{const I=await t.freezeDeliveryBatch(u,L||"全层自检通过，正式交付冻结");le(),C="",y=`已生成正式交付冻结基线 ${I.versionTag}（核验 ${I.verifiedCount}/${I.deviceCount}），可在下方记录中执行「签收交付」。`,await Me(),await ae(),k()}catch(I){ge=I instanceof Error?I.message:String(I),k()}})}await qe()}const qn=new Set(["lighting","hvac","alarm_rules"]),xs={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},_a=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function On(e){const t=new Set;for(const a of e.actions)a.command.startsWith("lighting")?t.add("照明"):a.command.startsWith("hvac")?t.add("暖通"):t.add("综合");return Array.from(t)}function Tn(e,t,a){const n=a?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
    <div style="width:150px; display:flex; flex-direction:column; gap:3px;">
      <div style="position:relative; height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
        ${e<t?`<div style="position:absolute; left:${e/24*100}%; width:${(t-e)/24*100}%; top:0; bottom:0; border-radius:999px; background:${n};"></div>`:`
        <div style="position:absolute; left:${e/24*100}%; width:${(24-e)/24*100}%; top:0; bottom:0; border-radius:999px; background:${n};"></div>
        <div style="position:absolute; left:0; width:${t/24*100}%; top:0; bottom:0; border-radius:999px; background:${n};"></div>`}
      </div>
      <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--pacom-text-muted);">
        <span>00</span><span>12</span><span>24</span>
      </div>
    </div>
  `}async function Rn(e,t,a){let n=Ra(),o=!1,l="",[p,w,d,h]=await Promise.all([t.getSpatialTree(),t.listScenes(T.floorId),t.getRuntimeSettings(T.projectId),t.getFloorDevices(T.floorId).catch(()=>[])]),v="manual",x="balanced",E="all",F=null,g="",c=!1,S=!1,O=!1,V="all",B=null,G="",se="",he=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const de=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],ee=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],ce=[{deviceId:h[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],Y=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 ｜ ${d.calendar.workdayStart} – ${d.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 ｜ 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 ｜ ${d.calendar.nightGuardStart} – 次日 ${d.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],D=t.subscribeFloorEvents(T.floorId,async fe=>{fe.type==="control.receipt.updated"&&F?.batchId===fe.batchId&&(F=await t.getControlBatch(fe.batchId),H())});function H(){const fe=g.trim().toLowerCase(),be=fe?w.filter($=>`${$.name} ${$.description}`.toLowerCase().includes(fe)):w,we=d.rules.filter($=>qn.has($.category)),_e=E==="all"?we:E==="cbm"?[]:we.filter($=>$.category===E),Le=E==="all"||E==="cbm",P=V==="issues"?de.filter($=>$.status!=="verified"):de,J=_a.find($=>$.id===x)??_a[1],Se=a.scope.canControlDevices,W=a.scope.canEditScenes,b=a.scope.canEditSettings,A=a.scope.activeOverrides.find($=>$.module==="settings"&&$.status==="active");e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${Oa({tree:p,session:a,scope:n,isOpen:o,searchKeyword:l})}
            </div>

            <div class="pacom-header-meta">
              ${v==="rules"?b?A?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>':""}
              <button type="button" class="pacom-badge ${he.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${he.length>0?`人工覆盖中：${he.length} 台 ${re("chevron-down",12)}`:`全部自动托管 ${re("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${O?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${de.length}）</button>
              ${v==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1" ${W?"":"disabled"}>${c?"收起表单":"+ 新建场景"}</button>`:v==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${v==="manual"}" data-scene-tab="manual">快捷场景（${w.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${v==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${v==="rules"}" data-scene-tab="rules">条件联动（${we.length+ee.length}）</button>
          </nav>
        </header>

        ${S?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${he.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${re("x",16)}</button>
              </div>
              ${he.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':he.map($=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${s($.name)}</div>
                            <div class="pacom-row-sub">${s($.reason)}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${s($.id)}" ${Se?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${he.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${Se?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${O?`
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
                  <button class="pacom-tab" aria-selected="${V==="all"}" data-log-filter="all">全部（${de.length}）</button>
                  <button class="pacom-tab" aria-selected="${V==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${P.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${P.map($=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${s($.device)}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${s($.source)}</span>
                        </div>
                        <span class="pacom-row-sub">${s($.action)} ｜ ${s($.at)}</span>
                      </div>
                      <span class="pacom-badge ${$.status==="verified"?"pacom-badge--online":$.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${$.status==="verified"?"回读确认":$.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${G?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${s(G)}</span></div>`:""}
          ${se?`<div class="pacom-alert-banner">${s(se)}</div>`:""}

          ${v==="manual"?`
              ${F?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${s(F.batchId)}</span>
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
                            ${F.receipts.map($=>`
                                <tr>
                                  <td><code style="font-size:12px;">${s($.deviceId)}</code></td>
                                  <td>${s($.command)}</td>
                                  <td>${s(String($.targetValue))}${$.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${s($.errorMessage)}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${$.status==="verified_success"?"pacom-badge--online":$.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${s($.status)}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${c?`
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
                          <span class="pacom-setting-title">联动动作列表（${ce.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${ce.map(($,N)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" name="draftDevice-${N}" data-draft-dev="${N}" aria-label="目标设备">
                                ${h.map(ne=>`<option value="${s(ne.id)}" ${ne.id===$.deviceId?"selected":""}>${s(ne.name)}</option>`).join("")}
                              </select>
                              <select class="pacom-select" name="draftCommand-${N}" data-draft-cmd="${N}" aria-label="执行指令">
                                <option value="lighting.dimming" ${$.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${$.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${$.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" name="draftTargetValue-${N}" data-draft-val="${N}" value="${s($.targetValue)}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${N}" ${ce.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit" ${W?"":"disabled"}>保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="pacom-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${s(g)}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${be.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${be.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':be.map($=>{const N=On($),ne=$.actions.slice(0,3).map(ze=>{const tt=h.find(Ne=>Ne.id===ze.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??ze.deviceId,ot=ze.command==="lighting.dimming"?`亮度 ${ze.targetValue}%`:ze.command==="hvac.setpoint"?`设温 ${ze.targetValue}°C`:ze.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${s(tt)} → ${s(ot)}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${s($.name)}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${N.map(ze=>`<span class="pacom-badge pacom-badge--accent">${s(ze)}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${$.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${s($.description)}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${ne}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${s($.lastExecutedAt?$.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行")}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${s($.id)}" ${Se?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:v==="schedule_oss"?`
                <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">当前优化启停模式</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${J.title}</div>
                    <span class="pacom-kpi-delta">${J.estSaving}</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">明日预测预启动时刻</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${J.predictedStart}</div>
                    <span class="pacom-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">本周累计节省运行工时</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${J.savedHours}</div>
                    <span class="pacom-kpi-delta">当前人工覆盖挂起：${he.length} 台</span>
                  </div>
                </div>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="pacom-mode-grid">
                    ${_a.map($=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${x===$.id}" data-oss-mode="${$.id}" ${Se?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${$.title}</strong>
                          <span class="pacom-badge ${x===$.id?"pacom-badge--online":"pacom-badge--neutral"}">${x===$.id?"当前生效":$.badge}</span>
                        </div>
                        <span class="pacom-setting-desc">${$.desc}</span>
                        <span class="pacom-row-sub" style="margin-top:4px; color:var(--pacom-text-primary); font-weight:500;">${$.estSaving}</span>
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
                          ${Y.map($=>`
                              <tr>
                                <td>
                                  <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${s($.name)}</span>
                                    ${$.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${s($.windowLabel)}</div>
                                </td>
                                <td>${Tn($.startHour,$.endHour,$.enabled)}</td>
                                <td><span class="pacom-row-sub">${s($.scope)}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${$.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="pacom-switch"
                                      role="switch"
                                      aria-checked="${$.enabled}"
                                      aria-label="切换排程 ${s($.name)}"
                                      data-toggle-schedule="${s($.id)}"
                                      ${Se?"":"disabled"}
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map($=>{const N=$==="all"?"全部":xs[$]??$,ne=$==="all"?we.length+ee.length:$==="cbm"?ee.length:we.filter(ze=>ze.category===$).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${E===$}" data-rule-cat="${$}">
                              <span>${N}</span><span class="pacom-count-num">${ne}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${_e.map($=>{const N=B===$.id;return`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${s(xs[$.category]??$.category)}</span>
                                  <span>${s($.name)}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${$.version}</span>
                                </span>
                                <span class="pacom-setting-desc">${s($.summary)} ｜ 范围：${s($.scopeLabel)} ｜ 回执：${s($.receiptSummary??"已同步")}</span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${s($.id)}">${N?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${$.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="pacom-switch"
                                  role="switch"
                                  aria-checked="${$.enabled?"true":"false"}"
                                  aria-label="切换 ${s($.name)}"
                                  data-toggle-strategy-rule="${s($.id)}"
                                  data-rule-ver="${$.version}"
                                  data-rule-next="${!$.enabled}"
                                  ${b?"":"disabled"}
                                >
                                  <span class="pacom-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${N?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${$.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":$.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${s($.scopeLabel)} ｜ 当前版本：v${$.version} ｜ 最近同步：${s($.receiptSummary??"已同步")}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${Le?ee.map($=>{const N=Math.min(100,Math.round($.runtimeHours/$.thresholdHours*100));return`
                                <div class="pacom-setting-row">
                                  <div class="pacom-setting-meta" style="gap:6px;">
                                    <span class="pacom-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${s($.name)}</span>
                                      <span class="pacom-badge ${N>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${$.runtimeHours} / ${$.thresholdHours} h（${N}%）</span>
                                    </span>
                                    <div class="pacom-progress-track" style="max-width:340px;">
                                      <div class="pacom-progress-fill" style="width:${N}%; background:${N>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="pacom-setting-desc">绑定设备：${s($.equipment)} ｜ 上次重置：${s($.lastReset)}</span>
                                  </div>
                                  <div class="pacom-setting-control">
                                    <span class="pacom-row-sub">${$.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="pacom-switch" role="switch" aria-checked="${$.enabled}" data-toggle-cbm="${s($.id)}" aria-label="切换 ${s($.name)}" ${b?"":"disabled"}>
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,Ta(e,{onToggle:()=>{o=!o,H(),o&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:$=>{l=$,H();const N=e.querySelector("[data-global-space-search]");N&&(N.focus(),N.setSelectionRange($.length,$.length))},onPick:$=>{n=$,o=!1,H()}}),e.querySelectorAll("[data-scene-tab]").forEach($=>{$.addEventListener("click",()=>{v=$.dataset.sceneTab??"manual",G="",H()})}),e.querySelectorAll("[data-toggle-overrides]").forEach($=>{$.addEventListener("click",()=>{S=!S,H()})}),e.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{Se&&(he=[],G="已释放全部人工覆盖设备，自动节能策略已恢复托管。",H())}),e.querySelectorAll("[data-release-one]").forEach($=>{$.addEventListener("click",()=>{if(!Se)return;const N=$.dataset.releaseOne;he=he.filter(ne=>ne.id!==N),G="已恢复该设备的自动策略托管。",H()})}),e.querySelectorAll("[data-toggle-cmdlog]").forEach($=>{$.addEventListener("click",()=>{O=!O,H()})}),e.querySelectorAll("[data-log-filter]").forEach($=>{$.addEventListener("click",()=>{V=$.dataset.logFilter??"all",H()})}),e.querySelector("[data-close-batch]")?.addEventListener("click",()=>{F=null,H()}),e.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),e.querySelectorAll("[data-oss-mode]").forEach($=>{$.addEventListener("click",()=>{if(!Se)return;const N=$.dataset.ossMode;if(!N)return;x=N;const ne=_a.find(ze=>ze.id===N);G=`已切换至「${ne?.title??N}」模式（明日预测启动 ${ne?.predictedStart??""}）。`,H()})}),e.querySelectorAll("[data-toggle-schedule]").forEach($=>{$.addEventListener("click",()=>{if(!Se)return;const N=$.dataset.toggleSchedule,ne=Y.find(ze=>ze.id===N);ne&&(ne.enabled=!ne.enabled,G=`排程「${ne.name}」已${ne.enabled?"恢复启用":"临时暂停"}。`,H())})}),e.querySelectorAll("[data-rule-cat]").forEach($=>{$.addEventListener("click",()=>{E=$.dataset.ruleCat??"all",H()})}),e.querySelectorAll("[data-expand-rule]").forEach($=>{$.addEventListener("click",()=>{const N=$.dataset.expandRule??null;B=B===N?null:N,H()})}),e.querySelectorAll("[data-toggle-cbm]").forEach($=>{$.addEventListener("click",()=>{if(!b)return;const N=ee.find(ne=>ne.id===$.dataset.toggleCbm);N&&(N.enabled=!N.enabled,G=`工时维保规则「${N.name}」已${N.enabled?"启用":"停用"}。`,H())})}),e.querySelectorAll("[data-toggle-strategy-rule]").forEach($=>{$.addEventListener("click",async()=>{if(b){se="";try{await t.toggleRuntimeRule($.dataset.toggleStrategyRule,$.dataset.ruleNext==="true",Number($.dataset.ruleVer)),d=await t.getRuntimeSettings(T.projectId),G="条件联动规则状态与版本回执已更新。",H()}catch(N){se=N instanceof Error?N.message:String(N),H()}}})}),e.querySelectorAll("[data-toggle-create]").forEach($=>{$.addEventListener("click",()=>{!W&&!c||(c=!c,H())})}),e.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{W&&(ce.push({deviceId:h[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),H())}),e.querySelectorAll("[data-del-draft-action]").forEach($=>{$.addEventListener("click",()=>{if(!W)return;const N=Number($.dataset.delDraftAction);ce.length>1&&(ce.splice(N,1),H())})}),e.querySelectorAll("[data-draft-dev]").forEach($=>{$.addEventListener("change",()=>{if(!W)return;const N=ce[Number($.dataset.draftDev)];N&&(N.deviceId=$.value)})}),e.querySelectorAll("[data-draft-cmd]").forEach($=>{$.addEventListener("change",()=>{if(!W)return;const N=ce[Number($.dataset.draftCmd)];N&&(N.command=$.value)})}),e.querySelectorAll("[data-draft-val]").forEach($=>{$.addEventListener("change",()=>{if(!W)return;const N=ce[Number($.dataset.draftVal)];N&&(N.targetValue=$.value)})}),e.querySelector("[data-scene-search]")?.addEventListener("input",$=>{const N=$.currentTarget,ne=N.selectionStart??N.value.length;g=N.value,H();const ze=e.querySelector("[data-scene-search]");ze&&(ze.focus(),ze.setSelectionRange(ne,ne))}),e.querySelectorAll("[data-exec-scene]").forEach($=>{$.addEventListener("click",async()=>{if(!Se)return;se="";const N=w.find(ne=>ne.id===$.dataset.execScene);try{F=await t.executeScene($.dataset.execScene),w=await t.listScenes(T.floorId),de.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:N?.name??"E7F 场景",action:`${F.receipts.length} 台设备联动下发`,status:"verified"}),H()}catch(ne){se=ne instanceof Error?ne.message:String(ne),H()}})}),e.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async $=>{if($.preventDefault(),!W)return;const N=new FormData($.currentTarget);try{await t.createScene({projectId:T.projectId,floorId:T.floorId,name:String(N.get("name")??""),description:String(N.get("description")??""),actions:ce.map(ne=>({deviceId:ne.deviceId,command:ne.command,targetValue:ne.targetValue==="true"?!0:ne.targetValue==="false"?!1:Number(ne.targetValue)||50}))}),w=await t.listScenes(T.floorId),c=!1,G=`快捷场景已保存（共绑定 ${ce.length} 条联动动作）。`,H()}catch(ne){se=ne instanceof Error?ne.message:String(ne),H()}})}H(),window.addEventListener("hashchange",()=>D(),{once:!0})}const Is={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function Ha(e,t){return e.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':e.map(a=>`
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
            ${t?"":"disabled"}
          >
            <span class="pacom-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function Bn(e,t,a){let n="calendar",o=Ra(),l=!1,p="";const[w,d]=await Promise.all([t.getSpatialTree(),t.getRuntimeSettings(T.projectId)]);let h=d,v=h.calendar.workdayStart,x=h.calendar.workdayEnd,E=h.calendar.nightGuardStart,F=h.calendar.nightGuardEnd,g=!0,c=[];const S=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let O="flat";const V={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},B={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},G={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},se={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},he=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let de="",ee="";function ce(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(H=>{const fe=Is[H];return`
                <button type="button" class="pacom-unified-item" aria-current="${n===H}" data-stab="${H}">
                  ${re(fe.icon,16)}
                  <span>${fe.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function Y(){const D=a.scope.canEditSettings,H=a.scope.activeOverrides.find(P=>P.module==="settings"&&P.status==="active"),fe=w.projects[0]?.name??"当前项目",be=h.rules.filter(P=>P.category==="weather_area"),we=h.rules.filter(P=>P.category==="metering_carbon"),_e=h.rules.filter(P=>P.category==="templates"),Le=Is[n];e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${Oa({tree:w,session:a,scope:o,maxGranularity:"project",isOpen:l,searchKeyword:p})}
            </div>
            <div class="pacom-header-meta">
              ${D?H?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${ce()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head">
                <h2 class="pacom-unified-title">${Le.label}</h2>
                <p class="pacom-unified-subtitle">${Le.subtitle}</p>
              </div>
              ${H?`<div class="pacom-banner pacom-banner--ok">
                      <div class="pacom-banner-text">
                        <span class="pacom-banner-title">临时提权生效中（应用设置 ｜ ${H.durationHours}h）</span>
                        <span class="pacom-banner-sub">审批人：${s(H.approvedBy)} ｜ 到期自动收回：${s(H.expiresAt.slice(0,16).replace("T"," "))} ｜ 事由：${s(H.reason)}</span>
                      </div>
                    </div>`:""}
              ${de?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${s(de)}</span></div>`:""}
              ${ee?`<div class="pacom-alert-banner">${s(ee)}</div>`:""}

              ${n==="calendar"?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">工作时间与夜间值守基准</h2>
                      <span class="pacom-badge pacom-badge--neutral">版本 v${h.calendar.version}</span>
                    </div>
                    <div class="pacom-settings-card">
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">工作日上班 / 下班时间</span>
                          <span class="pacom-setting-desc">驱动「智能策略 → 排程与节能」早间预冷及公区照明启停；晚于 21:30 将自动提示交叠冲突</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calWorkdayStart" style="width:116px;" type="time" data-cal-start value="${s(v)}" aria-label="工作日上班时间" ${D?"":"disabled"} />
                          <span class="pacom-row-sub">至</span>
                          <input class="pacom-input" name="calWorkdayEnd" style="width:116px;" type="time" data-cal-end value="${s(x)}" aria-label="工作日下班时间" ${D?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calNightGuardStart" style="width:116px;" type="time" data-night-start value="${s(E)}" aria-label="夜间值守开始" ${D?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" name="calNightGuardEnd" style="width:116px;" type="time" data-night-end value="${s(F)}" aria-label="夜间值守结束" ${D?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">自动跳过中国法定节假日</span>
                          <span class="pacom-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                        </div>
                        <div class="pacom-setting-control">
                          <span class="pacom-row-sub">${g?"已开启":"已关闭"}</span>
                          <button type="button" class="pacom-switch" role="switch" aria-checked="${g}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${D?"":"disabled"}>
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
                      <span class="pacom-row-sub">共 ${S.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${S.map(P=>`
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title"><span>${s(P.date)}</span><span class="pacom-badge pacom-badge--accent">${s(P.mode)}</span></span>
                              <span class="pacom-setting-desc">${s(P.label)}</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${s(P.id)}" ${D?"":"disabled"}>移除</button>
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

                  ${c.length>0?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">受影响的定时与夜间规则预览</h2>
                          <span class="pacom-row-sub">共 ${c.length} 条</span>
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
                                ${c.map(P=>`
                                    <tr>
                                      <td>
                                        <div style="font-weight:450;">${s(P.ruleName)}</div>
                                        ${P.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${s(P.conflictWarning)}</div>`:""}
                                      </td>
                                      <td>${s(P.beforeWindow)}</td>
                                      <td><strong>${s(P.afterWindow)}</strong></td>
                                      <td>
                                        <span class="pacom-badge ${P.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                          ${P.conflictWarning?"交叠警告":"自动跟随"}
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
                            <select class="pacom-select" name="energyWeatherSource" data-energy-field="weatherSource" aria-label="室外气象数据源" ${D?"":"disabled"}>
                              <option value="guanzhou_station" ${V.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                              <option value="campus_sensor" ${V.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                            </select>
                          </div>
                        </div>
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">${s(fe)}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" name="energyBillingArea" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${s(V.billingArea)}" aria-label="计费面积" ${D?"":"disabled"} />
                          </div>
                        </div>
                        ${Ha(be,D)}
                      </div>
                    </section>

                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">电价与碳排口径</h2>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${O==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                          <button class="pacom-tab" aria-selected="${O==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                        </div>
                      </div>
                      <div class="pacom-settings-card">
                        ${O==="flat"?`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">综合电价参考（元 / kWh）</span>
                                <span class="pacom-setting-desc">用于数据分析中的月度节能金额估算</span>
                              </div>
                              <div class="pacom-setting-control">
                                <input class="pacom-input" name="energyTariffYuan" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${s(V.tariffYuan)}" aria-label="综合电价" ${D?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 ｜ 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" name="energyTariffPeak" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${s(V.tariffPeak)}" aria-label="峰段电价" ${D?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" name="energyTariffFlat" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${s(V.tariffFlat)}" aria-label="平段电价" ${D?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" name="energyTariffValley" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${s(V.tariffValley)}" aria-label="谷段电价" ${D?"":"disabled"} />
                              </div>
                            </div>`}
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">区域电网碳排放因子</span>
                            <span class="pacom-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" name="energyCarbonFactor" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${D?"":"disabled"}>
                              <option value="0.5271" ${V.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                              <option value="0.5703" ${V.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                            </select>
                          </div>
                        </div>
                        ${Ha(we,D)}
                        <div class="pacom-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${D?"":"disabled"}>保存口径参数</button>
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
                              <input class="pacom-input" name="guardMinTemp" style="width:72px;" type="number" data-guard-field="minTemp" value="${s(B.minTemp)}" aria-label="最低设定温度" ${D?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" name="guardMaxTemp" style="width:72px;" type="number" data-guard-field="maxTemp" value="${s(B.maxTemp)}" aria-label="最高设定温度" ${D?"":"disabled"} />
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
                                <option value="2h" ${B.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                                <option value="4h" ${B.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                                <option value="eod" ${B.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                                <option value="permanent" ${B.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                              </select>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">控制指令回读超时阈值（秒）</span>
                              <span class="pacom-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" name="guardReadbackTimeoutSec" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${s(B.readbackTimeoutSec)}" aria-label="回读超时阈值" ${D?"":"disabled"} />
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
                          ${Ha(_e,D)}
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
                              <input class="pacom-input" name="dailyDigestTime" style="width:116px;" type="time" data-digest-time value="${s(se.dailyDigestTime)}" aria-label="每日简报发送时间" ${D?"":"disabled"} />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${se.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报" ${D?"":"disabled"}>
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
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${se.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰" ${D?"":"disabled"}>
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
                              <input class="pacom-input" name="autoWoDelayMin" style="width:72px;" type="number" data-auto-wo="delayMin" value="${s(G.delayMin)}" aria-label="自动派单延迟分钟数" ${D?"":"disabled"} />
                              <span class="pacom-row-sub">分钟</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${G.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${D?"":"disabled"}>
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
                                <option value="暖通运维组" ${G.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                                <option value="强电照明组" ${G.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                                <option value="园区物业值班组" ${G.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                              </select>
                              <span class="pacom-row-sub">防重</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${G.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${D?"":"disabled"}>
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
                                ${he.map(P=>`
                                    <tr>
                                      <td><strong>${s(P.groupName)}</strong></td>
                                      <td>${s(P.scope)}</td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${s(P.severity)}</span></td>
                                      <td><span class="pacom-badge pacom-badge--accent">${s(P.channels)}</span></td>
                                      <td style="text-align:right;">
                                        <button type="button" class="pacom-switch" role="switch" aria-checked="${P.enabled}" data-toggle-nr="${s(P.id)}" aria-label="切换 ${s(P.groupName)} 通知规则" ${D?"":"disabled"}>
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
    `,Ta(e,{onToggle:()=>{l=!l,Y(),l&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:P=>{p=P,Y();const J=e.querySelector("[data-global-space-search]");J&&(J.focus(),J.setSelectionRange(P.length,P.length))},onPick:P=>{o=P,l=!1,Y()}}),e.querySelectorAll("[data-stab]").forEach(P=>{P.addEventListener("click",()=>{n=P.dataset.stab??"calendar",de="",ee="",Y()})}),e.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{D&&(g=!g,de=`法定节假日自动跳过已${g?"开启":"关闭"}。`,Y())}),e.querySelector("[data-night-start]")?.addEventListener("change",P=>{D&&(E=P.currentTarget.value)}),e.querySelector("[data-night-end]")?.addEventListener("change",P=>{D&&(F=P.currentTarget.value)}),e.querySelector("[data-add-sd-form]")?.addEventListener("submit",P=>{if(P.preventDefault(),!D)return;const J=new FormData(P.currentTarget);S.push({id:`sd-${Date.now()}`,date:String(J.get("date")??""),label:String(J.get("label")??""),mode:String(J.get("mode")??"保持工作日工况")}),de="已添加特殊例外日期，当日自动覆盖默认节假日排程。",Y()}),e.querySelectorAll("[data-del-sd]").forEach(P=>{P.addEventListener("click",()=>{if(!D)return;const J=S.findIndex(Se=>Se.id===P.dataset.delSd);J>=0&&S.splice(J,1),Y()})}),e.querySelectorAll("[data-tariff-mode]").forEach(P=>{P.addEventListener("click",()=>{O=P.dataset.tariffMode??"flat",Y()})}),e.querySelectorAll("[data-energy-field]").forEach(P=>{P.addEventListener("change",()=>{if(!D)return;const J=P.dataset.energyField;J&&(V[J]=P.value)})}),e.querySelector("[data-save-energy]")?.addEventListener("click",()=>{D&&(de=O==="flat"?`能耗计费与气象口径已保存（面积 ${V.billingArea} m² ｜ 综合电价 ¥${V.tariffYuan}/kWh ｜ 因子 ${V.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${V.tariffPeak} / 平 ¥${V.tariffFlat} / 谷 ¥${V.tariffValley}）。`,Y())}),e.querySelectorAll("[data-guard-field]").forEach(P=>{P.addEventListener("change",()=>{if(!D)return;const J=P.dataset.guardField;J&&(B[J]=P.value)})}),e.querySelector("[data-save-guard]")?.addEventListener("click",()=>{D&&(de=`控制保护参数已保存（温区 ${B.minTemp}–${B.maxTemp}°C ｜ 超时 ${B.readbackTimeoutSec}s）。`,Y())}),e.querySelectorAll("[data-auto-wo]").forEach(P=>{P.addEventListener("change",()=>{if(!D)return;const J=P.dataset.autoWo;J&&(G[J]=P.value),de="超时自动派单配置已更新。",Y()})}),e.querySelectorAll("[data-toggle-autowo]").forEach(P=>{P.addEventListener("click",()=>{if(!D)return;const J=P.dataset.toggleAutowo;J&&(G[J]=!G[J],de="自动派单保护策略已更新。",Y())})}),e.querySelector("[data-digest-time]")?.addEventListener("change",P=>{D&&(se.dailyDigestTime=P.currentTarget.value,de=`每日晨间简报发送时刻已更新为 ${se.dailyDigestTime}。`,Y())}),e.querySelectorAll("[data-notify-key]").forEach(P=>{P.addEventListener("click",()=>{if(!D)return;const J=P.dataset.notifyKey;J&&(se[J]=!se[J],de="消息通知偏好已更新。",Y())})}),e.querySelectorAll("[data-toggle-nr]").forEach(P=>{P.addEventListener("click",()=>{if(!D)return;const J=he.find(Se=>Se.id===P.dataset.toggleNr);J&&(J.enabled=!J.enabled,de=`工作组「${J.groupName}」的分流推送规则已${J.enabled?"启用":"停用"}。`,Y())})}),e.querySelector("[data-cal-start]")?.addEventListener("change",P=>{D&&(v=P.currentTarget.value)}),e.querySelector("[data-cal-end]")?.addEventListener("change",P=>{D&&(x=P.currentTarget.value)}),e.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{ee="";try{c=await t.previewCalendarImpact(T.projectId,v,x),Y()}catch(P){ee=P instanceof Error?P.message:String(P),Y()}}),e.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{if(D){ee="";try{const P=await t.saveWorkCalendar(T.projectId,v,x,h.calendar.version);h={...h,calendar:{...P,nightGuardStart:E,nightGuardEnd:F}},de=`工作时间配置已保存至 v${P.version}（工作日 ${P.workdayStart}–${P.workdayEnd} ｜ 夜间值守 ${E}–${F}）`,c=[],Y()}catch(P){ee=P instanceof Error?P.message:String(P),Y()}}}),e.querySelectorAll("[data-toggle-rule]").forEach(P=>{P.addEventListener("click",async()=>{if(D){ee="";try{await t.toggleRuntimeRule(P.dataset.toggleRule,P.dataset.ruleNext==="true",Number(P.dataset.ruleVer)),h=await t.getRuntimeSettings(T.projectId),de="策略状态与版本回执已更新。",Y()}catch(J){ee=J instanceof Error?J.message:String(J),Y()}}})})}Y()}const ks="pacom.web.sidebar.collapsed",Pn=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,As=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],es={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},Ds=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function Wa(){const e=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return e in es?e:"home"}function rt(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}const fa=new WeakMap;function zn(e){fa.get(e)?.()}async function Nn(e,t,a,n){fa.get(e)?.(),e.classList.remove("bare-login");let o=a,l=Wa(),p=localStorage.getItem(ks)==="1",w=!1,d=!1,h=!1,v=await t.listOrganizations?.()??[{id:"org-gzlab",name:"广州国家实验室",projectCount:2}],x=t.getActiveOrganizationId?.()??v[0]?.id??"org-gzlab",E="",F=!1,g=0,c={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};function S(b){return o.scope.visibleModules.includes(b)}S(l)||(l="home",window.location.hash="#home");function O(){return v.find(b=>b.id===x)??v[0]??{id:"org-gzlab",name:"广州国家实验室",projectCount:0}}function V(b){if(b.id==="org-gzlab")return'<span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>';const A=b.name.slice(0,1)||"机";return`<span class="pacom-pop-avatar" style="width:24px; height:24px; font-size:12px; border-radius:6px;" aria-hidden="true">${rt(A)}</span>`}async function B(){t.listOrganizations&&(v=await t.listOrganizations(),x=t.getActiveOrganizationId?.()??v[0]?.id??"org-gzlab")}async function G(){try{await B();const[b,A,j,$,N]=await Promise.all([t.getSpatialTree(),t.getFloorDevices(T.floorId).catch(()=>[]),t.listAlarms(T.floorId).catch(()=>[]),t.listWorkOrders(T.floorId).catch(()=>[]),t.listScenes(T.floorId).catch(()=>[])]);c={devices:A,zones:b.zones,alarms:j,workOrders:$,scenes:N},g=j.filter(ne=>ne.status==="active").length,H()}catch{}}function se(){const b=As.filter(j=>S(j.id));let A=!1;return b.map(j=>`
        ${(j.id==="settings"||j.id==="deployment")&&!A?(A=!0,'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>'):""}
        <button type="button" class="pacom-nav-item" data-route="${j.id}" aria-current="${l===j.id?"page":"false"}" title="${j.label}">
          ${re(j.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${j.label}</span>
          ${j.id==="alarms"&&g>0?`<span class="pacom-nav-count" title="待处理告警 ${g} 条">${g}</span>`:""}
        </button>`).join("")}function he(){const b=E.trim().toLowerCase(),A=As.filter(te=>S(te.id)),j=b?A.filter(te=>te.label.toLowerCase().includes(b)).slice(0,4):A,$=b?c.devices.filter(te=>`${te.name} ${te.id} ${te.category}`.toLowerCase().includes(b)).slice(0,5):c.devices.slice(0,3),N=b?c.zones.filter(te=>te.name.toLowerCase().includes(b)).slice(0,3):[],ne=S("alarms")?b?c.alarms.filter(te=>`${te.title} ${te.message} ${te.id}`.toLowerCase().includes(b)).slice(0,4):c.alarms.filter(te=>te.status==="active").slice(0,2):[],ze=S("alarms")?b?c.workOrders.filter(te=>`${te.title} ${te.id}`.toLowerCase().includes(b)).slice(0,3):[]:[],tt=S("scenes")?b?c.scenes.filter(te=>`${te.name} ${te.description}`.toLowerCase().includes(b)).slice(0,3):[]:[],ot=S("deployment")?b?Ds.filter(te=>`${te.title} ${te.category}`.toLowerCase().includes(b)).slice(0,4):Ds.slice(0,2):[],Ne=[];return $.length&&Ne.push(`<div class="pacom-search-group">${b?"设备（空间总览）":"常用设备直达"}</div>`+$.map(te=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(te.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${rt(te.name)}</span><span class="pacom-badge ${te.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${te.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),N.length&&Ne.push('<div class="pacom-search-group">功能区</div>'+N.map(te=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(te.id)}"><span>${rt(te.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),ne.length&&Ne.push(`<div class="pacom-search-group">${b?"告警":"待处理告警"}</div>`+ne.map(te=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(te.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${rt(te.title)}</span><span class="pacom-badge pacom-badge--warning">${te.status==="active"?"待处理":"已确认"}</span></button>`).join("")),ze.length&&Ne.push('<div class="pacom-search-group">运维工单</div>'+ze.map(te=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(te.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${rt(te.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),tt.length&&Ne.push('<div class="pacom-search-group">智能策略</div>'+tt.map(te=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${rt(te.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),ot.length&&Ne.push('<div class="pacom-search-group">图纸与工程文档</div>'+ot.map(te=>`<button type="button" class="pacom-search-hit" data-search-hash="${te.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${rt(te.title)}</span><span class="pacom-badge pacom-badge--neutral">${rt(te.category)}</span></button>`).join("")),j.length&&Ne.push('<div class="pacom-search-group">工作区</div>'+j.map(te=>`<button type="button" class="pacom-search-hit" data-search-hash="#${te.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${re(te.icon,14)}${rt(te.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),Ne.length?Ne.join(""):`<div class="pacom-nav-empty">未找到与「${rt(E)}」匹配的设备、区域、告警、工单或图纸</div>`}function de(b){b.querySelectorAll("[data-search-hash]").forEach(A=>{A.addEventListener("click",()=>{const j=A.dataset.searchHash||"#home";F=!1,E="",ee(),w=!1,window.location.hash===j?(l=Wa(),Le(!0)):window.location.hash=j})})}function ee(){if(e.querySelector('[data-role="cmd-scrim"]')?.remove(),!F)return;const b=document.createElement("div");b.className="pacom-cmd-scrim",b.dataset.role="cmd-scrim",b.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${re("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${rt(E)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${he()}
        </div>
      </div>
    `,e.appendChild(b),b.addEventListener("click",$=>{$.target===b&&(F=!1,ee())});const A=b.querySelector('[data-role="cmd-input"]'),j=b.querySelector('[data-role="cmd-body"]');j&&de(j),A?.focus(),A?.addEventListener("input",$=>{E=$.currentTarget.value,j&&(j.innerHTML=he(),de(j))})}function ce(){if(!d)return"";const b=o.displayName.slice(0,1)||"U",A=!!(t.createOrganization&&o.role==="org_admin");return`
      <div class="pacom-org-popover ${p?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <div class="pacom-pop-section-label">切换机构</div>
        ${v.map(j=>{const $=j.id===x;return`
              <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitemradio" aria-checked="${$}" data-pop-org="${rt(j.id)}">
                ${V(j)}
                <span class="pacom-pop-text">
                  <b>${rt(j.name)}</b>
                  <small>${j.projectCount>0?`${j.projectCount} 个项目`:"暂无项目"}</small>
                </span>
                ${$?re("check",16,"pacom-pop-check"):""}
              </button>`}).join("")}
        ${A?h?`
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
          <span class="pacom-pop-avatar" aria-hidden="true">${rt(b)}</span>
          <span class="pacom-pop-text">
            <b>${rt(o.displayName)}</b>
            <small>${rt(o.roleLabel)}</small>
          </span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${re("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function Y(b){switch(S(l)||(l="home",window.location.hash="#home"),document.title=`${es[l]} ｜ PACOM Station`,l){case"home":await en(b,t,o);return;case"analysis":await Xs(b,t,o);return;case"alarms":await vn(b,t,o);return;case"scenes":await Rn(b,t,o);return;case"settings":await Bn(b,t,o);return;case"deployment":await Mn(b,t,o);return;case"account":await cn(b,t,o,A=>{o=A,H(),fe()},D);return}}async function D(){d=!1,w=!1,F=!1,W();try{await t.logout()}finally{window.location.hash="#login",n()}}function H(){const b=e.querySelector('[data-role="nav-list"]');b&&(b.innerHTML=se(),be())}function fe(){e.querySelector('[data-role="org-popover"]')?.remove();const b=e.querySelector('[data-role="org-menu-btn"]');if(b&&b.setAttribute("aria-expanded",String(d)),!d)return;const A=document.createElement("div");A.innerHTML=ce().trim();const j=A.firstElementChild;j&&(e.appendChild(j),_e())}function be(){e.querySelectorAll("[data-route]").forEach(b=>{b.addEventListener("click",()=>{const A=b.dataset.route;A===l&&!w||(l=A,w=!1,d=!1,window.location.hash=`#${l}`,Le(!0))})})}async function we(b){if(!t.switchOrganization)return;await t.switchOrganization(b),await B();const A=await t.getSpatialTree(),j=A.projects[0],$=j?A.buildings.find(ne=>ne.projectId===j.id):void 0,N=$?A.floors.find(ne=>ne.buildingId===$.id&&ne.id===T.floorId)??A.floors.find(ne=>ne.buildingId===$.id):void 0;j&&$&&N?Ft({level:"floor",projectId:j.id,buildingId:$.id,floorId:N.id}):j&&$?Ft({level:"building",projectId:j.id,buildingId:$.id}):j?Ft({level:"project",projectId:j.id}):Ft({level:"all-projects"}),d=!1,h=!1,w=!1,await Le(!0),G()}function _e(){e.querySelectorAll("[data-pop-org]").forEach(b=>{b.addEventListener("click",()=>{const A=b.dataset.popOrg;if(A){if(A===x){d=!1,fe();return}we(A)}})}),e.querySelector('[data-pop-act="toggle-new-org"]')?.addEventListener("click",b=>{b.stopPropagation(),h=!h,fe(),h&&e.querySelector('[data-create-org-form] input[name="orgName"]')?.focus()}),e.querySelector("[data-create-org-form]")?.addEventListener("submit",async b=>{if(b.preventDefault(),!t.createOrganization)return;const A=new FormData(b.currentTarget),j=String(A.get("orgName")??"").trim();if(!j)return;const $=await t.createOrganization(j);await we($.id)}),e.querySelectorAll('[data-pop-act="go-account"]').forEach(b=>{b.addEventListener("click",()=>{d=!1,h=!1,w=!1,l="account",window.location.hash="#account",Le(!0)})}),e.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{D()})}async function Le(b){const A=e.querySelector('[data-role="main-stage"]');if(!b&&A){const $=e.querySelector(".pacom-nav-rail");$&&($.classList.toggle("is-collapsed",p),$.classList.toggle("is-mobile-open",w));const N=e.querySelector('[data-role="mobile-scrim"]');N&&N.classList.toggle("is-open",w),fe();return}e.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${re("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${es[l]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${rt(o.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${w?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${p?"is-collapsed":""} ${w?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${Pn}</div>
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
            ${se()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${l==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${d}" title="${rt(O().name)} ｜ ${rt(o.displayName)}">
              ${V(O())}
              <span class="pacom-org-name">${rt(O().name)}</span>
              ${re("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,e.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{p=!p,d=!1,localStorage.setItem(ks,p?"1":"0");const $=e.querySelector(".pacom-nav-rail"),N=e.querySelector('[data-role="toggle-sidebar"]');$&&$.classList.toggle("is-collapsed",p),N&&(N.title=p?"展开侧栏":"收起侧栏",N.setAttribute("aria-label",N.title),N.innerHTML=re("panel-left",16)),fe()}),e.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{d=!1,fe(),F=!0,ee()}),e.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{w=!w,Le(!1)}),e.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{w=!1,d=!1,Le(!1)}),e.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",$=>{$.stopPropagation(),d=!d,fe()}),be(),fe(),ee();const j=e.querySelector('[data-role="main-stage"]');j&&await Y(j)}const P=b=>{const A=b.target;d&&!A?.closest('[data-role="org-popover"]')&&!A?.closest('[data-role="org-menu-btn"]')&&(d=!1,fe())},J=b=>{if((b.metaKey||b.ctrlKey)&&b.key.toLowerCase()==="k"){b.preventDefault(),d=!1,fe(),F=!F,ee();return}b.key==="Escape"&&(F?(F=!1,ee()):d?(d=!1,fe()):w&&(w=!1,Le(!1)))},Se=()=>{l=Wa(),d=!1,w=!1,F=!1,Le(!0),G()};function W(){document.removeEventListener("click",P),document.removeEventListener("keydown",J),window.removeEventListener("hashchange",Se),fa.get(e)===W&&fa.delete(e)}fa.set(e,W),document.addEventListener("click",P),document.addEventListener("keydown",J),window.addEventListener("hashchange",Se),await Le(!0),G()}const Lt=["password","sms"];function Ga(e){const t=tn(e);return t==="cn"||t==="phone"}const ga=new WeakMap;function _s(e){ga.get(e)?.()}function Un(e,t,a,n){ga.get(e)?.(),e.classList.add("bare-login"),document.title="登录 ｜ PACOM Station";let o=!1,l=!1,p=(n?.prefillAccount??"").trim(),w="",d=Ga(p)?p:"",h="",v=!1,x=(n?.notice??"").trim(),E={},F="",g=!1,c="",S=0,O=null,V=0,B=null,G=1,se="",he="",de="",ee="",ce=!1,Y=!1,D={},H="",fe=0,be=null,we=0,_e=null,Le=null,P=null,J=null,Se=!1;const W=Fs();function b(m){if(m.key==="Escape"){if(W.isOpen()){m.preventDefault(),W.close(!0);return}B&&(m.preventDefault(),Ie())}}function A(m){const R=e.querySelector('[data-role="mode-seg"]'),ue=R?.querySelector(".au-mode-indicator"),xe=R?.querySelector('.au-mode-tab[aria-selected="true"]');!ue||!xe||(ue.style.transition=m?"":"none",ue.style.transform=`translateX(${xe.offsetLeft}px)`,ue.style.width=`${xe.offsetWidth}px`,m||(ue.offsetWidth,ue.style.transition=""))}function j(){A(!1)}function $(){S=0,O!==null&&(window.clearInterval(O),O=null)}function N(){fe=0,be!==null&&(window.clearInterval(be),be=null)}function ne(){Le?.(),Le=null,P?.(),P=null}function ze(){Se=!0,J?.(),J=null,ne(),W.destroy(),$(),N(),document.removeEventListener("keydown",b),window.removeEventListener("resize",j),e.classList.remove("bare-login"),ga.get(e)===ze&&ga.delete(e)}document.addEventListener("keydown",b),window.addEventListener("resize",j),ga.set(e,ze);function tt(m=60){$(),S=m,O=window.setInterval(()=>{S-=1,S<=0&&$();const R=e.querySelector('[data-act="send-sms"]');R&&(R.disabled=S>0,R.textContent=S>0?`${S} 秒后重发`:c?"重新获取":"获取验证码")},1e3)}function ot(m=60){N(),fe=m,be=window.setInterval(()=>{fe-=1,fe<=0&&N();const R=e.querySelector('[data-act="reset-resend"]');R&&(R.disabled=fe>0||Y,R.textContent=fe>0?`${fe} 秒后重发`:"重新获取")},1e3)}function Ne(m){x=m.trim();const R=e.querySelector('[data-role="login-notice"]');if(!x){R?.remove();return}if(R){const xe=R.querySelector("span");xe&&(xe.textContent=x);return}const ue=e.querySelector(".au-h1");ue&&ue.insertAdjacentHTML("afterend",`<div class="au-notice-soft au-login-notice" data-role="login-notice" role="status">${ja}<span>${s(x)}</span></div>`)}function te(){const m=e.querySelector("#au-login-ferr");if(m)if(F){m.hidden=!1;const R=m.querySelector('[data-role="ferr-text"]');R&&(R.textContent=F)}else m.hidden=!0}function M(m){const R=e.querySelector(`.au-field[data-f="${m}"]`),ue=e.querySelector(`#au-${m}`),xe=e.querySelector(`#au-${m}-err`),at=E[m]??"";R?.classList.toggle("bad",!!at),ue?.setAttribute("aria-invalid",at?"true":"false"),xe&&(xe.textContent=at)}function q(m,R){const ue=m.querySelector(`.au-field[data-f="${R}"]`),xe=m.querySelector(`#au-${R}`),at=m.querySelector(`#au-${R}-err`),We=D[R]??"";ue?.classList.toggle("bad",!!We),xe?.setAttribute("aria-invalid",We?"true":"false"),at&&(at.textContent=We)}function Z(m){const R=m.querySelector("#au-rs-ferr");if(R)if(H){R.hidden=!1;const ue=R.querySelector('[data-role="rs-ferr-text"]');ue&&(ue.textContent=H)}else R.hidden=!0}function pe(){const m=e.querySelector('form[data-form="login"] fieldset'),R=e.querySelector('form[data-form="login"] button[type="submit"]');m&&(m.disabled=g),R&&(R.disabled=g,R.innerHTML=g?'<span class="au-spinner" aria-hidden="true"></span><span>正在登录…</span>':"<span>登录</span>")}function ie(m,R){W.close(!1),_e=R??(document.activeElement instanceof HTMLElement?document.activeElement:null),B=m,ke(),m==="reset"?e.querySelector(G===1?"#au-rs_id":"#au-rs_code")?.focus():e.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function Ie(m=!0){if(!B)return;W.close(!1),B=null,we+=1,Y=!1,N(),ne(),ke();const R=_e;_e=null,m&&R&&document.contains(R)&&R.focus({preventScroll:!0})}function Qe(m){const R=m?"au-account-scrim is-no-anim":"au-account-scrim";if(G===1){const xe=se.trim().length>0&&!Y;return`
        <div class="${R}" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${qa}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码。</p>
              <form id="au-reset-form" novalidate>
                <fieldset ${Y?"disabled":""}>
                  <div class="au-field ${D.rs_id?"bad":""}" data-f="rs_id">
                    <div class="au-lab"><label for="au-rs_id">电子邮箱或手机号码</label></div>
                    <div class="au-ctl">
                      <input id="au-rs_id" name="rs_id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(se)}" aria-invalid="${D.rs_id?"true":"false"}" />
                    </div>
                    <p class="au-err" id="au-rs_id-err" aria-live="polite">${s(D.rs_id??"")}</p>
                  </div>
                  <div class="au-ferr" id="au-rs-ferr" role="alert" ${H?"":"hidden"}>
                    ${Pt}
                    <span data-role="rs-ferr-text">${s(H)}</span>
                  </div>
                </fieldset>
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary" data-role="reset-submit" ${xe?"":"disabled"}>
                ${Y?'<span class="au-spinner" aria-hidden="true"></span><span>发送中…</span>':"<span>发送验证码</span>"}
              </button>
            </div>
          </section>
        </div>
      `}return`
      <div class="${R}" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">重置密码</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${qa}</button>
          </div>
          <div class="db">
            <div class="au-notice-soft au-reset-step-notice" role="status" aria-live="polite">
              <span class="au-notice-main">${ja}<span>如该账户已注册，验证码已发送至 ${s(he)}</span></span>
              <button type="button" class="au-notice-action" data-act="reset-back-step1" ${Y?"disabled":""}>更换账户</button>
            </div>
            <form id="au-reset-confirm-form" novalidate>
              <fieldset ${Y?"disabled":""}>
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
                    <input id="au-rs_code" name="rs_code" class="au-in has-code-btn" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(de)}" aria-invalid="${D.rs_code?"true":"false"}" />
                    <button type="button" class="au-suffix au-getcode" data-act="reset-resend" ${fe>0||Y?"disabled":""}>
                      ${fe>0?`${fe} 秒后重发`:"重新获取"}
                    </button>
                  </div>
                  <p class="au-err" id="au-rs_code-err" aria-live="polite">${s(D.rs_code??"")}</p>
                </div>

                <div class="au-field ${D.rs_pwd?"bad":""}" data-f="rs_pwd">
                  <div class="au-lab">
                    <span class="au-lab-group">
                      <label for="au-rs_pwd">设置新密码</label>
                      ${la("au-rs-pwd-info","设置新密码说明",Ka)}
                    </span>
                  </div>
                  <div class="au-ctl">
                    <input id="au-rs_pwd" name="rs_pwd" class="au-in has-suffix" type="${ce?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(ee)}" aria-invalid="${D.rs_pwd?"true":"false"}" />
                    <button type="button" class="au-suffix au-eye" data-act="reset-toggle-eye" aria-controls="au-rs_pwd" aria-label="${ce?"隐藏密码":"显示密码"}">
                      ${ce?Ut:Nt}
                    </button>
                  </div>
                  <p class="au-err" id="au-rs_pwd-err" aria-live="polite">${s(D.rs_pwd??"")}</p>
                </div>

                <div class="au-ferr" id="au-rs-ferr" role="alert" ${H?"":"hidden"}>
                  ${Pt}
                  <span data-role="rs-ferr-text">${s(H)}</span>
                </div>
              </fieldset>
            </form>
          </div>
          <div class="df">
            <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
            <button type="submit" form="au-reset-confirm-form" class="au-dlg-btn au-dlg-btn--primary" data-role="reset-confirm" ${Y?"disabled":""}>
              ${Y?'<span class="au-spinner" aria-hidden="true"></span><span>正在重置…</span>':"<span>确认重置</span>"}
            </button>
          </div>
        </section>
      </div>
    `}function je(m){return B?B==="reset"?Qe(m):B==="contact"?Rs():"":""}function ke(){const m=e.querySelector('[data-role="modal-host"]');if(!m)return;const R=m.childElementCount>0;if(ne(),W.close(!1),m.innerHTML=je(R),!B)return;W.bind(m),Le=Os(m.querySelector(".au-account-dlg")),P=Ts(m),m.querySelectorAll('[data-act="close-modal"]').forEach(Ke=>{Ke.addEventListener("click",()=>Ie())}),m.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",Ke=>{Ke.target===Ke.currentTarget&&Ie()});const ue=m.querySelector("#au-rs_id"),xe=m.querySelector('[data-role="reset-submit"]');ue?.addEventListener("input",()=>{se=ue.value,xe&&(xe.disabled=se.trim().length===0||Y),(D.rs_id||H)&&(delete D.rs_id,H="",q(m,"rs_id"),Z(m))}),m.querySelector("#au-reset-form")?.addEventListener("submit",async Ke=>{if(Ke.preventDefault(),Y)return;D={},H="";const Ue=it(ue?.value??se);se=Ue;const Te=Ma(Ue);if(Te){D.rs_id=Te,q(m,"rs_id"),ue?.focus({preventScroll:!0});return}const Ce=++we;Y=!0,ke();try{const ut=await t.sendVerificationCode({target:Ue,purpose:"reset"});if(Se||B!=="reset"||Ce!==we)return;Y=!1,he=ut.maskedTarget||zt(Ue),de="",ee="",D={},H="",G=2,ot(ut.cooldownSeconds||60),ke(),e.querySelector("#au-rs_code")?.focus({preventScroll:!0})}catch(ut){if(Se||B!=="reset"||Ce!==we)return;Y=!1,H=ut instanceof Error?ut.message:"暂时无法发送验证码，请稍后再试。",ke(),e.querySelector("#au-rs_id")?.focus({preventScroll:!0})}}),m.querySelector('[data-act="reset-back-step1"]')?.addEventListener("click",()=>{Y||(we+=1,N(),G=1,de="",ee="",D={},H="",ke(),e.querySelector("#au-rs_id")?.focus({preventScroll:!0}))});const at=m.querySelector("#au-rs_code"),We=m.querySelector("#au-rs_pwd");at?.addEventListener("input",()=>{de=at.value.replace(/\D/g,"").slice(0,6),at.value=de,(D.rs_code||H)&&(delete D.rs_code,H="",q(m,"rs_code"),Z(m))}),We?.addEventListener("input",()=>{ee=We.value,(D.rs_pwd||H)&&(delete D.rs_pwd,H="",q(m,"rs_pwd"),Z(m))}),m.querySelector('[data-act="reset-toggle-eye"]')?.addEventListener("click",Ke=>{ce=!ce;const Ue=Ke.currentTarget;if(We){const Te=We.selectionStart,Ce=We.selectionEnd;We.type=ce?"text":"password",We.focus({preventScroll:!0}),Te!==null&&Ce!==null&&We.setSelectionRange(Te,Ce)}Ue.setAttribute("aria-label",ce?"隐藏密码":"显示密码"),Ue.innerHTML=ce?Ut:Nt}),m.querySelector('[data-act="reset-resend"]')?.addEventListener("click",async()=>{if(fe>0||Y)return;const Ke=it(se),Ue=++we,Te=m.querySelector('[data-act="reset-resend"]');Te&&(Te.disabled=!0,Te.textContent="发送中…"),H="",Z(m);try{const Ce=await t.sendVerificationCode({target:Ke,purpose:"reset"});if(Se||B!=="reset"||G!==2||Ue!==we)return;he=Ce.maskedTarget||zt(Ke),ot(Ce.cooldownSeconds||60),Te&&(Te.disabled=!0,Te.textContent=`${fe} 秒后重发`),at?.focus({preventScroll:!0})}catch(Ce){if(Se||B!=="reset"||G!==2||Ue!==we)return;Te&&(Te.disabled=!1,Te.textContent="重新获取"),H=Ce instanceof Error?Ce.message:"暂时无法发送验证码，请稍后再试。",Z(m)}}),m.querySelector("#au-reset-confirm-form")?.addEventListener("submit",async Ke=>{if(Ke.preventDefault(),Y)return;D={},H="",/^\d{6}$/.test(de.trim())||(D.rs_code="请输入 6 位验证码");const Ue=Za(ee);if(Ue&&(D.rs_pwd=Ue),q(m,"rs_code"),q(m,"rs_pwd"),Z(m),Object.keys(D).length>0){const Ce=Object.keys(D)[0];m.querySelector(`#au-${Ce}`)?.focus({preventScroll:!0});return}const Te=it(se);Y=!0,ke();try{if(await t.confirmPasswordReset({account:Te,verificationCode:de.trim(),newPassword:ee}),Se)return;Ie(!1),p=Te,w="",Ga(Te)&&(d=Te),F="",E={},o?Je("password",!1):(ct(),te()),Ne("密码已重置，请使用新密码登录"),e.querySelector("#au-pwd")?.focus({preventScroll:!0})}catch(Ce){if(Se||B!=="reset")return;Y=!1,H=Ce instanceof Error?Ce.message:"验证码不正确或已过期，请检查后重试。",ke(),e.querySelector("#au-rs_code")?.focus({preventScroll:!0})}})}function ct(){W.close(!1);const m=`
      <span data-role="login-novcode-wrap" ${c?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-login-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-login-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-login-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `,R=o?`
        <div class="au-field ${E.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(d)}" aria-invalid="${E.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${S>0?"disabled":""}>
              ${S>0?`${S} 秒后重发`:c?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${s(E.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${c?`验证码已发送至 ${s(c)}`:""}</p>
        </div>
      `:`
        <div class="au-field ${E.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(p)}" aria-invalid="${E.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${s(E.id??"")}</p>
        </div>
      `,ue=o?`
        <div class="au-field ${E.scode?"bad":""}" data-f="scode">
          <div class="au-lab">
            <label for="au-scode">短信验证码</label>
            ${m}
          </div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(h)}" aria-invalid="${E.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${s(E.scode??"")}</p>
        </div>
      `:`
        <div class="au-field ${E.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab">
            <label for="au-pwd">密码</label>
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${l?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(w)}" aria-invalid="${E.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${l?"隐藏密码":"显示密码"}">
              ${l?Ut:Nt}
            </button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${s(E.pwd??"")}</p>
        </div>
      `,xe=e.querySelector('[data-role="fields-host"]');xe&&(xe.innerHTML=`${R}${ue}`,ft(xe))}function Je(m,R=!1){const ue=m==="sms";o===ue||g||(ue&&!d.trim()&&Ga(p)?d=p.trim():!ue&&!p.trim()&&d.trim()&&(p=d.trim()),o=ue,E={},F="",e.querySelectorAll('[data-act="switch-mode"]').forEach(xe=>{const at=xe.dataset.mode===m;xe.setAttribute("aria-selected",String(at)),xe.tabIndex=at?0:-1,at&&R&&xe.focus({preventScroll:!0})}),A(!0),ct(),te(),R||(o?c?e.querySelector("#au-scode")?.focus({preventScroll:!0}):d.trim()?e.querySelector('[data-act="send-sms"]')?.focus({preventScroll:!0}):e.querySelector("#au-sphone")?.focus({preventScroll:!0}):e.querySelector(p.trim()?"#au-pwd":"#au-id")?.focus({preventScroll:!0})))}function ft(m){W.bind(m);const R=m.querySelector("#au-id"),ue=m.querySelector("#au-pwd"),xe=m.querySelector("#au-sphone"),at=m.querySelector("#au-scode");R?.addEventListener("input",()=>{p=R.value,(E.id||F)&&(delete E.id,F="",M("id"),te())}),ue?.addEventListener("input",()=>{w=ue.value,(E.pwd||F)&&(delete E.pwd,F="",M("pwd"),te())}),xe?.addEventListener("input",()=>{if(d=xe.value,V+=1,c||S>0){c="",$();const We=m.querySelector("#au-sphone-hint");We&&(We.textContent="");const Ke=m.querySelector('[data-role="login-novcode-wrap"]');Ke&&(Ke.hidden=!0),W.close(!1);const Ue=m.querySelector('[data-act="send-sms"]');Ue&&(Ue.disabled=!1,Ue.textContent="获取验证码")}(E.sphone||F)&&(delete E.sphone,F="",M("sphone"),te())}),at?.addEventListener("input",()=>{h=at.value.replace(/\D/g,"").slice(0,6),at.value=h,(E.scode||F)&&(delete E.scode,F="",M("scode"),te())}),m.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",We=>{l=!l;const Ke=We.currentTarget,Ue=m.querySelector("#au-pwd");if(Ue){const Te=Ue.selectionStart,Ce=Ue.selectionEnd;Ue.type=l?"text":"password",Ue.focus({preventScroll:!0}),Te!==null&&Ce!==null&&Ue.setSelectionRange(Te,Ce)}Ke.setAttribute("aria-label",l?"隐藏密码":"显示密码"),Ke.innerHTML=l?Ut:Nt}),m.querySelector('[data-act="send-sms"]')?.addEventListener("click",async()=>{const We=Bt(d);if(We){E={...E,sphone:We},M("sphone"),m.querySelector("#au-sphone")?.focus({preventScroll:!0});return}delete E.sphone,M("sphone");const Ke=it(d),Ue=++V,Te=m.querySelector('[data-act="send-sms"]');Te&&(Te.disabled=!0,Te.textContent="发送中…");try{const Ce=await t.sendVerificationCode({target:Ke,purpose:"login"});if(Se||Ue!==V||it(d)!==Ke)return;c=Ce.maskedTarget||zt(Ke);const ut=m.querySelector("#au-sphone-hint");ut&&(ut.textContent=`验证码已发送至 ${c}`);const st=m.querySelector('[data-role="login-novcode-wrap"]');st&&(st.hidden=!1),tt(Ce.cooldownSeconds||60),Te&&(Te.disabled=!0,Te.textContent=`${S} 秒后重发`),m.querySelector("#au-scode")?.focus({preventScroll:!0})}catch(Ce){if(Se||Ue!==V||it(d)!==Ke)return;Te&&(Te.disabled=!1,Te.textContent=c?"重新获取":"获取验证码"),F=Ce instanceof Error?Ce.message:"暂时无法发送验证码，请稍后再试。",te()}}),m.querySelector('[data-act="open-reset"]')?.addEventListener("click",We=>{G=1,se=(o?d:p).trim(),he="",de="",ee="",ce=!1,Y=!1,D={},H="",N(),ie("reset",We.currentTarget)})}e.innerHTML=`
    <div class="au au-split">
      <section class="au-left">
        <div class="au-center">
          <main class="au-group">
            <div class="au-logo">${js}</div>
            <h1 class="au-h1">登录</h1>
            ${x?`<div class="au-notice-soft au-login-notice" data-role="login-notice" role="status">${ja}<span>${s(x)}</span></div>`:""}
            <div class="au-mode-seg" role="tablist" aria-label="登录方式" data-role="mode-seg">
              <span class="au-mode-indicator" aria-hidden="true"></span>
              <button type="button" role="tab" aria-selected="true" tabindex="0" class="au-mode-tab" data-act="switch-mode" data-mode="password">密码登录</button>
              <button type="button" role="tab" aria-selected="false" tabindex="-1" class="au-mode-tab" data-act="switch-mode" data-mode="sms">短信登录</button>
            </div>
            <form data-form="login" novalidate>
              <fieldset>
                <div data-role="fields-host"></div>
                <div class="au-ferr" id="au-login-ferr" role="alert" hidden>
                  ${Pt}
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
        ${Ms()}
      </section>
      <aside class="au-art" aria-hidden="true">
        <div class="au-art-frame">
          <img src="./media/auth-hero.jpg" alt="" />
        </div>
      </aside>
    </div>
    <div data-role="modal-host"></div>
  `,e.querySelector('input[name="keep"]')?.addEventListener("change",m=>{v=m.currentTarget.checked}),e.querySelector('form[data-form="login"]')?.addEventListener("submit",async m=>{if(m.preventDefault(),!g){if(E={},F="",o){const R=Bt(d);R&&(E.sphone=R),/^\d{6}$/.test(h.trim())||(E.scode="请输入 6 位验证码"),M("sphone"),M("scode")}else p.trim()||(E.id="请输入电子邮箱或手机号码"),w||(E.pwd="请输入密码"),M("id"),M("pwd");if(te(),Object.keys(E).length>0){const R=Object.keys(E)[0];e.querySelector(`#au-${R}`)?.focus({preventScroll:!0});return}g=!0,pe();try{const R=await t.login({method:o?"sms":"password",account:it(o?d:p),...o?{smsCode:h.trim()}:{password:w},rememberMe:v});if(Se)return;ze(),a(R)}catch(R){if(Se)return;g=!1,F=R instanceof Error?R.message:o?"验证码不正确或已过期":"账户或密码不正确",pe(),te()}}}),e.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{n?.onOpenRegister?(ze(),n.onOpenRegister()):window.location.hash="#register"}),e.querySelectorAll('[data-act="switch-mode"]').forEach(m=>{m.addEventListener("click",()=>{const R=m.dataset.mode;R&&Je(R,!1)}),m.addEventListener("keydown",R=>{const ue=o?"sms":"password",xe=Lt.indexOf(ue);R.key==="ArrowRight"?(R.preventDefault(),Je(Lt[(xe+1)%Lt.length],!0)):R.key==="ArrowLeft"?(R.preventDefault(),Je(Lt[(xe-1+Lt.length)%Lt.length],!0)):R.key==="Home"?(R.preventDefault(),Je(Lt[0],!0)):R.key==="End"&&(R.preventDefault(),Je(Lt[Lt.length-1],!0))})}),e.querySelector('[data-act="open-contact"]')?.addEventListener("click",m=>{ie("contact",m.currentTarget)}),ct(),A(!1),J=qs(e),p.trim()&&e.querySelector("#au-pwd")?.focus({preventScroll:!0}),document.fonts?.ready.then(()=>{Se||A(!1)})}const Ct=["join","apply"],Jt=1e3,ia=50,La=60,Ls=110,ba=new WeakMap;function Cs(e){ba.get(e)?.()}function Vn(e,t,a){ba.get(e)?.(),e.classList.add("bare-login");let n=!1,o=a.initialMode??"join",l=null,p=null,w=null,d=null,h=null,v=a.initialJoinReceipt??null,x=a.initialApplyReceipt??null,E="",F=!1,g=null;const c=(a.inviteToken??"").trim(),S=!!(a.isInviteRoute||c),O=a.currentSession??null;let V=!!(S&&c),B=null,G="",se="",he="",de="",ee="",ce=0,Y=null,D=0,H="",fe=!1,be=!1,we=os(a.prefillCode??""),_e="",Le=!1,P=0,J="",Se="",W="",b="",A="",j=!1,$=!1,N="",ne=0,ze=null,tt=0,ot="",Ne="",te="",M="",q="",Z="",pe="",ie="",Ie="",Qe=!1,je="",ke=0,ct=null,Je=0,ft=null,m={},R="",ue=!1;const xe=Fs();function at(y){if(y.key==="Escape"){if(xe.isOpen()){y.preventDefault(),xe.close(!0);return}l&&(y.preventDefault(),jt())}}function We(y){const C=e.querySelector('[data-role="reg-seg"]'),K=C?.querySelector(".au-mode-indicator"),oe=C?.querySelector('.au-mode-tab[aria-selected="true"]');!K||!oe||(K.style.transition=y?"":"none",K.style.transform=`translateX(${oe.offsetLeft}px)`,K.style.width=`${oe.offsetWidth}px`,y||(K.offsetWidth,K.style.transition=""))}function Ke(){We(!1)}function Ue(){ne=0,ze!==null&&(window.clearInterval(ze),ze=null)}function Te(){ke=0,ct!==null&&(window.clearInterval(ct),ct=null)}function Ce(){ce=0,Y!==null&&(window.clearInterval(Y),Y=null)}function ut(){d?.(),d=null,h?.(),h=null}function st(){n=!0,g?.(),g=null,ut(),xe.destroy(),Ue(),Te(),Ce(),ft!==null&&(window.clearTimeout(ft),ft=null),document.removeEventListener("keydown",at),window.removeEventListener("resize",Ke),e.classList.remove("bare-login"),ba.get(e)===st&&ba.delete(e)}document.addEventListener("keydown",at),window.addEventListener("resize",Ke),ba.set(e,st);function wa(y){Ue(),ne=y,ze=window.setInterval(()=>{ne-=1,ne<=0&&Ue();const C=e.querySelector('[data-act="jn-send-code"]');C&&(C.disabled=ne>0,C.textContent=ne>0?`${ne} 秒后重发`:N?"重新获取":"获取验证码")},1e3)}function da(y){Te(),ke=y,ct=window.setInterval(()=>{ke-=1,ke<=0&&Te();const C=e.querySelector('[data-act="ap-send-code"]');C&&(C.disabled=ke>0,C.textContent=ke>0?`${ke} 秒后重发`:je?"重新获取":"获取验证码")},1e3)}function Re(){const y=e.querySelector("#au-reg-ferr");if(y)if(R){y.hidden=!1;const C=y.querySelector('[data-role="ferr-text"]');C&&(C.textContent=R)}else y.hidden=!0}function ge(y){const C=e.querySelector(`.au-field[data-f="${y}"]`),K=e.querySelector(`#au-${y}`),oe=e.querySelector(`#au-${y}-err`),ve=m[y]??"";C?.classList.toggle("bad",!!ve),K?.setAttribute("aria-invalid",ve?"true":"false"),oe&&(oe.textContent=ve)}function dt(y,C){const K=e.querySelector("form[data-reg-form] fieldset"),oe=e.querySelector('form[data-reg-form] button[type="submit"]');K&&(K.disabled=ue),oe&&(oe.disabled=ue,oe.innerHTML=ue?`<span class="au-spinner" aria-hidden="true"></span><span>${s(y)}</span>`:`<span>${s(C)}</span>`)}function St(y,C){xe.close(!1),p=C??(document.activeElement instanceof HTMLElement?document.activeElement:null),l=y,It(),e.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function jt(){if(!l)return;l=null,w=null,ut(),It();const y=p;p=null,y&&document.contains(y)&&y.focus({preventScroll:!0})}function ea(){return`
      <div class="au-account-scrim" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="alertdialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">请阅读并同意</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${qa}</button>
          </div>
          <div class="db">
            <p class="au-dlead" style="margin-bottom:0;">
              发送验证码前，请先阅读并同意 PACOM
              <a class="au-consent-link" href="${ka}" target="_blank" rel="noopener noreferrer">隐私政策</a>和<a class="au-consent-link" href="${ka}" target="_blank" rel="noopener noreferrer">使用条款</a>。
            </p>
          </div>
          <div class="df">
            <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
            <button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="consent-confirm">同意并发送</button>
          </div>
        </section>
      </div>
    `}function ta(){return`
      <div class="au-account-scrim" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="alertdialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">撤回加入申请</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${qa}</button>
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
    `}function It(){const y=e.querySelector('[data-role="modal-host"]');if(y){if(ut(),!l){y.innerHTML="";return}y.innerHTML=l==="contact"?Rs():l==="withdraw_confirm"?ta():ea(),d=Os(y.querySelector(".au-account-dlg")),h=Ts(y),y.querySelectorAll('[data-act="close-modal"]').forEach(C=>{C.addEventListener("click",()=>jt())}),y.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",C=>{C.target===C.currentTarget&&jt()}),y.querySelector('[data-act="consent-confirm"]')?.addEventListener("click",()=>{const C=w;w=null,l=null,ut(),It(),C?.()}),y.querySelector('[data-act="withdraw-confirm"]')?.addEventListener("click",async()=>{if(!(!v||!t.withdrawJoinApplication||F)){l=null,ut(),It(),F=!0,R="",mt();try{if(await t.withdrawJoinApplication(v.requestId,v.withdrawToken),n)return;F=!1,v=null,b="",N="",tt+=1,Ue(),E="申请已撤回，修改信息并重新验证后即可再次提交。",mt()}catch(C){if(n)return;F=!1,R=C instanceof Error?C.message:"暂时无法撤回申请，请稍后再试。",mt()}}})}}function Ht(y,C,K,oe){return`
      <div class="au-field au-consent-field ${m[oe]?"bad":""}" data-f="${oe}">
        <div class="au-check au-consent-row">
          <input id="${y}" type="checkbox" name="${C}" ${K?"checked":""} aria-invalid="${m[oe]?"true":"false"}" />
          <span class="au-consent-text">
            <label class="au-consent-label" for="${y}">我已阅读并同意 PACOM </label><a class="au-consent-link" href="${ka}" target="_blank" rel="noopener noreferrer">隐私政策</a><label class="au-consent-label" for="${y}">和</label><a class="au-consent-link" href="${ka}" target="_blank" rel="noopener noreferrer">使用条款</a>
          </span>
        </div>
        <p class="au-err" id="au-${oe}-err" aria-live="polite">${s(m[oe]??"")}</p>
      </div>
    `}async function Wt(y){const C=y.replace(/\D/g,"");if(C.length!==9){_e="",Le=!1,Et();return}const K=++P;Le=!0,_e="",Et();try{const oe=await t.resolveInviteCode(C);if(n||K!==P)return;Le=!1,oe.valid&&oe.organizationName?(_e=oe.organizationName,delete m.jn_code):(_e="",m.jn_code=oe.message??"邀请码不正确或已失效，请向机构管理员确认。"),ge("jn_code"),Et()}catch(oe){if(n||K!==P)return;Le=!1,_e="",m.jn_code=oe instanceof Error?oe.message:"暂时无法核验邀请码，请稍后再试。",ge("jn_code"),Et()}}function Et(){const y=e.querySelector('[data-role="jn-code-match"]'),C=e.querySelector('[data-role="jn-nocode-wrap"]');y&&(_e?(y.hidden=!1,y.innerHTML=`${rs}<span>目标机构：${s(_e)}</span>`):(y.hidden=!0,y.innerHTML="")),C&&(C.hidden=!!_e)}function aa(){const y=`
      <span data-role="jn-nocode-wrap" ${_e?"hidden":""}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-nocode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-nocode-pop"><span>没有邀请码？</span></button>
        <span id="au-jn-nocode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="没有邀请码说明" hidden>
          <span class="ws-info-text">请向所在机构的管理员获取 9 位邀请码；如需为新企业开通，请切换上方「申请开通机构」。</span>
        </span>
      </span>
    `,C=`
      <span data-role="jn-novcode-wrap" ${N?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-jn-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认邮箱或手机号码无误，检查垃圾邮件或短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">填写机构 9 位邀请码，管理员批准后即可访问。</p>
      ${E?`<div class="au-notice-soft au-form-notice" data-role="jn-form-notice" role="status">${ja}<span>${s(E)}</span></div>`:""}
      <form class="au-reg-form" data-reg-form="join" novalidate>
        <fieldset ${ue?"disabled":""}>
          <div class="au-field ${m.jn_code?"bad":""}" data-f="jn_code">
            <div class="au-lab">
              <label for="au-jn_code">机构邀请码</label>
              ${y}
            </div>
            <div class="au-ctl">
              <input id="au-jn_code" name="jn_code" class="au-in" type="text" inputmode="numeric" autocomplete="off" maxlength="11" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(we)}" aria-invalid="${m.jn_code?"true":"false"}" />
            </div>
            <div class="au-code-match" data-role="jn-code-match" role="status" aria-live="polite" ${_e?"":"hidden"}>
              ${_e?`${rs}<span>目标机构：${s(_e)}</span>`:""}
            </div>
            <p class="au-err" id="au-jn_code-err" aria-live="polite">${s(m.jn_code??"")}</p>
          </div>

          <div class="au-field ${m.jn_name?"bad":""}" data-f="jn_name">
            <div class="au-lab"><label for="au-jn_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-jn_name" name="jn_name" class="au-in" type="text" autocomplete="name" value="${s(J)}" aria-invalid="${m.jn_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_name-err" aria-live="polite">${s(m.jn_name??"")}</p>
          </div>

          <div class="au-field ${m.jn_dept?"bad":""}" data-f="jn_dept">
            <div class="au-lab"><label for="au-jn_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-jn_dept" name="jn_dept" class="au-in" type="text" autocomplete="organization-title" value="${s(Se)}" aria-invalid="${m.jn_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_dept-err" aria-live="polite">${s(m.jn_dept??"")}</p>
          </div>

          <div class="au-field ${m.jn_account?"bad":""}" data-f="jn_account">
            <div class="au-lab"><label for="au-jn_account">电子邮箱或手机号码</label></div>
            <div class="au-ctl">
              <input id="au-jn_account" name="jn_account" class="au-in has-code-btn" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(W)}" aria-invalid="${m.jn_account?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="jn-send-code" ${ne>0?"disabled":""}>
                ${ne>0?`${ne} 秒后重发`:N?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-jn_account-err" aria-live="polite">${s(m.jn_account??"")}</p>
            <p class="au-hint" id="au-jn_account-hint" role="status" aria-live="polite">${N?`验证码已发送至 ${s(N)}`:""}</p>
          </div>

          <div class="au-field ${m.jn_vcode?"bad":""}" data-f="jn_vcode">
            <div class="au-lab">
              <label for="au-jn_vcode">验证码</label>
              ${C}
            </div>
            <div class="au-ctl">
              <input id="au-jn_vcode" name="jn_vcode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(b)}" aria-invalid="${m.jn_vcode?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_vcode-err" aria-live="polite">${s(m.jn_vcode??"")}</p>
          </div>

          <div class="au-field ${m.jn_pwd?"bad":""}" data-f="jn_pwd">
            <div class="au-lab">
              <span class="au-lab-group">
                <label for="au-jn_pwd">设置密码</label>
                ${la("au-jn-pwd-info","设置密码说明",Ka)}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-jn_pwd" name="jn_pwd" class="au-in has-suffix" type="${j?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(A)}" aria-invalid="${m.jn_pwd?"true":"false"}" />
              <button type="button" class="au-suffix au-eye" data-act="jn-toggle-eye" aria-controls="au-jn_pwd" aria-label="${j?"隐藏密码":"显示密码"}">
                ${j?Ut:Nt}
              </button>
            </div>
            <p class="au-err" id="au-jn_pwd-err" aria-live="polite">${s(m.jn_pwd??"")}</p>
          </div>

          ${Ht("au-jn_consent","jn_consent",$,"jn_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${R?"":"hidden"}>
            ${Pt}
            <span data-role="ferr-text">${s(R)}</span>
          </div>

          <button type="submit" class="au-primary" ${ue?"disabled":""}>
            ${ue?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>注册并申请加入</span>"}
          </button>
        </fieldset>
      </form>
    `}function pa(){const y=cs(Ne),C=_t(Ie),K=C>=Jt*.8?`${C} / ${Jt}`:"",oe=`
      <span data-role="ap-novcode-wrap" ${je?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-ap-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-ap-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-ap-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">提交企业信息，经 PACOM 审核通过后开通机构。</p>
      <form class="au-reg-form" data-reg-form="apply" novalidate>
        <fieldset ${ue?"disabled":""}>
          <div class="au-field ${m.ap_org?"bad":""}" data-f="ap_org">
            <div class="au-lab">
              <span class="au-lab-group">
                <label for="au-ap_org">机构名称</label>
                ${la("au-ap-org-info","机构名称说明",["请填写营业执照等登记证书上的完整名称。"])}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-ap_org" name="ap_org" class="au-in" type="text" autocomplete="organization" value="${s(ot)}" aria-invalid="${m.ap_org?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_org-err" aria-live="polite">${s(m.ap_org??"")}</p>
          </div>

          <div class="au-field ${m.ap_region?"bad":""}" data-f="ap_region">
            <div class="au-lab"><label for="au-ap_prov">所在地区</label></div>
            <div class="au-row-eq">
              <div class="au-select-wrap">
                <select id="au-ap_prov" name="ap_prov" class="au-select ${Ne?"":"is-placeholder"}" aria-label="省份" aria-invalid="${m.ap_region?"true":"false"}">
                  <option value="" ${Ne?"":"selected"}>省份</option>
                  ${sn.map(([ve])=>`<option value="${s(ve)}" ${Ne===ve?"selected":""}>${s(ve)}</option>`).join("")}
                </select>
                ${ds}
              </div>
              <div class="au-select-wrap">
                <select id="au-ap_city" name="ap_city" class="au-select ${te?"":"is-placeholder"}" aria-label="城市" ${Ne?"":"disabled"} aria-invalid="${m.ap_region?"true":"false"}">
                  <option value="" ${te?"":"selected"}>城市</option>
                  ${y.map(ve=>`<option value="${s(ve)}" ${te===ve?"selected":""}>${s(ve)}</option>`).join("")}
                </select>
                ${ds}
              </div>
            </div>
            <p class="au-err" id="au-ap_region-err" aria-live="polite">${s(m.ap_region??"")}</p>
          </div>

          <div class="au-field ${m.ap_name?"bad":""}" data-f="ap_name">
            <div class="au-lab"><label for="au-ap_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-ap_name" name="ap_name" class="au-in" type="text" autocomplete="name" value="${s(M)}" aria-invalid="${m.ap_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_name-err" aria-live="polite">${s(m.ap_name??"")}</p>
          </div>

          <div class="au-field ${m.ap_dept?"bad":""}" data-f="ap_dept">
            <div class="au-lab"><label for="au-ap_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-ap_dept" name="ap_dept" class="au-in" type="text" autocomplete="organization-title" value="${s(q)}" aria-invalid="${m.ap_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_dept-err" aria-live="polite">${s(m.ap_dept??"")}</p>
          </div>

          <div class="au-field ${m.ap_email?"bad":""}" data-f="ap_email">
            <div class="au-lab">
              <span class="au-lab-group">
                <label for="au-ap_email">电子邮箱</label>
                ${la("au-ap-email-info","电子邮箱说明",["审核结果与机构开通链接将发送至此邮箱，请填写常用工作邮箱。"])}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-ap_email" name="ap_email" class="au-in" type="email" inputmode="email" autocomplete="email" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(Z)}" aria-invalid="${m.ap_email?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_email-err" aria-live="polite">${s(m.ap_email??"")}</p>
          </div>

          <div class="au-field ${m.ap_phone?"bad":""}" data-f="ap_phone">
            <div class="au-lab"><label for="au-ap_phone">手机号码</label></div>
            <div class="au-ctl">
              <input id="au-ap_phone" name="ap_phone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(pe)}" aria-invalid="${m.ap_phone?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="ap-send-code" ${ke>0?"disabled":""}>
                ${ke>0?`${ke} 秒后重发`:je?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-ap_phone-err" aria-live="polite">${s(m.ap_phone??"")}</p>
            <p class="au-hint" id="au-ap_phone-hint" role="status" aria-live="polite">${je?`验证码已发送至 ${s(je)}`:""}</p>
          </div>

          <div class="au-field ${m.ap_sms?"bad":""}" data-f="ap_sms">
            <div class="au-lab">
              <label for="au-ap_sms">短信验证码</label>
              ${oe}
            </div>
            <div class="au-ctl">
              <input id="au-ap_sms" name="ap_sms" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(ie)}" aria-invalid="${m.ap_sms?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_sms-err" aria-live="polite">${s(m.ap_sms??"")}</p>
          </div>

          <div class="au-field ${m.ap_overview?"bad":""}" data-f="ap_overview">
            <div class="au-lab"><label for="au-ap_overview">项目概况<span class="fld-opt">选填</span></label></div>
            <div class="ws-textarea-shell au-note-shell">
              <textarea id="au-ap_overview" name="ap_overview" class="au-in au-ta au-ta-std" rows="3" aria-invalid="${m.ap_overview?"true":"false"}">${s(Ie)}</textarea>
              <button type="button" class="ws-resize" data-space-resize="au-ap_overview" aria-label="调整项目概况输入框高度；按上下方向键调整"></button>
            </div>
            <p class="au-err" id="au-ap_overview-err" aria-live="polite">${s(m.ap_overview??"")}</p>
            <p class="au-hint au-char-count" id="au-ap_overview-count" ${K?"":"hidden"}>${s(K)}</p>
          </div>

          ${Ht("au-ap_consent","ap_consent",Qe,"ap_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${R?"":"hidden"}>
            ${Pt}
            <span data-role="ferr-text">${s(R)}</span>
          </div>

          <button type="submit" class="au-primary" ${ue?"disabled":""}>
            ${ue?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>提交开通申请</span>"}
          </button>
        </fieldset>
      </form>
    `}async function Mt(){const y=Ma(W);if(y){m.jn_account=y,ge("jn_account"),e.querySelector("#au-jn_account")?.focus({preventScroll:!0});return}delete m.jn_account,ge("jn_account");const C=it(W),K=++tt,oe=e.querySelector('[data-act="jn-send-code"]');oe&&(oe.disabled=!0,oe.textContent="发送中…");try{const ve=await t.sendVerificationCode({target:C,purpose:"register_join",consentAcceptedAt:new Date().toISOString()});if(n||K!==tt||it(W)!==C)return;N=ve.maskedTarget||zt(C);const Fe=e.querySelector("#au-jn_account-hint");Fe&&(Fe.textContent=`验证码已发送至 ${N}`);const Ye=e.querySelector('[data-role="jn-novcode-wrap"]');Ye&&(Ye.hidden=!1),wa(ve.cooldownSeconds||60),oe&&(oe.disabled=!0,oe.textContent=`${ne} 秒后重发`),e.querySelector("#au-jn_vcode")?.focus({preventScroll:!0})}catch(ve){if(n||K!==tt||it(W)!==C)return;oe&&(oe.disabled=!1,oe.textContent=N?"重新获取":"获取验证码"),R=ve instanceof Error?ve.message:"暂时无法发送验证码，请稍后再试。",Re()}}async function qt(){const y=Bt(pe);if(y){m.ap_phone=y,ge("ap_phone"),e.querySelector("#au-ap_phone")?.focus({preventScroll:!0});return}delete m.ap_phone,ge("ap_phone");const C=it(pe),K=++Je,oe=e.querySelector('[data-act="ap-send-code"]');oe&&(oe.disabled=!0,oe.textContent="发送中…");try{const ve=await t.sendVerificationCode({target:C,purpose:"org_apply",consentAcceptedAt:new Date().toISOString()});if(n||K!==Je||it(pe)!==C)return;je=ve.maskedTarget||zt(C);const Fe=e.querySelector("#au-ap_phone-hint");Fe&&(Fe.textContent=`验证码已发送至 ${je}`);const Ye=e.querySelector('[data-role="ap-novcode-wrap"]');Ye&&(Ye.hidden=!1),da(ve.cooldownSeconds||60),oe&&(oe.disabled=!0,oe.textContent=`${ke} 秒后重发`),e.querySelector("#au-ap_sms")?.focus({preventScroll:!0})}catch(ve){if(n||K!==Je||it(pe)!==C)return;oe&&(oe.disabled=!1,oe.textContent=je?"重新获取":"获取验证码"),R=ve instanceof Error?ve.message:"暂时无法发送验证码，请稍后再试。",Re()}}function kt(y){xe.bind(y);const C=y.querySelector("#au-jn_code"),K=y.querySelector("#au-jn_name"),oe=y.querySelector("#au-jn_dept"),ve=y.querySelector("#au-jn_account"),Fe=y.querySelector("#au-jn_vcode"),Ye=y.querySelector("#au-jn_pwd"),le=y.querySelector("#au-jn_consent");C?.addEventListener("input",()=>{we=os(C.value),C.value=we,(m.jn_code||R)&&(delete m.jn_code,R="",ge("jn_code"),Re()),Wt(we)}),K?.addEventListener("input",()=>{J=K.value,(m.jn_name||R)&&(delete m.jn_name,R="",ge("jn_name"),Re())}),oe?.addEventListener("input",()=>{Se=oe.value,m.jn_dept&&(delete m.jn_dept,ge("jn_dept"))}),ve?.addEventListener("input",()=>{if(W=ve.value,tt+=1,N||ne>0){N="",Ue();const Xe=y.querySelector("#au-jn_account-hint");Xe&&(Xe.textContent="");const Be=y.querySelector('[data-role="jn-novcode-wrap"]');Be&&(Be.hidden=!0),xe.close(!1);const ye=y.querySelector('[data-act="jn-send-code"]');ye&&(ye.disabled=!1,ye.textContent="获取验证码")}(m.jn_account||R)&&(delete m.jn_account,R="",ge("jn_account"),Re())}),Fe?.addEventListener("input",()=>{b=Fe.value.replace(/\D/g,"").slice(0,6),Fe.value=b,(m.jn_vcode||R)&&(delete m.jn_vcode,R="",ge("jn_vcode"),Re())}),Ye?.addEventListener("input",()=>{A=Ye.value,(m.jn_pwd||R)&&(delete m.jn_pwd,R="",ge("jn_pwd"),Re())}),le?.addEventListener("change",()=>{$=le.checked,$&&m.jn_consent&&(delete m.jn_consent,ge("jn_consent"))}),y.querySelector('[data-act="jn-toggle-eye"]')?.addEventListener("click",Xe=>{j=!j;const Be=Xe.currentTarget;if(Ye){const ye=Ye.selectionStart,Ae=Ye.selectionEnd;Ye.type=j?"text":"password",Ye.focus({preventScroll:!0}),ye!==null&&Ae!==null&&Ye.setSelectionRange(ye,Ae)}Be.setAttribute("aria-label",j?"隐藏密码":"显示密码"),Be.innerHTML=j?Ut:Nt}),y.querySelector('[data-act="jn-send-code"]')?.addEventListener("click",Xe=>{const Be=Ma(W);if(Be){m.jn_account=Be,ge("jn_account"),ve?.focus({preventScroll:!0});return}if(!$){w=()=>{$=!0,le&&(le.checked=!0),delete m.jn_consent,ge("jn_consent"),Mt()},St("consent_ask",Xe.currentTarget);return}Mt()}),y.querySelector('form[data-reg-form="join"]')?.addEventListener("submit",async Xe=>{if(Xe.preventDefault(),ue)return;m={},R="",E&&(E="",y.querySelector('[data-role="jn-form-notice"]')?.remove());const Be=we.replace(/\D/g,"");if(Be.length!==9)m.jn_code="请输入 9 位机构邀请码";else if(!_e){const ae=++P;Le=!0;try{const Me=await t.resolveInviteCode(Be);if(n||ae!==P)return;Le=!1,Me.valid&&Me.organizationName?(_e=Me.organizationName,Et()):m.jn_code=Me.message??"邀请码不正确或已失效，请向机构管理员确认。"}catch(Me){if(n||ae!==P)return;Le=!1,m.jn_code=Me instanceof Error?Me.message:"暂时无法核验邀请码，请稍后再试。"}}J.trim()?_t(J.trim())>ia&&(m.jn_name=`姓名不超过 ${ia} 个字`):m.jn_name="请输入姓名",_t(Se.trim())>La&&(m.jn_dept=`部门 / 职务不超过 ${La} 个字`);const ye=Ma(W);ye&&(m.jn_account=ye),/^\d{6}$/.test(b.trim())||(m.jn_vcode="请输入 6 位验证码");const Ae=Za(A);Ae&&(m.jn_pwd=Ae),$||(m.jn_consent="请阅读并同意隐私政策和使用条款");for(const ae of["jn_code","jn_name","jn_dept","jn_account","jn_vcode","jn_pwd","jn_consent"])ge(ae);if(Re(),Object.keys(m).length>0){const ae=Object.keys(m)[0];y.querySelector(`#au-${ae}`)?.focus({preventScroll:!0});return}ue=!0,dt("正在提交…","注册并申请加入");try{if(v=await t.registerAndJoin({inviteCode:Be,displayName:J.trim(),departmentTitle:Se.trim()||void 0,account:it(W),verificationCode:b.trim(),password:A,consentAcceptedAt:new Date().toISOString()}),n)return;ue=!1,mt()}catch(ae){if(n)return;ue=!1,R=ae instanceof Error?ae.message:"暂时无法提交申请，请稍后再试。",dt("正在提交…","注册并申请加入"),Re()}})}function Gt(y){xe.bind(y),nn(y);const C=y.querySelector("#au-ap_org"),K=y.querySelector("#au-ap_prov"),oe=y.querySelector("#au-ap_city"),ve=y.querySelector("#au-ap_name"),Fe=y.querySelector("#au-ap_dept"),Ye=y.querySelector("#au-ap_email"),le=y.querySelector("#au-ap_phone"),Xe=y.querySelector("#au-ap_sms"),Be=y.querySelector("#au-ap_overview"),ye=y.querySelector("#au-ap_overview-count"),Ae=y.querySelector("#au-ap_consent");C?.addEventListener("input",()=>{ot=C.value,(m.ap_org||R)&&(delete m.ap_org,R="",ge("ap_org"),Re())}),K?.addEventListener("change",()=>{Ne=K.value,K.classList.toggle("is-placeholder",!Ne);const ae=cs(Ne);te=ae.length===1?ae[0]:"",oe&&(oe.disabled=!Ne,oe.innerHTML=`<option value="" ${te?"":"selected"}>城市</option>`+ae.map(Me=>`<option value="${s(Me)}" ${te===Me?"selected":""}>${s(Me)}</option>`).join(""),oe.classList.toggle("is-placeholder",!te)),Ne&&te&&m.ap_region&&(delete m.ap_region,ge("ap_region"))}),oe?.addEventListener("change",()=>{te=oe.value,oe.classList.toggle("is-placeholder",!te),Ne&&te&&m.ap_region&&(delete m.ap_region,ge("ap_region"))}),ve?.addEventListener("input",()=>{M=ve.value,(m.ap_name||R)&&(delete m.ap_name,R="",ge("ap_name"),Re())}),Fe?.addEventListener("input",()=>{q=Fe.value,m.ap_dept&&(delete m.ap_dept,ge("ap_dept"))}),Ye?.addEventListener("input",()=>{Z=Ye.value,(m.ap_email||R)&&(delete m.ap_email,R="",ge("ap_email"),Re())}),le?.addEventListener("input",()=>{if(pe=le.value,Je+=1,je||ke>0){je="",Te();const ae=y.querySelector("#au-ap_phone-hint");ae&&(ae.textContent="");const Me=y.querySelector('[data-role="ap-novcode-wrap"]');Me&&(Me.hidden=!0),xe.close(!1);const qe=y.querySelector('[data-act="ap-send-code"]');qe&&(qe.disabled=!1,qe.textContent="获取验证码")}(m.ap_phone||R)&&(delete m.ap_phone,R="",ge("ap_phone"),Re())}),Xe?.addEventListener("input",()=>{ie=Xe.value.replace(/\D/g,"").slice(0,6),Xe.value=ie,(m.ap_sms||R)&&(delete m.ap_sms,R="",ge("ap_sms"),Re())}),Be?.addEventListener("input",()=>{Ie=Be.value;const ae=_t(Ie);ye&&(ae>=Jt*.8?(ye.textContent=`${ae} / ${Jt}`,ye.hidden=!1):ye.hidden=!0),m.ap_overview&&ae<=Jt&&(delete m.ap_overview,ge("ap_overview"))}),Ae?.addEventListener("change",()=>{Qe=Ae.checked,Qe&&m.ap_consent&&(delete m.ap_consent,ge("ap_consent"))}),y.querySelector('[data-act="ap-send-code"]')?.addEventListener("click",ae=>{const Me=Bt(pe);if(Me){m.ap_phone=Me,ge("ap_phone"),le?.focus({preventScroll:!0});return}if(!Qe){w=()=>{Qe=!0,Ae&&(Ae.checked=!0),delete m.ap_consent,ge("ap_consent"),qt()},St("consent_ask",ae.currentTarget);return}qt()}),y.querySelector('form[data-reg-form="apply"]')?.addEventListener("submit",async ae=>{if(ae.preventDefault(),ue)return;m={},R="",ot.trim()?_t(ot.trim())>Ls&&(m.ap_org=`机构名称不超过 ${Ls} 个字`):m.ap_org="请输入机构名称",(!Ne||!te)&&(m.ap_region="请选择所在地区"),M.trim()?_t(M.trim())>ia&&(m.ap_name=`姓名不超过 ${ia} 个字`):m.ap_name="请输入姓名",_t(q.trim())>La&&(m.ap_dept=`部门 / 职务不超过 ${La} 个字`),Ia(Z)||(m.ap_email="请输入有效的电子邮箱");const Me=Bt(pe);Me&&(m.ap_phone=Me),/^\d{6}$/.test(ie.trim())||(m.ap_sms="请输入 6 位短信验证码"),_t(Ie)>Jt&&(m.ap_overview=`项目概况不超过 ${Jt} 个字`),Qe||(m.ap_consent="请阅读并同意隐私政策和使用条款");for(const qe of["ap_org","ap_region","ap_name","ap_dept","ap_email","ap_phone","ap_sms","ap_overview","ap_consent"])ge(qe);if(Re(),Object.keys(m).length>0){const qe=Object.keys(m)[0],Sa=qe==="ap_region"?Ne?"au-ap_city":"au-ap_prov":`au-${qe}`;y.querySelector(`#${Sa}`)?.focus({preventScroll:!0});return}ue=!0,dt("正在提交…","提交开通申请");try{if(x=await t.submitOrgApplication({organizationName:ot.trim(),province:Ne,city:te,contactName:M.trim(),departmentTitle:q.trim()||void 0,email:it(Z),phone:it(pe),smsCode:ie.trim(),projectOverview:Ie.trim()||void 0,consentAcceptedAt:new Date().toISOString()}),n)return;ue=!1,mt()}catch(qe){if(n)return;ue=!1,R=qe instanceof Error?qe.message:"暂时无法提交开通申请，请稍后再试。",dt("正在提交…","提交开通申请"),Re()}})}function bt(){xe.close(!1);const y=e.querySelector('[data-role="reg-body-host"]');y&&(o==="join"?(y.innerHTML=aa(),kt(y)):(y.innerHTML=pa(),Gt(y)))}function xt(y,C=!1){o===y||ue||(o=y,m={},R="",E="",e.querySelectorAll('[data-act="switch-reg-tab"]').forEach(K=>{const oe=K.dataset.tab===y;K.setAttribute("aria-selected",String(oe)),K.tabIndex=oe?0:-1,oe&&C&&K.focus({preventScroll:!0})}),We(!0),bt(),e.querySelector(".au-left")?.scrollTo({top:0}))}function lt(){if(x)return{title:"开通申请已提交 ｜ PACOM Station",bodyHtml:`
          <h1 class="au-h1">开通申请已提交</h1>
          <p class="au-lead">预计 1–2 个工作日完成审核，审核通过后将发送开通链接至你的邮箱。</p>
          <div class="au-summary-card">
            <div class="au-summary-row">
              <span class="au-summary-k">申请单号</span>
              <span class="au-summary-v au-summary-v-copy is-tabular">
                <span>${s(x.applicationId)}</span>
                <button type="button" class="au-summary-copy-btn" data-act="copy-receipt" data-copy-val="${s(x.applicationId)}" aria-label="复制申请单号" title="复制申请单号">${za}</button>
              </span>
            </div>
            <div class="au-summary-row"><span class="au-summary-k">申请机构</span><span class="au-summary-v">${s(x.organizationName)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">通知邮箱</span><span class="au-summary-v is-tabular">${s(x.maskedEmail)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">当前状态</span><span class="au-status-pill au-status-pill--pending">待审核</span></div>
          </div>
          <button type="button" class="au-secondary" data-act="back-login"><span>返回登录</span></button>
        `};const y=v;return{title:"加入申请已提交 ｜ PACOM Station",bodyHtml:`
        <h1 class="au-h1">加入申请已提交</h1>
        <p class="au-lead">已提交至<b>${s(y.organizationName)}</b>，管理员批准后将发送登录通知。</p>
        <div class="au-summary-card">
          <div class="au-summary-row">
            <span class="au-summary-k">申请单号</span>
            <span class="au-summary-v au-summary-v-copy is-tabular">
              <span>${s(y.requestId)}</span>
              <button type="button" class="au-summary-copy-btn" data-act="copy-receipt" data-copy-val="${s(y.requestId)}" aria-label="复制申请单号" title="复制申请单号">${za}</button>
            </span>
          </div>
          <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${s(y.organizationName)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">登录账户</span><span class="au-summary-v is-tabular">${s(y.maskedAccount)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">当前状态</span><span class="au-status-pill au-status-pill--pending">待管理员审批</span></div>
        </div>
        <div class="au-ferr" id="au-reg-ferr" role="alert" ${R?"":"hidden"}>
          ${Pt}
          <span data-role="ferr-text">${s(R)}</span>
        </div>
        <button type="button" class="au-secondary" data-act="back-login"><span>返回登录</span></button>
        ${t.withdrawJoinApplication?`
          <div class="au-quiet-action">
            <button type="button" class="au-quiet-btn" data-act="ask-withdraw" ${F?"disabled":""}>${F?"正在撤回…":"撤回申请"}</button>
          </div>`:""}
      `}}function Zt(y){Ce(),ce=y,Y=window.setInterval(()=>{ce-=1,ce<=0&&Ce();const C=e.querySelector('[data-act="iv-send-sec"]');C&&(C.disabled=ce>0,C.textContent=ce>0?`${ce} 秒后重发`:ee?"重新获取":"获取验证码")},1e3)}function Kt(y){return y.requiredSecondaryChannel!==void 0?y.requiredSecondaryChannel:ra(y.kind,y.role,y.targetChannel)}function Ot(y){return it(y).toLowerCase().replace(/[\s\-()]/g,"")}function Tt(y,C){if(!y)return!1;const K=Ot(C.targetValue);if(!K)return!1;const oe=C.targetChannel==="email"?y.email:y.phone;return!!oe&&Ot(oe)===K}async function ht(y){const C=y==="phone"?Bt(he):Ia(he)?"":"请输入有效的电子邮箱";if(C){m.iv_sec=C,ge("iv_sec"),e.querySelector("#au-iv_sec")?.focus({preventScroll:!0});return}delete m.iv_sec,ge("iv_sec");const K=it(he),oe=++D,ve=e.querySelector('[data-act="iv-send-sec"]');ve&&(ve.disabled=!0,ve.textContent="发送中…");try{const Fe=await t.sendVerificationCode({target:K,purpose:"bind",consentAcceptedAt:new Date().toISOString()});if(n||oe!==D||it(he)!==K)return;ee=Fe.maskedTarget||zt(K);const Ye=e.querySelector("#au-iv_sec-hint");Ye&&(Ye.textContent=`验证码已发送至 ${ee}`);const le=e.querySelector('[data-role="iv-novcode-wrap"]');le&&(le.hidden=!1),Zt(Fe.cooldownSeconds||60),ve&&(ve.disabled=!0,ve.textContent=`${ce} 秒后重发`),e.querySelector("#au-iv_seccode")?.focus({preventScroll:!0})}catch(Fe){if(n||oe!==D||it(he)!==K)return;ve&&(ve.disabled=!1,ve.textContent=ee?"重新获取":"获取验证码"),R=Fe instanceof Error?Fe.message:"暂时无法发送验证码，请稍后再试。",Re()}}function sa(){if(V)return{title:"核验链接 ｜ PACOM Station",bodyHtml:`
          <div class="au-loading-state" role="status" aria-live="polite">
            <span class="au-spinner au-spinner--muted" aria-hidden="true"></span>
            <span>正在核验链接…</span>
          </div>
        `};if(B&&B.status==="accepted"){const ye=B.kind==="owner",Ae=ye?"机构已完成开通":"邀请已被接受",ae=O?`该${ye?"开通":"邀请"}链接已完成激活，你可以直接进入工作区访问<b>${s(B.organizationName)}</b>。`:`该${ye?"开通":"邀请"}链接已完成激活，你可以直接登录访问<b>${s(B.organizationName)}</b>。`;return{title:`${Ae} ｜ PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${Ae}</h1>
          <p class="au-lead">${ae}</p>
          <button type="button" class="au-secondary" data-act="${O?"iv-back-ws":"back-login"}"><span>${O?"进入工作区":"前往登录"}</span></button>
        `}}if(G||!B||B.status!=="pending"){const ye=B?.kind==="owner",Ae=B?.organizationName?s(B.organizationName):"",ae=B?.inviterName?s(B.inviterName):"机构管理员";let Me="邀请链接已失效",qe="此链接无效或已过期，请联系邀请人或机构管理员重新发送。";return G?qe=s(G):B?.status==="expired"?(Me=ye?"开通链接已过期":"邀请链接已过期",qe=ye?`开通${Ae?`<b>${Ae}</b>的`:""}链接已过期，请联系支持团队重新发送。`:`加入${Ae?`<b>${Ae}</b>的`:""}邀请链接已过期，请联系${ae}重新发送。`):B?.status==="revoked"&&(Me=ye?"开通链接已撤销":"邀请已撤销",qe=ye?`开通${Ae?`<b>${Ae}</b>的`:""}链接已被撤销，请联系支持团队重新发送。`:`加入${Ae?`<b>${Ae}</b>的`:""}邀请已被撤销，如需加入请联系${ae}重新发送。`),{title:`${Me} ｜ PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${Me}</h1>
          <p class="au-lead">${qe}</p>
          <button type="button" class="au-secondary" data-act="${O?"iv-back-ws":"back-login"}"><span>${O?"返回工作区":"返回登录"}</span></button>
        `}}const y=B,C=y.kind==="owner",K=C?"开通机构":"加入机构",oe=y.targetChannel==="phone"?"受邀手机号码":"受邀电子邮箱",ve=y.targetChannel==="phone"?is(y.targetValue):y.targetValue;if(O){if(Tt(O,y)){const Me=C?`<b>${s(y.organizationName)}</b>已审核通过，确认后即以机构管理员身份完成开通。<span class="au-lead-meta">有效期至 ${s(y.expiresAt)}</span>`:`${s(y.inviterName||"机构管理员")}邀请你以${s(y.roleLabel||"成员")}身份加入<b>${s(y.organizationName)}</b>。<span class="au-lead-meta">有效期至 ${s(y.expiresAt)}</span>`;return{title:`${K} ｜ PACOM Station`,bodyHtml:`
            <h1 class="au-h1">${K}</h1>
            <p class="au-lead">${Me}</p>
            <div class="au-summary-card">
              <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${s(y.organizationName)}</span></div>
              <div class="au-summary-row"><span class="au-summary-k">授予角色</span><span class="au-summary-v">${s(y.roleLabel||(C?"机构管理员":"成员"))}</span></div>
              <div class="au-summary-row"><span class="au-summary-k">当前账户</span><span class="au-summary-v is-tabular">${s(O.displayName)} ｜ ${s(ve)}</span></div>
            </div>
            <div class="au-ferr" id="au-reg-ferr" role="alert" ${R?"":"hidden"}>
              ${Pt}
              <span data-role="ferr-text">${s(R)}</span>
            </div>
            <button type="button" class="au-primary" data-act="iv-confirm-join" ${ue?"disabled":""}>
              ${ue?'<span class="au-spinner" aria-hidden="true"></span><span>正在处理…</span>':`<span>${C?"确认开通":"确认加入"}</span>`}
            </button>
            <div class="au-quiet-action">
              <button type="button" class="au-quiet-btn" data-act="iv-back-ws">返回工作区</button>
            </div>
          `}}const ye=zt(y.targetValue),Ae=O.email||(O.phone?is(O.phone):"");return{title:"请切换至受邀账户 ｜ PACOM Station",bodyHtml:`
          <h1 class="au-h1">请切换至受邀账户</h1>
          <p class="au-lead">${C?`该开通链接面向 <b>${s(ye)}</b> 开通${s(y.organizationName)}，与当前登录账户不一致。`:`该邀请面向 <b>${s(ye)}</b> 加入${s(y.organizationName)}，与当前登录账户不一致。`}</p>
          <div class="au-summary-card">
            <div class="au-summary-row"><span class="au-summary-k">当前账户</span><span class="au-summary-v is-tabular">${s(O.displayName)}${Ae?` ｜ ${s(Ae)}`:""}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">受邀账户</span><span class="au-summary-v is-tabular">${s(ye)}</span></div>
          </div>
          <button type="button" class="au-primary" data-act="iv-switch-account"><span>切换账户登录</span></button>
          <div class="au-quiet-action">
            <button type="button" class="au-quiet-btn" data-act="iv-back-ws">返回工作区</button>
          </div>
        `}}if(y.accountExists){const ye=C?`<b>${s(y.organizationName)}</b>已审核通过，请先登录已有账户完成开通。<span class="au-lead-meta">有效期至 ${s(y.expiresAt)}</span>`:`${s(y.inviterName||"机构管理员")}邀请你以${s(y.roleLabel||"成员")}身份加入<b>${s(y.organizationName)}</b>，请先登录已有账户完成确认。<span class="au-lead-meta">有效期至 ${s(y.expiresAt)}</span>`;return{title:`${K} ｜ PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${K}</h1>
          <p class="au-lead">${ye}</p>
          <div class="au-summary-card">
            <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${s(y.organizationName)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">授予角色</span><span class="au-summary-v">${s(y.roleLabel||(C?"机构管理员":"成员"))}</span></div>
            <div class="au-summary-row">
              <span class="au-summary-k">受邀账户</span>
              <span class="au-summary-v au-summary-v-copy is-tabular">
                <span>${s(ve)}</span>
                <span class="au-status-pill au-status-pill--neutral">已注册</span>
              </span>
            </div>
          </div>
          <button type="button" class="au-primary" data-act="iv-go-login"><span>${C?"登录并开通":"登录并加入"}</span></button>
        `}}const Fe=C?`<b>${s(y.organizationName)}</b>已审核通过，设置密码后即以机构管理员身份开通。<span class="au-lead-meta">有效期至 ${s(y.expiresAt)}</span>`:`${s(y.inviterName||"机构管理员")}邀请你以${s(y.roleLabel||"成员")}身份加入<b>${s(y.organizationName)}</b>。<span class="au-lead-meta">有效期至 ${s(y.expiresAt)}</span>`,Ye=C?"完成开通":"注册并加入",le=Kt(y),Xe=C?`
        <div class="au-field">
          <div class="au-lab">
            <span class="au-lab-t">管理员账户</span>
            <span class="au-lab-status">${ls}<span>已核验</span></span>
          </div>
          <div class="au-verified-card">
            <div class="au-verified-row">
              <span class="au-verified-k">${y.targetChannel==="phone"?"手机号码":"电子邮箱"}</span>
              <span class="au-verified-v">${s(ve)}</span>
            </div>
            ${y.verifiedSecondaryMasked?`
              <div class="au-verified-row">
                <span class="au-verified-k">${y.targetChannel==="phone"?"电子邮箱":"手机号码"}</span>
                <span class="au-verified-v">${s(y.verifiedSecondaryMasked)}</span>
              </div>`:""}
          </div>
        </div>`:`
        <div class="au-field">
          <div class="au-lab">
            <span class="au-lab-t">${oe}</span>
            <span class="au-lab-status">${ls}<span>已核验</span></span>
          </div>
          <div class="au-locked-card">
            <span class="au-locked-val">${s(ve)}</span>
          </div>
        </div>`,Be=le?(()=>{const ye=le==="phone",Ae=ye?"手机号码":"电子邮箱",ae=ye?"用于新设备登录、敏感操作与重置密码时的身份验证。":"机构管理员须绑定电子邮箱，用于接收订单、续费与安全通知。",Me=ye?"短信验证码":"邮件验证码",qe=ye?"请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。":"请确认电子邮箱无误并检查垃圾邮件箱；如仍未收到，可点击页脚「联系我们」获取协助。";return`
            <div class="au-field ${m.iv_sec?"bad":""}" data-f="iv_sec">
              <div class="au-lab">
                <span class="au-lab-group">
                  <label for="au-iv_sec">${Ae}</label>
                  ${la("au-iv-sec-info",`${Ae}说明`,[ae])}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_sec" name="iv_sec" class="au-in has-code-btn" type="${ye?"tel":"email"}" inputmode="${ye?"tel":"email"}" autocomplete="${ye?"tel":"email"}" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(he)}" aria-invalid="${m.iv_sec?"true":"false"}" />
                <button type="button" class="au-suffix au-getcode" data-act="iv-send-sec" ${ce>0?"disabled":""}>
                  ${ce>0?`${ce} 秒后重发`:ee?"重新获取":"获取验证码"}
                </button>
              </div>
              <p class="au-err" id="au-iv_sec-err" aria-live="polite">${s(m.iv_sec??"")}</p>
              <p class="au-hint" id="au-iv_sec-hint" role="status" aria-live="polite">${ee?`验证码已发送至 ${s(ee)}`:""}</p>
            </div>

            <div class="au-field ${m.iv_seccode?"bad":""}" data-f="iv_seccode">
              <div class="au-lab">
                <label for="au-iv_seccode">${Me}</label>
                <span data-role="iv-novcode-wrap" ${ee?"":"hidden"}>
                  <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-iv-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-iv-novcode-pop"><span>收不到验证码？</span></button>
                  <span id="au-iv-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
                    <span class="ws-info-text">${qe}</span>
                  </span>
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_seccode" name="iv_seccode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(de)}" aria-invalid="${m.iv_seccode?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_seccode-err" aria-live="polite">${s(m.iv_seccode??"")}</p>
            </div>
          `})():"";return{title:`${K} ｜ PACOM Station`,bodyHtml:`
        <h1 class="au-h1">${K}</h1>
        <p class="au-lead">${Fe}</p>
        <form class="au-reg-form" data-reg-form="invite" novalidate>
          <fieldset ${ue?"disabled":""}>
            ${Xe}

            <div class="au-field ${m.iv_name?"bad":""}" data-f="iv_name">
              <div class="au-lab"><label for="au-iv_name">姓名</label></div>
              <div class="au-ctl">
                <input id="au-iv_name" name="iv_name" class="au-in" type="text" autocomplete="name" value="${s(se)}" aria-invalid="${m.iv_name?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_name-err" aria-live="polite">${s(m.iv_name??"")}</p>
            </div>

            ${Be}

            <div class="au-field ${m.iv_pwd?"bad":""}" data-f="iv_pwd">
              <div class="au-lab">
                <span class="au-lab-group">
                  <label for="au-iv_pwd">设置密码</label>
                  ${la("au-iv-pwd-info","设置密码说明",Ka)}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_pwd" name="iv_pwd" class="au-in has-suffix" type="${fe?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(H)}" aria-invalid="${m.iv_pwd?"true":"false"}" />
                <button type="button" class="au-suffix au-eye" data-act="iv-toggle-eye" aria-controls="au-iv_pwd" aria-label="${fe?"隐藏密码":"显示密码"}">
                  ${fe?Ut:Nt}
                </button>
              </div>
              <p class="au-err" id="au-iv_pwd-err" aria-live="polite">${s(m.iv_pwd??"")}</p>
            </div>

            ${Ht("au-iv_consent","iv_consent",be,"iv_consent")}

            <div class="au-ferr" id="au-reg-ferr" role="alert" ${R?"":"hidden"}>
              ${Pt}
              <span data-role="ferr-text">${s(R)}</span>
            </div>

            <button type="submit" class="au-primary" ${ue?"disabled":""}>
              ${ue?`<span class="au-spinner" aria-hidden="true"></span><span>${C?"正在开通…":"正在提交…"}</span>`:`<span>${Ye}</span>`}
            </button>
          </fieldset>
        </form>
      `}}function vt(){xe.bind(e),e.querySelector('[data-act="iv-back-ws"]')?.addEventListener("click",()=>{st(),a.onBackToWorkspace?a.onBackToWorkspace():a.onBackToLogin()}),e.querySelector('[data-act="iv-go-login"]')?.addEventListener("click",()=>{if(!B)return;const Be=`#invite?token=${encodeURIComponent(B.token)}`,ye=B.kind==="owner"?`登录后即可开通${B.organizationName}`:`登录后即可加入${B.organizationName}`;st(),a.onGoLoginForInvite?a.onGoLoginForInvite(B.targetValue,ye,Be):a.onBackToLogin()}),e.querySelector('[data-act="iv-switch-account"]')?.addEventListener("click",()=>{if(!B)return;const Be=`#invite?token=${encodeURIComponent(B.token)}`,Ae=`请使用 ${zt(B.targetValue)} 登录以${B.kind==="owner"?"开通机构":"接受邀请"}`;st(),a.onSwitchAccountForInvite?a.onSwitchAccountForInvite(Be,Ae):a.onBackToLogin()}),e.querySelector('[data-act="iv-confirm-join"]')?.addEventListener("click",async()=>{if(!(ue||!B)){ue=!0,R="",mt();try{const Be=await t.acceptInvitation({token:B.token});if(n)return;st(),a.onAuthenticated(Be)}catch(Be){if(n)return;ue=!1,R=Be instanceof Error?Be.message:"暂时无法确认加入，请稍后再试。",mt()}}});const y=e.querySelector('form[data-reg-form="invite"]');if(!y||!B)return;const C=e.querySelector("#au-iv_name"),K=e.querySelector("#au-iv_sec"),oe=e.querySelector("#au-iv_seccode"),ve=e.querySelector("#au-iv_pwd"),Fe=e.querySelector("#au-iv_consent"),Ye=B.kind==="owner",le=Ye?"完成开通":"注册并加入",Xe=Kt(B);C?.addEventListener("input",()=>{se=C.value,(m.iv_name||R)&&(delete m.iv_name,R="",ge("iv_name"),Re())}),K?.addEventListener("input",()=>{if(he=K.value,D+=1,ee||ce>0){ee="",Ce();const Be=e.querySelector("#au-iv_sec-hint");Be&&(Be.textContent="");const ye=e.querySelector('[data-role="iv-novcode-wrap"]');ye&&(ye.hidden=!0),xe.close(!1);const Ae=e.querySelector('[data-act="iv-send-sec"]');Ae&&(Ae.disabled=!1,Ae.textContent="获取验证码")}(m.iv_sec||R)&&(delete m.iv_sec,R="",ge("iv_sec"),Re())}),oe?.addEventListener("input",()=>{de=oe.value.replace(/\D/g,"").slice(0,6),oe.value=de,(m.iv_seccode||R)&&(delete m.iv_seccode,R="",ge("iv_seccode"),Re())}),ve?.addEventListener("input",()=>{H=ve.value,(m.iv_pwd||R)&&(delete m.iv_pwd,R="",ge("iv_pwd"),Re())}),Fe?.addEventListener("change",()=>{be=Fe.checked,be&&m.iv_consent&&(delete m.iv_consent,ge("iv_consent"))}),e.querySelector('[data-act="iv-send-sec"]')?.addEventListener("click",Be=>{if(!Xe)return;const ye=Xe==="phone"?Bt(he):Ia(he)?"":"请输入有效的电子邮箱";if(ye){m.iv_sec=ye,ge("iv_sec"),K?.focus({preventScroll:!0});return}if(!be){w=()=>{be=!0,Fe&&(Fe.checked=!0),delete m.iv_consent,ge("iv_consent"),ht(Xe)},St("consent_ask",Be.currentTarget);return}ht(Xe)}),e.querySelector('[data-act="iv-toggle-eye"]')?.addEventListener("click",Be=>{fe=!fe;const ye=Be.currentTarget;if(ve){const Ae=ve.selectionStart,ae=ve.selectionEnd;ve.type=fe?"text":"password",ve.focus({preventScroll:!0}),Ae!==null&&ae!==null&&ve.setSelectionRange(Ae,ae)}ye.setAttribute("aria-label",fe?"隐藏密码":"显示密码"),ye.innerHTML=fe?Ut:Nt}),y.addEventListener("submit",async Be=>{if(Be.preventDefault(),ue||!B)return;if(m={},R="",se.trim()?_t(se.trim())>ia&&(m.iv_name=`姓名不超过 ${ia} 个字`):m.iv_name="请输入姓名",Xe){const ae=Xe==="phone"?Bt(he):Ia(he)?"":"请输入有效的电子邮箱";ae&&(m.iv_sec=ae),/^\d{6}$/.test(de.trim())||(m.iv_seccode=Xe==="phone"?"请输入 6 位短信验证码":"请输入 6 位邮件验证码")}const ye=Za(H);ye&&(m.iv_pwd=ye),be||(m.iv_consent="请阅读并同意隐私政策和使用条款");const Ae=Xe?["iv_name","iv_sec","iv_seccode","iv_pwd","iv_consent"]:["iv_name","iv_pwd","iv_consent"];for(const ae of Ae)ge(ae);if(Re(),Object.keys(m).length>0){const ae=Object.keys(m)[0];e.querySelector(`#au-${ae}`)?.focus({preventScroll:!0});return}ue=!0,dt(Ye?"正在开通…":"正在提交…",le);try{const ae=await t.acceptInvitation({token:B.token,displayName:se.trim(),password:H,consentAcceptedAt:new Date().toISOString(),...Xe?{secondaryContact:it(he),secondaryVerificationCode:de.trim()}:{}});if(n)return;st(),a.onAuthenticated(ae)}catch(ae){if(n)return;ue=!1,R=ae instanceof Error?ae.message:"暂时无法完成激活，请稍后再试。",dt(Ye?"正在开通…":"正在提交…",le),Re()}})}function mt(){g?.(),g=null,xe.close(!1);let y="";if(v||x){const C=lt();document.title=C.title,y=C.bodyHtml}else if(S){const C=sa();document.title=C.title,y=C.bodyHtml}else document.title="注册 ｜ PACOM Station",y=`
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
              <div class="au-logo">${js}</div>
              ${y}
            </main>
          </div>
          ${Ms()}
        </section>
        <aside class="au-art" aria-hidden="true">
          <div class="au-art-frame">
            <img src="./media/auth-hero.jpg" alt="" />
          </div>
        </aside>
      </div>
      <div data-role="modal-host"></div>
    `,e.querySelectorAll('[data-act="back-login"]').forEach(C=>{C.addEventListener("click",()=>{st(),a.onBackToLogin()})}),e.querySelectorAll('[data-act="open-contact"]').forEach(C=>{C.addEventListener("click",K=>{St("contact",K.currentTarget)})}),e.querySelector('[data-act="ask-withdraw"]')?.addEventListener("click",C=>{!v||!t.withdrawJoinApplication||F||St("withdraw_confirm",C.currentTarget)}),e.querySelectorAll('[data-act="copy-receipt"]').forEach(C=>{C.addEventListener("click",()=>{const K=C.dataset.copyVal??"";K&&(navigator.clipboard?.writeText&&navigator.clipboard.writeText(K).catch(()=>{}),C.classList.add("is-copied"),C.setAttribute("aria-label","已复制申请单号"),C.innerHTML=an,ft!==null&&window.clearTimeout(ft),ft=window.setTimeout(()=>{ft=null,C.classList.remove("is-copied"),C.setAttribute("aria-label","复制申请单号"),C.innerHTML=za},1800))})}),!v&&!x&&!S?(e.querySelectorAll('[data-act="switch-reg-tab"]').forEach(C=>{C.addEventListener("click",()=>{const K=C.dataset.tab;K&&xt(K,!1)}),C.addEventListener("keydown",K=>{const oe=Ct.indexOf(o);K.key==="ArrowRight"?(K.preventDefault(),xt(Ct[(oe+1)%Ct.length],!0)):K.key==="ArrowLeft"?(K.preventDefault(),xt(Ct[(oe-1+Ct.length)%Ct.length],!0)):K.key==="Home"?(K.preventDefault(),xt(Ct[0],!0)):K.key==="End"&&(K.preventDefault(),xt(Ct[Ct.length-1],!0))})}),bt(),We(!1),document.fonts?.ready.then(()=>{n||We(!1)})):S&&!V&&vt(),g=qs(e)}mt(),S&&c&&!v&&!x?(async()=>{try{const y=await t.getInvitationPreview(c);if(n)return;if(B=y,se=y.prefillName??"",V=!1,mt(),!O&&y.status==="pending"&&!y.accountExists){const C=Kt(y),K=se.trim()?C?"#au-iv_sec":"#au-iv_pwd":"#au-iv_name";e.querySelector(K)?.focus({preventScroll:!0})}}catch(y){if(n)return;V=!1,G=y instanceof Error?y.message:"暂时无法读取邀请信息，请稍后再试。",mt()}})():!S&&!v&&!x&&we.replace(/\D/g,"").length===9&&(Wt(we),e.querySelector("#au-jn_name")?.focus({preventScroll:!0}))}function ma(e){const t=e.replace(/^#\/?/,"").split("?")[0]??"";return t==="login"||t==="register"||t==="join"||t==="apply"||t==="invite"}function Ca(e){const t=e.replace(/^#\/?/,""),[a="",n=""]=t.split("?"),o=new URLSearchParams(n);if(a==="invite")return{kind:"invite",inviteToken:(o.get("token")??"").trim()};if(a==="register"||a==="join"||a==="apply"){const l=o.get("tab");return{kind:"register",initialMode:a==="apply"||l==="apply"?"apply":"join",prefillCode:o.get("code")??void 0}}return{kind:"login"}}const Hn=["org_admin","project_admin","operator","space_user"],Fa=[{key:"login",label:"登录",group:"auth",hash:"#login",sessionRole:null},{key:"reg-join",label:"加入已有机构",group:"auth",hash:"#register",sessionRole:null},{key:"status-join",label:"加入申请已提交",group:"auth",hash:"#register",sessionRole:null,joinReceipt:{requestId:"JR-20261127-8421",organizationName:"广州国家实验室",maskedAccount:"138 •••• 8000",status:"pending_approval",submittedAt:"2026-11-27T09:30:00Z",withdrawToken:"demo-preset-wt-8421"}},{key:"reg-apply",label:"申请开通机构",group:"auth",hash:"#apply",sessionRole:null},{key:"status-apply",label:"开通申请已提交",group:"auth",hash:"#apply",sessionRole:null,applyReceipt:{applicationId:"APP-20261127-3902",organizationName:"广州天环智能科技有限公司",region:"广东省 广州市",maskedEmail:"c•••@company.com",status:"pending_review",submittedAt:"2026-11-27T09:35:00Z"}},{key:"inv-member",label:"成员邀请 ｜ 新账户",group:"invite",hash:"#invite?token=member-demo",sessionRole:null},{key:"inv-admin-email",label:"机构管理员邀请 ｜ 补绑手机",group:"invite",hash:"#invite?token=admin-email",sessionRole:null},{key:"inv-admin-phone",label:"机构管理员邀请 ｜ 补绑邮箱",group:"invite",hash:"#invite?token=admin-phone",sessionRole:null},{key:"inv-proj-email",label:"项目管理员邀请 ｜ 补绑手机",group:"invite",hash:"#invite?token=project-admin-email",sessionRole:null},{key:"inv-owner",label:"机构审核通过 ｜ 开通机构",group:"invite",hash:"#invite?token=owner-demo",sessionRole:null},{key:"inv-existing",label:"已有账户受邀 ｜ 引导登录",group:"invite",hash:"#invite?token=existing-demo",sessionRole:null},{key:"inv-signed-match",label:"已登录 ｜ 确认加入",group:"invite",hash:"#invite?token=existing-demo",sessionRole:"operator"},{key:"inv-signed-mismatch",label:"已登录 ｜ 切换受邀账户",group:"invite",hash:"#invite?token=member-demo",sessionRole:"org_admin"},{key:"inv-expired",label:"邀请链接已过期",group:"terminal",hash:"#invite?token=expired",sessionRole:null},{key:"inv-revoked",label:"邀请已撤销",group:"terminal",hash:"#invite?token=revoked",sessionRole:null},{key:"inv-accepted",label:"邀请已被接受",group:"terminal",hash:"#invite?token=accepted",sessionRole:null},{key:"inv-invalid",label:"邀请链接已失效",group:"terminal",hash:"#invite",sessionRole:null}];async function Wn(e){const t=new ln;let a=await t.getSession(),n="login",o="",l="",p="",w=window.location.hash&&!ma(window.location.hash)?window.location.hash:"",d=!1;document.querySelector("[data-demo-fab-root]")?.remove();const h=document.createElement("div");h.className="pacom-demo-fab-wrap",h.dataset.demoFabRoot="1",document.body.appendChild(h);function v(g,c){const S=g.trim();if(S==="#login")return"login";if(S==="#apply"||S==="#register?tab=apply")return"reg-apply";if(S.startsWith("#register")||S.startsWith("#join"))return"reg-join";if(S.startsWith("#invite")){const V=Ca(S).inviteToken??"";return V?V==="expired"?"inv-expired":V==="revoked"?"inv-revoked":V==="accepted"?"inv-accepted":V.startsWith("owner")?"inv-owner":V==="admin-email"?"inv-admin-email":V==="admin-phone"?"inv-admin-phone":V==="project-admin-email"?"inv-proj-email":V==="existing-demo"?c?"inv-signed-match":"inv-existing":c?"inv-signed-mismatch":"inv-member":"inv-invalid"}return""}function x(){const g=Fa.filter(V=>V.group==="auth"),c=Fa.filter(V=>V.group==="invite"),S=Fa.filter(V=>V.group==="terminal"),O=V=>{const B=n!=="app"&&l===V.key;return`
        <button type="button" class="pacom-demo-role-btn" aria-pressed="${B}" data-demo-preset="${V.key}">
          <span>${V.label}</span>
          ${B?re("check",14):"<span>→</span>"}
        </button>`};h.innerHTML=`
      ${d?`
          <div class="pacom-demo-fab-panel" role="dialog" aria-label="演示视角切换">
            <div class="pacom-demo-fab-head">
              <span class="pacom-demo-fab-title">演示视角</span>
              <span class="pacom-badge pacom-badge--neutral">模拟数据</span>
            </div>
            <span class="pacom-demo-fab-sub">测试邀请码 482 916 305 ｜ 验证码任意 6 位数字</span>
            <div class="pacom-demo-fab-roles">
              <span class="pacom-demo-fab-sec-title">工作区角色</span>
              ${Hn.map(V=>`
                  <button type="button" class="pacom-demo-role-btn" aria-pressed="${n==="app"&&a?.role===V}" data-demo-pick="${V}">
                    <span>${pt[V]}</span>
                    ${n==="app"&&a?.role===V?re("check",14):""}
                  </button>`).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">登录与注册</span>
              ${g.map(O).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">邀请与开通激活</span>
              ${c.map(O).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">链接异常与终态</span>
              ${S.map(O).join("")}
            </div>
            <div class="pacom-demo-fab-foot">
              <a class="pacom-demo-link" href="./index.html">
                <span>进入生产入口（index.html）</span>
                <span>→</span>
              </a>
            </div>
          </div>`:""}
      <button type="button" class="pacom-demo-fab-pill" aria-expanded="${d}" data-demo-fab-toggle="1" title="切换演示视角">
        <span class="pacom-demo-fab-dot" aria-hidden="true"></span>
        <span>演示</span>
      </button>
    `,h.querySelector("[data-demo-fab-toggle]")?.addEventListener("click",V=>{V.stopPropagation(),d=!d,x()}),h.querySelectorAll("[data-demo-pick]").forEach(V=>{V.addEventListener("click",async()=>{const B=V.dataset.demoPick;B&&(d=!1,a=await t.switchDemoRole(B),await F(a))})}),h.querySelectorAll("[data-demo-preset]").forEach(V=>{V.addEventListener("click",async()=>{const B=V.dataset.demoPreset,G=Fa.find(se=>se.key===B);G&&(d=!1,p="",G.sessionRole&&(a=await t.switchDemoRole(G.sessionRole)),await E(G.hash,G.sessionRole===null,{presetKey:G.key,initialJoinReceipt:G.joinReceipt??null,initialApplyReceipt:G.applyReceipt??null}))})})}document.addEventListener("click",g=>{d&&(g.target?.closest("[data-demo-fab-root]")||(d=!1,x()))}),document.addEventListener("keydown",g=>{g.key==="Escape"&&d&&(d=!1,x())});async function E(g,c,S){zn(e),_s(e),Cs(e),c&&a&&(await t.logout(),a=null);const O=Ca(g);if(n=O.kind,o=g,l=S?.presetKey??v(g,!!a),window.location.hash!==g&&(window.location.hash=g),x(),O.kind==="register"||O.kind==="invite"){Vn(e,t,{initialMode:O.initialMode,prefillCode:O.prefillCode,isInviteRoute:O.kind==="invite",inviteToken:O.inviteToken,currentSession:O.kind==="invite"?a:null,initialJoinReceipt:S?.initialJoinReceipt??null,initialApplyReceipt:S?.initialApplyReceipt??null,onBackToLogin:()=>{p="",E("#login",!1)},onGoLoginForInvite:(V,B,G)=>{p=G,E("#login",!1,{prefillAccount:V,notice:B})},onSwitchAccountForInvite:(V,B)=>{p=V,E("#login",!0,{notice:B})},onBackToWorkspace:()=>{a?F(a):E("#login",!1)},onAuthenticated:V=>{p="",F(V)}});return}Un(e,t,V=>{if(a=V,p){const B=p;p="",E(B,!1);return}F(V)},{prefillAccount:S?.prefillAccount,notice:S?.notice,onOpenRegister:()=>{p="",E("#register",!1)}})}async function F(g){_s(e),Cs(e),a=g,n="app",o="",l="",x(),(!window.location.hash||ma(window.location.hash))&&(window.location.hash=w||"#home"),w="",await Nn(e,t,g,()=>{p="",w="",E("#login",!0)})}if(window.addEventListener("hashchange",()=>{if(ma(window.location.hash)){if(window.location.hash===o)return;const g=Ca(window.location.hash);(n!==g.kind||window.location.hash!==o)&&E(window.location.hash,n==="app"&&g.kind!=="invite")}}),!a||ma(window.location.hash)){const g=ma(window.location.hash)?window.location.hash:"#login",c=Ca(g);await E(g,!!(a&&c.kind!=="invite"));return}await F(a)}async function Gn(){const e=document.getElementById("app");if(e)try{await Wn(e)}catch(t){e.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">演示环境初始化失败：${String(t)}</div></div>`}}Gn();
