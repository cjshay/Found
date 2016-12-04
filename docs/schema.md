# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
description     | string    | not null

## Stories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
content     | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed

## Comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
content     | text      | not null

## Follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key(references users), indexed
followee_id | integer   | not null, foreign key(references users), indexed

## Likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
comment_id  | integer   | not null, foreign key (references comments), indexed
story_id    | integer   | not null, foreign key (references story), indexed
