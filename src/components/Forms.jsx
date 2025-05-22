import { ImageInput, Input } from "./Inputs";

const Form1 = () => {
  return (
    <div className="flex flex-col gap-3">
      <Input typography={"First name"} type={"text"} />
      <Input typography={"Last name"} type={"text"} />
      <Input typography={"Username"} type={"text"} />
    </div>
  );
};

const Form2 = () => {
  return (
    <div className="flex flex-col gap-3">
      <Input typography={"Email"} type={"text"} />
      <Input typography={"Phone number"} type={"number"} />
      <Input typography={"Password"} type={"password"} />
      <Input typography={"Confirm password"} type={"password"} />
    </div>
  );
};
const Form3 = () => {
  return (
    <div className="flex flex-col gap-3">
      <Input typography={"Date of birth"} type={"date"} />
      <ImageInput typography={"Profile image"} type={"file"} />
    </div>
  );
};

export const Form = ({ pageNumber }) => {
  switch (pageNumber) {
    case 1:
      return <Form1 />;
    case 2:
      return <Form2 />;
    case 3:
      return <Form3 />;
  }
};
