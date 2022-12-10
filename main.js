/////////////////////////variables//////////////////////////////////////
let timer = document.querySelector('.timer');
let timerCounter = document.querySelector('#timer-counter')
let stopwatch = document.querySelector('.stopwatch');
let stopCounter = document.querySelector('.stop-watch-counter');
let startBtn =document.querySelector('#start');
let resetBtn = document.querySelector('#reset');
let timeline = document.querySelector('.timeline');
let timerPart = document.querySelector('.timer-counter-displsy');
const timerInput = document.querySelector('.timeInput');
const timerInputHidden = document.querySelector('#timerInputHidden');
const hoursInput = document.querySelector('.hours');
const minutesInput = document.querySelector('.minutes');
const secondsInput = document.querySelector('.seconds');
let sec = document.querySelector('.second');
let m_sec=document.querySelector('.m-second');
let min=document.querySelector('.minute');
let hr=document.querySelector('.hour');





/////////////////////////////// timer and stopwatch //////////////////////////////
//displays stopwatch and timer
stopwatch.addEventListener('click',()=>{
    stopwatch.classList.add('active');
    timer.classList.remove('active');
    stopCounter.style.display='block';
    timerCounter.style.display='none';
});
timer.addEventListener('click',()=>{
    stopwatch.classList.remove('active');
    timer.classList.add('active');
    stopCounter.style.display='none';
    timerCounter.style.display='block';
});

//stop watch function
let m_second=0;
let second=0;
let minute = 0;
let hours = 0;
let interval;
let timeOf;
function startTimer(){
    m_second++;
    if(m_second<=9){
        m_sec.innerHTML ="0"+m_second;
    }
    if(m_second>9)
        m_sec.innerHTML = m_second;
    if(m_second>99){
        console.log('second');
        second++;
        sec.innerHTML=second;
        m_second=0;
        m_sec.innerHTML="0"+0;
    }
    if(second>=59){
        console.log('minute');
        minute++;
        document.querySelector('.min').style.display='inline-block';
        min.innerHTML=minute;
        m_second=0;
        m_sec.innerHTML="0"+0;
        second=0;
        sec.innerHTML=0;
    }
    if(minute>60){
        console.log('hour');
        hours++;
        document.querySelector('.hr').style.display='inline-block';
        hr.innerHTML=hours;
        m_second=0;
        m_sec.innerHTML="0"+0;
        second=0;
        sec.innerHTML=0;
        minute=0;
        min.innerHTML=0;
    }
}

//counterDown function 
const startMin = 5;
let time = startMin *60;
let secnd;
const timeMin = document.querySelector('.time_minutes');
const timeSec = document.querySelector('.time_sec');
function updateCountdown(){
    const minutes = Math.floor(time/60);
    secnd =time% 60;
    secnd= secnd<10?'0'+secnd:secnd;
    timeMin.innerHTML = minutes;
    timeSec.innerHTML = secnd;
    time--;
    let timeLineWidth = timeline.offsetWidth;
    timeLineWidth = timeLineWidth+2.03;
    timeline.style.width = `${timeLineWidth}px`;
}









////////////////////////timer input action ////////////////////////////////
//when click on timer counter display timer
timerCounter.addEventListener('click',()=>{
        timerInput.style.display='block';
        timerPart.style.display='none';
        timerInputHidden.style.display='block';
})
//when focus on input change color of label "timer input hidden"
timerInput.addEventListener('click', (e) => {
    timerInputHidden.focus();
})
timerInputHidden.addEventListener('focus', ()=>{
    timerInput.classList.add('active')
    timerInput.querySelectorAll('.unit').forEach(span => {
        span.classList.add('pure')
    })
})
// allow user to inter time 
timerInputHidden.addEventListener('keyup', (e)=>{
        handelTime(e.target.value);
})
//change value of input number based on user input
timerInputHidden.addEventListener('change', (e)=>{
    handelTime(e.target.value)
})
let hrs, minu, seco;
const secInputArrElem = secondsInput.querySelector('.num');
const minInputArrElem = minutesInput.querySelector('.num');
const horsInputArrElem = hoursInput.querySelector('.num');
function handelTime (timeStr) {
    {
        let time = [];
        if(timeStr.length % 2 != 0){
            time.push(`0${timeStr[0]}`);
        for(let i =1; i < timeStr.length; i+=2){
                time.push(`${timeStr[i]}${timeStr[i+1]}`)
        }
        }
        else {
            for(let i =0; i < timeStr.length; i+=2){
                    time.push(`${timeStr[i]}${timeStr[i+1]}`)
            }
        }
        console.log(time);
        if(time.length === 3)
        {
            hrs = time[0].length === 2 ? time[0] : `0${time[0]}`;
            minu = time[1].length === 2 ? time[1] : `0${time[1]}`;
            seco = time[2].length === 2 ? time[2] : `0${time[2]}`;
        }
        else if(time.length === 2) {
            hrs = undefined;
            minu = time[0].length === 2 ? time[0] : `0${time[0]}`;
            seco = time[1].length === 2 ? time[1] : `0${time[1]}`;
        }
        else if (time.length === 1){
            hrs = undefined;
            minu = undefined;
            seco = time[0].length === 2 ? time[0] : `0${time[0]}`;
        }
        else{
            hrs = undefined;
            minu = undefined;
            seco = undefined;
        }
        hrs ? hoursInput.classList.remove('pure') : hoursInput.classList.add('pure')
        minu ? minutesInput.classList.remove('pure') : minutesInput.classList.add('pure')
        seco ? secondsInput.classList.remove('pure') : secondsInput.classList.add('pure')
    
        if(seco)
            secInputArrElem.textContent = seco;
    
        if(minu)
            minInputArrElem.textContent = minu;
    
        if(hrs)
            horsInputArrElem.textContent = hrs;
        }}



////////////////////////timer input action countdown////////////////////////////////












/////////////////////////// start button and stop ////////////////////////////////////////////////
startBtn.addEventListener('click',()=>{
    if(startBtn.textContent === 'start'){
        //stopwatch work
        if(stopCounter.style.display == 'block' ){
            clearInterval(interval);
            interval = setInterval(startTimer, 10);
        }else{
            clearInterval(timeOf);
            timeOf = setInterval(updateCountdown,1000);
        }
            startBtn.textContent='stop';
    }else{
        clearInterval(interval);
        clearInterval(timeOf);
        startBtn.textContent='start';
    }

});




////////////////////////////////////// reset button //////////////////////////////////////
resetBtn.addEventListener('click',()=>{

    //stopwatch counter reset
        clearInterval(interval);
        m_second=0;
        second=0;
        minute=00;
        hours =00;
        m_sec.innerHTML=`0 ${m_second}`;
        sec.innerHTML=second;
        min.innerHTML=minute;
        hr.innerHTML=hours;
        document.querySelector('.hr').style.display='none';
        document.querySelector('.min').style.display='none';

    //timeline reset
    timeline.style.width = 0;

    // timer counter reset
    clearInterval(timeOf);
        // startMin=5;
        // secnd=0;
        timeMin.innerHTML = startMin;
        timeSec.innerHTML = second;


    //input timer reset
    hrs=0;
    minu=0;
    seco=0;
    secInputArrElem.textContent = `0${seco}`;
    minInputArrElem.textContent = `0${minu}`;
    horsInputArrElem.textContent = `0${hrs}`;
});











////////////////////////expand window//////////////////////////////////
    let expand = document.querySelector('.fa-expand');
    expand.addEventListener('click',()=>{
        document.querySelector('main').classList.toggle('expand');
    });

