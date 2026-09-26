let p1 = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if(error){
            reject("Error: something went wrong", "this is the error message") 
        }else{
            resolve({status: 200, message: "Success: The operation completed successfully!"});
        }
        
    }, 1000);
});

p1.then((success) => {
    console.log(success);

}, (error ) => {
    console.log(error);
})

p1.then((success) => {
    console.log(success);

}).catch((error ) => {
    console.log(error);
}).finally(() => {
    console.log("Promise has been settled (either resolved or reject).")
});


// Promise chaining

p1.then((success) => {
    console.log(success);
    return success

}).then(() =>{
    console.log("This is the second then block")
    console.log("Data from teh first then block:", data );
    return success.message

}).then(() => {
    console.log("this is the third then block. ");
    console.log("Data from the second tehn block: " , data)

}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Promise has been settled(either resolved or rejected).")
});