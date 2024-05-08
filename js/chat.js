let messages_element = document.querySelector('#messages');

async function getMessages(){
    const response = await fetch('/messages');
    const messages = await response.json();
    messages_element.innerHTML = '';
    messages.forEach(message => {
        console.log(message)
        messages_element.insertAdjacentHTML("beforeend", `<div id="message-${message.message_id}" class="message"><span>${message.message}</span></div>`)
    });
}getMessages();

async function send() {
    const response = await fetch('/send', {
        method: "POST",
        body: document.querySelector('input').value
    });
    document.querySelector('input').value = '';
    document.querySelector('input').focus()
    getMessages();
}