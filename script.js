// ========== 1. 自动生成飘落花瓣 ==========
const flowerBox = document.getElementById("flowerBox");
const flowerList = ["❀", "✿", "🌸", "🌹", "💮"];

function createFlower() {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.innerText = flowerList[Math.floor(Math.random() * flowerList.length)];
    // 随机横向位置、大小、下落时长
    const left = Math.random() * 100;
    const size = Math.random() * 18 + 12;
    const time = Math.random() * 8 + 6;
    flower.style.left = left + "%";
    flower.style.fontSize = size + "px";
    flower.style.animationDuration = time + "s";
    flowerBox.appendChild(flower);
    // 花瓣落地后删除
    setTimeout(() => flower.remove(), time * 1000);
}
// 每300ms生成一朵花瓣
setInterval(createFlower, 300);

// ========== 2. 恋爱时长倒计时（修改这里的起始日期） ==========
// 【重要】改成你们在一起的第一天！格式：年,月-1,日
const startDate = new Date(2025, 6, 14);

function updateTime() {
    const now = new Date();
    const diff = now - startDate;
    // 换算天、时、分、秒
    const day = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((diff % (1000 * 60)) / 1000);

    const timeDom = document.getElementById("timeCount");
    timeDom.innerText = `${day}天 ${hour}时 ${minute}分 ${second}秒`;
}
updateTime();
setInterval(updateTime, 1000);