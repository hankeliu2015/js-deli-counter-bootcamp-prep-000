var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name)
    //var j = katzDeliLine.length+1;
    console.log(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

////////////////////////////////////

function nowServing(katzDeliLine) {

  if (katzDeliLine.length === 0) {
    console.log("There is nobody waiting to be served!")
  } else {
    console.log(katzDeliLine[0])
    katzDeliLine.shift()
  }
  return katzDeliLine
}

//////////////////////

function currentLine(){
  if (currentLine.length === 0 ) {
    console.log('The line is currently empty.');
  } else {
    var lineUp = [];
    for (var i = 0; i < currentLine.length; i++) {
      lineUp.push(`${i+1}`);
      LineUp.push(`${currentLine[i]}`);
    }
    console.log("The line is currently:" + lineUp)
  }
}


// please ignore following: 
// function currentLine(){
//   if (currentLine.length === 0 ) {
//     console.log('The line is currently empty.');
//   } else {
//     for (var i = 0; i < currentLine.length; ++1) {
//       console.log("The line is currently:" + ``${currentLine.length+1}.${currently[i],``})
//     }
//   }
// }
