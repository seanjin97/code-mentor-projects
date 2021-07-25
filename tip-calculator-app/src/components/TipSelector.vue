<template>
    <div class="tip-selector">
        <label for="tip-selection" class='label'>Select Tip %</label>
        <div class="button-box">
            <tip-button
                :key="level"
                v-for="level in tipLevels"
                :value="level.value"
                :selected="level.selected"
                :uneditable="true"
                :customSelected="customSelected"
                @updatedSelectedTipAmt="$emit('updatedSelectedTipAmt', $event)"/>
            <tip-button
                :customTip="customTip"
                :uneditable="false"
                :customSelected="customSelected"
                @customTipUpdate="$emit('customTipUpdate', $event)"/>
        </div>
    </div>

</template>

<script>
import TipButton from './TipButton.vue';

export default {
  name: 'TipSelector',
  props: {
    tipLevels: Array,
    customTip: Number,
    customSelected: Boolean,
  },
  components: {
    TipButton,
  },
};
</script>
<style scoped>
    .label {
        display: block;
        color:  hsl(186, 14%, 43%);
        font-weight: bold;
    }
    .tip-selector {
        margin: 2rem;
    }
    .button-box {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 0.5rem;
        grid-row-gap: 1rem;
        width: 100%;
        margin-top: 15px;
    }
</style>
