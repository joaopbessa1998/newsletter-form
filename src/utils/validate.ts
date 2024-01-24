import { User } from "../types/User";

type Error = {
  [key: string]: string;
};

export const validate = (data: User) => {
  const errors: Error = {};

  if (!data.name) {
    errors["name"] = "You should write a name";
  }

  if (!data.email) {
    errors["email"] = "You should write an email";
  }

  if (!data.agree) {
    errors["agree"] = "You should agree with our terms";
  }

  return errors;
};
