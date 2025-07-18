import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    logo: null,
  });
  // console.log(formData);

  const handleFormData = (e) => {
    setFormData(
      (prevData) =>
        (prevData = { ...prevData, [e.target.name]: e.target.value })
    );
  };

  const handleFileData = (e) => {
    if (e.target.files) {
      setFormData((prevData) => ({
        ...prevData,
        logo: e.target.files[0],
      }));
    }
  };

  const handleSubmitData= async(e)=>{
    e.preventDefault();
    const newFormData = new FormData();
    newFormData.append('fullName',formData.fullName)
    newFormData.append('email',formData.email)
    newFormData.append('phoneNumber',formData.phoneNumber)
    newFormData.append('password',formData.password)
    newFormData.append('role',formData.role)
    newFormData.append('logo',formData.logo)
    try {
      const res = await axios.post('http://localhost:5000/api/v1/user/register',newFormData)
      console.log(res,'response');
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center mx-auto max-w-7xl">
        <form
        onSubmit={handleSubmitData}
          action=""
          className="w-1/2 border border-gray-200 rounded-md my-2 p-4"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-4">
            <Label className="my-1">Full Name</Label>
            <Input
              type="text"
              value={formData.fullName}
              name="fullName"
              placeholder="patidar"
              onChange={handleFormData}
            />
          </div>
          <div className="my-4">
            <Label className="my-1">Email</Label>
            <Input
              type="email"
              value={formData.email}
              name="email"
              placeholder="patidar@gmail.com"
              onChange={handleFormData}
            />
          </div>
          <div className="my-4">
            <Label className="my-1">Phone Number</Label>
            <Input
              type="text"
              value={formData.phoneNumber}
              name="phoneNumber"
              placeholder="12346757657"
              onChange={handleFormData}
            />
          </div>
          <div className="my-4">
            <Label className="my-1">Password</Label>
            <Input
              type="password"
              value={formData.password}
              name="password"
              placeholder="patidar"
              onChange={handleFormData}
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer"
                  id="r1"
                  onChange={handleFormData}
                />
                <Label htmlFor="r1" className="cursor-pointer">
                  Student
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type={"radio"}
                  name="role"
                  value="recruiter"
                  className="cursor-pointer"
                  id="r2"
                  onChange={handleFormData}
                />
                <Label htmlFor="r2" className="cursor-pointer">
                  Recruiter
                </Label>
              </div>
            </RadioGroup>

            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                className={"cursor-pointer"}
                name="logo"
                onChange={handleFileData}
              />
            </div>
          </div>
          <Button type="submit" className="w-full my-4">
            Sign Up
          </Button>
          <span className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
