const conUs = document.getElementById("conUs");
const resLink = document.getElementById("resouseLink");

conUs.addEventListener("click", function(event) {
    event.preventDefault();

    alert("有任何建议或意见，请发送邮件至felaynastewart@126.com");
})
resLink.addEventListener("click", function(event) {
    event.preventDefault();

    alert("目前已有的资源：501动画合集，502动画，光辉魔女动画，506小说（部分）\n链接：https://pan.baidu.com/s/18aC-wR1bwK8BQlSzCpJI9Q?pwd=rjz0 提取码：rjz0");
})