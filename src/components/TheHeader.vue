<template lang="html">
  <header class="header">
    <h1 class="header__content">Book Store</h1>
  </header> 
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
  @import '@/assets/main.scss';
  
  .header{
  width: 100%;
  
  &__content {
   font-size: 115px;
   font-family: "Lobster", cursive, sans-serif;
   letter-spacing: 3px;
   margin: 0;
   margin-bottom: 35px;
   cursor: pointer;
   width: 600px;
  }
  
  @include phone-screen{
   .header-content { font-size: 75px; };
   margin-left: -225px;
  }

  @include tablet-screen{
   .header-content { font-size: 100px; };
  }
}
</style>