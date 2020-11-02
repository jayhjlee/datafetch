const router = require("express").Router();

/**
 * Route for each API goes here!
 *
 * router.use(<route-name>, require(<file-name>))
 *  */

router.use("/user", require("./user"));

module.exports = router;
