import ChatLayout from "@/components/chat/ChatLayout";
import PreferenceTab from "@/components/PreferenceTab";
import { cookies } from "next/headers";

const Home = () => {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  return (
    <div className=" h-screen flex flex-col  items-center py-10">
      {/* perference tab */}
      <PreferenceTab />
      {/* dotted bg */}
      <div
        className="absolute top-0 z-[-2] h-screen w-screen dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] 
				dark:bg-[size:20px_20px] bg-[#ffffff] bg-[radial-gradient(#00000033_1px,#ffffff_1px)] bg-[size:20px_20px]"
        aria-hidden="true"
      />
      <div>
        <ChatLayout defaultLayout={defaultLayout} />
      </div>
    </div>
  );
};
export default Home;
