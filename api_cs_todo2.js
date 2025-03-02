const displayAllRecords = async (id1, callback) => {

    try {
        let fetching = await fetch('https://api.restful-api.dev/objects');
        let convert = await fetching.json();
        let arr = [];
        convert.forEach((c) => {
            let trimmed = {
                id: c.id,
                name: c.name,
                color: c.data && c.data.color ? c.data.color : "null",
                price: c.price &&c.data.price ? c.data.price : "null"
            };
            arr.push(trimmed);

        });
        console.log(callback(id1, arr));


    }
    catch (err) {
        console.log(err)
        
    }

}

const getRecordById = (ids, arr) => {
    try {
        let recordId = arr.filter((f) => ids.toString() === f.id);
        return recordId.length == 0?"Invalid":recordId;

    }
    catch (err) {
        console.log("Invalid ID");
    }
}
displayAllRecords(5, getRecordById);