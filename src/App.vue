<script setup lang="ts">
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" class="inline-flex"/>
  <div
        class="sidebar"
        className="fixed top-0 left-0 h-screen w-20 m-0 flex flex-col bg-gray-900 text-white shadow-lg"
    >
        <nav>
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
            </ul>
        </nav>
    </div>
    <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
