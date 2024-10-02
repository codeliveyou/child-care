import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';

import AnimatedRoutes from "./components/layout/AnimatedRoutes";
// import { createContext } from "react";
import { MeetingContext, meteredMeeting } from "./MeetingContext";
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <MeetingContext.Provider value={meteredMeeting}>
        <Router>
          {/* The Router component wraps the application to enable routing */}
          <AnimatedRoutes />
        </Router>
      </MeetingContext.Provider>
    </Provider>
  );
}

export default App;
