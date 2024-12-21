import Style from '../css/create_user.module.css'
import {Link} from 'react-router-dom'
export const Create_user=()=>{
    return(
        <>
        <div className={`${Style.container}`}>
        <Link to="/read">Check Users</Link>
        <h1 className={`${Style.main_heading}`}>Create Users</h1>
        <div className="create_users">
            <form action="http://localhost:5000/create" method="post">
                <div className={`${Style.userbox}`}>
                    <input type="text" className="name" name="name" required/>
                    <label>Username: </label>
                </div>

                <div className={`${Style.userbox}`}>
                    <input type="email" className="email" name="email" required/>
                    <label>Email: </label>
                </div>

                <div className={`${Style.userbox}`}>
                    <input type="url" className="image" name="image" required/>
                    <label>Image URL:</label>
                </div>
                    
                <input type="submit" className={`${Style.btn}`} value="Create"/>
            </form>
        </div>
    </div>
        </>
    )
}
export default Create_user;