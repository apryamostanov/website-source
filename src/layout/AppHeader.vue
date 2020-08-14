<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/white.png" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                        <img src="img/brand/blue.png">
                    </router-link>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="fa fa-cubes d-lg-none"></i>
                        <span class="nav-link-inner--text">Products</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <router-link to="/Bobbin"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-transparent rounded-circle text-white" style=" padding: 0">
                                <img src="img/theme/Bobbin_small.png" alt="Circle image"
                                     class="img-fluid rounded-circle ">
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">Bobbin</h6>
                                <p class="description d-none d-md-inline-block mb-0">Revolutionary SLF4J Java
                                    Logger.</p>
                            </div>
                        </router-link>
                        <a href="/BlackBox"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-transparent rounded-circle text-white" style=" padding: 0">
                                <img src="img/theme/BlackBox_small.png" alt="Circle image"
                                     class="img-fluid rounded-circle ">
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">BlackBox</h6>
                                <p class="description d-none d-md-inline-block mb-0">Groovy Logging AST.</p>
                            </div>
                        </a>
                        <a href="/Pigeon"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-transparent rounded-circle text-white" style=" padding: 0">
                                <img src="img/theme/Pigeon_small.png" alt="Circle image"
                                     class="img-fluid rounded-circle ">
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">Pigeon</h6>
                                <p class="description d-none d-md-inline-block mb-0">HTTP Message Broker.</p>
                            </div>
                        </a>
                        <a href="/David"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-transparent rounded-circle text-white" style=" padding: 0">
                                <img src="img/theme/David_small.png" alt="Circle image"
                                     class="img-fluid rounded-circle ">
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">David</h6>
                                <p class="description d-none d-md-inline-block mb-0">Telegram Chat Bot.</p>
                            </div>
                        </a>
                        <a href="/Rekon"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-transparent rounded-circle" style=" padding: 0">
                                <img src="img/theme/Rekon_small.png" alt="Circle image"
                                     class="img-fluid rounded-circle">
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">Rekon</h6>
                                <p class="description d-none d-md-inline-block mb-0">Financial ETL.</p>
                            </div>
                        </a>
                        <a href="/RekonCOBOL"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-transparent rounded-circle" style=" padding: 0">
                                <img src="img/theme/Rekon_COBOL_small.png" alt="Circle image"
                                     class="img-fluid rounded-circle">
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">Rekon COBOL</h6>
                                <p class="description d-none d-md-inline-block mb-0">COBOL ETL and data tools.</p>
                            </div>
                        </a>
                        <a href="/Orbit"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-transparent rounded-circle" style=" padding: 0">
                                <img src="img/theme/Orbit_small.png" alt="Circle image"
                                     class="img-fluid rounded-circle">
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">Orbit</h6>
                                <p class="description d-none d-md-inline-block mb-0">REST API Frontend.</p>
                            </div>
                        </a>
                        <a href="/Ascend"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-transparent rounded-circle" style=" padding: 0">
                                <img v-lazy="'img/theme/Ascend_small.png'" alt="Circle image"
                                     class="img-fluid rounded-circle">
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
                        <i class="ni ni-settings d-lg-none"></i>
                        <span class="nav-link-inner--text">Tools</span>
                    </a>
                    <router-link to="/CobolXML" class="dropdown-item">COBOL to XML</router-link>
                    <router-link to="/Re-encode" class="dropdown-item">Re-encode</router-link>
                    <router-link to="/AnalyzeJSON" class="dropdown-item">JSON Analyzer</router-link>
                    <router-link to="/FormatJSON" class="dropdown-item">JSON Formatter</router-link>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-single-02 d-lg-none"></i>
                        <span class="nav-link-inner--text">Company</span>
                    </a>
                    <router-link to="/Story" class="dropdown-item">Our Story</router-link>
                    <router-link to="/Partners" class="dropdown-item">Partners</router-link>
                    <router-link to="/Team" class="dropdown-item">Team</router-link>
                    <router-link to="/Blog" class="dropdown-item">Blog</router-link>
                </base-dropdown>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="mailto:sales@i-t.io" target="_blank"
                       rel="noopener"
                       data-toggle="tooltip" title="sales@i-t.io">
                        <i class="ni ni-email-83"></i>
                        <span class="nav-link-inner--text d-lg-none">sales@i-t.io</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="tel:+971559307088"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="+971559307088">
                        <i class="fa fa-phone"></i>
                        <span class="nav-link-inner--text d-lg-none">+971559307088</span>
                    </a>
                </li>
                <li class="nav-item d-lg-none">
                    <a class="nav-link nav-link-icon" href="https://t.me/david_it_bot"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Chat Bot">
                        <i class="ni ni-send"></i>
                        <span class="nav-link-inner--text ">Chat Bot</span>
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="https://web.telegram.org/#/im?p=@david_it_bot" target="_blank"
                       rel="noopener" class="btn btn-outline-white btn-icon">
                        <span class="btn-inner--icon">
                          <i class="ni ni-send mr-2"></i>
                        </span>
                        <span class="nav-link-inner--text">Chat Bot</span>
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
