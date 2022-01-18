Vue.component("child-component", {
  props: ["propsdata"],
  template: "<p>{{ propsdata }}</p>",
});

new Vue({
  el: "#app",
  data: {
    message: "Hello Vue! passed from Parent Component",
    anotherMessage: "Hello! I'm vue. What can I help you?",
  },
  components: {
    "sibling-component": {
      props: ["msg"],
      template: "<span>{{ msg }}</span>",
    },
  },
});
