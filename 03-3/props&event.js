Vue.component("child-component", {
  props: ["propsdata"],
  template: "<p>{{ propsdata }}</p>",
});

Vue.component("log-component", {
  template: "<button @click='showLog'>show</button>",
  methods: {
    showLog: function () {
      this.$emit("show-log");
    },
  },
});

new Vue({
  el: "#app",
  data: {
    message: "Hello Vue! passed from Parent Component",
  },
});

new Vue({
  el: "#app2",
  data: {
    message: "Hello Vue! passed from Parent Component",
  },
  methods: {
    printText: function () {
      console.log("received an event");
    },
  },
});
