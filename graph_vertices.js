var solution = function(N, A, B){
    let vertices_map = new Map();
    let vertices_order = [];
    let highestNumberOfEdges = -1;

    for (let i = 1; i <= N; i++)
        vertices_map.set(i, 0);

    for (let i = 0; i < A.length; i++){
        vertices_map.set(A[i], Number(vertices_map.get(A[i]) + 1));
        vertices_map.set(B[i], Number(vertices_map.get(B[i]) + 1));
    }
    
    for (let vertices of vertices_map.values()){
        if (vertices > highestNumberOfEdges){
            highestNumberOfEdges = vertices;
        }
    }

    while(vertices_map.size !== 0){
        for (let vertices of vertices_map){
            if (vertices[1] === highestNumberOfEdges){
                vertices_order.push(vertices[0]);
                vertices_map.delete(vertices[0]);
            }
        }
        highestNumberOfEdges--;
    }
    return vertices_order;
}

console.log(solution(5, [2, 2, 1, 2], [1, 3, 4, 4]));