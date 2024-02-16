// YOUR CODE BELOW
function everyWhichWay(num1,num2,num3) {
    if((num1+num2) === num3) {
        return "sum"
    } else if ((num1-num2) === num3) {
        return "difference"
    } else if ((num1*num2) === num3) {
        return "product"
    } else if ((num1/num2) === num3) {
        return "fraction"
    } else {
        return null
    }

}
everyWhichWay(10, 20, 30)
everyWhichWay(50, 20, 30)
everyWhichWay(4, 4, 16)
everyWhichWay(100, 10, 10)
everyWhichWay(1, 1000, 50)