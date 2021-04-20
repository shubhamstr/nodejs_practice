const http = require("http");
const fs = require("fs");
const requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");
const replaceVal = (tempval, orgval) => {
    let tempvalorg1 = orgval.main.temp - 273.15;
    let tempvalorg2 = orgval.main.temp_min - 273.15;
    let tempvalorg3 = orgval.main.temp_max - 273.15;
    let temp = tempval.replace("{%tempval%}", tempvalorg1.toFixed(2))
    temp = temp.replace("{%tempmin%}", tempvalorg2.toFixed(2))
    temp = temp.replace("{%tempmax%}", tempvalorg3.toFixed(2))
    temp = temp.replace("{%location%}", orgval.name)
    temp = temp.replace("{%country%}", orgval.sys.country)
    temp = temp.replace("{%tempstatus%}", orgval.weather[0].main)
    return temp;
}

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests("http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=53e026615dee8ba0f9291a3216e2c095")
            .on('data', (chunk) => {
                const wdata = JSON.parse(chunk);
                const arrdata = [wdata];
                // console.log(arrdata[0].main.temp)
                const realdata = arrdata.map((val) => replaceVal(homeFile, val)).join("");
                res.write(realdata);
            })
            .on('end', (err) => {
                if (err) return console.log('connection closed due to errors', err);
                res.end();
                console.log('end');
            });
    }
});

server.listen(8000, "127.0.0.1");