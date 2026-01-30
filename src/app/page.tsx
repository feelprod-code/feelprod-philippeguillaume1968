"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { InfiniteCarousel } from "@/components/InfiniteCarousel";
import VideoModal from "@/components/VideoModal";
import Reveal from "@/components/Reveal";

export default function Home() {
    const [modalState, setModalState] = useState<{ src?: string; id?: string; isOpen: boolean }>({
        isOpen: false,
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOpenModal = (src?: string, id?: string) => {
        setModalState({ src, id, isOpen: true });
    };

    const handleCloseModal = () => {
        setModalState((prev) => ({ ...prev, isOpen: false }));
    };

    // Parallax Logic
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Simple parallax for backgrounds
    // We will map scroll 0-1 to translate Y slightly
    // Note: Since we have multiple sections, strictly binding one useScroll to the whole page is simple but effective for a continuous effect if applied relatively.
    // Ideally each section should have its own ref, but for simplicity let's use a Reveal wrapper for text and basic CSS/Motion for backgrounds.

    return (
        <main ref={containerRef} className="bg-white">
            {/* Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="global-nav"
            >
                <div className="nav-content">
                    <span className="nav-title">FEELPROD</span>
                </div>

                {/* Hamburger Button */}
                <button
                    className="hamburger-button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                >
                    <span className={`hamburger-bar ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
                    <span className={`hamburger-bar ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`hamburger-bar ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                    <a href="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>ACCUEIL</a>
                    <a href="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>À PROPOS</a>
                    <a href="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <section className="hero-section overflow-hidden" id="hero">
                <motion.div
                    className="video-background"
                    style={{ y: useTransform(scrollYProgress, [0, 0.2], ["0%", "20%"]) }} // Parallax down
                >
                    <video autoPlay muted loop playsInline>
                        <source src="/assets/videos/hero.mp4" type="video/mp4" />
                    </video>
                </motion.div>

                <div className="hero-content relative z-10">
                    <Reveal delay={0.2}>
                        <h1>FEELPROD</h1>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="subhead">Créateur d&#39;émotions visuelles. Capturer l&#39;instant, sublimer le mouvement.</p>
                    </Reveal>
                </div>
                <div className="hero-overlay"></div>
            </section>

            {/* Spectacle Section */}
            <SectionWithParallax id="souvenirs" theme="theme-tv">
                <div className="section-header" style={{ "--comic-color": "#FF9F1C" } as React.CSSProperties}>
                    <Reveal>
                        <a href="#" className="comic-link">
                            <h2 className="service-logo">Souvenirs</h2>
                        </a>
                        <p className="service-tagline">Des moments inoubliables.</p>
                    </Reveal>
                </div>
                <Reveal delay={0.2}>
                    <InfiniteCarousel
                        onOpen={handleOpenModal}
                        items={[
                            { videoId: "Pfj2jnbRwfw", image: "/assets/images/1.jpg", alt: "Souvenirs" },
                            { videoId: "Co8j8n_g_6Q", image: "/assets/images/2.jpg", alt: "Souvenirs" },
                            { videoId: "Co8j8n_g_6Q", image: "/assets/images/3.jpg", alt: "Souvenirs" },
                            { videoId: "iCkE_gYsLXo", image: "/assets/images/4.jpg", alt: "Souvenirs" },
                            { videoId: "Co8j8n_g_6Q", image: "/assets/images/5.jpg", alt: "Souvenirs" },
                        ]}
                    />
                </Reveal>
            </SectionWithParallax>

            {/* Sport Section */}
            <SectionWithParallax id="adrenaline" theme="theme-music" zoomVideo>
                <div className="section-header" style={{ "--comic-color": "#F7E733" } as React.CSSProperties}>
                    <Reveal>
                        <a href="#" className="comic-link">
                            <h2 className="service-logo">Adrénaline</h2>
                        </a>
                        <p className="service-tagline">L&#39;action à l&#39;état pur.</p>
                    </Reveal>
                </div>
                <Reveal delay={0.2}>
                    <InfiniteCarousel
                        onOpen={handleOpenModal}
                        items={[
                            { videoId: "CyRH585e4yY", image: "/assets/images/6.jpg", alt: "Adrénaline" },
                            { videoId: "CyRH585e4yY", image: "/assets/images/7.jpg", alt: "Adrénaline" },
                            { videoId: "CyRH585e4yY", image: "/assets/images/8.jpg", alt: "Adrénaline" },
                            { videoId: "CyRH585e4yY", image: "/assets/images/9.jpg", alt: "Adrénaline" },
                            { videoId: "CyRH585e4yY", image: "/assets/images/10.jpg", alt: "Adrénaline" },
                        ]}
                    />
                </Reveal>
            </SectionWithParallax>

            {/* Divers Section */}
            <SectionWithParallax id="evasion" theme="theme-arcade" className="pb-2 md:pb-24">
                <div className="section-header" style={{ "--comic-color": "#4CC9F0" } as React.CSSProperties}>
                    <Reveal>
                        <a href="#" className="comic-link">
                            <h2 className="service-logo">Évasion</h2>
                        </a>
                        <p className="service-tagline">Explorer de nouveaux horizons.</p>
                    </Reveal>
                </div>
                <Reveal delay={0.2}>
                    <InfiniteCarousel
                        onOpen={handleOpenModal}
                        items={[
                            { videoId: "WELgM9kD69A", image: "/assets/images/11.jpg", alt: "Game" },
                            { videoId: "Iy4iQNKMJFQ", image: "/assets/images/12.jpg", alt: "Game" },
                            { videoId: "Iy4iQNKMJFQ", image: "/assets/images/13.jpg", alt: "Game" },
                            { videoId: "Iy4iQNKMJFQ", image: "/assets/images/14.jpg", alt: "Game" },
                            { videoId: "Iy4iQNKMJFQ", image: "/assets/images/15.jpg", alt: "Game" },
                        ]}
                    />
                </Reveal>
            </SectionWithParallax>

            {/* Podcast Section */}
            {/* Podcast Section */}
            <section className="py-0 md:py-12 overflow-hidden bg-white -mt-4 relative z-10">
                <div className="section-header px-[5%] mb-4 md:mb-12" style={{ "--comic-color": "#4CAF50" } as React.CSSProperties}>
                    <Reveal>
                        <a href="#" className="comic-link">
                            <h2 className="service-logo" style={{ fontSize: '60px' }}>
                                PODCASTS
                            </h2>
                        </a>
                        <p className="service-tagline text-gray-500">La santé autrement...</p>
                    </Reveal>
                </div>
                <Reveal delay={0.2}>
                    <InfiniteCarousel
                        variant="square"
                        items={[
                            { link: "https://podcast.ausha.co/techniques-douces-tissulaires/0-presentation-du-podcast", image: "/assets/images/tdt1.png", alt: "Présentation du podcast" },
                            { link: "https://podcast.ausha.co/techniques-douces-tissulaires/1-l-homeostasie", image: "/assets/images/TDT2.png", alt: "L'Homéostasie" },
                            { link: "https://podcast.ausha.co/techniques-douces-tissulaires/2-le-mouvement-involontaire", image: "/assets/images/TDT3.png", alt: "Le Mouvement Involontaire" },
                            { link: "https://podcast.ausha.co/techniques-douces-tissulaires/3-les-limites-de-l-homeostasie", image: "/assets/images/TDT4.png", alt: "Les Limites de l'Homéostasie" },
                            { link: "https://podcast.ausha.co/techniques-douces-tissulaires/4-le-chemin-du-toucher-connaissant-1-l-osteopathie-biodynamique-avec-pascal-anselin", image: "/assets/images/BIODY.png", alt: "Le chemin du toucher connaissant - Pascal Anselin" },
                            { link: "https://podcast.ausha.co/techniques-douces-tissulaires/presentation-de-la-biokinergie-m-entretien-avec-michel-lidoreau", image: "/assets/images/BIOKI.png", alt: "Présentation de la Biokinergie" },
                            { link: "https://podcast.ausha.co/techniques-douces-tissulaires/6-approche-du-non-resolu-en-osteopathie-biodynamique-avec-pascal-anselin", image: "/assets/images/non resolu.png", alt: "Approche du non-résolu - Pascal Anselin" },
                            { link: "https://podcast.ausha.co/techniques-douces-tissulaires/7-l-harmonisation-psychocorporelle-en-biokinergie-avec-michel-lidoreau", image: "/assets/images/HPC.png", alt: "L'Harmonisation Psychocorporelle - Michel Lidoreau" },
                            { link: "https://podcast.ausha.co/techniques-douces-tissulaires/l-embryologie-biodynamique-la-ou-tout-commence-marc-damoiseaux", image: "/assets/images/EMBRYO.png", alt: "L'Embryologie Biodynamique - Marc Damoiseaux" },
                        ]}
                    />
                </Reveal>
            </section>

            {/* Music Section */}
            {/* Music Section */}
            <section className="py-0 md:py-12 overflow-hidden bg-white -mt-4 relative z-10">
                <div className="section-header px-[5%] mb-4 md:mb-12" style={{ "--comic-color": "#9C27B0" } as React.CSSProperties}>
                    <Reveal>
                        <a href="#" className="comic-link">
                            <h2 className="service-logo" style={{ fontSize: '60px' }}>
                                MUSIQUES
                            </h2>
                        </a>
                        <p className="service-tagline text-gray-500">FeelProd Vibes</p>
                    </Reveal>
                </div>
                <Reveal delay={0.2}>
                    <InfiniteCarousel
                        variant="square"
                        items={[
                            { link: "https://open.spotify.com/intl-fr/album/4yTJoVRYocLhlXplLVrxsz?si=npZWx-MpS0e7oZxR7GqijQ", image: "/assets/images/music_tu_crois.jpg", alt: "Tu crois qu'il faut tirer" },
                            { link: "https://soundcloud.com/user-881586097/sets/u9-charenton-inside-2025-2026?si=9cec6317a0e242c186a0f631511f3ba0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", image: "/assets/images/music_charenton.jpg", alt: "U9 Charenton Inside" },
                            { link: "https://open.spotify.com/intl-fr/album/5hxbj1UD8Il7XSwx1K4jYD?si=HDVYRAsLSKGUw9NX8BB1VQ", image: "/assets/images/music_summer_2025.jpg", alt: "Summer 2025" },
                            { link: "https://open.spotify.com/intl-fr/album/3Wmpsg45fUMgFGpLM0JU6f?si=GDg6N1zCRma_TyyMaRqNBg", image: "/assets/images/music_paris_latino.jpg", alt: "Paris Vibe's Latino" },
                            { link: "https://open.spotify.com/intl-fr/album/1qx5VdfAs5copSddLvLO84?si=L5bQuTJ1T1q9PHV-G0pRJw", image: "/assets/images/music_wuwei.jpg", alt: "WuWei" },
                        ]}
                    />
                </Reveal>
            </section>

            <VideoModal
                isOpen={modalState.isOpen}
                videoSrc={modalState.src}
                videoId={modalState.id}
                onClose={handleCloseModal}
            />

            <footer>
                <div className="footer-content">
                    <p>Copyright &copy; 2026 FEELPROD.</p>
                </div>
            </footer>
        </main >
    );
}

// Helper component for Section with Parallax Video
function SectionWithParallax({ id, theme, children, zoomVideo, className }: { id: string, theme: string, children: React.ReactNode, zoomVideo?: boolean, className?: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    const videoSrcMap: Record<string, string> = {
        "souvenirs": "/assets/videos/tv.mp4",
        "adrenaline": "/assets/videos/karma.mp4",
        "evasion": "/assets/videos/divers.mp4"
    };

    return (
        <section className={`service-section ${theme} overflow-hidden ${className || ""}`} id={id} ref={ref}>
            <motion.div style={{ y }} className={`video-background ${zoomVideo ? 'zoom-video' : ''} absolute inset-0 h-[120%] -top-[10%]`}>
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src={videoSrcMap[id]} type="video/mp4" />
                </video>
            </motion.div>
            {children}
        </section>
    )
}
