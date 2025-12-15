import Timer from './modules/timer';

const timerOutput = document.querySelector('.timer');
const selectTimer = document.querySelector(".select-timer");
let timer = null;

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("btn-start-timer")) {
        if (!Number(selectTimer.value)) return;

        if (!timer) {
            timer = new Timer(selectTimer.value, timerOutput);
        }
        timer.start();
    };

    if(e.target.classList.contains("btn-stop")){
        if(!timer) return;
        timer.stop();
    }

    if(e.target.classList.contains("btn-pause")) {
        if(!timer) return;
        timer.pause();
    };

});

// Heard the change in Select Time to update timer.
document.addEventListener("change", () => {
    if(!timer) return;

    timer.stop();
    timer.updateTime(selectTimer.value);
})
