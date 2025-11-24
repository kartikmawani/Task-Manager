import express from 'express'
const Router=express.Router();

import ValidateRegistration from '../Middleware/AuthMiddleware.js'
import {RegisterController,createTask,LoginController,DeleteTask,editController} from '../Controller/Controller.js'
Router.post('/Register',ValidateRegistration,RegisterController)
Router.post('/Login',LoginController)
Router.post('/Task',createTask)
Router.delete('/Delete/:id',DeleteTask)
Router.put('/Edit/:id',editController)

export default Router;