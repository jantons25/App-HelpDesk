import {BrowserRouter, Routes, Route} from'react-router-dom';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import TasksPage from './pages/TasksPage.jsx';
import TaskFormPage from './pages/TaskFormPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import ProtectedRoute from './ProtectedRoute';
import { TaskProvider } from './context/TasksContext.jsx';
import NavBar from './components/NavBar.jsx';

function App(){
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className='container mx-auto px-10'>
            <NavBar />
            <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/login' element={<LoginPage />}/>
              <Route path='/register' element={<RegisterPage />}/>

              <Route element={<ProtectedRoute />}>
                <Route path='/tasks' element={<TasksPage />}/>
                <Route path='/add-task' element={<TaskFormPage />}/>
                <Route path='/tasks/:id' element={<TaskFormPage />}/>
                <Route path='/profile' element={<ProfilePage />}/>
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App;