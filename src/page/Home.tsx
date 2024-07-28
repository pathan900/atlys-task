import { useEffect, useState, lazy, Suspense } from "react";
import CreatePost from "../components/CreatePost/CreatePost";
import { PostWithUser } from "../interface/commonTypes";
import { getPosts } from "../mock/mockAPI";
import Modal from "../components/layout/Modal/Modal";
import LoginForm from "../components/Login/loginForm";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "../redux/slice/authSlice";
import { formatDate } from "../utils/utils";
import { RootState } from "../redux/store";
import SignUpForm from "../components/Signup/signUpForm";
const UserPost = lazy(() => import("../components/Post/UserPost"));

const Home = () => {
  const [posts, setPosts] = useState<PostWithUser[]>([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleCloseModal = () => {
    if (isLoginModalOpen) setIsLoginModalOpen(false);
    setIsSignUpModalOpen(false);
  };

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  useEffect(() => {
    const fetchPostAndUsers = async () => {
      try {
        const postsResponse = await getPosts();
        const sortedPosts = postsResponse.sort((a, b) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        });
        setPosts(sortedPosts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPostAndUsers();
  }, []);

  return (
    <>
      <div className="flex flex-col container max-w-[700px] mx-auto py-5">
        <div>
          <h1 className="text-3xl text-[#C5C7CA] font-medium mb-3">
            Hello <span>{user?.username}</span>
          </h1>
          <p className="text-base font-normal leading-6 text-[#7F8084] mb-10 max-w-[580px]">
            How are you doing today? Would you like to share something with the
            community 🤗
          </p>
        </div>
        <CreatePost handleOpenModal={setIsSignUpModalOpen} />
        <Suspense fallback={<div>Loading...</div>}>
          {posts.map((combinedPost) => (
            <UserPost
              key={combinedPost.id}
              post={{
                ...combinedPost,
                createdAt: formatDate(combinedPost.createdAt),
              }}
            />
          ))}
        </Suspense>
      </div>

      {isLoginModalOpen && (
        <Modal isOpen={isLoginModalOpen} onClose={handleCloseModal}>
          <LoginForm
            handleCloseModal={handleCloseModal}
            isModal={true}
            handleSignUpModal={setIsSignUpModalOpen}
          />
        </Modal>
      )}
      {isSignUpModalOpen && (
        <Modal isOpen={isSignUpModalOpen} onClose={handleCloseModal}>
          <SignUpForm
            handleCloseModal={handleCloseModal}
            handleLoginModal={setIsLoginModalOpen}
            isModal={true}
          />
        </Modal>
      )}
    </>
  );
};

export default Home;
