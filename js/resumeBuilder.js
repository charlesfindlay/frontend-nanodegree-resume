/*
$("#main").append(["Charles Findlay"]);
var awesomethoughts = "I am Charles Findlay and I am AWESOME!";
console.log(awesomethoughts);
var funthoughts = awesomethoughts.replace("AWESOME", "FUN");
console.log(funthoughts);
$("#main").append(funthoughts);
*/

// Start of real formatting code
var formattedName = HTMLheaderName.replace("%data%", "Charles Findlay");
var formattedRole = HTMLheaderRole.replace("%data%", ".NET Developer");
$("#header").prepend(formattedName);
$("#header").append(formattedRole);