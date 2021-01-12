enum Direction {
    top, bottom, left, right
}

console.log(Direction.top);// 0

enum response {
    No, Yes
}

function respond(recipient: string, message: response): void {
    console.log(recipient,message)
}

respond('recipient', response.Yes);