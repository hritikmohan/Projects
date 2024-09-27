setInterval(() => {
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    htime = htime.toString().padStart(2, '0');
    mtime = mtime.toString().padStart(2, '0');
    stime = stime.toString().padStart(2, '0');
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    // hour.style.transformOrigin = "bottom";
    // minute.style.transformOrigin = "bottom";
    // second.style.transformOrigin = "bottom";
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    const digitalClock = document.getElementById("digital-clock");
    digitalClock.innerText = `${htime}:${mtime}:${stime}`;
}, 1000)