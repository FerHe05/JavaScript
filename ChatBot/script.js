const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler= document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");


let userMessage;
const API_KEY="";


const createChatLi = (message, className) =>{
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat",className);
    let chatContent = className === "outgoing" ? '<p></p>' : '<span class="materials"><img src="images/robo.png"></span><p>${message}</p>';
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}


const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;
    chatInput.value = "";
    createChatLi(userMessage, "outgoing");
    chatbox.appendChild(createChatLi(userMessage,"outgoing"));
    chatbox.scrollTo(0,chatbox.scrollHeight);
    
    setTimeout(()=>{
        const incomingChatLi = createChatLi("Thinking...", "incoming")
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0,chatbox.scrollHeight);
        genteteResponse(incomingChatLi);
    },600);
    }
    chatbotToggler.addEventListener("click" , ()=>document.body.classList.toggle("show-chatbot"));
    chatbotCloseBtn.addEventListener("click" , ()=>document.body.classList.remove("show-chatbot"));

    sendChatBtn.addEventListener("click", handleChat);
    const genteteResponse = (incomingChatLi) => {
        const API_URL = "https://api.openai.com/v1/chat/completions";
        const messageElement = incomingChatLi.querySelector("p");
        
        
        const requestOptions = {
            method:"POST",
            headers:{
            "Content-Type": "application/json",
            "Authorization" : 'Bearer ${API_KEY}'
        },
        body: JSON.stringify({
            model : "gpt-3.5-turbo",
            messages:[{role: "user", content: "Hello!"}]
        })
        }
        fetch(API_URL, requestOptions).then(res => res.json()).then(data =>{
            messageElement.textContent = data.choices[0].message.content;
        }).catch((error)=>{
            messageElement.textContent = "Something went wrong, Please try again!"
        }).finally( () => chatbox.scrollTo(0,chatbox.scrollHeight));
    }

