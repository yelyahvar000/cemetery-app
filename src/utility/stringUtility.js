export const isEmpty = (value) => {
  /* return true if value one of the following: [null, undefined, ""] */
  return [null, undefined, ""].some((item) => item == value);
};

export const isNotEmpty = (value) => {
  /* return true if value is not one of the following: [null, undefined, ""] */
  return ![null, undefined, ""].some((item) => item == value);
};
 