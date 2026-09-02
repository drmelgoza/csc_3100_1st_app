import express from 'express';

const app = express();
const port = 8000;

//express now set to use JSON
app.use(express.json());

//Endpoint URL and callback function set
app.get("/", (req, res) => {
    res.send("Hello World!");
});

//users data structure
const users = {
    users_list: [
        {
            id: "xyz789",
            name: "Charlie",
            job: "Janitor"
        },
        {
            id: "abc123",
            name: "Mac",
            job: "Bouncer"
        },
        {
            id: "ppp222",
            name: "Mac",
            job: "Professor"
        },
        {
            id: "yat999",
            name: "Dee",
            job: "Aspring actress"
        },
        {
            id: "zap555",
            name: "Dennis",
            job: "Bartender"
        }
    ]
}

app.get("/users", (req, res) => {
    res.send(users);
});

app.listen(port, () => {
    console.log(
        `Example app listening on http://localhost:${port}`
    );
});