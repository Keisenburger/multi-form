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
  console.log(userNames, userName);
  for (let i = 0; i < userNames.length; i++) {
    if (userName === userNames[i]) {
      console.log(i, userName, userNames[i]);
      return "This username is already taken. Please choose another one.";
    }
  }

  return "passed";
};
