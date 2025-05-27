import { Form } from "@/components/Forms";
import {
  firstNameValidation,
  lastNameValidation,
  userNameValidation,
  emailValidation,
  phoneNumberValidation,
  passwordValidation,
  passwordConfirmValidation,
  dateValidation,
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
    switch (pageNumber) {
      case 1:
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

        break;

      case 2:
        if (emailValidation(inputs.email) !== "passed") {
          setErrorMsg({
            ...errorMsg,
            email: emailValidation(inputs.email),
          });
          return 0;
        }
        if (phoneNumberValidation(inputs.phoneNumber) !== "passed") {
          setErrorMsg({
            ...errorMsg,
            phoneNumber: phoneNumberValidation(inputs.phoneNumber),
          });
          return 0;
        }
        if (passwordValidation(inputs.password) !== "passed") {
          setErrorMsg({
            ...errorMsg,
            password: passwordValidation(inputs.password),
          });
          return 0;
        }

        if (
          passwordConfirmValidation(
            inputs.confirmingPassword,
            inputs.password
          ) !== "passed"
        ) {
          setErrorMsg({
            ...errorMsg,
            confirmingPassword: passwordConfirmValidation(
              inputs.confirmingPassword,
              inputs.password
            ),
          });
          return 0;
        }
        break;
      case 3:
        if (dateValidation(inputs.dateOfBirth) !== "passed") {
          setErrorMsg({
            ...errorMsg,
            dateOfBirth: dateValidation(inputs.dateOfBirth),
          });
          return 0;
        }
        break;
    }

    setUserData(inputs);
    if (pageNumber <= 3) {
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
      <div className="w-[480px]  h-fit bg-white p-8 flex flex-col justify-between rounded-lg">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <img src="logo.png" alt="logo" className="size-15" />
            {pageNumber !== 4 && (
              <div>
                <p className=" text-[#202124] font-semibold text-[26px]">
                  Join Us! 😎
                </p>
                <p className=" text-lg text-[#8E8E8E]">
                  Please provide all current information accurately.
                </p>
              </div>
            )}
          </div>
          <Form
            pageNumber={pageNumber}
            inputs={inputs}
            setInputs={setInputs}
            errorMsg={errorMsg}
          />
        </div>
        <div className="flex gap-2 mt-[54px]">
          {pageNumber !== 1 ? (
            <button
              className={`${
                pageNumber === 4 ? "w-full" : "w-[128px]"
              } px-3 py-2.5 border border-[#CBD5E1] rounded-lg cursor-pointer`}
              onClick={() => handleBackButton()}
            >
              Back
            </button>
          ) : (
            ""
          )}

          {pageNumber !== 4 && (
            <button
              className=" w-full px-3 py-2.5 bg-[#121316] rounded-md"
              onClick={() => handleContinueButton()}
            >
              <p className="text-white text-center text-[16px] leading-6 cursor-pointer">
                {pageNumber !== 3 ? "Continue" : "Submit"} {pageNumber}/3{" "}
              </p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiForm;
