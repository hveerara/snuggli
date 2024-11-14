export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const validatePhone = (inputPhone) => {
  const regex = /\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return regex.test(inputPhone);
};

export const validateFullName = (inputFullName) => {
  const regex = /^[A-Za-z][A-Za-z,.'-]+ +[A-Za-z][A-Za-z,.'-]+$/;
  return regex.test(inputFullName);
};
