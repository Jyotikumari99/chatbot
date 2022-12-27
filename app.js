const chatBody=document.querySelector('.chat-body');
const txtInput=document.querySelector('#txtinput');
const send=document.querySelector('.send');
send.addEventListener('click',()=>renderUserMessage());

txtInput.addEventListener("keyup",()=>{
     if(event.keycode===13){
         renderUserMessage(); 
     }
})
const renderUserMessage=()=>{
const userInput=txtInput.value;
renderMessage(userInput);
txtInput.value="";/*after sending the text it will get removed from input box*/

}
const renderMessage=(txt)=>{
const messageEle=document.createElement('div');
const txtNode=document.createTextNode(txt);
messageEle.classList.add("user-message");
messageEle.append(txtNode);
chatBody.append(messageEle);
}
