import winston from 'winston';
import path from 'path';
import fs from 'fs';

const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

const date = new Date().toISOString().split('T')[0];
const errorLogFileName = path.join(logsDir, `${date}-error.log`);
const combinedLogFileName = path.join(logsDir, `${date}-combined.log`);

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { timestamp: new Date() },
  transports: [
    new winston.transports.File({
      filename: errorLogFileName,
      level: 'error',
    }),
    new winston.transports.File({ filename: combinedLogFileName }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.json(),
    }),
  );
}

export default logger;
