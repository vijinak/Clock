function getTime(){
    const time = new Date()
    // console.log(time);
    const hour = time.getHours()
    // console.log(hour);
    const min = time.getMinutes()
    // console.log(min);
    const sec = time.getSeconds()
    // console.log(sec);
    clock.innerHTML = `${hour} : ${min} : ${sec} ${hour>=12? 'PM' :'AM'}`
    setTimeout(() => {
        getTime()
    }, 1000);
}
getTime()