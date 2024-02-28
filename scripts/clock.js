function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
  
    // 获取时、分、秒
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    // 获取年、月、日
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
  
    // 更新时钟显示
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    // 更新日期显示
    dateElement.textContent = `${year}-${month}-${day}`;
}

// 每秒更新一次时间
setInterval(updateTime, 1000);
  
// 页面加载时先执行一次更新，避免加载后的延迟
updateTime();
  