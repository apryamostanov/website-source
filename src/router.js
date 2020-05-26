import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Anton from "./views/Anton.vue";
import Mayo from "./views/Mayo.vue";
import PrivacyPolicy from "./views/PrivacyPolicy";
import TermsAndConditions from "./views/TermsAndConditions";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/Anton",
      name: "Anton",
      components: {
        header: AppHeader,
        default: Anton,
        footer: AppFooter
      }
    },
    {
      path: "/Mayo",
      name: "Mayo",
      components: {
        header: AppHeader,
        default: Mayo,
        footer: AppFooter
      }
    },
    {
      path: "/PrivacyPolicy",
      name: "PrivacyPolicy",
      components: {
        header: AppHeader,
        default: PrivacyPolicy,
        footer: AppFooter
      }
    },
    {
      path: "/TermsAndConditions",
      name: "TermsAndConditions",
      components: {
        header: AppHeader,
        default: TermsAndConditions,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
