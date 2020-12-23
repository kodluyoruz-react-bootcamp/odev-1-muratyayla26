import getData from "./lib/service";
import axios from "axios";

/* learn length of users object */
const controlFunc = async () => {
    const {data: users} = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
    let userLength = users.length;
    return userLength;
};
    
/* log user infos */
let userLength = controlFunc().then(response => {
    for ( let i = 1 ; i <= response; i++ ){
        let data = getData(i);
        data.then(response => console.log(response));
    }
});
