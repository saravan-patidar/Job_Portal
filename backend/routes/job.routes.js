import express from 'express';
import { getAdminJobs, getAllJobs, getJobById, postjob } from '../controllers/job.controllers.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
const router = express.Router();

router.route('/post').post(isAuthenticated,postjob);
router.route('/get').get(isAuthenticated,getAllJobs);
router.route('/getadminjobs').get(isAuthenticated,getJobById);
router.route('/get/:id').get(isAuthenticated,getAdminJobs);

export default router;