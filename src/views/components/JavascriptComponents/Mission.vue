<template>
    <div class="section section section-shaped my-0 pb-4 overflow-hidden">
        <div>
            <div class="shape shape-style-1 shape-default tempting-azure-gradient">
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
                        <h2 class="display-3 text-white">Efficient Software</h2>
                        <p class="lead text-white">Business expertise. Breakthrough technology.</p>
                    </div>
                </div>
                <div class="row row-grid  ">
                    <div class="col-md-6 order-1">
                        <div>
                            <h3 class="text-white">Our Mission</h3>
                            <p class="text-white">To expand your tech:</p>
                            <ul class="list-unstyled mt-3">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="light" circle class="mr-3 text-black-50">1</badge>
                                        <h6 class="mb-0 text-white">Consult with us</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="light"  circle class="mr-3 text-black-50">2</badge>
                                        <h6 class="mb-0 text-white">Use our Open Source Products</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="light" circle class="mr-3 text-black-50">3</badge>
                                        <h6 class="mb-0 text-white">Create new projects with us</h6>
                                    </div>
                                </li>
                            </ul>
                            <a href="/BeginModal"
                               class="btn btn-white mt-4">Begin</a>
                        </div>
                    </div>

                    <div class="col-md-6 order-2 ml-lg-auto">
                        <img src="img/theme/iPhone2007.png" class="img-center img-fluid">
                        <div class="row justify-content-center text-center">
                            <div class="col-lg-8">
                                <p class="lead text-white">Pioneers of Mobile Banking</p>
                            </div>
                        </div>
                    </div>
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
