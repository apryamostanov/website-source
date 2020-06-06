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
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-5 mb-5 mb-lg-0">

                        <div class="d-flex px-3">
                            <div>
                                <icon name="ni ni-world-2" type="z" color="primary" rounded class="mb-4 shadow ">
                                </icon>
                            </div>

                            <div class="pl-4">
                                <h4 class="display-3 text-white">Mission</h4>
                            </div>
                        </div>

                        <div class="d-flex px-3">
                            <div class="pl-0">
                                <p class="lead text-white mt-4"><b>Infinite TECH</b> is a software consulting company
                                    established in 2018.</p>
                                <p class="lead text-white mt-4">Our mission is to deliver efficient software products
                                    based on extensive knowledge and technology stack.</p>
                                <a v-if="skipIcons()"
                                   href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                                   class="btn btn-white mt-4">See more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-lg-auto">
                        <div class="rounded shadow-lg overflow-hidden ">
                            <b-carousel id="carousel1"
                                        controls
                                        indicators>
                                <!-- Text slides with image -->
                                <b-carousel-slide img-src="img/theme/Pigeon.png"></b-carousel-slide>
                                <b-carousel-slide img-src="img/theme/BlackBox.png"></b-carousel-slide>
                                <b-carousel-slide img-src="img/theme/Bobbin.png"></b-carousel-slide>
                                <b-carousel-slide img-src="img/theme/COBOL.png"></b-carousel-slide>
                                <b-carousel-slide img-src="img/theme/David.png"></b-carousel-slide>
                                <b-carousel-slide img-src="img/theme/Ascend.png"></b-carousel-slide>
                                <b-carousel-slide img-src="img/theme/Orbit.png"></b-carousel-slide>
                            </b-carousel>
                        </div>
                    </div>

                </div>
                <div v-if="!skipIcons()" class="section section-sm section-nucleo-icons pb-0">
                    <div class="container" @mouseleave="showIconsAnimation = true"
                         @mouseenter="showIconsAnimation = false">
                        <div class="blur--hover">
                            <a href="https://demos.creative-tim.com/argon-design-system/docs/foundation/icons.html">
                                <div class="icons-container blur-item mt-5" :class="{'on-screen': showIconsAnimation}">
                                    <!-- Center -->
                                    <i style="background: transparent"><img src="img/theme/InfiniteTECH_small.png"
                                                                            alt="Circle image" class="img-fluid"></i>
                                    <!-- Right 1 -->
                                    <i>
                                        <base-button text-color="dark" size="md" type="z">
                                            ETL
                                        </base-button>
                                    </i>
                                    <i>
                                        <base-button text-color="dark" size="md" type="z">
                                            ERP
                                        </base-button>
                                    </i>
                                    <i>
                                        <base-button text-color="dark" size="md" type="z">
                                            OLAP
                                        </base-button>
                                    </i>
                                    <!-- Right 2 -->
                                    <i>
                                        <base-button text-color="dark" size="md" type="z">
                                            Android
                                        </base-button>
                                    </i>
                                    <i>
                                        <base-button text-color="dark" size="md" type="z">
                                            Web
                                        </base-button>
                                    </i>
                                    <i>
                                        <base-button text-color="dark" size="md" type="z">
                                            iOS
                                        </base-button>
                                    </i>
                                    <!-- Left 1 -->
                                    <i>
                                        <base-button text-color="dark" size="md" type="z">
                                            OLTP
                                        </base-button>
                                    </i>
                                    <i>
                                        <base-button text-color="dark" size="md" type="z">
                                            BI
                                        </base-button>
                                    </i>
                                    <i>
                                        <base-button text-color="dark" size="md" type="z">
                                            CRM
                                        </base-button>
                                    </i>
                                    <!-- Left 2 -->
                                    <i>
                                        <base-button text-color="dark" size="md" type="z">
                                            CBS
                                        </base-button>
                                    </i>
                                    <i>
                                        <base-button text-color="dark" size="md" type="z">
                                            DWH
                                        </base-button>
                                    </i>
                                    <i>
                                        <base-button text-color="dark" size="md" type="z">
                                            EDMS
                                        </base-button>
                                    </i>
                                </div>
                                <div class="blur-hidden h5 text-black text-uppercase">
                                    <i style="background: transparent">
                                            <img src="img/theme/InfiniteTECH_small.png" alt="Circle image"
                                                 class="img-fluid"><br/>
                                    </i>
                                </div>
                            </a>
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
