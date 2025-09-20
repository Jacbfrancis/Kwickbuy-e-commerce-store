import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

export async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
}
