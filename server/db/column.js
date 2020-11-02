const { DataTypes } = require("sequelize");
const conn = require("./db");

const Column = conn.define("Column", {
	name: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	dataType: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	createdAt: { type: DataTypes.DATE, allowNull: true },
	updatedAt: { type: DataTypes.DATE, allowNull: true },
});

module.exports = Column;
