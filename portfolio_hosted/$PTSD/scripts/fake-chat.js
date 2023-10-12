document.addEventListener("DOMContentLoaded", function () {
  const fakeChatContainer = document.getElementById("chatMessagesContainer");

  const messages = [
    "/BUY",
    "/DEV_IS_BASED",
    "/REVERSAL_INCOMING",
    "/BUY_THE_DIP",
    "/1M_FLOOR_TODAY",
  ];

  function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  }

  function getRandomTimeout() {
    return Math.floor(Math.random() * 200) + 100;
  }

  function getRandomRepeatCount() {
    return Math.floor(Math.random() * 6) + 5;
  }

  function addMessage(repeatCount, message) {
    if (!message) {
      message = getRandomMessage();
    }

    if (!repeatCount) {
      repeatCount = Math.random() > 0.7 ? getRandomRepeatCount() : 1;
    }

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message");
    messageDiv.innerText = message;
    fakeChatContainer.appendChild(messageDiv);

    if (fakeChatContainer.childNodes.length > 5) {
      fakeChatContainer.removeChild(fakeChatContainer.firstChild);
    }

    repeatCount--;

    if (repeatCount > 0) {
      setTimeout(() => addMessage(repeatCount, message), getRandomTimeout());
    } else {
      setTimeout(addMessage, getRandomTimeout());
    }
  }

  addMessage();
});
