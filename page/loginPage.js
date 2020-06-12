import {Selector as $,t} from 'testcafe';
import validLogin from '../../ShopeeLearn/role/loginRole';

const loginPage = {
    url:        'login',
    txtUsername:    $('#login_field'),
    txtPassword:    $('#password'),
    btnLogin:       $('input[type="submit"]'),

    async login(username,password){
        await t
        .typeText(this.txtUsername,username)
        .typeText(this.txtPassword,password)
        .click(this.btnLogin)
    }
}

export default loginPage;