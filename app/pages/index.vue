<template>
    <section>
        <div class="container flex flex-col gap-20">
            <LazyLandingSection />
            <LazyAboutSection id="about" v-motion-pop-bottom />
            <LazyProjectsSection id="projects" v-motion-pop-bottom />
            <AnalyzeSection id="analyze" v-motion-pop-bottom />
            <LazyWhyusSection id="whyus" v-motion-pop-bottom />
        </div>
    </section>
</template>
