import { useState } from "react";
import Input from "./Input";

const Signup = (props) => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cnfPassword: "",
    date: "",
    checkbox: false,
  });
  const { firstName, lastName, email, password, cnfPassword, date } = inputs;

  const changeInputs = (e) => {
    setInputs({ 
      ...inputs,[e.target.name]:e.target.value
     });
  };

  const setCheck = (e) => {
    setInputs((prev)=>({
      ...inputs, 
      [e.target.name]:!inputs.checkbox
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputs.checkbox===false){
      alert("Agree with the terms and conditions");
      return;
    }
    console.log(inputs)
  };

  const classStyles =
    "border rounded border-current p-1.5 h-3/5 mb-2  hover:bg-slate-200";

  return (
    <div className="p-4 flex flex-row justify-center items-center h-screen ">
      <form className="w-screen md:w-4/5 lg:w-3/5 2xl:w-2/5 md:p-16 bg-white rounded-2xl p-5 shadow-2xl" onSubmit={onSubmit}>
        <div className="flex flex-row justify-center mb-10 text-2xl font-serif text-neutral-400 font-semibold">
          <h1>Signup</h1>
        </div>
        <div className="flex flex-row w-full">
          <Input
            placeholder="First Name"
            type="text"
            className={`${classStyles} w-3/6 mr-2`}
            onChange={changeInputs}
            value={firstName}
            name="firstName"
          />
          <Input
            placeholder="Last Name"
            type="text"
            className={`${classStyles} w-3/6 ml-2`}
            onChange={changeInputs}
            value={lastName}
            name="lastName"
          />
        </div>
        <Input
          placeholder="Email"
          type="email"
          className={`${classStyles} w-full`}
          onChange={changeInputs}
          value={email}
          name="email"
        />
        <Input
          placeholder="Password"
          type="password"
          className={`${classStyles} w-full`}
          onChange={changeInputs}
          pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
          value={password}
          name="password"
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          className={`${classStyles} w-full`}
          onChange={changeInputs}
          value={cnfPassword}
          pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
          name="cnfPassword"
        />
        <label htmlFor="agree" className="ml-2">
          Date of Birth
        </label>
        <Input
          type="date"
          className={`${classStyles} w-full`}
          onChange={changeInputs}
          value={date}
          name="date"
        />
        <div className="mb-2">
          <input
            type="checkbox"
            id="agree"
            className="mr-2 cursor-pointer ml-2"
            onClick={setCheck}
            value={inputs.checkbox}
            name="checkbox"
          />
          <label htmlFor="agree" className="cursor-pointer">
            I read and agree the terms and conditions
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-indigo-900 text-white p-2 rounded mb-1 w-20 ml-2"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
