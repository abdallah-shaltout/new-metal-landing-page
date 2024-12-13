<template>
    <section>
        <div class="fl-5">
            <h2 class="text-3xl section-title-start font-bold text-darker">
                {{ $t('whyus.heading') }}
            </h2>
            <div class="fc gap-2 sm:flex-col">
                <p class="text-dark text-pretty">
                    {{ $t('whyus.description') }}
                </p>
                <a href="https://wa.me/201554673489" class="sm:ml-auto">
                    <button class="btn-primary whitespace-nowrap">
                        {{ $t('whyus.contact_us') }}
                    </button>
                </a>
            </div>

            <div
                class="relative group w-full h-64 sm:h-40 overflow-hidden cursor-pointer"
                @click="showVideo = true"
            >
                <button
                    class="abs-center w-14 h-14 flex-center rounded-full bg-slate-50 shadow trans group-hover:bg-primary text-dark group-hover:text-white z-2"
                >
                    <NuxtIcon
                        name="play"
                        filled
                        class="text-4xl [&>svg]:!m-0"
                    />
                </button>
                <NuxtImg
                    loading="lazy"
                    src="/images/landing-small.webp"
                    class="w-full h-full object-cover rounded-2xl shadow-sm transition-all duration-500 ease-in-out group-hover:brightness-75"
                />
            </div>
        </div>
        <LazyAppDialog v-model="showVideo" animate-from="bottom">
            <div class="rounded-lg w-full p-5 sm:p-2 bg-light shadow-xl">
                <button
                    @click="showVideo = false"
                    class="flex-center aspect-square rounded t-trans hover:scale-110"
                >
                    <NuxtIcon name="close" class="text-4xl" />
                </button>

                <video
                    controls
                    class="w-full aspect-video max-w-6xl rounded-xl"
                >
                    <source src="/videos/new-metal.mp4" type="video/mp4" />
                </video>
            </div>
        </LazyAppDialog>
    </section>
</template>

<script lang="ts" setup>
const showVideo = ref<boolean>(false)
</script>
