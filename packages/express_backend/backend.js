import express from 'express';

const app = express();
const port = 8000;

//express now set to use JSON
app.use(express.json());

//Endpoint URL and callback function set
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(
        `Example app listening on http://localhost:${port}`
    );
});