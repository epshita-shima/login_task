import React from "react";
import { Link } from "react-router-dom";

const NewPass = () => {
  return (
    <div>
      
        <form>
        <input type="password" placeholder="******" class="input input-bordered input-primary w-full mb-2" />
        <Link to='/dashboard'>
        <input type="submit" value="Login" />
        </Link>
        </form>
          
        
          
        
      
    </div>
  );
};

export default NewPass;
