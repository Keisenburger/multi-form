import { Form } from "@/components/Forms";
import { Input } from "@/components/Inputs";
import { useState } from "react";

const MultiForm = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    dateOfBirth: "",
    image: "",
  });
  const [pageNumber, setPageNumber] = useState(1);
  const handleContinueButton = () => {
    if (pageNumber <= 2) {
      setPageNumber(pageNumber + 1);
    }
  };
  const handleBackButton = () => {
    if (pageNumber >= 0) {
      setPageNumber(pageNumber - 1);
    }
  };
  return (
    <div className="flex justify-center w-screen h-screen bg-[#F4F4F4] items-center">
      <div className="w-[480px] h-[655px] bg-white p-8 flex flex-col justify-between rounded-lg">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <img src="logo.png" alt="logo" className="size-15" />
            <p className=" text-[#202124] font-semibold text-[26px]">
              Join Us! 😎
            </p>
            <p className=" text-lg text-[#8E8E8E]">
              Please provide all current information accurately.
            </p>
          </div>
          <Form pageNumber={pageNumber} />
        </div>
        <div className="flex gap-2 ">
          {pageNumber !== 1 ? (
            <button
              className="w-[128px] px-3 py-2.5 border border-[#CBD5E1] rounded-lg cursor-pointer"
              onClick={() => handleBackButton()}
            >
              Back
            </button>
          ) : (
            ""
          )}

          <button
            className=" w-full px-3 py-2.5 bg-[#121316] rounded-md"
            onClick={() => handleContinueButton()}
          >
            <p className="text-white text-center text-[16px] leading-6 cursor-pointer">
              Continue {pageNumber}/3{" "}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiForm;
