import { create } from "zustand";
interface usePerferenceType {
  soundEnable: boolean;
  setSoundEnable: (soundEnble: boolean) => void;
}
const usePerference = create<usePerferenceType>((set) => ({
  soundEnable: true,
  setSoundEnable: (soundEnable: boolean) => set({ soundEnable }),
}));
export default usePerference;
