function pickPeaks(arr){
    let peaks = []
    let pos = []
    for (let x = 1; x < arr.length; x++) {
        if (x === arr.length - 1) continue
        const num = arr[x], prev = arr[x - 1], next = arr[x + 1]
        if (num > prev && num >= next) {
            peaks.push(num)
            pos.push(x)
        }
    }
    //  return {pos:[],peaks:[]}
    return {pos, peaks}
  }
// [ 3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1 ]
// [ 2, 1, 3, 1, 2, 2, 2, 2, 1 ]
// [ 1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3 ]

  console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]))
  console.log(pickPeaks([ 3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1 ]))
  console.log(pickPeaks([ 2, 1, 3, 1, 2, 2, 2, 2, 1 ]))
  console.log(pickPeaks([ 1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3 ]))