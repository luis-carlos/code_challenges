let ogMap = new Map();
ogMap.set(1, "uno");
console.log(ogMap);

let copyMap = new Map(ogMap);
console.log(copyMap);

copyMap.set(1,"one");
console.log(copyMap, ogMap);
