export default class Timer {
    constructor(timeInMin, elementOutput) {
        this.timeInMin = timeInMin * 60;
        this.timeInScreen = timeInMin * 60;
        this.elementOutput = elementOutput;

        this.isRunning = false;
        this.timeOut = null;
    }

    start() {
        if (this.isRunning) return;

        this.isRunning = true;
        this.timer();
    };

    pause() {
        if(this.isRunning){
            this.isRunning = false;
            clearTimeout(this.timeOut);
        } else {
            this.isRunning = true;
            this.timer();
        }

        
    };

    stop() {
        this.pause();
        this.timeInScreen = this.timeInMin;
        this.render();
    };

    timer() {
        if (!this.isRunning) return;

        this.render();

        if (this.timeInScreen <= 0) {
            this.isRunning = false;
            this.timeInScreen = this.timeInMin;
            return;
        }
        this.timeInScreen--;
        this.timeOut = setTimeout(() => this.timer(), 1000);
    };

    render() {
        this.elementOutput.innerText = this.formatTime(this.timeInScreen);
    };

    formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;

        return `${String(min).padStart('2', 0)} : ${String(sec).padStart('2', 0)}`;
    };

    updateTime(minutes){
        this.timeInMin = minutes * 60;
        this.timeInScreen = this.timeInMin;
        this.render();
    }

};
