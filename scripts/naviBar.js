// 在页面加载完成后执行
document.addEventListener("DOMContentLoaded", function() {
    // 获取模块容器
    const container = document.getElementById("naviBox");
    
    // 创建一个新的 <object> 元素来加载模块
    const objectElement = document.createElement("object");
    objectElement.type = "text/html";
    objectElement.data = "../html/naviBar.html"; // 加载模块文件
    container.appendChild(objectElement); // 将模块插入容器中
});
