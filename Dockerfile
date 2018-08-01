FROM node:6.11.5

COPY ./ /knex-poc

RUN node /knex-poc/setup-sqlite3.js

CMD ["node", "/knex-poc/test-select-heap-sqlite3.js"]