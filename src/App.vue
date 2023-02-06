<template lang="html">
  <main class="container">
    <section class="container__header-and-nav">
      <TheHeader/>
      <TheNav/>
    </section>
    <BooksArea />
  <img v-if="this.$store.state.isBooksLoaded == true" src="@\visual\loading.gif" alt="loading-gif" class="loading">
  </main>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheNav from "@/components/TheNav.vue";
import BooksArea from "@/components/Books/BooksArea.vue";
import { mapActions } from 'vuex';

export default {
  components: {
    TheHeader,
    TheNav,
    BooksArea,
  },

  computed: {
      ...mapActions([
        'getBooks',
        'getCategories',
      ])
  },

  async mounted() {
    document.title = "Book Store";
    await this.getBooks;
    await this.getCategories;
  }
};
</script>

<style scoped lang="scss">
  @import '@/assets/main.scss';

.container{
  width: 100%;

   &__header-and-nav{
    @include flex-center(row);
    margin: 50px 0 30px 160px;
  
    @include phone-screen{
        @include flex-center(column);
        
        .header-nav{
          @include flex-center(row);
        }
    }
    
    @include tablet-screen{
        // @include flex-center(row);
    }
   }
}

.loading{
    width: 130px;
    position: absolute;
    top: 77px;
    right: 70px;
    z-index: -1;
}
</style>