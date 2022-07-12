import { MDBTabPane } from 'mdbreact';
import React from 'react';

export class About extends React.Component {

    render() {
        return (
            <div className="main" >
            <MDBTabPane tabId="1" role="tabpanel"> 
            <p className="mt-2">
             Hi !!! <br></br><br></br>
             Welcome <br></br><br></br>
             In our site you can find many bags for every opportunity <br></br><br></br>
             we wish that you will enjoy in our website!!<br></br><br></br>
             have a good day!!<br></br><br></br>
             😍😍😍😍😍<br></br><br></br>
            </p>
          </MDBTabPane>
      
            </div>
        );
    }
}
