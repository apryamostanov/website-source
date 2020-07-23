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
                        <h2 class="display-3 text-white">Team</h2>
                        <p class="lead text-white">Experienced banking professionals.</p>
                    </div>
                </div>
                <card shadow class="shadow-lg--hover mt-5">
                    <div class="row row-grid-1 align-items-center">
                        <div class="col-md-4 order-md-2 ml-lg-auto">
                            <img src="img/theme/team-Rahul.jpg" class="rounded img-center img-fluid shadow">
                        </div>
                        <div class="col-md-6 order-md-1">
                            <h3>Rahul Kanotra</h3>
                            <p>CBDO, co-founder</p>
                            <ul class="list-unstyled mt-3">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                                        <h6 class="mb-0 ">Products</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                                        <h6 class="mb-0 ">Open Banking</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                                        <h6 class="mb-0 ">Blockchain</h6>
                                    </div>
                                </li>
                            </ul>
                            <router-link to="/Rahul" class="btn btn-warning mt-4">Profile</router-link>
                        </div>
                    </div>
                </card>
                <card shadow class="shadow-lg--hover mt-5">
                    <div class="row row-grid-1 align-items-center">
                        <div class="col-md-4 order-md-2 ml-lg-auto">
                            <img src="img/theme/team-Anton-Pryamostanov.jpg" class="rounded img-center img-fluid shadow">
                        </div>
                        <div class="col-md-6 order-md-1">
                            <h3>Anton Pryamostanov</h3>
                            <p>CTO, co-founder</p>
                            <ul class="list-unstyled mt-3">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  ">15</badge>
                                        <h6 class="mb-0 ">years in Banking</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" color="primary" circle class="mr-3  ">10</badge>
                                        <h6 class="mb-0 ">years in FinTech</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3 ">10</badge>
                                        <h6 class="mb-0 ">years in Payments</h6>
                                    </div>
                                </li>
                            </ul>
                            <router-link to="/Anton" class="btn btn-warning mt-4">Profile</router-link>
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
