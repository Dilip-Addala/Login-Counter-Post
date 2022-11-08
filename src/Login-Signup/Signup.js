import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import { signup } from "./loginSignupSlice";
import store from "../store";
// import { db } from "./firebase-config";
// import { collection, addDoc,getDocs} from "firebase/firestore";
import { nanoid } from "@reduxjs/toolkit";

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

  // const [userDbData,setUsersDbData] = useState([])


  const { firstName, lastName, email, password, cnfPassword, date, checkbox, } =
    inputs;

  // const firestoreDataRef = collection(db, "users");

  const changeInputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const setCheck = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: !inputs.checkbox,
    });
  };

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(firestoreDataRef);
  //     setUsersDbData(data.docs.map(item=>({...item.data()})))
  //   };
  //   getUsers();
  // });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (checkbox === false) {
      alert("Agree with the terms and conditions");
      return;
    } else if (password !== cnfPassword) {
      alert("Passwords don't match");
      return;
    }

    const dbDataCheck = JSON.parse(localStorage.getItem("User"));

    dispatch(
      signup({
        firstName,
        lastName,
        password,
        cnfPassword,
        date,
        email,
        id: nanoid(),
      })
    );

    const stateData = store.getState();
    const userDetails = stateData.user.details;
    console.log(stateData)
    

    const arr = [];
    console.log(userDetails)

    if (dbDataCheck === null) {
      // await addDoc(firestoreDataRef,userDetails)
      arr.push(userDetails);
      // console.log(userDetails)
      localStorage.setItem("User", JSON.stringify(arr));
      alert("Signup successful");
      navigate("/")
    } else if (dbDataCheck.every((ele) => ele.email !== email)) {
      // await addDoc(firestoreDataRef,userDetails)
      dbDataCheck.push(userDetails);
      localStorage.setItem("User", JSON.stringify(dbDataCheck));
      alert("Signup successful");
      navigate("/")
    } else {
      alert("User already have an account");
      return;
    }
  };

  const classStyles =
    "border rounded border-current p-1.5 h-3/5 mb-2  hover:bg-slate-200";

  return (
    <div className="p-4 flex flex-row justify-center items-center h-screen ">
      <form
        className="w-screen md:w-4/5 lg:w-3/5 2xl:w-2/5 md:p-16 bg-white rounded-2xl p-5 shadow-2xl"
        onSubmit={onSubmit}
      >
        <div className="flex flex-row justify-center mb-10 text-2xl font-serif text-neutral-400 font-semibold">
          <h1>Signup</h1>
        </div>
        <div className="flex flex-row w-full">
          <Input
            label="First Name"
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
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
          value={password}
          name="password"
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          className={`${classStyles} w-full`}
          onChange={changeInputs}
          value={cnfPassword}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
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
