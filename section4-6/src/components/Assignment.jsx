import { useParams } from "react-router-dom"

function Assignment(){
    const { username } = useParams();

    return (
        <div>
            <h1>Hello, {username}</h1>
        </div>
    )
}

export default Assignment