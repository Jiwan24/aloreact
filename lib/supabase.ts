import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database
export type HeroContent = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    button_text: string;
    created_at: string;
    updated_at: string;
};

export type Product = {
    id: string;
    title: string;
    link: string;
    thumbnail: string;
    order: number;
    created_at: string;
};

export type ExperienceCard = {
    id: string;
    title: string;
    description: string;
    image: string;
    background_color: string;
    order: number;
    created_at: string;
};

export type GalleryImage = {
    id: string;
    title: string;
    image_url: string;
    thumbnail_url: string;
    order: number;
    created_at: string;
};
