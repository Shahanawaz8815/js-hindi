const accountId = 1445533
let accountEmail = "Shahanawaz@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 //not allowed to change const value

accountEmail = "abc@gmail.com"
accountPassword = "122222"
accountCity = "Madhya Pradesh"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])
