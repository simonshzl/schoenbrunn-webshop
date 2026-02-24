import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

import StepFahrt from './pages/booking/StepFahrt'
import StepDetails from './pages/booking/StepDetails'
import StepPerson from './pages/booking/StepPerson'
import StepSummary from './pages/booking/StepSummary'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetInfo from './pages/auth/ResetInfo'

import Header from './components/Header'
import Profil from './pages/Profil'

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/registrieren" element={<Register />} />
        <Route path="/passwort-vergessen" element={<ForgotPassword />} />
        <Route path="/passwort-info" element={<ResetInfo />} />

        <Route path="/buchen/fahrt" element={<StepFahrt />} />
        <Route path="/buchen/details" element={<StepDetails />} />
        <Route path="/buchen/person" element={<StepPerson />} />
        <Route path="/buchen/summary" element={<StepSummary />} />

        <Route path="/profil" element={<Profil />} />
      </Routes>
    </>
  )
}
