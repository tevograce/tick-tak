import clsx from "clsx";
import "../styles/global.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin", "cyrillic"], display: "swap" });

export default function App({ Component, getProps }) {
  return (
    <div className={clsx(inter.className, "text-slate-900")}>
      <Component {...getProps} />
      <div id="modals"></div>
    </div>
  );
}
