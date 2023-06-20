// You are given an m x n matrix of square spaces and each of these spaces can have 3 possible values
// -1: Represents a water body which you cannot travel through.
// 0: Represents a door.
// int_max: Represents an empty space.
//
// Return the distance from the top leftmost empty space to the closest door.
//
// Assume that the maximum distance between this space and door is less than int_max
//
//
//
// Example:
//
// Input
//
// [[ int_max  -1     0      int_max]
//  [ int_max int_max int_max   -1   ]
//  [ int_max int_max int_max   -1   ]
//  [   0        -1   int_max int_max]]
//
// Each cell of this matrix represents a square space.
// Output:
//
// 3