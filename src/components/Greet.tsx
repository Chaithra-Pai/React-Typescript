type GreetProps = {
    name: string
    msgcount: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn ? `Hello ${props.name}!! You have ${props.msgcount} unread messages` : "Welcome Guest"
                }
            </h2>
        </div>
    )
}