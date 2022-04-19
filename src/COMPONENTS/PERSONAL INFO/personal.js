import React from "react";
import './personal.css'

const Personal = ()=>{
    return(
        <section id="section1">
           
            <div className="container">
            <p>general information section</p>
            <div className="paren">
            <div className="personal">
            <table>
                <tr>
                    <th>first name</th>
                    <th>last name</th>
                    <th> Email</th>
                    <th> Phone Number</th>

                </tr>
                <tr>
                    <td> yunus </td>
                    <td> abdullateef </td>
                    <td> yunusabdullateef@gmail.com </td>
                    <td> 08027259386</td>

                </tr>
                <tr></tr>

            </table>
            </div>
            </div>
            </div>
        </section>
    )
}

export default Personal