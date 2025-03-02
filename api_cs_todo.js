const getAllToDos=async(status)=>
    {
        try{
            let fetching=await fetch('https://jsonplaceholder.typicode.com/todos')
            let comments=await fetching.json();
            let filtered=comments.filter((t)=>status==t.completed);
            let mapped=filtered.map((m)=>m.title);
            mapped.forEach(t=>console.log(`-> ${t}`));
    
        }
        catch(err)
        {
            console.log(`error in ${status}`)
        }
    }
    getAllToDos(false);