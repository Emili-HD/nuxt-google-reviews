<template>
    <div>
        <!-- <h2 class="text-2xl font-bold">Reseñas de Google</h2> -->
        <div class="flex flex-col lg:flex-row">
            <div v-if="averageRating !== null && totalReviews !== null"
                class="my-4 w-full lg:w-1/6 flex flex-col items-center">
                <div class="rating-text font-bold text-clamp-2xl">
                    <strong class=""> Excelente </strong>
                </div>
                <div class="stars pb-4 w-44" :data-stars="averageRating">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 172.4 33.6">
                        <g>
                            <defs>
                                <path id="SVGID_1" d="M17.8,1.1L23,11.5l11.6,1.7l-8.4,8.1l2,11.4l-10.3-5.4L7.5,32.7l2-11.4l-8.4-8.1l11.6-1.7L17.8,1.1z
                                M52,1.1l5.2,10.4l11.6,1.7l-8.4,8.1l2,11.4L52,27.3l-10.3,5.4l2-11.4l-8.4-8.1l11.6-1.7L52,1.1z M86.2,1.1l5.2,10.4l11.6,1.7
                                l-8.4,8.1l2,11.4l-10.3-5.4l-10.3,5.4l2-11.4l-8.4-8.1L81,11.5L86.2,1.1z M120.4,1.1l5.2,10.4l11.6,1.7l-8.4,8.1l2,11.4l-10.3-5.4
                                L110,32.7l2-11.4l-8.4-8.1l11.6-1.7L120.4,1.1z M154.6,1.1l5.2,10.4l11.6,1.7l-8.4,8.1l2,11.4l-10.3-5.4l-10.3,5.4l2-11.4
                                l-8.4-8.1l11.6-1.7L154.6,1.1z" stroke="#F6BB09" />
                            </defs>
                            <clipPath id="SVGID_2">
                                <use xlink:href="#SVGID_1" style="overflow:visible;" />
                            </clipPath>
                            <rect class="bg-stars [clip-path:url(#SVGID_2)] fill-gold-1" x="0.7" y="0.1"
                                :width="calculateWidth(averageRating)" height="33.5" fill="#F6BB09" />
                            <use xlink:href="#SVGID_1"
                                style="overflow:visible;fill:none;stroke:#F6BB09;stroke-miterlimit:10;" />
                        </g>
                    </svg>
                    <p class="text-xs font-light mb-0 text-center">Valoración media: {{ averageRating }} / 5</p>
                </div>
                <span class="nowrap">En base a <strong>{{ totalReviews }} reseñas</strong></span>
                <img loading="lazy" src="~/assets/images/icons/google-logo.svg" alt="Logo Google" class="w-24" />
            </div>

            <!-- Mostrar reseñas filtradas -->
            <div class="relative w-5/6">
                <button class="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10">
                    ←
                </button>
                <button class="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10">
                    →
                </button>
                <ClientOnly>
                    <swiper-container
                        class="mySwiper px-6 max-w-full list-none lg:px-6 min-h-96 flex flex-col lg:flex-row gap-6 w-full lg:w-5/6"
                        v-if="reviews.length" ref="reviewsSlider" :init="false">
                        <swiper-slide v-for="(review, index) in reviews" :key="index"
                            class="p-6 mt-2 mb-12 bg-white border border-gray-300 rounded-md w-full">
                            <div class="flex items-center gap-4 mb-4">
                                <img loading="lazy" :src="review.profile_photo_url" :alt="review.author_name" width="40"
                                    height="40" class="size-10 rounded-full">
                                <div class="w-full">
                                    <p class="font-semibold mb-0">{{ review.author_name }}</p>
                                    <p class="text-xs font-light mb-0">{{ review.relative_time_description }}</p>
                                </div>
                                <img src="~/assets/images/icons/google-color-icon.svg" alt="Google" width="24" height="24"
                                    class="size-6" />
                            </div>
                            <!-- <p class="text-sm">Calificación: {{ review.rating }} estrellas</p> -->
                            <div class="stars pb-4 w-24" :data-stars="review.rating">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                    y="0px" viewBox="0 0 172.4 33.6">
                                    <g>
                                        <defs>
                                            <path id="SVGID_1" d="M17.8,1.1L23,11.5l11.6,1.7l-8.4,8.1l2,11.4l-10.3-5.4L7.5,32.7l2-11.4l-8.4-8.1l11.6-1.7L17.8,1.1z
                                         M52,1.1l5.2,10.4l11.6,1.7l-8.4,8.1l2,11.4L52,27.3l-10.3,5.4l2-11.4l-8.4-8.1l11.6-1.7L52,1.1z M86.2,1.1l5.2,10.4l11.6,1.7
                                         l-8.4,8.1l2,11.4l-10.3-5.4l-10.3,5.4l2-11.4l-8.4-8.1L81,11.5L86.2,1.1z M120.4,1.1l5.2,10.4l11.6,1.7l-8.4,8.1l2,11.4l-10.3-5.4
                                         L110,32.7l2-11.4l-8.4-8.1l11.6-1.7L120.4,1.1z M154.6,1.1l5.2,10.4l11.6,1.7l-8.4,8.1l2,11.4l-10.3-5.4l-10.3,5.4l2-11.4
                                         l-8.4-8.1l11.6-1.7L154.6,1.1z" stroke="#F6BB09" />
                                        </defs>
                                        <clipPath id="SVGID_2">
                                            <use xlink:href="#SVGID_1" style="overflow:visible;" />
                                        </clipPath>
                                        <rect class="bg-stars [clip-path:url(#SVGID_2)] fill-gold-1" x="0.7" y="0.1"
                                            :width="calculateWidth(review.rating)" height="33.5" fill="#F6BB09" />
                                        <use xlink:href="#SVGID_1"
                                            style="overflow:visible;fill:none;stroke:#F6BB09;stroke-miterlimit:10;" />
                                    </g>
                                </svg>
                            </div>
                            <div class="text-wrapper">
                                <p class="italic text-sm">"{{ review.text }}"</p>
                            </div>
                        </swiper-slide>
                    </swiper-container>
                </ClientOnly>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';

    const placeId = 'ChIJjeg45POipBIRHLDX7exkFSs';
    // Cargar reseñas y calificaciones en el servidor usando useAsyncData
    const { data, error } = await useAsyncData(async () => {
        return await $fetch(`/api/get-google-reviews?placeId=${placeId}`);
    })

    const reviewsSlider = ref(null)
    const reviews = ref(data.value?.reviews || [])
    const averageRating = ref(data.value?.averageRating || null)
    const totalReviews = ref(data.value?.totalReviews || null)
    const hasError = ref(!!error)
    const errorMessage = ref(error ? 'Error en la solicitud de reseñas.' : '')

    useSwiper(reviewsSlider, {
        loop: true,
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next', // Clase del botón "Next"
            prevEl: '.swiper-button-prev', // Clase del botón "Prev"
        },
        pagination: {
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            '768': {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            '1280': {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });

    // Función para calcular el ancho basado en la valoración
    function calculateWidth(rating) {
        return `${(rating * 20) * 171.7 / 100}`;
    }
</script>



<style scoped>
    .fill-gold-1 {
        fill: #F6BB09;
    }

    .text-wrapper p {
        transition: max-height 1s ease;
    }

    .swiper {
        @apply list-none lg:px-6 pb-16 flex flex-col lg:flex-row gap-6 w-full lg:w-5/6;
    }

    .swiper-button-prev,
    .swiper-button-next {
        @apply bg-white text-black shadow-md rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition;
    }
</style>
