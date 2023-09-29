export const Service = {
    storeUser: function (data){
        const arrData = [data];
        const stringData = JSON.stringify(arrData);

        const alluser = this.getAllUsers();

        if(alluser){
            console.log(typeof [alluser])
            if(Array.isArray(alluser)){
                const finalData = [...alluser, data]; 
                // const finalData = alluser.push(data);

                const finalStringData = JSON.stringify(finalData);
                
                return localStorage.setItem('yData', finalStringData);
            }else{
                const finalData = [alluser, data];
                
                const finalStringData = JSON.stringify(finalData);
                ////////////////////////////////////////////////////////////
                return localStorage.setItem('yData', finalStringData);
            }
           
        }else{ 
             return localStorage.setItem('yData', stringData), alluser;
        }
        
    },

    getAllUsers: function (){
       return JSON.parse(localStorage.getItem('yData'))
    },

    getUser: function(email){
        const userData = this.getAllUsers();
        const userObj = userData.find((result)=>result.email === email)
        
        return userObj;
    },
    getUserByEmailPassword: function(email, password){
        const userData = this.getAllUsers();
        const userObj = userData.find((result)=>result.email === email && result.password === password)
       ////////////////
        return userObj;
        //
    },

    removeUser: function () {
        return localStorage.removeItem('yData');
    },


    // ///////////////
    userOnsite: function () {
        
    //     //////////////////////
        const userData = this.getAllUsers();
        if (userData) {
            window.location.href = "/login.html";
        } else {
            
            const sessionSave = JSON.stringify(getUserByEmailPassword(email.value, password.value));
            sessionStorage.setItem('sessionSave', sessionSave);
            // sessionStorage.setItem('sessionSave', sessionSave);
            sessionSave;

        }
    console.log('Welcome')
    //  sect = sessionStorage.getItem('sessionSave');
    // return sect;
     
    }
    
}


            // const alluser.find((res)=>res.email === data.email)