import dotenv from 'dotenv';
import bunyan from 'bunyan';

dotenv.config({});

class Config {
  public NODE_ENV: string | undefined;
  public LOCAL_DEVELOPMENT_BASE_URL: string | undefined;

  constructor() {
    this.NODE_ENV = process.env.NODE_ENV || '';
    this.LOCAL_DEVELOPMENT_BASE_URL = process.env.LOCAL_DEVELOPMENT_BASE_URL;
  }

  public createLogger(name: string): bunyan {
    return bunyan.createLogger({ name, level: 'debug' });
  }

  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`${key} configuration is undefined`);
      }
    }
  }
}

export const config: Config = new Config();
