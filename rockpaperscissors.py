import random

player = 0
cpu = 0

print("Three points win the game!")

while player < 3 and cpu < 3:
    cpu_choice = random.choice(["rock", "paper", "scissors"])
    player_choice = input("Rock, Paper, or Scissors: ")

    print(f"CPU: {cpu_choice} VS Player: {player_choice}")
    
    if player_choice.lower() == cpu_choice:
        print("Tie! No points!")
    elif player_choice.lower() == "rock":
        if cpu_choice == "scissors":
            player += 1
            print("Player wins! One point!")
        elif cpu_choice == "paper":
            cpu += 1
            print("CPU wins! One point!")
    elif player_choice.lower() == "scissors":
        if cpu_choice == "paper":
            player += 1
            print("Player wins! One point!")
        elif cpu_choice == "rock":
            cpu += 1
            print("CPU wins! One point!")  
    elif player_choice.lower() == "paper":
        if cpu_choice == "rock":
            player += 1
            print("Player wins! One point!")
        elif cpu_choice == "scissors":
            cpu += 1
            print("CPU wins! One point!")
    else:
        print("Invalid input! New round!") 

print("Player wins!" if player > cpu else "CPU wins!")

