<template>
  <h1 class="header">{{text.replace("%n", "\n")}}</h1>
</template>

<script>
export default {
  name: 'MainBody',
  props: {
    text: String,
  },
};
</script>

<style scoped>
.header {
     color:   hsl(183, 100%, 15%);
     text-align: center;
     padding-top: 8rem;
     text-transform: uppercase;
     word-break: break-word;
     letter-spacing: 0.5rem;
     white-space: pre-line;
     font-size: 1.5rem;
     opacity: 75%;
 }
</style>
