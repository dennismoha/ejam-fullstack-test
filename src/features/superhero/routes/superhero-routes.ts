import express, { Router } from 'express';
import { Superheroes } from '@src/features/superhero/controller/superheor-controller';

class SuperHeroRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.get('/superheroes', Superheroes.prototype.fetchSuperheroes);
    this.router.post('/superheroes', Superheroes.prototype.createSuperhero);
 

    return this.router;
  }
}

export const superHeroRoutes: SuperHeroRoutes = new SuperHeroRoutes();
