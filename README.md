# Simple Chat App

Very simple chat app made with the node http module and sqlite3.

## Architecture

The nodejs backend will receive requests from the frontend in the browser to update the sqlite3 database.
Autoreload will be available in the browser fetching all the messages again after a new message is written to the database.