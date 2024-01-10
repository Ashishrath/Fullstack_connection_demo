import express from 'express';

const app = express();

const port = process.env.PORT || 5000;

app.get('/api/content', (req, res) => {
    const testArray = [
        {
            id: 1,
            title: "Title-1"
        },
        {
            id: 2,
            title: "Title-2"
        },
        {
            id: 3,
            title: "Title-3"
        },
    ]
    res.send(testArray);
})

app.listen(port, (req, res) => {
    console.log(`Server is running on port: ${port}`);
})