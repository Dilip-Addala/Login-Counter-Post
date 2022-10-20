import { Field } from "redux-form";
import "./signin.css";

const SignInForm = (props) => {
  return (
    <div className="flex flex-row justify-center items-center bg-gray-900 cnt">
      <form className="border-md rounded form w-2/5">
        <div>
          <label className="label">Username</label>
          <input
            className="input"
            name="firstName"
            conmponent="input"
            placeholder="First Name"
            type="text"
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
