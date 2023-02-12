#!/usr/bin/env python3
import mysql.connector as sql

con = sql.connect(user="erik", password="321null", host="localhost", database="words")

cursor = con.cursor()

with open("textFiles/amEnglish.txt", "r") as f:
    lines = f.readlines()

for line in lines:
    line = line.strip().capitalize()
    cursor.execute(f"INSERT words3 VALUES(NULL, '{line}')")

con.commit()
cursor.close()
con.close()


