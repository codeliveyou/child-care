import axios from 'axios';
import { toast } from 'react-hot-toast';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT_URI
});

apiClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    let message = '';

    if (error.response?.status === 401) {
      // User not auth, ask to re login
      // toast.error('Please login');
      // Sends the user to the login page
    } else if (error.response?.status === 403) {
      // User not authorized, must subscribe/purchase/pick a plan
      message = 'Pick a plan to use this feature';
    } else if (error.response?.status === 413) {
      message = 'Cannot upload file large than 200M';
    } else if (error.response?.status === 500) {
      message = 'Something went wrong on our side';
    } else {
      const errorObject = error?.response?.data?.errors;
      if (errorObject) {
        const keys = Object.keys(errorObject);
        if (keys.includes('status'))
          message = "Please wait for administrator's approval.";
        else if (keys.includes('email') || keys.includes('password')) {
          message = 'Email or password is incorrect.';
        }
      } else {
        message = error.message || error.toString();
      }
    }

    error.message =
      typeof message === 'string' ? message : JSON.stringify(message);

    // console.error(error.message);

    // Automatically display errors to the user
    if (error.message) {
      toast.error(error.message);
    }

    return Promise.reject(error);
  }
);

const setupApiToken = (token: string) => {
  apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default apiClient;
export { setupApiToken };
