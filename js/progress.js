const progress = () => {
    const progressText = document.querySelector('.course__progress-label .course__number')
    const progress = document.querySelector('.course__progress-element progress')
    let value = 0;
    let valueProgress = 0;
    let interval

    const GetRandom = (min, max) => {
        let randomValue = 0
        while (randomValue < min) {
            randomValue = Math.random() * max
        }
        randomValue = Math.floor(randomValue);
        randomValue = (randomValue - randomValue % 1000) + 1000 //Кратно тыще, не пятерка же + антинуль
        return randomValue
    }

    const GoProgressGo = () => {

        valueProgress += 1000;
        progress.value = valueProgress;
        progressText.textContent = valueProgress;
        if (valueProgress >= value) clearInterval(interval);

    }

    value = GetRandom(350000, 600000);
    //progressText.textContent = value;

    progress.value = 0;

    console.log(value);

    GoProgressGo();
    interval = setInterval(GoProgressGo, 0.005)
}

progress()




// document.addEventListener('scroll', (event) => {
//     console.log('event')
// })
