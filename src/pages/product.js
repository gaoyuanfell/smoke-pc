window.product = new Vue({
  el: document.querySelector(`[route-id="product`),
  data() {
    return {};
  },
  created() {},
  methods: {
    select() {
      let ref = document.body.querySelector(`.product_list .product-list-item:nth-child(${window.$index})`);
      if (!ref) return;
      let { top } = ref.getBoundingClientRect();
      window.scroll({
        top: window.pageYOffset + top,
        // behavior: "auto"
      });
    }
  },
  ready() {
  }
});
