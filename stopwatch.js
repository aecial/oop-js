function Stopwatch() {
    let duration = 0;
    let startTime;
    let endTime;
    let state = 'stopped';
    this.stop = function () {
        if (state !== 'stopped') {
            state = 'stopped';
            console.log("Timer Stopped");
            endTime = new Date();
            const time = ((endTime.getTime() - startTime.getTime()) / 1000);
            duration += time;
        } else {
            throw new Error("Timer is Stopped");
        }
    };
    this.start = function () {
        if (state !== 'started') {
            state = 'started';
            console.log("Timer Started");
            startTime = new Date();
        } else {
            throw new Error("Timer is Started");
        }
    };
    this.reset = function () {
        duration = 0;
    };
    Object.defineProperty(this, 'duration' {
        get: function() {
            return duration;
        }
    })
}