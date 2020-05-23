<template>
    <div class="row">
        <div class="col-sm-3 col-6 ">
            <small class="d-block text-uppercase font-weight-bold mb-4">Anton, the Founder</small>
            <router-link to="/Anton" title="Anton">
                <img v-lazy="'img/theme/team-Anton-Pryamostanov.jpg'" alt="Circle image"
                     class="img-fluid rounded-circle shadow" style="width: 150px;">
                <div class="btn btn-white mt-4">See more</div>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {};
</script>
<style>
</style>
