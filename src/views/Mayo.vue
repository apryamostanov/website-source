<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <img v-lazy="'img/theme/team-Mayo.jpg'" class="rounded-circle">
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button type="info" size="sm" class="mr-4">Connect</base-button>
                                    <base-button type="default" size="sm" class="float-right">Message</base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">14</span>
                                        <span class="description">Years of Experience</span>
                                    </div>
                                    <div>
                                        <span class="heading">6</span>
                                        <span class="description">Companies</span>
                                    </div>
                                    <div>
                                        <span class="heading">3</span>
                                        <span class="description">Countries</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>Mayo De La Paz
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Riyadh, Saudi Arabia</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Head - Azure, Infinite TECH ∞
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
    export default {};
</script>
<style>
</style>
