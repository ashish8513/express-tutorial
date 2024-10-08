class Node {
    constructor(data) {
        this.data = data;   // Store the data
        this.next = null;   // Initialize the next pointer to null
    }
}


class LinkedList {
    constructor() {
        this.head = null;  // The head node (starting point) of the list
    }

    // Method to add a node at the end of the list
    append(data) {
        const newNode = new Node(data);

        // If the list is empty, make the new node the head
        if (this.head === null) {
            this.head = newNode;
        } else {
            // Traverse to the end of the list
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            // Add the new node at the end
            current.next = newNode;
        }
    }

    // Method to print the list
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);  // Print the data of each node
            current = current.next;     // Move to the next node
        }
    }
}
const list = new LinkedList();

// Append some nodes to the list
list.append(10);
list.append(20);
list.append(30);

// Print the list
list.printList();  // Output: 10 20 30

