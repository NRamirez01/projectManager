const ProjectController = require('../controllers/project.controller');

module.exports = (app) => {
    app.get('/api/project', ProjectController.findAllProjects);
    app.post('/api/project', ProjectController.createProject);
    app.get('/api/project/:id', ProjectController.getProject);
}