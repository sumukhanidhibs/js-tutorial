//arrays
// let arr1 = [2,4,6,8,10]

//copy an array by spreading
// let arr2 = [...arr1,3,33,45]
// console.log(arr2);

//copy array using .from() method
// let arr3 = Array.from(arr1)
// console.log(arr3);

//copy array using the .slice() method
// let arr4 = arr1.slice()
// console.log(arr4);

//increasing the length of an array and seeing the results
// arr5 = [2,3,3,334,4,2]
// arr5.length = 10
// console.log(arr5)

//array push 
// arr6 = []
// arr6.push(20)
// arr6.push(40,33,34)
// console.log(arr6);
// arr6.pop(arr6)
// console.log(arr6);

//array includes() & indexOf()
// arr5 = [2,3,3,334,4,2]
// console.log(arr5.includes(8))
// console.log(arr5.indexOf(334))

//slice and splice
// arr = ["gm",2,4,6,7,8,7,9,99]
// console.log(arr.slice(2,7))
// console.log(arr.includes(78))

//.splice inserts or delets => syntax .splice(strt_index,jump_index,value)
//superheros = ["batman","spiderman","Dr.strange","captain america","Martian Manhunter"]
//superheros.splice(1,1,"2") => splice affects the original object
//[ 'batman', '2', 'Dr.strange', 'captain america', 'Martian Manhunter' ] 
//superheros.splice(1,0,"2")
//['batman','2','spiderman','Dr.strange','captain america','Martian Manhunter']   
//superheros.splice(1,2,"2")
//[ 'batman', '2', 'captain america', 'Martian Manhunter' ] 
//console.log(superheros);

//for-each
// number = [0,1,2,3,4,5,6]
// number.forEach(element => {
//     console.log(element+element);
// });