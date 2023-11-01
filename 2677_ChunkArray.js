/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  if (arr.length === 0) return [];

  const resultArr = [];
  // First attempt, too slow
  // let tempArr = [];
  // for(let i= 0; i<arr.length; i++){
  //     if(tempArr.length === size) {
  //         resultArr.push(tempArr);
  //         tempArr = [arr[i]];
  //     }
  //     else{
  //         tempArr.push(arr[i]);
  //     }
  // }
  // if(tempArr.length>0) resultArr.push(tempArr);

  // A speed up version
  for (let i = 0; i < arr.length; i += size) {
    resultArr.push(arr.slice(i, i + size));
  }
  return resultArr;
};
