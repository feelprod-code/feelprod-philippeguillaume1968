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
                <div className="section-header !mb-[04vh] pr-[5%]" style={{ "--comic-color": "#4CC9F0" } as React.CSSProperties}>
                    <Reveal>
                        <a href="#" className="comic-link">
                            <h2 className="service-logo">Évasion</h2>
                        </a>
                        <p className="service-tagline !mb-4">Explorer de nouveaux horizons.</p>
                        <div className="bg-white/95 text-black w-[90%] md:w-[70%] lg:w-[50%] mx-auto p-6 mt-0 mb-8 rounded-xl shadow-lg relative z-10 text-center backdrop-blur-sm">
                            <p className="text-sm leading-relaxed font-light" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                                Plongez dans des univers virtuels fascinants et laissez-vous emporter par l'imaginaire.
                                Une expérience visuelle unique au cœur du jeu vidéo.
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
                <div className="w-full h-[02vh]" /> {/* ESPACE MANUEL ICI */}
            </SectionWithParallax>

            {/* Sport Section */}
            <SectionWithParallax id="adrenaline" theme="theme-music" zoomVideo>
                <div className="section-header !mb-[04vh] pr-[5%]" style={{ "--comic-color": "#F7E733" } as React.CSSProperties}>
                    <Reveal>
                        <a href="#" className="comic-link">
                            <h2 className="service-logo">Adrénaline</h2>
                        </a>
                        <p className="service-tagline !mb-4">L&#39;action à l&#39;état pur.</p>
                        <div className="bg-white/95 text-black w-[90%] md:w-[70%] lg:w-[50%] mx-auto p-6 mt-0 mb-8 rounded-xl shadow-lg relative z-10 text-center backdrop-blur-sm">
                            <p className="text-sm leading-relaxed font-light" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                                Vivez l'intensité du mouvement et la performance.
                                Des images percutantes pour ressentir toute l'énergie du sport.
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
                <div className="w-full h-[02vh]" /> {/* ESPACE MANUEL ICI */}
            </SectionWithParallax>

            {/* Spectacle Section */}
            {/* Spectacle Section */}
            {/* Spectacle Section */}
            <SectionWithParallax id="souvenirs" theme="theme-tv" className="souvenirs-only md:pt-0">
                <div className="section-header !mb-[04vh] pr-[5%]" style={{ "--comic-color": "#FF9F1C" } as React.CSSProperties}>
                    <Reveal>
                        <a href="#" className="comic-link">
                            <h2 className="service-logo">Souvenirs</h2>
                        </a>
                        <p className="service-tagline !mb-4">Des moments inoubliables.</p>
                        <div className="bg-white/95 text-black w-[90%] md:w-[70%] lg:w-[50%] mx-auto p-6 mt-0 mb-8 rounded-xl shadow-lg relative z-10 text-center backdrop-blur-sm">
                            <p className="text-sm leading-relaxed font-light" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                                Revivez vos plus beaux souvenirs avec émotion et authenticité.
                                Nous capturons ces instants précieux pour les rendre éternels.
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
                <div className="w-full h-[00vh]" /> {/* ESPACE FIN SOUVENIRS (Laissez à 0) */}
            </SectionWithParallax>

            {/* Podcast Section */}
            {/* --- CONTROLE TRANSITION TABLETTE --- : Modifiez "md:-mt-[6vh]" ci-dessous pour remonter/descendre le bloc sur ordi */}
            <section className="py-0 !pt-0 overflow-hidden bg-white -mt-4 md:-mt-[8vh] relative z-10">
                <div className="w-full h-[01vh]" /> {/* <--- MODIFIEZ ICI (Changez 0 pour 10) */}

                <div className="section-header px-[5%] mb-4 !mt-0" style={{ "--comic-color": "#4CAF50" } as React.CSSProperties}>
                    <Reveal>
                        <a href="#" className="comic-link">
                            <h2 className="service-logo" style={{ fontSize: '55px' }}>
                                PODCASTS
                            </h2>
                        </a>
                        <p className="service-tagline text-gray-500" style={{ fontSize: '20px' }}>La santé autrement...</p>
                        <div className="bg-white/95 text-black w-[90%] md:w-[70%] lg:w-[50%] mx-auto p-6 mt-0 mb-8 rounded-xl shadow-lg relative z-10 text-center backdrop-blur-sm">
                            <p className="text-sm leading-relaxed font-light" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                                Laissez-vous guider par des voix qui soignent et apaisent.
                                Une exploration sonore au cœur du bien-être et de l'humain.
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
                <div className="w-full h-[0vh]" /> {/* ESPACE BAS PODCAST - Ajustez pour l'écart avec Musiques */}
            </section>

            {/* Music Section */}
            {/* Music Section */}
            {/* --- CONTROLE UNIQUE ESPACE --- : Changez "-5vh" pour monter/descendre le bloc. C'est la SEULE ligne à toucher ! */}
            <section className="py-0 !pt-0 overflow-hidden bg-white relative z-10" style={{ marginTop: "-10vh" }}>
                <div className="w-full h-[5vh]" /> {/* Espace de sécurité fixe (ne pas toucher) */}

                <div className="section-header px-[5%] mb-4 !mt-0" style={{ "--comic-color": "#9C27B0" } as React.CSSProperties}>
                    <Reveal>
                        <a href="#" className="comic-link">
                            <h2 className="service-logo" style={{ fontSize: '55px' }}>
                                MUSIQUES
                            </h2>
                        </a>
                        <p className="service-tagline text-gray-500" style={{ fontSize: '20px' }}>FeelProd Vibes</p>
                        <div className="bg-white/95 text-black w-[90%] md:w-[70%] lg:w-[50%] mx-auto p-6 mt-0 mb-8 rounded-xl shadow-lg relative z-10 text-center backdrop-blur-sm">
                            <p className="text-sm leading-relaxed font-light" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                                Une sélection musicale pour accompagner vos projets.
                                Des ambiances uniques créées pour sublimer l'image.
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
