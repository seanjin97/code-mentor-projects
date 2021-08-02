<template>
    <div class="main-body">
      <div class="calculator-body">
        <div>
          <text-input-field
            :number="billAmt"
            @bill='$emit("billAmtUpdate", $event)'
            name="bill"
            text="Bill"
            :dollarIcon="true"
          />
          <tip-selector
            :tipLevels="tipLevels"
            :customTip="customTip"
            @customTipUpdate="$emit('customTipUpdate', $event)"
            :customSelected="customSelected"
            @updatedSelectedTipAmt="$emit('updatedSelectedTipAmt', $event)"/>
          <text-input-field
            :number="numPeople"
            @people='$emit("numPeopleUpdate", $event)'
            name="people"
            text="Number of People"
            :peopleIcon="true"
          />
        </div>
        <div>
          <results-box
            :tipPerPerson="tipPerPerson"
            :totalCostPerPerson="totalCostPerPerson"
            @resetAll="$emit('resetAll')"/>
        </div>
      </div>
    </div>
</template>

<script>
import TextInputField from './TextInputField.vue';
import TipSelector from './TipSelector.vue';
import ResultsBox from './ResultsBox.vue';

export default {
  name: 'MainBody',
  components: {
    TextInputField,
    TipSelector,
    ResultsBox,
  },
  props: {
    billAmt: Number,
    numPeople: Number,
    tipLevels: Array,
    customTip: Number,
    tipPerPerson: Number,
    totalCostPerPerson: Number,
    customSelected: Boolean,
  },
  methods: {
    calculateTipAmountPerPax(e) {
      e.preventDefault();
      console.log(this.billAmt);
    },
  },
};
</script>

<style scoped>
    .main-body {
        display: flex;
        justify-content: center;
    }

    @media screen and (min-width: 375px){
      .calculator-body {
        padding: 2rem;
        background-color: hsl(0, 0%, 100%);
        border-radius: 25px;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
      }
    }
    @media screen and (min-width: 1024px) {
      .calculator-body {
        padding: 2rem;
        background-color: hsl(0, 0%, 100%);
        border-radius: 25px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
    }

</style>
