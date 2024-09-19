import { USERS } from "@/db/dummy";
import { ScrollArea } from "./ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface sideBarProps {
  isCollapsed: boolean;
}

const SideBar = ({ isCollapsed }: sideBarProps) => {
  const selectedUser = USERS[0];
  return (
    <div className=" group relative flex flex-col h-full gap-4 p-2 data-[collapsed=true]:p-2 max-h-full overflow-auto bg-background">
      {!isCollapsed && (
        <div className="flex justify-between items-center p-2">
          <div className="flex items-center gap-2 text-2xl">
            <p>Chats</p>
          </div>
        </div>
      )}
      <ScrollArea className="gap-2 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=truw]]:px-2 ">
        {USERS.map((user, id) =>
          isCollapsed ? (
            <TooltipProvider delayDuration={0} key={id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="cursor-pointer">
                    <Avatar className="my-2 flex justify-center items-center">
                      <AvatarImage src={user.image} />
                      {/* <AvatarFallback>{user.name[0]}</AvatarFallback> */}
                    </Avatar>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="" side="right">
                  <p>{user.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <></>
          )
        )}
      </ScrollArea>
    </div>
  );
};
export default SideBar;
