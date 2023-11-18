import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('owners', (table) => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('phone_number').notNullable();
    table.string('address').notNullable();
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
  return knex.schema.dropTable('owners');
}
