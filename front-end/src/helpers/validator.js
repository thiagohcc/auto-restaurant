export const isValidUser = (user) => {
  if (user === 'Mesa-01') {
    return true;
  }
  return false;
};

export const isValidPassword = (password) => {
  const passwordRegex = /^.{7,}$/g;
  return passwordRegex.test(password);
};
