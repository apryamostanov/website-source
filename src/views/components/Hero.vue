<template>
  <section class="section-hero section-shaped my-0" style="height: 100vh; ">
    <div class="shape shape-style-1 shape-primary bg-gradient-indigo">
      <span class="span-150"></span>
      <span class="span-50"></span>
      <span class="span-50"></span>
      <span class="span-75"></span>
      <span class="span-100"></span>
      <span class="span-75"></span>
      <span class="span-50"></span>
      <span class="span-100"></span>
      <span class="span-50"></span>
      <span class="span-100"></span>
    </div>
    <div class="container shape-container d-flex align-items-center" >
      <div class="col px-0" >
        <div class="row justify-content-center align-items-center" >
          <div class="col-lg-9 text-center ">
            <img src="img/brand/white.png" style="width: 200px;" class="img-fluid">
            <p class="lead text-white mt-4 mb-5"><textra infinite :data='words' :timer="4" filter="flash" /></p>
            <base-button tag="a"
                         href="/Projects"
                         class="mb-3 mb-sm-3"
                         type="outline-white" size="sm"
                         icon="ni ni-bold-right">
              Start new project
            </base-button>
          </div>
        </div>

        <div class="row align-items-center justify-content-around stars-and-coded">
          <div class="col-sm-4">
          </div>
          <div class="col-sm-4 mt-4 mt-sm-0 text-right">
          </div>
        </div>
      </div>
      <div  class="stars-and-coded" style="position: absolute;bottom: 1%;width: 93%;">
        <div class="col px-0">
          <div class="row align-items-center justify-content-around">
            <div class="col text-left " >
              <a href="https://github.com/INFINITE-TECHNOLOGY" target="_blank"
                 title="Star us on Github">
                <img src="img/brand/github-white-slim.png" style="height: 22px;">
              </a>
            </div>
            <div class="col  text-right ">
              <a href="https://groovy-lang.org/" target="_blank" title="Powered by Apache Groovy">
                <img src="img/theme/Groovy.png" style="height: 90px;">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    skipFooterIcons() {
      return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&this.$screen.landscape);
    }
  },
  data () {
    return {
      words: ["Fintech task force", "Fintech consulting", "Fintech projects", "Fintech products", "Fintech services"]
    }
  }
};

</script>
<style>
</style>
