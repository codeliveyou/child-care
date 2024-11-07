import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from 'react-redux';

import AnimatedRoutes from "./components/layout/AnimatedRoutes";
import { MeetingContext, meteredMeeting } from "./MeetingContext";
import SocketProvider from "./providers/SocketProvider";
import store from './store';
import { updateCreateUser, userLogin } from "./store/reducers/authReducer";
import apiClient, { setupApiToken } from "./libs/api";
import { setIsLoading } from "./store/reducers/loadingReducer";

function App() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    setupApiToken(token)
    store.dispatch(setIsLoading(true))
    apiClient.get('/api/users/me').then((response: any) => {
      const { user_name, user_email, account_description, picture_id } = response;
      if (user_email) {
        store.dispatch(userLogin());
        store.dispatch(updateCreateUser({ name: 'user_name', value: user_name }))
        store.dispatch(updateCreateUser({ name: 'user_email', value: user_email }))
        store.dispatch(updateCreateUser({ name: 'account_description', value: account_description }))
        store.dispatch(updateCreateUser({ name: 'picture_id', value: picture_id }))
      }
    }).finally(() => {
      setTimeout(() => {
        store.dispatch(setIsLoading(false))
      }, 100);
    })
  }, [])

  return (
    <Provider store={store}>
      <SocketProvider>
        <MeetingContext.Provider value={meteredMeeting}>
          <Router>
            {/* The Router component wraps the application to enable routing */}
            <AnimatedRoutes />
          </Router>
        </MeetingContext.Provider>
      </SocketProvider>
      <Toaster />
    </Provider>
  );

}

export default App;
