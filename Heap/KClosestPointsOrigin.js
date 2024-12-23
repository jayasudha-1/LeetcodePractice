var kClosest = function(points, k) {
    // Calculate the squared distance of a point from the origin
    const distance = (point) => point[0] * point[0] + point[1] * point[1];
    
    // Sort points based on their squared distance from the origin
    points.sort((a, b) => distance(a) - distance(b));
    
    // Return the first k points
    return points.slice(0, k);
};


var kClosest = function(points, k) {
    // Calculate squared distance from origin
    const distance = (point) => point[0] * point[0] + point[1] * point[1];
    
    // Use a Min-Heap (Priority Queue)
    const minHeap = new MinPriorityQueue({ priority: (point) => distance(point) });
    
    // Add all points to the Min-Heap
    for (let point of points) {
        minHeap.enqueue(point);
    }
    
    // Extract k closest points
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(minHeap.dequeue().element);
    }
    
    return result;
};


var kClosest = function(points, k) {
    // Calculate squared distance from origin
    const distance = (point) => point[0] * point[0] + point[1] * point[1];
    
    // Use a Min-Heap (Priority Queue)
    const minHeap = new MinPriorityQueue({ priority: (point) => distance(point) });
    
    // Add all points to the Min-Heap
    for (let point of points) {
        minHeap.enqueue(point);
    }
    
    // Extract k closest points
const result = [];
let count = 0;
while (count < k) {
    result.push(minHeap.dequeue().element);
    count++;
}
return result;
}
