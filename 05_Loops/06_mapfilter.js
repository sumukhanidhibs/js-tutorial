//filter method

const arr = [1,2,3,4,5,6,7,8,9,10]

// const odd = arr.filter((i)=> i%2!=0)
// const even = arr.filter((i)=> i%2==0)

// console.log(odd);
// console.log(even);

const plusfive = arr.map((num) => num+5).map((num)=>num*2)
console.log(plusfive)