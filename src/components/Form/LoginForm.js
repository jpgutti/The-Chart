import React from 'react';
import Context from '../Context/context';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import './Form.css'

class LoginForm extends React.Component {
    
    static contextType = Context

    state = {
        loading: false,
        user: {}
    }

    handleSubmit(e){
        e.preventDefault();
        
        const { user } = this.state

        axios.post(process.env.REACT_APP_API_URL + "/auth/authenticate", user)
        .then(({data}) => {

            const { user } = data

            this.context.handleUser(user);

        })
        .catch(({response}) => {

            const { data } = response
            console.log(data)

        })


    }    
    
    render(){

        console.log(this.context)
        

        const { loading, user } = this.state
        
        return(
            <div id="Login">
                <Context.Consumer>
                    {context => (
                        <form action="" noValidate>
                            <input onChange={(e) => this.setState({user: {...user, email: e.target.value}})} required placeholder="E-mail"/>
                            <input onChange={(e) => this.setState({user: {...user, password: e.target.value}})} required type="password" placeholder="Password"/>
                            <button onClick={(e) => this.handleSubmit(e)} className="SumbitBtn">
                            {loading ?
                                <Loader type="TailSpin" color="#fff" height={20} width={20} />
                                :
                                "Login"
                            }
                            </button>
                        </form>
                    )}
                </Context.Consumer>
            </div>
        )
    }
}

export default LoginForm