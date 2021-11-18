import { Component } from "react";
import CrwnButton from "../crwn-button/crwn-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss"

class SingIn extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  }

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({[name]: value})
  }

  submitHandler = e => {
    e.preventDefault()
  }

  render() {
    const {email, password} = this.state
    return(
      <div className="sing-in-container">
        <h2>I aleady have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.submitHandler} >
          <FormInput
            name="email"
            type="email"
            required
            onChange={this.changeHandler}
            value={email}
            label="email"
          />
          <FormInput
            name="password"
            type="password"
            required
            onChange={this.changeHandler}
            value={password}
            label="password"
          />
          <CrwnButton type="submit">Sign in</CrwnButton>
        </form>
      </div>
    )
  }
}

export default SingIn;