function startTimer(minutes: number): string {
    let totalSeconds = minutes * 60;

    const formatTime = (seconds: number): string => {
        const mm = Math.floor(seconds / 60).toString().padStart(2, "0");
        const ss = (seconds % 60).toString().padStart(2, "0");
        return `${mm}:${ss}`;
    };

    console.log(formatTime(totalSeconds)); // İlk başlangıç zamanı
    let result: string = ""
    const timerInterval = setInterval(() => {
        totalSeconds--;

        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            console.log("Timer finished!");
        } else {
            console.log(formatTime(totalSeconds));
            result = formatTime(totalSeconds);
        }
    }, 1000);

    return result;
}

export default startTimer;
