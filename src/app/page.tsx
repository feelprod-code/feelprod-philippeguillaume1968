"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import VideoModal from "@/components/VideoModal";
import Reveal from "@/components/Reveal";

export default function Home() {
    const [modalState, setModalState] = useState<{ src?: string; id?: string; isOpen: boolean }>({
        isOpen: false,
    });

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
                    <span className="nav-title">bienvenue sur le site de feelprod</span>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <section className="hero-section overflow-hidden" id="hero">
                <motion.div
                    className="video-background"
                    style={{ y: useTransform(scrollYProgress, [0, 0.2], ["0%", "20%"]) }} // Parallax down
                >
                    <video autoPlay muted loop playsInline>
                        <source src="assets/videos/hero.mp4" type="video/mp4" />
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
                            { videoSrc: "assets/videos/palmanova.mp4", image: "assets/images/1.jpg", alt: "Souvenirs" },
                            { videoId: "Co8j8n_g_6Q", image: "assets/images/2.jpg", alt: "Souvenirs" },
                            { videoId: "Co8j8n_g_6Q", image: "assets/images/3.jpg", alt: "Souvenirs" },
                            { videoId: "iCkE_gYsLXo", image: "assets/images/4.jpg", alt: "Souvenirs" },
                            { videoId: "Co8j8n_g_6Q", image: "assets/images/5.jpg", alt: "Souvenirs" },
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
                            { videoId: "CyRH585e4yY", image: "assets/images/6.jpg", alt: "Adrénaline" },
                            { videoId: "CyRH585e4yY", image: "assets/images/7.jpg", alt: "Adrénaline" },
                            { videoId: "CyRH585e4yY", image: "assets/images/8.jpg", alt: "Adrénaline" },
                            { videoId: "CyRH585e4yY", image: "assets/images/9.jpg", alt: "Adrénaline" },
                            { videoId: "CyRH585e4yY", image: "assets/images/10.jpg", alt: "Adrénaline" },
                        ]}
                    />
                </Reveal>
            </SectionWithParallax>

            {/* Divers Section */}
            <SectionWithParallax id="evasion" theme="theme-arcade">
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
                            { videoId: "WELgM9kD69A", image: "assets/images/11.jpg", alt: "Game" },
                            { videoId: "Iy4iQNKMJFQ", image: "assets/images/12.jpg", alt: "Game" },
                            { videoId: "Iy4iQNKMJFQ", image: "assets/images/13.jpg", alt: "Game" },
                            { videoId: "Iy4iQNKMJFQ", image: "assets/images/14.jpg", alt: "Game" },
                            { videoId: "Iy4iQNKMJFQ", image: "assets/images/15.jpg", alt: "Game" },
                        ]}
                    />
                </Reveal>
            </SectionWithParallax>

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
        </main>
    );
}

// Helper component for Section with Parallax Video
function SectionWithParallax({ id, theme, children, zoomVideo }: { id: string, theme: string, children: React.ReactNode, zoomVideo?: boolean }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    const videoSrcMap: Record<string, string> = {
        "souvenirs": "assets/videos/tv.mp4",
        "adrenaline": "assets/videos/karma.mp4",
        "evasion": "assets/videos/divers.mp4"
    };

    return (
        <section className={`service-section ${theme} overflow-hidden`} id={id} ref={ref}>
            <motion.div style={{ y }} className={`video-background ${zoomVideo ? 'zoom-video' : ''} absolute inset-0 h-[120%] -top-[10%]`}>
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src={videoSrcMap[id]} type="video/mp4" />
                </video>
            </motion.div>
            {children}
        </section>
    )
}
