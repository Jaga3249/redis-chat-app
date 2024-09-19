import { Button } from "@/components/ui/button";

const AuthButtons = () => {
  return (
    <div className="flex gap-3">
      <Button className="flex-1" variant={"outline"}>
        Signup
      </Button>
      <Button className="flex-1 ">Login</Button>
    </div>
  );
};
export default AuthButtons;
