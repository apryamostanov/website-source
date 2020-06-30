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
        <section class="section section-components">
            <div class="container">
                <div class="row justify-content-center text-center mb-lg">
                    <div class="col-lg-8">
                        <h2 class="display-3">Team</h2>
                        <p class="lead text-muted">Infinite TECH Team</p>
                    </div>
                </div>

                <div class="row  justify-content-center">

                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">

                            <router-link to="/Anton" title="Anton">
                                <img v-lazy="'img/theme/team-Anton-Pryamostanov.jpg'"
                                     class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                     style="width: 200px;">
                                <div class="pt-4 text-center">
                                    <div class="btn btn-white mt-4" style="width: 150px;">Anton</div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {};
</script>
<style>
</style>
