import { supabase } from '@/lib/supabase'
import { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import ProjectGrid from '@/components/ProjectGrid'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
    title: 'Work - FeelProd',
    description: 'Découvrez nos créations vidéo : mariages, sport extrême, voyages.',
}

// Fallback Mock Data if Supabase is empty/not configured
const MOCK_PROJECTS: any[] = [
    {
        id: '1',
        title: 'Mariage Emma & Lucas',
        tagline: 'Des moments inoubliables.',
        thumbnail_url: '/assets/images/1.jpg',
        category: 'souvenirs',
        video_id: 'Pfj2jnbRwfw',
        color_accent: '#FF9F1C'
    },
    {
        id: '2',
        title: 'Baptême Chloé',
        tagline: 'Tendresse et émotions.',
        thumbnail_url: '/assets/images/2.jpg',
        category: 'souvenirs',
        video_id: 'Co8j8n_g_6Q',
        color_accent: '#FF9F1C'
    },
    {
        id: '3',
        title: 'Compétition VTT 2025',
        tagline: 'L\'action à l\'état pur.',
        thumbnail_url: '/assets/images/6.jpg',
        category: 'adrenaline',
        video_id: 'CyRH585e4yY',
        color_accent: '#F7E733'
    },
    {
        id: '4',
        title: 'Voyage Islande',
        tagline: 'Explorer de nouveaux horizons.',
        thumbnail_url: '/assets/images/11.jpg',
        category: 'evasion',
        video_id: 'WELgM9kD69A',
        color_accent: '#4CC9F0'
    }
]

export default async function WorkPage() {
    // Fetch tous les projets publiés
    // Fetch tous les projets publiés
    const { data: dbProjects, error } = await supabase
        .from('projects')
        .select('*')
        .eq('is_published', true)
        .order('order_index', { ascending: true })

    if (error) {
        console.error('Supabase error (using mocks):', error.message)
    }

    const projects = (dbProjects && dbProjects.length > 0) ? dbProjects : MOCK_PROJECTS

    // Grouper par catégorie
    const souvenirs = projects.filter(p => p.category === 'souvenirs')
    const adrenaline = projects.filter(p => p.category === 'adrenaline')
    const evasion = projects.filter(p => p.category === 'evasion')
    const chatbots = projects.filter(p => p.category === 'chatbots-ia')

    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="hero-section flex flex-col justify-center px-[5%] pt-32 pb-16" style={{ minHeight: '60vh' }}>
                <div className="max-w-4xl">
                    <Reveal delay={0.2}>
                        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter" style={{ fontFamily: 'var(--font-bangers)' }}>
                            PORTFOLIO
                        </h1>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="subhead text-2xl md:text-3xl font-light text-gray-600 max-w-2xl">
                            Nos créations visuelles. Une collection d'émotions capturées.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Categories */}
            {souvenirs.length > 0 && (
                <section className="py-16">
                    <div className="section-header px-[5%] mb-12">
                        <Reveal>
                            <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'var(--font-bangers)', color: '#FF9F1C' }}>
                                Souvenirs
                            </h2>
                            <p className="text-xl text-gray-500 font-medium">Des moments inoubliables.</p>
                        </Reveal>
                    </div>
                    <Reveal delay={0.2}>
                        <ProjectGrid projects={souvenirs} />
                    </Reveal>
                </section>
            )}

            {adrenaline.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="section-header px-[5%] mb-12">
                        <Reveal>
                            <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'var(--font-bangers)', color: '#F7E733' }}>
                                Adrénaline
                            </h2>
                            <p className="text-xl text-gray-500 font-medium">L'action à l'état pur.</p>
                        </Reveal>
                    </div>
                    <Reveal delay={0.2}>
                        <ProjectGrid projects={adrenaline} />
                    </Reveal>
                </section>
            )}

            {evasion.length > 0 && (
                <section className="py-16">
                    <div className="section-header px-[5%] mb-12">
                        <Reveal>
                            <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'var(--font-bangers)', color: '#4CC9F0' }}>
                                Évasion
                            </h2>
                            <p className="text-xl text-gray-500 font-medium">Explorer de nouveaux horizons.</p>
                        </Reveal>
                    </div>
                    <Reveal delay={0.2}>
                        <ProjectGrid projects={evasion} />
                    </Reveal>
                </section>
            )}

            {chatbots.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="section-header px-[5%] mb-12">
                        <Reveal>
                            <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'var(--font-bangers)', color: '#7D5BA6' }}>
                                Chatbots IA
                            </h2>
                            <p className="text-xl text-gray-500 font-medium">L'intelligence au service de l'échange.</p>
                        </Reveal>
                    </div>
                    <Reveal delay={0.2}>
                        <ProjectGrid projects={chatbots} />
                    </Reveal>
                </section>
            )}

            <footer>
                <div className="footer-content text-center py-8 bg-gray-100">
                    <p className="text-gray-500">Copyright © 2026 FEELPROD.</p>
                </div>
            </footer>
        </main>
    )
}
