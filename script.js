// =========================================
// CURATED GALLERY IMAGES (Tvoj top úzky výber)
// =========================================
const galleryPhotos = [
    {
        src: "images/P8248611_01.jpg",
        alt: "Alaska river landscape",
        layout: "featured"
    },
    {
        src: "images/P8258673.jpg",
        alt: "S-curve river bend",
        layout: "vertical"
    },
    {
        src: "images/tatry 200920090906_262_04.jpg",
        alt: "Autumn tundra and mountains",
        layout: "standard"
    }
];

// =========================================
// INDEX / ARCHIVE IMAGES (Kompletný Contact Sheet)
// =========================================
const archivePhotos = [
    { src: "images/P8248611_01.jpg", alt: "Alaska river landscape" },
    { src: "images/P8258673.jpg", alt: "S-curve river bend" },
    { src: "images/tatry 200920090906_262_04.jpg", alt: "Autumn tundra and mountains" },
    { src: "images/tatry 200920090907_353090709_180657_01.jpg", alt: "Mountain peak detail" },
    { src: "images/tatry 200920090911_605.jpg", alt: "Lake sunset reflection" },
    { src: "images/tatry 200920090914_761_01.jpg", alt: "Glacier panoramic view" },
    { src: "images/tatry 200920090917_181.jpg", alt: "Coastline dramatic sky" },
    { src: "images/tatry 200920090918_244.jpg", alt: "Tundra pond overcast" },
    { src: "images/tatry 200920090920_318.jpg", alt: "Mist over lake morning" },
    { src: "images/tatry 200920090922_438.jpg", alt: "Glacier and massive peaks" }
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