import { CAMERA_ICON } from "@/components/icons";

export default function Home() {
  return (
    <main className="text-2xl flex flex-wrap gap-4 bg-indigo-300">
      <div className="h-[100px] w-full bg-red-200"></div>
      <div>
        <CAMERA_ICON
          className="text-2xl text-green-500"
          width={50}
          height={50}
        />
      </div>
      <div className="h-[100px] w-full bg-red-200"></div>
      <div className="h-[100px] w-full bg-red-200"></div>
      <div className="h-[100px] w-full bg-red-200"></div>
      <div className="h-[100px] w-full bg-red-200"></div>
      <div className="h-[100px] w-full bg-red-200"></div>
      <div className="h-[100px] w-full bg-red-200"></div>
    </main>
  );
}
