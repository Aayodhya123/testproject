/// <reference types='cypress'/>

import {LoginPage} from "../../../../pages/firstlogin_page";

const loginpage=new LoginPage()

it('login test',function(){
    loginpage.navigate()
    loginpage.enterusername()
    loginpage.enterpassword()
    loginpage.clickonloginbtn()


})