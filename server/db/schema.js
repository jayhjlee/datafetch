const { DataTypes } = require("sequelize");
const conn = require("./db");

const Schema = conn.define("Schema", {
	username: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	createdAt: {
		type: DataTypes.DATE,
		allowNull: true,
	},
	updatedAt: {
		type: DataTypes.DATE,
		allowNull: true,
	},
});

module.exports = Schema;
