import "server-only";

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not set`);
  }
  return value;
}

export function getDatabaseConfig() {
  return {
    provider: requiredEnv("DB_PROVIDER"),
    url: requiredEnv("DATABASE_URL"),
  };
}
