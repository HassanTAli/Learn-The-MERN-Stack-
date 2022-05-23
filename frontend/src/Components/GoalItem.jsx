import { useDispatch } from 'react-redux'
import { deleteGoal } from '../redux/features/goal/goalSlice'

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch()

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2>{goal.text}</h2>
      <div className="close" onClick={() => dispatch(deleteGoal(goal._id))}>
        X
      </div>
    </div>
  )
}

export default GoalItem
