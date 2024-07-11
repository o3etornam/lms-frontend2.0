import React from "react";

function CoursesHero({ course }) {
  return (
    <div className="pl-3 mx-4 w-4/5">
      <h1 className="text-3xl font-bold  text-gray-600 my-4">{course.title}</h1>
      <section className="my-4">
        <h1 className="text-2xl font-semibold text-gray-600 my-4 border-b-2 border-green-500">
          Course Description
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae
          asperiores eaque quibusdam quae fugiat voluptates animi laborum sed?
          Hic perferendis iusto deleniti doloremque quibusdam odio cupiditate
          eaque dignissimos deserunt.
        </p>
      </section>
      <section className="">
        <h1 className="text-2xl font-semibold text-gray-600 my-4 border-b-2 border-green-500">
          Course Outline
        </h1>
        <p className="text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
          harum nulla corporis, iste eos repellendus quibusdam. Pariatur quis
          laudantium numquam. Cumque laborum quas numquam illo perferendis culpa
          qui et dolores.
        </p>
        <ul className="text-sm list-disc pl-3 mt-2">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            perferendis nobis quis dicta dolore voluptas.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            perferendis nobis quis dicta dolore voluptas.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            perferendis nobis quis dicta dolore voluptas.
          </li>
        </ul>
      </section>
      <section className="">
        <div className="w-[250] my-4">
          <h1 className="text-2xl font-semibold text-gray-600 my-4 mb-0 border-b-2 border-green-500">
            Instructor Details
          </h1>
          <p className="text-sm italic ">{course.lecturerName}</p>
          <p className="text-sm italic ">Leboab6@email.com</p>
        </div>
      </section>
    </div>
  );
}

export default CoursesHero;
