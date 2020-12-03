function shout(string) {
return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log("HELLO")
}
  logShout().toUpperCase()

function logWhisper(string) {
  console.log('hello')
}
  logWhisper().toLowerCase()

function sayHiToGrandma(string) {
  var uppercase = "HELLO!"
  var lowercase = "hello!"
  var mixedcase = "I love you, Grandma."

  if (string === lowercase) {
    console.log("I can't hear you")
  } else if (string === uppercase) {console.log("YES INDEED!")
} else if (string === mixedcase) {console.log("I love you, too.")
}
}
sayHiToGrandma("HELLO!")
