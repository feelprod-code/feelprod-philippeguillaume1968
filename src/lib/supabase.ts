import { createClient } from '@supabase/supabase-js'

// Type-safety pour la database
export type Database = {
    public: {
        Tables: {
            projects: {
                Row: {
                    id: string
                    created_at: string
                    updated_at: string
                    title: string
                    tagline: string | null
                    category: 'souvenirs' | 'adrenaline' | 'evasion' | 'chatbots-ia'
                    thumbnail_url: string
                    video_id: string | null
                    video_type: 'youtube' | 'local' | 'vimeo'
                    color_accent: string | null
                    order_index: number
                    is_published: boolean
                    slug: string | null
                    description: string | null
                }
                Insert: Omit<Database['public']['Tables']['projects']['Row'], 'id' | 'created_at' | 'updated_at'>
                Update: Partial<Database['public']['Tables']['projects']['Insert']>
            }
            contact_submissions: {
                Row: {
                    id: string
                    created_at: string
                    name: string
                    email: string
                    phone: string | null
                    project_type: string | null
                    message: string
                    status: 'new' | 'read' | 'replied' | 'archived'
                    admin_notes: string | null
                    user_agent: string | null
                    ip_address: string | null
                }
                Insert: Omit<Database['public']['Tables']['contact_submissions']['Row'], 'id' | 'created_at'>
                Update: Partial<Database['public']['Tables']['contact_submissions']['Insert']>
            }
        }
    }
}

// Client Supabase (côté client ET serveur pour l'instant avec variables publiques)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Note: On ne throw pas d'erreur ici pour éviter de casser le build si les variables manquent
// On gérera l'erreur lors de l'appel
export const supabase = createClient<Database>(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder'
)
