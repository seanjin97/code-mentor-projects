<template>
  <div>
    <main-title text="spli%ntter"/>
    <main-body
      :billAmt="billAmt" @billAmtUpdate="updateBillAmt"
      :numPeople="numPeople" @numPeopleUpdate="updateNumPeople"
      :tipLevels="tipLevels"
      :customTip="customTip" @customTipUpdate="updateCustomTip"
      @updatedSelectedTipAmt="updateSelectedTipAmt"
      :tipPerPerson="tipPerPerson"
      :totalCostPerPerson="totalCostPerPerson"
      @resetAll="resetAll"
    />
  </div>

</template>

<script>
import _ from 'lodash';
import MainTitle from './components/Title.vue';
import MainBody from './components/Body.vue';

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
      tipLevels: [0.05, 0.10, 0.15, 0.25, 0.5],
      customTip: null,
      selectedTipAmt: null,
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
      this.calculateCostPerPerson();
    },
    updateSelectedTipAmt(value) {
      this.selectedTipAmt = value;
      this.calculateCostPerPerson();
    },
    calculateCostPerPerson() {
      if (this.billAmt && this.numPeople && this.selectedTipAmt) {
        const tipAmt = this.selectedTipAmt * this.billAmt;
        const newTipAmtPerPerson = _.round(tipAmt / this.numPeople, 2);
        const newTotalCostPerPerson = _.round((tipAmt + this.billAmt) / this.numPeople, 2);
        console.log(`tipAmt: ${tipAmt}`);
        console.log(`newTipAmtPerPerson: ${newTipAmtPerPerson}`);
        console.log(`newTotalCostPerPerson: ${newTotalCostPerPerson}`);
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
