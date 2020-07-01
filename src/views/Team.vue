<template>
    <section class="section-hero section-shaped my-0" style="height: 100vh; ">
        <div class="shape shape-style-1 shape-primary bg-gradient-warning">
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
        <div class="container pt-200">
            <div class="row justify-content-center text-center mb-sm">
                <div class="col-lg-8">
                    <h2 class="display-3 text-white">Our Team</h2>
                    <p class="lead text-white">Experienced banking professionals.</p>
                </div>
            </div>
            <div class="row row-grid  ">

                <div class="col-lg-5 order-md-2 text-center">
                    <img src="img/theme/team-Anton-Pryamostanov.jpg"  class="rounded-circle img-center img-fluid shadow shadow-lg--hover w-50">
                </div>
                <div class="col-md-6 order-md-1">
                    <div>
                        <h3 class="text-white">Anton Pryamostanov</h3>
                        <p class="text-white">Managing Consultant</p>
                        <ul class="list-unstyled mt-3">
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <badge type="z" color="primary" circle class="mr-3">1</badge>
                                    <h6 class="mb-0 text-white">15 years in Banking</h6>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <badge type="z" color="primary" circle class="mr-3">2</badge>
                                    <h6 class="mb-0 text-white">6 years in FinTech</h6>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <badge type="z" color="primary" circle class="mr-3">3</badge>
                                    <h6 class="mb-0 text-white">7 years in Payments</h6>
                                </div>
                            </li>
                        </ul>
                        <a href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                           class="btn btn-white mt-4">More</a>
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
                return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && this.$screen.landscape);
            }
        }
    };

</script>
<style>
</style>
