# Database Setup Guide

Since you don't have Docker installed, the easiest way to get a PostgreSQL database is to use a free cloud provider. We recommend **Neon** or **Supabase**.

## Option 1: Neon (Recommended)

1.  Go to [Neon.tech](https://neon.tech/) and sign up.
2.  Create a new project (e.g., named `scribe-app`).
3.  Once created, you will see a **Connection String** on the dashboard.
4.  It will look like this: `postgres://neondb_owner:AbC123...@ep-cool-frog-123456.us-east-2.aws.neon.tech/neondb?sslmode=require`
5.  **Copy this string.**

## Option 2: Supabase

1.  Go to [Supabase.com](https://supabase.com/) and create a project.
2.  Go to **Project Settings** -> **Database**.
3.  Scroll down to **Connection String** and select **Node.js** or **URI**.
4.  Copy the connection string. *Note: You will need to replace `[YOUR-PASSWORD]` with the password you created.*

## Next Steps

1.  Open the file `server/.env` in this project.
2.  Replace the `DATABASE_URL` value with your new connection string.
    ```env
    DATABASE_URL="postgres://..."
    ```
3.  Run the migration command to create the tables:
    ```bash
    cd server
    npm run db:push
    ```
