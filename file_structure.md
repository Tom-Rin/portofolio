# Project File Structure

This file describes the current directory structure of the portfolio project to facilitate easier navigation for both humans and AI agents.

## Directory Overview

- `Agent_skills/`: Strategy, plans, and technical specifications.
    - `agent.md`: Agent configuration.
    - `Distributed_Data.md`: Plan for distributed content architecture.
    - `plan.md`: General project plan.
    - `plan_refactoring.md`: Detailed refactoring strategy.
    - `skills.md`: Technical skills and profile details.

- `components/`: Reusable HTML snippets for UI structure.
    - `footer.html`: The site footer.
    - `header.html`: The site header and navigation.

- `css/`: Styling for the entire website.
    - `style.css`: Main stylesheet containing design tokens and layout rules.

- `img/`: Assets for project documentation and visual media.
    - `Bachelor project/`: Assets for the Bachelor script.
    - `Master project data engineering/`: Assets for the engineering project.
    - `Master project data science/`: Assets for the data science project.
    - `master_project/`: Specific assets for the Actor-Critic project.

- `js/`: JavaScript source files and logic modules.
    - `main.js`: Main execution script (handles entry point logic).
    - `projects.js`: Project registry and rendering logic.
    - `utils.js`: Helper functions and configuration constants.
    - `services/`: Modularized logic services.
        - `core_service.js`: Handles component injection and core site services.

- `main/`: Primary landing pages and standard site views.
    - `contact.html`: Contact information page.
    - `index.html`: Home page / Hero view.
    - `over-mij.html`: "Over mij" (About Me) page.
    - `projects.html`: Overview page of the project portfolio.

- `projects/`: Individual project detail pages.
    - `Bachelor_scriptie.html`: Thesis details.
    - `Master_project.html`: Master project details.
    - `thesis_Data_engineering.html`: Data Engineering thesis details.
    - `thesis_Data_science_ai.html`: AI thesis details.

- `Projects_markdown/`: Raw content in Markdown format for project documentation.
    - Contains `.md` files for each project in the portfolio.

- `.gitignore`: Git exclusion rules.
- `opencode.json`: Local configuration for OpenCode.
