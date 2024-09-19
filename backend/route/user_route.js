import { Router } from "express";
import { signup,login } from "../controller/user_controller.js";


let Userrouter=Router();
Userrouter.post('/signup',signup)
Userrouter.post('/login',login)
export default Userrouter;
