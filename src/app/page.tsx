"use client";
import { useState, useRef, useEffect } from "react";
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

    // Force Play Video Logic (Hero)
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Hero video autoplay prevented:", error);
            });
        }
    }, []);

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

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 md:gap-4">
                        {/* Instagram - Funky Rounded */}
                        <a href="https://www.instagram.com/feelprod" target="_blank" rel="noopener noreferrer" className="social-icon group">
                            <svg className="w-7 h-7 text-gray-400 hover:text-[#E1306C] transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-12" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2C22,19.4 19.4,22 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8C2,4.6 4.6,2 7.8,2M7.6,4C5.6,4 4,5.6 4,7.6V16.4C4,18.4 5.6,20 7.6,20H16.4C18.4,20 20,18.4 20,16.4V7.6C20,5.6 18.4,4 16.4,4H7.6M12,7A5,5 0 1,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 1,0 15,12A3,3 0 0,0 12,9M17.25,5.5A1.25,1.25 0 1,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5Z" />
                            </svg>
                        </a>
                        {/* YouTube - Funky Rounded */}
                        <a href="https://www.youtube.com/@FEELPROD1" target="_blank" rel="noopener noreferrer" className="social-icon group">
                            <svg className="w-8 h-8 text-gray-400 hover:text-[#FF0000] transition-colors duration-300 transform group-hover:scale-110 group-hover:-rotate-12" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                        </a>
                        {/* Facebook - Funky Rounded */}
                        <a href="https://www.facebook.com/feelprod" target="_blank" rel="noopener noreferrer" className="social-icon group">
                            <svg className="w-7 h-7 text-gray-400 hover:text-[#1877F2] transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                            </svg>
                        </a>
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
                </div>

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
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    >
                        <source src="/assets/videos/hero.mp4" type="video/mp4" />
                    </video>
                </motion.div>

                <div className="hero-content relative z-10">
                    {/* Version Mobile - Image Droite + Titre ecarte gauche et plus bas */}
                    <div className="md:hidden flex flex-col justify-center relative w-full h-full">
                        <Reveal delay={0.2}>
                            <div
                                className="hero-bd-title z-20 relative self-start"
                                style={{ marginLeft: '10%', marginTop: '2rem', marginBottom: '-30px' }}
                            >
                                <span>LA VIE</span>
                                <span>EN MOUVEMENT</span>
                            </div>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <div className="flex justify-end w-full pr-4">
                                <img
                                    src="/assets/images/COUVfeel.png"
                                    alt="FeelProd"
                                    className="h-auto object-contain"
                                    style={{ width: '65%', opacity: 0.95 }}
                                />
                            </div>
                        </Reveal>
                    </div>

                    {/* Version Desktop - Texte */}
                    <div className="hidden md:block">
                        <Reveal delay={0.2}>
                            <h1>FEELPROD</h1>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <p className="subhead">Créateur d&#39;émotions visuelles. Capturer l&#39;instant, sublimer le mouvement.</p>
                        </Reveal>
                    </div>
                </div>
                <div className="hero-overlay"></div>
            </section>

            {/* Divers Section */}
            {/* Divers Section */}
            {/* Divers Section */}
            <SectionWithParallax id="evasion" theme="theme-arcade" className="pb-2 md:pb-24">
                <div className="section-header header-promo pr-[5%]" style={{ "--comic-color": "#4CC9F0" } as React.CSSProperties}>
                    <Reveal>
                        <h2 className="service-logo title-promo">PROMO</h2>
                        <p className="service-tagline !mb-4" style={{ fontSize: '20px' }}>Nouveaux regards</p>
                        <div className="bg-white/95 text-black w-[90%] md:w-[70%] lg:w-[50%] mx-auto p-6 mt-0 mb-8 rounded-xl shadow-lg relative z-10 text-center backdrop-blur-sm">
                            <p className="text-sm leading-relaxed font-light" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                                Partez à la découverte d'artistes et de lieux d'exception sous un angle inédit.
                                Un voyage visuel pour révéler l'essence de chaque rencontre.
                            </p>
                        </div>
                    </Reveal>
                </div>
                <Reveal delay={0.2}>
                    <InfiniteCarousel
                        variant="small"
                        onOpen={handleOpenModal}
                        items={[
                            { videoId: "exnbHE-BgYw", image: "/assets/images/1-RELLE.png", alt: "RELLE" },
                            { videoId: "AGUxUQ5bwXk", image: "/assets/images/2-BARRIOLATINOSALSA.png", alt: "BARRIO LATINO SALSA" },
                            { videoId: "STp41rTjP-Q", image: "/assets/images/3-LARTISTEVENT.png", alt: "L ARTIST EVENT" },
                            { videoId: "WELgM9kD69A", image: "/assets/images/4-ALEX.png", alt: "ALEX" },
                            { videoId: "sZX2ws_vSQI", image: "/assets/images/5-SALSA4.png", alt: "SALSA 4" },
                            { videoId: "LjPaIVq8weg", image: "/assets/images/6-LAURE.png", alt: "LAURE" },
                            { videoId: "N_f-Oepxyco", image: "/assets/images/21-ELYSEE 63.png", alt: "ELYSEE 63" },
                            { videoId: "p9kzlJa5rA4", image: "/assets/images/20-Aguila.jpg", alt: "AGUILA" },
                            { videoId: "pEw1uxjsYvI", image: "/assets/images/23-BARRIO.png", alt: "BARRIO" },
                        ]}
                    />
                </Reveal>
                <div className="espace-sous-promo" />
            </SectionWithParallax>

            {/* Sport Section */}
            <SectionWithParallax id="adrenaline" theme="theme-music" zoomVideo>
                <div className="section-header header-immersion pr-[5%]" style={{ "--comic-color": "#F7E733" } as React.CSSProperties}>
                    <Reveal>
                        <a href="#" className="comic-link">
                            <h2 className="service-logo title-immersion">IMMERSION</h2>
                        </a>
                        <p className="service-tagline !mb-4" style={{ fontSize: '20px' }}>Au cœur de l'action.</p>
                        <div className="bg-white/95 text-black w-[90%] md:w-[70%] lg:w-[50%] mx-auto p-6 mt-0 mb-8 rounded-xl shadow-lg relative z-10 text-center backdrop-blur-sm">
                            <p className="text-sm leading-relaxed font-light" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                                Des carnavals vibrants aux compétitions sportives intenses.
                                Nous capturons l'énergie de chaque événement pour en restituer toute la force.
                            </p>
                        </div>
                    </Reveal>
                </div>
                <Reveal delay={0.2}>
                    <InfiniteCarousel
                        variant="small"
                        onOpen={handleOpenModal}
                        items={[
                            { videoId: "dp8Tt0_H7is", image: "/assets/images/7-BAGARTLAND.png", alt: "BAGART PLAN" },
                            { videoId: "5XSxn3IJvG8", image: "/assets/images/8-BARRIOCARNAVAL.png", alt: "BARRIO CARNAVAL" },
                            { videoId: "GsFDEIkVxAo", image: "/assets/images/9-KARMA.png", alt: "KARMA" },
                            { videoId: "3nkt9iLfyfc", image: "/assets/images/10-MORSANG.png", alt: "MORSANG" },
                            { videoId: "iCkE_gYsLXo", image: "/assets/images/11-bvaw.png", alt: "BVAW" },
                            { videoId: "B6o4AcsAPSc", image: "/assets/images/18-ledjane.png", alt: "LEDJANE" },
                            { videoId: "P4E2A1CswL4", image: "/assets/images/19-Cannessalsa.png", alt: "CANNES SALSA" },
                        ]}
                    />
                </Reveal>
                <div className="espace-sous-immersion" />
            </SectionWithParallax>

            {/* Spectacle Section */}
            {/* Spectacle Section */}
            {/* Spectacle Section */}
            <SectionWithParallax id="souvenirs" theme="theme-tv" className="souvenirs-only md:pt-0">
                <div className="section-header header-souvenirs pr-[5%]" style={{ "--comic-color": "#FF9F1C" } as React.CSSProperties}>
                    <Reveal>
                        <a href="#" className="comic-link">
                            <h2 className="service-logo title-souvenirs">Souvenirs</h2>
                        </a>
                        <p className="service-tagline !mb-4" style={{ fontSize: '20px' }}>Des moments inoubliables.</p>
                        <div className="bg-white/95 text-black w-[90%] md:w-[70%] lg:w-[50%] mx-auto p-6 mt-0 mb-8 rounded-xl shadow-lg relative z-10 text-center backdrop-blur-sm">
                            <p className="text-sm leading-relaxed font-light" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                                La magie de l'iPhone pour capturer l'authenticité en toute discrétion.
                                Immortalisez vos souvenirs avec la simplicité comme seul témoin.
                            </p>
                        </div>
                    </Reveal>
                </div>
                <Reveal delay={0.2}>
                    <InfiniteCarousel
                        variant="small"
                        onOpen={handleOpenModal}
                        items={[
                            { videoId: "025yJW0B3GQ", image: "/assets/images/12-ANNIALLEMAGNE.png", alt: "ANNI ALLEMAGNE" },
                            { videoId: "ucJyA0cVRdg", image: "/assets/images/13-MARIAGE.png", alt: "MARIAGE" },
                            { videoId: "v6BcNiiB9DA", image: "/assets/images/15-THEOSURF.png", alt: "THEO SURF" },
                            { videoId: "Pfj2jnbRwfw", image: "/assets/images/17.jpg", alt: "SOUVENIR 17" },
                            { videoId: "aZBeiycEwl8", image: "/assets/images/22-U9.jpg", alt: "U9" },
                        ]}
                    />
                </Reveal>
                <div className="espace-sous-souvenirs" />
            </SectionWithParallax>

            {/* Podcast Section */}
            {/* --- CONTROLE TRANSITION TABLETTE --- : Modifiez "md:-mt-[6vh]" ci-dessous pour remonter/descendre le bloc sur ordi */}
            <section className="section-podcast-container">
                <div className="spacing-section-top" /> {/* ESPACE HAUT PODCAST */}

                <div className="section-header header-podcasts px-[5%]" style={{ "--comic-color": "#4CAF50" } as React.CSSProperties}>
                    <Reveal>
                        <a href="#" className="comic-link">
                            <h2 className="service-logo title-podcasts">
                                PODCASTS
                            </h2>
                        </a>
                        <p className="service-tagline text-gray-500" style={{ fontSize: '20px' }}>La santé autrement...</p>
                        <div className="bg-white/95 text-black w-[90%] md:w-[70%] lg:w-[50%] mx-auto p-6 mt-0 mb-8 rounded-xl shadow-lg relative z-10 text-center backdrop-blur-sm">
                            <p className="text-sm leading-relaxed font-light" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                                L'alliance de la technique et de la thérapie au service de la transmission.
                                La lumière comme langage commun pour éclairer un message profond.
                            </p>
                        </div>
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
                <div className="espace-sous-podcasts" />
            </section>

            {/* Music Section */}
            {/* Music Section */}
            {/* --- CONTROLE UNIQUE ESPACE --- : Changez "-5vh" pour monter/descendre le bloc. C'est la SEULE ligne à toucher ! */}
            <section className="section-musiques-container">
                <div className="spacing-section-top" /> {/* ESPACE HAUT MUSIQUE */}

                <div className="section-header header-musiques px-[5%]" style={{ "--comic-color": "#9C27B0" } as React.CSSProperties}>
                    <Reveal>
                        <a href="#" className="comic-link">
                            <h2 className="service-logo title-musiques">
                                MUSIQUES
                            </h2>
                        </a>
                        <p className="service-tagline text-gray-500" style={{ fontSize: '20px' }}>FeelProd Vibes</p>
                        <div className="bg-white/95 text-black w-[90%] md:w-[70%] lg:w-[50%] mx-auto p-6 mt-0 mb-8 rounded-xl shadow-lg relative z-10 text-center backdrop-blur-sm">
                            <p className="text-sm leading-relaxed font-light" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                                L'intelligence artificielle et la créativité unies pour des bandes originales uniques.
                                Une qualité sonore exceptionnelle pour sublimer vos films et ambiances.
                            </p>
                        </div>
                        <div className="w-full h-[01vh]" /> {/* ESPACE SOUS TEXTE - Ajustez h-[...] */}
                    </Reveal>
                </div>
                <Reveal delay={0.2}>
                    <InfiniteCarousel
                        variant="square-small"
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
function SectionWithParallax({ id, theme, children, zoomVideo, className, videoKey }: { id: string, theme: string, children: React.ReactNode, zoomVideo?: boolean, className?: string, videoKey?: string }) {
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

    // Force Play Logic for Sections
    const sectionVideoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if (sectionVideoRef.current) {
            sectionVideoRef.current.play().catch(error => {
                console.log(`Video ${id} autoplay prevented:`, error);
            });
        }
    }, [id]);

    return (
        <section className={`service-section ${theme} overflow-hidden ${className || ""}`} id={id} ref={ref}>
            <motion.div style={{ y }} className={`video-background ${zoomVideo ? 'zoom-video' : ''} absolute inset-0 h-[120%] -top-[10%]`}>
                <video
                    ref={sectionVideoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                >
                    <source src={videoSrcMap[videoKey || id]} type="video/mp4" />
                </video>
            </motion.div>
            {children}
        </section>
    )
}
