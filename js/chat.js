let messages_element = document.querySelector('#messages');

async function getMessages(){
    const response = await fetch('/messages');
    const messages = await response.json();
    messages_element.innerHTML = '';
    messages.forEach(message => {
       messages_element.insertAdjacentHTML("beforeend", `<p><span>${message.message}</span></p>`)
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