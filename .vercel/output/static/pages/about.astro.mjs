export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../chunks/pages/about_By3pWU_7.mjs').then(n => n.b);

export { page };
