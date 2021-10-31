const hrHand = document.querySelector("[data-hr]")
const minHand = document.querySelector("[data-min]")
const secHand = document.querySelector("[data-sec]")

setInterval(() => {
    const currDate = new Date();
    const secRatio = 6*currDate.getSeconds();
    const minRatio = 6*currDate.getMinutes();
    const hrRatio = 30*currDate.getHours();

    hrHand.style.transform = `translateX(-50%) rotate(${hrRatio}deg)`;
    minHand.style.transform = `translateX(-50%) rotate(${minRatio}deg)`;
    secHand.style.transform = `translateX(-50%) rotate(${secRatio}deg)`;
    
}, 1000);