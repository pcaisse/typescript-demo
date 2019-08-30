import R from "ramda";

function add(x: number, y: number) {
  return x + y;
}

console.log(add(1, 1));

interface Message {
  yell: boolean;
  text: string;
}

const formatMessage = (msg: Message) =>
  msg.yell ? msg.text.toUpperCase() : msg.text;

console.log(formatMessage({ yell: true, text: "Hello!" }));

interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.width * s.height;
    case "circle":
      return Math.PI * s.radius * s.radius;
    default:
      const _exhaustiveCheck: never = s;
      return _exhaustiveCheck;
  }
}

console.log(area({ kind: "circle", radius: 4 }));

interface LengthWise {
  length: number;
}

function logLength<T extends LengthWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength([1, 2, 3]);
logLength("heyo");
logLength(console.log);

console.log(R.add(1, 3));
