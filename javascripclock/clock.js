var isim = prompt("İsminizi Giriniz: ")

var myName = document.getElementById("myName")
myName.innerHTML = isim

function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Saat, dakika ve saniyeyi iki haneli yap
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = `${hours}:${minutes}:${seconds}`;
    document.getElementById("myClock").textContent = time;

    setTimeout(showTime, 1000);
}

showTime()


