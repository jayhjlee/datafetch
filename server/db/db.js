const { Sequelize } = require("sequelize");

const conn = new Sequelize("postgres://localhost:5432/datafetch", {
	logging: false,
});

module.exports = conn;
