import { Link, useNavigate} from "react-router-dom";

const ModalOpen = () => {
  const nevigate=useNavigate();

  const handleChangePassword=(event)=>{
   
    event.preventDefault();
    const oldPass=event.target.old.value;
    // localStorage.setItem("oldpass",JSON.stringify(oldPass));
    // console.log('old pass',oldPass);
    const newPass=event.target.new.value;
    // localStorage.setItem("newpass",JSON.stringify(newPass));
    console.log('new pass',newPass);
    const confirmPass=event.target.confirm.value;
    // localStorage.setItem("confirmpass",JSON.stringify(confirmPass));
    // console.log(localStorage.getItem('confirmpass'));
    event.target.reset();
    window.alert('successfully changed password')
    nevigate('/');
  }
  return (
  <>
    <div className="bg-white p-4 w-2/3 mx-auto flex flex-col items-center justify-center ">  
    <div className="reltive">
      <form onSubmit={handleChangePassword}>
        <label className="font-bold mb-2" htmlFor="">Old Password</label>
        <input
          type="password"
          name="old"
          placeholder="******"
          required
          class="input bg-white outline-[0px] input-primary w-full mb-2"
        />
         <label className="font-bold mb-2" htmlFor="">New Password</label>
        <input
          type="password"
          name="new"
          placeholder="******"
          required
          class="input bg-white input-primary w-full mb-2"
        />
         <label className="font-bold mb-2" htmlFor="">Confirm Password</label>
        <input
          type="password"
          name="confirm"         
          placeholder="******"
          required
          class="input bg-white input-primary w-full mb-2"
        />
          <input type="submit" value="Save" className="btn btn-primary w-full"/>
      </form>
    </div>
  </div> 
  </>
  );
};

export default ModalOpen;
