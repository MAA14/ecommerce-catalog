<template>
  <div id="container-product">
    <!-- ---------------------------------------------------- Pattern Content -->
    <div :class="`background-pattern ${product.category} ${loading}`"></div>

    <!------------------------------------------------------- Unavailable Content -->
    <UnavailableContent
      v-if="error"
      :error="error"
      @getNextProduct="getNextProduct"
    />

    <!--------------------------------------------------------- Available Content -->
    <AvailableContent
      v-if="!error"
      :product="product"
      :rateMax="rateMax"
      @getNextProduct="getNextProduct"
      :loading="loading"
    />
  </div>
</template>

<script>
import AvailableContent from "./AvailableContent.vue";
import UnavailableContent from "./UnavailableContent.vue";

export default {
  name: "ProductDisplay",
  components: { AvailableContent, UnavailableContent },
  data() {
    return {
      index: 1,
      product: { category: "available", rating: { rate: 5 } }, // default value product untuk mencegah error can't read property
      error: null,
      rateMax: 5,
      loading: "",
    };
  },
  methods: {
    // Input number, Output mengubah value product
    async getProductByIndex(index) {
      // Reset
      this.loading = "loading"; // Aktifkan loading
      this.product = { category: "available", rating: { rate: 5 } }; // kembalikan jadi default product
      this.error = null; // Kosongkan error

      try {
        // Ambil data
        let data = await fetch(`https://fakestoreapi.com/products/${index}`);
        data = await data.json();

        // Jika Category bukan women atau men maka lempar Error unavailable
        if (data.category === "women's clothing")
          data.category = "women"; // biar gampang ngasih class di CSS nya
        else if (data.category === "men's clothing") data.category = "men";
        else {
          // Tidak perlu menyimpan data ke variable product
          this.product = { category: "unavailable" };
          throw Error("This product is unavailable to show");
        }

        // Jika Category sudah sesuai simpan datanya
        this.product = data;

        // Kembalikan jadi falsy Object, supaya v-if="error" tidak menggunakan value sebelumnya, artinya jika sampai sini fetchnya success
        this.error = null;
        this.loading = ""; // Matikan Loading
      } catch (err) {
        this.loading = ""; // Matikan Loading
        this.error = err;
      }
    },

    // Event Handler
    getNextProduct() {
      // Jika index saat ini = 20 maka kembalikan jadi 1, jika tidak tambahkan 1
      this.index = this.index === 20 ? 1 : this.index + 1;

      this.getProductByIndex(this.index);
    },
  },
  mounted() {
    this.getProductByIndex(1);
  },
};
</script>
