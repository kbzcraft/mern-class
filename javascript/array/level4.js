const arr = ['ram','shyam','hari']

//Q1
//remove shyam
// expected output 
// ['ram', 'hari']
//syntax
const output = arr.filter((item)=>{
  return item != "shyam" 
})
console.log(output)
