import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Style from '../css/create_user.module.css';

export const Update_user = () => {
  const { id } = useParams();
  const [data, setdata] = useState({});
  const [error, seterror] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(`http://localhost:5000/edit/${id}`);
        if (!response.ok) {
          throw new Error(`HTTPS Error! Status ${response.status}`);
        }
        const result = await response.json();
        setdata(result);
      } catch (error) {
        seterror(error.message);
      }
    };
    fetchdata();
  }, [id]);

  if (error) {
    return <p className="Error">Error: {error}</p>;
  }


  
  return (
    <>
      <div className={`${Style.container}`}>
        <Link to="/read">Check Users</Link>
        <h1 className={`${Style.main_heading}`}>Update User</h1>
        <div className="create_users">
          <form action={`http://localhost:5000/update/${id}`} method="POST">
          <div className={`${Style.userbox}`}>
            <input
                type="text"
                className="name"
                name="name"
                value={data.name || ""}
                onChange={(e)=>setdata({...data,"name":e.target.value})}
              />
            <label>Name:</label>
          </div>

          <div className={`${Style.userbox}`}>
            <input
                type="email"
                className="email"
                name="email"
                value={data.email || ""}
                onChange={(e)=>setdata({...data,"email":e.target.value})}
              />
            <label>Email:</label>            
          </div>

          <div className={`${Style.userbox}`}>
            <input
                type="url"
                className="image"
                name="image"
                value={data.image || ""}
                onChange={(e)=>setdata({...data,"image":e.target.value})}
              />
              <label>Image URL</label>            
            </div>  
            
            <input type="submit" className={`${Style.btn}`} value="Update" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Update_user;