<template>
    <div class="text-input-field">
      <div class='label-container'>
        <label class="label">{{text}}</label>
        <label v-if="name === 'people' && number === 0" class='invalid-label'>Can't be zero</label>
      </div>
      <div class="wrapper">
        <i :class="{'fas fa-dollar-sign icon': dollarIcon, 'fas fa-user icon': peopleIcon}"></i>
        <input
        type="text"
        :number="number"
        :name="name"
        :class="{'input-text-field': true, 'invalid': name === 'people' && number === 0 }"
        v-on:input="emitEvent($event)"
        :value="number"
        @keydown="validate($event)"/>
      </div>

    </div>
</template>

<script>
import _ from 'lodash';

import Utils from '../utils/Utils';

export default {
  name: 'TextInputField',
  props: {
    text: String,
    name: String,
    number: Number,
    dollarIcon: Boolean,
    peopleIcon: Boolean,
  },
  mixins: [Utils],
  methods: {
    emitEvent(e) {
      const value = e.target.value !== '' ? Number(e.target.value) : null;
      if (_.isNumber(value) && !_.isNaN(value)) {
        this.$emit(this.name, value);
      }
    },
    validate(e) {
      this.NumberInputValidation(e);
    },
  },
};
</script>

<style scoped>
    .icon {
      position: relative;
      z-index: 1;
      top: -0.1rem;
      left: 1rem;
      color:  hsl(184, 14%, 56%);
      width: 0
    }

    .label {
        color:  hsl(186, 14%, 43%);
        font-weight: bold;
    }

    .input-text-field {
        border-radius: 0.3rem;
        font-size: 24px;
        text-align: right;
        background-color:  hsl(189, 41%, 97%);
        padding: 0.5rem;
        width: 100%;
        border: 3px solid transparent;
        margin-top: 10px;
        color: hsl(183, 100%, 15%);
        caret-color: hsl(172, 67%, 45%);
        font-weight: bold;
    }
    .input-text-field:focus {
       border-color:  hsl(172, 67%, 45%);
    }
    .input-text-field:hover {
      cursor: pointer;
      border-color:  hsl(172, 67%, 45%);
    }
    .text-input-field {
      margin: 2rem;
    }
    .invalid {
      border-color: #ED4F32 !important;
    }
    .label-container {
      display: flex;
      justify-content: space-between;
    }
    .invalid-label {
      color:  #ED4F32;
      font-weight: bold;
    }
</style>
