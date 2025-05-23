export const FirstNameInput = ({
  typography,
  type,
  inputs,
  setInputs,
  errorMsg,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 leading-[16px] font-semibold">
        <p className="text-[#334155]">{typography}</p>
        <p className="text-[rgb(225,73,66)]">*</p>
      </div>

      <input
        type={type}
        className={`${
          errorMsg === "passed"
            ? "border-[#CBD5E1]"
            : "border-[#E14942] focus:outline-[#E14942] text-[#E14942]"
        } p-3 rounded-[8px] text-[#8B8E95] border border-[#CBD5E1] focus:outline-[#0CA5E9]`}
        placeholder="Placeholder"
        value={inputs.firstName}
        onChange={(e) => setInputs({ ...inputs, firstName: e.target.value })}
      />
    </div>
  );
};

export const LastNameInput = ({
  typography,
  type,
  inputs,
  setInputs,
  errorMsg,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 leading-[16px] font-semibold">
        <p className="text-[#334155]">{typography}</p>
        <p className="text-[#E14942]">*</p>
      </div>

      <input
        type={type}
        className={`${
          errorMsg === "passed"
            ? "border-[#CBD5E1]"
            : "border-[#E14942] focus:outline-[#E14942] text-[#E14942]"
        } p-3 rounded-[8px] text-[#8B8E95] border border-[#CBD5E1] focus:outline-[#0CA5E9]`}
        placeholder="Placeholder"
        value={inputs.lastName}
        onChange={(e) => setInputs({ ...inputs, lastName: e.target.value })}
      />
    </div>
  );
};

export const UserNameInput = ({
  typography,
  type,
  inputs,
  setInputs,
  errorMsg,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 leading-[16px] font-semibold">
        <p className="text-[#334155]">{typography}</p>
        <p className="text-[#E14942]">*</p>
      </div>

      <input
        type={type}
        className={`${
          errorMsg === "passed"
            ? "border-[#CBD5E1]"
            : "border-[#E14942] focus:outline-[#E14942] text-[#E14942]"
        } p-3 rounded-[8px] text-[#8B8E95] border border-[#CBD5E1] focus:outline-[#0CA5E9]`}
        placeholder="Placeholder"
        value={inputs.userName}
        onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
      />
    </div>
  );
};

export const EmailInput = ({ typography, type, inputs, setInputs }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 leading-[16px] font-semibold">
        <p className="text-[#334155]">{typography}</p>
        <p className="text-[#E14942]">*</p>
      </div>

      <input
        type={type}
        className="p-3 rounded-[8px] text-[#8B8E95] border border-[#CBD5E1] focus:outline-[#0CA5E9]"
        placeholder="Placeholder"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
    </div>
  );
};

export const PhoneNumberInput = ({ typography, type, inputs, setInputs }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 leading-[16px] font-semibold">
        <p className="text-[#334155]">{typography}</p>
        <p className="text-[#E14942]">*</p>
      </div>

      <input
        type={type}
        className="p-3 rounded-[8px] text-[#8B8E95] border border-[#CBD5E1] focus:outline-[#0CA5E9]"
        placeholder="Placeholder"
        value={inputs.phoneNumber}
        onChange={(e) => setInputs({ ...inputs, phoneNumber: e.target.value })}
      />
    </div>
  );
};

export const PasswordInput = ({ typography, type, inputs, setInputs }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 leading-[16px] font-semibold">
        <p className="text-[#334155]">{typography}</p>
        <p className="text-[#E14942]">*</p>
      </div>

      <input
        type={type}
        className="p-3 rounded-[8px] text-[#8B8E95] border border-[#CBD5E1] focus:outline-[#0CA5E9]"
        placeholder="Placeholder"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
    </div>
  );
};

export const ConfirmingPasswordInput = ({
  typography,
  type,
  inputs,
  setInputs,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 leading-[16px] font-semibold">
        <p className="text-[#334155]">{typography}</p>
        <p className="text-[#E14942]">*</p>
      </div>

      <input
        type={type}
        className="p-3 rounded-[8px] text-[#8B8E95] border border-[#CBD5E1] focus:outline-[#0CA5E9]"
        placeholder="Placeholder"
        value={inputs.confirmingPassword}
        onChange={(e) =>
          setInputs({ ...inputs, confirmingPassword: e.target.value })
        }
      />
    </div>
  );
};

export const DateOfBirthInput = ({ typography, type, inputs, setInputs }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 leading-[16px] font-semibold">
        <p className="text-[#334155]">{typography}</p>
        <p className="text-[#E14942]">*</p>
      </div>

      <input
        type={type}
        className="p-3 rounded-[8px] text-[#8B8E95] border border-[#CBD5E1] focus:outline-[#0CA5E9]"
        placeholder="Placeholder"
        value={inputs.dateOfBirth}
        onChange={(e) => setInputs({ ...inputs, dateOfBirth: e.target.value })}
      />
    </div>
  );
};

export const ImageInput = ({ typography, type }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 leading-[16px] font-semibold">
        <p className="text-[#334155]">{typography}</p>
        <p className="text-[#E14942]">*</p>
      </div>
      <form
        action="index.html"
        method="post"
        className="h-[200px] w-full border flex justify-center items-center relative"
      >
        <img
          src="https://www.shutterstock.com/shutterstock/photos/2286554497/display_1500/stock-photo-random-pictures-cute-and-funny-2286554497.jpg"
          alt="profile"
          className="absolute w-full h-full z-10"
        />
        <p className="absolute">Add image</p>
        <input type={type} id="file" className="w-full h-full bg-[#7F7F800D]" />
      </form>
    </div>
  );
};
