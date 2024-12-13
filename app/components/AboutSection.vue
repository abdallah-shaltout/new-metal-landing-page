<template>
    <section>
        <div
            class="fc gap-4 bg-darker h-96 text-slate-50 rounded-lg overflow-hidden sm:h-auto sm:p-4"
        >
            <div class="flex-1 pr-10 ltr:pl-10 ltr:pr-0 sm:w-full sm:!px-2">
                <h2 class="font-bold text-4xl section-title-start">
                    {{ $t('about.heading') }}
                </h2>
                <p class="my-8">
                    {{ $t('about.description') }}
                </p>

                <NuxtLink
                    :to="
                        $localePath({
                            name: 'about',
                        })
                    "
                >
                    <button
                        class="whitespace-nowrap fc shadow-sm btn-primary btn-with-icon"
                    >
                        <span>{{ $t('about.read_more') }}</span>
                        <span class="rotate-180 ltr:rotate-0">
                            <NuxtIcon name="arrow-right" class="text-sm" />
                        </span>
                    </button>
                </NuxtLink>
            </div>
            <div class="flex-1 h-full sm:hidden">
                <div class="w-full h-full">
                    <NuxtImg
                        src="/images/workers.webp"
                        class="h-full custom-image-clip-right ltr:-scale-x-100 w-full object-cover object-top mr-auto"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
