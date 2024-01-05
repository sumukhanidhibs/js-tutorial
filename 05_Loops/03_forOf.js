//for of with the array
// arr = ['bengaluru','shivamogga','tumakooru']
// for (const i of arr) {
//     console.log(i);
// }

//for with map
const map = new Map;
map.set('RCB','Royal Challengers Bengaluru')
map.set('CSK','Chennai Super Kings')
map.set('DC','Delhi Capitals')
// console.log(map);
for (const [key,value] of map) {
    console.log(`${key} -- ${value.toUpperCase()}`);
}