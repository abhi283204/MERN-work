const http = require('https');
 
function fetchData(){
	
return new Promise((res, rej)=>{
	
 setTimeout(()=>{
	 
 const error= false;
	 
 if(!error){
  res("Promise Resolved"); 
 }
	 
 else{
 rej("Promise Rejected");
 }
	 
   }, 1000);
 
  })
}

fetchData().then((data)=>{
return console.log(data)
}).catch((error)=>console.log("Sorry Bro " + error));


//----------------------------------------------------------------------------
//let data = "Initial state"
//
//function fetchData(){
//	
//	setTimeout(()=>{console.log("final state")}, 2000);
//}
//
//console.log(data);
//console.log(fetchData());


//---------------------------------------------------------------------------------
//var data = new Promise((res, rej)=>{
//	setTimeout(()=>{
//	res("New State");
//	},2000)
//})
//
//data.then((val)=>console.log(val));
