
// // for demo purposes add 14 days onto current date
const deadline = new Date(Date.now() + 12096e5);

let previous = '1';


console.log(deadline)

// initialize DOM elements

const els = {
    s: initElements('s'),
    m: initElements('m'),
    h: initElements('h'),
    d: initElements('d')
}

function initElements(type) {
    const els = [{}];
    if (!['s', 'm', 'h', 'd'].includes(type)) return els;

    const target = document.getElementById(`flip-clock-${type}`);

    if (!target) return els;

    let el;

    el = els;
    el.digit = target.querySelector('.digits');
    el.card = el.digit.querySelector('.card');
    el.cardFaces = el.card.querySelectorAll('.card-face')
    el.cardFaceA = el.cardFaces[0];
    el.cardFaceB = el.cardFaces[1];

    return els;
}


// calculate time remaining

function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date())
    const s = Math.floor( (total / 1000) % 60);
    const m = Math.floor( (total/1000/60) % 60);
    const h = Math.floor((total/(1000*60*60)) % 24);
    const d = Math.floor( total/(1000*60*60*24) );

    return {
        total,
        d,
        h,
        m,
        s
    };
}

function initilizeClock(endtime) {
    function updateClock(){
        const time = getTimeRemaining(endtime);
            // console.log(time.d + ':' + time.h + ':' + time.m + ':' + time.s)

        // output results to page
        showTime(els.s, time.s)
        // showTime(els.m, time.m)
        // showTime(els.h, time.h)
        // showTime(els.d, time.d)
 
        if (time.total <= 0) {
          clearInterval(timeinterval);
        }
      }
      
      updateClock(); // run function once at first to avoid delay
      var timeinterval = setInterval(updateClock,500);
}

initilizeClock(deadline);

function showTime(el, time) {

    let curr = time

    if (curr !== previous) {

        updateSideB(el, curr)
        animateFlip(el);
        previous = curr;

        console.log('different')
    } else if (curr === previous) {
        updateSideA(el, previous)
        el.card.classList.remove('flipped')
        console.log('same')
    }
    
}

function updateSideA(el, previous) {
    el.digit.dataset.digitBefore = previous;
    el.cardFaceA.textContent = el.digit.dataset.digitBefore;
}


function updateSideB(el, curr) {
    el.digit.dataset.digitAfter = curr;
    el.cardFaceB.textContent = el.digit.dataset.digitAfter;
}

function animateFlip(el) {
    el.card.classList.add('flipped')
}
