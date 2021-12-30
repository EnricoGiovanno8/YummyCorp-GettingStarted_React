import React, { SyntheticEvent } from "react";
import '../Login.css'

class Register extends React.Component {
    first_name = '';
    last_name = '';
    email = '';
    password = '';
    password_confirm = '';

    submit = (e: SyntheticEvent) => {
        e.preventDefault()

        console.log({
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confirm,
        })
    }

    render() {
        return (
            <main className="form-signin">
                <form onSubmit={this.submit}>
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="input-first-name" placeholder="First Name"
                            onChange={(e) => this.first_name = e.target.value}
                        />
                        <label htmlFor="floatingInput">First Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="input-last-name" placeholder="Last Name"
                            onChange={(e) => this.last_name = e.target.value}
                        />
                        <label htmlFor="floatingInput">Last Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" placeholder="Email"
                            onChange={(e) => this.email = e.target.value}
                        />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="password" placeholder="Password"
                            onChange={(e) => this.password = e.target.value}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="password-confirm" placeholder="Password Confirm"
                            onChange={(e) => this.password_confirm = e.target.value}
                        />
                        <label htmlFor="floatingPassword">Password Confirm</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                </form>
            </main>
        )
    }
}

export default Register