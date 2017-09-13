function shout(string) {
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log("HELLO")

}
function logWhisper(string){
  console.log("hello")
}

var uppercase = "HELLO"
uppercase.toUpperCase() === uppercase // true
var lowercase = "hello"
lowercase.toLowerCase() === lowercase // true
var mixedCase = 'I love you, Grandma.'
mixedCase.toUpperCase() === uppercase // false
mixedCase.toLowerCase() === lowercase // false

function sayHiToGrandma(string){
  return string.toUpperCase
}
