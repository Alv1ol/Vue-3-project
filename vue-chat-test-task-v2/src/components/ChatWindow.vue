<script>
import { ref } from 'vue';

export default {
  props: ['userName', 'messages'],
  setup(props, { emit }) {
    const newMessage = ref('');

    const sendMessage = () => {
      emit('new-message', { text: newMessage.value, user: props.userName });
      newMessage.value = '';
    };

    const isCurrentUser = (user) => {
      return user === props.userName;
    };

    return { newMessage, sendMessage, isCurrentUser };
  }
}
</script>

<template>
    <div class="chat-window">
      <div class="header">{{ userName }}</div>
      <div class="messages">
        <div
          v-for="message in messages"
          :key="message.id"
          class="message"
          :class="{ right: isCurrentUser(message.user), left: !isCurrentUser(message.user) }"
        >
          <p>{{ message.text }}</p>
        </div>
      </div>
      <div class="message-input">
        <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message..." />
        <button @click="sendMessage">Отправить</button>
      </div>
    </div>
  </template>
  
  
  <style scoped>
  .chat-window {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    height: calc(100vh - 60px);
    width: 350px;
    overflow-y: auto;
    background-color: #f9f9f9;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .header {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 10px;
    text-align: left;
  }

  .header::after{
    content: "";
    display: block;
    border-bottom: 1px solid #ccc;
    width: 370px;
    margin-top: 13px;
    margin-left: -10px;
  }
  
  .messages {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-bottom: 10px;
  }
  
  .message {
    background-color: #e1f5fe;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 5px;
    max-width: 70%;
  }
  
  .message.right {
    align-self: flex-end;
    background-color: #95c2f5;
    border: 1px solid #a1a1a1;
  }
  
  .message.left {
    align-self: flex-start;
    background-color: #b3b1ff;
    border: 1px solid #a1a1a1;
  }
  
  .message-input {
    display: flex;
    align-items: center;
  }


  
  input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  