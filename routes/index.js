const router = require("express").Router();
const express = require("express");

const apiRoutes = require("./apiRoutes");
router.use("/api", apiRoutes);

module.exports = router;
