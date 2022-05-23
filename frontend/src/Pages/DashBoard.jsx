import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import GoalForm from '../Components/GoalForm'
import { getGoals, reset } from '../redux/features/goal/goalSlice'
import Spinner from '../Components/Spinner'

const DashBoard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset)
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) <Spinner />

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
