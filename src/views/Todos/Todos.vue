<script setup>
</script>

<template>
  <main>
      <div class="wrapper">
        <h2>  Lista de Tarefas</h2>

        <ul class="lista-tarefas">
             <li v-for="todo in todos" :key="todo.id">
                <input type="checkbox" :checked="todo.completed" />
                <span>{{ todo.title }}</span>
            </li>
        </ul>   

        <div class="todosInput">
            <input type="text" placeholder="Adicionar tarefa" />
            <button>Adicionar</button>
        </div>
      </div>
  </main>
</template>
<style scoped>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .lista-tarefas {
    list-style: none;
    padding: 0;
  }

    .lista-tarefas li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .lista-tarefas li input {
        margin-right: 10px;
    }

    .todosInput {
        display: flex;
        margin-top: 20px;
    }

    .todosInput input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-right: 10px;
    }
</style>
<script>
        import { ref } from 'vue';
    export default {
        name: 'Todos',

        components: {
        
            
        },


        setup() {
            const todos = [
                { id: 1, title: 'Tarefa 1', completed: true },
                { id: 2, title: 'Tarefa 2', completed: true },
                { id: 3, title: 'Tarefa 3', completed: false },
                { id: 4, title: 'Tarefa 4', completed: false },
                { id: 5, title: 'Tarefa 5', completed: false },
            ];

            return {
                todos,
                name,
            };
        },
    };

</script>
