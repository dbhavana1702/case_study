//call back the function (1....100)
function welcome(name,callback1,callback2)
{
    console.log("hey!,Welcome"+name);
    callback1();
}
welcome("harry",()=>console.log('bye'),()=>{});
//the second callback is empty so it doesn't show any error else it shows error
//chainig function :callback1,callback2
//the function is provided by someone else and linking with that