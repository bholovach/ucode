class Timer {
    i = 0;

    constructor(i, delay, count) {
        this.title = i;
        this.delay = delay;
        this.stopCount = count;
        this.start();
    }
    start() {
        console.log(`Timer ${this.title} started (delay=${this.delay}, stopCount=${this.stopCount})`);
        this.i = setInterval(() => this.tick(), this.delay);
        setTimeout(() => this.stop(), this.stopCount * this.delay);
    }
    tick() {
        this.stopCount--;
        console.log(`Timer ${this.title} Tick! | cycles left ${this.stopCount}`);
    }
    stop() {
        clearInterval(this.i);
        console.log(`Timer ${this.title} stopped`);
    }

}

function runTimer(i, delay, count) {
    new Timer(i, delay, count);
}



runTimer("Bleep", 1000, 5);
/*
Console output:
Timer Bleep started (delay=1000,  stopCount=5)
Timer Bleep Tick! | cycles left 4
Timer Bleep Tick! | cycles left 3
Timer Bleep Tick! | cycles left 2
Timer Bleep Tick! | cycles left 1
Timer Bleep Tick! | cycles left 0
Timer Bleep stopped
*/