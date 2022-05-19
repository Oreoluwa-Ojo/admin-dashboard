import Sidebar from "../Homepage/sidebar";
import React, { useEffect, useState } from 'react';
import './team.css'


    

const Team = () => {
    const [teamMembers, setTeamMembers] = useState([])

    const url = 'https://fakerapi.it/api/v1/persons?_quantity=10';

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setTeamMembers(data.data))
   
    }, [])
    


    return <>
  
       <div className="tean">
       <h1>Team Members</h1> <br/> <br/> <br/>
            <div>

             <div>

                 <table>
                     <thead>
                         <tr>
                             <th> FULL NAME</th>
                             <th> EMAIL</th>
                             <th> PHONE NO</th>
                             <th> GENDER</th>
                         </tr>
                     </thead>

                     <tbody>

                         {
                             teamMembers ? teamMembers?.map((teamMember, idx) => (
                            <tr key={idx}>
                             <td> 
                                 <p>
                                     <span> {teamMember.firstname}</span>
                                     <span> {teamMember.lastname}</span>
                                 </p>
                                 
                                </td>
                             <td> {teamMember.email}</td>
                             <td> {teamMember.phone}</td>
                             <td> {teamMember.gender}</td>
                         </tr>
                             ) ) : null
                         }
                         
                     </tbody>
                 </table>
                        
             </div>
            </div>
    </div>
    <Sidebar/>
    </>
}

export default Team;