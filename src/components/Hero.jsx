import React from "react";
import CourseCard2 from "./Coursecard2";
import { NavLink } from "react-router-dom";
import { useUser } from "./UserProvider";

export const coursesDB = [
  {
    title: "Core Mathematics",
    lecturerName: "Lebo BreadMan",
    id: 1,
  },
  {
    title: "Integrated Science",
    lecturerName: "Lebo BreadMan",
    id: 2,
  },
  {
    title: "English",
    lecturerName: "Lebo BreadMan",
    id: 3,
  },
  {
    title: "Social Studies",
    lecturerName: "Lebo BreadMan",
    id: 4,
  },
  {
    title: "Physics",
    lecturerName: "Lebo BreadMan",
    id: 5,
  },
  {
    title: "Chemistry",
    lecturerName: "Lebo BreadMan",
    id: 4,
  },
];

export default function () {
  const { user } = useUser();

  return (
    <div className=" flex flex-col pl-3 mt-4">
      <section className="text-gray-600">
        <h1 className="text-3xl font-bold">Courses</h1>
        <div className="flex gap-3 flex-wrap mt-4">
          {coursesDB.map((course) => (
            <NavLink to={`/user/${user.id}/courses/${course.id}`}>
              <div key={course.id}>
                <CourseCard2
                  title={course.title}
                  lecturerName={course.lecturerName}
                  id={course.id}
                />
              </div>
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  );
}
