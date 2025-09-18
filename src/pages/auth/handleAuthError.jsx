export function handleAuthError(error) {
  switch (error.code) {
    case "auth/email-already-in-use":
      return "That email is already registered. Try logging in";

    case "auth/invalid-email":
      return "Invalid email format.";

    case "auth/weak-password":
      return "Password can not be less than 6 characters.";

    case "auth/user-not-found":
      return "No account found with this email.";

    case "auth/missing-password":
      return "Password can not be empty";

    case "auth/wrong-password":
      return "Incorrect password.";

    case "auth/network-request-failed":
      return "Network error — check your connection.";

    case "auth/invalid-credential":
      return "Invalid credentials";

    default:
      return "Something went wrong. Please try again";
  }
}
