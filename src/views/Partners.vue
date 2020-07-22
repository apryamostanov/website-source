<template>
    <div class="section section section-shaped my-0 overflow-hidden">
        <div>
            <div class="shape shape-style-1 bg-gradient-teal">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-100">
                <div class="row justify-content-center text-center mb-sm">
                    <div class="col-lg-12">
                        <h2 class="display-3 text-white">Featured Partners</h2>
                        <p class="lead text-white">Proven success delivery.</p>
                    </div>
                </div>
                <card shadow class="shadow-lg--hover mt-5">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <div class="icon">
                                    <img src="img/theme/WirecardW.png" alt="Circle image" class="img-fluid  ">
                                </div>
                            </div>
                            <div class="col-auto px-0">
                                <div class="h2 mb-0 text-uppercase">Wirecard</div>
                            </div>
                        </div>
                        <div class="row align-items-center pt-3">
                            <div class="col-auto">
                                <badge type="info" rounded>Platinum Partner</badge>
                            </div>
                        </div>
                        <div class="row pt-3">
                            <div class="col-lg-12">
                                <p class="lead mt-1">Wirecard is using our entire ecosystem.</p>
                                <ul class="list-unstyled mt-3">
                                    <li class="py-2">
                                        <div class="d-flex align-items-center">
                                            <badge type="dark" circle class="mr-3  ">3</badge>
                                            <h6 class="mb-0 ">programs</h6>
                                        </div>
                                    </li>
                                    <li class="py-2">
                                        <div class="d-flex align-items-center">
                                            <badge type="dark" color="primary" circle class="mr-3  ">5</badge>
                                            <h6 class="mb-0 ">products</h6>
                                        </div>
                                    </li>
                                    <li class="py-2">
                                        <div class="d-flex align-items-center">
                                            <badge type="dark" circle class="mr-3 ">10</badge>
                                            <h6 class="mb-0 ">projects</h6>
                                        </div>
                                    </li>
                                </ul>
                                <router-link to="/Reviews" class="btn btn-success mt-4">Reviews</router-link>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </div>
    </div>
</template>
<script>
    export default {};

</script>
<style>
</style>
