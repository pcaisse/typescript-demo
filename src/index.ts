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
