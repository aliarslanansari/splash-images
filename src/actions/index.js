import { STATS, IMAGES } from '../constants';
const loadImages = () => ({ type: IMAGES.LOAD });
const setImages = images => ({
    type: IMAGES.LOAD_SUCCESS,
    images,
});
const setError = error => ({
    type: IMAGES.LOAD_FAIL,
    error,
});

const loadImageStats = id => ({
    type: STATS.LOAD,
    id,
});
const setImageStats = (id, downloads) => ({
    type: STATS.LOAD_SUCCESS,
    id,
    downloads,
});
const setImageStatsError = error => ({
    type: STATS.LOAD_FAIL,
    error,
});

export {
    loadImages,
    setImages,
    setError,
    loadImageStats,
    setImageStats,
    setImageStatsError,
};
