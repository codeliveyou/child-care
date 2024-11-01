import axios from 'axios';
import { toast } from 'react-hot-toast';
import config from '../config';

const apiClient = axios.create({
  baseURL: config.api.endpoint_uri
});

apiClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    let message = '';

    if (error.response?.status === 401) {
      message = 'User not authorized.'
    } else if (error.response?.status === 500) {
      message = 'Server error.';
    }

    // Automatically display errors to the user
    if (message) {
      toast.error(message)
    }

    return Promise.reject(error);
  }
);

const setupApiToken = (token: string) => {
  apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default apiClient;
export { setupApiToken };
