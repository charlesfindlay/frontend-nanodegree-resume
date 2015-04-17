/*
$("#main").append(["Charles Findlay"]);
var awesomethoughts = "I am Charles Findlay and I am AWESOME!";
console.log(awesomethoughts);
var funthoughts = awesomethoughts.replace("AWESOME", "FUN");
console.log(funthoughts);
$("#main").append(funthoughts);
*/

// Start of real formatting code
var name = "Charles Findlay";
var role = ".NET Developer";

var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedName = HTMLheaderName.replace("%data%", name);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
