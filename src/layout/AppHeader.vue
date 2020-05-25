<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/white.png" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">Products</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-transparent rounded-circle text-white" style=" padding: 0">
                                <img v-lazy="'img/theme/Bobbin_small.png'" alt="Circle image"
                                     class="img-fluid rounded-circle " >
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">Bobbin</h6>
                                <p class="description d-none d-md-inline-block mb-0">Revolutionary SLF4J Java Logger.</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-transparent rounded-circle text-white" style=" padding: 0">
                                <img v-lazy="'img/theme/BlackBox_small.png'" alt="Circle image"
                                     class="img-fluid rounded-circle " >
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">BlackBox</h6>
                                <p class="description d-none d-md-inline-block mb-0">Groovy Logging AST.</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-transparent rounded-circle text-white" style=" padding: 0">
                                <img v-lazy="'img/theme/Pigeon_small.png'" alt="Circle image"
                                     class="img-fluid rounded-circle " >
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">Pigeon</h6>
                                <p class="description d-none d-md-inline-block mb-0">HTTP Message Broker.</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-transparent rounded-circle text-white" style=" padding: 0">
                                <img v-lazy="'img/theme/David_small.png'" alt="Circle image"
                                     class="img-fluid rounded-circle " >
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">David</h6>
                                <p class="description d-none d-md-inline-block mb-0">Telegram Chat Bot.</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-transparent rounded-circle" style=" padding: 0">
                                <img v-lazy="'img/theme/COBOL_small.png'" alt="Circle image"
                                     class="img-fluid rounded-circle" >
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">COBOL ETL</h6>
                                <p class="description d-none d-md-inline-block mb-0">Java COBOL Transpiler & ETL API.</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-transparent rounded-circle" style=" padding: 0">
                                <img v-lazy="'img/theme/Orbit_small.png'" alt="Circle image"
                                     class="img-fluid rounded-circle" >
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">Orbit</h6>
                                <p class="description d-none d-md-inline-block mb-0">REST API & CRM.</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-transparent rounded-circle" style=" padding: 0">
                                <img v-lazy="'img/theme/Ascend_small.png'" alt="Circle image"
                                     class="img-fluid rounded-circle" >
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">Ascend</h6>
                                <p class="description d-none d-md-inline-block mb-0">Web Security.</p>
                            </div>
                        </a>
                    </div>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Tools</span>
                    </a>
                    <router-link to="/landing" class="dropdown-item">Landing</router-link>
                    <router-link to="/profile" class="dropdown-item">Profile</router-link>
                    <router-link to="/login" class="dropdown-item">Login</router-link>
                    <router-link to="/register" class="dropdown-item">Register</router-link>
                </base-dropdown>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/creativetim" target="_blank"
                       rel="noopener"
                       data-toggle="tooltip" title="Like us on Facebook">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on Instagram">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank"
                       rel="noopener"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/INFINITE-TECHNOLOGY"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Star us on Github">
                        <i class="fa fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="https://www.creative-tim.com/product/vue-argon-design-system" target="_blank"
                       rel="noopener"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-cloud-download mr-2"></i>
                </span>
                        <span class="nav-link-inner--text">Download</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
    import BaseNav from "@/components/BaseNav";
    import BaseDropdown from "@/components/BaseDropdown";
    import CloseButton from "@/components/CloseButton";

    export default {
        components: {
            BaseNav,
            CloseButton,
            BaseDropdown
        }
    };
</script>
<style>
</style>
