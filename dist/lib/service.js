"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

/* get user infos */
try {
     async function getData(id){
        const {data: users} = await _axios2.default.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const {data: posts} = await _axios2.default.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        return {...users, "posts": posts};
    } exports.default = getData;;
} catch(e){
    console.log(e);
}


