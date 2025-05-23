import {
  ImageInput,
  FirstNameInput,
  UserNameInput,
  LastNameInput,
  EmailInput,
  PhoneNumberInput,
  PasswordInput,
  ConfirmingPasswordInput,
  DateOfBirthInput,
} from "./Inputs";

const Form1 = ({ inputs, setInputs, errorMsg }) => {
  console.log(errorMsg);

  return (
    <div className="flex flex-col gap-3">
      <FirstNameInput
        typography={"First name"}
        type={"text"}
        inputs={inputs}
        setInputs={setInputs}
        errorMsg={errorMsg.firstName}
      />

      <p className="text-[#E14942]">
        {errorMsg.firstName !== "passed" && errorMsg.firstName}
      </p>

      <LastNameInput
        typography={"Last name"}
        type={"text"}
        inputs={inputs}
        setInputs={setInputs}
        errorMsg={errorMsg.lastName}
      />
      <p className="text-[#E14942]">
        {errorMsg.lastName !== "passed" && errorMsg.lastName}
      </p>
      <UserNameInput
        typography={"Username"}
        type={"text"}
        inputs={inputs}
        setInputs={setInputs}
        errorMsg={errorMsg.userName}
      />
      <p className="text-[#E14942]">
        {errorMsg.userName !== "passed" && errorMsg.userName}
      </p>
    </div>
  );
};

const Form2 = ({ inputs, setInputs }) => {
  return (
    <div className="flex flex-col gap-3">
      <EmailInput
        typography={"Email"}
        type={"text"}
        inputs={inputs}
        setInputs={setInputs}
      />
      <PhoneNumberInput
        typography={"Phone number"}
        type={"number"}
        inputs={inputs}
        setInputs={setInputs}
      />
      <PasswordInput
        typography={"Password"}
        type={"password"}
        inputs={inputs}
        setInputs={setInputs}
      />
      <ConfirmingPasswordInput
        typography={"Confirm password"}
        type={"password"}
        inputs={inputs}
        setInputs={setInputs}
      />
    </div>
  );
};
const Form3 = ({ inputs, setInputs }) => {
  return (
    <div className="flex flex-col gap-3">
      <DateOfBirthInput
        typography={"Date of birth"}
        type={"date"}
        inputs={inputs}
        setInputs={setInputs}
      />
      <ImageInput
        typography={"Profile image"}
        type={"file"}
        inputs={inputs}
        setInputs={setInputs}
      />
    </div>
  );
};

export const Form = ({ pageNumber, inputs, setInputs, errorMsg }) => {
  switch (pageNumber) {
    case 1:
      return (
        <Form1 inputs={inputs} setInputs={setInputs} errorMsg={errorMsg} />
      );
    case 2:
      return <Form2 inputs={inputs} setInputs={setInputs} />;
    case 3:
      return <Form3 inputs={inputs} setInputs={setInputs} />;
  }
};
