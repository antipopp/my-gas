import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "../utils/api";

import DashboardLayout from "../components/Dashboard/DashboardLayout";
import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
