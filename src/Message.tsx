function Message() {
    const name = 'Siege';
    if (name)
        return <h1>Hello it's me {name} :D!</h1>;
    return <h1> Hello World! </h1>;
}

export default Message;