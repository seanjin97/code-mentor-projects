<template>
  <div>
    <main-title></main-title>
    <main-body
      :billAmt="billAmt" @billAmtUpdate="updateBillAmt"
      :numPeople="numPeople" @numPeopleUpdate="updateNumPeople"
      :tipLevels="tipLevels"
      :customTip="customTip" @customTipUpdate="updateCustomTip"
      @updatedSelectedTipAmt="updateSelectedTipAmt"
      :customSelected="customSelected"
      :tipPerPerson="tipPerPerson"
      :totalCostPerPerson="totalCostPerPerson"
      @resetAll="resetAll"
    />
  </div>

</template>

<script>
import _ from 'lodash';
import MainTitle from './components/MainTitle.vue';
import MainBody from './components/MainBody.vue';

export default {
  name: 'App',
  components: {
    MainTitle,
    MainBody,
  },
  data() {
    return {
      billAmt: 0,
      numPeople: 1,
      tipLevels:
      [
        { value: 0.05, selected: false },
        { value: 0.10, selected: false },
        { value: 0.15, selected: false },
        { value: 0.25, selected: false },
        { value: 0.50, selected: false },
      ],
      customTip: null,
      selectedTipAmt: null,
      customSelected: false,
      tipPerPerson: 0,
      totalCostPerPerson: 0,
    };
  },
  methods: {
    updateBillAmt(value) {
      this.billAmt = value;
      this.calculateCostPerPerson();
    },
    updateNumPeople(value) {
      this.numPeople = value;
      this.calculateCostPerPerson();
    },
    updateCustomTip(value) {
      this.customTip = value;
      this.selectedTipAmt = value / 100;
      const updatedTipLevels = this.tipLevels.map(
        (item) => ({ ...item, selected: false }),
      );
      this.tipLevels = updatedTipLevels;
      this.customSelected = true;
      this.calculateCostPerPerson();
    },
    updateSelectedTipAmt(value) {
      this.selectedTipAmt = value;
      const updatedTipLevels = this.tipLevels.map(
        (item) => (item.value === value
          ? { ...item, selected: true }
          : { ...item, selected: false }),
      );
      this.tipLevels = updatedTipLevels;
      this.customSelected = false;
      this.calculateCostPerPerson();
    },
    calculateCostPerPerson() {
      if (this.billAmt && this.numPeople && this.selectedTipAmt) {
        const tipAmt = this.selectedTipAmt * this.billAmt;
        const newTipAmtPerPerson = _.round(tipAmt / this.numPeople, 2);
        const newTotalCostPerPerson = _.round((tipAmt + this.billAmt) / this.numPeople, 2);
        this.tipPerPerson = newTipAmtPerPerson;
        this.totalCostPerPerson = newTotalCostPerPerson;
      }
    },
    resetAll() {
      this.billAmt = 0;
      this.numPeople = 1;
      this.customTip = null;
      this.selectedTipAmt = null;
      this.tipPerPerson = 0;
      this.totalCostPerPerson = 0;
      this.tipLevels = [
        { value: 0.05, selected: false },
        { value: 0.10, selected: false },
        { value: 0.15, selected: false },
        { value: 0.25, selected: false },
        { value: 0.50, selected: false },
      ];
    },
  },
};
</script>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

* {
  margin: 0px;
  padding: 0px;
  outline: none;
  border: 0px;
  font-family: 'Space Mono', monospace;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  background-color: hsl(185, 41%, 84%);
  height: 100%;
  widows: 100%;
}
input {
  min-width: 0;
}
</style>
