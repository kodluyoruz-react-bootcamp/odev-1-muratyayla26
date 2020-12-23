"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _service = require('./lib/service'); var _service2 = _interopRequireDefault(_service);
var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

/* learn length of users object */
const controlFunc = async () => {
    const {data: users} = await _axios2.default.get(`https://jsonplaceholder.typicode.com/users/`);
    let userLength = users.length;
    return userLength;
};
    
/* log user infos */
let userLength = controlFunc().then(response => {
    for ( let i = 1 ; i <= response; i++ ){
        let data = _service2.default.call(void 0, i);
        data.then(response => console.log(response));
    }
});
