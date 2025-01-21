import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  return currentPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};

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
    content: "This is my first post",
    author: "John Doe",
    user_id: "JohnDoe1",
    date: "2023-01-01",
    tags: ["react", "javascript", "learning"],
  },
  {
    id: "2",
    title: "i am going to pune ",
    content: "hi guys i am feeling very good because i am going to pune",
    author: "Rushikesh here",
    user_id: "RushikeshH@1",
    date: "2025-01-01",
    tags: ["travel", "pune", "enjoyment"],
  },
];

export default PostListProvider;
