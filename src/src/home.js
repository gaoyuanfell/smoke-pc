const home = new Vue({
  el: document.querySelector(`[route-id="home`),
  data() {
    return {
      translateX: 0,
      number: 0,
      setIntervalNum: undefined
    };
  },
  created() {},
  methods: {
    transformation(num) {
      switch (num) {
        case 1:
          ++this.number;
          break;
        case -1:
          --this.number;
          break;
      }
      if (this.number < 0) this.number = 2;
      if (this.number >= 3) this.number = 0;
      this.translateX = -100 * this.number;
      this.setIntervalTransformation();
    },
    setTransformation(num) {
      this.number = num;
      this.translateX = -100 * this.number;
      this.setIntervalTransformation();
    },
    setIntervalTransformation() {
      // this.setIntervalNum && clearInterval(this.setIntervalNum);
      // this.setIntervalNum = setInterval(() => {
      //   this.transformation(1);
      // }, 5000);
    }
  },
  ready() {
    this.setIntervalTransformation();
  }
});
