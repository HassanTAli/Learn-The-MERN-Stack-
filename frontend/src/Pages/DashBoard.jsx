import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import GoalForm from '../Components/GoalForm'

const DashBoard = () => {
    const navigate = useNavigate()
    const { user } = useSelector(state => state.auth)

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate])

    return (
        <>
            <section className="heading">
                <h1>welcome {user && user.name}</h1>
                <p>Goals Dashboard</p>
            </section>
            <GoalForm />
        </>
    )
}

export default DashBoard