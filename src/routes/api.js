const express=require("express");
const UsersController=require("../controller/UsersController");
const TasksController=require("../controller/TasksController");
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");

const router=express.Router();



//Api routeing end point

router.post("/registration",UsersController.registration);

router.post("/login",UsersController.login);

router.post("/ProfileUpdate",AuthVerifyMiddleware,UsersController.ProfileUpdate);

router.post("/createTask",AuthVerifyMiddleware,TasksController.createTask);

router.get("/deleteTask/:id",AuthVerifyMiddleware,TasksController.deleteTask);

router.get("/updateTaskStatus/:id/:status",AuthVerifyMiddleware,TasksController.updateTaskStatus);

router.get("/listTaskByStatus/:status",AuthVerifyMiddleware,TasksController.listTaskByStatus);

router.get("/taskStatusCount",AuthVerifyMiddleware,TasksController.taskStatusCount);


module.exports=router;
