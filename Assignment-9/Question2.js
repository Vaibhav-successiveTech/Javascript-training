const _ = require('lodash');

let obj = {
    a : 1,
    b : {
        c : [1,2,3,4],
        d : 23
    }
}

let newObj = _.cloneDeep(obj);

console.log(newObj);
