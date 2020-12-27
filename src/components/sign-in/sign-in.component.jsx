import { render } from '@testing-library/react';
import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import '../custom-button/custom-button.styles.scss';
// import { ReactComponent as GoogleLogo } from '../../assets/google-logo.svg'
import { signInWithGoogle } from '../../firebase/firebase.utils'


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account.</h2>
                <span>Sign in with your email and password.</span>
    
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        label="Email"
                        handleChange={this.handleChange}
                        required />
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        label="Password"
                        handleChange={this.handleChange}
                        required />
    
                    <CustomButton className="btn btn-light" type="submit" >Sign In</CustomButton>
                    <CustomButton className="btn btn-blue" onClick={signInWithGoogle} >Sign in with Google 
                    </CustomButton>
                    

                </form>
            </div>
        )
    }
}



export default SignIn;
