export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../chunks/pages/index_J27J_50-.mjs').then(n => n.a);

export { page };
