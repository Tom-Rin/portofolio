# Project File Structure

This file describes the current directory structure of the portfolio project to facilitate easier navigation for both humans and AI agents.

## Directory Overview

- `components/`: Reusable HTML snippets for UI structure.
    - `footer.html`: The site footer.
    - `header.html`: The site header and navigation.

- `css/`: Styling for the entire website.
    - `base.css`: Base styles and reset.
    - `footer.css`: Footer styles.
    - `layout.css`: Layout and grid system.
    - `projects.css`: Project-specific styling.
    - `responsive.css`: Media queries and responsive behavior.
    - `style.css`: Main stylesheet containing design tokens and layout rules.
    - `tokens.css`: Core design tokens (colors, sizing, etc.).

- `data/`: The "Single Source of Truth" for all project data.
    - `Bachelor_scriptie.json`: Data for the Bachelor thesis.
    - `Master_project.json`: Data for the Master project.
    - `thesis_Data_engineering.json`: Data for the Data Engineering thesis.
    - `thesis_Data_science.json`: Data for the Data Science thesis.

- `img/`: Assets for project documentation and visual media.
    - `Bachelor project/`: Assets for the Bachelor script.
    - `Master project data engineering/`: Assets for the engineering project.
    - `Master project data science/`: Assets for the data science project.
    - `master_project/`: Specific assets for the Actor-Critic project.

- `js/`: JavaScript source files and logic modules.
    - `main.js`: Main execution script (handles entry point logic).
    - `projects.js`: Project registry, configuration, and rendering logic.
    - `ui.js`: UI interactions and animations.
    - `utils.js`: Helper functions and configuration constants.
    - `services/`: Modularized logic services.
        - `core_service.js`: Handles component injection and core site services.
        - `project_service.js`: Handles project rendering and data interaction.

- `main/`: Primary landing pages and standard site views.
    - `contact.html`: Contact information page.
    - `index.html`: Home page / Hero view.
    - `over-mij.html`: "Over mij" (About Me) page.
    - `projects.html`: Overview page of the project portfolio.

- `projects/`: Individual project detail pages.
    - `view.html`: Dynamic template for all project details.
