import { useAuth } from './hooks/index';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Content from './components/Content/Content';
// import AuthPage from './pages/AuthPage/AuthPage';
import LoginPage from 'pages/login/loginPage';
import RegisterPage from 'pages/register/registerPage';
import NotFound from 'pages/NotFound/NotFound';
import ProtectedRoute from 'routes/ProtectedRoute';

function App() {
  const {
    isLoggedIn
  } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if(isLoggedIn){
      navigate('/')
    }
  }, [isLoggedIn])

  // if (isLoggedIn) {
  //   return <Content />
  // } else {
  //   return <AuthPage />
  // }


  return <Routes>
    <Route path='/login' element={ <LoginPage/> }/>
    <Route path='/signup' element={ <RegisterPage/> }/>
    <Route 
      path='/'
      element={<ProtectedRoute isLoggedIn={isLoggedIn}><Content/></ProtectedRoute>}
    />
    <Route path='*' element={ <NotFound/> }/>
  </Routes>
}

export default App;



// boudgsfghj@gmail.com
// klmfkjtuihueri652