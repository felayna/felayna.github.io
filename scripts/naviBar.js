// 在页面加载完成后执行
document.addEventListener("DOMContentLoaded", function() {
    // 获取模块容器
    const container = document.getElementById("naviBox");
    
    // 发起网络请求获取 HTML 内容
    fetch("../html/naviBar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(html => {
            // 将加载的 HTML 内容直接插入到容器中
            container.innerHTML = html;

            // 设置容器样式
            container.style.width = "100%";
            container.style.height = "2500px";
            container.style.border = "none";
            container.style.overflow = "hidden";
        })
        .catch(error => {
            console.error("Error fetching naviBar.html:", error);
        });
});

