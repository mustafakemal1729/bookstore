const getAllBooks = (req, res) => {
    const books = [
        {
            id: 1,
            name: "Karamazov Brothers"
        },
        {
            id: 2,
            name: "Family Happiness"
        },
    ];

    res.json(books);
}

export {
    getAllBooks
};