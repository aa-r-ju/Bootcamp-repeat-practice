function myMnemonic(...words) {
    const initials = words.map(word => word.charAt(0));

    const mnemonic = initials.join('');

    return mnemonic;
}

console.log(myMnemonic('Must', 'Accept', 'Sugar', 'Happiness')); 
console.log(myMnemonic('We', 'Eat', 'Eggs')); 
