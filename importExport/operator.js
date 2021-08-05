

const add=(a,b)=>{
    return a+b;
};

const sub=(a,b)=>{
    return a-b;
};
const mult=(a,b)=>{
    return a*b;
};
const name="shivam";
//to exports and use in another file index.js

//using normal mehtod
// module.exports.add=add;
// module.exports.sub=sub;

//using object destucturing
module.exports = {add,sub,mult};