/// <reference types='cypress'/>
 
import {ThirdLogin} from "../../../../pages/thirdlogin_page"

const thirdlogin=new ThirdLogin()
it('thirdlogin test',function(){

    thirdlogin.navigate('https://opensource-demo.orangehrmlive.com/')
    thirdlogin.enteruser('Admin')
    thirdlogin.enterpassword('admin123')
    thirdlogin.clicklogin()



})