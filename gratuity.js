var billAmount = Math.random() * 50;

function gratuity(amount){
  return amount * 0.2;
};

function totalWithGrat(amount){
  return amount + gratuity(amount);
};



console.log('Your total is ' + totalWithGrat(billAmount).toFixed(2));
