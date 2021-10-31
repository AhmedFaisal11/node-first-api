var url = 'http://my;ogger.io/log';

function mylog(message){
    //send http request
    console.log(message);
}

module.exports.mylog = mylog;
// module.exports.url = url;

// console.log(module);