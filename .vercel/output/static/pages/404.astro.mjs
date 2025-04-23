export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../chunks/pages/404_2H4Te3PH.mjs').then(n => n._);

export { page };
