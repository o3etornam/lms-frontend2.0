const courseCard2 = ({ title, lecturerName }) => {
  return (
    <div className="w-[200px] h-[200px] border border-white shadow-xl rounded-[10px]">
      <div className="bg-indigo-600 w-full h-[120px] mb-3 overflow-hidden">
        <img src="" alt="" />
      </div>
      <div className="p-2">
        <h4 className="text-green-500">{title}</h4>
        <p>{lecturerName}</p>
      </div>
    </div>
  );
};

export default courseCard2;
