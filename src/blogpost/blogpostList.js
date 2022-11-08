import { useSelector } from "react-redux";
import { allPosts, fetchPosts,postError, postStatus } from "./postSlice";
import AddForm from "./addForm";
import SuccessFetchPost from "./successFetchPost";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { isFulfilled } from "@reduxjs/toolkit";

const BlogPost = () => {
  const posts = useSelector(allPosts);
  const getPostStatus = useSelector(postStatus);
  const getPostError = useSelector(postError)

  // console.log(posts);

  const dispatch = useDispatch();
  console.log(posts);

  useEffect(() => {
    if (getPostStatus === "idle") {
      dispatch(fetchPosts());
      // const {value} = psList 
      // console.log(value)
    }
  }, [getPostStatus, dispatch]);

  console.log(getPostStatus);
  let content;

  if (getPostStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (getPostStatus === "fulfilled") {
    // console.log(posts);
    content = posts.map((post) => <SuccessFetchPost key={post.id} post={post} />);
  } else if (getPostStatus === "rejected") {
    content = <p>{getPostError}</p>;
  }

  return (
    <div className="h-screen flex justify-center items-center bg-slate-800">
      <section className="bg-white w-2/5 flex flex-col items-center rounded-md shadow-2xl p-5 h-5/6 overflow-scroll">
        <h1 className="mb-5 font-bold text-5xl font-serif">Posts</h1>
        <AddForm />
        <div className="w-3/4">{content}</div>
      </section>
    </div>
  );
};
export default BlogPost;
