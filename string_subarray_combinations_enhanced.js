const words = ["foo", "bar"];
const inputString = "barfoothefoobarman";
const rx = new RegExp(words.join('|'), 'g');
console.log(words.join('|'));

const counts = words.map(item=> 0)
while (m = rx.exec(inputString)){
    console.log(m);
    const index = words.indexOf(m[0]);
    console.log(index);
    counts[index]++;
}
console.log(counts);