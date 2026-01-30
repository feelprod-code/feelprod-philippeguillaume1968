'use client'
import { useState } from 'react'
import { Database } from '@/lib/supabase'
import ProjectCard from './ProjectCard'
import VideoModal from './VideoModal'
import { AnimatePresence } from 'framer-motion'

type Project = Database['public']['Tables']['projects']['Row']

interface ProjectGridProps {
    projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
    const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null)

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-[5%] pb-12 w-full">
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={(videoId) => setSelectedVideoId(videoId)}
                    />
                ))}
            </div>

            <AnimatePresence>
                {selectedVideoId && (
                    <VideoModal
                        videoId={selectedVideoId}
                        isOpen={true}
                        onClose={() => setSelectedVideoId(null)}
                    />
                )}
            </AnimatePresence>
        </>
    )
}
