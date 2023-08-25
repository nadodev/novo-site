<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Vue 3 Todo App</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Todos">Todos</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header .wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

header nav {
  display: flex;
  gap: 2rem;
  text-decoration: none;
  color: #000;
}
</style>
