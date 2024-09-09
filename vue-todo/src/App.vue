<script>
import { ref } from 'vue';

  

  export default{
    setup(){
      //data
      const newTodo = ref('');
      const todosData = JSON.parse(localStorage.getItem('todos')) || [];
      const todos = ref(todosData);

      //methods
      const addTodo = () => { 
        todos.value.push({
          done: false,
          content: newTodo.value,
        });

        newTodo.value = '';

        saveData();
      };

      const doneTodo = (todo) => { 
        todo.done = !todo.done

        saveData();
      }

      const removeTodo = (index) =>{
        todos.value.splice(index, 1);

        saveData();
      }

      const saveData = () =>{
        const storageData = JSON.stringify(todos.value);

        localStorage.setItem('todos', storageData);
      }

      return{
        newTodo,
        addTodo,
        todos,
        doneTodo,
        removeTodo
      }
    },
  }
</script>

<template>
  <h1>ToDo App</h1>

  <form @submit.prevent="addTodo">
    <label>New ToDo</label>

    <input v-model="newTodo" type="text">

    <button type="submit">Add a new ToDo</button>
  </form>

  <h2>ToDo List</h2>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <span @click="doneTodo(todo)" :class="{ done: todo.done }">
        {{ todo.content }}
      </span>

      <button @click="removeTodo(index)">Remove</button>
    </li>
  </ul>

  <h4 v-if="!todos.length"> Empty list.</h4>
</template>


