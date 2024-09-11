// Predict Avarage Waiting Time

function waitingTime(waitingTimes, serialNumber) {
    if (
        !Array.isArray(waitingTimes) ||
        typeof serialNumber !== "number" ||
        serialNumber < waitingTimes.length
    ) {
        return "Invalid Input";
    } else {
        let TimeOfWaiting = 0;
        let serialsDone = waitingTimes.length;
        let personLeft = serialNumber - 1 - serialsDone;

        for (let i = 0; i < serialsDone; i++) {
            TimeOfWaiting += waitingTimes[i];
        }

        let avgTimeOfWaiting = Math.round(TimeOfWaiting / serialsDone);
        let stillNeedToWait = avgTimeOfWaiting * personLeft;

        return stillNeedToWait;
    }
}

// ================
// ** Test Cases **
// ================
const times = [13, 2, 6, 7, 10];

console.log(waitingTime(times, 6));
