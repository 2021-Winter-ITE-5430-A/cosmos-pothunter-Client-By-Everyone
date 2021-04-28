import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
const Display = () => { 

    return (
        <div>
        <p style={{textAlign:'center'}}>
          <b> User needs to login to view this page</b>
        </p>
        <p style={{textAlign:'center'}}>
        {" "}
        <br/>

        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    
</div>
    )
//   <div className="contact-section">

  {/* </div> */}
}
export default Display