const accountId = 234553
let accountEmail = "prasad@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // variable can be declared but it is not right way
let accoutState
// accountId = 2 // not allowed

accountEmail = "Ps@Ps.com"
accountPassword = "121212"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accoutState])