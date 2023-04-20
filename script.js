let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    let p = Number(document.getElementById("Principal").value);
    let r = Number(document.getElementById("Rate").value);
    let t = Number(document.getElementById("Time").value);
    let simple = document.getElementById('simple');
    let si = (p*r*t)/100;
    simple.innerHTML = " ₹ " + si.toFixed(2) ;
});

let reset = document.getElementById('reset');
reset.addEventListener('click',function(){
    let pi = document.getElementById('Principal');
    pi.value = Number(0);
    let ra = document.getElementById('Rate');
    ra.value = Number(0);
    let ti = document.getElementById('Time');
    ti.value = Number(0);
    let simple = document.getElementById('simple');
    simple.innerHTML = " ";
});