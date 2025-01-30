import { Application } from 'express';
import { BASE_PATH } from './constants';
import { healthRoutes } from '@src/features/health/routes';
import { superHeroRoutes } from '@src/features/superhero/routes/superhero-routes';

export default (app: Application) => {
  const routes = () => {
    app.use('', healthRoutes.health()); // checks the health of the application
    app.use('', healthRoutes.env());
    app.use(BASE_PATH, superHeroRoutes.routes());
  };

  routes();
};
