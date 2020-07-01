<template>
    <div class="section section section-shaped my-0 overflow-hidden">
        <div>
            <div class="shape shape-style-1 shape-primary bg-gradient-warning">
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
                        <h2 class="display-3 text-white">Our Team</h2>
                        <p class="lead text-white">Experienced banking professionals.</p>
                    </div>
                </div>
                <div class="row row-grid  ">
                    <div class="col-md-6 order-sm-1">
                        <div>
                            <h3 class="text-white">Anton Pryamostanov</h3>
                            <p class="text-white">Managing Consultant</p>
                            <ul class="list-unstyled mt-3">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="z" color="primary" circle class="mr-3 text-danger">15</badge>
                                        <h6 class="mb-0 text-white">years in Banking</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="z" color="primary" circle class="mr-3 text-danger">10</badge>
                                        <h6 class="mb-0 text-white">years in FinTech</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="z" circle class="mr-3 text-danger">10</badge>
                                        <h6 class="mb-0 text-white">years in Payments</h6>
                                    </div>
                                </li>
                            </ul>
                            <router-link to="/Anton" class="btn btn-white mt-4">Profile</router-link>
                        </div>
                    </div>

                    <div class="col-md-4 order-sm-2 ml-lg-auto">
                        <img src="img/theme/team-Anton-Pryamostanov.jpg" class="img-center img-fluid shadow">
                    </div>
                </div>

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
