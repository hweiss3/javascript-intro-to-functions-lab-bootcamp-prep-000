function shout(string) {
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout('HELLO'){
  console.log()

}
var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase // true
var lowercase = "hello!"
lowercase.toLowerCase() === lowercase // true
var mixedCase = 'Hi there!'
mixedCase.toUpperCase() === uppercase // false
mixedCase.toLowerCase() === lowercase // false

function sayHiToGrandma(string){
  if (`string` === lowercase) {
    return "I can't hear you!"
  }
  else if (`string` === uppercase) {
    return "YES INDEED!"
  }
}
