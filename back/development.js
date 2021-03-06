const port = 8000;

export default {
  jwt: {
    secret:
      "h8566MNQ18oo5cMmHROVh8566MNQ18oo5cMmHROVh8566MNQ18oo5cMmHROVh8566MNQ18oo5cMmHROV",
    accessExpires: 5,
    refreshExpires: 1440,
  },
  logger: {
    logToConsole: true,
    dir: "dist/logs/",
  },
  baseURL: "/api/v1",
  port,
  database: {
    host: "localhost",
    user: "root",
    password: "test123*",
    database: "project-movie",
    port: 3306,
    type: "mysql",
    debug: false,
  },
  env: "development",
  cors: {
    origin: "*",
  },
};
