#!/usr/bin/env python3
import mysql.connector as sql

con = sql.connect(user="erik", password="geheim", host="localhost", database="misc")

cursor = con.cursor()

comments = [];

with open("../textFiles/hey.txt", "r") as f:
    hey_lines = f.readlines()

for line in hey_lines:
    comments.append([line.strip()])

with open("../textFiles/mies.txt","r") as f:
    mies_lines = f.readlines()

i = 0;
for line in mies_lines:
    comments[i].append(line.strip());
    i += 1


with open("../textFiles/jut.txt","r") as f:
    jut_lines = f.readlines()

i = 0;
for line in jut_lines:
    comments[i].append(line.strip());
    i += 1

print(comments);
for comment in comments:
    greeting = comment[0]
    tadel = comment[1]
    lob = comment[2]

    cursor.execute(f"INSERT comments VALUES(NULL, '{greeting}', '{tadel}', '{lob}')")

con.commit()
cursor.close()
con.close()


