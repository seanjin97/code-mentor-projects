<template>
    <div class="field">
        <div>
            <p class="field-name">{{fieldName}}</p>
            <p class="second-line">/ person</p>
        </div>
        <div >
            <p class="calculated-amount">{{"$" + amount.toFixed(2)}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ResultsField',
  props: {
    fieldName: String,
    amount: Number,
  },
};
</script>

<style scoped>
    .field {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .field-name {
        color: hsl(0, 0%, 100%);
        text-align: left;
        font-weight: bold;
        margin-top: 1rem;
    }
    .second-line {
        color: hsl(0, 0%, 100%);
        text-align: left;
        opacity: 0.6;
    }
    .calculated-amount {
        color: hsl(172, 67%, 45%);
        font-weight: bold;
        font-size: 48px;
        text-align: end;
    }
</style>
