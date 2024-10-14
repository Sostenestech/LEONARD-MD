const {zokou}=require("../framework/zokou")







zokou({nomCom:"restart",categorie:"Mods",reaction:"📴"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("Command only for Leornard");
  }

  const {exec}=require("child_process")

    repondre("*Leonard-Md ir Restarting⏳*");

  exec("pm2 restart all");
  

  



})
