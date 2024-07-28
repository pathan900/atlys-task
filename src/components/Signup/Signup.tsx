import SignUpForm from "./signUpForm";

const Signup = () => {
  return (
    <div className="flex items-center">
      <div className=" rounded-lg  bg-gradient-to-br from-[#969696] to-[#343434]">
        <div
          className=" bg-[#27292D] text-white w-[29rem] border-2 border-transparent rounded-lg px-6 py-10"
          style={{
            backgroundClip: "padding-box",
          }}
        >
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
