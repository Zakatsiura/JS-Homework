function clock() {
    const arrowH = document.querySelector('.hours');
    const arrowM = document.querySelector('.minutes');
    const arrowS = document.querySelector('.seconds');

    setInterval(() => {
        const day = new Date();

        const hours = day.getHours() * 30;
        const minutes = day.getMinutes() * 6;
        const seconds = day.getSeconds() * 6;

        arrowH.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`;
        arrowM.style.transform = `rotateZ(${minutes}deg)`;
        arrowS.style.transform = `rotateZ(${seconds}deg)`;

    })
}

clock()