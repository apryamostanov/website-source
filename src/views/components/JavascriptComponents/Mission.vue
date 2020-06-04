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
            <div class="container py-0 pb-lg">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-5 mb-5 mb-lg-0">

                        <div class="d-flex px-3">
                            <div>
                                <icon name="ni ni-world-2" type="info" rounded class="mb-4 text-white-50 shadow ">
                                </icon>
                            </div>

                            <div class="pl-4">
                                <h4 class="display-3 text-white">Mission</h4>
                            </div>
                        </div>

                        <div class="d-flex px-3">
                            <div class="pl-0">
                                <p class="lead text-white mt-4"><b>Infinite TECH</b> is a software consulting company established in 2018.</p>
                                <p class="lead text-white mt-4">Our mission is to deliver efficient software products based on extensive knowledge and technology stack.</p>
                                <a href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                                   class="btn btn-white mt-4">See more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-lg-auto">
                        <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
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
            </div>
        </div>
        <div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="fa fa-file-code-o" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">COBOL to XML</h6>
                                    <p class="description mt-3">Online COBOL data file converter.</p>
                                    <p class="description mt-3">Convert COBOL data file online to XML using
                                        copybook.</p>
                                    <div>
                                        <badge type="primary" rounded>ETL</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        Try it now
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="fa fa-file-text-o" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">Re-encode</h6>
                                    <p class="description mt-3">Online encoding converter.</p>
                                    <p class="description mt-3">Convert file from any character encoding to any other
                                        character encoding.</p>
                                    <div>
                                        <badge type="success" rounded>ETL</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="success" class="mt-4">
                                        Try it now
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-chart-bar-32" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">JSON Analyzer</h6>
                                    <p class="description mt-3">Online JSON Statistics.</p>
                                    <p class="description mt-3">Analyze contents of any JSON data file.</p>
                                    <div>
                                        <badge type="warning" rounded>OLAP</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="warning" class="mt-4">
                                        Try it now
                                    </base-button>
                                </card>
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
