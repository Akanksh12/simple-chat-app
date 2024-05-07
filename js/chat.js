let messages_element = document.querySelector('#messages');

(async () => {
    const response = await fetch('/messages');
    const messages = await response.json();
    console.log(messages)
    messages.forEach(message => {
       messages_element.insertAdjacentHTML("afterbegin", `<p>${message.message}</p>`)
    });
})();