const AVERAGE_P = document.getElementById("average-length")
const chip_inputs = [
    document.getElementById("chip-0"),
    document.getElementById("chip-1"),
    document.getElementById("chip-2"),
    document.getElementById("chip-3"),
    document.getElementById("chip-4"),
    document.getElementById("chip-5"),
    document.getElementById("chip-6"),
    document.getElementById("chip-7"),
    document.getElementById("chip-8"),
    document.getElementById("chip-9"),
    document.getElementById("chip-10"),
    document.getElementById("chip-11"),
    document.getElementById("chip-12"),
    document.getElementById("chip-13"),
    document.getElementById("chip-14")
]

let chips = [4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9];
let chips_left = [];

let rolls = [];

let game_lengths = [];;

window.onload = start;

function start() {
    update_chip_inputs()
}

function set_chip(index) {
    chips[index] = parseInt(chip_inputs[index].value)
}

function update_chip_inputs() {
    chips.sort((a, b) => a - b)

    for(let i = 0; i < chips.length; i++) {
        chip_inputs[i].value = chips[i]
    }
}

function average(nums) {
    let total = 0;
    
    for(let i = 0; i < nums.length; i++)
    {
        total += nums[i]
    }

    return total / nums.length
}

function play_games(number) {
    for(let i = 0; i < number; i++)
    {
        play_game()
    }
}

function play_game() {
    update_chip_inputs()

    for(let i = 0; i < chips.length; i++) {
        chips_left.push(chips[i]);
    }

    while(chips_left.length > 0) {
        //console.log(rolls.length);
        
        roll_dice();
    }

    game_lengths.push(rolls.length)

    rolls = []

    AVERAGE_P.innerHTML = `Average Length: ${average(game_lengths)}`
}

function roll_dice() {
    let result = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);

    rolls.push(result);

    if(chips_left.includes(result)) {
        chips_left.splice(chips_left.indexOf(result), 1);
    }
}