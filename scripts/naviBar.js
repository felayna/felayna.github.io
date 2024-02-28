// 在页面加载完成后执行
document.addEventListener("DOMContentLoaded", function() {
    // 获取模块容器
    const container = document.getElementById("naviBox");
    
    // 创建一个新的 <object> 元素来加载模块
    const objectElement = document.createElement("object");
    objectElement.type = "text/html";
    objectElement.data = "../html/naviBar.html"; // 加载模块文件
    objectElement.width = "100%"; // 设置宽度
    objectElement.height = "1000px"; // 设置高度
    objectElement.style.border = "none"; // 设置边框样式
    objectElement.style.overflow = "hidden"; // 设置溢出隐藏
    container.appendChild(objectElement); // 将模块插入容器中
});
