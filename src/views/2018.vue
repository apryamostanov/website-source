<template>
    <div class="section section section-shaped my-0 overflow-hidden">
        <div>
            <div class="shape shape-style-1 shape-primary bg-gradient-gray">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-100">
                <div class="row justify-content-center text-center mb-sm">
                    <div class="col-lg-8">
                        <h2 class="display-3 text-white">Archive © 2018</h2>
                        <p class="lead text-white">This web site - back then.</p>
                    </div>
                </div>
                <b-carousel  id="carousel1"
                            controls fade
                            indicators interval=5000>
                    <!-- Text slides with image -->
                    <b-carousel-slide img-src="img/theme/2018_1.jpg"></b-carousel-slide>
                    <b-carousel-slide img-src="img/theme/2018_2.jpg"></b-carousel-slide>
                    <b-carousel-slide img-src="img/theme/2018_3.jpg"></b-carousel-slide>
                    <b-carousel-slide img-src="img/theme/2018_4.jpg"></b-carousel-slide>
                    <b-carousel-slide img-src="img/theme/2018_5.jpg"></b-carousel-slide>
                </b-carousel>
            </div>
        </div>
    </div>
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
