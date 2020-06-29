<template>
    <div class="section section section-shaped my-0 overflow-hidden">
        <div>
            <div class="shape shape-style-1 shape-default ">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-0">
                <div class="row justify-content-center text-center mb-sm">
                    <div class="col-lg-8">
                        <h2 class="display-3 text-white">Efficient Software Products</h2>
                        <p class="lead text-white">Based on extensive business knowledge and breakthrough
                            technology.</p>
                    </div>
                </div>
                <div class="row row-grid  ">
                    <div class="col-md-6 order-md-1">
                        <div>
                            <h3 class="text-white">Our Mission</h3>
                            <p class="text-white">To expand your tech:</p>
                            <ul class="list-unstyled mt-3">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="z" color="primary" circle class="mr-3">1</badge>
                                        <h6 class="mb-0 text-white">Start using our Open Source Products</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="z" color="primary" circle class="mr-3">2</badge>
                                        <h6 class="mb-0 text-white">Get our support</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="z" color="primary" circle class="mr-3">3</badge>
                                        <h6 class="mb-0 text-white">Create new projects with us</h6>
                                    </div>
                                </li>
                            </ul>
                            <a href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                               class="btn btn-white mt-4">Begin</a>
                        </div>
                    </div>

                    <div class="col-md-6 order-md-2 ml-lg-auto">
                        <img src="img/theme/iPhone2007.png" class="img-center img-fluid">
                    </div>
                </div>
                <div class="row justify-content-between">
                    <!--<div class="col-lg-6 mb-lg-auto">
                        <div class="rounded shadow-lg overflow-hidden ">
                            <b-carousel id="carousel1"
                                        controls
                                        indicators>
                                <b-carousel-slide img-src="img/theme/Pigeon.png"></b-carousel-slide>
                                <b-carousel-slide img-src="img/theme/BlackBox.png"></b-carousel-slide>
                                <b-carousel-slide img-src="img/theme/Bobbin.png"></b-carousel-slide>
                                <b-carousel-slide img-src="img/theme/COBOL.png"></b-carousel-slide>
                                <b-carousel-slide img-src="img/theme/David.png"></b-carousel-slide>
                                <b-carousel-slide img-src="img/theme/Ascend.png"></b-carousel-slide>
                                <b-carousel-slide img-src="img/theme/Orbit.png"></b-carousel-slide>
                            </b-carousel>
                        </div>
                    </div>-->

                </div>

                <div class="row justify-content-center text-center">
                    <div class="col-lg-8">
                        <h2 class="display-3 text-white">Pioneers of Mobile Banking</h2>
                        <p class="lead text-white">Over more than a decade of FinTech Innovation.</p>
                    </div>
                </div>
                <div>
                    <tabs fill class="flex-column flex-md-row">
                        <card shadow>
                            <tab-pane title="FinTech">
                                <p class="text-lead"><b>Infinite TECH</b> created the leading innovation stack in the
                                    FinTech Industry,
                                    which is being actively used by our partners and has been proven by processing very
                                    high financial volumes.</p>
                                <ul>
                                    <li class="py-2">
                                        <h6 class="mb-0">Mobile Banking</h6>
                                    </li>
                                    <li class="py-2">
                                        <h6 class="mb-0">Financiap API</h6>
                                    </li>
                                    <li class="py-2">
                                        <h6 class="mb-0">Web Security</h6>
                                    </li>
                                    <li class="py-2">
                                        <h6 class="mb-0">Chat Bots</h6>
                                    </li>
                                    <li class="py-2">
                                        <h6 class="mb-0">Visa, MC</h6>
                                    </li>
                                    <li class="py-2">
                                        <h6 class="mb-0">Crypto</h6>
                                    </li>
                                </ul>
                            </tab-pane>

                            <tab-pane title="Banking">
                                <p class="text-lead">Coming from a banking background, <b>Infinite TECH</b> includes
                                    some of the Industry top professionals - experts who have been trusted by multiple
                                    banks around
                                    the world.</p>
                                <ul>
                                    <li class="py-2">
                                        <h6 class="mb-0">CBS</h6>
                                    </li>
                                    <li class="py-2">
                                        <h6 class="mb-0">GL</h6>
                                    </li>
                                    <li class="py-2">
                                        <h6 class="mb-0">Credit Cards</h6>
                                    </li>
                                    <li class="py-2">
                                        <h6 class="mb-0">Internet Banking</h6>
                                    </li>
                                    <li class="py-2">
                                        <h6 class="mb-0">COBOL</h6>
                                    </li>
                                    <li class="py-2">
                                        <h6 class="mb-0">SWIFT, ACH, RTGS</h6>
                                    </li>
                                </ul>
                            </tab-pane>

                        </card>
                    </tabs>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import Tabs from "@/components/Tabs/Tabs.vue";
    import TabPane from "@/components/Tabs/TabPane.vue";
    import {BCarousel} from "bootstrap-vue/esm/components/carousel/carousel";
    import {BCarouselSlide} from "bootstrap-vue/esm/components/carousel/carousel-slide";

    export default {
        data() {
            return {
                showIconsAnimation: true
            };
        },
        methods: {
            onScroll(evt) {
                console.log(evt);
            },
            skipIcons() {
                return ["Android", "webOS", "iPhone", "iPad", "iPod", "BlackBerry", "IEMobile", "Opera Mini"].includes(navigator.userAgent) && this.$screen.portrait;
            }
        },
        components: {
            Tabs,
            TabPane,
            BCarousel,
            BCarouselSlide
        }
    };


</script>
<style>
</style>
