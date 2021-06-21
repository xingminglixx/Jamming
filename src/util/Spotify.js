const clientID='3a701f01ef5a442bbd7922a1900d0187'
const redirectURL='http://localhost:3000'

let accessToken 
let spotify={

getAccessToken(){
    if (userAccessToken){
        return userAccessToken

    }
const accessTokenMatch= window.location.href.match(/access_token=([^&]*)/)
const expireInMatch=window.location.href.match(/expires_in=([^&]*)/)
if (accessTokenMatch&&expireInMatch){
accessToken=accessTokenMatch[1]
const expiresIn= Number(expireInMatch[1])
window.setTimeout(() => accessToken = '', expiresIn * 1000);
window.history.pushState('Access Token', null, '/');
return accessToken

}else{




    
}


}




}


















export spotify