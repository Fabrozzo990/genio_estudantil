const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');

function sendMessage() {
  const userMessage = userInput.value;
  chatbox.innerHTML += `<div class="user-message">${userMessage}</div>`;

  fetch('https://api.google.com/language/conversational/v1/models:converse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer AIzaSyCgZcZ9WtcbZYBMvMVZ-hWNxVNZJp5ImCM'
      },
      body: JSON.stringify({
        model: 'gemini-1.5-flash', // Substitua por seu modelo Gemini
        prompt: userMessage
      })
  })
  .then(response => response.json())
  .then(data => {
      const assistantResponse = data.message.content;
      chatbox.innerHTML += `<div class="bot-message">${assistantResponse}</div>`;
  })
  .catch(error => {
      console.error('Error:', error);
      chatbox.innerHTML += `<div class="error-message">Desculpe, ocorreu uns erro. Tente novamente mais tarde.</div>`;
  });

  userInput.value = '';
}