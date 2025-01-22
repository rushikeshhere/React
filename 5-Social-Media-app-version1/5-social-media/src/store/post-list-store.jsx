import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  if (action.type === "DELETE_POST") {
    return currentPostList.filter((post) => post.id !== action.payload);
  }
  return currentPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: postId,
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "My first post",
    content:
      "In a React app, you can pass inline styles using the style attribute, which takes a JavaScript object. Here's how you can do it:",
    author: "John Doe",
    user_id: "JohnDoe1",
    date: "2023-01-01",
    tags: ["react", "javascript", "learning"],
  },
  {
    id: "2",
    title: "i am going to pune ",
    content:
      "hi guys i am feeling very good because i am going to pune,While inline styles are convenient for small or dynamic changes, it's better to use CSS classes or styled-components for more complex styling to keep the code clean and maintainable.",
    author: "Rushikesh here",
    user_id: "RushikeshH@1",
    date: "2025-01-01",
    tags: ["travel", "pune", "enjoyment"],
  },
];

export default PostListProvider;
