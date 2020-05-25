<template>
    <section class="section section-lg section-shaped overflow-hidden my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
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
                            <p class="lead text-white mt-4"><b>Infinite Technology ∞</b> is an open-source software
                                foundation established in 2018.</p>
                            <p class="lead text-white mt-4">Our mission is to streamline Web and Mobile app development
                                by standardizing and systemizing the primary infrastructure components.</p>
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
    </section>
</template>
<script>
    import {BCarousel} from "bootstrap-vue/esm/components/carousel/carousel";
    import {BCarouselSlide} from "bootstrap-vue/esm/components/carousel/carousel-slide";

    export default {
        components: {
            BCarousel,
            BCarouselSlide
        }
    };
</script>
<style>
</style>
