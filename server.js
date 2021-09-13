const express = require("express");
const path = require("path");
// const uniqid = require("uniqid");
const fs = require("fs");

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get("/api/notes", (req, res) => {

try {
    const data = fs.readFileSync("./db/db.json", "utf8");
    
    res.json(JSON.parse(data));
} catch (error) {
    res.json(error);
}
});

app.post("/api/notes", (req, res) => {
    const note = fs.readFileSync("./db/db.json", "utf8");
    const noteParsed = JSON.parse(note); 
    
    noteParsed.push(req.body);
    console.log(noteParsed);
    fs.writeFileSync("./db/db.json", JSON.stringify(noteParsed));

    res.send("Your note has been sent");

})

app.get("/notes", (req, res) => 
    res.sendFile(path.join(__dirname, "public/notes.html")));


app.get("*", (req, res) => 
    res.sendFile(path.join(__dirname, "public/index.html")));










app.listen(PORT, () => 
    console.log(`Server is listening on ${PORT}`));
