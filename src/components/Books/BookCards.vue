<template lang="html">
    <section class="book">
      <div class="book__turn">
        <div class="book__main">
          <div class="book__turn--front">
            <img :src="image" alt="card-image" class="book__image" />
          </div>
          <div class="book__turn--back">
            <p class="book__title">- {{ title }} -</p>
            <div class="book__author">{{ author }}</div>
            <div class="book__summary">{{ summary }}</div>
            <div class="book__others">
              <div class="book__isbns">
                <p class="book__isbns-up-text">{{ isbnsUp }}</p>
                <img src="@\visual\isbn.jpg" alt="isbn" class="book__isbns-image">
                <p class="book__isbns-under-text">{{ isbnsUnder }}</p>
              </div>
              <a :href="amazon_link" target="_blank" rel="noreferrer" class="book__amazon-link">
                <img src="@\visual\amazon-logo.png" alt="amazon-logo" class="book__amazon-link-logo">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  props: [
    "title",
    "image",
    "author",
    "isbnsUp",
    "summary",
    "isbnsUnder",
    "amazon_link",
  ],
};
</script>

<style scoped lang="scss">
@import "@/assets/main.scss";

.book {
  @include flex-center(column);

  width: 320px;
  height: 420px;
  justify-content: space-around;
  border-radius: 5px;
  box-shadow: 0px 10px 40px -22px $black;

  &__text {
    font-size: 20px;
    color: $black;
  }

  &__image {
    height: 340px;
    width: 280px;
    border-radius: 4px;
    margin-top: 45px;
  }

  &:hover {
    .book__main {
      transform: rotateY(180deg);
    }

    .book__turn {
      margin-left: -30px;
      transition: all 0.3s linear;
    }

    .book__turn--back {
      transform: rotateY(145deg);
      border-radius: 4px;
    }
  }

  &:not(:hover) {
    .book__turn {
      transition: all 0.3s linear;
    }
  }

  &__turn {
    width: 300px;
    height: 300px;
    perspective: 1000px;
    position: relative;
    background-color: transparent;

    &--front,
    &--back {
      @include flex-center(column);
      position: absolute;
      width: 100%;
      height: 85%;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }

    &--front {
      background-color: transparent;
      transform: rotateY(-35deg);
      margin-left: -10px;
      color: $black;
    }

    &--back {
      background-color: #150d06;
      transform: rotateY(150deg);
      width: 300px;
      height: 340px;
      margin-top: -20px;
    }
  }

  &__main {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.45s;
    transform-style: preserve-3d;
  }

  &__title {
    font-size: 20px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    color: $white;
    text-align: center;
    margin-top: -35px;
  }

  &__author {
    font-size: 20px;
    color: $white;
  }

  &__summary {
    font-size: 20px;
    padding: 20px;
    text-align: justify;
    color: $white;
    user-select: none;
  }

  &__others {
    @include flex-center {
      justify-content: space-between;
    }
    position: absolute;
    bottom: 1px;
    width: 90%;
  }

  &__isbns {
    &-up-text {
      color: $white;
      margin-bottom: 1px;
      // user-select: none;
      font-size: 12px;
    }

    &-image {
      margin: 0;
      max-height: 20px;
    }

    &-under-text {
      font-size: 12px;
      color: $white;
      margin-top: -1px;
      // user-select: none;
    }
  }

  &__amazon-link {
    cursor: pointer;
    margin: 0;
    padding: 4px;
    padding-bottom: 0;
    border: 1px solid $white;
    border-radius: 10px;

    &-logo {
      max-height: 40px;
    }

    &:hover {
      background-color: #2e1c0d;
    }
  }

  @include phone-screen {
    book:active {
      .book-turn-main {
        transform: rotateY(180deg);
      }

      .book-turn-back {
        transform: rotateY(145deg);
        border-radius: 4px;
      }

      .book-turn {
        margin-left: -30px;
        transition: all 0.3s linear;
      }
    }
  }

  @include tablet-screen {
    //   background-color: blue;
  }
}
</style>