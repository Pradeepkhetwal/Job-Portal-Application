import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Contact, Mail, Pen } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";

const skills = ["HTML", "CSS", "Javascript", "NodeJs", "ReactJs"];
const isResume = true;
export default function Profile() {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"></AvatarImage>
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div>
          <div className="flex gap-3 my-2 mx-4">
            <Mail></Mail>
            <span>{user?.email}</span>
          </div>
          <div className="flex gap-3 my-2 mx-4">
            <Contact></Contact>
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          {user?.profile?.skills.length != 0 ? (
            user?.profile?.skills.map((items, index) => (
              <Badge key={index}>{items}</Badge>
            ))
          ) : (
            <span>Skills not Available</span>
          )}
        </div>
        <div className="grid w-full max-w-sm item-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank "
              href={user?.profile?.resume}
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              {user?.Profile.resumeOriginalName}
            </a>
          ) : (
            <span>Resume Not Available</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1>AppliedJobs</h1>
        <AppliedJobTable></AppliedJobTable>
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
}
