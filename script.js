document.addEventListener('DOMContentLoaded', () => {

    // Intersection Observer for Background Color Transitions
    const sections = document.querySelectorAll('.service-section');

    const observerOptions = {
        root: null,
        threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Determine which section is active and update body background or section styles
                // For now, we are keeping local backgrounds, but we could animate global bg here
                console.log(`Section active: ${entry.target.id}`);
                entry.target.style.opacity = 1;
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Infinite Scroll Logic: Duplicate items to create seamless loop
    // --- INTERACTIVE INFINITE CAROUSEL ---
    const tracks = document.querySelectorAll('.carousel-track');

    tracks.forEach(track => {
        // 1. Clone items for infinite loop (x4 to be safe for wide screens)
        const cards = Array.from(track.children);
        cards.forEach(card => track.appendChild(card.cloneNode(true)));
        cards.forEach(card => track.appendChild(card.cloneNode(true)));

        // 2. State
        let scrollPos = 0;
        let isDragging = false;
        let startX = 0;
        let animationID;
        let autoScrollSpeed = 0.5; // Pixels per frame
        const direction = 1; // 1 = moving left

        // 3. Events
        // Mouse
        track.addEventListener('mousedown', dragStart);
        track.addEventListener('mouseup', dragEnd);
        track.addEventListener('mouseleave', dragEnd);
        track.addEventListener('mousemove', dragMove);

        // Touch
        track.addEventListener('touchstart', dragStart);
        track.addEventListener('touchend', dragEnd);
        track.addEventListener('touchmove', dragMove);

        // Prevent context menu
        track.oncontextmenu = (e) => { e.preventDefault(); e.stopPropagation(); return false; };

        // Prevent default image drag
        const allCards = track.querySelectorAll('.card');
        allCards.forEach(c => c.addEventListener('dragstart', (e) => e.preventDefault()));

        // 4. Animation Loop
        function animate() {
            if (!isDragging) {
                scrollPos += autoScrollSpeed * direction;
            }
            checkInfiniteLoop();
            setSliderPosition();
            animationID = requestAnimationFrame(animate);
        }
        animationID = requestAnimationFrame(animate);

        function checkInfiniteLoop() {
            const totalWidth = track.scrollWidth;
            const oneSetWidth = totalWidth / 3;

            if (scrollPos >= oneSetWidth) {
                scrollPos = 0;
            } else if (scrollPos < 0) {
                scrollPos = oneSetWidth - 1;
            }
        }

        function setSliderPosition() {
            track.style.transform = `translateX(-${scrollPos}px)`;
        }

        function dragStart(event) {
            isDragging = true;
            const clientX = getPositionX(event);
            startX = clientX + scrollPos;
            track.style.cursor = 'grabbing';
            // We DON'T stop animation frame, we just stop incrementing scrollPos in loop
            // to keep the loop running for rendering
        }

        function dragEnd() {
            isDragging = false;
            track.style.cursor = 'grab';
        }

        function dragMove(event) {
            if (isDragging) {
                const clientX = getPositionX(event);
                scrollPos = startX - clientX;
            }
        }

        function getPositionX(event) {
            return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
        }
    });

    // --- VIDEO MODAL LOGIC ---
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('modal-video-container');
    const closeBtn = document.querySelector('.modal-close');
    const overlay = document.querySelector('.modal-overlay');

    // Attach click events to ALL cards (including cloned ones) via delegation
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (!card) return;

        // Check for Local Video OR YouTube ID
        const videoSrc = card.dataset.videoSrc;
        const videoId = card.dataset.videoId;

        if (videoSrc || videoId) {
            e.preventDefault();
            console.log('Card clicked!', videoSrc || videoId);
            openModal(videoSrc, videoId);
        }
    });

    function openModal(videoSrc, videoId) {
        console.log('Opening modal. Local:', videoSrc, 'YouTube:', videoId);

        container.innerHTML = ''; // Clear previous content

        if (videoSrc) {
            // Local Video Logic
            const videoTag = document.createElement('video');
            videoTag.src = videoSrc;
            videoTag.controls = true;

            // Force attributes for mobile (iOS/Android strict policies)
            videoTag.setAttribute('autoplay', 'true');
            videoTag.setAttribute('muted', 'true');
            videoTag.setAttribute('playsinline', 'true');

            // Sync properties
            videoTag.muted = true;
            videoTag.playsInline = true;
            videoTag.autoplay = true;

            videoTag.style.width = '100%';
            videoTag.style.height = '100%';
            videoTag.style.objectFit = 'contain';

            container.appendChild(videoTag);

            // Explicit play attempt
            try {
                videoTag.play().catch(e => console.log("Autoplay prevented:", e));
            } catch (err) {
                console.log("Play error:", err);
            }
            videoTag.playsInline = true; // REQUIRED for iOS inline playback
            videoTag.setAttribute('playsinline', ''); // Extra safety for HTML attr
            videoTag.style.width = '100%';
            videoTag.style.height = '100%';
            videoTag.style.objectFit = 'contain'; // Ensure we see the whole video
            container.appendChild(videoTag);
        } else if (videoId) {
            // YouTube Logic
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1`;
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.position = 'absolute';
            iframe.style.top = '0';
            iframe.style.left = '0';
            container.appendChild(iframe);
        }

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Prevent page scroll
    }

    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        container.innerHTML = ''; // Stop video by removing element
        document.body.style.overflow = ''; // Restore page scroll
    }



    // Close events
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
