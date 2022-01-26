new Vue({
  el: "#app",
  data: {
    flag: true,
    systems: ["android", "ios", "window"],
    uid: 10,
  },
  methods: {
    popupAlert: function () {
      return alert("경고 창 표시");
    },
    clickBtn: function (num) {
      alert("clicked " + num + " times");
    },
  },
});
