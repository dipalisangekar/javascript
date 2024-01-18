let duplicate = function () {
  const arrayNum = [11, 3, 4, 11, 4, 7, 3];
  const duplicates = [];
  console.log(`Given array is:${arrayNum}`);

  for (let i = 0; i < arrayNum.length; i++) {
    for (let j = i + 1; j < arrayNum.length; j++) {
      if (arrayNum[i] == arrayNum[j] && i !== j) {
        duplicates.push(arrayNum[i]);
      }
    }
  }
  console.log(duplicates);
};
duplicate();
