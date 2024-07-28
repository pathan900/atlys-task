import { PostWithUser, User } from "../interface/commonTypes";

export const postData: PostWithUser[] = [
  {
    id: "61",
    createdAt: "2021-09-23T12:30:00.000Z",
    updatedAt: "2021-09-23T12:30:00.000Z",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    createdBy: "1",
    isEdited: false,
    commentCount: 24,
    user: {
      id: "1",
      username: "Theresa Webb",
      email: "theresawebb@atlys.com",
      profilePicture:
        "https://d22e6o9mp4t2lx.cloudfront.net/cms/pfp3_d7855f9562.webp",
    },
  },
  {
    id: "62",
    createdAt: "2021-10-23T12:30:00.000Z",
    updatedAt: "2021-09-23T12:30:00.000Z",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    createdBy: "2",
    isEdited: true,
    commentCount: 10,
    user: {
      id: "2",
      username: "Marvin McKinney",
      email: "marvinmcKinney@atlys.com",
      profilePicture:
        "https://img.freepik.com/photos-premium/icone-profil-fond-blanc_941097-162260.jpg",
    },
  },
];

export const mockUser: User = {
  id: "1",
  username: "Jane",
  email: "jane@atlys.com",
  password: "jane",
  profilePicture: "profile_link",
};
