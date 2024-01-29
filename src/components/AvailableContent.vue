<template>
  <div class="container-content available" :class="product.category">
    <!-- Content Image -->
    <div class="container-image" :class="loading">
      <img :src="product.image" alt="" />
    </div>
    <!-- Content Details -->
    <div class="container-details">
      <div class="container-text">
        <!-- Title -->
        <h2 class="title" :class="loading" data-test="product_title">
          {{ product.title ?? "Dummy Title" }}
        </h2>
        <div class="info" :class="loading">
          <!-- Category -->
          <p class="category" data-test="product_category">
            {{ product.category }}'s clothing
          </p>
          <!-- Rating -->
          <div class="container-rating">
            <!-- Rating number -->
            <p class="rating-number" data-test="product_rating">
              {{ product.rating.rate }}/{{ rateMax }}
            </p>
            <!-- Rating Bubble, index dimulai dari 1 sampai 5, oleh karena itu index - 1 supaya dimulai dari 0 -->
            <div v-for="index in rateMax" :key="index" class="rating-bubles">
              <span :class="`bubble ${product.category}`">
                <!-- Filler mengisi berdasarkan persentase rating per bubble (index) -->
                <!-- Jika rating - (index - 1) saat ini >1 maka isi bubble saat ini 100% -->
                <!-- Jika rating - (index - 1) saat ini <1 maka isi bubble saat ini dengan (rating - index) x 100   -->

                <!-- Contoh rating 2.1 maka : -->
                <!-- Loop 1, index = 1 maka 2.1 - (1 - 1) = 2.1 diketahui bahwa 2.1 > 1 --- 100% isi bubble ke-1 -->
                <!-- Loop 2, index = 2 maka 2.1 - (2 - 1) = 1.1 diketahui bahwa 1.1 > 1 --- 100% isi bubble ke-2 -->
                <!-- Loop 3, index = 3 maka 2.1 - (3 - 1) = 0.1 diketahui bahwa 0.1 < 1 --- 0.1 x 100 = 10 maka 10% isi bubble ke-3 -->
                <!-- Loop 4 sampai 5 hasilnya kurang dari 0 maka tidak perlu ada fillter yang mengisi lagi -->
                <!-- Maka hasil akhirnya kita memiliki 2 Bubble terisi 100% dan 1 Bubble terisi 10% -->
                <span
                  class="filler"
                  v-if="product.rating.rate - (index - 1) > 0"
                  :style="
                    'width:' +
                    (product.rating.rate - (index - 1) > 1
                      ? 1
                      : product.rating.rate - (index - 1)) *
                      100 +
                    '%'
                  "
                ></span>
              </span>
            </div>
          </div>
        </div>
        <!-- Description -->
        <p class="description" :class="loading" data-test="product_description">
          {{ product.description ?? dummyDescription }}
        </p>
      </div>
      <!-- Interact -->
      <div class="interact-wrapper">
        <p
          :class="`price ${product.category} ${loading}`"
          data-test="product_price"
        >
          ${{ product.price }}
        </p>
        <div :class="`container-button ${product.category}`">
          <button class="btn fill" :class="loading" type="button">
            <p>Buy</p>
          </button>
          <button
            class="btn"
            :class="loading"
            @click="$emit('getNextProduct')"
            data-test="button_next_product"
          >
            <p>Next Product</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentContainer",
  data() {
    return {
      dummyDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex, iure corporis, harum, excepturi sunt in cum minima accusantium a dolore unde accusamus. Odio omnis neque nam veritatis nulla suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex, iure corporis, harum",
    };
  },
  props: {
    product: Object,
    rateMax: Number,
    loading: String,
  },
};
</script>
