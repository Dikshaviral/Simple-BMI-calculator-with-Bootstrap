var w = document.getElementById('weight');
var h = document.getElementById('height');
var r = document.getElementById('result');
var s = document.getElementById('sub');
s.addEventListener('click',calc);

function calc(e)
{
    e.preventDefault();
    var c = w.value/(h.value*h.value);
    var n = c.toPrecision(3);
    r.innerHTML = n;

}
