// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
console.log(currency);
let obj = {};
let H, Q, D, N, P = 0
if (currency > 10000){
    return({error: "You are rich, my friend! We don't have so much coins for exchange"});
}
else if (currency < 1) {
    return({});
}
else{
    H = Math.floor(currency/50);
    if (H>0){obj.H=H};
    currency = currency-H*50;
    Q = Math.floor(currency/25);
    if (Q>0){obj.Q=Q};
    currency = currency-Q*25;
    D = Math.floor(currency/10);
    if (D>0){obj.D=D};
    currency = currency-D*10;
    N = Math.floor(currency/5);
    if (N>0){obj.N=N};
    currency = currency-N*5;
    P = Math.floor(currency/1)
    if (P>0){obj.P=P};
    currency = currency-P*1;
    console.log(obj);
    return(obj);
}
}
