import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './hooks/index';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import Content from './components/Content/Content';
import LoginPage from './pages/login/loginPage';
import RegisterPage from './pages/register/registerPage';
import NotFound from './pages/NotFound/NotFound';
import ProtectedRoute from './routes/ProtectedRoute';
import LoadingBar from './components/LoaingBar/LoadingBar';

function App() {
  const {
    isLoggedIn,
    isRefreshing,
    isLoading,
  } = useAuth();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  if (isRefreshing || isLoading) {
    return <LoadingBar />
  }

  return <Routes>
    <Route path='/login' element={ <LoginPage />} />
    <Route path='/signup' element={ <RegisterPage />} />
    <Route 
      path='/'
      element={<ProtectedRoute isLoggedIn={isLoggedIn}> <Content /> </ProtectedRoute>}
    />
    <Route path="*" element={<NotFound/>}/>
  </Routes>
}

export default App;

// bkubjbjbj
// hvjhvyvtv@gmail.com
// jkbjbkbbvrxt5r6r6