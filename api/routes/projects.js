const express = require("express");
const router = express.Router();

const { checkAuth } = require("../middlewares/authentication.js");
const jwt = require("jsonwebtoken");


import Project from "../models/project";

//POST -> req.body
//GET -> req.query

//******************
//**** A P I *******
//******************

//NEW DEVICE
router.post("/project", checkAuth, async (req, res) => {
    try {
      var newProject = req.body.newProject;
      
  
      const device = await Project.create(newProject);
  
      
  
      const response = {
        status: "success"
      };
  
      return res.json(response);
    } catch (error) {
      console.log("ERROR CREATING NEW PROJECT");
      console.log(error);
  
      const response = {
        status: "error",
        error: error
      };
  
      return res.status(500).json(response);
    }
  });




module.exports = router;