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
console.log(`${string}`)
  if (`${string}` === "hello!") {
    console.log("I can't hear you")
  } else if (`${string}` === "HELLO!") {console.log("YES INDEED!")
} else if (`${string}` === "I love you, Grandma.") {console.log("I love you, too.")
}
}
sayHiToGrandma("HELLO!")
