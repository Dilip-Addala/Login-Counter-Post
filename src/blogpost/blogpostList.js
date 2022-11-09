import { useSelector } from "react-redux";
import { allPosts, fetchPosts,postError, postStatus } from "./postSlice";
import AddForm from "./addForm";
import SuccessFetchPost from "./successFetchPost";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const BlogPost = () => {
  const posts = useSelector(allPosts);
  const getPostStatus = useSelector(postStatus);
  const getPostError = useSelector(postError)

  const dispatch = useDispatch();

  useEffect(() => {
    if (getPostStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [getPostStatus, dispatch]);

  let content;

  if (getPostStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (getPostStatus === "succeeded") {
    content = posts.map((post) => <SuccessFetchPost key={post.id} post={post} />);
  } else if (getPostStatus === "rejected") {
    content = <p>{getPostError}</p>;
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-slate-300">
      <section className="bg-white w-2/5 flex flex-col items-center rounded-2xl ring ring-4 ring-offset-black ring-offset-4 ring-zinc-600 shadow-2xl p-5 h-5/6 overflow-scroll">
        <h1 className="mb-5 font-bold text-5xl font-serif shadow-md">Posts</h1>
        <AddForm />
        <div className="w-3/4">{content}</div>
      </section>
    </div>
  );
};
export default BlogPost;
