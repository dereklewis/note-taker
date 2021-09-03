const express = require("express")
const json = require("./db/db.json")

const PORT = 3001;
const app = express()

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});







app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

