// src/scripts/lightgallery-init.js
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export function initGallery() {
    const container = document.getElementById('lightgallery');
    if (!container) return;

    lightGallery(container, {
        plugins: [lgThumbnail, lgZoom],
        licenseKey: 'D133625B-834A-4068-B9CA-0FE7C6663E90', // or remove if none
        speed: 500,
    });
}