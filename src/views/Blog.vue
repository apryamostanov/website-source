<template>
    <div class="section section section-shaped my-0 overflow-hidden">
        <div>
            <div class="shape shape-style-1 shape-primary bg-gradient-indigo">
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
                        <h2 class="display-3 text-white">Blog</h2>
                        <p class="lead text-white">Exclusive content written by our authors.</p>
                    </div>
                </div>
                <card shadow class="shadow-lg--hover mt-5">
                    <div class="row row-grid-1 align-items-center">
                        <div class="col-md-3 order-md-2 ml-lg-auto">
                            <img src="img/theme/Groovy500.png" class="img-center img-fluid">
                        </div>
                        <div class="col-md-9 order-md-1">
                            <h3>Groovy Traits - static and instance init blocks</h3>
                            <p class="text-dark">17th November, 2018</p>
                            <p class="text-lead">Today we will show an example of a new useful Groovy Traits feature:</p>
                            <p class="text-lead ml-3">- Multiple inheritance of static and instance init blocks</p>
                            <router-link to="/Blog/Traits" class="btn btn-primary mt-4">Read</router-link>
                        </div>
                    </div>
                </card>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            skipFooterIcons() {
                return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && this.$screen.landscape);
            }
        }
    };

</script>
<style>
</style>
