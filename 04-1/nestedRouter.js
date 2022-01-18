// 컴포넌트 정의
var User = {
  template: `
    <div>
        User Component
        <router-view></router-view>
    </div>`,
};

var UserProfile = { template: "<p>User Profile Component</p>" };
var UserPost = { template: "<p>User Post Component</p>" };

// 네스티드 라우팅 정의
var routes = [
  {
    path: "/user",
    component: User,
    children: [
      {
        path: "posts",
        component: UserPost,
      },
      {
        path: "profile",
        component: UserProfile,
      },
    ],
  },
];

var router = new VueRouter({
  mode: "history",
  routes,
});

var app = new Vue({
  router,
}).$mount("#app");
