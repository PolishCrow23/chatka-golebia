// src/scripts/lightgallery-init.js
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { LIGHTGALLERY_KEY } from '$env/static/public';

export function initGallery() {
    const container = document.getElementById('lightgallery');
    if (!container) return;

    lightGallery(container, {
        plugins: [lgThumbnail, lgZoom],
        licenseKey: LIGHTGALLERY_KEY,
        speed: 500,
    });
}