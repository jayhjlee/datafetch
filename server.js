const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { conn } = require("./server/db");

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/build/static")));

app.use(cookieParser());

app.use("/api", require("./server/api"));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "static/index.html"));
});

// Below lines need to be modified in order to sync up with your db with your configuration.
conn.sync({ alter: true }).then(() => {
	app.listen(PORT, () => {
		console.log(`Server is running at port ${PORT}`);
	});
});
