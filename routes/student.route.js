let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
  
// Student Model
let studentSchema = require("../models/Student");
  
// CREATE Student
router.post("/create-student", (req, res, next) => {
  /*studentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });*/
  /*studentSchema.create(req.body).then((error, data)=>{
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });*/
  studentSchema.create(req.body)
  .then(nUser=>{
    console.log('New user created', nUser);
    res.json(nUser)
  }).catch(error=>{
    console.log('Error creating user', error);
  });
});
  
// READ Students
router.get("/", (req, res, next) => {
  /*studentSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });*/
  /*studentSchema.find().then((error, data)=>{
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  })*/
  studentSchema.find()
  .then(data=>{
    res.json(data);
  }).catch(error=>{
    return next(error);
  });
});
  
// UPDATE student
//router
//.route("/update-student/:id")
  // Get Single Student
  /*.get((req, res) => {
    studentSchema.findById(
        req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });*/
    router.get("/update-student/:id", (req, res) => {
      studentSchema.findById(req.params.id)
      .then(data=>{
        res.json(data);
      }).catch(error=>{
        return next(error);
      });
    });
  
  // Update Student Data
  /*.put((req, res, next) => {
    studentSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
          console.log(error);
        } else {
          res.json(data);
          console.log("Student updated successfully !");
        }
      }
    );
  });*/
  router.put("/update-student/:id", (req, res, next) => {
    studentSchema.findByIdAndUpdate((req.params.id),{
      $set: req.body,
    })
        //
      .then (data => {
        res.json(data);
        console.log("Student updated successfully !");
      }).catch (error=>{
        return next(error);
        console.log(error);
      })
  });
  
// Delete Student
router.delete("/delete-student/:id", 
(req, res, next) => {
  /*studentSchema.findByIdAndRemove(
      req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });*/
  studentSchema.findByIdAndRemove(req.params.id)
  .then(data => {
    res.status(200).json({
      msg: data,
    })
  }).catch(error=>{
    return next(error);
  })
});
  
module.exports = router;