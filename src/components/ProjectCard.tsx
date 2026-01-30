'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Database } from '@/lib/supabase'

type Project = Database['public']['Tables']['projects']['Row']

interface ProjectCardProps {
    project: Project
    onClick: (videoId: string) => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <motion.div
            className="card aspect-video relative"
            whileHover={{ scale: 1.02 }}
            onClick={() => project.video_id && onClick(project.video_id)}
        >
            <Image
                src={project.thumbnail_url}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Overlay titre au hover */}
            <div className="overlay">
                <h3
                    className="service-logo text-2xl mb-2"
                    style={{ color: project.color_accent || '#000' }}
                >
                    {project.title}
                </h3>
                {project.tagline && (
                    <p className="service-tagline text-base text-gray-600">
                        {project.tagline}
                    </p>
                )}
            </div>
        </motion.div>
    )
}
