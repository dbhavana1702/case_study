const takeOrder=(cname,item,callback)=>
{
    console.log("hey..Preparing the"+item);
    setTimeout(()=>callback(cname,item),2000)
    
}
    
const serve=(cname,item)=>console.log("here's your order "+item +" customer == "+cname)
takeOrder("Bhavana","Samosa",serve)