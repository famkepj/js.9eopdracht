// Hey kiddo

const ageCheck = function (age){
    return age > 18;
};

const adultAge = function (age){
    const checkingAge = ageCheck(age);
    console.log ("return value", checkingAge);
     if (checkingAge == true){
        return "Hello there";
    }
    if (checkingAge == false){
        return "Hey kiddo";
    }
}


  console.log(adultAge(21));


//   Vat 1

const vat = function(baseprice, vatPercentage){
    const vatPrice = baseprice * vatPercentage;
    console.log ("vatprice", vatPrice);
    return vatPrice;
};

const calculateNettoprice = function (baseprice, vatPercentage){
    const vatPrice1 = vat(baseprice, vatPercentage);
    const nettoprice = baseprice + vatPrice1;
    console.log ("nettoprice");
    return nettoprice;
};

console.log (calculateNettoprice(100, 0.21));

//      Vat 2

const calculateBaseprice = function (nettoPrice1, vatPercentage1){
    const baseprice1 = nettoPrice1/ (1+vatPercentage1);
    console.log ("baseprice", baseprice1);
    return baseprice1;
};

const calculateVatprice = function (nettoPrice1, vatPercentage1){
    const baseprice2 = calculateBaseprice (nettoPrice1, vatPercentage1);
    const vatprice2 = nettoPrice1 - baseprice2;
    console.log ("vatprice");
    return vatprice2;
};

console.log (calculateVatprice(121, 0.21))