const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const connectionString = ""; // MongoDB connection string
const client = new MongoClient(connectionString);

client.connect();

const db = client.db("bookmark-app");
const collection = db.collection("users");

app.get("/", (req, res) => {
    res.json("Server is running!");
});

app.get("/usernames", async (req, res) => {
    try {
        const users = await collection.find().toArray();
        const usernames = users.map(user => user.username);
        res.json(usernames);
    } catch (error) {
        console.log(error);
    }
});

app.get("/bookmark/get/:username", async (req, res) => {
    try {
        const user = await collection.findOne({ username: req.params.username });
        res.json(user.bookmarks);
    } catch (error) {
        console.log(error);
    }
});

app.post("/signup", async (req, res) => {
    try {
        await collection.insertOne(req.body); // password not encrypted
        res.json("New user added.");
    } catch (error) {
        console.log(error);
    }
});

app.post("/login", async (req, res) => {
    try {
        const userLogin = await collection.findOne({ username: req.body.usernameLogin });
        if (userLogin !== null) {
            if (userLogin.password === req.body.passwordLogin) {
                res.json(true);
            } else {
                res.json(false);
            }
        } else {
            res.json(null);
        }
    } catch (error) {
        console.log(error);
    }
});

app.put("/bookmark/add/:username", async (req, res) => {
    try {
        await collection.findOneAndUpdate({ username: req.params.username }, { $set: req.body });
        res.json("Bookmark added.");
    } catch (error) {
        console.log(error);
    }
});

app.put("/bookmark/delete/:username", async (req, res) => {
    try {
        await collection.findOneAndUpdate({ username: req.params.username }, { $set: req.body });
        res.json("Bookmark deleted.");
    } catch (error) {
        console.log(error);
    }
});

app.put("/bookmark/edit/:username", async (req, res) => {
    try {
        await collection.findOneAndUpdate({ username: req.params.username }, { $set: req.body });
        res.json("Bookmark edited.");
    } catch (error) {
        console.log(error);
    }
});

app.delete("/user/delete/:username", async (req, res) => {
    try {
        await collection.findOneAndDelete({ username: req.params.username });
        res.json("User deleted.");
    } catch (error) {
        console.log(error);
    }
});

app.put("/user/update/username/:username", async (req, res) => {
    try {
        await collection.findOneAndUpdate({ username: req.params.username }, { $set: req.body });
        res.json("Username updated.");
    } catch (error) {
        console.log(error);
    }
});

app.put("/user/update/password/:username", async (req, res) => {
    try {
        await collection.findOneAndUpdate({ username: req.params.username }, { $set: req.body });
        res.json("Password updated.");
    } catch (error) {
        console.log(error);
    }
});

app.listen(process.env.PORT || 5000);