import { get } from "mongoose";

const getAllBooks = (req, res) => {
    const books = [
        {
            id: 1,
            name: "Karamazof Brothers"
        },
        {
            id: 2,
            name: "Call of the wild",
        },
    ];
    res.json(books);
};

export {
    getAllBooks
}