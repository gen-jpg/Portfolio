import React from "react";
import { Routes, Route } from "react-router-dom";
import { supabase } from './supabaseClient';
import ProjectDetail from './ProjectDetail';
import HomePage from './HomePage';

export interface Project {
  id: string;
  title: string;
  summary: string;
  tech: string[];
  link: string;
  status: string;
  logo?: string;
  features: string[];
  year: string;
  images?: string[];
}

const projects: Project[] = [
  {
    id: "smashplus",
    title: "SmashPlus",
    summary: "Sports hub for Badminton/Pickleball players in the Philippines: match histories, community building, court bookings, coaching sessions, etc., all in one place for your convenience.",
    tech: ["HTML/CSS", "Django", "API integrations", "Public-facing"],
    link: "https://smashplus.ph",
    status: "Featured",
    logo: "/Portfolio/dist/assets/smashplus_logo.png",
    features: [
      "Cross-functional team collaboration with stakeholders",
      "Match history tracking for competitive play",
      "Community building and social features",
      "Court booking system integration",
      "Player profiles and statistics",
      "Real-time email notifications for successful reservations", 
      "Coaching session management and scheduling",
    ],
    year: "2025",
    images: [
      "/Portfolio/projects/smashplus/screenshot-1.png",
      "/Portfolio/projects/smashplus/screenshot-2.png"
    ]
  },
  {
    id: "private-project",
    title: "[Private Project]",
    summary: "B2B platform for exchange (buying/selling) and management of products.",
    tech: ["React", "MongoDB", "API integrations", "Internal systems"],
    link: "#",
    status: "Private",
    features: [
      "Product exchange marketplace",
      "Inventory management system",
      "User authentication and authorization",
      "Real-time data synchronization",
      "Chat support for buyers and sellers",
      "Posting and browsing of listings",
      "Order tracking and history", 
      "Payment processing integration"
    ],
    year: "2024"
  },
//   {
//     title: "Dungeon Map Dashboard",
//     summary: "Analytics hub that surfaces KPIs with retro tiles, responsive layouts, and smooth state handling.",
//     tech: ["React", "Charts", "Design Systems", "API-first"],
//     link: "#",
//     status: "Case study available"
//   },
//   {
//     title: "Rescue Team Site",
//     summary: "Marketing site with motion, accessibility-first design, and crisp handoff docs for teams.",
//     tech: ["Motion", "Accessibility", "Docs", "Story-driven"],
//     link: "#",
//     status: "Live preview on request"
//   }
];

function App() {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState('');

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const { error } = await supabase.from('inquiries').insert([
        {
          name: formState.name,
          email: formState.email,
          message: formState.message
        }
      ]);

      if (error) throw error;

      setSubmitMessage('✓ Inquiry sent! I\'ll get back to you soon.');
      setFormState({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setSubmitMessage('✗ Failed to send. Try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <HomePage 
            projects={projects}
            formState={formState}
            isSubmitting={isSubmitting}
            submitMessage={submitMessage}
            handleFormChange={handleFormChange}
            handleSubmit={handleSubmit}
          />
        } 
      />
      <Route 
        path="/project/:id" 
        element={<ProjectDetail projects={projects} />} 
      />
    </Routes>
  );
}

export default App;
