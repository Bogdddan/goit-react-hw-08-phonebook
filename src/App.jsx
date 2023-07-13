import { useAuth } from './hooks/index';
import Content from './components/Content/Content';
import AuthPage from './pages/AuthPage/AuthPage';

function App() {
  const {
    isLoggedIn
  } = useAuth();

  if (isLoggedIn) {
    return <Content />
  } else {
    return <AuthPage />
  }
}

export default App;