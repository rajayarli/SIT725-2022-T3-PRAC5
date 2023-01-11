// let client=require('../dbConnect')
// let projectCollection;

let projectModel=require("../models/project")

// setTimeout(() =>{
    
//     projectCollection=client.mangoClient.db().collection("project");

// },2000)

// const insertProjects = (project, callback) => {
//     projectCollection.insert(project, callback);
//   };

//   const getProjects = (callback) => {
//     projectCollection.find({}).toArray(callback);
//   };

  //create project...
  const createProject=(req,res)=>{
    console.log("New Project added", req.body);
    var newProject = req.body;
    projectModel.insertProjects(newProject, (err, result) => {
      if (err) {
        res.json({ statusCode: 400, message: err });
      } else {
        res.json({
          statusCode: 200,
          message: "Project Successfully added",
          data: result,
        });
      }
    });
  }
  // retrive project...
  const retriveProjects=(req,res)=>{
  projectModel.getProjects((err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({ statusCode: 200, message: "Success", data: result });
    }
  })
}
module.exports={retriveProjects,createProject}