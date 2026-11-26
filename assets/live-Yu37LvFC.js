import"./login-view-BdDG6c6Z.js";async function a(){const t=document.getElementById("app");if(t){document.title="PACOM Station",t.innerHTML=`
      <div class="pacom-shell" style="align-items:center; justify-content:center; padding:24px;">
        <div class="dep-empty-card" style="max-width:500px; width:100%; text-align:left; align-items:flex-start; gap:14px;">
          <span class="pacom-badge pacom-badge--accent">服务端连接配置</span>
          <strong style="font-size:18px; font-weight:500; color:var(--pacom-text-primary);">尚未配置后端服务地址</strong>
          <span class="pacom-row-sub" style="line-height:21px;">
            当前应用尚未绑定后端服务地址。请在构建或启动前配置以下环境变量后重新部署：
          </span>
          <pre style="margin:0; width:100%; padding:12px 14px; border-radius:10px; background:var(--pacom-surface-primary); border:var(--hw) solid var(--pacom-border-subtle); color:var(--pacom-text-primary); font-size:12px; line-height:1.6; overflow-x:auto; font-family:ui-monospace,SFMono-Regular,Menlo,monospace;">VITE_API_BASE_URL=https://api.your-domain.com
VITE_WS_BASE_URL=wss://api.your-domain.com</pre>
        </div>
      </div>
    `;return}}a();
