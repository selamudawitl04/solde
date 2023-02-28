const app = require('express');
const router = app.Router();

const tutorailController = require('../controllers/tutorialController')

router.get('/searchTutorial',tutorailController.searchTutorail);

router
.route('/')
.get(tutorailController.getAllTutorail)
.post(tutorailController.createTutorail)
.delete(tutorailController.deleteAllTutorail)

router
.route('/:tutorId')
.get(tutorailController.getTutorail)
.patch(tutorailController.updateTutorail)
.delete(tutorailController.deleteTutorail)


module.exports = router;
