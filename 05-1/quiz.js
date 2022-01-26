var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue.js",
    song: "Adel - Can I Get It",
    uid: "20",
    flag: true,
  },
  methods: {
    // ES6 문법
    clickBtn() {
      alert("hi");
    },
    es6Btn(num) {
      console.log("hi" + num);
    },
  },
});
