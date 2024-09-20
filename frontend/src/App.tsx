import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import AnimatedRoutes from './components/layout/AnimatedRoutes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* The Router component wraps the application to enable routing */}
        <AnimatedRoutes />
      </Router>
    </Provider>
  );
}

export default App;
