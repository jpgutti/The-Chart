import React from 'react';
import axios from 'axios';
import Context from '../Context/context';
import Loader from 'react-loader-spinner';
import './Form.css'

class SignUpForm extends React.Component {

    static contextType = Context

    state = {
        loading: false,
        user: {}
    }

    handleSumbit = (e) => {
        e.preventDefault()

        const { user } = this.state

        this.setState({loading: true})

        axios.post(process.env.REACT_APP_API_URL + "/auth/register", user)
            .then(({data}) => {
                const { user } = data

                this.context.handleUser(user);
            }).catch(({response}) => {
                const { data } = response
            })


        this.setState({loading: false})
        
    }
    
    handleChange(e, key){
        this.setState({user: {...this.state.user, [key]: e.target.value}})
    }

    

    render(){

        const { loading, user } = this.state;

        return(
            <div id="SignUp">
                <form>
                    <input required onChange={(e) => this.handleChange(e, "name")} type="text" placeholder="Name"/>
                    <input required onChange={(e) => this.handleChange(e, "email")} type="email" placeholder="E-mail"/>
                    <input required onChange={(e) => this.handleChange(e, "password")} type="password" placeholder="Password"/>
                    <button type="submit" onClick={(e) => this.handleSumbit(e)} className="SumbitBtn">
                    {loading ?
                        <Loader type="TailSpin" color="#fff" height={20} width={20} />
                        :
                        "Submit"
                    }
                    </button>
                </form>
            </div>
        )
    }
}

export default SignUpForm