import axios from 'axios';
import Error from '../components/Error';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {

         getEmployees(){
         
            return axios.get(EMPLOYEE_API_BASE_URL).catch(error => () => <Error />);
            
        }
}

export default new EmployeeService();