import {useNavigate} from "react-router-dom"

const Dashboard = () => {
    const navigate = useNavigate()
    const buttonStyling = "bg-blue-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 rounded-xl text-xl text-slate-100 font-bold cursor-pointer ml-4 mr-4 p-5"
  return (
    <div className="h-screen bg-gradient-to-t from-purple-300 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold font-serif shadow-xl rounded-xl bg-transparent">Choose Application</h1>
      <div className="flex justify-center items-center h-3/4 w-4/5">
        <button className={buttonStyling} onClick={()=>navigate("/counter")}>Counter</button>
        <button className={buttonStyling} onClick={()=>navigate("/blogpost")}>Blogpost</button>
      </div>
    </div>
  );
};

export default Dashboard