setInterval(() => {
    let hours = document.getElementById("hours");
    let min = document.getElementById("min");
    let seconds = document.getElementById("second");
    let apm = document.getElementById("ampm");
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');
    let hr_dots = document.querySelector(".hr_dot");
    let min_dots = document.querySelector(".min_dot");
    let sec_dots = document.querySelector(".sec_dot");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "PM" : "AM";


    if (h > 12) {
        h = h - 12;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = (h > 1) ?
        h + "<br/><span>Hours</span>"
        : h + "<br/><span>Hour</span>";


    min.innerHTML = m > 1 ?
        m + "<br/><span>Minutes</span>"
        : m + "<br/><span>Minute</span>";

    seconds.innerHTML = s > 1 ?
        s + "<br/><span>Seconds</span>"
        : s + "<br/><span>Second</span>";

    apm.innerHTML = am;

    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    hr_dots.style.transform = `rotate(${h * 30}deg)`;
    min_dots.style.transform = `rotate(${m * 6}deg)`;
    sec_dots.style.transform = `rotate(${s * 6}deg)`;
}, 1000);
