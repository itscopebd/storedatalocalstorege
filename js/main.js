const sendName=()=>{
 const name=document.getElementById("name").value;
 localStorage.setItem("name",name)
}
const sendMail=()=>{
    const email=document.getElementById("email").value;
    localStorage.setItem("email",email)
   }

   const sendMessage=()=>{
    const message=document.getElementById("message").value;
    localStorage.setItem("Message",message)
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