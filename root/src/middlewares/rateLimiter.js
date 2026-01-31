import rateLimit from 'express-rate-limit';
export const createVAhicleLimiter = rateLimit({
    windowMs: 60*1000,
    max :3
});