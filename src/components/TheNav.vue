<template lang="html">
  <nav class="control">
    <div class="control__categories">
      <label class="control__text" for="sortBy">Categorize by: </label>
      <select
        @change="handleCategory"
        id="categorizeBy"
        class="control__selecter">
        
        <option value="" selected disabled>Choose here..</option>
        <option
           v-for="(category, index) in categories"
           :key="index" 
           class="control__selecter-options" 
           value="">
         {{ category.list_name }}
        </option>

      </select>
   </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
       'categories',
    ]),
  },

  methods: {
    handleCategory(event) {
        const allSpaces = / /g;  // RegExp
        let categoryData = event.target.options[event.target.options.selectedIndex].text;
        this.$store.commit('takeChosenCategory', categoryData.trim().toLowerCase().replace(allSpaces, '-'));
    },
  },
};
</script>

<style scoped lang="scss">
  @import "@/assets/main.scss";

.control {
   @include flex-center;
  width: 100%;
  height: 70px;

  &__categories {
     @include flex-center;
    border-radius: 18px;
    outline: none;
  }

  &__text {
    font-size: 16px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  &__selecter{
    width: 255px;
    padding: 10px;
    outline: none;
    font-size: 15px;
    margin-left: 5px;
    border-radius: 6px;
    border: 1px solid #000;
    background-color: #F7F7F7;
    font-family: "Open Sans", sans-serif;

      &-options{
        background-color: #fff;
      }
  }

  @include phone-screen{
      // background-color: red;
    width: 400px;
    margin-left: -105px;
  }

  @include tablet-screen{
      // background-color: blue;
  }
}
</style>