import express from "express";
import bookroute from "./route/bookroute.js";
import connectDB from "./config/db.js";
const app = express();

const port = 3003


app.use("/api/v1/books", bookroute);

try {
    await connectDB();

    app.listen(port, () => {
        console.log(`Server started at ${port}`)
    });
}

catch(error) {
    process.exit(1);
}