import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashBoard from '../Components/DashBoard'
import Login from '../Components/Login'
import Register from '../Components/Register'

import './App.css'

const App = () => {
    return (
        <>
            <Router>
                <div className="container">
                    <Routes>
                        <Route path='/' element={<DashBoard />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App