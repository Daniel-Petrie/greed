/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {auth0Id: '123', email: 'test@test.com', displayName: 'Daniel', chips: 5000, 
  },
  
    { auth0Id: '124', email: 'test@test.com', displayName: 'Shinnaye', chips: 7000, 
  },
  
    {auth0Id: '125', email: 'test@test.com', displayName: 'Ryan', chips: 1000, 
  },
    {auth0Id: '126', email: 'test@test.com', displayName: 'Ryan', chips: 1000, 
  },
  
  ]);
};
