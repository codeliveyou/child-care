import { BrowserRouter as Router } from "react-router-dom";

import AnimatedRoutes from "./components/layout/AnimatedRoutes";
// import { createContext } from "react";
import { MeetingContext, meteredMeeting } from "./MeetingContext";


function App() {
  return (
    <MeetingContext.Provider value={meteredMeeting}>
      <Router>
        {/* The Router component wraps the application to enable routing */}
        <AnimatedRoutes />
      </Router>
    </MeetingContext.Provider>
  );
}

export default App;
