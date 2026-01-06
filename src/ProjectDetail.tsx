import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Project } from "./App";

interface ProjectDetailProps {
  projects: Project[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projects }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="page">
        <div className="bg-grid" aria-hidden />
        <div className="bg-noise" aria-hidden />
        <div className="panel">
          <h2>Project not found</h2>
          <button className="btn primary" onClick={() => navigate("/")}>
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="bg-grid" aria-hidden />
      <div className="bg-noise" aria-hidden />
      
      <div className="pokemon-card-container">
        <div className="pokemon-card">
          {/* Status Badge - Top Left */}
          <div className="pokemon-card-status-badge">{project.status}</div>

          {/* Header with title and logo */}
          <div className="pokemon-card-header">
            <h1 className="pokemon-card-title">{project.title}</h1>
            {project.logo && (
              <div className="pokemon-card-logo">
                <img src={project.logo} alt={`${project.title} logo`} />
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="pokemon-card-summary">
            <p>{project.summary}</p>
          </div>

          {/* Project Showcase Carousel */}
          {project.images && project.images.length > 0 && (
            <div className="pokemon-card-showcase">
              <h2 className="pokemon-card-section-title">Project Showcase</h2>
              <div className="showcase-carousel">
                {project.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="showcase-image-wrapper"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="showcase-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Attacks/Features Section */}
          <div className="pokemon-card-attacks">
            <h2 className="pokemon-card-section-title">Abilities</h2>
            <ul className="pokemon-card-features">
              {project.features.map((feature, index) => (
                <li key={index} className="pokemon-card-feature">
                  <span className="feature-bullet">★</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom stats: Tech stack and Year */}
          <div className="pokemon-card-footer">
            <div className="pokemon-card-tech">
              <p className="footer-label">Tech Stack:</p>
              <div className="pokemon-card-tech-chips">
                {project.tech.map((tech, index) => (
                  <span key={index} className="pokemon-tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="pokemon-card-year">
              <p className="footer-label">Year:</p>
              <p className="footer-value">{project.year}</p>
            </div>
          </div>

          {/* External link if available */}
          {project.link && project.link !== "#" && (
            <div className="pokemon-card-link">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn primary"
              >
                Visit Project
                <span aria-hidden>→</span>
              </a>
            </div>
          )}
        </div>

        {/* Back button */}
        <button className="btn ghost back-btn" onClick={() => navigate("/")}>
          ← Back to Quest Log
        </button>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="image-modal" 
          onClick={() => setSelectedImage(null)}
        >
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="image-modal-close" 
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <img 
              src={selectedImage} 
              alt="Expanded view" 
              className="image-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
