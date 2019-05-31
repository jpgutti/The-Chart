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

    handleSumbit = () => {

        const { user } = this.state

        this.setState({loading: true})

        axios.post("//localhost:8080/auth/register", user)
            .then(data => {
                console.log(data)
            }).catch(({response}) => {
                console.log(response);
            })


        this.setState({loading: false})
        
    }

    

    render(){

        const { loading } = this.state;

        return(
            <div id="SignUp">
                <form>
                    <input required onChange={(e) => this.setState({...this.state.user, name: e.target.value})} type="text" placeholder="Name"/>
                    <input required onChange={(e) => this.setState({...this.state.user, email: e.target.value})} type="email" placeholder="E-mail"/>
                    <input required onChange={(e) => this.setState({...this.state.user, password: e.target.value})} type="password" placeholder="Password"/>
                    <button type="submit" onClick={() => this.handleSumbit()} className="SumbitBtn">
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