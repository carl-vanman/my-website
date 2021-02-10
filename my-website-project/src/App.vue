<template>
  <div id="app">
    <header>
      <NavComp class="nav" />
    </header>
    <main>
      <div class="wrapper">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import NavComp from './components/NavComp.vue'

export default {
  components: {
    NavComp
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Spartan', sans-serif;
  /* background-color: var(--bg-color); */
}

:root {
  --bg-color: #202020;
  --light-gray: #DBDBDB;

  --font-small: 11px;
  --font-regular: 400;
}

#app {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr minmax(80px, auto);
  grid-template-rows: 1fr;
  background-color: var(--bg-color);
  header {
    grid-column: -2 / -1;
    grid-row: 1 / -1;
  }
  main {
    grid-column: 1 / 2;
    grid-row: 1 / -1;    
  }
}
</style>
<style>
main {
  display: grid;
  grid-template-columns: 1fr min(1170px, 100%) 1fr;
}
.wrapper {
    grid-column: 2 / -2;
    display: grid;
    /*grid-template-columns: repeat(auto-fit, minmax(70px, 1fr)); */ /* hur funkar den här? här läggds det till columns som behövs i antal men inte mer än 12*/
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)); /* denna tänkte jag från början, men ovan kanske är bättre? här läggs det dock upptill 12columns*/
    /*grid-template-rows: auto;*/    
    column-gap: 30px;
    /* row-gap: 30px; */
    width: max(100%, 270px); /* dumt å sätta en min width med max()? */
}
</style>