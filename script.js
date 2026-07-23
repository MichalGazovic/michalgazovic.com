// =========================================
// CURATED GALLERY IMAGES (Tvoj top úzky výber)
// =========================================
const galleryPhotos = [
    {
        src: "images/foggy-peatland-sweden.webp",
        alt: "Boreal peatland in fog",
        layout: "featured"
    },
    {
        src: "images/belianky-blue-gold.webp",
        alt: "Belianske Tatry in winter blue hour",
        layout: "standard"
    },
    {
        src: "images/stojany-na-seno.webp",
        alt: "Hay racks in morning fog",
        layout: "vertical"
    },
    {
        src: "images/frost-trees-sky-open-blue.webp",
        alt: "Hoar frost landscape with blue sky",
        layout: "standard"
    },
    {
        src: "images/primeval-forest-log.webp",
        alt: "Spring in primeval forest",
        layout: "featured"
    },
    {
        src: "images/mesiac-dole-kopec.webp",
        alt: "Moon aboove alpenglow mountain ridge",
        layout: "vertical"
    },
    {
        src: "images/tatry-slnko-z-kk.webp",
        alt: "Sun breaking through clouds in dolina Bielej vody",
        layout: "standard"
    },
    {
        src: "images/glacier-harding-icefield-top.webp",
        alt: "Above the harding ice field glacier",
        layout: "featured"
    },
    {
        src: "images/corner-joint-study.webp",
        alt: "Corner joint study on old loghouse",
        layout: "vertical"
    },
    {
        src: "images/rainbow-brooks-range.webp",
        alt: "Rainbow in Brooks Range mountains",
        layout: "standard"
    },
    {
        src: "images/tatry-frost-birch.webp",
        alt: "Frozen birches with High Tatra in the background",
        layout: "standard"
    },
    {
        src: "images/willow-tree-fog.webp",
        alt: "Lone willow tree in fog",
        layout: "standard"
    },
    {
        src: "images/morning-denali-ridge.webp",
        alt: "Mt Denali sunrise study",
        layout: "vertical"
    },
    {
        src: "images/fog-layers-forest.webp",
        alt: "Forest disappearing in fog layers",
        layout: "standard"
    },
    {
        src: "images/noatak-canyon.webp",
        alt: "Noatak canyon in grey autumn",
        layout: "standard"
    },
    {
        src: "images/loghouse-tree-fog.webp",
        alt: "Log house with trees in foggy sunrise",
        layout: "vertical"
    }
    ,
    {
        src: "images/beech-fir-fog-tokaren.webp",
        alt: "Foggy forest fir beech autumn",
        layout: "standard"
    }
    ,
    {
        src: "images/vychod-slnka.webp",
        alt: "Sunrise in the mountain valley",
        layout: "standard"
    }
    ,
    {
        src: "images/stvrok-kostol-hory.webp",
        alt: "Church in Spissky Stvrtok with High Tatra mountains",
        layout: "vertical"
    }
    ,
    {
        src: "images/meadows-with-hay-racks.webp",
        alt: "Meadows in Zdiar with hay racks",
        layout: "standard"
    }
    ,
    {
        src: "images/mt-denali-with-tundra.webp",
        alt: "Mount Denali with tundra trees sunrise",
        layout: "standard"
    }
    ,
    {
        src: "images/vertical-landscape-water.webp",
        alt: "Mala studena valley in High Tatra",
        layout: "vertical"
    }
    ,
    {
        src: "images/morning-valley-from-mala-studena.webp",
        alt: "Morning valley from Mala stuena dolina",
        layout: "standard"
    }
    ,
    {
        src: "images/caribou-herd-silhouete.webp",
        alt: "Caribou herd on a mountain ridge",
        layout: "standard"
    }
    ,
    {
        src: "images/breza-gerlach-bw.webp",
        alt: "Gerlach with birch in BW",
        layout: "vertical"
    }
    ,
    {
        src: "images/alpen-glow-peaks-mimimal.webp",
        alt: "Minimalist morning shot of Belianske Tatry",
        layout: "standard"
    }
    ,
    {
        src: "images/anchor-point-low-tide-lakes.webp",
        alt: "Low tide at anchor point",
        layout: "standard"
    }
    ,
    {
        src: "images/log-house-fence-morning.webp",
        alt: "Loghous in Zdiar in the morning fog",
        layout: "standard"
    }
    ,
    {
        src: "images/havran-autumn.webp",
        alt: "Havran peak from Zdiarska vidla",
        layout: "standard"
    }
];

// =========================================
// INDEX / ARCHIVE IMAGES (Kompletný Contact Sheet)
// =========================================
const archivePhotos = [
    { src: "images/brooks-range-tonal-valley.webp", alt: "Brooks range valley tonal study" },
    { src: "images/fire.webp", alt: "Fire detail, charring logs" },
    { src: "images/blesky-vidly.webp", alt: "Lightning above Belinakse Tatry" },
    { src: "images/breza-gerlach-bw.webp", alt: "BW birch tree with mountains in fog" },
    { src: "images/above-bergen.webp", alt: "Autumn tundra above Bergen" },
    { src: "images/bucegi.webp", alt: "Bucegi mountain valley" },
    { src: "images/aurora-umealven.webp", alt: "Aurora borealis above bridge in Umea " },
    { src: "images/lock-old-wood.webp", alt: "Old lock on old wood" },
    { src: "images/nancy-lake-evening-reflexion.webp", alt: "Nancy lake sunset" },
    { src: "images/morning-denali-ridge.webp", alt: "Mt Denali morning study" },
    { src: "images/luka-zdiar.webp", alt: "Green meadow after a thunderstorm" },
    { src: "images/snow-firewood.webp", alt: "Winter rustic firewood shed" },
    { src: "images/road-to-sunshine.webp", alt: "Road leading into fog" },
    { src: "images/Richardson-highway.webp", alt: "Richardswon highway" },
    { src: "images/siroke-sedlo-morning.webp", alt: "View at Zdiar and Zamagurie from Siroke sedlo" },
    { src: "images/rain-in-brooks-range.webp", alt: "Rain in Brooks Range" },
    { src: "images/russian-lake-fog-submerged-logs.webp", alt: "Foggy morning at Russian lake" },
    { src: "images/corner-joint-study.webp", alt: "Log house corner joint" },
    { src: "images/morning-valley-from-mala-studena.webp", alt: "Foggy moring from the mountain valley" },
    { src: "images/poppy-field.webp", alt: "Poppy field" },
    { src: "images/moon-in-siroke-sedlo.webp", alt: "Moon in Siroke sedlo" },
    { src: "images/loghouse-tree-fog.webp", alt: "Loghouse in foggy sunrise" },
    { src: "images/vindelnalven-sunset.webp", alt: "Sunset at the banks of Vindelnalven" },
    { src: "images/wind-tree-study.webp", alt: "Wind tree minimalist study" },
    { src: "images/kino-wood-pile.webp", alt: "Old kino builing in Zdiar" },
    { src: "images/matanuska-glacier-valley.webp", alt: "Matansuka glacier and massive peaks" },
    { src: "images/hay-harvest-landscape-bw.webp", alt: "MOuntain landscape after hay harwest" },
    { src: "images/vidly-a-tokaren.webp", alt: "Zdiarska vidla and Havran autumn" },
    { src: "images/zadne-medodoly.webp", alt: "Zadne medodoly valley" },
    { src: "images/woloszyn-koszista.webp", alt: "Woloszyn and Koszysta" },
    { src: "images/vertical-landscape-water.webp", alt: "Mala studena valley in rain" },
    { src: "images/willow-tree-fog.webp", alt: "Willow tree in foggy sunrise" },
    { src: "images/vychod-slnka.webp", alt: "Sunrise in Belianske Tatry" },
    { src: "images/ust-pojeg-peatland.webp", alt: "Early morning at the boreal peatland" },
    { src: "images/tatry-frost-birch.webp", alt: "Frosty birches and monutains" },
    { src: "images/stojany-na-seno.webp", alt: "Hay racks with little birds" },
    { src: "images/sunlight-stored.webp", alt: "Wood study firewood and planks" },
    { src: "images/alaska-snow-dust-mountains.webp", alt: "Alaska snow mountains" },
    { src: "images/sunrise-tree-silhouets.webp", alt: "Sunrise tree silhouetes" },
    { src: "images/snow-tree-study.webp", alt: "Zadne Medodoly snow tree study" },
    { src: "images/russian-lake-fog-trees.webp", alt: "Russian lake tree glow" },
    { src: "images/rainbow-brooks-range.webp", alt: "Rainbow in Brooks Range" },
    { src: "images/primeval-forest-log.webp", alt: "Spring in primeval forest" },
    { src: "images/polychrome-mountain.webp", alt: "Polychrome mountain" },
    { src: "images/mesiac-dole-kopec.webp", alt: "Moon above monutain ridge" },
    { src: "images/mt-denali-with-tundra.webp", alt: "Mt Denali with tundra forest" },
    { src: "images/meadows-with-hay-racks.webp", alt: "Meadows with hay racks" },
    { src: "images/loghouse-settlement.webp", alt: "Loghouse settlement" },
    { src: "images/log-house-fence-morning.webp", alt: "Fenced loghouse in fog" },
    { src: "images/havran-autumn.webp", alt: "Havran autumn" },
    { src: "images/glacier-ice-study.webp", alt: "Glacier ice study" },
    { src: "images/foggy-peatland-sweden.webp", alt: "Degero Stormyr peatland in fog" },
    { src: "images/frost-reeds.webp", alt: "Frosty reeds" },
    { src: "images/belianky-noc-dedina.webp", alt: "Zdiar at night" },
    { src: "images/foggy-moon-hill.webp", alt: "Foggy moon above hill" },
    { src: "images/caribou-herd-silhouete.webp", alt: "Caribou herd on a ridge" },
    { src: "images/belianky-blue-gold.webp", alt: "Belianske tatry blue hour" },
    { src: "images/beech-tree-in-fog.webp", alt: "Beech tree in fog" },
    { src: "images/beech-fir-fog-tokaren.webp", alt: "Beech-fir forest in clouds" },
    { src: "images/eldena-forest.webp", alt: "Eldena forest spring flooding" },
        

];

// Spustíme vykresľovanie okamžite, ako prehliadač spracuje tento súbor
(function() {
    // Použijeme flexibilnejšie hľadanie elementov, aby sme predišli chybám
    const gallery = document.querySelector("#gallery-section") || document.querySelector(".gallery");
    const masonryGrid = document.querySelector("#masonry-grid") || document.querySelector(".masonry-grid");

    // 1. Vykreslenie hlavnej galérie
    if (gallery) {
        gallery.innerHTML = ""; // Vyčistíme staré alt texty
        galleryPhotos.forEach((photo) => {
            const wrapper = document.createElement("div");
            wrapper.className = `gallery-item ${photo.layout || 'standard'} fade-element`;

            const img = document.createElement("img");
            img.src = photo.src;
            img.alt = photo.alt;
            img.loading = "lazy";

            wrapper.appendChild(img);
            gallery.appendChild(wrapper);
        });
    }

    // 2. Vykreslenie Contact Sheetu
    if (masonryGrid) {
        masonryGrid.innerHTML = ""; // Vyčistíme staré alt texty
        archivePhotos.forEach((photo, index) => {
            const wrapper = document.createElement("div");
            wrapper.className = "archive-item fade-element";

            const img = document.createElement("img");
            img.src = photo.src;
            img.alt = photo.alt;
            img.decoding = "async";
            img.loading = index === 0 ? "eager" : "lazy";

            wrapper.appendChild(img);
            masonryGrid.appendChild(wrapper);
        });
    }

    // 3. Bezpečné nastavenie Lightboxu (Zabráni pádu celej stránky)
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
                
                lightboxImage.src = e.target.src;
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
            lightboxImage.src = currentPhotosGroup[index].src;
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

    // 4. Intersection Observer pre postupné zobrazovanie fotiek
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });

    // Sledujeme novo vytvorené elementy
    setTimeout(() => {
        document.querySelectorAll(".fade-element").forEach(el => observer.observe(el));
    }, 100);

    console.log("Záchranný skript úspešne spustený. Fotky by mali byť viditeľné.");
})();
