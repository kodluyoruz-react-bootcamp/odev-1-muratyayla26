import axios from "axios";

/* get user infos */
try {
    export default async function getData(id){
        const {data: users} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const {data: posts} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        return {...users, "posts": posts};
    };
} catch(e){
    console.log(e);
}


