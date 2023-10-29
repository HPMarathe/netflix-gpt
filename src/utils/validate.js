export const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid.";

  if (!isPasswordValid)
    return "Password length should be minimum 8 characters. Password should contain at least one lowercase letter(a-z), one uppercase letter(A-Z) & one special character ( @, #, %, &, !, $, etc…).";

  return null;
};

export const checkValidDataWithName = (name, email, password) => {
  // Using regex here to verify the email & password

  const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isNameValid)
    return "Name is not valid. Please enter your first & last name.";

  if (!isEmailValid) return "Email ID is not valid.";

  if (!isPasswordValid)
    return "Password length should be minimum 8 characters. Password should contain at least one lowercase letter(a-z), one uppercase letter(A-Z) & one special character.";

  return null;
};
