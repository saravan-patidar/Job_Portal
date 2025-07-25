import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../middlewares/imageUpload.js";

const router = express.Router();

router.route('/register').post(upload.single('logo'),register);
router.route('/login').post(login);
router.route('/profile/update').post(isAuthenticated ,updateProfile);
router.route('/logout').post(logout);


export default router;