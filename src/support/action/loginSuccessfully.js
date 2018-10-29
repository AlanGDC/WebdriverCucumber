import waitForVisible from '../action/waitForVisible';

module.exports = () => {
 var username = 'Alan_Carvalhosa',
     password = 'faithless9',
     loginUrl = 'https://crmwebtest.capsulecrm.com/';


	 browser.url(loginUrl)
    		.setValue('//*[@id="login:usernameDecorate:username"]', username)
        	.setValue('//*[@id="login:passwordDecorate:password"]', password)
       		.click('//*[@id="login:login"]')
	.click('/html/body/div[4]/section[1]/div/div[1]/div/button')
      
   	;

};
 