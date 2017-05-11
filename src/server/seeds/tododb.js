
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      // Inserts seed entries
      return knex('todo').insert([
          {title: 'Learn Javascript Basics', completed: 'true'},
          {title: 'Learn Angular', completed: 'true'},
          {title: 'Learn Webpack', completed: 'false'},
          {title: 'Learn ES6+ features', completed: 'false'}
      ]);
    });
};
