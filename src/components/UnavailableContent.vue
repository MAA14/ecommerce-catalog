<template>
  <div class="container-content unavailable">
    <div class="sad-emote-container">
      <div class="eyebrow-emote">
        <svg
          class="brow"
          id="right-brow"
          width="196"
          height="52"
          viewBox="0 0 196 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M194 34.3236C91.324 49.4142 27.2183 24.3956 8 10"
            stroke="black"
            stroke-opacity="0.1"
            stroke-width="25"
          />
        </svg>

        <svg
          class="brow"
          id="left-brow"
          width="196"
          height="52"
          viewBox="0 0 196 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M194 34.3236C91.324 49.4142 27.2183 24.3956 8 10"
            stroke="black"
            stroke-opacity="0.1"
            stroke-width="25"
          />
        </svg>
      </div>
      <p class="sad-emote">:(</p>
    </div>
    <p class="error-message">{{ error.message }}</p>
    <div class="container-button unavailable">
      <button class="btn" @click="$emit('getNextProduct')">
        <p>Next Product</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UnavailableContent",
  props: {
    error: Error,
  },
};
</script>
