export interface Post {
  id: string;
  createdAt: string;
  updatedAt: string;
  content: string;
  createdBy: string;
  isEdited: boolean;
  commentCount: number;
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  profilePicture: string;
}

export interface PostWithUser extends Post {
  user: {
    id: string;
    username: string;
    email: string;
    profilePicture: string;
  };
}

