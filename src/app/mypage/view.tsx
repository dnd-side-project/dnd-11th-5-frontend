import { postSignOut } from "@/apis/auth/auth";

const MyPageView = () => {
  return (
    <form
      action={postSignOut}
      className="flex flex-wrap gap-4 bg-indigo-300 text-title-bold"
    >
      <button>Logout</button>
      <div className="h-[100px] w-full bg-primary-05"></div>
      <div className="h-[100px] w-full bg-primary-05"></div>
      <div className="h-[100px] w-full bg-primary-05"></div>
      <div className="h-[100px] w-full bg-primary-05"></div>
      <div className="h-[100px] w-full bg-primary-05"></div>
      <div className="h-[100px] w-full bg-primary-05"></div>
      <div className="h-[100px] w-full bg-primary-05"></div>
      <div className="h-[100px] w-full bg-primary-05"></div>
    </form>
  );
};

export default MyPageView;
