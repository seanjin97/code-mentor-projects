export default {
  methods: {
    NumberInputValidation(e) {
      if ((e.keyCode < 48 || e.keyCode > 57)
      && !(e.keyCode === 8 || e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 190)) {
        e.preventDefault();
      }
    },
  },
};
