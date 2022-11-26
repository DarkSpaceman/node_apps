const http = require('http');

let s0 = process.argv;

let c_query = s0[s0.length - 1];

if (s0.length == 4) { c_query = `${s0[s0.length - 2]} ${s0[s0.length - 1]}`};

http.get(`http://api.weatherstack.com/current?access_key=${process.env.myAPIkey}&query=${c_query}`, (res) => {
    res.setEncoding('utf-8');
    let rowData = '';
    res.on('data', (chunk) => {
        rowData += chunk;
    });
    res.on('end', () => {
        let normData = JSON.parse(rowData);
        console.log(normData.current);
    })
}).on('error', (err) => { console.error(err) });