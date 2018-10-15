function add(){
  var sum = 0
  for(var i= 0; i < arguments.length; i++ ){
    sum += arguments[i];
  }
  return sum;
}

const addTotal = add(1,2,3,4,5,6,7,8,9);

var billAmount = Math.random() * 50;

function gratuity(amount){
  return amount * 0.2;
};

function totalWithGrat(amount){
  return amount + gratuity(amount);
};



console.log('Your total is ' + totalWithGrat(billAmount).toFixed(2));
