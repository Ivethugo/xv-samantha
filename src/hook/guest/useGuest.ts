import { create } from "zustand";
import { guests } from "../../services/guest/guests";

interface GuetsProps {
  code: string;
  name: string;
  tickets: number;
}

const getCodeFromURL = (): string => {
  const params = new URLSearchParams(window.location.search);
  return params.get("code") || "";
};

const getGuestByCode = (code: string) => {
  return (
    guests.find((guest) => guest.code === code) || {
      code: "",
      name: "",
      tickets: 0,
    }
  );
};

export const useGuest = create<GuetsProps>(() => {
  const code = getCodeFromURL();
  const guest = getGuestByCode(code);

  return {
    code: guest.code,
    name: guest.name,
    tickets: guest.tickets,
  };
});
