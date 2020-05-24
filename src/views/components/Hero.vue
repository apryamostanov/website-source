<template>
    <section class="section-hero section-shaped my-0" style="height: 100vh; ">
        <div class="shape shape-style-1 shape-primary">
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
                        <p class="lead text-white mt-4 mb-5">Open-source software organization</p>
                        <div class="btn-wrapper ">
                            <base-button tag="a"
                                         href="https://demos.creative-tim.com/vue-argon-design-system/documentation"
                                         class="mb-3 mb-sm-0"
                                         type="primary"
                                         icon="ni ni-single-02">
                                Team
                            </base-button>
                            <base-button tag="a"
                                         href="https://demos.creative-tim.com/vue-argon-design-system/documentation"
                                         class="mb-3 mb-sm-0"
                                         type="primary"
                                         icon="ni ni-settings">
                                Tools
                            </base-button>
                            <base-button tag="a"
                                         href="https://demos.creative-tim.com/vue-argon-design-system/documentation"
                                         class="mb-3 mb-sm-0"
                                         type="primary"
                                         icon="ni ni-cloud-upload-96">
                                Services
                            </base-button>
                            <base-button tag="a"
                                         href="https://demos.creative-tim.com/vue-argon-design-system/documentation"
                                         class="mb-3 mb-sm-0"
                                         type="primary"
                                         icon="fa fa-github">
                                Products
                            </base-button>
                        </div>
                    </div>
                </div>

                <div class="row align-items-center justify-content-around stars-and-coded">
                    <div class="col-sm-4">
                    </div>
                    <div class="col-sm-4 mt-4 mt-sm-0 text-right">
                    </div>
                </div>
            </div>
            <div v-if="true" class="stars-and-coded" style="position: absolute;bottom: 1%;width: 93%;">
                <div class="col px-0">
                    <div class="row align-items-center justify-content-around">
                        <div class="col text-left">
                            <span class="text-white alpha-7 ml-3">Star us on</span>
                            <a href="https://github.com/INFINITE-TECHNOLOGY" target="_blank"
                               title="Support us on Github">
                                <img src="img/brand/github-white-slim.png" style="height: 22px; margin-top: -3px">
                            </a>
                        </div>
                        <div class="col  text-right">
                            <span class="text-white alpha-7 ml-3">Powered by</span>
                            <a href="https://groovy-lang.org/" target="_blank" title="Powered by Apache Groovy">
                                <img src="img/theme/Groovy.png" class="ml-3" style="height: 90px;">
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
            showFooterIcons() {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&this.$screen.landscape;
            }
        }
    };

</script>
<style>
</style>
