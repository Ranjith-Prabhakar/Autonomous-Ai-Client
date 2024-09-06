import axios from "axios";
import toast from "react-hot-toast";
export default function catchAxiosError(error: unknown) {
  let errorMessage = "An unexpected error occurred.";

  // Type assertion to check for axios error
  if (axios.isAxiosError(error)) {
    console.log("error======", error);
    if (error.response) {
      if (error.response.data.message === "Not Found") {
        return "Not Found";
      }
      // Server responded with a status code outside the 2xx range
      errorMessage = `Error: ${error.response.status} - ${error.response.statusText}`;
    } else if (error.request) {
      // No response was received
      errorMessage = "No response received from the server.";
    } else {
      // Other errors
      errorMessage = error.message;
    }
  }

  // Show toast message
  toast.error("Please try again later.");
  console.error("Error:", errorMessage);
  return null;
}
