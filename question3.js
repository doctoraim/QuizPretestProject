const https = require('https');

const options = {
    hostname: 'codequiz.azurewebsites.net',
    path: '/',
    headers: {
        'Cookie': 'hasCookie=true',
    }
}

https.get(options, (response) => {

    var htmlstr = '';
    response.on('data', function (chunk) {
        htmlstr += chunk;
        
    });

    response.on('end', function () {
        let values =  htmlstr.match(/<td>(.*?)<\/td>/g).map(function(val){
            return val.replace(/<\/?td>/g,'').replace(/\s/g, '');
         });
        var arg = process.argv.slice(2);
        for(let i=0;i<values.length;i++)
        {
            if(values[i] == arg[0]){
                console.log(values[i+1]);
                break;
            }
        }
    });

});
