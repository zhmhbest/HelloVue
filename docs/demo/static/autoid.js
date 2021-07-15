/**
 * 立即运行
 */
// h1 id
for (let item of document.querySelectorAll('body>h1')) {
    let title = item.innerText;
    item.id = title;
}