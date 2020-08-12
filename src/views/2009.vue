<template>
    <div class="section section section-shaped my-0 overflow-hidden">
        <div>
            <div class="shape shape-style-1 shape-primary bg-gradient-dark">
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
                        <h2 class="display-3 text-white">Archive © 2009</h2>
                        <p class="lead text-white">Back then, we started with this presentation.</p>
                    </div>
                </div>
                        <b-carousel id="carousel1"
                                    controls 
                                    indicators interval=15000>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="img/theme/2009_1.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/theme/2009_2.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/theme/2009_3.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/theme/2009_4.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/theme/2009_5.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/theme/2009_6.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/theme/2009_7.jpg"></b-carousel-slide>
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
