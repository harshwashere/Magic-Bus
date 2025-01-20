let hr = 0;
let min = 0;
let sec = 0;
let mili = 0;
let isStart = false;

function start() {
    isStart = true;
    stopwatch();
}

function stop() {
    isStart = false;
}

function reset() {
    hr = 0;
    min = 0;
    sec = 0;
    mili = 0;
    isStart = false;
    updateUI();
}

function stopwatch() {
    if (isStart === true) {
        if (mili == 100) {
            sec += 1;
            mili = 0;
        }

        if (sec == 60) {
            min += 1;
            sec = 0;
        }

        if (min == 60) {
            hr += 1;
            min = 0;
        }

        mili += 1;

        updateUI();

        setTimeout(stopwatch, 10);
    }
}

function updateUI() {
    let getmili = mili;
    let getsec = sec;
    let getmin = min;
    let gethr = hr;

    if (mili < 10) {
        getmili = "0" + mili;
    }
    if (sec < 10) {
        getsec = "0" + sec;
    }
    if (min < 10) {
        getmin = "0" + min;
    }
    if (hr < 10) {
        gethr = "0" + hr;
    }

    document.getElementById("mili").innerText = getmili;
    document.getElementById("sec").innerText = getsec;
    document.getElementById("min").innerText = getmin;
    document.getElementById("hr").innerText = gethr;
}
