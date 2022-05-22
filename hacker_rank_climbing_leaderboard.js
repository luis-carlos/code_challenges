var leader_board = () => {
    
    let ranked = [];
    let player = [];
    let top_ranks = [];
    let alice_ranks = [];

    
    let number_of_ranks = random_number(100);
    for (let i = 0; i < number_of_ranks; i++){
        ranked[i] = random_number(100);
    }
    ranked.sort((a, b) => b - a);
    console.log(ranked);

    let number_of_player = random_number(10);
    for (let i = 0; i < number_of_player; i++){
        player[i] = random_number(100);
    }
    console.log(player);

    
    top_ranks[0] = 1;

    for (let i = 1; i < ranked.length; i++){
        if (ranked[i] === ranked[i - 1])
            top_ranks[i] = top_ranks[i - 1];
        else
            top_ranks[i] = top_ranks[i - 1] + 1;
    }
    // console.log(ranks);

    for (let i = 0; i < player.length; i++){
        if (player[i] > ranked[0])
            alice_ranks[i] = 1;
        else if (player[i] < ranked[ranked.length - 1])
            alice_ranks[i] = top_ranks[top_ranks.length - 1] + 1;
        else
            alice_ranks[i] = top_ranks[binary_search(ranked, player[i])];
    }

    console.log(alice_ranks);
}

var binary_search = (ranked_array, game_value) => {
    let left = 0;
    let right = ranked_array.length - 1;

    while (left <= right){
        let mid = Math.floor((left + right)/2);
        if (game_value == ranked_array[mid])
            return mid;
        else if (game_value < ranked_array[mid] && game_value > ranked_array[mid + 1])
            return mid + 1;
        else if (game_value < ranked_array[mid])
            left = mid + 1;
        else 
            right = mid - 1;   
    }

}

var random_values = () => {
    let number_of_rankings = random_number(50);
    let rankings = [];
    console.log(number_of_rankings);
    for (let i = 0; i < number_of_rankings; i++){
        rankings[i] = random_number(100);
    }
    console.log(rankings.sort((a, b) => b - a));
}

var random_number = (limit) => {
    return Math.floor((Math.random() * limit)) + 1;
}


leader_board();
