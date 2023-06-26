const Course = require('../models/Course');
const {moongoseToObject}= require('../../util/mongoose');
const mongoose = require('../../util/mongoose');
class CourseController {
    // [GET] /courses/:slug
   show(req, res, next) {
        Course.findOne({slug: req.params.slug})
        .then(course => {
            res.render('courses/show', {course: moongoseToObject(course)});
        })
   }
}
module.exports = new CourseController();