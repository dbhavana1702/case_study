/** 
Create a function bookTickets (movieName, ticketCost) 
--console log "tiket booking for movieName in process, pls wait for confirmation" 
After 2 seconds... 
define a callback to confirm Tickets() 
-- console log "booking confirm for moviewName", wait till we take you to payment screen 
After 3 secs... 
define a callback to process Ticket() 
console.log "payment confirm for ticketCost, Enjoy the movie movieName"*/
const booktickets=(movieName,ticketCost,confirmTickets,processTicket)=>
{
    console.log(`ticket booking for ${movieName} in the process, pls wait for confirmation`);
    setTimeout(()=>confirmTickets(movieName,ticketCost,processTicket),2000);
}
const confirmTickets=(movieName,ticketCost,processTicket)=>{
    console.log(`booking is confirm for ${movieName}, wait till we take you to payment screen`);
    setTimeout(()=>processTicket(movieName,ticketCost),3000);
}
const processTicket=(movieName,ticketCost)=>
{
    console.log(`payment confirm for ${ticketCost} , enjoy the movie ${movieName}`);
}
booktickets("once more",500,confirmTickets,processTicket);

// const booktickets=(movieName,ticketCost,callback1,callback2)=>
//     {
//         console.log(`ticket booking for ${movieName} in the process, pls wait for confirmation`);
//         setTimeout(()=>callback1(movieName,ticketCost,callback2),2000);
//     }
//     const confirmTickets=(movieName,ticketCost,callback2)=>{
//         console.log(`booking is confirm for ${movieName}, wait till we take you to payment screen`);
//         setTimeout(()=>callback2(movieName,ticketCost),3000);
//     }
//     const processTicket=(movieName,ticketCost)=>
//     {
//         console.log(`payment confirm for ${ticketCost} , enjoy the movie ${movieName}`);
//     }
//     booktickets("once more",500,confirmTickets,processTicket);