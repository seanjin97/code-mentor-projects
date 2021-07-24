<template>
    <div class="text-input-field">
        <label class="label">{{text}}</label>
        <input
          type="text"
          :number="number"
          :name="name"
          class="input-text-field"
          v-on:input="emitEvent($event)"
          :value="number"/>
    </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'TextInputField',
  props: {
    text: String,
    name: String,
    number: Number,
  },
  methods: {
    emitEvent(e) {
      const value = Number(e.target.value);
      if (_.isNumber(value) && !_.isNaN(value)) {
        this.$emit(this.name, value);
      }
    },
  },
};
</script>

<style scoped>
    .label {
        display: block;
        color:  hsl(186, 14%, 43%);
        font-weight: bold;
    }

    .input-text-field {
        border-radius: 0.3rem;
        font-size: 24px;
        text-align: right;
        background-color:  hsl(189, 41%, 97%);
        color: hsl(186, 14%, 43%);
        padding: 0.5rem;
        width: 100%;
    }

    .text-input-field {
      margin: 2rem;
    }
</style>
