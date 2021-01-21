function compute() {
    principal = Number(document.getElementById("principal").value);
    rate = Number(document.getElementById("rate").value);
    years = document.getElementById("years").value;
    interest = (document.getElementById("principal").value)*years*rate*principal/100;
    
    year = Number(new Date().getFullYear().value);
    finalyear = year + years;

    document.getElementById("result").innerHTML = finalyear;
   
}

function rangeVal() {
    range = document.getElementById("rate").value;
    document.getElementById("rateSel").innerHTML = range;
}
        
