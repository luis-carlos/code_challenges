var solution = function(cars){
    let features_length = cars[0].length;
    let cars_comparison = [];
    // console.log(features_length);
    for (let i = 0; i < cars.length; i++){
        let temp_similar_cars = 0;
        for (let j = 0; j < cars.length; j++){
            let pair_features_diff = 0;
            if (i === j)
                continue;
            console.log(`Compare ${cars[i]} to ${cars[j]}`);
            for (let k = 0; k < features_length; k++){
                if (pair_features_diff >=2){
                    console.log("Stop comparing");
                    break;
                }
                console.log(`Compare ${cars[i][k]} to ${cars[j][k]}`);
                if (cars[i][k].localeCompare(cars[j][k]) !== 0){
                    pair_features_diff++;
                    console.log("Different feature");
                }
            }
            // console.log("Different features: ", pair_features_diff);
            if (pair_features_diff <= 1)
                temp_similar_cars++;
        }
        // console.log(`This car has ${temp_similar_cars} similar cars`);
        cars_comparison.push(temp_similar_cars);
    }
    return cars_comparison;
        
}

console.log(solution(["0011","0111","0111","0110","0000"])); // Answer is [ 2, 3, 3, 2, 0 ]