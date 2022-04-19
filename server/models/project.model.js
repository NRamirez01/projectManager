const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);