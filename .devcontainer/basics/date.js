const myDate=new Date()      
 //console.log(myDate)  //2025-07-29T08:31:48.682Z

// console.log(myDate.toString())  //Tue jul 29 2025 )8:31:48 GMT+0000 (Coordinated Universal Time)

 //console.log(myDate.toDateString())  //// Tue Jul 29 2025

 //console.log(myDate.toLocaleString())
 //console.log(typeof myDate)  //object

 let myCreatedDate=new Date(2023,0,24)
 //console.log(myCreatedDate.toDateString())  //Tue Jan 24 2023

 let myCreateDate=new Date("2023-01-14")
  //console.log(myCreatedDate.toLocaleString())   // 1/24/2023, 12:00:00 AM

  let myTimeStamp=Date.now()
  //console.log(myTimeStamp)   

  //console.log(myCreatedDate.getTime())

 // console.log(Math.floor((Date.now/1000)))  //NaN

  let newDate=new Date()
   console.log(newDate)  
   console.log(newDate.getMonth())   //6
    console.log(newDate.getDay())   //2

    newDate.toLocaleString('default',{
        weekday:"long",
        
    })


