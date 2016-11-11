import expressListRoutes from 'express-list-routes';
import routes from './../../src/server/routes';

console.log('API Routes');
console.log('----------------------------------');
expressListRoutes({ prefix: '/api' }, null, routes);
console.log('----------------------------------');
