function maxOfThree(num1, num2, num3) {
    let maxNum = (num1 > num2) ? num1 : num2;

    maxNum = (maxNum > num3) ? maxNum : num3;

    return maxNum;
}

maxOfThree(5, 4, 10); 
maxOfThree(7, 7, 4);  