import React, { useEffect, useState } from 'react';
import Sidebar from "./sidebar3";
import './client.css'

function Clients() {

    const [clients, setClients] = useState([])

    const url = 'https://fakerapi.it/api/v1/companies?_quantity=15';

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setClients(data.data))
   
    }, [])
    

    return <> 

<div className="tean">
    <h1>Our Clients</h1> <br/> <br/> <br/>
                <div>

                <div>

                    <table>
                        <thead>
                            <tr>
                                <th> FULL NAME</th>
                                <th> EMAIL</th>
                                <th> PHONE NO</th>
                                <th> COUNTRY</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                clients ? clients?.map((client, idx) => (
                                <tr key={idx}>
                                <td>{client.name}</td>
                                <td> {client.email}</td>
                                <td> {client.phone}</td>
                                <td> {client.country}</td>
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

export default Clients;