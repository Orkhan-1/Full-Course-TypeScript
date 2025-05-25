function greetUser() {
  // var: function-scoped
  var greeting = "Hello";

  // let: block-scoped, can change
  let userName = "Orkhan";

  // const: block-scoped, can't change
  const appName = "MyApp";

  console.log(greeting + ", " + userName + "! Welcome to " + appName);

  if (true) {
    var greeting = "Hi"; 
    let userName = "Bob"; 
    console.log(greeting + ", " + userName); // Hi, Bob
  }

  console.log(greeting); // Hi
  console.log(userName); // Orkhan
}

greetUser();