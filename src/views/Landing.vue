<template>
    <div>
        <hero></hero>
        <mission></mission>
        <fintech></fintech>
        <products></products>
        <tools></tools>
        <landing-footer></landing-footer>
    </div>
</template>
<script>
    import Hero from "./components/Hero";
    import BasicElements from "./components/BasicElements";
    import Inputs from "./components/Inputs";
    import CustomControls from "./components/CustomControls";
    import Navigation from "./components/Navigation";
    import JavascriptComponents from "./components/JavascriptComponents";
    import Products from "./components/Products";
    import Carousel from "./components/Carousel";
    import Icons from "./components/Icons";
    import Examples from "./components/Examples";
    import DownloadSection from "./components/DownloadSection";
    import Services from "./components/JavascriptComponents/Services";
    import Mission from "./components/JavascriptComponents/Mission";
    import Tools from "./Tools";
    import LandingFooter from "./LandingFooter";
    import Fintech from "./components/Projects";

    export default {
        name: "landing",
        components: {
            Fintech,
            Services,
            Hero,
            Products,
            Mission,
            Tools,
            JavascriptComponents,
            BasicElements,
            Inputs,
            CustomControls,
            Navigation,
            Carousel,
            Icons,
            Examples,
            DownloadSection,
            LandingFooter
        }
    };
</script>
