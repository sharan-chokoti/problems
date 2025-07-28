//1)Find the Max and Min num bin an Array==================================================
 
//    let array=[9,10,20,2,4,7,40,1,25,4,19,20,30,40,25,1];

//    let max=array[0];
//    let min=array[0];
//    for(let i=0;i<array.length;i++){
//     if(array[i]>max){
//         max=array[i];
//     }
//     else if(array[i]<min){}
//         min=array[i]
//     }
//    }
//    console.log("max num in array is: ",max);
//    console.log("min num in array is: ",min);
   

//2)3rd MAX 3rd MIN in an array===============================================================


   // 3rd max num

// let first=-Infinity;
// let second=-Infinity;
// let third=-Infinity;
// for(let i=0;i<array.length;i++){
//     let num =array[i]
//     if(num>first){
//         third=second;
//         second=first;
//         first=num;
//     }
//     else if(num>second && num<first){
//         third=second;
//         second=num;
//     }
//     else if(num>third && num<second){
//         third=num;
//     }
// }
// console.log("third max value is ",third);

   //3rd MIN number
// let first=Infinity;
// let second=Infinity;
// let third=Infinity;
// for(let i=0;i<array.length;i++){
// let num=array[i];
// if(num<first){
//     third=second;
//     second=first;
//     first=num;
// }
// else if(n
// num<second && num>first){
//     third=second;
//     second=num;
// }
// else if( num<third && num>second){
//     third=num;
// }
// }
// console.log("third min number :",third);



//3)Sort an array without using built in methods================================================
// let array=[9,10,20,2,4,7,40,1,25,4,19,20,30,40,25,1];

// for(let i=0;i<array.length-1;i++){
//  for(let j=0; j<array.length-i-1;j++){

//    if(array[j]>array[j+1]){ 
//     let temp=array[j];    
//     array[j]=array[j+1];    
//     array[j+1]=temp;         
//    }

//  }

// }

// console.log(array);

//4) write a function to remove the duplicate element from an array====================================================

// let array=[9,10,20,2,4,7,40,1,25,4,19,20,30,40,25,1];
// let unique=[]
// for(let i=0;i<array.length;i++){
//    let isDuplicate=false;

//    for(let j=0;j<unique.length;j++){
//       if(array[i]===unique[j]){
//          isDuplicate=true;
//        break;

//       }
//    } 
//    if(!isDuplicate){
//       unique.push(array[i])
//    }

// }

//    console.log(unique)

//5)write a function to remove duplicate elements in a string "HelloWorld"============================================

// function unique(str){
//     let string="";

//     for(let i=0;i<str.length;i++){
//         let exist=false;
//         for(let j=0; j<string.length;j++){
//         if(str[i]==string[j]){
//             exist=true;
//             break;
            
//         }
//     }
//     if(!exist){
//         string+=str[i];
//     }
// }
//  console.log(unique);
 
// }
// unique("Helloworld");

 

// function removeDuplicates(str) {
//     let result = "";
    
//     for (let i = 0; i < str.length; i++) {
//         let exists = false;

//         // Check if character already exists in result
//         for (let j = 0; j < result.length; j++) {
//             if (str[i] === result[j]) {
//                 exists = true;
//                 break;
//             }
//         }

//         if (!exists) {
//             result += str[i];
//         }
//     }

//     return result;
// }

// console.log(removeDuplicates("HelloWorld")); // Output: "HeloWrd"



// 12)	Reverse a string a without using built in method ======================================================


// function reverse(str){
//     let rev="";

//     for(let i=str.length-1; i>=0 ; i--){

//        rev+=str[i]
//     }
//  console.log(rev);
// }

// reverse("sharan");






// 13)	Write a function to return a fibonacci series===============================================================

// function fibonacci(num){
//     let a=0;
//     let b=1;
//     console.log(a);
//      console.log(b);
    
//  for(let i=2;i<=num;i++){
//    let c=a+b;
//    console.log(c);
//    a=b;
//    b=c;
   
//  }

// let a=0;
// let b=1;
// for(let i=0;i<=num;i++){
//    console.log(a);
//    [a,b]=[b,a+b]
// }

// }
// fibonacci(10);


// 6)	Write function to convert camelCase to snake_case==================================================================

// function camelcase(str){
  
//     let result="";
//     for(let i=0;i<str.length;i++){
     
//         let char_code=str.charCodeAt(i);

//         if(char_code>=65 && char_code<=90){
//             result+="_";
//             result+=String.fromCharCode(char_code + 32)
//         }
//         else{
//             result+=str[i];
//         }

//     }
// console.log(result);

// }
// camelcase("firstName")






// 11)	program for adding zeros after 3 values in array Ex: [1, 2,3,4,5,6,6,7,8] Output: [1, 2,3,0,4,5,6,0,6,7,8,0]===========
// let array=[1, 2,3,4,5,6,6,7,8];
// let result=[]
// for(let i=0;i<array.length;i++){

// result.push(array[i]);
// if((i+1)%3==0){
//    result.push(0);
// }
// }
// console.log(result);



// 8)write a function to flatten the nested array ==================================================================


// let arr1=[1,2,[3,5,6,[10,20,30],50],60,[20,10,90,80]];
//  let flat=[];
// function flatten(arr){
// for(let i=0;i<arr.length;i++){
//       if(arr[i].length>1){
//          flatten(arr[i]);
//       }
//       else{
//          flat.push(arr[i]);
//       }
//    }

// }
// flatten(arr1);
// console.log(flat);




// 9) Write a function to find the 2nd largest number in a nested array=============================================

// let arr1=[1,2,[3,5,6,[10,20,30],50],60,[20,10,90,80]];
//  let flat=[];
// function flatten(arr){
// for(let i=0;i<arr.length;i++){
//       if(Array.isArray(arr[i])){
//          flatten(arr[i]);
//       }
//       else{
//          flat.push(arr[i]);
//       }
// }
 
// }
// flatten(arr1);
//  console.log(flat);

// let first=-Infinity;
// let second=-Infinity;

// for(let i=0;i<flat.length;i++){
//  let num=flat[i];
//  if(num>first){
 
//    first=num;
//  }
//  else if(num>second && num<first)
//    second=num;
// }
// console.log("second highest num in array is: ",second);


// 10)	write a function to generate below pattern========================================
// a.	1
// b.	2 9
// c.	3 8 10
// d.	4 7 11 14
// e.	5 6 12 13 15

// function generatePattern(rows) {
//     let output = Array.from({ length: rows }, () => []);
//     let left = 1;
//     let rightStart = rows * (rows + 1) / 2 + 1; // Start for right-side numbers
//     let right = rightStart;

//     for (let i = 0; i < rows; i++) {
//         let row = [];

//         // Fill left side numbers (from top to bottom)
//         for (let j = 0; j <= i; j++) {
//             row.push(0); // placeholder
//         }

//         output[i] = row;
//     }

//     // Fill left side (first column of each row)
//     for (let i = 0; i < rows; i++) {
//         output[i][0] = left++;
//     }

//     // Fill right side numbers (from bottom row up)
//     right = left; // Now we continue from where left ended
//     for (let col = 1; col < rows; col++) {
//         for (let row = rows - 1; row >= col; row--) {
//             output[row][col] = right++;
//         }
//     }

//     // Print pattern
//     for (let i = 0; i < rows; i++) {
//         console.log(output[i].join(" ").trim());
//     }
// }

// // Call the function
// generatePattern(5);




//17) Ex : ['abc','def','ghi']	output : ['Abc', 'Def','Ghi"]=============================================================

// let array1=['abc','def','ghi'];
// let results=[]
// for(let i=0;i<array1.length;i++){
//    let word=array1[i];
//    let newword="";

//    let firstcharcode=word.charCodeAt(0)
//    let capitalfirst=String.fromCharCode(firstcharcode-32);
//    newword=capitalfirst;
//    for(let j=1;j<array1.length;j++){
    
//    newword+=word[j];
//    }
//    results.push(newword);
// }
//  console.log(results);


 
//16) write a function to capitalize the each words first letter to capital================================================

// function capitalfirst(name){
//   let result=" ";
//    for(let i=0;i<name.length;i++){
   
//    let firstword=name.charCodeAt(0);
//    let capital=String.fromCharCode(firstword-32)
  
//    result+=capital;


//   for(let j=1;j<name.length;j++)

//      result+=name[j];

//    }

//   console.log(result);
  
// }
// capitalfirst("sharan");



//14)	Implement a deep clone(copy) function in JavaScript that creates a copy of a nested object or array without any reference to the original. 
// let person={
//    name:"sharan",
//    age:25,
//    adress:{
//       city:"bengaluru",
   
//    },
//    Skills:["html","css","js"]
// }

// let deepcopy=JSON.parse(JSON.stringify(person))
// deepcopy.adress.city="manglore";
// deepcopy.Skills=["react","Mysql","expressjs"]
// console.log(person);
// console.log(deepcopy);



// 15)write a function to find how many times an elements are repeated in an array [1,2,3,3,5,2,1,7,6,8,7,8] and in string "abcdaabdlfjl"==========
// let array=[1,2,3,3,5,2,1,7,6,8,7,8] ;
// let count={}

// for(let i=0;i<array.length;i++){

//    let item=array[i]

// if(count[item]== null){
//    count[item]=1
// }
// else{
//    count[item]++
// }
// }
// console.log(count);
// for(let key in count){
//    console.log(`${key} appers ${count[key]} times`);
   
// }




// let str="abcdaabdlfjl";
// let count={};

// for(let i=0;i<str.length;i++){
// let item=str[i]

// if(count[item]==null){
//    count[item]=1
// }
// else{
//    count[item]++
// }

// }
// console.log(count);
// for(let key in count){
//    console.log(`${key} appears ${count[key]} times`);
   
// }


// 17)	Ex : ['abc','def','ghi']	output : ['Abc', 'Def','Ghi"]=========================================================

// let array=['abc','def','ghi']
// for(let i=0;i<array.length;i++){
//    let str=array[i];
// array[i]=str.charAt(0).toUpperCase()+ str.slice(1);
// }
// console.log(array);

// let array1=['abc','def','ghi'];
// for(let i=0;i<array1.length;i++){
// let str=array1[i];
// let newstr="";
// for(let j=0;j<str.length;j++){
//    let charcode=str[j].charCodeAt(0)

// if(j===0 && charcode >=97 && charcode<=122){
//    newstr+=String.fromCharCode(charcode-32);
// }
// else{
//    newstr+=str[j]
// }
// }
// array1[i]=newstr;
// }
// console.log(array1);




// 18)	write a function to calculate the sum of total marks in an array of objects a.	ex : [{sub:'Maths', marks:60},{sub:'Science', marks:70},{sub:'English', marks:90}]
// let student1=[{sub:'Maths', marks:60},{sub:'Science', marks:70},{sub:'English', marks:90}];===============================================

// function college(student){
//    let sum=0;
//    for(let val of student){
  
//        sum+=val.marks

//       }

//       console.log("total sum of marks is :",sum);
//    }
// college(student1);



// 21)	Write a function to remove the duplicate from 2 arrays, let a = [1,2,3,4,5] let b = [5,3,7,8,9]==========================

// let array1=[1,2,3,4,5] ;
// let array2=[5,3,7,8,9];
// let array=[...array1,...array2]
// let unnique=[]
// for(let i=0;i<array.length;i++){
// let isduplicate=false;

// for(let j=0;j<unnique.length;j++){
// if(array[i]===unnique[j]){
//    isduplicate=true;
//    break;
// }
// }
// if(!isduplicate){
//    unnique.push(array[i])
// }
// }
// console.log(unnique);

// let array1=[1,2,3,4,5] ;
// let array2=[5,3,7,8,9];
// let unnique=[]

// for(let i=0;i<array1.length;i++){

// let isduplicate=false;
// for(let j=0;j<unnique.length;j++){
// if(array1[i]===unnique[j]){
//    isduplicate=true;
//    break;
// }
// }
// if(!isduplicate){
//    unnique.push(array1[i])
// }
// }

// for(let i=0;i<array2.length;i++){

// let isduplicate=false;
// for(let j=0;j<unnique.length;j++){
// if(array2[i]===unnique[j]){
//    isduplicate=true;
//    break;
// }
// }
// if(!isduplicate){
//    unnique.push(array2[i])
// }
// }



// console.log(unnique);






