import React from "react";
import "./Form.css";

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstNameData: '',
            lastNameData: '',
            emailData: '',

            submitted: false,

            allValid: false
        }
    }

    formSubmit (event) {
        event.preventDefault()
        this.setState({submitted: true})
        
        const allFormFilled = ['firstNameData','lastNameData','emailData'].every(x=>this.state[x].trim() !== '')
        console.log("🚀 ~ App ~ formSubmit ~ allFormFilled:", allFormFilled)

        this.setState({allValid: allFormFilled})

        if (allFormFilled) {
            setTimeout(()=>{
                this.setState({allValid:false})
            }
                ,5000)
        }
    }
    nameHandler (event) {
        this.setState ({firstNameData : event.target.value}) 
    }
    lastHandler (event){
        this.setState({lastNameData: event.target.value})
    }
    emailHandler(event){
        this.setState({emailData: event.target.value})
    }


    render() {
        return (
            <div className="form-container">
                <form className="register-form" autoComplete="off" onSubmit={(event)=>this.formSubmit(event)}>
                    {/* Uncomment the next line to show the success message */}
                    {this.state.allValid && this.state.submitted && (<div className="success-message">Success! Thank you for registering</div>) } 
                      
                    <input
                        id="first-name"
                        className="form-field"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        onChange={(event)=>this.nameHandler(event)}
                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && this.state.firstNameData.length === 0 && (<span id="first-name-error">Please enter a first name</span>)}
                    <input
                        id="last-name"
                        className="form-field"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={(event)=>this.lastHandler(event)}
                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && this.state.lastNameData.length === 0 && (<span id="last-name-error">Please enter a last name</span>)}
                    <input
                        id="email"
                        className="form-field"
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={(event)=>this.emailHandler(event)}
                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && this.state.emailData.length === 0 && (<span id="email-error">Please enter an email address</span>)}
                    <button className="form-field" type="submit">
                        Register
                    </button>
                </form>
            </div>

        )
    }
}
