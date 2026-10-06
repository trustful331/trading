import { setRole, setToken, setUser } from "src/store/slices/auth";
import type { AppDispatch } from "src/store";

// Design-only stand-in. Real login will call the API later.
export const previewSignIn = () => (dispatch: AppDispatch) => {
  dispatch(setToken("design-preview"));
  dispatch(setRole("CLIENT"));
  dispatch(
    setUser({
      id: "demo-client",
      firstName: "Amina",
      lastName: "Rahman",
      email: "amina.rahman@email.com",
    }),
  );
};
