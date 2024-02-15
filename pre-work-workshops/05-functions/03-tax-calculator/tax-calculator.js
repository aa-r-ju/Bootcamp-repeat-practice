// YOUR CODE BELOW
function taxCalculator(item,state) {
    let paisa;
    if(state === "NY"){
     return paisa =  item+(item*0.04)
    }
    else if (state === "NJ") {
     return paisa = item+(item*0.06625)
    }

}
taxCalculator(100, 'NY'); 
taxCalculator(100, 'NJ');