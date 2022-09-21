let btnQuote = document.getElementByIde("btnQuote")

btnQuote.addEventListener("click", function (e){
    e.preventDefault();
    let hours = parseInt(document.getElementById ("inputHours").value);
    let rate = parseFloat (document.getElementById ("inputRate").value);
    let iva = document.getElementById("checkIVA").checked;
    let extras = document.getElementById("inputExtras");
    let changes = parseInt(document.getElementById("inputChanges").value);
    changes= (isNaN(changes)? 0:changes);
    let fixedCost = parseFloat(document.getElementById("inputCost").value);
    fixedCost= (isNaN(fixedCost)? 0:fixedCost);
    // console.log(extras.selectedIndex);
    // console.log(extras.options[extras.selectedIndex].value)
    // console.log(iva);
    // console.log(typeof(iva));
    let cardText = document.getElementById("cardText");
    let flag = true;
    console.log(hours);
    if (isNaN(hours)){
        console.log("Hours Not a Number");
        console.log(document.getElementById("inputHours").style.borderColor);
        document.getElementById("inputHours").style.borderColor  = "#FF0000";
        flag=false;

        // hours=0; no es correct
    } else {
        document.getElementById("inputHours").value = hours;
        document.getElementById("inputHours").style.borderColor  = "#00FF00";
    }//if hours
        if (isNaN(rate)){
            console.log("Rate Not a Number");
            // console.log(document.getElementById("inputRate").style.borderColor);
            document.getElementById("inputRate").style.borderColor  = "#FF0000"; //"rgb(255,0,0)"
            flag=false;
            // rate=0;
    } else {
        document.getElementById("inputRate").value = rate;
        document.getElementById("inputRate").style.borderColor  = "#00FF00";
    }// if rate

    if  (flag) {
    // cardText.innerHTML = quote(hours , rate, iva, extras.selectedIndex).toFixed(2);
    cardText.innerHTML = "$" + quote(hours , rate, iva, extras, changes, fixedCost).toFixed(2);8   
}
});//btnQuote click


//d

// funcion para cotizar con un while
function quote(h,r,vat, ex, p, fc) {
    p /= 100; // p = p/100; // Change Management
    let result = (h*r) * (1+p);
    let i = 0; // inicio
    do {
        console.log(ex.options[i].selected);
        if (ex.options[i].selected){
            result += parseFloat(ex.options[i].value);
        }//if
        i++;
    } while( i < ex.options.length); // condition
    result += fc; // Fixed costs
    if (vat){  
        result *= 1.16;
}//if vat
return result;
}//quote