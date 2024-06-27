
//  Question # 4 
// Write a function fetchWithError that returns a Promise. It should randomly either  resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a  delay of 1 second. Handle the rejection using .catch 


// async function fetchwithError(){
//     return await new Promise((res,rej)=>{  
//         setTimeout(() => {
//            let randNum = Math.random(); 
//            if (randNum > 0.5){
//             console.log("Data fatched successfully!");
//            }
//            else{
//             console.log("Data fatch failed!");
//            }
//         }, 1000);
// })
// }
// fetchwithError().then(
//     (data)=>{
//         console.log(data,"success");
//     }
// ).catch(
//     (err)=>{
//         console.log("failed",err);
        
//     }
// );