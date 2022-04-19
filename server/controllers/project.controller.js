const Project = require('../models/project.model');

module.exports.findAllProjects = (request, response) => {
    Project.find()
        .then((projects) => {
            console.log(projects);
            response.json(projects);
        })
        .catch((err) => {
            console.log(err);
            response.json({message: 'Something went wrong', error: err});
        });
}

module.exports.createProject = (request, response) => {
    Project.create(request.body)
        .then(project => response.json(project))
        .catch(err => response.json(err));
}

module.exports.getProject = (request, response) => {
    Project.findOne({id: request.params.id})
        .then(project => response.json(project))
        .catch(err => response.json(err))
}

module.exports.updateProject = (request, response) => {
    Project.findOneAndUpdate({id: request.params.id}, request.body, {new:true})
        .then(updatedProject => response.json(updatedProject))
        .catch(err => response.json(err))
}

module.exports.deleteProject = (request, response) => {
    Project.deleteOne({id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}