function creatNumArray(noOfElements) {
  const numArray = [];
  for (let i = 1; i<=noOfElements; i++) {
    numArray.push(i);
  }
  return numArray;
}
const returnNumArray = creatNumArray(500);
console.log(returnNumArray);
