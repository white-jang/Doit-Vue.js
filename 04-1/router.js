// Main, Login 컴포넌트 정의
var Main = { template: "<div>main</div>" };
var Login = { template: "<div>login</div>" };

// 각 URL에 맞춰 표시할 컴포넌트 지정
var routes = [
  { path: "/main", component: Main },
  { path: "/login", component: Login },
];

// vue router 정의
const router = new VueRouter({
  mode: "history",
  routes,
});

// vue 인스턴스에 라우터 추가
var app = new Vue({
  router,
}).$mount("#app");
