function shout(string) {
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log(string.toUpperCase)

}
var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase // true
var lowercase = "hello!"
lowercase.toLowerCase() === lowercase // true
var mixedCase = 'Hi there!'
mixedCase.toUpperCase() === uppercase // false
mixedCase.toLowerCase() === lowercase // false

function sayHiToGrandma(string){
  return lowercase
}
