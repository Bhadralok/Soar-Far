import { MdArrowBack, MdArrowForward } from "react-icons/md";

export default function Button({ children, isButton = true, type = "login" }) {
  const styles = {
    login:
      "bg-white border-2 border-primary-blue outline-primary-blue hover:outline-3 text-[0.981rem] cursor-pointer rounded-2xl font-medium w-[6.506rem] h-[2.913rem] py-5 px-2 flex items-center justify-center",
    signUp:
      "bg-primary-blue outline-black hover:outline-3 rounded-2xl text-[0.981rem] w-[6.506rem] h-[2.913rem] cursor-pointer py-5 px-2 font-medium flex items-center justify-center",
    bookNow:
      "bg-primary-blue rounded-2xl outline-black hover:outline-3 text-[0.981rem] w-[6.906rem] h-[2.913rem] cursor-pointer py-5 font-semibold flex items-center justify-center",
    getStarted:
      "px-2 py-4 w-[14.563rem] outline-black hover:outline-3 rounded-2xl text-2xl font-semibold cursor-pointer h-[3.938rem] bg-primary-blue text-secondary-blue",
  };

  return (
    <div>
      {isButton ? (
        <button className={`${styles[type]}`}>{children}</button>
      ) : (
        <div className="flex items-center space-x-2">7746
          <button className="size-15 flex items-center cursor-pointer justify-center white rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
            <MdArrowBack size={20} />
          </button>
          <button className="size-15 flex items-center cursor-pointer justify-center bg-primary-blue rounded-full shadow-[0_8px_20px_rgba(0,238,255,1)]">
            <MdArrowForward size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
