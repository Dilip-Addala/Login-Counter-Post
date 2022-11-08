import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
// import {getDocs,collection} from "firebase/firestore"
import Input from "../Input";
// import {db} from "./firebase-config"
import { useDispatch } from "react-redux";
import { login } from "./loginSignupSlice";

const Login = () => {
  const [loginInputs, setLoginInputs] = useState({
    email: "",
    password: "",
  });
  // const [userDbData,setUsersDbData] = useState([])
  const { email, password } = loginInputs;
  const navigate = useNavigate();

  // const firestoreDataRef = collection(db, "users");

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(firestoreDataRef);
  //     setUsersDbData(data.docs.map(item=>({...item.data()})))
  //   };
  //   getUsers();
  // });


  const setValues = (e) => {
    setLoginInputs({
      ...loginInputs,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const doSubmit = (e) => {
    e.preventDefault();
    // console.log(userDbData )

    dispatch(
      login({
        email,
        password
      })
    );
    const dbData = JSON.parse(localStorage.getItem("User"));

    if (dbData === null || dbData.every(val => val.email!== email)) {
      alert("We cannot find the user? Please signup and try again");
      navigate("/signup")
      return;
    }else if (dbData.map(user => {
      if (user.email === email){
        if (user.password !== password){
          alert("Incorrect password. Please try again...");
        }else{
          navigate("/dashboard")
          console.log("User Logged in successfully")
        }
      }
      return null;
    })) {
      return null ;
    }
  };

  const css =
    "border rounded border-current h-3/5 mb-2 w-full p-1.5 hover:bg-slate-200";

  return (
    <div className="flex flex-row justify-center items-center h-screen md:p-2">
      <form
        className="w-screen md:w-4/5 lg:w-3/5 2xl:w-2/5 loginForm bg-white p-20 rounded-2xl shadow-2xl"
        onSubmit={doSubmit}
      >
        <div className="flex flex-row justify-center mb-10 text-2xl font-serif text-neutral-400 font-semibold">
          <h1>Login</h1>
        </div>
        <Input
          placeholder="Email"
          type="email"
          className={css}
          onChange={setValues}
          value={email}
          name="email"
        />
        <Input
          placeholder="Password"
          type="password"
          className={css}
          onChange={setValues}
          value={password}
          name="password"
        />
        <button
          type="submit"
          className="loginBtn hover:bg-indigo-900 bg-blue-600 text-white p-2 rounded mb-1 w-20 mt-2"
        >
          Login
        </button>
        <p>
          New User?{" "}
          <Link to="/signup" className="underline">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
