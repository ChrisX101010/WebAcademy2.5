import random
import os
import time

brojevi = "0123456789"
simon = ""
tacno = 0

for rezultat in range(0, 10):
    simon += random.choice(brojevi)
    for broj in simon:
        print("Simon kaze: " + broj)
        time.sleep(1.5)
        os.system("cls")
    time.sleep(0.5)
    pogodi = input("Ponovi: ")
    os.system("cls")
    if pogodi != simon:
        print("Igra je zavrsena! Tvoj rezultat je", tacno)
        break
    elif len(pogodi) == len(simon) and pogodi == simon:
        tacno += 1
        if tacno == 10:
            print("Pobedio si! Tvoj rezultat je", tacno)
            break
