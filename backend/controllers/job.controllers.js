import { Job } from "../models/job.model.js";

//admin
export const postjob = async (req, res) => {
  try {
    const {
      title,
      description,
      salary,
      location,
      requirements,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;
    const userId = req.id;
    if (
      !title ||
      !description ||
      !salary ||
      !location ||
      !requirements ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "Something is missing",
        status: false,
      });
    }
    const job = await Job.create({
      title,
      description,
      salary: Number(salary),
      location,
      requirements,
      jobType,
      experienceLevel: experience,
      position,
      company: compnayId,
      created_by: userId,
    });
    return res.status(200).json({
      message: "Job created successfully",
      job,
      status: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//student
export const getAllJobs = async (req, res) => {
  try {
    const keywords = req.query.keywords || "";
    const query = {
      $or: [
        { title: { $regex: keywords, $option: "i" } },
        { description: { $regex: keywords, $option: "i" } },
      ],
    };
    const jobs = await Job.find(query).populate({path:'company'}).sort({createdAt:-1});
    if (!jobs) {
      return res.status(404).json({
        message: "Jobs not found.",
        status: false,
      });
    }
    return res.status(200).json({
      jobs,
      status: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//student
export const getJobById =async(req,res)=>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                message:'Jobs not found',
                status:false
            })
        }
        return res.status(200).json({
            job,
            status:true
        })
        
    } catch (error) {
        console.log(error);
        
    }
}

//admin kitne job create kra hai  abhi tk
export const getAdminJobs = async(req,res)=>{
    try {
        const adminId = req.id;
        const job = await Job.find({created_by:adminId});
        if(!job){
             return res.status(404).json({
                message:'Jobs not found',
                status:false
            })
        }
        return res.status(200).json({
            job,status:true
        })
    } catch (error) {
        console.log(error);
        
    }
}