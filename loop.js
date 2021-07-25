// node myFile.js
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// new timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shoudContinue() {
    // three checks to decide whether it should continue running our program
    // check one: any pending setTimeout, setInterval, setImmediate
    // check two: any pending os tasks like server listening to port
    // check three: any pending long running operations (like fs module)
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// entire body executes in one 'tick'
while (shoudContinue()) {
    // emulting this as an event loop
    // 1) node looks at pending timers and sees if any functions are ready to be called

    // 2) node looks pending OS tasks and pending operations and calls relevant callbacks

    // 3) pause execution. Continue when...
    // - a new pending OS task is done
    // - a new pending operation is done
    // - a timer is about to expire

    // 4) look at pending timers. Call any setImmediate

    // 5) Handle any 'close' events
}

// exit back to terminal
