import { useState } from "react";
import textIcon from "../../assets/💬.png";
import Button from "../common/Button/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type CreatePostProps = {
  handleOpenModal: Function;
};

const CreatePost = ({ handleOpenModal }: CreatePostProps) => {
  const [postData, setpostData] = useState("");
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const submitPost = () => {
    if (!isAuthenticated) {
      handleOpenModal(true);
    }
    // If authenticated, proceed with posting logic
    console.log(postData);
  };

  return (
    <div className="w-full text-white border-2 border-solid border-[#35373B] rounded-lg bg-[#27292D] px-5 py-5">
      <h2 className="text-lg font-medium text-[#C5C7CA] mb-3">Create post</h2>
      <div className="flex items-center bg-[#191920] rounded-lg p-4">
        <div className="rounded-full bg-[#27292D] p-3 h-12 w-12 flex items-center justify-center">
          <img src={textIcon} alt="text icon" />
        </div>
        <input
          type="text"
          value={postData}
          onChange={(e) => setpostData(e.target.value)}
          placeholder="How are you feeling today?"
          className="ml-3 w-full bg-transparent border-none outline-none flex-1 text-white"
        />
      </div>
      <div className="flex justify-end mt-4">
        <Button
          onClick={submitPost}
          type="submit"
          className="text-white w-28 rounded bg-[#4A96FF] font-medium text-[16px] leading-5 h-11"
          customCss=""
          isLoading={false}
          disabled={false}
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default CreatePost;
