import { Form } from "@/components/Forms";
import {
  firstNameValidation,
  lastNameValidation,
  userNameValidation,
} from "@/functions/validate";
import { useState } from "react";
const userNames = ["garig", "hasaa"];
const MultiForm = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmingPassword: "",
    dateOfBirth: "",
    profileImage: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    firstName: "passed",
    lastName: "passed",
    userName: "passed",
    email: "passed",
    phoneNumber: "passed",
    password: "passed",
    confirmingPassword: "passed",
    dateOfBirth: "passed",
    profileImage: "passed",
  });
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmingPassword: "",
    dateOfBirth: "",
    profileImage: "",
  });

  const [pageNumber, setPageNumber] = useState(1);
  const handleContinueButton = () => {
    if (firstNameValidation(inputs.firstName) !== "passed") {
      setErrorMsg({
        ...errorMsg,
        firstName: firstNameValidation(inputs.firstName),
      });
      return 0;
    }
    if (lastNameValidation(inputs.lastName) !== "passed") {
      setErrorMsg({
        ...errorMsg,
        lastName: lastNameValidation(inputs.lastName),
      });
      return 0;
    }
    if (userNameValidation(userNames, inputs.userName) !== "passed") {
      setErrorMsg({
        ...errorMsg,
        userName: userNameValidation(userNames, inputs.userName),
      });
      return 0;
    }

    setUserData(inputs);
    if (pageNumber <= 2) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handleBackButton = () => {
    setErrorMsg({
      firstName: "passed",
      lastName: "passed",
      userName: "passed",
      email: "passed",
      phoneNumber: "passed",
      password: "passed",
      confirmingPassword: "passed",
      dateOfBirth: "passed",
      profileImage: "passed",
    });
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
          <Form
            pageNumber={pageNumber}
            inputs={inputs}
            setInputs={setInputs}
            errorMsg={errorMsg}
          />
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
              {pageNumber !== 3 ? "Continue" : "Submit"} {pageNumber}/3{" "}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiForm;
