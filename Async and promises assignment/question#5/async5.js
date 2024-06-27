//"use strict";
//---------------------------------- Question # 5-----------------------------------------------
//Object.defineProperty(exports, "__esModule", { value: true });
// Write a function executeSequentially that executes two functions fetchData and  processData sequentially using Promises, and logs the results in the order they are  called.
//-------------------------------------Solution--------------------------------------------------
// async function executeSequentially() {
//     try {
//         const data = await fetchData(); //  fetchData returns a Promise
//         const processedResult = await processData(data); //  ProcessData also returns a Promise
//         console.log('Data fetched:', data);
//         console.log('Processed result:', processedResult);
//     }
//     catch (error) {
//         console.error('An error occurred:', error);
//     }
// }
// executeSequentially();
