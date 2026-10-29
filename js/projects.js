const projectRegistry = {
    'Bachelor_scriptie': { title: 'Analysemodellering van Thermische Zouten & Materiaalkarakterisering', category: 'Data Analytics', dataFile: 'Bachelor_scriptie.json' },
    'Master_project': { title: 'Reinforcement Learning voor Pendulum Stabilisatie', category: 'Reinforcement Learning', dataFile: 'Master_project.json' },
    'thesis_Data_engineering': { title: 'Robot Navigatie', category: 'Data Engineering', dataFile: 'thesis_Data_engineering.json' },
    'thesis_Data_science': { title: 'Optimalisatie van Active Inference voor Roboten', category: 'Data Science', dataFile: 'thesis_Data_science.json' }
};

window.HOME_PROJECT_IDS = [
    'thesis_Data_science',
    'thesis_Data_engineering',
    'Master_project',
    'Bachelor_scriptie'
];

window.OVERVIEW_PROJECT_IDS = [
    'thesis_Data_science',
    'thesis_Data_engineering',
    'Master_project',
    'Bachelor_scriptie'
];

window.projectRegistry = projectRegistry;
