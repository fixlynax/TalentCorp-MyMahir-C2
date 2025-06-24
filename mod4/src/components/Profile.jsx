function Profile({name, title, imageUrl}){

    const profileStyle = {
        border: "1px solid black",
        padding: "10px",
        width: "350px",
        margin: "30px auto"
    }

    const placeholderUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh5WFH8TOIfRKxUrIgJZoDCs1yvQ4hIcppw&s"
    return(
        <div style={profileStyle}>
            <img width={300} src={imageUrl || placeholderUrl} alt="Placeholder of an image" />
            <h4>{name}</h4>
            <p>{title}</p>
        </div>
    )
}

export default Profile