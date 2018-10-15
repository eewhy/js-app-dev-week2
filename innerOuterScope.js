function outer(){

  const string = "hello";
  const object = {name:'EY'};

  function inner(string,object) {

    console.log(string);
    console.log(object.name);

    var string = "bye"
    var object = {name:'James'}

    console.log(string);
    console.log(object.name);

    object.name = 'Chris';

    console.log(string);
    console.log(object.name);
  }

  inner(string,object);
  console.log(string);
  console.log(object.name);

}

outer();
