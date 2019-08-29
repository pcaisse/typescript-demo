function add(x: number, y: number) {
  return x + y;
}

console.log(add(1, 1));

interface Message {
  yell: boolean;
  text: string;
}

function formatMessage(msg: Message) {
  return msg.yell ? msg.text.toUpperCase() : msg.text;
}

// @ts-ignore
console.log(formatMessage({ text: "Hello!" }));
