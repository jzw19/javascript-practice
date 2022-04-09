function aclean(arr) {
  const encounterSet = new Set();
  for(let i = 0; i < arr.length; i++) {
    const word = arr[i].toLowerCase().split('').sort().join('');
    if(encounterSet.has(word)) {
      arr[i] = null;
    } else {
      encounterSet.add(word);
    }
  }

  // const result = [];
  // for(const word of arr) {
  //   if(word !== null) {
  //     result.push(word);
  //   }
  // }

  // return result;
  return Array.from(encounterSet.values());
}