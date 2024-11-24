import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  const reactions = post.reactions || { likes: 0, dislikes: 0 };
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => {
              deletePost(post.id);
            }}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {Array.isArray(post.tags) &&
          post.tags.map((tag) => (
            <span className="badge text-bg-primary hashtag" key={tag}>
              {tag}
            </span>
          ))}
        <div className="alert alert-success reaction" role="alert">
          This post has been reacted to by {reactions.likes} people with likes
          and {reactions.dislikes} with dislikes.
        </div>
      </div>
    </div>
  );
};

export default Post;
