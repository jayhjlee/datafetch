const router = require("express").Router();
const jwt = require("jsonwebtoken");

const User = require("../db/user");

router.post("/login", async (req, res) => {
	try {
		const { username, password } = req.body;
		const foundUser = await User.findOne({ where: { username, password } });

		if (foundUser.username === username) {
			const payload = username + foundUser.email + password;
			const key = Date.now().toString();

			jwt.sign({ payload }, key, { algorithm: "HS256" }, (err, token) => {
				if (err) {
					res.json(err);
				} else {
					res.json({ token, isLoggedIn: true });
				}
			});
		}
	} catch (error) {
		res.json({ msg: "User is not found. Please check your credentials" });
	}
});

module.exports = router;
