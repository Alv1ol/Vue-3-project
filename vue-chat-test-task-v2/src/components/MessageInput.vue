<script>
import { ref } from 'vue';

export default {
  setup(_, { emit }) {
    const newMessage = ref('');

    const sendMessage = () => {
      emit('new-message', newMessage.value);
      newMessage.value = '';
    };

    return { newMessage, sendMessage };
  }
}
</script>

<template>
    <div class="message-input">
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message..." />
    </div>
</template>
  

  
<style scoped>
  .message-input {
  display: flex;
  margin-top: 10px;
}

.message-input::after{
    content: "";
    display: block;
    border-bottom: 1px solid #ccc;
    width: 1370px;
    margin-top: -100px;
    margin-left: -356px;
  }

input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
  </style>
  