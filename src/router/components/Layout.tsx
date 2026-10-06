import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "!bg-ink-2 !text-paper !border !border-white/10",
        }}
      />
      <Outlet />
    </>
  );
}
