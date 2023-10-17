import { 
  BrowserRouter,
  Navigate, 
  Route, 
  Routes,
} from 'react-router-dom'

import './App.css';

//layouts
import RootLayout from './layouts/RootLayout';
import DashboardLayout from './layouts/DashboardLayout';

//pages
import Error from './pages/Error';
import ImageUpload from './pages/ImageUpload';
import LandingPage from './pages/Landing';
import Dashboard from './pages/Dashboard';
import RegisterPatient from './pages/RegisterPatient';
import About from './pages/About';
import PreviousScans from './pages/PreviousScans';
import ImageResult from './pages/ImageRessult';
import Register from './pages/Register'
import Login from './pages/login';
import PatientList from './pages/PatientList';


//hook import
import { useAuthContext } from './hooks/useAuthContext';
import UploadDicomImage from './pages/UploadDicomImage';
import Bookmaks from './pages/Bookmaks';
import { useImagesContext } from './hooks/useImageContext';
import PatientDetails from './pages/PatientDetails';


function App() {

  const context = useAuthContext()
  const {user} = context
  console.log("the onctext", context)
  const {image} = useImagesContext()
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />} errorElement={<Error/>}>
          <Route index element= {<LandingPage/>}/>
          <Route path='about' element= {<About/>}/>
          <Route path="login" element={user == null? <Login />: <Navigate to='/dashboard'/>}/>
          <Route path="register" element={!user? <Register />: <Navigate to='/dashboard'/>} />
          <Route path= 'dashboard' element = {user? <DashboardLayout />: <Navigate to='/login'/>}>
            <Route index element= {user?  <Dashboard/>: <Navigate to='/login'/> } />
            <Route path="upload-dicom" element={user? <UploadDicomImage/>: <Navigate to='/login'/>} />
            <Route path="upload-png" element={user? <ImageUpload/>: <Navigate to='/login'/>} />
            <Route path="register-patient" element={user? <RegisterPatient/>: <Navigate to='/login'/>} />
            <Route path="previous-scans" element={user? <PreviousScans/>: <Navigate to='/login'/>} />
            <Route path="patient-list" element={user? <PatientList/>: <Navigate to='/login'/>} />
            <Route path="patient-list/:id" element={user? <PatientDetails/>: <Navigate to='/login'/>} />
            <Route path="result" element={user && image?<ImageResult />: <Navigate to='/login'/>} />
            <Route path="bookmarks" element={user?<Bookmaks />: <Navigate to='/login'/>} />
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
