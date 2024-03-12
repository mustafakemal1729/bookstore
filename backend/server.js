import express from "express";
const app = express();

const port = 3003


app.get("/", (req, res) => {
    res.send("hello and welcome from the backend!")
});

app.listen(port, () => {
    console.log(`Server started at ${port}`)
})