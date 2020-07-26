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
                        <p class="lead text-white">Fintech. Banking. Payments.</p>
                    </div>
                </div>
                <card shadow class="shadow-lg--hover mt-5">
                    <div class="row row-grid-1 align-items-center">
                        <div class="col-md-4 order-md-2 ml-lg-auto">
                            <img src="img/theme/team-Rahul.jpg" class="rounded img-center img-fluid shadow">
                        </div>
                        <div class="col-md-6 order-md-1">
                            <h3>Rahul Kanotra</h3>
                            <badge type="danger">CPO</badge>
                            <badge type="danger">Co-Founder</badge>
                            <ul class="list-unstyled mt-3">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                                        <h6 class="mb-0 ">Open Banking</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                                        <h6 class="mb-0 ">Merchant Solutions</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                                        <h6 class="mb-0 ">Consumer Lending</h6>
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
                            <img src="img/theme/team-Anton.jpg" class="rounded img-center img-fluid shadow">
                        </div>
                        <div class="col-md-6 order-md-1">
                            <h3>Anton Pryamostanov</h3>
                            <badge type="danger">CTO</badge>
                            <badge type="danger" >Co-Founder</badge>
                            <ul class="list-unstyled mt-3">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                                        <h6 class="mb-0 ">Financial API</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" color="primary" circle class="mr-3  " icon="ni ni-bold-right"></badge>
                                        <h6 class="mb-0 ">Security as a Service</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="dark" circle class="mr-3 " icon="ni ni-bold-right"></badge>
                                        <h6 class="mb-0 ">Architecture</h6>
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
