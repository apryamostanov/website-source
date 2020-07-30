<template>
    <footer class="footer has-cards">
        <div class="container">
            <div class="row row-grid align-items-center ">
                <div class="col-lg-3">
                    <router-link to="/">
                        <img src="img/brand/blue.png" style="width: 200px;" class="img-fluid">
                    </router-link>
                </div>
                <div class="col-lg-9 text-lg-right btn-wrapper">
                    <a href="mailto:contact@i-t.io"
                       class="nav-link pl-0" target="_blank" rel="noopener">
                        <base-button class="btn-1" outline type="secondary" size="sm" icon="ni ni-email-83">
                            contact@i-t.io
                        </base-button>
                    </a>
                    <a href="tel:+971559307088"
                       class="nav-link pl-0" target="_blank" rel="noopener">
                        <base-button class="btn-1" outline type="secondary" size="sm" icon="fa fa-phone">+971559307088
                        </base-button>
                    </a>
                    <a href="https://www.linkedin.com/company/infinite-technology-%E2%88%9E"
                       class="nav-link pl-0" target="_blank" rel="noopener">
                        <base-button class="btn-1" outline type="secondary" size="sm" icon="fa fa-linkedin">Linkedin
                        </base-button>
                    </a>
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
