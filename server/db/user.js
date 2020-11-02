const { DataTypes } = require("sequelize");
const conn = require("./db");

const User = conn.define("User", {
	firstName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	lastName: { type: DataTypes.STRING, allowNull: false },
	username: { type: DataTypes.STRING, allowNull: false, unique: true },
	password: { type: DataTypes.STRING, allowNull: false, is: /^[0-9a-f]{64}$/i },
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		isEmail: true,
		unique: true,
	},
	createdAt: { type: DataTypes.DATE, allowNull: true },
	updatedAt: { type: DataTypes.DATE, allowNull: true },
});

module.exports = User;
