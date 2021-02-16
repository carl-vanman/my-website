<template>
  <section class="home">
    <img class="smileyLogo" src="@/assets/smiley3.svg" alt="">
    <div class="placement">
      <div class="title front">
        <span>F</span>
        <span>R</span>
        <span>O</span>
        <span>N</span>
        <span>T</span>
      </div>
      <div class="title end">
        <span>E</span>
        <span>N</span>
        <span>D</span>
      </div>
    </div>  
  </section>
</template>
<script>

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style>
.smileyLogo {
  width: clamp(130px, 48.5%, 450px);
}
</style>
<style lang="scss" scoped>
.home {
    grid-column: 1 / -1;
    height: 100vh;
    background-image: url('../assets/letterC.svg');
    background-position: center;
    background-size: 120%;
    background-repeat: no-repeat;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  
  .smileyLogo {
    align-self: center;
    z-index: 999;
  }

  .placement {
    position: absolute;
    left: -2%;
    grid-row: 2 / -2;
  }
  .title {
    font-size: clamp(80px, 18vw, 300px);
    font-weight: var(--font-xBold);
    color: var(--white);
    display: flex;
  }
  .front {
    margin-bottom: -5%;
  }
}
</style>