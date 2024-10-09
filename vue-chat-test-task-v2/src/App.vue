<script>
import { ref } from 'vue';
import ChatWindow from './components/ChatWindow.vue';

export default {
  components: {
    ChatWindow
  },
  setup() {
    const messages = ref([]);

    const addMessage = (message) => {
      messages.value.push({ id: Date.now(), ...message });
    };

    return { messages, addMessage };
  }
}
</script>

<template>
  <div class="app">
    <div class="chat-container">
      <ChatWindow userName="User1" :messages="messages" @new-message="addMessage" />
      <ChatWindow userName="User2" :messages="messages" @new-message="addMessage" />
    </div>
  </div>
</template>


<style>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chat-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 40px);
}
</style>
