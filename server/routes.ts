import * as express from 'express';

import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';
import LocationCtrl from './controllers/location';


function setRoutes(app): void {
  const router = express.Router();
  const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();
  const locationCtrl = new LocationCtrl();


  // Locations
  router.route('/locations').get(locationCtrl.getAll);
  router.route('/locations/count').get(locationCtrl.count);
  router.route('/location').post(locationCtrl.insert);
  router.route('/location/:id').get(locationCtrl.get);
  router.route('/location/:id').put(locationCtrl.update);
  router.route('/location/:id').delete(locationCtrl.delete);

  // Cats
  router.route('/cats').get(catCtrl.getAll);
  router.route('/cats/count').get(catCtrl.count);
  router.route('/cat').post(catCtrl.insert);
  router.route('/cat/:id').get(catCtrl.get);
  router.route('/cat/:id').put(catCtrl.update);
  router.route('/cat/:id').delete(catCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}

export default setRoutes;
