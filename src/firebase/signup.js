import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const signup = async (email, password, username) => {
  const auth = getAuth();
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      email,
      password
    );
  } catch (error) {
    console.log(error);
  }
};
