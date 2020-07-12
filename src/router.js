import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Landing.vue";
import Landing from "./views/OldLanding.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Anton from "./views/Anton.vue";
import PrivacyPolicy from "./views/PrivacyPolicy";
import TermsAndConditions from "./views/TermsAndConditions";
import Team from "./views/Team";
import Partners from "./views/Partners";
import Story from "./views/Story";
import Year2009 from "./views/2009";
import Year2018 from "./views/2018";
import Blog from "./views/Blog";
import Traits from "./views/blog/Traits";
import LoggingSpringBoot from "./views/blog/LoggingSpringBoot";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  //mode: "history",
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
      path: "/2009",
      name: "2009",
      components: {
        header: AppHeader,
        default: Year2009,
        footer: AppFooter
      }
    },
    {
      path: "/Blog/LoggingSpringBoot",
      name: "LoggingSpringBoot",
      components: {
        header: AppHeader,
        default: LoggingSpringBoot,
        footer: AppFooter
      }
    },
    {
      path: "/Blog/Traits",
      name: "Traits",
      components: {
        header: AppHeader,
        default: Traits,
        footer: AppFooter
      }
    },
    {
      path: "/2018",
      name: "2018",
      components: {
        header: AppHeader,
        default: Year2018,
        footer: AppFooter
      }
    },
    {
      path: "/Team",
      name: "Team",
      components: {
        header: AppHeader,
        default: Team,
        footer: AppFooter
      }
    },
    {
      path: "/Blog",
      name: "Blog",
      components: {
        header: AppHeader,
        default: Blog,
        footer: AppFooter
      }
    },
    {
      path: "/Story",
      name: "Story",
      components: {
        header: AppHeader,
        default: Story,
        footer: AppFooter
      }
    },
    {
      path: "/Partners",
      name: "Partners",
      components: {
        header: AppHeader,
        default: Partners,
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
