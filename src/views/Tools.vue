<template>
    <section class="section section section-shaped my-0 overflow-hidden">
        <div class="shape shape-style-1 bg-gradient-blue">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container py-0">
            <div class="row row-grid align-items-center">
                <div class="col-lg-6 order-lg-1">
                    <div class="d-flex px-3">
                        <div>
                            <icon name="ni ni-settings" size="lg" type="white" color="w" shadow rounded></icon>
                        </div>
                        <div class="pl-4">
                            <h4 class="display-3 text-white">Online Tools</h4>
                            <p class="text-white">An exclusive collection of free online services based on <b>Infinite
                                TECH</b> stack.</p>
                        </div>
                    </div>
                </div>
            </div>
            <card shadow class="shadow-lg--hover mt-5">
                <div class="row row-grid-1 align-items-center">
                    <div class="col-md-3 order-md-2 ml-lg-auto">
                        <img src="img/theme/Bobbin_small.png" class="img-center img-fluid">
                    </div>
                    <div class="col-md-9 order-md-1">
                        <h3>Heroku Java Client Certificate Authentication</h3>
                        <p class="text-dark">20th September, 2019</p>
                        <p class="text-lead">Let’s say our Java application is deployed on Heroku platform and needs
                            to connect to server using client certificate authentication.</p>
                        <router-link to="/Blog/HerokuAuthentication" class="btn btn-primary mt-4">Read</router-link>
                    </div>
                </div>
            </card>
            <card shadow class="shadow-lg--hover mt-5">
                <div class="row row-grid-1 align-items-center">
                    <div class="col-md-3 order-md-2 ml-lg-auto">
                        <img src="img/theme/Spring.png" class="img-center img-fluid">
                    </div>
                    <div class="col-md-9 order-md-1">
                        <h3>Logging Spring Boot HTTP with Bobbin</h3>
                        <p class="text-dark">23rd March, 2019</p>
                        <p class="text-lead">Today we will demonstrate an amazing example of how
                            <router-link to="/Bobbin">Bobbin</router-link>
                            Slf4j Logger can help in a very common use case:
                        </p>
                        <p class="text-lead ml-3">- logging Spring Boot HTTP requests and responses</p>
                        <router-link to="/Blog/LoggingSpringBoot" class="btn btn-primary mt-4">Read</router-link>
                    </div>
                </div>
            </card>
            <card shadow class="shadow-lg--hover mt-5">
                <div class="row row-grid-1 align-items-center">
                    <div class="col-md-3 order-md-2 ml-lg-auto">
                        <img src="img/theme/Groovy500.png" class="img-center img-fluid">
                    </div>
                    <div class="col-md-9 order-md-1">
                        <h3>Groovy Traits - static and instance init blocks</h3>
                        <p class="text-dark">17th November, 2018</p>
                        <p class="text-lead">Today we will show an example of a new useful Groovy Traits
                            feature:</p>
                        <p class="text-lead ml-3">- Multiple inheritance of static and instance init blocks</p>
                        <router-link to="/Blog/Traits" class="btn btn-primary mt-4">Read</router-link>
                    </div>
                </div>
            </card>
        </div>
    </section>
</template>

<script>
    export default {
        name: "home",
        components: {}
    };
</script>
