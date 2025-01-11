const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let x = 0, y = 0, z = 0;



function addtime (a, b, c){
    c++;
    if(c === 99){
        c = 0;
        if(b ===59){
        b = 0;
        a++;
        }
        else{
            b++
        }
    }
    let [mn,ss,ms] = formattime(a,b,c);
    timer.innerHTML = mn + ":" + ss + ":" + ms
    console.log([a,b,c])
    return [a,b,c];
}

start.addEventListener("click", ()=>{
    timeinterval = setInterval(() =>{[x,y,z] = addtime(x,y,z)} , 10);}
)
stop.addEventListener("click", ()=>{
    clearInterval(timeinterval)
})
reset.addEventListener("click",()=>{
    timer.innerHTML = "00:00:00";
    [x, y, z] = [0, 0, 0]
})

function formattime(e,r,t){
    e = e < 10 ? "0" + e : e ;
    r = r < 10 ? "0" + r : r ;
    t = t < 10 ? "0" + t : t ;
    return [e,r,t];
}