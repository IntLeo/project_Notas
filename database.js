import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('notas.db');

export const initDB = () => {
  db.transaction(tx => {
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS notas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT,
        categoria TEXT,
        conteudo TEXT
      );
    `);
  });
};

export default db;
