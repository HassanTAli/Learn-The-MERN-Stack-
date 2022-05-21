import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Components/Header'
import DashBoard from '../Pages/DashBoard'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

import './App.css'

const App = () => {
    return (
        <>
            <Router>
                <div className="container">
                    <Header />
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