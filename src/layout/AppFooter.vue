<template>
    <footer class="footer has-cards">
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h3 class="text-primary font-weight-light mb-2">Our Humanitarian mission:</h3>

                    <a href="https://www.facebook.com/groups/518671105515699/"
                       class="nav-link pl-0" target="_blank" rel="noopener">
                        <base-button class="btn-1" outline type="warning">Bangladesh
                            Corona Virus Relief
                        </base-button>
                    </a>
                </div>
                <div class="col-lg-6 text-lg-center btn-wrapper">
                    <h3 class="text-primary font-weight-light mb-2">Follow us on social media:</h3>
                    <a target="_blank" rel="noopener" href="https://twitter.com/infinitetech"
                       class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.facebook.com/infinitetech"
                       class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Like us">
                        <i class="fa fa-facebook-square"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://dribbble.com/creativetim"
                       class="btn btn-primary btn-icon-only btn-lg btn-round" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-linkedin"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://github.com/INFINITE-TECHNOLOGY"
                       class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Star on Github">
                        <i class="fa fa-github"></i>
                    </a>
                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <router-link to="/">Infinite TECH</router-link>
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/Fundraising">Fundraising</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/PrivacyPolicy">Privacy Policy</router-link>
                        </li>
                        <li class="nav-item">
                            <a href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                               class="nav-link" target="_blank" rel="noopener">MIT License</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        name: 'app-footer',
        data() {
            return {
                year: new Date().getFullYear()
            }
        }
    };
</script>
<style>
</style>
