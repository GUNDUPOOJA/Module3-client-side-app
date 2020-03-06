

function convert() {
    const mi = document.getElementById("milesLBL").value;
    const result = (mi * 1.609344) + " km"
    document.getElementById("kilometersLBL").innerHTML = result;
    
    //localstorage to store number of times the converter was used
    if (localStorage.counter) {
        localStorage.counter = Number(localStorage.counter) + 1;
    }
    else {
        localStorage.counter = 1;
    }
    document.getElementById("numOfConverts").innerHTML = localStorage.counter;
}