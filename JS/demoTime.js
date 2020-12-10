 var min=0;
 var sec=0;

     var min=prompt("Ban nhap phut di: ");
     min=parseInt(min);
     if(isNaN(min) || min<0)
         min=0;

function countdownTimer() {
    var min_txt = min >= 10 ? min : "0" + min;
    var sec_txt = sec >= 10 ? sec : "0" + sec;

    //INPUT VAO VITRI span  min
    var nm = document.getElementById("min");
    nm.innerText=min_txt;
    //In giay vao vi tri span sec
    var ss=document.getElementById("sec");
    ss.innerText=sec_txt;
    //dem thoi gian
    sec--;
    if(sec<0){
        sec=59;
        min--;
    }
    if(min<0){
        clearInterval(timer);
    }
}

var timer= setInterval(countdownTimer,100);

