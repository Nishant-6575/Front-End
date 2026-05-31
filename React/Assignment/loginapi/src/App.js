import Home from './Home';
import { AuthProvider } from './AuthContext';

function App() {
  return (
     <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default App;
