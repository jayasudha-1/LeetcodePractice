var canFinish = function(numCourses, prerequisites) {
    // Step 1: Create an adjacency list to represent the course graph
    let graph = new Array(numCourses).fill(0).map(() => []);

    // Step 2: Create an array to track the in-degree of each node (course)
    let inDegree = new Array(numCourses).fill(0);
    
    // Step 3: Populate the graph and in-degree array using prerequisites
    for (let [course, prerequisite] of prerequisites) {
        graph[prerequisite].push(course);
        inDegree[course]++;
    }
   
    // Step 4: Initialize a queue to process courses with no prerequisites
    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    // Step 5: Process courses in topological order
    let count = 0; // Count how many courses we can take
    while (queue.length > 0) {
        let current = queue.shift(); // Remove the first course from the queue
        count++;

        // Step 6: Update the in-degree of dependent courses
        for (let nextCourse of graph[current]) {
            inDegree[nextCourse]--;
            if (inDegree[nextCourse] === 0) {
                queue.push(nextCourse);
            }
        }
        
    }

    // Step 7: Check if all courses have been taken
    return count === numCourses;
};


// Full Explanation: 
    // Each course is represented as a node. The graph is an array of arrays.
    // graph[i] will store a list of courses that depend on course 'i'.

// Explanation: 
    // inDegree[i] represents the number of prerequisites for course 'i'.
    // If a course has in-degree 0, it means it can be taken immediately.
 // Explanation:
    // For every prerequisite pair [course, prerequisite], 
    // we add 'course' to the adjacency list of 'prerequisite'.
    // We also increment the in-degree of 'course'.
    // Example: prerequisites = [[1,0]]
    // graph becomes: [[1], []]
    // inDegree becomes: [0, 1]

/*
Example 2: prerequisites = [[1,0], [2,0], [3,1], [3,2]]
Step 1: Initial State
numCourses = 4 → graph = [[], [], [], []], inDegree = [0, 0, 0, 0]
Step 2: Process Each Prerequisite
[1,0]

graph[0].push(1) → graph = [[1], [], [], []]
inDegree[1]++ → inDegree = [0, 1, 0, 0]
[2,0]

graph[0].push(2) → graph = [[1, 2], [], [], []]
inDegree[2]++ → inDegree = [0, 1, 1, 0]
[3,1]

graph[1].push(3) → graph = [[1, 2], [3], [], []]
inDegree[3]++ → inDegree = [0, 1, 1, 1]
[3,2]

graph[2].push(3) → graph = [[1, 2], [3], [3], []]
inDegree[3]++ → inDegree = [0, 1, 1, 2]

graph = [[1, 2], [3], [3], []]
inDegree = [0, 1, 1, 2]

Explanation
Graph:

Course 1 and 2 depend on 0: 0 → 1, 0 → 2
Course 3 depends on 1 and 2: 1 → 3, 2 → 3
In-degree:

Course 0: No prerequisites → 0
Course 1: One prerequisite (0) → 1
Course 2: One prerequisite (0) → 1
Course 3: Two prerequisites (1, 2) → 2
*/

// Explanation:
    // Courses with in-degree 0 have no prerequisites and can be taken immediately.
    // These courses are added to the queue.

// Explanation:
        // Each time we take a course, we increment the count.
        // This represents one course being successfully completed.

// Explanation:
        // For each course that depends on 'current', reduce its in-degree by 1.
        // If the in-degree of a course becomes 0, add it to the queue.
// Explanation:
    // If we were able to process all the courses, return true.
    // Otherwise, return false, indicating a cycle exists in the graph.
