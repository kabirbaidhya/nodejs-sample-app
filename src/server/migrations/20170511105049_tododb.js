
exports.up = function (knex, Promise) {
    console.log('Creating todo table');
    return knex.schema.createTableIfNotExists('todo', function (table) {
        table.increments('id').primary().unsigned();
        table.string('title').notNullable();
        table.string('description').default(null);
        table.bool('completed').default(false);
        table.timestamp('recorded_at').notNullable().defaultTo(knex.raw('now()'));
    });
};

exports.down = function (knex, Promise) {
    console.log('Dropping todo');
    return knex.schema.dropTableIfExists('todo').then(function () {
        console.log('Todo table was dropped');
    });
};
