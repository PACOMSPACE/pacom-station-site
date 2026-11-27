import{E as D,r as re,a as ot,e as s,b as it,g as lt,s as ra,m as ss,c as ns,d as Wt,P as Zt,I as et,A as va,f as Kt,n as Ue,h as Yt,i as os,j as fa,t as Jt,k as Qt,v as at,l as ga,o as ba,p as yt,q as ma,u as Xt,C as st,w as La,x as $t,y as Et,z as is,B as ut,D as kt,L as It,F as Va,G as oa,H as xt,J as Ha,K as _t,M as Lt,O as ls,N as rs}from"./auth-shared-1INKFAxV.js";import{R as Ke,g as Aa,a as At}from"./contracts-Z0w12vLk.js";function cs(){const e="2026-11-25T09:00:00Z",a=[];for(let l=1;l<=22;l+=1){const d=l===7?D.floorId:l===8?D.lockedFloor8Id:l===6?D.lockedFloor6Id:`structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-${l}`,b=String(l).padStart(2,"0");a.push({id:d,buildingId:D.buildingId,kind:"above",level:l,name:`${l}F`,areaSqm:l===7?1383.1:l===1?2680:l<=4?1920:1480,plan:{floorId:d,imageUrl:`./media/floors/e/${b}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}})}const t="structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-roof-1";a.push({id:t,buildingId:D.buildingId,kind:"roof",level:99,name:"RF",areaSqm:1260,plan:{floorId:t,imageUrl:"./media/floors/e/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}});const n=[];for(let l=1;l<=12;l+=1){const d=`structure-f-above-${l}`,b=String(l).padStart(2,"0");n.push({id:d,buildingId:D.buildingFId,kind:"above",level:l,name:`${l}F`,areaSqm:l===1?2450:l<=3?2100:1580,plan:{floorId:d,imageUrl:`./media/floors/f/${b}F.webp`,planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}})}const o="structure-f-roof-1";return n.push({id:o,buildingId:D.buildingFId,kind:"roof",level:99,name:"RF",areaSqm:960,plan:{floorId:o,imageUrl:"./media/floors/f/RF.webp",planVersion:1,widthPx:3840,heightPx:2160,updatedAt:e}}),{projects:[{id:D.projectId,name:"广实2号园",city:"广州市",address:"官洲街道星际四路",timezone:"Asia/Shanghai",location:{lat:23.0652,lng:113.3824,crs:"GCJ02",confirmed:!0,confirmedAt:e},imageUrl:"./media/gzlab.jpg"},{id:D.project1Id,name:"广实1号园",city:"广州市",address:"官洲街道寰宇一路",timezone:"Asia/Shanghai",location:{lat:23.0681,lng:113.3792,crs:"GCJ02",confirmed:!0,confirmedAt:e},imageUrl:"./media/gzlab.jpg"}],buildings:[{id:D.buildingId,projectId:D.projectId,name:"E栋",aboveFloors:22,belowFloors:0,hasRoof:!0,areaSqm:34656.3,imageUrl:"./media/building-e.webp"},{id:D.buildingFId,projectId:D.projectId,name:"F栋",aboveFloors:12,belowFloors:0,hasRoof:!0,areaSqm:21400,imageUrl:"./media/building-f.webp"}],floors:[...a,...n],zones:[{id:"zone-e1f-lobby",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 首层大堂与庭院入口",category:"corridor"},{id:"zone-e1f-power",floorId:"structure-31b5f945-6a76-4070-b2f1-ed6de64391d4-above-1",name:"1F 配电房与后勤区",category:"utility"},{id:"zone-e7f-lab-east",floorId:D.floorId,name:"7F 东侧实验区",category:"lab"},{id:"zone-e7f-office-west",floorId:D.floorId,name:"7F 西侧办公区",category:"office"},{id:"zone-e7f-meeting-702",floorId:D.floorId,name:"702 会议室",category:"meeting"},{id:"zone-e7f-corridor",floorId:D.floorId,name:"核心走廊与弱电井",category:"corridor"},{id:"zone-erf-hvac",floorId:t,name:"RF 屋面空调主机与稳压泵区",category:"utility"},{id:"zone-f1f-lobby",floorId:"structure-f-above-1",name:"1F 南入口大堂与弧形展示翼",category:"corridor"},{id:"zone-f8f-office",floorId:"structure-f-above-8",name:"8F 会议与行政办公区",category:"office"},{id:"zone-f11f-sports",floorId:"structure-f-above-11",name:"11F 体育活动与茶歇区",category:"outdoor"},{id:"zone-f12f-lounge",floorId:"structure-f-above-12",name:"12F 休息区、母婴室与桌球室",category:"office"},{id:"zone-frf-plant",floorId:o,name:"RF 屋面设备基础与机房区",category:"utility"}]}}const es=cs(),jt=es.floors.map(e=>e.id),ea={org_admin:{userId:"demo-org-admin",displayName:"林致远",email:"lin.zhiyuan@pacom.cn",phone:"13800138001",role:"org_admin",roleLabel:Ke.org_admin,authMode:"demo",scope:{allowedProjectIds:[D.projectId,D.project1Id],allowedBuildingIds:[D.buildingId,D.buildingFId],allowedFloorIds:[...jt],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},project_admin:{userId:"demo-project-admin",displayName:"陈明轩",email:"chen.mingxuan@pacom.cn",phone:"13800138002",role:"project_admin",roleLabel:Ke.project_admin,authMode:"demo",scope:{allowedProjectIds:[D.projectId],allowedBuildingIds:[D.buildingId,D.buildingFId],allowedFloorIds:[...jt],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!0,canEditDeployment:!0,canManageMembers:!0,canGrantOverride:!0,canViewAuditLogs:!0,activeOverrides:[]}},operator:{userId:"demo-operator-e7f",displayName:"周宁",email:"zhou.ning@pacom.cn",phone:"13800138003",role:"operator",roleLabel:Ke.operator,authMode:"demo",scope:{allowedProjectIds:[D.projectId],allowedBuildingIds:[D.buildingId],allowedFloorIds:[D.floorId],visibleModules:["home","analysis","alarms","scenes","settings","deployment","account"],canControlDevices:!0,canManageAlarms:!0,canEditScenes:!0,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}},space_user:{userId:"demo-space-user-e7f",displayName:"沈嘉",email:"shen.jia@pacom.cn",phone:"13800138004",role:"space_user",roleLabel:Ke.space_user,authMode:"demo",scope:{allowedProjectIds:[D.projectId],allowedBuildingIds:[D.buildingId],allowedFloorIds:[D.floorId],allowedZoneIds:["zone-e7f-lab-east","zone-e7f-meeting-702"],visibleModules:["home","account"],canControlDevices:!0,canManageAlarms:!1,canEditScenes:!1,canEditSettings:!1,canEditDeployment:!1,canManageMembers:!1,canGrantOverride:!1,canViewAuditLogs:!1,activeOverrides:[]}}},xa="pacom.web.demo.role",Ct="pacom.web.demo.spatial.v5",Dt="pacom.web.demo.orgs.v1",qt="pacom.web.demo.activeOrg.v1",Ft="pacom.web.demo.deployExt.v1",Ze="org-gzlab";function Tt(){return{extraDevices:[],lightMarkers:[{id:"lm-1",deviceId:"dev-e7f-lt-01",floorId:D.floorId,channel:"回路 1",label:"东侧实验台主灯",x:.68,y:.28},{id:"lm-2",deviceId:"dev-e7f-lt-01",floorId:D.floorId,channel:"回路 2",label:"东侧靠窗辅灯",x:.78,y:.36},{id:"lm-3",deviceId:"dev-e7f-lt-02",floorId:D.floorId,channel:"回路 1",label:"702 会议室主灯",x:.24,y:.34}],meshRoles:{"dev-e7f-gw-01":{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"},"dev-e7f-lt-01":{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"},"dev-e7f-lt-02":{proxy:!1,relay:!1,meshUuid:"mesh-e7f-01"},"dev-e7f-env-01":{proxy:!0,relay:!0,meshUuid:"mesh-e7f-01"}},edgeSyncByFloor:{[D.floorId]:{version:3,dirty:!1,lastSyncedAt:"2026-11-25T09:00:00Z"}},deviceParams:{},groups:[{id:"grp-mesh-auto-1",track:"mesh_auto",groupType:"灯光联动组（传感-面板）",name:"7F 东侧实验区人感自治联动",floorId:D.floorId,includesAdapter:!0,deviceIds:["dev-e7f-env-01","dev-e7f-lt-01","dev-e7f-gw-01"]},{id:"grp-mesh-dim-1",track:"mesh_auto",groupType:"调光器群控组",name:"7F 照明统一节能群控",floorId:D.floorId,includesAdapter:!0,deviceIds:["dev-e7f-lt-01","dev-e7f-lt-02","dev-e7f-gw-01"]},{id:"grp-cloud-hvac-1",track:"cloud_biz",groupType:"空调业务组",name:"7F 暖通末端统调组",floorId:D.floorId,includesAdapter:!1,deviceIds:["dev-e7f-hvac-01","dev-e7f-hvac-02"]},{id:"grp-cloud-dept-1",track:"cloud_biz",groupType:"行政 / 标牌管控组",name:"702 会议室标牌管控集",floorId:D.floorId,includesAdapter:!1,deviceIds:["dev-e7f-lt-02","dev-e7f-hvac-01"]}],docs:[{id:"doc-hvac-7f",floorId:D.floorId,name:"E7F_暖通空调与末端竣工图_v2.3.pdf",category:"竣工图纸",boundScope:"E栋 7F ｜ 空调末端",updatedAt:"2026-09-12",size:"4.8 MB"},{id:"doc-light-7f",floorId:D.floorId,name:"E7F_强电照明与调光回路拓扑.pdf",category:"回路图纸",boundScope:"E栋 7F ｜ 东侧实验区 / 702 会议室",updatedAt:"2026-09-10",size:"2.6 MB"},{id:"doc-point-map",floorId:D.floorId,name:"E7F_协议点位与蓝牙Mesh映射表.xlsx",category:"点位清单",boundScope:"E栋 7F ｜ 主控网关",updatedAt:"2026-10-04",size:"640 KB"},{id:"doc-fcu-manual",floorId:D.floorId,name:"风机盘管维保与排障手册.pdf",category:"设备手册",boundScope:"东侧实验区 ｜ FCU-01",updatedAt:"2026-08-21",size:"3.1 MB"}]}}class ds{mode="demo";batches=new Map;listeners=new Set;traces=[];activeSession=null;inviteMissTimestamps=[];inviteLockedUntil=0;sentCodeTargets=new Set;joinReceipts=new Map;joinWithdrawTokens=new Map;joinAccountByRequestId=new Map;pendingApprovalAccounts=new Set;orgs;activeOrgId;spatial;devices;alarms;workOrders;connections;deliveryBatches;scenes;calendar;rules;members;auditLogs;overrides;deployExt;constructor(){this.orgs=this.loadOrgs();const a=typeof localStorage<"u"?localStorage.getItem(qt):null,t=this.orgs.find(l=>l.id===a)??this.orgs[0];this.activeOrgId=t.id,this.spatial=t.spatial,this.overrides=[],this.syncAdminScopesFromSpatial();const n=typeof sessionStorage<"u"?sessionStorage.getItem(xa):null;n&&ea[n]&&(this.activeSession=structuredClone(ea[n]),this.applyOverridesToSession());const o=new Date().toISOString();this.devices=[{id:"dev-e7f-gw-01",name:"E7F 主控网关-01",category:"gateway",projectId:D.projectId,buildingId:D.buildingId,floorId:D.floorId,logicalZoneId:"zone-e7f-corridor",planPoint:{floorId:D.floorId,planVersion:1,x:.48,y:.52},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.10",portOrChannel:"UDP/47808",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:3,telemetry:{cpuLoad:{key:"cpuLoad",label:"网关负载",value:24,unit:"%",writable:!1,collectedAt:o,stale:!1},subDevicesOnline:{key:"subDevicesOnline",label:"在线子设备",value:"5 / 6",writable:!1,collectedAt:o,stale:!1}}},{id:"dev-e7f-lt-01",name:"东侧实验区主照明回路",category:"lighting",projectId:D.projectId,buildingId:D.buildingId,floorId:D.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:D.floorId,planVersion:1,x:.72,y:.34},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G01",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:5,telemetry:{power:{key:"power",label:"开关状态",value:!0,writable:!0,collectedAt:o,stale:!1},dimming:{key:"dimming",label:"亮度",value:80,unit:"%",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-lt-02",name:"702 会议室调光回路",category:"lighting",projectId:D.projectId,buildingId:D.buildingId,floorId:D.floorId,logicalZoneId:"zone-e7f-meeting-702",planPoint:{floorId:D.floorId,planVersion:1,x:.28,y:.38},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"dali",networkAddress:"DALI-BUS-1",portOrChannel:"G04",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{power:{key:"power",label:"开关状态",value:!1,writable:!0,collectedAt:o,stale:!1},dimming:{key:"dimming",label:"亮度",value:0,unit:"%",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",category:"hvac",projectId:D.projectId,buildingId:D.buildingId,floorId:D.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:D.floorId,planVersion:1,x:.66,y:.62},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"bacnet_ip",networkAddress:"10.7.1.21",portOrChannel:"AI-1 / AO-1",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:4,telemetry:{power:{key:"power",label:"运行状态",value:!0,writable:!0,collectedAt:o,stale:!1},mode:{key:"mode",label:"模式",value:"cooling",writable:!0,collectedAt:o,stale:!1},temp:{key:"temp",label:"室内温度",value:23.4,unit:"°C",writable:!1,collectedAt:o,stale:!1},setpoint:{key:"setpoint",label:"设定温度",value:24,unit:"°C",writable:!0,collectedAt:o,stale:!1}}},{id:"dev-e7f-hvac-02",name:"西侧办公区 VAV-02",category:"hvac",projectId:D.projectId,buildingId:D.buildingId,floorId:D.floorId,logicalZoneId:"zone-e7f-office-west",planPoint:{floorId:D.floorId,planVersion:1,x:.24,y:.68},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"modbus_tcp",networkAddress:"10.7.1.32",portOrChannel:"Slave 12",boundAt:o,boundBy:"commissioning-lead"},connectivity:"offline",version:1,telemetry:{power:{key:"power",label:"运行状态",value:!1,writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0},setpoint:{key:"setpoint",label:"设定温度",value:25,unit:"°C",writable:!0,collectedAt:"2026-11-22T12:10:00Z",stale:!0}}},{id:"dev-e7f-env-01",name:"东侧环境传感（温湿/CO₂）",category:"sensor",projectId:D.projectId,buildingId:D.buildingId,floorId:D.floorId,logicalZoneId:"zone-e7f-lab-east",planPoint:{floorId:D.floorId,planVersion:1,x:.78,y:.54},physicalInstalled:!0,physicalVerifiedAt:o,hardwareBinding:{gatewayId:"dev-e7f-gw-01",protocol:"mqtt",networkAddress:"pacom/e7f/env-01",portOrChannel:"QoS1",boundAt:o,boundBy:"commissioning-lead"},connectivity:"online",version:2,telemetry:{temp:{key:"temp",label:"温度",value:23.2,unit:"°C",writable:!1,collectedAt:o,stale:!1},humidity:{key:"humidity",label:"湿度",value:52,unit:"%RH",writable:!1,collectedAt:o,stale:!1},co2:{key:"co2",label:"CO₂",value:640,unit:"ppm",writable:!1,collectedAt:o,stale:!1}}}],this.alarms=[{id:"alm-e7f-001",projectId:D.projectId,buildingId:D.buildingId,floorId:D.floorId,deviceId:"dev-e7f-hvac-02",severity:"major",status:"active",title:"西侧办公区 VAV-02 通讯离线",message:"Modbus TCP (10.7.1.32 / Slave 12) 超过 3 个采集周期无心跳响应。",triggeredAt:"2026-11-22T13:15:00Z",workOrderId:"wo-e7f-101"},{id:"alm-e7f-002",projectId:D.projectId,buildingId:D.buildingId,floorId:D.floorId,deviceId:"dev-e7f-env-01",severity:"minor",status:"active",title:"东侧实验区 CO₂ 接近提示阈值",message:"当前 CO₂ 为 640 ppm，建议检查新风联动策略。",triggeredAt:"2026-11-22T13:42:00Z",workOrderId:null}],this.workOrders=[{id:"wo-e7f-101",projectId:D.projectId,buildingId:D.buildingId,floorId:D.floorId,deviceId:"dev-e7f-hvac-02",alarmId:"alm-e7f-001",title:"排查 E7F 西侧 VAV-02 网关链路与物理安装状态",description:"现场确认设备已接线但未完成物理安装复核，需排查终端电阻与地址冲突。",status:"assigned",assigneeId:"eng-field-02",createdAt:"2026-11-22T13:20:00Z",updatedAt:"2026-11-22T13:25:00Z"}],this.connections=[{id:"conn-e7f-bacnet",projectId:D.projectId,buildingId:D.buildingId,floorId:D.floorId,name:"E7F BACnet/IP 暖通采集通道",protocol:"bacnet_ip",endpoint:"10.7.1.10:47808",status:"connected",collectedPoints:48,calculatedPoints:12,lastHeartbeatAt:o},{id:"conn-e7f-dali",projectId:D.projectId,buildingId:D.buildingId,floorId:D.floorId,name:"E7F DALI-2 照明总线",protocol:"dali",endpoint:"DALI-BUS-1 (GW-01)",status:"connected",collectedPoints:24,calculatedPoints:4,lastHeartbeatAt:o},{id:"conn-e7f-modbus",projectId:D.projectId,buildingId:D.buildingId,floorId:D.floorId,name:"E7F 西侧 VAV Modbus TCP",protocol:"modbus_tcp",endpoint:"10.7.1.32:502",status:"degraded",collectedPoints:16,calculatedPoints:2,lastHeartbeatAt:"2026-11-22T12:10:00Z"}],this.deployExt=this.loadDeployExtensions(),this.deployExt.connectionsOverride&&(this.connections=structuredClone(this.deployExt.connectionsOverride)),this.deliveryBatches=[{id:"dlv-e7f-20261120",projectId:D.projectId,floorId:D.floorId,versionTag:"E7F-v1.0-freeze",deviceCount:6,verifiedCount:5,status:"frozen",frozenAt:"2026-11-20T09:30:00Z",frozenBy:"黄工（调试工程师）",note:"VAV-02 待现场物理复核后补齐交付"}],this.scenes=[{id:"scn-e7f-morning",projectId:D.projectId,floorId:D.floorId,name:"E7F 晨间科研开启",description:"开启东侧实验区主照明至 80%，并将 FCU-01 设定为 24.0°C 制冷",enabled:!0,scheduleSummary:"工作日 08:30 自动触发",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.dimming",targetValue:80},{deviceId:"dev-e7f-hvac-01",command:"hvac.setpoint",targetValue:24}],lastExecutedAt:"2026-11-22T00:30:00Z"},{id:"scn-e7f-meeting",projectId:D.projectId,floorId:D.floorId,name:"702 会议投影模式",description:"将 702 会议室调光降至 30% 柔光",enabled:!0,scheduleSummary:"手动触发",actions:[{deviceId:"dev-e7f-lt-02",command:"lighting.dimming",targetValue:30}],lastExecutedAt:null},{id:"scn-e7f-night",projectId:D.projectId,floorId:D.floorId,name:"E7F 夜间节能全关",description:"关闭实验区与会议室照明并关闭空调机组",enabled:!0,scheduleSummary:"每日 21:30 夜间巡检",actions:[{deviceId:"dev-e7f-lt-01",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-lt-02",command:"lighting.power",targetValue:!1},{deviceId:"dev-e7f-hvac-01",command:"hvac.power",targetValue:!1},{deviceId:"dev-e7f-hvac-02",command:"hvac.power",targetValue:!1}],lastExecutedAt:null}],this.calendar={projectId:D.projectId,version:3,workdayStart:"08:30",workdayEnd:"18:30",workdays:[1,2,3,4,5],nightGuardStart:"21:30",nightGuardEnd:"06:30",updatedAt:"2026-11-20T08:00:00Z"},this.rules=[{id:"rule-lt-01",projectId:D.projectId,category:"lighting",name:"工作日照明定时开启",scopeLabel:"广实2号园 / E栋 7F",summary:"随运行日历上班前 15 分钟开启主照明",enabled:!0,version:2,lastAppliedAt:o,receiptSummary:"2/2 设备回读确认"},{id:"rule-hvac-01",projectId:D.projectId,category:"hvac",name:"实验区暖通预冷与下班关闭",scopeLabel:"广实2号园 / E栋 7F",summary:"上班前 30 分钟预冷至 24°C，下班后 30 分钟关闭",enabled:!0,version:4,lastAppliedAt:o,receiptSummary:"1/2 确认，1 离线待重试"},{id:"rule-wx-01",projectId:D.projectId,category:"weather_area",name:"广州官洲气象源与计费面积口径",scopeLabel:"广实2号园",summary:"采用官洲气象站实况；E栋 34,656.3 m²",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"已同步报表引擎"},{id:"rule-mtr-01",projectId:D.projectId,category:"metering_carbon",name:"电网碳排放因子（南方电网）",scopeLabel:"广实2号园",summary:"0.5271 kgCO₂/kWh ｜ 计量支路自动去重",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"生效中"},{id:"rule-alm-01",projectId:D.projectId,category:"alarm_rules",name:"关键暖通离线 5 分钟升级工单",scopeLabel:"广实2号园 / E栋 7F",summary:"连续 3 周期无心跳触发重要告警，响应 SLA 30 分钟",enabled:!0,version:2,lastAppliedAt:o,receiptSummary:"已生效"},{id:"rule-tpl-01",projectId:D.projectId,category:"templates",name:"实验室标准 FCU 参数模板",scopeLabel:"项目模板库",summary:"制冷 23–25°C，防冻保护 6°C，回读超时 10s",enabled:!0,version:1,lastAppliedAt:o,receiptSummary:"已绑定 2 台设备"}],this.members=Object.values(ea).map((l,d)=>({userId:l.userId,displayName:l.displayName,email:`${l.role.replaceAll("_",".")}@gzlab.ac.cn`,role:l.role,roleLabel:l.roleLabel,scopeSummary:l.scope.allowedZoneIds?.length?`E栋 7F（${l.scope.allowedZoneIds.length} 个授权功能区）`:`${l.scope.allowedProjectIds.length} 项目 / ${l.scope.allowedFloorIds.length} 授权楼层`,status:"active",lastActiveAt:d===0?o:"2026-11-22T12:40:00Z"})),this.auditLogs=[{id:"aud-001",at:"2026-11-22T13:20:00Z",actor:"周宁",role:"operator",action:"work_order.create",target:"wo-e7f-101",result:"success",detail:"由告警 alm-e7f-001 转单"},{id:"aud-002",at:"2026-11-22T13:05:00Z",actor:"陈明轩",role:"project_admin",action:"device.hardware_binding",target:"dev-e7f-lt-01",result:"success",detail:"绑定 DALI-BUS-1 / G01"},{id:"aud-003",at:"2026-11-22T12:50:00Z",actor:"沈嘉",role:"space_user",action:"floor.read",target:"E栋 8F",result:"denied",detail:"403 FORBIDDEN 超出授权楼层"}]}reconcileOverrides(){const a=Date.now();for(const t of this.overrides)t.status==="active"&&new Date(t.expiresAt).getTime()<=a&&(t.status="expired")}applyOverridesToSession(){if(this.reconcileOverrides(),!this.activeSession)return;const a=ea[this.activeSession.role].scope,t=this.overrides.filter(n=>n.targetUserId===this.activeSession.userId&&n.status==="active");this.activeSession.scope.activeOverrides=structuredClone(t),this.activeSession.scope.canEditDeployment=a.canEditDeployment||t.some(n=>n.module==="deployment"),this.activeSession.scope.canEditSettings=a.canEditSettings||t.some(n=>n.module==="settings")}record(a,t,n,o,l){this.traces.unshift({at:new Date().toISOString(),channel:a,operation:t,endpoint:n,request:l,response:o}),this.traces.length>40&&this.traces.pop()}pushAudit(a,t,n,o){const l=this.activeSession;this.auditLogs.unshift({id:`aud-${Date.now().toString(36)}`,at:new Date().toISOString(),actor:l?.displayName??"anonymous",role:l?.role??"space_user",action:a,target:t,result:n,detail:o})}requireSession(){if(!this.activeSession)throw new Error("401 UNAUTHORIZED: 当前未登录");return this.applyOverridesToSession(),this.activeSession}async getSession(){return this.applyOverridesToSession(),this.record("REST","getSession","GET /api/v1/auth/me",this.activeSession??{authenticated:!1}),this.activeSession?structuredClone(this.activeSession):null}async login(a){const t=a.method??"password",n=a.account.trim(),o=this.normalizeContactKey(n);if(!n)throw new Error("400 BAD_REQUEST: 请输入电子邮箱或手机号码");if(t==="sms"){const v=(a.smsCode??a.password??"").trim();if(!/^\d{6}$/.test(v))throw new Error("验证码不正确或已过期");const $=`login:${o}`;if(!this.sentCodeTargets.has($))throw new Error("请先获取短信验证码");this.sentCodeTargets.delete($)}else if(!(a.password??"").trim())throw new Error("400 BAD_REQUEST: 请输入账户和密码");if(this.pendingApprovalAccounts.has(o))throw new Error("你的加入申请正在等待机构管理员审批，批准后即可登录。");const l=Object.values(ea).find(v=>{const $=!!v.email&&this.normalizeContactKey(v.email)===o,S=!!v.phone&&this.normalizeContactKey(v.phone)===o;return $||S}),d=n.toLowerCase(),b=l?l.role:d.includes("org")||d.includes("admin")?"org_admin":d.includes("proj")?"project_admin":d.includes("space")||d.includes("member")?"space_user":"operator";return this.activeSession=structuredClone(ea[b]),this.applyOverridesToSession(),sessionStorage.setItem(xa,b),this.record("REST","login","POST /api/v1/auth/login",this.activeSession,{method:t,account:n,rememberMe:!!a.rememberMe}),this.pushAudit("auth.login",this.activeSession.userId,"success",t==="sms"?"短信验证码登录":"密码登录"),structuredClone(this.activeSession)}async logout(){this.pushAudit("auth.logout",this.activeSession?.userId??"-","success"),this.activeSession=null,sessionStorage.removeItem(xa),this.record("REST","logout","POST /api/v1/auth/logout",{ok:!0})}maskTarget(a){const t=a.trim();if(t.includes("@")){const[o,l]=t.split("@");return o&&l?`${o[0]}•••@${l}`:"••••"}const n=t.replace(/\D/g,"");return n.length===11?`${n.slice(0,3)} •••• ${n.slice(7)}`:n.length>=6?`${n.slice(0,3)} •••• ${n.slice(-4)}`:"••••"}async sendVerificationCode(a){const t=a.target.trim(),n=t.includes("@")?"email":"sms";this.sentCodeTargets.add(`${a.purpose}:${this.normalizeContactKey(t)}`);const o={maskedTarget:this.maskTarget(t),channel:n,cooldownSeconds:60};return this.record("REST","sendVerificationCode","POST /api/v1/auth/verification-codes",o,{purpose:a.purpose,channel:n}),o}async confirmPasswordReset(a){const t=a.account.trim(),n=this.normalizeContactKey(t);if(!t)throw new Error("请输入电子邮箱或手机号码");if(!/^\d{6}$/.test(a.verificationCode.trim()))throw new Error("验证码不正确或已过期");const o=`reset:${n}`;if(!this.sentCodeTargets.has(o))throw new Error("请先获取验证码");if(!a.newPassword||a.newPassword.length<8)throw new Error("密码至少需要 8 个字符");this.sentCodeTargets.delete(o),this.record("REST","confirmPasswordReset","POST /api/v1/auth/password-reset/confirm",{ok:!0},{account:this.maskTarget(t)}),this.pushAudit("auth.password_reset",this.maskTarget(t),"success")}async resolveInviteCode(a){const t=Date.now();if(this.inviteLockedUntil>t)return{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const n=a.replace(/\D/g,""),l={482916305:this.orgs[0]?.name??"广州国家实验室",618204917:"天环智慧园区"}[n];if(!l){if(this.inviteMissTimestamps=this.inviteMissTimestamps.filter(v=>t-v<36e5),this.inviteMissTimestamps.push(t),this.inviteMissTimestamps.length>=10)return this.inviteLockedUntil=t+36e5,this.inviteMissTimestamps=[],{valid:!1,rateLimitedUntil:new Date(this.inviteLockedUntil).toISOString(),message:"尝试次数过多，请稍后再试。"};const b={valid:!1,message:"邀请码不正确或已失效，请向机构管理员确认。"};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",b,{code:n}),b}const d={valid:!0,organizationName:l};return this.record("REST","resolveInviteCode","POST /api/v1/org/invite-codes/resolve",d,{code:n}),d}async registerAndJoin(a){const t=await this.resolveInviteCode(a.inviteCode);if(!t.valid||!t.organizationName)throw new Error(t.message??"邀请码不正确或已失效，请向机构管理员确认。");if(!/^\d{6}$/.test(a.verificationCode.trim()))throw new Error("验证码不正确或已过期");const n=this.normalizeContactKey(a.account),o=`register_join:${n}`;if(!this.sentCodeTargets.has(o))throw new Error("请先获取验证码");const l=a.account.includes("@")?"email":"phone";if(this.isContactOccupied(l,a.account))throw new Error("该账户已注册，请直接登录或联系机构管理员发送定向邀请。");if(this.pendingApprovalAccounts.has(n))throw new Error("该账户已提交加入申请，正在等待机构管理员审批。");this.sentCodeTargets.delete(o);const d=`JR-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,b=`wt-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`,v={requestId:d,organizationName:t.organizationName,maskedAccount:this.maskTarget(a.account),status:"pending_approval",submittedAt:new Date().toISOString(),withdrawToken:b};return this.joinReceipts.set(d,v),this.joinWithdrawTokens.set(d,b),this.joinAccountByRequestId.set(d,n),this.pendingApprovalAccounts.add(n),this.record("REST","registerAndJoin","POST /api/v1/auth/register-join",v,{organizationName:t.organizationName,displayName:a.displayName}),v}async withdrawJoinApplication(a,t){const n=this.joinWithdrawTokens.get(a);if(n&&t!==n)throw new Error("撤回凭证无效或已失效，请刷新后重试。");this.joinReceipts.delete(a),this.joinWithdrawTokens.delete(a);const o=this.joinAccountByRequestId.get(a);o&&(this.pendingApprovalAccounts.delete(o),this.joinAccountByRequestId.delete(a)),this.record("REST","withdrawJoinApplication",`DELETE /api/v1/org/join-requests/${a}`,{ok:!0})}async submitOrgApplication(a){if(!/^\d{6}$/.test(a.smsCode.trim()))throw new Error("验证码不正确或已过期");const t=`org_apply:${this.normalizeContactKey(a.phone)}`;if(!this.sentCodeTargets.has(t))throw new Error("请先获取短信验证码");this.sentCodeTargets.delete(t);const n=a.province===a.city?a.province:`${a.province} ${a.city}`,o={applicationId:`APP-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(Math.floor(1e3+Math.random()*9e3))}`,organizationName:a.organizationName.trim(),region:n,maskedEmail:this.maskTarget(a.email),status:"pending_review",submittedAt:new Date().toISOString()};return this.record("REST","submitOrgApplication","POST /api/v1/org/applications",o,{organizationName:o.organizationName,region:n}),o}async getInvitationPreview(a){const t=a.trim(),n=this.orgs[0]?.name??"广州国家实验室",o=new Date(Date.now()+7*864e5).toISOString().slice(0,10);return t==="expired"?{token:t,kind:"member",organizationName:n,inviterName:"林致远",role:"operator",roleLabel:Ke.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!1,requiredSecondaryChannel:null,expiresAt:"2026-11-20",status:"expired"}:t==="revoked"?{token:t,kind:"member",organizationName:n,inviterName:"林致远",role:"operator",roleLabel:Ke.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!1,requiredSecondaryChannel:null,expiresAt:o,status:"revoked"}:t==="accepted"?{token:t,kind:"member",organizationName:n,inviterName:"林致远",role:"operator",roleLabel:Ke.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",accountExists:!0,requiredSecondaryChannel:null,expiresAt:o,status:"accepted"}:t.startsWith("owner")?{token:t,kind:"owner",organizationName:"广州天环智能科技有限公司",role:"org_admin",roleLabel:Ke.org_admin,targetChannel:"email",targetValue:"chen@company.com",prefillName:"陈志远",accountExists:!1,requiredSecondaryChannel:null,verifiedSecondaryMasked:"139 •••• 9000",expiresAt:o,status:"pending"}:t==="admin-email"?{token:t,kind:"member",organizationName:n,inviterName:"林致远",role:"org_admin",roleLabel:Ke.org_admin,targetChannel:"email",targetValue:"zhao.admin@pacom.cn",prefillName:"赵启明",accountExists:!1,requiredSecondaryChannel:Aa("member","org_admin","email"),expiresAt:o,status:"pending"}:t==="admin-phone"?{token:t,kind:"member",organizationName:n,inviterName:"林致远",role:"org_admin",roleLabel:Ke.org_admin,targetChannel:"phone",targetValue:"13900139088",prefillName:"赵启明",accountExists:!1,requiredSecondaryChannel:Aa("member","org_admin","phone"),expiresAt:o,status:"pending"}:t==="project-admin-email"?{token:t,kind:"member",organizationName:n,inviterName:"林致远",role:"project_admin",roleLabel:Ke.project_admin,targetChannel:"email",targetValue:"wu.proj@pacom.cn",prefillName:"吴承志",accountExists:!1,requiredSecondaryChannel:Aa("member","project_admin","email"),expiresAt:o,status:"pending"}:t==="project-admin-phone"?{token:t,kind:"member",organizationName:n,inviterName:"林致远",role:"project_admin",roleLabel:Ke.project_admin,targetChannel:"phone",targetValue:"13700137066",prefillName:"吴承志",accountExists:!1,requiredSecondaryChannel:Aa("member","project_admin","phone"),expiresAt:o,status:"pending"}:t==="existing-demo"?{token:t,kind:"member",organizationName:"天环智慧园区",inviterName:"林致远",role:"operator",roleLabel:Ke.operator,targetChannel:"email",targetValue:"zhou.ning@pacom.cn",prefillName:"周宁",accountExists:!0,requiredSecondaryChannel:null,expiresAt:o,status:"pending"}:{token:t||"member-demo",kind:"member",organizationName:n,inviterName:"林致远",role:"operator",roleLabel:Ke.operator,targetChannel:"email",targetValue:"lin.mingyuan@pacom.cn",prefillName:"林明远",accountExists:!1,requiredSecondaryChannel:null,expiresAt:o,status:"pending"}}normalizeContactKey(a){return a.trim().toLowerCase().replace(/[\s\-()]/g,"")}isContactOccupied(a,t){const n=this.normalizeContactKey(t);return Object.values(ea).some(o=>{const l=a==="email"?o.email:o.phone;return!!l&&this.normalizeContactKey(l)===n})}async acceptInvitation(a){const t=await this.getInvitationPreview(a.token);if(t.status!=="pending")throw new Error("邀请已过期或已失效，请联系邀请人重新发送。");const n=t.kind==="owner"?"org_admin":t.role??"operator",o=this.activeSession;if(!!o&&(t.targetChannel==="email"&&!!o?.email&&this.normalizeContactKey(o.email)===this.normalizeContactKey(t.targetValue)||t.targetChannel==="phone"&&!!o?.phone&&this.normalizeContactKey(o.phone)===this.normalizeContactKey(t.targetValue))&&o){const $=structuredClone(o);return this.activeSession=$,this.applyOverridesToSession(),sessionStorage.setItem(xa,$.role),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${a.token}/accept`,$),this.pushAudit("auth.invite.accept",$.userId,"success","已有账户确认加入"),structuredClone($)}if(t.accountExists)throw new Error("该账户已注册，请使用原账户登录后再接受邀请。");const d=t.requiredSecondaryChannel!==void 0?t.requiredSecondaryChannel:Aa(t.kind,t.role,t.targetChannel);let b="";if(d){const $=(a.secondaryContact??"").trim(),S=(a.secondaryVerificationCode??"").trim();if(!$)throw new Error(d==="phone"?"请补充并验证手机号码":"请补充并验证电子邮箱");if(!/^\d{6}$/.test(S))throw new Error("验证码不正确或已过期");const w=`bind:${this.normalizeContactKey($)}`;if(!this.sentCodeTargets.has(w))throw new Error("请先获取验证码");if(this.isContactOccupied(d,$))throw new Error(d==="phone"?"该手机号码已绑定其他账户，请更换后重试；如原账户为你本人所有，请使用原账户登录或联系管理员重新邀请。":"该电子邮箱已绑定其他账户，请更换后重试；如原账户为你本人所有，请使用原账户登录或联系管理员重新邀请。");this.sentCodeTargets.delete(w),b=$}const v=structuredClone(ea[n]);return a.displayName?.trim()&&(v.displayName=a.displayName.trim()),t.targetChannel==="email"?(v.email=t.targetValue,v.phone=b||(t.kind==="owner"?"13900139000":void 0)):(v.phone=t.targetValue,v.email=b||void 0),this.activeSession=v,this.applyOverridesToSession(),sessionStorage.setItem(xa,n),this.record("REST","acceptInvitation",`POST /api/v1/auth/invites/${a.token}/accept`,v),this.pushAudit("auth.invite.accept",v.userId,"success"),structuredClone(v)}async switchDemoRole(a){return this.activeSession=structuredClone(ea[a]),this.applyOverridesToSession(),sessionStorage.setItem(xa,a),this.record("REST","switchDemoRole",`POST /api/v1/auth/demo-role/${a}`,this.activeSession),structuredClone(this.activeSession)}loadLegacySpatial(){try{if(typeof localStorage<"u"){const a=localStorage.getItem(Ct);if(a){const t=JSON.parse(a);if(Array.isArray(t?.projects)&&Array.isArray(t?.buildings)&&Array.isArray(t?.floors)&&Array.isArray(t?.zones))return t}}}catch{}return structuredClone(es)}loadOrgs(){try{if(typeof localStorage<"u"){const a=localStorage.getItem(Dt);if(a){const t=JSON.parse(a);if(Array.isArray(t)&&t.length>0&&t.every(n=>n?.id&&n?.name&&Array.isArray(n?.spatial?.projects)))return t}}}catch{}return[{id:Ze,name:"广州国家实验室",spatial:this.loadLegacySpatial()}]}persistSpatial(){const a=this.orgs.find(t=>t.id===this.activeOrgId);a&&(a.spatial=this.spatial),this.syncAdminScopesFromSpatial();try{typeof localStorage<"u"&&(localStorage.setItem(Dt,JSON.stringify(this.orgs)),localStorage.setItem(qt,this.activeOrgId),this.activeOrgId===Ze&&localStorage.setItem(Ct,JSON.stringify(this.spatial)))}catch{}}async listOrganizations(){return this.orgs.map(a=>({id:a.id,name:a.name,projectCount:a.spatial.projects.length}))}getActiveOrganizationId(){return this.activeOrgId}loadDeployExtensions(){try{if(typeof localStorage<"u"){const a=localStorage.getItem(`${Ft}.${this.activeOrgId}`);if(a){const t=JSON.parse(a),n=this.activeOrgId===Ze?Tt():{extraDevices:[],lightMarkers:[],meshRoles:{},edgeSyncByFloor:{},deviceParams:{},groups:[],docs:[]};return{extraDevices:Array.isArray(t.extraDevices)?t.extraDevices:n.extraDevices,lightMarkers:Array.isArray(t.lightMarkers)?t.lightMarkers:n.lightMarkers,meshRoles:t.meshRoles&&typeof t.meshRoles=="object"?t.meshRoles:n.meshRoles,edgeSyncByFloor:t.edgeSyncByFloor&&typeof t.edgeSyncByFloor=="object"?t.edgeSyncByFloor:n.edgeSyncByFloor,deviceParams:t.deviceParams&&typeof t.deviceParams=="object"?t.deviceParams:n.deviceParams,groups:Array.isArray(t.groups)?t.groups:n.groups,docs:Array.isArray(t.docs)?t.docs:n.docs,connectionsOverride:Array.isArray(t.connectionsOverride)?t.connectionsOverride:void 0}}}}catch{}return this.activeOrgId===Ze?Tt():{extraDevices:[],lightMarkers:[],meshRoles:{},edgeSyncByFloor:{},deviceParams:{},groups:[],docs:[]}}persistDeployExtensions(){try{typeof localStorage<"u"&&localStorage.setItem(`${Ft}.${this.activeOrgId}`,JSON.stringify(this.deployExt))}catch{}}findAllDevices(){return[...this.activeOrgId===Ze?this.devices:[],...this.deployExt.extraDevices]}markEdgeSyncDirty(a){const t=this.deployExt.edgeSyncByFloor[a]??{version:1,dirty:!1,lastSyncedAt:null};this.deployExt.edgeSyncByFloor[a]={...t,dirty:!0}}async switchOrganization(a){const t=this.orgs.find(n=>n.id===a);if(!t)throw new Error(`404 NOT_FOUND: 机构 ${a} 不存在`);this.activeOrgId=t.id,this.spatial=t.spatial,this.deployExt=this.loadDeployExtensions(),this.persistSpatial()}async createOrganization(a){if(this.requireSession().role!=="org_admin")throw new Error("403 FORBIDDEN: 仅机构管理员可新建机构");const n=a.trim()||"新建机构",o={id:`org-${Date.now().toString(36)}`,name:n,spatial:{projects:[],buildings:[],floors:[],zones:[]}};return this.orgs.push(o),this.activeOrgId=o.id,this.spatial=o.spatial,this.deployExt=this.loadDeployExtensions(),this.persistSpatial(),this.pushAudit("org.create",o.id,"success",n),{id:o.id,name:o.name,projectCount:0}}syncAdminScopesFromSpatial(){const a=this.spatial.projects.map(o=>o.id),t=this.spatial.buildings.map(o=>o.id),n=this.spatial.floors.map(o=>o.id);this.activeOrgId===Ze&&(ea.org_admin.scope.allowedProjectIds=[...a],ea.org_admin.scope.allowedBuildingIds=[...t],ea.org_admin.scope.allowedFloorIds=[...n],ea.project_admin.scope.allowedBuildingIds=[...t],ea.project_admin.scope.allowedFloorIds=[...n]),this.activeSession&&((this.activeOrgId!==Ze||this.activeSession.role==="org_admin")&&(this.activeSession.scope.allowedProjectIds=[...a]),(this.activeOrgId!==Ze||this.activeSession.role==="org_admin"||this.activeSession.role==="project_admin")&&(this.activeSession.scope.allowedBuildingIds=[...t],this.activeSession.scope.allowedFloorIds=[...n]))}async getSpatialTree(){const a=this.requireSession();if(this.activeOrgId!==Ze){const $=structuredClone(this.spatial);return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:$.projects.length,buildings:$.buildings.length,floors:$.floors.length}),$}const t=this.spatial.projects.filter($=>a.scope.allowedProjectIds.includes($.id)),n=this.spatial.buildings.filter($=>a.scope.allowedBuildingIds.includes($.id)),o=new Set(n.map($=>$.id)),l=this.spatial.floors.filter($=>o.has($.buildingId)),d=new Set(l.map($=>$.id)),b=this.spatial.zones.filter($=>d.has($.floorId)),v=structuredClone({projects:t,buildings:n,floors:l,zones:b});return this.record("REST","getSpatialTree","GET /api/v1/spatial/tree",{projects:v.projects.length,buildings:v.buildings.length,floors:v.floors.length}),v}async createProject(a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权创建项目`);const n={id:`project-${Date.now().toString(36)}`,name:a.name.trim()||"新建项目",city:a.city?.trim()||"广州市",address:a.address?.trim()||"",timezone:"Asia/Shanghai",location:a.location,imageUrl:a.imageUrl??"./media/gzlab.jpg"};return this.spatial.projects.push(n),t.scope.allowedProjectIds.includes(n.id)||t.scope.allowedProjectIds.push(n.id),this.persistSpatial(),this.record("REST","createProject","POST /api/v1/projects",n,a),this.pushAudit("project.create",n.id,"success",n.name),structuredClone(n)}async updateProject(a,t){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权修改项目配置`);const o=this.spatial.projects.find(l=>l.id===a);if(!o)throw new Error(`404 NOT_FOUND: 项目 ${a} 不存在`);return t.name!==void 0&&(o.name=t.name.trim()||o.name),t.city!==void 0&&(o.city=t.city.trim()),t.address!==void 0&&(o.address=t.address.trim()),t.location!==void 0&&(o.location=t.location),t.imageUrl!==void 0&&(o.imageUrl=t.imageUrl),this.persistSpatial(),this.record("REST","updateProject",`PATCH /api/v1/projects/${a}`,o,t),this.pushAudit("project.update",a,"success",o.name),structuredClone(o)}async deleteProject(a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权删除项目`);if(a===D.projectId)throw new Error("400 BAD_REQUEST: 当前项目包含运行中设备，请先清理后再删除");const n=new Set(this.spatial.buildings.filter(l=>l.projectId===a).map(l=>l.id)),o=new Set(this.spatial.floors.filter(l=>n.has(l.buildingId)).map(l=>l.id));this.spatial.projects=this.spatial.projects.filter(l=>l.id!==a),this.spatial.buildings=this.spatial.buildings.filter(l=>l.projectId!==a),this.spatial.floors=this.spatial.floors.filter(l=>!n.has(l.buildingId)),this.spatial.zones=this.spatial.zones.filter(l=>!o.has(l.floorId)),this.persistSpatial(),this.record("REST","deleteProject",`DELETE /api/v1/projects/${a}`,{ok:!0}),this.pushAudit("project.delete",a,"success")}async upsertBuilding(a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权维护楼宇`);let n=a.id?this.spatial.buildings.find(o=>o.id===a.id):void 0;return n?(n.name=a.name.trim()||n.name,n.aboveFloors=Math.max(0,a.aboveFloors),n.belowFloors=Math.max(0,a.belowFloors),n.hasRoof=a.hasRoof,a.areaSqm!==void 0&&(n.areaSqm=a.areaSqm),a.imageUrl!==void 0&&(n.imageUrl=a.imageUrl)):(n={id:`building-${Date.now().toString(36)}`,projectId:a.projectId,name:a.name.trim()||"新建楼宇",aboveFloors:Math.max(1,a.aboveFloors),belowFloors:Math.max(0,a.belowFloors),hasRoof:a.hasRoof,areaSqm:a.areaSqm??null,imageUrl:a.imageUrl??"./media/building-e.webp"},this.spatial.buildings.push(n)),this.persistSpatial(),this.record("REST","upsertBuilding","PUT /api/v1/buildings",n,a),this.pushAudit("building.upsert",n.id,"success",n.name),structuredClone(n)}async deleteBuilding(a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权删除楼宇`);if(a===D.buildingId)throw new Error("400 BAD_REQUEST: 当前楼宇包含运行中设备，请先解绑后再删除");const n=new Set(this.spatial.floors.filter(o=>o.buildingId===a).map(o=>o.id));this.spatial.buildings=this.spatial.buildings.filter(o=>o.id!==a),this.spatial.floors=this.spatial.floors.filter(o=>o.buildingId!==a),this.spatial.zones=this.spatial.zones.filter(o=>!n.has(o.floorId)),this.persistSpatial(),this.record("REST","deleteBuilding",`DELETE /api/v1/buildings/${a}`,{ok:!0}),this.pushAudit("building.delete",a,"success")}async upsertFloor(a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权维护楼层`);const n=new Date().toISOString();let o=a.id?this.spatial.floors.find(l=>l.id===a.id):void 0;if(o)o.name=a.name.trim()||o.name,o.kind=a.kind,o.level=a.level,a.areaSqm!==void 0&&(o.areaSqm=a.areaSqm),a.planImageUrl!==void 0&&(o.plan=a.planImageUrl?{floorId:o.id,imageUrl:a.planImageUrl,planVersion:(o.plan?.planVersion??0)+1,updatedAt:n}:null);else{const l=`floor-${a.buildingId.slice(-6)}-${a.kind}-${Math.abs(a.level)}-${Date.now().toString(36).slice(-3)}`;o={id:l,buildingId:a.buildingId,kind:a.kind,level:a.level,name:a.name.trim()||`${a.level}F`,areaSqm:a.areaSqm??null,plan:a.planImageUrl?{floorId:l,imageUrl:a.planImageUrl,planVersion:1,updatedAt:n}:null},this.spatial.floors.push(o),this.activeSession&&!this.activeSession.scope.allowedFloorIds.includes(o.id)&&this.activeSession.scope.allowedFloorIds.push(o.id)}return this.persistSpatial(),this.record("REST","upsertFloor","PUT /api/v1/floors",{id:o.id,name:o.name,hasPlan:!!o.plan}),this.pushAudit("floor.upsert",o.id,"success",o.name),structuredClone(o)}async deleteFloor(a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权删除楼层`);if(a===D.floorId)throw new Error("400 BAD_REQUEST: 当前楼层已绑定运行设备，请先解绑后再删除");this.spatial.floors=this.spatial.floors.filter(n=>n.id!==a),this.spatial.zones=this.spatial.zones.filter(n=>n.floorId!==a),this.persistSpatial(),this.record("REST","deleteFloor",`DELETE /api/v1/floors/${a}`,{ok:!0}),this.pushAudit("floor.delete",a,"success")}async upsertZone(a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权维护功能区`);let n=a.id?this.spatial.zones.find(o=>o.id===a.id):void 0;return n?(n.name=a.name.trim()||n.name,n.category=a.category):(n={id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,floorId:a.floorId,name:a.name.trim(),category:a.category},this.spatial.zones.push(n)),this.persistSpatial(),this.record("REST","upsertZone","PUT /api/v1/zones",n),this.pushAudit("zone.upsert",n.id,"success",n.name),structuredClone(n)}async deleteZone(a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权删除功能区`);this.spatial.zones=this.spatial.zones.filter(n=>n.id!==a),this.persistSpatial(),this.record("REST","deleteZone",`DELETE /api/v1/zones/${a}`,{ok:!0}),this.pushAudit("zone.delete",a,"success")}async copyZonesToFloors(a,t){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权复制功能区`);const o=this.spatial.floors.find(b=>b.id===a),l=this.spatial.zones.filter(b=>b.floorId===a);if(!o||l.length===0)return 0;let d=0;for(const b of t){if(b===a)continue;const v=this.spatial.floors.find(S=>S.id===b);if(!v)continue;const $=new Set(this.spatial.zones.filter(S=>S.floorId===b).map(S=>S.name));for(const S of l){const w=S.name.replace(new RegExp(`^${o.name}\\s*`,"i"),""),h=`${v.name} ${w}`.trim();$.has(h)||(this.spatial.zones.push({id:`zone-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,floorId:b,name:h,category:S.category}),$.add(h),d+=1)}}return d>0&&this.persistSpatial(),this.record("REST","copyZonesToFloors","POST /api/v1/zones/copy",{sourceFloorId:a,targetCount:t.length,added:d}),d}async getFloorDevices(a){const t=this.requireSession();if(!a)return[];if(this.activeOrgId===Ze&&!t.scope.allowedFloorIds.includes(a)){const o={code:"FORBIDDEN",status:403,message:`当前角色「${t.roleLabel}」无权访问目标楼层`};throw this.record("REST","getFloorDevices",`GET /api/v1/floors/${a}/devices`,o),this.pushAudit("floor.read",a,"denied",o.message),new Error(`403 FORBIDDEN: ${o.message}`)}let n=structuredClone(this.findAllDevices().filter(o=>o.floorId===a));return t.scope.allowedZoneIds?.length&&(n=n.filter(o=>o.logicalZoneId&&t.scope.allowedZoneIds.includes(o.logicalZoneId))),this.record("REST","getFloorDevices",`GET /api/v1/floors/${a}/devices`,{count:n.length}),n}async dispatchControlBatch(a){const t=this.requireSession();if(!t.scope.canControlDevices||!t.scope.allowedFloorIds.includes(a.floorId))throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权下发控制指令`);const n=`batch-e7f-${Date.now().toString(36)}`,o={batchId:n,floorId:a.floorId,createdBy:t.userId,createdAt:new Date().toISOString(),receipts:a.targets.map(l=>({deviceId:l.deviceId,command:l.command,targetValue:l.targetValue,status:"queued"}))};return this.batches.set(n,o),this.record("REST","dispatchControlBatch","POST /api/v1/control/batches",o,a),this.pushAudit("control.dispatch",n,"success",`下发 ${a.targets.length} 台设备`),o.receipts.forEach((l,d)=>{const b=this.devices.find(v=>v.id===l.deviceId);setTimeout(()=>{l.status="dispatched",l.dispatchedAt=new Date().toISOString(),this.emit({type:"control.receipt.updated",batchId:n,deviceId:l.deviceId,status:"dispatched",at:l.dispatchedAt})},280+d*120),setTimeout(()=>{const v=new Date().toISOString();!b||b.connectivity==="offline"?(l.status="timeout",l.errorCode="GATEWAY_READBACK_TIMEOUT",l.errorMessage="设备离线，网关未收到回读确认",l.verifiedAt=v):(l.status="verified_success",l.observedValue=l.targetValue,l.verifiedAt=v,this.applyObservedTelemetry(b,l.command,l.targetValue,v)),this.emit({type:"control.receipt.updated",batchId:n,deviceId:l.deviceId,status:l.status,observedValue:l.observedValue,at:v})},900+d*220)}),structuredClone(o)}applyObservedTelemetry(a,t,n,o){t==="lighting.dimming"&&a.telemetry.dimming?(a.telemetry.dimming={...a.telemetry.dimming,value:n,collectedAt:o,stale:!1},a.telemetry.power&&(a.telemetry.power={...a.telemetry.power,value:Number(n)>0,collectedAt:o,stale:!1})):(t==="lighting.power"||t==="hvac.power")&&a.telemetry.power?a.telemetry.power={...a.telemetry.power,value:n,collectedAt:o,stale:!1}:t==="hvac.setpoint"&&a.telemetry.setpoint&&(a.telemetry.setpoint={...a.telemetry.setpoint,value:n,collectedAt:o,stale:!1}),this.emit({type:"telemetry.updated",floorId:a.floorId,deviceId:a.id,collectedAt:o,values:{[t]:n}})}async getControlBatch(a){this.requireSession();const t=this.batches.get(a);if(!t)throw new Error(`404 NOT_FOUND: 批次 ${a} 不存在`);return structuredClone(t)}async listAlarms(a){const t=this.requireSession();return this.activeOrgId!==Ze?[]:!t.scope.allowedFloorIds.includes(a)||a!==D.floorId?[]:structuredClone(this.alarms)}async acknowledgeAlarm(a,t){const n=this.requireSession();if(!n.scope.canManageAlarms){const l=`角色「${n.roleLabel}」仅可查看告警，无权确认`;throw this.pushAudit("alarm.acknowledge",a,"denied",l),new Error(`403 FORBIDDEN: ${l}`)}const o=this.alarms.find(l=>l.id===a);if(!o)throw new Error(`404 NOT_FOUND: 告警 ${a} 不存在`);return o.status="acknowledged",o.acknowledgedAt=new Date().toISOString(),o.acknowledgedBy=n.displayName,this.record("REST","acknowledgeAlarm",`POST /api/v1/alarms/${a}/acknowledge`,o,{note:t}),this.pushAudit("alarm.acknowledge",a,"success",t),this.emit({type:"alarm.changed",floorId:o.floorId,alarmId:a,status:"acknowledged",at:o.acknowledgedAt}),structuredClone(o)}async listWorkOrders(a){const t=this.requireSession();return this.activeOrgId!==Ze?[]:!t.scope.allowedFloorIds.includes(a)||a!==D.floorId?[]:structuredClone(this.workOrders)}async createWorkOrder(a){const t=this.requireSession();if(!t.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权创建工单`);const n=new Date().toISOString(),o={id:`wo-e7f-${Date.now().toString(36)}`,projectId:D.projectId,buildingId:D.buildingId,floorId:a.floorId,deviceId:a.deviceId??null,alarmId:a.alarmId??null,title:a.title,description:a.description,status:"open",assigneeId:null,createdAt:n,updatedAt:n};if(this.workOrders.unshift(o),a.alarmId){const l=this.alarms.find(d=>d.id===a.alarmId);l&&(l.workOrderId=o.id)}return this.record("REST","createWorkOrder","POST /api/v1/work-orders",o,a),this.pushAudit("work_order.create",o.id,"success",o.title),structuredClone(o)}async updateWorkOrderStatus(a,t){const n=this.requireSession();if(!n.scope.canManageAlarms)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权流转工单`);const o=this.workOrders.find(l=>l.id===a);if(!o)throw new Error(`404 NOT_FOUND: 工单 ${a} 不存在`);return o.status=t,o.updatedAt=new Date().toISOString(),this.record("REST","updateWorkOrderStatus",`PATCH /api/v1/work-orders/${a}`,o,{status:t}),this.pushAudit("work_order.update",a,"success",`状态更新为 ${t}`),structuredClone(o)}async updateDevicePlanPoint(a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw this.pushAudit("device.plan_point",a.deviceId,"denied","无系统部署编辑权限"),new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权编辑图纸标记`);const n=this.activeOrgId===Ze?this.devices.find(d=>d.id===a.deviceId):void 0,o=n?void 0:this.deployExt.extraDevices.find(d=>d.id===a.deviceId),l=n??o;if(!l)throw new Error(`404 NOT_FOUND: 设备 ${a.deviceId} 不存在`);if(l.version!==a.expectedVersion)throw new Error(`409 CONFLICT: 设备版本已变更为 v${l.version}，请刷新后重试`);return l.planPoint={floorId:a.floorId,planVersion:a.planVersion,x:Number(a.x.toFixed(4)),y:Number(a.y.toFixed(4))},l.version+=1,o&&this.persistDeployExtensions(),this.record("REST","updateDevicePlanPoint",`PATCH /api/v1/devices/${a.deviceId}/plan-point`,l,a),this.pushAudit("device.plan_point",a.deviceId,"success",`坐标更新 (${l.planPoint.x}, ${l.planPoint.y})`),structuredClone(l)}async updateDeviceHardwareBinding(a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权修改硬件绑定`);const n=this.activeOrgId===Ze?this.devices.find(b=>b.id===a.deviceId):void 0,o=n?void 0:this.deployExt.extraDevices.find(b=>b.id===a.deviceId),l=n??o;if(!l)throw new Error(`404 NOT_FOUND: 设备 ${a.deviceId} 不存在`);if(l.version!==a.expectedVersion)throw new Error(`409 CONFLICT: 设备版本冲突（当前 v${l.version}）`);const d=new Date().toISOString();return l.physicalInstalled=a.physicalInstalled,l.physicalVerifiedAt=a.physicalInstalled?d:null,l.hardwareBinding={gatewayId:a.gatewayId,protocol:a.protocol,networkAddress:a.networkAddress,portOrChannel:a.portOrChannel,boundAt:d,boundBy:t.displayName},l.version+=1,this.markEdgeSyncDirty(l.floorId),this.persistDeployExtensions(),this.record("REST","updateDeviceHardwareBinding",`PUT /api/v1/devices/${a.deviceId}/hardware-binding`,l,a),this.pushAudit("device.hardware_binding",a.deviceId,"success",`${a.protocol} ${a.networkAddress}`),structuredClone(l)}async listConnections(a){this.requireSession();const t=this.deployExt.connectionsOverride??(this.activeOrgId===Ze?this.connections:[]);return structuredClone(a?t.filter(n=>n.projectId===a):t)}async listDeliveryBatches(a){return this.requireSession(),this.activeOrgId!==Ze?structuredClone(this.deliveryBatches.filter(t=>t.floorId===a)):structuredClone(a?this.deliveryBatches.filter(t=>t.floorId===a):this.deliveryBatches)}async freezeDeliveryBatch(a,t){const n=this.requireSession();if(!n.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${n.roleLabel}」无权冻结交付批次`);const o=this.spatial.floors.find(w=>w.id===a),l=o?this.spatial.buildings.find(w=>w.id===o.buildingId):void 0,d=this.findAllDevices().filter(w=>w.floorId===a),b=d.filter(w=>w.physicalInstalled&&w.hardwareBinding).length,v=`${l?.name??"FL"}-${o?.name??a.slice(-4)}`.replace(/\s+/g,""),$=this.deliveryBatches.filter(w=>w.floorId===a).length,S={id:`dlv-${Date.now().toString(36)}`,projectId:l?.projectId??this.spatial.projects[0]?.id??D.projectId,floorId:a,versionTag:`${v}-v1.${$}`,deviceCount:d.length,verifiedCount:b,status:"frozen",frozenAt:new Date().toISOString(),frozenBy:n.displayName,note:t||"例行交付基线冻结"};return this.deliveryBatches.unshift(S),this.record("REST","freezeDeliveryBatch",`POST /api/v1/floors/${a}/deliveries/freeze`,S,{note:t}),this.pushAudit("delivery.freeze",S.id,"success",`${b}/${d.length} 已现场核验`),structuredClone(S)}async createDeploymentDevice(a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权新增设备`);const n=`dev-custom-${Date.now().toString(36)}`,o={id:n,name:a.name.trim(),category:a.category,projectId:a.projectId,buildingId:a.buildingId,floorId:a.floorId,logicalZoneId:a.logicalZoneId,planPoint:{floorId:a.floorId,planVersion:1,x:.5,y:.5},physicalInstalled:!1,physicalVerifiedAt:null,hardwareBinding:null,connectivity:"online",version:1,telemetry:{}};return this.deployExt.extraDevices.push(o),a.category!=="hvac"&&a.category!=="meter"&&(this.deployExt.meshRoles[n]={proxy:!!a.defaultProxy,relay:!!a.defaultRelay,meshUuid:`mesh-${a.floorId.slice(-4)}`}),a.category==="lighting"&&this.deployExt.lightMarkers.push({id:`lm-${Date.now().toString(36)}`,deviceId:n,floorId:a.floorId,channel:"回路 1",label:`${o.name.slice(0,6)}主灯`,x:.52,y:.45}),this.markEdgeSyncDirty(a.floorId),this.persistDeployExtensions(),this.pushAudit("device.create",n,"success",o.name),structuredClone(o)}async listLightMarkers(a){return this.requireSession(),structuredClone(this.deployExt.lightMarkers.filter(t=>t.floorId===a))}async addLightMarker(a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权编辑回路灯点`);const n={...a,id:`lm-${Date.now().toString(36)}`};return this.deployExt.lightMarkers.push(n),this.persistDeployExtensions(),structuredClone(n)}async deleteLightMarker(a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权删除回路灯点`);this.deployExt.lightMarkers=this.deployExt.lightMarkers.filter(n=>n.id!==a),this.persistDeployExtensions()}async listMeshRoles(a){this.requireSession();const t=new Set(this.findAllDevices().filter(o=>o.floorId===a).map(o=>o.id)),n={};for(const[o,l]of Object.entries(this.deployExt.meshRoles))t.has(o)&&(n[o]={...l});return n}async updateMeshRole(a,t,n){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权修改蓝牙 Mesh 节点角色`);const d={...this.deployExt.meshRoles[a]??{proxy:!1,relay:!1,meshUuid:`mesh-${t.slice(-4)}`},...n};return this.deployExt.meshRoles[a]=d,this.markEdgeSyncDirty(t),this.persistDeployExtensions(),{...d}}async getEdgeSyncState(a){return this.requireSession(),{...this.deployExt.edgeSyncByFloor[a]??{version:1,dirty:!1,lastSyncedAt:null}}}async syncEdgeGateway(a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权执行边缘同步`);const o={version:(this.deployExt.edgeSyncByFloor[a]??{version:1}).version+1,dirty:!1,lastSyncedAt:new Date().toISOString()};return this.deployExt.edgeSyncByFloor[a]=o,this.persistDeployExtensions(),this.pushAudit("edge.sync",a,"success",`边缘基线同步至 v${o.version}`),{...o}}async getDeviceParams(a){return this.requireSession(),{...this.deployExt.deviceParams[a]??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450}}}async saveDeviceParams(a,t,n){const o=this.requireSession();if(!o.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权下发设备参数`);return this.deployExt.deviceParams[a]={...n},this.markEdgeSyncDirty(t),this.persistDeployExtensions(),{...n}}async listDeviceGroups(a){return this.requireSession(),structuredClone(this.deployExt.groups.filter(t=>t.floorId===a))}async upsertDeviceGroup(a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权维护设备分组`);const n=a.id?this.deployExt.groups.find(l=>l.id===a.id):void 0;let o;return n?(n.name=a.name.trim()||n.name,n.track=a.track,n.groupType=a.groupType,n.includesAdapter=a.includesAdapter,n.deviceIds=[...a.deviceIds],o=n):(o={...a,id:`grp-${Date.now().toString(36)}`,name:a.name.trim(),deviceIds:[...a.deviceIds]},this.deployExt.groups.unshift(o)),o.track==="mesh_auto"&&this.markEdgeSyncDirty(o.floorId),this.persistDeployExtensions(),this.pushAudit("device_group.upsert",o.id,"success",o.name),structuredClone(o)}async deleteDeviceGroup(a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权删除设备分组`);const n=this.deployExt.groups.find(o=>o.id===a);this.deployExt.groups=this.deployExt.groups.filter(o=>o.id!==a),n?.track==="mesh_auto"&&this.markEdgeSyncDirty(n.floorId),this.persistDeployExtensions(),this.pushAudit("device_group.delete",a,"success")}async listFloorDocs(a){return this.requireSession(),structuredClone(this.deployExt.docs.filter(t=>t.floorId===a))}async attachFloorDoc(a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权关联工程资料`);const n={...a,id:`doc-${Date.now().toString(36)}`};return this.deployExt.docs.unshift(n),this.persistDeployExtensions(),structuredClone(n)}async deleteFloorDoc(a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权删除工程资料`);this.deployExt.docs=this.deployExt.docs.filter(n=>n.id!==a),this.persistDeployExtensions()}async upsertConnection(a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权维护系统接入通道`);const n=this.deployExt.connectionsOverride?[...this.deployExt.connectionsOverride]:this.activeOrgId===Ze?structuredClone(this.connections):[],o=a.endpoint.trim(),l=n.find(v=>v.endpoint===o&&v.id!==a.id&&v.projectId===a.projectId);if(l)throw new Error(`端口冲突警告：局域网端点「${o}」已被通道「${l.name}」占用，请更换端口后重试。`);let d;const b=a.id?n.find(v=>v.id===a.id):void 0;return b?(b.name=a.name.trim()||b.name,b.protocol=a.protocol,b.endpoint=o,b.buildingId=a.buildingId,b.floorId=a.floorId??b.floorId,b.lastHeartbeatAt=new Date().toISOString(),d=b):(d={id:`conn-${Date.now().toString(36)}`,projectId:a.projectId,buildingId:a.buildingId,floorId:a.floorId??"",name:a.name.trim(),protocol:a.protocol,endpoint:o,status:"connected",collectedPoints:16,calculatedPoints:4,lastHeartbeatAt:new Date().toISOString()},n.unshift(d)),this.deployExt.connectionsOverride=n,this.connections=structuredClone(n),this.persistDeployExtensions(),this.pushAudit("connection.upsert",d.id,"success",`${d.name} (${d.endpoint})`),structuredClone(d)}async deleteConnection(a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权删除系统接入通道`);const o=(this.deployExt.connectionsOverride?[...this.deployExt.connectionsOverride]:this.activeOrgId===Ze?structuredClone(this.connections):[]).filter(l=>l.id!==a);this.deployExt.connectionsOverride=o,this.connections=structuredClone(o),this.persistDeployExtensions(),this.pushAudit("connection.delete",a,"success")}async restartEdgeService(a){const t=this.requireSession();if(!t.scope.canEditDeployment)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权重启边缘服务`);this.pushAudit("edge.restart",a,"success","已下发重启边缘服务指令")}async getAnalysisReport(a,t,n){this.requireSession();const o=t==="today"?1:t==="7d"?7:30,d={energy:{unit:"kWh",kpis:[{key:"total",label:"累计用电量",value:String(Math.round(318*o)),unit:"kWh",delta:"-6.4%",trend:"down"},{key:"hvac",label:"暖通占比",value:"54.2",unit:"%",delta:"-2.1%",trend:"down"},{key:"lighting",label:"照明占比",value:"28.6",unit:"%",delta:"-4.8%",trend:"down"},{key:"eui",label:"单位面积能耗",value:(.23*o).toFixed(2),unit:"kWh/m²",delta:"优于基准",trend:"flat"}],base:[28,34,48,52,49,44,38,25]},environment:{unit:"ppm",kpis:[{key:"temp",label:"平均室内温度",value:"23.3",unit:"°C",delta:"达标 98%",trend:"flat"},{key:"hum",label:"平均相对湿度",value:"52.0",unit:"%RH",delta:"舒适区间",trend:"flat"},{key:"co2",label:"峰值 CO₂",value:"640",unit:"ppm",delta:"< 800 ppm",trend:"up"},{key:"pm25",label:"室内 PM2.5",value:"14",unit:"μg/m³",delta:"优",trend:"down"}],base:[420,480,560,640,610,590,520,450]},occupancy:{unit:"%",kpis:[{key:"peak",label:"峰值工位占用率",value:"76",unit:"%",delta:"+4.2%",trend:"up"},{key:"avg",label:"工作日均值",value:"58",unit:"%",delta:"+1.5%",trend:"up"},{key:"meeting",label:"702 会议室利用率",value:"64",unit:"%",delta:"4 场/日",trend:"flat"},{key:"idle",label:"空置能耗浪费",value:"3.1",unit:"%",delta:"-1.8%",trend:"down"}],base:[12,45,72,76,68,74,52,18]},health:{unit:"%",kpis:[{key:"online",label:"设备在线率",value:"83.3",unit:"%",delta:"5 / 6 在线",trend:"down"},{key:"ack",label:"指令回读成功率",value:"96.2",unit:"%",delta:"排除离线 100%",trend:"flat"},{key:"mttr",label:"平均修复时长",value:"28",unit:"min",delta:"-12%",trend:"down"},{key:"alarms",label:"活跃告警数",value:String(this.alarms.filter($=>$.status==="active").length),unit:"条",delta:"1 重要",trend:"up"}],base:[100,100,100,83,83,83,83,83]},carbon:{unit:"kgCO₂",kpis:[{key:"total",label:"累计碳排放",value:(167.6*o).toFixed(1),unit:"kgCO₂",delta:"-6.4%",trend:"down"},{key:"factor",label:"电网排放因子",value:"0.5271",unit:"kg/kWh",delta:"南方电网",trend:"flat"},{key:"saved",label:"策略减排估算",value:(19.4*o).toFixed(1),unit:"kgCO₂",delta:"照明+暖通",trend:"up"},{key:"intensity",label:"碳排强度",value:(.12*o).toFixed(2),unit:"kg/m²",delta:"达标",trend:"down"}],base:[15,18,25,27,26,23,20,13]}}[a],b=t==="today"?["08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]:["D1","D2","D3","D4","D5","D6","D7","D8"],v={category:a,range:t,scopeId:n,scopeLabel:"广实2号园 / E栋 / 7F",updatedAt:new Date().toISOString(),kpis:d.kpis,unit:d.unit,series:d.base.map(($,S)=>({label:b[S],value:Math.round($*(a==="energy"||a==="carbon"?o/2+.5:1)),baseline:Math.round($*1.08)})),zoneBreakdown:[{zoneId:"zone-e7f-lab-east",zoneName:"7F 东侧实验区",value:d.base[3],unit:d.unit,status:"normal"},{zoneId:"zone-e7f-office-west",zoneName:"7F 西侧办公区",value:d.base[4],unit:d.unit,status:a==="health"?"warning":"normal"},{zoneId:"zone-e7f-meeting-702",zoneName:"702 会议室",value:d.base[1],unit:d.unit,status:"normal"}]};return this.record("REST","getAnalysisReport",`GET /api/v1/analytics/${a}?range=${t}&scopeId=${n}`,{kpis:v.kpis.length}),v}async listScenes(a){return this.requireSession(),this.activeOrgId!==Ze?[]:structuredClone(this.scenes)}async createScene(a){const t=this.requireSession();if(!t.scope.canEditScenes)throw new Error(`403 FORBIDDEN: 角色「${t.roleLabel}」无权创建场景`);const n={id:`scn-e7f-${Date.now().toString(36)}`,projectId:a.projectId,floorId:a.floorId,name:a.name,description:a.description,enabled:!0,scheduleSummary:"手动触发",actions:a.actions,lastExecutedAt:null};return this.scenes.unshift(n),this.record("REST","createScene","POST /api/v1/scenes",n,a),this.pushAudit("scene.create",n.id,"success",n.name),structuredClone(n)}async executeScene(a){const t=this.scenes.find(o=>o.id===a);if(!t)throw new Error(`404 NOT_FOUND: 场景 ${a} 不存在`);const n=await this.dispatchControlBatch({floorId:t.floorId,idempotencyKey:`scene-${a}-${Date.now()}`,targets:t.actions,reason:`触发场景：${t.name}`});return t.lastExecutedAt=new Date().toISOString(),t.lastBatchId=n.batchId,n}async getRuntimeSettings(a){return this.requireSession(),structuredClone({projectId:D.projectId,calendar:this.calendar,rules:this.rules})}async previewCalendarImpact(a,t,n){this.requireSession();const o=n>=this.calendar.nightGuardStart?`下班时间 ${n} 与夜间巡检起点 ${this.calendar.nightGuardStart} 存在交叠冲突`:void 0,l=[{ruleId:"rule-lt-01",ruleName:"工作日照明定时开启",category:"lighting",beforeWindow:`${this.calendar.workdayStart} - ${this.calendar.workdayEnd}`,afterWindow:`${t} - ${n}`},{ruleId:"rule-hvac-01",ruleName:"实验区暖通预冷与下班关闭",category:"hvac",beforeWindow:`${this.calendar.workdayStart} (-30m) ~ ${this.calendar.workdayEnd} (+30m)`,afterWindow:`${t} (-30m) ~ ${n} (+30m)`,conflictWarning:o},{ruleId:"scn-e7f-night",ruleName:"夜间节能巡检窗口",category:"night_guard",beforeWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,afterWindow:`${this.calendar.nightGuardStart} - ${this.calendar.nightGuardEnd}`,conflictWarning:o}];return this.record("REST","previewCalendarImpact","POST /api/v1/settings/calendar/impact-preview",l,{workdayStart:t,workdayEnd:n}),l}async saveWorkCalendar(a,t,n,o){const l=this.requireSession();if(!l.scope.canEditSettings)throw this.pushAudit("settings.calendar",D.projectId,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${l.roleLabel}」无权修改应用设置`);if(this.calendar.version!==o)throw new Error(`409 CONFLICT: 运行日历已被更新至 v${this.calendar.version}`);if(t>=n)throw new Error("400 BAD_REQUEST: 上班时间必须早于下班时间");return this.calendar={...this.calendar,workdayStart:t,workdayEnd:n,version:this.calendar.version+1,updatedAt:new Date().toISOString()},this.record("REST","saveWorkCalendar","PUT /api/v1/settings/calendar",this.calendar,{workdayStart:t,workdayEnd:n,expectedVersion:o}),this.pushAudit("settings.calendar",D.projectId,"success",`${t}-${n}`),structuredClone(this.calendar)}async toggleRuntimeRule(a,t,n){const o=this.requireSession();if(!o.scope.canEditSettings)throw this.pushAudit("settings.rule_toggle",a,"denied","无应用设置修改权限"),new Error(`403 FORBIDDEN: 角色「${o.roleLabel}」无权启停应用设置规则`);const l=this.rules.find(d=>d.id===a);if(!l)throw new Error(`404 NOT_FOUND: 规则 ${a} 不存在`);if(l.version!==n)throw new Error(`409 CONFLICT: 规则版本冲突（当前 v${l.version}）`);return l.enabled=t,l.version+=1,l.lastAppliedAt=new Date().toISOString(),this.record("REST","toggleRuntimeRule",`PATCH /api/v1/settings/rules/${a}`,l,{enabled:t,expectedVersion:n}),this.pushAudit("settings.rule_toggle",a,"success",t?"启用":"停用"),structuredClone(l)}async listOrgMembers(){return this.requireSession(),structuredClone(this.members)}async inviteOrgMember(a,t){if(!this.requireSession().scope.canManageMembers)throw this.pushAudit("org.invite",a,"denied","仅管理员可邀请成员"),new Error("403 FORBIDDEN: 仅管理员可邀请成员");const o=ea[t],l={userId:`inv-${Date.now().toString(36)}`,displayName:a.split("@")[0]||a,email:a,role:t,roleLabel:o.roleLabel,scopeSummary:"广实2号园 / E栋 7F（待激活）",status:"invited",lastActiveAt:null};return this.members.unshift(l),this.record("REST","inviteOrgMember","POST /api/v1/org/invites",l,{email:a,role:t}),this.pushAudit("org.invite",a,"success",o.roleLabel),structuredClone(l)}async listAuditLogs(){if(!this.requireSession().scope.canViewAuditLogs)throw this.pushAudit("audit.read","org.audit_logs","denied","仅授权管理员可只读查阅审计日志"),new Error("403 FORBIDDEN: 仅授权管理员可查阅审计日志");return structuredClone(this.auditLogs)}async listOverrides(){const a=this.requireSession();return this.reconcileOverrides(),a.scope.canGrantOverride?structuredClone(this.overrides):structuredClone(this.overrides.filter(t=>t.targetUserId===a.userId))}async grantOverride(a){const t=this.requireSession();if(!t.scope.canGrantOverride)throw this.pushAudit("override.grant",a.targetUserId,"denied","仅机构/项目管理员可审批临时提权"),new Error("403 FORBIDDEN: 仅管理员可授予限时提权");const n=a.reason.trim();if(!n)throw new Error("400 BAD_REQUEST: 必须填写提权事由");if(![2,8,24].includes(a.durationHours))throw new Error("400 BAD_REQUEST: 提权有效期必须为 2h / 8h / 24h");const o=this.members.find(b=>b.userId===a.targetUserId);if(!o)throw new Error(`404 NOT_FOUND: 目标成员 ${a.targetUserId} 不存在`);if(o.role!=="operator")throw new Error("400 BAD_REQUEST: 仅支持为运营人员授予临时提权");const l=Date.now(),d={id:`ovr-${l.toString(36)}`,targetUserId:o.userId,targetUserName:o.displayName,module:a.module,durationHours:a.durationHours,grantedAt:new Date(l).toISOString(),expiresAt:new Date(l+a.durationHours*36e5).toISOString(),approvedBy:t.displayName,reason:n,status:"active",revokedAt:null,revokedBy:null};return this.overrides.unshift(d),this.applyOverridesToSession(),this.record("REST","grantOverride","POST /api/v1/org/overrides",d,a),this.pushAudit("override.grant",`${o.displayName} ｜ ${a.module==="deployment"?"系统部署":"应用设置"}`,"success",`${a.durationHours}h ｜ ${n}`),structuredClone(d)}async revokeOverride(a){const t=this.requireSession();if(!t.scope.canGrantOverride)throw this.pushAudit("override.revoke",a,"denied","仅管理员可收回临时提权"),new Error("403 FORBIDDEN: 仅管理员可收回限时提权");const n=this.overrides.find(o=>o.id===a);if(!n)throw new Error(`404 NOT_FOUND: 提权记录 ${a} 不存在`);return n.status="revoked",n.revokedAt=new Date().toISOString(),n.revokedBy=t.displayName,this.applyOverridesToSession(),this.record("REST","revokeOverride",`POST /api/v1/org/overrides/${a}/revoke`,n),this.pushAudit("override.revoke",`${n.targetUserName} ｜ ${n.module==="deployment"?"系统部署":"应用设置"}`,"success","管理员提前收回"),structuredClone(n)}subscribeFloorEvents(a,t){return a!==D.floorId?()=>{}:(this.listeners.add(t),()=>{this.listeners.delete(t)})}emit(a){this.record("WS",a.type,`WS /ws/v1/stream?floorId=${D.floorId}`,a),this.listeners.forEach(t=>t(a))}}const mt=["org_admin","project_admin","operator","space_user"],ps=[{module:"空间总览与设备控制",org_admin:{text:"机构全范围读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"授权范围读写",tone:"online"},space_user:{text:"授权空间可控",tone:"online"}},{module:"数据分析与报表导出",org_admin:{text:"查看与导出",tone:"online"},project_admin:{text:"查看与导出",tone:"online"},operator:{text:"查看与导出",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"告警中心与运维工单",org_admin:{text:"处置与派单",tone:"online"},project_admin:{text:"处置与派单",tone:"online"},operator:{text:"处置与派单",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"智能策略与快捷场景",org_admin:{text:"编排与执行",tone:"online"},project_admin:{text:"编排与执行",tone:"online"},operator:{text:"执行与编排",tone:"online"},space_user:{text:"不可见",tone:"neutral"}},{module:"应用设置（日历/能耗/保护）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 ｜ 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"系统部署（项目/设备/拓扑）",org_admin:{text:"完全读写",tone:"online"},project_admin:{text:"授权项目读写",tone:"online"},operator:{text:"默认只读 ｜ 提权可改",tone:"warning"},space_user:{text:"不可见",tone:"neutral"}},{module:"成员管理与限时提权审批",org_admin:{text:"机构级管理与审批",tone:"accent"},project_admin:{text:"项目内管理与审批",tone:"accent"},operator:{text:"仅查看本人提权",tone:"neutral"},space_user:{text:"不可见",tone:"neutral"}},{module:"安全与操作审计日志（SR 6.1）",org_admin:{text:"只读查阅（防篡改）",tone:"accent"},project_admin:{text:"只读查阅（防篡改）",tone:"accent"},operator:{text:"无权访问",tone:"neutral"},space_user:{text:"无权访问",tone:"neutral"}}];function $e(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function vt(e){return e?e.slice(0,16).replace("T"," "):"—"}function Ga(e){return e==="deployment"?"系统部署":"应用设置"}async function us(e,a,t,n,o){const l=t.scope.canManageMembers,d=t.scope.canGrantOverride,b=t.scope.canViewAuditLogs,v=d||t.role==="operator",$=t.role!=="space_user";let S="profile",w=$?await a.listOrgMembers().catch(()=>[]):[],h=v?await a.listOverrides().catch(()=>[]):[],m=b?await a.listAuditLogs().catch(()=>[]):[],k="",A="all",H="all",x="all",W=!1,P=!1,me=t.displayName,ue=t.role==="org_admin"?"机构负责人":t.role==="project_admin"?"项目负责人":t.role==="operator"?"运行值守工程师":"园区空间用户",ve="138-0013-8072",pe="",ie="";const de={profile:{label:"个人资料",icon:"user",subtitle:"管理个人联系信息、查看当前角色与空间授权范围，以及本人正在生效的临时提权。"},members:{label:"成员管理",icon:"users",subtitle:"严格落实唯一账号与独立认证（SR 1.1），按 4 级角色与空间范围维护机构成员。"},roles:{label:"角色权限",icon:"shield-check",subtitle:"遵循 IEC 62443-3-3 与等保 2.0 最小权限原则，写权限与读权限严格隔离。"},overrides:{label:"限时提权",icon:"key-round",subtitle:"按 IEC 62443-3-3 SR 2.1 RE 3 为运营人员授予限时修改权，必须记录审批人与事由，到期自动收回。"},audit:{label:"审计日志",icon:"file-text",subtitle:"按 SR 6.1 仅授权管理员只读访问，防篡改记录所有登录、控制、配置变更与越权拦截事件。"}};async function se(){const[N,g,I,R]=await Promise.all([a.getSession(),$?a.listOrgMembers().catch(()=>[]):Promise.resolve([]),v?a.listOverrides().catch(()=>[]):Promise.resolve([]),b?a.listAuditLogs().catch(()=>[]):Promise.resolve([])]);w=g,h=I,m=R,N&&(t=N,n(N)),Q()}function q(){const N=["profile"];return $&&N.push("members","roles"),v&&N.push("overrides"),b&&N.push("audit"),`
      <aside class="pacom-unified-rail" aria-label="机构与账户菜单">
        <div class="pacom-unified-group">
          ${N.map(g=>{const I=de[g],R=g==="overrides"?h.filter(u=>u.status==="active").length:0;return`
                <button type="button" class="pacom-unified-item" aria-current="${S===g}" data-anav="${g}">
                  ${re(I.icon,16)}
                  <span>${I.label}</span>
                  ${R>0?`<span class="pacom-badge pacom-badge--accent" style="margin-left:auto;">${R}</span>`:""}
                </button>`}).join("")}
        </div>
      </aside>
    `}function G(){return S==="members"&&l?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-invite="1">+ 邀请成员</button>':S==="overrides"&&d?'<button type="button" class="pacom-btn pacom-btn--primary" data-open-grant="1">+ 授予限时提权</button>':S==="audit"?'<span class="pacom-badge pacom-badge--neutral">只读防篡改 ｜ SR 6.1</span>':""}function K(){const N=t.scope.activeOverrides.filter(I=>I.status==="active"),g=t.scope.allowedZoneIds?.length?`授权 ${t.scope.allowedFloorIds.length} 个楼层 ｜ ${t.scope.allowedZoneIds.length} 个指定功能区`:`授权 ${t.scope.allowedProjectIds.length} 个项目 ｜ ${t.scope.allowedBuildingIds.length} 栋楼宇 ｜ ${t.scope.allowedFloorIds.length} 个楼层`;return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">个人资料与联系方式</h2>
          <span class="pacom-badge pacom-badge--accent">${$e(t.roleLabel)}</span>
        </div>
        <form class="pacom-settings-card" data-role="profile-form">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">唯一身份与职务</span>
              <span class="pacom-setting-desc">账号编号：${$e(t.userId)}（独立实名账号，禁止共用）</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <input class="pacom-input" style="width:140px;" name="displayName" value="${$e(me)}" aria-label="显示姓名" required />
              <input class="pacom-input" style="width:170px;" name="jobTitle" value="${$e(ue)}" aria-label="岗位职务" />
            </div>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">告警接收手机号</span>
              <span class="pacom-setting-desc">用于接收重要告警短信与审批通知</span>
            </div>
            <div class="pacom-setting-control">
              <input class="pacom-input" style="width:170px;" name="phone" value="${$e(ve)}" placeholder="138-xxxx-xxxx" aria-label="手机号" />
              <button type="submit" class="pacom-btn pacom-btn--primary">保存资料</button>
            </div>
          </div>
        </form>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">当前权限与空间范围</h2>
          <span class="pacom-row-sub">${$e(g)}</span>
        </div>
        <div class="pacom-settings-card">
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">角色职责</span>
              <span class="pacom-setting-desc">${$e(At[t.role])}</span>
            </div>
            <span class="pacom-badge pacom-badge--online">${$e(t.roleLabel)}</span>
          </div>
          <div class="pacom-setting-row">
            <div class="pacom-setting-meta">
              <span class="pacom-setting-title">当前写权限状态</span>
              <span class="pacom-setting-desc">写权限独立授予，绝不隐含在只读访问中</span>
            </div>
            <div class="pacom-setting-control" style="flex-wrap:wrap;">
              <span class="pacom-badge ${t.scope.canControlDevices?"pacom-badge--online":"pacom-badge--neutral"}">设备控制：${t.scope.canControlDevices?"允许":"无"}</span>
              ${t.role==="space_user"?'<span class="pacom-badge pacom-badge--neutral">配置与管理模块：不可见</span>':`<span class="pacom-badge ${t.scope.canEditSettings?"pacom-badge--online":"pacom-badge--warning"}">应用设置：${t.scope.canEditSettings?"可改":"只读"}</span>
                     <span class="pacom-badge ${t.scope.canEditDeployment?"pacom-badge--online":"pacom-badge--warning"}">系统部署：${t.scope.canEditDeployment?"可改":"只读"}</span>`}
            </div>
          </div>
          ${N.length>0?N.map(I=>`
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">生效中的限时提权：${$e(Ga(I.module))}（${I.durationHours}h）</span>
                        <span class="pacom-setting-desc">审批人：${$e(I.approvedBy)} ｜ 到期时间：${$e(vt(I.expiresAt))} ｜ 事由：${$e(I.reason)}</span>
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
    `}function qe(){const N=k.trim().toLowerCase(),g=w.filter(I=>A!=="all"&&I.role!==A?!1:N?`${I.displayName} ${I.email} ${I.roleLabel} ${I.scopeSummary}`.toLowerCase().includes(N):!0);return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <input class="pacom-input" name="memberSearch" style="width:240px;" data-member-search placeholder="搜索成员姓名或授权范围…" value="${$e(k)}" aria-label="搜索机构成员" />
          <select class="pacom-select" name="memberRoleFilter" data-role-filter aria-label="按角色筛选">
            <option value="all" ${A==="all"?"selected":""}>全部角色（${w.length}）</option>
            ${mt.map(I=>`<option value="${I}" ${A===I?"selected":""}>${$e(Ke[I])}</option>`).join("")}
          </select>
        </div>
        <span class="pacom-row-sub">显示 ${g.length} / ${w.length} 人</span>
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
              ${g.length===0?'<tr><td colspan="4"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配成员</strong><span>可调整搜索关键词或角色筛选。</span></div></td></tr>':g.map(I=>`
                        <tr>
                          <td>
                            <div style="display:flex; align-items:center; gap:10px;">
                              <span class="pacom-pop-avatar">${$e(I.displayName.slice(0,1))}</span>
                              <div>
                                <div style="font-weight:450;">${$e(I.displayName)}</div>
                                ${l?`<div class="pacom-row-sub">${$e(I.email)}</div>`:""}
                              </div>
                            </div>
                          </td>
                          <td><span class="pacom-badge ${I.role==="org_admin"||I.role==="project_admin"?"pacom-badge--accent":"pacom-badge--neutral"}">${$e(I.roleLabel)}</span></td>
                          <td><span class="pacom-row-sub">${$e(I.scopeSummary)}</span></td>
                          <td>
                            <span class="pacom-badge ${I.status==="active"?"pacom-badge--online":"pacom-badge--neutral"}">
                              ${I.status==="active"?"正常":I.status==="invited"?"邀请中":"已停用"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function be(){return`
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">四级标准角色说明</h2>
          <span class="pacom-row-sub">IEC 62443-3-3 SR 2.1 RE 2 ｜ 最小权限与职责分离</span>
        </div>
        <div class="pacom-settings-card">
          ${mt.map(N=>{const g=w.filter(I=>I.role===N).length;return`
              <div class="pacom-setting-row">
                <div class="pacom-setting-meta">
                  <span class="pacom-setting-title">${$e(Ke[N])}</span>
                  <span class="pacom-setting-desc">${$e(At[N])}</span>
                </div>
                <span class="pacom-badge pacom-badge--neutral">${g} 人</span>
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
                ${ps.map(N=>`
                  <tr>
                    <td><strong style="font-weight:450;">${$e(N.module)}</strong></td>
                    <td><span class="pacom-badge pacom-badge--${N.org_admin.tone}">${$e(N.org_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${N.project_admin.tone}">${$e(N.project_admin.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${N.operator.tone}">${$e(N.operator.text)}</span></td>
                    <td><span class="pacom-badge pacom-badge--${N.space_user.tone}">${$e(N.space_user.text)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function Ie(){return`
      <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="限时提权统计">
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">当前生效提权</span>
          <div class="pacom-kpi-value">${h.filter(g=>g.status==="active").length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">到期自动收回，无需人工盯守</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">可选有效期窗口</span>
          <div class="pacom-kpi-value">2 / 8 / 24<span class="pacom-kpi-unit">小时</span></div>
          <span class="pacom-kpi-delta">严格遵循 IEC 62443-3-3 SR 2.1 RE 3</span>
        </div>
        <div class="pacom-kpi-cell">
          <span class="pacom-kpi-label">累计审批记录</span>
          <div class="pacom-kpi-value">${h.length}<span class="pacom-kpi-unit">条</span></div>
          <span class="pacom-kpi-delta">每条审批与收回同步写入审计日志</span>
        </div>
      </div>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title">限时提权审批记录</h2>
          <span class="pacom-row-sub">${d?"可为运营人员开启「系统部署」或「应用设置」限时修改权":"展示管理员为你授予的临时提权记录"}</span>
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
                  ${d?'<th style="text-align:right;">操作</th>':""}
                </tr>
              </thead>
              <tbody>
                ${h.length===0?`<tr><td colspan="${d?6:5}"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>暂无限时提权记录</strong><span>${d?"点击右上角「+ 授予限时提权」为运营人员按需开启限时修改权。":"当前无需临时提权，「应用设置」与「系统部署」保持默认只读。"}</span></div></td></tr>`:h.map(g=>`
                          <tr>
                            <td><strong style="font-weight:450;">${$e(g.targetUserName)}</strong></td>
                            <td><span class="pacom-badge pacom-badge--accent">${$e(Ga(g.module))}</span></td>
                            <td>
                              <div>${g.durationHours} 小时</div>
                              <div class="pacom-row-sub">至 ${$e(vt(g.expiresAt))}</div>
                            </td>
                            <td>
                              <div>${$e(g.approvedBy)}</div>
                              <div class="pacom-row-sub">${$e(g.reason)}</div>
                            </td>
                            <td>
                              <span class="pacom-badge ${g.status==="active"?"pacom-badge--online":g.status==="revoked"?"pacom-badge--warning":"pacom-badge--neutral"}">
                                ${g.status==="active"?"生效中":g.status==="revoked"?"已收回":"已到期"}
                              </span>
                            </td>
                            ${d?`<td style="text-align:right;">
                                    ${g.status==="active"?`<button type="button" class="pacom-btn pacom-btn--danger pacom-btn--sm" data-revoke-override="${$e(g.id)}">提前收回</button>`:`<span class="pacom-row-sub">${g.revokedBy?`${$e(g.revokedBy)} 收回`:"已结束"}</span>`}
                                  </td>`:""}
                          </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `}function ye(){const N=m.filter(g=>{if(H==="success"&&g.result!=="success"||H==="denied"&&g.result==="success")return!1;if(x!=="all"){const I=`${g.action} ${g.target}`.toLowerCase();if(x==="control"&&!I.includes("control")&&!I.includes("scene")||x==="alarm"&&!I.includes("alarm")&&!I.includes("work")||x==="deploy"&&!I.includes("deploy")&&!I.includes("plan")&&!I.includes("hardware")&&!I.includes("project")&&!I.includes("building")&&!I.includes("floor")&&!I.includes("zone")||x==="settings"&&!I.includes("settings")||x==="override"&&!I.includes("override"))return!1}return!0});return`
      <div class="pacom-log-toolbar">
        <div class="pacom-log-filters">
          <select class="pacom-select" name="auditActionCat" data-audit-cat aria-label="按行为类别筛选">
            <option value="all" ${x==="all"?"selected":""}>全部操作类别</option>
            <option value="override" ${x==="override"?"selected":""}>限时提权审批</option>
            <option value="control" ${x==="control"?"selected":""}>设备控制与场景</option>
            <option value="alarm" ${x==="alarm"?"selected":""}>告警与工单处置</option>
            <option value="deploy" ${x==="deploy"?"selected":""}>系统部署与空间</option>
            <option value="settings" ${x==="settings"?"selected":""}>应用设置变更</option>
          </select>
          <div class="pacom-tabs" role="tablist" aria-label="按执行结果筛选">
            <button type="button" class="pacom-tab" role="tab" aria-selected="${H==="all"}" data-audit-filter="all">全部（${m.length}）</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${H==="success"}" data-audit-filter="success">成功</button>
            <button type="button" class="pacom-tab" role="tab" aria-selected="${H==="denied"}" data-audit-filter="denied">已拦截</button>
          </div>
        </div>
        <span class="pacom-row-sub">共 ${N.length} 条只读记录</span>
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
              ${N.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>无匹配审计记录</strong><span>可放宽筛选条件查看全部日志。</span></div></td></tr>':N.map(g=>`
                        <tr>
                          <td>
                            <div style="font-weight:450;">${$e(g.action)}</div>
                            ${g.detail?`<div class="pacom-row-sub">${$e(g.detail)}</div>`:""}
                          </td>
                          <td><code style="font-size:12px;">${$e(g.target)}</code></td>
                          <td>
                            <div>${$e(g.actor)}</div>
                            <div class="pacom-row-sub">${$e(Ke[g.role]??g.role)}</div>
                          </td>
                          <td><span class="pacom-row-sub">${$e(vt(g.at))}</span></td>
                          <td style="text-align:right;">
                            <span class="pacom-badge ${g.result==="success"?"pacom-badge--online":"pacom-badge--critical"}">
                              ${g.result==="success"?"成功":"已拦截"}
                            </span>
                          </td>
                        </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function F(){const N=[];if(W&&l){const g=t.role==="org_admin"?mt:["project_admin","operator","space_user"];N.push(`
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
                  ${g.map(I=>`<option value="${I}">${$e(Ke[I])}</option>`).join("")}
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
        </div>`)}if(P&&d){const g=w.filter(I=>I.role==="operator");N.push(`
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
                  ${g.length===0?'<option value="">暂无运营人员</option>':g.map(I=>`<option value="${$e(I.userId)}">${$e(I.displayName)}（${$e(I.email)}）</option>`).join("")}
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
              <span class="pacom-row-sub">审批人：${$e(t.displayName)}</span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn pacom-btn--sm" data-close-modals="1">取消</button>
                <button type="submit" class="pacom-btn pacom-btn--primary pacom-btn--sm" ${g.length===0?"disabled":""}>确认授权</button>
              </div>
            </div>
          </form>
        </div>`)}return N.join("")}function Q(){const N=de[S],g=G();e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">机构与账户</h1>
            </div>
            <div class="pacom-header-meta">
              <span class="pacom-badge pacom-badge--neutral">${$e(t.roleLabel)}</span>
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${q()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head ${g?"pacom-unified-head--split":""}">
                <div class="pacom-unified-head-copy">
                  <h2 class="pacom-unified-title">${N.label}</h2>
                  <p class="pacom-unified-subtitle">${N.subtitle}</p>
                </div>
                ${g?`<div class="pacom-unified-head-actions">${g}</div>`:""}
              </div>
              ${pe?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${$e(pe)}</span></div>`:""}
              ${ie?`<div class="pacom-alert-banner">${$e(ie)}</div>`:""}
              ${S==="profile"?K():S==="members"?qe():S==="roles"?be():S==="overrides"?Ie():ye()}
            </div>
          </div>
        </div>
      </div>
      ${F()}
    `,ke()}function ke(){e.querySelectorAll("[data-anav]").forEach(g=>{g.addEventListener("click",()=>{S=g.dataset.anav??"profile",pe="",ie="",Q()})}),e.querySelector('[data-role="profile-form"]')?.addEventListener("submit",g=>{g.preventDefault();const I=new FormData(g.currentTarget);me=String(I.get("displayName")??"").trim()||t.displayName,ue=String(I.get("jobTitle")??"").trim()||ue,ve=String(I.get("phone")??"").trim()||ve,pe=`已保存个人资料：${me}（${ue}）｜ ${ve}`,Q()}),e.querySelector('[data-role="logout-btn"]')?.addEventListener("click",async()=>{await a.logout(),window.location.hash="#login",o()}),e.querySelector("[data-open-invite]")?.addEventListener("click",()=>{W=!0,P=!1,Q()}),e.querySelector("[data-open-grant]")?.addEventListener("click",()=>{P=!0,W=!1,Q()}),e.querySelectorAll("[data-close-modals]").forEach(g=>{g.addEventListener("click",()=>{W=!1,P=!1,Q()})}),e.querySelectorAll("[data-modal-scrim]").forEach(g=>{g.addEventListener("click",I=>{I.target===g&&(W=!1,P=!1,Q())})}),e.querySelector("[data-member-search]")?.addEventListener("input",g=>{const I=g.currentTarget,R=I.selectionStart??I.value.length;k=I.value,Q();const u=e.querySelector("[data-member-search]");u&&(u.focus(),u.setSelectionRange(R,R))}),e.querySelector("[data-role-filter]")?.addEventListener("change",g=>{A=g.currentTarget.value,Q()}),e.querySelector('[data-role="invite-form"]')?.addEventListener("submit",async g=>{g.preventDefault(),ie="";const I=new FormData(g.currentTarget);try{const R=await a.inviteOrgMember(String(I.get("email")??""),String(I.get("role")));W=!1,pe=`已向 ${R.email} 发送「${R.roleLabel}」邀请。`,await se()}catch(R){ie=R instanceof Error?R.message:String(R),Q()}}),e.querySelector('[data-role="grant-override-form"]')?.addEventListener("submit",async g=>{g.preventDefault(),ie="";const I=new FormData(g.currentTarget);try{const R=await a.grantOverride({targetUserId:String(I.get("targetUserId")??""),module:String(I.get("module")??"deployment"),durationHours:Number(I.get("durationHours")??8),reason:String(I.get("reason")??"")});P=!1,pe=`已为「${R.targetUserName}」开启「${Ga(R.module)}」${R.durationHours} 小时限时修改权，到期自动收回。`,await se()}catch(R){ie=R instanceof Error?R.message:String(R),Q()}}),e.querySelectorAll("[data-revoke-override]").forEach(g=>{g.addEventListener("click",async()=>{const I=g.dataset.revokeOverride;if(I){ie="";try{const R=await a.revokeOverride(I);pe=`已提前收回「${R.targetUserName}」的「${Ga(R.module)}」限时修改权。`,await se()}catch(R){ie=R instanceof Error?R.message:String(R),Q()}}})}),e.querySelectorAll("[data-audit-filter]").forEach(g=>{g.addEventListener("click",()=>{H=g.dataset.auditFilter??"all",Q()})}),e.querySelector("[data-audit-cat]")?.addEventListener("change",g=>{x=g.currentTarget.value??"all",Q()})}Q()}const $a={open:"待分派",assigned:"已指派",in_progress:"处理中",resolved:"已解决",closed:"已关闭"},ms={critical:{label:"严重",cls:"pacom-badge--critical"},major:{label:"重要",cls:"pacom-badge--warning"},minor:{label:"一般",cls:"pacom-badge--accent"},info:{label:"提示",cls:"pacom-badge--neutral"}},vs={"zone-e7f-lab-east":"东侧实验区","zone-e7f-office-west":"西侧办公区","zone-e7f-meeting-702":"702 会议室","zone-e7f-corridor":"核心走廊与弱电井"};function gs(e){const a=`${e.title} ${e.message}`.toLowerCase();return a.includes("离线")||a.includes("modbus")||a.includes("心跳")?"建议先运行下方「单机自检（FTT）」或在「系统部署 → 网关与数据健康」核查 RS485/Modbus 链路状态，排除通信中断后再派单现场排查。":a.includes("co₂")||a.includes("co2")||a.includes("新风")?"建议在「空间总览」提高该区域新风/空调风速，或前往「智能策略」检查 CO₂ 联动阈值。":"建议先点击右侧「定位到空间总览」或「查看时序对比」核查实时工况，确认后可标记已处置或一键转工单。"}function fs(e){return e.severity==="critical"?{duration:"9.2h",trend:"↑ 24%",worsening:!0}:e.severity==="major"?{duration:"6.5h",trend:"↑ 18%",worsening:!0}:{duration:"2.1h",trend:"↓ 8%",worsening:!1}}function gt(e){const a=`${e.title} ${e.message}`.toLowerCase();return a.includes("离线")||a.includes("vav")||e.severity==="critical"?{costYuan:840,costLabel:"¥ 840/月",comfortLabel:"舒适度 -4%"}:a.includes("co₂")||a.includes("co2")||e.severity==="major"?{costYuan:580,costLabel:"¥ 580/月",comfortLabel:"空气质量关注"}:{costYuan:210,costLabel:"¥ 210/月",comfortLabel:"能效轻度偏离"}}async function bs(e,a,t){const n=new URLSearchParams(window.location.hash.split("?")[1]??""),o=n.get("alarm"),l=n.get("wo"),d=t.scope.canManageAlarms;let b=await a.getSpatialTree(),v=lt(),$=!1,S="",w=[],h=[],m=[],k=l?"workorders":"alarms",A="all",H="all",x="all",W="impact",P=!1,me="",ue=o,ve=l,pe=null,ie=null,de="resolved";const se=new Set,q=new Map,G=new Map,K=new Map,qe=new Map;let be="",Ie="";function ye(g){const I=qe.get(g.id);if(I)return I;const R=g.id.match(/(\d+)$/),u=`WO-2026-${R?R[1]:g.id.replace(/[^a-zA-Z0-9]/g,"").slice(-3).toUpperCase()}`,M={estCost:"¥ 450",actualCost:g.status==="closed"?"¥ 380":"--",cmmsNo:u,assigneeGroup:"暖通运维组",tasks:[{id:`${g.id}-t1`,label:"核查设备供电与现场指示灯状态",done:g.status!=="open"},{id:`${g.id}-t2`,label:"实测送风/回风温度并确认执行器动作",done:g.status==="resolved"||g.status==="closed",reading:"23.6",unit:"°C"}],history:[{at:g.createdAt?g.createdAt.slice(5,16).replace("T"," "):"刚刚",text:`创建工单并同步至 CMMS（${u}）`}]};return qe.set(g.id,M),M}async function F(){[w,h,m]=await Promise.all([a.listAlarms(D.floorId),a.listWorkOrders(D.floorId),a.getFloorDevices(D.floorId).catch(()=>[])]),h.forEach(g=>ye(g)),N()}function Q(g){if(!g)return{name:"楼层通用",zone:"E7F",dev:null};const I=m.find(R=>R.id===g)??null;return I?{name:I.name,zone:(I.logicalZoneId?vs[I.logicalZoneId]:void 0)??"E7F",dev:I}:{name:g,zone:"E7F",dev:null}}function ke(g){const I=Q(g.deviceId).dev;I&&I.connectivity==="offline"?K.set(g.id,{verdict:"fail",summary:`前置检查未通过（FAIL）：「${I.name}」通信离线，未向现场 BMS 下发任何覆盖指令。`,steps:["1. 前置检查（Pre-check）：通信心跳检测失败，已安全中止","2. 下发序列（Sequence）：已跳过（保护现场工况）","3. 诊断建议：优先检查 E7F 主控网关端口 502 与 RS485 链路"]}):K.set(g.id,{verdict:"pass",summary:`自检通过（PASS）：「${I?.name??g.deviceId}」前置门控通过 → 指令下发与回读一致 → 已自动安全复位。`,steps:["1. 前置检查（Pre-check）：设备在线且处于运行工况（通过）","2. 下发序列（Sequence）：试探指令回读响应 18 ms（通过）","3. 自动复位（Restore）：已恢复原自动策略设定值（通过）"]}),ue=g.id,N()}function N(){const g=w.filter(_=>_.status==="active"&&!q.has(_.id)),I=h.filter(_=>!ye(_).cancelled&&(_.status==="open"||_.status==="assigned"||_.status==="in_progress")),R=w.filter(_=>_.status!=="active").length+G.size,u=0,M=q.size,Y=me.trim().toLowerCase(),we=w.filter(_=>{const L=q.has(_.id);if(A==="snoozed"){if(!L)return!1}else if(A==="active"){if(_.status!=="active"||L)return!1}else if(A==="acknowledged"){if(_.status!=="acknowledged")return!1}else if(L)return!1;if(x!=="all"&&_.severity!==x)return!1;if(!Y)return!0;const ee=Q(_.deviceId);return`${_.title} ${_.message} ${ee.name} ${ee.zone} ${_.deviceId}`.toLowerCase().includes(Y)}),Re=new Map;for(const _ of we){const L=`${_.title} ${_.message}`.toLowerCase(),ee=L.includes("离线")||L.includes("modbus")||L.includes("通信"),ce=P?ee?"root-gateway-modbus":_.deviceId:_.id,ge=ee?"根因：E7F 主控网关通信链路":`根因：${Q(_.deviceId).name}`,Fe=Re.get(ce)??{rootLabel:ge,items:[]};Fe.items.push(_),Re.set(ce,Fe)}const Ne=Array.from(Re.values());W==="impact"&&Ne.sort((_,L)=>gt(L.items[0]).costYuan-gt(_.items[0]).costYuan);const je=h.filter(_=>{const L=ye(_);if(H==="cancelled"){if(!L.cancelled)return!1}else if(L.cancelled||H==="open"&&(_.status==="resolved"||_.status==="closed")||H==="resolved"&&_.status!=="resolved"||H==="closed"&&_.status!=="closed")return!1;if(!Y)return!0;const ee=Q(_.deviceId);return`${_.title} ${_.description} ${_.id} ${L.cmmsNo} ${ee.name}`.toLowerCase().includes(Y)});e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">告警中心</h1>
              ${ot({tree:b,session:t,scope:v,activeAlarmCount:g.length,isOpen:$,searchKeyword:S})}
            </div>

            <div class="pacom-header-meta">
              ${k==="alarms"?`
                  <label style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:var(--pacom-text-body); cursor:pointer;">
                    <span>根因归并</span>
                    <button type="button" class="pacom-switch" role="switch" aria-checked="${P}" data-toggle-group="1" aria-label="按拓扑根因归并">
                      <span class="pacom-switch-thumb"></span>
                    </button>
                  </label>`:""}
              <span class="pacom-badge ${t.scope.canManageAlarms?"pacom-badge--online":"pacom-badge--warning"}">
                ${t.scope.canManageAlarms?"可处置与转单":"只读权限"}
              </span>
              <button class="pacom-icon-btn" data-refresh-alarms="1" title="刷新告警与工单" aria-label="刷新告警与工单">${re("refresh-cw",14)}</button>
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="告警中心视图">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${k==="alarms"}" data-main-tab="alarms">实时告警（${w.length-M}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${k==="workorders"}" data-main-tab="workorders">运维工单（${h.length}）</button>
          </nav>
        </header>

        <div class="pacom-content-page" style="padding:6px 4px 24px;">
          <div class="pacom-kpi-strip" role="region" aria-label="告警闭环状态筛选">
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="active"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${k==="alarms"&&A==="active"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">待处理告警</span>
              <div class="pacom-kpi-value">${g.length}<span class="pacom-kpi-unit">条 ｜ 预估 ¥1,420/月</span></div>
              <span class="pacom-kpi-delta">点击筛选待处理告警</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="workorders"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${k==="workorders"&&H==="open"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">处理中工单</span>
              <div class="pacom-kpi-value">${I.length}<span class="pacom-kpi-unit">单</span></div>
              <span class="pacom-kpi-delta">已同步 CMMS 跟踪闭环</span>
            </button>
            <button type="button" class="pacom-kpi-cell" data-kpi-filter="acknowledged"
              style="border:0; background:transparent; text-align:left; cursor:pointer; ${k==="alarms"&&A==="acknowledged"?"box-shadow:inset 0 -2px 0 var(--pacom-accent-solid); background:var(--pacom-hover-layer);":""}">
              <span class="pacom-kpi-label">已闭环生效</span>
              <div class="pacom-kpi-value">${R}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">关单后持续 24h 无复发</span>
            </button>
            <div class="pacom-kpi-cell">
              <span class="pacom-kpi-label">关单复发待查</span>
              <div class="pacom-kpi-value" style="color:var(--pacom-status-online);">${u}<span class="pacom-kpi-unit">项</span></div>
              <span class="pacom-kpi-delta">24h 复发自动回标待查</span>
            </div>
          </div>

          ${be?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${s(be)}</span></div>`:""}
          ${Ie?`<div class="pacom-alert-banner">${s(Ie)}</div>`:""}

          ${k==="alarms"?`
              <section class="pacom-table-card">
                <div class="pacom-table-toolbar">
                  <div class="pacom-table-toolbar-group" style="flex:1; min-width:240px;">
                    <input class="pacom-input" name="alarmSearch" style="max-width:240px;" data-alarm-search placeholder="搜索告警、设备或功能区…" value="${s(me)}" aria-label="搜索告警" />
                    <select class="pacom-select" name="severityFilter" data-severity-filter aria-label="按告警级别筛选">
                      <option value="all" ${x==="all"?"selected":""}>全部级别</option>
                      <option value="critical" ${x==="critical"?"selected":""}>严重</option>
                      <option value="major" ${x==="major"?"selected":""}>重要</option>
                      <option value="minor" ${x==="minor"?"selected":""}>一般</option>
                    </select>
                    <select class="pacom-select" name="alarmSort" data-alarm-sort aria-label="告警排序方式">
                      <option value="impact" ${W==="impact"?"selected":""}>按影响优先</option>
                      <option value="time" ${W==="time"?"selected":""}>按触发时间</option>
                    </select>
                    <div class="pacom-tabs" role="group" aria-label="按状态筛选">
                      <button class="pacom-tab" aria-selected="${A==="all"}" data-status-pill="all">全部</button>
                      <button class="pacom-tab" aria-selected="${A==="active"}" data-status-pill="active">待处理</button>
                      <button class="pacom-tab" aria-selected="${A==="acknowledged"}" data-status-pill="acknowledged">已确认</button>
                      <button class="pacom-tab" aria-selected="${A==="snoozed"}" data-status-pill="snoozed">已忽略（${M}）</button>
                    </div>
                  </div>
                  <div class="pacom-table-toolbar-group">
                    ${se.size>0&&t.scope.canManageAlarms?`<button type="button" class="pacom-btn pacom-btn--primary" data-batch-ack="1">批量确认（${se.size}）</button>`:""}
                    <span class="pacom-row-sub">共 ${Ne.length} 项</span>
                  </div>
                </div>
                ${Ne.length===0?'<div class="pacom-empty-state"><strong>当前条件下无告警</strong><span>楼层运行平稳，可切换筛选条件查看全部记录。</span></div>':`
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
                          ${Ne.map(_=>{const L=_.items[0],ee=ms[L.severity]??{label:L.severity,cls:"pacom-badge--neutral"},ce=Q(L.deviceId),ge=fs(L),Fe=gt(L),Ye=ue===L.id,_e=q.get(L.id),Ae=!!_e,aa=se.has(L.id),ze=K.get(L.id);return`
                                <tr>
                                  <td>
                                    <input type="checkbox" name="alarmCheck-${s(L.id)}" data-check-alarm="${s(L.id)}" ${aa?"checked":""} ${!d||L.status!=="active"||Ae?"disabled":""} aria-label="选择 ${s(L.title)}" />
                                  </td>
                                  <td><span class="pacom-badge ${ee.cls}">${s(ee.label)}</span></td>
                                  <td>
                                    <div style="font-weight:500; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                      <span>${s(L.title)}</span>
                                      ${P?`<span class="pacom-badge pacom-badge--accent">${s(_.rootLabel)}${_.items.length>1?` ｜ 影响 ${_.items.length} 项`:""}</span>`:""}
                                      ${ze?`<span class="pacom-badge ${ze.verdict==="pass"?"pacom-badge--online":"pacom-badge--critical"}">自检 ${s(ze.verdict.toUpperCase())}</span>`:""}
                                    </div>
                                    <div class="pacom-row-sub">${s(L.message)}</div>
                                  </td>
                                  <td>
                                    <div style="font-weight:500;">${s(ce.name)}</div>
                                    <div class="pacom-row-sub">${s(ce.zone)}</div>
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
                                    <span class="pacom-badge ${Ae?"pacom-badge--neutral":L.status==="active"?"pacom-badge--warning":"pacom-badge--online"}">
                                      ${Ae?`忽略 ${s(_e?.duration)}`:L.status==="active"?"待处理":"已确认"}
                                    </span>
                                  </td>
                                  <td>
                                    <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                      ${Ae?`<button class="pacom-btn" data-unsnooze="${s(L.id)}" ${d?"":"disabled"}>恢复监控</button>`:`
                                            ${L.status==="active"?`<button class="pacom-btn" data-mark-actioned="${s(L.id)}" ${d?"":"disabled"}>标记已处置</button>`:""}
                                            ${L.workOrderId?'<span class="pacom-badge pacom-badge--accent">已转单</span>':`<button class="pacom-btn pacom-btn--primary" data-to-wo="${s(L.id)}" ${d?"":"disabled"}>转工单</button>`}
                                          `}
                                      <button class="pacom-btn pacom-btn--ghost" data-expand-alarm="${s(L.id)}">${Ye?"收起":"诊断"}</button>
                                    </div>
                                  </td>
                                </tr>
                                ${Ye?`
                                    <tr class="pacom-table-detail-row">
                                      <td colspan="8">
                                        <div class="pacom-wo-workbench" style="gap:14px;">
                                          <div style="display:flex; flex-direction:column; gap:10px;">
                                            <div style="font-size:13px; color:var(--pacom-text-body);">
                                              <strong style="font-weight:500; color:var(--pacom-text-primary);">诊断建议：</strong>${s(gs(L))}
                                            </div>
                                            ${_e?`<div class="pacom-info-banner">忽略周期：${s(_e.duration)} ｜ 原因备注：${s(_e.reason)}</div>`:""}
                                            ${ze?`
                                                <div class="pacom-banner ${ze.verdict==="pass"?"pacom-banner--ok":"pacom-banner--critical"}" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                                  <span class="pacom-banner-title">${s(ze.summary)}</span>
                                                  <div style="display:flex; flex-direction:column; gap:2px; font-size:12px; color:var(--pacom-text-body);">
                                                    ${ze.steps.map(Qe=>`<span>${s(Qe)}</span>`).join("")}
                                                  </div>
                                                </div>`:""}
                                            <div class="pacom-row-sub">告警编号 <code>${s(L.id)}</code> ｜ 设备编号 <code>${s(L.deviceId)}</code> ｜ 关联工单 ${s(L.workOrderId??"无")}</div>
                                          </div>
                                          <div style="display:flex; flex-direction:column; gap:8px; padding:12px 14px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:12px; font-weight:500; color:var(--pacom-text-secondary);">快速验真与处置</strong>
                                            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                                              <button class="pacom-btn pacom-btn--primary" data-run-ftt="${s(L.id)}">单机自检（FTT）</button>
                                              ${!Ae&&L.status==="active"?`<button class="pacom-btn" data-open-snooze="${s(L.id)}" ${d?"":"disabled"}>限时忽略</button>`:""}
                                              <button class="pacom-btn" data-go-ts="${s(L.deviceId)}">时序对比 →</button>
                                              <button class="pacom-btn" data-locate-home="${s(L.deviceId)}">定位设备 →</button>
                                            </div>
                                            ${pe===L.id?`
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
                                                    <button class="pacom-btn pacom-btn--primary" type="submit" style="height:28px;" ${d?"":"disabled"}>确认忽略</button>
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
              ${(()=>{const _=ve?h.find(L=>L.id===ve)??null:null;if(_){const L=Q(_.deviceId),ee=ye(_),ce=!!(!d||ee.cancelled||_.status==="closed");return`
                  <section class="pacom-section" data-role="wo-workbench">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <button type="button" class="pacom-btn" data-expand-wo="${s(_.id)}">← 返回运维工单列表</button>
                        <h2 class="pacom-section-title">${s(_.title)}</h2>
                        <span class="pacom-badge pacom-badge--accent">${s(ee.cmmsNo)}</span>
                        ${ee.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <select class="pacom-select" name="woStatus-${s(_.id)}" data-wo-status="${s(_.id)}" aria-label="更新工单状态" ${ce?"disabled":""}>
                          ${["open","assigned","in_progress","resolved","closed"].map(ge=>`<option value="${ge}" ${_.status===ge?"selected":""}>${$a[ge]}</option>`).join("")}
                          <option value="cancelled" ${ee.cancelled?"selected":""}>已取消</option>
                        </select>
                      </div>
                    </div>
                    ${ie===_.id?`
                        <form data-close-wo-form="${s(_.id)}" class="pacom-card" style="gap:10px;">
                          <strong style="font-size:13px; font-weight:500;">流转至「${$a[de]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                          <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                            <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${s(ee.cause??"")}" required />
                            <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${s(ee.solution??"")}" required />
                            <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${s(ee.actualCost==="--"?"":ee.actualCost)}" />
                          </div>
                          <div style="display:flex; justify-content:flex-end; gap:8px;">
                            <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                            <button class="pacom-btn pacom-btn--primary" type="submit" ${d?"":"disabled"}>保存并更新状态</button>
                          </div>
                        </form>`:""}
                    <div class="pacom-wo-workbench">
                      <div style="display:flex; flex-direction:column; gap:14px;">
                        <div class="pacom-card" style="gap:10px;">
                          <strong style="font-size:14px; font-weight:500;">工单描述与现场检查任务清单</strong>
                          <div class="pacom-row-sub">${s(_.description)}</div>
                          <div style="display:flex; flex-direction:column; gap:6px;">
                            ${ee.tasks.map(ge=>`
                                <label style="display:flex; align-items:center; justify-content:space-between; gap:8px; font-size:13px; padding:8px 12px; border-radius:10px; background:var(--pacom-surface-primary);">
                                  <span style="display:inline-flex; align-items:center; gap:8px;">
                                    <input type="checkbox" name="woTask-${s(ge.id)}" data-wo-task="${s(_.id)}" data-task-id="${s(ge.id)}" ${ge.done?"checked":""} ${ce?"disabled":""} />
                                    <span>${s(ge.label)}</span>
                                  </span>
                                  ${ge.unit?`<span class="pacom-row-sub">实测：${s(ge.reading??"--")} ${s(ge.unit)}</span>`:""}
                                </label>`).join("")}
                          </div>
                        </div>
                        <div class="pacom-card" style="gap:8px;">
                          <strong style="font-size:14px; font-weight:500;">全生命周期操作历史</strong>
                          <div style="display:flex; flex-direction:column; gap:6px; font-size:13px; color:var(--pacom-text-body);">
                            ${ee.history.map(ge=>`<span>• <span class="pacom-row-sub">${s(ge.at)}</span> — ${s(ge.text)}</span>`).join("")}
                          </div>
                        </div>
                      </div>
                      <div class="pacom-card" style="gap:10px;">
                        <strong style="font-size:14px; font-weight:500;">工单摘要与费用核算</strong>
                        <div class="pacom-kv-grid">
                          <span class="pacom-kv-label">内部编号</span><span><code>${s(_.id)}</code></span>
                          <span class="pacom-kv-label">CMMS 同步</span><span><code>${s(ee.cmmsNo)}</code> ｜ 已同步</span>
                          <span class="pacom-kv-label">关联设备</span><span>${s(L.name)}（${s(L.zone)}）</span>
                          <span class="pacom-kv-label">处理工作组</span><span>${s(ee.assigneeGroup)}</span>
                          <span class="pacom-kv-label">费用核算</span><span>预估 ${s(ee.estCost)} / 实际 ${s(ee.actualCost)}</span>
                          <span class="pacom-kv-label">故障根因</span><span>${s(ee.cause??"待完单填写")}</span>
                          <span class="pacom-kv-label">处置方案</span><span>${s(ee.solution??"待完单填写")}</span>
                        </div>
                        <div style="display:flex; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle);">
                          <button class="pacom-btn" data-go-ts="${s(_.deviceId??"")}">查看时序 →</button>
                          <button class="pacom-btn" data-locate-home="${s(_.deviceId??"")}">定位设备 →</button>
                        </div>
                      </div>
                    </div>
                  </section>`}return`
                <section class="pacom-table-card">
                  <div class="pacom-table-toolbar">
                    <div class="pacom-table-toolbar-group" style="flex:1; min-width:220px;">
                      <input class="pacom-input" name="woSearch" style="max-width:240px;" data-alarm-search placeholder="搜索工单标题、编号或设备…" value="${s(me)}" aria-label="搜索工单" />
                      <div class="pacom-tabs" role="group" aria-label="工单状态筛选">
                        <button class="pacom-tab" aria-selected="${H==="all"}" data-wo-pill="all">全部</button>
                        <button class="pacom-tab" aria-selected="${H==="open"}" data-wo-pill="open">进行中</button>
                        <button class="pacom-tab" aria-selected="${H==="resolved"}" data-wo-pill="resolved">已解决</button>
                        <button class="pacom-tab" aria-selected="${H==="closed"}" data-wo-pill="closed">已关闭</button>
                        <button class="pacom-tab" aria-selected="${H==="cancelled"}" data-wo-pill="cancelled">已取消</button>
                      </div>
                    </div>
                    <span class="pacom-row-sub">共 ${je.length} 条工单</span>
                  </div>
                  ${je.length===0?'<div class="pacom-empty-state"><strong>暂无符合条件的运维工单</strong><span>可在「实时告警」中一键将告警转为运维工单。</span></div>':`
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
                            ${je.map(L=>{const ee=Q(L.deviceId),ce=ye(L),ge=!!(!d||ce.cancelled||L.status==="closed");return`
                                  <tr>
                                    <td>
                                      <div style="font-weight:500; display:flex; align-items:center; gap:6px;">
                                        <span>${s(L.title)}</span>
                                        ${ce.cancelled?'<span class="pacom-badge pacom-badge--neutral">已取消</span>':""}
                                      </div>
                                      <div class="pacom-row-sub">${s(L.description)} ｜ <code>${s(L.id)}</code></div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;">${s(ee.name)}</div>
                                      <div class="pacom-row-sub">${s(ee.zone)}</div>
                                    </td>
                                    <td>
                                      <div style="font-weight:500;"><code>${s(ce.cmmsNo)}</code> <span class="pacom-badge pacom-badge--online">已同步</span></div>
                                      <div class="pacom-row-sub">${s(ce.assigneeGroup)} ｜ 预估 ${s(ce.estCost)}</div>
                                    </td>
                                    <td>
                                      <div style="display:flex; justify-content:flex-end; gap:6px; align-items:center;">
                                        <select class="pacom-select" name="woStatusList-${s(L.id)}" data-wo-status="${s(L.id)}" aria-label="更新工单状态" ${ge?"disabled":""}>
                                          ${["open","assigned","in_progress","resolved","closed"].map(Fe=>`<option value="${Fe}" ${L.status===Fe?"selected":""}>${$a[Fe]}</option>`).join("")}
                                          <option value="cancelled" ${ce.cancelled?"selected":""}>已取消</option>
                                        </select>
                                        <button class="pacom-btn" data-expand-wo="${s(L.id)}">进入详情 →</button>
                                      </div>
                                    </td>
                                  </tr>
                                  ${ie===L.id?`
                                      <tr class="pacom-table-detail-row">
                                        <td colspan="4">
                                          <form data-close-wo-form="${s(L.id)}" style="display:flex; flex-direction:column; gap:8px; padding:12px; border-radius:12px; background:var(--pacom-surface-card); box-shadow:var(--pacom-shadow-xs);">
                                            <strong style="font-size:13px; font-weight:500;">流转至「${$a[de]}」前请沉淀根因与方案（关单后将锁定编辑）</strong>
                                            <div style="display:grid; grid-template-columns:1fr 1fr 140px; gap:8px;">
                                              <input class="pacom-input" name="cause" placeholder="故障根因（如：Modbus 端子松动）" value="${s(ce.cause??"")}" required />
                                              <input class="pacom-input" name="solution" placeholder="处置方案（如：紧固端子并重启采集确认回读）" value="${s(ce.solution??"")}" required />
                                              <input class="pacom-input" name="actualCost" placeholder="实际费用（如 ¥380）" value="${s(ce.actualCost==="--"?"":ce.actualCost)}" />
                                            </div>
                                            <div style="display:flex; justify-content:flex-end; gap:8px;">
                                              <button class="pacom-btn" type="button" data-cancel-close-wo="1">取消</button>
                                              <button class="pacom-btn pacom-btn--primary" type="submit" ${d?"":"disabled"}>保存并更新状态</button>
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
    `,it(e,{onToggle:()=>{$=!$,N(),$&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:_=>{S=_,N();const L=e.querySelector("[data-global-space-search]");L&&(L.focus(),L.setSelectionRange(_.length,_.length))},onPick:_=>{v=_,$=!1,N()}}),e.querySelectorAll("[data-main-tab]").forEach(_=>{_.addEventListener("click",()=>{k=_.dataset.mainTab??"alarms",be="",N()})}),e.querySelectorAll("[data-kpi-filter]").forEach(_=>{_.addEventListener("click",()=>{const L=_.dataset.kpiFilter;be="",L==="workorders"?(k="workorders",H=H==="open"?"all":"open"):(L==="active"||L==="acknowledged")&&(k="alarms",A=A===L?"all":L),N()})}),e.querySelectorAll("[data-status-pill]").forEach(_=>{_.addEventListener("click",()=>{A=_.dataset.statusPill??"all",N()})}),e.querySelectorAll("[data-wo-pill]").forEach(_=>{_.addEventListener("click",()=>{H=_.dataset.woPill??"all",N()})}),e.querySelector("[data-refresh-alarms]")?.addEventListener("click",()=>{be="",F()}),e.querySelector("[data-toggle-group]")?.addEventListener("click",()=>{P=!P,N()}),e.querySelector("[data-severity-filter]")?.addEventListener("change",_=>{x=_.currentTarget.value,N()}),e.querySelector("[data-alarm-sort]")?.addEventListener("change",_=>{W=_.currentTarget.value??"impact",N()}),e.querySelector("[data-alarm-search]")?.addEventListener("input",_=>{const L=_.currentTarget,ee=L.selectionStart??L.value.length;me=L.value,N();const ce=e.querySelector("[data-alarm-search]");ce&&(ce.focus(),ce.setSelectionRange(ee,ee))}),e.querySelectorAll("[data-check-alarm]").forEach(_=>{_.addEventListener("change",()=>{if(!d)return;const L=_.dataset.checkAlarm;L&&(_.checked?se.add(L):se.delete(L),N())})}),e.querySelector("[data-batch-ack]")?.addEventListener("click",async()=>{if(!d)return;Ie="";const _=Array.from(se);try{for(const L of _)await a.acknowledgeAlarm(L,"告警中心批量确认"),G.set(L,"批量确认处置");se.clear(),be=`已批量确认 ${_.length} 条告警，未来 24 小时持续校验无复发。`,await F()}catch(L){Ie=L instanceof Error?L.message:String(L),N()}}),e.querySelectorAll("[data-expand-alarm]").forEach(_=>{_.addEventListener("click",()=>{const L=_.dataset.expandAlarm??null;ue=ue===L?null:L,pe=null,N()})}),e.querySelectorAll("[data-expand-wo]").forEach(_=>{_.addEventListener("click",()=>{const L=_.dataset.expandWo??null;ve=ve===L?null:L,N()})}),e.querySelectorAll("[data-run-ftt]").forEach(_=>{_.addEventListener("click",()=>{const L=w.find(ee=>ee.id===_.dataset.runFtt);L&&ke(L)})}),e.querySelectorAll("[data-open-snooze]").forEach(_=>{_.addEventListener("click",()=>{d&&(pe=_.dataset.openSnooze??null,N())})}),e.querySelector("[data-cancel-snooze]")?.addEventListener("click",()=>{pe=null,N()}),e.querySelectorAll("[data-snooze-form]").forEach(_=>{_.addEventListener("submit",L=>{if(L.preventDefault(),!d)return;const ee=_.dataset.snoozeForm;if(!ee)return;const ce=new FormData(_),ge=String(ce.get("duration")??"24h"),Fe=String(ce.get("reason")??"").trim()||"现场核查中";q.set(ee,{duration:ge,reason:Fe}),se.delete(ee),pe=null,be=`已限时忽略该告警（${ge} ｜ ${Fe}），可在「已忽略」页签中随时恢复。`,N()})}),e.querySelectorAll("[data-unsnooze]").forEach(_=>{_.addEventListener("click",()=>{if(!d)return;const L=_.dataset.unsnooze;L&&(q.delete(L),be="已恢复该告警的实时监控。",N())})}),e.querySelectorAll("[data-go-ts]").forEach(_=>{_.addEventListener("click",()=>{const L=_.dataset.goTs??"";window.location.hash=`#analysis?tab=timeseries&device=${encodeURIComponent(L)}`})}),e.querySelectorAll("[data-locate-home]").forEach(_=>{_.addEventListener("click",()=>{const L=_.dataset.locateHome??"";window.location.hash=L?`#home?device=${encodeURIComponent(L)}`:"#home"})}),e.querySelectorAll("[data-mark-actioned]").forEach(_=>{_.addEventListener("click",async()=>{if(!d)return;Ie="";const L=_.dataset.markActioned;try{await a.acknowledgeAlarm(L,"现场自处理完成（Mark Actioned）"),G.set(L,"现场自处理完成"),se.delete(L),be="已标记处置完成，系统将在未来 24 小时持续校验是否复发。",await F()}catch(ee){Ie=ee instanceof Error?ee.message:String(ee),N()}})}),e.querySelectorAll("[data-to-wo]").forEach(_=>{_.addEventListener("click",async()=>{if(!d)return;Ie="";const L=w.find(ee=>ee.id===_.dataset.toWo);if(L)try{await a.createWorkOrder({floorId:L.floorId,deviceId:L.deviceId,alarmId:L.id,title:`处置告警：${L.title}`,description:L.message}),be=`已将「${L.title}」转为运维工单并同步 CMMS。`,await F()}catch(ee){Ie=ee instanceof Error?ee.message:String(ee),N()}})}),e.querySelectorAll("[data-wo-status]").forEach(_=>{_.addEventListener("change",async()=>{if(!d)return;const L=_.dataset.woStatus,ee=_.value;if(Ie="",ee==="cancelled"){const ce=h.find(ge=>ge.id===L);if(ce){const ge=ye(ce);ge.cancelled=!0,ge.history.unshift({at:"刚刚",text:"将工单标记为「已取消」（不计入已关闭闭环率）"}),be="工单已移入「已取消」分类并锁定编辑。",N()}return}if(ee==="resolved"||ee==="closed"){ie=L,de=ee,N();return}try{await a.updateWorkOrderStatus(L,ee);const ce=h.find(ge=>ge.id===L);ce&&ye(ce).history.unshift({at:"刚刚",text:`状态变更为「${$a[ee]}」`}),be="工单状态已更新并写入审计日志。",await F()}catch(ce){Ie=ce instanceof Error?ce.message:String(ce),await F()}})}),e.querySelector("[data-cancel-close-wo]")?.addEventListener("click",()=>{ie=null,N()}),e.querySelectorAll("[data-close-wo-form]").forEach(_=>{_.addEventListener("submit",async L=>{if(L.preventDefault(),!d)return;const ee=_.dataset.closeWoForm,ce=new FormData(_),ge=String(ce.get("cause")??"").trim(),Fe=String(ce.get("solution")??"").trim(),Ye=String(ce.get("actualCost")??"").trim();try{await a.updateWorkOrderStatus(ee,de);const _e=h.find(Ae=>Ae.id===ee);if(_e){const Ae=ye(_e);Ae.cause=ge,Ae.solution=Fe,Ye&&(Ae.actualCost=Ye),Ae.history.unshift({at:"刚刚",text:`流转至「${$a[de]}」｜ 根因：${ge}`})}ie=null,ve=ee,be=`工单已更新为「${$a[de]}」，根因与方案已沉淀归档。`,await F()}catch(_e){Ie=_e instanceof Error?_e.message:String(_e),N()}})}),e.querySelectorAll("[data-wo-task]").forEach(_=>{_.addEventListener("change",()=>{if(!d)return;const L=h.find(ge=>ge.id===_.dataset.woTask);if(!L)return;const ce=ye(L).tasks.find(ge=>ge.id===_.dataset.taskId);ce&&(ce.done=_.checked),N()})})}await F()}function hs(e){return{spatial:!!(e.createProject&&e.upsertBuilding&&e.upsertFloor&&e.upsertZone),createDevice:!!e.createDeploymentDevice,lightMarkers:!!(e.addLightMarker&&e.deleteLightMarker),meshRoles:!!e.updateMeshRole,edgeSync:!!e.syncEdgeGateway,deviceParams:!!e.saveDeviceParams,deviceGroups:!!(e.upsertDeviceGroup&&e.deleteDeviceGroup),floorDocs:!!e.attachFloorDoc,manageConnections:!!(e.upsertConnection&&e.deleteConnection),restartEdge:!!e.restartEdgeService}}const ys={project_config:{title:"项目配置",subtitle:"管理项目档案、楼宇结构、楼层 2D 平面底图、功能区划分与工程资料。",granularity:"project"},device_marking:{title:"设备标记",subtitle:"在纯白 2D 平面底图上完成设备点位标记、回路灯点布置与硬件绑定。",granularity:"floor"},device_list:{title:"设备列表",subtitle:"核查本层四态设备清单，配置硬件绑定、自治参数或执行单机与全层自检。",granularity:"floor"},device_groups:{title:"设备分组",subtitle:"维护端侧蓝牙 Mesh 自治联动组与云端业务分组，支持成员编排与群组试控。",granularity:"floor"},device_network:{title:"设备网络",subtitle:"查看无线蓝牙 Mesh 通信树与业务供能流向，执行网络体检与边缘网关同步。",granularity:"floor"},connections:{title:"系统接入",subtitle:"管理边缘网关与暖通、电表、照明等异构子系统接入通道与采集质量。",granularity:"project"},acceptance:{title:"交付验收",subtitle:"按 5 步部署门控核验各楼层就绪状态，执行全层自检并冻结交付基线快照。",granularity:"building"}},Ot={connected:{label:"已连通",cls:"pacom-badge--online"},degraded:{label:"通信降级",cls:"pacom-badge--warning"},disconnected:{label:"已断开",cls:"pacom-badge--critical"}},$s={frozen:"已冻结",draft:"草稿",delivered:"已交付"},Fa={gateway:"网关 / 适配器",lighting:"照明回路",hvac:"暖通空调",sensor:"环境传感",meter:"智能电表"},ja={lab:"实验区",office:"办公区",meeting:"会议室",corridor:"走廊 / 公区",utility:"机房 / 后勤",outdoor:"露台 / 活动区"},wt=[{key:"sensor",label:"智能传感器",category:"sensor",defaultProxy:!0,defaultRelay:!1,hint:"建议每层启用 2–3 个 Proxy，空旷 20–30m 按需开 Relay"},{key:"panel_3",label:"三控开关面板",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"建议关闭 Proxy/Relay 防止广播干扰，自动生成回路灯点"},{key:"driver",label:"调光驱动器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"支持亮度调光，自动生成 1 个回路灯点"},{key:"breaker",label:"智能断路器",category:"lighting",defaultProxy:!1,defaultRelay:!1,hint:"用于非调光照明回路改造"},{key:"adapter",label:"蓝牙适配器",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"Mesh 网络收发中心，默认关闭 Proxy/Relay"},{key:"gateway",label:"边缘网关",category:"gateway",defaultProxy:!1,defaultRelay:!1,hint:"承载云边同步与本地自治"},{key:"repeater",label:"纯中继器",category:"gateway",defaultProxy:!1,defaultRelay:!0,hint:"混凝土墙 / 拐角弱信号区专用中继，默认开启 Relay"},{key:"hvac",label:"空调内机",category:"hvac",defaultProxy:!1,defaultRelay:!1,hint:"经空调网关有线接入，不加入蓝牙 Mesh"},{key:"meter",label:"智能电表",category:"meter",defaultProxy:!1,defaultRelay:!1,hint:"经 485 / 通讯管理机有线接入"}],ws={"zone-e7f-lab-east":{left:56,top:20,width:34,height:54},"zone-e7f-meeting-702":{left:14,top:22,width:28,height:28},"zone-e7f-office-west":{left:12,top:54,width:32,height:30},"zone-e7f-corridor":{left:41,top:38,width:15,height:26}},as=[{key:"lab_std",label:"标准实验层",items:[{suffix:"东侧实验区",category:"lab"},{suffix:"西侧实验区",category:"lab"},{suffix:"核心走廊与管井",category:"corridor"}]},{key:"office_std",label:"标准办公层",items:[{suffix:"开放办公区",category:"office"},{suffix:"会议室",category:"meeting"},{suffix:"公共走廊与茶水区",category:"corridor"}]},{key:"lobby_1f",label:"首层大堂",items:[{suffix:"入口大堂与展厅",category:"corridor"},{suffix:"配电与后勤机房",category:"utility"}]},{key:"roof_plant",label:"屋面设备层",items:[{suffix:"空调主机区",category:"utility"},{suffix:"水泵与排风设备区",category:"utility"}]}],Ss=["bacnet_ip","modbus_tcp","modbus_rtu","knx","mqtt","dali"];function Ta(e){return e.category!=="hvac"&&e.category!=="meter"}function Wa(e){const a=e.trim().toUpperCase();if(a==="RF"||a==="R"||a==="ROOF"||a.includes("屋面")||a.includes("屋顶")||a.includes("天面"))return 999;const t=a.match(/(-?\d+)/);if(!t)return 0;const n=Number(t[1]);return a.startsWith("B")||a.includes("地下")||a.includes("负")?-Math.abs(n):n}const Mt={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,十一:11,十二:12,十三:13,十四:14,十五:15,十六:16,十七:17,十八:18,十九:19,二十:20,二十一:21,二十二:22,二十三:23,二十四:24,二十五:25};function Sa(e){const a=e.trim(),t=a.toUpperCase();if(/(?:^|[-_\s/])(RF|ROOF)(?:[-_.\s]|$)/.test(t)||/屋面|屋顶|天面/.test(a))return"RF";const n=t.match(/(?:^|[-_\s/])B0*(\d+)(?:F)?(?:[-_.\s]|$)/);if(n)return`B${Number(n[1])}`;const o=a.match(/(?:地下|负)(0*\d+|[一二三四五六七八九十]+)(?:层|楼)?/);if(o){const b=/^\d+$/.test(o[1])?Number(o[1]):Mt[o[1]];if(b)return`B${b}`}if(/首层|一层/.test(a))return"1F";const l=a.match(/(0*\d+|[一二三四五六七八九十]+)(?:层|楼)/);if(l){const b=/^\d+$/.test(l[1])?Number(l[1]):Mt[l[1]];if(b)return`${b}F`}const d=t.match(/(?:^|[-_\s/])0*(\d+)F(?:[-_.\s]|$)/);return d?`${Number(d[1])}F`:null}function Za(e){return new Promise((a,t)=>{const n=new FileReader;n.onload=()=>typeof n.result=="string"?a(n.result):t(new Error("无法读取图片内容")),n.onerror=()=>t(new Error(`读取文件「${e.name}」失败`)),n.readAsDataURL(e)})}function Es(e){return e.category==="gateway"?e.name.includes("蓝牙")?"蓝牙适配器":"主控网关":e.category==="lighting"?e.name.includes("702")?"702 照明":e.name.length>9?`${e.name.slice(0,8)}…`:e.name:e.category==="hvac"?e.name.includes("VAV")?"VAV-02":e.name.includes("FCU")?"FCU-01":e.name.slice(0,8):e.category==="sensor"?"环境传感":e.name.length>9?`${e.name.slice(0,8)}…`:e.name}function ks(e,a){const t=e.status!=="connected",n=a.filter(o=>o.hardwareBinding?.protocol===e.protocol);return n.length>0?n.map(o=>{const l=o.connectivity==="offline"||t;return{pointName:o.category==="hvac"?"送风温度 / 阀门开度":o.category==="lighting"?"回路开关 / 亮度反馈":o.category==="sensor"?"温湿度 / CO₂ / 人感":"网关心跳 / 负载",deviceName:o.name,value:l?"无上报":o.category==="hvac"?"23.4°C ｜ 62%":o.category==="lighting"?"开启 ｜ 80%":o.category==="sensor"?"23.2°C ｜ 640 ppm":"负载 24% ｜ 18ms",interval:"60s",lastSeen:l?"46 分钟前":"12 秒前",quality:l?o.connectivity==="offline"?"offline":"delayed":"online"}}):[{pointName:`${e.protocol.toUpperCase()} 采集通道汇总点`,deviceName:e.name,value:t?"采样延迟":"正常上报",interval:"60s",lastSeen:t?"38 分钟前":"9 秒前",quality:t?"delayed":"online"}]}function rt(e,a){const t=new Set(a.map(o=>Sa(o.name)??o.name.toUpperCase())),n=[];for(let o=1;o<=e.aboveFloors;o+=1){const l=`${o}F`;t.has(l)||n.push({kind:"above",level:o,name:l})}for(let o=1;o<=e.belowFloors;o+=1){const l=`B${o}`;t.has(l)||n.push({kind:"below",level:-o,name:l})}return e.hasRoof&&!t.has("RF")&&n.push({kind:"roof",level:99,name:"RF"}),n}function na(e,a){return`<button type="button" class="dep-info-btn" data-dep-info="${s(a)}" aria-label="${s(e)}" aria-expanded="false">${re("info",14)}</button>`}function Ea(e,a,t="layers"){const n=!e||!a,o=e?a?"":"待后端空间建档接口对接":"当前角色为只读权限";return`
    <div class="dep-empty-card">
      <div class="dep-empty-icon">${re(t,20)}</div>
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
    </div>`}function Is(e,a,t){return e?a?"":`disabled title="${s(t)}"`:'disabled title="当前角色为只读权限"'}function xs(e){const{tree:a,canEdit:t,caps:n,connections:o}=e;if(a.projects.length===0)return Ea(t,n.spatial,"plug");const l=Is(t,n.manageConnections,"待后端系统接入写入接口对接"),d=o.reduce((k,A)=>k+A.collectedPoints,0),b=o.reduce((k,A)=>k+A.calculatedPoints,0),v=o.filter(k=>k.status==="connected").length,$=o.filter(k=>k.status!=="connected"),S=e.connSearch.trim().toLowerCase(),w=o.filter(k=>!(e.connStatusFilter!=="all"&&k.status!==e.connStatusFilter||S&&!`${k.name} ${k.protocol} ${k.endpoint}`.toLowerCase().includes(S))),h=Array.from(e.buildingDevicesByFloor.values()).flat(),m=h.length>0?h:e.floorDevices;return`
    <div class="pacom-kpi-strip" role="region" aria-label="系统接入健康度">
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">已连通通道</span>
        <div class="pacom-kpi-value">${v}<span class="pacom-kpi-unit">/ ${o.length}</span></div>
        <span class="pacom-kpi-delta">含边缘网关与非 Mesh 子系统</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">采集健康度</span>
        <div class="pacom-kpi-value">${o.length?Math.round(v/o.length*100):100}<span class="pacom-kpi-unit">%</span></div>
        <span class="pacom-kpi-delta">区分网关断流与末端真故障</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">原始采集点 ${na("原始采集点说明","直接通过 BACnet / Modbus / DALI / MQTT 等协议从现场网关或子系统读取的实时遥测点位数量。")}</span>
        <div class="pacom-kpi-value">${d}<span class="pacom-kpi-unit">点</span></div>
        <span class="pacom-kpi-delta">协议直采实时遥测</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">衍生计算点 ${na("衍生计算点说明","基于原始采集点聚合计算生成的虚拟指标（如分区平均温度、能耗累计、碳排换算），与原始点位独立计数。")}</span>
        <div class="pacom-kpi-value">${b}<span class="pacom-kpi-unit">点</span></div>
        <span class="pacom-kpi-delta">能耗与聚合虚拟点位</span>
      </div>
    </div>

    ${$.length>0?`<div class="pacom-banner pacom-banner--critical">
            <div class="pacom-banner-text">
              <span class="pacom-banner-title">检测到 ${$.length} 条采集通道通信降级（${s($.map(k=>k.name).join("、"))}）</span>
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
          <option value="connected" ${e.connStatusFilter==="connected"?"selected":""}>已连通（${v}）</option>
          <option value="degraded" ${e.connStatusFilter==="degraded"?"selected":""}>通信降级（${o.filter(k=>k.status==="degraded").length}）</option>
          <option value="disconnected" ${e.connStatusFilter==="disconnected"?"selected":""}>已断开（${o.filter(k=>k.status==="disconnected").length}）</option>
        </select>
      </div>
      <span class="pacom-row-sub">显示 ${w.length} / ${o.length} 条通道</span>
    </div>

    ${e.connViewMode==="list"?`
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
                ${w.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:36px 16px;"><strong>暂无匹配接入通道</strong><span>可调整筛选条件或点击右上角「+ 新增接入通道」。</span></div></td></tr>':w.map(k=>{const A=Ot[k.status]??{label:k.status,cls:"pacom-badge--neutral"},H=k.status==="connected"?98:k.status==="degraded"?62:0,x=e.expandedConnId===k.id,W=x?ks(k,m):[];return`
                            <tr>
                              <td><strong>${s(k.name)}</strong></td>
                              <td><span class="pacom-badge pacom-badge--neutral">${k.protocol.toUpperCase()}</span></td>
                              <td><code style="font-size:12px;">${s(k.endpoint)}</code></td>
                              <td>采集 ${k.collectedPoints} ｜ 计算 ${k.calculatedPoints}</td>
                              <td>
                                <div style="display:inline-flex; align-items:center; gap:8px;">
                                  <span class="pacom-badge ${A.cls}">${A.label}</span>
                                  <span class="pacom-row-sub" style="font-variant-numeric:tabular-nums;">${H}%</span>
                                </div>
                              </td>
                              <td>
                                <div style="display:flex; justify-content:flex-end; gap:6px;">
                                  <button type="button" class="pacom-btn pacom-btn--sm" data-expand-conn="${s(k.id)}">${x?"收起点位":"点位质量"}</button>
                                  <button type="button" class="pacom-btn pacom-btn--sm" data-ping-conn="${s(k.id)}">测通</button>
                                  <button type="button" class="pacom-btn pacom-btn--sm" data-copy-endpoint="${s(k.id)}" data-endpoint-val="${s(k.endpoint)}">${e.copiedEndpointId===k.id?"已复制":"复制"}</button>
                                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-conn="${s(k.id)}" ${l}>编辑</button>
                                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-del-conn="${s(k.id)}" ${l}>删除</button>
                                </div>
                              </td>
                            </tr>
                            ${x?`
                                <tr class="pacom-table-detail-row">
                                  <td colspan="6">
                                    <div style="display:flex; flex-direction:column; gap:8px;">
                                      <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
                                        <strong style="font-size:14px; font-weight:450;">传感器 / 子设备采集质量明细（${s(k.name)}）</strong>
                                        <span class="pacom-row-sub">在线正常 ｜ 延迟 &gt;30m ｜ 断流 &gt;3×间隔</span>
                                      </div>
                                      ${W.map(P=>`
                                          <div class="pacom-receipt-item">
                                            <span><strong>${s(P.deviceName)}</strong> ｜ ${s(P.pointName)}</span>
                                            <span style="display:inline-flex; align-items:center; gap:8px;">
                                              <span class="pacom-row-sub">当前 ${s(P.value)} ｜ ${s(P.lastSeen)}</span>
                                              <span class="pacom-badge ${P.quality==="online"?"pacom-badge--online":P.quality==="delayed"?"pacom-badge--warning":"pacom-badge--critical"}">
                                                ${P.quality==="online"?"在线正常":P.quality==="delayed"?"延迟 >30m":"断流"}
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
            ${m.filter(k=>k.category==="gateway").length===0?'<div class="pacom-row-sub">当前范围暂未登记边缘网关。</div>':m.filter(k=>k.category==="gateway").map(k=>`
                      <div class="dep-topo-node" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong>${s(k.name)}</strong>
                          <span class="pacom-badge ${k.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${k.connectivity==="online"?"在线":"离线"}</span>
                        </div>
                        <span class="pacom-row-sub">${s(k.hardwareBinding?.networkAddress??"局域网直连")}</span>
                      </div>`).join("")}
          </div>
          <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${re("chevron-right",12)}</span></div>
          <div class="dep-topo-col">
            <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 协议接入通道（${w.length}）</strong>
            ${w.length===0?'<div class="pacom-row-sub">暂无匹配接入通道。</div>':w.map(k=>{const A=Ot[k.status]??{label:k.status,cls:"pacom-badge--neutral"};return`
                        <button type="button" class="dep-topo-node ${k.status!=="connected"?"is-issue":""}" data-ping-conn="${s(k.id)}">
                          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                            <strong>${s(k.name)}</strong>
                            <span class="pacom-badge ${A.cls}">${A.label}</span>
                          </div>
                          <span class="pacom-row-sub">${k.protocol.toUpperCase()} ｜ ${s(k.endpoint)}</span>
                        </button>`}).join("")}
          </div>
          <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${re("chevron-right",12)}</span></div>
          <div class="dep-topo-col">
            <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 点位采集汇总</strong>
            ${w.length===0?'<div class="pacom-row-sub">无已映射点位。</div>':w.map(k=>`
                      <div class="dep-topo-node ${k.status!=="connected"?"is-issue":""}" style="cursor:default;">
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong>${s(k.name)}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${k.collectedPoints+k.calculatedPoints} 点</span>
                        </div>
                        <span class="pacom-row-sub">原始采集 ${k.collectedPoints} 点 ｜ 衍生计算 ${k.calculatedPoints} 点</span>
                      </div>`).join("")}
          </div>
        </div>`}
  `}function _s(e){const{tree:a,canEdit:t,caps:n}=e;if(a.projects.length===0)return Ea(t,n.spatial,"clipboard-check");const o=e.activeBuildingId?e.sortedBuildingFloors(e.activeBuildingId):[],l=o.filter(x=>!!x.plan).length,d=o.flatMap(x=>e.buildingDevicesByFloor.get(x.id)??[]),b=d.filter(x=>!!x.planPoint).length,v=d.filter(x=>x.connectivity==="online").length,$=d.filter(x=>x.physicalInstalled).length,S=o.filter(x=>(e.buildingDevicesByFloor.get(x.id)?.length??0)>0).length,w=e.edgeSync.dirty?Math.max(0,S-1):S,h=x=>{const W=e.buildingDevicesByFloor.get(x.id)??[];return!!x.plan&&W.length>0&&W.every(P=>!!P.planPoint&&P.physicalInstalled&&P.connectivity==="online")&&!(x.id===e.activeFloorId&&e.edgeSync.dirty)},m=o.filter(x=>(e.buildingDevicesByFloor.get(x.id)?.length??0)>0),k=o.filter(x=>!x.plan||!h(x)),A=e.acceptanceFilter==="active"&&m.length===0?"all":e.acceptanceFilter,H=A==="active"?m:A==="pending"?k:o;return`
    <div class="pacom-kpi-strip pacom-kpi-strip--5" role="region" aria-label="整栋 5 步部署门控">
      <button type="button" class="pacom-kpi-cell" data-dep-nav="project_config" style="border:0; background:transparent; text-align:left; cursor:pointer;">
        <span class="pacom-kpi-label"><span class="pacom-dot ${o.length>0&&l===o.length?"pacom-dot--online":"pacom-dot--warning"}"></span>1. 项目与底图</span>
        <div class="pacom-kpi-value">${l}<span class="pacom-kpi-unit">/ ${o.length} 层</span></div>
        <span class="pacom-kpi-delta">${o.length>0&&l===o.length?"全部底图就绪":`尚缺 ${Math.max(0,o.length-l)} 层底图 →`}</span>
      </button>
      <button type="button" class="pacom-kpi-cell" data-dep-nav="device_marking" style="border:0; background:transparent; text-align:left; cursor:pointer;">
        <span class="pacom-kpi-label"><span class="pacom-dot ${d.length>0&&b===d.length?"pacom-dot--online":"pacom-dot--warning"}"></span>2. 设备标记</span>
        <div class="pacom-kpi-value">${b}<span class="pacom-kpi-unit">/ ${d.length} 台</span></div>
        <span class="pacom-kpi-delta">${d.length-b>0?`未标记 ${d.length-b} 台 →`:"坐标已全部标记"}</span>
      </button>
      <button type="button" class="pacom-kpi-cell" data-dep-nav="device_network" style="border:0; background:transparent; text-align:left; cursor:pointer;">
        <span class="pacom-kpi-label"><span class="pacom-dot ${d.length>0&&v===d.length?"pacom-dot--online":"pacom-dot--warning"}"></span>3. 入网在线</span>
        <div class="pacom-kpi-value">${v}<span class="pacom-kpi-unit">/ ${d.length} 台</span></div>
        <span class="pacom-kpi-delta">${d.length-v>0?`${d.length-v} 台离线 →`:"全量在线"}</span>
      </button>
      <button type="button" class="pacom-kpi-cell" data-dep-nav="device_network" style="border:0; background:transparent; text-align:left; cursor:pointer;">
        <span class="pacom-kpi-label"><span class="pacom-dot ${!e.edgeSync.dirty&&S>0?"pacom-dot--online":"pacom-dot--warning"}"></span>4. 边缘同步</span>
        <div class="pacom-kpi-value">${w}<span class="pacom-kpi-unit">/ ${S||o.length} 层</span></div>
        <span class="pacom-kpi-delta">${e.edgeSync.dirty?"有变更待下发 →":`基线 v${e.edgeSync.version}`}</span>
      </button>
      <button type="button" class="pacom-kpi-cell" data-dep-nav="device_list" style="border:0; background:transparent; text-align:left; cursor:pointer;">
        <span class="pacom-kpi-label"><span class="pacom-dot ${d.length>0&&$===d.length?"pacom-dot--online":"pacom-dot--warning"}"></span>5. 复核自检</span>
        <div class="pacom-kpi-value">${$}<span class="pacom-kpi-unit">/ ${d.length} 台</span></div>
        <span class="pacom-kpi-delta">${d.length>0&&$===d.length?"可交付冻结":`待复核 ${d.length-$} 台 →`}</span>
      </button>
    </div>

    ${e.batchFttResult?`<div class="pacom-banner ${e.batchFttResult.failed===0?"pacom-banner--ok":"pacom-banner--critical"}">
            <div class="pacom-banner-text">
              <span class="pacom-banner-title">最近全层自检（FTT ｜ ${s(e.batchFttResult.floorName)} ｜ ${e.batchFttResult.ranAt}）</span>
              <span class="pacom-banner-sub">通过 ${e.batchFttResult.passed}/${e.batchFttResult.total} 台${e.batchFttResult.failedNames.length?` ｜ 异常：${s(e.batchFttResult.failedNames.join("、"))}`:" ｜ 全部安全复位"}</span>
            </div>
          </div>`:""}

    <section class="pacom-section">
      <div class="pacom-section-head">
        <div>
          <h2 class="pacom-section-title">楼层 × 工序交付门控矩阵</h2>
          <span class="pacom-row-sub">点击任意单元格直达该层修复；默认聚焦实施中楼层</span>
        </div>
        <div class="pacom-tabs" role="tablist" aria-label="验收楼层筛选">
          <button type="button" class="pacom-tab" role="tab" aria-selected="${A==="active"}" data-acc-filter="active">实施中 ${m.length}</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${A==="pending"}" data-acc-filter="pending">待补缺项 ${k.length}</button>
          <button type="button" class="pacom-tab" role="tab" aria-selected="${A==="all"}" data-acc-filter="all">全部楼层 ${o.length}</button>
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
              ${H.length===0?'<tr><td colspan="7"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>当前筛选无楼层</strong><span>可切换至「全部楼层」查看整栋状态，或在「项目配置」中建档。</span></div></td></tr>':H.map(x=>{const W=e.buildingDevicesByFloor.get(x.id)??[],P=a.zones.filter(de=>de.floorId===x.id),me=W.filter(de=>!!de.planPoint).length,ue=W.filter(de=>de.connectivity==="online").length,ve=W.filter(de=>de.physicalInstalled).length,pe=!!x.plan,ie=h(x);return`
                          <tr>
                            <td>
                              <strong>${s(x.name)}</strong>
                              <div class="pacom-row-sub">${x.areaSqm?`${x.areaSqm} m²`:"待补面积"}</div>
                            </td>
                            <td>
                              <button type="button" class="dep-matrix-btn" data-matrix-nav="project_config" data-matrix-floor="${s(x.id)}">
                                <span class="pacom-dot ${pe?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                <span>${pe?`已传图 ｜ ${P.length} 区`:"待传底图"}</span>
                              </button>
                            </td>
                            <td>
                              <button type="button" class="dep-matrix-btn" data-matrix-nav="device_marking" data-matrix-floor="${s(x.id)}">
                                <span class="pacom-dot ${W.length>0&&me===W.length?"pacom-dot--online":W.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span>
                                <span>${W.length>0?`${me}/${W.length}`:"未标记"}</span>
                              </button>
                            </td>
                            <td>
                              <button type="button" class="dep-matrix-btn" data-matrix-nav="device_network" data-matrix-floor="${s(x.id)}">
                                <span class="pacom-dot ${W.length>0&&ue===W.length?"pacom-dot--online":W.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span>
                                <span>${W.length>0?`${ue}/${W.length}`:"—"}</span>
                              </button>
                            </td>
                            <td>
                              <button type="button" class="dep-matrix-btn" data-matrix-nav="device_list" data-matrix-floor="${s(x.id)}">
                                <span class="pacom-dot ${W.length>0&&ve===W.length?"pacom-dot--online":W.length>0?"pacom-dot--warning":"pacom-dot--offline"}"></span>
                                <span>${W.length>0?`${ve}/${W.length}`:"—"}</span>
                              </button>
                            </td>
                            <td>
                              <span class="pacom-badge ${ie?"pacom-badge--online":W.length>0?"pacom-badge--warning":"pacom-badge--neutral"}">${ie?"可验收交付":W.length>0?"实施中":"待配置"}</span>
                            </td>
                            <td>
                              <div style="display:flex; justify-content:flex-end; gap:6px;">
                                <button type="button" class="pacom-btn pacom-btn--sm" data-floor-ftt="${s(x.id)}" ${W.length===0?"disabled":""}>自检</button>
                                <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-open-freeze-floor="${s(x.id)}" ${!t||W.length===0?`disabled title="${t?"本层尚无设备":"当前角色为只读权限"}"`:""}>冻结</button>
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
          <span>交付冻结基线记录</span>
          ${na("交付冻结说明","冻结操作会为目标楼层生成不可篡改的配置与物理核验快照版本号，用于工程移交与后续运行期变更比对。")}
        </h2>
        <span class="pacom-row-sub">共 ${e.deliveries.length} 条冻结快照</span>
      </div>
      <div class="pacom-table-card">
        <div class="pacom-table-wrap">
          <table class="pacom-table">
            <thead>
              <tr>
                <th>版本标签</th>
                <th>所属楼层</th>
                <th>现场核验进度</th>
                <th>冻结人与备注</th>
                <th style="text-align:right;">状态</th>
              </tr>
            </thead>
            <tbody>
              ${e.deliveries.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:28px 16px;"><strong>暂无交付冻结记录</strong><span>完成设备复核与自检后，点击右上角「交付冻结」生成首条基线快照。</span></div></td></tr>':e.deliveries.map(x=>{const W=a.floors.find(P=>P.id===x.floorId)?.name??x.floorId;return`
                          <tr>
                            <td>
                              <div style="font-weight:450;">${s(x.versionTag)}</div>
                              <div class="pacom-row-sub"><code>${s(x.id)}</code></div>
                            </td>
                            <td>${s(W)}</td>
                            <td><strong>${x.verifiedCount}</strong> / ${x.deviceCount} 台</td>
                            <td>
                              <div>${s(x.frozenBy)}</div>
                              <div class="pacom-row-sub">${s(x.note??"—")}</div>
                            </td>
                            <td style="text-align:right;"><span class="pacom-badge pacom-badge--accent">${$s[x.status]??x.status}</span></td>
                          </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `}function Ls(e){const{tree:a,canEdit:t,caps:n}=e,o=[],l=a.projects.find(v=>v.id===e.activeProjectId)??a.projects[0]??null,d=a.buildings.find(v=>v.id===e.activeBuildingId)??(l?a.buildings.find(v=>v.projectId===l.id):null)??null;if(e.showNewProjectModal&&o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建项目">
        <form class="dep-modal-card" data-create-project="1">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">新建项目</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
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
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!t||!n.spatial?"disabled":""}>创建项目</button>
            </div>
          </div>
        </form>
      </div>`),e.showEditProjectModal&&l){const $=a.buildings.filter(S=>S.projectId===l.id).reduce((S,w)=>S+e.sortedBuildingFloors(w.id).reduce((h,m)=>h+(e.buildingDevicesByFloor.get(m.id)?.length??0),0),0);o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑项目">
        <form class="dep-modal-card" data-save-project="${s(l.id)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">编辑项目：${s(l.name)}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            <div style="display:flex; align-items:center; gap:14px; padding:12px; border-radius:12px; background:var(--pacom-surface-primary); box-shadow:inset 0 0 0 var(--hw) var(--pacom-border-subtle);">
              <img src="${s(l.imageUrl??"./media/gzlab.jpg")}" alt="${s(l.name)}" style="width:84px; height:54px; object-fit:cover; border-radius:8px;" />
              <div style="flex:1; min-width:0;">
                <div style="font-size:14px; font-weight:450;">项目封面图</div>
                <div class="pacom-row-sub">用于空间总览的园区俯瞰展示</div>
              </div>
              <label class="pacom-btn" style="cursor:${!t||!n.spatial?"not-allowed":"pointer"}; opacity:${!t||!n.spatial?"0.45":"1"};">
                <span>更换封面</span>
                <input type="file" name="projCoverUpload" accept="image/*" data-upload-proj="${s(l.id)}" style="display:none;" ${!t||!n.spatial?"disabled":""} />
              </label>
            </div>
            <div class="dep-param-grid">
              <label class="dep-field"><span class="dep-field-label">项目名称</span><input class="pacom-input" name="pName" value="${s(l.name)}" required ${t?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">所在城市</span><input class="pacom-input" name="pCity" value="${s(l.city??"")}" ${t?"":"disabled"} /></label>
              <label class="dep-field" style="grid-column:span 2;"><span class="dep-field-label">详细地址</span><input class="pacom-input" name="pAddr" value="${s(l.address??"")}" ${t?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">经度 (Lng)</span><input class="pacom-input" name="pLng" type="number" step="0.0001" min="-180" max="180" value="${s(l.location?.lng??"")}" ${t?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">纬度 (Lat)</span><input class="pacom-input" name="pLat" type="number" step="0.0001" min="-90" max="90" value="${s(l.location?.lat??"")}" ${t?"":"disabled"} /></label>
            </div>
          </div>
          <div class="dep-modal-foot">
            <button type="button" class="pacom-btn pacom-btn--danger" data-delete-proj="${s(l.id)}" ${!t||!n.spatial||$>0?`disabled title="${$>0?`包含 ${$} 台运行中设备，请先解绑后再删除`:"当前角色只读"}"`:""}>删除项目</button>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!t||!n.spatial?"disabled":""}>保存更改</button>
            </div>
          </div>
        </form>
      </div>`)}e.showNewBuildingModal&&l&&o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新建楼宇">
        <form class="dep-modal-card" data-create-bld="${s(l.id)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">新建楼宇（${s(l.name)}）</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
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
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!t||!n.spatial?"disabled":""}>创建楼宇</button>
            </div>
          </div>
        </form>
      </div>`);const b=e.editingBuildingId?a.buildings.find(v=>v.id===e.editingBuildingId)??null:null;if(b){const v=e.sortedBuildingFloors(b.id),$=v.reduce((w,h)=>w+(e.buildingDevicesByFloor.get(h.id)?.length??0),0),S=rt(b,v);o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="编辑楼宇">
        <form class="dep-modal-card" data-save-building="${s(b.id)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">编辑楼宇：${s(b.name)}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            <div style="display:flex; align-items:center; gap:14px; padding:12px; border-radius:12px; background:var(--pacom-surface-primary); box-shadow:inset 0 0 0 var(--hw) var(--pacom-border-subtle);">
              <img src="${s(b.imageUrl??"./media/building-e.webp")}" alt="${s(b.name)}" style="width:72px; height:54px; object-fit:contain; border-radius:8px; background:#ffffff;" />
              <div style="flex:1; min-width:0;">
                <div style="font-size:14px; font-weight:450;">楼宇外观 / 白模图</div>
                <div class="pacom-row-sub">支持透明 PNG / WebP / JPG</div>
              </div>
              <label class="pacom-btn" style="cursor:${!t||!n.spatial?"not-allowed":"pointer"}; opacity:${!t||!n.spatial?"0.45":"1"};">
                <span>替换图片</span>
                <input type="file" name="bldImgUpload" accept="image/*" data-upload-bld="${s(b.id)}" style="display:none;" ${!t||!n.spatial?"disabled":""} />
              </label>
            </div>
            <div class="dep-param-grid">
              <label class="dep-field"><span class="dep-field-label">楼宇名称</span><input class="pacom-input" name="bName" value="${s(b.name)}" required ${t?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">建筑面积 (m²)</span><input class="pacom-input" name="bArea" type="number" step="0.1" value="${s(b.areaSqm??"")}" placeholder="选填" ${t?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">地上层数</span><input class="pacom-input" name="bAbove" type="number" min="1" max="80" value="${b.aboveFloors}" ${t?"":"disabled"} /></label>
              <label class="dep-field"><span class="dep-field-label">地下层数</span><input class="pacom-input" name="bBelow" type="number" min="0" max="10" value="${b.belowFloors}" ${t?"":"disabled"} /></label>
            </div>
            <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
              <label style="display:inline-flex; align-items:center; gap:8px; font-size:14px; cursor:pointer;"><input type="checkbox" name="bRoof" ${b.hasRoof?"checked":""} ${t?"":"disabled"} />含屋面层 (RF)</label>
              ${S.length>0?`<button type="button" class="pacom-btn pacom-btn--sm" data-fill-missing-floors="${s(b.id)}" ${!t||!n.spatial?"disabled":""}>一键补齐缺失 ${S.length} 层</button>`:`<span class="pacom-row-sub">已登记 ${v.length} 个楼层</span>`}
            </div>
          </div>
          <div class="dep-modal-foot">
            <button type="button" class="pacom-btn pacom-btn--danger" data-delete-building="${s(b.id)}" ${!t||!n.spatial||$>0?`disabled title="${$>0?"包含运行中设备，请先解绑后再删除":"当前角色只读"}"`:""}>删除楼宇</button>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!t||!n.spatial?"disabled":""}>保存更改</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.showNewFloorModal&&d&&o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增楼层">
        <form class="dep-modal-card dep-modal-card--sm" data-create-floor="${s(d.id)}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">新增楼层（${s(d.name)}）</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
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
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!t||!n.spatial?"disabled":""}>确认新增</button>
            </div>
          </div>
        </form>
      </div>`),e.showBatchModal&&d){const v=e.sortedBuildingFloors(d.id),$=e.pendingBatchUploads.filter(S=>!!S.matchedFloorId).length;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="批量导入平面底图">
        <div class="dep-modal-card dep-modal-card--wide">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">批量导入 ${s(d.name)} 平面底图</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            <div class="dep-upload-drop" data-batch-dropzone="${s(d.id)}" style="padding:22px; flex-direction:column; align-items:center; text-align:center; gap:8px; ${e.batchDropActive?"border-color:var(--pacom-accent-solid); background:var(--pacom-accent-soft);":""}">
              <strong style="font-size:14px; font-weight:450;">拖拽多张平面图到此区域，或点击选择文件</strong>
              <span class="pacom-row-sub">自动识别 01F、首层、屋面、RF、B1 等中英文文件名，支持手动调整目标楼层</span>
              <label class="pacom-btn" style="cursor:${!t||!n.spatial?"not-allowed":"pointer"}; margin-top:4px; opacity:${!t||!n.spatial?"0.45":"1"};">
                <span>选择多张图片</span>
                <input type="file" name="batchFloorPlans" accept="image/*" multiple data-batch-upload-floors="${s(d.id)}" style="display:none;" ${!t||!n.spatial?"disabled":""} />
              </label>
            </div>
            ${e.pendingBatchUploads.length>0?`<div style="display:flex; flex-direction:column; gap:8px;">
                    <div class="pacom-row-sub">已选 ${e.pendingBatchUploads.length} 张图片，已匹配 ${$} 层：</div>
                    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:8px; max-height:240px; overflow-y:auto;">
                      ${e.pendingBatchUploads.map(S=>`
                          <div class="pacom-receipt-item" style="padding:8px 10px; gap:8px;">
                            <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1; font-size:14px;" title="${s(S.file.name)}">${s(S.file.name)}</span>
                            <select class="pacom-select" name="overrideFloor_${s(S.id)}" style="width:104px; flex:none;" data-batch-override-floor="${s(S.id)}" aria-label="指定目标楼层">
                              <option value="">未分配</option>
                              ${v.map(w=>`<option value="${s(w.id)}" ${S.matchedFloorId===w.id?"selected":""}>${s(w.name)}</option>`).join("")}
                            </select>
                          </div>`).join("")}
                    </div>
                  </div>`:""}
          </div>
          <div class="dep-modal-foot">
            <button type="button" class="pacom-btn pacom-btn--ghost" data-cancel-batch-upload="1" ${e.pendingBatchUploads.length===0?"disabled":""}>清空已选</button>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="button" class="pacom-btn pacom-btn--primary" data-confirm-batch-upload="1" ${$===0||!t||!n.spatial?"disabled":""}>确认导入（${$} 层）</button>
            </div>
          </div>
        </div>
      </div>`)}if(e.copyZoneSourceFloorId&&d){const v=a.floors.find(S=>S.id===e.copyZoneSourceFloorId),$=e.sortedBuildingFloors(d.id).filter(S=>S.id!==e.copyZoneSourceFloorId);v&&$.length>0&&o.push(`
        <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="复用功能区至其他楼层">
          <div class="dep-modal-card">
            <div class="dep-modal-head">
              <h3 class="dep-modal-title">复用 ${s(v.name)} 功能区至其他楼层</h3>
              <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
            </div>
            <div class="dep-modal-body">
              <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                <span class="pacom-row-sub">勾选目标楼层（已选 ${e.copyTargetFloorIds.size} 层）</span>
                <div style="display:flex; gap:6px;">
                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="empty">空白地上层</button>
                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="above">全部地上层</button>
                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-copy-preset="clear">清空</button>
                </div>
              </div>
              <div style="display:flex; flex-wrap:wrap; gap:8px;">
                ${$.map(S=>{const w=e.copyTargetFloorIds.has(S.id),h=a.zones.filter(m=>m.floorId===S.id).length;return`
                      <label class="pacom-btn pacom-btn--sm" style="cursor:pointer; ${w?"box-shadow:0 0 0 1.5px var(--pacom-accent-solid);":""}">
                        <input type="checkbox" name="copyFloor_${s(S.id)}" data-copy-target-floor="${s(S.id)}" ${w?"checked":""} style="margin:0;" />
                        <span>${s(S.name)}${h>0?` (${h}区)`:""}</span>
                      </label>`}).join("")}
              </div>
            </div>
            <div class="dep-modal-foot">
              <span></span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
                <button type="button" class="pacom-btn pacom-btn--primary" data-confirm-copy-zones="${s(v.id)}" ${e.copyTargetFloorIds.size===0||!t||!n.spatial?"disabled":""}>确认复制（${e.copyTargetFloorIds.size} 层）</button>
              </div>
            </div>
          </div>
        </div>`)}if(e.showNewDevModal){const v=a.zones.filter($=>$.floorId===e.activeFloorId);o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="新增设备">
        <form class="dep-modal-card" data-create-dev="1">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">新增设备</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            <label class="dep-field">
              <span class="dep-field-label">设备名称</span>
              <input class="pacom-input" name="devName" placeholder="如：703 会议室三控面板" required />
            </label>
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">设备类型</span>
                <select class="pacom-select" name="devPreset">${wt.map($=>`<option value="${$.key}">${$.label}</option>`).join("")}</select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">所属功能区</span>
                <select class="pacom-select" name="devZone">
                  <option value="">暂不分配</option>
                  ${v.map($=>`<option value="${s($.id)}">${s($.name)}</option>`).join("")}
                </select>
              </label>
            </div>
            <span class="pacom-row-sub">创建后将按设备类型预设蓝牙 Mesh 角色与初始坐标，并标记本层待同步边缘。</span>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!t||!n.createDevice?"disabled":""}>确认新增</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.groupModal){const v=e.groupModal.mode==="edit"&&e.groupModal.groupId?e.groups.find(m=>m.id===e.groupModal.groupId)??null:null,$=e.groupModal.track,S=new Set(v?.deviceIds??[]),w=new Set(e.floorDevices.filter(m=>m.category==="gateway").map(m=>m.id));$==="mesh_auto"&&w.forEach(m=>S.add(m));const h=$==="mesh_auto"?e.floorDevices.filter(Ta):e.floorDevices;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="${v?"编辑设备分组":"新建设备分组"}">
        <form class="dep-modal-card" data-save-group="${s(v?.id??"")}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">${v?"编辑设备分组":"新建设备分组"}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            <label class="dep-field">
              <span class="dep-field-label">分组名称</span>
              <input class="pacom-input" name="gName" placeholder="如：7F 西侧办公区联动组" value="${s(v?.name??"")}" required />
            </label>
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">运行模式</span>
                <select class="pacom-select" name="gTrack" data-group-modal-track="1">
                  <option value="mesh_auto" ${$==="mesh_auto"?"selected":""}>端侧 Mesh 自治组</option>
                  <option value="cloud_biz" ${$==="cloud_biz"?"selected":""}>云端业务分组</option>
                </select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">分组类别</span>
                <select class="pacom-select" name="gType">
                  ${["灯光联动组（传感-面板）","调光器群控组","空调业务组","行政 / 标牌管控组"].map(m=>`<option value="${m}" ${v?.groupType===m?"selected":""}>${m}</option>`).join("")}
                </select>
              </label>
            </div>
            <div class="dep-field">
              <span class="dep-field-label">
                <span>编排分组成员（本层可选 ${h.length} 台）</span>
                ${na("分组成员规则","端侧蓝牙 Mesh 自治组会自动锁定纳入本层网关 / 蓝牙适配器，避免离线回读漏报；云端业务分组可自由混选本层所有设备。")}
              </span>
              <div class="dep-check-list">
                ${h.length===0?'<div class="pacom-row-sub" style="padding:12px; text-align:center;">本层暂无可选设备，请先在「设备标记」或「设备列表」中新增设备。</div>':h.map(m=>{const k=$==="mesh_auto"&&w.has(m.id),A=S.has(m.id);return`
                            <label class="dep-check-item">
                              <span style="display:inline-flex; align-items:center; gap:8px; min-width:0;">
                                <input type="checkbox" name="gMemberIds" value="${s(m.id)}" ${A?"checked":""} ${k?"disabled":""} />
                                ${k?`<input type="hidden" name="gMemberIds" value="${s(m.id)}" />`:""}
                                <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${s(m.name)}</span>
                              </span>
                              <span class="pacom-badge ${k?"pacom-badge--accent":"pacom-badge--neutral"}">${k?"自动纳入":Fa[m.category]}</span>
                            </label>`}).join("")}
              </div>
            </div>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!t||!n.deviceGroups?"disabled":""}>${v?"保存分组":"创建分组"}</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.connModal){const v=e.connModal.mode==="edit"&&e.connModal.connectionId?e.connections.find($=>$.id===e.connModal.connectionId)??null:null;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="${v?"编辑接入通道":"新增接入通道"}">
        <form class="dep-modal-card" data-save-conn="${s(v?.id??"")}">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">${v?"编辑接入通道":"新增子系统接入通道"}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            <label class="dep-field">
              <span class="dep-field-label">通道名称</span>
              <input class="pacom-input" name="cName" placeholder="如：E栋 8F 中央空调网关" value="${s(v?.name??"")}" required />
            </label>
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">协议类型</span>
                <select class="pacom-select" name="cProto">
                  ${[["bacnet_ip","空调 / BACnet IP"],["modbus_tcp","电表 / Modbus TCP"],["modbus_rtu","RS485 / Modbus RTU"],["dali","照明 / DALI-2"],["mqtt","空气质量 / MQTT"],["knx","楼宇总线 / KNX"]].map(([$,S])=>`<option value="${$}" ${v?.protocol===$?"selected":""}>${S}</option>`).join("")}
                </select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">网关端点</span>
                <input class="pacom-input" name="cEndpoint" placeholder="如：10.7.8.20:47808" value="${s(v?.endpoint??"")}" required />
              </label>
            </div>
            <span class="pacom-row-sub">提交时将自动检测同项目局域网端点冲突并执行连通校验。</span>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${!t||!n.manageConnections?"disabled":""}>${v?"保存通道":"校验并接入"}</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.showFreezeModal){const v=a.floors.find(H=>H.id===e.activeFloorId),$=v?a.buildings.find(H=>H.id===v.buildingId):null,S=e.buildingDevicesByFloor.get(e.activeFloorId)??e.floorDevices,w=S.filter(H=>!H.planPoint).length,h=S.filter(H=>H.connectivity==="offline").length,m=S.filter(H=>!H.physicalInstalled).length,k=S.length-m,A=w>0||h>0||m>0;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="确认交付冻结">
        <form class="dep-modal-card" data-confirm-freeze="1">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">
              <span>确认交付冻结</span>
              ${na("冻结快照机制","生成冻结快照后将锁定当前楼层的设备点位与物理核验台账版本，供工程移交归档使用。")}
            </h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
          </div>
          <div class="dep-modal-body">
            <div class="pacom-receipt-item" style="background:var(--pacom-surface-primary);">
              <span>目标楼层：<strong>${s($?.name??"")} ${s(v?.name??"当前楼层")}</strong></span>
              <span class="pacom-badge ${A?"pacom-badge--warning":"pacom-badge--online"}">已复核 ${k}/${S.length} 台</span>
            </div>
            ${A?`<div class="pacom-banner pacom-banner--critical" style="padding:12px 14px;">
                     <div class="pacom-banner-text">
                       <span class="pacom-banner-title">检测到待完成核验项</span>
                       <span class="pacom-banner-sub">未标记 ${w} 台 ｜ 离线 ${h} 台 ｜ 待物理复核 ${m} 台（仍可归档为阶段性基线快照并附注说明）。</span>
                     </div>
                   </div>`:`<div class="pacom-banner pacom-banner--ok" style="padding:12px 14px;">
                     <div class="pacom-banner-text">
                       <span class="pacom-banner-title">全部设备已满足交付验收条件</span>
                       <span class="pacom-banner-sub">${S.length} 台设备均已完成图上标记、在线连通与现场物理复核。</span>
                     </div>
                   </div>`}
            <label class="dep-field">
              <span class="dep-field-label">冻结备注</span>
              <input class="pacom-input" name="freezeNote" placeholder="如：首期调试验收基线冻结" value="${A?"阶段性交付基线冻结（待补齐剩余核验项）":"全层自检通过，正式交付冻结"}" />
            </label>
          </div>
          <div class="dep-modal-foot">
            <span></span>
            <div style="display:flex; gap:8px;">
              <button type="button" class="pacom-btn" data-close-modals="1">取消</button>
              <button type="submit" class="pacom-btn pacom-btn--primary" ${t?"":"disabled"}>生成冻结快照</button>
            </div>
          </div>
        </form>
      </div>`)}if(e.confirmDialog){const v=e.confirmDialog;o.push(`
      <div class="dep-modal-scrim" data-modal-scrim="1" role="dialog" aria-modal="true" aria-label="${s(v.title)}">
        <div class="dep-modal-card dep-modal-card--sm">
          <div class="dep-modal-head">
            <h3 class="dep-modal-title">${s(v.title)}</h3>
            <button type="button" class="pacom-drawer-close" data-close-modals="1" aria-label="关闭">${re("x",16)}</button>
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
      </div>`),o.join("")}function As(){let e=null,a=null;function t(){e&&(e.setAttribute("aria-expanded","false"),e=null),a&&(a.remove(),a=null)}function n(v,$){const S=v.getBoundingClientRect(),w=$.getBoundingClientRect(),h=16,m=8;let k=S.left+S.width/2-w.width/2;k=Math.max(h,Math.min(window.innerWidth-w.width-h,k));let A=S.bottom+m;A+w.height+h>window.innerHeight&&(A=S.top-w.height-m),A=Math.max(h,Math.min(window.innerHeight-w.height-h,A)),$.style.left=`${Math.round(k)}px`,$.style.top=`${Math.round(A)}px`}function o(v){const $=v.dataset.depInfo?.trim();if(!$)return;if(e===v){t();return}t(),e=v,v.setAttribute("aria-expanded","true");const S=document.createElement("div");S.className="pacom-info-popover",S.setAttribute("role","tooltip"),S.textContent=$,document.body.appendChild(S),a=S,n(v,S)}const l=v=>{const $=v.target;a&&(a.contains($)||e?.contains($))||t()},d=v=>{v.key==="Escape"&&a&&t()},b=()=>{e&&a&&(document.body.contains(e)?n(e,a):t())};return document.addEventListener("click",l),document.addEventListener("keydown",d),window.addEventListener("resize",b),window.addEventListener("scroll",b,!0),{bind(v){e&&!document.body.contains(e)&&t(),v.querySelectorAll("[data-dep-info]").forEach($=>{$.addEventListener("click",S=>{S.preventDefault(),S.stopPropagation(),o($)})})},close:t,destroy(){t(),document.removeEventListener("click",l),document.removeEventListener("keydown",d),window.removeEventListener("resize",b),window.removeEventListener("scroll",b,!0)}}}function tt(e,a,t){return e?a?"":`disabled title="${s(t)}"`:'disabled title="当前角色为只读权限"'}function ts(e,a=!1){if(!e.drawerOpen||e.activeNav!=="device_marking"&&e.activeNav!=="device_list")return"";const t=e.floorDevices.find(w=>w.id===e.selectedId)??null;if(!t)return"";const{canEdit:n,caps:o}=e,l=e.meshRoles[t.id]??{proxy:!1,relay:!1,meshUuid:`mesh-${e.activeFloorId.slice(-4)}`},d=e.lightMarkers.filter(w=>w.deviceId===t.id),b=e.deviceParams.get(t.id)??{offDelayMin:15,restoreMin:30,luxOn:280,luxOff:450},v=tt(n,o.lightMarkers,"待后端回路灯点接口对接"),$=tt(n,o.meshRoles,"待后端蓝牙 Mesh 接口对接"),S=tt(n,o.deviceParams,"待后端自治参数下发接口对接");return`
    <aside class="dep-docked-drawer ${a?"dep-docked-drawer--sticky":""}" aria-label="设备配置抽屉">
      <div class="pacom-drawer-head">
        <div style="min-width:0;">
          <h3 class="pacom-drawer-title">${s(t.name)}</h3>
          <div class="pacom-row-sub">${s(e.getZoneLabel(t.logicalZoneId))} ｜ ${s(Fa[t.category])} ｜ v${t.version}</div>
        </div>
        <button type="button" class="pacom-drawer-close" data-close-sel="1" aria-label="收起抽屉">${re("x",16)}</button>
      </div>

      <div style="display:flex; gap:6px; flex-wrap:wrap;">
        <button type="button" class="pacom-btn pacom-btn--sm" data-toggle-place="1" ${n?"":'disabled title="当前角色为只读权限"'}>${e.placingMode?"点击图纸落点中…":"点图更新坐标"}</button>
        <button type="button" class="pacom-btn pacom-btn--sm" data-ping-dev="${s(t.id)}">Ping 闪灯</button>
        <button type="button" class="pacom-btn pacom-btn--sm" data-ftt-test="1">单机自检</button>
      </div>

      <div class="pacom-tabs" role="tablist" aria-label="设备配置分页" style="align-self:flex-start;">
        <button type="button" class="pacom-tab" role="tab" aria-selected="${e.drawerTab==="binding"}" data-drawer-tab="binding">绑定与安装</button>
        <button type="button" class="pacom-tab" role="tab" aria-selected="${e.drawerTab==="params"}" data-drawer-tab="params">自治参数</button>
      </div>

      ${e.drawerTab==="binding"?`
          ${t.category==="lighting"?`
              <div class="dep-drawer-section">
                <div class="dep-drawer-section-head">
                  <span class="dep-drawer-section-title">回路可视化灯点（${d.length}）</span>
                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-add-light-marker="${s(t.id)}" ${v}>+ 添加灯点</button>
                </div>
                ${d.length===0?'<span class="pacom-row-sub">暂未布置回路灯点</span>':d.map(w=>`
                          <div class="pacom-receipt-item" style="padding:8px 10px;">
                            <span style="font-size:14px;"><strong>${s(w.channel)}</strong> ｜ ${s(w.label)}</span>
                            <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-del-light-marker="${s(w.id)}" ${v}>删除</button>
                          </div>`).join("")}
              </div>`:""}

          ${Ta(t)?`
              <div class="dep-drawer-section">
                <div class="dep-drawer-section-head">
                  <span class="dep-drawer-section-title">
                    <span>蓝牙 Mesh 节点角色</span>
                    ${na("蓝牙 Mesh 角色说明","Proxy 代理建议每层启用 2–3 个供现场移动端接入；Relay 中继建议控制在总节点 10% 以内，面板默认关闭以避免广播风暴。")}
                  </span>
                  <code style="font-size:12px; color:var(--pacom-text-secondary);">${s(l.meshUuid)}</code>
                </div>
                <div class="dep-drawer-switch-row">
                  <span>Proxy 代理</span>
                  <button type="button" class="pacom-switch" role="switch" aria-checked="${l.proxy}" aria-label="切换 Proxy 代理" data-toggle-mesh-role="proxy" data-mesh-dev="${s(t.id)}" ${$}><span class="pacom-switch-thumb"></span></button>
                </div>
                <div class="dep-drawer-switch-row">
                  <span>Relay 中继</span>
                  <button type="button" class="pacom-switch" role="switch" aria-checked="${l.relay}" aria-label="切换 Relay 中继" data-toggle-mesh-role="relay" data-mesh-dev="${s(t.id)}" ${$}><span class="pacom-switch-thumb"></span></button>
                </div>
              </div>`:""}

          <form data-role="binding-form" class="dep-drawer-section">
            <span class="dep-drawer-section-title">硬件绑定与物理安装复核</span>
            <div class="dep-param-grid">
              <label class="dep-field">
                <span class="dep-field-label">通信协议</span>
                <select class="pacom-select" name="protocol" ${n?"":"disabled"}>
                  ${Ss.map(w=>`<option value="${w}" ${t.hardwareBinding?.protocol===w?"selected":""}>${w.toUpperCase()}</option>`).join("")}
                </select>
              </label>
              <label class="dep-field">
                <span class="dep-field-label">网络地址 / 主题</span>
                <input class="pacom-input" name="networkAddress" placeholder="地址或主题" value="${s(t.hardwareBinding?.networkAddress??"")}" ${n?"":"disabled"} />
              </label>
            </div>
            <label class="dep-field">
              <span class="dep-field-label">端口 / 回路</span>
              <input class="pacom-input" name="portOrChannel" placeholder="端口或回路" value="${s(t.hardwareBinding?.portOrChannel??"")}" ${n?"":"disabled"} />
            </label>
            <div class="dep-drawer-switch-row">
              <span>现场物理安装已复核</span>
              <button type="button" class="pacom-switch" role="switch" aria-checked="${e.draftPhysicalInstalled}" aria-label="切换现场物理安装复核状态" data-toggle-phys="1" ${n?"":"disabled"}><span class="pacom-switch-thumb"></span></button>
            </div>
            <button class="pacom-btn pacom-btn--primary" type="submit" ${n?"":'disabled title="当前角色为只读权限"'}>保存绑定与复核（v${t.version}）</button>
          </form>`:`
          <form data-save-dev-params="${s(t.id)}" class="dep-drawer-section">
            <div>
              <div class="dep-drawer-section-title">人感与光感自治参数</div>
              <div class="pacom-row-sub">自动关灯延时、恢复自动延时与光照度门限</div>
            </div>
            <div class="dep-param-grid">
              <label class="dep-field"><span class="dep-field-label">自动关灯延时 (分)</span><input class="pacom-input" name="offDelayMin" type="number" value="${b.offDelayMin}" ${S} /></label>
              <label class="dep-field"><span class="dep-field-label">恢复自动延时 (分)</span><input class="pacom-input" name="restoreMin" type="number" value="${b.restoreMin}" ${S} /></label>
              <label class="dep-field"><span class="dep-field-label">开灯光感门限 (lx)</span><input class="pacom-input" name="luxOn" type="number" value="${b.luxOn}" ${S} /></label>
              <label class="dep-field"><span class="dep-field-label">关灯光感门限 (lx)</span><input class="pacom-input" name="luxOff" type="number" value="${b.luxOff}" ${S} /></label>
            </div>
            <button class="pacom-btn pacom-btn--primary" type="submit" ${S}>下发设备参数</button>
          </form>`}
    </aside>
  `}function js(e){const{tree:a,canEdit:t,caps:n}=e;if(a.projects.length===0)return`
      <div class="dep-work-row--canvas">
        <main class="pacom-spatial-stage" style="flex:1; min-width:0; display:flex; align-items:center; justify-content:center; padding:24px;">
          <div style="max-width:480px; width:100%;">${Ea(t,n.spatial,"map-pin")}</div>
        </main>
      </div>`;const o=e.activeBuildingId?e.sortedBuildingFloors(e.activeBuildingId):[],l=o.find(w=>w.id===e.activeFloorId)??o[0],d=e.floorDevices,b=a.zones.filter(w=>w.floorId===e.activeFloorId),v=e.drawerOpen?d.find(w=>w.id===e.selectedId)??null:null,$=e.canvasSearch.trim().toLowerCase(),S=d.filter(w=>!(e.deviceFilter==="unverified"&&w.physicalInstalled||e.deviceFilter==="unplaced"&&w.planPoint||$&&!`${w.name} ${e.getZoneLabel(w.logicalZoneId)}`.toLowerCase().includes($)));return`
    <div class="dep-work-row--canvas">
      <main class="pacom-spatial-stage" style="flex:1; min-width:0;">
        <div class="pacom-hud-search-wrap" style="width:min(360px, calc(100% - 28px));">
          <div class="pacom-hud-bar" style="padding:0 6px 0 12px;">
            ${re("search",16)}
            <input class="pacom-hud-input" name="canvasSearch" data-dep-canvas-search placeholder="搜索本层设备或功能区…" value="${s(e.canvasSearch)}" aria-label="搜索本层设备" />
            <button type="button" class="pacom-hud-pill" style="${e.hudPoolOpen?"background:var(--pacom-selected-layer); color:var(--pacom-text-primary);":""}" data-toggle-hud-pool="1">设备池 ${d.length}</button>
          </div>

          ${e.hudPoolOpen?`
              <div class="pacom-hud-sheet">
                <div class="pacom-hud-sheet-head">
                  <strong style="font-size:14px; font-weight:500;">${s(l?.name??"当前楼层")} 设备池（${S.length}）</strong>
                  <button type="button" class="pacom-drawer-close" data-close-hud-pool="1" aria-label="收起">${re("x",16)}</button>
                </div>
                <div class="pacom-pane-toolbar" style="padding:8px 10px;">
                  <div class="pacom-tabs" role="tablist" aria-label="设备池筛选">
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${e.deviceFilter==="all"}" data-dev-filter="all">全部 ${d.length}</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${e.deviceFilter==="unverified"}" data-dev-filter="unverified">待复核 ${d.filter(w=>!w.physicalInstalled).length}</button>
                    <button type="button" class="pacom-tab" role="tab" aria-selected="${e.deviceFilter==="unplaced"}" data-dev-filter="unplaced">未标记 ${d.filter(w=>!w.planPoint).length}</button>
                  </div>
                </div>
                <div class="pacom-list" style="padding:6px;">
                  ${S.length===0?'<div class="pacom-row-sub" style="padding:20px; text-align:center;">本层暂无匹配设备</div>':S.map(w=>`
                            <div class="pacom-row ${w.id===e.selectedId&&e.drawerOpen?"is-selected":""}" data-pick-dev="${s(w.id)}" style="padding:8px 10px;">
                              <div style="min-width:0;">
                                <div class="pacom-row-title" style="font-size:14px; font-weight:450;">${s(w.name)}</div>
                                <div class="pacom-row-sub">${s(e.getZoneLabel(w.logicalZoneId))} ｜ ${w.physicalInstalled?"已复核":"待复核"}</div>
                              </div>
                              <span class="pacom-badge ${w.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${w.planPoint?"已标记":"未标记"}</span>
                            </div>`).join("")}
                </div>
              </div>`:""}
        </div>

        ${e.placingMode&&v?`<div class="dep-canvas-mode-pill" role="status">
                 <span>正在定位「${s(v.name)}」，请点击平面图落点</span>
                 <button type="button" class="dep-canvas-mode-cancel" data-toggle-place="1">取消</button>
               </div>`:""}

        <div class="pacom-canvas-stage" data-role="dep-stage" style="cursor:${e.placingMode?"crosshair":"grab"};">
          ${l?.plan?`
              <div class="pacom-canvas-viewport" data-role="dep-viewport" style="transform: translate(${e.panX}px, ${e.panY}px) scale(${e.zoom});">
                <div class="pacom-plan-wrap" data-role="deploy-plan">
                  <img class="pacom-plan-img" src="${s(l.plan.imageUrl)}" alt="${s(l.name)} 平面底图" />
                  ${e.canvasBrush==="zone"?b.map(w=>{const h=e.zoneBoxes[w.id];return h?`<div class="pacom-zone-hotspot is-active" style="left:${h.left}%; top:${h.top}%; width:${h.width}%; height:${h.height}%;"><span class="pacom-zone-tag">${s(w.name.replace(new RegExp(`^${l.name}\\s*`,"i"),""))}</span></div>`:""}).join(""):""}
                  ${d.filter(w=>w.planPoint).map(w=>`
                      <button type="button" class="pacom-pin ${w.id===e.selectedId&&e.drawerOpen?"is-selected":""} ${w.connectivity==="offline"?"pacom-pin--offline":""}"
                        style="left:${(w.planPoint.x*100).toFixed(2)}%; top:${(w.planPoint.y*100).toFixed(2)}%;"
                        data-pick-dev="${s(w.id)}" title="${s(w.name)}${w.physicalInstalled?" ｜ 已复核":" ｜ 待复核"}">
                        <span class="pacom-dot ${w.connectivity==="online"?w.physicalInstalled?"pacom-dot--online":"pacom-dot--warning":"pacom-dot--critical"}"></span>
                        <span>${s(Es(w))}</span>
                      </button>`).join("")}
                  ${e.canvasBrush==="light_marker"||v?.category==="lighting"?e.lightMarkers.filter(w=>d.some(h=>h.id===w.deviceId)).map(w=>`
                            <span class="dep-light-dot" style="left:${(w.x*100).toFixed(1)}%; top:${(w.y*100).toFixed(1)}%;" title="${s(w.label)}（${s(w.channel)}）">
                              ${re("sparkles",12)}<span>${s(w.label.slice(0,6))}</span>
                            </span>`).join(""):""}
                </div>
              </div>`:`<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; padding:24px;">
                  <span class="pacom-row-sub">本层暂未上传 2D 平面底图</span>
                  <button type="button" class="pacom-btn pacom-btn--primary" data-jump-floor-config="${s(e.activeFloorId)}">前往「项目配置」上传平面底图 →</button>
                </div>`}
        </div>

        <nav class="pacom-elevation-scrubber" aria-label="建筑标高楼层切换">
          ${o.map(w=>`
              <button type="button" class="pacom-elev-item ${w.id===e.activeFloorId?"is-active":""}" data-scrubber-floor="${s(w.id)}" title="${s(w.name)}${w.plan?" ｜ 已传底图":" ｜ 待传底图"}">
                ${w.plan?"":'<span class="pacom-elev-dot" style="background:var(--pacom-status-offline);"></span>'}
                <span>${s(w.name)}</span>
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
      ${ts(e,!1)}
    </div>
  `}function Cs(e){if(e.tree.projects.length===0)return Ea(e.canEdit,e.caps.spatial,"list");const a=e.floorDevices,t=e.listSearch.trim().toLowerCase(),n=a.filter(l=>!(e.listStatusFilter==="online"&&l.connectivity!=="online"||e.listStatusFilter==="offline"&&l.connectivity!=="offline"||e.listStatusFilter==="unverified"&&l.physicalInstalled||e.listCategoryFilter!=="all"&&l.category!==e.listCategoryFilter||t&&!`${l.name} ${e.getZoneLabel(l.logicalZoneId)} ${l.hardwareBinding?.protocol??""}`.toLowerCase().includes(t))),o=a.filter(l=>l.connectivity==="online").length;return`
    <div class="dep-work-row--list">
      <div class="dep-work-main">
        <div class="pacom-log-toolbar">
          <div class="pacom-log-filters">
            <input class="pacom-input" name="deviceListSearch" style="width:220px;" data-list-search placeholder="搜索设备名称或功能区…" value="${s(e.listSearch)}" aria-label="搜索设备列表" />
            <select class="pacom-select" name="deviceListFilter" data-list-filter aria-label="按设备状态筛选">
              <option value="all" ${e.listStatusFilter==="all"?"selected":""}>全部状态（${a.length}）</option>
              <option value="online" ${e.listStatusFilter==="online"?"selected":""}>仅看在线（${o}）</option>
              <option value="offline" ${e.listStatusFilter==="offline"?"selected":""}>仅看离线（${a.length-o}）</option>
              <option value="unverified" ${e.listStatusFilter==="unverified"?"selected":""}>待物理复核（${a.filter(l=>!l.physicalInstalled).length}）</option>
            </select>
            <select class="pacom-select" name="deviceCategoryFilter" data-list-cat-filter aria-label="按设备类别筛选">
              <option value="all" ${e.listCategoryFilter==="all"?"selected":""}>全部类别</option>
              ${Object.keys(Fa).map(l=>`<option value="${l}" ${e.listCategoryFilter===l?"selected":""}>${Fa[l]}</option>`).join("")}
            </select>
            <button type="button" class="pacom-square-icon-btn" data-refresh-dep="1" title="刷新设备列表" aria-label="刷新设备列表">${re("refresh-cw",16)}</button>
          </div>
          <span class="pacom-row-sub">共 ${n.length} 台 ｜ ${o} 在线</span>
        </div>

        <div class="pacom-table-card">
          <div class="pacom-table-wrap">
            <table class="pacom-table">
              <thead>
                <tr>
                  <th>设备与功能区</th>
                  <th>图上坐标</th>
                  <th>协议与绑定</th>
                  <th>物理复核</th>
                  <th>在线状态</th>
                  <th style="text-align:right;">操作</th>
                </tr>
              </thead>
              <tbody>
                ${n.length===0?'<tr><td colspan="6"><div class="pacom-empty-state" style="padding:36px 16px;"><strong>暂无匹配设备</strong><span>可调整筛选词、切换楼层，或点击右上角「+ 新增设备」。</span></div></td></tr>':n.map(l=>`
                          <tr style="cursor:pointer; ${l.id===e.selectedId&&e.drawerOpen?"background:var(--pacom-selected-layer);":""}" data-open-dev-drawer="${s(l.id)}">
                            <td>
                              <div style="font-weight:450;">${s(l.name)}</div>
                              <div class="pacom-row-sub">${s(e.getZoneLabel(l.logicalZoneId))} ｜ ${s(Fa[l.category])} ｜ v${l.version}</div>
                            </td>
                            <td><span class="pacom-badge ${l.planPoint?"pacom-badge--online":"pacom-badge--warning"}">${l.planPoint?`${Math.round(l.planPoint.x*100)}%, ${Math.round(l.planPoint.y*100)}%`:"未标记"}</span></td>
                            <td><span class="pacom-badge ${l.hardwareBinding?"pacom-badge--neutral":"pacom-badge--warning"}">${l.hardwareBinding?l.hardwareBinding.protocol.toUpperCase():"未绑定"}</span></td>
                            <td><span class="pacom-badge ${l.physicalInstalled?"pacom-badge--online":"pacom-badge--warning"}">${l.physicalInstalled?"已复核":"待复核"}</span></td>
                            <td><span class="pacom-badge ${l.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${l.connectivity==="online"?"在线":"离线"}</span></td>
                            <td>
                              <div style="display:flex; justify-content:flex-end; gap:6px;">
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
            <span>显示 ${n.length} / ${a.length} 台设备 ｜ ${o} 在线 ｜ ${a.length-o} 离线</span>
          </div>
        </div>
      </div>
      ${ts(e,!0)}
    </div>
  `}function Ds(e){if(e.tree.projects.length===0)return Ea(e.canEdit,e.caps.spatial,"folder-kanban");const a=tt(e.canEdit,e.caps.deviceGroups,"待后端设备分组接口对接"),t=e.groups.filter(b=>b.track==="mesh_auto"),n=e.groups.filter(b=>b.track==="cloud_biz"),o=new Map(e.floorDevices.map(b=>[b.id,b.name])),l=b=>{const v=b.map($=>o.get($)??$).slice(0,3);return v.length===0?"暂未编排成员设备":`${v.join("、")}${b.length>3?` 等 ${b.length} 台`:""}`},d=b=>`
    <div class="pacom-setting-row">
      <div class="pacom-setting-meta">
        <span class="pacom-setting-title" style="flex-wrap:wrap; row-gap:4px;">
          <span>${s(b.name)}</span>
          <span class="pacom-badge pacom-badge--neutral" style="white-space:nowrap;">${s(b.groupType)}</span>
        </span>
        <span class="pacom-setting-desc">成员 ${b.deviceIds.length} 台 ｜ ${s(l(b.deviceIds))}</span>
      </div>
      <div class="pacom-setting-control">
        <button type="button" class="pacom-btn pacom-btn--sm" data-test-group="${s(b.id)}">组控测试</button>
        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-group="${s(b.id)}" ${a}>编辑</button>
        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-del-group="${s(b.id)}" ${a}>删除</button>
      </div>
    </div>`;return`
    <div class="pacom-grid-2">
      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title" style="display:inline-flex; align-items:center; gap:6px;">
            <span>端侧蓝牙 Mesh 自治组（${t.length}）</span>
            ${na("端侧蓝牙 Mesh 自治组说明","用于照明与人感/光感本地自治联动，断网仍可端侧执行；系统会自动纳入本层蓝牙适配器或边缘网关以防状态漏报。")}
          </h2>
        </div>
        <div class="pacom-settings-card">
          ${t.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无端侧自治分组，点击右上角「+ 新建分组」创建。</span></div>':t.map(d).join("")}
        </div>
      </section>

      <section class="pacom-section">
        <div class="pacom-section-head">
          <h2 class="pacom-section-title" style="display:inline-flex; align-items:center; gap:6px;">
            <span>云端业务分组（${n.length}）</span>
            ${na("云端业务分组说明","适用于空调、标牌或行政部门批控场景，无需依赖蓝牙 Mesh 配网，可供空间总览与智能策略复用。")}
          </h2>
        </div>
        <div class="pacom-settings-card">
          ${n.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无云端业务分组，点击右上角「+ 新建分组」创建。</span></div>':n.map(d).join("")}
        </div>
      </section>
    </div>
  `}function qs(e){if(e.tree.projects.length===0)return Ea(e.canEdit,e.caps.spatial,"waypoints");const a=e.floorDevices,t=e.tree.zones.filter(m=>m.floorId===e.activeFloorId),n=a.filter(Ta),o=a.filter(m=>!Ta(m)),l=n.filter(m=>m.category==="gateway"),d=new Set(l.map(m=>m.id)),b=n.filter(m=>!d.has(m.id)&&!!(e.meshRoles[m.id]?.proxy||e.meshRoles[m.id]?.relay)),v=new Set(b.map(m=>m.id)),$=n.filter(m=>!d.has(m.id)&&!v.has(m.id)),S=n.filter(m=>e.meshRoles[m.id]?.proxy).length,w=n.filter(m=>e.meshRoles[m.id]?.relay).length,h=n.filter(m=>m.connectivity==="offline").length;return`
    <div class="pacom-kpi-strip" role="region" aria-label="本层无线网络概览">
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">蓝牙 Mesh 节点</span>
        <div class="pacom-kpi-value">${n.length}<span class="pacom-kpi-unit">台</span></div>
        <span class="pacom-kpi-delta">不含 ${o.length} 台有线异构末端</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">Proxy ｜ Relay ${na("代理与中继建议配比","每层建议开启 2–3 个 Proxy 供现场 App 接入；Relay 中继建议控制在总节点 10% 以内，减少广播风暴。")}</span>
        <div class="pacom-kpi-value">${S}<span class="pacom-kpi-unit">｜ ${w} 个</span></div>
        <span class="pacom-kpi-delta">代理与中继骨架</span>
      </div>
      <div class="pacom-kpi-cell">
        <span class="pacom-kpi-label">Mesh 离线节点</span>
        <div class="pacom-kpi-value">${h}<span class="pacom-kpi-unit">台</span></div>
        <span class="pacom-kpi-delta">${h===0?"无线链路全部可达":"建议检查供电或增设中继"}</span>
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
            ${e.meshFindings.map(m=>`
                <div class="pacom-receipt-item">
                  <div>
                    <strong>${s(m.title)}</strong>
                    <span class="pacom-row-sub"> ｜ ${s(m.detail)}</span>
                  </div>
                  <div style="display:inline-flex; align-items:center; gap:8px;">
                    ${m.deviceId?`<button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-topo-jump="${s(m.deviceId)}">定位</button>`:""}
                    <span class="pacom-badge ${m.level==="ok"?"pacom-badge--online":m.level==="warn"?"pacom-badge--warning":"pacom-badge--critical"}">${m.level==="ok"?"通过":m.level==="warn"?"建议优化":"异常"}</span>
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
              ${l.length===0?'<div class="pacom-row-sub">本层暂未配置网关或蓝牙适配器。</div>':l.map(m=>`
                        <button type="button" class="dep-topo-node ${m.connectivity==="offline"?"is-issue":""}" data-topo-jump="${s(m.id)}">
                          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                            <strong>${s(m.name)}</strong>
                            <span class="pacom-badge pacom-badge--online">网桥中心</span>
                          </div>
                          <span class="pacom-row-sub">${s(m.hardwareBinding?.networkAddress??"未绑定地址")} ｜ 云边同步通道</span>
                        </button>`).join("")}
            </div>
            <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${re("chevron-right",12)}</span></div>
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 代理与中继骨架（${b.length}）</strong>
              ${b.length===0?'<div class="pacom-row-sub">暂未启用 Proxy / Relay 骨架节点，可在「设备标记」抽屉开启。</div>':b.map(m=>{const k=e.meshRoles[m.id];return`
                          <button type="button" class="dep-topo-node ${m.connectivity==="offline"?"is-issue":""}" data-topo-jump="${s(m.id)}">
                            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                              <strong>${s(m.name)}</strong>
                              <span class="pacom-badge pacom-badge--accent">${k?.proxy?"Proxy":""}${k?.proxy&&k?.relay?" + ":""}${k?.relay?"Relay":""}</span>
                            </div>
                            <span class="pacom-row-sub">${s(e.getZoneLabel(m.logicalZoneId))} ｜ ${m.connectivity==="online"?"在线":"离线"}</span>
                          </button>`}).join("")}
            </div>
            <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${re("chevron-right",12)}</span></div>
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 普通无线末端（${$.length}）</strong>
              ${$.length===0?'<div class="pacom-row-sub">本层暂无普通 Mesh 末端节点。</div>':$.map(m=>`
                        <button type="button" class="dep-topo-node ${m.connectivity==="offline"?"is-issue":""}" data-topo-jump="${s(m.id)}">
                          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                            <strong>${s(m.name)}</strong>
                            <span class="pacom-badge ${m.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${m.connectivity==="online"?"在线":"离线"}</span>
                          </div>
                          <span class="pacom-row-sub">${s(e.getZoneLabel(m.logicalZoneId))} ｜ ${s(m.hardwareBinding?.protocol.toUpperCase()??"未绑定")}</span>
                        </button>`).join("")}
            </div>
          </div>
          ${o.length>0?`<div class="pacom-banner" style="padding:12px 16px;">
                   <div class="pacom-banner-text">
                     <span class="pacom-banner-title">本层另有 ${o.length} 台有线异构设备（${s(o.map(m=>`${m.name}（${m.hardwareBinding?.protocol.toUpperCase()??"有线"}）`).join("、"))}）</span>
                     <span class="pacom-banner-sub">空调与电表经有线协议通道直采，不加入蓝牙 Mesh 无线网；请前往「系统接入」核查其总线健康度。</span>
                   </div>
                   <button type="button" class="pacom-btn pacom-btn--sm" data-dep-nav="connections">前往系统接入 →</button>
                 </div>`:""}`:`
          <div class="dep-topo-flow">
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">1. 上游传感与总线源</strong>
              ${a.filter(m=>m.category==="sensor"||m.category==="gateway").length===0?'<div class="pacom-row-sub">本层暂无传感或网关节点。</div>':a.filter(m=>m.category==="sensor"||m.category==="gateway").map(m=>`
                        <button type="button" class="dep-topo-node" data-topo-jump="${s(m.id)}">
                          <strong>${s(m.name)}</strong>
                          <span class="pacom-row-sub">${m.category==="sensor"?"人感 / 光照 / 温湿触发源":"协议网关 / 边缘总线"}</span>
                        </button>`).join("")}
            </div>
            <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${re("chevron-right",12)}</span></div>
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">2. 受控末端（照明 / 暖通）</strong>
              ${a.filter(m=>m.category==="lighting"||m.category==="hvac").length===0?'<div class="pacom-row-sub">本层暂无受控照明或暖通末端。</div>':a.filter(m=>m.category==="lighting"||m.category==="hvac").map(m=>`
                        <button type="button" class="dep-topo-node ${m.connectivity==="offline"?"is-issue":""}" data-topo-jump="${s(m.id)}">
                          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                            <strong>${s(m.name)}</strong>
                            <span class="pacom-badge ${m.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${m.connectivity==="online"?"正常":"离线"}</span>
                          </div>
                          <span class="pacom-row-sub">服务：${s(e.getZoneLabel(m.logicalZoneId))}</span>
                        </button>`).join("")}
            </div>
            <div class="dep-topo-connector" aria-hidden="true"><span class="dep-topo-connector-dot">${re("chevron-right",12)}</span></div>
            <div class="dep-topo-col">
              <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-secondary);">3. 服务功能区（影响面）</strong>
              ${t.length===0?'<div class="pacom-row-sub">本层暂未划分功能区。</div>':t.map(m=>{const k=a.filter(H=>H.logicalZoneId===m.id),A=k.some(H=>H.connectivity==="offline");return`
                          <div class="dep-topo-node ${A?"is-issue":""}" style="cursor:default;">
                            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                              <strong>${s(m.name)}</strong>
                              <span class="pacom-badge ${A?"pacom-badge--warning":"pacom-badge--online"}">${k.length} 台设备</span>
                            </div>
                            <span class="pacom-row-sub">${A?"存在离线末端，影响自动控制":"运行与联动覆盖完整"}</span>
                          </div>`}).join("")}
            </div>
          </div>`}
    </section>
  `}function nt(e,a,t){return e?a?"":`disabled title="${s(t)}"`:'disabled title="当前角色为只读权限"'}function Fs(e){const{tree:a,canEdit:t,caps:n}=e;if(a.projects.length===0)return Ea(t,n.spatial,"layers");const o=a.projects.find(d=>d.id===e.activeProjectId)??a.projects[0],l=a.buildings.filter(d=>d.projectId===o.id);if(e.projectDrill==="building"||e.projectDrill==="floor"){const d=l.find(b=>b.id===e.activeBuildingId)??l[0]??null;if(!d)return Rt(e,o,l);if(e.projectDrill==="floor"){const b=e.sortedBuildingFloors(d.id),v=b.find($=>$.id===e.activeFloorId)??b[0]??null;if(v)return Os(e,d,b,v)}return Ts(e,l,d)}return Rt(e,o,l)}function Rt(e,a,t){const{canEdit:n,caps:o}=e,l=nt(n,o.spatial,"待后端空间建档接口对接"),d=t.flatMap($=>e.sortedBuildingFloors($.id)),b=d.filter($=>!!$.plan).length,v=a.location?`${a.location.lng.toFixed(4)}, ${a.location.lat.toFixed(4)}`:"未设置坐标";return`
    <div class="dep-project-strip">
      <div class="dep-project-strip-main">
        <div class="dep-project-cover">
          <img src="${s(a.imageUrl??"./media/gzlab.jpg")}" alt="${s(a.name)}" />
        </div>
        <div style="min-width:0; display:flex; flex-direction:column; gap:4px;">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <strong style="font-size:16px; line-height:24px; font-weight:500; color:var(--pacom-text-primary);">${s(a.name)}</strong>
            <span class="pacom-badge pacom-badge--neutral">${t.length} 栋楼宇</span>
            <span class="pacom-badge pacom-badge--neutral">${d.length} 个楼层</span>
            <span class="pacom-badge ${d.length>0&&b===d.length?"pacom-badge--online":"pacom-badge--warning"}">${b}/${d.length} 底图就绪</span>
          </div>
          <span class="pacom-row-sub">${s(a.city||"未填城市")}${a.address?` ｜ ${s(a.address)}`:""} ｜ 坐标 ${s(v)}</span>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">
        <button type="button" class="pacom-btn" data-open-edit-proj="1" ${l}>编辑项目</button>
      </div>
    </div>

    <section class="pacom-section">
      <div class="pacom-section-head">
        <div>
          <h2 class="pacom-section-title">园区楼宇（${t.length} 栋）</h2>
          <span class="pacom-row-sub">点击楼宇卡片进入该栋楼层清单与平面底图配置</span>
        </div>
      </div>
      ${t.length===0?`
          <div class="dep-empty-card">
            <div class="dep-empty-icon">${re("building-2",20)}</div>
            <strong style="font-size:16px; line-height:24px; font-weight:500; color:var(--pacom-text-primary);">${s(a.name)} 暂无楼宇</strong>
            <span class="pacom-row-sub">添加楼宇并设置层数结构后，系统将自动生成对应楼层并直达楼层底图工作台。</span>
            <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-bld="1" ${l}>+ 添加第一栋楼宇</button>
          </div>`:`
          <div class="dep-building-grid">
            ${t.map($=>{const S=e.sortedBuildingFloors($.id),w=S.filter(k=>!!k.plan).length,h=rt($,S),m=S.length===0?"pacom-badge--neutral":w===S.length?"pacom-badge--online":"pacom-badge--warning";return`
                  <article class="dep-building-card" data-drill-building="${s($.id)}" tabindex="0" role="button" aria-label="进入 ${s($.name)} 楼层配置">
                    <div class="dep-building-stage">
                      <img src="${s($.imageUrl??"./media/building-e.webp")}" alt="${s($.name)}" />
                      <span class="pacom-badge ${m} dep-building-stage-badge">${S.length===0?"未建层":`${w}/${S.length} 底图`}</span>
                    </div>
                    <div class="dep-building-body">
                      <div class="dep-building-head">
                        <span class="dep-building-name">
                          <span>${s($.name)}</span>
                          <span class="dep-building-arrow" aria-hidden="true">${re("chevron-right",14)}</span>
                        </span>
                        <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-building="${s($.id)}" ${l}>编辑</button>
                      </div>
                      <div class="pacom-row-sub">地上 ${$.aboveFloors} 层${$.belowFloors>0?` ｜ 地下 ${$.belowFloors} 层`:""}${$.hasRoof?" ｜ RF":""}${$.areaSqm?` ｜ ${$.areaSqm} m²`:""}</div>
                      ${h.length>0?`<div class="dep-building-missing">
                               <span>尚缺 ${h.length} 个登记楼层</span>
                               <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-fill-missing-floors="${s($.id)}" ${l}>补齐楼层</button>
                             </div>`:""}
                    </div>
                  </article>`}).join("")}
          </div>`}
    </section>
  `}function Ts(e,a,t){const{canEdit:n,caps:o}=e,l=nt(n,o.spatial,"待后端空间建档接口对接"),d=e.sortedBuildingFloors(t.id),b=d.filter(h=>!h.plan).length,v=d.filter(h=>e.tree.zones.filter(m=>m.floorId===h.id).length===0).length,$=rt(t,d),S=e.floorListSearch.trim().toLowerCase(),w=d.filter(h=>{if(e.floorListFilter==="missing_plan"&&h.plan||e.floorListFilter==="missing_zone"&&e.tree.zones.filter(m=>m.floorId===h.id).length>0)return!1;if(S){const m=e.tree.zones.filter(k=>k.floorId===h.id).map(k=>k.name).join(" ");if(!`${h.name} ${m}`.toLowerCase().includes(S))return!1}return!0});return`
    <div class="dep-drill-bar">
      <div class="dep-drill-left">
        <button type="button" class="dep-back-btn" data-proj-drill="overview">
          ${re("arrow-left",16)}
          <span>项目配置</span>
        </button>
        <span class="dep-drill-sep" aria-hidden="true">/</span>
        ${a.length>1?`<select class="pacom-select" name="drillBuildingSelect" data-switch-drill-building aria-label="切换当前楼宇" style="width:auto; min-width:112px;">
                 ${a.map(h=>`<option value="${s(h.id)}" ${h.id===t.id?"selected":""}>${s(h.name)}</option>`).join("")}
               </select>`:`<h2 class="pacom-unified-title">${s(t.name)}</h2>`}
        <span class="pacom-row-sub">地上 ${t.aboveFloors} 层${t.belowFloors>0?` ｜ 地下 ${t.belowFloors} 层`:""}${t.hasRoof?" ｜ RF":""} ｜ 共 ${d.length} 层</span>
      </div>
      <div class="pacom-unified-head-actions">
        <button type="button" class="pacom-btn" data-edit-building="${s(t.id)}" ${l}>楼宇参数</button>
        ${$.length>0?`<button type="button" class="pacom-btn" data-fill-missing-floors="${s(t.id)}" ${l}>补齐 ${$.length} 层</button>`:""}
        <button type="button" class="pacom-btn" data-open-new-floor="1" ${l}>+ 新增楼层</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-batch-modal="1" ${l}>批量导入底图</button>
      </div>
    </div>

    ${d.length===0?`
        <div class="dep-empty-card">
          <div class="dep-empty-icon">${re("layers",20)}</div>
          <strong style="font-size:16px; line-height:24px; font-weight:500; color:var(--pacom-text-primary);">${s(t.name)} 暂无楼层</strong>
          <span class="pacom-row-sub">可按楼宇结构一键生成全部楼层，或手动新增单个楼层。</span>
          <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
            <button type="button" class="pacom-btn pacom-btn--primary" data-fill-missing-floors="${s(t.id)}" ${l}>一键生成全部楼层</button>
            <button type="button" class="pacom-btn" data-open-new-floor="1" ${l}>+ 新增楼层</button>
          </div>
        </div>`:`
        <div class="pacom-log-toolbar">
          <div class="pacom-log-filters">
            <div class="pacom-tabs" role="tablist" aria-label="楼层筛选">
              <button type="button" class="pacom-tab" role="tab" aria-selected="${e.floorListFilter==="all"}" data-floor-list-filter="all">全部 ${d.length}</button>
              <button type="button" class="pacom-tab" role="tab" aria-selected="${e.floorListFilter==="missing_plan"}" data-floor-list-filter="missing_plan">缺底图 ${b}</button>
              <button type="button" class="pacom-tab" role="tab" aria-selected="${e.floorListFilter==="missing_zone"}" data-floor-list-filter="missing_zone">缺功能区 ${v}</button>
            </div>
            <input class="pacom-input" name="floorListSearch" style="width:220px;" data-floor-list-search placeholder="搜索楼层或功能区…" value="${s(e.floorListSearch)}" aria-label="搜索楼层或功能区" />
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
                ${w.length===0?'<tr><td colspan="5"><div class="pacom-empty-state" style="padding:32px 16px;"><strong>当前筛选无匹配楼层</strong><span>可切换回「全部」查看整栋楼层。</span></div></td></tr>':w.map(h=>{const m=e.tree.zones.filter(k=>k.floorId===h.id);return`
                            <tr style="cursor:pointer;" data-drill-floor="${s(h.id)}">
                              <td>
                                <div style="display:inline-flex; align-items:center; gap:8px;">
                                  <span class="pacom-dot ${h.plan?"pacom-dot--online":"pacom-dot--offline"}"></span>
                                  <strong>${s(h.name)}</strong>
                                </div>
                              </td>
                              <td><span class="pacom-row-sub">${h.areaSqm?`${h.areaSqm} m²`:"—"}</span></td>
                              <td>
                                <div style="display:inline-flex; align-items:center; gap:8px;">
                                  ${h.plan?`<button type="button" class="dep-floor-thumb" data-open-lightbox="1" data-lb-title="${s(t.name)} ${s(h.name)} 平面底图" data-lb-src="${s(h.plan.imageUrl)}" title="查看大图"><img src="${s(h.plan.imageUrl)}" alt="${s(h.name)}" /></button>
                                         <span class="pacom-badge pacom-badge--online">已就绪</span>`:'<span class="pacom-badge pacom-badge--warning">待上传</span>'}
                                  <label class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-stop-row="1" style="cursor:${!n||!o.spatial?"not-allowed":"pointer"}; opacity:${!n||!o.spatial?"0.45":"1"};">
                                    <span>${h.plan?"替换":"上传"}</span>
                                    <input type="file" name="floorPlan_${s(h.id)}" accept="image/*" data-upload-floor="${s(h.id)}" style="display:none;" ${l} />
                                  </label>
                                </div>
                              </td>
                              <td>
                                ${m.length>0?`<span>${m.length} 区</span> <span class="pacom-row-sub" style="margin-left:4px;">${s(m.slice(0,2).map(k=>k.name.replace(new RegExp(`^${h.name}\\s*`,"i"),"")).join("、"))}${m.length>2?"…":""}</span>`:'<span class="pacom-row-sub">未划分</span>'}
                              </td>
                              <td>
                                <div style="display:flex; justify-content:flex-end; gap:6px;">
                                  <button type="button" class="pacom-btn pacom-btn--sm" data-drill-floor-btn="${s(h.id)}">配置</button>
                                  <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-jump-floor-marking="${s(h.id)}">设备标记 →</button>
                                </div>
                              </td>
                            </tr>`}).join("")}
              </tbody>
            </table>
          </div>
          <div class="pacom-table-footer">
            <span>显示 ${w.length} / ${d.length} 层 ｜ 已传底图 ${d.length-b} 层</span>
          </div>
        </div>`}
  `}function Os(e,a,t,n){const{canEdit:o,caps:l}=e,d=nt(o,l.spatial,"待后端空间建档接口对接"),b=nt(o,l.floorDocs,"待后端工程资料接口对接"),v=t.findIndex(A=>A.id===n.id),$=v>0?t[v-1]:null,S=v>=0&&v<t.length-1?t[v+1]:null,w=e.tree.zones.filter(A=>A.floorId===n.id),h=e.floorDocs.filter(A=>A.floorId===n.id),m=e.floorDevices,k=t.filter(A=>A.id!==n.id);return`
    <div class="dep-drill-bar">
      <div class="dep-drill-left">
        <button type="button" class="dep-back-btn" data-proj-drill="building">
          ${re("arrow-left",16)}
          <span>${s(a.name)}</span>
        </button>
        <span class="dep-drill-sep" aria-hidden="true">/</span>
        <div class="dep-floor-pager" role="group" aria-label="连续切换楼层">
          <button type="button" class="dep-floor-pager-btn" data-drill-floor-btn="${s($?.id??"")}" ${$?`title="上一层（${s($.name)}）"`:"disabled"} aria-label="上一层">
            ${re("chevron-left",14)}
          </button>
          <select class="pacom-select" name="drillFloorSelect" data-switch-drill-floor aria-label="切换当前楼层" style="width:auto; min-width:92px;">
            ${t.map(A=>`<option value="${s(A.id)}" ${A.id===n.id?"selected":""}>${s(A.name)}${A.plan?"":"（缺图）"}</option>`).join("")}
          </select>
          <button type="button" class="dep-floor-pager-btn" data-drill-floor-btn="${s(S?.id??"")}" ${S?`title="下一层（${s(S.name)}）"`:"disabled"} aria-label="下一层">
            ${re("chevron-right",14)}
          </button>
        </div>
        <span class="pacom-badge ${n.plan?"pacom-badge--online":"pacom-badge--warning"}">${n.plan?"底图已就绪":"待传底图"}</span>
      </div>
      <div class="pacom-unified-head-actions">
        <button type="button" class="pacom-btn" data-jump-floor-marking="${s(n.id)}">前往设备标记 →</button>
      </div>
    </div>

    <div class="dep-plan-preview-box" data-single-floor-drop="${s(n.id)}">
      <div class="dep-plan-toolbar">
        ${n.plan?`<button type="button" class="dep-plan-tool-btn" data-open-lightbox="1" data-lb-title="${s(a.name)} ${s(n.name)} 平面底图" data-lb-src="${s(n.plan.imageUrl)}">查看大图</button>`:""}
        <label class="dep-plan-tool-btn" style="cursor:${!o||!l.spatial?"not-allowed":"pointer"}; opacity:${!o||!l.spatial?"0.45":"1"};">
          <span>${n.plan?"替换底图":"上传底图"}</span>
          <input type="file" name="floorPlanDrop_${s(n.id)}" accept="image/*" data-upload-floor="${s(n.id)}" style="display:none;" ${d} />
        </label>
        ${n.plan?`<button type="button" class="dep-plan-tool-btn" style="color:var(--pacom-status-critical);" data-clear-floor-plan="${s(n.id)}" ${d}>清空</button>`:""}
      </div>
      ${n.plan?`<img src="${s(n.plan.imageUrl)}" alt="${s(n.name)} 平面底图" style="width:100%; max-height:360px; object-fit:contain; display:block;" />`:`<div class="dep-plan-empty-drop">
               <div class="dep-empty-icon">${re("upload",20)}</div>
               <strong style="font-size:14px; font-weight:450; color:var(--pacom-text-primary);">拖拽 ${s(n.name)} 2D 平面图到此处上传</strong>
               <span class="pacom-row-sub">支持透明 WebP / PNG / JPG，上传后可直接前往设备标记</span>
               <label class="pacom-btn pacom-btn--primary" style="cursor:${!o||!l.spatial?"not-allowed":"pointer"}; opacity:${!o||!l.spatial?"0.45":"1"};">
                 <span>选择平面图文件</span>
                 <input type="file" name="floorPlanEmpty_${s(n.id)}" accept="image/*" data-upload-floor="${s(n.id)}" style="display:none;" ${d} />
               </label>
             </div>`}
    </div>

    <section class="pacom-section">
      <div class="pacom-section-head">
        <h2 class="pacom-section-title">楼层属性与空间划分</h2>
        <span class="pacom-row-sub">已关联 ${m.length} 台设备 ｜ ${w.length} 个功能区</span>
      </div>
      <div class="pacom-settings-card">
        <div class="pacom-setting-row">
          <form data-save-floor="${s(n.id)}" style="display:flex; align-items:flex-end; gap:12px; flex-wrap:wrap; flex:1;">
            <label class="dep-field" style="width:120px;">
              <span class="dep-field-label">楼层名称</span>
              <input class="pacom-input" name="fName" value="${s(n.name)}" required ${d} />
            </label>
            <label class="dep-field" style="width:150px;">
              <span class="dep-field-label">建筑面积 (m²)</span>
              <input class="pacom-input" name="fArea" type="number" step="0.1" value="${s(n.areaSqm??"")}" placeholder="选填" ${d} />
            </label>
            <button type="submit" class="pacom-btn" ${d}>保存属性</button>
          </form>
          <button type="button" class="pacom-btn pacom-btn--danger" data-delete-floor="${s(n.id)}" ${!o||!l.spatial||m.length>0?`disabled title="${m.length>0?`已关联 ${m.length} 台设备，请先解绑后再删除`:o?"待后端空间建档接口对接":"当前角色为只读权限"}"`:""}>删除楼层</button>
        </div>

        <div class="pacom-setting-row" style="justify-content:space-between; gap:12px;">
          <div style="display:flex; align-items:center; gap:8px;">
            <div class="pacom-tabs" role="tablist" aria-label="楼层附属配置">
              <button type="button" class="pacom-tab" role="tab" aria-selected="${e.floorDetailTab==="zones"}" data-floor-detail-tab="zones">功能区（${w.length}）</button>
              <button type="button" class="pacom-tab" role="tab" aria-selected="${e.floorDetailTab==="docs"}" data-floor-detail-tab="docs">工程资料（${h.length}）</button>
            </div>
            ${na("功能区与工程资料说明","功能区用于按办公区、实验区、会议室等逻辑范围归类设备与策略；标准层划分后可一键复用至其他楼层。")}
          </div>
          ${e.floorDetailTab==="zones"?w.length>0&&k.length>0?`<button type="button" class="pacom-btn" data-open-copy-zones="${s(n.id)}" ${d}>复用至其他层…</button>`:"":`<label class="pacom-btn" style="cursor:${!o||!l.floorDocs?"not-allowed":"pointer"}; opacity:${!o||!l.floorDocs?"0.45":"1"};">
                   <span>+ 关联文件</span>
                   <input type="file" name="attachDoc_${s(n.id)}" accept=".pdf,.xlsx,.xls,.dwg,.png,.jpg,.webp" data-attach-doc="${s(n.id)}" style="display:none;" ${b} />
                 </label>`}
        </div>

        ${e.floorDetailTab==="zones"?`
              ${w.length===0?`
                  <div class="pacom-setting-row" style="flex-direction:column; align-items:flex-start; gap:10px;">
                    <span class="pacom-row-sub">本层暂未划分功能区，可一键套用常用标准模板：</span>
                    <div style="display:flex; flex-wrap:wrap; gap:8px;">
                      ${as.map(A=>`<button type="button" class="pacom-btn pacom-btn--sm" data-apply-zone-tpl="${s(A.key)}" data-tpl-floor="${s(n.id)}" ${d}>+ ${s(A.label)}</button>`).join("")}
                    </div>
                  </div>`:w.map(A=>e.editingZoneId===A.id?`
                            <form class="pacom-setting-row" style="gap:10px; justify-content:flex-start; align-items:flex-end;" data-save-edit-zone="${s(A.id)}" data-zone-floor="${s(n.id)}">
                              <label class="dep-field" style="width:220px;">
                                <span class="dep-field-label">功能区名称</span>
                                <input class="pacom-input" name="zName" value="${s(A.name)}" required ${d} />
                              </label>
                              <label class="dep-field" style="width:140px;">
                                <span class="dep-field-label">空间类型</span>
                                <select class="pacom-select" name="zCat" ${d}>
                                  ${Object.keys(ja).map(H=>`<option value="${H}" ${A.category===H?"selected":""}>${ja[H]}</option>`).join("")}
                                </select>
                              </label>
                              <button type="submit" class="pacom-btn pacom-btn--primary" ${d}>保存</button>
                              <button type="button" class="pacom-btn" data-cancel-edit-zone="1">取消</button>
                            </form>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">${s(A.name)} <span class="pacom-badge pacom-badge--neutral">${s(ja[A.category]??A.category)}</span></span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" data-edit-zone="${s(A.id)}" ${d}>编辑</button>
                                <button type="button" class="pacom-btn pacom-btn--ghost pacom-btn--sm" style="color:var(--pacom-status-critical);" data-del-zone="${s(A.id)}" ${d}>删除</button>
                              </div>
                            </div>`).join("")}
              <form class="pacom-setting-row" style="gap:10px; justify-content:flex-start; align-items:flex-end;" data-add-zone="${s(n.id)}">
                <label class="dep-field" style="width:240px;">
                  <span class="dep-field-label">新增功能区</span>
                  <input class="pacom-input" name="zoneName" placeholder="如：${s(n.name)} 东侧实验区" required ${d} />
                </label>
                <label class="dep-field" style="width:140px;">
                  <span class="dep-field-label">空间类型</span>
                  <select class="pacom-select" name="zoneCat" ${d}>
                    ${Object.keys(ja).map(A=>`<option value="${A}">${ja[A]}</option>`).join("")}
                  </select>
                </label>
                <button type="submit" class="pacom-btn" ${d}>+ 添加功能区</button>
              </form>`:h.length===0?'<div class="pacom-setting-row"><span class="pacom-row-sub">本层暂无关联竣工图纸或设备手册，可点击右上角「+ 关联文件」挂载。</span></div>':h.map(A=>`
                    <div class="pacom-setting-row">
                      <div class="pacom-setting-meta">
                        <span class="pacom-setting-title">${s(A.name)}</span>
                        <span class="pacom-row-sub">${s(A.category)} ｜ ${s(A.size)} ｜ ${s(A.updatedAt)}</span>
                      </div>
                      <div class="pacom-setting-control">
                        <button type="button" class="pacom-btn pacom-btn--sm" data-preview-doc="${s(A.id)}">查阅</button>
                      </div>
                    </div>`).join("")}
      </div>
    </section>
  `}function ua(e,a,t){return e?a?"":`disabled title="${s(t)}"`:'disabled title="当前角色为只读权限"'}async function Ms(e,a,t){const n=hs(a),o=As(),l=new URLSearchParams(window.location.hash.split("?")[1]??""),d=l.get("sec");let b=d==="floorplan"||d==="devices"?"device_marking":d==="inventory"?"device_list":d==="groups"?"device_groups":d==="network"||d==="network_topo"?"device_network":d==="connections"?"connections":d==="overview"||d==="acceptance"?"acceptance":"project_config",v=d==="floors"?"floor":"overview",$=lt(),S=!1,w="",h=await a.getSpatialTree(),m=[];const k=new Map;let A=[],H={},x={version:1,dirty:!1,lastSyncedAt:null};const W=new Map;let P=[],me=[],ue=[],ve=[];const pe={...ws},ie=$.level!=="all-projects"?$.projectId:"",de=$.level==="building"||$.level==="floor"?$.buildingId:"",se=$.level==="floor"?$.floorId:"";let q=ie&&h.projects.some(O=>O.id===ie)?ie:h.projects[0]?.id??"",G=de&&h.buildings.some(O=>O.id===de&&O.projectId===q)?de:h.buildings.find(O=>O.projectId===q)?.id??"",K=se&&h.floors.some(O=>O.id===se&&O.buildingId===G)?se:He(G)[0]?.id??"",qe="all",be="",Ie="zones",ye=null,F="device",Q="",ke="all",N=!1,g=!1,I="binding",R=null,u=!1,M=!1,Y=1,we=0,Re=0,Ne="",je="all",X="all",_="mesh",L=[],ee="list",ce="",ge="all",Fe=null,Ye=null,_e=!1,Ae="active",aa=null,ze=l.get("new")==="project",Qe=!1,c=!1,C=null,oe=!1,fe=!1,Oe=!1,Ce=[],De=null,Se=new Set,Ee=!1,xe=null,Ve=null,Je=!1,Xe=null,ca=null,ne="",J="";function He(O){return[...h.floors.filter(U=>U.buildingId===O)].sort((U,p)=>Wa(p.name)-Wa(U.name))}function da(O){if(!O)return"未分配功能区";const U=h.zones.find(E=>E.id===O);if(!U)return O;const p=h.floors.find(E=>E.id===U.floorId);return p?U.name.replace(new RegExp(`^${p.name}\\s*`,"i"),""):U.name}function he(){ze=!1,Qe=!1,c=!1,C=null,oe=!1,fe=!1,De=null,Ee=!1,xe=null,Ve=null,Je=!1,Xe=null}function Oa(){return!!(ze||Qe||c||C||oe||fe||De||Ee||xe||Ve||Je||Xe)}function Ma(){if(!q){$=ra({level:"all-projects"});return}G&&K?$=ra({level:"floor",projectId:q,buildingId:G,floorId:K}):G?$=ra({level:"building",projectId:q,buildingId:G}):$=ra({level:"project",projectId:q})}function pa(O){const U=h.buildings.find(E=>E.id===O);if(!U)return;q=U.projectId,G=U.id;const p=He(U.id);p.some(E=>E.id===K)||(K=p.find(B=>(k.get(B.id)?.length??0)>0)?.id??p[0]?.id??""),Ma(),R=null,g=!1,M=!1,Y=1,we=0,Re=0}function sa(O){const U=h.floors.find(E=>E.id===O);if(!U)return;K=U.id,G=U.buildingId;const p=h.buildings.find(E=>E.id===U.buildingId);p&&(q=p.projectId),Ma(),R=null,g=!1,M=!1,ye=null,Y=1,we=0,Re=0}async function Me(){if(!K){m=[],A=[],H={},x={version:1,dirty:!1,lastSyncedAt:null},P=[],me=[],ve=[];return}const[O,U,p,E,B,V,ae]=await Promise.all([a.getFloorDevices(K).catch(()=>[]),a.listLightMarkers?a.listLightMarkers(K).catch(()=>[]):Promise.resolve([]),a.listMeshRoles?a.listMeshRoles(K).catch(()=>({})):Promise.resolve({}),a.getEdgeSyncState?a.getEdgeSyncState(K).catch(()=>({version:1,dirty:!1,lastSyncedAt:null})):Promise.resolve({version:1,dirty:!1,lastSyncedAt:null}),a.listDeviceGroups?a.listDeviceGroups(K).catch(()=>[]):Promise.resolve([]),a.listFloorDocs?a.listFloorDocs(K).catch(()=>[]):Promise.resolve([]),a.listDeliveryBatches(K).catch(()=>[])]);m=O,k.set(K,O),A=U,H=p,x=E,P=B,me=V,ve=ae,a.getDeviceParams&&await Promise.all(O.map(async r=>{const f=await a.getDeviceParams(r.id).catch(()=>null);f&&W.set(r.id,f)})),R&&!m.some(r=>r.id===R)&&(R=null,g=!1),u=m.find(r=>r.id===R)?.physicalInstalled??!1}async function ta(){if(k.clear(),!G)return;const O=He(G);await Promise.all(O.map(async U=>{if(!t.scope.allowedFloorIds.includes(U.id)){k.set(U.id,[]);return}const p=await a.getFloorDevices(U.id).catch(()=>[]);k.set(U.id,p)}))}async function Pe(){if(J="",h=await a.getSpatialTree(),h.projects.length===0)q="",G="",K="",v="overview";else{h.projects.some(p=>p.id===q)||(q=h.projects[0].id,v="overview");const O=h.buildings.filter(p=>p.projectId===q);O.some(p=>p.id===G)||(G=O[0]?.id??"",v!=="overview"&&(v="overview"));const U=G?He(G):[];U.some(p=>p.id===K)||(K=U[0]?.id??"",v==="floor"&&(v=G?"building":"overview"))}ue=q?await a.listConnections(q).catch(()=>[]):[],await ta(),await Me(),j()}const Ra=O=>{if(!document.body.contains(e)){document.removeEventListener("keydown",Ra),document.removeEventListener("click",ka),o.destroy();return}if(O.key==="Escape"){ca?(ca=null,j()):Oa()?(he(),j()):_e?(_e=!1,j()):S?(S=!1,j()):M?(M=!1,j()):g&&(g=!1,j());return}if(O.key==="Tab"&&Oa()){const U=e.querySelector(".dep-modal-card");if(!U)return;const p=Array.from(U.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])')).filter(V=>V.offsetParent!==null);if(p.length===0)return;const E=p[0],B=p[p.length-1];O.shiftKey&&document.activeElement===E?(O.preventDefault(),B.focus()):!O.shiftKey&&document.activeElement===B&&(O.preventDefault(),E.focus())}},ka=O=>{if(!document.body.contains(e)){document.removeEventListener("click",ka);return}const U=O.target;_e&&!U?.closest(".dep-more-wrap")&&(_e=!1,j()),S&&!U?.closest('[data-role="global-space-wrap"]')&&(S=!1,j())};document.addEventListener("keydown",Ra),document.addEventListener("click",ka);function ha(){const O=e.querySelector('[data-role="dep-viewport"]');O&&(O.style.transform=`translate(${we}px, ${Re}px) scale(${Y})`);const U=e.querySelector('[data-role="dep-zoom-label"]');U&&(U.textContent=`${Math.round(Y*100)}%`)}function za(O){J="",O.connectivity==="offline"?J=`单机回读自检未通过（FAIL）：「${O.name}」当前离线，请核查网关链路或现场供电。`:ne=`单机回读自检通过（PASS）：「${O.name}」指令下发与状态回读一致，已安全复位。`,j()}function Pa(O){J="";const U=h.floors.find(i=>i.id===O)?.name??"当前楼层",p=k.get(O)??(O===K?m:[]),E=p.filter(i=>i.connectivity==="offline"),B=p.length-E.length,V=new Date;aa={ranAt:`${String(V.getHours()).padStart(2,"0")}:${String(V.getMinutes()).padStart(2,"0")}:${String(V.getSeconds()).padStart(2,"0")}`,floorName:U,total:p.length,passed:B,failed:E.length,failedNames:E.map(i=>i.name)},E.length>0?J=`${U} 全层批量自检完成：${B}/${p.length} 台通过，${E.length} 台异常（${E.map(i=>i.name).join("、")}）。`:ne=`${U} 全层批量自检全部通过（${B}/${p.length}），设备已自动安全复位。`,j()}function Na(){const O=m.filter(Ta),U=[],p=O.filter(i=>i.connectivity==="offline"),E=O.filter(i=>!i.planPoint),B=O.filter(i=>H[i.id]?.proxy).length,V=O.filter(i=>H[i.id]?.relay).length,ae=O.length?V/O.length:0;O.length===0?U.push({level:"warn",title:"本层暂无蓝牙 Mesh 无线节点",detail:"可在「设备标记」中新增网关、传感器或照明面板。"}):p.length>0?p.forEach(i=>U.push({level:"fail",title:`无线节点不可达：${i.name}`,detail:"建议核查供电及网关距离，必要时在遮挡拐角处增设中继器。",deviceId:i.id})):U.push({level:"ok",title:"蓝牙 Mesh 节点全部可达",detail:`${O.length} 台无线节点均正常响应心跳。`}),O.length>0&&B<1?U.push({level:"warn",title:"缺少代理节点（Proxy）",detail:"建议每层至少开启 1–3 个传感器的 Proxy 功能，便于移动端就近入网。"}):B>0&&U.push({level:"ok",title:`代理节点配置合理（${B} 个）`,detail:"满足现场移动端多区域快速接入要求。"}),ae>.25&&O.length>=4&&U.push({level:"warn",title:`中继比例偏高（${Math.round(ae*100)}%）`,detail:"建议将 Relay 中继控制在总节点 10% 左右，避免广播风暴。"}),E.length>0&&U.push({level:"warn",title:`尚有 ${E.length} 台无线节点未完成设备标记`,detail:"请前往「设备标记」补齐平面坐标以便现场施工定位。"}),L=U,ne=`已完成无线蓝牙 Mesh 网络体检（检测 ${O.length} 台节点，发现 ${U.filter(i=>i.level!=="ok").length} 项关注）。`,j()}function ya(){const O=b==="acceptance"?He(G).flatMap(V=>k.get(V.id)??[]):m,U=[["楼层","设备名称","类别","功能区","图上坐标","协议与地址","物理复核","在线状态"].join(","),...O.map(V=>[h.floors.find(ae=>ae.id===V.floorId)?.name??V.floorId,V.name,V.category,da(V.logicalZoneId),V.planPoint?`${Math.round(V.planPoint.x*100)}%/${Math.round(V.planPoint.y*100)}%`:"未标记",V.hardwareBinding?`${V.hardwareBinding.protocol} ${V.hardwareBinding.networkAddress}`:"未绑定",V.physicalInstalled?"已复核":"待复核",V.connectivity==="online"?"在线":"离线"].join(","))],p=new Blob([`\uFEFF${U.join(`
`)}`],{type:"text/csv;charset=utf-8;"}),E=URL.createObjectURL(p),B=document.createElement("a");B.href=E,B.download="pacom-device-list.csv",B.click(),URL.revokeObjectURL(E)}async function ct(O){const U=h.buildings.find(E=>E.id===O);if(!U||!a.upsertFloor)return 0;const p=rt(U,He(U.id));for(const E of p)await a.upsertFloor({buildingId:U.id,kind:E.kind,level:E.level,name:E.name});return p.length}function dt(){const O=(U,p,E,B=!1)=>`
      <button type="button" class="pacom-unified-item" aria-current="${b===U}" data-dep-nav="${U}">
        ${re(p,16)}
        <span>${E}</span>
        ${B?'<span class="dep-rail-dot" title="有配置变更待同步至边缘网关"></span>':""}
      </button>`;return`
      <aside class="pacom-unified-rail" aria-label="系统部署菜单">
        <div class="pacom-unified-group">
          <div class="pacom-unified-group-title">空间建档</div>
          ${O("project_config","layers","项目配置")}
        </div>
        <div class="pacom-unified-group">
          <div class="pacom-unified-group-title">设备部署</div>
          ${O("device_marking","map-pin","设备标记")}
          ${O("device_list","list","设备列表")}
          ${O("device_groups","folder-kanban","设备分组")}
          ${O("device_network","waypoints","设备网络",x.dirty)}
        </div>
        <div class="pacom-unified-group">
          <div class="pacom-unified-group-title">接入与验收</div>
          ${O("connections","plug","系统接入")}
          ${O("acceptance","clipboard-check","交付验收")}
        </div>
      </aside>
    `}function Ia(O){if(h.projects.length===0)return`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-proj="1" ${ua(O,n.spatial,"待后端空间建档接口对接")}>+ 新建项目</button>`;if(b==="project_config"){if(v!=="overview")return"";const U=ua(O,n.spatial,"待后端空间建档接口对接");return`
        <button type="button" class="pacom-btn" data-open-new-proj="1" ${U}>+ 新建项目</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-bld="1" ${U}>+ 新建楼宇</button>
      `}if(b==="device_marking")return`
        <button type="button" class="pacom-btn" data-export-inv="1">导出标记表</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-dev="1" ${ua(O,n.createDevice,"待后端设备建档接口对接")}>+ 新增设备</button>
      `;if(b==="device_list")return`
        <button type="button" class="pacom-btn" data-export-inv="1">导出 CSV</button>
        <button type="button" class="pacom-btn" data-batch-ftt="1" ${m.length===0?"disabled":""}>全层自检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-dev="1" ${ua(O,n.createDevice,"待后端设备建档接口对接")}>+ 新增设备</button>
      `;if(b==="device_groups")return`<button type="button" class="pacom-btn pacom-btn--primary" data-open-new-group="1" ${ua(O,n.deviceGroups,"待后端设备分组接口对接")}>+ 新建分组</button>`;if(b==="device_network")return`
        <button type="button" class="pacom-btn" data-run-mesh-check="1">网络体检</button>
        <button type="button" class="pacom-btn pacom-btn--primary" data-sync-edge="1" ${ua(O,n.edgeSync,"待后端边缘同步接口对接")}>${x.dirty?"同步至边缘网关 *":"同步至边缘网关"}</button>
      `;if(b==="connections"){const U=ua(O,n.restartEdge,"待后端边缘维护接口对接");return`
        <div class="dep-more-wrap">
          <button type="button" class="pacom-square-icon-btn" data-toggle-conn-more="1" aria-haspopup="menu" aria-expanded="${_e}" aria-label="更多操作" title="更多操作">${re("more-horizontal",16)}</button>
          ${_e?`<div class="dep-more-menu" role="menu">
                   <button type="button" class="dep-more-item dep-more-item--danger" role="menuitem" data-req-restart-edge="1" ${U}>
                     ${re("rotate-ccw",14)}
                     <span>重启边缘服务</span>
                   </button>
                 </div>`:""}
        </div>
        <button type="button" class="pacom-btn pacom-btn--primary" data-open-new-conn="1" ${ua(O,n.manageConnections,"待后端系统接入写入接口对接")}>+ 新增接入通道</button>
      `}return`
      <button type="button" class="pacom-btn" data-export-inv="1">导出部署清单</button>
      <button type="button" class="pacom-btn pacom-btn--primary" data-open-freeze-modal="1" ${O?"":'disabled title="当前角色为只读权限"'}>交付冻结</button>
    `}function Ba(){return{session:t,canEdit:t.scope.canEditDeployment,caps:n,tree:h,activeNav:b,projectDrill:v,activeProjectId:q,activeBuildingId:G,activeFloorId:K,floorDevices:m,buildingDevicesByFloor:k,lightMarkers:A,meshRoles:H,edgeSync:x,deviceParams:W,groups:P,floorDocs:me,connections:ue,deliveries:ve,zoneBoxes:pe,floorListFilter:qe,floorListSearch:be,floorDetailTab:Ie,editingZoneId:ye,canvasBrush:F,canvasSearch:Q,deviceFilter:ke,hudPoolOpen:N,drawerOpen:g,drawerTab:I,selectedId:R,draftPhysicalInstalled:u,placingMode:M,zoom:Y,panX:we,panY:Re,listSearch:Ne,listStatusFilter:je,listCategoryFilter:X,topoMode:_,meshFindings:L,connViewMode:ee,connSearch:ce,connStatusFilter:ge,expandedConnId:Fe,copiedEndpointId:Ye,connMoreOpen:_e,acceptanceFilter:Ae,batchFttResult:aa,showNewProjectModal:ze,showEditProjectModal:Qe,showNewBuildingModal:c,editingBuildingId:C,showNewFloorModal:oe,showBatchModal:fe,batchDropActive:Oe,pendingBatchUploads:Ce,copyZoneSourceFloorId:De,copyTargetFloorIds:Se,showNewDevModal:Ee,groupModal:xe,connModal:Ve,showFreezeModal:Je,confirmDialog:Xe,lightboxPlan:ca,sortedBuildingFloors:He,getZoneLabel:da}}function j(){o.close();const O=Ba(),{canEdit:U}=O,p=t.scope.activeOverrides.find(r=>r.module==="deployment"&&r.status==="active"),E=p?`<div class="pacom-banner pacom-banner--ok">
          <div class="pacom-banner-text">
            <span class="pacom-banner-title">临时提权生效中（系统部署 ｜ ${p.durationHours}h）</span>
            <span class="pacom-banner-sub">审批人：${s(p.approvedBy)} ｜ 到期自动收回：${s(p.expiresAt.slice(0,16).replace("T"," "))} ｜ 事由：${s(p.reason)}</span>
          </div>
        </div>`:"",B=ys[b],V=b==="device_marking",ae=b==="project_config"&&v!=="overview",i=!V&&b!=="device_list";e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">系统部署</h1>
              ${ot({tree:h,session:t,scope:$,maxGranularity:B.granularity,isOpen:S,searchKeyword:w})}
            </div>
            <div class="pacom-header-meta">
              ${U?p?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${dt()}
          ${V?`<div class="pacom-unified-main--canvas">
                  <div class="dep-canvas-topbar">
                    <div class="pacom-unified-head-copy">
                      <h2 class="pacom-unified-title">${B.title}</h2>
                      <p class="pacom-unified-subtitle">${B.subtitle}</p>
                    </div>
                    <div class="pacom-unified-head-actions">
                      ${Ia(U)}
                    </div>
                  </div>
                  ${E}
                  ${ne?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${s(ne)}</span></div>`:""}
                  ${J?`<div class="pacom-alert-banner">${s(J)}</div>`:""}
                  ${js(O)}
                </div>`:`
              <div class="pacom-unified-main">
                <div class="pacom-unified-inner ${i?"pacom-unified-inner--reading":""}">
                  ${ae?"":`<div class="pacom-unified-head pacom-unified-head--split">
                          <div class="pacom-unified-head-copy">
                            <h2 class="pacom-unified-title">${B.title}</h2>
                            <p class="pacom-unified-subtitle">${B.subtitle}</p>
                          </div>
                          <div class="pacom-unified-head-actions">
                            ${Ia(U)}
                          </div>
                        </div>`}
                  ${E}
                  ${ne?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${s(ne)}</span></div>`:""}
                  ${J?`<div class="pacom-alert-banner">${s(J)}</div>`:""}
                  ${b==="project_config"?Fs(O):b==="device_list"?Cs(O):b==="device_groups"?Ds(O):b==="device_network"?qs(O):b==="connections"?xs(O):_s(O)}
                </div>
              </div>`}
        </div>
      </div>
      ${Ls(O)}
    `,pt(),o.bind(e)}async function Ua(O){try{if(O.kind==="delete_project"){const U=h.projects.find(p=>p.id===O.projectId);await a.deleteProject?.(O.projectId),he(),v="overview",ne=`已删除项目「${U?.name??O.projectId}」。`,await Pe()}else if(O.kind==="delete_building"){const U=h.buildings.find(p=>p.id===O.buildingId);await a.deleteBuilding?.(O.buildingId),he(),v="overview",ne=`已删除楼宇「${U?.name??O.buildingId}」。`,await Pe()}else if(O.kind==="delete_floor"){const U=h.floors.find(p=>p.id===O.floorId);await a.deleteFloor?.(O.floorId),he(),v="building",ne=`已删除楼层「${U?.name??O.floorId}」。`,await Pe()}else if(O.kind==="clear_floor_plan"){const U=h.floors.find(p=>p.id===O.floorId);U&&await a.upsertFloor?.({id:U.id,buildingId:U.buildingId,kind:U.kind,level:U.level,name:U.name,areaSqm:U.areaSqm,planImageUrl:null}),he(),ne=`已清空「${U?.name??""}」平面底图。`,await Pe()}else if(O.kind==="delete_zone"){const U=h.zones.find(p=>p.id===O.zoneId);await a.deleteZone?.(O.zoneId),ye===O.zoneId&&(ye=null),he(),ne=`已删除功能区「${U?.name??""}」。`,await Pe()}else if(O.kind==="delete_group"){const U=P.find(p=>p.id===O.groupId);await a.deleteDeviceGroup?.(O.groupId),he(),ne=`已删除设备分组「${U?.name??""}」。`,await Me(),j()}else if(O.kind==="delete_connection"){const U=ue.find(p=>p.id===O.connectionId);await a.deleteConnection?.(O.connectionId),he(),ne=`已删除接入通道「${U?.name??""}」。`,ue=q?await a.listConnections(q).catch(()=>[]):[],j()}else O.kind==="restart_edge"&&(await a.restartEdgeService?.(O.projectId),he(),ne="已下发「重启边缘服务」指令，边缘网关将在 5 秒内平滑重连。",j())}catch(U){he(),J=U instanceof Error?U.message:String(U),j()}}function pt(){it(e,{onToggle:()=>{S=!S,j(),S&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:i=>{w=i,j();const r=e.querySelector("[data-global-space-search]");r&&(r.focus(),r.setSelectionRange(i.length,i.length))},onPick:async i=>{if($=i,S=!1,ne="",J="",i.level==="project"){const r=i.projectId!==q;q=i.projectId,b==="project_config"&&r&&(v="overview");const f=h.buildings.find(y=>y.projectId===i.projectId);f?(G=f.id,K=He(f.id)[0]?.id??""):(G="",K=""),ue=await a.listConnections(q).catch(()=>[]),await ta(),await Me()}else if(i.level==="building")pa(i.buildingId),await ta(),await Me();else if(i.level==="floor"){const r=h.floors.find(f=>f.id===i.floorId)?.buildingId!==G;sa(i.floorId),r&&await ta(),await Me()}j()}}),e.querySelectorAll("[data-dep-nav]").forEach(i=>{i.addEventListener("click",async()=>{const r=i.dataset.depNav??"project_config";b=r,r==="project_config"&&(v="overview"),g=!1,M=!1,_e=!1,ne="",J="",r==="acceptance"&&await ta(),await Me(),j()})}),e.querySelectorAll("[data-drill-building]").forEach(i=>{const r=async()=>{const f=i.dataset.drillBuilding;f&&(pa(f),qe="all",be="",v="building",await ta(),await Me(),j())};i.addEventListener("click",f=>{f.target?.closest("button, label, input")||r()}),i.addEventListener("keydown",f=>{(f.key==="Enter"||f.key===" ")&&f.target===i&&(f.preventDefault(),r())})}),e.querySelectorAll("[data-proj-drill]").forEach(i=>{i.addEventListener("click",()=>{v=i.dataset.projDrill??"overview",ye=null,ne="",J="",j()})}),e.querySelector("[data-switch-drill-building]")?.addEventListener("change",async i=>{const r=i.currentTarget.value;r&&(pa(r),qe="all",be="",await ta(),await Me(),j())});const O=async i=>{i&&(sa(i),v="floor",await Me(),j())};e.querySelectorAll("[data-drill-floor]").forEach(i=>{i.addEventListener("click",r=>{if(r.target?.closest("button, label, input, [data-stop-row]"))return;const f=i.dataset.drillFloor;f&&O(f)})}),e.querySelectorAll("[data-drill-floor-btn]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const f=i.dataset.drillFloorBtn;f&&O(f)})}),e.querySelector("[data-switch-drill-floor]")?.addEventListener("change",i=>{const r=i.currentTarget.value;r&&O(r)}),e.querySelectorAll("[data-floor-list-filter]").forEach(i=>{i.addEventListener("click",()=>{qe=i.dataset.floorListFilter??"all",j()})}),e.querySelector("[data-floor-list-search]")?.addEventListener("input",i=>{be=i.currentTarget.value,j();const r=e.querySelector("[data-floor-list-search]");r&&(r.focus(),r.setSelectionRange(be.length,be.length))}),e.querySelectorAll("[data-floor-detail-tab]").forEach(i=>{i.addEventListener("click",()=>{Ie=i.dataset.floorDetailTab??"zones",j()})}),e.querySelectorAll("[data-jump-floor-marking]").forEach(i=>{i.addEventListener("click",async r=>{r.stopPropagation();const f=i.dataset.jumpFloorMarking;f&&sa(f),b="device_marking",await Me(),j()})}),e.querySelector("[data-jump-floor-config]")?.addEventListener("click",async i=>{const r=i.currentTarget.dataset.jumpFloorConfig;r&&sa(r),b="project_config",v=r?"floor":"overview",await Me(),j()}),e.querySelectorAll("[data-close-modals]").forEach(i=>{i.addEventListener("click",()=>{he(),j()})}),e.querySelectorAll("[data-modal-scrim]").forEach(i=>{i.addEventListener("click",r=>{r.target===i&&(he(),j())})}),e.querySelector("[data-confirm-dialog-ok]")?.addEventListener("click",()=>{Xe&&Ua(Xe.action)}),e.querySelectorAll("[data-open-new-proj]").forEach(i=>{i.addEventListener("click",()=>{he(),ze=!0,j()})}),e.querySelector("[data-open-edit-proj]")?.addEventListener("click",()=>{he(),Qe=!0,j()}),e.querySelectorAll("[data-open-new-bld]").forEach(i=>{i.addEventListener("click",()=>{he(),c=!0,j()})}),e.querySelectorAll("[data-edit-building]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation(),he(),C=i.dataset.editBuilding??null,j()})}),e.querySelector("[data-open-new-floor]")?.addEventListener("click",()=>{he(),oe=!0,j()}),e.querySelector("[data-open-batch-modal]")?.addEventListener("click",()=>{he(),fe=!0,j()}),e.querySelectorAll("[data-open-new-dev]").forEach(i=>{i.addEventListener("click",()=>{he(),Ee=!0,j()})}),e.querySelector("[data-open-new-group]")?.addEventListener("click",()=>{he(),xe={mode:"create",track:"mesh_auto"},j()}),e.querySelectorAll("[data-edit-group]").forEach(i=>{i.addEventListener("click",()=>{const r=P.find(f=>f.id===i.dataset.editGroup);r&&(he(),xe={mode:"edit",groupId:r.id,track:r.track},j())})}),e.querySelector("[data-group-modal-track]")?.addEventListener("change",i=>{xe&&(xe={...xe,track:i.currentTarget.value??"mesh_auto"},j())}),e.querySelector("[data-open-new-conn]")?.addEventListener("click",()=>{he(),_e=!1,Ve={mode:"create"},j()}),e.querySelectorAll("[data-edit-conn]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.editConn;r&&(he(),Ve={mode:"edit",connectionId:r},j())})}),e.querySelector("[data-open-freeze-modal]")?.addEventListener("click",()=>{he(),Je=!0,j()}),e.querySelectorAll("[data-open-freeze-floor]").forEach(i=>{i.addEventListener("click",async()=>{const r=i.dataset.openFreezeFloor;r&&sa(r),await Me(),he(),Je=!0,j()})}),e.querySelector("[data-create-project]")?.addEventListener("submit",async i=>{i.preventDefault();const r=new FormData(i.currentTarget),f=String(r.get("pName")??"").trim(),y=String(r.get("pCity")??"").trim(),T=String(r.get("pAddr")??"").trim(),z=String(r.get("pLng")??"").trim(),Z=String(r.get("pLat")??"").trim();if(!f)return;let te;if(z||Z){const le=Number(z),Le=Number(Z);if(!Number.isFinite(le)||!Number.isFinite(Le)||le<-180||le>180||Le<-90||Le>90){J="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",j();return}te={lng:le,lat:Le,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{const le=await a.createProject?.({name:f,city:y,address:T,location:te});he(),b="project_config",v="overview",le&&(q=le.id,G="",K="",$=ra({level:"project",projectId:le.id})),ne=`已创建项目「${f}」，下一步可添加园区楼宇。`,await Pe()}catch(le){J=le instanceof Error?le.message:String(le),j()}}),e.querySelector("[data-save-project]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget,f=r.dataset.saveProject??q,y=new FormData(r),T=String(y.get("pName")??"").trim(),z=String(y.get("pCity")??"").trim(),Z=String(y.get("pAddr")??"").trim(),te=String(y.get("pLng")??"").trim(),le=String(y.get("pLat")??"").trim();let Le;if(te||le){const Te=Number(te),Be=Number(le);if(!Number.isFinite(Te)||!Number.isFinite(Be)||Te<-180||Te>180||Be<-90||Be>90){J="经纬度格式无效：经度需在 -180 至 180 之间，纬度需在 -90 至 90 之间。",j();return}Le={lng:Te,lat:Be,crs:"GCJ02",confirmed:!0,confirmedAt:new Date().toISOString()}}try{await a.updateProject?.(f,{name:T,city:z,address:Z,location:Le}),he(),ne=`已保存项目「${T||"当前项目"}」信息。`,await Pe()}catch(Te){J=Te instanceof Error?Te.message:String(Te),j()}}),e.querySelector("[data-upload-proj]")?.addEventListener("change",async i=>{const r=i.currentTarget,f=r.dataset.uploadProj,y=r.files?.[0];if(!(!f||!y))try{const T=await Za(y);await a.updateProject?.(f,{imageUrl:T}),ne=`已更新项目封面图（${y.name}）。`,await Pe()}catch(T){J=T instanceof Error?T.message:String(T),j()}}),e.querySelector("[data-delete-proj]")?.addEventListener("click",i=>{const r=i.currentTarget.dataset.deleteProj,f=h.projects.find(y=>y.id===r);!r||!f||(he(),Xe={title:`删除项目「${f.name}」`,body:"将同时移除该项目下的全部楼宇、楼层与功能区配置，此操作不可撤销。确认继续吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_project",projectId:r}},j())}),e.querySelector("[data-create-bld]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget,f=r.dataset.createBld??q,y=new FormData(r),T=String(y.get("bName")??"").trim(),z=String(y.get("bArea")??"").trim(),Z=Math.max(1,Number(y.get("bAbove")??12)),te=Math.max(0,Number(y.get("bBelow")??0)),le=!!y.get("bRoof"),Le=!!y.get("bAutoFloors");if(T)try{const Te=await a.upsertBuilding?.({projectId:f,name:T,aboveFloors:Z,belowFloors:te,hasRoof:le,areaSqm:z?Number(z):null});he();let Be=0;if(Te&&(G=Te.id,Le)){for(let We=1;We<=Z;We+=1)await a.upsertFloor?.({buildingId:Te.id,kind:"above",level:We,name:`${We}F`}),Be+=1;for(let We=1;We<=te;We+=1)await a.upsertFloor?.({buildingId:Te.id,kind:"below",level:-We,name:`B${We}`}),Be+=1;le&&(await a.upsertFloor?.({buildingId:Te.id,kind:"roof",level:99,name:"RF"}),Be+=1),v="building"}ne=Le?`已创建楼宇「${T}」并自动生成 ${Be} 个楼层，现可直接批量导入平面底图。`:`已创建楼宇「${T}」。`,await Pe()}catch(Te){J=Te instanceof Error?Te.message:String(Te),j()}}),e.querySelector("[data-save-building]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget,f=r.dataset.saveBuilding,y=h.buildings.find(Te=>Te.id===f);if(!y)return;const T=new FormData(r),z=String(T.get("bName")??"").trim()||y.name,Z=String(T.get("bArea")??"").trim(),te=Math.max(1,Number(T.get("bAbove")??y.aboveFloors)),le=Math.max(0,Number(T.get("bBelow")??y.belowFloors)),Le=!!T.get("bRoof");try{await a.upsertBuilding?.({id:f,projectId:y.projectId,name:z,aboveFloors:te,belowFloors:le,hasRoof:Le,areaSqm:Z?Number(Z):null}),he(),ne=`已保存楼宇「${z}」参数。`,await Pe()}catch(Te){J=Te instanceof Error?Te.message:String(Te),j()}}),e.querySelector("[data-delete-building]")?.addEventListener("click",i=>{const r=i.currentTarget.dataset.deleteBuilding,f=h.buildings.find(y=>y.id===r);!r||!f||(he(),Xe={title:`删除楼宇「${f.name}」`,body:"将同步删除该楼宇下的全部楼层底图与功能区配置，此操作不可撤销。确认继续吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_building",buildingId:r}},j())}),e.querySelector("[data-upload-bld]")?.addEventListener("change",async i=>{const r=i.currentTarget,f=r.dataset.uploadBld,y=r.files?.[0],T=h.buildings.find(z=>z.id===f);if(!(!f||!y||!T))try{const z=await Za(y);await a.upsertBuilding?.({id:T.id,projectId:T.projectId,name:T.name,aboveFloors:T.aboveFloors,belowFloors:T.belowFloors,hasRoof:T.hasRoof,areaSqm:T.areaSqm,imageUrl:z}),ne=`已更新「${T.name}」外观图（${y.name}）。`,await Pe()}catch(z){J=z instanceof Error?z.message:String(z),j()}}),e.querySelectorAll("[data-fill-missing-floors]").forEach(i=>{i.addEventListener("click",async r=>{r.stopPropagation();const f=i.dataset.fillMissingFloors;if(f)try{const y=await ct(f);ne=y>0?`已自动补齐 ${y} 个楼层。`:"当前楼宇楼层已完整。",await Pe()}catch(y){J=y instanceof Error?y.message:String(y),j()}})}),e.querySelector("[data-create-floor]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget,f=r.dataset.createFloor,y=new FormData(r),T=String(y.get("fName")??"").trim().toUpperCase(),z=String(y.get("fArea")??"").trim();if(!T)return;const Z=Sa(T)??T;if(He(f).some(Be=>(Sa(Be.name)??Be.name.toUpperCase())===Z)){J=`楼层「${T}」已存在，请使用其他名称。`,j();return}const le=Wa(T),Le=le>=999?"roof":le<0?"below":"above",Te=le>=999?99:le||1;try{const Be=await a.upsertFloor?.({buildingId:f,kind:Le,level:Te,name:T,areaSqm:z?Number(z):null});he(),Be&&(K=Be.id,v="floor"),ne=`已新增楼层「${T}」。`,await Pe()}catch(Be){J=Be instanceof Error?Be.message:String(Be),j()}}),e.querySelector("[data-save-floor]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget,f=r.dataset.saveFloor,y=h.floors.find(We=>We.id===f);if(!y)return;const T=new FormData(r),z=String(T.get("fName")??"").trim()||y.name,Z=String(T.get("fArea")??"").trim(),te=Sa(z)??z.toUpperCase();if(He(y.buildingId).some(We=>We.id!==y.id&&(Sa(We.name)??We.name.toUpperCase())===te)){J=`楼层「${z}」已存在，请避免重复命名。`,j();return}const Le=Wa(z),Te=Le>=999?"roof":Le<0?"below":"above",Be=Le>=999?99:Le||y.level;try{await a.upsertFloor?.({id:y.id,buildingId:y.buildingId,kind:Te,level:Be,name:z,areaSqm:Z?Number(Z):null}),ne=`已保存楼层「${z}」属性。`,await Pe()}catch(We){J=We instanceof Error?We.message:String(We),j()}}),e.querySelector("[data-delete-floor]")?.addEventListener("click",i=>{const r=i.currentTarget.dataset.deleteFloor,f=h.floors.find(y=>y.id===r);!r||!f||(he(),Xe={title:`删除楼层「${f.name}」`,body:"将同时移除本层的平面底图与功能区划分，此操作不可撤销。确认继续吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_floor",floorId:r}},j())});async function U(i,r){const f=h.floors.find(y=>y.id===i);if(f)try{const y=await Za(r);await a.upsertFloor?.({id:f.id,buildingId:f.buildingId,kind:f.kind,level:f.level,name:f.name,areaSqm:f.areaSqm,planImageUrl:y}),ne=`已更新「${f.name}」平面底图（${r.name}）。`,await Pe()}catch(y){J=y instanceof Error?y.message:String(y),j()}}e.querySelectorAll("[data-upload-floor]").forEach(i=>{i.addEventListener("change",()=>{const r=i.dataset.uploadFloor,f=i.files?.[0];r&&f&&U(r,f)})});const p=e.querySelector("[data-single-floor-drop]");p&&t.scope.canEditDeployment&&n.spatial&&(p.addEventListener("dragover",i=>{i.preventDefault(),p.classList.add("is-drop-active")}),p.addEventListener("dragleave",()=>{p.classList.remove("is-drop-active")}),p.addEventListener("drop",i=>{i.preventDefault(),p.classList.remove("is-drop-active");const r=p.dataset.singleFloorDrop,f=Array.from(i.dataTransfer?.files??[]).find(y=>y.type.startsWith("image/"));r&&f&&U(r,f)})),e.querySelector("[data-clear-floor-plan]")?.addEventListener("click",i=>{const r=i.currentTarget.dataset.clearFloorPlan,f=h.floors.find(y=>y.id===r);!r||!f||(he(),Xe={title:`清空「${f.name}」平面底图`,body:"清空后本层将回到无图状态（不会删除已绑定的设备物理安装记录）。确认清空吗？",confirmLabel:"确认清空",danger:!0,action:{kind:"clear_floor_plan",floorId:r}},j())}),e.querySelectorAll("[data-open-lightbox]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const f=i.dataset.lbTitle??"平面底图预览",y=i.dataset.lbSrc??"";y&&(ca={title:f,imageUrl:y},j())})}),e.querySelector("[data-close-lightbox]")?.addEventListener("click",()=>{ca=null,j()}),e.querySelector("[data-lightbox-scrim]")?.addEventListener("click",i=>{i.target===i.currentTarget&&(ca=null,j())});function E(i,r){if(!i||r.length===0)return;const f=He(i),y=new Map;f.forEach(T=>y.set(Sa(T.name)??T.name.toUpperCase(),T)),Ce=r.map((T,z)=>{const Z=Sa(T.name),te=Z?y.get(Z):void 0;return{id:`bu-${Date.now().toString(36)}-${z}`,file:T,matchedFloorId:te?.id??null}}),fe=!0,j()}e.querySelector("[data-batch-upload-floors]")?.addEventListener("change",i=>{const r=i.currentTarget;E(r.dataset.batchUploadFloors??"",Array.from(r.files??[]))});const B=e.querySelector("[data-batch-dropzone]");B&&t.scope.canEditDeployment&&n.spatial&&(B.addEventListener("dragover",i=>{i.preventDefault(),Oe||(Oe=!0,B.style.borderColor="var(--pacom-accent-solid)",B.style.background="var(--pacom-accent-soft)")}),B.addEventListener("dragleave",()=>{Oe=!1,B.style.borderColor="",B.style.background=""}),B.addEventListener("drop",i=>{i.preventDefault(),Oe=!1;const r=Array.from(i.dataTransfer?.files??[]).filter(f=>f.type.startsWith("image/"));E(B.dataset.batchDropzone??"",r)})),e.querySelectorAll("[data-batch-override-floor]").forEach(i=>{i.addEventListener("change",()=>{const r=Ce.find(f=>f.id===i.dataset.batchOverrideFloor);r&&(r.matchedFloorId=i.value||null,j())})}),e.querySelector("[data-cancel-batch-upload]")?.addEventListener("click",()=>{Ce=[],j()}),e.querySelector("[data-confirm-batch-upload]")?.addEventListener("click",async()=>{const i=Ce.filter(f=>f.matchedFloorId),r=Ce.length-i.length;if(i.length!==0)try{for(const f of i){const y=h.floors.find(z=>z.id===f.matchedFloorId);if(!y)continue;const T=await Za(f.file);await a.upsertFloor?.({id:y.id,buildingId:y.buildingId,kind:y.kind,level:y.level,name:y.name,areaSqm:y.areaSqm,planImageUrl:T})}Ce=[],he(),ne=`已批量导入 ${i.length} 个楼层平面底图${r>0?`（跳过 ${r} 张未分配文件）`:""}。`,await Pe()}catch(f){J=f instanceof Error?f.message:String(f),j()}}),e.querySelectorAll("[data-apply-zone-tpl]").forEach(i=>{i.addEventListener("click",async()=>{const r=as.find(y=>y.key===i.dataset.applyZoneTpl),f=h.floors.find(y=>y.id===i.dataset.tplFloor);if(!(!r||!f))try{for(const y of r.items){const T=await a.upsertZone?.({floorId:f.id,name:`${f.name} ${y.suffix}`,category:y.category});T&&(pe[T.id]={left:20,top:20,width:24,height:24})}ne=`已按「${r.label}」模板为 ${f.name} 创建 ${r.items.length} 个功能区。`,await Pe()}catch(y){J=y instanceof Error?y.message:String(y),j()}})}),e.querySelector("[data-attach-doc]")?.addEventListener("change",async i=>{const r=i.currentTarget,f=r.dataset.attachDoc,y=r.files?.[0],T=h.floors.find(Z=>Z.id===f);if(!f||!y||!T||!a.attachFloorDoc)return;const z=y.size>=1024*1024?`${(y.size/(1024*1024)).toFixed(1)} MB`:`${Math.max(1,Math.round(y.size/1024))} KB`;try{await a.attachFloorDoc({floorId:f,name:y.name,category:y.name.toLowerCase().endsWith(".xlsx")||y.name.toLowerCase().endsWith(".xls")?"点位清单":"竣工图纸",boundScope:`${T.name} ｜ 工程资料`,updatedAt:new Date().toISOString().slice(0,10),size:z}),ne=`已为 ${T.name} 关联文档「${y.name}」。`,await Me(),j()}catch(Z){J=Z instanceof Error?Z.message:String(Z),j()}}),e.querySelectorAll("[data-preview-doc]").forEach(i=>{i.addEventListener("click",()=>{const r=me.find(f=>f.id===i.dataset.previewDoc);r&&(ne=`已调阅工程附件「${r.name}」（关联范围：${r.boundScope}，更新于 ${r.updatedAt}）。`,j())})}),e.querySelector("[data-add-zone]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget.dataset.addZone,f=new FormData(i.currentTarget),y=String(f.get("zoneName")??"").trim(),T=String(f.get("zoneCat")??"office");if(y)try{const z=await a.upsertZone?.({floorId:r,name:y,category:T});z&&(pe[z.id]={left:20,top:20,width:24,height:24}),ne=`已添加功能区「${y}」。`,await Pe()}catch(z){J=z instanceof Error?z.message:String(z),j()}}),e.querySelectorAll("[data-edit-zone]").forEach(i=>{i.addEventListener("click",()=>{ye=i.dataset.editZone??null,j()})}),e.querySelector("[data-cancel-edit-zone]")?.addEventListener("click",()=>{ye=null,j()}),e.querySelector("[data-save-edit-zone]")?.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget,f=new FormData(r),y=String(f.get("zName")??"").trim(),T=String(f.get("zCat")??"office");if(y)try{await a.upsertZone?.({id:r.dataset.saveEditZone,floorId:r.dataset.zoneFloor,name:y,category:T}),ye=null,ne=`已更新功能区「${y}」。`,await Pe()}catch(z){J=z instanceof Error?z.message:String(z),j()}}),e.querySelectorAll("[data-del-zone]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.delZone,f=h.zones.find(y=>y.id===r);!r||!f||(he(),Xe={title:`删除功能区「${f.name}」`,body:"删除后该功能区将从本层移除，原归属设备的逻辑分区将置为未分配。确认删除吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_zone",zoneId:r}},j())})}),e.querySelectorAll("[data-open-copy-zones]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.openCopyZones??null;he(),De=r,Se=new Set(He(G).filter(f=>f.id!==r&&f.kind==="above"&&h.zones.filter(y=>y.floorId===f.id).length===0).map(f=>f.id)),j()})}),e.querySelectorAll("[data-copy-preset]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.copyPreset,f=He(G).filter(y=>y.id!==De);r==="empty"?Se=new Set(f.filter(y=>y.kind==="above"&&h.zones.filter(T=>T.floorId===y.id).length===0).map(y=>y.id)):r==="above"?Se=new Set(f.filter(y=>y.kind==="above").map(y=>y.id)):Se.clear(),j()})}),e.querySelectorAll("[data-copy-target-floor]").forEach(i=>{i.addEventListener("change",()=>{const r=i.dataset.copyTargetFloor;r&&(i.checked?Se.add(r):Se.delete(r),j())})}),e.querySelector("[data-confirm-copy-zones]")?.addEventListener("click",async i=>{const r=i.currentTarget.dataset.confirmCopyZones,f=Array.from(Se);if(!(!r||f.length===0))try{const y=await a.copyZonesToFloors?.(r,f)??0;he(),Se.clear(),ne=`已将当前层功能区复用至 ${f.length} 个目标楼层（共新增 ${y} 个功能区）。`,await Pe()}catch(y){J=y instanceof Error?y.message:String(y),j()}}),e.querySelectorAll("[data-scrubber-floor]").forEach(i=>{i.addEventListener("click",async()=>{const r=i.dataset.scrubberFloor;r&&(sa(r),await Me(),j())})});const V=e.querySelector("[data-dep-canvas-search]");V?.addEventListener("focus",()=>{N||(N=!0,j(),e.querySelector("[data-dep-canvas-search]")?.focus())}),V?.addEventListener("input",i=>{Q=i.currentTarget.value,N=!0,j();const r=e.querySelector("[data-dep-canvas-search]");r&&(r.focus(),r.setSelectionRange(Q.length,Q.length))}),e.querySelector("[data-toggle-hud-pool]")?.addEventListener("click",()=>{N=!N,j()}),e.querySelector("[data-close-hud-pool]")?.addEventListener("click",()=>{N=!1,j()}),e.querySelectorAll("[data-dev-filter]").forEach(i=>{i.addEventListener("click",()=>{ke=i.dataset.devFilter??"all",j()})}),e.querySelectorAll("[data-brush]").forEach(i=>{i.addEventListener("click",()=>{F=i.dataset.brush??"device",j()})}),e.querySelectorAll("[data-dep-zoom]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.depZoom;r==="in"?Y=Math.min(2.6,Number((Y+.2).toFixed(2))):r==="out"?Y=Math.max(.6,Number((Y-.2).toFixed(2))):(Y=1,we=0,Re=0),ha()})});const ae=e.querySelector('[data-role="dep-stage"]');if(ae&&!M){let i=!1,r=0,f=0,y=0,T=0;ae.addEventListener("pointerdown",Z=>{Z.target?.closest("button, input, select, .pacom-hud-search-wrap, .dep-canvas-mode-pill")||(i=!0,r=Z.clientX,f=Z.clientY,y=we,T=Re,ae.classList.add("is-panning"),ae.setPointerCapture?.(Z.pointerId))}),ae.addEventListener("pointermove",Z=>{i&&(we=y+(Z.clientX-r),Re=T+(Z.clientY-f),ha())});const z=()=>{i&&(i=!1,ae.classList.remove("is-panning"))};ae.addEventListener("pointerup",z),ae.addEventListener("pointercancel",z),ae.addEventListener("wheel",Z=>{Z.preventDefault();const te=Z.deltaY<0?.12:-.12;Y=Math.max(.6,Math.min(2.6,Number((Y+te).toFixed(2)))),ha()},{passive:!1}),ae.addEventListener("dblclick",Z=>{Z.target?.closest("button")||(Y=1,we=0,Re=0,ha())})}e.querySelector("[data-list-search]")?.addEventListener("input",i=>{Ne=i.currentTarget.value,j();const r=e.querySelector("[data-list-search]");r&&(r.focus(),r.setSelectionRange(Ne.length,Ne.length))}),e.querySelector("[data-list-filter]")?.addEventListener("change",i=>{je=i.currentTarget.value??"all",j()}),e.querySelector("[data-list-cat-filter]")?.addEventListener("change",i=>{X=i.currentTarget.value??"all",j()}),e.querySelectorAll("[data-refresh-dep]").forEach(i=>{i.addEventListener("click",()=>void Pe())}),e.querySelector("[data-create-dev]")?.addEventListener("submit",async i=>{if(i.preventDefault(),!a.createDeploymentDevice)return;const r=new FormData(i.currentTarget),f=String(r.get("devName")??"").trim(),y=String(r.get("devPreset")??"sensor"),T=String(r.get("devZone")??"")||null,z=wt.find(Z=>Z.key===y)??wt[0];if(!(!f||!K))try{const Z=await a.createDeploymentDevice({projectId:q,buildingId:G,floorId:K,logicalZoneId:T,name:f,category:z.category,defaultProxy:z.defaultProxy,defaultRelay:z.defaultRelay});he(),R=Z.id,g=!0,I="binding",ne=`已新增「${f}」（${z.hint}）。`,await Me(),j()}catch(Z){J=Z instanceof Error?Z.message:String(Z),j()}}),e.querySelectorAll("[data-pick-dev]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation(),R=i.dataset.pickDev??null,g=!0,I="binding",u=m.find(y=>y.id===R)?.physicalInstalled??!1,j()})}),e.querySelectorAll("[data-open-dev-drawer]").forEach(i=>{i.addEventListener("click",r=>{if(r.target?.closest("button"))return;R=i.dataset.openDevDrawer??null,g=!0,I="binding",u=m.find(y=>y.id===R)?.physicalInstalled??!1,j()})}),e.querySelectorAll("[data-open-dev-params]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation(),R=i.dataset.openDevParams??null,g=!0,I="params",u=m.find(y=>y.id===R)?.physicalInstalled??!1,j()})}),e.querySelectorAll("[data-drawer-tab]").forEach(i=>{i.addEventListener("click",()=>{I=i.dataset.drawerTab??"binding",j()})}),e.querySelector("[data-close-sel]")?.addEventListener("click",()=>{g=!1,M=!1,j()}),e.querySelectorAll("[data-toggle-place]").forEach(i=>{i.addEventListener("click",()=>{b!=="device_marking"?(b="device_marking",M=!0):M=!M,j()})}),e.querySelector("[data-toggle-phys]")?.addEventListener("click",()=>{u=!u,j()}),e.querySelectorAll("[data-ping-dev]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const f=m.find(y=>y.id===i.dataset.pingDev);f&&(ne=`已向「${f.name}」发送 Ping 定位指令，现场设备将闪烁 5 秒以便确认安装位置。`,j())})}),e.querySelector("[data-add-light-marker]")?.addEventListener("click",async i=>{if(!a.addLightMarker)return;const r=i.currentTarget.dataset.addLightMarker,f=A.filter(y=>y.deviceId===r).length+1;try{await a.addLightMarker({deviceId:r,floorId:K,channel:`回路 ${f}`,label:`照明点位 ${f}`,x:Math.min(.86,.35+f*.1),y:.42}),F="light_marker",ne=`已新增「回路 ${f}」可视化灯点。`,await Me(),j()}catch(y){J=y instanceof Error?y.message:String(y),j()}}),e.querySelectorAll("[data-del-light-marker]").forEach(i=>{i.addEventListener("click",async()=>{if(!a.deleteLightMarker)return;const r=i.dataset.delLightMarker;if(r)try{await a.deleteLightMarker(r),await Me(),j()}catch(f){J=f instanceof Error?f.message:String(f),j()}})}),e.querySelectorAll("[data-toggle-mesh-role]").forEach(i=>{i.addEventListener("click",async()=>{if(!a.updateMeshRole)return;const r=i.dataset.meshDev,f=i.dataset.toggleMeshRole,y=H[r]??{proxy:!1,relay:!1,meshUuid:`mesh-${K.slice(-4)}`};try{await a.updateMeshRole(r,K,{[f]:!y[f]}),ne=`已更新节点 ${f.toUpperCase()} 状态，可在「设备网络」中同步至边缘网关。`,await Me(),j()}catch(T){J=T instanceof Error?T.message:String(T),j()}})}),e.querySelector('[data-role="deploy-plan"]')?.addEventListener("click",async i=>{const r=m.find(z=>z.id===R);if(!M||!r)return;const f=i.currentTarget.getBoundingClientRect(),y=Math.max(.02,Math.min(.98,(i.clientX-f.left)/f.width)),T=Math.max(.02,Math.min(.98,(i.clientY-f.top)/f.height));try{await a.updateDevicePlanPoint({deviceId:r.id,floorId:K,planVersion:r.planPoint?.planVersion??1,x:y,y:T,expectedVersion:r.version}),M=!1,ne=`已更新「${r.name}」图上坐标（硬件绑定与物理安装态保持不变）。`,await Me(),j()}catch(z){J=z instanceof Error?z.message:String(z),j()}}),e.querySelector('[data-role="binding-form"]')?.addEventListener("submit",async i=>{i.preventDefault();const r=m.find(T=>T.id===R);if(!r)return;const f=new FormData(i.currentTarget),y=m.find(T=>T.category==="gateway")?.id??r.id;try{await a.updateDeviceHardwareBinding({deviceId:r.id,gatewayId:r.hardwareBinding?.gatewayId??y,protocol:String(f.get("protocol")),networkAddress:String(f.get("networkAddress")??""),portOrChannel:String(f.get("portOrChannel")??""),physicalInstalled:u,expectedVersion:r.version}),ne=`已保存「${r.name}」的硬件绑定与物理安装复核状态。`,await Me(),j()}catch(T){J=T instanceof Error?T.message:String(T),j()}}),e.querySelector("[data-save-dev-params]")?.addEventListener("submit",async i=>{if(i.preventDefault(),!a.saveDeviceParams)return;const r=i.currentTarget.dataset.saveDevParams,f=new FormData(i.currentTarget);try{await a.saveDeviceParams(r,K,{offDelayMin:Number(f.get("offDelayMin")??15),restoreMin:Number(f.get("restoreMin")??30),luxOn:Number(f.get("luxOn")??280),luxOff:Number(f.get("luxOff")??450)}),ne="设备自治延时与光感门限参数已下发并同步至配置基线。",await Me(),j()}catch(y){J=y instanceof Error?y.message:String(y),j()}}),e.querySelector("[data-ftt-test]")?.addEventListener("click",()=>{const i=m.find(r=>r.id===R);i&&za(i)}),e.querySelectorAll("[data-ftt-dev]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const f=m.find(y=>y.id===i.dataset.fttDev);f&&za(f)})}),e.querySelectorAll("[data-batch-ftt]").forEach(i=>{i.addEventListener("click",()=>Pa(K))}),e.querySelectorAll("[data-floor-ftt]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.floorFtt;r&&Pa(r)})}),e.querySelectorAll("[data-export-inv]").forEach(i=>{i.addEventListener("click",()=>ya())}),e.querySelector("[data-save-group]")?.addEventListener("submit",async i=>{if(i.preventDefault(),!a.upsertDeviceGroup)return;const r=i.currentTarget,f=r.dataset.saveGroup||void 0,y=new FormData(r),T=String(y.get("gName")??"").trim(),z=y.get("gTrack")??"mesh_auto",Z=String(y.get("gType")??"灯光联动组"),te=Array.from(new Set(y.getAll("gMemberIds").map(le=>String(le)).filter(Boolean)));if(T)try{await a.upsertDeviceGroup({id:f,track:z,groupType:Z,name:T,floorId:K,includesAdapter:z==="mesh_auto",deviceIds:te}),he(),ne=`${f?"已更新":"已新建"}${z==="mesh_auto"?"端侧蓝牙 Mesh 自治组":"云端业务分组"}「${T}」（${te.length} 台成员）。`,await Me(),j()}catch(le){J=le instanceof Error?le.message:String(le),j()}}),e.querySelectorAll("[data-del-group]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.delGroup,f=P.find(y=>y.id===r);!r||!f||(he(),Xe={title:`删除设备分组「${f.name}」`,body:"删除分组不会移除成员设备，但会解除该群组的批量联动配置。确认删除吗？",confirmLabel:"确认删除",danger:!0,action:{kind:"delete_group",groupId:r}},j())})}),e.querySelectorAll("[data-test-group]").forEach(i=>{i.addEventListener("click",()=>{const r=P.find(f=>f.id===i.dataset.testGroup);r&&(ne=`已向分组「${r.name}」发送群组试控指令，${r.deviceIds.length} 台成员回读正常。`,j())})}),e.querySelector("[data-run-mesh-check]")?.addEventListener("click",()=>Na()),e.querySelector("[data-clear-mesh-findings]")?.addEventListener("click",()=>{L=[],j()}),e.querySelector("[data-sync-edge]")?.addEventListener("click",async()=>{if(!(!a.syncEdgeGateway||!K))try{const i=await a.syncEdgeGateway(K);x=i,ne=`已将本层蓝牙 Mesh 网络配置与分组同步下发至边缘网关（生效基线 v${i.version}）。`,j()}catch(i){J=i instanceof Error?i.message:String(i),j()}}),e.querySelectorAll("[data-topo-mode]").forEach(i=>{i.addEventListener("click",()=>{_=i.dataset.topoMode??"mesh",j()})}),e.querySelectorAll("[data-topo-jump]").forEach(i=>{i.addEventListener("click",()=>{R=i.dataset.topoJump??null,g=!0,I="binding",b="device_marking",u=m.find(f=>f.id===R)?.physicalInstalled??!1,j()})}),e.querySelector("[data-toggle-conn-more]")?.addEventListener("click",i=>{i.stopPropagation(),_e=!_e,j()}),e.querySelector("[data-req-restart-edge]")?.addEventListener("click",()=>{_e=!1,he(),Xe={title:"确认重启边缘服务",body:"重启将导致当前项目边缘网关通信短暂中断约 5 秒，正在进行的实时采集将自动重连。确认执行重启吗？",confirmLabel:"确认重启",danger:!0,action:{kind:"restart_edge",projectId:q}},j()}),e.querySelectorAll("[data-conn-view]").forEach(i=>{i.addEventListener("click",()=>{ee=i.dataset.connView??"list",j()})}),e.querySelector("[data-conn-search]")?.addEventListener("input",i=>{ce=i.currentTarget.value,j();const r=e.querySelector("[data-conn-search]");r&&(r.focus(),r.setSelectionRange(ce.length,ce.length))}),e.querySelector("[data-conn-status-filter]")?.addEventListener("change",i=>{ge=i.currentTarget.value??"all",j()}),e.querySelector("[data-save-conn]")?.addEventListener("submit",async i=>{if(i.preventDefault(),!a.upsertConnection)return;const r=i.currentTarget,f=r.dataset.saveConn||void 0,y=new FormData(r),T=String(y.get("cName")??"").trim(),z=String(y.get("cProto")??"bacnet_ip"),Z=String(y.get("cEndpoint")??"").trim();if(!(!T||!Z))try{await a.upsertConnection({id:f,projectId:q,buildingId:G,floorId:K||void 0,name:T,protocol:z,endpoint:Z}),he(),J="",ne=f?`已更新接入通道「${T}」（${Z}）。`:`已接入「${T}」（${Z}），连通测试通过（18 ms）。`,ue=await a.listConnections(q).catch(()=>[]),j()}catch(te){J=te instanceof Error?te.message:String(te),j()}}),e.querySelectorAll("[data-del-conn]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.delConn,f=ue.find(y=>y.id===r);!r||!f||(he(),Xe={title:`删除接入通道「${f.name}」`,body:`删除后将停止对端点 ${f.endpoint} 的数据采集与控制下发，此操作不可撤销。确认删除吗？`,confirmLabel:"确认删除",danger:!0,action:{kind:"delete_connection",connectionId:r}},j())})}),e.querySelectorAll("[data-expand-conn]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.expandConn??null;Fe=Fe===r?null:r,j()})}),e.querySelectorAll("[data-ping-conn]").forEach(i=>{i.addEventListener("click",()=>{const r=ue.find(f=>f.id===i.dataset.pingConn);r&&(J="",r.status==="connected"?ne=`连通测试通过：「${r.name}」（${r.endpoint}）响应正常，延迟 18 ms。`:J=`连通测试异常：「${r.name}」（${r.endpoint}）超时无应答，建议排查端口冲突与 RS485 链路。`,j())})}),e.querySelectorAll("[data-copy-endpoint]").forEach(i=>{i.addEventListener("click",async()=>{const r=i.dataset.endpointVal??"",f=i.dataset.copyEndpoint??null;try{await navigator.clipboard.writeText(r),Ye=f,j(),window.setTimeout(()=>{Ye=null,j()},1600)}catch{}})}),e.querySelectorAll("[data-acc-filter]").forEach(i=>{i.addEventListener("click",()=>{Ae=i.dataset.accFilter??"active",j()})}),e.querySelectorAll("[data-matrix-nav]").forEach(i=>{i.addEventListener("click",async()=>{const r=i.dataset.matrixFloor,f=i.dataset.matrixNav??"device_marking";r&&sa(r),b=f,f==="project_config"&&(v=r?"floor":"overview"),await Me(),j()})}),e.querySelector("[data-confirm-freeze]")?.addEventListener("submit",async i=>{if(i.preventDefault(),!K)return;const r=new FormData(i.currentTarget),f=String(r.get("freezeNote")??"").trim();try{const y=await a.freezeDeliveryBatch(K,f||"交付验收发起交付冻结");he(),ne=`已生成交付冻结快照 ${y.versionTag}（核验 ${y.verifiedCount}/${y.deviceCount}）。`,await Me(),j()}catch(y){he(),J=y instanceof Error?y.message:String(y),j()}})}await Pe()}const Rs=new Set(["lighting","hvac","alarm_rules"]),zt={lighting:"照明",hvac:"暖通",alarm_rules:"告警",cbm:"工时维保"},Ka=[{id:"comfort",title:"舒适优先",badge:"100% 准点达温",desc:"所有功能区在入驻时刻前全部达到设定温度，适合重要接待与精密实验时段。",estSaving:"预计节能 4%–6%",predictedStart:"08:02（提前 28 分钟）",savedHours:"2.4 小时"},{id:"balanced",title:"均衡节能（推荐）",badge:"动态预冷/预热",desc:"结合室外气象与历史热特性智能推迟开机，兼顾实验与办公舒适度。",estSaving:"预计节能 10%–14%",predictedStart:"08:12（推迟 18 分钟）",savedHours:"6.5 小时"},{id:"savings",title:"极致节能",badge:"无人区零新风",desc:"优先保障核心有人员区域，非占用区自动切入值守温区并降低新风负荷。",estSaving:"预计节能 16%–22%",predictedStart:"08:21（推迟 27 分钟）",savedHours:"10.8 小时"}];function zs(e){const a=new Set;for(const t of e.actions)t.command.startsWith("lighting")?a.add("照明"):t.command.startsWith("hvac")?a.add("暖通"):a.add("综合");return Array.from(a)}function Ps(e,a,t){const n=t?"var(--pacom-accent-solid)":"var(--pacom-text-muted)";return`
    <div style="width:150px; display:flex; flex-direction:column; gap:3px;">
      <div style="position:relative; height:6px; border-radius:999px; background:var(--pacom-surface-recessed); overflow:hidden;">
        ${e<a?`<div style="position:absolute; left:${e/24*100}%; width:${(a-e)/24*100}%; top:0; bottom:0; border-radius:999px; background:${n};"></div>`:`
        <div style="position:absolute; left:${e/24*100}%; width:${(24-e)/24*100}%; top:0; bottom:0; border-radius:999px; background:${n};"></div>
        <div style="position:absolute; left:0; width:${a/24*100}%; top:0; bottom:0; border-radius:999px; background:${n};"></div>`}
      </div>
      <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--pacom-text-muted);">
        <span>00</span><span>12</span><span>24</span>
      </div>
    </div>
  `}async function Ns(e,a,t){let n=lt(),o=!1,l="",[d,b,v,$]=await Promise.all([a.getSpatialTree(),a.listScenes(D.floorId),a.getRuntimeSettings(D.projectId),a.getFloorDevices(D.floorId).catch(()=>[])]),S="manual",w="balanced",h="all",m=null,k="",A=!1,H=!1,x=!1,W="all",P=null,me="",ue="",ve=[{id:"dev-e7f-hvac-01",name:"东侧实验区 FCU-01",reason:"现场手动设为 22.5°C（剩 2h 18m 自动释放）"}];const pe=[{id:"cmd-1",at:"今日 12:15",source:"自动排程",device:"西侧办公区主照明",action:"调光 → 50%",status:"verified"},{id:"cmd-2",at:"今日 10:42",source:"条件联动",device:"东侧实验区 FCU-01",action:"节能设定 → 24.5°C",status:"overridden"},{id:"cmd-3",at:"今日 08:12",source:"自动排程",device:"E7F 全部空调",action:"OSS 动态预冷启动",status:"verified"},{id:"cmd-4",at:"昨日 21:30",source:"自动排程",device:"西侧办公区 VAV-02",action:"夜间关停",status:"timeout"}],ie=[{id:"cbm-fcu-01",name:"FCU 滤网清洗与风机轴承检查",equipment:"东侧实验区 FCU-01",runtimeHours:482,thresholdHours:500,enabled:!0,lastReset:"2026-09-14（CMMS 关单自动重置）"},{id:"cbm-vav-02",name:"VAV 执行器行程标定与风阀巡检",equipment:"西侧办公区 VAV-02",runtimeHours:310,thresholdHours:600,enabled:!0,lastReset:"2026-10-02（CMMS 关单自动重置）"}],de=[{deviceId:$[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"60"}],se=[{id:"sch-morning",name:"工作日早间预冷与公区启动",windowLabel:`周一至周五 ｜ ${v.calendar.workdayStart} – ${v.calendar.workdayEnd}（节假日跳过）`,scope:"E7F 全部空调与公区照明",ossManaged:!0,startHour:8.5,endHour:18.5,enabled:!0},{id:"sch-noon",name:"午间办公区柔光节能（50%）",windowLabel:"周一至周五 ｜ 12:15 – 13:45",scope:"E7F 开放办公区照明",ossManaged:!1,startHour:12.25,endHour:13.75,enabled:!0},{id:"sch-night",name:"夜间值守巡检与非必要回路关闭",windowLabel:`每日 ｜ ${v.calendar.nightGuardStart} – 次日 ${v.calendar.nightGuardEnd}`,scope:"E7F 非实验室区域",ossManaged:!1,startHour:21.5,endHour:6.5,enabled:!0}],q=a.subscribeFloorEvents(D.floorId,async K=>{K.type==="control.receipt.updated"&&m?.batchId===K.batchId&&(m=await a.getControlBatch(K.batchId),G())});function G(){const K=k.trim().toLowerCase(),qe=K?b.filter(u=>`${u.name} ${u.description}`.toLowerCase().includes(K)):b,be=v.rules.filter(u=>Rs.has(u.category)),Ie=h==="all"?be:h==="cbm"?[]:be.filter(u=>u.category===h),ye=h==="all"||h==="cbm",F=W==="issues"?pe.filter(u=>u.status!=="verified"):pe,Q=Ka.find(u=>u.id===w)??Ka[1],ke=t.scope.canControlDevices,N=t.scope.canEditScenes,g=t.scope.canEditSettings,I=t.scope.activeOverrides.find(u=>u.module==="settings"&&u.status==="active");e.innerHTML=`
      <div class="pacom-shell" style="position:relative;">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">智能策略</h1>
              ${ot({tree:d,session:t,scope:n,isOpen:o,searchKeyword:l})}
            </div>

            <div class="pacom-header-meta">
              ${S==="rules"?g?I?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>':""}
              <button type="button" class="pacom-badge ${ve.length>0?"pacom-badge--warning":"pacom-badge--online"}" style="border:0; cursor:pointer; height:26px; padding:0 10px;" data-toggle-overrides="1" title="安全优先级：人工覆盖 > 快捷场景 > 条件联动 > 排程与节能">
                ${ve.length>0?`人工覆盖中：${ve.length} 台 ${re("chevron-down",12)}`:`全部自动托管 ${re("check",12)}`}
              </button>
              <button type="button" class="pacom-btn ${x?"pacom-btn--primary":""}" data-toggle-cmdlog="1">执行日志（${pe.length}）</button>
              ${S==="manual"?`<button class="pacom-btn pacom-btn--primary" data-toggle-create="1" ${N?"":"disabled"}>${A?"收起表单":"+ 新建场景"}</button>`:S==="schedule_oss"?'<button class="pacom-btn" data-go-settings="1">调整工作日历 →</button>':""}
            </div>
          </div>
          <nav class="pacom-subnav" role="tablist" aria-label="智能策略分类">
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${S==="manual"}" data-scene-tab="manual">快捷场景（${b.length}）</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${S==="schedule_oss"}" data-scene-tab="schedule_oss">排程与节能</button>
            <button type="button" class="pacom-subnav-tab" role="tab" aria-selected="${S==="rules"}" data-scene-tab="rules">条件联动（${be.length+ie.length}）</button>
          </nav>
        </header>

        ${H?`
            <div class="pacom-briefing-pop" style="width:380px;" role="dialog" aria-label="人工覆盖设备管理">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:14px; font-weight:500;">人工覆盖中设备（${ve.length}）</strong>
                  <div class="pacom-row-sub">自动排程与节能策略已暂停，释放后恢复托管</div>
                </div>
                <button type="button" class="pacom-drawer-close" data-toggle-overrides="1" aria-label="关闭">${re("x",16)}</button>
              </div>
              ${ve.length===0?'<div class="pacom-info-banner">当前无人工覆盖设备，所有可控设备均按自动策略运行。</div>':ve.map(u=>`
                        <div class="pacom-receipt-item">
                          <div>
                            <div style="font-weight:500; font-size:13px;">${s(u.name)}</div>
                            <div class="pacom-row-sub">${s(u.reason)}</div>
                          </div>
                          <button type="button" class="pacom-btn" data-release-one="${s(u.id)}" ${ke?"":"disabled"}>恢复自动</button>
                        </div>`).join("")}
              ${ve.length>0?`<button type="button" class="pacom-btn pacom-btn--primary" data-release-all-overrides="1" ${ke?"":"disabled"}>一键全部恢复自动策略</button>`:""}
            </div>`:""}

        ${x?`
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
                  <button class="pacom-tab" aria-selected="${W==="all"}" data-log-filter="all">全部（${pe.length}）</button>
                  <button class="pacom-tab" aria-selected="${W==="issues"}" data-log-filter="issues">异常与被覆盖</button>
                </div>
                <span class="pacom-row-sub">共 ${F.length} 条</span>
              </div>
              <div style="flex:1; overflow-y:auto; padding:12px 18px; display:flex; flex-direction:column; gap:8px;">
                ${F.map(u=>`
                    <div class="pacom-receipt-item" style="align-items:flex-start;">
                      <div style="display:flex; flex-direction:column; gap:2px;">
                        <div style="display:flex; align-items:center; gap:6px;">
                          <strong style="font-size:13px;">${s(u.device)}</strong>
                          <span class="pacom-badge pacom-badge--neutral">${s(u.source)}</span>
                        </div>
                        <span class="pacom-row-sub">${s(u.action)} ｜ ${s(u.at)}</span>
                      </div>
                      <span class="pacom-badge ${u.status==="verified"?"pacom-badge--online":u.status==="overridden"?"pacom-badge--warning":"pacom-badge--critical"}">
                        ${u.status==="verified"?"回读确认":u.status==="overridden"?"覆盖跳过":"回读超时"}
                      </span>
                    </div>`).join("")}
              </div>
            </aside>`:""}

        <div class="pacom-content-page" style="padding:6px 4px 28px;">
          ${me?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${s(me)}</span></div>`:""}
          ${ue?`<div class="pacom-alert-banner">${s(ue)}</div>`:""}

          ${S==="manual"?`
              ${m?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <h2 class="pacom-section-title">最近执行逐设备回执</h2>
                        <span class="pacom-badge pacom-badge--accent">批次 ${s(m.batchId)}</span>
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
                            ${m.receipts.map(u=>`
                                <tr>
                                  <td><code style="font-size:12px;">${s(u.deviceId)}</code></td>
                                  <td>${s(u.command)}</td>
                                  <td>${s(String(u.targetValue))}${u.errorMessage?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${s(u.errorMessage)}</div>`:""}</td>
                                  <td>
                                    <span class="pacom-badge ${u.status==="verified_success"?"pacom-badge--online":u.status==="timeout"?"pacom-badge--critical":"pacom-badge--accent"}">${s(u.status)}</span>
                                  </td>
                                </tr>`).join("")}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>`:""}

              ${A?`
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
                          <span class="pacom-setting-title">联动动作列表（${de.length} 条）</span>
                          <button type="button" class="pacom-btn" data-add-draft-action="1">+ 添加动作行</button>
                        </div>
                        ${de.map((u,M)=>`
                            <div style="display:grid; grid-template-columns:1.2fr 1fr 110px auto; gap:8px; align-items:center;">
                              <select class="pacom-select" name="draftDevice-${M}" data-draft-dev="${M}" aria-label="目标设备">
                                ${$.map(Y=>`<option value="${s(Y.id)}" ${Y.id===u.deviceId?"selected":""}>${s(Y.name)}</option>`).join("")}
                              </select>
                              <select class="pacom-select" name="draftCommand-${M}" data-draft-cmd="${M}" aria-label="执行指令">
                                <option value="lighting.dimming" ${u.command==="lighting.dimming"?"selected":""}>照明调光 (%)</option>
                                <option value="lighting.power" ${u.command==="lighting.power"?"selected":""}>照明开关 (true/false)</option>
                                <option value="hvac.setpoint" ${u.command==="hvac.setpoint"?"selected":""}>空调设温 (°C)</option>
                              </select>
                              <input class="pacom-input" name="draftTargetValue-${M}" data-draft-val="${M}" value="${s(u.targetValue)}" placeholder="目标值" aria-label="目标值" />
                              <button type="button" class="pacom-btn pacom-btn--ghost" data-del-draft-action="${M}" ${de.length<=1?"disabled":""}>移除</button>
                            </div>`).join("")}
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" type="button" data-toggle-create="1">取消</button>
                        <button class="pacom-btn pacom-btn--primary" type="submit" ${N?"":"disabled"}>保存场景</button>
                      </div>
                    </form>
                  </section>`:""}

              <div class="pacom-table-toolbar" style="padding:0; border:0;">
                <input class="pacom-input" name="sceneSearch" style="max-width:300px;" data-scene-search placeholder="搜索快捷场景名称或说明…" value="${s(k)}" aria-label="搜索快捷场景" />
                <span class="pacom-row-sub">共 ${qe.length} 个一键场景</span>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;">
                ${qe.length===0?'<div class="pacom-card" style="grid-column:1/-1;"><div class="pacom-empty-state"><strong>暂无匹配场景</strong><span>可清空搜索条件或点击右上角新建快捷场景。</span></div></div>':qe.map(u=>{const M=zs(u),Y=u.actions.slice(0,3).map(we=>{const Re=$.find(je=>je.id===we.deviceId)?.name.replace(/^东侧实验区\s*|^西侧办公区\s*/,"")??we.deviceId,Ne=we.command==="lighting.dimming"?`亮度 ${we.targetValue}%`:we.command==="hvac.setpoint"?`设温 ${we.targetValue}°C`:we.targetValue?"开启":"关闭";return`<span class="pacom-badge pacom-badge--neutral">${s(Re)} → ${s(Ne)}</span>`}).join("");return`
                            <section class="pacom-card" style="gap:10px;">
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <strong style="font-size:15px; font-weight:500;">${s(u.name)}</strong>
                                <div style="display:flex; gap:4px; flex-wrap:wrap;">
                                  ${M.map(we=>`<span class="pacom-badge pacom-badge--accent">${s(we)}</span>`).join("")}
                                  <span class="pacom-badge pacom-badge--neutral">${u.actions.length} 动作</span>
                                </div>
                              </div>
                              <p style="margin:0; font-size:13px; color:var(--pacom-text-secondary); line-height:20px;">${s(u.description)}</p>
                              <div style="display:flex; gap:6px; flex-wrap:wrap;">${Y}</div>
                              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding-top:8px; border-top:var(--hw) solid var(--pacom-border-subtle); margin-top:auto;">
                                <div class="pacom-row-sub">
                                  最近执行：${s(u.lastExecutedAt?u.lastExecutedAt.slice(5,16).replace("T"," "):"尚未执行")}
                                </div>
                                <button class="pacom-btn pacom-btn--primary" data-exec-scene="${s(u.id)}" ${ke?"":"disabled"}>一键执行</button>
                              </div>
                            </section>`}).join("")}
              </div>`:S==="schedule_oss"?`
                <div class="pacom-kpi-strip pacom-kpi-strip--3" role="region" aria-label="优化启停运行状态">
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">当前优化启停模式</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${Q.title}</div>
                    <span class="pacom-kpi-delta">${Q.estSaving}</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">明日预测预启动时刻</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${Q.predictedStart}</div>
                    <span class="pacom-kpi-delta">结合室外气象与热惯性动态计算</span>
                  </div>
                  <div class="pacom-kpi-cell">
                    <span class="pacom-kpi-label">本周累计节省运行工时</span>
                    <div class="pacom-kpi-value" style="font-size:18px;">${Q.savedHours}</div>
                    <span class="pacom-kpi-delta">当前人工覆盖挂起：${ve.length} 台</span>
                  </div>
                </div>

                <section class="pacom-section">
                  <div class="pacom-section-head">
                    <h2 class="pacom-section-title">智能启停节能策略（OSS）</h2>
                    <span class="pacom-row-sub">作用于下方标记为「OSS 托管」的排程</span>
                  </div>
                  <div class="pacom-mode-grid">
                    ${Ka.map(u=>`
                      <button type="button" class="pacom-mode-card" aria-pressed="${w===u.id}" data-oss-mode="${u.id}" ${ke?"":"disabled"}>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                          <strong style="font-size:15px; font-weight:500;">${u.title}</strong>
                          <span class="pacom-badge ${w===u.id?"pacom-badge--online":"pacom-badge--neutral"}">${w===u.id?"当前生效":u.badge}</span>
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
                                    <span>${s(u.name)}</span>
                                    ${u.ossManaged?'<span class="pacom-badge pacom-badge--accent">OSS 托管</span>':""}
                                  </div>
                                  <div class="pacom-row-sub">${s(u.windowLabel)}</div>
                                </td>
                                <td>${Ps(u.startHour,u.endHour,u.enabled)}</td>
                                <td><span class="pacom-row-sub">${s(u.scope)}</span></td>
                                <td>
                                  <div style="display:flex; justify-content:flex-end; align-items:center; gap:8px;">
                                    <span class="pacom-row-sub">${u.enabled?"已启用":"已暂停"}</span>
                                    <button
                                      type="button"
                                      class="pacom-switch"
                                      role="switch"
                                      aria-checked="${u.enabled}"
                                      aria-label="切换排程 ${s(u.name)}"
                                      data-toggle-schedule="${s(u.id)}"
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
                      ${["all","lighting","hvac","alarm_rules","cbm"].map(u=>{const M=u==="all"?"全部":zt[u]??u,Y=u==="all"?be.length+ie.length:u==="cbm"?ie.length:be.filter(we=>we.category===u).length;return`
                            <button type="button" class="pacom-count-pill" aria-pressed="${h===u}" data-rule-cat="${u}">
                              <span>${M}</span><span class="pacom-count-num">${Y}</span>
                            </button>`}).join("")}
                    </div>
                  </div>
                  <div class="pacom-settings-card">
                    ${Ie.map(u=>{const M=P===u.id;return`
                          <div class="pacom-setting-row" style="flex-direction:column; align-items:stretch; gap:10px;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">
                                  <span class="pacom-badge pacom-badge--accent">${s(zt[u.category]??u.category)}</span>
                                  <span>${s(u.name)}</span>
                                  <span class="pacom-badge pacom-badge--neutral">v${u.version}</span>
                                </span>
                                <span class="pacom-setting-desc">${s(u.summary)} ｜ 范围：${s(u.scopeLabel)} ｜ 回执：${s(u.receiptSummary??"已同步")}</span>
                              </div>
                              <div class="pacom-setting-control">
                                <button type="button" class="pacom-btn pacom-btn--ghost" data-expand-rule="${s(u.id)}">${M?"收起逻辑":"查看逻辑"}</button>
                                <span class="pacom-row-sub">${u.enabled?"已启用":"已停用"}</span>
                                <button
                                  type="button"
                                  class="pacom-switch"
                                  role="switch"
                                  aria-checked="${u.enabled?"true":"false"}"
                                  aria-label="切换 ${s(u.name)}"
                                  data-toggle-strategy-rule="${s(u.id)}"
                                  data-rule-ver="${u.version}"
                                  data-rule-next="${!u.enabled}"
                                  ${g?"":"disabled"}
                                >
                                  <span class="pacom-switch-thumb"></span>
                                </button>
                              </div>
                            </div>
                            ${M?`
                                <div class="pacom-control-box" style="gap:6px; font-size:12px;">
                                  <div><strong>IF 触发条件：</strong>${u.category==="hvac"?"室外气象/室内 CO₂ 连续 10 分钟超出舒适基线":u.category==="lighting"?"功能区连续 15 分钟无人占用且照度 > 350 lx":"监测点连续 3 个心跳周期越限或断流"}</div>
                                  <div><strong>THEN 执行动作：</strong>自动下发边界内节能指令并等待网关逐设备回读（人工覆盖状态自动跳过）</div>
                                  <div class="pacom-row-sub">作用范围：${s(u.scopeLabel)} ｜ 当前版本：v${u.version} ｜ 最近同步：${s(u.receiptSummary??"已同步")}</div>
                                </div>`:""}
                          </div>`}).join("")}
                    ${ye?ie.map(u=>{const M=Math.min(100,Math.round(u.runtimeHours/u.thresholdHours*100));return`
                                <div class="pacom-setting-row">
                                  <div class="pacom-setting-meta" style="gap:6px;">
                                    <span class="pacom-setting-title">
                                      <span class="pacom-badge pacom-badge--online">工时维保 CBM</span>
                                      <span>${s(u.name)}</span>
                                      <span class="pacom-badge ${M>=90?"pacom-badge--warning":"pacom-badge--neutral"}">${u.runtimeHours} / ${u.thresholdHours} h（${M}%）</span>
                                    </span>
                                    <div class="pacom-progress-track" style="max-width:340px;">
                                      <div class="pacom-progress-fill" style="width:${M}%; background:${M>=90?"var(--pacom-status-warning)":"var(--pacom-status-online)"};"></div>
                                    </div>
                                    <span class="pacom-setting-desc">绑定设备：${s(u.equipment)} ｜ 上次重置：${s(u.lastReset)}</span>
                                  </div>
                                  <div class="pacom-setting-control">
                                    <span class="pacom-row-sub">${u.enabled?"监测中":"已停用"}</span>
                                    <button type="button" class="pacom-switch" role="switch" aria-checked="${u.enabled}" data-toggle-cbm="${s(u.id)}" aria-label="切换 ${s(u.name)}" ${g?"":"disabled"}>
                                      <span class="pacom-switch-thumb"></span>
                                    </button>
                                  </div>
                                </div>`}).join(""):""}
                  </div>
                </section>`}
        </div>
      </div>
    `,it(e,{onToggle:()=>{o=!o,G(),o&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:u=>{l=u,G();const M=e.querySelector("[data-global-space-search]");M&&(M.focus(),M.setSelectionRange(u.length,u.length))},onPick:u=>{n=u,o=!1,G()}}),e.querySelectorAll("[data-scene-tab]").forEach(u=>{u.addEventListener("click",()=>{S=u.dataset.sceneTab??"manual",me="",G()})}),e.querySelectorAll("[data-toggle-overrides]").forEach(u=>{u.addEventListener("click",()=>{H=!H,G()})}),e.querySelector("[data-release-all-overrides]")?.addEventListener("click",()=>{ke&&(ve=[],me="已释放全部人工覆盖设备，自动节能策略已恢复托管。",G())}),e.querySelectorAll("[data-release-one]").forEach(u=>{u.addEventListener("click",()=>{if(!ke)return;const M=u.dataset.releaseOne;ve=ve.filter(Y=>Y.id!==M),me="已恢复该设备的自动策略托管。",G()})}),e.querySelectorAll("[data-toggle-cmdlog]").forEach(u=>{u.addEventListener("click",()=>{x=!x,G()})}),e.querySelectorAll("[data-log-filter]").forEach(u=>{u.addEventListener("click",()=>{W=u.dataset.logFilter??"all",G()})}),e.querySelector("[data-close-batch]")?.addEventListener("click",()=>{m=null,G()}),e.querySelector("[data-go-settings]")?.addEventListener("click",()=>{window.location.hash="#settings"}),e.querySelectorAll("[data-oss-mode]").forEach(u=>{u.addEventListener("click",()=>{if(!ke)return;const M=u.dataset.ossMode;if(!M)return;w=M;const Y=Ka.find(we=>we.id===M);me=`已切换至「${Y?.title??M}」模式（明日预测启动 ${Y?.predictedStart??""}）。`,G()})}),e.querySelectorAll("[data-toggle-schedule]").forEach(u=>{u.addEventListener("click",()=>{if(!ke)return;const M=u.dataset.toggleSchedule,Y=se.find(we=>we.id===M);Y&&(Y.enabled=!Y.enabled,me=`排程「${Y.name}」已${Y.enabled?"恢复启用":"临时暂停"}。`,G())})}),e.querySelectorAll("[data-rule-cat]").forEach(u=>{u.addEventListener("click",()=>{h=u.dataset.ruleCat??"all",G()})}),e.querySelectorAll("[data-expand-rule]").forEach(u=>{u.addEventListener("click",()=>{const M=u.dataset.expandRule??null;P=P===M?null:M,G()})}),e.querySelectorAll("[data-toggle-cbm]").forEach(u=>{u.addEventListener("click",()=>{if(!g)return;const M=ie.find(Y=>Y.id===u.dataset.toggleCbm);M&&(M.enabled=!M.enabled,me=`工时维保规则「${M.name}」已${M.enabled?"启用":"停用"}。`,G())})}),e.querySelectorAll("[data-toggle-strategy-rule]").forEach(u=>{u.addEventListener("click",async()=>{if(g){ue="";try{await a.toggleRuntimeRule(u.dataset.toggleStrategyRule,u.dataset.ruleNext==="true",Number(u.dataset.ruleVer)),v=await a.getRuntimeSettings(D.projectId),me="条件联动规则状态与版本回执已更新。",G()}catch(M){ue=M instanceof Error?M.message:String(M),G()}}})}),e.querySelectorAll("[data-toggle-create]").forEach(u=>{u.addEventListener("click",()=>{!N&&!A||(A=!A,G())})}),e.querySelector("[data-add-draft-action]")?.addEventListener("click",()=>{N&&(de.push({deviceId:$[0]?.id??"dev-e7f-lt-01",command:"lighting.dimming",targetValue:"50"}),G())}),e.querySelectorAll("[data-del-draft-action]").forEach(u=>{u.addEventListener("click",()=>{if(!N)return;const M=Number(u.dataset.delDraftAction);de.length>1&&(de.splice(M,1),G())})}),e.querySelectorAll("[data-draft-dev]").forEach(u=>{u.addEventListener("change",()=>{if(!N)return;const M=de[Number(u.dataset.draftDev)];M&&(M.deviceId=u.value)})}),e.querySelectorAll("[data-draft-cmd]").forEach(u=>{u.addEventListener("change",()=>{if(!N)return;const M=de[Number(u.dataset.draftCmd)];M&&(M.command=u.value)})}),e.querySelectorAll("[data-draft-val]").forEach(u=>{u.addEventListener("change",()=>{if(!N)return;const M=de[Number(u.dataset.draftVal)];M&&(M.targetValue=u.value)})}),e.querySelector("[data-scene-search]")?.addEventListener("input",u=>{const M=u.currentTarget,Y=M.selectionStart??M.value.length;k=M.value,G();const we=e.querySelector("[data-scene-search]");we&&(we.focus(),we.setSelectionRange(Y,Y))}),e.querySelectorAll("[data-exec-scene]").forEach(u=>{u.addEventListener("click",async()=>{if(!ke)return;ue="";const M=b.find(Y=>Y.id===u.dataset.execScene);try{m=await a.executeScene(u.dataset.execScene),b=await a.listScenes(D.floorId),pe.unshift({id:`cmd-${Date.now()}`,at:"刚刚",source:"快捷场景",device:M?.name??"E7F 场景",action:`${m.receipts.length} 台设备联动下发`,status:"verified"}),G()}catch(Y){ue=Y instanceof Error?Y.message:String(Y),G()}})}),e.querySelector('[data-role="new-scene-form"]')?.addEventListener("submit",async u=>{if(u.preventDefault(),!N)return;const M=new FormData(u.currentTarget);try{await a.createScene({projectId:D.projectId,floorId:D.floorId,name:String(M.get("name")??""),description:String(M.get("description")??""),actions:de.map(Y=>({deviceId:Y.deviceId,command:Y.command,targetValue:Y.targetValue==="true"?!0:Y.targetValue==="false"?!1:Number(Y.targetValue)||50}))}),b=await a.listScenes(D.floorId),A=!1,me=`快捷场景已保存（共绑定 ${de.length} 条联动动作）。`,G()}catch(Y){ue=Y instanceof Error?Y.message:String(Y),G()}})}G(),window.addEventListener("hashchange",()=>q(),{once:!0})}const Pt={calendar:{label:"工作时间",icon:"calendar",subtitle:"配置工作日作息时段、夜间值守窗口、法定节假日跳过与特殊例外日期。"},energy_weather:{label:"能耗计费",icon:"zap",subtitle:"维护室外气象数据源、计费与能效面积、电价计费模式及区域电网碳排放因子。"},guardrails:{label:"控制参数",icon:"shield-check",subtitle:"设定空调温区安全限值、人工覆盖自动释放时长、指令回读超时及默认参数模板。"},notifications:{label:"消息通知",icon:"bell",subtitle:"管理每日晨间简报、夜间静默免打扰、按工作组分流推送及超时自动派单规则。"}};function ft(e,a){return e.length===0?'<div class="pacom-empty-state"><strong>暂无关联策略项</strong><span>当前分类下尚未绑定后台规则。</span></div>':e.map(t=>`
      <div class="pacom-setting-row">
        <div class="pacom-setting-meta">
          <span class="pacom-setting-title">
            <span>${s(t.name)}</span>
            <span class="pacom-badge pacom-badge--neutral">v${t.version}</span>
            <span class="pacom-badge pacom-badge--accent">${s(t.scopeLabel)}</span>
          </span>
          <span class="pacom-setting-desc">${s(t.summary)} ｜ 回执：${s(t.receiptSummary??"已同步")}</span>
        </div>
        <div class="pacom-setting-control">
          <span class="pacom-row-sub">${t.enabled?"已启用":"已停用"}</span>
          <button
            type="button"
            class="pacom-switch"
            role="switch"
            aria-checked="${t.enabled?"true":"false"}"
            aria-label="切换 ${s(t.name)}"
            data-toggle-rule="${s(t.id)}"
            data-rule-ver="${t.version}"
            data-rule-next="${!t.enabled}"
            ${a?"":"disabled"}
          >
            <span class="pacom-switch-thumb"></span>
          </button>
        </div>
      </div>`).join("")}async function Bs(e,a,t){let n="calendar",o=lt(),l=!1,d="";const[b,v]=await Promise.all([a.getSpatialTree(),a.getRuntimeSettings(D.projectId)]);let $=v,S=$.calendar.workdayStart,w=$.calendar.workdayEnd,h=$.calendar.nightGuardStart,m=$.calendar.nightGuardEnd,k=!0,A=[];const H=[{id:"sd-1",date:"2026-11-28",label:"实验室周末科研加班",mode:"保持工作日工况"}];let x="flat";const W={weatherSource:"guanzhou_station",billingArea:"34656.3",tariffYuan:"0.86",tariffPeak:"1.18",tariffFlat:"0.78",tariffValley:"0.36",carbonFactor:"0.5271"},P={minTemp:"20",maxTemp:"27",overrideAutoRelease:"4h",readbackTimeoutSec:"10"},me={enabled:!0,delayMin:"15",defaultGroup:"暖通运维组",deduplicate:!0},ue={dailyDigest:!0,dailyDigestTime:"08:30",quietHours:!0},ve=[{id:"nr-1",groupName:"暖通运维组",scope:"广实2号园 / E栋",severity:"严重与重要",channels:"短信 + 站内",enabled:!0},{id:"nr-2",groupName:"强电照明组",scope:"E栋 7F",severity:"仅严重告警",channels:"站内 + 邮件",enabled:!0},{id:"nr-3",groupName:"园区物业值班组",scope:"全园区",severity:"全部告警",channels:"站内横幅",enabled:!0}];let pe="",ie="";function de(){return`
      <aside class="pacom-unified-rail" aria-label="应用设置菜单">
        <div class="pacom-unified-group">
          ${["calendar","energy_weather","guardrails","notifications"].map(G=>{const K=Pt[G];return`
                <button type="button" class="pacom-unified-item" aria-current="${n===G}" data-stab="${G}">
                  ${re(K.icon,16)}
                  <span>${K.label}</span>
                </button>`}).join("")}
        </div>
      </aside>
    `}function se(){const q=t.scope.canEditSettings,G=t.scope.activeOverrides.find(F=>F.module==="settings"&&F.status==="active"),K=b.projects[0]?.name??"当前项目",qe=$.rules.filter(F=>F.category==="weather_area"),be=$.rules.filter(F=>F.category==="metering_carbon"),Ie=$.rules.filter(F=>F.category==="templates"),ye=Pt[n];e.innerHTML=`
      <div class="pacom-shell">
        <header class="pacom-header">
          <div class="pacom-header-top">
            <div class="pacom-title-group">
              <h1 class="pacom-title">应用设置</h1>
              ${ot({tree:b,session:t,scope:o,maxGranularity:"project",isOpen:l,searchKeyword:d})}
            </div>
            <div class="pacom-header-meta">
              ${q?G?'<span class="pacom-badge pacom-badge--accent">限时提权中</span>':"":'<span class="pacom-badge pacom-badge--warning">只读</span>'}
            </div>
          </div>
        </header>

        <div class="pacom-unified-sheet">
          ${de()}
          <div class="pacom-unified-main">
            <div class="pacom-unified-inner">
              <div class="pacom-unified-head">
                <h2 class="pacom-unified-title">${ye.label}</h2>
                <p class="pacom-unified-subtitle">${ye.subtitle}</p>
              </div>
              ${G?`<div class="pacom-banner pacom-banner--ok">
                      <div class="pacom-banner-text">
                        <span class="pacom-banner-title">临时提权生效中（应用设置 ｜ ${G.durationHours}h）</span>
                        <span class="pacom-banner-sub">审批人：${s(G.approvedBy)} ｜ 到期自动收回：${s(G.expiresAt.slice(0,16).replace("T"," "))} ｜ 事由：${s(G.reason)}</span>
                      </div>
                    </div>`:""}
              ${pe?`<div class="pacom-banner pacom-banner--ok"><span class="pacom-banner-title">${s(pe)}</span></div>`:""}
              ${ie?`<div class="pacom-alert-banner">${s(ie)}</div>`:""}

              ${n==="calendar"?`
                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">工作时间与夜间值守基准</h2>
                      <span class="pacom-badge pacom-badge--neutral">版本 v${$.calendar.version}</span>
                    </div>
                    <div class="pacom-settings-card">
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">工作日上班 / 下班时间</span>
                          <span class="pacom-setting-desc">驱动「智能策略 → 排程与节能」早间预冷及公区照明启停；晚于 21:30 将自动提示交叠冲突</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calWorkdayStart" style="width:116px;" type="time" data-cal-start value="${s(S)}" aria-label="工作日上班时间" ${q?"":"disabled"} />
                          <span class="pacom-row-sub">至</span>
                          <input class="pacom-input" name="calWorkdayEnd" style="width:116px;" type="time" data-cal-end value="${s(w)}" aria-label="工作日下班时间" ${q?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">夜间值守巡检窗口</span>
                          <span class="pacom-setting-desc">每日指定时段自动关停非实验区回路并切入值守温区</span>
                        </div>
                        <div class="pacom-setting-control">
                          <input class="pacom-input" name="calNightGuardStart" style="width:116px;" type="time" data-night-start value="${s(h)}" aria-label="夜间值守开始" ${q?"":"disabled"} />
                          <span class="pacom-row-sub">至次日</span>
                          <input class="pacom-input" name="calNightGuardEnd" style="width:116px;" type="time" data-night-end value="${s(m)}" aria-label="夜间值守结束" ${q?"":"disabled"} />
                        </div>
                      </div>
                      <div class="pacom-setting-row">
                        <div class="pacom-setting-meta">
                          <span class="pacom-setting-title">自动跳过中国法定节假日</span>
                          <span class="pacom-setting-desc">节假日期间自动挂起工作日早间启动排程，避免无人空转耗能</span>
                        </div>
                        <div class="pacom-setting-control">
                          <span class="pacom-row-sub">${k?"已开启":"已关闭"}</span>
                          <button type="button" class="pacom-switch" role="switch" aria-checked="${k}" data-toggle-holiday="1" aria-label="自动跳过法定节假日" ${q?"":"disabled"}>
                            <span class="pacom-switch-thumb"></span>
                          </button>
                        </div>
                      </div>
                      <div class="pacom-setting-row" style="justify-content:flex-end;">
                        <button class="pacom-btn" data-preview-impact="1">预览受影响规则</button>
                        <button class="pacom-btn pacom-btn--primary" data-save-cal="1" ${q?"":"disabled"}>保存并校验版本</button>
                      </div>
                    </div>
                  </section>

                  <section class="pacom-section">
                    <div class="pacom-section-head">
                      <h2 class="pacom-section-title">特殊例外日期（加班 / 接待覆盖默认日历）</h2>
                      <span class="pacom-row-sub">共 ${H.length} 条</span>
                    </div>
                    <div class="pacom-settings-card">
                      ${H.map(F=>`
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title"><span>${s(F.date)}</span><span class="pacom-badge pacom-badge--accent">${s(F.mode)}</span></span>
                              <span class="pacom-setting-desc">${s(F.label)}</span>
                            </div>
                            <button type="button" class="pacom-btn pacom-btn--ghost" data-del-sd="${s(F.id)}" ${q?"":"disabled"}>移除</button>
                          </div>`).join("")}
                      <form data-add-sd-form class="pacom-setting-row" style="display:grid; grid-template-columns:145px 1fr 148px auto; gap:8px; align-items:center;">
                        <input class="pacom-input" name="date" type="date" required ${q?"":"disabled"} />
                        <input class="pacom-input" name="label" placeholder="说明（如：重要接待日 / 实验加班）" required ${q?"":"disabled"} />
                        <select class="pacom-select" name="mode" ${q?"":"disabled"}>
                          <option value="保持工作日工况">保持工作日工况</option>
                          <option value="全天节能值守">全天节能值守</option>
                        </select>
                        <button class="pacom-btn" type="submit" ${q?"":"disabled"}>+ 添加例外</button>
                      </form>
                    </div>
                  </section>

                  ${A.length>0?`
                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">受影响的定时与夜间规则预览</h2>
                          <span class="pacom-row-sub">共 ${A.length} 条</span>
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
                                ${A.map(F=>`
                                    <tr>
                                      <td>
                                        <div style="font-weight:450;">${s(F.ruleName)}</div>
                                        ${F.conflictWarning?`<div class="pacom-row-sub" style="color:var(--pacom-status-critical);">${s(F.conflictWarning)}</div>`:""}
                                      </td>
                                      <td>${s(F.beforeWindow)}</td>
                                      <td><strong>${s(F.afterWindow)}</strong></td>
                                      <td>
                                        <span class="pacom-badge ${F.conflictWarning?"pacom-badge--critical":"pacom-badge--accent"}">
                                          ${F.conflictWarning?"交叠警告":"自动跟随"}
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
                            <select class="pacom-select" name="energyWeatherSource" data-energy-field="weatherSource" aria-label="室外气象数据源" ${q?"":"disabled"}>
                              <option value="guanzhou_station" ${W.weatherSource==="guanzhou_station"?"selected":""}>广州官洲气象站实况</option>
                              <option value="campus_sensor" ${W.weatherSource==="campus_sensor"?"selected":""}>园区屋顶自建气象站</option>
                            </select>
                          </div>
                        </div>
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">${s(K)}计费与能效面积（m²）</span>
                            <span class="pacom-setting-desc">用于计算单位面积能耗（EUI，kWh/m²）</span>
                          </div>
                          <div class="pacom-setting-control">
                            <input class="pacom-input" name="energyBillingArea" style="width:150px;" type="number" step="0.1" data-energy-field="billingArea" value="${s(W.billingArea)}" aria-label="计费面积" ${q?"":"disabled"} />
                          </div>
                        </div>
                        ${ft(qe,q)}
                      </div>
                    </section>

                    <section class="pacom-section">
                      <div class="pacom-section-head">
                        <h2 class="pacom-section-title">电价与碳排口径</h2>
                        <div class="pacom-tabs">
                          <button class="pacom-tab" aria-selected="${x==="flat"}" data-tariff-mode="flat">单一综合电价</button>
                          <button class="pacom-tab" aria-selected="${x==="tou"}" data-tariff-mode="tou">峰平谷分时电价</button>
                        </div>
                      </div>
                      <div class="pacom-settings-card">
                        ${x==="flat"?`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">综合电价参考（元 / kWh）</span>
                                <span class="pacom-setting-desc">用于数据分析中的月度节能金额估算</span>
                              </div>
                              <div class="pacom-setting-control">
                                <input class="pacom-input" name="energyTariffYuan" style="width:120px;" type="number" step="0.01" data-energy-field="tariffYuan" value="${s(W.tariffYuan)}" aria-label="综合电价" ${q?"":"disabled"} />
                              </div>
                            </div>`:`
                            <div class="pacom-setting-row">
                              <div class="pacom-setting-meta">
                                <span class="pacom-setting-title">峰 / 平 / 谷分时电价（元 / kWh）</span>
                                <span class="pacom-setting-desc">峰段 10:00–12:00 / 14:00–19:00 ｜ 谷段 00:00–08:00，同步支撑峰谷负荷测算</span>
                              </div>
                              <div class="pacom-setting-control" style="gap:6px;">
                                <span class="pacom-row-sub">峰</span><input class="pacom-input" name="energyTariffPeak" style="width:74px;" type="number" step="0.01" data-energy-field="tariffPeak" value="${s(W.tariffPeak)}" aria-label="峰段电价" ${q?"":"disabled"} />
                                <span class="pacom-row-sub">平</span><input class="pacom-input" name="energyTariffFlat" style="width:74px;" type="number" step="0.01" data-energy-field="tariffFlat" value="${s(W.tariffFlat)}" aria-label="平段电价" ${q?"":"disabled"} />
                                <span class="pacom-row-sub">谷</span><input class="pacom-input" name="energyTariffValley" style="width:74px;" type="number" step="0.01" data-energy-field="tariffValley" value="${s(W.tariffValley)}" aria-label="谷段电价" ${q?"":"disabled"} />
                              </div>
                            </div>`}
                        <div class="pacom-setting-row">
                          <div class="pacom-setting-meta">
                            <span class="pacom-setting-title">区域电网碳排放因子</span>
                            <span class="pacom-setting-desc">按所选电网最新公布系数自动换算 kgCO₂e</span>
                          </div>
                          <div class="pacom-setting-control">
                            <select class="pacom-select" name="energyCarbonFactor" data-energy-field="carbonFactor" aria-label="电网碳排放因子" ${q?"":"disabled"}>
                              <option value="0.5271" ${W.carbonFactor==="0.5271"?"selected":""}>南方电网 0.5271 kgCO₂/kWh</option>
                              <option value="0.5703" ${W.carbonFactor==="0.5703"?"selected":""}>全国电网均值 0.5703 kgCO₂/kWh</option>
                            </select>
                          </div>
                        </div>
                        ${ft(be,q)}
                        <div class="pacom-setting-row" style="justify-content:flex-end;">
                          <button class="pacom-btn pacom-btn--primary" data-save-energy="1" ${q?"":"disabled"}>保存口径参数</button>
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
                              <input class="pacom-input" name="guardMinTemp" style="width:72px;" type="number" data-guard-field="minTemp" value="${s(P.minTemp)}" aria-label="最低设定温度" ${q?"":"disabled"} />
                              <span class="pacom-row-sub">至</span>
                              <input class="pacom-input" name="guardMaxTemp" style="width:72px;" type="number" data-guard-field="maxTemp" value="${s(P.maxTemp)}" aria-label="最高设定温度" ${q?"":"disabled"} />
                              <span class="pacom-row-sub">°C</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">人工覆盖自动释放时长</span>
                              <span class="pacom-setting-desc">手动控设备进入「人工覆盖」后，到达时长自动交回自动策略，避免整周忘关</span>
                            </div>
                            <div class="pacom-setting-control">
                              <select class="pacom-select" name="guardOverrideAutoRelease" data-guard-field="overrideAutoRelease" aria-label="人工覆盖自动释放时长" ${q?"":"disabled"}>
                                <option value="2h" ${P.overrideAutoRelease==="2h"?"selected":""}>2 小时后自动释放</option>
                                <option value="4h" ${P.overrideAutoRelease==="4h"?"selected":""}>4 小时后自动释放（推荐）</option>
                                <option value="eod" ${P.overrideAutoRelease==="eod"?"selected":""}>当日下班自动释放</option>
                                <option value="permanent" ${P.overrideAutoRelease==="permanent"?"selected":""}>仅手动释放（永久覆盖）</option>
                              </select>
                            </div>
                          </div>
                          <div class="pacom-setting-row">
                            <div class="pacom-setting-meta">
                              <span class="pacom-setting-title">控制指令回读超时阈值（秒）</span>
                              <span class="pacom-setting-desc">边缘网关在规定时间内未收到硬件状态确认即标记超时并告警</span>
                            </div>
                            <div class="pacom-setting-control">
                              <input class="pacom-input" name="guardReadbackTimeoutSec" style="width:90px;" type="number" min="3" max="60" data-guard-field="readbackTimeoutSec" value="${s(P.readbackTimeoutSec)}" aria-label="回读超时阈值" ${q?"":"disabled"} />
                              <span class="pacom-row-sub">秒</span>
                            </div>
                          </div>
                          <div class="pacom-setting-row" style="justify-content:flex-end;">
                            <button class="pacom-btn pacom-btn--primary" data-save-guard="1" ${q?"":"disabled"}>保存控制参数</button>
                          </div>
                        </div>
                      </section>

                      <section class="pacom-section">
                        <div class="pacom-section-head">
                          <h2 class="pacom-section-title">标准设备参数模板</h2>
                          <span class="pacom-row-sub">新设备入网时一键套用统一控制口径</span>
                        </div>
                        <div class="pacom-settings-card">
                          ${ft(Ie,q)}
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
                              <input class="pacom-input" name="dailyDigestTime" style="width:116px;" type="time" data-digest-time value="${s(ue.dailyDigestTime)}" aria-label="每日简报发送时间" ${q?"":"disabled"} />
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${ue.dailyDigest}" data-notify-key="dailyDigest" aria-label="每日运行简报" ${q?"":"disabled"}>
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
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${ue.quietHours}" data-notify-key="quietHours" aria-label="夜间静默免打扰" ${q?"":"disabled"}>
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
                              <input class="pacom-input" name="autoWoDelayMin" style="width:72px;" type="number" data-auto-wo="delayMin" value="${s(me.delayMin)}" aria-label="自动派单延迟分钟数" ${q?"":"disabled"} />
                              <span class="pacom-row-sub">分钟</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${me.enabled}" data-toggle-autowo="enabled" aria-label="开启严重告警自动转工单" ${q?"":"disabled"}>
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
                              <select class="pacom-select" name="autoWoDefaultGroup" data-auto-wo="defaultGroup" aria-label="默认处理组" ${q?"":"disabled"}>
                                <option value="暖通运维组" ${me.defaultGroup==="暖通运维组"?"selected":""}>暖通运维组</option>
                                <option value="强电照明组" ${me.defaultGroup==="强电照明组"?"selected":""}>强电照明组</option>
                                <option value="园区物业值班组" ${me.defaultGroup==="园区物业值班组"?"selected":""}>园区物业值班组</option>
                              </select>
                              <span class="pacom-row-sub">防重</span>
                              <button type="button" class="pacom-switch" role="switch" aria-checked="${me.deduplicate}" data-toggle-autowo="deduplicate" aria-label="已有未结工单不重复建单" ${q?"":"disabled"}>
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
                                ${ve.map(F=>`
                                    <tr>
                                      <td><strong>${s(F.groupName)}</strong></td>
                                      <td>${s(F.scope)}</td>
                                      <td><span class="pacom-badge pacom-badge--neutral">${s(F.severity)}</span></td>
                                      <td><span class="pacom-badge pacom-badge--accent">${s(F.channels)}</span></td>
                                      <td style="text-align:right;">
                                        <button type="button" class="pacom-switch" role="switch" aria-checked="${F.enabled}" data-toggle-nr="${s(F.id)}" aria-label="切换 ${s(F.groupName)} 通知规则" ${q?"":"disabled"}>
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
    `,it(e,{onToggle:()=>{l=!l,se(),l&&e.querySelector("[data-global-space-search]")?.focus()},onSearch:F=>{d=F,se();const Q=e.querySelector("[data-global-space-search]");Q&&(Q.focus(),Q.setSelectionRange(F.length,F.length))},onPick:F=>{o=F,l=!1,se()}}),e.querySelectorAll("[data-stab]").forEach(F=>{F.addEventListener("click",()=>{n=F.dataset.stab??"calendar",pe="",ie="",se()})}),e.querySelector("[data-toggle-holiday]")?.addEventListener("click",()=>{q&&(k=!k,pe=`法定节假日自动跳过已${k?"开启":"关闭"}。`,se())}),e.querySelector("[data-night-start]")?.addEventListener("change",F=>{q&&(h=F.currentTarget.value)}),e.querySelector("[data-night-end]")?.addEventListener("change",F=>{q&&(m=F.currentTarget.value)}),e.querySelector("[data-add-sd-form]")?.addEventListener("submit",F=>{if(F.preventDefault(),!q)return;const Q=new FormData(F.currentTarget);H.push({id:`sd-${Date.now()}`,date:String(Q.get("date")??""),label:String(Q.get("label")??""),mode:String(Q.get("mode")??"保持工作日工况")}),pe="已添加特殊例外日期，当日自动覆盖默认节假日排程。",se()}),e.querySelectorAll("[data-del-sd]").forEach(F=>{F.addEventListener("click",()=>{if(!q)return;const Q=H.findIndex(ke=>ke.id===F.dataset.delSd);Q>=0&&H.splice(Q,1),se()})}),e.querySelectorAll("[data-tariff-mode]").forEach(F=>{F.addEventListener("click",()=>{x=F.dataset.tariffMode??"flat",se()})}),e.querySelectorAll("[data-energy-field]").forEach(F=>{F.addEventListener("change",()=>{if(!q)return;const Q=F.dataset.energyField;Q&&(W[Q]=F.value)})}),e.querySelector("[data-save-energy]")?.addEventListener("click",()=>{q&&(pe=x==="flat"?`能耗计费与气象口径已保存（面积 ${W.billingArea} m² ｜ 综合电价 ¥${W.tariffYuan}/kWh ｜ 因子 ${W.carbonFactor}）。`:`峰平谷分时电价已保存（峰 ¥${W.tariffPeak} / 平 ¥${W.tariffFlat} / 谷 ¥${W.tariffValley}）。`,se())}),e.querySelectorAll("[data-guard-field]").forEach(F=>{F.addEventListener("change",()=>{if(!q)return;const Q=F.dataset.guardField;Q&&(P[Q]=F.value)})}),e.querySelector("[data-save-guard]")?.addEventListener("click",()=>{q&&(pe=`控制保护参数已保存（温区 ${P.minTemp}–${P.maxTemp}°C ｜ 超时 ${P.readbackTimeoutSec}s）。`,se())}),e.querySelectorAll("[data-auto-wo]").forEach(F=>{F.addEventListener("change",()=>{if(!q)return;const Q=F.dataset.autoWo;Q&&(me[Q]=F.value),pe="超时自动派单配置已更新。",se()})}),e.querySelectorAll("[data-toggle-autowo]").forEach(F=>{F.addEventListener("click",()=>{if(!q)return;const Q=F.dataset.toggleAutowo;Q&&(me[Q]=!me[Q],pe="自动派单保护策略已更新。",se())})}),e.querySelector("[data-digest-time]")?.addEventListener("change",F=>{q&&(ue.dailyDigestTime=F.currentTarget.value,pe=`每日晨间简报发送时刻已更新为 ${ue.dailyDigestTime}。`,se())}),e.querySelectorAll("[data-notify-key]").forEach(F=>{F.addEventListener("click",()=>{if(!q)return;const Q=F.dataset.notifyKey;Q&&(ue[Q]=!ue[Q],pe="消息通知偏好已更新。",se())})}),e.querySelectorAll("[data-toggle-nr]").forEach(F=>{F.addEventListener("click",()=>{if(!q)return;const Q=ve.find(ke=>ke.id===F.dataset.toggleNr);Q&&(Q.enabled=!Q.enabled,pe=`工作组「${Q.groupName}」的分流推送规则已${Q.enabled?"启用":"停用"}。`,se())})}),e.querySelector("[data-cal-start]")?.addEventListener("change",F=>{q&&(S=F.currentTarget.value)}),e.querySelector("[data-cal-end]")?.addEventListener("change",F=>{q&&(w=F.currentTarget.value)}),e.querySelector("[data-preview-impact]")?.addEventListener("click",async()=>{ie="";try{A=await a.previewCalendarImpact(D.projectId,S,w),se()}catch(F){ie=F instanceof Error?F.message:String(F),se()}}),e.querySelector("[data-save-cal]")?.addEventListener("click",async()=>{if(q){ie="";try{const F=await a.saveWorkCalendar(D.projectId,S,w,$.calendar.version);$={...$,calendar:{...F,nightGuardStart:h,nightGuardEnd:m}},pe=`工作时间配置已保存至 v${F.version}（工作日 ${F.workdayStart}–${F.workdayEnd} ｜ 夜间值守 ${h}–${m}）`,A=[],se()}catch(F){ie=F instanceof Error?F.message:String(F),se()}}}),e.querySelectorAll("[data-toggle-rule]").forEach(F=>{F.addEventListener("click",async()=>{if(q){ie="";try{await a.toggleRuntimeRule(F.dataset.toggleRule,F.dataset.ruleNext==="true",Number(F.dataset.ruleVer)),$=await a.getRuntimeSettings(D.projectId),pe="策略状态与版本回执已更新。",se()}catch(Q){ie=Q instanceof Error?Q.message:String(Q),se()}}})})}se()}const Nt="pacom.web.sidebar.collapsed",Us=`<svg class="pacom-logo-wordmark" role="img" aria-label="PACOM" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50">
  <path fill="#202a44" d="M45,17C45,7.61,37.39,0,28,0H0l5,10h23c3.87,0,7,3.13,7,7s-3.13,7-7,7H0v26h10v-16h18c9.39,0,17-7.61,17-17Z"/>
  <polygon fill="#202a44" points="32.25 50 43.66 50 59.75 20.75 75.84 50 87.25 50 59.75 0 32.25 50"/>
  <polygon fill="#202a44" points="208.59 0 192.5 29.25 176.41 0 165 0 192.5 50 210 18.18 210 50 220 50 220 0 208.59 0"/>
  <path fill="#202a44" d="M146.75,0c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25S160.56,0,146.75,0ZM146.75,40c-8.28,0-15-6.72-15-15s6.72-15,15-15,15,6.72,15,15-6.72,15-15,15Z"/>
  <path fill="#202a44" d="M105.25,40c-8.28,0-15-6.72-15-15s6.72-15,15-15c6.06,0,11.44,2.36,14.81,6.01,1.16-3.28,2.94-6.26,5.19-8.82-5.15-4.45-12.21-7.19-20-7.19-13.81,0-25,11.19-25,25s11.19,25,25,25c7.79,0,14.85-2.74,20-7.19-2.25-2.56-4.03-5.54-5.19-8.82-3.37,3.65-8.75,6.01-14.81,6.01Z"/>
</svg>`,Bt=[{id:"home",label:"空间总览",icon:"building-2"},{id:"analysis",label:"数据分析",icon:"chart-column"},{id:"alarms",label:"告警中心",icon:"triangle-alert"},{id:"scenes",label:"智能策略",icon:"sparkles"},{id:"settings",label:"应用设置",icon:"settings-2"},{id:"deployment",label:"系统部署",icon:"network"}],St={home:"空间总览",analysis:"数据分析",alarms:"告警中心",scenes:"智能策略",settings:"应用设置",deployment:"系统部署",account:"机构与账户"},Ut=[{id:"doc-e7f-plan",title:"E7F 平面竣工图（PDF / DWG）",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-hvac",title:"E7F 暖通末端 FCU/VAV 原理图",category:"图纸",hash:"#deployment?sec=floors"},{id:"doc-e7f-knx",title:"KNX / DALI-2 照明回路点位表",category:"点位表",hash:"#deployment?sec=floors"},{id:"doc-e7f-gw",title:"边缘网关与控制器维保手册",category:"手册",hash:"#deployment?sec=floors"}];function bt(){const e=window.location.hash.replace(/^#\/?/,"").split("?")[0]??"";return e in St?e:"home"}function Ge(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}const Ca=new WeakMap;function Vs(e){Ca.get(e)?.()}async function Hs(e,a,t,n){Ca.get(e)?.(),e.classList.remove("bare-login");let o=t,l=bt(),d=localStorage.getItem(Nt)==="1",b=!1,v=!1,$=!1,S=await a.listOrganizations?.()??[{id:"org-gzlab",name:"广州国家实验室",projectCount:2}],w=a.getActiveOrganizationId?.()??S[0]?.id??"org-gzlab",h="",m=!1,k=0,A={devices:[],zones:[],alarms:[],workOrders:[],scenes:[]};function H(g){return o.scope.visibleModules.includes(g)}H(l)||(l="home",window.location.hash="#home");function x(){return S.find(g=>g.id===w)??S[0]??{id:"org-gzlab",name:"广州国家实验室",projectCount:0}}function W(g){if(g.id==="org-gzlab")return'<span class="pacom-org-mark" aria-hidden="true"><img src="./media/gzlab-mark.svg" alt="" /></span>';const I=g.name.slice(0,1)||"机";return`<span class="pacom-pop-avatar" style="width:24px; height:24px; font-size:12px; border-radius:6px;" aria-hidden="true">${Ge(I)}</span>`}async function P(){a.listOrganizations&&(S=await a.listOrganizations(),w=a.getActiveOrganizationId?.()??S[0]?.id??"org-gzlab")}async function me(){try{await P();const[g,I,R,u,M]=await Promise.all([a.getSpatialTree(),a.getFloorDevices(D.floorId).catch(()=>[]),a.listAlarms(D.floorId).catch(()=>[]),a.listWorkOrders(D.floorId).catch(()=>[]),a.listScenes(D.floorId).catch(()=>[])]);A={devices:I,zones:g.zones,alarms:R,workOrders:u,scenes:M},k=R.filter(Y=>Y.status==="active").length,G()}catch{}}function ue(){const g=Bt.filter(R=>H(R.id));let I=!1;return g.map(R=>`
        ${(R.id==="settings"||R.id==="deployment")&&!I?(I=!0,'<div class="pacom-nav-group-title">配置</div><div class="pacom-nav-group-sep" role="separator"></div>'):""}
        <button type="button" class="pacom-nav-item" data-route="${R.id}" aria-current="${l===R.id?"page":"false"}" title="${R.label}">
          ${re(R.icon,16,"pacom-nav-icon")}
          <span class="pacom-nav-label">${R.label}</span>
          ${R.id==="alarms"&&k>0?`<span class="pacom-nav-count" title="待处理告警 ${k} 条">${k}</span>`:""}
        </button>`).join("")}function ve(){const g=h.trim().toLowerCase(),I=Bt.filter(X=>H(X.id)),R=g?I.filter(X=>X.label.toLowerCase().includes(g)).slice(0,4):I,u=g?A.devices.filter(X=>`${X.name} ${X.id} ${X.category}`.toLowerCase().includes(g)).slice(0,5):A.devices.slice(0,3),M=g?A.zones.filter(X=>X.name.toLowerCase().includes(g)).slice(0,3):[],Y=H("alarms")?g?A.alarms.filter(X=>`${X.title} ${X.message} ${X.id}`.toLowerCase().includes(g)).slice(0,4):A.alarms.filter(X=>X.status==="active").slice(0,2):[],we=H("alarms")?g?A.workOrders.filter(X=>`${X.title} ${X.id}`.toLowerCase().includes(g)).slice(0,3):[]:[],Re=H("scenes")?g?A.scenes.filter(X=>`${X.name} ${X.description}`.toLowerCase().includes(g)).slice(0,3):[]:[],Ne=H("deployment")?g?Ut.filter(X=>`${X.title} ${X.category}`.toLowerCase().includes(g)).slice(0,4):Ut.slice(0,2):[],je=[];return u.length&&je.push(`<div class="pacom-search-group">${g?"设备（空间总览）":"常用设备直达"}</div>`+u.map(X=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?device=${encodeURIComponent(X.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Ge(X.name)}</span><span class="pacom-badge ${X.connectivity==="online"?"pacom-badge--online":"pacom-badge--critical"}">${X.connectivity==="online"?"在线":"离线"}</span></button>`).join("")),M.length&&je.push('<div class="pacom-search-group">功能区</div>'+M.map(X=>`<button type="button" class="pacom-search-hit" data-search-hash="#home?zone=${encodeURIComponent(X.id)}"><span>${Ge(X.name)}</span><span class="pacom-badge pacom-badge--neutral">区域</span></button>`).join("")),Y.length&&je.push(`<div class="pacom-search-group">${g?"告警":"待处理告警"}</div>`+Y.map(X=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?alarm=${encodeURIComponent(X.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Ge(X.title)}</span><span class="pacom-badge pacom-badge--warning">${X.status==="active"?"待处理":"已确认"}</span></button>`).join("")),we.length&&je.push('<div class="pacom-search-group">运维工单</div>'+we.map(X=>`<button type="button" class="pacom-search-hit" data-search-hash="#alarms?wo=${encodeURIComponent(X.id)}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Ge(X.title)}</span><span class="pacom-badge pacom-badge--accent">工单</span></button>`).join("")),Re.length&&je.push('<div class="pacom-search-group">智能策略</div>'+Re.map(X=>`<button type="button" class="pacom-search-hit" data-search-hash="#scenes"><span>${Ge(X.name)}</span><span class="pacom-badge pacom-badge--neutral">场景</span></button>`).join("")),Ne.length&&je.push('<div class="pacom-search-group">图纸与工程文档</div>'+Ne.map(X=>`<button type="button" class="pacom-search-hit" data-search-hash="${X.hash}"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${Ge(X.title)}</span><span class="pacom-badge pacom-badge--neutral">${Ge(X.category)}</span></button>`).join("")),R.length&&je.push('<div class="pacom-search-group">工作区</div>'+R.map(X=>`<button type="button" class="pacom-search-hit" data-search-hash="#${X.id}"><span style="display:inline-flex; align-items:center; gap:8px;">${re(X.icon,14)}${Ge(X.label)}</span><span class="pacom-badge pacom-badge--neutral">前往</span></button>`).join("")),je.length?je.join(""):`<div class="pacom-nav-empty">未找到与「${Ge(h)}」匹配的设备、区域、告警、工单或图纸</div>`}function pe(g){g.querySelectorAll("[data-search-hash]").forEach(I=>{I.addEventListener("click",()=>{const R=I.dataset.searchHash||"#home";m=!1,h="",ie(),b=!1,window.location.hash===R?(l=bt(),ye(!0)):window.location.hash=R})})}function ie(){if(e.querySelector('[data-role="cmd-scrim"]')?.remove(),!m)return;const g=document.createElement("div");g.className="pacom-cmd-scrim",g.dataset.role="cmd-scrim",g.innerHTML=`
      <div class="pacom-cmd-modal" role="dialog" aria-modal="true" aria-label="全局快速搜索">
        <div class="pacom-cmd-head">
          ${re("search",16)}
          <input class="pacom-cmd-input" name="cmdSearch" data-role="cmd-input" type="search" placeholder="搜索设备、空间、告警、工单、图纸或工作区…" value="${Ge(h)}" autocomplete="off" />
          <kbd class="pacom-kbd">Esc</kbd>
        </div>
        <div class="pacom-cmd-body" data-role="cmd-body">
          ${ve()}
        </div>
      </div>
    `,e.appendChild(g),g.addEventListener("click",u=>{u.target===g&&(m=!1,ie())});const I=g.querySelector('[data-role="cmd-input"]'),R=g.querySelector('[data-role="cmd-body"]');R&&pe(R),I?.focus(),I?.addEventListener("input",u=>{h=u.currentTarget.value,R&&(R.innerHTML=ve(),pe(R))})}function de(){if(!v)return"";const g=o.displayName.slice(0,1)||"U",I=!!(a.createOrganization&&o.role==="org_admin");return`
      <div class="pacom-org-popover ${d?"is-collapsed-anchor":""}" role="menu" aria-label="机构与账户" data-role="org-popover">
        <div class="pacom-pop-section-label">切换机构</div>
        ${S.map(R=>{const u=R.id===w;return`
              <button type="button" class="pacom-pop-item pacom-pop-item--tall" role="menuitemradio" aria-checked="${u}" data-pop-org="${Ge(R.id)}">
                ${W(R)}
                <span class="pacom-pop-text">
                  <b>${Ge(R.name)}</b>
                  <small>${R.projectCount>0?`${R.projectCount} 个项目`:"暂无项目"}</small>
                </span>
                ${u?re("check",16,"pacom-pop-check"):""}
              </button>`}).join("")}
        ${I?$?`
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
          <span class="pacom-pop-avatar" aria-hidden="true">${Ge(g)}</span>
          <span class="pacom-pop-text">
            <b>${Ge(o.displayName)}</b>
            <small>${Ge(o.roleLabel)}</small>
          </span>
        </button>

        <hr class="pacom-pop-hr" />

        <button type="button" class="pacom-pop-item pacom-pop-item--danger" role="menuitem" data-pop-act="logout">
          <span class="pacom-pop-icon" aria-hidden="true">${re("log-out",16)}</span>
          <span class="pacom-pop-text">退出登录</span>
        </button>
      </div>
    `}async function se(g){switch(H(l)||(l="home",window.location.hash="#home"),document.title=`${St[l]} ｜ PACOM Station`,l){case"home":await ns(g,a,o);return;case"analysis":await ss(g,a,o);return;case"alarms":await bs(g,a,o);return;case"scenes":await Ns(g,a,o);return;case"settings":await Bs(g,a,o);return;case"deployment":await Ms(g,a,o);return;case"account":await us(g,a,o,I=>{o=I,G(),K()},q);return}}async function q(){v=!1,b=!1,m=!1,N();try{await a.logout()}finally{window.location.hash="#login",n()}}function G(){const g=e.querySelector('[data-role="nav-list"]');g&&(g.innerHTML=ue(),qe())}function K(){e.querySelector('[data-role="org-popover"]')?.remove();const g=e.querySelector('[data-role="org-menu-btn"]');if(g&&g.setAttribute("aria-expanded",String(v)),!v)return;const I=document.createElement("div");I.innerHTML=de().trim();const R=I.firstElementChild;R&&(e.appendChild(R),Ie())}function qe(){e.querySelectorAll("[data-route]").forEach(g=>{g.addEventListener("click",()=>{const I=g.dataset.route;I===l&&!b||(l=I,b=!1,v=!1,window.location.hash=`#${l}`,ye(!0))})})}async function be(g){if(!a.switchOrganization)return;await a.switchOrganization(g),await P();const I=await a.getSpatialTree(),R=I.projects[0],u=R?I.buildings.find(Y=>Y.projectId===R.id):void 0,M=u?I.floors.find(Y=>Y.buildingId===u.id&&Y.id===D.floorId)??I.floors.find(Y=>Y.buildingId===u.id):void 0;R&&u&&M?ra({level:"floor",projectId:R.id,buildingId:u.id,floorId:M.id}):R&&u?ra({level:"building",projectId:R.id,buildingId:u.id}):R?ra({level:"project",projectId:R.id}):ra({level:"all-projects"}),v=!1,$=!1,b=!1,await ye(!0),me()}function Ie(){e.querySelectorAll("[data-pop-org]").forEach(g=>{g.addEventListener("click",()=>{const I=g.dataset.popOrg;if(I){if(I===w){v=!1,K();return}be(I)}})}),e.querySelector('[data-pop-act="toggle-new-org"]')?.addEventListener("click",g=>{g.stopPropagation(),$=!$,K(),$&&e.querySelector('[data-create-org-form] input[name="orgName"]')?.focus()}),e.querySelector("[data-create-org-form]")?.addEventListener("submit",async g=>{if(g.preventDefault(),!a.createOrganization)return;const I=new FormData(g.currentTarget),R=String(I.get("orgName")??"").trim();if(!R)return;const u=await a.createOrganization(R);await be(u.id)}),e.querySelectorAll('[data-pop-act="go-account"]').forEach(g=>{g.addEventListener("click",()=>{v=!1,$=!1,b=!1,l="account",window.location.hash="#account",ye(!0)})}),e.querySelector('[data-pop-act="logout"]')?.addEventListener("click",()=>{q()})}async function ye(g){const I=e.querySelector('[data-role="main-stage"]');if(!g&&I){const u=e.querySelector(".pacom-nav-rail");u&&(u.classList.toggle("is-collapsed",d),u.classList.toggle("is-mobile-open",b));const M=e.querySelector('[data-role="mobile-scrim"]');M&&M.classList.toggle("is-open",b),K();return}e.innerHTML=`
      <div class="pacom-app-frame">
        <header class="pacom-mobile-bar">
          <button type="button" class="pacom-mobile-menu-btn" data-role="mobile-menu-btn" aria-label="打开导航菜单">
            ${re("menu",20)}
          </button>
          <h1 class="pacom-mobile-title">${St[l]}</h1>
          <span class="pacom-badge pacom-badge--neutral">${Ge(o.roleLabel)}</span>
        </header>

        <div class="pacom-mobile-scrim ${b?"is-open":""}" data-role="mobile-scrim"></div>

        <aside class="pacom-nav-rail ${d?"is-collapsed":""} ${b?"is-mobile-open":""}" aria-label="主导航">
          <div class="pacom-nav-brand">
            <div class="pacom-nav-logo">${Us}</div>
            <button type="button" class="pacom-collapse-btn" data-role="toggle-sidebar" title="${d?"展开侧栏":"收起侧栏"}" aria-label="${d?"展开侧栏":"收起侧栏"}">
              ${re("panel-left",16)}
            </button>
          </div>

          <button type="button" class="pacom-search-trigger" data-role="open-cmd" title="快速搜索（⌘K）" aria-label="打开全局快速搜索">
            ${re("search",16,"pacom-nav-icon")}
            <span class="pacom-search-trigger-label">搜索</span>
            <kbd class="pacom-kbd">⌘K</kbd>
          </button>

          <nav class="pacom-nav-list" data-role="nav-list">
            ${ue()}
          </nav>

          <div class="pacom-nav-footer">
            <button type="button" class="pacom-org-btn ${l==="account"?"is-active":""}" data-role="org-menu-btn" aria-haspopup="menu" aria-expanded="${v}" title="${Ge(x().name)} ｜ ${Ge(o.displayName)}">
              ${W(x())}
              <span class="pacom-org-name">${Ge(x().name)}</span>
              ${re("chevrons-up-down",14,"pacom-org-arrows")}
            </button>
          </div>
        </aside>

        <div class="pacom-main-stage" data-role="main-stage"></div>
      </div>
    `,e.querySelector('[data-role="toggle-sidebar"]')?.addEventListener("click",()=>{d=!d,v=!1,localStorage.setItem(Nt,d?"1":"0");const u=e.querySelector(".pacom-nav-rail"),M=e.querySelector('[data-role="toggle-sidebar"]');u&&u.classList.toggle("is-collapsed",d),M&&(M.title=d?"展开侧栏":"收起侧栏",M.setAttribute("aria-label",M.title),M.innerHTML=re("panel-left",16)),K()}),e.querySelector('[data-role="open-cmd"]')?.addEventListener("click",()=>{v=!1,K(),m=!0,ie()}),e.querySelector('[data-role="mobile-menu-btn"]')?.addEventListener("click",()=>{b=!b,ye(!1)}),e.querySelector('[data-role="mobile-scrim"]')?.addEventListener("click",()=>{b=!1,v=!1,ye(!1)}),e.querySelector('[data-role="org-menu-btn"]')?.addEventListener("click",u=>{u.stopPropagation(),v=!v,K()}),qe(),K(),ie();const R=e.querySelector('[data-role="main-stage"]');R&&await se(R)}const F=g=>{const I=g.target;v&&!I?.closest('[data-role="org-popover"]')&&!I?.closest('[data-role="org-menu-btn"]')&&(v=!1,K())},Q=g=>{if((g.metaKey||g.ctrlKey)&&g.key.toLowerCase()==="k"){g.preventDefault(),v=!1,K(),m=!m,ie();return}g.key==="Escape"&&(m?(m=!1,ie()):v?(v=!1,K()):b&&(b=!1,ye(!1)))},ke=()=>{l=bt(),v=!1,b=!1,m=!1,ye(!0),me()};function N(){document.removeEventListener("click",F),document.removeEventListener("keydown",Q),window.removeEventListener("hashchange",ke),Ca.get(e)===N&&Ca.delete(e)}Ca.set(e,N),document.addEventListener("click",F),document.addEventListener("keydown",Q),window.addEventListener("hashchange",ke),await ye(!0),me()}const ia=["password","sms"];function ht(e){const a=os(e);return a==="cn"||a==="phone"}const Da=new WeakMap;function Vt(e){Da.get(e)?.()}function Gs(e,a,t,n){Da.get(e)?.(),e.classList.add("bare-login"),document.title="登录 ｜ PACOM Station";let o=!1,l=!1,d=(n?.prefillAccount??"").trim(),b="",v=ht(d)?d:"",$="",S=!1,w=(n?.notice??"").trim(),h={},m="",k=!1,A="",H=0,x=null,W=0,P=null,me=1,ue="",ve="",pe="",ie="",de=!1,se=!1,q={},G="",K=0,qe=null,be=0,Ie=null,ye=null,F=null,Q=null,ke=!1;const N=Wt();function g(c){if(c.key==="Escape"){if(N.isOpen()){c.preventDefault(),N.close(!0);return}P&&(c.preventDefault(),Fe())}}function I(c){const C=e.querySelector('[data-role="mode-seg"]'),oe=C?.querySelector(".au-mode-indicator"),fe=C?.querySelector('.au-mode-tab[aria-selected="true"]');!oe||!fe||(oe.style.transition=c?"":"none",oe.style.transform=`translateX(${fe.offsetLeft}px)`,oe.style.width=`${fe.offsetWidth}px`,c||(oe.offsetWidth,oe.style.transition=""))}function R(){I(!1)}function u(){H=0,x!==null&&(window.clearInterval(x),x=null)}function M(){K=0,qe!==null&&(window.clearInterval(qe),qe=null)}function Y(){ye?.(),ye=null,F?.(),F=null}function we(){ke=!0,Q?.(),Q=null,Y(),N.destroy(),u(),M(),document.removeEventListener("keydown",g),window.removeEventListener("resize",R),e.classList.remove("bare-login"),Da.get(e)===we&&Da.delete(e)}document.addEventListener("keydown",g),window.addEventListener("resize",R),Da.set(e,we);function Re(c=60){u(),H=c,x=window.setInterval(()=>{H-=1,H<=0&&u();const C=e.querySelector('[data-act="send-sms"]');C&&(C.disabled=H>0,C.textContent=H>0?`${H} 秒后重发`:A?"重新获取":"获取验证码")},1e3)}function Ne(c=60){M(),K=c,qe=window.setInterval(()=>{K-=1,K<=0&&M();const C=e.querySelector('[data-act="reset-resend"]');C&&(C.disabled=K>0||se,C.textContent=K>0?`${K} 秒后重发`:"重新获取")},1e3)}function je(c){w=c.trim();const C=e.querySelector('[data-role="login-notice"]');if(!w){C?.remove();return}if(C){const fe=C.querySelector("span");fe&&(fe.textContent=w);return}const oe=e.querySelector(".au-h1");oe&&oe.insertAdjacentHTML("afterend",`<div class="au-notice-soft au-login-notice" data-role="login-notice" role="status">${et}<span>${s(w)}</span></div>`)}function X(){const c=e.querySelector("#au-login-ferr");if(c)if(m){c.hidden=!1;const C=c.querySelector('[data-role="ferr-text"]');C&&(C.textContent=m)}else c.hidden=!0}function _(c){const C=e.querySelector(`.au-field[data-f="${c}"]`),oe=e.querySelector(`#au-${c}`),fe=e.querySelector(`#au-${c}-err`),Oe=h[c]??"";C?.classList.toggle("bad",!!Oe),oe?.setAttribute("aria-invalid",Oe?"true":"false"),fe&&(fe.textContent=Oe)}function L(c,C){const oe=c.querySelector(`.au-field[data-f="${C}"]`),fe=c.querySelector(`#au-${C}`),Oe=c.querySelector(`#au-${C}-err`),Ce=q[C]??"";oe?.classList.toggle("bad",!!Ce),fe?.setAttribute("aria-invalid",Ce?"true":"false"),Oe&&(Oe.textContent=Ce)}function ee(c){const C=c.querySelector("#au-rs-ferr");if(C)if(G){C.hidden=!1;const oe=C.querySelector('[data-role="rs-ferr-text"]');oe&&(oe.textContent=G)}else C.hidden=!0}function ce(){const c=e.querySelector('form[data-form="login"] fieldset'),C=e.querySelector('form[data-form="login"] button[type="submit"]');c&&(c.disabled=k),C&&(C.disabled=k,C.innerHTML=k?'<span class="au-spinner" aria-hidden="true"></span><span>正在登录…</span>':"<span>登录</span>")}function ge(c,C){N.close(!1),Ie=C??(document.activeElement instanceof HTMLElement?document.activeElement:null),P=c,Ae(),c==="reset"?e.querySelector(me===1?"#au-rs_id":"#au-rs_code")?.focus():e.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function Fe(c=!0){if(!P)return;N.close(!1),P=null,be+=1,se=!1,M(),Y(),Ae();const C=Ie;Ie=null,c&&C&&document.contains(C)&&C.focus({preventScroll:!0})}function Ye(c){const C=c?"au-account-scrim is-no-anim":"au-account-scrim";if(me===1){const fe=ue.trim().length>0&&!se;return`
        <div class="${C}" data-role="modal-scrim">
          <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
            <div class="dh">
              <h2 id="au-dlg-title">重置密码</h2>
              <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${st}</button>
            </div>
            <div class="db">
              <p class="au-dlead">输入注册时使用的电子邮箱或手机号码，验证后即可设置新密码。</p>
              <form id="au-reset-form" novalidate>
                <fieldset ${se?"disabled":""}>
                  <div class="au-field ${q.rs_id?"bad":""}" data-f="rs_id">
                    <div class="au-lab"><label for="au-rs_id">电子邮箱或手机号码</label></div>
                    <div class="au-ctl">
                      <input id="au-rs_id" name="rs_id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(ue)}" aria-invalid="${q.rs_id?"true":"false"}" />
                    </div>
                    <p class="au-err" id="au-rs_id-err" aria-live="polite">${s(q.rs_id??"")}</p>
                  </div>
                  <div class="au-ferr" id="au-rs-ferr" role="alert" ${G?"":"hidden"}>
                    ${va}
                    <span data-role="rs-ferr-text">${s(G)}</span>
                  </div>
                </fieldset>
              </form>
            </div>
            <div class="df">
              <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
              <button type="submit" form="au-reset-form" class="au-dlg-btn au-dlg-btn--primary" data-role="reset-submit" ${fe?"":"disabled"}>
                ${se?'<span class="au-spinner" aria-hidden="true"></span><span>发送中…</span>':"<span>发送验证码</span>"}
              </button>
            </div>
          </section>
        </div>
      `}return`
      <div class="${C}" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="dialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">重置密码</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${st}</button>
          </div>
          <div class="db">
            <div class="au-notice-soft au-reset-step-notice" role="status" aria-live="polite">
              <span class="au-notice-main">${et}<span>如该账户已注册，验证码已发送至 ${s(ve)}</span></span>
              <button type="button" class="au-notice-action" data-act="reset-back-step1" ${se?"disabled":""}>更换账户</button>
            </div>
            <form id="au-reset-confirm-form" novalidate>
              <fieldset ${se?"disabled":""}>
                <div class="au-field ${q.rs_code?"bad":""}" data-f="rs_code">
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
                    <input id="au-rs_code" name="rs_code" class="au-in has-code-btn" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(pe)}" aria-invalid="${q.rs_code?"true":"false"}" />
                    <button type="button" class="au-suffix au-getcode" data-act="reset-resend" ${K>0||se?"disabled":""}>
                      ${K>0?`${K} 秒后重发`:"重新获取"}
                    </button>
                  </div>
                  <p class="au-err" id="au-rs_code-err" aria-live="polite">${s(q.rs_code??"")}</p>
                </div>

                <div class="au-field ${q.rs_pwd?"bad":""}" data-f="rs_pwd">
                  <div class="au-lab">
                    <span class="au-lab-group">
                      <label for="au-rs_pwd">设置新密码</label>
                      ${La("au-rs-pwd-info","设置新密码说明",$t)}
                    </span>
                  </div>
                  <div class="au-ctl">
                    <input id="au-rs_pwd" name="rs_pwd" class="au-in has-suffix" type="${de?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(ie)}" aria-invalid="${q.rs_pwd?"true":"false"}" />
                    <button type="button" class="au-suffix au-eye" data-act="reset-toggle-eye" aria-controls="au-rs_pwd" aria-label="${de?"隐藏密码":"显示密码"}">
                      ${de?ba:fa}
                    </button>
                  </div>
                  <p class="au-err" id="au-rs_pwd-err" aria-live="polite">${s(q.rs_pwd??"")}</p>
                </div>

                <div class="au-ferr" id="au-rs-ferr" role="alert" ${G?"":"hidden"}>
                  ${va}
                  <span data-role="rs-ferr-text">${s(G)}</span>
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
    `}function _e(c){return P?P==="reset"?Ye(c):P==="contact"?Xt():"":""}function Ae(){const c=e.querySelector('[data-role="modal-host"]');if(!c)return;const C=c.childElementCount>0;if(Y(),N.close(!1),c.innerHTML=_e(C),!P)return;N.bind(c),ye=Jt(c.querySelector(".au-account-dlg")),F=Qt(c),c.querySelectorAll('[data-act="close-modal"]').forEach(De=>{De.addEventListener("click",()=>Fe())}),c.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",De=>{De.target===De.currentTarget&&Fe()});const oe=c.querySelector("#au-rs_id"),fe=c.querySelector('[data-role="reset-submit"]');oe?.addEventListener("input",()=>{ue=oe.value,fe&&(fe.disabled=ue.trim().length===0||se),(q.rs_id||G)&&(delete q.rs_id,G="",L(c,"rs_id"),ee(c))}),c.querySelector("#au-reset-form")?.addEventListener("submit",async De=>{if(De.preventDefault(),se)return;q={},G="";const Se=Ue(oe?.value??ue);ue=Se;const Ee=at(Se);if(Ee){q.rs_id=Ee,L(c,"rs_id"),oe?.focus({preventScroll:!0});return}const xe=++be;se=!0,Ae();try{const Ve=await a.sendVerificationCode({target:Se,purpose:"reset"});if(ke||P!=="reset"||xe!==be)return;se=!1,ve=Ve.maskedTarget||ga(Se),pe="",ie="",q={},G="",me=2,Ne(Ve.cooldownSeconds||60),Ae(),e.querySelector("#au-rs_code")?.focus({preventScroll:!0})}catch(Ve){if(ke||P!=="reset"||xe!==be)return;se=!1,G=Ve instanceof Error?Ve.message:"暂时无法发送验证码，请稍后再试。",Ae(),e.querySelector("#au-rs_id")?.focus({preventScroll:!0})}}),c.querySelector('[data-act="reset-back-step1"]')?.addEventListener("click",()=>{se||(be+=1,M(),me=1,pe="",ie="",q={},G="",Ae(),e.querySelector("#au-rs_id")?.focus({preventScroll:!0}))});const Oe=c.querySelector("#au-rs_code"),Ce=c.querySelector("#au-rs_pwd");Oe?.addEventListener("input",()=>{pe=Oe.value.replace(/\D/g,"").slice(0,6),Oe.value=pe,(q.rs_code||G)&&(delete q.rs_code,G="",L(c,"rs_code"),ee(c))}),Ce?.addEventListener("input",()=>{ie=Ce.value,(q.rs_pwd||G)&&(delete q.rs_pwd,G="",L(c,"rs_pwd"),ee(c))}),c.querySelector('[data-act="reset-toggle-eye"]')?.addEventListener("click",De=>{de=!de;const Se=De.currentTarget;if(Ce){const Ee=Ce.selectionStart,xe=Ce.selectionEnd;Ce.type=de?"text":"password",Ce.focus({preventScroll:!0}),Ee!==null&&xe!==null&&Ce.setSelectionRange(Ee,xe)}Se.setAttribute("aria-label",de?"隐藏密码":"显示密码"),Se.innerHTML=de?ba:fa}),c.querySelector('[data-act="reset-resend"]')?.addEventListener("click",async()=>{if(K>0||se)return;const De=Ue(ue),Se=++be,Ee=c.querySelector('[data-act="reset-resend"]');Ee&&(Ee.disabled=!0,Ee.textContent="发送中…"),G="",ee(c);try{const xe=await a.sendVerificationCode({target:De,purpose:"reset"});if(ke||P!=="reset"||me!==2||Se!==be)return;ve=xe.maskedTarget||ga(De),Ne(xe.cooldownSeconds||60),Ee&&(Ee.disabled=!0,Ee.textContent=`${K} 秒后重发`),Oe?.focus({preventScroll:!0})}catch(xe){if(ke||P!=="reset"||me!==2||Se!==be)return;Ee&&(Ee.disabled=!1,Ee.textContent="重新获取"),G=xe instanceof Error?xe.message:"暂时无法发送验证码，请稍后再试。",ee(c)}}),c.querySelector("#au-reset-confirm-form")?.addEventListener("submit",async De=>{if(De.preventDefault(),se)return;q={},G="",/^\d{6}$/.test(pe.trim())||(q.rs_code="请输入 6 位验证码");const Se=yt(ie);if(Se&&(q.rs_pwd=Se),L(c,"rs_code"),L(c,"rs_pwd"),ee(c),Object.keys(q).length>0){const xe=Object.keys(q)[0];c.querySelector(`#au-${xe}`)?.focus({preventScroll:!0});return}const Ee=Ue(ue);se=!0,Ae();try{if(await a.confirmPasswordReset({account:Ee,verificationCode:pe.trim(),newPassword:ie}),ke)return;Fe(!1),d=Ee,b="",ht(Ee)&&(v=Ee),m="",h={},o?ze("password",!1):(aa(),X()),je("密码已重置，请使用新密码登录"),e.querySelector("#au-pwd")?.focus({preventScroll:!0})}catch(xe){if(ke||P!=="reset")return;se=!1,G=xe instanceof Error?xe.message:"验证码不正确或已过期，请检查后重试。",Ae(),e.querySelector("#au-rs_code")?.focus({preventScroll:!0})}})}function aa(){N.close(!1);const c=`
      <span data-role="login-novcode-wrap" ${A?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-login-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-login-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-login-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `,C=o?`
        <div class="au-field ${h.sphone?"bad":""}" data-f="sphone">
          <div class="au-lab"><label for="au-sphone">手机号码</label></div>
          <div class="au-ctl">
            <input id="au-sphone" name="sphone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(v)}" aria-invalid="${h.sphone?"true":"false"}" />
            <button type="button" class="au-suffix au-getcode" data-act="send-sms" ${H>0?"disabled":""}>
              ${H>0?`${H} 秒后重发`:A?"重新获取":"获取验证码"}
            </button>
          </div>
          <p class="au-err" id="au-sphone-err" aria-live="polite">${s(h.sphone??"")}</p>
          <p class="au-hint" id="au-sphone-hint" role="status" aria-live="polite">${A?`验证码已发送至 ${s(A)}`:""}</p>
        </div>
      `:`
        <div class="au-field ${h.id?"bad":""}" data-f="id">
          <div class="au-lab"><label for="au-id">电子邮箱或手机号码</label></div>
          <div class="au-ctl">
            <input id="au-id" name="id" class="au-in" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(d)}" aria-invalid="${h.id?"true":"false"}" />
          </div>
          <p class="au-err" id="au-id-err" aria-live="polite">${s(h.id??"")}</p>
        </div>
      `,oe=o?`
        <div class="au-field ${h.scode?"bad":""}" data-f="scode">
          <div class="au-lab">
            <label for="au-scode">短信验证码</label>
            ${c}
          </div>
          <div class="au-ctl">
            <input id="au-scode" name="scode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s($)}" aria-invalid="${h.scode?"true":"false"}" />
          </div>
          <p class="au-err" id="au-scode-err" aria-live="polite">${s(h.scode??"")}</p>
        </div>
      `:`
        <div class="au-field ${h.pwd?"bad":""}" data-f="pwd">
          <div class="au-lab">
            <label for="au-pwd">密码</label>
            <button type="button" class="au-textbtn au-login-forgot" data-act="open-reset"><span>忘记密码？</span></button>
          </div>
          <div class="au-ctl">
            <input id="au-pwd" name="pwd" class="au-in has-suffix" type="${l?"text":"password"}" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(b)}" aria-invalid="${h.pwd?"true":"false"}" />
            <button type="button" class="au-suffix au-eye" data-act="toggle-eye" aria-controls="au-pwd" aria-label="${l?"隐藏密码":"显示密码"}">
              ${l?ba:fa}
            </button>
          </div>
          <p class="au-err" id="au-pwd-err" aria-live="polite">${s(h.pwd??"")}</p>
        </div>
      `,fe=e.querySelector('[data-role="fields-host"]');fe&&(fe.innerHTML=`${C}${oe}`,Qe(fe))}function ze(c,C=!1){const oe=c==="sms";o===oe||k||(oe&&!v.trim()&&ht(d)?v=d.trim():!oe&&!d.trim()&&v.trim()&&(d=v.trim()),o=oe,h={},m="",e.querySelectorAll('[data-act="switch-mode"]').forEach(fe=>{const Oe=fe.dataset.mode===c;fe.setAttribute("aria-selected",String(Oe)),fe.tabIndex=Oe?0:-1,Oe&&C&&fe.focus({preventScroll:!0})}),I(!0),aa(),X(),C||(o?A?e.querySelector("#au-scode")?.focus({preventScroll:!0}):v.trim()?e.querySelector('[data-act="send-sms"]')?.focus({preventScroll:!0}):e.querySelector("#au-sphone")?.focus({preventScroll:!0}):e.querySelector(d.trim()?"#au-pwd":"#au-id")?.focus({preventScroll:!0})))}function Qe(c){N.bind(c);const C=c.querySelector("#au-id"),oe=c.querySelector("#au-pwd"),fe=c.querySelector("#au-sphone"),Oe=c.querySelector("#au-scode");C?.addEventListener("input",()=>{d=C.value,(h.id||m)&&(delete h.id,m="",_("id"),X())}),oe?.addEventListener("input",()=>{b=oe.value,(h.pwd||m)&&(delete h.pwd,m="",_("pwd"),X())}),fe?.addEventListener("input",()=>{if(v=fe.value,W+=1,A||H>0){A="",u();const Ce=c.querySelector("#au-sphone-hint");Ce&&(Ce.textContent="");const De=c.querySelector('[data-role="login-novcode-wrap"]');De&&(De.hidden=!0),N.close(!1);const Se=c.querySelector('[data-act="send-sms"]');Se&&(Se.disabled=!1,Se.textContent="获取验证码")}(h.sphone||m)&&(delete h.sphone,m="",_("sphone"),X())}),Oe?.addEventListener("input",()=>{$=Oe.value.replace(/\D/g,"").slice(0,6),Oe.value=$,(h.scode||m)&&(delete h.scode,m="",_("scode"),X())}),c.querySelector('[data-act="toggle-eye"]')?.addEventListener("click",Ce=>{l=!l;const De=Ce.currentTarget,Se=c.querySelector("#au-pwd");if(Se){const Ee=Se.selectionStart,xe=Se.selectionEnd;Se.type=l?"text":"password",Se.focus({preventScroll:!0}),Ee!==null&&xe!==null&&Se.setSelectionRange(Ee,xe)}De.setAttribute("aria-label",l?"隐藏密码":"显示密码"),De.innerHTML=l?ba:fa}),c.querySelector('[data-act="send-sms"]')?.addEventListener("click",async()=>{const Ce=ma(v);if(Ce){h={...h,sphone:Ce},_("sphone"),c.querySelector("#au-sphone")?.focus({preventScroll:!0});return}delete h.sphone,_("sphone");const De=Ue(v),Se=++W,Ee=c.querySelector('[data-act="send-sms"]');Ee&&(Ee.disabled=!0,Ee.textContent="发送中…");try{const xe=await a.sendVerificationCode({target:De,purpose:"login"});if(ke||Se!==W||Ue(v)!==De)return;A=xe.maskedTarget||ga(De);const Ve=c.querySelector("#au-sphone-hint");Ve&&(Ve.textContent=`验证码已发送至 ${A}`);const Je=c.querySelector('[data-role="login-novcode-wrap"]');Je&&(Je.hidden=!1),Re(xe.cooldownSeconds||60),Ee&&(Ee.disabled=!0,Ee.textContent=`${H} 秒后重发`),c.querySelector("#au-scode")?.focus({preventScroll:!0})}catch(xe){if(ke||Se!==W||Ue(v)!==De)return;Ee&&(Ee.disabled=!1,Ee.textContent=A?"重新获取":"获取验证码"),m=xe instanceof Error?xe.message:"暂时无法发送验证码，请稍后再试。",X()}}),c.querySelector('[data-act="open-reset"]')?.addEventListener("click",Ce=>{me=1,ue=(o?v:d).trim(),ve="",pe="",ie="",de=!1,se=!1,q={},G="",M(),ge("reset",Ce.currentTarget)})}e.innerHTML=`
    <div class="au au-split">
      <section class="au-left">
        <div class="au-center">
          <main class="au-group">
            <div class="au-logo">${Zt}</div>
            <h1 class="au-h1">登录</h1>
            ${w?`<div class="au-notice-soft au-login-notice" data-role="login-notice" role="status">${et}<span>${s(w)}</span></div>`:""}
            <div class="au-mode-seg" role="tablist" aria-label="登录方式" data-role="mode-seg">
              <span class="au-mode-indicator" aria-hidden="true"></span>
              <button type="button" role="tab" aria-selected="true" tabindex="0" class="au-mode-tab" data-act="switch-mode" data-mode="password">密码登录</button>
              <button type="button" role="tab" aria-selected="false" tabindex="-1" class="au-mode-tab" data-act="switch-mode" data-mode="sms">短信登录</button>
            </div>
            <form data-form="login" novalidate>
              <fieldset>
                <div data-role="fields-host"></div>
                <div class="au-ferr" id="au-login-ferr" role="alert" hidden>
                  ${va}
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
        ${Kt()}
      </section>
      <aside class="au-art" aria-hidden="true">
        <div class="au-art-frame">
          <img src="./media/auth-hero.jpg" alt="" />
        </div>
      </aside>
    </div>
    <div data-role="modal-host"></div>
  `,e.querySelector('input[name="keep"]')?.addEventListener("change",c=>{S=c.currentTarget.checked}),e.querySelector('form[data-form="login"]')?.addEventListener("submit",async c=>{if(c.preventDefault(),!k){if(h={},m="",o){const C=ma(v);C&&(h.sphone=C),/^\d{6}$/.test($.trim())||(h.scode="请输入 6 位验证码"),_("sphone"),_("scode")}else d.trim()||(h.id="请输入电子邮箱或手机号码"),b||(h.pwd="请输入密码"),_("id"),_("pwd");if(X(),Object.keys(h).length>0){const C=Object.keys(h)[0];e.querySelector(`#au-${C}`)?.focus({preventScroll:!0});return}k=!0,ce();try{const C=await a.login({method:o?"sms":"password",account:Ue(o?v:d),...o?{smsCode:$.trim()}:{password:b},rememberMe:S});if(ke)return;we(),t(C)}catch(C){if(ke)return;k=!1,m=C instanceof Error?C.message:o?"验证码不正确或已过期":"账户或密码不正确",ce(),X()}}}),e.querySelector('[data-act="open-register"]')?.addEventListener("click",()=>{n?.onOpenRegister?(we(),n.onOpenRegister()):window.location.hash="#register"}),e.querySelectorAll('[data-act="switch-mode"]').forEach(c=>{c.addEventListener("click",()=>{const C=c.dataset.mode;C&&ze(C,!1)}),c.addEventListener("keydown",C=>{const oe=o?"sms":"password",fe=ia.indexOf(oe);C.key==="ArrowRight"?(C.preventDefault(),ze(ia[(fe+1)%ia.length],!0)):C.key==="ArrowLeft"?(C.preventDefault(),ze(ia[(fe-1+ia.length)%ia.length],!0)):C.key==="Home"?(C.preventDefault(),ze(ia[0],!0)):C.key==="End"&&(C.preventDefault(),ze(ia[ia.length-1],!0))})}),e.querySelector('[data-act="open-contact"]')?.addEventListener("click",c=>{ge("contact",c.currentTarget)}),aa(),I(!1),Q=Yt(e),d.trim()&&e.querySelector("#au-pwd")?.focus({preventScroll:!0}),document.fonts?.ready.then(()=>{ke||I(!1)})}const la=["join","apply"],wa=1e3,_a=50,Ya=60,Ht=110,qa=new WeakMap;function Gt(e){qa.get(e)?.()}function Ws(e,a,t){qa.get(e)?.(),e.classList.add("bare-login");let n=!1,o=t.initialMode??"join",l=null,d=null,b=null,v=null,$=null,S=t.initialJoinReceipt??null,w=t.initialApplyReceipt??null,h="",m=!1,k=null;const A=(t.inviteToken??"").trim(),H=!!(t.isInviteRoute||A),x=t.currentSession??null;let W=!!(H&&A),P=null,me="",ue="",ve="",pe="",ie="",de=0,se=null,q=0,G="",K=!1,qe=!1,be=Et(t.prefillCode??""),Ie="",ye=!1,F=0,Q="",ke="",N="",g="",I="",R=!1,u=!1,M="",Y=0,we=null,Re=0,Ne="",je="",X="",_="",L="",ee="",ce="",ge="",Fe="",Ye=!1,_e="",Ae=0,aa=null,ze=0,Qe=null,c={},C="",oe=!1;const fe=Wt();function Oe(p){if(p.key==="Escape"){if(fe.isOpen()){p.preventDefault(),fe.close(!0);return}l&&(p.preventDefault(),he())}}function Ce(p){const E=e.querySelector('[data-role="reg-seg"]'),B=E?.querySelector(".au-mode-indicator"),V=E?.querySelector('.au-mode-tab[aria-selected="true"]');!B||!V||(B.style.transition=p?"":"none",B.style.transform=`translateX(${V.offsetLeft}px)`,B.style.width=`${V.offsetWidth}px`,p||(B.offsetWidth,B.style.transition=""))}function De(){Ce(!1)}function Se(){Y=0,we!==null&&(window.clearInterval(we),we=null)}function Ee(){Ae=0,aa!==null&&(window.clearInterval(aa),aa=null)}function xe(){de=0,se!==null&&(window.clearInterval(se),se=null)}function Ve(){v?.(),v=null,$?.(),$=null}function Je(){n=!0,k?.(),k=null,Ve(),fe.destroy(),Se(),Ee(),xe(),Qe!==null&&(window.clearTimeout(Qe),Qe=null),document.removeEventListener("keydown",Oe),window.removeEventListener("resize",De),e.classList.remove("bare-login"),qa.get(e)===Je&&qa.delete(e)}document.addEventListener("keydown",Oe),window.addEventListener("resize",De),qa.set(e,Je);function Xe(p){Se(),Y=p,we=window.setInterval(()=>{Y-=1,Y<=0&&Se();const E=e.querySelector('[data-act="jn-send-code"]');E&&(E.disabled=Y>0,E.textContent=Y>0?`${Y} 秒后重发`:M?"重新获取":"获取验证码")},1e3)}function ca(p){Ee(),Ae=p,aa=window.setInterval(()=>{Ae-=1,Ae<=0&&Ee();const E=e.querySelector('[data-act="ap-send-code"]');E&&(E.disabled=Ae>0,E.textContent=Ae>0?`${Ae} 秒后重发`:_e?"重新获取":"获取验证码")},1e3)}function ne(){const p=e.querySelector("#au-reg-ferr");if(p)if(C){p.hidden=!1;const E=p.querySelector('[data-role="ferr-text"]');E&&(E.textContent=C)}else p.hidden=!0}function J(p){const E=e.querySelector(`.au-field[data-f="${p}"]`),B=e.querySelector(`#au-${p}`),V=e.querySelector(`#au-${p}-err`),ae=c[p]??"";E?.classList.toggle("bad",!!ae),B?.setAttribute("aria-invalid",ae?"true":"false"),V&&(V.textContent=ae)}function He(p,E){const B=e.querySelector("form[data-reg-form] fieldset"),V=e.querySelector('form[data-reg-form] button[type="submit"]');B&&(B.disabled=oe),V&&(V.disabled=oe,V.innerHTML=oe?`<span class="au-spinner" aria-hidden="true"></span><span>${s(p)}</span>`:`<span>${s(E)}</span>`)}function da(p,E){fe.close(!1),d=E??(document.activeElement instanceof HTMLElement?document.activeElement:null),l=p,pa(),e.querySelector('[data-role="modal-host"] .au-account-dlg')?.focus()}function he(){if(!l)return;l=null,b=null,Ve(),pa();const p=d;d=null,p&&document.contains(p)&&p.focus({preventScroll:!0})}function Oa(){return`
      <div class="au-account-scrim" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="alertdialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">请阅读并同意</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${st}</button>
          </div>
          <div class="db">
            <p class="au-dlead" style="margin-bottom:0;">
              发送验证码前，请先阅读并同意 PACOM
              <a class="au-consent-link" href="${Ha}" target="_blank" rel="noopener noreferrer">隐私政策</a>和<a class="au-consent-link" href="${Ha}" target="_blank" rel="noopener noreferrer">使用条款</a>。
            </p>
          </div>
          <div class="df">
            <button type="button" class="au-dlg-btn au-dlg-btn--ghost" data-act="close-modal">取消</button>
            <button type="button" class="au-dlg-btn au-dlg-btn--primary" data-act="consent-confirm">同意并发送</button>
          </div>
        </section>
      </div>
    `}function Ma(){return`
      <div class="au-account-scrim" data-role="modal-scrim">
        <section class="au-account-dlg au-reset-dlg" role="alertdialog" aria-modal="true" aria-labelledby="au-dlg-title" tabindex="-1">
          <div class="dh">
            <h2 id="au-dlg-title">撤回加入申请</h2>
            <button type="button" class="au-dlg-close" data-act="close-modal" aria-label="关闭">${st}</button>
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
    `}function pa(){const p=e.querySelector('[data-role="modal-host"]');if(p){if(Ve(),!l){p.innerHTML="";return}p.innerHTML=l==="contact"?Xt():l==="withdraw_confirm"?Ma():Oa(),v=Jt(p.querySelector(".au-account-dlg")),$=Qt(p),p.querySelectorAll('[data-act="close-modal"]').forEach(E=>{E.addEventListener("click",()=>he())}),p.querySelector('[data-role="modal-scrim"]')?.addEventListener("click",E=>{E.target===E.currentTarget&&he()}),p.querySelector('[data-act="consent-confirm"]')?.addEventListener("click",()=>{const E=b;b=null,l=null,Ve(),pa(),E?.()}),p.querySelector('[data-act="withdraw-confirm"]')?.addEventListener("click",async()=>{if(!(!S||!a.withdrawJoinApplication||m)){l=null,Ve(),pa(),m=!0,C="",U();try{if(await a.withdrawJoinApplication(S.requestId,S.withdrawToken),n)return;m=!1,S=null,g="",M="",Re+=1,Se(),h="申请已撤回，修改信息并重新验证后即可再次提交。",U()}catch(E){if(n)return;m=!1,C=E instanceof Error?E.message:"暂时无法撤回申请，请稍后再试。",U()}}})}}function sa(p,E,B,V){return`
      <div class="au-field au-consent-field ${c[V]?"bad":""}" data-f="${V}">
        <div class="au-check au-consent-row">
          <input id="${p}" type="checkbox" name="${E}" ${B?"checked":""} aria-invalid="${c[V]?"true":"false"}" />
          <span class="au-consent-text">
            <label class="au-consent-label" for="${p}">我已阅读并同意 PACOM </label><a class="au-consent-link" href="${Ha}" target="_blank" rel="noopener noreferrer">隐私政策</a><label class="au-consent-label" for="${p}">和</label><a class="au-consent-link" href="${Ha}" target="_blank" rel="noopener noreferrer">使用条款</a>
          </span>
        </div>
        <p class="au-err" id="au-${V}-err" aria-live="polite">${s(c[V]??"")}</p>
      </div>
    `}async function Me(p){const E=p.replace(/\D/g,"");if(E.length!==9){Ie="",ye=!1,ta();return}const B=++F;ye=!0,Ie="",ta();try{const V=await a.resolveInviteCode(E);if(n||B!==F)return;ye=!1,V.valid&&V.organizationName?(Ie=V.organizationName,delete c.jn_code):(Ie="",c.jn_code=V.message??"邀请码不正确或已失效，请向机构管理员确认。"),J("jn_code"),ta()}catch(V){if(n||B!==F)return;ye=!1,Ie="",c.jn_code=V instanceof Error?V.message:"暂时无法核验邀请码，请稍后再试。",J("jn_code"),ta()}}function ta(){const p=e.querySelector('[data-role="jn-code-match"]'),E=e.querySelector('[data-role="jn-nocode-wrap"]');p&&(Ie?(p.hidden=!1,p.innerHTML=`${xt}<span>目标机构：${s(Ie)}</span>`):(p.hidden=!0,p.innerHTML="")),E&&(E.hidden=!!Ie)}function Pe(){const p=`
      <span data-role="jn-nocode-wrap" ${Ie?"hidden":""}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-nocode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-nocode-pop"><span>没有邀请码？</span></button>
        <span id="au-jn-nocode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="没有邀请码说明" hidden>
          <span class="ws-info-text">请向所在机构的管理员获取 9 位邀请码；如需为新企业开通，请切换上方「申请开通机构」。</span>
        </span>
      </span>
    `,E=`
      <span data-role="jn-novcode-wrap" ${M?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-jn-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-jn-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-jn-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认邮箱或手机号码无误，检查垃圾邮件或短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">填写机构 9 位邀请码，管理员批准后即可访问。</p>
      ${h?`<div class="au-notice-soft au-form-notice" data-role="jn-form-notice" role="status">${et}<span>${s(h)}</span></div>`:""}
      <form class="au-reg-form" data-reg-form="join" novalidate>
        <fieldset ${oe?"disabled":""}>
          <div class="au-field ${c.jn_code?"bad":""}" data-f="jn_code">
            <div class="au-lab">
              <label for="au-jn_code">机构邀请码</label>
              ${p}
            </div>
            <div class="au-ctl">
              <input id="au-jn_code" name="jn_code" class="au-in" type="text" inputmode="numeric" autocomplete="off" maxlength="11" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(be)}" aria-invalid="${c.jn_code?"true":"false"}" />
            </div>
            <div class="au-code-match" data-role="jn-code-match" role="status" aria-live="polite" ${Ie?"":"hidden"}>
              ${Ie?`${xt}<span>目标机构：${s(Ie)}</span>`:""}
            </div>
            <p class="au-err" id="au-jn_code-err" aria-live="polite">${s(c.jn_code??"")}</p>
          </div>

          <div class="au-field ${c.jn_name?"bad":""}" data-f="jn_name">
            <div class="au-lab"><label for="au-jn_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-jn_name" name="jn_name" class="au-in" type="text" autocomplete="name" value="${s(Q)}" aria-invalid="${c.jn_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_name-err" aria-live="polite">${s(c.jn_name??"")}</p>
          </div>

          <div class="au-field ${c.jn_dept?"bad":""}" data-f="jn_dept">
            <div class="au-lab"><label for="au-jn_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-jn_dept" name="jn_dept" class="au-in" type="text" autocomplete="organization-title" value="${s(ke)}" aria-invalid="${c.jn_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_dept-err" aria-live="polite">${s(c.jn_dept??"")}</p>
          </div>

          <div class="au-field ${c.jn_account?"bad":""}" data-f="jn_account">
            <div class="au-lab"><label for="au-jn_account">电子邮箱或手机号码</label></div>
            <div class="au-ctl">
              <input id="au-jn_account" name="jn_account" class="au-in has-code-btn" type="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(N)}" aria-invalid="${c.jn_account?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="jn-send-code" ${Y>0?"disabled":""}>
                ${Y>0?`${Y} 秒后重发`:M?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-jn_account-err" aria-live="polite">${s(c.jn_account??"")}</p>
            <p class="au-hint" id="au-jn_account-hint" role="status" aria-live="polite">${M?`验证码已发送至 ${s(M)}`:""}</p>
          </div>

          <div class="au-field ${c.jn_vcode?"bad":""}" data-f="jn_vcode">
            <div class="au-lab">
              <label for="au-jn_vcode">验证码</label>
              ${E}
            </div>
            <div class="au-ctl">
              <input id="au-jn_vcode" name="jn_vcode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(g)}" aria-invalid="${c.jn_vcode?"true":"false"}" />
            </div>
            <p class="au-err" id="au-jn_vcode-err" aria-live="polite">${s(c.jn_vcode??"")}</p>
          </div>

          <div class="au-field ${c.jn_pwd?"bad":""}" data-f="jn_pwd">
            <div class="au-lab">
              <span class="au-lab-group">
                <label for="au-jn_pwd">设置密码</label>
                ${La("au-jn-pwd-info","设置密码说明",$t)}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-jn_pwd" name="jn_pwd" class="au-in has-suffix" type="${R?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(I)}" aria-invalid="${c.jn_pwd?"true":"false"}" />
              <button type="button" class="au-suffix au-eye" data-act="jn-toggle-eye" aria-controls="au-jn_pwd" aria-label="${R?"隐藏密码":"显示密码"}">
                ${R?ba:fa}
              </button>
            </div>
            <p class="au-err" id="au-jn_pwd-err" aria-live="polite">${s(c.jn_pwd??"")}</p>
          </div>

          ${sa("au-jn_consent","jn_consent",u,"jn_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${C?"":"hidden"}>
            ${va}
            <span data-role="ferr-text">${s(C)}</span>
          </div>

          <button type="submit" class="au-primary" ${oe?"disabled":""}>
            ${oe?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>注册并申请加入</span>"}
          </button>
        </fieldset>
      </form>
    `}function Ra(){const p=_t(je),E=oa(Fe),B=E>=wa*.8?`${E} / ${wa}`:"",V=`
      <span data-role="ap-novcode-wrap" ${_e?"":"hidden"}>
        <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-ap-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-ap-novcode-pop"><span>收不到验证码？</span></button>
        <span id="au-ap-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
          <span class="ws-info-text">请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。</span>
        </span>
      </span>
    `;return`
      <p class="au-lead">提交企业信息，经 PACOM 审核通过后开通机构。</p>
      <form class="au-reg-form" data-reg-form="apply" novalidate>
        <fieldset ${oe?"disabled":""}>
          <div class="au-field ${c.ap_org?"bad":""}" data-f="ap_org">
            <div class="au-lab">
              <span class="au-lab-group">
                <label for="au-ap_org">机构名称</label>
                ${La("au-ap-org-info","机构名称说明",["请填写营业执照等登记证书上的完整名称。"])}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-ap_org" name="ap_org" class="au-in" type="text" autocomplete="organization" value="${s(Ne)}" aria-invalid="${c.ap_org?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_org-err" aria-live="polite">${s(c.ap_org??"")}</p>
          </div>

          <div class="au-field ${c.ap_region?"bad":""}" data-f="ap_region">
            <div class="au-lab"><label for="au-ap_prov">所在地区</label></div>
            <div class="au-row-eq">
              <div class="au-select-wrap">
                <select id="au-ap_prov" name="ap_prov" class="au-select ${je?"":"is-placeholder"}" aria-label="省份" aria-invalid="${c.ap_region?"true":"false"}">
                  <option value="" ${je?"":"selected"}>省份</option>
                  ${ls.map(([ae])=>`<option value="${s(ae)}" ${je===ae?"selected":""}>${s(ae)}</option>`).join("")}
                </select>
                ${Lt}
              </div>
              <div class="au-select-wrap">
                <select id="au-ap_city" name="ap_city" class="au-select ${X?"":"is-placeholder"}" aria-label="城市" ${je?"":"disabled"} aria-invalid="${c.ap_region?"true":"false"}">
                  <option value="" ${X?"":"selected"}>城市</option>
                  ${p.map(ae=>`<option value="${s(ae)}" ${X===ae?"selected":""}>${s(ae)}</option>`).join("")}
                </select>
                ${Lt}
              </div>
            </div>
            <p class="au-err" id="au-ap_region-err" aria-live="polite">${s(c.ap_region??"")}</p>
          </div>

          <div class="au-field ${c.ap_name?"bad":""}" data-f="ap_name">
            <div class="au-lab"><label for="au-ap_name">姓名</label></div>
            <div class="au-ctl">
              <input id="au-ap_name" name="ap_name" class="au-in" type="text" autocomplete="name" value="${s(_)}" aria-invalid="${c.ap_name?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_name-err" aria-live="polite">${s(c.ap_name??"")}</p>
          </div>

          <div class="au-field ${c.ap_dept?"bad":""}" data-f="ap_dept">
            <div class="au-lab"><label for="au-ap_dept">部门 / 职务<span class="fld-opt">选填</span></label></div>
            <div class="au-ctl">
              <input id="au-ap_dept" name="ap_dept" class="au-in" type="text" autocomplete="organization-title" value="${s(L)}" aria-invalid="${c.ap_dept?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_dept-err" aria-live="polite">${s(c.ap_dept??"")}</p>
          </div>

          <div class="au-field ${c.ap_email?"bad":""}" data-f="ap_email">
            <div class="au-lab">
              <span class="au-lab-group">
                <label for="au-ap_email">电子邮箱</label>
                ${La("au-ap-email-info","电子邮箱说明",["审核结果与机构开通链接将发送至此邮箱，请填写常用工作邮箱。"])}
              </span>
            </div>
            <div class="au-ctl">
              <input id="au-ap_email" name="ap_email" class="au-in" type="email" inputmode="email" autocomplete="email" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(ee)}" aria-invalid="${c.ap_email?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_email-err" aria-live="polite">${s(c.ap_email??"")}</p>
          </div>

          <div class="au-field ${c.ap_phone?"bad":""}" data-f="ap_phone">
            <div class="au-lab"><label for="au-ap_phone">手机号码</label></div>
            <div class="au-ctl">
              <input id="au-ap_phone" name="ap_phone" class="au-in has-code-btn" type="tel" inputmode="tel" autocomplete="tel" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(ce)}" aria-invalid="${c.ap_phone?"true":"false"}" />
              <button type="button" class="au-suffix au-getcode" data-act="ap-send-code" ${Ae>0?"disabled":""}>
                ${Ae>0?`${Ae} 秒后重发`:_e?"重新获取":"获取验证码"}
              </button>
            </div>
            <p class="au-err" id="au-ap_phone-err" aria-live="polite">${s(c.ap_phone??"")}</p>
            <p class="au-hint" id="au-ap_phone-hint" role="status" aria-live="polite">${_e?`验证码已发送至 ${s(_e)}`:""}</p>
          </div>

          <div class="au-field ${c.ap_sms?"bad":""}" data-f="ap_sms">
            <div class="au-lab">
              <label for="au-ap_sms">短信验证码</label>
              ${V}
            </div>
            <div class="au-ctl">
              <input id="au-ap_sms" name="ap_sms" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(ge)}" aria-invalid="${c.ap_sms?"true":"false"}" />
            </div>
            <p class="au-err" id="au-ap_sms-err" aria-live="polite">${s(c.ap_sms??"")}</p>
          </div>

          <div class="au-field ${c.ap_overview?"bad":""}" data-f="ap_overview">
            <div class="au-lab"><label for="au-ap_overview">项目概况<span class="fld-opt">选填</span></label></div>
            <div class="ws-textarea-shell au-note-shell">
              <textarea id="au-ap_overview" name="ap_overview" class="au-in au-ta au-ta-std" rows="3" aria-invalid="${c.ap_overview?"true":"false"}">${s(Fe)}</textarea>
              <button type="button" class="ws-resize" data-space-resize="au-ap_overview" aria-label="调整项目概况输入框高度；按上下方向键调整"></button>
            </div>
            <p class="au-err" id="au-ap_overview-err" aria-live="polite">${s(c.ap_overview??"")}</p>
            <p class="au-hint au-char-count" id="au-ap_overview-count" ${B?"":"hidden"}>${s(B)}</p>
          </div>

          ${sa("au-ap_consent","ap_consent",Ye,"ap_consent")}

          <div class="au-ferr" id="au-reg-ferr" role="alert" ${C?"":"hidden"}>
            ${va}
            <span data-role="ferr-text">${s(C)}</span>
          </div>

          <button type="submit" class="au-primary" ${oe?"disabled":""}>
            ${oe?'<span class="au-spinner" aria-hidden="true"></span><span>正在提交…</span>':"<span>提交开通申请</span>"}
          </button>
        </fieldset>
      </form>
    `}async function ka(){const p=at(N);if(p){c.jn_account=p,J("jn_account"),e.querySelector("#au-jn_account")?.focus({preventScroll:!0});return}delete c.jn_account,J("jn_account");const E=Ue(N),B=++Re,V=e.querySelector('[data-act="jn-send-code"]');V&&(V.disabled=!0,V.textContent="发送中…");try{const ae=await a.sendVerificationCode({target:E,purpose:"register_join",consentAcceptedAt:new Date().toISOString()});if(n||B!==Re||Ue(N)!==E)return;M=ae.maskedTarget||ga(E);const i=e.querySelector("#au-jn_account-hint");i&&(i.textContent=`验证码已发送至 ${M}`);const r=e.querySelector('[data-role="jn-novcode-wrap"]');r&&(r.hidden=!1),Xe(ae.cooldownSeconds||60),V&&(V.disabled=!0,V.textContent=`${Y} 秒后重发`),e.querySelector("#au-jn_vcode")?.focus({preventScroll:!0})}catch(ae){if(n||B!==Re||Ue(N)!==E)return;V&&(V.disabled=!1,V.textContent=M?"重新获取":"获取验证码"),C=ae instanceof Error?ae.message:"暂时无法发送验证码，请稍后再试。",ne()}}async function ha(){const p=ma(ce);if(p){c.ap_phone=p,J("ap_phone"),e.querySelector("#au-ap_phone")?.focus({preventScroll:!0});return}delete c.ap_phone,J("ap_phone");const E=Ue(ce),B=++ze,V=e.querySelector('[data-act="ap-send-code"]');V&&(V.disabled=!0,V.textContent="发送中…");try{const ae=await a.sendVerificationCode({target:E,purpose:"org_apply",consentAcceptedAt:new Date().toISOString()});if(n||B!==ze||Ue(ce)!==E)return;_e=ae.maskedTarget||ga(E);const i=e.querySelector("#au-ap_phone-hint");i&&(i.textContent=`验证码已发送至 ${_e}`);const r=e.querySelector('[data-role="ap-novcode-wrap"]');r&&(r.hidden=!1),ca(ae.cooldownSeconds||60),V&&(V.disabled=!0,V.textContent=`${Ae} 秒后重发`),e.querySelector("#au-ap_sms")?.focus({preventScroll:!0})}catch(ae){if(n||B!==ze||Ue(ce)!==E)return;V&&(V.disabled=!1,V.textContent=_e?"重新获取":"获取验证码"),C=ae instanceof Error?ae.message:"暂时无法发送验证码，请稍后再试。",ne()}}function za(p){fe.bind(p);const E=p.querySelector("#au-jn_code"),B=p.querySelector("#au-jn_name"),V=p.querySelector("#au-jn_dept"),ae=p.querySelector("#au-jn_account"),i=p.querySelector("#au-jn_vcode"),r=p.querySelector("#au-jn_pwd"),f=p.querySelector("#au-jn_consent");E?.addEventListener("input",()=>{be=Et(E.value),E.value=be,(c.jn_code||C)&&(delete c.jn_code,C="",J("jn_code"),ne()),Me(be)}),B?.addEventListener("input",()=>{Q=B.value,(c.jn_name||C)&&(delete c.jn_name,C="",J("jn_name"),ne())}),V?.addEventListener("input",()=>{ke=V.value,c.jn_dept&&(delete c.jn_dept,J("jn_dept"))}),ae?.addEventListener("input",()=>{if(N=ae.value,Re+=1,M||Y>0){M="",Se();const y=p.querySelector("#au-jn_account-hint");y&&(y.textContent="");const T=p.querySelector('[data-role="jn-novcode-wrap"]');T&&(T.hidden=!0),fe.close(!1);const z=p.querySelector('[data-act="jn-send-code"]');z&&(z.disabled=!1,z.textContent="获取验证码")}(c.jn_account||C)&&(delete c.jn_account,C="",J("jn_account"),ne())}),i?.addEventListener("input",()=>{g=i.value.replace(/\D/g,"").slice(0,6),i.value=g,(c.jn_vcode||C)&&(delete c.jn_vcode,C="",J("jn_vcode"),ne())}),r?.addEventListener("input",()=>{I=r.value,(c.jn_pwd||C)&&(delete c.jn_pwd,C="",J("jn_pwd"),ne())}),f?.addEventListener("change",()=>{u=f.checked,u&&c.jn_consent&&(delete c.jn_consent,J("jn_consent"))}),p.querySelector('[data-act="jn-toggle-eye"]')?.addEventListener("click",y=>{R=!R;const T=y.currentTarget;if(r){const z=r.selectionStart,Z=r.selectionEnd;r.type=R?"text":"password",r.focus({preventScroll:!0}),z!==null&&Z!==null&&r.setSelectionRange(z,Z)}T.setAttribute("aria-label",R?"隐藏密码":"显示密码"),T.innerHTML=R?ba:fa}),p.querySelector('[data-act="jn-send-code"]')?.addEventListener("click",y=>{const T=at(N);if(T){c.jn_account=T,J("jn_account"),ae?.focus({preventScroll:!0});return}if(!u){b=()=>{u=!0,f&&(f.checked=!0),delete c.jn_consent,J("jn_consent"),ka()},da("consent_ask",y.currentTarget);return}ka()}),p.querySelector('form[data-reg-form="join"]')?.addEventListener("submit",async y=>{if(y.preventDefault(),oe)return;c={},C="",h&&(h="",p.querySelector('[data-role="jn-form-notice"]')?.remove());const T=be.replace(/\D/g,"");if(T.length!==9)c.jn_code="请输入 9 位机构邀请码";else if(!Ie){const te=++F;ye=!0;try{const le=await a.resolveInviteCode(T);if(n||te!==F)return;ye=!1,le.valid&&le.organizationName?(Ie=le.organizationName,ta()):c.jn_code=le.message??"邀请码不正确或已失效，请向机构管理员确认。"}catch(le){if(n||te!==F)return;ye=!1,c.jn_code=le instanceof Error?le.message:"暂时无法核验邀请码，请稍后再试。"}}Q.trim()?oa(Q.trim())>_a&&(c.jn_name=`姓名不超过 ${_a} 个字`):c.jn_name="请输入姓名",oa(ke.trim())>Ya&&(c.jn_dept=`部门 / 职务不超过 ${Ya} 个字`);const z=at(N);z&&(c.jn_account=z),/^\d{6}$/.test(g.trim())||(c.jn_vcode="请输入 6 位验证码");const Z=yt(I);Z&&(c.jn_pwd=Z),u||(c.jn_consent="请阅读并同意隐私政策和使用条款");for(const te of["jn_code","jn_name","jn_dept","jn_account","jn_vcode","jn_pwd","jn_consent"])J(te);if(ne(),Object.keys(c).length>0){const te=Object.keys(c)[0];p.querySelector(`#au-${te}`)?.focus({preventScroll:!0});return}oe=!0,He("正在提交…","注册并申请加入");try{if(S=await a.registerAndJoin({inviteCode:T,displayName:Q.trim(),departmentTitle:ke.trim()||void 0,account:Ue(N),verificationCode:g.trim(),password:I,consentAcceptedAt:new Date().toISOString()}),n)return;oe=!1,U()}catch(te){if(n)return;oe=!1,C=te instanceof Error?te.message:"暂时无法提交申请，请稍后再试。",He("正在提交…","注册并申请加入"),ne()}})}function Pa(p){fe.bind(p),rs(p);const E=p.querySelector("#au-ap_org"),B=p.querySelector("#au-ap_prov"),V=p.querySelector("#au-ap_city"),ae=p.querySelector("#au-ap_name"),i=p.querySelector("#au-ap_dept"),r=p.querySelector("#au-ap_email"),f=p.querySelector("#au-ap_phone"),y=p.querySelector("#au-ap_sms"),T=p.querySelector("#au-ap_overview"),z=p.querySelector("#au-ap_overview-count"),Z=p.querySelector("#au-ap_consent");E?.addEventListener("input",()=>{Ne=E.value,(c.ap_org||C)&&(delete c.ap_org,C="",J("ap_org"),ne())}),B?.addEventListener("change",()=>{je=B.value,B.classList.toggle("is-placeholder",!je);const te=_t(je);X=te.length===1?te[0]:"",V&&(V.disabled=!je,V.innerHTML=`<option value="" ${X?"":"selected"}>城市</option>`+te.map(le=>`<option value="${s(le)}" ${X===le?"selected":""}>${s(le)}</option>`).join(""),V.classList.toggle("is-placeholder",!X)),je&&X&&c.ap_region&&(delete c.ap_region,J("ap_region"))}),V?.addEventListener("change",()=>{X=V.value,V.classList.toggle("is-placeholder",!X),je&&X&&c.ap_region&&(delete c.ap_region,J("ap_region"))}),ae?.addEventListener("input",()=>{_=ae.value,(c.ap_name||C)&&(delete c.ap_name,C="",J("ap_name"),ne())}),i?.addEventListener("input",()=>{L=i.value,c.ap_dept&&(delete c.ap_dept,J("ap_dept"))}),r?.addEventListener("input",()=>{ee=r.value,(c.ap_email||C)&&(delete c.ap_email,C="",J("ap_email"),ne())}),f?.addEventListener("input",()=>{if(ce=f.value,ze+=1,_e||Ae>0){_e="",Ee();const te=p.querySelector("#au-ap_phone-hint");te&&(te.textContent="");const le=p.querySelector('[data-role="ap-novcode-wrap"]');le&&(le.hidden=!0),fe.close(!1);const Le=p.querySelector('[data-act="ap-send-code"]');Le&&(Le.disabled=!1,Le.textContent="获取验证码")}(c.ap_phone||C)&&(delete c.ap_phone,C="",J("ap_phone"),ne())}),y?.addEventListener("input",()=>{ge=y.value.replace(/\D/g,"").slice(0,6),y.value=ge,(c.ap_sms||C)&&(delete c.ap_sms,C="",J("ap_sms"),ne())}),T?.addEventListener("input",()=>{Fe=T.value;const te=oa(Fe);z&&(te>=wa*.8?(z.textContent=`${te} / ${wa}`,z.hidden=!1):z.hidden=!0),c.ap_overview&&te<=wa&&(delete c.ap_overview,J("ap_overview"))}),Z?.addEventListener("change",()=>{Ye=Z.checked,Ye&&c.ap_consent&&(delete c.ap_consent,J("ap_consent"))}),p.querySelector('[data-act="ap-send-code"]')?.addEventListener("click",te=>{const le=ma(ce);if(le){c.ap_phone=le,J("ap_phone"),f?.focus({preventScroll:!0});return}if(!Ye){b=()=>{Ye=!0,Z&&(Z.checked=!0),delete c.ap_consent,J("ap_consent"),ha()},da("consent_ask",te.currentTarget);return}ha()}),p.querySelector('form[data-reg-form="apply"]')?.addEventListener("submit",async te=>{if(te.preventDefault(),oe)return;c={},C="",Ne.trim()?oa(Ne.trim())>Ht&&(c.ap_org=`机构名称不超过 ${Ht} 个字`):c.ap_org="请输入机构名称",(!je||!X)&&(c.ap_region="请选择所在地区"),_.trim()?oa(_.trim())>_a&&(c.ap_name=`姓名不超过 ${_a} 个字`):c.ap_name="请输入姓名",oa(L.trim())>Ya&&(c.ap_dept=`部门 / 职务不超过 ${Ya} 个字`),Va(ee)||(c.ap_email="请输入有效的电子邮箱");const le=ma(ce);le&&(c.ap_phone=le),/^\d{6}$/.test(ge.trim())||(c.ap_sms="请输入 6 位短信验证码"),oa(Fe)>wa&&(c.ap_overview=`项目概况不超过 ${wa} 个字`),Ye||(c.ap_consent="请阅读并同意隐私政策和使用条款");for(const Le of["ap_org","ap_region","ap_name","ap_dept","ap_email","ap_phone","ap_sms","ap_overview","ap_consent"])J(Le);if(ne(),Object.keys(c).length>0){const Le=Object.keys(c)[0],Te=Le==="ap_region"?je?"au-ap_city":"au-ap_prov":`au-${Le}`;p.querySelector(`#${Te}`)?.focus({preventScroll:!0});return}oe=!0,He("正在提交…","提交开通申请");try{if(w=await a.submitOrgApplication({organizationName:Ne.trim(),province:je,city:X,contactName:_.trim(),departmentTitle:L.trim()||void 0,email:Ue(ee),phone:Ue(ce),smsCode:ge.trim(),projectOverview:Fe.trim()||void 0,consentAcceptedAt:new Date().toISOString()}),n)return;oe=!1,U()}catch(Le){if(n)return;oe=!1,C=Le instanceof Error?Le.message:"暂时无法提交开通申请，请稍后再试。",He("正在提交…","提交开通申请"),ne()}})}function Na(){fe.close(!1);const p=e.querySelector('[data-role="reg-body-host"]');p&&(o==="join"?(p.innerHTML=Pe(),za(p)):(p.innerHTML=Ra(),Pa(p)))}function ya(p,E=!1){o===p||oe||(o=p,c={},C="",h="",e.querySelectorAll('[data-act="switch-reg-tab"]').forEach(B=>{const V=B.dataset.tab===p;B.setAttribute("aria-selected",String(V)),B.tabIndex=V?0:-1,V&&E&&B.focus({preventScroll:!0})}),Ce(!0),Na(),e.querySelector(".au-left")?.scrollTo({top:0}))}function ct(){if(w)return{title:"开通申请已提交 ｜ PACOM Station",bodyHtml:`
          <h1 class="au-h1">开通申请已提交</h1>
          <p class="au-lead">预计 1–2 个工作日完成审核，审核通过后将发送开通链接至你的邮箱。</p>
          <div class="au-summary-card">
            <div class="au-summary-row">
              <span class="au-summary-k">申请单号</span>
              <span class="au-summary-v au-summary-v-copy is-tabular">
                <span>${s(w.applicationId)}</span>
                <button type="button" class="au-summary-copy-btn" data-act="copy-receipt" data-copy-val="${s(w.applicationId)}" aria-label="复制申请单号" title="复制申请单号">${ut}</button>
              </span>
            </div>
            <div class="au-summary-row"><span class="au-summary-k">申请机构</span><span class="au-summary-v">${s(w.organizationName)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">通知邮箱</span><span class="au-summary-v is-tabular">${s(w.maskedEmail)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">当前状态</span><span class="au-status-pill au-status-pill--pending">待审核</span></div>
          </div>
          <button type="button" class="au-secondary" data-act="back-login"><span>返回登录</span></button>
        `};const p=S;return{title:"加入申请已提交 ｜ PACOM Station",bodyHtml:`
        <h1 class="au-h1">加入申请已提交</h1>
        <p class="au-lead">已提交至<b>${s(p.organizationName)}</b>，管理员批准后将发送登录通知。</p>
        <div class="au-summary-card">
          <div class="au-summary-row">
            <span class="au-summary-k">申请单号</span>
            <span class="au-summary-v au-summary-v-copy is-tabular">
              <span>${s(p.requestId)}</span>
              <button type="button" class="au-summary-copy-btn" data-act="copy-receipt" data-copy-val="${s(p.requestId)}" aria-label="复制申请单号" title="复制申请单号">${ut}</button>
            </span>
          </div>
          <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${s(p.organizationName)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">登录账户</span><span class="au-summary-v is-tabular">${s(p.maskedAccount)}</span></div>
          <div class="au-summary-row"><span class="au-summary-k">当前状态</span><span class="au-status-pill au-status-pill--pending">待管理员审批</span></div>
        </div>
        <div class="au-ferr" id="au-reg-ferr" role="alert" ${C?"":"hidden"}>
          ${va}
          <span data-role="ferr-text">${s(C)}</span>
        </div>
        <button type="button" class="au-secondary" data-act="back-login"><span>返回登录</span></button>
        ${a.withdrawJoinApplication?`
          <div class="au-quiet-action">
            <button type="button" class="au-quiet-btn" data-act="ask-withdraw" ${m?"disabled":""}>${m?"正在撤回…":"撤回申请"}</button>
          </div>`:""}
      `}}function dt(p){xe(),de=p,se=window.setInterval(()=>{de-=1,de<=0&&xe();const E=e.querySelector('[data-act="iv-send-sec"]');E&&(E.disabled=de>0,E.textContent=de>0?`${de} 秒后重发`:ie?"重新获取":"获取验证码")},1e3)}function Ia(p){return p.requiredSecondaryChannel!==void 0?p.requiredSecondaryChannel:Aa(p.kind,p.role,p.targetChannel)}function Ba(p){return Ue(p).toLowerCase().replace(/[\s\-()]/g,"")}function j(p,E){if(!p)return!1;const B=Ba(E.targetValue);if(!B)return!1;const V=E.targetChannel==="email"?p.email:p.phone;return!!V&&Ba(V)===B}async function Ua(p){const E=p==="phone"?ma(ve):Va(ve)?"":"请输入有效的电子邮箱";if(E){c.iv_sec=E,J("iv_sec"),e.querySelector("#au-iv_sec")?.focus({preventScroll:!0});return}delete c.iv_sec,J("iv_sec");const B=Ue(ve),V=++q,ae=e.querySelector('[data-act="iv-send-sec"]');ae&&(ae.disabled=!0,ae.textContent="发送中…");try{const i=await a.sendVerificationCode({target:B,purpose:"bind",consentAcceptedAt:new Date().toISOString()});if(n||V!==q||Ue(ve)!==B)return;ie=i.maskedTarget||ga(B);const r=e.querySelector("#au-iv_sec-hint");r&&(r.textContent=`验证码已发送至 ${ie}`);const f=e.querySelector('[data-role="iv-novcode-wrap"]');f&&(f.hidden=!1),dt(i.cooldownSeconds||60),ae&&(ae.disabled=!0,ae.textContent=`${de} 秒后重发`),e.querySelector("#au-iv_seccode")?.focus({preventScroll:!0})}catch(i){if(n||V!==q||Ue(ve)!==B)return;ae&&(ae.disabled=!1,ae.textContent=ie?"重新获取":"获取验证码"),C=i instanceof Error?i.message:"暂时无法发送验证码，请稍后再试。",ne()}}function pt(){if(W)return{title:"核验链接 ｜ PACOM Station",bodyHtml:`
          <div class="au-loading-state" role="status" aria-live="polite">
            <span class="au-spinner au-spinner--muted" aria-hidden="true"></span>
            <span>正在核验链接…</span>
          </div>
        `};if(P&&P.status==="accepted"){const z=P.kind==="owner",Z=z?"机构已完成开通":"邀请已被接受",te=x?`该${z?"开通":"邀请"}链接已完成激活，你可以直接进入工作区访问<b>${s(P.organizationName)}</b>。`:`该${z?"开通":"邀请"}链接已完成激活，你可以直接登录访问<b>${s(P.organizationName)}</b>。`;return{title:`${Z} ｜ PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${Z}</h1>
          <p class="au-lead">${te}</p>
          <button type="button" class="au-secondary" data-act="${x?"iv-back-ws":"back-login"}"><span>${x?"进入工作区":"前往登录"}</span></button>
        `}}if(me||!P||P.status!=="pending"){const z=P?.kind==="owner",Z=P?.organizationName?s(P.organizationName):"",te=P?.inviterName?s(P.inviterName):"机构管理员";let le="邀请链接已失效",Le="此链接无效或已过期，请联系邀请人或机构管理员重新发送。";return me?Le=s(me):P?.status==="expired"?(le=z?"开通链接已过期":"邀请链接已过期",Le=z?`开通${Z?`<b>${Z}</b>的`:""}链接已过期，请联系支持团队重新发送。`:`加入${Z?`<b>${Z}</b>的`:""}邀请链接已过期，请联系${te}重新发送。`):P?.status==="revoked"&&(le=z?"开通链接已撤销":"邀请已撤销",Le=z?`开通${Z?`<b>${Z}</b>的`:""}链接已被撤销，请联系支持团队重新发送。`:`加入${Z?`<b>${Z}</b>的`:""}邀请已被撤销，如需加入请联系${te}重新发送。`),{title:`${le} ｜ PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${le}</h1>
          <p class="au-lead">${Le}</p>
          <button type="button" class="au-secondary" data-act="${x?"iv-back-ws":"back-login"}"><span>${x?"返回工作区":"返回登录"}</span></button>
        `}}const p=P,E=p.kind==="owner",B=E?"开通机构":"加入机构",V=p.targetChannel==="phone"?"受邀手机号码":"受邀电子邮箱",ae=p.targetChannel==="phone"?kt(p.targetValue):p.targetValue;if(x){if(j(x,p)){const le=E?`<b>${s(p.organizationName)}</b>已审核通过，确认后即以机构管理员身份完成开通。<span class="au-lead-meta">有效期至 ${s(p.expiresAt)}</span>`:`${s(p.inviterName||"机构管理员")}邀请你以${s(p.roleLabel||"成员")}身份加入<b>${s(p.organizationName)}</b>。<span class="au-lead-meta">有效期至 ${s(p.expiresAt)}</span>`;return{title:`${B} ｜ PACOM Station`,bodyHtml:`
            <h1 class="au-h1">${B}</h1>
            <p class="au-lead">${le}</p>
            <div class="au-summary-card">
              <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${s(p.organizationName)}</span></div>
              <div class="au-summary-row"><span class="au-summary-k">授予角色</span><span class="au-summary-v">${s(p.roleLabel||(E?"机构管理员":"成员"))}</span></div>
              <div class="au-summary-row"><span class="au-summary-k">当前账户</span><span class="au-summary-v is-tabular">${s(x.displayName)} ｜ ${s(ae)}</span></div>
            </div>
            <div class="au-ferr" id="au-reg-ferr" role="alert" ${C?"":"hidden"}>
              ${va}
              <span data-role="ferr-text">${s(C)}</span>
            </div>
            <button type="button" class="au-primary" data-act="iv-confirm-join" ${oe?"disabled":""}>
              ${oe?'<span class="au-spinner" aria-hidden="true"></span><span>正在处理…</span>':`<span>${E?"确认开通":"确认加入"}</span>`}
            </button>
            <div class="au-quiet-action">
              <button type="button" class="au-quiet-btn" data-act="iv-back-ws">返回工作区</button>
            </div>
          `}}const z=ga(p.targetValue),Z=x.email||(x.phone?kt(x.phone):"");return{title:"请切换至受邀账户 ｜ PACOM Station",bodyHtml:`
          <h1 class="au-h1">请切换至受邀账户</h1>
          <p class="au-lead">${E?`该开通链接面向 <b>${s(z)}</b> 开通${s(p.organizationName)}，与当前登录账户不一致。`:`该邀请面向 <b>${s(z)}</b> 加入${s(p.organizationName)}，与当前登录账户不一致。`}</p>
          <div class="au-summary-card">
            <div class="au-summary-row"><span class="au-summary-k">当前账户</span><span class="au-summary-v is-tabular">${s(x.displayName)}${Z?` ｜ ${s(Z)}`:""}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">受邀账户</span><span class="au-summary-v is-tabular">${s(z)}</span></div>
          </div>
          <button type="button" class="au-primary" data-act="iv-switch-account"><span>切换账户登录</span></button>
          <div class="au-quiet-action">
            <button type="button" class="au-quiet-btn" data-act="iv-back-ws">返回工作区</button>
          </div>
        `}}if(p.accountExists){const z=E?`<b>${s(p.organizationName)}</b>已审核通过，请先登录已有账户完成开通。<span class="au-lead-meta">有效期至 ${s(p.expiresAt)}</span>`:`${s(p.inviterName||"机构管理员")}邀请你以${s(p.roleLabel||"成员")}身份加入<b>${s(p.organizationName)}</b>，请先登录已有账户完成确认。<span class="au-lead-meta">有效期至 ${s(p.expiresAt)}</span>`;return{title:`${B} ｜ PACOM Station`,bodyHtml:`
          <h1 class="au-h1">${B}</h1>
          <p class="au-lead">${z}</p>
          <div class="au-summary-card">
            <div class="au-summary-row"><span class="au-summary-k">目标机构</span><span class="au-summary-v">${s(p.organizationName)}</span></div>
            <div class="au-summary-row"><span class="au-summary-k">授予角色</span><span class="au-summary-v">${s(p.roleLabel||(E?"机构管理员":"成员"))}</span></div>
            <div class="au-summary-row">
              <span class="au-summary-k">受邀账户</span>
              <span class="au-summary-v au-summary-v-copy is-tabular">
                <span>${s(ae)}</span>
                <span class="au-status-pill au-status-pill--neutral">已注册</span>
              </span>
            </div>
          </div>
          <button type="button" class="au-primary" data-act="iv-go-login"><span>${E?"登录并开通":"登录并加入"}</span></button>
        `}}const i=E?`<b>${s(p.organizationName)}</b>已审核通过，设置密码后即以机构管理员身份开通。<span class="au-lead-meta">有效期至 ${s(p.expiresAt)}</span>`:`${s(p.inviterName||"机构管理员")}邀请你以${s(p.roleLabel||"成员")}身份加入<b>${s(p.organizationName)}</b>。<span class="au-lead-meta">有效期至 ${s(p.expiresAt)}</span>`,r=E?"完成开通":"注册并加入",f=Ia(p),y=E?`
        <div class="au-field">
          <div class="au-lab">
            <span class="au-lab-t">管理员账户</span>
            <span class="au-lab-status">${It}<span>已核验</span></span>
          </div>
          <div class="au-verified-card">
            <div class="au-verified-row">
              <span class="au-verified-k">${p.targetChannel==="phone"?"手机号码":"电子邮箱"}</span>
              <span class="au-verified-v">${s(ae)}</span>
            </div>
            ${p.verifiedSecondaryMasked?`
              <div class="au-verified-row">
                <span class="au-verified-k">${p.targetChannel==="phone"?"电子邮箱":"手机号码"}</span>
                <span class="au-verified-v">${s(p.verifiedSecondaryMasked)}</span>
              </div>`:""}
          </div>
        </div>`:`
        <div class="au-field">
          <div class="au-lab">
            <span class="au-lab-t">${V}</span>
            <span class="au-lab-status">${It}<span>已核验</span></span>
          </div>
          <div class="au-locked-card">
            <span class="au-locked-val">${s(ae)}</span>
          </div>
        </div>`,T=f?(()=>{const z=f==="phone",Z=z?"手机号码":"电子邮箱",te=z?"用于新设备登录、敏感操作与重置密码时的身份验证。":"机构管理员须绑定电子邮箱，用于接收订单、续费与安全通知。",le=z?"短信验证码":"邮件验证码",Le=z?"请确认手机号码无误并检查短信拦截记录；如仍未收到，可点击页脚「联系我们」获取协助。":"请确认电子邮箱无误并检查垃圾邮件箱；如仍未收到，可点击页脚「联系我们」获取协助。";return`
            <div class="au-field ${c.iv_sec?"bad":""}" data-f="iv_sec">
              <div class="au-lab">
                <span class="au-lab-group">
                  <label for="au-iv_sec">${Z}</label>
                  ${La("au-iv-sec-info",`${Z}说明`,[te])}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_sec" name="iv_sec" class="au-in has-code-btn" type="${z?"tel":"email"}" inputmode="${z?"tel":"email"}" autocomplete="${z?"tel":"email"}" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(ve)}" aria-invalid="${c.iv_sec?"true":"false"}" />
                <button type="button" class="au-suffix au-getcode" data-act="iv-send-sec" ${de>0?"disabled":""}>
                  ${de>0?`${de} 秒后重发`:ie?"重新获取":"获取验证码"}
                </button>
              </div>
              <p class="au-err" id="au-iv_sec-err" aria-live="polite">${s(c.iv_sec??"")}</p>
              <p class="au-hint" id="au-iv_sec-hint" role="status" aria-live="polite">${ie?`验证码已发送至 ${s(ie)}`:""}</p>
            </div>

            <div class="au-field ${c.iv_seccode?"bad":""}" data-f="iv_seccode">
              <div class="au-lab">
                <label for="au-iv_seccode">${le}</label>
                <span data-role="iv-novcode-wrap" ${ie?"":"hidden"}>
                  <button type="button" class="au-textbtn au-login-forgot" data-info-trigger="au-iv-novcode-pop" aria-expanded="false" aria-haspopup="dialog" aria-controls="au-iv-novcode-pop"><span>收不到验证码？</span></button>
                  <span id="au-iv-novcode-pop" class="ws-info-popover" role="dialog" aria-modal="false" tabindex="-1" aria-label="收不到验证码说明" hidden>
                    <span class="ws-info-text">${Le}</span>
                  </span>
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_seccode" name="iv_seccode" class="au-in" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(pe)}" aria-invalid="${c.iv_seccode?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_seccode-err" aria-live="polite">${s(c.iv_seccode??"")}</p>
            </div>
          `})():"";return{title:`${B} ｜ PACOM Station`,bodyHtml:`
        <h1 class="au-h1">${B}</h1>
        <p class="au-lead">${i}</p>
        <form class="au-reg-form" data-reg-form="invite" novalidate>
          <fieldset ${oe?"disabled":""}>
            ${y}

            <div class="au-field ${c.iv_name?"bad":""}" data-f="iv_name">
              <div class="au-lab"><label for="au-iv_name">姓名</label></div>
              <div class="au-ctl">
                <input id="au-iv_name" name="iv_name" class="au-in" type="text" autocomplete="name" value="${s(ue)}" aria-invalid="${c.iv_name?"true":"false"}" />
              </div>
              <p class="au-err" id="au-iv_name-err" aria-live="polite">${s(c.iv_name??"")}</p>
            </div>

            ${T}

            <div class="au-field ${c.iv_pwd?"bad":""}" data-f="iv_pwd">
              <div class="au-lab">
                <span class="au-lab-group">
                  <label for="au-iv_pwd">设置密码</label>
                  ${La("au-iv-pwd-info","设置密码说明",$t)}
                </span>
              </div>
              <div class="au-ctl">
                <input id="au-iv_pwd" name="iv_pwd" class="au-in has-suffix" type="${K?"text":"password"}" autocomplete="new-password" autocapitalize="none" autocorrect="off" spellcheck="false" value="${s(G)}" aria-invalid="${c.iv_pwd?"true":"false"}" />
                <button type="button" class="au-suffix au-eye" data-act="iv-toggle-eye" aria-controls="au-iv_pwd" aria-label="${K?"隐藏密码":"显示密码"}">
                  ${K?ba:fa}
                </button>
              </div>
              <p class="au-err" id="au-iv_pwd-err" aria-live="polite">${s(c.iv_pwd??"")}</p>
            </div>

            ${sa("au-iv_consent","iv_consent",qe,"iv_consent")}

            <div class="au-ferr" id="au-reg-ferr" role="alert" ${C?"":"hidden"}>
              ${va}
              <span data-role="ferr-text">${s(C)}</span>
            </div>

            <button type="submit" class="au-primary" ${oe?"disabled":""}>
              ${oe?`<span class="au-spinner" aria-hidden="true"></span><span>${E?"正在开通…":"正在提交…"}</span>`:`<span>${r}</span>`}
            </button>
          </fieldset>
        </form>
      `}}function O(){fe.bind(e),e.querySelector('[data-act="iv-back-ws"]')?.addEventListener("click",()=>{Je(),t.onBackToWorkspace?t.onBackToWorkspace():t.onBackToLogin()}),e.querySelector('[data-act="iv-go-login"]')?.addEventListener("click",()=>{if(!P)return;const T=`#invite?token=${encodeURIComponent(P.token)}`,z=P.kind==="owner"?`登录后即可开通${P.organizationName}`:`登录后即可加入${P.organizationName}`;Je(),t.onGoLoginForInvite?t.onGoLoginForInvite(P.targetValue,z,T):t.onBackToLogin()}),e.querySelector('[data-act="iv-switch-account"]')?.addEventListener("click",()=>{if(!P)return;const T=`#invite?token=${encodeURIComponent(P.token)}`,Z=`请使用 ${ga(P.targetValue)} 登录以${P.kind==="owner"?"开通机构":"接受邀请"}`;Je(),t.onSwitchAccountForInvite?t.onSwitchAccountForInvite(T,Z):t.onBackToLogin()}),e.querySelector('[data-act="iv-confirm-join"]')?.addEventListener("click",async()=>{if(!(oe||!P)){oe=!0,C="",U();try{const T=await a.acceptInvitation({token:P.token});if(n)return;Je(),t.onAuthenticated(T)}catch(T){if(n)return;oe=!1,C=T instanceof Error?T.message:"暂时无法确认加入，请稍后再试。",U()}}});const p=e.querySelector('form[data-reg-form="invite"]');if(!p||!P)return;const E=e.querySelector("#au-iv_name"),B=e.querySelector("#au-iv_sec"),V=e.querySelector("#au-iv_seccode"),ae=e.querySelector("#au-iv_pwd"),i=e.querySelector("#au-iv_consent"),r=P.kind==="owner",f=r?"完成开通":"注册并加入",y=Ia(P);E?.addEventListener("input",()=>{ue=E.value,(c.iv_name||C)&&(delete c.iv_name,C="",J("iv_name"),ne())}),B?.addEventListener("input",()=>{if(ve=B.value,q+=1,ie||de>0){ie="",xe();const T=e.querySelector("#au-iv_sec-hint");T&&(T.textContent="");const z=e.querySelector('[data-role="iv-novcode-wrap"]');z&&(z.hidden=!0),fe.close(!1);const Z=e.querySelector('[data-act="iv-send-sec"]');Z&&(Z.disabled=!1,Z.textContent="获取验证码")}(c.iv_sec||C)&&(delete c.iv_sec,C="",J("iv_sec"),ne())}),V?.addEventListener("input",()=>{pe=V.value.replace(/\D/g,"").slice(0,6),V.value=pe,(c.iv_seccode||C)&&(delete c.iv_seccode,C="",J("iv_seccode"),ne())}),ae?.addEventListener("input",()=>{G=ae.value,(c.iv_pwd||C)&&(delete c.iv_pwd,C="",J("iv_pwd"),ne())}),i?.addEventListener("change",()=>{qe=i.checked,qe&&c.iv_consent&&(delete c.iv_consent,J("iv_consent"))}),e.querySelector('[data-act="iv-send-sec"]')?.addEventListener("click",T=>{if(!y)return;const z=y==="phone"?ma(ve):Va(ve)?"":"请输入有效的电子邮箱";if(z){c.iv_sec=z,J("iv_sec"),B?.focus({preventScroll:!0});return}if(!qe){b=()=>{qe=!0,i&&(i.checked=!0),delete c.iv_consent,J("iv_consent"),Ua(y)},da("consent_ask",T.currentTarget);return}Ua(y)}),e.querySelector('[data-act="iv-toggle-eye"]')?.addEventListener("click",T=>{K=!K;const z=T.currentTarget;if(ae){const Z=ae.selectionStart,te=ae.selectionEnd;ae.type=K?"text":"password",ae.focus({preventScroll:!0}),Z!==null&&te!==null&&ae.setSelectionRange(Z,te)}z.setAttribute("aria-label",K?"隐藏密码":"显示密码"),z.innerHTML=K?ba:fa}),p.addEventListener("submit",async T=>{if(T.preventDefault(),oe||!P)return;if(c={},C="",ue.trim()?oa(ue.trim())>_a&&(c.iv_name=`姓名不超过 ${_a} 个字`):c.iv_name="请输入姓名",y){const te=y==="phone"?ma(ve):Va(ve)?"":"请输入有效的电子邮箱";te&&(c.iv_sec=te),/^\d{6}$/.test(pe.trim())||(c.iv_seccode=y==="phone"?"请输入 6 位短信验证码":"请输入 6 位邮件验证码")}const z=yt(G);z&&(c.iv_pwd=z),qe||(c.iv_consent="请阅读并同意隐私政策和使用条款");const Z=y?["iv_name","iv_sec","iv_seccode","iv_pwd","iv_consent"]:["iv_name","iv_pwd","iv_consent"];for(const te of Z)J(te);if(ne(),Object.keys(c).length>0){const te=Object.keys(c)[0];e.querySelector(`#au-${te}`)?.focus({preventScroll:!0});return}oe=!0,He(r?"正在开通…":"正在提交…",f);try{const te=await a.acceptInvitation({token:P.token,displayName:ue.trim(),password:G,consentAcceptedAt:new Date().toISOString(),...y?{secondaryContact:Ue(ve),secondaryVerificationCode:pe.trim()}:{}});if(n)return;Je(),t.onAuthenticated(te)}catch(te){if(n)return;oe=!1,C=te instanceof Error?te.message:"暂时无法完成激活，请稍后再试。",He(r?"正在开通…":"正在提交…",f),ne()}})}function U(){k?.(),k=null,fe.close(!1);let p="";if(S||w){const E=ct();document.title=E.title,p=E.bodyHtml}else if(H){const E=pt();document.title=E.title,p=E.bodyHtml}else document.title="注册 ｜ PACOM Station",p=`
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
              <div class="au-logo">${Zt}</div>
              ${p}
            </main>
          </div>
          ${Kt()}
        </section>
        <aside class="au-art" aria-hidden="true">
          <div class="au-art-frame">
            <img src="./media/auth-hero.jpg" alt="" />
          </div>
        </aside>
      </div>
      <div data-role="modal-host"></div>
    `,e.querySelectorAll('[data-act="back-login"]').forEach(E=>{E.addEventListener("click",()=>{Je(),t.onBackToLogin()})}),e.querySelectorAll('[data-act="open-contact"]').forEach(E=>{E.addEventListener("click",B=>{da("contact",B.currentTarget)})}),e.querySelector('[data-act="ask-withdraw"]')?.addEventListener("click",E=>{!S||!a.withdrawJoinApplication||m||da("withdraw_confirm",E.currentTarget)}),e.querySelectorAll('[data-act="copy-receipt"]').forEach(E=>{E.addEventListener("click",()=>{const B=E.dataset.copyVal??"";B&&(navigator.clipboard?.writeText&&navigator.clipboard.writeText(B).catch(()=>{}),E.classList.add("is-copied"),E.setAttribute("aria-label","已复制申请单号"),E.innerHTML=is,Qe!==null&&window.clearTimeout(Qe),Qe=window.setTimeout(()=>{Qe=null,E.classList.remove("is-copied"),E.setAttribute("aria-label","复制申请单号"),E.innerHTML=ut},1800))})}),!S&&!w&&!H?(e.querySelectorAll('[data-act="switch-reg-tab"]').forEach(E=>{E.addEventListener("click",()=>{const B=E.dataset.tab;B&&ya(B,!1)}),E.addEventListener("keydown",B=>{const V=la.indexOf(o);B.key==="ArrowRight"?(B.preventDefault(),ya(la[(V+1)%la.length],!0)):B.key==="ArrowLeft"?(B.preventDefault(),ya(la[(V-1+la.length)%la.length],!0)):B.key==="Home"?(B.preventDefault(),ya(la[0],!0)):B.key==="End"&&(B.preventDefault(),ya(la[la.length-1],!0))})}),Na(),Ce(!1),document.fonts?.ready.then(()=>{n||Ce(!1)})):H&&!W&&O(),k=Yt(e)}U(),H&&A&&!S&&!w?(async()=>{try{const p=await a.getInvitationPreview(A);if(n)return;if(P=p,ue=p.prefillName??"",W=!1,U(),!x&&p.status==="pending"&&!p.accountExists){const E=Ia(p),B=ue.trim()?E?"#au-iv_sec":"#au-iv_pwd":"#au-iv_name";e.querySelector(B)?.focus({preventScroll:!0})}}catch(p){if(n)return;W=!1,me=p instanceof Error?p.message:"暂时无法读取邀请信息，请稍后再试。",U()}})():!H&&!S&&!w&&be.replace(/\D/g,"").length===9&&(Me(be),e.querySelector("#au-jn_name")?.focus({preventScroll:!0}))}function Ja(e){const a=e.replace(/^#\/?/,"").split("?")[0]??"";return a==="login"||a==="register"||a==="join"||a==="apply"||a==="invite"}function Qa(e){const a=e.replace(/^#\/?/,""),[t="",n=""]=a.split("?"),o=new URLSearchParams(n);if(t==="invite")return{kind:"invite",inviteToken:(o.get("token")??"").trim()};if(t==="register"||t==="join"||t==="apply"){const l=o.get("tab");return{kind:"register",initialMode:t==="apply"||l==="apply"?"apply":"join",prefillCode:o.get("code")??void 0}}return{kind:"login"}}const Zs=["org_admin","project_admin","operator","space_user"],Xa=[{key:"login",label:"登录",group:"auth",hash:"#login",sessionRole:null},{key:"reg-join",label:"加入已有机构",group:"auth",hash:"#register",sessionRole:null},{key:"status-join",label:"加入申请已提交",group:"auth",hash:"#register",sessionRole:null,joinReceipt:{requestId:"JR-20261127-8421",organizationName:"广州国家实验室",maskedAccount:"138 •••• 8000",status:"pending_approval",submittedAt:"2026-11-27T09:30:00Z",withdrawToken:"demo-preset-wt-8421"}},{key:"reg-apply",label:"申请开通机构",group:"auth",hash:"#apply",sessionRole:null},{key:"status-apply",label:"开通申请已提交",group:"auth",hash:"#apply",sessionRole:null,applyReceipt:{applicationId:"APP-20261127-3902",organizationName:"广州天环智能科技有限公司",region:"广东省 广州市",maskedEmail:"c•••@company.com",status:"pending_review",submittedAt:"2026-11-27T09:35:00Z"}},{key:"inv-member",label:"成员邀请 ｜ 新账户",group:"invite",hash:"#invite?token=member-demo",sessionRole:null},{key:"inv-admin-email",label:"机构管理员邀请 ｜ 补绑手机",group:"invite",hash:"#invite?token=admin-email",sessionRole:null},{key:"inv-admin-phone",label:"机构管理员邀请 ｜ 补绑邮箱",group:"invite",hash:"#invite?token=admin-phone",sessionRole:null},{key:"inv-proj-email",label:"项目管理员邀请 ｜ 补绑手机",group:"invite",hash:"#invite?token=project-admin-email",sessionRole:null},{key:"inv-owner",label:"机构审核通过 ｜ 开通机构",group:"invite",hash:"#invite?token=owner-demo",sessionRole:null},{key:"inv-existing",label:"已有账户受邀 ｜ 引导登录",group:"invite",hash:"#invite?token=existing-demo",sessionRole:null},{key:"inv-signed-match",label:"已登录 ｜ 确认加入",group:"invite",hash:"#invite?token=existing-demo",sessionRole:"operator"},{key:"inv-signed-mismatch",label:"已登录 ｜ 切换受邀账户",group:"invite",hash:"#invite?token=member-demo",sessionRole:"org_admin"},{key:"inv-expired",label:"邀请链接已过期",group:"terminal",hash:"#invite?token=expired",sessionRole:null},{key:"inv-revoked",label:"邀请已撤销",group:"terminal",hash:"#invite?token=revoked",sessionRole:null},{key:"inv-accepted",label:"邀请已被接受",group:"terminal",hash:"#invite?token=accepted",sessionRole:null},{key:"inv-invalid",label:"邀请链接已失效",group:"terminal",hash:"#invite",sessionRole:null}];async function Ks(e){const a=new ds;let t=await a.getSession(),n="login",o="",l="",d="",b=!1;document.querySelector("[data-demo-fab-root]")?.remove();const v=document.createElement("div");v.className="pacom-demo-fab-wrap",v.dataset.demoFabRoot="1",document.body.appendChild(v);function $(m,k){const A=m.trim();if(A==="#login")return"login";if(A==="#apply"||A==="#register?tab=apply")return"reg-apply";if(A.startsWith("#register")||A.startsWith("#join"))return"reg-join";if(A.startsWith("#invite")){const x=Qa(A).inviteToken??"";return x?x==="expired"?"inv-expired":x==="revoked"?"inv-revoked":x==="accepted"?"inv-accepted":x.startsWith("owner")?"inv-owner":x==="admin-email"?"inv-admin-email":x==="admin-phone"?"inv-admin-phone":x==="project-admin-email"?"inv-proj-email":x==="existing-demo"?k?"inv-signed-match":"inv-existing":k?"inv-signed-mismatch":"inv-member":"inv-invalid"}return""}function S(){const m=Xa.filter(x=>x.group==="auth"),k=Xa.filter(x=>x.group==="invite"),A=Xa.filter(x=>x.group==="terminal"),H=x=>{const W=n!=="app"&&l===x.key;return`
        <button type="button" class="pacom-demo-role-btn" aria-pressed="${W}" data-demo-preset="${x.key}">
          <span>${x.label}</span>
          ${W?re("check",14):"<span>→</span>"}
        </button>`};v.innerHTML=`
      ${b?`
          <div class="pacom-demo-fab-panel" role="dialog" aria-label="演示视角切换">
            <div class="pacom-demo-fab-head">
              <span class="pacom-demo-fab-title">演示视角</span>
              <span class="pacom-badge pacom-badge--neutral">模拟数据</span>
            </div>
            <span class="pacom-demo-fab-sub">测试邀请码 482 916 305 ｜ 验证码任意 6 位数字</span>
            <div class="pacom-demo-fab-roles">
              <span class="pacom-demo-fab-sec-title">工作区角色</span>
              ${Zs.map(x=>`
                  <button type="button" class="pacom-demo-role-btn" aria-pressed="${n==="app"&&t?.role===x}" data-demo-pick="${x}">
                    <span>${Ke[x]}</span>
                    ${n==="app"&&t?.role===x?re("check",14):""}
                  </button>`).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">登录与注册</span>
              ${m.map(H).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">邀请与开通激活</span>
              ${k.map(H).join("")}
            </div>
            <div class="pacom-demo-fab-section">
              <span class="pacom-demo-fab-sec-title">链接异常与终态</span>
              ${A.map(H).join("")}
            </div>
            <div class="pacom-demo-fab-foot">
              <a class="pacom-demo-link" href="./index.html">
                <span>进入生产入口（index.html）</span>
                <span>→</span>
              </a>
            </div>
          </div>`:""}
      <button type="button" class="pacom-demo-fab-pill" aria-expanded="${b}" data-demo-fab-toggle="1" title="切换演示视角">
        <span class="pacom-demo-fab-dot" aria-hidden="true"></span>
        <span>演示</span>
      </button>
    `,v.querySelector("[data-demo-fab-toggle]")?.addEventListener("click",x=>{x.stopPropagation(),b=!b,S()}),v.querySelectorAll("[data-demo-pick]").forEach(x=>{x.addEventListener("click",async()=>{const W=x.dataset.demoPick;W&&(b=!1,t=await a.switchDemoRole(W),await h(t))})}),v.querySelectorAll("[data-demo-preset]").forEach(x=>{x.addEventListener("click",async()=>{const W=x.dataset.demoPreset,P=Xa.find(me=>me.key===W);P&&(b=!1,d="",P.sessionRole&&(t=await a.switchDemoRole(P.sessionRole)),await w(P.hash,P.sessionRole===null,{presetKey:P.key,initialJoinReceipt:P.joinReceipt??null,initialApplyReceipt:P.applyReceipt??null}))})})}document.addEventListener("click",m=>{b&&(m.target?.closest("[data-demo-fab-root]")||(b=!1,S()))}),document.addEventListener("keydown",m=>{m.key==="Escape"&&b&&(b=!1,S())});async function w(m,k,A){Vs(e),Vt(e),Gt(e),k&&t&&(await a.logout(),t=null);const H=Qa(m);if(n=H.kind,o=m,l=A?.presetKey??$(m,!!t),window.location.hash!==m&&(window.location.hash=m),S(),H.kind==="register"||H.kind==="invite"){Ws(e,a,{initialMode:H.initialMode,prefillCode:H.prefillCode,isInviteRoute:H.kind==="invite",inviteToken:H.inviteToken,currentSession:H.kind==="invite"?t:null,initialJoinReceipt:A?.initialJoinReceipt??null,initialApplyReceipt:A?.initialApplyReceipt??null,onBackToLogin:()=>{d="",w("#login",!1)},onGoLoginForInvite:(x,W,P)=>{d=P,w("#login",!1,{prefillAccount:x,notice:W})},onSwitchAccountForInvite:(x,W)=>{d=x,w("#login",!0,{notice:W})},onBackToWorkspace:()=>{t?h(t):w("#login",!1)},onAuthenticated:x=>{d="",h(x)}});return}Gs(e,a,x=>{if(t=x,d){const W=d;d="",w(W,!1);return}h(x)},{prefillAccount:A?.prefillAccount,notice:A?.notice,onOpenRegister:()=>{d="",w("#register",!1)}})}async function h(m){Vt(e),Gt(e),t=m,n="app",o="",l="",S(),(!window.location.hash||Ja(window.location.hash))&&(window.location.hash="#home"),await Hs(e,a,m,()=>{d="",w("#login",!0)})}if(window.addEventListener("hashchange",()=>{if(Ja(window.location.hash)){if(window.location.hash===o)return;const m=Qa(window.location.hash);(n!==m.kind||window.location.hash!==o)&&w(window.location.hash,n==="app"&&m.kind!=="invite")}}),!t||Ja(window.location.hash)){const m=Ja(window.location.hash)?window.location.hash:"#login",k=Qa(m);await w(m,!!(t&&k.kind!=="invite"));return}await h(t)}async function Ys(){const e=document.getElementById("app");if(e)try{await Ks(e)}catch(a){e.innerHTML=`<div class="pacom-shell"><div class="pacom-alert-banner">演示环境初始化失败：${String(a)}</div></div>`}}Ys();
