// =========================================
// CURATED GALLERY IMAGES
// =========================================
const galleryPhotos = [
    { src: "images/foggy-peatland-sweden.webp", alt: "Boreal peatland in fog", layout: "featured" },
    { src: "images/belianky-blue-gold.webp", alt: "Belianske Tatry in winter blue hour", layout: "standard" },
    { src: "images/stojany-na-seno.webp", alt: "Hay racks in morning fog", layout: "vertical" },
    { src: "images/frost-trees-sky-open-blue.webp", alt: "Hoar frost landscape with blue sky", layout: "standard" },
    { src: "images/primeval-forest-log.webp", alt: "Spring in primeval forest", layout: "featured" },
    { src: "images/mesiac-dole-kopec.webp", alt: "Moon aboove alpenglow mountain ridge", layout: "vertical" },
    { src: "images/tatry-slnko-z-kk.webp", alt: "Sun breaking through clouds in dolina Bielej vody", layout: "standard" },
    { src: "images/glacier-harding-icefield-top.webp", alt: "Above the harding ice field glacier", layout: "featured" },
    { src: "images/corner-joint-study.webp", alt: "Corner joint study on old loghouse", layout: "vertical" },
    { src: "images/rainbow-brooks-range.webp", alt: "Rainbow in Brooks Range mountains", layout: "standard" },
    { src: "images/tatry-frost-birch.webp", alt: "Frozen birches with High Tatra in the background", layout: "standard" },
    { src: "images/willow-tree-fog.webp", alt: "Lone willow tree in fog", layout: "standard" },
    { src: "images/morning-denali-ridge.webp", alt: "Mt Denali sunrise study", layout: "vertical" },
    { src: "images/fog-layers-forest.webp", alt: "Forest disappearing in fog layers", layout: "standard" },
    { src: "images/noatak-canyon.webp", alt: "Noatak canyon in grey autumn", layout: "standard" },
    { src: "images/loghouse-tree-fog.webp", alt: "Log house with trees in foggy sunrise", layout: "vertical" },
    { src: "images/beech-fir-fog-tokaren.webp", alt: "Foggy forest fir beech autumn", layout: "standard" },
    { src: "images/vychod-slnka.webp", alt: "Sunrise in the mountain valley", layout: "standard" },
    { src: "images/stvrok-kostol-hory.webp", alt: "Church in Spissky Stvrtok with High Tatra mountains", layout: "vertical" },
    { src: "images/meadows-with-hay-racks.webp", alt: "Meadows in Zdiar with hay racks", layout: "standard" },
    { src: "images/mt-denali-with-tundra.webp", alt: "Mount Denali with tundra trees sunrise", layout: "standard" },
    { src: "images/vertical-landscape-water.webp", alt: "Mala studena valley in High Tatra", layout: "vertical" },
    { src: "images/morning-valley-from-mala-studena.webp", alt: "Morning valley from Mala stuena dolina", layout: "standard" },
    { src: "images/caribou-herd-silhouete.webp", alt: "Caribou herd on a mountain ridge", layout: "standard" },
    { src: "images/breza-gerlach-bw.webp", alt: "Gerlach with birch in BW", layout: "vertical" },
    { src: "images/alpen-glow-peaks-mimimal.webp", alt: "Minimalist morning shot of Belianske Tatry", layout: "standard" },
    { src: "images/anchor-point-low-tide-lakes.webp", alt: "Low tide at anchor point", layout: "standard" },
    { src: "images/log-house-fence-morning.webp", alt: "Loghous in Zdiar in the morning fog", layout: "standard" },
    { src: "images/havran-autumn.webp", alt: "Havran peak from Zdiarska vidla", layout: "standard" }
];

// =========================================
// INDEX / ARCHIVE IMAGES (With full resolution lightbox links)
// =========================================
const archivePhotos = [
    { src: "images/thumbs/brooks-range-tonal-valley.webp", full: "images/brooks-range-tonal-valley.webp", alt: "Brooks range valley tonal study" },
    { src: "images/thumbs/fire.webp", full: "images/fire.webp", alt: "Fire detail, charring logs" },
    { src: "images/thumbs/blesky-vidly.webp", full: "images/blesky-vidly.webp", alt: "Lightning above Belinakse Tatry" },
    { src: "images/thumbs/breza-gerlach-bw.webp", full: "images/breza-gerlach-bw.webp", alt: "BW birch tree with mountains in fog" },
    { src: "images/thumbs/above-bergen.webp", full: "images/above-bergen.webp", alt: "Autumn tundra above Bergen" },
    { src: "images/thumbs/bucegi.webp", full: "images/bucegi.webp", alt: "Bucegi mountain valley" },
    { src: "images/thumbs/aurora-umealven.webp", full: "images/aurora-umealven.webp", alt: "Aurora borealis above bridge in Umea " },
    { src: "images/thumbs/lock-old-wood.webp", full: "images/lock-old-wood.webp", alt: "Old lock on old wood" },
    { src: "images/thumbs/nancy-lake-evening-reflexion.webp", full: "images/nancy-lake-evening-reflexion.webp", alt: "Nancy lake sunset" },
    { src: "images/thumbs/morning-denali-ridge.webp", full: "images/morning-denali-ridge.webp", alt: "Mt Denali morning study" },
    { src: "images/thumbs/luka-zdiar.webp", full: "images/luka-zdiar.webp", alt: "Green meadow after a thunderstorm" },
    { src: "images/thumbs/snow-firewood.webp", full: "images/snow-firewood.webp", alt: "Winter rustic firewood shed" },
    { src: "images/thumbs/road-to-sunshine.webp", full: "images/road-to-sunshine.webp", alt: "Road leading into fog" },
    { src: "images/thumbs/Richardson-highway.webp", full: "images/Richardson-highway.webp", alt: "Richardswon highway" },
    { src: "images/thumbs/siroke-sedlo-morning.webp", full: "images/siroke-sedlo-morning.webp", alt: "View at Zdiar and Zamagurie from Siroke sedlo" },
    { src: "images/thumbs/rain-in-brooks-range.webp", full: "images/rain-in-brooks-range.webp", alt: "Rain in Brooks Range" },
    { src: "images/thumbs/russian-lake-fog-submerged-logs.webp", full: "images/russian-lake-fog-submerged-logs.webp", alt: "Foggy morning at Russian lake" },
    { src: "images/thumbs/corner-joint-study.webp", full: "images/corner-joint-study.webp", alt: "Log house corner joint" },
    { src: "images/thumbs/morning-valley-from-mala-studena.webp", full: "images/morning-valley-from-mala-studena.webp", alt: "Foggy moring from the mountain valley" },
    { src: "images/thumbs/poppy-field.webp", full: "images/poppy-field.webp", alt: "Poppy field" },
    { src: "images/thumbs/moon-in-siroke-sedlo.webp", full: "images/moon-in-siroke-sedlo.webp", alt: "Moon in Siroke sedlo" },
    { src: "images/thumbs/loghouse-tree-fog.webp", full: "images/loghouse-tree-fog.webp", alt: "Loghouse in foggy sunrise" },
    { src: "images/thumbs/vindelnalven-sunset.webp", full: "images/vindelnalven-sunset.webp", alt: "Sunset at the banks of Vindelnalven" },
    { src: "images/thumbs/wind-tree-study.webp", full: "images/wind-tree-study.webp", alt: "Wind tree minimalist study" },
    { src: "images/thumbs/kino-wood-pile.webp", full: "images/kino-wood-pile.webp", alt: "Old kino builing in Zdiar" },
    { src: "images/thumbs/matanuska-glacier-valley.webp", full: "images/matanuska-glacier-valley.webp", alt: "Matansuka glacier and massive peaks" },
    { src: "images/thumbs/hay-harvest-landscape-bw.webp", full: "images/hay-harvest-landscape-bw.webp", alt: "MOuntain landscape after hay harwest" },
    { src: "images/thumbs/vidly-a-tokaren.webp", full: "images/vidly-a-tokaren.webp", alt: "Zdiarska vidla and Havran autumn" },
    { src: "images/thumbs/zadne-medodoly.webp", full: "images/zadne-medodoly.webp", alt: "Zadne medodoly valley" },
    { src: "images/thumbs/woloszyn-koszista.webp", full: "images/woloszyn-koszista.webp", alt: "Woloszyn and Koszysta" },
    { src: "images/thumbs/vertical-landscape-water.webp", full: "images/vertical-landscape-water.webp", alt: "Mala studena valley in rain" },
    { src: "images/thumbs/willow-tree-fog.webp", full: "images/willow-tree-fog.webp", alt: "Willow tree in foggy sunrise" },
    { src: "images/thumbs/vychod-slnka.webp", full: "images/vychod-slnka.webp", alt: "Sunrise in Belianske Tatry" },
    { src: "images/thumbs/ust-pojeg-peatland.webp", full: "images/ust-pojeg-peatland.webp", alt: "Early morning at the boreal peatland" },
    { src: "images/thumbs/tatry-frost-birch.webp", full: "images/tatry-frost-birch.webp", alt: "Frosty birches and monutains" },
    { src: "images/thumbs/stojany-na-seno.webp", full: "images/stojany-na-seno.webp", alt: "Hay racks with little birds" },
    { src: "images/thumbs/sunlight-stored.webp", full: "images/sunlight-stored.webp", alt: "Wood study firewood and planks" },
    { src: "images/thumbs/alaska-snow-dust-mountains.webp", full: "images/alaska-snow-dust-mountains.webp", alt: "Alaska snow mountains" },
    { src: "images/thumbs/sunrise-tree-silhouets.webp", full: "images/sunrise-tree-silhouets.webp", alt: "Sunrise tree silhouetes" },
    { src: "images/thumbs/snow-tree-study.webp", full: "images/snow-tree-study.webp", alt: "Zadne Medodoly snow tree study" },
    { src: "images/thumbs/russian-lake-fog-trees.webp", full: "images/russian-lake-fog-trees.webp", alt: "Russian lake tree glow" },
    { src: "images/thumbs/rainbow-brooks-range.webp", full: "images/rainbow-brooks-range.webp", alt: "Rainbow in Brooks Range" },
    { src: "images/thumbs/primeval-forest-log.webp", full: "images/primeval-forest-log.webp", alt: "Spring in primeval forest" },
    { src: "images/thumbs/polychrome-mountain.webp", full: "images/polychrome-mountain.webp", alt: "Polychrome mountain" },
    { src: "images/thumbs/mesiac-dole-kopec.webp", full: "images/mesiac-dole-kopec.webp", alt: "Moon above monutain ridge" },
    { src: "images/thumbs/mt-denali-with-tundra.webp", full: "images/mt-denali-with-tundra.webp", alt: "Mt Denali with tundra forest" },
    { src: "images/thumbs/meadows-with-hay-racks.webp", full: "images/meadows-with-hay-racks.webp", alt: "Meadows with hay racks" },
    { src: "images/thumbs/loghouse-settlement.webp", full: "images/loghouse-settlement.webp", alt: "Loghouse settlement" },
    { src: "images/thumbs/log-house-fence-morning.webp", full: "images/log-house-fence-morning.webp", alt: "Fenced loghouse in fog" },
    { src: "images/thumbs/havran-autumn.webp", full: "images/havran-autumn.webp", alt: "Havran autumn" },
    { src: "images/thumbs/glacier-ice-study.webp", full: "images/glacier-ice-study.webp", alt: "Glacier ice study" },
    { src: "images/thumbs/foggy-peatland-sweden.webp", full: "images/foggy-peatland-sweden.webp", alt: "Degero Stormyr peatland in fog" },
    { src: "images/thumbs/frost-reeds.webp", full: "images/frost-reeds.webp", alt: "Frosty reeds" },
    { src: "images/thumbs/belianky-noc-dedina.webp", full: "images/belianky-noc-dedina.webp", alt: "Zdiar at night" },
    { src: "images/thumbs/foggy-moon-hill.webp", full: "images/foggy-moon-hill.webp", alt: "Foggy moon above hill" },
    { src: "images/thumbs/caribou-herd-silhouete.webp", full: "images/caribou-herd-silhouete.webp", alt: "Caribou herd on a ridge" },
    { src: "images/thumbs/belianky-blue-gold.webp", full: "images/belianky-blue-gold.webp", alt: "Belianske tatry blue hour" },
    { src: "images/thumbs/beech-tree-in-fog.webp", full: "images/beech-tree-in-fog.webp", alt: "Beech tree in fog" },
    { src: "images/thumbs/beech-fir-fog-tokaren.webp", full: "images/beech-fir-fog-tokaren.webp", alt: "Beech-fir forest in clouds" },
    { src: "images/thumbs/eldena-forest.webp", full: "images/eldena-forest.webp", alt: "Eldena forest spring flooding" }
];

(function() {
    const gallery = document.querySelector("#gallery-section") || document.querySelector(".gallery");
    const masonryGrid = document.querySelector("#masonry-grid") || document.querySelector(".masonry-grid");

    // 1. Render Main Gallery
    if (gallery) {
        gallery.innerHTML = ""; 
        galleryPhotos.forEach((photo, index) => {
            const wrapper = document.createElement("div");
            wrapper.className = `gallery-item ${photo.layout || 'standard'} fade-element`;

            const img = document.createElement("img");
            img.src = photo.src;
            img.dataset.full = photo.full || photo.src; 
            img.alt = photo.alt;
            img.loading = index < 2 ? "eager" : "lazy"; 

            wrapper.appendChild(img);
            gallery.appendChild(wrapper);
        });
    }

    // 2. Render Contact Sheet
if (masonryGrid) {
    masonryGrid.innerHTML = ""; 
    archivePhotos.forEach((photo) => {
        const wrapper = document.createElement("div");
        wrapper.className = "archive-item fade-element";

        const img = document.createElement("img");
        
        img.onerror = function() {
            this.onerror = null;
            this.src = photo.full;
        };

        img.src = photo.src;
        img.dataset.full = photo.full || photo.src; 
        img.alt = photo.alt;
        img.decoding = "async";
        
        // LAZY LOAD EVERYTHING IN ARCHIVE GRID
        img.loading = "lazy"; 

        wrapper.appendChild(img);
        masonryGrid.appendChild(wrapper);
    });
}

    // 3. Lightbox Logic
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    let currentPhotosGroup = [];
    let currentIndex = 0;

    function setupLightboxForGroup(container) {
        if (!container || !lightbox || !lightboxImage) return;
        
        container.addEventListener("click", (e) => {
            if (e.target.tagName === "IMG") {
                const images = Array.from(container.querySelectorAll("img"));
                currentPhotosGroup = images;
                currentIndex = images.indexOf(e.target);
                
                lightboxImage.src = e.target.dataset.full || e.target.src;
                lightbox.style.display = "flex";
                document.body.style.overflow = "hidden";

                requestAnimationFrame(() => {
                    lightbox.classList.add("active");
                });
            }
        });
    }

    if (gallery) setupLightboxForGroup(gallery);
    if (masonryGrid) setupLightboxForGroup(masonryGrid);

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove("active");
        setTimeout(() => {
            lightbox.style.display = "none";
            document.body.style.overflow = "auto";
        }, 250);
    }

    function updateLightboxImage(index) {
        if (!lightboxImage || currentPhotosGroup.length === 0) return;
        lightboxImage.style.opacity = "0";
        setTimeout(() => {
            const target = currentPhotosGroup[index];
            lightboxImage.src = target.dataset.full || target.src;
            lightboxImage.onload = () => { lightboxImage.style.opacity = "1"; };
        }, 150);
    }

    if (lightbox) {
        lightbox.addEventListener("click", closeLightbox);
        if (lightboxImage) {
            lightboxImage.addEventListener("click", e => e.stopPropagation());
        }
    }

    document.addEventListener("keydown", event => {
        if (lightbox && lightbox.style.display === "flex") {
            if (event.key === "Escape") closeLightbox();
            if (event.key === "ArrowRight") {
                currentIndex = (currentIndex + 1) >= currentPhotosGroup.length ? 0 : currentIndex + 1;
                updateLightboxImage(currentIndex);
            }
            if (event.key === "ArrowLeft") {
                currentIndex = (currentIndex - 1) < 0 ? currentPhotosGroup.length - 1 : currentIndex - 1;
                updateLightboxImage(currentIndex);
            }
        }
    });

    // 4. Intersection Observer (Runs immediately without delay)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { 
    threshold: 0.01,
    rootMargin: "200px 0px" // Starts fading in 200px BEFORE the user scrolls to it
});

// Observe right after items are appended
document.querySelectorAll(".fade-element").forEach(el => observer.observe(el));

})();
