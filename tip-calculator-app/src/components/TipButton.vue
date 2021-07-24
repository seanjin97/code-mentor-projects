<template>
    <button
      :class="{'btn': true, 'uneditable-btn': uneditable}"
      @click="updateSelectedTipAmt()">
      <span v-if="uneditable">{{value * 100 + "%"}}</span>
      <input
        v-else type='text'
        class="custom-tip"
        :value="customTip"
        placeholder="Custom"
        v-on:input="emitEvent($event)"
        @click="emitEvent($event)"/>
    </button>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'TipButton',
  props: {
    value: Number,
    uneditable: Boolean,
    customTip: Number,
  },
  data() {
    return {
      eventName: 'customTipUpdate',
    };
  },
  methods: {
    emitEvent(e) {
      const value = Number(e.target.value);
      if (_.isNumber(value) && !_.isNaN(value)) {
        this.$emit(this.eventName, value);
      }
    },
    updateSelectedTipAmt() {
      console.log('fyuc');
      this.$emit('updatedSelectedTipAmt', this.value);
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
    .uneditable-btn {
      background-color: hsl(183, 100%, 15%);
    }
    .input-wrapper {
      display: flex;
      width: inherit;
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
