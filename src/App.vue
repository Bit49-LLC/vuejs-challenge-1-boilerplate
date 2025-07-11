<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col gap-8" data-testid="wrapper">
    <header>
      <h1>Revolve Labs Pokédex</h1>
    </header>
    <main>
      <RouterView class="flex flex-col" />
    </main>
  </div>
</template>
