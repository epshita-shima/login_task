import { Link } from "react-router-dom";
import NewPass from "./NewPass";

const ModalOpen = () => {

  const handleChangePassword=(event)=>{
    event.preventDefault();
    const oldPass=event.target.old.value;
    console.log(oldPass)
  }
  return (
    <div className="bg-white p-4 w-2/3 mx-auto flex flex-col items-center justify-center ">
      {/* using modal */}

      {/* <input type="checkbox" id="my-modal-3" class="modal-toggle " />
        <div class="modal ">
          <div class="modal-box relative">
            <input type="password" placeholder="******" class="input input-bordered input-primary w-full mb-2 outline-none" />
            <input type="password" placeholder="******" class="input input-bordered input-primary w-full mb-2" />
           <label
              for="my-modal-3"
              class="input input-primary  w-full"
            >
              Save
            </label>
 
          </div>
        </div> */}

      <div className="reltive">
        <form onSubmit={handleChangePassword}>
          <label className="font-bold mb-2" htmlFor="">Old Password</label>
          <input
            type="password"
            name="old"
            placeholder="******"
            class="input bg-white outline-[0px] input-primary w-full mb-2"
          />
           <label className="font-bold mb-2" htmlFor="">New Password</label>
          <input
            type="password"
            name="new"
            placeholder="******"
            class="input bg-white input-primary w-full mb-2"
          />
           <label className="font-bold mb-2" htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="new"
            placeholder="******"
            class="input bg-white input-primary w-full mb-2"
          />
          <Link to="/">
            <input type="submit" value="Save" className="btn btn-primary w-full"/>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ModalOpen;
