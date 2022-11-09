import { useDispatch, useSelector } from "react-redux";
import Timeago from "../timeStamp/dateTime";
import { AiFillDelete } from "react-icons/ai";
import { removePost } from "./postSlice";
import Emojis from "../emojis/emojis";
import { postUsersList } from "../users/usersSlice";

const SuccessFetchPost = ({ post }) => {
  const dispatch = useDispatch();

  const userData = useSelector(postUsersList);

  let authorName = "";
  const postAuthor = userData.find((user) => user.id === post.userId);
  if (postAuthor) {
    authorName = postAuthor.name;
  }

  return (
    <article key={post.id} className="border-4 mb-2 rounded-xl p-4 text-xl bg-slate-100">
      <div className="flex justify-between items-center mb-2 break-all">
        <div className="overflow-hidden w-80">
          <h2 className="font-extrabold text-amber-700 font-serif text-2xl">
            {post.title}
          </h2>
          {/* <p className="text-slate-900">{post.description}</p> */}
          <p className="text-slate-900">{post.body}</p>
          <p className="text-blue-400 font-medium text-sm">{`by ${authorName}`}</p>
        </div>
        <div className="flex flex-col items-center justify-between h-20 w-28">
          <Timeago timeStamp={post.time} />
          <AiFillDelete
            className="cursor-pointer text-red-500"
            val={post.id}
            onClick={() => dispatch(removePost({ postId: post.id }))}
          />
        </div>
      </div>
      <Emojis post={post} />
    </article>
  );
};

export default SuccessFetchPost;
