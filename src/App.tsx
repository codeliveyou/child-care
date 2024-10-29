import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from 'react-redux';

import AnimatedRoutes from "./components/layout/AnimatedRoutes";
import { MeetingContext, meteredMeeting } from "./MeetingContext";
import SocketProvider from "./providers/SocketProvider";
import store from './store';

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
      <Toaster />
    </Provider>
  );
}

export default App;
