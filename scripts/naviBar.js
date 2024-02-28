// // 在页面加载完成后执行
// document.addEventListener("DOMContentLoaded", function() {
//     // 获取模块容器
//     const container = document.getElementById("naviBox");
    
//     // 创建一个新的 <object> 元素来加载模块
//     const objectElement = document.createElement("object");
//     objectElement.type = "text/html";
//     objectElement.data = "../html/naviBar.html"; // 加载模块文件
//     container.appendChild(objectElement); // 将模块插入容器中
// });
document.addEventListener("DOMContentLoaded", function() {
    // 获取模块容器
    var container = document.getElementById("naviBox");
    
    // 使用 fetch 方法加载内容
    fetch("../html/naviBar.html")
        .then(response => response.text()) // 将响应转换为文本
        .then(html => {
            // 创建一个新的 div 元素
            var div = document.createElement("div");
            // 将加载的 HTML 内容赋值给 div 的 innerHTML 属性
            div.innerHTML = html;
            // 将 div 插入到容器中
            container.appendChild(div);
        })
        .catch(error => {
            console.error("Error fetching content:", error);
        });
});
