import { getQuery } from 'h3';

export default defineEventHandler(async (event) => {
    const { placeId } = getQuery(event);

    if (!placeId) {
        return { error: 'El placeId es requerido.' };
    }

    // Accede a la API Key directamente desde config.public
    const config = useRuntimeConfig();
    const apiKey = config.public.googleMapsApiKey;

    console.log('Clave API Usada:', apiKey); // Debugging

    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&language=es&key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data?.result?.reviews && data.result.reviews.length > 0) {
            const filteredReviews = data.result.reviews
                .filter((review) => review.rating >= 1)
                .slice(-100);

            return {
                averageRating: data.result.rating,
                totalReviews: data.result.user_ratings_total,
                reviews: filteredReviews,
            };
        } else {
            return { error: 'No se encontraron reseñas.' };
        }
    } catch (err) {
        console.error('Error al llamar a la API de Google Places:', err);
        return { error: 'Error al obtener las reseñas' };
    }
});
