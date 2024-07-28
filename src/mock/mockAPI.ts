import { PostWithUser, User } from "../interface/commonTypes";
import { mockUser, postData } from "./mockData";

const getPosts = (): Promise<PostWithUser[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(postData);
    }, 50);
  });
};

const getUser = (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUser);
    }, 50);
  });
};

export { getPosts, getUser };
