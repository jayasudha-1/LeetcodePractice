var findOrder = function(numCourses, prerequisites) {
    // Step 1: Create the graph and in-degree array
    let graph = new Array(numCourses).fill(0).map(() => []);
    let inDegree = new Array(numCourses).fill(0);
    
    // Step 2: Populate the graph and in-degree array
    for (let [course, prerequisite] of prerequisites) {
        graph[prerequisite].push(course); // Add edge
        inDegree[course]++; // Increase in-degree for dependent course
    }
    
    // Step 3: Initialize the queue with courses having no prerequisites
    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    // Step 4: Process the queue for topological sort
    let order = []; // Stores the final course order
    while (queue.length > 0) {
        let current = queue.shift(); // Process current course
        order.push(current); // Add it to the order
        
        // Reduce in-degree for dependent courses
        for (let nextCourse of graph[current]) {
            inDegree[nextCourse]--;
            if (inDegree[nextCourse] === 0) {
                queue.push(nextCourse); // Add to queue if no prerequisites remain
            }
        }
    }
    
    // Step 5: Verify if all courses have been taken
    return order.length === numCourses ? order : [];
};
