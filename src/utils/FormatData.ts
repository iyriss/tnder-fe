export interface DataType {
  x: number;
  y: number;
  r: number;
}

class linked_node {
  public x: number;
  public y: number;
  public r: number;
  public sum: number;
  public next: linked_node | null;

  constructor(x: number, y: number, r: number) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.sum = x + y;
    this.next = null;
  }
}

function create_linked_list(data: DataType[]) {
  const sortedList = data.sort((a, b) => a.x + b.x - (a.y + b.y));
  const linked_list = new linked_node(0, 0, 0);
  let current = linked_list;
  for (let i = 0; i < data.length; i++) {
    const node = new linked_node(data[i].x, data[i].y, data[i].r);
    current.next = node;
    current = node;
  }
  return linked_list;
}

function create_bubble_data(head: linked_node) {
  const data = [];
  let current: linked_node | null = head;
  let currentNode = null;
  while (current) {
    let high = current.next ? current.next.sum + 50 : 999999;
    if (!current.next) {
      // Tail node
      data.push({ x: current.x, y: current.y, r: current.r, color: "blue" });
    }

    // Increase the radius of the node
    if (current.sum < high) {
      let iterative_node = {
        x: current.x,
        y: current.y,
        r: current.r * 2,
        color: "blue",
      };
      currentNode = iterative_node;
    } else {
      // If radius doesn't need to be increased, then add the node to the data
      if (currentNode) {
        data.push(currentNode);
        currentNode = null;
      } else {
        // If the node is not an iterative node, then add it to the data
        data.push({ x: current.x, y: current.y, r: current.r, color: "blue" });
      }
    }
    current = current.next;
  }
  return data;
}

export default function format_data(vertices: DataType[]): DataType[] {
  const linked_list = create_linked_list(vertices);
  return create_bubble_data(linked_list);
}
