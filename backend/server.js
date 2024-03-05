const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello from express server!")
})

app.listen(port, () => {
    console.log(`Server started at ${port}`);
})