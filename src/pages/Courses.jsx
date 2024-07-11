import React from "react";
import Sidebar, { SidebarItem } from "../components/SideBar";
import { useParams } from "react-router-dom";
import {
  NotebookPen,
  UserCircle,
  LayoutDashboard,
  Settings,
  BookOpenCheck,
  BookCheck,
  Speech,
} from "lucide-react";
import CoursesHero from "../components/CoursesHero";
import { coursesDB } from "../components/Hero";
import Todo from "../components/Todo";

const reminders = [
  "Elective Mathematics Assignment Due in 24hrs",
  "Elective Mathematics Assignment Due in 24hrs",
];

function Courses() {
  const { id } = useParams();
  const course = coursesDB.find((course) => course.id == id);
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<UserCircle size={20} />} text="Profile" to={""} />
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          active
          to={"/"}
        />
        <SidebarItem icon={<Speech size={20} />} text="Discussion" to={""} />
        <SidebarItem icon={<NotebookPen size={20} />} text="Grade" to={""} />
        <SidebarItem icon={<BookCheck size={20} />} text="Quiz" to={""} />
        <SidebarItem
          icon={<BookOpenCheck size={20} />}
          text="Resources"
          to={""}
        />
        <SidebarItem
          icon={<Settings size={20} />}
          text="Settings"
          to={"/settings"}
        />
      </Sidebar>

      <div className="flex justify-between">
        <CoursesHero course={course} />
        <Todo className="" tasks={reminders} name="Announcement" color="gray" />
      </div>
    </div>
  );
}

export default Courses;
