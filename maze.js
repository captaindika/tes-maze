let maze = (input) => {
  if (((input) + 1) % 4 !== 0 || input < 0){
    console.log("input harus bilangan positif dan 4n-1")
  } else {
    let temp = ""
    for (let i = 0; i < input; i++) {
      for (let j = 0; j < input; j++) {
          if (i === 0 || i === input - 1 || j === 0 || j === input - 1 || i % 2 === 0) {
              if (i % 4 === 0 && j === 1) {
                  temp += " "
              } else if (i % 2 === 0 && i % 4 !== 0 && j === input - 2) {
                  temp += " "
              } else if (j==input-1) {
                temp += '@\n'
              } else {
                  temp += "@"
              }
          } else {
              temp += " "
          }
      }
    }
    return temp
  }
}

console.log(maze(15))