import {Role} from 'testcafe';
import basePage from '../page/basePage';
import loginPage from '../page/loginPage';

const validLogin = (username,password) =>{
    return Role(`${basePage.baseUrl}${loginPage.url}`,async () =>{
        await loginPage.login(username,password);
    })
}

export default validLogin;