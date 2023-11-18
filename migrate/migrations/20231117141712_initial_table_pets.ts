import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('pets', (table) => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.integer('age').notNullable();
    table.string('race').notNullable();
    table
      .uuid('owner_id')
      .notNullable()
      .references('id')
      .inTable('owners')
      .onDelete('CASCADE');
    table
      .timestamp('created_at', { useTz: true })
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .timestamp('updated_at', { useTz: true })
      .defaultTo(knex.fn.now())
      .notNullable();
    table.timestamp('deleted_at', { useTz: true });
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('pets');
}
