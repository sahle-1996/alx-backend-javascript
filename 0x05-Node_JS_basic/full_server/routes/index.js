/**
 * Application routes setup
 */
import { Router } from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const appRoutes = Router();

// Route for homepage
appRoutes.get('/', AppController.getHomepage);

// Route for listing all students
appRoutes.get('/students', StudentsController.listAllStudents);

// Route for listing students by their major
appRoutes.get('/students/:major', StudentsController.listStudentsByMajor);

export default appRoutes;
