const routes = (handler) => [
  {
    method: 'POST',
    url: '/users',
    handler: handler.postUserHandler,
  },
  {
    method: 'GET',
    url: '/users/{id}',
    handler: handler.getUserById,
  },
];

module.exports = routes;
