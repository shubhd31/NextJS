function User({user}) {
    return (
        <div id={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    )
}

export default User