<template>
  <div class='header-container'>
    <h1 class="header">spli</h1>
    <h1 class="header">tter</h1>
  </div>
</template>

<script>
export default {
  name: 'MainBody',
};
</script>

<style scoped>
.header {
     color: hsl(183, 100%, 15%);
     text-align: center;
     text-transform: uppercase;
     word-break: break-word;
     letter-spacing: 0.5rem;
     white-space: pre-line;
     font-size: 1.5rem;
     opacity: 0.75;
     display: block;
 }

.header-container {
  margin-top: 5rem;
}
</style>
