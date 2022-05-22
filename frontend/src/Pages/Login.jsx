import { useEffect, useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../Components/Spinner';
import { login, reset } from '../redux/features/auth/authSlice';

const Login = () => {
    const [fromData, setFromData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = fromData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset)
    }, [user, isError, isSuccess, message, dispatch, navigate])


    const onChange = (e) => {
        setFromData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email, password
        }

        dispatch(login(userData))
    }

    if (isLoading) (
        <Spinner />
    )

    return <>
        <section className="heading">
            <h1>
                <FaSignInAlt /> Login
            </h1>
            <p>Login and start setting Goals. </p>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type='email'
                        className='form-control'
                        id='email'
                        name='email'
                        value={email}
                        placeholder="Enter your email"
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type='password'
                        className='form-control'
                        id='password'
                        name='password'
                        value={password}
                        placeholder="Enter password"
                        onChange={onChange}
                    />
                </div>
                <div className='from-group'>
                    <button type="submit" className='btn btn-block'>Login</button>
                </div>
            </form>
        </section>
    </>
}

export default Login