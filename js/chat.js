let messages_element = document.querySelector('#messages');

(async () => {
    const response = await fetch('/messages');
    const messages = await response.json();
    messages.forEach(message => {
       messages_element.insertAdjacentHTML("afterbegin", `<p><span>${message.message}</span></p>`)
    });
})();