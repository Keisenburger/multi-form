export const firstNameValidation = (name) => {
  if (name === "") {
    return "First name cannot be empty.";
  }
  for (let i = 0; i < name.length; i++) {
    if ("!@#$%^&*()-+<>/?1234567890".includes(name[i])) {
      return "First name cannot contain special characters or numbers.";
    }
  }
  return "passed";
};

export const lastNameValidation = (name) => {
  if (name === "") {
    return "Last name cannot be empty.";
  }
  for (let i = 0; i < name.length; i++) {
    if ("!@#$%^&*()-+<>/?1234567890".includes(name[i])) {
      return "Last name cannot contain special characters or numbers.";
    }
  }
  return "passed";
};

export const userNameValidation = (userNames, userName) => {
  for (let i = 0; i < userNames.length; i++) {
    if (userName === userNames[i]) {
      console.log(i, userName, userNames[i]);
      return "This username is already taken. Please choose another one.";
    }
  }

  return "passed";
};

export const emailValidation = (email) => {
  if (email === "") {
    return "Email cannot be empty.";
  }
  if (!email.includes("@") || email[email.length - 1] === "@") {
    return "Please provide a valid email address.";
  }
  if (email[0] === "." || email[email.length - 1] === ".") {
    return "Email cannot start or end with dot.";
  }
  for (let i = 0; i < email.length; i++) {
    if ("!#$%&’*+-/=?^_`{|}~".includes(email[i])) {
      return "Email cannot contain special characters.";
    }
    if (email[i] === ".") {
      if (email[i + 1] === ".") {
        return "Please provide a valid email address.";
      }
    }
  }

  return "passed";
};

export const phoneNumberValidation = (phoneNumber) => {
  if (phoneNumber === "") {
    return "PhoneNumber cannot be empty.";
  }
  if (phoneNumber.length !== 8) {
    return "Please enter a valid phone number.";
  }

  return "passed";
};

export const passwordValidation = (password) => {
  console.log(password);

  if (password === "") {
    return "Password cannot be empty.";
  }
  if (password.length < 8) {
    return "Password must contain at least 8 characters.";
  }
  let counter = 0;
  for (let i = 0; i < password.length; i++) {
    if ("1234567890".includes(password[i])) {
      counter++;
    }
  }
  if (counter === 0) {
    return "Password must include at least a number.";
  }
  counter = 0;
  for (let i = 0; i < password.length; i++) {
    if ("qwertyuiopasdfghjklzxcvbnm".includes(password[i])) {
      counter++;
    }
  }
  if (counter === 0) {
    return "Password must include at least a letter.";
  }
  return "passed";
};

export const passwordConfirmValidation = ({ password, confirmingPassword }) => {
  console.log(password, confirmingPassword);

  if (confirmingPassword === "") {
    return "Confirming password cannot be empty.";
  }
  if (password !== confirmingPassword) {
    return "Passwords do not match. Please try again.";
  }
  return "";
};
