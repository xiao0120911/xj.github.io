document.addEventListener("DOMContentLoaded", function() {
    // 1. 动态更改名字
    let name = prompt("Please enter your name:", "zhangsan");
    if (name) {
        document.getElementById("welcome-message").textContent = "Welcome, " + name;
    }

    // 2. 图片轮换功能
    const images = ["images/images1.jpg", "images/images2.jpg"];
    let currentIndex = 0;
    const slider = document.getElementById("slider");

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        slider.src = images[currentIndex];
    }

    // 每隔3秒切换图片
    setInterval(changeImage, 3000);
});
