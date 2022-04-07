import User from '../../components/user'

function Users ({ users }) {
    return ( <>  
     <h1>User List</h1>
     { users.map((user) => {
         return(
             <div key={user.id}>
              <User user={user}/>
             </div>                                                                                                                                                                                                             
         )
     })
}
</>
    )
}

export default Users

export async function getStaticProps () {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        

    return{
        props : {
            users: data
        }
    }
}