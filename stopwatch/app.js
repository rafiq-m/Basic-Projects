var min = document.getElementById('min')
var sec = document.getElementById('sec')
var msec = document.getElementById('msec')
var minnum = 0;
var secnum = 0
var msecnum = 0;

function start(){
    interval = setInterval(() =>{
        msecnum++;
        msec.innerHTML = msecnum;
        if(msecnum >= 100){
            secnum++
            sec.innerHTML = secnum;
            msecnum = 0
        }
        else if(secnum >= 60){       
            secnum = 0;
            minnum++
            min.innerHTML = minnum
        }
    },10)
    document.getElementById('start').disabled = true
    document.getElementById('stop').disabled = false
}


function stop(){
    clearInterval(interval)
    document.getElementById('stop').disabled = true   
    document.getElementById('start').disabled = false
}

function reset()
{
    msec.innerHTML = 0
    sec.innerHTML = 0;
    min.innerHTML = 0
    clearInterval(interval)    
    document.getElementById('stop').disabled = true   
    document.getElementById('start').disabled = false
}





