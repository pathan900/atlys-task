import { PostWithUser } from "../../interface/commonTypes";
import reactionEmoji from "../../assets/👋.png";

type UserPostProps = {
  post: PostWithUser;
};

const UserPost = ({ post }: UserPostProps) => {
  return (
    <div className="w-full text-white border-2 border-solid border-[#35373B] rounded-lg bg-[#27292D] px-5 py-6 mt-3 flex flex-col items-center">
      <div className="w-full flex items-center justify-between mb-5">
        <div className="flex gap-3">
          <img
            src={post.user.profilePicture}
            className="w-11 h-11 rounded-full"
          />
          <div>
            <h3 className="text-white font-bold">{post.user.username}</h3>
            <p className="text-gray-400 text-sm">
              {post.createdAt} {post.isEdited && <span> • Edited</span>}
            </p>
          </div>
        </div>
        <div className="flex items-end">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.83337 10C4.83337 10.8284 4.1618 11.5 3.33337 11.5C2.50495 11.5 1.83337 10.8284 1.83337 10C1.83337 9.17157 2.50495 8.5 3.33337 8.5C4.1618 8.5 4.83337 9.17157 4.83337 10ZM11.5 10C11.5 10.8284 10.8285 11.5 10 11.5C9.17161 11.5 8.50004 10.8284 8.50004 10C8.50004 9.17157 9.17161 8.5 10 8.5C10.8285 8.5 11.5 9.17157 11.5 10ZM16.6667 11.5C17.4951 11.5 18.1667 10.8284 18.1667 10C18.1667 9.17157 17.4951 8.5 16.6667 8.5C15.8383 8.5 15.1667 9.17157 15.1667 10C15.1667 10.8284 15.8383 11.5 16.6667 11.5Z"
              fill="#C5C7CA"
            />
          </svg>
        </div>
      </div>
      <div className="flex bg-[#191920] rounded-lg p-4 mb-3">
        <div className="rounded-full bg-[#27292D] p-3 h-12 w-12 flex justify-center">
          <img src={reactionEmoji} alt="text icon" />
        </div>
        <div className="flex-1">
          <p className="text-[#7F8084] text-base ml-3 leading-6">
            {post.content}
          </p>
        </div>
      </div>

      <div className="w-full text-left flex items-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.3333 3.83333L2.66662 3.83336C1.8382 3.83336 1.16663 4.50493 1.16663 5.33336V13.3334C1.16663 14.1618 1.8382 14.8334 2.66662 14.8334H10C10.1326 14.8334 10.2598 14.886 10.3536 14.9798L13.5 18.1262V15.3334C13.5 15.0572 13.7238 14.8334 14 14.8334H17.3333C18.1617 14.8334 18.8333 14.1618 18.8333 13.3334V5.33333C18.8333 4.5049 18.1617 3.83333 17.3333 3.83333ZM2.66662 2.83336L17.3333 2.83333C18.714 2.83333 19.8333 3.95262 19.8333 5.33333V13.3334C19.8333 14.7141 18.714 15.8334 17.3333 15.8334H14.5V19.3333C14.5 19.5356 14.3781 19.7179 14.1913 19.7953C14.0045 19.8727 13.7894 19.8299 13.6464 19.6869L9.79289 15.8334H2.66662C1.28591 15.8334 0.166626 14.7141 0.166626 13.3334V5.33336C0.166626 3.95265 1.28591 2.83336 2.66662 2.83336Z"
            fill="#C5C7CA"
          />
        </svg>
        <p className="text-gray-400 ml-2">{post.commentCount} comments</p>
      </div>
    </div>
  );
};

export default UserPost;
