import getData from "./lib/service";
import axios from "axios";

const controlFunc = async () => {
    const {data: users} = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
    let userLength = users.length;
    return userLength;
}

let userLength = controlFunc().then(response => {
    for ( let i = 1 ; i <= response; i++){
        let data = getData(i);
        data.then(response => console.log(response));
    }
});











/*for ( let i = 1 ; i <= 10 ; i++){
    let data2 = getData(i);
    data2.then(response => console.log(response));
}
*/



//"start": "node dist/index.js"
//sucrase ./src -d ./dist --transforms imports
//sucrase ./srcDir -d ./outDir --transforms typescript,imports