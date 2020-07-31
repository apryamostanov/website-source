<template>
    <footer class="footer has-cards">
        <div class="container">
            <div class="row   align-items-center">
                <div class="col-md-6 order-lg-1">
                    <div class="list-unstyled ">
                        <div class="py-2">
                            <div class="d-flex align-items-center">
                                <base-button tag="a" href="mailto:contact@i-t.io" class="btn btn-white text-left  w-100 " icon="ni ni-email-83">
                                    contact@i-t.io
                                </base-button>
                            </div>
                        </div>
                        <div class="py-2">
                            <div class="d-flex align-items-center">
                                <base-button tag="a" href="https://www.linkedin.com/company/infinite-technology-%E2%88%9E" class="btn btn-white text-left  w-100 " icon="fa fa-linkedin">
                                    Linkedin
                                </base-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 order-lg-1">
                    <div class="list-unstyled ">
                        <div class="py-2">
                            <div class="d-flex align-items-center">
                                <base-button tag="a" href="mailto:contact@i-t.io" class="btn btn-white text-left  w-100 " icon="fa fa-phone">
                                    +971559307088
                                </base-button>
                            </div>
                        </div>
                        <div class="py-2">
                            <div class="d-flex align-items-center">
                                <base-button tag="a" href="https://bintray.com/infinite-technology/io.i-t" class="btn btn-white text-left  w-100 " icon="fa fa-arrows-alt">
                                    Bintray
                                </base-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr >
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <router-link to="/">Infinite TECH</router-link>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex nav nav-footer justify-content-end">
                        <router-link class="nav-link" to="/Fundraising">Fundraising</router-link>
                        <router-link class="nav-link" to="/PrivacyPolicy">Privacy Policy</router-link>
                        <a href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                           class="nav-link" target="_blank" rel="noopener">MIT License</a>
                    </div>
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
