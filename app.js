const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>Cloud Engineer Assessment</h1>
        <h2>Deployed on AWS EC2</h2>
        <p>CI/CD using GitHub Actions</p>
    `);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
