<template>
    <button
      :class="{'btn': true, 'uneditable-btn': uneditable, 'selected': selected}"
      @click="uneditable ? updateSelectedTipAmt() : null">
      <span v-if="uneditable">{{value * 100 + "%"}}</span>
      <input
        v-else type='text'
        :class="{'custom-tip': true, 'custom-selected': customSelected}"
        :value="customTip"
        placeholder="Custom"
        v-on:input="handleCustomInput($event)"
        @click="handleCustomInput($event)"
        @keydown="validate($event)"
        />
    </button>
</template>

<script>
import _ from 'lodash';
import Utils from '../utils/Utils';

export default {
  name: 'TipButton',
  props: {
    value: Number,
    uneditable: Boolean,
    customTip: Number,
    selected: Boolean,
    customSelected: Boolean,
  },
  data() {
    return {
      eventName: 'customTipUpdate',
    };
  },
  mixins: [Utils],
  methods: {
    handleCustomInput(e) {
      const value = Number(e.target.value);
      if (_.isNumber(value) && !_.isNaN(value)) {
        if (value !== 0) {
          this.$emit(this.eventName, value);
        }
      }
    },
    updateSelectedTipAmt() {
      this.$emit('updatedSelectedTipAmt', this.value);
    },
    validate(e) {
      this.NumberInputValidation(e);
    },
  },
};
</script>

<style scoped>
    .btn {
        border-radius: 0.5rem;
        height: 50px;
        width: 125px;
        color: hsl(0, 0%, 100%);
        font-weight: bold;
        font-size: 24px;
        text-align: center;
    }
    .btn:hover {
      border-color: white;
      cursor: pointer;
    }
    .uneditable-btn {
      background-color: hsl(183, 100%, 15%);
      border: 2px solid transparent;
    }
    .selected {
      background-color:  hsl(172, 67%, 45%) !important;
      color: hsl(183, 100%, 15%)
    }
    .custom-tip {
        text-align: right;
        width: 100%;
        background-color:  hsl(189, 41%, 97%);
        border-radius: 0.5rem;
        font-size: 24px;
        padding: 0.5rem;
        font-weight: bold;
        color: hsl(183, 100%, 15%);
        caret-color: hsl(172, 67%, 45%);
        border: 3px solid transparent;
    }
    .custom-tip:focus {
      border-color: hsl(172, 67%, 45%) !important;
    }
    .custom-tip:hover {
      border-color: hsl(172, 67%, 45%);
      cursor: pointer;
    }
    .custom-selected {
      border-color: hsl(172, 67%, 45%);
    }
    ::-webkit-input-placeholder {
      text-align: center;
    }

    :-moz-placeholder { /* Firefox 18- */
      text-align: center;
    }

    ::-moz-placeholder {  /* Firefox 19+ */
      text-align: center;
    }

    :-ms-input-placeholder {
      text-align: center;
    }
</style>
