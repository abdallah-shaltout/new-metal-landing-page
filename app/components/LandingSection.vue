<template>
    <section>
        <div class="flex-center md:flex-col-reverse gap-5">
            <div class="flex-1 fl-5 md:w-full">
                <h2
                    class="font-bold leading-tight text-[55px] text-darker md:text-4xl md:leading-normal md:text-center"
                >
                    {{ $t('landing.vision_heading') }}
                </h2>
                <p class="text-sm my-4 md:mt-2 text-dark">
                    {{ $t('landing.vision_description') }}
                </p>
                <a href="https://wa.me/201554673489" target="_blank">
                    <button class="btn-primary w-fit">
                        {{ $t('landing.contact_us') }}
                    </button>
                </a>
            </div>
            <div class="flex-1 md:w-full">
                <div
                    v-motion-pop-bottom
                    class="w-full rounded-2xl flex-center overflow-hidden shadow-lg aspect-square"
                >
                    <NuxtImg
                        loading="lazy"
                        src="/images/landing.webp"
                        class="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
        <div class="flex-center md:flex-col gap-5 mt-4">
            <div class="flex-1 md:w-full">
                <NuxtImg
                    loading="lazy"
                    v-motion-pop-bottom
                    src="/images/landing-small.webp"
                    class="w-full h-36 object-cover rounded-2xl shadow-sm"
                />
            </div>
            <div class="flex-1">
                <h3 class="text-2xl text-darker font-bold">
                    {{ $t('landing.materials_heading') }}
                </h3>
                <div class="flex-between gap-2 mt-2 sm:flex-col">
                    <p class="text-sm text-dark">
                        {{ $t('landing.materials_description') }}
                    </p>

                    <NuxtLink
                        class="sm:ml-auto"
                        :to="
                            $localePath({
                                name: 'about',
                            })
                        "
                    >
                        <button
                            class="whitespace-nowrap btn-primary btn-with-icon sm:mt-4"
                        >
                            <span>{{ $t('landing.read_more') }}</span>
                            <span
                                class="rounded-full w-6 h-6 bg-white flex-center text-darker trans"
                            >
                                <NuxtIcon
                                    name="arrow-top"
                                    class="text-sm rtl:rotate-[270deg]"
                                />
                            </span>
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>
