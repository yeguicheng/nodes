const express = require("express");
const app = express();
app.get("/", (request, response) => {
    response.send("测试接口")
}).listen(3030, () => {
    console.log("Running Server Port 3030.....")
})