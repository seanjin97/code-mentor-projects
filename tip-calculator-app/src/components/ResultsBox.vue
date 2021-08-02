<template>
    <div class='results-box'>
        <results-field fieldName="Tip Amount" :amount="tipPerPerson"/>
        <results-field fieldName="Total" :amount="totalCostPerPerson"/>
        <div class='spacer'></div>
        <button class='reset-button' @click="reset">RESET</button>
    </div>
</template>

<script>
import ResultsField from './ResultsField.vue';

export default {
  name: 'ResultsBox',
  components: {
    ResultsField,
  },
  props: {
    tipPerPerson: Number,
    totalCostPerPerson: Number,
  },
  methods: {
    reset() {
      this.$emit('resetAll');
    },
  },
};
</script>

<style scoped>
    .results-box {
        background-color: hsl(183, 100%, 15%);
        height: 100%;
        border-radius: 25px;
        padding: 3rem;
        position: relative;
    }
    .reset-button {
        width: 80%;
        height: 3rem;
        border-radius: 5px;
        font-size: 1.5rem;
        font-weight: bold;
        color: hsl(183, 100%, 15%);
        background-color: hsl(172, 67%, 45%);
        position: absolute;
        bottom: 10%;
        left: 10%;
        right: 10%;
    }
    .reset-button:hover {
        background-color: hsl(185, 41%, 84%);
        cursor: pointer;
    }
    .spacer {
        height: 100px;
        margin-top: 1rem;
        background: transparent;
    }

</style>
