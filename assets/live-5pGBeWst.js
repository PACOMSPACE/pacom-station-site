import"./login-view-DkyDXfRr.js";import"./contracts-BgYMWe4E.js";async function e(){const t=document.getElementById("app");if(t){document.title="PACOM Station · 真实联调入口",t.innerHTML=`
      <div class="pacom-shell" style="align-items:center; justify-content:center; padding:24px;">
        <div class="dep-empty-card" style="max-width:520px; width:100%; text-align:left; align-items:flex-start;">
          <span class="pacom-badge pacom-badge--accent">真实前后端联调入口</span>
          <strong style="font-size:18px; font-weight:500; color:var(--pacom-text-primary);">尚未配置后端服务地址</strong>
          <span class="pacom-row-sub" style="line-height:21px;">
            本页面（<code>index.html</code>）为纯净真实页面，已与演示环境彻底分离，绝不会静默回退到本地模拟数据。请在构建或启动前配置以下环境变量以接入真实后端：
          </span>
          <pre class="pacom-code" style="width:100%;">VITE_API_BASE_URL=https://api.your-domain.com
VITE_WS_BASE_URL=wss://api.your-domain.com</pre>
          <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:4px;">
            <a class="pacom-btn pacom-btn--primary" href="./demo.html" style="text-decoration:none;">前往独立演示环境（demo.html）→</a>
          </div>
        </div>
      </div>
    `;return}}e();
//# sourceMappingURL=live-5pGBeWst.js.map
