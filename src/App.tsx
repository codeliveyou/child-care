import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';

import AnimatedRoutes from "./components/layout/AnimatedRoutes";
// import { createContext } from "react";
import { MeetingContext, meteredMeeting } from "./MeetingContext";
import store from './store';
import SocketProvider from "./providers/SocketProvider";

function App() {
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
    </Provider>
  );
}

export default App;
