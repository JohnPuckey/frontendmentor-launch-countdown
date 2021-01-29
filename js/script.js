// set 14 day countdown


// for demo purposes add 14 days onto current date
let countDownDate = new Date(Date.now() + 12096e5).getTime();

console.log(countDownDate);

let x = setInterval(() => {
    // get todays date and time
    let now = new Date().getTime();

    // find distance between now and countDownDate
    let distance = countDownDate - now;

    // calculate days, hours, minutes, seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));

    console.log(days + ":" + hours + ":" + minutes + ":" + seconds )

}, 1000);