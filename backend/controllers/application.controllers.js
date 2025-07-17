import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const { id: jobId } = req.params.id;
    if (!jobId) {
      return res.status(400).json({
        message: "Job id is required",
        status: false,
      });
    }
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied this job.",
        status: false,
      });
    }
    //check if job exits
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(400).json({
        message: "Job not found",
        status: false,
      });
    }
    //create a new application
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });
    job.applications.push(newApplication._id);
    await job.save();
    return res.status(201).json({
      message: "Job applied successfully",
      staus: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const applications = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });

    if (!applications) {
      return res.status(400).json({
        message: "No applications",
        status: false,
      });
    }
    return res.status(200).json({
      applications,
      status: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// admin watch how many user are applied jobs
export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findOne(jobId).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
      },
    });

    if (!job) {
      return res.status(400).json({
        message: "Job not found",
        status: false,
      });
    }
    return res.status(200).json({
        job,
        status: true,
      });
  } catch (error) {
    console.log(error);
  }
};


export const updateStatus = async(req,res)=>{
    try {
        const {status} =req.body;
        const applicationId = req.params.id;

        if(!status){
            return res.status(400).json({
                message:'Status is required',
                status:false
            })
        }
        const application = await Application.findOne({_id:applicationId});
        if(!application){
            return res.status(400).json({
                message:'Application not found',
                status:false
            })
        }

        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message:'Status updated successfully',
            status:true
        })
    } catch (error) {
        console.log(error);
        
    }
}