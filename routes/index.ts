var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (res: any) {
  res.render("index", { title: "Express" });
});

router.post("/", (request: any, response: any) => {
  response.send("This is request: " + request);
});

module.exports = router;
