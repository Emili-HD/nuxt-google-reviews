<template>
    <div class="reviews-title">
        Reseñas de nuestros clientes
    </div>
    <GoogleReviews />
</template>

<script setup>
    import GoogleReviews from '~/components/GoogleReviews.vue'
</script>

<style scoped>
    .reviews-title {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 3rem;
        padding: 2rem;
    }
</style>
