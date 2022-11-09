import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postSlice";
import { nanoid } from "@reduxjs/toolkit";
import Input from "../Input";
import { postUsersList } from "../users/usersSlice";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const postUsers = useSelector(postUsersList);

  let name;
  if (postUsers.length !== 0) {
    name = postUsers[0].name;
  }
  const [author, setAuthor] = useState(name);

  let getUserIdByName;
  const selectUser = postUsers.find((user) => user.name === author);
  if (selectUser) {
    getUserIdByName = selectUser.id;
  }

  const dispatch = useDispatch();

  const submitPost = (e) => {
    e.preventDefault();
    if (!emptyInputsCheck) {
      dispatch(
        addPost({
          id: nanoid(),
          title,
          body: description,
          userId: getUserIdByName,
          time: new Date().toISOString(),
          reactions: {
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

  const emptyInputsCheck = title === "" || description === "";

  const btnBgColor = emptyInputsCheck ? "bg-slate-300" : "bg-blue-600";

  const inputStyle =
    "mb-2 h-14 p-3 text-xl bg-slate-200 border border-yellow-500";

  return (
    <form className="flex flex-col w-3/4" onSubmit={submitPost}>
      <label htmlFor="title" className="text-xl font-semibold text-gray-400">
        Title
      </label>
      <Input
        id="title"
        value={title}
        type="text"
        placeholder="Enter Title"
        className={inputStyle}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label
        htmlFor="description"
        className="text-xl font-semibold text-gray-400"
      >
        Description
      </label>
      <Input
        id="description"
        value={description}
        type="text"
        placeholder="Enter Description"
        className={inputStyle}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="author" className="text-xl font-semibold text-gray-400">
        Author
      </label>
      <select
        id="author"
        value={author}
        className={`h-14 ${inputStyle}`}
        onChange={(e) => setAuthor(e.target.value)}
      >
        {postUsers.map((option) => (
          <option key={option.id}>{option.name}</option>
        ))}
      </select>
      <button
        type="submit"
        className={`${btnBgColor} p-3 mt-3 font-semibold text-xl text-white mb-10 border-none rounded-md shadow-md ring-2 ring-offset-1`}
        disabled={emptyInputsCheck}
      >
        Add post
      </button>
    </form>
  );
};

export default AddForm;
