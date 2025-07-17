import express from 'express';
import { getCompany, getCompanyById, registerCompany, updateCompany } from '../controllers/company.controllers.js';
import isAuthenticated from '../middlewares/isAuthenticated.js'
const router = express.Router();

router.route('/register').post(isAuthenticated ,registerCompany);
router.route('/gety').get(isAuthenticated,getCompany);
router.route('/get/:id').get(isAuthenticated,getCompanyById);
router.route('/update/:id').put(isAuthenticated,updateCompany);

export default router;