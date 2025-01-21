const Post = ({ post }) => {
  return (
    <div className="card post" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.content}</p>
      </div>
    </div>
  );
};
export default Post;
