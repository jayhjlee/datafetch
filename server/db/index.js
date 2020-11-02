const conn = require("./db");
const User = require("./user");
const Schema = require("./schema");
const Column = require("./column");

Column.belongsTo(Schema);
Schema.belongsTo(User);

module.exports = {
	conn,
	User,
	Schema,
	Column,
};
