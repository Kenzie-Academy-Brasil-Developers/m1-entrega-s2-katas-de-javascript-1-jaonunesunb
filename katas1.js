function oneThroughTwenty(a) {
  let result = []  
  for(let i =1; i <= a;i++ ) {
    result.push(i)
    }
    return result.join()
}

console.log(oneThroughTwenty(20))

function evensToTwenty(a) {
   let result = []
   for (let i = 1; i <= a; i++){
     if (i % 2 == 0) {
       result.push(i)
     }
   } 
   
  return result.join()
}

console.log(evensToTwenty(20))

function oddsToTwenty(a) {
  let result = []
  for (let i = 1; i <= a; i++){
    if (i % 2 != 0) {
      result.push(i)
    }
  } 
  
 return result.join()
}

console.log(oddsToTwenty(20))

function multiplesOfFive(a) {
  let result = []
  for (let i = 5; i <= a; i++){
    if (i % 5 == 0) {
      result.push(i)
    }
  } 
  
 return result.join()
}

console.log(multiplesOfFive(100))

function squareNumbers(a) {
  let result = []
  for (let i = 1; i <= a; i++){
    if (Math.sqrt(i) % 1 == 0) {
      result.push(i)
}

console.log(squareNumbers(100))

function countingBackwards(a) {
  let result = []
  for (let i = a; 1 <= i; i--) {
    result.push(i)
  }
  return result.join()
  }
  
  console.log(countingBackwards(20))

function evenNumbersBackwards(a) {
  let result = []
  for (let i = a; 1 <= i; i--) {
    if (i % 2 == 0) {
      result.push(i)
  }
      
  }
  return result.join()
  }
console.log(evenNumbersBackwards(20))

function oddNumbersBackwards(a) {
  let result = []
  for (let i = a; 1 <= i; i--) {
    if (i % 2 != 0) {
      result.push(i)
    }
  }
  return result.join()
}

console.log(oddNumbersBackwards(20))

function multiplesOfFiveBackwards(a) {
  let result = []
  for (let i = a; 5 <= i; i--) {
    if (i % 5 == 0) {
      result.push(i)
    }
    
  }
  return result.join()
}
console.log(multiplesOfFiveBackwards(100))

function squareNumbersBackwards(a) {
  let result = []
  for (let i = a; 1 <= i; i--){
    if (Math.sqrt(i) % 1 == 0) {
      result.push(i)
    }
  }
  return result.join()
}

console.log(squareNumbersBackwards(100))
