import sqlite3 from "sqlite3"
import { open } from "sqlite"

let db

export async function getDB() {
  if (!db) {
    db = await open({
      filename: "./database.db",
      driver: sqlite3.Database
    })

    await db.exec(`
      CREATE TABLE IF NOT EXISTS dishes(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        image TEXT
      )
    `)

    await db.exec(`
      CREATE TABLE IF NOT EXISTS settings(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        homepage_background TEXT
      )
    `)
  }

  return db
}
