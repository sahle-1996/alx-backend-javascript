/**
 * Controller for handling application-level routes
 */
class AppController {
  static sendHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
