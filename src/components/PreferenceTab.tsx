"use client";
import {
  MoonIcon,
  SpeakerLoudIcon,
  SpeakerOffIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import usePerference from "@/store/usePreference";
import { useSound } from "use-sound";
const PreferenceTab = () => {
  const { setTheme } = useTheme();
  const { setSoundEnable, soundEnable } = usePerference();
  const [playMouseClick] = useSound("/sounds/mouse-click.mp3");
  const [PlaySoundOn] = useSound("/sounds/sound-on.mp3");
  const [PlaySoundOff] = useSound("/sounds/sound-off.mp3");
  return (
    <div className="flex gap-2">
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => {
          setTheme("light");
          soundEnable && playMouseClick();
        }}
      >
        <SunIcon className="size-[1.2rem] text-muted-foreground" />
      </Button>
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => {
          setTheme("dark");
          soundEnable && playMouseClick();
        }}
      >
        <MoonIcon className="size-[1.2rem] text-muted-foreground" />
      </Button>
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => {
          setSoundEnable(!soundEnable);
          soundEnable ? PlaySoundOn() : PlaySoundOff();
        }}
      >
        {soundEnable ? (
          <SpeakerLoudIcon className="size-[1.2rem] text-muted-foreground" />
        ) : (
          <SpeakerOffIcon className="size-[1.2rem] text-muted-foreground" />
        )}
      </Button>
    </div>
  );
};
export default PreferenceTab;
