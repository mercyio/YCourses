myfile.runContents();


const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = []

function shouldContinue() {
    // check one: any pending setTimeout, setInterval, setImmediate?

    // check two: any pending OS task? (like server listening to port)

    // check 3 : any pending long running operations? (like fs module)

    return pendingTimers.length
    
}

// entire body executes in one tick
while (shouldContinue()) {
    //1)  node looks at pending timers and see if theres any functions that needs to be called. setTimeout, setIntervals

    //2) Node looks at pendingOSTask and pending OperationsTask and calls relevant callbacks

    //3) Pause execution, continue when...
    // a) a new pending task is done
    // b) a new pendingOperation is done
    // c) a new timer is about to complete

    // 4) look at pendingTImers. call any setImmediate

    // 5) handle any close event
    
}