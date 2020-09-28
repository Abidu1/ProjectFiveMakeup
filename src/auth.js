

class Auth{






checkAuthenticated()
{


    let token=localStorage.getItem("email");

    if(!token)
    {
    
        return false;
    }
    else{
    
        return true;
    }
}







}


export default new Auth();