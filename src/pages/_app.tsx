import React from "react";
import { AppProps } from "next/app";

// components
import { MuiPickersUtilsProvider } from "@/providers/MuiPickersUtilsProvider";
import { ReactReduxProvider } from "@/providers/ReactReduxProvider";
import { ErrorBoundary } from "@/providers/ErrorBoundary";

// fullcalendar styles
import "@fullcalendar/common/main.css";
import "@fullcalendar/timeline/main.css";
import "@fullcalendar/resource-timeline/main.css";

// fundamental styles
import "@/styles/reset.css";
import "@/styles/core.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ReactReduxProvider>
        <MuiPickersUtilsProvider>
          <Component {...pageProps} />
        </MuiPickersUtilsProvider>
      </ReactReduxProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
