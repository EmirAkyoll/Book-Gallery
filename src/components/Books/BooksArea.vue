<template lang="html">
  <section class="books">
    <BookCards
      v-for="(book, index) in booksData.books"
      :key="index"
      :title="book.title"
      :author="book.author"
      :image="book.book_image"
      :summary="book.description"
      :isbnsUp="book.primary_isbn10"
      :isbnsUnder="book.primary_isbn13"
      :amazon_link="book.amazon_product_url"
    />
  </section>
</template>

<script>
import BookCards from "@/components/Books/BookCards.vue";
import { mapState } from "vuex";

export default {
  components: { BookCards },

  computed: {
    ...mapState([
      'booksData',
    ]),
  },
};
</script>

<style lang="scss">
 @import "@/assets/main.scss";
 
 .books {
    display: inline-grid;
    grid-template-columns: 100px 100px 100px 100px;
    grid-template-rows: 100px 100px 100px 100px 100px;
    grid-gap: 400px 270px;
    margin-left: 40px;

    @include phone-screen{
      grid-template-columns: 100px;
    }

    @include tablet-screen{
      grid-template-columns: 100px 100px 100px;
    }
  }
</style>