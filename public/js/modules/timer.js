export default class Timer {
    constructor(timeInSec, elementOutput) {
        this.timeInSec = timeInSec * 60;
        this.elementOutput = elementOutput;
    }

    start(){
        this.timer();
    }

    timer() {
            this.elementOutput.innerText = this.formatTime(this.timeInSec);
            this.timeInSec--;

            if(this.timeInSec > 0){
                setTimeout(() => this.timer(this.timeInSec), 1000);
            }
    };

    formatTime(seconds){
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;

        return `${String(min).padStart('2', 0)} : ${String(sec).padStart('2', 0)}`;
    }

}
