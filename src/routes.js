const express = require('express');
const routes = express();

routes.get("/", (req, res) => res.sendFile(__dirname+"/views/index.html"));
routes.get("/job", (req, res) => res.sendFile(__dirname+"/views/job.html"));
routes.get("/job/edit", (req, res) => res.sendFile(__dirname+"/views/job-edit.html"));
routes.get("/profile", (req, res) => res.sendFile(__dirname+"/views/profile.html"));

module.exports = routes;