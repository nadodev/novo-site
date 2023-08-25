<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header class=" dark:bg-zinc-700  bg-sky-100  px-4 py-6 shadow-sm shadow-zinc-200">
        <div class="container mx-auto flex justify-between items-center">
            <div class="logo">
                <h1 class="text-2xl font-bold dark:text-zinc-50 text-zinc-400">LEONARDO.</h1>
            </div>
            <nav class="space-x-10 hidden md:block">
                <RouterLink to="/" class="text-zinc-400 dark:text-zinc-50 text-xl font-light hover:bg-zinc-100 px-2">Home</RouterLink>
                <RouterLink to="/" class="text-zinc-400 dark:text-zinc-50 text-xl font-light hover:bg-zinc-100 px-2">About</RouterLink>
                <RouterLink to="/" class="text-zinc-400 dark:text-zinc-50 text-xl font-light hover:bg-zinc-100 px-2">Cases</RouterLink>
                <RouterLink to="/" class="text-zinc-400 dark:text-zinc-50 text-xl font-light hover:bg-zinc-100 px-2">Contact</RouterLink>
            </nav>
            <button class="bg-sky-500 px-6 py-2 rounded-full text-zinc-50">
                <a href="https://www.linkedin.com/in/leonardogeja/" target="_blank" class="">Here Me!</a>
            </button>
        </div>
    </header>
</template>
