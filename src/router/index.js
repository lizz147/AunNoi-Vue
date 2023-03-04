import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import PayRateView from "../views/PayRateView.vue";
import NewsView from "../views/NewsView.vue";
import NewsReadView from "../views/NewsReadView.vue";
import ContactView from "../views/ContactView.vue";
import RuleView from "../views/RuleView.vue";
import UserView from "../views/UserView.vue";
import ProfileSettingView from "../views/ProfileSettingView.vue";
import MoneyReportView from "../views/MoneyReportView.vue";
import WithdrawView from "../views/WithdrawView.vue";
import ReportAfView from "../views/ReportAfView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/payrate",
      name: "payrate",
      component: PayRateView,
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
    },
    {
      path: "/news/:id",
      name: "newsread",
      component: NewsReadView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/rule",
      name: "rule",
      component: RuleView,
    },
    {
      path: "/user",
      name: "user",
      component: UserView,
    },
    {
      path: "/user/profile",
      name: "userprofile",
      component: ProfileSettingView,
    },
    {
      path: "/user/moneyreport",
      name: "usermoneyreport",
      component: MoneyReportView,
    },
    {
      path: "/user/withdraw",
      name: "userwithdraw",
      component: WithdrawView,
    },
    {
      path: "/reportaf",
      name: "reportaf",
      component: ReportAfView,
    },
  ],
});

export default router;
