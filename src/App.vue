<template>
  <div id="nav">
    <router-link :to="{ name: 'EventList'}">Events</router-link> |
    <router-link :to="{ name: 'About'}">About</router-link>
  </div>
  <router-view />
</template>

<style>
:root {
  --green: #42b983;
  --main-color: #2c3e50; 
}

.title {
  margin-top: 0;
  margin-bottom: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main-color);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: var(--main-color);
}

#nav a.router-link-exact-active {
  color: var(--green);
}

h4 {
  font-size: 20px;
}

.link {
  margin: 5px;
  background-color: var(--main-color);
  color: white;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  outline: none;
}

.link:hover {
  background-color: var(--green);
}
</style>
