import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import Error from '../components/Error';

class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
    }
    

    async componentDidMount(){
       
         await EmployeeService.getEmployees().then(( res) => {
            this.setState({ employees: res.data});
        });
    
    }

   
        
   
    render() {

        try{
        
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered table-hover">

                        <thead>
                            <tr class="thead-dark">
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                               this.state.employees.map(
                                    employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                    </tr>
                                )
                            }

                        </tbody>

                    </table>


                </div>
            </div>
        );
    }
catch(e){
    console.log("Error Caught in ListEmployeeComponent");
    return(
        <div>
            <Error />
        </div>
    );
}
}
}

export default ListEmployeeComponent;