import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { superheroSchema } from '@src/features/superhero/schema/superhero-schema'; // Joi validation schema
import { joiValidation } from '@src/shared/globals/decorators/joi-validation-decorators';
import { 
  ConflictError,
} from '@src/shared/globals/helpers/error-handler';
import GetSuccessMessage from '@src/shared/globals/helpers/success-messages';
import { Superhero } from '@src/features/superhero/interfaces/superhero.interface';

/**
 * Simulated Array in-memory database for storing superheroes.
 * @type {Superhero[]}
 */
const superheroes: Superhero[] = [];

export class Superheroes {
  /**
   * Fetch a list of superheroes sorted by humility score in descending order.
   * @async
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @throws {Error} Will throw an error if there is an issue fetching superheroes.
   * @returns {Promise<void>} Sends a response with the list of superheroes.
   * We are using express-async-errors to capture errors incase of any thrown
   */

  public async fetchSuperheroes(req: Request, res: Response): Promise<void> {
    console.log('reached here');
    const sortedHeroes = superheroes.sort(
      (a, b) => b.humilityScore - a.humilityScore,
    );
    res
      .status(StatusCodes.OK)
      .send(
        GetSuccessMessage(
          StatusCodes.OK,
          sortedHeroes,
          'Superheroes fetched successfully',
        ),
      );
  }

  /**
   * Create a new superhero and add it to the in-memory database.
   * @async
   * @param {Request} req - The Express request object containing superhero data.
   * @param {Response} res - The Express response object.
   * @throws {ConflictError} Thrown if a superhero with the same name already exists. - This is optional
   * @throws {Error} Thrown if there is an issue creating a new superhero. we are using a centralized error handler together with  express
   * asyn-errors to catch these errors. no try catch
   * @returns {Promise<void>} Sends a response with the created superhero.
   */
  @joiValidation(superheroSchema)
  public async createSuperhero(req: Request, res: Response): Promise<void> {
    const { name, superpower, humilityScore } = req.body;
    console.log('reqb body is ', req.body);

    // Check if superhero already exists by name (this is optional)
    const existingHero = superheroes.find((hero) => hero.name === name);
    if (existingHero) {
      throw new ConflictError('Superhero with this name already exists');
    }

    // Create the new superhero
    const newHero: Superhero = {
      id: superheroes.length + 1, // Simple in-memory id generation to identify each user uniquely. name could also have worked
      name,
      superpower,
      humilityScore,
    };

    superheroes.push(newHero); // Save to in-memory "database"

    res
      .status(StatusCodes.CREATED)
      .send(
        GetSuccessMessage(
          StatusCodes.CREATED,
          newHero,
          'Superhero created successfully',
        ),
      );
  }
}
