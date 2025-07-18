import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { USER_API_POINT } from "../utils/constant";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
      email: "",
      password: "",
      role: "",
    });
    // console.log(formData);
    const navigate = useNavigate();
  
    const handleFormData = (e) => {
      setFormData(
        (prevData) =>
          (prevData = { ...prevData, [e.target.name]: e.target.value })
      );
    };
  const handleSubmitData= async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API_POINT}/login`,formData,{
        withCredentials:true
      });
      if(res.data.success){
        navigate('/');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(res.data.message)
      
    }
    
  }
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center mx-auto max-w-7xl">
        <form
          action=""
          onSubmit={handleSubmitData}
          className="w-1/2 border border-gray-200 rounded-md my-2 p-4"
        >
          <h1 className="font-bold text-xl mb-5">Login </h1>
          
          <div className="my-4">
            <Label className='my-1'>Email</Label>
            <Input type="email" value={formData.email} name='email' placeholder="patidar@gmail.com" onChange={handleFormData} />
          </div>
          
          <div className="my-4">
            <Label className='my-1'>Password</Label>
            <Input type="password" value={formData.password} name="password" placeholder="patidar" onChange={handleFormData}/>
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-6 my-5" >
              <div className="flex items-center space-x-2">
                <Input type='radio' name="role" value="student" className='cursor-pointer' id="r1" onChange={handleFormData}/>
                <Label htmlFor="r1" className='cursor-pointer'>Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input type={'radio'} name="role" value="recruiter" className='cursor-pointer' id="r2" onChange={handleFormData}/>
                <Label htmlFor="r2" className='cursor-pointer'>Recruiter</Label>
              </div>
            </RadioGroup>

          </div>
          <Button type="submit" className="w-full my-4">Login</Button>
          <span className="text-sm">Don't have an account? <Link to="/signup" className="text-blue-600" >Sign up</Link></span> 
        </form>
      </div>
    </div>
  );
};

export default Login;
