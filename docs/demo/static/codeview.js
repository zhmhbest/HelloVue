function addLinkStyle(href) {
    const link = document.createElement('link');
    link.rel = "stylesheet"
    link.href = href;
    document.body.appendChild(link);
}

function addStyle(css) {
    const style = document.createElement('style');
    style.innerHTML = css;
    document.body.appendChild(style);
}

function addScript(src) {
    const script = document.createElement('script');
    script.type = "text/javascript"
    script.src = src;
    document.body.appendChild(script);
}

/**
 * 收集Html并高亮显示
 */
function collectHtmlCode(eleCollector, eleView) {
    // <pre class="line-numbers"><code class="match-braces rainbow-braces language-html"></code></pre>
    const codeText = eleCollector.innerHTML;
    const pre = document.createElement('pre');
    pre.className = "line-numbers"
        const code = document.createElement('code');
        code.className = "match-braces rainbow-braces language-html"
        code.innerHTML = codeText.trim().replace(/</g, '&lt;').replace(/</g, '&gt;').replace(/ /g, '&nbsp;');
    pre.appendChild(code);
    eleView.appendChild(pre);
}

/**
 * 最后运行
 */
window.finalRunList = []
function finalRun(fn) {
    window.finalRunList.push(fn);
}

/**
 * 初始化资源
 */
if (null === window.onload) {
    window.onload = function() {
        const cdnPrismURL = "https://cdn.bootcdn.net/ajax/libs/prism/1.23.0";
        // Style
        addStyle(`
body{
    background-color: #333;
    color: #ddd;
    margin-left: 30px;
}
body>h1 {
    color: #3a8ee6;
}
div.demo {
    background-color: #222;
    border: solid 1px #444;
    padding: 5px;
    margin-bottom: 10px;
}
div.view {
    margin-bottom: 50px;
}
        `.trim());
        // Prism.js
        addLinkStyle(`${cdnPrismURL}/themes/prism-tomorrow.css`);
        addScript(`${cdnPrismURL}/prism.js`);

        // Prism.js Plugins
        addLinkStyle(`${cdnPrismURL}/plugins/line-numbers/prism-line-numbers.css`);
        addScript(`${cdnPrismURL}/plugins/line-numbers/prism-line-numbers.min.js`);
        addLinkStyle(`${cdnPrismURL}/plugins/match-braces/prism-match-braces.css`);
        addScript(`${cdnPrismURL}/plugins/match-braces/prism-match-braces.min.js`);

        // demo -> view
        const demoList = document.querySelectorAll('.demo');
        const viewList = document.querySelectorAll('.view');
        for(let i = 0; i < demoList.length; i++) {
            let demo = demoList[i];
            let view = viewList[i];
            collectHtmlCode(demo, view);
        }

        // finalRun
        for (let runner of window.finalRunList) {
            runner();
        }
    };
}
