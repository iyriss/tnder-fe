export interface DataType {
  x: number;
  y: number;
  r: number;
}

export interface BubbleData {
  x: number;
  y: number;
  r: number;
  color: string;
}

//  Is now O(2nlogn)

const sort_list = (data: DataType[]) => {
  return data.sort((a, b) => {
    return a.x + a.y > b.x + b.y ? -1 : 1;
  });
};

function create_bubble_data_array(data: DataType[]) {
  let finalData = [];
  let iterative_node: null | BubbleData = null;

  for (let i = 0; i < data.length; i++) {
    const next = data[i + 1];
    const sum = data[i].x + data[i].y;
    const high = next ? next.x + next.y + 5 : 999999;

    // Tail node
    if (!next) {
      finalData.push({
        x: data[i].x,
        y: data[i].y,
        r: data[i].r,
        color: "blue",
      });
    }

    // Increase the radius of the node
    if (sum < high) {
      if (iterative_node) {
        iterative_node.r = iterative_node.r + 2;
      } else {
        iterative_node = {
          x: data[i].x,
          y: data[i].y,
          r: data[i].r + 2,
          color: "blue",
        };
      }
    } else {
      // If radius doesn't need to be increased, then add the node to the data
      if (iterative_node) {
        finalData.push(iterative_node);
        iterative_node = null;
      } else {
        // If the node is not an iterative node, then add it to the data
        finalData.push({
          x: data[i].x,
          y: data[i].y,
          r: data[i].r,
          color: "blue",
        });
      }
    }
  }
  return finalData;
}

export default function format_data(vertices: DataType[]): BubbleData[] {
  return create_bubble_data_array(sort_list(vertices));
}

/**
 *
 * Linked List version
 * Seems easier to understand, but slower
 * Array version takes one O(n) off the overall run time
 * O(3nlogn)
 */

// class linked_node {
//   public x: number;
//   public y: number;
//   public r: number;
//   public sum: number;
//   public next: linked_node | null;

//   constructor(x: number, y: number, r: number) {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//     this.sum = x + y;
//     this.next = null;
//   }
// }

// function create_linked_list(data: DataType[]) {
//   const sortedList = data.sort((a, b) => {
//     return a.x + a.y > b.x + b.y ? -1 : 1;
//   });
//   const linked_list = new linked_node(0, 0, 0);
//   let current = linked_list;
//   for (let i = 0; i < sortedList.length; i++) {
//     const node = new linked_node(
//       sortedList[i].x,
//       sortedList[i].y,
//       sortedList[i].r
//     );
//     current.next = node;
//     current = node;
//   }
//   return linked_list;
// }

// function create_bubble_data(head: linked_node) {
//   const data = [];
//   let current: linked_node | null = head;
//   let currentNode = null;
//   while (current) {
//     let high = current.next ? current.next.sum + 50 : 999999;
//     if (!current.next) {
//       // Tail node
//       data.push({ x: current.x, y: current.y, r: current.r, color: "blue" });
//     }

//     // Increase the radius of the node
//     if (current.sum < high) {
//       if (currentNode) {
//         currentNode.r = currentNode.r + 5;
//       } else {
//         currentNode = {
//           x: current.x,
//           y: current.y,
//           r: current.r * 2,
//           color: "blue",
//         };
//       }
//     } else {
//       // If radius doesn't need to be increased, then add the node to the data
//       if (currentNode) {
//         data.push(currentNode);
//         currentNode = null;
//       } else {
//         // If the node is not an iterative node, then add it to the data
//         data.push({ x: current.x, y: current.y, r: current.r, color: "blue" });
//       }
//     }
//     current = current.next;
//   }
//   return data;
// }

// export default function format_data(vertices: DataType[]): DataType[] {
//   const linked_list = create_linked_list(vertices);
//   return create_bubble_data(linked_list);
// }
