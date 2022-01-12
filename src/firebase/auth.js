import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const auth = getAuth();

export const login = async (email, password) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
    return { userCredentials };
  } catch (error) {
    console.log(error);
    return { error };
  }
};
export const googleSignUp = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const userCredentials = GoogleAuthProvider.credentialFromResult(result);
    console.log(userCredentials);
    return "success";
  } catch (error) {
    return false;
  }
};

export const signup = async (username, email, password) => {
  console.log(signup.length);

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
    return { userCredentials };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const signout = async () => {
  try {
    const result = await signOut(auth);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
