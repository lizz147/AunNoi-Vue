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
import DepositView from "../views/DepositView.vue";
import BankAcountView from "../views/BankAcountView.vue";
import HowToUseView from "../views/HowToUseView.vue";
import AddBankView from "../views/AddBankView.vue";
import CheckStatusBankView from "../views/CheckStatusBankView.vue";
import VictoryView from "../views/VictoryView.vue";
import ThaiVictoryView from "../views/ThaiVictoryView.vue";
import TgsVictoryView from "../views/TgsVictoryView.vue";
import AomSinVictoryView from "../views/AomSinVictoryView.vue";
import RaffleHuayView from "../views/RaffleHuayView.vue";
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
      path: "/user/reportaf",
      name: "userreportaf",
      component: ReportAfView,
    },
    {
      path: "/user/deposit",
      name: "userdeposit",
      component: DepositView,
    },
    {
      path: "/user/bankacount",
      name: "userbankacount",
      component: BankAcountView,
    },
    {
      path: "/user/howtouse",
      name: "userhowtouse",
      component: HowToUseView,
    },
    {
      path: "/user/bankacount/addbank",
      name: "userbankacountaddbank",
      component: AddBankView,
    },
    {
      path: "/user/bankacount/checkbank",
      name: "userbankacountcheckbank",
      component: CheckStatusBankView,
    },
    {
      path: "/victory",
      name: "victory",
      component: VictoryView,
    },
    {
      path: "/victory/thai",
      name: "victorythau",
      component: ThaiVictoryView,
    },
    {
      path: "/victory/aomsin",
      name: "victoryaomsin",
      component: AomSinVictoryView,
    },
    {
      path: "/victory/gts",
      name: "victorygts",
      component: TgsVictoryView,
    },
    {
      path: "/raffle",
      name: "rafflehuay",
      component: RaffleHuayView,
    },
  ],
});

export default router;
