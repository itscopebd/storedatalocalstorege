let name=document.getElementById("name");
let message=document.getElementById("message");
let email=document.getElementById("email");

const sendName=()=>{
    const value=name.value;
 localStorage.setItem("name",value)
}
const sendMail=()=>{
    const value=email.value;
    localStorage.setItem("email",value)
   }

   const sendMessage=()=>{
    const value=message.value;
    localStorage.setItem("Message",value)
   }


const AllDataAdd=()=>{
    const dataObj={};
    dataObj['name']=name.value;
    dataObj['email']=email.value;
    dataObj['message']=message.value;
    const convertJson=JSON.stringify(dataObj);
    localStorage.setItem("information",convertJson)
    
}


//    delete process 

const deleteName=()=>{
    localStorage.removeItem("name")
}
const deleteEmail=()=>{
    localStorage.removeItem("email")
}
const deleteMessage=()=>{
    localStorage.removeItem("Message")
}