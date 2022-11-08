import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./postSlice";
import { nanoid } from "@reduxjs/toolkit";
import Input from "../Input";

const options = [
  { id: 0, name: "Unknown" },
  { id: 1, name: "Gosel" },
  { id: 2, name: "Rafiq" },
  { id: 3, name: "Abhishek" },
];

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState(options[0].name);

  const dispatch = useDispatch();

  const classStyle = "mb-2 h-10 p-3 text-xl bg-slate-200";

  const emptyInputsCheck = title === "" || description === "";

  const submitPost = (e) => {
    e.preventDefault();
    if (!emptyInputsCheck) {
      dispatch(
        addPost({
          id: nanoid(),
          title,
          description,
          author,
          time:new Date().toISOString(),reactions: {
            thumbsup: 0,
            loveIt: 0,
            laugh: 0,
            fear: 0,
            shock: 0,
          },
        })
      );
      setTitle("");
      setDescription("");
    }
  };

  const btnBgColor = emptyInputsCheck ? "bg-slate-300" : "bg-blue-600";

  return (
    <form className="flex flex-col w-3/4" onSubmit={submitPost}>
      <Input
        value={title}
        type="text"
        placeholder="Enter Title"
        className={classStyle}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        value={description}
        type="text"
        placeholder="Enter Description"
        className={classStyle}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        value={author}
        className={`h-14 ${classStyle}`}
        onChange={(e) => setAuthor(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.id}>{option.name}</option>
        ))}
      </select>
      <button
        type="submit"
        className={`${btnBgColor} p-3 font-semibold text-xl text-white mb-10 border-none rounded-md shadow-md`}
        disabled={emptyInputsCheck}
      >
        Add post
      </button>
    </form>
  );
};

export default AddForm;
