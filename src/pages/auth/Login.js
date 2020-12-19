import React, { useState } from 'react'
import '../../styles/auth/style.scss'
// import axios from 'axios'
// import api from '../../utils/api'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import jwt_decode from 'jwt-decode'

toast.configure({ autoClose: 2000 })

const Login = () => {
    const history = useHistory()
    const { register, handleSubmit, errors } = useForm()
    const [isLoading, setLoading] = useState(false)


    if (localStorage.getItem('token')) {
        history.push('/admin')
    }

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            console.log(data)
            localStorage.setItem('token', data.email)
            history.push('/admin')

            // const response = await axios.post(`${apiURL}login`, data)
            // if (response.status === 200) {
            //     const user = response.data.token.split('.')[0]
            //     if (user === 'user') {
            //         localStorage.setItem('token', response.data.token)
            //         history.push('/account')
            //         setLoading(false)
            //     } else {
            //         setLoading(false)
            //         toast.warn('Invalid e-mail or password.')
            //     }
            // }
        } catch (error) {
            if (error && error.response.status !== 200) {
                setLoading(false)
                toast.warn(error.response.data.message)
            }
        }
    }


    return (
        <div className="Auth">
            <div className="flex-center flex-column">

                <div className="text-center logo-box">
                    <Link to="/">
                        <h5 className="mb-0">Back to Home</h5>
                    </Link>
                </div>

                <div className="card shadow border-0">
                    <div className="card-header text-center bg-white">
                        <h4 className="mb-0">Login</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* E-mail */}
                            <div className="form-group mb-3">
                                {errors.email && errors.email.message ? (
                                    <small className="text-danger">{errors.email && errors.email.message}</small>
                                ) : <small>E-mail</small>
                                }

                                <input
                                    type="text"
                                    name="email"
                                    className="form-control shadow-none"
                                    placeholder="example@gmail.com"
                                    ref={register({
                                        required: "E-mail is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                />
                            </div>

                            {/* Password */}
                            <div className="form-group mb-3">
                                {errors.password && errors.password.message ? (
                                    <small className="text-danger">{errors.password && errors.password.message}</small>
                                ) : <small>Password</small>
                                }

                                <input
                                    type="password"
                                    name="password"
                                    className="form-control shadow-none"
                                    placeholder="*****"
                                    ref={register({
                                        required: "Please enter password",
                                        minLength: {
                                            value: 8,
                                            message: "Minimun length 8 character"
                                        }
                                    })}
                                />
                            </div>

                            <button type="submit" className="btn btn-block shadow-none" disabled={isLoading}>
                                {isLoading ? <span>Logging...</span> : <span>Login</span>}
                            </button>

                        </form>

                        <div className="text-right mt-1">
                            <p className="mb-1">Forgot password ? <Link to="/reset">Reset</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;