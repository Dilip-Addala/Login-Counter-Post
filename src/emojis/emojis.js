import { useDispatch } from "react-redux";
import { addReactions } from "../blogpost/postSlice";

const emojisList = {
  thumbsup: "👍",
  loveIt: "❤️‍🔥",
  laugh: "😂",
  fear: "😰",
  shock: "😱",
  
};

const Emojis = ({post}) => {
    const dispatch = useDispatch();
  const reactionButtons = Object.entries(emojisList).map(([name, emoji]) => {
    return (
      <button key={name} className="mr-3 text-2xl" onClick={()=>dispatch(addReactions({postId:post.id,reaction:name}))}>
        {emoji}{post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};

export default Emojis;
