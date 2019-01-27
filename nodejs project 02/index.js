
var validator = require("email-validator");
 
const axios = require('axios');

const url = 'https://haveibeenpwned.com/api/v2/breachedaccount/';

process.stdin.on('data', function(data){
    data = (data.toString().trim());
    if(validator.validate(data)){
    console.log(data+" is a valid email");
        axios.get(url+data+'?truncateResponse=true').then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });

} else {
    console.log("not a valid email!");
}
})