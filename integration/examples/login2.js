/// <reference types='cypress'/>

import { SecondLogin } from "../../../../pages/secondlogin_page";

const secondlogin=new SecondLogin()

it('secondlogin test',function(){

    secondlogin.navigate('https://opensource-demo.orangehrmlive.com/')
    secondlogin.enteruser('Admin')
    secondlogin.enterpassword('admin123')
    secondlogin.clicklogin()

})