<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <!-- <div class="nav">
      <p>
        <router-link to="/">달력보기</router-link>
      </p>
      <p>
        <router-link to="/about">지도 인터렉션</router-link>
      </p>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

html,body {
  margin: 0;
}

.nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  > p {
    text-align: left;
  }
}

button {
  border: 0 none;
  background-color: transparent;
}
</style>
