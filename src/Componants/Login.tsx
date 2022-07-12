
import React, { Fragment } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { checkManger, newUser } from "../redax/users/users";
import { Link } from 'react-router-dom';

type MyState = {
    flag: boolean
};

export class Login extends React.Component<{}, MyState> {

    // constructor(props: MyState) {
    //     super(props);
    //     this.state = { flag: false }
    // }

    state:MyState={
        flag: true,

    }


    check(e: any) {
        var m: boolean = checkManger(e.target[0].value, e.target[1].value);
        if (m == true) {
            debugger;
            this.setState({ flag: true });
        }
        newUser(e.target[0].value, e.target[1].value);
    }
    render() {
        return (

            <>
                <div className='space'></div><br />
                <MDBContainer>
                    <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => this.check(event)}>
                        <div className="row">
                            <div className="col-50">
                                <label ><i className="fa fa-user"></i> Name</label>
                                <input type="text" id="fname" name="firstname" placeholder='enter user name' />
                                <label ><i className="fa fa-envelope"></i> Password</label>
                                <input type="password" id="firstname" name="firstname" placeholder='enter user password' />
                                <input type="submit" value="sign in" className="btn" />
                            </div>
                        </div>
                    </form>
                </MDBContainer>
                {
                    this.state.flag &&
                    <Link to="/ManegerOptions" >ManegerOptions</Link>
                }
            </>
        );
    }

}


