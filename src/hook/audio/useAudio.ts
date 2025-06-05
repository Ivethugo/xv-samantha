import { create } from "zustand";

interface AudioProps {
  isPlay: boolean;
  isReady: boolean;
  setIsPlay: (val: boolean) => void;
  setIsReady: (val: boolean) => void;
}

export const useAudio = create<AudioProps>((set) => ({
  isPlay: false,
  isReady: false,
  setIsPlay: (val: boolean) => set(() => ({ isPlay: val })),
  setIsReady: (val: boolean) => set(() => ({ isReady: val })),
}));
