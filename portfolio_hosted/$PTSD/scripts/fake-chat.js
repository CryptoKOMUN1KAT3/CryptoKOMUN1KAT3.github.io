document.addEventListener("DOMContentLoaded", function () {
  const fakeChatContainer = document.getElementById("chatMessagesContainer");

  const messages = [
    "/BUY",
    "/DEV_IS_BASED",
    "/REVERSAL_INCOMING",
    "/BUY_THE_DIP",
    "/1M_FLOOR_TODAY",
    "/THIS_CURED_MY_PTSD",
    "/ON_GOD_THE_DEV_IS_BASED",
  ];

  const users = [
    "Whale Khabib",
    "Come To Dubai",
    "King Cheng",
    "0xPickle",
    "$PTSDenjoyer",
    "Crypto Nikita",
    "Ralph Henries",
    "Sanjeet (never DM first)",
  ];

  function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  }

  function getRandomUser() {
    const randomIndex = Math.floor(Math.random() * users.length);
    return users[randomIndex];
  }

  function getRandomTimeout() {
    return Math.floor(Math.random() * 800) + 500;
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

    const user = getRandomUser();
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message");
    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    messageDiv.innerHTML = `<strong>${user}:</strong> ${message} <span style="font-size: 0.7em; color: grey;">${timestamp}</span>`;
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
