import { auth } from "@/config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { RegisterParams } from "../type/registerUserInterface";

export const registerUser = async (registerParams: RegisterParams) => {
  try {
    const userAuth = await createUserWithEmailAndPassword(auth, registerParams.email, registerParams.password);
    return userAuth.user;
  } catch (error) {
    throw error;
  }
};
