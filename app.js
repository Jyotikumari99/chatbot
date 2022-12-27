const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtinput");
const send = document.querySelector(".send");
send.addEventListener("click", () => renderUserMessage());

txtInput.addEventListener("keyup", () => {
  if (event.keycode === 13) {
    renderUserMessage();
  }
});
const renderUserMessage = () => {
  const userInput = txtInput.value;
  renderMessage(userInput,"user");
  txtInput.value = ""; /*after sending the text it will get removed from input box*/
// renderChatbotResponse(userInput);
setTimeout(()=>{
     renderChatbotResponse(userInput);
})
};
const renderChatbotResponse=(userInput)=>{
     const res=getChatbotResponse(userInput);
     renderMessage(res);
}
const renderMessage = (txt,type) => {
     let className="user-message";
     if(type!=='user')
     {
          className="chatbot-message";
     }
  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.classList.add(className);
  messageEle.append(txtNode);
  chatBody.append(messageEle);
};

const getChatbotResponse = (userInput) => {
  return responseObj[userInput] == undefined
    ? "Please try something else"
    : responseObj[userInput]; /*return response from bot*/
};

const setScrollPosition=()=>{
   if(chatBody.scrollHeight>0) 
   {
     chatBody.scrollTop=chatBody.scrollHeight;
   } 
}
