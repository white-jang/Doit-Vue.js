// 전역 컴포넌트 등록
Vue.component("my-global-component", {
  template: "<div>전역 컴포넌트가 등록되었습니다.</div>",
});

var cmp = {
  // 컴포넌트 내용
  template: "<div>지역 컴포넌트가 등록되었습니다.</div>",
};

new Vue({
  el: "#app",
  components: {
    "my-local-component": cmp,
  },
});

new Vue({
  el: "#app2",
});
